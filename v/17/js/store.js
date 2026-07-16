// -----------------------------------------------------------------------
// store.js — local-first workspace state.
//
// AutoSelector's vehicle CATALOG is static data (js/data/vehicles.js,
// designed to map 1:1 onto SQLite tables — see docs/DATA.md). What the user
// DOES with it — favorites, recents, notes, saved searches, finder answers,
// settings, and the undo/history log — lives here, in one versioned
// localStorage document.
//
// Forward compatibility contract: the document carries `schema` (an int).
// Every deploy runs migrate() which upgrades any older document IN PLACE and
// never deletes unknown keys (so a newer build's data survives a rollback to
// an older /v/<n>/ snapshot as long as the core keys keep their meaning).
// -----------------------------------------------------------------------

import { VEHICLES, DATA_VERSION } from './data/vehicles.js';
import { uuid } from './ui.js';

const KEY = 'as.workspace';
const SCHEMA = 1;                     // bump on breaking shape changes + add a migration below
const MAX_RECENTS = 24;
const MAX_ACTIVITY = 200;
const MAX_UNDO = 80;

function blank(){
  return {
    schema: SCHEMA,
    createdAt: Date.now(),
    favorites: [],                    // [vehicleId] — ordered, newest first
    recents: [],                      // [{id, at}] — vehicles opened, newest first
    notes: {},                        // vehicleId -> free-text note
    compare: [],                      // [vehicleId] — current compare tray (max 4)
    shortlist: [],                    // [vehicleId] — the "cart": an unlimited holding list you build up, then send to Compare
    savedSearches: [],                // [{id, name, filters, at}]
    finderRuns: [],                   // [{id, finder, answers, resultIds, at}] — finished finder sessions
    activity: [],                     // [{id, at, kind, text, vehicleId?}] — newest first
    settings: {
      tourDone:false, simpleMode:false, reduceMotion:false,
      pinnedVersion:'',               // '/v/<n>/app/' to run an archived build
      profile:{ name:'', persona:'' } // light personalization for Home
    },
    dbProfiles: [],                   // [{id,name,kind:'http-json'|'sqlite-file'|'postgres',url,notes,lastSync}]
  };
}

// ---- migrations ----------------------------------------------------------
// Each entry upgrades FROM that schema number to the next. Keep these tiny
// and additive; never drop keys we don't recognize.
const MIGRATIONS = {
  // 1 -> 2 example (when needed):
  // 1: (d)=>{ d.settings.newThing ??= 'default'; d.schema = 2; },
};

function migrate(d){
  if(!d || typeof d!=='object') return blank();
  if(typeof d.schema!=='number') d.schema = 1;
  while(MIGRATIONS[d.schema]) MIGRATIONS[d.schema](d);
  // Backfill any keys added additively (safe on every load).
  const b = blank();
  for(const k of Object.keys(b)) if(!(k in d)) d[k] = b[k];
  for(const k of Object.keys(b.settings)) if(!(k in d.settings)) d.settings[k] = b.settings[k];
  return d;
}

// ---- core document -------------------------------------------------------
let doc = load();
const listeners = new Set();

function load(){
  try{ return migrate(JSON.parse(localStorage.getItem(KEY)||'null')) || blank(); }
  catch{ return blank(); }
}
function save(){
  try{ localStorage.setItem(KEY, JSON.stringify(doc)); }catch{}
  listeners.forEach(fn=>{ try{ fn(); }catch{} });
}

// ---- undo / redo ----------------------------------------------------------
// Snapshot-based: before every user-visible mutation we push a labelled
// snapshot of the mutable document onto the undo stack. Cheap because the
// workspace doc is small (the 300+ vehicle catalog is NOT in it).
const undoStack = [];
const redoStack = [];
function snapshot(label){
  undoStack.push({ label, at:Date.now(), doc: JSON.stringify(doc) });
  if(undoStack.length>MAX_UNDO) undoStack.shift();
  redoStack.length = 0;
}

export const Store = new (class {
  // ---- catalog access ---------------------------------------------------
  vehicles(){ return VEHICLES; }
  vehicle(id){ return VEHICLES.find(v=>v.id===id) || null; }
  dataVersion(){ return DATA_VERSION; }
  makes(){ return [...new Set(VEHICLES.map(v=>v.make))].sort(); }

  // ---- change subscription ------------------------------------------------
  onChange(fn){ listeners.add(fn); return ()=>listeners.delete(fn); }

  // ---- favorites ----------------------------------------------------------
  favorites(){ return doc.favorites.map(id=>this.vehicle(id)).filter(Boolean); }
  isFav(id){ return doc.favorites.includes(id); }
  toggleFav(id){
    const v = this.vehicle(id); if(!v) return false;
    snapshot(this.isFav(id) ? `Remove ${v.make} ${v.model} from favorites` : `Favorite ${v.make} ${v.model}`);
    if(this.isFav(id)){ doc.favorites = doc.favorites.filter(x=>x!==id); this.logActivity('unfav', `Removed ${v.make} ${v.model} from favorites`, id); }
    else { doc.favorites.unshift(id); this.logActivity('fav', `Added ${v.make} ${v.model} to favorites`, id); }
    save(); return this.isFav(id);
  }

  // ---- recents --------------------------------------------------------------
  recents(){ return doc.recents.map(r=>({ ...r, vehicle:this.vehicle(r.id) })).filter(r=>r.vehicle); }
  touchRecent(id){
    if(!this.vehicle(id)) return;
    doc.recents = [{id, at:Date.now()}, ...doc.recents.filter(r=>r.id!==id)].slice(0, MAX_RECENTS);
    save();  // recents are ambient — not undoable, not activity-logged
  }

  // ---- notes ---------------------------------------------------------------
  note(id){ return doc.notes[id]||''; }
  setNote(id, text){
    const v=this.vehicle(id); if(!v) return;
    snapshot(`Edit note on ${v.make} ${v.model}`);
    if(text) doc.notes[id]=text; else delete doc.notes[id];
    this.logActivity('note', `Updated note on ${v.make} ${v.model}`, id);
    save();
  }

  // ---- compare tray ----------------------------------------------------------
  compareIds(){ return doc.compare.filter(id=>this.vehicle(id)); }
  inCompare(id){ return doc.compare.includes(id); }
  toggleCompare(id){
    const v=this.vehicle(id); if(!v) return {ok:false};
    if(this.inCompare(id)){
      snapshot(`Remove ${v.model} from compare`);
      doc.compare = doc.compare.filter(x=>x!==id); save(); return {ok:true, on:false};
    }
    if(doc.compare.length>=4) return {ok:false, full:true};
    snapshot(`Add ${v.model} to compare`);
    doc.compare.push(id); this.logActivity('compare', `Added ${v.make} ${v.model} to compare`, id);
    save(); return {ok:true, on:true};
  }
  clearCompare(){ snapshot('Clear compare'); doc.compare=[]; save(); }

  // ---- shortlist (the "cart") ------------------------------------------------
  // Unlimited holding list you build up while browsing, then hand off to
  // Compare (which stays capped at 4). Persisted like everything else.
  shortlistIds(){ return doc.shortlist.filter(id=>this.vehicle(id)); }
  shortlist(){ return this.shortlistIds().map(id=>this.vehicle(id)); }
  inShortlist(id){ return doc.shortlist.includes(id); }
  toggleShortlist(id){
    const v=this.vehicle(id); if(!v) return {ok:false};
    if(this.inShortlist(id)){
      snapshot(`Remove ${v.model} from shortlist`);
      doc.shortlist = doc.shortlist.filter(x=>x!==id); save(); return {ok:true, on:false};
    }
    snapshot(`Add ${v.model} to shortlist`);
    doc.shortlist.push(id); this.logActivity('shortlist', `Added ${v.make} ${v.model} to your shortlist`, id);
    save(); return {ok:true, on:true};
  }
  // Bulk add (from the browse multi-select bar). Returns how many were new.
  addManyToShortlist(ids){
    const fresh = ids.filter(id=>this.vehicle(id) && !doc.shortlist.includes(id));
    if(!fresh.length) return 0;
    snapshot(`Add ${fresh.length} to shortlist`);
    doc.shortlist.push(...fresh);
    this.logActivity('shortlist', `Added ${fresh.length} vehicle${fresh.length===1?'':'s'} to your shortlist`);
    save(); return fresh.length;
  }
  removeFromShortlist(id){ const v=this.vehicle(id); if(!v||!this.inShortlist(id)) return;
    snapshot(`Remove ${v.model} from shortlist`); doc.shortlist=doc.shortlist.filter(x=>x!==id); save(); }
  clearShortlist(){ if(!doc.shortlist.length) return; snapshot('Clear shortlist'); doc.shortlist=[]; save(); }
  // Load up to 4 shortlisted vehicles into the compare tray (for "Compare now").
  compareFromShortlist(ids){
    const pick = (ids && ids.length ? ids : doc.shortlist).filter(id=>this.vehicle(id)).slice(0,4);
    snapshot('Send to compare'); doc.compare = [...pick]; save(); return pick.length;
  }

  // ---- saved searches ---------------------------------------------------------
  savedSearches(){ return doc.savedSearches; }
  saveSearch(name, filters){
    snapshot(`Save search "${name}"`);
    doc.savedSearches.unshift({ id:uuid(), name, filters, at:Date.now() });
    this.logActivity('search', `Saved search "${name}"`);
    save();
  }
  deleteSearch(id){
    const s = doc.savedSearches.find(x=>x.id===id); if(!s) return;
    snapshot(`Delete search "${s.name}"`);
    doc.savedSearches = doc.savedSearches.filter(x=>x.id!==id); save();
  }

  // ---- finder runs ---------------------------------------------------------
  finderRuns(){ return doc.finderRuns; }
  recordFinderRun(finder, answers, resultIds){
    doc.finderRuns.unshift({ id:uuid(), finder, answers, resultIds, at:Date.now() });
    doc.finderRuns = doc.finderRuns.slice(0, 30);
    this.logActivity('finder', `Finished ${finder} — ${resultIds.length} match${resultIds.length===1?'':'es'}`);
    save();
  }

  // ---- activity feed ---------------------------------------------------------
  activity(){ return doc.activity; }
  logActivity(kind, text, vehicleId){
    doc.activity.unshift({ id:uuid(), at:Date.now(), kind, text, vehicleId });
    doc.activity = doc.activity.slice(0, MAX_ACTIVITY);
    // caller saves
  }

  // ---- settings ---------------------------------------------------------------
  settings(){ return doc.settings; }
  setSetting(k, v){ doc.settings[k]=v; save(); }
  profile(){ return doc.settings.profile||{name:'',persona:''}; }
  setProfile(p){ doc.settings.profile = { ...this.profile(), ...p }; save(); }

  // ---- database profiles (Settings → Data) -----------------------------------
  dbProfiles(){ return doc.dbProfiles; }
  addDbProfile(p){ snapshot(`Add data source "${p.name}"`); doc.dbProfiles.push({ id:uuid(), lastSync:0, ...p }); save(); }
  updateDbProfile(id, patch){ const p=doc.dbProfiles.find(x=>x.id===id); if(!p) return; Object.assign(p, patch); save(); }
  deleteDbProfile(id){ const p=doc.dbProfiles.find(x=>x.id===id); if(!p) return;
    snapshot(`Remove data source "${p.name}"`); doc.dbProfiles = doc.dbProfiles.filter(x=>x.id!==id); save(); }

  // ---- undo / redo / history ----------------------------------------------------
  canUndo(){ return undoStack.length>0; }
  canRedo(){ return redoStack.length>0; }
  undoLabel(){ return undoStack[undoStack.length-1]?.label||''; }
  undo(){
    const s = undoStack.pop(); if(!s) return null;
    redoStack.push({ label:s.label, at:Date.now(), doc: JSON.stringify(doc) });
    doc = migrate(JSON.parse(s.doc)); save(); return s.label;
  }
  redo(){
    const s = redoStack.pop(); if(!s) return null;
    undoStack.push({ label:s.label, at:Date.now(), doc: JSON.stringify(doc) });
    doc = migrate(JSON.parse(s.doc)); save(); return s.label;
  }
  historyEntries(){ return [...undoStack].reverse(); }

  // ---- import / export -----------------------------------------------------------
  exportJSON(){ return JSON.stringify({ app:'autoselector', exportedAt:new Date().toISOString(), dataVersion:DATA_VERSION, workspace:doc }, null, 2); }
  importJSON(text){
    const parsed = JSON.parse(text);
    const incoming = parsed.workspace || parsed;      // accept bare documents too
    snapshot('Import workspace');
    doc = migrate(incoming); save();
  }
  resetAll(){ snapshot('Reset workspace'); doc = blank(); save(); }
})();

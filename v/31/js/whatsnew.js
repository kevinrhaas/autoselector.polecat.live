// whatsnew.js — the in-app "What's new" panel.
//
// The release data lives in js/changelog.js (a PURE DATA module that sibling
// apps fetch and parse — see the note there). All UI for it lives HERE so the
// data file stays import-free and parseable everywhere.
import { CHANGELOG } from './changelog.js';
import { WHATSNEXT } from './whatsnext.js';
import { el, modal, fmtDateTime } from './ui.js';
import { icon } from './icons.js';

const SEEN_KEY = 'as.changelog.seen';   // last-seen version int

export function latestVersion(){ return CHANGELOG[0]?.v || 0; }
export function hasUnread(){
  try{ return latestVersion() > (parseInt(localStorage.getItem(SEEN_KEY)||'0',10)); }
  catch{ return false; }
}
export function markRead(){ try{ localStorage.setItem(SEEN_KEY, String(latestVersion())); }catch{} }

// ts is ISO-8601 UTC; show it in Central Time to match the fleet convention.
function whenLabel(e){ return e.ts ? fmtDateTime(e.ts) : ''; }

const KIND_LABEL = { feature:'New', polish:'Polish', fix:'Fix', data:'Data' };

export function openWhatsNew(){
  markRead();
  const body = el('div',{class:'wn-list'});
  CHANGELOG.slice(0, 20).forEach(e=>{
    const head = el('div',{style:'display:flex;align-items:center;gap:9px;flex-wrap:wrap'});
    head.append(el('span',{class:'chip', text:`v${e.v}`}));
    if(e.kind) head.append(el('span',{class:'chip', text:KIND_LABEL[e.kind]||e.kind}));
    head.append(el('b',{text:e.title}));
    const when = whenLabel(e);
    if(when) head.append(el('span',{class:'muted tiny', text:when}));
    const ul = el('ul',{style:'margin:8px 0 0;padding-left:20px'});
    (e.items||[]).forEach(t=>ul.append(el('li',{class:'muted', style:'font-size:13px;margin-bottom:4px', text:t})));
    body.append(el('div',{style:'padding:12px 0;border-bottom:1px solid var(--border)'},[head, ul]));
  });
  return modal({ title:"What's new", icon:icon('sparkle',20), body, wide:true });
}

// ---- "What's next" panel (renders the pure-data js/whatsnext.js roadmap) ----
export function openWhatsNext(){
  const LBL = { next:'Up next', planned:'Planned', exploring:'Exploring' };
  const body = el('div');
  ['next','planned','exploring'].forEach(st=>{
    const items = WHATSNEXT.filter(w=>w.status===st);
    if(!items.length) return;
    body.append(el('div',{class:'sc-group-title muted tiny', text:LBL[st]}));
    items.forEach(w=>{
      body.append(el('div',{style:'padding:10px 0;border-bottom:1px solid var(--border)'},[
        el('b',{text:w.title}),
        el('div',{class:'muted', style:'font-size:13px;margin-top:3px', text:w.detail}),
      ]));
    });
  });
  return modal({ title:"What's next", icon:icon('road',20), body, wide:true });
}

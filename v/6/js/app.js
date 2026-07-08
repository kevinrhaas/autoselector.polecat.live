// app.js — main controller: boot, routing, topbar, global glue.
//
// AutoSelector is OPEN — there is no access gate. The optional admin token
// (?token=<admin-private-key>) only unlocks the Admin section for catalog
// maintenance tools; everyone else goes straight in.
import { Store } from './store.js';
import { Access } from './access.js';
import { applyTheme, toggleMode, effectiveMode } from './theme.js';
import { buildRail } from './shell.js';
import { el, $, toast } from './ui.js';
import { icon } from './icons.js';
import { renderHome } from './views/home.js';
import { renderBrowse } from './views/browse.js';
import { renderMatchmaker } from './views/matchmaker.js';
import { renderLifestyles } from './views/lifestyles.js';
import { renderBudget } from './views/budget.js';
import { renderGarage } from './views/garage.js';
import { renderCompare } from './views/compare.js';
import { renderHistory } from './views/historyview.js';
import { renderDocs } from './views/docs.js';
import { renderAdmin } from './views/admin.js';
import { renderSettings } from './views/settings.js';
import { openVehicle } from './views/vehicle.js';
import { openSearch } from './views/search.js';
import { openWhatsNew, hasUnread } from './changelog.js';
import { maybeStartTour } from './tour.js';
import { openShortcuts } from './shortcuts.js';

const TITLES = { home:'Home', browse:'All Vehicles', matchmaker:'Match Maker', lifestyles:'Lifestyles',
  budget:'Budget Explorer', garage:'My Garage', compare:'Compare', history:'History',
  docs:'Documentation', admin:'Admin', settings:'Settings' };
const RENDERERS = { home:renderHome, browse:renderBrowse, matchmaker:renderMatchmaker,
  lifestyles:renderLifestyles, budget:renderBudget, garage:renderGarage, compare:renderCompare,
  history:renderHistory, docs:renderDocs, admin:renderAdmin, settings:renderSettings };

let rail, view, topTitle;
let currentSection='home';

// ---- version pinning -----------------------------------------------------
// If the user pinned an earlier build in Settings → Version, honor it — but
// only from the canonical /app/ (archived builds live under /v/<n>/ and must
// not redirect, or we'd loop). Runs at import, before anything renders.
(function honorPinnedVersion(){
  try{
    const onCanonical = /^\/app\/?(index\.html)?$/.test(location.pathname);
    if(!onCanonical) return;
    const pin = JSON.parse(localStorage.getItem('as.workspace')||'{}')?.settings?.pinnedVersion;
    if(pin && typeof pin==='string' && /^\/v\/\d+\/app\/?$/.test(pin)){
      location.replace(pin + location.hash);
    }
  }catch{}
})();

async function boot(){
  applyTheme();
  applySimple();
  await Access.init();                 // consumes ?token= for optional admin unlock

  const app = $('#app');
  app.innerHTML='';
  const railEl = el('nav',{id:'rail', 'aria-label':'Sections'});
  const main = el('div',{id:'main'});
  app.append(railEl, main, el('div',{class:'rail-backdrop', onclick:()=>window.__rail.setOpen(false)}));

  // If we're inside an archived /v/<n>/ build, say so and offer the way back.
  const verMatch = location.pathname.match(/^\/v\/(\d+)\/app\//);
  if(verMatch){
    main.append(el('div',{class:'ver-banner'},[
      el('span',{html:icon('history',15)}),
      el('span',{html:`You're viewing archived version <b>v${verMatch[1]}</b>.`}),
      el('button',{class:'btn sm', text:'Back to latest', onclick:()=>{
        Store.setSetting('pinnedVersion',''); location.href='/app/'; }}),
    ]));
  }

  const topbar = el('div',{class:'topbar'});
  topTitle = el('h1',{text:'Home'});
  const menuBtn = el('button',{class:'btn icon ghost topbar-menu', 'aria-label':'Menu', html:icon('menu'), onclick:()=>window.__rail.setOpen(true)});
  const search = el('button',{class:'topbar-search', onclick:()=>openSearch({ onOpenVehicle:openVehicleById })},[
    el('span',{html:icon('search',16), style:'display:inline-flex'}),
    el('span',{text:'Search 2026 vehicles…'}),
    el('kbd',{text:'/'}),
  ]);
  const undoBtn = el('button',{class:'btn icon ghost', title:'Undo (Ctrl/⌘+Z)', 'aria-label':'Undo', html:icon('undo'), onclick:()=>doUndo()});
  const wn = el('button',{class:'btn icon ghost wn-btn'+(hasUnread()?' has-unread':''), title:"What's new", 'aria-label':"What's new",
    html:icon('sparkle'), onclick:()=>{ openWhatsNew(); wn.classList.remove('has-unread'); }});
  const themeBtn = el('button',{class:'btn icon ghost', title:'Toggle light / dark', 'aria-label':'Toggle theme',
    html:icon(effectiveMode()==='dark'?'sun':'moon'),
    onclick:()=>{ toggleMode(); themeBtn.innerHTML = icon(effectiveMode()==='dark'?'sun':'moon'); }});
  topbar.append(menuBtn, topTitle, el('div',{class:'sp'}), search, undoBtn, wn, themeBtn);

  view = el('div',{class:'view', id:'view'});
  main.append(topbar, view);

  window.__rail = rail = buildRail(railEl, { onNav:navigate, isAdmin:Access.isAdmin() });
  Store.onChange(()=>rail.setBadge('compare', Store.compareIds().length));
  rail.setBadge('compare', Store.compareIds().length);

  wireKeyboard();
  window.addEventListener('hashchange', route);
  route();
  maybeStartTour();
}

function applySimple(){
  document.documentElement.setAttribute('data-simple', Store.settings().simpleMode ? '1':'0');
  if(Store.settings().reduceMotion) document.documentElement.setAttribute('data-reduce-motion','1');
  else document.documentElement.removeAttribute('data-reduce-motion');
}

// ---- routing ---------------------------------------------------------------
// #<section> for views; #vehicle/<id> deep-links open the detail modal on top.
function route(){
  const h = location.hash.replace(/^#\/?/,'');
  const [head, arg] = h.split('/');
  if(head==='vehicle' && arg){
    if(!RENDERERS[currentSection]) currentSection='home';
    render(currentSection);
    openVehicleById(decodeURIComponent(arg));
    return;
  }
  const section = RENDERERS[head] ? head : 'home';
  render(section);
}

export function navigate(section, opts={}){
  if(!RENDERERS[section]) section='home';
  if(location.hash !== '#'+section) history.pushState(null,'','#'+section);
  render(section, opts);
  if(window.innerWidth<=820) window.__rail.setOpen(false);
}

function render(section, opts={}){
  currentSection=section;
  rail.setActive(section);
  topTitle.textContent = TITLES[section]||'AutoSelector';
  view.innerHTML='';
  view.scrollTop=0;
  const ctx = { navigate, openVehicle:openVehicleById, refresh:()=>render(section), applySimple, rebuildRail:()=>{
    window.__rail = rail = buildRail($('#rail'), { onNav:navigate, isAdmin:Access.isAdmin() });
    rail.setActive(currentSection);
    rail.setBadge('compare', Store.compareIds().length);
  }, ...opts };
  // Error boundary: a throwing view renders a friendly card instead of a
  // blank screen (and the smoke test fails on the marker text).
  try{ RENDERERS[section](view, ctx); }
  catch(err){
    console.error(err);
    view.innerHTML='';
    view.append(el('div',{class:'card pad', style:'max-width:520px;margin:40px auto;text-align:center'},[
      el('h3',{text:'This view hit a snag'}),
      el('p',{class:'muted', text:String(err?.message||err)}),
      el('button',{class:'btn primary', text:'Back to Home', onclick:()=>navigate('home')}),
    ]));
  }
}

function openVehicleById(id){
  const v = Store.vehicle(id);
  if(!v){ toast('Vehicle not found',{kind:'err'}); return; }
  Store.touchRecent(id);
  openVehicle(v, { navigate });
}

function doUndo(){
  const label = Store.undo();
  if(label) toast('Undone', { body:label, kind:'ok' });
  else toast('Nothing to undo');
  route();
}
function doRedo(){
  const label = Store.redo();
  if(label) toast('Redone', { body:label, kind:'ok' });
  else toast('Nothing to redo');
  route();
}

// ---- global keyboard ---------------------------------------------------------
function wireKeyboard(){
  document.addEventListener('keydown', (e)=>{
    const typing = /input|textarea|select/i.test(document.activeElement?.tagName||'');
    if((e.metaKey||e.ctrlKey) && e.key==='\\'){ e.preventDefault(); window.__rail.setOpen(!$('#rail').classList.contains('open')); return; }
    if((e.metaKey||e.ctrlKey) && !e.shiftKey && e.key.toLowerCase()==='z' && !typing){ e.preventDefault(); doUndo(); return; }
    if((e.metaKey||e.ctrlKey) && e.shiftKey && e.key.toLowerCase()==='z' && !typing){ e.preventDefault(); doRedo(); return; }
    if(typing || e.metaKey || e.ctrlKey || e.altKey) return;
    if(e.key==='/' ){ e.preventDefault(); openSearch({ onOpenVehicle:openVehicleById }); }
    else if(e.key==='?'){ e.preventDefault(); openShortcuts(); }
    else if(e.key>='1' && e.key<='5' && !document.querySelector('.modal-back')){
      navigate(['home','browse','matchmaker','lifestyles','budget'][+e.key-1]);
    }
  });
}

boot();

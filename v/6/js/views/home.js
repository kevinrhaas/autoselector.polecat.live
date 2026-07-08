// views/home.js — the landing view: hello, key actions into every finder,
// favorites, recents, saved searches, and the activity feed.
import { el, relTime, escapeHtml } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { vtileGrid, emptyState, money } from './shared.js';
import { openWhatsNext } from '../whatsnext.js';

export function renderHome(view, ctx){
  const all = Store.vehicles();
  const favs = Store.favorites();
  const recents = Store.recents();

  // ---- hero ----
  const evCount = all.filter(v=>(v.powertrains||[]).some(p=>p.type==='ev')).length;
  const under30 = all.filter(v=>v.priceFrom!=null && v.priceFrom<30000).length;
  view.append(el('div',{class:'home-hero'},[
    el('div',{},[
      el('h2',{text: greeting()}),
      el('div',{class:'hh-sub', text:`${all.length} vehicles · ${Store.makes().length} brands · every 2026 model sold in the US, ready to explore.`}),
    ]),
  ]));

  // ---- KPI strip ----
  const kpis = el('div',{class:'kpis'});
  kpi(kpis, all.length, '2026 models', 'car');
  kpi(kpis, Store.makes().length, 'Brands', 'flag');
  kpi(kpis, evCount, 'Fully electric', 'plug');
  kpi(kpis, under30, 'Under $30k', 'dollar');
  kpi(kpis, favs.length, 'Your favorites', 'heart');
  view.append(kpis);

  // ---- key actions ----
  const acts = el('div',{class:'quick-acts'});
  qa(acts, 'target', 'Match Maker', 'Answer questions, whittle the market', ()=>ctx.navigate('matchmaker'));
  qa(acts, 'users', 'Lifestyles', 'Pick the driver you are', ()=>ctx.navigate('lifestyles'));
  qa(acts, 'chart', 'Budget Explorer', 'Slide the money, see what fits', ()=>ctx.navigate('budget'));
  qa(acts, 'list', 'Browse everything', 'Filters for the details that matter', ()=>ctx.navigate('browse'));
  if(Store.compareIds().length>=2) qa(acts, 'compare', 'Compare', `${Store.compareIds().length} vehicles lined up`, ()=>ctx.navigate('compare'));
  qa(acts, 'road', "What's next", 'See what we’re building for you', ()=>openWhatsNext());
  view.append(acts);

  // ---- favorites ----
  section(view, 'Your favorites', favs.length ? `${favs.length} saved` : '');
  if(favs.length) view.append(vtileGrid(favs.slice(0,6), ctx));
  else view.append(emptyState({ title:'No favorites yet', body:'Tap the heart on any vehicle — it lands here and in your Garage.', icon:'heart' }));

  // ---- recents ----
  if(recents.length){
    section(view, 'Recently viewed', '');
    view.append(vtileGrid(recents.slice(0,6).map(r=>r.vehicle), ctx));
  }

  // ---- your brands (favorite manufacturers from Settings → Profile) ----
  const favMakes = Store.profile().favMakes||[];
  if(favMakes.length){
    section(view, 'Your brands', '');
    const row = el('div',{class:'chip-row', style:'margin-bottom:18px'});
    favMakes.forEach(m=>{
      row.append(el('button',{class:'pill', text:m,
        onclick:()=>ctx.navigate('browse',{ filters:{ makes:[m] } })}));
    });
    row.append(el('button',{class:'pill', text:'✎ Edit', onclick:()=>ctx.navigate('settings')}));
    view.append(row);
  }

  // ---- saved searches ----
  const searches = Store.savedSearches();
  if(searches.length){
    section(view, 'Saved searches', '');
    const row = el('div',{class:'chip-row', style:'margin-bottom:18px'});
    searches.slice(0,8).forEach(s=>{
      row.append(el('button',{class:'pill', html:`${icon('search',13)} ${escapeHtml(s.name)}`,
        onclick:()=>ctx.navigate('browse',{ filters:s.filters })}));
    });
    view.append(row);
  }

  // ---- activity ----
  const act = Store.activity().slice(0,10);
  if(act.length){
    section(view, 'Recent activity', '');
    const list = el('div',{class:'meta-list', style:'max-width:640px'});
    act.forEach(a=>{
      list.append(el('div',{class:'meta-item', style:'cursor:'+(a.vehicleId?'pointer':'default'),
        onclick:()=>{ if(a.vehicleId) ctx.openVehicle(a.vehicleId); }},[
        el('span',{html:icon(ACT_ICON[a.kind]||'activity',15), style:'color:var(--brand-2);display:inline-flex'}),
        el('span',{text:a.text, style:'flex:1'}),
        el('span',{class:'muted tiny', text:relTime(a.at)}),
      ]));
    });
    view.append(list);
  }
}

const ACT_ICON = { fav:'heart', unfav:'heart', note:'edit', compare:'compare', search:'search', finder:'target' };

function greeting(){
  const name = Store.profile().name;
  const h = new Date().getHours();
  const part = h<5?'Up late':h<12?'Good morning':h<17?'Good afternoon':'Good evening';
  return name ? `${part}, ${name}!` : `${part}! Let’s find your car.`;
}
function kpi(root, val, lbl, ic){
  root.append(el('div',{class:'kpi'},[
    el('div',{class:'k-val', text:String(val)}),
    el('div',{class:'k-lbl', text:lbl}),
    el('span',{class:'k-ic', html:icon(ic,20)}),
  ]));
}
function qa(root, ic, title, sub, onclick){
  root.append(el('button',{class:'qa-card', onclick},[
    el('span',{class:'qa-ic', html:icon(ic,20)}),
    el('span',{},[ document.createTextNode(title), el('small',{text:sub}) ]),
  ]));
}
function section(view, title, sub){
  view.append(el('div',{class:'section-head', style:'margin-top:10px'},[
    el('h2',{text:title}), sub?el('div',{class:'sub', text:sub}):null ]));
}

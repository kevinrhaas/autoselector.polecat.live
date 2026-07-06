// views/garage.js — favorites with notes, saved searches, and finder history.
import { el, relTime, escapeHtml, confirmDialog } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { vtileGrid, emptyState } from './shared.js';

export function renderGarage(view, ctx){
  const favs = Store.favorites();

  view.append(el('div',{class:'section-head'},[
    el('h2',{text:'My Garage'}),
    el('div',{class:'sub', text:'Everything you’ve saved — favorites, searches, and past finder runs.'}),
  ]));

  if(favs.length){
    view.append(vtileGrid(favs, ctx));
    const row = el('div',{style:'display:flex;gap:8px;margin-top:14px;flex-wrap:wrap'});
    if(favs.length>=2) row.append(el('button',{class:'btn primary', html:`${icon('compare',15)} Compare favorites`, onclick:()=>{
      Store.clearCompare();
      favs.slice(0,4).forEach(v=>Store.toggleCompare(v.id));
      ctx.navigate('compare');
    }}));
    view.append(row);
  } else {
    view.append(emptyState({ title:'Your garage is empty', body:'Heart a few vehicles in any finder and they’ll park here.', icon:'garage' }));
  }

  // notes on favorites
  const noted = favs.filter(v=>Store.note(v.id));
  if(noted.length){
    view.append(el('div',{class:'section-head', style:'margin-top:20px'},[ el('h2',{text:'Your notes'}) ]));
    const list = el('div',{class:'meta-list', style:'max-width:680px'});
    noted.forEach(v=>list.append(el('div',{class:'meta-item', style:'cursor:pointer', onclick:()=>ctx.openVehicle(v.id)},[
      el('b',{text:`${v.make} ${v.model}`, style:'flex:none'}),
      el('span',{class:'muted', text:Store.note(v.id), style:'flex:1'}),
    ])));
    view.append(list);
  }

  // saved searches
  const searches = Store.savedSearches();
  view.append(el('div',{class:'section-head', style:'margin-top:20px'},[ el('h2',{text:'Saved searches'}) ]));
  if(searches.length){
    const list = el('div',{class:'meta-list', style:'max-width:680px'});
    searches.forEach(s=>{
      list.append(el('div',{class:'meta-item'},[
        el('span',{html:icon('search',15), style:'color:var(--brand-2);display:inline-flex'}),
        el('b',{text:s.name, style:'flex:1;cursor:pointer', onclick:()=>ctx.navigate('browse',{filters:s.filters})}),
        el('span',{class:'muted tiny', text:relTime(s.at)}),
        el('button',{class:'btn icon sm ghost', 'aria-label':'Delete', html:icon('trash',14), onclick:async ()=>{
          if(await confirmDialog({ title:'Delete saved search?', message:`“${s.name}” — you can undo this afterwards.`, okText:'Delete', danger:true }))
            { Store.deleteSearch(s.id); ctx.refresh(); }
        }}),
      ]));
    });
    view.append(list);
  } else view.append(el('p',{class:'muted', text:'Save a filter set from All Vehicles and rerun it any time.'}));

  // finder history
  const runs = Store.finderRuns();
  if(runs.length){
    view.append(el('div',{class:'section-head', style:'margin-top:20px'},[ el('h2',{text:'Past finder runs'}) ]));
    const list = el('div',{class:'meta-list', style:'max-width:680px'});
    runs.slice(0,8).forEach(r=>{
      list.append(el('div',{class:'meta-item'},[
        el('span',{html:icon('target',15), style:'color:var(--accent);display:inline-flex'}),
        el('span',{style:'flex:1', html:`<b>${escapeHtml(r.finder)}</b> <span class="muted">→ ${r.resultIds.length} match${r.resultIds.length===1?'':'es'}</span>`}),
        el('span',{class:'muted tiny', text:relTime(r.at)}),
      ]));
    });
    view.append(list);
  }
}

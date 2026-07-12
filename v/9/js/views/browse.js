// views/browse.js — the full 2026 catalog with live filters. Every filter
// updates the grid + count instantly; the current filter set can be saved as
// a named search (restored from Home or the toolbar).
import { el, toast, promptDialog, debounce } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { vtileGrid, emptyState, money, PT_LABEL } from './shared.js';

export const BODY_STYLES = ['sedan','hatchback','coupe','convertible','wagon','suv','minivan','pickup','van'];
const DRIVES = ['FWD','RWD','AWD','4WD'];

export function defaultFilters(){
  return { q:'', makes:[], bodies:[], pts:[], drives:[], priceMax:0, seatsMin:0,
    spareFull:false, physClimate:false, physAudio:false, lightInt:false, sort:'price' };
}

// The single source of truth for filter logic — the finders reuse this via
// applyFilters(vehicles, filters).
export function applyFilters(vehicles, f){
  let list = vehicles.filter(v=>{
    if(f.q){ const s=`${v.make} ${v.manufacturer||''} ${v.model} ${v.segment}`.toLowerCase(); if(!s.includes(f.q.toLowerCase())) return false; }
    if(f.makes.length && !f.makes.includes(v.make)) return false;
    if(f.bodies.length && !f.bodies.includes(v.bodyStyle)) return false;
    if(f.pts.length && !(v.powertrains||[]).some(p=>f.pts.includes(p.type))) return false;
    if(f.drives.length && !(v.powertrains||[]).some(p=>(p.drive||[]).some(d=>f.drives.includes(d)))) return false;
    if(f.priceMax>0 && (v.priceFrom==null || v.priceFrom>f.priceMax)) return false;
    if(f.seatsMin>0 && !(v.seats||[]).some(s=>s>=f.seatsMin)) return false;
    if(f.spareFull && v.spareTire!=='full-size') return false;
    if(f.physClimate && !v.physicalControls?.climate) return false;
    if(f.physAudio && !v.physicalControls?.audio) return false;
    if(f.lightInt && !v.interior?.lightInterior) return false;
    return true;
  });
  const by = {
    price:(a,b)=>(a.priceFrom??9e9)-(b.priceFrom??9e9),
    priceDesc:(a,b)=>(b.priceFrom??0)-(a.priceFrom??0),
    name:(a,b)=>`${a.make} ${a.model}`.localeCompare(`${b.make} ${b.model}`),
    seats:(a,b)=>Math.max(...(b.seats||[0]))-Math.max(...(a.seats||[0])),
    mpg:(a,b)=>Math.max(...(b.powertrains||[]).map(p=>p.mpgCombined||0))-Math.max(...(a.powertrains||[]).map(p=>p.mpgCombined||0)),
  };
  return list.sort(by[f.sort]||by.price);
}

export function renderBrowse(view, ctx){
  const all = Store.vehicles();
  let f = ctx.filters ? { ...defaultFilters(), ...ctx.filters } : defaultFilters();

  view.append(el('div',{class:'section-head'},[
    el('h2',{text:`Every 2026 vehicle sold in the US`}),
    el('div',{class:'sub', text:`${all.length} models · ${Store.makes().length} brands · updated continuously`}),
  ]));

  // ---- toolbar ----
  const bar = el('div',{class:'toolbar'});
  const q = el('input',{class:'input grow', type:'search', placeholder:'Filter by make, model, segment…', value:f.q});
  q.addEventListener('input', debounce(()=>{ f.q=q.value.trim(); update(); },120));
  const sort = el('select',{class:'input', style:'width:auto', 'aria-label':'Sort'},
    [['price','Price: low → high'],['priceDesc','Price: high → low'],['name','Name A–Z'],['seats','Most seats'],['mpg','Best MPG/MPGe']]
      .map(([k,l])=>el('option',{value:k, text:l, selected:f.sort===k?'':null})));
  sort.addEventListener('change', ()=>{ f.sort=sort.value; update(); });
  const saveBtn = el('button',{class:'btn', html:`${icon('star',15)} Save search`, onclick:async ()=>{
    const name = await promptDialog({ title:'Save this search', label:'Name', placeholder:'e.g. AWD hybrids under $40k', multiline:false, okText:'Save' });
    if(name){ Store.saveSearch(name, f); toast('Search saved',{kind:'ok', body:'Find it on Home or in My Garage.'}); }
  }});
  const clearBtn = el('button',{class:'btn ghost', text:'Reset', onclick:()=>{ f=defaultFilters(); ctx.refresh ? ctx.refresh() : renderBrowse(clear(view), ctx); }});
  bar.append(q, sort, saveBtn, clearBtn);
  view.append(bar);

  // ---- filter pills ----
  const fb = el('div',{class:'filterbar'});
  const pill = (label, isOn, onToggle, title)=>{
    const p = el('button',{class:'pill'+(isOn()?' on':''), text:label, title:title||label,
      onclick:()=>{ onToggle(); p.classList.toggle('on', isOn()); update(); }});
    return p;
  };
  const inArr = (arr,x)=>arr.includes(x);
  const tog = (arr,x)=>{ const i=arr.indexOf(x); if(i>=0) arr.splice(i,1); else arr.push(x); };

  // powertrains
  Object.entries(PT_LABEL).forEach(([k,l])=> fb.append(pill(l, ()=>inArr(f.pts,k), ()=>tog(f.pts,k))));
  fb.append(el('span',{style:'width:8px'}));
  // body styles
  BODY_STYLES.forEach(b=> fb.append(pill(b[0].toUpperCase()+b.slice(1), ()=>inArr(f.bodies,b), ()=>tog(f.bodies,b))));
  fb.append(el('span',{style:'width:8px'}));
  // the practical stuff nobody else lets you filter by
  fb.append(pill('Full-size spare', ()=>f.spareFull, ()=>f.spareFull=!f.spareFull, 'Only vehicles with a full-size spare tire'));
  fb.append(pill('Climate knobs', ()=>f.physClimate, ()=>f.physClimate=!f.physClimate, 'Physical climate controls (not touchscreen-only)'));
  fb.append(pill('Audio knobs', ()=>f.physAudio, ()=>f.physAudio=!f.physAudio, 'Physical volume/tune controls'));
  fb.append(pill('Light interior', ()=>f.lightInt, ()=>f.lightInt=!f.lightInt, 'A light interior color is offered'));
  view.append(fb);

  // ---- second row: make select, price + seats sliders ----
  const row2 = el('div',{class:'toolbar'});
  const makeSel = el('select',{class:'input', style:'width:auto', 'aria-label':'Make'},[
    el('option',{value:'', text:'All makes'}),
    ...Store.makes().map(m=>el('option',{value:m, text:m, selected: f.makes[0]===m?'':null })),
  ]);
  makeSel.addEventListener('change', ()=>{ f.makes = makeSel.value?[makeSel.value]:[]; update(); });
  const priceWrap = el('div',{style:'display:flex;align-items:center;gap:8px;min-width:230px;flex:1'});
  const priceOut = el('b',{text: f.priceMax? `≤ ${money(f.priceMax)}` : 'Any price', style:'min-width:92px;font-size:12.5px'});
  const price = el('input',{type:'range', class:'slider-x', min:'0', max:'200000', step:'5000', value:String(f.priceMax||200000)});
  price.addEventListener('input', ()=>{ f.priceMax = +price.value>=200000 ? 0 : +price.value;
    priceOut.textContent = f.priceMax? `≤ ${money(f.priceMax)}` : 'Any price'; update(); });
  priceWrap.append(el('span',{class:'muted tiny', text:'Base price'}), price, priceOut);
  const seatSel = el('select',{class:'input', style:'width:auto', 'aria-label':'Minimum seats'},[
    el('option',{value:'0', text:'Any seats'}),
    ...[4,5,6,7,8].map(n=>el('option',{value:String(n), text:`${n}+ seats`, selected: f.seatsMin===n?'':null})),
  ]);
  seatSel.addEventListener('change', ()=>{ f.seatsMin=+seatSel.value; update(); });
  row2.append(makeSel, priceWrap, seatSel);
  view.append(row2);

  const count = el('div',{class:'muted', style:'margin-bottom:12px;font-size:13px'});
  const grid = el('div');
  view.append(count, grid);

  function update(){
    const list = applyFilters(all, f);
    count.textContent = `${list.length} of ${all.length} vehicles match`;
    grid.innerHTML='';
    if(!list.length){ grid.append(emptyState({ title:'No matches', body:'Loosen a filter or two — or hit Reset to start over.', icon:'filter' })); return; }
    grid.append(vtileGrid(list.slice(0,120), ctx));
    if(list.length>120) grid.append(el('div',{class:'pager', text:`Showing the first 120 — narrow the filters to see the rest.`}));
  }
  update();
}

function clear(view){ view.innerHTML=''; return view; }

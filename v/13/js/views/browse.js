// views/browse.js — the full 2026 catalog with live filters.
//
// Beyond filtering, All Vehicles has a shopping-cart flow: flip on "Select"
// to multi-pick vehicles, then send them straight to Compare or stash them in
// your Shortlist. Brands are a proper multi-select picker; seats filter by a
// MIN and a MAX (so you can ask for "5 max" or "7 max", not just "5+").
import { el, toast, promptDialog, debounce, escapeHtml } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { vtile, vtileGrid, emptyState, money, PT_LABEL, logoImg } from './shared.js';

export const BODY_STYLES = ['sedan','hatchback','coupe','convertible','wagon','suv','minivan','pickup','van'];
const DRIVES = ['FWD','RWD','AWD','4WD'];

export function defaultFilters(){
  return { q:'', makes:[], bodies:[], pts:[], drives:[], priceMax:0, seatsMin:0, seatsMax:0,
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
    // seatsMax: the vehicle's MOST seats must not exceed the cap (a strict "no
    // more than N seats" — so "2 max" gives true two-seaters, "5 max" excludes
    // any 3-row option).
    if(f.seatsMax>0 && Math.max(0,...(v.seats||[0])) > f.seatsMax) return false;
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

  // multi-select ("cart") mode is view-local; the Shortlist it feeds is
  // persisted in the Store.
  let selecting = false;
  const selected = new Set();

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
  const selectBtn = el('button',{class:'btn', html:`${icon('check',15)} Select`, onclick:()=>toggleSelecting()});
  const shortBtn = el('button',{class:'btn ghost', onclick:()=>ctx.navigate('garage')});
  const saveBtn = el('button',{class:'btn ghost', html:`${icon('star',15)} Save search`, onclick:async ()=>{
    const name = await promptDialog({ title:'Save this search', label:'Name', placeholder:'e.g. AWD hybrids under $40k', multiline:false, okText:'Save' });
    if(name){ Store.saveSearch(name, f); toast('Search saved',{kind:'ok', body:'Find it on Home or in My Garage.'}); }
  }});
  const clearBtn = el('button',{class:'btn ghost', text:'Reset', onclick:()=>{ f=defaultFilters(); ctx.refresh ? ctx.refresh() : renderBrowse(clear(view), ctx); }});
  bar.append(q, sort, selectBtn, shortBtn, saveBtn, clearBtn);
  view.append(bar);
  function refreshShortBtn(){
    const n = Store.shortlistIds().length;
    shortBtn.innerHTML = `${icon('garage',15)} Shortlist${n?` · ${n}`:''}`;
    shortBtn.classList.toggle('primary', n>0);
  }
  refreshShortBtn();

  // ---- filter pills (powertrain + body + the practical stuff) ----
  const fb = el('div',{class:'filterbar'});
  const pill = (label, isOn, onToggle, title)=>{
    const p = el('button',{class:'pill'+(isOn()?' on':''), text:label, title:title||label,
      onclick:()=>{ onToggle(); p.classList.toggle('on', isOn()); update(); }});
    return p;
  };
  const inArr = (arr,x)=>arr.includes(x);
  const tog = (arr,x)=>{ const i=arr.indexOf(x); if(i>=0) arr.splice(i,1); else arr.push(x); };
  Object.entries(PT_LABEL).forEach(([k,l])=> fb.append(pill(l, ()=>inArr(f.pts,k), ()=>tog(f.pts,k))));
  fb.append(el('span',{style:'width:8px'}));
  BODY_STYLES.forEach(b=> fb.append(pill(b[0].toUpperCase()+b.slice(1), ()=>inArr(f.bodies,b), ()=>tog(f.bodies,b))));
  fb.append(el('span',{style:'width:8px'}));
  fb.append(pill('Full-size spare', ()=>f.spareFull, ()=>f.spareFull=!f.spareFull, 'Only vehicles with a full-size spare tire'));
  fb.append(pill('Climate knobs', ()=>f.physClimate, ()=>f.physClimate=!f.physClimate, 'Physical climate controls (not touchscreen-only)'));
  fb.append(pill('Audio knobs', ()=>f.physAudio, ()=>f.physAudio=!f.physAudio, 'Physical volume/tune controls'));
  fb.append(pill('Light interior', ()=>f.lightInt, ()=>f.lightInt=!f.lightInt, 'A light interior color is offered'));
  view.append(fb);

  // ---- second row: brand multi-picker, price slider, seat min/max ----
  const row2 = el('div',{class:'toolbar'});
  const brand = brandPicker(all, f, update);
  const priceWrap = el('div',{style:'display:flex;align-items:center;gap:8px;min-width:220px;flex:1'});
  const priceOut = el('b',{text: f.priceMax? `≤ ${money(f.priceMax)}` : 'Any price', style:'min-width:92px;font-size:12.5px'});
  const price = el('input',{type:'range', class:'slider-x', min:'0', max:'200000', step:'5000', value:String(f.priceMax||200000), 'aria-label':'Maximum price'});
  price.addEventListener('input', ()=>{ f.priceMax = +price.value>=200000 ? 0 : +price.value;
    priceOut.textContent = f.priceMax? `≤ ${money(f.priceMax)}` : 'Any price'; update(); });
  priceWrap.append(el('span',{class:'muted tiny', text:'Base price'}), price, priceOut);
  const seats = seatRange(f, update);
  row2.append(brand.el, priceWrap, seats);
  view.append(row2);
  view.append(brand.chips);   // selected-brand chips (their own row, wraps nicely)
  if(ctx.openBrands) setTimeout(()=>brand.open(), 60);   // Home "Brands" tile deep-link

  // ---- count + grid ----
  const count = el('div',{class:'muted', style:'margin:2px 0 12px;font-size:13px'});
  const grid = el('div');
  view.append(count, grid);

  // ---- selection action bar (sticky, only while selecting) ----
  const selbar = el('div',{class:'selbar', hidden:true});
  view.append(selbar);

  function toggleSelecting(){
    selecting = !selecting;
    if(!selecting) selected.clear();
    selectBtn.classList.toggle('primary', selecting);
    selectBtn.innerHTML = selecting ? `${icon('close',15)} Done` : `${icon('check',15)} Select`;
    update(); renderSelbar();
  }
  function toggleSel(id){
    if(selected.has(id)) selected.delete(id); else selected.add(id);
    renderSelbar();
  }
  function renderSelbar(){
    selbar.hidden = !selecting;
    if(!selecting){ selbar.innerHTML=''; return; }
    const n = selected.size;
    selbar.innerHTML='';
    selbar.append(el('span',{class:'sb-count', html:`<b>${n}</b> selected`}));
    const compareBtn = el('button',{class:'btn primary', disabled: n?null:'', html:`${icon('compare',15)} Compare${n?` (${Math.min(n,4)})`:''}`,
      onclick:()=>{
        const ids=[...selected];
        Store.compareFromShortlist(ids);        // loads up to 4 into the tray
        if(ids.length>4){ Store.addManyToShortlist(ids); toast('Comparing the first 4',{kind:'ok', body:`All ${ids.length} were added to your Shortlist too.`}); }
        ctx.navigate('compare');
      }});
    const shortAdd = el('button',{class:'btn', disabled:n?null:'', html:`${icon('garage',15)} Add to Shortlist`,
      onclick:()=>{ const added=Store.addManyToShortlist([...selected]); refreshShortBtn();
        toast(added?`Added ${added} to Shortlist`:'Already in your Shortlist',{kind:'ok'}); }});
    const favAll = el('button',{class:'btn ghost', disabled:n?null:'', html:`${icon('heart',15)} Favorite`,
      onclick:()=>{ let c=0; selected.forEach(id=>{ if(!Store.isFav(id)){ Store.toggleFav(id); c++; } }); toast(`Favorited ${c}`,{kind:'ok'}); update(); }});
    const selAll = el('button',{class:'btn ghost sm', text:'Select all shown',
      onclick:()=>{ lastShown.forEach(v=>selected.add(v.id)); update(); renderSelbar(); }});
    const clr = el('button',{class:'btn ghost sm', text:'Clear', disabled:n?null:'', onclick:()=>{ selected.clear(); update(); renderSelbar(); }});
    selbar.append(compareBtn, shortAdd, favAll, el('span',{class:'sp'}), selAll, clr);
  }

  let lastShown = [];
  function update(){
    const list = applyFilters(all, f);
    lastShown = list.slice(0,120);
    count.textContent = `${list.length} of ${all.length} vehicles match`;
    grid.innerHTML='';
    if(!list.length){ grid.append(emptyState({ title:'No matches', body:'Loosen a filter or two — or hit Reset to start over.', icon:'filter' })); return; }
    const g = el('div',{class:'grid k3'+(selecting?' selecting':'')});
    lastShown.forEach(v=>{
      const tile = vtile(v, ctx);
      if(selecting){
        tile.classList.add('selectable');
        if(selected.has(v.id)) tile.classList.add('selected');
        const chk = el('span',{class:'vt-check', html:icon('check',15), 'aria-hidden':'true'});
        tile.append(chk);
        // capture-phase handler beats vtile's own open-on-click
        tile.addEventListener('click', (e)=>{ e.stopPropagation(); e.preventDefault();
          toggleSel(v.id); tile.classList.toggle('selected', selected.has(v.id)); }, true);
        tile.setAttribute('aria-pressed', selected.has(v.id)?'true':'false');
      }
      g.append(tile);
    });
    grid.append(g);
    if(list.length>120) grid.append(el('div',{class:'pager', text:`Showing the first 120 — narrow the filters to see the rest.`}));
  }
  update();
}

// ---- brand multi-select picker -------------------------------------------
// A "Brands" button that drops a searchable, logo'd, checkbox list with live
// match counts; picked brands appear as removable chips below the toolbar.
function brandPicker(all, f, update){
  const counts = {};
  all.forEach(v=>{ counts[v.make]=(counts[v.make]||0)+1; });
  const makes = Store.makes();

  const btn = el('button',{class:'input brand-btn', type:'button', 'aria-haspopup':'true', 'aria-expanded':'false'});
  const pop = el('div',{class:'brand-pop', hidden:true});
  const wrap = el('div',{class:'brand-wrap'},[btn, pop]);
  const chips = el('div',{class:'chip-row brand-chips'});

  function label(){
    btn.innerHTML = `${icon('flag',15)} ` + (f.makes.length ? `${f.makes.length} brand${f.makes.length>1?'s':''}` : 'All brands') + ` ${icon('chevron',13)}`;
  }
  function renderChips(){
    chips.innerHTML='';
    if(!f.makes.length){ chips.hidden=true; return; }
    chips.hidden=false;
    f.makes.forEach(m=>{
      chips.append(el('button',{class:'pill on brand-chip', html:`${logoImg(m,14)} ${escapeHtml(m)} ${icon('close',12)}`,
        title:`Remove ${m}`, onclick:()=>{ f.makes=f.makes.filter(x=>x!==m); sync(); update(); }}));
    });
    chips.append(el('button',{class:'pill ghost', text:'Clear brands', onclick:()=>{ f.makes=[]; sync(); update(); }}));
  }
  function sync(){ label(); renderChips(); rows.forEach(r=>r.reflect()); }

  // popover contents
  const search = el('input',{class:'input', type:'search', placeholder:'Find a brand…', style:'margin-bottom:8px'});
  const listEl = el('div',{class:'brand-list'});
  const rows = makes.map(m=>{
    const row = el('button',{class:'brand-row', type:'button', onclick:()=>{
      if(f.makes.includes(m)) f.makes=f.makes.filter(x=>x!==m); else f.makes=[...f.makes, m];
      sync(); update();
    }});
    const check = el('span',{class:'br-check'});
    row.append(check, el('span',{class:'br-logo', html:logoImg(m,16)}), el('span',{class:'br-name', text:m}), el('span',{class:'br-n muted tiny', text:String(counts[m]||0)}));
    row.reflect = ()=>{ const on=f.makes.includes(m); row.classList.toggle('on',on); check.innerHTML = on?icon('check',13):''; };
    row.dataset.name = m.toLowerCase();
    row.reflect();
    return row;
  });
  rows.forEach(r=>listEl.append(r));
  search.addEventListener('input', ()=>{ const s=search.value.trim().toLowerCase();
    rows.forEach(r=>{ r.hidden = s && !r.dataset.name.includes(s); }); });
  pop.append(search, listEl);

  function open(){ pop.hidden=false; btn.setAttribute('aria-expanded','true'); search.value=''; rows.forEach(r=>r.hidden=false); setTimeout(()=>search.focus(),10);
    document.addEventListener('click', outside, true); }
  function close(){ pop.hidden=true; btn.setAttribute('aria-expanded','false'); document.removeEventListener('click', outside, true); }
  function outside(e){ if(!wrap.contains(e.target)) close(); }
  btn.addEventListener('click', ()=>{ pop.hidden ? open() : close(); });

  label(); renderChips();
  return { el:wrap, chips, open };
}

// ---- seat min/max range --------------------------------------------------
function seatRange(f, update){
  const wrap = el('div',{class:'seat-range', style:'display:flex;align-items:center;gap:6px'});
  wrap.append(el('span',{class:'muted tiny', text:'Seats'}));
  const min = el('select',{class:'input', style:'width:auto', 'aria-label':'Minimum seats'},[
    el('option',{value:'0', text:'Any'}),
    ...[4,5,6,7,8].map(n=>el('option',{value:String(n), text:`${n}+`, selected:f.seatsMin===n?'':null})),
  ]);
  const max = el('select',{class:'input', style:'width:auto', 'aria-label':'Maximum seats'},[
    el('option',{value:'0', text:'Any'}),
    ...[2,4,5,6,7,8].map(n=>el('option',{value:String(n), text:`${n} max`, selected:f.seatsMax===n?'':null})),
  ]);
  min.addEventListener('change', ()=>{ f.seatsMin=+min.value; update(); });
  max.addEventListener('change', ()=>{ f.seatsMax=+max.value; update(); });
  wrap.append(min, el('span',{class:'muted tiny', text:'→'}), max);
  return wrap;
}

function clear(view){ view.innerHTML=''; return view; }

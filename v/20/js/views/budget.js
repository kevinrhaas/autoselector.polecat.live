// views/budget.js — Budget Explorer: sliders + toggles with a big live
// count. The most direct finder: money in, matching market out.
import { el } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { vtileGrid, emptyState, money, PT_LABEL } from './shared.js';

export function renderBudget(view, ctx){
  const all = Store.vehicles();
  const f = { max:45000, seats:0, mpg:0, pts:[], bodyCat:'' };

  view.append(el('div',{class:'finder-head', style:'margin-bottom:16px'},[
    el('h2',{text:'Budget Explorer'}),
    el('p',{text:'Slide the money, watch the market respond. Everything updates live.'}),
  ]));

  const layout = el('div',{class:'budget-layout'});
  const panel = el('div',{class:'card pad'});
  const out = el('div');
  layout.append(panel, out);
  view.append(layout);

  // ---- controls ----
  const maxOut = el('span',{class:'rv'});
  const maxIn = el('input',{type:'range', class:'slider-x', min:'15000', max:'150000', step:'2500', value:String(f.max), 'aria-label':'Max base price'});
  maxIn.addEventListener('input', ()=>{ f.max=+maxIn.value; update(); });
  panel.append(rangeRow('Max base price', maxOut, maxIn));

  const seatOut = el('span',{class:'rv'});
  const seatIn = el('input',{type:'range', class:'slider-x', min:'0', max:'8', step:'1', value:'0', 'aria-label':'Minimum seats'});
  seatIn.addEventListener('input', ()=>{ f.seats=+seatIn.value; update(); });
  panel.append(rangeRow('Minimum seats', seatOut, seatIn));

  const mpgOut = el('span',{class:'rv'});
  const mpgIn = el('input',{type:'range', class:'slider-x', min:'0', max:'60', step:'5', value:'0', 'aria-label':'Minimum MPG'});
  mpgIn.addEventListener('input', ()=>{ f.mpg=+mpgIn.value; update(); });
  panel.append(rangeRow('Min MPG / MPGe', mpgOut, mpgIn));

  panel.append(el('div',{class:'muted tiny', style:'margin:6px 0 8px;font-weight:700;text-transform:uppercase;letter-spacing:.05em', text:'Powertrain'}));
  const ptRow = el('div',{class:'chip-row', style:'margin-bottom:14px'});
  Object.entries(PT_LABEL).forEach(([k,l])=>{
    const b = el('button',{class:'pill', text:l, onclick:()=>{
      const i=f.pts.indexOf(k); if(i>=0) f.pts.splice(i,1); else f.pts.push(k);
      b.classList.toggle('on', f.pts.includes(k)); update();
    }});
    ptRow.append(b);
  });
  panel.append(ptRow);

  panel.append(el('div',{class:'muted tiny', style:'margin:6px 0 8px;font-weight:700;text-transform:uppercase;letter-spacing:.05em', text:'Type'}));
  const catRow = el('div',{class:'chip-row'});
  [['','Anything'],['car','Cars'],['suv','SUVs'],['truck','Trucks'],['van','Vans']].forEach(([k,l])=>{
    const b = el('button',{class:'pill'+(k===''?' on':''), text:l, onclick:()=>{
      f.bodyCat=k; [...catRow.children].forEach(c=>c.classList.remove('on')); b.classList.add('on'); update();
    }});
    catRow.append(b);
  });
  panel.append(catRow);

  const goBrowse = el('button',{class:'btn block', style:'margin-top:16px', html:`${icon('filter',15)} Open in All Vehicles`, onclick:()=>{
    ctx.navigate('browse', { filters:{ priceMax:f.max, seatsMin:f.seats, pts:[...f.pts] } });
  }});
  panel.append(goBrowse);

  // ---- results ----
  const big = el('div',{class:'finder-count', style:'justify-content:flex-start'},[
    el('span',{class:'fc-n', text:'0'}), el('span',{class:'fc-lbl', text:'vehicles fit'})]);
  const grid = el('div',{style:'margin-top:14px'});
  out.append(big, grid);

  function rangeRow(lbl, outEl, inEl){
    return el('div',{class:'range-row'},[
      el('div',{class:'rr-head'},[ el('span',{text:lbl}), outEl ]),
      inEl,
    ]);
  }

  function update(){
    maxOut.textContent = f.max>=150000 ? 'No limit' : money(f.max);
    seatOut.textContent = f.seats? `${f.seats}+` : 'Any';
    mpgOut.textContent = f.mpg? `${f.mpg}+` : 'Any';
    const list = all.filter(v=>{
      if(f.max<150000 && (v.priceFrom==null || v.priceFrom>f.max)) return false;
      if(f.seats && !(v.seats||[]).some(s=>s>=f.seats)) return false;
      if(f.mpg && !(v.powertrains||[]).some(p=>(p.mpgCombined||0)>=f.mpg)) return false;
      if(f.pts.length && !(v.powertrains||[]).some(p=>f.pts.includes(p.type))) return false;
      if(f.bodyCat && v.category!==f.bodyCat) return false;
      return true;
    }).sort((a,b)=>(a.priceFrom??9e9)-(b.priceFrom??9e9));
    const n = big.querySelector('.fc-n');
    n.textContent = String(list.length);
    n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump');
    grid.innerHTML='';
    grid.append(list.length ? vtileGrid(list.slice(0,60), ctx)
      : emptyState({ title:'Nothing in range', body:'Raise the budget a notch or relax a requirement.', icon:'dollar' }));
  }
  update();
}

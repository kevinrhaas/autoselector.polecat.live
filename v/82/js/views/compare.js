// views/compare.js — up to four vehicles side by side. Best value in each
// numeric row is highlighted; the tray is managed from any vehicle card.
import { el, escapeHtml } from '../ui.js';
import { icon, bodyIcon } from '../icons.js';
import { Store } from '../store.js';
import { money, PT_LABEL, photoUrl, logoImg, seatsLabel, emptyState } from './shared.js';

export function renderCompare(view, ctx){
  const vs = Store.compareIds().map(id=>Store.vehicle(id)).filter(Boolean);

  view.append(el('div',{class:'section-head'},[
    el('h2',{text:'Compare'}),
    el('div',{class:'sub', text: vs.length ? `${vs.length} of 4 slots used — best numbers glow green.` : ''}),
    vs.length ? el('button',{class:'btn sm ghost', text:'Clear all', onclick:()=>{ Store.clearCompare(); ctx.refresh(); }}) : null,
  ]));

  // quick-add from the shortlist when there's a free slot
  const spare = Store.shortlist().filter(v=>!Store.inCompare(v.id));
  if(vs.length<4 && spare.length){
    const row = el('div',{class:'chip-row', style:'margin:-4px 0 14px'});
    row.append(el('span',{class:'muted tiny', text:'Add from shortlist:', style:'align-self:center'}));
    spare.slice(0,8).forEach(v=>row.append(el('button',{class:'pill', html:`${logoImg(v.make,14)} ${escapeHtml(v.model)} +`,
      onclick:()=>{ const r=Store.toggleCompare(v.id); if(r.full){ toast('Compare is full',{kind:'err'}); return; } ctx.refresh(); }})));
    view.append(row);
  }

  if(vs.length<2){
    view.append(emptyState({ title: vs.length ? 'Add one more to compare' : 'Nothing to compare yet',
      body:'Open any vehicle and hit “Compare” (or press C) — up to four line up here.', icon:'compare' }));
    if(vs.length===1) view.append(el('div',{style:'max-width:280px;margin:0 auto'},[cardHead(vs[0], ctx)]));
    return;
  }

  const wrap = el('div',{class:'cmp-wrap'});
  const tbl = el('table',{class:'cmp'});
  const thead = el('thead'); const hr = el('tr'); hr.append(el('th',{text:''}));
  vs.forEach(v=>{ const th=el('th'); th.append(cardHead(v, ctx)); hr.append(th); });
  thead.append(hr); tbl.append(thead);
  const tb = el('tbody');

  const rows = [
    ['Base price', v=>v.priceFrom, v=>money(v.priceFrom), 'min'],
    ['Body / segment', null, v=>`${cap(v.bodyStyle)} · ${v.segment||''}`],
    ['Powertrains', null, v=>[...new Set((v.powertrains||[]).map(p=>PT_LABEL[p.type]||p.type))].join(', ')],
    ['Max power', v=>Math.max(...(v.powertrains||[]).map(p=>p.hp||0)), v=>{ const h=Math.max(...(v.powertrains||[]).map(p=>p.hp||0)); return h?`${h} hp`:'—'; }, 'max'],
    ['Best MPG / MPGe', v=>Math.max(...(v.powertrains||[]).map(p=>p.mpgCombined||0)), v=>{ const m=Math.max(...(v.powertrains||[]).map(p=>p.mpgCombined||0)); return m||'—'; }, 'max'],
    ['EV range', v=>Math.max(...(v.powertrains||[]).map(p=>p.evRangeMi||0)), v=>{ const r=Math.max(...(v.powertrains||[]).map(p=>p.evRangeMi||0)); return r?`${r} mi`:'—'; }, 'max'],
    ['Seats', v=>Math.max(...(v.seats||[0])), v=>seatsLabel(v)||'—', 'max'],
    ['Length', v=>v.dims?.lengthIn, v=>v.dims?.lengthIn?`${v.dims.lengthIn}″`:'—'],
    ['Cargo (max)', v=>v.interior?.cargoMaxCuFt||v.interior?.cargoCuFt, v=>{ const c=v.interior?.cargoMaxCuFt||v.interior?.cargoCuFt; return c?`${c} cu ft`:'—'; }, 'max'],
    ['Towing', v=>v.towingLb, v=>v.towingLb?`${Number(v.towingLb).toLocaleString()} lb`:'—', 'max'],
    ['Spare tire', null, v=>({'full-size':'Full-size','temporary':'Temporary','none':'None (kit)'}[v.spareTire]||'—')],
    ['Climate controls', null, v=>v.physicalControls?.climate?'Physical':'Touchscreen'],
    ['Audio controls', null, v=>v.physicalControls?.audio?'Physical':'Touchscreen'],
    ['Interior colors', null, v=>[v.interior?.lightInterior?'Light':null, v.interior?.darkInterior?'Dark':null].filter(Boolean).join(' & ')||'—'],
  ];

  rows.forEach(([lbl, num, fmt, best])=>{
    const tr = el('tr'); tr.append(el('td',{text:lbl}));
    let bestVal=null;
    if(num && best){
      const vals = vs.map(v=>{ const x=num(v); return (x==null||isNaN(x)||x===0)?null:x; }).filter(x=>x!=null);
      if(vals.length>1) bestVal = best==='min' ? Math.min(...vals) : Math.max(...vals);
    }
    vs.forEach(v=>{
      const raw = num ? num(v) : null;
      const isBest = bestVal!=null && raw===bestVal;
      tr.append(el('td',{class:isBest?'best':'', text:String(fmt(v))}));
    });
    tb.append(tr);
  });
  tbl.append(tb); wrap.append(tbl);
  view.append(wrap);
}

function cardHead(v, ctx){
  const box = el('div',{class:'cmp-vhead'});
  const url = photoUrl(v);
  if(url) box.append(el('img',{src:url, alt:`${v.make} ${v.model}`, loading:'lazy'}));
  box.append(el('div',{html:`${logoImg(v.make,15)} <b style="cursor:pointer">${escapeHtml(v.make+' '+v.model)}</b>`,
    onclick:()=>ctx.openVehicle(v.id), style:'cursor:pointer'}));
  box.append(el('button',{class:'btn sm ghost', html:`${icon('close',13)} Remove`, onclick:()=>{ Store.toggleCompare(v.id); ctx.refresh(); }}));
  return box;
}
const cap = s=>s?s[0].toUpperCase()+s.slice(1):'';

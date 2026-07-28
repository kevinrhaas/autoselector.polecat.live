// views/search.js — the / quick-search overlay: type, arrow, Enter.
import { el, modal, escapeHtml } from '../ui.js';
import { icon, bodyIcon } from '../icons.js';
import { Store } from '../store.js';
import { priceLabel, logoImg } from './shared.js';

export function openSearch({ onOpenVehicle }={}){
  const input = el('input',{class:'input', type:'search', placeholder:'Type a make, model, or kind — “hybrid suv”, “miata”, “kia”…', 'aria-label':'Search vehicles'});
  const list = el('div',{class:'meta-list', style:'margin-top:12px;min-height:120px'});
  let sel = 0, results = [];

  const { hide } = modal({ title:'Search 2026 vehicles', icon:icon('search',18), body:[input, list], wide:true });

  function run(){
    const q = input.value.trim().toLowerCase();
    const words = q.split(/\s+/).filter(Boolean);
    results = !words.length ? Store.recents().slice(0,8).map(r=>r.vehicle) :
      Store.vehicles().filter(v=>{
        const hay = `${v.make} ${v.model} ${v.segment} ${v.bodyStyle} ${(v.powertrains||[]).map(p=>p.type).join(' ')}`.toLowerCase();
        return words.every(w=>hay.includes(w));
      }).slice(0,10);
    sel = 0; paint(q);
  }
  function paint(q){
    list.innerHTML='';
    if(!results.length){ list.append(el('p',{class:'muted', text: q?'No matches — try fewer words.':'Recently viewed vehicles show here.'})); return; }
    results.forEach((v,i)=>{
      list.append(el('div',{class:'meta-item', style:`cursor:pointer;${i===sel?'border-color:var(--brand);background:color-mix(in srgb,var(--brand) 10%,var(--surface-2))':''}`,
        onclick:()=>{ hide(); onOpenVehicle && onOpenVehicle(v.id); }},[
        el('span',{html:icon(bodyIcon(v.bodyStyle),17), style:'color:var(--brand-2);display:inline-flex'}),
        el('span',{style:'flex:1', html:`${logoImg(v.make,14)} <b>${escapeHtml(v.make)} ${escapeHtml(v.model)}</b> <span class="muted tiny">${escapeHtml(v.segment||'')}</span>`}),
        el('span',{class:'muted tiny', text:priceLabel(v)}),
      ]));
    });
  }
  input.addEventListener('input', run);
  input.addEventListener('keydown', e=>{
    if(e.key==='ArrowDown'){ e.preventDefault(); sel=Math.min(sel+1, results.length-1); paint(input.value.trim()); }
    else if(e.key==='ArrowUp'){ e.preventDefault(); sel=Math.max(sel-1,0); paint(input.value.trim()); }
    else if(e.key==='Enter' && results[sel]){ hide(); onOpenVehicle && onOpenVehicle(results[sel].id); }
  });
  run();
  requestAnimationFrame(()=>input.focus());
}

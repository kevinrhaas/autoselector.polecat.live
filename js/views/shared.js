// views/shared.js — helpers shared by every view: money/spec formatting,
// powertrain chips, the vehicle tile card, and local-asset lookups.
import { el, escapeHtml } from '../ui.js';
import { icon, bodyIcon } from '../icons.js';
import { Store } from '../store.js';

// ---- formatting -----------------------------------------------------------
export const money = (x)=> (x==null||isNaN(x)) ? '—' : '$' + Number(x).toLocaleString('en-US');
export function priceLabel(v){
  if(v.priceFrom==null) return 'Price TBA';
  if(v.priceTo && v.priceTo>v.priceFrom) return `${money(v.priceFrom)} – ${money(v.priceTo)}`;
  return `From ${money(v.priceFrom)}`;
}
export const PT_LABEL = { gas:'Gas', hybrid:'Hybrid', phev:'Plug-in Hybrid', ev:'Electric', diesel:'Diesel', hydrogen:'Hydrogen' };
export function ptChip(type){
  const t = PT_LABEL[type] ? type : 'gas';
  return `<span class="pt-chip pt-${t}">${PT_LABEL[t]}</span>`;
}
export function ptSummary(v){
  return [...new Set((v.powertrains||[]).map(p=>p.type))].map(ptChip).join(' ');
}
export function seatsLabel(v){
  const s=[...new Set(v.seats||[])].sort((a,b)=>a-b);
  return s.length ? s.join('–') + ' seats' : '';
}

// ---- local assets -----------------------------------------------------------
// Logos ship as assets/logos/<make-slug>.(svg|png); photos for popular models
// as assets/vehicles/<id>.jpg. LOGO_EXT is generated at build time from the
// actual files (js/data/assets.js) so we never 404-probe.
import { LOGOS, LOCAL_PHOTOS } from '../data/assets.js';
export function makeSlug(make){ return String(make).toLowerCase().replace(/[^a-z0-9]+/g,'-'); }
export function logoUrl(make){
  const s = makeSlug(make);
  return LOGOS[s] ? `/assets/logos/${s}.${LOGOS[s]}` : null;
}
// Some brand wordmarks are near-black; invert them in dark themes.
const DARK_LOGOS = new Set(['toyota','ford','honda','tesla','nissan','vinfast','lotus','maserati','jaguar','land-rover','ineos','fiat','mclaren','aston-martin','bentley','rolls-royce','lucid','polestar','rivian','mini','chrysler','alfa-romeo']);
export function logoImg(make, size=18){
  const url = logoUrl(make); if(!url) return '';
  const inv = DARK_LOGOS.has(makeSlug(make)) ? ' logo-inv' : '';
  return `<img class="${inv.trim()}" src="${url}" width="${size}" height="${size}" alt="" loading="lazy" onerror="this.remove()">`;
}
export function photoUrl(v){
  if(LOCAL_PHOTOS.includes(v.id)) return `/assets/vehicles/${v.id}.jpg`;
  return v.image?.remote || null;
}

// ---- vehicle tile ------------------------------------------------------------
// The standard card. ctx: { openVehicle } — favorite toggles in place.
export function vtile(v, ctx={}){
  const t = el('div',{class:'vtile', tabindex:'0', role:'button', 'aria-label':`${v.make} ${v.model}`,
    onclick:()=>ctx.openVehicle && ctx.openVehicle(v.id),
    onkeydown:(e)=>{ if(e.key==='Enter') ctx.openVehicle && ctx.openVehicle(v.id); }});
  const img = el('div',{class:'vt-img'});
  const url = photoUrl(v);
  if(url) img.append(el('img',{src:url, alt:`${v.make} ${v.model}`, loading:'lazy',
    onerror:(e)=>{ e.target.remove(); img.insertAdjacentHTML('beforeend', `<span class="vt-illo">${icon(bodyIcon(v.bodyStyle),56)}</span>`); }}));
  else img.insertAdjacentHTML('beforeend', `<span class="vt-illo">${icon(bodyIcon(v.bodyStyle),56)}</span>`);

  const fav = el('button',{class:'vt-fav'+(Store.isFav(v.id)?' on':''), title:'Favorite', 'aria-label':'Toggle favorite',
    html:icon('heart',17), onclick:(e)=>{ e.stopPropagation(); Store.toggleFav(v.id); fav.classList.toggle('on', Store.isFav(v.id)); }});
  img.append(fav);

  const body = el('div',{class:'vt-body'});
  body.append(el('div',{class:'vt-make', html:`${logoImg(v.make)}<span>${escapeHtml(v.make)}</span>`}));
  body.append(el('div',{class:'vt-name', text:`${v.model}`}));
  body.append(el('div',{class:'vt-price', text: priceLabel(v)}));
  const meta = el('div',{class:'vt-meta'});
  meta.insertAdjacentHTML('beforeend', ptSummary(v));
  const bits = [v.segment, seatsLabel(v)].filter(Boolean).join(' · ');
  if(bits) meta.append(el('span',{text:bits}));
  body.append(meta);
  t.append(img, body);
  return t;
}

export function vtileGrid(vehicles, ctx){
  const g = el('div',{class:'grid k3'});
  vehicles.forEach(v=>g.append(vtile(v, ctx)));
  return g;
}

export function emptyState({ title, body, icon:ic='car' }){
  return el('div',{class:'empty'},[
    el('div',{class:'e-ic', html:icon(ic,30)}),
    el('h3',{text:title}),
    el('p',{text:body}),
  ]);
}

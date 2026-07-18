// views/shared.js — helpers shared by every view: money/spec formatting,
// powertrain chips, the vehicle tile card, and local-asset lookups.
import { el, escapeHtml, modal } from '../ui.js';
import { icon, bodyIcon } from '../icons.js';
import { Store } from '../store.js';
import { standing, verdict, standingDetail } from '../stats.js';

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
// The full set of images for a vehicle's detail gallery: the hero first
// (whatever photoUrl resolves to), then any extra shots recorded in
// v.image.gallery ([{url, kind:'exterior'|'interior', credit, license}]).
// De-duped by URL. Returns [] when there's nothing but the fallback illo.
export function galleryFor(v){
  const out = [];
  const hero = photoUrl(v);
  if(hero) out.push({ url:hero, kind:'exterior', credit:v.image?.credit||'Wikimedia Commons', hero:true });
  (v.image?.gallery||[]).forEach(g=>{ if(g && g.url) out.push({ ...g, kind:g.kind||'exterior' }); });
  const seen = new Set();
  return out.filter(g=>{ if(seen.has(g.url)) return false; seen.add(g.url); return true; });
}

// ---- ratings --------------------------------------------------------------
// A tiny badge for cards: prefer an owner score, else NHTSA stars. Returns an
// HTML string (or '' when the record has no ratings yet).
export function ratingsBadge(v){
  const r = v.ratings||{};
  if(r.owner?.score!=null)
    return `<span class="rate-badge" title="Owner rating">${icon('star',12)} ${r.owner.score}<small>/${r.owner.scale||5}</small></span>`;
  if(r.safety?.nhtsa!=null)
    return `<span class="rate-badge" title="NHTSA overall safety">${icon('shield',12)} ${r.safety.nhtsa}★ <small>NHTSA</small></span>`;
  if(r.expert?.score!=null)
    return `<span class="rate-badge" title="Expert rating">${icon('star',12)} ${r.expert.score}<small>/${r.expert.scale||10}</small></span>`;
  if(r.safety?.iihs)
    return `<span class="rate-badge" title="IIHS award">${icon('shield',12)} IIHS</span>`;
  return '';
}

// ---- vehicle tile ------------------------------------------------------------
// The standard card. ctx: { openVehicle } — favorite toggles in place.
// Data completeness for a vehicle — how many detail sets are filled in, paired
// with the editorial confidence level. Powers the little at-a-glance chip on
// each card so shoppers know how much of a record is verified vs pre-release.
export function dataCompleteness(v){
  const checks = [
    ['Sources',       (v.sources||[]).length>0],
    ['Full specs',    !!(v.dims?.lengthIn && v.dims?.widthIn && v.dims?.heightIn)],
    ['Colors',        (v.colors?.exterior||[]).length>0],
    ['Photos',        (v.image?.gallery||[]).length>0 || !!v.image?.remote],
    ['Ratings',       !!(v.ratings?.safety || v.ratings?.owner || v.ratings?.expert)],
    ['Trim features', (v.trims||[]).some(t=>(t.features||[]).length>0)],
  ];
  const filled = checks.filter(c=>c[1]).length;
  const missing = checks.filter(c=>!c[1]).map(c=>c[0].toLowerCase());
  const level = v.confidence || 'medium';
  const title = `Data confidence: ${level} · ${filled} of ${checks.length} detail sets complete`
    + (missing.length ? ` — still to add: ${missing.join(', ')}` : ' — fully detailed');
  return { filled, total:checks.length, level, missing, title };
}

// The card chip: a confidence-colored completeness meter + fraction, with a
// small info glyph. Tapping it opens the breakdown so it isn't a mystery.
export function dataChip(v){
  const c = dataCompleteness(v);
  const bars = el('span',{class:'dc-bars', 'aria-hidden':'true'});
  for(let i=0;i<c.total;i++) bars.append(el('i',{class:'dc-seg'+(i<c.filled?' on':'')}));
  return el('button',{class:`vt-data lvl-${c.level}`, type:'button', title:c.title,
    'aria-label':`Data completeness ${c.filled} of ${c.total} — tap for details`,
    onclick:(e)=>{ e.stopPropagation(); explainDataChip(v); }},[
    bars, el('span',{class:'dc-frac', text:`${c.filled}/${c.total}`}),
    el('span',{class:'dc-i', html:icon('info',11), 'aria-hidden':'true'}),
  ]);
}

// Breakdown modal for the completeness chip — spells out what each segment
// means and which detail sets are present vs still to add.
export function explainDataChip(v){
  const c = dataCompleteness(v);
  const CHECKS = [
    ['Sources',       (v.sources||[]).length>0,                                   'Cited manufacturer / EPA / price-guide links'],
    ['Full specs',    !!(v.dims?.lengthIn && v.dims?.widthIn && v.dims?.heightIn), 'Length, width and height on record'],
    ['Colors',        (v.colors?.exterior||[]).length>0,                          'Real paint (and interior) swatches'],
    ['Photos',        (v.image?.gallery||[]).length>0 || !!v.image?.remote,       'At least one verified photo'],
    ['Ratings',       !!(v.ratings?.safety || v.ratings?.owner || v.ratings?.expert), 'NHTSA / IIHS / owner / expert scores'],
    ['Trim features', (v.trims||[]).some(t=>(t.features||[]).length>0),           'Standout equipment per trim'],
  ];
  const body = [];
  body.push(el('p',{class:'ex-lead', html:
    `The meter on each card shows how fully researched a vehicle’s data is — <b>${c.filled} of ${c.total}</b> detail sets here. `+
    `Its color is our editorial confidence in the core specs — <b>${escapeHtml(c.level)}</b>. The list fills in as the per-brand verification sweeps roll on.`}));
  const list = el('ul',{class:'dc-list'});
  CHECKS.forEach(([label,ok,hint])=> list.append(el('li',{class:'dc-litem'+(ok?' ok':'')},[
    el('span',{class:'dc-mark', html:icon(ok?'check':'plus',13)}),
    el('span',{class:'dc-lt'},[ el('b',{text:label}), el('span',{class:'muted tiny', text:hint}) ]),
    el('span',{class:'dc-state muted tiny', text:ok?'present':'to add'}),
  ])));
  body.push(list);
  modal({ title:`${v.year} ${v.make} ${v.model} — data completeness`, icon:icon('info',18), body });
}

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
  if(Store.settings().dataMeter!==false) img.append(dataChip(v));

  const body = el('div',{class:'vt-body'});
  body.append(el('div',{class:'vt-make', html:`${logoImg(v.make)}<span>${escapeHtml(v.make)}</span>`}));
  body.append(el('div',{class:'vt-name', text:`${v.model}`}));
  const priceRow = el('div',{class:'vt-pricerow'},[ el('span',{class:'vt-price', text: priceLabel(v)}) ]);
  const rb = ratingsBadge(v); if(rb) priceRow.insertAdjacentHTML('beforeend', rb);
  body.append(priceRow);
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

// ---- relative-standing bar ----------------------------------------------
// A compact "where does this sit?" gauge for a metric. The fill shows this
// vehicle's percentile within its CLASS (SUVs/cars/…); small ticks mark its
// standing vs ALL vehicles and vs its OWN BRAND. Caption gives the at-a-glance
// verdict; hover/focus reveals all three. Returns null when there's no data.
export function relBar(metricKey, v){
  const s = standing(metricKey, v); if(!s) return null;
  const primaryScope = s.pct.class!=null ? 'class' : 'all';
  const fill = Math.round(s.pct[primaryScope]*100);
  const pctTxt = (x)=> x==null ? '—' : Math.round(x*100)+'%';
  const title = `Percentile (higher = ${s.higher}): `+
    `all cars ${pctTxt(s.pct.all)}`+
    (s.pct.class!=null?` · ${s.classLabel} ${pctTxt(s.pct.class)}`:'')+
    (s.pct.make!=null?` · ${v.make} ${pctTxt(s.pct.make)}`:'');
  const track = el('div',{class:'rb-track', title});
  track.append(el('div',{class:'rb-fill', style:`width:${fill}%`}));
  // ticks for the secondary scopes (skip the one used for the fill)
  if(primaryScope!=='all' && s.pct.all!=null)
    track.append(el('span',{class:'rb-tick all', style:`left:${Math.round(s.pct.all*100)}%`, title:`All cars: ${pctTxt(s.pct.all)}`}));
  if(s.pct.make!=null)
    track.append(el('span',{class:'rb-tick make', style:`left:${Math.round(s.pct.make*100)}%`, title:`${v.make}: ${pctTxt(s.pct.make)}`}));
  const cap = el('div',{class:'rb-cap'},[
    el('span',{text:verdict(metricKey, v)}),
    el('span',{class:'rb-more', html:icon('info',12), 'aria-hidden':'true'}),
  ]);
  const bar = el('button',{class:'relbar as-btn', type:'button',
    'aria-label':`${verdict(metricKey, v)} — tap to see how this is calculated`,
    onclick:(e)=>{ e.stopPropagation(); explainStanding(metricKey, v); },
  },[ track, cap ]);
  return bar;
}

// The "how is this number computed?" explainer. Opens a modal listing the exact
// pool behind each standing bar — how many vehicles, the range, and the full
// ranked member list (this vehicle highlighted) — so the percentile is no
// longer a black box.
export function explainStanding(metricKey, v){
  const d = standingDetail(metricKey, v); if(!d) return;
  const fmt = (x)=> (metricKey==='price') ? money(x) : `${Number.isInteger(x)?x:Math.round(x*10)/10}${d.unit}`;
  const body = [];
  body.push(el('p',{class:'ex-lead', html:
    `This <b>${escapeHtml(v.year+' '+v.make+' '+v.model)}</b> — <b>${escapeHtml(fmt(d.value))}</b>. `+
    `Each bar shows where that sits in a pool of similar vehicles. Higher percentile means ${escapeHtml(d.higher)}.`}));

  for(const sc of d.scopes){
    const pctInt = Math.round(sc.pct*100);
    const word = pctInt>=50 ? d.higher : d.lower;
    const share = pctInt>=50 ? pctInt : 100-pctInt;
    const wrap = el('div',{class:'ex-scope'});
    const scopeName = sc.key==='class' ? `its class — ${sc.label}`
                    : sc.key==='make'  ? sc.label
                    : 'all 2026 vehicles';
    wrap.append(el('div',{class:'ex-scope-head'},[
      el('span',{class:'ex-scope-title', text:scopeName}),
      el('span',{class:'ex-scope-n', text:`${sc.n} vehicle${sc.n===1?'':'s'}`}),
    ]));
    wrap.append(el('div',{class:'ex-verdict', html:
      `<b>${cap0(word)} than ${share}%</b> of them · ranks <b>#${sc.rankFromTop}</b> of ${sc.n} · `+
      `range ${escapeHtml(fmt(sc.lo))}–${escapeHtml(fmt(sc.hi))}, median ${escapeHtml(fmt(sc.median))}`}));
    // full ranked list for the peer class and the brand (both meaningful to
    // scroll); for the big all-vehicles pool, a member list would be 300+ rows,
    // so the summary line above stands on its own there.
    if(sc.key!=='all'){
      const list = el('ol',{class:'ex-list'});
      sc.members.forEach((r,i)=> list.append(el('li',{class:'ex-row'+(r.isThis?' is-this':'')},[
        el('span',{class:'ex-rank', text:`${i+1}`}),
        el('span',{class:'ex-name', text:r.name}),
        el('span',{class:'ex-val', text:fmt(r.value)}),
      ])));
      wrap.append(list);
    }
    body.push(wrap);
  }
  modal({ title:`${d.label} — how this compares`, icon:icon('info',18), body, wide:true });
}
const cap0 = s=> s ? s[0].toUpperCase()+s.slice(1) : s;

// A one-line key for the standing bars above, so the fill and the two ticks
// aren't a mystery. Render it once per detail page, before the first bar.
export function relLegend(v){
  const item = (swatchCls, label)=> el('span',{class:'rl-item'},[
    el('span',{class:swatchCls}), el('span',{text:label}),
  ]);
  return el('div',{class:'rb-legend'},[
    el('span',{class:'rl-lead', text:'How to read the bars:'}),
    item('rl-bar', 'fill = rank within its class'),
    item('rl-tick all', 'vs all vehicles'),
    item('rl-tick make', `vs ${v.make}`),
  ]);
}

export function emptyState({ title, body, icon:ic='car' }){
  return el('div',{class:'empty'},[
    el('div',{class:'e-ic', html:icon(ic,30)}),
    el('h3',{text:title}),
    el('p',{text:body}),
  ]);
}

// views/vehicle.js — the vehicle detail modal: hero image, price, spec grid,
// powertrains, trims, options, practical details (spare tire, physical
// controls, interior colors), personal note, favorite/compare actions.
import { el, modal, toast, escapeHtml } from '../ui.js';
import { icon, bodyIcon } from '../icons.js';
import { Store } from '../store.js';
import { money, priceLabel, ptChip, PT_LABEL, logoImg, photoUrl, seatsLabel } from './shared.js';
import { mapsDealerUrl, locatorUrl } from '../dealers.js';

const yn = (b)=> b==null ? '—' : (b ? 'Yes' : 'No');
const SPARE = { 'full-size':'Full-size spare', 'temporary':'Temporary (donut)', 'none':'No spare (kit/run-flats)' };

export function openVehicle(v, ctx={}){
  const body = el('div');

  // ---- hero ----
  const hero = el('div',{class:'vd-hero'});
  const imgBox = el('div',{class:'vd-hero-img'});
  const url = photoUrl(v);
  if(url) imgBox.append(el('img',{src:url, alt:`${v.make} ${v.model}`,
    onerror:(e)=>{ e.target.remove(); imgBox.insertAdjacentHTML('beforeend', `<span class="vt-illo">${icon(bodyIcon(v.bodyStyle),84)}</span>`); }}));
  else imgBox.insertAdjacentHTML('beforeend', `<span class="vt-illo">${icon(bodyIcon(v.bodyStyle),84)}</span>`);

  const main = el('div',{class:'vd-hero-main'});
  main.append(el('div',{class:'vd-make', html:`${logoImg(v.make,26)}<span>${escapeHtml(v.make)}</span>`+
    (v.manufacturer && v.manufacturer!==v.make ? `<span style="text-transform:none;letter-spacing:0;font-weight:500;color:var(--text-3)">· ${escapeHtml(v.manufacturer)}</span>` : '')}));
  main.append(el('h2',{text:`${v.year} ${v.model}`}));
  main.append(el('div',{class:'vd-price', html:`${priceLabel(v)} <small>MSRP, before destination</small>`}));
  const chips = el('div',{class:'vt-meta'});
  chips.insertAdjacentHTML('beforeend', [...new Set((v.powertrains||[]).map(p=>p.type))].map(ptChip).join(' '));
  chips.append(el('span',{text:[v.segment, seatsLabel(v), `${v.doors||'—'} doors`].filter(Boolean).join(' · ')}));
  main.append(chips);
  if(v.notes) main.append(el('div',{class:'callout', html:`<span class="ci">${icon('info',15)}</span><span>${escapeHtml(v.notes)}</span>`}));
  if(v.confidence && v.confidence!=='high')
    main.append(el('div',{class:'muted tiny', text:`Data confidence: ${v.confidence} — some figures may be pre-release estimates.`}));

  const acts = el('div',{style:'display:flex;gap:8px;flex-wrap:wrap;margin-top:4px'});
  const favBtn = el('button',{class:'btn'+(Store.isFav(v.id)?' primary':''), html:`${icon('heart',16)} <span>${Store.isFav(v.id)?'Favorited':'Favorite'}</span>`,
    onclick:()=>{ Store.toggleFav(v.id); const on=Store.isFav(v.id);
      favBtn.classList.toggle('primary',on); favBtn.querySelector('span').textContent = on?'Favorited':'Favorite'; }});
  const cmpBtn = el('button',{class:'btn'+(Store.inCompare(v.id)?' primary':''), html:`${icon('compare',16)} <span>${Store.inCompare(v.id)?'In Compare':'Compare'}</span>`,
    onclick:()=>{ const r = Store.toggleCompare(v.id);
      if(r.full){ toast('Compare is full', {body:'Remove one of the 4 vehicles first.', kind:'err'}); return; }
      cmpBtn.classList.toggle('primary', !!r.on); cmpBtn.querySelector('span').textContent = r.on?'In Compare':'Compare'; }});
  const shareBtn = el('button',{class:'btn ghost', html:`${icon('link',16)} Copy link`, onclick:async ()=>{
    try{ await navigator.clipboard.writeText(`${location.origin}/app/#vehicle/${v.id}`); toast('Link copied',{kind:'ok'}); }catch{ toast('Copy failed',{kind:'err'}); }
  }});
  acts.append(favBtn, cmpBtn, shareBtn);
  main.append(acts);
  hero.append(imgBox, main);
  body.append(hero);

  // ---- spec sections ----
  const spec = (lbl, val, sub)=> el('div',{class:'spec'},[
    el('div',{class:'s-lbl', text:lbl}),
    el('div',{class:'s-val', text: val==null||val==='' ? '—' : String(val)}),
    sub ? el('div',{class:'s-sub', text:sub}) : null,
  ]);
  const section = (title, node)=>{ body.append(el('h3',{text:title, style:'margin:20px 0 10px;font-size:15px'})); body.append(node); };

  // powertrains
  const pts = el('div',{style:'display:flex;flex-direction:column;gap:10px'});
  (v.powertrains||[]).forEach(p=>{
    const g = el('div',{class:'spec-grid'});
    g.append(spec('Type', PT_LABEL[p.type]||p.type, p.engine||''));
    g.append(spec('Power', p.hp?`${p.hp} hp`:'—', p.transmission||''));
    g.append(spec('Drive', (p.drive||[]).join(' / ')||'—', p.manualAvailable?'Manual gearbox available':''));
    g.append(spec(p.type==='ev'||p.type==='phev' ? 'Efficiency (MPGe)' : 'EPA combined', p.mpgCombined??'—',
      p.evRangeMi?`${p.evRangeMi} mi electric range`:''));
    pts.append(g);
  });
  section('Powertrain'+((v.powertrains||[]).length>1?'s':''), pts);

  // size & space
  const d=v.dims||{}, i=v.interior||{};
  const g2 = el('div',{class:'spec-grid'});
  g2.append(spec('Length', d.lengthIn?`${d.lengthIn}″`:'—', d.wheelbaseIn?`${d.wheelbaseIn}″ wheelbase`:''));
  g2.append(spec('Width × Height', (d.widthIn&&d.heightIn)?`${d.widthIn}″ × ${d.heightIn}″`:'—', d.groundClearanceIn?`${d.groundClearanceIn}″ clearance`:''));
  g2.append(spec('Weight', d.curbWeightLb?`${Number(d.curbWeightLb).toLocaleString()} lb`:'—', v.towingLb?`Tows up to ${Number(v.towingLb).toLocaleString()} lb`:''));
  g2.append(spec('Seats', seatsLabel(v)||'—'));
  g2.append(spec('Passenger volume', i.passengerVolumeCuFt?`${i.passengerVolumeCuFt} cu ft`:'—'));
  g2.append(spec('Cargo', i.cargoCuFt?`${i.cargoCuFt} cu ft`:'—', i.cargoMaxCuFt?`${i.cargoMaxCuFt} cu ft seats folded`:''));
  section('Size & space', g2);

  // practical details — the details other sites bury
  const g3 = el('div',{class:'spec-grid'});
  g3.append(spec('Spare tire', SPARE[v.spareTire]||'—'));
  g3.append(spec('Physical climate controls', yn(v.physicalControls?.climate), 'Real knobs/buttons, not touchscreen-only'));
  g3.append(spec('Physical audio controls', yn(v.physicalControls?.audio)));
  g3.append(spec('Interior colors', [v.interior?.lightInterior?'Light':null, v.interior?.darkInterior?'Dark':null].filter(Boolean).join(' & ')||'—'));
  section('Practical details', g3);

  // trims — options/features differ by trim, so show a per-trim column
  // whenever the data has it (the verification sweeps are filling these in).
  if((v.trims||[]).length){
    const hasFeat = v.trims.some(t=>(t.features||[]).length);
    const tw = el('div',{class:'cmp-wrap'});
    const tbl = el('table',{class:'cmp'});
    tbl.innerHTML = `<thead><tr><th>Trim</th><th>MSRP</th>${hasFeat?'<th>Notable equipment (adds over trim below)</th>':''}</tr></thead>`;
    const tb = el('tbody');
    v.trims.forEach(t=>{
      const cells = [ el('td',{text:t.name}), el('td',{text:money(t.msrp)}) ];
      if(hasFeat) cells.push(el('td',{class:'muted', text:(t.features||[]).join(' · ')||'—'}));
      tb.append(el('tr',{}, cells));
    });
    tbl.append(tb); tw.append(tbl);
    section('Trims', tw);
    if(!hasFeat) body.append(el('p',{class:'muted tiny', style:'margin-top:6px',
      text:'Trim-by-trim equipment lists are being added brand by brand — options shown below are model-wide availability.'}));
  }

  // colors — exterior + interior swatches when the data has them
  const cols = v.colors||{};
  if((cols.exterior||[]).length || (cols.interior||[]).length){
    const box = el('div',{style:'display:flex;flex-direction:column;gap:10px'});
    if((cols.exterior||[]).length){
      const row = el('div',{class:'swatch-row'});
      cols.exterior.forEach(c=>row.append(el('span',{class:'swatch'},[
        el('i',{style:`background:${c.hex||'#888'}`}), el('span',{text:c.name}) ])));
      box.append(el('div',{},[el('div',{class:'muted tiny', style:'margin-bottom:6px;font-weight:700', text:'EXTERIOR'}), row]));
    }
    if((cols.interior||[]).length){
      const row = el('div',{class:'swatch-row'});
      cols.interior.forEach(c=>row.append(el('span',{class:'swatch'},[
        el('i',{style:`background:${c.hex||'#888'}`}),
        el('span',{text:`${c.name}${c.tone?` (${c.tone})`:''}`}) ])));
      box.append(el('div',{},[el('div',{class:'muted tiny', style:'margin-bottom:6px;font-weight:700', text:'INTERIOR'}), row]));
    }
    section('Colors', box);
  }

  // options
  if((v.keyOptions||[]).length){
    const row = el('div',{class:'chip-row'});
    v.keyOptions.forEach(o=>row.append(el('span',{class:'chip', text:o})));
    section('Notable options', row);
  }

  // dealers near you — Maps search (real closest-dealer list) + the
  // manufacturer's own locator. ZIP comes from Settings → Profile.
  {
    const zip = Store.profile().zip||'';
    const row = el('div',{style:'display:flex;gap:8px;flex-wrap:wrap;align-items:center'});
    row.append(el('a',{class:'btn primary', target:'_blank', rel:'noopener',
      href:mapsDealerUrl(v.make, zip),
      html:`${icon('compass',15)} Closest ${escapeHtml(v.make)} dealers${zip?` near ${zip}`:''}`}));
    const loc = locatorUrl(v.make);
    if(loc) row.append(el('a',{class:'btn', target:'_blank', rel:'noopener', href:loc,
      html:`${icon('link',15)} ${escapeHtml(v.make)} official dealer locator`}));
    if(!zip) row.append(el('span',{class:'muted tiny', text:'Tip: set your home ZIP in Settings → Profile for closer results.'}));
    section('Dealers near you', row);
  }

  // sources — precise citations for this record's stats
  if((v.sources||[]).length){
    const list = el('div',{class:'src-list'});
    v.sources.forEach(s=>{
      list.append(el('a',{href:s.url, target:'_blank', rel:'noopener'},[
        el('span',{class:'chip', text:s.site||new URL(s.url).hostname.replace(/^www\./,'')}),
        el('span',{text:s.label}),
      ]));
    });
    section('Sources', list);
  }

  // personal note
  const ta = el('textarea',{class:'input', rows:'2', placeholder:'Your private note about this vehicle… (saved automatically)'});
  ta.value = Store.note(v.id);
  ta.addEventListener('change', ()=>{ Store.setNote(v.id, ta.value.trim()); toast('Note saved',{kind:'ok'}); });
  section('My note', ta);

  if(v.image?.credit || url)
    body.append(el('div',{class:'muted tiny', style:'margin-top:14px', text:`Photo: ${v.image?.credit||'Wikimedia Commons'} — see assets/credits.json for source & license.`}));

  const m = modal({ title:`${v.make} ${v.model}`, icon:icon(bodyIcon(v.bodyStyle),20), body, wide:true });

  // keyboard: F favorite, C compare (while modal open)
  const onKey=(e)=>{
    if(/input|textarea/i.test(document.activeElement?.tagName||'')) return;
    if(e.key==='f'||e.key==='F') favBtn.click();
    if(e.key==='c'||e.key==='C') cmpBtn.click();
  };
  document.addEventListener('keydown', onKey);
  const origHide = m.hide;
  m.hide = ()=>{ document.removeEventListener('keydown', onKey); origHide(); };
  return m;
}

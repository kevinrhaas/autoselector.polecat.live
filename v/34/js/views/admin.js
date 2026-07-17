// views/admin.js — catalog maintenance tools, visible only with the admin
// key (the app itself is open; admin is for data stewardship, not access).
import { el, field, toast, download } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { Access } from '../access.js';

export function renderAdmin(view, ctx){
  if(!Access.isAdmin()){
    const b = el('div',{class:'card pad', style:'max-width:520px'});
    b.append(el('h3',{text:'Unlock admin'}));
    b.append(el('p',{class:'muted', text:'Paste the admin key to unlock catalog maintenance tools on this device. (The app itself is open to everyone — admin only adds data-stewardship tools.)'}));
    const ta = el('textarea',{class:'input', rows:'3', placeholder:'Admin key…'});
    const btn = el('button',{class:'btn primary', text:'Unlock', onclick:async ()=>{
      if(await Access.unlockAdmin(ta.value.trim())){ toast('Admin unlocked',{kind:'ok'}); ctx.rebuildRail(); ctx.refresh(); }
      else toast('That key doesn’t match',{kind:'err'});
    }});
    b.append(field('Admin key', ta), btn);
    view.append(b);
    return;
  }

  view.append(el('div',{class:'section-head'},[
    el('h2',{text:'Admin — catalog quality'}),
    el('div',{class:'sub', text:'Data stewardship tools. The hourly loop uses the same signals to pick verification targets.'}),
  ]));

  const all = Store.vehicles();
  const low = all.filter(v=>v.confidence==='low');
  const med = all.filter(v=>v.confidence==='medium');
  const noPhoto = all.filter(v=>{ try{ return !v.image?.remote; }catch{ return true; } });
  const noPrice = all.filter(v=>v.priceFrom==null);

  const kpis = el('div',{class:'kpis'});
  [[all.length,'Records'],[med.length,'Medium confidence'],[low.length,'Low confidence'],[noPrice.length,'Missing price'],[noPhoto.length,'No remote photo']].forEach(([v,l])=>{
    kpis.append(el('div',{class:'kpi'},[ el('div',{class:'k-val', text:String(v)}), el('div',{class:'k-lbl', text:l}) ]));
  });
  view.append(kpis);

  const worklist = [...low, ...med].slice(0,40);
  view.append(el('h3',{text:'Verification worklist (lowest confidence first)', style:'font-size:14px;margin:10px 0'}));
  const list = el('div',{class:'meta-list', style:'max-width:760px'});
  worklist.forEach(v=>{
    list.append(el('div',{class:'meta-item', style:'cursor:pointer', onclick:()=>ctx.openVehicle(v.id)},[
      el('span',{class:'chip'+(v.confidence==='low'?' danger-chip':''), text:v.confidence}),
      el('b',{text:`${v.make} ${v.model}`}),
      el('span',{class:'muted tiny', style:'flex:1', text:(v.notes||'').slice(0,110)}),
    ]));
  });
  view.append(list);

  const r = el('div',{style:'display:flex;gap:8px;margin-top:16px;flex-wrap:wrap'});
  r.append(el('button',{class:'btn', html:`${icon('download',15)} Export data-quality report (JSON)`, onclick:()=>{
    const report = { generatedAt:new Date().toISOString(), dataVersion:Store.dataVersion(),
      counts:{ total:all.length, low:low.length, medium:med.length, noPrice:noPrice.length, noPhoto:noPhoto.length },
      worklist: worklist.map(v=>({ id:v.id, confidence:v.confidence, notes:v.notes })) };
    download('autoselector-data-quality.json', JSON.stringify(report,null,2), 'application/json');
  }}));
  view.append(r);
}

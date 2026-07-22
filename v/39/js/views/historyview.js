// views/historyview.js — the undo history + full activity trail.
import { el, relTime, toast } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';

export function renderHistory(view, ctx){
  view.append(el('div',{class:'section-head'},[
    el('h2',{text:'History'}),
    el('div',{class:'sub', text:'Every change is undoable — step back one at a time, from anywhere, with Ctrl/⌘+Z.'}),
  ]));

  const row = el('div',{style:'display:flex;gap:8px;margin-bottom:16px'});
  row.append(el('button',{class:'btn', html:`${icon('undo',15)} Undo`, onclick:()=>{
    const l=Store.undo(); toast(l?'Undone':'Nothing to undo', l?{body:l,kind:'ok'}:{}); ctx.refresh(); }}));
  row.append(el('button',{class:'btn', html:`${icon('redo',15)} Redo`, onclick:()=>{
    const l=Store.redo(); toast(l?'Redone':'Nothing to redo', l?{body:l,kind:'ok'}:{}); ctx.refresh(); }}));
  view.append(row);

  const steps = Store.historyEntries();
  view.append(el('h3',{text:'Undoable steps (this session)', style:'font-size:14px;margin-bottom:8px'}));
  if(steps.length){
    const list = el('div',{class:'meta-list', style:'max-width:640px;margin-bottom:22px'});
    steps.slice(0,30).forEach((s,i)=>{
      list.append(el('div',{class:'meta-item'},[
        el('span',{class:'row-num', text:String(i+1)}),
        el('span',{text:s.label, style:'flex:1'}),
        el('span',{class:'muted tiny', text:relTime(s.at)}),
      ]));
    });
    view.append(list);
  } else view.append(el('p',{class:'muted', style:'margin-bottom:22px', text:'No changes yet this session. Favorite something!'}));

  view.append(el('h3',{text:'Activity trail', style:'font-size:14px;margin-bottom:8px'}));
  const act = Store.activity();
  if(act.length){
    const list = el('div',{class:'meta-list', style:'max-width:640px'});
    act.slice(0,60).forEach(a=>{
      list.append(el('div',{class:'meta-item', style:a.vehicleId?'cursor:pointer':'',
        onclick:()=>{ if(a.vehicleId) ctx.openVehicle(a.vehicleId); }},[
        el('span',{text:a.text, style:'flex:1'}),
        el('span',{class:'muted tiny', text:relTime(a.at)}),
      ]));
    });
    view.append(list);
  } else view.append(el('p',{class:'muted', text:'Actions you take (favorites, notes, searches) appear here.'}));
}

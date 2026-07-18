// tour.js — a lightweight, restartable welcome tour.
// Highlights key rail items with a popover. Restartable from Settings.
import { el, $ } from './ui.js';
import { Store } from './store.js';

const STEPS = [
  { sel:'.ps-rail-item[data-sec="home"]',       title:'Home base', body:'Your favorites, recent looks, and one-tap shortcuts into every finder land here.' },
  { sel:'.ps-rail-item[data-sec="matchmaker"]', title:'Match Maker', body:'Answer a few friendly questions — "not sure" is always an option — and watch the whole 2026 market whittle down to your car.' },
  { sel:'.ps-rail-item[data-sec="lifestyles"]',  title:'Lifestyles', body:'Pick the driver you are (first car, growing family, easy-in comfort…) and get a curated shortlist instantly.' },
  { sel:'.ps-rail-item[data-sec="browse"]',     title:'Every 2026 vehicle', body:'The full US catalog — filter by price, powertrain, seats, size, even physical climate knobs or a full-size spare.' },
  { sel:'.ps-rail-item[data-sec="garage"]',     title:'Your Garage', body:'Tap the heart on any car to save it here, add notes, and line up to four side by side in Compare.' },
  { sel:'.ps-rail-item[data-sec="settings"]',   title:'Make it yours', body:'Themes (AutoSelector or Polecat, dark or light), Simple mode, data tools, version switcher — and restart this tour anytime.' },
];

export function maybeStartTour(ctx){
  if(Store.settings().tourDone) return;
  setTimeout(()=>startTour(ctx), 700);
}

export function startTour(ctx){
  let i=0;
  const back=el('div',{class:'tour-back', onclick:()=>finish()});
  const pop=el('div',{class:'tour-pop'});
  document.body.append(back, pop);
  show();

  function show(){
    const step=STEPS[i];
    const target=$(step.sel);
    if(target){
      window.__rail?.setOpen(true);
      target.style.position='relative'; target.style.zIndex='152';
      target.style.boxShadow='0 0 0 3px var(--brand)';
      target.style.borderRadius='10px';
    }
    pop.innerHTML='';
    pop.append(
      el('h3',{text:step.title}),
      el('p',{text:step.body}),
      (()=>{ const f=el('div',{class:'tour-foot'});
        const dots=el('div',{class:'tour-dots'});
        STEPS.forEach((_,k)=>dots.append(el('i',{class:k===i?'on':''})));
        const btns=el('div',{style:'display:flex;gap:8px'});
        btns.append(el('button',{class:'btn sm ghost', text:'Skip', onclick:()=>finish()}));
        btns.append(el('button',{class:'btn sm primary', text: i===STEPS.length-1?'Done':'Next', onclick:()=>next()}));
        f.append(dots, btns); return f; })()
    );
    position(target);
  }
  function position(target){
    const r = target? target.getBoundingClientRect() : { right:80, top:80, bottom:120, left:80 };
    const pw=340, ph=pop.offsetHeight||150;
    let left = r.right + 14; let top = r.top;
    if(left+pw>window.innerWidth-12) left = Math.max(12, r.left - pw - 14);
    if(left<12) left=12;
    if(top+ph>window.innerHeight-12) top=Math.max(12, window.innerHeight-ph-12);
    pop.style.left=left+'px'; pop.style.top=top+'px';
  }
  function clear(){ const t=$(STEPS[i].sel); if(t){ t.style.boxShadow=''; t.style.zIndex=''; } }
  function next(){ clear(); if(i>=STEPS.length-1){ finish(); return; } i++; show(); }
  function finish(){ clear(); back.remove(); pop.remove(); Store.setSetting('tourDone', true); }
}

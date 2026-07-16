// views/lifestyles.js — persona finder: pick the driver you are and get a
// curated, explained shortlist. Each persona is a scored filter over the
// catalog (hard requirements + soft preferences), so results rank by fit.
import { el } from '../ui.js';
import { Store } from '../store.js';
import { vtileGrid, emptyState } from './shared.js';

// score(v) → null to exclude, or a number (higher = better fit).
const PERSONAS = [
  {
    key:'first-car', emoji:'🎓', name:'My first car',
    blurb:'Affordable, easy to park, cheap to run — and safe.',
    score(v){
      if(v.priceFrom==null || v.priceFrom>32000) return null;
      if(!['sedan','hatchback','suv','wagon'].includes(v.bodyStyle)) return null;
      let s = 50 - v.priceFrom/1000;
      s += Math.max(...(v.powertrains||[]).map(p=>p.mpgCombined||0))/2;
      if((v.dims?.lengthIn??999) < 185) s += 6;
      return s;
    },
  },
  {
    key:'family', emoji:'👨‍👩‍👧‍👦', name:'Growing family',
    blurb:'Three rows or giant cargo, sliding-door sanity welcome.',
    score(v){
      const seats = Math.max(...(v.seats||[0]));
      if(seats<6 && v.bodyStyle!=='minivan') return null;
      let s = seats*4 + (v.interior?.cargoMaxCuFt||v.interior?.cargoCuFt||0)/4;
      if(v.bodyStyle==='minivan') s += 12;
      if(v.priceFrom!=null && v.priceFrom<52000) s += 8;
      return s;
    },
  },
  {
    key:'comfort', emoji:'🌷', name:'Comfort & confidence',
    blurb:'Easy in and out, great visibility, real buttons, no drama. Perfect when climbing into a big rig — or down into a sports car — is a hard no.',
    score(v){
      const h = v.dims?.heightIn ?? 0;
      // comfortable step-in band: taller than a sedan, lower than a lifted truck
      if(!['suv','minivan'].includes(v.bodyStyle)) return null;
      if(h<62 || h>72) return null;
      if(v.priceFrom==null || v.priceFrom>60000) return null;
      let s = 40;
      if(v.physicalControls?.climate) s += 14;
      if(v.physicalControls?.audio) s += 8;
      if(v.interior?.lightInterior) s += 8;                          // airy, easy-to-see cabin
      if((v.powertrains||[]).some(p=>p.type==='hybrid')) s += 8;     // smooth + fewer gas stops
      if((v.dims?.lengthIn??999) < 195) s += 8;                      // parkable
      if(v.spareTire==='full-size') s += 4;
      return s;
    },
  },
  {
    key:'adventure', emoji:'🏔️', name:'Weekend adventurer',
    blurb:'AWD, clearance, cargo for bikes, boards and mud.',
    score(v){
      if(!(v.powertrains||[]).some(p=>(p.drive||[]).some(d=>['AWD','4WD'].includes(d)))) return null;
      const gc = v.dims?.groundClearanceIn ?? 0;
      if(gc < 7.5) return null;
      return gc*4 + (v.interior?.cargoMaxCuFt||0)/3 + ((v.towingLb||0)/1000);
    },
  },
  {
    key:'eco', emoji:'🌱', name:'Eco commuter',
    blurb:'Electric or seriously efficient — lowest running costs.',
    score(v){
      const best = Math.max(...(v.powertrains||[]).map(p=>p.mpgCombined||0));
      const ev = (v.powertrains||[]).some(p=>p.type==='ev');
      const hy = (v.powertrains||[]).some(p=>['hybrid','phev'].includes(p.type));
      if(!ev && best<40) return null;
      let s = best/2 + (ev?25:0) + (hy?10:0);
      if(v.priceFrom!=null && v.priceFrom<45000) s += 10;
      return s;
    },
  },
  {
    key:'work', emoji:'🔧', name:'Work & tow',
    blurb:'Payload, trailers, tools — a truck that earns its keep.',
    score(v){
      if(v.bodyStyle!=='pickup' && (v.towingLb||0)<6000) return null;
      return (v.towingLb||0)/500 + (v.bodyStyle==='pickup'?15:0);
    },
  },
  {
    key:'fun', emoji:'🏁', name:'Pure fun',
    blurb:'Coupes, convertibles, hot hatches — smiles per mile.',
    score(v){
      const hp = Math.max(...(v.powertrains||[]).map(p=>p.hp||0));
      const sporty = ['coupe','convertible'].includes(v.bodyStyle) || (v.powertrains||[]).some(p=>p.manualAvailable);
      if(!sporty && hp<400) return null;
      let s = hp/10 + (sporty?20:0);
      if((v.powertrains||[]).some(p=>p.manualAvailable)) s += 15;
      if((v.dims?.curbWeightLb??5000) < 3400) s += 10;
      return s;
    },
  },
  {
    key:'luxury', emoji:'🥂', name:'Luxury lounge',
    blurb:'First-class cabins, quiet power, no compromises.',
    score(v){
      if(v.priceFrom==null || v.priceFrom<68000) return null;
      return v.priceFrom/2000 + Math.max(...(v.powertrains||[]).map(p=>p.hp||0))/20;
    },
  },
];

export function renderLifestyles(view, ctx){
  view.append(el('div',{class:'finder-head', style:'margin-bottom:18px'},[
    el('h2',{text:'Which driver are you?'}),
    el('p',{text:'Pick a lifestyle and we’ll rank the whole 2026 market for that life — with the reasons on every card. You can be more than one.'}),
  ]));

  const grid = el('div',{class:'persona-grid'});
  const results = el('div',{style:'margin-top:22px'});
  view.append(grid, results);

  PERSONAS.forEach(p=>{
    grid.append(el('button',{class:'persona-card', onclick:()=>show(p)},[
      el('div',{class:'p-emoji', text:p.emoji}),
      el('h3',{text:p.name}),
      el('p',{text:p.blurb}),
    ]));
  });

  function show(p){
    Store.setProfile({ persona:p.key });
    const ranked = Store.vehicles()
      .map(v=>({ v, s:p.score(v) }))
      .filter(x=>x.s!=null)
      .sort((a,b)=>b.s-a.s)
      .map(x=>x.v);
    Store.recordFinderRun('Lifestyles', [{q:'persona', a:p.name}], ranked.slice(0,12).map(v=>v.id));
    results.innerHTML='';
    results.append(el('div',{class:'section-head'},[
      el('h2',{text:`${p.emoji} Best matches for “${p.name}”`}),
      el('div',{class:'sub', text:`${ranked.length} candidates ranked by fit — top 12 shown. ${p.blurb}`}),
    ]));
    results.append(ranked.length ? vtileGrid(ranked.slice(0,12), ctx)
      : emptyState({ title:'Nothing fits yet', body:'This persona has strict requirements — try another.', icon:'users' }));
    results.scrollIntoView({ behavior:'smooth', block:'start' });
  }
}

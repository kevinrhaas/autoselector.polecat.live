// views/matchmaker.js — the question-by-question finder.
//
// Answer friendly questions ("Not sure" is always allowed — it just skips
// the filter) and watch the live counter + dot field whittle the whole 2026
// market down to a handful. Every option carries a predicate over the
// vehicle record; the pool is re-filtered after each answer.
import { el } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { vtileGrid, emptyState } from './shared.js';

const Q = [
  {
    key:'use', title:'What will this car mostly do?', sub:'Pick the closest — this just sets the direction.',
    opts:[
      { t:'Daily commute', ic:'road',    hint:'Efficient, easy to live with', p:v=>['sedan','hatchback','suv','wagon'].includes(v.bodyStyle) },
      { t:'Haul the family', ic:'users', hint:'Room for kids, gear, grandparents', p:v=>(v.seats||[]).some(s=>s>=6)||['minivan','suv'].includes(v.bodyStyle) },
      { t:'Adventure & outdoors', ic:'mountain', hint:'Trails, campsites, bad weather', p:v=>(v.powertrains||[]).some(pt=>(pt.drive||[]).some(d=>['AWD','4WD'].includes(d))) && (v.dims?.groundClearanceIn??7)>=7 },
      { t:'Work & towing', ic:'truck',   hint:'Payload, trailers, job sites', p:v=>v.bodyStyle==='pickup'||(v.towingLb||0)>=5000 },
      { t:'Pure fun', ic:'bolt',         hint:'Weekend smiles per gallon', p:v=>['coupe','convertible'].includes(v.bodyStyle)||(v.powertrains||[]).some(pt=>(pt.hp||0)>=380) },
    ],
  },
  {
    key:'people', title:'How many people ride along?', sub:'Regularly — not the once-a-year airport run.',
    opts:[
      { t:'Mostly just me (or +1)', ic:'car',  p:()=>true },
      { t:'Up to 5', ic:'users',               p:v=>(v.seats||[]).some(s=>s>=5) },
      { t:'6, 7, 8 — the whole crew', ic:'van', p:v=>(v.seats||[]).some(s=>s>=6) },
    ],
  },
  {
    key:'budget', title:'Where’s your budget comfy?', sub:'Base price — options come later.',
    opts:[
      { t:'Under $30k', ic:'dollar',  p:v=>v.priceFrom!=null && v.priceFrom<30000 },
      { t:'$30k – $45k', ic:'dollar', p:v=>v.priceFrom!=null && v.priceFrom>=25000 && v.priceFrom<45000 },
      { t:'$45k – $70k', ic:'dollar', p:v=>v.priceFrom!=null && v.priceFrom>=40000 && v.priceFrom<70000 },
      { t:'$70k+', ic:'sparkle',      p:v=>v.priceFrom!=null && v.priceFrom>=70000 },
    ],
  },
  {
    key:'fuel', title:'What should power it?', sub:'"Not sure" keeps every option open.',
    opts:[
      { t:'Good old gas', ic:'fuel',      p:v=>(v.powertrains||[]).some(p=>p.type==='gas') },
      { t:'Hybrid', ic:'leaf',            hint:'No plug, great MPG', p:v=>(v.powertrains||[]).some(p=>p.type==='hybrid') },
      { t:'Plug-in hybrid', ic:'plug',    hint:'Short trips electric, gas backup', p:v=>(v.powertrains||[]).some(p=>p.type==='phev') },
      { t:'Fully electric', ic:'bolt',    p:v=>(v.powertrains||[]).some(p=>p.type==='ev') },
    ],
  },
  {
    key:'size', title:'How should it feel on the road?', sub:'Think parking spots and driveways too.',
    opts:[
      { t:'Small & nimble', ic:'car',   hint:'Easy to park anywhere', p:v=>(v.dims?.lengthIn??999)<182 },
      { t:'Balanced middle', ic:'car',  p:v=>{ const L=v.dims?.lengthIn; return L!=null && L>=178 && L<=198; } },
      { t:'Big & commanding', ic:'suv', hint:'Presence and space', p:v=>(v.dims?.lengthIn??0)>194 },
    ],
  },
  {
    key:'entry', title:'Getting in and out?', sub:'A real comfort factor people forget to check.',
    opts:[
      { t:'Easy step-in, sit up high', ic:'suv', hint:'No climbing down or up', p:v=>['suv','minivan','pickup','van'].includes(v.bodyStyle) && (v.dims?.heightIn??0)>=63 },
      { t:'Low & sporty is fine', ic:'car', p:()=>true },
    ],
  },
  {
    key:'controls', title:'Buttons or screens?', sub:'Some cars bury climate controls in menus.',
    opts:[
      { t:'Real knobs, please', ic:'wheel', hint:'Physical climate & volume controls', p:v=>v.physicalControls?.climate && v.physicalControls?.audio },
      { t:'Touchscreens are fine', ic:'grid', p:()=>true },
    ],
  },
  {
    key:'weather', title:'Snow, rain, rough roads?', sub:'All-wheel drive matters if winter is real where you live.',
    opts:[
      { t:'Yes — give me AWD/4WD', ic:'snow', p:v=>(v.powertrains||[]).some(p=>(p.drive||[]).some(d=>['AWD','4WD'].includes(d))) },
      { t:'Not really', ic:'sun', p:()=>true },
    ],
  },
  {
    key:'spare', title:'One last practical one: spare tire?', sub:'Long road trips far from help? A full-size spare is gold.',
    opts:[
      { t:'Full-size spare, please', ic:'wheel', p:v=>v.spareTire==='full-size' },
      { t:'Whatever’s standard', ic:'check', p:()=>true },
    ],
  },
];

export function renderMatchmaker(view, ctx){
  const all = Store.vehicles();
  let step = 0;
  let pool = [...all];
  const answers = [];
  const simple = Store.settings().simpleMode;
  const questions = simple ? Q.filter(q=>['use','people','budget','fuel','entry','controls'].includes(q.key)) : Q;

  const wrap = el('div',{class:'finder-wrap'});
  view.append(wrap);

  const head = el('div',{class:'finder-head'},[
    el('h2',{text:'Match Maker'}),
    el('p',{text:'Answer a few questions and watch the whole 2026 market shrink to your shortlist. Not sure about one? Skip it — no wrong answers.'}),
  ]);
  const counter = el('div',{class:'finder-count'},[
    el('span',{class:'fc-n', text:String(pool.length)}),
    el('span',{class:'fc-lbl', text:'vehicles still in the running'}),
  ]);
  const dots = el('div',{class:'whittle', 'aria-hidden':'true'});
  // one dot ≈ 3 vehicles so the field reads at a glance
  const DOT_N = Math.ceil(all.length/3);
  for(let i=0;i<DOT_N;i++) dots.append(el('i',{class:'w-dot'}));
  const progress = el('div',{class:'q-progress'});
  questions.forEach(()=>progress.append(el('i')));
  const stage = el('div');
  wrap.append(head, counter, dots, progress, stage);

  function syncViz(animate=true){
    const n = counter.querySelector('.fc-n');
    n.textContent = String(pool.length);
    if(animate){ n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump'); }
    const keep = Math.ceil(pool.length/3);
    [...dots.children].forEach((d,i)=>d.classList.toggle('out', i>=keep));
    [...progress.children].forEach((d,i)=>d.classList.toggle('done', i<step));
  }

  function ask(){
    syncViz(step>0);
    stage.innerHTML='';
    if(step>=questions.length || pool.length<=3){ return results(); }
    const q = questions[step];
    const card = el('div',{class:'q-card'});
    card.append(el('h3',{text:q.title}), el('div',{class:'q-sub', text:q.sub}));
    const opts = el('div',{class:'q-opts'});
    q.opts.forEach(o=>{
      opts.append(el('button',{class:'q-opt', onclick:()=>answer(q, o)},[
        el('span',{class:'q-ic', html:icon(o.ic,22)}),
        el('span',{text:o.t}),
        o.hint?el('small',{text:o.hint}):null,
      ]));
    });
    opts.append(el('button',{class:'q-opt skip', onclick:()=>answer(q, null)},[
      el('span',{class:'q-ic', html:icon('question',22)}),
      el('span',{text:'Not sure / don’t care'}),
      el('small',{text:'Skip — keeps everything in'}),
    ]));
    card.append(opts);
    const foot = el('div',{class:'finder-foot', style:'margin-top:16px'});
    if(step>0) foot.append(el('button',{class:'btn ghost sm', html:`${icon('undo',14)} Back`, onclick:back}));
    card.append(foot);
    stage.append(card);
  }

  function answer(q, opt){
    answers.push({ q:q.key, a:opt?opt.t:'(skipped)', pool:[...pool] });
    if(opt){
      const next = pool.filter(opt.p);
      if(next.length===0){
        // Never strand the user at zero: keep the pool and tell them.
        stage.prepend(el('div',{class:'callout warn', html:`<span class="ci">${icon('warn',15)}</span><span>No vehicle matches <b>every</b> answer so far — we kept your list as-is and skipped that one.</span>`}));
      } else pool = next;
    }
    step++;
    ask();
  }
  function back(){
    const prev = answers.pop();
    if(prev){ pool = prev.pool; step--; }
    ask();
  }

  function results(){
    syncViz();
    Store.recordFinderRun('Match Maker', answers.map(a=>({q:a.q,a:a.a})), pool.slice(0,24).map(v=>v.id));
    stage.innerHTML='';
    const done = el('div',{class:'q-card', style:'text-align:center'});
    done.append(el('h3',{text: pool.length===1 ? '🏁 We found your car!' : `🏁 Your shortlist: ${pool.length} vehicle${pool.length===1?'':'s'}`}));
    done.append(el('div',{class:'q-sub', text: pool.length<=6
      ? 'Tap any card for the full story — price, powertrains, dimensions, the spare tire, all of it.'
      : 'Still a healthy list — open a few, favorite the contenders, then line them up in Compare.'}));
    const foot = el('div',{class:'finder-foot'});
    foot.append(el('button',{class:'btn', html:`${icon('repeat',15)} Start over`, onclick:()=>{ step=0; pool=[...all]; answers.length=0; ask(); }}));
    if(answers.length) foot.append(el('button',{class:'btn ghost', html:`${icon('undo',15)} Change last answer`, onclick:()=>{ back(); }}));
    done.append(foot);
    stage.append(done);
    stage.append(el('div',{style:'margin-top:16px'},[ pool.length ? vtileGrid(pool.slice(0,24), ctx) : emptyState({title:'Nothing matched', body:'Try again with looser answers.', icon:'filter'}) ]));
    if(pool.length<=6 && pool.length>1){
      import('../ui.js').then(m=>m.celebrate(30));
    }
  }

  ask();
}

// views/matchmaker.js — the question-by-question finder.
//
// Fun rules: nothing is forced. Most questions are MULTI-SELECT — tap every
// answer that's true for you and the choices are OR-combined — and every
// question has a "Not sure / don't care" that simply skips the filter.
// The live counter + dot field whittle the whole 2026 market down as you go.
import { el } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { vtileGrid, emptyState } from './shared.js';

// Each option carries a predicate p(vehicle). On multi-select questions the
// selected options are OR-combined (a vehicle survives if ANY selected
// option matches).
const Q = [
  {
    key:'use', multi:true, title:'What will this car do?', sub:'Tap everything that applies — commuting weekdays AND camping weekends is a normal life.',
    opts:[
      { t:'Daily commute', ic:'road',    hint:'Efficient, easy to live with', p:v=>['sedan','hatchback','suv','wagon'].includes(v.bodyStyle) },
      { t:'Haul the family', ic:'users', hint:'Room for kids, gear, grandparents', p:v=>(v.seats||[]).some(s=>s>=6)||['minivan','suv'].includes(v.bodyStyle) },
      { t:'Adventure & outdoors', ic:'mountain', hint:'Trails, campsites, bad weather', p:v=>(v.powertrains||[]).some(pt=>(pt.drive||[]).some(d=>['AWD','4WD'].includes(d))) && (v.dims?.groundClearanceIn??7)>=7 },
      { t:'Work & towing', ic:'truck',   hint:'Payload, trailers, job sites', p:v=>v.bodyStyle==='pickup'||(v.towingLb||0)>=5000 },
      { t:'Pure fun', ic:'bolt',         hint:'Weekend smiles per gallon', p:v=>['coupe','convertible'].includes(v.bodyStyle)||(v.powertrains||[]).some(pt=>(pt.hp||0)>=380) },
    ],
  },
  {
    key:'people', multi:false, title:'How many people ride along?', sub:'Regularly — not the once-a-year airport run.',
    opts:[
      { t:'Mostly just me (or +1)', ic:'car',  p:()=>true },
      { t:'Up to 5', ic:'users',               p:v=>(v.seats||[]).some(s=>s>=5) },
      { t:'6, 7, 8 — the whole crew', ic:'van', p:v=>(v.seats||[]).some(s=>s>=6) },
    ],
  },
  {
    key:'budget', multi:true, title:'Where’s your budget comfy?', sub:'Base price — pick one band or a couple of neighbors.',
    opts:[
      { t:'Under $30k', ic:'dollar',  p:v=>v.priceFrom!=null && v.priceFrom<30000 },
      { t:'$30k – $45k', ic:'dollar', p:v=>v.priceFrom!=null && v.priceFrom>=27500 && v.priceFrom<45000 },
      { t:'$45k – $70k', ic:'dollar', p:v=>v.priceFrom!=null && v.priceFrom>=42000 && v.priceFrom<70000 },
      { t:'$70k+', ic:'sparkle',      p:v=>v.priceFrom!=null && v.priceFrom>=70000 },
    ],
  },
  {
    key:'fuel', multi:true, title:'What should power it?', sub:'Tap every kind you’d happily live with.',
    opts:[
      { t:'Good old gas', ic:'fuel',      p:v=>(v.powertrains||[]).some(p=>p.type==='gas') },
      { t:'Hybrid', ic:'leaf',            hint:'No plug, great MPG', p:v=>(v.powertrains||[]).some(p=>p.type==='hybrid') },
      { t:'Plug-in hybrid', ic:'plug',    hint:'Short trips electric, gas backup', p:v=>(v.powertrains||[]).some(p=>p.type==='phev') },
      { t:'Fully electric', ic:'bolt',    p:v=>(v.powertrains||[]).some(p=>p.type==='ev') },
    ],
  },
  {
    key:'size', multi:true, title:'How should it feel on the road?', sub:'Think parking spots and driveways too. Two neighboring sizes is a fine answer.',
    opts:[
      { t:'Small & nimble', ic:'car',   hint:'Easy to park anywhere', p:v=>(v.dims?.lengthIn??999)<182 },
      { t:'Balanced middle', ic:'car',  p:v=>{ const L=v.dims?.lengthIn; return L!=null && L>=178 && L<=198; } },
      { t:'Big & commanding', ic:'suv', hint:'Presence and space', p:v=>(v.dims?.lengthIn??0)>194 },
    ],
  },
  {
    key:'entry', multi:true, title:'How do you want to get in?', sub:'Ride height is a real comfort factor people forget to check — pick every one that suits you.',
    opts:[
      { t:'Sit up high', ic:'suv', hint:'Commanding view — a step up to climb in', p:v=>(v.dims?.heightIn??0)>=66 },
      { t:'Slide straight in', ic:'car', hint:'Hip-height seat — no climbing up or dropping down', p:v=>{ const h=v.dims?.heightIn; return h!=null && h>=57 && h<66; } },
      { t:'Low & sporty', ic:'car', hint:'Sit low and drop down into it', p:v=>(v.dims?.heightIn??999)<57 },
    ],
  },
  {
    key:'controls', multi:true, title:'Buttons or screens?', sub:'Some cars bury climate controls in menus. Pick either — or both if you don’t mind.',
    opts:[
      { t:'Real knobs, please', ic:'wheel', hint:'Physical climate & volume controls', p:v=>v.physicalControls?.climate && v.physicalControls?.audio },
      { t:'Touchscreen-first is fine', ic:'grid', hint:'Most controls live on the screen', p:v=>!(v.physicalControls?.climate && v.physicalControls?.audio) },
    ],
  },
  {
    key:'weather', multi:false, title:'Snow, rain, rough roads?', sub:'All-wheel drive matters if winter is real where you live.',
    opts:[
      { t:'Yes — give me AWD/4WD', ic:'snow', p:v=>(v.powertrains||[]).some(p=>(p.drive||[]).some(d=>['AWD','4WD'].includes(d))) },
      { t:'Not really', ic:'sun', p:()=>true },
    ],
  },
  {
    key:'spare', multi:true, title:'Flat-tire plan?', sub:'Tap every setup you could live with — being open here keeps more great cars in.',
    opts:[
      { t:'Full-size spare', ic:'wheel',       hint:'The road-tripper’s security blanket', p:v=>v.spareTire==='full-size' },
      { t:'Donut (temporary) is fine', ic:'wheel', hint:'Gets you to the shop', p:v=>v.spareTire==='temporary' },
      { t:'Repair kit / run-flats OK', ic:'check', hint:'Lightest option — no spare at all', p:v=>v.spareTire==='none' },
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
    el('p',{text:'Tap every answer that fits — most questions welcome more than one — and watch the whole 2026 market shrink to your shortlist. Not sure? Skip it. No wrong answers.'}),
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
    const selected = new Set();
    const card = el('div',{class:'q-card'});
    card.append(el('h3',{text:q.title}), el('div',{class:'q-sub', text:q.sub}));
    const opts = el('div',{class:'q-opts'});

    const contBtn = el('button',{class:'btn primary', style:'display:none', html:`Lock it in ${icon('chevron',14)}`,
      onclick:()=>answer(q, [...selected])});

    q.opts.forEach(o=>{
      const b = el('button',{class:'q-opt'},[
        el('span',{class:'q-ic', html:icon(o.ic,22)}),
        el('span',{text:o.t}),
        o.hint?el('small',{text:o.hint}):null,
      ]);
      if(q.multi){
        b.setAttribute('aria-pressed','false');
        b.addEventListener('click', ()=>{
          if(selected.has(o)) selected.delete(o); else selected.add(o);
          const on = selected.has(o);
          b.classList.toggle('sel', on);
          b.setAttribute('aria-pressed', String(on));
          contBtn.style.display = selected.size ? '' : 'none';
          liveCount();
        });
      } else {
        b.addEventListener('click', ()=>answer(q, [o]));
      }
      opts.append(b);
    });
    opts.append(el('button',{class:'q-opt skip', onclick:()=>answer(q, null)},[
      el('span',{class:'q-ic', html:icon('question',22)}),
      el('span',{text:'Not sure / don’t care'}),
      el('small',{text:'Skip — keeps everything in'}),
    ]));
    card.append(opts);

    // On multi questions a live line previews what the current picks keep in.
    const preview = el('div',{class:'muted tiny', style:'text-align:center;margin-top:12px;min-height:1.2em'});
    if(q.multi) card.append(preview);
    function liveCount(){
      if(!selected.size){ preview.textContent=''; return; }
      const n = pool.filter(v=>[...selected].some(o=>o.p(v))).length;
      preview.textContent = `${selected.size} pick${selected.size>1?'s':''} → ${n} vehicle${n===1?'':'s'} stay in`;
    }

    const foot = el('div',{class:'finder-foot', style:'margin-top:16px'});
    if(step>0) foot.append(el('button',{class:'btn ghost sm', html:`${icon('undo',14)} Back`, onclick:back}));
    if(q.multi) foot.append(contBtn);
    card.append(foot);
    stage.append(card);
  }

  // opts: array of selected options (OR-combined), or null for skip.
  function answer(q, opts){
    const label = opts ? opts.map(o=>o.t).join(' + ') : '(skipped)';
    answers.push({ q:q.key, a:label, pool:[...pool] });
    if(opts && opts.length){
      const next = pool.filter(v=>opts.some(o=>o.p(v)));
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

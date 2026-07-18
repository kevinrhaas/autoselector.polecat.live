// views/oracle.js — "Mind Reader": the finder that never mentions cars.
//
// You answer odd, abstract questions (situations, puzzles, tastes). Each answer
// secretly nudges every vehicle's affinity score across 14 traits; the pool is
// then whittled by dropping the lowest scorers. A tap reveals exactly WHY the
// list shrank, and you can wave off any question for a different one.
import { el } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { QUESTIONS, traitProfile, TRAIT_WORDS } from '../data/oracle.js';
import { vtile, vtileGrid, emptyState } from './shared.js';

const KEEP = 0.72;   // fraction of the current pool kept per answered question
const FLOOR = 6;     // never whittle below this many

const cap = s=> s ? s[0].toUpperCase()+s.slice(1) : s;
const pick = (arr)=> arr[Math.floor(Math.random()*arr.length)];

export function renderOracle(view, ctx){
  const all = Store.vehicles();
  const score = new Map(all.map(v=>[v.id, 0]));
  let pool = [...all];
  const asked = new Set();
  const history = [];            // {qid, before:[ids], scoreBefore:Map, report}
  let current = null;

  const wrap = el('div',{class:'finder-wrap'});
  view.append(wrap);
  wrap.append(el('div',{class:'finder-head'},[
    el('h2',{text:'Mind Reader'}),
    el('p',{text:'Answer a few odd little questions — none of them are about cars, we promise. We’ll read your taste and quietly whittle the 2026 market down to you. Don’t like a question? Wave it off for another.'}),
  ]));
  const counter = el('div',{class:'finder-count'},[
    el('span',{class:'fc-n', text:String(pool.length)}),
    el('span',{class:'fc-lbl', text:'vehicles still in the running'}),
  ]);
  const dots = el('div',{class:'whittle', 'aria-hidden':'true'});
  const DOT_N = Math.ceil(all.length/3);
  for(let i=0;i<DOT_N;i++) dots.append(el('i',{class:'w-dot'}));
  const stage = el('div');
  wrap.append(counter, dots, stage);

  function syncViz(animate=true){
    const n = counter.querySelector('.fc-n');
    n.textContent = String(pool.length);
    if(animate){ n.classList.remove('bump'); void n.offsetWidth; n.classList.add('bump'); }
    const keep = Math.ceil(pool.length/3);
    [...dots.children].forEach((d,i)=>d.classList.toggle('out', i>=keep));
  }

  function nextQuestion(){
    const fresh = QUESTIONS.filter(q=>!asked.has(q.id));
    return fresh.length ? pick(fresh) : null;
  }

  // ---- render one question (optionally atop a whittle report) ----
  function ask(report, forceQ){
    syncViz(!!report);
    stage.innerHTML = '';
    if(report) stage.append(report);

    if(!forceQ && (pool.length<=FLOOR || asked.size>=QUESTIONS.length)){ return results(); }
    current = forceQ || nextQuestion();
    if(!current){ return results(); }

    const card = el('div',{class:'q-card oracle-card'});
    card.append(el('div',{class:'oracle-kicker', text:`Question ${asked.size+1}`}));
    card.append(el('h3',{text:current.prompt}));
    if(current.sub) card.append(el('div',{class:'q-sub', text:current.sub}));
    const opts = el('div',{class:'q-opts oracle-opts'});
    current.opts.forEach(o=>{
      opts.append(el('button',{class:'q-opt oracle-opt', onclick:()=>answer(o)},[
        el('span',{text:o.t}),
      ]));
    });
    card.append(opts);

    const foot = el('div',{class:'finder-foot', style:'margin-top:14px;flex-wrap:wrap;gap:8px'});
    foot.append(el('button',{class:'btn ghost sm', html:`${icon('refresh',14)} I don’t know — ask me something else`,
      onclick:()=>{ asked.add(current.id); ask(); }}));
    if(history.length) foot.append(el('button',{class:'btn ghost sm', html:`${icon('undo',14)} Undo last`, onclick:undo}));
    if(pool.length<all.length) foot.append(el('button',{class:'btn sm', html:`${icon('check',14)} Reveal my matches`, onclick:results}));
    card.append(foot);
    stage.append(card);
  }

  // ---- apply an answer: score, whittle, build the "why" report ----
  function answer(o){
    const before = pool.map(v=>v.id);
    const scoreBefore = new Map(score);
    // per-vehicle delta this round
    const delta = new Map();
    for(const v of pool){
      const prof = traitProfile(v);
      let d = 0;
      for(const t in o.w) d += o.w[t] * (prof[t]||0);
      delta.set(v.id, d);
      score.set(v.id, (score.get(v.id)||0) + d);
    }
    // whittle: keep the top slice of the CURRENT pool by cumulative score
    const keepN = Math.max(FLOOR, Math.ceil(pool.length * KEEP));
    const ranked = [...pool].sort((a,b)=> (score.get(b.id)) - (score.get(a.id)));
    const kept = ranked.slice(0, keepN);
    const dropped = ranked.slice(keepN);

    asked.add(current.id);
    history.push({ qid:current.id, before, scoreBefore });
    pool = kept;

    const report = buildReport(o, delta, dropped, kept, before.length - kept.length);
    ask(report);
  }

  function undo(){
    const h = history.pop(); if(!h) return;
    asked.delete(h.qid);
    for(const [k,v] of h.scoreBefore) score.set(k,v);
    pool = all.filter(v=>h.before.includes(v.id));
    // re-present the very question that was just undone, so it can be re-answered
    ask(null, QUESTIONS.find(q=>q.id===h.qid));
  }

  // ---- the reveal ----------------------------------------------------------
  function buildReport(o, delta, dropped, kept, droppedCount){
    const pos = Object.entries(o.w).filter(([,w])=>w>0).sort((a,b)=>b[1]-a[1]).map(([t])=>t);
    const neg = Object.entries(o.w).filter(([,w])=>w<0).sort((a,b)=>a[1]-b[1]).map(([t])=>t);
    const posTxt = pos.map(t=>TRAIT_WORDS[t]).slice(0,3);
    const negTxt = neg.map(t=>TRAIT_WORDS[t]).slice(0,2);
    // most-affected examples
    const droppedEx = [...dropped].sort((a,b)=>(delta.get(a.id)||0)-(delta.get(b.id)||0)).slice(0,3).map(v=>`${v.make} ${v.model}`);
    const keptEx = [...kept].sort((a,b)=>(delta.get(b.id)||0)-(delta.get(a.id)||0)).slice(0,3).map(v=>`${v.make} ${v.model}`);

    const box = el('div',{class:'oracle-report'});
    const head = el('button',{class:'or-head', 'aria-expanded':'false'},[
      el('span',{class:'or-count'},[ el('b',{text:String(droppedCount)}), el('span',{text:` car${droppedCount===1?'':'s'} left the running`}) ]),
      el('span',{class:'or-why', html:`Why? ${icon('chevron',13)}`}),
    ]);
    const detail = el('div',{class:'or-detail', hidden:true});
    let lean = `That answer leaned toward <b>${posTxt.join('</b>, <b>')}</b>`;
    if(negTxt.length) lean += ` — and eased off <b>${negTxt.join('</b>, <b>')}</b>`;
    detail.append(el('p',{class:'or-lean', html:lean+'.'}));
    if(droppedEx.length) detail.append(el('p',{class:'or-ex', html:
      `Stepped out: <span class="or-drop">${droppedEx.join(', ')}</span>` +
      (keptEx.length?`<br>Moved up: <span class="or-keep">${keptEx.join(', ')}</span>`:'') }));
    head.addEventListener('click', ()=>{ const open=detail.hidden; detail.hidden=!open; head.setAttribute('aria-expanded', String(open)); });
    box.append(head, detail);
    return box;
  }

  // ---- results -------------------------------------------------------------
  // We never whittle to a single car (the tail would be arbitrary). Instead we
  // rank the finalists by cumulative affinity and crown a clear #1, then show
  // the rest as runners-up — so "your match" is one car, not a mysterious six.
  function results(){
    syncViz();
    stage.innerHTML = '';
    const ranked = [...pool].sort((a,b)=> (score.get(b.id)) - (score.get(a.id)));
    const top = ranked[0];
    const rest = ranked.slice(1);
    Store.recordFinderRun('Mind Reader', history.map(h=>({q:h.qid, a:'answered'})), ranked.slice(0,24).map(v=>v.id));

    const done = el('div',{class:'q-card', style:'text-align:center'});
    done.append(el('h3',{text: rest.length ? '🔮 We read you.' : '🔮 One perfect match.'}));
    done.append(el('div',{class:'q-sub', text: rest.length
      ? `Here’s your #1 match — and ${rest.length} more that fit. Tap any card for the full story.`
      : 'Tap the card for the full story.'}));
    const foot = el('div',{class:'finder-foot', style:'flex-wrap:wrap;gap:8px'});
    foot.append(el('button',{class:'btn', html:`${icon('refresh',15)} Read me again`, onclick:restart}));
    if(history.length) foot.append(el('button',{class:'btn ghost', html:`${icon('undo',15)} Go back a question`, onclick:undo}));
    if(asked.size<QUESTIONS.length) foot.append(el('button',{class:'btn ghost', html:`${icon('wand',15)} Ask one more`, onclick:()=>ask(null, nextQuestion())}));
    done.append(foot);
    stage.append(done);

    if(top){
      const win = el('div',{class:'oracle-winner'});
      win.append(el('div',{class:'ow-badge', html:`${icon('trophy',14)} Your #1 match`}));
      win.append(vtile(top, ctx));
      stage.append(win);
    }
    if(rest.length){
      stage.append(el('h3',{class:'oracle-rest-h', text:`The rest of your shortlist`}));
      stage.append(vtileGrid(rest, ctx));
    }
    if(!top) stage.append(emptyState({title:'Nothing left', body:'That got a little too specific — read me again.', icon:'wand'}));
    if(top) import('../ui.js').then(m=>m.celebrate && m.celebrate(28));
  }

  function restart(){
    for(const k of score.keys()) score.set(k,0);
    pool = [...all]; asked.clear(); history.length=0;
    ask();
  }

  ask();
}

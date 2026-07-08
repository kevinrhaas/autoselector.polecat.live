// What's-next: the public, machine-readable slice of the roadmap. Newest
// planning first. Fleet convention (like relay's
// https://relay.polecat.live/js/whatsnext.js): every project exports a
// `WHATSNEXT` array from js/whatsnext.js so people — and sibling apps — can
// see what's coming, e.g. https://autoselector.polecat.live/js/whatsnext.js
//
// The self-improvement loop keeps this in sync with ROADMAP.md: when an item
// ships it moves into js/changelog.js; when planning changes, edit here.
// Each entry: { title, detail, status:'next'|'planned'|'exploring', eta? }
import { el, modal } from './ui.js';
import { icon } from './icons.js';

export const WHATSNEXT = [
  { status:'next', title:'Sources for every stat',
    detail:'Every vehicle page gets precise, verified citations (manufacturer 2026 pages, fueleconomy.gov, price guides) — 49 of 326 models are live (Toyota is fully cited), ~15 more per run until all 326 are cited.' },
  { status:'next', title:'Trim-level options & equipment',
    detail:'Different trims carry different options — per-trim notable-equipment lists roll out brand by brand (the UI column is already live).' },
  { status:'next', title:'Colors with real swatches',
    detail:'All exterior colors and interior colors per model, with samples, and every interior classified light or dark.' },
  { status:'next', title:'2026-photo audit + missing images',
    detail:'Every photo must show the actual 2026-model-year generation; auditing existing shots and adding missing models (current generation only).' },
  { status:'next', title:'Per-make data verification sweeps',
    detail:'The loop re-verifies one manufacturer per run against current published specs and prices, raising every record to high confidence.' },
  { status:'planned', title:'More fun multi-select finders & visuals',
    detail:'A “Two cars enter” tournament, a swipe-style taste profiler, and an animated market-bubble map — all game-like, all multi-select, never forcing one box.' },
  { status:'planned', title:'Real nearby-dealer lists',
    detail:'Verified official locator links per brand today; exploring true in-app closest-dealer lists from your saved ZIP or location.' },
  { status:'planned', title:'Dealer-style build sheet',
    detail:'Pick a trim + options and get a printable, sharable spec sheet with estimated out-the-door price.' },
  { status:'planned', title:'Remote database sync (SQLite/Postgres profiles)',
    detail:'Connect a data profile, inspect the source, create schema + optional seed data, and manage rows from Settings → Data.' },
  { status:'exploring', title:'Ownership-cost lens',
    detail:'Fuel/energy, insurance-band and depreciation estimates layered onto every result list.' },
  { status:'exploring', title:'EPA + NHTSA live data hooks',
    detail:'Pull fuel economy and safety ratings straight from public APIs where CORS allows.' },
];

export function openWhatsNext(){
  const LBL = { next:'Up next', planned:'Planned', exploring:'Exploring' };
  const body = el('div');
  ['next','planned','exploring'].forEach(st=>{
    const items = WHATSNEXT.filter(w=>w.status===st);
    if(!items.length) return;
    body.append(el('div',{class:'sc-group-title muted tiny', text:LBL[st]}));
    items.forEach(w=>{
      body.append(el('div',{style:'padding:10px 0;border-bottom:1px solid var(--border)'},[
        el('b',{text:w.title}),
        el('div',{class:'muted', style:'font-size:13px;margin-top:3px', text:w.detail}),
      ]));
    });
  });
  return modal({ title:"What's next", icon:icon('road',20), body, wide:true });
}

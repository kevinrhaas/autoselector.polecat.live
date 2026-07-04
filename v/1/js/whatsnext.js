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
  { status:'next', title:'Per-make data verification sweeps',
    detail:'Hourly loop re-verifies one manufacturer per run against current published specs and prices, raising every record to high confidence.' },
  { status:'next', title:'Local hero images for every model',
    detail:'Download and credit a good-resolution photo for each of the ~300 catalog vehicles (popular models shipped in v1).' },
  { status:'planned', title:'Dealer-style build sheet',
    detail:'Pick a trim + options and get a printable, sharable spec sheet with estimated out-the-door price.' },
  { status:'planned', title:'Finder: "Two cars enter" tournament',
    detail:'A fun head-to-head bracket — keep picking the one you like more until your winner emerges.' },
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

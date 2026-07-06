// Changelog powering the in-app "What's new" panel. Newest first.
//
// Fleet convention (shared with relay / manager / jobtracker / the polecat
// family): every project publishes its release history as a `CHANGELOG`
// array exported from `js/changelog.js`, so any app's "Sync changelog" can
// fetch it — e.g. https://autoselector.polecat.live/js/changelog.js
// Each entry:
//   { v:int, title, kind?, ts, date, items:[…] }   (newest first)
//
// The hourly self-improvement loop appends a new entry at the TOP for each
// user-visible change (bump `v` by 1, short `title`, optional `kind`, 1–4
// `items`). Leave `ts` as an EMPTY string on the new entry — the workflow
// stamps it with the real commit time so timestamps are never fabricated.
// `ts` is ISO-8601 UTC; `date` is a derived human-readable Central Time alias
// (regenerated from `ts` by .github/stamp-changelog.mjs — do NOT hand-edit it).
import { el, modal } from './ui.js';
import { icon } from './icons.js';

export const CHANGELOG = [
  {
    v: 2,
    title: 'Marketing hero: the app, front and center',
    kind: 'polish',
    ts: '2026-07-06T13:52:00.902Z',
    date: 'Jul 6, 2026, 8:52 AM CT',
    items: [
      'The public homepage hero is now a big auto-rotating carousel of 7 real, chrome-less app screenshots — each captured mid-interaction (filters on, questions answered, personas ranked) with an explanatory caption overlay.',
      'Arrows, tappable dots, a progress bar, pause-on-hover, and keyboard navigation; auto-advance turns off under reduced-motion.',
      'Screenshot generator upgraded: hero shots now capture at large browser size (1460×940 @2x) and the phone gallery was refreshed too.',
      'Layout fixes across the page: feature cards back to a proper 3-across grid with gradient icon chips (desktop and mobile), the "How it works" steps no longer show doubled numbers, and the footer GitHub link was removed.',
    ],
  },
  {
    v: 1,
    title: 'Hello, AutoSelector',
    kind: 'feature',
    ts: '2026-07-04T20:45:24.484Z',
    date: 'Jul 4, 2026, 3:45 PM CT',
    items: [
      'The complete 2026 US vehicle catalog: every make and model with prices, powertrains, dimensions, seating, spare-tire and physical-control details.',
      'Three fun finders — Match Maker (answer questions, watch the field whittle down), Lifestyles (pick the driver you are), and Budget Explorer (live sliders).',
      'My Garage: favorites, notes, recents and a side-by-side Compare for up to 4 vehicles.',
      'Six themes (AutoSelector / Polecat × Dark / Light / System), a welcome tour, full in-app docs, undo/history, and a mobile-friendly shell.',
    ],
  },
];

// ---- "What's new" UI ------------------------------------------------------
const SEEN_KEY = 'as.changelog.seen';   // last-seen version int

export function latestVersion(){ return CHANGELOG[0]?.v || 0; }
export function hasUnread(){
  try{ return latestVersion() > (parseInt(localStorage.getItem(SEEN_KEY)||'0',10)); }
  catch{ return false; }
}
export function markRead(){ try{ localStorage.setItem(SEEN_KEY, String(latestVersion())); }catch{} }

const KIND_LABEL = { feature:'New', polish:'Polish', fix:'Fix', data:'Data' };

export function openWhatsNew(){
  markRead();
  const body = el('div',{class:'wn-list'});
  CHANGELOG.slice(0, 20).forEach(e=>{
    const head = el('div',{style:'display:flex;align-items:center;gap:9px;flex-wrap:wrap'});
    head.append(el('span',{class:'chip', text:`v${e.v}`}));
    if(e.kind) head.append(el('span',{class:'chip', text:KIND_LABEL[e.kind]||e.kind}));
    head.append(el('b',{text:e.title}));
    if(e.date) head.append(el('span',{class:'muted tiny', text:e.date}));
    const ul = el('ul',{style:'margin:8px 0 0;padding-left:20px'});
    (e.items||[]).forEach(t=>ul.append(el('li',{class:'muted', style:'font-size:13px;margin-bottom:4px', text:t})));
    body.append(el('div',{style:'padding:12px 0;border-bottom:1px solid var(--border)'},[head, ul]));
  });
  return modal({ title:"What's new", icon:icon('sparkle',20), body, wide:true });
}

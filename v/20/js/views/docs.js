// views/docs.js — complete in-app documentation for first-time users.
// Rendered from a small structured outline so the loop can extend it easily.
import { el } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { startTour } from '../tour.js';
import { openWhatsNext, openWhatsNew } from '../whatsnew.js';

const SECTIONS = [
  { id:'start', icon:'rocket', title:'Getting started', body:[
    ['Welcome!', 'AutoSelector knows every 2026 model-year vehicle sold in the US — prices, powertrains, dimensions, seats, and the practical details other sites skip (spare tires! climate knobs!). Your job is just to say what you want; the finders do the narrowing.'],
    ['The 60-second version', '1) Open Match Maker and answer a few questions. 2) Tap the heart on anything you like. 3) Line favorites up in Compare. That’s genuinely the whole workflow.'],
    ['Nothing to sign up for', 'Everything you do is saved privately in your browser (favorites, notes, searches). Export it anytime from Settings → Data.'],
  ]},
  { id:'finders', icon:'target', title:'The finders', body:[
    ['Match Maker', 'A friendly question flow. Every answer filters the market live — the big number and the fading dots show it shrinking. “Not sure / don’t care” is always an option and simply skips that filter. If an answer would leave zero cars, we skip it automatically and tell you.'],
    ['Lifestyles', 'Pick the driver you are — first car, growing family, comfort & confidence, adventurer, eco commuter, work & tow, pure fun, luxury. Each persona ranks all 325 vehicles by fit, not just filters them.'],
    ['Budget Explorer', 'Sliders for price, seats and efficiency plus powertrain toggles, with a live count. Hand the result off to All Vehicles for fine-tuning.'],
  ]},
  { id:'browse', icon:'list', title:'All Vehicles & search', body:[
    ['Filters that matter', 'Engine and Body are separate pill groups; everything else is a multi-select dropdown with live counts — brands (with logos), Tire (full-size, donut, or none), Controls (physical climate/audio knobs), and Exterior/Interior color grouped into families (all the blues together). Plus seats by a minimum AND a maximum (a strict two-seater, or capped at five) — details that make or break a car you’ll live with for a decade.'],
    ['Select mode (your cart)', 'Tap “Select” to multi-pick vehicles. Send them straight to Compare, or add them to your Shortlist — a cart you build up as you browse. Your Shortlist lives in My Garage and loads into Compare in one tap.'],
    ['Saved searches', 'Set up filters, hit “Save search”, name it. Rerun it from Home or My Garage with one tap.'],
    ['Quick search', 'Press / anywhere. Type any mix of words — “hybrid suv 7 seats”, “miata”, “kia ev”.'],
  ]},
  { id:'garage', icon:'garage', title:'Garage, Shortlist, Compare & notes', body:[
    ['Shortlist', 'The cart you build in All Vehicles. It’s unlimited — stash anything that catches your eye, then compare the top picks or clear it whenever.'],
    ['Favorites', 'The heart on any card or detail page. Favorites appear on Home and in My Garage.'],
    ['Compare', 'Line up four vehicles (the C key works in a detail view, or add from your Shortlist). Best numbers in each row glow green.'],
    ['Notes', 'Every vehicle page has a private note box — “dealer quoted $2k under MSRP”, “mom found the seats comfy”. Notes autosave.'],
  ]},
  { id:'data', icon:'db', title:'The data', body:[
    ['Where it comes from', 'Compiled from manufacturer announcements, press releases and price guides, then re-verified continuously by our improvement loop. Prices are base MSRP without destination fees. Everything — specs, prices, photos — refers to 2026 model-year vehicles sold in the US.'],
    ['Sources on every page', 'Vehicle pages carry a Sources section with precise links (manufacturer pages, fueleconomy.gov, price guides) backing the stats — rolling out brand by brand.'],
    ['Ratings & how it compares', 'Popular models show public ratings — NHTSA safety stars, IIHS awards, and owner and expert scores, each linked to its source (we omit anything not yet published rather than guess). Every vehicle page also shows compact bars putting its size, power, efficiency and space in context against its class, all cars, and its own brand.'],
    ['Photos', 'The best shot leads; many popular models add a gallery with interior and extra-angle photos (Wikimedia Commons, current generation only). Sources and licenses are in assets/credits.json.'],
    ['Honesty flags', 'Records that contain pre-release estimates carry a visible “data confidence” line on their page, with the reason in the small print.'],
    ['Database-ready', 'The whole catalog maps onto a documented SQLite/Postgres schema — Settings → Data exports the schema and full seed SQL, or connects to a remote JSON source.'],
  ]},
  { id:'custom', icon:'settings', title:'Make it yours', body:[
    ['Themes', 'Settings → Appearance: AutoSelector or Polecat palette, each in Dark, Light, or follow-the-system.'],
    ['Simple mode', 'Bigger text, fewer power-user sections, calmer screens. Great for first-timers — flip it in Settings.'],
    ['Undo everything', 'Ctrl/⌘+Z undoes your last change from anywhere; the History section shows the whole trail.'],
    ['Versions', 'Every deploy is archived. Settings → Version lets you pin an earlier build — your data stays put and stays compatible.'],
  ]},
];

export function renderDocs(view, ctx){
  view.append(el('div',{class:'section-head'},[
    el('h2',{text:'Documentation'}),
    el('div',{class:'sub', text:'Everything about AutoSelector — two minutes to read, zero jargon.'}),
  ]));

  const row = el('div',{style:'display:flex;gap:8px;margin-bottom:18px;flex-wrap:wrap'});
  row.append(el('button',{class:'btn primary', html:`${icon('play',15)} Restart the welcome tour`, onclick:()=>startTour()}));
  row.append(el('button',{class:'btn', html:`${icon('sparkle',15)} What's new`, onclick:()=>openWhatsNew()}));
  row.append(el('button',{class:'btn', html:`${icon('road',15)} What's next`, onclick:()=>openWhatsNext()}));
  view.append(row);

  const grid = el('div',{class:'grid k2'});
  SECTIONS.forEach(s=>{
    const card = el('div',{class:'card pad'});
    card.append(el('h3',{style:'display:flex;align-items:center;gap:8px;font-size:15px;margin-bottom:10px',
      html:`<span style="color:var(--brand-2);display:inline-flex">${icon(s.icon,18)}</span>${s.title}`}));
    s.body.forEach(([h, t])=>{
      card.append(el('div',{style:'margin-bottom:10px'},[
        el('b',{text:h, style:'font-size:13px'}),
        el('p',{class:'muted', style:'margin:3px 0 0;font-size:12.5px;line-height:1.55', text:t}),
      ]));
    });
    grid.append(card);
  });
  view.append(grid);

  view.append(el('p',{class:'muted tiny', style:'margin-top:18px',
    text:`Catalog: ${Store.vehicles().length} vehicles · data version ${Store.dataVersion()} · photo & logo sources with licenses in /assets/credits.json.`}));
}

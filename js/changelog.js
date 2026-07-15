// Changelog powering the in-app "What's new" panel. Newest first.
//
// Fleet convention (shared with relay / manager / jobtracker / the polecat
// family): every project publishes its release history as a changelog array
// exported from js/changelog.js, so any app's "Sync changelog" can fetch it.
// Each entry has: v (int), title, kind (optional), ts, items.
//
// IMPORTANT — TWO RULES so sibling apps can fetch and parse this file:
//   1. Keep it PURE DATA. No imports, no functions, nothing but this header
//      and the two exports below (the CHANGELOG array and the LATEST_VERSION
//      convenience constant). The "What's new" UI lives in js/whatsnew.js.
//   2. Keep the header comment free of the literal export token and of any
//      "[" bracket. Naive parsers locate the array by finding that token then
//      the next "[" — a bracketed example up here would trap them.
//
// The self-improvement loop prepends a new entry at the TOP for each
// user-visible change (bump v by 1, short title, optional kind, 1-4 items).
// Leave ts as an EMPTY string on the new entry — the workflow stamps it with
// the real commit time so timestamps are never fabricated. ts is ISO-8601
// UTC; the panel formats it to Central Time (shown as CT).

export const CHANGELOG = [
  {
    v: 12,
    title: 'Theme engine vendored in — reduce-motion now stays put across theme changes',
    kind: 'fix',
    ts: '2026-07-15T20:06:09.826Z',
    items: [
      'Palettes, light/dark, and system mode now run on the shared Polecat Shell theme engine — no visible change to the six existing themes.',
      "Fixed a latent bug: toggling theme or switching light/dark could silently reset your Reduce Motion preference back to the browser's OS setting. It now stays exactly as you left it in Settings.",
    ],
  },
  {
    v: 11,
    title: 'Shared fleet toolkit vendored in — same look, one source of truth',
    kind: 'polish',
    ts: '2026-07-15T19:14:11.455Z',
    items: [
      'The buttons, dialogs, toasts, and icon set now come from Polecat Shell, the small toolkit shared with the rest of the fleet, instead of a local copy — no visible change, just less drift to maintain.',
    ],
  },
  {
    v: 10,
    title: 'Build a shortlist, see real ratings, and gauge every spec at a glance',
    kind: 'feature',
    ts: '2026-07-15T06:19:40.977Z',
    items: [
      'All Vehicles has a new multi-select mode — tap Select, pick as many cars as you like, then send them straight to Compare or stash them in a Shortlist you build up like a cart (it lives in My Garage and loads into Compare in one tap). Brands are now a searchable multi-pick with logos and live counts, and seats filter by a minimum AND a maximum, so you can ask for a strict two-seater or cap it at five.',
      'Every vehicle page now shows how it stacks up — compact bars under price, size, power, efficiency, cargo and seating tell you at a glance whether a car is bigger, thirstier or roomier than its class, than all cars, and than its own brand.',
      'Public ratings arrive for 32 of the most popular models — NHTSA safety stars, IIHS awards, and owner and expert scores, each linked to its original source; a small rating badge now shows on cards too.',
      'Photo galleries with interiors — 31 popular models gained real cabin and extra-angle photos (Wikimedia Commons, current generation only) shown as a thumbnail strip on the vehicle page. Home dashboard tiles are clickable now as well, jumping straight to the matching list.',
    ],
  },
  {
    v: 9,
    title: 'Subaru and Honda data sweeps — sources, trims, colors, corrections',
    kind: 'data',
    ts: '2026-07-12T06:46:31.070Z',
    items: [
      'Both Subaru (10 models) and Honda (10 models) are now fully verified against manufacturer pages, EPA fuel economy, and price guides — each with cited sources, per-trim standout features, and exterior/interior color swatches. 74 of 325 models are now cited.',
      'Subaru fixes: the Forester trim list was rebuilt from a broken 8 entries to the correct 11 (7 gas + 4 hybrid) with corrected prices; Impreza RS power (180 hp), Outback and Impreza MPG, and Solterra/Uncharted EV ranges were corrected; the false "final year" note on the Ascent was removed (it continues in the US).',
      'Honda fixes: the all-new Passport lineup expanded to its full 7 variants and the Pilot gained the Touring Blackout trim with updated pricing; the HR-V trim list was corrected; and the new Prelude hybrid coupe was verified and raised to high confidence.',
      'Honda note baked in: the Prologue EV kept its 2026 price cut (EX now from $39,900, about $7,500 below 2025).',
    ],
  },
  {
    v: 8,
    title: 'Lexus data sweep: sources, trims, colors — and a lineup correction',
    kind: 'data',
    ts: '2026-07-09T19:49:03.362Z',
    items: [
      'Every Lexus model now cites its sources (manufacturer pages, EPA fuel economy, price guides), with per-trim standout features and color swatches added across the whole lineup.',
      'Removed the Lexus RC — it was discontinued after the 2025 model year and has no 2026 successor.',
      'Corrected a wave of stale figures: the redesigned ES gained 4 missing trims and accurate dimensions/range; the LC dropped its now-discontinued 500h hybrid; the LS engine size and price were fixed; the LX and GX lineups grew from 3 listed trims to their full 7 and 6; the RZ picked up the new 402-hp 550e F SPORT flagship.',
      'IS, NX, RX, TX, and UX all got corrected pricing, trim counts, and EPA figures too — see docs/DATA.md for the full sweep notes.',
    ],
  },
  {
    v: 7,
    title: 'Changelog now syncs cleanly to the rest of the fleet',
    kind: 'fix',
    ts: '2026-07-08T20:05:14.461Z',
    items: [
      'Fixed the reason manager could not import our changelog — a title with a comma-word-colon phrase tripped its key-quoting parser. Reworded it and added a guard (check-changelog.mjs) that runs manager\'s exact parser in our smoke test, so it can never regress.',
      'js/changelog.js and js/whatsnext.js are now pure-data modules — just the arrays, no imports or UI code — matching the manager/relay format.',
      'The "What\'s new" and "What\'s next" panels moved to js/whatsnew.js and format each timestamp to Central Time at display, so the data files carry only the ISO ts.',
    ],
  },
  {
    v: 6,
    title: 'Toyota data sweep: sources, trims & colors for all 24 models',
    kind: 'data',
    ts: '2026-07-08T15:21:45.135Z',
    items: [
      'Every Toyota model (24 of 24) now cites its sources — manufacturer pages, EPA fuel economy, and price guides — and per-trim standout features are populated across the whole lineup.',
      'Corrected several stale prices and trim lists along the way: GR Corolla dropped its mid trim, Corolla Hatchback swapped Nightshade for a new FX Edition, Prius gained a Nightshade trim, and the Mirai’s phantom “Limited” trim (with a missing price) was removed.',
      '13 Toyota models also got exterior/interior color swatches for the first time, continuing the color-and-swatches rollout.',
      'Sources now cover 49 of 326 models; Toyota is the first brand with full-lineup source coverage.',
    ],
  },
  {
    v: 5,
    title: 'Free and unbiased — said quietly',
    kind: 'polish',
    ts: '2026-07-08T13:47:13.782Z',
    items: [
      'The public site now gently notes what AutoSelector is: completely free, with no ads, no sponsors, no affiliate links, and no agenda — no brand pays for placement, and the finders rank on specs and facts alone.',
      'Kept understated by design: a trust chip in the hero, one line in the data section, and the FAQ — nothing more.',
    ],
  },
  {
    v: 4,
    title: '45 more real 2026 vehicle photos',
    kind: 'data',
    ts: '2026-07-06T18:26:50.658Z',
    items: [
      '45 more models now show real photos — Highlander, Tundra, Land Cruiser, HR-V, Passport, Kicks, Armada, WRX, Mazda3, Jetta, Kona, Sorento, EV6, Traverse, Terrain and more — bringing local coverage to 120 of 326.',
      'Every new photo was verified to show the actual 2026-model-year generation before it was accepted (models with only older-generation photos available were skipped and queued instead).',
      'All sources and licenses recorded in assets/credits.json (Wikimedia Commons).',
    ],
  },
  {
    v: 3,
    title: 'Multi-select finders, cited stats, dealers near you',
    kind: 'feature',
    ts: '2026-07-06T18:21:28.773Z',
    items: [
      'Match Maker questions are now multi-select — tap every answer that fits (commute AND adventure, hybrid AND electric) with a live "picks → vehicles" preview; the flat-tire question now offers full-size spare, donut, and repair kit.',
      'Vehicle pages gained a Sources section: precise, verified 2026-specific citations (manufacturer pages, fueleconomy.gov, price guides) for the most popular models, rolling out to all 326.',
      'Set your home ZIP and favorite brands in Settings → Profile: every vehicle page gets "Closest dealers near you" (live map results) plus the manufacturer’s official locator, and Home gets a your-brands quick-jump row.',
      'Data model now supports per-trim equipment lists and full exterior/interior color swatches (interiors classified light or dark) — filling in brand by brand. Site-wide notice added: all specs, prices and photos are 2026 US model year.',
    ],
  },
  {
    v: 2,
    title: 'Marketing hero: the app, front and center',
    kind: 'polish',
    ts: '2026-07-06T13:52:00.902Z',
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
    items: [
      'The complete 2026 US vehicle catalog: every make and model with prices, powertrains, dimensions, seating, spare-tire and physical-control details.',
      'Three fun finders — Match Maker (answer questions, watch the field whittle down), Lifestyles (pick the driver you are), and Budget Explorer (live sliders).',
      'My Garage: favorites, notes, recents and a side-by-side Compare for up to 4 vehicles.',
      'Six themes (AutoSelector / Polecat × Dark / Light / System), a welcome tour, full in-app docs, undo/history, and a mobile-friendly shell.',
    ],
  },
];

// Newest version number, per the fleet changelog contract (see
// polecat-platform docs/SHELL-API.md). Manager's ingest and the launcher read
// this alongside the array; it is pure data, not a function.
export const LATEST_VERSION = CHANGELOG[0]?.v ?? 0;

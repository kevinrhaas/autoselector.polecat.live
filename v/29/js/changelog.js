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
    v: 29,
    title: 'Photos for the whole Lexus lineup — all 11 models now have real pictures',
    kind: 'data',
    ts: '2026-07-17T01:30:45.294Z',
    items: [
      'Every 2026 Lexus now has a real, current-generation photo — ES, GX, IS, LC, LS, LX, NX, RX, RZ, TX and UX — including the all-new 8th-generation ES and the boxy new GX 550. That brings the catalog to 129 models with local photos.',
      'Six of them (GX, IS, LX, NX, RX and RZ) also gained a real interior shot in the detail-page gallery. All images are free-license Wikimedia Commons, verified to show the generation actually sold for 2026, with credits recorded in assets/credits.json.',
    ],
  },
  {
    v: 28,
    title: 'New finder — Mind Reader reads your taste from questions that aren’t about cars',
    kind: 'feature',
    ts: '2026-07-17T01:15:04.084Z',
    items: [
      'A brand-new finder in the sidebar. Answer odd little questions — a door you’ve never noticed, a wall of paint chips, the animal you’d be for a day — none of them about cars, and the 2026 market quietly whittles down to you.',
      'Every answer shows exactly why the list shrank — tap Why? to see which taste it leaned toward and which vehicles stepped out versus moved up. No black box.',
      'Do not like a question? Tap I don’t know and get a completely different one. There is a library of over a hundred, so it is a little strange and different every time.',
    ],
  },
  {
    v: 27,
    title: 'Match Maker — the getting-in and controls questions are multi-select now',
    kind: 'fix',
    ts: '2026-07-16T20:45:41.941Z',
    items: [
      'How do you want to get in? now lets you tap more than one — sit up high AND slide straight in, say — instead of forcing a single ride height.',
      'Buttons or screens? was confusing — picking touchscreens looked like it would drop the physical-knob cars. It is now two clear choices you can combine: Real knobs and Touchscreen-first. Pick one to narrow, both (or skip) to keep everything.',
    ],
  },
  {
    v: 26,
    title: 'Lincoln data sweep — all four SUVs verified with sources, trims and colors',
    kind: 'data',
    ts: '2026-07-16T20:16:56.032Z',
    items: [
      'The entire 2026 Lincoln lineup (Aviator, Corsair, Nautilus and Navigator — all SUVs now) is verified against Lincoln, EPA and price guides, with cited sources, per-trim standout features and color swatches. 93 of 325 models are now cited.',
      'Corrections along the way — the Aviator makes 383 hp (not 400) and the Navigator 432 hp (not 440), with EPA combined figures fixed to 21 and 17; the Nautilus top price rises to 77660 and the Corsair PHEV settles at 76 MPGe with 27 miles of electric range.',
      'Kept honest — the 2026 Corsair is flagged as its final model year (Louisville Assembly ended production in December 2025) and it is now marginal in the updated IIHS side test rather than a Top Safety Pick; where NHTSA or IIHS have not published a 2026 rating we omit it rather than guess.',
    ],
  },
  {
    v: 25,
    title: 'Data-completeness meter — now tappable for context, and toggleable',
    kind: 'polish',
    ts: '2026-07-16T19:40:27.954Z',
    items: [
      'The little completeness meter on each card now carries an info icon and opens a plain-English breakdown when tapped — what each of the six segments means (sources, full specs, colors, photos, ratings, trim features) and which are present versus still to add.',
      'Prefer a cleaner card? A new Settings toggle — Comfort → Show data-completeness meter — hides it entirely.',
    ],
  },
  {
    v: 24,
    title: 'Budget Explorer gains the main-screen filters — max seats, power and drivetrain',
    kind: 'feature',
    ts: '2026-07-16T19:28:45.771Z',
    items: [
      'Budget Explorer now carries the same controls as All Vehicles — a Maximum seats slider (alongside the minimum), a Min power slider, and a Drivetrain picker (AWD, FWD, RWD, 4WD) — so you can dial in a match without leaving the money view.',
      'Open in All Vehicles now hands off everything you set — price, seat range, MPG, power, powertrain, drivetrain and type — so the full catalog opens pre-filtered exactly where you left off.',
    ],
  },
  {
    v: 23,
    title: 'Filter by vehicle class, and see each card’s data completeness at a glance',
    kind: 'feature',
    ts: '2026-07-16T19:24:16.073Z',
    items: [
      'New Class filter on All Vehicles — pull vehicles by their real segment (compact SUV, midsize 3-row SUV, full-size pickup, midsize sedan and so on), each with a live count. It sits right beside the brand and drivetrain filters.',
      'Every vehicle card now shows a small data chip — a six-segment completeness meter (sources, full specs, colors, photos, ratings and trim features) colored by our confidence level. Hover or tap it for exactly what is verified and what is still to add.',
      'So you can tell a fully-researched record from a pre-release stub at a glance, and the meter fills in as the per-brand verification sweeps roll on.',
    ],
  },
  {
    v: 22,
    title: 'Lifestyles finder — polished icons that fit the theme',
    kind: 'polish',
    ts: '2026-07-16T19:17:33.139Z',
    items: [
      'The Which-driver-are-you personas now use the shared Polecat icon set instead of emoji — crisp, theme-aware glyphs that read cleanly in dark and light mode and match the rest of the app.',
    ],
  },
  {
    v: 21,
    title: 'More ways to filter All Vehicles — drivetrain, MPG, power and capability filters',
    kind: 'feature',
    ts: '2026-07-16T19:14:01.815Z',
    items: [
      'New Drivetrain filter — narrow to all-wheel, front-wheel, rear-wheel or four-wheel drive (each with a live count).',
      'New Min MPG and Min power sliders — set a floor on combined fuel economy or horsepower and the list updates live.',
      'A new More menu bundles capability and safety filters — manual transmission available, tows 5,000+ lb, 250+ miles of electric range and IIHS Top Safety Pick+ — that stack together.',
    ],
  },
  {
    v: 20,
    title: 'Tap any standing bar to see exactly how the number was calculated',
    kind: 'feature',
    ts: '2026-07-16T18:45:30.760Z',
    items: [
      'Every "pricier than 67% of compact SUVs" style bar is now tappable — an info marker hints at it — and opens a breakdown showing precisely which vehicles are in the comparison.',
      'The breakdown lists all three pools — the peer class, all 2026 vehicles and the same brand — each with how many vehicles it holds, the low-to-high range and median, this vehicle’s exact rank (like #24 of 25), and a scrollable ranked list of the class and brand members with this one highlighted.',
      'No more mystery percentages — you can see the whole pool behind every figure.',
    ],
  },
  {
    v: 19,
    title: 'Clearer vehicle pages — a key for the bars, class-relative comparisons and separated powertrains',
    kind: 'feature',
    ts: '2026-07-16T16:33:48.377Z',
    items: [
      'The standing bars now have a plain-English key right below the price — the filled bar is where the vehicle ranks within its class, the grey tick is versus all vehicles and the brand-colored tick is versus other models from the same make.',
      'Those comparisons are now against a real peer class instead of the whole body type — a compact SUV is measured against other compact SUVs, not against full-size ones — so "pricier than 67% of compact SUVs" actually means something. Brands or classes too small to compare fairly fall back to the broad group.',
      'When a vehicle offers more than one powertrain, each is now its own clearly labeled card — numbered and titled with the engine and horsepower — so the options no longer blur together.',
    ],
  },
  {
    v: 18,
    title: 'Match Maker — the getting-in question is clearer now',
    kind: 'fix',
    ts: '2026-07-16T16:25:11.919Z',
    items: [
      'The old "Getting in and out?" step mixed two different things into one option — how high you sit and how much of a climb it is. It now asks how you want to get in with three clear choices — sit up high with a commanding view (a step up to climb in), slide straight in at hip height (no climbing up or dropping down), or low and sporty (drop down into it).',
      'Each choice filters by real ride height — so the shortlist actually matches how you like to get in and out.',
    ],
  },
  {
    v: 17,
    title: 'Ford data sweep — all 14 models verified with sources, trims and colors',
    kind: 'data',
    ts: '2026-07-16T03:53:23.481Z',
    items: [
      'The entire 2026 Ford lineup (14 models — F-150, Super Duty, Ranger, Maverick, Bronco, Bronco Sport, Explorer, Expedition, Escape, Mustang, Mach-E, Transit and E-Transit) is now verified against Ford, EPA and price guides, with cited sources, per-trim standout features and color swatches. 89 of 325 models are now cited.',
      'Among the highlights — the Mustang lineup now includes the 815-hp GTD and confirms the 6-speed manual on GT and Dark Horse; the Escape spells out its four powertrains (gas, hybrid and a 37-mile plug-in); and the Bronco Raptor, Explorer ST and Expedition high-output V6 are all captured.',
      'Kept honest — the F-150 Lightning 2026 status is flagged as uncertain (Ford reportedly wound down production in late 2025), and EPA-exempt heavy-duty figures (the Super Duty and the Transit vans) are left blank rather than guessed.',
    ],
  },
  {
    v: 16,
    title: 'Acura data sweep — sources, trims, colors and figure corrections',
    kind: 'data',
    ts: '2026-07-16T03:36:07.245Z',
    items: [
      'All four 2026 Acura models (ADX, Integra, RDX, MDX) are now verified against Acura and EPA figures — each with cited sources, per-trim standout features, and exterior/interior color swatches. 78 of 325 models are now cited.',
      'Corrections along the way — the ADX combined MPG dropped from 29 to 28 (and its 190 hp confirmed, not 200), the Integra 1.5T from 33 to 32, and the RDX from 24 to 23 now that it is listed AWD-only.',
      'Lineup confirmed for 2026 — the TLX and the GM-based ZDX EV are both discontinued, leaving the Integra as the only Acura sedan. The all-new Acura RSX EV arrives late 2026 and will be added once its specs are published.',
    ],
  },
  {
    v: 15,
    title: 'Interior photos for 16 more popular models — 47 now have galleries',
    kind: 'data',
    ts: '2026-07-16T03:04:12.079Z',
    items: [
      '16 more best-sellers gained real interior and extra-angle photos (Wikimedia Commons, current generation only) — including the all-new 2026 Honda Passport, Hyundai Palisade and VW Tiguan cabins, plus the Odyssey, Grand Highlander, Prius, Sienna, Corolla Cross, Sierra 1500, Colorado, Ram 1500, Compass, Pathfinder, Altima and Sorento. 47 of 325 models now have a photo gallery.',
      'Every shot was verified to show the generation actually sold for 2026; where no free current-generation interior exists (the redesigned GMC Terrain) we added exterior angles only rather than an old-generation cabin. Sources and licenses are recorded in assets/credits.json.',
    ],
  },
  {
    v: 14,
    title: 'Cleaner All Vehicles filters — grouped pills, plus tire, controls and color pickers',
    kind: 'feature',
    ts: '2026-07-16T02:52:19.907Z',
    items: [
      'The filter pills are now sorted into two clearly separated, labeled groups — Engine and Body — so it is obvious what each one controls at a glance.',
      'Everything else moved into tidy multi-select dropdowns — Tire (full-size, donut, or none), Controls (physical climate and audio knobs), and Exterior and Interior color — each with live match counts.',
      'Paint and interior colors are grouped into families — all the blues together, the grays, and so on — so you can filter by the look you want without wading through 100+ individual paint names. Color data is live for the models that have it and growing.',
      'The standalone light-interior toggle is gone. Light versus dark is still tracked behind the scenes, just no longer front and center — filter by a light family like White or Beige if that is the look you want.',
    ],
  },
  {
    v: 13,
    title: 'Public ratings for 18 more popular models — 50 now covered',
    kind: 'data',
    ts: '2026-07-15T21:52:48.856Z',
    items: [
      '18 more best-sellers now show public ratings — NHTSA safety stars, IIHS awards, and owner and expert scores, each linked to its source. This batch adds the Honda Passport and Odyssey, Toyota Grand Highlander, 4Runner, Prius, Sienna and Corolla Cross, GMC Sierra 1500 and Terrain, Chevy Colorado and Trax, Ram 1500, Jeep Compass, Nissan Pathfinder and Altima, Hyundai Palisade, Kia Sorento and VW Tiguan. 50 of 325 models are now rated.',
      'Reported honestly — where a source has not published a 2026 rating we omit it rather than guess (the redesigned GMC Terrain and Chevy Trax show no NHTSA overall yet), and lower scores stand as-is (the new 4Runner, Colorado, Compass and Ram 1500 carry 4-star NHTSA overalls).',
      'New Top Safety Pick+ badges for the Passport, Pathfinder, Palisade, Sorento and Prius; the Corolla Cross earns a Top Safety Pick.',
    ],
  },
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

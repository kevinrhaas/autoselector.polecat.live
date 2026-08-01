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
    v: 79,
    title: 'Bigger touch targets for the Engine/Body filter chips on mobile',
    kind: 'fix',
    ts: '2026-08-01T03:49:15.021Z',
    items: [
      'On All Vehicles, the Engine and Body filter chips were only 24px tall on phones — smaller than every other touch target on the site, on the app\'s core search/filter path. They now reach the 44px floor on mobile, matching the rail\'s touch targets.',
    ],
  },
  {
    v: 78,
    title: 'Shell caught up to v0.6.1 — mobile drawer close button fixed',
    kind: 'fix',
    ts: '2026-08-01T00:07:36.725Z',
    items: [
      'Vendored Polecat Shell refreshed from v0.5.8 to v0.6.1. On phones, the drawer\'s close control now sits inside the drawer itself and always stays reachable — previously a second tap of the topbar hamburger could silently land on the rail\'s own logo instead of closing the drawer, since the backdrop painted above it.',
      'The rail\'s brand mark is now a round single-color ring badge instead of a gradient tile, matching the fleet\'s current mark system.',
    ],
  },
  {
    v: 77,
    title: '5 more interior photos — Kicks, Crown, EV9, CX-90, Canyon',
    kind: 'data',
    ts: '2026-07-31T23:49:15.272Z',
    items: [
      'Interior gallery photos added for 5 more models: Nissan Kicks (explicitly US-captioned second-gen SR AWD), Toyota Crown, Kia EV9, Mazda CX-90 and GMC Canyon — all found via Wikimedia Commons, generation/spec confirmed against each file\'s own description, every URL live-checked before shipping.',
      'Several strong-looking candidates were checked and held back instead of guessed: a Hyundai Ioniq 5 shot with an unconfirmed facelift code and non-US location, a Kia EV6 shot missing any generation info, an Audi A3 shot explicitly labeled pre-facelift, a Golf GTI shot that predates the 2024 hardware refresh, and aging Jeep Gladiator/Dodge Durango shots that don\'t confirm the current dashboard.',
      'Gallery coverage is now 95 of 325 models.',
    ],
  },
  {
    v: 76,
    title: 'Fiat 500e re-verified — pricing and range confirmed exact, sources added',
    kind: 'data',
    ts: '2026-07-31T23:21:08.493Z',
    items: [
      'Fiat\'s one US model, the 500e, re-verified against Stellantis\'s own press release and fueleconomy.gov: Pop $35,700 / Icona $37,700 (both + $1,995 destination) and the 149-mile EPA range / 116 MPGe combined were confirmed exact matches — no price or spec changes needed.',
      'Per-trim features added for the first time: Pop\'s new-for-2026 body-color dashboard vs Icona\'s standard pearl dashboard, vegan leather, heated seats/mirrors and full ADAS suite (blind-spot, adaptive cruise, lane-centering).',
      'Confirmed no 2026 NHTSA record (api.nhtsa.gov returns an empty result set) and no 2026 IIHS test page (only a 2016-model-year 500e is in their archive) — checked both directly, nothing guessed.',
      'A sources array was added citing Stellantis\'s newsroom release, fueleconomy.gov and CarsDirect; fiatusa.com, kbb.com, truecar.com and cars.usnews.com all blocked or timed out on automated fetches.',
    ],
  },
  {
    v: 75,
    title: 'Audi lineup re-verified — two models found to skip the 2026 model year entirely',
    kind: 'data',
    ts: '2026-07-31T23:06:28.004Z',
    items: [
      'All 12 Audi models re-verified against Audi\'s own pricing, NHTSA and IIHS. Every trim ladder was undercounted — A5/S5 grew from 3 to 7 trims, Q5/SQ5 from 2 to 6, Q7 from 2 to 7, Q8 from 3 to 6, A3 from 3 to 5 (a new "Premium Plus S line plus" trim), A6 from 1 to 3, Q4 e-tron from 2 to 4.',
      'Real discovery: the A6 Sportback e-tron and the Q6 e-tron both skip the 2026 model year in the US entirely — Audi jumps straight from 2025 to 2027 for both. Both records now show the real, current 2027 pricing instead of a stale or fabricated 2026 figure.',
      'Real pricing correction: RS Q8 performance is actually $138,300, well below the stale $146,000 on file. Audi\'s real destination charge is $1,295, correcting a prior $1,495 assumption on A6/A8/Q5. IIHS corrected: Q7 earns Top Safety Pick (not Plus); Q4 e-tron\'s "Poor" moderate-overlap rating disqualifies it from any award; A3 doesn\'t qualify either — all checked directly on iihs.org, nothing guessed.',
      'Per-trim features and a sources array added to every model. Colors intentionally omitted fleet-wide — confirmed no Audi model publishes hex swatch values anywhere public.',
    ],
  },
  {
    v: 74,
    title: 'Volkswagen lineup re-verified — real trim ladders for all 10 models',
    kind: 'data',
    ts: '2026-07-31T22:45:09.379Z',
    items: [
      'All 10 Volkswagen models re-verified against VW\'s own order guide, NHTSA and IIHS. Every model\'s trim ladder was undercounted — Atlas and Atlas Cross Sport each grew from 3 to 7 real configurations, Golf GTI from 2 to 3, Taos from 3 to 4, Tiguan from 2 to 4, ID.4 from 2 to 5 trims.',
      'Two real pricing corrections: Atlas Cross Sport\'s top trim was $53,620, not $52,500; Tiguan\'s was $44,560, not $44,135. Atlas and Atlas Cross Sport\'s IIHS award corrected from "Top Safety Pick+" to "Top Safety Pick" (checked directly on iihs.org).',
      'Caught a real discontinuation: the ID. Buzz has no 2026 model year in the US — VW is selling through 2025 inventory with a 2027 model planned. Pricing/trims now show that honestly instead of stale figures.',
      'Per-trim features and a sources array added to every model. Colors intentionally omitted fleet-wide — VW does not publish hex swatch values anywhere public, and the never-guess rule means no fabricated hex codes.',
    ],
  },
  {
    v: 73,
    title: 'Interior photos added for 5 more models',
    kind: 'data',
    ts: '2026-07-28T18:51:07.196Z',
    items: [
      'BMW X1, X5 and X7, Cadillac Lyriq and Chevrolet TrailBlazer all gained a verified current-generation interior gallery photo, sourced from Wikimedia Commons under a free license and live-checked before shipping.',
      'Skipped this run for lack of a confirmed current-generation Commons interior shot: Acura MDX, Audi Q5/Q7/Q8, Cadillac Optiq/XT5 and Chevrolet Blazer EV — see ROADMAP.md for the per-model reasons.',
    ],
  },
  {
    v: 72,
    title: 'Alfa Romeo lineup re-verified — two stale base prices fixed',
    kind: 'data',
    ts: '2026-07-28T18:05:26.143Z',
    items: [
      'All 3 Alfa Romeo models re-verified. Giulia and Stelvio were each simplified to a single Sprint trim for 2026 with an optional Veloce performance package (limited-slip differential, paddle shifters, red calipers) rather than a separate trim SKU.',
      'Caught a real pricing error on both: the destination charge jumped to $3,250 for 2026, but the on-file base MSRPs had wrongly subtracted the old ~$1,795 figure from the same all-in sticker — corrected to Giulia $44,995 and Stelvio $49,995, each now matching the confirmed all-in price exactly.',
      'Tonale\'s three trims (Sprint/Veloce/Sport Speciale) got corrected pricing and its first-ever EPA combined mpg figure (24). Checked IIHS/NHTSA directly for all three — Giulia has an incomplete test with no award, Stelvio and Tonale have no rating at all — nothing guessed. Per-trim features and a sources array added to all three for the first time.',
    ],
  },
  {
    v: 71,
    title: 'Chrysler lineup re-verified — a stale Voyager price fixed',
    kind: 'data',
    ts: '2026-07-28T17:45:00.038Z',
    items: [
      'Both Chrysler models re-verified. The Pacifica\'s Select/Limited/Hybrid Select/Pinnacle/Hybrid Pinnacle trim ladder was independently checked against the current lineup and found already exactly correct.',
      'Caught a real Voyager pricing error: the on-file MSRP was $40,895, but Stellantis\'s own "avoids a price hike" release (cross-checked against CarBuzz) confirms the 2026 base price is unchanged from 2025 at $39,995 — fixed.',
      'Checked IIHS directly for both: the Pacifica\'s Marginal moderate-overlap front result and the Voyager\'s Poor headlights rating both rule out a Top Safety Pick this year. Nothing guessed. Per-trim features and a sources array added to both models for the first time.',
    ],
  },
  {
    v: 70,
    title: 'Dodge lineup re-verified — Charger Sixpack trims tripled, a stale Durango price fixed',
    kind: 'data',
    ts: '2026-07-28T17:00:44.334Z',
    items: [
      'All 4 Dodge models re-verified. The Charger Sixpack grew from 3 to 8 trims (R/T, R/T Plus, Scat Pack and Scat Pack Plus, each 2-door and 4-door), cross-checked against two independent pricing sources; EPA figures are now published and filled in (20 mpg combined for R/T, 19 for Scat Pack).',
      'Caught a real Durango pricing error: the R/T 392 Launch Edition was on file at $50,390, but Dodge\'s own launch pricing — independently confirmed by two other outlets — is $49,995. Added the previously-untracked R/T 392 Launch Edition Premium trim ($57,595).',
      'Checked NHTSA and IIHS for the Charger Daytona and Sixpack — neither has a 2026 record yet — and IIHS for the Durango, which does not qualify for Top Safety Pick (Marginal small-overlap front, no pedestrian crash prevention). Nothing guessed. Per-trim features and sources added to every model for the first time; Hornet\'s discontinued status re-confirmed unchanged.',
    ],
  },
  {
    v: 69,
    title: 'Ram lineup re-verified — trim ladders rebuilt, a stale price fixed',
    kind: 'data',
    ts: '2026-07-28T16:48:27.204Z',
    items: [
      'All 3 Ram models re-verified. The 1500 grew from 3 to 10 trims (Tradesman through Tungsten, adding Express/Big Horn/Warlock/Laramie/Rebel/Limited/Limited Longhorn); the RHO\'s on-file price was stale — its base MSRP is confirmed unchanged from 2025 at $69,995 plus $2,595 destination, not the previous $71,200 figure.',
      'The 2500/3500 grew from 3 to 9 trims, adding the genuinely new-for-2026 Black Express and Warlock trims alongside Big Horn, Laramie, Rebel and Limited Longhorn. The ProMaster grew from 2 to 3 trims (Tradesman/SLT/SLT+) spanning its 14 wheelbase and roof-height combinations.',
      'Checked both NHTSA and IIHS for the 1500 — no Top Safety Pick (Poor moderate-overlap-front crash result) — and for the 2500/3500, which have no 2026 crash-test record at all (heavy-duty trucks are GVWR-exempt from NHTSA/IIHS testing), so nothing was added rather than guessed. Per-trim features and sources added to every model for the first time.',
    ],
  },
  {
    v: 68,
    title: 'Interior photos for the Corvette, GLC and X3',
    kind: 'data',
    ts: '2026-07-28T16:07:27.245Z',
    items: [
      'Added a verified current-generation interior gallery photo for the Chevrolet Corvette (C8), Mercedes-Benz GLC (X254) and BMW X3 (G45) — all found via the Wikimedia Commons search API, generation-confirmed against each file\'s own categories/description before shipping, with license and author credited.',
    ],
  },
  {
    v: 67,
    title: 'Shell caught up to v0.5.8',
    kind: 'fix',
    ts: '2026-07-28T15:55:28.345Z',
    items: [
      'Vendored Polecat Shell refreshed from v0.5.4 to v0.5.8 — on mobile, the navigation drawer\'s close button (the rail-local toggle) now stays reachable even when the drawer backdrop sits above the topbar, fixing a case where the hamburger that opened the drawer couldn\'t close it again.',
    ],
  },
  {
    v: 66,
    title: 'Jeep lineup re-verified — trim ladders rebuilt, a pricing bug fixed',
    kind: 'data',
    ts: '2026-07-28T15:20:58.681Z',
    items: [
      'All 7 current Jeep models re-verified. Wrangler grew from 3 to 7 trims (added Sport S, Rubicon, Sahara, Rubicon X) and picked up the 270-hp 2.0L turbo four it also offers alongside the V6 and Moab 392\'s V8. Grand Cherokee grew from 2 to 6 trims (Laredo X, Limited, Laredo Altitude, Limited Reserve added) — also confirmed Trailhawk and Overland are absent for 2026 (returning 2027 with the 4xe\'s discontinuation) and corrected a keyOption that still referenced them.',
      'Grand Wagoneer grew from 3 to 6 trims (Upland, Limited Reserve, Summit Reserve added) — Summit Reserve, not Summit Obsidian, is actually the top trim, so priceTo rose from $93,390 to $98,795. Compass grew from 2 to 5 trims (Latitude Altitude, Trailhawk, Limited Altitude added) against Stellantis\'s own pricing announcement.',
      'Gladiator: found and fixed a real bug — Mojave had been mistakenly priced identically to Rubicon at $52,000; it\'s actually $53,995, one step above Rubicon. Sahara\'s first-ever addition to the Gladiator lineup (announced 2025-12-19) was confirmed still current.',
      'Recon: EPA certified its range at 222 miles (down from the pre-launch ~230-mile estimate) now that the EV is on sale — raised to confidence high; also added its confirmed 9.1-in ground clearance and approach/breakover/departure angles. Cherokee\'s existing 4-trim ladder was independently re-verified and found already exactly correct.',
    ],
  },
  {
    v: 65,
    title: 'Mitsubishi lineup re-verified — pricing fix, missing trims, sources',
    kind: 'data',
    ts: '2026-07-28T15:02:31.658Z',
    items: [
      'All 4 current Mitsubishi models re-verified against current pricing and manufacturer releases: caught a real mid-model-year price increase on the Outlander — every trim above the base ES (LE/SE/SEL/Trail Edition/Ralliart/Black Edition) rose by about $350, confirmed against two independent current sources.',
      'The Outlander PHEV was missing its SE and SEL trims entirely (only ES and Black Edition were recorded) — added both with verified MSRPs, and corrected its EPA electric range from 44 to the officially stated 45 miles.',
      'Confirmed the Outlander\'s new 1.5L turbo hybrid figures (174 hp, 28 mpg combined) are now final EPA numbers, no longer pending estimates; Eclipse Cross and Outlander Sport pricing/specs checked and found already accurate.',
      'Per-trim IIHS ratings checked for all four (previously only NHTSA had been recorded): Eclipse Cross does not qualify for Top Safety Pick despite its 5-star NHTSA rating; none of the four earn an award. Sources arrays added to all four for the first time.',
    ],
  },
  {
    v: 64,
    title: 'Infiniti lineup re-verified — pricing fix, sources, features',
    kind: 'data',
    ts: '2026-07-28T14:15:35.164Z',
    items: [
      'Both current Infiniti models re-verified: corrected the QX60 LUXE and AUTOGRAPH AWD MSRPs (were overstated by $245 and $1,685) against a dealer pricing breakdown that also matched the already-correct PURE and SPORT figures exactly.',
      'Fixed the QX60’s EPA combined rating from 23 to 24 mpg, verified directly on fueleconomy.gov; the QX80 was re-checked against a current listing and found already accurate, with no mid-year price change.',
      'Per-trim equipment features and a sources array added to both models for the first time.',
    ],
  },
  {
    v: 63,
    title: 'Nissan lineup re-verified — pricing fixes, new trim, sources',
    kind: 'data',
    ts: '2026-07-28T14:01:51.453Z',
    items: [
      'All 11 current Nissan models re-verified against Nissan newsroom releases and independent price guides: caught real changes the data had missed, including the mid-cycle "2026.5" Rogue refresh (added the new Dark Armor trim, corrected every trim price) and a $200 Sentra S/SV pricing correction.',
      'Removed a Leaf "S" trim that Nissan announced but never actually brought to the US market for 2026 (Europe-only); the real US lineup is S+/SV+/Platinum+.',
      'Filled in previously-missing trims: Armada now prices all 6 grades (was 2), Pathfinder all 5 (was 3); fixed a label swap on two Altima AWD trims.',
      'Per-trim equipment features and updated sourcing added across the whole brand; Frontier, Kicks, Murano and the Rogue Plug-in Hybrid were re-checked and confirmed already accurate.',
    ],
  },
  {
    v: 62,
    title: 'Interior galleries for 5 more models',
    kind: 'data',
    ts: '2026-07-28T13:12:46.091Z',
    items: [
      'Real cabin photos added for the Chevrolet Suburban, Nissan Z, Infiniti QX80, Kia K4 and Hyundai Elantra N — all current-generation or US-spec, sourced from Wikimedia Commons with verified free licenses.',
      'Every photo was found via the Commons search API, license and photographer credit pulled from the file’s own metadata, and the URL live-checked before shipping.',
      '79 of 325 models now have a real interior photo.',
    ],
  },
  {
    v: 61,
    title: 'Genesis lineup re-verified — trim ladders rebuilt, sources added',
    kind: 'data',
    ts: '2026-07-28T12:59:36.436Z',
    items: [
      'All 7 Genesis models re-verified against current 2026 pricing — every trim ladder was thin (2-3 bookend trims), so this run rebuilt full lineups against Genesis’s own U.S. pricing release and cross-checked dealer-research pages: G70 grew from 2 to 7 trims (including the new Prestige Graphite), G80 2 to 5, G90 2 to 3, GV60 2 to 4, GV70 2 to 6, GV80 3 to 10 (including both Coupe trims), Electrified GV70 2 to 3.',
      'Two real corrections: re-confirmed the Electrified G80 stays discontinued for the US in 2026, and fixed the Electrified GV70’s range figure from a stale 298 mi to Genesis’s current stated 263 mi (243 mi on the 20-inch Advanced/Prestige wheels) — official EPA numbers for 2026 aren’t published yet.',
      'IIHS ratings added or corrected: the G90 earns a Top Safety Pick (one tier below Plus); the G70 has real IIHS test results but no overall award, and NHTSA has no 2026 record for the G70 or G90 — checked directly, not guessed.',
      'Per-trim features and a sources array added to every model for the first time; all 7 raised to confidence high.',
    ],
  },
  {
    v: 60,
    title: 'Kia lineup re-verified — trim features, sources and colors added',
    kind: 'data',
    ts: '2026-07-28T09:38:00.766Z',
    items: [
      'All 10 Kia models re-verified against current 2026 pricing and given per-trim notable-equipment lists and cited sources for the first time — most trim ladders were thin (only 2 trims recorded) and none had sources, so several grew substantially: Carnival from 2 to 7 trims, K4 from 3 to 7, Sorento and Sportage from 2 to 9 each.',
      'Two pricing corrections came out of the sweep — the K5 GT trim (290-hp turbo) is confirmed still sold for 2026 at $33,590 (previously flagged as uncertain), and the Sportage priceTo was quietly wrong before since it only tracked the top gas trim; the plug-in hybrid actually tops the range at $47,190.',
      'Color swatches were added for Carnival, EV6, EV9, K4 and Niro where a clean color list could be found; Sorento, Sportage, Seltos and K5 were mostly left alone because the available color data looked unreliable or duplicated.',
      'Telluride stays a partial case by design — Kia skipped the 2026 model year for it (sold as a carryover of the outgoing generation, with an all-new redesign arriving as a 2027), so only trim features were added there and pricing was left untouched.',
    ],
  },
  {
    v: 59,
    title: 'Interior galleries — 8 more models, including one facelift Commons hadn\'t surfaced before',
    kind: 'data',
    ts: '2026-07-28T09:13:21.079Z',
    items: [
      'Added real, verified cabin interior photos for honda-prologue, ford-mustang-mach-e, chevrolet-tahoe, nissan-armada, kia-k5, kia-seltos, volkswagen-id4 and subaru-wrx — 74 of 325 models now have an interior shot.',
      'Every photo came from Wikimedia Commons under a free license (CC BY, CC BY-SA or CC0), matched to the model\'s current production generation, and live-checked with curl before shipping.',
      'kia-k5 and kia-seltos both had earlier runs come up empty for a current-generation interior shot — a facelifted cabin photo has since been uploaded to Commons for each, so this run picked them up.',
    ],
  },
  {
    v: 58,
    title: 'Hyundai lineup re-verified — two nameplates dropped for 2026, per-trim features and sources added',
    kind: 'data',
    ts: '2026-07-28T07:47:31.965Z',
    items: [
      'All 16 Hyundai models re-verified against current 2026 pricing and given per-trim notable-equipment lists, cited sources and color swatches for the first time.',
      'Caught two real structural changes: the standard Ioniq 6 is discontinued in the US for 2026 (Hyundai is offering only the high-performance Ioniq 6 N going forward), and the Kona Electric is skipping the 2026 model year entirely in the US, pausing production and returning as a 2027 model. Both records now show honest "unavailable" pricing instead of stale 2025 numbers.',
      'The Ioniq 5 N finally has official 2026 US pricing ($59,900, a $6,300 cut from 2025); the Ioniq 6 N remains genuinely unpriced in the US as of this run despite being confirmed as the surviving Ioniq 6 nameplate.',
      'Expanded several trim ladders that were only tracking base and top pricing (Ioniq 5, Ioniq 9, Kona, Santa Cruz, Palisade, Santa Fe, Tucson) to their full real-world lineups, and corrected a mislabeled top trim on the Ioniq 5.',
    ],
  },
  {
    v: 57,
    title: 'Cadillac lineup re-verified — trim renames, real 2026 pricing, per-trim features',
    kind: 'data',
    ts: '2026-07-28T07:18:56.331Z',
    items: [
      'All 9 Cadillac models re-verified against current 2026 pricing and given per-trim notable-equipment lists and cited sources for the first time. Corrected two real structural changes GM made mid-model-year: the Escalade gas lineup was renamed (Luxury became the base "Escalade" trim, Premium Luxury became "Luxury", Premium Luxury Platinum became "Platinum Luxury", and a new "Platinum Sport" tier was added), and the CT5 dropped its standalone "Luxury" trim, making Premium Luxury the base trim.',
      'Corrected stale pricing and destination-freight charges across CT4, CT5, Escalade, Escalade IQ, Optiq and XT5 following December 2025 to January 2026 GM price increases (all cross-checked against at least two independent sources, not just one article).',
      'Confirmed the Cadillac XT5 continues for 2026 (not discontinued as might be assumed from the XT4/XT6 phase-out) — production is winding down in late 2026 ahead of a redesigned second-generation model.',
      'The Optiq\'s new-for-2026 single-motor RWD variant now has an EPA-published 317-mile range, replacing last run\'s estimate.',
    ],
  },
  {
    v: 56,
    title: 'Interior photos added for 8 more models — Sentra, Sonata, Blazer, Acadia and more',
    kind: 'data',
    ts: '2026-07-28T05:30:45.795Z',
    items: [
      'Added a verified Wikimedia Commons interior gallery photo (current-generation, free-licensed) for the Nissan Sentra, Hyundai Sonata, Chevrolet Blazer, GMC Acadia, Cadillac Escalade IQ, Genesis GV70, Kia Carnival and Jeep Grand Wagoneer — none of which had a gallery entry before. Every URL was confirmed to resolve and every license/author pulled live from Commons\' own file metadata. 69 of 325 models now have a photo gallery.',
      'The Genesis GV70 shot is the post-refresh "PE" cabin (27-inch OLED display) that shipped for the 2026 model year, not the outgoing interior.',
    ],
  },
  {
    v: 55,
    title: 'Buick lineup re-verified — real 2026 pricing across all 4 models',
    kind: 'data',
    ts: '2026-07-28T05:17:01.149Z',
    items: [
      'All 4 Buick models re-verified against current 2026 pricing. Enclave, Encore GX, Envision and Envista MSRPs corrected against confirmed 2025/2026 price increases (Enclave\'s Dec 2025 hike, Encore GX\'s second 2025 hike, Envista\'s Feb 2026 hike) and current destination freight charges; Envision\'s previously-approximate mid/top trims are now cited exactly.',
      'Every Buick trim now lists its notable per-trim features. All 4 models raised to confidence high with cited sources — buick.com blocked automated fetches, so verification relied on GM Authority, Edmunds and Cars.com instead.',
      'Envista stays unrated: NHTSA has no 2026-specific safety record and IIHS scored it Poor on moderate overlap front crash plus front crash prevention, which rules out a Top Safety Pick — checked both agencies, not guessed.',
    ],
  },
  {
    v: 54,
    title: 'Interior photos added for 6 models — Buick lineup, Santa Cruz, Murano',
    kind: 'data',
    ts: '2026-07-28T03:40:45.784Z',
    items: [
      'Added a verified Wikimedia Commons interior gallery photo (current-generation, free-licensed) for all 4 Buick models — Enclave, Encore GX, Envision, Envista — plus the Hyundai Santa Cruz and Nissan Murano, none of which had a gallery entry before. Every URL was confirmed to resolve and every license/author pulled live from Commons\' own file metadata.',
      'Skipped a few other candidates rather than guess: Kia K5 and Volvo XC60 both got mid-cycle interior refreshes for 2025-26 that Commons doesn\'t have photos of yet (only pre-refresh interior shots exist), and Mazda CX-50 / Volkswagen Atlas / Toyota 4Runner have no interior shots on Commons at all yet for their current generation.',
    ],
  },
  {
    v: 53,
    title: 'Safety-rating sweep closes out the catalog; Mazda + Nissan sourced',
    kind: 'data',
    ts: '2026-07-28T03:29:53.092Z',
    items: [
      'Checked the last 30 unrated nameplates against NHTSA\'s API and IIHS.org and confirmed none has a citable 2026 rating: every Aston Martin, Bentley, Ferrari, Lamborghini, Maserati, McLaren and Rolls-Royce model (ultra-low-volume exotics, never crash-tested), plus the Toyota RAV4 (all-new 6th-gen redesign for 2026, not yet tested by either agency). With this batch every one of the 325 models has now been checked at least once — 155 carry a real rating, the rest confirmed unrateable for now.',
      'Added verified `sources` citations (manufacturer + EPA fueleconomy.gov) for all 6 Mazda models missing them (CX-30, CX-50, CX-70, CX-90, Mazda3, MX-5 Miata) and all 9 remaining Nissan models (Altima, Armada, Frontier, Kicks, Leaf, Murano, Pathfinder, Rogue Plug-in Hybrid, Z) — 116 of 325 models now sourced. Nissan Z\'s manufacturer link is its official 2026 brochure PDF (nissanusa.com\'s live vehicle page has already rolled over to the 2027 model); Rogue Plug-in Hybrid has no EPA source yet since fueleconomy.gov has not published a PHEV-specific listing.',
      'Edmunds and KBB continue to block automated fetches in this environment (403s / bot-detection redirects even with browser headers) — these 15 records ship with 2 sources instead of the usual 3 rather than guess a price-guide URL that couldn\'t be verified live.',
    ],
  },
  {
    v: 52,
    title: 'GMC lineup re-verified — real 2026 pricing across all 9 models',
    kind: 'data',
    ts: '2026-07-28T02:06:03.848Z',
    items: [
      'All 9 GMC models re-verified against current 2026 pricing. Terrain, Canyon, Sierra EV, Sierra HD and Yukon had trim MSRPs corrected up or refined; the two Hummer EV variants now share identical 2X and 3X pricing after GM\'s Dec 2025 and Jan 2026 increases.',
      'Destination freight charges corrected fleet-wide — GMC raised them multiple times since these records were first entered (Terrain now $1,995, Canyon $2,095, the full-size trucks up to $2,795).',
      'Every GMC trim now lists its notable per-trim features. 6 of 9 models raised to confidence high with cited sources — gmc.com blocked automated fetches, so verification relied on GM Authority, Edmunds, Cars.com, KBB and dealer research pages instead.',
    ],
  },
  {
    v: 51,
    title: 'Rivian R1T gets a real IIHS safety rating — 160 covered now',
    kind: 'data',
    ts: '2026-07-28T01:47:09.033Z',
    items: [
      'Rivian R1T now shows a real IIHS Top Safety Pick award for 2025-26 — one tier below sibling R1S\'s Top Safety Pick+ — 160 of 325 models covered.',
      'Checked and skipped this batch — no NHTSA star and no IIHS award found on file for 2026: Porsche 911, Panamera, Taycan, Cayenne Electric and Macan Electric; BMW 7 Series, 8 Series, i7, M2, M3, M4, M5, XM and 2 Series Gran Coupe; Alfa Romeo Stelvio; and Lotus Emira.',
      'Also checked but noted for future reference — a real IIHS test page exists but with no Top Safety Pick/Pick+ award (so nothing added to the dataset per the never-guess rule): BMW 5 Series and i5 ("Good" scores, no award), and Alfa Romeo Giulia (incomplete crashworthiness rating). BMW Z4 and 2 Series Gran Coupe have an NHTSA record but OverallRating "Not Rated" (no star to show).',
    ],
  },
  {
    v: 50,
    title: 'Full Chevrolet lineup re-verified — trim shakeups, real 2026 pricing',
    kind: 'data',
    ts: '2026-07-28T01:15:16.514Z',
    items: [
      'All 14 Chevrolet models re-verified against current 2026MY pricing: the Blazer dropped Premier and added a 3LT trim, and the Traverse dropped its LS base trim and brought back High Country — both lineups and prices corrected.',
      'Every trim across Blazer, Blazer EV, Colorado, Corvette, Equinox, Suburban, Tahoe, Traverse and Trax now carries current MSRPs (destination charges rose fleet-wide since these were last checked); Blazer/Corvette/Equinox/Traverse/Trax/Tahoe raised to confidence high.',
      'Added per-trim standard-feature lists for Blazer, Blazer EV, Colorado, Corvette, Equinox, Equinox EV, Silverado EV and Traverse.',
      'Silverado 1500/EV/HD and Equinox EV pricing updated too, but their sprawling cab/battery/config combinations keep them at confidence medium — noted exactly which figures are still estimates.',
    ],
  },
  {
    v: 49,
    title: '13 more models get real IIHS safety ratings — 159 covered now',
    kind: 'data',
    ts: '2026-07-28T01:00:06.876Z',
    items: [
      'Mercedes-Benz C-Class and GLC, Audi A5 and A6, Volvo EX90, Genesis Electrified GV70, Lexus NX, Infiniti QX80, Nissan Armada, Buick Enclave, Hyundai Ioniq 5, Mazda CX-5 and the Rivian R1S now show real IIHS Top Safety Pick or Pick+ awards — 159 of 325 models covered.',
      'These 13 have no NHTSA overall star for 2026 (checked and confirmed "Not Rated") but IIHS already tested them — first batch pulling ratings from IIHS instead of NHTSA-only.',
      'Checked and skipped this batch — no NHTSA star and no IIHS award found on file for 2026: BMW 2 Series/4 Series/X2/X7/i4/iX, Mini Countryman, Porsche Macan/Cayenne, Toyota GR Corolla/GR86, Dodge Charger/Hornet, Polestar 3/4, Ram 2500-3500/ProMaster, Lucid Air/Gravity, Hyundai Nexo, Ineos Grenadier, VinFast VF8/VF9, Rivian R2, and every current Cadillac, Land Rover and Jaguar model.',
    ],
  },
  {
    v: 48,
    title: '10 more models get real NHTSA safety ratings — 137 covered now',
    kind: 'data',
    ts: '2026-07-27T23:50:20.248Z',
    items: [
      'Audi Q4 e-tron, Cadillac Lyriq, Chevrolet Blazer EV/Equinox EV/Silverado EV/Trailblazer, Ford F-150 Lightning, GMC Sierra EV, Hyundai Ioniq 9, and the Tesla Cybertruck now show real NHTSA overall stars (all 5-star) — 137 of 325 models covered.',
      'Checked and skipped this batch — NHTSA "Not Rated" or no 2026 test on file: Audi A3/A5/Q3/Q6 e-tron/A6 e-tron/e-tron GT, Buick Enclave/Envista, Cadillac CT4/Optiq/Vistiq/Celestiq/Escalade IQ, Chevrolet Equinox (gas)/Silverado HD/Corvette, Ford Bronco/F-Series Super Duty/Transit/E-Transit, Genesis G70/G90, GMC Terrain/Sierra HD/Hummer EV, Honda Prelude, Hyundai Elantra N/Ioniq 5 N/Ioniq 6 N, Infiniti QX80, Jeep Cherokee/Gladiator/Wrangler/Recon, Kia Carnival, Lexus ES/NX, Mercedes-Benz C-Class/E-Class/GLC/GLE/CLA/CLE/GLA/GLB/GLS/S-Class/G-Class/AMG GT/AMG SL/EQE/EQS/Sprinter, Nissan Armada/Leaf/Rogue PHEV/Z, Rivian R1S/R1T, Subaru BRZ/Outback, Tesla Model 3/Model S/Model X, and VW Golf GTI/Golf R/ID.Buzz.',
    ],
  },
  {
    v: 47,
    title: '9 more models get real NHTSA safety ratings — 127 covered now',
    kind: 'data',
    ts: '2026-07-27T23:37:08.975Z',
    items: [
      'Audi Q7/Q8, Genesis GV60, Lexus RZ/TX/UX, Mazda CX-70, Toyota Prius Plug-in Hybrid, and the Volvo V60 Cross Country now show real NHTSA overall stars — 127 of 325 models covered.',
      'Checked and skipped this batch — NHTSA "Not Rated": Audi A6/A8, BMW 5 Series/X6, Fiat 500e, Genesis Electrified GV70, Hyundai Ioniq 5, Jaguar F-Pace, Land Rover Defender/Discovery/Discovery Sport/Range Rover Evoque/Range Rover Velar, Lexus GX/IS/LC/LS/LX, Mazda MX-5, Mini Hardtop/Convertible, Mitsubishi Outlander PHEV, Subaru Solterra/Trailseeker/Uncharted, Toyota bZ/bZ Woodland/C-HR/Crown Signia/GR Supra/Mirai/Sequoia Hybrid, Volvo EX30/EX40/EX90/V90 Cross Country. No 2026 NHTSA test on file at all: Alfa Romeo Giulia/Stelvio/Tonale.',
      'Hyundai Kona Electric stays unrated — NHTSA only tests one combined "Kona" listing (already attributed to the gas Kona), with no distinct electric-powertrain record to cite.',
    ],
  },
  {
    v: 46,
    title: '9 more models get real NHTSA safety ratings — 118 covered now',
    kind: 'data',
    ts: '2026-07-27T22:45:58.667Z',
    items: [
      'Acura ADX, BMW X1/X5, Cadillac Escalade, Chrysler Voyager, Jeep Grand Wagoneer, Lincoln Navigator, and the Mitsubishi Eclipse Cross/Outlander Sport now show real NHTSA overall stars — 118 of 325 models covered.',
      'Checked and skipped this batch — NHTSA "Not Rated": Audi Q3/A3/A5, BMW X2/X7, Buick Envista, Cadillac CT4, Chevrolet Corvette, Genesis G90, Hyundai Elantra N, Mercedes-Benz C-Class/E-Class/GLC/GLE, Nissan Rogue/Sentra/Z, Toyota Corolla Cross/GR86/GR Corolla, Volkswagen Golf GTI/Golf R, Dodge Charger, Subaru BRZ, Mini Countryman. No NHTSA test on file yet for 2026: most exotic/low-volume nameplates (Ferrari, Lamborghini, McLaren, Bentley, Rolls-Royce, Aston Martin, Maserati, Lotus, Porsche), plus Tesla, Rivian, VinFast, Polestar, and several other EVs/trucks/vans with no 2026 test on record.',
    ],
  },
  {
    v: 45,
    title: '10 more models get real NHTSA safety ratings — 109 covered now',
    kind: 'data',
    ts: '2026-07-27T22:35:13.991Z',
    items: [
      'Buick Envision, Cadillac XT5, GMC Canyon, Volkswagen Atlas Cross Sport, Volkswagen Jetta GLI, Infiniti QX60, and the Genesis GV70/GV80/G80 now show real NHTSA overall stars — 109 of 325 models covered.',
      'Five of these (Atlas Cross Sport, QX60, GV70, GV80, G80) also carry an IIHS Top Safety Pick+ award.',
      'Checked and skipped this batch — NHTSA "Not Rated": Chevrolet Equinox/Trailblazer, GMC Terrain, Buick Enclave, Nissan Armada/Rogue, Subaru Outback, Kia Carnival, Infiniti QX80, Genesis G70, Jeep Gladiator. No NHTSA test on file yet (2026 or 2025): Jeep Wrangler, Ford Bronco, Toyota Sequoia, plus all-new-for-2026 nameplates Jeep Cherokee, Honda Prelude, and Nissan Leaf.',
    ],
  },
  {
    v: 44,
    title: 'The AutoSelector mark now wears its brand color everywhere',
    kind: 'polish',
    ts: '2026-07-22T20:56:53.247Z',
    items: [
      'The rail brand tile and the app-switcher tiles now use AutoSelector’s own brand gradient — the same vivid color as its polecat.live launcher tile and landing page, so the mark reads identically everywhere.',
      'Built on Polecat Shell v0.5.4.',
    ],
  },
  {
    v: 43,
    title: 'The app rail now wears AutoSelector’s own mark',
    kind: 'polish',
    ts: '2026-07-22T19:53:02.713Z',
    items: [
      'The rail brand is now AutoSelector’s glyph — the same mark you see on its polecat.live launcher tile and its landing-page header — so the app reads as one identity everywhere.',
      'A faint “polecat.live” link sits just under the name in the rail: a quiet way back to the suite.',
      'Built on Polecat Shell v0.5.3.',
    ],
  },
  {
    v: 42,
    title: 'The landing page now wears the shared fleet header & footer',
    kind: 'polish',
    ts: '2026-07-22T18:35:46.909Z',
    items: [
      'AutoSelector’s front door adopts the suite-wide header and footer, so it matches every Polecat app — the same brand tile, a consistent “Polecat” link back to the suite, and the standard footer.',
      'Built on Polecat Shell v0.5.2 (the shared site-chrome plus the ~44px mobile touch targets).',
    ],
  },
  {
    v: 41,
    title: '6 more models get real NHTSA safety ratings — 109 covered now',
    kind: 'data',
    ts: '2026-07-22T17:11:12.761Z',
    items: [
      'Mazda CX-90, Lincoln Corsair/Nautilus, GMC Yukon/Acadia, and Hyundai Ioniq 6 now show NHTSA overall stars — 109 of 325 models covered.',
      'A tougher batch this run: Tesla Model 3/S/X, Porsche Macan, Mazda CX-5, Hyundai Ioniq 5, Mercedes-Benz E-Class/GLC/GLE, Subaru Solterra, Toyota Corolla Cross, and Rivian R1S were all checked and left uncovered — either NHTSA has not published a 2026 OverallRating yet, or (CX-5, Solterra) the vehicle is an all-new redesign so no prior-year carryover applies.',
    ],
  },
  {
    v: 40,
    title: '13 more models get real NHTSA safety ratings — 104 covered now',
    kind: 'data',
    ts: '2026-07-22T17:02:04.930Z',
    items: [
      'Ford Mustang Mach-E/Maverick, Kia K4/EV9, Cadillac CT5, Buick Encore GX, Chrysler Pacifica, Dodge Durango, Mitsubishi Outlander, Volvo XC40/XC60/XC90, and Nissan Frontier now show NHTSA overall stars — 104 of 325 models covered.',
      'Every number is pulled live from the official api.nhtsa.gov/SafetyRatings API and cited with a source link; models NHTSA hasn\'t crash-tested for their current generation (Ford Bronco, Mazda MX-5 Miata, Cadillac CT4, Jeep Cherokee, Jeep Gladiator) were left uncovered rather than guessed.',
    ],
  },
  {
    v: 39,
    title: '9 more models get real NHTSA safety ratings — 92 covered now',
    kind: 'data',
    ts: '2026-07-22T16:51:37.713Z',
    items: [
      'Toyota Camry/Corolla/Sienna, Nissan Kicks, Volkswagen ID.4/Taos, Chevrolet Blazer/Trax, and Hyundai Venue now show NHTSA overall stars — 92 of 325 models covered.',
      'Every number is pulled live from the official api.nhtsa.gov/SafetyRatings API and cited with a source link; models NHTSA hasn\'t crash-tested for their current 2026 generation (Toyota RAV4, Nissan Sentra/Leaf/Armada, Subaru Outback, Chevrolet Equinox, Jeep Wrangler, GMC Terrain) were left uncovered rather than guessed.',
    ],
  },
  {
    v: 38,
    title: '17 more models get real NHTSA safety ratings — 87 covered now',
    kind: 'data',
    ts: '2026-07-19T00:59:11.671Z',
    items: [
      'Ford Mustang/Expedition/Ranger, Honda Ridgeline/Prologue, Mazda CX-50, Hyundai Kona/Santa Cruz, Volkswagen Atlas/Jetta, Subaru WRX, Chevrolet Suburban, Toyota Crown/Corolla Hatchback/Land Cruiser, Kia EV6, and Lexus RX now show NHTSA overall stars — 87 of 325 models covered.',
      'Every number is pulled live from the official api.nhtsa.gov/SafetyRatings API and cited with a source link; models the agency hasn\'t rated yet (Toyota Supra, bZ, bZ Woodland, GR Corolla, Sequoia; Lexus NX/ES; Kia Carnival) were left uncovered rather than guessed.',
    ],
  },
  {
    v: 37,
    title: 'Mind Reader is multi-select — tap every answer that fits',
    kind: 'feature',
    ts: '2026-07-18T13:44:01.199Z',
    items: [
      'Each Mind Reader question now lets you pick more than one answer. Torn between two vibes? Tap both, hit Lock in, and we keep the cars that fit either — the tastes you choose are combined, not forced into one.',
      'The whittle and the Why? reveal work exactly as before, just on your combined pick.',
    ],
  },
  {
    v: 36,
    title: 'Public safety ratings land — 17 more models get real NHTSA stars and IIHS awards',
    kind: 'data',
    ts: '2026-07-18T10:45:06.958Z',
    items: [
      'Acura Integra/MDX/RDX, Audi Q5, BMW 3 Series/X3, Hyundai Elantra/Sonata, Kia K5/Niro/Seltos, Mazda CX-30/Mazda3, Nissan Murano/Sentra, and Subaru Ascent/Impreza now show NHTSA overall stars and, where earned, an IIHS Top Safety Pick or Top Safety Pick+ badge — 70 models covered so far.',
      'Every number is pulled live from the official api.nhtsa.gov/SafetyRatings API or iihs.org and cited with a source link — nothing guessed, nothing carried forward from an outgoing generation.',
    ],
  },
  {
    v: 35,
    title: 'Mind Reader gets 197 new questions — 300+ in the library now',
    kind: 'feature',
    ts: '2026-07-17T18:29:35.204Z',
    items: [
      'The Mind Reader question bank nearly tripled — from about a hundred to over three hundred odd, non-car questions. Rooms and objects, animals and weather, flavors and fabrics, genie bargains and crisis instincts — you can play again and again and rarely see the same one twice.',
      'Every new question still maps to the same fourteen taste traits behind the scenes, so the read stays sharp — and the Why? reveal still shows exactly which cars stepped out and which moved up.',
    ],
  },
  {
    v: 34,
    title: 'Acura photos rounded out — the ADX and RDX now have pictures, plus new interiors',
    kind: 'data',
    ts: '2026-07-17T15:22:43.754Z',
    items: [
      'The all-new Acura ADX and the RDX — the two Acuras that were still showing only an outline — now have real, current-generation photos, so all four Acura models are pictured.',
      'Added interior cabin shots to the RDX and Integra detail-page galleries too. All free-license Wikimedia Commons, credited in assets/credits.json. The catalog now has 139 models with local photos and 55 with photo galleries.',
    ],
  },
  {
    v: 33,
    title: 'Fleet app switcher + refreshed What\'s-New panel',
    kind: 'polish',
    ts: '2026-07-17T10:58:02.851Z',
    items: [
      'The topbar now has a waffle app-switcher, so you can hop straight to any other polecat.live app without leaving your place.',
      'What\'s-New moved into a slide-in panel with search and feature/polish/fix filters instead of a plain list.',
      'Internal-only: the rail/topbar frame now runs on the vendored Polecat Shell (initShell) instead of an AutoSelector-only implementation — same look, shared fleet code underneath.',
    ],
  },
  {
    v: 32,
    title: 'Shell caught up to v0.4.0',
    kind: 'fix',
    ts: '2026-07-17T08:55:15.933Z',
    items: [
      'Vendored Polecat Shell refreshed from v0.1.0 to v0.4.0 — the shared fleet app catalog now carries Analytics’s current tagline, the icon set gained the chrome/media controls (back, fullscreen, sound, muted) promoted from Games, toasts gained an inline action button, and modal/sheet bodies now accept HTML strings alongside DOM nodes.',
    ],
  },
  {
    v: 31,
    title: 'Mind Reader now crowns a clear #1 match — and you can step back a question',
    kind: 'fix',
    ts: '2026-07-17T02:11:12.155Z',
    items: [
      'At the end, Mind Reader now leads with a single highlighted #1 match instead of an ambiguous count, then shows the rest of your shortlist beneath it. No more wondering whether the answer was one car or six.',
      'Added a Go back a question button on the results — step back to your last answer and change it, or ask one more to sharpen the read.',
    ],
  },
  {
    v: 30,
    title: 'Eight more real photos — Ranger, Expedition, Bronco Sport, Canyon, X3, C-Class and more',
    kind: 'data',
    ts: '2026-07-17T01:42:41.172Z',
    items: [
      'Eight popular models that were showing only an outline now have a real, current-generation photo — the Ford Ranger, Expedition and Bronco Sport, GMC Canyon, Jeep Compass, Dodge Durango, the redesigned BMW X3 and the Mercedes-Benz C-Class.',
      'All free-license Wikimedia Commons, verified to show the generation actually sold for 2026, credited in assets/credits.json. The catalog now has 137 models with local photos.',
    ],
  },
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

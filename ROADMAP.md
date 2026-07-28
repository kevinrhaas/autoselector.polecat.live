# AutoSelector — Roadmap

The self-improvement loop reads this file every run (see
`.github/self-improve-prompt.md`). Feature runs take the top unchecked item in
**Next up**; every 5th run is a polish/reflection sweep that also updates this
file with new ideas. Keep `js/whatsnext.js` in sync with the top of this list.

Sizing rule: every run ships 30–45 minutes of complete work — no small
releases. If an item is smaller, bundle it with a data sweep.

## Polecat Shell migration (steward-driven, see polecat-platform/docs/MIGRATION.md #4)

vendor/polecat-shell/ is now populated and READ-ONLY (changes land in the
polecat-platform repo's `lib/` + a sync-shell PR). Progress so far:

- [x] Vendor `lib/` into `vendor/polecat-shell/`.
- [x] `js/ui.js` re-exports the vendored module verbatim (byte-identical
  superset, adds `sheet()`).
- [x] `js/icons.js` now layers AutoSelector's automotive icon family
  (car/suv/truck/van/…) onto the vendored base set via `registerIcons()`;
  `icon`/`iconNames` re-exported, `bodyIcon()` stays local (maps vehicle data,
  not an icon set).
- [x] `js/theme.js` now `configure()`s and re-exports the vendored module
  (storage key `as.theme.v1`, `auto`/`polecat` palettes unchanged). Bridged
  the reduce-motion collision: `js/theme.js` mirrors `Store.settings()
  .reduceMotion` into the vendor's `<storageKey>.motion` override on every
  Store change, so the vendored `applyTheme()` — invoked internally by
  `toggleMode()`/`setTheme()`/its OS motion-preference listener — always
  agrees with the Settings toggle instead of falling back to the OS
  preference. `js/app.js`'s `applySimple()` no longer stamps
  `data-reduce-motion` itself (see js/changelog.js v12 — this also fixed a
  latent bug where toggling theme could silently reset the user's Reduce
  Motion preference).
- [x] Vendor copy caught up from v0.1.0 to v0.4.0 (2026-07-17) — had drifted
  three releases behind since the initial adoption PR, no `sync-shell`
  dispatch had targeted this app since. Picked up the chrome/media icons
  (back/fullscreen/sound/muted), the toast action button, HTML-string
  modal/sheet bodies, and the refreshed fleet catalog tagline — all
  additive, no app code changed. Keep it current with future `sync-shell`
  dispatches (mirrors the jobtracker#11 / manager#14 catch-ups).
- [x] `initShell`/`rightPanel`/`appSwitcher(FLEET)` adoption (2026-07-17) —
  `js/shell.js` (the app-local rail) is gone; `js/sections.js` now holds the
  declarative `SECTIONS` list fed to the vendored `initShell()`. The topbar's
  nodes (title, search, undo, What's-New, theme, waffle) are built once and
  re-slotted across rebuilds so their state survives admin-unlock/Simple-mode
  toggles. `vendor/polecat-shell/{tokens,shell}.css` linked in `app/index.html`
  before `css/styles.css`; the app keeps its own from-scratch `auto`/`polecat`
  token blocks (no conflict — `--rail-accent`/`--font-display` fall through
  from tokens.css since the app doesn't set them). Old `#rail`/`.rail-*`/
  `#main`/`.topbar` CSS removed in favor of the shell's `ps-` prefixed classes.
- [x] `initWhatsNew` adoption for the What's-New panel (2026-07-17) —
  `openWhatsNew()` now opens the vendored `rightPanel()` + `initWhatsNew()`
  (search + kind filters come free) instead of a local `modal()`. "What's
  next" stays a separate, unchanged `modal()` (vendor whatsnew.js only covers
  the changelog contract, not the roadmap feed).
- [x] SW cache bump (2026-07-17, `as-shell-v1` → `as-shell-v2`) — the shell
  swap changes enough cached JS/CSS that stale offline visitors need a clean
  cache.

## Next up (ordered)

- [ ] **Public ratings for every model** — extend `ratings` (safety
  `{nhtsa, iihs}`, `owner`, `expert`, each with a resolving `source`) beyond
  the 160 models done so far (137 with a real NHTSA star, 23 with an IIHS
  award only). **SAFETY SUB-SWEEP NOW EXHAUSTIVE (2026-07-28, js/changelog.js
  v53)**: every one of the 325 models has been checked at least once — the
  remaining 165 unrated models (170 minus rivian-r1t's IIHS add) all have a
  confirmed, verified reason for having no citable 2026 NHTSA/IIHS rating
  (never-tested exotic, no 2026 record, or "Not Rated"/no-award). This run's
  batch (+0 to safety, all confirmed no-record via real NHTSA API queries +
  IIHS site checks, not assumed): every Aston Martin, Bentley, Ferrari,
  Lamborghini, Maserati, McLaren and Rolls-Royce model (aston-martin-db12/
  dbx/valhalla/vanquish/vantage, bentley-bentayga/continental-gt/flying-spur,
  ferrari-12cilindri/296-speciale/849-testarossa/amalfi/f80/purosangue,
  lamborghini-revuelto/temerario/urus, maserati-grancabrio/granturismo/
  grecale/mcpura, mclaren-750s/artura/gts/w1, rolls-royce-cullinan/ghost/
  phantom/spectre — ultra-low-volume exotics NHTSA/IIHS have never tested;
  Rolls-Royce Cullinan/Ghost/Phantom have an NHTSA vehicle record but every
  category is explicitly "Not Rated") plus toyota-rav4 (NHTSA has no 2026
  record — it's an all-new 6th-gen redesign for MY2026, so the prior-year
  5-star rating doesn't carry over per the redesign rule; not yet IIHS-tested
  either). **Future runs on this item: re-check periodically (NHTSA adds
  ratings on a rolling basis) rather than re-querying the same 165 — or shift
  effort to the owner/expert sub-target instead**, since the safety sub-target
  has no fresh candidates left today. Older skip history below is kept for
  provenance. Previous latest (2026-07-28, +1, IIHS-sourced): rivian-r1t —
  Top Safety Pick for 2025-26 (one tier below sibling r1s's Top Safety
  Pick+) — see js/changelog.js v51; that run's skips (checked both NHTSA and
  IIHS, neither has an award): porsche-911/panamera/taycan/cayenne-electric/macan-electric,
  bmw-7-series/8-series/i7/m2/m3/m4/m5/xm/2-series-gran-coupe, alfa-romeo-
  stelvio, lotus-emira. Also checked and noted for later — a real IIHS test
  page exists but with no award (so nothing added, per the never-guess rule):
  bmw-5-series and bmw-i5 ("Good" scores, no Top Safety Pick), alfa-romeo-
  giulia (incomplete crashworthiness rating); bmw-z4 and
  bmw-2-series-gran-coupe have an NHTSA record but OverallRating "Not Rated"
  (no star to show).
  Previous batch (2026-07-28, +13, IIHS-sourced): mercedes-benz-c-class,
  mercedes-benz-glc, audi-a5, audi-a6, volvo-ex90, genesis-electrified-gv70,
  lexus-nx, infiniti-qx80, nissan-armada, buick-enclave, hyundai-ioniq-5,
  mazda-cx-5, rivian-r1s — all confirmed NHTSA "Not Rated" for 2026 but IIHS
  Top Safety Pick/Pick+ winners, so this batch pulled from IIHS instead — see
  js/changelog.js v49; this run's skips (checked both NHTSA and IIHS, neither
  has a 2026 record): bmw-2-series/4-series/x2/x7/i4/ix, mini-countryman,
  porsche-macan/cayenne, toyota-gr-corolla/gr86, dodge-charger-daytona/
  charger-sixpack/hornet, polestar-polestar-3/4, ram-2500-3500/promaster,
  lucid-air/gravity, hyundai-nexo, ineos-grenadier/grenadier-quartermaster,
  vinfast-vf-8/vf-9, rivian-r2, and every current Cadillac, Land Rover and
  Jaguar model (no IIHS Top Safety Pick page exists for those three brands
  this year either).
  Previous batch (2026-07-27, +10): audi-q4-e-tron, cadillac-lyriq,
  chevrolet-blazer-ev/equinox-ev/silverado-ev/trailblazer,
  ford-f-150-lightning, gmc-sierra-ev, hyundai-ioniq-9, tesla-cybertruck
  (all 5-star) — see js/changelog.js v48; that run's skips (checked, not
  guessed — NHTSA "Not Rated" or no 2026 record at all):
  audi-a3/a5/q3/q6-e-tron/a6-e-tron/e-tron-gt,
  buick-enclave/envista, cadillac-ct4/optiq/vistiq/celestiq/escalade-iq,
  chevrolet-equinox (gas)/silverado-hd/corvette, ford-bronco/
  f-series-super-duty/transit/e-transit, genesis-g70/g90, gmc-terrain/
  sierra-hd/hummer-ev-pickup/hummer-ev-suv, honda-prelude,
  hyundai-elantra-n/ioniq-5-n/ioniq-6-n, infiniti-qx80, jeep-cherokee/
  gladiator/wrangler/recon, kia-carnival, lexus-es/nx, mercedes-benz-c-class/
  e-class/glc/gle/cla/cle/gla/glb/gls/s-class/g-class/amg-gt/amg-sl/eqe/
  eqe-suv/eqs/eqs-suv/sprinter, nissan-armada/leaf/rogue-plug-in-hybrid/z,
  rivian-r1s/r1t, subaru-brz/outback, tesla-model-3/model-s/model-x,
  volkswagen-golf-gti/golf-r/id-buzz. Earlier batch skips: audi-a6/a8,
  bmw-5-series/x6, fiat-500e, genesis-electrified-gv70, hyundai-ioniq-5,
  jaguar-f-pace, land-rover-defender/discovery/discovery-sport/
  range-rover-evoque/range-rover-velar (whole brand — no 2026 rating yet),
  lexus-gx/is/lc/ls/lx, mazda-mx-5-miata, mini-cooper/cooper-convertible,
  mitsubishi-outlander-phev, subaru-solterra/trailseeker/uncharted,
  toyota-bz/bz-woodland/c-hr/crown-signia/gr-supra/mirai/sequoia,
  volvo-ex30/ex40/ex90/v90-cross-country (NHTSA "Not Rated");
  hyundai-kona-electric stays unrated too — NHTSA only tests one combined
  "Kona" listing (already attributed to the gas hyundai-kona), no distinct
  electric-powertrain record to cite; alfa-romeo-giulia/stelvio/tonale
  confirmed no 2026 NHTSA record at all. Earlier batches: js/changelog.js
  v47 (+9), v46 (+9), v45 (+10), v41 (+6), v40 (+13), v39 (+9) — see those
  entries for their model lists and skip reasons. Pull NHTSA
  overall stars from the official api.nhtsa.gov/SafetyRatings endpoints,
  IIHS awards from iihs.org, and owner/expert scores only where a real
  number sits on a real page. Omit — never guess — anything a source
  doesn't publish for the 2026 (or carried-over) model year. **A
  same-generation "carried-over" NHTSA rating is only valid if the vehicle
  is confirmed NOT all-new/redesigned for 2026** (check the manufacturer's
  own materials, not just NHTSA's description) — audi-q3, mazda-cx-5,
  subaru-solterra, and (for the NHTSA figure only) the ninth-gen
  nissan-sentra were dropped/trimmed for that reason — re-check skipped
  models each batch, NHTSA adds ratings on a rolling basis. Edmunds and KBB
  both return HTTP 403 to WebFetch in this environment (owner/expert
  sourcing blocked here — try a different fetch path or accept NHTSA/IIHS-
  only coverage for now). ~15–20 models per run.
- [ ] **Interior & multi-photo galleries** — extend `image.gallery`
  (`[{url, kind:'interior'|'exterior', credit, license, commons}]`) beyond the
  69 models done so far (2026-07-28, +8, js/changelog.js v56: nissan-sentra,
  hyundai-sonata, chevrolet-blazer, gmc-acadia, cadillac-escalade-iq,
  genesis-gv70, kia-carnival, jeep-grand-wagoneer — all interior shots, found
  via the Commons search API, license/author pulled from Commons' own file
  metadata, every URL live-checked with curl before shipping; the GV70 shot
  is specifically the post-refresh "PE" cabin with the 27-inch OLED display
  that ships for 2026, verified via the file's Seoul Mobility Show 2025
  upload date rather than assumed). Wikimedia Commons, free licenses only,
  current generation only; interior/cabin shots are the priority. Record each
  in assets/credits.json. The detail-page thumbnail strip already renders
  them. **Checked but skipped this run (no confirmed current-gen Commons
  interior shot)**: ford-escape and chevrolet-trax only have pre-redesign
  interior shots (2013 and 2020 respectively, both since fully redesigned);
  kia-seltos likewise only has 1st-gen (pre-2024) interior shots; toyota-
  4runner has no interior shots on Commons at all yet; honda-ridgeline,
  toyota-corolla-hatchback and subaru-impreza had candidate interior shots
  but the generation/trim couldn't be confirmed as the current US-spec car
  with confidence, so left out rather than guess. Previous batch (2026-07-28,
  +6, js/changelog.js v54): buick-enclave, buick-encore-gx, buick-envision,
  buick-envista, hyundai-santa-cruz, nissan-murano. Earlier skip history:
  kia-k5 and volvo-xc60 both had a MY25/26 interior refresh Commons hasn't
  caught up to (only pre-refresh shots found); mazda-cx-50 and
  volkswagen-atlas have no interior shots on Commons at all for their
  current generation yet — re-check in future runs as Commons contributors
  upload more 2026MY photos.
- [ ] **Sources for every stat** — every record gets a `sources` array of
  precise, verified citations (manufacturer 2026 model page or pressroom,
  fueleconomy.gov for EPA numbers, one major price guide). 116 of 325 models
  now have sources (all Toyota, Lexus, Subaru, Honda, Acura, Ford, Lincoln and
  Mazda models, plus all remaining Nissan models and the original 30 minus
  overlap — 2026-07-28, js/changelog.js v53, +15: Mazda CX-30/CX-50/CX-70/
  CX-90/Mazda3/MX-5 Miata and Nissan Altima/Armada/Frontier/Kicks/Leaf/
  Murano/Pathfinder/Rogue Plug-in Hybrid/Z; edmunds.com and kbb.com both
  blocked automated fetches even with browser headers, so these 15 ship with
  2 verified sources — manufacturer + EPA — instead of the usual 3, rather
  than guess an unverifiable price-guide URL); continue ~15 models per run
  until all 325 are cited. Be precise — deep URLs only, verified to be
  2026-specific.
- [ ] **Trim-level options** — different trims carry different options:
  populate `trims[].features` (notable equipment each trim adds) brand by
  brand during verification sweeps. UI already renders the column.
- [ ] **Colors & swatches** — populate `colors.exterior[{name,hex}]` and
  `colors.interior[{name,hex,tone:'dark'|'light'}]` per model from
  manufacturer configurators; classify every interior as dark or light and
  reconcile with `interior.lightInterior/darkInterior`. UI renders swatches.
- [ ] **2026-photo audit + fill** — every photo must show the actual 2026
  model-year generation. 139 of 325 models now have local photos (all 11
  Lexus models added 2026-07-16; the vetted batch — gmc-canyon, ford-ranger,
  ford-expedition, ford-bronco-sport, jeep-compass, dodge-durango, bmw-x3,
  mercedes-benz-c-class — added 2026-07-16; acura-adx and acura-rdx added
  2026-07-16, completing Acura). Audit the
  existing shots, replace any prior-generation ones, and keep adding missing
  models (current-gen only — skip models whose only Commons photo is an old
  generation and note them). Next candidates: use a
  research agent to find current-gen free Commons files for the remaining
  ~186 models, prioritizing best-sellers.
- [ ] **Real nearby-dealer lists** — beyond the Maps/locator links: verify
  every brand's dealer-locator URL in `js/dealers.js` during brand sweeps;
  explore free dealer APIs for true in-app closest-3 lists using the saved
  ZIP/location.
- [ ] **More fun, multi-select finders** — every new survey/selector must be
  game-like and multi-select (nobody should feel forced into one box; see
  Match Maker). Ideas: "Two cars enter" tournament, spin-the-wheel discovery,
  emoji-reaction speed round ("swipe" left/right on 10 cars → taste profile).
- [ ] **More interactive visuals** — animated market map (bubbles by
  price/size that filter live), whittle-strip upgrades, seat-count pictogram
  picker, animated price-range brush.

- [ ] **Data sweep #1 + coverage audit** — verify the 3 `low` and the worst
  `medium` confidence records (start: Tesla Model S/X wind-down pricing, Ioniq
  6 N, Nexo, Dodge Hornet). Audit coverage against industry counts (~379
  models incl. variants — cars.com); document any intentional folds in
  docs/DATA.md, add genuinely missing nameplates.
- [ ] **Finder: "Two cars enter" tournament** — head-to-head bracket from a
  filtered pool; keep picking the one you like more until a winner emerges.
  Confetti at the end, winner straight into Garage.
- [ ] **Build sheet** — pick a trim + options on the vehicle page, get a
  printable/sharable spec sheet with estimated out-the-door price (destination
  fees per brand, simple tax/fee estimator).
- [ ] **Ownership-cost lens** — annual fuel/energy cost estimate per vehicle
  (national average $/gal and ¢/kWh), toggleable on cards and Compare.
- [ ] **Deep links & shareable shortlists** — encode a filter set / compare
  set in the URL hash so any result list can be shared.
- [ ] **EPA + NHTSA live hooks** — pull fueleconomy.gov + NHTSA safety ratings
  where CORS allows; cache locally; show safety stars on detail pages.
- [ ] **Remote database sync v1** — flesh out Settings → Data profiles:
  read/write workspace rows against an HTTP JSON endpoint with conflict
  prompts; document a tiny optional proxy for SQLite/Postgres.
- [ ] **Garage insights** — "your taste" mini-dashboard: price band, body
  styles, powertrains you gravitate to; suggest 3 vehicles you haven't seen.
- [ ] **Dealer-visit checklist** — per-favorite printable checklist built from
  the practical attributes (test the climate knobs! check the spare!).

## Data verification rotation

One brand per feature run (verify prices/specs vs manufacturer + price guides,
raise `confidence`, fix `notes`, then check off; restart when all done):

- [x] Toyota (2026-07-08 — all 24 models re-verified: corrected several stale
  prices/trim lists — see js/changelog.js v6 — added sources, per-trim
  features, and colors to most records)
- [x] Lexus (2026-07-09 — all 11 current models re-verified, see
  js/changelog.js v8: removed the discontinued RC, fixed the redesigned ES's
  trim count/dimensions/range, dropped the LC's discontinued 500h hybrid,
  fixed the LS engine size, expanded LX from 3 to 7 trims and GX from 3 to 6,
  added the new RZ 550e F SPORT flagship, and corrected pricing/EPA figures
  across IS/NX/RX/TX/UX — added sources, per-trim features, and colors to
  every record)
- [x] Honda (2026-07-12 — all 10 models re-verified, see js/changelog.js v9:
  Passport lineup expanded to 7 variants, Pilot gained Touring Blackout,
  HR-V trims corrected, Prelude verified to high; sources/features/colors added)
- [x] Acura (2026-07-16 — all 4 models re-verified, see js/changelog.js v16:
  corrected EPA MPG on ADX/Integra/RDX, confirmed ADX 190 hp, RDX SH-AWD-only;
  added sources, per-trim features and colors; confirmed TLX and ZDX are both
  gone for 2026. KNOWN GAP: the all-new Acura RSX EV (Honda in-house platform,
  arriving late 2026) is a genuine 2026 nameplate not yet in the catalog — add
  during the coverage audit once specs are published.) — [x] Ford (2026-07-16 — all 14 models re-verified, see js/changelog.js v17:
  sources, per-trim features and colors added; Mustang GTD and 6-speed manual
  confirmed, Escape 4 powertrains detailed, Bronco/Explorer/Expedition trims
  filled in; F-150 Lightning 2026 status flagged uncertain)
- [x] Lincoln (2026-07-16 — all 4 SUVs re-verified, see js/changelog.js v26:
  Aviator corrected to 383 hp / 21 mpg, Navigator to 432 hp / 17 mpg,
  Nautilus top price to 77660; Corsair flagged final model year — Louisville
  production ended Dec 2025 — and now IIHS-Marginal side, not a TSP; sources,
  per-trim features and colors added to every record)
- [x] Chevrolet (2026-07-28 — all 14 models re-verified, see js/changelog.js v50:
  Blazer dropped Premier/added 3LT, Traverse dropped LS/brought back High
  Country — both trim lineups and every trim's MSRP corrected against
  current 2026MY pricing across the whole brand; destination charges rose
  fleet-wide since last checked. Per-trim features added to Blazer, Blazer
  EV, Colorado, Corvette, Equinox, Equinox EV, Silverado EV and Traverse.
  Silverado 1500/EV/HD and Equinox EV stay confidence medium — their
  cab/battery/config sprawl means some mid-trim figures are still estimates,
  noted in each record.)
- [x] GMC (2026-07-28 — all 9 models re-verified, see js/changelog.js v52:
  Terrain, Canyon, Sierra EV, Sierra HD and Yukon trim MSRPs corrected against
  current 2026MY pricing; both Hummer EV variants now share identical 2X/3X
  pricing after GM's Dec 2025/Jan 2026 increases; destination freight charges
  corrected across the board. Per-trim features added to every model; 6 of 9
  raised to confidence high with cited sources — gmc.com blocked automated
  fetches (403), so verification relied on GM Authority, Edmunds, Cars.com,
  KBB and dealer research pages. Sierra 1500 was already high confidence and
  untouched. Colors intentionally omitted everywhere — named options were
  findable but GMC doesn't publish hex swatch values, and the never-guess
  rule means no fabricated hex codes.)
- [x] Buick (2026-07-28 — all 4 models re-verified, see js/changelog.js v55:
  Enclave, Encore GX, Envision and Envista MSRPs corrected against confirmed
  2025/2026 price increases (Enclave's Dec 2025 hike, Encore GX's second 2025
  hike, Envista's Feb 2026 hike) and current destination freight charges;
  Envision's mid/top trims — previously "approximate" — now cited exactly.
  Per-trim features added to every model, all four raised to confidence high
  with cited sources — buick.com blocked automated fetches (403), so
  verification relied on GM Authority, Edmunds and Cars.com. Envista stays
  unrated: NHTSA has no 2026-specific record and IIHS scored it Poor on
  moderate overlap front + front crash prevention, which rules out a Top
  Safety Pick — checked, not guessed.)
- [x] Cadillac (2026-07-28 — all 9 models re-verified, see js/changelog.js v57:
  caught two real structural changes GM made mid-model-year — the gas Escalade
  lineup was renamed (Luxury→Escalade base, Premium Luxury→Luxury, Premium
  Luxury Platinum→Platinum Luxury, plus a new Platinum Sport tier), and the
  CT5 dropped its standalone Luxury trim, making Premium Luxury the base.
  Corrected stale pricing/destination charges on CT4, CT5, Escalade, Escalade
  IQ, Optiq and XT5 following Dec 2025–Jan 2026 GM price increases, each
  cross-checked against 2+ independent sources (not just one article) after
  an initial research pass surfaced a figure that turned out to be a
  destination-inclusive total mistaken for a new base MSRP — caught by an
  independent re-search rather than shipped. Confirmed XT5 continues for 2026
  (not discontinued alongside XT4/XT6) though production winds down late in
  the model year. Optiq's new-for-2026 RWD variant now has an EPA-published
  317-mile range, replacing an estimate. Per-trim features and sources added
  to every model for the first time; CT4/XT5 stay confidence medium/high
  respectively pending a live-configurator spot-check (cadillac.com and
  several dealer/pricing sites blocked automated fetches with 403).
- [ ] Hyundai — [ ] Kia — [ ] Genesis
- [ ] Nissan — [ ] Infiniti — [ ] Mitsubishi
- [ ] Jeep — [ ] Ram — [ ] Dodge — [ ] Chrysler — [ ] Alfa Romeo — [ ] Fiat
- [ ] VW — [ ] Audi — [ ] Porsche — [ ] BMW — [ ] Mini — [ ] Mercedes-Benz
- [x] Subaru (2026-07-12 — all 10 models re-verified, see js/changelog.js v9:
  Forester rebuilt to 11 trims, Impreza/Outback/Solterra/Uncharted figures
  fixed, Ascent "final year" note corrected; sources/features/colors added)
- [ ] Mazda — [ ] Volvo — [ ] Polestar — [ ] Land Rover — [ ] Jaguar
- [ ] Tesla — [ ] Rivian — [ ] Lucid — [ ] VinFast — [ ] Ineos
- [ ] Exotics (Ferrari, Lamborghini, McLaren, Bentley, Rolls-Royce, Aston Martin, Maserati, Lotus)

## Exploring (unranked ideas — polish runs: promote, refine, or cut)

- Personal ranking sliders ("what matters most to you") re-weighting all finders
- A "surprise me" spin-the-wheel finder for fun discovery
- Trim-level deep data (per-trim features matrices)
- Lease/finance payment estimator
- Side-by-side photo compare (exterior/interior galleries per vehicle)
- i18n groundwork; unit toggles (metric)
- PWA install nudge + richer offline caching of images
- Capacitor wrapper notes for future mobile app store builds

## Shipped

- [x] v28 — Mind Reader finder — a psychological/abstract finder (300+ odd,
  non-car questions as of v35) that scores every vehicle across 14 traits and
  whittles the pool, with a tap-to-reveal "why did it shrink?", a "give me a
  different question" skip, and a crowned #1 match at the end.
  (js/data/oracle.js + js/views/oracle.js)
- [x] v10 — Shopping-cart multi-select on All Vehicles (Select mode → Compare
  or a persistent Shortlist), searchable multi-brand picker, seat min AND max
  filter, at-a-glance relative-standing bars (vs class / all / brand) on the
  vehicle page, public ratings (NHTSA / IIHS / owner / expert, source-linked)
  for 32 models, interior + multi-photo galleries for 31 models, and clickable
  Home dashboard tiles.
- [x] v1 — Full 2026 catalog (325 models, 47 brands, manufacturer+brand+model),
  three finders, garage/compare/notes, six themes, tour, docs, simple mode,
  undo/history, settings with SQL export + data profiles + version switcher,
  marketing site with SEO, hourly self-improvement loop with smoke battery.

## Cadence expectations

- Feature runs every 2 hours (GitHub cron `23 */2 * * *`, concurrency-locked).
- Every 5th run: polish/reflection sweep across app + marketing site.
- Every run ends with the full smoke battery; failures block deploy.
- Run history: `.github/cadence.log`.

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
- [x] Vendor copy caught up from v0.5.4 to v0.5.8 (2026-07-28, `as-shell-v5`
  → `as-shell-v6`) — picks up a real mobile fix (the rail drawer's close
  toggle stays reachable once the backdrop layers above the topbar); the
  other v0.5.4→v0.5.8 changes (site-chrome's light-fallback theming,
  multiselectDropdown's second-click toggle, a pinned Supabase ESM version)
  live in shell code this app doesn't currently exercise (marketing site
  untouched, no multiselectDropdown/auth usage yet). Keep it current with
  future `sync-shell` dispatches.

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
  90 models done so far (2026-07-28, +5, js/changelog.js v73: bmw-x1 (U11,
  explicitly captioned USDM), bmw-x5 (G05 LCI, the current Curved Display
  dash — an older pre-LCI shot was found and rejected first), bmw-x7 (G07,
  post-LCI Curved Display interior), cadillac-lyriq (L233, its one generation
  to date) and chevrolet-trailblazer (VSS-S, post-2024-refresh 11-inch
  screen) — all interior shots, found via the Commons search API, generation
  confirmed against each file's own Commons categories/description (not just
  the filename), every URL live-checked with curl. Checked but held back
  this run for a generation mismatch or unconfirmed currency (never guess):
  acura-mdx (only a 3rd-gen/2018 shot; current MDX is 4th-gen since 2022),
  audi-q7 and audi-q8 (only pre-facelift interior shots exist; no Commons
  photo of either's current-facelift dash), cadillac-optiq (no interior shot
  on Commons at all), cadillac-xt5 (the only interior shot is the China-only
  second-generation XT5, a different vehicle from the US-spec model), and
  chevrolet-blazer-ev (the only Commons photo is from GM's 2022 pre-production
  reveal, which contemporary coverage explicitly said would differ from the
  production interior). audi-q5 re-checked and still held back per the note
  below. Previous batch (2026-07-28, +3, js/changelog.js v68: chevrolet-corvette
  (C8, MIAS 2024 showfloor shot), mercedes-benz-glc (X254, a Japan-market 220d
  interior — generation/dash architecture is shared across powertrains and
  markets, same call as prior JDM/Euro-shot precedent below), bmw-x3 (G45, the
  current redesigned generation) — all interior shots, found via the Commons
  search API, generation confirmed against each file's own Commons categories/
  description (not just the filename) before shipping, every URL live-checked
  with curl. Checked but held back this run for a generation mismatch or
  unconfirmed currency (never guess): audi-q5 (the only Commons interior shot
  found is the outgoing 2nd-gen cabin — Audi redesigned the Q5 as an all-new
  third generation for 2026, confirmed via web search, so it doesn't qualify)
  and audi-q3 (also all-new for 2026; no Commons interior shot of the redesign
  exists yet); audi-a3 (the one interior shot found predates the 2024 mid-cycle
  facelift that changed the vents/door-handle finish/shifter — held back rather
  than risk a stale-trim photo, same caution as the mazda-cx-30/kia-seltos
  precedent below); mazda-mazda3 (only a 2019 pre-2024-facelift dashboard
  shot found, same larger-touchscreen-refresh risk as CX-30); cadillac-escalade
  and mazda-cx-50 (no interior shot surfaced on Commons at all this run).
  Previous batch (2026-07-28, +5, js/changelog.js v62: chevrolet-suburban,
  nissan-z, infiniti-qx80, kia-k4, hyundai-elantra-n — all interior shots, found
  via the Commons search API, license/author pulled from each file's own
  metadata, every URL live-checked with curl before shipping; chevrolet-suburban
  and nissan-z and hyundai-elantra-n share the same MIAS-2024-showfloor
  photographer (Ethan Llamas) already credited for several other gallery shots;
  infiniti-qx80 and kia-k4 are both explicitly captioned "(United States)" and
  show the current (2025+) redesigned generation. Checked but skipped this run
  (no confirmed current-gen or US-spec Commons interior shot): acura-mdx (only a
  2018 pre-facelift dashboard shot exists), gmc-yukon (only 2015/2021-2023
  pre-refresh Denali shots), ford-mustang, ford-expedition, kia-niro (Commons'
  "Niro Plus" results are a different China-market MPV, not the US crossover),
  volkswagen-jetta, bmw-x3 (exterior-only G45 shots), lexus-es (only the prior
  XZ10 generation and a China-spec XZ20 shot, not confirmed US-spec), subaru-ascent
  (Commons' match is a "Subaru Evoltis," a different, non-US nameplate). Previous
  batch (2026-07-28, +8, js/changelog.js v59: honda-prologue,
  ford-mustang-mach-e, chevrolet-tahoe, nissan-armada, kia-k5, kia-seltos,
  volkswagen-id4, subaru-wrx — all interior shots, found via the Commons
  search API, license/author pulled from each file's own metadata, every URL
  live-checked with curl before shipping; the Mustang Mach-E and Chevrolet
  Tahoe shots are both credited to the same Commons contributor (Ethan
  Llamas) who covers US auto-show floors, dated 2026 and 2024 respectively;
  the Nissan Armada shot is explicitly captioned "2026 Nissan Armada" (the
  all-new redesign generation); the VW ID.4 and Subaru WRX shots are
  JDM-market photos of the same global-platform interior (mirrored for RHD,
  same dash/trim as the US car) — matches the precedent already shipped for
  the Lexus NX's gallery photo, so accepted the same way. kia-seltos
  supersedes the v56 skip note below: a genuine facelifted "SP2 PE" cabin
  shot (the post-2023 refresh Kia sells as the current Seltos) was found
  this run where the previous pass had not turned one up. Reviewed but held
  back mazda-cx-30 (only a pre-2022-refresh 2019 dashboard exists on
  Commons — the refresh added a larger touchscreen this shot predates) and
  jeep-grand-cherokee (Commons interior results for this name are all a
  1995 model; no WL-generation shot found) — both stay unconfirmed rather
  than guessed. Previous batch (2026-07-28, +8, js/changelog.js v56): nissan-sentra,
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
  kia-seltos likewise only has 1st-gen (pre-2024) interior shots (superseded
  by v59, see above — a facelifted shot has since surfaced on Commons); toyota-
  4runner has no interior shots on Commons at all yet; honda-ridgeline,
  toyota-corolla-hatchback and subaru-impreza had candidate interior shots
  but the generation/trim couldn't be confirmed as the current US-spec car
  with confidence, so left out rather than guess. Previous batch (2026-07-28,
  +6, js/changelog.js v54): buick-enclave, buick-encore-gx, buick-envision,
  buick-envista, hyundai-santa-cruz, nissan-murano. Earlier skip history:
  kia-k5 (superseded by v59, see above) and volvo-xc60 both had a MY25/26
  interior refresh Commons hasn't caught up to (only pre-refresh shots
  found, volvo-xc60 still unconfirmed); mazda-cx-50 and
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
- [x] Hyundai (2026-07-28 — all 16 models re-verified, see js/changelog.js v58:
  caught two real structural changes — the standard Ioniq 6 is discontinued in
  the US for 2026 (only the Ioniq 6 N carries the nameplate forward) and the
  Kona Electric is skipping the 2026 model year entirely (production paused,
  returns as a 2027 model) — both independently re-confirmed via web search
  rather than taken solely from the research pass, and both now show honest
  null pricing/empty trims instead of stale 2025 figures. The Ioniq 5 N picked
  up its first real 2026 US price ($59,900, a $6,300 cut); the Ioniq 6 N
  remains genuinely unpriced in the US despite being the surviving nameplate.
  Expanded several trim ladders that only tracked base/top pricing (Ioniq 5,
  Ioniq 9, Kona, Santa Cruz, Palisade, Santa Fe, Tucson) to their full
  real-world lineups and corrected a mislabeled Ioniq 5 top trim. Per-trim
  features, sources and color swatches added to every model for the first
  time; hyundaiusa.com/hyundainews.com are JS-rendered and mostly returned
  nav-only content to automated fetches, so most citations lean on
  hyundainews.com press releases (which did resolve), PRNewswire, cars.com
  and dealer trim-comparison pages instead.)
- [x] Kia (2026-07-28 — all 10 models re-verified, see js/changelog.js v60:
  every model's price ladder was thin (most had only 2 trims recorded) and
  none had sources or features, so this run rebuilt the trim lists from
  Kia's own MSRP tables — Carnival grew from 2 to 7 trims, K4 from 3 to 7
  (sedan + hatchback), Sorento and Sportage from 2 to 9 each (their full
  gas/hybrid/PHEV sub-lines), K5 from 2 to 5, EV6/EV9/Niro/Seltos similarly
  expanded. Two real corrections came out of it: the K5's 290-hp GT trim,
  previously flagged as "unclear if it's for 2026," is confirmed still sold
  at $33,590; and Sportage's priceTo was quietly wrong before — it tracked
  only the top *gas* trim ($39,590) when the PHEV X-Line Prestige actually
  tops the range at $47,190. Niro's hybrid pricing needed a second look
  mid-run: an initial pull (via a press-release summary) gave $27,090-$35,490,
  but Kia's own tabulated pricing page consistently returned $27,390-$35,790
  across two independent fetches, so the table was trusted over the prose
  summary. kia.com is JS-rendered and returned nav-only content to automated
  fetches, exactly as it did for the Hyundai sweep, so citations lean on
  kiamedia.com's press releases and per-model pricing tables, PRNewswire and
  Edmunds instead. Per-trim features and a sources array were added to every
  model. Colors were added for Carnival, EV6, EV9, K4 and Niro, where
  CarsDirect's color pages gave clean, plausible-sized lists; they were
  deliberately skipped for Sorento and Sportage (those pages returned
  16-24 "exterior" colors that visibly bled in names from other Kia models —
  not trustworthy) and for Seltos and most of K5's interior colors (the
  "interior" list on CarsDirect was just the exterior list repeated, with
  only a stray "Black" of genuine signal). Telluride is the one holdout at
  confidence medium — Kia skipped the 2026 model year for it entirely (sold
  as a carryover of the 2025 generation, with the all-new redesign arriving
  as a 2027), so this run only added trim features for the two existing
  carryover trims and left pricing/colors alone rather than relitigate or
  guess at a lineup Kia itself never fully priced.)
- [x] Genesis (2026-07-28 — all 7 models re-verified, see js/changelog.js v61:
  every model's trim ladder was thin (2-3 bookend trims each), so this run
  rebuilt full lineups against Genesis's own U.S. pricing release (GV70:
  official prnewswire announcement) and cross-checked dealer-research pages
  (G70 grew 2 to 7 trims incl. the new Prestige Graphite; G80 2 to 5; G90 2
  to 3; GV60 2 to 4; GV70 2 to 6; GV80 3 to 10 incl. both Coupe trims;
  Electrified GV70 2 to 3). Two real corrections: confirmed the Electrified
  G80 stays discontinued for the US in 2026 (re-verified independently, not
  just carried over), and the Electrified GV70's range figure was corrected
  from a stale 298 mi to Genesis's own current stated 263 mi (243 on the
  20-in Advanced/Prestige wheels) — official EPA numbers for 2026 aren't
  published yet. IIHS ratings added/corrected: G90 earns Top Safety Pick (not
  Plus, checked directly on iihs.org); G70 has real IIHS test results but no
  overall award, and NHTSA has no 2026 record for G70 or G90 — checked both,
  neither guessed. Per-trim features and a sources array added to every
  model for the first time; all 7 raised to confidence high with cited
  sources — genesis.com is JS-rendered and returned redirect loops to
  automated fetches, so citations lean on CarGurus, CarsDirect,
  genesisofedmond.com, Cars.com and Genesis's own prnewswire/newsroom
  releases instead.)
- [x] Nissan (2026-07-28 — all 11 models re-verified, see js/changelog.js v63:
  caught a mid-cycle "2026.5" Rogue refresh the data had missed entirely — new
  Dark Armor trim added, every Rogue price corrected against the actual
  current lineup (was still showing original-launch 2026 MY pricing). Also
  fixed a real Sentra S/SV underpricing ($200 low each), removed a Leaf "S"
  trim that Nissan announced but never brought to the US market (Europe-only),
  filled in the previously-missing Armada SL/Platinum/Platinum Reserve and
  Pathfinder SV/SL trims (both had only partial ladders priced), and untangled
  a label swap on two Altima AWD trims. Frontier, Kicks, Murano and Rogue
  Plug-in Hybrid were re-checked and confirmed already accurate — no changes.
  Per-trim features and updated sources added across the brand.
  nissanusa.com/edmunds.com mostly blocked automated fetches, so citations
  lean on Nissan's own newsroom press releases (usa.nissannews.com) plus
  Motor1, TFLtruck and Businesswire syndication of those releases.)
- [x] Infiniti (2026-07-28 — both models re-verified, see js/changelog.js latest:
  corrected the QX60 LUXE and AUTOGRAPH AWD MSRPs (were $56,845/$68,385; the
  official trim ladder is $56,600/$66,700 before the $1,495 destination charge
  — cross-checked against a dealer pricing breakdown that also matched the
  already-correct PURE/SPORT figures exactly) and corrected the QX60's EPA
  combined rating from 23 to 24 mpg (both FWD and AWD, verified directly on
  fueleconomy.gov). QX80 pricing was re-checked against a current live listing
  and found already accurate — no mid-year change despite some secondary
  sources quoting destination-inclusive totals that looked like an increase.
  Per-trim features and a sources array added to both models for the first
  time; QX60 raised to confidence high. infinitiusa.com already serves 2027
  content and infinitinews.com/edmunds.com/cars.com blocked automated
  fetches (403), so citations lean on automotiveaddicts.com, carsdirect.com
  and fueleconomy.gov instead. Colors intentionally omitted for both — named
  options are findable but no manufacturer hex swatch values are published,
  and the never-guess rule means no fabricated hex codes (same call as the
  GMC/Buick sweeps).)
- [x] Mitsubishi (2026-07-28 — all 4 models re-verified, see js/changelog.js v65:
  caught a real mid-model-year Outlander price increase (~$350 on every trim
  above the base ES: LE/SE/SEL/Trail Edition/Ralliart/Black Edition), confirmed
  against two independent current sources; the Outlander PHEV was missing its
  SE and SEL trims entirely (only ES and Black Edition were recorded) — added
  both with verified MSRPs and corrected the EPA electric range from a stale
  44 to the officially stated 45 miles. Confirmed the Outlander's 1.5L turbo
  hybrid figures (174 hp, 28 mpg combined) are now final EPA numbers, not
  pending estimates. Eclipse Cross and Outlander Sport checked and found
  already accurate. IIHS ratings checked for all four for the first time
  (previously only NHTSA was recorded) — none earn a Top Safety Pick; Eclipse
  Cross is notably Poor on moderate overlap front and side crash despite its
  5-star NHTSA rating. Sources arrays added to all four models for the first
  time; Outlander raised to confidence high.)
- [x] Jeep (2026-07-28 — all 7 models re-verified, see js/changelog.js v66:
  Wrangler grew from 3 to 7 trims — added Sport S, Rubicon, Sahara, Rubicon X
  — and picked up the 270-hp 2.0L turbo four (standard on Sahara) alongside
  the V6 and Moab 392's V8; Grand Cherokee grew from 2 to 6 (Laredo X,
  Limited, Laredo Altitude, Limited Reserve added), also confirming Trailhawk
  and Overland are genuinely absent for 2026 — both fell with the 4xe and
  return for 2027 with the turbo four — and fixing a keyOption that still
  referenced Trailhawk-style 4x4 as a 2026 feature. Grand Wagoneer grew from
  3 to 6 (Upland, Limited Reserve, Summit Reserve added); Summit Reserve, not
  Summit Obsidian, is the actual top trim, so priceTo rose $93,390 → $98,795.
  Compass grew from 2 to 5 (Latitude Altitude, Trailhawk, Limited Altitude
  added) against Stellantis's own pricing announcement, which also confirmed
  the $1,995 destination fee by matching both existing trims exactly.
  Gladiator: found and fixed a real bug — Mojave had been mistakenly priced
  identically to Rubicon at $52,000 when it's actually $53,995, one step
  above Rubicon; also confirmed Sahara's first-ever addition to the lineup
  (announced 2025-12-19) is still current. Recon's range is now EPA-certified
  at 222 mi (down from the ~230-mi pre-launch estimate) now that it's on
  sale — raised to confidence high, plus its confirmed 9.1-in ground
  clearance and approach/breakover/departure angles. Cherokee's existing
  4-trim ladder was independently re-verified and found already exactly
  correct — no changes needed there. jeep.com, edmunds.com and kbb.com all
  blocked automated fetches (403) throughout, so verification relied on
  Stellantis's own press releases/announcements, CarsDirect, and a handful
  of single-model spec/news sites — each new figure was checked against
  destination-inclusive prices matching the existing on-file MSRPs exactly
  before being trusted for the remaining, previously-missing trims.)
- [x] Ram (2026-07-28 — all 3 models re-verified, see js/changelog.js latest:
  every record's trim ladder was thin (1500 and 2500/3500 each had only 3
  bookend trims, ProMaster only 2), so this run rebuilt full lineups —
  1500 grew from 3 to 10 trims (Tradesman through Tungsten, picking up
  Express/Big Horn-Lone Star/Warlock/Laramie/Rebel/Limited/Limited Longhorn),
  2500/3500 from 3 to 9 (adding the genuinely new-for-2026 Black Express and
  Warlock trims alongside Big Horn/Laramie/Rebel/Limited Longhorn), and
  ProMaster from 2 to 3 (Tradesman/SLT/SLT+ spanning its 14 wheelbase/roof
  combinations). Real correction: RHO's on-file $71,200 was stale — its base
  MSRP is confirmed unchanged from 2025 at $69,995 (+ $2,595 destination =
  $72,590), not the previously recorded figure. ramtrucks.com, edmunds.com,
  kbb.com and moparinsiders.com all blocked or partially blocked automated
  fetches (403s) throughout, so 1500 pricing leans on CarsDirect's dedicated
  trim-by-trim 2026-vs-2025 comparison (cross-checked against Cars.com for
  the 3 trims it didn't cover) and 2500/3500/ProMaster lean on TrimAtlas's
  single coherent per-model pricing tables — chosen over mixing figures
  across sites after early cross-checks showed dealer-blog summaries
  disagreeing by $1,000-$3,000 per trim depending on whether destination was
  included. Checked both NHTSA and IIHS for 1500 (added no `iihs` field:
  Poor moderate-overlap-front rules out Top Safety Pick, checked directly on
  iihs.org, not guessed) and for 2500/3500 (neither publishes a 2026 record —
  HD trucks are GVWR-exempt from testing, so no `ratings` block added).
  Per-trim features added to every model for the first time; ProMaster stays
  confidence medium (only one source could be cross-checked, all others
  blocked automated fetches).)
- [x] Dodge (2026-07-28 — all 4 models re-verified, see js/changelog.js v70: Charger
  Sixpack grew from 3 to 8 trims — the full R/T/R/T Plus/Scat Pack/Scat Pack Plus
  ladder across 2-door and 4-door bodies — cross-checked against CarBuzz's full
  pricing table plus an independent search summary of Dodge's launch pricing; EPA
  figures (previously null) filled in at 20/19 mpg combined for R/T/Scat Pack. Real
  correction on Durango: the R/T 392 Launch Edition was on file at $50,390, but two
  independent outlets (TFLcar, a Cars.com/GM Authority-syndicated piece) confirm
  $49,995: fixed, and added the previously-untracked R/T 392 Launch Edition Premium
  trim ($57,595). Confirmed the Durango GT keeps both its Pentastar V6 and HEMI V8
  variants — Dodge briefly dropped the V6 for 2026 then reopened orders for it in
  Nov 2025 to cover HEMI supply, so both coexist today. Checked NHTSA/IIHS for
  Charger Daytona/Sixpack (neither has a 2026 record yet) and IIHS for Durango
  (Marginal small-overlap front, no pedestrian crash prevention — no Top Safety
  Pick); nothing guessed. Per-trim features and sources added to every model for
  the first time; Hornet's discontinued status re-confirmed unchanged, sources
  array added.) — [x] Chrysler (2026-07-28 — both models re-verified, see
  js/changelog.js v71: Pacifica's Select/Limited/Hybrid Select/Pinnacle/Hybrid
  Pinnacle trim ladder was independently re-verified against the current
  lineup and found already exactly correct — no price changes. Real
  correction on Voyager: the on-file $40,895 MSRP was stale — Stellantis's own
  "avoids a price hike" release (cross-checked against CarBuzz) confirms the
  2026 base MSRP is unchanged from 2025 at $39,995. IIHS checked directly for
  both (Pacifica: Marginal moderate-overlap front; Voyager: Poor headlights) —
  neither qualifies for a Top Safety Pick, nothing guessed. A Pacifica Hybrid
  100th Anniversary Edition and Select Premium trim were found to be real but
  had conflicting pricing across three sources, so left out rather than
  guessed. Per-trim features and a sources array added to both models for the
  first time.)
- [x] Alfa Romeo (2026-07-28 — all 3 models re-verified, see js/changelog.js latest:
  Giulia and Stelvio were both simplified to a single Sprint trim for 2026
  (Quadrifoglio discontinued), with a Veloce performance package (limited-slip
  diff, paddle shifters, red calipers) available on each rather than sold as a
  separate trim SKU — corrected a real base-MSRP error on both: the previous
  figures ($46,450/$48,200) had wrongly assumed a $1,795-ish destination
  charge against the commonly-quoted all-in stickers, when Alfa Romeo's actual
  2026 destination charge jumped to $3,250; true base MSRPs are Giulia $44,995
  and Stelvio $49,995 (each checks out exactly against CarsDirect's all-in
  listing once the real destination is added back in). Tonale's three real
  trims (Sprint/Veloce/Sport Speciale) got corrected pricing and, for the
  first time, an EPA combined mpg figure (24, from the official 2026 Fuel
  Economy Guide PDF) after shipping with a null MPG since its 2026 refresh.
  Per-trim features and a sources array added to all three models for the
  first time, all raised to confidence high. IIHS checked directly for all
  three: Giulia has only an incomplete one-sided small-overlap test (no
  award), Stelvio has no IIHS test page at all, and Tonale has neither an
  IIHS nor (after the NHTSA API returned server errors on repeated queries
  this run) a confirmed NHTSA record — nothing guessed, recheck later. A 2025
  Intensa special series was found for all three nameplates, but no source
  confirmed it continuing into 2026 at any price, so it was left out rather
  than guessed. alfaromeousa.com and edmunds.com blocked automated fetches
  (403) throughout, so citations lean on CarsDirect, CarBuzz, cars.com's
  trim-comparison pages and the official EPA guide instead.)
- [x] Fiat (2026-07-31 — its one US model, the 500e, re-verified, see
  js/changelog.js v76: Pop $35,700 / Icona $37,700 (both + $1,995
  destination) and the 149-mile EPA range / 116 MPGe combined were
  independently confirmed exact matches against Stellantis's own press
  release and fueleconomy.gov — already accurate, no price/spec changes.
  Per-trim features (Pop's new-for-2026 body-color dashboard vs Icona's
  standard pearl dashboard, vegan leather, ADAS suite) and a sources array
  added for the first time. Confirmed no 2026 NHTSA record (api.nhtsa.gov
  returns an empty result set) and no 2026 IIHS test page (iihs.org 404s;
  only a 2016-model-year 500e is in their archive) — checked both directly,
  nothing guessed. fiatusa.com, kbb.com, truecar.com and cars.usnews.com all
  blocked or timed out on automated fetches, so citations lean on
  Stellantis's own newsroom release, fueleconomy.gov and CarsDirect
  instead.)
- [x] VW (2026-07-31 — all 10 models re-verified, see js/changelog.js v74:
  every trim ladder was undercounted — Atlas and Atlas Cross Sport each grew
  from 3 to their real 7 configurations (SE/SE w/Technology/Peak Edition or
  SEL variants/SEL Premium R-Line, each FWD or 4Motion where offered), Golf
  GTI from 2 to 3 (added the $39,080 SE trim), Taos from 3 to 4 (added SE
  Black), Tiguan from 2 to 4 (added SE and SE R-Line Black), ID.4 from 2 to 5
  (Pro/Pro S each RWD or AWD, plus AWD-only Pro S Plus); Golf R and Jetta GLI
  confirmed genuinely single-trim. Two real pricing corrections: Atlas Cross
  Sport's top trim was $53,620 not $52,500, and Tiguan's was $44,560 not
  $44,135 — both cross-checked against VW's dealer order-guide mirror and
  cars.com. IIHS corrected for Atlas and Atlas Cross Sport from "Top Safety
  Pick+" to "Top Safety Pick" (fetched iihs.org directly — Acceptable
  pedestrian front crash prevention and Marginal LATCH rule out the + tier).
  Caught a real discontinuation: the ID. Buzz has no 2026 US model year at
  all (VW confirmed to press it's selling through 2025 inventory, returning
  as a 2027 model) — priceFrom/priceTo/trims set to null/empty instead of the
  stale 2025 figures previously mislabeled as 2026, same treatment as the
  Hyundai Kona Electric precedent. Per-trim features and a sources array
  added to every model, all raised to confidence high except ID.4 (stays
  medium — its two AWD-tier trim prices, Pro S AWD and Pro S Plus, could not
  be nailed to the dollar against a primary source; Edmunds/KBB blocked
  automated fetches and vw.com's configurator is JS-gated). Colors
  intentionally omitted fleet-wide: VW does not publish hex swatch values
  anywhere public (confirmed across vw.com, CarsDirect, and every dealer
  research page checked) — named color lists were found and are documented
  in each record's notes, but the never-guess rule means no fabricated hex.
  NHTSA API note: the ID.4 is indexed as "ID.4 BEV" (not "ID.4") — a naive
  model-name query returns a false "no 2026 record" negative that a first
  research pass hit before being caught by a direct VehicleId lookup.)
- [x] Audi (2026-07-31 — all 12 models re-verified, see js/changelog.js v75: trim ladders were undercounted across the board — A3 grew from 3 to 5 trims (a new-for-2026 "Premium Plus S line plus" trim added, S3 pruned from 3 to 1), A5/S5 from 3 to 7, A6 from 1 to 3, Q4 e-tron from 2 to 4, Q5/SQ5 from 2 to 6, Q7 from 2 to 7, Q8 from 3 to 6. Two real model-year discoveries: the A6 Sportback e-tron AND the Q6 e-tron both skip the 2026 model year entirely (Audi jumps 2025 straight to 2027 in the US) — both records now show the real, current 2027 pricing instead of stale figures. Real pricing corrections: RS Q8 performance's actual price is $138,300, well below the stale $146,000 on file; Audi's real destination charge is $1,295, correcting a prior $1,495 assumption used on A6/A8/Q5. IIHS corrected: Q7 earns Top Safety Pick (not Plus, checked directly); Q4 e-tron's moderate-overlap-front "Poor" rating disqualifies it from any award (checked, not guessed); A3 does not qualify for a Top Safety Pick either. Per-trim features and a sources array added across every model. Colors intentionally omitted fleet-wide — confirmed no Audi model publishes hex swatch values anywhere public. audiusa.com blocked automated fetches (403) throughout; citations lean on Cars.com, CarsDirect, CarGurus, fueleconomy.gov, api.nhtsa.gov and iihs.org instead.) — [ ] Porsche — [ ] BMW — [ ] Mini — [ ] Mercedes-Benz
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

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
  the 70 models done so far (2026-07-18: +17 — acura-integra/mdx/rdx,
  audi-q5, bmw-3-series/x3, hyundai-elantra/sonata, kia-k5/niro/seltos,
  mazda-cx-30/mazda3, nissan-murano/sentra, subaru-ascent/impreza — all
  `safety` only; see js/changelog.js v36). Pull NHTSA overall stars from the
  official api.nhtsa.gov/SafetyRatings endpoints, IIHS awards from iihs.org,
  and owner/expert scores only where a real number sits on a real page.
  Omit — never guess — anything a source doesn't publish for the 2026 (or
  carried-over) model year. **A same-generation "carried-over" NHTSA rating
  is only valid if the record's own `notes` don't say "all-new"/redesigned
  for 2026** — audi-q3, mazda-cx-5, and (for the NHTSA figure only) the
  ninth-gen nissan-sentra were dropped/trimmed this run for exactly that
  reason; re-check next batch too. Edmunds and KBB both return HTTP 403 to
  WebFetch in this environment (owner/expert sourcing blocked here — try a
  different fetch path or accept NHTSA/IIHS-only coverage for now).
  ~15–20 models per run.
- [ ] **Interior & multi-photo galleries** — extend `image.gallery`
  (`[{url, kind:'interior'|'exterior', credit, license, commons}]`) beyond the
  47 models done. Wikimedia Commons, free licenses only, current generation
  only; interior/cabin shots are the priority. Record each in
  assets/credits.json. The detail-page thumbnail strip already renders them.
- [ ] **Sources for every stat** — every record gets a `sources` array of
  precise, verified citations (manufacturer 2026 model page or pressroom,
  fueleconomy.gov for EPA numbers, one major price guide). 93 of 325 models
  now have sources (all Toyota, Lexus, Subaru, Honda, Acura, Ford and Lincoln
  models, plus the original 30 minus overlap); continue ~15 models per run
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
- [ ] Chevrolet — [ ] GMC — [ ] Buick — [ ] Cadillac
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

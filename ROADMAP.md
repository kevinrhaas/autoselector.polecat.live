# AutoSelector — Roadmap

The self-improvement loop reads this file every run (see
`.github/self-improve-prompt.md`). Feature runs take the top unchecked item in
**Next up**; every 5th run is a polish/reflection sweep that also updates this
file with new ideas. Keep `js/whatsnext.js` in sync with the top of this list.

Sizing rule: every run ships 30–45 minutes of complete work — no small
releases. If an item is smaller, bundle it with a data sweep.

## Next up (ordered)

- [ ] **Sources for every stat** — every record gets a `sources` array of
  precise, verified citations (manufacturer 2026 model page or pressroom,
  fueleconomy.gov for EPA numbers, one major price guide). 60 of 325 models
  now have sources (all 24 Toyota models, all 11 Lexus models, plus the
  original 30 minus overlap); continue ~15 models per run until all 325 are
  cited. Be precise — deep URLs only, verified to be 2026-specific.
- [ ] **Trim-level options** — different trims carry different options:
  populate `trims[].features` (notable equipment each trim adds) brand by
  brand during verification sweeps. UI already renders the column.
- [ ] **Colors & swatches** — populate `colors.exterior[{name,hex}]` and
  `colors.interior[{name,hex,tone:'dark'|'light'}]` per model from
  manufacturer configurators; classify every interior as dark or light and
  reconcile with `interior.lightInterior/darkInterior`. UI renders swatches.
- [ ] **2026-photo audit + fill** — every photo must show the actual 2026
  model-year generation. 120 of 325 models now have local photos. Audit the
  existing shots, replace any prior-generation ones, and keep adding missing
  models (current-gen only — skip models whose only Commons photo is an old
  generation and note them; acura-rdx is a known skip). A vetted, ready-to-run
  next batch (gmc-canyon, ford-ranger, ford-expedition, bronco-sport,
  jeep-compass, dodge-durango, bmw-x3, mercedes-benz-c-class, lexus-nx/gx/tx)
  is in `.github/next-photo-batch.py`.
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
- [ ] Honda — [ ] Acura — [ ] Ford — [ ] Lincoln
- [ ] Chevrolet — [ ] GMC — [ ] Buick — [ ] Cadillac
- [ ] Hyundai — [ ] Kia — [ ] Genesis
- [ ] Nissan — [ ] Infiniti — [ ] Mitsubishi
- [ ] Jeep — [ ] Ram — [ ] Dodge — [ ] Chrysler — [ ] Alfa Romeo — [ ] Fiat
- [ ] VW — [ ] Audi — [ ] Porsche — [ ] BMW — [ ] Mini — [ ] Mercedes-Benz
- [ ] Subaru — [ ] Mazda — [ ] Volvo — [ ] Polestar — [ ] Land Rover — [ ] Jaguar
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

- [x] v1 — Full 2026 catalog (325 models, 47 brands, manufacturer+brand+model),
  three finders, garage/compare/notes, six themes, tour, docs, simple mode,
  undo/history, settings with SQL export + data profiles + version switcher,
  marketing site with SEO, hourly self-improvement loop with smoke battery.

## Cadence expectations

- Feature runs every 2 hours (GitHub cron `23 */2 * * *`, concurrency-locked).
- Every 5th run: polish/reflection sweep across app + marketing site.
- Every run ends with the full smoke battery; failures block deploy.
- Run history: `.github/cadence.log`.

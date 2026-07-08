# AutoSelector — Data Dictionary & Relational Schema

The catalog lives in `js/data/vehicles.js` as a JSON-shaped array designed to
map 1:1 onto relational tables. `js/db.js` generates the schema
(`schemaSQL()`) and full seed (`seedSQL()`) — both downloadable from
Settings → Data.

## Scope & completeness

Every nameplate sold **new in the US for model year 2026** — 326 records, 47
brands, from the Chevrolet Trax to the Ferrari F80. Conventions:

- **One record per nameplate.** Sub-variants fold into the parent with notes
  (Yukon XL → Yukon; Maybach → S-Class/GLS; M340i → 3 Series) — but distinct
  nameplates stay separate (M3 vs 3 Series, Mustang vs Mach-E).
- Industry counts that tally variants separately put the market at ~379
  models (cars.com, 2026); after folding, 326 nameplates is full coverage.
  The coverage audit item in ROADMAP.md re-checks this every so often.
- Discontinued-during-2026 models stay listed with the situation in `notes`
  (e.g. Tesla Model S/X, Ford F-150 Lightning, Dodge Hornet).

## Field dictionary (JS → SQL)

| JS field | SQL column | Meaning |
|---|---|---|
| `id` | `vehicles.id` | Permanent slug (`toyota-camry`). Never changes. |
| `make` | `make` | Brand (Lexus) |
| `manufacturer` | `manufacturer` | Parent company (Toyota Motor Corporation) |
| `model`, `year` | `model`, `year` | Nameplate + model year (2026) |
| `bodyStyle` | `body_style` | sedan·hatchback·coupe·convertible·wagon·suv·minivan·pickup·van |
| `segment` | `segment` | Human label ("compact SUV") |
| `category` | `category` | car·suv·truck·van (coarse filter) |
| `priceFrom/priceTo` | `price_from/price_to` | Base/top-trim MSRP, USD, **without destination** |
| `trims[]` | `trims` table | `{name, msrp}` per trim |
| `powertrains[]` | `powertrains` table | see below |
| `seats[]` | `seats` (JSON) | available seat counts, e.g. `[7,8]` |
| `doors` | `doors` | door count |
| `dims.*` | `length_in…ground_clearance_in` | exterior dimensions (inches/lb) |
| `interior.passengerVolumeCuFt` | `passenger_volume_cuft` | EPA passenger volume |
| `interior.cargoCuFt/cargoMaxCuFt` | `cargo_cuft/cargo_max_cuft` | seats-up / seats-folded cargo |
| `interior.lightInterior/darkInterior` | `light_interior/dark_interior` | interior color availability |
| `spareTire` | `spare_tire` | full-size · temporary · none (kit/run-flats) |
| `physicalControls.climate/audio` | `physical_climate/physical_audio` | real knobs/buttons vs touchscreen-only |
| `keyOptions[]` | `key_options` (JSON) | notable options/packages |
| `towingLb` | `towing_lb` | max tow rating where meaningful |
| `image.remote/credit` | `image_remote/image_credit` | good-res photo URL + credit (2026 model-year generation ONLY) |
| `sources[]` | `sources` (JSON) | precise citations `{label,url,site}` backing the stats — manufacturer 2026 page/pressroom, fueleconomy.gov, price guide. Deep, verified URLs only. |
| `trims[].features` | `trims.features` (JSON) | notable equipment each trim adds (options differ by trim — rolling out brand by brand) |
| `colors.exterior[]` | `colors` (JSON) | `{name,hex}` factory exterior colors |
| `colors.interior[]` | `colors` (JSON) | `{name,hex,tone:'dark'\|'light'}` — every interior classified dark or light |
| `confidence` | `confidence` | high · medium · low (record-level honesty) |
| `notes` | `notes` | provenance, caveats, discontinuations |

Powertrain rows: `type` (gas·hybrid·phev·ev·diesel·hydrogen), `engine`, `hp`
(combined system), `transmission`, `manual_available`, `drive` (JSON subset of
FWD/RWD/AWD/4WD), `mpg_combined` (EPA mpg, MPGe for ev/phev), `ev_range_mi`.

User-side tables (`favorites`, `notes`, `saved_searches`) mirror the local
workspace for future sync.

## Provenance & accuracy process

Compiled July 2026 by parallel research passes per manufacturer group,
verifying against manufacturer press releases, brand sites, and price guides
(Edmunds/KBB/Car and Driver). Where a 2026 price wasn't announced, the 2025
price is carried with `confidence:'medium'` and a note. The hourly loop's
**data verification rotation** (ROADMAP.md) re-verifies one brand per run and
upgrades confidence; wrong-MSRP fixes always outrank feature work.

Current state (DATA_VERSION 5): 176 high · 147 medium · 3 low.

## Images

- `assets/logos/<make-slug>.(svg|png)` — 47 brand logos.
- `assets/vehicles/<id>.jpg` — good-resolution photos (≈1400px wide) for 75
  popular models so far; other records use `image.remote` (Wikimedia) with an
  SVG body-style illustration as final fallback.
- Every file's source page + license: `assets/credits.json`. Images are from
  Wikimedia Commons; keep attribution when adding more.

## Compatibility promises

- `id` values are immutable. New fields are additive.
- `DATA_VERSION` bumps on every catalog change (also noted in js/changelog.js).
- Older archived builds render newer catalogs fine because reads are
  defensive (`v.field ?? fallback`); keep it that way.

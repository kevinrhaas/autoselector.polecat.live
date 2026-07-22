// What's-next: the public, machine-readable slice of the roadmap. Newest
// planning first. Fleet convention (like relay's whatsnext feed): every
// project exports a whatsnext array from js/whatsnext.js so people — and
// sibling apps — can see what's coming.
// Each entry: status ('next' | 'planned' | 'exploring'), title, detail.
//
// PURE DATA — no imports, no functions, and no "[" bracket in this header
// (naive fetchers find the array by the export token then the next "["). The
// UI that renders this lives in js/whatsnew.js. The self-improvement loop
// keeps this in sync with ROADMAP.md; when an item ships it moves into
// js/changelog.js.

export const WHATSNEXT = [
  { status:'next', title:'Public ratings for every model',
    detail:'NHTSA safety stars, IIHS awards, and owner and expert scores — each source-linked. Live for 104 models today, rolling out to the rest, honestly omitting anything not yet published.' },
  { status:'next', title:'Interior & multi-photo galleries',
    detail:'Real cabin and extra-angle photos on every vehicle page — current generation only. 47 models live; expanding across the catalog.' },
  { status:'next', title:'Sources for every stat',
    detail:'Every vehicle page gets precise, verified citations (manufacturer 2026 pages, fueleconomy.gov, price guides) — 93 of 325 models are live (Toyota, Lexus, Subaru, Honda, Acura, Ford and Lincoln are fully cited), ~15 more per run until all 325 are cited.' },
  { status:'next', title:'Trim-level options & equipment',
    detail:'Different trims carry different options — per-trim notable-equipment lists roll out brand by brand (the UI column is already live).' },
  { status:'next', title:'Colors with real swatches',
    detail:'All exterior colors and interior colors per model, with samples, and every interior classified light or dark.' },
  { status:'next', title:'Per-make data verification sweeps',
    detail:'The loop re-verifies one manufacturer per run against current published specs and prices, raising every record to high confidence.' },
  { status:'planned', title:'More fun multi-select finders & visuals',
    detail:'A “Two cars enter” tournament, a swipe-style taste profiler, and an animated market-bubble map — all game-like, all multi-select, never forcing one box.' },
  { status:'planned', title:'Real nearby-dealer lists',
    detail:'Verified official locator links per brand today; exploring true in-app closest-dealer lists from your saved ZIP or location.' },
  { status:'planned', title:'Dealer-style build sheet',
    detail:'Pick a trim + options and get a printable, sharable spec sheet with estimated out-the-door price.' },
  { status:'planned', title:'Remote database sync (SQLite/Postgres profiles)',
    detail:'Connect a data profile, inspect the source, create schema + optional seed data, and manage rows from Settings → Data.' },
  { status:'exploring', title:'Ownership-cost lens',
    detail:'Fuel/energy, insurance-band and depreciation estimates layered onto every result list.' },
  { status:'exploring', title:'EPA + NHTSA live data hooks',
    detail:'Pull fuel economy and safety ratings straight from public APIs where CORS allows.' },
];

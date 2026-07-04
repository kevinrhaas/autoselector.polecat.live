# AutoSelector

**The joyful way to find your perfect 2026 car.**
Live at **https://autoselector.polecat.live** · app at **/app/** (open to everyone, no sign-up).

AutoSelector knows **every vehicle sold new in the US for model year 2026** —
326 models across 47 brands — with real prices, powertrains, dimensions,
seating, cargo, and the practical details other sites bury: spare-tire type,
physical vs. touchscreen climate/audio controls, light/dark interior
availability, ground clearance, towing.

Part of the [polecat.live](https://polecat.live) family (relay, manager,
jobtracker…), sharing the fleet look & feel and conventions.

## What's inside

| Area | What it does |
|---|---|
| **Home** | Greeting, favorites, recents, saved searches, activity, one-tap key actions |
| **Match Maker** | Question-by-question finder — a live counter + dot field whittle 326 cars to a shortlist ("not sure" always allowed) |
| **Lifestyles** | Persona finder — pick the driver you are; every vehicle is *ranked* for that life |
| **Budget Explorer** | Money-first sliders with a live market count |
| **All Vehicles** | The full catalog with practical filters and saved searches |
| **Garage / Compare** | Favorites, private notes, and 4-way side-by-side with best-value highlighting |
| **History** | Undo/redo everything (⌘Z anywhere) + full activity trail |
| **Docs** | Complete in-app documentation + restartable welcome tour |
| **Settings** | 6 themes (AutoSelector/Polecat × dark/light/system), Simple mode, data export/import, SQL schema+seed export, remote data profiles, version switcher |

## Architecture (deliberately simple)

- **Plain HTML + ES-module JavaScript + CSS.** No frameworks, no build step,
  no dependencies at runtime. Everything is readable in `js/`.
- **Local-first.** User state lives in `localStorage` (`as.workspace`) with a
  versioned, additive migration scheme — new deploys never wipe or break data.
- **Database-ready.** The catalog maps 1:1 onto a documented SQLite/Postgres
  schema (`docs/DATA.md`); Settings exports `schema.sql` + `seed.sql`.
- **Self-improving.** A GitHub Action runs Claude Code every hour to ship the
  next roadmap item (every 5th run is a polish/reflection sweep), gated by a
  Playwright smoke battery (Chromium + WebKit, desktop + mobile). See
  `.github/self-improve-prompt.md` and `ROADMAP.md`.
- **Versioned releases.** Every deploy is archived under `/v/<n>/` and listed
  in `releases.json`; the in-app Version switcher can pin any archived build.

## Fleet conventions

- `js/changelog.js` — release history (powers "What's new"), fetchable at
  https://autoselector.polecat.live/js/changelog.js
- `js/whatsnext.js` — the public upcoming-roadmap slice, fetchable at
  https://autoselector.polecat.live/js/whatsnext.js

## Repo map

```
index.html            Marketing site (SEO, screenshots, no tokens ever)
app/index.html        The app shell
css/                  styles.css (app design system) · landing.css (marketing)
js/                   app.js (boot/routing) · store.js (state+undo) · db.js (SQL bridge)
js/data/              vehicles.js (THE catalog) · assets.js (local asset index)
js/views/             one module per section
assets/               logos/, vehicles/ photos, credits.json (sources+licenses)
docs/                 DEVELOPER.md · DATA.md
.github/              workflows, smoke-test, archive-release, gen-shots, prompt
v/<n>/                immutable archived builds (generated)
```

## Running locally

Any static server works:

```bash
python3 -m http.server 8080     # then open http://localhost:8080
```

Tests (needs Node 18+ once: `npm i -D playwright && npx playwright install chromium webkit`):

```bash
node .github/smoke-test.mjs     # full battery: marketing, app, mobile, WebKit
node .github/gen-shots.mjs      # regenerate marketing screenshots
```

## Data honesty

Every record carries `confidence: high|medium|low` plus `notes` explaining any
estimate (e.g. "2026 price not announced; 2025 carried over"). The hourly loop
works a per-brand verification rotation (see ROADMAP.md) until everything is
`high`. Photo/logo sources and licenses: `assets/credits.json`.

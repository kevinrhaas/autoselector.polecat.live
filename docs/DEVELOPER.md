# AutoSelector — Developer Guide

Plain HTML + ES modules + CSS. No frameworks, no build step. If you can read
JavaScript, you can read this whole app in an afternoon.

## Boot flow

1. `app/index.html` — pre-paint inline script applies the saved theme +
   simple/reduce-motion flags (no flash), then loads `js/app.js`.
2. `js/app.js` — `boot()`:
   - honors a pinned archived version (`settings.pinnedVersion` → redirect to `/v/<n>/app/`)
   - `Access.init()` consumes `?token=` (OPTIONAL — only unlocks the Admin
     section; the app itself is open to everyone)
   - builds the rail (`js/shell.js`), topbar, and `#view`
   - hash routing: `#<section>` renders a view; `#vehicle/<id>` opens the
     detail modal on top of the current section
   - every view renders inside an error boundary (a throwing view shows a
     "hit a snag" card, which the smoke test treats as a failure).

## State (`js/store.js`)

One versioned localStorage document (`as.workspace`): favorites, recents,
notes, compare tray, saved searches, finder runs, activity, settings, data
profiles. Rules:

- **Migrations are additive.** `MIGRATIONS[n]` upgrades schema n → n+1; keys
  we don't recognize are never deleted (forward compatibility with newer
  builds; archived builds tolerate newer documents).
- **Undo is snapshot-based.** Every user-visible mutation pushes a labelled
  JSON snapshot; `Store.undo()/redo()` swap the document. Global keys ⌘Z/⌘⇧Z
  are wired in app.js; History view lists the stack.
- The vehicle catalog itself is **static data**, imported from
  `js/data/vehicles.js` — it is not part of the workspace document.

## The catalog (`js/data/vehicles.js`)

325 records, one per nameplate; see `docs/DATA.md` for the field dictionary
and SQL mapping. Invariants:

- `id` is forever (favorites/notes/recents key off it).
- `confidence` + `notes` must stay honest.
- Bump `DATA_VERSION` whenever records change.
- `js/data/assets.js` is a generated index of local images: `LOGOS` (make slug
  → file extension) and `LOCAL_PHOTOS` (vehicle ids with a committed photo).
  Keep it in sync when adding files to `assets/`.

## Views (`js/views/`)

Each section is one module exporting `render<Name>(view, ctx)`. `ctx` gives
you `navigate(section, opts)`, `openVehicle(id)`, `refresh()`, `applySimple()`
and `rebuildRail()`. Shared helpers live in `js/views/shared.js` (money/price
labels, powertrain chips, the `vtile()` card, logo/photo lookups).

The finders:

- `matchmaker.js` — declarative question list; each option has a predicate
  `p(vehicle)`. Answers filter the pool; zero-result answers are skipped with
  a friendly warning instead of stranding the user.
- `lifestyles.js` — personas with `score(vehicle) → null | number`; results
  are ranked, not just filtered.
- `budget.js` — direct sliders + toggles over the pool.

## Theming

`css/styles.css` keys everything off `[data-palette]` (auto|polecat) ×
`[data-theme]` (dark|light) custom properties. `js/theme.js` stamps the
attributes; the six selectable combos come from PALETTES × MODES. Simple mode
stamps `data-simple="1"` (bigger type, hides `advanced` rail items).

## Tests & tooling (`.github/`)

- `smoke-test.mjs` — the deploy gate: marketing + app render clean, every
  section paints real content, the favorite flow persists, 390px mobile fits/
  paints/scrolls, and a full WebKit (iOS engine) pass. Run it before pushing.
- `gen-shots.mjs` — regenerates marketing screenshots from the real app.
- `archive-release.mjs` — freezes the build to `/v/<n>/` + updates
  `releases.json` (assets are NOT copied into snapshots; see file comment).
- `stamp-changelog.mjs` — CI stamps the newest changelog `ts`.
- `workflows/self-improve.yml` — the hourly loop; `workflows/deploy.yml` —
  Pages deploy on push to main.

## Conventions

- `el(tag, props, children)` from `js/ui.js` for all DOM building.
- Icons: `icon(name, size)` from `js/icons.js` (add paths to `P`).
- Comments explain *why*, headers explain each file's role. Keep it that way.
- Changelog (`js/changelog.js`) + whatsnext (`js/whatsnext.js`) are public
  fleet endpoints — update them with every user-visible change.

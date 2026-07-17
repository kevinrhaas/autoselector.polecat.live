// -----------------------------------------------------------------------
// db.js — the database bridge (Settings → Data).
//
// AutoSelector is local-first, but the catalog + workspace are designed to
// live in a relational database later. This module owns that boundary:
//
//   • schemaSQL()  — the canonical CREATE TABLE schema (SQLite & Postgres
//                    compatible subset) for vehicles/trims/powertrains plus
//                    the user tables (favorites, notes, saved_searches).
//   • seedSQL()    — INSERT statements for the entire current catalog, so an
//                    empty database can be seeded in one paste/execute.
//   • Data profiles — connection descriptors managed in Settings → Data.
//     Today one kind is live: 'http-json' (a remote JSON endpoint / file
//     server: GET to inspect + pull, optional PUT to push workspace rows).
//     A browser can't open a raw TCP socket to Postgres/SQLite, so those
//     profile kinds store the connection info + let you export schema/seed
//     SQL now; a tiny sync proxy is on the roadmap (see js/whatsnext.js).
//
// First-connect flow (per the product spec): inspect the source — if it
// already has the tables we need, use it; if it's empty, offer to create the
// schema and optionally seed it with the catalog.
// -----------------------------------------------------------------------

import { Store } from './store.js';

const q = (s)=> s==null ? 'NULL' : `'${String(s).replace(/'/g,"''")}'`;
const n = (x)=> (x==null || x==='' || isNaN(x)) ? 'NULL' : Number(x);
const b = (x)=> x==null ? 'NULL' : (x ? 1 : 0);

export function schemaSQL(){
  return `-- AutoSelector relational schema v1 (SQLite; Postgres-compatible subset)
-- One row per model in vehicles; trims and powertrains hang off it.
CREATE TABLE IF NOT EXISTS vehicles (
  id               TEXT PRIMARY KEY,      -- slug, e.g. 'toyota-camry'
  make             TEXT NOT NULL,         -- brand, e.g. 'Lexus'
  manufacturer     TEXT,                  -- parent company, e.g. 'Toyota Motor Corporation'
  model            TEXT NOT NULL,
  year             INTEGER NOT NULL,
  body_style       TEXT,                  -- sedan|hatchback|coupe|convertible|wagon|suv|minivan|pickup|van
  segment          TEXT,
  category         TEXT,                  -- car|suv|truck|van
  price_from       INTEGER,               -- base MSRP USD, no destination
  price_to         INTEGER,
  seats            TEXT,                  -- JSON array, e.g. '[7,8]'
  doors            INTEGER,
  length_in        REAL, width_in REAL, height_in REAL,
  wheelbase_in     REAL, curb_weight_lb REAL, ground_clearance_in REAL,
  passenger_volume_cuft REAL,
  cargo_cuft       REAL,
  cargo_max_cuft   REAL,
  light_interior   INTEGER,               -- 0/1: light interior color offered
  dark_interior    INTEGER,
  spare_tire       TEXT,                  -- full-size|temporary|none
  physical_climate INTEGER,               -- 0/1 physical climate controls
  physical_audio   INTEGER,
  key_options      TEXT,                  -- JSON array of notable options
  towing_lb        INTEGER,
  image_remote     TEXT,
  image_credit     TEXT,
  confidence       TEXT,                  -- high|medium|low
  notes            TEXT
);
CREATE TABLE IF NOT EXISTS trims (
  vehicle_id TEXT NOT NULL REFERENCES vehicles(id),
  name       TEXT NOT NULL,
  msrp       INTEGER,
  PRIMARY KEY (vehicle_id, name)
);
CREATE TABLE IF NOT EXISTS powertrains (
  vehicle_id   TEXT NOT NULL REFERENCES vehicles(id),
  idx          INTEGER NOT NULL,          -- order within the vehicle
  type         TEXT,                      -- gas|hybrid|phev|ev|diesel|hydrogen
  engine       TEXT,
  hp           INTEGER,
  transmission TEXT,
  manual_available INTEGER,
  drive        TEXT,                      -- JSON array subset of FWD|RWD|AWD|4WD
  mpg_combined INTEGER,                   -- mpg, or MPGe for ev/phev
  ev_range_mi  INTEGER,
  PRIMARY KEY (vehicle_id, idx)
);
-- User-side tables (mirror the local workspace when syncing)
CREATE TABLE IF NOT EXISTS favorites  (vehicle_id TEXT PRIMARY KEY, added_at INTEGER);
CREATE TABLE IF NOT EXISTS notes      (vehicle_id TEXT PRIMARY KEY, body TEXT, updated_at INTEGER);
CREATE TABLE IF NOT EXISTS saved_searches (id TEXT PRIMARY KEY, name TEXT, filters TEXT, created_at INTEGER);
`;
}

export function seedSQL(){
  const rows = [];
  for(const v of Store.vehicles()){
    rows.push(`INSERT INTO vehicles VALUES (${[
      q(v.id), q(v.make), q(v.manufacturer), q(v.model), n(v.year), q(v.bodyStyle), q(v.segment), q(v.category),
      n(v.priceFrom), n(v.priceTo), q(JSON.stringify(v.seats||[])), n(v.doors),
      n(v.dims?.lengthIn), n(v.dims?.widthIn), n(v.dims?.heightIn),
      n(v.dims?.wheelbaseIn), n(v.dims?.curbWeightLb), n(v.dims?.groundClearanceIn),
      n(v.interior?.passengerVolumeCuFt), n(v.interior?.cargoCuFt), n(v.interior?.cargoMaxCuFt),
      b(v.interior?.lightInterior), b(v.interior?.darkInterior),
      q(v.spareTire), b(v.physicalControls?.climate), b(v.physicalControls?.audio),
      q(JSON.stringify(v.keyOptions||[])), n(v.towingLb),
      q(v.image?.remote), q(v.image?.credit), q(v.confidence), q(v.notes||''),
    ].join(', ')});`);
    (v.trims||[]).forEach(t=> rows.push(`INSERT INTO trims VALUES (${q(v.id)}, ${q(t.name)}, ${n(t.msrp)});`));
    (v.powertrains||[]).forEach((p,i)=> rows.push(`INSERT INTO powertrains VALUES (${[
      q(v.id), i, q(p.type), q(p.engine), n(p.hp), q(p.transmission), b(p.manualAvailable),
      q(JSON.stringify(p.drive||[])), n(p.mpgCombined), n(p.evRangeMi),
    ].join(', ')});`));
  }
  return `-- AutoSelector catalog seed — data version ${Store.dataVersion()}, ${Store.vehicles().length} vehicles\nBEGIN;\n${rows.join('\n')}\nCOMMIT;\n`;
}

// ---- http-json profile operations -----------------------------------------
// A 'http-json' source is any URL that serves JSON over GET (a static file,
// a file-server directory, a tiny REST endpoint). Inspection rules:
//   • an ARRAY of objects with vehicle-ish keys → treated as a vehicles table
//   • an OBJECT with {vehicles:[…]} → same
//   • anything empty → candidate for seeding (we offer schema + seed export)
export async function inspectHttpSource(url){
  const res = await fetch(url, { headers:{ 'accept':'application/json' } });
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  const arr = Array.isArray(data) ? data : (Array.isArray(data?.vehicles) ? data.vehicles : null);
  if(arr && arr.length){
    const looksRight = typeof arr[0]==='object' && 'make' in arr[0] && 'model' in arr[0];
    return { kind: looksRight ? 'vehicles' : 'unknown-rows', rows: arr.length, sample: arr[0] };
  }
  return { kind:'empty' };
}

export async function pushWorkspace(url){
  // Best-effort PUT of the workspace rows (favorites/notes/searches) — for
  // remote-file-system style sources that accept writes.
  const payload = JSON.parse(Store.exportJSON());
  const res = await fetch(url, { method:'PUT', headers:{ 'content-type':'application/json' }, body: JSON.stringify(payload) });
  if(!res.ok) throw new Error(`HTTP ${res.status}`);
  return true;
}

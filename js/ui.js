// ui.js — re-exports the vendored Polecat Shell DOM toolkit.
//
// vendor/polecat-shell/ is READ-ONLY (see docs/SHELL-API.md in
// polecat-platform); AutoSelector's ui.js is a byte-identical superset there
// now (plus sheet()), so this file is just the stable import path the rest
// of the app already uses.
export * from '../vendor/polecat-shell/ui.js';

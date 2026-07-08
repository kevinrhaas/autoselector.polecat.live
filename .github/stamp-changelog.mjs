// stamp-changelog.mjs — stamp the real ship time onto the newest changelog
// entry.
//
// The self-improvement loop prepends a new CHANGELOG entry with an EMPTY `ts`
// (`ts: ''`). This script fills that first empty `ts` with the real deploy
// time so timestamps reflect when a change actually shipped and can't be
// fabricated. `ts` is ISO-8601 UTC; the in-app panel formats it to Central
// Time at render (js/whatsnew.js), so there is no `date` field to maintain —
// js/changelog.js is a pure-data module that sibling apps fetch and parse.
//
// Run from CI right before the smoke test whenever js/changelog.js changed.
import { readFile, writeFile } from 'node:fs/promises';

const FILE = 'js/changelog.js';
const nowIso = new Date().toISOString();

let src = await readFile(FILE, 'utf8');

// Fill the first empty ts (newest entry sits at the top of the array).
let stamped = false;
src = src.replace(/ts:\s*(['"])\1/, () => { stamped = true; return `ts: '${nowIso}'`; });

await writeFile(FILE, src);
console.log(stamped ? `Stamped newest changelog entry: ${nowIso}` : 'No empty changelog timestamp to stamp.');

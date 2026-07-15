// theme.js — configures + re-exports the vendored Polecat Shell theme module
// (vendor/polecat-shell/ is READ-ONLY — see docs/SHELL-API.md in
// polecat-platform). AutoSelector keeps its historical storage key
// (as.theme.v1) and its own 'auto' palette (defined in css/styles.css)
// alongside the shared 'polecat' one, via configure().
//
// Reduce-motion bridge: the vendored module tracks its own override under
// `<storageKey>.motion`, independent of AutoSelector's real source of truth
// (Store's settings.reduceMotion, edited on the Settings page). Left
// unbridged, the vendored applyTheme() — called internally by toggleMode()/
// setTheme()/its OS motion-preference listener — would fall back to the OS
// preference the moment a user toggled the theme, silently overriding their
// explicit setting. Mirroring Store's value into that key on every Store
// change keeps the two in permanent agreement.
import {
  configure, MODES, getTheme, setTheme, applyTheme, effectiveMode, toggleMode, setReduceMotion,
} from '../vendor/polecat-shell/theme.js';
import { Store } from './store.js';

export const PALETTES = [
  { key:'auto',    label:'AutoSelector', hint:'Electric blue / sunset orange' },
  { key:'polecat', label:'Polecat',      hint:'Warm polecat.live house style' },
];

configure({ storageKey:'as.theme.v1', defaultTheme:'auto:dark', palettes:PALETTES });

function syncReduceMotion(){ setReduceMotion(!!Store.settings().reduceMotion); }
syncReduceMotion();
Store.onChange(syncReduceMotion);

export { MODES, getTheme, setTheme, applyTheme, effectiveMode, toggleMode };

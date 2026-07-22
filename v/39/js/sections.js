// sections.js — the rail's declarative navigation list, fed to the vendored
// Polecat Shell's initShell() (vendor/polecat-shell/shell.js). `icon` is a
// name resolved through js/icons.js at the call site.
export const SECTIONS = [
  { group:'Workspace' },
  { key:'home',       label:'Home',            icon:'home' },
  { key:'browse',     label:'All Vehicles',    icon:'list' },
  { group:'Finders' },
  { key:'matchmaker', label:'Match Maker',     icon:'target' },
  { key:'lifestyles', label:'Lifestyles',      icon:'users' },
  { key:'oracle',     label:'Mind Reader',     icon:'wand' },
  { key:'budget',     label:'Budget Explorer', icon:'chart' },
  { group:'My Garage' },
  { key:'garage',     label:'Garage',          icon:'garage' },
  { key:'compare',    label:'Compare',         icon:'compare' },
  { group:'Manage' },
  { key:'history',    label:'History',         icon:'history', minMode:'standard' },
  { key:'docs',       label:'Docs',            icon:'book' },
  { key:'admin',      label:'Admin',           icon:'key', admin:true },
  { key:'settings',   label:'Settings',        icon:'settings' },
];

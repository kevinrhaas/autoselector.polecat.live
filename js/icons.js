// icons.js — AutoSelector's automotive icon family, layered on the vendored
// Polecat Shell base set (vendor/polecat-shell/ is READ-ONLY — see
// docs/SHELL-API.md in polecat-platform). `registerIcons()` is the shell's
// supported extension point for exactly this: an app family that overrides a
// couple of generic glyphs (car, gauge) with automotive-specific art and adds
// its own (suv, truck, van, …). `icon()` and `iconNames()` are re-exported
// verbatim; `bodyIcon()` stays local — it maps vehicle data, not an icon set.
import { icon, iconNames, registerIcons } from '../vendor/polecat-shell/icons.js';

registerIcons({
  car:'<path d="M4 16v-3l1.6-4.2A1.8 1.8 0 0 1 7.3 7.5h9.4a1.8 1.8 0 0 1 1.7 1.3L20 13v3"/><path d="M4 13h16"/><circle cx="8" cy="16.5" r="1.7"/><circle cx="16" cy="16.5" r="1.7"/>',
  suv:'<path d="M3 15v-4l1.5-3.5A1.6 1.6 0 0 1 6 6.5h8l4 4.5h3V15"/><circle cx="7.5" cy="16" r="1.8"/><circle cx="17" cy="16" r="1.8"/><path d="M9.3 16h5.9"/>',
  truck:'<path d="M2 7h11v9H2z"/><path d="M13 10h4l3 3v3h-2"/><circle cx="6" cy="17" r="1.8"/><circle cx="16.5" cy="17" r="1.8"/>',
  van:'<path d="M3 8h12l5 4v5h-2"/><path d="M3 8v9h2M8.5 17h7"/><circle cx="6.5" cy="17" r="1.8"/><circle cx="17.5" cy="17" r="1.8"/>',
  plug:'<path d="M9 3v5M15 3v5"/><path d="M7 8h10v3a5 5 0 0 1-5 5 5 5 0 0 1-5-5z"/><path d="M12 16v5"/>',
  gauge:'<path d="M4 19a9 9 0 1 1 16 0"/><path d="M12 13l4-4"/><circle cx="12" cy="14" r="1.4"/>',
  wheel:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.6"/><path d="M12 3v6.4M4.4 17.3l5.5-3.2M19.6 17.3l-5.5-3.2"/>',
  road:'<path d="M4 21 9 3M20 21 15 3M12 5v3M12 11v3M12 17v3"/>',
  fuel:'<path d="M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16"/><path d="M3 21h14M6 7h8"/><path d="M15 10h2a2 2 0 0 1 2 2v5a1.5 1.5 0 0 0 3 0V9l-3-3"/>',
  compare:'<path d="M8 7h8M8 7l3-3M8 7l3 3M16 17H8m8 0 3-3m-3 3 3 3"/>',
  garage:'<path d="M3 21V9l9-6 9 6v12"/><path d="M7 21v-8h10v8M7 16h10"/>',
  heart:'<path d="M12 20s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/>',
  question:'<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3.8 2.1c-.9.6-1.3 1-1.3 2"/><path d="M12 17h.01"/>',
  dollar:'<path d="M12 2v20M16.5 6.5c-1-1.2-2.6-1.7-4.5-1.7-2.4 0-4.3 1.2-4.3 3.2 0 4.3 9 2.4 9 6.8 0 2.1-2 3.4-4.7 3.4-2.1 0-3.9-.7-4.9-2"/>',
  leaf:'<path d="M5 19c0-8 5-14 14-14 0 9-5 14-12 14"/><path d="M5 19c3-5 7-8 11-10"/>',
  mountain:'<path d="m3 19 6-10 4 6 3-4 5 8z"/><path d="M3 19h18"/>',
  snow:'<path d="M12 2v20M4 6l16 12M20 6 4 18"/>',
  repeat:'<path d="m17 2 4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/>',
});

export { icon, iconNames };

// Map a vehicle bodyStyle (see js/data/vehicles.js schema) to an icon key.
export function bodyIcon(bodyStyle=''){
  const b = String(bodyStyle).toLowerCase();
  if(/pickup|truck/.test(b)) return 'truck';
  if(/suv|crossover/.test(b)) return 'suv';
  if(/van/.test(b)) return 'van';
  return 'car';   // sedan, hatchback, coupe, convertible, wagon
}

// -----------------------------------------------------------------------
// vehicles.js — the 2026 US-market vehicle catalog (GENERATED, then curated).
//
// AutoSelector's core dataset: every nameplate sold new in the US for model
// year 2026 —326 models across 47 brands. One record per model,
// trims nested. Compiled from manufacturer announcements, press releases and
// price guides (Jul 2026); each record carries an honest `confidence` flag
// and provenance notes. Benchmark: industry counts put the 2026 US market at
// roughly 379 distinct models (cars.com) counting variants separately; this
// catalog folds sub-variants (e.g. Yukon XL, Maybach) into parent records.
//
// The shape maps 1:1 onto the relational schema in docs/DATA.md
// (vehicles / trims / powertrains tables). Records carry brand (`make`),
// parent `manufacturer`, and `model`.
//
// Maintenance rules for the self-improvement loop:
//   • Correctness beats prose: fix a wrong MSRP before adding any feature.
//   • Keep `confidence` honest (high|medium|low) and explain in notes.
//   • Never change `id` values — favorites/recents/notes key off them.
//   • Bump DATA_VERSION (int) whenever records change.
// -----------------------------------------------------------------------

export const DATA_VERSION = 3;

export const VEHICLES = [
 {
  "id": "acura-adx",
  "make": "Acura",
  "manufacturer": "Honda Motor Co.",
  "model": "ADX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "premium subcompact SUV",
  "category": "suv",
  "priceFrom": 35000,
  "priceTo": 44000,
  "trims": [
   {
    "name": "ADX",
    "msrp": 35000
   },
   {
    "name": "A-Spec",
    "msrp": 38000
   },
   {
    "name": "A-Spec w/Advance",
    "msrp": 42000
   },
   {
    "name": "A-Spec w/Advance AWD",
    "msrp": 44000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 190,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.8,
   "widthIn": 72.6,
   "heightIn": 64.4,
   "wheelbaseIn": 104.5,
   "curbWeightLb": 3392,
   "groundClearanceIn": 7.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 24.4,
   "cargoMaxCuFt": 54.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "AWD (+$2,000 on all trims)",
   "Bang & Olufsen 15-speaker audio (Advance)",
   "Panoramic moonroof",
   "Heated & ventilated front seats",
   "9-inch touchscreen with wireless CarPlay",
   "Wireless phone charger",
   "Hands-free power tailgate"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Acura's HR-V-based entry SUV, in its second model year; base price held at $35,000 for 2026 per Acura. Dimensions and cargo figures are close estimates; AWD versions rated about 1 mpg lower."
 },
 {
  "id": "acura-integra",
  "make": "Acura",
  "manufacturer": "Honda Motor Co.",
  "model": "Integra",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "premium compact car",
  "category": "car",
  "priceFrom": 33400,
  "priceTo": 53400,
  "trims": [
   {
    "name": "Integra",
    "msrp": 33400
   },
   {
    "name": "A-Spec",
    "msrp": 35400
   },
   {
    "name": "A-Spec w/Technology",
    "msrp": 39300
   },
   {
    "name": "Type S",
    "msrp": 53400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 200,
    "transmission": "CVT",
    "manualAvailable": true,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 33,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Type S)",
    "hp": 320,
    "transmission": "6-speed manual",
    "manualAvailable": true,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.8,
   "widthIn": 72.0,
   "heightIn": 55.5,
   "wheelbaseIn": 107.7,
   "curbWeightLb": 3071,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": 96.0,
   "cargoCuFt": 24.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "6-speed manual (no-cost on A-Spec w/Technology; standard Type S)",
   "ELS Studio 3D 16-speaker audio",
   "Adaptive dampers",
   "Heated front seats",
   "9-inch touchscreen with wireless CarPlay",
   "Head-up display (Type S)",
   "Microsuede sport seats (Type S)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Five-door liftback; Acura's only remaining sedan-shaped model after TLX was discontinued. Base price ($33,400) confirmed by Acura; A-Spec and A-Spec w/Technology prices are close estimates and Type S (~$53,400) per Edmunds. Type S uses a tire repair kit instead of a spare."
 },
 {
  "id": "acura-mdx",
  "make": "Acura",
  "manufacturer": "Honda Motor Co.",
  "model": "MDX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "premium midsize SUV (3-row)",
  "category": "suv",
  "priceFrom": 51800,
  "priceTo": 75850,
  "trims": [
   {
    "name": "MDX",
    "msrp": 51800
   },
   {
    "name": "Technology Package",
    "msrp": 55800
   },
   {
    "name": "A-Spec Package",
    "msrp": 62200
   },
   {
    "name": "Advance Package",
    "msrp": 66300
   },
   {
    "name": "Type S",
    "msrp": 70050
   },
   {
    "name": "Type S Advance",
    "msrp": 75850
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 290,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo V6 (Type S)",
    "hp": 355,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.4,
   "widthIn": 78.7,
   "heightIn": 67.1,
   "wheelbaseIn": 113.8,
   "curbWeightLb": 4565,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": 139.1,
   "cargoCuFt": 18.1,
   "cargoMaxCuFt": 71.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "SH-AWD (standard from A-Spec up, +$2,200 on lower trims)",
   "Bang & Olufsen 19- or 31-speaker audio",
   "Air suspension (Type S Advance)",
   "Heated/ventilated & massaging front seats",
   "12.3-inch Google built-in touchscreen",
   "Second-row captain's chairs or bench",
   "Panoramic moonroof"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Base ($51,800) and Type S Advance ($75,850) prices verified for 2026; intermediate trim prices are close estimates. Towing: 5,000 lb with SH-AWD (3,500 lb FWD); Type S rated 19 mpg combined."
 },
 {
  "id": "acura-rdx",
  "make": "Acura",
  "manufacturer": "Honda Motor Co.",
  "model": "RDX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "premium compact SUV",
  "category": "suv",
  "priceFrom": 45100,
  "priceTo": 54850,
  "trims": [
   {
    "name": "RDX",
    "msrp": 45100
   },
   {
    "name": "Technology Package",
    "msrp": 47700
   },
   {
    "name": "A-Spec Package",
    "msrp": 50700
   },
   {
    "name": "Advance Package",
    "msrp": 52850
   },
   {
    "name": "A-Spec Advance Package",
    "msrp": 54850
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 272,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 186.7,
   "widthIn": 74.8,
   "heightIn": 65.7,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 3829,
   "groundClearanceIn": 8.2
  },
  "interior": {
   "passengerVolumeCuFt": 104.0,
   "cargoCuFt": 29.5,
   "cargoMaxCuFt": 58.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "SH-AWD torque-vectoring all-wheel drive (+$2,200)",
   "ELS Studio 3D 16-speaker audio",
   "Panoramic moonroof (standard)",
   "Heated & ventilated front seats",
   "Adaptive dampers (Advance)",
   "Head-up display (Advance)",
   "16-way power sport seats (A-Spec)"
  ],
  "towingLb": 1500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Carryover generation; SH-AWD optional on all trims (standard pricing shown is FWD). SH-AWD versions rated about 23 mpg combined."
 },
 {
  "id": "alfa-romeo-giulia",
  "make": "Alfa Romeo",
  "manufacturer": "Stellantis",
  "model": "Giulia",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sports sedan",
  "category": "car",
  "priceFrom": 46450,
  "priceTo": null,
  "trims": [
   {
    "name": "Sprint",
    "msrp": 46450
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 280,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 182.6,
   "widthIn": 73.7,
   "heightIn": 56.5,
   "wheelbaseIn": 111.0,
   "curbWeightLb": 3521,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 13.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Harman Kardon audio",
   "Limited-slip rear differential",
   "Active suspension",
   "Heated seats and steering wheel",
   "Intensa special series",
   "19-inch wheels"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/29/Alfa_952_26.06.19_JM_%281%29_%28cropped%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Current generation carries over into 2026 in its final years; 505-hp Quadrifoglio discontinued for the US after 2025. Base price derived from a listed $48,245 sticker assuming $1,795 destination; full 2026 trim walk (Ti, Veloce, Intensa) pricing not confirmed, so priceTo is null."
 },
 {
  "id": "alfa-romeo-stelvio",
  "make": "Alfa Romeo",
  "manufacturer": "Stellantis",
  "model": "Stelvio",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 48200,
  "priceTo": null,
  "trims": [
   {
    "name": "Sprint",
    "msrp": 48200
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 280,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.6,
   "widthIn": 74.9,
   "heightIn": 66.0,
   "wheelbaseIn": 111.0,
   "curbWeightLb": 4044,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 18.5,
   "cargoMaxCuFt": 56.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Harman Kardon audio",
   "Dual-pane sunroof",
   "Limited-slip rear differential",
   "Heated seats and steering wheel",
   "Intensa special series",
   "21-inch wheels"
  ],
  "towingLb": 3000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/a/ad/Alfa_Romeo_Stelvio_Suv_Free_Car_Picture_-_Give_Credit_Via_Link.%28cropped%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Current generation continues into 2026 ahead of a delayed next-gen model; Quadrifoglio discontinued for the US. AWD standard. Base price derived from a listed ~$49,995 sticker assuming $1,795 destination; full 2026 trim pricing not confirmed, so priceTo is null."
 },
 {
  "id": "alfa-romeo-tonale",
  "make": "Alfa Romeo",
  "manufacturer": "Stellantis",
  "model": "Tonale",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV",
  "category": "suv",
  "priceFrom": 38950,
  "priceTo": 43450,
  "trims": [
   {
    "name": "Sprint",
    "msrp": 38950
   },
   {
    "name": "Sport Speciale",
    "msrp": 43450
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 268,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 178.3,
   "widthIn": 72.4,
   "heightIn": 63.1,
   "wheelbaseIn": 103.8,
   "curbWeightLb": null,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.9,
   "cargoMaxCuFt": 50.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Harman Kardon audio",
   "Dual-pane sunroof",
   "Heated seats and steering wheel",
   "Level 2 driver assistance package",
   "Sport Speciale styling package",
   "20-inch wheels"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/06/Alfa_Romeo_Tonale_2026_Front_1_%28cropped%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Refreshed for 2026: plug-in hybrid dropped in North America, replaced by a 268-hp 2.0L turbo with standard AWD. Prices derived from listed stickers of $40,745-$45,245 assuming $1,795 destination; EPA figures for the new powertrain not yet published."
 },
 {
  "id": "aston-martin-db12",
  "make": "Aston Martin",
  "manufacturer": "Aston Martin Lagonda",
  "model": "DB12",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "grand tourer",
  "category": "car",
  "priceFrom": 248000,
  "priceTo": 269000,
  "trims": [
   {
    "name": "DB12 Coupe",
    "msrp": 248000
   },
   {
    "name": "DB12 Volante",
    "msrp": 269000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8",
    "hp": 671,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 186.4,
   "widthIn": 77.2,
   "heightIn": 50.8,
   "wheelbaseIn": 110.4,
   "curbWeightLb": 3946,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 9.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins audio",
   "Carbon-ceramic brakes",
   "Sports Plus seats",
   "Carbon-fiber exterior and interior packs",
   "Q by Aston Martin personalization"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2+2 seating. Higher-output DB12 S announced for the 2026 model year (pricing TBA). Base prices carried from 2025 MSRPs."
 },
 {
  "id": "aston-martin-dbx",
  "make": "Aston Martin",
  "manufacturer": "Aston Martin Lagonda",
  "model": "DBX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "performance luxury SUV",
  "category": "suv",
  "priceFrom": 249000,
  "priceTo": 289000,
  "trims": [
   {
    "name": "DBX707",
    "msrp": 249000
   },
   {
    "name": "DBX S",
    "msrp": 289000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8",
    "hp": 697,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8 (DBX S)",
    "hp": 717,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.4,
   "widthIn": 78.7,
   "heightIn": 66.1,
   "wheelbaseIn": 120.5,
   "curbWeightLb": 4940,
   "groundClearanceIn": 7.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.3,
   "cargoMaxCuFt": 54.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "23-inch wheels (magnesium on DBX S)",
   "Bowers & Wilkins audio",
   "Carbon-ceramic brakes",
   "Panoramic roof",
   "Sport exhaust",
   "Q by Aston Martin personalization"
  ],
  "towingLb": 5940,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "DBX707 is the base US model; new DBX S (717 hp) tops the range for 2026, price estimated (official MSRP TBA). Interior updated in 2024 with physical switchgear."
 },
 {
  "id": "aston-martin-valhalla",
  "make": "Aston Martin",
  "manufacturer": "Aston Martin Lagonda",
  "model": "Valhalla",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "limited-production hybrid supercar",
  "category": "car",
  "priceFrom": 1000000,
  "priceTo": 1000000,
  "trims": [
   {
    "name": "Valhalla",
    "msrp": 1000000
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.0L twin-turbo flat-plane V8 + 3 electric motors",
    "hp": 1064,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 185.0,
   "widthIn": 78.0,
   "heightIn": 45.5,
   "wheelbaseIn": 107.9,
   "curbWeightLb": 3649,
   "groundClearanceIn": 4.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Dihedral doors (standard)",
   "Active aerodynamics (standard)",
   "Carbon-fiber body (standard)",
   "Q by Aston Martin bespoke commissioning"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Limited to 999 units; first customer deliveries 2025-2026. Aston Martin's first mid-engine series-production car and first PHEV. Price ~$1M before options; effectively sold out."
 },
 {
  "id": "aston-martin-vanquish",
  "make": "Aston Martin",
  "manufacturer": "Aston Martin Lagonda",
  "model": "Vanquish",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "V12 flagship grand tourer",
  "category": "car",
  "priceFrom": 429000,
  "priceTo": 474000,
  "trims": [
   {
    "name": "Vanquish Coupe",
    "msrp": 429000
   },
   {
    "name": "Vanquish Volante",
    "msrp": 474000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "5.2L twin-turbo V12",
    "hp": 824,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 193.5,
   "widthIn": 78.0,
   "heightIn": 51.3,
   "wheelbaseIn": 112.9,
   "curbWeightLb": 4132,
   "groundClearanceIn": 4.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 8.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins audio",
   "Carbon-ceramic brakes (standard)",
   "Full carbon exterior packs",
   "Q by Aston Martin bespoke program"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Production capped around 1,000 units per year. Volante convertible new for 2026. Prices approximate; Aston publishes limited US MSRP detail."
 },
 {
  "id": "aston-martin-vantage",
  "make": "Aston Martin",
  "manufacturer": "Aston Martin Lagonda",
  "model": "Vantage",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 191000,
  "priceTo": 228000,
  "trims": [
   {
    "name": "Vantage Coupe",
    "msrp": 191000
   },
   {
    "name": "Vantage Roadster",
    "msrp": 208000
   },
   {
    "name": "Vantage S Coupe",
    "msrp": 211000
   },
   {
    "name": "Vantage S Roadster",
    "msrp": 228000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8",
    "hp": 656,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 175.9,
   "widthIn": 76.5,
   "heightIn": 50.9,
   "wheelbaseIn": 106.5,
   "curbWeightLb": 3847,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 9.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Carbon-ceramic brakes",
   "Sports Plus performance seats",
   "Bowers & Wilkins audio",
   "Carbon-fiber exterior packs",
   "Q by Aston Martin personalization"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "New-for-2026 Vantage S (680 hp) tops the range; S Roadster confirmed at $211,000+ base. Non-S prices based on 2025 MSRPs."
 },
 {
  "id": "audi-a3",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "A3",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "subcompact luxury sedan",
  "category": "car",
  "priceFrom": 40100,
  "priceTo": 66100,
  "trims": [
   {
    "name": "A3 Premium",
    "msrp": 40100
   },
   {
    "name": "S3 Premium",
    "msrp": 50800
   },
   {
    "name": "RS 3",
    "msrp": 66100
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (A3 40 TFSI)",
    "hp": 201,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (S3)",
    "hp": 328,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I5 (RS 3)",
    "hp": 401,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 176.9,
   "widthIn": 71.5,
   "heightIn": 56.2,
   "wheelbaseIn": 103.6,
   "curbWeightLb": 3384,
   "groundClearanceIn": 5.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 10.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Black optic package",
   "Bang & Olufsen premium audio",
   "Sport seats with Nappa leather",
   "Panoramic sunroof",
   "Adaptive cruise assist",
   "RS sport exhaust (RS 3)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "S3 and RS 3 performance variants included as trims. Quattro AWD standard across the range. Pricing sources vary slightly (A3 approx $40,100; S3 approx $50,800-$52,000); RS 3 $66,100 per Audi USA."
 },
 {
  "id": "audi-a5",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "A5",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sedan",
  "category": "car",
  "priceFrom": 50200,
  "priceTo": 63700,
  "trims": [
   {
    "name": "A5 Premium",
    "msrp": 50200
   },
   {
    "name": "A5 Prestige",
    "msrp": 56700
   },
   {
    "name": "S5 Premium",
    "msrp": 63700
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 268,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo V6 (S5)",
    "hp": 362,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.8,
   "widthIn": 73.3,
   "heightIn": 56.9,
   "wheelbaseIn": 111.8,
   "curbWeightLb": 3915,
   "groundClearanceIn": 5.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 16.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Bang & Olufsen premium audio",
   "Panoramic glass roof",
   "Head-up display",
   "OLED digital taillights",
   "Front sport seats with massage",
   "Passenger-side display"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new generation replaced the A4 sedan; body is a five-door liftback. S5 included as performance variant (price approximate). Nearly all controls are on the touchscreen."
 },
 {
  "id": "audi-a6",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "A6",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury sedan",
  "category": "car",
  "priceFrom": 63900,
  "priceTo": null,
  "trims": [
   {
    "name": "Premium",
    "msrp": 63900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo V6 mild hybrid",
    "hp": 362,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.6,
   "widthIn": 74.3,
   "heightIn": 57.4,
   "wheelbaseIn": 115.7,
   "curbWeightLb": 4400,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Bang & Olufsen premium audio",
   "Panoramic glass roof with switchable transparency",
   "Head-up display",
   "Digital OLED taillights",
   "Adaptive air suspension",
   "Passenger-side display"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new generation gas A6 sedan for 2026 with 362-hp V6 (published start price of $65,395 appears to include $1,495 destination; $63,900 used here). Upper-trim pricing and EPA figures not yet confirmed. No gas S6 offered; S6 continues only as the S6 e-tron EV."
 },
 {
  "id": "audi-a6-e-tron",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "A6 Sportback e-tron",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize electric luxury sedan",
  "category": "car",
  "priceFrom": 65900,
  "priceTo": 78900,
  "trims": [
   {
    "name": "A6 Sportback e-tron Premium",
    "msrp": 65900
   },
   {
    "name": "S6 Sportback e-tron",
    "msrp": 78900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 375,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 392
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (quattro / S6)",
    "hp": 543,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 324
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.6,
   "widthIn": 75.5,
   "heightIn": 56.9,
   "wheelbaseIn": 116.7,
   "curbWeightLb": 5300,
   "groundClearanceIn": 5.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 18.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Bang & Olufsen premium audio",
   "Panoramic glass roof with switchable transparency",
   "Digital OLED taillights with signatures",
   "Virtual exterior mirrors (not US)",
   "Head-up display",
   "Adaptive air suspension"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Audi USA jumps this model from 2025 directly to 2027 model year; cars sold new during 2026 are 2025 carryover stock. Prices shown are 2025 MSRPs (S6 e-tron approximate). Up to 392 miles EPA range (RWD with base wheels)."
 },
 {
  "id": "audi-a8",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "A8",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury sedan",
  "category": "car",
  "priceFrom": 94900,
  "priceTo": 127000,
  "trims": [
   {
    "name": "A8 L",
    "msrp": 94900
   },
   {
    "name": "S8",
    "msrp": 127000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo V6 mild hybrid",
    "hp": 335,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8 (S8)",
    "hp": 563,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 208.7,
   "widthIn": 76.6,
   "heightIn": 58.2,
   "wheelbaseIn": 123.1,
   "curbWeightLb": 4751,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Executive rear-seat package with massage",
   "Bang & Olufsen 3D advanced audio",
   "Predictive active suspension",
   "Rear-seat entertainment",
   "Panoramic sunroof",
   "Matrix-design LED headlights"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "US market gets long-wheelbase A8 L only; S8 uses standard wheelbase. Nearing end of life with no direct successor announced. Base price derived from published $96,395 figure less $1,495 destination; S8 price approximate."
 },
 {
  "id": "audi-q3",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "Q3",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV",
  "category": "suv",
  "priceFrom": 43700,
  "priceTo": null,
  "trims": [
   {
    "name": "Premium",
    "msrp": 43700
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 228,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 178.3,
   "widthIn": 73.2,
   "heightIn": 63.1,
   "wheelbaseIn": 105.5,
   "curbWeightLb": null,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Digital matrix LED headlights",
   "Panoramic sunroof",
   "Sonos premium audio",
   "Steering-column shifter frees up center console storage",
   "Adaptive drive assist"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new third-generation Q3 arrives for 2026; US pricing reported from about $43,700 before destination. Full US specs, EPA figures, and trim walk not yet published - several fields left null pending official data."
 },
 {
  "id": "audi-q4-e-tron",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "Q4 e-tron",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric luxury SUV",
  "category": "suv",
  "priceFrom": 49800,
  "priceTo": 60600,
  "trims": [
   {
    "name": "45 e-tron Premium",
    "msrp": 49800
   },
   {
    "name": "55 e-tron quattro Prestige",
    "msrp": 60600
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (45)",
    "hp": 282,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 107,
    "evRangeMi": 288
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (55 quattro)",
    "hp": 335,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 95,
    "evRangeMi": 258
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 180.7,
   "widthIn": 73.4,
   "heightIn": 64.7,
   "wheelbaseIn": 108.7,
   "curbWeightLb": 4665,
   "groundClearanceIn": 6.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 24.8,
   "cargoMaxCuFt": 53.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Q4 Sportback e-tron body style (approx. $3,000 more)",
   "Sonos premium audio",
   "Augmented-reality head-up display",
   "Matrix LED headlights",
   "Panoramic sunroof",
   "Adaptive cruise assist"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Continues for 2026; prices shown are latest published (2025) MSRPs and the top-trim figure is approximate. Sportback roofline sold under the same nameplate."
 },
 {
  "id": "audi-q5",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "Q5",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 52600,
  "priceTo": 65200,
  "trims": [
   {
    "name": "Q5 Premium",
    "msrp": 52600
   },
   {
    "name": "SQ5 Premium",
    "msrp": 65200
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid",
    "hp": 268,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo V6 (SQ5)",
    "hp": 362,
    "transmission": "7-speed S tronic (DCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.8,
   "widthIn": 75.0,
   "heightIn": 65.7,
   "wheelbaseIn": 111.2,
   "curbWeightLb": 4288,
   "groundClearanceIn": 7.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Q5 Sportback body style",
   "Bang & Olufsen premium audio",
   "Panoramic glass roof",
   "Head-up display",
   "OLED digital taillights",
   "Adaptive air suspension (SQ5)"
  ],
  "towingLb": 4400,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Third-generation Q5 (new for 2025) carries into 2026; Audi's best-seller. Prices derived from published figures less $1,495 destination. Sportback variants cost about $2,300 more. Touchscreen-centric controls."
 },
 {
  "id": "audi-q6-e-tron",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "Q6 e-tron",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric luxury SUV",
  "category": "suv",
  "priceFrom": 64500,
  "priceTo": 74300,
  "trims": [
   {
    "name": "Q6 e-tron Premium",
    "msrp": 64500
   },
   {
    "name": "SQ6 e-tron",
    "msrp": 74300
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 302,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 107,
    "evRangeMi": 321
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (quattro / SQ6)",
    "hp": 456,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 98,
    "evRangeMi": 307
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.8,
   "widthIn": 75.5,
   "heightIn": 66.3,
   "wheelbaseIn": 113.7,
   "curbWeightLb": 5313,
   "groundClearanceIn": 7.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 30.2,
   "cargoMaxCuFt": 60.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Sportback body style",
   "Bang & Olufsen premium audio",
   "Augmented-reality head-up display",
   "Digital OLED taillights",
   "Passenger-side display",
   "800-volt fast charging (up to 270 kW)"
  ],
  "towingLb": 4400,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "PPE-platform EV introduced for 2025. Q6 base price per 2026 published figure (destination inclusion unconfirmed); SQ6 (509 hp) price is latest published 2025 figure. Sportback versions cost several thousand more."
 },
 {
  "id": "audi-q7",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "Q7",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row luxury SUV",
  "category": "suv",
  "priceFrom": 62000,
  "priceTo": 91300,
  "trims": [
   {
    "name": "Q7 45 TFSI Premium",
    "msrp": 62000
   },
   {
    "name": "SQ7",
    "msrp": 91300
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (45 TFSI)",
    "hp": 261,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo V6 mild hybrid (55 TFSI)",
    "hp": 335,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8 (SQ7)",
    "hp": 500,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.9,
   "widthIn": 77.6,
   "heightIn": 68.5,
   "wheelbaseIn": 117.9,
   "curbWeightLb": 4938,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.2,
   "cargoMaxCuFt": 69.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Adaptive air suspension",
   "Bang & Olufsen 3D premium audio",
   "Second-row sunshades & 4-zone climate",
   "Panoramic sunroof",
   "HD matrix LED headlights",
   "Towing package"
  ],
  "towingLb": 7700,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Carryover generation with 2025 facelift. SQ7 price is approximate (latest published figure). Three engines: 261-hp four, 335-hp V6, 500-hp V8 SQ7."
 },
 {
  "id": "audi-q8",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "Q8",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury coupe SUV",
  "category": "suv",
  "priceFrom": 74100,
  "priceTo": 146000,
  "trims": [
   {
    "name": "Q8 55 TFSI Premium",
    "msrp": 74100
   },
   {
    "name": "SQ8",
    "msrp": 99500
   },
   {
    "name": "RS Q8 performance",
    "msrp": 146000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo V6 mild hybrid",
    "hp": 335,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8 (SQ8)",
    "hp": 500,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8 (RS Q8 performance)",
    "hp": 631,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.9,
   "widthIn": 78.5,
   "heightIn": 67.2,
   "wheelbaseIn": 117.9,
   "curbWeightLb": 5093,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 30.5,
   "cargoMaxCuFt": 60.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Adaptive air suspension",
   "Bang & Olufsen 3D premium audio",
   "HD matrix LED with laser high beams",
   "Panoramic sunroof",
   "23-inch wheels (RS Q8)",
   "Towing package"
  ],
  "towingLb": 7700,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Two-row coupe sibling to the Q7. Base price derived from published $75,600 figure less destination; SQ8 and RS Q8 performance prices approximate (latest published figures)."
 },
 {
  "id": "audi-e-tron-gt",
  "make": "Audi",
  "manufacturer": "Volkswagen Group",
  "model": "e-tron GT",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "electric grand touring sedan",
  "category": "car",
  "priceFrom": 127700,
  "priceTo": 170500,
  "trims": [
   {
    "name": "S e-tron GT Premium Plus",
    "msrp": 127700
   },
   {
    "name": "S e-tron GT Prestige",
    "msrp": 137000
   },
   {
    "name": "RS e-tron GT performance",
    "msrp": 170500
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (S e-tron GT)",
    "hp": 670,
    "transmission": "2-speed (rear axle)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 84,
    "evRangeMi": 300
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (RS e-tron GT performance)",
    "hp": 912,
    "transmission": "2-speed (rear axle)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 82,
    "evRangeMi": 278
   }
  ],
  "seats": [
   4
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.4,
   "widthIn": 77.3,
   "heightIn": 55.4,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 5060,
   "groundClearanceIn": 5.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 9.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Active suspension",
   "Carbon roof & carbon-ceramic brakes (RS)",
   "Bang & Olufsen premium audio",
   "18-way sport seats with massage",
   "Matrix LED headlights with laser light",
   "Rear-axle steering"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Shares J1 platform with Porsche Taycan; 2025 refresh dropped the base trim, leaving S and RS performance. Small frunk in addition to rear trunk. Some published prices may include destination."
 },
 {
  "id": "bmw-2-series",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "2 Series Coupe",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "compact sports coupe",
  "category": "car",
  "priceFrom": 41700,
  "priceTo": 55000,
  "trims": [
   {
    "name": "230i",
    "msrp": 41700
   },
   {
    "name": "230i xDrive",
    "msrp": 43700
   },
   {
    "name": "M240i",
    "msrp": 53000
   },
   {
    "name": "M240i xDrive",
    "msrp": 55000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (230i)",
    "hp": 255,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo I6 (M240i)",
    "hp": 382,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 179.4,
   "widthIn": 72.4,
   "heightIn": 55.3,
   "wheelbaseIn": 107.9,
   "curbWeightLb": 3519,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": 87.0,
   "cargoCuFt": 10.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Sport Package",
   "Harman Kardon surround sound",
   "Head-up display",
   "Adaptive M suspension",
   "Moonroof",
   "Driving Assistance Professional",
   "Heated front seats and steering wheel"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "2025 refresh brought curved iDrive 8.5 display; climate controls moved on-screen. BMW USA raised prices roughly $700-$1,500 across the lineup in January 2026. Destination fee $1,350 not included."
 },
 {
  "id": "bmw-2-series-gran-coupe",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "2 Series Gran Coupe",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "subcompact luxury sedan",
  "category": "car",
  "priceFrom": 39000,
  "priceTo": 48800,
  "trims": [
   {
    "name": "228 Gran Coupe",
    "msrp": 39000
   },
   {
    "name": "228 xDrive Gran Coupe",
    "msrp": 41000
   },
   {
    "name": "M235 xDrive Gran Coupe",
    "msrp": 48800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (228)",
    "hp": 241,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (M235)",
    "hp": 312,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 178.5,
   "widthIn": 70.9,
   "heightIn": 58.3,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3450,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Sport Package",
   "Harman Kardon surround sound",
   "Head-up display",
   "Panoramic moonroof",
   "Driving Assistance Professional",
   "Heated front seats and steering wheel"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Second-generation (F74) front-drive-based Gran Coupe introduced for 2025. Trim MSRPs are close approximations; published sources mix in the $1,350 destination fee."
 },
 {
  "id": "bmw-3-series",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "3 Series",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sedan",
  "category": "car",
  "priceFrom": 46650,
  "priceTo": 62950,
  "trims": [
   {
    "name": "330i",
    "msrp": 46650
   },
   {
    "name": "330i xDrive",
    "msrp": 48650
   },
   {
    "name": "M340i",
    "msrp": 60950
   },
   {
    "name": "M340i xDrive",
    "msrp": 62950
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (330i)",
    "hp": 255,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (M340i)",
    "hp": 386,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.9,
   "widthIn": 71.9,
   "heightIn": 56.4,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 3560,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 96.0,
   "cargoCuFt": 13.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Sport Package",
   "Harman Kardon surround sound",
   "Head-up display",
   "Ventilated front seats",
   "Parking Assistant Professional",
   "Driving Assistance Professional",
   "Panoramic moonroof"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Final year of the G20 generation; new 3 Series (Neue Klasse) arrives for 2027. M340i mild-hybrid is folded in here. Climate is touchscreen-based since the 2023 facelift."
 },
 {
  "id": "bmw-4-series",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "4 Series",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "compact luxury coupe",
  "category": "car",
  "priceFrom": 51850,
  "priceTo": 72300,
  "trims": [
   {
    "name": "430i Gran Coupe",
    "msrp": 51850
   },
   {
    "name": "430i Coupe",
    "msrp": 52350
   },
   {
    "name": "430i Convertible",
    "msrp": 59950
   },
   {
    "name": "M440i Coupe",
    "msrp": 64000
   },
   {
    "name": "M440i xDrive Convertible",
    "msrp": 72300
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (430i)",
    "hp": 255,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (M440i)",
    "hp": 386,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 187.9,
   "widthIn": 72.9,
   "heightIn": 54.6,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 3616,
   "groundClearanceIn": 4.8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Sport Package",
   "Harman Kardon surround sound",
   "Head-up display",
   "Parking Assistant Professional",
   "Driving Assistance Professional",
   "Neck warmer (Convertible)",
   "Ventilated front seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Sold as Coupe (2-door, 4 seats), Convertible (2-door soft-top), and Gran Coupe (4-door liftback, 5 seats). Several trim MSRPs estimated from mixed with/without-destination sources; Gran Coupe cargo grows to 45.6 cu ft folded."
 },
 {
  "id": "bmw-5-series",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "5 Series",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury sedan",
  "category": "car",
  "priceFrom": 60500,
  "priceTo": 67700,
  "trims": [
   {
    "name": "530i",
    "msrp": 60500
   },
   {
    "name": "530i xDrive",
    "msrp": 62800
   },
   {
    "name": "540i xDrive",
    "msrp": 67700
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.0L turbo I4 48V mild hybrid (530i)",
    "hp": 255,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (540i)",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.2,
   "widthIn": 74.8,
   "heightIn": 59.6,
   "wheelbaseIn": 117.9,
   "curbWeightLb": 4140,
   "groundClearanceIn": 5.7
  },
  "interior": {
   "passengerVolumeCuFt": 102.0,
   "cargoCuFt": 17.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins surround sound",
   "Highway Assistant hands-free driving",
   "Head-up display",
   "Ventilated multifunction seats",
   "Panoramic moonroof",
   "Parking Assistant Professional",
   "M Sport Package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "G60 generation. All engines are 48V mild hybrids. Destination fee $1,450 not included. Prices rose modestly in January 2026."
 },
 {
  "id": "bmw-7-series",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "7 Series",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury sedan",
  "category": "car",
  "priceFrom": 97850,
  "priceTo": 124800,
  "trims": [
   {
    "name": "740i",
    "msrp": 97850
   },
   {
    "name": "740i xDrive",
    "msrp": 100850
   },
   {
    "name": "760i xDrive",
    "msrp": 124800
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (740i)",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "4.4L twin-turbo V8 48V mild hybrid (760i)",
    "hp": 536,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 212.2,
   "widthIn": 76.8,
   "heightIn": 60.8,
   "wheelbaseIn": 126.6,
   "curbWeightLb": 4584,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 112.0,
   "cargoCuFt": 13.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Executive Lounge rear seating",
   "31-inch 8K Theater Screen",
   "Bowers & Wilkins Diamond surround sound",
   "Automatic doors",
   "Highway Assistant hands-free driving",
   "Sky Lounge panoramic roof",
   "Rear-seat entertainment tablets"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "G70 generation. Trim MSRPs derived from sources that mix in the $1,450 destination fee; accurate to within a few hundred dollars."
 },
 {
  "id": "bmw-8-series",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "8 Series",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "large luxury GT",
  "category": "car",
  "priceFrom": 94500,
  "priceTo": 120300,
  "trims": [
   {
    "name": "840i Coupe",
    "msrp": 94500
   },
   {
    "name": "840i Gran Coupe",
    "msrp": 94500
   },
   {
    "name": "840i Convertible",
    "msrp": 104500
   },
   {
    "name": "M850i xDrive",
    "msrp": 110500
   },
   {
    "name": "M850i xDrive Convertible",
    "msrp": 120300
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo I6 (840i)",
    "hp": 335,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.4L twin-turbo V8 (M850i)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 191.2,
   "widthIn": 74.9,
   "heightIn": 53.0,
   "wheelbaseIn": 111.1,
   "curbWeightLb": 3945,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins Diamond surround sound",
   "M Sport Package",
   "Glass controls (crystal shifter)",
   "Soft-close doors",
   "Driving Assistance Professional",
   "Ventilated multifunction seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Final model year: production ends April 2026 with no direct successor; M8 and Alpina B8 already discontinued. Sold as Coupe, Convertible, and 4-door Gran Coupe (5 seats). Prices from sources that may include the $1,550 destination fee. Retains iDrive 7 with physical climate controls."
 },
 {
  "id": "bmw-m2",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "M2",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "compact performance coupe",
  "category": "car",
  "priceFrom": 66200,
  "priceTo": 98600,
  "trims": [
   {
    "name": "M2",
    "msrp": 66200
   },
   {
    "name": "M2 CS",
    "msrp": 98600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6",
    "hp": 473,
    "transmission": "8-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 180.3,
   "widthIn": 74.3,
   "heightIn": 55.2,
   "wheelbaseIn": 108.1,
   "curbWeightLb": 3814,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 13.8,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "6-speed manual (no cost)",
   "M Carbon bucket seats",
   "M Carbon roof",
   "Harman Kardon surround sound",
   "M Driver's Package (higher top speed)",
   "Carbon fiber interior trim",
   "Head-up display"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "473-hp update carried over. Limited-run M2 CS (523 hp, auto only) is effectively sold out. Light interior offered only via limited upholsteries; most builds are dark."
 },
 {
  "id": "bmw-m3",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "M3",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact performance sedan",
  "category": "car",
  "priceFrom": 78400,
  "priceTo": 87700,
  "trims": [
   {
    "name": "M3",
    "msrp": 78400
   },
   {
    "name": "M3 Competition",
    "msrp": 83500
   },
   {
    "name": "M3 Competition xDrive",
    "msrp": 87700
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6",
    "hp": 473,
    "transmission": "6-speed manual",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6 (Competition)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 189.1,
   "widthIn": 74.3,
   "heightIn": 56.4,
   "wheelbaseIn": 112.5,
   "curbWeightLb": 3890,
   "groundClearanceIn": 4.8
  },
  "interior": {
   "passengerVolumeCuFt": 94.0,
   "cargoCuFt": 13.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Carbon bucket seats",
   "M Carbon ceramic brakes",
   "M Driver's Package",
   "Carbon fiber roof (standard)",
   "Harman Kardon surround sound",
   "Head-up display",
   "Ventilated front seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Base M3 is manual-only RWD (473 hp); Competition is automatic with 503 hp RWD or 523 hp xDrive. Competition (RWD) MSRP is an estimate between verified base and xDrive prices."
 },
 {
  "id": "bmw-m4",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "M4",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "compact performance coupe",
  "category": "car",
  "priceFrom": 82200,
  "priceTo": 97050,
  "trims": [
   {
    "name": "M4 Coupe",
    "msrp": 82200
   },
   {
    "name": "M4 Competition Coupe",
    "msrp": 86400
   },
   {
    "name": "M4 Competition xDrive Coupe",
    "msrp": 91500
   },
   {
    "name": "M4 Competition xDrive Convertible",
    "msrp": 97050
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6",
    "hp": 473,
    "transmission": "6-speed manual",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6 (Competition)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 189.1,
   "widthIn": 74.3,
   "heightIn": 54.8,
   "wheelbaseIn": 112.5,
   "curbWeightLb": 3830,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Carbon bucket seats",
   "M Carbon ceramic brakes",
   "M Driver's Package",
   "Carbon fiber roof (coupe)",
   "Harman Kardon surround sound",
   "Head-up display",
   "Ventilated front seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Base M4 is manual-only RWD (473 hp); Competition auto with 503 hp RWD or 523 hp xDrive. Convertible offered in Competition trims only."
 },
 {
  "id": "bmw-m5",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "M5",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "high-performance luxury sedan",
  "category": "car",
  "priceFrom": 119500,
  "priceTo": 123900,
  "trims": [
   {
    "name": "M5 Sedan",
    "msrp": 119500
   },
   {
    "name": "M5 Touring",
    "msrp": 123900
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.4L twin-turbo V8 plug-in hybrid",
    "hp": 717,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 54,
    "evRangeMi": 25
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.2,
   "widthIn": 76.5,
   "heightIn": 59.4,
   "wheelbaseIn": 118.3,
   "curbWeightLb": 5390,
   "groundClearanceIn": 5.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 16.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Carbon ceramic brakes",
   "M Driver's Package",
   "Bowers & Wilkins Diamond surround sound",
   "M Carbon exterior package",
   "Ventilated multifunction seats",
   "M Drive Professional (track modes)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "G90 V8 plug-in hybrid, 717 hp combined; mpgCombined shown is MPGe (about 15 mpg combined on gas). M5 Touring wagon offered in the US. Sources conflict on 2026 MSRPs by roughly $2,000 (Jan 2026 increase); figures shown exclude destination."
 },
 {
  "id": "bmw-x1",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "X1",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV",
  "category": "suv",
  "priceFrom": 43200,
  "priceTo": 52400,
  "trims": [
   {
    "name": "xDrive28i",
    "msrp": 43200
   },
   {
    "name": "M35i xDrive",
    "msrp": 52400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (28i)",
    "hp": 241,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (M35i)",
    "hp": 312,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 177.2,
   "widthIn": 72.6,
   "heightIn": 64.6,
   "wheelbaseIn": 106.0,
   "curbWeightLb": 3750,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": 101.0,
   "cargoCuFt": 25.7,
   "cargoMaxCuFt": 57.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Harman Kardon surround sound",
   "Head-up display",
   "Parking Assistant Plus",
   "Heated front seats and steering wheel",
   "M Sport Package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "AWD standard on all trims. MSRPs back-calculated from sticker prices that include the destination fee, so may be off by about $100."
 },
 {
  "id": "bmw-x2",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "X2",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury coupe SUV",
  "category": "suv",
  "priceFrom": 44700,
  "priceTo": 53900,
  "trims": [
   {
    "name": "xDrive28i",
    "msrp": 44700
   },
   {
    "name": "M35i xDrive",
    "msrp": 53900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (28i)",
    "hp": 241,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (M35i)",
    "hp": 312,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 179.8,
   "widthIn": 72.6,
   "heightIn": 62.6,
   "wheelbaseIn": 106.0,
   "curbWeightLb": 3800,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.3,
   "cargoMaxCuFt": 51.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Harman Kardon surround sound",
   "Head-up display",
   "Parking Assistant Plus",
   "M Sport Package",
   "Adaptive M suspension (M35i)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Coupe-roofline sibling of the X1; AWD standard. MSRPs back-calculated from destination-inclusive sticker prices."
 },
 {
  "id": "bmw-x3",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "X3",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 51300,
  "priceTo": 66500,
  "trims": [
   {
    "name": "30 xDrive",
    "msrp": 51300
   },
   {
    "name": "M50 xDrive",
    "msrp": 66500
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.0L turbo I4 48V mild hybrid (30)",
    "hp": 255,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (M50)",
    "hp": 393,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.2,
   "widthIn": 75.6,
   "heightIn": 66.0,
   "wheelbaseIn": 113.7,
   "curbWeightLb": 4154,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 31.5,
   "cargoMaxCuFt": 67.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Harman Kardon surround sound",
   "Head-up display",
   "Driving Assistance Professional",
   "Parking Assistant Professional",
   "Trailer hitch",
   "M Sport Package"
  ],
  "towingLb": 4850,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "G45 generation launched for 2025. No full X3 M offered this generation; M50 is the performance flagship."
 },
 {
  "id": "bmw-x5",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "X5",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 68300,
  "priceTo": 131000,
  "trims": [
   {
    "name": "sDrive40i",
    "msrp": 68300
   },
   {
    "name": "xDrive40i",
    "msrp": 70600
   },
   {
    "name": "xDrive50e",
    "msrp": 76000
   },
   {
    "name": "M60i xDrive",
    "msrp": 93600
   },
   {
    "name": "X5 M Competition",
    "msrp": 131000
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (40i)",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "3.0L turbo I6 plug-in hybrid (50e)",
    "hp": 483,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 58,
    "evRangeMi": 39
   },
   {
    "type": "hybrid",
    "engine": "4.4L twin-turbo V8 48V mild hybrid (M60i)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "4.4L twin-turbo V8 48V mild hybrid (X5 M)",
    "hp": 617,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.3,
   "widthIn": 78.9,
   "heightIn": 69.1,
   "wheelbaseIn": 117.1,
   "curbWeightLb": 4813,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 33.9,
   "cargoMaxCuFt": 72.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins surround sound",
   "Panoramic Sky Lounge roof",
   "Ventilated multifunction seats",
   "Trailer hitch",
   "Driving Assistance Professional",
   "Air suspension",
   "M Sport Package"
  ],
  "towingLb": 7200,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "X5 M Competition folded in as top trim (shares nameplate). 50e plug-in hybrid figure shown is MPGe. Last full year of this generation; redesign expected for 2027."
 },
 {
  "id": "bmw-x6",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "X6",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury coupe SUV",
  "category": "suv",
  "priceFrom": 76400,
  "priceTo": 134600,
  "trims": [
   {
    "name": "xDrive40i",
    "msrp": 76400
   },
   {
    "name": "M60i xDrive",
    "msrp": 96900
   },
   {
    "name": "X6 M Competition",
    "msrp": 134600
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (40i)",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "4.4L twin-turbo V8 48V mild hybrid (M60i)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "4.4L twin-turbo V8 48V mild hybrid (X6 M)",
    "hp": 617,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.8,
   "widthIn": 78.9,
   "heightIn": 66.9,
   "wheelbaseIn": 117.1,
   "curbWeightLb": 4876,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.4,
   "cargoMaxCuFt": 59.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins surround sound",
   "Panoramic moonroof",
   "Ventilated multifunction seats",
   "Trailer hitch",
   "Driving Assistance Professional",
   "M Sport Package"
  ],
  "towingLb": 7200,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Coupe-roofline X5; X6 M Competition folded in as top trim."
 },
 {
  "id": "bmw-x7",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "X7",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury SUV",
  "category": "suv",
  "priceFrom": 87500,
  "priceTo": 154500,
  "trims": [
   {
    "name": "xDrive40i",
    "msrp": 87500
   },
   {
    "name": "M60i xDrive",
    "msrp": 106100
   },
   {
    "name": "Alpina XB7",
    "msrp": 154500
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "3.0L turbo I6 48V mild hybrid (40i)",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "4.4L twin-turbo V8 48V mild hybrid (M60i)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "4.4L twin-turbo V8 48V mild hybrid (XB7)",
    "hp": 630,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 203.6,
   "widthIn": 78.7,
   "heightIn": 72.2,
   "wheelbaseIn": 122.2,
   "curbWeightLb": 5617,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.8,
   "cargoMaxCuFt": 90.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins Diamond surround sound",
   "Panoramic Sky Lounge roof",
   "Captain's chairs (6-seat)",
   "Rear-seat entertainment",
   "Air suspension (standard)",
   "Trailer hitch",
   "Executive Package"
  ],
  "towingLb": 7500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Three-row flagship SUV. M60i and Alpina XB7 MSRPs are estimates within about $2,000; base price verified. Alpina XB7 folded in as a trim."
 },
 {
  "id": "bmw-xm",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "XM",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "high-performance luxury SUV",
  "category": "suv",
  "priceFrom": 159600,
  "priceTo": 159600,
  "trims": [
   {
    "name": "XM",
    "msrp": 159600
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.4L twin-turbo V8 plug-in hybrid",
    "hp": 644,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 46,
    "evRangeMi": 31
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 201.2,
   "widthIn": 78.9,
   "heightIn": 69.1,
   "wheelbaseIn": 122.2,
   "curbWeightLb": 6062,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 18.6,
   "cargoMaxCuFt": 64.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins Diamond surround sound",
   "M Lounge rear seating",
   "Carbon fiber trim",
   "M Driver's Package",
   "Ventilated multifunction seats",
   "Night Gold accent package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Standalone M plug-in hybrid SUV; mpgCombined shown is MPGe (about 14 mpg on gas). Lineup simplified for 2026; the 738-hp Label's availability is unclear, so only the verified base model is listed. Expected to be discontinued after this generation."
 },
 {
  "id": "bmw-z4",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "Z4",
  "year": 2026,
  "bodyStyle": "convertible",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 54900,
  "priceTo": 77500,
  "trims": [
   {
    "name": "sDrive30i",
    "msrp": 54900
   },
   {
    "name": "M40i",
    "msrp": 67200
   },
   {
    "name": "M40i Final Edition",
    "msrp": 77500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (sDrive30i)",
    "hp": 255,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo I6 (M40i)",
    "hp": 382,
    "transmission": "8-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 170.7,
   "widthIn": 73.4,
   "heightIn": 51.4,
   "wheelbaseIn": 97.2,
   "curbWeightLb": 3287,
   "groundClearanceIn": 4.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 9.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "6-speed manual (M40i Handschalter package)",
   "Harman Kardon surround sound",
   "Head-up display",
   "Adaptive M suspension",
   "M Sport differential",
   "Driving Assistance Package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Final model year; production ends in 2026 with no successor. Limited M40i Final Edition (Frozen Black) sold Feb-Apr 2026. Base trim MSRPs approximate (sources mix in destination). Retains iDrive 7 with physical climate controls."
 },
 {
  "id": "bmw-i4",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "i4",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury EV",
  "category": "car",
  "priceFrom": 57900,
  "priceTo": 71400,
  "trims": [
   {
    "name": "eDrive40",
    "msrp": 57900
   },
   {
    "name": "xDrive40",
    "msrp": 61900
   },
   {
    "name": "M50",
    "msrp": 71400
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (eDrive40)",
    "hp": 335,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 109,
    "evRangeMi": 318
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (xDrive40)",
    "hp": 396,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 100,
    "evRangeMi": 307
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (M50)",
    "hp": 536,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 90,
    "evRangeMi": 269
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 188.5,
   "widthIn": 72.9,
   "heightIn": 57.0,
   "wheelbaseIn": 112.4,
   "curbWeightLb": 4680,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 10.0,
   "cargoMaxCuFt": 45.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "M Sport Package",
   "Harman Kardon surround sound",
   "Head-up display",
   "Driving Assistance Professional",
   "Parking Assistant Professional",
   "Heated front and rear seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Gran Coupe liftback body (hatch-style tailgate). EPA range varies with wheel choice; figures shown are best-case for each trim. xDrive40 and M50 MSRPs reflect small 2026 increases and are approximate within a few hundred dollars."
 },
 {
  "id": "bmw-i5",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "i5",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury EV",
  "category": "car",
  "priceFrom": 67100,
  "priceTo": 85100,
  "trims": [
   {
    "name": "eDrive40",
    "msrp": 67100
   },
   {
    "name": "xDrive40",
    "msrp": 70100
   },
   {
    "name": "xDrive40 Touring",
    "msrp": 72600
   },
   {
    "name": "M60 xDrive",
    "msrp": 85100
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (eDrive40)",
    "hp": 335,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 104,
    "evRangeMi": 295
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (xDrive40)",
    "hp": 389,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 98,
    "evRangeMi": 285
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (M60)",
    "hp": 593,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 84,
    "evRangeMi": 240
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.2,
   "widthIn": 74.8,
   "heightIn": 59.6,
   "wheelbaseIn": 117.9,
   "curbWeightLb": 4916,
   "groundClearanceIn": 5.4
  },
  "interior": {
   "passengerVolumeCuFt": 102.0,
   "cargoCuFt": 17.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins surround sound",
   "Highway Assistant hands-free driving",
   "Head-up display",
   "Ventilated multifunction seats",
   "Panoramic moonroof",
   "Max Range mode",
   "M Sport Package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Electric version of the G60 5 Series. xDrive40 Touring wagon joined the US lineup; its MSRP shown is approximate. Ranges vary with wheels."
 },
 {
  "id": "bmw-i7",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "i7",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury EV",
  "category": "car",
  "priceFrom": 105700,
  "priceTo": 168500,
  "trims": [
   {
    "name": "eDrive50",
    "msrp": 105700
   },
   {
    "name": "xDrive60",
    "msrp": 124200
   },
   {
    "name": "M70 xDrive",
    "msrp": 168500
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (eDrive50)",
    "hp": 449,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 87,
    "evRangeMi": 321
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (xDrive60)",
    "hp": 536,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 83,
    "evRangeMi": 307
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (M70)",
    "hp": 650,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 75,
    "evRangeMi": 285
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 212.2,
   "widthIn": 76.8,
   "heightIn": 60.8,
   "wheelbaseIn": 126.6,
   "curbWeightLb": 5917,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 112.0,
   "cargoCuFt": 11.4,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Executive Lounge rear seating",
   "31-inch 8K Theater Screen",
   "Bowers & Wilkins Diamond surround sound",
   "Automatic doors",
   "Highway Assistant hands-free driving",
   "Crystal headlights with Swarovski elements",
   "Rear-seat entertainment tablets"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Electric 7 Series. EPA range varies with wheel choice; best-case figures shown."
 },
 {
  "id": "bmw-ix",
  "make": "BMW",
  "manufacturer": "BMW Group",
  "model": "iX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury EV SUV",
  "category": "suv",
  "priceFrom": 75150,
  "priceTo": 111500,
  "trims": [
   {
    "name": "xDrive45",
    "msrp": 75150
   },
   {
    "name": "xDrive60",
    "msrp": 88500
   },
   {
    "name": "M70 xDrive",
    "msrp": 111500
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (xDrive45)",
    "hp": 402,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 107,
    "evRangeMi": 312
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (xDrive60)",
    "hp": 536,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 106,
    "evRangeMi": 364
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (M70)",
    "hp": 650,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 88,
    "evRangeMi": 302
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.0,
   "widthIn": 77.4,
   "heightIn": 66.8,
   "wheelbaseIn": 118.1,
   "curbWeightLb": 5659,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 35.5,
   "cargoMaxCuFt": 77.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins surround sound",
   "Electrochromic panoramic Sky Lounge roof",
   "Ventilated multifunction seats",
   "Driving Assistance Professional",
   "Air suspension",
   "Interior camera"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Major 2026 refresh: new entry xDrive45 replaces xDrive50; more power and range across lineup. Ranges shown are best-case (vary with wheels)."
 },
 {
  "id": "bentley-bentayga",
  "make": "Bentley",
  "manufacturer": "Volkswagen Group",
  "model": "Bentayga",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "ultra-luxury SUV",
  "category": "suv",
  "priceFrom": 195000,
  "priceTo": 309000,
  "trims": [
   {
    "name": "Bentayga",
    "msrp": 195000
   },
   {
    "name": "Bentayga EWB Azure",
    "msrp": 240000
   },
   {
    "name": "Bentayga Speed",
    "msrp": 309000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8",
    "hp": 542,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8 (Speed)",
    "hp": 641,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 201.8,
   "widthIn": 78.7,
   "heightIn": 68.6,
   "wheelbaseIn": 117.9,
   "curbWeightLb": 5340,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.1,
   "cargoMaxCuFt": 62.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Extended wheelbase with airline rear seats",
   "Naim for Bentley audio",
   "Four-seat / seven-seat configurations",
   "All-terrain specification",
   "Mulliner specification",
   "Rear-seat entertainment"
  ],
  "towingLb": 7716,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 lineup: standard-wheelbase V8, EWB (extended wheelbase), and reintroduced 641-hp Bentayga Speed (now V8, formerly W12). Prices approximate from dealer price lists; 7-seat option on standard wheelbase only."
 },
 {
  "id": "bentley-continental-gt",
  "make": "Bentley",
  "manufacturer": "Volkswagen Group",
  "model": "Continental GT",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "ultra-luxury grand tourer",
  "category": "car",
  "priceFrom": 240000,
  "priceTo": 310000,
  "trims": [
   {
    "name": "Continental GT",
    "msrp": 240000
   },
   {
    "name": "Continental GT S",
    "msrp": 250000
   },
   {
    "name": "Continental GT Speed",
    "msrp": 285000
   },
   {
    "name": "Continental GTC Speed",
    "msrp": 310000
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.0L twin-turbo V8 plug-in hybrid",
    "hp": 671,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "4.0L twin-turbo V8 plug-in hybrid (Speed)",
    "hp": 771,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 190.9,
   "widthIn": 77.4,
   "heightIn": 55.3,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 5469,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Rotating display dashboard",
   "Naim for Bentley audio",
   "Mulliner specification",
   "Rotating-spoke wheels",
   "Contrast stitching and hide combinations",
   "Touring driver-assist package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Fourth generation: every 2026 Continental GT is now a plug-in hybrid (no more W12 or pure V8). GTC convertible variants offered across trims. US prices approximate from dealer price lists; official trim-by-trim MSRPs vary."
 },
 {
  "id": "bentley-flying-spur",
  "make": "Bentley",
  "manufacturer": "Volkswagen Group",
  "model": "Flying Spur",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "ultra-luxury sedan",
  "category": "car",
  "priceFrom": 225000,
  "priceTo": 300000,
  "trims": [
   {
    "name": "Flying Spur",
    "msrp": 225000
   },
   {
    "name": "Flying Spur S",
    "msrp": 265000
   },
   {
    "name": "Flying Spur Speed",
    "msrp": 300000
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.0L twin-turbo V8 plug-in hybrid",
    "hp": 671,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "4.0L twin-turbo V8 plug-in hybrid (Speed)",
    "hp": 771,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 209.3,
   "widthIn": 77.9,
   "heightIn": 58.0,
   "wheelbaseIn": 125.7,
   "curbWeightLb": 5800,
   "groundClearanceIn": 5.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Rotating display",
   "Naim for Bentley audio",
   "Rear-seat entertainment",
   "Airline-style rear seats (4-seat configuration)",
   "Mulliner specification",
   "Panoramic sunroof"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "For 2026 the Flying Spur moves to the 671-hp high-performance hybrid as standard; Speed gets 771 hp. Prices approximate from dealer price lists."
 },
 {
  "id": "buick-enclave",
  "make": "Buick",
  "manufacturer": "General Motors",
  "model": "Enclave",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row premium SUV",
  "category": "suv",
  "priceFrom": 46400,
  "priceTo": 60000,
  "trims": [
   {
    "name": "Preferred",
    "msrp": 46400
   },
   {
    "name": "Sport Touring",
    "msrp": 49900
   },
   {
    "name": "Avenir",
    "msrp": 60000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 328,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 204.6,
   "widthIn": 78.8,
   "heightIn": 71.3,
   "wheelbaseIn": 121.7,
   "curbWeightLb": 4720,
   "groundClearanceIn": 7.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.6,
   "cargoMaxCuFt": 97.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "30-inch ultrawide display (standard)",
   "Panoramic moonroof",
   "Bose premium audio",
   "Heated/ventilated front seats with massage (Avenir)",
   "Adaptive air-quality ionizer"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Buick%20Enclave%20front%20view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "All-new generation for 2025; turbo-four replaced the V6. Prices exclude $1,995 destination."
 },
 {
  "id": "buick-encore-gx",
  "make": "Buick",
  "manufacturer": "General Motors",
  "model": "Encore GX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 24800,
  "priceTo": 31400,
  "trims": [
   {
    "name": "Preferred",
    "msrp": 24800
   },
   {
    "name": "Sport Touring",
    "msrp": 26600
   },
   {
    "name": "Avenir",
    "msrp": 31400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.2L turbo I3",
    "hp": 137,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "1.3L turbo I3",
    "hp": 155,
    "transmission": "CVT (FWD) / 9-speed automatic (AWD)",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 171.4,
   "widthIn": 71.4,
   "heightIn": 64.1,
   "wheelbaseIn": 102.2,
   "curbWeightLb": 3025,
   "groundClearanceIn": 7.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.5,
   "cargoMaxCuFt": 50.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "11-inch touchscreen",
   "Adaptive cruise control",
   "Bose premium audio",
   "Heated front seats and steering wheel",
   "Moonroof",
   "Avenir premium interior"
  ],
  "towingLb": 1000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Buick%20Encore%20GX%20Preferred%2C%20front%20left%2C%2007-21-2024.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "AWD requires the 1.3L engine. Prices approximate, excluding ~$1,395 destination."
 },
 {
  "id": "buick-envision",
  "make": "Buick",
  "manufacturer": "General Motors",
  "model": "Envision",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact premium SUV",
  "category": "suv",
  "priceFrom": 41400,
  "priceTo": 47900,
  "trims": [
   {
    "name": "Preferred",
    "msrp": 41400
   },
   {
    "name": "Sport Touring",
    "msrp": 43700
   },
   {
    "name": "Avenir",
    "msrp": 47900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 228,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.7,
   "widthIn": 74.1,
   "heightIn": 64.9,
   "wheelbaseIn": 109.4,
   "curbWeightLb": 3890,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.2,
   "cargoMaxCuFt": 52.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "30-inch ultrawide display (standard after 2024 refresh)",
   "Panoramic moonroof",
   "Adaptive cruise control",
   "Bose premium audio",
   "Heated/ventilated front seats",
   "Head-up display"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Buick%20Envision%20ST%20Essence%20in%20Moonstone%20Gray%20Metallic%2C%20front%20right.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Base Preferred price verified ($42,895 incl. destination); mid/top trims approximate. Prices exclude ~$1,495 destination."
 },
 {
  "id": "buick-envista",
  "make": "Buick",
  "manufacturer": "General Motors",
  "model": "Envista",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact crossover coupe",
  "category": "suv",
  "priceFrom": 24600,
  "priceTo": 28600,
  "trims": [
   {
    "name": "Preferred",
    "msrp": 24600
   },
   {
    "name": "Sport Touring",
    "msrp": 25300
   },
   {
    "name": "Avenir",
    "msrp": 28600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.2L turbo I3",
    "hp": 137,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 182.6,
   "widthIn": 71.5,
   "heightIn": 61.9,
   "wheelbaseIn": 106.3,
   "curbWeightLb": 3010,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.7,
   "cargoMaxCuFt": 42.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "11-inch touchscreen with wireless CarPlay/Android Auto",
   "Adaptive cruise control",
   "Heated front seats and steering wheel",
   "Wireless phone charging",
   "Avenir premium interior",
   "Remote start"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Buick%20Envista%20001.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "FWD only. Sleek fastback-styled crossover on the Trax platform. Prices approximate, excluding ~$1,395 destination."
 },
 {
  "id": "cadillac-ct4",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "CT4",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sedan",
  "category": "car",
  "priceFrom": 36200,
  "priceTo": 63800,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 36200
   },
   {
    "name": "Sport",
    "msrp": 40300
   },
   {
    "name": "Premium Luxury",
    "msrp": 40900
   },
   {
    "name": "V-Series",
    "msrp": 50300
   },
   {
    "name": "V-Series Blackwing",
    "msrp": 63800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 237,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.7L turbo I4 (325 hp in CT4-V)",
    "hp": 310,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.6L twin-turbo V6 (Blackwing)",
    "hp": 472,
    "transmission": "6-speed manual or 10-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.2,
   "widthIn": 71.5,
   "heightIn": 56.0,
   "wheelbaseIn": 109.3,
   "curbWeightLb": 3461,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 10.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "V-Series Blackwing with available 6-speed manual",
   "Magnetic Ride Control",
   "Super Cruise (available)",
   "AKG premium audio",
   "Performance data recorder",
   "Carbon-fiber aero package (Blackwing)"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Cadillac%20CT4%20001.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Final model year: CT4 production ends mid-2026. Mid-trim prices approximate; excludes ~$1,595 destination."
 },
 {
  "id": "cadillac-ct5",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "CT5",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury sedan",
  "category": "car",
  "priceFrom": 49200,
  "priceTo": 98900,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 49200
   },
   {
    "name": "Sport",
    "msrp": 52900
   },
   {
    "name": "Premium Luxury",
    "msrp": 53700
   },
   {
    "name": "V-Series",
    "msrp": 63300
   },
   {
    "name": "V-Series Blackwing",
    "msrp": 98900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 237,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 (360 hp in CT5-V)",
    "hp": 335,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L supercharged V8 (Blackwing)",
    "hp": 668,
    "transmission": "6-speed manual or 10-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.8,
   "widthIn": 74.1,
   "heightIn": 57.2,
   "wheelbaseIn": 116.0,
   "curbWeightLb": 3760,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 11.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "33-inch curved LED display (standard since 2025 refresh)",
   "Super Cruise hands-free driver assistance",
   "Magnetic Ride Control",
   "AKG Studio 19-speaker audio",
   "V-Series Blackwing with available 6-speed manual",
   "Performance data recorder"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Cadillac%20CT5.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Price range verified ($50,995-$100,695 incl. $1,795 destination); mid-trim figures approximate. Cadillac's last remaining mainstream gas sedan line with the CT4 ending mid-2026."
 },
 {
  "id": "cadillac-celestiq",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "Celestiq",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "ultra-luxury sedan",
  "category": "car",
  "priceFrom": 414855,
  "priceTo": 414855,
  "trims": [
   {
    "name": "Celestiq (bespoke commission)",
    "msrp": 414855
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 655,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 303
   }
  ],
  "seats": [
   4
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 217.2,
   "widthIn": 81.9,
   "heightIn": 57.6,
   "wheelbaseIn": 121.8,
   "curbWeightLb": 6441,
   "groundClearanceIn": 5.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Hand-built to individual commission at GM's Global Technical Center",
   "55-inch pillar-to-pillar display plus four more screens",
   "Smart glass roof with four-quadrant adjustable tint",
   "Ultra Cruise/Super Cruise hands-free driving",
   "Active rear steering and Magnetic Ride Control",
   "38-speaker AKG audio"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Cadillac%20Celestiq%2020231120.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Hand-built flagship EV; 2026 base price $414,855 before $8,195 destination, effectively bespoke with virtually unlimited personalization."
 },
 {
  "id": "cadillac-escalade",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "Escalade",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury SUV",
  "category": "suv",
  "priceFrom": 91700,
  "priceTo": 168600,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 91700
   },
   {
    "name": "Premium Luxury",
    "msrp": 104000
   },
   {
    "name": "Sport",
    "msrp": 104500
   },
   {
    "name": "Premium Luxury Platinum",
    "msrp": 128000
   },
   {
    "name": "Escalade-V",
    "msrp": 168600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.2L V8",
    "hp": 420,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "3.0L turbodiesel I6",
    "hp": 305,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L supercharged V8 (Escalade-V)",
    "hp": 682,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 13,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 211.9,
   "widthIn": 81.1,
   "heightIn": 76.7,
   "wheelbaseIn": 120.9,
   "curbWeightLb": 5822,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.5,
   "cargoMaxCuFt": 121.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "55-inch pillar-to-pillar curved display (2025 refresh)",
   "Super Cruise hands-free driver assistance",
   "AKG Studio Reference 36-speaker audio",
   "Air Ride adaptive suspension with Magnetic Ride Control",
   "Executive second-row seating package",
   "Night vision"
  ],
  "towingLb": 8000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Cadillac%20Escalade%20ESV%20Facelift.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "ESV long-wheelbase adds ~$3,000. Base and V prices verified; mid-trim figures approximate. Climate control is largely screen-based after the 2025 refresh. Prices exclude ~$1,995 destination."
 },
 {
  "id": "cadillac-escalade-iq",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "Escalade IQ",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury electric SUV",
  "category": "suv",
  "priceFrom": 127405,
  "priceTo": 151205,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 127405
   },
   {
    "name": "Sport",
    "msrp": 127905
   },
   {
    "name": "Premium Luxury",
    "msrp": 147705
   },
   {
    "name": "Premium Sport",
    "msrp": 148205
   },
   {
    "name": "IQL Premium Sport",
    "msrp": 151205
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (750 hp in Velocity Max)",
    "hp": 750,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 460
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 224.3,
   "widthIn": 81.1,
   "heightIn": 76.1,
   "wheelbaseIn": 136.2,
   "curbWeightLb": 9134,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.7,
   "cargoMaxCuFt": 119.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "55-inch pillar-to-pillar display plus Executive rear command center",
   "Super Cruise hands-free driver assistance",
   "Four-wheel steering with Arrival Mode (diagonal drive)",
   "Air Ride adaptive suspension",
   "AKG Studio Reference 40-speaker audio",
   "Power-opening eTrunk frunk"
  ],
  "towingLb": 8000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/25%20Cadillac%20Escalade%20IQ%20Luxury%201.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "~205 kWh battery, 460-mile range, 800V DC fast charging. Extended-length Escalade IQL folded into this record (+$3,000). Prices exclude $2,895 destination."
 },
 {
  "id": "cadillac-lyriq",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "Lyriq",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury electric SUV",
  "category": "suv",
  "priceFrom": 59200,
  "priceTo": 83795,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 59200
   },
   {
    "name": "Sport",
    "msrp": 59700
   },
   {
    "name": "Premium Luxury",
    "msrp": 63200
   },
   {
    "name": "Signature Luxury",
    "msrp": 67800
   },
   {
    "name": "V-Series",
    "msrp": 78595
   },
   {
    "name": "V-Series Premium",
    "msrp": 83795
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 340,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 326
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 500,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 307
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Lyriq-V)",
    "hp": 615,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 285
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.7,
   "widthIn": 77.8,
   "heightIn": 63.9,
   "wheelbaseIn": 121.8,
   "curbWeightLb": 5610,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 28.0,
   "cargoMaxCuFt": 60.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "33-inch curved LED display",
   "Super Cruise hands-free driver assistance",
   "AKG Studio 19- or 23-speaker audio",
   "Nappa leather with massaging front seats",
   "22-inch wheels (V-Series)",
   "Velocity Max launch mode (V)"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Cadillac%20Lyriq%2C%20Auto%202024%2C%20Zurich%20%28PANA0503%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "2026 trim prices verified (incl.-destination figures minus $1,495 DFC). Lyriq-V does 0-60 in about 3.3 s."
 },
 {
  "id": "cadillac-optiq",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "Optiq",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury electric SUV",
  "category": "suv",
  "priceFrom": 50900,
  "priceTo": 67300,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 50900
   },
   {
    "name": "Sport",
    "msrp": 51500
   },
   {
    "name": "Premium Luxury",
    "msrp": 53100
   },
   {
    "name": "Premium Sport",
    "msrp": 53600
   },
   {
    "name": "V-Series",
    "msrp": 67300
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (new for 2026)",
    "hp": 315,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 300,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 302
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Optiq-V)",
    "hp": 519,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 275
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 189.8,
   "widthIn": 76.0,
   "heightIn": 64.6,
   "wheelbaseIn": 116.3,
   "curbWeightLb": 5192,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 26.0,
   "cargoMaxCuFt": 57.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "33-inch curved LED display",
   "Super Cruise hands-free driver assistance",
   "AKG 19-speaker audio with Dolby Atmos",
   "Panoramic fixed-glass roof",
   "NACS charge port (2026)",
   "Optiq-V with Velocity Max mode"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Cadillac%20Optiq%20Auto%20Zuerich%202025%20DSC%203328.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "RWD variant and V-Series new for 2026; RWD output/range not yet EPA-published (hp estimated). AWD adds $3,500. Prices exclude $1,495 destination."
 },
 {
  "id": "cadillac-vistiq",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "Vistiq",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row luxury electric SUV",
  "category": "suv",
  "priceFrom": 77395,
  "priceTo": 96495,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 77395
   },
   {
    "name": "Sport",
    "msrp": 77895
   },
   {
    "name": "Premium Luxury",
    "msrp": 91895
   },
   {
    "name": "Platinum",
    "msrp": 96495
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 615,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 305
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 205.6,
   "widthIn": 79.9,
   "heightIn": 71.0,
   "wheelbaseIn": 121.8,
   "curbWeightLb": 6326,
   "groundClearanceIn": 6.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15.2,
   "cargoMaxCuFt": 80.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "33-inch curved LED display",
   "Super Cruise hands-free driver assistance",
   "Air Ride adaptive suspension with rear steering (Platinum)",
   "23-speaker AKG Studio audio with Dolby Atmos",
   "Executive second-row captain's chairs",
   "Night vision"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Cadillac%20Vistiq%20001.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "All-new for 2026; three-row electric successor to the XT6. Velocity Max mode unlocks full 615 hp. Prices exclude $1,995 destination."
 },
 {
  "id": "cadillac-xt5",
  "make": "Cadillac",
  "manufacturer": "General Motors",
  "model": "XT5",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 45000,
  "priceTo": 55000,
  "trims": [
   {
    "name": "Luxury",
    "msrp": 45000
   },
   {
    "name": "Premium Luxury",
    "msrp": 49500
   },
   {
    "name": "Sport",
    "msrp": 55000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 235,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 310,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 189.5,
   "widthIn": 75.0,
   "heightIn": 66.1,
   "wheelbaseIn": 112.5,
   "curbWeightLb": 3998,
   "groundClearanceIn": 7.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 30.0,
   "cargoMaxCuFt": 63.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "33-inch curved display (2026 update availability varies)",
   "Panoramic sunroof",
   "AKG premium audio",
   "Heated/ventilated front seats",
   "HD surround-vision camera",
   "Night vision (available)"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2020%20Cadillac%20XT5%20au%20SIAM%202020.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Continues for 2026 as Cadillac's last gas crossover alongside Escalade; XT4 and XT6 are discontinued. Mid/top trim prices approximate; excludes ~$1,595 destination."
 },
 {
  "id": "chevrolet-blazer",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Blazer",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV",
  "category": "suv",
  "priceFrom": 35300,
  "priceTo": 44900,
  "trims": [
   {
    "name": "2LT",
    "msrp": 35300
   },
   {
    "name": "RS",
    "msrp": 44100
   },
   {
    "name": "Premier",
    "msrp": 44900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 228,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 308,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 191.4,
   "widthIn": 76.7,
   "heightIn": 67.0,
   "wheelbaseIn": 112.7,
   "curbWeightLb": 3810,
   "groundClearanceIn": 7.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 30.5,
   "cargoMaxCuFt": 64.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "3.6L V6 engine (RS/Premier)",
   "Panoramic sunroof",
   "Adaptive cruise control",
   "Bose premium audio",
   "Heated and ventilated front seats",
   "Hitch package with trailering equipment"
  ],
  "towingLb": 4500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Chevrolet%20Blazer%20RS.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Gas Blazer continues for 2026 (GM reversed earlier plans to drop it). 2026 prices not fully published; figures based on latest 2025 MSRPs excluding ~$1,495 destination."
 },
 {
  "id": "chevrolet-blazer-ev",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Blazer EV",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric SUV",
  "category": "suv",
  "priceFrom": 45000,
  "priceTo": 61000,
  "trims": [
   {
    "name": "LT",
    "msrp": 45000
   },
   {
    "name": "RS",
    "msrp": 48900
   },
   {
    "name": "SS",
    "msrp": 61000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD",
    "hp": 220,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 312
   },
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 340,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 334
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 300,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 96,
    "evRangeMi": 283
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (SS)",
    "hp": 615,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 303
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.2,
   "widthIn": 78.0,
   "heightIn": 64.8,
   "wheelbaseIn": 121.8,
   "curbWeightLb": 5337,
   "groundClearanceIn": 7.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.8,
   "cargoMaxCuFt": 59.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "17.7-inch touchscreen",
   "Panoramic sunroof (RS/SS)",
   "Heated and ventilated front seats",
   "Wide Open Watts (WOW) mode on SS",
   "360-degree camera"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Chevrolet%20Blazer%20EV%20SS%20%28United%20States%29%20front%20view.png",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "SS makes 615 hp / 650 lb-ft, 0-60 in under 3.5 s. RS mid-trim price approximate. Prices exclude ~$1,495 destination."
 },
 {
  "id": "chevrolet-colorado",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Colorado",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "midsize pickup",
  "category": "truck",
  "priceFrom": 32400,
  "priceTo": 50700,
  "trims": [
   {
    "name": "WT",
    "msrp": 32400
   },
   {
    "name": "LT",
    "msrp": 36000
   },
   {
    "name": "Trail Boss",
    "msrp": 40100
   },
   {
    "name": "Z71",
    "msrp": 43900
   },
   {
    "name": "ZR2",
    "msrp": 50700
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.7L TurboMax turbo I4",
    "hp": 310,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 213.2,
   "widthIn": 74.9,
   "heightIn": 70.7,
   "wheelbaseIn": 131.4,
   "curbWeightLb": 4285,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "ZR2 with Multimatic DSSV dampers and front/rear lockers",
   "ZR2 Bison (AEV) package",
   "11.3-inch touchscreen (standard)",
   "Advanced trailering package",
   "Bose premium audio",
   "Spray-in bedliner"
  ],
  "towingLb": 7700,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20Chevrolet%20Colorado%20ZR2.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Crew cab / short bed only. Single 310 hp TurboMax engine across the range. WT/LT verified; mid trims approximate. Prices exclude $2,095 destination. ZR2 ground clearance 10.7 in."
 },
 {
  "id": "chevrolet-corvette",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Corvette",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 70000,
  "priceTo": 207100,
  "trims": [
   {
    "name": "Stingray",
    "msrp": 70000
   },
   {
    "name": "E-Ray",
    "msrp": 108000
   },
   {
    "name": "Z06",
    "msrp": 131000
   },
   {
    "name": "ZR1",
    "msrp": 182000
   },
   {
    "name": "ZR1X",
    "msrp": 207100
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.2L V8 (Stingray)",
    "hp": 495,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "6.2L V8 + front e-motor (E-Ray)",
    "hp": 655,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.5L flat-plane-crank V8 (Z06)",
    "hp": 670,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 14,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.5L twin-turbo V8 (ZR1)",
    "hp": 1064,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "5.5L twin-turbo V8 + front e-motor (ZR1X)",
    "hp": 1250,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 182.3,
   "widthIn": 76.1,
   "heightIn": 48.6,
   "wheelbaseIn": 107.2,
   "curbWeightLb": 3366,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Removable roof panel (coupe) or convertible body",
   "Z51 performance package",
   "Magnetic Ride Control",
   "Front axle lift with GPS memory",
   "Performance data recorder",
   "Carbon-fiber aero packages"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Corvette%20C8%20IMG%208837.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Coupe and convertible offered on most variants (convertible ~$7,500 more). E-Ray/Z06 prices approximate; Stingray/ZR1/ZR1X verified before destination."
 },
 {
  "id": "chevrolet-equinox",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Equinox",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 26950,
  "priceTo": 30350,
  "trims": [
   {
    "name": "LT",
    "msrp": 26950
   },
   {
    "name": "ACTIV",
    "msrp": 29950
   },
   {
    "name": "RS",
    "msrp": 30350
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 175,
    "transmission": "CVT (FWD) / 8-speed automatic (AWD)",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.2,
   "widthIn": 75.6,
   "heightIn": 65.6,
   "wheelbaseIn": 107.5,
   "curbWeightLb": 3516,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 29.8,
   "cargoMaxCuFt": 63.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "17.7-inch touchscreen (standard)",
   "Panoramic sunroof",
   "Adaptive cruise control",
   "Heated and ventilated front seats",
   "Hands-free power liftgate",
   "360-degree camera"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Chevrolet%20Equinox%20front%20view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "All-new generation launched for 2025; 2026 is a carryover. ACTIV/RS trim prices are estimates; base LT verified. Prices exclude $1,495 destination."
 },
 {
  "id": "chevrolet-equinox-ev",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Equinox EV",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric SUV",
  "category": "suv",
  "priceFrom": 34995,
  "priceTo": 44500,
  "trims": [
   {
    "name": "LT 1",
    "msrp": 34995
   },
   {
    "name": "LT 2",
    "msrp": 40300
   },
   {
    "name": "RS",
    "msrp": 44500
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD",
    "hp": 213,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 117,
    "evRangeMi": 319
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 288,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 109,
    "evRangeMi": 307
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 190.4,
   "widthIn": 76.9,
   "heightIn": 63.6,
   "wheelbaseIn": 116.3,
   "curbWeightLb": 4923,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 26.4,
   "cargoMaxCuFt": 57.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "17.7-inch touchscreen (standard)",
   "Heated and ventilated front seats",
   "360-degree camera",
   "Power liftgate",
   "19.2 kW AC charging (available)"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Chevrolet%20Equinox%20EV%20Washington%20DC%20Metro%20Area%2C%20USA.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "One of the least expensive 300+ mile EVs in the US. Mid-trim (LT 2) price approximate. Prices exclude ~$1,395 destination."
 },
 {
  "id": "chevrolet-silverado-1500",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Silverado 1500",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size pickup",
  "category": "truck",
  "priceFrom": 38145,
  "priceTo": 74295,
  "trims": [
   {
    "name": "WT",
    "msrp": 38145
   },
   {
    "name": "Custom",
    "msrp": 43500
   },
   {
    "name": "LT",
    "msrp": 47600
   },
   {
    "name": "RST",
    "msrp": 51500
   },
   {
    "name": "LTZ",
    "msrp": 57500
   },
   {
    "name": "High Country",
    "msrp": 63500
   },
   {
    "name": "ZR2",
    "msrp": 74295
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.7L TurboMax turbo I4",
    "hp": 310,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.3L V8",
    "hp": 355,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L V8",
    "hp": 420,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "3.0L Duramax turbodiesel I6",
    "hp": 305,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   3,
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 231.9,
   "widthIn": 81.2,
   "heightIn": 75.5,
   "wheelbaseIn": 147.4,
   "curbWeightLb": 4740,
   "groundClearanceIn": 8.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance (with trailering)",
   "Multi-Flex tailgate",
   "ZR2 off-road package with Multimatic dampers",
   "13.4-inch touchscreen",
   "Bose premium audio",
   "Advanced trailering system"
  ],
  "towingLb": 13300,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2022%20Chevrolet%20Silverado%201500%20Z71.png",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Regular, double and crew cabs; dims shown for crew cab short bed. Mid-trim prices approximate. Prices exclude $2,195 destination."
 },
 {
  "id": "chevrolet-silverado-ev",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Silverado EV",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size electric pickup",
  "category": "truck",
  "priceFrom": 52700,
  "priceTo": 89100,
  "trims": [
   {
    "name": "WT Standard Range",
    "msrp": 52700
   },
   {
    "name": "LT Standard Range",
    "msrp": 60800
   },
   {
    "name": "Trail Boss Extended Range",
    "msrp": 69900
   },
   {
    "name": "LT Max Range",
    "msrp": 89100
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (510-760 hp by config)",
    "hp": 645,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 478
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 233.1,
   "widthIn": 83.8,
   "heightIn": 78.7,
   "wheelbaseIn": 145.7,
   "curbWeightLb": 8532,
   "groundClearanceIn": 8.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Up to 478 miles of range (Max Range battery)",
   "Multi-Flex Midgate pass-through to cab",
   "Multi-Flex tailgate",
   "Super Cruise",
   "PowerBase 10.2 kW onboard power outlets",
   "Four-wheel steer (RST heritage feature availability varies)"
  ],
  "towingLb": 12500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Chevrolet%20Silverado%20EV%20RST%20First%20Edition%20front%20view.png",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Range varies ~283-478 mi by battery. Trail Boss trim new for 2026. Prices back-calculated excluding $2,195 destination."
 },
 {
  "id": "chevrolet-silverado-hd",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Silverado HD",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "heavy-duty pickup",
  "category": "truck",
  "priceFrom": 46000,
  "priceTo": 76500,
  "trims": [
   {
    "name": "WT",
    "msrp": 46000
   },
   {
    "name": "Custom",
    "msrp": 51000
   },
   {
    "name": "LT",
    "msrp": 53500
   },
   {
    "name": "LTZ",
    "msrp": 62500
   },
   {
    "name": "High Country",
    "msrp": 74000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.6L V8",
    "hp": 401,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "6.6L Duramax turbodiesel V8",
    "hp": 470,
    "transmission": "10-speed Allison automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   3,
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 250.0,
   "widthIn": 81.9,
   "heightIn": 79.8,
   "wheelbaseIn": 158.9,
   "curbWeightLb": 6947,
   "groundClearanceIn": 10.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Duramax diesel with 975 lb-ft of torque",
   "Gooseneck/5th-wheel prep package",
   "Super Cruise (available)",
   "13.4-inch touchscreen",
   "ZR2 off-road variant",
   "Advanced trailering cameras (up to 14 views)"
  ],
  "towingLb": 36000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/24%20Chevrolet%20Silverado%202500HD%20LT.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Single record covering Silverado 2500HD and 3500HD. Max towing 36,000 lb is 3500HD dually diesel with gooseneck; 2500HD tows up to ~22,500 lb. Prices approximate, exclude $2,195 destination."
 },
 {
  "id": "chevrolet-suburban",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Suburban",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "extended full-size SUV",
  "category": "suv",
  "priceFrom": 63700,
  "priceTo": 81510,
  "trims": [
   {
    "name": "LS",
    "msrp": 63700
   },
   {
    "name": "LT",
    "msrp": 66700
   },
   {
    "name": "RST",
    "msrp": 71700
   },
   {
    "name": "Z71",
    "msrp": 73700
   },
   {
    "name": "Premier",
    "msrp": 78600
   },
   {
    "name": "High Country",
    "msrp": 81510
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "5.3L V8",
    "hp": 355,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L V8",
    "hp": 420,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "3.0L turbodiesel I6",
    "hp": 305,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 225.7,
   "widthIn": 81.0,
   "heightIn": 75.7,
   "wheelbaseIn": 134.1,
   "curbWeightLb": 5808,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 41.5,
   "cargoMaxCuFt": 144.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "Adaptive Air Ride suspension with Magnetic Ride Control",
   "Panoramic sunroof",
   "Rear-seat entertainment screens",
   "Power-sliding center console",
   "Bose premium audio"
  ],
  "towingLb": 8300,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/23%20Chevrolet%20Suburban%20LT.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Long-wheelbase companion to the Tahoe with huge third-row and cargo space. Prices exclude $2,795 destination."
 },
 {
  "id": "chevrolet-tahoe",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Tahoe",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size SUV",
  "category": "suv",
  "priceFrom": 60700,
  "priceTo": 79200,
  "trims": [
   {
    "name": "LS",
    "msrp": 60700
   },
   {
    "name": "LT",
    "msrp": 63700
   },
   {
    "name": "RST",
    "msrp": 68200
   },
   {
    "name": "Z71",
    "msrp": 70200
   },
   {
    "name": "Premier",
    "msrp": 74700
   },
   {
    "name": "High Country",
    "msrp": 79200
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "5.3L V8",
    "hp": 355,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L V8",
    "hp": 420,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "3.0L turbodiesel I6",
    "hp": 305,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.7,
   "widthIn": 81.0,
   "heightIn": 75.8,
   "wheelbaseIn": 120.9,
   "curbWeightLb": 5635,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.5,
   "cargoMaxCuFt": 122.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "Adaptive Air Ride suspension with Magnetic Ride Control",
   "Panoramic sunroof",
   "Rear-seat entertainment screens",
   "Power-sliding center console",
   "Bose premium audio"
  ],
  "towingLb": 8400,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Chevrolet%20Tahoe%20Facelift.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Refreshed for 2025. Base and top trims verified; mid-trim prices close estimates. Prices exclude $2,795 destination."
 },
 {
  "id": "chevrolet-trailblazer",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Trailblazer",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 23000,
  "priceTo": 27600,
  "trims": [
   {
    "name": "LS",
    "msrp": 23000
   },
   {
    "name": "LT",
    "msrp": 24200
   },
   {
    "name": "ACTIV",
    "msrp": 27600
   },
   {
    "name": "RS",
    "msrp": 27600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.2L turbo I3",
    "hp": 137,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "1.3L turbo I3",
    "hp": 155,
    "transmission": "CVT (FWD) / 9-speed automatic (AWD)",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 173.7,
   "widthIn": 71.2,
   "heightIn": 65.7,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3062,
   "groundClearanceIn": 7.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.3,
   "cargoMaxCuFt": 54.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic sunroof",
   "Adaptive cruise control",
   "Bose premium audio",
   "Wireless charging",
   "Heated front seats and steering wheel",
   "Roof rails with ACTIV/RS styling packages"
  ],
  "towingLb": 1000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/24%20Chevrolet%20Trailblazer%20LT.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Prices exclude ~$1,395 destination; trim MSRPs derived from advertised prices and may vary slightly. AWD requires 1.3L engine."
 },
 {
  "id": "chevrolet-traverse",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Traverse",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 40800,
  "priceTo": 57400,
  "trims": [
   {
    "name": "LS",
    "msrp": 40800
   },
   {
    "name": "LT",
    "msrp": 43900
   },
   {
    "name": "Z71",
    "msrp": 51900
   },
   {
    "name": "RS",
    "msrp": 57400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 328,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 204.5,
   "widthIn": 79.4,
   "heightIn": 70.7,
   "wheelbaseIn": 121.7,
   "curbWeightLb": 4672,
   "groundClearanceIn": 7.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.9,
   "cargoMaxCuFt": 97.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "17.7-inch touchscreen (standard)",
   "Z71 off-road package",
   "Panoramic sunroof",
   "Bose premium audio",
   "Heated/ventilated front seats and heated 2nd row"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Chevrolet%20Traverse%20front%20view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "All turbo-four now; no V6. Mid-trim prices approximate; RS AWD verified at $59,395 incl. destination. Prices exclude ~$1,995 destination."
 },
 {
  "id": "chevrolet-trax",
  "make": "Chevrolet",
  "manufacturer": "General Motors",
  "model": "Trax",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 22000,
  "priceTo": 25700,
  "trims": [
   {
    "name": "LS",
    "msrp": 22000
   },
   {
    "name": "1RS",
    "msrp": 23500
   },
   {
    "name": "LT",
    "msrp": 23500
   },
   {
    "name": "2RS",
    "msrp": 25700
   },
   {
    "name": "ACTIV",
    "msrp": 25700
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.2L turbo I3",
    "hp": 137,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 178.6,
   "widthIn": 71.8,
   "heightIn": 61.4,
   "wheelbaseIn": 106.0,
   "curbWeightLb": 3062,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.6,
   "cargoMaxCuFt": 54.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "11-inch touchscreen with wireless Apple CarPlay/Android Auto",
   "Sunroof (2RS/ACTIV)",
   "Adaptive cruise control",
   "Heated front seats and steering wheel",
   "Wireless phone charging",
   "Remote start"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Chevrolet%20Trax%20LS%2C%20front%20right%2C%2005-26-2024.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "FWD only; no AWD offered. Prices exclude $1,495 destination. One of the least expensive new vehicles in the US."
 },
 {
  "id": "chrysler-pacifica",
  "make": "Chrysler",
  "manufacturer": "Stellantis",
  "model": "Pacifica",
  "year": 2026,
  "bodyStyle": "minivan",
  "segment": "minivan",
  "category": "van",
  "priceFrom": 43645,
  "priceTo": 60465,
  "trims": [
   {
    "name": "Select",
    "msrp": 43645
   },
   {
    "name": "Limited",
    "msrp": 48955
   },
   {
    "name": "Hybrid Select",
    "msrp": 51765
   },
   {
    "name": "Pinnacle",
    "msrp": 54945
   },
   {
    "name": "Hybrid Pinnacle",
    "msrp": 60465
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 287,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "3.6L V6 plug-in hybrid",
    "hp": 260,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 82,
    "evRangeMi": 32
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 203.8,
   "widthIn": 79.6,
   "heightIn": 69.9,
   "wheelbaseIn": 121.6,
   "curbWeightLb": 4510,
   "groundClearanceIn": 5.1
  },
  "interior": {
   "passengerVolumeCuFt": 165.0,
   "cargoCuFt": 32.3,
   "cargoMaxCuFt": 140.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Stow 'n Go fold-flat second row (gas models)",
   "Rear-seat entertainment with streaming apps",
   "Panoramic sunroof",
   "Harman Kardon 19-speaker audio",
   "All-wheel drive (gas, +$2,995)",
   "Hands-free sliding doors and liftgate",
   "360-degree camera"
  ],
  "towingLb": 3600,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/9e/2020_Chrysler_Pacifica_Touring-L_in_Bright_White%2C_front_left.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Updated for 2026 with simplified Select/Limited/Pinnacle lineup and 100th Anniversary hybrid edition. Plug-in hybrid is FWD only and uses an inflator kit instead of a spare. Prices exclude $1,995 destination."
 },
 {
  "id": "chrysler-voyager",
  "make": "Chrysler",
  "manufacturer": "Stellantis",
  "model": "Voyager",
  "year": 2026,
  "bodyStyle": "minivan",
  "segment": "minivan",
  "category": "van",
  "priceFrom": 40895,
  "priceTo": 40895,
  "trims": [
   {
    "name": "LX",
    "msrp": 40895
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 287,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 203.8,
   "widthIn": 79.6,
   "heightIn": 69.9,
   "wheelbaseIn": 121.6,
   "curbWeightLb": 4423,
   "groundClearanceIn": 5.1
  },
  "interior": {
   "passengerVolumeCuFt": 165.0,
   "cargoCuFt": 32.3,
   "cargoMaxCuFt": 140.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Stow 'n Go fold-flat seating",
   "10.1-inch Uconnect 5 touchscreen",
   "Tri-zone automatic climate control",
   "Power sliding doors",
   "Full suite of standard driver assists",
   "17-inch wheels"
  ],
  "towingLb": 3600,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/2f/2020_Chrysler_Voyager_LXI_in_Velvet_Red_Pearlcoat%2C_front_right%2C_12-31-2021.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Value version of the Pacifica sold in a single LX trim with one powertrain; returned to retail sale in 2025. Price excludes $1,995 destination."
 },
 {
  "id": "dodge-charger-daytona",
  "make": "Dodge",
  "manufacturer": "Stellantis",
  "model": "Charger Daytona",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "electric muscle car",
  "category": "car",
  "priceFrom": 59995,
  "priceTo": 66990,
  "trims": [
   {
    "name": "Scat Pack (2-door)",
    "msrp": 59995
   },
   {
    "name": "Scat Pack (4-door)",
    "msrp": 61995
   },
   {
    "name": "Scat Pack Plus (2-door)",
    "msrp": 64990
   },
   {
    "name": "Scat Pack Plus (4-door)",
    "msrp": 66990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD, 100.5-kWh battery",
    "hp": 670,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 76,
    "evRangeMi": 241
   }
  ],
  "seats": [
   5
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 206.6,
   "widthIn": 79.8,
   "heightIn": 59.0,
   "wheelbaseIn": 121.0,
   "curbWeightLb": 5838,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.7,
   "cargoMaxCuFt": 37.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Track Package with adaptive dampers",
   "Alpine 18-speaker audio",
   "Fratzonic Chambered Exhaust sound",
   "PowerShot boost and drift/donut modes",
   "Glass roof",
   "Carbon and suede interior package",
   "16-inch digital cluster with head-up display"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/06/2024_Dodge_Charger_Daytona_RT%2C_front_4.14.25.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "All-electric Charger; base R/T dropped for 2026, leaving 670-hp Scat Pack as the entry point. Liftback 2-door coupe and 4-door sedan body styles (doors field shows coupe). Prices exclude destination."
 },
 {
  "id": "dodge-charger-sixpack",
  "make": "Dodge",
  "manufacturer": "Stellantis",
  "model": "Charger Sixpack",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "muscle car",
  "category": "car",
  "priceFrom": 49995,
  "priceTo": 61990,
  "trims": [
   {
    "name": "R/T (2-door)",
    "msrp": 49995
   },
   {
    "name": "Scat Pack (4-door)",
    "msrp": 56995
   },
   {
    "name": "Scat Pack Plus (4-door)",
    "msrp": 61990
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6 (Hurricane SO)",
    "hp": 420,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6 high-output (Hurricane HO)",
    "hp": 550,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 206.6,
   "widthIn": 79.8,
   "heightIn": 59.0,
   "wheelbaseIn": 121.0,
   "curbWeightLb": 4800,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.7,
   "cargoMaxCuFt": 37.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Track Package with Brembo brakes",
   "Alpine 18-speaker audio",
   "Head-up display",
   "360-degree camera",
   "Ventilated front seats",
   "Rear-wheel-drive drift mode",
   "Glass roof"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/68/Dodge_Charger_Daytona_%282024%29_MYLE_Festival_2025_DSC_9392.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "New-for-2026 gas version of the new Charger with the twin-turbo Hurricane inline-six (420 hp standard output, 550 hp high output in Scat Pack); standard AWD with drift-capable RWD mode. 2-door and 4-door bodies. EPA figures not yet published. Prices exclude destination."
 },
 {
  "id": "dodge-durango",
  "make": "Dodge",
  "manufacturer": "Stellantis",
  "model": "Durango",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row performance SUV",
  "category": "suv",
  "priceFrom": 38995,
  "priceTo": 79995,
  "trims": [
   {
    "name": "GT",
    "msrp": 38995
   },
   {
    "name": "GT HEMI",
    "msrp": 42695
   },
   {
    "name": "R/T 392",
    "msrp": 50390
   },
   {
    "name": "SRT Hellcat",
    "msrp": 79995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 295,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.7L HEMI V8",
    "hp": 360,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.4L HEMI V8 (392)",
    "hp": 475,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L supercharged HEMI V8",
    "hp": 710,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 13,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 200.8,
   "widthIn": 75.8,
   "heightIn": 70.9,
   "wheelbaseIn": 119.8,
   "curbWeightLb": 4750,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.2,
   "cargoMaxCuFt": 85.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Tow N Go package",
   "Second-row captain's chairs",
   "Harman Kardon 19-speaker audio",
   "Brembo performance brakes",
   "Rear-seat entertainment",
   "Blacktop appearance package",
   "Hellcat Jailbreak customization"
  ],
  "towingLb": 8700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/70/2021_Dodge_Durango_GT_%28facelift%29%2C_front_6.21.22.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Long-running current generation continues for 2026 with a V8-heavy lineup: R/T now uses the 475-hp 392, and the 710-hp SRT Hellcat returns. Seats 6 or 7 depending on second-row configuration."
 },
 {
  "id": "dodge-hornet",
  "make": "Dodge",
  "manufacturer": "Stellantis",
  "model": "Hornet",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 31590,
  "priceTo": 46590,
  "trims": [
   {
    "name": "GT",
    "msrp": 31590
   },
   {
    "name": "GT Plus",
    "msrp": 36590
   },
   {
    "name": "R/T (PHEV)",
    "msrp": 41590
   },
   {
    "name": "R/T Plus (PHEV)",
    "msrp": 46590
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 268,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "1.3L turbo I4 + rear electric motor",
    "hp": 288,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 77,
    "evRangeMi": 32
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 178.0,
   "widthIn": 72.0,
   "heightIn": 63.8,
   "wheelbaseIn": 103.8,
   "curbWeightLb": 3715,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.0,
   "cargoMaxCuFt": 54.7,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Track Pack with dual-stage suspension",
   "Harman Kardon audio",
   "PowerShot boost (R/T)",
   "Heated seats and steering wheel",
   "10.25-inch Uconnect 5 touchscreen",
   "Active driving assist package"
  ],
  "towingLb": 2000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/91/2023_Dodge_Hornet_GT_in_Blu_Bayou%2C_Front_Left%2C_05-14-2023.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "low",
  "notes": "Discontinued: tariffs halted Italian production in Aug 2025 and Dodge confirmed the end of the Hornet in Jan 2026; sold from remaining (mostly 2025) inventory, often heavily discounted. Prices shown are 2025 MSRPs; a distinct 2026 model year may not reach all dealers."
 },
 {
  "id": "ferrari-12cilindri",
  "make": "Ferrari",
  "manufacturer": "Ferrari N.V.",
  "model": "12Cilindri",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "V12 grand tourer",
  "category": "car",
  "priceFrom": 423155,
  "priceTo": 466755,
  "trims": [
   {
    "name": "12Cilindri",
    "msrp": 423155
   },
   {
    "name": "12Cilindri Spider",
    "msrp": 466755
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.5L naturally aspirated V12",
    "hp": 819,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 14,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 186.6,
   "widthIn": 79.0,
   "heightIn": 50.9,
   "wheelbaseIn": 106.3,
   "curbWeightLb": 3655,
   "groundClearanceIn": 4.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 9.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Carbon-fiber wheels",
   "Front axle lifter",
   "Panoramic glass roof (coupe)",
   "Burmester premium audio",
   "ADAS driver assistance pack",
   "Full-electric comfort seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Prices are US launch (2025) MSRPs; 2026 carryover pricing may rise slightly. Successor to the 812 Superfast."
 },
 {
  "id": "ferrari-296-speciale",
  "make": "Ferrari",
  "manufacturer": "Ferrari N.V.",
  "model": "296 Speciale",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "exotic sports car",
  "category": "car",
  "priceFrom": 460000,
  "priceTo": 522500,
  "trims": [
   {
    "name": "296 Speciale",
    "msrp": 460000
   },
   {
    "name": "296 Speciale A",
    "msrp": 522500
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "3.0L twin-turbo V6 plug-in hybrid",
    "hp": 868,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 179.8,
   "widthIn": 77.1,
   "heightIn": 46.6,
   "wheelbaseIn": 102.4,
   "curbWeightLb": 3410,
   "groundClearanceIn": 4.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 7.4,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Carbon-fiber wheels",
   "Front axle lifter",
   "Carbon-fiber racing seats",
   "Exterior carbon-fiber packages",
   "Telemetry system",
   "ADAS driver assistance pack"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Replaces the 296 GTB/GTS for 2026. US MSRP not officially published; prices estimated from European pricing (~EUR 407k) and dealer reports (~$460k coupe). Speciale A is the retractable-hardtop version."
 },
 {
  "id": "ferrari-849-testarossa",
  "make": "Ferrari",
  "manufacturer": "Ferrari N.V.",
  "model": "849 Testarossa",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "hybrid hypercar",
  "category": "car",
  "priceFrom": 560000,
  "priceTo": 610000,
  "trims": [
   {
    "name": "849 Testarossa",
    "msrp": 560000
   },
   {
    "name": "849 Testarossa Spider",
    "msrp": 610000
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.0L twin-turbo V8 + 3 electric motors",
    "hp": 1036,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 185.7,
   "widthIn": 78.5,
   "heightIn": 47.0,
   "wheelbaseIn": 104.3,
   "curbWeightLb": 3650,
   "groundClearanceIn": 4.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 2.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Assetto Fiorano package",
   "Carbon-fiber wheels",
   "Front axle lifter",
   "Racing seats",
   "Carbon-fiber exterior trim"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "New for 2026; replaces the SF90 Stradale. US pricing not officially confirmed; estimate based on EUR 460,000 European base price and outgoing SF90 (~$550k). Spider follows the coupe."
 },
 {
  "id": "ferrari-amalfi",
  "make": "Ferrari",
  "manufacturer": "Ferrari N.V.",
  "model": "Amalfi",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "grand touring coupe",
  "category": "car",
  "priceFrom": 275000,
  "priceTo": 275000,
  "trims": [
   {
    "name": "Amalfi",
    "msrp": 275000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.9L twin-turbo V8",
    "hp": 631,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 183.3,
   "widthIn": 77.7,
   "heightIn": 51.2,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3560,
   "groundClearanceIn": 4.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 9.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Brembo carbon-ceramic brakes",
   "Front axle lifter",
   "Comfort seat package with massage",
   "Burmester premium audio",
   "ADAS driver assistance pack"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "New for 2026; replaces the Roma. Notably returns to physical steering-wheel buttons vs the Roma's haptics. US MSRP approximate (~$275k reported); official US pricing pending. 2+2 seating with small rear seats."
 },
 {
  "id": "ferrari-f80",
  "make": "Ferrari",
  "manufacturer": "Ferrari N.V.",
  "model": "F80",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "limited-production hypercar",
  "category": "car",
  "priceFrom": 3100000,
  "priceTo": 3100000,
  "trims": [
   {
    "name": "F80",
    "msrp": 3100000
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "3.0L twin-turbo V6 + 3 electric motors",
    "hp": 1183,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 188.5,
   "widthIn": 81.5,
   "heightIn": 44.9,
   "wheelbaseIn": 104.3,
   "curbWeightLb": 3362,
   "groundClearanceIn": 4.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Butterfly doors (standard)",
   "Active aerodynamics (standard)",
   "Carbon-fiber wheels",
   "Racing livery options"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Limited to 799 units, all allocated (sold out); deliveries run through 2027. Price ~EUR 3.1M / ~$3.1M before options. Successor to LaFerrari. 1+1 offset seating."
 },
 {
  "id": "ferrari-purosangue",
  "make": "Ferrari",
  "manufacturer": "Ferrari N.V.",
  "model": "Purosangue",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "exotic performance SUV",
  "category": "suv",
  "priceFrom": 430000,
  "priceTo": 430000,
  "trims": [
   {
    "name": "Purosangue",
    "msrp": 430000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.5L naturally aspirated V12",
    "hp": 715,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 12,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.8,
   "widthIn": 79.8,
   "heightIn": 62.6,
   "wheelbaseIn": 118.8,
   "curbWeightLb": 4482,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 16.7,
   "cargoMaxCuFt": 34.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Rear-hinged back doors (standard)",
   "Burmester 3D audio",
   "Panoramic glass roof",
   "Front axle lifter",
   "22-way massage seats",
   "Carbon-fiber exterior trim"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Four individual seats only (no 5-seat option). 2026 base price approximate; launched at ~$398k and has risen with annual increases. Long waitlist."
 },
 {
  "id": "fiat-500e",
  "make": "Fiat",
  "manufacturer": "Stellantis",
  "model": "500e",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "city EV",
  "category": "car",
  "priceFrom": 35700,
  "priceTo": 37700,
  "trims": [
   {
    "name": "Pop",
    "msrp": 35700
   },
   {
    "name": "Icona",
    "msrp": 37700
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD, 42-kWh battery",
    "hp": 117,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 116,
    "evRangeMi": 149
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 143.0,
   "widthIn": 66.3,
   "heightIn": 59.8,
   "wheelbaseIn": 91.4,
   "curbWeightLb": 2952,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 7.5,
   "cargoMaxCuFt": 14.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "JBL premium audio",
   "Fixed glass roof",
   "Wireless Apple CarPlay/Android Auto",
   "10.25-inch touchscreen",
   "Level 2 home charger promotions",
   "Advanced driver assistance package"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Fiat_500e_Cabrio_%282024%29_%2855075554992%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Fiat's only US model for 2026; tariffs pushed base price up several thousand dollars from the 2025 car's $32,500. 149-mile EPA range, DC fast charge to 80% in about 35 minutes; very slow seller, heavy discounts common. Image shows the closely related Cabrio version."
 },
 {
  "id": "ford-bronco",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Bronco",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize off-road SUV",
  "category": "suv",
  "priceFrom": 40495,
  "priceTo": 79995,
  "trims": [
   {
    "name": "Base",
    "msrp": 40495
   },
   {
    "name": "Big Bend",
    "msrp": 40995
   },
   {
    "name": "Outer Banks",
    "msrp": 48090
   },
   {
    "name": "Badlands",
    "msrp": 48890
   },
   {
    "name": "Heritage Edition",
    "msrp": 51625
   },
   {
    "name": "Stroppe Edition",
    "msrp": 69995
   },
   {
    "name": "Raptor",
    "msrp": 79995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L turbo I4 EcoBoost",
    "hp": 300,
    "transmission": "7-speed manual or 10-speed automatic",
    "manualAvailable": true,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.7L twin-turbo V6 EcoBoost",
    "hp": 330,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 EcoBoost (Raptor)",
    "hp": 418,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 189.4,
   "widthIn": 75.9,
   "heightIn": 73.0,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4499,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 35.6,
   "cargoMaxCuFt": 77.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Sasquatch Package (35-inch tires, lockers)",
   "Removable doors and roof (soft or hard top)",
   "Lux Package (B&O audio, adaptive cruise)",
   "Trail Turn Assist / Trail One-Pedal Drive",
   "360-degree camera with off-road view",
   "Marine-grade washable interior",
   "Bead-lock capable wheels"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/f/fa/2021_Ford_Bronco_Big_Bend%2C_Front_Right%2C_07-11-2021.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "2-door (seats 4) and 4-door (seats 5) body styles; dims/cargo shown are 4-door. Rear-mounted full-size spare. Ground clearance up to 11.5+ in with Sasquatch/Raptor."
 },
 {
  "id": "ford-bronco-sport",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Bronco Sport",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 29850,
  "priceTo": 38270,
  "trims": [
   {
    "name": "Big Bend",
    "msrp": 29850
   },
   {
    "name": "Heritage",
    "msrp": 32150
   },
   {
    "name": "Outer Banks",
    "msrp": 34950
   },
   {
    "name": "Badlands",
    "msrp": 38270
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I3 EcoBoost",
    "hp": 180,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 EcoBoost (Badlands)",
    "hp": 250,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 173.7,
   "widthIn": 74.3,
   "heightIn": 70.2,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3467,
   "groundClearanceIn": 7.8
  },
  "interior": {
   "passengerVolumeCuFt": 105.7,
   "cargoCuFt": 32.5,
   "cargoMaxCuFt": 65.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Sasquatch Package (Badlands: off-road tires, Bilstein dampers)",
   "13.2-inch SYNC 4 touchscreen (standard)",
   "360-degree camera",
   "B&O audio",
   "Moonroof",
   "Heated front seats and steering wheel",
   "Class II Trailer Tow Package"
  ],
  "towingLb": 2700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/29/Ford_Bronco_Sport_Badlands_1X7A0384.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Trim prices derived from advertised prices that included the $1,995 destination fee; treat as approximate. Standard AWD on all trims. Badlands adds 2.0L engine, 8.8-in clearance and 2,700-lb towing (others 2,200 lb)."
 },
 {
  "id": "ford-e-transit",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "E-Transit",
  "year": 2026,
  "bodyStyle": "van",
  "segment": "full-size electric van",
  "category": "van",
  "priceFrom": 53260,
  "priceTo": null,
  "trims": [
   {
    "name": "Cargo Van",
    "msrp": 53260
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD, 89 kWh usable battery",
    "hp": 266,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 159
   }
  ],
  "seats": [
   2
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 219.9,
   "widthIn": 81.3,
   "heightIn": 83.2,
   "wheelbaseIn": 130.0,
   "curbWeightLb": 6500,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 246.7,
   "cargoMaxCuFt": 487.3,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Pro Power Onboard (2.4 kW exportable power)",
   "Three roof heights and three lengths",
   "11.5 kW AC / up to 176 kW DC fast charging",
   "Ford Pro telematics and charging solutions",
   "Dual sliding doors",
   "12-inch SYNC 4 touchscreen",
   "Scheduled pre-conditioning"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/2e/Ford_E-Transit_1X7A1522.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Commercial EV van; cargo van only (plus chassis/cutaway). Range up to 159 mi (low-roof); high-roof and heavier configs less. No EPA MPGe published (heavy-duty class). Price varies by length/roof/GVWR configuration."
 },
 {
  "id": "ford-escape",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Escape",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 30350,
  "priceTo": 37210,
  "trims": [
   {
    "name": "Active",
    "msrp": 30350
   },
   {
    "name": "ST-Line",
    "msrp": 31195
   },
   {
    "name": "Platinum",
    "msrp": 36215
   },
   {
    "name": "ST-Line Elite",
    "msrp": 37210
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I3 EcoBoost",
    "hp": 180,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 EcoBoost",
    "hp": 250,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 192,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 39,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.5L I4 plug-in hybrid",
    "hp": 210,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 101,
    "evRangeMi": 37
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 180.1,
   "widthIn": 74.1,
   "heightIn": 66.1,
   "wheelbaseIn": 106.7,
   "curbWeightLb": 3298,
   "groundClearanceIn": 7.8
  },
  "interior": {
   "passengerVolumeCuFt": 104.0,
   "cargoCuFt": 37.5,
   "cargoMaxCuFt": 65.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "13.2-inch SYNC 4 touchscreen",
   "Panoramic Vista Roof",
   "Head-up display",
   "B&O 10-speaker audio",
   "Heated seats and steering wheel",
   "360-degree camera",
   "Class II Tow Package"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/86/Ford_Escape_%28fourth_generation%29_1X7A6227.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Final model year: production ended December 2025 (Louisville plant converting to EVs); the 2026 Escape is not sold in CA, NY, MA, VT, OR or WA. PHEV trim continues (~$38-40k) but 2026 pricing is unclear. Sources vary on whether quoted trim prices include destination; treat as approximate. Hybrid cargo slightly less (34.4 cu ft). PHEV has no spare (inflator kit)."
 },
 {
  "id": "ford-expedition",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Expedition",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size 3-row SUV",
  "category": "suv",
  "priceFrom": 62400,
  "priceTo": 84060,
  "trims": [
   {
    "name": "Active",
    "msrp": 62400
   },
   {
    "name": "Platinum",
    "msrp": 73950
   },
   {
    "name": "Tremor",
    "msrp": 81400
   },
   {
    "name": "King Ranch",
    "msrp": 84060
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6 EcoBoost",
    "hp": 400,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6 EcoBoost High Output",
    "hp": 440,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.0,
   "widthIn": 79.9,
   "heightIn": 76.6,
   "wheelbaseIn": 122.5,
   "curbWeightLb": 5623,
   "groundClearanceIn": 9.8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.0,
   "cargoMaxCuFt": 108.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "24-inch panoramic digital display",
   "BlueCruise hands-free highway driving",
   "Ford Split Gate tailgate with tailgate seating",
   "Heavy-Duty Trailer Tow Package (9,600 lb)",
   "B&O Unleashed 22-speaker audio (King Ranch)",
   "Tremor off-road package with 33-inch tires",
   "Second-row power-folding captain's chairs"
  ],
  "towingLb": 9600,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Ford_Expedition_%28fourth_generation%29_Max_DSC_2924.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Redesigned generation launched for 2025. Extended-length Expedition MAX versions run about $3,000-$3,300 more (King Ranch MAX ~$87,360). Cargo figures approximate for standard length. A fleet-oriented XL trim (~$57,400) appears in some listings."
 },
 {
  "id": "ford-explorer",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Explorer",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 38465,
  "priceTo": 54870,
  "trims": [
   {
    "name": "Active",
    "msrp": 38465
   },
   {
    "name": "ST-Line",
    "msrp": 45120
   },
   {
    "name": "Tremor",
    "msrp": 48430
   },
   {
    "name": "Platinum",
    "msrp": 50930
   },
   {
    "name": "ST",
    "msrp": 54870
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L turbo I4 EcoBoost",
    "hp": 300,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 EcoBoost (ST/Platinum/Tremor)",
    "hp": 400,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.7,
   "widthIn": 78.9,
   "heightIn": 69.9,
   "wheelbaseIn": 119.1,
   "curbWeightLb": 4345,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": 152.7,
   "cargoCuFt": 18.2,
   "cargoMaxCuFt": 87.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "BlueCruise hands-free highway driving",
   "Twin-panel moonroof",
   "Massaging front seats (Platinum)",
   "B&O 14-speaker audio",
   "360-degree camera",
   "Class III/IV Trailer Tow Package",
   "Tremor off-road package (2026: replaces Timberline)"
  ],
  "towingLb": 5600,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/6f/2025_Ford_Explorer_ST-Line%2C_front_8.21.25.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Trim prices are destination-adjusted approximations from sources quoting delivered prices. New Tremor trim for 2026. Most climate functions handled through the 13.2-inch touchscreen; volume knob retained."
 },
 {
  "id": "ford-f-150",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "F-150",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size pickup",
  "category": "truck",
  "priceFrom": 39330,
  "priceTo": 110930,
  "trims": [
   {
    "name": "XL",
    "msrp": 39330
   },
   {
    "name": "STX",
    "msrp": 41855
   },
   {
    "name": "XLT",
    "msrp": 44695
   },
   {
    "name": "Lariat",
    "msrp": 59560
   },
   {
    "name": "Tremor",
    "msrp": 64915
   },
   {
    "name": "King Ranch",
    "msrp": 65825
   },
   {
    "name": "Platinum",
    "msrp": 68800
   },
   {
    "name": "Raptor",
    "msrp": 79005
   },
   {
    "name": "Raptor R",
    "msrp": 110930
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.7L twin-turbo V6 EcoBoost",
    "hp": 325,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.0L V8",
    "hp": 400,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6 EcoBoost",
    "hp": 400,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.5L V6 PowerBoost hybrid",
    "hp": 430,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.2L supercharged V8 (Raptor R)",
    "hp": 720,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 12,
    "evRangeMi": null
   }
  ],
  "seats": [
   3,
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 231.7,
   "widthIn": 79.9,
   "heightIn": 77.2,
   "wheelbaseIn": 145.4,
   "curbWeightLb": 4705,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 52.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Pro Power Onboard generator (2.0-7.2 kW)",
   "BlueCruise hands-free highway driving",
   "Max Trailer Tow Package (13,500 lb)",
   "Twin-panel moonroof",
   "B&O Unleashed audio",
   "Pro Trailer Hitch Assist",
   "Power tailgate with tailgate work surface"
  ],
  "towingLb": 13500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Ford_F-150_%28fourteenth_generation%29_Rutesheimer_Autoschau_2025_DSC_9231.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Dims are SuperCrew 5.5-ft bed; regular and SuperCab configurations also offered. cargoCuFt is the 5.5-ft bed volume. Destination fee is $2,595."
 },
 {
  "id": "ford-f-150-lightning",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "F-150 Lightning",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size electric pickup",
  "category": "truck",
  "priceFrom": 54780,
  "priceTo": 84995,
  "trims": [
   {
    "name": "Pro",
    "msrp": 54780
   },
   {
    "name": "STX",
    "msrp": 63345
   },
   {
    "name": "Flash",
    "msrp": 65995
   },
   {
    "name": "Lariat",
    "msrp": 74995
   },
   {
    "name": "Platinum",
    "msrp": 84995
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD, extended-range battery",
    "hp": 580,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 70,
    "evRangeMi": 320
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 232.7,
   "widthIn": 80.0,
   "heightIn": 78.3,
   "wheelbaseIn": 145.5,
   "curbWeightLb": 6500,
   "groundClearanceIn": 8.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Pro Power Onboard (up to 9.6 kW)",
   "BlueCruise hands-free highway driving",
   "Max Trailer Tow Package",
   "15.5-inch portrait touchscreen (Lariat/Platinum)",
   "Ford Charge Station Pro home charger",
   "B&O audio",
   "Phone As A Key"
  ],
  "towingLb": 10000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/65/Ford_F-150_Lightning_IAA_2023_1X7A0596.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Discontinued: Ford canceled Lightning production in December 2025 shortly after opening 2026 order banks, so 2026 availability is extremely limited/uncertain. All 2026 trims use the extended-range battery (~320 mi on Pro/STX/Flash, ~300 mi Platinum). cargoCuFt is the 14.1 cu-ft front trunk; 5.5-ft bed also standard. Pro/STX/Flash have physical climate controls; Lariat/Platinum move most controls to the portrait screen."
 },
 {
  "id": "ford-f-series-super-duty",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "F-Series Super Duty",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "heavy-duty full-size pickup",
  "category": "truck",
  "priceFrom": 48875,
  "priceTo": 78665,
  "trims": [
   {
    "name": "F-250 XL",
    "msrp": 48875
   },
   {
    "name": "F-250 Lariat",
    "msrp": 62735
   },
   {
    "name": "F-250 King Ranch",
    "msrp": 77775
   },
   {
    "name": "F-250 Platinum",
    "msrp": 78665
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.8L V8",
    "hp": 405,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "7.3L V8",
    "hp": 430,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "6.7L Power Stroke turbo-diesel V8",
    "hp": 475,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "6.7L High-Output Power Stroke turbo-diesel V8",
    "hp": 500,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   3,
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 250.0,
   "widthIn": 80.0,
   "heightIn": 81.3,
   "wheelbaseIn": 159.8,
   "curbWeightLb": 6800,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Pro Power Onboard (2.0 kW)",
   "Fifth-wheel/gooseneck prep package",
   "Pro Trailer Hitch Assist",
   "Tremor Off-Road Package",
   "Adaptive steering",
   "B&O audio",
   "Onboard scales with Smart Hitch"
  ],
  "towingLb": 38000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/0e/Ford_F-250_Super_Duty_%28P558%29_1X7A7058.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "One record covering F-250/F-350 (F-450 pickup and chassis cabs also exist). XLT and Limited trims also offered; Limited tops roughly $100k. Max tow shown is F-350 dually gooseneck; conventional towing lower. No EPA ratings (heavy-duty class). Dims are crew cab 6.75-ft bed."
 },
 {
  "id": "ford-maverick",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Maverick",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "compact pickup",
  "category": "truck",
  "priceFrom": 27145,
  "priceTo": 38090,
  "trims": [
   {
    "name": "XL",
    "msrp": 27145
   },
   {
    "name": "XLT",
    "msrp": 30645
   },
   {
    "name": "Lobo AWD",
    "msrp": 35930
   },
   {
    "name": "Lariat AWD",
    "msrp": 38090
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 191,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 38,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 EcoBoost",
    "hp": 250,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.7,
   "widthIn": 72.6,
   "heightIn": 68.7,
   "wheelbaseIn": 121.1,
   "curbWeightLb": 3674,
   "groundClearanceIn": 8.6
  },
  "interior": {
   "passengerVolumeCuFt": 100.3,
   "cargoCuFt": 33.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "4K Tow Package (4,000-lb towing)",
   "FX4 Off-Road Package",
   "Tremor off-road trim/package",
   "Lobo street-truck setup with lowered suspension",
   "Bed 400W power outlets",
   "Moonroof",
   "B&O 8-speaker audio"
  ],
  "towingLb": 4000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/5/53/2022_Ford_Maverick_XLT_AWD_with_FX4_Off-Road_Package.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "cargoCuFt is the 4.5-ft bed volume. Hybrid and EcoBoost both offered on XL/XLT/Lariat; Lobo and Tremor are EcoBoost-only."
 },
 {
  "id": "ford-mustang",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Mustang",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 32640,
  "priceTo": 69075,
  "trims": [
   {
    "name": "EcoBoost",
    "msrp": 32640
   },
   {
    "name": "GT",
    "msrp": 46560
   },
   {
    "name": "GT Premium",
    "msrp": 51080
   },
   {
    "name": "Dark Horse",
    "msrp": 64080
   },
   {
    "name": "Dark Horse Premium",
    "msrp": 69075
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L turbo I4 EcoBoost",
    "hp": 315,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.0L V8 (GT)",
    "hp": 486,
    "transmission": "6-speed manual or 10-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.0L V8 (Dark Horse)",
    "hp": 500,
    "transmission": "6-speed manual or 10-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 189.4,
   "widthIn": 75.4,
   "heightIn": 55.0,
   "wheelbaseIn": 107.0,
   "curbWeightLb": 3588,
   "groundClearanceIn": 5.2
  },
  "interior": {
   "passengerVolumeCuFt": 82.8,
   "cargoCuFt": 13.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Performance Package (Brembo brakes, Torsen diff)",
   "MagneRide adaptive dampers",
   "Recaro sport seats",
   "Active-valve performance exhaust",
   "B&O 12-speaker audio",
   "Convertible soft top (EcoBoost and GT)",
   "Digital drift/electronic drift brake"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/72/2024_Ford_Mustang_GT%2C_Kingsville%2C_Ontario%2C_2025-06-29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Convertible available on EcoBoost and GT trims. Limited-run 815-hp Mustang GTD (~$325k) sold separately by application. Climate controls live in the 13.2-inch touchscreen; a physical volume knob remains."
 },
 {
  "id": "ford-mustang-mach-e",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Mustang Mach-E",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric SUV",
  "category": "suv",
  "priceFrom": 39840,
  "priceTo": 59530,
  "trims": [
   {
    "name": "Select",
    "msrp": 39840
   },
   {
    "name": "GT",
    "msrp": 55440
   },
   {
    "name": "Rally",
    "msrp": 59530
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 264,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 103,
    "evRangeMi": 260
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (GT/Rally)",
    "hp": 480,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 90,
    "evRangeMi": 280
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.6,
   "widthIn": 74.1,
   "heightIn": 64.0,
   "wheelbaseIn": 117.5,
   "curbWeightLb": 4600,
   "groundClearanceIn": 5.7
  },
  "interior": {
   "passengerVolumeCuFt": 101.1,
   "cargoCuFt": 29.7,
   "cargoMaxCuFt": 59.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "BlueCruise hands-free highway driving",
   "Panoramic fixed-glass roof",
   "B&O 10-speaker audio",
   "360-degree camera",
   "Heated front seats and steering wheel",
   "Rally package with off-road suspension",
   "Ford Performance front seats (GT)"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/c/c0/Ford_Mustang_Mach-E_Rally_Auto_Zuerich_2023_1X7A1182.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Premium trim slots between Select and GT (roughly $43k-$50k depending on battery). Range varies by battery/motor: roughly 250-320 miles across the lineup. 4.7 cu-ft front trunk in addition to rear cargo."
 },
 {
  "id": "ford-ranger",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Ranger",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "midsize pickup",
  "category": "truck",
  "priceFrom": 33350,
  "priceTo": 57070,
  "trims": [
   {
    "name": "XL",
    "msrp": 33350
   },
   {
    "name": "XLT",
    "msrp": 36075
   },
   {
    "name": "Lariat",
    "msrp": 43755
   },
   {
    "name": "Raptor",
    "msrp": 57070
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L turbo I4 EcoBoost",
    "hp": 270,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.7L twin-turbo V6 EcoBoost",
    "hp": 315,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 EcoBoost (Raptor)",
    "hp": 405,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.6,
   "widthIn": 75.5,
   "heightIn": 74.2,
   "wheelbaseIn": 128.7,
   "curbWeightLb": 4262,
   "groundClearanceIn": 9.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "FX4 Off-Road Package",
   "12-inch portrait touchscreen",
   "360-degree camera",
   "B&O audio",
   "Spray-in bedliner",
   "Pro Trailer Backup Assist",
   "Fox Live Valve shocks (Raptor)"
  ],
  "towingLb": 7500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/82/Ford_Ranger_Raptor_%28P703%29_DSC_7063.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "SuperCrew only in the US (5-ft bed). 4WD adds ~$3,500 on XL/XLT/Lariat; standard on Raptor. Interior is mostly dark tones; lighter gray accents on some trims."
 },
 {
  "id": "ford-transit",
  "make": "Ford",
  "manufacturer": "Ford Motor Company",
  "model": "Transit",
  "year": 2026,
  "bodyStyle": "van",
  "segment": "full-size van",
  "category": "van",
  "priceFrom": 48400,
  "priceTo": null,
  "trims": [
   {
    "name": "Cargo Van XL",
    "msrp": 48400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 275,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6 EcoBoost",
    "hp": 310,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2,
   8,
   12,
   15
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 219.9,
   "widthIn": 81.3,
   "heightIn": 82.2,
   "wheelbaseIn": 130.0,
   "curbWeightLb": 5110,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 246.7,
   "cargoMaxCuFt": 487.3,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Three roof heights and three lengths",
   "All-wheel drive",
   "Pro Power Onboard (2.0 kW)",
   "360-degree camera",
   "Dual sliding side doors",
   "Crew Van and 8/10/12/15-passenger wagon configs",
   "Upfitter packages via Ford Pro"
  ],
  "towingLb": 7500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/1/12/2021_Ford_Transit_350.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Commercial van sold in cargo, crew and passenger (XL/XLT) forms; passenger wagons and high-roof/extended models cost more, so top price varies widely by configuration. Dims shown are regular-length low-roof; cargoCuFt is low-roof RWB cargo volume, cargoMaxCuFt is extended high-roof. No EPA ratings (over 8,500-lb GVWR)."
 },
 {
  "id": "gmc-acadia",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Acadia",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 43800,
  "priceTo": 63100,
  "trims": [
   {
    "name": "Elevation",
    "msrp": 43800
   },
   {
    "name": "AT4",
    "msrp": 52500
   },
   {
    "name": "Denali",
    "msrp": 55900
   },
   {
    "name": "Denali Ultimate",
    "msrp": 63100
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 328,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 203.9,
   "widthIn": 78.8,
   "heightIn": 71.3,
   "wheelbaseIn": 121.7,
   "curbWeightLb": 4731,
   "groundClearanceIn": 7.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.0,
   "cargoMaxCuFt": 97.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "15-inch portrait touchscreen",
   "AT4 off-road package",
   "Panoramic sunroof",
   "Bose premium audio",
   "Heated/ventilated front seats"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20GMC%20Acadia%20Denali%20front%20view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Grew substantially with 2024 redesign; mechanical twin of Chevy Traverse. Prices back-calculated excluding ~$1,995 destination."
 },
 {
  "id": "gmc-canyon",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Canyon",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "midsize pickup",
  "category": "truck",
  "priceFrom": 38900,
  "priceTo": 57300,
  "trims": [
   {
    "name": "Elevation",
    "msrp": 38900
   },
   {
    "name": "AT4",
    "msrp": 44300
   },
   {
    "name": "Denali",
    "msrp": 52300
   },
   {
    "name": "AT4X",
    "msrp": 57300
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.7L TurboMax turbo I4",
    "hp": 310,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 213.2,
   "widthIn": 74.9,
   "heightIn": 71.0,
   "wheelbaseIn": 131.4,
   "curbWeightLb": 4430,
   "groundClearanceIn": 9.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "AT4X with Multimatic DSSV dampers and front/rear lockers",
   "AT4X AEV Edition",
   "11.3-inch touchscreen (standard)",
   "Advanced trailering package",
   "Bose premium audio",
   "Underbody skid plates"
  ],
  "towingLb": 7700,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2023%20GMC%20Canyon.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Crew cab / short bed only; 310 hp TurboMax standard. Mid-trim prices approximate; base/top from published range. Prices believed to exclude $2,095 destination."
 },
 {
  "id": "gmc-hummer-ev-pickup",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Hummer EV Pickup",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "electric off-road super truck",
  "category": "truck",
  "priceFrom": 94910,
  "priceTo": 105705,
  "trims": [
   {
    "name": "2X",
    "msrp": 94910
   },
   {
    "name": "3X",
    "msrp": 105705
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (2X)",
    "hp": 570,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 311
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (3X)",
    "hp": 800,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 381
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 216.8,
   "widthIn": 86.7,
   "heightIn": 79.1,
   "wheelbaseIn": 135.6,
   "curbWeightLb": 9063,
   "groundClearanceIn": 10.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "CrabWalk four-wheel steering",
   "Extract Mode (raises ride height ~6 in)",
   "Removable Infinity Roof panels",
   "UltraVision underbody cameras",
   "Extreme Off-Road Package with 35-in tires",
   "Watts to Freedom (WTF) launch mode"
  ],
  "towingLb": 7500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/GMC%20Hummer%20EV%20Pickup%20Washington%20DC%20Metro%20Area%2C%20USA.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Prices back-calculated from advertised MSRPs minus ~$2,290 destination. Curb weight over 9,000 lb; 3X range varies by battery/tires."
 },
 {
  "id": "gmc-hummer-ev-suv",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Hummer EV SUV",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "electric off-road SUV",
  "category": "suv",
  "priceFrom": 94910,
  "priceTo": 103010,
  "trims": [
   {
    "name": "2X",
    "msrp": 94910
   },
   {
    "name": "3X",
    "msrp": 103010
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (2X)",
    "hp": 570,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 283
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (3X)",
    "hp": 830,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 314
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 206.7,
   "widthIn": 86.5,
   "heightIn": 77.8,
   "wheelbaseIn": 126.7,
   "curbWeightLb": 8600,
   "groundClearanceIn": 10.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 35.9,
   "cargoMaxCuFt": 81.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "CrabWalk four-wheel steering",
   "Extract Mode air suspension",
   "Removable Infinity Roof panels",
   "UltraVision underbody cameras",
   "Extreme Off-Road Package",
   "Rear-mounted full-size spare delete (tire carrier standard)"
  ],
  "towingLb": 7500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/GMC%20Hummer%20EV%20SUV%20001.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Shorter wheelbase than the pickup; exterior-mounted spare carrier is standard on SUV. Prices exclude ~$2,290 destination; ranges vary by configuration."
 },
 {
  "id": "gmc-sierra-1500",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Sierra 1500",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size pickup",
  "category": "truck",
  "priceFrom": 38700,
  "priceTo": 83100,
  "trims": [
   {
    "name": "Pro",
    "msrp": 38700
   },
   {
    "name": "SLE",
    "msrp": 49100
   },
   {
    "name": "Elevation",
    "msrp": 50900
   },
   {
    "name": "SLT",
    "msrp": 55300
   },
   {
    "name": "Denali",
    "msrp": 66300
   },
   {
    "name": "AT4",
    "msrp": 67200
   },
   {
    "name": "AT4X",
    "msrp": 78800
   },
   {
    "name": "Denali Ultimate",
    "msrp": 83100
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.7L TurboMax turbo I4",
    "hp": 310,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.3L V8",
    "hp": 355,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L V8",
    "hp": 420,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "3.0L Duramax turbodiesel I6",
    "hp": 305,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   3,
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 231.9,
   "widthIn": 81.2,
   "heightIn": 75.5,
   "wheelbaseIn": 147.4,
   "curbWeightLb": 4750,
   "groundClearanceIn": 8.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance (with trailering)",
   "MultiPro six-function tailgate",
   "AT4X with Multimatic DSSV dampers",
   "Denali Ultimate with full-grain leather and 16-camera views",
   "CarbonPro carbon-fiber bed (availability varies)",
   "Bose premium audio"
  ],
  "towingLb": 13200,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/23%20GMC%20Sierra%201500%20Denali.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Trim MSRPs from published 2026 pricing minus $2,195 destination; dims for crew cab short bed."
 },
 {
  "id": "gmc-sierra-ev",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Sierra EV",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size electric pickup",
  "category": "truck",
  "priceFrom": 62400,
  "priceTo": 99000,
  "trims": [
   {
    "name": "Elevation",
    "msrp": 62400
   },
   {
    "name": "AT4",
    "msrp": 79800
   },
   {
    "name": "Denali Max Range",
    "msrp": 99000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (up to 760 hp Denali Max Range)",
    "hp": 625,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 460
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 233.2,
   "widthIn": 83.8,
   "heightIn": 78.9,
   "wheelbaseIn": 145.7,
   "curbWeightLb": 8600,
   "groundClearanceIn": 8.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Up to 460 miles of range (Max Range battery)",
   "MultiPro Midgate cab pass-through",
   "Four-wheel steer with CrabWalk (Denali)",
   "Super Cruise",
   "Air Ride adaptive suspension (Denali)",
   "10.2 kW PowerBase offboard power"
  ],
  "towingLb": 12500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20GMC%20Sierra%20EV%20Denali%20front%20view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Elevation and AT4 trims new for 2026 lowered the entry price. Range 330-460 mi by battery. AT4 price approximate; excludes ~$2,195 destination."
 },
 {
  "id": "gmc-sierra-hd",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Sierra HD",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "heavy-duty pickup",
  "category": "truck",
  "priceFrom": 47000,
  "priceTo": 99300,
  "trims": [
   {
    "name": "Pro",
    "msrp": 47000
   },
   {
    "name": "SLE",
    "msrp": 55500
   },
   {
    "name": "SLT",
    "msrp": 64500
   },
   {
    "name": "AT4",
    "msrp": 71500
   },
   {
    "name": "Denali",
    "msrp": 76500
   },
   {
    "name": "AT4X",
    "msrp": 88500
   },
   {
    "name": "Denali Ultimate",
    "msrp": 99300
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.6L V8",
    "hp": 401,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "6.6L Duramax turbodiesel V8",
    "hp": 470,
    "transmission": "10-speed Allison automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   3,
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 250.0,
   "widthIn": 81.9,
   "heightIn": 79.8,
   "wheelbaseIn": 158.9,
   "curbWeightLb": 6950,
   "groundClearanceIn": 10.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Duramax diesel with 975 lb-ft of torque",
   "Gooseneck/5th-wheel prep package",
   "AT4X off-road package",
   "Denali Ultimate luxury package",
   "Transparent trailer camera view",
   "Power up/down tailgate"
  ],
  "towingLb": 36000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20GMC%20Sierra%202500HD%20Denali%20front%20view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Single record covering Sierra 2500HD and 3500HD. Max tow is 3500HD dually diesel gooseneck; 2500HD up to ~22,500 lb. Mid/top prices approximate, exclude destination."
 },
 {
  "id": "gmc-terrain",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Terrain",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 30700,
  "priceTo": 42400,
  "trims": [
   {
    "name": "Elevation",
    "msrp": 30700
   },
   {
    "name": "AT4",
    "msrp": 38400
   },
   {
    "name": "Denali",
    "msrp": 42400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 175,
    "transmission": "CVT (FWD) / 8-speed automatic (AWD)",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.4,
   "widthIn": 75.6,
   "heightIn": 65.9,
   "wheelbaseIn": 107.5,
   "curbWeightLb": 3628,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 29.8,
   "cargoMaxCuFt": 63.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "15-inch portrait touchscreen",
   "Panoramic sunroof",
   "Adaptive cruise control",
   "Heated and ventilated front seats",
   "AT4 all-terrain styling and tires",
   "Denali premium trim with Bose audio"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20GMC%20Terrain%20front%20view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "All-new generation launched 2025; shares platform with Chevy Equinox. AT4 price approximate. Prices exclude ~$1,495 destination."
 },
 {
  "id": "gmc-yukon",
  "make": "GMC",
  "manufacturer": "General Motors",
  "model": "Yukon",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size SUV",
  "category": "suv",
  "priceFrom": 69600,
  "priceTo": 103900,
  "trims": [
   {
    "name": "Elevation",
    "msrp": 69600
   },
   {
    "name": "AT4",
    "msrp": 76500
   },
   {
    "name": "Denali",
    "msrp": 82900
   },
   {
    "name": "AT4 Ultimate",
    "msrp": 96500
   },
   {
    "name": "Denali Ultimate",
    "msrp": 103900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "5.3L V8",
    "hp": 355,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.2L V8",
    "hp": 420,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "3.0L turbodiesel I6",
    "hp": 305,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.0,
   "widthIn": 81.0,
   "heightIn": 76.5,
   "wheelbaseIn": 120.9,
   "curbWeightLb": 5700,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.5,
   "cargoMaxCuFt": 122.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super Cruise hands-free driver assistance",
   "Air Ride adaptive suspension with Magnetic Ride Control",
   "16.8-inch touchscreen",
   "Power-sliding center console",
   "Rear-seat entertainment",
   "AT4 off-road package"
  ],
  "towingLb": 8400,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20GMC%20Yukon%20AT4%20Facelift.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Includes Yukon XL (adds ~$3,000; 227 in long, 41.5/144.7 cu ft cargo). Mid-trim prices approximate; excludes $2,795 destination."
 },
 {
  "id": "genesis-electrified-gv70",
  "make": "Genesis",
  "manufacturer": "Hyundai Motor Group",
  "model": "Electrified GV70",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury electric SUV",
  "category": "suv",
  "priceFrom": 64380,
  "priceTo": 72000,
  "trims": [
   {
    "name": "Advanced AWD",
    "msrp": 64380
   },
   {
    "name": "Prestige AWD",
    "msrp": 72000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (84 kWh)",
    "hp": 429,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 91,
    "evRangeMi": 298
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.6,
   "widthIn": 75.2,
   "heightIn": 64.2,
   "wheelbaseIn": 113.2,
   "curbWeightLb": 5060,
   "groundClearanceIn": 6.9
  },
  "interior": {
   "passengerVolumeCuFt": 103.0,
   "cargoCuFt": 28.7,
   "cargoMaxCuFt": 56.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Boost mode (483 hp temporary)",
   "27-inch OLED display",
   "NACS charging port",
   "Vehicle-to-Load (V2L)",
   "Bang & Olufsen audio",
   "Electronically controlled suspension"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Refreshed for 2026 with larger 84-kWh battery (~298 mi range, up from 236) and lower base price. Built in Alabama. Top-trim price and efficiency approximate."
 },
 {
  "id": "genesis-g70",
  "make": "Genesis",
  "manufacturer": "Hyundai Motor Group",
  "model": "G70",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sport sedan",
  "category": "car",
  "priceFrom": 43450,
  "priceTo": 54900,
  "trims": [
   {
    "name": "2.5T Standard",
    "msrp": 43450
   },
   {
    "name": "3.3T Sport Prestige",
    "msrp": 54900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 300,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.3L twin-turbo V6",
    "hp": 365,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.4,
   "widthIn": 72.8,
   "heightIn": 55.1,
   "wheelbaseIn": 111.6,
   "curbWeightLb": 3673,
   "groundClearanceIn": 5.1
  },
  "interior": {
   "passengerVolumeCuFt": 94.4,
   "cargoCuFt": 10.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Brembo brakes",
   "Electronically controlled suspension",
   "Limited-slip differential",
   "Nappa leather with quilting",
   "Lexicon premium audio",
   "Head-up display"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Carryover for 2026; likely nearing the end of its run. Top-trim price approximate; base price from compiled 2026 dealer/press data."
 },
 {
  "id": "genesis-g80",
  "make": "Genesis",
  "manufacturer": "Hyundai Motor Group",
  "model": "G80",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury sedan",
  "category": "car",
  "priceFrom": 58450,
  "priceTo": 74000,
  "trims": [
   {
    "name": "2.5T Advanced AWD",
    "msrp": 58450
   },
   {
    "name": "3.5T Prestige Black AWD",
    "msrp": 74000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 300,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.7,
   "widthIn": 75.8,
   "heightIn": 57.7,
   "wheelbaseIn": 118.5,
   "curbWeightLb": 4453,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 107.1,
   "cargoCuFt": 13.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "27-inch OLED display (refresh)",
   "Bang & Olufsen premium audio",
   "Nappa leather with heated/ventilated rear seats",
   "Remote Smart Parking Assist",
   "Highway Driving Assist 2",
   "Mood curator ambient experience"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Refreshed for 2026; AWD now standard across the line and the Electrified G80 EV was discontinued for the US after 2025. Top-trim (3.5T Prestige Black) price approximate."
 },
 {
  "id": "genesis-g90",
  "make": "Genesis",
  "manufacturer": "Hyundai Motor Group",
  "model": "G90",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury sedan",
  "category": "car",
  "priceFrom": 92700,
  "priceTo": 101500,
  "trims": [
   {
    "name": "3.5T AWD",
    "msrp": 92700
   },
   {
    "name": "3.5T E-Supercharger AWD",
    "msrp": 101500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6 with 48V e-supercharger",
    "hp": 409,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 207.7,
   "widthIn": 76.0,
   "heightIn": 58.7,
   "wheelbaseIn": 125.2,
   "curbWeightLb": 4938,
   "groundClearanceIn": 5.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Reclining VIP rear seats with massage",
   "Bang & Olufsen 3D audio",
   "Multi-chamber air suspension with road preview",
   "Power-closing doors",
   "Rear entertainment displays",
   "Mood curator with fragrance"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Flagship sedan; new 3.5T Prestige Black-style features trickle in for 2026. Base price verified (~$92,700); e-supercharged top-trim price approximate."
 },
 {
  "id": "genesis-gv60",
  "make": "Genesis",
  "manufacturer": "Hyundai Motor Group",
  "model": "GV60",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury electric SUV",
  "category": "suv",
  "priceFrom": 52525,
  "priceTo": 70500,
  "trims": [
   {
    "name": "Standard RWD",
    "msrp": 52525
   },
   {
    "name": "Performance AWD",
    "msrp": 70500
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (84 kWh)",
    "hp": 225,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 103,
    "evRangeMi": 306
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (84 kWh)",
    "hp": 429,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 90,
    "evRangeMi": 273
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 177.8,
   "widthIn": 74.4,
   "heightIn": 62.6,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4600,
   "groundClearanceIn": 6.3
  },
  "interior": {
   "passengerVolumeCuFt": 103.0,
   "cargoCuFt": 24.0,
   "cargoMaxCuFt": 54.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Face Connect facial-recognition entry",
   "Fingerprint start",
   "Crystal Sphere rotating shifter",
   "Boost mode (Performance)",
   "Bang & Olufsen audio",
   "Vehicle-to-Load (V2L)",
   "Digital key"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Updated for 2026 with larger 84-kWh battery (RWD range up to 306 mi) and refreshed design. Base price verified; Performance top-trim price and some efficiency figures approximate."
 },
 {
  "id": "genesis-gv70",
  "make": "Genesis",
  "manufacturer": "Hyundai Motor Group",
  "model": "GV70",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 48985,
  "priceTo": 67000,
  "trims": [
   {
    "name": "2.5T",
    "msrp": 48985
   },
   {
    "name": "3.5T Sport Prestige",
    "msrp": 67000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 300,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.6,
   "widthIn": 75.2,
   "heightIn": 64.2,
   "wheelbaseIn": 113.2,
   "curbWeightLb": 4079,
   "groundClearanceIn": 7.0
  },
  "interior": {
   "passengerVolumeCuFt": 104.0,
   "cargoCuFt": 28.9,
   "cargoMaxCuFt": 56.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "27-inch OLED display",
   "Bang & Olufsen premium audio",
   "Nappa leather quilted interior",
   "Heated & ventilated front and rear seats",
   "Electronically controlled suspension with road preview",
   "Head-up display",
   "Remote Smart Parking Assist"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Significantly refreshed for 2026 (new interior with 27-inch OLED, revised styling); base 2.5T price from Genesis' pricing announcement. 3.5T top-trim price approximate."
 },
 {
  "id": "genesis-gv80",
  "make": "Genesis",
  "manufacturer": "Hyundai Motor Group",
  "model": "GV80",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 57700,
  "priceTo": 83900,
  "trims": [
   {
    "name": "2.5T RWD",
    "msrp": 57700
   },
   {
    "name": "3.5T Prestige Black",
    "msrp": 83900
   },
   {
    "name": "GV80 Coupe 3.5T",
    "msrp": 81850
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 300,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 375,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6 with 48V e-supercharger (Coupe)",
    "hp": 409,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.7,
   "widthIn": 77.8,
   "heightIn": 67.5,
   "wheelbaseIn": 116.3,
   "curbWeightLb": 4696,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 34.9,
   "cargoMaxCuFt": 84.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "27-inch OLED display",
   "Bang & Olufsen premium audio",
   "Second-row heated/ventilated seats",
   "Three-row 7-seat option (2.5T/3.5T SUV)",
   "Electronically controlled suspension with road preview",
   "Nappa leather with microfiber suede headliner",
   "Remote Smart Parking Assist"
  ],
  "towingLb": 6000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "New lower-priced 2.5T RWD base variant for 2026 ($2,150 below AWD). Sleeker GV80 Coupe (from $81,850, 409-hp e-SC available) shares the nameplate; cargo figures are for the standard SUV."
 },
 {
  "id": "honda-accord",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Accord",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize sedan",
  "category": "car",
  "priceFrom": 28395,
  "priceTo": 39495,
  "trims": [
   {
    "name": "LX",
    "msrp": 28395
   },
   {
    "name": "SE",
    "msrp": 30695
   },
   {
    "name": "Sport Hybrid",
    "msrp": 33795
   },
   {
    "name": "EX-L Hybrid",
    "msrp": 35095
   },
   {
    "name": "Sport-L Hybrid",
    "msrp": 35495
   },
   {
    "name": "Touring Hybrid",
    "msrp": 39495
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 192,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.0L I4 two-motor hybrid",
    "hp": 204,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 48,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.7,
   "widthIn": 73.3,
   "heightIn": 57.1,
   "wheelbaseIn": 111.4,
   "curbWeightLb": 3239,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 105.7,
   "cargoCuFt": 16.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Bose 12-speaker premium audio",
   "12.3-inch touchscreen with Google built-in",
   "Heated & ventilated front seats",
   "Head-up display (Touring)",
   "Power moonroof",
   "Leather-trimmed interior",
   "Wireless phone charger"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Sport Hybrid and Sport-L Hybrid are EPA-rated slightly lower (44 mpg combined) than EX-L/Touring Hybrid (48). Some hybrid trims substitute a tire repair kit for the compact spare."
 },
 {
  "id": "honda-cr-v",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "CR-V",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 30920,
  "priceTo": 42550,
  "trims": [
   {
    "name": "LX",
    "msrp": 30920
   },
   {
    "name": "EX",
    "msrp": 33150
   },
   {
    "name": "EX-L",
    "msrp": 35400
   },
   {
    "name": "Sport Hybrid",
    "msrp": 35630
   },
   {
    "name": "Sport-L Hybrid",
    "msrp": 38725
   },
   {
    "name": "TrailSport Hybrid",
    "msrp": 38800
   },
   {
    "name": "Sport Touring Hybrid",
    "msrp": 42550
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 190,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.0L I4 two-motor hybrid",
    "hp": 204,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 40,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.8,
   "widthIn": 73.5,
   "heightIn": 66.5,
   "wheelbaseIn": 106.3,
   "curbWeightLb": 3472,
   "groundClearanceIn": 8.2
  },
  "interior": {
   "passengerVolumeCuFt": 105.9,
   "cargoCuFt": 39.3,
   "cargoMaxCuFt": 76.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Real Time AWD (standard on TrailSport)",
   "Panoramic/one-touch power moonroof",
   "Bose 12-speaker premium audio",
   "Heated front seats & heated steering wheel",
   "Hands-free power tailgate",
   "9-inch touchscreen with wireless CarPlay",
   "All-terrain tires (TrailSport)"
  ],
  "towingLb": 1500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "TrailSport Hybrid comes standard with AWD. Hybrid AWD is EPA-rated 37 combined; gas AWD 29. Tow rating 1,500 lb gas / 1,000 lb hybrid."
 },
 {
  "id": "honda-civic",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Civic",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact car",
  "category": "car",
  "priceFrom": 24695,
  "priceTo": 46895,
  "trims": [
   {
    "name": "LX (sedan)",
    "msrp": 24695
   },
   {
    "name": "Sport",
    "msrp": 26695
   },
   {
    "name": "Sport Hybrid",
    "msrp": 29395
   },
   {
    "name": "Si (sedan)",
    "msrp": 30995
   },
   {
    "name": "Sport Touring Hybrid",
    "msrp": 32395
   },
   {
    "name": "Type R (hatchback)",
    "msrp": 46895
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 150,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 36,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.0L I4 two-motor hybrid",
    "hp": 200,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 49,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "1.5L turbo I4 (Si)",
    "hp": 200,
    "transmission": "6-speed manual",
    "manualAvailable": true,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Type R)",
    "hp": 315,
    "transmission": "6-speed manual",
    "manualAvailable": true,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.0,
   "widthIn": 70.9,
   "heightIn": 55.7,
   "wheelbaseIn": 107.7,
   "curbWeightLb": 2932,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": 99.0,
   "cargoCuFt": 14.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Bose 12-speaker premium audio",
   "Power moonroof",
   "Heated front seats",
   "Google built-in with 9-inch touchscreen",
   "Wireless Apple CarPlay/Android Auto",
   "Leather-trimmed seats (Sport Touring)",
   "Adaptive dampers & Brembo brakes (Type R)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Sold as sedan and hatchback; hatchback trims (Sport, Sport Hybrid, Sport Touring Hybrid, Type R) run roughly $1,200 more than equivalent sedans and add 24.5 cu ft cargo. Si is sedan-only, Type R hatchback-only. Hybrid trims and Type R use a tire repair kit instead of a spare. Sedan cargo figure shown; LX/Sport gas trims include compact spare."
 },
 {
  "id": "honda-hr-v",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "HR-V",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 26500,
  "priceTo": 31850,
  "trims": [
   {
    "name": "LX",
    "msrp": 26500
   },
   {
    "name": "Sport",
    "msrp": 28300
   },
   {
    "name": "EX-L",
    "msrp": 30350
   },
   {
    "name": "EX-L AWD",
    "msrp": 31850
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 158,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 179.8,
   "widthIn": 72.4,
   "heightIn": 63.4,
   "wheelbaseIn": 104.5,
   "curbWeightLb": 3159,
   "groundClearanceIn": 7.0
  },
  "interior": {
   "passengerVolumeCuFt": 98.7,
   "cargoCuFt": 24.4,
   "cargoMaxCuFt": 55.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Real Time AWD (+$1,500 on all trims)",
   "Power moonroof",
   "Heated front seats",
   "Leather-trimmed seats (EX-L)",
   "9-inch touchscreen with wireless CarPlay",
   "Wireless phone charger",
   "Honda Sensing (standard)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Carryover for 2026; AWD available on every trim for about $1,500. AWD versions rated 27 mpg combined."
 },
 {
  "id": "honda-odyssey",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Odyssey",
  "year": 2026,
  "bodyStyle": "minivan",
  "segment": "minivan",
  "category": "van",
  "priceFrom": 42795,
  "priceTo": 51695,
  "trims": [
   {
    "name": "EX-L",
    "msrp": 42795
   },
   {
    "name": "Sport-L",
    "msrp": 43895
   },
   {
    "name": "Touring",
    "msrp": 47495
   },
   {
    "name": "Elite",
    "msrp": 51695
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 280,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 205.2,
   "widthIn": 78.5,
   "heightIn": 69.6,
   "wheelbaseIn": 118.1,
   "curbWeightLb": 4432,
   "groundClearanceIn": 4.6
  },
  "interior": {
   "passengerVolumeCuFt": 160.1,
   "cargoCuFt": 32.8,
   "cargoMaxCuFt": 140.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Magic Slide second-row seats",
   "CabinWatch rear-seat camera",
   "CabinTalk in-car PA system",
   "Rear entertainment system with streaming",
   "Hands-free power sliding doors & tailgate",
   "Heated & ventilated front seats",
   "11-speaker premium audio"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Carryover after 2025 refresh; lineup starts at well-equipped EX-L (no LX/EX). FWD only. Max cargo figure is behind first row with second row removed."
 },
 {
  "id": "honda-passport",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Passport",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV (2-row)",
  "category": "suv",
  "priceFrom": 44950,
  "priceTo": 53850,
  "trims": [
   {
    "name": "RTL",
    "msrp": 44950
   },
   {
    "name": "RTL Blackout",
    "msrp": 46150
   },
   {
    "name": "TrailSport",
    "msrp": 48650
   },
   {
    "name": "TrailSport Elite",
    "msrp": 52650
   },
   {
    "name": "TrailSport Elite Blackout",
    "msrp": 53850
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 285,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 190.4,
   "widthIn": 78.5,
   "heightIn": 71.7,
   "wheelbaseIn": 113.8,
   "curbWeightLb": 4431,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": 115.0,
   "cargoCuFt": 44.0,
   "cargoMaxCuFt": 83.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "TrailSport off-road package (all-terrain tires, skid plates, recovery points)",
   "TrailWatch camera system",
   "Bose 12-speaker premium audio",
   "Heated & ventilated front seats",
   "Panoramic moonroof (Elite)",
   "Hands-free power tailgate",
   "Tow package (5,000 lb)"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "All-new fourth generation for 2026 with standard AWD and rugged TrailSport focus. TrailSport trims carry a full-size spare on a matching wheel; TrailSport EPA rating drops to about 20 combined. Interior volume figures approximate."
 },
 {
  "id": "honda-pilot",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Pilot",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV (3-row)",
  "category": "suv",
  "priceFrom": 42195,
  "priceTo": 54995,
  "trims": [
   {
    "name": "Sport",
    "msrp": 42195
   },
   {
    "name": "EX-L",
    "msrp": 44495
   },
   {
    "name": "TrailSport",
    "msrp": 50395
   },
   {
    "name": "Touring",
    "msrp": 51095
   },
   {
    "name": "Elite",
    "msrp": 53495
   },
   {
    "name": "Black Edition",
    "msrp": 54995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 285,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.9,
   "widthIn": 78.5,
   "heightIn": 70.9,
   "wheelbaseIn": 113.8,
   "curbWeightLb": 4317,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": 158.9,
   "cargoCuFt": 18.6,
   "cargoMaxCuFt": 87.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "12.3-inch touchscreen with Google built-in (standard for 2026)",
   "TrailSport package (all-terrain tires, skid plates, full-size spare)",
   "Bose premium audio",
   "Panoramic moonroof",
   "Heated & ventilated front seats",
   "Removable middle seat / 8-passenger config",
   "Rear entertainment system"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Refreshed styling and more standard tech for 2026. AWD standard on TrailSport, Elite, Black Edition (+$2,100 on lower trims); 5,000 lb towing requires AWD (3,500 FWD). TrailSport includes a full-size spare."
 },
 {
  "id": "honda-prelude",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Prelude",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sport coupe",
  "category": "car",
  "priceFrom": 42000,
  "priceTo": 42500,
  "trims": [
   {
    "name": "Prelude",
    "msrp": 42000
   },
   {
    "name": "Prelude Two-Tone",
    "msrp": 42500
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.0L I4 two-motor hybrid",
    "hp": 200,
    "transmission": "eCVT (S+ Shift simulated gears)",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 44,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 178.3,
   "widthIn": 74.4,
   "heightIn": 53.9,
   "wheelbaseIn": 105.9,
   "curbWeightLb": 3219,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15.1,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "S+ Shift drive mode with simulated gearshifts",
   "Adaptive dampers (Type R-derived chassis)",
   "Brembo front brakes",
   "Bose premium audio",
   "Leather/suede sport seats",
   "19-inch alloy wheels",
   "Two-tone black roof ($500)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new nameplate revival for 2026; hybrid-only 2+2 liftback coupe launched late 2025. Essentially mono-spec with the two-tone roof as the only major option. Exterior dimensions and curb weight are close estimates from launch coverage; EPA 46 city / 41 highway."
 },
 {
  "id": "honda-prologue",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Prologue",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric SUV",
  "category": "suv",
  "priceFrom": 39900,
  "priceTo": 50400,
  "trims": [
   {
    "name": "EX (FWD)",
    "msrp": 39900
   },
   {
    "name": "EX AWD",
    "msrp": 42000
   },
   {
    "name": "Touring (FWD)",
    "msrp": 45200
   },
   {
    "name": "Touring AWD",
    "msrp": 47000
   },
   {
    "name": "Elite AWD",
    "msrp": 50400
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD",
    "hp": 220,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 99,
    "evRangeMi": 308
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 300,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 93,
    "evRangeMi": 294
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.0,
   "widthIn": 78.3,
   "heightIn": 64.7,
   "wheelbaseIn": 121.8,
   "curbWeightLb": 5147,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.2,
   "cargoMaxCuFt": 57.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Bose 12-speaker premium audio",
   "Head-up display (Elite)",
   "Heated & ventilated front seats",
   "11.3-inch touchscreen with Google built-in",
   "Portable Level 1/2 charging kit (standard for 2026)",
   "21-inch wheels (Elite)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "GM Ultium-based EV (85 kWh); prices cut roughly $7,500 for 2026. EPA range: 308 mi FWD, 294 mi AWD, 283 mi Elite. DC fast charge 20-80% in about 35 minutes."
 },
 {
  "id": "honda-ridgeline",
  "make": "Honda",
  "manufacturer": "Honda Motor Co.",
  "model": "Ridgeline",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "midsize pickup",
  "category": "truck",
  "priceFrom": 40795,
  "priceTo": 47895,
  "trims": [
   {
    "name": "Sport",
    "msrp": 40795
   },
   {
    "name": "RTL",
    "msrp": 43595
   },
   {
    "name": "TrailSport",
    "msrp": 45995
   },
   {
    "name": "TrailSport w/HPD Wheels",
    "msrp": 47195
   },
   {
    "name": "Black Edition",
    "msrp": 47395
   },
   {
    "name": "Black Edition Two-Tone",
    "msrp": 47895
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 280,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.2,
   "widthIn": 78.6,
   "heightIn": 70.8,
   "wheelbaseIn": 125.2,
   "curbWeightLb": 4436,
   "groundClearanceIn": 7.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 7.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Lockable in-bed trunk with drain plug",
   "Dual-action tailgate",
   "Truck-bed audio system",
   "All-terrain tires & bronze wheels (TrailSport)",
   "Heated front seats & steering wheel",
   "Tow hitch (5,000 lb standard rating)",
   "Wireless phone charger"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Unibody crew-cab pickup; i-VTM4 torque-vectoring AWD standard on all trims. cargoCuFt reflects the lockable in-bed trunk; 5.3-ft bed adds 33.9 cu ft. Spare stored in the in-bed trunk."
 },
 {
  "id": "hyundai-elantra",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Elantra",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact sedan",
  "category": "car",
  "priceFrom": 22625,
  "priceTo": 29800,
  "trims": [
   {
    "name": "SE",
    "msrp": 22625
   },
   {
    "name": "SEL Sport",
    "msrp": 23750
   },
   {
    "name": "Hybrid Blue",
    "msrp": 25450
   },
   {
    "name": "Hybrid Limited",
    "msrp": 29800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 147,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 36,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "1.6L turbo I4 (N Line)",
    "hp": 201,
    "transmission": "7-speed DCT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "1.6L I4 hybrid",
    "hp": 139,
    "transmission": "6-speed DCT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 54,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.1,
   "widthIn": 71.9,
   "heightIn": 55.7,
   "wheelbaseIn": 107.1,
   "curbWeightLb": 2725,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 99.4,
   "cargoCuFt": 14.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "10.25-inch digital cluster and touchscreen",
   "Bose premium audio",
   "Power sunroof",
   "Heated & ventilated front seats",
   "Highway Driving Assist",
   "Digital Key (phone as key)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "SEL Sport Premium replaces SEL Convenience for 2026. Hybrid Blue rated up to 54 mpg combined. Hybrid trims use a tire mobility kit instead of a spare."
 },
 {
  "id": "hyundai-elantra-n",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Elantra N",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact sport sedan",
  "category": "car",
  "priceFrom": 35100,
  "priceTo": 39250,
  "trims": [
   {
    "name": "N (6MT)",
    "msrp": 35100
   },
   {
    "name": "N (8DCT)",
    "msrp": 36600
   },
   {
    "name": "TCR Edition (6MT)",
    "msrp": 39250
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 276,
    "transmission": "6-speed manual or 8-speed DCT",
    "manualAvailable": true,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.1,
   "widthIn": 71.9,
   "heightIn": 55.3,
   "wheelbaseIn": 107.1,
   "curbWeightLb": 3186,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 99.4,
   "cargoCuFt": 14.2,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Electronically controlled suspension",
   "Electronic limited-slip differential",
   "N Grin Shift overboost",
   "N Light sport bucket seats",
   "Variable exhaust valve system",
   "TCR Edition track package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "One of the few remaining manual-transmission sport sedans. New TCR Edition added for 2026 ($39,250 with manual)."
 },
 {
  "id": "hyundai-ioniq-5",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Ioniq 5",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric SUV",
  "category": "suv",
  "priceFrom": 35000,
  "priceTo": 48325,
  "trims": [
   {
    "name": "SE Standard Range",
    "msrp": 35000
   },
   {
    "name": "SE",
    "msrp": 37500
   },
   {
    "name": "Limited",
    "msrp": 45075
   },
   {
    "name": "XRT AWD",
    "msrp": 46275
   },
   {
    "name": "XRT AWD w/ Tow Hitch",
    "msrp": 48325
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (63 kWh)",
    "hp": 168,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 121,
    "evRangeMi": 245
   },
   {
    "type": "ev",
    "engine": "Single-motor RWD (84 kWh)",
    "hp": 225,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 114,
    "evRangeMi": 318
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (84 kWh)",
    "hp": 320,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 103,
    "evRangeMi": 290
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.3,
   "widthIn": 74.4,
   "heightIn": 63.2,
   "wheelbaseIn": 118.1,
   "curbWeightLb": 4200,
   "groundClearanceIn": 6.1
  },
  "interior": {
   "passengerVolumeCuFt": 106.5,
   "cargoCuFt": 26.3,
   "cargoMaxCuFt": 59.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Native NACS (Tesla Supercharger) port",
   "800V ultra-fast charging (10-80% in ~20 min)",
   "Vehicle-to-Load (V2L)",
   "XRT off-road trim",
   "Vision panoramic roof",
   "Head-up display",
   "Bose premium audio"
  ],
  "towingLb": 2300,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Hyundai cut 2026 prices by $7,600-$9,800 per trim after the federal EV tax credit expired; now from $35,000. Built in Georgia; NACS port standard."
 },
 {
  "id": "hyundai-ioniq-5-n",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Ioniq 5 N",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "high-performance electric SUV",
  "category": "suv",
  "priceFrom": 66200,
  "priceTo": 66200,
  "trims": [
   {
    "name": "N",
    "msrp": 66200
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (84 kWh)",
    "hp": 641,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 78,
    "evRangeMi": 221
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.6,
   "widthIn": 76.4,
   "heightIn": 62.4,
   "wheelbaseIn": 118.1,
   "curbWeightLb": 4861,
   "groundClearanceIn": 6.1
  },
  "interior": {
   "passengerVolumeCuFt": 106.5,
   "cargoCuFt": 26.3,
   "cargoMaxCuFt": 58.5,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "N Grin Boost (641 hp overboost)",
   "N e-Shift simulated gearbox",
   "N Active Sound+",
   "N Drift Optimizer",
   "Track-tuned electronically controlled suspension",
   "N bucket seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 pricing not yet announced; price shown is the 2025 MSRP ($66,200). 0-60 in ~3.2s with N Grin Boost."
 },
 {
  "id": "hyundai-ioniq-6",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Ioniq 6",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize electric sedan",
  "category": "car",
  "priceFrom": 37850,
  "priceTo": 51100,
  "trims": [
   {
    "name": "SE Standard Range",
    "msrp": 37850
   },
   {
    "name": "Limited AWD",
    "msrp": 51100
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (53 kWh)",
    "hp": 149,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 135,
    "evRangeMi": 240
   },
   {
    "type": "ev",
    "engine": "Single-motor RWD (77.4 kWh)",
    "hp": 225,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 140,
    "evRangeMi": 342
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (77.4 kWh)",
    "hp": 320,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 121,
    "evRangeMi": 316
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 191.1,
   "widthIn": 74.0,
   "heightIn": 58.9,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 3902,
   "groundClearanceIn": 5.4
  },
  "interior": {
   "passengerVolumeCuFt": 103.5,
   "cargoCuFt": 11.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Streamliner aero design (0.22 Cd)",
   "800V ultra-fast charging",
   "Vehicle-to-Load (V2L)",
   "Dual 12.3-inch displays",
   "Digital side mirrors not offered in US; camera-based parking assist available",
   "New N Line trim for 2026"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Refreshed for 2026 with new styling, NACS port and added N Line trim; official 2026 US pricing not announced at time of writing, so 2025 prices shown. Expect possible cuts in line with Ioniq 5."
 },
 {
  "id": "hyundai-ioniq-6-n",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Ioniq 6 N",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "high-performance electric sedan",
  "category": "car",
  "priceFrom": null,
  "priceTo": null,
  "trims": [],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (84 kWh)",
    "hp": 641,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 191.7,
   "widthIn": 76.4,
   "heightIn": 58.9,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4900,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 11.2,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "N Grin Boost (641 hp)",
   "N e-Shift simulated gears",
   "N Drift Optimizer",
   "Track-focused chassis and aero",
   "N bucket seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "low",
  "notes": "New nameplate arriving during the 2026 model year with very limited availability at select dealers. US pricing, EPA range and some specs not announced (estimates put MSRP near $60,000-$66,000); curb weight approximate."
 },
 {
  "id": "hyundai-ioniq-9",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Ioniq 9",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size electric SUV (3-row)",
  "category": "suv",
  "priceFrom": 58955,
  "priceTo": 76490,
  "trims": [
   {
    "name": "S RWD",
    "msrp": 58955
   },
   {
    "name": "Performance Calligraphy AWD",
    "msrp": 76490
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (110.3 kWh)",
    "hp": 215,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 104,
    "evRangeMi": 335
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (110.3 kWh)",
    "hp": 422,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 96,
    "evRangeMi": 311
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.2,
   "widthIn": 78.0,
   "heightIn": 70.5,
   "wheelbaseIn": 123.2,
   "curbWeightLb": 5507,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.9,
   "cargoMaxCuFt": 86.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Native NACS port with 800V fast charging",
   "Swiveling second-row relaxation seats (6-seat)",
   "Panoramic curved dual displays",
   "Vehicle-to-Load (V2L)",
   "Digital Key 2",
   "Bose premium audio",
   "Head-up display"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "All-new for 2026; Hyundai's first three-row EV, built in Georgia. Mid trims (SE/SEL/Performance Limited) fall between the prices shown; AWD range and MPGe figures approximate."
 },
 {
  "id": "hyundai-kona",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Kona",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 25500,
  "priceTo": 33150,
  "trims": [
   {
    "name": "SE",
    "msrp": 25500
   },
   {
    "name": "Limited AWD",
    "msrp": 33150
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 147,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "1.6L turbo I4",
    "hp": 190,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 171.5,
   "widthIn": 71.9,
   "heightIn": 62.2,
   "wheelbaseIn": 104.7,
   "curbWeightLb": 3005,
   "groundClearanceIn": 6.7
  },
  "interior": {
   "passengerVolumeCuFt": 101.9,
   "cargoCuFt": 25.5,
   "cargoMaxCuFt": 63.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 12.3-inch displays",
   "Bose premium audio",
   "Power sunroof",
   "Heated & ventilated front seats",
   "Highway Driving Assist",
   "N Line appearance package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Base price verified ($25,500 SE excl. freight); Limited AWD top price is approximate. Second-generation Kona carries over largely unchanged for 2026."
 },
 {
  "id": "hyundai-kona-electric",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Kona Electric",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact electric SUV",
  "category": "suv",
  "priceFrom": 32975,
  "priceTo": 32975,
  "trims": [
   {
    "name": "SE (Standard Range)",
    "msrp": 32975
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD (48.6 kWh)",
    "hp": 133,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 131,
    "evRangeMi": 200
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 171.3,
   "widthIn": 71.9,
   "heightIn": 62.2,
   "wheelbaseIn": 104.7,
   "curbWeightLb": 3571,
   "groundClearanceIn": 5.9
  },
  "interior": {
   "passengerVolumeCuFt": 101.9,
   "cargoCuFt": 25.5,
   "cargoMaxCuFt": 63.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 12.3-inch displays",
   "Heated front seats",
   "Smart regenerative braking with i-Pedal",
   "Highway Driving Assist",
   "Vehicle-to-Load (V2L) power outlet"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "For 2026 the lineup shrinks to a single SE Standard Range trim. Official 2026 pricing not yet confirmed; price shown is the 2025 SE MSRP and a cut is possible given Hyundai's 2026 EV price reductions."
 },
 {
  "id": "hyundai-nexo",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Nexo",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "hydrogen fuel-cell SUV",
  "category": "suv",
  "priceFrom": null,
  "priceTo": null,
  "trims": [],
  "powertrains": [
   {
    "type": "hydrogen",
    "engine": "Hydrogen fuel-cell electric, single motor",
    "hp": 255,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.0,
   "widthIn": 73.8,
   "heightIn": 66.3,
   "wheelbaseIn": 109.8,
   "curbWeightLb": null,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Hydrogen refueling in ~5 minutes",
   "Targeted 500+ mile range",
   "Dual curved panoramic displays",
   "Highway Driving Assist 2",
   "Vehicle-to-Load (V2L)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "low",
  "notes": "All-new second-generation Nexo for 2026, sold only in California (hydrogen infrastructure). US pricing and EPA figures not announced at time of writing; prior generation ran $61,470-$64,920. Dimensions approximate (converted from global specs)."
 },
 {
  "id": "hyundai-palisade",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Palisade",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV (3-row)",
  "category": "suv",
  "priceFrom": 38935,
  "priceTo": 56885,
  "trims": [
   {
    "name": "SE",
    "msrp": 38935
   },
   {
    "name": "SEL",
    "msrp": 42045
   },
   {
    "name": "Limited",
    "msrp": 49875
   },
   {
    "name": "Calligraphy",
    "msrp": 54665
   },
   {
    "name": "Hybrid Calligraphy",
    "msrp": 56885
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 287,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L turbo I4 hybrid",
    "hp": 329,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 33,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.2,
   "widthIn": 78.0,
   "heightIn": 71.1,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4553,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.1,
   "cargoMaxCuFt": 87.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "First-class relaxation seats with leg rests",
   "Dual panoramic curved displays",
   "XRT Pro off-road trim with locking differential",
   "100W USB-C fast charging ports",
   "Bose premium audio",
   "Head-up display",
   "Digital Key 2"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "All-new generation for 2026, larger with first-ever Palisade Hybrid (329 hp, up to ~34 mpg). Trim prices above derived from published incl.-destination figures ($1,495 freight); cargo figures approximate."
 },
 {
  "id": "hyundai-santa-cruz",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Santa Cruz",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "compact pickup",
  "category": "truck",
  "priceFrom": 29750,
  "priceTo": 43805,
  "trims": [
   {
    "name": "SE",
    "msrp": 29750
   },
   {
    "name": "Limited",
    "msrp": 43805
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 191,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 281,
    "transmission": "8-speed DCT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.7,
   "widthIn": 75.0,
   "heightIn": 66.7,
   "wheelbaseIn": 118.3,
   "curbWeightLb": 3704,
   "groundClearanceIn": 8.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Lockable in-bed trunk",
   "Integrated tonneau cover",
   "Dual 12.3-inch curved displays",
   "XRT trim with all-terrain tires",
   "Bose premium audio",
   "Surround View Monitor"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Unibody crew-cab pickup with 4.3-ft composite bed (no published cargo cu-ft). 5,000-lb towing with 2.5T; 3,500 lb with base engine. Top Limited price derived from published price incl. destination."
 },
 {
  "id": "hyundai-santa-fe",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Santa Fe",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV (3-row)",
  "category": "suv",
  "priceFrom": 34800,
  "priceTo": 50250,
  "trims": [
   {
    "name": "SE",
    "msrp": 34800
   },
   {
    "name": "Hybrid Calligraphy AWD",
    "msrp": 50250
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 277,
    "transmission": "8-speed DCT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "1.6L turbo I4 hybrid",
    "hp": 231,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 34,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 190.2,
   "widthIn": 74.8,
   "heightIn": 67.7,
   "wheelbaseIn": 110.8,
   "curbWeightLb": 4017,
   "groundClearanceIn": 6.9
  },
  "interior": {
   "passengerVolumeCuFt": 111.5,
   "cargoCuFt": 14.6,
   "cargoMaxCuFt": 79.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic curved dual 12.3-inch displays",
   "XRT trim with 8.3-in ground clearance and all-terrain tires",
   "Captain's chairs (6-seat)",
   "UV-C sanitizing tray",
   "Heated & ventilated first and second-row seats",
   "Head-up display",
   "Bose premium audio"
  ],
  "towingLb": 4500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Boxy fifth-generation design with standard third row. Hybrid Calligraphy AWD tops the range around $50,250 excl. freight."
 },
 {
  "id": "hyundai-sonata",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Sonata",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize sedan",
  "category": "car",
  "priceFrom": 27450,
  "priceTo": 35900,
  "trims": [
   {
    "name": "SE",
    "msrp": 27450
   },
   {
    "name": "SEL Sport",
    "msrp": 29000
   },
   {
    "name": "Hybrid SEL",
    "msrp": 32300
   },
   {
    "name": "N Line",
    "msrp": 35900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 191,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I4 (N Line)",
    "hp": 290,
    "transmission": "8-speed DCT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.0L I4 hybrid",
    "hp": 192,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 47,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.5,
   "widthIn": 73.2,
   "heightIn": 56.9,
   "wheelbaseIn": 111.8,
   "curbWeightLb": 3120,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 104.4,
   "cargoCuFt": 16.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 12.3-inch curved displays",
   "Bose premium audio",
   "Panoramic sunroof",
   "Heated & ventilated front seats",
   "Highway Driving Assist",
   "Surround View Monitor"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Trim lineup simplified for 2026 (SEL Sport replaces SEL/SEL Convenience). N Line price is approximate (~$35,900; sources vary slightly). Hybrid uses a tire mobility kit."
 },
 {
  "id": "hyundai-tucson",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Tucson",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 30800,
  "priceTo": 48655,
  "trims": [
   {
    "name": "SE",
    "msrp": 30800
   },
   {
    "name": "Hybrid Blue SE",
    "msrp": 33800
   },
   {
    "name": "Plug-in Hybrid SEL",
    "msrp": 40325
   },
   {
    "name": "Plug-in Hybrid Limited",
    "msrp": 48655
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 187,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "1.6L turbo I4 hybrid",
    "hp": 231,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 38,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "1.6L turbo I4 PHEV (13.8 kWh)",
    "hp": 268,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 80,
    "evRangeMi": 32
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 182.7,
   "widthIn": 73.4,
   "heightIn": 65.6,
   "wheelbaseIn": 108.5,
   "curbWeightLb": 3329,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": 108.2,
   "cargoCuFt": 38.7,
   "cargoMaxCuFt": 74.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 12.3-inch curved displays",
   "Panoramic sunroof",
   "Bose premium audio",
   "Heated & ventilated front seats",
   "Surround View Monitor",
   "XRT trim with Terrain Modes",
   "Hands-free smart liftgate"
  ],
  "towingLb": 2500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "New Hybrid Blue SE trim and increased gas-model towing for 2026. Top Limited PHEV price is approximate (~$48.7k per KBB; sources vary). PHEV trims use a tire mobility kit."
 },
 {
  "id": "hyundai-venue",
  "make": "Hyundai",
  "manufacturer": "Hyundai Motor Group",
  "model": "Venue",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 20550,
  "priceTo": 22825,
  "trims": [
   {
    "name": "SE",
    "msrp": 20550
   },
   {
    "name": "SEL",
    "msrp": 22825
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.6L I4",
    "hp": 121,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 159.1,
   "widthIn": 69.7,
   "heightIn": 61.6,
   "wheelbaseIn": 99.2,
   "curbWeightLb": 2612,
   "groundClearanceIn": 6.7
  },
  "interior": {
   "passengerVolumeCuFt": 91.9,
   "cargoCuFt": 18.7,
   "cargoMaxCuFt": 31.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "8-inch touchscreen with wireless Apple CarPlay/Android Auto",
   "Heated front seats",
   "Power sunroof",
   "Two-tone roof",
   "Blind-Spot Collision Warning",
   "Proximity key with push-button start"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Cheapest Hyundai in the US; FWD only, no AWD offered. Limited trim dropped for 2026, leaving SE and SEL."
 },
 {
  "id": "ineos-grenadier",
  "make": "Ineos",
  "manufacturer": "INEOS Automotive",
  "model": "Grenadier",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "off-road utility SUV",
  "category": "suv",
  "priceFrom": 72995,
  "priceTo": 84990,
  "trims": [
   {
    "name": "Station Wagon (base)",
    "msrp": 72995
   },
   {
    "name": "Black Edition",
    "msrp": 84990
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-scroll turbo I6 (BMW B58)",
    "hp": 281,
    "transmission": "8-speed automatic (ZF)",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.7,
   "widthIn": 76.1,
   "heightIn": 80.1,
   "wheelbaseIn": 115.0,
   "curbWeightLb": 5875,
   "groundClearanceIn": 10.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 40.7,
   "cargoMaxCuFt": 71.9,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Front and rear locking differentials (Trialmaster)",
   "Rough Pack (BFGoodrich KO2 tires, diff locks)",
   "Smooth Pack (comfort/convenience bundle)",
   "Fieldmaster and Trialmaster editions",
   "Safari windows",
   "Auxiliary switch panel & exterior utility belt",
   "Ladder, roof rack and winch accessories"
  ],
  "towingLb": 7716,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ineos_Grenadier_1X7A7445.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Body-on-frame 4x4 with solid axles and permanent 4WD with 2-speed transfer case; prices unchanged for 2026 (base $72,995 excl. $1,995 destination). Fieldmaster (lifestyle) and Trialmaster (off-road) editions sit between base and Black Edition. Dark interior standard; lighter seat colors limited to option packs."
 },
 {
  "id": "ineos-grenadier-quartermaster",
  "make": "Ineos",
  "manufacturer": "INEOS Automotive",
  "model": "Grenadier Quartermaster",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "off-road midsize pickup",
  "category": "truck",
  "priceFrom": 86395,
  "priceTo": 90390,
  "trims": [
   {
    "name": "Quartermaster (base)",
    "msrp": 86395
   },
   {
    "name": "Black Edition",
    "msrp": 90390
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-scroll turbo I6 (BMW B58)",
    "hp": 281,
    "transmission": "8-speed automatic (ZF)",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 214.4,
   "widthIn": 76.1,
   "heightIn": 80.6,
   "wheelbaseIn": 127.0,
   "curbWeightLb": 6050,
   "groundClearanceIn": 10.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Front and rear locking differentials",
   "Rough Pack / Smooth Pack bundles",
   "Trialmaster and Fieldmaster editions",
   "Bed liner and canopy accessories",
   "Safari windows",
   "Auxiliary switch panel",
   "Winch and heavy-duty accessories"
  ],
  "towingLb": 7716,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/96/Ineos_Grenadier_Quartermaster_IMG_9638.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Double-cab pickup version of the Grenadier on a 12-inch longer wheelbase; ~1,675-lb payload with 61.6 x 63.8-in bed (fits a Euro pallet). US price is inflated by the 25% 'chicken tax' on imported pickups. Prices unchanged for 2026 and exclude $1,995 destination."
 },
 {
  "id": "infiniti-qx60",
  "make": "Infiniti",
  "manufacturer": "Nissan Motor Corporation",
  "model": "QX60",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury 3-row SUV",
  "category": "suv",
  "priceFrom": 51200,
  "priceTo": 68385,
  "trims": [
   {
    "name": "PURE",
    "msrp": 51200
   },
   {
    "name": "LUXE",
    "msrp": 56845
   },
   {
    "name": "SPORT AWD",
    "msrp": 61700
   },
   {
    "name": "AUTOGRAPH AWD",
    "msrp": 68385
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L VC-Turbo I4",
    "hp": 268,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.2,
   "widthIn": 78.0,
   "heightIn": 69.7,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4560,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.5,
   "cargoMaxCuFt": 75.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Second-row captain's chairs",
   "Massaging front seats",
   "Head-up display",
   "ProPILOT Assist",
   "Premium branded audio",
   "Tow package (6,000 lb)"
  ],
  "towingLb": 6000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/96/23_Infiniti_QX60_Autograph.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Significantly refreshed for 2026 with new SPORT grade. Base ($51,200) and SPORT ($61,700) prices are from Infiniti; LUXE and AUTOGRAPH MSRPs derived from list prices less $1,495 destination and vary slightly by source. Q50, QX50 and QX55 were all discontinued before 2026."
 },
 {
  "id": "infiniti-qx80",
  "make": "Infiniti",
  "manufacturer": "Nissan Motor Corporation",
  "model": "QX80",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury SUV",
  "category": "suv",
  "priceFrom": 83750,
  "priceTo": 111500,
  "trims": [
   {
    "name": "PURE",
    "msrp": 83750
   },
   {
    "name": "LUXE",
    "msrp": 90850
   },
   {
    "name": "SPORT 4WD",
    "msrp": 101950
   },
   {
    "name": "AUTOGRAPH 4WD",
    "msrp": 111500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 450,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 211.2,
   "widthIn": 83.3,
   "heightIn": 77.6,
   "wheelbaseIn": 121.1,
   "curbWeightLb": 5917,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.0,
   "cargoMaxCuFt": 101.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Klipsch Reference Premiere 24-speaker audio",
   "Electronic air suspension",
   "ProPILOT Assist 2.1 hands-free driving",
   "Massaging front & second-row seats",
   "Cooled second-row captain's chairs",
   "Head-up display",
   "First-ever SPORT grade (new for 2026)"
  ],
  "towingLb": 8500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/97/2025_Infiniti_QX80_%28United_States%29_front_view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Third generation (introduced 2025); new SPORT grade for 2026. Climate is controlled via lower touchscreen rather than physical knobs. Destination is a steep $2,190."
 },
 {
  "id": "jaguar-f-pace",
  "make": "Jaguar",
  "manufacturer": "Tata Motors (JLR)",
  "model": "F-Pace",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 57000,
  "priceTo": 92400,
  "trims": [
   {
    "name": "P250 R-Dynamic S",
    "msrp": 57000
   },
   {
    "name": "P400 R-Dynamic S",
    "msrp": 66500
   },
   {
    "name": "SVR 575 Edition",
    "msrp": 92400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (P250)",
    "hp": 246,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo I6 mild hybrid (P400)",
    "hp": 395,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.0L supercharged V8 (SVR)",
    "hp": 567,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 186.9,
   "widthIn": 76.2,
   "heightIn": 65.6,
   "wheelbaseIn": 113.1,
   "curbWeightLb": 4015,
   "groundClearanceIn": 8.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 31.5,
   "cargoMaxCuFt": 69.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Meridian premium audio",
   "Head-up display (standard for 2026)",
   "Panoramic roof",
   "Adaptive Dynamics suspension",
   "22-inch wheels",
   "3D surround camera (standard)",
   "Wi-Fi hotspot (standard)"
  ],
  "towingLb": 5291,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/82/2022_Jaguar_F-Pace_SVR_facelift_front.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "The only Jaguar sold new in the US for 2026 - XE, XF, F-Type, E-Pace and I-Pace are discontinued as the brand relaunches as an EV-only marque. Base price shown is Edmunds' with-destination figure (~$55,700 before destination). Final year of the current F-Pace; an SVR 575 Final Edition (~$95,000) closes out the run."
 },
 {
  "id": "jeep-cherokee",
  "make": "Jeep",
  "manufacturer": "Stellantis",
  "model": "Cherokee",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 35000,
  "priceTo": 43000,
  "trims": [
   {
    "name": "Cherokee",
    "msrp": 35000
   },
   {
    "name": "Laredo",
    "msrp": 38000
   },
   {
    "name": "Limited",
    "msrp": 40000
   },
   {
    "name": "Overland",
    "msrp": 43000
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "1.6L turbo I4 hybrid (two electric motors)",
    "hp": 210,
    "transmission": "hybrid automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 37,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": null,
   "widthIn": null,
   "heightIn": null,
   "wheelbaseIn": null,
   "curbWeightLb": null,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 33.6,
   "cargoMaxCuFt": 68.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual-pane panoramic sunroof",
   "Heated and ventilated front seats",
   "Power liftgate",
   "360-degree camera",
   "10-speaker premium audio",
   "Nappa leather (Overland)",
   "20-inch wheels"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/3/34/2026_Jeep_Cherokee_Laredo_in_Bright_White%2C_front_left%2C_2026-05-03.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "All-new for 2026 after a two-year hiatus; hybrid-only with standard AWD and 500+ miles of total range. Advertised prices of $36,995-$44,995 include the $1,995 destination fee; figures here exclude it. Some exterior dimensions not yet published."
 },
 {
  "id": "jeep-compass",
  "make": "Jeep",
  "manufacturer": "Stellantis",
  "model": "Compass",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 28995,
  "priceTo": 32890,
  "trims": [
   {
    "name": "Latitude",
    "msrp": 28995
   },
   {
    "name": "Limited",
    "msrp": 32890
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 200,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 173.4,
   "widthIn": 73.8,
   "heightIn": 64.6,
   "wheelbaseIn": 103.8,
   "curbWeightLb": 3327,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": 99.6,
   "cargoCuFt": 27.2,
   "cargoMaxCuFt": 59.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual-pane panoramic sunroof",
   "10.1-inch Uconnect 5 touchscreen",
   "Heated front seats and steering wheel",
   "Alpine premium audio",
   "Power liftgate",
   "Trailhawk off-road package",
   "Adaptive cruise control"
  ],
  "towingLb": 2000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/e/e0/2019_Jeep_Compass_Limited_2.4L%2C_front_7.6.19.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Carryover of the current-generation Compass for 2026 in the US (10th model year); base Sport trim dropped, Latitude is the new entry trim. AWD standard. All-new next-gen Compass not yet on sale in the US."
 },
 {
  "id": "jeep-gladiator",
  "make": "Jeep",
  "manufacturer": "Stellantis",
  "model": "Gladiator",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "midsize pickup",
  "category": "truck",
  "priceFrom": 38830,
  "priceTo": 59995,
  "trims": [
   {
    "name": "Sport",
    "msrp": 38830
   },
   {
    "name": "Sport S",
    "msrp": 42025
   },
   {
    "name": "Willys",
    "msrp": 45230
   },
   {
    "name": "Sahara",
    "msrp": 47125
   },
   {
    "name": "Mojave",
    "msrp": 52000
   },
   {
    "name": "Rubicon",
    "msrp": 52000
   },
   {
    "name": "Mojave X",
    "msrp": 59995
   },
   {
    "name": "Rubicon X",
    "msrp": 59995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 285,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 218.0,
   "widthIn": 73.8,
   "heightIn": 75.0,
   "wheelbaseIn": 137.3,
   "curbWeightLb": 4650,
   "groundClearanceIn": 10.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Removable doors and roof panels",
   "5-foot bed with Trail Rail system",
   "12.3-inch Uconnect 5 touchscreen",
   "Max Tow package (7,700 lb)",
   "Front-facing off-road camera",
   "Alpine premium audio",
   "Steel rock rails and skid plates"
  ],
  "towingLb": 7700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/e/e8/2020_Jeep_Gladiator_Rubicon%2C_front_10.25.20.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Only convertible pickup on sale; 3.6L V6 with 8-speed automatic is now the sole powertrain (manual discontinued). Max payload 1,720 lb. Prices exclude destination."
 },
 {
  "id": "jeep-grand-cherokee",
  "make": "Jeep",
  "manufacturer": "Stellantis",
  "model": "Grand Cherokee",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV",
  "category": "suv",
  "priceFrom": 38415,
  "priceTo": 60195,
  "trims": [
   {
    "name": "Laredo",
    "msrp": 38415
   },
   {
    "name": "Summit",
    "msrp": 60195
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 293,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Hurricane 4)",
    "hp": 324,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.5,
   "widthIn": 77.5,
   "heightIn": 70.9,
   "wheelbaseIn": 116.7,
   "curbWeightLb": 4238,
   "groundClearanceIn": 8.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 37.7,
   "cargoMaxCuFt": 70.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Quadra-Lift air suspension",
   "Panoramic sunroof",
   "McIntosh premium audio",
   "Massaging front seats",
   "Rear-seat entertainment screens",
   "360-degree camera",
   "Advanced off-road packages (Trailhawk-style 4x4 systems)"
  ],
  "towingLb": 6200,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/6c/2022_Jeep_Grand_Cherokee_Summit_Reserve_4x4_in_Bright_White%2C_Front_Left%2C_01-16-2022.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Refreshed for 2026 with new styling and a 324-hp 2.0L Hurricane turbo four on upper trims (V6 remains on base trims); 4xe PHEV discontinued. Three-row Grand Cherokee L included in this record (adds ~$2,000-$3,000; seats 6-7). Dims shown are two-row. Prices exclude $1,995 destination."
 },
 {
  "id": "jeep-grand-wagoneer",
  "make": "Jeep",
  "manufacturer": "Stellantis",
  "model": "Grand Wagoneer",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury SUV",
  "category": "suv",
  "priceFrom": 62145,
  "priceTo": 93390,
  "trims": [
   {
    "name": "Grand Wagoneer",
    "msrp": 62145
   },
   {
    "name": "Limited Altitude",
    "msrp": 71140
   },
   {
    "name": "Summit Obsidian",
    "msrp": 93390
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6 (Hurricane)",
    "hp": 420,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "Range-extended EV: dual motors + 3.6L V6 generator, 92-kWh battery",
    "hp": 647,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": 145
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 214.7,
   "widthIn": 83.6,
   "heightIn": 75.6,
   "wheelbaseIn": 123.0,
   "curbWeightLb": 6200,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.4,
   "cargoMaxCuFt": 116.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "McIntosh 23-speaker audio",
   "Air suspension",
   "Panoramic sunroof",
   "Front passenger interactive display",
   "Massaging front seats",
   "Rear-seat entertainment",
   "4x4 with two-speed transfer case ($3,000)",
   "Long-wheelbase L body (+$3,000)"
  ],
  "towingLb": 10000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/4/4d/2022_Jeep_Grand_Wagoneer_Series_III_in_Bright_White_and_Black%2C_front_left.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "For 2026 the standard Wagoneer is discontinued and the refreshed Grand Wagoneer (now Jeep-badged) takes a ~$20,000 base-price cut; 4WD is now optional on base trim. Range-extended EV (REEV) powertrain has late availability. Prices exclude $2,595 destination."
 },
 {
  "id": "jeep-recon",
  "make": "Jeep",
  "manufacturer": "Stellantis",
  "model": "Recon",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "electric off-road SUV",
  "category": "suv",
  "priceFrom": 65000,
  "priceTo": 65000,
  "trims": [
   {
    "name": "Moab",
    "msrp": 65000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD, 100.5-kWh battery",
    "hp": 650,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 230
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.3,
   "widthIn": null,
   "heightIn": null,
   "wheelbaseIn": 113.0,
   "curbWeightLb": 6112,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Removable doors and glass",
   "Selec-Terrain traction modes",
   "Electronic locking rear axle",
   "33-inch all-terrain tires",
   "Power front trunk",
   "Trail-ready underbody protection"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/e/ef/26_Jeep_Recon_Moab_AZIAS.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "All-new battery-electric off-roader launching for 2026 in a single loaded Moab trim; 650 hp, ~230-mile EPA-estimated range, DC fast charge 5-80% in under 30 minutes. Some specs (interior volumes, final EPA figures) not yet published. Price excludes $1,995 destination."
 },
 {
  "id": "jeep-wrangler",
  "make": "Jeep",
  "manufacturer": "Stellantis",
  "model": "Wrangler",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "off-road SUV",
  "category": "suv",
  "priceFrom": 34895,
  "priceTo": 79995,
  "trims": [
   {
    "name": "Sport",
    "msrp": 34895
   },
   {
    "name": "Willys",
    "msrp": 42715
   },
   {
    "name": "Moab 392",
    "msrp": 79995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 285,
    "transmission": "8-speed automatic",
    "manualAvailable": true,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.4L V8 (392)",
    "hp": 470,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 14,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.5,
   "widthIn": 73.8,
   "heightIn": 73.6,
   "wheelbaseIn": 118.4,
   "curbWeightLb": 4222,
   "groundClearanceIn": 9.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 31.7,
   "cargoMaxCuFt": 72.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Sky One-Touch power top",
   "Removable doors and roof",
   "12.3-inch Uconnect 5 touchscreen",
   "Alpine premium audio",
   "35-inch tire package (Rubicon)",
   "Steel bumpers with winch capability",
   "Heated seats and steering wheel"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/81/Jeep_Wrangler_Unlimited_%28JL%29_PHEV_IMG_5808.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "4xe plug-in hybrid discontinued for 2026; new Moab 392 (and Willys 392) replace Rubicon 392. Offered as 2-door (seats 4) and 4-door (seats 5); dims shown are 4-door. 85th Anniversary editions available. Prices exclude $1,995 destination."
 },
 {
  "id": "kia-carnival",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "Carnival",
  "year": 2026,
  "bodyStyle": "minivan",
  "segment": "minivan",
  "category": "van",
  "priceFrom": 37090,
  "priceTo": 53190,
  "trims": [
   {
    "name": "LXS",
    "msrp": 37090
   },
   {
    "name": "HEV SX Prestige",
    "msrp": 53190
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 287,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "1.6L turbo I4 hybrid",
    "hp": 242,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 33,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 5,
  "dims": {
   "lengthIn": 203.0,
   "widthIn": 78.5,
   "heightIn": 68.5,
   "wheelbaseIn": 121.7,
   "curbWeightLb": 4497,
   "groundClearanceIn": 6.8
  },
  "interior": {
   "passengerVolumeCuFt": 168.2,
   "cargoCuFt": 40.2,
   "cargoMaxCuFt": 145.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual power sliding doors",
   "VIP second-row lounge seats",
   "Dual 12.3-inch panoramic displays",
   "Rear-seat entertainment screens",
   "Bose premium audio",
   "Passenger View & Talk cabin camera/intercom",
   "Power liftgate"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Only minivan with a hybrid option besides the Sienna/Pacifica set; no AWD offered. Prices derived from published incl.-destination figures ($38,485 / $54,585 with ~$1,395 freight)."
 },
 {
  "id": "kia-ev6",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "EV6",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric crossover",
  "category": "suv",
  "priceFrom": 37900,
  "priceTo": 48700,
  "trims": [
   {
    "name": "Light RWD",
    "msrp": 37900
   },
   {
    "name": "Wind",
    "msrp": 44800
   },
   {
    "name": "GT-Line",
    "msrp": 48700
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (63 kWh)",
    "hp": 167,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 117,
    "evRangeMi": 237
   },
   {
    "type": "ev",
    "engine": "Single-motor RWD (84 kWh)",
    "hp": 225,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 117,
    "evRangeMi": 319
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (84 kWh)",
    "hp": 320,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 103,
    "evRangeMi": 291
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.8,
   "widthIn": 74.4,
   "heightIn": 60.8,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4045,
   "groundClearanceIn": 6.1
  },
  "interior": {
   "passengerVolumeCuFt": 103.0,
   "cargoCuFt": 24.4,
   "cargoMaxCuFt": 50.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "800V ultra-fast charging (10-80% in ~18 min)",
   "NACS charging port with adapter/dual cable kit",
   "Vehicle-to-Load (V2L)",
   "Panoramic curved dual displays",
   "Meridian premium audio",
   "Head-up display with AR"
  ],
  "towingLb": 2300,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Kia cut 2026 prices $5,000-$5,900 per trim (now from $37,900) after the federal EV credit expired; the 641-hp GT trim was dropped for 2026. Built in Georgia."
 },
 {
  "id": "kia-ev9",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "EV9",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size electric SUV (3-row)",
  "category": "suv",
  "priceFrom": 54900,
  "priceTo": 71900,
  "trims": [
   {
    "name": "Light RWD",
    "msrp": 54900
   },
   {
    "name": "GT-Line AWD",
    "msrp": 71900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (76.1 or 99.8 kWh)",
    "hp": 215,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 89,
    "evRangeMi": 230
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (99.8 kWh)",
    "hp": 379,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 84,
    "evRangeMi": 280
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 197.2,
   "widthIn": 77.9,
   "heightIn": 70.1,
   "wheelbaseIn": 122.0,
   "curbWeightLb": 5093,
   "groundClearanceIn": 7.8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.2,
   "cargoMaxCuFt": 81.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "800V ultra-fast charging",
   "Second-row swivel/relaxation seats",
   "Panoramic triple-screen display",
   "Meridian premium audio",
   "Vehicle-to-Load (V2L)",
   "Digital Key 2",
   "Highway Driving Assist 2"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Light Long Range (~304 mi) and mid trims fall between the prices shown; range/MPGe vary by battery and wheels. Base price unchanged from launch; built in Georgia."
 },
 {
  "id": "kia-k4",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "K4",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact sedan",
  "category": "car",
  "priceFrom": 22290,
  "priceTo": 28090,
  "trims": [
   {
    "name": "LX",
    "msrp": 22290
   },
   {
    "name": "Hatchback LXS",
    "msrp": 24890
   },
   {
    "name": "GT-Line Turbo",
    "msrp": 28090
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 147,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 33,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "1.6L turbo I4",
    "hp": 190,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.4,
   "widthIn": 72.8,
   "heightIn": 56.3,
   "wheelbaseIn": 107.1,
   "curbWeightLb": 2956,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 100.8,
   "cargoCuFt": 14.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Nearly 30-inch panoramic display (dual 12.3-inch + 5-inch climate)",
   "Harman Kardon premium audio",
   "Highway Driving Assist 2",
   "Heated & ventilated front seats",
   "Sunroof",
   "Smart key with remote start"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Replaced the Forte (Forte discontinued after 2024). New K4 Hatchback body style joins the line in early 2026 from $24,890. GT-Line Turbo top price approximate (carryover from 2025)."
 },
 {
  "id": "kia-k5",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "K5",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize sedan",
  "category": "car",
  "priceFrom": 27390,
  "priceTo": 34890,
  "trims": [
   {
    "name": "LXS",
    "msrp": 27390
   },
   {
    "name": "EX",
    "msrp": 34890
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 191,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I4 (GT)",
    "hp": 290,
    "transmission": "8-speed DCT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.1,
   "widthIn": 73.2,
   "heightIn": 56.9,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 3230,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 105.3,
   "cargoCuFt": 16.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 12.3-inch panoramic displays",
   "Bose premium audio",
   "Panoramic sunroof",
   "Heated & ventilated front seats",
   "Highway Driving Assist 2",
   "AWD (with 2.5L engine)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Base and top prices derived from published incl.-destination figures (LXS ~$27.4k, EX ~$34.9k excl. freight). Availability of the 290-hp GT trim for 2026 is unclear; Kia's 2026 price list showed EX as the top trim."
 },
 {
  "id": "kia-niro",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "Niro",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact hybrid/electric crossover",
  "category": "suv",
  "priceFrom": 25945,
  "priceTo": 44750,
  "trims": [
   {
    "name": "Hybrid LX",
    "msrp": 25945
   },
   {
    "name": "EV Wind",
    "msrp": 39750
   },
   {
    "name": "EV Wave",
    "msrp": 44750
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "1.6L I4 hybrid",
    "hp": 139,
    "transmission": "6-speed DCT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 53,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Single-motor FWD (64.8 kWh)",
    "hp": 201,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 113,
    "evRangeMi": 253
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 174.0,
   "widthIn": 71.8,
   "heightIn": 60.8,
   "wheelbaseIn": 107.1,
   "curbWeightLb": 3058,
   "groundClearanceIn": 6.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.8,
   "cargoMaxCuFt": 63.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 10.25-inch displays",
   "Harman Kardon premium audio",
   "Heated & ventilated front seats",
   "Power sunroof",
   "Highway Driving Assist",
   "Vehicle-to-Load (Niro EV)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Sold as Niro Hybrid and Niro EV for 2026; the plug-in hybrid no longer appears in the US lineup. Prices derived from published incl.-destination figures. A refreshed 2027 Niro (hybrid-only) has been revealed."
 },
 {
  "id": "kia-seltos",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "Seltos",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 23700,
  "priceTo": 31390,
  "trims": [
   {
    "name": "LX",
    "msrp": 23700
   },
   {
    "name": "SX AWD",
    "msrp": 31390
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 146,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "1.6L turbo I4",
    "hp": 195,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 172.6,
   "widthIn": 70.9,
   "heightIn": 63.4,
   "wheelbaseIn": 103.5,
   "curbWeightLb": 2894,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": 100.9,
   "cargoCuFt": 26.6,
   "cargoMaxCuFt": 62.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 10.25-inch displays",
   "Bose premium audio",
   "Power sunroof",
   "Heated front seats",
   "X-Line appearance package",
   "AWD with center-lock mode"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Carryover generation, slightly cheaper for 2026; prices derived from published incl.-destination figures. An all-new Seltos has been revealed globally and is expected as a 2027 model."
 },
 {
  "id": "kia-sorento",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "Sorento",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV (3-row)",
  "category": "suv",
  "priceFrom": 32190,
  "priceTo": 53490,
  "trims": [
   {
    "name": "LX",
    "msrp": 32190
   },
   {
    "name": "PHEV SX Prestige X-Line",
    "msrp": 53490
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 191,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 281,
    "transmission": "8-speed DCT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "1.6L turbo I4 hybrid",
    "hp": 227,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 36,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "1.6L turbo I4 PHEV (13.8 kWh)",
    "hp": 262,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 79,
    "evRangeMi": 32
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 189.6,
   "widthIn": 74.8,
   "heightIn": 66.7,
   "wheelbaseIn": 110.8,
   "curbWeightLb": 3794,
   "groundClearanceIn": 6.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.6,
   "cargoMaxCuFt": 75.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic dual 12.3-inch displays",
   "Bose premium audio",
   "X-Pro off-road package with all-terrain tires",
   "Second-row captain's chairs",
   "Heated & ventilated seats",
   "Panoramic sunroof",
   "Highway Driving Assist 2"
  ],
  "towingLb": 4500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Smaller 3-row alternative to Telluride. Base/top prices derived from published incl.-destination figures ($33,635 / $54,935 with ~$1,445 freight)."
 },
 {
  "id": "kia-sportage",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "Sportage",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 28690,
  "priceTo": 39590,
  "trims": [
   {
    "name": "LX",
    "msrp": 28690
   },
   {
    "name": "X-Pro Prestige AWD",
    "msrp": 39590
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 187,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "1.6L turbo I4 hybrid",
    "hp": 231,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 43,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "1.6L turbo I4 PHEV (13.8 kWh)",
    "hp": 268,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 84,
    "evRangeMi": 34
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.5,
   "widthIn": 73.4,
   "heightIn": 66.3,
   "wheelbaseIn": 108.5,
   "curbWeightLb": 3373,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": 108.6,
   "cargoCuFt": 39.6,
   "cargoMaxCuFt": 73.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic dual 12.3-inch displays",
   "Harman Kardon premium audio",
   "X-Pro trim with all-terrain tires",
   "Heated & ventilated front seats",
   "Panoramic sunroof",
   "Highway Driving Assist 2",
   "Smart power liftgate"
  ],
  "towingLb": 2500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Refreshed for 2026 (new front/rear styling, larger screen). Class-leading cargo space. priceTo shown is the top gas trim; Hybrid starts in the mid-$30ks and the PHEV tops the range in the mid-$40ks (announced separately)."
 },
 {
  "id": "kia-telluride",
  "make": "Kia",
  "manufacturer": "Hyundai Motor Group",
  "model": "Telluride",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV (3-row)",
  "category": "suv",
  "priceFrom": 36390,
  "priceTo": 53090,
  "trims": [
   {
    "name": "LX",
    "msrp": 36390
   },
   {
    "name": "SX Prestige X-Pro",
    "msrp": 53090
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.8L V6",
    "hp": 291,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.9,
   "widthIn": 78.3,
   "heightIn": 68.9,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4112,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": 157.1,
   "cargoCuFt": 21.0,
   "cargoMaxCuFt": 87.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dual 12.3-inch panoramic displays",
   "Harman Kardon premium audio",
   "X-Line / X-Pro off-road packages",
   "Second-row captain's chairs",
   "Heated & ventilated first and second rows",
   "Dual sunroofs",
   "Highway Driving Assist"
  ],
  "towingLb": 5500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Final year of the first-generation Telluride, sold as a carryover 2026; an all-new Telluride arrives as a 2027 (from $37,795 excl. freight). 2026 prices shown are close to 2025 levels; Kia had not published a full official 2026 price list at time of writing. Full-size spare on some X-Pro configurations."
 },
 {
  "id": "lamborghini-revuelto",
  "make": "Lamborghini",
  "manufacturer": "Volkswagen Group",
  "model": "Revuelto",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "V12 flagship supercar",
  "category": "car",
  "priceFrom": 604363,
  "priceTo": 604363,
  "trims": [
   {
    "name": "Revuelto",
    "msrp": 604363
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "6.5L naturally aspirated V12 + 3 electric motors",
    "hp": 1001,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 6
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 194.0,
   "widthIn": 80.0,
   "heightIn": 45.5,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 4050,
   "groundClearanceIn": 4.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 3.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Scissor doors (standard)",
   "Carbon-fiber exterior packages",
   "Lifting system",
   "Sport seats vs comfort seats",
   "Ad Personam customization program"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Base MSRP from US launch pricing; 2026 pricing reported higher (~$660k+ typical as-configured). Multi-year waitlist."
 },
 {
  "id": "lamborghini-temerario",
  "make": "Lamborghini",
  "manufacturer": "Volkswagen Group",
  "model": "Temerario",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "hybrid supercar",
  "category": "car",
  "priceFrom": 385000,
  "priceTo": 385000,
  "trims": [
   {
    "name": "Temerario",
    "msrp": 385000
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.0L twin-turbo flat-plane V8 + 3 electric motors",
    "hp": 907,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 178.6,
   "widthIn": 78.0,
   "heightIn": 46.7,
   "wheelbaseIn": 104.3,
   "curbWeightLb": 3900,
   "groundClearanceIn": 4.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 3.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Alleggerita lightweight package",
   "Carbon-fiber wheels (~$26,200)",
   "Sport seats",
   "Lifting system",
   "Ad Personam customization"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "New nameplate replacing the Huracan; first US deliveries as 2026 models. 10,000-rpm redline V8. US base price ~$385k per press reports; official MSRP sheet not published."
 },
 {
  "id": "lamborghini-urus",
  "make": "Lamborghini",
  "manufacturer": "Volkswagen Group",
  "model": "Urus",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "super SUV",
  "category": "suv",
  "priceFrom": 262120,
  "priceTo": 262120,
  "trims": [
   {
    "name": "Urus SE",
    "msrp": 262120
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "4.0L twin-turbo V8 plug-in hybrid",
    "hp": 789,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 202.2,
   "widthIn": 79.4,
   "heightIn": 64.5,
   "wheelbaseIn": 118.2,
   "curbWeightLb": 5534,
   "groundClearanceIn": 6.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.8,
   "cargoMaxCuFt": 56.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Akrapovic sport exhaust",
   "23-inch wheels",
   "Bang & Olufsen 3D audio",
   "Rear-seat entertainment",
   "Off-road package",
   "Panoramic roof"
  ],
  "towingLb": 7000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "For 2026 the Urus SE plug-in hybrid is the sole variant (pure-gas Urus S/Performante ended). Price is US launch MSRP; 2026 carryover pricing may be slightly higher. EPA EV range roughly 25-35 mi (not finalized here)."
 },
 {
  "id": "land-rover-defender",
  "make": "Land Rover",
  "manufacturer": "Tata Motors (JLR)",
  "model": "Defender",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize off-road luxury SUV",
  "category": "suv",
  "priceFrom": 63500,
  "priceTo": 168700,
  "trims": [
   {
    "name": "110 S",
    "msrp": 63500
   },
   {
    "name": "130 S",
    "msrp": 73000
   },
   {
    "name": "110 X-Dynamic SE",
    "msrp": 75200
   },
   {
    "name": "90 X-Dynamic SE",
    "msrp": 79900
   },
   {
    "name": "110 V8",
    "msrp": 118300
   },
   {
    "name": "110 OCTA",
    "msrp": 158300
   },
   {
    "name": "110 OCTA Black Edition",
    "msrp": 168700
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (P300)",
    "hp": 296,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo I6 mild hybrid (P400)",
    "hp": 395,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.0L supercharged V8 (P500)",
    "hp": 518,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.4L twin-turbo V8 mild hybrid (OCTA)",
    "hp": 626,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   6,
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 197.6,
   "widthIn": 78.6,
   "heightIn": 77.4,
   "wheelbaseIn": 119.0,
   "curbWeightLb": 5035,
   "groundClearanceIn": 8.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 34.6,
   "cargoMaxCuFt": 78.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Electronic air suspension",
   "Sliding panoramic roof",
   "Third-row seat (110)",
   "Front jump seat (6-seat)",
   "Meridian premium audio",
   "ClearSight rear-view mirror",
   "Advanced off-road capability pack",
   "Towing pack",
   "Deployable roof ladder"
  ],
  "towingLb": 8201,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/88/Land_Rover_Defender_110_First_Edition_2020_-_rear.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "One record covers 90 (2-door), 110 (4-door) and 130 (stretched 8-seat) bodies; dims shown are for the 110 including rear-mounted spare. 2026 brings a light facelift; 90 trim range was thinned. OCTA is the 626-hp performance flagship. P300 base engine availability varies by body."
 },
 {
  "id": "land-rover-discovery",
  "make": "Land Rover",
  "manufacturer": "Tata Motors (JLR)",
  "model": "Discovery",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row luxury SUV",
  "category": "suv",
  "priceFrom": 60200,
  "priceTo": 83500,
  "trims": [
   {
    "name": "P300 S",
    "msrp": 60200
   },
   {
    "name": "P360 Dynamic HSE",
    "msrp": 72500
   },
   {
    "name": "Tempest",
    "msrp": 83500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (P300)",
    "hp": 296,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo I6 mild hybrid (P360)",
    "hp": 355,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.1,
   "widthIn": 78.7,
   "heightIn": 73.5,
   "wheelbaseIn": 115.0,
   "curbWeightLb": 4835,
   "groundClearanceIn": 11.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 9.1,
   "cargoMaxCuFt": 74.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Third-row seating",
   "Electronic air suspension",
   "Meridian premium audio",
   "Head-up display",
   "Advanced Tow Assist",
   "ClearSight rear-view mirror",
   "Panoramic roof",
   "All-terrain Progress Control"
  ],
  "towingLb": 8200,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/1/19/LAND_ROVER_DISCOVERY_%28L462%29_China_%285%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Base and top-of-range prices verified ($60,200-$83,500); mid-trim pricing approximate. Tempest is a new 2026 flagship edition. Cargo figure is behind the third row; 38.9 cu ft behind second row."
 },
 {
  "id": "land-rover-discovery-sport",
  "make": "Land Rover",
  "manufacturer": "Tata Motors (JLR)",
  "model": "Discovery Sport",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 49900,
  "priceTo": 49900,
  "trims": [
   {
    "name": "Landmark Edition",
    "msrp": 49900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (P250)",
    "hp": 246,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 181.0,
   "widthIn": 75.0,
   "heightIn": 67.9,
   "wheelbaseIn": 107.9,
   "curbWeightLb": 4178,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.9,
   "cargoMaxCuFt": 60.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Meridian premium audio",
   "Panoramic roof",
   "360-degree camera",
   "ClearSight rear-view mirror",
   "Heated front seats (standard)",
   "Wireless charging",
   "Gloss-black contrast roof"
  ],
  "towingLb": 4409,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/87/Land_Rover_Discovery_Sport_Sindelfingen_2020_IMG_2407.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Sold as a single well-equipped Landmark Edition for 2026 (option packs available). The formerly optional 5+2 third row is not offered on the 2026 US Landmark. Climate/audio controlled via the 11.4-inch touchscreen and steering-wheel buttons."
 },
 {
  "id": "land-rover-range-rover",
  "make": "Land Rover",
  "manufacturer": "Tata Motors (JLR)",
  "model": "Range Rover",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury SUV",
  "category": "suv",
  "priceFrom": 113300,
  "priceTo": 198900,
  "trims": [
   {
    "name": "SE (P400)",
    "msrp": 113300
   },
   {
    "name": "Autobiography",
    "msrp": 157000
   },
   {
    "name": "SV",
    "msrp": 198900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo I6 mild hybrid (P400)",
    "hp": 395,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "3.0L turbo I6 plug-in hybrid (P550e)",
    "hp": 542,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": 51
   },
   {
    "type": "gas",
    "engine": "4.4L twin-turbo V8 (P530)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.4L twin-turbo V8 (P615, SV)",
    "hp": 606,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.9,
   "widthIn": 80.6,
   "heightIn": 73.6,
   "wheelbaseIn": 118.0,
   "curbWeightLb": 5605,
   "groundClearanceIn": 8.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 40.7,
   "cargoMaxCuFt": 76.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Long-wheelbase with 7 seats or 4-seat Executive rear cabin",
   "Meridian Signature audio",
   "Hot-stone massage seats",
   "All-wheel steering (standard)",
   "Electronic air suspension (standard)",
   "23-inch wheels",
   "SV Bespoke personalization",
   "Rear-seat entertainment"
  ],
  "towingLb": 7716,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/e/eb/LAND_ROVER_RANGE_ROVER_%28L460%29_China.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Base SE price verified at $113,300; Autobiography and SV prices approximate, and SV Black/bespoke builds exceed $230,000. Dims are standard wheelbase; LWB adds 7.9 in. Full-size spare optional. Range Rover Electric not yet on sale for 2026."
 },
 {
  "id": "land-rover-range-rover-evoque",
  "make": "Land Rover",
  "manufacturer": "Tata Motors (JLR)",
  "model": "Range Rover Evoque",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV",
  "category": "suv",
  "priceFrom": 49900,
  "priceTo": 55100,
  "trims": [
   {
    "name": "S",
    "msrp": 49900
   },
   {
    "name": "Dynamic SE",
    "msrp": 52900
   },
   {
    "name": "Autobiography",
    "msrp": 55100
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (P250)",
    "hp": 246,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 172.1,
   "widthIn": 75.0,
   "heightIn": 64.9,
   "wheelbaseIn": 105.6,
   "curbWeightLb": 3935,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.5,
   "cargoMaxCuFt": 50.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Panoramic roof",
   "Meridian premium audio",
   "360-degree camera",
   "ClearSight rear-view mirror",
   "20-inch wheels",
   "Heated windscreen",
   "Wireless charging"
  ],
  "towingLb": 3968,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/d/d2/Range_Rover_Evoque_%28L551%29_IMG_2660.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Mid-trim price approximate; base and top verified ($49,900-$55,100). Climate and audio run through the single 11.4-inch touchscreen with steering-wheel buttons."
 },
 {
  "id": "land-rover-range-rover-sport",
  "make": "Land Rover",
  "manufacturer": "Tata Motors (JLR)",
  "model": "Range Rover Sport",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury performance SUV",
  "category": "suv",
  "priceFrom": 83700,
  "priceTo": 169500,
  "trims": [
   {
    "name": "SE",
    "msrp": 83700
   },
   {
    "name": "Dynamic SE",
    "msrp": 90800
   },
   {
    "name": "Autobiography",
    "msrp": 118700
   },
   {
    "name": "SV",
    "msrp": 152000
   },
   {
    "name": "SV Black",
    "msrp": 161600
   },
   {
    "name": "SV Carbon",
    "msrp": 169500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo I6 mild hybrid (P360)",
    "hp": 355,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo I6 mild hybrid (P400)",
    "hp": 395,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "3.0L turbo I6 plug-in hybrid (P460e)",
    "hp": 454,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": 53
   },
   {
    "type": "gas",
    "engine": "4.4L twin-turbo V8 mild hybrid (P635, SV)",
    "hp": 626,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.7,
   "widthIn": 80.6,
   "heightIn": 71.0,
   "wheelbaseIn": 118.0,
   "curbWeightLb": 5090,
   "groundClearanceIn": 8.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 31.9,
   "cargoMaxCuFt": 62.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Stormer Handling Pack (SV)",
   "Carbon-ceramic brakes",
   "Meridian Signature audio",
   "Head-up display",
   "23-inch carbon-fiber wheels",
   "All-terrain Progress Control",
   "Massage front seats",
   "Electronic air suspension (standard)"
  ],
  "towingLb": 7716,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/06/Land_Rover_Range_Rover_Sport_L461_Varesine_Blue_%2810%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "2026 drops the former base S trim; SE now opens the range. Climate is controlled through the curved touchscreen (no physical dials). Full-size spare optional."
 },
 {
  "id": "land-rover-range-rover-velar",
  "make": "Land Rover",
  "manufacturer": "Tata Motors (JLR)",
  "model": "Range Rover Velar",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact-midsize luxury SUV",
  "category": "suv",
  "priceFrom": 61600,
  "priceTo": 78900,
  "trims": [
   {
    "name": "P250 S",
    "msrp": 61600
   },
   {
    "name": "P400 Dynamic SE",
    "msrp": 70800
   },
   {
    "name": "P400 Autobiography",
    "msrp": 78900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (P250)",
    "hp": 247,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L turbo I6 mild hybrid (P400)",
    "hp": 395,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 189.2,
   "widthIn": 76.0,
   "heightIn": 65.6,
   "wheelbaseIn": 113.1,
   "curbWeightLb": 4471,
   "groundClearanceIn": 8.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.4,
   "cargoMaxCuFt": 60.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Electronic air suspension",
   "Meridian premium audio",
   "Head-up display",
   "Panoramic roof",
   "22-inch wheels",
   "Ventilated massage front seats",
   "ClearSight rear-view mirror"
  ],
  "towingLb": 5512,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/60/Range_Rover_Velar_P250_SE_IMG_8831.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Sources conflict on the 2026 base price ($61,600 vs $68,050 for P250 S); lower figure used. Single floating touchscreen handles climate/audio; steering-wheel buttons for volume. Expected to be replaced by an electric successor."
 },
 {
  "id": "lexus-es",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "ES",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury sedan",
  "category": "car",
  "priceFrom": 47500,
  "priceTo": 58900,
  "trims": [
   {
    "name": "ES 350e Premium",
    "msrp": 47500
   },
   {
    "name": "ES 350h Premium",
    "msrp": 49700
   },
   {
    "name": "ES 500e Premium",
    "msrp": 50500
   },
   {
    "name": "ES 500e Luxury",
    "msrp": 58900
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid (ES 350h)",
    "hp": 268,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 43,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Single-motor FWD (ES 350e)",
    "hp": 221,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 300
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (ES 500e)",
    "hp": 338,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 250
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 197.4,
   "widthIn": 75.2,
   "heightIn": 59.1,
   "wheelbaseIn": 115.7,
   "curbWeightLb": 4000,
   "groundClearanceIn": 5.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Choice of hybrid or full EV",
   "14-inch touchscreen",
   "Mark Levinson audio",
   "Panoramic roof",
   "Rear-seat luxury package",
   "Heated & ventilated seats",
   "Hidden 'Bamboo' interior lighting"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new eighth-generation ES for 2026, larger and offered as hybrid (ES 350h) or EV (ES 350e/500e) - the first electric ES. Prices derived from published figures minus $1,295 destination. EV range figures approximate pending final EPA numbers. Many controls moved to touch panels; volume knob retained."
 },
 {
  "id": "lexus-gx",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "GX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury off-road SUV",
  "category": "suv",
  "priceFrom": 66285,
  "priceTo": 82750,
  "trims": [
   {
    "name": "GX 550 Premium",
    "msrp": 66285
   },
   {
    "name": "GX 550 Overtrail",
    "msrp": 71710
   },
   {
    "name": "GX 550 Luxury+",
    "msrp": 82750
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.4L twin-turbo V6",
    "hp": 349,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 197.1,
   "widthIn": 77.9,
   "heightIn": 76.5,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 5455,
   "groundClearanceIn": 8.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 40.2,
   "cargoMaxCuFt": 76.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Overtrail trim with 33-inch tires & locking diffs",
   "E-KDSS stabilizer disconnect",
   "Mark Levinson audio",
   "Crawl Control & Multi-Terrain Select",
   "Panoramic roof",
   "Third-row seat (Premium/Luxury)"
  ],
  "towingLb": 9063,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Body-on-frame off-road luxury SUV sharing the Land Cruiser platform. 2026 base and top prices verified (ex-$1,450 destination); Overtrail figure approximate. Overtrail is a two-row; other trims offer 7 seats."
 },
 {
  "id": "lexus-is",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "IS",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sports sedan",
  "category": "car",
  "priceFrom": 45400,
  "priceTo": 59990,
  "trims": [
   {
    "name": "IS 350 F Sport Design",
    "msrp": 45400
   },
   {
    "name": "IS 350 F Sport",
    "msrp": 47950
   },
   {
    "name": "IS 350 F Sport AWD",
    "msrp": 49950
   },
   {
    "name": "IS 350 F Sport Special Appearance",
    "msrp": 59990
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 311,
    "transmission": "8-speed automatic (RWD) / 6-speed automatic (AWD)",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.4,
   "widthIn": 72.4,
   "heightIn": 56.5,
   "wheelbaseIn": 110.2,
   "curbWeightLb": 3880,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": 84.1,
   "cargoCuFt": 10.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Mark Levinson audio",
   "Adaptive variable suspension (F Sport)",
   "12.3-inch touchscreen (new for 2026)",
   "Heated & ventilated front seats",
   "Limited-run Special Appearance Package with matte paint"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 refresh: new front styling, larger 12.3-inch screens, physical climate row. IS 300 and V8 IS 500 dropped for 2026; lineup is IS 350 only. Some trim price figures vary slightly between sources."
 },
 {
  "id": "lexus-lc",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "LC",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "luxury grand tourer",
  "category": "car",
  "priceFrom": 101050,
  "priceTo": 113250,
  "trims": [
   {
    "name": "LC 500 Coupe",
    "msrp": 101050
   },
   {
    "name": "LC 500h",
    "msrp": 104350
   },
   {
    "name": "LC 500 Convertible",
    "msrp": 110450
   },
   {
    "name": "LC 500 Convertible Bespoke Build",
    "msrp": 113250
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "5.0L V8",
    "hp": 471,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.5L V6 multi-stage hybrid (LC 500h)",
    "hp": 354,
    "transmission": "Multi-stage eCVT",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 187.4,
   "widthIn": 75.6,
   "heightIn": 53.0,
   "wheelbaseIn": 113.0,
   "curbWeightLb": 4340,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 5.4,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Convertible bodystyle",
   "Bespoke Build program",
   "Mark Levinson audio",
   "Carbon-fiber roof (coupe)",
   "Sport package with rear steering",
   "New Limited series & special paints for 2026"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "471-hp V8 coupe/convertible plus 354-hp hybrid coupe. 2026 adds a Limited series and new colors. Sources conflict on exact 2026 base MSRPs (roughly $101k-$109k); figures shown are best estimates - verify before quoting."
 },
 {
  "id": "lexus-ls",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "LS",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury sedan",
  "category": "car",
  "priceFrom": 97930,
  "priceTo": 97930,
  "trims": [
   {
    "name": "LS 500 Heritage Edition",
    "msrp": 97930
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 416,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 206.1,
   "widthIn": 74.8,
   "heightIn": 57.1,
   "wheelbaseIn": 123.0,
   "curbWeightLb": 4750,
   "groundClearanceIn": 5.7
  },
  "interior": {
   "passengerVolumeCuFt": 98.9,
   "cargoCuFt": 17.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Heritage Edition exclusive trim (250 units)",
   "Mark Levinson audio",
   "Kiriko glass & hand-pleated door trim",
   "Massaging rear seats",
   "Air suspension",
   "Head-up display"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Final model year for the LS in the US after a 36-year run; sold only as the LS 500 Heritage Edition limited to 250 units (about $99,280 with destination). Base MSRP shown is ex-destination approximation."
 },
 {
  "id": "lexus-lx",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "LX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury off-road SUV",
  "category": "suv",
  "priceFrom": 92100,
  "priceTo": 141000,
  "trims": [
   {
    "name": "LX 600",
    "msrp": 92100
   },
   {
    "name": "LX 700h Overtrail",
    "msrp": 115235
   },
   {
    "name": "LX 700h Ultra Luxury",
    "msrp": 141000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.4L twin-turbo V6 (LX 600)",
    "hp": 409,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.4L twin-turbo V6 hybrid (LX 700h)",
    "hp": 457,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 200.6,
   "widthIn": 78.4,
   "heightIn": 74.6,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 5665,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 44.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "LX 700h hybrid (457 hp)",
   "Overtrail off-road trim with locking diffs",
   "4-seat Ultra Luxury with reclining rear thrones",
   "Mark Levinson audio",
   "Adaptive variable suspension with AHC",
   "Cool box"
  ],
  "towingLb": 8000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Flagship Lexus SUV on the Land Cruiser 300 platform. LX 600 base about $92,100; LX 700h hybrid from about $115,235 (Overtrail) to about $141,000 (Ultra Luxury) ex-destination - figures from secondary sources, verify before quoting."
 },
 {
  "id": "lexus-nx",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "NX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 44825,
  "priceTo": 62830,
  "trims": [
   {
    "name": "NX 350",
    "msrp": 44825
   },
   {
    "name": "NX 350h",
    "msrp": 45700
   },
   {
    "name": "NX 450h+ F Sport Handling",
    "msrp": 62830
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo I4 (NX 350)",
    "hp": 275,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid (NX 350h)",
    "hp": 240,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 39,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.5L I4 plug-in hybrid (NX 450h+)",
    "hp": 302,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 84,
    "evRangeMi": 37
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.5,
   "widthIn": 73.4,
   "heightIn": 65.8,
   "wheelbaseIn": 105.9,
   "curbWeightLb": 4050,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.7,
   "cargoMaxCuFt": 46.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Plug-in hybrid with 37-mile EV range",
   "Mark Levinson audio",
   "Head-up display",
   "Panoramic roof",
   "Digital key",
   "14-inch touchscreen",
   "Advanced Park"
  ],
  "towingLb": 2000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Base NX 250 dropped for 2026; lineup now starts with NX 350 (about $44,825 ex-destination). NX 350h price estimated near base. Top NX 450h+ F Sport Handling about $62,830 ex-destination."
 },
 {
  "id": "lexus-rc",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "RC",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "luxury sports coupe",
  "category": "car",
  "priceFrom": 45970,
  "priceTo": 92745,
  "trims": [
   {
    "name": "RC 300",
    "msrp": 45970
   },
   {
    "name": "RC 350 F Sport",
    "msrp": 51780
   },
   {
    "name": "RC F Final Edition",
    "msrp": 92745
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (RC 300)",
    "hp": 241,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L V6 (RC 350)",
    "hp": 311,
    "transmission": "8-speed automatic (RWD) / 6-speed automatic (AWD)",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.0L V8 (RC F)",
    "hp": 472,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 184.8,
   "widthIn": 72.4,
   "heightIn": 54.9,
   "wheelbaseIn": 107.5,
   "curbWeightLb": 3750,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": 78.5,
   "cargoCuFt": 10.4,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "RC F Final Edition with BBS wheels & carbon roof",
   "Mark Levinson audio",
   "Adaptive variable suspension (F Sport)",
   "Heated & ventilated seats",
   "Limited-slip differential (RC F)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Final model year for the RC coupe in the US; RC F offered only as the Final Edition. 2026 trim prices are 2025-based carryover estimates - verify before quoting."
 },
 {
  "id": "lexus-rx",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "RX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 49725,
  "priceTo": 70910,
  "trims": [
   {
    "name": "RX 350",
    "msrp": 49725
   },
   {
    "name": "RX 350h",
    "msrp": 51525
   },
   {
    "name": "RX 500h F Sport Performance",
    "msrp": 65080
   },
   {
    "name": "RX 450h+ Luxury",
    "msrp": 70910
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo I4 (RX 350)",
    "hp": 275,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid (RX 350h)",
    "hp": 250,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 36,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.5L I4 plug-in hybrid (RX 450h+)",
    "hp": 304,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 83,
    "evRangeMi": 37
   },
   {
    "type": "hybrid",
    "engine": "2.4L turbo I4 performance hybrid (RX 500h)",
    "hp": 366,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.5,
   "widthIn": 75.6,
   "heightIn": 67.3,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4155,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 29.6,
   "cargoMaxCuFt": 46.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Four powertrains incl. 37-mi plug-in hybrid",
   "Mark Levinson audio",
   "Panoramic roof",
   "Head-up display",
   "Heated & ventilated seats",
   "Digital key",
   "Advanced Park"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Best-selling Lexus. RX 350 base $49,725 (ex-destination) verified for 2026; hybrid and top-trim prices estimated from carryover ladder. RX 450h+ plug-in offers about 37 miles EV range."
 },
 {
  "id": "lexus-rz",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "RZ",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury electric SUV",
  "category": "suv",
  "priceFrom": 47295,
  "priceTo": 58295,
  "trims": [
   {
    "name": "RZ 350e",
    "msrp": 47295
   },
   {
    "name": "RZ 350e Premium",
    "msrp": 49495
   },
   {
    "name": "RZ 450e Premium AWD",
    "msrp": 52995
   },
   {
    "name": "RZ 550e F Sport",
    "msrp": 58295
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD (RZ 350e)",
    "hp": 224,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 302
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (RZ 450e / 550e)",
    "hp": 313,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 260
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 189.2,
   "widthIn": 74.6,
   "heightIn": 64.4,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4600,
   "groundClearanceIn": 6.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 34.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "NACS charge port (new for 2026)",
   "550e F Sport with 402 hp and simulated M-Mode shifts",
   "Dimmable panoramic roof",
   "Mark Levinson audio",
   "Radiant knee heaters",
   "Advanced Park"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Significantly updated for 2026: bigger battery, NACS port, new RZ 350e (up to about 300 mi) and 402-hp RZ 550e F Sport flagship. Trim prices from KBB listings; whether they exclude the $1,175 destination fee was not fully confirmed. Range figures approximate."
 },
 {
  "id": "lexus-tx",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "TX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row luxury SUV",
  "category": "suv",
  "priceFrom": 56840,
  "priceTo": 80610,
  "trims": [
   {
    "name": "TX 350",
    "msrp": 56840
   },
   {
    "name": "TX 500h F Sport Performance",
    "msrp": 71000
   },
   {
    "name": "TX 550h+ Luxury",
    "msrp": 80610
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo I4 (TX 350)",
    "hp": 275,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.4L turbo I4 hybrid (TX 500h)",
    "hp": 366,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "3.5L V6 plug-in hybrid (TX 550h+)",
    "hp": 404,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 76,
    "evRangeMi": 33
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 203.1,
   "widthIn": 78.3,
   "heightIn": 70.1,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4730,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.2,
   "cargoMaxCuFt": 97.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Adult-friendly third row",
   "Plug-in hybrid TX 550h+ (33-mi EV range)",
   "Mark Levinson audio",
   "Panoramic roof",
   "Second-row captain's chairs",
   "Digital rearview mirror",
   "Head-up display"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Three-row Lexus based on the Grand Highlander platform. Sources conflict on the 2026 TX 350 base MSRP (about $56,840-$59,490 ex-destination); mid figures shown are estimates. TX 550h+ PHEV sold in limited volume."
 },
 {
  "id": "lexus-ux",
  "make": "Lexus",
  "manufacturer": "Toyota Motor Corporation",
  "model": "UX",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV",
  "category": "suv",
  "priceFrom": 36955,
  "priceTo": 45560,
  "trims": [
   {
    "name": "UX 300h",
    "msrp": 36955
   },
   {
    "name": "UX 300h Premium",
    "msrp": 38930
   },
   {
    "name": "UX 300h F Sport Handling",
    "msrp": 45560
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.0L I4 hybrid",
    "hp": 196,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 43,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 177.0,
   "widthIn": 72.4,
   "heightIn": 59.8,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3605,
   "groundClearanceIn": 6.4
  },
  "interior": {
   "passengerVolumeCuFt": 84.0,
   "cargoCuFt": 17.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Electronic on-demand AWD",
   "F Sport Handling with adaptive dampers",
   "Mark Levinson audio",
   "Head-up display",
   "Heated & ventilated front seats",
   "12.3-inch touchscreen"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Hybrid-only (UX 300h, 196 hp) since 2025. Base and Premium 2026 prices verified (ex-$1,295 destination); F Sport Handling top price estimated. Smallest Lexus crossover."
 },
 {
  "id": "lincoln-aviator",
  "make": "Lincoln",
  "manufacturer": "Ford Motor Company",
  "model": "Aviator",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row luxury SUV",
  "category": "suv",
  "priceFrom": 56910,
  "priceTo": 85910,
  "trims": [
   {
    "name": "Premiere",
    "msrp": 56910
   },
   {
    "name": "Reserve",
    "msrp": 66730
   },
   {
    "name": "Black Label",
    "msrp": 85910
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6",
    "hp": 400,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 199.3,
   "widthIn": 79.6,
   "heightIn": 69.8,
   "wheelbaseIn": 119.1,
   "curbWeightLb": 4774,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 18.3,
   "cargoMaxCuFt": 77.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "BlueCruise hands-free highway driving",
   "Air Glide adaptive air suspension",
   "28-speaker Revel Ultima 3D audio",
   "30-way Perfect Position massaging seats",
   "Panoramic Vista Roof",
   "Soft-close doors (Black Label)",
   "Adaptive pixel LED headlights"
  ],
  "towingLb": 6700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/d/de/2020_Lincoln_Aviator_Reserve_AWD%2C_front_left%2C_10-28-2022.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Gas V6 only since the Grand Touring PHEV was dropped. RWD standard on Premiere/Reserve; AWD standard on Black Label. Most climate functions in the touchscreen."
 },
 {
  "id": "lincoln-corsair",
  "make": "Lincoln",
  "manufacturer": "Ford Motor Company",
  "model": "Corsair",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 39985,
  "priceTo": 54365,
  "trims": [
   {
    "name": "Premiere",
    "msrp": 39985
   },
   {
    "name": "Reserve",
    "msrp": 47640
   },
   {
    "name": "Grand Touring (PHEV)",
    "msrp": 54365
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 250,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.5L I4 plug-in hybrid (Grand Touring)",
    "hp": 266,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 78,
    "evRangeMi": 27
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 180.6,
   "widthIn": 74.3,
   "heightIn": 64.1,
   "wheelbaseIn": 106.7,
   "curbWeightLb": 3708,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.6,
   "cargoMaxCuFt": 57.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Lincoln Co-Pilot360 with ActiveGlide/BlueCruise",
   "Panoramic Vista Roof",
   "24-way Perfect Position massaging seats",
   "Revel 14-speaker audio",
   "360-degree camera",
   "Head-up display",
   "Phone As A Key"
  ],
  "towingLb": 3000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/d/d7/Lincoln_Corsair_facelift_002.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Final model year: Corsair production ends alongside the Ford Escape as the Louisville plant converts to EV production. Grand Touring PHEV: 27-mile electric range. Climate is controlled mainly through the 13.2-inch touchscreen."
 },
 {
  "id": "lincoln-nautilus",
  "make": "Lincoln",
  "manufacturer": "Ford Motor Company",
  "model": "Nautilus",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 53995,
  "priceTo": 77130,
  "trims": [
   {
    "name": "Premiere",
    "msrp": 53995
   },
   {
    "name": "Reserve",
    "msrp": 63180
   },
   {
    "name": "Black Label",
    "msrp": 77130
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 250,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.0L turbo I4 hybrid",
    "hp": 310,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.4,
   "widthIn": 78.2,
   "heightIn": 68.2,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4534,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "48-inch panoramic coast-to-coast display (standard)",
   "BlueCruise hands-free highway driving",
   "28-speaker Revel Ultima 3D audio",
   "24-way Perfect Position massaging seats",
   "Panoramic Vista Roof",
   "Lincoln Rejuvenate spa mode",
   "Black Label curated themes (new Aurora theme for 2026)"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/2c/2024_Lincoln_Nautilus_Reserve_III%2C_front_right%2C_03-15-2026.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Pricing carried over unchanged from 2025 per Ford Authority. Hybrid available on every trim (~$1,500-2,000 upcharge). AWD standard. Nearly all controls run through the 48-inch display plus center touchscreen; volume knob retained."
 },
 {
  "id": "lincoln-navigator",
  "make": "Lincoln",
  "manufacturer": "Ford Motor Company",
  "model": "Navigator",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury SUV",
  "category": "suv",
  "priceFrom": 91995,
  "priceTo": 121995,
  "trims": [
   {
    "name": "Premiere",
    "msrp": 91995
   },
   {
    "name": "Reserve",
    "msrp": 101995
   },
   {
    "name": "Black Label",
    "msrp": 118995
   },
   {
    "name": "Black Label L",
    "msrp": 121995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 440,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.0,
   "widthIn": 79.9,
   "heightIn": 77.6,
   "wheelbaseIn": 122.5,
   "curbWeightLb": 6100,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "48-inch panoramic display with BlueCruise",
   "Lincoln Rejuvenate spa experience",
   "28-speaker Revel Ultima 3D audio",
   "30-way Perfect Position massaging seats",
   "Power split-gate tailgate with tailgate seating",
   "Second-row console with entertainment displays",
   "Black Label curated themes and concierge perks"
  ],
  "towingLb": 8700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/28/2025_Lincoln_Navigator%2C_front_5.16.25.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Redesigned generation launched for 2025; base Premiere trim added for 2026, cutting the entry price by ~$8,000. Extended-length Navigator L versions run ~$2,000-3,000 more per trim (Premiere L $93,995, Reserve L $104,995). Destination fee $2,595. 4WD standard."
 },
 {
  "id": "lotus-emira",
  "make": "Lotus",
  "manufacturer": "Geely Holding (Lotus)",
  "model": "Emira",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 109400,
  "priceTo": 118400,
  "trims": [
   {
    "name": "Turbo SE",
    "msrp": 109400
   },
   {
    "name": "V6 SE",
    "msrp": 112900
   },
   {
    "name": "V6 SE Racing Line",
    "msrp": 118400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (AMG-sourced)",
    "hp": 400,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.5L supercharged V6 (Toyota-sourced)",
    "hp": 400,
    "transmission": "6-speed manual",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 173.8,
   "widthIn": 74.6,
   "heightIn": 48.0,
   "wheelbaseIn": 101.4,
   "curbWeightLb": 3212,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 7.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Tour vs Sport suspension setting",
   "Track Pack (Sport suspension, Cup 2 tires)",
   "KEF premium audio",
   "Design Pack",
   "Convenience Pack"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Lotus's only US model for 2026 -- the Eletre and Emeya EVs are not sold in the US (China-built EV tariffs shelved the US launch). V6 offers a 6-speed manual; 420-hp Emira 420 Sport announced for later in 2026. V6 SE mid-trim price approximate."
 },
 {
  "id": "lucid-air",
  "make": "Lucid",
  "manufacturer": "Lucid Group",
  "model": "Air",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury EV sedan",
  "category": "car",
  "priceFrom": 70900,
  "priceTo": 249000,
  "trims": [
   {
    "name": "Pure",
    "msrp": 70900
   },
   {
    "name": "Touring",
    "msrp": 79900
   },
   {
    "name": "Grand Touring",
    "msrp": 114900
   },
   {
    "name": "Sapphire",
    "msrp": 249000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (Pure)",
    "hp": 430,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 140,
    "evRangeMi": 420
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Touring/Grand Touring)",
    "hp": 819,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 130,
    "evRangeMi": 512
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (Sapphire)",
    "hp": 1234,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 118,
    "evRangeMi": 427
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.9,
   "widthIn": 76.2,
   "heightIn": 55.4,
   "wheelbaseIn": 116.5,
   "curbWeightLb": 4564,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Glass Canopy roof",
   "DreamDrive Pro driver assistance (lidar)",
   "21-speaker Surreal Sound Pro audio",
   "Massaging front seats (Grand Touring)",
   "10.1 cu-ft frunk",
   "20/21-inch aero wheels",
   "Heated & ventilated front seats"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/f/f3/Lucid_Air_Grand_Touring_-_front.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Range/hp vary widely by trim: Pure 430 hp/420 mi, Touring 620 hp/431 mi, Grand Touring 819 hp/512 mi (longest-range EV on sale), Sapphire 1,234 hp/427 mi. Cargo figure is rear trunk; frunk adds 10.1 cu ft. Volume and most climate functions are touchscreen-based with a steering-wheel volume roller."
 },
 {
  "id": "lucid-gravity",
  "make": "Lucid",
  "manufacturer": "Lucid Group",
  "model": "Gravity",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury electric 3-row SUV",
  "category": "suv",
  "priceFrom": 79900,
  "priceTo": 94900,
  "trims": [
   {
    "name": "Touring",
    "msrp": 79900
   },
   {
    "name": "Grand Touring",
    "msrp": 94900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 828,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 115,
    "evRangeMi": 450
   }
  ],
  "seats": [
   5,
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.2,
   "widthIn": 78.6,
   "heightIn": 65.4,
   "wheelbaseIn": 119.5,
   "curbWeightLb": 5966,
   "groundClearanceIn": 6.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15.7,
   "cargoMaxCuFt": 112.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Optional 3rd row (up to 7 seats)",
   "Air suspension",
   "926V architecture with up to 400 kW DC charging",
   "DreamDrive Pro driver assistance",
   "Panoramic windshield/glass roof",
   "Tow package (up to 6,000 lb)",
   "Front trunk with seat cushion 'tailgating' mode"
  ],
  "towingLb": 6000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/07/Lucid_Gravity_European_Premiere%2C_Munich_%2820250909-P1050533%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Touring (560 hp, 337 mi EPA) joined the original Grand Touring (828 hp, up to 450 mi) for 2026. Cargo figure is behind 3rd row in 7-seat config; max is all seats folded including frunk. Ground clearance adjustable via air suspension."
 },
 {
  "id": "maserati-grancabrio",
  "make": "Maserati",
  "manufacturer": "Stellantis",
  "model": "GranCabrio",
  "year": 2026,
  "bodyStyle": "convertible",
  "segment": "grand touring convertible",
  "category": "car",
  "priceFrom": 169595,
  "priceTo": 209195,
  "trims": [
   {
    "name": "Modena",
    "msrp": 169595
   },
   {
    "name": "Trofeo",
    "msrp": 199000
   },
   {
    "name": "Folgore",
    "msrp": 209195
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 (Nettuno)",
    "hp": 490,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (Folgore)",
    "hp": 751,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 195.2,
   "widthIn": 77.0,
   "heightIn": 53.5,
   "wheelbaseIn": 115.3,
   "curbWeightLb": 4200,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 6.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Neck warmers",
   "Wind deflector",
   "Sonus faber 3D audio",
   "Carbon-ceramic brakes",
   "ADAS Level 2 package"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Convertible version of the GranTurismo; fabric soft top. Base and Folgore prices verified (KBB); Trofeo price approximate."
 },
 {
  "id": "maserati-granturismo",
  "make": "Maserati",
  "manufacturer": "Stellantis",
  "model": "GranTurismo",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "grand touring coupe",
  "category": "car",
  "priceFrom": 158200,
  "priceTo": 197195,
  "trims": [
   {
    "name": "Modena",
    "msrp": 158200
   },
   {
    "name": "Trofeo",
    "msrp": 189350
   },
   {
    "name": "Folgore",
    "msrp": 197195
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 (Nettuno)",
    "hp": 490,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 (Trofeo)",
    "hp": 542,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (Folgore)",
    "hp": 751,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 195.2,
   "widthIn": 77.0,
   "heightIn": 53.3,
   "wheelbaseIn": 115.3,
   "curbWeightLb": 3957,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 10.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Sonus faber 3D audio",
   "Carbon-ceramic brakes",
   "ADAS Level 2 package",
   "Carbon-fiber trim",
   "Ventilated comfort seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "2+2 grand tourer; Folgore is the all-electric version (~750 hp, 92.5-kWh battery). 2026 US prices verified via TrueCar/KBB."
 },
 {
  "id": "maserati-grecale",
  "make": "Maserati",
  "manufacturer": "Stellantis",
  "model": "Grecale",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 84500,
  "priceTo": 117500,
  "trims": [
   {
    "name": "Modena",
    "msrp": 84500
   },
   {
    "name": "Trofeo",
    "msrp": 117500
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.0L I4 mild-hybrid turbo",
    "hp": 325,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 (Trofeo)",
    "hp": 523,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 191.3,
   "widthIn": 76.7,
   "heightIn": 65.2,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4144,
   "groundClearanceIn": 7.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Sonus faber premium audio",
   "Panoramic sunroof",
   "Air suspension",
   "21-inch wheels",
   "Level 2 driver assistance package",
   "Ventilated front seats"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 US lineup trimmed to Modena and Trofeo (base GT dropped); Grecale Folgore EV availability in the US for 2026 is uncertain. Climate and most controls are touchscreen-based."
 },
 {
  "id": "maserati-mcpura",
  "make": "Maserati",
  "manufacturer": "Stellantis",
  "model": "MCPura",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "mid-engine supercar",
  "category": "car",
  "priceFrom": 239000,
  "priceTo": 265000,
  "trims": [
   {
    "name": "MCPura",
    "msrp": 239000
   },
   {
    "name": "MCPura Cielo",
    "msrp": 265000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 (Nettuno)",
    "hp": 621,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 184.6,
   "widthIn": 77.3,
   "heightIn": 47.9,
   "wheelbaseIn": 106.3,
   "curbWeightLb": 3306,
   "groundClearanceIn": 4.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 5.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Butterfly doors (standard)",
   "Carbon-ceramic brakes",
   "Electrochromic glass roof (Cielo)",
   "Carbon-fiber exterior packs",
   "Front axle lifter",
   "Sonus faber audio"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Refreshed and renamed from MC20 for 2026 (MCPura coupe and Cielo retractable-roof convertible). US MSRPs estimated from outgoing MC20 pricing; official 2026 US prices pending."
 },
 {
  "id": "mazda-cx-30",
  "make": "Mazda",
  "manufacturer": "Mazda Motor Corporation",
  "model": "CX-30",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 26375,
  "priceTo": 37900,
  "trims": [
   {
    "name": "2.5 S",
    "msrp": 26375
   },
   {
    "name": "2.5 S Select Sport",
    "msrp": 28060
   },
   {
    "name": "2.5 S Preferred",
    "msrp": 29690
   },
   {
    "name": "2.5 Carbon Edition",
    "msrp": 31430
   },
   {
    "name": "2.5 S Premium",
    "msrp": 33640
   },
   {
    "name": "2.5 Turbo Premium Plus",
    "msrp": 37900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 191,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 250,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 173.0,
   "widthIn": 70.7,
   "heightIn": 61.7,
   "wheelbaseIn": 104.4,
   "curbWeightLb": 3375,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.2,
   "cargoMaxCuFt": 45.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "2.5 Turbo engine (250 hp on premium fuel)",
   "Bose 12-speaker audio",
   "White leather interior (Premium Plus)",
   "Power moonroof",
   "360-degree View Monitor",
   "Head-up Active Driving Display"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Mazda%20CX-30%20(DM)%20Washington%20DC%20Metro%20Area,%20USA%20(2).jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "i-Activ AWD standard on every trim. Turbo makes 250 hp on 93-octane / 227 hp on 87-octane."
 },
 {
  "id": "mazda-cx-5",
  "make": "Mazda",
  "manufacturer": "Mazda Motor Corporation",
  "model": "CX-5",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 29990,
  "priceTo": 38990,
  "trims": [
   {
    "name": "2.5 S",
    "msrp": 29990
   },
   {
    "name": "2.5 S Select",
    "msrp": 31990
   },
   {
    "name": "2.5 S Preferred",
    "msrp": 34250
   },
   {
    "name": "2.5 S Premium",
    "msrp": 36900
   },
   {
    "name": "2.5 S Premium Plus",
    "msrp": 38990
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 187,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.6,
   "widthIn": 73.2,
   "heightIn": 66.7,
   "wheelbaseIn": null,
   "curbWeightLb": null,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 33.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "15.6-inch touchscreen with Google built-in",
   "Panoramic sunroof",
   "Bose premium audio",
   "Ventilated front seats",
   "360-degree View Monitor",
   "Power liftgate"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new third generation for 2026, on sale from early 2026; larger than before, AWD standard, single 187-hp powertrain at launch (Skyactiv-Z hybrid expected for 2027). New touchscreen-centric cabin drops Mazda's rotary commander and physical climate knobs. Wheelbase/curb weight not yet in this dataset; some published specs still preliminary."
 },
 {
  "id": "mazda-cx-50",
  "make": "Mazda",
  "manufacturer": "Mazda Motor Corporation",
  "model": "CX-50",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 29990,
  "priceTo": 42900,
  "trims": [
   {
    "name": "2.5 S Select",
    "msrp": 29990
   },
   {
    "name": "2.5 S Preferred",
    "msrp": 32400
   },
   {
    "name": "2.5 S Meridian Edition",
    "msrp": 33150
   },
   {
    "name": "Hybrid Preferred",
    "msrp": 34750
   },
   {
    "name": "2.5 S Premium",
    "msrp": 34900
   },
   {
    "name": "2.5 Turbo",
    "msrp": 37900
   },
   {
    "name": "Hybrid Premium",
    "msrp": 38150
   },
   {
    "name": "Hybrid Premium Plus",
    "msrp": 40150
   },
   {
    "name": "2.5 Turbo Premium Plus",
    "msrp": 42900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 187,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 256,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid (Toyota-sourced system)",
    "hp": 219,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 38,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.8,
   "widthIn": 72.9,
   "heightIn": 63.9,
   "wheelbaseIn": 110.8,
   "curbWeightLb": 3907,
   "groundClearanceIn": 8.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 31.4,
   "cargoMaxCuFt": 56.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Hybrid powertrain (38 mpg combined)",
   "2.5 Turbo (256 hp on premium fuel)",
   "Meridian Edition with all-terrain tires",
   "Panoramic moonroof",
   "Bose 12-speaker audio",
   "Ventilated front seats",
   "Full-color head-up display"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/MAZDA%20CX-50%20China.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "AWD standard. Towing: 3,500 lb with Turbo, 2,000 lb NA gas, 1,500 lb Hybrid. Turbo makes 256 hp on 93-octane / 227 hp on 87-octane. Built in Alabama alongside Toyota."
 },
 {
  "id": "mazda-cx-70",
  "make": "Mazda",
  "manufacturer": "Mazda Motor Corporation",
  "model": "CX-70",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 2-row SUV",
  "category": "suv",
  "priceFrom": 42750,
  "priceTo": 56870,
  "trims": [
   {
    "name": "3.3 Turbo Preferred",
    "msrp": 42750
   },
   {
    "name": "PHEV SC",
    "msrp": 44450
   },
   {
    "name": "3.3 Turbo Premium",
    "msrp": 46780
   },
   {
    "name": "PHEV SC Plus",
    "msrp": 47450
   },
   {
    "name": "3.3 Turbo Premium Plus",
    "msrp": 49570
   },
   {
    "name": "3.3 Turbo S Premium",
    "msrp": 53440
   },
   {
    "name": "3.3 Turbo S Premium Plus",
    "msrp": 56870
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.3L turbo I6 48V mild hybrid",
    "hp": 280,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.3L turbo I6 48V mild hybrid (Turbo S)",
    "hp": 340,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.5L I4 + electric motor (PHEV)",
    "hp": 323,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 56,
    "evRangeMi": 32
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 200.8,
   "widthIn": 78.5,
   "heightIn": 68.6,
   "wheelbaseIn": 122.8,
   "curbWeightLb": 4890,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 39.6,
   "cargoMaxCuFt": 75.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Plug-in hybrid with 32-mile EV range (2026: 19-in wheels)",
   "340-hp Turbo S engine",
   "Nappa leather interior",
   "Bose 12-speaker audio",
   "Panoramic moonroof",
   "360-degree View Monitor with See-Through View",
   "Ventilated front seats"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025%20Mazda%20CX-70%20PHEV%20Premium%20Plus%20(United%20States)%20front%20view.png?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Two-row version of CX-90; standard AWD. PHEV EV range improved from 26 to 32 miles for 2026 via smaller 19-in wheels. Mazda raised 2026 CX-70 prices $200-$500 effective May 2026. Turbo S output on 93-octane (319 hp on 87); PHEV tow rating 3,500 lb."
 },
 {
  "id": "mazda-cx-90",
  "make": "Mazda",
  "manufacturer": "Mazda Motor Corporation",
  "model": "CX-90",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 38800,
  "priceTo": 58500,
  "trims": [
   {
    "name": "3.3 Turbo Select",
    "msrp": 38800
   },
   {
    "name": "PHEV Preferred",
    "msrp": 50495
   },
   {
    "name": "3.3 Turbo S Premium Plus",
    "msrp": 57370
   },
   {
    "name": "PHEV Premium Plus",
    "msrp": 58500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.3L turbo I6 48V mild hybrid",
    "hp": 280,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.3L turbo I6 48V mild hybrid (Turbo S)",
    "hp": 340,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.5L I4 + electric motor (PHEV)",
    "hp": 323,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 56,
    "evRangeMi": 26
   }
  ],
  "seats": [
   6,
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 200.8,
   "widthIn": 78.5,
   "heightIn": 68.2,
   "wheelbaseIn": 122.8,
   "curbWeightLb": 4689,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15.9,
   "cargoMaxCuFt": 75.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Plug-in hybrid with 26-mile EV range",
   "340-hp Turbo S engine",
   "Second-row captain's chairs (6/7-seat layouts)",
   "White Nappa leather interior",
   "Bose 12-speaker audio",
   "Panoramic moonroof",
   "360-degree View Monitor with See-Through View"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Mazda%20CX-90%20(KK)%20Washington%20DC%20Metro%20Area,%20USA.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Standard AWD; gas trims span Select to Turbo S Premium Plus, PHEV spans Preferred to Premium Plus. For 2026 all PHEVs get 21-in wheels, ventilated front seats and Alexa built-in standard. Mid-2026 price increases of a few hundred dollars were announced. Cargo figure is behind the third row."
 },
 {
  "id": "mazda-mx-5-miata",
  "make": "Mazda",
  "manufacturer": "Mazda Motor Corporation",
  "model": "MX-5 Miata",
  "year": 2026,
  "bodyStyle": "convertible",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 30430,
  "priceTo": 41900,
  "trims": [
   {
    "name": "Sport (soft top)",
    "msrp": 30430
   },
   {
    "name": "Club (soft top)",
    "msrp": 33930
   },
   {
    "name": "Grand Touring (soft top)",
    "msrp": 35730
   },
   {
    "name": "RF Grand Touring",
    "msrp": 38450
   },
   {
    "name": "RF Club (Brembo BBS Recaro)",
    "msrp": 41900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 181,
    "transmission": "6-speed manual or 6-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 154.1,
   "widthIn": 68.3,
   "heightIn": 48.8,
   "wheelbaseIn": 90.9,
   "curbWeightLb": 2366,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 4.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "RF power-retractable hardtop (Club and Grand Touring)",
   "Brembo BBS Recaro Package",
   "Bose 9-speaker audio with headrest speakers",
   "Tan Nappa leather (Grand Touring)",
   "Limited-slip differential and Bilstein dampers (Club MT)",
   "6-speed automatic (Grand Touring)"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Mazda%20MX-5%20(ND)%201X7A7471.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Soft top and RF retractable-hardtop offered (one record; RF adds roughly $2,700-8,000 depending on trim and weighs ~90 lb more). Manual standard; automatic offered on Grand Touring. RF Club includes the Brembo BBS Recaro package as standard."
 },
 {
  "id": "mazda-mazda3",
  "make": "Mazda",
  "manufacturer": "Mazda Motor Corporation",
  "model": "Mazda3",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact car",
  "category": "car",
  "priceFrom": 24650,
  "priceTo": 38090,
  "trims": [
   {
    "name": "2.5 S Sedan",
    "msrp": 24650
   },
   {
    "name": "2.5 S Hatchback",
    "msrp": 25650
   },
   {
    "name": "2.5 S Preferred Sedan",
    "msrp": 27290
   },
   {
    "name": "2.5 S Carbon Edition AWD Sedan",
    "msrp": 29815
   },
   {
    "name": "2.5 S Premium Hatchback (6MT)",
    "msrp": 31650
   },
   {
    "name": "2.5 Turbo Premium Plus AWD Sedan",
    "msrp": 36940
   },
   {
    "name": "2.5 Turbo Premium Plus AWD Hatchback",
    "msrp": 38090
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 191,
    "transmission": "6-speed automatic",
    "manualAvailable": true,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L turbo I4",
    "hp": 250,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.5,
   "widthIn": 70.7,
   "heightIn": 56.9,
   "wheelbaseIn": 107.3,
   "curbWeightLb": 3186,
   "groundClearanceIn": 5.5
  },
  "interior": {
   "passengerVolumeCuFt": 93.3,
   "cargoCuFt": 13.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Hatchback body style (adds 20.1 cu ft cargo, 47.1 max)",
   "i-Activ AWD",
   "2.5 Turbo engine (250 hp on premium fuel)",
   "6-speed manual (hatchback Premium)",
   "Bose 12-speaker audio",
   "White or red leather interior",
   "360-degree View Monitor",
   "Head-up Active Driving Display"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/MAZDA3%20SEDAN%20(BP)%20China.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Sold as sedan and hatchback (one record; hatchback costs ~$1,000-1,150 more, dims for sedan). Turbo makes 250 hp on 93-octane / 227 hp on 87-octane."
 },
 {
  "id": "mclaren-750s",
  "make": "McLaren",
  "manufacturer": "McLaren Group",
  "model": "750S",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "supercar",
  "category": "car",
  "priceFrom": 324000,
  "priceTo": 345000,
  "trims": [
   {
    "name": "750S Coupe",
    "msrp": 324000
   },
   {
    "name": "750S Spider",
    "msrp": 345000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8",
    "hp": 740,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 179.8,
   "widthIn": 76.0,
   "heightIn": 47.1,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3240,
   "groundClearanceIn": 4.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 5.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Senna-style carbon racing seats",
   "Track pack with telemetry",
   "Carbon-fiber exterior packs",
   "Bowers & Wilkins audio",
   "Vehicle lift with memory"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Prices are latest confirmed US base MSRPs (2024/25 launch); 2026 pricing likely modestly higher with tariff adjustments. Spider has retractable hardtop."
 },
 {
  "id": "mclaren-artura",
  "make": "McLaren",
  "manufacturer": "McLaren Group",
  "model": "Artura",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "hybrid supercar",
  "category": "car",
  "priceFrom": 255400,
  "priceTo": 282800,
  "trims": [
   {
    "name": "Artura Coupe",
    "msrp": 255400
   },
   {
    "name": "Artura Spider",
    "msrp": 282800
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "3.0L twin-turbo V6 plug-in hybrid",
    "hp": 690,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 39,
    "evRangeMi": 11
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 178.7,
   "widthIn": 76.9,
   "heightIn": 47.9,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3439,
   "groundClearanceIn": 4.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 5.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Performance / TechLux / Vision interior specs",
   "Carbon-ceramic brakes (standard)",
   "Bowers & Wilkins audio",
   "Vehicle lift",
   "MSO paint and carbon options"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 base prices vary by source ($255k-$260k) after tariff-related increases; Spider price estimated from coupe delta. mpgCombined is EPA MPGe."
 },
 {
  "id": "mclaren-gts",
  "make": "McLaren",
  "manufacturer": "McLaren Group",
  "model": "GTS",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "grand touring supercar",
  "category": "car",
  "priceFrom": 224400,
  "priceTo": 224400,
  "trims": [
   {
    "name": "GTS",
    "msrp": 224400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8",
    "hp": 626,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 179.5,
   "widthIn": 76.0,
   "heightIn": 47.8,
   "wheelbaseIn": 105.3,
   "curbWeightLb": 3373,
   "groundClearanceIn": 4.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Panoramic glass roof with electrochromic tint",
   "Nose lift",
   "Bowers & Wilkins audio",
   "Luxe interior spec",
   "Soft-close luggage shelf"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Continues for 2026 as McLaren's most practical model: 14.8 cu ft rear luggage shelf plus 5.3 cu ft frunk. Price ~$224,400 before $5,500 destination."
 },
 {
  "id": "mclaren-w1",
  "make": "McLaren",
  "manufacturer": "McLaren Group",
  "model": "W1",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "limited-production hypercar",
  "category": "car",
  "priceFrom": 2100000,
  "priceTo": 2100000,
  "trims": [
   {
    "name": "W1",
    "msrp": 2100000
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "4.0L twin-turbo V8 + electric motor",
    "hp": 1258,
    "transmission": "8-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 182.0,
   "widthIn": 78.0,
   "heightIn": 46.0,
   "wheelbaseIn": 104.5,
   "curbWeightLb": 3084,
   "groundClearanceIn": 4.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Anhedral doors (standard)",
   "Active aerodynamics with Race mode (standard)",
   "MSO bespoke commissioning",
   "Fixed seats with adjustable pedal box"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Limited to 399 units, all sold out; deliveries begin 2026. Price ~$2.1M before personalization. Successor to the P1."
 },
 {
  "id": "mercedes-amg-gt",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "AMG GT",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 106500,
  "priceTo": 202200,
  "trims": [
   {
    "name": "AMG GT 43",
    "msrp": 106500
   },
   {
    "name": "AMG GT 55 4MATIC+",
    "msrp": 138150
   },
   {
    "name": "AMG GT 63 4MATIC+",
    "msrp": 181350
   },
   {
    "name": "AMG GT 63 PRO 4MATIC+",
    "msrp": 202200
   },
   {
    "name": "AMG GT 63 S E PERFORMANCE",
    "msrp": 202200
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "AMG 2.0L I4 turbo mild hybrid",
    "hp": 416,
    "transmission": "9-speed automatic (MCT)",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 4.0L V8 twin-turbo (469-603 hp)",
    "hp": 577,
    "transmission": "9-speed automatic (MCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "AMG 4.0L V8 twin-turbo plug-in hybrid (E Performance)",
    "hp": 805,
    "transmission": "9-speed automatic (MCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2,
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 185.6,
   "widthIn": 78.1,
   "heightIn": 53.7,
   "wheelbaseIn": 106.3,
   "curbWeightLb": 4343,
   "groundClearanceIn": 3.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 11.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "2+2 rear seats (optional on some trims)",
   "AMG Aerodynamics package with active aero",
   "Carbon-ceramic brakes",
   "AMG Performance seats",
   "Burmester 3D surround sound",
   "Rear-axle steering",
   "Carbon fiber trim packages"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/71/Mercedes-AMG_GT_63_Pro_%28C192%29_IAA_2025_DSC_2092.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "AMG-only nameplate (2-door liftback coupe). V8 entry covers GT 55 (469 hp), GT 63 (577 hp) and GT 63 PRO (603 hp). GT 63 S E PERFORMANCE is an 805-hp plug-in hybrid."
 },
 {
  "id": "mercedes-benz-c-class",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "C-Class",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sedan",
  "category": "car",
  "priceFrom": 49650,
  "priceTo": 88000,
  "trims": [
   {
    "name": "C 300",
    "msrp": 49650
   },
   {
    "name": "C 300 4MATIC",
    "msrp": 51650
   },
   {
    "name": "AMG C 43",
    "msrp": 64150
   },
   {
    "name": "AMG C 63 S E PERFORMANCE",
    "msrp": 88000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4 turbo mild hybrid",
    "hp": 255,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 2.0L I4 turbo mild hybrid",
    "hp": 402,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "AMG 2.0L I4 turbo plug-in hybrid (E Performance)",
    "hp": 671,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.0,
   "widthIn": 71.7,
   "heightIn": 56.6,
   "wheelbaseIn": 112.8,
   "curbWeightLb": 3957,
   "groundClearanceIn": 4.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Panoramic sunroof",
   "Burmester 3D surround sound",
   "Head-up display",
   "DIGITAL LIGHT adaptive headlamps",
   "AMG Line package",
   "Heated and ventilated front seats",
   "Driver Assistance Package",
   "360-degree camera"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/94/Mercedes-AMG_C_63_%28W206%29_IMG_0310.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "AMG C 63 S E Performance is a 671-hp plug-in hybrid with a small performance-oriented battery (minimal usable EV range). Climate and audio are controlled via the central touchscreen; no physical knobs."
 },
 {
  "id": "mercedes-benz-cla",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "CLA",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact luxury sedan",
  "category": "car",
  "priceFrom": 47950,
  "priceTo": 50500,
  "trims": [
   {
    "name": "CLA 250+ with EQ Technology",
    "msrp": 47950
   },
   {
    "name": "CLA 350 4MATIC with EQ Technology",
    "msrp": 50500
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (85 kWh, 800V)",
    "hp": 268,
    "transmission": "2-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 374
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (85 kWh, 800V)",
    "hp": 349,
    "transmission": "2-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 312
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.9,
   "widthIn": 73.0,
   "heightIn": 57.8,
   "wheelbaseIn": 109.8,
   "curbWeightLb": 4530,
   "groundClearanceIn": 4.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "MBUX Superscreen with passenger display",
   "Burmester 3D surround sound with Dolby Atmos",
   "Panoramic glass roof",
   "AMG Line exterior/interior",
   "Heated and ventilated front seats",
   "Head-up display",
   "Driver Assistance Package"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/26/Mercedes-Benz_CLA_250%2B_avec_technologie_EQ_Limited_Edition_%2855085144824%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "All-new generation for 2026, launching as an EV (fastest-charging Mercedes to date, 10-80% in ~22 min). Gas/hybrid versions of the new CLA arrive later; the previous-gen gas CLA 250 coupe is sold only as 2025 carryover inventory. 2.4 cu ft frunk in addition to trunk."
 },
 {
  "id": "mercedes-benz-cle",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "CLE",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "luxury coupe/convertible",
  "category": "car",
  "priceFrom": 59550,
  "priceTo": 84600,
  "trims": [
   {
    "name": "CLE 300 4MATIC Coupe",
    "msrp": 59550
   },
   {
    "name": "CLE 450 4MATIC Coupe",
    "msrp": 69000
   },
   {
    "name": "AMG CLE 53 Coupe",
    "msrp": 76300
   },
   {
    "name": "CLE 300 4MATIC Cabriolet",
    "msrp": 68050
   },
   {
    "name": "CLE 450 4MATIC Cabriolet",
    "msrp": 77400
   },
   {
    "name": "AMG CLE 53 Cabriolet",
    "msrp": 84600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4 turbo mild hybrid",
    "hp": 255,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L I6 turbo mild hybrid",
    "hp": 375,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 3.0L I6 turbo mild hybrid",
    "hp": 443,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 191.0,
   "widthIn": 73.3,
   "heightIn": 55.9,
   "wheelbaseIn": 112.8,
   "curbWeightLb": 3960,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 14.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Cabriolet with AIRCAP/AIRSCARF neck-level heating",
   "Burmester 3D surround sound",
   "Head-up display",
   "Panoramic sunroof (coupe)",
   "AMG Line package",
   "Heated and ventilated front seats",
   "Driver Assistance Package"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/f/f0/Mercedes-Benz_CLE_200_Coup%C3%A9_AMG_Line_%28C_236%29_%E2%80%93_f_21012024.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Sold as both coupe and cabriolet (convertible); cabriolet trunk volume is smaller, especially top-down. Replaced both C-Class and E-Class two-doors."
 },
 {
  "id": "mercedes-benz-e-class",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "E-Class",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury sedan",
  "category": "car",
  "priceFrom": 63900,
  "priceTo": 93350,
  "trims": [
   {
    "name": "E 350 Sedan",
    "msrp": 63900
   },
   {
    "name": "E 350 4MATIC Sedan",
    "msrp": 66400
   },
   {
    "name": "E 450 4MATIC Sedan",
    "msrp": 72300
   },
   {
    "name": "E 450 4MATIC All-Terrain (wagon)",
    "msrp": 78300
   },
   {
    "name": "AMG E 53 HYBRID Sedan",
    "msrp": 89600
   },
   {
    "name": "AMG E 53 HYBRID Wagon",
    "msrp": 93350
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4 turbo mild hybrid",
    "hp": 255,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L I6 turbo mild hybrid",
    "hp": 375,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "AMG 3.0L I6 turbo plug-in hybrid",
    "hp": 577,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 42
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.4,
   "widthIn": 74.4,
   "heightIn": 57.4,
   "wheelbaseIn": 116.6,
   "curbWeightLb": 4134,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 19.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "MBUX Superscreen with passenger display",
   "Burmester 4D surround sound with Dolby Atmos",
   "DIGITAL LIGHT with projection",
   "AIRMATIC air suspension",
   "Panoramic sunroof",
   "Heated and ventilated front seats",
   "Head-up display",
   "Driver Assistance Package"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Mercedes-Benz_W214_1X7A1843.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "E 450 All-Terrain and AMG E 53 wagon body styles folded into this record (wagon cargo: ~21.7 cu ft seats up). AMG E 53 HYBRID is a plug-in hybrid (up to 604 hp with Race Start boost); EV range figure approximate."
 },
 {
  "id": "mercedes-benz-eqe",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "EQE",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize luxury EV sedan",
  "category": "car",
  "priceFrom": 64950,
  "priceTo": 96600,
  "trims": [
   {
    "name": "EQE 320+",
    "msrp": 64950
   },
   {
    "name": "EQE 320 4MATIC",
    "msrp": 67450
   },
   {
    "name": "AMG EQE",
    "msrp": 96600
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (90.6 kWh)",
    "hp": 315,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 308
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (90.6 kWh)",
    "hp": 315,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "AMG dual-motor AWD",
    "hp": 677,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 225
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.3,
   "widthIn": 76.4,
   "heightIn": 59.5,
   "wheelbaseIn": 122.9,
   "curbWeightLb": 5223,
   "groundClearanceIn": 4.8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "MBUX Hyperscreen",
   "Burmester 3D surround sound",
   "AIRMATIC air suspension",
   "Rear-axle steering",
   "Panoramic roof",
   "Heated and ventilated front seats",
   "Head-up display"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/4/4c/Mercedes-AMG_EQE_43_%28V295%29_1X7A5782.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "For 2026 the EQE 350 trims were renamed EQE 320 with a power bump to 315 hp and a roughly $10,000 price cut. Production/US availability ends after the 2026 model year (replaced by next-gen electric E-Class)."
 },
 {
  "id": "mercedes-benz-eqe-suv",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "EQE SUV",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury EV SUV",
  "category": "suv",
  "priceFrom": 64950,
  "priceTo": 97400,
  "trims": [
   {
    "name": "EQE 320+ SUV",
    "msrp": 64950
   },
   {
    "name": "EQE 320 4MATIC SUV",
    "msrp": 67450
   },
   {
    "name": "AMG EQE SUV",
    "msrp": 97400
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (90.6 kWh)",
    "hp": 315,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 279
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (90.6 kWh)",
    "hp": 315,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "AMG dual-motor AWD",
    "hp": 677,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 235
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 191.5,
   "widthIn": 76.4,
   "heightIn": 66.3,
   "wheelbaseIn": 119.3,
   "curbWeightLb": 5591,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 18.6,
   "cargoMaxCuFt": 59.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "MBUX Hyperscreen",
   "Burmester 3D surround sound",
   "AIRMATIC air suspension",
   "Rear-axle steering",
   "Panoramic roof",
   "Heated and ventilated front seats",
   "Trailer hitch"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/1/11/Mercedes-AMG_EQE_SUV_43_%28X294%29_IAA_2023_1X7A0449.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "US-built (Alabama). Like the sedan, 2026 renames 350 trims to 320 (315 hp) with a large price cut; sources conflict on exact SUV base price ($64,950 per MBUSA vs $66,200 per KBB). EV range for the renamed 320+ carried over from prior 350+ EPA figure (approximate). Final model year before replacement by next-gen electric models."
 },
 {
  "id": "mercedes-benz-eqs",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "EQS",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury EV sedan",
  "category": "car",
  "priceFrom": 99900,
  "priceTo": 123900,
  "trims": [
   {
    "name": "EQS 450+",
    "msrp": 99900
   },
   {
    "name": "EQS 450 4MATIC",
    "msrp": 102900
   },
   {
    "name": "EQS 580 4MATIC",
    "msrp": 123900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD (118 kWh)",
    "hp": 355,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 390
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (118 kWh)",
    "hp": 355,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (118 kWh, EQS 580)",
    "hp": 536,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 207.3,
   "widthIn": 75.8,
   "heightIn": 59.5,
   "wheelbaseIn": 126.4,
   "curbWeightLb": 5597,
   "groundClearanceIn": 4.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.0,
   "cargoMaxCuFt": 63.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "MBUX Hyperscreen (56-inch pillar-to-pillar display)",
   "Burmester 3D surround sound with Dolby Atmos",
   "Rear-axle steering (10 degrees)",
   "Executive rear seat package",
   "AIRMATIC air suspension",
   "Heated and ventilated front seats",
   "Head-up display with augmented reality"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Mercedes-Benz_EQS_002.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Liftback body with hatch-style cargo access. AMG EQS sedan dropped from the US lineup for 2026. EQS family (with the traditional-grille facelift) continues while next-gen EVs roll out."
 },
 {
  "id": "mercedes-benz-eqs-suv",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "EQS SUV",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury EV SUV",
  "category": "suv",
  "priceFrom": 89950,
  "priceTo": 180000,
  "trims": [
   {
    "name": "EQS 400 4MATIC SUV",
    "msrp": 89950
   },
   {
    "name": "EQS 550 4MATIC SUV",
    "msrp": 112450
   },
   {
    "name": "Mercedes-Maybach EQS 680 SUV",
    "msrp": 180000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD (118 kWh)",
    "hp": 355,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (118 kWh, EQS 550)",
    "hp": 536,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 320
   },
   {
    "type": "ev",
    "engine": "Maybach dual-motor AWD",
    "hp": 649,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 202.4,
   "widthIn": 77.1,
   "heightIn": 67.6,
   "wheelbaseIn": 126.4,
   "curbWeightLb": 5950,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.5,
   "cargoMaxCuFt": 74.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "MBUX Hyperscreen",
   "Optional third-row seat (7-passenger)",
   "Burmester 3D surround sound",
   "Rear-axle steering",
   "AIRMATIC air suspension",
   "Executive rear-seat package",
   "Trailer hitch"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/72/Mercedes-Benz_X296_1X7A1725.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "US-built (Alabama). Mercedes-Maybach EQS 680 SUV (4-5 seat ultra-luxury) folded into this record. For 2026 trims were renamed (EQS 400/550 replacing 450+/580) with significant price cuts; power and EPA range figures for renamed trims are approximate pending official EPA data."
 },
 {
  "id": "mercedes-benz-g-class",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "G-Class",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "luxury off-road SUV",
  "category": "suv",
  "priceFrom": 153900,
  "priceTo": 195500,
  "trims": [
   {
    "name": "G 550",
    "msrp": 153900
   },
   {
    "name": "G 580 with EQ Technology (EV)",
    "msrp": 163200
   },
   {
    "name": "AMG G 63",
    "msrp": 195500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L I6 turbo mild hybrid",
    "hp": 443,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Quad-motor 4WD (116 kWh) with tank turn",
    "hp": 579,
    "transmission": "2-speed per motor",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": 239
   },
   {
    "type": "gas",
    "engine": "AMG 4.0L V8 twin-turbo mild hybrid",
    "hp": 577,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 182.0,
   "widthIn": 76.0,
   "heightIn": 78.2,
   "wheelbaseIn": 113.8,
   "curbWeightLb": 5665,
   "groundClearanceIn": 9.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 38.1,
   "cargoMaxCuFt": 68.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": false
  },
  "keyOptions": [
   "Three locking differentials (gas) / virtual diff locks (EV)",
   "G-Turn tank turn and G-Steering (G 580 EV)",
   "AMG Line and Night packages",
   "Burmester 3D surround sound",
   "Carbon fiber trim",
   "MANUFAKTUR custom paint and leather",
   "Adaptive damping"
  ],
  "towingLb": 7000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Mercedes-Benz_G_580_with_EQ_Technology_DSC_8257.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Electric G 580 with EQ Technology folded into this record as a powertrain (EPA range 239 mi; not tow-rated). Rear-mounted full-size spare on the side-hinged tailgate. Tow rating applies to gas models."
 },
 {
  "id": "mercedes-benz-gla",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "GLA",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV",
  "category": "suv",
  "priceFrom": 41500,
  "priceTo": 58550,
  "trims": [
   {
    "name": "GLA 250",
    "msrp": 41500
   },
   {
    "name": "GLA 250 4MATIC",
    "msrp": 43500
   },
   {
    "name": "AMG GLA 35 4MATIC",
    "msrp": 58550
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4 turbo mild hybrid",
    "hp": 221,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 2.0L I4 turbo",
    "hp": 302,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 173.6,
   "widthIn": 72.2,
   "heightIn": 63.6,
   "wheelbaseIn": 107.4,
   "curbWeightLb": 3494,
   "groundClearanceIn": 5.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15.4,
   "cargoMaxCuFt": 50.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": false
  },
  "keyOptions": [
   "Panoramic sunroof",
   "AMG Line package",
   "Burmester surround sound",
   "Heated front seats",
   "Driver Assistance Package",
   "360-degree camera",
   "Head-up display"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/1/11/Mercedes-AMG_GLA_45_S_4MATIC%2B_%28H247%29_1X7A5827.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Entry point to the Mercedes SUV lineup. Physical climate control row below the vents; audio via touch controls. Final years of this generation before MMA-platform replacement."
 },
 {
  "id": "mercedes-benz-glb",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "GLB",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV (3-row available)",
  "category": "suv",
  "priceFrom": 43800,
  "priceTo": 60600,
  "trims": [
   {
    "name": "GLB 250",
    "msrp": 43800
   },
   {
    "name": "GLB 250 4MATIC",
    "msrp": 45800
   },
   {
    "name": "AMG GLB 35 4MATIC",
    "msrp": 60600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4 turbo mild hybrid",
    "hp": 221,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 2.0L I4 turbo",
    "hp": 302,
    "transmission": "8-speed dual-clutch automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 182.4,
   "widthIn": 72.2,
   "heightIn": 65.6,
   "wheelbaseIn": 111.4,
   "curbWeightLb": 3627,
   "groundClearanceIn": 5.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 24.0,
   "cargoMaxCuFt": 62.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": false
  },
  "keyOptions": [
   "Third-row seat (7-passenger option)",
   "Panoramic sunroof",
   "AMG Line package",
   "Burmester surround sound",
   "Heated front seats",
   "Driver Assistance Package",
   "360-degree camera"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/3/38/Mercedes-AMG_GLB_35_4MATIC_%28X247%29_%282023%29_IMG_9649.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Only vehicle in its class with an optional third row (small, kid-sized). Final year of this generation; an all-new GLB (including an EV version replacing the EQB) debuts on the MMA platform. AMG GLB 35 availability may end during the 2026 model year."
 },
 {
  "id": "mercedes-benz-glc",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "GLC",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 49550,
  "priceTo": 93450,
  "trims": [
   {
    "name": "GLC 300",
    "msrp": 49550
   },
   {
    "name": "GLC 300 4MATIC",
    "msrp": 51550
   },
   {
    "name": "GLC 300 4MATIC Coupe",
    "msrp": 59650
   },
   {
    "name": "GLC 350e 4MATIC (PHEV)",
    "msrp": 60300
   },
   {
    "name": "AMG GLC 43",
    "msrp": 67550
   },
   {
    "name": "AMG GLC 43 Coupe",
    "msrp": 73450
   },
   {
    "name": "AMG GLC 63 S E PERFORMANCE",
    "msrp": 86750
   },
   {
    "name": "AMG GLC 63 S E PERFORMANCE Coupe",
    "msrp": 93450
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4 turbo mild hybrid",
    "hp": 255,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.0L I4 turbo plug-in hybrid",
    "hp": 313,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 54
   },
   {
    "type": "gas",
    "engine": "AMG 2.0L I4 turbo mild hybrid",
    "hp": 416,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "AMG 2.0L I4 turbo plug-in hybrid (E Performance)",
    "hp": 671,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (GLC 400 4MATIC with EQ Technology, 800V)",
    "hp": 483,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.7,
   "widthIn": 74.4,
   "heightIn": 64.4,
   "wheelbaseIn": 113.1,
   "curbWeightLb": 4103,
   "groundClearanceIn": 6.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.9,
   "cargoMaxCuFt": 56.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Panoramic sunroof",
   "Burmester 3D surround sound",
   "Head-up display",
   "AIRMATIC air suspension",
   "AMG Line package",
   "Heated and ventilated front seats",
   "Trailer hitch",
   "360-degree camera with transparent hood"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/28/Mercedes-Benz_X254_GLC_300_4MATIC_AMG_Line_Obsidian_Black_%2811%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Best-selling Mercedes in the US. GLC Coupe body style folded into this record. All-new electric GLC 400 4MATIC with EQ Technology (483 hp, MBUX Hyperscreen) arrives during 2026 - US pricing not yet announced. PHEV cargo volume slightly reduced."
 },
 {
  "id": "mercedes-benz-gle",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "GLE",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 62250,
  "priceTo": 133150,
  "trims": [
   {
    "name": "GLE 350",
    "msrp": 62250
   },
   {
    "name": "GLE 350 4MATIC",
    "msrp": 64750
   },
   {
    "name": "GLE 450 4MATIC",
    "msrp": 72250
   },
   {
    "name": "GLE 450e 4MATIC (PHEV)",
    "msrp": 72250
   },
   {
    "name": "GLE 450 4MATIC Coupe",
    "msrp": 77250
   },
   {
    "name": "GLE 580 4MATIC",
    "msrp": 90000
   },
   {
    "name": "AMG GLE 53 4MATIC+",
    "msrp": 90000
   },
   {
    "name": "AMG GLE 53 Coupe",
    "msrp": 92150
   },
   {
    "name": "AMG GLE 63 S 4MATIC+",
    "msrp": 131800
   },
   {
    "name": "AMG GLE 63 S Coupe",
    "msrp": 133150
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4 turbo mild hybrid",
    "hp": 255,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L I6 turbo mild hybrid",
    "hp": 375,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.0L I4 turbo plug-in hybrid",
    "hp": 381,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 48
   },
   {
    "type": "gas",
    "engine": "4.0L V8 twin-turbo mild hybrid",
    "hp": 510,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 3.0L I6 turbo mild hybrid",
    "hp": 429,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 4.0L V8 twin-turbo",
    "hp": 603,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.3,
   "widthIn": 76.7,
   "heightIn": 70.7,
   "wheelbaseIn": 117.9,
   "curbWeightLb": 4784,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 33.3,
   "cargoMaxCuFt": 74.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": false
  },
  "keyOptions": [
   "Optional third-row seat (7-passenger)",
   "E-ACTIVE BODY CONTROL / AIRMATIC suspension",
   "Panoramic sunroof",
   "Burmester surround sound",
   "Head-up display",
   "Heated and ventilated front seats",
   "Trailer hitch (7,700-lb towing)",
   "360-degree camera"
  ],
  "towingLb": 7700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/01/Mercedes-Benz_GLE-Klasse_%28V167%29_GLE_300_d_4MATIC_%282021%29_%2853327035420%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "GLE Coupe body style folded into this record (coupe is 5-seat only, less cargo). Third row optional on the standard SUV. GLE 450e PHEV EV range figure approximate (~48 mi EPA)."
 },
 {
  "id": "mercedes-benz-gls",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "GLS",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury SUV",
  "category": "suv",
  "priceFrom": 90250,
  "priceTo": 180000,
  "trims": [
   {
    "name": "GLS 450 4MATIC",
    "msrp": 90250
   },
   {
    "name": "GLS 580 4MATIC",
    "msrp": 116150
   },
   {
    "name": "AMG GLS 63",
    "msrp": 151050
   },
   {
    "name": "Mercedes-Maybach GLS 600",
    "msrp": 180000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L I6 turbo mild hybrid",
    "hp": 375,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L V8 twin-turbo mild hybrid",
    "hp": 510,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 4.0L V8 twin-turbo mild hybrid",
    "hp": 603,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L V8 twin-turbo mild hybrid (Maybach GLS 600)",
    "hp": 550,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 205.0,
   "widthIn": 77.0,
   "heightIn": 71.8,
   "wheelbaseIn": 123.4,
   "curbWeightLb": 5545,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.4,
   "cargoMaxCuFt": 84.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": false
  },
  "keyOptions": [
   "Second-row captain's chairs (6-seat)",
   "E-ACTIVE BODY CONTROL suspension",
   "Burmester surround sound",
   "Rear-seat entertainment",
   "Heated/ventilated seats in all rows",
   "Panoramic sunroof",
   "Trailer hitch (7,700-lb towing)",
   "Warmth & Comfort package"
  ],
  "towingLb": 7700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/27/Mercedes-Benz_X167_FL_GLS_580_4MATIC_AMG_Line_Obsidian_Black_%2812%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Three-row flagship SUV. Mercedes-Maybach GLS 600 (4-5 seat ultra-luxury variant) folded into this record."
 },
 {
  "id": "mercedes-benz-s-class",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "S-Class",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury sedan",
  "category": "car",
  "priceFrom": 119500,
  "priceTo": 244400,
  "trims": [
   {
    "name": "S 500 4MATIC",
    "msrp": 119500
   },
   {
    "name": "S 580e 4MATIC (PHEV)",
    "msrp": 130400
   },
   {
    "name": "S 580 4MATIC",
    "msrp": 130700
   },
   {
    "name": "AMG S 63 E PERFORMANCE",
    "msrp": 189800
   },
   {
    "name": "Mercedes-Maybach S 580 4MATIC",
    "msrp": 207150
   },
   {
    "name": "Mercedes-Maybach S 680 4MATIC",
    "msrp": 244400
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L I6 turbo mild hybrid",
    "hp": 429,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L V8 twin-turbo mild hybrid",
    "hp": 496,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "3.0L I6 turbo plug-in hybrid",
    "hp": 510,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 46
   },
   {
    "type": "phev",
    "engine": "AMG 4.0L V8 twin-turbo plug-in hybrid",
    "hp": 791,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "6.0L V12 twin-turbo (Maybach S 680)",
    "hp": 621,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 208.2,
   "widthIn": 76.9,
   "heightIn": 59.2,
   "wheelbaseIn": 126.6,
   "curbWeightLb": 4735,
   "groundClearanceIn": 4.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Executive rear seat package with reclining seats",
   "Rear-axle steering (up to 10 degrees)",
   "E-ACTIVE BODY CONTROL suspension",
   "Burmester 4D surround sound",
   "Rear-seat entertainment tablets",
   "DIGITAL LIGHT with projection",
   "Head-up display with augmented reality",
   "Chauffeur package"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/77/Mercedes-Benz_W223_IAA_2021_1X7A0206.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Mercedes-Maybach S 580/S 680 (long-wheelbase ultra-luxury variants) folded into this record. S 580e plug-in hybrid EPA electric range approximate (~46 mi)."
 },
 {
  "id": "mercedes-amg-sl",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "SL",
  "year": 2026,
  "bodyStyle": "convertible",
  "segment": "luxury roadster",
  "category": "car",
  "priceFrom": 112550,
  "priceTo": 207900,
  "trims": [
   {
    "name": "AMG SL 43",
    "msrp": 112550
   },
   {
    "name": "AMG SL 55 4MATIC+",
    "msrp": 145250
   },
   {
    "name": "AMG SL 63 4MATIC+",
    "msrp": 187850
   },
   {
    "name": "AMG SL 63 S E PERFORMANCE",
    "msrp": 207900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "AMG 2.0L I4 turbo mild hybrid",
    "hp": 375,
    "transmission": "9-speed automatic (MCT)",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "AMG 4.0L V8 twin-turbo (469-577 hp)",
    "hp": 577,
    "transmission": "9-speed automatic (MCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 16,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "AMG 4.0L V8 twin-turbo plug-in hybrid (E Performance)",
    "hp": 805,
    "transmission": "9-speed automatic (MCT)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2,
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 185.2,
   "widthIn": 75.4,
   "heightIn": 53.5,
   "wheelbaseIn": 106.3,
   "curbWeightLb": 4266,
   "groundClearanceIn": 3.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 7.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Soft-top power roof (opens in ~15 seconds)",
   "AIRSCARF neck-level heating",
   "AMG Performance seats",
   "Burmester surround sound",
   "Head-up display",
   "Rear-axle steering",
   "Carbon fiber packages"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/62/Mercedes-AMG_SL_63_%28R232%29_1X7A7444.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "AMG-only nameplate; 2+2 seating on most trims. An ultra-exclusive Mercedes-Maybach SL 680 Monogram Series joins the lineup for 2026 (pricing announced separately, roughly $235,000)."
 },
 {
  "id": "mercedes-benz-sprinter",
  "make": "Mercedes-Benz",
  "manufacturer": "Mercedes-Benz Group",
  "model": "Sprinter",
  "year": 2026,
  "bodyStyle": "van",
  "segment": "full-size commercial van",
  "category": "van",
  "priceFrom": 50830,
  "priceTo": 66530,
  "trims": [
   {
    "name": "2500 Cargo Van 144",
    "msrp": 50830
   },
   {
    "name": "2500 Crew Van 144",
    "msrp": 54860
   },
   {
    "name": "2500 Passenger Van 144",
    "msrp": 56930
   },
   {
    "name": "3500 Cargo Van 144 DRW High Output",
    "msrp": 56950
   },
   {
    "name": "2500 Cargo Van 170 High Roof",
    "msrp": 57540
   },
   {
    "name": "eSprinter Cargo Van (EV)",
    "msrp": null
   }
  ],
  "powertrains": [
   {
    "type": "diesel",
    "engine": "2.0L I4 turbodiesel (168 hp std / 208 hp High Output)",
    "hp": 168,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Single rear motor (eSprinter, 113 kWh usable)",
    "hp": 201,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2,
   3,
   12,
   15
  ],
  "doors": 3,
  "dims": {
   "lengthIn": 233.5,
   "widthIn": 79.5,
   "heightIn": 96.3,
   "wheelbaseIn": 144.0,
   "curbWeightLb": 5313,
   "groundClearanceIn": 6.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 319.0,
   "cargoMaxCuFt": 533.0,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "High roof (79-in standing height) and 170-in wheelbase",
   "AWD (diesel)",
   "MBUX 10.25-inch touchscreen with navigation",
   "Driver Assistance Package (active brake, blind spot, lane keep)",
   "360-degree camera",
   "Swiveling front seats / crew and passenger configurations",
   "High-output 208-hp diesel"
  ],
  "towingLb": 7500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/3/31/Mercedes-Benz_Sprinter_VS30_317_CDI_Black_-_front.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Sold in cargo, crew, passenger (up to 15 seats) and cab-chassis configurations across 2500/3500/3500XD/4500 GVWR classes; dims shown are 144-in wheelbase standard roof, cargo volume 319-533 cu ft depending on body. Electric eSprinter offered (up to ~206 mi city range, not EPA-rated); 2026 eSprinter pricing not published at time of writing. Metris van was discontinued after 2023 - no 2026 model."
 },
 {
  "id": "mini-cooper",
  "make": "Mini",
  "manufacturer": "BMW Group",
  "model": "Cooper",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "subcompact premium hatchback",
  "category": "car",
  "priceFrom": 29500,
  "priceTo": 43300,
  "trims": [
   {
    "name": "Cooper 2 Door",
    "msrp": 29500
   },
   {
    "name": "Cooper 4 Door",
    "msrp": 30500
   },
   {
    "name": "Cooper S 2 Door",
    "msrp": 32800
   },
   {
    "name": "Cooper S 4 Door",
    "msrp": 33800
   },
   {
    "name": "John Cooper Works 2 Door",
    "msrp": 38900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Cooper)",
    "hp": 161,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 33,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Cooper S)",
    "hp": 201,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (JCW)",
    "hp": 228,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 152.6,
   "widthIn": 68.7,
   "heightIn": 56.4,
   "wheelbaseIn": 98.2,
   "curbWeightLb": 2940,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 8.9,
   "cargoMaxCuFt": 34.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Signature / Signature Plus / Iconic equipment tiers",
   "Panoramic moonroof",
   "Harman Kardon surround sound",
   "Head-up display",
   "Round 9.4-inch OLED display",
   "Heated front seats",
   "Driving Assistant"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "New F66 generation; no manual transmission offered. 4 Door adds $1,000, seats 5, and stretches to 161.4 in; JCW is 2-door only. priceTo reflects JCW Iconic tier. Cooper Electric not sold in the US. Destination $1,175 not included."
 },
 {
  "id": "mini-cooper-convertible",
  "make": "Mini",
  "manufacturer": "BMW Group",
  "model": "Cooper Convertible",
  "year": 2026,
  "bodyStyle": "convertible",
  "segment": "subcompact premium convertible",
  "category": "car",
  "priceFrom": 34600,
  "priceTo": 49000,
  "trims": [
   {
    "name": "Cooper Convertible",
    "msrp": 34600
   },
   {
    "name": "Cooper S Convertible",
    "msrp": 37900
   },
   {
    "name": "John Cooper Works Convertible",
    "msrp": 44600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Cooper)",
    "hp": 161,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Cooper S)",
    "hp": 201,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (JCW)",
    "hp": 228,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 152.8,
   "widthIn": 68.7,
   "heightIn": 55.7,
   "wheelbaseIn": 98.2,
   "curbWeightLb": 3145,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 7.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Signature / Signature Plus / Iconic equipment tiers",
   "Power soft top with sunroof mode",
   "Harman Kardon surround sound",
   "Head-up display",
   "Heated front seats and steering wheel",
   "Driving Assistant"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Redesigned soft-top based on the new-generation Cooper. priceTo reflects JCW Iconic tier. Destination $1,175 not included."
 },
 {
  "id": "mini-countryman",
  "make": "Mini",
  "manufacturer": "BMW Group",
  "model": "Countryman",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact premium SUV",
  "category": "suv",
  "priceFrom": 38900,
  "priceTo": 49400,
  "trims": [
   {
    "name": "Countryman S ALL4",
    "msrp": 38900
   },
   {
    "name": "Countryman SE ALL4 (EV, sold as MY2025)",
    "msrp": 45200
   },
   {
    "name": "John Cooper Works Countryman ALL4",
    "msrp": 46900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (S ALL4)",
    "hp": 241,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (JCW ALL4)",
    "hp": 312,
    "transmission": "7-speed dual-clutch",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (SE ALL4)",
    "hp": 313,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 100,
    "evRangeMi": 212
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 174.5,
   "widthIn": 72.6,
   "heightIn": 65.2,
   "wheelbaseIn": 106.0,
   "curbWeightLb": 3703,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 24.9,
   "cargoMaxCuFt": 56.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Signature Plus / Iconic equipment tiers",
   "Panoramic moonroof",
   "Harman Kardon surround sound",
   "Head-up display",
   "Power tailgate",
   "Heated front seats and steering wheel",
   "Driving Assistant Plus"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "All-wheel drive standard on all US Countrymans. The electric Countryman SE ALL4 continues on sale but as a carryover Model Year 2025 (MINI has not announced MY2026 pricing for it); it is folded in here. priceTo reflects JCW Iconic tier. Destination $1,175 not included."
 },
 {
  "id": "mitsubishi-eclipse-cross",
  "make": "Mitsubishi",
  "manufacturer": "Mitsubishi Motors Corporation",
  "model": "Eclipse Cross",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 27695,
  "priceTo": 31845,
  "trims": [
   {
    "name": "ES",
    "msrp": 27695
   },
   {
    "name": "LE",
    "msrp": 29295
   },
   {
    "name": "SE",
    "msrp": 30395
   },
   {
    "name": "Ralliart",
    "msrp": 31245
   },
   {
    "name": "Black Edition",
    "msrp": 31545
   },
   {
    "name": "SEL",
    "msrp": 31845
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 152,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 179.7,
   "widthIn": 71.1,
   "heightIn": 66.3,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3516,
   "groundClearanceIn": 8.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.4,
   "cargoMaxCuFt": 50.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super All-Wheel Control (S-AWC) AWD (standard)",
   "Heated front & rear seats",
   "Dual-pane panoramic sunroof",
   "Mitsubishi Power Sound 8-speaker audio",
   "Adaptive cruise control",
   "360-degree multi-view camera"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/bd/23_Mitsubishi_Eclipse_Cross_LE.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Minimal changes for 2026 (embedded navigation deleted; hood badging added on SEL trims). Mirage was discontinued after 2025, leaving Mitsubishi with a four-model US lineup."
 },
 {
  "id": "mitsubishi-outlander",
  "make": "Mitsubishi",
  "manufacturer": "Mitsubishi Motors Corporation",
  "model": "Outlander",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact 3-row SUV",
  "category": "suv",
  "priceFrom": 29995,
  "priceTo": 42645,
  "trims": [
   {
    "name": "ES",
    "msrp": 29995
   },
   {
    "name": "LE",
    "msrp": 31995
   },
   {
    "name": "SE",
    "msrp": 33995
   },
   {
    "name": "SEL",
    "msrp": 38695
   },
   {
    "name": "Trail Edition",
    "msrp": 39295
   },
   {
    "name": "Ralliart",
    "msrp": 39295
   },
   {
    "name": "Black Edition",
    "msrp": 42645
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4 with 48V mild-hybrid assist",
    "hp": 174,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.4,
   "widthIn": 73.3,
   "heightIn": 68.8,
   "wheelbaseIn": 106.5,
   "curbWeightLb": null,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 11.7,
   "cargoMaxCuFt": 64.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super All-Wheel Control (S-AWC) AWD",
   "Yamaha Ultimate 12-speaker audio",
   "Panoramic sunroof",
   "Quilted semi-aniline leather",
   "Heated steering wheel & rear seats",
   "New Trail Edition & returning Ralliart (2026)",
   "Hands-free power liftgate"
  ],
  "towingLb": 2000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/99/2022_Mitsubishi_Outlander_SE_S-AWC%2C_07-29-2022.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "2026 update replaces the 2.5L with a new 1.5L turbo mild-hybrid (sources cite 174-177 hp; ~28 mpg combined, manufacturer estimate with final EPA figures pending). Third row is very small."
 },
 {
  "id": "mitsubishi-outlander-phev",
  "make": "Mitsubishi",
  "manufacturer": "Mitsubishi Motors Corporation",
  "model": "Outlander PHEV",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact 3-row PHEV SUV",
  "category": "suv",
  "priceFrom": 43245,
  "priceTo": 53695,
  "trims": [
   {
    "name": "ES",
    "msrp": 43245
   },
   {
    "name": "Black Edition",
    "msrp": 53695
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "2.4L I4 + twin electric motors",
    "hp": 297,
    "transmission": "1-speed direct drive",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 73,
    "evRangeMi": 44
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.4,
   "widthIn": 73.3,
   "heightIn": 68.8,
   "wheelbaseIn": 106.5,
   "curbWeightLb": null,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Super All-Wheel Control (S-AWC) twin-motor AWD",
   "22.7 kWh battery (larger for 2026)",
   "DC fast charging (CHAdeMO)",
   "1500W AC power outlets",
   "Yamaha 12-speaker audio",
   "Panoramic sunroof",
   "Semi-aniline leather"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/bd/Osaka_Auto_Messe_2023_%28139%29_-_Mitsubishi_OUTLANDER_PHEV_Black_Edition_%285LA-GN0W-XDUHZ%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Mid-cycle refresh for 2026: bigger 22.7 kWh battery, 44-mile EPA electric range (up from 38), 73 MPGe, more power. Trim ladder is ES, SE, SEL, Black Edition."
 },
 {
  "id": "mitsubishi-outlander-sport",
  "make": "Mitsubishi",
  "manufacturer": "Mitsubishi Motors Corporation",
  "model": "Outlander Sport",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 24995,
  "priceTo": 29445,
  "trims": [
   {
    "name": "S",
    "msrp": 24995
   },
   {
    "name": "ES",
    "msrp": 26595
   },
   {
    "name": "LE",
    "msrp": 27245
   },
   {
    "name": "SE",
    "msrp": 28595
   },
   {
    "name": "Ralliart",
    "msrp": 28995
   },
   {
    "name": "Trail Edition",
    "msrp": 29245
   },
   {
    "name": "SEL",
    "msrp": 29445
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 148,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.4L I4 (SEL)",
    "hp": 168,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 171.9,
   "widthIn": 71.3,
   "heightIn": 64.8,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3241,
   "groundClearanceIn": 8.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.7,
   "cargoMaxCuFt": 49.5,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "All-Wheel Control AWD (standard)",
   "New Trail Edition all-terrain package",
   "Ralliart appearance package",
   "8-inch touchscreen with Apple CarPlay/Android Auto",
   "Heated front seats",
   "10-year/100,000-mile powertrain warranty"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/bc/Mitsubishi_ASX_%28facelift%2C_2020%29_%28Germany%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Carries over for 2026 with a new budget S trim and Trail Edition; AWD now standard. Design dates to 2011, making it one of the oldest vehicles on sale."
 },
 {
  "id": "nissan-altima",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Altima",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize sedan",
  "category": "car",
  "priceFrom": 27580,
  "priceTo": 30480,
  "trims": [
   {
    "name": "SV",
    "msrp": 27580
   },
   {
    "name": "SV Special Edition",
    "msrp": 28880
   },
   {
    "name": "SR",
    "msrp": 28980
   },
   {
    "name": "SV AWD",
    "msrp": 29080
   },
   {
    "name": "SR AWD",
    "msrp": 30480
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L I4",
    "hp": 188,
    "transmission": "Xtronic CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.9,
   "widthIn": 72.9,
   "heightIn": 56.8,
   "wheelbaseIn": 111.2,
   "curbWeightLb": 3212,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": 100.8,
   "cargoCuFt": 15.4,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "All-wheel drive",
   "12.3-inch touchscreen",
   "Heated front seats & steering wheel",
   "Power moonroof",
   "ProPILOT Assist",
   "Bose 9-speaker audio"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/bc/NISSAN_ALTIMA_%28L34%29_China_%283%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Final model year; production expected to end mid-2026. Lineup cut to SV and SR grades only (S and SL dropped)."
 },
 {
  "id": "nissan-armada",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Armada",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size SUV",
  "category": "suv",
  "priceFrom": 58840,
  "priceTo": 79530,
  "trims": [
   {
    "name": "SV",
    "msrp": 58840
   },
   {
    "name": "NISMO 4WD",
    "msrp": 79530
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 425,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 209.6,
   "widthIn": 83.3,
   "heightIn": null,
   "wheelbaseIn": 121.1,
   "curbWeightLb": 5676,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.4,
   "cargoMaxCuFt": 97.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Klipsch 12-speaker premium audio",
   "PRO-4X off-road package",
   "Massaging front seats (Platinum Reserve)",
   "Head-up display",
   "ProPILOT Assist",
   "Second-row captain's chairs",
   "Tow package (8,500 lb)"
  ],
  "towingLb": 8500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/6c/Nissan_Armada_%28Y63%29_Washington_DC_Metro_Area%2C_USA.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Third generation (introduced 2025). Six grades for 2026: SV, SL, PRO-4X, Platinum, NISMO (new), Platinum Reserve."
 },
 {
  "id": "nissan-frontier",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Frontier",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "midsize pickup",
  "category": "truck",
  "priceFrom": 32150,
  "priceTo": 41870,
  "trims": [
   {
    "name": "S King Cab",
    "msrp": 32150
   },
   {
    "name": "SV",
    "msrp": 36190
   },
   {
    "name": "PRO-X",
    "msrp": 38570
   },
   {
    "name": "PRO-4X",
    "msrp": 41870
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.8L V6",
    "hp": 310,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.2,
   "widthIn": 74.7,
   "heightIn": 71.9,
   "wheelbaseIn": 126.0,
   "curbWeightLb": 4676,
   "groundClearanceIn": 9.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "PRO-4X off-road package with Bilstein shocks",
   "12.3-inch touchscreen",
   "Fender 10-speaker audio",
   "360-degree camera with off-road mode",
   "Spray-in bedliner & Utili-track system",
   "Tow package (up to 7,150 lb)"
  ],
  "towingLb": 7150,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/1/1d/Nissan_Frontier_%28D41%29_Pro-4X_Automesse_Ludwigsburg_2022_1X7A5942.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "King Cab (S only) or Crew Cab with 5- or 6-ft bed. Dimensions listed are for Crew Cab standard bed. Titan was discontinued after 2024, leaving Frontier as Nissan's only pickup."
 },
 {
  "id": "nissan-kicks",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Kicks",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 22730,
  "priceTo": 29065,
  "trims": [
   {
    "name": "S",
    "msrp": 22730
   },
   {
    "name": "SV",
    "msrp": 24470
   },
   {
    "name": "SR",
    "msrp": 27565
   },
   {
    "name": "SR AWD",
    "msrp": 29065
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 141,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 171.9,
   "widthIn": 71.8,
   "heightIn": 63.9,
   "wheelbaseIn": 104.1,
   "curbWeightLb": null,
   "groundClearanceIn": 8.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 30.0,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "All-wheel drive",
   "Dual 12.3-inch displays (SV/SR)",
   "Bose Personal Plus audio with headrest speakers",
   "Wireless Apple CarPlay & Android Auto",
   "Heated front seats & steering wheel",
   "360-degree camera"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/07/Nissan_Kicks_%28P16%29_DSC_2875.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Second-generation Kicks (introduced 2025). The old-generation budget 'Kicks Play' was dropped for 2026. Cargo is 30.0 cu ft FWD, 23.9 cu ft AWD."
 },
 {
  "id": "nissan-leaf",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Leaf",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact electric SUV",
  "category": "suv",
  "priceFrom": 25360,
  "priceTo": 38990,
  "trims": [
   {
    "name": "S",
    "msrp": 25360
   },
   {
    "name": "S+",
    "msrp": 29990
   },
   {
    "name": "SV+",
    "msrp": 34230
   },
   {
    "name": "Platinum+",
    "msrp": 38990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD (52 kWh)",
    "hp": 174,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Single-motor FWD (75 kWh)",
    "hp": 214,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 121,
    "evRangeMi": 303
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 171.3,
   "widthIn": 71.3,
   "heightIn": 61.0,
   "wheelbaseIn": 105.9,
   "curbWeightLb": 3948,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Dimming panoramic glass roof",
   "Native NACS (Tesla-style) fast-charge port",
   "Vehicle-to-load (V2L) power",
   "Dual 14.3-inch displays",
   "ProPILOT Assist",
   "360-degree camera",
   "Heated seats & steering wheel"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "All-new third generation for 2026, now a crossover-style EV. EPA range: 303 mi (S+), 288 mi (SV+), 259 mi (Platinum+); base S with 52 kWh battery arrives later and is not yet EPA-rated."
 },
 {
  "id": "nissan-murano",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Murano",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV (2-row)",
  "category": "suv",
  "priceFrom": 41670,
  "priceTo": 49800,
  "trims": [
   {
    "name": "SV",
    "msrp": 41670
   },
   {
    "name": "SL",
    "msrp": 46760
   },
   {
    "name": "Platinum",
    "msrp": 49800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L VC-Turbo I4",
    "hp": 241,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.9,
   "widthIn": 78.0,
   "heightIn": 67.9,
   "wheelbaseIn": 111.2,
   "curbWeightLb": 4323,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 32.9,
   "cargoMaxCuFt": 63.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "ProPILOT Assist 2.1 (new for 2026)",
   "Panoramic moonroof",
   "Massaging heated & ventilated front seats",
   "64-color ambient lighting",
   "Bose 10-speaker audio",
   "360-degree camera with Invisible Hood View"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/0c/2025_Nissan_Murano_%28Front%29_NYC_Auto_Show.png",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Fourth generation (introduced 2025); AWD standard for 2026. Climate uses haptic touch controls rather than physical knobs."
 },
 {
  "id": "nissan-pathfinder",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Pathfinder",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 39990,
  "priceTo": 50895,
  "trims": [
   {
    "name": "S",
    "msrp": 39990
   },
   {
    "name": "Rock Creek 4WD",
    "msrp": 46495
   },
   {
    "name": "Platinum",
    "msrp": 50895
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L V6",
    "hp": 284,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 197.7,
   "widthIn": 77.9,
   "heightIn": 69.7,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4484,
   "groundClearanceIn": 7.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 16.6,
   "cargoMaxCuFt": 80.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "12.3-inch touchscreen with wireless CarPlay/Android Auto (newly standard)",
   "ProPILOT Assist",
   "Panoramic moonroof",
   "Bose 13-speaker audio",
   "Second-row captain's chairs",
   "Head-up display",
   "Tow package (6,000 lb)"
  ],
  "towingLb": 6000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Nissan_Pathfinder_Rock_Creek_%28R53%29_AMA_Marbach_2025_DSC_8665.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Refreshed for 2026 (new front styling, upgraded tech). Trim ladder is S, SV, SL, Rock Creek, Platinum; some sources list base S at $38,995 vs Nissan's announced $39,990 start."
 },
 {
  "id": "nissan-rogue",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Rogue",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 30180,
  "priceTo": 40380,
  "trims": [
   {
    "name": "S",
    "msrp": 30180
   },
   {
    "name": "SV",
    "msrp": 31180
   },
   {
    "name": "Rock Creek AWD",
    "msrp": 35080
   },
   {
    "name": "SL",
    "msrp": 36680
   },
   {
    "name": "Platinum",
    "msrp": 40380
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L VC-Turbo I3",
    "hp": 201,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 33,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.0,
   "widthIn": 72.4,
   "heightIn": 66.5,
   "wheelbaseIn": 106.5,
   "curbWeightLb": 3371,
   "groundClearanceIn": 8.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 36.5,
   "cargoMaxCuFt": 74.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Head-up display",
   "Bose 10-speaker audio",
   "ProPILOT Assist",
   "Tri-zone automatic climate control",
   "Google built-in infotainment",
   "360-degree camera"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/3/30/Nissan_Rogue_%28T33%29_Washington_DC_Metro_Area%2C_USA.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "New Dark Armor appearance trim added between SV and SL for 2026. Plug-in hybrid version sold separately as Rogue Plug-in Hybrid."
 },
 {
  "id": "nissan-rogue-plug-in-hybrid",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Rogue Plug-in Hybrid",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV (PHEV, 3-row)",
  "category": "suv",
  "priceFrom": 45990,
  "priceTo": 49990,
  "trims": [
   {
    "name": "SL",
    "msrp": 45990
   },
   {
    "name": "Platinum",
    "msrp": 49990
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "2.4L I4 + twin electric motors",
    "hp": 248,
    "transmission": "1-speed direct drive",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 64,
    "evRangeMi": 38
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.4,
   "widthIn": 73.3,
   "heightIn": 68.8,
   "wheelbaseIn": 106.5,
   "curbWeightLb": 4751,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.8,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "10-inch head-up display (Platinum)",
   "Bose 9-speaker audio (Platinum)",
   "Power panoramic sunroof (Platinum)",
   "Heated front & rear seats",
   "Leather-appointed seating",
   "20 kWh battery with DC fast charging"
  ],
  "towingLb": 1500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/a/ab/Nissan_Rogue_PHEV_Front.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "New nameplate for 2026, built on the Mitsubishi Outlander PHEV platform with standard AWD and a small third row (7 seats). 64 MPGe combined, 26 mpg on gas, 420-mile total range."
 },
 {
  "id": "nissan-sentra",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Sentra",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact sedan",
  "category": "car",
  "priceFrom": 22400,
  "priceTo": 27990,
  "trims": [
   {
    "name": "S",
    "msrp": 22400
   },
   {
    "name": "SV",
    "msrp": 23170
   },
   {
    "name": "SR",
    "msrp": 25000
   },
   {
    "name": "SL",
    "msrp": 27990
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 149,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 34,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.3,
   "widthIn": 71.5,
   "heightIn": null,
   "wheelbaseIn": 106.5,
   "curbWeightLb": 3097,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": 96.1,
   "cargoCuFt": 14.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Dual 12.3-inch displays",
   "Wireless Apple CarPlay & Android Auto",
   "Heated front seats & heated steering wheel",
   "Power sunroof (SL)",
   "Quilted leatherette upholstery (SL)",
   "ProPILOT Assist",
   "360-degree camera"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/7c/2026_Nissan_Sentra_front_view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "All-new ninth generation for 2026. Climate is controlled via capacitive-touch HVAC panel (not physical knobs); EPA 30/40 mpg on S/SV, 33 combined on SR/SL."
 },
 {
  "id": "nissan-z",
  "make": "Nissan",
  "manufacturer": "Nissan Motor Corporation",
  "model": "Z",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 42970,
  "priceTo": 65750,
  "trims": [
   {
    "name": "Sport",
    "msrp": 42970
   },
   {
    "name": "Performance",
    "msrp": 52970
   },
   {
    "name": "Heritage Edition",
    "msrp": 55910
   },
   {
    "name": "NISMO",
    "msrp": 65750
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6",
    "hp": 400,
    "transmission": "6-speed manual or 9-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo V6 (NISMO)",
    "hp": 420,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 172.4,
   "widthIn": 72.6,
   "heightIn": 51.8,
   "wheelbaseIn": 100.4,
   "curbWeightLb": 3486,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 6.9,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Bose 8-speaker audio",
   "Mechanical limited-slip differential",
   "Launch control (manual & auto)",
   "RAYS forged 19-inch wheels",
   "Heated leather seats",
   "Heritage Edition yellow paint & bronze wheels"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/0/0a/2023_Nissan_Z%2C_NYIAS_2022.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Heritage Edition new for 2026, celebrating the Z's heritage. NISMO is automatic-only. GT-R was discontinued after 2025 (R35 production ended)."
 },
 {
  "id": "polestar-polestar-3",
  "make": "Polestar",
  "manufacturer": "Geely Holding (Polestar)",
  "model": "Polestar 3",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric luxury SUV",
  "category": "suv",
  "priceFrom": 67500,
  "priceTo": 79400,
  "trims": [
   {
    "name": "Long Range Single Motor",
    "msrp": 67500
   },
   {
    "name": "Long Range Dual Motor",
    "msrp": 73400
   },
   {
    "name": "Long Range Dual Motor Performance",
    "msrp": 79400
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 329,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 350
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 536,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 89,
    "evRangeMi": 315
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Performance Pack)",
    "hp": 671,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 83,
    "evRangeMi": 279
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 192.9,
   "widthIn": 77.5,
   "heightIn": 64.0,
   "wheelbaseIn": 117.5,
   "curbWeightLb": 5696,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.1,
   "cargoMaxCuFt": 49.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins premium audio",
   "Pilot Pack with lidar",
   "Performance Pack",
   "Air suspension (standard)",
   "Head-up display",
   "22-inch wheels",
   "Ventilated Nappa leather seats"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Polestar_3_IAA_2023_1X7A0703.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Built in South Carolina. MY2026 update adds power across the range (329/536/671 hp). Trim prices derived from sources quoting with-destination figures ($1,400 fee); EPA ranges shown are latest published and may shift slightly for MY26. Note: US government Connected Car Rules bar Polestar from selling 2027-model-year vehicles; 2026 models remain on sale."
 },
 {
  "id": "polestar-polestar-4",
  "make": "Polestar",
  "manufacturer": "Geely Holding (Polestar)",
  "model": "Polestar 4",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric SUV coupe",
  "category": "suv",
  "priceFrom": 56400,
  "priceTo": 62900,
  "trims": [
   {
    "name": "Long Range Single Motor",
    "msrp": 56400
   },
   {
    "name": "Long Range Dual Motor",
    "msrp": 62900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 272,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 113,
    "evRangeMi": 300
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 544,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 98,
    "evRangeMi": 270
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 190.5,
   "widthIn": 78.0,
   "heightIn": 60.7,
   "wheelbaseIn": 118.1,
   "curbWeightLb": 5200,
   "groundClearanceIn": 6.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 18.6,
   "cargoMaxCuFt": 54.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Harman Kardon premium audio",
   "Performance Pack (Dual Motor)",
   "Full-length electrochromic glass roof",
   "Nappa leather with massage",
   "Pilot Pack driver assistance",
   "22-inch wheels",
   "Digital rear-view mirror"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/3/33/Polestar_4.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "No rear window; uses a camera-based digital rear-view mirror. US cars built in Busan, South Korea. Polestar is barred from 2027-MY US sales under federal Connected Car Rules; 2026 models remain on sale. Volume/climate controls are touchscreen- and steering-wheel-based."
 },
 {
  "id": "porsche-911",
  "make": "Porsche",
  "manufacturer": "Volkswagen Group",
  "model": "911",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 133200,
  "priceTo": 272000,
  "trims": [
   {
    "name": "Carrera",
    "msrp": 133200
   },
   {
    "name": "Carrera GTS T-Hybrid",
    "msrp": 178200
   },
   {
    "name": "Turbo S",
    "msrp": 272000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbo flat-6",
    "hp": 388,
    "transmission": "8-speed PDK",
    "manualAvailable": true,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.6L T-Hybrid flat-6 (GTS)",
    "hp": 532,
    "transmission": "8-speed PDK",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 178.8,
   "widthIn": 72.9,
   "heightIn": 51.1,
   "wheelbaseIn": 96.5,
   "curbWeightLb": 3400,
   "groundClearanceIn": 4.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 4.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Cabriolet and Targa body styles",
   "7-speed manual (Carrera T) / 6-speed manual (GT3)",
   "Sport Chrono package",
   "Rear-axle steering",
   "Burmester high-end audio",
   "PCCB carbon-ceramic brakes",
   "Lightweight & Weissach packages"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "992.2 generation. Wide range: Carrera, T, S, GTS T-Hybrid, Turbo, 701-hp Turbo S T-Hybrid, GT3. Porsche raised prices repeatedly during 2025, so base MSRP is approximate (~$133,000-$134,000 before ~$2,250 delivery); Turbo S price approximate. Rear seats are +2 style; deleted on some variants."
 },
 {
  "id": "porsche-cayenne",
  "make": "Porsche",
  "manufacturer": "Volkswagen Group",
  "model": "Cayenne",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize luxury SUV",
  "category": "suv",
  "priceFrom": 86800,
  "priceTo": 153000,
  "trims": [
   {
    "name": "Cayenne",
    "msrp": 86800
   },
   {
    "name": "Cayenne S",
    "msrp": 99000
   },
   {
    "name": "Turbo E-Hybrid",
    "msrp": 153000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo V6",
    "hp": 348,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "4.0L twin-turbo V8 (S / GTS)",
    "hp": 468,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "3.0L V6 / 4.0L V8 E-Hybrid",
    "hp": 463,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 24
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.1,
   "widthIn": 78.1,
   "heightIn": 66.9,
   "wheelbaseIn": 114.0,
   "curbWeightLb": 4949,
   "groundClearanceIn": 7.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.1,
   "cargoMaxCuFt": 60.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Cayenne Coupe body style",
   "Adaptive air suspension",
   "Rear-axle steering",
   "Burmester high-end audio",
   "Panoramic roof",
   "Towing package (7,700 lb)"
  ],
  "towingLb": 7700,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Gas and E-Hybrid Cayenne continue alongside the new Cayenne Electric. Turbo E-Hybrid makes 729 hp. Prices approximate; base derived from published $89,050 figure less ~$2,250 delivery fee. EV range of E-Hybrid approx. 20-25 miles."
 },
 {
  "id": "porsche-cayenne-electric",
  "make": "Porsche",
  "manufacturer": "Volkswagen Group",
  "model": "Cayenne Electric",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric luxury SUV",
  "category": "suv",
  "priceFrom": 111350,
  "priceTo": 165350,
  "trims": [
   {
    "name": "Cayenne Electric",
    "msrp": 111350
   },
   {
    "name": "Cayenne Turbo Electric",
    "msrp": 165350
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 435,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Turbo)",
    "hp": 1139,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.0,
   "widthIn": 78.6,
   "heightIn": 66.4,
   "wheelbaseIn": 119.0,
   "curbWeightLb": 5700,
   "groundClearanceIn": 7.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Coupe body style (from $113,800)",
   "Flow Display curved OLED cockpit",
   "Active Ride suspension",
   "Rear-axle steering",
   "800-volt charging up to 400 kW",
   "Heat pump with predictive thermal management"
  ],
  "towingLb": 7700,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new EV flagship SUV revealed late 2025; US deliveries during 2026. Announced prices ($111,350 base, $165,350 Turbo) may include delivery fee. Turbo hp is peak launch-control figure (~845 hp continuous); EPA range not yet published. S Coupe Electric ($131,200) slots between."
 },
 {
  "id": "porsche-macan",
  "make": "Porsche",
  "manufacturer": "Volkswagen Group",
  "model": "Macan",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 63200,
  "priceTo": 72200,
  "trims": [
   {
    "name": "Macan",
    "msrp": 63200
   },
   {
    "name": "Macan S",
    "msrp": 72200
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 261,
    "transmission": "7-speed PDK",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.9L twin-turbo V6 (S)",
    "hp": 375,
    "transmission": "7-speed PDK",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 19,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 186.1,
   "widthIn": 76.1,
   "heightIn": 63.9,
   "wheelbaseIn": 110.5,
   "curbWeightLb": 4029,
   "groundClearanceIn": 6.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.2,
   "cargoMaxCuFt": 52.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Adaptive air suspension",
   "Sport Chrono package",
   "Bose premium audio",
   "Panoramic roof",
   "14-way comfort seats"
  ],
  "towingLb": 4400,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Final model year for the gas Macan in the US; production winds down ahead of its electric-only future. Prices approximate (derived from listings that may include delivery fee)."
 },
 {
  "id": "porsche-macan-electric",
  "make": "Porsche",
  "manufacturer": "Volkswagen Group",
  "model": "Macan Electric",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric luxury SUV",
  "category": "suv",
  "priceFrom": 78000,
  "priceTo": 108000,
  "trims": [
   {
    "name": "Macan Electric",
    "msrp": 78000
   },
   {
    "name": "Macan 4",
    "msrp": 82000
   },
   {
    "name": "Macan Turbo Electric",
    "msrp": 108000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 335,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 315
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (4 / 4S / Turbo)",
    "hp": 630,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 288
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 188.4,
   "widthIn": 76.3,
   "heightIn": 63.8,
   "wheelbaseIn": 113.9,
   "curbWeightLb": 5200,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.9,
   "cargoMaxCuFt": 45.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Rear-axle steering",
   "Adaptive air suspension",
   "Augmented-reality head-up display",
   "Passenger-side display",
   "Bose or Burmester premium audio",
   "800-volt fast charging (up to 270 kW)"
  ],
  "towingLb": 4400,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "PPE-platform EV sold alongside the gas Macan for 2026. Prices approximate (advertised figures vary on delivery-fee inclusion); hp figures are peak with launch control. Adds a 3.0 cu-ft frunk."
 },
 {
  "id": "porsche-panamera",
  "make": "Porsche",
  "manufacturer": "Volkswagen Group",
  "model": "Panamera",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury sport sedan",
  "category": "car",
  "priceFrom": 110700,
  "priceTo": 232000,
  "trims": [
   {
    "name": "Panamera",
    "msrp": 110700
   },
   {
    "name": "Panamera 4",
    "msrp": 117000
   },
   {
    "name": "Turbo S E-Hybrid",
    "msrp": 232000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.9L twin-turbo V6",
    "hp": 348,
    "transmission": "8-speed PDK",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "AWD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.9L V6 / 4.0L V8 E-Hybrid",
    "hp": 536,
    "transmission": "8-speed PDK",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.8,
   "widthIn": 76.3,
   "heightIn": 56.4,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4400,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.4,
   "cargoMaxCuFt": 45.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Porsche Active Ride suspension",
   "Executive long-wheelbase versions",
   "Burmester high-end audio",
   "Rear-axle steering",
   "Panoramic roof",
   "Multiple E-Hybrid powertrains (4, 4S, Turbo, Turbo S)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Third generation (new 2024). Liftback body. E-Hybrid PHEVs span roughly 536-771 hp (Turbo S E-Hybrid). Base and top prices approximate; Porsche adjusted prices during 2025."
 },
 {
  "id": "porsche-taycan",
  "make": "Porsche",
  "manufacturer": "Volkswagen Group",
  "model": "Taycan",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "electric sports sedan",
  "category": "car",
  "priceFrom": 100300,
  "priceTo": 230000,
  "trims": [
   {
    "name": "Taycan",
    "msrp": 100300
   },
   {
    "name": "Taycan 4",
    "msrp": 104200
   },
   {
    "name": "Taycan 4S",
    "msrp": 119400
   },
   {
    "name": "Taycan Turbo GT",
    "msrp": 230000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 402,
    "transmission": "2-speed (rear axle)",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 96,
    "evRangeMi": 318
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (up to Turbo GT)",
    "hp": 1019,
    "transmission": "2-speed (rear axle)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 84,
    "evRangeMi": 301
   }
  ],
  "seats": [
   4
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.4,
   "widthIn": 77.4,
   "heightIn": 54.3,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4800,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Cross Turismo wagon body style",
   "Adaptive air suspension / Active Ride",
   "Rear-axle steering",
   "Burmester high-end audio",
   "Panoramic roof with variable transparency",
   "Performance Battery Plus"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Heavily updated for 2025 with more range and 320-kW charging. Turbo GT price is latest published figure (2025). Cross Turismo wagon variants sold under same nameplate. hp figures are peak/overboost."
 },
 {
  "id": "ram-1500",
  "make": "Ram",
  "manufacturer": "Stellantis",
  "model": "1500",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size pickup",
  "category": "truck",
  "priceFrom": 42025,
  "priceTo": 88800,
  "trims": [
   {
    "name": "Tradesman",
    "msrp": 42025
   },
   {
    "name": "RHO",
    "msrp": 71200
   },
   {
    "name": "Tungsten",
    "msrp": 88800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6 eTorque mild hybrid",
    "hp": 305,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.7L HEMI V8 eTorque",
    "hp": 395,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6 (Hurricane SO)",
    "hp": 420,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L twin-turbo I6 high-output (RHO)",
    "hp": 540,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 15,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 232.9,
   "widthIn": 82.1,
   "heightIn": 77.5,
   "wheelbaseIn": 144.5,
   "curbWeightLb": 5300,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "RamBox bedside storage",
   "14.4-inch Uconnect touchscreen",
   "Klipsch 23-speaker audio",
   "Four-corner air suspension",
   "Dual-pane panoramic sunroof",
   "Multifunction tailgate",
   "Digital rearview mirror",
   "Head-up display"
  ],
  "towingLb": 11550,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/84/2025_RAM_1500%2C_front_7.1.25.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "5.7L HEMI V8 returns for 2026 alongside the Hurricane sixes; 540-hp RHO off-road flagship included as a trim here. Ramcharger range-extended EV pickup delayed (not included). Dims are crew cab 5'7\" bed. Prices exclude $2,595 destination."
 },
 {
  "id": "ram-2500-3500",
  "make": "Ram",
  "manufacturer": "Stellantis",
  "model": "2500/3500 HD",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "heavy-duty pickup",
  "category": "truck",
  "priceFrom": 46485,
  "priceTo": 73280,
  "trims": [
   {
    "name": "Tradesman",
    "msrp": 46485
   },
   {
    "name": "Power Wagon (2500)",
    "msrp": 71920
   },
   {
    "name": "Limited",
    "msrp": 73280
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.4L HEMI V8",
    "hp": 405,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "diesel",
    "engine": "6.7L Cummins turbodiesel I6",
    "hp": 430,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   3,
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 238.8,
   "widthIn": 83.4,
   "heightIn": 79.8,
   "wheelbaseIn": 149.4,
   "curbWeightLb": 7400,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "High-output Cummins diesel (3500)",
   "Dual rear wheels (3500)",
   "Power Wagon off-road package with winch",
   "Rear air suspension",
   "14.4-inch Uconnect touchscreen",
   "5th-wheel/gooseneck towing prep",
   "Digital rearview mirror"
  ],
  "towingLb": 36610,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/4/45/RAM_3500_and_2019_2500_RAM_Power_Wagon.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Single record covers Ram 2500 and 3500. Max tow rating (36,610 lb) is 3500 dually with high-output Cummins; 2500 tows up to ~20,000 lb. Heavy-duty trucks are exempt from EPA mpg labeling. Base price derived from advertised price including $2,595 destination; regular, crew, and mega cabs offered."
 },
 {
  "id": "ram-promaster",
  "make": "Ram",
  "manufacturer": "Stellantis",
  "model": "ProMaster",
  "year": 2026,
  "bodyStyle": "van",
  "segment": "full-size cargo van",
  "category": "van",
  "priceFrom": 43330,
  "priceTo": 57630,
  "trims": [
   {
    "name": "1500 Tradesman Low Roof",
    "msrp": 43330
   },
   {
    "name": "3500 SLT+ Super High Roof Extended",
    "msrp": 57630
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.6L V6",
    "hp": 276,
    "transmission": "9-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   }
  ],
  "seats": [
   2,
   3
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 213.9,
   "widthIn": 81.3,
   "heightIn": 90.4,
   "wheelbaseIn": 136.0,
   "curbWeightLb": 4600,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Multiple lengths and roof heights (up to 463 cu ft cargo)",
   "10.1-inch Uconnect 5 touchscreen",
   "Crosswind assist",
   "Digital rearview mirror",
   "270-degree rear door opening",
   "Window van and chassis-cab configurations"
  ],
  "towingLb": 6910,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/a/a1/2018_Ram_ProMaster_1500_cargo_van%2C_front_left%2C_08-06-2023.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Front-wheel-drive commercial van in 1500/2500/3500 series with many body configurations; dims shown are 136-inch-wheelbase low roof. Prices derived from destination-inclusive listings. ProMaster EV no longer offered for retail 2026. Not EPA mpg rated (commercial class)."
 },
 {
  "id": "rivian-r1s",
  "make": "Rivian",
  "manufacturer": "Rivian Automotive",
  "model": "R1S",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size electric 3-row SUV",
  "category": "suv",
  "priceFrom": 90990,
  "priceTo": 121990,
  "trims": [
   {
    "name": "Dual Motor (Max pack)",
    "msrp": 90990
   },
   {
    "name": "Tri Motor (Max pack)",
    "msrp": 106990
   },
   {
    "name": "Quad Motor (Max pack)",
    "msrp": 121990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 533,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 76,
    "evRangeMi": 410
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD",
    "hp": 850,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 72,
    "evRangeMi": 405
   },
   {
    "type": "ev",
    "engine": "Quad-motor AWD",
    "hp": 1025,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 70,
    "evRangeMi": 374
   }
  ],
  "seats": [
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 200.8,
   "widthIn": 81.8,
   "heightIn": 77.3,
   "wheelbaseIn": 121.1,
   "curbWeightLb": 7057,
   "groundClearanceIn": 14.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.6,
   "cargoMaxCuFt": 104.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Standard 3rd row (7 seats)",
   "Full-size spare tire option",
   "All-Terrain package",
   "Rivian Autonomy Platform+ (hands-free driving)",
   "Ascend interior with Dynamic Glass roof (Tri/Quad)",
   "Rivian Premium Audio by Dolby Atmos",
   "Air suspension (standard)"
  ],
  "towingLb": 7700,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/6a/Rivian_R1S%2C_Howard_Ave%2C_Burlingame.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Gen-2 R1S. Lower Dual Standard/Large configurations were dropped in June 2026; Dual Motor Max pack is now the base trim at $90,990 (a $7,000+ increase). Cargo figure is behind 3rd row; max is all rows folded. Frunk adds 11.1 cu ft."
 },
 {
  "id": "rivian-r1t",
  "make": "Rivian",
  "manufacturer": "Rivian Automotive",
  "model": "R1T",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "electric adventure pickup",
  "category": "truck",
  "priceFrom": 79990,
  "priceTo": 115990,
  "trims": [
   {
    "name": "Dual Motor (Large pack)",
    "msrp": 79990
   },
   {
    "name": "Dual Motor (Max pack)",
    "msrp": 84990
   },
   {
    "name": "Tri Motor (Max pack)",
    "msrp": 100990
   },
   {
    "name": "Quad Motor (Max pack)",
    "msrp": 115990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 533,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 78,
    "evRangeMi": 420
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD",
    "hp": 850,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 74,
    "evRangeMi": 371
   },
   {
    "type": "ev",
    "engine": "Quad-motor AWD",
    "hp": 1025,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 72,
    "evRangeMi": 374
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 217.1,
   "widthIn": 81.8,
   "heightIn": 75.7,
   "wheelbaseIn": 135.8,
   "curbWeightLb": 6949,
   "groundClearanceIn": 14.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 32.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Gear Tunnel pass-through storage",
   "Full-size spare tire option",
   "All-Terrain package with 20-inch AT tires",
   "Rivian Autonomy Platform+ (hands-free driving)",
   "Ascend interior with Dynamic Glass roof (Tri/Quad)",
   "Camp Kitchen and bed accessories",
   "Air suspension (standard, up to 14.9-in clearance)"
  ],
  "towingLb": 11000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/78/Rivian-r1t-2021.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Gen-2 R1T. Entry Dual Standard pack was dropped in June 2026, raising the base price $7,000-$9,000; Dual Motor Large pack is now the base trim. Cargo figure is bed volume; adds 11.1 cu-ft frunk and gear tunnel. Ground clearance is max on standard air suspension. Range shown for Dual is with Max pack (Large pack: 330 mi)."
 },
 {
  "id": "rivian-r2",
  "make": "Rivian",
  "manufacturer": "Rivian Automotive",
  "model": "R2",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric SUV",
  "category": "suv",
  "priceFrom": 53990,
  "priceTo": 57990,
  "trims": [
   {
    "name": "Premium AWD",
    "msrp": 53990
   },
   {
    "name": "Performance AWD (Launch Package)",
    "msrp": 57990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": null,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 330
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.6,
   "widthIn": 75.0,
   "heightIn": 66.9,
   "wheelbaseIn": 115.6,
   "curbWeightLb": null,
   "groundClearanceIn": 9.8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Front and rear powered glass (drop-down rear window)",
   "Fold-flat front and rear seats for camping",
   "Frunk with power close",
   "Rivian Autonomy Platform",
   "Quad-motor variant planned later",
   "NACS charge port (native Tesla Supercharger access)"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Rivian_R2.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "All-new model: first customer deliveries began June 9, 2026, initially only as the Performance AWD with Launch Package ($57,990, 330 mi). Premium AWD ($53,990) follows late 2026; Standard RWD ($48,490) arrives first half of 2027. Final EPA figures, curb weight, hp and cargo specs not yet published — treat detailed specs as preliminary."
 },
 {
  "id": "rolls-royce-cullinan",
  "make": "Rolls-Royce",
  "manufacturer": "BMW Group",
  "model": "Cullinan",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "flagship ultra-luxury SUV",
  "category": "suv",
  "priceFrom": 441250,
  "priceTo": 510000,
  "trims": [
   {
    "name": "Cullinan",
    "msrp": 441250
   },
   {
    "name": "Cullinan Black Badge",
    "msrp": 510000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.75L twin-turbo V12",
    "hp": 563,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 14,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210.3,
   "widthIn": 79.0,
   "heightIn": 72.0,
   "wheelbaseIn": 130.0,
   "curbWeightLb": 6069,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.0,
   "cargoMaxCuFt": 68.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Viewing Suite (tailgate seats)",
   "Immersive rear seating with drinks cabinet",
   "Starlight Headliner",
   "Recreation Module",
   "Individual rear seats configuration"
  ],
  "towingLb": 7716,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Cullinan Series II. Black Badge makes 592 hp; its price is approximate (~$510k). Base 2026 MSRP verified at $441,250."
 },
 {
  "id": "rolls-royce-ghost",
  "make": "Rolls-Royce",
  "manufacturer": "BMW Group",
  "model": "Ghost",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "ultra-luxury sedan",
  "category": "car",
  "priceFrom": 354750,
  "priceTo": 442000,
  "trims": [
   {
    "name": "Ghost",
    "msrp": 354750
   },
   {
    "name": "Ghost Extended",
    "msrp": 397000
   },
   {
    "name": "Ghost Black Badge",
    "msrp": 442000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.75L twin-turbo V12",
    "hp": 563,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 14,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 218.3,
   "widthIn": 77.9,
   "heightIn": 61.9,
   "wheelbaseIn": 129.7,
   "curbWeightLb": 5628,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 17.9,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Starlight Headliner",
   "Illuminated fascia",
   "Rear theatre configuration",
   "Bespoke audio",
   "Coach doors with power close (standard)",
   "Bespoke paint and embroidery"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Ghost Series II. Base price reflects 2025 Series II pricing; 2026 carryover expected slightly higher. Black Badge makes 592 hp."
 },
 {
  "id": "rolls-royce-phantom",
  "make": "Rolls-Royce",
  "manufacturer": "BMW Group",
  "model": "Phantom",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "flagship ultra-luxury sedan",
  "category": "car",
  "priceFrom": 510000,
  "priceTo": 610000,
  "trims": [
   {
    "name": "Phantom",
    "msrp": 510000
   },
   {
    "name": "Phantom Extended",
    "msrp": 610000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.75L twin-turbo V12",
    "hp": 563,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 14,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 227.2,
   "widthIn": 79.4,
   "heightIn": 64.9,
   "wheelbaseIn": 139.8,
   "curbWeightLb": 5862,
   "groundClearanceIn": 6.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 19.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "The Gallery bespoke dashboard artwork",
   "Starlight Headliner",
   "Privacy suite (Extended)",
   "Rear champagne cooler",
   "Bespoke commissioning program"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Phantom VIII Series II. Rolls-Royce does not publish detailed US MSRPs; base price approximate (~$510k, Extended ~$610k). Nearly every car is bespoke-optioned well above base."
 },
 {
  "id": "rolls-royce-spectre",
  "make": "Rolls-Royce",
  "manufacturer": "BMW Group",
  "model": "Spectre",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "ultra-luxury electric coupe",
  "category": "car",
  "priceFrom": 397750,
  "priceTo": 467750,
  "trims": [
   {
    "name": "Spectre",
    "msrp": 397750
   },
   {
    "name": "Spectre Black Badge",
    "msrp": 467750
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 584,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 266
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 215.6,
   "widthIn": 79.9,
   "heightIn": 61.9,
   "wheelbaseIn": 126.4,
   "curbWeightLb": 6371,
   "groundClearanceIn": 6.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Starlight Doors (illuminated)",
   "Starlight Headliner",
   "Illuminated fascia",
   "23-inch wheels",
   "Bespoke two-tone paint"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Rolls-Royce's first EV. Black Badge raises output to ~650 hp. 102-kWh battery; EPA range ~266 mi."
 },
 {
  "id": "subaru-ascent",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Ascent",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 40795,
  "priceTo": 51995,
  "trims": [
   {
    "name": "Premium",
    "msrp": 40795
   },
   {
    "name": "Limited",
    "msrp": 47885
   },
   {
    "name": "Limited Bronze Edition",
    "msrp": 48995
   },
   {
    "name": "Touring",
    "msrp": 51165
   },
   {
    "name": "Onyx Edition Touring",
    "msrp": 51995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo flat-4",
    "hp": 260,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.8,
   "widthIn": 76.0,
   "heightIn": 71.6,
   "wheelbaseIn": 113.8,
   "curbWeightLb": 4432,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": 153.5,
   "cargoCuFt": 17.8,
   "cargoMaxCuFt": 86.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Second-row captain's chairs (7-seat) or bench (8-seat)",
   "Panoramic power moonroof",
   "Harman Kardon premium audio",
   "Heated and ventilated front seats",
   "Power rear gate",
   "360-degree camera"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024%20Subaru%20Evoltis%202.4%20Touring%20Eyesight%20in%20Crystal%20White%20Pearl,%20front%20right.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Widely reported to be the Ascent's final model year, with production ending during 2026. Base trim dropped for 2026; lineup starts at Premium."
 },
 {
  "id": "subaru-brz",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "BRZ",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 35860,
  "priceTo": 39360,
  "trims": [
   {
    "name": "Limited (6MT)",
    "msrp": 35860
   },
   {
    "name": "Limited (6AT)",
    "msrp": 36710
   },
   {
    "name": "tS",
    "msrp": 38360
   },
   {
    "name": "Series.Yellow",
    "msrp": 39360
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L flat-4",
    "hp": 228,
    "transmission": "6-speed manual or 6-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 167.9,
   "widthIn": 69.9,
   "heightIn": 51.6,
   "wheelbaseIn": 101.4,
   "curbWeightLb": 2851,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 6.3,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "STI-tuned dampers and Brembo brakes (tS)",
   "6-speed automatic with EyeSight",
   "Ultrasuede/leather upholstery",
   "8-inch touchscreen with wireless CarPlay",
   "Digital gauge cluster",
   "Series.Yellow limited edition paint"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Subaru%20BRZ%20(ZD8)%20IMG%200771.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Premium base trim dropped for 2026; lineup now starts at Limited. 2+2 seating with very small rear seats. Automatic available on Limited only; mpg is 22 combined with manual, 25 with automatic."
 },
 {
  "id": "subaru-crosstrek",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Crosstrek",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 26995,
  "priceTo": 34995,
  "trims": [
   {
    "name": "Base",
    "msrp": 26995
   },
   {
    "name": "Premium",
    "msrp": 27995
   },
   {
    "name": "Sport",
    "msrp": 30625
   },
   {
    "name": "Limited",
    "msrp": 32995
   },
   {
    "name": "Wilderness",
    "msrp": 33795
   },
   {
    "name": "Sport Hybrid",
    "msrp": 33995
   },
   {
    "name": "Limited Hybrid",
    "msrp": 34995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L flat-4",
    "hp": 180,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L flat-4 hybrid",
    "hp": 194,
    "transmission": "CVT (hybrid transaxle)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 36,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 176.4,
   "widthIn": 71.7,
   "heightIn": 63.6,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3311,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": 100.5,
   "cargoCuFt": 20.0,
   "cargoMaxCuFt": 54.7,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Wilderness trim with 9.3-in ground clearance and all-terrain tires",
   "Harman Kardon premium audio",
   "Power moonroof",
   "Heated front seats and steering wheel",
   "11.6-inch touchscreen",
   "Blind-Spot Detection with Rear Cross-Traffic Alert"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Subaru%20Crosstrek%20(GU)%201X7A2484.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "For 2026 the base engine is upgraded to a 180-hp 2.5L across the line, and a new Crosstrek Hybrid (194 hp) joins the lineup. Max 3,500-lb tow rating applies to Wilderness; most trims are rated 1,500 lb."
 },
 {
  "id": "subaru-forester",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Forester",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 29995,
  "priceTo": 41545,
  "trims": [
   {
    "name": "Base",
    "msrp": 29995
   },
   {
    "name": "Premium",
    "msrp": 32315
   },
   {
    "name": "Sport",
    "msrp": 33225
   },
   {
    "name": "Premium Hybrid",
    "msrp": 34730
   },
   {
    "name": "Sport Hybrid (Onyx Edition)",
    "msrp": 36495
   },
   {
    "name": "Wilderness",
    "msrp": 38385
   },
   {
    "name": "Limited Hybrid",
    "msrp": 38995
   },
   {
    "name": "Touring Hybrid",
    "msrp": 41545
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L flat-4",
    "hp": 180,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L flat-4 hybrid",
    "hp": 194,
    "transmission": "CVT (hybrid transaxle)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 35,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.3,
   "widthIn": 72.0,
   "heightIn": 68.1,
   "wheelbaseIn": 105.1,
   "curbWeightLb": 3662,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": 111.6,
   "cargoCuFt": 29.6,
   "cargoMaxCuFt": 74.4,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Series-parallel hybrid powertrain",
   "Wilderness trim with 9.3-in ground clearance",
   "Panoramic power moonroof",
   "Harman Kardon premium audio",
   "Ventilated front seats (Touring)",
   "Power rear gate with hands-free access",
   "11.6-inch touchscreen"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Subaru%20Forester%20(SL)%20e-BOXER%20DSC%208811.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Sixth generation continues; Subaru cut 2026 prices in late 2025 (hybrid down ~$2,000) and added a Sport Onyx Edition Hybrid. Cargo figures are for models without moonroof; 3,500-lb towing on Wilderness (most trims 1,500 lb)."
 },
 {
  "id": "subaru-impreza",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Impreza",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "compact car",
  "category": "car",
  "priceFrom": 26595,
  "priceTo": 29495,
  "trims": [
   {
    "name": "Sport",
    "msrp": 26595
   },
   {
    "name": "RS",
    "msrp": 29495
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L flat-4",
    "hp": 152,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L flat-4 (RS)",
    "hp": 182,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 29,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 176.2,
   "widthIn": 70.1,
   "heightIn": 57.8,
   "wheelbaseIn": 105.2,
   "curbWeightLb": 3277,
   "groundClearanceIn": 5.1
  },
  "interior": {
   "passengerVolumeCuFt": 96.3,
   "cargoCuFt": 20.4,
   "cargoMaxCuFt": 56.0,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "11.6-inch tablet-style touchscreen",
   "Harman Kardon premium audio (RS)",
   "Power moonroof",
   "Blind-Spot Detection with Rear Cross-Traffic Alert",
   "Heated front seats",
   "18-inch alloy wheels (RS)"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Subaru%20Impreza%20(GU)%20Automesse%20Ludwigsburg%202024%20IMG%201597.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Base trim discontinued for 2026; lineup now starts with Sport. Standard symmetrical AWD. Hatchback only (sedan is sold as the WRX)."
 },
 {
  "id": "subaru-outback",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Outback",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize SUV/wagon",
  "category": "suv",
  "priceFrom": 34995,
  "priceTo": 47995,
  "trims": [
   {
    "name": "Premium",
    "msrp": 34995
   },
   {
    "name": "Limited",
    "msrp": 41715
   },
   {
    "name": "Limited XT",
    "msrp": 44365
   },
   {
    "name": "Wilderness",
    "msrp": 44995
   },
   {
    "name": "Touring",
    "msrp": 45395
   },
   {
    "name": "Touring XT",
    "msrp": 47995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.5L flat-4",
    "hp": 180,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.4L turbo flat-4 (XT/Wilderness)",
    "hp": 260,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 191.2,
   "widthIn": 74.6,
   "heightIn": 66.1,
   "wheelbaseIn": 108.1,
   "curbWeightLb": 3913,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 34.6,
   "cargoMaxCuFt": 75.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "12.1-inch touchscreen with wireless CarPlay/Android Auto",
   "Harman Kardon premium audio",
   "Ventilated front seats",
   "Wilderness trim with 9.5-in ground clearance",
   "Power rear gate",
   "Heated steering wheel and rear seats",
   "360-degree surround view camera"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2026%20Subaru%20Outback%20Wilderness,%20front%20left,%2005-24-2026.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "All-new seventh generation for 2026 with a taller, boxier, more SUV-like body replacing the classic wagon profile. Physical climate controls return alongside the new 12.1-inch screen."
 },
 {
  "id": "subaru-solterra",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Solterra",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric SUV",
  "category": "suv",
  "priceFrom": 38495,
  "priceTo": 45555,
  "trims": [
   {
    "name": "Premium",
    "msrp": 38495
   },
   {
    "name": "Limited",
    "msrp": 41395
   },
   {
    "name": "Limited XT",
    "msrp": 42895
   },
   {
    "name": "Touring XT",
    "msrp": 45555
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 233,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 288
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (XT)",
    "hp": 338,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 278
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.6,
   "widthIn": 73.2,
   "heightIn": 65.0,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4560,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Native NACS (Tesla-style) charge port",
   "14-inch touchscreen (standard)",
   "Panoramic glass roof",
   "Harman Kardon premium audio",
   "360-degree camera",
   "Heated and ventilated front seats",
   "X-MODE with dual-function terrain modes"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Heavily redesigned for 2026: larger 74.7-kWh battery, more power, NACS port, ~25-minute 10-80% fast charging, and new 338-hp XT models. XT range figure (~278 mi) is Subaru's estimate."
 },
 {
  "id": "subaru-trailseeker",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Trailseeker",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize electric SUV",
  "category": "suv",
  "priceFrom": 39995,
  "priceTo": 46555,
  "trims": [
   {
    "name": "Premium",
    "msrp": 39995
   },
   {
    "name": "Limited",
    "msrp": 43995
   },
   {
    "name": "Touring",
    "msrp": 46555
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 375,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 280
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 190.6,
   "widthIn": 73.3,
   "heightIn": 65.8,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4900,
   "groundClearanceIn": 8.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 32.2,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Native NACS charge port",
   "14-inch touchscreen",
   "Panoramic glass roof",
   "Harman Kardon premium audio",
   "Roof rails with high load rating",
   "Heated front and rear seats"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2026%20Subaru%20Trailseeker%20(Prototype)%20at%20the%202025%20NYC%20Auto%20Show.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "All-new wagon-styled EV (Toyota bZ Woodland twin), on sale from spring 2026. 74.7-kWh battery, 0-60 in 4.4s. Range (~280 mi) is Subaru's estimate; length/height/curb weight are approximations pending full published specs."
 },
 {
  "id": "subaru-uncharted",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "Uncharted",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact electric SUV",
  "category": "suv",
  "priceFrom": 34995,
  "priceTo": 43795,
  "trims": [
   {
    "name": "Premium (FWD)",
    "msrp": 34995
   },
   {
    "name": "Sport",
    "msrp": 39795
   },
   {
    "name": "GT",
    "msrp": 43795
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD",
    "hp": 221,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 300
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 338,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 285
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 178.0,
   "widthIn": 73.6,
   "heightIn": 63.8,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 4400,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.0,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Native NACS charge port",
   "14-inch touchscreen",
   "Dual wireless phone chargers",
   "Panoramic fixed glass roof",
   "Heated front seats and steering wheel",
   "X-MODE (AWD models)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new compact EV (Toyota C-HR BEV twin), Crosstrek-sized; arrives at US dealers in early-to-mid 2026. 74.7-kWh battery. FWD Premium offered in limited numbers. Range figures are Subaru estimates (300+/285+ mi); dimensions, cargo and curb weight approximate."
 },
 {
  "id": "subaru-wrx",
  "make": "Subaru",
  "manufacturer": "Subaru Corporation",
  "model": "WRX",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "sport compact sedan",
  "category": "car",
  "priceFrom": 32495,
  "priceTo": 45995,
  "trims": [
   {
    "name": "WRX",
    "msrp": 32495
   },
   {
    "name": "Premium",
    "msrp": 33995
   },
   {
    "name": "Limited",
    "msrp": 38995
   },
   {
    "name": "GT (SPT)",
    "msrp": 44995
   },
   {
    "name": "tS",
    "msrp": 44995
   },
   {
    "name": "Series.Yellow",
    "msrp": 45995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo flat-4",
    "hp": 271,
    "transmission": "6-speed manual or SPT automatic (CVT)",
    "manualAvailable": true,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 183.8,
   "widthIn": 71.9,
   "heightIn": 57.8,
   "wheelbaseIn": 105.2,
   "curbWeightLb": 3345,
   "groundClearanceIn": 5.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.5,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Recaro front seats (tS)",
   "Adjustable electronic dampers (GT/tS)",
   "Brembo brakes (tS/Series.Yellow)",
   "Harman Kardon premium audio",
   "11.6-inch touchscreen",
   "Subaru Performance Transmission (SPT) automatic"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Subaru%20WRX%20(VB)%20Washington%20DC%20Metro%20Area,%20USA.jpg?width=1280",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "2026 base price cut roughly $3,400 vs 2025 and tS price reduced $2,710; keyless access now standard on base. 6-speed manual standard on most trims; SPT automatic optional on Limited and standard on GT."
 },
 {
  "id": "tesla-cybertruck",
  "make": "Tesla",
  "manufacturer": "Tesla, Inc.",
  "model": "Cybertruck",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size electric pickup",
  "category": "truck",
  "priceFrom": 69990,
  "priceTo": 99990,
  "trims": [
   {
    "name": "Dual Motor AWD",
    "msrp": 69990
   },
   {
    "name": "Premium AWD",
    "msrp": 79990
   },
   {
    "name": "Cyberbeast",
    "msrp": 99990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 600,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 81,
    "evRangeMi": 325
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (Cyberbeast)",
    "hp": 845,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 74,
    "evRangeMi": 320
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 223.7,
   "widthIn": 79.9,
   "heightIn": 70.5,
   "wheelbaseIn": 143.1,
   "curbWeightLb": 6669,
   "groundClearanceIn": 16.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 56.2,
   "cargoMaxCuFt": 67.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Powered tonneau cover (standard)",
   "Steer-by-wire with rear-wheel steering",
   "Adaptive air suspension",
   "Full Self-Driving (Supervised)",
   "Powershare bidirectional/vehicle-to-home power",
   "Rear touchscreen",
   "Off-road light bar and bed accessories"
  ],
  "towingLb": 11000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/e/e9/2024_Tesla_Cybertruck_Foundation_Series_IMG_0634_%28cropped%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Tesla does not use traditional model years; current production treated as 2026. Single-motor Long Range RWD trim was discontinued in 2025; lineup is now Dual Motor AWD ($69,990 after 2026 price cuts), Premium AWD and Cyberbeast. Cargo figure is the 6-ft bed volume; max includes frunk/sub-trunk. Ground clearance is max on air suspension. Prices exclude $1,995 destination."
 },
 {
  "id": "tesla-model-3",
  "make": "Tesla",
  "manufacturer": "Tesla, Inc.",
  "model": "Model 3",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize EV sedan",
  "category": "car",
  "priceFrom": 36990,
  "priceTo": 54990,
  "trims": [
   {
    "name": "Standard RWD",
    "msrp": 36990
   },
   {
    "name": "Premium RWD (Long Range)",
    "msrp": 42490
   },
   {
    "name": "Premium AWD (Long Range)",
    "msrp": 47490
   },
   {
    "name": "Performance AWD",
    "msrp": 54990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 286,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 132,
    "evRangeMi": 363
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 394,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 128,
    "evRangeMi": 346
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Performance)",
    "hp": 510,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 116,
    "evRangeMi": 298
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.8,
   "widthIn": 72.8,
   "heightIn": 56.7,
   "wheelbaseIn": 113.2,
   "curbWeightLb": 3880,
   "groundClearanceIn": 5.5
  },
  "interior": {
   "passengerVolumeCuFt": 97.0,
   "cargoCuFt": 19.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Full Self-Driving (Supervised)",
   "White premium interior",
   "19-inch Nova wheels",
   "Fixed glass roof (standard)",
   "Ventilated front seats (Premium/Performance)",
   "Rear-seat touchscreen",
   "Adaptive suspension (Performance)"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/69/Tesla_Model_3_%27Highland%27_%282024%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Tesla does not use traditional model years; current production ('Highland' generation) treated as 2026. Lineup restructured Oct 2025 into Standard/Premium/Performance; Standard trim has reduced content (textile seats, no glass-roof view, no rear screen). Audio control is a steering-wheel scroll wheel; climate is touchscreen-only. Prices exclude Tesla destination/order fees (~$1,640)."
 },
 {
  "id": "tesla-model-s",
  "make": "Tesla",
  "manufacturer": "Tesla, Inc.",
  "model": "Model S",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size luxury EV sedan",
  "category": "car",
  "priceFrom": 109990,
  "priceTo": 124900,
  "trims": [
   {
    "name": "All-Wheel Drive",
    "msrp": 109990
   },
   {
    "name": "Plaid",
    "msrp": 124900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 670,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 120,
    "evRangeMi": 410
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (Plaid)",
    "hp": 1020,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 116,
    "evRangeMi": 368
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 197.7,
   "widthIn": 78.2,
   "heightIn": 56.9,
   "wheelbaseIn": 116.5,
   "curbWeightLb": 4695,
   "groundClearanceIn": 4.6
  },
  "interior": {
   "passengerVolumeCuFt": 94.0,
   "cargoCuFt": 28.0,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Full Self-Driving (Supervised)",
   "Yoke steering wheel option",
   "21-inch wheels",
   "Cream or white/black interiors",
   "22-speaker audio",
   "Rear touchscreen",
   "Free Supercharging on remaining inventory units"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/b6/2021_Tesla_Model_S_P2_Long_Range_front_right_view.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "DISCONTINUED: Tesla ended Model S production in early 2026; custom orders closed and only remaining inventory units are for sale (Tesla raised prices ~$15,000 on final stock). Prices shown are final ex-destination inventory prices and are volatile. Remaining units include free Supercharging and Premium Connectivity."
 },
 {
  "id": "tesla-model-x",
  "make": "Tesla",
  "manufacturer": "Tesla, Inc.",
  "model": "Model X",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size luxury EV SUV",
  "category": "suv",
  "priceFrom": 114900,
  "priceTo": 129900,
  "trims": [
   {
    "name": "All-Wheel Drive",
    "msrp": 114900
   },
   {
    "name": "Plaid",
    "msrp": 129900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 670,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 102,
    "evRangeMi": 352
   },
   {
    "type": "ev",
    "engine": "Tri-motor AWD (Plaid)",
    "hp": 1020,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 98,
    "evRangeMi": 335
   }
  ],
  "seats": [
   5,
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.3,
   "widthIn": 78.9,
   "heightIn": 66.3,
   "wheelbaseIn": 116.7,
   "curbWeightLb": 5125,
   "groundClearanceIn": 5.4
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 37.1,
   "cargoMaxCuFt": 88.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Falcon-wing rear doors (standard)",
   "6-seat captain's chair layout",
   "Full Self-Driving (Supervised)",
   "Tow package (5,000 lb)",
   "22-inch wheels",
   "Cream/white interiors",
   "Rear touchscreen"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Tesla_Model_X_100D_Solid_Black_%281%29.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "DISCONTINUED: Tesla ended Model X production in early 2026; configurator removed and only remaining inventory is for sale (prices raised ~$15,000 on final stock, so shown prices are volatile). Remaining units include free Supercharging and Premium Connectivity."
 },
 {
  "id": "tesla-model-y",
  "make": "Tesla",
  "manufacturer": "Tesla, Inc.",
  "model": "Model Y",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize EV SUV",
  "category": "suv",
  "priceFrom": 39990,
  "priceTo": 61990,
  "trims": [
   {
    "name": "Standard RWD",
    "msrp": 39990
   },
   {
    "name": "Premium RWD (Long Range)",
    "msrp": 45990
   },
   {
    "name": "Premium AWD (Long Range)",
    "msrp": 49990
   },
   {
    "name": "Performance AWD",
    "msrp": 57990
   },
   {
    "name": "Model Y L Premium Launch Series (6-seat)",
    "msrp": 61990
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 300,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 123,
    "evRangeMi": 357
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 384,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 117,
    "evRangeMi": 327
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Performance)",
    "hp": 460,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 112,
    "evRangeMi": 306
   }
  ],
  "seats": [
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.9,
   "widthIn": 75.6,
   "heightIn": 63.9,
   "wheelbaseIn": 113.8,
   "curbWeightLb": 4154,
   "groundClearanceIn": 6.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 29.0,
   "cargoMaxCuFt": 76.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Full Self-Driving (Supervised)",
   "White premium interior",
   "Tow hitch (3,500 lb)",
   "Panoramic glass roof (standard)",
   "20-inch Helix wheels",
   "Rear-seat touchscreen",
   "Ventilated front seats (Premium)"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/8/82/Tesla_Model_Y_Juniper_Washington_DC_Metro_Area%2C_USA.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Tesla does not use traditional model years; current 'Juniper' refresh treated as 2026. Lineup: Standard, Premium RWD/AWD, Performance, plus new long-wheelbase 3-row Model Y L (6 seats, 325 mi) launched in the US July 2026 at $61,990 as listed by Tesla (Tesla's listed prices now include destination/order fees; other trims shown here exclude them). Climate is touchscreen-only."
 },
 {
  "id": "toyota-4runner",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "4Runner",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize off-road SUV",
  "category": "suv",
  "priceFrom": 42070,
  "priceTo": 68350,
  "trims": [
   {
    "name": "SR5",
    "msrp": 42070
   },
   {
    "name": "TRD Off-Road (i-FORCE MAX)",
    "msrp": 53090
   },
   {
    "name": "TRD Pro",
    "msrp": 68350
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo I4",
    "hp": 278,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.4L turbo I4 hybrid (i-FORCE MAX)",
    "hp": 326,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.9,
   "widthIn": 77.9,
   "heightIn": 70.8,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4455,
   "groundClearanceIn": 9.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 42.6,
   "cargoMaxCuFt": 90.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "i-FORCE MAX hybrid (326 hp)",
   "Power rear window",
   "Crawl Control & Multi-Terrain Select",
   "Stabilizer disconnect (Trailhunter/TRD Pro)",
   "14-inch touchscreen",
   "JBL audio",
   "Third-row seat (select trims)"
  ],
  "towingLb": 6000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Sixth generation (introduced 2025). SR5 base $42,070 for 2026; hybrid trims start around $53,090. TRD Pro/Trailhunter top prices approximate. 2WD offered on lower trims; hybrid is 4WD."
 },
 {
  "id": "toyota-c-hr",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "C-HR",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact electric SUV",
  "category": "suv",
  "priceFrom": 37000,
  "priceTo": 39000,
  "trims": [
   {
    "name": "SE",
    "msrp": 37000
   },
   {
    "name": "XSE",
    "msrp": 39000
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 338,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 287
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 177.9,
   "widthIn": 73.6,
   "heightIn": 63.8,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 4520,
   "groundClearanceIn": 5.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.4,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Standard 338-hp dual-motor AWD",
   "NACS charge port",
   "Fixed panoramic glass roof (XSE)",
   "JBL premium audio",
   "Heated & ventilated front seats",
   "Advanced Park"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "C-HR nameplate returns to the US for 2026 as a pure EV (coupe-styled crossover). 74.7-kWh battery; 287-mile range for SE, 273 for XSE on 20-inch wheels. 0-60 mph in about 5 seconds. Prices verified ($37,000/$39,000 before $1,450 destination)."
 },
 {
  "id": "toyota-camry",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Camry",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize sedan",
  "category": "car",
  "priceFrom": 29000,
  "priceTo": 35200,
  "trims": [
   {
    "name": "LE",
    "msrp": 29000
   },
   {
    "name": "SE",
    "msrp": 31300
   },
   {
    "name": "Nightshade",
    "msrp": 32300
   },
   {
    "name": "XLE",
    "msrp": 34000
   },
   {
    "name": "XSE",
    "msrp": 35200
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 225,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 51,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.5,
   "widthIn": 72.4,
   "heightIn": 56.9,
   "wheelbaseIn": 111.2,
   "curbWeightLb": 3450,
   "groundClearanceIn": 5.5
  },
  "interior": {
   "passengerVolumeCuFt": 99.0,
   "cargoCuFt": 15.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "AWD ($1,525 on any trim)",
   "Panoramic glass roof",
   "Head-up display",
   "JBL premium audio",
   "Heated & ventilated front seats",
   "12.3-inch touchscreen",
   "360-degree camera",
   "New Nightshade Edition for 2026"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Hybrid-only since 2025 redesign; 225 hp FWD, 232 hp with electric-motor AWD. 2026 prices rose about $300 across the lineup. LE achieves up to 51 mpg combined; sportier trims about 44-47 mpg."
 },
 {
  "id": "toyota-corolla",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Corolla",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact sedan",
  "category": "car",
  "priceFrom": 22725,
  "priceTo": 28270,
  "trims": [
   {
    "name": "LE",
    "msrp": 22725
   },
   {
    "name": "Hybrid LE",
    "msrp": 24425
   },
   {
    "name": "SE",
    "msrp": 25215
   },
   {
    "name": "XSE",
    "msrp": 28270
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 169,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 35,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "1.8L I4 hybrid",
    "hp": 138,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 47,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 182.3,
   "widthIn": 70.1,
   "heightIn": 56.5,
   "wheelbaseIn": 106.3,
   "curbWeightLb": 3000,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 88.6,
   "cargoCuFt": 13.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Blind-spot monitor",
   "Sunroof",
   "Wireless phone charging",
   "Heated front seats",
   "SofTex upholstery",
   "JBL premium audio",
   "9-inch touchscreen"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Base LE MSRP verified for 2026 ($23,920 incl. $1,195 destination). Mid-trim prices estimated from 2025 ladder plus typical 2026 increase. Hybrid available on LE/SE/XLE trims with optional AWD."
 },
 {
  "id": "toyota-corolla-cross",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Corolla Cross",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 24635,
  "priceTo": 31965,
  "trims": [
   {
    "name": "L",
    "msrp": 24635
   },
   {
    "name": "XLE",
    "msrp": 28860
   },
   {
    "name": "Hybrid S",
    "msrp": 29395
   },
   {
    "name": "Hybrid XSE",
    "msrp": 31965
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 169,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.0L I4 hybrid",
    "hp": 196,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 42,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 176.0,
   "widthIn": 71.9,
   "heightIn": 64.9,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3150,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": 88.3,
   "cargoCuFt": 25.5,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Refreshed styling for 2026",
   "10.5-inch touchscreen (upper trims)",
   "JBL premium audio",
   "Power liftgate",
   "Heated front seats",
   "Moonroof",
   "Wireless charging"
  ],
  "towingLb": 1500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Refreshed styling and interior for 2026. Gas L base MSRP $24,635 verified; hybrid S about $29,395. Hybrid comes standard with electronic AWD. Mid/top trim prices estimated."
 },
 {
  "id": "toyota-corolla-hatchback",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Corolla Hatchback",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "compact hatchback",
  "category": "car",
  "priceFrom": 22985,
  "priceTo": 25720,
  "trims": [
   {
    "name": "SE",
    "msrp": 22985
   },
   {
    "name": "Nightshade",
    "msrp": 24485
   },
   {
    "name": "XSE",
    "msrp": 25720
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L I4",
    "hp": 169,
    "transmission": "CVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 33,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 169.9,
   "widthIn": 70.5,
   "heightIn": 57.1,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3060,
   "groundClearanceIn": 5.1
  },
  "interior": {
   "passengerVolumeCuFt": 84.6,
   "cargoCuFt": 17.8,
   "cargoMaxCuFt": 23.3,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "JBL premium audio",
   "Heated front seats",
   "Adaptive front lighting",
   "8-inch touchscreen",
   "Blind-spot monitor",
   "18-inch alloy wheels"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 base price verified ($24,180 incl. $1,195 destination, up $400 from 2025). Manual transmission discontinued in 2023; CVT only. Nightshade/XSE prices estimated from 2025 ladder."
 },
 {
  "id": "toyota-crown",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Crown",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "full-size hybrid sedan",
  "category": "car",
  "priceFrom": 41440,
  "priceTo": 55040,
  "trims": [
   {
    "name": "XLE",
    "msrp": 41440
   },
   {
    "name": "Limited",
    "msrp": 46060
   },
   {
    "name": "Platinum",
    "msrp": 55040
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 236,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 41,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.4L turbo I4 Hybrid Max",
    "hp": 340,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 196.1,
   "widthIn": 72.4,
   "heightIn": 60.6,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 3980,
   "groundClearanceIn": 5.8
  },
  "interior": {
   "passengerVolumeCuFt": 98.8,
   "cargoCuFt": 15.2,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Hybrid Max 340-hp powertrain (Platinum)",
   "Adaptive variable suspension",
   "JBL premium audio",
   "Panoramic roof",
   "Heated & ventilated seats",
   "Two-tone paint",
   "Advanced Park"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Lifted-sedan bodystyle with standard AWD. XLE base price verified for 2026; Limited and Platinum estimated as carryover of 2025 pricing. Platinum uses the 340-hp Hybrid Max turbo hybrid."
 },
 {
  "id": "toyota-crown-signia",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Crown Signia",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize hybrid crossover",
  "category": "suv",
  "priceFrom": 44490,
  "priceTo": 48890,
  "trims": [
   {
    "name": "XLE",
    "msrp": 44490
   },
   {
    "name": "Limited",
    "msrp": 48890
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 240,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 38,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.1,
   "widthIn": 74.0,
   "heightIn": 64.4,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4305,
   "groundClearanceIn": 6.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic glass roof",
   "JBL premium audio",
   "Digital rearview mirror",
   "Heated & ventilated front seats",
   "Power liftgate",
   "Advanced Park",
   "21-inch wheels (Limited)"
  ],
  "towingLb": 2700,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Wagon-like two-row hybrid crossover with standard AWD. XLE base price verified for 2026; Limited estimated from 2025 plus a similar increase."
 },
 {
  "id": "toyota-gr-corolla",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "GR Corolla",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "hot hatch",
  "category": "car",
  "priceFrom": 40120,
  "priceTo": 48165,
  "trims": [
   {
    "name": "Core",
    "msrp": 40120
   },
   {
    "name": "Premium",
    "msrp": 44315
   },
   {
    "name": "Premium Plus",
    "msrp": 48165
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.6L turbo I3",
    "hp": 300,
    "transmission": "6-speed manual or 8-speed automatic",
    "manualAvailable": true,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 173.6,
   "widthIn": 72.8,
   "heightIn": 57.2,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3252,
   "groundClearanceIn": 5.8
  },
  "interior": {
   "passengerVolumeCuFt": 84.6,
   "cargoCuFt": 17.8,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "GR-FOUR AWD with adjustable torque split",
   "Front & rear Torsen LSDs",
   "8-speed GAZOO Racing automatic",
   "Forged carbon roof (Premium Plus)",
   "JBL audio",
   "Heated seats & steering wheel"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "300-hp turbo three-cylinder with GR-FOUR AWD; manual or 8-speed automatic. 2026 trim prices from aggregator data ($40,120-$48,165); mid-trim figure approximate."
 },
 {
  "id": "toyota-gr-supra",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "GR Supra",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 67890,
  "priceTo": 67890,
  "trims": [
   {
    "name": "MkV Final Edition",
    "msrp": 67890
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L turbo I6",
    "hp": 382,
    "transmission": "8-speed automatic or 6-speed manual",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   2
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 172.5,
   "widthIn": 73.0,
   "heightIn": 50.9,
   "wheelbaseIn": 97.2,
   "curbWeightLb": 3400,
   "groundClearanceIn": 4.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 10.2,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "MkV Final Edition exclusive trim & badging",
   "Adaptive suspension",
   "JBL audio",
   "Head-up display",
   "Brembo brakes",
   "19-inch forged wheels"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Final model year for the fifth-generation Supra; sold only as the MkV Final Edition, limited to 1,300 units for North America. Production ends spring 2026. Base MSRP derived from $69,085 advertised price including destination; exact ex-destination figure approximate."
 },
 {
  "id": "toyota-gr86",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "GR86",
  "year": 2026,
  "bodyStyle": "coupe",
  "segment": "sports car",
  "category": "car",
  "priceFrom": 31400,
  "priceTo": 37465,
  "trims": [
   {
    "name": "GR86",
    "msrp": 31400
   },
   {
    "name": "Premium",
    "msrp": 33965
   },
   {
    "name": "Yuzu Edition",
    "msrp": 37465
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L flat-4",
    "hp": 228,
    "transmission": "6-speed manual or 6-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   4
  ],
  "doors": 2,
  "dims": {
   "lengthIn": 167.9,
   "widthIn": 69.9,
   "heightIn": 51.6,
   "wheelbaseIn": 101.4,
   "curbWeightLb": 2838,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": 79.0,
   "cargoCuFt": 6.3,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "6-speed manual",
   "Limited-run Yuzu Edition (yellow paint)",
   "Brembo brakes / performance pack",
   "Heated front seats (Premium)",
   "8-inch touchscreen",
   "Duck-tail spoiler (Premium)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "228-hp 2.4L boxer, RWD, manual or automatic. 2026 pricing approximately $31,400-$37,465 per aggregator data; trim-level figures approximate. Rear seats are occasional-use 2+2."
 },
 {
  "id": "toyota-grand-highlander",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Grand Highlander",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 43455,
  "priceTo": 59900,
  "trims": [
   {
    "name": "LE",
    "msrp": 43455
   },
   {
    "name": "Hybrid LE",
    "msrp": 45010
   },
   {
    "name": "Hybrid Max Platinum",
    "msrp": 59900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo I4",
    "hp": 265,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 245,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 36,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.4L turbo I4 Hybrid Max",
    "hp": 362,
    "transmission": "6-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 201.4,
   "widthIn": 78.3,
   "heightIn": 70.1,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4465,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": 153.4,
   "cargoCuFt": 20.6,
   "cargoMaxCuFt": 97.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Hybrid Max 362-hp powertrain",
   "Adult-usable third row",
   "Panoramic moonroof",
   "JBL premium audio",
   "Heated & ventilated seats",
   "Digital rearview mirror",
   "Second-row captain's chairs"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Larger 3-row companion to the Highlander. 2026 base about $43,455; hybrid from about $45,010. Top Hybrid Max Platinum price estimated from 2025. Hybrid Max tows 5,000 lb; 2.5L hybrid 3,500 lb."
 },
 {
  "id": "toyota-highlander",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Highlander",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 45270,
  "priceTo": 54475,
  "trims": [
   {
    "name": "XLE",
    "msrp": 45270
   },
   {
    "name": "Limited",
    "msrp": 50450
   },
   {
    "name": "Platinum",
    "msrp": 54475
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo I4",
    "hp": 265,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 243,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 35,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.9,
   "widthIn": 76.0,
   "heightIn": 68.1,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4330,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": 141.3,
   "cargoCuFt": 16.0,
   "cargoMaxCuFt": 84.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Hybrid powertrain (any trim)",
   "Panoramic moonroof",
   "JBL premium audio",
   "Heated & ventilated front seats",
   "Digital rearview mirror",
   "12.3-inch touchscreen",
   "Second-row captain's chairs"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "For 2026 the LE trim was dropped, so the lineup starts at XLE (about $45,270) with standard AWD; trims are XLE, XSE, Limited, Platinum. Hybrid tow rating is 3,500 lb. Limited price estimated."
 },
 {
  "id": "toyota-land-cruiser",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Land Cruiser",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize off-road SUV",
  "category": "suv",
  "priceFrom": 57600,
  "priceTo": 62920,
  "trims": [
   {
    "name": "1958",
    "msrp": 57600
   },
   {
    "name": "Land Cruiser",
    "msrp": 62920
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.4L turbo I4 hybrid (i-FORCE MAX)",
    "hp": 326,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 193.8,
   "widthIn": 77.9,
   "heightIn": 73.2,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 5038,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 37.5,
   "cargoMaxCuFt": 82.1,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Full-time 4WD with locking center & rear diffs",
   "Stabilizer bar disconnect",
   "Multi-Terrain Select & Crawl Control",
   "Round-headlight heritage styling (1958)",
   "12.3-inch touchscreen",
   "2400W AC inverter"
  ],
  "towingLb": 6000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "J250-generation Land Cruiser; hybrid-only. 1958 base trim about $57,600 for 2026; upper Land Cruiser trim price estimated from 2025 carryover."
 },
 {
  "id": "toyota-mirai",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Mirai",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "hydrogen fuel-cell sedan",
  "category": "car",
  "priceFrom": 51795,
  "priceTo": 51795,
  "trims": [
   {
    "name": "XLE",
    "msrp": 51795
   },
   {
    "name": "Limited",
    "msrp": null
   }
  ],
  "powertrains": [
   {
    "type": "hydrogen",
    "engine": "Hydrogen fuel cell, single rear motor",
    "hp": 182,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 74,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.8,
   "widthIn": 74.2,
   "heightIn": 57.9,
   "wheelbaseIn": 114.9,
   "curbWeightLb": 4255,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 89.0,
   "cargoCuFt": 9.6,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Complimentary hydrogen fuel allowance",
   "JBL premium audio",
   "Heated & ventilated seats",
   "Head-up display",
   "Advanced Park",
   "Digital rearview mirror"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Sold only where hydrogen fueling exists (effectively California). About 402 miles of hydrogen range (XLE); 74 MPGe combined listed in mpgCombined. XLE $51,795 verified for 2026; Limited trim pricing not confirmed. Purchase includes a hydrogen fuel credit."
 },
 {
  "id": "toyota-prius",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Prius",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "compact hybrid hatchback",
  "category": "car",
  "priceFrom": 28550,
  "priceTo": 35565,
  "trims": [
   {
    "name": "LE",
    "msrp": 28550
   },
   {
    "name": "XLE",
    "msrp": 31875
   },
   {
    "name": "Limited",
    "msrp": 35565
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.0L I4 hybrid",
    "hp": 194,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 57,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 181.1,
   "widthIn": 70.2,
   "heightIn": 56.3,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 3097,
   "groundClearanceIn": 5.8
  },
  "interior": {
   "passengerVolumeCuFt": 91.2,
   "cargoCuFt": 23.8,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Electronic on-demand AWD (+$1,400)",
   "Fixed glass roof",
   "Digital key",
   "JBL premium audio",
   "Heated & ventilated front seats",
   "12.3-inch touchscreen",
   "Advanced Park self-parking"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Base LE price verified for 2026; XLE/Limited estimated from 2025 ladder plus $200. LE FWD rated up to 57 mpg combined; XLE/Limited on 19-inch wheels about 52 mpg. AWD available on all trims."
 },
 {
  "id": "toyota-prius-plug-in",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Prius Plug-in Hybrid",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "compact plug-in hybrid hatchback",
  "category": "car",
  "priceFrom": 33775,
  "priceTo": 40070,
  "trims": [
   {
    "name": "SE",
    "msrp": 33775
   },
   {
    "name": "XSE",
    "msrp": 36765
   },
   {
    "name": "XSE Premium",
    "msrp": 40070
   }
  ],
  "powertrains": [
   {
    "type": "phev",
    "engine": "2.0L I4 plug-in hybrid",
    "hp": 220,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 127,
    "evRangeMi": 44
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 181.1,
   "widthIn": 70.2,
   "heightIn": 56.3,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 3461,
   "groundClearanceIn": 5.8
  },
  "interior": {
   "passengerVolumeCuFt": 91.2,
   "cargoCuFt": 20.3,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Solar roof (XSE Premium)",
   "Heated & ventilated front seats",
   "JBL premium audio",
   "12.3-inch touchscreen",
   "Digital rearview mirror",
   "Advanced Park",
   "Heated steering wheel"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Formerly Prius Prime. SE base price verified for 2026; upper trims estimated from 2025 plus $400. SE achieves 44 miles EPA electric range (XSE/Premium about 39-40 miles on larger wheels); 127 MPGe combined, 52 mpg as a hybrid."
 },
 {
  "id": "toyota-rav4",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "RAV4",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 31900,
  "priceTo": 48500,
  "trims": [
   {
    "name": "LE (Hybrid)",
    "msrp": 31900
   },
   {
    "name": "Limited (Hybrid)",
    "msrp": 43300
   },
   {
    "name": "GR Sport (PHEV)",
    "msrp": 48500
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 226,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 44,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.5L I4 plug-in hybrid",
    "hp": 320,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 50
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 180.9,
   "widthIn": 73.0,
   "heightIn": 66.9,
   "wheelbaseIn": 105.9,
   "curbWeightLb": 3900,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 37.5,
   "cargoMaxCuFt": 69.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Plug-in hybrid with about 50-mile EV range",
   "First-ever GR Sport trim",
   "Woodland rugged trim",
   "12.9-inch touchscreen with new Arene software",
   "JBL premium audio",
   "Panoramic roof",
   "Digital key"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "All-new sixth generation for 2026; every trim is hybrid (226-236 hp) or plug-in hybrid (320 hp). Base LE hybrid $31,900 and top GR Sport PHEV about $48,500 verified; mid-trim ladder (SE, XLE Premium, Woodland, XSE, Limited) omitted pending full pricing. Hybrid AWD adds about $1,400. Some dimensions/EPA figures were not final at data time."
 },
 {
  "id": "toyota-sequoia",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Sequoia",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size 3-row SUV",
  "category": "suv",
  "priceFrom": 64825,
  "priceTo": 84265,
  "trims": [
   {
    "name": "SR5",
    "msrp": 64825
   },
   {
    "name": "Limited",
    "msrp": 71400
   },
   {
    "name": "Capstone",
    "msrp": 84265
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "3.4L twin-turbo V6 hybrid (i-FORCE MAX)",
    "hp": 437,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 208.1,
   "widthIn": 79.6,
   "heightIn": 74.5,
   "wheelbaseIn": 122.0,
   "curbWeightLb": 5855,
   "groundClearanceIn": 8.6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.5,
   "cargoMaxCuFt": 86.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "TRD Pro off-road package",
   "Panoramic roof",
   "14-inch touchscreen",
   "JBL premium audio",
   "Sliding third row",
   "Load-leveling rear air suspension",
   "Power running boards (Capstone)"
  ],
  "towingLb": 9520,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Hybrid-only full-size SUV (437 hp standard). SR5 base $64,825 for 2026 verified via dealer data; Limited/Capstone estimated from 2025 ladder. Tows up to 9,520 lb."
 },
 {
  "id": "toyota-sienna",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Sienna",
  "year": 2026,
  "bodyStyle": "minivan",
  "segment": "minivan",
  "category": "van",
  "priceFrom": 40420,
  "priceTo": 57545,
  "trims": [
   {
    "name": "LE",
    "msrp": 40420
   },
   {
    "name": "XLE",
    "msrp": 45130
   },
   {
    "name": "Platinum",
    "msrp": 57545
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid",
    "hp": 245,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 36,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 203.7,
   "widthIn": 78.5,
   "heightIn": 69.7,
   "wheelbaseIn": 120.5,
   "curbWeightLb": 4610,
   "groundClearanceIn": 6.4
  },
  "interior": {
   "passengerVolumeCuFt": 162.5,
   "cargoCuFt": 33.5,
   "cargoMaxCuFt": 101.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "AWD on any trim",
   "Built-in vacuum & FridgeBox (upper trims)",
   "Super-long-slide 2nd-row captain's chairs",
   "Rear-seat entertainment",
   "JBL premium audio",
   "Power sliding doors & liftgate",
   "Digital rearview mirror"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "Hybrid-only minivan, 36 mpg combined even with available AWD. LE base $40,420 verified via dealer data for 2026; XLE/Platinum estimated from 2025 ladder. Woodland and 25th Anniversary editions also offered."
 },
 {
  "id": "toyota-tacoma",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Tacoma",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "midsize pickup",
  "category": "truck",
  "priceFrom": 32245,
  "priceTo": 65000,
  "trims": [
   {
    "name": "SR",
    "msrp": 32245
   },
   {
    "name": "TRD Sport",
    "msrp": 40200
   },
   {
    "name": "TRD Off-Road i-FORCE MAX",
    "msrp": 47035
   },
   {
    "name": "TRD Pro",
    "msrp": 65000
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.4L turbo I4",
    "hp": 278,
    "transmission": "8-speed automatic or 6-speed manual",
    "manualAvailable": true,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 21,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.4L turbo I4 hybrid (i-FORCE MAX)",
    "hp": 326,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   4,
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 213.0,
   "widthIn": 77.9,
   "heightIn": 74.0,
   "wheelbaseIn": 131.9,
   "curbWeightLb": 4400,
   "groundClearanceIn": 9.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "i-FORCE MAX hybrid (326 hp)",
   "6-speed manual (TRD trims)",
   "Trailhunter overlanding trim with ARB gear",
   "IsoDynamic sport seats (TRD Pro)",
   "14-inch touchscreen",
   "JBL audio with removable speaker",
   "Multi-Terrain Select"
  ],
  "towingLb": 6500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "SR base ($32,245) verified for 2026; SR runs 228 hp, other gas trims 278 hp (270 hp with manual). XtraCab (2-door) and Double Cab available. TRD Sport/TRD Pro prices estimated from 2025 ladder. Tows up to 6,500 lb."
 },
 {
  "id": "toyota-tundra",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Tundra",
  "year": 2026,
  "bodyStyle": "pickup",
  "segment": "full-size pickup",
  "category": "truck",
  "priceFrom": 41260,
  "priceTo": 80800,
  "trims": [
   {
    "name": "SR",
    "msrp": 41260
   },
   {
    "name": "Limited i-FORCE MAX",
    "msrp": 58560
   },
   {
    "name": "Capstone",
    "msrp": 80800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.4L twin-turbo V6 (i-FORCE)",
    "hp": 389,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "3.4L twin-turbo V6 hybrid (i-FORCE MAX)",
    "hp": 437,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   5,
   6
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 233.6,
   "widthIn": 80.2,
   "heightIn": 78.0,
   "wheelbaseIn": 145.7,
   "curbWeightLb": 5300,
   "groundClearanceIn": 10.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "full-size",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "i-FORCE MAX hybrid (437 hp)",
   "TRD Pro & Trailhunter off-road trims",
   "14-inch touchscreen",
   "Rear air suspension",
   "Panoramic roof",
   "Power tailgate",
   "Tow tech package with trailer backup guide"
  ],
  "towingLb": 12000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "2026 range about $41,260 (SR Double Cab) to $80,800 (Capstone). SR gas V6 detuned to 358 hp; most trims 389 hp; hybrid 437 hp. Tows up to about 12,000 lb depending on configuration."
 },
 {
  "id": "toyota-bz",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "bZ",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric SUV",
  "category": "suv",
  "priceFrom": 34900,
  "priceTo": 45300,
  "trims": [
   {
    "name": "XLE",
    "msrp": 34900
   },
   {
    "name": "XLE Plus",
    "msrp": 37900
   },
   {
    "name": "Limited",
    "msrp": 43300
   },
   {
    "name": "Limited AWD",
    "msrp": 45300
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD",
    "hp": 221,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 117,
    "evRangeMi": 314
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 338,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 278
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 184.6,
   "widthIn": 73.2,
   "heightIn": 65.0,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4400,
   "groundClearanceIn": 8.1
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27.7,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "NACS (Tesla-style) charge port",
   "Battery preconditioning",
   "Panoramic roof",
   "JBL premium audio",
   "Heated & ventilated seats",
   "Digital key",
   "14-inch touchscreen"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Heavily updated successor to the bZ4X, renamed bZ for 2026 with NACS port and more range. Base XLE uses a 57.7-kWh pack (168 hp, 236 mi); XLE Plus/Limited use 74.7 kWh (221 hp FWD, up to 314 mi; 338 hp AWD, about 278 mi). AWD is a $2,000 option on Plus/Limited. MPGe for AWD not listed."
 },
 {
  "id": "toyota-bz-woodland",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "bZ Woodland",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric adventure SUV",
  "category": "suv",
  "priceFrom": 45300,
  "priceTo": 47400,
  "trims": [
   {
    "name": "bZ Woodland",
    "msrp": 45300
   },
   {
    "name": "Premium",
    "msrp": 47400
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 375,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 260
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 190.6,
   "widthIn": 73.2,
   "heightIn": 65.7,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4750,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 30.0,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Standard dual-motor AWD (375 hp)",
   "NACS charge port",
   "Roof rails & all-terrain tire option",
   "X-MODE with Grip Control",
   "JBL premium audio",
   "Panoramic roof (Premium)"
  ],
  "towingLb": 3500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "New nameplate for 2026: a longer, more rugged wagon-style variant of the bZ co-developed with Subaru (Trailseeker sibling). 74.7-kWh battery, about 260 miles of range. Length/curb weight approximate. Prices verified ($45,300/$47,400 before $1,450 destination)."
 },
 {
  "id": "vinfast-vf-8",
  "make": "VinFast",
  "manufacturer": "Vingroup (VinFast Auto)",
  "model": "VF 8",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize EV SUV",
  "category": "suv",
  "priceFrom": 39900,
  "priceTo": 44900,
  "trims": [
   {
    "name": "Eco",
    "msrp": 39900
   },
   {
    "name": "Plus",
    "msrp": 44900
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 349,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 89,
    "evRangeMi": 256
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.0,
   "widthIn": 74.8,
   "heightIn": 65.7,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 5313,
   "groundClearanceIn": 7.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 13.3,
   "cargoMaxCuFt": 48.0,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic glass roof",
   "Heated & ventilated front seats",
   "Head-up display (Plus)",
   "Vegan leather interior",
   "Highway assist / adaptive cruise",
   "360-degree camera",
   "10-year/125,000-mile warranty"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/ba/VinFast_VF_8_DSC_8474.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "2026 VF 8 Eco starts at $39,900 with an improved 256-mile EPA range; Plus has 402 hp and 235-mile range. Both are dual-motor AWD. Interior colors and some published specs (cargo, weight) vary by source — verify with VinFast. Aggressive financing/lease incentives are common."
 },
 {
  "id": "vinfast-vf-9",
  "make": "VinFast",
  "manufacturer": "Vingroup (VinFast Auto)",
  "model": "VF 9",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "full-size electric 3-row SUV",
  "category": "suv",
  "priceFrom": 69800,
  "priceTo": 73800,
  "trims": [
   {
    "name": "Eco",
    "msrp": 69800
   },
   {
    "name": "Plus",
    "msrp": 73800
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 402,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 80,
    "evRangeMi": 323
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 201.2,
   "widthIn": 79.8,
   "heightIn": 68.9,
   "wheelbaseIn": 123.2,
   "curbWeightLb": 6000,
   "groundClearanceIn": 7.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": null,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "6-seat captain's chair layout (Plus)",
   "Panoramic glass roof",
   "Heated, ventilated & massaging front seats (Plus)",
   "Power-folding 3rd row",
   "Head-up display",
   "Adaptive cruise with highway assist",
   "10-year/125,000-mile warranty"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/2/22/VinFast_VF_9_Plus_Deep_Ocean_Metallic.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Three-row flagship; Eco (EPA 323 mi) and Plus (EPA 291 mi), both 402-hp dual-motor AWD with a 123-kWh battery. Prices are VinFast's US launch MSRPs still listed for 2026; heavy discounting/leases are common. Some specs (curb weight, cargo volumes) not consistently published for US models."
 },
 {
  "id": "volkswagen-atlas",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Atlas",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row SUV",
  "category": "suv",
  "priceFrom": 39310,
  "priceTo": 54630,
  "trims": [
   {
    "name": "SE",
    "msrp": 39310
   },
   {
    "name": "SE 4Motion",
    "msrp": 41210
   },
   {
    "name": "SEL Premium R-Line 4Motion",
    "msrp": 54630
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 269,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 200.7,
   "widthIn": 78.4,
   "heightIn": 70.4,
   "wheelbaseIn": 117.3,
   "curbWeightLb": 4460,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": 153.7,
   "cargoCuFt": 20.6,
   "cargoMaxCuFt": 96.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Second-row captain's chairs",
   "Panoramic sunroof",
   "Harman Kardon premium audio",
   "Heated, ventilated & massaging front seats",
   "360-degree camera",
   "Factory tow hitch"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Single 269-hp turbo four since 2024 refresh (VR6 discontinued). Touch-slider climate/volume controls."
 },
 {
  "id": "volkswagen-atlas-cross-sport",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Atlas Cross Sport",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 2-row SUV",
  "category": "suv",
  "priceFrom": 38300,
  "priceTo": 52500,
  "trims": [
   {
    "name": "SE",
    "msrp": 38300
   },
   {
    "name": "SE 4Motion",
    "msrp": 40200
   },
   {
    "name": "SEL Premium R-Line 4Motion",
    "msrp": 52500
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 269,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.5,
   "widthIn": 78.4,
   "heightIn": 67.8,
   "wheelbaseIn": 117.3,
   "curbWeightLb": 4400,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 40.3,
   "cargoMaxCuFt": 77.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Panoramic sunroof",
   "Harman Kardon premium audio",
   "Heated, ventilated & massaging front seats",
   "360-degree camera",
   "Factory tow hitch"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Five-seat coupe-roof version of the Atlas. Top-trim price is approximate (official 2026 top-trim figure not confirmed)."
 },
 {
  "id": "volkswagen-golf-gti",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Golf GTI",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "hot hatch",
  "category": "car",
  "priceFrom": 34590,
  "priceTo": 42480,
  "trims": [
   {
    "name": "S",
    "msrp": 34590
   },
   {
    "name": "Autobahn",
    "msrp": 42480
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 241,
    "transmission": "7-speed DSG",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 28,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 168.8,
   "widthIn": 70.4,
   "heightIn": 57.6,
   "wheelbaseIn": 103.6,
   "curbWeightLb": 3188,
   "groundClearanceIn": 5.3
  },
  "interior": {
   "passengerVolumeCuFt": 93.5,
   "cargoCuFt": 19.9,
   "cargoMaxCuFt": 34.5,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Adaptive damping (DCC)",
   "Sunroof",
   "Harman Kardon premium audio",
   "Leather seating (Autobahn)",
   "Head-up display",
   "IQ.LIGHT LED matrix headlights"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "2025 facelift (Mk8.5) carries over; manual transmission discontinued after 2024. Climate and volume use touch sliders (now illuminated). MotorTrend 2026 Car of the Year (with Golf R)."
 },
 {
  "id": "volkswagen-golf-r",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Golf R",
  "year": 2026,
  "bodyStyle": "hatchback",
  "segment": "performance hatch",
  "category": "car",
  "priceFrom": 49455,
  "priceTo": 49455,
  "trims": [
   {
    "name": "Golf R",
    "msrp": 49455
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 328,
    "transmission": "7-speed DSG",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 168.9,
   "widthIn": 70.4,
   "heightIn": 57.7,
   "wheelbaseIn": 103.5,
   "curbWeightLb": 3450,
   "groundClearanceIn": 5.1
  },
  "interior": {
   "passengerVolumeCuFt": 93.5,
   "cargoCuFt": 19.9,
   "cargoMaxCuFt": 34.5,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Black Edition appearance package",
   "Adaptive damping (DCC) standard",
   "Harman Kardon premium audio",
   "Head-up display",
   "Nappa leather sport seats",
   "Torque-vectoring R Performance rear differential (standard)"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "DSG only; manual dropped after 2024. Drift and Special (Nurburgring) drive modes standard. Touch-slider climate/volume controls."
 },
 {
  "id": "volkswagen-id-buzz",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "ID. Buzz",
  "year": 2026,
  "bodyStyle": "van",
  "segment": "electric minivan",
  "category": "van",
  "priceFrom": 59995,
  "priceTo": 67995,
  "trims": [
   {
    "name": "Pro S RWD",
    "msrp": 59995
   },
   {
    "name": "Pro S Plus RWD",
    "msrp": 63495
   },
   {
    "name": "Pro S Plus 4Motion",
    "msrp": 67995
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 282,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 80,
    "evRangeMi": 234
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 335,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 76,
    "evRangeMi": 231
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.4,
   "widthIn": 78.1,
   "heightIn": 76.2,
   "wheelbaseIn": 131.4,
   "curbWeightLb": 5967,
   "groundClearanceIn": 6.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 18.6,
   "cargoMaxCuFt": 145.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Two-tone heritage paint",
   "Electrochromic panoramic glass roof",
   "Second-row captain's chairs (AWD)",
   "Harman Kardon premium audio",
   "Power sliding doors & tailgate",
   "Head-up display"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 pricing not yet announced; figures are 2025 MSRPs (launch-only 1st Edition dropped). Retro electric bus with three rows; AWD adds power and slightly reduces range."
 },
 {
  "id": "volkswagen-id4",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "ID.4",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact electric SUV",
  "category": "suv",
  "priceFrom": 45095,
  "priceTo": 57295,
  "trims": [
   {
    "name": "Pro RWD",
    "msrp": 45095
   },
   {
    "name": "Pro S Plus AWD",
    "msrp": 57295
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 282,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 113,
    "evRangeMi": 291
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 335,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 102,
    "evRangeMi": 263
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 180.5,
   "widthIn": 72.9,
   "heightIn": 64.6,
   "wheelbaseIn": 108.9,
   "curbWeightLb": 4517,
   "groundClearanceIn": 6.7
  },
  "interior": {
   "passengerVolumeCuFt": 99.9,
   "cargoCuFt": 30.3,
   "cargoMaxCuFt": 64.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Panoramic fixed glass roof",
   "Harman Kardon premium audio",
   "12.9-inch touchscreen",
   "Massaging front seats",
   "Area View 360-degree camera",
   "Park Assist Plus"
  ],
  "towingLb": 2700,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "medium",
  "notes": "2026 pricing not announced at time of writing; figures are 2025 model-year MSRPs. VW says the ID.4 gets a mid-2026 model-year update with added features. Touch-slider climate/volume controls."
 },
 {
  "id": "volkswagen-jetta",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Jetta",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact sedan",
  "category": "car",
  "priceFrom": 23995,
  "priceTo": 29995,
  "trims": [
   {
    "name": "S",
    "msrp": 23995
   },
   {
    "name": "Sport",
    "msrp": 25305
   },
   {
    "name": "SE",
    "msrp": 26985
   },
   {
    "name": "SEL",
    "msrp": 29995
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 158,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 35,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 186.5,
   "widthIn": 70.8,
   "heightIn": 57.7,
   "wheelbaseIn": 105.7,
   "curbWeightLb": 3085,
   "groundClearanceIn": 5.4
  },
  "interior": {
   "passengerVolumeCuFt": 94.7,
   "cargoCuFt": 14.1,
   "cargoMaxCuFt": null,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Power panoramic sunroof",
   "Heated & ventilated front seats",
   "Digital Cockpit Pro instrument display",
   "IQ.DRIVE driver assistance suite",
   "Wireless charging & wireless CarPlay/Android Auto",
   "BeatsAudio premium sound"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Refreshed styling for 2025 carries into 2026. Manual transmission dropped from the base Jetta (still offered on GLI)."
 },
 {
  "id": "volkswagen-jetta-gli",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Jetta GLI",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "compact sport sedan",
  "category": "car",
  "priceFrom": 33745,
  "priceTo": 33745,
  "trims": [
   {
    "name": "Autobahn",
    "msrp": 33745
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 228,
    "transmission": "6-speed manual or 7-speed DSG",
    "manualAvailable": true,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 30,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 186.8,
   "widthIn": 70.8,
   "heightIn": 57.1,
   "wheelbaseIn": 105.7,
   "curbWeightLb": 3320,
   "groundClearanceIn": 5.0
  },
  "interior": {
   "passengerVolumeCuFt": 94.7,
   "cargoCuFt": 14.1,
   "cargoMaxCuFt": null,
   "lightInterior": false,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "6-speed manual (no-cost)",
   "Adaptive damping (DCC)",
   "Sunroof",
   "Heated & ventilated leather seats",
   "BeatsAudio premium sound",
   "Digital Cockpit Pro"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Sold in a single loaded Autobahn trim. One of the last affordable sedans still offered with a manual gearbox."
 },
 {
  "id": "volkswagen-taos",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Taos",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact SUV",
  "category": "suv",
  "priceFrom": 26500,
  "priceTo": 35950,
  "trims": [
   {
    "name": "S",
    "msrp": 26500
   },
   {
    "name": "S 4Motion",
    "msrp": 28200
   },
   {
    "name": "SEL 4Motion",
    "msrp": 35950
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbo I4",
    "hp": 174,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 31,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 175.9,
   "widthIn": 72.5,
   "heightIn": 64.4,
   "wheelbaseIn": 105.9,
   "curbWeightLb": 3175,
   "groundClearanceIn": 6.4
  },
  "interior": {
   "passengerVolumeCuFt": 99.5,
   "cargoCuFt": 27.9,
   "cargoMaxCuFt": 65.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Panoramic sunroof",
   "IQ.DRIVE driver assistance",
   "Heated seats & heated steering wheel",
   "Wireless charging",
   "BeatsAudio premium sound",
   "Digital Cockpit Pro"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "174-hp engine and 8-speed automatic on all trims since the 2025 refresh. Top-trim SEL 4Motion price is approximate (advertised prices vary on destination inclusion). AWD combined mpg is about 28."
 },
 {
  "id": "volkswagen-tiguan",
  "make": "Volkswagen",
  "manufacturer": "Volkswagen Group",
  "model": "Tiguan",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact SUV",
  "category": "suv",
  "priceFrom": 30805,
  "priceTo": 44135,
  "trims": [
   {
    "name": "S",
    "msrp": 30805
   },
   {
    "name": "SEL R-Line Turbo 4Motion",
    "msrp": 44135
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4",
    "hp": 201,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD",
     "AWD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 (Turbo)",
    "hp": 268,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 186.1,
   "widthIn": 73.0,
   "heightIn": 66.4,
   "wheelbaseIn": 109.9,
   "curbWeightLb": 3768,
   "groundClearanceIn": 7.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 37.6,
   "cargoMaxCuFt": 70.5,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "15-inch touchscreen",
   "Panoramic sunroof",
   "Harman Kardon premium audio",
   "Massaging front seats",
   "IQ.LIGHT HD matrix headlights",
   "Head-up display"
  ],
  "towingLb": 1500,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Third generation launched for 2025 (five seats only, no more third row). 2026 adds 268-hp SEL R-Line Turbo flagship; that trim's price is approximate pending official destination-exclusive figure. Most controls are touchscreen-based with a rotary driving-experience dial."
 },
 {
  "id": "volvo-ex30",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "EX30",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact electric SUV",
  "category": "suv",
  "priceFrom": 38950,
  "priceTo": 48150,
  "trims": [
   {
    "name": "Plus Single Motor Extended Range",
    "msrp": 38950
   },
   {
    "name": "Ultra Twin Motor Performance",
    "msrp": 45355
   },
   {
    "name": "Cross Country Ultra Twin Motor Performance",
    "msrp": 48150
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 268,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 114,
    "evRangeMi": 261
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Twin Motor Performance)",
    "hp": 422,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 103,
    "evRangeMi": 253
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 166.7,
   "widthIn": 72.3,
   "heightIn": 61.1,
   "wheelbaseIn": 104.3,
   "curbWeightLb": 3858,
   "groundClearanceIn": 7.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 11.6,
   "cargoMaxCuFt": 31.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": false
  },
  "keyOptions": [
   "Harman Kardon soundbar",
   "Fixed panoramic roof",
   "Pilot Assist",
   "360-degree camera",
   "Heated seats and steering wheel",
   "Power tailgate",
   "20-inch wheels"
  ],
  "towingLb": 2000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/c/cc/Volvo_EX30_Auto_Zuerich_2023_1X7A0949.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Belgium-built for the US. Volvo confirmed the EX30 will be discontinued in the US after the 2026 model year (tariffs and an upcoming replacement EV); US dealer orders closed March 2026. Cross Country range is 227 mi. Nearly all controls on the center touchscreen."
 },
 {
  "id": "volvo-ex40",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "EX40",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact electric luxury SUV",
  "category": "suv",
  "priceFrom": 55150,
  "priceTo": 60850,
  "trims": [
   {
    "name": "Single Motor Plus",
    "msrp": 55150
   },
   {
    "name": "Twin Motor Plus",
    "msrp": 56900
   },
   {
    "name": "Twin Motor Ultra Black Edition",
    "msrp": 60850
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 248,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 106,
    "evRangeMi": 293
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD",
    "hp": 402,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 96,
    "evRangeMi": 254
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 174.8,
   "widthIn": 73.3,
   "heightIn": 64.9,
   "wheelbaseIn": 106.4,
   "curbWeightLb": 4519,
   "groundClearanceIn": 7.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 16.0,
   "cargoMaxCuFt": 47.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Harman Kardon premium audio",
   "Panoramic moonroof",
   "Pilot Assist",
   "360-degree camera",
   "Pixel LED headlights",
   "20-inch wheels",
   "Heat pump"
  ],
  "towingLb": 2000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Volvo_XC40_Recharge_Facelift_IMG_8127.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Formerly XC40 Recharge. Some sources are unclear on whether 2026 trim prices include the $1,295 destination fee; figures shown are as most commonly quoted. Single Motor limited to Plus trim for 2026."
 },
 {
  "id": "volvo-ex90",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "EX90",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row electric luxury SUV",
  "category": "suv",
  "priceFrom": 76695,
  "priceTo": 92885,
  "trims": [
   {
    "name": "Single Motor Plus",
    "msrp": 76695
   },
   {
    "name": "Twin Motor Plus",
    "msrp": 79995
   },
   {
    "name": "Twin Motor Performance Ultra",
    "msrp": 92885
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD",
    "hp": 329,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 291
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Twin Motor)",
    "hp": 449,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 80,
    "evRangeMi": 305
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (Twin Motor Performance)",
    "hp": 670,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 79,
    "evRangeMi": 300
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 198.3,
   "widthIn": 77.3,
   "heightIn": 68.8,
   "wheelbaseIn": 117.5,
   "curbWeightLb": 5883,
   "groundClearanceIn": 8.0
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.8,
   "cargoMaxCuFt": 71.0,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Bowers & Wilkins audio with Dolby Atmos",
   "Air suspension",
   "6-passenger captain's chairs",
   "22-inch wheels",
   "Panoramic roof (standard)",
   "Lidar-based driver assistance hardware",
   "Power-folding third row"
  ],
  "towingLb": 4850,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/b/b5/Volvo_EX90_DSC_7810.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "Built in South Carolina. New cheaper Single Motor RWD variant for 2026; Twin Motor power increased to 449 hp and Performance to 670 hp per press reports. Some quoted prices may include the $1,395 destination fee."
 },
 {
  "id": "volvo-v60-cross-country",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "V60 Cross Country",
  "year": 2026,
  "bodyStyle": "wagon",
  "segment": "midsize luxury wagon",
  "category": "car",
  "priceFrom": 52300,
  "priceTo": 57600,
  "trims": [
   {
    "name": "B5 Plus",
    "msrp": 52300
   },
   {
    "name": "B5 Ultra",
    "msrp": 57600
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (B5)",
    "hp": 247,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.4,
   "widthIn": 72.8,
   "heightIn": 58.4,
   "wheelbaseIn": 113.2,
   "curbWeightLb": 4085,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.2,
   "cargoMaxCuFt": 50.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Harman Kardon premium audio",
   "Head-up display",
   "360-degree camera",
   "Pilot Assist",
   "Heated rear seats and steering wheel",
   "19-inch wheels"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/6/60/Volvo_V60_%28SPA%29_1X7A0386.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Volvo's sole remaining US wagon for 2026 after the V90 Cross Country's discontinuation. Compact spare optional."
 },
 {
  "id": "volvo-v90-cross-country",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "V90 Cross Country",
  "year": 2026,
  "bodyStyle": "wagon",
  "segment": "midsize luxury wagon",
  "category": "car",
  "priceFrom": 66800,
  "priceTo": 66800,
  "trims": [
   {
    "name": "B6 Ultra",
    "msrp": 66800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (B6)",
    "hp": 295,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 23,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 194.4,
   "widthIn": 74.0,
   "heightIn": 60.6,
   "wheelbaseIn": 115.8,
   "curbWeightLb": 4271,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 19.8,
   "cargoMaxCuFt": 53.9,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Bowers & Wilkins premium audio",
   "Head-up display",
   "Massaging front seats",
   "360-degree camera",
   "Air suspension (rear)",
   "Pilot Assist"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/7/76/Volvo_V90_%28SPA%29_1X7A0384.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Abbreviated final model year: sold only in loaded Ultra trim; production ended September 2025 and remaining new inventory is limited. Discontinued after 2026."
 },
 {
  "id": "volvo-xc40",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "XC40",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "subcompact luxury SUV",
  "category": "suv",
  "priceFrom": 39900,
  "priceTo": 51250,
  "trims": [
   {
    "name": "Core",
    "msrp": 39900
   },
   {
    "name": "Plus",
    "msrp": 43900
   },
   {
    "name": "Ultra",
    "msrp": 51250
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (B4)",
    "hp": 194,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (B5)",
    "hp": 247,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 174.8,
   "widthIn": 73.3,
   "heightIn": 65.0,
   "wheelbaseIn": 106.4,
   "curbWeightLb": 3574,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.4,
   "cargoMaxCuFt": 47.2,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Harman Kardon premium audio",
   "360-degree camera",
   "Pilot Assist adaptive cruise",
   "Heated rear seats",
   "Power tailgate",
   "Wireless phone charging"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/e/ef/Volvo_XC40_Recharge_Facelift_IMG_8127.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "medium",
  "notes": "2026 lineup restructured: lower-priced 194-hp base engine on Core/Plus, 247-hp B5 on Ultra; exact powertrain/trim pairings and EPA figures for the new base engine not fully confirmed. Compact spare optional."
 },
 {
  "id": "volvo-xc60",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "XC60",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "compact luxury SUV",
  "category": "suv",
  "priceFrom": 49700,
  "priceTo": 79800,
  "trims": [
   {
    "name": "B5 Core",
    "msrp": 49700
   },
   {
    "name": "B5 Plus",
    "msrp": 54300
   },
   {
    "name": "T8 Plug-in Hybrid Core",
    "msrp": 61150
   },
   {
    "name": "T8 Polestar Engineered",
    "msrp": 79800
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (B5)",
    "hp": 247,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.0L turbo I4 plug-in hybrid (T8)",
    "hp": 455,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 63,
    "evRangeMi": 35
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 187.4,
   "widthIn": 74.9,
   "heightIn": 65.3,
   "wheelbaseIn": 112.8,
   "curbWeightLb": 4045,
   "groundClearanceIn": 8.3
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22.4,
   "cargoMaxCuFt": 63.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Panoramic moonroof",
   "Bowers & Wilkins premium audio",
   "Head-up display",
   "Ventilated Nappa leather seats",
   "360-degree camera",
   "Pilot Assist",
   "Air purifier",
   "Massaging front seats"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/3/30/Volvo_XC60_%28SPA%29_FL_1X7A0185.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Refreshed for 2026 with new grille, larger 11.2-inch screen and updated interior. T8 trim prices quoted by some sources may include destination. Compact spare optional."
 },
 {
  "id": "volvo-xc90",
  "make": "Volvo",
  "manufacturer": "Geely Holding (Volvo Cars)",
  "model": "XC90",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize 3-row luxury SUV",
  "category": "suv",
  "priceFrom": 61050,
  "priceTo": 83900,
  "trims": [
   {
    "name": "B5 Core",
    "msrp": 61050
   },
   {
    "name": "B6 Plus",
    "msrp": 68500
   },
   {
    "name": "T8 Ultra",
    "msrp": 83900
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (B5)",
    "hp": 247,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 25,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbo I4 mild hybrid (B6)",
    "hp": 295,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 22,
    "evRangeMi": null
   },
   {
    "type": "phev",
    "engine": "2.0L turbo I4 plug-in hybrid (T8)",
    "hp": 455,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 58,
    "evRangeMi": 33
   }
  ],
  "seats": [
   6,
   7
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 195.0,
   "widthIn": 75.7,
   "heightIn": 69.9,
   "wheelbaseIn": 117.5,
   "curbWeightLb": 4666,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 13.0,
   "cargoMaxCuFt": 85.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": false,
   "audio": true
  },
  "keyOptions": [
   "Air suspension",
   "Bowers & Wilkins premium audio",
   "Head-up display",
   "Massaging front seats",
   "Panoramic moonroof",
   "360-degree camera",
   "Integrated child booster cushion",
   "6-passenger captain's chairs"
  ],
  "towingLb": 5000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/5/59/2025_Volvo_XC90_II_DSC_7420.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "Carries the major 2025.5 facelift into 2026. B6 Plus price is approximate; base and top prices verified. XC60-platform SUV remains Volvo's 3-row flagship alongside electric EX90."
 }
];

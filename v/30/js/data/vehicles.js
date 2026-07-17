// -----------------------------------------------------------------------
// vehicles.js — the 2026 US-market vehicle catalog (GENERATED, then curated).
//
// AutoSelector's core dataset: every nameplate sold new in the US for model
// year 2026 —325 models across 47 brands. One record per model,
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

export const DATA_VERSION = 15;

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
    "msrp": 35000,
    "features": [
     "1.5T turbo I4",
     "Power moonroof",
     "Heated front seats",
     "10.2-in digital cluster",
     "AcuraWatch safety suite"
    ]
   },
   {
    "name": "A-Spec",
    "msrp": 38000,
    "features": [
     "19-in alloy wheels",
     "A-Spec sport styling",
     "LED fog lights",
     "Ventilated front seats",
     "Sport pedals/microsuede accents"
    ]
   },
   {
    "name": "A-Spec Advance",
    "msrp": 42000,
    "features": [
     "Bang & Olufsen audio",
     "Leather seating",
     "Heated steering wheel",
     "Hands-free power tailgate",
     "Google Built-In / driver memory"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbocharged VTEC I4",
    "hp": 190,
    "transmission": "CVT automatic",
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
  "confidence": "high",
  "notes": "190 hp / 179 lb-ft confirmed (the widely-repeated 200 hp figure is an error; that is the Integra rating). EPA combined is 28 mpg FWD / 27 mpg AWD per fueleconomy.gov, so prior record 29 was slightly high. AWD is a $2,000 option on each package (top AWD A-Spec Advance = $44,000). Trims are Acura package tiers; each of ADX/A-Spec/A-Spec Advance is offered FWD or AWD. Exterior/interior color hex values are best-effort sRGB matches to Acura swatches; color availability varies by trim (Orchid restricted to certain paints).",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#E9E9E7"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6E7175"
    },
    {
     "name": "Majestic Black Pearl",
     "hex": "#101012"
    },
    {
     "name": "Solar Silver Metallic",
     "hex": "#B9BCC0"
    },
    {
     "name": "Apex Blue Pearl",
     "hex": "#1F3A6E"
    },
    {
     "name": "Double Apex Blue Pearl",
     "hex": "#22345C"
    },
    {
     "name": "Performance Red Pearl",
     "hex": "#A5000E"
    }
   ],
   "interior": [
    {
     "name": "Ebony",
     "hex": "#1C1C1E",
     "tone": "dark"
    },
    {
     "name": "Orchid",
     "hex": "#E7E3D9",
     "tone": "light"
    },
    {
     "name": "Red",
     "hex": "#7A1F27",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Acura ADX Pricing & Specs",
    "url": "https://www.acura.com/suvs/adx/pricing-and-specs",
    "site": "acura.com"
   },
   {
    "label": "EPA fuel economy 2026 Acura ADX",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Acura_ADX.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Acura ADX Features & Specs",
    "url": "https://www.edmunds.com/acura/adx/2026/features-specs/",
    "site": "edmunds.com"
   }
  ]
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
    "msrp": 33400,
    "features": [
     "1.5T VTEC turbo / CVT",
     "10.2-in digital cluster",
     "Wireless Apple CarPlay & Android Auto",
     "Heated front seats",
     "AcuraWatch"
    ]
   },
   {
    "name": "A-Spec",
    "msrp": 35950,
    "features": [
     "18-in alloy wheels",
     "A-Spec sport styling",
     "LED fog lights",
     "Rear spoiler",
     "Dark exterior trim"
    ]
   },
   {
    "name": "A-Spec w/Technology",
    "msrp": 39200,
    "features": [
     "16-speaker ELS Studio 3D audio",
     "Adaptive dampers",
     "9-in touchscreen / wireless charging",
     "Head-up display",
     "6-speed manual available"
    ]
   },
   {
    "name": "Type S",
    "msrp": 53400,
    "features": [
     "2.0T 320-hp turbo I4",
     "Standard 6-speed manual",
     "Brembo front brakes",
     "Wide-body / 19-in wheels",
     "Adaptive dampers & sport exhaust"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L turbocharged VTEC I4",
    "hp": 200,
    "transmission": "CVT (6-speed manual on A-Spec w/Technology)",
    "manualAvailable": true,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 32,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L turbocharged VTEC I4 (Type S)",
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
   "widthIn": 72,
   "heightIn": 55.5,
   "wheelbaseIn": 107.7,
   "curbWeightLb": 3071,
   "groundClearanceIn": 5
  },
  "interior": {
   "passengerVolumeCuFt": 96,
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
  "confidence": "high",
  "notes": "EPA per fueleconomy.gov: 1.5T CVT 32 mpg combined, 1.5T 6-speed manual 30 mpg combined, Type S 2.0T manual 24 mpg combined. The 6-speed manual is offered only on A-Spec w/Technology (1.5T) and is standard/exclusive on Type S. Color hex values are best-effort sRGB matches; several paints are $600 premium options and Double Apex Blue is limited to A-Spec/Type S.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#E9E9E7"
    },
    {
     "name": "Majestic Black Pearl",
     "hex": "#101012"
    },
    {
     "name": "Solar Silver Metallic",
     "hex": "#B9BCC0"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6E7175"
    },
    {
     "name": "Performance Red Pearl",
     "hex": "#A5000E"
    },
    {
     "name": "Double Apex Blue Pearl",
     "hex": "#22345C"
    }
   ],
   "interior": [
    {
     "name": "Ebony",
     "hex": "#1C1C1E",
     "tone": "dark"
    },
    {
     "name": "Red",
     "hex": "#7A1F27",
     "tone": "dark"
    },
    {
     "name": "Orchid",
     "hex": "#E7E3D9",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "Acura Integra Pricing & Specs",
    "url": "https://www.acura.com/cars/integra/pricing-and-specs",
    "site": "acura.com"
   },
   {
    "label": "EPA fuel economy 2026 Acura Integra",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Acura_Integra.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Acura Integra Prices",
    "url": "https://www.edmunds.com/acura/integra/2026/",
    "site": "edmunds.com"
   }
  ]
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
    "msrp": 51800,
    "features": [
     "3.5L V6 / 10-speed auto",
     "12.3-in display",
     "Panoramic moonroof",
     "Wireless Apple CarPlay & Android Auto"
    ]
   },
   {
    "name": "Technology",
    "msrp": 57200,
    "features": [
     "Milano leather",
     "Navigation",
     "Bang & Olufsen audio",
     "20-in wheels"
    ]
   },
   {
    "name": "A-Spec",
    "msrp": 62400,
    "features": [
     "SH-AWD standard",
     "A-Spec sport styling",
     "Ultrasuede seat inserts",
     "Ventilated front seats",
     "Flat-bottom steering wheel"
    ]
   },
   {
    "name": "Advance",
    "msrp": 66900,
    "features": [
     "16-way power front seats",
     "Surround-view camera",
     "Head-up display",
     "Heated/ventilated seats"
    ]
   },
   {
    "name": "Type S",
    "msrp": 68900,
    "features": [
     "3.0L turbo V6 355 hp",
     "Air suspension",
     "Brembo front brakes",
     "25-speaker ELS 3D audio",
     "Sport exhaust"
    ]
   },
   {
    "name": "Type S Advance",
    "msrp": 75850,
    "features": [
     "Massaging front seats",
     "Premium leather",
     "Full luxury/tech package",
     "Type S performance styling"
    ]
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
    "engine": "3.0L turbocharged V6 (Type S)",
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
  "confidence": "medium",
  "notes": "EPA per fueleconomy.gov: 3.5L V6 FWD 22 / AWD 21 combined; Type S 3.0TT 19 combined. Base MDX and Technology are FWD-standard (AWD optional); A-Spec, Advance, Type S and Type S Advance are SH-AWD standard. Per-trim MSRPs verified from Edmunds for Base ($51,800), Technology ($57,200), A-Spec ($62,400), Advance ($66,900) and Type S Advance ($75,850). Standalone Type S MSRP ($68,900) is from a dealer research page and not independently confirmed; KBB/some Edmunds pages list the Type S Advance at $77,300 vs. $75,850 elsewhere, so top-price is medium confidence. Color hex values are best-effort sRGB matches; Azurite Blue is Type S-exclusive.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#E9E9E7"
    },
    {
     "name": "Majestic Black Pearl",
     "hex": "#101012"
    },
    {
     "name": "Liquid Carbon Metallic",
     "hex": "#3A3D40"
    },
    {
     "name": "Solar Silver Metallic",
     "hex": "#B9BCC0"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6E7175"
    },
    {
     "name": "Canyon River Blue Metallic",
     "hex": "#3E5C6E"
    },
    {
     "name": "Performance Red Pearl",
     "hex": "#A5000E"
    },
    {
     "name": "Double Apex Blue Pearl",
     "hex": "#22345C"
    }
   ],
   "interior": [
    {
     "name": "Ebony",
     "hex": "#1C1C1E",
     "tone": "dark"
    },
    {
     "name": "Graystone",
     "hex": "#8A8D8F",
     "tone": "light"
    },
    {
     "name": "Parchment",
     "hex": "#E6DFD1",
     "tone": "light"
    },
    {
     "name": "Espresso",
     "hex": "#3B2A22",
     "tone": "dark"
    },
    {
     "name": "Red",
     "hex": "#7A1F27",
     "tone": "dark"
    },
    {
     "name": "Orchid",
     "hex": "#E7E3D9",
     "tone": "light"
    },
    {
     "name": "Azurite Blue (Type S)",
     "hex": "#2E4A6B",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Acura MDX Pricing & Specs",
    "url": "https://www.acura.com/suvs/mdx/pricing-and-specs",
    "site": "acura.com"
   },
   {
    "label": "EPA fuel economy 2026 Acura MDX",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Acura_MDX.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Acura MDX Prices",
    "url": "https://www.edmunds.com/acura/mdx/2026/",
    "site": "edmunds.com"
   }
  ]
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
    "msrp": 45100,
    "features": [
     "2.0T / 10-speed auto",
     "SH-AWD standard",
     "Panoramic moonroof",
     "Heated front seats",
     "AcuraWatch"
    ]
   },
   {
    "name": "Technology",
    "msrp": 47700,
    "features": [
     "Perforated Milano leather",
     "Navigation",
     "12-speaker ELS audio",
     "Ventilated front seats / wireless charging"
    ]
   },
   {
    "name": "A-Spec",
    "msrp": 50700,
    "features": [
     "A-Spec sport styling",
     "20-in wheels",
     "Flat-bottom steering wheel",
     "Red/Ultrasuede sport interior"
    ]
   },
   {
    "name": "Advance",
    "msrp": 52850,
    "features": [
     "Adaptive damper suspension",
     "Surround-view camera",
     "Head-up display",
     "Heated rear seats",
     "16-speaker ELS 3D audio"
    ]
   },
   {
    "name": "A-Spec Advance",
    "msrp": 54850,
    "features": [
     "A-Spec styling plus full Advance content",
     "Adaptive suspension",
     "Premium cabin materials"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbocharged VTEC I4",
    "hp": 272,
    "transmission": "10-speed automatic",
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
   "lengthIn": 186.7,
   "widthIn": 74.8,
   "heightIn": 65.7,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 3829,
   "groundClearanceIn": 8.2
  },
  "interior": {
   "passengerVolumeCuFt": 104,
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
  "notes": "SH-AWD is standard on every 2026 RDX trim (no FWD offered), so the single powertrain is AWD-only. EPA combined is 23 mpg per fueleconomy.gov, so prior record 24 was high. 2.0T 272 hp / 280 lb-ft with 10-speed automatic confirmed. Per-trim MSRPs verified via dealer research/Edmunds. Color hex values are best-effort sRGB matches.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#E9E9E7"
    },
    {
     "name": "Majestic Black Pearl",
     "hex": "#101012"
    },
    {
     "name": "Liquid Carbon Metallic",
     "hex": "#3A3D40"
    },
    {
     "name": "Solar Silver Metallic",
     "hex": "#B9BCC0"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6E7175"
    },
    {
     "name": "Canyon River Blue Metallic",
     "hex": "#3E5C6E"
    },
    {
     "name": "Apex Blue Pearl",
     "hex": "#1F3A6E"
    },
    {
     "name": "Performance Red Pearl",
     "hex": "#A5000E"
    }
   ],
   "interior": [
    {
     "name": "Ebony",
     "hex": "#1C1C1E",
     "tone": "dark"
    },
    {
     "name": "Graystone",
     "hex": "#8A8D8F",
     "tone": "light"
    },
    {
     "name": "Parchment",
     "hex": "#E6DFD1",
     "tone": "light"
    },
    {
     "name": "Espresso",
     "hex": "#3B2A22",
     "tone": "dark"
    },
    {
     "name": "Red",
     "hex": "#7A1F27",
     "tone": "dark"
    },
    {
     "name": "Orchid",
     "hex": "#E7E3D9",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "Acura RDX Pricing & Specs",
    "url": "https://www.acura.com/suvs/rdx/pricing-and-specs",
    "site": "acura.com"
   },
   {
    "label": "EPA fuel economy 2026 Acura RDX",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Acura_RDX.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Acura RDX Prices",
    "url": "https://www.edmunds.com/acura/rdx/",
    "site": "edmunds.com"
   }
  ]
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
   "wheelbaseIn": 111,
   "curbWeightLb": 3521,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 13,
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
   "heightIn": 66,
   "wheelbaseIn": 111,
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
   "cargoMaxCuFt": 54,
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
   "lengthIn": 185,
   "widthIn": 78,
   "heightIn": 45.5,
   "wheelbaseIn": 107.9,
   "curbWeightLb": 3649,
   "groundClearanceIn": 4
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
   "widthIn": 78,
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
   "widthIn": 75,
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
   "groundClearanceIn": 8
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
   "heightIn": 58,
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
   "passengerVolumeCuFt": 87,
   "cargoCuFt": 10,
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
   "groundClearanceIn": 5
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
   "passengerVolumeCuFt": 96,
   "cargoCuFt": 13,
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
   "cargoCuFt": 12,
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
   "passengerVolumeCuFt": 102,
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
   "passengerVolumeCuFt": 112,
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
   "heightIn": 53,
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
   "heightIn": 57,
   "wheelbaseIn": 112.4,
   "curbWeightLb": 4680,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 10,
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
   "passengerVolumeCuFt": 102,
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
   "passengerVolumeCuFt": 112,
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
   "lengthIn": 195,
   "widthIn": 77.4,
   "heightIn": 66.8,
   "wheelbaseIn": 118.1,
   "curbWeightLb": 5659,
   "groundClearanceIn": 8
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
   "passengerVolumeCuFt": 94,
   "cargoCuFt": 13,
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
   "cargoCuFt": 12,
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
   "wheelbaseIn": 106,
   "curbWeightLb": 3750,
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": 101,
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
   "wheelbaseIn": 106,
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
   "heightIn": 66,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/BMW_G45_X3_M_Sport_Alpine_White.jpg",
   "credit": "Damian B Oh"
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
   "cargoMaxCuFt": 64,
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
   "groundClearanceIn": 6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.7,
   "cargoMaxCuFt": 42,
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
   "heightIn": 56,
   "wheelbaseIn": 109.3,
   "curbWeightLb": 3461,
   "groundClearanceIn": 5
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
   "wheelbaseIn": 116,
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
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.5,
   "cargoMaxCuFt": 121,
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
   "groundClearanceIn": 8
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
   "groundClearanceIn": 6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 28,
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
   "widthIn": 76,
   "heightIn": 64.6,
   "wheelbaseIn": 116.3,
   "curbWeightLb": 5192,
   "groundClearanceIn": 6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 26,
   "cargoMaxCuFt": 57,
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
   "heightIn": 71,
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
   "widthIn": 75,
   "heightIn": 66.1,
   "wheelbaseIn": 112.5,
   "curbWeightLb": 3998,
   "groundClearanceIn": 7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 30,
   "cargoMaxCuFt": 63,
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
   "heightIn": 67,
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
   "widthIn": 78,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/1/12/2024_Chevrolet_Colorado_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Chevrolet_Colorado_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/5/54/2023_Chevrolet_Colorado_LT%2C_front_1.7.24.jpg",
     "kind": "exterior",
     "credit": "Kevauto",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Chevrolet_Colorado_LT,_front_1.7.24.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Crew cab / short bed only. Single 310 hp TurboMax engine across the range. WT/LT verified; mid trims approximate. Prices exclude $2,095 destination. ZR2 ground clearance 10.7 in.",
  "ratings": {
   "safety": {
    "nhtsa": 4,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API - 2026 Chevrolet Colorado crew cab 4WD (VehicleId 21800), OverallRating 4",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21800",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.6,
    "scale": 5,
    "count": 59,
    "source": {
     "label": "Edmunds consumer reviews - 2026 Chevrolet Colorado (3.6/5, 59 reviews)",
     "url": "https://www.edmunds.com/chevrolet/colorado/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.4,
    "scale": 10,
    "source": {
     "label": "Edmunds expert Rating - 2026 Chevrolet Colorado (6.4/10)",
     "url": "https://www.edmunds.com/chevrolet/colorado/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/2025_Chevrolet_Equinox_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Chevrolet_Equinox_interior.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "All-new generation launched for 2025; 2026 is a carryover. ACTIV/RS trim prices are estimates; base LT verified. Prices exclude $1,495 destination.",
  "sources": [
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Chevrolet_Equinox.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/chevrolet/equinox/2026/",
    "site": "edmunds.com"
   },
   {
    "label": "2026 pricing & review",
    "url": "https://www.kbb.com/chevrolet/equinox/2026/",
    "site": "kbb.com"
   }
  ],
  "ratings": {
   "owner": {
    "score": 3.2,
    "scale": 5,
    "count": 16,
    "source": {
     "label": "KBB consumer reviews — 2026 Chevrolet Equinox",
     "url": "https://www.kbb.com/chevrolet/equinox/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.2,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Chevrolet Equinox",
     "url": "https://www.kbb.com/chevrolet/equinox/2026/",
     "site": "kbb.com"
    }
   }
  }
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
   "groundClearanceIn": 6
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/3b/2022_Chevrolet_Silverado_facelift_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Chevrolet_Silverado_facelift_interior.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "Regular, double and crew cabs; dims shown for crew cab short bed. Mid-trim prices approximate. Prices exclude $2,195 destination.",
  "sources": [
   {
    "label": "2026 pricing, trims & towing",
    "url": "https://www.chevrolet.com/trucks/silverado/1500",
    "site": "chevrolet.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Chevrolet_Silverado.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/chevrolet/silverado-1500/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Chevrolet Silverado 1500 (Crew Cab RWD)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21856",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.8,
    "scale": 5,
    "count": 177,
    "source": {
     "label": "KBB consumer reviews — 2026 Chevrolet Silverado 1500",
     "url": "https://www.kbb.com/chevrolet/silverado-1500/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.3,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Chevrolet Silverado 1500",
     "url": "https://www.kbb.com/chevrolet/silverado-1500/2026/",
     "site": "kbb.com"
    }
   }
  }
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
   "lengthIn": 250,
   "widthIn": 81.9,
   "heightIn": 79.8,
   "wheelbaseIn": 158.9,
   "curbWeightLb": 6947,
   "groundClearanceIn": 10
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
   "widthIn": 81,
   "heightIn": 75.7,
   "wheelbaseIn": 134.1,
   "curbWeightLb": 5808,
   "groundClearanceIn": 8
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
   "widthIn": 81,
   "heightIn": 75.8,
   "wheelbaseIn": 120.9,
   "curbWeightLb": 5635,
   "groundClearanceIn": 8
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
  "notes": "Refreshed for 2025. Base and top trims verified; mid-trim prices close estimates. Prices exclude $2,795 destination.",
  "sources": [
   {
    "label": "2026 pricing, trims & specs",
    "url": "https://www.chevrolet.com/suvs/tahoe",
    "site": "chevrolet.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Chevrolet_Tahoe.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/chevrolet/tahoe/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Chevrolet Tahoe (RWD)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21862",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.4,
    "scale": 5,
    "count": 49,
    "source": {
     "label": "KBB consumer reviews — 2026 Chevrolet Tahoe",
     "url": "https://www.kbb.com/chevrolet/tahoe/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.7,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Chevrolet Tahoe",
     "url": "https://www.kbb.com/chevrolet/tahoe/2026/",
     "site": "kbb.com"
    }
   }
  }
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/3c/2024_Chevrolet_Traverse_RS_AWD%2C_front_10.16.24.jpg",
     "kind": "exterior",
     "credit": "Kevauto",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Chevrolet_Traverse_RS_AWD,_front_10.16.24.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "All turbo-four now; no V6. Mid-trim prices approximate; RS AWD verified at $59,395 incl. destination. Prices exclude ~$1,995 destination.",
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Chevrolet Traverse (FWD)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21868",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4.5,
    "scale": 5,
    "count": 4,
    "source": {
     "label": "KBB consumer reviews — 2026 Chevrolet Traverse",
     "url": "https://www.kbb.com/chevrolet/traverse/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.3,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Chevrolet Traverse",
     "url": "https://www.kbb.com/chevrolet/traverse/2026/",
     "site": "kbb.com"
    }
   }
  }
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
   "wheelbaseIn": 106,
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
  "notes": "FWD only; no AWD offered. Prices exclude $1,495 destination. One of the least expensive new vehicles in the US.",
  "ratings": {
   "owner": {
    "score": 4.4,
    "scale": 5,
    "count": 80,
    "source": {
     "label": "Edmunds consumer reviews - 2026 Chevrolet Trax (4.4/5, 80 reviews)",
     "url": "https://www.edmunds.com/chevrolet/trax/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7,
    "scale": 10,
    "source": {
     "label": "Edmunds expert Rating - 2026 Chevrolet Trax (7.0/10)",
     "url": "https://www.edmunds.com/chevrolet/trax/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "passengerVolumeCuFt": 165,
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
   "passengerVolumeCuFt": 165,
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
   "heightIn": 59,
   "wheelbaseIn": 121,
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
   "heightIn": 59,
   "wheelbaseIn": 121,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2021_Dodge_Durango_Citadel_(facelift)%2C_front_6.21.22.jpg",
   "credit": "Kevauto"
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
   "lengthIn": 178,
   "widthIn": 72,
   "heightIn": 63.8,
   "wheelbaseIn": 103.8,
   "curbWeightLb": 3715,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 27,
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
   "widthIn": 79,
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
   "heightIn": 47,
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
   "groundClearanceIn": 4
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
   "lengthIn": 143,
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
  "priceTo": 81990,
  "trims": [
   {
    "name": "Base",
    "msrp": 42490,
    "features": [
     "2.3L EcoBoost with standard 7-speed manual",
     "Standard 4x4 with G.O.A.T. drive modes",
     "Removable roof and doors",
     "12-inch SYNC 4 touchscreen"
    ]
   },
   {
    "name": "Big Bend",
    "msrp": 42990,
    "features": [
     "Upgraded cloth seats and interior trim",
     "Unique wheels",
     "Body-color exterior accents",
     "Additional convenience features"
    ]
   },
   {
    "name": "Outer Banks",
    "msrp": 50085,
    "features": [
     "Available 2.7L EcoBoost V6",
     "Leather-trimmed heated front seats",
     "LED signature lighting",
     "Dual-zone climate control"
    ]
   },
   {
    "name": "Badlands",
    "msrp": 50885,
    "features": [
     "Bilstein off-road position-sensitive dampers",
     "Front and rear locking differentials",
     "Electronic front sway-bar disconnect",
     "Skid plates and Trail off-road modes"
    ]
   },
   {
    "name": "Heritage Edition",
    "msrp": 53620,
    "features": [
     "Retro white grille, wheels and roof",
     "Heritage-themed interior",
     "Unique two-tone paint options",
     "Special exterior badging"
    ]
   },
   {
    "name": "Stroppe Edition",
    "msrp": 71990,
    "features": [
     "Baja-inspired heritage livery",
     "Upgraded suspension and appearance package",
     "Unique wheels and graphics",
     "Special interior appointments"
    ]
   },
   {
    "name": "Raptor",
    "msrp": 81990,
    "features": [
     "3.0L twin-turbo EcoBoost V6 with 418 hp",
     "FOX Live Valve internal-bypass shocks",
     "37-inch tires and widened track",
     "Reinforced high-clearance suspension"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L EcoBoost turbo I-4",
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
    "engine": "2.7L EcoBoost twin-turbo V6",
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
    "engine": "3.0L EcoBoost twin-turbo V6 (Raptor)",
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
   "heightIn": 73,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/2022_Ford_Bronco_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Ford_Bronco_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/cb/2021_Ford_Bronco_Outer_Banks_4-dr_in_Area_51%2C_front_right.jpg",
     "kind": "exterior",
     "credit": "Mr.choppers",
     "license": "CC BY-SA 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2021_Ford_Bronco_Outer_Banks_4-dr_in_Area_51,_front_right.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Full-size 4x4 Bronco offered in two-door and four-door bodies. priceFrom reflects the lowest advertised MSRP ($40,495, two-door Base); the Edmunds per-trim figures listed here are four-door starting prices, so a given trim's two-door variant may be lower. 2.7L V6 combined MPG varies by configuration (EPA shows 17 on the base 2.7 4WD auto and 20 on Outer Banks 2.7); 18 is used as a representative figure. 2.3L manual is available on four-cylinder trims only. Raptor 418 hp and 3.0L V6 confirmed on Ford.com.",
  "ratings": {
   "owner": {
    "score": 4.7,
    "scale": 5,
    "count": 56,
    "source": {
     "label": "KBB consumer reviews — 2026 Ford Bronco",
     "url": "https://www.kbb.com/ford/bronco/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.4,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Ford Bronco",
     "url": "https://www.kbb.com/ford/bronco/2026/",
     "site": "kbb.com"
    }
   }
  },
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#F3F3F0"
    },
    {
     "name": "Shadow Black",
     "hex": "#0B0B0D"
    },
    {
     "name": "Avalanche Gray",
     "hex": "#6E7377"
    },
    {
     "name": "Marsh Gray",
     "hex": "#6B6A62"
    },
    {
     "name": "Desert Sand",
     "hex": "#B9A883"
    },
    {
     "name": "Velocity Blue Metallic",
     "hex": "#2C5AA0"
    },
    {
     "name": "Ruby Red Metallic Tinted Clearcoat",
     "hex": "#7E1220"
    },
    {
     "name": "Shelter Green Metallic (Raptor)",
     "hex": "#3B4A3A"
    }
   ],
   "interior": [
    {
     "name": "Dark Space Gray",
     "hex": "#3A3D40",
     "tone": "dark"
    },
    {
     "name": "Black Onyx",
     "hex": "#1B1B1D",
     "tone": "dark"
    },
    {
     "name": "Smoked Truffle / Black Onyx",
     "hex": "#5A4A3E",
     "tone": "dark"
    },
    {
     "name": "Navy Pier / Black Onyx",
     "hex": "#26303E",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford 2026 Bronco model page",
    "url": "https://www.ford.com/suvs/bronco/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy - 2026 Ford Bronco",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_Bronco.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Bronco pricing",
    "url": "https://www.edmunds.com/ford/bronco/2026/",
    "site": "edmunds.com"
   }
  ]
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
  "priceFrom": 33840,
  "priceTo": 42260,
  "trims": [
   {
    "name": "Big Bend",
    "msrp": 33840,
    "features": [
     "Standard 4x4 with 5 GOAT drive modes",
     "1.5L EcoBoost with 8-speed automatic",
     "13.2-inch SYNC 4 touchscreen",
     "Cloth seats and roof rails"
    ]
   },
   {
    "name": "Heritage",
    "msrp": 36140,
    "features": [
     "Retro-styled grille and heritage accents",
     "Unique wheels and exterior graphics",
     "Cloth with plaid-pattern seat accents",
     "Special heritage badging"
    ]
   },
   {
    "name": "Outer Banks",
    "msrp": 38940,
    "features": [
     "Leather-trimmed heated front seats",
     "Upgraded interior trim and lighting",
     "LED signature exterior lighting",
     "Larger alloy wheels"
    ]
   },
   {
    "name": "Badlands",
    "msrp": 42260,
    "features": [
     "250 hp 2.0L EcoBoost engine",
     "Advanced 4x4 with twin-clutch rear drive unit",
     "Off-road suspension and steel skid plates",
     "Additional off-road GOAT modes"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L EcoBoost turbo I-3",
    "hp": 180,
    "transmission": "8-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 27,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.0L EcoBoost turbo I-4 (Badlands)",
    "hp": 250,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2026_Ford_Bronco_Sport_au_salon_auto_Lanaudi%C3%A8re_2025.jpg",
   "credit": "Bull-Doser"
  },
  "confidence": "high",
  "notes": "Ford.com confirms only four 2026 trims (Big Bend, Heritage, Outer Banks, Badlands) and carryover engines, so 2026 is a mid-cycle refresh (new grille, colors, interior fabrics) rather than a ground-up redesign. Base engine is now cataloged by the EPA as a 3-cylinder 1.5L EcoBoost. Some dealer sites quote a $31,845 start; the verified per-trim Big Bend MSRP is $33,840. Dealer chatter about 'Free Wheeling' and other special editions is not reflected on Ford's current 2026 configurator.",
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#F3F3F0"
    },
    {
     "name": "Space White Metallic",
     "hex": "#E9EAE4"
    },
    {
     "name": "Shadow Black",
     "hex": "#0B0B0D"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#54585B"
    },
    {
     "name": "Azure Gray Metallic Tri-Coat",
     "hex": "#6C7175"
    },
    {
     "name": "Velocity Blue Metallic",
     "hex": "#2C5AA0"
    },
    {
     "name": "Ruby Red Tinted Clearcoat",
     "hex": "#7E1220"
    },
    {
     "name": "Orange Fury Metallic Tri-Coat",
     "hex": "#D2481A"
    }
   ],
   "interior": [
    {
     "name": "Ebony / Roast",
     "hex": "#2A2622",
     "tone": "dark"
    },
    {
     "name": "Navy Pier",
     "hex": "#26303E",
     "tone": "dark"
    },
    {
     "name": "Smoked Truffle",
     "hex": "#5A4A3E",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford 2026 Bronco Sport model page",
    "url": "https://www.ford.com/suvs/bronco-sport/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy - 2026 Ford Bronco Sport",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_Bronco_Sport.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Bronco Sport pricing",
    "url": "https://www.edmunds.com/ford/bronco-sport/2026/",
    "site": "edmunds.com"
   }
  ]
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
  "priceTo": 58770,
  "trims": [
   {
    "name": "E-Transit 350 Low Roof (Cargo)",
    "msrp": 53260,
    "features": [
     "Entry all-electric cargo configuration",
     "89 kWh battery, single rear motor",
     "12-in SYNC 4 touchscreen standard",
     "Ford Co-Pilot360 driver assistance"
    ]
   },
   {
    "name": "E-Transit 350 Medium Roof (Cargo)",
    "msrp": 54475,
    "features": [
     "Taller medium roof for more cargo volume",
     "Same 89 kWh battery and rear-motor drive",
     "Improved heat-pump climate system"
    ]
   },
   {
    "name": "E-Transit 350 High Roof (Cargo)",
    "msrp": 55475,
    "features": [
     "Stand-up high-roof cargo area",
     "Pro Power Onboard exportable power available",
     "Fleet telematics and connectivity ready"
    ]
   },
   {
    "name": "E-Transit 350 High Roof Extended (Cargo)",
    "msrp": 56675,
    "features": [
     "Longest body / maximum cargo length",
     "High roof for tallest load space",
     "Top of the E-Transit cargo range"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single rear-mounted electric motor, 89 kWh battery",
    "hp": 266,
    "transmission": "single-speed",
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
   "wheelbaseIn": 130,
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
  "confidence": "high",
  "notes": "All-electric commercial van. Single rear electric motor rated 266 hp / 317 lb-ft, fed by an ~89 kWh (89.9 kWh) battery. Ford-estimated range is up to 159 miles; an official EPA range/MPGe is not published (heavy-duty class), so mpgCombined is null and evRangeMi uses Ford's estimate. 2026 adds a 12-in SYNC 4 screen, standard Co-Pilot360, and an improved heat pump. Trims are 350-series roof-height/length cargo configurations. Prices verified via Edmunds (53260 Low Roof to 56675 High Roof Extended); priceTo of 58770 reflects a higher-content High Roof Extended build reported at launch.",
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#F2F3F1"
    },
    {
     "name": "Agate Black",
     "hex": "#0A0A0A"
    },
    {
     "name": "Ingot Silver",
     "hex": "#9A9CA0"
    },
    {
     "name": "Race Red",
     "hex": "#C8102E"
    },
    {
     "name": "Blue Metallic",
     "hex": "#2E4B6B"
    },
    {
     "name": "Carbonized Gray",
     "hex": "#52565A"
    }
   ],
   "interior": [
    {
     "name": "Dark Palazzo Gray Vinyl",
     "hex": "#3A3B3D",
     "tone": "dark"
    },
    {
     "name": "Dark Palazzo Gray Cloth",
     "hex": "#404244",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford Pro 2026 E-Transit",
    "url": "https://www.fordpro.com/en-us/fleet-vehicles/e-transit/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy Ford search (E-Transit not rated)",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Ford&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 E-Transit cargo van pricing",
    "url": "https://www.edmunds.com/ford/e-transit-cargo-van/2026/",
    "site": "edmunds.com"
   }
  ]
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
  "priceTo": 38705,
  "trims": [
   {
    "name": "Active",
    "msrp": 31845,
    "features": [
     "1.5L EcoBoost turbo three-cylinder",
     "13.2-inch touchscreen with Ford Digital Experience",
     "Front-wheel drive with available AWD",
     "Base convenience and safety content"
    ]
   },
   {
    "name": "ST-Line",
    "msrp": 32690,
    "features": [
     "Sport-themed blacked-out exterior styling",
     "Unique grille and alloy wheels",
     "Sport cloth seats and steering wheel",
     "ST-Line badging and trim"
    ]
   },
   {
    "name": "ST-Line Select",
    "msrp": 35385,
    "features": [
     "Available hybrid and 2.0L EcoBoost powertrains",
     "Heated front seats and wireless charging",
     "Upgraded tech and driver-assist features",
     "Larger wheels"
    ]
   },
   {
    "name": "Plug-In Hybrid",
    "msrp": 36895,
    "features": [
     "2.5L plug-in hybrid with 37-mile electric range",
     "101 MPGe combined efficiency",
     "EV, Auto and Charge drive modes",
     "Front-wheel drive powertrain"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 37710,
    "features": [
     "Premium leather-trimmed seating",
     "Bang and Olufsen premium audio",
     "ActiveX and upscale interior materials",
     "Additional luxury and tech content"
    ]
   },
   {
    "name": "ST-Line Elite",
    "msrp": 38705,
    "features": [
     "Top ST-Line equipment and finishes",
     "Panoramic roof and premium audio",
     "Full leather-trimmed sport interior",
     "Standard all-wheel drive availability"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "1.5L EcoBoost turbo I-3",
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
    "engine": "2.0L EcoBoost turbo I-4",
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
    "engine": "2.5L Atkinson I-4 full hybrid",
    "hp": 192,
    "transmission": "eCVT (electronic CVT)",
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
    "engine": "2.5L Atkinson I-4 plug-in hybrid",
    "hp": 210,
    "transmission": "eCVT (electronic CVT)",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 40,
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
   "passengerVolumeCuFt": 104,
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
  "notes": "Escape offers four powertrains: 1.5L EcoBoost gas (3-cyl, 180 hp), 2.0L EcoBoost gas (250 hp, AWD), 2.5L full hybrid (192 hp system) and 2.5L plug-in hybrid (210 hp system, 37-mile EV range, 101 MPGe). Hybrid EPA combined is 39 (42 city / 36 hwy) per fueleconomy.gov; PHEV mpgCombined shown is the gas-only (charge-sustaining) figure of ~40 with 101 MPGe when using electricity. priceFrom $30,350 is the lowest advertised Active figure (Edmunds lists Active at $31,845 as configured); confidence set to medium because the exact base-Active MSRP and the fifth/sixth verified exterior color could not be pinned to a single resolving source. ST-Line Elite is the top gas/ST-Line trim at $38,705.",
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Ford Escape (FWD)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21395",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.8,
    "scale": 5,
    "count": 71,
    "source": {
     "label": "KBB consumer reviews — 2026 Ford Escape",
     "url": "https://www.kbb.com/ford/escape/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Ford Escape",
     "url": "https://www.kbb.com/ford/escape/2026/",
     "site": "kbb.com"
    }
   }
  },
  "colors": {
   "exterior": [
    {
     "name": "Star White Metallic",
     "hex": "#F4F4F0"
    },
    {
     "name": "Agate Black Metallic",
     "hex": "#0B0B0D"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#54585B"
    },
    {
     "name": "Vapor Blue Metallic",
     "hex": "#7C90A0"
    },
    {
     "name": "Rapid Red Metallic Tinted Clearcoat",
     "hex": "#8C1420"
    }
   ],
   "interior": [
    {
     "name": "Ebony",
     "hex": "#1C1C1E",
     "tone": "dark"
    },
    {
     "name": "Space Gray",
     "hex": "#3A3D40",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford 2026 Escape model page",
    "url": "https://www.ford.com/suvs-crossovers/escape/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy - 2026 Ford Escape",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_Escape.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Escape pricing",
    "url": "https://www.edmunds.com/ford/escape/2026/",
    "site": "edmunds.com"
   }
  ]
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
  "priceFrom": 62700,
  "priceTo": 90155,
  "trims": [
   {
    "name": "Active",
    "msrp": 62700,
    "features": [
     "3.5L EcoBoost V6 with 400 hp",
     "Rear-wheel drive standard (4WD available)",
     "24-inch panoramic digital dashboard",
     "Power-folding third row and power liftgate"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 77045,
    "features": [
     "Available 440 hp high-output V6",
     "Standard 4WD and adaptive suspension",
     "Premium leather and Bang and Olufsen audio",
     "22-inch wheels and upscale trim"
    ]
   },
   {
    "name": "Tremor",
    "msrp": 84495,
    "features": [
     "Standard 440 hp high-output V6",
     "Off-road suspension with 33-inch tires",
     "Skid plates and Trail Control",
     "Rugged Tremor exterior styling"
    ]
   },
   {
    "name": "King Ranch",
    "msrp": 87155,
    "features": [
     "King Ranch Del Rio leather interior",
     "Unique King Ranch badging and trim",
     "Top-tier luxury appointments",
     "Distinctive two-tone exterior accents"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L EcoBoost twin-turbo V6",
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
    "engine": "3.5L EcoBoost High-Output twin-turbo V6",
    "hp": 440,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 18,
    "evRangeMi": null
   }
  ],
  "seats": [
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210,
   "widthIn": 79.9,
   "heightIn": 76.6,
   "wheelbaseIn": 122.5,
   "curbWeightLb": 5623,
   "groundClearanceIn": 9.8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 22,
   "cargoMaxCuFt": 108,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2025_Ford_Expedition_Tremor%2C_front_NYIAS_2025.jpg",
   "credit": "Kevauto"
  },
  "confidence": "high",
  "notes": "Fifth-generation Expedition (redesigned for 2025, carryover for 2026) with 24-inch digital dash and two-piece power liftgate. priceFrom reflects the retail Active trim ($62,700 RWD); a fleet-only XL trim (~$57,700) exists but is not a retail consumer trim. priceTo reflects Max King Ranch ($90,155). Extended-length Max variants of Active, Platinum and King Ranch add roughly $3,000. Standard V6 is 400 hp; high-output V6 (standard on Tremor, optional on Platinum) is 440 hp. EPA combined 19 (RWD) / 18 (4WD).",
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#F3F3F0"
    },
    {
     "name": "Star White Metallic Tri-coat",
     "hex": "#F4F4F0"
    },
    {
     "name": "Agate Black Metallic",
     "hex": "#0B0B0D"
    },
    {
     "name": "Dark Matter Gray Metallic",
     "hex": "#494C4F"
    },
    {
     "name": "Glacier Gray Metallic Tri-coat",
     "hex": "#B6BABD"
    },
    {
     "name": "Space Silver Metallic",
     "hex": "#9EA1A5"
    },
    {
     "name": "Stone Blue Metallic",
     "hex": "#3E4C5E"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#1B1B1D",
     "tone": "dark"
    },
    {
     "name": "Space Gray",
     "hex": "#3A3D40",
     "tone": "dark"
    },
    {
     "name": "Salt Crystal Gray",
     "hex": "#C9C6BE",
     "tone": "light"
    },
    {
     "name": "Mojave Dusk",
     "hex": "#6E5B47",
     "tone": "light"
    },
    {
     "name": "Mesa",
     "hex": "#B79B77",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford 2026 Expedition model page",
    "url": "https://www.ford.com/suvs/expedition/2026/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy - 2026 Ford Expedition",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_Expedition.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Expedition pricing",
    "url": "https://www.edmunds.com/ford/expedition/2026/",
    "site": "edmunds.com"
   }
  ]
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
  "priceTo": 56700,
  "trims": [
   {
    "name": "Active 100A",
    "msrp": 38465,
    "features": [
     "2.3L EcoBoost with rear-wheel drive",
     "13.2-inch touchscreen with Ford Digital Experience",
     "12.3-inch digital instrument cluster",
     "Value-oriented base equipment group"
    ]
   },
   {
    "name": "Active",
    "msrp": 40260,
    "features": [
     "Expanded standard convenience content",
     "Additional driver-assist features",
     "Upgraded wheels over base group",
     "Broader option availability"
    ]
   },
   {
    "name": "ST-Line",
    "msrp": 46950,
    "features": [
     "Sport-tuned exterior with blacked-out accents",
     "Sport front seats and unique trim",
     "Sport steering wheel and pedals",
     "Larger machined alloy wheels"
    ]
   },
   {
    "name": "Tremor",
    "msrp": 50760,
    "features": [
     "Intelligent 4WD with off-road tuning",
     "All-terrain tires and skid plates",
     "Trail Turn Assist and off-road drive modes",
     "Raised ride height and recovery hooks"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 52760,
    "features": [
     "Available 3.0L EcoBoost V6",
     "Premium leather with quilted inserts",
     "Bang and Olufsen premium audio",
     "Additional chrome and luxury trim"
    ]
   },
   {
    "name": "ST",
    "msrp": 56700,
    "features": [
     "Standard 3.0L EcoBoost V6 with 385 hp",
     "Sport-tuned performance suspension",
     "Red-painted brake calipers",
     "ST performance styling and seats"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L EcoBoost turbo I-4",
    "hp": 300,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
    ],
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L EcoBoost twin-turbo V6",
    "hp": 385,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD",
     "4WD"
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/44/2022_Ford_Explorer_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Ford_Explorer_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/b/bb/2020_Ford_Explorer_XLT_in_Oxford_White%2C_rear_left.jpg",
     "kind": "exterior",
     "credit": "Mr.choppers",
     "license": "CC BY-SA 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2020_Ford_Explorer_XLT_in_Oxford_White,_rear_left.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "2026 Explorer reflects the recent redesign/refresh: new Tremor off-road model, Ford Digital Experience infotainment, 13.2-inch screen. Base 2.3L is 300 hp; ST 3.0L V6 is 385 hp per Ford.com. RWD standard on four-cylinder trims with intelligent 4WD available across the line. EPA combined: 2.3L RWD 24 (AWD 23), 3.0L RWD 21 (AWD 20); Tremor variants slightly lower.",
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick",
    "appliesTo": "2025 (carries over)",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2025 Ford Explorer 4WD",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20049",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.7,
    "scale": 5,
    "count": 51,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Ford Explorer",
     "url": "https://www.edmunds.com/ford/explorer/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.2,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Ford Explorer",
     "url": "https://www.edmunds.com/ford/explorer/2026/",
     "site": "edmunds.com"
    }
   }
  },
  "colors": {
   "exterior": [
    {
     "name": "Space White Metallic",
     "hex": "#E9EAE4"
    },
    {
     "name": "Star White Metallic Tri-coat",
     "hex": "#F4F4F0"
    },
    {
     "name": "Agate Black Metallic",
     "hex": "#0B0B0D"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#54585B"
    },
    {
     "name": "Marsh Gray",
     "hex": "#6B6A62"
    },
    {
     "name": "Vapor Blue Metallic",
     "hex": "#7C90A0"
    },
    {
     "name": "Rapid Red Metallic Tinted Clearcoat",
     "hex": "#8C1420"
    }
   ],
   "interior": [
    {
     "name": "Dark Space Gray Cloth",
     "hex": "#3A3D40",
     "tone": "dark"
    },
    {
     "name": "Onyx Cloth with Red Stitching",
     "hex": "#1C1C1E",
     "tone": "dark"
    },
    {
     "name": "Onyx Miko",
     "hex": "#1C1C1E",
     "tone": "dark"
    },
    {
     "name": "Mojave Dusk ActiveX",
     "hex": "#6E5B47",
     "tone": "light"
    },
    {
     "name": "Salt Crystal Gray Leather",
     "hex": "#C9C6BE",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford 2026 Explorer model page",
    "url": "https://www.ford.com/suvs/explorer/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy - 2026 Ford Explorer",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_Explorer.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Explorer pricing",
    "url": "https://www.edmunds.com/ford/explorer/2026/",
    "site": "edmunds.com"
   }
  ]
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
  "priceTo": 79005,
  "trims": [
   {
    "name": "XL",
    "msrp": 39330,
    "features": [
     "Base work trim",
     "12-inch SYNC 4 touchscreen available",
     "Multiple engine choices",
     "Vinyl or cloth seating"
    ]
   },
   {
    "name": "STX",
    "msrp": 41855,
    "features": [
     "Sport appearance package",
     "18-inch wheels",
     "Standard 12-inch touchscreen",
     "Body-color or black-accent styling"
    ]
   },
   {
    "name": "XLT",
    "msrp": 44695,
    "features": [
     "Upgraded cloth seats",
     "Chrome/bright accents",
     "Power driver seat",
     "Most popular volume trim"
    ]
   },
   {
    "name": "Lariat",
    "msrp": 59560,
    "features": [
     "Leather-trimmed seats",
     "Dual-zone climate",
     "Available B&O audio",
     "Now offered in 4x2"
    ]
   },
   {
    "name": "Tremor",
    "msrp": 64915,
    "features": [
     "FX4 off-road suspension",
     "All-terrain tires",
     "Skid plates",
     "Trail control and unique styling"
    ]
   },
   {
    "name": "King Ranch",
    "msrp": 65825,
    "features": [
     "Western-themed premium leather",
     "Real wood trim",
     "Multicontour front seats",
     "Now offered in 4x2"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 68800,
    "features": [
     "Massaging front seats",
     "Top-tier tech and trim",
     "22-inch wheels available",
     "Now offered in 4x2"
    ]
   },
   {
    "name": "Raptor",
    "msrp": 79005,
    "features": [
     "High-output 3.5L EcoBoost",
     "37-inch tires available",
     "FOX Live Valve shocks",
     "Widened track and long-travel suspension"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.7L EcoBoost V6",
    "hp": 325,
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
    "engine": "3.5L EcoBoost V6",
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
    "engine": "5.0L Ti-VCT V8",
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
    "type": "hybrid",
    "engine": "3.5L PowerBoost Full-Hybrid V6",
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
    "engine": "3.5L High-Output EcoBoost V6 (Raptor)",
    "hp": 450,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 18,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/2022_Ford_F-150_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Ford_F-150_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/7/71/2024_Ford_F-150_Lariat_rear_view.jpg",
     "kind": "exterior",
     "credit": "Deathpallie325",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Ford_F-150_Lariat_rear_view.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Eight-trim lineup (XL, STX, XLT, Lariat, Tremor, King Ranch, Platinum, Raptor). For 2026 Lariat, King Ranch and Platinum gained a 4x2 option, lowering their base MSRP. Destination is $2,795 (excluded from MSRP figures). Combined MPG from EPA: 2.7L 21/20 (2WD/4WD), 3.5L 20/19, 5.0L 19, PowerBoost hybrid 24/23; representative figures used. Supercharged 5.2L V8 Raptor R (~720 hp) starts around $113,000-$115,000 and is not EPA-rated in the combined data; not included in priceTo.",
  "sources": [
   {
    "label": "Ford F-150 official model page",
    "url": "https://www.ford.com/trucks/f150/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy 2026 Ford F150",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_F150.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "TrueCar 2026 F-150 pricing",
    "url": "https://www.truecar.com/overview/ford/f-150/2026/",
    "site": "truecar.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Ford F-150 SuperCrew (Gas) 4WD",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21411",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4,
    "scale": 5,
    "count": 26,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Ford F-150",
     "url": "https://www.edmunds.com/ford/f-150/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.7,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Ford F-150",
     "url": "https://www.edmunds.com/ford/f-150/2026/",
     "site": "edmunds.com"
    }
   }
  },
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#EDEEF0"
    },
    {
     "name": "Agate Black Metallic",
     "hex": "#14161A"
    },
    {
     "name": "Iconic Silver Metallic",
     "hex": "#9DA1A4"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#4C4F52"
    },
    {
     "name": "Avalanche",
     "hex": "#CFCEC6"
    },
    {
     "name": "Antimatter Blue Metallic",
     "hex": "#26313D"
    },
    {
     "name": "Argon Blue Metallic",
     "hex": "#6E8BA6"
    },
    {
     "name": "Marsh Gray",
     "hex": "#6A6D66"
    },
    {
     "name": "Ruby Red Metallic Tinted Clearcoat",
     "hex": "#7C0A11"
    },
    {
     "name": "Star White Metallic Tri-Coat",
     "hex": "#EFF1EF"
    },
    {
     "name": "Shelter Green (Raptor)",
     "hex": "#3B4A3B"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#1B1B1D",
     "tone": "dark"
    },
    {
     "name": "Medium Dark Slate",
     "hex": "#3E4145",
     "tone": "dark"
    },
    {
     "name": "Light Slate",
     "hex": "#8A8D90",
     "tone": "light"
    },
    {
     "name": "Baja (King Ranch leather)",
     "hex": "#6B4A2E",
     "tone": "dark"
    }
   ]
  }
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
  "priceTo": 87190,
  "trims": [
   {
    "name": "Pro",
    "msrp": 54780,
    "features": [
     "Commercial/work focus",
     "Vinyl easy-clean seating",
     "2.4 kW Pro Power Onboard",
     "Standard-range battery base"
    ]
   },
   {
    "name": "STX",
    "msrp": 62995,
    "features": [
     "Retail entry styling",
     "20-inch wheels",
     "Extended-range battery standard",
     "Unique interior accents"
    ]
   },
   {
    "name": "Flash",
    "msrp": 65995,
    "features": [
     "Extended-range battery",
     "15.5-inch center screen",
     "B&O sound system",
     "Value-oriented sweet spot"
    ]
   },
   {
    "name": "Lariat",
    "msrp": 74995,
    "features": [
     "Leather-trimmed seats",
     "Power tailgate",
     "BlueCruise hands-free ready",
     "580 hp dual-motor output"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 87190,
    "features": [
     "22-inch wheels",
     "Multicontour massaging seats",
     "Highest-output Pro Power Onboard",
     "Luxury flagship trim"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Dual eMotor (Extended Range battery, Pro/STX/Flash)",
    "hp": 536,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 66,
    "evRangeMi": 300
   },
   {
    "type": "ev",
    "engine": "Dual eMotor (Extended Range battery, Lariat/Platinum)",
    "hp": 580,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 66,
    "evRangeMi": 320
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 232.7,
   "widthIn": 80,
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
  "notes": "2026 availability is uncertain: Ford opened 2026 order banks (making the 123 kWh Extended Range battery standard and adding the STX trim in place of XLT) but reportedly moved to end F-150 Lightning production in late 2025 amid slow EV demand; treat the 2026 spec below as the announced lineup. 2026 Lightning combined MPGe and EPA range are not yet posted on fueleconomy.gov (2025 data cited as proxy). Manufacturer-estimated range is about 300 mi (Pro/STX/Flash), about 320 mi (Lariat) and about 300 mi (Platinum); dual-motor outputs are 536 hp (Pro/STX/Flash) and 580 hp (Lariat/Platinum), each 775 lb-ft. MPGe ~66 per reporting; treat as approximate. STX MSRP (~$62,995) is estimated. Lariat received a $2,000 cut to $74,995; Platinum starts $87,190. Destination is $2,595. Exterior color set is approximate pending Ford's final 2026 Lightning palette.",
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#EDEEF0"
    },
    {
     "name": "Agate Black Metallic",
     "hex": "#14161A"
    },
    {
     "name": "Iconic Silver Metallic",
     "hex": "#9DA1A4"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#4C4F52"
    },
    {
     "name": "Antimatter Blue Metallic",
     "hex": "#26313D"
    },
    {
     "name": "Star White Metallic Tri-Coat",
     "hex": "#EFF1EF"
    },
    {
     "name": "Avalanche",
     "hex": "#CFCEC6"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#1B1B1D",
     "tone": "dark"
    },
    {
     "name": "Medium Dark Slate",
     "hex": "#3E4145",
     "tone": "dark"
    },
    {
     "name": "Light Slate",
     "hex": "#8A8D90",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford F-150 Lightning official page",
    "url": "https://www.ford.com/trucks/f150-lightning/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy F-150 Lightning",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2025_Ford_F-150_Lightning.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "TrueCar 2026 F-150 Lightning pricing",
    "url": "https://www.truecar.com/overview/ford/f-150-lightning/2026/",
    "site": "truecar.com"
   }
  ]
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
  "priceFrom": 48770,
  "priceTo": 81760,
  "trims": [
   {
    "name": "XL",
    "msrp": 48770,
    "features": [
     "Work-grade base trim",
     "Vinyl or cloth seating",
     "Steel wheels",
     "Full engine range available"
    ]
   },
   {
    "name": "XLT",
    "msrp": 51970,
    "features": [
     "Chrome exterior accents",
     "Larger touchscreen",
     "Cloth seating upgrade",
     "Alloy wheels"
    ]
   },
   {
    "name": "Lariat",
    "msrp": 65830,
    "features": [
     "Leather-trimmed seats",
     "Dual-zone climate",
     "Upgraded audio and tech",
     "Available Crew Cab luxury"
    ]
   },
   {
    "name": "King Ranch",
    "msrp": 80870,
    "features": [
     "Western premium leather",
     "Standard Crew Cab 4x4",
     "Wood-tone trim",
     "Advanced towing tech"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 81760,
    "features": [
     "Top-tier luxury appointments",
     "Standard Crew Cab 4x4",
     "Massaging front seats",
     "Premium 12-inch displays"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "6.8L Godzilla V8",
    "hp": 405,
    "transmission": "10-speed TorqShift automatic",
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
    "engine": "7.3L Godzilla V8",
    "hp": 430,
    "transmission": "10-speed TorqShift automatic",
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
    "engine": "6.7L Power Stroke Turbo Diesel V8",
    "hp": 475,
    "transmission": "10-speed TorqShift automatic",
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
    "engine": "6.7L High-Output Power Stroke Turbo Diesel V8",
    "hp": 500,
    "transmission": "10-speed TorqShift automatic",
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
   "lengthIn": 250,
   "widthIn": 80,
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
  "notes": "Super Duty (F-250/F-350/F-450) trucks exceed 8,500 lb GVWR and are EPA-exempt, so combined MPG is null (EPA truly does not rate them). Trims: XL, XLT, Lariat, King Ranch, Platinum (a Limited trim and F-450 configurations push MSRP well above the listed priceTo). MSRPs shown are F-250 4x2/4x4 starting points; Edmunds lists F-250 XL at about $50,190 vs the dealer-sourced $48,770 used here - base varies by cab/bed. High-output 6.7L diesel makes up to 1,200 lb-ft torque. Confidence medium due to base-price source variance and configuration breadth.",
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#EDEEF0"
    },
    {
     "name": "Agate Black Metallic",
     "hex": "#14161A"
    },
    {
     "name": "Race Red",
     "hex": "#B4141A"
    },
    {
     "name": "Avalanche Gray",
     "hex": "#C9C7BE"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#4C4F52"
    },
    {
     "name": "Argon Blue Metallic",
     "hex": "#6E8BA6"
    },
    {
     "name": "Marsh Gray",
     "hex": "#6A6D66"
    },
    {
     "name": "Iconic Silver",
     "hex": "#9DA1A4"
    },
    {
     "name": "Star White Metallic Tri-Coat",
     "hex": "#EFF1EF"
    },
    {
     "name": "Glacier Gray Metallic Tri-Coat",
     "hex": "#8E9498"
    },
    {
     "name": "Ruby Red Metallic Tinted Clearcoat",
     "hex": "#7C0A11"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#1B1B1D",
     "tone": "dark"
    },
    {
     "name": "Medium Dark Slate",
     "hex": "#3E4145",
     "tone": "dark"
    },
    {
     "name": "Light Slate",
     "hex": "#8A8D90",
     "tone": "light"
    },
    {
     "name": "Baja (King Ranch leather)",
     "hex": "#6B4A2E",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford Super Duty official page",
    "url": "https://www.ford.com/trucks/super-duty/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy note (HD trucks exempt)",
    "url": "https://www.fueleconomy.gov/feg/byfueltype.htm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 F-250 Super Duty pricing",
    "url": "https://www.edmunds.com/ford/f-250-super-duty/2026/",
    "site": "edmunds.com"
   }
  ]
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
  "priceFrom": 28145,
  "priceTo": 41495,
  "trims": [
   {
    "name": "XL",
    "msrp": 28145,
    "features": [
     "Standard full-hybrid powertrain",
     "Base work-focused trim",
     "8-inch touchscreen",
     "FlexBed cargo system"
    ]
   },
   {
    "name": "XLT",
    "msrp": 30645,
    "features": [
     "Painted aluminum wheels",
     "Power tailgate lock",
     "Added creature comforts",
     "Available EcoBoost turbo engine"
    ]
   },
   {
    "name": "Lobo",
    "msrp": 35930,
    "features": [
     "Street-performance styling",
     "EcoBoost AWD only",
     "Lowered sport suspension",
     "Unique wheels and appearance"
    ]
   },
   {
    "name": "Lariat",
    "msrp": 38090,
    "features": [
     "Leatherette/upgraded seating",
     "Premium interior trim",
     "Advanced tech and driver assist",
     "Hybrid or EcoBoost available"
    ]
   },
   {
    "name": "Tremor",
    "msrp": 41495,
    "features": [
     "Off-road Tremor suspension",
     "EcoBoost AWD only",
     "All-terrain capability",
     "Skid plates and trail tuning"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L Full-Hybrid I4",
    "hp": 191,
    "transmission": "eCVT (continuously variable)",
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
    "engine": "2.0L EcoBoost Turbo I4",
    "hp": 250,
    "transmission": "8-speed automatic",
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/7/7d/2022_Ford_Maverick_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Ford_Maverick_interior.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Five trims: XL, XLT, Lobo, Lariat, Tremor. Full-hybrid (191 hp, eCVT) is the standard powertrain on XL/XLT/Lariat; the 250 hp 2.0L EcoBoost is optional there and standard (AWD-only) on Lobo and Tremor. EPA combined: hybrid 38 FWD / 37 AWD / 36 Lariat AWD; EcoBoost 26 FWD / 25 AWD / 24 Lobo / 23 Tremor. AWD adds about $2,220. Base $28,145 reflects standard hybrid; a 2.0L EcoBoost XL is a bit lower (~$27,145). Destination excluded.",
  "sources": [
   {
    "label": "Ford Maverick official page",
    "url": "https://www.ford.com/trucks/maverick/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy 2026 Ford Maverick",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_Maverick.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Ford Maverick pricing",
    "url": "https://www.edmunds.com/ford/maverick/2026/hybrid/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 53,
    "source": {
     "label": "KBB consumer reviews — 2026 Ford Maverick",
     "url": "https://www.kbb.com/ford/maverick/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.5,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Ford Maverick",
     "url": "https://www.kbb.com/ford/maverick/2026/",
     "site": "kbb.com"
    }
   }
  },
  "colors": {
   "exterior": [
    {
     "name": "Shadow Black",
     "hex": "#121212"
    },
    {
     "name": "Space White Metallic",
     "hex": "#E7E9E6"
    },
    {
     "name": "Oxford White",
     "hex": "#EDEEF0"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#4C4F52"
    },
    {
     "name": "Velocity Blue",
     "hex": "#1E5CB3"
    },
    {
     "name": "Light Blue",
     "hex": "#A9C4DE"
    },
    {
     "name": "Ruby Red Metallic Tinted Clearcoat",
     "hex": "#7C0A11"
    },
    {
     "name": "Azure Gray Metallic Tri-Coat",
     "hex": "#565C62"
    },
    {
     "name": "Orange Fury Metallic Tri-Coat",
     "hex": "#CE4418"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1A1A1C",
     "tone": "dark"
    },
    {
     "name": "Medium Dark Slate",
     "hex": "#3E4145",
     "tone": "dark"
    },
    {
     "name": "Navy/Sand accents (Lariat)",
     "hex": "#B9AC90",
     "tone": "light"
    }
   ]
  }
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
  "priceFrom": 34635,
  "priceTo": 71070,
  "trims": [
   {
    "name": "EcoBoost Fastback",
    "msrp": 34635,
    "features": [
     "Turbo 2.3L I4 with 315 hp",
     "10-speed automatic (no manual)",
     "Sync 4 12.4-in cluster and 13.2-in center screen",
     "Standard RWD base sports car"
    ]
   },
   {
    "name": "EcoBoost Premium Fastback",
    "msrp": 38340,
    "features": [
     "Upgraded interior trim and materials",
     "B&O premium audio",
     "Ambient lighting and extra creature comforts",
     "More available options over base EcoBoost"
    ]
   },
   {
    "name": "GT Fastback",
    "msrp": 48555,
    "features": [
     "5.0L Coyote V8 with 480 hp (486 with active exhaust)",
     "Standard 6-speed manual with rev-matching",
     "Larger brakes and performance suspension",
     "Dual exhaust with active valve system"
    ]
   },
   {
    "name": "GT Premium Fastback",
    "msrp": 53075,
    "features": [
     "Premium interior and B&O audio over GT",
     "Digital gauge customization",
     "Available Performance Pack (Torsen diff, Brembos)",
     "Heated and cooled front seats available"
    ]
   },
   {
    "name": "Dark Horse",
    "msrp": 66075,
    "features": [
     "Uprated 5.0L V8 tuned to 500 hp",
     "Tremec 6-speed manual with rev-matching",
     "MagneRide adaptive damping",
     "Unique aero, Brembo brakes, dark-themed styling"
    ]
   },
   {
    "name": "Dark Horse Premium",
    "msrp": 71070,
    "features": [
     "Premium cabin appointments over Dark Horse",
     "Recaro seats available",
     "Enhanced trim and tech content",
     "Track-focused options bundled"
    ]
   },
   {
    "name": "GTD",
    "msrp": 325000,
    "features": [
     "Supercharged 5.2L V8 producing about 815 hp",
     "8-speed dual-clutch rear transaxle",
     "Active aero, pushrod rear suspension, carbon-ceramic brakes",
     "Limited-production street-legal track special"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L EcoBoost turbo I4",
    "hp": 315,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 26,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.0L Ti-VCT Coyote V8 (GT)",
    "hp": 480,
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
    "engine": "5.0L Coyote V8 (Dark Horse)",
    "hp": 500,
    "transmission": "6-speed manual or 10-speed automatic",
    "manualAvailable": true,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 17,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "5.2L supercharged V8 (GTD)",
    "hp": 815,
    "transmission": "8-speed dual-clutch (AM-S8)",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 12,
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
   "heightIn": 55,
   "wheelbaseIn": 107,
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
  "notes": "S650 Mustang. MSRPs from Edmunds include destination and are verified for EcoBoost through Dark Horse; Dark Horse Premium (71070) confirmed via dealer/aggregator pricing. EPA combined MPG verified on fueleconomy.gov (EcoBoost 26, GT auto 19/manual 18, Dark Horse 17, GTD 12). GT V8 rises to 486 hp with active exhaust. GTD is a limited-production halo car; ~325000 MSRP is an approximate market figure (Ford has not published a standard MSRP), so priceTo is set to the regular-production Dark Horse Premium (71070) and GTD is listed separately.",
  "sources": [
   {
    "label": "Ford.com 2026 Mustang",
    "url": "https://www.ford.com/cars/mustang/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy 2026 Mustang",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Ford&baseModel=Mustang&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Mustang trims and pricing",
    "url": "https://www.edmunds.com/ford/mustang/2026/trims/",
    "site": "edmunds.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#F2F3F1"
    },
    {
     "name": "Race Red",
     "hex": "#C8102E"
    },
    {
     "name": "Shadow Black",
     "hex": "#0A0A0A"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#52565A"
    },
    {
     "name": "Avalanche Gray",
     "hex": "#8C8F91"
    },
    {
     "name": "Vapor Blue Metallic",
     "hex": "#6E7F8D"
    },
    {
     "name": "Atlas Blue Metallic",
     "hex": "#2E4B6B"
    },
    {
     "name": "Molten Magenta Metallic",
     "hex": "#7A2E4A"
    },
    {
     "name": "Orange Fury Metallic Tri-coat",
     "hex": "#E8611A"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#1A1A1A",
     "tone": "dark"
    },
    {
     "name": "Space Gray",
     "hex": "#4A4D50",
     "tone": "dark"
    },
    {
     "name": "Carmine Red",
     "hex": "#7C1F2B",
     "tone": "dark"
    }
   ]
  }
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
  "priceFrom": 37795,
  "priceTo": 55440,
  "trims": [
   {
    "name": "Select",
    "msrp": 37795,
    "features": [
     "Standard Range battery, single-motor RWD",
     "10.2-in digital cluster and 15.5-in center screen",
     "Wireless Apple CarPlay and Android Auto",
     "Ford Co-Pilot360 driver assistance"
    ]
   },
   {
    "name": "Premium",
    "msrp": 40595,
    "features": [
     "Heated and ventilated front seats",
     "Bang & Olufsen sound system",
     "Panoramic fixed-glass roof",
     "Extended Range battery and eAWD available"
    ]
   },
   {
    "name": "GT",
    "msrp": 53395,
    "features": [
     "Dual-motor eAWD tuned to 480 hp",
     "Brembo front brakes and performance tune",
     "Ford Performance front seats",
     "GT-specific styling and suspension"
    ]
   },
   {
    "name": "Rally",
    "msrp": 55440,
    "features": [
     "MagneRide adaptive damping raised for dirt",
     "Michelin CrossClimate2 tires and skid protection",
     "RallySport and Slippery drive modes",
     "Unique rally-themed exterior graphics"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor RWD, Standard Range (~72 kWh usable)",
    "hp": 266,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 107,
    "evRangeMi": 260
   },
   {
    "type": "ev",
    "engine": "Single-motor RWD, Extended Range (~91 kWh usable)",
    "hp": 290,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "RWD"
    ],
    "mpgCombined": 110,
    "evRangeMi": 320
   },
   {
    "type": "ev",
    "engine": "Dual-motor eAWD, Standard Range",
    "hp": 266,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 100,
    "evRangeMi": 240
   },
   {
    "type": "ev",
    "engine": "Dual-motor eAWD, Extended Range",
    "hp": 325,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 104,
    "evRangeMi": 300
   },
   {
    "type": "ev",
    "engine": "GT dual-motor eAWD, Extended Range",
    "hp": 480,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 90,
    "evRangeMi": 280
   },
   {
    "type": "ev",
    "engine": "Rally dual-motor eAWD, Extended Range",
    "hp": 480,
    "transmission": "single-speed",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 84,
    "evRangeMi": 255
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 185.6,
   "widthIn": 74.1,
   "heightIn": 64,
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
  "confidence": "medium",
  "notes": "Electric crossover. MPGe and EPA range verified on fueleconomy.gov: RWD Standard 107 MPGe/260 mi, RWD Extended 110 MPGe/320 mi, AWD Standard 100 MPGe/240 mi, AWD Extended 104 MPGe/300 mi, GT 90 MPGe/280 mi, Rally 84 MPGe/255 mi. Prices from Edmunds (Select from 37795, Premium from 40595, GT from 53395); Rally top price ~55440 per Ford/aggregator. Confidence is medium because exact per-configuration horsepower is not published uniformly by Ford; 266 hp (RWD/AWD Standard), ~325 hp (AWD Extended), and 480 hp (GT/Rally) are well supported, while the RWD Extended figure (~290 hp) is a best estimate and battery usable-kWh values are approximate.",
  "colors": {
   "exterior": [
    {
     "name": "Shadow Black",
     "hex": "#0A0A0A"
    },
    {
     "name": "Star White Metallic Tri-Coat",
     "hex": "#EDEDE8"
    },
    {
     "name": "Adriatic Blue Metallic",
     "hex": "#2E4B6B"
    },
    {
     "name": "Velocity Blue Metallic",
     "hex": "#1E5AA8"
    },
    {
     "name": "Eruption Green Metallic",
     "hex": "#2F5D3A"
    },
    {
     "name": "Race Red",
     "hex": "#C8102E"
    },
    {
     "name": "Glacier Gray Metallic Tri-Coat",
     "hex": "#9BA0A3"
    },
    {
     "name": "Desert Sand",
     "hex": "#C9B79C"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#1A1A1A",
     "tone": "dark"
    },
    {
     "name": "Light Space Gray",
     "hex": "#C9C7C0",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford.com 2026 Mustang Mach-E",
    "url": "https://www.ford.com/suvs/mach-e/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy 2026 Mach-E",
    "url": "https://fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Ford&baseModel=Mustang+Mach-E&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Mach-E pricing",
    "url": "https://www.edmunds.com/ford/mustang-mach-e/2026/",
    "site": "edmunds.com"
   }
  ]
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
    "msrp": 33350,
    "features": [
     "Base trim",
     "2.3L EcoBoost standard",
     "10-speed automatic",
     "Available 4WD (+$3,500)"
    ]
   },
   {
    "name": "XLT",
    "msrp": 35875,
    "features": [
     "Available 2.7L V6",
     "Alloy wheels",
     "Upgraded interior trim",
     "More tech/convenience features"
    ]
   },
   {
    "name": "Lariat",
    "msrp": 43755,
    "features": [
     "Leather-trimmed seats",
     "2.7L V6 available",
     "12-inch touchscreen",
     "Premium audio and driver assist"
    ]
   },
   {
    "name": "Raptor",
    "msrp": 57070,
    "features": [
     "3.0L twin-turbo V6 405 hp",
     "FOX 2.5-inch Live Valve shocks",
     "Front and rear locking diffs",
     "33-inch all-terrain tires"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.3L EcoBoost I4",
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
    "engine": "2.7L EcoBoost V6",
    "hp": 315,
    "transmission": "10-speed automatic",
    "manualAvailable": false,
    "drive": [
     "4WD"
    ],
    "mpgCombined": 20,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "3.0L EcoBoost Twin-Turbo V6 (Raptor)",
    "hp": 405,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Ford_Ranger_LARIAT_4WD_SuperCrew_(2024)_(53620395647).jpg",
   "credit": "Charles from Port Chester, New York"
  },
  "confidence": "high",
  "notes": "Four trims: XL, XLT, Lariat, Raptor. XL/XLT/Lariat are RWD standard with 4WD +$3,500; Raptor is 4WD-only SuperCrew. EPA combined: 2.3L 23/21 (2WD/4WD), 2.7L V6 20 (4WD), Raptor 3.0L 17. The 2.7L V6 is optional on XLT/Lariat. Destination excluded from MSRP.",
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#EDEEF0"
    },
    {
     "name": "Shadow Black",
     "hex": "#121212"
    },
    {
     "name": "Carbonized Gray Metallic",
     "hex": "#4C4F52"
    },
    {
     "name": "Marsh Gray",
     "hex": "#6A6D66"
    },
    {
     "name": "Desert Sand",
     "hex": "#A99B7E"
    },
    {
     "name": "Velocity Blue Metallic",
     "hex": "#1E5CB3"
    },
    {
     "name": "Shelter Green Metallic",
     "hex": "#3B4A3B"
    },
    {
     "name": "Avalanche",
     "hex": "#CFCEC6"
    },
    {
     "name": "Ruby Red Metallic Tinted Clearcoat",
     "hex": "#7C0A11"
    }
   ],
   "interior": [
    {
     "name": "Ebony",
     "hex": "#1A1A1C",
     "tone": "dark"
    },
    {
     "name": "Medium Dark Slate",
     "hex": "#3E4145",
     "tone": "dark"
    },
    {
     "name": "Cyber Orange accents (Raptor)",
     "hex": "#D1451B",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford Ranger official page",
    "url": "https://www.ford.com/trucks/ranger/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy 2026 Ford Ranger",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ford_Ranger.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Ford Ranger pricing",
    "url": "https://www.edmunds.com/ford/ranger/",
    "site": "edmunds.com"
   }
  ]
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
  "priceTo": 62900,
  "trims": [
   {
    "name": "Transit 150 Low Roof (Cargo)",
    "msrp": 48400,
    "features": [
     "Entry cargo configuration",
     "82.4-in low roof, 130-in wheelbase",
     "3.5L PFDi V6 with 10-speed automatic",
     "Standard 12-in touchscreen and Co-Pilot360"
    ]
   },
   {
    "name": "Transit 250 Medium Roof (Cargo)",
    "msrp": 50800,
    "features": [
     "Higher 250 payload/GVWR rating",
     "99-in medium roof for more cargo volume",
     "Available longer wheelbase and length",
     "Intelligent AWD available"
    ]
   },
   {
    "name": "Transit 350 High Roof (Cargo)",
    "msrp": 52800,
    "features": [
     "Top 350 payload/GVWR rating",
     "108-in high roof for stand-up cargo area",
     "Available 3.5L EcoBoost twin-turbo V6",
     "Dual-rear-wheel and extended-length options"
    ]
   },
   {
    "name": "Transit 350 Passenger Van (XL/XLT)",
    "msrp": 59180,
    "features": [
     "Seating for up to 15 passengers",
     "Available three roof heights",
     "XLT adds upgraded trim over XL",
     "Single or dual rear wheels"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L PFDi V6 (port/direct injection)",
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
    "engine": "3.5L EcoBoost twin-turbo V6",
    "hp": 300,
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
   "wheelbaseIn": 130,
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
  "notes": "Full-size commercial van (gas). Configurations are roof heights (Low ~82 in, Medium ~99 in, High ~108 in), wheelbases, and 150/250/350 GVWR grades in cargo and passenger bodies. Standard 3.5L PFDi V6 (275 hp / 260 lb-ft); optional 3.5L EcoBoost twin-turbo V6 (300 hp / 400 lb-ft on ford.com; some sources cite 310 hp). Both use a 10-speed automatic; RWD standard with available Intelligent AWD. EPA combined MPG is null: the Transit exceeds 8,500 lb GVWR and is exempt from EPA fuel-economy labeling, so no combined figure is published on fueleconomy.gov. Pricing is approximate from Ford/Edmunds (cargo from ~48400 to ~62900; passenger from ~59180) and can vary widely by configuration, hence medium confidence.",
  "colors": {
   "exterior": [
    {
     "name": "Oxford White",
     "hex": "#F2F3F1"
    },
    {
     "name": "Race Red",
     "hex": "#C8102E"
    },
    {
     "name": "Agate Black",
     "hex": "#0A0A0A"
    },
    {
     "name": "Ingot Silver",
     "hex": "#9A9CA0"
    },
    {
     "name": "Blue Metallic",
     "hex": "#2E4B6B"
    },
    {
     "name": "Carbonized Gray",
     "hex": "#52565A"
    }
   ],
   "interior": [
    {
     "name": "Dark Palazzo Gray Vinyl",
     "hex": "#3A3B3D",
     "tone": "dark"
    },
    {
     "name": "Dark Palazzo Gray Cloth",
     "hex": "#404244",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Ford.com 2026 Transit van",
    "url": "https://www.ford.com/trucks/transit-passenger-van-wagon/",
    "site": "ford.com"
   },
   {
    "label": "EPA fuel economy Ford search (Transit exempt)",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Ford&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds 2026 Transit cargo van pricing",
    "url": "https://www.edmunds.com/ford/transit-cargo-van/2026/",
    "site": "edmunds.com"
   }
  ]
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
   "passengerVolumeCuFt": 103,
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
   "widthIn": 76,
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
   "passengerVolumeCuFt": 103,
   "cargoCuFt": 24,
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
   "groundClearanceIn": 7
  },
  "interior": {
   "passengerVolumeCuFt": 104,
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
   "cargoMaxCuFt": 84,
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
   "cargoCuFt": 23,
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
   "heightIn": 71,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2023_GMC_Canyon.jpg",
   "credit": "42-BRT"
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/2/21/2023_GMC_Sierra_Denali_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_GMC_Sierra_Denali_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/b/b2/2025_GMC_Sierra_1500_Denali_Ultimate_in_Thunderstorm_Gray.jpg",
     "kind": "exterior",
     "credit": "ShortlineBuickGMC",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_GMC_Sierra_1500_Denali_Ultimate_in_Thunderstorm_Gray.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Trim MSRPs from published 2026 pricing minus $2,195 destination; dims for crew cab short bed.",
  "sources": [
   {
    "label": "2026 pricing & trims",
    "url": "https://www.gmc.com/trucks/sierra/1500",
    "site": "gmc.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_GMC_Sierra.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/gmc/sierra-1500/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2025 (carries over)",
    "source": {
     "label": "NHTSA SafetyRatings API - 2025 GMC Sierra 1500 crew cab 4WD (VehicleId 20529), OverallRating 5; 2026 crew cab not yet rated (same generation)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20529",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.6,
    "scale": 5,
    "count": 26,
    "source": {
     "label": "Edmunds consumer reviews - 2026 GMC Sierra 1500 (3.6/5, 26 reviews)",
     "url": "https://www.edmunds.com/gmc/sierra-1500/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.7,
    "scale": 10,
    "source": {
     "label": "Edmunds expert Rating - 2026 GMC Sierra 1500 (6.7/10)",
     "url": "https://www.edmunds.com/gmc/sierra-1500/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "lengthIn": 250,
   "widthIn": 81.9,
   "heightIn": 79.8,
   "wheelbaseIn": 158.9,
   "curbWeightLb": 6950,
   "groundClearanceIn": 10
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/GMC_D2UX_Terrain.jpg",
     "kind": "exterior",
     "credit": "Bull-Doser",
     "license": "Public Domain",
     "commons": "https://commons.wikimedia.org/wiki/File:GMC_D2UX_Terrain.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/Moscow%2C_GMC_Terrain_%28D2UX%29_blue%2C_Sept_2025_01.jpg",
     "kind": "exterior",
     "credit": "Retired electrician",
     "license": "CC0",
     "commons": "https://commons.wikimedia.org/wiki/File:Moscow,_GMC_Terrain_(D2UX)_blue,_Sept_2025_01.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "All-new generation launched 2025; shares platform with Chevy Equinox. AT4 price approximate. Prices exclude ~$1,495 destination.",
  "ratings": {
   "owner": {
    "score": 3.9,
    "scale": 5,
    "count": 10,
    "source": {
     "label": "Edmunds consumer reviews - 2026 GMC Terrain (3.9/5, 10 reviews)",
     "url": "https://www.edmunds.com/gmc/terrain/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "lengthIn": 210,
   "widthIn": 81,
   "heightIn": 76.5,
   "wheelbaseIn": 120.9,
   "curbWeightLb": 5700,
   "groundClearanceIn": 8
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
    "msrp": 28395,
    "features": [
     "192-hp 1.5L turbo I4",
     "Honda Sensing suite",
     "7-inch touchscreen with wireless Android Auto",
     "dual-zone climate control",
     "17-inch alloy wheels"
    ]
   },
   {
    "name": "SE",
    "msrp": 30695,
    "features": [
     "Blind-spot monitoring",
     "heated front seats",
     "remote engine start",
     "wireless Apple CarPlay/Android Auto",
     "LED fog lights"
    ]
   },
   {
    "name": "Sport Hybrid",
    "msrp": 33795,
    "features": [
     "204-hp two-motor hybrid powertrain",
     "12.3-inch touchscreen with Google built-in",
     "10.2-inch digital cluster",
     "19-inch alloy wheels",
     "paddle shifters & sport pedals"
    ]
   },
   {
    "name": "EX-L Hybrid",
    "msrp": 35095,
    "features": [
     "Leather-trimmed seats",
     "power moonroof",
     "8-way power passenger seat",
     "wireless phone charger",
     "48 mpg combined EPA"
    ]
   },
   {
    "name": "Sport-L Hybrid",
    "msrp": 35495,
    "features": [
     "Sport styling with leather",
     "black exterior accents",
     "19-inch black alloy wheels",
     "leather sport seats"
    ]
   },
   {
    "name": "Touring Hybrid",
    "msrp": 39495,
    "features": [
     "Bose 12-speaker premium audio",
     "head-up display",
     "ventilated front seats",
     "front & rear parking sensors",
     "Google built-in navigation"
    ]
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/8/8f/2023_Honda_Accord_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Honda_Accord_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/e/ee/2023_Honda_Accord_LX%2C_rear_left%2C_07-13-2023.jpg",
     "kind": "exterior",
     "credit": "MercurySable99",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Honda_Accord_LX,_rear_left,_07-13-2023.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Pricing and EPA verified for 2026: LX/SE use the 192-hp 1.5L turbo (32/31 mpg combined); hybrid trims make 204 hp (EX-L/Touring 48 mpg combined, Sport/Sport-L/Touring 44). Gray/beige leather is offered on EX-L and Touring, so both interior tone booleans are correct.",
  "sources": [
   {
    "label": "2026 Accord pricing & EPA ratings",
    "url": "https://hondanews.com/en-US/releases/release-c26685400737027f7d053958c309dc82-2026-honda-accord-pricing-epa-ratings",
    "site": "hondanews.com"
   },
   {
    "label": "2026 Accord Sedan features & specs",
    "url": "https://automobiles.honda.com/accord-sedan/specs-features-trim-comparison",
    "site": "automobiles.honda.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_Accord.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing, specs & expert review",
    "url": "https://www.edmunds.com/honda/accord/2026/",
    "site": "edmunds.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Meteorite Gray Metallic",
     "hex": "#4c4e51"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6f7276"
    },
    {
     "name": "Still Night Pearl",
     "hex": "#1f2b3c"
    },
    {
     "name": "Radiant Red Metallic II",
     "hex": "#9e1b22"
    }
   ],
   "interior": [
    {
     "name": "Black cloth/leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#b7b7bb",
     "tone": "light"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Honda Accord Sedan FWD",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/22063",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4.4,
    "scale": 5,
    "count": 44,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Honda Accord",
     "url": "https://www.edmunds.com/honda/accord/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 8.3,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Honda Accord",
     "url": "https://www.edmunds.com/honda/accord/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 24695,
    "features": [
     "150-hp 2.0L I4",
     "Honda Sensing suite",
     "7-inch touchscreen with wireless Android Auto",
     "adaptive cruise control",
     "16-inch wheels"
    ]
   },
   {
    "name": "Sport",
    "msrp": 26695,
    "features": [
     "18-inch gloss-black alloys",
     "wireless Apple CarPlay/Android Auto",
     "remote start",
     "leather-wrapped wheel & shifter",
     "sport pedals"
    ]
   },
   {
    "name": "Sport Hybrid",
    "msrp": 29395,
    "features": [
     "200-hp two-motor hybrid",
     "49 mpg combined EPA",
     "paddle shifters",
     "dual-zone climate",
     "9-inch touchscreen"
    ]
   },
   {
    "name": "Si (sedan)",
    "msrp": 30995,
    "features": [
     "200-hp 1.5L turbo with 6-speed manual",
     "helical limited-slip differential",
     "rev-match control",
     "Bose audio",
     "sport bolstered seats"
    ]
   },
   {
    "name": "Sport Touring Hybrid",
    "msrp": 32395,
    "features": [
     "Bose 12-speaker audio",
     "leather-trimmed heated seats",
     "9-inch touchscreen with Google built-in",
     "power moonroof",
     "wireless charger"
    ]
   },
   {
    "name": "Type R (hatchback)",
    "msrp": 46895,
    "features": [
     "315-hp 2.0L turbo",
     "6-speed manual with rev-match",
     "Brembo front brakes",
     "adaptive dampers",
     "+R suede sport seats",
     "19-inch Michelin-shod wheels"
    ]
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
   "lengthIn": 184,
   "widthIn": 70.9,
   "heightIn": 55.7,
   "wheelbaseIn": 107.7,
   "curbWeightLb": 2932,
   "groundClearanceIn": 4.9
  },
  "interior": {
   "passengerVolumeCuFt": 99,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/9/9c/Honda_CIVIC_e%EF%BC%9AHEV_EX_%286AA-FL4%29_interior.jpg",
     "kind": "interior",
     "credit": "Tokumeigakarinoaoshima",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Honda_CIVIC_e%EF%BC%9AHEV_EX_(6AA-FL4)_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/61/2022_Honda_Civic_Sedan_EX_in_Platinum_White_Pearl%2C_front_left.jpg",
     "kind": "exterior",
     "credit": "Mr.choppers",
     "license": "CC BY-SA 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Honda_Civic_Sedan_EX_in_Platinum_White_Pearl,_front_left.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Sold as sedan and hatchback; hatchback Sport/Hybrid/Type R run roughly $1,200 more than equivalent sedans and add ~24.5 cu ft cargo. Si is sedan-only, Type R hatchback-only. 2026 Type R base MSRP confirmed at $46,895 (up $1,000 y/y, no changes). Hybrid trims and Type R use a tire repair kit; LX/Sport gas trims include a compact spare.",
  "sources": [
   {
    "label": "2026 Civic Type R pricing",
    "url": "https://carbuzz.com/2026-honda-civic-type-r-pricing/",
    "site": "carbuzz.com"
   },
   {
    "label": "2026 Civic Sedan pricing & EPA ratings",
    "url": "https://hondanews.com/en-US/honda-automobiles/releases/release-cf005034e20eb27505fd8e6bbb05a2e4-2026-honda-civic-sedan-pricing-and-epa-ratings-3",
    "site": "hondanews.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_Civic.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing, specs & expert review",
    "url": "https://www.edmunds.com/honda/civic/2026/",
    "site": "edmunds.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Meteorite Gray Metallic",
     "hex": "#4c4e51"
    },
    {
     "name": "Sonic Gray Pearl",
     "hex": "#5f6265"
    },
    {
     "name": "Rallye Red",
     "hex": "#c41230"
    },
    {
     "name": "Boost Blue Pearl",
     "hex": "#1f6fd6"
    },
    {
     "name": "Championship White (Type R)",
     "hex": "#f6f6f2"
    }
   ],
   "interior": [
    {
     "name": "Black cloth/leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray",
     "hex": "#b7b7bb",
     "tone": "light"
    },
    {
     "name": "Red +R suede/leather (Type R)",
     "hex": "#7a1418",
     "tone": "dark"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Honda Civic Sedan FWD",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20894",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4.4,
    "scale": 5,
    "count": 63,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Honda Civic",
     "url": "https://www.edmunds.com/honda/civic/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.9,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Honda Civic",
     "url": "https://www.edmunds.com/honda/civic/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 30920,
    "features": [
     "190-hp 1.5L turbo I4",
     "Honda Sensing suite",
     "7-inch touchscreen",
     "adaptive cruise control",
     "17-inch alloy wheels"
    ]
   },
   {
    "name": "EX",
    "msrp": 33150,
    "features": [
     "Available Real Time AWD",
     "power moonroof",
     "heated front seats",
     "9-inch touchscreen",
     "blind-spot monitoring & remote start"
    ]
   },
   {
    "name": "EX-L",
    "msrp": 35400,
    "features": [
     "Leather-trimmed seats",
     "hands-free power tailgate",
     "8-way power passenger seat",
     "leather-wrapped steering wheel"
    ]
   },
   {
    "name": "Sport Hybrid",
    "msrp": 35630,
    "features": [
     "204-hp two-motor hybrid",
     "18-inch gloss-black alloys",
     "sport styling with dual exhaust",
     "paddle shifters"
    ]
   },
   {
    "name": "Sport-L Hybrid",
    "msrp": 38725,
    "features": [
     "Leather-trimmed seats",
     "heated steering wheel",
     "wireless charger",
     "12-speaker premium audio",
     "hands-free power tailgate"
    ]
   },
   {
    "name": "TrailSport Hybrid",
    "msrp": 38800,
    "features": [
     "Standard Real Time AWD",
     "all-terrain tires",
     "TrailSport styling & orange stitching",
     "hill descent control",
     "rugged 18-inch wheels"
    ]
   },
   {
    "name": "Sport Touring Hybrid",
    "msrp": 42550,
    "features": [
     "Bose 12-speaker premium audio",
     "9-inch touchscreen with Google built-in",
     "19-inch alloy wheels",
     "wireless charger",
     "front & rear parking sensors"
    ]
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/40/HONDA_CR-V_SIXTH_GENERATION_CHINA_VERSION_INTERIOR_%282%29.jpg",
     "kind": "interior",
     "credit": "Dinkun Chen",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:HONDA_CR-V_SIXTH_GENERATION_CHINA_VERSION_INTERIOR_(2).jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/30/2023_Honda_CR-V_EX-L_4WD_in_Radiant_Red_Metallic%2C_rear_right.jpg",
     "kind": "exterior",
     "credit": "Mr.choppers",
     "license": "CC BY-SA 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Honda_CR-V_EX-L_4WD_in_Radiant_Red_Metallic,_rear_right.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "2026 pricing verified (MSRP excludes $1,395 destination). TrailSport Hybrid comes standard with AWD; hybrid AWD rated 37 mpg combined, gas AWD 29. Tow rating 1,500 lb gas / 1,000 lb hybrid.",
  "sources": [
   {
    "label": "2026 CR-V pricing & EPA ratings",
    "url": "https://hondanews.com/en-US/honda-automobiles/releases/release-0d29cf91ab5515b985a1c286910fb0f9-2026-honda-cr-v-pricing-and-epa-ratings",
    "site": "hondanews.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_CR-V.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 MSRP & trims",
    "url": "https://www.edmunds.com/honda/cr-v/2026/msrp/",
    "site": "edmunds.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Meteorite Gray Metallic",
     "hex": "#4c4e51"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6f7276"
    },
    {
     "name": "Canyon River Blue Metallic",
     "hex": "#3a536b"
    },
    {
     "name": "Radiant Red Metallic II",
     "hex": "#9e1b22"
    },
    {
     "name": "Ash Green Metallic (TrailSport)",
     "hex": "#6b7263"
    }
   ],
   "interior": [
    {
     "name": "Black cloth/leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#b7b7bb",
     "tone": "light"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Honda CR-V AWD",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20886",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 59,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Honda CR-V",
     "url": "https://www.edmunds.com/honda/cr-v/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.5,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Honda CR-V",
     "url": "https://www.edmunds.com/honda/cr-v/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceTo": 30350,
  "trims": [
   {
    "name": "LX",
    "msrp": 26500,
    "features": [
     "158-hp 2.0L I4",
     "Honda Sensing suite",
     "9-inch touchscreen with wireless CarPlay/Android Auto",
     "wireless phone charger",
     "17-inch wheels"
    ]
   },
   {
    "name": "Sport",
    "msrp": 28300,
    "features": [
     "18-inch gloss-black alloys",
     "gloss-black grille & matte-black bumper",
     "sport cloth seats",
     "leather-wrapped wheel",
     "paddle shifters"
    ]
   },
   {
    "name": "EX-L",
    "msrp": 30350,
    "features": [
     "Leather-trimmed seats",
     "power moonroof",
     "8-way power driver seat",
     "heated front seats",
     "ambient footwell lighting",
     "8-speaker audio"
    ]
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
   "groundClearanceIn": 7
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/65/2023_Honda_HR-V_Sport_%28United_States%29_interior.png",
     "kind": "interior",
     "credit": "Gold Pony",
     "license": "CC BY 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Honda_HR-V_Sport_(United_States)_interior.png"
    }
   ]
  },
  "confidence": "high",
  "notes": "Carryover for 2026, restructured to three trims: LX, Sport, EX-L. Real Time AWD is a ~$1,500 option on every trim (EX-L AWD tops out at $31,850). priceTo reflects the top EX-L trim before the AWD option per spec. FWD rated 28 mpg combined, AWD 27.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Meteorite Gray Metallic",
     "hex": "#4c4e51"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6f7276"
    },
    {
     "name": "Nordic Forest Pearl",
     "hex": "#3c4a3e"
    },
    {
     "name": "Milano Red",
     "hex": "#b3121f"
    }
   ],
   "interior": [
    {
     "name": "Black cloth/leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray cloth",
     "hex": "#b7b7bb",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 HR-V pricing & EPA ratings",
    "url": "https://hondanews.com/en-US/honda-automobiles/releases/release-6f8b202ddb1c7f26ecd92774bb0311f8-2026-honda-hr-v-pricing-and-epa-ratings-2",
    "site": "hondanews.com"
   },
   {
    "label": "2026 HR-V features & specs",
    "url": "https://automobiles.honda.com/2026/hr-v/specs-features-trim-comparison",
    "site": "automobiles.honda.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_HR-V.shtml",
    "site": "fueleconomy.gov"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Honda HR-V SUV AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20890",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 46,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Honda HR-V",
     "url": "https://www.edmunds.com/honda/hr-v/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.6,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Honda HR-V",
     "url": "https://www.edmunds.com/honda/hr-v/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 42795,
    "features": [
     "Leather-trimmed seats",
     "Magic Slide 2nd-row seats",
     "power sliding doors & tailgate",
     "heated front seats",
     "wireless phone charger"
    ]
   },
   {
    "name": "Sport-L",
    "msrp": 43895,
    "features": [
     "Sport black exterior trim",
     "gloss-black accents",
     "unique alloy wheels",
     "black leather interior"
    ]
   },
   {
    "name": "Touring",
    "msrp": 47495,
    "features": [
     "Rear entertainment system (12.8-inch screen)",
     "CabinWatch & CabinTalk",
     "onboard navigation",
     "Wi-Fi hotspot",
     "front & rear parking sensors"
    ]
   },
   {
    "name": "Elite",
    "msrp": 51695,
    "features": [
     "Heated & ventilated front seats",
     "heated steering wheel",
     "hands-free power tailgate",
     "11-speaker premium audio",
     "acoustic front-side glass"
    ]
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/32/2023_Honda_Odyssey_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Honda_Odyssey_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/d/d5/2025_Honda_Odyssey_front_view.jpg",
     "kind": "exterior",
     "credit": "Deathpallie325",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Honda_Odyssey_front_view.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Carryover after the 2025 refresh; lineup starts at the well-equipped EX-L (no LX/EX). 280-hp 3.5L V6, 10-speed automatic, FWD only. 8-passenger seating; max cargo behind first row with 2nd row removed.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Modern Steel Metallic",
     "hex": "#565a5e"
    },
    {
     "name": "Sonic Gray Pearl",
     "hex": "#5f6265"
    },
    {
     "name": "Obsidian Blue Pearl",
     "hex": "#1e2a3d"
    },
    {
     "name": "Radiant Red Metallic II",
     "hex": "#9e1b22"
    }
   ],
   "interior": [
    {
     "name": "Black leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#b7b7bb",
     "tone": "light"
    },
    {
     "name": "Mocha leather",
     "hex": "#5a4634",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Odyssey features & specs",
    "url": "https://automobiles.honda.com/odyssey/specs-features-trim-comparison",
    "site": "automobiles.honda.com"
   },
   {
    "label": "2026 Odyssey trims & pricing",
    "url": "https://www.edmunds.com/honda/odyssey/2026/trims/",
    "site": "edmunds.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_Odyssey.shtml",
    "site": "fueleconomy.gov"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API - 2026 Honda Odyssey (VehicleId 20893), OverallRating 5",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20893",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.9,
    "scale": 5,
    "count": 50,
    "source": {
     "label": "Edmunds consumer reviews - 2026 Honda Odyssey (3.9/5, 50 reviews)",
     "url": "https://www.edmunds.com/honda/odyssey/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.3,
    "scale": 10,
    "source": {
     "label": "Edmunds expert Rating - 2026 Honda Odyssey (7.3/10)",
     "url": "https://www.edmunds.com/honda/odyssey/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 44950,
    "features": [
     "Standard AWD 285-hp 3.5L V6",
     "leather-trimmed seats",
     "12.3-inch touchscreen with Google built-in",
     "heated front seats",
     "hands-free power tailgate",
     "wireless charger"
    ]
   },
   {
    "name": "RTL Towing",
    "msrp": 45650,
    "features": [
     "Factory tow package (5,000 lb)",
     "transmission cooler",
     "trailer wiring harness"
    ]
   },
   {
    "name": "RTL Blackout",
    "msrp": 46150,
    "features": [
     "Blackout exterior trim",
     "black alloy wheels",
     "gloss-black badging"
    ]
   },
   {
    "name": "TrailSport",
    "msrp": 48650,
    "features": [
     "Off-road-tuned suspension",
     "31-inch all-terrain tires",
     "steel skid plates & recovery points",
     "TrailWatch camera system",
     "orange contrast stitching"
    ]
   },
   {
    "name": "TrailSport Blackout",
    "msrp": 49850,
    "features": [
     "Blackout exterior on TrailSport",
     "black off-road wheels",
     "dark badging"
    ]
   },
   {
    "name": "TrailSport Elite",
    "msrp": 52650,
    "features": [
     "Bose 12-speaker premium audio",
     "panoramic moonroof",
     "ventilated front seats",
     "head-up display",
     "heated 2nd-row seats"
    ]
   },
   {
    "name": "TrailSport Elite Blackout",
    "msrp": 53850,
    "features": [
     "Blackout appearance on Elite",
     "black alloy wheels",
     "gloss-black exterior accents"
    ]
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
   "passengerVolumeCuFt": 115,
   "cargoCuFt": 44,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/1/19/2026_Honda_Passport_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Honda_Passport_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/2026_Honda_Passport_RTL%2C_front_right%2C_06-07-2025.jpg",
     "kind": "exterior",
     "credit": "MercurySable99",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Honda_Passport_RTL,_front_right,_06-07-2025.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "All-new fourth generation for 2026 with standard AWD and a rugged TrailSport focus (285-hp V6, 262 lb-ft, 10-speed auto). 2026 lineup verified with seven variants including RTL Towing and TrailSport Blackout. RTL rated 21 mpg combined, TrailSport 20. TrailSport carries a full-size spare on a matching wheel.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Lunar Silver Metallic",
     "hex": "#b8bbbe"
    },
    {
     "name": "Sunset Orange Pearl (TrailSport)",
     "hex": "#c85a1c"
    },
    {
     "name": "Ash Green Metallic (TrailSport)",
     "hex": "#6b7263"
    },
    {
     "name": "Diffused Sky Blue Pearl",
     "hex": "#4a6a86"
    }
   ],
   "interior": [
    {
     "name": "Black leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#b7b7bb",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Passport build & price (trims)",
    "url": "https://automobiles.honda.com/tools/build-and-price-trimwalk?modelseries=passport&modelyear=2026",
    "site": "automobiles.honda.com"
   },
   {
    "label": "2026 Passport pricing (announcement)",
    "url": "https://tflcar.com/2025/02/2026-honda-passport-pricing-announcement-news/",
    "site": "tflcar.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_Passport.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 TrailSport pricing",
    "url": "https://www.kbb.com/honda/passport/2026/trailsport/",
    "site": "kbb.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick+",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA Safety Ratings API - 2026 Honda Passport AWD (OverallRating 5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20884",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4.5,
    "scale": 5,
    "count": 49,
    "source": {
     "label": "Edmunds 2026 Honda Passport consumer reviews",
     "url": "https://www.edmunds.com/honda/passport/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.5,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating - 2026 Honda Passport",
     "url": "https://www.edmunds.com/honda/passport/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceFrom": 42395,
  "priceTo": 55195,
  "trims": [
   {
    "name": "Sport",
    "msrp": 42395,
    "features": [
     "285-hp 3.5L V6 with available AWD",
     "12.3-inch touchscreen with Google built-in (2026 standard)",
     "tri-zone climate",
     "18-inch wheels",
     "5-passenger 2nd-row bench"
    ]
   },
   {
    "name": "EX-L",
    "msrp": 44695,
    "features": [
     "Leather-trimmed seats",
     "power moonroof",
     "hands-free power tailgate",
     "heated front seats",
     "removable 2nd-row middle seat (8-passenger)",
     "wireless charger"
    ]
   },
   {
    "name": "TrailSport",
    "msrp": 50595,
    "features": [
     "Standard i-VTM4 AWD",
     "all-terrain tires & 1-inch lift",
     "skid plates",
     "TrailWatch camera",
     "full-size spare",
     "orange contrast stitching"
    ]
   },
   {
    "name": "Touring",
    "msrp": 51295,
    "features": [
     "Standard AWD",
     "2nd-row captain's chairs",
     "115V power outlet",
     "12-speaker audio",
     "roof rails",
     "wireless charger"
    ]
   },
   {
    "name": "Touring Blackout",
    "msrp": 52495,
    "features": [
     "Blackout exterior trim",
     "black 20-inch wheels",
     "gloss-black badging"
    ]
   },
   {
    "name": "Elite",
    "msrp": 53695,
    "features": [
     "Panoramic moonroof",
     "Bose 12-speaker premium audio",
     "ventilated front seats",
     "heated 2nd row & steering wheel",
     "head-up display"
    ]
   },
   {
    "name": "Black Edition",
    "msrp": 55195,
    "features": [
     "Black exterior & interior theme",
     "red ambient lighting",
     "black 20-inch wheels",
     "unique badging"
    ]
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
   "cargoMaxCuFt": 87,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/0/06/2023_Honda_Pilot_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Honda_Pilot_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/2024_Honda_Pilot_AWD_Touring%2C_rear_2.2.24.jpg",
     "kind": "exterior",
     "credit": "Kevauto",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Honda_Pilot_AWD_Touring,_rear_2.2.24.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "2026 pricing raised ~$200 across the board and a new Touring Blackout trim added (verified via Edmunds trim MSRPs net of $1,495 destination). AWD standard on TrailSport, Touring, Touring Blackout, Elite, Black Edition (+~$2,100 on Sport/EX-L); 5,000 lb towing requires AWD (3,500 FWD). TrailSport includes a full-size spare.",
  "sources": [
   {
    "label": "2026 Pilot trims & MSRP",
    "url": "https://www.edmunds.com/honda/pilot/2026/trims/",
    "site": "edmunds.com"
   },
   {
    "label": "2026 Pilot features & specifications",
    "url": "https://automobiles.honda.com/pilot/specs-features-trim-comparison",
    "site": "automobiles.honda.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_Pilot.shtml",
    "site": "fueleconomy.gov"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Modern Steel Metallic",
     "hex": "#565a5e"
    },
    {
     "name": "Sonic Gray Pearl",
     "hex": "#5f6265"
    },
    {
     "name": "Diffused Sky Blue Pearl",
     "hex": "#4a6a86"
    },
    {
     "name": "Radiant Red Metallic II",
     "hex": "#9e1b22"
    }
   ],
   "interior": [
    {
     "name": "Black leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#b7b7bb",
     "tone": "light"
    },
    {
     "name": "Mocha leather",
     "hex": "#5a4634",
     "tone": "light"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Honda Pilot AWD",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/22067",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4,
    "scale": 5,
    "count": 57,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Honda Pilot",
     "url": "https://www.edmunds.com/honda/pilot/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.4,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Honda Pilot",
     "url": "https://www.edmunds.com/honda/pilot/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceTo": 42000,
  "trims": [
   {
    "name": "Prelude",
    "msrp": 42000,
    "features": [
     "200-hp two-motor hybrid (232 lb-ft)",
     "S+ Shift simulated-gear drive mode",
     "Civic Type R-derived chassis with adaptive dampers",
     "Brembo front brakes",
     "Bose premium audio",
     "leather/suede sport seats",
     "19-inch alloy wheels"
    ]
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
   "groundClearanceIn": 5
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
  "confidence": "high",
  "notes": "All-new nameplate revival, hybrid-only 2+2 liftback coupe now arriving at dealers. Verified as essentially mono-spec: single trim at $42,000 MSRP (excl. $1,195 destination); a black roof / two-tone appearance is a ~$500 color option, not a separate trim, so the prior two-trim listing was corrected. Powertrain 200 hp / 46 city / 41 hwy verified via Honda pressroom. Exterior dimensions and curb weight remain close estimates from launch coverage.",
  "colors": {
   "exterior": [
    {
     "name": "Winter Frost Pearl",
     "hex": "#eef1f2"
    },
    {
     "name": "Meteorite Gray Metallic",
     "hex": "#4c4e51"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Rallye Red",
     "hex": "#c41230"
    },
    {
     "name": "Boost Blue Pearl",
     "hex": "#1f6fd6"
    }
   ],
   "interior": [
    {
     "name": "Black leather/suede",
     "hex": "#1c1c1e",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Prelude press release (specs & powertrain)",
    "url": "https://hondanews.com/en-US/honda-automobiles/releases/new-2026-honda-prelude-sports-coupe-expands-honda-hybrid-electric-lineup-to-four-fun-to-drive-and-fuel-efficient-models",
    "site": "hondanews.com"
   },
   {
    "label": "2026 Prelude model page",
    "url": "https://automobiles.honda.com/prelude",
    "site": "automobiles.honda.com"
   },
   {
    "label": "2026 Prelude pricing",
    "url": "https://www.cars.com/articles/how-much-is-the-2026-honda-prelude-518646/",
    "site": "cars.com"
   }
  ]
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
    "msrp": 39900,
    "features": [
     "220-hp single-motor FWD",
     "308-mi EPA range",
     "11.3-inch touchscreen with Google built-in",
     "heated front seats",
     "portable Level 1/2 charging kit"
    ]
   },
   {
    "name": "EX AWD",
    "msrp": 42000,
    "features": [
     "Dual-motor AWD (300 hp)",
     "294-mi EPA range",
     "all-weather traction"
    ]
   },
   {
    "name": "Touring (FWD)",
    "msrp": 45200,
    "features": [
     "Bose 12-speaker premium audio",
     "leather-trimmed seats",
     "hands-free power tailgate",
     "wireless CarPlay/Android Auto",
     "ambient lighting"
    ]
   },
   {
    "name": "Touring AWD",
    "msrp": 47000,
    "features": [
     "Dual-motor AWD (300 hp)",
     "294-mi EPA range"
    ]
   },
   {
    "name": "Elite AWD",
    "msrp": 50400,
    "features": [
     "Panoramic moonroof",
     "head-up display",
     "ventilated front seats",
     "21-inch wheels",
     "heated steering wheel",
     "283-mi EPA range"
    ]
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
   "lengthIn": 192,
   "widthIn": 78.3,
   "heightIn": 64.7,
   "wheelbaseIn": 121.8,
   "curbWeightLb": 5147,
   "groundClearanceIn": 8
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
  "notes": "GM Ultium-based EV (85 kWh). Honda cut Prologue prices ~$7,500 across the board (effective April 2026), so 2026 MSRPs verified as EX $39,900 to Elite AWD $50,400. EPA range: 308 mi FWD, 294 mi dual-motor AWD, 283 mi Elite. DC fast charge 20-80% in ~35 minutes.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Lunar Silver Metallic",
     "hex": "#b8bbbe"
    },
    {
     "name": "North Shore Pearl",
     "hex": "#2a4a6b"
    },
    {
     "name": "Phoenix Orange Pearl",
     "hex": "#c85a1c"
    },
    {
     "name": "Urban Gray Pearl",
     "hex": "#6f7276"
    }
   ],
   "interior": [
    {
     "name": "Black leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#b7b7bb",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Prologue pricing & trims",
    "url": "https://www.edmunds.com/honda/prologue/",
    "site": "edmunds.com"
   },
   {
    "label": "2026 Prologue all-electric SUV",
    "url": "https://automobiles.honda.com/prologue",
    "site": "automobiles.honda.com"
   },
   {
    "label": "EPA range & efficiency",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_Prologue.shtml",
    "site": "fueleconomy.gov"
   }
  ]
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
    "msrp": 40795,
    "features": [
     "280-hp 3.5L V6 with standard i-VTM4 AWD",
     "dual-action tailgate",
     "lockable in-bed trunk",
     "18-inch wheels",
     "wireless CarPlay/Android Auto"
    ]
   },
   {
    "name": "RTL",
    "msrp": 43595,
    "features": [
     "Leather-trimmed seats",
     "power moonroof",
     "heated front seats",
     "8-way power driver seat with memory",
     "blind-spot monitoring",
     "remote start"
    ]
   },
   {
    "name": "TrailSport",
    "msrp": 45995,
    "features": [
     "All-terrain tires",
     "bronze 18-inch wheels",
     "TrailSport styling & orange stitching",
     "unique grille",
     "all-season floor mats"
    ]
   },
   {
    "name": "TrailSport w/HPD Wheels",
    "msrp": 47195,
    "features": [
     "HPD bronze off-road wheels",
     "HPD graphics package"
    ]
   },
   {
    "name": "Black Edition",
    "msrp": 47395,
    "features": [
     "Black leather with red contrast stitching",
     "black exterior & 18-inch black wheels",
     "red ambient lighting",
     "gloss-black accents"
    ]
   },
   {
    "name": "Black Edition Two-Tone",
    "msrp": 47895,
    "features": [
     "Two-tone black roof/exterior paint",
     "unique two-tone appearance"
    ]
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
  "notes": "2026 pricing verified via Edmunds trim MSRPs net of $1,495 destination (Sport $40,795 to Black Edition Two-Tone $47,895) - unchanged from prior figures. Unibody crew-cab pickup; i-VTM4 torque-vectoring AWD standard on all trims. cargoCuFt reflects the lockable in-bed trunk; 5.3-ft bed adds ~33.9 cu ft. Spare stored in the in-bed trunk.",
  "colors": {
   "exterior": [
    {
     "name": "Platinum White Pearl",
     "hex": "#f3f4f4"
    },
    {
     "name": "Crystal Black Pearl",
     "hex": "#0b0b0d"
    },
    {
     "name": "Lunar Silver Metallic",
     "hex": "#b8bbbe"
    },
    {
     "name": "Sonic Gray Pearl",
     "hex": "#5f6265"
    },
    {
     "name": "Radiant Red Metallic II",
     "hex": "#9e1b22"
    },
    {
     "name": "Diffused Sky Blue Pearl (TrailSport)",
     "hex": "#4a6a86"
    }
   ],
   "interior": [
    {
     "name": "Black leather",
     "hex": "#1c1c1e",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#b7b7bb",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Ridgeline trims & MSRP",
    "url": "https://www.edmunds.com/honda/ridgeline/2026/trims/",
    "site": "edmunds.com"
   },
   {
    "label": "2026 Ridgeline features & specs",
    "url": "https://automobiles.honda.com/ridgeline/specs-features-trim-comparison",
    "site": "automobiles.honda.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Honda_Ridgeline.shtml",
    "site": "fueleconomy.gov"
   }
  ]
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
   "widthIn": 74,
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
   "widthIn": 78,
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
   "lengthIn": 187,
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
   "widthIn": 78,
   "heightIn": 71.1,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4553,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21.1,
   "cargoMaxCuFt": 87,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/e/e8/Hyundai_Palisade_Highroof_LX3_Interior.jpg",
     "kind": "interior",
     "credit": "Damian B Oh",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Hyundai_Palisade_Highroof_LX3_Interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/49/2026_Hyundai_Palisade_XRT_Pro_%28USDM%29.jpg",
     "kind": "exterior",
     "credit": "Masamiotter",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Hyundai_Palisade_XRT_Pro_(USDM).jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "All-new generation for 2026, larger with first-ever Palisade Hybrid (329 hp, up to ~34 mpg). Trim prices above derived from published incl.-destination figures ($1,495 freight); cargo figures approximate.",
  "sources": [
   {
    "label": "2026 specs & features (all-new generation)",
    "url": "https://www.hyundaiusa.com/us/en/vehicles/palisade",
    "site": "hyundaiusa.com"
   },
   {
    "label": "2026 pricing & trims (official pricing release, from $38,935)",
    "url": "https://www.hyundainews.com/releases/4511",
    "site": "hyundainews.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Hyundai_Palisade.shtml",
    "site": "fueleconomy.gov"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick+",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API — 2026 Hyundai Palisade SUV AWD (VehicleId 21136), OverallRating 5",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21136",
     "site": "NHTSA"
    }
   },
   "owner": {
    "score": 4.1,
    "scale": 5,
    "count": 28,
    "source": {
     "label": "Edmunds owner reviews — 2026 Hyundai Palisade (4.1/5, 28 reviews)",
     "url": "https://www.edmunds.com/hyundai/palisade/2026/",
     "site": "Edmunds"
    }
   },
   "expert": {
    "score": 7.7,
    "scale": 10,
    "source": {
     "label": "Edmunds expert rating — 2026 Hyundai Palisade (7.7/10)",
     "url": "https://www.edmunds.com/hyundai/palisade/2026/",
     "site": "Edmunds"
    }
   }
  }
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
   "widthIn": 75,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/e/e7/MIAS_2024_-_2024_Hyundai_Santa_Fe_2.5_Calligraphy_AWD_%28interior%29.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:MIAS_2024_-_2024_Hyundai_Santa_Fe_2.5_Calligraphy_AWD_(interior).jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/d/d4/2024_Hyundai_Santa_Fe_%28MX5%29_IMG_5309.jpg",
     "kind": "exterior",
     "credit": "Alexander Migl",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Hyundai_Santa_Fe_(MX5)_IMG_5309.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Boxy fifth-generation design with standard third row. Hybrid Calligraphy AWD tops the range around $50,250 excl. freight.",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.hyundaiusa.com/us/en/vehicles/santa-fe",
    "site": "hyundaiusa.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Hyundai_Santa_Fe.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/hyundai/santa-fe/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Hyundai Santa Fe SUV AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21133",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 62,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Hyundai Santa Fe",
     "url": "https://www.edmunds.com/hyundai/santa-fe/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.5,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Hyundai Santa Fe",
     "url": "https://www.edmunds.com/hyundai/santa-fe/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "cargoCuFt": 16,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/Hyundai_Tucson_NX4_1.6_GLS_HEV_-_interior_view.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Hyundai_Tucson_NX4_1.6_GLS_HEV_-_interior_view.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/67/Hyundai_Tucson_NX4_PE_1.6T_GLS_HEV_Black.jpg",
     "kind": "exterior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Hyundai_Tucson_NX4_PE_1.6T_GLS_HEV_Black.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "New Hybrid Blue SE trim and increased gas-model towing for 2026. Top Limited PHEV price is approximate (~$48.7k per KBB; sources vary). PHEV trims use a tire mobility kit.",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.hyundaiusa.com/us/en/vehicles/tucson",
    "site": "hyundaiusa.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Hyundai_Tucson.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/hyundai/tucson/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Hyundai Tucson SUV AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21143",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   },
   "owner": {
    "score": 4.1,
    "scale": 5,
    "count": 94,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Hyundai Tucson",
     "url": "https://www.edmunds.com/hyundai/tucson/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.8,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Hyundai Tucson",
     "url": "https://www.edmunds.com/hyundai/tucson/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "wheelbaseIn": 115,
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
   "wheelbaseIn": 127,
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
   "widthIn": 78,
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
   "cargoCuFt": 22,
   "cargoMaxCuFt": 101,
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
   "groundClearanceIn": 8
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Jeep_Compass_(MP)_PHEV_Facelift_1X7A0139.jpg",
   "credit": "Alexander Migl",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/f/fb/2022_Jeep_Compass_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Jeep_Compass_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/5/5e/2025_Jeep_Compass_Sport_in_Bright_White%2C_front_right%2C_2025-09-07.jpg",
     "kind": "exterior",
     "credit": "Elise240SX",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Jeep_Compass_Sport_in_Bright_White,_front_right,_2025-09-07.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Carryover of the current-generation Compass for 2026 in the US (10th model year); base Sport trim dropped, Latitude is the new entry trim. AWD standard. All-new next-gen Compass not yet on sale in the US.",
  "ratings": {
   "safety": {
    "nhtsa": 4,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API — 2026 Jeep Compass SUV AWD (VehicleId 20923), OverallRating 4",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20923",
     "site": "NHTSA"
    }
   },
   "owner": {
    "score": 4.1,
    "scale": 5,
    "count": 30,
    "source": {
     "label": "Edmunds owner reviews — 2026 Jeep Compass (4.1/5, 30 reviews)",
     "url": "https://www.edmunds.com/jeep/compass/2026/",
     "site": "Edmunds"
    }
   },
   "expert": {
    "score": 5.7,
    "scale": 10,
    "source": {
     "label": "Edmunds expert rating — 2026 Jeep Compass (5.7/10)",
     "url": "https://www.edmunds.com/jeep/compass/2026/",
     "site": "Edmunds"
    }
   }
  }
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
   "lengthIn": 218,
   "widthIn": 73.8,
   "heightIn": 75,
   "wheelbaseIn": 137.3,
   "curbWeightLb": 4650,
   "groundClearanceIn": 10
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/6c/2022_Jeep_Grand_Cherokee_Summit_Reserve_4x4_in_Bright_White%2C_Front_Left%2C_01-16-2022.jpg",
     "kind": "exterior",
     "credit": "Elise240SX",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Jeep_Grand_Cherokee_Summit_Reserve_4x4_in_Bright_White,_Front_Left,_01-16-2022.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Refreshed for 2026 with new styling and a 324-hp 2.0L Hurricane turbo four on upper trims (V6 remains on base trims); 4xe PHEV discontinued. Three-row Grand Cherokee L included in this record (adds ~$2,000-$3,000; seats 6-7). Dims shown are two-row. Prices exclude $1,995 destination.",
  "sources": [
   {
    "label": "2026 model overview & features",
    "url": "https://www.jeep.com/grand-cherokee.html",
    "site": "jeep.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Jeep_Grand_Cherokee.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 specs & features (official press kit)",
    "url": "https://media.stellantisnorthamerica.com/newsrelease.do?id=27159&mid=",
    "site": "media.stellantisnorthamerica.com"
   },
   {
    "label": "Towing & specs",
    "url": "https://www.jeep.com/grand-cherokee/specs.html",
    "site": "jeep.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Jeep Grand Cherokee SUV 4WD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20928",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.4,
    "scale": 5,
    "count": 27,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Jeep Grand Cherokee",
     "url": "https://www.edmunds.com/jeep/grand-cherokee/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.7,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Jeep Grand Cherokee",
     "url": "https://www.edmunds.com/jeep/grand-cherokee/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "wheelbaseIn": 123,
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
   "wheelbaseIn": 113,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/5/53/2024_Jeep_Wrangler_Unlimited_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Jeep_Wrangler_Unlimited_interior.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "4xe plug-in hybrid discontinued for 2026; new Moab 392 (and Willys 392) replace Rubicon 392. Offered as 2-door (seats 4) and 4-door (seats 5); dims shown are 4-door. 85th Anniversary editions available. Prices exclude $1,995 destination.",
  "sources": [
   {
    "label": "2026 model overview & features",
    "url": "https://www.jeep.com/wrangler.html",
    "site": "jeep.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Jeep_Wrangler.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/jeep/wrangler/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "owner": {
    "score": 3.3,
    "scale": 5,
    "count": 35,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Jeep Wrangler",
     "url": "https://www.edmunds.com/jeep/wrangler/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 5.2,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Jeep Wrangler",
     "url": "https://www.edmunds.com/jeep/wrangler/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "lengthIn": 203,
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
   "passengerVolumeCuFt": 103,
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
   "wheelbaseIn": 122,
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
   "cargoCuFt": 16,
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
   "lengthIn": 174,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/1/13/2024_Kia_Sorento_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Kia_Sorento_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/8/84/2024_Kia_Sorento_X-Line_SX_Prestige_%28facelift%29%2C_front_12.20.24.jpg",
     "kind": "exterior",
     "credit": "Kevauto",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Kia_Sorento_X-Line_SX_Prestige_(facelift),_front_12.20.24.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "Smaller 3-row alternative to Telluride. Base/top prices derived from published incl.-destination figures ($33,635 / $54,935 with ~$1,445 freight).",
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick+",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API — 2026 Kia Sorento SUV AWD (VehicleId 21182), OverallRating 5",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21182",
     "site": "NHTSA"
    }
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 31,
    "source": {
     "label": "Edmunds owner reviews — 2026 Kia Sorento (4.2/5, 31 reviews)",
     "url": "https://www.edmunds.com/kia/sorento/2026/consumer-reviews/",
     "site": "Edmunds"
    }
   },
   "expert": {
    "score": 7.7,
    "scale": 10,
    "source": {
     "label": "Edmunds expert rating — 2026 Kia Sorento (7.7/10)",
     "url": "https://www.edmunds.com/kia/sorento/2026/",
     "site": "Edmunds"
    }
   }
  }
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/e/e2/Kia_Sportage_X-Pro_Prestige_AWD_%282024%29_%2853623799467%29.jpg",
     "kind": "interior",
     "credit": "Charles (Flickr)",
     "license": "CC BY 2.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Kia_Sportage_X-Pro_Prestige_AWD_(2024)_(53623799467).jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/0/06/Kia_Sportage_Signature_NQ5_PE_Black_%282%29.jpg",
     "kind": "exterior",
     "credit": "Damian B Oh",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Kia_Sportage_Signature_NQ5_PE_Black_(2).jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Refreshed for 2026 (new front/rear styling, larger screen). Class-leading cargo space. priceTo shown is the top gas trim; Hybrid starts in the mid-$30ks and the PHEV tops the range in the mid-$40ks (announced separately).",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.kia.com/us/en/sportage",
    "site": "kia.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Kia_Sportage.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/kia/sportage/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Kia Sportage SUV AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21187",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 60,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Kia Sportage",
     "url": "https://www.edmunds.com/kia/sportage/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.8,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Kia Sportage",
     "url": "https://www.edmunds.com/kia/sportage/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": 157.1,
   "cargoCuFt": 21,
   "cargoMaxCuFt": 87,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/64/2023_Kia_Telluride_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Kia_Telluride_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/1/1b/2023_Kia_Telluride_front_end.jpg",
     "kind": "exterior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Kia_Telluride_front_end.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "IMPORTANT: Kia skipped the 2026 model year for the Telluride — the first generation was sold as 2025, and the all-new second generation (first hybrid, from $39,190) arrives in early 2026 as a 2027 model. Specs shown reflect the outgoing generation still on dealer lots. Final year of the first-generation Telluride, sold as a carryover 2026; an all-new Telluride arrives as a 2027 (from $37,795 excl. freight). 2026 prices shown are close to 2025 levels; Kia had not published a full official 2026 price list at time of writing. Full-size spare on some X-Pro configurations.",
  "sources": [
   {
    "label": "2027 pricing & trims (Kia skipped the 2026 model year; all-new gen is MY2027, on sale early 2026, from $39,190)",
    "url": "https://www.kiamedia.com/us/en/media/pressreleases/24220/kia-america-announces-pricing-for-the-upcoming-all-new-2027-kia-telluride",
    "site": "kiamedia.com"
   },
   {
    "label": "2027 specs & features (current official model page)",
    "url": "https://www.kia.com/us/en/telluride",
    "site": "kia.com"
   },
   {
    "label": "No 2026 model year — Kia skipped from 2025 to all-new 2027",
    "url": "https://www.kbb.com/car-news/kia-teases-new-telluride-skips-a-model-year/",
    "site": "kbb.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2025 (carries over)",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2025 Kia Telluride SUV AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20731",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   }
  }
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
   "lengthIn": 194,
   "widthIn": 80,
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
   "widthIn": 78,
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
   "wheelbaseIn": 119,
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
   "wheelbaseIn": 115,
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
   "lengthIn": 181,
   "widthIn": 75,
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
   "wheelbaseIn": 118,
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
   "widthIn": 75,
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
   "heightIn": 71,
   "wheelbaseIn": 118,
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
   "widthIn": 76,
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
    "msrp": 47500,
    "features": [
     "221-hp single-motor FWD EV",
     "NuLuxe-trimmed seating",
     "14-inch touchscreen",
     "Lexus Safety System+ 4.0"
    ]
   },
   {
    "name": "ES 350h Premium",
    "msrp": 49700,
    "features": [
     "244-hp hybrid powertrain, FWD standard",
     "10-speaker Lexus Premium Sound System"
    ]
   },
   {
    "name": "ES 500e Premium AWD",
    "msrp": 50500,
    "features": [
     "338-hp dual-motor AWD EV (DIRECT4)",
     "276-mile EPA range"
    ]
   },
   {
    "name": "ES 350h Premium+ AWD",
    "msrp": 55900,
    "features": [
     "Semi-aniline leather",
     "Mark Levinson 17-speaker, 1,800-watt audio",
     "Panoramic View Monitor"
    ]
   },
   {
    "name": "ES 350e Luxury",
    "msrp": 55900,
    "features": [
     "Semi-aniline leather with Bamboo Layering trim",
     "Optional Executive Package: reclining/massaging rear seat with ottoman",
     "Soft-close doors"
    ]
   },
   {
    "name": "ES 500e Luxury AWD",
    "msrp": 58900,
    "features": [
     "Mark Levinson audio",
     "Advanced Park with Remote Park",
     "21-inch wheel option"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid (ES 350h FWD)",
    "hp": 244,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 46,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid (ES 350h AWD)",
    "hp": 244,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 44,
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
    "evRangeMi": 307
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
    "evRangeMi": 276
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 202.3,
   "widthIn": 75.5,
   "heightIn": 61.4,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4000,
   "groundClearanceIn": 5.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 15,
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
   "Executive Package rear-seat luxury (ES 350e Luxury)",
   "Heated & ventilated seats",
   "Bamboo Layering interior trim"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus-ES-2026.jpg",
   "credit": "Ohcock"
  },
  "confidence": "high",
  "notes": "All-new eighth-generation ES for 2026, larger and offered as hybrid (ES 350h) or EV (ES 350e/500e) - the first electric ES. 8 total trims across 3 powertrains (representative subset shown). Destination fee is $1,395; priceFrom/priceTo shown are ex-destination base prices. EV range figures are final EPA-rated (19-inch wheels; 21-inch wheels reduce range slightly).",
  "sources": [
   {
    "label": "2026 ES launch with BEV models",
    "url": "https://pressroom.lexus.com/2026-lexus-es-launches-with-battery-electric-models-new-hybrid-coming-soon/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "2026 ES 350h hybrid joins lineup",
    "url": "https://pressroom.lexus.com/2026-lexus-es-350h-hybrid-joins-battery-electric-es-350e-es-500ein-eighth-generation-es-lineup/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Lexus_ES.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 ES pricing",
    "url": "https://www.cars.com/articles/how-much-is-the-2026-lexus-es-522192/",
    "site": "cars.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Ultra White",
     "hex": "#F5F5F0"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Iridium",
     "hex": "#9EA0A1"
    },
    {
     "name": "Copper Crest (new for 2026)",
     "hex": "#8B5A45"
    },
    {
     "name": "Wavelength (new for 2026, Lexus-first color)",
     "hex": "#8FA5B8"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "White",
     "hex": "#F2EFE9",
     "tone": "light"
    },
    {
     "name": "Palomino",
     "hex": "#C9A876",
     "tone": "light"
    }
   ]
  }
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
  "priceFrom": 67735,
  "priceTo": 84200,
  "trims": [
   {
    "name": "GX 550 Premium",
    "msrp": 67735,
    "features": [
     "NuLuxe seating, 8-way power heated & ventilated front seats",
     "14-inch touchscreen with Lexus Interface",
     "10-speaker premium audio",
     "7-passenger seating"
    ]
   },
   {
    "name": "GX 550 Premium+",
    "msrp": 72200,
    "features": [
     "Panoramic View Monitor",
     "Heated second-row outboard seats",
     "Power rear door with kick sensor"
    ]
   },
   {
    "name": "GX 550 Overtrail",
    "msrp": 75380,
    "features": [
     "E-KDSS electronic stabilizer disconnect",
     "Electronically locking rear differential",
     "1-inch suspension lift, 9.84-inch ground clearance",
     "18-inch wheels with 33-inch all-terrain tires",
     "Crawl Control, Downhill Assist & Multi-Terrain Select",
     "5-passenger only (2-row)"
    ]
   },
   {
    "name": "GX 550 Luxury",
    "msrp": 80200,
    "features": [
     "Semi-aniline leather with massaging front seats",
     "22-inch forged alloy wheels"
    ]
   },
   {
    "name": "GX 550 Overtrail+",
    "msrp": 82845,
    "features": [
     "Adds massaging front seats to Overtrail hardware",
     "Heated second-row seats",
     "Wireless phone charger"
    ]
   },
   {
    "name": "GX 550 Luxury+",
    "msrp": 84200,
    "features": [
     "Mark Levinson 21-speaker, 1,800-watt audio",
     "Dynamic Sky Panorama glass roof",
     "Automatic power-extending running boards",
     "Digital rearview mirror"
    ]
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2024_Lexus_GX_550_Overtrail_(United_States)_front_view_01.jpg",
   "credit": "Charles",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/2024_Lexus_GX_550_Luxury%2B_%28United_States%29_interior.png",
     "kind": "interior",
     "credit": "Autosdeprimera",
     "license": "CC BY 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File%3A2024_Lexus_GX_550_Luxury%2B_(United_States)_interior.png"
    }
   ]
  },
  "confidence": "high",
  "notes": "Body-on-frame off-road luxury SUV sharing the Land Cruiser platform. Full 2026 lineup is 6 trims across 3 families (Premium, Luxury, Overtrail), each with a base and \"+\" tier; a mid-cycle 2026 price increase (~$1,350) is reflected here. Overtrail/Overtrail+ are 2-row (5-passenger) with E-KDSS and a locking rear diff; other trims seat 7. Destination fee is $1,450.",
  "sources": [
   {
    "label": "2026 GX model page",
    "url": "https://www.lexus.com/models/GX",
    "site": "lexus.com"
   },
   {
    "label": "2026 GX launch & Overtrail specs",
    "url": "https://pressroom.lexus.com/revel-in-the-joy-of-driving-the-2026-lexus-gx/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/noframes/50167.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 GX research & pricing",
    "url": "https://www.cars.com/research/lexus-gx_550-2026/",
    "site": "cars.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Eminent White Pearl",
     "hex": "#F0EDE6"
    },
    {
     "name": "Nebula Gray Pearl",
     "hex": "#8B8C8E"
    },
    {
     "name": "Atomic Silver",
     "hex": "#C6C7C6"
    },
    {
     "name": "Incognito",
     "hex": "#4A4A4A"
    },
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Nori Green Pearl",
     "hex": "#3B4A3E"
    },
    {
     "name": "Nightfall Mica",
     "hex": "#1F2937"
    },
    {
     "name": "Earth (Overtrail bi-tone exclusive)",
     "hex": "#6B5B47"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#0D0D0D",
     "tone": "dark"
    },
    {
     "name": "Dapple Gray",
     "hex": "#9C9691",
     "tone": "light"
    },
    {
     "name": "Saddle Tan",
     "hex": "#A9713F",
     "tone": "light"
    },
    {
     "name": "Black with Olive Ultrasuede (Overtrail)",
     "hex": "#0D0D0D",
     "tone": "dark"
    },
    {
     "name": "Chateau with Olive Ultrasuede (Overtrail)",
     "hex": "#8A7159",
     "tone": "light"
    }
   ]
  }
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
  "priceFrom": 45500,
  "priceTo": 61485,
  "trims": [
   {
    "name": "IS 350 F Sport Design",
    "msrp": 45500,
    "features": [
     "12.3-inch touchscreen & 12.3-inch digital gauge cluster",
     "Wireless Apple CarPlay/Android Auto",
     "Lexus Safety System+ 3.0",
     "Heated front seats"
    ]
   },
   {
    "name": "IS 350 F Sport",
    "msrp": 47950,
    "features": [
     "Adaptive Variable Suspension",
     "F Sport-tuned steering & brakes",
     "Sport seats with paddle shifters",
     "Radiant Red interior available (new for 2026)"
    ]
   },
   {
    "name": "IS 350 F Sport Special Appearance Package",
    "msrp": 61485,
    "features": [
     "Limited to 350 units for North America",
     "Exclusive Hakugin Matte White paint",
     "19-inch black BBS forged wheels",
     "White & Black two-tone NuLuxe interior",
     "Mark Levinson audio"
    ]
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
    "mpgCombined": 22,
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
   "Limited-run F Sport Special Appearance Package with matte paint"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2023_Lexus_IS_350_F_Sport_in_Sonic_Iridium%2C_front_left.jpg",
   "credit": "Ethan Llamas",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/Lexus_IS_350_F_Sport_GSE31_FL3_interior.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File%3ALexus_IS_350_F_Sport_GSE31_FL3_interior.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "2026 refresh: new front styling, larger 12.3-inch screens, physical climate row. IS 300 and V8 IS 500 both dropped for 2026; lineup is IS 350 only, in F Sport Design and F Sport grades (AWD is a ~$2,000 option on either, not a separate trim), plus the limited-run F Sport Special Appearance Package. Destination fee is $1,295.",
  "sources": [
   {
    "label": "2026 IS refresh & full lineup",
    "url": "https://pressroom.lexus.com/2026-lexus-is-perfecting-the-sport-sedan/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy (RWD)",
    "url": "https://www.fueleconomy.gov/feg/noframes/50048.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "EPA fuel economy (AWD)",
    "url": "https://www.fueleconomy.gov/feg/noframes/50049.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 IS research & pricing",
    "url": "https://www.edmunds.com/lexus/is/2026/trims/",
    "site": "edmunds.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Ultra White",
     "hex": "#F5F5F0"
    },
    {
     "name": "Iridium",
     "hex": "#9EA0A1"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Infrared",
     "hex": "#B8352E"
    },
    {
     "name": "Ultrasonic Blue Mica 2.0",
     "hex": "#1B3A5C"
    },
    {
     "name": "Wind",
     "hex": "#D9D5C9"
    },
    {
     "name": "Hakugin Matte White (Special Appearance Package exclusive)",
     "hex": "#EDEDE8"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Radiant Red (F Sport, new for 2026)",
     "hex": "#8C1D2C",
     "tone": "dark"
    },
    {
     "name": "White & Black (Special Appearance Package)",
     "hex": "#E8E4DC",
     "tone": "light"
    }
   ]
  }
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
  "priceFrom": 100250,
  "priceTo": 109300,
  "trims": [
   {
    "name": "LC 500 Coupe",
    "msrp": 100250,
    "features": [
     "5.0L naturally aspirated V8, 471 hp",
     "12.3-inch touchscreen with Lexus Interface",
     "Lexus Safety System+ 2.5",
     "Panoramic View Monitor & Intuitive Parking Assist"
    ]
   },
   {
    "name": "LC 500 Coupe Inspiration Series",
    "msrp": 100250,
    "features": [
     "Limited to 200 units for North America",
     "Exclusive Smoke Matte Gray paint",
     "Carbon-fiber roof",
     "White & Black semi-aniline leather interior"
    ]
   },
   {
    "name": "LC 500 Convertible",
    "msrp": 107750,
    "features": [
     "Mark Levinson premium audio",
     "Climate Concierge with heated steering wheel & neck heaters",
     "Head-up display",
     "21-inch forged alloy wheels"
    ]
   },
   {
    "name": "LC 500 Convertible Inspiration Series",
    "msrp": 107750,
    "features": [
     "Limited to 350 units for North America",
     "Exclusive Wind exterior color",
     "Saddle Tan & White semi-aniline leather",
     "Bespoke Build program available"
    ]
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
    "mpgCombined": 18,
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
   "heightIn": 53,
   "wheelbaseIn": 113,
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
   "Bespoke Build customization program",
   "Mark Levinson audio",
   "Carbon-fiber roof (coupe)",
   "Inspiration Series limited editions new for 2026",
   "Climate Concierge with neck heaters"
  ],
  "towingLb": null,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/2023_Lexus_LC_500_in_White_Nova_Glass_Flake%2C_front_right.jpg",
   "credit": "Ethan Llamas"
  },
  "confidence": "high",
  "notes": "471-hp V8 grand tourer, coupe or convertible. The 354-hp LC 500h hybrid is discontinued for 2026 - the lineup is now V8-only. New Inspiration Series limited editions (200 coupes, 350 convertibles) add exclusive colors and interiors. Destination fee is $1,550; priceFrom/priceTo shown are ex-destination base prices.",
  "sources": [
   {
    "label": "2026 LC 500 Coupe pricing & specs",
    "url": "https://pressroom.lexus.com/tangible-elegance-the-2026-lexus-lc-500/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "2026 LC 500 Convertible pricing & Inspiration Series",
    "url": "https://pressroom.lexus.com/open-air-opulence-the-2026-lexus-lc-500-convertible/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy (Coupe)",
    "url": "https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=49219",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 LC 500 research & pricing",
    "url": "https://www.cars.com/research/lexus-lc_500-2026/",
    "site": "cars.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Ultra White",
     "hex": "#F5F5F0"
    },
    {
     "name": "Iridium",
     "hex": "#9EA0A1"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Ultrasonic Blue Mica 2.0",
     "hex": "#1B3A5C"
    },
    {
     "name": "Nori Green Pearl",
     "hex": "#2E3B2E"
    },
    {
     "name": "Infrared",
     "hex": "#B8352E"
    },
    {
     "name": "Smoke Matte Gray (Coupe Inspiration Series exclusive)",
     "hex": "#6E6E6E"
    },
    {
     "name": "Wind (Convertible Inspiration Series exclusive)",
     "hex": "#D9D5C9"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Toasted Caramel",
     "hex": "#A9662E",
     "tone": "light"
    },
    {
     "name": "Rioja Red",
     "hex": "#7A1F2B",
     "tone": "dark"
    },
    {
     "name": "Saddle Tan & White (Convertible Inspiration Series)",
     "hex": "#C9A876",
     "tone": "light"
    }
   ]
  }
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
  "priceFrom": 97830,
  "priceTo": 97830,
  "trims": [
   {
    "name": "LS 500 Heritage Edition",
    "msrp": 97830,
    "features": [
     "Kiriko cut-glass ornamentation & hand-pleated door trim",
     "Ninety Noir exclusive exterior color",
     "Rioja Red exclusive interior color",
     "Mark Levinson 23-speaker audio",
     "Advanced Park",
     "Etched Heritage Edition emblem"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.4L twin-turbo V6",
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
   "wheelbaseIn": 123,
   "curbWeightLb": 4750,
   "groundClearanceIn": 5.7
  },
  "interior": {
   "passengerVolumeCuFt": 98.9,
   "cargoCuFt": 17,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus_LS_500_VXFA50_F_Sport_White_Nova_01.jpg",
   "credit": "Ethan Llamas"
  },
  "confidence": "high",
  "notes": "Final model year for the LS in the US after a 36-year run; sold only as the LS 500 Heritage Edition limited to 250 units (about $99,380 with the $1,550 destination fee). Only 2026 exterior color is Ninety Noir; only interior color is Rioja Red.",
  "sources": [
   {
    "label": "2026 LS Heritage Edition announcement",
    "url": "https://pressroom.lexus.com/2026-lexus-ls-a-homage-to-the-original/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/noframes/50060.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 LS research & pricing",
    "url": "https://www.edmunds.com/lexus/ls/",
    "site": "edmunds.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Ninety Noir",
     "hex": "#0B0B0D"
    }
   ],
   "interior": [
    {
     "name": "Rioja Red",
     "hex": "#7A1F2B",
     "tone": "dark"
    }
   ]
  }
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
  "priceFrom": 106500,
  "priceTo": 141000,
  "trims": [
   {
    "name": "LX 600 Premium",
    "msrp": 106500,
    "features": [
     "20-inch wheels",
     "Adaptive Variable Suspension with Active Height Control",
     "12.3-inch touchscreen + 7-inch lower display",
     "Panoramic View Monitor"
    ]
   },
   {
    "name": "LX 600 F SPORT Handling",
    "msrp": 113500,
    "features": [
     "Exclusive 22-inch forged wheels",
     "Sport-tuned dampers & Torsen limited-slip diff",
     "F SPORT badging & mesh grille",
     "Circuit Red interior available"
    ]
   },
   {
    "name": "LX 600 Luxury",
    "msrp": 115500,
    "features": [
     "Semi-aniline leather with 5-level massaging front seats",
     "Optional 25-speaker Mark Levinson audio",
     "Digital rearview mirror"
    ]
   },
   {
    "name": "LX 700h Overtrail",
    "msrp": 115235,
    "features": [
     "Electronically locking front & rear differentials",
     "18-inch wheels with 33-inch all-terrain tires",
     "Front skid plate & dark gray roof rails",
     "Semi-aniline leather in Black or Stone Brown",
     "2,400W AC power inverter"
    ]
   },
   {
    "name": "LX 700h F SPORT Handling",
    "msrp": 117500,
    "features": [
     "Exclusive 22-inch forged wheels",
     "Sport-tuned suspension",
     "Hybrid powertrain standard"
    ]
   },
   {
    "name": "LX 700h Luxury",
    "msrp": 119500,
    "features": [
     "Semi-aniline leather with massaging front seats",
     "Optional 25-speaker Mark Levinson audio"
    ]
   },
   {
    "name": "LX 700h Ultra Luxury",
    "msrp": 141000,
    "features": [
     "4-passenger layout with reclining, massaging rear captain's chairs",
     "Dual 11.4-inch rear entertainment screens",
     "Diamond-stitch semi-aniline leather",
     "Standard 25-speaker Mark Levinson audio",
     "Cool box & wireless device charging"
    ]
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus_LX_600_VJA310_Sonic_Quartz_-_front.jpg",
   "credit": "Ethan Llamas",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/1/16/LEXUS_LX_600_ULTRA_LUXURY_%28J310%29_INTERIOR.jpg",
     "kind": "interior",
     "credit": "Dinkun Chen",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File%3ALEXUS_LX_600_ULTRA_LUXURY_(J310)_INTERIOR.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Flagship Lexus SUV on the Land Cruiser 300 platform, 7 total 2026 trims (LX 600 Premium/F SPORT Handling/Luxury, LX 700h Overtrail/F SPORT Handling/Luxury/Ultra Luxury). No E-KDSS on the LX (that's GX-exclusive) - LX uses standard Active Height Control + Adaptive Variable Suspension lineup-wide, with front and rear locking differentials added on Overtrail. Ultra Luxury is 4-passenger only; other trims seat 5 or 7. Destination fee is $1,550; priceFrom/priceTo shown are ex-destination base prices.",
  "sources": [
   {
    "label": "2026 LX F SPORT Appearance Package & full lineup",
    "url": "https://pressroom.lexus.com/lexus-flagship-suv-returns-for-2026-with-an-f-sport-appearance-package/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy (LX 600)",
    "url": "https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=50168",
    "site": "fueleconomy.gov"
   },
   {
    "label": "EPA fuel economy (LX 700h)",
    "url": "https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=50169",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 LX 700h research & pricing",
    "url": "https://www.cars.com/research/lexus-lx_700h-2026/",
    "site": "cars.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Eminent White Pearl",
     "hex": "#EFEEE9"
    },
    {
     "name": "Ultra White",
     "hex": "#F5F5F0"
    },
    {
     "name": "Atomic Silver",
     "hex": "#9CA0A3"
    },
    {
     "name": "Manganese Luster",
     "hex": "#7A6B5C"
    },
    {
     "name": "Nori Green Pearl",
     "hex": "#2E3B2E"
    },
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Earth (Overtrail exclusive)",
     "hex": "#6B5A47"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Palomino",
     "hex": "#C9A876",
     "tone": "light"
    },
    {
     "name": "White/Peppercorn",
     "hex": "#E8E4DC",
     "tone": "light"
    },
    {
     "name": "Circuit Red (F SPORT Handling exclusive)",
     "hex": "#7A1F2B",
     "tone": "dark"
    },
    {
     "name": "Stone Brown (Overtrail)",
     "hex": "#4A3728",
     "tone": "dark"
    },
    {
     "name": "Sunflare (Ultra Luxury)",
     "hex": "#D4A857",
     "tone": "light"
    }
   ]
  }
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
  "priceFrom": 44175,
  "priceTo": 62830,
  "trims": [
   {
    "name": "NX 350h",
    "msrp": 44175,
    "features": [
     "240-hp hybrid powertrain, FWD standard",
     "9.8-inch touchscreen",
     "Lexus Safety System+ 3.0",
     "Wireless Apple CarPlay/Android Auto"
    ]
   },
   {
    "name": "NX 350",
    "msrp": 44825,
    "features": [
     "275-hp turbocharged 2.4L four-cylinder, AWD standard",
     "8-way power front seats"
    ]
   },
   {
    "name": "NX 350h AWD Luxury",
    "msrp": 51790,
    "features": [
     "Leather seating",
     "Panoramic view monitor",
     "14-inch touchscreen"
    ]
   },
   {
    "name": "NX 450h+ Premium",
    "msrp": 57810,
    "features": [
     "Plug-in hybrid with 37-mile EV range",
     "3-hour Level 2 home charging",
     "Heated front seats"
    ]
   },
   {
    "name": "NX 450h+ F Sport Handling",
    "msrp": 62830,
    "features": [
     "Adaptive Variable Suspension",
     "Heated & ventilated F Sport seats",
     "Wireless device charging"
    ]
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
    "mpgCombined": 24,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.5L I4 hybrid (NX 350h)",
    "hp": 240,
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
    "engine": "2.5L I4 plug-in hybrid (NX 450h+)",
    "hp": 304,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus_NX_350_(TAZA25)_1X7A0305.jpg",
   "credit": "Alexander Migl",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Lexus_NX_450h%2B_%22version_L%22_%286LA-AAZH26-AWXLB%28L%29%29_interior.jpg",
     "kind": "interior",
     "credit": "Tokumeigakarinoaoshima",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File%3ALexus_NX_450h%2B_%22version_L%22_(6LA-AAZH26-AWXLB(L))_interior.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Base NX 250 dropped for 2026; lineup now starts with the new-for-2026 NX 350h FWD hybrid (cheapest trim at $44,175), running through NX 350, NX 350h AWD, and NX 450h+ plug-in hybrid, each in Standard/Premium/Luxury/F Sport Handling grades (12 trims total; a representative subset is shown). Destination fee is $1,395. NX 450h+ MPGe/EV-range figures are manufacturer-projected, not yet EPA-certified.",
  "sources": [
   {
    "label": "2026 NX grades & drivetrain lineup",
    "url": "https://pressroom.lexus.com/2026-lexus-nx-adds-grades-and-drivetrain/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy (NX 350 AWD)",
    "url": "https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=49512",
    "site": "fueleconomy.gov"
   },
   {
    "label": "EPA fuel economy (NX 350h AWD)",
    "url": "https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=49511",
    "site": "fueleconomy.gov"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Atomic Silver",
     "hex": "#C4C6C8"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Copper Crest",
     "hex": "#8B5A45"
    },
    {
     "name": "Infrared",
     "hex": "#B8352E"
    },
    {
     "name": "Nori Green Pearl",
     "hex": "#2E3B2E"
    },
    {
     "name": "Grecian Water",
     "hex": "#7FA6A3"
    },
    {
     "name": "Ultra White",
     "hex": "#F5F5F0"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Palomino",
     "hex": "#C9A876",
     "tone": "light"
    },
    {
     "name": "Macadamia",
     "hex": "#D9C4A0",
     "tone": "light"
    },
    {
     "name": "Rioja Red",
     "hex": "#7A1F2B",
     "tone": "dark"
    }
   ]
  }
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
  "priceFrom": 52775,
  "priceTo": 73410,
  "trims": [
   {
    "name": "RX 350",
    "msrp": 52775,
    "features": [
     "275-hp turbocharged 2.4L four-cylinder",
     "12.3-inch multi-information display",
     "Wireless phone charging",
     "Lexus Safety System+ 3.0"
    ]
   },
   {
    "name": "RX 350 AWD F SPORT Handling",
    "msrp": 61550,
    "features": [
     "Sport-tuned adaptive suspension",
     "F SPORT badging & mesh grille",
     "Heated/ventilated F SPORT seats"
    ]
   },
   {
    "name": "RX 350h Luxury",
    "msrp": 65795,
    "features": [
     "246-hp hybrid powertrain, AWD standard",
     "Semi-aniline leather",
     "Panoramic roof"
    ]
   },
   {
    "name": "RX 500h F SPORT Performance",
    "msrp": 68450,
    "features": [
     "366-hp performance hybrid with DIRECT4 AWD",
     "Exclusive 21-inch wheels with Michelin Pilot Sport tires",
     "14-inch touchscreen",
     "Panoramic moonroof"
    ]
   },
   {
    "name": "RX 450h+ Luxury",
    "msrp": 73410,
    "features": [
     "38-mile electric-only range, 85 MPGe",
     "6.6 kW onboard charger (~2.5-hour full charge)",
     "Mark Levinson audio",
     "Semi-aniline leather"
    ]
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
    "hp": 246,
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
    "mpgCombined": 85,
    "evRangeMi": 38
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
   "groundClearanceIn": 8
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
   "Four powertrains incl. 38-mi plug-in hybrid",
   "Mark Levinson audio",
   "Panoramic roof",
   "Head-up display",
   "Heated & ventilated seats",
   "Digital key",
   "Advanced Park",
   "Wireless phone charging standard lineup-wide for 2026"
  ],
  "towingLb": 3500,
  "image": {
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus_RX_500h_F_Sport_Performance_(TALH17)_1X7A7076.jpg",
   "credit": "Alexander-93",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/e/ee/Lexus_RX_500h_F_Sport_Performance_TALH17_DIRECT-4_interior.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File%3ALexus_RX_500h_F_Sport_Performance_TALH17_DIRECT-4_interior.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Best-selling Lexus, offered in 7 grades (Standard, Premium, Premium+, F SPORT Design, F SPORT Handling, Luxury, F SPORT Performance) across 4 powertrains. Destination fee is $1,550; priceFrom/priceTo shown are ex-destination base prices. RX 450h+ plug-in offers 38 miles EV range and 85 MPGe.",
  "sources": [
   {
    "label": "2026 RX pricing & full lineup",
    "url": "https://pressroom.lexus.com/2026-lexus-rx-extending-the-range/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&year1=2026&year2=2026&make=Lexus&baseModel=RX&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 RX research & pricing",
    "url": "https://www.cars.com/research/lexus-rx_350-2026/",
    "site": "cars.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Ultra White",
     "hex": "#F5F5F0"
    },
    {
     "name": "Eminent White Pearl",
     "hex": "#EFEEE9"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Iridium",
     "hex": "#9EA0A1"
    },
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Matador Red Mica",
     "hex": "#8C1D2C"
    },
    {
     "name": "Copper Crest",
     "hex": "#8B5A45"
    },
    {
     "name": "Nori Green Pearl",
     "hex": "#2E3B2E"
    },
    {
     "name": "Nightfall Mica",
     "hex": "#1B2A3C"
    },
    {
     "name": "Incognito (F SPORT)",
     "hex": "#4A4A4A"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Birch",
     "hex": "#E8E2D5",
     "tone": "light"
    },
    {
     "name": "Palomino",
     "hex": "#C9A876",
     "tone": "light"
    },
    {
     "name": "Macadamia",
     "hex": "#D9C4A0",
     "tone": "light"
    },
    {
     "name": "Peppercorn",
     "hex": "#4A3F3A",
     "tone": "dark"
    },
    {
     "name": "Rioja Red",
     "hex": "#7A1F2B",
     "tone": "dark"
    }
   ]
  }
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
  "priceFrom": 46000,
  "priceTo": 57000,
  "trims": [
   {
    "name": "RZ 350e",
    "msrp": 46000,
    "features": [
     "221-hp single-motor FWD",
     "301-mile EPA range (18-inch wheels)",
     "Native NACS charging port",
     "14-inch touchscreen"
    ]
   },
   {
    "name": "RZ 350e Premium",
    "msrp": 48200,
    "features": [
     "Panoramic glass roof",
     "Hands-free power liftgate",
     "360-degree camera"
    ]
   },
   {
    "name": "RZ 450e AWD",
    "msrp": 49500,
    "features": [
     "308-hp dual-motor AWD (DIRECT4)",
     "264-mile EPA range",
     "Optional $1,750 dealer performance upgrade to 375 hp"
    ]
   },
   {
    "name": "RZ 450e Luxury AWD",
    "msrp": 57000,
    "features": [
     "Ultrasuede interior",
     "Mark Levinson 13-speaker audio",
     "10-inch head-up display",
     "Advanced Park"
    ]
   },
   {
    "name": "RZ 550e F SPORT AWD",
    "msrp": 57000,
    "features": [
     "402-hp dual-motor AWD, most powerful RZ",
     "229-mile EPA range (20-inch wheels)",
     "M Mode virtual 8-speed paddle-shift simulation",
     "Black Ultrasuede interior with blue contrast stitching",
     "Exclusive Wind exterior color"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "ev",
    "engine": "Single-motor FWD (RZ 350e)",
    "hp": 221,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 301
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (RZ 450e)",
    "hp": 308,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 264
   },
   {
    "type": "ev",
    "engine": "Dual-motor AWD (RZ 550e F SPORT)",
    "hp": 402,
    "transmission": "1-speed direct",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": null,
    "evRangeMi": 229
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus_RZ_450e_(XEBM15)_1X7A0836.jpg",
   "credit": "Alexander-93",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/b/b9/Lexus_RZ_450e%22F_SPORT_Performance%22_%28ZAA-XEBM15-AWDLS%28T%29%29_interior.jpg",
     "kind": "interior",
     "credit": "Tokumeigakarinoaoshima",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File%3ALexus_RZ_450e%22F_SPORT_Performance%22_(ZAA-XEBM15-AWDLS(T))_interior.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Significantly updated for 2026: larger 74.69 kWh battery (76.96 kWh on 550e F SPORT), native NACS charging port (first Lexus BEV with native NACS; CCS/J1772 adapter included), and the new 402-hp RZ 550e F SPORT flagship with M Mode paddle-shift simulation. 6 total trims across 3 power levels. Destination fee is $1,395; priceFrom/priceTo shown are ex-destination base prices.",
  "sources": [
   {
    "label": "2026 RZ full lineup, power & pricing",
    "url": "https://pressroom.lexus.com/2026-lexus-rz-adds-more-power-and-performance-2/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA range & efficiency",
    "url": "https://www.fueleconomy.gov/feg/bymake/Lexus2026.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "NACS charging rollout",
    "url": "https://pressroom.toyota.com/toyotas-nacs-migration-is-about-more-than-just-the-charging-plug/",
    "site": "pressroom.toyota.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Oxygen White",
     "hex": "#F0EFEA"
    },
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Copper Crest",
     "hex": "#8B5A45"
    },
    {
     "name": "Ether",
     "hex": "#C8C6BE"
    },
    {
     "name": "Iridium",
     "hex": "#8A8D8F"
    },
    {
     "name": "Wind (F SPORT exclusive)",
     "hex": "#D9D5C9"
    }
   ],
   "interior": [
    {
     "name": "Dapple Gray",
     "hex": "#9C9691",
     "tone": "light"
    },
    {
     "name": "Palomino and Macadamia",
     "hex": "#C9A876",
     "tone": "light"
    },
    {
     "name": "Thunderstorm",
     "hex": "#3A3F45",
     "tone": "dark"
    },
    {
     "name": "Black Ultrasuede with blue stitching (F SPORT exclusive)",
     "hex": "#1C1C1C",
     "tone": "dark"
    }
   ]
  }
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
  "priceFrom": 55640,
  "priceTo": 79510,
  "trims": [
   {
    "name": "TX 350",
    "msrp": 55640,
    "features": [
     "275-hp turbocharged 2.4L four-cylinder, FWD standard",
     "Tri-zone climate control",
     "8-passenger seating"
    ]
   },
   {
    "name": "TX 350 AWD",
    "msrp": 57240,
    "features": [
     "AWD standard"
    ]
   },
   {
    "name": "TX 350 Luxury AWD",
    "msrp": 62390,
    "features": [
     "Semi-aniline leather",
     "Panoramic roof",
     "Digital rearview mirror"
    ]
   },
   {
    "name": "TX 500h F SPORT Performance Luxury AWD",
    "msrp": 72310,
    "features": [
     "366-hp performance hybrid",
     "F SPORT-tuned suspension",
     "Head-up display"
    ]
   },
   {
    "name": "TX 550h+ Luxury AWD",
    "msrp": 79510,
    "features": [
     "Plug-in hybrid V6 with 33-mile EV range",
     "Second-row captain's chairs",
     "Mark Levinson audio"
    ]
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
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20.2,
   "cargoMaxCuFt": 97,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus_TX_550h%2B_(2024)_(53626567768).jpg",
   "credit": "Charles from Port Chester, New York"
  },
  "confidence": "high",
  "notes": "Three-row Lexus based on the Grand Highlander platform, 10 total trims across TX 350/TX 500h F SPORT Performance/TX 550h+ (representative subset shown). TX 550h+'s PHEV powertrain uses a 3.5L V6 (not a 4-cylinder). Destination fee is $1,450; priceFrom/priceTo shown are ex-destination base prices.",
  "sources": [
   {
    "label": "2026 TX pricing guide",
    "url": "https://carbuzz.com/2026-lexus-tx-pricing/",
    "site": "carbuzz.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Lexus_TX.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 TX pricing analysis",
    "url": "https://www.motor1.com/features/770938/2026-lexus-prices/",
    "site": "motor1.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Wind Chill Pearl",
     "hex": "#EFEEE9"
    },
    {
     "name": "Celestial Silver Metallic",
     "hex": "#B8B9BB"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Caviar",
     "hex": "#1C1C1C"
    },
    {
     "name": "Nightfall Mica",
     "hex": "#1B2A3C"
    },
    {
     "name": "Incognito (F SPORT)",
     "hex": "#4A4A4A"
    },
    {
     "name": "Matador Red Mica",
     "hex": "#8C1D2C"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Birch",
     "hex": "#E8E2D5",
     "tone": "light"
    },
    {
     "name": "Peppercorn",
     "hex": "#4A3F3A",
     "tone": "dark"
    }
   ]
  }
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
  "priceTo": 45375,
  "trims": [
   {
    "name": "UX 300h",
    "msrp": 36955,
    "features": [
     "196-hp hybrid powertrain",
     "8-inch touchscreen",
     "Lexus Safety System+ 3.0"
    ]
   },
   {
    "name": "UX 300h Premium",
    "msrp": 40225,
    "features": [
     "Heated & ventilated front seats",
     "Panoramic view monitor",
     "Power moonroof",
     "Hands-free power liftgate"
    ]
   },
   {
    "name": "UX 300h F Sport Design",
    "msrp": 40790,
    "features": [
     "F Sport styling & badging",
     "New for 2026"
    ]
   },
   {
    "name": "UX 300h F Sport Handling",
    "msrp": 45375,
    "features": [
     "Adaptive Variable Suspension",
     "Heated steering wheel",
     "Circuit Red interior available"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "hybrid",
    "engine": "2.0L I4 hybrid (FWD)",
    "hp": 196,
    "transmission": "eCVT",
    "manualAvailable": false,
    "drive": [
     "FWD"
    ],
    "mpgCombined": 43,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.0L I4 hybrid (AWD)",
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
   "lengthIn": 177,
   "widthIn": 72.4,
   "heightIn": 59.8,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3605,
   "groundClearanceIn": 6.4
  },
  "interior": {
   "passengerVolumeCuFt": 84,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Lexus_UX_300h_MZAH11_Sonic_Quartz.jpg",
   "credit": "Ethan Llamas"
  },
  "confidence": "high",
  "notes": "Hybrid-only (UX 300h, 196 hp) since 2025. New-for-2026 F Sport Design grade added between Premium and F Sport Handling (4 trims total). Destination fee is $1,295. Smallest Lexus crossover.",
  "sources": [
   {
    "label": "2026 UX 300h hybrid hatchback announcement",
    "url": "https://pressroom.lexus.com/2026-lexus-ux-300h-a-powerful-hybrid-hatchback/",
    "site": "pressroom.lexus.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Lexus_UX.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 UX pricing",
    "url": "https://www.cars.com/articles/how-much-is-the-2026-lexus-ux-300h-518679/",
    "site": "cars.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Caviar (F Sport)",
     "hex": "#1C1C1C"
    },
    {
     "name": "Cloudburst Gray",
     "hex": "#8A8D8F"
    },
    {
     "name": "Copper Crest",
     "hex": "#8B5A45"
    },
    {
     "name": "Iridium",
     "hex": "#9EA0A1"
    },
    {
     "name": "Nori Green Pearl",
     "hex": "#2E3B2E"
    },
    {
     "name": "Ultra White",
     "hex": "#F5F5F0"
    },
    {
     "name": "Ultrasonic Blue Mica 2.0",
     "hex": "#1B3A5C"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Palomino",
     "hex": "#C9A876",
     "tone": "light"
    },
    {
     "name": "Birch",
     "hex": "#E8E2D5",
     "tone": "light"
    },
    {
     "name": "Lapis",
     "hex": "#2A3F5F",
     "tone": "dark"
    },
    {
     "name": "Circuit Red (F Sport Handling exclusive)",
     "hex": "#7A1F2B",
     "tone": "dark"
    }
   ]
  }
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
    "msrp": 56910,
    "features": [
     "Standard rear-wheel drive with optional all-wheel drive",
     "13.2-inch center touchscreen with Lincoln Digital Experience",
     "Heated and ventilated front seats",
     "Adaptive suspension",
     "BlueCruise hands-free highway driving capability"
    ]
   },
   {
    "name": "Reserve",
    "msrp": 66730,
    "features": [
     "Illumination Package",
     "Adaptive Pixel LED headlamps",
     "Dynamic Handling Package",
     "Panoramic Vista Roof",
     "Premium leather seating surfaces",
     "Second-row 5.8-inch rear touchscreen"
    ]
   },
   {
    "name": "Black Label",
    "msrp": 85910,
    "features": [
     "Standard all-wheel drive",
     "Exclusive interior themes Invitation, Flight and Moonbeam",
     "Perfect Position front seats",
     "Revel Ultima 3D Audio System with 28 speakers",
     "Black Label owner privileges and services"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.0L twin-turbocharged V6",
    "hp": 383,
    "transmission": "10-speed SelectShift automatic",
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
   "lengthIn": 199.7,
   "widthIn": 79.6,
   "heightIn": 69.2,
   "wheelbaseIn": 119.1,
   "curbWeightLb": 4745,
   "groundClearanceIn": 8.5
  },
  "interior": {
   "passengerVolumeCuFt": 140.6,
   "cargoCuFt": 16.5,
   "cargoMaxCuFt": 77.7,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
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
  "towingLb": 5000,
  "image": {
   "remote": "https://upload.wikimedia.org/wikipedia/commons/d/de/2020_Lincoln_Aviator_Reserve_AWD%2C_front_left%2C_10-28-2022.jpg",
   "credit": "Wikimedia Commons"
  },
  "confidence": "high",
  "notes": "For 2026 the Aviator is offered exclusively with the 3.0L twin-turbo V6 rated at 383 hp and 415 lb-ft paired to a 10-speed automatic. The former Grand Touring plug-in hybrid is discontinued so no electrified variant remains. Premiere and Reserve come standard with rear-wheel drive and offer optional all-wheel drive while Black Label includes standard all-wheel drive. EPA combined economy is 21 mpg for RWD and 20 mpg for AWD. Trim lineup carries over as Premiere, Reserve and Black Label. The cabin uses a 13.2-inch touchscreen but retains partial physical climate controls plus a volume control for easier operation. Note that Edmunds lists 400 hp while Lincoln and KBB official specs state 383 hp.",
  "colors": {
   "exterior": [
    {
     "name": "Infinite Black Metallic",
     "hex": "#141516"
    },
    {
     "name": "Pristine White Metallic Tri-Coat",
     "hex": "#f4f4f0"
    },
    {
     "name": "Harbor Gray",
     "hex": "#6f7377"
    },
    {
     "name": "Whisper Blue Metallic",
     "hex": "#a9b6c4"
    },
    {
     "name": "Red Carpet Metallic",
     "hex": "#7c1d24"
    },
    {
     "name": "Cenote Green (Black Label)",
     "hex": "#33493a"
    }
   ],
   "interior": [
    {
     "name": "Onyx",
     "hex": "#1c1c1c",
     "tone": "dark"
    },
    {
     "name": "Medium Light Space Gray",
     "hex": "#b6b7b3",
     "tone": "light"
    },
    {
     "name": "Harvest Bronze",
     "hex": "#9a7b4f",
     "tone": "light"
    },
    {
     "name": "Hot Chocolate",
     "hex": "#4a3627",
     "tone": "dark"
    },
    {
     "name": "Black Label Invitation",
     "hex": "#ddd6c8",
     "tone": "light"
    },
    {
     "name": "Black Label Flight",
     "hex": "#2b3138",
     "tone": "dark"
    },
    {
     "name": "Black Label Moonbeam",
     "hex": "#c9cebc",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Aviator Premiere specs — Lincoln.com",
    "url": "https://www.lincoln.com/luxury-suvs/aviator/models/premiere/",
    "site": "lincoln.com"
   },
   {
    "label": "EPA — fueleconomy.gov 2026 Aviator RWD",
    "url": "https://www.fueleconomy.gov/feg/Find.do?action=sbs&id=49887",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Aviator specs — KBB",
    "url": "https://www.kbb.com/lincoln/aviator/2026/specs/",
    "site": "kbb.com"
   },
   {
    "label": "2026 Aviator review and ratings — Edmunds",
    "url": "https://www.edmunds.com/lincoln/aviator/2026/",
    "site": "edmunds.com"
   },
   {
    "label": "2026 Aviator safety — NHTSA",
    "url": "https://www.nhtsa.gov/vehicle/2026/LINCOLN/AVIATOR",
    "site": "nhtsa.gov"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": "https://www.nhtsa.gov/vehicle/2026/LINCOLN/AVIATOR"
   },
   "owner": {
    "score": 4.4,
    "scale": 5,
    "count": 38,
    "source": "https://www.edmunds.com/lincoln/aviator/2026/"
   },
   "expert": {
    "score": 6.5,
    "scale": 10,
    "source": "https://www.edmunds.com/lincoln/aviator/2026/"
   }
  }
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
    "msrp": 39985,
    "features": [
     "2.0L turbocharged gas I4",
     "8-speed automatic",
     "FWD standard (AWD available)",
     "13.2-inch SYNC 4 touchscreen",
     "12.3-inch digital cluster",
     "dual-zone automatic climate control",
     "wireless Apple CarPlay and Android Auto"
    ]
   },
   {
    "name": "Reserve",
    "msrp": 47640,
    "features": [
     "2.0L turbocharged gas I4",
     "leather-trimmed seating",
     "14-speaker Revel audio",
     "heated and ventilated front seats",
     "hands-free liftgate",
     "wireless charging pad"
    ]
   },
   {
    "name": "Grand Touring",
    "msrp": 54365,
    "features": [
     "2.5L plug-in hybrid powertrain",
     "standard all-wheel drive",
     "27 miles EPA electric range",
     "onboard charging",
     "Phone As A Key",
     "adaptive suspension"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L turbocharged I4",
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
    "engine": "2.5L I4 plug-in hybrid",
    "hp": 266,
    "transmission": "eCVT (continuously variable)",
    "manualAvailable": false,
    "drive": [
     "AWD"
    ],
    "mpgCombined": 76,
    "evRangeMi": 27
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 181.4,
   "widthIn": 74.3,
   "heightIn": 64.1,
   "wheelbaseIn": 106.7,
   "curbWeightLb": 3685,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": 102.5,
   "cargoCuFt": 27.6,
   "cargoMaxCuFt": 57.6,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
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
  "notes": "The 2026 Corsair is the final model year. Production at Louisville Assembly ended in December 2025 as the plant retools for EV output alongside the discontinued Ford Escape and Lincoln.com now lists the 2026 Corsair as sold out. Two powertrains were offered. The 250-hp 2.0L turbo gas four came with FWD or AWD and the 266-hp 2.5L Grand Touring plug-in hybrid was AWD only with 27 miles of electric range and a 76 MPGe combined rating. The cabin pairs a 13.2-inch SYNC 4 touchscreen with retained physical climate and volume controls. IIHS rated the updated side crash test only Marginal for 2026 so it is not a Top Safety Pick and NHTSA had no published 2026 star rating at research time.",
  "colors": {
   "exterior": [
    {
     "name": "Infinite Black Metallic",
     "hex": "#17181C"
    },
    {
     "name": "Crystal White Metallic",
     "hex": "#E6E7E4"
    },
    {
     "name": "Pristine White Metallic Tri-Coat",
     "hex": "#F3F2EE"
    },
    {
     "name": "Red Carpet Metallic",
     "hex": "#7A1B1F"
    },
    {
     "name": "Harbor Gray",
     "hex": "#5C6268"
    },
    {
     "name": "Whisper Blue Metallic",
     "hex": "#A9B7C2"
    },
    {
     "name": "Asher Gray Metallic",
     "hex": "#8A8D8F"
    }
   ],
   "interior": [
    {
     "name": "Ebony",
     "hex": "#1C1B1A",
     "tone": "dark"
    },
    {
     "name": "Light Smoked Truffle",
     "hex": "#C9BBA6",
     "tone": "light"
    },
    {
     "name": "Medium Smoked Truffle",
     "hex": "#7A6E5F",
     "tone": "dark"
    },
    {
     "name": "Eternal Red",
     "hex": "#6E1E22",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "Lincoln.com — 2026 Corsair",
    "url": "https://www.lincoln.com/luxury-suvs/corsair/",
    "site": "lincoln.com"
   },
   {
    "label": "EPA — fueleconomy.gov 2026 Corsair",
    "url": "https://fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Lincoln&baseModel=Corsair&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Edmunds — 2026 Corsair specs",
    "url": "https://www.edmunds.com/lincoln/corsair/2026/features-specs/",
    "site": "edmunds.com"
   },
   {
    "label": "IIHS — 2026 Corsair ratings",
    "url": "https://www.iihs.org/ratings/vehicle/lincoln/corsair-4-door-suv/2026",
    "site": "iihs.org"
   },
   {
    "label": "Ford Authority — Escape and Corsair production ends",
    "url": "https://fordauthority.com/2025/12/ford-escape-lincoln-corsair-production-ends-this-week/",
    "site": "fordauthority.com"
   }
  ]
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
  "priceTo": 77660,
  "trims": [
   {
    "name": "Premiere",
    "msrp": 53995,
    "features": [
     "2.0L turbocharged I-4 with 250 hp and AWD standard",
     "48-inch panoramic display with 11.1-inch center touchscreen",
     "Lincoln Co-Pilot360 Drive 2.0 with adaptive cruise and 360-degree camera",
     "Power-adjustable heated front seats"
    ]
   },
   {
    "name": "Reserve",
    "msrp": 63595,
    "features": [
     "Genuine leather upholstery",
     "Panoramic Vista Roof",
     "Ventilated front seats",
     "Adaptive suspension"
    ]
   },
   {
    "name": "Black Label",
    "msrp": 77660,
    "features": [
     "Curated interior theme packages with premium materials",
     "28-speaker Revel Ultima 3D audio",
     "BlueCruise hands-free highway driving standard",
     "Black Label member privileges and concierge service"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "2.0L Turbocharged I-4",
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
    "engine": "2.0L Turbocharged I-4 Hybrid with 100 kW electric motor",
    "hp": 310,
    "transmission": "eCVT (continuously variable automatic)",
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
   "lengthIn": 193.2,
   "widthIn": 76.9,
   "heightIn": 68.2,
   "wheelbaseIn": 114.2,
   "curbWeightLb": 4301,
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 36.4,
   "cargoMaxCuFt": 71.3,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "none",
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
  "notes": "The 2026 Nautilus carries over the 2024 redesign with three trims (Premiere 53995, Reserve 63595, Black Label 77660) and pricing essentially unchanged from 2025. All trims are AWD standard and every trim can be ordered as a hybrid for roughly 3000 dollars more (Premiere Hybrid starts near 56995). Gas 2.0L turbo makes 250 hp and rates 21/29/24 mpg; the 2.0L turbo hybrid makes 310 hp total system output and rates 29/31/30 mpg per fueleconomy.gov. Ergonomics center on the 48-inch panoramic display paired with an 11.1-inch lower touchscreen that handles most climate and comfort functions, so dedicated physical climate buttons are absent, though a physical audio volume control is retained. Standard tire kit is an inflator and sealant kit rather than a spare, with a spare available as an option. IIHS names it a Top Safety Pick; a current NHTSA overall star rating was not verifiable and is omitted.",
  "colors": {
   "exterior": [
    {
     "name": "White Platinum",
     "hex": "#EDEEEA"
    },
    {
     "name": "Silver Radiance",
     "hex": "#C9CBCC"
    },
    {
     "name": "Whisper Blue",
     "hex": "#B9C4CC"
    },
    {
     "name": "Gray Matter",
     "hex": "#6E7276"
    },
    {
     "name": "Chroma Caviar Dark Gray",
     "hex": "#34373B"
    },
    {
     "name": "Red Carpet",
     "hex": "#6D1A1F"
    },
    {
     "name": "Infinite Black",
     "hex": "#0B0C0E"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#16171B",
     "tone": "dark"
    },
    {
     "name": "Medium Light Space Gray",
     "hex": "#9A9EA3",
     "tone": "light"
    },
    {
     "name": "Hot Chocolate",
     "hex": "#4A3220",
     "tone": "dark"
    },
    {
     "name": "Chalet",
     "hex": "#D8CDBB",
     "tone": "light"
    },
    {
     "name": "Aurora",
     "hex": "#B7C0C8",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "Lincoln official 2026 Nautilus",
    "url": "https://www.lincoln.com/luxury-suvs/nautilus/",
    "site": "lincoln.com"
   },
   {
    "label": "EPA — fueleconomy.gov",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Lincoln&baseModel=Nautilus&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "IIHS 2026 Nautilus ratings",
    "url": "https://www.iihs.org/ratings/vehicle/lincoln/nautilus-4-door-suv/2026",
    "site": "iihs.org"
   },
   {
    "label": "2026 Nautilus powertrains outlined",
    "url": "https://fordauthority.com/2025/08/2026-lincoln-nautilus-all-powertrains-outlined/",
    "site": "fordauthority.com"
   },
   {
    "label": "2026 Nautilus trims and pricing",
    "url": "https://trimatlas.com/compare/lincoln/nautilus/2026/",
    "site": "trimatlas.com"
   }
  ],
  "ratings": {
   "safety": {
    "iihs": "Top Safety Pick",
    "appliesTo": "2026",
    "source": "https://www.iihs.org/ratings/vehicle/lincoln/nautilus-4-door-suv/2026"
   }
  }
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
    "msrp": 91995,
    "features": [
     "Standard 4x4",
     "3.5L twin-turbo V6 (432 hp)",
     "48-inch panoramic display",
     "11.1-inch center touchscreen",
     "14-speaker audio",
     "Lincoln Connectivity Package (5G, Wi-Fi hotspot)"
    ]
   },
   {
    "name": "Reserve",
    "msrp": 101995,
    "features": [
     "Panoramic Vista Roof with power sunshade",
     "Power-deployable running boards",
     "Revel Ultima 3D Audio (28 speakers)",
     "Lincoln Rejuvenate wellness experience",
     "Digital Scent",
     "Premium leather first/second rows"
    ]
   },
   {
    "name": "Black Label",
    "msrp": 118995,
    "features": [
     "Curated interior themes (Atmospheric, Enlighten, Invitation)",
     "Exclusive premium colors",
     "Black Label member privileges",
     "Highest-tier appointments"
    ]
   },
   {
    "name": "Premiere L",
    "msrp": 93995,
    "features": [
     "Extended long-wheelbase body (221.9 in)",
     "Standard 4x4",
     "Premiere equipment level"
    ]
   },
   {
    "name": "Reserve L",
    "msrp": 104995,
    "features": [
     "Extended long-wheelbase body",
     "Reserve equipment level",
     "Revel Ultima 3D Audio (28 speakers)"
    ]
   },
   {
    "name": "Black Label L",
    "msrp": 121995,
    "features": [
     "Extended long-wheelbase body",
     "Curated interior themes",
     "Black Label member privileges"
    ]
   }
  ],
  "powertrains": [
   {
    "type": "gas",
    "engine": "3.5L twin-turbo V6",
    "hp": 432,
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
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 210,
   "widthIn": 80,
   "heightIn": 78,
   "wheelbaseIn": 122.5,
   "curbWeightLb": 5936,
   "groundClearanceIn": 8.9
  },
  "interior": {
   "passengerVolumeCuFt": 195,
   "cargoCuFt": 22.9,
   "cargoMaxCuFt": 107,
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
  "notes": "Redesigned generation (launched 2025) built around a 48-inch panoramic dash display plus an 11.1-inch center touchscreen. For 2026 Lincoln added a new base Premiere trim that drops entry pricing roughly 8000 dollars below the former Reserve starting point. Each trim (Premiere Reserve Black Label) is offered in a standard body and an extended L body that runs about 2000 to 3000 dollars more per trim. Every model uses a 3.5L twin-turbo V6 rated at 432 hp and 510 lb-ft with a 10-speed automatic and standard 4x4. Destination is 2595 dollars and is not included in the listed MSRPs. Ergonomically the cabin relies heavily on screens; a large console volume knob remains but climate and most audio functions moved onto the touchscreen, a point several reviewers criticized.",
  "colors": {
   "exterior": [
    {
     "name": "Infinite Black Metallic",
     "hex": "#0B0B0D"
    },
    {
     "name": "Pristine White Metallic Tri-Coat",
     "hex": "#F3F4F5"
    },
    {
     "name": "Crystal White Metallic",
     "hex": "#E9EAEC"
    },
    {
     "name": "Star White Metallic Tri-Coat",
     "hex": "#ECEBE4"
    },
    {
     "name": "Gray Mist Metallic",
     "hex": "#9DA1A4"
    },
    {
     "name": "Starlight Gray",
     "hex": "#7B7F82"
    },
    {
     "name": "Flight Blue Metallic",
     "hex": "#2E4A63"
    },
    {
     "name": "Chroma Caviar Dark Gray Metallic",
     "hex": "#2B2D30"
    },
    {
     "name": "Sunrise Copper Metallic Pearlcoat",
     "hex": "#8A5A3B"
    }
   ],
   "interior": [
    {
     "name": "Black Onyx",
     "hex": "#1A1A1C",
     "tone": "dark"
    },
    {
     "name": "Medium Light Space Gray",
     "hex": "#A9ABAD",
     "tone": "light"
    },
    {
     "name": "Hot Chocolate",
     "hex": "#4A2E22",
     "tone": "dark"
    },
    {
     "name": "Salt Crystal Gray",
     "hex": "#C9C7C0",
     "tone": "light"
    },
    {
     "name": "Warm Horizon",
     "hex": "#B99C7A",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Lincoln Navigator official page",
    "url": "https://www.lincoln.com/luxury-suvs/navigator/2026/",
    "site": "lincoln.com"
   },
   {
    "label": "EPA — fueleconomy.gov",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Lincoln&baseModel=Navigator&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Navigator prices, specs and expert rating",
    "url": "https://www.edmunds.com/lincoln/navigator/2026/",
    "site": "edmunds.com"
   },
   {
    "label": "2026 Navigator lineup new trim and pricing",
    "url": "https://fordauthority.com/2025/12/2026-lincoln-navigator-lineup-features-new-trim-higher-prices/",
    "site": "fordauthority.com"
   }
  ],
  "ratings": {
   "expert": {
    "score": 6.3,
    "scale": 10,
    "source": "https://www.edmunds.com/lincoln/navigator/2026/"
   }
  }
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
   "heightIn": 48,
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
   "cargoMaxCuFt": 112,
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
   "widthIn": 77,
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
   "widthIn": 77,
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
   "lengthIn": 173,
   "widthIn": 70.7,
   "heightIn": 61.7,
   "wheelbaseIn": 104.4,
   "curbWeightLb": 3375,
   "groundClearanceIn": 8
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/c2/2025_Mazda_CX-5_2.5_AWD_Turbo_interior.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Mazda_CX-5_2.5_AWD_Turbo_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/b/b3/2025_Mazda_CX-5_2.5_Skyactiv_AWD_Turbo_in_Machine_Gray%2C_front_left.jpg",
     "kind": "exterior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Mazda_CX-5_2.5_Skyactiv_AWD_Turbo_in_Machine_Gray,_front_left.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "All-new third generation for 2026, on sale from early 2026; larger than before, AWD standard, single 187-hp powertrain at launch (Skyactiv-Z hybrid expected for 2027). New touchscreen-centric cabin drops Mazda's rotary commander and physical climate knobs. Wheelbase/curb weight not yet in this dataset; some published specs still preliminary.",
  "sources": [
   {
    "label": "2026 pricing & trims",
    "url": "https://www.mazdausa.com/vehicles/cx-5",
    "site": "mazdausa.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Mazda_CX-5.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/mazda/cx-5/2026/",
    "site": "edmunds.com"
   }
  ]
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
   "groundClearanceIn": 8
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
   "groundClearanceIn": 8
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
   "widthIn": 76,
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
   "widthIn": 76,
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
   "lengthIn": 182,
   "widthIn": 78,
   "heightIn": 46,
   "wheelbaseIn": 104.5,
   "curbWeightLb": 3084,
   "groundClearanceIn": 4
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
   "lengthIn": 187,
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
   "remote": "https://commons.wikimedia.org/wiki/Special:FilePath/Mercedes-Benz_W206_C_300_4MATIC_AMG_Line_Polar_White_(14).jpg",
   "credit": "Damian B Oh"
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
   "widthIn": 73,
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
   "lengthIn": 191,
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
   "cargoCuFt": 19,
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
   "groundClearanceIn": 6
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
   "cargoCuFt": 22,
   "cargoMaxCuFt": 63,
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
   "groundClearanceIn": 6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 23.5,
   "cargoMaxCuFt": 74,
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
   "lengthIn": 182,
   "widthIn": 76,
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
   "cargoCuFt": 24,
   "cargoMaxCuFt": 62,
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
   "groundClearanceIn": 8
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
   "lengthIn": 205,
   "widthIn": 77,
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
   "wheelbaseIn": 144,
   "curbWeightLb": 5313,
   "groundClearanceIn": 6.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 319,
   "cargoMaxCuFt": 533,
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
   "groundClearanceIn": 5
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
   "wheelbaseIn": 106,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/62/2023_Nissan_Altima_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Nissan_Altima_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/2023_Nissan_Altima_SR_in_Brilliant_Silver_Metallic%2C_front_right.jpg",
     "kind": "exterior",
     "credit": "Mr.choppers",
     "license": "CC BY-SA 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Nissan_Altima_SR_in_Brilliant_Silver_Metallic,_front_right.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Final model year; production expected to end mid-2026. Lineup cut to SV and SR grades only (S and SL dropped).",
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API — 2026 Nissan Altima 4DR AWD (VehicleId 21064), OverallRating 5",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21064",
     "site": "NHTSA"
    }
   },
   "owner": {
    "score": 4,
    "scale": 5,
    "count": 27,
    "source": {
     "label": "Edmunds owner reviews — 2026 Nissan Altima (4.0/5, 27 reviews)",
     "url": "https://www.edmunds.com/nissan/altima/2026/",
     "site": "Edmunds"
    }
   },
   "expert": {
    "score": 6.4,
    "scale": 10,
    "source": {
     "label": "Edmunds expert rating — 2026 Nissan Altima (6.4/10)",
     "url": "https://www.edmunds.com/nissan/altima/2026/",
     "site": "Edmunds"
    }
   }
  }
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
   "wheelbaseIn": 126,
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
   "cargoCuFt": 30,
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
   "heightIn": 61,
   "wheelbaseIn": 105.9,
   "curbWeightLb": 3948,
   "groundClearanceIn": null
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 20,
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
   "widthIn": 78,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/63/2026_Nissan_Pathfinder_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Nissan_Pathfinder_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/37/Nissan_Pathfinder_%28R53%29.jpg",
     "kind": "exterior",
     "credit": "Jason Lawrence",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Nissan_Pathfinder_(R53).jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "Refreshed for 2026 (new front styling, upgraded tech). Trim ladder is S, SV, SL, Rock Creek, Platinum; some sources list base S at $38,995 vs Nissan's announced $39,990 start.",
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick+",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API — 2026 Nissan Pathfinder SUV AWD (VehicleId 21066), OverallRating 5",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21066",
     "site": "NHTSA"
    }
   },
   "owner": {
    "score": 4.4,
    "scale": 5,
    "count": 31,
    "source": {
     "label": "Edmunds owner reviews — 2026 Nissan Pathfinder (4.4/5, 31 reviews)",
     "url": "https://www.edmunds.com/nissan/pathfinder/2026/",
     "site": "Edmunds"
    }
   },
   "expert": {
    "score": 6.4,
    "scale": 10,
    "source": {
     "label": "Edmunds expert rating — 2026 Nissan Pathfinder (6.4/10)",
     "url": "https://www.edmunds.com/nissan/pathfinder/2026/",
     "site": "Edmunds"
    }
   }
  }
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
   "lengthIn": 183,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/2025_Nissan_Rogue_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Nissan_Rogue_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/a/ad/2024_Nissan_Rogue_SV_Moonroof_in_Gun_Metallic%2C_front_right%2C_2026-06-14.jpg",
     "kind": "exterior",
     "credit": "Elise240SX",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Nissan_Rogue_SV_Moonroof_in_Gun_Metallic,_front_right,_2026-06-14.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "New Dark Armor appearance trim added between SV and SL for 2026. Plug-in hybrid version sold separately as Rogue Plug-in Hybrid.",
  "sources": [
   {
    "label": "2026 model overview & trims (official model page)",
    "url": "https://www.nissanusa.com/vehicles/crossovers-suvs/rogue.html",
    "site": "www.nissanusa.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Nissan_Rogue.shtml",
    "site": "www.fueleconomy.gov"
   },
   {
    "label": "2026.5 pricing announcement (Nissan newsroom)",
    "url": "https://usa.nissannews.com/en-US/releases/release-2704b0eedba2fa91be91a7ae2e22fbd2",
    "site": "usa.nissannews.com"
   },
   {
    "label": "2026 pricing, specs & expert review",
    "url": "https://www.edmunds.com/nissan/rogue/2026/",
    "site": "www.edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Nissan Rogue (FWD)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21075",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.7,
    "scale": 5,
    "count": 80,
    "source": {
     "label": "KBB consumer reviews — 2026 Nissan Rogue",
     "url": "https://www.kbb.com/nissan/rogue/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.3,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Nissan Rogue",
     "url": "https://www.kbb.com/nissan/rogue/2026/",
     "site": "kbb.com"
    }
   }
  }
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
   "heightIn": 64,
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
   "widthIn": 78,
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
   "groundClearanceIn": 4
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
   "wheelbaseIn": 114,
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
   "lengthIn": 196,
   "widthIn": 78.6,
   "heightIn": 66.4,
   "wheelbaseIn": 119,
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
   "groundClearanceIn": 5
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/c8/2022_Ram_1500_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Ram_1500_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/b/bb/2025_RAM_1500_Limited%2C_front_5.23.25.jpg",
     "kind": "exterior",
     "credit": "Kevauto",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_RAM_1500_Limited,_front_5.23.25.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "5.7L HEMI V8 returns for 2026 alongside the Hurricane sixes; 540-hp RHO off-road flagship included as a trim here. Ramcharger range-extended EV pickup delayed (not included). Dims are crew cab 5'7\" bed. Prices exclude $2,595 destination.",
  "sources": [
   {
    "label": "2026 pricing & trims",
    "url": "https://www.ramtrucks.com/ram-1500.html",
    "site": "ramtrucks.com"
   },
   {
    "label": "Towing",
    "url": "https://www.ramtrucks.com/ram-1500/capability.html",
    "site": "ramtrucks.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Ram_1500.shtml",
    "site": "fueleconomy.gov"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 4,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API - 2026 Ram 1500 crew cab 4WD (VehicleId 20942), OverallRating 4",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20942",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3,
    "scale": 5,
    "count": 60,
    "source": {
     "label": "Edmunds consumer reviews - 2026 Ram 1500 (3.0/5, 60 reviews)",
     "url": "https://www.edmunds.com/ram/1500/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.5,
    "scale": 10,
    "source": {
     "label": "Edmunds expert Rating - 2026 Ram 1500 (7.5/10)",
     "url": "https://www.edmunds.com/ram/1500/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "wheelbaseIn": 136,
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
   "widthIn": 75,
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
   "widthIn": 79,
   "heightIn": 72,
   "wheelbaseIn": 130,
   "curbWeightLb": 6069,
   "groundClearanceIn": 7.9
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 21,
   "cargoMaxCuFt": 68,
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
   "groundClearanceIn": 6
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
   "groundClearanceIn": 6
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12,
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
    "msrp": 40795,
    "features": [
     "2.4L turbo 260-hp boxer, standard Symmetrical AWD",
     "8-passenger seating with 2nd-row bench",
     "StarTex water-repellent upholstery",
     "EyeSight driver assist, tri-zone climate"
    ]
   },
   {
    "name": "Limited",
    "msrp": 47885,
    "features": [
     "Leather-trimmed seats",
     "Ventilated front + heated 2nd-row seats",
     "11.6-inch vertical touchscreen",
     "Power liftgate, LED steering-responsive headlights",
     "20-inch machined-finish alloy wheels"
    ]
   },
   {
    "name": "Limited Bronze Edition",
    "msrp": 48995,
    "features": [
     "Bronze-finish 20-inch alloy wheels",
     "Bronze exterior badging and accents",
     "StarTex upholstery with bronze stitching"
    ]
   },
   {
    "name": "Touring",
    "msrp": 51165,
    "features": [
     "Second-row captain's chairs (7-passenger)",
     "Nappa leather upholstery",
     "Panoramic power moonroof",
     "Harman Kardon 14-speaker audio",
     "360-degree camera, chrome exterior accents"
    ]
   },
   {
    "name": "Onyx Edition Touring",
    "msrp": 51995,
    "features": [
     "Blacked-out badging and exterior trim",
     "Dark-finish 20-inch wheels",
     "Gloss-black accents",
     "Slate Black or Java Brown Nappa leather"
    ]
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
   "widthIn": 76,
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
  "notes": "Pricing, powertrain and trims verified against Subaru's 2026 Ascent pricing release. The earlier 'final model year' claim is not supported for the US market: the Ascent was discontinued in Canada for 2026 but continues in the US. Base combined mpg is 22; trims on 20-inch wheels (Limited/Bronze/Touring/Onyx) are rated 21 combined. The standalone non-Touring Onyx Edition was dropped for 2026.",
  "colors": {
   "exterior": [
    {
     "name": "Crystal White Pearl",
     "hex": "#f2f3f5"
    },
    {
     "name": "Ice Silver Metallic",
     "hex": "#c9ccd1"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#4a4e52"
    },
    {
     "name": "Crystal Black Silica",
     "hex": "#0b0c0e"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1c3d6e"
    },
    {
     "name": "Autumn Green Metallic",
     "hex": "#3c4a3a"
    },
    {
     "name": "Brilliant Bronze Metallic",
     "hex": "#8a6a45"
    },
    {
     "name": "Cinnamon Brown Pearl",
     "hex": "#5a3a2e"
    }
   ],
   "interior": [
    {
     "name": "Black StarTex",
     "hex": "#141414",
     "tone": "dark"
    },
    {
     "name": "Slate Black Nappa leather",
     "hex": "#17181a",
     "tone": "dark"
    },
    {
     "name": "Java Brown Nappa leather",
     "hex": "#3b2a20",
     "tone": "dark"
    },
    {
     "name": "Warm Ivory leather",
     "hex": "#e6dfcf",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Ascent pricing & trims",
    "url": "https://media.subaru.com/pressrelease/2340/subaru-announces-pricing-2026-ascent-3-row-suv",
    "site": "media.subaru.com"
   },
   {
    "label": "EPA fuel economy (2026 Ascent)",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Subaru&baseModel=Ascent&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Ascent model page",
    "url": "https://www.subaru.com/vehicles/ascent",
    "site": "subaru.com"
   }
  ]
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
    "msrp": 35860,
    "features": [
     "2.4L 228-hp flat-4, RWD",
     "TORSEN limited-slip differential",
     "6-speed manual",
     "18-inch wheels, Ultrasuede/leather seating"
    ]
   },
   {
    "name": "Limited (6AT)",
    "msrp": 36710,
    "features": [
     "6-speed automatic with paddle shifters",
     "EyeSight driver assist (automatic only)",
     "25 mpg combined vs 22 for manual"
    ]
   },
   {
    "name": "tS",
    "msrp": 38360,
    "features": [
     "STI-tuned Hitachi dampers",
     "Brembo brakes",
     "Unique wheels",
     "Black upholstery with blue bolster accents (6MT only)"
    ]
   },
   {
    "name": "Series.Yellow",
    "msrp": 39360,
    "features": [
     "Sunrise Yellow paint (limited to 350 units)",
     "Matte-black 18-inch wheels, black badging",
     "Ultrasuede/leather with yellow stitching",
     "Based on tS chassis (6MT only)"
    ]
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
   "groundClearanceIn": 5
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
  "notes": "Verified against Subaru's 2026 BRZ pricing release and fueleconomy.gov. Premium base trim dropped for 2026; lineup starts at Limited. Series.Yellow is a new-for-2026 limited edition (350 units, 6MT only) based on the tS. 2+2 seating. Combined mpg is 22 with the manual, 25 with the automatic (automatic offered on Limited only).",
  "colors": {
   "exterior": [
    {
     "name": "Crystal White Pearl",
     "hex": "#f1f2f4"
    },
    {
     "name": "Ice Silver Metallic",
     "hex": "#c6cbd0"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#44474c"
    },
    {
     "name": "Crystal Black Silica",
     "hex": "#0b0b0d"
    },
    {
     "name": "WR Blue Pearl",
     "hex": "#1b4c9c"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1d3a63"
    },
    {
     "name": "Ignition Red",
     "hex": "#b81824"
    },
    {
     "name": "Sunrise Yellow (Series.Yellow)",
     "hex": "#f5c518"
    }
   ],
   "interior": [
    {
     "name": "Black Ultrasuede/leather",
     "hex": "#17171a",
     "tone": "dark"
    },
    {
     "name": "Black with blue bolster accents (tS)",
     "hex": "#161616",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 BRZ pricing & trims",
    "url": "https://media.subaru.com/pressrelease/2369/subaru-america-announces-pricing-2026-subaru-brz",
    "site": "media.subaru.com"
   },
   {
    "label": "EPA fuel economy (2026 BRZ)",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Subaru_BRZ.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 BRZ colors",
    "url": "https://www.subaru.com/vehicle-info/subaru-brz-colors.html",
    "site": "subaru.com"
   }
  ]
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
    "msrp": 26995,
    "features": [
     "2.5L 180-hp boxer, Symmetrical AWD",
     "8.7-inch ground clearance",
     "Dual 7-inch displays, EyeSight",
     "17-inch steel wheels with covers"
    ]
   },
   {
    "name": "Premium",
    "msrp": 27995,
    "features": [
     "Alloy wheels and roof rails",
     "Heated front seats and mirrors",
     "Blind-Spot Detection with Rear Cross-Traffic Alert",
     "All-Weather package"
    ]
   },
   {
    "name": "Sport",
    "msrp": 30625,
    "features": [
     "Dual-function X-MODE",
     "17-inch dark alloy wheels",
     "Yellow interior accents, StarTex upholstery",
     "Water-repellent seating"
    ]
   },
   {
    "name": "Limited",
    "msrp": 32995,
    "features": [
     "Leather-trimmed seats",
     "11.6-inch vertical touchscreen",
     "18-inch dark alloy wheels",
     "LED steering-responsive headlights, keyless access"
    ]
   },
   {
    "name": "Wilderness",
    "msrp": 33795,
    "features": [
     "9.3-inch ground clearance, all-terrain tires",
     "Front skid plate, anodized-copper accents",
     "Dual-function X-MODE",
     "3,500-lb tow rating, Wilderness StarTex"
    ]
   },
   {
    "name": "Sport Hybrid",
    "msrp": 33995,
    "features": [
     "New 194-hp series-parallel hybrid, AWD",
     "11.6-inch touchscreen",
     "Sport styling with StarTex upholstery",
     "Hybrid-exclusive colors, ~36 mpg combined"
    ]
   },
   {
    "name": "Limited Hybrid",
    "msrp": 34995,
    "features": [
     "Leather-trimmed seats",
     "Ventilated front seats",
     "Harman Kardon premium audio",
     "18-inch dark alloy wheels"
    ]
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
   "cargoCuFt": 20,
   "cargoMaxCuFt": 54.7,
   "lightInterior": true,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Subaru_Crosstrek_2.0i-L_Eyesight_2024_%28interior%29.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Subaru_Crosstrek_2.0i-L_Eyesight_2024_(interior).jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/2/2a/24_Subaru_Crosstrek_Premium.jpg",
     "kind": "exterior",
     "credit": "HJUdall",
     "license": "CC0",
     "commons": "https://commons.wikimedia.org/wiki/File:24_Subaru_Crosstrek_Premium.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Verified against Subaru's 2026 Crosstrek pricing release (including the new Hybrid) and fueleconomy.gov. For 2026 the base engine is a 180-hp 2.5L across the gas line (old 152-hp 2.0L dropped), and a new 194-hp Crosstrek Hybrid joins in Sport and Limited trims (36 mpg combined). Max 3,500-lb tow applies to Wilderness; most trims are rated 1,500 lb. Sand Dune Pearl and Citron Yellow Pearl are hybrid-exclusive colors.",
  "colors": {
   "exterior": [
    {
     "name": "Crystal White Pearl",
     "hex": "#f2f3f5"
    },
    {
     "name": "Ice Silver Metallic",
     "hex": "#c9ccd1"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#4a4e52"
    },
    {
     "name": "Crystal Black Silica",
     "hex": "#0b0c0e"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1c3d6e"
    },
    {
     "name": "Alpine Green Metallic",
     "hex": "#3a4a3c"
    },
    {
     "name": "Pure Red",
     "hex": "#c81e1e"
    },
    {
     "name": "Geyser Blue (Wilderness)",
     "hex": "#4fa3c7"
    },
    {
     "name": "Sand Dune Pearl (Hybrid)",
     "hex": "#c7b48a"
    },
    {
     "name": "Citron Yellow Pearl (Hybrid)",
     "hex": "#e4d53a"
    }
   ],
   "interior": [
    {
     "name": "Black cloth",
     "hex": "#161616",
     "tone": "dark"
    },
    {
     "name": "Gray StarTex",
     "hex": "#8c8c8c",
     "tone": "light"
    },
    {
     "name": "Black leather-trimmed (Limited)",
     "hex": "#141414",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Crosstrek & Crosstrek Hybrid pricing",
    "url": "https://media.subaru.com/pressrelease/2335/subaru-announces-pricing-2026-crosstrek-including-new-2026",
    "site": "media.subaru.com"
   },
   {
    "label": "EPA fuel economy (2026 Crosstrek)",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Subaru&baseModel=Crosstrek&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Crosstrek model page",
    "url": "https://www.subaru.com/vehicles/crosstrek",
    "site": "subaru.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Subaru Crosstrek AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21692",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 42,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Subaru Crosstrek",
     "url": "https://www.edmunds.com/subaru/crosstrek/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.1,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Subaru Crosstrek",
     "url": "https://www.edmunds.com/subaru/crosstrek/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 29995,
    "features": [
     "2.5L 180-hp boxer, Symmetrical AWD",
     "Dual 7-inch displays, EyeSight",
     "17-inch alloy wheels",
     "8.7-inch ground clearance"
    ]
   },
   {
    "name": "Premium",
    "msrp": 31995,
    "features": [
     "11.6-inch touchscreen (available)",
     "Heated front seats, roof rails",
     "Blind-Spot Detection with RCTA",
     "Panoramic moonroof available"
    ]
   },
   {
    "name": "Premium Hybrid",
    "msrp": 34730,
    "features": [
     "194-hp series-parallel hybrid, AWD",
     "Standard 11.6-inch navigation",
     "Hybrid-specific instrumentation",
     "~35 mpg combined"
    ]
   },
   {
    "name": "Sport",
    "msrp": 34795,
    "features": [
     "Dual-function X-MODE",
     "Sport exterior with StarTex upholstery",
     "Gunmetal accents",
     "18/19-inch dark wheels"
    ]
   },
   {
    "name": "Limited",
    "msrp": 35995,
    "features": [
     "Leather-trimmed seats",
     "Ventilated front seats",
     "Power liftgate",
     "18-inch machined alloys, LED steering-responsive lights"
    ]
   },
   {
    "name": "Sport Onyx Edition",
    "msrp": 36495,
    "features": [
     "New for 2026 (gas)",
     "19-inch dark-metallic alloy wheels",
     "Dark badging, black/gray StarTex with brown stitch",
     "Harman Kardon 576W audio"
    ]
   },
   {
    "name": "Wilderness",
    "msrp": 36995,
    "features": [
     "9.2-inch ground clearance, all-terrain tires",
     "Skid plates, anodized-copper accents",
     "Dual-function X-MODE",
     "3,500-lb tow rating"
    ]
   },
   {
    "name": "Sport Hybrid",
    "msrp": 37930,
    "features": [
     "194-hp hybrid with Sport styling",
     "Dark exterior accents",
     "X-MODE, roof rails",
     "StarTex upholstery"
    ]
   },
   {
    "name": "Limited Hybrid",
    "msrp": 38995,
    "features": [
     "Leather-trimmed, ventilated front seats",
     "Harman Kardon premium audio",
     "18-inch dark alloys",
     "Power liftgate"
    ]
   },
   {
    "name": "Touring",
    "msrp": 39995,
    "features": [
     "Nappa leather upholstery",
     "Heated 2nd-row seats",
     "360-degree camera",
     "Chrome exterior accents"
    ]
   },
   {
    "name": "Touring Hybrid",
    "msrp": 41545,
    "features": [
     "Nappa leather, panoramic moonroof",
     "360-degree camera",
     "Chrome accents",
     "Top-of-line hybrid equipment"
    ]
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
   "widthIn": 72,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/8/82/2025_Subaru_Forester_Sport_%28United_States%29_interior.jpg",
     "kind": "interior",
     "credit": "Charles (Flickr)",
     "license": "CC BY 2.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Subaru_Forester_Sport_(United_States)_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/ce/2025_Subaru_Forester_Hybrid_Touring_in_Brilliant_Bronze_Metallic%2C_front_right.jpg",
     "kind": "exterior",
     "credit": "Mr.choppers",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Subaru_Forester_Hybrid_Touring_in_Brilliant_Bronze_Metallic,_front_right.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Trim list rebuilt against Subaru's 2026 Forester pricing release: 7 gas + 4 hybrid = 11 trims. Prior data had wrong prices and conflated the gas 'Sport Onyx Edition' ($36,495) with a nonexistent 'Sport Hybrid (Onyx)'; actual Sport Hybrid is $37,930. Gas 2.5L is 180 hp / 29 mpg combined; hybrid is 194 hp / 35 mpg combined (34 city / 35 hwy). 3,500-lb towing on Wilderness (most trims 1,500 lb).",
  "sources": [
   {
    "label": "2026 Forester gas & hybrid pricing",
    "url": "https://media.subaru.com/pressrelease/2421/1/subaru-focuses-consumer-affordability-excellent-value-updated-pricing",
    "site": "media.subaru.com"
   },
   {
    "label": "EPA fuel economy (2026 Forester)",
    "url": "https://www.fueleconomy.gov/feg/PowerSearch.do?action=noform&path=1&year1=2026&year2=2026&make=Subaru&baseModel=Forester&srchtyp=ymm",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/subaru/forester/2026/",
    "site": "edmunds.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Crystal White Pearl",
     "hex": "#f2f3f5"
    },
    {
     "name": "Ice Silver Metallic",
     "hex": "#c9ccd1"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#4a4e52"
    },
    {
     "name": "Crystal Black Silica",
     "hex": "#0b0c0e"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1c3d6e"
    },
    {
     "name": "Autumn Green Metallic",
     "hex": "#3c4a3a"
    },
    {
     "name": "Brilliant Bronze Metallic",
     "hex": "#8a6a45"
    },
    {
     "name": "River Rock Pearl",
     "hex": "#c7b48a"
    }
   ],
   "interior": [
    {
     "name": "Black cloth",
     "hex": "#161616",
     "tone": "dark"
    },
    {
     "name": "Gray cloth",
     "hex": "#9a9a9a",
     "tone": "light"
    },
    {
     "name": "Sport Onyx black/gray StarTex (brown stitch)",
     "hex": "#2a2724",
     "tone": "dark"
    },
    {
     "name": "Slate Black leather",
     "hex": "#141414",
     "tone": "dark"
    },
    {
     "name": "Gray leather",
     "hex": "#8c8c8c",
     "tone": "light"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Subaru Forester SUV AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21696",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   },
   "owner": {
    "score": 4.4,
    "scale": 5,
    "count": 91,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Subaru Forester",
     "url": "https://www.edmunds.com/subaru/forester/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 5.8,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Subaru Forester",
     "url": "https://www.edmunds.com/subaru/forester/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 26595,
    "features": [
     "2.0L 152-hp boxer, Symmetrical AWD",
     "11.6-inch touchscreen, wireless CarPlay/Android Auto",
     "18-inch alloy wheels, LED fog lights",
     "EyeSight driver assist"
    ]
   },
   {
    "name": "RS",
    "msrp": 29495,
    "features": [
     "2.5L 180-hp engine",
     "Blind-Spot Detection with RCTA, Emergency Lane Keep Assist",
     "RS sport cloth seats with red bolsters",
     "Harman Kardon audio, moonroof, wireless charger",
     "Heated front seats, power driver seat"
    ]
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
    "mpgCombined": 29,
    "evRangeMi": null
   },
   {
    "type": "gas",
    "engine": "2.5L flat-4 (RS)",
    "hp": 180,
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
   "cargoMaxCuFt": 56,
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
  "notes": "Verified against Subaru's 2026 Impreza pricing release and fueleconomy.gov. Corrections: RS engine is 180 hp (not 182); Sport is 29 mpg combined (not 30) and RS 29 combined. Base trim discontinued; lineup starts with Sport. Standard Symmetrical AWD, hatchback only (sedan is sold as the WRX).",
  "colors": {
   "exterior": [
    {
     "name": "Crystal White Pearl",
     "hex": "#f1f2f4"
    },
    {
     "name": "Ice Silver Metallic",
     "hex": "#c6cbd0"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#44474c"
    },
    {
     "name": "Crystal Black Silica",
     "hex": "#0b0b0d"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1d3a63"
    },
    {
     "name": "Pure Red",
     "hex": "#c62128"
    },
    {
     "name": "Citron Yellow Pearl",
     "hex": "#cbd23c"
    }
   ],
   "interior": [
    {
     "name": "Black cloth",
     "hex": "#1a1a1c",
     "tone": "dark"
    },
    {
     "name": "RS black cloth with red accents",
     "hex": "#1a1a1c",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Impreza pricing & trims",
    "url": "https://media.subaru.com/pressrelease/2345/1/subaru-announces-pricing-2026-impreza",
    "site": "media.subaru.com"
   },
   {
    "label": "EPA fuel economy (2026 Impreza)",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Subaru_Impreza.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Impreza colors",
    "url": "https://www.subaru.com/vehicle-info/subaru-impreza-colors.html",
    "site": "subaru.com"
   }
  ]
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
    "msrp": 34995,
    "features": [
     "2.5L 180-hp boxer, Symmetrical AWD",
     "12.1-inch touchscreen + 12.3-inch digital cluster",
     "StarTex water-repellent upholstery",
     "EyeSight, 8.7-inch ground clearance"
    ]
   },
   {
    "name": "Limited",
    "msrp": 41715,
    "features": [
     "Perforated leather seats",
     "Navigation, Harman Kardon audio",
     "Power moonroof, heated rear seats + steering wheel",
     "Wireless charger, matte-black 18-inch wheels"
    ]
   },
   {
    "name": "Limited XT",
    "msrp": 44365,
    "features": [
     "2.4L turbo (260 hp / 277 lb-ft)",
     "19-inch black wheels",
     "Surround-view monitor",
     "Dual exhaust outlets"
    ]
   },
   {
    "name": "Wilderness",
    "msrp": 44995,
    "features": [
     "2.4L turbo, 9.5-inch ground clearance",
     "17-inch matte-black all-terrain tires",
     "X-MODE with Hill Descent, electronic dampers",
     "Wilderness cladding, anodized-copper accents"
    ]
   },
   {
    "name": "Touring",
    "msrp": 45395,
    "features": [
     "Nappa leather ventilated front seats",
     "Surround-view monitor",
     "12-way power driver seat",
     "Enhanced EyeSight (Emergency Stop Assist, Hands-Free Assist)"
    ]
   },
   {
    "name": "Touring XT",
    "msrp": 47995,
    "features": [
     "2.4L turbo engine",
     "All Touring luxury equipment",
     "Top-of-line trim"
    ]
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
    "mpgCombined": 27,
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
    "mpgCombined": 24,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/3e/2026_Subaru_Outback_dashboard.jpg",
     "kind": "interior",
     "credit": "Baron Maddock",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Subaru_Outback_dashboard.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/2026_Subaru_Outback_Wilderness%2C_front_left%2C_05-24-2026.jpg",
     "kind": "exterior",
     "credit": "MercurySable99",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Subaru_Outback_Wilderness,_front_left,_05-24-2026.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/2/2f/2026_Subaru_Outback_Rear_Left_Quater_NYC_2025.png",
     "kind": "exterior",
     "credit": "Raszbeary",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Subaru_Outback_Rear_Left_Quater_NYC_2025.png"
    }
   ]
  },
  "confidence": "high",
  "notes": "All-new seventh generation for 2026 with a taller, boxier, more SUV-like body replacing the classic wagon profile; standard 12.1-inch touchscreen + 12.3-inch digital cluster, physical climate controls retained. Pricing/trims verified against Subaru's 2026 Outback pricing release. MPG corrected: 2.5L is 27 mpg combined (not 28), 2.4L turbo is 24 combined (not 25). Wilderness ($44,995) sits below Touring in price because it is an off-road, not luxury, spec.",
  "sources": [
   {
    "label": "2026 Outback pricing & trims",
    "url": "https://media.subaru.com/pressrelease/2353/subaru-announces-pricing-all-new-2026-outback-suv",
    "site": "media.subaru.com"
   },
   {
    "label": "EPA fuel economy (2026 Outback)",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Subaru_Outback.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Outback model page",
    "url": "https://www.subaru.com/vehicles/outback/2026.html",
    "site": "subaru.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Crystal Black Silica",
     "hex": "#0b0b0d"
    },
    {
     "name": "Crystal White Pearl",
     "hex": "#f1f2f4"
    },
    {
     "name": "Ice Silver Metallic",
     "hex": "#c6cbd0"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#44474c"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1d3a63"
    },
    {
     "name": "Crimson Red Pearl",
     "hex": "#7c1f2c"
    },
    {
     "name": "Deep Emerald Green Pearl",
     "hex": "#1f3a30"
    },
    {
     "name": "River Rock Pearl",
     "hex": "#b7a88e"
    },
    {
     "name": "Geyser Blue (Wilderness)",
     "hex": "#7ea3c8"
    }
   ],
   "interior": [
    {
     "name": "Black StarTex",
     "hex": "#1a1a1c",
     "tone": "dark"
    },
    {
     "name": "Slate Black perforated leather",
     "hex": "#1c1d1f",
     "tone": "dark"
    },
    {
     "name": "Titanium Gray leather",
     "hex": "#8a8b8d",
     "tone": "light"
    },
    {
     "name": "Java Brown Nappa leather",
     "hex": "#3a2418",
     "tone": "dark"
    },
    {
     "name": "Warm Ivory Nappa (two-tone)",
     "hex": "#e7dfcf",
     "tone": "light"
    }
   ]
  },
  "ratings": {
   "safety": {
    "iihs": "Top Safety Pick+",
    "appliesTo": "2026",
    "source": {
     "label": "IIHS vehicle ratings — 2026 Subaru Outback (Top Safety Pick+)",
     "url": "https://www.iihs.org/ratings/vehicle/subaru/outback-4-door-suv/2026",
     "site": "iihs.org"
    }
   },
   "owner": {
    "score": 4.7,
    "scale": 5,
    "count": 31,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Subaru Outback",
     "url": "https://www.edmunds.com/subaru/outback/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.6,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Subaru Outback",
     "url": "https://www.edmunds.com/subaru/outback/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 38495,
    "features": [
     "233-hp dual-motor AWD",
     "74.7-kWh battery, native NACS port",
     "14-inch touchscreen, heated front seats + wheel",
     "18-inch wheels, EyeSight, 288-mi range"
    ]
   },
   {
    "name": "Limited",
    "msrp": 41395,
    "features": [
     "20-inch alloy wheels",
     "Harman Kardon audio",
     "Heated rear seats, driver memory seat",
     "Power liftgate, upgraded upholstery (278-mi range)"
    ]
   },
   {
    "name": "Limited XT",
    "msrp": 42895,
    "features": [
     "Uprated dual motors to 338 hp (0-60 under 5 sec)",
     "Same Limited equipment",
     "278-mi range"
    ]
   },
   {
    "name": "Touring XT",
    "msrp": 45555,
    "features": [
     "Panoramic fixed glass roof",
     "Ventilated front seats, radiant leg heater",
     "Digital rearview mirror",
     "Two-tone roof availability"
    ]
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
   "heightIn": 65,
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
  "notes": "Heavily updated for 2026: larger 74.7-kWh battery, native NACS port, up to 150 kW DC fast charging (10-80% ~30 min), and new 338-hp XT trims. Pricing verified against Subaru's Sept 2025 pricing release. Range correction: Premium is EPA-est 288 mi; Limited, Limited XT and Touring XT are all 278 mi (the non-XT Limited also drops to 278). 233 hp on Premium/Limited, 338 hp on XT trims.",
  "colors": {
   "exterior": [
    {
     "name": "Cosmic White Pearl",
     "hex": "#f2f3f0"
    },
    {
     "name": "Harbor Mist Gray Pearl",
     "hex": "#9ca0a3"
    },
    {
     "name": "Astro Black Mica",
     "hex": "#111214"
    },
    {
     "name": "Smoked Carbon",
     "hex": "#4a4e52"
    },
    {
     "name": "Elemental Red Pearl",
     "hex": "#8e2027"
    },
    {
     "name": "Midnight Tide Mica",
     "hex": "#1e2a3a"
    }
   ],
   "interior": [
    {
     "name": "StarTex Black",
     "hex": "#1a1a1b",
     "tone": "dark"
    },
    {
     "name": "StarTex Gray",
     "hex": "#8a8c8b",
     "tone": "light"
    },
    {
     "name": "Blue leather (Touring XT)",
     "hex": "#26324a",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Solterra pricing release",
    "url": "https://media.subaru.com/newsrelease.do?id=2370",
    "site": "media.subaru.com"
   },
   {
    "label": "2026 Solterra specs & trims",
    "url": "https://www.subaru.com/vehicles/solterra/2026/specs-trim.html",
    "site": "subaru.com"
   },
   {
    "label": "2026 Solterra features & specs",
    "url": "https://www.edmunds.com/subaru/solterra/2026/features-specs/",
    "site": "edmunds.com"
   }
  ]
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
    "msrp": 39995,
    "features": [
     "375-hp dual-motor AWD (0-60 in 4.4 sec)",
     "74.7-kWh battery, native NACS port",
     "X-MODE, 14-inch touchscreen",
     "18-inch wheels, heated front seats, roof rails"
    ]
   },
   {
    "name": "Limited",
    "msrp": 43995,
    "features": [
     "20-inch wheels",
     "Harman Kardon audio",
     "Multi-view monitor",
     "Heated rear seats, upgraded interior"
    ]
   },
   {
    "name": "Touring",
    "msrp": 46555,
    "features": [
     "Panoramic fixed glass roof",
     "Ventilated front seats, radiant leg warmers",
     "Optional black & blue leather",
     "Top-of-line trim"
    ]
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
   "lengthIn": 190.8,
   "widthIn": 73.3,
   "heightIn": 65.8,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4465,
   "groundClearanceIn": 8.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 32.2,
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
  "confidence": "high",
  "notes": "Genuine 2026 US model (Toyota bZ Woodland twin) with official announced pricing (Dec 2025); arriving at retailers spring 2026, so in dealer inventory as of mid-2026. 375-hp dual-motor AWD, 74.7-kWh battery, up to 150 kW DC charging, 3,500-lb tow. Range ~281 mi is Subaru's EPA estimate and may shift on final certification. Ground clearance 8.5 in (Subaru). Curb weight and length from Edmunds; lightInterior should be true (StarTex Gray offered).",
  "colors": {
   "exterior": [
    {
     "name": "Crystal White Pearl",
     "hex": "#f4f4f1"
    },
    {
     "name": "Crystal Black Silica",
     "hex": "#0e0e10"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#4b4e52"
    },
    {
     "name": "Brilliant Bronze Metallic",
     "hex": "#7a6a4f"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1f3a6b"
    },
    {
     "name": "Daybreak Blue Pearl",
     "hex": "#5c7c9e"
    }
   ],
   "interior": [
    {
     "name": "StarTex Black",
     "hex": "#1a1a1b",
     "tone": "dark"
    },
    {
     "name": "StarTex Gray",
     "hex": "#8a8c8b",
     "tone": "light"
    },
    {
     "name": "Black & Blue leather (Touring)",
     "hex": "#22293a",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Trailseeker pricing release",
    "url": "https://media.subaru.com/pressrelease/2397/",
    "site": "media.subaru.com"
   },
   {
    "label": "2026 Trailseeker specs & trims",
    "url": "https://www.subaru.com/vehicles/trailseeker/2026/specs-trim.html",
    "site": "subaru.com"
   },
   {
    "label": "2026 Trailseeker features & specs",
    "url": "https://www.edmunds.com/subaru/trailseeker/2026/features-specs/",
    "site": "edmunds.com"
   }
  ]
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
    "msrp": 34995,
    "features": [
     "221-hp single front motor, FWD",
     "74.7-kWh battery, native NACS port",
     "14-inch touchscreen + 7-inch cluster",
     "Wireless CarPlay/Android Auto, heated front seats, ~308-mi range"
    ]
   },
   {
    "name": "Sport",
    "msrp": 39795,
    "features": [
     "338-hp dual-motor AWD (0-60 under 5 sec)",
     "X-MODE, roof rails",
     "360-degree camera, Traffic Jam Assist",
     "Leather-wrapped wheel, driver memory seat, ~285-mi range"
    ]
   },
   {
    "name": "GT",
    "msrp": 43795,
    "features": [
     "Panoramic sunroof",
     "Ventilated front seats, Harman Kardon audio",
     "20-inch wheels, heated rear seats",
     "Digital rearview mirror, two-tone roof availability, ~270-mi range"
    ]
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
    "evRangeMi": 308
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
   "lengthIn": 177.8,
   "widthIn": 73.6,
   "heightIn": 63.8,
   "wheelbaseIn": 108.3,
   "curbWeightLb": 4145,
   "groundClearanceIn": 8.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25,
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
  "confidence": "high",
  "notes": "Genuine 2026 US model (Toyota C-HR BEV twin), Crosstrek-sized subcompact EV with official announced pricing (Dec 2025) and retail availability in 2026. 74.7-kWh battery, native NACS port, up to 150 kW DC charging. FWD Premium 221 hp; Sport/GT 338-hp dual-motor AWD. Range: FWD finalized at 308 mi EPA; Sport ~285 mi, GT ~270 mi (20-inch wheels). Sport/GT add X-MODE. Ground clearance ~8.2 in; lightInterior should be true (Gray StarTex on upper trims).",
  "colors": {
   "exterior": [
    {
     "name": "Cosmic White Pearl",
     "hex": "#f2f3f0"
    },
    {
     "name": "Coastal Wolf Gray Metallic",
     "hex": "#8e9295"
    },
    {
     "name": "Astro Black Mica",
     "hex": "#111214"
    },
    {
     "name": "Metropolis Gray",
     "hex": "#5b5e62"
    },
    {
     "name": "Habanero Orange Metallic",
     "hex": "#c8531f"
    }
   ],
   "interior": [
    {
     "name": "StarTex Black",
     "hex": "#1a1a1b",
     "tone": "dark"
    },
    {
     "name": "Gray StarTex (upper trims)",
     "hex": "#8a8c8b",
     "tone": "light"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 Uncharted pricing release",
    "url": "https://media.subaru.com/pressrelease/2403/",
    "site": "media.subaru.com"
   },
   {
    "label": "2026 Uncharted specs & trims",
    "url": "https://www.subaru.com/vehicles/uncharted/2026/specs-trim.html",
    "site": "subaru.com"
   },
   {
    "label": "2026 Uncharted features & specs",
    "url": "https://www.edmunds.com/subaru/uncharted/2026/features-specs/",
    "site": "edmunds.com"
   }
  ]
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
    "name": "WRX (Base)",
    "msrp": 32495,
    "features": [
     "271-hp 2.4L turbo boxer, 6-speed manual",
     "Symmetrical AWD",
     "11.6-inch Multimedia Plus touchscreen",
     "Keyless access now standard"
    ]
   },
   {
    "name": "Premium",
    "msrp": 33995,
    "features": [
     "Heated front seats, mirrors and wiper de-icer",
     "LED fog lights",
     "Premium cloth with red stitching",
     "Rear USB-A/C, body-color spoiler"
    ]
   },
   {
    "name": "Limited",
    "msrp": 38995,
    "features": [
     "Navigation and Harman Kardon audio",
     "10-way power driver seat",
     "Blind-Spot Detection/RCTA, moonroof",
     "Ultrasuede/leather with red bolsters (6MT or SPT auto)"
    ]
   },
   {
    "name": "GT (SPT)",
    "msrp": 44995,
    "features": [
     "Recaro front seats with red bolsters",
     "12.3-inch digital cluster",
     "Electronic Adjustable Ride Control suspension",
     "SPT automatic (standard on GT)"
    ]
   },
   {
    "name": "tS",
    "msrp": 44995,
    "features": [
     "STI-tuned electronic dampers",
     "Brembo brakes with gold calipers",
     "Recaro seats with blue bolsters",
     "19-inch satin-gray wheels, Potenza S007 tires (6MT)"
    ]
   },
   {
    "name": "Series.Yellow",
    "msrp": 45995,
    "features": [
     "Sunrise Yellow paint (limited to 350 units)",
     "Matte-black 19-inch wheels",
     "Black Ultrasuede with yellow stitching",
     "Based on tS chassis (6MT)"
    ]
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
  "notes": "Verified against Subaru's 2026 WRX pricing release and fueleconomy.gov. Affordable base trim returns at $32,495 with most trims cut $2,700-$3,700 vs 2025; keyless access now standard on base. Series.Yellow is new for 2026 (350 units). GT (SPT auto) and tS (6MT) are both $44,995. 271-hp 2.4L turbo; 6MT standard on most trims, SPT automatic optional on Limited and standard on GT. Combined mpg is 22 with the manual, 21 with the SPT automatic.",
  "colors": {
   "exterior": [
    {
     "name": "Ceramic White",
     "hex": "#eef0f0"
    },
    {
     "name": "Crystal Black Silica",
     "hex": "#0b0b0d"
    },
    {
     "name": "Ice Silver Metallic",
     "hex": "#c6cbd0"
    },
    {
     "name": "Magnetite Gray Metallic",
     "hex": "#44474c"
    },
    {
     "name": "Sapphire Blue Pearl",
     "hex": "#1d3a63"
    },
    {
     "name": "WR Blue Pearl",
     "hex": "#1b4c9c"
    },
    {
     "name": "Ignition Red",
     "hex": "#b81824"
    },
    {
     "name": "Galaxy Purple Pearl",
     "hex": "#3a2a4d"
    },
    {
     "name": "Sunrise Yellow (Series.Yellow)",
     "hex": "#f5c518"
    }
   ],
   "interior": [
    {
     "name": "Cloth with red contrast stitch",
     "hex": "#1a1a1c",
     "tone": "dark"
    },
    {
     "name": "Black Ultrasuede/leather with red bolsters",
     "hex": "#161616",
     "tone": "dark"
    },
    {
     "name": "Black Ultrasuede with blue bolsters (tS)",
     "hex": "#161616",
     "tone": "dark"
    }
   ]
  },
  "sources": [
   {
    "label": "2026 WRX pricing & trims",
    "url": "https://media.subaru.com/pressrelease/2414/1/2026-subaru-wrx-brings-back-affordable-rally-inspired",
    "site": "media.subaru.com"
   },
   {
    "label": "EPA fuel economy (2026 WRX)",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Subaru_WRX.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 WRX colors",
    "url": "https://www.subaru.com/vehicle-info/subaru-wrx-colors.html",
    "site": "subaru.com"
   }
  ]
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
   "groundClearanceIn": 16
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 56.2,
   "cargoMaxCuFt": 67,
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
   "passengerVolumeCuFt": 97,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/4f/Tesla_Model_3_Highland_Performance_White_%2B_Black.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Tesla_Model_3_Highland_Performance_White_%2B_Black.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/c4/2025_Tesla_Model_3_Long_Range_in_Obsidian_Black_Metallic%2C_front_right.jpg",
     "kind": "exterior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Tesla_Model_3_Long_Range_in_Obsidian_Black_Metallic,_front_right.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Tesla does not use traditional model years; current production ('Highland' generation) treated as 2026. Lineup restructured Oct 2025 into Standard/Premium/Performance; Standard trim has reduced content (textile seats, no glass-roof view, no rear screen). Audio control is a steering-wheel scroll wheel; climate is touchscreen-only. Prices exclude Tesla destination/order fees (~$1,640).",
  "sources": [
   {
    "label": "Current pricing & specs",
    "url": "https://www.tesla.com/model3",
    "site": "tesla.com"
   },
   {
    "label": "Range & efficiency",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Tesla_Model_3.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/tesla/model-3/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "iihs": "Top Safety Pick",
    "appliesTo": "2025 (carries over)",
    "source": {
     "label": "IIHS 2025 Top Safety Picks — Tesla (Model 3 Top Safety Pick)",
     "url": "https://www.iihs.org/ratings/top-safety-picks/2025/all/tesla",
     "site": "iihs.org"
    }
   },
   "owner": {
    "score": 3.7,
    "scale": 5,
    "count": 30,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Tesla Model 3",
     "url": "https://www.edmunds.com/tesla/model-3/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 8.4,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Tesla Model 3",
     "url": "https://www.edmunds.com/tesla/model-3/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "passengerVolumeCuFt": 94,
   "cargoCuFt": 28,
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
   "cargoMaxCuFt": 88,
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
   "cargoCuFt": 29,
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
   "credit": "Wikimedia Commons",
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/9/91/Tesla_Model_Y_Juniper_Long_Range_AWD_White_%2B_Black_01.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Tesla_Model_Y_Juniper_Long_Range_AWD_White_%2B_Black_01.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/ca/2025_Tesla_Model_Y_RWD_front.jpg",
     "kind": "exterior",
     "credit": "LuvsMG481",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Tesla_Model_Y_RWD_front.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Tesla does not use traditional model years; current 'Juniper' refresh treated as 2026. Lineup: Standard, Premium RWD/AWD, Performance, plus new long-wheelbase 3-row Model Y L (6 seats, 325 mi) launched in the US July 2026 at $61,990 as listed by Tesla (Tesla's listed prices now include destination/order fees; other trims shown here exclude them). Climate is touchscreen-only.",
  "sources": [
   {
    "label": "Current pricing & specs",
    "url": "https://www.tesla.com/modely",
    "site": "tesla.com"
   },
   {
    "label": "Range & efficiency",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Tesla_Model_Y.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://www.edmunds.com/tesla/model-y/2026/",
    "site": "edmunds.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2025 (carries over)",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2025 Tesla Model Y SUV AWD (Overall 5/5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20798",
     "site": "nhtsa.gov"
    },
    "iihs": "Top Safety Pick+"
   },
   "owner": {
    "score": 4.1,
    "scale": 5,
    "count": 26,
    "source": {
     "label": "Edmunds consumer reviews — 2026 Tesla Model Y",
     "url": "https://www.edmunds.com/tesla/model-y/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 8.2,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating — 2026 Tesla Model Y",
     "url": "https://www.edmunds.com/tesla/model-y/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceFrom": 41870,
  "priceTo": 68200,
  "trims": [
   {
    "name": "SR5",
    "msrp": 41870,
    "features": [
     "17-inch alloy wheels",
     "8-inch Toyota Audio Multimedia touchscreen",
     "Wireless Apple CarPlay/Android Auto",
     "8-speaker audio system",
     "Available third-row seating (up to 7)"
    ]
   },
   {
    "name": "TRD Sport",
    "msrp": 48350,
    "features": [
     "Sport-tuned suspension",
     "20-inch machined-finish alloy wheels",
     "Color-keyed overfenders & gloss-black hood scoop",
     "12.3-inch digital gauge cluster",
     "Qi wireless charging"
    ]
   },
   {
    "name": "TRD Off-Road",
    "msrp": 50290,
    "features": [
     "18-inch all-terrain tires",
     "Multi-Terrain Select with Crawl Control",
     "Bilstein monotube shocks",
     "Underbody skid plates",
     "Available i-FORCE MAX hybrid (+$2,800)"
    ]
   },
   {
    "name": "Limited",
    "msrp": 56500,
    "features": [
     "Premium leather-trimmed seating",
     "JBL premium audio",
     "Power running boards (available)",
     "Heated & ventilated front seats",
     "Available i-FORCE MAX hybrid"
    ]
   },
   {
    "name": "Platinum (i-FORCE MAX)",
    "msrp": 63960,
    "features": [
     "Standard i-FORCE MAX hybrid powertrain (326 hp)",
     "Adaptive variable suspension",
     "Panoramic/moonroof",
     "Enhanced driver-assist suite",
     "Digital rearview mirror"
    ]
   },
   {
    "name": "Trailhunter",
    "msrp": 68000,
    "features": [
     "Standard i-FORCE MAX hybrid",
     "Old Man Emu 2.5-inch forged shocks",
     "ARB roof rack & onboard air compressor",
     "Heavy-duty skid plates",
     "33-inch Toyo all-terrain tires"
    ]
   },
   {
    "name": "TRD Pro",
    "msrp": 68200,
    "features": [
     "FOX QS3 adjustable internal-bypass shocks",
     "TRD performance air intake",
     "33-inch tires on 18-inch matte-black wheels",
     "Stabilizer Disconnect Mechanism",
     "Power moonroof"
    ]
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
   "heightIn": 73.2,
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
  "confidence": "high",
  "notes": "Sixth generation (introduced 2025). Full 2026 lineup verified as 9 grades: SR5 $41,870, TRD Sport $48,350, TRD Sport Premium $53,710, TRD Off-Road $50,290 (i-FORCE MAX version $53,090), TRD Off-Road Premium $56,070 (i-FORCE MAX $58,870), Limited $56,500 (i-FORCE MAX $61,300), Platinum $63,960, Trailhunter $68,000, TRD Pro $68,200 (all prices pre-destination; destination is $1,450). Trims array shows a representative subset spanning the full price range; Platinum/Trailhunter/TRD Pro come standard with the i-FORCE MAX hybrid, while TRD Off-Road/Off-Road Premium/Limited offer it as an option. Height verified at 73.2in for road-oriented trims (up to 74.0in for TRD Pro/Trailhunter) — corrected from prior 70.8in figure.",
  "sources": [
   {
    "label": "2026 4Runner model page",
    "url": "https://www.toyota.com/4runner/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_4Runner.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Engineered for Exploration press release",
    "url": "https://pressroom.toyota.com/the-2026-toyota-4runner-engineered-for-exploration/",
    "site": "pressroom.toyota.com"
   },
   {
    "label": "Trim levels & pricing",
    "url": "https://www.tustintoyota.com/research/2026-toyota-4runner-trims-pricing/",
    "site": "tustintoyota.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Ice Cap",
     "hex": "#E9E7E2"
    },
    {
     "name": "Black",
     "hex": "#1C1C1C"
    },
    {
     "name": "Cutting Edge",
     "hex": "#8A9096"
    },
    {
     "name": "Underground",
     "hex": "#33363A"
    },
    {
     "name": "Heritage Blue",
     "hex": "#1B3A5C"
    },
    {
     "name": "Everest",
     "hex": "#6B6A4E"
    },
    {
     "name": "Supersonic Red",
     "hex": "#8C1D2C"
    },
    {
     "name": "Wind Chill Pearl",
     "hex": "#F0F0EE"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Boulder",
     "hex": "#8C8378",
     "tone": "light"
    },
    {
     "name": "Redwood (TRD Pro)",
     "hex": "#6E2A25",
     "tone": "dark"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 4,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA Safety Ratings API - 2026 Toyota 4Runner AWD (OverallRating 4)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21655",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4.1,
    "scale": 5,
    "count": 28,
    "source": {
     "label": "Edmunds 2026 Toyota 4Runner consumer reviews",
     "url": "https://www.edmunds.com/toyota/4runner/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.2,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating - 2026 Toyota 4Runner",
     "url": "https://www.edmunds.com/toyota/4runner/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 34900,
    "features": [
     "57.7-kWh battery, 168 hp FWD",
     "236-mile EPA range",
     "14-inch touchscreen",
     "Toyota Safety Sense 3.0"
    ]
   },
   {
    "name": "XLE Plus",
    "msrp": 37900,
    "features": [
     "74.7-kWh battery, 221 hp FWD",
     "314-mile EPA range",
     "Digital key"
    ]
   },
   {
    "name": "Limited",
    "msrp": 43300,
    "features": [
     "Panoramic roof",
     "JBL premium audio",
     "Heated & ventilated seats"
    ]
   },
   {
    "name": "Limited AWD",
    "msrp": 45300,
    "features": [
     "Dual-motor AWD, 338 hp",
     "278-mile EPA range",
     "150-kW DC fast charging"
    ]
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
   "heightIn": 65,
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
  "notes": "Heavily updated successor to the bZ4X, renamed bZ for 2026 with NACS port and more range. Base XLE uses a 57.7-kWh pack (168 hp, 236 mi); XLE Plus/Limited use 74.7 kWh (221 hp FWD, up to 314 mi; 338 hp AWD, about 278 mi). AWD is a $2,000 option on Plus/Limited. Prices confirmed both ex-destination (as listed) and destination-inclusive across multiple sources.",
  "sources": [
   {
    "label": "2026 bZ model page",
    "url": "https://www.toyota.com/bz/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy / range",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_bZ.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 bZ pricing & range by trim",
    "url": "https://insideevs.com/news/769526/2026-toyota-bz-ev-suv-price-specs/",
    "site": "insideevs.com"
   }
  ]
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
    "msrp": 45300,
    "features": [
     "375-hp dual-motor AWD standard",
     "260-mile EPA range",
     "Roof rails & all-terrain tire option",
     "X-MODE with Grip Control"
    ]
   },
   {
    "name": "Premium",
    "msrp": 47400,
    "features": [
     "Panoramic sunroof",
     "Ventilated front seats",
     "Radiant lower-body heating",
     "9-speaker JBL audio"
    ]
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
   "cargoCuFt": 30,
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
  "notes": "New nameplate for 2026: a longer, more rugged wagon-style variant of the bZ co-developed with Subaru (Trailseeker sibling). 74.7-kWh battery, 281-mile EPA range at the wheel-size tested (some configurations rated 260 mi). Prices verified: $45,300/$47,400 before $1,450 destination.",
  "sources": [
   {
    "label": "2026 bZ Woodland model page",
    "url": "https://www.toyota.com/bz-woodland/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy / range",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_bZ_Woodland.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 bZ Woodland MSRP & specs",
    "url": "https://carbuzz.com/cars/toyota/bz-woodland/2026/",
    "site": "carbuzz.com"
   }
  ]
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
    "msrp": 37000,
    "features": [
     "338-hp dual-motor AWD standard",
     "287-mile EPA range (20-in wheels)",
     "NACS charge port",
     "8-inch touchscreen",
     "Heated front seats"
    ]
   },
   {
    "name": "XSE",
    "msrp": 39000,
    "features": [
     "Fixed panoramic glass roof",
     "JBL premium audio",
     "Ventilated front seats",
     "Advanced Park",
     "273-mile EPA range (larger wheels)"
    ]
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
  "notes": "C-HR nameplate returns to the US for 2026 as a pure EV (coupe-styled crossover) on a 74.7-kWh battery; 287-mile range for SE, 273 for XSE on larger wheels. 0-60 mph in about 5 seconds. Prices verified ($37,000/$39,000 before $1,595 destination).",
  "sources": [
   {
    "label": "2026 C-HR model page",
    "url": "https://www.toyota.com/c-hr/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy / range",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_C-HR.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 C-HR pricing & specs",
    "url": "https://carbuzz.com/cars/toyota/c-hr/2026/",
    "site": "carbuzz.com"
   }
  ]
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
   "passengerVolumeCuFt": 99,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/9/98/2025_Toyota_Camry_Hybrid_XSE_%28United_States%29_interior.png",
     "kind": "interior",
     "credit": "Autosdeprimera",
     "license": "CC BY 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Toyota_Camry_Hybrid_XSE_(United_States)_interior.png"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/0/0c/2025_Toyota_Camry_LE%2C_rear_left%2C_05-24-2025.jpg",
     "kind": "exterior",
     "credit": "MercurySable99",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2025_Toyota_Camry_LE,_rear_left,_05-24-2025.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Hybrid-only since 2025 redesign; 225 hp FWD, 232 hp with electric-motor AWD. 2026 prices rose about $300 across the lineup. LE achieves up to 51 mpg combined; sportier trims about 44-47 mpg.",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.toyota.com/camry/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Camry.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 trims & Nightshade Edition",
    "url": "https://pressroom.toyota.com/toyota-camry-brings-bold-new-nightshade-edition-to-lineup-in-2026/",
    "site": "pressroom.toyota.com"
   }
  ],
  "ratings": {
   "safety": {
    "iihs": "Top Safety Pick+",
    "appliesTo": "2026",
    "source": {
     "label": "IIHS 2026 Top Safety Pick Awards — Toyota (Camry 4-door sedan: Top Safety Pick+)",
     "url": "https://www.iihs.org/ratings/top-safety-picks/2026/all/toyota",
     "site": "iihs.org"
    }
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 108,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Toyota Camry",
     "url": "https://www.edmunds.com/toyota/camry/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 8.4,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Toyota Camry",
     "url": "https://www.edmunds.com/toyota/camry/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/f/ff/Toyota_Corolla_2026_interior.jpg",
     "kind": "interior",
     "credit": "Nissangeniss",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Toyota_Corolla_2026_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/7/72/2021_Toyota_Corolla_SE_rear_view_%28United_States%29.jpg",
     "kind": "exterior",
     "credit": "Gold Pony",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2021_Toyota_Corolla_SE_rear_view_(United_States).jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "Base LE MSRP verified for 2026 ($23,920 incl. $1,195 destination). Mid-trim prices estimated from 2025 ladder plus typical 2026 increase. Hybrid available on LE/SE/XLE trims with optional AWD.",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.toyota.com/corolla/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Corolla.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://pressroom.toyota.com/bold-and-compact-the-2026-toyota-corolla-offers-impressive-features-and-technology/",
    "site": "pressroom.toyota.com"
   }
  ],
  "ratings": {
   "owner": {
    "score": 3.7,
    "scale": 5,
    "count": 37,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Toyota Corolla",
     "url": "https://www.edmunds.com/toyota/corolla/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Toyota Corolla",
     "url": "https://www.edmunds.com/toyota/corolla/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceTo": 33030,
  "trims": [
   {
    "name": "L",
    "msrp": 24635,
    "features": [
     "8-inch touchscreen, wireless Apple CarPlay/Android Auto",
     "7-inch digital gauge cluster",
     "Toyota Safety Sense 3.0",
     "LED headlights",
     "17-inch steel wheels"
    ]
   },
   {
    "name": "LE",
    "msrp": 26965,
    "features": [
     "Alloy wheels",
     "Blind-spot monitoring",
     "Wireless charging",
     "Smart key entry",
     "Automatic climate control"
    ]
   },
   {
    "name": "XLE",
    "msrp": 29560,
    "features": [
     "SofTex-trimmed seats, heated front seats",
     "10.5-inch touchscreen, 12.3-inch digital gauge cluster",
     "18-inch wheels",
     "Dual-zone climate control",
     "Front/rear parking assist"
    ]
   },
   {
    "name": "Hybrid S",
    "msrp": 28995,
    "features": [
     "196-hp hybrid system, standard AWD",
     "8-inch touchscreen, 7-inch gauge cluster",
     "Toyota Safety Sense 3.0"
    ]
   },
   {
    "name": "Hybrid SE",
    "msrp": 30315,
    "features": [
     "Paddle shifters",
     "Blind-spot monitoring w/ rear cross-traffic alert",
     "Wireless charging",
     "Roof rails",
     "Rear privacy glass"
    ]
   },
   {
    "name": "Hybrid XSE",
    "msrp": 33030,
    "features": [
     "SofTex mixed-media seats, ambient lighting",
     "10.5-inch touchscreen, 12.3-inch digital gauge cluster",
     "18-inch black wheels",
     "Dual-zone climate control"
    ]
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
   "lengthIn": 176,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/6f/Toyota_Corolla_Cross_1.8_G_interior_20221019.jpg",
     "kind": "interior",
     "credit": "Ethan Llamas",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Toyota_Corolla_Cross_1.8_G_interior_20221019.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/8/88/2022_Toyota_Corolla_Cross_1.8AT_High_black_interior_in_Brunei.jpg",
     "kind": "interior",
     "credit": "AIMHO'S REBELLION 8490s",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Toyota_Corolla_Cross_1.8AT_High_black_interior_in_Brunei.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "Refreshed styling and interior for 2026. Gas lineup is L/LE/XLE ($24,635/$26,965/$29,560); Hybrid lineup is S/SE/XSE ($28,995/$30,315/$33,030), all standard AWD via Electronic On-Demand system. Corrected priceTo and added the previously-missing LE and Hybrid SE trims (file had only 4 of 6 trims). Towing rated up to 1,500 lb with accessories.",
  "sources": [
   {
    "label": "2026 Corolla Cross model page",
    "url": "https://www.toyota.com/corollacross/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Corolla_Cross.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "Assembled in America press release",
    "url": "https://pressroom.toyota.com/assembled-in-america-and-arriving-now-2026-toyota-corolla-cross/",
    "site": "pressroom.toyota.com"
   },
   {
    "label": "Trims & pricing",
    "url": "https://www.tustintoyota.com/research/2026-toyota-corolla-cross-trims-pricing-features/",
    "site": "tustintoyota.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Celestite",
     "hex": "#7C8798"
    },
    {
     "name": "Jet Black",
     "hex": "#161616"
    },
    {
     "name": "Wind Chill Pearl",
     "hex": "#F0F0EE"
    },
    {
     "name": "Soul Red Crystal",
     "hex": "#9C2A2A"
    },
    {
     "name": "Cavalry Blue",
     "hex": "#2B3A55"
    },
    {
     "name": "Sonic Silver",
     "hex": "#B7B9BB"
    },
    {
     "name": "Cypress",
     "hex": "#4C5A4E"
    }
   ],
   "interior": [
    {
     "name": "Black (fabric, L/LE)",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Black SofTex (XLE)",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Black/Blue mixed-media SofTex (XSE)",
     "hex": "#22303F",
     "tone": "dark"
    }
   ]
  },
  "ratings": {
   "safety": {
    "iihs": "Top Safety Pick",
    "appliesTo": "2026",
    "source": {
     "label": "IIHS 2026 Toyota Corolla Cross 4-door SUV - TOP SAFETY PICK",
     "url": "https://www.iihs.org/ratings/vehicle/toyota/corolla-cross-4-door-suv/2026",
     "site": "iihs.org"
    }
   },
   "owner": {
    "score": 3.4,
    "scale": 5,
    "count": 31,
    "source": {
     "label": "Edmunds 2026 Toyota Corolla Cross consumer reviews",
     "url": "https://www.edmunds.com/toyota/corolla-cross/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.2,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating - 2026 Toyota Corolla Cross",
     "url": "https://www.edmunds.com/toyota/corolla-cross/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceFrom": 24180,
  "priceTo": 27175,
  "trims": [
   {
    "name": "SE",
    "msrp": 24180,
    "features": [
     "2.0L Dynamic Force I4, CVT w/ paddle shifters",
     "Toyota Safety Sense 3.0",
     "Blind Spot Monitor + Rear Cross-Traffic Alert",
     "8-inch touchscreen"
    ]
   },
   {
    "name": "FX Edition",
    "msrp": 26780,
    "features": [
     "Limited-run 2026 model (1,600 units)",
     "18-inch gloss-white alloy wheels",
     "Black vented sport wing",
     "Sport touring seats with orange stitching"
    ]
   },
   {
    "name": "XSE",
    "msrp": 27175,
    "features": [
     "JBL premium audio",
     "Heated front seats",
     "Adaptive front lighting",
     "18-inch alloy wheels"
    ]
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
    "mpgCombined": 32,
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
  "confidence": "high",
  "notes": "Toyota replaced the Nightshade trim with a new limited-run FX Edition for 2026 (1,600 units, based on SE). Corrected lineup/prices: SE $24,180, FX Edition $26,780, XSE $27,175 (all before destination). SE/FX combined mpg is 32; XSE (larger wheels) is 30 combined. Manual transmission remains discontinued; CVT only.",
  "sources": [
   {
    "label": "2026 Corolla Hatchback model page",
    "url": "https://www.toyota.com/corollahatchback/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Corolla_Hatchback.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "FX Edition replaces Nightshade, pricing",
    "url": "https://www.autoevolution.com/news/2026-toyota-corolla-hatchback-fx-edition-replaces-nightshade-pricing-shoots-up-256599.html",
    "site": "autoevolution.com"
   }
  ]
 },
 {
  "id": "toyota-crown",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Crown",
  "year": 2026,
  "bodyStyle": "sedan",
  "segment": "midsize hybrid sedan",
  "category": "car",
  "priceFrom": 41440,
  "priceTo": 54990,
  "trims": [
   {
    "name": "XLE",
    "msrp": 41440,
    "features": [
     "2.5L hybrid, 236 hp, standard AWD",
     "12.3-inch touchscreen",
     "JBL premium audio"
    ]
   },
   {
    "name": "Limited",
    "msrp": 45950,
    "features": [
     "Leather-trimmed heated/ventilated seats",
     "Panoramic roof",
     "Digital rearview mirror"
    ]
   },
   {
    "name": "Nightshade",
    "msrp": 48765,
    "features": [
     "New-for-2026 blacked-out trim",
     "Black badging & black 21-inch wheels",
     "Unique black/red interior"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 54990,
    "features": [
     "Hybrid Max powertrain (340 hp)",
     "Adaptive variable suspension",
     "Head-up display",
     "Massaging front seats"
    ]
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
    "engine": "2.4L turbo hybrid (Hybrid Max)",
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
   "widthIn": 74.7,
   "heightIn": 58.7,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4235,
   "groundClearanceIn": 6.4
  },
  "interior": {
   "passengerVolumeCuFt": 100.3,
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
   "New-for-2026 Nightshade trim",
   "Panoramic roof",
   "12.3-inch touchscreen",
   "JBL premium audio",
   "Digital rearview mirror"
  ],
  "towingLb": null,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Standard AWD across the lineup. Added a new-for-2026 Nightshade trim (blacked-out styling) between Limited and Platinum. XLE/Limited/Nightshade use the 236-hp standard hybrid (41 mpg combined); Platinum uses the 340-hp Hybrid Max system (30 mpg combined). Prices verified: $41,440/$45,950/$48,765/$54,990 before destination.",
  "sources": [
   {
    "label": "2026 Crown model page",
    "url": "https://www.toyota.com/crown/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Crown.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Crown trims & Nightshade pricing",
    "url": "https://carbuzz.com/cars/toyota/crown/2026/",
    "site": "carbuzz.com"
   }
  ]
 },
 {
  "id": "toyota-crown-signia",
  "make": "Toyota",
  "manufacturer": "Toyota Motor Corporation",
  "model": "Crown Signia",
  "year": 2026,
  "bodyStyle": "suv",
  "segment": "midsize hybrid SUV",
  "category": "suv",
  "priceFrom": 44390,
  "priceTo": 48790,
  "trims": [
   {
    "name": "XLE",
    "msrp": 44390,
    "features": [
     "2.5L hybrid, 240 hp, standard AWD",
     "12.3-inch touchscreen",
     "JBL premium audio"
    ]
   },
   {
    "name": "Limited",
    "msrp": 48790,
    "features": [
     "Leather-trimmed heated/ventilated seats",
     "Panoramic roof",
     "Digital rearview mirror"
    ]
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
   "lengthIn": 194.9,
   "widthIn": 74.9,
   "heightIn": 65.6,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4235,
   "groundClearanceIn": 7.2
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 25.4,
   "cargoMaxCuFt": 68.8,
   "lightInterior": true,
   "darkInterior": true
  },
  "spareTire": "temporary",
  "physicalControls": {
   "climate": true,
   "audio": true
  },
  "keyOptions": [
   "Standard AWD hybrid (240 hp)",
   "Panoramic roof",
   "12.3-inch touchscreen",
   "JBL premium audio",
   "Digital rearview mirror",
   "Power liftgate"
  ],
  "towingLb": 2700,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Highlander-based 5-seat crossover companion to the sedan-flavored Crown. Two trims only: XLE and Limited. Prices verified: $44,390/$48,790 before $1,450 destination. 38 mpg combined; tows up to 2,700 lb; up to 68.8 cu ft cargo with seats folded.",
  "sources": [
   {
    "label": "2026 Crown Signia model page",
    "url": "https://www.toyota.com/crownsignia/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Crown_Signia.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Crown Signia pricing & specs",
    "url": "https://carbuzz.com/cars/toyota/crown-signia-suv/2026/",
    "site": "carbuzz.com"
   }
  ]
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
  "priceFrom": 39920,
  "priceTo": 47965,
  "trims": [
   {
    "name": "GR Corolla",
    "msrp": 39920,
    "features": [
     "G16E-GTS 1.6L turbo I3, 300 hp/295 lb-ft",
     "GR-FOUR AWD with adjustable torque split",
     "6-speed manual (iMT) w/ rev-matching, or 8-speed GAZOO Racing automatic (+$2,000)",
     "Front & rear Torsen limited-slip differentials",
     "Brin Naub suede-trimmed sport seats with grey stitching"
    ]
   },
   {
    "name": "Premium Plus",
    "msrp": 47965,
    "features": [
     "Forged carbon-fiber roof",
     "Matte-black 15-spoke wheels & gloss-black rear spoiler",
     "Head-Up Display",
     "Brin Naub suede-trimmed sport seats with red stitching",
     "9-speaker 800-watt JBL premium audio"
    ]
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
    "mpgCombined": 24,
    "evRangeMi": null
   }
  ],
  "seats": [
   5
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 174,
   "widthIn": 72.8,
   "heightIn": 58,
   "wheelbaseIn": 103.9,
   "curbWeightLb": 3296,
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
  "confidence": "high",
  "notes": "Toyota narrowed the 2026 GR Corolla lineup to 2 grades (dropped the old Core/Premium 3-grade structure): base 'GR Corolla' and 'Premium Plus'. Confirmed via Toyota pressroom order-guide pricing: base $39,920 manual / $41,920 automatic; Premium Plus $45,965 manual / $47,965 automatic (all excl. $1,195 destination). priceFrom/priceTo reflect the full manual-to-automatic, base-to-Premium-Plus span. Combined mpg is 24 (both transmissions), not 21 as previously listed. Height corrected to 58in (was 57.2in) and curb weight to 3,296 lb (was 3,252 lb) per Toyota/Cars.com specs. A separate limited-production 'GRMN Corolla' variant was also announced for 2026 but pricing is not yet published by Toyota, so it is excluded from this record.",
  "sources": [
   {
    "label": "2026 GR Corolla model page",
    "url": "https://www.toyota.com/grcorolla/",
    "site": "toyota.com"
   },
   {
    "label": "Conquer Every Corner press release (grade MSRPs)",
    "url": "https://pressroom.toyota.com/conquer-every-corner-in-the-2026-toyota-gr-corolla/",
    "site": "pressroom.toyota.com"
   },
   {
    "label": "GR Corolla specs & dimensions",
    "url": "https://www.cars.com/research/toyota-gr_corolla-2026/specs/",
    "site": "cars.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Ice Cap",
     "hex": "#E9E7E2"
    },
    {
     "name": "Black",
     "hex": "#1C1C1C"
    },
    {
     "name": "Supersonic Red",
     "hex": "#8C1D2C"
    },
    {
     "name": "Heavy Metal",
     "hex": "#4B4E52"
    }
   ],
   "interior": [
    {
     "name": "Black Alcantara/leather, grey stitching (base)",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Black Alcantara/leather, red stitching (Premium Plus)",
     "hex": "#1C1C1C",
     "tone": "dark"
    }
   ]
  }
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
  "priceFrom": 56900,
  "priceTo": 70545,
  "trims": [
   {
    "name": "3.0",
    "msrp": 56900,
    "features": [
     "3.0L turbo I6, 382 hp/368 lb-ft",
     "6-speed manual or 8-speed automatic",
     "Adaptive suspension",
     "19-inch wheels"
    ]
   },
   {
    "name": "3.0 Premium",
    "msrp": 60050,
    "features": [
     "JBL audio",
     "Head-up display",
     "Heated seats",
     "Wireless phone charging"
    ]
   },
   {
    "name": "MkV Final Edition",
    "msrp": 70545,
    "features": [
     "Final-year send-off, limited to 1,300 units for North America",
     "Exclusive badging & colors",
     "Brembo brakes",
     "Forged wheels"
    ]
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
   "widthIn": 73,
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
  "notes": "Final model year for the fifth-generation Supra; sold as 3.0, 3.0 Premium, and the limited MkV Final Edition (1,300 units for North America), not MkV-only as previously listed. Production ends spring 2026. Trim pricing varies slightly across price guides (3.0 seen from $56,900-$59,495); figures here use the most-cited set and should be re-checked once Toyota's own configurator is reachable.",
  "sources": [
   {
    "label": "2026 GR Supra model page",
    "url": "https://www.toyota.com/grsupra/",
    "site": "toyota.com"
   },
   {
    "label": "2026 GR Supra trims & MSRP",
    "url": "https://www.edmunds.com/toyota/gr-supra/2026/trims/",
    "site": "edmunds.com"
   },
   {
    "label": "MkV Final Edition send-off",
    "url": "https://www.toyotaofbourbonnais.com/research-gr-supra-trims/",
    "site": "toyotaofbourbonnais.com"
   }
  ]
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
    "msrp": 31400,
    "features": [
     "2.4L flat-4, 228 hp",
     "6-speed manual or 6-speed automatic",
     "Standard active safety suite (incl. manual cars)"
    ]
   },
   {
    "name": "Premium",
    "msrp": 33965,
    "features": [
     "Heated front seats",
     "Duck-tail spoiler",
     "Blind Spot Detection + Rear Cross-Traffic Alert",
     "8-inch touchscreen"
    ]
   },
   {
    "name": "Yuzu Edition",
    "msrp": 37465,
    "features": [
     "New-for-2026 limited-run trim",
     "Exclusive Yuzu Yellow paint (homage to Scion FR-S Release Series 1.0)",
     "Includes Premium trim equipment"
    ]
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
   "passengerVolumeCuFt": 79,
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
  "confidence": "high",
  "notes": "228-hp 2.4L boxer, RWD, manual or automatic (automatic adds about $1,100 across trims). 2026 pricing verified: GR86 $31,400, Premium $33,965, new-for-2026 Yuzu Edition $37,465 (all manual-transmission base prices, before destination). Rear seats are occasional-use 2+2.",
  "sources": [
   {
    "label": "2026 GR86 model page",
    "url": "https://www.toyota.com/gr86/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_GR86.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 GR86 trims & Yuzu Edition pricing",
    "url": "https://carbuzz.com/cars/toyota/gr86/2026/specs-and-trims/",
    "site": "carbuzz.com"
   }
  ]
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
    "msrp": 43455,
    "features": [
     "2.4L turbo I4, 265 hp",
     "8-passenger seating standard",
     "8-inch touchscreen"
    ]
   },
   {
    "name": "Hybrid LE",
    "msrp": 45010,
    "features": [
     "2.5L hybrid, 245 hp",
     "34-36 mpg combined"
    ]
   },
   {
    "name": "XLE",
    "msrp": 47160,
    "features": [
     "Captain's chairs available (7-passenger)",
     "Power liftgate",
     "Blind-spot monitor"
    ]
   },
   {
    "name": "Limited",
    "msrp": 51370,
    "features": [
     "Leather-trimmed heated/ventilated seats",
     "12.3-inch touchscreen",
     "JBL premium audio"
    ]
   },
   {
    "name": "Hybrid Max Platinum",
    "msrp": 59900,
    "features": [
     "Hybrid Max powertrain (362 hp)",
     "Panoramic roof",
     "Digital rearview mirror",
     "Massaging front seats"
    ]
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
     "AWD"
    ],
    "mpgCombined": 35,
    "evRangeMi": null
   },
   {
    "type": "hybrid",
    "engine": "2.4L turbo hybrid (Hybrid Max)",
    "hp": 362,
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
   7,
   8
  ],
  "doors": 4,
  "dims": {
   "lengthIn": 201.4,
   "widthIn": 77.9,
   "heightIn": 70.8,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 4485,
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": null,
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
   "Hybrid Max powertrain (362 hp, Platinum)",
   "Panoramic moonroof",
   "JBL premium audio",
   "Heated & ventilated front seats",
   "12.3-inch touchscreen",
   "Captain's chairs (7-passenger, most trims)"
  ],
  "towingLb": 5000,
  "image": {
   "remote": null,
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/0/07/%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD_Toyota_Grand_Highlander.png",
     "kind": "interior",
     "credit": "Euro1212",
     "license": "CC0",
     "commons": "https://commons.wikimedia.org/wiki/File:%D0%A1%D0%B0%D0%BB%D0%BE%D0%BD_Toyota_Grand_Highlander.png"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/66/2024_Toyota_Grand_Highlander_XLE_AWD_in_Blueprint%2C_Front_Right%2C_09-10-2023.jpg",
     "kind": "exterior",
     "credit": "Elise240SX",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Toyota_Grand_Highlander_XLE_AWD_in_Blueprint,_Front_Right,_09-10-2023.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "Three powertrains across the lineup: 265-hp turbo gas (LE/XLE/Limited/Platinum), 245-hp hybrid (Hybrid LE/XLE/Limited/Nightshade), and 362-hp Hybrid Max (Limited/Platinum). 8-passenger seating standard on LE; 7-passenger captain's-chair layout available on every trim above it. Price sources disagree on whether destination ($1,495) is included, so treat priceFrom/priceTo as approximate pending a direct toyota.com confirmation.",
  "sources": [
   {
    "label": "2026 Grand Highlander model page",
    "url": "https://www.toyota.com/grandhighlander/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Grand_Highlander.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Grand Highlander trims & pricing",
    "url": "https://carbuzz.com/cars/toyota/grand-highlander/2026/",
    "site": "carbuzz.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA Safety Ratings API - 2026 Toyota Grand Highlander AWD (OverallRating 5)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21683",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.5,
    "scale": 5,
    "count": 83,
    "source": {
     "label": "Edmunds 2026 Toyota Grand Highlander consumer reviews",
     "url": "https://www.edmunds.com/toyota/grand-highlander/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.4,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating - 2026 Toyota Grand Highlander",
     "url": "https://www.edmunds.com/toyota/grand-highlander/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceTo": 54675,
  "trims": [
   {
    "name": "XLE",
    "msrp": 45270,
    "features": [
     "18-inch alloy wheels",
     "Power tilt/slide moonroof",
     "SofTex heated front seats",
     "8-inch touchscreen, 6 speakers",
     "Qi wireless charging, hands-free power liftgate"
    ]
   },
   {
    "name": "XSE",
    "msrp": 47340,
    "features": [
     "Sport-tuned suspension w/ Dynamic Torque Vectoring AWD",
     "Blacked-out 20-inch wheels & unique front fascia",
     "Black SofTex seats w/ ambient lighting",
     "Optional 12.3-inch touchscreen + 11-speaker JBL audio"
    ]
   },
   {
    "name": "Limited",
    "msrp": 49725,
    "features": [
     "12.3-inch touchscreen + 12.3-inch digital cluster",
     "JBL Premium 11-speaker audio",
     "Heated & ventilated leather seats",
     "Wood-tone dash trim",
     "Front/rear parking assist w/ automatic braking"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 52925,
    "features": [
     "Power panoramic glass moonroof",
     "Digital rearview mirror w/ HomeLink",
     "10-inch color head-up display",
     "Panoramic View Monitor (360-degree camera)",
     "Adaptive LED headlights"
    ]
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
   "widthIn": 76,
   "heightIn": 68.1,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 4376,
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": 141.3,
   "cargoCuFt": 16,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/6/6e/2023_Toyota_Highlander_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Toyota_Highlander_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/b/b6/2024_Toyota_Highlander_LE_AWD_in_Magnetic_Gray_Met.%2C_rear_left.jpg",
     "kind": "exterior",
     "credit": "Mr.choppers",
     "license": "CC BY-SA 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Toyota_Highlander_LE_AWD_in_Magnetic_Gray_Met.,_rear_left.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "For 2026 the LE trim was dropped and all trims (gas and hybrid) are now standard AWD — confirmed directly via Toyota's own press release headline 'Gets Standard All Wheel Drive Across the Lineup.' Gas lineup is XLE/XSE/Limited/Platinum ($45,270/$47,340/$49,725/$52,925); hybrid lineup is XLE/Limited/Platinum (no XSE) at $47,020/$51,475/$54,675 — corrected Limited and Platinum prices which were previously estimated too high. Towing is 5,000 lb for gas but only up to 3,500 lb for hybrid — the flat 5,000 lb figure on file applies to gas trims only. Curb weight corrected to 4,376 lb (gas XLE) from a stale 4,330 lb; weights range up to 4,595 lb for hybrid Limited/Platinum. XSE has a slightly longer body (197.4in) due to its unique fascia.",
  "sources": [
   {
    "label": "2026 Highlander gets standard AWD (pricing, specs, towing)",
    "url": "https://pressroom.toyota.com/2026-toyota-highlander-gets-standard-all-wheel-drive-across-the-lineup/",
    "site": "pressroom.toyota.com"
   },
   {
    "label": "2026 Highlander model page",
    "url": "https://www.toyota.com/highlander/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Highlander.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Highlander pricing detail",
    "url": "https://carbuzz.com/pricing-2026-toyota-highlander-details/",
    "site": "carbuzz.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Midnight Black Metallic",
     "hex": "#1C1C1C"
    },
    {
     "name": "Blueprint",
     "hex": "#1F3A5F"
    },
    {
     "name": "Heavy Metal",
     "hex": "#4B4E52"
    },
    {
     "name": "Ruby Flare Pearl",
     "hex": "#7A2333"
    },
    {
     "name": "Wind Chill Pearl",
     "hex": "#F0F0EE"
    }
   ],
   "interior": [
    {
     "name": "Black",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Graphite",
     "hex": "#5B5C5E",
     "tone": "dark"
    },
    {
     "name": "Glazed Caramel (Platinum)",
     "hex": "#8A5A34",
     "tone": "light"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Toyota Highlander AWD",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21664",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.8,
    "scale": 5,
    "count": 28,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Toyota Highlander",
     "url": "https://www.edmunds.com/toyota/highlander/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 6.4,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Toyota Highlander",
     "url": "https://www.edmunds.com/toyota/highlander/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
    "msrp": 57600,
    "features": [
     "Retro-styled base trim",
     "Cloth seats",
     "8-inch touchscreen",
     "6 speakers"
    ]
   },
   {
    "name": "Land Cruiser",
    "msrp": 62920,
    "features": [
     "SofTex faux-leather upholstery",
     "Larger touchscreen",
     "Crawl Control & Multi-Terrain Select"
    ]
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
   "lengthIn": 196.1,
   "widthIn": 78.2,
   "heightIn": 75.7,
   "wheelbaseIn": 112.2,
   "curbWeightLb": 5105,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 24.8,
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
   "i-FORCE MAX hybrid standard (326 hp)",
   "Full-time 4WD w/ locking center diff",
   "Crawl Control & Multi-Terrain Select",
   "Retro round headlights (1958)",
   "JBL premium audio"
  ],
  "towingLb": 6000,
  "image": {
   "remote": null,
   "credit": null
  },
  "confidence": "high",
  "notes": "Returned to the US for MY2024 on a 2-row, 5-seat layout; 2026 carries over the same 2-trim structure (base '1958' and the 'Land Cruiser' trim). Standard i-FORCE MAX hybrid (326 hp) on every unit. Prices verified around $57,600/$62,920 before destination; Toyota's own site has begun surfacing 2027 pages alongside 2026 inventory, so figures were cross-checked against dealer 2026-specific listings.",
  "sources": [
   {
    "label": "2026 Land Cruiser model page (toyota.com)",
    "url": "https://www.toyota.com/landcruiser/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Land_Cruiser.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Land Cruiser trims & pricing",
    "url": "https://www.carsdirect.com/toyota/land-cruiser/2026",
    "site": "carsdirect.com"
   }
  ]
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
    "msrp": 51795,
    "features": [
     "Complimentary hydrogen fuel allowance",
     "JBL premium audio",
     "Heated & ventilated seats",
     "Head-up display",
     "Advanced Park"
    ]
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
   "passengerVolumeCuFt": 89,
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
  "confidence": "high",
  "notes": "Sold only where hydrogen fueling exists (effectively California). Single-trim lineup for 2026 (XLE only) — the previously listed 'Limited' trim did not exist and has been removed. About 402 miles of hydrogen range; 74 MPGe combined. Purchase includes a hydrogen fuel credit. $51,795 confirmed unchanged from 2025.",
  "sources": [
   {
    "label": "2026 Mirai model page",
    "url": "https://www.toyota.com/mirai/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Mirai.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Mirai has same price as 2025",
    "url": "https://www.carsdirect.com/automotive-news/2026-toyota-mirai-has-same-price-as-2025",
    "site": "carsdirect.com"
   }
  ]
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
    "msrp": 28550,
    "features": [
     "194-hp hybrid system",
     "Toyota Safety Sense 3.0",
     "8-inch touchscreen"
    ]
   },
   {
    "name": "XLE",
    "msrp": 31995,
    "features": [
     "SofTex seat upholstery",
     "8-way power driver's seat",
     "Wireless charging pad"
    ]
   },
   {
    "name": "Nightshade",
    "msrp": 32800,
    "features": [
     "Blacked-out badging, bumper trim & door handles",
     "19-inch alloy wheels",
     "Carbon-fiber-look dash trim",
     "Black SofTex seats with gray stitching"
    ]
   },
   {
    "name": "Limited",
    "msrp": 35565,
    "features": [
     "JBL premium audio",
     "12.3-inch touchscreen",
     "Ventilated front seats"
    ]
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/1/1a/Toyota_PRIUS_Z_%286AA-MXWH60-AHXHB%29_interior.jpg",
     "kind": "interior",
     "credit": "Tokumeigakarinoaoshima",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Toyota_PRIUS_Z_(6AA-MXWH60-AHXHB)_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/f/fe/2023_Toyota_Prius_Z_2.0L_HEV_%282%29.jpg",
     "kind": "interior",
     "credit": "芯正",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Toyota_Prius_Z_2.0L_HEV_(2).jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "4-trim lineup confirmed: LE, XLE, Nightshade, Limited ($28,550-$35,565 FWD; AWD adds about $1,400 on every trim). Nightshade slots between XLE and Limited with blacked-out styling. LE FWD rated up to 57 mpg combined; XLE/Nightshade/Limited on 19-inch wheels about 52 mpg (AWD models 51 mpg).",
  "sources": [
   {
    "label": "2026 Prius model page",
    "url": "https://www.toyota.com/prius/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Prius.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Prius trims & Nightshade pricing",
    "url": "https://www.toyotaofbourbonnais.com/research-prius-trims/",
    "site": "toyotaofbourbonnais.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick+",
    "appliesTo": "2025 (carries over)",
    "source": {
     "label": "NHTSA Safety Ratings API - 2025 Toyota Prius AWD (OverallRating 5); no separate 2026 entry, current 5th-gen carryover",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/20258",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4.2,
    "scale": 5,
    "count": 29,
    "source": {
     "label": "Edmunds 2026 Toyota Prius consumer reviews",
     "url": "https://www.edmunds.com/toyota/prius/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.5,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating - 2026 Toyota Prius",
     "url": "https://www.edmunds.com/toyota/prius/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceTo": 40470,
  "trims": [
   {
    "name": "SE",
    "msrp": 33775,
    "features": [
     "44-mile EPA electric range, 127 MPGe combined (17-inch wheels)",
     "8-inch touchscreen, 7-inch digital gauge cluster",
     "Wireless Apple CarPlay/Android Auto",
     "17-inch alloy wheels",
     "Heated steering wheel, Toyota Safety Sense 3.0"
    ]
   },
   {
    "name": "XSE",
    "msrp": 37025,
    "features": [
     "19-inch wheels (39-mile EV range, 114 MPGe)",
     "8-way power heated SofTex seats",
     "Smart Key on all doors + liftback",
     "Wireless charger",
     "Standard front/rear parking assist w/ auto-braking"
    ]
   },
   {
    "name": "Nightshade Edition",
    "msrp": 37795,
    "features": [
     "Black exterior/interior accents (badging, door handles, bumper trim)",
     "Black-finished 19-inch wheels",
     "Carbon-fiber-look dash trim",
     "Exclusive Karashi color option"
    ]
   },
   {
    "name": "XSE Premium",
    "msrp": 40470,
    "features": [
     "12.3-inch touchscreen, fixed glass roof (standard)",
     "Ventilated seats + driver memory",
     "8-speaker JBL audio",
     "Power liftback, digital key",
     "Optional solar roof, Digital Rearview Mirror, Advanced Park"
    ]
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
   "Solar roof (XSE Premium, optional)",
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
  "notes": "Now officially marketed as 'Prius Plug-in Hybrid' (Prius Prime name retired). Lineup actually has 4 trims, not 3: SE, XSE, new-for-2026 Nightshade Edition, and XSE Premium. Corrected XSE MSRP to $37,025 (was $36,765) and XSE Premium to $40,470 (was $40,070), both confirmed via Toyota pressroom. EV range/MPGe differ by wheel size: SE's 17-inch wheels achieve 44 mi/127 MPGe, while XSE/Nightshade/XSE Premium's 19-inch wheels achieve 39 mi/114 MPGe — the powertrains array's flat 44mi/127MPGe reflects SE only (kept as the file's single powertrain record; higher trims are lower). Curb weight also rises on upper trims (SE 3,461 lb; XSE/Nightshade 3,516 lb; XSE Premium 3,571 lb). Solar roof is an XSE Premium-only optional add-on, not standard. No fueleconomy.gov page exists yet for this model (both 'Prius_Plug-in_Hybrid' and legacy 'Prius_Prime' URLs return 404) — EPA has not published a separate listing, so no fueleconomy.gov source is included.",
  "sources": [
   {
    "label": "2026 Prius Plug-in Hybrid model page",
    "url": "https://www.toyota.com/priuspluginhybrid/",
    "site": "toyota.com"
   },
   {
    "label": "2026 Prius Plug-in Hybrid pricing/grades press release",
    "url": "https://pressroom.toyota.com/vehicle/2026-toyota-prius-plug-in-hybrid/",
    "site": "pressroom.toyota.com"
   },
   {
    "label": "Nightshade Edition press release",
    "url": "https://pressroom.toyota.com/toyota-prius-plug-in-hybrid-gets-edgier-with-new-nightshade-edition/",
    "site": "pressroom.toyota.com"
   },
   {
    "label": "2026 Prius Plug-in Hybrid colors",
    "url": "https://www.carsdirect.com/toyota/prius-plug-in-hybrid/2026/colors",
    "site": "carsdirect.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Cutting Edge",
     "hex": "#8A9096"
    },
    {
     "name": "Guardian Gray",
     "hex": "#75787B"
    },
    {
     "name": "Midnight Black Metallic",
     "hex": "#1C1C1C"
    },
    {
     "name": "Reservoir Blue",
     "hex": "#1B4965"
    },
    {
     "name": "Supersonic Red",
     "hex": "#8C1D2C"
    },
    {
     "name": "Wind Chill Pearl",
     "hex": "#F0F0EE"
    },
    {
     "name": "Karashi (Nightshade Edition exclusive)",
     "hex": "#D9A441"
    }
   ],
   "interior": [
    {
     "name": "Black with Red trim",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "All-black SofTex (Nightshade Edition)",
     "hex": "#161616",
     "tone": "dark"
    }
   ]
  }
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
   "widthIn": 73,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/a/a8/TOYOTA_RAV4_%28XA60%29_CHINA_SPECIFICATION_INTERIOR_%282%29.jpg",
     "kind": "interior",
     "credit": "Dinkun Chen",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:TOYOTA_RAV4_(XA60)_CHINA_SPECIFICATION_INTERIOR_(2).jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Toyota_RAV4_CORE_%28rear_view%29_at_Japan_Mobility_Show_Kansai_2025.jpg",
     "kind": "exterior",
     "credit": "Aos.1905",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:Toyota_RAV4_CORE_(rear_view)_at_Japan_Mobility_Show_Kansai_2025.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "All-new sixth generation for 2026; every trim is hybrid (226-236 hp) or plug-in hybrid (320 hp). Base LE hybrid $31,900 and top GR Sport PHEV about $48,500 verified; mid-trim ladder (SE, XLE Premium, Woodland, XSE, Limited) omitted pending full pricing. Hybrid AWD adds about $1,400. Some dimensions/EPA figures were not final at data time.",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.toyota.com/rav4/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_RAV4.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "All-new 2026 generation overview",
    "url": "https://pressroom.toyota.com/five-things-to-know-about-the-all-new-2026-toyota-rav4/",
    "site": "pressroom.toyota.com"
   }
  ],
  "ratings": {
   "owner": {
    "score": 4.1,
    "scale": 5,
    "count": 9,
    "source": {
     "label": "Edmunds Consumer Reviews — 2026 Toyota RAV4",
     "url": "https://www.edmunds.com/toyota/rav4/2026/consumer-reviews/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 8.1,
    "scale": 10,
    "source": {
     "label": "Edmunds Expert Rating (Tested) — 2026 Toyota RAV4",
     "url": "https://www.edmunds.com/toyota/rav4/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceFrom": 64025,
  "priceTo": 84435,
  "trims": [
   {
    "name": "SR5",
    "msrp": 64025,
    "features": [
     "437-hp i-FORCE MAX hybrid standard",
     "Power-folding third row (new for 2026)",
     "14-inch touchscreen"
    ]
   },
   {
    "name": "Limited",
    "msrp": 69795,
    "features": [
     "Leather-trimmed heated/ventilated seats",
     "Updated premium interior materials (2026)",
     "Power running boards"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 82930,
    "features": [
     "Massaging front seats (new for 2026)",
     "Panoramic roof",
     "Rear air suspension"
    ]
   },
   {
    "name": "TRD Pro",
    "msrp": 80765,
    "features": [
     "4WD only",
     "Off-road-tuned suspension",
     "Skid plates & all-terrain tires"
    ]
   },
   {
    "name": "1794 Edition",
    "msrp": 80850,
    "features": [
     "Western-heritage leather interior treatment",
     "Unique badging & wheels"
    ]
   },
   {
    "name": "Capstone",
    "msrp": 84435,
    "features": [
     "Range-topping trim",
     "Semi-aniline leather",
     "Updated premium interior materials (2026)"
    ]
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
   "wheelbaseIn": 122,
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
  "confidence": "high",
  "notes": "Hybrid-only full-size SUV (437 hp standard, all 6 grades: SR5, Limited, Platinum, TRD Pro, 1794 Edition, Capstone). RWD standard on all trims except TRD Pro (4WD only). New for 2026: standard power-folding third-row seats fleet-wide, massaging front seats on Platinum, upgraded interior materials on Limited/Capstone. Prices verified across all 6 trims (excl. $2,095 destination); RWD base prices shown, 4WD adds about $3,000 on SR5/Limited. Tows up to 9,520 lb.",
  "sources": [
   {
    "label": "2026 Sequoia model page",
    "url": "https://www.toyota.com/sequoia/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Sequoia.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Sequoia trims comparison & pricing",
    "url": "https://www.edmunds.com/toyota/sequoia/2026/trims/",
    "site": "edmunds.com"
   }
  ]
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
   "cargoMaxCuFt": 101,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/a/a1/TOYOTA_SIENNA_%28XL40%29_CHINA_VERSION_INTERIOR.jpg",
     "kind": "interior",
     "credit": "Dinkun Chen",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:TOYOTA_SIENNA_(XL40)_CHINA_VERSION_INTERIOR.jpg"
    }
   ]
  },
  "confidence": "medium",
  "notes": "Hybrid-only minivan, 36 mpg combined even with available AWD. LE base $40,420 verified via dealer data for 2026; XLE/Platinum estimated from 2025 ladder. Woodland and 25th Anniversary editions also offered.",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.toyota.com/sienna/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Sienna.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing & trims",
    "url": "https://pressroom.toyota.com/2026-toyota-sienna-packs-in-more-standard-features/",
    "site": "pressroom.toyota.com"
   }
  ],
  "ratings": {
   "owner": {
    "score": 3.5,
    "scale": 5,
    "count": 30,
    "source": {
     "label": "Edmunds 2026 Toyota Sienna consumer reviews",
     "url": "https://www.edmunds.com/toyota/sienna/2026/",
     "site": "edmunds.com"
    }
   },
   "expert": {
    "score": 7.8,
    "scale": 10,
    "source": {
     "label": "Edmunds Rating - 2026 Toyota Sienna",
     "url": "https://www.edmunds.com/toyota/sienna/2026/",
     "site": "edmunds.com"
    }
   }
  }
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
  "priceFrom": 32145,
  "priceTo": 64350,
  "trims": [
   {
    "name": "SR",
    "msrp": 32145,
    "features": [
     "2.4L turbo I4 (228 hp base tune)",
     "8-inch touchscreen w/ wireless Apple CarPlay/Android Auto",
     "Tow hitch now standard (2026 update)",
     "Toyota Safety Sense 3.0"
    ]
   },
   {
    "name": "SR5",
    "msrp": 36235,
    "features": [
     "278-hp 2.4L turbo (full-power tune)",
     "17-inch alloy wheels",
     "LED foglights",
     "Body-color rear bumper"
    ]
   },
   {
    "name": "TRD Sport",
    "msrp": 40015,
    "features": [
     "Multilink coil-spring rear suspension, sport-tuned shocks",
     "18-inch wheels",
     "LED bed lighting",
     "6-speaker audio, heated seats"
    ]
   },
   {
    "name": "TRD Off-Road",
    "msrp": 42415,
    "features": [
     "Bilstein monotube shocks w/ piggyback reservoirs",
     "18-inch all-terrain tires",
     "Electronic locking rear differential",
     "Multi-Terrain Select, Crawl Control",
     "Available i-FORCE MAX hybrid (+$4,820)"
    ]
   },
   {
    "name": "Limited",
    "msrp": 53170,
    "features": [
     "Heated/ventilated SofTex seats, walnut trim",
     "Power running boards",
     "Head-Up Display, 14-inch touchscreen",
     "Available i-FORCE MAX hybrid (+$3,325)"
    ]
   },
   {
    "name": "Trailhunter",
    "msrp": 63350,
    "features": [
     "Standard i-FORCE MAX hybrid",
     "Old Man Emu 2.5-inch forged shocks",
     "ARB steel rear bumper & high-clearance bumpers",
     "33-inch tires on bronze 18-inch wheels"
    ]
   },
   {
    "name": "TRD Pro",
    "msrp": 64350,
    "features": [
     "Standard i-FORCE MAX hybrid",
     "FOX QS3 adjustable shocks",
     "IsoDynamic Performance front seats",
     "Exclusive Wave Maker color"
    ]
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
   "lengthIn": 213,
   "widthIn": 77.9,
   "heightIn": 74,
   "wheelbaseIn": 131.9,
   "curbWeightLb": 4400,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/f/f6/2024_Toyota_Tacoma_TRD_Sport_interior.jpg",
     "kind": "interior",
     "credit": "Deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Toyota_Tacoma_TRD_Sport_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/e/e6/2024_Toyota_Tacoma_TRD_Sport_front_view.jpg",
     "kind": "exterior",
     "credit": "Deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2024_Toyota_Tacoma_TRD_Sport_front_view.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "8 grades confirmed for 2026: SR, SR5, TRD PreRunner, TRD Sport, TRD Off-Road, Limited, Trailhunter, TRD Pro (i-FORCE MAX hybrid is a powertrain option on TRD Sport/Off-Road/Limited, standard on Trailhunter/TRD Pro). Corrected several MSRPs from prior estimates: SR $32,145 (was $32,245), TRD Sport $40,015 (was $40,200), TRD Off-Road i-FORCE MAX $47,235 (was $47,035), TRD Pro $64,350 (was $65,000). SR trim specifically uses a lower state of tune (228 hp) of the same 2.4L turbo that makes 278 hp on all other gas trims — confirmed by multiple dealer spec pages; this nuance isn't captured in the flat powertrains array which reflects the 278-hp tune used by most trims. Ground clearance corrected to approximately 10.4in for SR/SR5 (was 9.5in) — clearance ranges up to 11.5in on TRD Off-Road/TRD Pro hybrid trims. Towing of 6,500 lb is the XtraCab max; Double Cab tops out slightly lower at 6,400 lb.",
  "sources": [
   {
    "label": "2026 specs & features",
    "url": "https://www.toyota.com/tacoma/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Tacoma.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 pricing, trims & towing",
    "url": "https://pressroom.toyota.com/the-2026-toyota-tacoma-adventure-awaits/",
    "site": "pressroom.toyota.com"
   },
   {
    "label": "Trim levels and prices",
    "url": "https://www.spitzertoyota.com/toyota-research/2026-toyota-tacoma-trim-levels-and-prices/",
    "site": "spitzertoyota.com"
   }
  ],
  "colors": {
   "exterior": [
    {
     "name": "Super White",
     "hex": "#F1F1EE"
    },
    {
     "name": "Celestial Silver Metallic",
     "hex": "#C6C7C6"
    },
    {
     "name": "Ice Cap",
     "hex": "#E9E7E2"
    },
    {
     "name": "Mudbath",
     "hex": "#5A4632"
    },
    {
     "name": "Underground",
     "hex": "#33363A"
    },
    {
     "name": "Bronze Oxide",
     "hex": "#7A5230"
    },
    {
     "name": "Heritage Blue",
     "hex": "#1B3A5C"
    },
    {
     "name": "Supersonic Red",
     "hex": "#8C1D2C"
    },
    {
     "name": "Wave Maker (TRD Pro exclusive)",
     "hex": "#1E5C8C"
    }
   ],
   "interior": [
    {
     "name": "Black fabric (SR/SR5)",
     "hex": "#1C1C1C",
     "tone": "dark"
    },
    {
     "name": "Boulder/Black fabric w/ blue accents (TRD Off-Road)",
     "hex": "#4A4E52",
     "tone": "dark"
    },
    {
     "name": "Boulder SofTex w/ walnut trim (Limited)",
     "hex": "#8C8378",
     "tone": "light"
    }
   ]
  },
  "ratings": {
   "safety": {
    "nhtsa": 4,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Toyota Tacoma (Crew/Double Cab RWD)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21674",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 4,
    "scale": 5,
    "count": 12,
    "source": {
     "label": "KBB consumer reviews — 2026 Toyota Tacoma",
     "url": "https://www.kbb.com/toyota/tacoma/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.8,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Toyota Tacoma",
     "url": "https://www.kbb.com/toyota/tacoma/2026/",
     "site": "kbb.com"
    }
   }
  }
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
    "msrp": 41260,
    "features": [
     "348-hp i-FORCE twin-turbo V6",
     "Standard tow hitch w/ 7 & 4-pin wiring (new for 2026)",
     "32.2-gallon fuel tank (new for 2026)"
    ]
   },
   {
    "name": "SR5",
    "msrp": 46285,
    "features": [
     "389-hp i-FORCE V6",
     "18-inch wheels",
     "8-speaker audio"
    ]
   },
   {
    "name": "Limited i-FORCE MAX",
    "msrp": 58560,
    "features": [
     "437-hp i-FORCE MAX hybrid",
     "Leather-trimmed heated/ventilated seats",
     "14-inch touchscreen"
    ]
   },
   {
    "name": "Platinum",
    "msrp": 68075,
    "features": [
     "Panoramic roof",
     "Rear air suspension available"
    ]
   },
   {
    "name": "1794 Edition",
    "msrp": 68320,
    "features": [
     "Western-heritage leather interior",
     "Unique badging & wheels"
    ]
   },
   {
    "name": "TRD Pro",
    "msrp": 72300,
    "features": [
     "Standard i-FORCE MAX hybrid, 4WD only",
     "FOX internal-bypass shocks, 1.1-inch front lift",
     "18-inch BBS wheels w/ Falken Wildpeak A/T tires"
    ]
   },
   {
    "name": "Capstone",
    "msrp": 80800,
    "features": [
     "Range-topping trim",
     "Semi-aniline leather",
     "Chrome & unique badging"
    ]
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
   "heightIn": 78,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/0/0a/2023_Toyota_Tundra_interior.jpg",
     "kind": "interior",
     "credit": "deathpallie325",
     "license": "CC BY-SA 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2023_Toyota_Tundra_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/3/39/2022_Toyota_Tundra_Limited_%28United_States%29_front_view.jpg",
     "kind": "exterior",
     "credit": "Oxmoor Toyota",
     "license": "CC BY 3.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2022_Toyota_Tundra_Limited_(United_States)_front_view.jpg"
    }
   ]
  },
  "confidence": "high",
  "notes": "7-trim lineup confirmed: SR, SR5, Limited, Platinum, 1794 Edition, TRD Pro, Capstone ($41,260-$80,800, excl. destination). SR uses a detuned 348-hp version of the twin-turbo V6; SR5 and above make 389 hp; i-FORCE MAX hybrid (437 hp, available Limited+) is standard on TRD Pro. New for 2026: standard 32.2-gallon fuel tank and factory tow hitch w/ integrated wiring across the whole lineup. Tows up to 12,000 lb with i-FORCE MAX; max payload 1,850 lb.",
  "sources": [
   {
    "label": "2026 Tundra model page",
    "url": "https://www.toyota.com/tundra/",
    "site": "toyota.com"
   },
   {
    "label": "EPA fuel economy",
    "url": "https://www.fueleconomy.gov/feg/bymodel/2026_Toyota_Tundra.shtml",
    "site": "fueleconomy.gov"
   },
   {
    "label": "2026 Tundra price by trim",
    "url": "https://www.tustintoyota.com/research/2026-tundra-trims-pricing/",
    "site": "tustintoyota.com"
   }
  ],
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "iihs": "Top Safety Pick",
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA 5-Star Safety Ratings — 2026 Toyota Tundra (Crew Cab RWD)",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21668",
     "site": "nhtsa.gov"
    }
   },
   "owner": {
    "score": 3.4,
    "scale": 5,
    "count": 66,
    "source": {
     "label": "KBB consumer reviews — 2026 Toyota Tundra",
     "url": "https://www.kbb.com/toyota/tundra/2026/consumer-reviews/",
     "site": "kbb.com"
    }
   },
   "expert": {
    "score": 4.1,
    "scale": 5,
    "source": {
     "label": "KBB expert review — 2026 Toyota Tundra",
     "url": "https://www.kbb.com/toyota/tundra/2026/",
     "site": "kbb.com"
    }
   }
  }
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
   "lengthIn": 187,
   "widthIn": 74.8,
   "heightIn": 65.7,
   "wheelbaseIn": 116.1,
   "curbWeightLb": 5313,
   "groundClearanceIn": 7.5
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 13.3,
   "cargoMaxCuFt": 48,
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
   "groundClearanceIn": 8
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
   "groundClearanceIn": 5
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
   "widthIn": 73,
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
   "credit": null,
   "gallery": [
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Volkswagen_TIGUAN_eTSI_R-Line_%283AA-CT15%29_interior.jpg",
     "kind": "interior",
     "credit": "Tokumeigakarinoaoshima",
     "license": "CC0",
     "commons": "https://commons.wikimedia.org/wiki/File:Volkswagen_TIGUAN_eTSI_R-Line_(3AA-CT15)_interior.jpg"
    },
    {
     "url": "https://upload.wikimedia.org/wikipedia/commons/4/4a/2026_Volkswagen_Tiguan_%28Front%29_at_the_2025_NYC_Auto_Show.png",
     "kind": "exterior",
     "credit": "Raszbeary",
     "license": "CC BY 4.0",
     "commons": "https://commons.wikimedia.org/wiki/File:2026_Volkswagen_Tiguan_(Front)_at_the_2025_NYC_Auto_Show.png"
    }
   ]
  },
  "confidence": "high",
  "notes": "Third generation launched for 2025 (five seats only, no more third row). 2026 adds 268-hp SEL R-Line Turbo flagship; that trim's price is approximate pending official destination-exclusive figure. Most controls are touchscreen-based with a rotary driving-experience dial.",
  "ratings": {
   "safety": {
    "nhtsa": 5,
    "appliesTo": "2026",
    "source": {
     "label": "NHTSA SafetyRatings API — 2026 Volkswagen Tiguan SUV AWD (VehicleId 21045), OverallRating 5",
     "url": "https://api.nhtsa.gov/SafetyRatings/VehicleId/21045",
     "site": "NHTSA"
    }
   },
   "owner": {
    "score": 4.6,
    "scale": 5,
    "count": 22,
    "source": {
     "label": "Edmunds owner reviews — 2026 Volkswagen Tiguan (4.6/5, 22 reviews)",
     "url": "https://www.edmunds.com/volkswagen/tiguan/2026/",
     "site": "Edmunds"
    }
   },
   "expert": {
    "score": 7.6,
    "scale": 10,
    "source": {
     "label": "Edmunds expert rating — 2026 Volkswagen Tiguan (7.6/10)",
     "url": "https://www.edmunds.com/volkswagen/tiguan/2026/",
     "site": "Edmunds"
    }
   }
  }
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
   "groundClearanceIn": 7
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
   "groundClearanceIn": 7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 16,
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
   "groundClearanceIn": 8
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 12.8,
   "cargoMaxCuFt": 71,
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
   "widthIn": 74,
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
   "heightIn": 65,
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
   "lengthIn": 195,
   "widthIn": 75.7,
   "heightIn": 69.9,
   "wheelbaseIn": 117.5,
   "curbWeightLb": 4666,
   "groundClearanceIn": 8.7
  },
  "interior": {
   "passengerVolumeCuFt": null,
   "cargoCuFt": 13,
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

// -----------------------------------------------------------------------
// stats.js — "where does this vehicle sit?" relative positioning.
//
// For a given metric (price, length, MPG, horsepower, EV range, cargo,
// seats) this computes the vehicle's PERCENTILE against three pools:
//   • all   — every 2026 vehicle in the catalog
//   • class — vehicles in the same coarse class (v.category: suv/car/truck/van)
//   • make  — vehicles from the same brand
// so a card can say, at a glance, "bigger than 82% of SUVs".
//
// Pure computation over the static catalog. Distributions are memoized per
// (metric, scope-key) so a detail page paints instantly.
// -----------------------------------------------------------------------
import { VEHICLES } from './data/vehicles.js';

// Metric registry. `get` pulls a comparable number (or null to exclude).
// `higher`/`lower` are the plain-English direction words. `dir:'high'` means
// a bigger number is "more" of the thing (default); price reads naturally
// either way so we keep it neutral.
export const METRICS = {
  price:  { label:'Price',    get:v=>v.priceFrom,                              higher:'pricier', lower:'cheaper' },
  length: { label:'Length',   get:v=>v.dims?.lengthIn,                         higher:'longer',  lower:'shorter' },
  width:  { label:'Width',    get:v=>v.dims?.widthIn,                          higher:'wider',   lower:'narrower' },
  cargo:  { label:'Cargo',    get:v=>v.interior?.cargoMaxCuFt||v.interior?.cargoCuFt, higher:'roomier', lower:'smaller' },
  mpg:    { label:'Efficiency', get:v=>Math.max(0,...(v.powertrains||[]).map(p=>p.mpgCombined||0))||null, higher:'more efficient', lower:'thirstier' },
  hp:     { label:'Power',    get:v=>Math.max(0,...(v.powertrains||[]).map(p=>p.hp||0))||null, higher:'more powerful', lower:'less powerful' },
  range:  { label:'EV range', get:v=>Math.max(0,...(v.powertrains||[]).map(p=>p.evRangeMi||0))||null, higher:'longer range', lower:'shorter range' },
  seats:  { label:'Seating',  get:v=>Math.max(0,...(v.seats||[]))||null,       higher:'more seats', lower:'fewer seats' },
};

const CLASS_LABEL = { suv:'SUVs', car:'cars', truck:'trucks', van:'vans' };
export function classLabel(v){ return CLASS_LABEL[v.category] || 'vehicles'; }

// Memoized sorted value arrays, keyed by `${metric}|${scope}`.
const cache = new Map();
function sortedValues(metricKey, pool, cacheKey){
  if(cache.has(cacheKey)) return cache.get(cacheKey);
  const get = METRICS[metricKey].get;
  const vals = pool.map(get).filter(x=>x!=null && !isNaN(x) && x>0).sort((a,b)=>a-b);
  cache.set(cacheKey, vals);
  return vals;
}

// Fraction (0..1) of pool values strictly below x — i.e. "x beats this share".
function percentileOf(sorted, x){
  if(!sorted.length || x==null || isNaN(x)) return null;
  let lo=0, hi=sorted.length;
  while(lo<hi){ const mid=(lo+hi)>>1; if(sorted[mid]<x) lo=mid+1; else hi=mid; }
  // lo = count of values < x; average with count <= x for ties → smoother midpoint
  let hi2=lo; while(hi2<sorted.length && sorted[hi2]===x) hi2++;
  return ((lo + hi2)/2) / sorted.length;
}

// Return the vehicle's standing on a metric across all three scopes.
// { value, pct:{all,class,make}, n:{all,class,make}, higher, lower, classLabel }
// pct entries are 0..1 (or null when the scope has too little data / no value).
export function standing(metricKey, v){
  const m = METRICS[metricKey]; if(!m) return null;
  const value = m.get(v);
  if(value==null || isNaN(value) || value<=0) return null;

  const allSorted   = sortedValues(metricKey, VEHICLES, `${metricKey}|all`);
  const classPool   = VEHICLES.filter(x=>x.category===v.category);
  const classSorted = sortedValues(metricKey, classPool, `${metricKey}|c:${v.category}`);
  const makePool    = VEHICLES.filter(x=>x.make===v.make);
  const makeSorted  = sortedValues(metricKey, makePool, `${metricKey}|m:${v.make}`);

  return {
    value,
    higher:m.higher, lower:m.lower, label:m.label, classLabel:classLabel(v),
    pct: {
      all:   percentileOf(allSorted, value),
      class: classSorted.length>=4 ? percentileOf(classSorted, value) : null,
      make:  makeSorted.length>=3  ? percentileOf(makeSorted,  value) : null,
    },
    n: { all:allSorted.length, class:classSorted.length, make:makeSorted.length },
  };
}

// A short plain-English verdict for the primary (class) scope, e.g.
// "Bigger than 82% of SUVs" — falls back to the all-vehicles pool.
export function verdict(metricKey, v){
  const s = standing(metricKey, v); if(!s) return '';
  const scope = s.pct.class!=null ? 'class' : 'all';
  const p = Math.round((s.pct[scope]) * 100);
  const pool = scope==='class' ? s.classLabel : 'all cars';
  const word = p>=50 ? s.higher : s.lower;
  const share = p>=50 ? p : 100-p;
  return `${cap(word)} than ${share}% of ${pool}`;
}

const cap = s=> s ? s[0].toUpperCase()+s.slice(1) : s;

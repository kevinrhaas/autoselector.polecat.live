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
export function coarseLabel(v){ return CLASS_LABEL[v.category] || 'vehicles'; }

// A "peer class" one tier finer than the coarse category (suv/car/…): a size
// tier + a body family derived from the granular `segment` string, e.g.
// "compact SUV" or "full-size pickup". This is the pool people actually shop —
// a compact SUV against other compact SUVs, not against full-size body-on-frame
// ones. Luxury/electric/performance qualifiers are intentionally dropped so the
// pools stay large enough to be meaningful. Returns null when unclassifiable.
const PEER_SIZE = [['subcompact','subcompact'],['compact','compact'],['mid-size','midsize'],['midsize','midsize'],['full-size','full-size'],['fullsize','full-size'],['heavy-duty','heavy-duty']];
const PEER_BODY = [['pickup','pickup'],['3-row','3-row SUV'],['suv','SUV'],['crossover','SUV'],['minivan','minivan'],[' van','van'],['sports sedan','sedan'],['sedan','sedan'],['sports car','sports car'],['roadster','sports car'],['coupe','coupe'],['hatch','hatchback'],['wagon','wagon']];
export function peerClass(v){
  const s = (v.segment||'').toLowerCase();
  if(!s) return null;
  let size=null, body=null;
  for(const [k,val] of PEER_SIZE){ if(s.includes(k)){ size=val; break; } }
  for(const [k,val] of PEER_BODY){ if(s.includes(k)){ body=val; break; } }
  if(!body) return null;
  if(body==='3-row SUV' && !size) size='midsize';
  return (size?size+' ':'')+body;
}
// Pluralize a peer label for prose ("compact SUV" → "compact SUVs").
function pluralPeer(p){ return p ? p+'s' : p; }

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

  // Class scope: prefer the fine peer class ("compact SUV"); fall back to the
  // coarse category ("SUVs") when the peer pool is too small to be meaningful.
  const peer = peerClass(v);
  let classSorted = [], usedLabel = coarseLabel(v);
  if(peer){
    const peerPool = VEHICLES.filter(x=>peerClass(x)===peer);
    const peerSorted = sortedValues(metricKey, peerPool, `${metricKey}|p:${peer}`);
    if(peerSorted.length>=4){ classSorted = peerSorted; usedLabel = pluralPeer(peer); }
  }
  if(!classSorted.length){
    const catPool = VEHICLES.filter(x=>x.category===v.category);
    classSorted = sortedValues(metricKey, catPool, `${metricKey}|c:${v.category}`);
    usedLabel = coarseLabel(v);
  }

  const makePool    = VEHICLES.filter(x=>x.make===v.make);
  const makeSorted  = sortedValues(metricKey, makePool, `${metricKey}|m:${v.make}`);

  return {
    value,
    higher:m.higher, lower:m.lower, label:m.label, classLabel:usedLabel,
    pct: {
      all:   percentileOf(allSorted, value),
      class: classSorted.length>=4 ? percentileOf(classSorted, value) : null,
      make:  makeSorted.length>=3  ? percentileOf(makeSorted,  value) : null,
    },
    n: { all:allSorted.length, class:classSorted.length, make:makeSorted.length },
  };
}

// Full breakdown behind a standing bar — for the "how is this computed?"
// explainer. Returns the metric, this vehicle's value, and one entry per scope
// (class, all, make) carrying the pool size, the percentile, the min/median/max
// of the pool, and the ranked member list (name + value, this one flagged) so
// the UI can show EXACTLY which vehicles are in the calculation. Returns null
// when the metric doesn't apply to this vehicle.
export function standingDetail(metricKey, v){
  const m = METRICS[metricKey]; if(!m) return null;
  const value = m.get(v);
  if(value==null || isNaN(value) || value<=0) return null;
  const s = standing(metricKey, v); if(!s) return null;

  const peer = peerClass(v);
  const usePeer = peer && VEHICLES.filter(x=>peerClass(x)===peer).length>=4;
  const classPool = usePeer ? VEHICLES.filter(x=>peerClass(x)===peer)
                            : VEHICLES.filter(x=>x.category===v.category);
  const pools = {
    class: { label:s.classLabel, pool:classPool,                        pct:s.pct.class },
    all:   { label:'all 2026 vehicles', pool:VEHICLES,                  pct:s.pct.all   },
    make:  { label:v.make, pool:VEHICLES.filter(x=>x.make===v.make),    pct:s.pct.make  },
  };

  const scopes = [];
  for(const key of ['class','all','make']){
    const { label, pool, pct } = pools[key];
    // members with a real value for this metric, sorted high→low
    const members = pool.map(x=>({ id:x.id, name:`${x.make} ${x.model}`, value:m.get(x), isThis:x.id===v.id }))
      .filter(r=>r.value!=null && !isNaN(r.value) && r.value>0)
      .sort((a,b)=> b.value-a.value);
    const n = members.length;
    if(n<2 || pct==null) continue;
    const vals = members.map(r=>r.value);
    const median = vals.length%2 ? vals[(vals.length-1)/2] : (vals[vals.length/2-1]+vals[vals.length/2])/2;
    // rank: how many in the pool this vehicle is "higher" than (0-based from top)
    const beats = members.filter(r=>r.value < value).length;
    scopes.push({
      key, label, n, pct,
      hi:vals[0], lo:vals[vals.length-1], median,
      rankFromTop: members.findIndex(r=>r.isThis)+1,   // 1 = highest
      beats, members,
    });
  }
  return { metricKey, label:m.label, higher:m.higher, lower:m.lower, value,
    unit:METRIC_UNIT[metricKey]||'', scopes };
}
const METRIC_UNIT = { price:'', length:'″', width:'″', cargo:' cu ft', mpg:' mpg', hp:' hp', range:' mi', seats:'' };

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

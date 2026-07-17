// data/oracle.js — the "Mind Reader" finder's brain.
//
// A library of deliberately ODD, non-car questions (situations, puzzles,
// preferences) plus a hidden mapping from each answer to a set of vehicle
// TRAITS. Answering nudges every vehicle's affinity score; the finder then
// whittles the pool by dropping the lowest-scoring cars — and can explain, in
// plain language, exactly why the list shrank.
//
// Nothing here should read as being about cars. The magic is that abstract
// taste correlates with vehicle taste; the reveal ("why did it shrink?") makes
// the correlation transparent and fun rather than a black box.
//
// NOT pure data (it exports helper functions), so this file is never fetched by
// the changelog parser — it's an app module like any view helper.

import { VEHICLES } from './vehicles.js';

// The 14 traits every vehicle is scored on (0..1). Questions map answers to
// weighted nudges across these.
export const TRAITS = ['commanding','nimble','spacious','quick','efficient','electrified',
  'rugged','luxe','frugal','analog','bold','family','refined','playful'];

// Human phrasing for the "why did it shrink?" reveal.
export const TRAIT_WORDS = {
  commanding:'tall, sit-up-high vehicles',
  nimble:'small, easy-to-park cars',
  spacious:'roomy, haul-it-all vehicles',
  quick:'quick, eager machines',
  efficient:'fuel-sipping efficient ones',
  electrified:'electrified (hybrid or EV) picks',
  rugged:'rugged, go-anywhere rigs',
  luxe:'plush, upscale vehicles',
  frugal:'value-priced picks',
  analog:'knobs-and-buttons cabins',
  bold:'bold, head-turning designs',
  family:'family-hauling people-movers',
  refined:'smooth, refined cruisers',
  playful:'playful, fun-first cars',
};

const clamp = (x)=> x<0?0:x>1?1:x;
const maxOf = (arr, f)=> Math.max(0, ...arr.map(f).filter(x=>x!=null && !isNaN(x)));

// ---- hex → is this a loud color? -----------------------------------------
function flashyHex(hex){
  if(!/^#?[0-9a-f]{6}$/i.test(hex||'')) return false;
  const h = hex.replace('#',''); const r=parseInt(h.slice(0,2),16)/255, g=parseInt(h.slice(2,4),16)/255, b=parseInt(h.slice(4,6),16)/255;
  const mx=Math.max(r,g,b), mn=Math.min(r,g,b), l=(mx+mn)/2, d=mx-mn;
  const s = d===0?0:d/(1-Math.abs(2*l-1));
  return s>0.45 && l>0.28 && l<0.62;   // saturated, not near-black/white
}

// ---- per-vehicle trait profile (memoized) --------------------------------
const _cache = new Map();
export function traitProfile(v){
  if(_cache.has(v.id)) return _cache.get(v.id);
  const seg = (v.segment||'').toLowerCase();
  const body = v.bodyStyle||'';
  const h = v.dims?.heightIn, len = v.dims?.lengthIn, wt = v.dims?.curbWeightLb||3800;
  const hp = maxOf(v.powertrains||[], p=>p.hp);
  const mpg = maxOf(v.powertrains||[], p=>p.mpgCombined);
  const seats = Math.max(0, ...(v.seats||[0]));
  const drives = (v.powertrains||[]).flatMap(p=>p.drive||[]);
  const awd = drives.some(d=>d==='AWD'||d==='4WD');
  const clr = v.dims?.groundClearanceIn||0;
  const price = v.priceFrom ?? 45000;
  const ptypes = (v.powertrains||[]).map(p=>p.type);
  const flashy = (v.colors?.exterior||[]).some(c=>flashyHex(c.hex)) || ['coupe','convertible'].includes(body);
  const lux = /luxury|premium|grand touring|ultra/.test(seg) || v.make && ['Lexus','BMW','Mercedes-Benz','Audi','Genesis','Cadillac','Lincoln','Porsche','Acura','Infiniti','Volvo','Land Rover','Jaguar','Bentley','Rolls-Royce','Maserati','Alfa Romeo','Aston Martin'].includes(v.make);

  const powerToWeight = hp>0 ? (hp/(wt/1000)) : 40;   // ~40..200
  const p = {
    commanding: clamp((( (h??60) -58)/(78-58)) + (['suv','truck','pickup','van','minivan'].includes(body)?0.12:0)),
    nimble: clamp(((188-(len??190))/(188-158))),
    spacious: clamp((seats>=8?1: seats>=7?0.82: seats>=6?0.62: seats>=5?0.28:0.1) + (/3-row/.test(seg)?0.15:0) + ((v.interior?.cargoMaxCuFt||0)>75?0.15:0)),
    quick: clamp((powerToWeight-45)/(150-45)),
    efficient: ptypes.includes('ev') ? 0.92 : clamp(((mpg|| (ptypes.includes('hybrid')?32:20))-18)/(45-18)),
    electrified: ptypes.includes('ev')?1: ptypes.includes('phev')?0.85: ptypes.includes('hybrid')?0.6:0,
    rugged: clamp((awd?0.4:0) + (clr>=8?0.35:clr>=7?0.15:0) + (['pickup','truck'].includes(body)||/off-road|raptor|trail|rubicon|pickup/.test(seg)?0.35:0)),
    luxe: clamp((lux?0.5:0) + ((price-30000)/(90000-30000))*0.6),
    frugal: clamp((45000-price)/(45000-20000)),
    analog: clamp((v.physicalControls?.climate?0.5:0)+(v.physicalControls?.audio?0.5:0)),
    bold: clamp((['coupe','convertible'].includes(body)?0.45:0) + (powerToWeight>90?0.3:0) + (flashy?0.3:0)),
    family: clamp((['minivan','van'].includes(body)?0.85:0) + (seats>=7?0.5: seats>=6?0.3:0) + (/3-row/.test(seg)?0.2:0)),
    refined: clamp((lux?0.55:0) + (['sedan','suv'].includes(body)&&powerToWeight<95?0.25:0)),
    playful: clamp((['coupe','convertible','hatchback'].includes(body)?0.45:0) + (((188-(len??190))/(188-158))>0.4?0.25:0) + (flashy?0.35:0)),
  };
  _cache.set(v.id, p);
  return p;
}

// Author a question compactly: Q(id, prompt, [[label, weights], ...], sub?)
const Q = (id, prompt, opts, sub='')=>({ id, prompt, sub, opts: opts.map(([t,w])=>({ t, w })) });

// ---- the library ---------------------------------------------------------
// Weights are small ints (+2 strong, +1 gentle, -1/-2 away). Every option
// leans somewhere; "none of these" style neutrality is handled by the Skip
// button in the view, not by empty-weight options.
export const QUESTIONS = [
  Q('door', 'You find a door in your home you’ve somehow never noticed. You open it. What’s the FIRST thing you hope is on the other side?', [
    ['A spiral staircase climbing toward a skylight', {commanding:2, bold:1}],
    ['A tiny, perfect reading nook', {nimble:2, refined:1, frugal:1}],
    ['A workshop that smells of sawdust and oil', {rugged:2, analog:1}],
    ['A greenhouse humming with life', {efficient:1, electrified:1, family:1}],
  ]),
  Q('breakfast', 'It’s the first morning of a long trip. Breakfast is…', [
    ['Something fast I can eat with one hand', {frugal:1, nimble:1, efficient:1}],
    ['A proper spread — no rushing', {luxe:2, refined:1, spacious:1}],
    ['Whatever the locals swear by', {playful:1, bold:1}],
    ['Black coffee and the open road', {quick:1, analog:1, bold:1}],
  ]),
  Q('weather', 'A kind of weather makes you feel most ALIVE. Which?', [
    ['First snow, everything hushed', {rugged:2, commanding:1}],
    ['A hot, wide-open blue-sky day', {playful:2, bold:1}],
    ['Warm rain drumming on a roof', {refined:2, luxe:1}],
    ['Crisp autumn wind', {efficient:1, nimble:1}],
  ]),
  Q('animal', 'You wake up as an animal for one day. You’d want to be…', [
    ['A hawk, riding thermals', {commanding:2, quick:1}],
    ['A house cat, expert at comfort', {refined:2, luxe:1, nimble:1}],
    ['A husky, built for the cold and the haul', {rugged:2, spacious:1}],
    ['A dolphin, all speed and play', {playful:2, quick:1}],
  ]),
  Q('sound', 'The most satisfying sound in the world is…', [
    ['A heavy door thunking shut', {luxe:2, refined:1}],
    ['A mechanical click of a real switch', {analog:2, bold:1}],
    ['Near-total silence', {electrified:2, refined:1}],
    ['A distant engine you can feel in your chest', {quick:2, bold:1}],
  ]),
  Q('room', 'Your dream room is mostly…', [
    ['Glass and light and long views', {commanding:1, luxe:1, bold:1}],
    ['Warm wood and soft corners', {refined:2, analog:1}],
    ['Concrete, steel, nothing wasted', {nimble:1, frugal:1, electrified:1}],
    ['Full of gear ready for anything', {rugged:2, spacious:1}],
  ]),
  Q('gift', 'The best gift you ever received was…', [
    ['Something handmade', {analog:2, frugal:1}],
    ['Something absurdly luxurious', {luxe:2, refined:1}],
    ['An experience, not an object', {playful:2, efficient:1}],
    ['A tool you still use every week', {rugged:2, frugal:1}],
  ]),
  Q('crowd', 'At a party you’re most likely…', [
    ['In the middle of it, telling the story', {bold:2, playful:1}],
    ['Deep in one good conversation', {refined:2, luxe:1}],
    ['Helping in the kitchen', {family:2, frugal:1}],
    ['Slipping out early, no fuss', {nimble:2, efficient:1}],
  ]),
  Q('path', 'A trail splits. No signs. You take…', [
    ['The steep one with the view at the top', {commanding:2, rugged:1}],
    ['The winding one through the trees', {playful:2, nimble:1}],
    ['The flat, fast one home', {efficient:2, frugal:1}],
    ['Whichever looks least traveled', {bold:2, rugged:1}],
  ]),
  Q('color-gone', 'One color must vanish from the world forever. Which do you refuse to lose?', [
    ['Deep, glossy black', {luxe:2, refined:1, bold:1}],
    ['A loud, joyful red or orange', {bold:2, playful:2}],
    ['Every calm shade of grey and silver', {refined:1, nimble:1, efficient:1}],
    ['Forest and moss greens', {rugged:2, electrified:1}],
  ]),
  Q('superpower', 'A genie offers a power — but with a catch. You pick…', [
    ['Fly, but only you can see where you land', {commanding:2, bold:1}],
    ['Teleport, but only somewhere you’ve been', {nimble:2, efficient:1}],
    ['Super strength, but you must use it daily', {rugged:2, spacious:1}],
    ['Never tired, but you can never sit still', {quick:2, playful:1}],
  ]),
  Q('desk', 'Your desk, honestly, is…', [
    ['Immaculate. A place for everything', {refined:2, luxe:1}],
    ['A creative disaster that works', {playful:2, bold:1}],
    ['Minimal — a laptop and one plant', {nimble:2, electrified:1}],
    ['Covered in projects and parts', {rugged:1, analog:2}],
  ]),
  Q('museum', 'You get one hour in a museum. You run to…', [
    ['The vintage machines and engines', {analog:2, rugged:1}],
    ['The grand hall of masterpieces', {luxe:2, refined:1}],
    ['The interactive future-tech wing', {electrified:2, quick:1}],
    ['The tiny weird-curiosities room', {playful:2, nimble:1}],
  ]),
  Q('road-movie', 'Your life is a road movie. The poster tagline is…', [
    ['“Nothing could stop them.”', {rugged:2, commanding:1}],
    ['“They took the long way on purpose.”', {playful:2, refined:1}],
    ['“Fast, light, gone.”', {quick:2, nimble:1}],
    ['“Everyone piled in.”', {family:2, spacious:1}],
  ]),
  Q('inheritance', 'You inherit a building. You turn it into…', [
    ['A stylish, exclusive little hotel', {luxe:2, refined:1}],
    ['A community workshop for the neighborhood', {family:2, analog:1, frugal:1}],
    ['A greenhouse and solar farm', {electrified:2, efficient:1}],
    ['A garage for beautiful machines', {bold:2, quick:1}],
  ]),
  Q('shoes', 'The one pair of shoes you’d keep forever…', [
    ['Immaculate leather', {luxe:2, refined:1}],
    ['Beat-up trail boots', {rugged:2, spacious:1}],
    ['Fast, light runners', {quick:1, nimble:2, efficient:1}],
    ['Bright, ridiculous sneakers', {playful:2, bold:1}],
  ]),
  Q('storm', 'A huge storm is coming. Your instinct…', [
    ['Stock up, batten down, protect everyone', {family:2, spacious:1, rugged:1}],
    ['Grab the camera and go watch it', {bold:2, rugged:1}],
    ['Cozy in with tea and a book', {refined:2, nimble:1}],
    ['Check that everything still runs', {analog:2, efficient:1}],
  ]),
  Q('map', 'On a paper map, your eye goes first to…', [
    ['The mountains', {commanding:2, rugged:1}],
    ['The coastline roads', {playful:2, luxe:1}],
    ['The dense little city grid', {nimble:2, efficient:1}],
    ['The blank, unlabeled spaces', {bold:2, rugged:1}],
  ]),
  Q('phone', 'Your relationship with screens is…', [
    ['I’d happily use fewer of them', {analog:2, frugal:1}],
    ['One good screen for everything, please', {electrified:2, luxe:1}],
    ['Buttons for the important stuff, screen for the rest', {analog:1, refined:1}],
    ['Give me all the gadgets', {electrified:1, bold:2}],
  ]),
  Q('meal-out', 'The restaurant you’d go back to weekly is…', [
    ['The tasting-menu place for special nights', {luxe:2, refined:1}],
    ['The loud, cheap, amazing hole-in-the-wall', {frugal:2, playful:1}],
    ['The big table where everyone fits', {family:2, spacious:1}],
    ['Wherever’s closest and quickest', {efficient:2, nimble:1}],
  ]),
  Q('handshake', 'You trust a person faster if they…', [
    ['Have a firm, no-nonsense grip', {rugged:2, analog:1}],
    ['Are impeccably, quietly put-together', {luxe:2, refined:1}],
    ['Make you laugh in the first minute', {playful:2, bold:1}],
    ['Remember the small practical details', {family:1, efficient:2}],
  ]),
  Q('lottery', 'You win a modest fortune. First move…', [
    ['One truly beautiful splurge', {luxe:2, bold:1}],
    ['Invest it and barely change a thing', {frugal:2, efficient:1}],
    ['Take everyone I love on a trip', {family:2, spacious:1}],
    ['Buy the freedom to do less', {refined:2, electrified:1}],
  ]),
  Q('tool', 'Pick a tool to be marooned with…', [
    ['A good knife', {nimble:2, rugged:1}],
    ['A full toolbox', {rugged:2, spacious:1, analog:1}],
    ['A solar charger and a tablet', {electrified:2, efficient:1}],
    ['A really nice pen', {refined:2, luxe:1}],
  ]),
  Q('dance', 'On a dance floor you are…', [
    ['All in, no self-consciousness', {bold:2, playful:2}],
    ['Smooth and controlled', {refined:2, luxe:1}],
    ['Near the exit, watching', {nimble:1, frugal:1, analog:1}],
    ['Starting the conga line', {family:2, spacious:1}],
  ]),
  Q('typeface', 'If you were a typeface you’d be…', [
    ['A crisp, expensive serif', {luxe:2, refined:1}],
    ['A friendly rounded sans', {family:2, playful:1}],
    ['A bold industrial stencil', {rugged:2, bold:1}],
    ['A tight, efficient monospace', {nimble:1, efficient:2, analog:1}],
  ]),
  Q('night', 'Perfect night out ends with…', [
    ['A quiet drink somewhere elegant', {luxe:2, refined:1}],
    ['A spontaneous adventure across town', {playful:2, bold:1}],
    ['Everyone back at yours, talking till 2am', {family:2, spacious:1}],
    ['Home early, pleasantly tired', {efficient:1, nimble:1, refined:1}],
  ]),
  Q('collection', 'You’d secretly love to collect…', [
    ['Watches or something finely made', {luxe:2, analog:1}],
    ['Vinyl, cameras, mechanical things', {analog:2, refined:1}],
    ['Stamps in a passport', {playful:2, efficient:1}],
    ['Tools and gear that earn their place', {rugged:2, frugal:1}],
  ]),
  Q('planet', 'Humanity settles a new world. Your role…', [
    ['Scout — first over every ridge', {rugged:2, commanding:1, bold:1}],
    ['Builder — infrastructure and homes', {spacious:2, family:1}],
    ['Engineer — power and efficiency', {electrified:2, efficient:1}],
    ['Designer — make it beautiful to live in', {luxe:2, refined:1}],
  ]),
  Q('fear', 'The mild fear you’d admit to…', [
    ['Being trapped somewhere small', {spacious:2, commanding:1}],
    ['Being seen as boring', {bold:2, playful:1}],
    ['Wasting money on the wrong thing', {frugal:2, efficient:1}],
    ['Things breaking when I need them', {rugged:2, analog:1}],
  ]),
  Q('season', 'You are, at heart, a…', [
    ['Deep-winter person', {rugged:2, luxe:1}],
    ['High-summer person', {playful:2, bold:1}],
    ['Early-spring person', {electrified:1, efficient:1, nimble:1}],
    ['Golden-autumn person', {refined:2, family:1}],
  ]),
  Q('bag', 'Packing for a week, you bring…', [
    ['One carry-on, ruthlessly edited', {nimble:2, efficient:1, frugal:1}],
    ['A big case — options matter', {spacious:2, luxe:1}],
    ['A duffel and a pair of boots', {rugged:2, bold:1}],
    ['Whatever the family needs, times four', {family:2, spacious:1}],
  ]),
  Q('leader', 'The leader you’d follow is…', [
    ['Calm, precise, unflappable', {refined:2, luxe:1}],
    ['Bold and a little reckless', {bold:2, quick:1}],
    ['Practical, gets everyone home safe', {family:2, rugged:1}],
    ['Frugal and clever with resources', {frugal:2, efficient:1}],
  ]),
  Q('house-pick', 'Your dream home is…', [
    ['A glass house on a hill', {commanding:2, luxe:1}],
    ['A snug cabin in the woods', {rugged:2, nimble:1}],
    ['A smart, solar-powered box', {electrified:2, efficient:1}],
    ['A big rambling place for everyone', {family:2, spacious:1}],
  ]),
  Q('argument', 'You win arguments by…', [
    ['Sheer confident presence', {commanding:2, bold:1}],
    ['Quiet, airtight logic', {refined:2, efficient:1}],
    ['Making everyone laugh', {playful:2, family:1}],
    ['Just out-preparing everyone', {analog:1, frugal:1, rugged:1}],
  ]),
  Q('treat', 'Your comfort splurge is…', [
    ['The finest version of a simple thing', {luxe:2, refined:1}],
    ['Something loud and fun and cheap', {playful:2, frugal:1}],
    ['A gadget that does something clever', {electrified:2, bold:1}],
    ['A trip somewhere with no plan', {rugged:1, bold:2}],
  ]),
  Q('team-sport', 'In any group project you’re the one who…', [
    ['Sets the bold vision', {bold:2, commanding:1}],
    ['Makes sure it’s polished', {refined:2, luxe:1}],
    ['Keeps everyone fed and organized', {family:2, spacious:1}],
    ['Quietly does the hard part fast', {quick:2, efficient:1}],
  ]),
  Q('cabin', 'A weekend cabin needs, above all…', [
    ['A big deck with a view', {commanding:2, luxe:1}],
    ['A wood stove and real quiet', {refined:2, analog:1}],
    ['Room to sleep the whole crew', {family:2, spacious:1}],
    ['Easy access, nothing fussy', {efficient:1, nimble:1, frugal:1}],
  ]),
  Q('drink', 'Your signature drink is…', [
    ['Something classic and well-made', {refined:2, luxe:1}],
    ['A wild colorful concoction', {playful:2, bold:1}],
    ['Just water, honestly', {efficient:1, frugal:2}],
    ['Whatever’s strong and simple', {rugged:2, analog:1}],
  ]),
  Q('clock', 'Your ideal daily pace is…', [
    ['Fast — I like a bit of urgency', {quick:2, bold:1}],
    ['Smooth and unhurried', {refined:2, luxe:1}],
    ['Efficient — no wasted minutes', {efficient:2, nimble:1}],
    ['Full and busy with people', {family:2, spacious:1}],
  ]),
  Q('risk', 'Someone dares you to do something new. You…', [
    ['Say yes before they finish the sentence', {bold:2, playful:1}],
    ['Ask three smart questions first', {refined:1, efficient:1, analog:1}],
    ['Only if it’s genuinely useful', {frugal:2, rugged:1}],
    ['Bring friends and make it an event', {family:2, spacious:1}],
  ]),
  Q('workshop', 'Given a free afternoon and a garage, you’d…', [
    ['Tinker and fix something with your hands', {analog:2, rugged:1}],
    ['Detail and polish till it gleams', {refined:2, luxe:1}],
    ['Rig up something clever and electric', {electrified:2, quick:1}],
    ['Load up and just go somewhere', {rugged:1, bold:2}],
  ]),
  Q('view', 'The view you’d pay extra for…', [
    ['Above it all, city lights below', {commanding:2, luxe:1}],
    ['A wild coastline, no buildings', {rugged:2, bold:1}],
    ['A quiet green garden', {refined:2, electrified:1}],
    ['The people I love, all in frame', {family:2, spacious:1}],
  ]),
  Q('gadget', 'The gadget you’d actually use is…', [
    ['One elegant thing that just works', {refined:2, electrified:1}],
    ['A rugged one you can drop in a river', {rugged:2, analog:1}],
    ['The absolute fastest on the market', {quick:2, bold:1}],
    ['The cheapest that does the job', {frugal:2, efficient:1}],
  ]),
  Q('secret-talent', 'Your secret talent would be…', [
    ['Reading a room instantly', {refined:2, luxe:1}],
    ['Fixing anything with a paperclip', {analog:2, rugged:1, frugal:1}],
    ['Making strangers into friends', {family:2, playful:1}],
    ['Always finding the shortcut', {nimble:2, efficient:1}],
  ]),
  Q('legacy', 'You’d want to be remembered as…', [
    ['The one with impeccable taste', {luxe:2, refined:1}],
    ['The one who was always up for it', {bold:2, playful:1}],
    ['The one who showed up for everyone', {family:2, spacious:1}],
    ['The one who did more with less', {frugal:2, efficient:1}],
  ]),
  Q('island', 'Marooned on an island, your first project…', [
    ['A tall lookout to spot rescue', {commanding:2, bold:1}],
    ['A sturdy, weatherproof shelter', {rugged:2, spacious:1}],
    ['A clever solar still and signal', {electrified:2, efficient:1}],
    ['A comfortable little camp, done right', {refined:1, nimble:1, luxe:1}],
  ]),
  Q('music', 'The music that moves you most is…', [
    ['Big, cinematic, orchestral', {commanding:2, luxe:1}],
    ['Loud guitars and drums', {bold:2, quick:1}],
    ['Something warm and analog on vinyl', {analog:2, refined:1}],
    ['Bright, bouncy, impossible not to move to', {playful:2, nimble:1}],
  ]),
  Q('kitchen', 'Your kitchen style is…', [
    ['Pro-grade, everything gleaming', {luxe:2, refined:1}],
    ['Cluttered, lived-in, delicious', {family:2, analog:1}],
    ['Tiny but perfectly efficient', {nimble:2, efficient:1, frugal:1}],
    ['Whatever gets dinner out fast', {quick:1, frugal:1, efficient:1}],
  ]),
  Q('pet', 'The pet that fits you is…', [
    ['A big loyal dog', {rugged:1, family:2, spacious:1}],
    ['An elegant, aloof cat', {refined:2, luxe:1}],
    ['Something small and quick, like a ferret', {nimble:2, playful:1}],
    ['A whole chaotic menagerie', {spacious:2, family:1}],
  ]),
  Q('commute-dream', 'Your dream way to get to work…', [
    ['Gliding silently, coffee in hand', {electrified:2, refined:1}],
    ['Carving a fun back road', {playful:2, quick:1}],
    ['The shortest, cheapest possible route', {frugal:2, efficient:1}],
    ['High up, above the traffic', {commanding:2, spacious:1}],
  ]),
  Q('badge', 'A badge on your jacket would read…', [
    ['“Explorer”', {rugged:2, bold:1}],
    ['“Connoisseur”', {luxe:2, refined:1}],
    ['“Fixer”', {analog:2, frugal:1}],
    ['“Ringleader”', {family:2, playful:1}],
  ]),
  Q('weekend', 'The weekend that recharges you…', [
    ['Off-grid somewhere hard to reach', {rugged:2, commanding:1}],
    ['A city break with great food', {luxe:2, playful:1}],
    ['Puttering at home fixing things', {analog:2, frugal:1}],
    ['A big get-together with everyone', {family:2, spacious:1}],
  ]),
  Q('first-impression', 'You’d rather a stranger think you’re…', [
    ['Impressive', {luxe:2, commanding:1}],
    ['Fun', {playful:2, bold:1}],
    ['Dependable', {rugged:2, family:1}],
    ['Sharp and smart', {efficient:2, nimble:1}],
  ]),
  Q('paint', 'A blank wall — you paint it…', [
    ['A deep dramatic tone', {luxe:2, bold:1}],
    ['A bright happy pop of color', {playful:2, bold:1}],
    ['Warm, soft, neutral', {refined:2, family:1}],
    ['Leave it clean and white', {nimble:1, efficient:1, electrified:1}],
  ]),
  Q('challenge', 'The challenge that excites you…', [
    ['Summit something', {commanding:2, rugged:1}],
    ['Build something lasting', {spacious:2, family:1}],
    ['Beat a record', {quick:2, bold:1}],
    ['Make something beautiful', {luxe:2, refined:1}],
  ]),
  Q('snack', 'Late-night snack, no judgment…', [
    ['Something fancy I hid from myself', {luxe:2, refined:1}],
    ['The greasiest, best fast food', {frugal:2, playful:1}],
    ['Fruit and a big glass of water', {efficient:2, electrified:1}],
    ['Leftovers, straight from the fridge', {frugal:1, family:1, analog:1}],
  ]),
  Q('signature', 'People know you by your…', [
    ['Impeccable style', {luxe:2, refined:1}],
    ['Big laugh', {playful:2, family:1}],
    ['Calm under pressure', {refined:1, rugged:1, commanding:1}],
    ['Clever hacks and shortcuts', {efficient:2, nimble:1}],
  ]),
  Q('vehicle-past', 'The best ride of your childhood memories was…', [
    ['A rugged old thing that went anywhere', {rugged:2, analog:1}],
    ['Something big the whole family piled into', {family:2, spacious:1}],
    ['A fast one that felt like flying', {quick:2, bold:1}],
    ['A humble one that never, ever quit', {frugal:2, efficient:1}],
  ]),
  Q('desk-plant', 'If you were a houseplant…', [
    ['A towering fiddle-leaf, statement piece', {commanding:2, luxe:1}],
    ['A tough little succulent', {rugged:2, nimble:1, frugal:1}],
    ['A trailing pothos that fills the room', {family:2, spacious:1}],
    ['A bright flowering orchid', {refined:2, playful:1}],
  ]),
  Q('game', 'Board-game night, you’re the type who…', [
    ['Plays to win, boldly', {bold:2, quick:1}],
    ['Optimizes quietly and wins by turn 30', {efficient:2, refined:1}],
    ['Makes it fun for everyone', {family:2, playful:1}],
    ['Reads the rules cover to cover first', {analog:2, frugal:1}],
  ]),
  Q('sky', 'Look up. You’d rather see…', [
    ['A dramatic storm rolling in', {rugged:2, bold:1}],
    ['Endless clear blue', {playful:2, efficient:1}],
    ['A soft pink-and-gold sunset', {refined:2, luxe:1}],
    ['A sky full of stars, far from town', {commanding:1, rugged:2}],
  ]),
  Q('handwriting', 'Your handwriting is…', [
    ['Elegant and deliberate', {refined:2, luxe:1}],
    ['Fast and barely legible', {quick:2, nimble:1}],
    ['Neat, practical, clear', {efficient:2, family:1}],
    ['Big and expressive', {bold:2, playful:1}],
  ]),
  Q('door2', 'Two buttons. You must press one…', [
    ['“Double everything you own, but it’s all huge”', {spacious:2, commanding:1}],
    ['“Halve everything, but it’s all exquisite”', {luxe:2, nimble:1, refined:1}],
    ['“Everything you own becomes electric”', {electrified:2, efficient:1}],
    ['“Everything becomes unbreakable but plain”', {rugged:2, frugal:1}],
  ]),
  Q('travel-style', 'Your travel style is…', [
    ['Five-star, everything arranged', {luxe:2, refined:1}],
    ['Backpack and a rough plan', {rugged:2, frugal:1, nimble:1}],
    ['Road trip with the whole gang', {family:2, spacious:1}],
    ['Fast city-hop, see it all', {quick:2, efficient:1}],
  ]),
  Q('fixit', 'Something breaks at home. You…', [
    ['Fix it yourself, satisfied', {analog:2, rugged:1, frugal:1}],
    ['Replace it with something nicer', {luxe:2, bold:1}],
    ['Find the smart, efficient solution', {electrified:1, efficient:2}],
    ['Rally the household to sort it', {family:2, spacious:1}],
  ]),
  Q('dessert', 'Dessert says a lot. You choose…', [
    ['A perfect, tiny, expensive one', {luxe:2, nimble:1, refined:1}],
    ['The biggest sundae on the menu', {spacious:2, playful:1}],
    ['Fresh fruit, keeping it light', {efficient:2, electrified:1}],
    ['Whatever’s the local classic', {family:1, rugged:1, frugal:1}],
  ]),
  Q('office', 'Your ideal workspace is…', [
    ['A corner office with a skyline', {commanding:2, luxe:1}],
    ['A workshop bench', {analog:2, rugged:1}],
    ['A quiet minimalist studio', {refined:2, nimble:1}],
    ['A buzzing shared table', {family:2, playful:1}],
  ]),
  Q('vacation-photo', 'The vacation photo you’d frame…', [
    ['You on a summit, arms up', {commanding:2, rugged:1}],
    ['A perfect meal, beautifully plated', {luxe:2, refined:1}],
    ['The whole crew laughing', {family:2, spacious:1}],
    ['A blur of motion, something fast', {quick:2, bold:1}],
  ]),
  Q('closet', 'Your wardrobe is mostly…', [
    ['A few perfect, expensive pieces', {luxe:2, refined:1, nimble:1}],
    ['Durable stuff that lasts years', {rugged:2, frugal:1}],
    ['Bright, expressive, a bit loud', {bold:2, playful:1}],
    ['Practical layers for any day', {family:1, efficient:2}],
  ]),
  Q('newspaper', 'You open the paper first to…', [
    ['Business and markets', {luxe:2, efficient:1}],
    ['Sports', {quick:2, bold:1}],
    ['Travel and outdoors', {rugged:2, commanding:1}],
    ['Home, food, and family', {family:2, refined:1}],
  ]),
  Q('superhero', 'Your superhero vehicle would be…', [
    ['A sleek silent one that appears from nowhere', {electrified:2, refined:1}],
    ['A roaring beast that flips cars', {bold:2, quick:1}],
    ['An armored tank that protects the team', {rugged:2, spacious:1, family:1}],
    ['A tiny one that squeezes anywhere', {nimble:2, playful:1}],
  ]),
  Q('morning', 'Best possible morning…', [
    ['Sunrise hike, cold air', {rugged:2, commanding:1}],
    ['Slow coffee, robe, no plans', {refined:2, luxe:1}],
    ['Up and moving fast, gym done by 7', {quick:2, efficient:1}],
    ['Pancakes with a full house', {family:2, spacious:1}],
  ]),
  Q('scent', 'A scent that feels like home…', [
    ['Leather and old books', {luxe:2, refined:1, analog:1}],
    ['Pine forest and campfire', {rugged:2, commanding:1}],
    ['Fresh rain on hot pavement', {electrified:1, playful:1, nimble:1}],
    ['Something baking, whole house warm', {family:2, spacious:1}],
  ]),
  Q('budget-brain', 'Money-wise, you’re the type to…', [
    ['Buy once, buy the best', {luxe:2, refined:1}],
    ['Hunt the smartest value every time', {frugal:2, efficient:1}],
    ['Splurge on experiences, save on stuff', {playful:2, nimble:1}],
    ['Invest in things that last decades', {rugged:2, family:1}],
  ]),
  Q('open-road', 'The open road makes you want to…', [
    ['Push it and feel the speed', {quick:2, bold:1}],
    ['Cruise in silence and comfort', {refined:2, electrified:1}],
    ['Find the dirt turnoff', {rugged:2, commanding:1}],
    ['Sing along with everyone in the car', {family:2, playful:1}],
  ]),
  Q('style-word', 'Pick the word you want to embody…', [
    ['Powerful', {commanding:2, quick:1}],
    ['Elegant', {luxe:2, refined:1}],
    ['Free', {rugged:2, bold:1}],
    ['Warm', {family:2, refined:1}],
  ]),
  Q('gym', 'Your version of a workout is…', [
    ['Heavy lifting, real effort', {rugged:2, quick:1}],
    ['A long calm walk or swim', {refined:1, efficient:1, electrified:1}],
    ['A fast, brutal, efficient circuit', {quick:2, efficient:1}],
    ['Something social — a team or class', {family:2, playful:1}],
  ]),
  Q('gift-give', 'When you give a gift you…', [
    ['Go big and impressive', {luxe:2, bold:1}],
    ['Make or personalize it', {analog:2, family:1}],
    ['Find the clever practical thing', {efficient:2, frugal:1}],
    ['Give an adventure', {rugged:1, playful:2}],
  ]),
  Q('camp', 'Camping, you sleep in…', [
    ['A rugged tent, deep in it', {rugged:2, bold:1}],
    ['A decked-out camper with a real bed', {luxe:1, spacious:2}],
    ['Whatever’s lightest to carry', {nimble:2, efficient:1, frugal:1}],
    ['A big group setup, everyone together', {family:2, spacious:1}],
  ]),
  Q('screen-time', 'Your dream TV setup…', [
    ['Cinema-huge, the works', {commanding:2, luxe:1, spacious:1}],
    ['One tasteful screen, hidden when off', {refined:2, nimble:1}],
    ['Latest tech, all connected', {electrified:2, bold:1}],
    ['Whatever the family will gather around', {family:2, spacious:1}],
  ]),
  Q('walk', 'Out walking, you naturally…', [
    ['Set a brisk, purposeful pace', {quick:2, efficient:1}],
    ['Amble and notice everything', {refined:2, playful:1}],
    ['Head for the highest point', {commanding:2, rugged:1}],
    ['Wait up for whoever’s slowest', {family:2, spacious:1}],
  ]),
  Q('name-boat', 'You buy a boat. You name it…', [
    ['Something grand and Latin', {luxe:2, commanding:1}],
    ['A silly pun', {playful:2, family:1}],
    ['Something rugged and one-word', {rugged:2, bold:1}],
    ['“Break Even”', {frugal:2, efficient:1}],
  ]),
  Q('cold-hot', 'You’d rather be…', [
    ['A little too cold', {rugged:2, refined:1}],
    ['A little too hot', {playful:2, bold:1}],
    ['Exactly climate-controlled', {luxe:2, electrified:1}],
    ['Wherever the group is', {family:2, spacious:1}],
  ]),
  Q('paperwork', 'Boring admin tasks — you…', [
    ['Batch them and blitz through fast', {quick:2, efficient:1}],
    ['Keep an immaculate system', {refined:2, luxe:1}],
    ['Avoid until absolutely forced', {playful:1, bold:1, frugal:1}],
    ['Do them thoroughly, by hand', {analog:2, family:1}],
  ]),
  Q('first-job', 'A dream first job as a teen…', [
    ['Ski instructor / river guide', {rugged:2, bold:1}],
    ['Bookshop or gallery', {refined:2, luxe:1}],
    ['Fixing bikes or engines', {analog:2, frugal:1}],
    ['Summer-camp counselor', {family:2, playful:1}],
  ]),
  Q('doorbell', 'The doorbell rings unexpectedly. You hope it’s…', [
    ['A package you’ve been dying for', {bold:2, playful:1}],
    ['A neighbor needing a hand', {family:2, rugged:1}],
    ['Absolutely no one, honestly', {nimble:1, refined:1, frugal:1}],
    ['Something rare and beautiful you ordered', {luxe:2, refined:1}],
  ]),
  Q('constellation', 'Name your own constellation. It’s shaped like…', [
    ['A crown', {luxe:2, commanding:1}],
    ['A wolf', {rugged:2, bold:1}],
    ['A paper airplane', {nimble:2, playful:1}],
    ['A big dinner table', {family:2, spacious:1}],
  ]),
  Q('elevator', 'Stuck in an elevator, you’d be the one who…', [
    ['Calmly takes charge', {commanding:2, refined:1}],
    ['Cracks jokes to keep it light', {playful:2, family:1}],
    ['Pries the doors with something', {rugged:2, analog:1}],
    ['Quietly finds the fastest fix', {efficient:2, nimble:1}],
  ]),
  Q('color-car-lie', 'A wall of paint chips. You reach for…', [
    ['Midnight black or deep navy', {luxe:2, refined:1}],
    ['Screaming red or electric blue', {bold:2, playful:1}],
    ['Silver, grey, gunmetal', {refined:1, efficient:1, nimble:1}],
    ['Earthy green or sand', {rugged:2, family:1}],
  ]),
  Q('recharge', 'You recharge best by…', [
    ['Being totally alone', {nimble:2, refined:1}],
    ['A hard physical push outdoors', {rugged:2, quick:1}],
    ['Time with your favorite people', {family:2, spacious:1}],
    ['Treating yourself to something nice', {luxe:2, playful:1}],
  ]),
  Q('two-speeds', 'Be honest — you have two speeds:', [
    ['All-out and asleep', {quick:2, bold:1}],
    ['Steady and steadier', {refined:2, efficient:1}],
    ['Depends who needs me', {family:2, spacious:1}],
    ['Careful, then decisive', {analog:1, frugal:1, nimble:1}],
  ]),
  Q('heirloom', 'The heirloom you’d pass down…', [
    ['A fine watch or piece of jewelry', {luxe:2, refined:1}],
    ['A set of well-worn tools', {analog:2, rugged:1, frugal:1}],
    ['A big table where the family gathered', {family:2, spacious:1}],
    ['A journal of wild adventures', {bold:2, playful:1}],
  ]),
  Q('robot', 'Your household robot’s top skill is…', [
    ['Impeccable butler service', {luxe:2, refined:1}],
    ['Heavy lifting and repairs', {rugged:2, spacious:1}],
    ['Squeezing errands into no time', {efficient:2, nimble:1}],
    ['Keeping the whole family’s schedule', {family:2}],
  ]),
  Q('font-of-life', 'Your life needs a soundtrack instrument…', [
    ['A grand piano', {luxe:2, refined:1}],
    ['An electric guitar', {bold:2, quick:1}],
    ['An acoustic around a campfire', {rugged:1, family:2, analog:1}],
    ['A crisp synth', {electrified:2, nimble:1}],
  ]),
  Q('lost', 'Genuinely lost with no signal, you feel…', [
    ['Thrilled — an adventure', {rugged:2, bold:1}],
    ['Fine — I’ll navigate by instinct', {efficient:1, nimble:1, commanding:1}],
    ['Calm if everyone’s comfortable', {family:2, refined:1}],
    ['Annoyed — I like a plan', {refined:1, luxe:1, analog:1}],
  ]),
  Q('trophy', 'A trophy on your shelf would be for…', [
    ['Fastest', {quick:2, bold:1}],
    ['Best-crafted', {luxe:2, refined:1}],
    ['Toughest / went furthest', {rugged:2, commanding:1}],
    ['Most valuable teammate', {family:2, efficient:1}],
  ]),
  Q('window-seat', 'On a plane you want the…', [
    ['Window — the view', {commanding:2, bold:1}],
    ['Aisle — up and out fast', {quick:1, efficient:1, nimble:1}],
    ['Whatever’s next to my people', {family:2, spacious:1}],
    ['First class or nothing', {luxe:2, refined:1}],
  ]),
  Q('spice', 'Your food should be…', [
    ['As spicy as it gets', {bold:2, quick:1}],
    ['Refined and subtle', {luxe:2, refined:1}],
    ['Hearty and generous', {family:2, spacious:1}],
    ['Simple and clean', {efficient:2, nimble:1}],
  ]),
  Q('build', 'Given LEGO and infinite time, you build…', [
    ['A soaring tower', {commanding:2, bold:1}],
    ['A sleek race car', {quick:2, playful:1}],
    ['A sprawling family house', {family:2, spacious:1}],
    ['A working machine with gears', {analog:2, rugged:1}],
  ]),
  Q('quiet-luxury', 'True luxury to you is…', [
    ['The finest materials, quietly', {luxe:2, refined:1}],
    ['Total silence and space', {refined:2, commanding:1}],
    ['Time, and freedom to roam', {rugged:2, bold:1}],
    ['Never worrying about the bill', {frugal:2, efficient:1}],
  ]),
  Q('storm-chaser', 'A once-in-a-lifetime trip: you pick…', [
    ['Safari across rough terrain', {rugged:2, spacious:1}],
    ['A grand tour of great cities', {luxe:2, refined:1}],
    ['A high-speed track day', {quick:2, bold:1}],
    ['A big multi-family beach house', {family:2, spacious:1}],
  ]),
  Q('two-wheels', 'If not a car, you’d get around by…', [
    ['A fast motorbike', {quick:2, bold:1, nimble:1}],
    ['A sturdy cargo bike', {family:1, frugal:1, efficient:2}],
    ['An e-scooter, zip everywhere', {electrified:2, nimble:1}],
    ['A vintage bicycle, slow and lovely', {analog:2, refined:1}],
  ]),
  Q('control', 'In a crisis you want to be the one…', [
    ['Making the calls up front', {commanding:2, bold:1}],
    ['Keeping everyone calm and safe', {family:2, refined:1}],
    ['Rigging the practical fix', {rugged:2, analog:1}],
    ['Finding the quickest way out', {quick:1, nimble:2, efficient:1}],
  ]),
  Q('final', 'Last one — finish the sentence. “At my core, I want to feel…”', [
    ['Unstoppable', {commanding:2, rugged:1, quick:1}],
    ['Taken care of', {luxe:2, refined:1, electrified:1}],
    ['Free and a little wild', {bold:2, playful:1, nimble:1}],
    ['Surrounded by my people', {family:2, spacious:1}],
  ]),
];

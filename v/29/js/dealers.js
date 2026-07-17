// dealers.js — "find a dealer near me" helpers.
//
// Two links per brand:
//   1. A Google Maps search for "<brand> dealer near <ZIP>" — always works
//      and genuinely lists the closest dealers with sites/hours/directions.
//   2. The manufacturer's official dealer-locator page (best-effort URLs;
//      the self-improvement loop verifies these in its brand sweeps).
// The user's home ZIP lives in Store.profile().zip (Settings → Profile).

export const LOCATORS = {
  'Toyota':'https://www.toyota.com/dealers/', 'Lexus':'https://www.lexus.com/dealers',
  'Honda':'https://automobiles.honda.com/tools/dealership-locator', 'Acura':'https://www.acura.com/tools/find-a-dealer',
  'Ford':'https://www.ford.com/dealerships/', 'Lincoln':'https://www.lincoln.com/locate-dealer/',
  'Chevrolet':'https://www.chevrolet.com/dealer-locator', 'GMC':'https://www.gmc.com/dealer-locator',
  'Buick':'https://www.buick.com/dealer-locator', 'Cadillac':'https://www.cadillac.com/dealer-locator',
  'Hyundai':'https://www.hyundaiusa.com/us/en/dealer-locator', 'Kia':'https://www.kia.com/us/en/find-a-dealer',
  'Genesis':'https://www.genesis.com/us/en/find-a-retailer.html',
  'Nissan':'https://www.nissanusa.com/dealer-locator.html', 'Infiniti':'https://www.infinitiusa.com/retailer-locator.html',
  'Mitsubishi':'https://www.mitsubishicars.com/dealer-locator',
  'Jeep':'https://www.jeep.com/find-dealer.html', 'Ram':'https://www.ramtrucks.com/find-dealer.html',
  'Dodge':'https://www.dodge.com/find-dealer.html', 'Chrysler':'https://www.chrysler.com/find-dealer.html',
  'Fiat':'https://www.fiatusa.com/find-dealer.html', 'Alfa Romeo':'https://www.alfaromeousa.com/find-dealer.html',
  'Maserati':'https://www.maserati.com/us/en/dealers',
  'Volkswagen':'https://www.vw.com/en/dealer-search.html', 'Audi':'https://www.audiusa.com/us/web/en/dealers.html',
  'Porsche':'https://www.porsche.com/usa/dealersearch/',
  'BMW':'https://www.bmwusa.com/dealer-locator.html', 'Mini':'https://www.miniusa.com/find-a-dealer.html',
  'Mercedes-Benz':'https://www.mbusa.com/en/dealers',
  'Subaru':'https://www.subaru.com/find-a-retailer', 'Mazda':'https://www.mazdausa.com/find-a-dealer',
  'Volvo':'https://www.volvocars.com/us/dealers/', 'Polestar':'https://www.polestar.com/us/spaces/',
  'Land Rover':'https://www.landroverusa.com/national-dealer-locator.html',
  'Jaguar':'https://www.jaguarusa.com/national-dealer-locator.html',
  'Tesla':'https://www.tesla.com/findus', 'Rivian':'https://rivian.com/spaces', 'Lucid':'https://lucidmotors.com/studios',
  'VinFast':'https://vinfastauto.us/dealer-locator', 'Ineos':'https://ineosgrenadier.com/en/us/find-a-retailer',
  'Ferrari':'https://www.ferrari.com/en-US/dealers', 'Lamborghini':'https://www.lamborghini.com/en-en/dealers',
  'McLaren':'https://retailers.mclaren.com', 'Bentley':'https://www.bentleymotors.com/en/apps/dealer-finder.html',
  'Rolls-Royce':'https://www.rolls-roycemotorcars.com/en_US/showrooms.html',
  'Aston Martin':'https://www.astonmartin.com/en-us/dealer-locator', 'Lotus':'https://www.lotuscars.com/en-US/dealers',
};

// Google Maps nearby-dealers search — the reliable "closest dealers" list.
export function mapsDealerUrl(make, zip){
  const q = `${make} dealership near ${zip||'me'}`;
  return `https://www.google.com/maps/search/${encodeURIComponent(q)}`;
}

export function locatorUrl(make){ return LOCATORS[make] || null; }

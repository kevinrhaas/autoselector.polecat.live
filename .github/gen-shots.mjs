// gen-shots.mjs — capture real marketing screenshots from the live build.
//
// Serves the repo root, drives the app with Playwright (Chromium), and writes
// the PNGs the marketing page references into assets/shots/. Run locally or
// from CI after the smoke test; failures are non-fatal there (the committed
// baseline shots keep serving).
//
//   node .github/gen-shots.mjs
import http from 'node:http';
import { readFile, mkdir } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { chromium } from 'playwright';

const ROOT = process.cwd();
const PORT = 4181;
const MIME = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css',
  '.svg':'image/svg+xml', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg' };

function serve(){
  return http.createServer(async (req, res)=>{
    try{
      let p = decodeURIComponent(req.url.split('?')[0]);
      if(p.endsWith('/')) p += 'index.html';
      const data = await readFile(join(ROOT, p.replace(/^\//,'')));
      res.writeHead(200, { 'content-type': MIME[extname(normalize(p))] || 'application/octet-stream' });
      res.end(data);
    }catch{ res.writeHead(404); res.end('not found'); }
  });
}

// Pre-seed a lived-in workspace so screenshots show real content, and mark
// the tour done so its backdrop doesn't photobomb.
const SEED = {
  schema:1, createdAt: Date.now(),
  favorites:['toyota-camry','honda-cr-v','hyundai-ioniq-5','mazda-cx-5'],
  recents:[{id:'ford-bronco',at:Date.now()-3600e3},{id:'kia-telluride',at:Date.now()-7200e3},{id:'tesla-model-y',at:Date.now()-9000e3}],
  notes:{}, compare:['toyota-camry','honda-accord','hyundai-sonata','kia-k5'],
  savedSearches:[{id:'s1',name:'AWD hybrids under $40k',filters:{},at:Date.now()-86400e3}],
  finderRuns:[], activity:[
    {id:'a1',at:Date.now()-1800e3,kind:'fav',text:'Added Toyota Camry to favorites',vehicleId:'toyota-camry'},
    {id:'a2',at:Date.now()-3600e3,kind:'finder',text:'Finished Match Maker — 4 matches'},
  ],
  settings:{ tourDone:true, simpleMode:false, reduceMotion:false, pinnedVersion:'', profile:{name:'',persona:''} },
  dbProfiles:[],
};

(async ()=>{
  const server = serve();
  await new Promise(r=>server.listen(PORT, r));
  await mkdir('assets/shots', { recursive:true });
  const browser = await chromium.launch();

  async function shoot(name, { url, width=975, height=630, mobile=false, prep }){
    const ctx = await browser.newContext({
      viewport:{ width: mobile?390:width, height: mobile?844:height },
      deviceScaleFactor: 2, isMobile: mobile,
      colorScheme: 'dark',
    });
    const page = await ctx.newPage();
    await page.addInitScript(seed=>{
      localStorage.setItem('as.workspace', JSON.stringify(seed));
      localStorage.setItem('as.theme.v1','auto:dark');
      localStorage.setItem('as.changelog.seen','999');
    }, SEED);
    await page.goto(`http://localhost:${PORT}${url}`, { waitUntil:'networkidle', timeout:25000 });
    await page.waitForTimeout(700);
    if(prep) await prep(page);
    await page.screenshot({ path:`assets/shots/${name}.png` });
    await ctx.close();
    console.log(`✓ ${name}.png`);
  }

  try{
    await shoot('home',       { url:'/app/#home' });
    await shoot('matchmaker', { url:'/app/#matchmaker', prep: async p=>{
      // answer one question so the whittle strip shows movement
      await p.evaluate(()=>document.querySelectorAll('.q-opt')[0]?.click());
      await p.waitForTimeout(600);
    }});
    await shoot('browse',     { url:'/app/#browse' });
    await shoot('vehicle',    { url:'/app/#vehicle/toyota-camry', prep: p=>p.waitForSelector('.vd-hero',{timeout:8000}).catch(()=>{}) });
    await shoot('compare',    { url:'/app/#compare' });
    await shoot('mobile-home',       { url:'/app/#home', mobile:true });
    await shoot('mobile-matchmaker', { url:'/app/#matchmaker', mobile:true });
    await shoot('mobile-vehicle',    { url:'/app/#vehicle/honda-cr-v', mobile:true, prep: p=>p.waitForSelector('.vd-hero',{timeout:8000}).catch(()=>{}) });
    console.log('\n✅ screenshots refreshed');
  }catch(e){
    console.error('gen-shots failed:', e.message);
    process.exitCode = 1;
  }finally{
    await browser.close(); server.close();
  }
})();

// gen-shots.mjs — capture real marketing screenshots from the live build.
//
// Serves the repo root, drives the app with Playwright (Chromium), and writes
// the PNGs the marketing page references into assets/shots/:
//   hero-*.png    — large browser-size (1460×940 @2x) shots for the HERO
//                   carousel; captured mid-interaction so they explain AND
//                   dazzle (filters on, questions answered, results showing).
//                   No browser chrome — the raw app fills the frame.
//   mobile-*.png  — 390×844 @2x phone shots for the device gallery.
// Run locally or from CI after the smoke test; failures are non-fatal there
// (the committed baseline shots keep serving).
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
  favorites:['toyota-camry','honda-cr-v','hyundai-ioniq-5','mazda-cx-5','kia-telluride','ford-bronco'],
  recents:[{id:'ford-bronco',at:Date.now()-3600e3},{id:'kia-telluride',at:Date.now()-7200e3},
           {id:'tesla-model-y',at:Date.now()-9000e3},{id:'toyota-rav4',at:Date.now()-10800e3}],
  notes:{'toyota-camry':'Dealer quoted $500 under MSRP — ask about the XSE AWD.'},
  compare:['toyota-camry','honda-accord','hyundai-sonata','kia-k5'],
  savedSearches:[{id:'s1',name:'AWD hybrids under $40k',filters:{},at:Date.now()-86400e3},
                 {id:'s2',name:'3-row family SUVs',filters:{},at:Date.now()-172800e3}],
  finderRuns:[], activity:[
    {id:'a1',at:Date.now()-1800e3,kind:'fav',text:'Added Toyota Camry to favorites',vehicleId:'toyota-camry'},
    {id:'a2',at:Date.now()-3600e3,kind:'finder',text:'Finished Match Maker — 4 matches'},
    {id:'a3',at:Date.now()-5400e3,kind:'compare',text:'Added Kia Telluride to compare',vehicleId:'kia-telluride'},
  ],
  settings:{ tourDone:true, simpleMode:false, reduceMotion:false, pinnedVersion:'', profile:{name:'',persona:''} },
  dbProfiles:[],
};

(async ()=>{
  const server = serve();
  await new Promise(r=>server.listen(PORT, r));
  await mkdir('assets/shots', { recursive:true });
  const browser = await chromium.launch();

  async function shoot(name, { url, mobile=false, prep }){
    const ctx = await browser.newContext({
      viewport: mobile ? { width:390, height:844 } : { width:1460, height:940 },
      deviceScaleFactor: 2, isMobile: mobile,
      colorScheme: 'dark',
    });
    const page = await ctx.newPage();
    await page.addInitScript(seed=>{
      localStorage.setItem('as.workspace', JSON.stringify(seed));
      localStorage.setItem('as.theme.v1','auto:dark');
      localStorage.setItem('as.changelog.seen','999');
    }, SEED);
    // domcontentloaded, not networkidle: catalog views hotlink remote photos
    // for models without a local asset yet, which keeps the network busy
    // indefinitely. A fixed settle wait lets local images paint.
    await page.goto(`http://localhost:${PORT}${url}`, { waitUntil:'domcontentloaded', timeout:25000 });
    await page.waitForTimeout(2000);
    if(prep) await prep(page);
    await page.screenshot({ path:`assets/shots/${name}.png` });
    await ctx.close();
    console.log(`✓ ${name}.png`);
  }

  try{
    // ---- hero carousel (desktop, no chrome) ----
    await shoot('hero-home', { url:'/app/#home' });
    await shoot('hero-matchmaker', { url:'/app/#matchmaker', prep: async p=>{
      // two answers in: the counter has visibly shrunk and dots are fading
      await p.evaluate(()=>[...document.querySelectorAll('.q-opt')].find(o=>/Haul the family/.test(o.textContent))?.click());
      await p.waitForTimeout(500);
      await p.evaluate(()=>[...document.querySelectorAll('.q-opt')].find(o=>/6, 7, 8/.test(o.textContent))?.click());
      await p.waitForTimeout(700);
    }});
    await shoot('hero-lifestyles', { url:'/app/#lifestyles', prep: async p=>{
      await p.evaluate(()=>[...document.querySelectorAll('.persona-card')].find(c=>/Weekend adventurer/.test(c.textContent))?.click());
      await p.waitForTimeout(800);
      await p.evaluate(()=>document.querySelector('#view').scrollTop = 130);
      await p.waitForTimeout(300);
    }});
    await shoot('hero-browse', { url:'/app/#browse', prep: async p=>{
      // filters ON so the shot explains the practical-details superpower
      await p.evaluate(()=>{
        const pills=[...document.querySelectorAll('.filterbar .pill')];
        pills.find(x=>/^Hybrid$/.test(x.textContent))?.click();
        pills.find(x=>/^Suv$/.test(x.textContent))?.click();
        pills.find(x=>/Climate knobs/.test(x.textContent))?.click();
      });
      await p.waitForTimeout(700);
    }});
    await shoot('hero-vehicle', { url:'/app/#vehicle/toyota-camry', prep: p=>p.waitForSelector('.vd-hero',{timeout:8000}).catch(()=>{}) });
    await shoot('hero-compare', { url:'/app/#compare' });
    await shoot('hero-budget', { url:'/app/#budget', prep: async p=>{
      await p.evaluate(()=>{
        const s=document.querySelector('input.slider-x');
        if(s){ s.value='35000'; s.dispatchEvent(new Event('input',{bubbles:true})); }
        [...document.querySelectorAll('.pill')].find(x=>/^Hybrid$/.test(x.textContent))?.click();
      });
      await p.waitForTimeout(700);
    }});

    // ---- phone gallery ----
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

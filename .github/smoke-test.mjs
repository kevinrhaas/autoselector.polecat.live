// smoke-test.mjs — the deploy gate.
//
// Serves the repo root, opens the marketing page AND the app, and fails if
// the console reports errors or the key UI never renders. Run at the end of
// every self-improvement iteration so a broken build never reaches
// production. The app is open (no access token needed).
//
//   node .github/smoke-test.mjs
//
// Requires: playwright (chromium + webkit). Installed by the workflow.
// WebKit is iOS Safari/Chrome's engine and reproduces iOS-only failures that
// Chromium silently tolerates (e.g. Intl.format throwing on an invalid Date).
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { chromium, webkit } from 'playwright';

const ROOT = process.cwd();
const PORT = 4179;
const SECTIONS = ['home','browse','matchmaker','lifestyles','budget','garage','compare','history','docs','settings'];

const MIME = { '.html':'text/html', '.js':'text/javascript', '.css':'text/css',
  '.svg':'image/svg+xml', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.ico':'image/x-icon' };

function serve(){
  return http.createServer(async (req, res)=>{
    try{
      let p = decodeURIComponent(req.url.split('?')[0]);
      if(p.endsWith('/')) p += 'index.html';
      const file = normalize(join(ROOT, p)).replace(/^(\.\.[/\\])+/,'');
      const data = await readFile(join(ROOT, p.replace(/^\//,'')));
      res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(data);
    }catch{ res.writeHead(404); res.end('not found'); }
  });
}

async function checkPage(browser, url, mustFind, label){
  const page = await browser.newPage();
  const errors = [];
  page.on('console', m=>{ if(m.type()==='error') errors.push(m.text()); });
  page.on('pageerror', e=>errors.push(String(e)));
  await page.goto(url, { waitUntil:'networkidle', timeout:20000 });
  await page.waitForSelector(mustFind, { timeout:12000 });
  const real = errors.filter(e=>!/favicon|net::ERR|Failed to load resource/i.test(e));
  await page.close();
  if(real.length){ throw new Error(`[${label}] console errors:\n  ${real.join('\n  ')}`); }
  console.log(`✓ ${label} rendered "${mustFind}" with no console errors`);
}

(async ()=>{
  const server = serve();
  await new Promise(r=>server.listen(PORT, r));
  const browser = await chromium.launch();
  let code = 0;
  try{
    // 0) fleet-sync guard: our changelog/whatsnext must parse with manager's
    //    exact parser (see .github/check-changelog.mjs). Fail fast if not.
    {
      const { execSync } = await import('node:child_process');
      execSync('node .github/check-changelog.mjs', { stdio:'inherit' });
    }
    // 1) marketing page — and its hero carousel must have ≥5 live slides
    await checkPage(browser, `http://localhost:${PORT}/`, '.hero h1', 'marketing');
    {
      const mpage = await browser.newPage();
      await mpage.goto(`http://localhost:${PORT}/`, { waitUntil:'networkidle', timeout:20000 });
      await mpage.waitForTimeout(600);
      const hc = await mpage.evaluate(()=>{
        const root = document.getElementById('hero-carousel');
        if(!root) return { err:'no #hero-carousel' };
        const slides = root.querySelectorAll('.hc-slide').length;
        const visible = root.querySelector('.hc-slide.on img');
        const capped = !!document.getElementById('hc-title')?.textContent;
        return { slides, hasVisible: !!visible && visible.naturalWidth>0, capped };
      });
      await mpage.close();
      if(hc.err) throw new Error(`hero carousel: ${hc.err}`);
      if(hc.slides < 5) throw new Error(`hero carousel: only ${hc.slides} slides (need ≥5)`);
      if(!hc.hasVisible) throw new Error('hero carousel: active slide image failed to load');
      if(!hc.capped) throw new Error('hero carousel: caption did not populate');
      console.log(`✓ hero carousel: ${hc.slides} slides, image loaded, caption live`);
    }
    // 2) the app — open access, rail must render
    await checkPage(browser, `http://localhost:${PORT}/app/`, '.ps-rail .ps-rail-item', 'app');

    // 3) navigate every section; no throw, no stray "undefined" text
    const page = await browser.newPage();
    const errs=[]; page.on('pageerror',e=>errs.push(String(e)));
    await page.goto(`http://localhost:${PORT}/app/`, { waitUntil:'networkidle' });
    const garbage = [];
    for(const sec of SECTIONS){
      // dispatch the click straight on the element so the welcome tour's
      // backdrop (auto-opens on a fresh workspace) can't stall Playwright
      await page.evaluate(s=>document.querySelector(`.ps-rail-item[data-sec="${s}"]`)?.click(), sec);
      await page.waitForTimeout(350);
      const bad = await page.evaluate(()=>{
        const view = document.querySelector('#view'); if(!view) return 'no #view';
        if(view.childElementCount === 0) return 'empty #view';
        if(/hit a snag/i.test(view.textContent||'')) return 'error boundary tripped';
        const walker = document.createTreeWalker(view, NodeFilter.SHOW_TEXT);
        for(let n=walker.nextNode(); n; n=walker.nextNode()){
          if(/^(undefined|null|\[object Object\]|NaN)$/.test(n.textContent.trim())) return `stray "${n.textContent.trim()}"`;
        }
        return null;
      });
      if(bad) garbage.push(`${sec}: ${bad}`);
    }
    if(errs.length) throw new Error('navigation errors:\n  '+errs.join('\n  '));
    if(garbage.length) throw new Error('views rendered broken content:\n  '+garbage.join('\n  '));
    console.log('✓ all sections navigated + rendered real content');

    // 3b) core flow: open a vehicle from Browse, favorite it, verify persistence
    await page.evaluate(()=>location.hash='browse'); await page.waitForTimeout(450);
    await page.evaluate(()=>document.querySelector('.vtile')?.click());
    await page.waitForSelector('.modal .vd-hero', { timeout:8000 });
    await page.evaluate(()=>{
      const favBtn = [...document.querySelectorAll('.modal .btn')].find(b=>/Favorite/.test(b.textContent));
      favBtn?.click();
    });
    await page.waitForTimeout(200);
    const flowOk = await page.evaluate(()=>{
      const ws = JSON.parse(localStorage.getItem('as.workspace')||'{}');
      return Array.isArray(ws.favorites) && ws.favorites.length>=1;
    });
    if(!flowOk) throw new Error('favorite flow: clicking Favorite did not persist to as.workspace');
    console.log('✓ vehicle detail opens; favoriting persists');
    await page.close();

    // 4) mobile viewport (390px): no horizontal overflow, views paint content
    const mob = await browser.newContext({ viewport:{ width:390, height:844 }, isMobile:true });
    const mp = await mob.newPage();
    const mobErrs=[]; mp.on('pageerror',e=>mobErrs.push(String(e)));
    await mp.goto(`http://localhost:${PORT}/`, { waitUntil:'domcontentloaded' });
    await mp.waitForSelector('.nav-in'); await mp.waitForTimeout(200);
    if(await mp.evaluate(()=>document.documentElement.scrollWidth > innerWidth+1))
      throw new Error('mobile: marketing page overflows horizontally at 390px');

    await mp.goto(`http://localhost:${PORT}/app/#browse`, { waitUntil:'domcontentloaded' });
    await mp.waitForSelector('.ps-rail .ps-rail-item'); await mp.waitForTimeout(500);
    if(await mp.evaluate(()=>{ const b=[...document.querySelectorAll('.ps-topbar > *')].pop(); return b ? b.getBoundingClientRect().right > innerWidth+1 : false; }))
      throw new Error('mobile: app topbar buttons overflow the 390px viewport');
    // vehicle modal must fit the viewport
    await mp.evaluate(()=>document.querySelector('.vtile')?.click());
    const modal = await mp.waitForSelector('.modal', { timeout:8000 }).catch(()=>null);
    if(modal && await mp.evaluate(()=>{
      const m=document.querySelector('.modal').getBoundingClientRect();
      const body=document.querySelector('.modal-body');
      return (m.width>innerWidth+1) || (body && body.scrollWidth>body.clientWidth+8);
    })) throw new Error('mobile: vehicle modal is wider than the 390px viewport');
    // every primary view must paint VISIBLE content on mobile
    for(const sec of ['home','browse','matchmaker','lifestyles','budget','docs']){
      await mp.evaluate(s=>location.hash=s, sec); await mp.waitForTimeout(450);
      const blank = await mp.evaluate(()=>{
        const v=document.querySelector('#view'); if(!v||!v.childElementCount) return 'empty #view';
        const vis=[...v.querySelectorAll('*')].some(e=>{
          const r=e.getBoundingClientRect();
          return r.height>=24 && r.width>=60 && r.top<innerHeight && r.bottom>44;
        });
        return vis ? null : 'no visible content in viewport';
      });
      if(blank) throw new Error(`mobile: ${sec} shows ${blank}`);
    }
    // overflowing views must scroll all the way to the bottom
    await mp.addStyleTag({ content:'*{scroll-behavior:auto !important}' });
    for(const sec of ['browse','docs','settings']){
      await mp.evaluate(s=>location.hash=s, sec); await mp.waitForTimeout(400);
      const s = await mp.evaluate(()=>{
        const v=document.querySelector('#view'); if(!v) return {err:'no #view'};
        v.scrollTop = 1e7;
        const max = v.scrollHeight - v.clientHeight;
        return { max, reached:v.scrollTop, overflows:max>40 };
      });
      if(s.err) throw new Error(`mobile scroll: ${sec} ${s.err}`);
      if(s.overflows && s.reached < s.max-2)
        throw new Error(`mobile: ${sec} cannot scroll to bottom (reached ${s.reached}/${s.max})`);
    }
    if(mobErrs.length) throw new Error('mobile console errors:\n  '+mobErrs.join('\n  '));
    console.log('✓ mobile (390px): everything fits, paints, and scrolls');
    await mp.close(); await mob.close();

    // 5) WebKit pass — iOS Safari's engine, desktop + mobile.
    // On CI (--with-deps) this must run; on a dev box missing WebKit's system
    // libraries we skip with a loud warning rather than fail the whole battery.
    let wk;
    try{ wk = await webkit.launch(); }
    catch(e){
      if(process.env.CI) throw e;
      console.warn('⚠ WebKit could not launch locally (missing system libs) — SKIPPED. CI will run it.');
    }
    if(wk){
    try{
      for(const vp of [ null, { viewport:{ width:390, height:844 }, isMobile:true } ]){
        const lbl = vp ? 'mobile' : 'desktop';
        const wctx = vp ? await wk.newContext(vp) : await wk.newContext();
        const wp = await wctx.newPage();
        const wErrs = [];
        wp.on('pageerror', e=>wErrs.push('pageerror: '+e));
        wp.on('console', m=>{ if(m.type()==='error') wErrs.push('console: '+m.text()); });
        await wp.goto(`http://localhost:${PORT}/app/`, { waitUntil:'networkidle', timeout:20000 });
        await wp.waitForSelector('.ps-rail .ps-rail-item', { timeout:12000 });
        const bad = [];
        for(const sec of SECTIONS){
          await wp.evaluate(s=>location.hash=s, sec); await wp.waitForTimeout(320);
          const state = await wp.evaluate(()=>{
            const v=document.querySelector('#view'); if(!v) return 'no #view';
            if(v.childElementCount===0) return 'empty #view';
            if(/hit a snag/i.test(v.textContent||'')) return 'error boundary tripped (view threw)';
            return null;
          });
          if(state) bad.push(`${sec}: ${state}`);
        }
        const real = wErrs.filter(e=>!/favicon|net::ERR|Failed to load resource/i.test(e));
        await wp.close(); await wctx.close();
        if(real.length) throw new Error(`WebKit ${lbl} errors:\n  `+real.join('\n  '));
        if(bad.length)  throw new Error(`WebKit ${lbl}: views failed to render:\n  `+bad.join('\n  '));
      }
      console.log('✓ WebKit (iOS engine): every section renders on desktop + mobile with no errors');
    }finally{ await wk.close(); }
    }

    console.log('\n✅ smoke test passed');
  }catch(e){
    console.error('\n❌ smoke test FAILED:\n'+e.message);
    code = 1;
  }finally{
    await browser.close(); server.close();
  }
  process.exit(code);
})();

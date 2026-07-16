// views/settings.js — appearance (6 themes), simple mode, profile, data
// tools (export/import + database profiles), version switcher, and reset.
import { el, field, toast, confirmDialog, download, copy } from '../ui.js';
import { icon } from '../icons.js';
import { Store } from '../store.js';
import { PALETTES, MODES, getTheme, setTheme } from '../theme.js';
import { startTour } from '../tour.js';
import { schemaSQL, seedSQL, inspectHttpSource } from '../db.js';
import { Access } from '../access.js';

export function renderSettings(view, ctx){
  const layout = el('div',{class:'settings-layout'});
  const nav = el('div',{class:'set-nav'});
  const panel = el('div',{class:'set-panel'});
  layout.append(nav, panel);
  view.append(layout);

  const TABS = [
    ['appearance','palette','Appearance'],
    ['profile','users','Profile'],
    ['data','db','Data & sync'],
    ['versions','history','Version'],
    ['about','info','About'],
  ];
  let active='appearance';
  TABS.forEach(([key, ic, label])=>{
    nav.append(el('button',{class:'nav-item'+(key===active?' active':''), 'data-tab':key,
      html:`${icon(ic,17)}<span>${label}</span>`, onclick:()=>{ active=key;
        nav.querySelectorAll('.nav-item').forEach(n=>n.classList.toggle('active', n.dataset.tab===key));
        paint(); }}));
  });

  function paint(){
    panel.innerHTML='';
    ({appearance, profile, data, versions, about})[active]();
  }

  // ---- appearance ----------------------------------------------------------
  function appearance(){
    const b = block('Theme', 'Two palettes × three modes. Changes apply instantly.');
    const grid = el('div',{class:'theme-grid'});
    const cur = getTheme();
    PALETTES.forEach(p=>MODES.forEach(m=>{
      const on = cur.palette===p.key && cur.mode===m.key;
      const dark = m.key!=='light';
      const colors = p.key==='auto'
        ? (dark? ['#090d18','#3e7bfa','#f0762f'] : ['#eef2fa','#2563eb','#d95f1e'])
        : (dark? ['#0a0a0f','#d4773b','#9333ea'] : ['#f4f4fb','#b8632e','#9333ea']);
      const sw = el('button',{class:'theme-swatch'+(on?' on':''), onclick:()=>{ setTheme(p.key, m.key); appearance2(); }},[
        el('div',{class:'sw-prev', style:`background:${colors[0]}`},[
          el('span',{class:'sw-dot', style:`background:${colors[1]}`}),
          el('span',{class:'sw-bar', style:`background:linear-gradient(90deg,${colors[1]},${colors[2]})`}),
        ]),
        el('div',{class:'sw-name'},[ el('span',{text:`${p.label} ${m.label}`}), on?el('span',{html:icon('check',14)}):null ]),
      ]);
      grid.append(sw);
    }));
    b.append(grid);
    panel.append(b);
    function appearance2(){ paint(); }

    const b2 = block('Comfort', '');
    b2.append(switchRow('Simple mode', 'Bigger text, fewer power-user sections, calmer screens.',
      Store.settings().simpleMode, v=>{ Store.setSetting('simpleMode', v); ctx.applySimple(); ctx.rebuildRail(); }));
    b2.append(switchRow('Reduce motion', 'Turn off animations and confetti.',
      Store.settings().reduceMotion, v=>{ Store.setSetting('reduceMotion', v); ctx.applySimple(); }));
    panel.append(b2);

    const b3 = block('Welcome tour', '');
    b3.append(el('button',{class:'btn', html:`${icon('play',15)} Restart the tour`, onclick:()=>startTour()}));
    panel.append(b3);
  }

  // ---- profile --------------------------------------------------------------
  function profile(){
    const b = block('Profile', 'Just for a friendlier, more useful app — everything stays on this device.');
    const name = el('input',{class:'input', type:'text', value:Store.profile().name||'', placeholder:'Your first name'});
    name.addEventListener('change', ()=>{ Store.setProfile({name:name.value.trim()}); toast('Saved',{kind:'ok'}); });
    b.append(field('Name', name, 'Shown in the Home greeting.'));

    // home ZIP + optional device location → powers "Dealers near you"
    const zip = el('input',{class:'input', type:'text', inputmode:'numeric', maxlength:'5', style:'max-width:140px',
      value:Store.profile().zip||'', placeholder:'e.g. 78701'});
    zip.addEventListener('change', ()=>{
      const val = zip.value.trim();
      if(val && !/^\d{5}$/.test(val)){ toast('ZIP should be 5 digits',{kind:'err'}); return; }
      Store.setProfile({zip:val}); toast('Saved',{kind:'ok'});
    });
    const locBtn = el('button',{class:'btn sm', html:`${icon('compass',14)} Use my location`, onclick:()=>{
      if(!navigator.geolocation){ toast('Location not available in this browser',{kind:'err'}); return; }
      navigator.geolocation.getCurrentPosition(pos=>{
        Store.setProfile({ lat:+pos.coords.latitude.toFixed(4), lon:+pos.coords.longitude.toFixed(4) });
        toast('Location saved',{kind:'ok', body:'Used for nearby-dealer searches; add a ZIP too for the best links.'});
      }, ()=>toast('Could not get location',{kind:'err'}));
    }});
    b.append(field('Home ZIP code', el('div',{style:'display:flex;gap:8px;align-items:center;flex-wrap:wrap'},[zip, locBtn]),
      'Powers "Dealers near you" on every vehicle page.'));
    panel.append(b);

    // favorite manufacturers — a saved set of brands you care about
    const b2 = block('Favorite brands', 'Pick the makes you care about — they get a quick-jump row on Home.');
    const favs = new Set(Store.profile().favMakes||[]);
    const row = el('div',{class:'chip-row'});
    Store.makes().forEach(m=>{
      const p = el('button',{class:'pill'+(favs.has(m)?' on':''), text:m, onclick:()=>{
        favs.has(m) ? favs.delete(m) : favs.add(m);
        p.classList.toggle('on', favs.has(m));
        Store.setProfile({ favMakes:[...favs] });
      }});
      row.append(p);
    });
    b2.append(row);
    panel.append(b2);
  }

  // ---- data & sync ------------------------------------------------------------
  function data(){
    const b = block('Your data', 'Everything you’ve saved here — favorites, notes, searches, settings.');
    const row = el('div',{style:'display:flex;gap:8px;flex-wrap:wrap'});
    row.append(el('button',{class:'btn', html:`${icon('download',15)} Export JSON`, onclick:()=>{
      download('autoselector-workspace.json', Store.exportJSON(), 'application/json'); }}));
    const file = el('input',{type:'file', accept:'.json,application/json', style:'display:none'});
    file.addEventListener('change', async ()=>{
      try{ Store.importJSON(await file.files[0].text()); toast('Imported',{kind:'ok'}); ctx.refresh(); }
      catch(e){ toast('Import failed',{body:String(e.message||e), kind:'err'}); }
    });
    row.append(el('button',{class:'btn', html:`${icon('upload',15)} Import JSON`, onclick:()=>file.click()}), file);
    b.append(row);
    panel.append(b);

    const b1 = block('Database schema & seed', 'AutoSelector is built database-ready: the catalog and your workspace map onto a documented SQLite/Postgres schema (docs/DATA.md). Export it here and load it into any empty database.');
    const r1 = el('div',{style:'display:flex;gap:8px;flex-wrap:wrap'});
    r1.append(el('button',{class:'btn', html:`${icon('db',15)} Download schema.sql`, onclick:()=>download('autoselector-schema.sql', schemaSQL(), 'text/plain')}));
    r1.append(el('button',{class:'btn', html:`${icon('db',15)} Download seed.sql (full catalog)`, onclick:()=>download('autoselector-seed.sql', seedSQL(), 'text/plain')}));
    b1.append(r1);
    panel.append(b1);

    const b2 = block('Remote data profiles', 'Connect a remote JSON source (a file server or tiny REST endpoint). On first connect we inspect it: has data → we read it; empty → we offer schema + seed. Direct SQLite/Postgres connections need a small proxy — on the roadmap (see What’s next).');
    const profiles = Store.dbProfiles();
    if(profiles.length){
      const list = el('div',{class:'meta-list', style:'margin-bottom:12px'});
      profiles.forEach(p=>{
        list.append(el('div',{class:'meta-item'},[
          el('span',{html:icon('db',15), style:'color:var(--brand-2);display:inline-flex'}),
          el('span',{style:'flex:1', html:`<b>${p.name}</b> <span class="muted tiny">${p.kind} · ${p.url||''}</span>`}),
          el('button',{class:'btn sm', text:'Inspect', onclick:async ()=>{
            try{
              const r = await inspectHttpSource(p.url);
              if(r.kind==='vehicles') toast('Source has vehicle data', {body:`${r.rows} rows found — looks compatible.`, kind:'ok'});
              else if(r.kind==='empty') toast('Source is empty', {body:'Download seed.sql / export JSON above to populate it.', kind:'info'});
              else toast('Source has rows', {body:`${r.rows} rows, but not in AutoSelector shape.`, kind:'info'});
              Store.updateDbProfile(p.id, { lastSync: Date.now() });
            }catch(e){ toast('Could not reach source', {body:String(e.message||e), kind:'err'}); }
          }}),
          el('button',{class:'btn icon sm ghost', 'aria-label':'Delete', html:icon('trash',14), onclick:()=>{ Store.deleteDbProfile(p.id); paint(); }}),
        ]));
      });
      b2.append(list);
    }
    const name = el('input',{class:'input', placeholder:'Name (e.g. Home NAS)', style:'max-width:180px'});
    const kind = el('select',{class:'input', style:'width:auto'},[
      el('option',{value:'http-json', text:'HTTP JSON (live)'}),
      el('option',{value:'sqlite-file', text:'SQLite file (export/import)'}),
      el('option',{value:'postgres', text:'Postgres (via proxy — planned)'}),
    ]);
    const url = el('input',{class:'input', placeholder:'https://… endpoint or file URL', style:'flex:1;min-width:200px'});
    const add = el('button',{class:'btn primary', text:'Add profile', onclick:()=>{
      if(!name.value.trim()){ toast('Give it a name',{kind:'err'}); return; }
      Store.addDbProfile({ name:name.value.trim(), kind:kind.value, url:url.value.trim() });
      toast('Profile added',{kind:'ok'}); paint();
    }});
    b2.append(el('div',{style:'display:flex;gap:8px;flex-wrap:wrap;align-items:center'},[name, kind, url, add]));
    panel.append(b2);

    const b3 = block('Danger zone', '');
    b3.append(el('button',{class:'btn danger', html:`${icon('trash',15)} Reset everything on this device`, onclick:async ()=>{
      if(await confirmDialog({ title:'Reset AutoSelector?', message:'Clears favorites, notes, searches and settings on this device. This is undoable with Ctrl/⌘+Z right afterwards.', okText:'Reset', danger:true }))
        { Store.resetAll(); toast('Workspace reset'); ctx.refresh(); }
    }}));
    panel.append(b3);
  }

  // ---- versions -----------------------------------------------------------------
  function versions(){
    const b = block('Version switcher', 'Every deploy is archived as an immutable snapshot. Run the latest (recommended) or pin an earlier build — your data lives in the browser, not the build, so nothing is lost when switching. Data is forward-compatible; older builds simply ignore newer fields.');
    const cur = Store.settings().pinnedVersion;
    const list = el('div',{class:'meta-list'});
    b.append(list);
    panel.append(b);
    fetch('/releases.json').then(r=>r.json()).then(releases=>{
      list.append(row('Latest', 'Always the newest build (auto-updates).', !cur, ()=>{
        Store.setSetting('pinnedVersion',''); toast('Running latest',{kind:'ok'}); versionsRepaint(); }));
      releases.slice(0,20).forEach(rel=>{
        list.append(row(`v${rel.v} — ${rel.title}`, rel.date, cur===rel.path, ()=>{
          Store.setSetting('pinnedVersion', rel.path);
          toast(`Pinned v${rel.v}`, {body:'Reloading into the archived build…', kind:'ok'});
          setTimeout(()=>location.href = rel.path, 600);
        }));
      });
    }).catch(()=>{ list.append(el('p',{class:'muted', text:'No archived releases yet — the first snapshot appears after the next deploy.'})); });
    function row(title, sub, on, onclick){
      return el('div',{class:'meta-item'},[
        el('span',{style:'flex:1', html:`<b>${title}</b><div class="muted tiny">${sub||''}</div>`}),
        el('button',{class:'btn sm'+(on?' primary':''), text:on?'Active':'Use', onclick}),
      ]);
    }
    function versionsRepaint(){ paint(); }
  }

  // ---- about ------------------------------------------------------------------
  function about(){
    const b = block('About AutoSelector', '');
    b.append(el('p',{class:'muted', html:`The joyful way to find your 2026 car. ${Store.vehicles().length} vehicles · data version ${Store.dataVersion()}.<br>
      Part of the <a href="https://polecat.live" target="_blank" rel="noopener">polecat.live</a> family. Built with plain HTML + JavaScript — no frameworks, no build step.`}));
    const r = el('div',{style:'display:flex;gap:8px;flex-wrap:wrap;margin-top:10px'});
    r.append(el('a',{class:'btn', href:'/', text:'Marketing site'}));
    r.append(el('a',{class:'btn', href:'https://github.com/kevinrhaas/autoselector.polecat.live', target:'_blank', rel:'noopener', text:'Source on GitHub'}));
    b.append(r);
    panel.append(b);

    if(Access.isAdmin()){
      const b2 = block('Admin', 'This device has the admin key.');
      b2.append(el('button',{class:'btn', text:'Lock admin on this device', onclick:()=>{ Access.lockAdmin(); toast('Admin locked'); ctx.rebuildRail(); }}));
      panel.append(b2);
    }
  }

  function block(title, blurb){
    const b = el('div',{class:'card pad set-block'});
    b.append(el('h3',{text:title}));
    if(blurb) b.append(el('div',{class:'blurb', text:blurb}));
    return b;
  }
  function switchRow(label, hint, checked, onchange){
    const input = el('input',{type:'checkbox'});
    input.checked = !!checked;
    input.addEventListener('change', ()=>onchange(input.checked));
    return el('div',{class:'set-row'},[
      el('div',{class:'sr-text'},[ el('div',{class:'sr-label', text:label}), el('div',{class:'sr-hint muted tiny', text:hint}) ]),
      el('label',{class:'switch'},[ input, el('span',{class:'slider'}) ]),
    ]);
  }

  paint();
}

// whatsnew.js — the in-app "What's new" panel.
//
// The release data lives in js/changelog.js (a PURE DATA module that sibling
// apps fetch and parse — see the note there). All UI for it lives HERE so the
// data file stays import-free and parseable everywhere. The panel itself is
// the vendored Polecat Shell's rightPanel + initWhatsNew (see SHELL-API.md).
import { CHANGELOG } from './changelog.js';
import { WHATSNEXT } from './whatsnext.js';
import { el, modal } from './ui.js';
import { icon } from './icons.js';
import { rightPanel } from '../vendor/polecat-shell/shell.js';
import { initWhatsNew, hasUnseen } from '../vendor/polecat-shell/whatsnew.js';

const SEEN_KEY = 'as.changelog.seen';   // last-seen version int

export function latestVersion(){ return CHANGELOG[0]?.v || 0; }
export function hasUnread(){ return hasUnseen(SEEN_KEY, latestVersion()); }

export function openWhatsNew(){
  return rightPanel({ title:"What's new",
    body: initWhatsNew({ entries: CHANGELOG, latest: latestVersion(), storageKey: SEEN_KEY }) });
}

// ---- "What's next" panel (renders the pure-data js/whatsnext.js roadmap) ----
export function openWhatsNext(){
  const LBL = { next:'Up next', planned:'Planned', exploring:'Exploring' };
  const body = el('div');
  ['next','planned','exploring'].forEach(st=>{
    const items = WHATSNEXT.filter(w=>w.status===st);
    if(!items.length) return;
    body.append(el('div',{class:'sc-group-title muted tiny', text:LBL[st]}));
    items.forEach(w=>{
      body.append(el('div',{style:'padding:10px 0;border-bottom:1px solid var(--border)'},[
        el('b',{text:w.title}),
        el('div',{class:'muted', style:'font-size:13px;margin-top:3px', text:w.detail}),
      ]));
    });
  });
  return modal({ title:"What's next", icon:icon('road',20), body, wide:true });
}

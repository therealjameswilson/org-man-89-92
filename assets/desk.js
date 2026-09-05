import {accessLabels, readState, stateQuery, filterRecords, csvText, handoffText} from './desk-core.js';

const root = document.querySelector('#document-desk');
const base = new URL('../', import.meta.url);
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const href = path => escape(new URL(path, base).href);
const icon = name => `<img src="${href(`assets/icons/${name}.svg`)}" alt="" width="18" height="18">`;
const link = (path, text) => `<a href="${href(path)}">${escape(text)}</a>`;
const button = (action, name, iconName, extra='') => `<button type="button" class="desk-icon" data-action="${action}" title="${escape(name)}" aria-label="${escape(name)}" ${extra}>${icon(iconName)}</button>`;
let data, state = readState(location.search), saved = new Set(), visible = [], savedOnly = false;
let storageAvailable = true;
try { const values = JSON.parse(localStorage.getItem('org-man-shortlist-v1') || '[]'); if (Array.isArray(values)) saved = new Set(values.filter(v => typeof v === 'string')); }
catch { storageAvailable = false; }

function permalink(record) {
  const url = new URL(base);
  url.search = stateQuery({view:record.kind === 'candidate' ? 'candidates' : 'documents', ids:null, record:record.id});
  return url.href;
}

function recordHTML(record) {
  const id = escape(record.id), selected = saved.has(record.id);
  return `<article class="desk-record" id="${id}" data-record="${id}">
    <div class="record-date"><time>${escape(record.date)}</time>${record.kind === 'candidate' ? `<span>Candidate ${record.slot}</span>` : ''}${record.outsidePeriod ? '<span class="scope-note">Outside 1989-1992</span>' : ''}</div>
    <div class="record-body">
      <div class="record-labels"><span class="access-label access-${record.access}">${accessLabels[record.access]}</span><span>${escape(record.topic)}</span></div>
      <h3>${link(record.sources[0].href,record.title)}</h3>
      <p class="record-summary">${escape(record.summary)}</p>
      <div class="record-sources">${record.sources.map(s => link(s.href,s.label)).join('<span aria-hidden="true">&middot;</span>')}</div>
      ${record.dateNote ? `<p class="record-caution">${escape(record.dateNote)}</p>` : ''}
      <details class="record-details"><summary>Provenance and next action</summary>
        <dl><dt>Source-note status</dt><dd>${escape(record.noteStatus)}</dd>
        <dt>Evidence still needed${record.kind === 'document' ? ' for the related candidate' : ''}</dt><dd>${escape(record.blockers)}</dd>
        <dt>Next action</dt><dd>${escape(record.nextAction)}</dd></dl>
        ${record.notes.map(n => `<section class="provisional-note"><h4>Provisional candidate note: ${escape(n.candidate)}</h4><p class="note-status">Not publication-ready; not a citation of the linked public copy.</p><blockquote>${escape(n.working_source_note_form)}</blockquote><p><strong>Missing fields:</strong> ${escape(n.missing_fields_to_close)}</p></section>`).join('')}
        ${record.kind === 'candidate' && !record.notes.length ? '<p class="record-caution">No candidate-specific source-note draft is recorded.</p>' : ''}
        ${record.requests.length ? `<h4>Related requests</h4><ul>${record.requests.map(r => `<li>${link(r.route,r.request_id)} <span class="request-status">${escape(r.current_project_status)}</span><br>${escape(r.target)}</li>`).join('')}</ul>` : '<p>No individual request row is linked. The research route below remains a lead.</p>'}
        ${record.decisions.length ? `<h4>Compiler decisions</h4><ul>${record.decisions.map(d => `<li><strong>${escape(d.decision_id)}</strong> ${escape(d.decision)} <span class="request-status">${escape(d.status)}</span></li>`).join('')}</ul>` : ''}
        <div class="record-sources">${link(record.report,'Research report')}${record.gapLinks.map(s => link(s.href,'Research / request route')).join('')}${link('reports/source-note-style-audit.html','Provenance standard')}${link('reports/compiler-decision-log.html','Decision log')}</div>
        ${record.candidateId ? `<p><a href="${escape(permalink({id:record.candidateId,kind:'candidate'}))}">Related candidate: ${escape(record.candidateTitle)}</a></p>` : ''}
      </details>
    </div>
    <div class="record-tools">${button('save','Save to local shortlist','bookmark',`aria-pressed="${selected}"`)}${button('copy','Copy source handoff','copy')}${button('permalink','Copy record link','link')}</div>
  </article>`;
}

function options(values, selected, all) {
  return `${all ? `<option value="">${all}</option>` : ''}${values.map(([value,label]) => `<option value="${escape(value)}" ${value === selected ? 'selected' : ''}>${escape(label)}</option>`).join('')}`;
}

function mount() {
  const rows = data[state.view];
  const topics = [...new Set(rows.map(r => r.topic))].sort().map(v => [v,v]);
  const years = [...new Set(rows.flatMap(r => r.years))].sort().map(v => [v,v]);
  const access = [['readable','Readable sources'],['all','All sources, including leads'],...Object.entries(accessLabels).filter(([key]) => rows.some(r => r.access === key))];
  root.innerHTML = `<div class="desk-heading"><h2 id="document-chronology">Document Chronology</h2><span class="desk-counts">${data.documents.length} records &middot; ${data.candidates.length} candidates</span></div>
    <p class="desk-provenance">Public access is not proof of declassification or completeness. Candidate source notes remain provisional.</p>
    <div class="desk-toolbar">
      <fieldset class="desk-views"><legend class="sr-only">View</legend><label><input type="radio" name="desk-view" value="documents" ${state.view === 'documents' ? 'checked' : ''}><span>Chronology</span></label><label><input type="radio" name="desk-view" value="candidates" ${state.view === 'candidates' ? 'checked' : ''}><span>Candidate queue</span></label></fieldset>
      <label class="desk-search"><span class="sr-only">Search records, provenance, and requests</span>${icon('search')}<input id="desk-search" type="search" placeholder="Search documents, people, requests" value="${escape(state.q)}"></label>
      <div class="desk-actions">${button('export','Download filtered CSV','download')}${button('share','Copy filtered-view link','link')}${button('reset','Reset filters','rotate-ccw')}</div>
    </div>
    <div class="desk-filters"><label>Year<select data-filter="year">${options(years,state.year,'All years')}</select></label><label>Subject<select data-filter="topic">${options(topics,state.topic,'All subjects')}</select></label><label>Source access<select data-filter="access">${options(access,state.access)}</select></label><label class="shortlist-toggle"><input id="shortlist-only" type="checkbox" ${state.ids !== null ? 'checked' : ''}>${state.ids !== null && !savedOnly ? 'Shared shortlist' : 'Local shortlist'} <span id="saved-count"></span></label></div>
    <div class="desk-status"><p id="result-count" role="status" aria-live="polite"></p><span id="desk-feedback" role="status" aria-live="polite"></span></div>
    <div id="desk-records"></div><p class="desk-empty" id="desk-empty" hidden>No matching records. ${button('reset','Reset filters','rotate-ccw')}</p>
    <p class="desk-footnote">Catalogue review: ${escape(data.catalogueReviewed)}. Interface update: ${escape(data.interfaceUpdated)}. Shortlists are ${storageAvailable ? 'stored in this browser' : 'temporary in this tab'}; they do not change selection decisions. <a href="${href('assets/data/desk.json')}">Joined data (JSON)</a> &middot; <a href="${href('reports/declassified-document-index.csv')}">Full chronology (CSV)</a></p>`;
  render();
}

function announce(message) { root.querySelector('#desk-feedback').textContent = message; }
function render() {
  if (savedOnly) state.ids = [...saved];
  visible = filterRecords(data[state.view],state);
  const open = new Set([...root.querySelectorAll('details[open]')].map(d => d.closest('article').id));
  root.querySelector('#desk-records').innerHTML = visible.map(recordHTML).join('');
  for (const id of open) root.querySelector(`#${CSS.escape(id)} details`)?.setAttribute('open','');
  root.querySelector('#result-count').textContent = `${visible.length} of ${data[state.view].length} ${state.view === 'documents' ? 'chronology records' : 'candidates'}${state.ids !== null ? ' in shortlist' : ''}`;
  root.querySelector('#desk-empty').hidden = visible.length !== 0;
  root.querySelector('#saved-count').textContent = `(${state.ids !== null && !savedOnly ? state.ids.length : saved.size})`;
  const url = new URL(location.href); url.search = stateQuery(state); url.hash = '';
  history.replaceState(null,'',url);
}

async function copy(text) {
  if (navigator.clipboard?.writeText) {
    try { await navigator.clipboard.writeText(text); announce('Copied.'); return; } catch {}
  }
  const area = document.createElement('textarea'); area.value = text;
  area.style.cssText = 'position:fixed;top:0;left:-9999px'; document.body.append(area); area.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } finally { area.remove(); }
  if (copied) announce('Copied.');
  else {
    const blob = new Blob([text],{type:'text/plain;charset=utf-8'});
    download(blob,'org-man-handoff.txt'); announce('Clipboard unavailable. Text downloaded instead.');
  }
}

function download(blob,name) {
  const url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(url),1000);
}

function openRecord() {
  if (!state.record) return;
  const row = root.querySelector(`#${CSS.escape(state.record)}`);
  if (!row) { announce('The requested record is not in this view.'); return; }
  row.querySelector('details').open = true;
  row.tabIndex = -1; row.focus({preventScroll:true}); row.scrollIntoView({block:'start'});
}

async function start() {
  const response = await fetch(new URL('data/desk.json',import.meta.url));
  if (!response.ok) throw new Error('Catalogue unavailable');
  data = await response.json();
  mount();
  document.querySelector('#chronology-fallback').hidden = true;
  root.hidden = false;
  root.addEventListener('input',event => {
    if (event.target.id === 'desk-search') { state.q = event.target.value; state.record = ''; render(); }
  });
  root.addEventListener('change',event => {
    const target = event.target;
    if (target.name === 'desk-view') {
      state = {...state,view:target.value,year:'',topic:'',access:target.value === 'candidates' ? 'all' : 'readable',record:''}; mount();
    } else if (target.dataset.filter) { state[target.dataset.filter] = target.value; state.record = ''; render(); }
    else if (target.id === 'shortlist-only') { savedOnly = target.checked; state.ids = savedOnly ? [...saved] : null; state.record = ''; mount(); }
  });
  root.addEventListener('click',async event => {
    const control = event.target.closest('[data-action]'); if (!control) return;
    const action = control.dataset.action;
    const row = control.closest('[data-record]');
    const record = row ? data[state.view].find(r => r.id === row.dataset.record) : null;
    if (action === 'reset') { savedOnly = false; state = readState(`?view=${state.view}`); mount(); root.querySelector('#desk-search').focus(); }
    if (action === 'share') await copy(location.href);
    if (action === 'export') {
      const exported = visible.map(r => ({...r,sources:r.sources.map(s => ({...s,href:new URL(s.href,base).href}))}));
      download(new Blob(['\ufeff'+csvText(exported)],{type:'text/csv;charset=utf-8'}),`org-man-${state.view}.csv`);
      announce(`${visible.length} records exported.`);
    }
    if (!record) return;
    if (action === 'permalink') await copy(permalink(record));
    if (action === 'copy') await copy(handoffText(record,permalink(record),base));
    if (action === 'save') {
      if (saved.has(record.id)) saved.delete(record.id); else saved.add(record.id);
      try { localStorage.setItem('org-man-shortlist-v1',JSON.stringify([...saved])); }
      catch { storageAvailable = false; }
      if (savedOnly) { render(); root.querySelector('#shortlist-only').focus(); }
      else { control.setAttribute('aria-pressed',String(saved.has(record.id))); root.querySelector('#saved-count').textContent = `(${state.ids !== null && !savedOnly ? state.ids.length : saved.size})`; }
      announce(storageAvailable ? 'Local shortlist updated.' : 'Storage unavailable; shortlist kept in this tab only.');
    }
  });
  window.addEventListener('popstate',() => { state = readState(location.search); savedOnly = false; mount(); openRecord(); });
  window.addEventListener('storage',event => {
    if (event.key !== 'org-man-shortlist-v1') return;
    try { const values = JSON.parse(event.newValue || '[]'); if (Array.isArray(values)) { saved = new Set(values.filter(v => typeof v === 'string')); render(); } } catch {}
  });
  openRecord();
}

start().catch(error => {
  console.error('Document desk:',error);
  root.hidden = true;
  document.querySelector('#chronology-fallback').hidden = false;
});

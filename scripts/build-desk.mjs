import {readFile, writeFile, mkdir} from 'node:fs/promises';
import {parse} from 'csv-parse/sync';
import assert from 'node:assert/strict';
import {accessLabels, splitLinks, yearsFor} from '../assets/desk-core.js';

const root = new URL('../', import.meta.url);
const read = path => readFile(new URL(path, root), 'utf8');
const csv = async path => parse(await read(`reports/${path}.csv`), {columns: true, skip_empty_lines: true});
const mapping = JSON.parse(await read('data/desk-mapping.json'));
const source = await csv('declassified-document-index');
const candidates = await csv('compiler-control-center');
const notes = await csv('source-note-worklist');
const requests = await csv('request-tracking-ledger');
const decisions = await csv('compiler-decision-log');
const find = (rows, field, key) => {
  const matches = rows.filter(row => String(row[field]) === String(key));
  assert.equal(matches.length, 1, `Expected one ${field}=${key}`);
  return matches[0];
};
const escape = text => String(text).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

function links(value) {
  return splitLinks(value).map(href => {
    if (!href.startsWith('http')) return {href, label:'Project research report'};
    const u = new URL(href);
    let label = 'Source';
    if (u.hostname === 's3.amazonaws.com') label = 'Archival PDF';
    else if (u.hostname === 'catalog.archives.gov') label = `NARA ${u.pathname.split('/').at(-1)}`;
    else if (u.hostname.endsWith('bush41library.gov')) label = u.pathname.includes('daily-record') ? 'Daily Record' : u.pathname.includes('memcons-and-telcons') ? 'Memcons / telcons index' : 'Bush Library finding aid';
    else if (u.hostname === 'archive.org') label = 'State magazine reprint (PDF)';
    else if (u.hostname.endsWith('congress.gov')) label = 'Statute (PDF)';
    else if (u.hostname.endsWith('govinfo.gov')) label = 'Public Papers (PDF)';
    else if (u.hostname === 'irp.fas.org') label = 'FAS directive index';
    else if (u.hostname.endsWith('cia.gov')) label = 'CIA published history (PDF)';
    else if (u.hostname === 'history.state.gov') label = 'Published FRUS sources';
    return {href, label};
  }).sort((a,b) => Number(b.href.endsWith('.pdf')) - Number(a.href.endsWith('.pdf')));
}

const candidateAccess = {1:'publication',2:'locator',3:'locator',4:'context',5:'chronology',6:'packet',7:'packet',8:'packet',9:'locator',10:'withdrawn',11:'locator',12:'locator',13:'locator',14:'context',15:'context',16:'context',17:'context',18:'context'};
const joinedCandidates = candidates.map(row => {
  const meta = mapping.candidates[row.slot];
  assert(meta, `Unmapped candidate ${row.slot}`);
  return {
    id: `candidate-${row.slot}`, slot: Number(row.slot), kind:'candidate', title:row.candidate,
    date: row.date_or_period, dateNote:meta.dateNote || '', years:yearsFor(row.date_or_period),
    topic:meta.topic, access:candidateAccess[row.slot], sourceStatus:row.public_source_status,
    sources:links(row.public_source_url), noteStatus:row.source_note_readiness,
    posture:row.current_posture, summary:row.current_posture, blockers:row.blocking_evidence, nextAction:row.next_action,
    notes:meta.notes.map(id => find(notes, 'priority', id)),
    requests:meta.requests.map(id => ({...find(requests, 'request_id', id), route:splitLinks(find(requests, 'request_id', id).route)[0]})),
    decisions:row.decision_ids.split(/;\s*/).map(id => find(decisions, 'decision_id', id)),
    report:'reports/compiler-control-center.html', gapLinks:links(row.request_link)
  };
});
assert.equal(candidates.length, Object.keys(mapping.candidates).length, 'Candidate mapping drift');
assert.equal(source.length, mapping.documents.length, 'Chronology mapping drift');
const documents = mapping.documents.map(meta => {
  const rows = source.filter(row => row.date === meta.date && row.document === meta.title);
  assert.equal(rows.length, 1, `Chronology mapping drift: ${meta.id}`);
  const row = rows[0], candidate = find(joinedCandidates, 'slot', meta.slot);
  const access = row.source_note_status.includes('mostly withdrawal') ? 'withdrawn' :
    row.status === 'Public control PDF' ? 'packet' : row.status === 'Public locator' ? 'locator' :
    row.public_access.includes('/daily-record?') ? 'chronology' : 'publication';
  return {
    id:meta.id, kind:'document', title:row.document, date:row.date, dateNote:meta.dateNote || '', years:yearsFor(row.date),
    topic:meta.topic, access, sourceStatus:row.status, sources:links(row.public_access),
    summary:row.compiler_use, noteStatus:row.source_note_status, blockers:candidate.blockers,
    nextAction:candidate.nextAction, notes:[], requests:candidate.requests, decisions:candidate.decisions,
    candidateId:candidate.id, candidateTitle:candidate.title,
    report:splitLinks(row.project_report)[0], gapLinks:links(row.request_or_gap)
  };
});
for (const row of [...documents,...joinedCandidates]) {
  assert(accessLabels[row.access], `Unmapped access type: ${row.id}`);
  row.outsidePeriod = row.years.some(year => Number(year) > 1992 || Number(year) < 1989);
  row.searchText = JSON.stringify(row).toLocaleLowerCase();
}
assert.equal(new Set([...documents,...joinedCandidates].map(r => r.id)).size, documents.length + joinedCandidates.length);
const data = {...mapping, documents, candidates:joinedCandidates};
const fallback = `<div id="chronology-fallback">
<h2 id="fallback-chronology">Document Chronology</h2>
<p>Source availability and provenance remain separate: a linked PDF can contain withheld pages. All candidate notes remain provisional.</p>
<div class="table-scroll" tabindex="0" role="region" aria-label="Document chronology">
<table><thead><tr><th>Date</th><th>Document and sources</th><th>Evidence status</th></tr></thead><tbody>
${documents.map(r => `<tr><td>${escape(r.date)}${r.outsidePeriod ? '<br>Outside 1989-1992' : ''}</td><td><strong>${escape(r.title)}</strong><br>${r.sources.map(s => `<a href="${escape(s.href)}">${escape(s.label)}</a>`).join(' &middot; ')}<p>${escape(r.summary)}</p>${r.dateNote ? `<p>${escape(r.dateNote)}</p>` : ''}</td><td>${escape(accessLabels[r.access])}<p>${escape(r.noteStatus)}</p></td></tr>`).join('\n')}
</tbody></table></div></div>
`;
const outputs = {'assets/data/desk.json':JSON.stringify(data,null,2)+'\n', '_includes/document-chronology.html':fallback};
for (const icon of ['bookmark', 'copy', 'link', 'download', 'rotate-ccw', 'search']) {
  outputs[`assets/icons/${icon}.svg`] = await read(`node_modules/lucide-static/icons/${icon}.svg`);
}
outputs['assets/icons/LICENSE'] = await read('node_modules/lucide-static/LICENSE');
for (const [file, content] of Object.entries(outputs)) {
  if (process.argv.includes('--check')) assert.equal(await read(file), content, `Stale generated file: ${file}; run npm run build`);
  else { await mkdir(new URL(file.substring(0,file.lastIndexOf('/')),root), {recursive:true}); await writeFile(new URL(file,root), content); }
}
console.log(`${documents.length} chronology records; ${joinedCandidates.length} candidates; ${notes.length} provisional note rows; ${requests.length} request rows. All joins validated.`);

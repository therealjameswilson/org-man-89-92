import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
import {parse} from 'csv-parse/sync';
import {readState,stateQuery,filterRecords,splitLinks,yearsFor,csvText,handoffText} from '../assets/desk-core.js';
const data = JSON.parse(readFileSync(new URL('../assets/data/desk.json',import.meta.url)));
const blank = readState('');

test('all source rows and candidates survive the join',() => {
  assert.equal(data.documents.length,22); assert.equal(data.candidates.length,18);
  assert.equal(new Set([...data.documents,...data.candidates].map(r=>r.id)).size,40);
  assert(data.candidates.every(r => r.notes.every(n => !n.working_source_note_form.includes('No classification marking'))));
});
test('default chronology prioritizes readable sources without discarding leads',() => {
  assert.equal(filterRecords(data.documents,blank).length,14);
  assert.equal(filterRecords(data.documents,{...blank,access:'all'}).length,22);
});
test('direct archival PDF sorts before the catalogue link',() => {
  const r = data.documents.find(r=>r.id==='dc-151');
  assert(r.sources[0].href.endsWith('.pdf')); assert.equal(r.sources.length,2);
});
test('withdrawal packet is not categorized as a released substantive packet',() => {
  assert.equal(data.documents.find(r=>r.id==='covert-action-1991').access,'withdrawn');
  assert.equal(filterRecords(data.documents,{...blank,access:'packet'}).length,4);
});
test('publications and diary chronology are not labeled declassified',() => {
  assert.equal(filterRecords(data.documents,{...blank,access:'publication'}).length,5);
  assert.equal(filterRecords(data.documents,{...blank,access:'chronology'}).length,5);
});
test('uncertain dates and terminal-date exception remain explicit',() => {
  assert(data.documents.find(r=>r.id==='nsd-79').outsidePeriod);
  assert(data.documents.find(r=>r.id==='com-authorities').dateNote.includes('File-level'));
  assert.deepEqual(data.candidates.find(r=>r.id==='candidate-3').years,[]);
  assert.deepEqual(yearsFor('1991-1992'),['1991','1992']);
  assert.deepEqual(yearsFor('1991-11-15/1992-03-30'),['1991','1992']);
});
test('search combines terms across provenance, title and request identifiers',() => {
  const found = filterRecords(data.documents,{...blank,q:'covert A1'});
  assert.deepEqual(found.map(r=>r.id),['dc-151']);
});
test('year, subject, and access filters compose',() => {
  const found = filterRecords(data.documents,{...blank,year:'1992',topic:'Intelligence budget and organization',access:'packet'});
  assert.deepEqual(found.map(r=>r.id),['nsc-0062','nsr-29-priorities']);
});
test('shared views and empty shortlists round-trip',() => {
  for (const ids of [null,[],['dc-151','nsd-79']]) {
    const state = {...blank,view:'candidates',q:'Bush & NSC',topic:"Bush's intelligence consumption",ids};
    assert.deepEqual(readState(stateQuery(state)),state);
  }
  assert.equal(filterRecords(data.documents,{...blank,ids:[]}).length,0);
});
test('CSV preserves quotes/newlines and neutralizes spreadsheet formulas',() => {
  const row = {...data.documents[0],title:'=HYPERLINK("bad")\nnext'};
  const out = parse(csvText([row]),{columns:true});
  assert.equal(out[0].title,'\'=HYPERLINK("bad")\nnext');
  assert.equal(out[0].sources,row.sources.map(s=>s.href).join('; '));
});
test('handoff retains provisional status and concrete sources, requests and decisions',() => {
  const row = data.candidates[0];
  const text = handoffText(row,'https://example.com/?record=candidate-1','https://example.com/');
  assert(text.includes('PROVISIONAL CANDIDATE NOTE - NOT PUBLICATION-READY'));
  assert(text.includes('Related request D1: Not recorded'));
  assert(text.includes('Decision D05:'));
  assert(text.includes(row.sources[0].href));
});
test('publication does not inherit the source note of a hypothetical archival original',() => {
  assert.deepEqual(data.documents.find(r=>r.id==='bush-com-letter').notes,[]);
  assert(data.candidates[0].notes.length > 0);
});
test('invalid source URL schemes fail closed',() => {
  assert.throws(()=>splitLinks('javascript:alert(1)'));
  assert.deepEqual(splitLinks('research-request-packet.html#batch-d-chief-of-mission-letter'),['reports/research-request-packet.html#batch-d-chief-of-mission-letter']);
});

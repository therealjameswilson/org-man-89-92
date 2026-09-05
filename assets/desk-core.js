export const accessLabels = {
  packet: 'Archival PDF packet',
  publication: 'Public publication',
  chronology: 'Diary / call chronology',
  locator: 'Locator only',
  withdrawn: 'Control / withdrawal packet',
  context: 'Research / published context'
};

export function splitLinks(value) {
  return value.split(/;\s*/).map(v => v.trim()).filter(Boolean).map(href => {
    if (/^https?:\/\//.test(href)) return href;
    if (/^[a-z0-9-]+\.html(?:#[a-z0-9-]+)?$/.test(href)) return `reports/${href}`;
    throw new Error(`Unsupported source link: ${href}`);
  });
}

export function yearsFor(date) {
  const years = [...date.matchAll(/\b(?:19|20)\d{2}\b/g)].map(m => Number(m[0]));
  if (!years.length) return [];
  const first = Math.min(...years), last = Math.max(...years);
  return Array.from({length: last - first + 1}, (_, i) => String(first + i));
}

export function readState(search) {
  const p = new URLSearchParams(search);
  return {
    view: p.get('view') === 'candidates' ? 'candidates' : 'documents',
    q: p.get('q') || '', year: p.get('year') || '', topic: p.get('topic') || '',
    access: p.get('access') || (p.get('view') === 'candidates' ? 'all' : 'readable'), ids: p.has('ids') ? p.get('ids').split(',').filter(Boolean) : null,
    record: p.get('record') || ''
  };
}

export function stateQuery(state) {
  const p = new URLSearchParams();
  if (state.view === 'candidates') p.set('view', state.view);
  for (const k of ['q', 'year', 'topic', 'access', 'record']) if (state[k]) p.set(k, state[k]);
  if (state.ids !== null) p.set('ids', state.ids.join(','));
  return p.toString();
}

export function filterRecords(records, state) {
  const terms = state.q.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
  return records.filter(record =>
    (!state.year || record.years.includes(state.year)) &&
    (!state.topic || record.topic === state.topic) &&
    (!state.access || state.access === 'all' || (state.access === 'readable' ? ['packet','publication','chronology'].includes(record.access) : record.access === state.access)) &&
    (state.ids === null || state.ids.includes(record.id)) &&
    terms.every(term => record.searchText.includes(term))
  );
}

export function csvText(records) {
  const fields = ['id', 'date', 'title', 'topic', 'access', 'source_note_status', 'sources', 'blockers', 'next_action'];
  const cell = value => {
    let text = String(value ?? '');
    if (/^[\s]*[=+@-]/.test(text)) text = `'${text}`;
    return `"${text.replaceAll('"', '""')}"`;
  };
  return [fields, ...records.map(r => [r.id, r.date, r.title, r.topic, accessLabels[r.access], r.noteStatus, r.sources.map(s => s.href).join('; '), r.blockers, r.nextAction])]
    .map(row => row.map(cell).join(',')).join('\r\n') + '\r\n';
}

export function handoffText(record, url, base) {
  return [
    record.title, `Date: ${record.date}`, record.dateNote,
    `Access: ${accessLabels[record.access]}`, `Topic: ${record.topic}`, `Record: ${url}`, '',
    'SOURCE LINKS (not an authenticated FRUS source note)',
    ...record.sources.map(s => `${s.label}: ${new URL(s.href, base).href}`), '',
    `Source-note status: ${record.noteStatus}`, `Open provenance: ${record.blockers}`,
    ...record.notes.flatMap(n => ['', 'PROVISIONAL CANDIDATE NOTE - NOT PUBLICATION-READY', n.working_source_note_form, `Missing: ${n.missing_fields_to_close}`]), '',
    `Next action: ${record.nextAction}`,
    ...record.requests.map(r => `Related request ${r.request_id}: ${r.current_project_status}. ${new URL(r.route, base).href}`),
    ...record.decisions.map(d => `Decision ${d.decision_id}: ${d.decision} Status: ${d.status}.`), '',
    'Research aid only. Public availability does not establish declassification, completeness, or final selection.'
  ].filter(v => v !== undefined).join('\n');
}

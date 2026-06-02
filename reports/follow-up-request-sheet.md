---
layout: default
title: Follow-Up Request Sheet
---

# Follow-Up Request Sheet

Checked: 2026-06-02

Purpose: convert incomplete responses into the next request without forcing the
compiler to redraft appeal, referral, re-review, scan, or clarification
language. Use this after the [response triage sheet](response-triage-sheet.html)
and [response intake sheet](response-intake-sheet.html), then update the
[request tracking ledger](request-tracking-ledger.html) and [candidate closeout
board](candidate-closeout-board.html).

Spreadsheet export: [follow-up request sheet CSV](follow-up-request-sheet.csv).

## Follow-Up Matrix

| Trigger | Follow-up route | Send when | Include | Same-pass update |
| --- | --- | --- | --- | --- |
| Partially released substantive record | Targeted MDR re-review or appeal | Withheld pages/tabs appear central to selection value or source-note fields. | Original request ID, release date, file unit, page/tab numbers, exemptions, and why the withheld material is needed for organization/management history. | Update [ledger](request-tracking-ledger.html), [intake](response-intake-sheet.html), [source-note worklist](source-note-worklist.html), and [closeout board](candidate-closeout-board.html). |
| Withdrawal sheets only | Narrow MDR re-review | Withdrawal metadata names minutes, summary, decision paper, attachment, legislative language, Gates briefing, or legal memo. | Withdrawal-sheet count, document titles/dates, exemptions, file unit, OA/ID or NAID, and selected pages/tabs for re-review. | Keep selection status hold/MDR; update [response triage](response-triage-sheet.html) and [candidate closeout](candidate-closeout-board.html). |
| Referred to another agency | Referral status follow-up | Referral agency, date, or tracking number is known but no substantive response has arrived. | Referring office, receiving agency, referral date, original and new tracking numbers, file unit, and requested status update. | Add referral facts to [ledger](request-tracking-ledger.html); do not close source-note fields. |
| Not located, narrow search | Broadened search request | Response searched only one office, series, date range, or keyword set. | Exact search scope from response, missing likely offices/series, alternate names, dates, OA/IDs, NAIDs, and public/source anchors. | Keep missing facts open in [source-note worklist](source-note-worklist.html). |
| Not located, broad documented search | Fallback confirmation or alternate repository check | Search appears broad enough to support fallback or drop, but fallback decision needs evidence. | Search scope, repositories searched, public fallback text, and request for confirmation that no archival control copy was located. | Trigger [decision resolution](decision-resolution-sheet.html) before changing selection status. |
| Better file unit identified | New file-unit request | Response names a better folder, OA/ID, NAID, lot file, box, or series. | Parent request ID, new control identifiers, relationship to original target, and exact scan/MDR/folder pull ask. | Add child request row in [ledger](request-tracking-ledger.html) and update [send sheet](request-send-sheet.html) if it becomes priority. |
| Duplicate or variant packet found | Packet comparison request | Two packets overlap and one may be fuller or cleaner for source-note control. | Both file units, page counts, release differences, duplicate tabs, variant tabs, and request for missing pages or clearer control source. | Update [source-note field matrix](source-note-field-matrix.html) and [decision D08](decision-resolution-sheet.html) if control source changes. |
| Released copy but source-note fields missing | Clarification request | A scan is usable but does not show folder title, classification, routing, attachments, or version status. | File name, page count, suspected source, missing FRUS fields, and request for repository/source-note metadata. | Update [source-note worklist](source-note-worklist.html); do not mark ready until fields are proved or unavailable. |
| Public fallback only | Archival copy confirmation | Public text exists, but final source-note standard requires a documented archival search. | Public citation, suspected archival offices/series, requested search scope, and fallback decision need. | Update [decision D10 or D14](decision-resolution-sheet.html) before promotion. |
| New public/control link found | Link-health refresh | A response supplies a public file unit, PDF, catalog record, or publication link. | URL, page title, date accessed, response context, and source-note role: locator, control copy, fallback, or support. | Rerun [link health audit](link-health-audit.html) and [public site gap check](public-site-gap-check.html). |

## Copy/Paste Wording

### Targeted MDR Re-Review

```text
I am following up on [request ID / tracking number] concerning [file unit,
OA/ID/NAID, title, and date]. The release dated [date] provided [released
pages/files] but withheld [specific pages, tabs, titles, or attachments].

For a FRUS organization and management volume, the withheld material appears
central to [selection value: procedure, authority, budget, congressional
notification, staffing, coordination, implementation, or source-note control].
Please re-review or identify the basis for continued withholding of [specific
items], including any segregable portions, withdrawal-sheet metadata, and
referral status.
```

### Referral Status Follow-Up

```text
I am following up on the referral of [file unit/document] from [referring
office] to [receiving agency] on [date]. The original request/tracking number
was [number], and the referred tracking number, if known, is [number].

Could you confirm the current review status, expected response route, and
whether any additional information is needed from me to keep the review moving?
```

### Broadened Search Request

```text
Thank you for searching [scope searched]. Because the response appears limited
to [office/series/date range/terms], I request a broadened reference check for
[target document or file].

Possible additional locations or identifiers include [alternate offices,
series, OA/IDs, NAIDs, lot files, dates, titles, public source anchors, or
known recipients]. Please let me know whether these locations can be searched
or whether a separate request should be submitted.
```

### Source-Note Metadata Clarification

```text
The released scan for [document/file] is useful, but several source-note fields
remain unclear: [repository/series/folder, OA/ID, classification, routing,
attachments, version status, meeting time/place, or participant list].

Could you confirm the source folder/file title and any visible archival or
document metadata needed to cite this record accurately?
```

### Public Fallback Confirmation

```text
I have located the public version of [document/publication citation], but I am
trying to determine whether an archival control copy exists for FRUS citation
purposes. Please confirm whether [offices/series/files searched or proposed]
contain a signed, circulated, final, or official copy. If not located, please
identify the search scope so the public text can be evaluated as fallback.
```

## Closeout Rule

Every follow-up should preserve the parent request ID and create either a child
request row or a clearly dated ledger note. Do not change a candidate to
selected, fallback, source-note-ready, or dropped until the follow-up response
is captured in the [response intake sheet](response-intake-sheet.html) and the
[promotion gate checklist](promotion-gate-checklist.html) still clears.

## Related Project Reports

- [Response triage sheet](response-triage-sheet.html)
- [Response intake sheet](response-intake-sheet.html)
- [Request tracking ledger](request-tracking-ledger.html)
- [Request send sheet](request-send-sheet.html)
- [Research request packet](research-request-packet.html)
- [Candidate closeout board](candidate-closeout-board.html)
- [Source note worklist](source-note-worklist.html)
- [Source note field matrix](source-note-field-matrix.html)
- [Decision resolution sheet](decision-resolution-sheet.html)
- [Promotion gate checklist](promotion-gate-checklist.html)

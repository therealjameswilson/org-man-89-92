---
layout: default
title: Response Intake Sheet
---

# Response Intake Sheet

Checked: 2026-06-02

Purpose: one-pass evidence capture form for repository, MDR, agency,
publication, or lot-file responses. Use this before updating the [request
tracking ledger](request-tracking-ledger.html), [source note
worklist](source-note-worklist.html), [candidate closeout
board](candidate-closeout-board.html), or [selection
worksheet](selection-worksheet.html).

Spreadsheet export: [response intake sheet CSV](response-intake-sheet.csv).

## Intake Rule

Classify the response in the [response triage sheet](response-triage-sheet.html),
then fill the proved fields below. Do not infer source-note facts from a
catalog record, cover email, or withdrawal sheet. If the response does not
prove a field, leave the field open and name the follow-up route.

## Core Capture Fields

| Field | Capture exactly | Why it matters | Update target |
| --- | --- | --- | --- |
| Request ID | A1, B1, D1, F4, or parent/follow-up ID. | Preserves the chain from request to response. | [Request ledger](request-tracking-ledger.html) |
| Candidate slot | Selection slot and candidate name affected. | Keeps the response tied to the document architecture. | [Candidate closeout board](candidate-closeout-board.html) and [selection worksheet](selection-worksheet.html) |
| Response type | Acknowledgement, released, partially released, withdrawal sheets only, referred, denied, not located, public fallback, better file unit, duplicate/variant packet, or promotion-ready. | Drives the same-pass update order. | [Response triage sheet](response-triage-sheet.html) |
| Response date | Date on the email, letter, release notice, or scan delivery. | Supports tracking and follow-up timing. | [Request ledger](request-tracking-ledger.html) |
| Responding office | Repository, agency, office, unit, and named correspondent if useful. | Proves who searched, reviewed, or released the material. | [Request ledger](request-tracking-ledger.html) |
| Tracking number | Agency/repository tracking number, case number, MDR number, referral number, or none. | Keeps later correspondence tied to the same request. | [Request ledger](request-tracking-ledger.html) |
| Search or review scope | Offices, series, files, date range, terms, folders, tabs, or pages searched/reviewed. | Distinguishes broad no-find evidence from a narrow search. | [Response triage](response-triage-sheet.html) and [decision sheet](decision-resolution-sheet.html) |
| Files received | Exact filenames, PDFs, scans, folders, page counts, dates, and delivery method. | Prevents source-note work from drifting away from the actual release. | [Request ledger](request-tracking-ledger.html) |
| Control identifiers | Repository, collection, series, box/folder, OA/ID, local ID, NAID, lot number, document number, or file unit. | Supplies the backbone of a FRUS source note. | [Source note worklist](source-note-worklist.html) |
| Document identity | Date, title, document type, drafter/originator, recipient, meeting time/place, participants, and attachments. | Determines whether the item can be described and selected. | [Source note worklist](source-note-worklist.html) |
| Classification and handling | Classification, handling channels, declassification markings, sanitization notes, and visible restrictions. | Required before final FRUS source-note readiness. | [Source note worklist](source-note-worklist.html) |
| Release status | Fully open, partially open, withdrawn, referred, denied, pending, public fallback, not located, or closed. | Prevents a reachable PDF from being mistaken for a complete record. | [Request ledger](request-tracking-ledger.html) and [promotion gate](promotion-gate-checklist.html) |
| Withholdings or referrals | Withheld pages/tabs, exemptions, referral agencies, appeal/re-review path, and deadlines. | Defines whether a follow-up, appeal, or MDR request is needed. | [Request ledger](request-tracking-ledger.html) and [research packet](research-request-packet.html) |
| Source-note facts proved | Which FRUS source-note fields are now proved, and which remain unresolved. | Keeps the worklist factual and prevents premature source-note closeout. | [Source note worklist](source-note-worklist.html) |
| FRUS value | Whether the response shows organization, management, authority, budget, staffing, oversight, implementation, or only policy substance. | Determines selection, support, fallback, or drop posture. | [Selection worksheet](selection-worksheet.html) |
| Decision triggered | Terminal-date, fallback, chapter-scope, case-study, control-copy, or source-value decision. | Keeps architecture changes explicit. | [Decision resolution sheet](decision-resolution-sheet.html) |
| Next action | Appeal, re-review, new file-unit request, scan request, source-note draft, selection update, fallback decision, or no action. | Gives the compiler the next physical move. | [Candidate closeout board](candidate-closeout-board.html) |
| Same-pass pages updated | Ledger, intake sheet/private log, source-note row, closeout row, selection row, decision row, and link-health check if new links were added. | Prevents contradictory public status. | [Promotion gate checklist](promotion-gate-checklist.html) |

## Response-Type Checklist

| If the response is | Capture before moving on | Do not do |
| --- | --- | --- |
| Acknowledgement only | Office, date, tracking number, promised window, and request ID. | Do not change selection posture. |
| Fully released control copy | File count, page count, release date, exact control identifiers, classification, document identity, and attachments. | Do not mark selected until the [promotion gate checklist](promotion-gate-checklist.html) clears. |
| Partially released substantive record | Released pages, withheld pages, exemptions, referral status, visible source-note facts, and substantive value. | Do not erase unresolved source-note brackets. |
| Withdrawal sheets only | Withdrawal-sheet count, document titles, dates, exemptions, originating agency, and review path. | Do not draft a final source note from withdrawal metadata alone. |
| Referred to another agency | Referring office, referral agency, referral date, new tracking number, and expected route. | Do not treat the source-note field as closed. |
| Not located | Exact search scope, repositories/offices searched, date range, search terms, and whether the search was narrow or broad. | Do not use public fallback unless the search was broad enough and the fallback decision is logged. |
| Better file unit identified | New file unit, series/folder, OA/ID or NAID, and why it is better than the original target. | Do not abandon the parent request without preserving the chain. |
| Duplicate or variant packet | Both file units, page counts, release differences, duplicate pages, variant tabs, and preferred control source. | Do not select a control file before comparing variants. |
| Public fallback only | Public source, page range, search path, and reason no archival control copy is available. | Do not promote unless the compiler accepts fallback use. |
| Promotion-ready | All source-note fields, release status, document value, decision dependencies, and same-pass page updates. | Do not change status unless ledger, worklist, closeout board, selection worksheet, and decision log agree. |

## Same-Pass Update Order

1. Classify response type in the [response triage sheet](response-triage-sheet.html).
2. Capture the fields on this intake sheet.
3. Update the [request tracking ledger](request-tracking-ledger.html).
4. Update the [source note worklist](source-note-worklist.html) only with
   facts proved by the response.
5. Use the [candidate closeout board](candidate-closeout-board.html) for the
   blocker and next move.
6. Resolve any triggered decision in the [decision resolution
   sheet](decision-resolution-sheet.html).
7. Run the [promotion gate checklist](promotion-gate-checklist.html) before
   changing a candidate to selected or source-note-ready.
8. Update the [selection worksheet](selection-worksheet.html) last.

## Related Project Reports

- [Compiler dashboard](compiler-dashboard.html)
- [Compiler action board](compiler-action-board.html)
- [Request send sheet](request-send-sheet.html)
- [Response triage sheet](response-triage-sheet.html)
- [Request tracking ledger](request-tracking-ledger.html)
- [Candidate closeout board](candidate-closeout-board.html)
- [Source note worklist](source-note-worklist.html)
- [Decision resolution sheet](decision-resolution-sheet.html)
- [Selection worksheet](selection-worksheet.html)
- [Promotion gate checklist](promotion-gate-checklist.html)

---
layout: default
title: Response Triage Sheet
---

# Response Triage Sheet

Checked: 2026-06-02

Purpose: classify repository, MDR, and agency responses without forcing the
compiler to reconcile the ledger, source-note worklist, selection worksheet,
and decision log by hand. Use this page immediately after a response arrives.
Then capture exact response facts in the [response intake
sheet](response-intake-sheet.html) and use the [candidate closeout
board](candidate-closeout-board.html) to identify the affected candidate's
blocker and next status move.

Spreadsheet export: [response triage sheet CSV](response-triage-sheet.csv).

## Response Classifier

| Response type | Ledger status | Same-pass action | Source-note action | Selection / decision action |
| --- | --- | --- | --- | --- |
| Acknowledgement only | Acknowledged | Record acknowledgement date, office, assigned tracking number, and promised response window in the [request tracking ledger](request-tracking-ledger.html). | No source-note change unless the acknowledgement fixes repository, office, series, or file-unit facts. | No selection change. Calendar follow-up outside the public site if needed. |
| Tracking number assigned | Sent or Acknowledged | Add tracking number and receiving office to the ledger row. | Add tracking number only to private correspondence notes; do not put it in a FRUS source note unless it becomes part of a release record. | No selection change. |
| Fully released control copy | Released | Record file name, page count, date received, and release status in the ledger. | Draft or complete the relevant [source-note worklist](source-note-worklist.html) row: repository, collection, series, folder, OA/ID or NAID, classification, document type, attachments, and declassification markings. | Run the [promotion gate checklist](promotion-gate-checklist.html); if all gates clear, update the [selection worksheet](selection-worksheet.html). |
| Partially released substantive record | Partially released | Record released pages, withheld pages, exemptions, referrals, and appeal/re-review path. | Update source-note facts that are visible; keep unresolved fields bracketed or named as withheld. | Keep as promote/review or hold depending on substance; log any terminal-date or fallback issue in the [compiler decision log](compiler-decision-log.html). |
| Withdrawal sheets only | Partially released | Record withdrawal-sheet count, exemptions, document titles if visible, and release limitations. | Treat as locator/MDR support; do not draft final source note from withdrawal sheets alone. | Hold. Use as MDR target only unless withdrawal metadata identifies a stronger pull. |
| Referred to another agency | Referred | Record referring office, receiving agency, referral date, and any new tracking number. | Do not close source note; add referral agency as release-status fact if visible in official response. | Hold. Add a follow-up row or note if the referral creates a new route. |
| Denied or withheld in full | Partially released or Closed | Record denial basis, exemptions, appeal deadline, and search/review scope. | No final source note unless a public fallback is selected after documented search. | Decide whether to appeal, re-request narrower tabs, use public fallback, or drop. Log architecture impact if the document was a chapter anchor. |
| Not located, narrow search | Not located | Record exact search scope, offices, collections, and date range searched. | Do not treat the fact as unavailable yet; keep missing fields open. | Try another office, series, repository, or file-unit lead before fallback. |
| Not located, broad documented search | Not located or Closed | Record the search scope in enough detail to justify fallback or dropping. | If using fallback, source note must explain why no archival control copy was located. | Update selection status to fallback, support, or drop; log decision if the result affects a chapter anchor. |
| Better file unit identified | Sent or Acknowledged | Add a new request row or sub-entry and link it back to the original request ID. | Move known repository/series/folder facts to the source-note row, but do not close it until the file is reviewed. | Keep original candidate open; update [request send sheet](request-send-sheet.html) if the new target becomes the better request. |
| Duplicate or variant packet found | Released or Partially released | Record both file units, page counts, release differences, and which packet is fuller. | Compare source-note control fields; keep the fuller control file as the likely citation. | Update selection worksheet and decision log if the control source changes. |
| Public fallback only | Released or Not located | Record public source, page range, and search path that failed to locate archival copy. | Draft fallback note only if the compiler accepts public text as final fallback. | Keep public source as editorial support unless the [promotion gate checklist](promotion-gate-checklist.html) clears fallback use. |
| Substantive minutes or summary released | Released or Partially released | Record meeting title, date, time/place, participants, attachments, and release status. | Draft meeting source note with repository, series, file unit, classification, meeting details, and attachment status. | Re-score as selected-document candidate if the document shows organization, management, authority, oversight, budget, or implementation machinery. |
| Source-note facts complete but document value weak | Released | Close source-note fields, but mark FRUS action as support or editorial note. | Keep final note only if cited; otherwise retain as support fact. | Do not promote. Update selection worksheet to support/drop. |
| Candidate appears promotion-ready | Released or Partially released | Confirm ledger, source-note row, selection worksheet, and decision log agree. | Remove unresolved brackets or explicitly document unavailable facts. | Run every gate in the [promotion gate checklist](promotion-gate-checklist.html) before changing status to selected. |
| Response creates new follow-up route | Sent, Referred, or Acknowledged | Add a follow-up request row and preserve parent request ID. | Carry forward only verified facts; do not infer missing source-note data from the referral. | Update action board or send sheet only if the follow-up becomes a priority route. |

## Closeout Order

1. Update the [request tracking ledger](request-tracking-ledger.html) first.
2. Fill the [response intake sheet](response-intake-sheet.html) so search
   scope, files received, source-note facts, withholdings, and next action are
   captured before status changes.
3. Update the [source-note worklist](source-note-worklist.html) only for facts
   actually proved by the response.
4. Check the [candidate closeout board](candidate-closeout-board.html) for the
   candidate-specific blocker, decision dependency, and next move.
5. Update the [selection worksheet](selection-worksheet.html) if document value
   or release status changed.
6. Update the [compiler decision log](compiler-decision-log.html) if the
   response changes terminal-date handling, public fallback use, chapter
   architecture, appeal/re-review priority, or control-copy choice.
   Use the [decision resolution sheet](decision-resolution-sheet.html) to
   decide whether the response triggers a now-ready or evidence-dependent
   decision.
7. Before marking anything selected or source-note-ready, run the [promotion
   gate checklist](promotion-gate-checklist.html).

## Related Project Reports

- [Compiler dashboard](compiler-dashboard.html)
- [Compiler action board](compiler-action-board.html)
- [Candidate closeout board](candidate-closeout-board.html)
- [Request send sheet](request-send-sheet.html)
- [Response intake sheet](response-intake-sheet.html)
- [Request tracking ledger](request-tracking-ledger.html)
- [Research request packet](research-request-packet.html)
- [Source note worklist](source-note-worklist.html)
- [Selection worksheet](selection-worksheet.html)
- [Promotion gate checklist](promotion-gate-checklist.html)
- [Compiler decision log](compiler-decision-log.html)
- [Decision resolution sheet](decision-resolution-sheet.html)

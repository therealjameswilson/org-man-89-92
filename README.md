# FRUS 1989-1992, Volume II

Working repository for source discovery and selection notes for *Foreign
Relations of the United States, 1989-1992, Volume II, Organization and
Management of Foreign Policy*.

The Office of the Historian lists this volume as **Being Researched**:
[FRUS 1989-1992, Volume II](https://history.state.gov/historicaldocuments/frus1989-92v02).

Operational entry point: the [document chronology](https://therealjameswilson.github.io/org-man-89-92/),
with 22 chronological records and a searchable 18-candidate queue. Filters,
direct source links, provisional notes, request status, and decision dependencies
are joined from the existing CSVs. The [static control center](https://therealjameswilson.github.io/org-man-89-92/reports/compiler-control-center.html)
remains available.

## Maintaining the Document Desk

- Edit the original CSVs in `reports/`, not `assets/data/desk.json`.
- `data/desk-mapping.json` assigns stable record IDs, related candidate slots,
  note/request relationships, and explicit date cautions. New or changed source
  rows must have a matching entry; the build fails on missing or ambiguous joins.
- Run `npm ci`, `npm run build`, `npm test`, and `npm run check`. Commit the
  generated JSON, static chronology include, and licensed icon assets with the
  source changes. GitHub Pages continues to build the Jekyll site from `main`.
- `npm run preview:build` makes a lightweight local UI preview in `_site`;
  `npm run test:browser` runs Chrome desktop/mobile tests against it. This preview
  uses Liquid/Marked, not Jekyll; verify the actual Pages build after publishing.
- `SITE_URL=https://therealjameswilson.github.io/org-man-89-92/ npm run test:browser`
  runs the same checks against the public deployment.

Shortlists stay in browser local storage. Shared shortlist URLs contain record
IDs, not private notes. Saving a record never changes the request ledger or
selection status. Copy/download handoffs preserve unresolved provenance and
the actual source links. No archival request is sent by this interface.

The interface update is dated separately from the catalogue review. Access
categories distinguish archival PDFs, public publications, diary chronology,
locators, and control/withdrawal packets; none certifies complete declassification.

## Current Policy Sweep

The first source sweep reviewed a [Google Drive folder of Department of State
*Current Policy* PDF compilations](https://drive.google.com/drive/folders/1EzQwduz85YtC1mucT0IrYZRD1LRuJvEy).

The folder is useful, but limited. It mostly covers 1989-1990 public State
Department policy statements and does not appear to include 1991-1992 material.

The strongest Volume II candidates from that folder are:

1. CP 1147, Secretary Baker, "The International Agenda and FY 1990 Budget Request," February 21, 1989.
2. CP 1245, Secretary Baker, "U.S. Foreign Policy Priorities and FY 1991 Budget Request," February 1, 1990.
3. CP 1256, Secretary Baker, "A Budget Blueprint for Fiscal Year 1991," February 22, 1990.
4. CP 1163, Jonathan Moore, "Update on Immigration and Refugee Issues," April 6, 1989.
5. CP 1146, Secretary Baker, "Statement at Senate Confirmation Hearings," January 17, 1989.
6. CP 1277, President Bush, "Citizens Democracy Corps Proposed for Eastern Europe," May 12, 1990.

Selective follow-up candidates include CP 1171, CP 1219, CP 1289, CP 1290,
CP 1307, and CP 1309, depending on whether the volume treats international
organizations, refugee admissions, assistance coordination, export controls, or
policy-process mechanisms.

See [reports/current-policy-sweep.md](reports/current-policy-sweep.md) for the
full candidate list and rationale.

## Cross-Source Sweep

A second pass checked source anchors and harvested records cited in the other
local FRUS companion repositories, plus the published Volume XXXI sources page.
The strongest newly surfaced leads are the NSC transition and procedure files,
especially:

- `Reagan-Bush Transition Briefing Book: Background on NSC Organization and Administration`, NAID 470760855.
- `National Security Council Administrative Manual`, NAID 470760856.
- `Authorities and Responsibilities of the United States Chief of Mission`, NAID 470760858.
- President Bush's July 12, 1990 all-Chief-of-Mission letter of instruction,
  with the September 14, 1989 Armacost/Japan version in NAID 470760858 treated
  as a related predecessor/variant.
- `NSR-16 - Comprehensive Review of International Affairs Budget and Programs`, NAID 446394955.
- President Bush's PDB process/control records, with CIA public histories used
  as locators for briefer notes, tasking logs, distribution controls, and Daily
  Diary corroboration.
- `Presidential Daily Diary and Presidential Daily Backup Materials`,
  White House Office of Appointments and Scheduling Files, GB-WHASF-001, NAID
  186322, for meetings, telephone calls, intelligence/national security
  briefings, Daily Backup material, and Desert Storm coalition contacts.
- `NSC/DC 151 - Definition of Covert Action`, NAID 352356448, for the
  July 5, 1990 Deputies Committee packet on covert-action definition,
  legislative language, and SSCI/HPSCI consultation context.
- `NSC0062 - Intelligence Capabilities/1992-2005`, NAID 470760970, and
  `NSC Meeting NSR-29 Intelligence Priorities`, NAID 470761501, for the
  March 25, 1992 intelligence capabilities review, Gates presentation,
  intelligence priorities, and pre-Congress review.
- `NSD 79 - Approval and Review of Covert Action`, Bush Library/NARA
  H-Files, NSD Files, OA/ID 90005-033.
- `NSR 29` and `NSD 67 - Intelligence Capabilities - 1992-2005`, which
  anchor the intelligence capabilities and NFIP budget-management lane.

See [reports/cross-source-volume-ii-candidates.md](reports/cross-source-volume-ii-candidates.md)
for the full cross-source queue, and
[reports/bush-chief-of-mission-letter.md](reports/bush-chief-of-mission-letter.md)
for the final-version check on the Bush ambassador letter.

## Compiler Gap Assessment

The current source base is strong enough for a provisional outline, but not for
final selection. The main risks are thin 1991-1992 coverage, unreviewed State
internal management files, White House/Bush Library catalog leads without PDFs,
incomplete version control for the Bush Chief-of-Mission letter, and unresolved
internal records for the intelligence budget/congressional-oversight lane.

See [reports/compiler-gap-assessment.md](reports/compiler-gap-assessment.md) for
the gap memo and immediate pull list.

Follow-up gap-closure work is tracked in:

- [reports/compiler-control-center.md](reports/compiler-control-center.md)
- [reports/compiler-handoff.md](reports/compiler-handoff.md)
- [reports/compiler-dashboard.md](reports/compiler-dashboard.md)
- [reports/compiler-first-session-queue.md](reports/compiler-first-session-queue.md)
- [reports/compiler-action-board.md](reports/compiler-action-board.md)
- [reports/candidate-closeout-board.md](reports/candidate-closeout-board.md)
- [reports/submission-route-sheet.md](reports/submission-route-sheet.md)
- [reports/request-send-sheet.md](reports/request-send-sheet.md)
- [reports/declassified-document-index.md](reports/declassified-document-index.md)
- [reports/research-request-packet.md](reports/research-request-packet.md)
- [reports/request-tracking-ledger.md](reports/request-tracking-ledger.md)
- [reports/response-triage-sheet.md](reports/response-triage-sheet.md)
- [reports/response-intake-sheet.md](reports/response-intake-sheet.md)
- [reports/follow-up-request-sheet.md](reports/follow-up-request-sheet.md)
- [reports/selection-worksheet.md](reports/selection-worksheet.md)
- [reports/promotion-gate-checklist.md](reports/promotion-gate-checklist.md)
- [reports/source-note-field-matrix.md](reports/source-note-field-matrix.md)
- [reports/source-note-worklist.md](reports/source-note-worklist.md)
- [reports/compiler-decision-log.md](reports/compiler-decision-log.md)
- [reports/decision-resolution-sheet.md](reports/decision-resolution-sheet.md)
- [reports/link-health-audit.md](reports/link-health-audit.md)
- [reports/candidate-closeout-board.csv](reports/candidate-closeout-board.csv)
- [reports/request-tracking-ledger.csv](reports/request-tracking-ledger.csv)
- [reports/selection-worksheet.csv](reports/selection-worksheet.csv)
- [reports/declassified-document-index.csv](reports/declassified-document-index.csv)
- [reports/source-note-worklist.csv](reports/source-note-worklist.csv)
- [reports/compiler-dashboard.csv](reports/compiler-dashboard.csv)
- [reports/compiler-first-session-queue.csv](reports/compiler-first-session-queue.csv)
- [reports/compiler-action-board.csv](reports/compiler-action-board.csv)
- [reports/submission-route-sheet.csv](reports/submission-route-sheet.csv)
- [reports/request-send-sheet.csv](reports/request-send-sheet.csv)
- [reports/response-triage-sheet.csv](reports/response-triage-sheet.csv)
- [reports/response-intake-sheet.csv](reports/response-intake-sheet.csv)
- [reports/follow-up-request-sheet.csv](reports/follow-up-request-sheet.csv)
- [reports/source-note-field-matrix.csv](reports/source-note-field-matrix.csv)
- [reports/promotion-gate-checklist.csv](reports/promotion-gate-checklist.csv)
- [reports/compiler-decision-log.csv](reports/compiler-decision-log.csv)
- [reports/decision-resolution-sheet.csv](reports/decision-resolution-sheet.csv)
- [reports/link-health-audit.csv](reports/link-health-audit.csv)
- [reports/gap-closure-status.md](reports/gap-closure-status.md)
- [reports/candidate-register.md](reports/candidate-register.md)
- [reports/archival-pull-matrix.md](reports/archival-pull-matrix.md)
- [reports/dispatch-1991-1992-sweep.md](reports/dispatch-1991-1992-sweep.md)
- [reports/nsr-16-budget-review.md](reports/nsr-16-budget-review.md)
- [reports/intelligence-matters-chapter.md](reports/intelligence-matters-chapter.md)
- [reports/nsc-admin-transition-review.md](reports/nsc-admin-transition-review.md)
- [reports/provisional-volume-outline.md](reports/provisional-volume-outline.md)
- [reports/source-note-style-audit.md](reports/source-note-style-audit.md)

## Front Matter

- [persons.md](persons.md) is the generated Persons list, formatted to match the
  published FRUS Persons pages and based on the attached Bush comprehensive
  names list.
- [reports/persons-list-editorial-qa.md](reports/persons-list-editorial-qa.md)
  records cleanup decisions and remaining compiler judgment points.

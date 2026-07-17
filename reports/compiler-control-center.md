---
layout: default
title: Compiler Control Center
---

# Compiler Control Center

Audited: 2026-07-17

This is the canonical one-row-per-candidate operational view for the volume.
It joins the public/control source trail, selection posture, source-note
readiness, request dependency, compiler decision, blocker, and next action.

Spreadsheet export: [compiler control center CSV](compiler-control-center.csv).

## Current Control State

| Area | Current state | Compiler action |
| --- | --- | --- |
| Candidate architecture | 18 candidate slots: 6 promote/review, 6 hold/MDR, 3 support/fallback, and 3 selective. | Work from the master table below; no candidate is final-selected. |
| Request queue | 17 request rows; all remain `Not recorded` in the public ledger. | Send or log A1/A4, B1-B3, D1/C1, E1/E2, then F1-F4. |
| Source notes | 16 worklist rows and 9 source-pool patterns; 0 final-ready notes. | Keep bracketed facts open until the control record or response proves them. |
| Decisions | 14 decisions: 8 default-ready and 6 evidence-dependent; 0 recorded as decided. | Record architecture defaults now; leave evidence-dependent decisions open until a response lands. |
| Public source trail | 22 chronological leads, including 5 public-control PDFs. | Read linked sources now, but do not confuse reachability with final archival provenance. |

## Next Request Bundles

| Order | Bundle | Direct evidence | What the bundle decides |
| --- | --- | --- | --- |
| 1 | [A1 NSC/DC 151](research-request-packet.html#a1-nscdc-151-definition-of-covert-action) and [A4 NSD 79](research-request-packet.html#a4-nsd-79-approval-and-review-of-covert-action) | [NSC/DC 151 PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_312294079/41-bpr-nsc-hfiles-dc_mtgs-151-90015-009.pdf); [NSD 79 PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSDs_313189290/41-bpr-nsc-hfiles-nsd-79-90005-033.pdf) | Whether covert-action procedure and congressional interaction yield selectable records. |
| 2 | [B1 NSC0062](research-request-packet.html#b1-nsc0062-intelligence-capabilities), [B2 NSR-29 packet](research-request-packet.html#b2-nsr-29-intelligence-priorities-packet), and [B3 NSR 29/NSD 67](research-request-packet.html#b3-nsr-29-and-nsd-67-control-copies) | [NSC0062 PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC_Mtgs_312293887/41-bpr-nsc-hfiles-nsc_mtgs-62-90002-032.pdf); [NSR-29 packet PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_Foll-up_312294094/41-bpr-nsc-hfiles-dc_mtgs_foll_up-90043-037.pdf) | Which internal record anchors intelligence-community organization and budget management. |
| 3 | [D1 Chief-of-Mission letter](research-request-packet.html#batch-d-chief-of-mission-letter) and [C1 NSR-16](research-request-packet.html#batch-c-nsr-16-budget-and-program-review) | [Public letter text](https://archive.org/download/sim_state-magazine_1990-10_337/sim_state-magazine_1990-10_337.pdf); [NSR-16 locator](https://catalog.archives.gov/id/446394955) | Whether the two strongest non-intelligence anchors can clear control-copy and follow-on-decision gaps. |
| 4 | [E1 PDB process](research-request-packet.html#e1-bush-pdb-process-records) and [E2 Daily Diary/Backup](research-request-packet.html#e2-daily-diary-and-backup-cross-checks) | [CIA, *First Callers*](https://www.cia.gov/resources/csi/static/First-Callers-President-Brief.pdf); [Bush Daily Record](https://www.bush41library.gov/digital-research-room/daily-record?date=1989-01-23) | Whether Bush's intelligence consumption can be represented by a primary process/control record plus chronology support. |
| 5 | [F1-F4 State lot files](research-request-packet.html#batch-f-state-lot-files) | [Published FRUS Volume XXXI source list](https://history.state.gov/historicaldocuments/frus1989-92v31/sources) | Whether internal State records can replace public speeches and strengthen 1991-1992 coverage. |

Use the [submission route sheet](submission-route-sheet.html) and [request send
sheet](request-send-sheet.html) before sending. Record every send or existing
request in the [request tracking ledger](request-tracking-ledger.html).

## Master Candidate Control

| Slot | Candidate / direct source | Lane | Posture | Source note | Request | Decision | Blocking evidence and next move |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | President Bush Chief-of-Mission letter, July 12, 1990 ([public fallback](https://archive.org/download/sim_state-magazine_1990-10_337/sim_state-magazine_1990-10_337.pdf)) | Field management | Promote when final copy is found | Not ready / fallback | [D1](research-request-packet.html#batch-d-chief-of-mission-letter) | [D05](decision-resolution-sheet.html) | Find signed/circulated White House, S/S, all-post, or Central Foreign Policy File copy; then verify classification and distribution. |
| 2 | [NSR-16, Comprehensive Review of International Affairs Budget and Programs](https://catalog.archives.gov/id/446394955) | Budget/program review | Promote for review | Partial | [C1](research-request-packet.html#batch-c-nsr-16-budget-and-program-review) | [D06](decision-resolution-sheet.html) | Pull response/options and follow-on decision papers; decide whether NSR-16 or the later decision is the chapter spine. |
| 3 | Chief-of-Mission Authority / NSDD 38 staffing package ([related authority file](https://catalog.archives.gov/id/470760858)) | Overseas staffing | Hold as implementation companion | Not ready | [C1](research-request-packet.html#batch-c-nsr-16-budget-and-program-review), [D1](research-request-packet.html#batch-d-chief-of-mission-letter) | [D05](decision-resolution-sheet.html) | Fix attachment relationship and exact source; select only if it shows implementation machinery or agency conflict. |
| 4 | Bush PDB process/control records ([CIA source anchor](https://www.cia.gov/resources/csi/static/First-Callers-President-Brief.pdf)) | Intelligence consumption | Hold until primary record is found | Not ready | [E1](research-request-packet.html#e1-bush-pdb-process-records) | [D03](decision-resolution-sheet.html) | Obtain a releasable briefer note, control sheet, tasking log, distribution instruction, supplement, or presidential-feedback record. |
| 5 | Presidential Daily Diary and Daily Backup ([series finding aid](https://www.bush41library.gov/digital-research-room/finding-aid/white-house-office-appointments-and-scheduling-files)) | Intelligence chronology | Support only | Support only | [E2](research-request-packet.html#e2-daily-diary-and-backup-cross-checks) | [D04](decision-resolution-sheet.html) | Pull date-specific entries/pages and pair them with substantive memcons, telcons, NSC records, or PDB process files. |
| 6 | [NSC/DC 151, Definition of Covert Action](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_312294079/41-bpr-nsc-hfiles-dc_mtgs-151-90015-009.pdf) | Covert action / Congress | Promote for review | Partial | [A1](research-request-packet.html#a1-nscdc-151-definition-of-covert-action) | [D09](decision-resolution-sheet.html) | Seek minutes, summary, draft language, legal memoranda, classification, meeting details, and SSCI/HPSCI consultation evidence. |
| 7 | [NSD 79, Approval and Review of Covert Action](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSDs_313189290/41-bpr-nsc-hfiles-nsd-79-90005-033.pdf) | Covert action / Congress | Promote subject to terminal date | Partial | [A4](research-request-packet.html#a4-nsd-79-approval-and-review-of-covert-action) | [D01](decision-resolution-sheet.html) | Verify signed-final status, distribution, legal memo, classification, and whether January 19, 1993 is accepted as a Bush capstone. |
| 8 | [NSC0062](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC_Mtgs_312293887/41-bpr-nsc-hfiles-nsc_mtgs-62-90002-032.pdf) and [NSR-29 Intelligence Priorities](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_Foll-up_312294094/41-bpr-nsc-hfiles-dc_mtgs_foll_up-90043-037.pdf) | Intelligence budget / IC organization | Promote for review | Partial | [B1](research-request-packet.html#b1-nsc0062-intelligence-capabilities), [B2](research-request-packet.html#b2-nsr-29-intelligence-priorities-packet) | [D08](decision-resolution-sheet.html) | Recover Gates presentation and withheld reports; compare packets and choose the fuller control source. |
| 9 | [NSR 29](https://irp.fas.org/offdocs/nsr/index.html) and [NSD 67](https://irp.fas.org/offdocs/nsd/index.html) locators; [public implementation statement](https://www.govinfo.gov/content/pkg/PPP-1992-book1/pdf/PPP-1992-book1-doc-pg528-2.pdf) | Intelligence budget / IC organization | Hold for official controls | Not ready / locator | [B3](research-request-packet.html#b3-nsr-29-and-nsd-67-control-copies) | [D08](decision-resolution-sheet.html) | Pull signed/circulated directives, distribution, fact sheet, OMB clearance, and implementation guidance. |
| 10 | [NSC Meeting Covert Action, December 20, 1991](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_Foll-up_312294094/41-bpr-nsc-hfiles-dc_mtgs_foll_up-90043-025.pdf) | Covert-action chronology | Hold / MDR target | Not ready / MDR | [A2](research-request-packet.html#a2-december-20-1991-covert-action-nsc-meeting) | [D02](decision-resolution-sheet.html) | Keep as chronology unless minutes, summary, agenda, decision paper, participants, or attachments release. |
| 11 | [NSC0066, Covert Action, December 23, 1992](https://catalog.archives.gov/id/470760974) | Covert-action chronology | Hold / MDR locator | Not ready | [A3](research-request-packet.html#a3-nsc0066-covert-action) | [D02](decision-resolution-sheet.html) | Request only if the chapter needs a late-1992 endpoint; first fix file unit, control ID, release status, and contents. |
| 12 | [Reagan-Bush transition briefing book on NSC organization](https://catalog.archives.gov/id/470760855) | Transition / inherited machinery | Promote selectively as opening frame | Partial locator | [Archival pull](archival-pull-matrix.html) | [D07](decision-resolution-sheet.html) | Select one decision-bearing opening document after exact file, page, authorship, and classification are fixed. |
| 13 | [National Security Council Administrative Manual](https://catalog.archives.gov/id/470760856) | Transition / procedure | Support unless a decision-bearing page emerges | Support only | [Archival pull](archival-pull-matrix.html) | [D07](decision-resolution-sheet.html) | Use for source-note and institutional support; do not spend a document slot on procedure alone. |
| 14 | State Baker/Eagleburger/Kimmitt/Zoellick/Kanter/Ross lot files ([published source list](https://history.state.gov/historicaldocuments/frus1989-92v31/sources)) | State management | Hold until files are read | Not ready | [F1-F6](research-request-packet.html#batch-f-state-lot-files) | [D10/D12/D13](decision-resolution-sheet.html) | Pull exact folders/documents and use internal State records to replace public speeches wherever possible. |
| 15 | FY 1992/FY 1993 public budget statements ([Current Policy sweep](current-policy-sweep.html); [Dispatch sweep](dispatch-1991-1992-sweep.html)) | Foreign affairs budget | Support / fallback | Fallback only | [Batch F](research-request-packet.html#batch-f-state-lot-files) | [D10](decision-resolution-sheet.html) | Keep as editorial support unless a documented search fails to locate internal State, OMB, White House, DCI, or committee records. |
| 16 | NIS assistance coordination / FREEDOM Support Act follow-up ([public-source trail](dispatch-1991-1992-sweep.html)) | NIS assistance machinery | Selective | Not ready | [F4/F5 path](research-request-packet.html#batch-f-state-lot-files) | [D12](decision-resolution-sheet.html) | Develop only if Zoellick, Kanter, AID, S/P, or NSC files show implementation machinery rather than regional narrative. |
| 17 | Foreign Service modernization and Department reorganization ([public-source trail](dispatch-1991-1992-sweep.html)) | Foreign Service / Department management | Selective | Not ready | [State pulls](archival-pull-matrix.html) | [D10/D11](decision-resolution-sheet.html) | Seek an M, DG/HR, DS, S/S, or Secretary-level implementation record before reserving a slot. |
| 18 | Refugee admissions, COCOM/export controls, Gulf public diplomacy, and IO arrears ([candidate trail](current-policy-sweep.html)) | Case studies | Selective | Not ready | [Case pulls](archival-pull-matrix.html) | [D11](decision-resolution-sheet.html) | Include at most one or two cases and only where the record exposes machinery, budget control, staffing, authority, or implementation dispute. |

## When A Response Arrives

1. Classify it in the [response triage sheet](response-triage-sheet.html).
2. Capture exact facts in the [response intake sheet](response-intake-sheet.html).
3. Update the [request tracking ledger](request-tracking-ledger.html).
4. Update the [source note worklist](source-note-worklist.html) only with proved facts.
5. Reconcile this master row with the [candidate closeout board](candidate-closeout-board.html) and [selection worksheet](selection-worksheet.html).
6. Record any resolved choice in the [decision resolution sheet](decision-resolution-sheet.html).
7. Run the [promotion gate checklist](promotion-gate-checklist.html) before changing a candidate to selected.

## Control Rule

This page is the canonical joined status view; the linked sheets remain the
evidence and detail layers. When a response changes a candidate, update this
row in the same pass as the ledger, source-note worklist, closeout board,
selection worksheet, and decision sheet. Public URLs and NAIDs remain locator
facts unless the [source-note provenance standard](source-note-style-audit.html)
permits a documented fallback.


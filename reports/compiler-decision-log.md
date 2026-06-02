---
layout: default
title: Compiler Decision Log
---

# Compiler Decision Log

Checked: 2026-06-02

Purpose: separate compiler judgment calls from evidence gaps. A gap closes when
the record is found or ruled out; a decision closes when the compiler chooses a
volume architecture, selection rule, or fallback rule and records that choice
across the working pages.

Spreadsheet export: [compiler decision log CSV](compiler-decision-log.csv).
Compact decision timing and closeout sheet: [decision resolution
sheet](decision-resolution-sheet.html), with [CSV export](decision-resolution-sheet.csv).

## Status Key

- Pending: decision has not been recorded.
- Default ready: the project recommends a default, but the compiler still needs
  to accept or reject it.
- Evidence dependent: decide only after request results or file review.
- Decided: record the decision, date, and consequence in the linked pages.

## Decisions To Record

| ID | Decision | Status | Recommended default | Evidence already assembled | Consequence of decision | Record updates |
| --- | --- | --- | --- | --- | --- | --- |
| D01 | Can January 19, 1993 NSD 79 be selected in a 1989-1992 volume? | Default ready | Treat as a Bush administration capstone unless the compiler enforces a hard December 31, 1992 terminal date. | [NSD 79 public/control PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSDs_313189290/41-bpr-nsc-hfiles-nsd-79-90005-033.pdf), [source-note worklist](source-note-worklist.html), [selection worksheet](selection-worksheet.html). | If yes, NSD 79 can anchor covert-action procedure; if no, keep it as terminal editorial context and prioritize earlier covert-action records. | Update [selection worksheet](selection-worksheet.html), [source-note worklist](source-note-worklist.html), and [Request A4](research-request-packet.html#a4-nsd-79-approval-and-review-of-covert-action). |
| D02 | Does the volume include a separate intelligence matters chapter? | Default ready | Yes, if primary records support at least PDB process, covert-action/congressional notification, and intelligence budget/community management. | [Intelligence matters chapter](intelligence-matters-chapter.html), [compiler handoff](compiler-handoff.html), [declassified index](declassified-document-index.html). | If yes, reserve document slots for intelligence process records; if no, distribute those records into NSC/process and budget chapters. | Update [provisional outline](provisional-volume-outline.html), [selection worksheet](selection-worksheet.html), and [candidate register](candidate-register.html). |
| D03 | Can a PDB process/control record be selected without publishing PDB substance? | Evidence dependent | Select a primary process/control record if releasable; do not substitute CIA public histories as selected documents. | [Request E1](research-request-packet.html#e1-bush-pdb-process-records), [source-note worklist](source-note-worklist.html), [intelligence matters chapter](intelligence-matters-chapter.html). | Determines whether the intelligence chapter has a presidential-consumption document or only an editorial chronology. | Update [request tracking ledger](request-tracking-ledger.html), [source-note worklist](source-note-worklist.html), and [selection worksheet](selection-worksheet.html). |
| D04 | How should Presidential Daily Diary and Daily Backup material be used? | Default ready | Use for chronology, participants, call status, and backup-material existence only; pair with substantive records. | [Request E2](research-request-packet.html#e2-daily-diary-and-backup-cross-checks), [source-note audit](source-note-style-audit.html), [declassified index](declassified-document-index.html). | Prevents diary entries from being over-used as substitutes for memcons, telcons, PDB content, or minutes. | Update [source-note worklist](source-note-worklist.html) and any selected-document notes that cite Daily Diary support. |
| D05 | Can the printed State version of the July 12, 1990 Chief-of-Mission letter be used if no archival final copy is found? | Evidence dependent | Prefer signed/circulated White House, S/S, or all-post dissemination copy; use printed State text only as fallback after documented search. | [Bush Chief-of-Mission letter report](bush-chief-of-mission-letter.html), [Request D](research-request-packet.html#batch-d-chief-of-mission-letter), [source-note worklist](source-note-worklist.html). | Determines whether the strongest field-management document can be selected from public text or must wait for archival copy. | Update [selection worksheet](selection-worksheet.html), [source-note worklist](source-note-worklist.html), and [request tracking ledger](request-tracking-ledger.html). |
| D06 | Should NSR-16 itself be selected, or should a response/options/follow-on decision paper supersede it? | Evidence dependent | Start with NSR-16, but select the follow-on decision record if it gives better management choices and source-note control. | [NSR-16 review](nsr-16-budget-review.html), [Request C](research-request-packet.html#batch-c-nsr-16-budget-and-program-review), [selection worksheet](selection-worksheet.html). | Determines the spine of the Function 150/budget chapter. | Update [selection worksheet](selection-worksheet.html), [source-note worklist](source-note-worklist.html), and [candidate register](candidate-register.html). |
| D07 | Is NSC procedure an opening frame or a standalone chapter? | Default ready | Use one strong opening document plus source-note support unless a procedural file shows a concrete management decision. | [NSC administrative transition review](nsc-admin-transition-review.html), [selection worksheet](selection-worksheet.html), [declassified index](declassified-document-index.html). | Prevents manuals and procedure binders from crowding out decision-bearing records. | Update [provisional outline](provisional-volume-outline.html) and [selection worksheet](selection-worksheet.html). |
| D08 | Should the March 25, 1992 NSC0062/NSR-29 packets stand in for unresolved NSR 29 and NSD 67 control copies? | Evidence dependent | Use the March 25 packets as public-control files for review/MDR, but keep pulling official NSR 29 and NSD 67 control copies. | [Intelligence matters chapter](intelligence-matters-chapter.html), [Request B1/B2/B3](research-request-packet.html#batch-b-intelligence-capabilities-budget-and-community-management), [source-note worklist](source-note-worklist.html). | Determines which intelligence-budget source note becomes the control citation. | Update [source-note worklist](source-note-worklist.html), [selection worksheet](selection-worksheet.html), and [request tracking ledger](request-tracking-ledger.html). |
| D09 | Is NSC/DC 151 selectable if the public packet remains mostly withdrawn? | Evidence dependent | Select only if minutes, summary, draft language, or substantive memoranda release enough decision content; otherwise use as MDR/source-note support. | [NSC/DC 151 public PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_312294079/41-bpr-nsc-hfiles-dc_mtgs-151-90015-009.pdf), [Request A1](research-request-packet.html#a1-nscdc-151-definition-of-covert-action), [source-note worklist](source-note-worklist.html). | Determines whether early covert-action/congressional consultation has a selected document or only an archival target. | Update [selection worksheet](selection-worksheet.html), [request tracking ledger](request-tracking-ledger.html), and [source-note worklist](source-note-worklist.html). |
| D10 | Are public budget speeches and Dispatch/Current Policy items selectable? | Default ready | Use as fallback or editorial chronology; prefer internal OMB, State, White House, and lot-file records. | [Current Policy sweep](current-policy-sweep.html), [Dispatch sweep](dispatch-1991-1992-sweep.html), [source-note audit](source-note-style-audit.html). | Keeps the volume centered on management decisions rather than public justification speeches. | Update [selection worksheet](selection-worksheet.html) and [candidate register](candidate-register.html). |
| D11 | How many interagency case studies belong in the volume? | Default ready | One or two maximum, only where the case reveals machinery, budget control, staffing, authority, or implementation disputes. | [selection worksheet](selection-worksheet.html), [compiler gap assessment](compiler-gap-assessment.html), [cross-source candidates](cross-source-volume-ii-candidates.html). | Controls scope creep into regional policy substance. | Update [provisional outline](provisional-volume-outline.html) and [candidate register](candidate-register.html). |
| D12 | Should NIS assistance coordination become a late-volume management lane? | Evidence dependent | Develop it if Zoellick, Kanter, AID, S/P, or NSC economic files show implementation machinery rather than regional policy narrative. | [Dispatch sweep](dispatch-1991-1992-sweep.html), [selection worksheet](selection-worksheet.html), [Request F](research-request-packet.html#batch-f-state-lot-files). | Determines whether 1991-1992 coverage has a strong mature-administration management chapter. | Update [provisional outline](provisional-volume-outline.html), [selection worksheet](selection-worksheet.html), and [request tracking ledger](request-tracking-ledger.html). |
| D13 | Which State lot files get first pull priority? | Default ready | Start with Baker Lot 93D187, Eagleburger Lot 95D335, Kimmitt Lot 91D490, Zoellick Lot 94D589, Kanter Lot 93D396, and Ross Lot 93D519. | [Research request packet Batch F](research-request-packet.html#batch-f-state-lot-files), [archival pull matrix](archival-pull-matrix.html), [compiler gap assessment](compiler-gap-assessment.html). | Determines whether public speeches can be replaced by internal management records. | Update [request tracking ledger](request-tracking-ledger.html) and [archival pull matrix](archival-pull-matrix.html). |
| D14 | What rule controls conflict between public text and archival original? | Default ready | Archival control copy governs when available; public text remains locator, fallback, or editorial support. | [source-note audit](source-note-style-audit.html), [source-note worklist](source-note-worklist.html), [link health audit](link-health-audit.html). | Prevents source notes from treating URLs, magazine text, FAS indexes, statutes, or Public Papers as final archival citations. | Update [source-note worklist](source-note-worklist.html) and any selected-document source note. |

## Closeout Rule

When a decision is made, record the date, the decision, and the consequence in
the linked working pages. Do not leave a selected document in a state where the
selection worksheet, source-note worklist, request ledger, and provisional
outline imply different rules.

Use the [decision resolution sheet](decision-resolution-sheet.html) to decide
whether the item is ready now or must wait for a specific request response.

## Related Project Reports

- [Decision resolution sheet](decision-resolution-sheet.html)
- [Compiler dashboard](compiler-dashboard.html)
- [Selection worksheet](selection-worksheet.html)
- [Promotion gate checklist](promotion-gate-checklist.html)
- [Response triage sheet](response-triage-sheet.html)
- [Source note worklist](source-note-worklist.html)

---
layout: default
title: Promotion Gate Checklist
---

# Promotion Gate Checklist

Checked: 2026-06-02

Purpose: define the evidence gate for moving a candidate from promising to
selected. Use this page before changing a row in the
[selection worksheet](selection-worksheet.html) from hold, support, fallback,
or include-review posture to a selected-document recommendation.

Spreadsheet export: [promotion gate checklist CSV](promotion-gate-checklist.csv).

## Gate Sequence

| Gate | Pass condition | If missing | Update pages |
| --- | --- | --- | --- |
| 1. Response logged | The repository, agency, or public source response is entered in the [request tracking ledger](request-tracking-ledger.html), including sent date, result, files received, and withholdings/referrals; response type is classified in the [response triage sheet](response-triage-sheet.html). | Keep candidate in current status; do not promote on memory, email summary, or catalog metadata alone. | [Request tracking ledger](request-tracking-ledger.html), [response triage sheet](response-triage-sheet.html), [compiler action board](compiler-action-board.html). |
| 2. Control copy identified | Repository, collection, series, folder/file title, OA/ID or NAID, and version status are known: signed final, circulated copy, draft, attachment, public fallback, or not located. | Hold or support only. Public URLs, FAS indexes, CIA histories, statutes, and magazine text do not by themselves satisfy this gate. | [Source note worklist](source-note-worklist.html), [source-note style audit](source-note-style-audit.html). |
| 3. Document identity fixed | Date, title, document type, originator/drafter, recipient, meeting time/place if relevant, and attachments/enclosures are known or explicitly unavailable after search. | Keep as locator or MDR target until the document can be described in FRUS source-note form. | [Source note worklist](source-note-worklist.html), [declassified index](declassified-document-index.html). |
| 4. Release status clear | Release status is recorded as open, partially open, withdrawn, referred, denied, pending MDR, public fallback, or not located. Withheld tabs and referral status are named. | Do not treat a reachable PDF as complete; classify the candidate as partial, support, or MDR target. | [Request tracking ledger](request-tracking-ledger.html), [link health audit](link-health-audit.html). |
| 5. FRUS value proven | The record shows organization, management, coordination, budget, staffing, authority, oversight, implementation, or source-control machinery. | Use as chronology, source-note support, or editorial context; do not spend a document slot on policy substance alone. | [Selection worksheet](selection-worksheet.html), [provisional outline](provisional-volume-outline.html). |
| 6. Architecture decision resolved | Any affected architecture or fallback rule is recorded: terminal date, intelligence-chapter scope, public fallback use, case-study count, State lot priority, or control-copy rule. | Keep candidate in hold/include-review posture until the decision is recorded. | [Compiler decision log](compiler-decision-log.html), [selection worksheet](selection-worksheet.html). |
| 7. Source-note draft clean | The source note follows FRUS order and has no unresolved bracketed facts unless a documented search says the fact is unavailable. | Do not mark source-note-ready; leave the row partial/not ready. | [Source note worklist](source-note-worklist.html), [source-note style audit](source-note-style-audit.html). |
| 8. Same-pass status update | Selection status, source-note readiness, request status, and decision consequences all agree across the public site. | Do not publish a status change that leaves contradictory instructions on another workflow page. | [Selection worksheet](selection-worksheet.html), [request tracking ledger](request-tracking-ledger.html), [source note worklist](source-note-worklist.html), [compiler handoff](compiler-handoff.html). |

## Candidate-Specific Triggers

| Candidate | Promote only if | Keep as hold/support if |
| --- | --- | --- |
| President Bush Chief-of-Mission letter | A signed or circulated July 12, 1990 all-Chief-of-Mission copy is located, or a documented search supports use of the *State* text as fallback. | Only the printed *State* version or related 1989/Armacost authority file is available. |
| NSR-16 budget/program review | The NSR-16 control file and response/options or follow-on decision papers are reviewed; if no stronger follow-on document exists, NSR-16 can be the spine. | The response/options paper, Scowcroft recommendations, attachments, or control-copy fields remain unresolved. |
| NSC/DC 151 covert-action definition | Minutes, summary of conclusions, draft statutory/report language, or substantive memoranda release enough decision content. | Public packet remains mostly withdrawal/control material. |
| NSD 79 covert-action procedure | Terminal-date decision is accepted and signed-final, distribution, legal memo, and version-control status are verified. | Compiler enforces a hard 1992 terminal date or final/version evidence remains unresolved. |
| NSC0062 / NSR-29 Intelligence Priorities | Gates presentation, requirements report, intelligence-priorities report, IC reorganization, or budget-mechanism records release enough substance; best control packet is chosen. | The March 25 packets remain primarily public-control/MDR anchors without substantive tabs. |
| NSR 29 / NSD 67 control copies | Official Bush Library/NARA control copies and backing memoranda are located and source-note fields are verified. | Only FAS/Public Papers locators are available. |
| Bush PDB process/control record | A primary PDB Staff/CPAS, briefer, control, tasking, distribution, or releasable cover/supplement record is available. | Only public CIA histories or Daily Diary chronology are available. |
| Presidential Daily Diary / Daily Backup | Use only as support for time, place, participants, call status, and backup-material existence. | Do not promote as a selected substantive document by itself. |
| State lot-file candidates | A specific internal memorandum, decision paper, clearance record, or implementation record is selected from the lot file. | Only the lot title or public Dispatch/Current Policy speech is known. |
| Public speeches, statutes, Dispatch, Current Policy, and Public Papers | Use as selected text only after a documented search rules out an internal control record and the compiler accepts public fallback. | Internal State, NSC, White House, OMB, DCI, or congressional records remain unsearched. |

## Closeout Rule

When a candidate passes the gate, update the [selection worksheet](selection-worksheet.html),
[source note worklist](source-note-worklist.html), [request tracking ledger](request-tracking-ledger.html),
and [compiler decision log](compiler-decision-log.html) in the same pass. Then
update the [compiler handoff](compiler-handoff.html) only if the promoted
candidate changes the top working packet.

## Related Project Reports

- [Compiler handoff](compiler-handoff.html)
- [Compiler action board](compiler-action-board.html)
- [Selection worksheet](selection-worksheet.html)
- [Request tracking ledger](request-tracking-ledger.html)
- [Response triage sheet](response-triage-sheet.html)
- [Source note worklist](source-note-worklist.html)
- [Compiler decision log](compiler-decision-log.html)

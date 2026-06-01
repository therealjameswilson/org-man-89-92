---
layout: default
title: Link Health Audit
---

# Link Health Audit

Checked: 2026-06-01

Scope: external public/control-copy links used by the
[declassified and public document index](declassified-document-index.html).
This is a link-reliability check, not a source-note validation. A live link can
still be only a locator, fallback, or partial public-control file.

Spreadsheet export: [link health audit CSV](link-health-audit.csv).

## Summary

| Result | Count | Compiler meaning |
| --- | --- | --- |
| Reachable | 31 | Public/control source trail is currently usable from the site. |
| Warning | 0 | No source-trail link needs replacement at this time. |
| Broken | 0 | No public/control source-trail link failed final verification. |

Method: `curl -L` checks were run against each external source link. One
Congress PDF timed out during the first pass, then returned `200` as
`application/pdf` on retry and via a byte-range check.

## Checked Links

| Source link | Status | Content type | Compiler note |
| --- | --- | --- | --- |
| [Reagan-Bush Transition Briefing Book, NAID 470760855](https://catalog.archives.gov/id/470760855) | 200 | text/html | NARA Catalog locator; still needs archival control/source-note verification. |
| [National Security Council Administrative Manual, NAID 470760856](https://catalog.archives.gov/id/470760856) | 200 | text/html | NARA Catalog locator; support source unless a decision-bearing page is selected. |
| [Authorities and Responsibilities of the United States Chief of Mission, NAID 470760858](https://catalog.archives.gov/id/470760858) | 200 | text/html | NARA Catalog locator; related COM source file, not the final July 12, 1990 letter. |
| [Bush Library Daily Record, January 23, 1989](https://www.bush41library.gov/digital-research-room/daily-record?date=1989-01-23) | 200 | text/html | Chronology support for early intelligence/NSC workflow. |
| [Bush Library Memcons/Telcons table](https://www.bush41library.gov/digital-research-room/about-textual-collections/memcons-and-telcons) | 200 | text/html | Locator for released calls; pair with diary entries where needed. |
| [Bush Library Daily Record, February 15, 1989](https://www.bush41library.gov/digital-research-room/daily-record?date=1989-02-15) | 200 | text/html | Chronology/photo-caption support. |
| [NSR-16 NARA Catalog record, NAID 446394955](https://catalog.archives.gov/id/446394955) | 200 | text/html | NARA Catalog locator; source note still needs H-Files control fields. |
| [NSC/DC 151 Bush Library file unit](https://www.bush41library.gov/digital-research-room/finding-aid/records-national-security-council-george-h-w-bush-administration?naid=352356448) | 200 | text/html | Official public file-unit page for the July 5, 1990 covert-action definition packet. |
| [NSC/DC 151 direct PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_312294079/41-bpr-nsc-hfiles-dc_mtgs-151-90015-009.pdf) | 200 | application/pdf | Public-control PDF; heavily withdrawn/image-only, but reachable. |
| [President Bush Chief-of-Mission letter in State, October 1990](https://archive.org/download/sim_state-magazine_1990-10_337/sim_state-magazine_1990-10_337.pdf) | 200 | application/pdf | Readable fallback text; still prefer signed/circulated archival copy. |
| [Bush Library Daily Record, January 16, 1991](https://www.bush41library.gov/digital-research-room/daily-record?date=1991-01-16) | 200 | text/html | Desert Storm chronology support. |
| [Bush Library Daily Record, January 17, 1991](https://www.bush41library.gov/digital-research-room/daily-record?date=1991-01-17) | 200 | text/html | Desert Storm chronology support. |
| [Bush Library Daily Record, February 27, 1991](https://www.bush41library.gov/digital-research-room/daily-record?date=1991-02-27) | 200 | text/html | Desert Storm capstone chronology support. |
| [Intelligence Authorization Act, Fiscal Year 1991](https://www.congress.gov/102/statute/STATUTE-105/STATUTE-105-Pg429.pdf) | 200 | application/pdf | Statutory support for covert-action notification framework. |
| [FAS NSR index, including NSR 29 locator](https://irp.fas.org/offdocs/nsr/index.html) | 200 | text/html | Locator only; official Bush Library/NARA control copy still needed. |
| [Intelligence Authorization Act, Fiscal Year 1992](https://www.congress.gov/102/statute/STATUTE-105/STATUTE-105-Pg1260.pdf) | 200 | application/pdf | Statutory support for intelligence-budget lane. |
| [NSC Meeting Covert Action 12/20/91 Bush Library file unit](https://www.bush41library.gov/digital-research-room/finding-aid/records-national-security-council-george-h-w-bush-administration?naid=470761489) | 200 | text/html | Official public file-unit page; current public packet is mostly control/withdrawal material. |
| [NSC Meeting Covert Action 12/20/91 direct PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_Foll-up_312294094/41-bpr-nsc-hfiles-dc_mtgs_foll_up-90043-025.pdf) | 200 | application/pdf | Public-control PDF; MDR target, not enough for selection by itself. |
| [NSC0062 Bush Library file unit](https://www.bush41library.gov/digital-research-room/finding-aid/records-national-security-council-george-h-w-bush-administration?naid=470760970) | 200 | text/html | Official public file-unit page for March 25, 1992 intelligence capabilities meeting. |
| [NSC0062 direct PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC_Mtgs_312293887/41-bpr-nsc-hfiles-nsc_mtgs-62-90002-032.pdf) | 200 | application/pdf | Public-control PDF; compare with NSR-29 packet. |
| [NSC Meeting NSR-29 Intelligence Priorities file unit](https://www.bush41library.gov/digital-research-room/finding-aid/records-national-security-council-george-h-w-bush-administration?naid=470761501) | 200 | text/html | Official public file-unit page for parallel March 25, 1992 packet. |
| [NSC Meeting NSR-29 Intelligence Priorities direct PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSC-DC_Mtgs_Foll-up_312294094/41-bpr-nsc-hfiles-dc_mtgs_foll_up-90043-037.pdf) | 200 | application/pdf | Public-control PDF; compare before selecting the control source. |
| [FAS NSD index, including NSD 67 locator](https://irp.fas.org/offdocs/nsd/index.html) | 200 | text/html | Locator only; official NSD 67 control copy still needed. |
| [Fitzwater statement on intelligence-community organizational changes](https://www.govinfo.gov/content/pkg/PPP-1992-book1/pdf/PPP-1992-book1-doc-pg528-2.pdf) | 200 | application/pdf | Public fallback/source anchor for NSD 67 implementation. |
| [Intelligence Authorization Act, Fiscal Year 1993](https://www.congress.gov/102/statute/STATUTE-106/STATUTE-106-Pg3180.pdf) | 200 | application/pdf | Verified on retry after first-pass timeout; statutory support for DCI budget duties and aggregate-budget disclosure. |
| [NSC0066 NARA Catalog record](https://catalog.archives.gov/id/470760974) | 200 | text/html | Locator only; file unit and attachments still need archival verification. |
| [Bush Library processed NSC meetings page](https://www.bush41library.gov/digital-research-room/about-textual-collections/processed-nsc-meetings) | 200 | text/html | Cross-check page for processed meeting files. |
| [NSD 79 direct PDF](https://s3.amazonaws.com/NARAprodstorage/lz/presidential-libraries/bush/gb-nsc/H-Files/NSDs_313189290/41-bpr-nsc-hfiles-nsd-79-90005-033.pdf) | 200 | application/pdf | Public-control PDF for capstone covert-action procedures. |
| [Current Policy 1070-1169](https://drive.google.com/file/d/1QfGE7pVWpJ4zaC9U_rhXg7C24CvsgEbd/view?usp=drivesdk) | 200 | text/html | Google Drive view page for early public State source compilation. |
| [Current Policy 1170-1249](https://drive.google.com/file/d/1F0fliW-jAjpXW1p0QBsdqNWcTG_fJSJz/view?usp=drivesdk) | 200 | text/html | Google Drive view page for public State source compilation. |
| [Current Policy 1250-1309](https://drive.google.com/file/d/1c3JDvLMrX1pi8OJQxLpHQmxi3pUweLQ-/view?usp=drivesdk) | 200 | text/html | Google Drive view page for public State source compilation. |

## Maintenance Rule

Re-run this audit after adding or replacing any public/control-copy source
link. If a link fails, do not delete the candidate automatically. First check
whether the document has moved, whether a repository landing page is more
stable than a direct PDF, and whether the request packet still gives enough
archival control data to recover the record.

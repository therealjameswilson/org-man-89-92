---
layout: default
title: Public Site Gap Check
---

# Public Site Gap Check

Checked against the live GitHub Pages site on May 23, 2026.
Updated site-link QA: 2026-06-02.

## Closed

- Report pages were live but served as raw Markdown. Added page front matter so
  reports render through the site layout.
- Persons page still returns 4,597 entries after cleanup.
- No unresolved `XX`, `YY`, `TBD`, `TK`, `unknown`, or question-mark editorial
  markers remain in `persons.md`.
- Converted source date shorthand in the Persons list to prose language.
- Normalized recurring title/style terms in the Persons list.
- Added a dedicated [reports index](index.html).
- Converted public source-reference lists from bare URLs to embedded links
  across the report pages, then verified the Markdown corpus has no leftover
  raw URLs outside normal link syntax.

## June 2 Site-Link QA

Scope: all Markdown and HTML files in the repository, including report pages,
the Persons list, the default layout, homepage links, CSV links, and external
public-source links.

| Check | Result | Compiler meaning |
| --- | --- | --- |
| Markdown/HTML files scanned | 38 | Site-link check covered the published page corpus and layout. |
| Link instances extracted | 1478 | Includes repeated navigation, source, report, CSV, and external links. |
| Internal link instances checked | 1092 | Relative `.html`, `.md`, `.csv`, and report-index links resolve to repository files. |
| Missing internal targets | 0 | No broken internal report, CSV, Persons, or homepage target found. |
| Unique external URLs checked | 69 | All public-source, repository, volume, Google Drive, NARA, CIA, Congress, and support-site URLs were checked with `curl -L`. |
| External URLs returning `200` | 69 | No external source-trail link failed reachability. |
| Visible bare URLs in Markdown reports | 0 | Source references are embedded links rather than exposed raw URLs. |

Content-type warning: the historical State Department PDF URL for the
1989-1990 *Digest of United States Practice in International Law* returns
`200 text/html` rather than a PDF. That is already treated in the
[cross-source candidates report](cross-source-volume-ii-candidates.html) as an
unusable historical endpoint, not as a selected source. The
[data.gov catalog record](https://catalog.data.gov/dataset/digest-of-united-states-practice-in-international-law-1989-1990)
still identifies the State distribution, but the compiler should keep using
the Digest trail only as context for the Chief-of-Mission letter search. The
source target remains the signed or circulated July 12, 1990 letter, not the
Digest URL.

## Maintenance Rule

Re-run the full site-link check after adding any report, CSV export, public
source link, Google Drive file, or layout navigation link. If a link returns
`200` with an unexpected content type, record the warning rather than treating
reachability as source-note validation.

## Accepted Constraints

- The Persons list is comprehensive and likely overinclusive until the final
  document set is locked. Accurate pruning requires the final document set.
- The site is public because GitHub Pages was not available for the private
  repository under the current plan.

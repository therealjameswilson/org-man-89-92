---
layout: default
title: Public Site Gap Check
---

# Public Site Gap Check

Checked against the live GitHub Pages site on May 23, 2026.

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

## Accepted Constraints

- The Persons list is comprehensive and likely overinclusive until the final
  document set is locked. Accurate pruning requires the final document set.
- The site is public because GitHub Pages was not available for the private
  repository under the current plan.

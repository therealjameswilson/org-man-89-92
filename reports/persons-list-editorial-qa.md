# Persons List Editorial QA

Generated file: [../persons.md](../persons.md)

Source file: attached `Bush Comprehensive Names List.docx`

Reference format: Office of the Historian, published FRUS persons page for
Volume XXXI:

<https://history.state.gov/historicaldocuments/frus1989-92v31/persons>

## Result

- Generated 4,597 person entries.
- Matched the published FRUS page shape: `# Persons`, followed by a single
  alphabetized bullet list.
- Removed DOCX extraction artifacts: form-feed page breaks, blank spacer lines,
  and doubled internal whitespace.
- Sorted entries by normalized surname field, then by the remainder of the
  entry.

## Gap Fixes Applied

- Removed all `XX`/`YY` placeholder date fragments.
- Used published Volume XXXI wording where it directly resolved entries for
  Brooks, Rice, Timbie, and Wattawa.
- Used the public VA profile of Heather Wilson to resolve her National Security
  Council service as 1989-1991:
  <https://news.va.gov/138730/honoring-veterans-air-force-heather-wilson/>
- Fixed obvious transcription/place-name issues: `Tallinn`, `Riyadh`,
  `Liberia`, `Program Analyst`, and `Charge d'Affaires`.

## Remaining Compiler Judgment

- The list remains intentionally comprehensive. It should be pruned only after
  the final document set is locked.
- Source shorthand such as `[1989, 1990]` and `(1989, 1990)` is preserved. A
  final publication pass may convert these to prose dates for selected entries.
- Accent/style normalization is not global. For example, many `Attache`
  instances remain as supplied by the source list.

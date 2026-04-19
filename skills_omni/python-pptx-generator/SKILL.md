---
name: "python-pptx-generator"
description: "Python PPTX Generator workflow skill. Use this skill when the user needs Generate complete Python scripts that build polished PowerPoint decks with python-pptx and real slide content and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "python"
  - "powerpoint"
  - "python-pptx"
  - "presentations"
  - "slide-decks"
  - "python-pptx-generator"
  - "generate"
  - "complete"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "cursor"
  - "codex-cli"
  - "claude-code"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "python-pptx-generator"
family_name: "Python PPTX Generator"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/python-pptx-generator"
upstream_skill: "skills/python-pptx-generator"
upstream_author: "spideyashith"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "python-pptx-generator"
---

# Python PPTX Generator

## Overview

This skill generates complete Python scripts that build PowerPoint decks with `python-pptx`, including real slide content rather than placeholder-only scaffolds.

It preserves the upstream skill identity and provenance while upgrading the workflow into a template-first, execution-focused process that is safer and more reliable in real projects.

Use this skill to turn a deck brief into a working `.pptx` generator script that:

- opens a branded template when one exists
- selects slide layouts deliberately
- inserts content through placeholders when possible
- builds text with explicit paragraphs and runs
- adds charts, tables, and images through supported `python-pptx` APIs
- saves output deterministically and performs a reopen smoke test

This skill does **not** promise full PowerPoint authoring parity. Do not use it for exact recreation of arbitrary hand-designed slides, complex animations, SmartArt, or effects outside `python-pptx` support.

## When to Use

Use this skill when:

- the user wants a ready-to-run Python script that creates a `.pptx` file
- the user needs slide copy drafted and encoded directly into `python-pptx`
- the task requires a real presentation structure, not just an outline
- the output should follow a known template, brand deck, or standard slide layout
- the operator needs to generate or debug placeholder-aware PowerPoint automation
- charts, tables, images, and speaker-ready slide text must be produced from structured inputs

Do **not** use this skill when:

- the user only wants presentation ideas, headlines, or a non-code outline
- the request depends on unsupported PowerPoint features such as SmartArt recreation, animation choreography, or pixel-perfect manual design replication
- the user needs live Office automation through PowerPoint itself rather than file-based generation with `python-pptx`

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Template deck is available | `python scripts/validate-runtime.py path/to/template.pptx` | Inventories slide layouts and placeholder metadata before code generation so the script targets real layout names and placeholder idx values |
| Template behavior or API details are unclear | `references/runtime-practices.md` | Summarizes placeholder, text, chart, table, units, and metadata behaviors that commonly cause generation errors |
| You need a worked pattern before writing custom code | `examples/implementation-example.md` | Provides a concrete deck brief, slide plan, complete script, and expected output structure |
| User brief is incomplete | Workflow Step 1 | Missing layout names, placeholder roles, chart data, or output path will usually degrade deck quality more than model quality does |
| Blank-deck fallback is required | Workflow Step 4B | Ensures the script uses explicit measurements and supported APIs without pretending to match a branded template |
| Final validation before handoff | Workflow Step 7 | Save, reopen, and report what was generated, what was assumed, and what the reviewer should verify in PowerPoint |

## Workflow

### 1) Collect a deck brief before writing code

Do not start by writing `python-pptx` calls blindly. First collect the minimum runtime brief:

- presentation goal
- audience
- desired slide count or slide list
- output path
- whether a template `.pptx` exists
- if a template exists: template path, target layout names, and placeholder roles
- title, subtitle, section, and body content for each slide
- image paths and where each image should appear
- chart requirements: chart type, categories, series labels, values, number formats, axis titles
- table requirements: rows, columns, headers, body values, merged-cell expectations
- brand constraints: fonts, colors, density limits, and whether the template already enforces them
- optional metadata: title, subject, author, keywords

If the user provides only a topic, ask for missing content or explicitly state that the script will include drafted slide copy and any assumptions.

### 2) Inspect the template before generating code

If a template deck exists, inspect it first:

```bash
python scripts/validate-runtime.py path/to/template.pptx
```

Record at least:

- slide layout names
- which layouts will be used for which slides
- placeholder idx values
- placeholder names and types
- notable geometry for picture or content placeholders

This step prevents a common failure mode: syntactically valid code that targets the wrong layout or placeholder.

### 3) Convert the brief into a slide-by-slide plan

Before coding, map each slide to:

- layout name
- title text
- body structure
- bullet hierarchy
- emphasized phrases needing separate runs
- data visual or table requirements
- image usage
- notes about content density

Prefer concise, credible slides over stuffing text into placeholders and shrinking fonts until the slide technically fits.

### 4) Generate the script using the correct branch

#### 4A) Template-first branch

When a branded or existing deck matters, generate code that:

- opens `Presentation(template_path)`
- resolves the intended slide layout by inspected name, not by guessed numeric position alone
- uses title and content placeholders where available
- uses placeholder idx values gathered during inspection
- reacquires shapes returned by `insert_picture()` or `insert_table()` rather than continuing to use the original placeholder object
- keeps coordinates minimal when the template already provides placeholders

#### 4B) Blank-deck fallback branch

When no template exists, generate code that:

- creates `Presentation()`
- uses supported built-in layouts intentionally
- uses `Inches()`, `Cm()`, and `Pt()` instead of raw EMU integers
- positions charts, tables, and images with readable measurements
- keeps sizing and spacing deterministic and easy to adjust

### 5) Build text explicitly

For non-trivial text, use the text hierarchy deliberately:

- clear the text frame when replacing inherited content
- create paragraphs for bullet levels or separate logical statements
- create runs for mixed emphasis within a paragraph
- set font size with `Pt(...)`
- only set alignment, margins, and spacing where needed

Prefer explicit paragraph/run construction over assigning a large string to `.text` when formatting matters.

### 6) Use supported APIs for data visuals and tables

For charts:

- require a concrete chart type
- require categories and series values
- include number formats when percentages, currency, or scaled values matter
- label titles and axes only when the brief calls for them

For tables:

- require dimensions and concrete values
- prefer table placeholders in templates when available
- otherwise insert a table with explicit dimensions and readable units
- treat merged cells and long text as layout risks that may need simplification

For images:

- use real file paths
- keep insertion logic explicit
- preserve aspect ratio expectations when the brief or template requires them

### 7) Save and perform a smoke test

Every generated script should:

- save to the requested output path
- reopen the generated file with `Presentation(output_path)` as a basic validity check
- print or log a short success message naming the output file

At handoff, report:

- which template or layout assumptions were used
- which placeholders were targeted
- any drafted content the model invented from incomplete inputs
- any features intentionally left out because `python-pptx` does not support them well

## Troubleshooting

### Problem: The script runs, but content lands in the wrong place

Likely cause:

- wrong slide layout selected
- placeholder idx guessed rather than inspected
- placeholder sequence position confused with placeholder idx

Fix:

- rerun `scripts/validate-runtime.py`
- target layouts by inspected name
- target placeholders by actual `idx` values, not list order

### Problem: `insert_picture()` or `insert_table()` breaks later code using the same placeholder variable

Likely cause:

- placeholder insertion can replace the underlying XML element
- the original placeholder reference becomes invalid after insertion

Fix:

- capture the returned object from the insertion call
- do not continue using the pre-insert placeholder reference

### Problem: Bullet formatting or mixed emphasis disappears

Likely cause:

- assigning aggregate `.text` overwrote paragraph/run structure

Fix:

- call `text_frame.clear()`
- rebuild paragraphs and runs explicitly
- set paragraph level and run font properties deliberately

### Problem: A chart or table renders poorly or misleadingly

Likely cause:

- missing categories, malformed series data, missing number formats, or over-dense table inputs

Fix:

- collect structured input before generation
- verify chart type matches the story being told
- simplify tables rather than compressing unreadable content

### Problem: Text is clipped or the slide feels crowded

Likely cause:

- too much content for the chosen layout
- brute-force font shrinking used as a fallback

Fix:

- reduce content density
- split content into additional slides
- use a more appropriate layout or placeholder
- avoid promising a single-slide fit for content that should span multiple slides

### Problem: The generated file saves, but PowerPoint output quality is disappointing

Likely cause:

- the request needed template-aware design, richer brand rules, or manual finishing beyond library support

Fix:

- move to a template-first workflow
- inspect placeholders before generation
- be explicit about scope limits for advanced visual effects

## Additional Resources

- `references/runtime-practices.md` — compact execution reference for placeholders, text, charts, tables, units, and metadata
- `examples/implementation-example.md` — worked deck brief, slide plan, full script, and expected result shape
- `scripts/validate-runtime.py` — template inspection utility for layouts and placeholders

Primary documentation used for this workflow:

- `python-pptx` quickstart: https://python-pptx.readthedocs.io/en/latest/user/quickstart.html
- placeholders: https://python-pptx.readthedocs.io/en/latest/user/placeholders-using.html
- text: https://python-pptx.readthedocs.io/en/latest/user/text.html
- charts: https://python-pptx.readthedocs.io/en/latest/user/charts.html
- tables: https://python-pptx.readthedocs.io/en/latest/user/table.html
- presentation API: https://python-pptx.readthedocs.io/en/latest/api/presentation.html
- units/utilities: https://python-pptx.readthedocs.io/en/latest/api/util.html
- core properties: https://python-pptx.readthedocs.io/en/latest/dev/analysis/pkg-coreprops.html

## Related Skills

Use a different or adjacent skill when the task shifts to:

- data cleaning or analysis before charts/tables are generated
- image creation or editing before deck assembly
- presentation review, rewrite, or speaker-note refinement after the `.pptx` script is working
- manual visual design polish that depends on PowerPoint features outside `python-pptx`

## Provenance Note

This enhanced skill preserves the upstream community skill identity and intent while translating it into a more operational Omni-ready workflow. The goal is not to replace the upstream idea, but to make execution more reliable for real template-driven PowerPoint automation.

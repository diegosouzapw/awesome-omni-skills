---
name: latex-paper-conversion
description: "LaTeX Paper Conversion workflow skill. Use this skill when the user needs This skill should be used when the user asks to convert an academic paper in LaTeX from one format (e.g., Springer, IPOL) to another format (e.g., MDPI, IEEE, Nature). It automates extraction, injection, fixing formatting, and compiling and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["latex-paper-conversion", "should", "used", "the", "user", "asks", "convert", "academic"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# LaTeX Paper Conversion

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/latex-paper-conversion` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LaTeX Paper Conversion

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user requests to port an existing LaTeX paper to a new journal's format.
- Use when the user provides an existing .tex file and a new template directory.
- Use when the user mentions converting from format A (e.g., IPOL/Neural Processing) to format B (e.g., MDPI).
- Use when the request clearly matches the imported source intent: This skill should be used when the user asks to convert an academic paper in LaTeX from one format (e.g., Springer, IPOL) to another format (e.g., MDPI, IEEE, Nature). It automates extraction, injection, fixing....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

This skill automates the tedious and recurring process of converting an academic paper written in LaTeX from one publisher's template to another. Different journals (e.g., Springer, MDPI, IEEE) have vastly different structural requirements, document classes, margin settings, and bibliography styles. This skill streamlines these conversions by executing a structured multi-stage workflow, extracting content, mapping it to a new template, and resolving common compilation errors.

#### Imported: How It Works

### Step 1: Pre-requisites & Assessment
Identify the **Source LaTeX file** and asking the user for the **Target Template Directory**. Understand the core layout mapping (single-column vs. double-column, bibliography style).

### Step 2: Extraction & Injection Script Generation
Create a Python script (e.g., `convert_format.py`) to parse the source LaTeX file. Use Regular Expressions to extract core text blocks. Merge the new template's `preamble`, the extracted `body`, and the `backmatter`. Write this to a new file in an output directory.

### Step 3: Systematic Fixing
Perform generic fixes on the extracted body text before writing the final file, or in subsequent calls:
- Convert math environment cases (e.g., `\begin{theorem}` to `\begin{Theorem}`).
- Adjust aggressive float placements (e.g., `[!t]` or `[h!]`) to template-supported options. Avoid forcing `[H]` unless the `float` package is explicitly loaded.
- Ensure `\includegraphics` paths are relative to the new `.tex` file location.
- Convert `\begin{tabular}` to `\begin{tabularx}{\textwidth}` or use `\resizebox` if moving to a double-column layout.

### Step 4: Compilation & Debugging
Run a build cycle (`pdflatex` -> `bibtex` -> `pdflatex`). Check the `.log` file using `grep` or `rg` to systematically fix any packages conflicts, undefined commands, or compilation halts.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @latex-paper-conversion to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @latex-paper-conversion against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @latex-paper-conversion for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @latex-paper-conversion using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Converting IPOL to MDPI
\```
USER: "I need to convert my paper 'SAHQR_Paper.tex' to the MDPI format located in the 'MDPI_template_ACS' folder."
AGENT: *Triggers latex-paper-conversion skill*
1. Analyzes source `.tex` and target `template.tex`.
2. Creates Python script to extract Introduction through Conclusion.
3. Injects content into MDPI template.
4. Updates image paths and table float parameters `[h!]` to `[H]`.
5. Compiles via pdflatex and bibtex to confirm zero errors.
\```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Always write a Python extraction script; DO NOT manually copy-paste thousands of lines of LaTeX.
- ✅ Always run pdflatex and verify the .log to ensure the final output compiles.
- ✅ Explicitly ask the user for the structural mapping if the source and target differ drastically (e.g., merging abstract and keywords).
- ❌ Don't assume all math packages automatically exist in the new template (e.g., add \usepackage{amsmath} if missing).
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Always write a Python extraction script; DO NOT manually copy-paste thousands of lines of LaTeX.
- ✅ Always run `pdflatex` and verify the `.log` to ensure the final output compiles.
- ✅ Explicitly ask the user for the structural mapping if the source and target differ drastically (e.g., merging abstract and keywords).
- ❌ Don't assume all math packages automatically exist in the new template (e.g., add `\usepackage{amsmath}` if missing).

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/latex-paper-conversion`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ilya-sutskever` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Additional Resources

- [Overleaf LaTeX Documentation](https://www.overleaf.com/learn)

#### Imported: Common Pitfalls

- **Problem:** Overfull hboxes in tables when moving from single to double column.
  **Solution:** Detect `\begin{tabular}` and automatically wrap in `\resizebox{\columnwidth}{!}{...}` or suggest a format change.
- **Problem:** Undefined control sequence errors during compilation.
  **Solution:** Search the `Paper.log` and include the missing `\usepackage{}` in the converted template.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

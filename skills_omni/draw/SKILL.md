---
name: "draw"
description: "LibreOffice Draw workflow skill. Use this skill when the user needs Vector graphics and diagram creation, format conversion (ODG/SVG/PDF) with LibreOffice Draw and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "draw"
  - "vector"
  - "graphics"
  - "and"
  - "diagram"
  - "creation"
  - "format"
  - "conversion"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "draw"
family_name: "LibreOffice Draw"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/draw"
upstream_skill: "skills/draw"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "draw"
---

# LibreOffice Draw

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/libreoffice/draw` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LibreOffice Draw

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Python Libraries, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating vector graphics and diagrams in ODG format
- Converting between ODG, SVG, PDF, PNG formats
- Automating diagram and flowchart generation
- Creating technical drawings and schematics
- Batch processing graphics operations
- Use when the request clearly matches the imported source intent: Vector graphics and diagram creation, format conversion (ODG/SVG/PDF) with LibreOffice Draw.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. ### Creating a New Drawing #### Method 1: Command-Line bash soffice --draw template.odg #### Method 2: Python with UNO python import uno def createdrawing(): localctx = uno.getComponentContext() resolver = localctx.ServiceManager.createInstanceWithContext( "com.sun.star.bridge.UnoUrlResolver", localctx ) ctx = resolver.resolve( "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext" ) smgr = ctx.ServiceManager doc = smgr.createInstanceWithContext("com.sun.star.drawing.DrawingDocument", ctx) page = doc.getDrawPages().getByIndex(0) doc.storeToURL("file:///path/to/drawing.odg", ()) doc.close(True) ### Converting Drawings bash # ODG to SVG soffice --headless --convert-to svg drawing.odg # ODG to PDF soffice --headless --convert-to pdf drawing.odg # ODG to PNG soffice --headless --convert-to png:PNG_drawing drawing.odg # SVG to ODG soffice --headless --convert-to odg drawing.svg # Batch convert for file in *.odg; do soffice --headless --convert-to pdf "$file" done
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Workflows

### Creating a New Drawing

#### Method 1: Command-Line
```bash
soffice --draw template.odg
```

#### Method 2: Python with UNO
```python
import uno

def create_drawing():
    local_ctx = uno.getComponentContext()
    resolver = local_ctx.ServiceManager.createInstanceWithContext(
        "com.sun.star.bridge.UnoUrlResolver", local_ctx
    )
    ctx = resolver.resolve(
        "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext"
    )
    smgr = ctx.ServiceManager
    doc = smgr.createInstanceWithContext("com.sun.star.drawing.DrawingDocument", ctx)
    page = doc.getDrawPages().getByIndex(0)
    doc.storeToURL("file:///path/to/drawing.odg", ())
    doc.close(True)
```

### Converting Drawings

```bash
# ODG to SVG
soffice --headless --convert-to svg drawing.odg

# ODG to PDF
soffice --headless --convert-to pdf drawing.odg

# ODG to PNG
soffice --headless --convert-to png:PNG_drawing drawing.odg

# SVG to ODG
soffice --headless --convert-to odg drawing.svg

# Batch convert
for file in *.odg; do
    soffice --headless --convert-to pdf "$file"
done
```

#### Imported: Overview

LibreOffice Draw skill for creating, editing, converting, and automating vector graphics and diagram workflows using the native ODG (OpenDocument Drawing) format.

#### Imported: Core Capabilities

### 1. Graphics Creation
- Create new ODG drawings from scratch
- Generate diagrams from templates
- Create flowcharts and org charts
- Design technical drawings

### 2. Format Conversion
- ODG to other formats: SVG, PDF, PNG, JPG
- Other formats to ODG: SVG, PDF
- Batch conversion of multiple files

### 3. Diagram Automation
- Template-based diagram generation
- Automated flowchart creation
- Dynamic shape generation
- Batch diagram production

### 4. Graphics Manipulation
- Shape creation and manipulation
- Path and bezier curve editing
- Layer management
- Text and label insertion

### 5. Integration
- Command-line automation via soffice
- Python scripting with UNO
- Integration with workflow tools

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @draw to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @draw against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @draw for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @draw using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Command-Line Reference

```bash
soffice --headless
soffice --headless --convert-to <format> <file>
soffice --draw  # Draw
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use layers for organization
- Create templates for recurring diagrams
- Use vector formats for scalability
- Name objects for easy reference
- Store ODG source files in version control
- Test conversions thoroughly
- Export to SVG for web use

### Imported Operating Notes

#### Imported: Best Practices

1. Use layers for organization
2. Create templates for recurring diagrams
3. Use vector formats for scalability
4. Name objects for easy reference
5. Store ODG source files in version control
6. Test conversions thoroughly
7. Export to SVG for web use

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/libreoffice/draw`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Cannot open socket
```bash
killall soffice.bin
soffice --headless --accept="socket,host=localhost,port=8100;urp;"
```

### Quality Issues in PNG Export
```bash
soffice --headless --convert-to png:PNG_drawing_Export \
  --filterData='{"Width":2048,"Height":2048}' drawing.odg
```

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Format Conversion Reference

### Supported Input Formats
- ODG (native), SVG, PDF

### Supported Output Formats
- ODG, SVG, PDF, PNG, JPG, GIF, BMP, WMF, EMF

#### Imported: Resources

- [LibreOffice Draw Guide](https://documentation.libreoffice.org/)
- [UNO API Reference](https://api.libreoffice.org/)
- [SVG Specification](https://www.w3.org/TR/SVG/)

#### Imported: Python Libraries

```bash
pip install ezodf     # ODF handling
pip install odfpy     # ODF manipulation
pip install svgwrite  # SVG generation
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

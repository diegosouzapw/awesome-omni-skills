---
name: impress
description: "LibreOffice Impress workflow skill. Use this skill when the user needs Presentation creation, format conversion (ODP/PPTX/PDF), slide automation with LibreOffice Impress and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["impress", "presentation", "creation", "format", "conversion", "odp", "pptx", "pdf"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# LibreOffice Impress

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/libreoffice/impress` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# LibreOffice Impress

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Python Libraries, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating new presentations in ODP format
- Converting between ODP, PPTX, PDF formats
- Automating slide generation from templates
- Batch processing presentation operations
- Creating presentation templates
- Use when the request clearly matches the imported source intent: Presentation creation, format conversion (ODP/PPTX/PDF), slide automation with LibreOffice Impress.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. ### Creating a New Presentation #### Method 1: Command-Line bash soffice --impress template.odp #### Method 2: Python with UNO python import uno def createpresentation(): localctx = uno.getComponentContext() resolver = localctx.ServiceManager.createInstanceWithContext( "com.sun.star.bridge.UnoUrlResolver", localctx ) ctx = resolver.resolve( "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext" ) smgr = ctx.ServiceManager doc = smgr.createInstanceWithContext("com.sun.star.presentation.PresentationDocument", ctx) slides = doc.getDrawPages() slide = slides.getByIndex(0) doc.storeToURL("file:///path/to/presentation.odp", ()) doc.close(True) ### Converting Presentations bash # ODP to PPTX soffice --headless --convert-to pptx presentation.odp # ODP to PDF soffice --headless --convert-to pdf presentation.odp # PPTX to ODP soffice --headless --convert-to odp presentation.pptx # Batch convert for file in *.odp; do soffice --headless --convert-to pdf "$file" done ### Template-Based Generation python import subprocess import tempfile from pathlib import Path def generatefromtemplate(templatepath, content, outputpath): with tempfile.TemporaryDirectory() as tmpdir: subprocess.run(['unzip', '-q', templatepath, '-d', tmpdir]) contentfile = Path(tmpdir) / 'content.xml' contentxml = contentfile.readtext() for key, value in content.items(): contentxml = contentxml.replace(f'${{{key}}}', str(value)) contentfile.writetext(contentxml) subprocess.run(['zip', '-rq', outputpath, '.'], cwd=tmpdir) return outputpath
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Workflows

### Creating a New Presentation

#### Method 1: Command-Line
```bash
soffice --impress template.odp
```

#### Method 2: Python with UNO
```python
import uno

def create_presentation():
    local_ctx = uno.getComponentContext()
    resolver = local_ctx.ServiceManager.createInstanceWithContext(
        "com.sun.star.bridge.UnoUrlResolver", local_ctx
    )
    ctx = resolver.resolve(
        "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext"
    )
    smgr = ctx.ServiceManager
    doc = smgr.createInstanceWithContext("com.sun.star.presentation.PresentationDocument", ctx)
    slides = doc.getDrawPages()
    slide = slides.getByIndex(0)
    doc.storeToURL("file:///path/to/presentation.odp", ())
    doc.close(True)
```

### Converting Presentations

```bash
# ODP to PPTX
soffice --headless --convert-to pptx presentation.odp

# ODP to PDF
soffice --headless --convert-to pdf presentation.odp

# PPTX to ODP
soffice --headless --convert-to odp presentation.pptx

# Batch convert
for file in *.odp; do
    soffice --headless --convert-to pdf "$file"
done
```

### Template-Based Generation
```python
import subprocess
import tempfile
from pathlib import Path

def generate_from_template(template_path, content, output_path):
    with tempfile.TemporaryDirectory() as tmpdir:
        subprocess.run(['unzip', '-q', template_path, '-d', tmpdir])
        content_file = Path(tmpdir) / 'content.xml'
        content_xml = content_file.read_text()
        for key, value in content.items():
            content_xml = content_xml.replace(f'${{{key}}}', str(value))
        content_file.write_text(content_xml)
        subprocess.run(['zip', '-rq', output_path, '.'], cwd=tmpdir)
    return output_path
```

#### Imported: Overview

LibreOffice Impress skill for creating, editing, converting, and automating presentation workflows using the native ODP (OpenDocument Presentation) format.

#### Imported: Core Capabilities

### 1. Presentation Creation
- Create new ODP presentations from scratch
- Generate presentations from templates
- Create slide masters and layouts
- Build interactive presentations

### 2. Format Conversion
- ODP to other formats: PPTX, PDF, HTML, SWF
- Other formats to ODP: PPTX, PPT, PDF
- Batch conversion of multiple files

### 3. Slide Automation
- Template-based slide generation
- Batch slide creation from data
- Automated content insertion
- Dynamic chart generation

### 4. Content Manipulation
- Text and image insertion
- Shape and diagram creation
- Animation and transition control
- Speaker notes management

### 5. Integration
- Command-line automation via soffice
- Python scripting with UNO
- Integration with workflow tools

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @impress to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @impress against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @impress for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @impress using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Command-Line Reference

```bash
soffice --headless
soffice --headless --convert-to <format> <file>
soffice --impress  # Impress
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use slide masters for consistency
- Create templates for recurring presentations
- Embed fonts for PDF distribution
- Use vector graphics when possible
- Store ODP source files in version control
- Test conversions thoroughly
- Keep file sizes manageable

### Imported Operating Notes

#### Imported: Best Practices

1. Use slide masters for consistency
2. Create templates for recurring presentations
3. Embed fonts for PDF distribution
4. Use vector graphics when possible
5. Store ODP source files in version control
6. Test conversions thoroughly
7. Keep file sizes manageable

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/libreoffice/impress`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@image-studio` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- ODP (native), PPTX, PPT, PDF

### Supported Output Formats
- ODP, PPTX, PDF, HTML, SWF

#### Imported: Resources

- [LibreOffice Impress Guide](https://documentation.libreoffice.org/)
- [UNO API Reference](https://api.libreoffice.org/)

#### Imported: Python Libraries

```bash
pip install ezodf     # ODF handling
pip install odfpy     # ODF manipulation
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

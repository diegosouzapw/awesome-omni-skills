---
name: calc-v2
description: "LibreOffice Calc workflow skill. Use this skill when the user needs Spreadsheet creation, format conversion (ODS/XLSX/CSV), formulas, data automation with LibreOffice Calc and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["calc-v2", "calc", "spreadsheet", "creation", "format", "conversion", "ods", "xlsx"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-17"
date_updated: "2026-04-25"
---

# LibreOffice Calc

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/libreoffice/calc` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LibreOffice Calc

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Python Libraries, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating new spreadsheets in ODS format
- Converting between ODS, XLSX, CSV, PDF formats
- Automating data processing and analysis
- Creating formulas, charts, and pivot tables
- Batch processing spreadsheet operations
- Use when the request clearly matches the imported source intent: Spreadsheet creation, format conversion (ODS/XLSX/CSV), formulas, data automation with LibreOffice Calc.

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

1. ### Creating a New Spreadsheet #### Method 1: Command-Line bash soffice --calc template.ods #### Method 2: Python with UNO python import uno def createspreadsheet(): localctx = uno.getComponentContext() resolver = localctx.ServiceManager.createInstanceWithContext( "com.sun.star.bridge.UnoUrlResolver", localctx ) ctx = resolver.resolve( "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext" ) smgr = ctx.ServiceManager doc = smgr.createInstanceWithContext("com.sun.star.sheet.SpreadsheetDocument", ctx) sheets = doc.getSheets() sheet = sheets.getByIndex(0) cell = sheet.getCellByPosition(0, 0) cell.setString("Hello from LibreOffice Calc!") doc.storeToURL("file:///path/to/spreadsheet.ods", ()) doc.close(True) #### Method 3: Using ezodf python import ezodf doc = ezodf.newdoc('ods', 'spreadsheet.ods') sheet = doc.sheets[0] sheet['A1'].setvalue('Hello') sheet['B1'].setvalue('World') doc.save() ### Converting Spreadsheets bash # ODS to XLSX soffice --headless --convert-to xlsx spreadsheet.ods # ODS to CSV soffice --headless --convert-to csv spreadsheet.ods # ODS to PDF soffice --headless --convert-to pdf spreadsheet.ods # XLSX to ODS soffice --headless --convert-to ods spreadsheet.xlsx # Batch convert for file in *.ods; do soffice --headless --convert-to xlsx "$file" done ### Formula Automation python import uno def createformulaspreadsheet(): localctx = uno.getComponentContext() resolver = localctx.ServiceManager.createInstanceWithContext( "com.sun.star.bridge.UnoUrlResolver", local_ctx ) ctx = resolver.resolve( "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext" ) smgr = ctx.ServiceManager doc = smgr.createInstanceWithContext("com.sun.star.sheet.SpreadsheetDocument", ctx) sheet = doc.getSheets().getByIndex(0) sheet.getCellByPosition(0, 0).setDoubleValue(100) sheet.getCellByPosition(0, 1).setDoubleValue(200) cell = sheet.getCellByPosition(0, 2) cell.setFormula("SUM(A1:A2)") doc.storeToURL("file:///path/to/formulas.ods", ()) doc.close(True)
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Workflows

### Creating a New Spreadsheet

#### Method 1: Command-Line
```bash
soffice --calc template.ods
```

#### Method 2: Python with UNO
```python
import uno

def create_spreadsheet():
    local_ctx = uno.getComponentContext()
    resolver = local_ctx.ServiceManager.createInstanceWithContext(
        "com.sun.star.bridge.UnoUrlResolver", local_ctx
    )
    ctx = resolver.resolve(
        "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext"
    )
    smgr = ctx.ServiceManager
    doc = smgr.createInstanceWithContext("com.sun.star.sheet.SpreadsheetDocument", ctx)
    sheets = doc.getSheets()
    sheet = sheets.getByIndex(0)
    cell = sheet.getCellByPosition(0, 0)
    cell.setString("Hello from LibreOffice Calc!")
    doc.storeToURL("file:///path/to/spreadsheet.ods", ())
    doc.close(True)
```

#### Method 3: Using ezodf
```python
import ezodf

doc = ezodf.newdoc('ods', 'spreadsheet.ods')
sheet = doc.sheets[0]
sheet['A1'].set_value('Hello')
sheet['B1'].set_value('World')
doc.save()
```

### Converting Spreadsheets

```bash
# ODS to XLSX
soffice --headless --convert-to xlsx spreadsheet.ods

# ODS to CSV
soffice --headless --convert-to csv spreadsheet.ods

# ODS to PDF
soffice --headless --convert-to pdf spreadsheet.ods

# XLSX to ODS
soffice --headless --convert-to ods spreadsheet.xlsx

# Batch convert
for file in *.ods; do
    soffice --headless --convert-to xlsx "$file"
done
```

### Formula Automation
```python
import uno

def create_formula_spreadsheet():
    local_ctx = uno.getComponentContext()
    resolver = local_ctx.ServiceManager.createInstanceWithContext(
        "com.sun.star.bridge.UnoUrlResolver", local_ctx
    )
    ctx = resolver.resolve(
        "uno:socket,host=localhost,port=8100;urp;StarOffice.ComponentContext"
    )
    smgr = ctx.ServiceManager
    doc = smgr.createInstanceWithContext("com.sun.star.sheet.SpreadsheetDocument", ctx)
    sheet = doc.getSheets().getByIndex(0)

    sheet.getCellByPosition(0, 0).setDoubleValue(100)
    sheet.getCellByPosition(0, 1).setDoubleValue(200)

    cell = sheet.getCellByPosition(0, 2)
    cell.setFormula("SUM(A1:A2)")

    doc.storeToURL("file:///path/to/formulas.ods", ())
    doc.close(True)
```

#### Imported: Overview

LibreOffice Calc skill for creating, editing, converting, and automating spreadsheet workflows using the native ODS (OpenDocument Spreadsheet) format.

#### Imported: Core Capabilities

### 1. Spreadsheet Creation
- Create new ODS spreadsheets from scratch
- Generate spreadsheets from templates
- Create data entry forms
- Build dashboards and reports

### 2. Format Conversion
- ODS to other formats: XLSX, CSV, PDF, HTML
- Other formats to ODS: XLSX, XLS, CSV, DBF
- Batch conversion of multiple files

### 3. Data Automation
- Formula automation and calculations
- Data import from CSV, database, APIs
- Data export to various formats
- Batch data processing

### 4. Data Analysis
- Pivot tables and data summarization
- Statistical functions and analysis
- Data validation and filtering
- Conditional formatting

### 5. Integration
- Command-line automation via soffice
- Python scripting with UNO
- Database connectivity

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @calc-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @calc-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @calc-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @calc-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Command-Line Reference

```bash
soffice --headless
soffice --headless --convert-to <format> <file>
soffice --calc  # Calc
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use named ranges for clarity
- Document complex formulas
- Use data validation for input control
- Create templates for recurring reports
- Store ODS source files in version control
- Test conversions thoroughly
- Use CSV for data exchange

### Imported Operating Notes

#### Imported: Best Practices

1. Use named ranges for clarity
2. Document complex formulas
3. Use data validation for input control
4. Create templates for recurring reports
5. Store ODS source files in version control
6. Test conversions thoroughly
7. Use CSV for data exchange
8. Handle conversion failures gracefully

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/libreoffice/calc`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

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

- `@base-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@impress-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@langchain-architecture-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
- ODS (native), XLSX, XLS, CSV, DBF, HTML

### Supported Output Formats
- ODS, XLSX, XLS, CSV, PDF, HTML

#### Imported: Resources

- [LibreOffice Calc Guide](https://documentation.libreoffice.org/)
- [UNO API Reference](https://api.libreoffice.org/)
- [ezodf Documentation](http://ezodf.rst2.org/)

#### Imported: Python Libraries

```bash
pip install ezodf     # ODS handling
pip install odfpy     # ODF manipulation
pip install pandas    # Data analysis
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

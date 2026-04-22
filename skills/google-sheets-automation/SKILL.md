---
name: google-sheets-automation
description: "Google Sheets workflow skill. Use this skill when the user needs Lightweight Google Sheets integration with standalone OAuth authentication. No MCP server required. Full read/write access and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["google-sheets-automation", "lightweight", "google", "sheets", "integration", "standalone", "oauth", "authentication"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sanjay3290"
date_added: "2026-04-15"
date_updated: "2026-04-21"
---

# Google Sheets

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/google-sheets-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Google Sheets Lightweight Google Sheets integration with standalone OAuth authentication. No MCP server required. Full read/write access. > Requires Google Workspace account. Personal Gmail accounts are not supported.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Spreadsheet ID, Output Formats, Value Input Options, Token Management, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when tackling tasks related to its primary domain or functionality as described above.
- Use when the request clearly matches the imported source intent: Lightweight Google Sheets integration with standalone OAuth authentication. No MCP server required. Full read/write access.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Authenticate with Google (opens browser): bash python scripts/auth.py login Check authentication status: bash python scripts/auth.py status Logout when needed: bash python scripts/auth.py logout
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: First-Time Setup

Authenticate with Google (opens browser):
```bash
python scripts/auth.py login
```

Check authentication status:
```bash
python scripts/auth.py status
```

Logout when needed:
```bash
python scripts/auth.py logout
```

#### Imported: Spreadsheet ID

You can use either:
- The spreadsheet ID: `1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms`
- The full URL: `https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit`

The script automatically extracts the ID from URLs.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @google-sheets-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @google-sheets-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @google-sheets-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @google-sheets-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Read Commands

All operations via `scripts/sheets.py`. Auto-authenticates on first use if not logged in.

```bash
# Get spreadsheet content as plain text (default)
python scripts/sheets.py get-text SPREADSHEET_ID

# Get spreadsheet content as CSV
python scripts/sheets.py get-text SPREADSHEET_ID --format csv

# Get spreadsheet content as JSON
python scripts/sheets.py get-text SPREADSHEET_ID --format json

# Get values from a specific range (A1 notation)
python scripts/sheets.py get-range SPREADSHEET_ID "Sheet1!A1:D10"
python scripts/sheets.py get-range SPREADSHEET_ID "A1:C5"

# Find spreadsheets by search query
python scripts/sheets.py find "budget 2024"
python scripts/sheets.py find "sales report" --limit 5

# Get spreadsheet metadata (sheets, dimensions, etc.)
python scripts/sheets.py get-metadata SPREADSHEET_ID
```

#### Imported: Write Commands

```bash
# Update a range of cells with values (JSON 2D array)
python scripts/sheets.py update-range SPREADSHEET_ID "Sheet1!A1:B2" '[["Hello","World"],["Foo","Bar"]]'

# Update with RAW input (no formula parsing, treats everything as literal text)
python scripts/sheets.py update-range SPREADSHEET_ID "Sheet1!A1:B1" '[["=SUM(A1:A5)","text"]]' --raw

# Append rows after the last data row
python scripts/sheets.py append-rows SPREADSHEET_ID "Sheet1!A:Z" '[["New Row Col A","New Row Col B"]]'

# Clear values from a range (keeps formatting)
python scripts/sheets.py clear-range SPREADSHEET_ID "Sheet1!A1:B10"

# Batch update (advanced - for formatting, merging, etc.)
python scripts/sheets.py batch-update SPREADSHEET_ID '[{"updateCells":{"range":{"sheetId":0},"fields":"userEnteredValue"}}]'
```

#### Imported: A1 Notation Examples

- `Sheet1!A1:B10` - Range A1 to B10 on Sheet1
- `Sheet1!A:A` - All of column A on Sheet1
- `Sheet1!1:1` - All of row 1 on Sheet1
- `A1:C5` - Range on the first sheet

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/google-sheets-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@github-issue-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@github-workflow-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gitlab-ci-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Output Formats

### Text (default)
Human-readable format with pipe separators:
```
Spreadsheet Title: Sales Data
Sheet Name: Q1
Name | Revenue | Units
Product A | 10000 | 50
Product B | 15000 | 75
```

### CSV
Standard CSV format, suitable for further processing:
```
Name,Revenue,Units
Product A,10000,50
Product B,15000,75
```

### JSON
Structured data format:
```json
{
  "Q1": [
    ["Name", "Revenue", "Units"],
    ["Product A", "10000", "50"]
  ]
}
```

#### Imported: Value Input Options

- **USER_ENTERED** (default): Values are parsed as if typed by a user. Numbers, dates, and formulas are interpreted.
- **RAW** (`--raw` flag): Values are stored exactly as provided. No parsing of formulas or number formatting.

#### Imported: Token Management

Tokens stored securely using the system keyring:
- **macOS**: Keychain
- **Windows**: Windows Credential Locker
- **Linux**: Secret Service API (GNOME Keyring, KDE Wallet, etc.)

Service name: `google-sheets-skill-oauth`

Tokens automatically refresh when expired using Google's cloud function.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

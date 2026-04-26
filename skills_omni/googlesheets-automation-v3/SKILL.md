---
name: "googlesheets-automation-v3"
description: "Google Sheets Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Google Sheets operations (read, write, format, filter, manage spreadsheets) via Rube MCP (Composio). Read/write data, manage tabs, apply formatting, and search rows programmatically and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "googlesheets-automation-v3"
  - "googlesheets-automation"
  - "automate"
  - "google"
  - "sheets"
  - "operations"
  - "read"
  - "write"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-26"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "googlesheets-automation-v3"
family_name: "Google Sheets Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/googlesheets-automation-v3"
upstream_skill: "skills/googlesheets-automation-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "247"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "477953aa833cb260e47e4fb725b630d7087ef946"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "googlesheets-automation-v3"
---

# Google Sheets Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-bundle-automation-builder/skills/googlesheets-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Google Sheets Automation via Rube MCP Automate Google Sheets workflows including reading/writing data, managing spreadsheets and tabs, formatting cells, filtering rows, and upserting records through Composio's Google Sheets toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Google Sheets operations (read, write, format, filter, manage spreadsheets) via Rube MCP (Composio). Read/write data, manage tabs, apply formatting, and search rows programmatically.
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

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit googlesheets
3. If connection is not ACTIVE, follow the returned auth link to complete Google OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. GOOGLESHEETSSEARCHSPREADSHEETS - Find spreadsheet by name if ID unknown [Prerequisite]
6. GOOGLESHEETSGETSHEET_NAMES - Enumerate tab names to target the right sheet [Prerequisite]
7. GOOGLESHEETSBATCHGET - Read data from one or more ranges [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `googlesheets`
3. If connection is not ACTIVE, follow the returned auth link to complete Google OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Read and Write Data

**When to use**: User wants to read data from or write data to a Google Sheet

**Tool sequence**:
1. `GOOGLESHEETS_SEARCH_SPREADSHEETS` - Find spreadsheet by name if ID unknown [Prerequisite]
2. `GOOGLESHEETS_GET_SHEET_NAMES` - Enumerate tab names to target the right sheet [Prerequisite]
3. `GOOGLESHEETS_BATCH_GET` - Read data from one or more ranges [Required]
4. `GOOGLESHEETS_BATCH_UPDATE` - Write data to a range or append rows [Required]
5. `GOOGLESHEETS_VALUES_UPDATE` - Update a single specific range [Alternative]
6. `GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND` - Append rows to end of table [Alternative]

**Key parameters**:
- `spreadsheet_id`: Alphanumeric ID from the spreadsheet URL (between '/d/' and '/edit')
- `ranges`: A1 notation array (e.g., 'Sheet1!A1:Z1000'); always use bounded ranges
- `sheet_name`: Tab name (case-insensitive matching supported)
- `values`: 2D array where each inner array is a row
- `first_cell_location`: Starting cell in A1 notation (omit to append)
- `valueInputOption`: 'USER_ENTERED' (parsed) or 'RAW' (literal)

**Pitfalls**:
- Mis-cased or non-existent tab names error "Sheet 'X' not found"
- Empty ranges may omit `valueRanges[i].values`; treat missing as empty array
- `GOOGLESHEETS_BATCH_UPDATE` values must be a 2D array (list of lists), even for a single row
- Unbounded ranges like 'A:Z' on sheets with >10,000 rows may cause timeouts; always bound with row limits
- Append follows the detected `tableRange`; use returned `updatedRange` to verify placement

### 2. Create and Manage Spreadsheets

**When to use**: User wants to create a new spreadsheet or manage tabs within one

**Tool sequence**:
1. `GOOGLESHEETS_CREATE_GOOGLE_SHEET1` - Create a new spreadsheet [Required]
2. `GOOGLESHEETS_ADD_SHEET` - Add a new tab/worksheet [Required]
3. `GOOGLESHEETS_UPDATE_SHEET_PROPERTIES` - Rename, hide, reorder, or color tabs [Optional]
4. `GOOGLESHEETS_GET_SPREADSHEET_INFO` - Get full spreadsheet metadata [Optional]
5. `GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE` - Check if a specific tab exists [Optional]

**Key parameters**:
- `title`: Spreadsheet or sheet tab name
- `spreadsheetId`: Target spreadsheet ID
- `forceUnique`: Auto-append suffix if tab name exists (default true)
- `properties.gridProperties`: Set row/column counts, frozen rows

**Pitfalls**:
- Sheet names must be unique within a spreadsheet
- Default sheet names are locale-dependent ('Sheet1' in English, 'Hoja 1' in Spanish)
- Don't use `index` when creating multiple sheets in parallel (causes 'index too high' errors)
- `GOOGLESHEETS_GET_SPREADSHEET_INFO` can return 403 if account lacks access

### 3. Search and Filter Rows

**When to use**: User wants to find specific rows or apply filters to sheet data

**Tool sequence**:
1. `GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW` - Find first row matching exact cell value [Required]
2. `GOOGLESHEETS_SET_BASIC_FILTER` - Apply filter/sort to a range [Alternative]
3. `GOOGLESHEETS_CLEAR_BASIC_FILTER` - Remove existing filter [Optional]
4. `GOOGLESHEETS_BATCH_GET` - Read filtered results [Optional]

**Key parameters**:
- `query`: Exact text value to match (matches entire cell content)
- `range`: A1 notation range to search within
- `case_sensitive`: Boolean for case-sensitive matching (default false)
- `filter.range`: Grid range with sheet_id for basic filter
- `filter.criteria`: Column-based filter conditions
- `filter.sortSpecs`: Sort specifications

**Pitfalls**:
- `GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW` matches entire cell content, not substrings
- Sheet names with spaces must be single-quoted in ranges (e.g., "'My Sheet'!A:Z")
- Bare sheet names without ranges are not supported for lookup; always specify a range

### 4. Upsert Rows by Key

**When to use**: User wants to update existing rows or insert new ones based on a unique key column

**Tool sequence**:
1. `GOOGLESHEETS_UPSERT_ROWS` - Update matching rows or append new ones [Required]

**Key parameters**:
- `spreadsheetId`: Target spreadsheet ID
- `sheetName`: Tab name
- `keyColumn`: Column header name used as unique identifier (e.g., 'Email', 'SKU')
- `headers`: List of column names for the data
- `rows`: 2D array of data rows
- `strictMode`: Error on mismatched column counts (default true)

**Pitfalls**:
- `keyColumn` must be an actual header name, NOT a column letter (e.g., 'Email' not 'A')
- If `headers` is NOT provided, first row of `rows` is treated as headers
- With `strictMode=true`, rows with more values than headers cause an error
- Auto-adds missing columns to the sheet

### 5. Format Cells

**When to use**: User wants to apply formatting (bold, colors, font size) to cells

**Tool sequence**:
1. `GOOGLESHEETS_GET_SPREADSHEET_INFO` - Get numeric sheetId for target tab [Prerequisite]
2. `GOOGLESHEETS_FORMAT_CELL` - Apply formatting to a range [Required]
3. `GOOGLESHEETS_UPDATE_SHEET_PROPERTIES` - Change frozen rows, column widths [Optional]

**Key parameters**:
- `spreadsheet_id`: Spreadsheet ID
- `worksheet_id`: Numeric sheetId (NOT tab name); get from GET_SPREADSHEET_INFO
- `range`: A1 notation (e.g., 'A1:F1') - preferred over index fields
- `bold`, `italic`, `underline`, `strikethrough`: Boolean formatting options
- `red`, `green`, `blue`: Background color as 0.0-1.0 floats (NOT 0-255 ints)
- `fontSize`: Font size in points

**Pitfalls**:
- Requires numeric `worksheet_id`, not tab title; get from spreadsheet metadata
- Color channels are 0-1 floats (e.g., 1.0 for full red), NOT 0-255 integers
- Responses may return empty reply objects ([{}]); verify formatting via readback
- Format one range per call; batch formatting requires separate calls

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Google Sheets connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `googlesheets`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @googlesheets-automation-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @googlesheets-automation-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @googlesheets-automation-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @googlesheets-automation-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-automation-builder/skills/googlesheets-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@agent-evaluation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-agents-architect-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@airtable-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@architecture-decision-records-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| Search spreadsheets | `GOOGLESHEETS_SEARCH_SPREADSHEETS` | `query`, `search_type` |
| Create spreadsheet | `GOOGLESHEETS_CREATE_GOOGLE_SHEET1` | `title` |
| List tabs | `GOOGLESHEETS_GET_SHEET_NAMES` | `spreadsheet_id` |
| Add tab | `GOOGLESHEETS_ADD_SHEET` | `spreadsheetId`, `title` |
| Read data | `GOOGLESHEETS_BATCH_GET` | `spreadsheet_id`, `ranges` |
| Read single range | `GOOGLESHEETS_VALUES_GET` | `spreadsheet_id`, `range` |
| Write data | `GOOGLESHEETS_BATCH_UPDATE` | `spreadsheet_id`, `sheet_name`, `values` |
| Update range | `GOOGLESHEETS_VALUES_UPDATE` | `spreadsheet_id`, `range`, `values` |
| Append rows | `GOOGLESHEETS_SPREADSHEETS_VALUES_APPEND` | `spreadsheetId`, `range`, `values` |
| Upsert rows | `GOOGLESHEETS_UPSERT_ROWS` | `spreadsheetId`, `sheetName`, `keyColumn`, `rows` |
| Lookup row | `GOOGLESHEETS_LOOKUP_SPREADSHEET_ROW` | `spreadsheet_id`, `query` |
| Format cells | `GOOGLESHEETS_FORMAT_CELL` | `spreadsheet_id`, `worksheet_id`, `range` |
| Set filter | `GOOGLESHEETS_SET_BASIC_FILTER` | `spreadsheetId`, `filter` |
| Clear values | `GOOGLESHEETS_CLEAR_VALUES` | `spreadsheet_id`, range |
| Delete rows/cols | `GOOGLESHEETS_DELETE_DIMENSION` | `spreadsheet_id`, `sheet_name`, dimension |
| Spreadsheet info | `GOOGLESHEETS_GET_SPREADSHEET_INFO` | `spreadsheet_id` |
| Update tab props | `GOOGLESHEETS_UPDATE_SHEET_PROPERTIES` | `spreadsheetId`, properties |

#### Imported: Common Patterns

### ID Resolution
- **Spreadsheet name -> ID**: `GOOGLESHEETS_SEARCH_SPREADSHEETS` with `query`
- **Tab name -> sheetId**: `GOOGLESHEETS_GET_SPREADSHEET_INFO`, extract from sheets metadata
- **Tab existence check**: `GOOGLESHEETS_FIND_WORKSHEET_BY_TITLE`

### Rate Limits
Google Sheets enforces strict rate limits:
- Max 60 reads/minute and 60 writes/minute
- Exceeding limits causes errors; batch operations where possible
- Use `GOOGLESHEETS_BATCH_GET` and `GOOGLESHEETS_BATCH_UPDATE` for efficiency

### Data Patterns
- Always read before writing to understand existing layout
- Use `GOOGLESHEETS_UPSERT_ROWS` for CRM syncs, inventory updates, and dedup scenarios
- Append mode (omit `first_cell_location`) is safest for adding new records
- Use `GOOGLESHEETS_CLEAR_VALUES` to clear content while preserving formatting

#### Imported: Known Pitfalls

- **Tab names**: Locale-dependent defaults; 'Sheet1' may not exist in non-English accounts
- **Range notation**: Sheet names with spaces need single quotes in A1 notation
- **Unbounded ranges**: Can timeout on large sheets; always specify row bounds (e.g., 'A1:Z10000')
- **2D arrays**: All value parameters must be list-of-lists, even for single rows
- **Color values**: Floats 0.0-1.0, not integers 0-255
- **Formatting IDs**: `FORMAT_CELL` needs numeric sheetId, not tab title
- **Rate limits**: 60 reads/min and 60 writes/min; batch to stay within limits
- **Delete dimension**: `GOOGLESHEETS_DELETE_DIMENSION` is irreversible; double-check bounds

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

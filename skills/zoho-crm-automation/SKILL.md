---
name: zoho-crm-automation
description: "Zoho CRM Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Zoho CRM tasks via Rube MCP (Composio): create/update records, search contacts, manage leads, and convert leads. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["zoho-crm-automation", "automate", "zoho", "crm", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Zoho CRM Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/zoho-crm-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Zoho CRM Automation via Rube MCP Automate Zoho CRM operations through Composio's Zoho toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Zoho CRM tasks via Rube MCP (Composio): create/update records, search contacts, manage leads, and convert leads. Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit zoho
3. If connection is not ACTIVE, follow the returned auth link to complete Zoho OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. ZOHOLISTMODULES - List available CRM modules [Prerequisite]
6. ZOHOGETMODULE_FIELDS - Get field definitions for a module [Optional]
7. ZOHOSEARCHZOHO_RECORDS - Search records by criteria [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `zoho`
3. If connection is not ACTIVE, follow the returned auth link to complete Zoho OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Search and Retrieve Records

**When to use**: User wants to find specific CRM records by criteria

**Tool sequence**:
1. `ZOHO_LIST_MODULES` - List available CRM modules [Prerequisite]
2. `ZOHO_GET_MODULE_FIELDS` - Get field definitions for a module [Optional]
3. `ZOHO_SEARCH_ZOHO_RECORDS` - Search records by criteria [Required]
4. `ZOHO_GET_ZOHO_RECORDS` - Get records from a module [Alternative]

**Key parameters**:
- `module`: Module name (e.g., 'Leads', 'Contacts', 'Deals', 'Accounts')
- `criteria`: Search criteria string (e.g., 'Email:equals:john@example.com')
- `fields`: Comma-separated list of fields to return
- `per_page`: Number of records per page
- `page`: Page number for pagination

**Pitfalls**:
- Module names are case-sensitive (e.g., 'Leads' not 'leads')
- Search criteria uses specific syntax: 'Field:operator:value'
- Supported operators: equals, starts_with, contains, not_equal, greater_than, less_than
- Complex criteria use parentheses and AND/OR: '(Email:equals:john@example.com)AND(Last_Name:equals:Doe)'
- GET_ZOHO_RECORDS returns all records with optional filtering; SEARCH is for targeted lookups

### 2. Create Records

**When to use**: User wants to add new leads, contacts, deals, or other CRM records

**Tool sequence**:
1. `ZOHO_GET_MODULE_FIELDS` - Get required fields for the module [Prerequisite]
2. `ZOHO_CREATE_ZOHO_RECORD` - Create a new record [Required]

**Key parameters**:
- `module`: Target module name (e.g., 'Leads', 'Contacts')
- `data`: Record data object with field-value pairs
- Required fields vary by module (e.g., Last_Name for Contacts)

**Pitfalls**:
- Each module has mandatory fields; use GET_MODULE_FIELDS to identify them
- Field names use underscores (e.g., 'Last_Name', 'Email', 'Phone')
- Lookup fields require the related record ID, not the name
- Date fields must use 'yyyy-MM-dd' format
- Creating duplicates is allowed unless duplicate check rules are configured

### 3. Update Records

**When to use**: User wants to modify existing CRM records

**Tool sequence**:
1. `ZOHO_SEARCH_ZOHO_RECORDS` - Find the record to update [Prerequisite]
2. `ZOHO_UPDATE_ZOHO_RECORD` - Update the record [Required]

**Key parameters**:
- `module`: Module name
- `record_id`: ID of the record to update
- `data`: Object with fields to update (only changed fields needed)

**Pitfalls**:
- record_id must be the Zoho record ID (numeric string)
- Only provide fields that need to change; other fields are preserved
- Read-only and system fields cannot be updated
- Lookup field updates require the related record ID

### 4. Convert Leads

**When to use**: User wants to convert a lead into a contact, account, and/or deal

**Tool sequence**:
1. `ZOHO_SEARCH_ZOHO_RECORDS` - Find the lead to convert [Prerequisite]
2. `ZOHO_CONVERT_ZOHO_LEAD` - Convert the lead [Required]

**Key parameters**:
- `lead_id`: ID of the lead to convert
- `deal`: Deal details if creating a deal during conversion
- `account`: Account details for the conversion
- `contact`: Contact details for the conversion

**Pitfalls**:
- Lead conversion is irreversible; the lead record is removed from the Leads module
- Conversion can create up to three records: Contact, Account, and Deal
- Existing account matching may occur based on company name
- Custom field mappings between Lead and Contact/Account/Deal modules affect the outcome

### 5. Manage Tags and Related Records

**When to use**: User wants to tag records or manage relationships between records

**Tool sequence**:
1. `ZOHO_CREATE_ZOHO_TAG` - Create a new tag [Optional]
2. `ZOHO_UPDATE_RELATED_RECORDS` - Update related/linked records [Optional]

**Key parameters**:
- `module`: Module for the tag
- `tag_name`: Name of the tag
- `record_id`: Parent record ID (for related records)
- `related_module`: Module of the related record
- `data`: Related record data to update

**Pitfalls**:
- Tags are module-specific; a tag created for Leads is not available in Contacts
- Related records require both the parent record ID and the related module
- Tag names must be unique within a module
- Bulk tag operations may hit rate limits

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Zoho CRM connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `zoho`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @zoho-crm-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @zoho-crm-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @zoho-crm-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @zoho-crm-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/zoho-crm-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| List modules | ZOHO_LIST_MODULES | (none) |
| Get module fields | ZOHO_GET_MODULE_FIELDS | module |
| Search records | ZOHO_SEARCH_ZOHO_RECORDS | module, criteria |
| Get records | ZOHO_GET_ZOHO_RECORDS | module, fields, per_page, page |
| Create record | ZOHO_CREATE_ZOHO_RECORD | module, data |
| Update record | ZOHO_UPDATE_ZOHO_RECORD | module, record_id, data |
| Convert lead | ZOHO_CONVERT_ZOHO_LEAD | lead_id, deal, account, contact |
| Create tag | ZOHO_CREATE_ZOHO_TAG | module, tag_name |
| Update related records | ZOHO_UPDATE_RELATED_RECORDS | module, record_id, related_module, data |

#### Imported: Common Patterns

### Module and Field Discovery

```
1. Call ZOHO_LIST_MODULES to get all available modules
2. Call ZOHO_GET_MODULE_FIELDS with module name
3. Identify required fields, field types, and picklist values
4. Use field API names (not display labels) in data objects
```

### Search Criteria Syntax

**Simple search**:
```
criteria: '(Email:equals:john@example.com)'
```

**Combined criteria**:
```
criteria: '((Last_Name:equals:Doe)AND(Email:contains:example.com))'
```

**Supported operators**:
- `equals`, `not_equal`
- `starts_with`, `contains`
- `greater_than`, `less_than`, `greater_equal`, `less_equal`
- `between` (for dates/numbers)

### Pagination

- Set `per_page` (max 200) and `page` starting at 1
- Check response `info.more_records` flag
- Increment page until more_records is false
- Total count available in response info

#### Imported: Known Pitfalls

**Field Names**:
- Use API names, not display labels (e.g., 'Last_Name' not 'Last Name')
- Custom fields have API names like 'Custom_Field1' or user-defined names
- Picklist values must match exactly (case-sensitive)

**Rate Limits**:
- API call limits depend on your Zoho CRM plan
- Free plan: 5000 API calls/day; Enterprise: 25000+/day
- Implement delays between bulk operations
- Monitor 429 responses and respect rate limit headers

**Data Formats**:
- Dates: 'yyyy-MM-dd' format
- DateTime: 'yyyy-MM-ddTHH:mm:ss+HH:mm' format
- Currency: Numeric values without formatting
- Phone: String values (no specific format enforced)

**Module Access**:
- Access depends on user role and profile permissions
- Some modules may be hidden or restricted in your CRM setup
- Custom modules have custom API names

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

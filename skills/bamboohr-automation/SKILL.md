---
name: bamboohr-automation
description: "BambooHR Automation via Rube MCP workflow skill. Use this skill when the user needs Automate BambooHR tasks via Rube MCP (Composio): employees, time-off, benefits, dependents, employee updates. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["bamboohr-automation", "automate", "bamboohr", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# BambooHR Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/bamboohr-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# BambooHR Automation via Rube MCP Automate BambooHR human resources operations through Composio's BambooHR toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate BambooHR tasks via Rube MCP (Composio): employees, time-off, benefits, dependents, employee updates. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit bamboohr
3. If connection is not ACTIVE, follow the returned auth link to complete BambooHR authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. BAMBOOHRGETALL_EMPLOYEES - Get the employee directory [Required]
6. BAMBOOHRGETEMPLOYEE - Get detailed info for a specific employee [Optional]
7. For GETALLEMPLOYEES: No required parameters; returns directory

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `bamboohr`
3. If connection is not ACTIVE, follow the returned auth link to complete BambooHR authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Search Employees

**When to use**: User wants to find employees or get the full employee directory

**Tool sequence**:
1. `BAMBOOHR_GET_ALL_EMPLOYEES` - Get the employee directory [Required]
2. `BAMBOOHR_GET_EMPLOYEE` - Get detailed info for a specific employee [Optional]

**Key parameters**:
- For GET_ALL_EMPLOYEES: No required parameters; returns directory
- For GET_EMPLOYEE:
  - `id`: Employee ID (numeric)
  - `fields`: Comma-separated list of fields to return (e.g., 'firstName,lastName,department,jobTitle')

**Pitfalls**:
- Employee IDs are numeric integers
- GET_ALL_EMPLOYEES returns basic directory info; use GET_EMPLOYEE for full details
- The `fields` parameter controls which fields are returned; omitting it may return minimal data
- Common fields: firstName, lastName, department, division, jobTitle, workEmail, status
- Inactive/terminated employees may be included; check `status` field

### 2. Track Employee Changes

**When to use**: User wants to detect recent employee data changes for sync or auditing

**Tool sequence**:
1. `BAMBOOHR_EMPLOYEE_GET_CHANGED` - Get employees with recent changes [Required]

**Key parameters**:
- `since`: ISO 8601 datetime string for change detection threshold
- `type`: Type of changes to check (e.g., 'inserted', 'updated', 'deleted')

**Pitfalls**:
- `since` parameter is required; use ISO 8601 format (e.g., '2024-01-15T00:00:00Z')
- Returns IDs of changed employees, not full employee data
- Must call GET_EMPLOYEE separately for each changed employee's details
- Useful for incremental sync workflows; cache the last sync timestamp

### 3. Manage Time-Off

**When to use**: User wants to view time-off balances, request time off, or manage requests

**Tool sequence**:
1. `BAMBOOHR_GET_META_TIME_OFF_TYPES` - List available time-off types [Prerequisite]
2. `BAMBOOHR_GET_TIME_OFF_BALANCES` - Check current balances [Optional]
3. `BAMBOOHR_GET_TIME_OFF_REQUESTS` - List existing requests [Optional]
4. `BAMBOOHR_CREATE_TIME_OFF_REQUEST` - Submit a new request [Optional]
5. `BAMBOOHR_UPDATE_TIME_OFF_REQUEST` - Modify or approve/deny a request [Optional]

**Key parameters**:
- For balances: `employeeId`, time-off type ID
- For requests: `start`, `end` (date range), `employeeId`
- For creation:
  - `employeeId`: Employee to request for
  - `timeOffTypeId`: Type ID from GET_META_TIME_OFF_TYPES
  - `start`: Start date (YYYY-MM-DD)
  - `end`: End date (YYYY-MM-DD)
  - `amount`: Number of days/hours
  - `notes`: Optional notes for the request
- For update: `requestId`, `status` ('approved', 'denied', 'cancelled')

**Pitfalls**:
- Time-off type IDs are numeric; resolve via GET_META_TIME_OFF_TYPES first
- Date format is 'YYYY-MM-DD' for start and end dates
- Balances may be in hours or days depending on company configuration
- Request status updates require appropriate permissions (manager/admin)
- Creating a request does NOT auto-approve it; separate approval step needed

### 4. Update Employee Information

**When to use**: User wants to modify employee profile data

**Tool sequence**:
1. `BAMBOOHR_GET_EMPLOYEE` - Get current employee data [Prerequisite]
2. `BAMBOOHR_UPDATE_EMPLOYEE` - Update employee fields [Required]

**Key parameters**:
- `id`: Employee ID (numeric, required)
- Field-value pairs for the fields to update (e.g., `department`, `jobTitle`, `workPhone`)

**Pitfalls**:
- Only fields included in the request are updated; others remain unchanged
- Some fields are read-only and cannot be updated via API
- Field names must match BambooHR's expected field names exactly
- Updates are audited; changes appear in the employee's change history
- Verify current values with GET_EMPLOYEE before updating to avoid overwriting

### 5. Manage Dependents and Benefits

**When to use**: User wants to view employee dependents or benefit coverage

**Tool sequence**:
1. `BAMBOOHR_DEPENDENTS_GET_ALL` - List all dependents [Required]
2. `BAMBOOHR_BENEFIT_GET_COVERAGES` - Get benefit coverage details [Optional]

**Key parameters**:
- For dependents: Optional `employeeId` filter
- For benefits: Depends on schema; check RUBE_SEARCH_TOOLS for current parameters

**Pitfalls**:
- Dependent data includes sensitive PII; handle with appropriate care
- Benefit coverages may include multiple plan types per employee
- Not all BambooHR plans include benefits administration; check account features
- Data access depends on API key permissions

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active BambooHR connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `bamboohr`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @bamboohr-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @bamboohr-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @bamboohr-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @bamboohr-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/bamboohr-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List all employees | BAMBOOHR_GET_ALL_EMPLOYEES | (none) |
| Get employee details | BAMBOOHR_GET_EMPLOYEE | id, fields |
| Track changes | BAMBOOHR_EMPLOYEE_GET_CHANGED | since, type |
| Time-off types | BAMBOOHR_GET_META_TIME_OFF_TYPES | (none) |
| Time-off balances | BAMBOOHR_GET_TIME_OFF_BALANCES | employeeId |
| List time-off requests | BAMBOOHR_GET_TIME_OFF_REQUESTS | start, end, employeeId |
| Create time-off request | BAMBOOHR_CREATE_TIME_OFF_REQUEST | employeeId, timeOffTypeId, start, end |
| Update time-off request | BAMBOOHR_UPDATE_TIME_OFF_REQUEST | requestId, status |
| Update employee | BAMBOOHR_UPDATE_EMPLOYEE | id, (field updates) |
| List dependents | BAMBOOHR_DEPENDENTS_GET_ALL | employeeId |
| Benefit coverages | BAMBOOHR_BENEFIT_GET_COVERAGES | (check schema) |

#### Imported: Common Patterns

### ID Resolution

**Employee name -> Employee ID**:
```
1. Call BAMBOOHR_GET_ALL_EMPLOYEES
2. Find employee by name in directory results
3. Extract id (numeric) for detailed operations
```

**Time-off type name -> Type ID**:
```
1. Call BAMBOOHR_GET_META_TIME_OFF_TYPES
2. Find type by name (e.g., 'Vacation', 'Sick Leave')
3. Extract id for time-off requests
```

### Incremental Sync Pattern

For keeping external systems in sync with BambooHR:
```
1. Store last_sync_timestamp
2. Call BAMBOOHR_EMPLOYEE_GET_CHANGED with since=last_sync_timestamp
3. For each changed employee ID, call BAMBOOHR_GET_EMPLOYEE
4. Process updates in external system
5. Update last_sync_timestamp
```

### Time-Off Workflow

```
1. GET_META_TIME_OFF_TYPES -> find type ID
2. GET_TIME_OFF_BALANCES -> verify available balance
3. CREATE_TIME_OFF_REQUEST -> submit request
4. UPDATE_TIME_OFF_REQUEST -> approve/deny (manager action)
```

#### Imported: Known Pitfalls

**Employee IDs**:
- Always numeric integers
- Resolve names to IDs via GET_ALL_EMPLOYEES
- Terminated employees retain their IDs

**Date Formats**:
- Time-off dates: 'YYYY-MM-DD'
- Change detection: ISO 8601 with timezone
- Inconsistent formats between endpoints; check each endpoint's schema

**Permissions**:
- API key permissions determine accessible fields and operations
- Some operations require admin or manager-level access
- Time-off approvals require appropriate role permissions

**Sensitive Data**:
- Employee data includes PII (names, addresses, SSN, etc.)
- Handle all responses with appropriate security measures
- Dependent data is especially sensitive

**Rate Limits**:
- BambooHR API has rate limits per API key
- Bulk operations should be throttled
- GET_ALL_EMPLOYEES is more efficient than individual GET_EMPLOYEE calls

**Response Parsing**:
- Response data may be nested under `data` key
- Employee fields vary based on `fields` parameter
- Empty fields may be omitted or returned as null
- Parse defensively with fallbacks

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

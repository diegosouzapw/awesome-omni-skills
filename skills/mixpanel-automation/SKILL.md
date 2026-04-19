---
name: mixpanel-automation
description: "Mixpanel Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Mixpanel tasks via Rube MCP (Composio): events, segmentation, funnels, cohorts, user profiles, JQL queries. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["mixpanel-automation", "automate", "mixpanel", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Mixpanel Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/mixpanel-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Mixpanel Automation via Rube MCP Automate Mixpanel product analytics through Composio's Mixpanel toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Mixpanel tasks via Rube MCP (Composio): events, segmentation, funnels, cohorts, user profiles, JQL queries. Always search tools first for current schemas.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit mixpanel
3. If connection is not ACTIVE, follow the returned auth link to complete Mixpanel authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. MIXPANELGETALL_PROJECTS - List projects to get project ID [Prerequisite]
6. MIXPANELAGGREGATEEVENT_COUNTS - Get event counts and aggregations [Required]
7. event: Event name or array of event names to aggregate

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `mixpanel`
3. If connection is not ACTIVE, follow the returned auth link to complete Mixpanel authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Aggregate Event Data

**When to use**: User wants to count events, get totals, or track event trends over time

**Tool sequence**:
1. `MIXPANEL_GET_ALL_PROJECTS` - List projects to get project ID [Prerequisite]
2. `MIXPANEL_AGGREGATE_EVENT_COUNTS` - Get event counts and aggregations [Required]

**Key parameters**:
- `event`: Event name or array of event names to aggregate
- `from_date` / `to_date`: Date range in 'YYYY-MM-DD' format
- `unit`: Time granularity ('minute', 'hour', 'day', 'week', 'month')
- `type`: Aggregation type ('general', 'unique', 'average')
- `where`: Filter expression for event properties

**Pitfalls**:
- Date format must be 'YYYY-MM-DD'; other formats cause errors
- Event names are case-sensitive; use exact names from your Mixpanel project
- `where` filter uses Mixpanel expression syntax (e.g., `properties["country"] == "US"`)
- Maximum date range may be limited depending on your Mixpanel plan

### 2. Run Segmentation Queries

**When to use**: User wants to break down events by properties for detailed analysis

**Tool sequence**:
1. `MIXPANEL_QUERY_SEGMENTATION` - Run segmentation analysis [Required]

**Key parameters**:
- `event`: Event name to segment
- `from_date` / `to_date`: Date range in 'YYYY-MM-DD' format
- `on`: Property to segment by (e.g., `properties["country"]`)
- `unit`: Time granularity
- `type`: Count type ('general', 'unique', 'average')
- `where`: Filter expression
- `limit`: Maximum number of segments to return

**Pitfalls**:
- The `on` parameter uses Mixpanel property expression syntax
- Property references must use `properties["prop_name"]` format
- Segmentation on high-cardinality properties returns capped results; use `limit`
- Results are grouped by the segmentation property and time unit

### 3. Analyze Funnels

**When to use**: User wants to track conversion funnels and identify drop-off points

**Tool sequence**:
1. `MIXPANEL_LIST_FUNNELS` - List saved funnels to find funnel ID [Prerequisite]
2. `MIXPANEL_QUERY_FUNNEL` - Execute funnel analysis [Required]

**Key parameters**:
- `funnel_id`: ID of the saved funnel to query
- `from_date` / `to_date`: Date range
- `unit`: Time granularity
- `where`: Filter expression
- `on`: Property to segment funnel by
- `length`: Conversion window in days

**Pitfalls**:
- `funnel_id` is required; resolve via LIST_FUNNELS first
- Funnels must be created in Mixpanel UI first; API only queries existing funnels
- Conversion window (`length`) defaults vary; set explicitly for accuracy
- Large date ranges with segmentation can produce very large responses

### 4. Manage User Profiles

**When to use**: User wants to query or update user profiles in Mixpanel

**Tool sequence**:
1. `MIXPANEL_QUERY_PROFILES` - Search and filter user profiles [Required]
2. `MIXPANEL_PROFILE_BATCH_UPDATE` - Update multiple user profiles [Optional]

**Key parameters**:
- `where`: Filter expression for profile properties (e.g., `properties["plan"] == "premium"`)
- `output_properties`: Array of property names to include in results
- `page`: Page number for pagination
- `session_id`: Session ID for consistent pagination (from first response)
- For batch update: array of profile updates with `$distinct_id` and property operations

**Pitfalls**:
- Profile queries return paginated results; use `session_id` from first response for consistent paging
- `where` uses Mixpanel expression syntax for profile properties
- BATCH_UPDATE applies operations (`$set`, `$unset`, `$add`, `$append`) to profiles
- Batch update has a maximum number of profiles per request; chunk larger updates
- Profile property names are case-sensitive

### 5. Manage Cohorts

**When to use**: User wants to list or analyze user cohorts

**Tool sequence**:
1. `MIXPANEL_COHORTS_LIST` - List all saved cohorts [Required]

**Key parameters**:
- No required parameters; returns all accessible cohorts
- Response includes cohort `id`, `name`, `description`, `count`

**Pitfalls**:
- Cohorts are created and managed in Mixpanel UI; API provides read access
- Cohort IDs are numeric; use exact ID from list results
- Cohort counts may be approximate for very large cohorts
- Cohorts can be used as filters in other queries via `where` expressions

### 6. Run JQL and Insight Queries

**When to use**: User wants to run custom JQL queries or insight analyses

**Tool sequence**:
1. `MIXPANEL_JQL_QUERY` - Execute a custom JQL (JavaScript Query Language) query [Optional]
2. `MIXPANEL_QUERY_INSIGHT` - Run a saved insight query [Optional]

**Key parameters**:
- For JQL: `script` containing the JQL JavaScript code
- For Insight: `bookmark_id` of the saved insight
- `project_id`: Project context for the query

**Pitfalls**:
- JQL uses JavaScript-like syntax specific to Mixpanel
- JQL queries have execution time limits; optimize for efficiency
- Insight `bookmark_id` must reference an existing saved insight
- JQL is a legacy feature; check Mixpanel documentation for current availability

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Mixpanel connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `mixpanel`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @mixpanel-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @mixpanel-automation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @mixpanel-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @mixpanel-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/mixpanel-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@lint-and-validate` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-shell-scripting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linux-troubleshooting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-app-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List projects | MIXPANEL_GET_ALL_PROJECTS | (none) |
| Aggregate events | MIXPANEL_AGGREGATE_EVENT_COUNTS | event, from_date, to_date, unit |
| Segmentation | MIXPANEL_QUERY_SEGMENTATION | event, on, from_date, to_date |
| List funnels | MIXPANEL_LIST_FUNNELS | (none) |
| Query funnel | MIXPANEL_QUERY_FUNNEL | funnel_id, from_date, to_date |
| Query profiles | MIXPANEL_QUERY_PROFILES | where, output_properties, page |
| Batch update profiles | MIXPANEL_PROFILE_BATCH_UPDATE | (profile update objects) |
| List cohorts | MIXPANEL_COHORTS_LIST | (none) |
| JQL query | MIXPANEL_JQL_QUERY | script |
| Query insight | MIXPANEL_QUERY_INSIGHT | bookmark_id |

#### Imported: Common Patterns

### ID Resolution

**Project name -> Project ID**:
```
1. Call MIXPANEL_GET_ALL_PROJECTS
2. Find project by name in results
3. Extract project id
```

**Funnel name -> Funnel ID**:
```
1. Call MIXPANEL_LIST_FUNNELS
2. Find funnel by name
3. Extract funnel_id
```

### Mixpanel Expression Syntax

Used in `where` and `on` parameters:
- Property reference: `properties["property_name"]`
- Equality: `properties["country"] == "US"`
- Comparison: `properties["age"] > 25`
- Boolean: `properties["is_premium"] == true`
- Contains: `"search_term" in properties["name"]`
- AND/OR: `properties["country"] == "US" and properties["plan"] == "pro"`

### Pagination

- Event queries: Follow date-based pagination by adjusting date ranges
- Profile queries: Use `page` number and `session_id` for consistent results
- Funnel/cohort lists: Typically return complete results without pagination

#### Imported: Known Pitfalls

**Date Formats**:
- Always use 'YYYY-MM-DD' format
- Date ranges are inclusive on both ends
- Data freshness depends on Mixpanel ingestion delay (typically minutes)

**Expression Syntax**:
- Property references always use `properties["name"]` format
- String values must be quoted: `properties["status"] == "active"`
- Numeric values are unquoted: `properties["count"] > 10`
- Boolean values: `true` / `false` (lowercase)

**Rate Limits**:
- Mixpanel API has rate limits per project
- Large segmentation queries may time out; reduce date range or segments
- Use batch operations where available to minimize API calls

**Response Parsing**:
- Response data may be nested under `data` key
- Event data is typically grouped by date and segment
- Numeric values may be returned as strings; parse explicitly
- Empty date ranges return empty objects, not empty arrays

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

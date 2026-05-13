---
name: "datadog-automation-v2"
description: "Datadog Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Datadog tasks via Rube MCP (Composio): query metrics, search logs, manage monitors/dashboards, create events and downtimes. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "datadog-automation-v2"
  - "datadog-automation"
  - "automate"
  - "datadog"
  - "tasks"
  - "via"
  - "rube"
  - "mcp"
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
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "datadog-automation-v2"
family_name: "Datadog Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/datadog-automation-v2"
upstream_skill: "skills/datadog-automation-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "datadog-automation-v2"
---

# Datadog Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/datadog-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Datadog Automation via Rube MCP Automate Datadog monitoring and observability operations through Composio's Datadog toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Datadog tasks via Rube MCP (Composio): query metrics, search logs, manage monitors/dashboards, create events and downtimes. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit datadog
3. If connection is not ACTIVE, follow the returned auth link to complete Datadog authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. DATADOGLISTMETRICS - List available metric names [Optional]
6. DATADOGQUERYMETRICS - Query metric time series data [Required]
7. query: Datadog metric query string (e.g., avg:system.cpu.user{host:web01})

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `datadog`
3. If connection is not ACTIVE, follow the returned auth link to complete Datadog authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Query and Explore Metrics

**When to use**: User wants to query metric data or list available metrics

**Tool sequence**:
1. `DATADOG_LIST_METRICS` - List available metric names [Optional]
2. `DATADOG_QUERY_METRICS` - Query metric time series data [Required]

**Key parameters**:
- `query`: Datadog metric query string (e.g., `avg:system.cpu.user{host:web01}`)
- `from`: Start timestamp (Unix epoch seconds)
- `to`: End timestamp (Unix epoch seconds)
- `q`: Search string for listing metrics

**Pitfalls**:
- Query syntax follows Datadog's metric query format: `aggregation:metric_name{tag_filters}`
- `from` and `to` are Unix epoch timestamps in seconds, not milliseconds
- Valid aggregations: `avg`, `sum`, `min`, `max`, `count`
- Tag filters use curly braces: `{host:web01,env:prod}`
- Time range should not exceed Datadog's retention limits for the metric type

### 2. Search and Analyze Logs

**When to use**: User wants to search log entries or list log indexes

**Tool sequence**:
1. `DATADOG_LIST_LOG_INDEXES` - List available log indexes [Optional]
2. `DATADOG_SEARCH_LOGS` - Search logs with query and filters [Required]

**Key parameters**:
- `query`: Log search query using Datadog log query syntax
- `from`: Start time (ISO 8601 or Unix timestamp)
- `to`: End time (ISO 8601 or Unix timestamp)
- `sort`: Sort order ('asc' or 'desc')
- `limit`: Number of log entries to return

**Pitfalls**:
- Log queries use Datadog's log search syntax: `service:web status:error`
- Search is limited to retained logs within the configured retention period
- Large result sets require pagination; check for cursor/page tokens
- Log indexes control routing and retention; filter by index if known

### 3. Manage Monitors

**When to use**: User wants to create, update, mute, or inspect monitors

**Tool sequence**:
1. `DATADOG_LIST_MONITORS` - List all monitors with filters [Required]
2. `DATADOG_GET_MONITOR` - Get specific monitor details [Optional]
3. `DATADOG_CREATE_MONITOR` - Create a new monitor [Optional]
4. `DATADOG_UPDATE_MONITOR` - Update monitor configuration [Optional]
5. `DATADOG_MUTE_MONITOR` - Silence a monitor temporarily [Optional]
6. `DATADOG_UNMUTE_MONITOR` - Re-enable a muted monitor [Optional]

**Key parameters**:
- `monitor_id`: Numeric monitor ID
- `name`: Monitor display name
- `type`: Monitor type ('metric alert', 'service check', 'log alert', 'query alert', etc.)
- `query`: Monitor query defining the alert condition
- `message`: Notification message with @mentions
- `tags`: Array of tag strings
- `thresholds`: Alert threshold values (`critical`, `warning`, `ok`)

**Pitfalls**:
- Monitor `type` must match the query type; mismatches cause creation failures
- `message` supports @mentions for notifications (e.g., `@slack-channel`, `@pagerduty`)
- Thresholds vary by monitor type; metric monitors need `critical` at minimum
- Muting a monitor suppresses notifications but the monitor still evaluates
- Monitor IDs are numeric integers

### 4. Manage Dashboards

**When to use**: User wants to list, view, update, or delete dashboards

**Tool sequence**:
1. `DATADOG_LIST_DASHBOARDS` - List all dashboards [Required]
2. `DATADOG_GET_DASHBOARD` - Get full dashboard definition [Optional]
3. `DATADOG_UPDATE_DASHBOARD` - Update dashboard layout or widgets [Optional]
4. `DATADOG_DELETE_DASHBOARD` - Remove a dashboard (irreversible) [Optional]

**Key parameters**:
- `dashboard_id`: Dashboard identifier string
- `title`: Dashboard title
- `layout_type`: 'ordered' (grid) or 'free' (freeform positioning)
- `widgets`: Array of widget definition objects
- `description`: Dashboard description

**Pitfalls**:
- Dashboard IDs are alphanumeric strings (e.g., 'abc-def-ghi'), not numeric
- `layout_type` cannot be changed after creation; must recreate the dashboard
- Widget definitions are complex nested objects; get existing dashboard first to understand structure
- DELETE is permanent; there is no undo

### 5. Create Events and Manage Downtimes

**When to use**: User wants to post events or schedule maintenance downtimes

**Tool sequence**:
1. `DATADOG_LIST_EVENTS` - List existing events [Optional]
2. `DATADOG_CREATE_EVENT` - Post a new event [Required]
3. `DATADOG_CREATE_DOWNTIME` - Schedule a maintenance downtime [Optional]

**Key parameters for events**:
- `title`: Event title
- `text`: Event body text (supports markdown)
- `alert_type`: Event severity ('error', 'warning', 'info', 'success')
- `tags`: Array of tag strings

**Key parameters for downtimes**:
- `scope`: Tag scope for the downtime (e.g., `host:web01`)
- `start`: Start time (Unix epoch)
- `end`: End time (Unix epoch; omit for indefinite)
- `message`: Downtime description
- `monitor_id`: Specific monitor to downtime (optional, omit for scope-based)

**Pitfalls**:
- Event `text` supports Datadog's markdown format including @mentions
- Downtimes scope uses tag syntax: `host:web01`, `env:staging`
- Omitting `end` creates an indefinite downtime; always set an end time for maintenance
- Downtime `monitor_id` narrows to a single monitor; scope applies to all matching monitors

### 6. Manage Hosts and Traces

**When to use**: User wants to list infrastructure hosts or inspect distributed traces

**Tool sequence**:
1. `DATADOG_LIST_HOSTS` - List all reporting hosts [Required]
2. `DATADOG_GET_TRACE_BY_ID` - Get a specific distributed trace [Optional]

**Key parameters**:
- `filter`: Host search filter string
- `sort_field`: Sort hosts by field (e.g., 'name', 'apps', 'cpu')
- `sort_dir`: Sort direction ('asc' or 'desc')
- `trace_id`: Distributed trace ID for trace lookup

**Pitfalls**:
- Host list includes all hosts reporting to Datadog within the retention window
- Trace IDs are long numeric strings; ensure exact match
- Hosts that stop reporting are retained for a configured period before removal

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Datadog connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `datadog`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @datadog-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @datadog-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @datadog-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @datadog-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/datadog-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Query metrics | DATADOG_QUERY_METRICS | query, from, to |
| List metrics | DATADOG_LIST_METRICS | q |
| Search logs | DATADOG_SEARCH_LOGS | query, from, to, limit |
| List log indexes | DATADOG_LIST_LOG_INDEXES | (none) |
| List monitors | DATADOG_LIST_MONITORS | tags |
| Get monitor | DATADOG_GET_MONITOR | monitor_id |
| Create monitor | DATADOG_CREATE_MONITOR | name, type, query, message |
| Update monitor | DATADOG_UPDATE_MONITOR | monitor_id |
| Mute monitor | DATADOG_MUTE_MONITOR | monitor_id |
| Unmute monitor | DATADOG_UNMUTE_MONITOR | monitor_id |
| List dashboards | DATADOG_LIST_DASHBOARDS | (none) |
| Get dashboard | DATADOG_GET_DASHBOARD | dashboard_id |
| Update dashboard | DATADOG_UPDATE_DASHBOARD | dashboard_id, title, widgets |
| Delete dashboard | DATADOG_DELETE_DASHBOARD | dashboard_id |
| List events | DATADOG_LIST_EVENTS | start, end |
| Create event | DATADOG_CREATE_EVENT | title, text, alert_type |
| Create downtime | DATADOG_CREATE_DOWNTIME | scope, start, end |
| List hosts | DATADOG_LIST_HOSTS | filter, sort_field |
| Get trace | DATADOG_GET_TRACE_BY_ID | trace_id |

#### Imported: Common Patterns

### Monitor Query Syntax

**Metric alerts**:
```
avg(last_5m):avg:system.cpu.user{env:prod} > 90
```

**Log alerts**:
```
logs("service:web status:error").index("main").rollup("count").last("5m") > 10
```

### Tag Filtering

- Tags use `key:value` format: `host:web01`, `env:prod`, `service:api`
- Multiple tags: `{host:web01,env:prod}` (AND logic)
- Wildcard: `host:web*`

### Pagination

- Use `page` and `page_size` or offset-based pagination depending on endpoint
- Check response for total count to determine if more pages exist
- Continue until all results are retrieved

#### Imported: Known Pitfalls

**Timestamps**:
- Most endpoints use Unix epoch seconds (not milliseconds)
- Some endpoints accept ISO 8601; check tool schema
- Time ranges should be reasonable (not years of data)

**Query Syntax**:
- Metric queries: `aggregation:metric{tags}`
- Log queries: `field:value` pairs
- Monitor queries vary by type; check Datadog documentation

**Rate Limits**:
- Datadog API has per-endpoint rate limits
- Implement backoff on 429 responses
- Batch operations where possible

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

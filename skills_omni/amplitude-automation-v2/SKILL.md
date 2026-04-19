---
name: "amplitude-automation-v2"
description: "Amplitude Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Amplitude tasks via Rube MCP (Composio): events, user activity, cohorts, user identification. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "tools"
tags:
  - "amplitude-automation-v2"
  - "amplitude-automation"
  - "automate"
  - "amplitude"
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
date_added: "2026-04-15"
date_updated: "2026-04-15"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "amplitude-automation-v2"
family_name: "Amplitude Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/amplitude-automation-v2"
upstream_skill: "skills/amplitude-automation-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "37"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "amplitude-automation-v2"
---

# Amplitude Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/amplitude-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Amplitude Automation via Rube MCP Automate Amplitude product analytics through Composio's Amplitude toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Amplitude tasks via Rube MCP (Composio): events, user activity, cohorts, user identification. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit amplitude
3. If connection is not ACTIVE, follow the returned auth link to complete Amplitude authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. AMPLITUDESENDEVENTS - Send one or more events to Amplitude [Required]
6. events: Array of event objects, each containing:
7. eventtype: Name of the event (e.g., 'pageview', 'purchase')

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `amplitude`
3. If connection is not ACTIVE, follow the returned auth link to complete Amplitude authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Send Events

**When to use**: User wants to track events or send event data to Amplitude

**Tool sequence**:
1. `AMPLITUDE_SEND_EVENTS` - Send one or more events to Amplitude [Required]

**Key parameters**:
- `events`: Array of event objects, each containing:
  - `event_type`: Name of the event (e.g., 'page_view', 'purchase')
  - `user_id`: Unique user identifier (required if no `device_id`)
  - `device_id`: Device identifier (required if no `user_id`)
  - `event_properties`: Object with custom event properties
  - `user_properties`: Object with user properties to set
  - `time`: Event timestamp in milliseconds since epoch

**Pitfalls**:
- At least one of `user_id` or `device_id` is required per event
- `event_type` is required for every event; cannot be empty
- `time` must be in milliseconds (13-digit epoch), not seconds
- Batch limit applies; check schema for maximum events per request
- Events are processed asynchronously; successful API response does not mean data is immediately queryable

### 2. Get User Activity

**When to use**: User wants to view event history for a specific user

**Tool sequence**:
1. `AMPLITUDE_FIND_USER` - Find user by ID or property [Prerequisite]
2. `AMPLITUDE_GET_USER_ACTIVITY` - Retrieve user's event stream [Required]

**Key parameters**:
- `user`: Amplitude internal user ID (from FIND_USER)
- `offset`: Pagination offset for event list
- `limit`: Maximum number of events to return

**Pitfalls**:
- `user` parameter requires Amplitude's internal user ID, NOT your application's user_id
- Must call FIND_USER first to resolve your user_id to Amplitude's internal ID
- Activity is returned in reverse chronological order by default
- Large activity histories require pagination via `offset`

### 3. Find and Identify Users

**When to use**: User wants to look up users or set user properties

**Tool sequence**:
1. `AMPLITUDE_FIND_USER` - Search for a user by various identifiers [Required]
2. `AMPLITUDE_IDENTIFY` - Set or update user properties [Optional]

**Key parameters**:
- For FIND_USER:
  - `user`: Search term (user_id, email, or Amplitude ID)
- For IDENTIFY:
  - `user_id`: Your application's user identifier
  - `device_id`: Device identifier (alternative to user_id)
  - `user_properties`: Object with `$set`, `$unset`, `$add`, `$append` operations

**Pitfalls**:
- FIND_USER searches across user_id, device_id, and Amplitude ID
- IDENTIFY uses special property operations (`$set`, `$unset`, `$add`, `$append`)
- `$set` overwrites existing values; `$setOnce` only sets if not already set
- At least one of `user_id` or `device_id` is required for IDENTIFY
- User property changes are eventually consistent; not immediate

### 4. Manage Cohorts

**When to use**: User wants to list cohorts, view cohort details, or update cohort membership

**Tool sequence**:
1. `AMPLITUDE_LIST_COHORTS` - List all saved cohorts [Required]
2. `AMPLITUDE_GET_COHORT` - Get detailed cohort information [Optional]
3. `AMPLITUDE_UPDATE_COHORT_MEMBERSHIP` - Add/remove users from a cohort [Optional]
4. `AMPLITUDE_CHECK_COHORT_STATUS` - Check async cohort operation status [Optional]

**Key parameters**:
- For LIST_COHORTS: No required parameters
- For GET_COHORT: `cohort_id` (from list results)
- For UPDATE_COHORT_MEMBERSHIP:
  - `cohort_id`: Target cohort ID
  - `memberships`: Object with `add` and/or `remove` arrays of user IDs
- For CHECK_COHORT_STATUS: `request_id` from update response

**Pitfalls**:
- Cohort IDs are required for all cohort-specific operations
- UPDATE_COHORT_MEMBERSHIP is asynchronous; use CHECK_COHORT_STATUS to verify
- `request_id` from the update response is needed for status checking
- Maximum membership changes per request may be limited; chunk large updates
- Only behavioral cohorts support API membership updates

### 5. Browse Event Categories

**When to use**: User wants to discover available event types and categories in Amplitude

**Tool sequence**:
1. `AMPLITUDE_GET_EVENT_CATEGORIES` - List all event categories [Required]

**Key parameters**:
- No required parameters; returns all configured event categories

**Pitfalls**:
- Categories are configured in Amplitude UI; API provides read access
- Event names within categories are case-sensitive
- Use these categories to validate event_type values before sending events

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Amplitude connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `amplitude`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @amplitude-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @amplitude-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @amplitude-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @amplitude-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/amplitude-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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
| Send events | AMPLITUDE_SEND_EVENTS | events (array) |
| Find user | AMPLITUDE_FIND_USER | user |
| Get user activity | AMPLITUDE_GET_USER_ACTIVITY | user, offset, limit |
| Identify user | AMPLITUDE_IDENTIFY | user_id, user_properties |
| List cohorts | AMPLITUDE_LIST_COHORTS | (none) |
| Get cohort | AMPLITUDE_GET_COHORT | cohort_id |
| Update cohort members | AMPLITUDE_UPDATE_COHORT_MEMBERSHIP | cohort_id, memberships |
| Check cohort status | AMPLITUDE_CHECK_COHORT_STATUS | request_id |
| List event categories | AMPLITUDE_GET_EVENT_CATEGORIES | (none) |

#### Imported: Common Patterns

### ID Resolution

**Application user_id -> Amplitude internal ID**:
```
1. Call AMPLITUDE_FIND_USER with user=your_user_id
2. Extract Amplitude's internal user ID from response
3. Use internal ID for GET_USER_ACTIVITY
```

**Cohort name -> Cohort ID**:
```
1. Call AMPLITUDE_LIST_COHORTS
2. Find cohort by name in results
3. Extract id for cohort operations
```

### User Property Operations

Amplitude IDENTIFY supports these property operations:
- `$set`: Set property value (overwrites existing)
- `$setOnce`: Set only if property not already set
- `$add`: Increment numeric property
- `$append`: Append to list property
- `$unset`: Remove property entirely

Example structure:
```json
{
  "user_properties": {
    "$set": {"plan": "premium", "company": "Acme"},
    "$add": {"login_count": 1}
  }
}
```

### Async Operation Pattern

For cohort membership updates:
```
1. Call AMPLITUDE_UPDATE_COHORT_MEMBERSHIP -> get request_id
2. Call AMPLITUDE_CHECK_COHORT_STATUS with request_id
3. Repeat step 2 until status is 'complete' or 'error'
```

#### Imported: Known Pitfalls

**User IDs**:
- Amplitude has its own internal user IDs separate from your application's
- FIND_USER resolves your IDs to Amplitude's internal IDs
- GET_USER_ACTIVITY requires Amplitude's internal ID, not your user_id

**Event Timestamps**:
- Must be in milliseconds since epoch (13 digits)
- Seconds (10 digits) will be interpreted as very old dates
- Omitting timestamp uses server receive time

**Rate Limits**:
- Event ingestion has throughput limits per project
- Batch events where possible to reduce API calls
- Cohort membership updates have async processing limits

**Response Parsing**:
- Response data may be nested under `data` key
- User activity returns events in reverse chronological order
- Cohort lists may include archived cohorts; check status field
- Parse defensively with fallbacks for optional fields

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: segment-automation-v2
description: "Segment Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Segment tasks via Rube MCP (Composio): track events, identify users, manage groups, page views, aliases, batch operations. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["segment-automation-v2", "segment-automation", "automate", "segment", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Segment Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/segment-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Segment Automation via Rube MCP Automate Segment customer data platform operations through Composio's Segment toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Segment tasks via Rube MCP (Composio): track events, identify users, manage groups, page views, aliases, batch operations. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit segment
3. If connection is not ACTIVE, follow the returned auth link to complete Segment authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. SEGMENT_TRACK - Send a single track event [Required]
6. userId: User identifier (required if no anonymousId)
7. anonymousId: Anonymous identifier (required if no userId)

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `segment`
3. If connection is not ACTIVE, follow the returned auth link to complete Segment authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Track Events

**When to use**: User wants to send event data to Segment for downstream destinations

**Tool sequence**:
1. `SEGMENT_TRACK` - Send a single track event [Required]

**Key parameters**:
- `userId`: User identifier (required if no `anonymousId`)
- `anonymousId`: Anonymous identifier (required if no `userId`)
- `event`: Event name (e.g., 'Order Completed', 'Button Clicked')
- `properties`: Object with event-specific properties
- `timestamp`: ISO 8601 timestamp (optional; defaults to server time)
- `context`: Object with contextual metadata (IP, user agent, etc.)

**Pitfalls**:
- At least one of `userId` or `anonymousId` is required
- `event` name is required and should follow consistent naming conventions
- Properties are freeform objects; ensure consistent schema across events
- Timestamp must be ISO 8601 format (e.g., '2024-01-15T10:30:00Z')
- Events are processed asynchronously; successful API response means accepted, not delivered

### 2. Identify Users

**When to use**: User wants to associate traits with a user profile in Segment

**Tool sequence**:
1. `SEGMENT_IDENTIFY` - Set user traits and identity [Required]

**Key parameters**:
- `userId`: User identifier (required if no `anonymousId`)
- `anonymousId`: Anonymous identifier
- `traits`: Object with user properties (email, name, plan, etc.)
- `timestamp`: ISO 8601 timestamp
- `context`: Contextual metadata

**Pitfalls**:
- At least one of `userId` or `anonymousId` is required
- Traits are merged with existing traits, not replaced
- To remove a trait, set it to `null`
- Identify calls should be made before track calls for new users
- Avoid sending PII in traits unless destinations are configured for it

### 3. Batch Operations

**When to use**: User wants to send multiple events, identifies, or other calls in a single request

**Tool sequence**:
1. `SEGMENT_BATCH` - Send multiple Segment calls in one request [Required]

**Key parameters**:
- `batch`: Array of message objects, each with:
  - `type`: Message type ('track', 'identify', 'group', 'page', 'alias')
  - `userId` / `anonymousId`: User identifier
  - Additional fields based on type (event, properties, traits, etc.)

**Pitfalls**:
- Each message in the batch must have a valid `type` field
- Maximum batch size limit applies; check schema for current limit
- All messages in a batch are processed independently; one failure does not affect others
- Each message must independently satisfy its type's requirements (e.g., track needs event name)
- Batch is the most efficient way to send multiple calls; prefer over individual calls

### 4. Group Users

**When to use**: User wants to associate a user with a company, team, or organization

**Tool sequence**:
1. `SEGMENT_GROUP` - Associate user with a group [Required]

**Key parameters**:
- `userId`: User identifier (required if no `anonymousId`)
- `anonymousId`: Anonymous identifier
- `groupId`: Group/organization identifier (required)
- `traits`: Object with group properties (name, industry, size, plan)
- `timestamp`: ISO 8601 timestamp

**Pitfalls**:
- `groupId` is required; it identifies the company or organization
- Group traits are merged with existing traits for that group
- A user can belong to multiple groups
- Group traits update the group profile, not the user profile

### 5. Track Page Views

**When to use**: User wants to record page view events in Segment

**Tool sequence**:
1. `SEGMENT_PAGE` - Send a page view event [Required]

**Key parameters**:
- `userId`: User identifier (required if no `anonymousId`)
- `anonymousId`: Anonymous identifier
- `name`: Page name (e.g., 'Home', 'Pricing', 'Dashboard')
- `category`: Page category (e.g., 'Docs', 'Marketing')
- `properties`: Object with page-specific properties (url, title, referrer)

**Pitfalls**:
- At least one of `userId` or `anonymousId` is required
- `name` and `category` are optional but recommended for proper analytics
- Standard properties include `url`, `title`, `referrer`, `path`, `search`
- Page calls are often automated; manual use is for server-side page tracking

### 6. Alias Users and Manage Sources

**When to use**: User wants to merge anonymous and identified users, or manage source configuration

**Tool sequence**:
1. `SEGMENT_ALIAS` - Link two user identities together [Optional]
2. `SEGMENT_LIST_SCHEMA_SETTINGS_IN_SOURCE` - View source schema settings [Optional]
3. `SEGMENT_UPDATE_SOURCE` - Update source configuration [Optional]

**Key parameters**:
- For ALIAS:
  - `userId`: New user identifier (the identified ID)
  - `previousId`: Old user identifier (the anonymous ID)
- For source operations:
  - `sourceId`: Source identifier

**Pitfalls**:
- ALIAS is a one-way operation; cannot be undone
- `previousId` is the anonymous/old ID, `userId` is the new/identified ID
- Not all destinations support alias calls; check destination documentation
- ALIAS should be called once when a user first identifies (e.g., signs up)
- Source updates may affect data collection; review changes carefully

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Segment connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `segment`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @segment-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @segment-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @segment-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @segment-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/segment-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@aws-compliance-checker-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-iam-best-practices-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-security-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@security-scanning-security-hardening-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| Track event | SEGMENT_TRACK | userId, event, properties |
| Identify user | SEGMENT_IDENTIFY | userId, traits |
| Batch calls | SEGMENT_BATCH | batch (array of messages) |
| Group user | SEGMENT_GROUP | userId, groupId, traits |
| Page view | SEGMENT_PAGE | userId, name, properties |
| Alias identity | SEGMENT_ALIAS | userId, previousId |
| Source schema | SEGMENT_LIST_SCHEMA_SETTINGS_IN_SOURCE | sourceId |
| Update source | SEGMENT_UPDATE_SOURCE | sourceId |
| Warehouses | SEGMENT_LIST_CONNECTED_WAREHOUSES_FROM_SOURCE | sourceId |

#### Imported: Common Patterns

### User Lifecycle

Standard Segment user lifecycle:
```
1. Anonymous user visits -> PAGE call with anonymousId
2. User interacts -> TRACK call with anonymousId
3. User signs up -> ALIAS (anonymousId -> userId), then IDENTIFY with traits
4. User takes action -> TRACK call with userId
5. User joins org -> GROUP call linking userId to groupId
```

### Batch Optimization

For bulk data ingestion:
```
1. Collect events in memory (array of message objects)
2. Each message includes type, userId/anonymousId, and type-specific fields
3. Call SEGMENT_BATCH with the collected messages
4. Check response for any individual message errors
```

### Naming Conventions

Segment recommends consistent event naming:
- **Events**: Use "Object Action" format (e.g., 'Order Completed', 'Article Viewed')
- **Properties**: Use snake_case (e.g., 'order_total', 'product_name')
- **Traits**: Use snake_case (e.g., 'first_name', 'plan_type')

#### Imported: Known Pitfalls

**Identity Resolution**:
- Always include `userId` or `anonymousId` on every call
- Use ALIAS only once per user identity merge
- Identify before tracking to ensure proper user association

**Data Quality**:
- Event names should be consistent across all sources
- Properties should follow a defined schema for downstream compatibility
- Avoid sending sensitive PII unless destinations are configured for it

**Rate Limits**:
- Use BATCH for bulk operations to stay within rate limits
- Individual calls are rate-limited per source
- Batch calls are more efficient and less likely to be throttled

**Response Parsing**:
- Successful responses indicate acceptance, not delivery to destinations
- Response data may be nested under `data` key
- Check for error fields in batch responses for individual message failures

**Timestamps**:
- Must be ISO 8601 format with timezone (e.g., '2024-01-15T10:30:00Z')
- Omitting timestamp uses server receive time
- Historical data imports should include explicit timestamps

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

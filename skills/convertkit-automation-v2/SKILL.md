---
name: convertkit-automation-v2
description: "ConvertKit (Kit) Automation via Rube MCP workflow skill. Use this skill when the user needs Automate ConvertKit (Kit) tasks via Rube MCP (Composio): manage subscribers, tags, broadcasts, and broadcast stats. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["convertkit-automation-v2", "convertkit-automation", "automate", "convertkit", "kit", "tasks", "via", "rube"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# ConvertKit (Kit) Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/convertkit-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# ConvertKit (Kit) Automation via Rube MCP Automate ConvertKit (now known as Kit) email marketing operations through Composio's Kit toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate ConvertKit (Kit) tasks via Rube MCP (Composio): manage subscribers, tags, broadcasts, and broadcast stats. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit kit
3. If connection is not ACTIVE, follow the returned auth link to complete Kit authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. KITLISTSUBSCRIBERS - List subscribers with filters and pagination [Required]
6. status: Filter by status ('active' or 'inactive')
7. email_address: Exact email to search for

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `kit`
3. If connection is not ACTIVE, follow the returned auth link to complete Kit authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Search Subscribers

**When to use**: User wants to browse, search, or filter email subscribers

**Tool sequence**:
1. `KIT_LIST_SUBSCRIBERS` - List subscribers with filters and pagination [Required]

**Key parameters**:
- `status`: Filter by status ('active' or 'inactive')
- `email_address`: Exact email to search for
- `created_after`/`created_before`: Date range filter (YYYY-MM-DD)
- `updated_after`/`updated_before`: Date range filter (YYYY-MM-DD)
- `sort_field`: Sort by 'id', 'cancelled_at', or 'updated_at'
- `sort_order`: 'asc' or 'desc'
- `per_page`: Results per page (min 1)
- `after`/`before`: Cursor strings for pagination
- `include_total_count`: Set to 'true' to get total subscriber count

**Pitfalls**:
- If `sort_field` is 'cancelled_at', the `status` must be set to 'cancelled'
- Date filters use YYYY-MM-DD format (no time component)
- `email_address` is an exact match; partial email search is not supported
- Pagination uses cursor-based approach with `after`/`before` cursor strings
- `include_total_count` is a string 'true', not a boolean

### 2. Manage Subscriber Tags

**When to use**: User wants to tag subscribers for segmentation

**Tool sequence**:
1. `KIT_LIST_SUBSCRIBERS` - Find subscriber ID by email [Prerequisite]
2. `KIT_TAG_SUBSCRIBER` - Associate a subscriber with a tag [Required]
3. `KIT_LIST_TAG_SUBSCRIBERS` - List subscribers for a specific tag [Optional]

**Key parameters for tagging**:
- `tag_id`: Numeric tag ID (required)
- `subscriber_id`: Numeric subscriber ID (required)

**Pitfalls**:
- Both `tag_id` and `subscriber_id` must be positive integers
- Tag IDs must reference existing tags; tags are created via the Kit web UI
- Tagging an already-tagged subscriber is idempotent (no error)
- Subscriber IDs are returned from LIST_SUBSCRIBERS; use `email_address` filter to find specific subscribers

### 3. Unsubscribe a Subscriber

**When to use**: User wants to unsubscribe a subscriber from all communications

**Tool sequence**:
1. `KIT_LIST_SUBSCRIBERS` - Find subscriber ID [Prerequisite]
2. `KIT_DELETE_SUBSCRIBER` - Unsubscribe the subscriber [Required]

**Key parameters**:
- `id`: Subscriber ID (required, positive integer)

**Pitfalls**:
- This permanently unsubscribes the subscriber from ALL email communications
- The subscriber's historical data is retained but they will no longer receive emails
- Operation is idempotent; unsubscribing an already-unsubscribed subscriber succeeds without error
- Returns empty response (HTTP 204 No Content) on success
- Subscriber ID must exist; non-existent IDs return 404

### 4. List and View Broadcasts

**When to use**: User wants to browse email broadcasts or get details of a specific one

**Tool sequence**:
1. `KIT_LIST_BROADCASTS` - List all broadcasts with pagination [Required]
2. `KIT_GET_BROADCAST` - Get detailed information for a specific broadcast [Optional]
3. `KIT_GET_BROADCAST_STATS` - Get performance statistics for a broadcast [Optional]

**Key parameters for listing**:
- `per_page`: Results per page (1-500)
- `after`/`before`: Cursor strings for pagination
- `include_total_count`: Set to 'true' for total count

**Key parameters for details**:
- `id`: Broadcast ID (required, positive integer)

**Pitfalls**:
- `per_page` max is 500 for broadcasts
- Broadcast stats are only available for sent broadcasts
- Draft broadcasts will not have stats
- Broadcast IDs are numeric integers

### 5. Delete a Broadcast

**When to use**: User wants to permanently remove a broadcast

**Tool sequence**:
1. `KIT_LIST_BROADCASTS` - Find the broadcast to delete [Prerequisite]
2. `KIT_GET_BROADCAST` - Verify it is the correct broadcast [Optional]
3. `KIT_DELETE_BROADCAST` - Permanently delete the broadcast [Required]

**Key parameters**:
- `id`: Broadcast ID (required)

**Pitfalls**:
- Deletion is permanent and cannot be undone
- Deleting a sent broadcast removes it but does not unsend the emails
- Confirm the broadcast ID before deleting

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Kit connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `kit`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @convertkit-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @convertkit-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @convertkit-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @convertkit-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/convertkit-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@comprehensive-review-pr-enhance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-use-agents-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@computer-vision-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@concise-planning-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List subscribers | KIT_LIST_SUBSCRIBERS | status, email_address, per_page |
| Tag subscriber | KIT_TAG_SUBSCRIBER | tag_id, subscriber_id |
| List tag subscribers | KIT_LIST_TAG_SUBSCRIBERS | tag_id |
| Unsubscribe | KIT_DELETE_SUBSCRIBER | id |
| List broadcasts | KIT_LIST_BROADCASTS | per_page, after |
| Get broadcast | KIT_GET_BROADCAST | id |
| Get broadcast stats | KIT_GET_BROADCAST_STATS | id |
| Delete broadcast | KIT_DELETE_BROADCAST | id |

#### Imported: Common Patterns

### Subscriber Lookup by Email

```
1. Call KIT_LIST_SUBSCRIBERS with email_address='user@example.com'
2. Extract subscriber ID from the response
3. Use ID for tagging, unsubscribing, or other operations
```

### Pagination

Kit uses cursor-based pagination:
- Check response for `after` cursor value
- Pass cursor as `after` parameter in next request
- Continue until no more cursor is returned
- Use `include_total_count: 'true'` to track progress

### Tag-Based Segmentation

```
1. Create tags in Kit web UI
2. Use KIT_TAG_SUBSCRIBER to assign tags to subscribers
3. Use KIT_LIST_TAG_SUBSCRIBERS to view subscribers per tag
```

#### Imported: Known Pitfalls

**ID Formats**:
- Subscriber IDs: positive integers (e.g., 3887204736)
- Tag IDs: positive integers
- Broadcast IDs: positive integers
- All IDs are numeric, not strings

**Status Values**:
- Subscriber statuses: 'active', 'inactive', 'cancelled'
- Some operations are restricted by status (e.g., sorting by cancelled_at requires status='cancelled')

**String vs Boolean Parameters**:
- `include_total_count` is a string 'true', not a boolean true
- `sort_order` is a string enum: 'asc' or 'desc'

**Rate Limits**:
- Kit API has per-account rate limits
- Implement backoff on 429 responses
- Bulk operations should be paced appropriately

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Cursor values are opaque strings; use exactly as returned

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: klaviyo-automation
description: "Klaviyo Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Klaviyo tasks via Rube MCP (Composio): manage email/SMS campaigns, inspect campaign messages, track tags, and monitor send jobs. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["klaviyo-automation", "automate", "klaviyo", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Klaviyo Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/klaviyo-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Klaviyo Automation via Rube MCP Automate Klaviyo email and SMS marketing operations through Composio's Klaviyo toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Klaviyo tasks via Rube MCP (Composio): manage email/SMS campaigns, inspect campaign messages, track tags, and monitor send jobs. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit klaviyo
3. If connection is not ACTIVE, follow the returned auth link to complete Klaviyo authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. KLAVIYOGETCAMPAIGNS - List campaigns with channel and status filters [Required]
6. channel: Campaign channel - 'email' or 'sms' (required by Klaviyo API)
7. filter: Additional filter string (e.g., equals(status,"draft"))

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `klaviyo`
3. If connection is not ACTIVE, follow the returned auth link to complete Klaviyo authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Filter Campaigns

**When to use**: User wants to browse, search, or filter marketing campaigns

**Tool sequence**:
1. `KLAVIYO_GET_CAMPAIGNS` - List campaigns with channel and status filters [Required]

**Key parameters**:
- `channel`: Campaign channel - 'email' or 'sms' (required by Klaviyo API)
- `filter`: Additional filter string (e.g., `equals(status,"draft")`)
- `sort`: Sort field with optional `-` prefix for descending (e.g., '-created_at', 'name')
- `page_cursor`: Pagination cursor for next page
- `include_archived`: Include archived campaigns (default: false)

**Pitfalls**:
- `channel` is required; omitting it can produce incomplete or unexpected results
- Pagination is mandatory for full coverage; a single call returns only one page (default ~10)
- Follow `page_cursor` until exhausted to get all campaigns
- Status filtering via `filter` (e.g., `equals(status,"draft")`) can return mixed statuses; always validate `data[].attributes.status` client-side
- Status strings are case-sensitive and can be compound (e.g., 'Cancelled: No Recipients')
- Response shape is nested: `response.data.data` with status at `data[].attributes.status`

### 2. Get Campaign Details

**When to use**: User wants detailed information about a specific campaign

**Tool sequence**:
1. `KLAVIYO_GET_CAMPAIGNS` - Find campaign to get its ID [Prerequisite]
2. `KLAVIYO_GET_CAMPAIGN` - Retrieve full campaign details [Required]

**Key parameters**:
- `campaign_id`: Campaign ID string (e.g., '01GDDKASAP8TKDDA2GRZDSVP4H')
- `include_messages`: Include campaign messages in response
- `include_tags`: Include tags in response

**Pitfalls**:
- Campaign IDs are alphanumeric strings, not numeric
- `include_messages` and `include_tags` add related data to the response via Klaviyo's include mechanism
- Campaign details include audiences, send strategy, tracking options, and scheduling info

### 3. Inspect Campaign Messages

**When to use**: User wants to view the email/SMS content of a campaign

**Tool sequence**:
1. `KLAVIYO_GET_CAMPAIGN` - Find campaign and its message IDs [Prerequisite]
2. `KLAVIYO_GET_CAMPAIGN_MESSAGE` - Get message content details [Required]

**Key parameters**:
- `id`: Message ID string
- `fields__campaign__message`: Sparse fieldset for message attributes (e.g., 'content.subject', 'content.from_email', 'content.body')
- `fields__campaign`: Sparse fieldset for campaign attributes
- `fields__template`: Sparse fieldset for template attributes
- `include`: Related resources to include ('campaign', 'template')

**Pitfalls**:
- Message IDs are separate from campaign IDs; extract from campaign response
- Sparse fieldset syntax uses dot notation for nested fields: 'content.subject', 'content.from_email'
- Email messages have content fields: subject, preview_text, from_email, from_label, reply_to_email
- SMS messages have content fields: body
- Including 'template' provides the HTML/text content of the email

### 4. Manage Campaign Tags

**When to use**: User wants to view tags associated with campaigns for organization

**Tool sequence**:
1. `KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS` - Get tag IDs for a campaign [Required]

**Key parameters**:
- `id`: Campaign ID string

**Pitfalls**:
- Returns only tag IDs, not tag names/details
- Tag IDs can be used with Klaviyo's tag endpoints for full details
- Rate limit: 3/s burst, 60/m steady (stricter than other endpoints)

### 5. Monitor Campaign Send Jobs

**When to use**: User wants to check the status of a campaign send operation

**Tool sequence**:
1. `KLAVIYO_GET_CAMPAIGN_SEND_JOB` - Check send job status [Required]

**Key parameters**:
- `id`: Send job ID

**Pitfalls**:
- Send job IDs are returned when a campaign send is initiated
- Job statuses indicate whether the send is queued, in progress, complete, or failed
- Rate limit: 10/s burst, 150/m steady

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Klaviyo connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `klaviyo`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @klaviyo-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @klaviyo-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @klaviyo-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @klaviyo-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/klaviyo-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@image-studio` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List campaigns | KLAVIYO_GET_CAMPAIGNS | channel, filter, sort, page_cursor |
| Get campaign details | KLAVIYO_GET_CAMPAIGN | campaign_id, include_messages, include_tags |
| Get campaign message | KLAVIYO_GET_CAMPAIGN_MESSAGE | id, fields__campaign__message |
| Get campaign tags | KLAVIYO_GET_CAMPAIGN_RELATIONSHIPS_TAGS | id |
| Get send job status | KLAVIYO_GET_CAMPAIGN_SEND_JOB | id |

#### Imported: Common Patterns

### Campaign Discovery Pattern

```
1. Call KLAVIYO_GET_CAMPAIGNS with channel='email'
2. Paginate through all results via page_cursor
3. Filter by status client-side for accuracy
4. Extract campaign IDs for detailed inspection
```

### Sparse Fieldset Pattern

Klaviyo supports sparse fieldsets to reduce response size:
```
fields__campaign__message=['content.subject', 'content.from_email', 'send_times']
fields__campaign=['name', 'status', 'send_time']
fields__template=['name', 'html', 'text']
```

### Pagination

- Klaviyo uses cursor-based pagination
- Check response for `page_cursor` in the pagination metadata
- Pass cursor as `page_cursor` in next request
- Default page size is ~10 campaigns
- Continue until no more cursor is returned

### Filter Syntax

```
- equals(status,"draft") - Campaigns in draft status
- equals(name,"Newsletter") - Campaign named "Newsletter"
- greater-than(created_at,"2024-01-01T00:00:00Z") - Created after date
```

#### Imported: Known Pitfalls

**API Version**:
- Klaviyo API uses versioned endpoints (e.g., v2024-07-15)
- Response schemas may change between API versions
- Tool responses follow the version configured in the Composio integration

**Response Nesting**:
- Data is nested: `response.data.data[].attributes`
- Campaign status at `data[].attributes.status`
- Mis-parsing the nesting yields empty or incorrect results
- Always navigate through the full path defensively

**Rate Limits**:
- Burst: 10/s (3/s for tag endpoints)
- Steady: 150/m (60/m for tag endpoints)
- Required scope: campaigns:read
- Implement backoff on 429 responses

**Status Values**:
- Status strings are case-sensitive
- Compound statuses exist (e.g., 'Cancelled: No Recipients')
- Server-side filtering may return mixed statuses; always validate client-side

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

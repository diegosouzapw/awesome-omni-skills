---
name: postmark-automation-v2
description: "Postmark Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Postmark email delivery tasks via Rube MCP (Composio): send templated emails, manage templates, monitor delivery stats and bounces. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["postmark-automation-v2", "postmark-automation", "automate", "postmark", "email", "delivery", "tasks", "via"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Postmark Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/postmark-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Postmark Automation via Rube MCP Automate Postmark transactional email operations through Composio's Postmark toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Postmark email delivery tasks via Rube MCP (Composio): send templated emails, manage templates, monitor delivery stats and bounces. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit postmark
3. If connection is not ACTIVE, follow the returned auth link to complete Postmark authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. POSTMARKLISTTEMPLATES - Find available templates and their IDs [Prerequisite]
6. POSTMARKVALIDATETEMPLATE - Validate template with model data before sending [Optional]
7. POSTMARKSENDBATCHWITHTEMPLATES - Send batch emails using a template [Required]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `postmark`
3. If connection is not ACTIVE, follow the returned auth link to complete Postmark authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Send Templated Batch Emails

**When to use**: User wants to send templated emails to multiple recipients in one call

**Tool sequence**:
1. `POSTMARK_LIST_TEMPLATES` - Find available templates and their IDs [Prerequisite]
2. `POSTMARK_VALIDATE_TEMPLATE` - Validate template with model data before sending [Optional]
3. `POSTMARK_SEND_BATCH_WITH_TEMPLATES` - Send batch emails using a template [Required]

**Key parameters**:
- `TemplateId` or `TemplateAlias`: Identifier for the template to use
- `Messages`: Array of message objects with `From`, `To`, `TemplateModel`
- `TemplateModel`: Key-value pairs matching template variables

**Pitfalls**:
- Maximum 500 messages per batch call
- Either `TemplateId` or `TemplateAlias` is required, not both
- `TemplateModel` keys must match template variable names exactly (case-sensitive)
- Sender address must be a verified Sender Signature or from a verified domain

### 2. Manage Email Templates

**When to use**: User wants to create, edit, or inspect email templates

**Tool sequence**:
1. `POSTMARK_LIST_TEMPLATES` - List all templates with IDs and names [Required]
2. `POSTMARK_GET_TEMPLATE` - Get full template details including HTML/text body [Optional]
3. `POSTMARK_EDIT_TEMPLATE` - Update template content or settings [Optional]
4. `POSTMARK_VALIDATE_TEMPLATE` - Test template rendering with sample data [Optional]

**Key parameters**:
- `TemplateId`: Numeric template ID for GET/EDIT operations
- `Name`: Template display name
- `Subject`: Email subject line (supports template variables)
- `HtmlBody`: HTML content of the template
- `TextBody`: Plain text fallback content
- `TemplateType`: 'Standard' or 'Layout'

**Pitfalls**:
- Template IDs are numeric integers, not strings
- Editing a template replaces the entire content; include all fields you want to keep
- Layout templates wrap Standard templates; changing a layout affects all linked templates
- Validate before sending to catch missing variables early

### 3. Monitor Delivery Statistics

**When to use**: User wants to check email delivery health, open/click rates, or outbound overview

**Tool sequence**:
1. `POSTMARK_GET_DELIVERY_STATS` - Get bounce counts by type [Required]
2. `POSTMARK_GET_OUTBOUND_OVERVIEW` - Get sent/opened/clicked/bounced summary [Required]
3. `POSTMARK_GET_TRACKED_EMAIL_COUNTS` - Get tracked email volume over time [Optional]

**Key parameters**:
- `fromdate`: Start date for filtering stats (YYYY-MM-DD)
- `todate`: End date for filtering stats (YYYY-MM-DD)
- `tag`: Filter stats by message tag
- `messagestreamid`: Filter by message stream (e.g., 'outbound', 'broadcast')

**Pitfalls**:
- Date parameters use YYYY-MM-DD format without time component
- Stats are aggregated; individual message tracking requires separate API calls
- `messagestreamid` defaults to all streams if not specified

### 4. Manage Bounces and Complaints

**When to use**: User wants to review bounced emails or spam complaints

**Tool sequence**:
1. `POSTMARK_GET_BOUNCES` - List bounced messages with details [Required]
2. `POSTMARK_GET_SPAM_COMPLAINTS` - List spam complaint records [Optional]
3. `POSTMARK_GET_DELIVERY_STATS` - Get bounce summary counts [Optional]

**Key parameters**:
- `count`: Number of records to return per page
- `offset`: Pagination offset for results
- `type`: Bounce type filter (e.g., 'HardBounce', 'SoftBounce', 'SpamNotification')
- `fromdate`/`todate`: Date range filters
- `emailFilter`: Filter by recipient email address

**Pitfalls**:
- Bounce types include: HardBounce, SoftBounce, SpamNotification, SpamComplaint, Transient, and others
- Hard bounces indicate permanent delivery failures; these addresses should be removed
- Spam complaints affect sender reputation; monitor regularly
- Pagination uses `count` and `offset`, not page tokens

### 5. Configure Server Settings

**When to use**: User wants to view or modify Postmark server configuration

**Tool sequence**:
1. `POSTMARK_GET_SERVER` - Retrieve current server settings [Required]
2. `POSTMARK_EDIT_SERVER` - Update server configuration [Optional]

**Key parameters**:
- `Name`: Server display name
- `SmtpApiActivated`: Enable/disable SMTP API access
- `BounceHookUrl`: Webhook URL for bounce notifications
- `InboundHookUrl`: Webhook URL for inbound email processing
- `TrackOpens`: Enable/disable open tracking
- `TrackLinks`: Link tracking mode ('None', 'HtmlAndText', 'HtmlOnly', 'TextOnly')

**Pitfalls**:
- Server edits affect all messages sent through that server
- Webhook URLs must be publicly accessible HTTPS endpoints
- Changing `SmtpApiActivated` affects SMTP relay access immediately
- Track settings apply to future messages only, not retroactively

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Postmark connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `postmark`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @postmark-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @postmark-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @postmark-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @postmark-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/postmark-automation`, fails to mention provenance, or does not use any copied source files at all.
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
| Send batch templated emails | POSTMARK_SEND_BATCH_WITH_TEMPLATES | Messages, TemplateId/TemplateAlias |
| List templates | POSTMARK_LIST_TEMPLATES | Count, Offset, TemplateType |
| Get template details | POSTMARK_GET_TEMPLATE | TemplateId |
| Edit template | POSTMARK_EDIT_TEMPLATE | TemplateId, Name, Subject, HtmlBody |
| Validate template | POSTMARK_VALIDATE_TEMPLATE | TemplateId, TemplateModel |
| Delivery stats | POSTMARK_GET_DELIVERY_STATS | (none or date filters) |
| Outbound overview | POSTMARK_GET_OUTBOUND_OVERVIEW | fromdate, todate, tag |
| Get bounces | POSTMARK_GET_BOUNCES | count, offset, type, emailFilter |
| Get spam complaints | POSTMARK_GET_SPAM_COMPLAINTS | count, offset, fromdate, todate |
| Tracked email counts | POSTMARK_GET_TRACKED_EMAIL_COUNTS | fromdate, todate, tag |
| Get server config | POSTMARK_GET_SERVER | (none) |
| Edit server config | POSTMARK_EDIT_SERVER | Name, TrackOpens, TrackLinks |

#### Imported: Common Patterns

### Template Variable Resolution

```
1. Call POSTMARK_GET_TEMPLATE with TemplateId
2. Inspect HtmlBody/TextBody for {{variable}} placeholders
3. Build TemplateModel dict with matching keys
4. Call POSTMARK_VALIDATE_TEMPLATE to verify rendering
```

### Pagination

- Set `count` for results per page (varies by endpoint)
- Use `offset` to skip previously fetched results
- Increment offset by count each page until results returned < count
- Total records may be returned in response metadata

#### Imported: Known Pitfalls

**Authentication**:
- Postmark uses server-level API tokens, not account-level
- Each server has its own token; ensure correct server context
- Sender addresses must be verified Sender Signatures or from verified domains

**Rate Limits**:
- Batch send limited to 500 messages per call
- API rate limits vary by endpoint; implement backoff on 429 responses

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Template IDs are always numeric integers

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

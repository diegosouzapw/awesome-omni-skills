---
name: brevo-automation
description: "Brevo Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Brevo (formerly Sendinblue) email marketing operations through Composio's Brevo toolkit via Rube MCP and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["brevo-automation", "automate", "brevo", "formerly", "sendinblue", "email", "marketing", "operations"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-14"
---

# Brevo Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/brevo-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Brevo Automation via Rube MCP Automate Brevo (formerly Sendinblue) email marketing operations through Composio's Brevo toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Brevo (formerly Sendinblue) email marketing operations through Composio's Brevo toolkit via Rube MCP.
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
2. Call RUBEMANAGECONNECTIONS with toolkit brevo
3. If connection is not ACTIVE, follow the returned auth link to complete Brevo authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. BREVOLISTEMAIL_CAMPAIGNS - List all campaigns with filters [Required]
6. BREVOUPDATEEMAIL_CAMPAIGN - Update campaign content or settings [Optional]
7. type: Campaign type ('classic' or 'trigger')

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `brevo`
3. If connection is not ACTIVE, follow the returned auth link to complete Brevo authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Email Campaigns

**When to use**: User wants to list, review, or update email campaigns

**Tool sequence**:
1. `BREVO_LIST_EMAIL_CAMPAIGNS` - List all campaigns with filters [Required]
2. `BREVO_UPDATE_EMAIL_CAMPAIGN` - Update campaign content or settings [Optional]

**Key parameters for listing**:
- `type`: Campaign type ('classic' or 'trigger')
- `status`: Campaign status ('suspended', 'archive', 'sent', 'queued', 'draft', 'inProcess', 'inReview')
- `startDate`/`endDate`: Date range filter (YYYY-MM-DDTHH:mm:ss.SSSZ format)
- `statistics`: Stats type to include ('globalStats', 'linksStats', 'statsByDomain')
- `limit`: Results per page (max 100, default 50)
- `offset`: Pagination offset
- `sort`: Sort order ('asc' or 'desc')
- `excludeHtmlContent`: Set `true` to reduce response size

**Key parameters for update**:
- `campaign_id`: Numeric campaign ID (required)
- `name`: Campaign name
- `subject`: Email subject line
- `htmlContent`: HTML email body (mutually exclusive with `htmlUrl`)
- `htmlUrl`: URL to HTML content
- `sender`: Sender object with `name`, `email`, or `id`
- `recipients`: Object with `listIds` and `exclusionListIds`
- `scheduledAt`: Scheduled send time (YYYY-MM-DDTHH:mm:ss.SSSZ)

**Pitfalls**:
- `startDate` and `endDate` are mutually required; provide both or neither
- Date filters only work when `status` is not passed or set to 'sent'
- `htmlContent` and `htmlUrl` are mutually exclusive
- Campaign `sender` email must be a verified sender in Brevo
- A/B testing fields (`subjectA`, `subjectB`, `splitRule`, `winnerCriteria`) require `abTesting: true`
- `scheduledAt` uses full ISO 8601 format with timezone

### 2. Create and Manage Email Templates

**When to use**: User wants to create, edit, list, or delete email templates

**Tool sequence**:
1. `BREVO_GET_ALL_EMAIL_TEMPLATES` - List all templates [Required]
2. `BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE` - Create a new template or update existing [Required]
3. `BREVO_DELETE_EMAIL_TEMPLATE` - Delete an inactive template [Optional]

**Key parameters for listing**:
- `templateStatus`: Filter active (`true`) or inactive (`false`) templates
- `limit`: Results per page (max 1000, default 50)
- `offset`: Pagination offset
- `sort`: Sort order ('asc' or 'desc')

**Key parameters for create/update**:
- `templateId`: Include to update; omit to create new
- `templateName`: Template display name (required for creation)
- `subject`: Email subject line (required for creation)
- `htmlContent`: HTML template body (min 10 characters; use this or `htmlUrl`)
- `sender`: Sender object with `name` and `email`, or `id` (required for creation)
- `replyTo`: Reply-to email address
- `isActive`: Activate or deactivate the template
- `tag`: Category tag for the template

**Pitfalls**:
- When `templateId` is provided, the tool updates; when omitted, it creates
- For creation, `templateName`, `subject`, and `sender` are required
- `htmlContent` must be at least 10 characters
- Template personalization uses `{{contact.ATTRIBUTE}}` syntax
- Only inactive templates can be deleted
- `htmlContent` and `htmlUrl` are mutually exclusive

### 3. Manage Senders

**When to use**: User wants to view authorized sender identities

**Tool sequence**:
1. `BREVO_GET_ALL_SENDERS` - List all verified senders [Required]

**Key parameters**: (none required)

**Pitfalls**:
- Senders must be verified before they can be used in campaigns or templates
- Sender verification is done through the Brevo web interface, not via API
- Sender IDs can be used in `sender.id` fields for campaigns and templates

### 4. Configure A/B Testing Campaigns

**When to use**: User wants to set up or modify A/B test settings on a campaign

**Tool sequence**:
1. `BREVO_LIST_EMAIL_CAMPAIGNS` - Find the target campaign [Prerequisite]
2. `BREVO_UPDATE_EMAIL_CAMPAIGN` - Configure A/B test settings [Required]

**Key parameters**:
- `campaign_id`: Campaign to configure
- `abTesting`: Set to `true` to enable A/B testing
- `subjectA`: Subject line for variant A
- `subjectB`: Subject line for variant B
- `splitRule`: Percentage split for the test (1-99)
- `winnerCriteria`: 'open' or 'click' for determining the winner
- `winnerDelay`: Hours to wait before selecting winner (1-168)

**Pitfalls**:
- A/B testing must be enabled (`abTesting: true`) before setting variant fields
- `splitRule` is the percentage of contacts that receive variant A
- `winnerDelay` defines how long to test before sending the winner to remaining contacts
- Only works with 'classic' campaign type

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Brevo connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `brevo`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @brevo-automation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @brevo-automation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @brevo-automation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @brevo-automation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/brevo-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-arizeaiobservabilityeval-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| List campaigns | BREVO_LIST_EMAIL_CAMPAIGNS | type, status, limit, offset |
| Update campaign | BREVO_UPDATE_EMAIL_CAMPAIGN | campaign_id, subject, htmlContent |
| List templates | BREVO_GET_ALL_EMAIL_TEMPLATES | templateStatus, limit, offset |
| Create template | BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE | templateName, subject, htmlContent, sender |
| Update template | BREVO_CREATE_OR_UPDATE_EMAIL_TEMPLATE | templateId, htmlContent |
| Delete template | BREVO_DELETE_EMAIL_TEMPLATE | templateId |
| List senders | BREVO_GET_ALL_SENDERS | (none) |

#### Imported: Common Patterns

### Campaign Lifecycle

```
1. Create campaign (status: draft)
2. Set recipients (listIds)
3. Configure content (htmlContent or htmlUrl)
4. Optionally schedule (scheduledAt)
5. Send or schedule via Brevo UI (API update can set scheduledAt)
```

### Pagination

- Use `limit` (page size) and `offset` (starting index)
- Default limit is 50; max varies by endpoint (100 for campaigns, 1000 for templates)
- Increment `offset` by `limit` each page
- Check `count` in response to determine total available

### Template Personalization

```
- First name: {{contact.FIRSTNAME}}
- Last name: {{contact.LASTNAME}}
- Custom attribute: {{contact.CUSTOM_ATTRIBUTE}}
- Mirror link: {{mirror}}
- Unsubscribe link: {{unsubscribe}}
```

#### Imported: Known Pitfalls

**Date Formats**:
- All dates use ISO 8601 with milliseconds: YYYY-MM-DDTHH:mm:ss.SSSZ
- Pass timezone in the date-time format for accurate results
- `startDate` and `endDate` must be used together

**Sender Verification**:
- All sender emails must be verified in Brevo before use
- Unverified senders cause campaign creation/update failures
- Use GET_ALL_SENDERS to check available verified senders

**Rate Limits**:
- Brevo API has rate limits per account plan
- Implement backoff on 429 responses
- Template operations have lower limits than read operations

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Campaign and template IDs are numeric integers

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

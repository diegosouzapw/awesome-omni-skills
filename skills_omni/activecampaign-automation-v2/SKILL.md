---
name: "activecampaign-automation-v2"
description: "ActiveCampaign Automation via Rube MCP workflow skill. Use this skill when the user needs Automate ActiveCampaign tasks via Rube MCP (Composio): manage contacts, tags, list subscriptions, automation enrollment, and tasks. Always search tools first for current schemas and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "activecampaign-automation-v2"
  - "activecampaign-automation"
  - "automate"
  - "activecampaign"
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
date_updated: "2026-04-18"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "activecampaign-automation-v2"
family_name: "ActiveCampaign Automation via Rube MCP"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/activecampaign-automation-v2"
upstream_skill: "skills/activecampaign-automation-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "71"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "activecampaign-automation-v2"
---

# ActiveCampaign Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/activecampaign-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# ActiveCampaign Automation via Rube MCP Automate ActiveCampaign CRM and marketing automation operations through Composio's ActiveCampaign toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate ActiveCampaign tasks via Rube MCP (Composio): manage contacts, tags, list subscriptions, automation enrollment, and tasks. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit active_campaign
3. If connection is not ACTIVE, follow the returned auth link to complete ActiveCampaign authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. ACTIVECAMPAIGNFIND_CONTACT - Search for an existing contact [Optional]
6. ACTIVECAMPAIGNCREATE_CONTACT - Create a new contact [Required]
7. email: Search by email address

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `active_campaign`
3. If connection is not ACTIVE, follow the returned auth link to complete ActiveCampaign authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Find Contacts

**When to use**: User wants to create new contacts or look up existing ones

**Tool sequence**:
1. `ACTIVE_CAMPAIGN_FIND_CONTACT` - Search for an existing contact [Optional]
2. `ACTIVE_CAMPAIGN_CREATE_CONTACT` - Create a new contact [Required]

**Key parameters for find**:
- `email`: Search by email address
- `id`: Search by ActiveCampaign contact ID
- `phone`: Search by phone number

**Key parameters for create**:
- `email`: Contact email address (required)
- `first_name`: Contact first name
- `last_name`: Contact last name
- `phone`: Contact phone number
- `organization_name`: Contact's organization
- `job_title`: Contact's job title
- `tags`: Comma-separated list of tags to apply

**Pitfalls**:
- `email` is the only required field for contact creation
- Phone search uses a general search parameter internally; it may return partial matches
- When combining `email` and `phone` in FIND_CONTACT, results are filtered client-side
- Tags provided during creation are applied immediately
- Creating a contact with an existing email may update the existing contact

### 2. Manage Contact Tags

**When to use**: User wants to add or remove tags from contacts

**Tool sequence**:
1. `ACTIVE_CAMPAIGN_FIND_CONTACT` - Find contact by email or ID [Prerequisite]
2. `ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG` - Add or remove tags [Required]

**Key parameters**:
- `action`: 'Add' or 'Remove' (required)
- `tags`: Tag names as comma-separated string or array of strings (required)
- `contact_id`: Contact ID (provide this or contact_email)
- `contact_email`: Contact email address (alternative to contact_id)

**Pitfalls**:
- `action` values are capitalized: 'Add' or 'Remove' (not lowercase)
- Tags can be a comma-separated string ('tag1, tag2') or an array (['tag1', 'tag2'])
- Either `contact_id` or `contact_email` must be provided; `contact_id` takes precedence
- Adding a tag that does not exist creates it automatically
- Removing a non-existent tag is a no-op (does not error)

### 3. Manage List Subscriptions

**When to use**: User wants to subscribe or unsubscribe contacts from lists

**Tool sequence**:
1. `ACTIVE_CAMPAIGN_FIND_CONTACT` - Find the contact [Prerequisite]
2. `ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION` - Subscribe or unsubscribe [Required]

**Key parameters**:
- `action`: 'subscribe' or 'unsubscribe' (required)
- `list_id`: Numeric list ID string (required)
- `email`: Contact email address (provide this or contact_id)
- `contact_id`: Numeric contact ID string (alternative to email)

**Pitfalls**:
- `action` values are lowercase: 'subscribe' or 'unsubscribe'
- `list_id` is a numeric string (e.g., '2'), not the list name
- List IDs can be retrieved via the GET /api/3/lists endpoint (not available as a Composio tool; use the ActiveCampaign UI)
- If both `email` and `contact_id` are provided, `contact_id` takes precedence
- Unsubscribing changes status to '2' (unsubscribed) but the relationship record persists

### 4. Add Contacts to Automations

**When to use**: User wants to enroll a contact in an automation workflow

**Tool sequence**:
1. `ACTIVE_CAMPAIGN_FIND_CONTACT` - Verify contact exists [Prerequisite]
2. `ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION` - Enroll contact in automation [Required]

**Key parameters**:
- `contact_email`: Email of the contact to enroll (required)
- `automation_id`: ID of the target automation (required)

**Pitfalls**:
- The contact must already exist in ActiveCampaign
- Automations can only be created through the ActiveCampaign UI, not via API
- `automation_id` must reference an existing, active automation
- The tool performs a two-step process: lookup contact by email, then enroll
- Automation IDs can be found in the ActiveCampaign UI or via GET /api/3/automations

### 5. Create Contact Tasks

**When to use**: User wants to create follow-up tasks associated with contacts

**Tool sequence**:
1. `ACTIVE_CAMPAIGN_FIND_CONTACT` - Find the contact to associate the task with [Prerequisite]
2. `ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK` - Create the task [Required]

**Key parameters**:
- `relid`: Contact ID to associate the task with (required)
- `duedate`: Due date in ISO 8601 format with timezone (required, e.g., '2025-01-15T14:30:00-05:00')
- `dealTasktype`: Task type ID based on available types (required)
- `title`: Task title
- `note`: Task description/content
- `assignee`: User ID to assign the task to
- `edate`: End date in ISO 8601 format (must be later than duedate)
- `status`: 0 for incomplete, 1 for complete

**Pitfalls**:
- `duedate` must be a valid ISO 8601 datetime with timezone offset; do NOT use placeholder values
- `edate` must be later than `duedate`
- `dealTasktype` is a string ID referencing task types configured in ActiveCampaign
- `relid` is the numeric contact ID, not the email address
- `assignee` is a user ID; resolve user names to IDs via the ActiveCampaign UI

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active ActiveCampaign connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `active_campaign`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @activecampaign-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @activecampaign-automation-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @activecampaign-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @activecampaign-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/activecampaign-automation`, fails to mention provenance, or does not use any copied source files at all.
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
| Find contact | ACTIVE_CAMPAIGN_FIND_CONTACT | email, id, phone |
| Create contact | ACTIVE_CAMPAIGN_CREATE_CONTACT | email, first_name, last_name, tags |
| Add/remove tags | ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG | action, tags, contact_email |
| Subscribe/unsubscribe | ACTIVE_CAMPAIGN_MANAGE_LIST_SUBSCRIPTION | action, list_id, email |
| Add to automation | ACTIVE_CAMPAIGN_ADD_CONTACT_TO_AUTOMATION | contact_email, automation_id |
| Create task | ACTIVE_CAMPAIGN_CREATE_CONTACT_TASK | relid, duedate, dealTasktype, title |

#### Imported: Common Patterns

### Contact Lookup Flow

```
1. Call ACTIVE_CAMPAIGN_FIND_CONTACT with email
2. If found, extract contact ID for subsequent operations
3. If not found, create contact with ACTIVE_CAMPAIGN_CREATE_CONTACT
4. Use contact ID for tags, subscriptions, or automations
```

### Bulk Contact Tagging

```
1. For each contact, call ACTIVE_CAMPAIGN_MANAGE_CONTACT_TAG
2. Use contact_email to avoid separate lookup calls
3. Batch with reasonable delays to respect rate limits
```

### ID Resolution

**Contact email -> Contact ID**:
```
1. Call ACTIVE_CAMPAIGN_FIND_CONTACT with email
2. Extract id from the response
```

#### Imported: Known Pitfalls

**Action Capitalization**:
- Tag actions: 'Add', 'Remove' (capitalized)
- Subscription actions: 'subscribe', 'unsubscribe' (lowercase)
- Mixing up capitalization causes errors

**ID Types**:
- Contact IDs: numeric strings (e.g., '123')
- List IDs: numeric strings
- Automation IDs: numeric strings
- All IDs should be passed as strings, not integers

**Automations**:
- Automations cannot be created via API; only enrollment is possible
- Automation must be active to accept new contacts
- Enrolling a contact already in the automation may have no effect

**Rate Limits**:
- ActiveCampaign API has rate limits per account
- Implement backoff on 429 responses
- Batch operations should be spaced appropriately

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Contact search may return multiple results; match by email for accuracy

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

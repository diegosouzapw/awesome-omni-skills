---
name: sendgrid-automation-v3
description: "SendGrid Automation via Rube MCP workflow skill. Use this skill when the user needs Automate SendGrid email delivery workflows including marketing campaigns (Single Sends), contact and list management, sender identity setup, and email analytics through Composio's SendGrid toolkit and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["sendgrid-automation-v3", "sendgrid-automation", "automate", "sendgrid", "email", "delivery", "workflows", "including"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SendGrid Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-bundle-revops-crm-automation/skills/sendgrid-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SendGrid Automation via Rube MCP Automate SendGrid email delivery workflows including marketing campaigns (Single Sends), contact and list management, sender identity setup, and email analytics through Composio's SendGrid toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate SendGrid email delivery workflows including marketing campaigns (Single Sends), contact and list management, sender identity setup, and email analytics through Composio's SendGrid toolkit.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Verify Rube MCP is available by confirming RUBESEARCHTOOLS responds
2. Call RUBEMANAGECONNECTIONS with toolkit sendgrid
3. If connection is not ACTIVE, follow the returned auth link to complete SendGrid API key authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. SENDGRIDRETRIEVEALL_LISTS - List available marketing lists to target [Prerequisite]
6. SENDGRIDCREATEA_LIST - Create a new list if needed [Optional]
7. SENDGRIDADDORUPDATEA_CONTACT - Add contacts to the list [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `sendgrid`
3. If connection is not ACTIVE, follow the returned auth link to complete SendGrid API key authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Send Marketing Campaigns (Single Sends)

**When to use**: User wants to create and send a marketing email campaign to a contact list or segment.

**Tool sequence**:
1. `SENDGRID_RETRIEVE_ALL_LISTS` - List available marketing lists to target [Prerequisite]
2. `SENDGRID_CREATE_A_LIST` - Create a new list if needed [Optional]
3. `SENDGRID_ADD_OR_UPDATE_A_CONTACT` - Add contacts to the list [Optional]
4. `SENDGRID_GET_ALL_SENDER_IDENTITIES` - Get verified sender ID [Prerequisite]
5. `SENDGRID_CREATE_SINGLE_SEND` - Create the campaign with content, sender, and recipients [Required]

**Key parameters for SENDGRID_CREATE_SINGLE_SEND**:
- `name`: Campaign name (required)
- `email__config__subject`: Email subject line
- `email__config__html__content`: HTML body content
- `email__config__plain__content`: Plain text version
- `email__config__sender__id`: Verified sender identity ID
- `email__config__design__id`: Use instead of html_content for pre-built designs
- `send__to__list__ids`: Array of list UUIDs to send to
- `send__to__segment__ids`: Array of segment UUIDs
- `send__to__all`: true to send to all contacts
- `email__config__suppression__group__id` or `email__config__custom__unsubscribe__url`: One required for compliance

**Pitfalls**:
- Setting `send_at` on CREATE does NOT schedule the send; it only prepopulates the UI date; use the Schedule endpoint separately
- `send_at: "now"` is only valid with the Schedule endpoint, not CREATE
- Must provide either `suppression_group_id` or `custom_unsubscribe_url` for unsubscribe compliance
- Sender must be verified before use; check with `SENDGRID_GET_ALL_SENDER_IDENTITIES`
- Nested params use double-underscore notation (e.g., `email__config__subject`)

### 2. Manage Contacts and Lists

**When to use**: User wants to create contact lists, add/update contacts, search for contacts, or remove contacts from lists.

**Tool sequence**:
1. `SENDGRID_RETRIEVE_ALL_LISTS` - List all marketing lists [Required]
2. `SENDGRID_CREATE_A_LIST` - Create a new contact list [Optional]
3. `SENDGRID_GET_A_LIST_BY_ID` - Get list details and sample contacts [Optional]
4. `SENDGRID_ADD_OR_UPDATE_A_CONTACT` - Upsert contacts with list association [Required]
5. `SENDGRID_GET_CONTACTS_BY_EMAILS` - Look up contacts by email [Optional]
6. `SENDGRID_GET_CONTACTS_BY_IDENTIFIERS` - Look up contacts by email, phone, or external ID [Optional]
7. `SENDGRID_GET_LIST_CONTACT_COUNT` - Verify contact count after operations [Optional]
8. `SENDGRID_REMOVE_CONTACTS_FROM_A_LIST` - Remove contacts from a list without deleting [Optional]
9. `SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS` - Delete an entire list [Optional]
10. `SENDGRID_IMPORT_CONTACTS` - Bulk import from CSV [Optional]

**Key parameters for SENDGRID_ADD_OR_UPDATE_A_CONTACT**:
- `contacts`: Array of contact objects (max 30,000 or 6MB), each with at least one identifier: `email`, `phone_number_id`, `external_id`, or `anonymous_id` (required)
- `list_ids`: Array of list UUID strings to associate contacts with

**Pitfalls**:
- `SENDGRID_ADD_OR_UPDATE_A_CONTACT` is asynchronous; returns 202 with `job_id`; contacts may take 10-30 seconds to appear
- List IDs are UUIDs (e.g., "ca7a3796-e8a8-4029-9ccb-df8937940562"), not integers
- List names must be unique; duplicate names cause 400 errors
- `SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST` uses the legacy API; prefer `SENDGRID_ADD_OR_UPDATE_A_CONTACT` with `list_ids`
- `SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS` is irreversible; require explicit user confirmation
- Email addresses are automatically lowercased by SendGrid

### 3. Manage Sender Identities

**When to use**: User wants to set up or view sender identities (From addresses) for sending emails.

**Tool sequence**:
1. `SENDGRID_GET_ALL_SENDER_IDENTITIES` - List all existing sender identities [Required]
2. `SENDGRID_CREATE_A_SENDER_IDENTITY` - Create a new sender identity [Optional]
3. `SENDGRID_VIEW_A_SENDER_IDENTITY` - View details for a specific sender [Optional]
4. `SENDGRID_UPDATE_A_SENDER_IDENTITY` - Update sender details [Optional]
5. `SENDGRID_CREATE_VERIFIED_SENDER_REQUEST` - Create and verify a new sender [Optional]
6. `SENDGRID_AUTHENTICATE_A_DOMAIN` - Set up domain authentication for auto-verification [Optional]

**Key parameters for SENDGRID_CREATE_A_SENDER_IDENTITY**:
- `from__email`: From email address (required)
- `from__name`: Display name (required)
- `reply__to__email`: Reply-to address (required)
- `nickname`: Internal identifier (required)
- `address`, `city`, `country`: Physical address for CAN-SPAM compliance (required)

**Pitfalls**:
- New senders must be verified before use; if domain is not authenticated, a verification email is sent
- Up to 100 unique sender identities per account
- Avoid using domains with strict DMARC policies (gmail.com, yahoo.com) as from addresses
- `SENDGRID_CREATE_VERIFIED_SENDER_REQUEST` sends a verification email; sender is unusable until verified

### 4. View Email Statistics and Activity

**When to use**: User wants to review email delivery stats, bounce rates, open/click metrics, or message activity.

**Tool sequence**:
1. `SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS` - Get account-wide delivery metrics [Required]
2. `SENDGRID_GET_ALL_CATEGORIES` - Discover available categories for filtering [Optional]
3. `SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES` - Get stats broken down by category [Optional]
4. `SENDGRID_FILTER_ALL_MESSAGES` - Search email activity feed by recipient, status, or date [Optional]
5. `SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID` - Get detailed events for a specific message [Optional]
6. `SENDGRID_REQUEST_CSV` - Export activity data as CSV for large datasets [Optional]
7. `SENDGRID_DOWNLOAD_CSV` - Download the exported CSV file [Optional]

**Key parameters for SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS**:
- `start_date`: Start date YYYY-MM-DD (required)
- `end_date`: End date YYYY-MM-DD
- `aggregated_by`: "day", "week", or "month"
- `limit` / `offset`: Pagination (default 500)

**Key parameters for SENDGRID_FILTER_ALL_MESSAGES**:
- `query`: SQL-like query string, e.g., `status="delivered"`, `to_email="user@example.com"`, date ranges with `BETWEEN TIMESTAMP`
- `limit`: 1-1000 (default 10)

**Pitfalls**:
- `SENDGRID_FILTER_ALL_MESSAGES` requires the "30 Days Additional Email Activity History" paid add-on; returns 403 without it
- Global statistics are nested under `details[].stats[0].metrics`, not a flat structure
- Category statistics are only available for the previous 13 months
- Maximum 10 categories per request in `SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES`
- CSV export is limited to one request per 12 hours; link expires after 3 days

### 5. Manage Suppressions

**When to use**: User wants to check or manage unsubscribe groups for email compliance.

**Tool sequence**:
1. `SENDGRID_GET_SUPPRESSION_GROUPS` - List all suppression groups [Required]
2. `SENDGRID_RETRIEVE_ALL_SUPPRESSION_GROUPS_FOR_AN_EMAIL_ADDRESS` - Check suppression status for a specific email [Optional]

**Pitfalls**:
- Suppressed addresses remain undeliverable even if present on marketing lists
- Campaign send counts may be lower than list counts due to suppressions

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active SendGrid connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `sendgrid`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sendgrid-automation-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/sendgrid-automation-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/sendgrid-automation-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @sendgrid-automation-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-revops-crm-automation/skills/sendgrid-automation`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Quick Reference

| Task | Tool Slug | Key Params |
|------|-----------|------------|
| List marketing lists | `SENDGRID_RETRIEVE_ALL_LISTS` | `page_size`, `page_token` |
| Create list | `SENDGRID_CREATE_A_LIST` | `name` |
| Get list by ID | `SENDGRID_GET_A_LIST_BY_ID` | `id` |
| Get list count | `SENDGRID_GET_LIST_CONTACT_COUNT` | `id` |
| Add/update contacts | `SENDGRID_ADD_OR_UPDATE_A_CONTACT` | `contacts`, `list_ids` |
| Search contacts by email | `SENDGRID_GET_CONTACTS_BY_EMAILS` | `emails` |
| Search by identifiers | `SENDGRID_GET_CONTACTS_BY_IDENTIFIERS` | `identifier_type`, `identifiers` |
| Remove from list | `SENDGRID_REMOVE_CONTACTS_FROM_A_LIST` | `id`, `contact_ids` |
| Delete list | `SENDGRID_REMOVE_LIST_AND_OPTIONAL_CONTACTS` | `id`, `delete_contacts` |
| Import contacts CSV | `SENDGRID_IMPORT_CONTACTS` | field mappings |
| Create Single Send | `SENDGRID_CREATE_SINGLE_SEND` | `name`, `email__config__*`, `send__to__list__ids` |
| List sender identities | `SENDGRID_GET_ALL_SENDER_IDENTITIES` | (none) |
| Create sender | `SENDGRID_CREATE_A_SENDER_IDENTITY` | `from__email`, `from__name`, `address` |
| Verify sender | `SENDGRID_CREATE_VERIFIED_SENDER_REQUEST` | `from_email`, `nickname`, `address` |
| Authenticate domain | `SENDGRID_AUTHENTICATE_A_DOMAIN` | `domain` |
| Global email stats | `SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS` | `start_date`, `aggregated_by` |
| Category stats | `SENDGRID_RETRIEVE_EMAIL_STATISTICS_FOR_CATEGORIES` | `start_date`, `categories` |
| Filter email activity | `SENDGRID_FILTER_ALL_MESSAGES` | `query`, `limit` |
| Message details | `SENDGRID_FILTER_MESSAGES_BY_MESSAGE_ID` | `msg_id` |
| Export CSV | `SENDGRID_REQUEST_CSV` | `query` |
| Download CSV | `SENDGRID_DOWNLOAD_CSV` | `download_uuid` |
| List categories | `SENDGRID_GET_ALL_CATEGORIES` | (none) |
| Suppression groups | `SENDGRID_GET_SUPPRESSION_GROUPS` | (none) |
| Get template | `SENDGRID_RETRIEVE_A_SINGLE_TRANSACTIONAL_TEMPLATE` | `template_id` |
| Duplicate template | `SENDGRID_DUPLICATE_A_TRANSACTIONAL_TEMPLATE` | `template_id`, `name` |

#### Imported: Common Patterns

### ID Resolution
Always resolve names to IDs before operations:
- **List name -> list_id**: `SENDGRID_RETRIEVE_ALL_LISTS` and match by name
- **Sender name -> sender_id**: `SENDGRID_GET_ALL_SENDER_IDENTITIES` and match
- **Contact email -> contact_id**: `SENDGRID_GET_CONTACTS_BY_EMAILS` with email array
- **Template name -> template_id**: Use the SendGrid UI or template endpoints

### Pagination
- `SENDGRID_RETRIEVE_ALL_LISTS`: Token-based with `page_token` and `page_size` (max 1000)
- `SENDGRID_RETRIEVE_GLOBAL_EMAIL_STATISTICS`: Offset-based with `limit` (max 500) and `offset`
- Always paginate list retrieval to avoid missing existing lists

### Async Operations
Contact operations (`ADD_OR_UPDATE_A_CONTACT`, `IMPORT_CONTACTS`) are asynchronous:
- Returns 202 with a `job_id`
- Wait 10-30 seconds before verifying with `GET_CONTACTS_BY_EMAILS`
- Use `GET_LIST_CONTACT_COUNT` to confirm list growth

#### Imported: Known Pitfalls

### ID Formats
- Marketing list IDs are UUIDs (e.g., "ca7a3796-e8a8-4029-9ccb-df8937940562")
- Legacy list IDs are integers; do not mix with Marketing API endpoints
- Sender identity IDs are integers
- Template IDs: Dynamic templates start with "d-", legacy templates are UUIDs
- Contact IDs are UUIDs

### Rate Limits
- SendGrid may return HTTP 429; respect `Retry-After` headers
- CSV export limited to one request per 12 hours
- Bulk contact upsert max: 30,000 contacts or 6MB per request

### Parameter Quirks
- Nested params use double-underscore: `email__config__subject`, `from__email`
- `send_at` on CREATE_SINGLE_SEND only sets a UI default, does NOT schedule
- `SENDGRID_ADD_A_SINGLE_RECIPIENT_TO_A_LIST` uses legacy API; `recipient_id` is Base64-encoded lowercase email
- `SENDGRID_RETRIEVE_ALL_LISTS` and `SENDGRID_GET_ALL_LISTS` both exist; prefer RETRIEVE_ALL_LISTS for Marketing API
- Contact adds are async (202); always verify after a delay

### Legacy vs Marketing API
- Some tools use the legacy Contact Database API (`/v3/contactdb/`) which may return 403 on newer accounts
- Prefer Marketing API tools: `SENDGRID_ADD_OR_UPDATE_A_CONTACT`, `SENDGRID_RETRIEVE_ALL_LISTS`, `SENDGRID_CREATE_SINGLE_SEND`

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

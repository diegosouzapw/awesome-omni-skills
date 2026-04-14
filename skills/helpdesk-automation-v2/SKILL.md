---
name: helpdesk-automation-v2
description: "HelpDesk Automation via Rube MCP workflow skill. Use this skill when the user needs Automate HelpDesk tasks via Rube MCP (Composio): list tickets, manage views, use canned responses, and configure custom fields. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["helpdesk-automation-v2", "helpdesk-automation", "automate", "helpdesk", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# HelpDesk Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/helpdesk-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# HelpDesk Automation via Rube MCP Automate HelpDesk ticketing operations through Composio's HelpDesk toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate HelpDesk tasks via Rube MCP (Composio): list tickets, manage views, use canned responses, and configure custom fields. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit helpdesk
3. If connection is not ACTIVE, follow the returned auth link to complete HelpDesk authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. HELPDESKLISTTICKETS - List tickets with sorting and pagination [Required]
6. silo: Ticket folder - 'tickets', 'archive', 'trash', or 'spam' (default: 'tickets')
7. sortBy: Sort field - 'createdAt', 'updatedAt', or 'lastMessageAt' (default: 'createdAt')

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `helpdesk`
3. If connection is not ACTIVE, follow the returned auth link to complete HelpDesk authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. List and Browse Tickets

**When to use**: User wants to retrieve, browse, or paginate through support tickets

**Tool sequence**:
1. `HELPDESK_LIST_TICKETS` - List tickets with sorting and pagination [Required]

**Key parameters**:
- `silo`: Ticket folder - 'tickets', 'archive', 'trash', or 'spam' (default: 'tickets')
- `sortBy`: Sort field - 'createdAt', 'updatedAt', or 'lastMessageAt' (default: 'createdAt')
- `order`: Sort direction - 'asc' or 'desc' (default: 'desc')
- `pageSize`: Results per page, 1-100 (default: 20)
- `next.value`: Timestamp cursor for forward pagination
- `next.ID`: ID cursor for forward pagination
- `prev.value`: Timestamp cursor for backward pagination
- `prev.ID`: ID cursor for backward pagination

**Pitfalls**:
- Pagination uses cursor-based approach with timestamp + ID pairs
- Forward pagination requires both `next.value` and `next.ID` from previous response
- Backward pagination requires both `prev.value` and `prev.ID`
- `silo` determines which folder to list from; default is active tickets
- `pageSize` max is 100; default is 20
- Archived and trashed tickets are in separate silos

### 2. Manage Ticket Views

**When to use**: User wants to see saved agent views for organizing tickets

**Tool sequence**:
1. `HELPDESK_LIST_VIEWS` - List all agent views [Required]

**Key parameters**: (none required)

**Pitfalls**:
- Views are predefined saved filters configured by agents in the HelpDesk UI
- View definitions include filter criteria that can be used to understand ticket organization
- Views cannot be created or modified via API; they are managed in the HelpDesk UI

### 3. Use Canned Responses

**When to use**: User wants to list available canned (template) responses for tickets

**Tool sequence**:
1. `HELPDESK_LIST_CANNED_RESPONSES` - Retrieve all predefined reply templates [Required]

**Key parameters**: (none required)

**Pitfalls**:
- Canned responses are predefined templates for common replies
- They may include placeholder variables that need to be filled in
- Canned responses are managed through the HelpDesk UI
- Response content may include HTML formatting

### 4. Inspect Custom Fields

**When to use**: User wants to view custom field definitions for the account

**Tool sequence**:
1. `HELPDESK_LIST_CUSTOM_FIELDS` - List all custom field definitions [Required]

**Key parameters**: (none required)

**Pitfalls**:
- Custom fields extend the default ticket schema with organization-specific data
- Field definitions include field type, name, and validation rules
- Custom fields are configured in the HelpDesk admin panel
- Field values appear on tickets when the field has been populated

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active HelpDesk connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `helpdesk`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @helpdesk-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/helpdesk-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/helpdesk-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @helpdesk-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/helpdesk-automation`, fails to mention provenance, or does not use the support pack at all.
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
| List tickets | HELPDESK_LIST_TICKETS | silo, sortBy, order, pageSize |
| List views | HELPDESK_LIST_VIEWS | (none) |
| List canned responses | HELPDESK_LIST_CANNED_RESPONSES | (none) |
| List custom fields | HELPDESK_LIST_CUSTOM_FIELDS | (none) |

#### Imported: Common Patterns

### Ticket Browsing Pattern

```
1. Call HELPDESK_LIST_TICKETS with desired silo and sortBy
2. Process the returned page of tickets
3. Extract next.value and next.ID from the response
4. Call HELPDESK_LIST_TICKETS with those cursor values for next page
5. Continue until no more cursor values are returned
```

### Ticket Folder Navigation

```
Active tickets:  silo='tickets'
Archived:        silo='archive'
Trashed:         silo='trash'
Spam:            silo='spam'
```

### Cursor-Based Pagination

```
Forward pagination:
  - Use next.value (timestamp) and next.ID from response
  - Pass as next.value and next.ID parameters in next call

Backward pagination:
  - Use prev.value (timestamp) and prev.ID from response
  - Pass as prev.value and prev.ID parameters in next call
```

#### Imported: Known Pitfalls

**Cursor Pagination**:
- Both timestamp and ID are required for cursor navigation
- Cursor values are timestamps in ISO 8601 date-time format
- Mixing forward and backward cursors in the same request is undefined behavior

**Silo Filtering**:
- Tickets are physically separated into silos (folders)
- Moving tickets between silos is done in the HelpDesk UI
- Each silo query is independent; there is no cross-silo search

**Read-Only Operations**:
- Current Composio toolkit provides list/read operations
- Ticket creation, update, and reply operations may require additional tools
- Check RUBE_SEARCH_TOOLS for any newly available tools

**Rate Limits**:
- HelpDesk API has per-account rate limits
- Implement backoff on 429 responses
- Keep page sizes reasonable to avoid timeouts

**Response Parsing**:
- Response data may be nested under `data` or `data.data`
- Parse defensively with fallback patterns
- Ticket IDs are strings

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

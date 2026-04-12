---
name: salesforce-automation-v2
description: "Salesforce Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Salesforce tasks via Rube MCP (Composio): leads, contacts, accounts, opportunities, SOQL queries. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: business
tags: ["salesforce-automation-v2", "salesforce-automation", "automate", "salesforce", "tasks", "via", "rube", "mcp"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Salesforce Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/salesforce-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Salesforce Automation via Rube MCP Automate Salesforce CRM operations through Composio's Salesforce toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Salesforce tasks via Rube MCP (Composio): leads, contacts, accounts, opportunities, SOQL queries. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit salesforce
3. If connection is not ACTIVE, follow the returned auth link to complete Salesforce OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. SALESFORCESEARCHLEADS - Search leads by criteria [Optional]
6. SALESFORCELISTLEADS - List all leads [Optional]
7. SALESFORCECREATELEAD - Create a new lead [Optional]

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `salesforce`
3. If connection is not ACTIVE, follow the returned auth link to complete Salesforce OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Manage Leads

**When to use**: User wants to create, search, update, or list leads

**Tool sequence**:
1. `SALESFORCE_SEARCH_LEADS` - Search leads by criteria [Optional]
2. `SALESFORCE_LIST_LEADS` - List all leads [Optional]
3. `SALESFORCE_CREATE_LEAD` - Create a new lead [Optional]
4. `SALESFORCE_UPDATE_LEAD` - Update lead fields [Optional]
5. `SALESFORCE_ADD_LEAD_TO_CAMPAIGN` - Add lead to campaign [Optional]
6. `SALESFORCE_APPLY_LEAD_ASSIGNMENT_RULES` - Apply assignment rules [Optional]

**Key parameters**:
- `LastName`: Required for lead creation
- `Company`: Required for lead creation
- `Email`, `Phone`, `Title`: Common lead fields
- `lead_id`: Lead ID for updates
- `campaign_id`: Campaign ID for campaign operations

**Pitfalls**:
- LastName and Company are required fields for lead creation
- Lead IDs are 15 or 18 character Salesforce IDs

### 2. Manage Contacts and Accounts

**When to use**: User wants to manage contacts and their associated accounts

**Tool sequence**:
1. `SALESFORCE_SEARCH_CONTACTS` - Search contacts [Optional]
2. `SALESFORCE_LIST_CONTACTS` - List contacts [Optional]
3. `SALESFORCE_CREATE_CONTACT` - Create a new contact [Optional]
4. `SALESFORCE_SEARCH_ACCOUNTS` - Search accounts [Optional]
5. `SALESFORCE_CREATE_ACCOUNT` - Create a new account [Optional]
6. `SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT` - Link contact to account [Optional]

**Key parameters**:
- `LastName`: Required for contact creation
- `Name`: Account name for creation
- `AccountId`: Account ID to associate with contact
- `contact_id`, `account_id`: IDs for association

**Pitfalls**:
- Contact requires at least LastName
- Account association requires both valid contact and account IDs

### 3. Manage Opportunities

**When to use**: User wants to track and manage sales opportunities

**Tool sequence**:
1. `SALESFORCE_SEARCH_OPPORTUNITIES` - Search opportunities [Optional]
2. `SALESFORCE_LIST_OPPORTUNITIES` - List all opportunities [Optional]
3. `SALESFORCE_GET_OPPORTUNITY` - Get opportunity details [Optional]
4. `SALESFORCE_CREATE_OPPORTUNITY` - Create new opportunity [Optional]
5. `SALESFORCE_RETRIEVE_OPPORTUNITIES_DATA` - Retrieve opportunity data [Optional]

**Key parameters**:
- `Name`: Opportunity name (required)
- `StageName`: Sales stage (required)
- `CloseDate`: Expected close date (required)
- `Amount`: Deal value
- `AccountId`: Associated account

**Pitfalls**:
- Name, StageName, and CloseDate are required for creation
- Stage names must match exactly what is configured in Salesforce

### 4. Run SOQL Queries

**When to use**: User wants to query Salesforce data with custom SOQL

**Tool sequence**:
1. `SALESFORCE_RUN_SOQL_QUERY` / `SALESFORCE_QUERY` - Execute SOQL [Required]

**Key parameters**:
- `query`: SOQL query string

**Pitfalls**:
- SOQL syntax differs from SQL; uses Salesforce object and field API names
- Field API names may differ from display labels (e.g., `Account.Name` not `Account Name`)
- Results are paginated for large datasets

### 5. Manage Tasks

**When to use**: User wants to create, search, update, or complete tasks

**Tool sequence**:
1. `SALESFORCE_SEARCH_TASKS` - Search tasks [Optional]
2. `SALESFORCE_UPDATE_TASK` - Update task fields [Optional]
3. `SALESFORCE_COMPLETE_TASK` - Mark task as complete [Optional]

**Key parameters**:
- `task_id`: Task ID for updates
- `Status`: Task status value
- `Subject`: Task subject

**Pitfalls**:
- Task status values must match picklist options in Salesforce

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Salesforce connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `salesforce`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @salesforce-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/salesforce-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/salesforce-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @salesforce-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/salesforce-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Create lead | SALESFORCE_CREATE_LEAD | LastName, Company |
| Search leads | SALESFORCE_SEARCH_LEADS | query |
| List leads | SALESFORCE_LIST_LEADS | (filters) |
| Update lead | SALESFORCE_UPDATE_LEAD | lead_id, fields |
| Create contact | SALESFORCE_CREATE_CONTACT | LastName |
| Search contacts | SALESFORCE_SEARCH_CONTACTS | query |
| Create account | SALESFORCE_CREATE_ACCOUNT | Name |
| Search accounts | SALESFORCE_SEARCH_ACCOUNTS | query |
| Link contact | SALESFORCE_ASSOCIATE_CONTACT_TO_ACCOUNT | contact_id, account_id |
| Create opportunity | SALESFORCE_CREATE_OPPORTUNITY | Name, StageName, CloseDate |
| Get opportunity | SALESFORCE_GET_OPPORTUNITY | opportunity_id |
| Search opportunities | SALESFORCE_SEARCH_OPPORTUNITIES | query |
| Run SOQL | SALESFORCE_RUN_SOQL_QUERY | query |
| Query | SALESFORCE_QUERY | query |
| Search tasks | SALESFORCE_SEARCH_TASKS | query |
| Update task | SALESFORCE_UPDATE_TASK | task_id, fields |
| Complete task | SALESFORCE_COMPLETE_TASK | task_id |
| Get user info | SALESFORCE_GET_USER_INFO | (none) |
| Custom objects | SALESFORCE_GET_ALL_CUSTOM_OBJECTS | (none) |
| Create record | SALESFORCE_CREATE_A_RECORD | object_type, fields |
| Transfer ownership | SALESFORCE_MASS_TRANSFER_OWNERSHIP | records, new_owner |

#### Imported: Common Patterns

### SOQL Syntax

**Basic query**:
```
SELECT Id, Name, Email FROM Contact WHERE LastName = 'Smith'
```

**With relationships**:
```
SELECT Id, Name, Account.Name FROM Contact WHERE Account.Industry = 'Technology'
```

**Date filtering**:
```
SELECT Id, Name FROM Lead WHERE CreatedDate = TODAY
SELECT Id, Name FROM Opportunity WHERE CloseDate = NEXT_MONTH
```

### Pagination

- SOQL queries with large results return pagination tokens
- Use `SALESFORCE_QUERY` with nextRecordsUrl for pagination
- Check `done` field in response; if false, continue paging

#### Imported: Known Pitfalls

**Field API Names**:
- Always use API names, not display labels
- Custom fields end with `__c` suffix
- Use SALESFORCE_GET_ALL_CUSTOM_OBJECTS to discover custom objects

**ID Formats**:
- Salesforce IDs are 15 (case-sensitive) or 18 (case-insensitive) characters
- Both formats are accepted in most operations

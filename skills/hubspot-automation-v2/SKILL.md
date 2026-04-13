---
name: hubspot-automation-v2
description: "HubSpot CRM Automation via Rube MCP workflow skill. Use this skill when the user needs Automate HubSpot CRM operations (contacts, companies, deals, tickets, properties) via Rube MCP using Composio integration and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["hubspot-automation-v2", "hubspot-automation", "automate", "hubspot", "crm", "operations", "contacts", "companies"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# HubSpot CRM Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hubspot-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# HubSpot CRM Automation via Rube MCP Automate HubSpot CRM workflows including contact/company management, deal pipeline tracking, ticket search, and custom property creation through Composio's HubSpot toolkit.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate HubSpot CRM operations (contacts, companies, deals, tickets, properties) via Rube MCP using Composio integration.
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
2. Call RUBEMANAGECONNECTIONS with toolkit hubspot
3. If connection is not ACTIVE, follow the returned auth link to complete HubSpot OAuth
4. Confirm connection status shows ACTIVE before running any workflows
5. HUBSPOTGETACCOUNT_INFO - Verify connection and permissions (Prerequisite)
6. HUBSPOTSEARCHCONTACTSBYCRITERIA - Search for existing contacts to avoid duplicates (Prerequisite)
7. HUBSPOTREADACRMPROPERTYBYNAME - Check property metadata for constrained values (Optional)

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.

1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `hubspot`
3. If connection is not ACTIVE, follow the returned auth link to complete HubSpot OAuth
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Create and Manage Contacts

**When to use**: User wants to create new contacts or update existing ones in HubSpot CRM

**Tool sequence**:
1. `HUBSPOT_GET_ACCOUNT_INFO` - Verify connection and permissions (Prerequisite)
2. `HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA` - Search for existing contacts to avoid duplicates (Prerequisite)
3. `HUBSPOT_READ_A_CRM_PROPERTY_BY_NAME` - Check property metadata for constrained values (Optional)
4. `HUBSPOT_CREATE_CONTACT` - Create a single contact (Required)
5. `HUBSPOT_CREATE_CONTACTS` - Batch create contacts up to 100 (Alternative)

**Key parameters**:
- `HUBSPOT_CREATE_CONTACT`: `properties` object with `email`, `firstname`, `lastname`, `phone`, `company`
- `HUBSPOT_CREATE_CONTACTS`: `inputs` array of `{properties}` objects, max 100 per batch
- `HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA`: `filterGroups` array with `{filters: [{propertyName, operator, value}]}`, `properties` array of fields to return

**Pitfalls**:
- Max 100 records per batch; chunk larger imports
- 400 'Property values were not valid' if using incorrect property names or enum values
- Always search before creating to avoid duplicates
- Auth errors from GET_ACCOUNT_INFO mean all subsequent calls will fail

### 2. Manage Companies

**When to use**: User wants to create, search, or update company records

**Tool sequence**:
1. `HUBSPOT_SEARCH_COMPANIES` - Search existing companies (Prerequisite)
2. `HUBSPOT_CREATE_COMPANIES` - Batch create companies, max 100 (Required)
3. `HUBSPOT_UPDATE_COMPANIES` - Batch update existing companies (Alternative)
4. `HUBSPOT_GET_COMPANY` - Get single company details (Optional)
5. `HUBSPOT_BATCH_READ_COMPANIES_BY_PROPERTIES` - Bulk read companies by property values (Optional)

**Key parameters**:
- `HUBSPOT_CREATE_COMPANIES`: `inputs` array of `{properties}` objects, max 100
- `HUBSPOT_SEARCH_COMPANIES`: `filterGroups`, `properties`, `sorts`, `limit`, `after` (pagination cursor)

**Pitfalls**:
- Max 100 per batch; chunk larger sets
- Store returned IDs immediately for downstream operations
- Property values must match exact internal names, not display labels

### 3. Manage Deals and Pipeline

**When to use**: User wants to search deals, view pipeline stages, or track deal progress

**Tool sequence**:
1. `HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE` - Map pipeline and stage IDs/names (Prerequisite)
2. `HUBSPOT_SEARCH_DEALS` - Search deals with filters (Required)
3. `HUBSPOT_RETRIEVE_PIPELINE_STAGES` - Get stage details for one pipeline (Optional)
4. `HUBSPOT_RETRIEVE_OWNERS` - Get owner/rep details (Optional)
5. `HUBSPOT_GET_DEAL` - Get single deal details (Optional)
6. `HUBSPOT_LIST_DEALS` - List all deals without filters (Fallback)

**Key parameters**:
- `HUBSPOT_SEARCH_DEALS`: `filterGroups` with filters on `pipeline`, `dealstage`, `createdate`, `closedate`, `hubspot_owner_id`; `properties`, `sorts`, `limit`, `after`
- `HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE`: `objectType` set to `'deals'`

**Pitfalls**:
- Results nested under `response.data.results`; properties are often strings (amounts, dates)
- Stage IDs may be readable strings or opaque numeric IDs; use `label` field for display
- Filters must use internal property names (`pipeline`, `dealstage`, `createdate`), not display names
- Paginate via `paging.next.after` until absent

### 4. Search and Filter Tickets

**When to use**: User wants to find support tickets by status, date, or criteria

**Tool sequence**:
1. `HUBSPOT_SEARCH_TICKETS` - Search with filterGroups (Required)
2. `HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE` - Discover available property names (Fallback)
3. `HUBSPOT_GET_TICKET` - Get single ticket details (Optional)
4. `HUBSPOT_GET_TICKETS` - Bulk fetch tickets by IDs (Optional)

**Key parameters**:
- `HUBSPOT_SEARCH_TICKETS`: `filterGroups`, `properties` (only listed fields are returned), `sorts`, `limit`, `after`

**Pitfalls**:
- Incorrect `propertyName`/`operator` returns zero results without errors
- Date filtering may require epoch-ms bounds; mixing formats causes mismatches
- Only fields in the `properties` array are returned; missing ones break downstream logic
- Use READ_ALL_PROPERTIES to discover exact internal property names

### 5. Create and Manage Custom Properties

**When to use**: User wants to add custom fields to CRM objects

**Tool sequence**:
1. `HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE` - List existing properties (Prerequisite)
2. `HUBSPOT_READ_PROPERTY_GROUPS_FOR_OBJECT_TYPE` - List property groups (Optional)
3. `HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE` - Create a single property (Required)
4. `HUBSPOT_CREATE_BATCH_OF_PROPERTIES` - Batch create properties (Alternative)
5. `HUBSPOT_UPDATE_SPECIFIC_CRM_PROPERTY` - Update existing property definition (Optional)

**Key parameters**:
- `HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE`: `objectType`, `name`, `label`, `type` (string/number/date/enumeration), `fieldType`, `groupName`, `options` (for enumerations)

**Pitfalls**:
- Property names are immutable after creation; choose carefully
- Enumeration options must be pre-defined with `value` and `label`
- Group must exist before assigning properties to it

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active HubSpot connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `hubspot`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hubspot-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/hubspot-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/hubspot-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @hubspot-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hubspot-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Create contact | `HUBSPOT_CREATE_CONTACT` | `properties: {email, firstname, lastname}` |
| Batch create contacts | `HUBSPOT_CREATE_CONTACTS` | `inputs: [{properties}]` (max 100) |
| Search contacts | `HUBSPOT_SEARCH_CONTACTS_BY_CRITERIA` | `filterGroups, properties, limit, after` |
| Create companies | `HUBSPOT_CREATE_COMPANIES` | `inputs: [{properties}]` (max 100) |
| Search companies | `HUBSPOT_SEARCH_COMPANIES` | `filterGroups, properties, after` |
| Search deals | `HUBSPOT_SEARCH_DEALS` | `filterGroups, properties, after` |
| Get pipelines | `HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE` | `objectType: 'deals'` |
| Search tickets | `HUBSPOT_SEARCH_TICKETS` | `filterGroups, properties, after` |
| List properties | `HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE` | `objectType` |
| Create property | `HUBSPOT_CREATE_PROPERTY_FOR_SPECIFIED_OBJECT_TYPE` | `objectType, name, label, type, fieldType` |
| Get owners | `HUBSPOT_RETRIEVE_OWNERS` | None |
| Verify connection | `HUBSPOT_GET_ACCOUNT_INFO` | None |

#### Imported: Common Patterns

### ID Resolution
- **Property display name → internal name**: Use `HUBSPOT_READ_ALL_PROPERTIES_FOR_OBJECT_TYPE`
- **Pipeline name → pipeline ID**: Use `HUBSPOT_RETRIEVE_ALL_PIPELINES_FOR_SPECIFIED_OBJECT_TYPE`
- **Stage name → stage ID**: Extract from pipeline stages response
- **Owner name → owner ID**: Use `HUBSPOT_RETRIEVE_OWNERS`

### Pagination
- Search endpoints use cursor-based pagination
- Follow `paging.next.after` until absent
- Typical limit: 100 records per page
- Pass `after` value from previous response to get next page

### Batch Operations
- Most create/update endpoints support batching with max 100 records per call
- For larger datasets, chunk into groups of 100
- Store returned IDs from each batch before proceeding
- Use batch endpoints (`CREATE_CONTACTS`, `CREATE_COMPANIES`, `UPDATE_COMPANIES`) instead of single-record endpoints for efficiency

#### Imported: Known Pitfalls

- **Property names**: All search/filter endpoints use internal property names, NOT display labels. Always call `READ_ALL_PROPERTIES_FOR_OBJECT_TYPE` to discover correct names
- **Batch limits**: Max 100 records per batch operation. Larger sets must be chunked
- **Response structure**: Search results are nested under `response.data.results` with properties as string values
- **Date formats**: Date properties may be epoch-ms or ISO strings depending on endpoint. Parse defensively
- **Immutable names**: Property names cannot be changed after creation. Plan naming conventions carefully
- **Cursor pagination**: Use `paging.next.after` cursor, not page numbers. Continue until `after` is absent
- **Duplicate prevention**: Always search before creating contacts/companies to avoid duplicates
- **Auth verification**: Run `HUBSPOT_GET_ACCOUNT_INFO` first; auth failures cascade to all subsequent calls

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

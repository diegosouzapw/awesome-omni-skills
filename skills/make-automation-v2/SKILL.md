---
name: make-automation-v2
description: "Make Automation via Rube MCP workflow skill. Use this skill when the user needs Automate Make (Integromat) tasks via Rube MCP (Composio): operations, enums, language and timezone lookups. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["make-automation-v2", "make-automation", "automate", "make", "integromat", "tasks", "via", "rube"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Make Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/make-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Make Automation via Rube MCP Automate Make (formerly Integromat) operations through Composio's Make toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Additional Notes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate Make (Integromat) tasks via Rube MCP (Composio): operations, enums, language and timezone lookups. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit make
3. If connection is not ACTIVE, follow the returned auth link to complete Make authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. MAKEGETOPERATIONS - Retrieve operation records [Required]
6. Check current schema via RUBESEARCHTOOLS for available filters
7. May include date range, scenario ID, or status filters

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `make`
3. If connection is not ACTIVE, follow the returned auth link to complete Make authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Get Operations Data

**When to use**: User wants to retrieve operation logs or usage data from Make scenarios

**Tool sequence**:
1. `MAKE_GET_OPERATIONS` - Retrieve operation records [Required]

**Key parameters**:
- Check current schema via RUBE_SEARCH_TOOLS for available filters
- May include date range, scenario ID, or status filters

**Pitfalls**:
- Operations data may be paginated; check for pagination tokens
- Date filters must match expected format from schema
- Large result sets should be filtered by date range or scenario

### 2. List Available Languages

**When to use**: User wants to see supported languages for Make scenarios or interfaces

**Tool sequence**:
1. `MAKE_LIST_ENUMS_LANGUAGES` - Get all supported language codes [Required]

**Key parameters**:
- No required parameters; returns complete language list

**Pitfalls**:
- Language codes follow standard locale format (e.g., 'en', 'fr', 'de')
- List is static and rarely changes; cache results when possible

### 3. List Available Timezones

**When to use**: User wants to see supported timezones for scheduling Make scenarios

**Tool sequence**:
1. `MAKE_LIST_ENUMS_TIMEZONES` - Get all supported timezone identifiers [Required]

**Key parameters**:
- No required parameters; returns complete timezone list

**Pitfalls**:
- Timezone identifiers use IANA format (e.g., 'America/New_York', 'Europe/London')
- List is static and rarely changes; cache results when possible
- Use these exact timezone strings when configuring scenario schedules

### 4. Scenario Configuration Lookup

**When to use**: User needs to configure scenarios with correct language and timezone values

**Tool sequence**:
1. `MAKE_LIST_ENUMS_LANGUAGES` - Get valid language codes [Required]
2. `MAKE_LIST_ENUMS_TIMEZONES` - Get valid timezone identifiers [Required]

**Key parameters**:
- No parameters needed for either call

**Pitfalls**:
- Always verify language and timezone values against these enums before using in configuration
- Using invalid values in scenario configuration will cause errors

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active Make connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `make`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @make-automation-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/make-automation-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/make-automation-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @make-automation-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/make-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Get operations | MAKE_GET_OPERATIONS | (check schema for filters) |
| List languages | MAKE_LIST_ENUMS_LANGUAGES | (none) |
| List timezones | MAKE_LIST_ENUMS_TIMEZONES | (none) |

#### Imported: Common Patterns

### Enum Validation

Before configuring any Make scenario properties that accept language or timezone:
```
1. Call MAKE_LIST_ENUMS_LANGUAGES or MAKE_LIST_ENUMS_TIMEZONES
2. Verify the desired value exists in the returned list
3. Use the exact string value from the enum list
```

### Operations Monitoring

```
1. Call MAKE_GET_OPERATIONS with date range filters
2. Analyze operation counts, statuses, and error rates
3. Identify failed operations for troubleshooting
```

### Caching Strategy for Enums

Since language and timezone lists are static:
```
1. Call MAKE_LIST_ENUMS_LANGUAGES once at workflow start
2. Store results in memory or local cache
3. Validate user inputs against cached values
4. Refresh cache only when starting a new session
```

### Operations Analysis Workflow

For scenario health monitoring:
```
1. Call MAKE_GET_OPERATIONS with recent date range
2. Group operations by scenario ID
3. Calculate success/failure ratios per scenario
4. Identify scenarios with high error rates
5. Report findings to user or notification channel
```

### Integration with Other Toolkits

Make workflows often connect to other apps. Compose multi-tool workflows:
```
1. Call RUBE_SEARCH_TOOLS to find tools for the target app
2. Connect required toolkits via RUBE_MANAGE_CONNECTIONS
3. Use Make operations data to understand workflow execution patterns
4. Execute equivalent workflows directly via individual app toolkits
```

#### Imported: Known Pitfalls

**Limited Toolkit**:
- The Make toolkit in Composio currently has limited tools (operations, languages, timezones)
- For full scenario management (creating, editing, running scenarios), consider using Make's native API
- Always call RUBE_SEARCH_TOOLS to check for newly available tools
- The toolkit may be expanded over time; re-check periodically

**Operations Data**:
- Operation records may have significant volume for active accounts
- Always filter by date range to avoid fetching excessive data
- Operation counts relate to Make's pricing tiers and quota usage
- Failed operations should be investigated; they may indicate scenario configuration issues

**Response Parsing**:
- Response data may be nested under `data` key
- Enum lists return arrays of objects with code and label fields
- Operations data includes nested metadata about scenario execution
- Parse defensively with fallbacks for optional fields

**Rate Limits**:
- Make API has rate limits per API token
- Avoid rapid repeated calls to the same endpoint
- Cache enum results (languages, timezones) as they rarely change
- Operations queries should use targeted date ranges

**Authentication**:
- Make API uses token-based authentication
- Tokens may have different permission scopes
- Some operations data may be restricted based on token scope
- Check that the authenticated user has access to the target organization

#### Imported: Additional Notes

### Alternative Approaches

Since the Make toolkit has limited tools, consider these alternatives for common Make use cases:

| Make Use Case | Alternative Approach |
|--------------|---------------------|
| Trigger a scenario | Use Make's native webhook or API endpoint directly |
| Create a scenario | Use Make's scenario management API directly |
| Schedule execution | Use RUBE_MANAGE_RECIPE_SCHEDULE with composed workflows |
| Multi-app workflow | Compose individual toolkit tools via RUBE_MULTI_EXECUTE_TOOL |
| Data transformation | Use RUBE_REMOTE_WORKBENCH for complex processing |

### Composing Equivalent Workflows

Instead of relying solely on Make's toolkit, build equivalent automation directly:
1. Identify the apps involved in your Make scenario
2. Search for each app's tools via RUBE_SEARCH_TOOLS
3. Connect all required toolkits
4. Build the workflow step-by-step using individual app tools
5. Save as a recipe via RUBE_CREATE_UPDATE_RECIPE for reuse

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

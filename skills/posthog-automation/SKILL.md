---
name: posthog-automation
description: "PostHog Automation via Rube MCP workflow skill. Use this skill when the user needs Automate PostHog tasks via Rube MCP (Composio): events, feature flags, projects, user profiles, annotations. Always search tools first for current schemas and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["posthog-automation", "automate", "posthog", "tasks", "via", "rube", "mcp", "composio"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# PostHog Automation via Rube MCP

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/posthog-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# PostHog Automation via Rube MCP Automate PostHog product analytics and feature flag management through Composio's PostHog toolkit via Rube MCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Common Patterns, Known Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Automate PostHog tasks via Rube MCP (Composio): events, feature flags, projects, user profiles, annotations. Always search tools first for current schemas.
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
2. Call RUBEMANAGECONNECTIONS with toolkit posthog
3. If connection is not ACTIVE, follow the returned auth link to complete PostHog authentication
4. Confirm connection status shows ACTIVE before running any workflows
5. POSTHOGCAPTUREEVENT - Send one or more events to PostHog [Required]
6. event: Event name (e.g., '$pageview', 'usersignedup', 'purchase_completed')
7. distinct_id: Unique user identifier (required)

### Imported Workflow Notes

#### Imported: Setup

**Get Rube MCP**: Add `https://rube.app/mcp` as an MCP server in your client configuration. No API keys needed — just add the endpoint and it works.


1. Verify Rube MCP is available by confirming `RUBE_SEARCH_TOOLS` responds
2. Call `RUBE_MANAGE_CONNECTIONS` with toolkit `posthog`
3. If connection is not ACTIVE, follow the returned auth link to complete PostHog authentication
4. Confirm connection status shows ACTIVE before running any workflows

#### Imported: Core Workflows

### 1. Capture Events

**When to use**: User wants to send event data to PostHog for analytics tracking

**Tool sequence**:
1. `POSTHOG_CAPTURE_EVENT` - Send one or more events to PostHog [Required]

**Key parameters**:
- `event`: Event name (e.g., '$pageview', 'user_signed_up', 'purchase_completed')
- `distinct_id`: Unique user identifier (required)
- `properties`: Object with event-specific properties
- `timestamp`: ISO 8601 timestamp (optional; defaults to server time)

**Pitfalls**:
- `distinct_id` is required for every event; identifies the user/device
- PostHog system events use `$` prefix (e.g., '$pageview', '$identify')
- Custom events should NOT use the `$` prefix
- Properties are freeform; maintain consistent schemas across events
- Events are processed asynchronously; ingestion delay is typically seconds

### 2. List and Filter Events

**When to use**: User wants to browse or search through captured events

**Tool sequence**:
1. `POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS` - Query events with filters [Required]

**Key parameters**:
- `project_id`: PostHog project ID (required)
- `event`: Filter by event name
- `person_id`: Filter by person ID
- `after`: Events after this ISO 8601 timestamp
- `before`: Events before this ISO 8601 timestamp
- `limit`: Maximum events to return
- `offset`: Pagination offset

**Pitfalls**:
- `project_id` is required; resolve via LIST_PROJECTS first
- Date filters use ISO 8601 format (e.g., '2024-01-15T00:00:00Z')
- Large event volumes require pagination; use `offset` and `limit`
- Results are returned in reverse chronological order by default
- Event properties are nested; parse carefully

### 3. Manage Feature Flags

**When to use**: User wants to create, view, or manage feature flags

**Tool sequence**:
1. `POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS` - List existing feature flags [Required]
2. `POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS` - Get detailed flag configuration [Optional]
3. `POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT` - Create a new feature flag [Optional]

**Key parameters**:
- For listing: `project_id` (required)
- For details: `project_id`, `id` (feature flag ID)
- For creation:
  - `project_id`: Target project
  - `key`: Flag key (e.g., 'new-dashboard-beta')
  - `name`: Human-readable name
  - `filters`: Targeting rules and rollout percentage
  - `active`: Whether the flag is enabled

**Pitfalls**:
- Feature flag `key` must be unique within a project
- Flag keys should use kebab-case (e.g., 'my-feature-flag')
- `filters` define targeting groups with properties and rollout percentages
- Creating a flag with `active: true` immediately enables it for matching users
- Flag changes take effect within seconds due to PostHog's polling mechanism

### 4. Manage Projects

**When to use**: User wants to list or inspect PostHog projects and organizations

**Tool sequence**:
1. `POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION` - List all projects [Required]

**Key parameters**:
- `organization_id`: Organization identifier (may be optional depending on auth)
- `limit`: Number of results per page
- `offset`: Pagination offset

**Pitfalls**:
- Project IDs are numeric; used as parameters in most other endpoints
- Organization ID may be required; check your PostHog setup
- Pagination is offset-based; iterate until results are empty
- Project settings include API keys and configuration details

### 5. User Profile and Authentication

**When to use**: User wants to check current user details or verify API access

**Tool sequence**:
1. `POSTHOG_WHOAMI` - Get current API user information [Optional]
2. `POSTHOG_RETRIEVE_CURRENT_USER_PROFILE` - Get detailed user profile [Optional]

**Key parameters**:
- No required parameters for either call
- Returns current authenticated user's details, permissions, and organization info

**Pitfalls**:
- WHOAMI is a lightweight check; use for verifying API connectivity
- User profile includes organization membership and permissions
- These endpoints confirm the API key's access level and scope

#### Imported: Prerequisites

- Rube MCP must be connected (RUBE_SEARCH_TOOLS available)
- Active PostHog connection via `RUBE_MANAGE_CONNECTIONS` with toolkit `posthog`
- Always call `RUBE_SEARCH_TOOLS` first to get current tool schemas

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @posthog-automation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/posthog-automation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/posthog-automation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @posthog-automation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/posthog-automation`, fails to mention provenance, or does not use the support pack at all.
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
| Capture event | POSTHOG_CAPTURE_EVENT | event, distinct_id, properties |
| List events | POSTHOG_LIST_AND_FILTER_PROJECT_EVENTS | project_id, event, after, before |
| List feature flags | POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS | project_id |
| Get flag details | POSTHOG_RETRIEVE_FEATURE_FLAG_DETAILS | project_id, id |
| Create flag | POSTHOG_CREATE_FEATURE_FLAGS_FOR_PROJECT | project_id, key, filters |
| List projects | POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION | organization_id |
| Who am I | POSTHOG_WHOAMI | (none) |
| User profile | POSTHOG_RETRIEVE_CURRENT_USER_PROFILE | (none) |

#### Imported: Common Patterns

### ID Resolution

**Organization -> Project ID**:
```
1. Call POSTHOG_LIST_PROJECTS_IN_ORGANIZATION_WITH_PAGINATION
2. Find project by name in results
3. Extract id (numeric) for use in other endpoints
```

**Feature flag name -> Flag ID**:
```
1. Call POSTHOG_LIST_AND_MANAGE_PROJECT_FEATURE_FLAGS with project_id
2. Find flag by key or name
3. Extract id for detailed operations
```

### Feature Flag Targeting

Feature flags support sophisticated targeting:
```json
{
  "filters": {
    "groups": [
      {
        "properties": [
          {"key": "email", "value": "@company.com", "operator": "icontains"}
        ],
        "rollout_percentage": 100
      },
      {
        "properties": [],
        "rollout_percentage": 10
      }
    ]
  }
}
```
- Groups are evaluated in order; first matching group determines the rollout
- Properties filter users by their traits
- Rollout percentage determines what fraction of matching users see the flag

### Pagination

- Events: Use `offset` and `limit` (offset-based)
- Feature flags: Use `offset` and `limit` (offset-based)
- Projects: Use `offset` and `limit` (offset-based)
- Continue until results array is empty or smaller than `limit`

#### Imported: Known Pitfalls

**Project IDs**:
- Required for most API endpoints
- Always resolve project names to numeric IDs first
- Multiple projects can exist in one organization

**Event Naming**:
- System events use `$` prefix ($pageview, $identify, $autocapture)
- Custom events should NOT use `$` prefix
- Event names are case-sensitive; maintain consistency

**Feature Flags**:
- Flag keys must be unique within a project
- Use kebab-case for flag keys
- Changes propagate within seconds
- Deleting a flag is permanent; consider disabling instead

**Rate Limits**:
- Event ingestion has throughput limits
- Batch events where possible for efficiency
- API endpoints have per-minute rate limits

**Response Parsing**:
- Response data may be nested under `data` or `results` key
- Paginated responses include `count`, `next`, `previous` fields
- Event properties are nested objects; access carefully
- Parse defensively with fallbacks for optional fields

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

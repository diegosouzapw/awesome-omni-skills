---
name: monte-carlo-monitor-creation
description: "Monte Carlo Monitor Creation Skill workflow skill. Use this skill when the user needs Guides creation of Monte Carlo monitors via MCP tools, producing monitors-as-code YAML for CI/CD deployment and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["data-observability", "monitoring", "monte-carlo", "monitors-as-code", "monte-carlo-monitor-creation", "guides", "creation", "monte"]
complexity: advanced
risk: safe
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "monte-carlo-data"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Monte Carlo Monitor Creation Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/monte-carlo-monitor-creation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Monte Carlo Monitor Creation Skill This skill teaches you to create Monte Carlo monitors correctly via MCP. Every creation tool runs in dry-run mode and returns monitors-as-code (MaC) YAML. No monitors are created directly -- the user applies the YAML via the Monte Carlo CLI or CI/CD. Reference files live next to this skill file. Use the Read tool (not MCP resources) to access them: - Metric monitor details: references/metric-monitor.md (relative to this file) - Validation monitor details: references/validation-monitor.md (relative to this file) - Custom SQL monitor details: references/custom-sql-monitor.md (relative to this file) - Comparison monitor details: references/comparison-monitor.md (relative to this file) - Table monitor details: references/table-monitor.md (relative to this file)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Available MCP tools, Monitor types, MaC YAML format.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Asks to create, add, or set up a monitor (e.g. "add a monitor for...", "create a freshness check on...", "set up validation for...")
- Mentions monitoring a specific table, field, or metric
- Wants to check data quality rules or enforce data contracts
- Asks about monitoring options for a table or dataset
- Requests monitors-as-code YAML generation
- Wants to add monitoring after new transformation logic (when the prevent skill is not active)

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

1. What does the user want to monitor? (a specific table, a metric, a data quality rule, cross-table consistency, freshness/volume at schema level)
2. Which monitor type fits? Use the monitor types table above.
3. Does the user have all the details, or do they need guidance?
4. Use search with the table name and includefields: ["fieldnames"] to find the MCON and get column names.
5. If the user provided a full table ID like database:schema.table, search for it.
6. Once you have the MCON, call getTable with includefields: true and includetable_capabilities: true to verify capabilities and get domain info.
7. Call getTable with the MCON, includefields: true, and includetable_capabilities: true.

### Imported Workflow Notes

#### Imported: Procedure

Follow these steps in order. Do NOT skip steps.

### Validation Phase (Steps 1-3) -- MUST complete before any creation tool is called

The number one error pattern is agents skipping validation and calling a creation tool with guessed or incomplete parameters. **Every field in the creation call must be grounded in data retrieved during this phase.** Do not proceed to Step 4 until Steps 1-3 are fully satisfied.

#### Step 1: Understand the request

Ask yourself:
- What does the user want to monitor? (a specific table, a metric, a data quality rule, cross-table consistency, freshness/volume at schema level)
- Which monitor type fits? Use the monitor types table above.
- Does the user have all the details, or do they need guidance?

If the user's intent is unclear, ask a focused question before proceeding.

#### Step 2: Identify the table(s) and columns

If you don't have the table MCON:
1. Use `search` with the table name and `include_fields: ["field_names"]` to find the MCON and get column names.
2. If the user provided a full table ID like `database:schema.table`, search for it.
3. Once you have the MCON, call `getTable` with `include_fields: true` and `include_table_capabilities: true` to verify capabilities and get domain info.

If you already have the MCON:
1. Call `getTable` with the MCON, `include_fields: true`, and `include_table_capabilities: true`.

**CRITICAL: You need the actual column names from `getTable` results. NEVER guess or hallucinate column names.** This is the most common source of monitor creation failures.

For monitor types that require a timestamp column (metric monitors), review the column names and identify likely timestamp candidates. Present them to the user if ambiguous.

#### Step 3: Handle domain assignment

Monitors must be assigned to a domain that contains the table being monitored. The `getTable` response includes a `domains` list with `uuid` and `name`.

1. If `domains` is empty: skip domain assignment.
2. If `domains` has exactly one entry: default `domain_id` to that domain's UUID.
3. If `domains` has multiple entries: present only those domains and ask the user to pick.

Do NOT present all account domains as options -- only domains that contain the table are valid.

**ALWAYS check the table's `domains` BEFORE calling any creation tool.**

---

### Creation Phase (Steps 4-8)

Only enter this phase after the validation phase is complete with real data from MCP tools.

#### Step 4: Load the sub-skill reference

Based on the monitor type, read the detailed reference for parameter guidance:

- **Metric** -- Read the detailed reference: `references/metric-monitor.md` (relative to this file)
- **Validation** -- Read the detailed reference: `references/validation-monitor.md` (relative to this file)
- **Custom SQL** -- Read the detailed reference: `references/custom-sql-monitor.md` (relative to this file)
- **Comparison** -- Read the detailed reference: `references/comparison-monitor.md` (relative to this file)
- **Table** -- Read the detailed reference: `references/table-monitor.md` (relative to this file)

#### Step 5: Ask about scheduling

**Skip this step for table monitors.** Table monitors do not support the `schedule` field in MaC YAML — adding it will cause a validation error on `montecarlo monitors apply`. Table monitor scheduling is managed automatically by Monte Carlo.

For all other monitor types, the creation tools default to a fixed schedule running every 60 minutes. Present these options:

1. **Fixed interval** -- any integer for `interval_minutes` (30, 60, 90, 120, 360, 720, 1440, etc.)
2. **Dynamic** -- MC auto-determines when to run based on table update patterns.
3. **Loose** -- runs once per day.

Schedule format in MaC YAML:
- Fixed: `schedule: { type: fixed, interval_minutes: <N> }`
- Dynamic: `schedule: { type: dynamic }`
- Loose: `schedule: { type: loose, start_time: "00:00" }`

#### Step 6: Confirm with the user

Before calling the creation tool, present the monitor configuration in plain language:
- Monitor type
- Target table (and columns if applicable)
- What it checks / what triggers an alert
- Domain assignment
- Schedule

Ask: "Does this look correct? I'll generate the monitor configuration."

**NEVER call the creation tool without user confirmation.**

#### Step 7: Create the monitor

Call the appropriate creation tool with the parameters built in previous steps. Always pass an MCON when possible. If only table name is available, also pass warehouse.

#### Step 8: Present results

**CRITICAL: Always include the YAML in your response.** The user needs copy-pasteable YAML.

1. If a non-default schedule was chosen, modify the schedule section in the YAML before presenting.
2. Wrap the YAML in the full MaC structure (see "MaC YAML format" section below).
3. ALWAYS present the full YAML in a ```yaml code block.
4. Explain where to put it and how to apply it (see below).
5. ALWAYS use ISO 8601 format for datetime values.
6. NEVER reformat YAML values returned by creation tools.

---

#### Imported: Available MCP tools

All tools are available via the `monte-carlo` MCP server.

| Tool                         | Purpose                                                    |
| ---------------------------- | ---------------------------------------------------------- |
| `testConnection`             | Verify auth and connectivity before starting               |
| `search`                     | Find tables/assets by name; use `include_fields` for columns |
| `getTable`                   | Schema, stats, metadata, domain membership, capabilities   |
| `getValidationPredicates`    | List available validation rule types for a warehouse       |
| `getDomains`                 | List MC domains (only needed if table has no domain info)  |
| `createMetricMonitorMac`     | Generate metric monitor YAML (dry-run)                     |
| `createValidationMonitorMac` | Generate validation monitor YAML (dry-run)                 |
| `createComparisonMonitorMac` | Generate comparison monitor YAML (dry-run)                 |
| `createCustomSqlMonitorMac`  | Generate custom SQL monitor YAML (dry-run)                 |
| `createTableMonitorMac`      | Generate table monitor YAML (dry-run)                      |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @monte-carlo-monitor-creation to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/monte-carlo-monitor-creation/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/monte-carlo-monitor-creation/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @monte-carlo-monitor-creation using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/monte-carlo-monitor-creation`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common mistakes to avoid

- **NEVER guess column names.** Always get them from `getTable`.
- **NEVER skip the confirmation step** (Step 6).
- For metric monitors, `aggregate_time_field` MUST be a real timestamp column from the table.
- For validation monitors, conditions match INVALID data, not valid data.
- Always pass an MCON when possible. If only table name is available, also pass warehouse.
- **ALWAYS check table's `domains` BEFORE calling any creation tool.**
- ALWAYS use ISO 8601 format for datetime values.
- NEVER reformat YAML values returned by creation tools.
- Do not call creation tools before the validation phase is complete.

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/comparison-monitor.md` |
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

#### Imported: Monitor types

| Type           | Tool                         | Use When                                                                                                                                |
| -------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **Metric**     | `createMetricMonitorMac`     | Track statistical metrics on fields (null rates, unique counts, numeric stats) or row count changes over time. Requires a timestamp field for aggregation. |
| **Validation** | `createValidationMonitorMac` | Row-level data quality checks with conditions (e.g. "field X is never null", "status is in allowed set"). Alerts on INVALID data.       |
| **Custom SQL** | `createCustomSqlMonitorMac`  | Run arbitrary SQL returning a single number and alert on thresholds. Most flexible; use when other types don't fit.                     |
| **Comparison** | `createComparisonMonitorMac` | Compare metrics between two tables (e.g. dev vs prod, source vs target).                                                               |
| **Table**      | `createTableMonitorMac`      | Monitor groups of tables for freshness, schema changes, and volume. Uses asset selection at database/schema level.                      |

---

#### Imported: MaC YAML format

The YAML returned by creation tools is the monitor definition. It must be wrapped in the standard MaC structure to be applied:

```yaml
montecarlo:
  <monitor_type>:
    - <returned yaml>
```

For example, a metric monitor would look like:

```yaml
montecarlo:
  metric:
    - <yaml returned by createMetricMonitorMac>
```

**Important:** `montecarlo.yml` (without a directory path) is a separate Monte Carlo project configuration file -- it is NOT the same as a monitor definition file. Monitor definitions go in their own `.yml` files, typically in a `monitors/` directory or alongside dbt model schema files.

Tell the user:
- Save the YAML to a `.yml` file (e.g. `monitors/<table_name>.yml` or in their dbt schema)
- Apply via the Monte Carlo CLI: `montecarlo monitors apply --namespace <namespace>`
- Or integrate into CI/CD for automatic deployment on merge

---

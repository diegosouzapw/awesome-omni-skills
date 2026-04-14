---
name: monte-carlo-prevent
description: "Monte Carlo Prevent Skill workflow skill. Use this skill when the user needs Surfaces Monte Carlo data observability context (table health, alerts, lineage, blast radius) before SQL/dbt edits and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["data-observability", "dbt", "schema", "monte-carlo", "lineage", "monte-carlo-prevent", "surfaces", "monte"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "monte-carlo-data"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Monte Carlo Prevent Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/monte-carlo-prevent` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Monte Carlo Prevent Skill This skill brings Monte Carlo's data observability context directly into your editor. When you're modifying a dbt model or SQL pipeline, use it to surface table health, lineage, active alerts, and to generate monitors-as-code without leaving Claude Code. Reference files live next to this skill file. Use the Read tool (not MCP resources) to access them: - Full workflow step-by-step instructions: references/workflows.md (relative to this file) - MCP parameter details: references/parameters.md (relative to this file) - Troubleshooting: references/TROUBLESHOOTING.md (relative to this file)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: REQUIRED: Change impact assessment before any SQL edit, Pre-edit gate — check before modifying any file, Available MCP tools, Session markers, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- References or opens a .sql file or dbt model (files in models/) → run Workflow 1
- Mentions a table name, dataset, or dbt model name in passing → run Workflow 1
- Describes a planned change to a model (new column, join update, filter change, refactor) → STOP — run Workflow 4 before writing any code
- Adds a new column, metric, or output expression to an existing
- Asks about data quality, freshness, row counts, or anomalies → run Workflow 1
- Wants to triage or respond to a data quality alert → run Workflow 3

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

1. Each workflow has detailed step-by-step instructions in references/workflows.md (Read tool).
2. Table health check When: User opens a dbt model or mentions a table.
3. What: Surfaces health, lineage, alerts, and risk signals.
4. Auto-escalates to Workflow 4 if change intent is detected and risk signals are present.
5. Add a monitor When: New column, filter, or business rule is added to a model.
6. What: Suggests and generates monitors-as-code YAML using the appropriate create*MonitorMac tool.
7. Saves to monitors/<table_name>.yml.

### Imported Workflow Notes

#### Imported: Core workflows

Each workflow has detailed step-by-step instructions in `references/workflows.md` (Read tool).

### 1. Table health check

**When:** User opens a dbt model or mentions a table.
**What:** Surfaces health, lineage, alerts, and risk signals. Auto-escalates to Workflow 4 if change intent is detected and risk signals are present.

### 2. Add a monitor

**When:** New column, filter, or business rule is added to a model.
**What:** Suggests and generates monitors-as-code YAML using the appropriate `create*MonitorMac` tool. Saves to `monitors/<table_name>.yml`.

### 3. Alert triage

**When:** User is investigating an active data quality incident.
**What:** Lists open alerts, checks table state, traces lineage for root cause, reviews recent queries.

### 4. Change impact assessment — REQUIRED before modifying a model

**When:** Any intent to modify a dbt model's logic, columns, joins, or filters.
**What:** Surfaces blast radius, downstream dependencies, active incidents, monitor coverage, and query exposure. Produces a risk-tiered report with synthesis connecting findings to specific code recommendations. See `references/workflows.md` for the full assessment sequence, report format, and synthesis rules.

### 5. Change validation queries

**When:** Explicit engineer request only (e.g. "validate this change", "ready to commit").
**What:** Generates 3-5 targeted SQL queries to verify the change behaved as intended. Uses Workflow 4 context — requires both impact assessment and file edit in session.

---

#### Imported: REQUIRED: Change impact assessment before any SQL edit

**Before editing or writing any SQL for a dbt model or pipeline, you MUST run Workflow 4.**

This applies whenever the user expresses intent to modify a model — including phrases like:

- "I want to add a column…"
- "Let me add / I'm adding…"
- "I'd like to change / update / rename…"
- "Can you add / modify / refactor…"
- "Let's add…" / "Add a `<column>` column"
- Any other description of a planned schema or logic change
- "Exclude / filter out / remove [records/customers/rows]…"
- "Adjust / increase / decrease [threshold/parameter/value]…"
- "Fix / bugfix / patch [issue/bug]…"
- "Revert / restore / undo [change/previous behavior]…"
- "Disable / enable [feature/logic/flag]…"
- "Clean up / remove [references/columns/code]…"
- "Implement [backend/feature] for…"
- "Create [models/dbt models] for…" (when modifying existing referenced tables)
- "Increase / decrease / change [max_tokens/threshold/date constant/numeric parameter]…"
- Any change to a hardcoded value, constant, or configuration parameter within SQL
- "Drop / remove / delete [column/field/table]"
- "Rename [column/field] to [new name]"
- "Add [column]" (short imperative form, e.g. "add a created_at column")
- Any single-verb imperative command targeting a column, table, or model
  (e.g. "drop X", "rename Y", "add Z", "remove W")

Parameter changes (threshold values, date constants, numeric limits) appear
safe but silently change model output. Treat them the same as logic changes
for impact assessment purposes.

**Do not write or edit any SQL until the change impact assessment (Workflow 4) has been presented to the user.** The assessment must come first — not after the edit, not in parallel.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @monte-carlo-prevent to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/monte-carlo-prevent/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/monte-carlo-prevent/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @monte-carlo-prevent using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always end the synthesis with one clear, specific recommendation in plain English: "Given the above, I recommend: [specific action]" If the risk is High or Medium: STOP and wait for confirmation before editing any file.
- You must ask the engineer and receive an explicit "yes", "go ahead", "proceed", or similar confirmation before making code changes.
- Say: "Do you want me to proceed with the edit?" Do NOT say: "Proceeding with the edit." — that skips the engineer's decision.
- If the risk is Low: Use your judgment based on the synthesis findings.
- If the change is straightforward and the synthesis found no concerns, you may proceed.
- If anything is surprising or worth flagging, ask before editing.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Post-synthesis confirmation rules

Always end the synthesis with one clear, specific recommendation in plain English:
"Given the above, I recommend: [specific action]"

**If the risk is High or Medium:** STOP and wait for confirmation before editing
any file. You must ask the engineer and receive an explicit "yes", "go ahead",
"proceed", or similar confirmation before making code changes.
Say: "Do you want me to proceed with the edit?"
Do NOT say: "Proceeding with the edit." — that skips the engineer's decision.

**If the risk is Low:** Use your judgment based on the synthesis findings. If
the change is straightforward and the synthesis found no concerns, you may
proceed. If anything is surprising or worth flagging, ask before editing.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/monte-carlo-prevent`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/TROUBLESHOOTING.md` |
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

#### Imported: Pre-edit gate — check before modifying any file

**Before calling Edit, Write, or MultiEdit on any `.sql` or dbt model
file, you MUST check:**

1. Has the synthesis step been run for THIS SPECIFIC CHANGE in the
   current prompt?
2. **If YES** → proceed with the edit
3. **If NO** → stop immediately, run Workflow 4, present the full
   report with synthesis connected to this specific change.
   **If risk is High or Medium:** ask "Do you want me to proceed
   with the edit?" and wait for explicit confirmation.
   **If risk is Low:** use judgment — proceed if straightforward
   and no concerns found, otherwise ask before editing.

**Important: "Workflow 4 already ran this session" is NOT sufficient
to proceed.** Each distinct change prompt requires its own synthesis
step connecting the MC findings to that specific change.

The synthesis must reference the specific columns, filters, or logic
being changed in the current prompt — not just general table health.

Example:

- ✅ "Given 34 downstream models depend on is_paying_workspace,
  adding 'MC Internal' to the exclusion list will exclude these
  workspaces from all downstream health scores and exports.
  Confirm?"
- ❌ "Workflow 4 already ran. Making the edit now."

The only exception: if the user explicitly acknowledges the risk
and confirms they want to skip (e.g. "I know the risks, just make
the change") — proceed but note the skipped assessment.

#### Imported: Available MCP tools

All tools are available via the `monte-carlo` MCP server.

| Tool                         | Purpose                                                              |
| ---------------------------- | -------------------------------------------------------------------- |
| `testConnection`             | Verify auth and connectivity                                         |
| `search`                     | Find tables/assets by name                                           |
| `getTable`                   | Schema, stats, metadata for a table                                  |
| `getAssetLineage`            | Upstream/downstream dependencies (call with mcons array + direction) |
| `getAlerts`                  | Active incidents and alerts                                          |
| `getMonitors`                | Monitor configs — filter by table using mcons array                  |
| `getQueriesForTable`         | Recent query history                                                 |
| `getQueryData`               | Full SQL for a specific query                                        |
| `createValidationMonitorMac` | Generate validation monitors-as-code YAML                            |
| `createMetricMonitorMac`     | Generate metric monitors-as-code YAML                                |
| `createComparisonMonitorMac` | Generate comparison monitors-as-code YAML                            |
| `createCustomSqlMonitorMac`  | Generate custom SQL monitors-as-code YAML                            |
| `getValidationPredicates`    | List available validation rule types                                 |
| `updateAlert`                | Update alert status/severity                                         |
| `setAlertOwner`              | Assign alert ownership                                               |
| `createOrUpdateAlertComment` | Add comments to alerts                                               |
| `getAudiences`               | List notification audiences                                          |
| `getDomains`                 | List MC domains                                                      |
| `getUser`                    | Current user info                                                    |
| `getCurrentTime`             | ISO timestamp for API calls                                          |

#### Imported: Session markers

These markers coordinate between the skill and the plugin's hooks. Output each
on its own line when the condition is met.

### Impact check complete

After the engineer confirms (High/Medium) or after presenting the synthesis (Low),
output one marker per assessed table. **IMPORTANT: use only the table/model name, not the full MCON:**

<!-- MC_IMPACT_CHECK_COMPLETE: <table_name> -->

(Use the model filename without .sql extension — NOT "acme.analytics.orders" or "prod.public.client_hub")

How many markers to emit depends on how the assessment was triggered:

**Hook-triggered** (the pre-edit hook blocked an edit and instructed you to run
the assessment): Be strict — only emit markers for tables whose lineage **and**
monitor coverage were fetched directly via Monte Carlo tools in this session. If
the engineer describes changes to multiple tables but only one was formally
assessed, emit only one marker. The pre-edit hook will gate the other tables and
prompt for their own Workflow 4 runs.

**Voluntarily invoked** (the engineer proactively asked for an impact assessment):
Be looser — emit markers for all tables the assessment meaningfully covered, even
if some were assessed via lineage context rather than direct MC tool calls. The
engineer is already safety-conscious; don't force redundant assessments for tables
they clearly considered.

### Monitor coverage gap

When Workflow 4 finds zero custom monitors on a table's affected columns, output:

<!-- MC_MONITOR_GAP: <table_name> -->

Use only the table/model name (NOT the full MCON). This allows the plugin's hooks
to remind the engineer about monitor coverage at commit time. Only output this
marker when the gap is specifically about the columns or logic being changed —
not for general table-level monitor absence.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

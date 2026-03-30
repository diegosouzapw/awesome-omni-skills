---
name: recce-mcp-dev
description: "Recce MCP Server Development workflow skill. Use this skill when the user needs modifying recce/mcp_server.py, MCP tool handlers, error classification, or MCP-related tests. Also use when adding new MCP tools or changing tool response formats and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["recce-mcp-dev", "modifying", "recce", "mcp", "server", "tool", "handlers", "error"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "DataRecce"
date_added: "2026-03-30"
date_updated: "2026-03-30"
---

# Recce MCP Server Development

## Overview

This public intake copy packages `.claude/skills/recce-mcp-dev` from `https://github.com/DataRecce/recce.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Recce MCP Server Development

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Architecture, Key Patterns, Testing (Three Layers), Test Coverage Gap Analysis, E2E Verification Gate, Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: modifying recce/mcp_server.py, MCP tool handlers, error classification, or MCP-related tests. Also use when adding new MCP tools or changing tool response formats.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Architecture

`RecceMCPServer` registers `list_tools`/`call_tool` handlers via MCP SDK `Server`. `call_tool` dispatches to `_tool_*` methods, classifies errors, logs/emits metrics, re-raises.

Entry point `run_mcp_server()` pops `single_env` before passing kwargs to `load_context()`.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @recce-mcp-dev to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/recce-mcp-dev/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/recce-mcp-dev/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @recce-mcp-dev using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `.claude/skills/recce-mcp-dev`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@claude-code-review` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-deep-dive` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@recce-mcp-e2e` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@context-engineering` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Patterns

**Error classification** — Shared indicator lists defined in `recce/tasks/rowcount.py`. Priority order (`PERMISSION_DENIED` > `TABLE_NOT_FOUND` > `SYNTAX_ERROR`) enforced by `_classify_db_error()` in `mcp_server.py` and `_query_row_count()` in `rowcount.py`. Classified → `logger.warning()` + `sentry_metrics.count()` (when sentry_sdk available). Unclassified → `logger.error()` + traceback.

**MCP SDK quirk** — Handler must **raise** for SDK to set `isError=True`.

**Response contracts** — See CLAUDE.md. Additive `_meta` only. `summary.py`: guard with `is None`, not `dict.get(key, 0)`. N/A display includes reason: `"N/A (table_not_found)"`.

**Single-env** — `_maybe_add_single_env_warning()` adds `_warning` to diff results. Descriptions get conditional note.

#### Imported: Testing (Three Layers)

| Layer | File | Data Source | Runs In | Purpose |
|-------|------|-------------|---------|---------|
| Unit | `tests/test_mcp_server.py` | Mock `RecceContext` | CI (`pytest`) | Logic correctness — tool handlers, error classification, response format |
| Integration | `tests/test_mcp_e2e.py` | `DbtTestHelper` + DuckDB (fixed data) | CI (`pytest`) | MCP protocol works end-to-end via anyio memory streams |
| Smoke (E2E) | `/recce-mcp-e2e` skill | User's real dbt project + real database | Manual | All 8 tools return valid results against real data |

Each new MCP feature or behavior change should be covered at all three layers.

#### Imported: Test Coverage Gap Analysis

After completing a round of MCP changes (see E2E Gate below for definition), proactively scan for missing test coverage across the three layers before asking about E2E verification.

**How to check:**
1. Identify what changed — new tool handler? new error path? new response field?
2. For each change, verify coverage exists at each layer:
   - **Unit**: Does `tests/test_mcp_server.py` have a test case for the new behavior? (happy path + error path)
   - **Integration**: Does `tests/test_mcp_e2e.py` exercise the new tool/feature via MCP protocol?
   - **Smoke**: Will `/recce-mcp-e2e` template cover the new tool? (If a new tool was added, the template may need updating)

**If gaps are found**, report them to the user before the E2E gate prompt:

> Test coverage gaps found:
> - Unit: missing test for `_tool_foo` error path when table not found
> - Integration: `test_mcp_e2e.py` does not exercise `foo` tool
> - Smoke: `/recce-mcp-e2e` template does not include `foo` tool
>
> Want to fill these gaps before running E2E?

**Do NOT scan** after: test-only changes, comment/doc edits, import reordering.

#### Imported: E2E Verification Gate

After each meaningful round of MCP changes, you MUST ask the user:

> MCP changes complete for this round. Run `/recce-mcp-e2e` to verify?

If the user says yes, invoke `/recce-mcp-e2e`. If a dbt project path was used earlier in this session, reuse it automatically; otherwise ask.

**What counts as "a round":**
- A tool handler added or modified + its unit tests pass
- Error classification logic changed + tests pass
- Single-env or response format changed + tests pass

**Do NOT ask** after: test-only changes, comment/doc edits, import reordering.

**This is separate from `tests/test_mcp_e2e.py`** — that file tests with DbtTestHelper + DuckDB in CI. `/recce-mcp-e2e` verifies all 8 tools against a real dbt project with a real database.

#### Imported: Pitfalls

- `sentry_sdk` import: `# pragma: no cover` on except (CI always has it)
- Python 3.9: `Union[X, Y]` not `X | Y`
- Pre-commit: black/isort may reformat — re-stage and commit
- `run.py` `schema_diff_should_be_approved()` try/except is intentional (ensures check creation)

#### Imported: File Map

`recce/mcp_server.py` (server + handlers), `recce/tasks/rowcount.py` (error indicators, RowCountStatus), `recce/run.py` (CLI preset), `recce/summary.py` (display logic), `recce/event/__init__.py` (Sentry)

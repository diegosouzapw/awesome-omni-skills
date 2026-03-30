---
name: recce-mcp-e2e
description: "MCP E2E Verification workflow skill. Use this skill when the user needs MCP server code is modified and needs full E2E verification against a real dbt project. Triggers after changes to recce/mcp_server.py, MCP tool handlers, single-env logic, or error classification. Also use before merging MCP PRs and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["recce-mcp-e2e", "mcp", "server", "modified", "and", "full", "e2e", "verification"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "DataRecce"
date_added: "2026-03-30"
date_updated: "2026-03-30"
---

# MCP E2E Verification

## Overview

This public intake copy packages `.claude/skills/recce-mcp-e2e` from `https://github.com/DataRecce/recce.git` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# MCP E2E Verification Full-stack verification of all 8 MCP tools against a real dbt project.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- After modifying recce/mcpserver.py or tool_* handlers
- After changing single-env logic or error classification
- Before merging any MCP-related PR
- Not for: unit test changes only, frontend-only changes, docs-only changes
- Use when the request clearly matches the imported source intent: MCP server code is modified and needs full E2E verification against a real dbt project. Triggers after changes to recce/mcp_server.py, MCP tool handlers, single-env logic, or error classification. Also use before....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Resolve project path from argument or user input
2. Validate target/ and target-base/ exist with manifest.json
3. Detect recce source — find the repo root containing recce/mcpserver.py. If recce-nightly is also installed (pip show recce recce-nightly), set PYTHONPATH=<RECCEREPO_ROOT>:$PYTHONPATH
4. Generate testmcpe2e.py in the project directory from testmcpe2etemplate.py (in this skill directory). Replace PROJECTDIR_PLACEHOLDER with the resolved absolute path.
5. Execute with appropriate PYTHONPATH prefix
6. Report results — all 13 checks must show PASS. Expected output:
7. Clean up — delete testmcpe2e.py

### Imported Workflow Notes

#### Imported: Process

1. **Resolve project path** from argument or user input
2. **Validate** `target/` and `target-base/` exist with `manifest.json`
3. **Detect recce source** — find the repo root containing `recce/mcp_server.py`. If `recce-nightly` is also installed (`pip show recce recce-nightly`), set `PYTHONPATH=<RECCE_REPO_ROOT>:$PYTHONPATH`
4. **Generate** `test_mcp_e2e.py` in the project directory from `test_mcp_e2e_template.py` (in this skill directory). Replace `PROJECT_DIR_PLACEHOLDER` with the resolved absolute path.
5. **Execute** with appropriate PYTHONPATH prefix
6. **Report** results — all 13 checks must show PASS. Expected output:
   ```
   === FULL MODE (8 tools) ===
     PASS lineage_diff: PASS
     ...
   === SINGLE-ENV MODE ===
     PASS row_count_diff (_warning): PASS
     ...
   ALL PASS
   ```
7. **Clean up** — delete `test_mcp_e2e.py`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @recce-mcp-e2e to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/recce-mcp-e2e/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/recce-mcp-e2e/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @recce-mcp-e2e using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Usage

Invoke as `/recce-mcp-e2e` or `/recce-mcp-e2e <project_path>`.

- **With argument**: use the given path as the dbt project directory
- **Without argument**: ask the user for the dbt project path

The project directory must contain `target/manifest.json` and `target-base/manifest.json`.

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

**Symptoms:** The result ignores the upstream workflow in `.claude/skills/recce-mcp-e2e`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Common Mistakes

| Problem | Fix |
|---------|-----|
| `ImportError: cannot import name 'SINGLE_ENV_WARNING'` | recce-nightly conflict — use `PYTHONPATH=<RECCE_REPO_ROOT>:$PYTHONPATH` |
| lineage_diff returns empty | Use `view_mode="all"` (default `changed_models` filters out unchanged) |
| list_checks returns empty | Preset checks from `recce.yml` must be loaded via `load_preset_checks()` — script handles this |
| `portalocker` FileNotFoundError on exit | Cosmetic thread error in event collector — does not affect results |
| Single-env test uses target-base | By design — `load_context` needs both, `single_env=True` flag simulates the mode |

## Related Skills

- `@claude-code-review` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-deep-dive` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@recce-mcp-dev` - Use when the work is better handled by that native specialization after this imported skill establishes context.
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

#### Imported: Quick Reference

| Test Suite | Checks | What's Verified |
|-----------|--------|----------------|
| Full mode (8 tools) | lineage_diff, schema_diff, row_count_diff, query, query_diff, profile_diff, list_checks, run_check | Non-empty results from each tool |
| Single-env _warning (3) | row_count_diff, query_diff, profile_diff | `_warning` field present with `SINGLE_ENV_WARNING` |
| Single-env no _warning (2) | lineage_diff, schema_diff | `_warning` field NOT present |

**Additional manual checks** (not in script):

| Check | Command/Action |
|-------|---------------|
| --help | `recce mcp-server --help` shows Prerequisites section |
| Server modes | Non-server mode: `list_tools` returns only lineage_diff + schema_diff |

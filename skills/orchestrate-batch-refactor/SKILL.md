---
name: orchestrate-batch-refactor
description: "Orchestrate Batch Refactor workflow skill. Use this skill when the user needs Plan and execute large refactors with dependency-aware work packets and parallel analysis and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["orchestrate-batch-refactor", "plan", "and", "execute", "large", "refactors", "dependency-aware", "work"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Orchestrate Batch Refactor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/orchestrate-batch-refactor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Orchestrate Batch Refactor

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Inputs, Planning Contract, Agent Prompting Contract, Validation Strategy, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When a refactor spans many files or subsystems and needs clear work partitioning.
- When you need dependency-aware planning before parallel implementation.
- Use this skill for medium/large scope touching many files or subsystems.
- Skip multi-agent execution for tiny edits or highly coupled single-file work.
- Use when the request clearly matches the imported source intent: Plan and execute large refactors with dependency-aware work packets and parallel analysis.
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

1. Define scope and success criteria.
2. List target paths/modules and non-goals.
3. State behavior constraints (for example: preserve external behavior).
4. Run parallel analysis first.
5. Split target scope into analysis lanes.
6. Spawn explorer sub-agents in parallel to analyze each lane.
7. Ask each agent for: intent map, coupling risks, candidate work packets, required validations.

### Imported Workflow Notes

#### Imported: Core Workflow

1. Define scope and success criteria.
   - List target paths/modules and non-goals.
   - State behavior constraints (for example: preserve external behavior).
2. Run parallel analysis first.
   - Split target scope into analysis lanes.
   - Spawn `explorer` sub-agents in parallel to analyze each lane.
   - Ask each agent for: intent map, coupling risks, candidate work packets, required validations.
3. Build one dependency-aware plan.
   - Merge explorer output into a single work graph.
   - Create work packets with clear file ownership and validation commands.
   - Sequence packets by dependency level; run only independent packets in parallel.
4. Execute with worker agents.
   - Spawn one `worker` per independent packet.
   - Assign explicit ownership (files/responsibility).
   - Instruct every worker that they are not alone in the codebase and must ignore unrelated edits.
5. Integrate and verify.
   - Review packet outputs, resolve overlaps, and run validation gates.
   - Run targeted tests per packet, then broader suite for integrated scope.
6. Report and close.
   - Summarize packet outcomes, key refactors, conflicts resolved, and residual risks.

#### Imported: Overview

Use this skill to run high-throughput refactors safely.
Analyze scope in parallel, synthesize a single plan, then execute independent work packets with sub-agents.

#### Imported: Inputs

- Repo path and target scope (paths, modules, or feature area)
- Goal type: refactor, rewrite, or hybrid
- Constraints: behavior parity, API stability, deadlines, test requirements

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @orchestrate-batch-refactor to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/orchestrate-batch-refactor/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/orchestrate-batch-refactor/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @orchestrate-batch-refactor using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- One owner per file per execution wave.
- No parallel edits on overlapping file sets.
- Keep packet goals narrow and measurable.
- Include explicit done criteria and required checks.
- Prefer behavior-preserving refactors unless user explicitly requests behavior change.
- Do not start worker execution before plan synthesis is complete.
- Do not parallelize across unresolved dependencies.

### Imported Operating Notes

#### Imported: Work Packet Rules

- One owner per file per execution wave.
- No parallel edits on overlapping file sets.
- Keep packet goals narrow and measurable.
- Include explicit done criteria and required checks.
- Prefer behavior-preserving refactors unless user explicitly requests behavior change.

#### Imported: Safety Guardrails

- Do not start worker execution before plan synthesis is complete.
- Do not parallelize across unresolved dependencies.
- Do not claim completion if any required packet check fails.
- Stop and re-plan when packet boundaries cause repeated merge conflicts.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/orchestrate-batch-refactor`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/agent-prompt-templates.md` |
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

#### Imported: Planning Contract

Every packet must include:

1. Packet ID and objective.
2. Owned files.
3. Dependencies (none or packet IDs).
4. Risks and invariants to preserve.
5. Required checks.
6. Integration notes for main thread.

Use [`references/work-packet-template.md`](references/work-packet-template.md) for the exact shape.

#### Imported: Agent Prompting Contract

- Use the prompt templates in [`references/agent-prompt-templates.md`](references/agent-prompt-templates.md).
- Explorer prompts focus on analysis and decomposition.
- Worker prompts focus on implementation and validation with strict ownership boundaries.

#### Imported: Validation Strategy

Run in this order:

1. Packet-level checks (fast and scoped).
2. Cross-packet integration checks.
3. Full project safety checks when scope is broad.

Prefer fast feedback loops, but never skip required behavior checks.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

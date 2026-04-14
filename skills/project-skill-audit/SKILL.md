---
name: project-skill-audit
description: "Project Skill Audit workflow skill. Use this skill when the user needs Audit a project and recommend the highest-value skills to add or update and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["project-skill-audit", "audit", "project", "and", "recommend", "the", "highest-value", "add"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Project Skill Audit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/project-skill-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Project Skill Audit

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Session Analysis, What To Scan, Output Expectations, Naming Guidance, Follow-up, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks what skills a project needs or which existing skills should be updated.
- When recommendations should be grounded in project history, memory files, and local conventions.
- Use when the request clearly matches the imported source intent: Audit a project and recommend the highest-value skills to add or update.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.

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

1. Map the current project surface.
2. Build the memory/session path first.
3. memory index: $CODEX_HOME/memories/MEMORY.md or ~/.codex/memories/MEMORY.md
4. rollout summaries: $CODEXHOME/memories/rolloutsummaries/
5. raw sessions: $CODEX_HOME/sessions/ or ~/.codex/sessions/
6. Read project past sessions in this order.
7. repo name

### Imported Workflow Notes

#### Imported: Workflow

1. Map the current project surface.
   Identify the repo root and read the most relevant project guidance first, such as `AGENTS.md`, `README.md`, roadmap/ledger files, and local docs that define workflows or validation expectations.

2. Build the memory/session path first.
   Resolve the memory base as `$CODEX_HOME` when set, otherwise default to `~/.codex`.
   Use these locations:
   - memory index: `$CODEX_HOME/memories/MEMORY.md` or `~/.codex/memories/MEMORY.md`
   - rollout summaries: `$CODEX_HOME/memories/rollout_summaries/`
   - raw sessions: `$CODEX_HOME/sessions/` or `~/.codex/sessions/`

3. Read project past sessions in this order.
   If the runtime prompt already includes a memory summary, start there.
   Then search `MEMORY.md` for:
   - repo name
   - repo basename
   - current `cwd`
   - important module or file names
   Open only the 1-3 most relevant rollout summaries first.
   Fall back to raw session JSONL only when the summaries are missing the exact evidence you need.

4. Scan existing project-local skills before suggesting anything new.
   Check these locations relative to the current repo root:
   - `.agents/skills`
   - `.codex/skills`
   - `skills`
   Read both `SKILL.md` and `agents/openai.yaml` when present.

5. Compare project-local skills against recurring work.
   Look for repeated patterns in past sessions:
   - repeated validation sequences
   - repeated failure shields
   - recurring ownership boundaries
   - repeated root-cause categories
   - workflows that repeatedly require the same repo-specific context
   If the pattern appears repeatedly and is not already well captured, it is a candidate skill.

6. Separate `new skill` from `update existing skill`.
   Recommend an update when an existing skill is already the right bucket but has stale triggers, missing guardrails, outdated paths, weak validation instructions, or incomplete scope.
   Recommend a new skill only when the workflow is distinct enough that stretching an existing skill would make it vague or confusing.

7. Check for overlap with global skills only after reviewing project-local skills.
   Use `$CODEX_HOME/skills` and `$CODEX_HOME/skills/public` to avoid proposing project-local skills for workflows already solved well by a generic shared skill.
   Do not reject a project-local skill just because a global skill exists; project-specific guardrails can still justify a local specialization.

#### Imported: Overview

Audit the project's real recurring workflows before recommending skills. Prefer evidence from memory, rollout summaries, existing skill folders, and current repo conventions over generic brainstorming.

Recommend updates before new skills when an existing project skill is already close to the needed behavior.

#### Imported: Session Analysis

### 1. Search memory index first

- Search `MEMORY.md` with `rg` using the repo name, basename, and `cwd`.
- Prefer entries that already cite rollout summaries with the same repo path.
- Capture:
  - repeated workflows
  - validation commands
  - failure shields
  - ownership boundaries
  - milestone or roadmap coupling

### 2. Open targeted rollout summaries

- Open the most relevant summary files under `memories/rollout_summaries/`.
- Prefer summaries whose filenames, `cwd`, or `keywords` match the current project.
- Extract:
  - what the user asked for repeatedly
  - what steps kept recurring
  - what broke repeatedly
  - what commands proved correctness
  - what project-specific context had to be rediscovered

### 3. Use raw sessions only as a fallback

- Only search `sessions/` JSONL files if rollout summaries are missing a concrete detail.
- Search by:
  - exact `cwd`
  - repo basename
  - thread ID from a rollout summary
  - specific file paths or commands
- Use raw sessions to recover exact prompts, command sequences, diffs, or failure text, not to replace the summary pass.

### 4. Turn session evidence into skill candidates

- A candidate `new skill` should correspond to a repeated workflow, not just a repeated topic.
- A candidate `skill update` should correspond to a workflow already covered by a local skill whose triggers, guardrails, or validation instructions no longer match the recorded sessions.
- Prefer concrete evidence such as:
  - "this validation sequence appeared in 4 sessions"
  - "this ownership confusion repeated across extractor and runtime fixes"
  - "the same local script and telemetry probes had to be rediscovered repeatedly"

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @project-skill-audit to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/project-skill-audit/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/project-skill-audit/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @project-skill-audit using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Recommend a new skill when:
- the same repo-specific workflow or failure mode appears multiple times across sessions
- success depends on project-specific paths, scripts, ownership rules, or validation steps
- the workflow benefits from strong defaults or failure shields
- Recommend an update when:
- an existing project-local skill already covers most of the need
- SKILL.md and agents/openai.yaml drift from each other

### Imported Operating Notes

#### Imported: Recommendation Rules

- Recommend a new skill when:
  - the same repo-specific workflow or failure mode appears multiple times across sessions
  - success depends on project-specific paths, scripts, ownership rules, or validation steps
  - the workflow benefits from strong defaults or failure shields

- Recommend an update when:
  - an existing project-local skill already covers most of the need
  - `SKILL.md` and `agents/openai.yaml` drift from each other
  - paths, scripts, validation commands, or milestone references are stale
  - the skill body is too generic to reflect how the project is actually worked on

- Do not recommend a skill when:
  - the pattern is a one-off bug rather than a reusable workflow
  - a generic global skill already fits with no meaningful project-specific additions
  - the workflow has not recurred enough to justify the maintenance cost

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/project-skill-audit`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Failure Shields

- Do not invent recurring patterns without session or repo evidence.
- Do not recommend duplicate skills when an update to an existing skill would suffice.
- Do not rely on a single memory note if the current repo clearly evolved since then.
- Do not bulk-load all rollout summaries; stay targeted.
- Do not skip rollout summaries and jump straight to raw sessions unless the summaries are insufficient.
- Do not recommend skills from themes alone; recommendations should come from repeated procedures, repeated validation flows, or repeated failure modes.
- Do not confuse a project's current implementation tasks with its reusable skill needs.

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

#### Imported: What To Scan

- Past sessions and memory:
  - memory summary already in context, if any
  - `$CODEX_HOME/memories/MEMORY.md` or `~/.codex/memories/MEMORY.md`
  - the 1-3 most relevant rollout summaries for the current repo
  - raw `$CODEX_HOME/sessions` or `~/.codex/sessions` JSONL files only if summaries are insufficient

- Project-local skill surface:
  - `./.agents/skills/*/SKILL.md`
  - `./.agents/skills/*/agents/openai.yaml`
  - `./.codex/skills/*/SKILL.md`
  - `./skills/*/SKILL.md`

- Project conventions:
  - `AGENTS.md`
  - `README.md`
  - roadmap, ledger, architecture, or validation docs
  - current worktree or recent touched areas if needed for context

#### Imported: Output Expectations

Return a compact audit with:

1. `Existing skills`
   List the project-local skills found and the main workflow each one covers.

2. `Suggested updates`
   For each update candidate, include:
   - skill name
   - why it is incomplete or stale
   - the highest-value change to make

3. `Suggested new skills`
   For each new skill, include:
   - recommended skill name
   - why it should exist
   - what would trigger it
   - the core workflow it should encode

4. `Priority order`
   Rank the top recommendations by expected value.

#### Imported: Naming Guidance

- Prefer short hyphen-case names.
- Use project prefixes for project-local skills when that improves clarity.
- Prefer verb-led or action-oriented names over vague nouns.

#### Imported: Follow-up

If the user asks to actually create or update one of the recommended skills, switch to `$skill-creator` and implement the chosen skill rather than continuing the audit.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

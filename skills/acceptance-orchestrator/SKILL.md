---
name: acceptance-orchestrator
description: "Acceptance Orchestrator workflow skill. Use this skill when the user needs a coding task should be driven end-to-end from issue intake through implementation, review, deployment, and acceptance verification with minimal human re-intervention and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["acceptance-orchestrator", "coding", "task", "should", "driven", "end-to-end", "issue", "intake"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Acceptance Orchestrator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/acceptance-orchestrator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Acceptance Orchestrator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Required Sub-Skills, Inputs, State Machine, Stop Conditions, Human Gates, Output Contract.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task already has an issue or clear acceptance criteria and should run end-to-end with minimal human re-intervention.
- You need structured handoff across implementation, review, deployment, and final verification.
- You want explicit stop conditions and escalation instead of silent partial completion.
- Use when the request clearly matches the imported source intent: a coding task should be driven end-to-end from issue intake through implementation, review, deployment, and acceptance verification with minimal human re-intervention.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Intake
2. Read issue and extract task goal + DoD.
3. Issue gate
4. Use create-issue-gate logic.
5. If issue is not ready or execution gate is not allowed, stop immediately.
6. Do not implement anything while issue remains draft.
7. Execute

### Imported Workflow Notes

#### Imported: Workflow

1. **Intake**
   - Read issue and extract task goal + DoD.

2. **Issue gate**
   - Use `create-issue-gate` logic.
   - If issue is not `ready` or execution gate is not `allowed`, stop immediately.
   - Do not implement anything while issue remains `draft`.

3. **Execute**
   - Hand off to `closed-loop-delivery` for implementation and local verification.

4. **Review loop**
   - If PR feedback is relevant, batch polling windows as:
     - wait `3m`
     - then `6m`
     - then `10m`
   - After the `10m` round, stop waiting and process all visible comments together.

5. **Deploy and runtime verification**
   - If DoD depends on runtime behavior, deploy only to `dev` by default.
   - Verify with real logs/API/Lambda behavior, not assumptions.

6. **Completion gate**
   - Before any claim of completion, require `verification-before-completion`.
   - No success claim without fresh evidence.

#### Imported: Overview

Orchestrate coding work as a state machine that ends only when acceptance criteria are verified with evidence or the task is explicitly escalated.

Core rule: **do not optimize for "code changed"; optimize for "DoD proven".**

#### Imported: Required Sub-Skills

- `create-issue-gate`
- `closed-loop-delivery`
- `verification-before-completion`

Optional supporting skills:
- `deploy-dev`
- `pr-watch`
- `pr-review-autopilot`
- `git-ship`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @acceptance-orchestrator to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/acceptance-orchestrator/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/acceptance-orchestrator/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @acceptance-orchestrator using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/acceptance-orchestrator`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Inputs

Require these inputs:
- issue id or issue body
- issue status
- acceptance criteria (DoD)
- target environment (`dev` default)

Fixed defaults:
- max iteration rounds = `2`
- PR review polling = `3m -> 6m -> 10m`

#### Imported: State Machine

- `intake`
- `issue-gated`
- `executing`
- `review-loop`
- `deploy-verify`
- `accepted`
- `escalated`

#### Imported: Stop Conditions

Move to `accepted` only when every acceptance criterion has matching evidence.

Move to `escalated` when any of these happen:
- DoD still fails after `2` full rounds
- missing secrets/permissions/external dependency blocks progress
- task needs production action or destructive operation approval
- review instructions conflict and cannot both be satisfied

#### Imported: Human Gates

Always stop for human confirmation on:
- prod/stage deploys beyond agreed scope
- destructive git/data operations
- billing or security posture changes
- missing user-provided acceptance criteria

#### Imported: Output Contract

When reporting status, always include:
- `Status`: intake / executing / accepted / escalated
- `Acceptance Criteria`: pass/fail checklist
- `Evidence`: commands, logs, API results, or runtime proof
- `Open Risks`: anything still uncertain
- `Need Human Input`: smallest next decision, if blocked

Do not report "done" unless status is `accepted`.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

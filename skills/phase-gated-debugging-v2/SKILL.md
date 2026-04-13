---
name: phase-gated-debugging-v2
description: "Phase-Gated Debugging workflow skill. Use this skill when the user needs debugging any bug. Enforces a 5-phase protocol where code edits are blocked until root cause is confirmed. Prevents premature fix attempts and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["phase-gated-debugging-v2", "phase-gated-debugging", "debugging", "any", "bug", "enforces", "phase", "protocol"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Phase-Gated Debugging

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/phase-gated-debugging` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Phase-Gated Debugging

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: The Protocol, Bug-Type Strategies, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- a bug keeps getting "fixed" without resolving the underlying issue
- you need to slow an agent down and force disciplined debugging before code edits
- the failure is intermittent, a regression, performance-related, or otherwise hard to isolate
- you want an explicit user confirmation checkpoint before any fix is applied
- Use when the request clearly matches the imported source intent: debugging any bug. Enforces a 5-phase protocol where code edits are blocked until root cause is confirmed. Prevents premature fix attempts.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

AI coding agents see an error and immediately edit code. They guess at fixes, get it wrong, and spiral. This skill enforces a strict 5-phase protocol where you CANNOT edit source code until the root cause is identified and confirmed.

Based on [claude-debug](https://github.com/krabat-l/claude-debug) (full plugin with PreToolUse hook enforcement).

#### Imported: The Protocol

### Phase 1: REPRODUCE
Run the failing command/test. Capture the exact error. Run 2-3 times for consistency.
- Do NOT read source code
- Do NOT hypothesize
- Do NOT edit any files

### Phase 2: ISOLATE
Read code. Add diagnostic logging marked `// DEBUG`. Re-run with diagnostics. Binary search to narrow down.
- Only `// DEBUG` marked logging is allowed
- Do NOT fix the bug even if you see it

### Phase 3: ROOT CAUSE
Analyze WHY at the isolated location. Use "5 Whys" technique. Remove debug logging.

State: "This is my root cause analysis: [explanation]. Do you agree, or should I investigate further?"

**WAIT for user confirmation. Do NOT proceed without it.**

### Phase 4: FIX
Remove all `// DEBUG` lines. Apply minimal change addressing confirmed root cause.
- Only edit files related to root cause
- Do NOT refactor unrelated code

### Phase 5: VERIFY
Run original failing test — must pass. Run related tests. For intermittent bugs, run 5+ times.
If verification fails: root cause was wrong, go back to Phase 2.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @phase-gated-debugging-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/phase-gated-debugging-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/phase-gated-debugging-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @phase-gated-debugging-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- NEVER edit source code in phases 1-3 (except // DEBUG in phase 2)
- NEVER proceed past phase 3 without user confirmation
- ALWAYS reproduce before investigating
- ALWAYS verify after fixing
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Key Rules

1. NEVER edit source code in phases 1-3 (except `// DEBUG` in phase 2)
2. NEVER proceed past phase 3 without user confirmation
3. ALWAYS reproduce before investigating
4. ALWAYS verify after fixing

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/phase-gated-debugging`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Bug-Type Strategies

| Type | Technique |
|------|-----------|
| Crash/Panic | Stack trace backward — trace the bad value to its source |
| Wrong Output | Binary search — log midpoint, halve search space each iteration |
| Intermittent | Compare passing vs failing run logs — find ordering divergence |
| Regression | `git bisect` — find the offending commit |
| Performance | Timing at stage boundaries — find the bottleneck |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

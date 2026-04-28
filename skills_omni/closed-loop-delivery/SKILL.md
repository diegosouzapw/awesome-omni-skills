---
name: "closed-loop-delivery"
description: "Closed-Loop Delivery workflow skill. Use this skill when the user needs a coding task must be completed against explicit acceptance criteria with minimal user re-intervention across implementation, review feedback, deployment, and runtime verification and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "closed-loop-delivery"
  - "coding"
  - "task"
  - "must"
  - "completed"
  - "explicit"
  - "acceptance"
  - "criteria"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "closed-loop-delivery"
family_name: "Closed-Loop Delivery"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/closed-loop-delivery"
upstream_skill: "skills/closed-loop-delivery"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "closed-loop-delivery"
---

# Closed-Loop Delivery

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/closed-loop-delivery` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Closed-Loop Delivery

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Required Inputs, Issue Gate Dependency, Iteration/Stop Conditions, Output Contract, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- user gives a coding/fix task and expects end-to-end completion
- task spans code + tests + PR comments + dev deploy + runtime checks
- repeated manual prompts like "now test", "now deploy", "now re-check PR" should be avoided
- pure Q&A/explanations
- prod deploy requests without explicit human approval
- tasks blocked by missing secrets/account access that cannot be inferred

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Define DoD
2. Convert request into testable criteria.
3. Example: checkout task DoD = "checkout endpoint returns a valid, openable third-party payment URL in dev".
4. Implement minimal change
5. Keep scope tight to task goal.
6. Verify locally
7. Run focused tests first, then broader checks if needed.

### Imported Workflow Notes

#### Imported: Default Workflow

1. **Define DoD**
   - Convert request into testable criteria.
   - Example: checkout task DoD = "checkout endpoint returns a valid, openable third-party payment URL in dev".

2. **Implement minimal change**
   - Keep scope tight to task goal.

3. **Verify locally**
   - Run focused tests first, then broader checks if needed.

4. **Review loop**
   - Fetch PR comments/reviews.
   - Classify valid vs non-actionable.
   - Fix valid items, re-run verification.

5. **Dev deploy + runtime verification**
   - Deploy to `dev` when runtime behavior matters.
   - Verify via real API/Lambda/log evidence against DoD.

6. **Completion decision**
   - Only report "done" when all DoD checks pass.
   - Otherwise continue loop until pass or stop condition.

#### Imported: Overview

Treat each task as incomplete until acceptance criteria are verified in evidence, not until code is merely changed.

Core rule: **deliver against DoD (Definition of Done), not against code diff size.**

#### Imported: Required Inputs

Before execution, define these once:
- task goal
- acceptance criteria (DoD)
- target environment (`dev` by default)
- max iteration rounds (default `2`)

If acceptance criteria are missing, request them once. If user does not provide, propose a concrete default and proceed.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @closed-loop-delivery to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @closed-loop-delivery against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @closed-loop-delivery for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @closed-loop-delivery using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Round 1: wait 3m, collect delta comments/reviews
- Round 2: wait 6m, collect delta again
- Final round: wait 10m, collect all remaining visible comments/reviews
- process all new comments in one batch
- avoid immediate re-poll after each single comment
- after the 10m round, stop waiting and proceed with all comments visible at that point
- production/staging deploy beyond agreed scope

### Imported Operating Notes

#### Imported: PR Comment Polling Policy

Avoid noisy short polling by default. Use batched windows:

- **Round 1:** wait `3m`, collect delta comments/reviews
- **Round 2:** wait `6m`, collect delta again
- **Final round:** wait `10m`, collect all remaining visible comments/reviews

At each round:
- process all new comments in one batch
- avoid immediate re-poll after each single comment
- after the `10m` round, stop waiting and proceed with all comments visible at that point

If CI is still running, align polling to check completion boundaries instead of fixed rapid polling.

#### Imported: Human Gate Rules (Must Ask)

Require explicit user confirmation for:
- production/staging deploy beyond agreed scope
- destructive operations (history rewrite, force push, data-destructive ops)
- actions with billing/security posture changes
- secret values not available in repo/runtime
- ambiguous DoD that materially changes outcome

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/closed-loop-delivery`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@burp-suite-testing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burpsuite-project-parser` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@business-analyst` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@busybox-on-windows` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Issue Gate Dependency

Before execution, prefer using `create-issue-gate`.

- If issue status is `ready` and execution gate is `allowed`, continue.
- If issue status is `draft`, do not execute implementation/deploy/review loops.
- Require user-provided, testable acceptance criteria before starting execution.

#### Imported: Iteration/Stop Conditions

Stop and escalate with a concise blocker report when:
- DoD still fails after max rounds (`2` default)
- external dependency blocks progress (provider outage, missing creds, account permission)
- conflicting review instructions cannot both be satisfied

Escalation report must include:
- what passed
- what failed
- evidence (commands/logs/API result)
- smallest decision needed from user

#### Imported: Output Contract

When claiming completion, always include:
- acceptance criteria checklist with pass/fail
- commands/tests run
- runtime evidence (endpoint/Lambda/log key lines)
- PR status (new actionable comments count)

Do not claim success without evidence.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

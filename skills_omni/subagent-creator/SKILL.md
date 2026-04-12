---
name: "subagent-creator"
description: "Subagent Creator workflow skill. Use this skill when a user needs to design an AI subagent with isolated context for complex multi-step work, specialized verification, debugging, review, routing, or orchestration. Use it to create bounded, testable subagents with clear triggers, tool limits, structured outputs, and escalation rules. Do NOT use it for Cursor-specific subagents; use cursor-subagent-creator for that."
version: "0.0.1"
category: "ai-agents"
tags:
  - "subagent-creator"
  - "subagents"
  - "agent-design"
  - "delegation"
  - "verification"
  - "debugging"
  - "orchestration"
  - "structured-outputs"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "subagent-creator"
family_name: "Subagent Creator"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/subagent-creator"
upstream_skill: "skills/subagent-creator"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "subagent-creator"
---

# Subagent Creator

## Overview

This skill helps an operator design effective, agent-agnostic subagents for systems that support delegation to isolated specialists.

Use it when you need more than a reusable prompt or static skill: a task has a stable responsibility, benefits from isolated context, needs different tools or permissions, or should be independently verified before handoff.

This curated version preserves the upstream intent while improving operational guidance. It emphasizes delegation contracts, explicit boundaries, structured outputs, evaluation before rollout, and safe escalation. It is intentionally platform-agnostic and should work as a design workflow for any agent framework that supports subagents or specialized delegated assistants.

If the request is specifically about Cursor-native subagents, use `cursor-subagent-creator` instead.

## When to Use This Skill

Use this skill when the user wants to:

- create a new subagent, specialized assistant, verifier, debugger, reviewer, router, or orchestrator
- split complex work into isolated specialist roles
- define a delegation contract with stable inputs, outputs, and triggers
- add an independent verification or audit pass to an existing workflow
- reduce context bleed by giving a specialist only the task-specific information it needs
- improve automation reliability by requiring structured outputs from delegated work

Use a **subagent** when most of these are true:

- the responsibility is narrow and repeatable
- invocation conditions can be described clearly
- the task benefits from separate context or separate reasoning focus
- the parent agent should receive a predictable output instead of a long freeform narrative
- the work needs distinct tool access, file scope, or approval rules
- the task may run in parallel with other specialist tasks

Prefer a **direct prompt** or **skill** instead when:

- the task is one-off or too vague to define stable triggers
- the work does not need isolated context
- there is no clear success criterion
- the task is simple enough for the parent agent to handle directly
- the proposed “subagent” is just a generic helper with no unique responsibility

Do **not** use this skill when:

- the user specifically wants Cursor-specific subagent configuration
- the proposed subagent would have broad autonomous authority without approval boundaries
- the role is poorly scoped, overlaps heavily with the parent agent, or lacks measurable outputs
- the workflow involves high-risk actions such as secrets handling, auth changes, payments, production deployment, or destructive changes without verifier or human review

## Operating Table

| Design choice | Recommended default | Use this when | Avoid this when |
| --- | --- | --- | --- |
| Scope | One clear responsibility | You can summarize the mission in one sentence | The role is “general helper” or “does everything” |
| Context | Minimal task packet | The subagent only needs bounded files, constraints, and goals | You are forwarding full project history without filtering |
| Permissions | Start read-only | The subagent is analyzing, reviewing, planning, or verifying | The task truly requires edits or tool actions |
| Tools | Explicit allowlist | The subagent needs a known set of tools to complete work | Tool access is assumed implicitly |
| Output mode | Structured output preferred | The parent agent must parse or compare results reliably | A freeform essay is being used for machine-consumed output |
| Model selection | Inherit parent unless there is a reason not to | The task does not need a special latency or cost profile | You are changing models without a workflow reason |
| Verification | Add a verifier for risky or high-impact work | The result affects security, correctness, compliance, or release readiness | The task is low-risk and fully observable |
| Escalation | Define explicit stop conditions | Missing context, approval, confidence, or authority should halt action | The subagent is expected to guess or improvise |

## Workflow

Follow this sequence when creating or revising a subagent.

### 1. Decide whether a subagent is the right mechanism

Ask:

1. Does the task have a stable, repeatable responsibility?
2. Does it benefit from isolated context?
3. Does it need different tools, permissions, or verification?
4. Can you define clear inputs, outputs, and stop conditions?

If the answer is mostly no, use a direct prompt or another skill instead.

### 2. Define the subagent mission

Write one sentence that states:

- what the subagent owns
- what it should not own
- what a successful handoff looks like

Good:

- `Security reviewer for authentication, payments, and secrets-sensitive changes.`
- `Debugger for reproducible test failures and runtime exceptions.`
- `Verifier that independently checks declared work before approval.`

Weak:

- `General coding assistant.`
- `Helps with many technical tasks.`

### 3. Write the routing boundary

Define both sides of the trigger:

- **Use when**: positive invocation conditions
- **Do not use when**: nearby tasks that should stay with the parent or another specialist
- **Escalate when**: conditions that require human review or parent-agent intervention

This is one of the most important parts of the design. A good description improves automatic and manual delegation accuracy.

### 4. Define the input contract

List the minimum required context:

- task goal
- relevant files or artifacts
- constraints
- acceptance criteria
- known risks or assumptions
- missing information policy

If the subagent cannot act safely without specific information, require it to report missing context instead of guessing.

### 5. Define capability and authority boundaries

Document:

- allowed tools
- forbidden tools or systems
- allowed file scope
- whether it is read-only or write-capable
- actions that require approval before execution

Use least privilege by default. Do not assume a subagent inherits unlimited tool or file access just because the parent agent has it.

### 6. Define the output contract

Prefer machine-checkable structure when the output will be consumed by another agent.

At minimum specify:

- status
- summary
- findings or results
- evidence
- unresolved questions
- approval or escalation flags

Use the local template in [examples/subagent-contract-template.md](examples/subagent-contract-template.md) and schema example in [examples/verifier-subagent-schema.json](examples/verifier-subagent-schema.json).

### 7. Draft the subagent instructions

A strong prompt usually contains:

1. identity and responsibility
2. invocation conditions
3. required process steps
4. output format
5. constraints and prohibited actions
6. uncertainty and escalation behavior

Keep it concise, specific, and testable.

### 8. Evaluate before adoption

Before relying on the subagent, test at least:

- one positive trigger case
- one negative trigger case
- one ambiguous routing case
- one edge case with incomplete context
- one failure or escalation case

Score the results with [references/delegation-evaluation-rubric.md](references/delegation-evaluation-rubric.md).

### 9. Roll out gradually

Start with:

- read-only permissions if possible
- limited task classes
- a visible output schema
- a verifier for risky workflows
- human review for high-impact actions

Tighten routing, inputs, and output structure based on failure patterns.

## Subagent Contract Template

Use this contract shape before writing final prompt text.

```markdown
Name: <kebab-case-name>
Purpose: <one-sentence mission>
Use when:
- <positive trigger 1>
- <positive trigger 2>
Do not use when:
- <boundary condition 1>
- <boundary condition 2>
Inputs required:
- <required input 1>
- <required input 2>
Allowed tools:
- <tool or none>
Forbidden actions:
- <action 1>
- <action 2>
Files/systems allowed:
- <scope>
Output contract:
- <schema or required fields>
Success criteria:
- <criterion 1>
- <criterion 2>
Escalate when:
- <missing context>
- <approval needed>
- <confidence too low>
```

For a reusable copy, see [examples/subagent-contract-template.md](examples/subagent-contract-template.md).

## Common Patterns

See [references/subagent-patterns-matrix.md](references/subagent-patterns-matrix.md) for a quick comparison. Common high-value subagent types include:

- **Planner / decomposer**: breaks a goal into ordered work items
- **Researcher / retriever**: gathers evidence, references, or implementation context
- **Executor**: performs bounded implementation work
- **Verifier**: independently checks whether declared work actually meets criteria
- **Debugger**: isolates root cause and proposes or applies minimal fixes
- **Reviewer / critic**: inspects quality, maintainability, and gaps
- **Safety / policy checker**: reviews risky domains and escalation needs
- **Router / orchestrator helper**: decides whether work should be delegated further

A strong default pattern for sensitive workflows is **planner + executor + verifier**, where the verifier gathers independent evidence rather than simply agreeing with the executor.

## Examples

### Example 1: Simple verifier subagent definition

```markdown
---
name: verifier
description: Validates completed work. Use after tasks are marked done or before approval.
model: inherit
readonly: true
---

You are an independent verifier.

When invoked:
1. Identify the claimed outcome.
2. Check the relevant files, tests, or artifacts.
3. Confirm what actually passes.
4. Report mismatches, gaps, and unresolved risks.

Do not modify files unless explicitly authorized.

Return:
- status
- verified claims
- failed or unverified claims
- evidence
- escalation_needed
```

Why it works:

- narrow mission
- clear trigger
- read-only by default
- structured, machine-usable output

### Example 2: Debugger with evidence requirements

See [examples/debugger-subagent-example.md](examples/debugger-subagent-example.md).

### Example 3: Planner + verifier pair

See [examples/planner-verifier-pair.md](examples/planner-verifier-pair.md).

### Example 4: Ask an agent to design a subagent contract

```text
Use @subagent-creator to design a verifier subagent for release-readiness checks. Include: use-when triggers, do-not-use boundaries, read-only default permissions, allowed tools, structured output fields, and escalation rules for missing evidence or approval-required actions.
```

### Example 5: Review a proposed subagent before rollout

```text
Review this subagent design with @subagent-creator. Check whether the responsibility is narrow, delegation triggers are testable, tool access is least-privilege, outputs are structured, and the rollout plan includes positive, negative, ambiguous, and escalation test cases.
```

## Best Practices

### ✅ Do

- define one clear responsibility per subagent
- write descriptions that say **when to use** the subagent, not just what it is
- include both **use when** and **do not use when** boundaries
- start with read-only permissions unless writes are necessary
- explicitly allowlist tools and file scope
- require structured outputs for machine-consumed results
- separate facts, assumptions, blockers, and unresolved questions
- require escalation for missing context, low confidence, or approval-gated actions
- test routing accuracy before broad rollout
- add an independent verifier for risky or high-impact workflows

### ❌ Avoid

- vague roles such as `general helper` or `handles miscellaneous tasks`
- prompts that rely on implicit authority or undefined tool access
- long prompts full of philosophy but no clear process or output contract
- verifier agents that merely restate the executor’s claims without checking evidence
- overlapping subagents with nearly identical triggers
- broad autonomous subagents for auth, payments, secrets, production deploys, or destructive actions without human review
- freeform outputs when the parent agent needs deterministic parsing
- adopting a subagent widely before testing negative and ambiguous cases

## Troubleshooting

### Problem: The subagent is never invoked

**Symptoms:** The parent agent keeps handling the task directly, or another specialist gets chosen instead.

**Solution:** Tighten the description and routing cues. Add explicit trigger language such as `Use when investigating failing tests` or `Use after implementation is declared complete`. Reduce overlap with neighboring specialists.

### Problem: The subagent is invoked too often or for the wrong tasks

**Symptoms:** The specialist activates on unrelated requests or duplicates work the parent agent should do.

**Solution:** Add a stronger `Do not use when` boundary. Narrow the mission to one responsibility. Remove generic terms like `general`, `any`, or `all-purpose` from the description.

### Problem: Output is verbose but not operationally useful

**Symptoms:** The result is long, but the parent agent cannot tell whether the task passed, failed, or needs escalation.

**Solution:** Require a fixed output contract with fields such as `status`, `findings`, `evidence`, `open_questions`, and `escalation_needed`. Use the schema example and tighten acceptance criteria.

### Problem: The subagent lacks enough context to act safely

**Symptoms:** It guesses, hallucinates file locations, or produces low-confidence work from incomplete inputs.

**Solution:** Define minimum required inputs. Instruct the subagent to return a missing-context response instead of proceeding when critical information is absent.

### Problem: The verifier agrees with incorrect work

**Symptoms:** The verifier repeats the executor's summary without independent checks.

**Solution:** Require independent evidence gathering. Instruct the verifier to identify claimed outcomes first, then test or inspect them directly, and report unverified claims separately.

### Problem: The subagent behaves too autonomously in risky domains

**Symptoms:** It proposes or performs auth, secrets, payment, deployment, or destructive changes without review boundaries.

**Solution:** Restrict permissions, require approval gates, add a verifier, and define mandatory human escalation for high-risk operations.

### Problem: Multiple subagents overlap and create routing confusion

**Symptoms:** Similar agents compete for the same task or produce duplicated work.

**Solution:** Refactor around distinct ownership. Give each subagent a unique trigger, clear exclusions, and a different output contract if needed.

## Additional Resources

Use these local support files as the working packet for designing and reviewing subagents:

- [Subagent design checklist](references/subagent-design-checklist.md)
- [Subagent patterns matrix](references/subagent-patterns-matrix.md)
- [Delegation evaluation rubric](references/delegation-evaluation-rubric.md)
- [Subagent troubleshooting playbook](references/subagent-troubleshooting-playbook.md)
- [Subagent contract template](examples/subagent-contract-template.md)
- [Verifier structured output schema](examples/verifier-subagent-schema.json)
- [Debugger subagent example](examples/debugger-subagent-example.md)
- [Planner and verifier pair example](examples/planner-verifier-pair.md)
- [Routing note: direct vs subagent vs multi-agent](agents/subagent-router-note.md)

## Related Skills

- `@cursor-subagent-creator` — use when the task is specifically about Cursor-native subagent implementation
- `@prompt-engineering` — use when the user needs a single prompt improved rather than a delegated specialist designed
- `@workflow-design` — use when the task is broader than a single subagent and requires end-to-end orchestration design

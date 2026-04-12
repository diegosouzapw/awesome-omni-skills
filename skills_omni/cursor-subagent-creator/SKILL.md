---
name: "cursor-subagent-creator"
description: "Cursor Subagent Creator workflow skill. Use this skill when the user needs to create Cursor-specific custom agents in `.cursor/agents/` or `~/.cursor/agents/` with clear delegation triggers, least-privilege settings, and testable prompts for complex multi-step workflows. Do not use it for generic non-Cursor subagent creation; use `subagent-creator` instead."
version: "0.0.1"
category: "ai-agents"
tags:
  - "cursor-subagent-creator"
  - "cursor"
  - "custom-agents"
  - "subagents"
  - "delegation"
  - "prompt-design"
  - "workflow"
  - "validation"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "cursor"
  - "codex-cli"
  - "claude-code"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "cursor-subagent-creator"
family_name: "Cursor Subagent Creator"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/cursor-subagent-creator"
upstream_skill: "skills/cursor-subagent-creator"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "cursor-subagent-creator"
---

# Cursor Subagent Creator

## Overview

Use this skill to create or refine **Cursor custom agents** for specialized work in Cursor editor.

This skill is specifically for authoring agent files in:

- `.cursor/agents/` for project-scoped agents
- `~/.cursor/agents/` for user-scoped agents

It is best for tasks that benefit from:

- isolated context
- repeatable specialization
- clear delegation triggers
- structured outputs
- optional parallel or background execution

This skill preserves the upstream intent while shifting the workflow toward **safe, scoped, testable Cursor agent authoring**. It is not for generic subagent creation outside Cursor.

## When to Use This Skill

Use this skill when you need to:

- create a new Cursor custom agent for a recurring specialized task
- convert a vague workflow into a focused agent with one clear responsibility
- design a verifier, debugger, reviewer, auditor, doc-writer, or orchestrator for Cursor
- improve an existing Cursor agent that delegates poorly or behaves too broadly
- add least-privilege settings such as `readonly: true` for review-only agents
- validate whether a Cursor custom agent should be project-scoped or user-scoped
- define a prompt contract that makes delegation and outputs more predictable

Do **not** use this skill when:

- the request is for a non-Cursor subagent system
- the task is a one-off simple action that does not need isolated context
- the requirement is a persistent coding policy or team rule; that belongs in Cursor Rules, not a custom agent prompt
- the task is better expressed as a command, shortcut, or a regular skill instead of a reusable Cursor agent

If the request is not Cursor-specific, hand off to `subagent-creator`.

## Operating Table

| Decision area | Recommended default | Use when | Avoid when |
| --- | --- | --- | --- |
| Scope | Project-scoped in `.cursor/agents/` | The behavior is specific to one repo, team, or codebase | The agent is truly reusable across unrelated projects |
| User scope | `~/.cursor/agents/` only when justified | You personally reuse the same specialization across many projects | The prompt contains repo-specific assumptions |
| Responsibility | One narrowly defined job | You can describe the agent in one sentence with one output contract | The prompt tries to plan, implement, test, review, and document everything |
| `description` | Explicit delegation trigger language | You want Cursor to delegate automatically or more reliably | The description is generic, broad, or ambiguous |
| `model` | `inherit` | The parent agent model is sufficient | You are cargo-culting a specific model without a measured reason |
| `readonly` | `true` for analysis/review agents | The agent should inspect, verify, audit, or report without editing | The agent is expected to implement or directly modify files |
| Write access | Only when implementation is intentional | The agent must make targeted code or doc changes | The task is review-only, advisory, or safety-sensitive |
| `is_background` | `false` | You need immediate iteration, quick feedback, or close supervision | The task is long-running but requires constant interactive steering |
| Background mode | Only for long-running work | The task can complete asynchronously with a defined report format | The output is ambiguous, exploratory, or requires many back-and-forth clarifications |

For field-specific guidance, see [Cursor agent frontmatter guide](references/cursor-agent-frontmatter-guide.md).

## Workflow

1. **Confirm task fit**
   - Ask whether this should be a Cursor custom agent at all.
   - Prefer a custom agent only if the task is specialized, reusable, and benefits from isolated context.
   - If the need is persistent policy, use Cursor Rules instead.

2. **Define the single responsibility**
   - Write one sentence that names exactly what the agent does.
   - Good: "Validate completed implementation against stated requirements."
   - Bad: "Help with engineering tasks."

3. **Choose scope**
   - Use `.cursor/agents/` for project-specific behavior.
   - Use `~/.cursor/agents/` only if the agent is broadly reusable across projects.
   - Choose a kebab-case filename such as `security-auditor.md`.

4. **Decide permissions and execution mode**
   - Start with least privilege.
   - Set `readonly: true` for reviewers, verifiers, auditors, and analyzers.
   - Leave write access available only for implementers or fixers.
   - Set `is_background: true` only for long-running tasks with clear completion expectations.

5. **Draft frontmatter**
   - Use a specific `name` if needed; otherwise the filename can act as the identifier.
   - Write a high-signal `description` that says when the agent should be used.
   - Prefer `model: inherit` unless there is a concrete speed/cost/capability reason to change it.

6. **Draft the prompt body**
   - Keep it focused and operational.
   - Include these sections:
     - Role
     - Use when
     - Inputs expected
     - Steps
     - Constraints
     - Output format
     - Done criteria
   - Keep one responsibility and one reporting contract.

7. **Add invocation guidance**
   - Explain where the file was created.
   - Provide one automatic delegation example and one explicit invocation example.
   - If background mode is enabled, explain what completion/reporting should look like.

8. **Validate delegation quality**
   - Test one positive trigger: a prompt that should invoke the agent.
   - Test one negative trigger: a nearby prompt that should not invoke it.
   - Tighten the description if delegation is too broad or too weak.

9. **Validate execution quality**
   - Check whether the output follows the promised structure.
   - Confirm the agent has the right permissions for its role.
   - Confirm the prompt is concise, explicit, and free of conflicting instructions.

10. **Finalize and hand off safely**
   - Summarize the created file path, intended use, permission mode, and testing results.
   - Flag any uncertainty instead of overstating automation reliability.

Use the local checklist before considering the agent complete: [Cursor agent validation checklist](references/cursor-agent-validation-checklist.md).

## Decision Guide

Use the local decision guide when the mechanism is unclear:

- [Rule vs Skill vs Command vs Cursor Custom Agent](references/cursor-agent-decision-tree.md)

Short version:

- **Cursor Rule**: stable instruction or policy that should apply persistently
- **Skill**: reusable workflow guidance without requiring Cursor custom-agent delegation
- **Command**: narrow one-off action or shortcut
- **Cursor custom agent**: specialized delegated execution with isolated context

## Prompt Design Guidance

A strong Cursor custom agent usually has:

1. **A clear role**
   - Example: "You are a verification specialist for completed implementation tasks."

2. **A sharp trigger description**
   - Example: "Use after implementation is reported complete and needs verification against requirements, tests, and edge cases."

3. **A defined process**
   - A short ordered list of steps the agent should follow.

4. **Explicit constraints**
   - Example: do not edit files, avoid assumptions, report uncertainty.

5. **A structured output contract**
   - Example sections: Summary, Evidence, Findings, Recommended next action.

6. **Done criteria**
   - State what must be true before the agent can consider the task complete.

### Good description patterns

- "Use when investigating failing tests, runtime errors, or unclear root causes."
- "Use after implementation is complete to verify correctness, test coverage, and edge cases."
- "Use for security-sensitive code paths such as authentication, payments, or secret handling."
- "Use for multi-phase workflows that require coordination across specialized agents."

### Weak description patterns

- "Helps with development tasks."
- "General assistant for coding."
- "Use for anything related to code quality."

### Prompt mini-lint

Before finalizing, ask:

- Is the responsibility singular and obvious?
- Is the description specific enough to trigger on the right tasks?
- Are there conflicting instructions between frontmatter and body?
- Is the output format reviewable and stable?
- Does the permission model match the task?
- Is background mode truly necessary?

## Examples

### Example 1: Create a verifier agent

User request:

```text
Create a Cursor verifier agent that checks whether finished tasks are actually complete and should not edit files.
```

Recommended outcome:

- file path: `.cursor/agents/verifier.md`
- key settings: `readonly: true`, `model: inherit` or `fast`
- delegation description: verification after implementation claims
- output contract: pass/fail summary, evidence, gaps, next actions

See a worked example: [examples/cursor-agent-verifier.md](examples/cursor-agent-verifier.md)

### Example 2: Create a debugger agent

User request:

```text
Create a Cursor debugger agent for failing tests and runtime issues. It should focus on reproduction and root cause first.
```

Recommended outcome:

- file path: `.cursor/agents/debugger.md`
- key behavior: reproduce, isolate, identify root cause, propose or apply minimal fix
- avoid: broad generic "fix everything" language

See a worked example: [examples/cursor-agent-debugger.md](examples/cursor-agent-debugger.md)

### Example 3: Create an orchestrator agent

User request:

```text
Create a Cursor orchestrator agent that coordinates planning, implementation, and verification for multi-phase work.
```

Recommended outcome:

- one responsibility: coordinate handoffs, not perform every specialist role itself
- output contract: phase plan, delegated tasks, collected results, unresolved issues
- use only when specialization and sequencing are both needed

See a worked example: [examples/cursor-agent-orchestrator.md](examples/cursor-agent-orchestrator.md)

### Example 4: Use the reusable template

```text
Draft a new Cursor custom agent using the packaged template. Keep it focused, readonly if possible, and include positive and negative delegation test cases.
```

Template: [examples/cursor-agent-template.md](examples/cursor-agent-template.md)

### Example 5: Print the quickstart packet

```bash
python3 skills/cursor-subagent-creator/scripts/print_cursor_agent_quickstart.py
```

This prints a short local quickstart covering file locations, field choices, and validation steps.

## Best Practices

### ✅ Do

- Give each agent **one clear responsibility**.
- Write a **specific description** that explains when Cursor should delegate.
- Prefer **project scope** unless cross-project reuse is real and proven.
- Use **least privilege**; make review and audit agents read-only by default.
- Keep prompts **concise, explicit, and structured**.
- Define a **stable output format** that humans can review quickly.
- Test both **automatic delegation** and **explicit invocation**.
- Add new project-scoped agents to version control when they should be shared with the team.
- Use background mode only when asynchronous completion is acceptable.
- Require evidence-oriented reporting for verifier, audit, and review agents.

### ❌ Avoid

- Generic descriptions such as "helps with code".
- Agents that combine planner, implementer, tester, reviewer, and documenter into one vague prompt.
- Giving write access to agents that only need to inspect or report.
- Using background mode for tasks that require close iterative feedback.
- Over-long prompts with repeated or conflicting instructions.
- Creating many overlapping agents before validating whether a small focused set already covers the workflow.
- Treating delegation as guaranteed without testing it.

### Safe defaults

- Default to `model: inherit`.
- Default to foreground execution.
- Default to project scope.
- Default to `readonly: true` for analysis-only roles.
- Escalate privileges only when the task genuinely requires edits.

## Troubleshooting

### Problem: The agent is never delegated

**Symptoms:** Cursor does not pick the custom agent for tasks you expected it to handle.

**Solution:** Narrow and strengthen the `description`. Include concrete task triggers, such as failing tests, completed implementation verification, payment security review, or documentation drafting. Remove vague phrases like "general help". Then test with one explicit positive trigger prompt.

### Problem: The agent triggers on the wrong tasks

**Symptoms:** Cursor delegates unrelated or overly broad work to the custom agent.

**Solution:** Tighten the description and body to one responsibility. Remove broad language like "all code quality tasks" or "any engineering issue". Add a negative test prompt and revise until nearby tasks stop matching.

### Problem: A review agent can edit files when it should not

**Symptoms:** A verifier, auditor, or reviewer is able to modify files or is written as if it should implement fixes directly.

**Solution:** Set `readonly: true`, update the body to emphasize inspection and reporting, and move implementation instructions into a separate write-enabled agent if needed.

### Problem: An implementation agent cannot make required changes

**Symptoms:** The agent is correctly scoped but cannot apply the edits the workflow expects.

**Solution:** Confirm the role really is implementation rather than review. If implementation is intended, remove read-only restrictions and make the change capability explicit in the prompt. Keep scope narrow and reversible.

### Problem: A background agent feels stalled or unreviewable

**Symptoms:** Progress is unclear, completion is ambiguous, or the work would have benefited from interactive iteration.

**Solution:** Reduce task scope, define clearer reporting checkpoints, or switch back to foreground mode. Use background mode only for work that can finish asynchronously with a well-defined final report.

### Problem: Output is inconsistent or hard to review

**Symptoms:** Responses vary too much, omit evidence, or do not support handoff.

**Solution:** Harden the output contract. Require fixed sections such as Summary, Findings, Evidence, Risks, and Next Actions. If needed, simplify the prompt and remove optional branches.

For a symptom-to-cause-to-fix table, see [Cursor agent troubleshooting reference](references/cursor-agent-troubleshooting.md).

## Related Skills

- `@subagent-creator` - Use when the request is for non-Cursor or tool-agnostic subagent creation.
- `@prompt-engineering` - Use when the main problem is weak instruction design rather than Cursor-specific agent packaging.
- `@debugging` - Use after creating a debugger-focused agent when the work shifts into active diagnosis and repair.
- `@code-review` - Use after creating a reviewer/verifier agent when the task becomes a concrete review pass.
- `@security-audit` - Use when the custom agent being designed is for security-sensitive review and deeper audit guidance is needed.

If those skills are not available in the local catalog, do not invent them; use this skill's local references and examples instead.

## Additional Resources

### Local references

- [Cursor agent decision tree](references/cursor-agent-decision-tree.md)
- [Cursor agent frontmatter guide](references/cursor-agent-frontmatter-guide.md)
- [Cursor agent validation checklist](references/cursor-agent-validation-checklist.md)
- [Cursor agent troubleshooting reference](references/cursor-agent-troubleshooting.md)

### Local examples

- [Reusable Cursor agent template](examples/cursor-agent-template.md)
- [Verifier example](examples/cursor-agent-verifier.md)
- [Debugger example](examples/cursor-agent-debugger.md)
- [Orchestrator example](examples/cursor-agent-orchestrator.md)

### Local script

- [Quickstart printer](scripts/print_cursor_agent_quickstart.py)

### Primary external documentation

- Cursor Docs: Custom Agents
- Cursor Docs: Agents
- Cursor Docs: Rules
- Cursor Docs: Background Agents

## Expected Output When You Use This Skill

When creating a Cursor custom agent, provide:

1. **Chosen file path**
   - `.cursor/agents/<name>.md` or `~/.cursor/agents/<name>.md`
2. **Final agent file content**
3. **Why the scope was chosen**
4. **Why the permission model was chosen**
5. **One positive delegation test prompt**
6. **One negative delegation test prompt**
7. **How to invoke it explicitly if needed**
8. **Any risks or follow-up refinements**

That keeps the result actionable, reviewable, and safer to adopt.

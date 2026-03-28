---
name: llm-patterns
description: "LLM application workflow skill. Use this skill when a user needs robust patterns for tool use, structured outputs, fallback paths, or agent behavior."
version: "0.0.1"
category: ai-agents
tags: [llm, agents, tool-use, structured-output, reliability, orchestration]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-03-27"
---

# LLM Patterns

## Overview

Use this skill when the user needs robust application patterns around LLM behavior instead of a single prompt tweak. It is for tool use, structured outputs, retries, timeouts, fallback paths, human confirmation boundaries, and system-level reliability.

This skill should bias toward explicit state machines and observable behavior. Good output should make model actions, tool boundaries, and failure handling legible to engineers and operators.

## When to Use This Skill

- Use when the workflow depends on tools, external APIs, or long-running agent behavior.
- Use when the user needs structured outputs, retries, guardrails, or escalation paths.
- Use when an AI feature needs application-level reliability instead of only prompt-level tuning.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Tool-using assistant | validation and confirmation | Tool calls, schemas, and write boundaries are explicit |
| Long-running workflow | task state and recovery | Restarts, retries, and resumability are designed before launch |
| Production rollout | observability and fallback | Logs, artifacts, and failure states are visible to operators |
| Human-in-the-loop flow | approval checkpoints | Sensitive actions stop at clear confirmation boundaries |
| Multi-model or multi-step system | orchestration contract | Each step has a role, schema, and recovery path |

## Core Concepts

### The LLM Is a Component, Not the Whole System

Treat model output as one part of a larger runtime that also includes tool selection, validation, retries, rate limits, and auditability.

### Reliability Comes From Contracts

Explicit schemas, timeouts, confirmation boundaries, and fallback behavior usually improve reliability more than making the prompt longer.

## Workflow

1. Choose the interaction pattern: direct answer, structured extraction, tool calling, retrieval plus synthesis, or a multi-step agent workflow.
2. Define boundaries and state by naming what the model may decide, what requires confirmation, and how task state survives retries or restarts.
3. Add validation and fallback for schemas, tool results, timeout behavior, and partial failure before debating prompt polish.
4. Make observability first-class with task states, tool logs, persisted artifacts, and operator-visible failure modes.
5. Evaluate the whole workflow across happy path, stale context, slow tools, malformed outputs, and interrupted execution.

## Examples

### Example 1: Tool-using agent design

```text
Design a reliable AI workflow that searches a catalog, prepares an install plan, asks for confirmation on writes, and persists task state across restarts.
```

**Explanation:** The answer should focus on state transitions, confirmation boundaries, and fallback behavior.

### Example 2: Pattern review packet

```bash
python3 skills/llm-patterns/scripts/render_pattern_review.py \
  "skill installer agent" \
  "tool safety,task durability,structured output"
```

**Explanation:** Use the packet when the user needs a structured review of an LLM system pattern.

### Example 3: Approval boundary matrix

```text
Use @llm-patterns to design a review workflow for a skill installer that can search and plan automatically but must stop for confirmation before any filesystem write.
```

**Explanation:** This framing is useful when the hardest part is separating safe automation from privileged actions.

### Example 4: Local pattern packet from the skill folder

```bash
cd skills/llm-patterns
python3 scripts/render_pattern_review.py \
  "catalog orchestrator" \
  "state machine,artifact logging,approval gates"
```

**Explanation:** This path makes the local pattern packet reusable inside the skill workspace.

## Best Practices

- ✅ **Do:** validate tool inputs and structured outputs before trusting them.
- ✅ **Do:** add explicit confirmation for sensitive or destructive operations.
- ✅ **Do:** separate generation, execution, and recovery logic cleanly.
- ❌ **Don't:** let hidden retries or silent fallbacks mask system failures.
- ❌ **Don't:** treat a prompt change as a substitute for runtime contracts.

## Troubleshooting

### Problem: The agent behaves inconsistently

**Symptoms:** Similar tasks produce different tool choices, output structures, or recovery paths.  
**Solution:** Tighten the runtime contract, reduce ambiguity in tool selection, and validate state transitions explicitly.

### Problem: Failures are hard to debug

**Symptoms:** Operators cannot tell whether the issue was retrieval, prompting, tool execution, or persistence.  
**Solution:** Split the workflow into observable steps with artifacts, logs, and explicit failure states.

### Problem: The system seems reliable in demos but collapses under real traffic

**Symptoms:** Happy-path prompts work, but concurrency, partial failures, or slow dependencies cause unpredictable behavior.
**Solution:** Re-check state boundaries, timeout budgets, idempotency, and whether the orchestration model can recover cleanly from partial work.

## Related Skills

- `@prompt-engineer` — Use when the main problem is instruction clarity or examples.
- `@rag-engineer` — Use when grounded retrieval is a core part of the system design.
- `@security-auditor` — Use when tool boundaries, permissions, or data exfiltration risk need review.

## Additional Resources

- [LLM patterns checklist](references/checklist.md)
- [Approval boundary worksheet](references/approval-boundary-worksheet.md)
- [Failure mode rubric](references/failure-mode-rubric.md)
- [Render a pattern review packet](scripts/render_pattern_review.py)
- [Task state matrix](examples/task-state-matrix.md)

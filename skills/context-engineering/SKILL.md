---
name: context-engineering
description: "Context engineering workflow skill. Use this skill when a user needs to shape prompts, retrieval context, memory, and tool context into a reliable context packet for an agent or LLM system."
version: "0.0.1"
category: ai-agents
tags: [context, prompts, retrieval, memory, tools, agent-design]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-28"
date_updated: "2026-03-28"
---

# Context Engineering

## Overview

Use this skill when a team needs to shape what an LLM or agent sees, in what order, and with what constraints. It is for system prompts, retrieval payloads, memory summaries, tool descriptions, budget allocation, and the contract between raw data and model context.

Good output should reduce context chaos. The goal is to make the model's working context intentional, bounded, and testable instead of a pile of prompt fragments and oversized retrieval dumps.

## When to Use This Skill

- Use when a prompt works inconsistently because too much context is being injected without structure.
- Use when a RAG or agent workflow needs clearer rules for retrieval, summarization, and tool context.
- Use when memory, instructions, and task state are competing for limited context budget.
- Use when model behavior changes depending on ordering or formatting of context blocks.
- Use when a team needs a reusable context packet design before scaling to more tasks or tools.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Prompt instability | context order | Instructions, retrieved facts, and task state are sequenced intentionally |
| RAG drift | evidence contract | Retrieved material is filtered, bounded, and labeled before the model sees it |
| Tool-heavy agent | tool context | Tool descriptions and preconditions are concise, relevant, and easy to choose from |
| Memory creep | context budget | Durable memory, ephemeral state, and fresh evidence are separated clearly |
| New agent workflow | context packet | One portable packet defines what the model sees and why |

## Core Concepts

### Not All Context Has the Same Job

Instructions, memory, retrieved evidence, and tool contracts should not compete in the same undifferentiated blob. Each block needs a distinct role and a clear reason to exist.

### Context Budget Is a Product Constraint

If the context packet grows without policy, the model becomes less predictable and more expensive. Good context engineering chooses what to omit just as deliberately as what to include.

## Workflow

1. Define the task boundary, the model role, and the failure modes caused by missing, stale, or excessive context.
2. Split context into durable instructions, task state, retrieved evidence, memory, and tool contracts, then decide the ordering rules.
3. Set a context budget policy that controls what is trimmed, summarized, or excluded before the model call.
4. Build the context packet with explicit labels, section semantics, and provenance so each block is interpretable.
5. Close with a validation packet that names expected behaviors, omitted context, and what should be tested next.

## Examples

### Example 1: Agent context cleanup

```text
Use @context-engineering to redesign the prompt and context packet for this agent so memory, retrieved docs, and tool instructions stop competing with each other.
```

**Explanation:** Use this when prompt quality problems are really context-shape problems.

### Example 2: Context packet renderer

```bash
python3 skills/context-engineering/scripts/render_context_packet.py \
  "support-agent" \
  "system prompt,retrieval snippets,tool contracts,memory summary" \
  "ordering,budget,provenance"
```

**Explanation:** Use this to create a starting structure for a context design review.

### Example 3: Retrieval contract review

```text
Use @context-engineering to tell me which retrieved content should be kept raw, summarized, or dropped before the model sees it.
```

**Explanation:** Use this when the issue is not retrieval itself but the shape of what enters the prompt.

## Best Practices

- Separate instruction blocks from evidence blocks so the model can distinguish policy from facts.
- Keep tool descriptions short enough that they improve action choice instead of adding distraction.
- Define a context budget with explicit trimming and summarization rules.
- Preserve provenance for retrieved evidence so the model and reviewer can reason about trust.
- Prefer stable packet structure across requests so evals and debugging stay comparable.
- Document what is intentionally excluded from context and why.

## Troubleshooting

### Problem: The prompt keeps growing, but behavior does not improve

**Symptoms:** More documents, more instructions, or more memory are added, yet the model still misses key constraints or becomes inconsistent.
**Solution:** Separate the context by role, trim low-value sections, and rebuild the packet around the minimum required evidence and policy.

### Problem: Retrieval quality is acceptable, but answers still drift

**Symptoms:** Relevant material is retrieved, but the model overweights stale memory, generic instructions, or noisy snippets.
**Solution:** Reorder the packet, label evidence clearly, and define what gets summarized or excluded before the call.

### Problem: Tool-heavy agents behave unpredictably

**Symptoms:** The model oscillates between tools, ignores preconditions, or forgets how to use them correctly.
**Solution:** Shrink the tool context to concise contracts, move examples into targeted support material, and keep only the currently relevant tools in the packet.

## Related Skills

- `@prompt-engineer` — Use when the system prompt itself needs to be rewritten after the context packet is clarified.
- `@rag-engineer` — Use when retrieval mechanics, chunking, or indexing are the real bottleneck.
- `@eval-design` — Use when the new context packet needs a regression plan before rollout.

## Additional Resources

- [Context engineering checklist](references/checklist.md)
- [Context budget worksheet](references/context-budget-worksheet.md)
- [Retrieval contract template](references/retrieval-contract-template.md)
- [Render a context packet](scripts/render_context_packet.py)
- [Context packet example](examples/context-packet.md)

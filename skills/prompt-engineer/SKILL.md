---
name: prompt-engineer
description: "Prompt engineering workflow skill. Use this skill when a user needs clearer task instructions, examples, decomposition, or evaluation for LLM behavior."
version: "0.0.1"
category: ai-agents
tags: [prompting, llm, instructions, examples, evaluation, reasoning]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-03-27"
---

# Prompt Engineer

## Overview

Use this skill when the user needs better model behavior through clearer instructions instead of more guesswork. It is for prompt structure, examples, delimiters, decomposition, evaluation prompts, and safer response contracts.

This skill should optimize for reproducibility, not prompt theater. Good output should make task intent, required format, and failure handling explicit enough that another engineer can reuse the prompt reliably.

## When to Use This Skill

- Use when an LLM task is too vague, inconsistent, or fragile.
- Use when the user needs example-driven prompting, structured outputs, or clearer instructions.
- Use when a workflow needs a prompt plus an evaluation loop, not just a single request.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| Unstable prompt | task contract and constraints | Input, output, and refusal rules are explicit |
| Structured output need | schema and examples | The prompt teaches exact output shape without ambiguity |
| Multi-step workflow | generation vs evaluation split | First-pass output and second-pass checks are separated |
| Safety-sensitive task | abstention and escalation | Missing, unsafe, or out-of-scope input is handled cleanly |
| Reusable prompt kit | templates and rubric | Another engineer can reuse the prompt without tribal context |

## Core Concepts

### Clarity Beats Cleverness

Short, direct instructions with explicit structure usually outperform ornate prompt language. State the task, context, constraints, and required output plainly.

### Examples Teach the Model the Shape

If output format, tone, or refusal behavior matters, show it. One or two representative examples are often more useful than another paragraph of description.

## Workflow

1. Define the task contract: job to be done, allowed inputs, required output shape, and the refusal or fallback conditions.
2. Add structure and boundaries with headings, delimiters, or explicit sections so the model can separate rules, inputs, and examples.
3. Add representative examples only when they teach schema shape, tone, or reasoning structure the model is likely to miss.
4. Separate generation from evaluation so output quality is checked in a second pass instead of overloaded into one prompt.
5. Document failure modes for missing context, ambiguity, unsafe input, and out-of-scope requests.

## Examples

### Example 1: Structured output prompt

```text
Rewrite this agent prompt so it always returns a JSON object with summary, risks, and next_actions.
```

**Explanation:** The answer should tighten instructions, delimiters, and output constraints.

### Example 2: Prompt packet

```bash
python3 skills/prompt-engineer/scripts/render_prompt_packet.py \
  "review a release plan" \
  "json output,examples,refusal rules"
```

**Explanation:** Use the packet when the user needs a prompt template plus evaluation structure.

### Example 3: Evaluation-first prompt rewrite

```text
Use @prompt-engineer to rewrite this prompt and also produce a compact rubric that checks whether the model followed the schema, tone, and refusal policy.
```

**Explanation:** This framing helps when the team needs a prompt plus a reusable evaluation loop.

### Example 4: Local prompt packet from the skill folder

```bash
cd skills/prompt-engineer
python3 scripts/render_prompt_packet.py \
  "summarize a deployment incident" \
  "citation tags,refusal rules,review rubric"
```

**Explanation:** This path is useful when the prompt kit is being assembled directly inside the skill workspace.

## Best Practices

- ✅ **Do:** state the task, constraints, and output format explicitly.
- ✅ **Do:** add examples when they teach a real pattern, not just more words.
- ✅ **Do:** separate generation and evaluation when reliability matters.
- ❌ **Don't:** rely on vague style directions to enforce structure.
- ❌ **Don't:** overload one prompt with conflicting goals and hidden priorities.

## Troubleshooting

### Problem: The model ignores the desired structure

**Symptoms:** Outputs drift from the schema, ordering, or style you asked for.  
**Solution:** Tighten the contract, add one good example, and move non-essential instructions out of the critical path.

### Problem: The prompt works for one example but not another

**Symptoms:** Small input changes cause big output instability.  
**Solution:** Re-check whether the prompt has hidden assumptions, missing refusal rules, or too few representative examples.

### Problem: The prompt is technically correct but hard for the team to reuse

**Symptoms:** A single engineer can make it work, but others cannot tell which instructions are essential or which examples are canonical.
**Solution:** Convert the prompt into a small kit with a contract template, evaluation rubric, and one or two representative examples.

## Related Skills

- `@rag-engineer` — Use when prompt quality depends on retrieval evidence and citation behavior.
- `@llm-patterns` — Use when the system also needs tool use, retries, fallback logic, or orchestration.
- `@find-skills` — Use when the user may already need a published AI-focused skill rather than a new prompt from scratch.

## Additional Resources

- [Prompt engineering checklist](references/checklist.md)
- [Prompt contract template](references/prompt-contract-template.md)
- [Prompt review rubric](references/prompt-review-rubric.md)
- [Render a prompt packet](scripts/render_prompt_packet.py)
- [Evaluation loop worksheet](examples/evaluation-loop-worksheet.md)

---
name: llm-prompt-optimizer-v2
description: "LLM Prompt Optimizer workflow skill. Use this skill when the user needs improving prompts for any LLM. Applies proven prompt engineering techniques to boost output quality, reduce hallucinations, and cut token usage and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["llm-prompt-optimizer-v2", "llm-prompt-optimizer", "improving", "prompts", "for", "any", "llm", "applies"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# LLM Prompt Optimizer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/llm-prompt-optimizer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LLM Prompt Optimizer

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prompt Audit Checklist, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when a prompt returns inconsistent, vague, or hallucinated results
- Use when you need structured/JSON output from an LLM reliably
- Use when designing system prompts for AI agents or chatbots
- Use when you want to reduce token usage without sacrificing quality
- Use when implementing chain-of-thought reasoning for complex tasks
- Use when prompts work on one model but fail on another

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Problem - Symptom - Fix
2. Too vague - Generic, unhelpful answers - Add role + context + constraints
3. No structure - Unformatted, hard-to-parse output - Specify output format explicitly
4. Hallucination - Confident wrong answers - Add "say I don't know if unsure"
5. Inconsistent - Different answers each run - Add few-shot examples
6. Too long - Verbose, padded responses - Add length constraints
7. R — Role: Who is the AI in this interaction?

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Diagnose the Weak Prompt

Before optimizing, identify which problem pattern applies:

| Problem | Symptom | Fix |
|---------|---------|-----|
| Too vague | Generic, unhelpful answers | Add role + context + constraints |
| No structure | Unformatted, hard-to-parse output | Specify output format explicitly |
| Hallucination | Confident wrong answers | Add "say I don't know if unsure" |
| Inconsistent | Different answers each run | Add few-shot examples |
| Too long | Verbose, padded responses | Add length constraints |

### 2. Apply the RSCIT Framework

Every optimized prompt should have:

- **R** — **Role**: Who is the AI in this interaction?
- **S** — **Situation**: What context does it need?
- **C** — **Constraints**: What are the rules and limits?
- **I** — **Instructions**: What exactly should it do?
- **T** — **Template**: What should the output look like?

**Before (weak prompt):**
```
Explain machine learning.
```

**After (optimized prompt):**
```
You are a senior ML engineer explaining concepts to a junior developer.

Context: The developer has 1 year of Python experience but no ML background.

Task: Explain supervised machine learning in simple terms.

Constraints:
- Use an analogy from everyday life
- Maximum 200 words
- No mathematical formulas
- End with one actionable next step

Format: Plain prose, no bullet points.
```

### 3. Chain-of-Thought (CoT) Pattern

For reasoning tasks, instruct the model to think step-by-step:

```
Solve this problem step by step, showing your work at each stage.
Only provide the final answer after completing all reasoning steps.

Problem: [your problem here]

Thinking process:
Step 1: [identify what's given]
Step 2: [identify what's needed]
Step 3: [apply logic or formula]
Step 4: [verify the answer]

Final Answer:
```

### 4. Few-Shot Examples Pattern

Provide 2-3 examples to establish the pattern:

```
Classify the sentiment of customer reviews as POSITIVE, NEGATIVE, or NEUTRAL.

Examples:
Review: "This product exceeded my expectations!" -> POSITIVE
Review: "It arrived broken and support was useless." -> NEGATIVE
Review: "Product works as described, nothing special." -> NEUTRAL

Now classify:
Review: "[your review here]" ->
```

### 5. Structured JSON Output Pattern

```
Extract the following information from the text below and return it as valid JSON only.
Do not include any explanation or markdown — just the raw JSON object.

Schema:
{
  "name": string,
  "email": string | null,
  "company": string | null,
  "role": string | null
}

Text: [input text here]
```

### 6. Reduce Hallucination Pattern

```
Answer the following question based ONLY on the provided context.
If the answer is not contained in the context, respond with exactly: "I don't have enough information to answer this."
Do not make up or infer information not present in the context.

Context:
[your context here]

Question: [your question here]
```

### 7. Prompt Compression Techniques

Reduce token count without losing effectiveness:

```
# Verbose (expensive)
"Please carefully analyze the following code and provide a detailed explanation of
what it does, how it works, and any potential issues you might find."

# Compressed (efficient, same quality)
"Analyze this code: explain what it does, how it works, and flag any issues."
```

#### Imported: Overview

This skill transforms weak, vague, or inconsistent prompts into precision-engineered instructions that reliably produce high-quality outputs from any LLM (Claude, Gemini, GPT-4, Llama, etc.). It applies systematic prompt engineering frameworks — from zero-shot to few-shot, chain-of-thought, and structured output patterns.

#### Imported: Prompt Audit Checklist

Before using a prompt in production:

- [ ] Does it have a clear role/persona?
- [ ] Is the output format explicitly defined?
- [ ] Are edge cases handled (empty input, ambiguous data)?
- [ ] Is the length appropriate (not too long/short)?
- [ ] Has it been tested on 5+ varied inputs?
- [ ] Is hallucination risk addressed for factual tasks?

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @llm-prompt-optimizer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @llm-prompt-optimizer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @llm-prompt-optimizer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @llm-prompt-optimizer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Always specify the output format (JSON, markdown, plain text, bullet list)
- ✅ Do: Use delimiters (```, ---) to separate instructions from content
- ✅ Do: Test prompts with edge cases (empty input, unusual data)
- ✅ Do: Version your system prompts in source control
- ✅ Do: Add "think step by step" for math, logic, or multi-step tasks
- ❌ Don't: Use negative-only instructions ("don't be verbose") — add positive alternatives
- ❌ Don't: Assume the model knows your codebase context — always include it

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Always specify the output format (JSON, markdown, plain text, bullet list)
- ✅ **Do:** Use delimiters (```, ---) to separate instructions from content
- ✅ **Do:** Test prompts with edge cases (empty input, unusual data)
- ✅ **Do:** Version your system prompts in source control
- ✅ **Do:** Add "think step by step" for math, logic, or multi-step tasks
- ❌ **Don't:** Use negative-only instructions ("don't be verbose") — add positive alternatives
- ❌ **Don't:** Assume the model knows your codebase context — always include it
- ❌ **Don't:** Use the same prompt across different models without testing — they behave differently

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/llm-prompt-optimizer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** Model ignores format instructions
**Solution:** Move format instructions to the END of the prompt, after examples. Use strong language: "You MUST return only valid JSON."

**Problem:** Inconsistent results between runs
**Solution:** Lower the temperature setting (0.0-0.3 for factual tasks). Add more few-shot examples.

**Problem:** Prompt works in playground but fails in production
**Solution:** Check if system prompt is being sent correctly. Verify token limits aren't being exceeded (use a token counter).

**Problem:** Output is too long
**Solution:** Add explicit word/sentence limits: "Respond in exactly 3 bullet points, each under 20 words."

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

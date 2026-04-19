---
name: "prompt-engineering-patterns"
description: "Prompt Engineering Patterns workflow skill. Use this skill when the user needs advanced prompt engineering techniques to improve LLM performance, reliability, and controllability through clear instructions, grounded context, output contracts, examples, and eval-driven iteration."
version: "0.0.1"
category: "ai-agents"
tags:
  - "prompt-engineering-patterns"
  - "prompt-engineering"
  - "llm"
  - "structured-outputs"
  - "few-shot"
  - "evals"
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
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "prompt-engineering-patterns"
family_name: "Prompt Engineering Patterns"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/prompt-engineering-patterns"
upstream_skill: "skills/prompt-engineering-patterns"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "prompt-engineering-patterns"
---

# Prompt Engineering Patterns

## Overview

This skill curates the upstream `prompt-engineering-patterns` material into an execution-oriented workflow for designing, testing, and hardening prompts.

Use it when you need more than a clever prompt phrase. Modern prompt engineering is an iterative engineering loop:

1. define the task and success criteria,
2. place instructions at the right priority level,
3. choose the right output contract,
4. add examples or grounded context when needed,
5. test on representative cases,
6. troubleshoot specific failure modes,
7. keep the variants that measurably improve results.

Treat prompts as interfaces, not magic spells. Good prompts reduce ambiguity, make outputs easier to validate, and improve consistency, but they do **not** guarantee determinism. Use lightweight evals and acceptance thresholds before declaring a pattern production-ready.

For quick operator support, use:

- `references/domain-notes.md` for a decision matrix and failure-mode map
- `examples/worked-example.md` for before/after prompt revisions across common task types

## When to Use This Skill

Use this skill when you are:

- designing prompts for production or repeated use
- improving output reliability, structure, or controllability
- deciding between plain instructions, examples, decomposition, or schema-based outputs
- tuning prompts for grounded answers against supplied context
- fixing recurring failures such as hallucinations, format drift, verbosity, or instruction collisions
- building a small eval set to compare prompt variants

Do **not** use this skill as the primary solution when:

- the real problem is bad source data, missing retrieval, or a broken tool integration
- you need model fine-tuning, classifier training, or application architecture changes more than prompt changes
- the task is unrelated to LLM prompting
- you are trying to bypass safety policies or force disallowed behavior

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| You are drafting a prompt from scratch | `## Workflow` | Gives the shortest safe sequence from goal definition to validation |
| You need to choose a prompting pattern | `references/domain-notes.md` | Provides a decision matrix for instructions, few-shot, decomposition, grounding, and structured outputs |
| You need examples that show real improvement | `examples/worked-example.md` | Shows weak vs improved prompts, expected outputs, and what changed |
| You need machine-readable results | `## Output contracts and structured outputs` | Helps you prefer schemas or explicit JSON contracts over brittle prose-only formatting |
| The model is answering confidently without support | `## Grounded context patterns` and `## Troubleshooting` | Adds evidence boundaries and fallback behavior when context is missing or weak |
| The model follows examples but ignores your latest instruction | `## Few-Shot Learning` and `## Troubleshooting` | Helps identify instruction collisions and example overfitting |
| A prompt seems better but results are inconsistent | `## Success Metrics` | Converts taste-based iteration into eval-backed comparison |

## Workflow

1. **Define the objective**
   - State the task in one sentence.
   - Identify the audience, constraints, and failure cost.
   - Decide whether the result is for a human, a downstream tool, or another model step.

2. **Define success before rewriting the prompt**
   - Write 3-5 acceptance checks.
   - Include at least one edge case.
   - If the output feeds automation, include strict format checks.

3. **Place instructions at the correct priority level**
   - Put durable behavior and non-negotiable rules in system/developer instructions when your stack supports them.
   - Put task-specific requests, data, and user intent in the user message.
   - Avoid scattering critical rules across multiple places.

4. **Choose the lightest pattern that fits**
   - Clear instructions only: for straightforward tasks.
   - Few-shot examples: when style, mapping, or transformation behavior matters.
   - Decomposition/checklists: when the task has multiple steps or failure points.
   - Grounded-context prompting: when the answer must come from supplied material.
   - Structured outputs/schema: when the output must be machine-readable.

5. **Write the first prompt with explicit boundaries**
   - Separate instructions, context, and input using headings, XML-style tags, or clear delimiters.
   - State what to do when information is missing, conflicting, or out of scope.
   - Specify output length, format, and refusal or fallback behavior where relevant.

6. **Test against a small eval set**
   - Use 5-20 representative cases.
   - Include normal, edge, and adversarial cases.
   - Compare prompt variants on the same cases.

7. **Troubleshoot by failure mode**
   - Do not just “make it more specific.”
   - Identify whether the problem is instruction clarity, bad examples, weak grounding, poor output contract, or missing eval coverage.

8. **Freeze reusable patterns**
   - Keep the winning prompt with notes on what changed.
   - Retain known-bad cases as regressions.
   - Document provider-specific dependencies such as schema enforcement support.

## Instruction hierarchy and role separation

Prompt quality depends on where instructions live.

- **System/developer instructions**: stable behavior, policy-safe boundaries, tool-use expectations, output rules that should persist across tasks.
- **User instructions**: task request, task data, desired outcome, optional preferences.
- **Reference/context blocks**: source material the model should use or quote from.

Guidelines:

- Keep the highest-priority instructions short and durable.
- Do not rely on a later example to override an earlier hard rule.
- If two instructions conflict, resolve the conflict explicitly in the prompt instead of hoping the model guesses correctly.
- Ask for concise, verifiable reasoning artifacts when needed; do not depend on hidden chain-of-thought extraction as a primary quality mechanism.

## Few-Shot Learning

Use few-shot examples when the task is easier to learn from demonstrations than from abstract rules alone.

Best uses:

- classification with nuanced labels
- rewriting into a house style
- extraction or mapping tasks
- transformations where edge behavior matters

Best practices:

- Keep examples close to the real task distribution.
- Use high-quality examples only; bad examples teach bad behavior.
- Make the examples consistent in format and level of detail.
- Include boundary cases when common mistakes are predictable.
- Keep the number of examples as small as possible while preserving behavior.

Avoid few-shot examples when:

- the task is simple enough for direct instructions
- examples may anchor the model to stale wording or outdated policy
- token budget is tight and the examples are not adding measurable value

Failure signal:

- The model copies example wording, labels, or structure too literally and ignores a new instruction. If that happens, simplify the examples, restate priority rules, or move non-negotiable behavior into higher-priority instructions.

## Reasoning control

Older guidance often overused “think step by step.” Prefer reasoning controls that improve correctness **and** keep outputs auditable.

Use one of these patterns instead:

- **Plan then answer**: ask for a brief plan or checklist before the final output when intermediate structure improves correctness.
- **Decomposition**: split the task into ordered sub-questions.
- **Verification checklist**: require the model to confirm that constraints were met.
- **Answer-only mode**: when extra reasoning text creates noise or leakage into machine-readable outputs.

Prefer this:

- “First identify the governing constraints. Then produce the final answer in the specified schema.”
- “Use the provided source excerpts only. If evidence is insufficient, say what is missing.”
- “Before finalizing, check whether each required field is present and valid.”

Be careful with this:

- “Think step by step” as the only improvement strategy.

Reasoning text is not a substitute for better instructions, examples, grounded evidence, or evals.

## Output contracts and structured outputs

If another system must consume the result, define the output contract first.

Prefer, in order:

1. provider-enforced structured outputs or schemas when available,
2. explicit JSON field contracts when schema enforcement is unavailable,
3. plain text only when human readability matters more than strict parsing.

For machine-readable outputs, specify:

- required fields
- field types
- allowed enums or ranges
- whether extra keys are allowed
- what to return when data is unavailable

Example contract:

```json
{
  "decision": "approve | reject | needs_clarification",
  "reasons": ["string"],
  "missing_information": ["string"]
}
```

Practical rules:

- Say whether prose outside the JSON is forbidden.
- If using plain JSON prompts, require valid JSON and define fallback behavior for missing data.
- If your platform supports schema-constrained generation, prefer that over “return JSON only” phrasing.
- Validate the output in downstream code whenever possible.

## Grounded context patterns

For factual, policy, or domain-sensitive tasks, make the evidence boundary explicit.

Recommended pattern:

- Put reference material in a clearly delimited block.
- Tell the model whether it may use prior knowledge.
- Define the fallback when support is insufficient.

Useful instructions:

- “Answer only from the supplied context.”
- “If the context does not support the answer, say `insufficient_context` and list what is missing.”
- “Quote or cite the specific excerpt that supports each conclusion.”

This is stronger than generic anti-hallucination wording because it defines both the allowed evidence and the behavior when evidence is incomplete.

## Common Pitfalls

- Asking for a perfect result without defining success criteria
- Mixing stable policy rules with task-specific requests in one long user prompt
- Using few-shot examples that teach the wrong style or edge behavior
- Requesting machine-readable output without a precise contract
- Overloading the context window with low-value material
- Assuming a prompt that worked once is production-ready
- Treating verbose reasoning as proof of correctness
- Forgetting to define what the model should do when data is missing or conflicting

## Performance Optimization

Optimize for reliability first, then token cost.

- Shorten instructions that repeat the same rule multiple times.
- Remove decorative wording that does not change behavior.
- Keep examples compact and representative.
- Move persistent behavior to higher-priority instructions instead of repeating it in every request.
- Use schemas or tighter output contracts to reduce repair work downstream.
- Compare prompt variants on the same eval set before choosing the shorter one.
- If the task is tool-using or retrieval-backed, improve tool/context quality before over-tuning prompt phrasing.

## Success Metrics

Measure prompt quality using explicit criteria, not intuition alone.

Suggested dimensions:

- **Task accuracy**: did the answer solve the task correctly?
- **Grounding quality**: were claims supported by provided context when required?
- **Format compliance**: did the output match the requested schema or structure?
- **Refusal appropriateness**: did the model decline unsafe or unsupported requests correctly?
- **Consistency**: does the prompt behave acceptably across repeated representative cases?
- **Latency/token budget**: is the prompt efficient enough for the use case?

Minimum practical eval loop:

1. Create 5-20 representative test cases.
2. Score the current prompt.
3. Change one major variable at a time.
4. Re-run the same cases.
5. Keep the variant only if it improves the selected metrics without unacceptable regressions.

## Troubleshooting

### Problem: Hallucinated facts despite supplied context

- **Likely cause**: weak evidence boundaries, overloaded context, or no fallback rule.
- **Prompt adjustment**: separate context with clear delimiters; instruct the model to answer only from provided material; require `insufficient_context` when support is missing.
- **Verify**: test on cases where the answer is partially or fully absent from the context.

### Problem: Output format breaks across runs

- **Likely cause**: vague formatting instruction or prose leakage around JSON.
- **Prompt adjustment**: define an explicit output contract; forbid extra commentary; use provider-supported structured outputs if available.
- **Verify**: run repeated cases and validate parsing success rate.

### Problem: The model follows examples but ignores the newest instruction

- **Likely cause**: few-shot examples are anchoring behavior too strongly or conflicting with higher-priority rules.
- **Prompt adjustment**: reduce the number of examples; rewrite examples to match the latest policy; move durable rules into higher-priority instructions.
- **Verify**: test a case that would fail if the model copied the example behavior literally.

### Problem: Responses are too long or too verbose

- **Likely cause**: no length target, open-ended task framing, or reasoning text requested when not needed.
- **Prompt adjustment**: specify length or section limits; request answer-only mode; ask for bullet summaries instead of narrative explanation.
- **Verify**: measure average token count on the eval set and check whether quality remains acceptable.

### Problem: The prompt seems improved, but quality is still inconsistent

- **Likely cause**: insufficient eval coverage or the real issue is outside prompting.
- **Prompt adjustment**: expand the eval set; separate prompt changes from retrieval/tool/data issues; define pass/fail thresholds.
- **Verify**: compare results by failure category rather than overall impression.

## Additional Resources

- `references/domain-notes.md` - decision matrix, provider-aware notes, and failure-mode mapping
- `examples/worked-example.md` - concrete before/after prompt revisions with expected outputs
- OpenAI Prompt Engineering Guide
- OpenAI Structured Outputs Guide
- OpenAI Evals Guide
- OpenAI Model Spec
- Anthropic prompt engineering and system prompt guidance

## Related Skills

Consider a different or adjacent skill when the task shifts toward:

- retrieval design or RAG architecture
- tool-use orchestration and agent control
- evaluation framework implementation
- dataset curation or fine-tuning
- safety policy design beyond prompt-level controls

---
name: "prompt-engineering"
description: "Prompt Engineering Patterns workflow skill. Use this skill when the user needs an expert guide to prompt engineering patterns, prompt debugging, and prompt optimization. Use when the user wants to improve prompts, choose prompting strategies, increase output reliability, or diagnose agent behavior."
version: "0.0.1"
category: "ai-agents"
tags:
  - "prompt-engineering"
  - "prompt-design"
  - "few-shot"
  - "structured-outputs"
  - "tool-calling"
  - "debugging"
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
family_id: "prompt-engineering"
family_name: "Prompt Engineering Patterns"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/prompt-engineering"
upstream_skill: "skills/prompt-engineering"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "prompt-engineering"
---

# Prompt Engineering Patterns

## Overview

Use this skill to design, review, and debug prompts with an execution-focused workflow.

This skill is not only about wording. Good prompt engineering also includes:

- choosing the right task pattern
- separating stable instructions from task data
- defining an output contract before generation
- deciding when examples are necessary
- using structured outputs or tool/function calling when reliability matters
- evaluating prompt behavior with a small test set instead of guessing

The upstream intent is preserved: this is an expert guide for prompt engineering patterns, best practices, and optimization techniques. The enhanced version makes those patterns operational so an agent can select, apply, and troubleshoot them safely.

Open these support files when needed:

- `references/prompt-patterns-reference.md` for the decision matrix, anti-patterns, and prompt review checklist
- `examples/prompt-patterns-example-pack.md` for before/after prompt rewrites and expected outcomes across common task types

## When to Use This Skill

Use this skill when the user asks to:

- improve a weak or inconsistent prompt
- choose between zero-shot, few-shot, decomposition, tool use, or schema-constrained output
- debug why an agent ignores instructions, produces malformed output, or hallucinates
- make outputs easier to parse, compare, or automate downstream
- design prompt templates for repeated tasks
- review prompt quality before shipping an agent workflow

Do **not** rely on prompt engineering alone when the real problem is:

- missing or stale knowledge that should come from retrieval or attached context
- a need to perform actions in external systems, which should use tools/function calling
- missing evaluation coverage, where the right fix is a test set rather than more prompt text
- policy or role conflicts caused by system/developer instructions outside the prompt under review

## Operating Table

| Task shape | Recommended starting pattern | Output contract | Use examples? | Common failure signal | Escalation path |
| --- | --- | --- | --- | --- | --- |
| Classification | Direct instruction with explicit labels | Single label or short JSON object | Optional; useful for ambiguous classes | Model invents labels or mixes categories | Add label definitions and 3-5 examples |
| Extraction | Delimited source text plus field list | Structured output or schema | Yes for edge cases | Missing fields, guessed values, malformed JSON | Use schema-constrained output and null rules |
| Summarization | Instruction + audience + length + must-include points | Bullets, template, or short prose | Sometimes | Summary omits critical facts or becomes too verbose | Add coverage criteria and one good example |
| Transformation | Input/output format definition | Template or strict schema | Usually | Style drift, field drift, inconsistent formatting | Provide exact before/after examples |
| Planning | Request ordered steps, assumptions, and constraints | Numbered plan or table | Optional | Vague plans, hidden assumptions | Ask for constraints and verification checklist |
| Tool use | Describe tool purpose, inputs, and boundaries | Tool/function call | Rarely | Invented arguments or simulated actions | Tighten tool descriptions and argument schema |
| Machine-readable generation | Schema-first design | Structured outputs or function/tool call | Optional | Invalid JSON or extra commentary | Prefer schema/tool calling over “respond in JSON” |
| Long-context reasoning | Delimit sources and ask for grounded synthesis | Summary, table, or cited answer | Optional | Hallucinations increase after adding context | Reduce noise, label sources, require evidence mapping |

For more detailed routing, open `references/prompt-patterns-reference.md`.

## Workflow

1. **Classify the task**
   - Determine whether the job is classification, extraction, summarization, transformation, planning, tool use, or constrained generation.
   - Do not start by tweaking phrasing blindly.

2. **Define success criteria**
   - Write down what a good answer must contain.
   - Include format, correctness constraints, required fields, and unacceptable behaviors.
   - If a downstream system must parse the output, decide that now.

3. **Separate instruction layers**
   - Keep stable rules in higher-priority instructions.
   - Keep user content, examples, and source material clearly delimited.
   - Avoid mixing quoted user text with actual instructions.

4. **Draft the smallest prompt that can work**
   - State the task clearly.
   - Provide only the context needed.
   - Specify the expected output shape.
   - Use delimiters for inputs, source text, and examples.

5. **Choose the output contract**
   - Use free text for open-ended writing.
   - Use a template for human-readable consistency.
   - Use structured outputs or function/tool calling when parseability and automation matter.
   - Do not treat free-form “respond in JSON” as the reliability default.

6. **Add examples only when they improve behavior**
   - Prefer 2-5 compact, representative examples.
   - Cover edge cases that the model is currently missing.
   - Remove examples that anchor the model too narrowly.

7. **Run a small evaluation set**
   - Test 3-5 representative cases, including one edge case.
   - Check instruction adherence, factual grounding, format validity, and unnecessary verbosity.
   - Keep one baseline and one revised variant so the delta is visible.

8. **Debug one variable at a time**
   - Change only one of: instruction order, delimiters, examples, context length, schema strictness, or tool description.
   - Record what changed and whether behavior improved.

## Few-Shot Learning

Use few-shot prompting when the model understands the task class but performs inconsistently on format, edge cases, or style.

Best practices:

- Keep examples short and representative.
- Match the real distribution of inputs.
- Show the exact output format you want.
- Include borderline cases when labels or extraction rules are subtle.
- Prefer a few high-quality examples over many noisy ones.

Use few-shot sparingly when:

- the task is already simple and explicit instructions are enough
- examples may bias the model toward a narrow pattern
- long examples crowd out the actual source material

See `examples/prompt-patterns-example-pack.md` for concrete before/after rewrites.

## Chain-of-Thought Prompting

Use this section carefully.

Do **not** treat best practice as “ask for hidden chain-of-thought verbatim.” A safer and more durable pattern is to ask for the observable artifact you actually need, such as:

- a short numbered plan
- key assumptions
- a brief justification
- a checklist-based verification pass
- structured intermediate fields

Good uses:

- planning a sequence of actions
- surfacing assumptions before a recommendation
- checking whether all required constraints were applied
- requiring evidence mapping from provided context

Bad uses:

- requesting long unrestricted reasoning for simple tasks
- forcing verbose rationale when only a label or structured extraction is needed
- assuming more reasoning text always improves correctness

If accuracy improves only when the task is decomposed, ask for explicit sub-steps or intermediate outputs rather than unrestricted internal reasoning.

## Prompt Optimization

Optimize prompts in this order:

1. task clarity
2. instruction hierarchy
3. output contract
4. context quality
5. examples
6. evaluation coverage

Common effective optimizations:

- move the most important instruction earlier
- replace vague goals with testable constraints
- delimit context and label each section
- ask for grounded answers from provided material only
- swap brittle format instructions for structured outputs
- simplify prompts that accumulated conflicting requirements

Avoid “optimization” patterns that only make prompts longer without increasing control.

## Template Systems

Use templates for repeated tasks with stable rules and changing inputs.

A good prompt template has distinct sections such as:

- **Role or operating mode**: stable behavior rules
- **Task**: what to do now
- **Constraints**: must include, must avoid, policy or style limits
- **Context**: source material or retrieved content
- **Output contract**: exact schema, template, or format
- **Optional examples**: only when needed

Template guidance:

- keep placeholders explicit, such as `{source_text}` or `{customer_question}`
- label each section clearly
- avoid embedding instructions inside example data
- version templates when production workflows depend on them
- keep a small eval set with each reusable template

## Troubleshooting

Use the diagnostic pattern: **symptom -> likely cause -> confirming test -> corrective rewrite**.

### 1. The model ignores instructions

- **Likely causes:** critical constraints are buried late, mixed with context, or contradicted by higher-priority instructions.
- **Confirming test:** move the key instruction to the top and remove nonessential context.
- **Corrective rewrite:** separate rules, context, and input into labeled sections; make the required behavior concrete.

### 2. JSON or structured output breaks

- **Likely causes:** free-form prompting, weak format instructions, or too many prose requirements mixed with formatting constraints.
- **Confirming test:** compare a plain “respond in JSON” prompt against a schema-constrained or tool-based version.
- **Corrective rewrite:** use structured outputs or function/tool calling when available; define null handling and required fields.

### 3. Hallucinations increase after adding context

- **Likely causes:** context is noisy, unlabeled, contradictory, or too large relative to the task.
- **Confirming test:** run the same prompt with a smaller, cleaner excerpt.
- **Corrective rewrite:** label sources, remove irrelevant text, require answers to be grounded in provided context, and ask for uncertainty when evidence is missing.

### 4. Few-shot examples make outputs too narrow

- **Likely causes:** examples are overly similar or accidentally teach content instead of pattern.
- **Confirming test:** replace the examples with more varied inputs while keeping the same output contract.
- **Corrective rewrite:** shorten examples, diversify them, and state the general rule explicitly.

### 5. Tool-use prompts produce invented arguments or pretend actions happened

- **Likely causes:** tool boundaries are vague, argument requirements are underspecified, or the prompt encourages simulation.
- **Confirming test:** tighten the tool description and add explicit “do not invent missing arguments” guidance.
- **Corrective rewrite:** define tool purpose, argument schema, missing-input behavior, and when the model must ask for clarification.

### 6. The prompt became long but not better

- **Likely causes:** accumulated patches, redundant examples, and conflicting instructions.
- **Confirming test:** compare against a minimal baseline that preserves only task, constraints, and output contract.
- **Corrective rewrite:** remove repeated guidance and rebuild from the workflow in this skill.

For a denser review checklist and anti-pattern matrix, use `references/prompt-patterns-reference.md`.

## Additional Resources

Primary references used to shape this skill:

- OpenAI Prompt Engineering Guide
- OpenAI Structured Outputs Guide
- OpenAI Function Calling Guide
- OpenAI Model Spec
- OpenAI Best Practices for Prompting
- Anthropic prompt engineering guidance
- Google Cloud prompt design guidance

Use `references/prompt-patterns-reference.md` for a compact operator-facing summary rather than reopening all primary docs during routine execution.

## Related Skills

Hand off or pair with a different skill when the task is primarily about:

- retrieval or grounding against external documents
- tool/function integration and action execution
- evaluation design and regression testing
- output schema design for downstream systems
- agent policy, role precedence, or system prompt governance

If the user request expands beyond prompt quality into data access, orchestration, or production controls, prompt engineering should remain one part of the solution, not the whole solution.

# Prompt Engineering Decision Notes

This file is a compact operator reference for selecting prompt patterns and debugging failures. It complements `SKILL.md` and is intentionally denser and more source-oriented.

## 1. Pattern selection matrix

| Goal | Preferred pattern | Use when | Avoid when | Failure signal | Primary sources |
| --- | --- | --- | --- | --- | --- |
| Get a straightforward answer | Clear direct instructions | Task is simple and human-readable output is acceptable | Task needs strict structure or nuanced mapping | Model answers vaguely or misses constraints | OpenAI Prompt Engineering Guide; Anthropic Overview |
| Teach a transformation or style | Few-shot examples | Examples demonstrate the target behavior better than abstract rules | Examples are noisy, stale, or too long | Model copies examples too literally or ignores latest rules | OpenAI Prompt Engineering Guide; Anthropic Overview |
| Improve multi-step correctness | Decomposition / plan-then-answer / checklists | Task has multiple constraints, edge cases, or verifications | Extra reasoning text would pollute strict output format | Good local steps but weak final compliance | OpenAI Prompt Engineering Guide; Model Spec |
| Require evidence-backed answers | Grounded context prompting | Answer must come from supplied text, docs, or retrieved context | Context is poor quality or incomplete and fallback is undefined | Confident unsupported claims | OpenAI Prompt Engineering Guide; Anthropic Overview; Google Prompting Strategies |
| Produce machine-readable outputs | Structured outputs or explicit schema/JSON contract | Output feeds software, workflows, validators, or other model steps | Human-readable prose is the main need | Invalid JSON, extra commentary, missing required fields | OpenAI Structured Outputs Guide; OpenAI Text Generation Guide; MDN JSON |
| Compare prompt variants reliably | Small eval set with pass/fail or scored criteria | Prompt quality matters across repeated cases | You are still unclear on the actual objective | “Looks better” but no measurable gain | OpenAI Evals Guide; Anthropic Define Success Criteria |

## 2. Instruction placement rules

Use the highest-priority channel your stack supports for the most durable rules.

### Put in system/developer instructions

- stable persona or role constraints
- persistent safety or policy boundaries
- durable tool-use rules
- fixed output rules that must survive across user tasks

### Put in user content

- the actual request
- task-specific data
- local preferences
- task-specific examples unless they should persist across tasks

### Put in delimited context blocks

- source excerpts
- retrieved documents
- policy text to be cited or followed
- data tables or records to transform

### Common collision pattern

A few-shot example says one thing, while the latest task instruction says another. If the model keeps following the example, either:

1. rewrite the examples to match the desired policy,
2. reduce or remove examples,
3. move the non-negotiable rule into higher-priority instructions.

Sources: OpenAI Model Spec, OpenAI Prompt Engineering Guide, Anthropic System Prompts.

## 3. Structured outputs: when to prefer schemas

### Prefer provider-enforced schemas when

- downstream parsing must be reliable
- field presence and types matter
- extra commentary would break consumers
- you need consistent enums, nesting, or arrays

### Plain JSON prompting may be acceptable when

- provider-enforced schema is unavailable
- downstream validation can repair or reject malformed output
- the structure is simple and token cost matters

### Minimum JSON contract to specify

- required keys
- type per key
- allowed enum values
- whether additional keys are permitted
- nullability or fallback behavior
- whether prose outside JSON is forbidden

### Typical malformed-output causes

- prompt asks for “JSON” but does not define the shape
- examples mix prose and JSON
- reasoning text is requested in the same turn as strict machine output
- fallback behavior for missing values is not defined

Sources: OpenAI Structured Outputs Guide, OpenAI Text Generation Guide, MDN JSON.

## 4. Grounding rules

For context-bound tasks, specify all three:

1. **allowed evidence** - what sources the model may use
2. **support requirement** - whether every claim must be supported
3. **fallback behavior** - what to do if support is missing or conflicting

### Strong grounding template

- Use only the material inside `<context>`.
- If the answer is not supported, return `insufficient_context`.
- For each conclusion, cite the supporting excerpt.

### Weak grounding template

- Be accurate and do not hallucinate.

Why the weak version fails: it states a preference, not an operational boundary.

Sources: OpenAI Prompt Engineering Guide, Anthropic Overview, Google Prompting Strategies.

## 5. Failure-mode map

| Failure | Usually means | Best next move | Validate with |
| --- | --- | --- | --- |
| Hallucinated facts | weak grounding or missing fallback rule | delimit context, require evidence-only answering, define insufficient-context behavior | cases where the answer is absent from context |
| Inconsistent output format | vague output contract | add schema or explicit JSON contract, forbid extra prose | parser success rate across repeated runs |
| Model obeys examples but ignores latest rules | example anchoring or instruction collision | rewrite/reduce examples, move hard rules higher | targeted counterexample that distinguishes rule vs example |
| Overlong answers | no length target or unnecessary reasoning text | impose length/section caps, answer-only mode | token count and task-completion score |
| Prompt improvement is subjective only | no eval set or acceptance threshold | define measurable criteria and rerun same cases | before/after eval comparison |
| Good prompt still fails badly | problem may be retrieval, data, or tool behavior | inspect non-prompt dependencies before more prompt tuning | split diagnostics by prompt vs data/tool cause |

## 6. Minimal eval design

Build a small benchmark before declaring success.

Recommended set size: 5-20 cases.

Include:

- common path cases
- edge cases
- one or more adversarial or ambiguous cases
- at least one case that should trigger fallback or refusal behavior

Measure only what matters for the task, for example:

- exact field compliance
- presence of evidence/citations
- classification correctness
- refusal appropriateness
- average token count

Keep known-bad prompts and known-hard cases as regressions.

Sources: OpenAI Evals Guide, Anthropic Define Success Criteria.

## 7. Source links

- OpenAI Prompt Engineering Guide: https://platform.openai.com/docs/guides/prompt-engineering
- OpenAI Text Generation Guide: https://platform.openai.com/docs/guides/text-generation
- OpenAI Structured Outputs Guide: https://platform.openai.com/docs/guides/structured-outputs
- OpenAI Evals Guide: https://platform.openai.com/docs/guides/evals
- OpenAI Model Spec: https://model-spec.openai.com/
- Anthropic Prompt Engineering Overview: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview
- Anthropic System Prompts: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/system-prompts
- Anthropic Define Success Criteria: https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/define-success-criteria
- Google Prompting Strategies: https://ai.google.dev/gemini-api/docs/prompting-strategies
- MDN JSON Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON

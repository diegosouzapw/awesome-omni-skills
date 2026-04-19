# Prompt Patterns Reference

Use this file as a fast decision aid during prompt design or review.

## Task-to-Pattern Matrix

| Task type | Best default pattern | Output contract | When to add examples | Anti-pattern to avoid | Troubleshooting signal | Recommended fix |
| --- | --- | --- | --- | --- | --- | --- |
| Classification | Explicit instruction with label set | Single label or short object | Add examples when classes are semantically close | Open-ended “classify this” without allowed labels | Model invents labels or returns explanations instead of labels | Define allowed labels, decision rule, and one borderline example |
| Extraction | Delimited input plus explicit field list | Structured schema | Add examples for missing/ambiguous fields | “Extract everything important” | Missing fields, guessed values, invalid JSON | Use schema, null policy, and field descriptions |
| Summarization | Audience + length + must-cover points | Bullets or short prose | Add one example when tone or density matters | “Summarize this” with no audience or scope | Summary is too vague, too long, or omits critical facts | Add audience, length, exclusions, and coverage checklist |
| Transformation | Specify source format and target format | Template or schema | Usually helpful | Mixing style guidance with unclear format rules | Inconsistent shape across outputs | Give before/after example and exact target template |
| Planning | Request ordered steps and assumptions | Numbered list or table | Optional | Asking for a plan without constraints | Plan is generic or not actionable | Add constraints, inputs, and a verification step |
| Tool use | Tool description plus invocation boundary | Function/tool call | Rarely needed | Asking model to “use tools if helpful” with no rules | Invented arguments or pretend tool execution | Define tool purpose, required args, and clarification behavior |
| Machine-readable output | Schema-first design | Structured outputs | Optional | “Respond in JSON” as the only constraint | Broken JSON, extra prose, field drift | Use structured outputs or tool calling |
| Grounded synthesis from provided docs | Delimited sources and evidence rule | Summary, table, or cited answer | Optional | Mixing source text with instructions | Hallucinations increase with more context | Label sources, remove noise, require evidence mapping |

## Prompt Review Checklist

Review a prompt against these questions before shipping it:

1. **Task clarity**
   - Is the task class obvious?
   - Would two reviewers describe the same expected outcome?

2. **Instruction hierarchy**
   - Are stable rules separated from user content and examples?
   - Could quoted text be mistaken for instructions?

3. **Context hygiene**
   - Is all provided context relevant?
   - Are sources clearly delimited and labeled?

4. **Output contract**
   - Is the desired output shape explicit?
   - If parseability matters, is a schema or tool call used instead of free-form formatting instructions?

5. **Example quality**
   - Do examples teach the pattern rather than the exact content?
   - Are they representative, compact, and varied enough?

6. **Grounding and uncertainty**
   - Does the prompt say what to do when information is missing?
   - Does it prevent unsupported guessing when context is incomplete?

7. **Operational fit**
   - If the task requires action, is tool/function calling used?
   - If the task depends on external facts, is retrieval or attached context present?

8. **Evaluation readiness**
   - Are there at least 3-5 test cases?
   - Is there a baseline prompt for comparison?

## Common Anti-Patterns

### 1. Rule/context blending
Bad:
- Instructions, examples, and user text all appear in one undifferentiated block.

Why it fails:
- The model has weaker cues about what is policy, what is data, and what is illustrative.

Fix:
- Create labeled sections: Task, Constraints, Context, Output Format, Examples.

### 2. Output-format wishfulness
Bad:
- “Respond in JSON” plus several prose requirements.

Why it fails:
- The model may satisfy prose requests while drifting from strict syntax.

Fix:
- Use structured outputs or function/tool calling when exact machine-readable output matters.

### 3. Over-example anchoring
Bad:
- Examples are too similar or too content-specific.

Why it fails:
- The model copies the examples instead of learning the pattern.

Fix:
- Use fewer, more varied examples and state the general rule directly.

### 4. Prompt inflation
Bad:
- Repeated constraints added after each failure.

Why it fails:
- The prompt becomes contradictory, harder to debug, and slower to execute.

Fix:
- Rebuild from task, constraints, output contract, and one evaluation set.

### 5. Prompting around missing tools
Bad:
- Asking the model to simulate actions or fabricate API results.

Why it fails:
- Prompting cannot replace real execution or fresh data access.

Fix:
- Route to retrieval or tools when the task requires them.

## Quick Rewrite Pattern

When a prompt fails, rewrite in this order:

1. sharpen the task
2. isolate stable instructions
3. define the output contract
4. reduce noisy context
5. add one representative example if needed
6. retest on the same small evaluation set

## Source Basis

This reference condenses guidance from official prompt-engineering, structured output, function calling, and instruction-hierarchy documentation into an operator-facing review aid.

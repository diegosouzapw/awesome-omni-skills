# PydanticAI Runtime Practices

Use this reference while implementing or debugging an agent. It is intentionally denser than `SKILL.md` and focuses on operational details.

## 1. Schema design for result models

Prefer small, explicit result models first.

Good patterns:

- required fields for data you truly need
- bounded numeric values
- enums or literals for closed sets
- field descriptions when names alone are ambiguous
- validators for business rules that the model should not invent around

Avoid:

- giant nested models on the first pass
- many optional fields that hide low-quality outputs
- parsing free-form model text when `result_type` can enforce structure

When validation fails repeatedly:

1. inspect the exact field error
2. simplify the schema
3. clarify the field descriptions or prompt contract
4. only then consider more complex validators

References:

- PydanticAI Agents: https://ai.pydantic.dev/agents/
- Pydantic validators: https://docs.pydantic.dev/latest/concepts/validators/
- OpenAI structured outputs: https://platform.openai.com/docs/guides/structured-outputs

## 2. Tool design rules

Treat tools as narrow contracts between the model and your application.

Recommended:

- one responsibility per tool
- simple, typed arguments
- deterministic behavior where possible
- stable parameter names
- structured returns when the caller needs machine-readable data

Avoid:

- broad `dict`/blob inputs without clear fields
- mixing reads and writes in one tool
- hidden state in globals
- tool outputs that require ad hoc parsing

If the model uses a tool incorrectly, first reduce tool surface area instead of adding prompt text.

References:

- PydanticAI Tools: https://ai.pydantic.dev/tools/
- OpenAI function calling: https://platform.openai.com/docs/guides/function-calling

## 3. Dependency injection boundaries

Use dependencies for runtime state, not prompts.

Good dependency candidates:

- authenticated API clients
- DB sessions or repositories
- request/user context
- feature flags
- service configuration already validated by your app

Benefits:

- easier unit testing
- fewer hidden side effects
- less prompt leakage of operational details
- cleaner separation between model reasoning and application state

References:

- PydanticAI Dependencies: https://ai.pydantic.dev/dependencies/

## 4. Provider preflight checklist

Before changing prompts or schemas, verify:

- the correct provider extra is installed
- `pydantic_ai` imports successfully
- required env vars are set
- your model identifier is valid for the selected backend
- the target account actually has access to that model
- expected structured output and tool behavior are supported by the chosen backend

Do not assume provider feature parity. A model switch may change validation behavior, tool call reliability, latency, and error surfaces.

References:

- PydanticAI Models: https://ai.pydantic.dev/models/
- PydanticAI home: https://ai.pydantic.dev/

## 5. Testing and evals

Tests and evals solve different problems.

Use tests for:

- schema validation logic
- dependency wiring
- tool behavior
- deterministic app-side transformations

Use evals for:

- prompt revisions
- model changes
- tool selection quality
- regression detection on representative user cases

Useful eval set composition:

- 1 baseline success case
- 1 edge case
- 1 failure/abstain case
- 1 regression case based on a real bug

References:

- PydanticAI Testing: https://ai.pydantic.dev/testing/
- PydanticAI Evals: https://ai.pydantic.dev/evals/

## 6. Observability and debugging

Add instrumentation during development so you can see:

- prompts and system instructions actually used
- tool invocation attempts
- argument payloads
- validation boundaries and failures
- retries or unexpected loops

A good debugging sequence:

1. reproduce with a minimal agent
2. log the failing schema or tool arguments
3. confirm provider/model configuration
4. compare behavior before and after the last prompt/tool/model change

References:

- PydanticAI Logfire: https://ai.pydantic.dev/logfire/
- PydanticAI Tools: https://ai.pydantic.dev/tools/

---
name: "pydantic-ai"
description: "PydanticAI \u2014 Typed AI Agents in Python workflow skill. Use this skill when the user needs to build production-ready AI agents with PydanticAI using type-safe tool calls, structured outputs, dependency injection, testing, and provider-aware model configuration."
version: "0.0.1"
category: "ai-agents"
tags:
  - "pydantic-ai"
  - "ai-agents"
  - "python"
  - "llm"
  - "tool-use"
  - "structured-output"
  - "pydantic"
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
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "pydantic-ai"
family_name: "PydanticAI \u2014 Typed AI Agents in Python"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/pydantic-ai"
upstream_skill: "skills/pydantic-ai"
upstream_author: "suhaibjanjua"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "pydantic-ai"
---

# PydanticAI — Typed AI Agents in Python

## Overview

Use this skill when you need a Python agent that should:

- return validated structured results instead of free-form text
- call tools through typed arguments
- keep runtime state out of prompts via dependency injection
- remain testable without relying on live model calls for every change
- switch models or providers with minimal application rewrites

PydanticAI is most useful when correctness, schema validation, and maintainability matter more than a quick prompt-only prototype.

This enhanced version preserves the original skill identity while converting the workflow into an execution-oriented guide. Use the support pack when you need deeper runtime practices, a worked example, or a preflight environment check.

## When to Use

Use this skill when:

- the user is building Python-based AI agents or assistants
- outputs must validate into a Python or Pydantic type
- tools need explicit argument contracts
- external clients, config, request context, or service handles should be injected rather than hidden in globals
- the user mentions `Agent`, `result_type`, tools, `RunContext`, retries, testing, evals, or provider switching

Do **not** use this skill as the first choice when:

- the task is a simple one-shot prompt with no typed output requirements
- the user needs a JavaScript-first or browser-only agent framework
- the system depends on broad, free-form tool schemas or uncontrolled side effects
- provider-specific features are more important than portability

## Operating Table

| Goal | Start here | Validate before moving on | Fallback |
| --- | --- | --- | --- |
| Install and run a first agent | Step 1 and `scripts/validate-runtime.py` | Python version, package install, provider env vars, model string | Use a simpler provider/model pair and re-run preflight |
| Produce structured outputs | Step 2 and `Structured Outputs and Result Models` | Result model validates without post-hoc string parsing | Simplify the schema and tighten field instructions |
| Add tool use safely | `Tools and Dependency Injection` | Tool args are narrow, typed, and deterministic | Split one broad tool into smaller tools |
| Inject runtime state | `Tools and Dependency Injection` | External clients/config passed via dependencies, not globals | Create a dependency container/dataclass |
| Test behavior locally | `Testing and Evals` | Core logic and schema behavior pass without live LLM dependency | Mock the model/tool boundary first |
| Debug failures | `Troubleshooting` and `references/runtime-practices.md` | You can identify whether the issue is schema, tool, or provider config | Reproduce with a minimal agent and one tool |

## Workflow

1. Confirm the task really needs typed agent behavior rather than a plain prompt.
2. Install PydanticAI and the provider-specific extras you actually need.
3. Define a strict result model before writing prompts that assume a response shape.
4. Build a minimal agent that returns one validated result.
5. Add tools as narrow typed functions; keep side effects explicit.
6. Inject runtime state through dependencies instead of prompt text or globals.
7. Test schema behavior and business logic locally.
8. Run representative eval cases before shipping prompt, tool, or model changes.
9. Add instrumentation or tracing during development so validation and tool failures are observable.

## Step 1: Installation

Install the base library plus the provider extras required for the model you plan to use.

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install "pydantic-ai-slim[openai]"
```

Provider extras vary by backend. Keep these boundaries explicit:

- OpenAI-style usage requires the matching extra and credentials
- other providers may require different extras, model identifiers, or environment variables
- feature parity is not guaranteed across providers even if PydanticAI exposes a unified API

Recommended preflight checks:

- Python is supported by your project and environment
- `pydantic_ai` imports cleanly
- the provider extra is installed
- required API credentials are present in environment variables
- the configured model identifier is valid for that provider/account

Run the included preflight script before debugging agent logic:

```bash
python scripts/validate-runtime.py --provider openai --require-env OPENAI_API_KEY
```

## Step 2: A Minimal Agent

Start with one agent, one prompt, one typed result.

```python
from pydantic import BaseModel, Field
from pydantic_ai import Agent


class SupportAnswer(BaseModel):
    answer: str = Field(description="Direct response to the user question")
    confidence: float = Field(ge=0.0, le=1.0)


agent = Agent(
    "openai:gpt-4o-mini",
    result_type=SupportAnswer,
    system_prompt=(
        "Answer the user briefly and return a confidence score between 0 and 1."
    ),
)

result = agent.run_sync("How do I reset my password?")
print(result.output)
```

Good first-run target:

- no tools
- no hidden state
- one small result model
- one known-good model string

If this does not validate, fix the schema or provider setup before adding complexity.

## Structured Outputs and Result Models

Prefer `result_type` and schema-backed outputs over parsing free-form text.

### Recommended pattern

- model the output with `BaseModel`, dataclasses, or other supported typed structures
- encode business constraints directly in the schema
- use validators for ranges, enums, formatting, or cross-field rules when needed
- keep the first version of the schema small

### Avoid

- regex parsing model prose into fields
- calling `json.loads()` on arbitrary unvalidated text if a typed result can be enforced
- large optional-heavy schemas when the task only needs a few fields
- pushing validation entirely downstream into application code

### Practical rules

- use explicit field descriptions when the model may confuse similar fields
- prefer enums, literals, bounded numbers, and constrained strings where appropriate
- if validation fails repeatedly, simplify the response contract before increasing prompt complexity

See `references/runtime-practices.md` for schema design rules and failure handling.

## Tools and Dependency Injection

### Design tools as narrow typed functions

A good tool:

- has one responsibility
- accepts a small, typed argument set
- returns a predictable value shape
- does not hide side effects
- can be tested independently

A risky tool:

- accepts a large unbounded blob
- mixes lookup, mutation, and formatting in one function
- depends on module globals or ambient state
- returns inconsistent structures

### Inject runtime state through dependencies

Use dependencies for items such as:

- API clients
- database handles
- authenticated user context
- feature flags
- request-scoped settings

This keeps prompts focused on behavior while runtime concerns stay in Python objects.

```python
from dataclasses import dataclass
from pydantic import BaseModel
from pydantic_ai import Agent, RunContext


@dataclass
class AppDeps:
    kb: dict[str, str]


class LookupResult(BaseModel):
    answer: str
    source: str


agent = Agent(
    "openai:gpt-4o-mini",
    deps_type=AppDeps,
    result_type=LookupResult,
    system_prompt="Use tools when needed. Cite the source key you used.",
)


@agent.tool
def lookup_policy(ctx: RunContext[AppDeps], topic: str) -> str:
    return ctx.deps.kb.get(topic, "not found")
```

When tool calls fail, check these first:

- argument names match the function signature
- argument types are simple and explicit
- the tool should exist at all, versus being normal application logic outside the model loop
- provider/model supports the behavior you expect

See `examples/implementation-example.md` for a full pattern with one dependency and one tool.

## Testing and Evals

Treat testing and evals as separate stages.

### Tests cover

- schema validation
- business logic around tools and dependencies
- deterministic behavior you can check without a live model call
- regression protection for application-side changes

### Evals cover

- prompt changes
- model swaps
- tool selection quality
- edge cases and representative real-world requests
- failure handling and retry behavior

Minimum workflow:

1. write or update local tests for schemas, tools, and dependency wiring
2. verify the minimal agent still works
3. run a small eval set containing baseline, edge, and failure cases
4. inspect traces or logs for unexpected tool calls or validation drift

A short worked example and test sketch are in `examples/implementation-example.md`.

## Troubleshooting

### 1) Result validation errors

Symptoms:

- agent run completes but output fails validation
- required fields are missing
- numeric or enum constraints fail

Checks:

- inspect the exact field that failed
- reduce schema complexity
- add field descriptions or validators only where they clarify the contract
- tighten the system prompt to match the schema, not vice versa

### 2) Tool schema mismatch

Symptoms:

- tool is not called when expected
- tool is called with wrong argument names or shapes
- the model loops or retries around tool usage

Checks:

- keep tool signatures narrow and stable
- rename ambiguous parameters
- split a broad tool into smaller tools
- remove unnecessary nested inputs if the provider struggles with them

### 3) Provider or model misconfiguration

Symptoms:

- import errors after installation
- authentication failures
- runtime errors for unknown model or unsupported behavior

Checks:

- confirm provider extras are installed
- verify required environment variables are set
- validate the model identifier against provider docs/account access
- try the runtime preflight script before changing application code

### 4) Hard-to-reproduce agent bugs

Use a minimal reproduction:

- one model
- one result type
- one tool at most
- fixed dependency values
- one failing prompt

If the minimal version works, reintroduce components one at a time until the failure returns.

## Additional Resources

- `references/runtime-practices.md` — operational notes for schema design, tool design, provider preflight, testing, evals, and observability
- `examples/implementation-example.md` — end-to-end example with typed result, one tool, one dependency, expected output, and a test sketch
- `scripts/validate-runtime.py` — preflight script for Python version, imports, and provider environment checks

Primary documentation:

- PydanticAI docs: https://ai.pydantic.dev/
- Agents: https://ai.pydantic.dev/agents/
- Tools: https://ai.pydantic.dev/tools/
- Dependencies: https://ai.pydantic.dev/dependencies/
- Models: https://ai.pydantic.dev/models/
- Testing: https://ai.pydantic.dev/testing/
- Evals: https://ai.pydantic.dev/evals/
- Logfire: https://ai.pydantic.dev/logfire/
- Pydantic validators: https://docs.pydantic.dev/latest/concepts/validators/
- OpenAI structured outputs: https://platform.openai.com/docs/guides/structured-outputs
- OpenAI function calling: https://platform.openai.com/docs/guides/function-calling

## Related Skills

Prefer a different skill when:

- the user needs provider-specific orchestration beyond what PydanticAI abstracts well
- the work is mostly prompt engineering with no typed Python runtime
- the primary challenge is deployment infrastructure rather than agent implementation

Stay with this skill when the center of gravity is typed Python agents, validated outputs, tool use, and testable runtime behavior.

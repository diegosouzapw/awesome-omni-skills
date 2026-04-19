# PydanticAI Implementation Example

This example demonstrates:

- one typed result model
- one injected dependency object
- one tool
- one sample input
- expected validated output
- one failure mode
- a short test sketch

## Example: refund policy assistant

```python
from dataclasses import dataclass
from pydantic import BaseModel, Field
from pydantic_ai import Agent, RunContext


@dataclass
class PolicyDeps:
    policies: dict[str, str]


class RefundAnswer(BaseModel):
    answer: str = Field(description="Answer to show the end user")
    source_key: str = Field(description="Policy key used to answer")
    confidence: float = Field(ge=0.0, le=1.0)


agent = Agent(
    "openai:gpt-4o-mini",
    deps_type=PolicyDeps,
    result_type=RefundAnswer,
    system_prompt=(
        "Answer refund-policy questions using the available tools. "
        "If the information is missing, say so directly."
    ),
)


@agent.tool
def get_policy(ctx: RunContext[PolicyDeps], key: str) -> str:
    return ctx.deps.policies.get(key, "POLICY_NOT_FOUND")


def main() -> None:
    deps = PolicyDeps(
        policies={
            "refund_window": "Customers can request a refund within 30 days of purchase.",
        }
    )

    result = agent.run_sync(
        "What is the refund window?",
        deps=deps,
    )

    print(result.output.model_dump())


if __name__ == "__main__":
    main()
```

## Sample input

```text
What is the refund window?
```

## Expected typed result

Exact wording may vary, but the result should validate into this shape:

```python
RefundAnswer(
    answer="Customers can request a refund within 30 days of purchase.",
    source_key="refund_window",
    confidence=0.95,
)
```

## Why this pattern is useful

- the result is validated, not parsed from arbitrary JSON text
- runtime knowledge lives in `PolicyDeps`, not inside the system prompt
- the tool surface is narrow: one lookup, one argument
- application state remains testable

## Failure mode to test

If the model answers with a confidence outside `0.0..1.0`, validation should fail.

Example invalid output shape:

```python
{
    "answer": "Customers can request a refund within 30 days of purchase.",
    "source_key": "refund_window",
    "confidence": 1.7,
}
```

Likely fixes:

- strengthen the prompt instruction for confidence range
- keep the constraint in the schema
- verify the selected model/provider handles structured outputs reliably enough for your use case

## Short test sketch

```python
from dataclasses import dataclass
from pydantic import ValidationError


def test_result_model_accepts_valid_values():
    result = RefundAnswer(
        answer="Customers can request a refund within 30 days of purchase.",
        source_key="refund_window",
        confidence=0.8,
    )
    assert result.source_key == "refund_window"


def test_result_model_rejects_invalid_confidence():
    try:
        RefundAnswer(
            answer="text",
            source_key="refund_window",
            confidence=2.0,
        )
        raise AssertionError("Expected ValidationError")
    except ValidationError:
        pass
```

## Notes

- Replace the model string with the provider/model your environment supports.
- Keep your first production version this small until result validation and tool calling are stable.
- For provider setup and debugging guidance, see `references/runtime-practices.md`.

---
name: langfuse
description: "Langfuse workflow skill. Use this skill when the user needs Expert in Langfuse - the open-source LLM observability platform and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["langfuse", "expert", "the", "open-source", "llm", "observability", "platform", "ai-agents"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Langfuse

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/langfuse` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Langfuse Expert in Langfuse - the open-source LLM observability platform. Covers tracing, prompt management, evaluation, datasets, and integration with LangChain, LlamaIndex, and OpenAI. Essential for debugging, monitoring, and improving LLM applications in production. Role: LLM Observability Architect You are an expert in LLM observability and evaluation. You think in terms of traces, spans, and metrics. You know that LLM applications need monitoring just like traditional software - but with different dimensions (cost, quality, latency). You use data to drive prompt improvements and catch regressions. ### Expertise - Tracing architecture - Prompt versioning - Evaluation strategies - Cost optimization - Quality monitoring

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Prerequisites, Scope, Ecosystem, Patterns, Collaboration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: langfuse
- User mentions or implies: llm observability
- User mentions or implies: llm tracing
- User mentions or implies: prompt management
- User mentions or implies: llm evaluation
- User mentions or implies: monitor llm

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Capabilities

- LLM tracing and observability
- Prompt management and versioning
- Evaluation and scoring
- Dataset management
- Cost tracking
- Performance monitoring
- A/B testing prompts

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @langfuse to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @langfuse against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @langfuse for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @langfuse using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/langfuse`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@imagen` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Prerequisites

- 0: LLM application basics
- 1: API integration experience
- 2: Understanding of tracing concepts
- Required skills: Python or TypeScript/JavaScript, Langfuse account (cloud or self-hosted), LLM API keys

#### Imported: Scope

- 0: Self-hosted requires infrastructure
- 1: High-volume may need optimization
- 2: Real-time dashboard has latency
- 3: Evaluation requires setup

#### Imported: Ecosystem

### Primary

- Langfuse Cloud
- Langfuse Self-hosted
- Python SDK
- JS/TS SDK

### Common_integrations

- LangChain
- LlamaIndex
- OpenAI SDK
- Anthropic SDK
- Vercel AI SDK

### Platforms

- Any Python/JS backend
- Serverless functions
- Jupyter notebooks

#### Imported: Patterns

### Basic Tracing Setup

Instrument LLM calls with Langfuse

**When to use**: Any LLM application

from langfuse import Langfuse

# Initialize client
langfuse = Langfuse(
    public_key="pk-...",
    secret_key="sk-...",
    host="https://cloud.langfuse.com"  # or self-hosted URL
)

# Create a trace for a user request
trace = langfuse.trace(
    name="chat-completion",
    user_id="user-123",
    session_id="session-456",  # Groups related traces
    metadata={"feature": "customer-support"},
    tags=["production", "v2"]
)

# Log a generation (LLM call)
generation = trace.generation(
    name="gpt-4o-response",
    model="gpt-4o",
    model_parameters={"temperature": 0.7},
    input={"messages": [{"role": "user", "content": "Hello"}]},
    metadata={"attempt": 1}
)

# Make actual LLM call
response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello"}]
)

# Complete the generation with output
generation.end(
    output=response.choices[0].message.content,
    usage={
        "input": response.usage.prompt_tokens,
        "output": response.usage.completion_tokens
    }
)

# Score the trace
trace.score(
    name="user-feedback",
    value=1,  # 1 = positive, 0 = negative
    comment="User clicked helpful"
)

# Flush before exit (important in serverless)
langfuse.flush()

### OpenAI Integration

Automatic tracing with OpenAI SDK

**When to use**: OpenAI-based applications

from langfuse.openai import openai

# Drop-in replacement for OpenAI client
# All calls automatically traced

response = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Hello"}],
    # Langfuse-specific parameters
    name="greeting",  # Trace name
    session_id="session-123",
    user_id="user-456",
    tags=["test"],
    metadata={"feature": "chat"}
)

# Works with streaming
stream = openai.chat.completions.create(
    model="gpt-4o",
    messages=[{"role": "user", "content": "Tell me a story"}],
    stream=True,
    name="story-generation"
)

for chunk in stream:
    print(chunk.choices[0].delta.content, end="")

# Works with async
import asyncio
from langfuse.openai import AsyncOpenAI

async_client = AsyncOpenAI()

async def main():
    response = await async_client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": "Hello"}],
        name="async-greeting"
    )

### LangChain Integration

Trace LangChain applications

**When to use**: LangChain-based applications

from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from langfuse.callback import CallbackHandler

# Create Langfuse callback handler
langfuse_handler = CallbackHandler(
    public_key="pk-...",
    secret_key="sk-...",
    host="https://cloud.langfuse.com",
    session_id="session-123",
    user_id="user-456"
)

# Use with any LangChain component
llm = ChatOpenAI(model="gpt-4o")

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("user", "{input}")
])

chain = prompt | llm

# Pass handler to invoke
response = chain.invoke(
    {"input": "Hello"},
    config={"callbacks": [langfuse_handler]}
)

# Or set as default
import langchain
langchain.callbacks.manager.set_handler(langfuse_handler)

# Then all calls are traced
response = chain.invoke({"input": "Hello"})

# Works with agents, retrievers, etc.
from langchain.agents import create_openai_tools_agent

agent = create_openai_tools_agent(llm, tools, prompt)
agent_executor = AgentExecutor(agent=agent, tools=tools)

result = agent_executor.invoke(
    {"input": "What's the weather?"},
    config={"callbacks": [langfuse_handler]}
)

### Prompt Management

Version and deploy prompts

**When to use**: Managing prompts across environments

from langfuse import Langfuse

langfuse = Langfuse()

# Fetch prompt from Langfuse
# (Create in UI or via API first)
prompt = langfuse.get_prompt("customer-support-v2")

# Get compiled prompt with variables
compiled = prompt.compile(
    customer_name="John",
    issue="billing question"
)

# Use with OpenAI
response = openai.chat.completions.create(
    model=prompt.config.get("model", "gpt-4o"),
    messages=compiled,
    temperature=prompt.config.get("temperature", 0.7)
)

# Link generation to prompt version
trace = langfuse.trace(name="support-chat")
generation = trace.generation(
    name="response",
    model="gpt-4o",
    prompt=prompt  # Links to specific version
)

# Create/update prompts via API
langfuse.create_prompt(
    name="customer-support-v3",
    prompt=[
        {"role": "system", "content": "You are a support agent..."},
        {"role": "user", "content": "{{user_message}}"}
    ],
    config={
        "model": "gpt-4o",
        "temperature": 0.7
    },
    labels=["production"]  # or ["staging", "development"]
)

# Fetch specific label
prompt = langfuse.get_prompt(
    "customer-support-v3",
    label="production"  # Gets latest with this label
)

### Evaluation and Scoring

Evaluate LLM outputs systematically

**When to use**: Quality assurance and improvement

from langfuse import Langfuse

langfuse = Langfuse()

# Manual scoring in code
trace = langfuse.trace(name="qa-flow")

# After getting response
trace.score(
    name="relevance",
    value=0.85,  # 0-1 scale
    comment="Response addressed the question"
)

trace.score(
    name="correctness",
    value=1,  # Binary: 0 or 1
    data_type="BOOLEAN"
)

# LLM-as-judge evaluation
def evaluate_response(question: str, response: str) -> float:
    eval_prompt = f"""
    Rate the response quality from 0 to 1.

    Question: {question}
    Response: {response}

    Output only a number between 0 and 1.
    """

    result = openai.chat.completions.create(
        model="gpt-4o-mini",  # Cheaper model for eval
        messages=[{"role": "user", "content": eval_prompt}]
    )

    return float(result.choices[0].message.content.strip())

# Score asynchronously
score = evaluate_response(question, response)
trace.score(
    name="quality-llm-judge",
    value=score
)

# Create evaluation dataset
dataset = langfuse.create_dataset(name="support-qa-v1")

# Add items to dataset
langfuse.create_dataset_item(
    dataset_name="support-qa-v1",
    input={"question": "How do I reset my password?"},
    expected_output="Go to settings > security > reset password"
)

# Run evaluation on dataset
dataset = langfuse.get_dataset("support-qa-v1")

for item in dataset.items:
    # Generate response
    response = generate_response(item.input["question"])

    # Link to dataset item
    trace = langfuse.trace(name="eval-run")
    trace.generation(
        name="response",
        input=item.input,
        output=response
    )

    # Score against expected
    similarity = calculate_similarity(response, item.expected_output)
    trace.score(name="similarity", value=similarity)

    # Link trace to dataset item
    item.link(trace, "eval-run-1")

### Decorator Pattern

Clean instrumentation with decorators

**When to use**: Function-based applications

from langfuse.decorators import observe, langfuse_context

@observe()  # Creates a trace
def chat_handler(user_id: str, message: str) -> str:
    # All nested @observe calls become spans
    context = get_context(message)
    response = generate_response(message, context)
    return response

@observe()  # Becomes a span under parent trace
def get_context(message: str) -> str:
    # RAG retrieval
    docs = retriever.get_relevant_documents(message)
    return "\n".join([d.page_content for d in docs])

@observe(as_type="generation")  # LLM generation span
def generate_response(message: str, context: str) -> str:
    response = openai.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": f"Context: {context}"},
            {"role": "user", "content": message}
        ]
    )
    return response.choices[0].message.content

# Add metadata and scores
@observe()
def main_flow(user_input: str):
    # Update current trace
    langfuse_context.update_current_trace(
        user_id="user-123",
        session_id="session-456",
        tags=["production"]
    )

    result = process(user_input)

    # Score the trace
    langfuse_context.score_current_trace(
        name="success",
        value=1 if result else 0
    )

    return result

# Works with async
@observe()
async def async_handler(message: str):
    result = await async_generate(message)
    return result

#### Imported: Collaboration

### Delegation Triggers

- agent|langgraph|graph -> langgraph (Need to build agent to monitor)
- crewai|multi-agent|crew -> crewai (Need to build crew to monitor)
- structured output|extraction -> structured-output (Need to build extraction to monitor)

### Observable LangGraph Agent

Skills: langfuse, langgraph

Workflow:

```
1. Build agent with LangGraph
2. Add Langfuse callback handler
3. Trace all LLM calls and tool uses
4. Score outputs for quality
5. Monitor and iterate
```

### Monitored RAG Pipeline

Skills: langfuse, structured-output

Workflow:

```
1. Build RAG with retrieval and generation
2. Trace retrieval and LLM calls
3. Score relevance and accuracy
4. Track costs and latency
5. Optimize based on data
```

### Evaluated Agent System

Skills: langfuse, langgraph, structured-output

Workflow:

```
1. Build agent with structured outputs
2. Create evaluation dataset
3. Run evaluations with traces
4. Compare prompt versions
5. Deploy best performers
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

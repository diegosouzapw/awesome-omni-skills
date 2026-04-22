---
name: agent-framework-azure-ai-py
description: "Agent Framework Azure Hosted Agents workflow skill. Use this skill when the user needs Build persistent agents on Azure AI Foundry using the Microsoft Agent Framework Python SDK and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["agent-framework-azure-ai-py", "build", "persistent", "azure", "foundry", "using", "the", "microsoft"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-22"
---

# Agent Framework Azure Hosted Agents

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/agent-framework-azure-ai-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Agent Framework Azure Hosted Agents Build persistent agents on Azure AI Foundry using the Microsoft Agent Framework Python SDK.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Architecture, Environment Variables, Authentication, Provider Methods, Conventions, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Build persistent agents on Azure AI Foundry using the Microsoft Agent Framework Python SDK.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. bash # Full framework (recommended) pip install agent-framework --pre # Or Azure-specific package only pip install agent-framework-azure-ai --pre ### Basic Agent python import asyncio from agentframework.azure import AzureAIAgentsProvider from azure.identity.aio import AzureCliCredential async def main(): async with ( AzureCliCredential() as credential, AzureAIAgentsProvider(credential=credential) as provider, ): agent = await provider.createagent( name="MyAgent", instructions="You are a helpful assistant.", ) result = await agent.run("Hello!") print(result.text) asyncio.run(main()) ### Agent with Function Tools python from typing import Annotated from pydantic import Field from agentframework.azure import AzureAIAgentsProvider from azure.identity.aio import AzureCliCredential def getweather( location: Annotated[str, Field(description="City name to get weather for")], ) -> str: """Get the current weather for a location.""" return f"Weather in {location}: 72°F, sunny" def getcurrenttime() -> str: """Get the current UTC time.""" from datetime import datetime, timezone return datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC") async def main(): async with ( AzureCliCredential() as credential, AzureAIAgentsProvider(credential=credential) as provider, ): agent = await provider.createagent( name="WeatherAgent", instructions="You help with weather and time queries.", tools=[getweather, getcurrenttime], # Pass functions directly ) result = await agent.run("What's the weather in Seattle?") print(result.text) ### Agent with Hosted Tools python from agentframework import ( HostedCodeInterpreterTool, HostedFileSearchTool, HostedWebSearchTool, ) from agentframework.azure import AzureAIAgentsProvider from azure.identity.aio import AzureCliCredential async def main(): async with ( AzureCliCredential() as credential, AzureAIAgentsProvider(credential=credential) as provider, ): agent = await provider.createagent( name="MultiToolAgent", instructions="You can execute code, search files, and search the web.", tools=[ HostedCodeInterpreterTool(), HostedWebSearchTool(name="Bing"), ], ) result = await agent.run("Calculate the factorial of 20 in Python") print(result.text) ### Streaming Responses python async def main(): async with ( AzureCliCredential() as credential, AzureAIAgentsProvider(credential=credential) as provider, ): agent = await provider.createagent( name="StreamingAgent", instructions="You are a helpful assistant.", ) print("Agent: ", end="", flush=True) async for chunk in agent.runstream("Tell me a short story"): if chunk.text: print(chunk.text, end="", flush=True) print() ### Conversation Threads python from agentframework.azure import AzureAIAgentsProvider from azure.identity.aio import AzureCliCredential async def main(): async with ( AzureCliCredential() as credential, AzureAIAgentsProvider(credential=credential) as provider, ): agent = await provider.createagent( name="ChatAgent", instructions="You are a helpful assistant.", tools=[getweather], ) # Create thread for conversation persistence thread = agent.getnewthread() # First turn result1 = await agent.run("What's the weather in Seattle?", thread=thread) print(f"Agent: {result1.text}") # Second turn - context is maintained result2 = await agent.run("What about Portland?", thread=thread) print(f"Agent: {result2.text}") # Save thread ID for later resumption print(f"Conversation ID: {thread.conversationid}") ### Structured Outputs python from pydantic import BaseModel, ConfigDict from agentframework.azure import AzureAIAgentsProvider from azure.identity.aio import AzureCliCredential class WeatherResponse(BaseModel): modelconfig = ConfigDict(extra="forbid") location: str temperature: float unit: str conditions: str async def main(): async with ( AzureCliCredential() as credential, AzureAIAgentsProvider(credential=credential) as provider, ): agent = await provider.createagent( name="StructuredAgent", instructions="Provide weather information in structured format.", responseformat=WeatherResponse, ) result = await agent.run("Weather in Seattle?") weather = WeatherResponse.modelvalidate_json(result.text) print(f"{weather.location}: {weather.temperature}°{weather.unit}")
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Full framework (recommended)
pip install agent-framework --pre

# Or Azure-specific package only
pip install agent-framework-azure-ai --pre
```

#### Imported: Core Workflow

### Basic Agent

```python
import asyncio
from agent_framework.azure import AzureAIAgentsProvider
from azure.identity.aio import AzureCliCredential

async def main():
    async with (
        AzureCliCredential() as credential,
        AzureAIAgentsProvider(credential=credential) as provider,
    ):
        agent = await provider.create_agent(
            name="MyAgent",
            instructions="You are a helpful assistant.",
        )
        
        result = await agent.run("Hello!")
        print(result.text)

asyncio.run(main())
```

### Agent with Function Tools

```python
from typing import Annotated
from pydantic import Field
from agent_framework.azure import AzureAIAgentsProvider
from azure.identity.aio import AzureCliCredential

def get_weather(
    location: Annotated[str, Field(description="City name to get weather for")],
) -> str:
    """Get the current weather for a location."""
    return f"Weather in {location}: 72°F, sunny"

def get_current_time() -> str:
    """Get the current UTC time."""
    from datetime import datetime, timezone
    return datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M:%S UTC")

async def main():
    async with (
        AzureCliCredential() as credential,
        AzureAIAgentsProvider(credential=credential) as provider,
    ):
        agent = await provider.create_agent(
            name="WeatherAgent",
            instructions="You help with weather and time queries.",
            tools=[get_weather, get_current_time],  # Pass functions directly
        )
        
        result = await agent.run("What's the weather in Seattle?")
        print(result.text)
```

### Agent with Hosted Tools

```python
from agent_framework import (
    HostedCodeInterpreterTool,
    HostedFileSearchTool,
    HostedWebSearchTool,
)
from agent_framework.azure import AzureAIAgentsProvider
from azure.identity.aio import AzureCliCredential

async def main():
    async with (
        AzureCliCredential() as credential,
        AzureAIAgentsProvider(credential=credential) as provider,
    ):
        agent = await provider.create_agent(
            name="MultiToolAgent",
            instructions="You can execute code, search files, and search the web.",
            tools=[
                HostedCodeInterpreterTool(),
                HostedWebSearchTool(name="Bing"),
            ],
        )
        
        result = await agent.run("Calculate the factorial of 20 in Python")
        print(result.text)
```

### Streaming Responses

```python
async def main():
    async with (
        AzureCliCredential() as credential,
        AzureAIAgentsProvider(credential=credential) as provider,
    ):
        agent = await provider.create_agent(
            name="StreamingAgent",
            instructions="You are a helpful assistant.",
        )
        
        print("Agent: ", end="", flush=True)
        async for chunk in agent.run_stream("Tell me a short story"):
            if chunk.text:
                print(chunk.text, end="", flush=True)
        print()
```

### Conversation Threads

```python
from agent_framework.azure import AzureAIAgentsProvider
from azure.identity.aio import AzureCliCredential

async def main():
    async with (
        AzureCliCredential() as credential,
        AzureAIAgentsProvider(credential=credential) as provider,
    ):
        agent = await provider.create_agent(
            name="ChatAgent",
            instructions="You are a helpful assistant.",
            tools=[get_weather],
        )
        
        # Create thread for conversation persistence
        thread = agent.get_new_thread()
        
        # First turn
        result1 = await agent.run("What's the weather in Seattle?", thread=thread)
        print(f"Agent: {result1.text}")
        
        # Second turn - context is maintained
        result2 = await agent.run("What about Portland?", thread=thread)
        print(f"Agent: {result2.text}")
        
        # Save thread ID for later resumption
        print(f"Conversation ID: {thread.conversation_id}")
```

### Structured Outputs

```python
from pydantic import BaseModel, ConfigDict
from agent_framework.azure import AzureAIAgentsProvider
from azure.identity.aio import AzureCliCredential

class WeatherResponse(BaseModel):
    model_config = ConfigDict(extra="forbid")
    
    location: str
    temperature: float
    unit: str
    conditions: str

async def main():
    async with (
        AzureCliCredential() as credential,
        AzureAIAgentsProvider(credential=credential) as provider,
    ):
        agent = await provider.create_agent(
            name="StructuredAgent",
            instructions="Provide weather information in structured format.",
            response_format=WeatherResponse,
        )
        
        result = await agent.run("Weather in Seattle?")
        weather = WeatherResponse.model_validate_json(result.text)
        print(f"{weather.location}: {weather.temperature}°{weather.unit}")
```

#### Imported: Architecture

```
User Query → AzureAIAgentsProvider → Azure AI Agent Service (Persistent)
                    ↓
              Agent.run() / Agent.run_stream()
                    ↓
              Tools: Functions | Hosted (Code/Search/Web) | MCP
                    ↓
              AgentThread (conversation persistence)
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agent-framework-azure-ai-py to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @agent-framework-azure-ai-py against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @agent-framework-azure-ai-py for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @agent-framework-azure-ai-py using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Complete Example

```python
import asyncio
from typing import Annotated
from pydantic import BaseModel, Field
from agent_framework import (
    HostedCodeInterpreterTool,
    HostedWebSearchTool,
    MCPStreamableHTTPTool,
)
from agent_framework.azure import AzureAIAgentsProvider
from azure.identity.aio import AzureCliCredential


def get_weather(
    location: Annotated[str, Field(description="City name")],
) -> str:
    """Get weather for a location."""
    return f"Weather in {location}: 72°F, sunny"


class AnalysisResult(BaseModel):
    summary: str
    key_findings: list[str]
    confidence: float


async def main():
    async with (
        AzureCliCredential() as credential,
        MCPStreamableHTTPTool(
            name="Docs MCP",
            url="https://learn.microsoft.com/api/mcp",
        ) as mcp_tool,
        AzureAIAgentsProvider(credential=credential) as provider,
    ):
        agent = await provider.create_agent(
            name="ResearchAssistant",
            instructions="You are a research assistant with multiple capabilities.",
            tools=[
                get_weather,
                HostedCodeInterpreterTool(),
                HostedWebSearchTool(name="Bing"),
                mcp_tool,
            ],
        )
        
        thread = agent.get_new_thread()
        
        # Non-streaming
        result = await agent.run(
            "Search for Python best practices and summarize",
            thread=thread,
        )
        print(f"Response: {result.text}")
        
        # Streaming
        print("\nStreaming: ", end="")
        async for chunk in agent.run_stream("Continue with examples", thread=thread):
            if chunk.text:
                print(chunk.text, end="", flush=True)
        print()
        
        # Structured output
        result = await agent.run(
            "Analyze findings",
            thread=thread,
            response_format=AnalysisResult,
        )
        analysis = AnalysisResult.model_validate_json(result.text)
        print(f"\nConfidence: {analysis.confidence}")


if __name__ == "__main__":
    asyncio.run(main())
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/agent-framework-azure-ai-py`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Hosted Tools Quick Reference

| Tool | Import | Purpose |
|------|--------|---------|
| `HostedCodeInterpreterTool` | `from agent_framework import HostedCodeInterpreterTool` | Execute Python code |
| `HostedFileSearchTool` | `from agent_framework import HostedFileSearchTool` | Search vector stores |
| `HostedWebSearchTool` | `from agent_framework import HostedWebSearchTool` | Bing web search |
| `HostedMCPTool` | `from agent_framework import HostedMCPTool` | Service-managed MCP |
| `MCPStreamableHTTPTool` | `from agent_framework import MCPStreamableHTTPTool` | Client-managed MCP |

#### Imported: Reference Files

- references/tools.md: Detailed hosted tool patterns
- references/mcp.md: MCP integration (hosted + local)
- references/threads.md: Thread and conversation management
- references/advanced.md: OpenAPI, citations, structured outputs

#### Imported: Environment Variables

```bash
export AZURE_AI_PROJECT_ENDPOINT="https://<project>.services.ai.azure.com/api/projects/<project-id>"
export AZURE_AI_MODEL_DEPLOYMENT_NAME="gpt-4o-mini"
export BING_CONNECTION_ID="your-bing-connection-id"  # For web search
```

#### Imported: Authentication

```python
from azure.identity.aio import AzureCliCredential, DefaultAzureCredential

# Development
credential = AzureCliCredential()

# Production
credential = DefaultAzureCredential()
```

#### Imported: Provider Methods

| Method | Description |
|--------|-------------|
| `create_agent()` | Create new agent on Azure AI service |
| `get_agent(agent_id)` | Retrieve existing agent by ID |
| `as_agent(sdk_agent)` | Wrap SDK Agent object (no HTTP call) |

#### Imported: Conventions

- Always use async context managers: `async with provider:`
- Pass functions directly to `tools=` parameter (auto-converted to AIFunction)
- Use `Annotated[type, Field(description=...)]` for function parameters
- Use `get_new_thread()` for multi-turn conversations
- Prefer `HostedMCPTool` for service-managed MCP, `MCPStreamableHTTPTool` for client-managed

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

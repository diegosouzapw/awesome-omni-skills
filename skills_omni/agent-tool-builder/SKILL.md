---
name: "agent-tool-builder"
description: "Agent Tool Builder workflow skill. Use this skill when the user needs Tools are how AI agents interact with the world. A well-designed and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "agent-tool-builder"
  - "tools"
  - "are"
  - "how"
  - "interact"
  - "the"
  - "world"
  - "well-designed"
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
date_added: "2026-04-14"
date_updated: "2026-04-23"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "agent-tool-builder"
family_name: "Agent Tool Builder"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/agent-tool-builder"
upstream_skill: "skills/agent-tool-builder"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "126"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "032affbbd536f09d7636f0fbbfd35093380dae89"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "agent-tool-builder"
---

# Agent Tool Builder

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/agent-tool-builder` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Agent Tool Builder Tools are how AI agents interact with the world. A well-designed tool is the difference between an agent that works and one that hallucinates, fails silently, or costs 10x more tokens than necessary. This skill covers tool design from schema to error handling. JSON Schema best practices, description writing that actually helps the LLM, validation, and the emerging MCP standard that's becoming the lingua franca for AI tools. Key insight: Tool descriptions are more important than tool implementations. The LLM never sees your code - it only sees the schema and description.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Scope, Tooling, Patterns, 1. Detailed Descriptions (Most Important), 2. Parameter Descriptions.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: agent tool
- User mentions or implies: function calling
- User mentions or implies: tool schema
- User mentions or implies: tool design
- User mentions or implies: mcp server
- User mentions or implies: mcp tool

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

- agent-tools
- function-calling
- tool-schema-design
- mcp-tools
- tool-validation
- tool-error-handling

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agent-tool-builder to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @agent-tool-builder against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @agent-tool-builder for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @agent-tool-builder using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Python Example

"""
import anthropic
from anthropic import beta_tool

client = anthropic.Anthropic()

@beta_tool
def get_weather(location: str, unit: str = "fahrenheit") -> str:
    '''Get the current weather in a given location.

    Args:
        location: The city and state, e.g. San Francisco, CA
        unit: Temperature unit, either 'celsius' or 'fahrenheit'
    '''
    # Implementation
    return json.dumps({"temperature": "72°F", "conditions": "Sunny"})

@beta_tool
def search_web(query: str) -> str:
    '''Search the web for information.

    Args:
        query: The search query
    '''
    # Implementation
    return json.dumps({"results": [...]})

# Tool runner handles the loop
runner = client.beta.messages.tool_runner(
    model="claude-sonnet-4-5",
    max_tokens=1024,
    tools=[get_weather, search_web],
    messages=[
        {"role": "user", "content": "What's the weather in Paris?"}
    ]
)

# Process each message
for message in runner:
    print(message.content[0].text)

# Or just get final result
final = runner.until_done()
"""

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Description quality > implementation quality for LLM accuracy
- Aim for fewer than 20 tools - more causes confusion
- Every tool needs explicit error handling - silent failures poison agents
- Return strings, not objects - LLMs process text
- Validation gates before execution - reject, fix, or escalate, never silent fail
- Test tools with the LLM, not just unit tests
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Principles

- Description quality > implementation quality for LLM accuracy
- Aim for fewer than 20 tools - more causes confusion
- Every tool needs explicit error handling - silent failures poison agents
- Return strings, not objects - LLMs process text
- Validation gates before execution - reject, fix, or escalate, never silent fail
- Test tools with the LLM, not just unit tests

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/agent-tool-builder`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Scope

- multi-agent-coordination → multi-agent-orchestration
- agent-memory → agent-memory-systems
- api-design → api-designer
- llm-prompting → prompt-engineering

#### Imported: Tooling

### Standards

- JSON Schema - When: All tool definitions Note: The universal format for tool schemas
- MCP (Model Context Protocol) - When: Building reusable, cross-platform tools Note: Anthropic's open standard, widely adopted

### Frameworks

- Anthropic SDK - When: Claude-based agents Note: Beta tool runner handles most complexity
- OpenAI Functions - When: OpenAI-based agents Note: Use strict mode for guaranteed schema compliance
- Vercel AI SDK - When: Multi-provider tool handling Note: Abstracts differences between providers
- LangChain Tools - When: LangChain-based agents Note: Converts MCP tools to LangChain format

#### Imported: Patterns

### Tool Schema Design

Creating clear, unambiguous JSON Schema for tools

**When to use**: Defining any new tool for an agent

# TOOL SCHEMA BEST PRACTICES:

#### Imported: 1. Detailed Descriptions (Most Important)

"""
BAD - Too vague:
{
  "name": "get_stock_price",
  "description": "Gets stock price",
  "input_schema": {
    "type": "object",
    "properties": {
      "ticker": {"type": "string"}
    }
  }
}

GOOD - Comprehensive:
{
  "name": "get_stock_price",
  "description": "Retrieves the current stock price for a given ticker
    symbol. The ticker symbol must be a valid symbol for a publicly
    traded company on a major US stock exchange like NYSE or NASDAQ.
    Returns the latest trade price in USD. Use when the user asks
    about current or recent stock prices. Does NOT provide historical
    data, company info, or predictions.",
  "input_schema": {
    "type": "object",
    "properties": {
      "ticker": {
        "type": "string",
        "description": "The stock ticker symbol, e.g. AAPL for Apple Inc."
      }
    },
    "required": ["ticker"]
  }
}
"""

#### Imported: 2. Parameter Descriptions

"""
Every parameter needs:
- What it is
- Format expected
- Example value
- Edge cases/limitations

{
  "location": {
    "type": "string",
    "description": "City and state/country. Format: 'City, State' for US
      (e.g., 'San Francisco, CA') or 'City, Country' for international
      (e.g., 'Tokyo, Japan'). Do not use ZIP codes or coordinates."
  },
  "unit": {
    "type": "string",
    "enum": ["celsius", "fahrenheit"],
    "description": "Temperature unit. Defaults to user's locale if not
      specified. Use 'fahrenheit' for US users, 'celsius' for others."
  }
}
"""

#### Imported: 4. Required vs Optional

"""
Be explicit about what's required:

{
  "type": "object",
  "properties": {
    "query": {...},      // Required
    "limit": {...},      // Optional with default
    "offset": {...}      // Optional
  },
  "required": ["query"],
  "additionalProperties": false  // Strict mode
}
"""

### Tool with Input Examples

Using examples to guide LLM tool usage

**When to use**: Complex tools with nested objects or format-sensitive inputs

# TOOL USE EXAMPLES (Anthropic Beta Feature):

"""
Examples show Claude concrete patterns that schemas can't express.
Improves accuracy from 72% to 90% on complex operations.
"""

{
  "name": "create_calendar_event",
  "description": "Creates a calendar event with optional attendees and reminders",
  "input_schema": {
    "type": "object",
    "properties": {
      "title": {"type": "string", "description": "Event title"},
      "start_time": {
        "type": "string",
        "description": "ISO 8601 datetime, e.g. 2024-03-15T14:00:00Z"
      },
      "duration_minutes": {"type": "integer", "description": "Event duration"},
      "attendees": {
        "type": "array",
        "items": {"type": "string"},
        "description": "Email addresses of attendees"
      }
    },
    "required": ["title", "start_time", "duration_minutes"]
  },
  "input_examples": [
    {
      "title": "Team Standup",
      "start_time": "2024-03-15T09:00:00Z",
      "duration_minutes": 30,
      "attendees": ["alice@company.com", "bob@company.com"]
    },
    {
      "title": "Quick Chat",
      "start_time": "2024-03-15T14:00:00Z",
      "duration_minutes": 15
    },
    {
      "title": "Project Review",
      "start_time": "2024-03-15T16:00:00-05:00",
      "duration_minutes": 60,
      "attendees": ["team@company.com"]
    }
  ]
}

# EXAMPLE DESIGN PRINCIPLES:
# - Use realistic data, not placeholders
# - Show minimal, partial, and full specification patterns
# - Keep concise: 1-5 examples per tool
# - Focus on ambiguous cases

### Tool Error Handling

Returning errors that help the LLM recover

**When to use**: Any tool that can fail

# ERROR HANDLING BEST PRACTICES:

#### Imported: Return Informative Errors

"""
BAD:
{"error": "Failed"}
{"error": true}

GOOD:
{
  "error": true,
  "error_type": "not_found",
  "message": "Location 'Atlantis' not found in weather database.
    Please provide a real city name like 'San Francisco, CA'.",
  "suggestions": ["San Francisco, CA", "Los Angeles, CA"]
}
"""

#### Imported: Anthropic Tool Result with Error

"""
{
  "type": "tool_result",
  "tool_use_id": "toolu_01A09q90qw90lq917835lq9",
  "content": "Error: Location 'Atlantis' not found in weather database.
    Please provide a real city name like 'San Francisco, CA'.",
  "is_error": true
}
"""

#### Imported: Error Categories to Handle

"""
1. Input Validation Errors
   - Missing required parameters
   - Invalid format
   - Out of range values

2. External Service Errors
   - API unavailable
   - Rate limited
   - Timeout

3. Business Logic Errors
   - Resource not found
   - Permission denied
   - Conflict/duplicate

4. Internal Errors
   - Unexpected exceptions
   - Data corruption
"""

#### Imported: Implementation Pattern

"""
from dataclasses import dataclass
from typing import Union

@dataclass
class ToolResult:
    success: bool
    content: str
    error_type: str = None
    suggestions: list[str] = None

    def to_response(self) -> dict:
        if self.success:
            return {"content": self.content}
        return {
            "content": f"Error ({self.error_type}): {self.content}",
            "is_error": True
        }

def get_weather(location: str) -> ToolResult:
    # Validate input
    if not location or len(location) < 2:
        return ToolResult(
            success=False,
            content="Location must be at least 2 characters",
            error_type="validation_error"
        )

    try:
        data = weather_api.fetch(location)
        return ToolResult(
            success=True,
            content=f"Temperature: {data.temp}°F, Conditions: {data.conditions}"
        )
    except LocationNotFound:
        return ToolResult(
            success=False,
            content=f"Location '{location}' not found",
            error_type="not_found",
            suggestions=weather_api.suggest_locations(location)
        )
    except RateLimitError:
        return ToolResult(
            success=False,
            content="Weather service rate limit exceeded. Try again in 60 seconds.",
            error_type="rate_limit"
        )
    except Exception as e:
        return ToolResult(
            success=False,
            content=f"Unexpected error: {str(e)}",
            error_type="internal_error"
        )
"""

### MCP Tool Pattern

Building tools using Model Context Protocol

**When to use**: Creating reusable, cross-platform tools

# MCP TOOL IMPLEMENTATION:

"""
MCP (Model Context Protocol) is Anthropic's open standard for
connecting AI agents to external systems. Build once, use everywhere.
"""

#### Imported: Basic MCP Server (TypeScript)

"""
import { Server } from "@modelcontextprotocol/sdk/server";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio";

const server = new Server({
  name: "weather-server",
  version: "1.0.0"
});

// Define tools
server.setRequestHandler("tools/list", async () => ({
  tools: [
    {
      name: "get_weather",
      description: "Get current weather for a location. Returns
        temperature, conditions, and humidity. Use for weather
        queries about specific cities.",
      inputSchema: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "City and state, e.g. 'San Francisco, CA'"
          },
          unit: {
            type: "string",
            enum: ["celsius", "fahrenheit"],
            default: "fahrenheit"
          }
        },
        required: ["location"]
      }
    }
  ]
}));

// Handle tool calls
server.setRequestHandler("tools/call", async (request) => {
  const { name, arguments: args } = request.params;

  if (name === "get_weather") {
    try {
      const weather = await fetchWeather(args.location, args.unit);
      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(weather)
          }
        ]
      };
    } catch (error) {
      return {
        content: [
          {
            type: "text",
            text: `Error: ${error.message}`
          }
        ],
        isError: true
      };
    }
  }

  throw new Error(`Unknown tool: ${name}`);
});

// Start server
const transport = new StdioServerTransport();
await server.connect(transport);
"""

#### Imported: MCP Benefits

"""
- Universal compatibility across LLM providers
- Reusable tool libraries
- Streaming and SSE transport support
- Built-in observability
- Tool access controls
"""

### Tool Runner Pattern

Using SDK tool runners for automatic handling

**When to use**: Building tool loops without manual management

# TOOL RUNNER (Anthropic SDK Beta):

"""
The tool runner handles the tool call loop automatically:
- Executes tools when Claude calls them
- Manages conversation state
- Handles error retries
- Provides streaming support
"""

#### Imported: TypeScript with Zod

"""
import { Anthropic } from '@anthropic-ai/sdk';
import { betaZodTool } from '@anthropic-ai/sdk/helpers/beta/zod';
import { z } from 'zod';

const anthropic = new Anthropic();

const getWeatherTool = betaZodTool({
  name: 'get_weather',
  description: 'Get the current weather in a given location',
  inputSchema: z.object({
    location: z.string().describe('City and state, e.g. San Francisco, CA'),
    unit: z.enum(['celsius', 'fahrenheit']).default('fahrenheit')
  }),
  run: async (input) => {
    // Type-safe input!
    return JSON.stringify({temperature: '72°F'});
  }
});

const runner = anthropic.beta.messages.toolRunner({
  model: 'claude-sonnet-4-5',
  max_tokens: 1024,
  tools: [getWeatherTool],
  messages: [{ role: 'user', content: "What's the weather in Paris?" }]
});

for await (const message of runner) {
  console.log(message.content[0].text);
}
"""

### Parallel Tool Execution

Running multiple tools simultaneously

**When to use**: Independent tool calls that can run in parallel

# PARALLEL TOOL EXECUTION:

"""
By default, Claude can call multiple tools in one response.
This dramatically reduces latency for independent operations.
"""

#### Imported: Handling Parallel Results

"""
# Claude returns multiple tool_use blocks:
response.content = [
    {"type": "text", "text": "I'll check both locations..."},
    {"type": "tool_use", "id": "toolu_01", "name": "get_weather",
     "input": {"location": "San Francisco, CA"}},
    {"type": "tool_use", "id": "toolu_02", "name": "get_weather",
     "input": {"location": "New York, NY"}},
    {"type": "tool_use", "id": "toolu_03", "name": "get_time",
     "input": {"timezone": "America/Los_Angeles"}},
    {"type": "tool_use", "id": "toolu_04", "name": "get_time",
     "input": {"timezone": "America/New_York"}}
]

# Execute in parallel
import asyncio

async def execute_tools_parallel(tool_uses):
    tasks = [execute_tool(t) for t in tool_uses]
    return await asyncio.gather(*tasks)

results = await execute_tools_parallel(tool_uses)

# Return ALL results in SINGLE user message (critical!)
tool_results = [
    {"type": "tool_result", "tool_use_id": "toolu_01", "content": "72°F, Sunny"},
    {"type": "tool_result", "tool_use_id": "toolu_02", "content": "45°F, Cloudy"},
    {"type": "tool_result", "tool_use_id": "toolu_03", "content": "2:30 PM PST"},
    {"type": "tool_result", "tool_use_id": "toolu_04", "content": "5:30 PM EST"}
]

# CORRECT: All results in one message
messages.append({"role": "user", "content": tool_results})

# WRONG: Separate messages (breaks parallel execution pattern)
# messages.append({"role": "user", "content": [tool_results[0]]})
# messages.append({"role": "user", "content": [tool_results[1]]})
"""

#### Imported: Encouraging Parallel Tool Use

"""
Add to system prompt:
"For maximum efficiency, whenever you need to perform multiple
independent operations, invoke all relevant tools simultaneously
rather than sequentially."
"""

#### Imported: Validation Checks

### Tool Description Must Be Comprehensive

Severity: WARNING

Tool descriptions should be at least 100 characters

Message: Tool description is too short. Add details about when to use it, parameters, and return values.

### Parameter Descriptions Required

Severity: WARNING

Every parameter should have a description

Message: Parameter missing description. Describe what it is and the expected format.

### Schema Should Specify Required Fields

Severity: INFO

Explicitly define which fields are required

Message: Schema doesn't specify required fields. Add 'required' array.

### Tool Implementation Needs Error Handling

Severity: ERROR

Tool functions should handle exceptions

Message: Tool function without try/except block. Add error handling.

### Error Results Need is_error Flag

Severity: WARNING

When returning errors, set is_error to true

Message: Error result without is_error flag. Add 'is_error': true.

### Tools Should Return Strings

Severity: WARNING

Return JSON string, not dict/object

Message: Returning dict instead of string. Use json.dumps() or JSON.stringify().

### Tools Should Validate Inputs

Severity: WARNING

Validate LLM-provided inputs before execution

Message: Tool function without visible input validation. Validate before execution.

### SQL Queries Must Use Parameterization

Severity: ERROR

Never concatenate user input into SQL

Message: SQL query appears to use string concatenation. Use parameterized queries.

### External Calls Need Timeouts

Severity: WARNING

HTTP requests and external calls should have timeouts

Message: External API call without timeout. Add timeout parameter.

### MCP Tools Must Have Input Schema

Severity: ERROR

All MCP tools require inputSchema

Message: MCP tool definition missing inputSchema.

#### Imported: Collaboration

### Delegation Triggers

- user needs to coordinate multiple tools -> multi-agent-orchestration (Tool orchestration across agents)
- user needs persistent memory between tool calls -> agent-memory-systems (State management for tools)
- user building voice agent tools -> voice-agents (Audio/voice-specific tool requirements)
- user needs computer control tools -> computer-use-agents (Desktop automation tools)
- user wants to test their tools -> agent-evaluation (Tool testing and evaluation)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

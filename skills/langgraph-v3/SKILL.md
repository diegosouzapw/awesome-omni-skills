---
name: langgraph-v3
description: "LangGraph workflow skill. Use this skill when the user needs Expert in LangGraph - the production-grade framework for building and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["langgraph-v3", "langgraph", "expert", "the", "production-grade", "framework", "for", "building"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-26"
date_updated: "2026-04-26"
---

# LangGraph

## Overview

This public intake copy packages `plugins/antigravity-bundle-agent-architect/skills/langgraph` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LangGraph Expert in LangGraph - the production-grade framework for building stateful, multi-actor AI applications. Covers graph construction, state management, cycles and branches, persistence with checkpointers, human-in-the-loop patterns, and the ReAct agent pattern. Used in production at LinkedIn, Uber, and 400+ companies. This is LangChain's recommended approach for building agents. Role: LangGraph Agent Architect You are an expert in building production-grade AI agents with LangGraph. You understand that agents need explicit structure - graphs make the flow visible and debuggable. You design state carefully, use reducers appropriately, and always consider persistence for production. You know when cycles are needed and how to prevent infinite loops. ### Expertise - Graph topology design - State schema patterns - Conditional branching - Persistence strategies - Human-in-the-loop - Tool integration - Error handling and recovery

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Prerequisites, Scope, Ecosystem, Patterns, Collaboration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: langgraph
- User mentions or implies: langchain agent
- User mentions or implies: stateful agent
- User mentions or implies: agent graph
- User mentions or implies: react agent
- User mentions or implies: agent workflow

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Capabilities

- Graph construction (StateGraph)
- State management and reducers
- Node and edge definitions
- Conditional routing
- Checkpointers and persistence
- Human-in-the-loop patterns
- Tool integration
- Streaming and async execution

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @langgraph-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @langgraph-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @langgraph-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @langgraph-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-agent-architect/skills/langgraph`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@agent-evaluation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-agents-architect-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@airtable-automation-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@architecture-decision-records-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- 0: Python proficiency
- 1: LLM API basics
- 2: Async programming concepts
- 3: Graph theory fundamentals
- Required skills: Python 3.9+, langgraph package, LLM API access (OpenAI, Anthropic, etc.), Understanding of graph concepts

#### Imported: Scope

- 0: Python-only (TypeScript in early stages)
- 1: Learning curve for graph concepts
- 2: State management complexity
- 3: Debugging can be challenging

#### Imported: Ecosystem

### Primary

- LangGraph
- LangChain
- LangSmith (observability)

### Common_integrations

- OpenAI / Anthropic / Google
- Tavily (search)
- SQLite / PostgreSQL (persistence)
- Redis (state store)

### Platforms

- Python applications
- FastAPI / Flask backends
- Cloud deployments

#### Imported: Patterns

### Basic Agent Graph

Simple ReAct-style agent with tools

**When to use**: Single agent with tool calling

from typing import Annotated, TypedDict
from langgraph.graph import StateGraph, START, END
from langgraph.graph.message import add_messages
from langgraph.prebuilt import ToolNode
from langchain_openai import ChatOpenAI
from langchain_core.tools import tool

# 1. Define State
class AgentState(TypedDict):
    messages: Annotated[list, add_messages]
    # add_messages reducer appends, doesn't overwrite

# 2. Define Tools
@tool
def search(query: str) -> str:
    """Search the web for information."""
    # Implementation here
    return f"Results for: {query}"

@tool
def calculator(expression: str) -> str:
    """Evaluate a math expression."""
    return str(eval(expression))

tools = [search, calculator]

# 3. Create LLM with tools
llm = ChatOpenAI(model="gpt-4o").bind_tools(tools)

# 4. Define Nodes
def agent(state: AgentState) -> dict:
    """The agent node - calls LLM."""
    response = llm.invoke(state["messages"])
    return {"messages": [response]}

# Tool node handles tool execution
tool_node = ToolNode(tools)

# 5. Define Routing
def should_continue(state: AgentState) -> str:
    """Route based on whether tools were called."""
    last_message = state["messages"][-1]
    if last_message.tool_calls:
        return "tools"
    return END

# 6. Build Graph
graph = StateGraph(AgentState)

# Add nodes
graph.add_node("agent", agent)
graph.add_node("tools", tool_node)

# Add edges
graph.add_edge(START, "agent")
graph.add_conditional_edges("agent", should_continue, ["tools", END])
graph.add_edge("tools", "agent")  # Loop back

# Compile
app = graph.compile()

# 7. Run
result = app.invoke({
    "messages": [("user", "What is 25 * 4?")]
})

### State with Reducers

Complex state management with custom reducers

**When to use**: Multiple agents updating shared state

from typing import Annotated, TypedDict
from operator import add
from langgraph.graph import StateGraph

# Custom reducer for merging dictionaries
def merge_dicts(left: dict, right: dict) -> dict:
    return {**left, **right}

# State with multiple reducers
class ResearchState(TypedDict):
    # Messages append (don't overwrite)
    messages: Annotated[list, add_messages]

    # Research findings merge
    findings: Annotated[dict, merge_dicts]

    # Sources accumulate
    sources: Annotated[list[str], add]

    # Current step (overwrites - no reducer)
    current_step: str

    # Error count (custom reducer)
    errors: Annotated[int, lambda a, b: a + b]

# Nodes return partial state updates
def researcher(state: ResearchState) -> dict:
    # Only return fields being updated
    return {
        "findings": {"topic_a": "New finding"},
        "sources": ["source1.com"],
        "current_step": "researching"
    }

def writer(state: ResearchState) -> dict:
    # Access accumulated state
    all_findings = state["findings"]
    all_sources = state["sources"]

    return {
        "messages": [("assistant", f"Report based on {len(all_sources)} sources")],
        "current_step": "writing"
    }

# Build graph
graph = StateGraph(ResearchState)
graph.add_node("researcher", researcher)
graph.add_node("writer", writer)
# ... add edges

### Conditional Branching

Route to different paths based on state

**When to use**: Multiple possible workflows

from langgraph.graph import StateGraph, START, END

class RouterState(TypedDict):
    query: str
    query_type: str
    result: str

def classifier(state: RouterState) -> dict:
    """Classify the query type."""
    query = state["query"].lower()
    if "code" in query or "program" in query:
        return {"query_type": "coding"}
    elif "search" in query or "find" in query:
        return {"query_type": "search"}
    else:
        return {"query_type": "chat"}

def coding_agent(state: RouterState) -> dict:
    return {"result": "Here's your code..."}

def search_agent(state: RouterState) -> dict:
    return {"result": "Search results..."}

def chat_agent(state: RouterState) -> dict:
    return {"result": "Let me help..."}

# Routing function
def route_query(state: RouterState) -> str:
    """Route to appropriate agent."""
    query_type = state["query_type"]
    return query_type  # Returns node name

# Build graph
graph = StateGraph(RouterState)

graph.add_node("classifier", classifier)
graph.add_node("coding", coding_agent)
graph.add_node("search", search_agent)
graph.add_node("chat", chat_agent)

graph.add_edge(START, "classifier")

# Conditional edges from classifier
graph.add_conditional_edges(
    "classifier",
    route_query,
    {
        "coding": "coding",
        "search": "search",
        "chat": "chat"
    }
)

# All agents lead to END
graph.add_edge("coding", END)
graph.add_edge("search", END)
graph.add_edge("chat", END)

app = graph.compile()

### Persistence with Checkpointer

Save and resume agent state

**When to use**: Multi-turn conversations, long-running agents

from langgraph.graph import StateGraph
from langgraph.checkpoint.sqlite import SqliteSaver
from langgraph.checkpoint.postgres import PostgresSaver

# SQLite for development
memory = SqliteSaver.from_conn_string(":memory:")
# Or persistent file
memory = SqliteSaver.from_conn_string("agent_state.db")

# PostgreSQL for production
# memory = PostgresSaver.from_conn_string(DATABASE_URL)

# Compile with checkpointer
app = graph.compile(checkpointer=memory)

# Run with thread_id for conversation continuity
config = {"configurable": {"thread_id": "user-123-session-1"}}

# First message
result1 = app.invoke(
    {"messages": [("user", "My name is Alice")]},
    config=config
)

# Second message - agent remembers context
result2 = app.invoke(
    {"messages": [("user", "What's my name?")]},
    config=config
)
# Agent knows name is Alice!

# Get conversation history
state = app.get_state(config)
print(state.values["messages"])

# List all checkpoints
for checkpoint in app.get_state_history(config):
    print(checkpoint.config, checkpoint.values)

### Human-in-the-Loop

Pause for human approval before actions

**When to use**: Sensitive operations, review before execution

from langgraph.graph import StateGraph, START, END

class ApprovalState(TypedDict):
    messages: Annotated[list, add_messages]
    pending_action: dict | None
    approved: bool

def agent(state: ApprovalState) -> dict:
    # Agent decides on action
    action = {"type": "send_email", "to": "user@example.com"}
    return {
        "pending_action": action,
        "messages": [("assistant", f"I want to: {action}")]
    }

def execute_action(state: ApprovalState) -> dict:
    action = state["pending_action"]
    # Execute the approved action
    result = f"Executed: {action['type']}"
    return {
        "messages": [("assistant", result)],
        "pending_action": None
    }

def should_execute(state: ApprovalState) -> str:
    if state.get("approved"):
        return "execute"
    return END  # Wait for approval

# Build graph
graph = StateGraph(ApprovalState)
graph.add_node("agent", agent)
graph.add_node("execute", execute_action)

graph.add_edge(START, "agent")
graph.add_conditional_edges("agent", should_execute, ["execute", END])
graph.add_edge("execute", END)

# Compile with interrupt_before for human review
app = graph.compile(
    checkpointer=memory,
    interrupt_before=["execute"]  # Pause before execution
)

# Run until interrupt
config = {"configurable": {"thread_id": "approval-flow"}}
result = app.invoke({"messages": [("user", "Send report")]}, config)

# Agent paused - get pending state
state = app.get_state(config)
pending = state.values["pending_action"]
print(f"Pending: {pending}")  # Human reviews

# Human approves - update state and continue
app.update_state(config, {"approved": True})
result = app.invoke(None, config)  # Resume

### Parallel Execution (Map-Reduce)

Run multiple branches in parallel

**When to use**: Parallel research, batch processing

from langgraph.graph import StateGraph, START, END, Send
from langgraph.constants import Send

class ParallelState(TypedDict):
    topics: list[str]
    results: Annotated[list[str], add]
    summary: str

def research_topic(state: dict) -> dict:
    """Research a single topic."""
    topic = state["topic"]
    result = f"Research on {topic}..."
    return {"results": [result]}

def summarize(state: ParallelState) -> dict:
    """Combine all research results."""
    all_results = state["results"]
    summary = f"Summary of {len(all_results)} topics"
    return {"summary": summary}

def fanout_topics(state: ParallelState) -> list[Send]:
    """Create parallel tasks for each topic."""
    return [
        Send("research", {"topic": topic})
        for topic in state["topics"]
    ]

# Build graph
graph = StateGraph(ParallelState)
graph.add_node("research", research_topic)
graph.add_node("summarize", summarize)

# Fan out to parallel research
graph.add_conditional_edges(START, fanout_topics, ["research"])
# All research nodes lead to summarize
graph.add_edge("research", "summarize")
graph.add_edge("summarize", END)

app = graph.compile()

result = app.invoke({
    "topics": ["AI", "Climate", "Space"],
    "results": []
})
# Research runs in parallel, then summarizes

#### Imported: Collaboration

### Delegation Triggers

- crewai|role-based|crew -> crewai (Need role-based multi-agent approach)
- observability|tracing|langsmith -> langfuse (Need LLM observability)
- structured output|json schema -> structured-output (Need structured LLM responses)
- evaluate|benchmark|test agent -> agent-evaluation (Need to evaluate agent performance)

### Production Agent Stack

Skills: langgraph, langfuse, structured-output

Workflow:

```
1. Design agent graph with LangGraph
2. Add structured outputs for tool responses
3. Integrate Langfuse for observability
4. Test and monitor in production
```

### Multi-Agent System

Skills: langgraph, crewai, agent-communication

Workflow:

```
1. Design agent roles (CrewAI patterns)
2. Implement as LangGraph with subgraphs
3. Add inter-agent communication
4. Orchestrate with supervisor pattern
```

### Evaluated Agent

Skills: langgraph, agent-evaluation, langfuse

Workflow:

```
1. Build agent with LangGraph
2. Create evaluation suite
3. Monitor with Langfuse
4. Iterate based on metrics
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

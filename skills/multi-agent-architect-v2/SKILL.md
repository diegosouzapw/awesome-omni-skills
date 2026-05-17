---
name: multi-agent-architect-v2
description: "Multi-Agent Architect & Updater Skill workflow skill. Use this skill when the user needs Design and optimize production-grade multi-agent systems with LangGraph, LangChain, and DeepAgents for complex AI workflows and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["langgraph", "langchain", "multi-agent", "orchestration", "deepagents", "rag", "tool-calling", "multi-agent-architect-v2"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "community"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# Multi-Agent Architect & Updater Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/multi-agent-architect` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Multi-Agent Architect & Updater Skill

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Updating an Existing Agent, Existing Issue, Root Cause, Proposed Update, Updated Code.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to create a new agent or multi-agent workflow from scratch
- Use when working with LangGraph state graphs, nodes, edges, or conditional routing
- Use when the user asks about agent communication, memory systems, or tool-calling pipelines
- Use when debugging or optimizing an existing LangChain/LangGraph agent system
- Use when architecting supervisor, planner, research, coding, or validation agent roles
- Use when integrating DeepAgents with hierarchical planning and delegation

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

#### Imported: Overview

This skill turns Claude into a Senior AI Multi-Agent Architect specialized in LangGraph, LangChain, and DeepAgents. It provides structured workflows for creating and updating production-grade multi-agent systems — including supervisor agents, planners, researchers, coders, and memory-backed autonomous pipelines. Use it whenever you need to design, build, debug, or scale any multi-agent AI system.

If this skill adapts material from an external GitHub repository, declare both:

- `source_repo: owner/repo`
- `source_type: official` or `source_type: community`

#### Imported: How It Works

### Step 1: Understand the Goal

Before writing any code, clarify:
- What is the **business objective** this agent system must achieve?
- What **agent roles** are needed (supervisor, planner, researcher, coder, validator)?
- What **tools** does each agent require?
- What **memory** strategy is needed (Redis, Vector DB, LangChain Memory)?
- What **communication protocol** connects agents (shared state, message passing)?

### Step 2: Define the State Schema

All agents share a typed state object passed through the graph:

```python
from typing import TypedDict

class AgentState(TypedDict):
    user_goal: str
    tasks: list[str]
    completed_tasks: list[str]
    next_agent: str
    context: dict
    step_count: int          # guards against infinite loops
    error: str | None
```

### Step 3: Define Agent Nodes

Each agent is an **async function** that reads from state and returns an updated state:

```python
import logging
from langchain_openai import ChatOpenAI

logger = logging.getLogger(__name__)

async def research_node(state: AgentState) -> AgentState:
    logger.info("research_node: starting")
    llm = ChatOpenAI(model="gpt-4o")
    result = await llm.bind_tools(research_tools).ainvoke(state["user_goal"])
    state["context"]["research"] = result.content
    state["next_agent"] = "coder"
    return state
```

### Step 4: Build the LangGraph

Wire nodes together with edges and conditional routing:

```python
from langgraph.graph import StateGraph, END
from langgraph.prebuilt import ToolNode

def build_graph() -> StateGraph:
    graph = StateGraph(AgentState)

    graph.add_node("supervisor", supervisor_node)
    graph.add_node("research",   research_node)
    graph.add_node("coder",      coding_node)
    graph.add_node("validator",  validation_node)
    graph.add_node("tools",      ToolNode(all_tools))

    graph.set_entry_point("supervisor")

    graph.add_conditional_edges(
        "supervisor",
        route_next,
        {"research": "research", "coder": "coder", "end": END}
    )

    graph.add_edge("research",  "supervisor")
    graph.add_edge("coder",     "validator")
    graph.add_edge("validator", "supervisor")

    return graph.compile()

def route_next(state: AgentState) -> str:
    if state["step_count"] > 20:
        return "end"
    return state["next_agent"]
```

### Step 5: Add Memory

```python
from langchain_community.chat_message_histories import RedisChatMessageHistory

def get_memory(session_id: str):
    return RedisChatMessageHistory(
        session_id=session_id,
        url=os.getenv("REDIS_URL"),
        ttl=3600
    )
```

### Step 6: Run the Graph

```python
async def run(user_goal: str, session_id: str):
    graph = build_graph()
    initial_state = AgentState(
        user_goal=user_goal,
        tasks=[],
        completed_tasks=[],
        next_agent="supervisor",
        context={},
        step_count=0,
        error=None,
    )
    return await graph.ainvoke(initial_state)
```

### Step 7: Expose via FastAPI (optional)

```python
from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class RunRequest(BaseModel):
    goal: str
    session_id: str

@app.post("/run")
async def run_agent(req: RunRequest):
    result = await run(req.goal, req.session_id)
    return {"result": result}
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @multi-agent-architect-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @multi-agent-architect-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @multi-agent-architect-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @multi-agent-architect-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Research + Coding Multi-Agent Workflow

```python
# agents/research_agent.py
async def research_node(state: AgentState) -> AgentState:
    llm = ChatOpenAI(model="gpt-4o").bind_tools([web_search, rag_search])
    response = await llm.ainvoke(
        f"Research the following and return structured findings:\n{state['user_goal']}"
    )
    state["context"]["research"] = response.content
    state["next_agent"] = "coder"
    return state

# agents/coding_agent.py
async def coding_node(state: AgentState) -> AgentState:
    llm = ChatOpenAI(model="gpt-4o").bind_tools([python_repl, github_tool])
    response = await llm.ainvoke(
        f"Given this research:\n{state['context']['research']}\n\nWrite production Python code."
    )
    state["context"]["code"] = response.content
    state["next_agent"] = "validator"
    return state
```

### Example 2: Supervisor with Dynamic Delegation

```python
# agents/supervisor_agent.py
DELEGATION_PROMPT = """
You are a supervisor. Given the current state, decide the next agent.
Available agents: research, coder, validator, end.
Respond with ONLY the agent name.

Goal: {goal}
Completed: {completed}
Context keys available: {context}
"""

async def supervisor_node(state: AgentState) -> AgentState:
    state["step_count"] += 1
    llm = ChatOpenAI(model="gpt-4o")
    decision = await llm.ainvoke(
        DELEGATION_PROMPT.format(
            goal=state["user_goal"],
            completed=state["completed_tasks"],
            context=list(state["context"].keys()),
        )
    )
    next_agent = decision.content.strip().lower()
    # Validate against allowlist before setting
    allowed = {"research", "coder", "validator", "end"}
    state["next_agent"] = next_agent if next_agent in allowed else "end"
    return state
```

### Example 3: DeepAgents Reflection Loop

```python
async def reflection_node(state: AgentState) -> AgentState:
    llm = ChatOpenAI(model="gpt-4o")
    critique = await llm.ainvoke(
        f"Evaluate this output critically:\n{state['context'].get('code', '')}\n"
        "List any bugs, gaps, or improvements. Be concise."
    )
    state["context"]["critique"] = critique.content
    state["next_agent"] = "coder" if "bug" in critique.content.lower() else "end"
    return state
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ One agent = one responsibility — never combine planning + coding + testing in one node
- ✅ Use TypedDict for all state schemas — enables type checking and graph validation
- ✅ Bind only the tools each agent needs — reduces hallucinated tool calls
- ✅ Always add a step_count guard to prevent infinite routing loops
- ✅ Use async/await throughout — LangGraph supports async natively
- ✅ Store all secrets in environment variables loaded via os.getenv()
- ✅ Set TTLs on all Redis keys scoped to session_id

### Imported Operating Notes

#### Imported: Best Practices

- ✅ One agent = one responsibility — never combine planning + coding + testing in one node
- ✅ Use `TypedDict` for all state schemas — enables type checking and graph validation
- ✅ Bind only the tools each agent needs — reduces hallucinated tool calls
- ✅ Always add a `step_count` guard to prevent infinite routing loops
- ✅ Use `async`/`await` throughout — LangGraph supports async natively
- ✅ Store all secrets in environment variables loaded via `os.getenv()`
- ✅ Set TTLs on all Redis keys scoped to `session_id`
- ✅ Log at every node entry and tool call for observability
- ✅ Validate supervisor routing output against an allowlist of agent names
- ❌ Don't hardcode API keys, model names, or Redis URLs
- ❌ Don't share tool lists across agents that don't need them
- ❌ Don't skip error handling — tool failures and empty LLM responses are common
- ❌ Don't trust unvalidated LLM routing decisions — always check against an allowlist

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/multi-agent-architect`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@cred-omega-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@customs-trade-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@docker-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ejentum-reasoning-harness-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Updating an Existing Agent

When the user wants to update or debug an existing agent, structure the response as:

```

#### Imported: Existing Issue

[Describe the current problem]

#### Imported: Root Cause

[Identify why it's happening in the architecture]

#### Imported: Proposed Update

[Outline the changes at architecture level]

#### Imported: Updated Code

[Generate only the changed modules]

#### Imported: Migration Notes

[What breaks, what's backward-compatible]

#### Imported: Performance Impact

[Latency / token / memory delta]
```

---

#### Imported: Standard Folder Structure

Always generate code in this layout:

```
multi_agent_system/
├── agents/          # One file per agent role
├── tools/           # Tool definitions and wrappers
├── memory/          # Redis, VectorDB, LangChain memory helpers
├── prompts/         # Prompt templates (one per agent)
├── workflows/       # High-level orchestration logic
├── graphs/          # LangGraph state + compiled graph definitions
├── api/             # FastAPI routes (optional)
├── configs/         # Config loader — no secrets in code
├── tests/           # Unit + integration tests per agent
└── main.py
```

---

#### Imported: Limitations

- This skill does not replace environment-specific testing, load testing, or security review before production deployment.
- Generated LangGraph code targets the current stable API — always verify method signatures against your installed version (`pip show langgraph`).
- Stop and ask for clarification if the agent's goal, tool permissions, or routing logic is ambiguous before generating a full architecture.
- DeepAgents integration patterns assume the library is installed and configured in the target environment.

---

#### Imported: Security & Safety Notes

- Never expose API keys in generated code. All secrets must use environment variables:
  ```python
  OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")   # ✅ correct
  OPENAI_API_KEY = "sk-..."                        # ❌ never do this
  ```
- Always validate and sanitize user inputs before injecting them into agent prompts — treat all user input as untrusted.
- Add a permission layer before allowing agents to execute shell commands or write to filesystems.
- If generating a Python REPL tool node, document that it must only run in a sandboxed, isolated environment.
  <!-- security-allowlist: python_repl tool examples are for sandboxed execution environments only -->
- For production deployments, add rate-limit handling and exponential backoff on all LLM and external API calls.
- Scope all Redis session keys to `session_id` and set a TTL to prevent memory leaks across sessions.

---

#### Imported: Common Pitfalls

- **Problem:** Agent loops indefinitely between supervisor and sub-agents
  **Solution:** Add `step_count: int` to state; return `"end"` in `route_next()` when `step_count > N`

- **Problem:** Supervisor routes to a non-existent agent name
  **Solution:** Validate the LLM's routing output against a hardcoded allowlist before setting `next_agent`

- **Problem:** Memory leaks across user sessions
  **Solution:** Scope Redis keys to `session_id` and always set a TTL (`ttl=3600`)

- **Problem:** Tool results are ignored by the next agent
  **Solution:** Always write tool output into `state["context"]` and confirm the next node reads it

- **Problem:** Agents share too many tools and hallucinate wrong tool calls
  **Solution:** Use `.bind_tools([only_relevant_tools])` per agent instead of a global tool list

- **Problem:** Graph fails silently on API rate limits
  **Solution:** Wrap LLM calls in retry logic with exponential backoff using `tenacity`

---

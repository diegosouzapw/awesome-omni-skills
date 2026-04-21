---
name: "ai-agents-architect-v2"
description: "AI Agents Architect workflow skill. Use this skill when the user needs Expert in designing and building autonomous AI agents. Masters tool and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "ai-agents-architect-v2"
  - "ai-agents-architect"
  - "expert"
  - "designing"
  - "and"
  - "building"
  - "autonomous"
  - "masters"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-20"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "ai-agents-architect-v2"
family_name: "AI Agents Architect"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/ai-agents-architect-v2"
upstream_skill: "skills/ai-agents-architect-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "85"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "ai-agents-architect-v2"
---

# AI Agents Architect

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ai-agents-architect` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AI Agents Architect Expert in designing and building autonomous AI agents. Masters tool use, memory systems, planning strategies, and multi-agent orchestration. Role: AI Agent Systems Architect I build AI systems that can act autonomously while remaining controllable. I understand that agents fail in unexpected ways - I design for graceful degradation and clear failure modes. I balance autonomy with oversight, knowing when an agent should ask for help vs proceed independently. ### Expertise - Agent loop design (ReAct, Plan-and-Execute, etc.) - Tool definition and execution - Memory architectures (short-term, long-term, episodic) - Planning strategies and task decomposition - Multi-agent communication patterns - Agent evaluation and observability - Error handling and recovery - Safety and guardrails ### Principles - Agents should fail loudly, not silently - Every tool needs clear documentation and examples - Memory is for context, not crutch - Planning reduces but doesn't eliminate errors - Multi-agent adds complexity - justify the overhead

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Prerequisites, Patterns, Sharp Edges, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: build agent
- User mentions or implies: AI agent
- User mentions or implies: autonomous agent
- User mentions or implies: tool use
- User mentions or implies: function calling
- User mentions or implies: multi-agent

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

- Agent architecture design
- Tool and function calling
- Agent memory systems
- Planning and reasoning strategies
- Multi-agent orchestration
- Agent evaluation and debugging

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-agents-architect-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-agents-architect-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-agents-architect-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-agents-architect-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ai-agents-architect`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Required skills: LLM API usage, Understanding of function calling, Basic prompt engineering

#### Imported: Patterns

### ReAct Loop

Reason-Act-Observe cycle for step-by-step execution

**When to use**: Simple tool use with clear action-observation flow

- Thought: reason about what to do next
- Action: select and invoke a tool
- Observation: process tool result
- Repeat until task complete or stuck
- Include max iteration limits

### Plan-and-Execute

Plan first, then execute steps

**When to use**: Complex tasks requiring multi-step planning

- Planning phase: decompose task into steps
- Execution phase: execute each step
- Replanning: adjust plan based on results
- Separate planner and executor models possible

### Tool Registry

Dynamic tool discovery and management

**When to use**: Many tools or tools that change at runtime

- Register tools with schema and examples
- Tool selector picks relevant tools for task
- Lazy loading for expensive tools
- Usage tracking for optimization

### Hierarchical Memory

Multi-level memory for different purposes

**When to use**: Long-running agents needing context

- Working memory: current task context
- Episodic memory: past interactions/results
- Semantic memory: learned facts and patterns
- Use RAG for retrieval from long-term memory

### Supervisor Pattern

Supervisor agent orchestrates specialist agents

**When to use**: Complex tasks requiring multiple skills

- Supervisor decomposes and delegates
- Specialists have focused capabilities
- Results aggregated by supervisor
- Error handling at supervisor level

### Checkpoint Recovery

Save state for resumption after failures

**When to use**: Long-running tasks that may fail

- Checkpoint after each successful step
- Store task state, memory, and progress
- Resume from last checkpoint on failure
- Clean up checkpoints on completion

#### Imported: Sharp Edges

### Agent loops without iteration limits

Severity: CRITICAL

Situation: Agent runs until 'done' without max iterations

Symptoms:
- Agent runs forever
- Unexplained high API costs
- Application hangs

Why this breaks:
Agents can get stuck in loops, repeating the same actions, or spiral
into endless tool calls. Without limits, this drains API credits,
hangs the application, and frustrates users.

Recommended fix:

Always set limits:
- max_iterations on agent loops
- max_tokens per turn
- timeout on agent runs
- cost caps for API usage
- Circuit breakers for tool failures

### Vague or incomplete tool descriptions

Severity: HIGH

Situation: Tool descriptions don't explain when/how to use

Symptoms:
- Agent picks wrong tools
- Parameter errors
- Agent says it can't do things it can

Why this breaks:
Agents choose tools based on descriptions. Vague descriptions lead to
wrong tool selection, misused parameters, and errors. The agent
literally can't know what it doesn't see in the description.

Recommended fix:

Write complete tool specs:
- Clear one-sentence purpose
- When to use (and when not to)
- Parameter descriptions with types
- Example inputs and outputs
- Error cases to expect

### Tool errors not surfaced to agent

Severity: HIGH

Situation: Catching tool exceptions silently

Symptoms:
- Agent continues with wrong data
- Final answers are wrong
- Hard to debug failures

Why this breaks:
When tool errors are swallowed, the agent continues with bad or missing
data, compounding errors. The agent can't recover from what it can't
see. Silent failures become loud failures later.

Recommended fix:

Explicit error handling:
- Return error messages to agent
- Include error type and recovery hints
- Let agent retry or choose alternative
- Log errors for debugging

### Storing everything in agent memory

Severity: MEDIUM

Situation: Appending all observations to memory without filtering

Symptoms:
- Context window exceeded
- Agent references outdated info
- High token costs

Why this breaks:
Memory fills with irrelevant details, old information, and noise.
This bloats context, increases costs, and can cause the model to
lose focus on what matters.

Recommended fix:

Selective memory:
- Summarize rather than store verbatim
- Filter by relevance before storing
- Use RAG for long-term memory
- Clear working memory between tasks

### Agent has too many tools

Severity: MEDIUM

Situation: Giving agent 20+ tools for flexibility

Symptoms:
- Wrong tool selection
- Agent overwhelmed by options
- Slow responses

Why this breaks:
More tools means more confusion. The agent must read and consider all
tool descriptions, increasing latency and error rate. Long tool lists
get cut off or poorly understood.

Recommended fix:

Curate tools per task:
- 5-10 tools maximum per agent
- Use tool selection layer for large tool sets
- Specialized agents with focused tools
- Dynamic tool loading based on task

### Using multiple agents when one would work

Severity: MEDIUM

Situation: Starting with multi-agent architecture for simple tasks

Symptoms:
- Agents duplicating work
- Communication overhead
- Hard to debug failures

Why this breaks:
Multi-agent adds coordination overhead, communication failures,
debugging complexity, and cost. Each agent handoff is a potential
failure point. Start simple, add agents only when proven necessary.

Recommended fix:

Justify multi-agent:
- Can one agent with good tools solve this?
- Is the coordination overhead worth it?
- Are the agents truly independent?
- Start with single agent, measure limits

### Agent internals not logged or traceable

Severity: MEDIUM

Situation: Running agents without logging thoughts/actions

Symptoms:
- Can't explain agent failures
- No visibility into agent reasoning
- Debugging takes hours

Why this breaks:
When agents fail, you need to see what they were thinking, which
tools they tried, and where they went wrong. Without observability,
debugging is guesswork.

Recommended fix:

Implement tracing:
- Log each thought/action/observation
- Track tool calls with inputs/outputs
- Trace token usage and latency
- Use structured logging for analysis

### Fragile parsing of agent outputs

Severity: MEDIUM

Situation: Regex or exact string matching on LLM output

Symptoms:
- Parse errors in agent loop
- Works sometimes, fails sometimes
- Small prompt changes break parsing

Why this breaks:
LLMs don't produce perfectly consistent output. Minor format variations
break brittle parsers. This causes agent crashes or incorrect behavior
from parsing errors.

Recommended fix:

Robust output handling:
- Use structured output (JSON mode, function calling)
- Fuzzy matching for actions
- Retry with format instructions on parse failure
- Handle multiple output formats

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

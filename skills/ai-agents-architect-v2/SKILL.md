---
name: ai-agents-architect-v2
description: "AI Agents Architect workflow skill. Use this skill when the user needs Expert in designing and building autonomous AI agents. Masters tool and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["ai-agents-architect-v2", "ai-agents-architect", "expert", "designing", "and", "building", "autonomous", "masters"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# AI Agents Architect

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ai-agents-architect` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# AI Agents Architect Expert in designing and building autonomous AI agents. Masters tool use, memory systems, planning strategies, and multi-agent orchestration. Role: AI Agent Systems Architect I build AI systems that can act autonomously while remaining controllable. I understand that agents fail in unexpected ways - I design for graceful degradation and clear failure modes. I balance autonomy with oversight, knowing when an agent should ask for help vs proceed independently. ### Expertise - Agent loop design (ReAct, Plan-and-Execute, etc.) - Tool definition and execution - Memory architectures (short-term, long-term, episodic) - Planning strategies and task decomposition - Multi-agent communication patterns - Agent evaluation and observability - Error handling and recovery - Safety and guardrails ### Principles - Agents should fail loudly, not silently - Every tool needs clear documentation and examples - Memory is for context, not crutch - Planning reduces but doesn't eliminate errors - Multi-agent adds complexity - justify the overhead

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Prerequisites, Patterns, Sharp Edges.

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
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
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
Use @ai-agents-architect-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/ai-agents-architect-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/ai-agents-architect-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @ai-agents-architect-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ai-agents-architect`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

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

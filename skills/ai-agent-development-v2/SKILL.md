---
name: ai-agent-development-v2
description: "AI Agent Development Workflow workflow skill. Use this skill when the user needs AI agent development workflow for building autonomous agents, multi-agent systems, and agent orchestration with CrewAI, LangGraph, and custom agents and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["ai-agent-development-v2", "ai-agent-development", "development", "for", "building", "autonomous", "multi-agent", "systems"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# AI Agent Development Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ai-agent-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# AI Agent Development Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Agent Architecture, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building autonomous AI agents
- Creating multi-agent systems
- Implementing agent orchestration
- Adding tool integration to agents
- Setting up agent memory
- Use when the request clearly matches the imported source intent: AI agent development workflow for building autonomous agents, multi-agent systems, and agent orchestration with CrewAI, LangGraph, and custom agents.

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

1. ai-agents-architect - Agent architecture
2. autonomous-agents - Autonomous patterns
3. Define agent purpose
4. Design agent capabilities
5. Plan tool integration
6. Design memory system
7. Define success metrics

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Agent Design

#### Skills to Invoke
- `ai-agents-architect` - Agent architecture
- `autonomous-agents` - Autonomous patterns

#### Actions
1. Define agent purpose
2. Design agent capabilities
3. Plan tool integration
4. Design memory system
5. Define success metrics

#### Copy-Paste Prompts
```
Use @ai-agents-architect to design AI agent architecture
```

### Phase 2: Single Agent Implementation

#### Skills to Invoke
- `autonomous-agent-patterns` - Agent patterns
- `autonomous-agents` - Autonomous agents

#### Actions
1. Choose agent framework
2. Implement agent logic
3. Add tool integration
4. Configure memory
5. Test agent behavior

#### Copy-Paste Prompts
```
Use @autonomous-agent-patterns to implement single agent
```

### Phase 3: Multi-Agent System

#### Skills to Invoke
- `crewai` - CrewAI framework
- `multi-agent-patterns` - Multi-agent patterns

#### Actions
1. Define agent roles
2. Set up agent communication
3. Configure orchestration
4. Implement task delegation
5. Test coordination

#### Copy-Paste Prompts
```
Use @crewai to build multi-agent system with roles
```

### Phase 4: Agent Orchestration

#### Skills to Invoke
- `langgraph` - LangGraph orchestration
- `workflow-orchestration-patterns` - Orchestration

#### Actions
1. Design workflow graph
2. Implement state management
3. Add conditional branches
4. Configure persistence
5. Test workflows

#### Copy-Paste Prompts
```
Use @langgraph to create stateful agent workflows
```

### Phase 5: Tool Integration

#### Skills to Invoke
- `agent-tool-builder` - Tool building
- `tool-design` - Tool design

#### Actions
1. Identify tool needs
2. Design tool interfaces
3. Implement tools
4. Add error handling
5. Test tool usage

#### Copy-Paste Prompts
```
Use @agent-tool-builder to create agent tools
```

### Phase 6: Memory Systems

#### Skills to Invoke
- `agent-memory-systems` - Memory architecture
- `conversation-memory` - Conversation memory

#### Actions
1. Design memory structure
2. Implement short-term memory
3. Set up long-term memory
4. Add entity memory
5. Test memory retrieval

#### Copy-Paste Prompts
```
Use @agent-memory-systems to implement agent memory
```

### Phase 7: Evaluation

#### Skills to Invoke
- `agent-evaluation` - Agent evaluation
- `evaluation` - AI evaluation

#### Actions
1. Define evaluation criteria
2. Create test scenarios
3. Measure agent performance
4. Test edge cases
5. Iterate improvements

#### Copy-Paste Prompts
```
Use @agent-evaluation to evaluate agent performance
```

#### Imported: Related Workflow Bundles

- `ai-ml` - AI/ML development
- `rag-implementation` - RAG systems
- `workflow-automation` - Workflow patterns

#### Imported: Overview

Specialized workflow for building AI agents including single autonomous agents, multi-agent systems, agent orchestration, tool integration, and human-in-the-loop patterns.

#### Imported: Agent Architecture

```
User Input -> Planner -> Agent -> Tools -> Memory -> Response
              |          |        |        |
         Decompose   LLM Core  Actions  Short/Long-term
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ai-agent-development-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ai-agent-development-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ai-agent-development-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ai-agent-development-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ai-agent-development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@advogado-especialista-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aegisops-ai-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-evaluation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@agent-framework-azure-ai-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quality Gates

- [ ] Agent logic working
- [ ] Tools integrated
- [ ] Memory functional
- [ ] Orchestration tested
- [ ] Evaluation passing

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

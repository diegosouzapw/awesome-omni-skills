---
name: antigravity-skill-orchestrator
description: "antigravity-skill-orchestrator workflow skill. Use this skill when the user needs A meta-skill that understands task requirements, dynamically selects appropriate skills, tracks successful skill combinations using agent-memory-mcp, and prevents skill overuse for simple tasks and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["orchestration", "meta-skill", "agent-memory", "task-evaluation", "antigravity-skill-orchestrator", "understands", "task", "requirements"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-24"
---

# antigravity-skill-orchestrator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/antigravity-skill-orchestrator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# antigravity-skill-orchestrator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when tackling a complex, multi-step problem that likely requires multiple domains of expertise.
- Use when you are unsure which specific skills are best suited for a given user request, and need to discover them from the broader ecosystem.
- Use when the user explicitly asks to "orchestrate", "combine skills", or "use the best tools for the job" on a significant task.
- Use when you want to look up previously successful combinations of skills for a specific type of problem.
- Use when the request clearly matches the imported source intent: A meta-skill that understands task requirements, dynamically selects appropriate skills, tracks successful skill combinations using agent-memory-mcp, and prevents skill overuse for simple tasks.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `README.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `README.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Read the user's request.
2. Ask yourself: "Can I solve this efficiently with just basic file editing and terminal commands?"
3. If YES: Proceed without invoking specialized skills. Stop the orchestration here.
4. If NO: Proceed to step 2.
5. Use the memory_search tool provided by agent-memory-mcp to search for similar past tasks.
6. Example query: memorysearch({ query: "skill combination for react native and firebase", type: "skillcombination" })
7. If a working combination exists, read the details using memory_read.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Task Evaluation & Guardrail Check
[Triggered when facing a new user request that might need skills]
1. Read the user's request.
2. Ask yourself: "Can I solve this efficiently with just basic file editing and terminal commands?"
3. If YES: Proceed without invoking specialized skills. Stop the orchestration here.
4. If NO: Proceed to step 2.

### 2. Retrieve Past Knowledge
[Triggered if the task is complex]
1. Use the `memory_search` tool provided by `agent-memory-mcp` to search for similar past tasks.
   - Example query: `memory_search({ query: "skill combination for react native and firebase", type: "skill_combination" })`
2. If a working combination exists, read the details using `memory_read`.
3. If no relevant memory exists, proceed to Step 3.

### 3. Discover and Select Skills
[Triggered if no past knowledge covers this task]
1. Analyze the core requirements (e.g., "needs a React UI, a Node.js backend, and a PostgreSQL database").
2. Query the locally available skills using the current environment's skill list or equivalent discovery mechanism to find the best match for each requirement.
3. **If local skills are insufficient**, fetch the master catalog with the web or command-line retrieval tools available in the current environment: `https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/CATALOG.md`.
4. Scan the catalog's 9 main categories to identify the appropriate skills to bring into the current context.
5. Select the minimal set of skills needed. **Do not over-select.**

### 4. Apply Skills and Track the Combination
[Triggered after executing the task using the selected skills]
1. Assume the task was completed successfully using a new combination of skills (e.g., `@react-patterns` + `@nodejs-backend-patterns` + `@postgresql`).
2. Record this combination for future use using `memory_write` from `agent-memory-mcp`.
   - Ensure the type is `skill_combination`.
   - Provide a descriptive key and content detailing why these skills worked well together.

#### Imported: Overview

The `skill-orchestrator` is a meta-skill designed to enhance the AI agent's ability to tackle complex problems. It acts as an intelligent coordinator that first evaluates the complexity of a user's request. Based on that evaluation, it determines if specialized skills are needed. If they are, it selects the right combination of skills, explicitly tracks these combinations using `@agent-memory-mcp` for future reference, and guides the agent through the execution process. Crucially, it includes strict guardrails to prevent the unnecessary use of specialized skills for simple tasks that can be solved with baseline capabilities.

#### Imported: Core Concepts

### Task Evaluation Guardrails
Not every task requires a specialized skill. For straightforward issues (e.g., small CSS fixes, simple script writing, renaming a variable), **DO NOT USE** specialized skills. Over-engineering simple tasks wastes tokens and time. 

Additionally, the orchestrator is strictly forbidden from creating new skills. Its sole purpose is to combine and use existing skills provided by the community or present in the current environment.

Before invoking any skills, evaluate the task:
1. **Is the task simple/contained?** Solve it directly using the agent's ordinary file editing, search, and terminal capabilities available in the current environment.
2. **Is the task complex/multi-domain?** Only then should you proceed to orchestrate skills.

### Skill Selection & Combinations
When a task is deemed complex, identify the necessary domains (e.g., frontend, database, deployment). Search available skills in the current environment to find the most relevant ones. If the required skills are not found locally, consult the master skill catalog.

### Master Skill Catalog
The Antigravity ecosystem maintains a master catalog of highly curated skills at `https://raw.githubusercontent.com/sickn33/antigravity-awesome-skills/main/CATALOG.md`. When local skills are insufficient, fetch this catalog to discover appropriate skills across the 9 primary categories:
- `architecture`
- `business`
- `data-ai`
- `development`
- `general`
- `infrastructure`
- `security`
- `testing`
- `workflow`

### Memory Integration (`@agent-memory-mcp`)
To build institutional knowledge, the orchestrator relies on the `agent-memory-mcp` skill to record and retrieve successful skill combinations.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @antigravity-skill-orchestrator to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @antigravity-skill-orchestrator against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @antigravity-skill-orchestrator for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @antigravity-skill-orchestrator using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Handling a Simple Task (The Guardrail in Action)
**User Request:** "Change the color of the submit button in `index.css` to blue."
**Action:** The skill orchestrator evaluates the task. It determines this is a "simple/contained" task. It **does not** invoke specialized skills. It directly edits `index.css`.

### Example 2: Recording a New Skill Combination
```javascript
// Using the agent-memory-mcp tool after successfully building a complex feature
memory_write({ 
  key: "combination-ecommerce-checkout", 
  type: "skill_combination", 
  content: "For e-commerce checkouts, using @stripe-integration combined with @react-state-management and @postgresql effectively handles the full flow from UI state to payment processing to order recording.",
  tags: ["ecommerce", "checkout", "stripe", "react"]
})
```

### Example 3: Retrieving a Combination
```javascript
// At the start of a new e-commerce task
memory_search({ 
  query: "ecommerce checkout", 
  type: "skill_combination" 
})
// Returns the key "combination-ecommerce-checkout", which you then read:
memory_read({ key: "combination-ecommerce-checkout" })
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Always evaluate task complexity before looking for skills.
- ✅ Do: Keep the number of orchestrated skills as small as possible.
- ✅ Do: Use highly descriptive keys when running memory_write so they are easy to search later.
- ❌ Don't: Use this skill for simple bug fixes or UI tweaks.
- ❌ Don't: Combine skills that have overlapping and conflicting instructions without a clear plan to resolve the conflict.
- ❌ Don't: Attempt to construct, generate, or create new skills. Only combine what is available.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Always evaluate task complexity *before* looking for skills.
- ✅ **Do:** Keep the number of orchestrated skills as small as possible.
- ✅ **Do:** Use highly descriptive keys when running `memory_write` so they are easy to search later.
- ❌ **Don't:** Use this skill for simple bug fixes or UI tweaks.
- ❌ **Don't:** Combine skills that have overlapping and conflicting instructions without a clear plan to resolve the conflict.
- ❌ **Don't:** Attempt to construct, generate, or create new skills. Only combine what is available.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/antigravity-skill-orchestrator`, fails to mention provenance, or does not use any copied source files at all.
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

- [README.md](README.md)

### Imported Reference Notes

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

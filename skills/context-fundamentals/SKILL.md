---
name: context-fundamentals
description: "Context Engineering Fundamentals workflow skill. Use this skill when the user needs Context is the complete state available to a language model at inference time. It includes everything the model can attend to when generating responses: system instructions, tool definitions, retrieved documents, message history, and tool outputs and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["context-fundamentals", "context", "the", "complete", "state", "available", "language", "model"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Context Engineering Fundamentals

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/context-fundamentals` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Context Engineering Fundamentals Context is the complete state available to a language model at inference time. It includes everything the model can attend to when generating responses: system instructions, tool definitions, retrieved documents, message history, and tool outputs. Understanding context fundamentals is prerequisite to effective context engineering.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Detailed Topics, Practical Guidance, Integration, Skill Metadata.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing new agent systems or modifying existing architectures
- Debugging unexpected agent behavior that may relate to context
- Optimizing context usage to reduce token costs or improve performance
- Onboarding new team members to context engineering concepts
- Reviewing context-related design decisions
- Use when the request clearly matches the imported source intent: Context is the complete state available to a language model at inference time. It includes everything the model can attend to when generating responses: system instructions, tool definitions, retrieved documents,....

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

#### Imported: Core Concepts

Context comprises several distinct components, each with different characteristics and constraints. The attention mechanism creates a finite budget that constrains effective context usage. Progressive disclosure manages this constraint by loading information only as needed. The engineering discipline is curating the smallest high-signal token set that achieves desired outcomes.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @context-fundamentals to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/context-fundamentals/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/context-fundamentals/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @context-fundamentals using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

**Example 1: Organizing System Prompts**
```markdown
<BACKGROUND_INFORMATION>
You are a Python expert helping a development team.
Current project: Data processing pipeline in Python 3.9+
</BACKGROUND_INFORMATION>

<INSTRUCTIONS>
- Write clean, idiomatic Python code
- Include type hints for function signatures
- Add docstrings for public functions
- Follow PEP 8 style guidelines
</INSTRUCTIONS>

<TOOL_GUIDANCE>
Use bash for shell operations, python for code tasks.
File operations should use pathlib for cross-platform compatibility.
</TOOL_GUIDANCE>

<OUTPUT_DESCRIPTION>
Provide code blocks with syntax highlighting.
Explain non-obvious decisions in comments.
</OUTPUT_DESCRIPTION>
```

**Example 2: Progressive Document Loading**
```markdown
# Instead of loading all documentation at once:

# Step 1: Load summary
docs/api_summary.md          # Lightweight overview

# Step 2: Load specific section as needed
docs/api/endpoints.md        # Only when API calls needed
docs/api/authentication.md   # Only when auth context needed
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Treat context as a finite resource with diminishing returns
- Place critical information at attention-favored positions (beginning and end)
- Use progressive disclosure to defer loading until needed
- Organize system prompts with clear section boundaries
- Monitor context usage during development
- Implement compaction triggers at 70-80% utilization
- Design for context degradation rather than hoping to avoid it

### Imported Operating Notes

#### Imported: Guidelines

1. Treat context as a finite resource with diminishing returns
2. Place critical information at attention-favored positions (beginning and end)
3. Use progressive disclosure to defer loading until needed
4. Organize system prompts with clear section boundaries
5. Monitor context usage during development
6. Implement compaction triggers at 70-80% utilization
7. Design for context degradation rather than hoping to avoid it
8. Prefer smaller high-signal context over larger low-signal context

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/context-fundamentals`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: References

Internal reference:
- Context Components Reference - Detailed technical reference

Related skills in this collection:
- context-degradation - Understanding context failure patterns
- context-optimization - Techniques for efficient context use

External resources:
- Research on transformer attention mechanisms
- Production engineering guides from leading AI labs
- Framework documentation on context window management

---

#### Imported: Detailed Topics

### The Anatomy of Context

**System Prompts**
System prompts establish the agent's core identity, constraints, and behavioral guidelines. They are loaded once at session start and typically persist throughout the conversation. System prompts should be extremely clear and use simple, direct language at the right altitude for the agent.

The right altitude balances two failure modes. At one extreme, engineers hardcode complex brittle logic that creates fragility and maintenance burden. At the other extreme, engineers provide vague high-level guidance that fails to give concrete signals for desired outputs or falsely assumes shared context. The optimal altitude strikes a balance: specific enough to guide behavior effectively, yet flexible enough to provide strong heuristics.

Organize prompts into distinct sections using XML tagging or Markdown headers to delineate background information, instructions, tool guidance, and output description. The exact formatting matters less as models become more capable, but structural clarity remains valuable.

**Tool Definitions**
Tool definitions specify the actions an agent can take. Each tool includes a name, description, parameters, and return format. Tool definitions live near the front of context after serialization, typically before or after the system prompt.

Tool descriptions collectively steer agent behavior. Poor descriptions force agents to guess; optimized descriptions include usage context, examples, and defaults. The consolidation principle states that if a human engineer cannot definitively say which tool should be used in a given situation, an agent cannot be expected to do better.

**Retrieved Documents**
Retrieved documents provide domain-specific knowledge, reference materials, or task-relevant information. Agents use retrieval augmented generation to pull relevant documents into context at runtime rather than pre-loading all possible information.

The just-in-time approach maintains lightweight identifiers (file paths, stored queries, web links) and uses these references to load data into context dynamically. This mirrors human cognition: we generally do not memorize entire corpuses of information but rather use external organization and indexing systems to retrieve relevant information on demand.

**Message History**
Message history contains the conversation between the user and agent, including previous queries, responses, and reasoning. For long-running tasks, message history can grow to dominate context usage.

Message history serves as scratchpad memory where agents track progress, maintain task state, and preserve reasoning across turns. Effective management of message history is critical for long-horizon task completion.

**Tool Outputs**
Tool outputs are the results of agent actions: file contents, search results, command execution output, API responses, and similar data. Tool outputs comprise the majority of tokens in typical agent trajectories, with research showing observations (tool outputs) can reach 83.9% of total context usage.

Tool outputs consume context whether they are relevant to current decisions or not. This creates pressure for strategies like observation masking, compaction, and selective tool result retention.

### Context Windows and Attention Mechanics

**The Attention Budget Constraint**
Language models process tokens through attention mechanisms that create pairwise relationships between all tokens in context. For n tokens, this creates n² relationships that must be computed and stored. As context length increases, the model's ability to capture these relationships gets stretched thin.

Models develop attention patterns from training data distributions where shorter sequences predominate. This means models have less experience with and fewer specialized parameters for context-wide dependencies. The result is an "attention budget" that depletes as context grows.

**Position Encoding and Context Extension**
Position encoding interpolation allows models to handle longer sequences by adapting them to originally trained smaller contexts. However, this adaptation introduces degradation in token position understanding. Models remain highly capable at longer contexts but show reduced precision for information retrieval and long-range reasoning compared to performance on shorter contexts.

**The Progressive Disclosure Principle**
Progressive disclosure manages context efficiently by loading information only as needed. At startup, agents load only skill names and descriptions—sufficient to know when a skill might be relevant. Full content loads only when a skill is activated for specific tasks.

This approach keeps agents fast while giving them access to more context on demand. The principle applies at multiple levels: skill selection, document loading, and even tool result retrieval.

### Context Quality Versus Context Quantity

The assumption that larger context windows solve memory problems has been empirically debunked. Context engineering means finding the smallest possible set of high-signal tokens that maximize the likelihood of desired outcomes.

Several factors create pressure for context efficiency. Processing cost grows disproportionately with context length—not just double the cost for double the tokens, but exponentially more in time and computing resources. Model performance degrades beyond certain context lengths even when the window technically supports more tokens. Long inputs remain expensive even with prefix caching.

The guiding principle is informativity over exhaustiveness. Include what matters for the decision at hand, exclude what does not, and design systems that can access additional information on demand.

### Context as Finite Resource

Context must be treated as a finite resource with diminishing marginal returns. Like humans with limited working memory, language models have an attention budget drawn on when parsing large volumes of context.

Every new token introduced depletes this budget by some amount. This creates the need for careful curation of available tokens. The engineering problem is optimizing utility against inherent constraints.

Context engineering is iterative and the curation phase happens each time you decide what to pass to the model. It is not a one-time prompt writing exercise but an ongoing discipline of context management.

#### Imported: Practical Guidance

### File-System-Based Access

Agents with filesystem access can use progressive disclosure naturally. Store reference materials, documentation, and data externally. Load files only when needed using standard filesystem operations. This pattern avoids stuffing context with information that may not be relevant.

The file system itself provides structure that agents can navigate. File sizes suggest complexity; naming conventions hint at purpose; timestamps serve as proxies for relevance. Metadata of file references provides a mechanism to efficiently refine behavior.

### Hybrid Strategies

The most effective agents employ hybrid strategies. Pre-load some context for speed (like CLAUDE.md files or project rules), but enable autonomous exploration for additional context as needed. The decision boundary depends on task characteristics and context dynamics.

For contexts with less dynamic content, pre-loading more upfront makes sense. For rapidly changing or highly specific information, just-in-time loading avoids stale context.

### Context Budgeting

Design with explicit context budgets in mind. Know the effective context limit for your model and task. Monitor context usage during development. Implement compaction triggers at appropriate thresholds. Design systems assuming context will degrade rather than hoping it will not.

Effective context budgeting requires understanding not just raw token counts but also attention distribution patterns. The middle of context receives less attention than the beginning and end. Place critical information at attention-favored positions.

#### Imported: Integration

This skill provides foundational context that all other skills build upon. It should be studied first before exploring:

- context-degradation - Understanding how context fails
- context-optimization - Techniques for extending context capacity
- multi-agent-patterns - How context isolation enables multi-agent systems
- tool-design - How tool definitions interact with context

#### Imported: Skill Metadata

**Created**: 2025-12-20
**Last Updated**: 2025-12-20
**Author**: Agent Skills for Context Engineering Contributors
**Version**: 1.0.0

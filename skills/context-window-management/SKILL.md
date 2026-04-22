---
name: context-window-management
description: "Context Window Management workflow skill. Use this skill when the user needs Strategies for managing LLM context windows including and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["context-window-management", "strategies", "for", "managing", "llm", "context", "windows", "including"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Context Window Management

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/context-window-management` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Context Window Management Strategies for managing LLM context windows including summarization, trimming, routing, and avoiding context rot

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Prerequisites, Scope, Ecosystem, Patterns, Validation Checks.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: context window
- User mentions or implies: token limit
- User mentions or implies: context management
- User mentions or implies: context engineering
- User mentions or implies: long context
- User mentions or implies: context overflow

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

- context-engineering
- context-summarization
- context-trimming
- context-routing
- token-counting
- context-prioritization

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @context-window-management to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @context-window-management against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @context-window-management for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @context-window-management using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/context-window-management`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@conductor-validator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@confluence-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-marketer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Knowledge: LLM fundamentals, Tokenization basics, Prompt engineering
- Skills_recommended: prompt-engineering

#### Imported: Scope

- Does_not_cover: RAG implementation details, Model fine-tuning, Embedding models
- Boundaries: Focus is context optimization, Covers strategies not specific implementations

#### Imported: Ecosystem

### Primary_tools

- tiktoken - OpenAI's tokenizer for counting tokens
- LangChain - Framework with context management utilities
- Claude API - 200K+ context with caching support

#### Imported: Patterns

### Tiered Context Strategy

Different strategies based on context size

**When to use**: Building any multi-turn conversation system

interface ContextTier {
    maxTokens: number;
    strategy: 'full' | 'summarize' | 'rag';
    model: string;
}

const TIERS: ContextTier[] = [
    { maxTokens: 8000, strategy: 'full', model: 'claude-3-haiku' },
    { maxTokens: 32000, strategy: 'full', model: 'claude-3-5-sonnet' },
    { maxTokens: 100000, strategy: 'summarize', model: 'claude-3-5-sonnet' },
    { maxTokens: Infinity, strategy: 'rag', model: 'claude-3-5-sonnet' }
];

async function selectStrategy(messages: Message[]): ContextTier {
    const tokens = await countTokens(messages);

    for (const tier of TIERS) {
        if (tokens <= tier.maxTokens) {
            return tier;
        }
    }
    return TIERS[TIERS.length - 1];
}

async function prepareContext(messages: Message[]): PreparedContext {
    const tier = await selectStrategy(messages);

    switch (tier.strategy) {
        case 'full':
            return { messages, model: tier.model };

        case 'summarize':
            const summary = await summarizeOldMessages(messages);
            return { messages: [summary, ...recentMessages(messages)], model: tier.model };

        case 'rag':
            const relevant = await retrieveRelevant(messages);
            return { messages: [...relevant, ...recentMessages(messages)], model: tier.model };
    }
}

### Serial Position Optimization

Place important content at start and end

**When to use**: Constructing prompts with significant context

// LLMs weight beginning and end more heavily
// Structure prompts to leverage this

function buildOptimalPrompt(components: {
    systemPrompt: string;
    criticalContext: string;
    conversationHistory: Message[];
    currentQuery: string;
}): string {
    // START: System instructions (always first)
    const parts = [components.systemPrompt];

    // CRITICAL CONTEXT: Right after system (high primacy)
    if (components.criticalContext) {
        parts.push(`## Key Context\n${components.criticalContext}`);
    }

    // MIDDLE: Conversation history (lower weight)
    // Summarize if long, keep recent messages full
    const history = components.conversationHistory;
    if (history.length > 10) {
        const oldSummary = summarize(history.slice(0, -5));
        const recent = history.slice(-5);
        parts.push(`## Earlier Conversation (Summary)\n${oldSummary}`);
        parts.push(`## Recent Messages\n${formatMessages(recent)}`);
    } else {
        parts.push(`## Conversation\n${formatMessages(history)}`);
    }

    // END: Current query (high recency)
    // Restate critical requirements here
    parts.push(`## Current Request\n${components.currentQuery}`);

    // FINAL: Reminder of key constraints
    parts.push(`Remember: ${extractKeyConstraints(components.systemPrompt)}`);

    return parts.join('\n\n');
}

### Intelligent Summarization

Summarize by importance, not just recency

**When to use**: Context exceeds optimal size

interface MessageWithMetadata extends Message {
    importance: number;  // 0-1 score
    hasCriticalInfo: boolean;  // User preferences, decisions
    referenced: boolean;  // Was this referenced later?
}

async function smartSummarize(
    messages: MessageWithMetadata[],
    targetTokens: number
): Message[] {
    // Sort by importance, preserve order for tied scores
    const sorted = [...messages].sort((a, b) =>
        (b.importance + (b.hasCriticalInfo ? 0.5 : 0) + (b.referenced ? 0.3 : 0)) -
        (a.importance + (a.hasCriticalInfo ? 0.5 : 0) + (a.referenced ? 0.3 : 0))
    );

    const keep: Message[] = [];
    const summarizePool: Message[] = [];
    let currentTokens = 0;

    for (const msg of sorted) {
        const msgTokens = await countTokens([msg]);
        if (currentTokens + msgTokens < targetTokens * 0.7) {
            keep.push(msg);
            currentTokens += msgTokens;
        } else {
            summarizePool.push(msg);
        }
    }

    // Summarize the low-importance messages
    if (summarizePool.length > 0) {
        const summary = await llm.complete(`
            Summarize these messages, preserving:
            - Any user preferences or decisions
            - Key facts that might be referenced later
            - The overall flow of conversation

            Messages:
            ${formatMessages(summarizePool)}
        `);

        keep.unshift({ role: 'system', content: `[Earlier context: ${summary}]` });
    }

    // Restore original order
    return keep.sort((a, b) => a.timestamp - b.timestamp);
}

### Token Budget Allocation

Allocate token budget across context components

**When to use**: Need predictable context management

interface TokenBudget {
    system: number;      // System prompt
    criticalContext: number;  // User prefs, key info
    history: number;     // Conversation history
    query: number;       // Current query
    response: number;    // Reserved for response
}

function allocateBudget(totalTokens: number): TokenBudget {
    return {
        system: Math.floor(totalTokens * 0.10),      // 10%
        criticalContext: Math.floor(totalTokens * 0.15),  // 15%
        history: Math.floor(totalTokens * 0.40),     // 40%
        query: Math.floor(totalTokens * 0.10),       // 10%
        response: Math.floor(totalTokens * 0.25),    // 25%
    };
}

async function buildWithBudget(
    components: ContextComponents,
    modelMaxTokens: number
): PreparedContext {
    const budget = allocateBudget(modelMaxTokens);

    // Truncate/summarize each component to fit budget
    const prepared = {
        system: truncateToTokens(components.system, budget.system),
        criticalContext: truncateToTokens(
            components.criticalContext, budget.criticalContext
        ),
        history: await summarizeToTokens(components.history, budget.history),
        query: truncateToTokens(components.query, budget.query),
    };

    // Reallocate unused budget
    const used = await countTokens(Object.values(prepared).join('\n'));
    const remaining = modelMaxTokens - used - budget.response;

    if (remaining > 0) {
        // Give extra to history (most valuable for conversation)
        prepared.history = await summarizeToTokens(
            components.history,
            budget.history + remaining
        );
    }

    return prepared;
}

#### Imported: Validation Checks

### No Token Counting

Severity: WARNING

Message: Building context without token counting. May exceed model limits.

Fix action: Count tokens before sending, implement budget allocation

### Naive Message Truncation

Severity: WARNING

Message: Truncating messages without summarization. Critical context may be lost.

Fix action: Summarize old messages instead of simply removing them

### Hardcoded Token Limit

Severity: INFO

Message: Hardcoded token limit. Consider making configurable per model.

Fix action: Use model-specific limits from configuration

### No Context Management Strategy

Severity: WARNING

Message: LLM calls without context management strategy.

Fix action: Implement context management: budgets, summarization, or RAG

#### Imported: Collaboration

### Delegation Triggers

- retrieval|rag|search -> rag-implementation (Need retrieval system)
- memory|persistence|remember -> conversation-memory (Need memory storage)
- cache|caching -> prompt-caching (Need caching optimization)

### Complete Context System

Skills: context-window-management, rag-implementation, conversation-memory, prompt-caching

Workflow:

```
1. Design context strategy
2. Implement RAG for large corpuses
3. Set up memory persistence
4. Add caching for performance
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: prompt-caching-v3
description: "Prompt Caching workflow skill. Use this skill when the user needs Caching strategies for LLM prompts including Anthropic prompt and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["prompt-caching-v3", "prompt-caching", "caching", "strategies", "for", "llm", "prompts", "including"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Prompt Caching

## Overview

This public intake copy packages `plugins/antigravity-bundle-llm-application-developer/skills/prompt-caching` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Prompt Caching Caching strategies for LLM prompts including Anthropic prompt caching, response caching, and CAG (Cache Augmented Generation)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Prerequisites, Scope, Ecosystem, Patterns, Sharp Edges.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: prompt caching
- User mentions or implies: cache prompt
- User mentions or implies: response cache
- User mentions or implies: cag
- User mentions or implies: cache augmented
- Use when the request clearly matches the imported source intent: Caching strategies for LLM prompts including Anthropic prompt.

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

- prompt-cache
- response-cache
- kv-cache
- cag-patterns
- cache-invalidation

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @prompt-caching-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @prompt-caching-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @prompt-caching-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @prompt-caching-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-llm-application-developer/skills/prompt-caching`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ab-test-setup-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@analytics-tracking-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@app-store-optimization-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator-v4` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- Knowledge: Caching fundamentals, LLM API usage, Hash functions
- Skills_recommended: context-window-management

#### Imported: Scope

- Does_not_cover: CDN caching, Database query caching, Static asset caching
- Boundaries: Focus is LLM-specific caching, Covers prompt and response caching

#### Imported: Ecosystem

### Primary_tools

- Anthropic Prompt Caching - Native prompt caching in Claude API
- Redis - In-memory cache for responses
- OpenAI Caching - Automatic caching in OpenAI API

#### Imported: Patterns

### Anthropic Prompt Caching

Use Claude's native prompt caching for repeated prefixes

**When to use**: Using Claude API with stable system prompts or context

import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic();

// Cache the stable parts of your prompt
async function queryWithCaching(userQuery: string) {
    const response = await client.messages.create({
        model: "claude-sonnet-4-20250514",
        max_tokens: 1024,
        system: [
            {
                type: "text",
                text: LONG_SYSTEM_PROMPT,  // Your detailed instructions
                cache_control: { type: "ephemeral" }  // Cache this!
            },
            {
                type: "text",
                text: KNOWLEDGE_BASE,  // Large static context
                cache_control: { type: "ephemeral" }
            }
        ],
        messages: [
            { role: "user", content: userQuery }  // Dynamic part
        ]
    });

    // Check cache usage
    console.log(`Cache read: ${response.usage.cache_read_input_tokens}`);
    console.log(`Cache write: ${response.usage.cache_creation_input_tokens}`);

    return response;
}

// Cost savings: 90% reduction on cached tokens
// Latency savings: Up to 2x faster

### Response Caching

Cache full LLM responses for identical or similar queries

**When to use**: Same queries asked repeatedly

import { createHash } from 'crypto';
import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

class ResponseCache {
    private ttl = 3600;  // 1 hour default

    // Exact match caching
    async getCached(prompt: string): Promise<string | null> {
        const key = this.hashPrompt(prompt);
        return await redis.get(`response:${key}`);
    }

    async setCached(prompt: string, response: string): Promise<void> {
        const key = this.hashPrompt(prompt);
        await redis.set(`response:${key}`, response, 'EX', this.ttl);
    }

    private hashPrompt(prompt: string): string {
        return createHash('sha256').update(prompt).digest('hex');
    }

    // Semantic similarity caching
    async getSemanticallySimilar(
        prompt: string,
        threshold: number = 0.95
    ): Promise<string | null> {
        const embedding = await embed(prompt);
        const similar = await this.vectorCache.search(embedding, 1);

        if (similar.length && similar[0].similarity > threshold) {
            return await redis.get(`response:${similar[0].id}`);
        }
        return null;
    }

    // Temperature-aware caching
    async getCachedWithParams(
        prompt: string,
        params: { temperature: number; model: string }
    ): Promise<string | null> {
        // Only cache low-temperature responses
        if (params.temperature > 0.5) return null;

        const key = this.hashPrompt(
            `${prompt}|${params.model}|${params.temperature}`
        );
        return await redis.get(`response:${key}`);
    }
}

### Cache Augmented Generation (CAG)

Pre-cache documents in prompt instead of RAG retrieval

**When to use**: Document corpus is stable and fits in context

// CAG: Pre-compute document context, cache in prompt
// Better than RAG when:
// - Documents are stable
// - Total fits in context window
// - Latency is critical

class CAGSystem {
    private cachedContext: string | null = null;
    private lastUpdate: number = 0;

    async buildCachedContext(documents: Document[]): Promise<void> {
        // Pre-process and format documents
        const formatted = documents.map(d =>
            `## ${d.title}\n${d.content}`
        ).join('\n\n');

        // Store with timestamp
        this.cachedContext = formatted;
        this.lastUpdate = Date.now();
    }

    async query(userQuery: string): Promise<string> {
        // Use cached context directly in prompt
        const response = await client.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 1024,
            system: [
                {
                    type: "text",
                    text: "You are a helpful assistant with access to the following documentation.",
                    cache_control: { type: "ephemeral" }
                },
                {
                    type: "text",
                    text: this.cachedContext!,  // Pre-cached docs
                    cache_control: { type: "ephemeral" }
                }
            ],
            messages: [{ role: "user", content: userQuery }]
        });

        return response.content[0].text;
    }

    // Periodic refresh
    async refreshIfNeeded(documents: Document[]): Promise<void> {
        const stale = Date.now() - this.lastUpdate > 3600000;  // 1 hour
        if (stale) {
            await this.buildCachedContext(documents);
        }
    }
}

// CAG vs RAG decision matrix:
// | Factor           | CAG Better | RAG Better |
// |------------------|------------|------------|
// | Corpus size      | < 100K tokens | > 100K tokens |
// | Update frequency | Low | High |
// | Latency needs    | Critical | Flexible |
// | Query specificity| General | Specific |

#### Imported: Sharp Edges

### Cache miss causes latency spike with additional overhead

Severity: HIGH

Situation: Slow response when cache miss, slower than no caching

Symptoms:
- Slow responses on cache miss
- Cache hit rate below 50%
- Higher latency than uncached

Why this breaks:
Cache check adds latency.
Cache write adds more latency.
Miss + overhead > no caching.

Recommended fix:

// Optimize for cache misses, not just hits

class OptimizedCache {
    async queryWithCache(prompt: string): Promise<string> {
        const cacheKey = this.hash(prompt);

        // Non-blocking cache check
        const cachedPromise = this.cache.get(cacheKey);
        const llmPromise = this.queryLLM(prompt);

        // Race: use cache if available before LLM returns
        const cached = await Promise.race([
            cachedPromise,
            sleep(50).then(() => null)  // 50ms cache timeout
        ]);

        if (cached) {
            // Cancel LLM request if possible
            return cached;
        }

        // Cache miss: continue with LLM
        const response = await llmPromise;

        // Async cache write (don't block response)
        this.cache.set(cacheKey, response).catch(console.error);

        return response;
    }
}

// Alternative: Probabilistic caching
// Only cache if query matches known high-frequency patterns
class SelectiveCache {
    private patterns: Map<string, number> = new Map();

    shouldCache(prompt: string): boolean {
        const pattern = this.extractPattern(prompt);
        const frequency = this.patterns.get(pattern) || 0;

        // Only cache high-frequency patterns
        return frequency > 10;
    }

    recordQuery(prompt: string): void {
        const pattern = this.extractPattern(prompt);
        this.patterns.set(pattern, (this.patterns.get(pattern) || 0) + 1);
    }
}

### Cached responses become incorrect over time

Severity: HIGH

Situation: Users get outdated or wrong information from cache

Symptoms:
- Users report wrong information
- Answers don't match current data
- Complaints about outdated responses

Why this breaks:
Source data changed.
No cache invalidation.
Long TTLs for dynamic data.

Recommended fix:

// Implement proper cache invalidation

class InvalidatingCache {
    // Version-based invalidation
    private cacheVersion = 1;

    getCacheKey(prompt: string): string {
        return `v${this.cacheVersion}:${this.hash(prompt)}`;
    }

    invalidateAll(): void {
        this.cacheVersion++;
        // Old keys automatically become orphaned
    }

    // Content-hash invalidation
    async setWithContentHash(
        key: string,
        response: string,
        sourceContent: string
    ): Promise<void> {
        const contentHash = this.hash(sourceContent);
        await this.cache.set(key, {
            response,
            contentHash,
            timestamp: Date.now()
        });
    }

    async getIfValid(
        key: string,
        currentSourceContent: string
    ): Promise<string | null> {
        const cached = await this.cache.get(key);
        if (!cached) return null;

        // Check if source content changed
        const currentHash = this.hash(currentSourceContent);
        if (cached.contentHash !== currentHash) {
            await this.cache.delete(key);
            return null;
        }

        return cached.response;
    }

    // Event-based invalidation
    onSourceUpdate(sourceId: string): void {
        // Invalidate all caches that used this source
        this.invalidateByTag(`source:${sourceId}`);
    }
}

### Prompt caching doesn't work due to prefix changes

Severity: MEDIUM

Situation: Cache misses despite similar prompts

Symptoms:
- Cache hit rate lower than expected
- Cache creation tokens high, read low
- Similar prompts not hitting cache

Why this breaks:
Anthropic caching requires exact prefix match.
Timestamps or dynamic content in prefix.
Different message order.

Recommended fix:

// Structure prompts for optimal caching

class CacheOptimizedPrompts {
    // WRONG: Dynamic content in cached prefix
    buildPromptBad(query: string): SystemMessage[] {
        return [
            {
                type: "text",
                text: `You are helpful. Current time: ${new Date()}`,  // BREAKS CACHE!
                cache_control: { type: "ephemeral" }
            }
        ];
    }

    // RIGHT: Static prefix, dynamic at end
    buildPromptGood(query: string): SystemMessage[] {
        return [
            {
                type: "text",
                text: STATIC_SYSTEM_PROMPT,  // Never changes
                cache_control: { type: "ephemeral" }
            },
            {
                type: "text",
                text: STATIC_KNOWLEDGE_BASE,  // Rarely changes
                cache_control: { type: "ephemeral" }
            }
            // Dynamic content goes in messages, NOT system
        ];
    }

    // Prefix ordering matters
    buildWithConsistentOrder(components: string[]): SystemMessage[] {
        // Sort components for consistent ordering
        const sorted = [...components].sort();
        return sorted.map((c, i) => ({
            type: "text",
            text: c,
            cache_control: i === sorted.length - 1
                ? { type: "ephemeral" }
                : undefined  // Only cache the full prefix
        }));
    }
}

#### Imported: Validation Checks

### Caching High Temperature Responses

Severity: WARNING

Message: Caching with high temperature. Responses are non-deterministic.

Fix action: Only cache responses with temperature <= 0.5

### Cache Without TTL

Severity: WARNING

Message: Cache without TTL. May serve stale data indefinitely.

Fix action: Set appropriate TTL based on data freshness requirements

### Dynamic Content in Cached Prefix

Severity: WARNING

Message: Dynamic content in cached prefix. Will cause cache misses.

Fix action: Move dynamic content outside of cache_control blocks

### No Cache Metrics

Severity: INFO

Message: Cache without hit/miss tracking. Can't measure effectiveness.

Fix action: Add cache hit/miss metrics and logging

#### Imported: Collaboration

### Delegation Triggers

- context window|token -> context-window-management (Need context optimization)
- rag|retrieval -> rag-implementation (Need retrieval system)
- memory -> conversation-memory (Need memory persistence)

### High-Performance LLM System

Skills: prompt-caching, context-window-management, rag-implementation

Workflow:

```
1. Analyze query patterns
2. Implement prompt caching for stable prefixes
3. Add response caching for frequent queries
4. Consider CAG for stable document sets
5. Monitor and optimize hit rates
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

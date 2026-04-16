---
name: rag-implementation
description: "RAG Implementation Workflow workflow skill. Use this skill when the user needs RAG (Retrieval-Augmented Generation) implementation workflow covering embedding selection, vector database setup, chunking strategies, and retrieval optimization and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["rag-implementation", "rag", "retrieval-augmented", "generation", "implementation", "covering", "embedding", "selection"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# RAG Implementation Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/rag-implementation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# RAG Implementation Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: RAG Architecture, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building RAG-powered applications
- Implementing semantic search
- Creating knowledge-grounded AI
- Setting up document Q&A systems
- Optimizing retrieval quality
- Use when the request clearly matches the imported source intent: RAG (Retrieval-Augmented Generation) implementation workflow covering embedding selection, vector database setup, chunking strategies, and retrieval optimization.

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

1. ai-product - AI product design
2. rag-engineer - RAG engineering
3. Define use case
4. Identify data sources
5. Set accuracy requirements
6. Determine latency targets
7. Plan evaluation metrics

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Requirements Analysis

#### Skills to Invoke
- `ai-product` - AI product design
- `rag-engineer` - RAG engineering

#### Actions
1. Define use case
2. Identify data sources
3. Set accuracy requirements
4. Determine latency targets
5. Plan evaluation metrics

#### Copy-Paste Prompts
```
Use @ai-product to define RAG application requirements
```

### Phase 2: Embedding Selection

#### Skills to Invoke
- `embedding-strategies` - Embedding selection
- `rag-engineer` - RAG patterns

#### Actions
1. Evaluate embedding models
2. Test domain relevance
3. Measure embedding quality
4. Consider cost/latency
5. Select model

#### Copy-Paste Prompts
```
Use @embedding-strategies to select optimal embedding model
```

### Phase 3: Vector Database Setup

#### Skills to Invoke
- `vector-database-engineer` - Vector DB
- `similarity-search-patterns` - Similarity search

#### Actions
1. Choose vector database
2. Design schema
3. Configure indexes
4. Set up connection
5. Test queries

#### Copy-Paste Prompts
```
Use @vector-database-engineer to set up vector database
```

### Phase 4: Chunking Strategy

#### Skills to Invoke
- `rag-engineer` - Chunking strategies
- `rag-implementation` - RAG implementation

#### Actions
1. Choose chunk size
2. Implement chunking
3. Add overlap handling
4. Create metadata
5. Test retrieval quality

#### Copy-Paste Prompts
```
Use @rag-engineer to implement chunking strategy
```

### Phase 5: Retrieval Implementation

#### Skills to Invoke
- `similarity-search-patterns` - Similarity search
- `hybrid-search-implementation` - Hybrid search

#### Actions
1. Implement vector search
2. Add keyword search
3. Configure hybrid search
4. Set up reranking
5. Optimize latency

#### Copy-Paste Prompts
```
Use @similarity-search-patterns to implement retrieval
```

```
Use @hybrid-search-implementation to add hybrid search
```

### Phase 6: LLM Integration

#### Skills to Invoke
- `llm-application-dev-ai-assistant` - LLM integration
- `llm-application-dev-prompt-optimize` - Prompt optimization

#### Actions
1. Select LLM provider
2. Design prompt template
3. Implement context injection
4. Add citation handling
5. Test generation quality

#### Copy-Paste Prompts
```
Use @llm-application-dev-ai-assistant to integrate LLM
```

### Phase 7: Caching

#### Skills to Invoke
- `prompt-caching` - Prompt caching
- `rag-engineer` - RAG optimization

#### Actions
1. Implement response caching
2. Set up embedding cache
3. Configure TTL
4. Add cache invalidation
5. Monitor hit rates

#### Copy-Paste Prompts
```
Use @prompt-caching to implement RAG caching
```

### Phase 8: Evaluation

#### Skills to Invoke
- `llm-evaluation` - LLM evaluation
- `evaluation` - AI evaluation

#### Actions
1. Define evaluation metrics
2. Create test dataset
3. Measure retrieval accuracy
4. Evaluate generation quality
5. Iterate on improvements

#### Copy-Paste Prompts
```
Use @llm-evaluation to evaluate RAG system
```

#### Imported: Related Workflow Bundles

- `ai-ml` - AI/ML development
- `ai-agent-development` - AI agents
- `database` - Vector databases

#### Imported: Overview

Specialized workflow for implementing RAG (Retrieval-Augmented Generation) systems including embedding model selection, vector database setup, chunking strategies, retrieval optimization, and evaluation.

#### Imported: RAG Architecture

```
User Query -> Embedding -> Vector Search -> Retrieved Docs -> LLM -> Response
                |              |              |              |
            Model         Vector DB     Chunk Store    Prompt + Context
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @rag-implementation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @rag-implementation against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @rag-implementation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @rag-implementation using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/rag-implementation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@puzzle-activity-planner` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pydantic-ai` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pydantic-models-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pypict-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- [ ] Embedding model selected
- [ ] Vector DB configured
- [ ] Chunking implemented
- [ ] Retrieval working
- [ ] LLM integrated
- [ ] Evaluation passing

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

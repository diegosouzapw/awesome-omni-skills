---
name: memory-systems-v2
description: "Memory System Design workflow skill. Use this skill when the user needs Design short-term, long-term, and graph-based memory architectures. Use when building agents that must persist across sessions, needing to maintain entity consistency across conversations, or implementing reasoning over accumulated knowledge and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["memory-systems-v2", "memory-systems", "design", "short-term", "long-term", "and", "graph-based", "memory"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Memory System Design

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/memory-systems` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Detailed Topics, Practical Guidance, Integration, Skill Metadata.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building agents that must persist across sessions
- Needing to maintain entity consistency across conversations
- Implementing reasoning over accumulated knowledge
- Designing systems that learn from past interactions
- Creating knowledge bases that grow over time
- Building temporal-aware systems that track state changes

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

Memory exists on a spectrum from immediate context to permanent storage. At one extreme, working memory in the context window provides zero-latency access but vanishes when sessions end. At the other extreme, permanent storage persists indefinitely but requires retrieval to enter context.

Simple vector stores lack relationship and temporal structure. Knowledge graphs preserve relationships for reasoning. Temporal knowledge graphs add validity periods for time-aware queries. Implementation choices depend on query complexity, infrastructure constraints, and accuracy requirements.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @memory-systems-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/memory-systems-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/memory-systems-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @memory-systems-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

**Example 1: Entity Tracking**
```python
# Track entity across conversations
def remember_entity(entity_id, properties):
    memory.store({
        "type": "entity",
        "id": entity_id,
        "properties": properties,
        "last_updated": now()
    })

def get_entity(entity_id):
    return memory.retrieve_entity(entity_id)
```

**Example 2: Temporal Query**
```python
# What was the user's address on January 15, 2024?
def query_address_at_time(user_id, query_time):
    return temporal_graph.query("""
        MATCH (user)-[r:LIVES_AT]->(address)
        WHERE user.id = $user_id
        AND r.valid_from <= $query_time
        AND (r.valid_until IS NULL OR r.valid_until > $query_time)
        RETURN address
    """, {"user_id": user_id, "query_time": query_time})
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Match memory architecture to query requirements
- Implement progressive disclosure for memory access
- Use temporal validity to prevent outdated information conflicts
- Consolidate memories periodically to prevent unbounded growth
- Design for memory retrieval failures gracefully
- Consider privacy implications of persistent memory
- Implement backup and recovery for critical memories

### Imported Operating Notes

#### Imported: Guidelines

1. Match memory architecture to query requirements
2. Implement progressive disclosure for memory access
3. Use temporal validity to prevent outdated information conflicts
4. Consolidate memories periodically to prevent unbounded growth
5. Design for memory retrieval failures gracefully
6. Consider privacy implications of persistent memory
7. Implement backup and recovery for critical memories
8. Monitor memory growth and performance over time

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/memory-systems`, fails to mention provenance, or does not use the support pack at all.
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
- Implementation Reference - Detailed implementation patterns

Related skills in this collection:
- context-fundamentals - Context basics
- multi-agent-patterns - Cross-agent memory

External resources:
- Graph database documentation (Neo4j, etc.)
- Vector store documentation (Pinecone, Weaviate, etc.)
- Research on knowledge graphs and reasoning

---

#### Imported: Detailed Topics

### Memory Architecture Fundamentals

**The Context-Memory Spectrum**
Memory exists on a spectrum from immediate context to permanent storage. At one extreme, working memory in the context window provides zero-latency access but vanishes when sessions end. At the other extreme, permanent storage persists indefinitely but requires retrieval to enter context. Effective architectures use multiple layers along this spectrum.

The spectrum includes working memory (context window, zero latency, volatile), short-term memory (session-persistent, searchable, volatile), long-term memory (cross-session persistent, structured, semi-permanent), and permanent memory (archival, queryable, permanent). Each layer has different latency, capacity, and persistence characteristics.

**Why Simple Vector Stores Fall Short**
Vector RAG provides semantic retrieval by embedding queries and documents in a shared embedding space. Similarity search retrieves the most semantically similar documents. This works well for document retrieval but lacks structure for agent memory.

Vector stores lose relationship information. If an agent learns that "Customer X purchased Product Y on Date Z," a vector store can retrieve this fact if asked directly. But it cannot answer "What products did customers who purchased Product Y also buy?" because relationship structure is not preserved.

Vector stores also struggle with temporal validity. Facts change over time, but vector stores provide no mechanism to distinguish "current fact" from "outdated fact" except through explicit metadata and filtering.

**The Move to Graph-Based Memory**
Knowledge graphs preserve relationships between entities. Instead of isolated document chunks, graphs encode that Entity A has Relationship R to Entity B. This enables queries that traverse relationships rather than just similarity.

Temporal knowledge graphs add validity periods to facts. Each fact has a "valid from" and optionally "valid until" timestamp. This enables time-travel queries that reconstruct knowledge at specific points in time.

**Benchmark Performance Comparison**
The Deep Memory Retrieval (DMR) benchmark provides concrete performance data across memory architectures:

| Memory System | DMR Accuracy | Retrieval Latency | Notes |
|---------------|--------------|-------------------|-------|
| Zep (Temporal KG) | 94.8% | 2.58s | Best accuracy, fast retrieval |
| MemGPT | 93.4% | Variable | Good general performance |
| GraphRAG | ~75-85% | Variable | 20-35% gains over baseline RAG |
| Vector RAG | ~60-70% | Fast | Loses relationship structure |
| Recursive Summarization | 35.3% | Low | Severe information loss |

Zep demonstrated 90% reduction in retrieval latency compared to full-context baselines (2.58s vs 28.9s for GPT-5.2). This efficiency comes from retrieving only relevant subgraphs rather than entire context history.

GraphRAG achieves approximately 20-35% accuracy gains over baseline RAG in complex reasoning tasks and reduces hallucination by up to 30% through community-based summarization.

### Memory Layer Architecture

**Layer 1: Working Memory**
Working memory is the context window itself. It provides immediate access to information currently being processed but has limited capacity and vanishes when sessions end.

Working memory usage patterns include scratchpad calculations where agents track intermediate results, conversation history that preserves dialogue for current task, current task state that tracks progress on active objectives, and active retrieved documents that hold information currently being used.

Optimize working memory by keeping only active information, summarizing completed work before it falls out of attention, and using attention-favored positions for critical information.

**Layer 2: Short-Term Memory**
Short-term memory persists across the current session but not across sessions. It provides search and retrieval capabilities without the latency of permanent storage.

Common implementations include session-scoped databases that persist until session end, file-system storage in designated session directories, and in-memory caches keyed by session ID.

Short-term memory use cases include tracking conversation state across turns without stuffing context, storing intermediate results from tool calls that may be needed later, maintaining task checklists and progress tracking, and caching retrieved information within sessions.

**Layer 3: Long-Term Memory**
Long-term memory persists across sessions indefinitely. It enables agents to learn from past interactions and build knowledge over time.

Long-term memory implementations range from simple key-value stores to sophisticated graph databases. The choice depends on complexity of relationships to model, query patterns required, and acceptable infrastructure complexity.

Long-term memory use cases include learning user preferences across sessions, building domain knowledge bases that grow over time, maintaining entity registries with relationship history, and storing successful patterns that can be reused.

**Layer 4: Entity Memory**
Entity memory specifically tracks information about entities (people, places, concepts, objects) to maintain consistency. This creates a rudimentary knowledge graph where entities are recognized across multiple interactions.

Entity memory maintains entity identity by tracking that "John Doe" mentioned in one conversation is the same person in another. It maintains entity properties by storing facts discovered about entities over time. It maintains entity relationships by tracking relationships between entities as they are discovered.

**Layer 5: Temporal Knowledge Graphs**
Temporal knowledge graphs extend entity memory with explicit validity periods. Facts are not just true or false but true during specific time ranges.

This enables queries like "What was the user's address on Date X?" by retrieving facts valid during that date range. It prevents context clash when outdated information contradicts new data. It enables temporal reasoning about how entities changed over time.

### Memory Implementation Patterns

**Pattern 1: File-System-as-Memory**
The file system itself can serve as a memory layer. This pattern is simple, requires no additional infrastructure, and enables the same just-in-time loading that makes file-system-based context effective.

Implementation uses the file system hierarchy for organization. Use naming conventions that convey meaning. Store facts in structured formats (JSON, YAML). Use timestamps in filenames or metadata for temporal tracking.

Advantages: Simplicity, transparency, portability.
Disadvantages: No semantic search, no relationship tracking, manual organization required.

**Pattern 2: Vector RAG with Metadata**
Vector stores enhanced with rich metadata provide semantic search with filtering capabilities.

Implementation embeds facts or documents and stores with metadata including entity tags, temporal validity, source attribution, and confidence scores. Query includes metadata filters alongside semantic search.

**Pattern 3: Knowledge Graph**
Knowledge graphs explicitly model entities and relationships. Implementation defines entity types and relationship types, uses graph database or property graph storage, and maintains indexes for common query patterns.

**Pattern 4: Temporal Knowledge Graph**
Temporal knowledge graphs add validity periods to facts, enabling time-travel queries and preventing context clash from outdated information.

### Memory Retrieval Patterns

**Semantic Retrieval**
Retrieve memories semantically similar to current query using embedding similarity search.

**Entity-Based Retrieval**
Retrieve all memories related to specific entities by traversing graph relationships.

**Temporal Retrieval**
Retrieve memories valid at specific time or within time range using validity period filters.

### Memory Consolidation

Memories accumulate over time and require consolidation to prevent unbounded growth and remove outdated information.

**Consolidation Triggers**
Trigger consolidation after significant memory accumulation, when retrieval returns too many outdated results, periodically on a schedule, or when explicit consolidation is requested.

**Consolidation Process**
Identify outdated facts, merge related facts, update validity periods, archive or delete obsolete facts, and rebuild indexes.

#### Imported: Practical Guidance

### Integration with Context

Memories must integrate with context systems to be useful. Use just-in-time memory loading to retrieve relevant memories when needed. Use strategic injection to place memories in attention-favored positions.

### Memory System Selection

Choose memory architecture based on requirements:
- Simple persistence needs: File-system memory
- Semantic search needs: Vector RAG with metadata
- Relationship reasoning needs: Knowledge graph
- Temporal validity needs: Temporal knowledge graph

#### Imported: Integration

This skill builds on context-fundamentals. It connects to:

- multi-agent-patterns - Shared memory across agents
- context-optimization - Memory-based context loading
- evaluation - Evaluating memory quality

#### Imported: Skill Metadata

**Created**: 2025-12-20
**Last Updated**: 2025-12-20
**Author**: Agent Skills for Context Engineering Contributors
**Version**: 1.0.0

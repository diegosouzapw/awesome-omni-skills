---
name: "rag-engineer"
description: "RAG workflow skill. Use this skill when a user needs retrieval pipelines, chunking, ranking, citations, and evaluation for an AI application."
version: "0.0.1"
category: "ai-agents"
tags:
  - "rag"
  - "retrieval"
  - "embeddings"
  - "evaluation"
  - "citations"
  - "indexing"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "rag-engineer"
family_name: "RAG Engineer"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/rag-engineer"
upstream_skill: "skills/rag-engineer"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "rag-engineer"
---

# RAG Engineer

## Overview

Use this skill when the user needs a Retrieval-Augmented Generation workflow that is measurable, debuggable, and grounded in evidence.

This skill is for designing or improving:
- corpus preparation and ingestion
- chunking and metadata strategy
- embedding and indexing choices
- semantic, keyword, or hybrid retrieval
- reranking and context assembly
- citation and provenance behavior
- retrieval evaluation and troubleshooting

The operating principle is simple: **fix retrieval before tuning generation**. If the right evidence is not found, ranked, filtered, and assembled correctly, prompt changes will mostly mask the problem.

Use the companion files when needed:
- `references/domain-notes.md` for chunking decisions, hybrid retrieval rules, metrics, and failure lookup
- `examples/worked-example.md` for a concrete end-to-end RAG tuning example

## When to Use This Skill

Use this skill when:
- the user is building or repairing a knowledge-grounded assistant, search-backed chat system, or internal question-answering workflow
- the user needs help with embeddings, vector search, chunking, indexing, hybrid retrieval, reranking, or citations
- the user needs a retrieval eval plan instead of prompt-only iteration
- the corpus contains documents where provenance, freshness, filtering, or permissions matter
- the system must explain which retrieved evidence supports an answer

Do **not** use this skill by itself when:
- the task is mainly model fine-tuning without a retrieval component
- the task is generic web search UX rather than document-grounded retrieval engineering
- document permissions, tenant boundaries, or provenance cannot be enforced
- the user only wants a one-off prompt and there is no retrieval pipeline to design or debug

## Operating Table

| Situation | Start here | Why it matters | Minimum acceptable outcome |
| --- | --- | --- | --- |
| New RAG system | Define corpus slices, users, and query classes | Prevents building retrieval with no target behavior | Named corpus scope and at least 3 realistic query classes |
| Existing system gives weak answers | Check retrieval metrics before prompts | Bad retrieval often looks like bad generation | A small eval set with expected supporting passages |
| Chunking design | Use `references/domain-notes.md` chunking matrix | Chunking should follow document structure and query behavior | Chunks preserve boundaries and carry useful metadata |
| Identifier-heavy corpus | Test hybrid retrieval, not semantic-only | Error codes, version strings, SKUs, and policy numbers are easy to miss semantically | Keyword or metadata path validated on identifier queries |
| Security-sensitive corpus | Design ACL and tenant filtering first | Retrieval can leak data even if generation is safe | Authorization filters applied before or during retrieval |
| Production tuning | Set stage budgets for retrieve, rerank, assemble, answer | Latency and cost failures often come from over-retrieving | Budget recorded per stage with at least one trimming plan |
| Debugging failures | Use troubleshooting section plus `references/domain-notes.md` | Fast diagnosis depends on mapping symptoms to pipeline stages | A suspected failure mode tied to evidence from logs or evals |
| Team handoff | Record corpus version, metadata schema, eval set, and known limits | Makes retrieval behavior reproducible | Another operator can rerun the same checks |

## Workflow

### 1. Define the retrieval job before selecting tools

Document:
- what corpus or corpora are in scope
- who is allowed to retrieve which data
- what query classes matter most
- what a good retrieval result looks like
- what downstream answer behavior is required

At minimum, identify query classes such as:
- factual lookup
- semantic paraphrase
- identifier lookup
- policy or compliance lookup
- recent or freshness-sensitive lookup
- multi-hop or comparison queries

Do not start with embedding model or vector database debates. Start with expected retrieval behavior.

### 2. Build a small retrieval eval set first

Before tuning chunk size, prompts, or ranking:
- collect representative queries
- record the expected supporting document or passage for each
- separate retrieval success from answer quality
- keep the set small but realistic so it can be rerun often

Useful eval artifacts:
- query text
- query class
- expected document IDs or passage IDs
- any required metadata filters
- notes on ambiguity or acceptable alternatives

If the team cannot agree on expected evidence for a query, the requirement is probably underspecified.

### 3. Define the ingestion contract

Specify how documents become retrievable records:
- normalization rules
- deduplication rules
- document identifiers
- section extraction rules
- freshness fields
- ACL or tenant metadata
- source URL, file path, title, timestamp, version, and provenance fields

Good ingestion contracts make debugging possible later. Every chunk should be traceable back to a source document and section.

### 4. Choose chunking based on content structure and queries

Chunk by document-aware boundaries where possible, not by arbitrary length alone.

Preserve metadata that supports retrieval and citations:
- document ID
- section heading or path
- timestamp or effective date
- source type
- ACL or tenant tags
- version or freshness markers

Use `references/domain-notes.md` for a content-type chunking matrix and common failure patterns.

Avoid assuming one universal chunk size, overlap, or top-k value. Treat these as testable starting points, not truths.

### 5. Choose retrieval strategy for the corpus

Select retrieval behavior that matches the corpus:
- semantic retrieval for concept-heavy natural language content
- keyword or lexical retrieval for identifiers, exact phrases, version strings, and error codes
- metadata filtering for access control, tenant isolation, time ranges, product families, or content type
- hybrid retrieval when both semantic similarity and exact matching matter
- reranking when first-pass retrieval has adequate recall but poor ordering

A practical default is to test:
1. semantic-only
2. keyword-only or lexical fallback for exact terms
3. hybrid retrieval
4. hybrid plus reranking if latency and cost allow

### 6. Instrument the pipeline

Make the system observable enough to answer:
- which chunks were retrieved
- with what scores or rank positions
- under which filters
- from which corpus version
- which chunks were passed to the model
- which citations appeared in the answer

Log safely. Do not leak restricted content in debug traces. If needed, log chunk IDs and metadata instead of full text.

### 7. Evaluate retrieval separately from answer generation

Run retrieval checks before changing prompts.

For each query, ask:
- Was the relevant document retrieved at all?
- Was it retrieved high enough to survive truncation or reranking?
- Did filters wrongly exclude it?
- Did duplicate or near-duplicate chunks crowd out diversity?
- Did context assembly omit the best evidence?

Then evaluate answer behavior separately:
- correct use of retrieved evidence
- citation correctness
- abstention when evidence is weak
- handling of ambiguity or missing context

Do not blur retrieval failure with answer synthesis failure.

### 8. Tune in the right order

Preferred tuning order:
1. corpus scope and data quality
2. ingestion and deduplication
3. metadata schema and filters
4. chunking strategy
5. retrieval method
6. reranking
7. context assembly
8. answer prompt and response policy

This order prevents prompt work from hiding broken retrieval.

### 9. Budget latency and cost by stage

Track major stages such as:
- ingest and embedding generation
- first-pass retrieval
- reranking
- context assembly
- final answer generation

If the system is slow or expensive, trim in this order first:
- remove unnecessary retrieved candidates
- improve filtering before increasing top-k
- reduce duplicated or low-value context
- rerank fewer but better candidates
- shorten context payloads before weakening grounding requirements

### 10. Define production acceptance criteria

A RAG system is ready for wider use only when it has:
- a versioned eval set
- retrieval metrics on representative query classes
- a documented metadata schema
- source traceability and citation behavior
- ACL or tenant controls where needed
- a known refresh or reindex policy
- a troubleshooting path for common failures

## Troubleshooting

### Symptom: The answer sounds fluent but cites weak or irrelevant evidence

Check:
- whether the expected passage appears in retrieved results at all
- whether low-quality chunks outrank better ones
- whether context packing includes too many marginal chunks
- whether prompt instructions are causing overconfident synthesis

Likely fixes:
- improve retrieval recall first
- tighten chunk boundaries
- add reranking
- reduce noisy context
- require the system to narrow claims when evidence is weak

### Symptom: Exact identifiers are missed

Common causes:
- semantic-only retrieval on identifier-heavy data
- normalization that strips meaningful tokens
- missing lexical path
- poor metadata filtering

Likely fixes:
- add keyword or hybrid retrieval
- preserve exact identifiers in chunks and metadata
- test identifier queries as their own eval class

### Symptom: Relevant documents are found, but wrong sections are used

Common causes:
- chunks too large or too mixed
- sections not preserved during ingestion
- reranker or context assembly preferring broad summaries

Likely fixes:
- chunk on section boundaries
- retain headings and local path metadata
- rerank for passage relevance, not only document relevance

### Symptom: Retrieval returns many near-duplicates

Common causes:
- duplicated source documents
- overlapping chunks dominating top results
- repeated boilerplate text

Likely fixes:
- deduplicate during ingestion
- collapse near-duplicate neighbors in ranking
- downweight boilerplate-heavy chunks

### Symptom: Good retrieval offline, poor answers online

Common causes:
- online filters differ from eval conditions
- context truncation removes the best evidence
- answer stage ignores or misuses evidence
- stale index or stale metadata in production

Likely fixes:
- compare offline and online traces
- verify final packed context
- check citation-to-source mapping
- confirm refresh and reindex behavior

### Symptom: Cross-tenant or restricted content leakage risk

Common causes:
- filters applied after retrieval instead of before or during it
- missing ACL metadata at chunk level
- unsafe logs that expose retrieved text

Likely fixes:
- enforce authorization in retrieval
- carry ACL metadata into every chunk
- sanitize traces and debug output

### Symptom: The system is slow or too expensive

Common causes:
- over-retrieval
- expensive reranking depth
- oversized context assembly
- unnecessary second-pass calls

Likely fixes:
- reduce candidate count with better filtering
- rerank only where recall already looks acceptable
- pass fewer, better chunks to the model
- set explicit per-stage budgets

For a more detailed symptom-to-fix matrix, use `references/domain-notes.md`.

## Examples

Open `examples/worked-example.md` for a concrete mini-corpus showing:
- corpus preparation
- metadata fields
- document-aware chunking
- retrieval eval queries
- expected retrieval behavior
- failure analysis
- before/after tuning decisions

## Additional Resources

- OpenAI Embeddings guide: https://platform.openai.com/docs/guides/embeddings
- OpenAI Evals guide: https://platform.openai.com/docs/guides/evals
- OpenAI Latency optimization guide: https://platform.openai.com/docs/guides/latency-optimization
- OpenAI Building agents track: https://developers.openai.com/tracks/building-agents/
- OpenAI Responses guide: https://platform.openai.com/docs/guides/responses
- pgvector project documentation: https://github.com/pgvector/pgvector

## Related Skills

Consider a different or additional skill when the center of gravity changes:
- use a database or search-infrastructure skill when the main work is storage engine administration or production database operations
- use an eval-focused skill when the main task is dataset design, scoring, and regression automation across many systems
- use an application security skill when the main issue is data isolation, authorization architecture, or compliance review beyond retrieval boundaries

## Execution Notes

During execution, keep outputs concrete:
- name the corpus scope
- list the metadata fields
- describe the retrieval path
- identify the eval queries used
- state what changed and why
- distinguish retrieval fixes from answer-generation fixes

A strong final answer from this skill should leave the operator with a retrieval plan that can be tested, traced, and improved without guesswork.

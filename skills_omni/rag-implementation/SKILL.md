---
name: "rag-implementation"
description: "RAG Implementation Workflow workflow skill. Use this skill when the user needs RAG (Retrieval-Augmented Generation) implementation workflow covering embedding selection, vector database setup, chunking strategies, retrieval optimization, and practical evaluation of retrieval quality before prompt tuning or handoff."
version: "0.0.1"
category: "ai-agents"
tags:
  - "rag-implementation"
  - "rag"
  - "retrieval-augmented"
  - "generation"
  - "implementation"
  - "embedding"
  - "chunking"
  - "retrieval"
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
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "rag-implementation"
family_name: "RAG Implementation Workflow"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/rag-implementation"
upstream_skill: "skills/rag-implementation"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "rag-implementation"
---

# RAG Implementation Workflow

## Overview

This skill curates the upstream `rag-implementation` workflow into an execution-focused guide for designing, reviewing, and troubleshooting Retrieval-Augmented Generation systems.

Use it when the task is not just “add a vector database,” but to make concrete decisions about:

- whether RAG is the right solution at all
- whether managed file search is sufficient or custom indexing is required
- how to chunk, enrich, and index documents safely
- how to choose dense, lexical, hybrid, and filtered retrieval patterns
- how to evaluate retrieval quality separately from generation quality
- how to debug failures such as missed passages, stale citations, duplicate chunks, and weak grounding

Preserve the upstream intent: this remains a practical implementation workflow covering embedding selection, vector storage, chunking, and retrieval optimization. The enhancement adds stronger activation boundaries, clearer quality gates, and more operational troubleshooting.

## When to Use This Skill

Use this skill when one or more of these are true:

- The system must answer from external documents rather than model memory.
- The source corpus changes often enough that prompt-only approaches become stale.
- The user requires citations, provenance, or document-grounded answers.
- The corpus is large enough that manual prompt stuffing is not realistic.
- Retrieval quality, filtering, freshness, or tenant isolation are part of the implementation scope.
- The team needs to compare managed retrieval with a custom vector pipeline.

Do **not** default to this skill when:

- The knowledge is small, static, and can fit directly in a prompt.
- The task is mainly style adaptation or behavior shaping rather than external knowledge access.
- There is no searchable corpus yet.
- Latency or complexity budgets do not allow retrieval, indexing, and evaluation overhead.
- A deterministic search/index system already exists and only answer formatting is needed.

### Fast routing

| If the situation is... | Prefer... |
| --- | --- |
| Small static instructions, no corpus, no citations needed | Prompt-only solution |
| File-grounded Q&A with limited customization needs | Managed file search |
| Tenant-aware retrieval, custom ranking, custom ingestion, or compliance constraints | Custom RAG pipeline |
| Knowledge is stable but behavior needs adaptation | Fine-tuning or task-specific prompting |

## Operating Table

| Decision area | What to inspect | Practical guidance |
| --- | --- | --- |
| RAG vs alternatives | Corpus size, freshness, citation need, latency budget | If freshness and provenance matter, RAG is usually justified. If not, first test prompt-only or managed retrieval. |
| Managed retrieval vs custom pipeline | ACL needs, custom chunking, reranking, observability, compliance | Use managed retrieval for speed. Choose custom indexing when you need tenant isolation, custom metadata filters, custom ranking, or strict ingestion control. |
| Chunking strategy | Document type, section boundaries, tables, code blocks, FAQs, policy text | Preserve semantic units first. Avoid one fixed chunk size for every corpus. Store structural metadata with every chunk. |
| Retrieval mode | Query type, corpus language, identifiers, jargon, versioned content | Dense retrieval is not always enough. Prefer hybrid or filtered retrieval for SKU-like terms, versions, legal text, or keyword-heavy corpora. |
| Embedding/index choice | Corpus scale, latency, operational maturity, filter complexity | Choose based on workload tradeoffs, not fashion. Index choice affects recall, cost, reindex behavior, and debugging. |
| Evaluation | Gold queries, expected passages, citation correctness, abstention behavior | Evaluate retrieval first, then generation. A fluent answer does not prove the right chunks were retrieved. |
| Safety | Provenance, ACL metadata, prompt injection exposure, stale content | Treat retrieval as a trust boundary. Restrict scope, keep citations, and abstain when evidence is weak or conflicting. |

For compact decision support, use:

- `references/rag-decision-matrix.md`
- `examples/rag-evaluation-example.md`

## Workflow

### Phase 1: Requirements and activation check

**Inputs**
- user task
- target corpus or planned corpus
- answer quality expectations
- latency, cost, and compliance constraints

**Actions**
- Confirm whether RAG is actually needed.
- Identify whether freshness, provenance, or grounded answers are required.
- Define what the system must return: answer only, answer plus citations, or structured diagnostics.
- Decide whether managed file search can satisfy the use case before proposing a custom stack.

**Outputs**
- a clear activation decision
- initial architecture direction: prompt-only, managed retrieval, or custom RAG
- explicit success criteria

**Exit criteria**
- The team can state why RAG is required.
- The team knows what counts as a correct answer and what evidence must accompany it.

### Phase 2: Corpus preparation

**Inputs**
- source documents
- update cadence
- ownership and access rules

**Actions**
- inventory source types: policies, manuals, tickets, code, FAQs, tables, transcripts, product docs
- remove duplicate or superseded content where possible
- normalize encoding and extraction quality
- assign metadata needed later for filtering and auditability

**Recommended metadata per chunk**
- source URI or document id
- title or section label
- version or effective date
- ingestion timestamp
- language
- tenant, team, or ACL scope where applicable
- document type
- parent section lineage

**Outputs**
- clean corpus ready for chunking and indexing
- metadata schema for retrieval and security controls

**Exit criteria**
- Operators can trace any chunk back to its source.
- Access-control and freshness metadata exist before indexing.

### Phase 3: Chunking and enrichment

**Inputs**
- normalized documents
- document-type inventory

**Actions**
- chunk by semantic boundaries first: headings, sections, paragraphs, FAQ items, code units, table neighborhoods
- use overlap only where it preserves context across boundaries
- keep surrounding structural cues that help retrieval and citation
- test different chunking strategies on real questions instead of adopting universal token defaults

**Document-specific heuristics**
- **Policies / legal / compliance text:** preserve clause and section boundaries; attach effective date and policy id.
- **Technical docs:** keep headings, version tags, API names, and nearby examples together.
- **Code or config docs:** chunk by function, class, command, or config block; avoid splitting syntax from explanation.
- **FAQs / support articles:** one question-answer pair per chunk is often clearer than broad paragraph chunks.
- **Tables:** keep the caption, header row meaning, and nearby explanatory text with extracted values where possible.

**Outputs**
- chunked corpus with structural metadata

**Exit criteria**
- A reviewer can inspect a chunk and still understand what document section it came from.
- Chunk boundaries do not destroy the meaning needed for retrieval.

### Phase 4: Embedding and index design

**Inputs**
- chunked corpus
- query patterns
- scale and latency targets

**Actions**
- choose embedding approach appropriate to corpus and query language
- choose storage/index approach based on workload, not vendor preference
- decide whether metadata filtering, hybrid retrieval, reranking, or database-native indexing are required
- document re-embedding and reindex triggers before launch

**Common decision factors**
- corpus size and growth rate
- latency target
- lexical search importance for identifiers and exact terms
- need for metadata filters and ACL enforcement
- operational tolerance for running a separate search service
- observability and debugging needs

**Reindex or re-embed when**
- the chunk schema changes
- key metadata fields are added or corrected
- a major document refresh lands
- the embedding model changes
- retrieval quality regresses on a stable test set

**Outputs**
- documented embedding and index plan

**Exit criteria**
- The team can explain why this storage/index path fits the workload.
- Reindex triggers are known in advance, not discovered during incidents.

### Phase 5: Retrieval design

**Inputs**
- indexed corpus
- representative user queries

**Actions**
- start with the simplest retrieval path that matches the corpus
- test dense retrieval, lexical retrieval, or hybrid retrieval against real queries
- apply metadata filters for tenant, freshness, product/version, language, or document scope
- tune top-k only after inspecting what is being returned
- consider reranking when initial recall is acceptable but final ordering is weak

**Rules of thumb**
- Use **dense retrieval** for semantic similarity and paraphrased questions.
- Use **lexical signals** when exact identifiers, product names, versions, or policy labels matter.
- Use **hybrid retrieval** when either semantic-only or keyword-only search misses relevant evidence.
- Use **metadata filters** as both quality controls and security controls.

**Outputs**
- retrieval policy for query handling
- logging requirements for top results, scores, filters, and citations

**Exit criteria**
- The team can inspect retrieved chunks and explain why they were selected.
- The system can narrow retrieval scope safely using metadata.

### Phase 6: Grounded answer generation

**Inputs**
- retrieved chunks
- answer policy

**Actions**
- instruct the model to answer from retrieved evidence when grounding is required
- require citations or source references when the use case depends on provenance
- define abstention behavior when retrieval is weak, missing, or contradictory
- prefer structured outputs for diagnostics, eval runs, or review workflows

**Minimum answer policy**
- answer only from retrieved evidence when the task requires grounding
- cite the supporting source or section when feasible
- state uncertainty or ask a follow-up when the evidence is insufficient
- do not silently fill missing facts from general model knowledge in a supposedly grounded workflow

**Outputs**
- grounded answer contract
- operator-visible diagnostic format if needed

**Exit criteria**
- The answer behavior makes grounding failures visible rather than hiding them behind fluent prose.

### Phase 7: Offline evaluation

**Inputs**
- gold query set
- expected documents or passages
- generated answers with citations

**Actions**
- evaluate retrieval quality separately from answer quality
- record whether the right document or passage appeared in the retrieved set
- verify citation correctness and unsupported claims
- group failures into buckets before changing prompts or models

**Useful evaluation dimensions**
- retrieval hit rate or recall proxy on expected documents/passages
- citation correctness
- groundedness or unsupported-claim rate
- answer usefulness to the user task
- abstention quality when evidence is weak

**Outputs**
- failure buckets tied to retrieval, chunking, metadata, ranking, or generation behavior

**Exit criteria**
- The team knows whether the main problem is ingestion/retrieval or answer generation.
- Prompt tuning is not used to hide indexing defects.

See `examples/rag-evaluation-example.md` for a worked mini-evaluation.

### Phase 8: Production monitoring and maintenance

**Inputs**
- live queries
- retrieval logs
- corpus refresh events

**Actions**
- monitor retrieval misses, stale citations, empty-result rates, and filter behavior
- audit tenant or ACL scoping regularly
- track corpus drift and reindex triggers
- review examples where users report “hallucination” to confirm whether the real issue was retrieval failure

**Outputs**
- maintenance plan for refresh, reindex, and incident review

**Exit criteria**
- The team can detect degradation caused by corpus changes, not just model changes.

## Troubleshooting

### 1. Relevant document exists but is not retrieved

**Likely causes**
- chunk boundaries split the answer from its heading or context
- semantic-only retrieval misses exact identifiers
- metadata filters are too narrow
- stale index or incomplete ingestion

**Checks**
- inspect top-k retrieved chunks and their metadata
- test the same query with and without filters
- test dense-only versus hybrid retrieval
- verify the document was actually indexed in the expected version

**Fixes**
- rework chunking to preserve semantic units
- add lexical or hybrid retrieval
- correct filters or metadata
- reindex the missing or updated content

### 2. Answer cites the wrong section or wrong version

**Likely causes**
- overlapping chunks produce near-duplicate candidates
- superseded content remains searchable
- ranking favors semantically similar but outdated text

**Checks**
- compare cited chunk metadata with effective date and version
- inspect for duplicate or superseded documents in the index
- review whether freshness metadata exists and is used

**Fixes**
- deduplicate or retire old content
- filter by version/effective date where appropriate
- store stronger provenance metadata and expose it in the answer

### 3. Answers are repetitive or contain duplicated evidence

**Likely causes**
- overlap is too high
- many near-identical chunks from the same source dominate retrieval
- top-k is too large for the query

**Checks**
- inspect neighboring retrieved chunks for near-duplicates
- compare answer quality at lower top-k values

**Fixes**
- reduce unnecessary overlap
- deduplicate chunk candidates before generation
- tune top-k based on query class, not a universal default

### 4. Dense retrieval fails on SKUs, codes, policy IDs, or version numbers

**Likely causes**
- lexical specificity matters more than semantic similarity
- identifiers were normalized or lost during ingestion

**Checks**
- run exact-term tests against representative identifier queries
- confirm identifiers remain present in chunk text and metadata

**Fixes**
- add lexical or hybrid retrieval
- preserve identifiers in chunk text and metadata
- add filters for product, version, or document type

### 5. Users report hallucinations, but the real issue is bad retrieval

**Likely causes**
- answer generation is blamed before retrieval logs are inspected
- weak evidence is still passed to the model as if it were sufficient

**Checks**
- review retrieved chunks before reviewing prompt wording
- verify whether cited evidence truly supports the answer
- test abstention behavior on weak-retrieval cases

**Fixes**
- enforce grounded-answer policy
- require citations in evaluation runs
- adjust retrieval, chunking, or ranking before changing prompts

### 6. Cross-tenant or unauthorized content appears in results

**Likely causes**
- missing ACL metadata
- retrieval performed without required filters
- shared index without proper scope enforcement

**Checks**
- inspect metadata fields on returned chunks
- confirm filters are applied server-side where required
- review ingestion pipeline for missing tenant or ACL attributes

**Fixes**
- add mandatory scope metadata to every chunk
- require retrieval filters for tenant/access boundaries
- reindex content after metadata correction

### 7. Retrieved content is stale or superseded

**Likely causes**
- corpus refresh does not trigger reindexing
- old and new versions coexist without ranking or filtering rules

**Checks**
- compare source freshness with index freshness
- inspect effective dates and ingestion timestamps

**Fixes**
- define explicit reindex triggers
- filter or rank by freshness where the use case requires it
- retire superseded content from searchable scope

### 8. Retrieved passages contain prompt injection or untrusted instructions

**Likely causes**
- the system treats retrieved text as trusted instructions instead of untrusted evidence
- unreviewed external content is indexed without policy boundaries

**Checks**
- inspect whether the prompt clearly separates system policy from retrieved content
- review the provenance and trust class of indexed sources

**Fixes**
- treat retrieved text as data, not instructions
- limit indexing of untrusted sources or isolate them by policy
- require the model to ground answers in evidence rather than obey document-embedded commands

## Additional Resources

- `references/rag-decision-matrix.md` — compact architecture and retrieval decision matrix for implementation planning
- `examples/rag-evaluation-example.md` — worked example that separates retrieval defects from generation defects

Primary guidance to verify before final implementation decisions:

- OpenAI Embeddings guide: `https://platform.openai.com/docs/guides/embeddings`
- OpenAI Retrieval guide: `https://platform.openai.com/docs/guides/retrieval`
- OpenAI File Search guide: `https://platform.openai.com/docs/guides/tools-file-search`
- OpenAI structured output guidance: `https://platform.openai.com/docs/guides/text?api-mode=responses`

If exact documentation URLs move, re-check current official docs before merge or handoff.

## Related Skills

Use a different or adjacent skill when the task shifts to:

- prompt engineering without external retrieval
- search relevance tuning for a non-LLM application
- evaluation framework design beyond a lightweight gold-set review
- agent orchestration where retrieval is one tool among many
- data governance or redaction workflows before indexing sensitive corpora

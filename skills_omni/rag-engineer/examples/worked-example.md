# Worked Example: Product Docs + Support Tickets RAG

This example shows how to apply the workflow in `SKILL.md` to a small corpus.

## Goal

Build a support assistant for an internal product team. It must answer questions using product documentation and resolved support tickets while preserving citations and avoiding tenant leakage.

## Sample Corpus

### Document A: Product Documentation
- `document_id`: `doc-api-auth-v3`
- title: `Authentication API Guide`
- type: `api-doc`
- version: `v3`
- section examples:
  - `Overview`
  - `Token refresh`
  - `Error codes`

### Document B: Policy Note
- `document_id`: `doc-retention-2026`
- title: `Data Retention Policy`
- type: `policy`
- effective date: `2026-01-01`
- sections:
  - `Retention windows`
  - `Exceptions`

### Document C: Support Ticket Resolution
- `document_id`: `ticket-18422`
- title: `Users receive AUTH_401 after token rotation`
- type: `ticket`
- product: `auth-service`
- resolved status: `closed`
- timestamps preserved

## Ingestion Contract

Each chunk stores:
- `document_id`
- `chunk_id`
- `title`
- `section_path`
- `source_type`
- `version` or `effective_at`
- `tenant_id`
- `updated_at`
- `source_uri`

ACL rule:
- support tickets are only retrievable for the same internal tenant
- policy and product docs are globally retrievable inside the organization

## Chunking Scheme

### Product docs
Chunk by section and subsection.
- Example chunk: `doc-api-auth-v3#token-refresh#1`
- Preserved metadata: section heading, version, source URI

### Policy docs
Chunk by clause or subsection.
- Example chunk: `doc-retention-2026#retention-windows#2`
- Preserved metadata: effective date, section path

### Support tickets
Chunk by logical ticket segments:
- problem statement
- investigation notes
- final resolution
- Example chunk: `ticket-18422#resolution#1`

Why this chunking was chosen:
- API docs need exact endpoints and error-code lookups
- policy docs need clause-level citation
- tickets need symptom-to-fix retrieval without dragging in the whole conversation

## Query Set for Retrieval Evaluation

### Query 1
**Query:** `Why do users get AUTH_401 after rotating refresh tokens?`

**Query class:** identifier + troubleshooting

**Expected relevant results:**
1. `ticket-18422#resolution#1`
2. `doc-api-auth-v3#error-codes#...`
3. `doc-api-auth-v3#token-refresh#1`

**Good behavior:**
- The ticket resolution appears in top results
- The exact error code is not missed
- Final answer cites both the ticket resolution and the API doc section

### Query 2
**Query:** `How long are audit logs retained?`

**Query class:** policy lookup

**Expected relevant results:**
1. `doc-retention-2026#retention-windows#...`

**Good behavior:**
- The current policy section outranks older or generic policy summaries
- Final answer includes effective-date-aware citation

### Query 3
**Query:** `How do I refresh an expired access token?`

**Query class:** semantic paraphrase

**Expected relevant results:**
1. `doc-api-auth-v3#token-refresh#1`
2. `doc-api-auth-v3#overview#...`

**Good behavior:**
- Semantic retrieval finds the token refresh section even though the wording differs
- Broad overview chunks do not outrank the specific procedure

## Initial Retrieval Results

### Before tuning
Observed issues:
- Query 1 failed to retrieve the ticket resolution in top results
- Query 1 returned broad auth overview chunks instead of the exact error-code section
- Query 2 sometimes returned an older policy summary due to weak freshness handling
- Query 3 was acceptable but overly broad chunks reduced citation precision

### Diagnosis
- semantic-only retrieval underperformed on `AUTH_401`
- policy chunks lacked strong effective-date metadata in ranking/filtering
- API doc chunks were too large, mixing overview and procedures

## Tuning Changes

### Change 1: Add hybrid retrieval
Reason:
- identifier-heavy queries need lexical support

Expected improvement:
- error-code and exact-term queries stop missing exact references

### Change 2: Re-chunk API docs by subsection
Reason:
- broad sections diluted ranking precision

Expected improvement:
- `Token refresh` and `Error codes` become retrievable as distinct evidence units

### Change 3: Add freshness-aware metadata handling for policy docs
Reason:
- older policy summaries should not outrank the active policy

Expected improvement:
- current effective policy sections rank above stale material

## Retrieval Results After Tuning

### Query 1 after tuning
Top expected results:
1. `ticket-18422#resolution#1`
2. `doc-api-auth-v3#error-codes#1`
3. `doc-api-auth-v3#token-refresh#1`

Why this is better:
- hybrid retrieval catches `AUTH_401`
- finer API chunks improve section-level precision
- answer can cite exact resolution steps instead of a vague overview

### Query 2 after tuning
Top expected result:
1. `doc-retention-2026#retention-windows#1`

Why this is better:
- freshness metadata promotes the active policy section
- the answer can cite the correct effective policy instead of a stale summary

### Query 3 after tuning
Top expected results:
1. `doc-api-auth-v3#token-refresh#1`
2. `doc-api-auth-v3#overview#1`

Why this is better:
- the procedure chunk outranks the generic overview
- answer grounding is more precise and easier to verify

## Before / After Summary

| Area | Before | After |
| --- | --- | --- |
| identifier queries | semantic-only missed exact code lookups | hybrid retrieval returns exact error-code evidence |
| policy freshness | stale summaries sometimes surfaced | effective-date-aware ranking promotes current policy |
| citation quality | answers cited broad sections | answers cite exact subsection-level evidence |
| debugging clarity | hard to tell if retrieval or prompting was failing | retrieval traces and eval set isolate the failure stage |

## Takeaways

- The first fix was not a prompt rewrite; it was a retrieval change.
- Distinguishing semantic paraphrase queries from exact identifier queries changed the retrieval strategy.
- Better chunk boundaries improved ranking and citation quality without increasing context size.
- Freshness and metadata design mattered as much as embeddings.

Use this pattern as a template: define query classes, build a small eval set, inspect failures by stage, and tune retrieval before generation.

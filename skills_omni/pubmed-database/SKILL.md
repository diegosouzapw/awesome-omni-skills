---
name: "pubmed-database"
description: "PubMed Database workflow skill. Use this skill when the user needs direct REST API access to PubMed. Advanced Boolean and MeSH queries, E-utilities API, batch processing, and citation-oriented retrieval. For Python workflows, prefer Biopython (Bio.Entrez). Use this skill for direct HTTP/REST work or custom API implementations, and preserve upstream workflow intent, copied support files, and provenance before handoff."
version: "0.0.1"
category: "backend"
tags:
  - "pubmed-database"
  - "direct"
  - "rest"
  - "api"
  - "access"
  - "pubmed"
  - "advanced"
  - "boolean"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
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
family_id: "pubmed-database"
family_name: "PubMed Database"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/pubmed-database"
upstream_skill: "skills/pubmed-database"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "pubmed-database"
---

# PubMed Database

## Overview

This skill supports direct, official programmatic access to PubMed through NCBI Entrez E-utilities.

Use it when the task needs reproducible biomedical literature retrieval, fielded or MeSH-aware searching, batch export, citation-oriented extraction, or a custom integration that should stay aligned with official PubMed and NCBI behavior.

Keep the original upstream intent intact: this skill exists for direct REST access and custom workflows. For Python implementations, prefer `Bio.Entrez` as a client wrapper, but design and verify the workflow in terms of the underlying E-utilities semantics first.

Do **not** fall back to scraping PubMed HTML pages when E-utilities already expose the needed data.

## When to Use This Skill

Activate this skill when one or more of these are true:

- You need **direct HTTP access** to PubMed or Entrez E-utilities.
- You need a **repeatable, auditable search strategy** rather than an ad hoc UI search.
- You must construct **advanced Boolean, field-tagged, date-bounded, publication-type, or MeSH-informed queries**.
- You need to **retrieve many records in batches** without manually copying PMIDs.
- You need to compare **ESearch, ESummary, EFetch, and ELink** for the same workflow.
- You are building a custom integration for **citation metadata, abstracts, identifiers, or related-record lookup**.
- You must verify how PubMed interpreted a query before exporting or analyzing results.

Do **not** use this skill as the first choice when:

- The user only needs a quick manual literature search in the PubMed web UI.
- The task is purely Python automation and a higher-level client already covers the needed behavior; in that case, still use this skill for query design and API semantics, but implement with `Bio.Entrez`.
- The task requires unsupported data collection patterns such as HTML scraping or aggressive harvesting.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Choosing the right E-utility | `references/integration-patterns.md` | Helps decide between ESearch, ESummary, EFetch, and ELink before building requests |
| Designing a reproducible query | `examples/request-response-example.md` | Shows fielded search, translation checks, and history-server usage with concrete request patterns |
| Mapping output fields for extraction | `assets/schema-map.json` | Gives a compact machine-readable map for common citation, abstract, journal, and identifier extraction goals |
| First production call | This `SKILL.md` | Establishes safe request structure, identification, batching, and troubleshooting |
| Python implementation | This `SKILL.md`, then `examples/request-response-example.md` | Keeps REST semantics primary, then shows a Bio.Entrez equivalent without changing policy obligations |

## Workflow

### 1. Define the retrieval target

Clarify all of the following before making requests:

- Research question or operational objective
- Concepts, synonyms, abbreviations, and likely spelling variants
- Required filters such as date range, language, species, publication type, or journal
- Output need: counts only, lightweight summaries, full structured records, or related links
- Expected volume: a few records, hundreds, or a large result set needing pagination and checkpointing

For evidence-sensitive work such as systematic review support, combine **controlled vocabulary** and **free-text terms** deliberately instead of assuming one will fully cover the concept.

### 2. Build the query explicitly

Construct the query with field tags and Boolean logic instead of relying on vague free text.

Common patterns include:

- Title/abstract terms for recent phrasing: `term[Title/Abstract]`
- Author lookup: `Surname Initials[Author]`
- Journal restriction: `Journal Name[Journal]`
- Publication type: `randomized controlled trial[Publication Type]`
- Date restrictions with Entrez date parameters or explicit query clauses
- MeSH-driven concept expansion, often paired with free-text synonyms

Good practice:

- Quote phrases only when you want a phrase-level constraint.
- Use parentheses around concept groups.
- Keep a logged copy of the exact submitted query string.
- For recall-sensitive searches, pair MeSH with keyword synonyms rather than treating them as interchangeable.

### 3. Run `ESearch` first and inspect interpretation

Use `ESearch` to verify whether PubMed interpreted the query as intended.

Minimum concerns to verify:

- `Count`
- Returned identifiers for a small first page
- Search interpretation or translation details when available
- Whether the query is unexpectedly broad or narrow

Do this **before** launching large exports.

If the result set is non-trivial, prefer `usehistory=y` so downstream calls can reference `WebEnv` and `query_key` instead of copying large PMID lists through every step.

### 4. Decide the downstream retrieval utility

Choose the next step based on the actual output need:

- **ESearch**: find PMIDs, counts, and search interpretation
- **ESummary**: lightweight metadata review, screening support, fast record summaries
- **EFetch**: richer record retrieval for structured extraction, abstracts, identifiers, and detailed citation fields
- **ELink**: related-record, citation-link, or cross-database relationships when available

Do not assume `ESummary` and `EFetch` contain the same fields.

### 5. Batch safely for larger result sets

For larger jobs:

1. Call `ESearch` with `usehistory=y`
2. Capture and log `Count`, `WebEnv`, and `query_key`
3. Page through records with `retstart` and `retmax`
4. Retrieve with `ESummary` or `EFetch` in bounded batches
5. Log progress after each batch
6. Check cumulative retrieved records against expected count

Operational guardrails:

- Use respectful pacing and bounded retries.
- Provide identifying request metadata such as tool and email as required by NCBI guidance.
- If using an API key, configure it explicitly rather than assuming higher throughput automatically applies.
- Do not make a single oversized request when a history-backed paginated workflow is safer.
- Checkpoint enough state to resume after interruption.

Recommended audit fields per batch:

- Query string
- Utility used
- `retstart`
- `retmax`
- Cumulative records written
- `WebEnv` and `query_key` when using the history server
- Timestamp and any retry events

### 6. Prefer machine-parseable formats for extraction

When building parsers or downstream transforms:

- Prefer structured formats such as XML when field reliability matters.
- Use `ESummary` only for summary-oriented metadata needs.
- Use `EFetch` when you need richer record content.
- Validate the requested `retmode` and `rettype` against the utility and extraction goal.

Use `assets/schema-map.json` as a compact reference for common extraction targets, but treat official NLM field documentation as authoritative for final interpretation.

### 7. Verify before analysis or handoff

Before handing results to another step or another operator, verify:

- The query returned the expected conceptual scope
- The total count was understood correctly
- Pagination covered the intended result set
- The chosen utility and format actually contain the required fields
- Any Bio.Entrez implementation matches the REST behavior for the same search or PMIDs

## Troubleshooting

### Problem: Unexpectedly broad or narrow results

Check:

- Whether PubMed automatic term mapping changed the meaning of the query
- Whether phrase quoting is too restrictive or too loose
- Whether field tags were omitted or applied to the wrong clause
- Whether MeSH terms, explosion behavior, or free-text synonyms are mismatched
- Whether date or publication-type filters are suppressing expected records

Action:

- Re-run a small `ESearch`
- Inspect translation behavior
- Compare a fielded query against a simpler baseline
- Log the exact before/after query strings

### Problem: Only the first page was retrieved

Cause:

- `retstart` / `retmax` pagination was not implemented, or `usehistory=y` was omitted for larger retrievals.

Action:

- Repeat `ESearch` with history enabled
- Capture `WebEnv` and `query_key`
- Page explicitly and reconcile total retrieved vs `Count`

### Problem: Missing fields in the response

Cause:

- The selected utility or format does not expose the needed field.

Action:

- Compare `ESummary` versus `EFetch`
- Verify `retmode` and `rettype`
- Check `assets/schema-map.json` for common expectations
- Confirm field semantics in official NLM documentation before changing the parser

### Problem: HTTP 429, temporary blocks, or unstable responses

Action:

- Slow down request rate and reduce concurrency
- Add bounded backoff and retry with logging
- Confirm identifying metadata and API key configuration
- Prefer scheduled, history-based batch retrieval over bursty repeated searches
- Review current official NCBI usage guidance instead of assuming a fixed limit from memory

### Problem: `ELink` results look incomplete

Cause:

- Link coverage depends on the selected link name and on NCBI data availability.

Action:

- Verify the exact `linkname`
- Treat returned relationships as availability-dependent, not guaranteed complete citation coverage
- Record which link type was used in downstream outputs

### Problem: REST and Bio.Entrez outputs do not match

Action:

- Compare the exact database, utility, query, and format parameters
- Ensure both paths use the same IDs or the same history state
- Confirm parsing assumptions rather than assuming the client wrapper changed PubMed behavior

## Additional Resources

- `references/integration-patterns.md` for utility selection, history-server decisions, batching, and output-format notes
- `examples/request-response-example.md` for concrete REST requests, expected response elements, and a Bio.Entrez equivalent
- Official NCBI Entrez Programming Utilities Help: `https://www.ncbi.nlm.nih.gov/books/NBK25501/`
- Official PubMed User Guide: `https://pubmed.ncbi.nlm.nih.gov/help/`
- MeSH reference: `https://www.ncbi.nlm.nih.gov/mesh`
- Biopython Entrez tutorial: `https://biopython.org/docs/latest/Tutorial/chapter_entrez.html`
- Biopython `Bio.Entrez` API reference: `https://biopython.org/docs/latest/api/Bio.Entrez.html`
- NLM MEDLINE/PubMed field descriptions: `https://www.nlm.nih.gov/bsd/mms/medlineelements.html`

## Related Skills

Use a neighboring skill instead when the task drifts into:

- generic literature review planning without direct API work
- citation formatting only, without PubMed retrieval design
- Python-only implementation details that do not require direct REST workflow reasoning
- broader biomedical database comparison beyond PubMed and Entrez

## Notes on Upstream Intent and Provenance

This enhanced candidate preserves the upstream skill identity and scope: direct PubMed access, advanced query construction, E-utilities use, batch processing, and citation-oriented retrieval. The wording has been rewritten into an operator-focused playbook so the skill is safer and more executable without changing its core purpose.

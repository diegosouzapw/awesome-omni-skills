# PubMed E-utilities Integration Patterns

Use this file as a quick decision reference while building or reviewing direct PubMed API workflows.

## Utility selection matrix

| Need | Preferred utility | Why |
| --- | --- | --- |
| Count matches and get PMIDs for a query | `ESearch` | Returns result count, identifiers, and history-server state when requested |
| Review lightweight metadata for many records | `ESummary` | Faster summary-oriented retrieval when full records are unnecessary |
| Retrieve richer structured records, abstracts, or detailed citation content | `EFetch` | Better for extraction-oriented workflows and record-level detail |
| Follow relationships such as related records or cross-database links | `ELink` | Exposes available link relationships when supported |

## Canonical large-result pattern

Use this pattern when the result set is bigger than a trivial one-page retrieval:

1. `ESearch` with `db=pubmed`
2. Include `usehistory=y`
3. Inspect `Count`
4. Capture `WebEnv` and `query_key`
5. Page with `retstart` and `retmax`
6. Retrieve batches through `ESummary` or `EFetch`
7. Reconcile cumulative retrieved count against `Count`

Why this pattern is safer:

- avoids passing large PMID lists through every request
- makes resumable batch retrieval easier
- reduces mistakes where only the first page is exported
- preserves a clearer audit trail for long-running jobs

## History server decision rules

Prefer `usehistory=y` when:

- you expect multiple retrieval calls after search
- you need pagination over a non-trivial result set
- you want more reproducible batch processing
- you are handing off state between workflow steps

Inline ID lists may be sufficient when:

- you already have a small, explicit PMID set
- the workflow is a one-off metadata lookup
- reproducible pagination is not required

## Common parameters to think about

| Parameter | Typical role | Common mistake |
| --- | --- | --- |
| `db=pubmed` | Selects PubMed as the Entrez database | Omitting the database or assuming a default |
| `term` | Search query for `ESearch` | Passing a UI-style query without verifying translation |
| `usehistory=y` | Stores search results on the history server | Forgetting it, then manually juggling IDs |
| `retstart` | Offset into result set | Never incrementing it during pagination |
| `retmax` | Page size per retrieval | Assuming it controls total count rather than page size |
| `retmode` | Response format such as XML or JSON where supported | Choosing a format that does not fit the parser |
| `rettype` | Record representation for some utilities | Assuming all utilities support the same values |
| `id` | Explicit identifiers for retrieval | Sending large manual ID lists when history state is better |
| `tool` / `email` | Caller identification expected by NCBI guidance | Treating them as optional in production workflows |
| `api_key` | Higher-throughput authenticated usage where configured | Assuming it removes the need for respectful pacing |

## ESearch vs ESummary vs EFetch

### Use `ESearch` when

- validating a query
- checking total result count
- inspecting interpretation before export
- obtaining PMIDs for downstream steps

### Use `ESummary` when

- screening or reviewing lightweight metadata
- you need a quick pass over many records
- abstracts or richer structured record detail are not required

### Use `EFetch` when

- you need detailed citation elements
- abstract text is required
- downstream parsing needs richer structure
- you need a record-oriented export rather than summary-only metadata

## Format selection notes

Choose the response format for the consumer, not just for convenience.

- Prefer structured, machine-parseable output when building parsers.
- If a needed field is missing, verify whether the problem is the utility choice, the requested format, or the field’s actual availability.
- Treat official NLM field documentation as authoritative for final field meaning.

## Query design reminders

- PubMed web UI behavior and API-submitted queries should not be assumed identical without checking interpretation.
- For recall-sensitive searching, pair MeSH terms with free-text synonyms.
- Field tags and parentheses often matter more than operators expect.
- Log the exact query string used in automation.

## ELink caution

`ELink` is useful for relationship discovery, but completeness depends on:

- the selected `linkname`
- record-specific data availability
- the relationship type NCBI exposes for that record set

Do not claim complete citation coverage unless the workflow has explicitly validated that assumption.

## Operational safety notes

- Use official E-utilities rather than scraping PubMed HTML.
- Keep retries bounded and visible in logs.
- Slow down when you encounter rate or block signals.
- Re-check current official guidance before hard-coding throughput assumptions.
- For Python, `Bio.Entrez` is a client path, not a policy exception.

# PubMed Request and Response Examples

These examples are designed to be adapted, not pasted blindly. Verify current endpoint behavior and field availability against official documentation before production use.

---

## Example 1: Fielded search with translation awareness

### Goal

Search for recent asthma therapy literature using title/abstract terms plus a publication date boundary, then inspect how PubMed interpreted the query.

### Request

```http
GET https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=(asthma%5BTitle%2FAbstract%5D)%20AND%20(therapy%5BTitle%2FAbstract%5D)&retmax=5&retmode=json&datetype=pdat&mindate=2022%2F01%2F01&maxdate=2025%2F12%2F31&tool=your-tool-name&email=you@example.org
```

### Key parameters

- `db=pubmed`: search PubMed
- `term=...`: fielded query using title/abstract clauses
- `retmax=5`: inspect a small first page before scaling up
- `retmode=json`: easier for quick inspection where supported
- `datetype`, `mindate`, `maxdate`: apply publication-date constraints
- `tool`, `email`: identifying metadata

### Expected response elements

Look for:

- total result count
- a short list of PMIDs
- query interpretation or translation fields when present in the response mode used

### Why this utility and format

`ESearch` is the right first step because it validates scope before retrieval. A small page prevents accidental over-fetching while you confirm the query behaves as intended.

---

## Example 2: History-backed search for batch retrieval

### Goal

Run a non-trivial search and store the result set on the history server so later retrieval calls can page cleanly.

### Request

```http
GET https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=(covid-19%5BTitle%2FAbstract%5D%20OR%20SARS-CoV-2%5BTitle%2FAbstract%5D)%20AND%20vaccine%5BTitle%2FAbstract%5D&usehistory=y&retmax=0&retmode=json&tool=your-tool-name&email=you@example.org
```

### Key parameters

- `usehistory=y`: stores the search result set for downstream calls
- `retmax=0`: count-first pattern when you do not need PMIDs in the initial response body
- `retmode=json`: convenient for inspecting count and history metadata where supported

### Expected response elements

Look for:

- `count`
- history-related state such as `webenv`
- `query_key`

### Why this utility and format

This is the safest pattern when you plan to fetch many records in pages. It separates search creation from record retrieval and avoids passing large ID lists around.

---

## Example 3: Summary retrieval from history state

### Goal

Fetch a bounded page of lightweight metadata after a history-backed search.

### Request

```http
GET https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esummary.fcgi?db=pubmed&query_key=1&WebEnv=YOUR_WEBENV&retstart=0&retmax=20&retmode=json&tool=your-tool-name&email=you@example.org
```

### Key parameters

- `query_key=1` and `WebEnv=YOUR_WEBENV`: identify the stored result set
- `retstart=0`, `retmax=20`: first summary page
- `retmode=json`: useful for metadata inspection and downstream transformation

### Expected response elements

Expect summary-style metadata records keyed by PMID or record order, often including title-level and citation-level elements suitable for screening or indexing.

### Why this utility and format

Use `ESummary` when you need quick metadata review rather than the richest possible record structure.

---

## Example 4: Full-record retrieval from history state

### Goal

Retrieve richer structured records for extraction-oriented processing.

### Request

```http
GET https://eutils.ncbi.nlm.nih.gov/entrez/eutils/efetch.fcgi?db=pubmed&query_key=1&WebEnv=YOUR_WEBENV&retstart=0&retmax=20&retmode=xml&tool=your-tool-name&email=you@example.org
```

### Key parameters

- `query_key` and `WebEnv`: history-backed retrieval
- `retstart`, `retmax`: batch controls
- `retmode=xml`: structured output for reliable parsing

### Expected response elements

Expect richer PubMed article record structures than summary output, often including detailed citation components and abstract-bearing content where available.

### Why this utility and format

`EFetch` is the better choice when downstream logic needs more than summary metadata.

---

## Example 5: `ESummary` versus `EFetch` decision check

### Scenario

You need article titles, PMIDs, and publication metadata for screening only.

### Better choice

- Start with `ESummary`

### Scenario

You need detailed citation content, abstract-bearing records, or richer extraction inputs.

### Better choice

- Use `EFetch`

### Verification note

If a field seems missing, do not assume the record lacks it until you confirm whether the problem is really utility selection or format selection.

---

## Example 6: Bio.Entrez equivalent for a history-backed search

### Goal

Show the Python path without changing the underlying REST semantics.

```python
from Bio import Entrez

Entrez.email = "you@example.org"
Entrez.tool = "your-tool-name"
# Entrez.api_key = "your_api_key"  # if available and appropriate

with Entrez.esearch(
    db="pubmed",
    term='(asthma[Title/Abstract]) AND (therapy[Title/Abstract])',
    usehistory="y",
    retmax=0,
) as handle:
    search_result = Entrez.read(handle)

count = search_result.get("Count")
webenv = search_result.get("WebEnv")
query_key = search_result.get("QueryKey")

with Entrez.efetch(
    db="pubmed",
    query_key=query_key,
    WebEnv=webenv,
    retstart=0,
    retmax=20,
    retmode="xml",
) as handle:
    xml_payload = handle.read()
```

### Why include this example

This keeps the workflow grounded in `ESearch -> history state -> EFetch` semantics. `Bio.Entrez` is a client wrapper, not a substitute for understanding batching, identification, rate etiquette, or output selection.

---

## Minimal validation checklist for any adapted example

Before production use, confirm:

- the exact query string submitted
- total count versus page size
- whether history state is present when expected
- whether the selected utility exposes the fields you need
- whether XML or JSON is the better parsing target for the chosen utility
- whether retry and pacing behavior are bounded and logged

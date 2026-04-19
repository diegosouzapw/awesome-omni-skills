# RAG Domain Notes

Use this reference during design and debugging. It complements `SKILL.md` with compact decision tables and failure lookups.

## 1. Chunking Decision Matrix

| Content type | Preferred boundary | What to preserve | Common failure if chunked poorly | Good retrieval test |
| --- | --- | --- | --- | --- |
| Prose documentation | section or subsection | title, heading path, source URL, version | chunks become too broad and dilute the answer | paraphrase queries and section-specific queries |
| API docs | endpoint or method block | endpoint name, method, parameter names, version | exact parameter details buried inside large chunks | identifier-heavy queries and parameter lookups |
| Support tickets | ticket or message thread segment | ticket ID, product, status, timestamp | irrelevant conversation history crowds out the fix | symptom-to-resolution queries |
| Source code | function, class, or module boundary | repo path, symbol name, language, commit/version | mixed concerns reduce local relevance | symbol lookup and behavior explanation queries |
| Transcripts | speaker turn group or topic segment | speaker, timestamp range, meeting/session ID | fragmented statements lose context | who-said-what and decision-summary queries |
| Policies and compliance docs | clause, section, or effective-date block | section ID, effective date, jurisdiction, policy version | stale or superseded text retrieved | version-sensitive and exact-term queries |
| Tables or catalogs | row group or logical record | primary key, column labels, update timestamp | semantics blur across unrelated rows | SKU/code/value lookups |

Notes:
- Prefer natural document structure over arbitrary fixed windows.
- Preserve metadata needed for filtering and citations in every chunk.
- If neighboring chunks repeatedly appear together, test whether the source should be chunked at a higher structural level.

## 2. Metadata Checklist

Minimum useful fields for most RAG systems:
- `document_id`
- `chunk_id`
- `title`
- `section_path` or heading path
- `source_uri` or source path
- `source_type`
- `created_at` or `effective_at`
- `updated_at`
- `version`
- `tenant_id` or ACL label where relevant
- `language` if the corpus is multilingual

Optional but high-value fields:
- product or domain tags
- geographic or policy jurisdiction
- confidence or extraction quality flags
- deduplication group ID
- parent-child linkage for chunk families

If a retrieval result cannot be traced to the original source and version, debugging and citations will be unreliable.

## 3. When to Prefer Hybrid Retrieval

Use semantic retrieval alone only when the corpus and queries are mostly conceptual natural language.

Prefer hybrid retrieval when queries often include:
- error codes
- version strings
- SKUs or part numbers
- legal or policy clause numbers
- product names with exact spelling importance
- configuration keys or API parameter names

Decision rule:
- if semantic paraphrase queries work but exact-identifier queries fail, add lexical or keyword retrieval
- if both semantic and exact-match behavior matter, evaluate a hybrid strategy
- if recall is acceptable but top results are poorly ordered, add reranking before increasing context size

## 4. Retrieval Metrics Glossary

Use retrieval metrics separately from answer-quality metrics.

Common retrieval metrics:
- **Hit@k**: whether at least one relevant result appears in the top `k`
- **Recall@k**: how much of the relevant evidence appears in the top `k`
- **MRR**: whether the first relevant result appears early in ranking
- **nDCG**: whether highly relevant results are ordered near the top
- **Filter correctness**: whether retrieval respects metadata constraints such as tenant, date, or product scope

Practical interpretation:
- low Hit@k usually means recall or filtering is broken
- acceptable Hit@k with poor rank quality suggests reranking or chunk quality problems
- strong retrieval metrics with weak final answers suggests a generation or context-assembly issue, not a retrieval issue

## 5. Failure Mode Lookup

| Symptom | Likely stage | What to inspect first | Typical corrective action |
| --- | --- | --- | --- |
| relevant document never appears | ingestion / retrieval | corpus coverage, chunking boundaries, embedding path, filters | fix ingestion gaps, broaden retrieval, test hybrid search |
| exact identifier misses | retrieval strategy | lexical path, normalization, metadata fields | add keyword or hybrid retrieval and preserve exact tokens |
| same document repeats many times | ingestion / ranking | dedupe logic, chunk overlap, boilerplate | dedupe source, collapse near-duplicates, reduce overlap dominance |
| retrieved chunks are broad but not precise | chunking | chunk boundaries, headings, section metadata | re-chunk by section or record structure |
| correct result retrieved but not cited | context assembly / answer | packed context, citation mapping, prompt policy | ensure selected chunk survives assembly and carries source identifiers |
| stale content appears | ingestion freshness | version fields, reindex policy, effective dates | add freshness metadata and reindex triggers |
| cross-tenant leak risk | filtering / security | ACL metadata, pre-retrieval filtering, logs | enforce filters before or during retrieval; sanitize logs |
| latency spikes | retrieval / reranking / answer | candidate count, rerank depth, context size | reduce candidates, improve filters, pack fewer better chunks |

## 6. RAG Debugging Order

When quality is poor, inspect in this order:
1. corpus coverage
2. ingestion and deduplication
3. metadata completeness
4. filtering and authorization
5. chunking boundaries
6. retrieval method
7. reranking
8. context packing
9. answer instructions

This order avoids spending time on prompts when the evidence path is broken.

## 7. Safe Observability Notes

Good traces should capture:
- query text or a safe surrogate when sensitive
- query class
- filters applied
- retrieved chunk IDs and ranks
- source document IDs
- model input chunk IDs
- final citation mapping

Avoid storing unrestricted full-text snippets from sensitive corpora in debug logs unless the environment explicitly allows it.

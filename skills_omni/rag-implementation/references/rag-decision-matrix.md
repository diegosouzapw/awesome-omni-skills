# RAG Decision Matrix

Use this reference during architecture selection and implementation review. It is intentionally compact and decision-oriented.

## Matrix 1: Prompt-only vs Managed File Search vs Custom RAG

| Option | Best when | Avoid when | Strengths | Tradeoffs | Review questions |
| --- | --- | --- | --- | --- | --- |
| Prompt-only | Knowledge is small, stable, and fits directly in context | Corpus is large, changing, or citations are required | Lowest operational overhead | Weak freshness, poor provenance, manual context packing | Can the whole knowledge set stay current inside prompts? |
| Managed file search | Fastest path to document-grounded answers with limited customization needs | You need custom ACL enforcement, custom chunking rules, custom ranking, or nonstandard ingestion controls | Faster implementation, less retrieval plumbing | Less control over indexing and retrieval policy | Are built-in retrieval behaviors sufficient for the corpus and compliance constraints? |
| Custom RAG pipeline | You need tenant isolation, custom metadata filters, hybrid retrieval, reranking, or deep observability | Team cannot operate ingestion, indexing, and eval workflows reliably | Maximum control over ingestion, ranking, filters, and debugging | Higher engineering and maintenance cost | Which requirements cannot be satisfied by managed retrieval? |

## Matrix 2: Retrieval mode selection

| Retrieval mode | Best for | Weak spots | Signals you should choose it | Common corrections |
| --- | --- | --- | --- | --- |
| Dense vector retrieval | Semantic similarity, paraphrased user questions, natural-language corpora | Exact identifiers, product codes, version strings, keyword-heavy corpora | Users ask conceptually similar questions with varied wording | Improve chunking; add metadata filters; consider reranking |
| Lexical / keyword retrieval | IDs, SKUs, legal clauses, error codes, exact titles | Misses semantically similar phrasing | Queries often contain exact terms that must match literally | Add semantic layer if paraphrase recall is poor |
| Hybrid retrieval | Mixed corpora with both concepts and exact terms | More tuning complexity | Dense-only misses exact terms, or keyword-only misses paraphrases | Tune weighting, then inspect ranking quality |
| Filtered retrieval | Multi-tenant, versioned, scoped, or freshness-sensitive corpora | Bad metadata causes false exclusions | Retrieval must obey tenant, language, product, or date constraints | Fix metadata quality before prompt tuning |

## Matrix 3: Storage and index approach

| Approach | Best when | Strengths | Tradeoffs | Ask before choosing |
| --- | --- | --- | --- | --- |
| Managed retrieval/file search | Time-to-value matters most and requirements are standard | Simplifies ingestion and search plumbing | Less control over custom ranking and internals | Do we need custom ACLs, custom chunking, or custom rank fusion? |
| Managed vector database | Corpus is sizable and retrieval is a core product capability | Operationally focused search features, filtering, ANN performance | Another production dependency | Do we need specialized retrieval features more than database simplicity? |
| Database-native vectors (for example PostgreSQL with vector support) | Team wants search close to transactional data and can tolerate tighter workload constraints | Simpler stack for some teams, easier co-location with app data | Search capabilities and scaling profile may be narrower than dedicated search systems | Are filtering, scale, and latency targets still realistic in the primary database? |
| Search engine with vector + lexical support | Hybrid retrieval and relevance controls are important | Strong keyword + vector patterns and ranking controls | More search operations overhead | Is search relevance a core capability that merits a dedicated search layer? |

## Chunking review matrix

| Corpus type | Prefer | Avoid | Metadata that matters |
| --- | --- | --- | --- |
| Policies / compliance docs | Section- and clause-aware chunks | Splitting clauses from headings or effective dates | policy id, version, effective date, section lineage |
| Product / technical docs | Heading-aware chunks with examples kept nearby | Mixing multiple unrelated endpoints or features in one chunk | doc version, product, section, source URI |
| FAQs / support content | One Q&A unit per chunk | Large blended support articles without question boundaries | article id, product, issue type |
| Code / config docs | Function, class, command, or config-block chunks | Breaking syntax from explanation or examples | repo/path, version, symbol, language |
| Tables / catalogs | Keep header semantics and nearby explanatory text | Raw rows with no field meaning | table title, schema/header context, version |

## Reindex / re-embed trigger checklist

Trigger review when any of these happen:

- embedding model changes
- chunking logic changes
- metadata schema changes
- ACL or tenant fields were missing or corrected
- a major corpus refresh lands
- duplicate/superseded content was discovered
- retrieval quality regresses on a stable evaluation set
- citation errors point to stale or wrong-version material

## Minimum review questions before sign-off

1. Why is RAG justified over prompt-only or fine-tuning?
2. Why is managed retrieval sufficient, or why is custom indexing required?
3. Which query classes need hybrid retrieval instead of dense-only retrieval?
4. Which metadata fields are required for quality and which are required for security?
5. What event triggers reindexing?
6. How will operators tell retrieval failure from generation failure?

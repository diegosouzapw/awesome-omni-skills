# Worked RAG Evaluation Example

This example shows how to separate a retrieval defect from a generation defect.

## Scenario

A team is building internal product-support Q&A for versioned documentation. Users often ask about exact feature availability by version.

## Mini corpus

### Document A
**Source:** `docs/releases/v3.1.md`

> Release 3.1 adds bulk export for audit logs. Bulk export is available only on the Enterprise plan. The feature is disabled by default and must be enabled by an administrator.

### Document B
**Source:** `docs/releases/v3.2.md`

> Release 3.2 introduces scheduled audit-log export. Scheduled export is available on the Pro and Enterprise plans. Bulk export remains Enterprise-only.

### Document C
**Source:** `docs/faq/audit-logs.md`

> Audit-log export lets teams download or schedule delivery of audit records. Availability depends on plan and feature type.

## Chunking choice

### Initial chunking
- Chunk 1: entire Document A
- Chunk 2: entire Document B
- Chunk 3: entire Document C

Metadata stored:
- `source`
- `doc_type`
- `version`
- `feature=audits`

## Evaluation query

**User query:**
> Is scheduled audit-log export available in version 3.1 for Pro customers?

## Expected retrieval behavior

The retriever should return at least:
1. Document B chunk because it explicitly mentions scheduled export and plan availability
2. Optionally Document A chunk because it clarifies that bulk export in 3.1 is a different feature

The retriever should not rely only on Document C, because it is too generic to answer the version-specific question.

## Expected grounded answer

> No. The corpus only states that scheduled audit-log export was introduced in version 3.2, where it is available on Pro and Enterprise plans. Version 3.1 mentions bulk export only, and that feature is Enterprise-only.

**Expected citations**
- `docs/releases/v3.2.md`
- optionally `docs/releases/v3.1.md`

## Failure case

### Retrieved chunks
1. Document C FAQ chunk
2. Document A release 3.1 chunk

### Bad answer

> Audit-log export depends on plan. Pro customers may have access depending on configuration.

### Why this is wrong
- The answer is fluent but not grounded in the relevant version-specific evidence.
- The key chunk from version 3.2 was missed.
- The answer hedges instead of stating the actual corpus-supported conclusion.

## Structured diagnostic review

```json
{
  "query": "Is scheduled audit-log export available in version 3.1 for Pro customers?",
  "expected_sources": [
    "docs/releases/v3.2.md",
    "docs/releases/v3.1.md"
  ],
  "retrieved_sources": [
    "docs/faq/audit-logs.md",
    "docs/releases/v3.1.md"
  ],
  "retrieval_assessment": "fail",
  "generation_assessment": "fail_due_to_missing_evidence",
  "likely_causes": [
    "dense retrieval over-weighted generic semantic similarity",
    "no lexical or hybrid support for version-specific query terms",
    "top-k too small for mixed semantic and exact-term retrieval"
  ],
  "recommended_fixes": [
    "test hybrid retrieval",
    "preserve and weight version tokens such as 3.1 and 3.2",
    "require abstention or explicit uncertainty when evidence is weak"
  ]
}
```

## Corrective change

### Retrieval update
- Switch from dense-only retrieval to hybrid retrieval.
- Increase importance of exact version terms.
- Keep metadata filter support for `feature=audits`.

### Optional chunking refinement
Split release notes into feature-level chunks when documents contain many unrelated items.

Example refined chunks for Document B:
- Chunk B1: scheduled audit-log export availability
- Chunk B2: bulk export remains Enterprise-only

## Expected after correction

### Retrieved chunks
1. Document B scheduled export chunk
2. Document A bulk export chunk
3. Document C FAQ chunk

### Correct answer

> No. Based on the retrieved release notes, scheduled audit-log export appears in version 3.2, not 3.1. In version 3.2 it is available on Pro and Enterprise plans. Version 3.1 only mentions bulk export, which remains Enterprise-only.

## Review takeaway

Do not label this kind of miss as “the model hallucinated” until you inspect retrieval. The primary defect here was retrieval design: dense-only search and insufficient weighting of exact version terms. Prompt changes alone would not reliably fix it.

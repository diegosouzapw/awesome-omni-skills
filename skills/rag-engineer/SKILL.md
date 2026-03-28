---
name: rag-engineer
description: "RAG workflow skill. Use this skill when a user needs retrieval pipelines, chunking, ranking, citations, and evaluation for an AI application."
version: "0.0.1"
category: ai-agents
tags: [rag, retrieval, embeddings, evaluation, citations, indexing]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-03-27"
---

# RAG Engineer

## Overview

Use this skill when the user needs a retrieval-augmented generation workflow that is actually measurable. It is for corpus shaping, chunking, indexing, retrieval and reranking, answer grounding, citation behavior, and evaluation loops.

This skill should prefer retrieval quality and evaluation over prompt-only optimism. Good output should make it obvious what the model knows from retrieved context, what it inferred, and where the pipeline can fail.

## When to Use This Skill

- Use when designing or improving a knowledge-grounded assistant, search-augmented chatbot, or internal answer system.
- Use when chunking, ranking, or citation quality is more important than raw model creativity.
- Use when the user needs an evaluation plan for retrieval quality, hallucination risk, and fallback behavior.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| New corpus onboarding | boundary and metadata | Documents, freshness, and permissions are explicit |
| Retrieval quality issue | chunking and ranking | Recall and ranking failure modes are named before tuning |
| Citation reliability | answer contract | Evidence, abstention, and conflict handling are visible |
| Eval design | dataset and metrics | Retrieval and answer quality are measured separately |
| Hybrid architecture debate | pipeline complexity | Extra steps are justified by a concrete failure they fix |

## Core Concepts

### Retrieval Quality Beats Model Heroics

Weak chunking, noisy retrieval, or poor corpus boundaries usually dominate final answer quality. Fix those before reaching for more complex prompting.

### Grounding Needs Observable Evidence

The system should show which passages, documents, or records justified the answer. If the evidence is weak, the response should narrow its claims or ask for clarification.

## Workflow

1. Define the knowledge boundary: corpus, freshness requirements, access controls, and which questions should be refused when evidence is missing.
2. Design chunking and metadata so chunk size, overlap, identifiers, section titles, timestamps, and permission tags all serve retrieval precision.
3. Choose retrieval and ranking strategy from a simple baseline, then justify any hybrid retrieval, reranking, or query rewriting step with a concrete failure mode.
4. Design the answer contract for citations, uncertainty, conflicting evidence, and abstention before tuning prompt style.
5. Add evaluation and fallback for retrieval recall, answer quality, low-confidence handling, and stale or unavailable context.

## Examples

### Example 1: Internal knowledge assistant

```text
Design a RAG workflow for engineering runbooks where answers must cite the exact operational document section.
```

**Explanation:** The answer should emphasize chunking, metadata, citations, and abstention behavior.

### Example 2: Retrieval packet

```bash
python3 skills/rag-engineer/scripts/render_rag_review.py \
  "support docs corpus" \
  "precision,citations,freshness,evals"
```

**Explanation:** Use the packet when the user needs a structured retrieval review or system design pass.

### Example 3: Evidence contract review

```text
Use @rag-engineer to redesign this assistant so every answer cites document title, section, and freshness window, and abstains when the evidence is weak.
```

**Explanation:** Use this framing when retrieval is working, but answer grounding is still too vague.

### Example 4: Local RAG packet from the skill folder

```bash
cd skills/rag-engineer
python3 scripts/render_rag_review.py \
  "runbooks corpus" \
  "chunking,metadata,citations,abstention"
```

**Explanation:** This path is useful when the reviewer is iterating inside the skill directory itself.

## Best Practices

- ✅ **Do:** define corpus boundaries, freshness rules, and permission boundaries up front.
- ✅ **Do:** evaluate retrieval and answer quality separately.
- ✅ **Do:** make citations or evidence references part of the answer contract.
- ❌ **Don't:** hide weak retrieval behind a stronger-sounding answer.
- ❌ **Don't:** optimize chunk size or reranking in the abstract without testing representative questions.

## Troubleshooting

### Problem: Answers sound confident but are poorly grounded

**Symptoms:** The response is fluent, but cited evidence is weak, missing, or unrelated.  
**Solution:** Re-check corpus boundaries, chunk metadata, retrieval filters, and whether the answer prompt allows unsupported synthesis.

### Problem: Retrieval recall is too low

**Symptoms:** Relevant documents exist, but they are rarely returned in the top results.  
**Solution:** Inspect chunk granularity, document normalization, query rewriting, and whether metadata filters are too aggressive.

### Problem: Citations exist but do not help operators verify the answer

**Symptoms:** The system cites something, but the reference is too broad or does not help the user inspect the underlying evidence quickly.
**Solution:** Tighten the answer contract so citations include document identifiers, section context, and any freshness signal required for trust.

## Related Skills

- `@prompt-engineer` — Use when answer formatting, instructions, and citation wording need better prompt structure.
- `@llm-patterns` — Use when the broader application needs tool use, fallback paths, or agent orchestration beyond retrieval.
- `@documentation` — Use when the corpus itself needs cleanup or clearer structure before indexing.

## Additional Resources

- [RAG checklist](references/checklist.md)
- [Citation contract rubric](references/citation-contract-rubric.md)
- [Retrieval evaluation worksheet](references/retrieval-evaluation-worksheet.md)
- [Render a RAG review packet](scripts/render_rag_review.py)
- [Grounding scorecard](examples/grounding-scorecard.md)

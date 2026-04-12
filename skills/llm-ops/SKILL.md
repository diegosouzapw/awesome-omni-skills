---
name: llm-ops
description: "LLM-OPS -- IA de Producao workflow skill. Use this skill when the user needs LLM Operations -- RAG, embeddings, vector databases, fine-tuning, prompt engineering avancado, custos de LLM, evals de qualidade e arquiteturas de IA para producao and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["llm", "rag", "embeddings", "vector-db", "fine-tuning", "llm-ops", "operations", "vector"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# LLM-OPS -- IA de Producao

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/llm-ops` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# LLM-OPS -- IA de Producao

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Arquitetura Rag Completa, Pipeline De Query Com Rag, Escolha Do Vector Db, Pgvector, Estrutura De Prompt De Elite.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to llm ops
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: LLM Operations -- RAG, embeddings, vector databases, fine-tuning, prompt engineering avancado, custos de LLM, evals de qualidade e arquiteturas de IA para producao.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

LLM Operations -- RAG, embeddings, vector databases, fine-tuning, prompt engineering avancado, custos de LLM, evals de qualidade e arquiteturas de IA para producao. Ativar para: implementar RAG, criar pipeline de embeddings, Pinecone/Chroma/pgvector, fine-tuning, prompt engineering, reducao de custos de LLM, evals, cache semantico, streaming, agents.

#### Imported: How It Works

> A diferenca entre um prototipo de IA e um produto de IA e operabilidade.
> LLM-Ops e a engenharia que torna IA confiavel, escalavel e economica.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @llm-ops to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/llm-ops/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/llm-ops/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @llm-ops using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: Best Practices

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/llm-ops`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Pipeline De Indexacao

from anthropic import Anthropic
    import chromadb

    client = Anthropic()
    chroma = chromadb.PersistentClient(path="./chroma_db")

    def chunk_text(text, chunk_size=500, overlap=50):
        words = text.split()
        chunks = []
        for i in range(0, len(words), chunk_size - overlap):
            chunk = " ".join(words[i:i + chunk_size])
            if chunk: chunks.append(chunk)
        return chunks

    def index_document(doc_id, content_text, metadata=None):
        chunks = chunk_text(content_text)
        ids = [f"{doc_id}_chunk_{i}" for i in range(len(chunks))]
        collection.upsert(ids=ids, documents=chunks)
        return len(chunks)

#### Imported: Arquitetura Rag Completa

[Documentos] -> [Chunking] -> [Embeddings] -> [Vector DB]
                                                      |
    [Query] -> [Embed query] -> [Semantic Search] -> [Top K chunks]
                                                          |
                                           [LLM + Context] -> [Resposta]

#### Imported: Pipeline De Query Com Rag

def rag_query(query, top_k=5, system=None):
        results = collection.query(
            query_texts=[query], n_results=top_k,
            include=["documents", "metadatas", "distances"])
        context_parts = []
        for doc, meta, dist in zip(results["documents"][0],
                                    results["metadatas"][0],
                                    results["distances"][0]):
            if dist < 1.5:
                src = meta.get("source", "doc")
                context_parts.append(f"[Fonte: {src}]
{doc}")
        context = "

---

".join(context_parts)
        response = client.messages.create(
            model="claude-opus-4-20250805", max_tokens=1024,
            system=system or "Responda baseado no contexto.",
            messages=[{"role": "user", "content": f"Contexto:
{context}

{query}"}])
        return response.content[0].text

---

#### Imported: Escolha Do Vector Db

| DB | Melhor Para | Hosting | Custo |
|----|------------|---------|-------|
| Chroma | Desenvolvimento, local | Self-hosted | Gratis |
| pgvector | Ja usa PostgreSQL | Self/Cloud | Gratis |
| Pinecone | Producao gerenciada | Cloud | USD 70+/mes |
| Weaviate | Multi-modal | Self/Cloud | Gratis+ |
| Qdrant | Alta performance | Self/Cloud | Gratis+ |

#### Imported: Pgvector

CREATE EXTENSION IF NOT EXISTS vector;
    CREATE TABLE knowledge_embeddings (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        content TEXT NOT NULL,
        embedding vector(1536),
        metadata JSONB,
        created_at TIMESTAMPTZ DEFAULT NOW()
    );
    CREATE INDEX ON knowledge_embeddings
    USING ivfflat (embedding vector_cosine_ops) WITH (lists = 100);
    SELECT content, 1 - (embedding <=> QUERY_VECTOR) AS similarity
    FROM knowledge_embeddings ORDER BY similarity DESC LIMIT 5;

---

#### Imported: Estrutura De Prompt De Elite

Componentes do system prompt Auri:

- Identidade: Nome (Auri), Tom (Natural, caloroso, direto), Plataforma (Amazon Alexa)
- Regras: Maximo 3 paragrafos curtos, sem markdown, linguagem conversacional
- Capacidades: analise de negocios, conselho baseado em dados, criatividade
- Limitacoes: sem internet tempo real, sem transacoes financeiras
- Personalizacao: {user_name}, {user_preferences}, {relevant_history}

#### Imported: Chain-Of-Thought

def cot_analysis(problem: str) -> str:
        steps = [
            "1. O que exatamente esta sendo pedido?",
            "2. Que informacoes sao criticas para resolver?",
            "3. Quais abordagens possiveis existem?",
            "4. Qual abordagem e melhor e por que?",
            "5. Quais riscos ou limitacoes existem?",
        ]
        prompt = f"Analise passo a passo:

PROBLEMA: {problem}

"
        prompt += "
".join(steps) + "

Resposta final (concisa, para voz):"
        return call_claude(prompt)

---

#### Imported: Cache Semantico

class SemanticCache:
        def __init__(self, similarity_threshold=0.95):
            self.threshold = similarity_threshold
            self.cache = {}

        def get_cached(self, query, embedding):
            for cached_emb, (response, _) in self.cache.items():
                if cosine_similarity(embedding, cached_emb) >= self.threshold:
                    return response
            return None

        def set_cache(self, query, embedding, response):
            self.cache[tuple(embedding)] = (response, query)

#### Imported: Estimativa De Custos Claude

PRICING = {
        "claude-opus-4-20250805": {"input": 15.00, "output": 75.00},
        "claude-sonnet-4-5": {"input": 3.00, "output": 15.00},
        "claude-haiku-3-5": {"input": 0.80, "output": 4.00},
    }

    def estimate_monthly_cost(model, avg_input, avg_output, req_per_day):
        p = PRICING[model]
        daily = (avg_input + avg_output) * req_per_day / 1e6
        monthly = daily * p["input"] * 30
        return {"model": model, "monthly_cost": "USD %.2f" % monthly}

---

#### Imported: Framework De Avaliacao

from anthropic import Anthropic
    client = Anthropic()

    def evaluate_response(question, expected, actual, criteria):
        criteria_text = "
".join(f"- {c}" for c in criteria)
        eval_prompt = (
            f"Avalie a resposta do assistente de IA.

"
            f"PERGUNTA: {question}
RESPOSTA ESPERADA: {expected}
"
            f"RESPOSTA ATUAL: {actual}

Criterios:
{criteria_text}

"
            "Nota 0-10 e justificativa para cada criterio. Formato JSON."
        )
        response = client.messages.create(
            model="claude-haiku-3-5", max_tokens=1024,
            messages=[{"role": "user", "content": eval_prompt}]
        )
        import json
        return json.loads(response.content[0].text)

    AURI_EVALS = [
        {
            "question": "Quais sao os principais riscos de abrir startup agora?",
            "criteria": ["precisao_factual", "relevancia", "clareza_para_voz"]
        },
    ]

---

#### Imported: 6. Comandos

| Comando | Acao |
|---------|------|
| /rag-setup | Configura pipeline RAG completo |
| /embed-docs | Indexa documentos no vector DB |
| /prompt-optimize | Otimiza prompt para qualidade e custo |
| /cost-estimate | Estima custo mensal do LLM |
| /eval-run | Roda suite de evals de qualidade |
| /cache-setup | Configura cache semantico |
| /model-select | Escolhe modelo ideal para o caso de uso |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

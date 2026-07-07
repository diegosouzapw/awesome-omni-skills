# Resultados da avaliação de retrieval

Números reais gerados por `node tools/scripts/eval_search.js` contra o catálogo de
produção (`dist/catalog.db`, SQLite/FTS5, **4715 skills**), sem catálogo injetado
(SQL real: BM25 / porter / trigram). Reproduza com `npm run eval:search`.

- **Data:** 2026-07-07
- **sampleSize (known-item):** 196 skills (amostragem determinística: passo por id ordenado, sem `Math.random`)
- **golden set:** 28 queries curadas (`tools/eval/golden-queries.json`)
- **ks:** 1, 3, 5, 10
- **tolerância do gate:** 0.03

## Golden set curado (query → substrings de id esperadas)

| métrica     | valor  |
| ----------- | ------ |
| recall@1    | 0.9643 |
| recall@3    | 1.0000 |
| recall@5    | 1.0000 |
| recall@10   | 1.0000 |
| MRR         | 0.9762 |

O golden mede queries de alto sinal (domínios/tecnologias). Resultado forte:
quase todas as queries acham um id relevante já no top-1, e todas dentro do top-3.

## Known-item (query derivada do display_name → o próprio id)

| métrica     | valor  |
| ----------- | ------ |
| recall@1    | 0.2755 |
| recall@3    | 0.7398 |
| recall@5    | 0.9031 |
| recall@10   | 0.9592 |
| MRR         | 0.5266 |

### Achado sobre qualidade de busca

O `recall@10` de known-item é saudável (**0.96**), mas o `recall@1` é baixo (**0.28**).
Isso é um achado legítimo, não um bug do harness: muitas skills compartilham
`display_name` quase idêntico entre **variantes e famílias** (ex.: `kubernetes-architect`,
`kubernetes-architect-v2`, `kubernetes-architect-v3`, `kubernetes-architect-v3--omni`).
Ao buscar pelos tokens do nome, o id específico da skill amostrada compete com seus
irmãos de família, então frequentemente ele não fica em 1º — mas aparece dentro do
top-10. Ou seja, a busca recupera o *cluster* certo com alta confiabilidade; a
granularidade de ranking entre variantes quase-duplicadas é o ponto fraco. Fica
registrado como baseline honesto para tratamento futuro (ex.: desduplicar por família
no ranking ou penalizar variantes redundantes).

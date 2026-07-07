# Relatório de Análise — awesome-omni-skills (v0.12.9)

Data: 2026-07-06 · Escopo: saúde geral, arquitetura, funcionalidade, cobertura da proposta de busca ("RAG"), bugs, gaps, boas práticas 2026 (com pesquisa na internet) e inventário de tecnologias/métodos de retrieval.

---

## 1. Veredito executivo

| Dimensão | Avaliação |
|---|---|
| Saúde geral | 🟡 **Funcional, mas com um defeito estrutural central** |
| Arquitetura | 🟢 Boa (camada única `catalog-core`, fronteiras limpas, build determinístico) |
| Funcionalidade | 🟡 Suíte e2e verde, validação Python 0 erros, CLI funciona — **mas em modo Memory, e `find ""` trava o processo** |
| Cobertura da proposta | 🔴 **O coração da proposta (SQLite FTS5/BM25) é código morto em produção** |
| Boas práticas 2026 | 🟡 Escolha lexical (BM25) é validada pelo estado da prática; faltam avaliação de retrieval, snippets/scores no MCP e migração de driver |
| Segurança | 🟡 Path traversal muito bem defendido; API HTTP e A2A com gaps de DoS/governança |

**Achado nº 1 (crítico):** todo entry point público injeta o `catalog.json` inteiro no adapter (`packages/catalog-core/src/index.js:667`), e o `SQLiteSearchAdapter.list()` curto-circuita para o scorer em memória sempre que há catálogo carregado (`SQLiteSearchAdapter.js:443-445`). Resultado: **BM25, porter, trigram e prefix index nunca executam na CLI, API, MCP ou A2A** — as queries de texto rodam o mesmo loop O(N) `scoreTextMatch` que o plano se propôs a substituir, e o rótulo "SQLite FTS5" exibido ao usuário é enganoso (`catalog-runtime.js:9`). Os testes de "paridade" mascaram isso porque também injetam o catálogo (`sqlite-adapter.spec.js:174`); só o `benchmark_search.js:163` exercita o SQL real.

---

## 2. Tecnologias usadas no projeto

- **Runtime/monorepo:** Node ≥22, npm workspaces, ESM em todos os pacotes, 7 pacotes (`catalog-core`, `cli`, `i18n-runtime`, `install-targets`, `server-api`, `server-mcp`, `server-a2a`).
- **Busca/armazenamento:** `better-sqlite3` ^12.8 (FTS5) no catálogo; `node:sqlite` (built-in experimental) no store do A2A — **dois drivers SQLite no mesmo repo**.
- **Servidores:** Express 5 (API read-only :3333), MCP SDK (stdio/stream/SSE) com validação zod, A2A JSON-RPC (:3335), middleware compartilhado `http-runtime.js` (token bucket, bearer/api-key, allowlist IP via `net.BlockList`, CORS, audit log).
- **TUI/CLI:** Ink (React para terminal), `ui.mjs` 2515 linhas.
- **Pipeline de build (Python):** `validate_skills.py` + `skill_metadata.py` (scanner de segurança regex, scores), `generate_index.py`, `build_catalog_db.js`, i18n em 33 locales, arquivos reproduzíveis (`SOURCE_DATE_EPOCH`), gates `*:check` + `git diff --exit-code`.
- **Testes:** vitest por workspace (coverage gate 85/80 só no catalog-core), suíte legada `run_tests.js` (114 KB), testes TUI com frame-wait.

## 3. Métodos de retrieval ("RAG") usados

O sistema é **100% lexical — não há RAG no sentido estrito**: nenhum embedding, vetor, busca semântica, reranker neural, query rewriting ou snippet/citação (`snippet()`/`highlight()` do FTS5 não são usados).

**Caminho SQL (projetado, hoje morto em produção):**
- FTS5 dual-table: `skills_fts` com tokenizer `porter unicode61 remove_diacritics 2`, `prefix='2 3'`; `skills_trigram` com tokenizer `trigram` para fuzzy/substring (`build_catalog_db.js:102-123`).
- Cadeia de fallback: porter FTS → trigram (OR de 3-grams) → `LIKE %q%` (`SQLiteSearchAdapter.js:448-474`).
- Ranking: score aditivo custom por `CASE` (exato=10/8, contém=3, +4 tool, +3 categoria) + BM25 como desempate, com pool de rerank limitado (`candidateLimit = max(250, offset+limit*10)`).
- Tabelas external-content reconstruídas via `rebuild`/`optimize` (correto para bundle read-only).

**Caminho em memória (o que roda de fato em produção):**
- `scoreTextMatch`/`scoreSkill` (`search-utils.js:80-187`): match exato=10/8, substring=3, fuzzy por Levenshtein=1 para tokens ≥5 chars, ordenação por score.
- Agrupamento por família pós-hoc em `searchFamilies` (`index.js:380-429`).
- Seleção automática de adapter: SQLite se `catalog.db` existe e o schema valida, senão Memory, com fallback gracioso em qualquer falha de init (`createSearchAdapter.js:43-58`).

---

## 4. Cobertura da proposta

### 4.1 `_tasks/new-search/PLAN.md` (SQLite FTS5 Bundle)

| Item do plano | Status | Evidência |
|---|---|---|
| Driver `better-sqlite3` readonly síncrono | ✅ Implementado | `SQLiteSearchAdapter.js:62-64` |
| Tokenizer porter+unicode61, prefix '2 3' | ⚠️ Parcial | correto, mas com `detail=none, columnsize=0` não documentados (`build_catalog_db.js:110-111`) |
| FTS com colunas id, display_name, description, **tags, category** | ❌ Desvia | só 3 colunas indexadas; **tags e category ficaram fora** (`build_catalog_db.js:103-105`) |
| Pesos BM25 10/5/3/2/1 | ❌ Desvia e inerte | `bm25(skills_fts, 12, 9, 7)` (`SQLiteSearchAdapter.js:453`) e `detail=none` anula pesos por coluna |
| Coluna `raw_json` | ❌ Não existe | reconstrução via allowlist `hydrateSkillRow` (`:100-139`) |
| SearchAdapter (Strategy + DI) + Memory fallback | ✅ Implementado | `SearchAdapter.js:23-49`, `createSearchAdapter.js:35-59` |
| Fallback porter→trigram→LIKE | ⚠️ Existe, mas inalcançável | curto-circuito em `:443` |
| Fuzzy "kuberntes"→kubernetes | ⚠️ Funciona (via Levenshtein em memória); trigram nunca roda | smoke test confirmou |
| <50ms @ 200k, <80MB RAM | ❌ Não atingido | `react component` 1.151ms, `pipeli*` 353ms, `kuberntes` 700ms; build 11,45s > 10s (BENCHMARK-RESULTS.md); e produção usa o caminho em memória de qualquer forma |
| Testes existentes passam | ✅ | e2e verde |

### 4.2 `_tasks/ajustes-finais/TASK-04` (busca por família/variante) — marcada "completed"

| Saída exigida | Status |
|---|---|
| `find foo` mostra famílias por padrão | ✅ (`cli.js:1165,1405`) |
| `find foo --show-variants` | ❌ **Não implementado** — flag não existe em `packages/cli/src/` |
| `install --skill <family> --variant omni` + compat id concreto | ✅ (`install.js:89-167`, `cli.js:958-981`) |
| API expõe famílias / variantes | ⚠️ Parcial — `?group=families` e GET family existem; sem endpoint dedicado de variantes |
| Busca ranqueia famílias | ⚠️ Dedupe pós-hoc, herda posição da primeira variante |
| Variante default influencia ordenação primária | ❌ Só no branch de query vazia (`index.js:402-415`) |

---

## 5. Bugs confirmados

1. **[Crítico] FTS5 morto em produção** — `index.js:667` + `SQLiteSearchAdapter.js:443`. Toda a promessa de performance do plano é estruturalmente inatingível; rótulo de modo mente para o operador.
2. **[Crítico, reproduzido em runtime] `find ""` trava com ~96% CPU** — o branch de query vazia de `searchFamilies` (`index.js:401-415`) ordena 4.715 famílias com comparador que chama `resolveSkillSelection()` → `loadCatalog()` → **re-parse não cacheado do `catalog.json` de 13,9 MB a cada comparação** (~100k+ parses). Afeta ambos os modos. Não retornou em 4,5+ min.
3. **[Alto] `detail=none`/`columnsize=0` anulam os pesos BM25 por coluna** — ranking BM25 vira decorativo (`build_catalog_db.js:110-122`).
4. **[Alto] tags/category fora do índice FTS/trigram** — query que só existe em tag cai no LIKE full-scan lento (`build_catalog_db.js:103-117`).
5. **[Alto] `hydrateSkillRow` não emite `family_id`** — se o caminho SQL fosse ativado, a busca por família retornaria vazia (`SQLiteSearchAdapter.js:100-139` vs `index.js:388-390`).
6. **[Médio] `recommend()` no SQLite carrega TODAS as linhas sem LIMIT** e pontua em JS (`SQLiteSearchAdapter.js:490-528`) — O(N) por chamada.
7. **[Médio, defeito de teste] Specs "SQLite" e "paridade" nunca exercitam o SQL** — todos injetam catálogo; paridade é trivialmente verdadeira e os bugs 1-5 passam no CI (`sqlite-search.spec.js:127-151`, `sqlite-adapter.spec.js:174`).
8. **[Segurança/DoS] API HTTP sem teto de `limit`** (`search-utils.js:1-6` + `server-api/src/server.js:152,321`) — `?limit=100000` devolve o catálogo inteiro; `GET /v1/compare` aceita ids ilimitados com leitura de disco por id (`server.js:326-331`). O MCP tem caps zod (`.max(50)`), a API e o A2A não.
9. **[Segurança] A2A sem governança nenhuma** — sem auth, rate-limit, CORS ou allowlist (`server-a2a/src/server.js:12`); store em memória cresce sem eviction.
10. **[Performance] Servidores re-parseiam ~14 MB de catálogo e reabrem o SQLite a cada request** (`index.js:667,681-683`).
11. **[Docs] `ARCHITECTURE.md:128` afirma rate limit "desabilitado por padrão"** — na verdade há DOIS limiters ativos por padrão (token bucket 120/60s em `http-runtime.js:131,156` + express-rate-limit 1000/15min); e `ARCHITECTURE.md:92-94` sobre "FTS5 at scale" é enganoso (item 1).
12. **[Flaky] `test:legacy`/TUI** — timeouts de frame-wait intermitentes (`tui_tests.mjs:744`); `tui_pty_tests.py` requer `pexpect` ausente.
13. **[Ambiente] better-sqlite3 ABI 127 (Node 22) vs Node 24 local** — 5 testes do catalog-core falham por isso nesta máquina; o DB em si está saudável (4.715 skills, FTS responde).

## 6. Gaps de design

- Dois motores de scoring divergentes (JS vs SQL) mantidos à mão, com paridade não verificada de verdade.
- Benchmark mede um caminho que a produção não usa — números de heap/latência não refletem o runtime real.
- Ranking de família é dedupe pós-busca, não scoring de família; variante default não influencia rank com query.
- Sem `raw_json`: campo novo no manifest some silenciosamente dos resultados SQL.
- `server-mcp` depende do pacote `server-api` inteiro só para importar `http-runtime` — middleware deveria estar num pacote neutro.
- `isPathInside` reimplementado em 3 pacotes; guard de DB path duplicado dentro do próprio catalog-core.
- **Zero testes unitários** em `server-mcp` (sidecar de 2.191 linhas) e `server-a2a` (runtime de 1.408 linhas); server-api com 1 spec.
- Scanner de segurança de skills é regex linha-a-linha (`skill_metadata.py:1055-1068`) — detecção de prompt injection é trivialmente evadível (multi-linha, paráfrase, homoglifos); ClamAV/VirusTotal só no CI de release.
- Arquivos gigantes: `ui.mjs` 2.515, `cli.js` 2.255, `local-sidecar.js` 2.191, `skill_metadata.py` 2.855 linhas.

## 7. Boas práticas 2026 (pesquisa na internet)

- **BM25 puro é defensável para este caso de uso.** O Tool Search Tool da Anthropic (nov/2025) usa exatamente BM25/regex — sem embeddings — para agentes buscarem catálogos de tools/skills (anthropic.com/engineering/advanced-tool-use). Benchmark 2026 (arxiv 2604.01733) mostra BM25 ≥ embeddings em corpora ricos em terminologia; híbrido via RRF ganha +2-8pp de recall em queries parafraseadas.
- **Gap nº 1 vs 2026: avaliação de retrieval.** O consenso é golden set (~100 queries com ground truth) + recall@k/MRR/nDCG como gate de regressão. O projeto não tem nenhuma métrica de qualidade de busca — só latência.
- **Sinonímia:** o único gap real do lexical puro ("help me make slides" → skill de apresentação). Mitigação barata: tabela de sinônimos/expansão de query; opção futura: camada híbrida opcional com `sqlite-vec` (padrão canônico: FTS5 + vec0 no mesmo arquivo, fusão keyword-first ou RRF — alexgarcia.xyz/blog/2024/sqlite-vec-hybrid-search).
- **Reranker cross-encoder é overkill** para docs curtos de campo único; no padrão agentic-RAG 2026, o próprio agente rerankeia — o tool deve devolver top-N com **scores e snippets** e sinal explícito de "sem bom match".
- **MCP 2026 (anthropic.com/engineering/writing-tools-for-agents):** poucos tools orientados a outcome, descrições com sintaxe de query e when-to-use, `limit` default + `has_more`/cursor, payload = id + nome + snippet + score. O MCP do projeto tem caps zod bons, mas não retorna snippet/score nem sinaliza vazio explicitamente.
- **Driver:** consenso 2026 (incl. discussão dos mantenedores do better-sqlite3, github.com/WiseLibs/better-sqlite3/discussions/1245): para CLIs novas, **`node:sqlite` built-in (Node ≥22.13)** e better-sqlite3 só se precisar de feature ausente. O ABI churn que este projeto já sofre (ABI 127 vs Node 24) é o argumento clássico. Verificar disponibilidade do tokenizer trigram no build FTS5 do Node antes de migrar.

## 8. Pontos genuinamente bem feitos

1. Camada única `catalog-core` consumida pelas 4 superfícies — a promessa arquitetural central se sustenta.
2. Defesa em profundidade contra path traversal (4 camadas independentes: `FileSystemAdapter.js:9-20`, `index.js:164-174`, `server-api/server.js:83-107` + `dotfiles: deny`, allowlist do sidecar `local-sidecar.js:659-718`).
3. Validação MCP com zod + caps sensatos + annotations `readOnlyHint`/`destructiveHint`; operações destrutivas default dry-run.
4. Degradação graciosa SQLite→Memory, nunca crash.
5. Build determinístico e auto-verificável (archives reproduzíveis, gates `*:check`, pre-commit).
6. Documentação honesta sobre limitações (raro e valioso) — apesar dos 2 pontos imprecisos citados.
7. Nenhuma injeção SQL/FTS encontrada: MATCH só com tokens sanitizados, LIKE/filtros com bind params.

## 9. Melhorias recomendadas (priorizadas)

1. **Ativar o FTS5 de verdade:** parar de injetar o catálogo eager em `index.js:667` (ou remover o curto-circuito de `:443`), corrigir `family_id` no `hydrateSkillRow`, e só então re-medir benchmarks. Alternativa honesta: deletar o caminho SQL e corrigir docs/rótulo.
2. **Corrigir o hang de `find ""`:** cachear o catálogo (memoizar `loadCatalog`) e tirar `resolveSkillSelection` de dentro do comparador de sort.
3. **Hardening da API/A2A:** teto de `limit` (ex.: 100) em `parseSearchOptions`, cap de ids no `/v1/compare`, governança (ou lock localhost-only documentado) no A2A.
4. **Cachear catálogo + conexão SQLite nos servidores** (hoje 14 MB parse + open/close por request).
5. **Reconstruir o DB conforme o plano:** `detail` completo (restaurar pesos BM25), indexar tags/category, adicionar `raw_json`, `LIMIT` no `recommend()`.
6. **Golden query set + recall@k/MRR como gate de regressão** (maior gap vs 2026).
7. **Testes que exercitem o SQL de verdade** (construir adapter sem catálogo) + testes unitários para server-mcp/server-a2a.
8. **MCP:** snippet + score + `has_more` nos resultados; semântica explícita de resultado vazio.
9. **Migrar (ou dual-support) para `node:sqlite`** e unificar os dois drivers.
10. Implementar `--show-variants` e boost de variante default no ranking (fechar TASK-04 de fato); extrair `http-runtime` e `isPathInside` para pacote compartilhado; corrigir `ARCHITECTURE.md` (rate limit e FTS5).

---

*Gerado por auditoria multi-agente (4 agentes: subsistema de busca, arquitetura, validação funcional em runtime, pesquisa web) em 2026-07-06. Validação executada sem mutação do repositório (git status limpo antes e depois).*

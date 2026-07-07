# Avaliação de Retrieval (Golden Set) — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development. Steps use checkbox (`- [ ]`).

**Goal:** Introduzir uma avaliação de qualidade de busca reproduzível e barata (recall@k e MRR) como gate de regressão, e tornar os resultados do MCP auditáveis (score + snippet + sinal explícito de "sem match").

**Architecture:** Um harness Node (`tools/scripts/eval_search.js`) roda dois conjuntos de queries contra o adapter real (SQLite FTS5, sem catálogo injetado): (1) um **golden set curado** versionado (`tools/eval/golden-queries.json`) com query→ids-esperados; (2) **known-item** derivado deterministicamente do catálogo (para cada skill amostrada por id ordenado, uma query dos seus metadados deve recuperar o próprio id no top-k). Reporta recall@k/MRR e compara contra um baseline versionado (`tools/eval/baseline.json`); `npm run eval:search` falha se cair abaixo do baseline (menos uma tolerância). Não altera o pipeline de build.

**Tech Stack:** Node 22/24, `@omni-skills/catalog-core` (createSearchAdapter/getCatalogPaths), vitest, MCP SDK.

**Pré-requisito:** FTS5 ativo (já feito na branch base) e `dist/catalog.db` presente. `npm rebuild better-sqlite3` se ABI reclamar.

---

## Fase A — Métricas puras (sem I/O)

### Task A.1: Funções de métrica recall@k e MRR

**Files:**
- Create: `tools/eval/metrics.js`
- Test: `tools/eval/__tests__/metrics.spec.js` (novo vitest project) OU `packages/catalog-core/__tests__/` se preferirem reusar um project existente — decisão: criar um vitest project `eval` novo.

- [ ] **Step 1: Teste que falha** em `tools/eval/__tests__/metrics.spec.js`:
```javascript
import { describe, expect, test } from "vitest";
import { recallAtK, reciprocalRank, aggregate } from "../metrics.js";

describe("retrieval metrics", () => {
  test("recallAtK: relevante presente dentro de k", () => {
    expect(recallAtK(["a", "b", "c"], new Set(["c"]), 3)).toBe(1);
    expect(recallAtK(["a", "b", "c"], new Set(["c"]), 2)).toBe(0);
    expect(recallAtK(["a", "b"], new Set(["a", "x"]), 5)).toBe(0.5); // 1 de 2 relevantes achados
  });
  test("reciprocalRank: 1/posição do primeiro relevante", () => {
    expect(reciprocalRank(["a", "b", "c"], new Set(["b"]))).toBeCloseTo(0.5);
    expect(reciprocalRank(["a", "b"], new Set(["z"]))).toBe(0);
  });
  test("aggregate: média de recall@k e MRR sobre casos", () => {
    const cases = [
      { retrieved: ["x", "a"], relevant: new Set(["a"]) },
      { retrieved: ["a"], relevant: new Set(["a"]) },
    ];
    const r = aggregate(cases, [1, 5]);
    expect(r.mrr).toBeCloseTo((0.5 + 1) / 2);
    expect(r["recall@1"]).toBeCloseTo(0.5);
    expect(r["recall@5"]).toBeCloseTo(1);
  });
});
```

- [ ] **Step 2: Rodar e ver falhar** — `npx vitest run tools/eval/__tests__/metrics.spec.js` (após wiring do project no Step abaixo). Expected: módulo inexistente.

- [ ] **Step 3: Implementar** `tools/eval/metrics.js`:
```javascript
export function recallAtK(retrieved, relevant, k) {
  if (relevant.size === 0) return 0;
  const topK = retrieved.slice(0, k);
  let hits = 0;
  for (const id of relevant) if (topK.includes(id)) hits += 1;
  return hits / relevant.size;
}

export function reciprocalRank(retrieved, relevant) {
  for (let i = 0; i < retrieved.length; i += 1) {
    if (relevant.has(retrieved[i])) return 1 / (i + 1);
  }
  return 0;
}

export function aggregate(cases, ks = [1, 3, 5, 10]) {
  const out = { count: cases.length, mrr: 0 };
  for (const k of ks) out[`recall@${k}`] = 0;
  for (const c of cases) {
    out.mrr += reciprocalRank(c.retrieved, c.relevant);
    for (const k of ks) out[`recall@${k}`] += recallAtK(c.retrieved, c.relevant, k);
  }
  const n = cases.length || 1;
  out.mrr /= n;
  for (const k of ks) out[`recall@${k}`] /= n;
  return out;
}
```

- [ ] **Step 4: Wiring do vitest project** — criar `tools/eval/vitest.config.js` (name "eval", include `__tests__/**/*.spec.js`) e adicioná-lo aos dois configs raiz (`vitest.config.js` e `vitest.workspace.js`). Rodar e ver PASSAR.

- [ ] **Step 5: Commit** `test(eval): metricas recall@k e MRR`

---

## Fase B — Golden set curado

### Task B.1: Golden set versionado (query → substrings de id esperados)

**Files:** Create `tools/eval/golden-queries.json`, `tools/eval/load-golden.js`, test.

Racional: ids concretos podem sair do catálogo; então o golden usa **substrings de id esperados** (ex.: query "kubernetes" espera que algum id contendo "kube" apareça no top-k). Isso é robusto a evolução do catálogo e ainda mede relevância.

- [ ] **Step 1: Teste que falha** — `tools/eval/__tests__/golden.spec.js`: carrega o golden, valida shape (`queries: [{ q, expect_id_substrings: [...] }]`), e que há ≥ 20 queries.

- [ ] **Step 2–3:** criar `golden-queries.json` com ~25 queries de alto sinal derivadas de categorias/domínios reais do catálogo (o executor deve inspecionar `dist/catalog.json` para escolher termos com cobertura garantida — ex.: "kubernetes", "docker", "terraform", "react", "python data", "security audit", "pdf", "sql", "prompt engineering"…), cada uma com 1–3 substrings de id esperadas que comprovadamente existem (verificar via grep no catálogo). `load-golden.js` exporta `loadGolden(path)`.

- [ ] **Step 4:** ver passar.
- [ ] **Step 5: Commit** `feat(eval): golden set curado de queries de busca`

---

## Fase C — Harness e known-item

### Task C.1: `eval_search.js` — roda golden + known-item contra o adapter real

**Files:** Create `tools/scripts/eval_search.js`, test `tools/eval/__tests__/eval-search.spec.js`.

- [ ] **Step 1: Teste que falha** — o teste constrói um catálogo temporário + `catalog.db` (via `buildCatalogDb`) com skills conhecidas, e chama uma função exportada `runEval({ repoRoot, sampleSize, ks })` de `eval_search.js`, asserindo que:
  - para uma query known-item derivada do nome de uma skill, o id dela aparece no top-k (recall@k = 1);
  - o retorno tem `golden` e `knownItem` com `mrr`/`recall@k`.
(Use um golden inline pequeno no teste, não o de produção.)

- [ ] **Step 2: Ver falhar.**

- [ ] **Step 3: Implementar** `eval_search.js`:
  - `deriveKnownItemQuery(skill)`: normaliza `display_name` (remove stopwords triviais), retorna os 3–5 tokens mais significativos.
  - `sampleSkills(catalog, sampleSize)`: ordena skills por id e pega um passo determinístico (`Math.floor(n/sampleSize)`), garantindo reprodutibilidade sem `Math.random`.
  - `runEval({ repoRoot, sampleSize=200, ks=[1,3,5,10], goldenPath })`: cria o adapter via `createSearchAdapter({ ...getCatalogPaths({repoRoot}), searchMode: "sqlite" })` (SEM injetar catalog → SQL real). Para cada query, `adapter.search({ query, limit: max(ks) })`, coleta ids, calcula métricas. Retorna `{ golden: aggregate(...), knownItem: aggregate(...) }`.
  - CLI: quando executado direto (`main-guard`), imprime o relatório e escreve JSON opcional (`--output-json`).

- [ ] **Step 4: Ver passar.**
- [ ] **Step 5: Commit** `feat(eval): harness eval_search (golden + known-item) sobre o SQL real`

### Task C.2: `npm run eval:search` + baseline + gate

**Files:** Modify `package.json`; Create `tools/eval/baseline.json`, `tools/scripts/eval_gate.js`, test.

- [ ] **Step 1: Teste que falha** — `eval_gate.js` exporta `checkAgainstBaseline(result, baseline, tolerance)` que retorna `{ ok, failures }`; teste cobre: passa quando ≥ baseline−tolerância; falha quando abaixo.
- [ ] **Step 2–3:** implementar; rodar `eval_search.js` uma vez para gerar números reais e gravar `baseline.json` (com uma tolerância, ex.: 0.03). `package.json`: `"eval:search": "node tools/scripts/eval_search.js --gate"`. Com `--gate`, o script compara contra baseline e sai !=0 se abaixo.
- [ ] **Step 4: Ver passar** + rodar `npm run eval:search` de verdade (deve passar contra o baseline recém-gerado). Registrar os números reais no relatório.
- [ ] **Step 5: Commit** `feat(eval): npm run eval:search com gate de baseline`

---

## Fase D — MCP: score + snippet + sinal de vazio

### Task D.1: search_skills do MCP retorna score/snippet e sinaliza vazio

**Files:** Modify `packages/server-mcp/src/server.js` (tool `search_skills`); Test `packages/server-mcp/__tests__/search-output.spec.js`.

- [ ] **Step 1: Teste que falha** — invocar o handler do tool `search_skills` (via `server._registeredTools`, como no `server-tool-schemas.spec.js`) com uma query que casa e uma que não casa; asserir que: cada resultado carrega um `score` numérico e um `snippet` (trecho da description); e que uma query sem match retorna um payload com um sinal explícito (ex.: `{ matches: [], no_match: true, message: "..." }`), não uma lista vazia silenciosa.
- [ ] **Step 2: Ver falhar.**
- [ ] **Step 3: Implementar** — no handler do `search_skills`, mapear resultados incluindo `score` (da relevância do adapter; se ausente, derivar de posição) e `snippet` (primeiros ~160 chars da description ao redor do primeiro termo casado). Quando `results.length === 0`, retornar o objeto com `no_match: true` e uma mensagem orientando refinar a query. Preservar o shape existente dos campos já retornados.
- [ ] **Step 4: Ver passar** + `npx vitest run packages/server-mcp`.
- [ ] **Step 5: Commit** `feat(mcp): search_skills retorna score+snippet e sinaliza no_match`

---

## Fase E — Fecho

- [ ] **E.1:** Rodar `npx vitest run` (raiz) — tudo verde (novos projects `eval` incluídos).
- [ ] **E.2:** `npm run eval:search` passa contra o baseline. Registrar os números (recall@1/5/10, MRR) num `tools/eval/RESULTS.md`.
- [ ] **E.3:** NÃO rodar o build completo (não altera artefatos de dist). Abrir PR.

## Auto-revisão

- **Cobertura do objetivo:** golden set versionado (B) + recall@k/MRR (A) + gate `npm run eval:search` (C.2) + MCP score/snippet/no_match (D) — todos os critérios de aceite do sub-plano 7 mapeados.
- **Reprodutibilidade:** amostragem known-item é determinística (passo por id ordenado, sem `Math.random`); golden usa substrings de id (robusto à evolução do catálogo).
- **Sem placeholders:** cada task tem código real e comandos. Nomes consistentes: `recallAtK`, `reciprocalRank`, `aggregate`, `runEval`, `checkAgainstBaseline`, `loadGolden`.

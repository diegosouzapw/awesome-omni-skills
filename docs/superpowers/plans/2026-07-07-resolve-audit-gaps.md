# Resolução dos Gaps da Auditoria — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Fechar todos os gaps abertos do relatório de auditoria (`RELATORIO-ANALISE-2026-07-06.md`): ativar o caminho SQLite FTS5 em produção, completar a TASK-04 (família/variante), cachear catálogo nos servidores, cobrir testes faltantes, quitar débito estrutural, endurecer o scanner de segurança e introduzir avaliação de retrieval (golden set) — sem regressão e com build reprodutível.

**Architecture:** Monorepo npm workspaces (Node ≥22, ESM). Camada única `catalog-core` consumida por CLI/API/MCP/A2A. Busca via `SearchAdapter` (Memory ↔ SQLite FTS5). Pipeline de build determinístico (Python + Node) com pin de recência em `data/scoring-reference-epoch`. Ambiente local exige `npm rebuild better-sqlite3` (Node 24) antes de builds/SQLite.

**Tech Stack:** Node 22/24, better-sqlite3 (FTS5), Express 5, MCP SDK + zod, vitest, Python 3.12 (validação/scoring), Ink (TUI).

**Pré-requisito de ambiente (rodar UMA vez por sessão antes de qualquer task):**
```bash
cd /home/diegosouzapw/dev/ai/omni-skills
npm rebuild better-sqlite3
node -e "const D=require('better-sqlite3');new D(':memory:').exec('create virtual table t using fts5(x)');console.log('FTS5 OK')"
```

**Ordem das fases (por dependência e valor):**
0. Pontas soltas do trabalho anterior (rede de segurança) → 1. Ativar FTS5 → 2. TASK-04 → 3. Cache de catálogo → 4. Cobertura de testes → 5. Débito estrutural → 6. Scanner de segurança → 7. Avaliação de retrieval (2026).

**Nota de decomposição:** As fases 0–5 têm tarefas totalmente especificadas (TDD + código). As fases **6 (scanner)** e **7 (eval)**, e as sub-tarefas 5.4 (split de arquivos gigantes) e 5.5 (migração `node:sqlite`), são subsistemas grandes o suficiente para merecer seu **próprio passe de `writing-plans`** — este documento define objetivo, arquivos-alvo e critérios de aceite, e a task final de cada uma é "escrever o plano detalhado".

---

## Fase 0 — Pontas soltas (rede de segurança)

### Task 0.1: Rodar o teste Python de recência no CI

**Files:**
- Modify: `.github/workflows/validate.yml` (adicionar step após "Install python test dependencies")
- Verify: `tools/scripts/tests/test_skill_metadata_recency.py` (já existe)

- [ ] **Step 1: Ver o teste passar isolado (baseline)**

Run: `python3 -m unittest tools.scripts.tests.test_skill_metadata_recency -v` a partir da raiz do repo.
Expected: `Ran 2 tests ... OK`

- [ ] **Step 2: Adicionar step de unittest ao workflow**

Em `.github/workflows/validate.yml`, logo após o step `Install python test dependencies`, inserir:

```yaml
      - name: Run python unit tests
        run: python3 -m unittest discover -s tools/scripts/tests -p "test_*.py" -v
```

- [ ] **Step 3: Validar o YAML**

Run: `npx --yes js-yaml .github/workflows/validate.yml >/dev/null && echo OK`
Expected: `OK`

- [ ] **Step 4: Confirmar discovery local (mesmo comando do CI)**

Run: `python3 -m unittest discover -s tools/scripts/tests -p "test_*.py" -v`
Expected: coleta e passa `test_skill_metadata_recency` (2 testes). Nota: `tui_pty_tests.py` requer `pexpect`; se falhar por import, restringir o padrão para `-p "test_*.py"` já exclui `tui_*`. Confirmar que nenhum `tui_*` é coletado.

- [ ] **Step 5: Commit**

```bash
git add .github/workflows/validate.yml
git commit -m "ci: roda testes unitarios python no job validate"
```

### Task 0.2: Script de refresh intencional do pin de recência

**Files:**
- Modify: `package.json` (novo script `scores:refresh`)
- Create: `tools/scripts/refresh_scoring_epoch.py`
- Test: `tools/scripts/tests/test_refresh_scoring_epoch.py`

- [ ] **Step 1: Teste falhando**

```python
# tools/scripts/tests/test_refresh_scoring_epoch.py
import os, sys, tempfile, unittest
REPO_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", "..", ".."))
sys.path.insert(0, os.path.join(REPO_ROOT, "tools", "scripts"))
from refresh_scoring_epoch import write_epoch

class RefreshEpochTest(unittest.TestCase):
    def test_writes_integer_epoch_with_trailing_newline(self):
        with tempfile.TemporaryDirectory() as d:
            path = os.path.join(d, "scoring-reference-epoch")
            write_epoch(path, 1780377020)
            with open(path, encoding="utf-8") as fh:
                self.assertEqual(fh.read(), "1780377020\n")

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `python3 -m unittest tools.scripts.tests.test_refresh_scoring_epoch -v`
Expected: FAIL — `ModuleNotFoundError: No module named 'refresh_scoring_epoch'`

- [ ] **Step 3: Implementar**

```python
# tools/scripts/refresh_scoring_epoch.py
"""Bump data/scoring-reference-epoch to a chosen epoch (default: now).

Recency scores freeze at the pinned date for byte-reproducible builds; run this at
release time to intentionally refresh them, then rebuild and commit the artifacts.
"""
import os
import sys
from datetime import datetime, timezone

DEFAULT_PATH = os.path.join(
    os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
    "data",
    "scoring-reference-epoch",
)


def write_epoch(path: str, epoch: int) -> None:
    with open(path, "w", encoding="utf-8") as handle:
        handle.write(f"{int(epoch)}\n")


def main() -> None:
    epoch = int(sys.argv[1]) if len(sys.argv) > 1 else int(datetime.now(timezone.utc).timestamp())
    write_epoch(DEFAULT_PATH, epoch)
    print(f"scoring-reference-epoch = {epoch} ({datetime.fromtimestamp(epoch, tz=timezone.utc).isoformat()})")


if __name__ == "__main__":
    main()
```

- [ ] **Step 4: Rodar e ver passar**

Run: `python3 -m unittest tools.scripts.tests.test_refresh_scoring_epoch -v`
Expected: PASS

- [ ] **Step 5: Adicionar script npm**

Em `package.json`, seção `scripts`, adicionar:
```json
    "scores:refresh": "python3 tools/scripts/refresh_scoring_epoch.py && npm run build",
```

- [ ] **Step 6: Commit** (não rodar `scores:refresh` agora — só ao fazer release)

```bash
git add package.json tools/scripts/refresh_scoring_epoch.py tools/scripts/tests/test_refresh_scoring_epoch.py
git commit -m "chore: script scores:refresh para bumpar o pin de recencia em releases"
```

---

## Fase 1 — Ativar o SQLite FTS5 em produção

**Contexto:** hoje `index.js` (`createSearchAdapterContext`) sempre injeta `catalog: options.catalog || loadCatalog(options)`, e `SQLiteSearchAdapter.list()` curto-circuita para o scorer em memória quando `this.catalog?.skills` existe. O SQL (BM25/porter/trigram) só roda no benchmark. Além disso o schema tem `detail=none` (anula pesos BM25) e não indexa tags/category; `hydrateSkillRow` não emite `family_id`. Esta fase corrige o schema e libera o SQL de forma incremental e verificável.

**Files (visão geral):**
- Modify: `tools/scripts/build_catalog_db.js` (schema + insert)
- Modify: `packages/catalog-core/src/adapters/SQLiteSearchAdapter.js` (hydrate, bm25, list, recommend)
- Modify: `packages/catalog-core/src/index.js` (`createSearchAdapterContext`)
- Test: `packages/catalog-core/__tests__/sqlite-fts.spec.js` (novo), `sqlite-adapter.spec.js` (ajuste)

### Task 1.1: Schema — indexar tags/category, habilitar BM25 por coluna, adicionar family_id + raw_json

- [ ] **Step 1: Teste falhando (invariantes do schema)**

```javascript
// packages/catalog-core/__tests__/sqlite-fts.spec.js
import path from "node:path";
import fs from "node:fs";
import os from "node:os";
import { describe, expect, test, beforeAll, afterAll } from "vitest";
import { buildCatalogDb } from "../../../tools/scripts/build_catalog_db.js";
import Database from "better-sqlite3";

function fixtureCatalog() {
  return {
    generated_at: "2026-06-02T00:00:00.000Z",
    total_skills: 2,
    categories: ["devops"],
    skills: [
      { id: "kube-ops", slug: "kube-ops", display_name: "Kube Ops", description: "kubernetes cluster operations",
        category: "devops", raw_category: "devops", canonical_category: "devops",
        tags: ["governance", "kubernetes"], tools: ["cursor"], family_id: "kube", quality_score: 90 },
      { id: "kube-ops-v2", slug: "kube-ops-v2", display_name: "Kube Ops v2", description: "kubernetes ops",
        category: "devops", raw_category: "devops", canonical_category: "devops",
        tags: ["governance"], tools: ["cursor"], family_id: "kube", quality_score: 88 },
    ],
    families: [{ id: "kube", display_name: "Kube", default_skill_id: "kube-ops", variants: [] }],
  };
}

describe("catalog.db FTS schema", () => {
  let dir, dbPath, db;
  beforeAll(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), "fts-"));
    const catalogPath = path.join(dir, "catalog.json");
    fs.writeFileSync(catalogPath, JSON.stringify(fixtureCatalog()));
    dbPath = path.join(dir, "catalog.db");
    buildCatalogDb({ catalogPath, dbPath });
    db = new Database(dbPath, { readonly: true });
  });
  afterAll(() => { db?.close(); fs.rmSync(dir, { recursive: true, force: true }); });

  test("skills table carries family_id and raw_json", () => {
    const cols = db.prepare("PRAGMA table_info(skills)").all().map((c) => c.name);
    expect(cols).toContain("family_id");
    expect(cols).toContain("raw_json");
  });

  test("a tag-only term is matched by the porter FTS table", () => {
    const rows = db.prepare("SELECT id FROM skills_fts WHERE skills_fts MATCH 'governance'").all();
    expect(rows.length).toBeGreaterThan(0);
  });

  test("BM25 column weighting is active (detail not none)", () => {
    // With per-column detail, an id/name hit must outrank a tag-only hit.
    const ranked = db.prepare(
      "SELECT id, bm25(skills_fts, 10.0, 5.0, 3.0, 2.0, 1.0) AS s FROM skills_fts WHERE skills_fts MATCH 'kube' ORDER BY s"
    ).all();
    expect(ranked[0].id).toBe("kube-ops");
  });
});
```

- [ ] **Step 2: Rodar e ver falhar**

Run: `npx vitest run packages/catalog-core/__tests__/sqlite-fts.spec.js`
Expected: FAIL — `skills` sem `family_id`/`raw_json`; `skills_fts` não casa `governance` (tags fora do índice); `bm25` com 5 args falha ou não prioriza (schema tem 3 colunas / `detail=none`).

- [ ] **Step 3: Ajustar o schema em `build_catalog_db.js`**

No `CREATE TABLE skills (...)` adicionar as colunas (perto das demais):
```sql
      family_id TEXT,
      raw_json TEXT,
```
Substituir os dois `CREATE VIRTUAL TABLE` por (note: `tags`, `category` adicionadas; `detail=none`/`columnsize=0` removidos para reativar BM25 por coluna e normalização):
```sql
    CREATE VIRTUAL TABLE skills_fts USING fts5(
      id,
      display_name,
      description,
      tags,
      category,
      content='skills',
      content_rowid='rowid',
      tokenize='porter unicode61 remove_diacritics 2',
      prefix='2 3'
    );

    CREATE VIRTUAL TABLE skills_trigram USING fts5(
      display_name,
      description,
      tags,
      content='skills',
      content_rowid='rowid',
      tokenize='trigram'
    );
```
No `INSERT INTO skills (...)`: incluir `family_id` (de `skill.family_id`) e `raw_json` (`JSON.stringify(skill)`). Garantir que as colunas `tags`/`category` da tabela `skills` (fonte external-content) sejam texto pesquisável (as `tags` já são serializadas; para o FTS casar por token, popular a coluna `tags` do `skills` com um texto legível, ex.: `parseListValue(tags).join(' ')`, mantendo uma coluna separada `tags_json` para o payload se necessário). O `'rebuild'` do external-content deve rodar após popular `skills`.

- [ ] **Step 4: Rodar e ver passar**

Run: `npx vitest run packages/catalog-core/__tests__/sqlite-fts.spec.js`
Expected: PASS (3 testes)

- [ ] **Step 5: Commit**

```bash
git add tools/scripts/build_catalog_db.js packages/catalog-core/__tests__/sqlite-fts.spec.js
git commit -m "feat(db): indexa tags/category no FTS, reativa BM25 por coluna, adiciona family_id/raw_json"
```

### Task 1.2: `hydrateSkillRow` emite `family_id` e usa `raw_json` quando presente

- [ ] **Step 1: Teste falhando** — adicionar em `sqlite-fts.spec.js`:

```javascript
test("hydrated rows preserve family_id for family grouping", () => {
  const { SQLiteSearchAdapter } = require("../src/adapters/SQLiteSearchAdapter.js");
  const adapter = new SQLiteSearchAdapter({ databasePath: dbPath });
  adapter.init({ databasePath: dbPath });
  const { results } = adapter.search({ query: "kubernetes", searchMode: "sqlite" });
  adapter.close();
  expect(results.every((r) => typeof r.family_id === "string")).toBe(true);
});
```

- [ ] **Step 2: Ver falhar** — `family_id` é `undefined` (hydrate não emite).
Run: `npx vitest run packages/catalog-core/__tests__/sqlite-fts.spec.js -t family_id`

- [ ] **Step 3: Implementar** em `SQLiteSearchAdapter.js`, dentro de `hydrateSkillRow`, adicionar antes do `return`/no objeto:
```javascript
    family_id: row.family_id || null,
```
E incluir `family_id` em `buildSkillSelectColumns` (`${alias}.family_id AS family_id`). Onde houver `row.raw_json`, preferir `{ ...JSON.parse(row.raw_json), links: ... }` para não perder campos novos do manifest (fallback ao mapeamento atual se `raw_json` ausente).

- [ ] **Step 4: Ver passar** — Run o mesmo comando. Expected: PASS.

- [ ] **Step 5: Commit**
```bash
git add packages/catalog-core/src/adapters/SQLiteSearchAdapter.js
git commit -m "fix(sqlite): hydrata family_id e usa raw_json quando presente"
```

### Task 1.3: Corrigir pesos BM25 no adapter (5 colunas) conforme o plano new-search

- [ ] **Step 1: Teste falhando** — adicionar teste que verifica que match exato de id supera match só em descrição via a query SQL do adapter (usar `search({query, searchMode:'sqlite'})` e asserir ordem `kube-ops` antes de `kube-ops-v2`).

- [ ] **Step 2: Ver falhar** — pesos atuais `bm25(skills_fts, 12, 9, 7)` (3 args) não cobrem tags/category e não seguem o plano.

- [ ] **Step 3: Implementar** — em `SQLiteSearchAdapter.js`, trocar as chamadas `bm25(skills_fts, ...)` para 5 pesos `bm25(skills_fts, 10.0, 5.0, 3.0, 2.0, 1.0)` (id, display_name, description, tags, category) e `bm25(skills_trigram, ...)` para 3 (display_name, description, tags). Ajustar `ORDER BY` para manter os desempates exatos/prefixo já existentes.

- [ ] **Step 4: Ver passar.**

- [ ] **Step 5: Commit** `fix(sqlite): pesos BM25 de 5 colunas conforme plano new-search`

### Task 1.4: Liberar o caminho SQL — não injetar catálogo quando o DB existe

**Files:** `packages/catalog-core/src/index.js` (`createSearchAdapterContext`), `SQLiteSearchAdapter.js` (`list`).

- [ ] **Step 1: Teste de paridade que exercita o SQL REAL** — em `packages/catalog-core/__tests__/sqlite-adapter.spec.js`, adicionar um caso que constrói o adapter **sem** `catalog` (só `databasePath`) e compara resultados de `search`/`list`/`recommend` com o `MemorySearchAdapter` para as mesmas queries. (Hoje os testes injetam catálogo e nunca tocam o SQL.)

```javascript
test("SQLite SQL path matches memory adapter when no catalog is injected", () => {
  const sqlite = createSearchAdapter({ databasePath: dbPath, searchMode: "sqlite" });
  const memory = createSearchAdapter({ catalog: fixtureCatalog(), searchMode: "memory" });
  for (const q of ["kubernetes", "governance", "kube", "kuberntes"]) {
    const a = sqlite.search({ query: q }).results.map((r) => r.id);
    const b = memory.search({ query: q }).results.map((r) => r.id);
    expect(new Set(a)).toEqual(new Set(b));
  }
  sqlite.close(); memory.close();
});
```

- [ ] **Step 2: Ver falhar** — sem `catalog`, o adapter cai no SQL não testado; divergências de ranking/campos aparecem, OU o `list` ainda tenta `listQueryFromCatalog`.

- [ ] **Step 3: Implementar** — duas mudanças cirúrgicas:
  1. Em `index.js` `createSearchAdapterContext`: **não** injetar `catalog` quando o `databasePath` existe. Ex.:
  ```javascript
  function createSearchAdapterContext(options = {}) {
    const paths = getCatalogPaths(options);
    const hasDb = fs.existsSync(paths.databasePath); // import fs no topo
    return {
      ...options,
      catalogPath: paths.catalogPath,
      databasePath: paths.databasePath,
      // Só pré-carrega o catálogo quando não há DB (fallback Memory). Com DB,
      // deixa o SQLiteSearchAdapter usar o SQL (BM25/porter/trigram).
      catalog: options.catalog || (hasDb ? undefined : loadCatalog(options)),
      manifestLoader: (skillId) => loadManifest(skillId, options),
    };
  }
  ```
  2. Em `SQLiteSearchAdapter.list()`: manter o curto-circuito `if (this.catalog?.skills)` apenas como fallback explícito (quando um catálogo foi injetado de propósito, ex.: testes de memória), garantindo que sem catálogo o SQL rode.

- [ ] **Step 4: Ver passar** — Run `npx vitest run packages/catalog-core`. Expected: paridade PASS; nenhuma regressão.

- [ ] **Step 5: Verificação funcional real (não só testes)**

```bash
npm rebuild better-sqlite3 && npm run build:db
node packages/cli/src/bin/cli.js find "kuberntes" --limit 5   # deve achar kubernetes
node packages/cli/src/bin/cli.js find "python" --limit 5      # deve reportar search=SQLite FTS5
```
Expected: modo `SQLite FTS5` (não `Memory`) e fuzzy funcionando pelo trigram.

- [ ] **Step 6: Commit** `feat(search): ativa o caminho SQLite FTS5 em producao`

### Task 1.5: `recommend()` no SQLite com `LIMIT` (sem varrer todas as linhas)

- [ ] **Step 1: Teste falhando** — asserir que `recommend({goal, limit:5})` no adapter SQLite não materializa mais que um teto de linhas (usar um spy no `prepare`/`all` ou um DB grande de fixture e medir). Simples: asserir que a query preparada contém `LIMIT`.

- [ ] **Step 2: Ver falhar** — `recommend` faz `SELECT ... ORDER BY rowid` sem `LIMIT` e pontua tudo em JS.

- [ ] **Step 3: Implementar** — adicionar `LIMIT ?` com um teto (ex.: `Math.max(200, limit * 20)`) na query de candidatos do `recommend`, mantendo o rerank em JS sobre o pool limitado.

- [ ] **Step 4: Ver passar.**

- [ ] **Step 5: Commit** `perf(sqlite): limita o pool de candidatos do recommend`

### Task 1.6: Re-benchmark e atualizar o relatório

- [ ] **Step 1:** Run `node tools/scripts/benchmark_search.js --count 200000 --samples 3 --output-json /tmp/bench.json`
- [ ] **Step 2:** Atualizar `_tasks/new-search/BENCHMARK-RESULTS.md` com os novos números e marcar quais metas passaram após as correções de schema (BM25 real, tags indexadas).
- [ ] **Step 3: Commit** `docs: re-benchmark do FTS5 apos ativacao`

---

## Fase 2 — Completar a TASK-04 (família/variante)

**Files:** `packages/cli/src/bin/cli.js` (`runFind`), `packages/catalog-core/src/index.js` (`searchFamilies`), `packages/server-api/src/server.js` (endpoint de variantes).

### Task 2.1: Flag `--show-variants` no `find`

- [ ] **Step 1: Teste falhando** (e2e CLI) em `packages/cli/__tests__/e2e/` — invocar `find <termo> --show-variants --json` e asserir que o payload lista variantes concretas (ids `-v2`), não só famílias.
- [ ] **Step 2: Ver falhar** — flag inexistente; `runFind` sempre chama `searchFamilies`.
- [ ] **Step 3: Implementar** — em `runFind` (`cli.js`), parsear `--show-variants`/`show_variants`; quando presente, chamar `core.searchSkills` (variantes) em vez de `core.searchFamilies`.
- [ ] **Step 4: Ver passar.**
- [ ] **Step 5: Commit** `feat(cli): find --show-variants lista variantes concretas`

### Task 2.2: Variante default influencia o ranking em queries reais

- [ ] **Step 1: Teste falhando** — em `catalog.spec.js`/novo, montar catálogo com famílias onde o skill que casa a query é uma variante não-default de baixa qualidade e a default é alta; asserir que a família é ranqueada pela default.
- [ ] **Step 2: Ver falhar** — `searchFamilies` herda a posição da primeira variante que casa (só o branch de query vazia usa a default).
- [ ] **Step 3: Implementar** — em `searchFamilies`, ao montar `familyResults`, ordenar por um score que combine o match da query com o `quality_score` da **default** (`resolveSelection(family.default_skill_id)`), não da primeira variante.
- [ ] **Step 4: Ver passar.**
- [ ] **Step 5: Commit** `fix(search): ranking de familia usa a variante default`

### Task 2.3: Endpoint de variantes na API + OpenAPI

- [ ] **Step 1: Teste falhando** — teste do `server-api` (ver Fase 4 para harness) batendo em `GET /v1/families/:id/variants` e asserindo a lista de variantes.
- [ ] **Step 2: Ver falhar** — rota inexistente.
- [ ] **Step 3: Implementar** — adicionar a rota em `server.js` usando `getFamily`/`resolveFamilyVariant`; atualizar a doc OpenAPI (`docs/specs/CATALOG-API.md`).
- [ ] **Step 4: Ver passar.**
- [ ] **Step 5: Commit** `feat(api): endpoint de variantes de familia + OpenAPI`

---

## Fase 3 — Cache de catálogo nos servidores

**Contexto:** cada request de API/A2A re-parseia ~14 MB de `catalog.json` e reabre o SQLite (`createSearchAdapterContext` + `withSearchAdapter` por chamada). A CLI já reusa via `catalog-runtime`.

### Task 3.1: Memoizar `loadCatalog` por processo com invalidção por mtime

**Files:** `packages/catalog-core/src/index.js`, Test: `packages/catalog-core/__tests__/catalog-cache.spec.js`

- [ ] **Step 1: Teste falhando**

```javascript
test("loadCatalog reads the file once per unchanged mtime", () => {
  let reads = 0;
  const storageAdapter = { existsSync: () => true,
    readJsonSync: (p) => { if (String(p).endsWith("catalog.json")) reads += 1; return fixture; },
    statMtimeMs: () => 42 };
  loadCatalog({ repoRoot, storageAdapter });
  loadCatalog({ repoRoot, storageAdapter });
  expect(reads).toBe(1);
});
```

- [ ] **Step 2: Ver falhar** — `loadCatalog` sempre relê (reads === 2).
- [ ] **Step 3: Implementar** — cache module-level `Map<catalogPath, {mtimeMs, data}>`; invalidar quando o mtime muda (adicionar `statMtimeMs` opcional ao adapter, com fallback a `fs.statSync().mtimeMs`). Preservar assinatura pública.
- [ ] **Step 4: Ver passar** (`reads === 1`). Rodar suíte catalog-core inteira para garantir que testes com fixtures distintas não vazem cache (chavear por path + mtime resolve).
- [ ] **Step 5: Commit** `perf(catalog-core): memoiza loadCatalog por mtime`

### Task 3.2: Reusar um único adapter de busca por processo nos servidores

**Files:** `packages/server-api/src/server.js`, `packages/server-a2a/src/*`, Test: harness da Fase 4.

- [ ] **Step 1: Teste falhando** — asserir que N requests de busca abrem o SQLite uma vez (spy na criação do adapter).
- [ ] **Step 2: Ver falhar** — adapter criado/fechado por request.
- [ ] **Step 3: Implementar** — criar um adapter compartilhado no bootstrap do servidor (como a CLI faz em `catalog-runtime`) e injetá-lo via `searchAdapter` em `listSkills`/`searchSkills`.
- [ ] **Step 4: Ver passar.**
- [ ] **Step 5: Commit** `perf(servers): reusa um adapter de busca por processo`

---

## Fase 4 — Cobertura de testes (server-mcp e server-a2a)

**Contexto:** `server-mcp` (sidecar 2.191 linhas) e `server-a2a` (task-runtime 1.408 linhas) têm ~zero testes unitários. Introduzir harness sem `app.listen` no import (o A2A já foi refatorado para `createA2AApp`; replicar o padrão no MCP se necessário).

### Task 4.1: Testes do task-runtime do A2A

**Files:** Test: `packages/server-a2a/__tests__/task-runtime.spec.js`

- [ ] **Step 1: Teste falhando** — cobrir o ciclo: `handleMessageSend` cria task; `handleTasksGet` retorna; `handleTasksCancel` cancela; push-notification config set/get/delete; validação de RPC inválido. Usar `OmniSkillsA2ARuntime` direto (store em memória).
- [ ] **Step 2: Ver falhar** — comportamentos não cobertos (arquivo novo).
- [ ] **Step 3: Implementar** — só testes (o runtime já existe); ajustar apenas se um teste revelar bug real (então TDD do fix).
- [ ] **Step 4: Ver passar** — `npx vitest run packages/server-a2a`.
- [ ] **Step 5: Commit** `test(a2a): cobre o ciclo de tasks do runtime`

### Task 4.2: Testes do sidecar/MCP

**Files:** Test: `packages/server-mcp/__tests__/*.spec.js`

- [ ] **Step 1: Teste falhando** — cobrir: schemas zod dos tools (caps `.max(50)`/`.max(5)`), allowlist de path do sidecar (`isPathInside`, rejeição de `..`/absolutos), dry-run default das ops destrutivas.
- [ ] **Step 2–4:** ver falhar → só testes → ver passar (`npx vitest run packages/server-mcp`). Remover `passWithNoTests` do vitest config do pacote.
- [ ] **Step 5: Commit** `test(mcp): cobre validacao de tools e allowlist do sidecar`

---

## Fase 5 — Débito estrutural

### Task 5.1: Extrair `isPathInside` para um pacote compartilhado

**Files:** Create: `packages/shared-fs/src/index.js` + `package.json`; Modify: `packages/catalog-core/src/repositories/FileSystemAdapter.js`, `packages/server-api/src/server.js`, `packages/server-mcp/src/local-sidecar.js`.

- [ ] **Step 1: Teste falhando** — `packages/shared-fs/__tests__/is-path-inside.spec.js` cobrindo dentro/fora/igual/`..`/absoluto.
- [ ] **Step 2: Ver falhar** (módulo novo).
- [ ] **Step 3: Implementar** — mover a função (idêntica nos 3 lugares) para `@omni-skills/shared-fs`; importar nos 3 consumidores; remover as cópias.
- [ ] **Step 4: Ver passar** + rodar suíte inteira (as verificações de path traversal devem continuar verdes).
- [ ] **Step 5: Commit** `refactor: extrai isPathInside para @omni-skills/shared-fs`

### Task 5.2: Mover `http-runtime` para um pacote neutro

**Files:** Create: `packages/http-core/*`; Modify: `server-api`, `server-mcp`, `server-a2a` (imports).

- [ ] **Step 1: Teste falhando** — teste de import de `@omni-skills/http-core` expondo `createHttpRuntimeMiddleware`/`createHttpCorsMiddleware`.
- [ ] **Step 2–4:** ver falhar → mover `http-runtime.js` (e seus testes) para `http-core`; trocar os imports (elimina a dependência artificial `server-mcp → server-api`) → ver passar (suíte inteira).
- [ ] **Step 5: Commit** `refactor: http-runtime vira @omni-skills/http-core (remove dep mcp->api)`

### Task 5.3: Unificar o guard de path do DB no catalog-core

- [ ] **Step 1: Teste falhando** — asserir que `resolveReadableDatabasePath` e `resolveSafeDatabasePath` compartilham a mesma implementação (importar uma única função).
- [ ] **Step 2–4:** ver falhar → extrair um único helper (`resolveSafeDbPath`) usado por `SQLiteSearchAdapter.js` e `createSearchAdapter.js` → ver passar.
- [ ] **Step 5: Commit** `refactor(catalog-core): unifica o guard de path do DB`

### Task 5.4 (SUB-PLANO PRÓPRIO): Split de arquivos gigantes

**Objetivo:** reduzir `ui.mjs` (2.515), `cli.js` (2.255), `local-sidecar.js` (2.191), `skill_metadata.py` (2.855) para módulos focados por responsabilidade, sem mudança de comportamento.

**Critérios de aceite:** cada arquivo alvo < ~800 linhas; suíte e build verdes; sem mudança de API pública; commits pequenos por extração.

- [ ] **Step 1:** Rodar `superpowers:writing-plans` para produzir `docs/superpowers/plans/2026-07-07-split-giant-files.md` (um arquivo por vez, extrações TDD-safe guiadas por testes de caracterização). **Não** iniciar sem esse plano.

### Task 5.5 (SUB-PLANO PRÓPRIO): Migrar/dual-support `node:sqlite`

**Objetivo:** avaliar substituir `better-sqlite3` por `node:sqlite` (built-in, Node ≥22.13) para eliminar o ABI churn; unificar o driver (o A2A já usa `node:sqlite`).

**Critérios de aceite:** verificar disponibilidade do tokenizer `trigram` e FTS5 no build FTS5 do Node alvo; adapter fino atrás de uma interface; fallback documentado; benchmarks sem regressão.

- [ ] **Step 1:** Rodar `superpowers:writing-plans` para `docs/superpowers/plans/2026-07-07-node-sqlite-migration.md`, começando por um spike que confirma FTS5+trigram no `node:sqlite`. **Não** migrar sem o spike.

---

## Fase 6 (SUB-PLANO PRÓPRIO) — Endurecer o scanner de segurança de skills

**Contexto:** `scan_text_patterns` (`skill_metadata.py`) é regex linha-a-linha; a detecção de prompt injection é evadível (multi-linha, paráfrase, homoglifos, encoding). Skills são conteúdo de terceiros injetado em contexto de agente.

**Objetivo:** aumentar a robustez sem gerar falso-positivo em massa (642 warnings hoje). Direções: normalização (Unicode NFKC + de-homoglyph) antes do scan; detecção multi-linha para exfiltração; separar "bloqueante" (crítico) de "sinal" com telemetria; opcionalmente um passe LLM-judge só para candidatos.

**Critérios de aceite:** casos de teste de bypass conhecidos (multi-linha, homoglifos, base64) passam a ser detectados; taxa de falso-positivo medida contra o corpus atual não piora além de um teto acordado; ClamAV/VirusTotal permanecem gates de release.

- [ ] **Step 1:** Rodar `superpowers:writing-plans` para `docs/superpowers/plans/2026-07-07-security-scanner-hardening.md`, começando por um corpus de fixtures de bypass (RED) antes de qualquer mudança no scanner.

---

## Fase 7 (SUB-PLANO PRÓPRIO) — Avaliação de retrieval (golden set 2026)

**Contexto:** o projeto mede latência, mas não **qualidade** de busca. Consenso 2026: golden set (~100 queries com ground-truth) + recall@k/MRR/nDCG como gate de regressão. Também: sinonímia (expansão de query ou híbrido opcional com `sqlite-vec`) e resultados MCP com snippet/score + sinal explícito de "sem match".

**Objetivo:** introduzir um harness de eval reproduzível e barato para catálogo de skills, e melhorias de baixo custo (expansão de sinônimos; snippet/score no MCP).

**Critérios de aceite:** `tools/scripts/eval_search.js` roda um golden set versionado e reporta recall@k/MRR; um `npm run eval:search` que falha se cair abaixo de um baseline; MCP retorna `score` + snippet e sinaliza vazio explicitamente.

- [ ] **Step 1:** Rodar `superpowers:writing-plans` para `docs/superpowers/plans/2026-07-07-retrieval-eval.md`, começando pela curadoria de ~50–100 queries golden com ids esperados. Depende da Fase 1 (FTS ativo) para medir o caminho real.

---

## Sequenciamento e commits

- Fases 0–3: sequenciais (0 dá rede de segurança; 1 destrava o valor; 2–3 dependem do search real).
- Fase 4 pode correr em paralelo com 2–3 (só testes).
- Fase 5.1–5.3 são refactors isolados; 5.4/5.5/6/7 exigem seus próprios planos antes de qualquer código.
- Commits pequenos e frequentes (um por Step de implementação). Rodar a suíte COMPLETA (`npm test` + `npm run build` + lint/geradores) ao fim de cada fase, não só o subconjunto tocado.

## Auto-revisão (feita)

- **Cobertura do relatório:** cada gap do `RELATORIO-ANALISE-2026-07-06.md` mapeia para uma fase — FTS morto (F1), detail=none/tags/family_id/recommend (F1), TASK-04 (F2), re-parse 14MB (F3), testes mcp/a2a (F4), isPathInside/http-runtime/DB-guard/drivers/arquivos gigantes (F5), scanner (F6), golden set/snippet/node:sqlite (F5.5/F7), pontas soltas (F0).
- **Placeholders:** as fases 6/7 e tasks 5.4/5.5 são intencionalmente sub-planos (subsistemas grandes), com objetivo + critérios de aceite + task "escrever o plano" — não são placeholders de código, e sim decomposição conforme a skill manda.
- **Consistência de tipos/nomes:** `scoring_reference_datetime`, `data/scoring-reference-epoch`, `createA2AApp`, `createSearchAdapter`, `searchFamilies`, `resolveSelection` usados de forma consistente com o código atual.

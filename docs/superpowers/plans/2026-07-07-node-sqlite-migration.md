# Migração `node:sqlite` — Spike + Decisão + Plano Diferido

> **Status:** SPIKE CONCLUÍDO (2026-07-07). Recomendação: **preparar a abstração agora, adiar a troca do driver default** até o piso de Node subir para ≥24 (ou ≥23.4). Não migrar o default enquanto o projeto suportar Node 22.

## Motivação

`better-sqlite3` é um addon nativo: seu ABI é atrelado à versão do Node (ABI 127 = Node 22, 137 = Node 24). Neste repo isso causa atrito recorrente — `npm run build` (build:db) e os testes SQLite falham quando o Node local (24) diverge do Node que compilou o módulo (22), exigindo `npm rebuild better-sqlite3`. `node:sqlite` (SQLite embutido no runtime) elimina esse atrito: sem addon nativo, sem ABI. O `server-a2a` já usa `node:sqlite`; unificar o driver removeria a última dependência de `better-sqlite3` (em `catalog-core` e `tools/scripts/build_catalog_db.js`).

## Resultado do spike (Node 24, este ambiente)

Testado diretamente com `import { DatabaseSync } from "node:sqlite"`:

| Capacidade exigida pelo projeto | node:sqlite (Node 24) |
| --- | --- |
| FTS5 `porter unicode61` | ✅ OK |
| FTS5 `trigram` (fuzzy) | ✅ OK (MATCH funciona) |
| `bm25()` com 5 pesos por coluna | ✅ OK |
| External-content (`content='skills'`, `'rebuild'`) | ✅ OK |
| `detail='column'` | ✅ OK |
| `prepare().all/get/run`, `exec`, `lastInsertRowid`, `changes` | ✅ OK (API quase idêntica a better-sqlite3) |
| Abrir readonly | ✅ OK (`{ readOnly: true }`) |

Diferenças de API a abstrair: `readonly`→`readOnly`; `node:sqlite` não tem `fileMustExist` (readonly já exige arquivo existente); construtor `new DatabaseSync(path, opts)` vs `new Database(path, opts)`.

## Blocker: piso de Node do projeto

`node:sqlite` só é **unflagged** a partir do Node 23.4 / 24. Em **Node 22** (o piso do projeto — `.nvmrc`, `.node-version`, `engines.node >=22`), exige `node --experimental-sqlite` e emite `ExperimentalWarning`. Tornar `node:sqlite` o driver **default** quebraria qualquer invocação em Node 22 (CLI, build, servers) sem a flag. **Por isso a troca do default está bloqueada enquanto Node 22 for suportado.**

## Recomendação

1. **Agora (baixo risco, alto valor de desacoplamento):** introduzir uma abstração fina de driver em `catalog-core` — um `openDatabase(path, { readonly })` que retorna um handle normalizado — e fazer `SQLiteSearchAdapter.js` e `build_catalog_db.js` usarem essa abstração em vez de `require("better-sqlite3")` diretamente. Default continua `better-sqlite3`. Isso remove o acoplamento e prepara a troca.
2. **Opt-in:** um backend `node:sqlite` selecionável por env (`OMNI_SKILLS_SQLITE_DRIVER=node`) para quem roda Node ≥23.4/24. Testar os DOIS backends no mesmo conjunto de specs (parametrizado).
3. **Quando o piso de Node subir para ≥24:** trocar o default para `node:sqlite`, remover `better-sqlite3` das dependências e apagar o passo `npm rebuild better-sqlite3` da documentação. O atrito de ABI desaparece.

## Plano de execução (para quando priorizado)

### Fase 1 — Abstração de driver (default better-sqlite3, sem mudança de comportamento)
- Criar `packages/catalog-core/src/adapters/sqlite-driver.js` com `openDatabase(path, { readonly })` → hoje delega a `better-sqlite3`; interface mínima usada pelo código: `prepare(sql)`, `exec(sql)`, `close()`, e no statement `.all(...)`, `.get(...)`, `.run(...)` com `.lastInsertRowid`.
- Migrar `SQLiteSearchAdapter.js` (`loadDatabaseDriver`/`new Database`) e `build_catalog_db.js` (`new Database`) para `openDatabase`.
- Testes de caracterização: a suíte SQLite atual já cobre; deve permanecer 100% verde com better-sqlite3.

### Fase 2 — Backend node:sqlite opt-in
- Adicionar em `sqlite-driver.js` o ramo `node:sqlite` (normalizando `readOnly`, ausência de `fileMustExist`, e diferenças de binding de parâmetros/rowid).
- Parametrizar os specs SQLite para rodar em ambos os drivers quando `process.version` permitir (guardar `node:sqlite` atrás de `satisfies(>=23.4)` e/ou detecção de disponibilidade).
- Benchmark comparativo (reusar `benchmark_search.js`) — confirmar ausência de regressão relevante.

### Fase 3 — Troca do default (bloqueada por: piso de Node ≥24)
- Bump de `engines.node`, `.nvmrc`, `.node-version` para ≥24.
- Default → `node:sqlite`; remover `better-sqlite3`; atualizar docs e a memória `build-sqlite-node-version-gotcha`.

## Critérios de aceite (quando executado)

- Specs SQLite verdes em AMBOS os drivers (nos ambientes onde cada um é suportado).
- Benchmark sem regressão > ~15%.
- `build:db` produz um `catalog.db` funcionalmente equivalente com qualquer driver.
- Nenhuma quebra em Node 22 enquanto for o piso (default permanece better-sqlite3 até a Fase 3).

## Decisão registrada

Spike POSITIVO — `node:sqlite` atende todos os requisitos técnicos (FTS5, trigram, bm25 por coluna, external-content). A migração do **default** fica **adiada** por compatibilidade com Node 22; a **abstração de driver (Fase 1)** pode ser feita a qualquer momento como preparação de baixo risco. Nenhum código de produção foi alterado neste spike.

# Split de Arquivos Gigantes — Plano de Implementação

> **For agentic workers:** REQUIRED SUB-SKILL: superpowers:subagent-driven-development. Um arquivo por vez; cada extração guiada por testes de caracterização (a suíte existente) e validada com a suíte COMPLETA verde antes do commit.

**Goal:** Reduzir `local-sidecar.js` (2187), `cli.js` (~2255), `ui.mjs` (~2515) e `skill_metadata.py` (~2855) para módulos focados por responsabilidade (< ~800 linhas cada), **sem mudança de comportamento nem de API pública**.

**Architecture:** Extrações puramente mecânicas: mover grupos coesos de funções para novos módulos irmãos e re-importá-los no arquivo original (que passa a orquestrar). A rede de segurança é a suíte existente (e2e da CLI, specs do MCP da Task 4.2, testes Python). Nada de mudança de assinatura pública — só reorganização interna.

**Regra de ouro:** após CADA extração, rodar `npx vitest run` (raiz) — ou `unittest discover` para Python — e ver TUDO verde antes de commitar. Se um teste quebrar, é regressão do split (reverter a extração, não ajustar o teste).

**Ordem por risco (menor → maior):** `local-sidecar.js` (melhor cobertura fresca da Task 4.2) → `skill_metadata.py` → `cli.js` → `ui.mjs` (TUI, testes pty mais frágeis, por último).

---

## Arquivo 1 — `packages/server-mcp/src/local-sidecar.js`

Blocos coesos identificados:
- **A. Resolvers de path de cliente** (~linhas 19–233): ~30 funções `getXConfigPath(env)` / `getXConfigDir(env)` (Claude, Gemini, Kiro, Continue, Junie, Windsurf, Goose, Cline, Copilot, Kilo, OpenCode, Zed, VSCode…). Puras (env → path). → `client-config-paths.js`.
- **B. Path-safety** (~596–740): `assertPathInsideRoot`, `getLocalAllowlistRoots`, `assertPathAllowed`, `getNearestExistingPath`, `canWritePath`, `listInstalledSkillIdsForPath`. → `sidecar-path-safety.js`.
- **C. File operations** (~905–1044): `collectFilesUnder`, `buildFileCopyOperations`, `applyCopyOperations`, `applyRemoveOperations`, `resolveSelectedSkillIds`, `summarizeOperations`. → `sidecar-file-ops.js`.
- **D. MCP config building + TOML** (~1046–1520+): `buildMcpServerEntry`, `applyClientSpecificProfileOptions`, `escapeTomlString`/`formatTomlString`/`formatTomlKeySegment`, helpers de JSON aninhado. → `mcp-config-writer.js`.

### Task 1.A: Extrair os resolvers de path de cliente

**Files:** Create `packages/server-mcp/src/client-config-paths.js`; Modify `local-sidecar.js`.

- [ ] **Step 1: Baseline verde** — `npx vitest run packages/server-mcp` (deve estar verde; é a caracterização). Cole o resultado.
- [ ] **Step 2: Mapear dependências** — para as funções `getX*Path`/`getX*Dir` (bloco A), identificar TODOS os imports/const que elas usam (`path`, `os`, e quaisquer constantes de módulo). Confirmar que NÃO dependem de estado mutável do arquivo.
- [ ] **Step 3: Extrair** — mover o bloco A para `client-config-paths.js`, com os imports necessários (`node:path`, `node:os` conforme uso), exportando cada função. Em `local-sidecar.js`, remover as definições e adicionar um `import { ... } from "./client-config-paths.js";` com todos os nomes usados. Se uma função do bloco A é usada só internamente por outra do bloco A, ela vai junto (não precisa exportar as privadas, mas exporte as usadas fora do bloco).
- [ ] **Step 4: Ver verde** — `npx vitest run packages/server-mcp` e depois `npx vitest run` (raiz). TUDO verde. Se algo quebrar, reverter e reportar a dependência faltante.
- [ ] **Step 5: Commit** `refactor(mcp): extrai resolvers de path de cliente para client-config-paths.js`

### Task 1.B/1.C/1.D: idem para os blocos B, C, D
- [ ] Repetir o ciclo (baseline → mapear deps → extrair → suíte verde → commit) para cada bloco, um commit por extração. Meta: `local-sidecar.js` < ~800 linhas ao final. Se um bloco tiver acoplamento alto que torne a extração arriscada, extrair um subconjunto seguro e reportar o resto.

---

## Arquivo 2 — `tools/scripts/skill_metadata.py`

Blocos candidatos (confirmar por leitura): regras/execução de segurança (SECURITY_PATTERN_RULES, scan_*, normalize_for_scan, ClamAV/VT) → `security_scan.py`; scoring (compute_quality_score, recency, best-practices) → `scoring.py`; normalização/taxonomia (normalize_category, slug, etc.) → `taxonomy.py`. Manter `skill_metadata.py` como orquestrador que importa.

- [ ] Um módulo por vez; caracterização = `python3 -m unittest discover -s tools/scripts/tests -p "test_*.py"`. Cuidar de imports circulares (os testes importam de `skill_metadata`; re-exporte os nomes movidos a partir de `skill_metadata` se testes/consumidores os referenciarem por lá, para não quebrar API). Commit por extração.

---

## Arquivo 3 — `packages/cli/src/bin/cli.js`

Blocos candidatos: parsing de flags/args; renderização (heading/style/format*); `runFind`/`runList`/`runShow`/… (comandos); install flow. Caracterização = `npx vitest run packages/cli` (unit + e2e). Extrair comandos e helpers de render para módulos irmãos (`lib/render.js`, `lib/commands/*.js`), mantendo `cli.js` como dispatcher. Commit por extração; suíte completa verde a cada passo.

---

## Arquivo 4 — `packages/cli/src/tui/ui.mjs`

TUI (Ink). Testes pty (`tui_pty_tests.py`) são mais frágeis — por último e com cautela. Extrair componentes/telas em módulos. Se a cobertura de caracterização for fraca, considerar adicionar testes de render antes de dividir. Se arriscado demais sem mais cobertura, PARAR e reportar (não dividir às cegas).

---

## Auto-revisão

- **Sem mudança de comportamento:** cada extração é validada pela suíte COMPLETA verde; API pública preservada (re-exportar quando consumidores importam por caminho antigo).
- **Escopo por commit:** um bloco por commit, reversível.
- **Ordem por risco:** o arquivo mais bem coberto primeiro (`local-sidecar.js`), o mais frágil por último (`ui.mjs`).
- **Critério de parada honesto:** se um arquivo não tiver caracterização suficiente para um split seguro, reportar em vez de arriscar.

# 🗂️ Project Structure (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Diretório completo e referência de arquivo para o monorepo Awesome Omni Skills.**---

## 📊 At a Glance

```text
awesome-omni-skills/
├── .github/                    # GitHub Actions and PR templates
├── .githooks/                  # Local Git hooks
├── data/                       # Static project data and bundle definitions
├── dist/                       # Generated runtime artifacts (committed)
├── docs/                       # All project documentation
├── packages/                   # Monorepo workspaces (runtime code)
├── skills/                     # Native skill catalog (154 skills)
├── skills_omni/                # Curated English derivatives (110 skills)
├── tools/                      # Build, validation, and test scripts
└── [root files]                # Package config, community files, licenses
```

---

## 📂 Directory Reference

### `skills/`

>**O catálogo de habilidades nativas.**Esta é a principal superfície de conteúdo público do projeto.

Contém**154**diretórios de habilidades, cada um com no mínimo um manual `SKILL.md`. Habilidades maiores podem incluir subdiretórios `agents/`, `references/`, `examples/`, `scripts/` e `assets/`.

As habilidades chegam por dois caminhos de admissão:
-**PRs de contribuidores diretos**— humanos enviam habilidades diretamente
-**Importações externas baseadas em repositório**— revisou PRs `external-import/*` de repositórios upstream

| O que contém | Exemplo |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Habilidade de design para código do Figma |
| `habilidades/arquitetura/SKILL.md` | Revisão de arquitetura e habilidade de planejamento |
| `habilidades/<nome>/metadata.json` | Classificação e pontuação geradas automaticamente |---

### `skills_omni/`

>**Derivados aprimorados somente em inglês com curadoria.**Mantido pelo pipeline de aprimoramento privado.

Contém**110**diretórios de habilidades aprimorados que refletem e melhoram suas contrapartes nativas em `skills/`. Esta superfície**não está aberta para contribuição pública direta**— ela é preenchida exclusivamente pelo pipeline de aprimoramento automatizado.

Cada derivado preserva a atribuição à sua fonte nativa, ao mesmo tempo que fornece um padrão editorial mais elevado, sempre em inglês.---

### `packages/`

>**Os espaços de trabalho monorepo.**Todo o código Node.js de tempo de execução reside aqui.

| Pacote | Nome npm | Finalidade |
|:--------|:---------|:--------|
| 📂 `pacotes/catalog-core/` | `@omni-skills/catalog-core` | Tempo de execução de catálogo compartilhado com injeção de dependência `ICatalogStorageAdapter`. Fornece lógica de pesquisa, pontuação, comparação, recomendação e plano de instalação consumida por todas as superfícies de servidor |
| 📂 `pacotes/cli/` | (compartimento do pacote raiz) | Pontos de entrada CLI unificados, instalador guiado, TUI visual do Ink, diagnósticos, verificações de fumaça e inicializadores de serviços. Nativo do ESM |
| 📂 `pacotes/destinos de instalação/` | `@omni-skills/install-targets` | Registro dos 9 clientes com capacidade de instalação (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) com resolução de caminho e mapeamento de flag |
| 📂 `pacotes/server-api/` | `@omni-skills/servidor-api` | API de catálogo HTTP somente leitura com OpenAPI 3.1, UI Swagger em `/docs`, autenticação, limitação de taxa, listas de permissões CORS/IP, downloads e tempo de execução de administração |
| 📂 `pacotes/servidor-mcp/` | `@omni-skills/servidor-mcp` | Servidor MCP com suporte para transportes `stdio`, `stream` e `sse`. O modo sidecar local adiciona ferramentas de instalação/remoção com reconhecimento de sistema de arquivos e gravação de configuração MCP com reconhecimento de cliente para 16 clientes com capacidade de configuração |
| 📂 `pacotes/servidor-a2a/` | `@omni-skills/servidor-a2a` | Tempo de execução de tarefa A2A (Agent-to-Agent) com persistência JSON/SQLite, recuperação de reinicialização, streaming SSE, cancelamento, modo de executor externo e coordenação alugada opcional |

Cada pacote tem seu próprio diretório `package.json`, `src/` e (exceto `install-targets`) um `vitest.config.js` para testes de unidade.---

### `dist/`

>**Artefatos de tempo de execução gerados.**Comprometidos intencionalmente com o controle de versão.

Esses arquivos são as saídas legíveis por máquina consumidas por instalações CLI, respostas de API, ferramentas MCP, tarefas A2A, testes de fumaça e verificação de liberação. Eles são regenerados por `npm run build`.

| Caminho | Finalidade |
|:-----|:--------|
| `dist/catalog.json` | Catálogo publicado com todas as 154 habilidades, pontuações e metadados |
| `dist/bundles.json` | Definições de pacote com status de disponibilidade de membro |
| `dist/manifests/<habilidade>.json` | Manifesto legível por máquina por habilidade |
| `dist/archives/<habilidade>.zip` | Arquivo ZIP por habilidade para download |
| `dist/archives/<habilidade>.tar.gz` | Arquivo tarball por habilidade para download |
| `dist/archives/<habilidade>.checksums.txt` | Manifesto de soma de verificação SHA-256 por arquivo |
| `dist/archives/<habilidade>.zip.sig` | Assinatura desanexada (somente no momento do lançamento, gitignored) |
| `dist/notas de lançamento.md` | Notas de lançamento geradas automaticamente (gitignored) |
| `dist/assinatura/` | Material derivado de chave pública (gitignored) |

>**Por que `dist/` foi confirmado?**Porque faz parte do contrato de instalação, API, MCP, A2A e lançamento. Os consumidores esperam que esses arquivos estejam presentes sem executar uma compilação.---

### `data/`

>**Arquivos de dados de projeto estáticos.**Definições controladas pela origem que orientam o comportamento de compilação e tempo de execução.

| Arquivo | Finalidade |
|:-----|:--------|
| `data/bundles.json` | Definições de pacotes selecionados (listas de membros de habilidades por pacote) |
| `data/project_identity.json` | Identidade canônica do projeto: nome, descrição, página inicial, tópicos do GitHub, definições de superfície de tempo de execução e listas de clientes |
| `data/project_status.json` | Instantâneo de métricas de projeto gerado: contagens de habilidades, pontuações, contagens de clientes, contagens de categorias e spreads de qualidade |---

### `docs/`

>**Toda a documentação do projeto.**Organizado por público.

| Caminho | Público | Conteúdo |
|:-----|:---------|:--------|
| `docs/README.md` | Todos | Centro de documentação — índice central para todos os documentos |
| `docs/CATALOG.md` | Usuários | Catálogo gerado automaticamente listando todas as 154 habilidades com pontuações |
| `docs/PROJECT-STRUCTURE.md` | Todos | Este arquivo — referência do diretório do projeto |
| `docs/usuários/` | Usuários finais | Primeiros passos, guia do usuário CLI, guia de uso, pacotes, runbook |
| `docs/contribuidores/` | Colaboradores | Anatomia de habilidades, modelo, fluxo de trabalho de relações públicas, barra de qualidade, manual de pontuação alta |
| `docs/especificações/` | Arquitetos | API, sidecar MCP, instalador CLI, shell visual, matriz de suporte ao cliente, classificação, segurança e especificações de manifesto |
| `docs/i18n/` | Usuários internacionais | Traduções geradas automaticamente do README raiz em 32 idiomas |#### `docs/users/`

| Arquivo | Finalidade |
|:-----|:--------|
| `COMEÇANDO.md` | Instale, verifique e invoque uma habilidade em menos de 2 minutos |
| `CLI-USER-GUIDE.md` | Referência completa de comandos com cenários passo a passo |
| `USAGE.md` | Comandos CLI, modos de instalação, comandos de tempo de execução e fluxos de configuração do MCP |
| `BUNDLES.md` | Pacotes selecionados e sua disponibilidade atual |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Status de migração de reformulação da marca e relatório de aceitação |
| `RUNBOOK.md` | Referência operacional (também vinculada como `docs/operações/RUNBOOK.md`) |#### `docs/contributors/`

| Arquivo | Finalidade |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Estrutura e expectativas de qualidade para uma habilidade |
| `SKILL-TEMPLATE.md` | Starter `SKILL.md` com frontmatter atual |
| `SKILL-PR-WORKFLOW.md` | Ingestão nativa, processamento de intensificadores e expectativas do revisor |
| `QUALIDADE-BAR.md` | Critérios de aceitação e benchmarks atuais |
| `HIGH-SCORE-PLAYBOOK.md` | O que impulsiona altas pontuações de maturidade, qualidade, práticas recomendadas e segurança |#### `docs/specs/`

| Arquivo | Finalidade |
|:-----|:--------|
| `CATALOG-API.md` | Endpoints HTTP, filtragem, governança e downloads |
| `CLI-GUIDED-INSTALLER.md` | Contrato comportamental para o instalador guiado |
| `CLI-VISUAL-SHELL.md` | Shell visual de tinta, modelo de estado e hub de serviço |
| `LOCAL-MCP-SIDECAR.md` | Ferramentas com reconhecimento de sistema de arquivos, modelo de lista de permissões e gravação de configuração |
| `CLIENT-SUPPORT-MATRIX.md` | Referência completa de cliente e gravador em 9 clientes de instalação + 16 clientes de configuração |
| `SKILL-CLASSIFICATION.md` | Taxonomia, heurística de pontuação e artefatos de metadados |
| `SEGURANÇA-VALIDAÇÃO.md` | Scanners, arquivos, assinaturas e verificação de liberação |
| `SKILL-MANIFEST.md` | Formato de manifesto legível por máquina e contrato de compatibilidade |#### `docs/i18n/`

Contém**32**diretórios de idiomas, cada um com um `README.md` traduzido. Os idiomas incluem: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

As traduções são geradas automaticamente por `npm run i18n:render` e validadas por `npm run i18n:check`.---

### `tools/`

>**Construir, validar e testar infraestrutura.**Principalmente scripts Python consumidos por comandos `npm run`.#### `tools/scripts/`

| Roteiro | Comando npm | Finalidade |
|:-------|:-----------|:--------|
| `validar_skills.py` | `npm executar validar` | Valida todos os arquivos `SKILL.md` e regenera `metadata.json` |
| `skill_metadata.py` | (importado por validar) | Validador monolítico central: análise de frontmatter, taxonomia, pontuação, verificação de segurança |
| `recategorize_skills.py` | `npm run taxonomy:report` | Mostra ou aplica normalização de categoria canônica |
| `generate_index.py` | `índice de execução npm` | Gera manifestos, arquivos e somas de verificação `dist/` |
| `build_catalog.js` | `catálogo de execução npm` | Gera `docs/CATALOG.md` de `skills_index.json` |
| `generate_project_status.py` | `npm executa projeto:status` | Gera `data/project_status.json` com métricas atuais |
| `render_project_docs.py` | `npm execute docs:render` | Atualiza blocos gerados em README, docs e CONTRIBUTING |
| `gerar_i18n.py` | `npm executa i18n:render` | Gera ou atualiza traduções `docs/i18n/` |
| `repository_sources.py` | `npm executa registro:render` | Renderiza e valida `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm executar identidade:verificar` | Verifica o alinhamento de identidade de package.json, README e repositório |
| `verify_archives.py` | `npm execute verificar:arquivos` | Verifica a integridade do arquivo e assinaturas opcionais |
| `verify_security_scanners.py` | `npm executar verificação:scanners` | Confirma a cobertura do scanner nos metadados gerados |
| `generate_release_notes.py` | `npm run release:notas` | Gera notas de versão personalizadas a partir de metadados e histórico do git |
| `next_release_version.py` | `npm run release:próxima versão` | Calcula a próxima versão semver usando a política patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Sincroniza versão entre pacotes de espaço de trabalho |
| `sync_github_repo_metadata.py` | `npm execute repo:metadata:print` | Imprime ou aplica descrição, página inicial e tópicos do GitHub |
| `validate_contribution_scope.py` | (CI) | Valida os limites do escopo de contribuição de RP |
| `install_githooks.js` | `npm run hooks:install` | Instala o gancho de pré-confirmação local |#### `tools/scripts/tests/`

Conjuntos de testes de integração e TUI consumidos pelo `npm test`:
- Testes legados do Python PTY
- Asserções de TUI do nó
- Orquestrador de executores de testes---

### `.github/`

>**Ações do GitHub e modelos de comunidade.**#### `.github/workflows/`

| Fluxo de trabalho | Gatilho | Finalidade |
|:--------|:--------|:--------|
| `validar.yml` | Push/PR para `principal` | Construir, testar e confirmar se os artefatos gerados foram confirmados |
| `release.yml` | Tag push `v*` ou envio manual | Scanners de nível de lançamento, assinatura, publicação npm, lançamento do GitHub |
| `auto-release-skill-merges.yml` | Mesclar para `main` tocando em `skills/*` | Aumento, marcação e liberação automática de versão em mudanças de habilidade |
| `enhance-pr-skills.yml` | PR com mudanças de habilidades | Executa o pipeline do aprimorador privado e publica PR complementar |
| `sync-repositório-metadata.yml` | Mudanças em `data/project_identity.json` | Sincroniza descrição, página inicial e tópicos do GitHub |#### `.github/pull_request_template.md`

Modelo de PR padrão com lista de verificação para contribuições de habilidade e tempo de execução.---

### `.githooks/`

>**Hooks Git locais.**Instalado via `npm run hooks:install`.

| Arquivo | Finalidade |
|:-----|:--------|
| `pré-comprometimento` | Executa validação básica antes de permitir um commit |---

## 📄 Root Files Reference

| Arquivo | Finalidade |
|:-----|:--------|
| `README.md` | README do projeto público com banner hero, guia de instalação e visão geral completa dos recursos |
| `CONTRIBUINDO.md` | Guia do colaborador com fluxos de trabalho de habilidades, tempo de execução e admissão |
| `SEGURANÇA.md` | Política de segurança, escopo e instruções para relatórios de vulnerabilidades |
| `CODE_OF_CONDUCT.md` | Pacto do Contribuidor v2.1 |
| `REPOSITÓRIO-FONTES.md` | Registo público de repositórios a montante propostos para captação externa |
| `LICENÇA` | Licença MIT (código e ferramentas) |
| `CONTEÚDO DA LICENÇA` | CC BY 4.0 (documentação e conteúdo de habilidades) |
| `pacote.json` | Pacote monorepo raiz: scripts, dependências, pontos de entrada bin, arquivos e configuração do espaço de trabalho |
| `pacote-lock.json` | arquivo de bloqueio npm (gerado automaticamente) |
| `metadados.json` | Validação de todo o repositório e resumo de pontuação (gerado por `npm run activate`) |
| `skills_index.json` | Índice de habilidade normalizada repo-local (gerado por `npm run verify`) |
| `.gitignore` | Exclusões de controle de versão — notavelmente `dist/`**não**é ignorado |
| `.npmignore` | Exclui `__pycache__/` e `*.pyc` do tarball npm |
| `.node-versão` | Fixação de versão do Node.js: `22` |
| `.nvmrc` | Fixação de versão nvm: `22` (espelhos `.node-version`) |
| `vitest.config.js` | Configuração do Root Vitest referenciando todas as 5 configurações de teste em nível de pacote |
| `vitest.workspace.js` | Definição de espaço de trabalho Vitest para execução de teste com reconhecimento de monorepo |---

## 🔄 Build Pipeline Flow

```text
npm run validate          →  metadata.json, skills_index.json, per-skill metadata.json
npm run index             →  dist/manifests/, dist/archives/, dist/archives/*.checksums.txt
npm run catalog           →  docs/CATALOG.md
npm run project:status    →  data/project_status.json
npm run docs:render       →  updates generated blocks in README.md, docs/README.md, CONTRIBUTING.md
npm run registry:render   →  updates REPOSITORY-SOURCES.md status block
npm run i18n:render       →  docs/i18n/*/README.md (32 languages)
```

Todos os itens acima são executados sequencialmente como parte do `npm run build`.
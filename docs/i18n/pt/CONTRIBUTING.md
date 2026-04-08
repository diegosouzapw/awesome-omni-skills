# 🤝 Contributing to Awesome Omni Skills (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Awesome Omni Skills é um repositório público de habilidades, um repositório com curadoria de derivados de práticas recomendadas aprimoradas e superfícies de tempo de execução criadas com base nesse catálogo.**
> As contribuições podem ter como alvo qualquer uma das áreas, mas ambas devem permanecer alinhadas com os artefatos gerados e o comportamento atual da CLI.---

## 📊 Repository Baseline

<!-- generated:contributing-repository-baseline:start -->
| Metric | Value |
|:-------|:------|
| 📦 Package version | `0.9.5` |
| 🧠 Published skills | `154` |
| ✨ Curated derivatives | `110` |
| 📦 Fully backed bundles | `7` |
| 🖥️ Install-capable clients | `9` |
| 🔌 MCP config-capable clients | `16` across `33` targets |
| 🔄 Automatic releases | Enabled on `main` |
<!-- generated:contributing-repository-baseline:end -->

---

## 📋 Before You Start

| O que | Onde |
|:-----|:------|
| 🧠 As habilidades são de autoria em | `habilidades/<nome-da-habilidade>/SKILL.md` |
| 📖 Modelos e orientações para colaboradores | `docs/contribuidores/` |
| 🧾 Fluxo canônico de relações públicas para novas habilidades | [Fluxo de trabalho de RP de habilidades](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Habilidades nativas recebidas em | `habilidades/` (qualquer idioma) |
| ✨ Derivados aprimorados com curadoria | `skills_omni/` (somente em inglês, automatizado) |
| 🚫 `skills_omni/` está protegido | Não está aberto a contribuições públicas diretas |
| 🔁 Ingestão baseada em repositório | As importações externas operadas pelo mantenedor continuam a ser abrangidas pelas «competências/» e seguem o mesmo padrão de revisão |
| 📖 Documentos de tempo de execução e arquitetura | `docs/` |
| 📄 Arquivos da comunidade | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Tipo | Área |
|:-----|:-----|
| 🧠 Adicione ou melhore uma habilidade | `habilidades/` |
| 📥 Revise um PR de admissão baseado em repositório | ramificações `external-import/<source>` direcionadas a `skills/` |
| 🌍 Propor um novo repositório upstream | `REPOSITÓRIO-FONTES.md` |
| 📖 Atualizar orientação para contribuidores | `docs/contribuidores/` |
| 🖥️ Melhorar CLI, instalador ou scripts | `pacotes/cli/` e `ferramentas/scripts/` |
| 📦 Melhorar o tempo de execução do catálogo ou pacotes de protocolo | `pacotes/` |
| 🧪 Aperte testes, verificações de fumaça ou libere documentos | Vários |---

## Início Rápido

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/awesome-omni-skills.git
cd awesome-omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Abra o PR com `Permitir edições dos mantenedores` habilitado.**---

## 🧠 Skill Contributions

Uma boa habilidade nativa de entrada deve:

- ✅ Resolva um problema específico de forma limpa
- ✅ Seja reutilizável em todos os projetos
- ✅ Inclua instruções que um agente pode realmente seguir
- ✅ Evite conteúdo vago ou redundante
- ✅ Declare frontmatter preciso e metadados de compatibilidade quando disponíveis
- ✅ Terreno com artefatos de classificação `metadata.json` gerados após a execução da automação### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Dica:**Os pacotes de habilidades de nível de lançamento devem incluir `agents/`, `references/`, `examples/` e `scripts/`. Mas a superfície de entrada é intencionalmente permissiva – uma habilidade de entrada nativa mínima é permitida, e o pipeline intensificador gera a derivada mais forte.### 🔀 Two Native Intake Paths

O repositório público aceita habilidades nativas por meio de dois caminhos operacionais:

| Caminho | Como chega | Avaliar expectativa |
|:-----|:---------------|:----------------------|
| 👤 Contribuidor direto PR | Um ramo humano edita `skills/` diretamente | Valide a habilidade, os artefatos gerados e o impacto do pacote |
| 📥 Ingestão externa baseada em repositório | Habilidades de importação de PR `external-import/<source>` operadas pelo mantenedor de outro repositório revisado | Valide a habilidade, além da procedência, propriedade upstream e notas de licença |

Ambos os caminhos chegam a `skills/`, ambos acionam o mesmo validador público e ambos podem produzir um PR complementar `skills_omni/` com curadoria.

Se você quiser propor um repositório upstream em vez de enviar uma habilidade diretamente, edite [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md). A proposta normal agora é repo-first:

- forneça `repo_url`
- deixe `branch` como `auto` a menos que você precise de um branch não padrão
- deixe `skills_path` como `auto` a menos que você saiba a raiz exata

Mesclar ainda há um portão de revisão pública, não um gatilho de sincronização automática.### 🌐 Language Policy

| Superfície | Idiomas aceitos |
|:--------|:-------------------|
| 📥 `habilidades/` (ingestão nativa) | Português, Inglês ou qualquer idioma |
| ✨ `skills_omni/` (saída selecionada) | Somente inglês |

> O aprimorador privado preserva a fonte nativa conforme enviada e reescreve o derivado com curadoria em inglês.

📖 Para a sequência completa de ramificação, validação e revisão do aprimorador, use [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Execute isto antes de abrir um PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<detalhes>
<summary>📋 <strong>O que <code>npm run valid</code> regenera</strong></summary>

- `metadados.json`
- `habilidades/<habilidade>/metadata.json`
- Mapeamento de taxonomia canônica
- Pontuações de maturidade, melhores práticas, qualidade e segurança
- Descobertas de segurança estática
- Status opcional do scanner ClamAV e VirusTotal (quando configurado)</details>

>**⚠️ Importante:**Validação é o contrato usado por CLI, API, MCP, A2A, manifestos, arquivos e automação de liberação. Trate os metadados gerados como parte da superfície de revisão, e não como resultados descartáveis.

Se você tocar na marca, nos metadados do pacote, nos URLs do repositório ou na cópia do cabeçalho do repositório, execute também:```bash
npm run repo:metadata:print
```

Esse comando imprime a descrição do GitHub controlada pela fonte, a página inicial e o contrato de tópicos derivado de `data/project_identity.json`.### 📥 Intake Policy

| Condição | Comportamento |
|:----------|:---------|
| Antecipação ausente/incompleta | ⚠️ Avisos (não bloqueia) |
| Descobertas críticas de segurança | 🚫 Bloqueia a ingestão |
| Erros de validação difícil | 🚫 Bloqueia a ingestão |
| Padrão editorial mais rígido | Aplicado no fluxo aprimorado de derivados, não na ingestão nativa |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detalhes>
<summary>📋 <strong>O que o passe de fumaça valida</strong></summary>

- ✅ Validação de habilidades
- ✅ Geração de catálogo
- ✅ Geração de catálogo de documentos
- ✅ Conjunto de testes
- ✅ `pacote npm --dry-run`
- ✅ inicialização API
- ✅ Inicialização MCP em `stdio`, `stream` e `sse`
- ✅ Bota A2A
- ✅ Verificação de arquivo e expectativas de embalagem</details>

---

## 📋 Skill Frontmatter

Frontmatter é fortemente recomendado. Use o [Modelo de habilidade](docs/contributors/SKILL-TEMPLATE.md) como linha de base.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<detalhes>
<summary>🏷️ <strong>Categorias de taxonomia canônica</strong></summary>

| Categoria | Categoria |
|:--------|:---------|
| `desenvolvimento` | `frontend` |
| `back-end` | `fullstack-web` |
| `ferramentas` | `automação cli` |
| `negócio` | `produto` |
| `projeto` | `dados-ai` |
| `ai-agentes` | `aprendizado de máquina` |
| `devops` | `testando-segurança` |
| `documentação` | `conteúdo-mídia` |
| `comunicação` | `sem categoria` |</details>

>**ℹ️**A versão do Skill é independente da versão do pacote npm. Se uma habilidade nativa de entrada ainda não tiver frontmatter, ela será aceita com avisos e derivará metadados temporários do diretório, título e corpo do texto.---

## ⚙️ Runtime Contributions

Se você tocar em `packages/cli/`, `packages/catalog-core/`, `packages/server-*/` ou criar scripts:

- 📦 Mantenha `dist/` e documentos alinhados com a implementação
- 🔄 Prefira reutilizar `packages/catalog-core` em vez de duplicar a lógica do catálogo
- 🔒 Mantenha o comportamento de gravação local atrás dos padrões de visualização ou simulação
- 🔌 Mantenha os redatores MCP disciplinados — adicione redatores de configuração de primeira classe apenas quando o cliente tiver um contrato de configuração pública estável
- 🛡️ Trate os avisos do scanner de segurança como parte da barra de revisão
- 🧪 Testes de atualização ao alterar comandos CLI, modos de transporte ou endpoints públicos### 🚧 Important Boundary

| Faça isso ✅ | Não faça isso 🚫 |
|:-----------|:-----------------|
| Envie trabalhos nativos em `skills/` | Abra PRs manuais que editam `skills_omni/` |
| Deixe a automação cuidar da execução do aprimorador | Adicione conteúdo selecionado diretamente |
| Concentre-se na qualidade legítima das habilidades | Ignore o fluxo automatizado de relações públicas complementares |

>**ℹ️**Quando uma habilidade nativa em `skills/` é atualizada, o aprimorador privado a reprocessa e atualiza a linha de base aprimorada.---

## 🔄 Enhancer Outcome States

Durante PRs públicos de habilidades nativas, o aprimorador relata um dos quatro estados:

| Estado | Significado |
|:------|:--------|
| ✅ `concluído` | Derivado aprimorado gerado de forma limpa, elegível para `skills_omni/` |
| ⚠️ `degradado` | Concluído com fallback ou movimento de pontuação mais fraco — inspecione com mais cuidado |
| 🚫 `bloqueado` | Interrompido por motivos de infraestrutura ou validação — impede a publicação automática |
| ❌ `falhou` | Erro inesperado — requer investigação do mantenedor |

>**📝 Colaboradores**não precisam corrigir problemas de infraestrutura do aprimorador. A responsabilidade é enviar uma habilidade nativa legítima e manter o repositório verde.---

## 🔄 Automatic Release Policy

Quando uma mudança chega a `main` e inclui:

- `habilidades/**`
- `habilidades_omni/**`
- `dados/bundles.json`

…o repositório emite um**lançamento do pacote automaticamente**.### 📋 Version Bump Rule

| De | Para | Regra |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Atualização +1 |
| `0.1.9` | `0.1.10` | Atualização +1 |
| `0.1.10` | `0.2.0` | Role para o próximo menor, redefina o patch |

> O fluxo de lançamento regenera catálogos/arquivos, confirma o aumento de versão, marca o lançamento, publica npm e cria o lançamento do GitHub automaticamente.---

## 📝 Commit Conventions

| Prefixo | Usar para |
|:-------|:--------|
| `façanha:` | Nova habilidade ou recurso |
| `consertar:` | Correção de bug |
| `documentos:` | Mudanças na documentação |
| `refatorar:` | Limpeza de código ou alterações de estrutura |
| `teste:` | Alterações de teste |
| `tarefa:` | Manutenção |---

## ❓ Need Help?

| Canal | Ligação |
|:--------|:-----|
| 💬 Perguntas | [Abra uma discussão](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Insetos | [Abra um problema](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Feedback antecipado | [Abra um rascunho de RP](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
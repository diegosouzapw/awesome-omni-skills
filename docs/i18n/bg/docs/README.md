# 📖 Awesome Omni Skills — Documentation Hub (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Централният справочник за използване, принос и работа с Awesome Omni Skills като публично хранилище на умения, подбрана повърхност за производни на най-добрите практики и споделена платформа за изпълнение.**

Стандартните файлове на общността се намират в корена на хранилището:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Пакетът npm, хранилището на GitHub, генерираните документи и входните точки за изпълнение вече са подравнени на**Awesome Omni Skills**. Текущо състояние на разпространение: [Въвеждане на Awesome Omni Skills](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

## 📊 Status Snapshot

<!-- generated:docs-readme-status-snapshot:start -->
| Area | State | Details |
|:-----|:------|:--------|
| 🏗️ **Runtime** | ✅ Current | Unified CLI, Ink visual shell, API, MCP, and A2A all ship from the same package |
| 📦 **Catalog** | 📌 154 skills | 154 native catalog skills across 16 active categories, with 110 curated English derivatives in `skills_omni` and 7 fully backed bundles |
| 🎯 **Install** | ✅ Current | Guided TTY install, selective `--skill` and `--bundle`, custom path support, and discovery-driven install |
| 🌐 **API** | ✅ Current | Read-only registry API with auth, admin runtime, rate limiting, CORS/IP allowlists, maintenance mode, downloads, and interactive Swagger UI on `/docs` |
| 🔌 **MCP** | ✅ Current | `stdio` · `stream` · `sse`, local sidecar mode, 9 install-capable clients, 16 config-capable clients, 33 config targets, and 20 config profiles |
| 🤖 **A2A** | ✅ Current | Simple-first local runtime with JSON/SQLite durability, restart resume, SSE streaming, cancelation, external executor mode, and optional leased coordination when explicitly enabled |
| 🛡️ **Security** | ✅ Current | Static scanner, optional ClamAV/VirusTotal, signed release artifacts, archive checksums, and release-time verification |
| 📋 **Classification** | ✅ Current | Canonical taxonomy, maturity, semantic quality spread, best-practices spread, and security scoring |
| 📁 **Archives** | ✅ Current | Per-skill `.zip` and `.tar.gz` archives with SHA-256 checksum manifests |
| 🔐 **Signing** | ✅ Current | Detached signatures enforced on release tags; local install flows consume the same manifest and checksum metadata |
| 🧬 **Intake Flow** | ✅ Current | Native skills land under `skills/` through direct contributor PRs and reviewed repository-based external-import PRs; PR automation reviews them and proposes Omni-enhanced derivatives under `skills_omni/` |
<!-- generated:docs-readme-status-snapshot:end -->

## 🔭 Current Project State

Основната писта сега живее в състояние на активен проект, а втората вълна за разширяване на категория вече е в каталога. Сега проектът трябва да се чете като работеща базова линия с незадължителни бъдещи разширителни песни:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Бъдещото разширяване остава умишлено:

- задълбочаване на `дизайн`, `инструменти`, `data-ai` и `машинно обучение`
- избягвайте повторното отваряне на пасивни не-код-местни категории, докато текущите код-родни песни имат по-голяма дълбочина
- запазвайте качеството на пода и пътя за преглед на подобритела непокътнати, докато правите това

Тази работа по разширяването вече е отразена директно в каталога на живо и документите за архитектура:

- моментна снимка на текущия каталог в [Каталог](CATALOG.md)
- времето за изпълнение и формата на артефакта в [Анализ на кодовата база](архитектура/CODEBASE-ANALYSIS.md)
- посоката напред в [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills трябва да се четат като три свързани повърхности:

| Повърхност | Какво е | Как се променя |
|:--------|:-----------|:---------------|
| 📥 `умения/` | Публично хранилище за естествени умения | PR на директен сътрудник и прегледано външно приемане, базирано на хранилище |
| ✨ `skills_omni/` | Подбрана подобрена производна повърхност за най-добри практики | Само PR-и за придружители на частни подобрители |
| 🖥️ Работни повърхности | CLI, API, MCP и A2A върху същия генериран каталог | Автоматизация на изграждане, валидиране и освобождаване |---

## 📌 Current Decisions

Тези архитектурни въпроси вече не са „отворени“ на практика и сега се третират като проектни решения:

1.**Разпространението остава първо манифест плюс подписани архиви**
   Машинночетимият манифест остава договорът, използван от CLI, API, MCP и A2A. Подписаните архиви за умение са повърхността за изтегляне и освобождаване, наслоена върху този договор.
2.**Личните или премиум каталозите трябва да използват повторно една и съща схема на манифест**
   Удостоверяването и правилата трябва да се наслояват външно, а не чрез разклоняване на формата на манифеста или каталога.
3.**MCP конфигурацията трябва да се сближава с няколко канонични фамилии за експортиране**
   Awesome Omni Skills вече стандартизира около JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` и TOML `[mcp_servers]`, като същевременно запазва поръчкови автори само когато официалните клиентски документи изискват различна структура.

Тези решения са в съответствие с текущата официална MCP и клиентска документация, включително:

- официален MCP регистър и насоки за поддръжка на разширение в `modelcontextprotocol.io`
- OpenAI Docs MCP и Codex CLI документи на `developers.openai.com` и `platform.openai.com`
- VS Code MCP разширение и продуктови документи на `code.visualstudio.com`
- клиентски документи за Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman и JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Док | Какво ще научите |
|:----|:------------------|
| 📘 [Първи стъпки](users/GETTING-STARTED.md) | Инсталирайте, проверете и извикайте първото си умение |
| 🧭 [Ръководство за потребителя на CLI](users/CLI-USER-GUIDE.md) | Пълен справочник за команди и модели на използване на CLI в реалния свят |
| 📗 [Ръководство за използване](users/USAGE.md) | CLI команди, режими на инсталиране, команди по време на изпълнение и потоци от конфигурация на MCP |
| 📦 [Пакети](users/BUNDLES.md) | Подбрани пакети и текущата им наличност |
| 📚 [Каталог](CATALOG.md) | Автоматично генериран каталог на публикуваните умения |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Изградете, обслужвайте, защитавайте и отстранявайте неизправности във времето за изпълнение |### 🏗️ If You Want to **Understand** the Runtime

| Док | Какво ще научите |
|:----|:------------------|
| 🗂️ [Структура на проекта](PROJECT-STRUCTURE.md) | Пълна справка за директория и файл за monorepo |
| 🗺️ [Пътна карта на Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Еволюция на архитектурата, затворени решения и оставащи области за разширяване |
| 🧭 [Пътна карта за CLI UX](архитектура/CLI-UX-ROADMAP.md) | Исторически план и текуща форма на управлявания и визуален CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Основно монорепо и решение за споделено изпълнение |
| 🔬 [Анализ на кодова база](архитектура/CODEBASE-ANALYSIS.md) | Текущ състав по време на изпълнение, брой и системни граници |
| 🌐 [Повърхност на API на каталога](specs/CATALOG-API.md) | HTTP крайни точки, филтриране, управление и изтегляния |
| 🧩 [Инсталатор с насочване чрез CLI](specs/CLI-GUIDED-INSTALLER.md) | Поведенчески договор за ръководения монтажник |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Визуална обвивка на Ink, модел на състоянието и център за услуги |
| 🔌 [Local MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Инструменти, съобразени с файловата система, модел на разрешен списък и писане на конфигурация |
| 🧭 [Матрица за поддръжка на клиенти](specs/CLIENT-SUPPORT-MATRIX.md) | Поддържани CLI и IDE клиенти, писатели, ръчни цели и препратки към източници |
| 📊 [Класификация на уменията](specs/SKILL-CLASSIFICATION.md) | Таксономия, евристика за оценяване и артефакти на метаданни |
| 🛡️ [Проверка на сигурността](specs/SECURITY-VALIDATION.md) | Скенери, архиви, подписи и проверка на издание |
| 📋 [Спецификация на манифеста на уменията](specs/SKILL-MANIFEST.md) | Машинно четим формат на манифест и договор за съвместимост |### 🤝 If You Want to **Contribute**

| Док | Какво ще научите |
|:----|:------------------|
| 📝 [Ръководство за принос](../CONTRIBUTING.md) | Репо работен процес и очаквания за заявка за изтегляне |
| 🌍 [Източници на хранилище](../REPOSITORY-SOURCES.md) | Как да предложим хранилище нагоре по веригата чрез нормален публичен PR, сега с репо-първо „автоматично“ разклонение и поддръжка на пътя |
| 🧾 [Работен процес на Skill PR](contributors/SKILL-PR-WORKFLOW.md) | Нативно приемане, автоматична обработка на усилвателя, публикуване на `skills_omni/` и очаквания на рецензентите |
| 📄 [Шаблон за умения](contributors/SKILL-TEMPLATE.md) | Стартер `SKILL.md` с актуален преден материал и структура |
| 🔬 [Анатомия на уменията](contributors/SKILL-ANATOMY.md) | Структура и очаквания за качество за дадено умение |
| ✅ [Лента за качество](contributors/QUALITY-BAR.md) | Критерии за приемане на хранилището |
| 🏆 [Набор с най-добри резултати](contributors/HIGH-SCORE-PLAYBOOK.md) | Какво води до висока зрялост, качество, най-добри практики и резултати за сигурност |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx awesome-omni-skills                       # Guided install in TTY
npx awesome-omni-skills install --guided      # Forced guided install
npx awesome-omni-skills ui                    # Ink visual shell
npx awesome-omni-skills ui --text             # Text fallback UI
```

```bash
# 🔎 Discovery
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx awesome-omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx awesome-omni-skills install --guided --path ./my-skills --skill architecture
npx awesome-omni-skills --cursor --skill omni-figma
npx awesome-omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx awesome-omni-skills config-mcp --list-targets
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx awesome-omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx awesome-omni-skills recategorize
npx awesome-omni-skills recategorize --write

# 🔌 Services
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills api --port 3333
npx awesome-omni-skills a2a --port 3335

# 🧪 Validation
npx awesome-omni-skills smoke
npx awesome-omni-skills doctor
```

За пълната командна повърхност за краен потребител използвайте [CLI User Guide](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Конвейерът за изграждане излъчва машинночетими файлове, които управляват всяка повърхност за изпълнение:

| Артефакт | Цел |
|:---------|:--------|
| `metadata.json` | Валидиране в цялото хранилище и обобщение на резултатите |
| `skills_index.json` | Репо-локален нормализиран индекс на умения |
| `dist/catalog.json` | Издаден каталог за търсене и вписване |
| `dist/bundles.json` | Дефиниции на пакети с наличност |
| `dist/manifests/<skill>.json` | Машинно четим манифест за всяко умение |
| `dist/archives/<skill>.zip` | Архив на уменията (zip) |
| `dist/archives/<skill>.tar.gz` | Архив на умения (tarball) |
| `dist/archives/<skill>.checksums.txt` | Манифест на контролната сума на SHA-256 |

`dist/` остава ангажиран нарочно. Тези генерирани артефакти са част от договора за инсталиране, API, MCP, A2A, smoke и освобождаване.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API на регистър само за четене за умения, пакети, сравнение, планиране на инсталиране и изтегляне на артефакти.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Локалната странична кола вече поддържа първокласно писане на MCP конфигурация за:

- Клод Код
- Курсор
- VS код и контейнери за разработка
- Gemini CLI
- Антигравитация
- Киро
- Codex CLI
- Продължете
- Уиндсърф
- OpenCode
- Клайн
- GitHub Copilot CLI
- Кило код
- Зед
- Гъска### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Жизнен цикъл на задачата, поточно предаване, постоянство, възстановяване при рестартиране и локална оркестрация от първо ниво. Споделеното наето изпълнение е налично, когато е изрично активирано; Redis остава разширена хоствана опция, а не локалният път по подразбиране.---

## 🗂️ Repository Map

| Път | Цел |
|:-----|:--------|
| 📂 `умения/` | Канонични авторски умения |
| 📖 `docs/users/` | Документация за краен потребител |
| 🤝 `docs/contributors/` | Шаблони и насоки за сътрудник |
| 🏗️ `docs/architecture/` | Пътна карта, ADR и технически анализ |
| 🔧 `docs/operations/` | Оперативни книги |
| 📋 `docs/specs/` | Договори за време на изпълнение, протокол и артефакт |
| 📚 `docs/CATALOG.md` | Генериран каталог с умения |
| 📦 `dist/` | Генерирани машинночетими артефакти |
| 🧠 `packages/catalog-core/` | Споделено време за изпълнение на каталог с `ICatalogStorageAdapter` DI |
| 🌐 `packages/server-api/` | HTTP API само за четене с OpenAPI/Swagger UI на `/docs` |
| 🔌 `packages/server-mcp/` | MCP сървър и локален кош |
| 🤖 `packages/server-a2a/` | A2A сървър и време за изпълнение на задачи |
| 🖥️ `packages/cli/` | Унифицирани CLI входни точки, инсталационна логика и Ink визуален TUI (ESM-роден) |
| ⚙️ `инструменти/скриптове/` | Валидиране, генериране, проверка и тестове |
| 🧪 `vitest.workspace.js` | Конфигурация на работното пространство на Vitest monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

Димният цикъл потвърждава:

- ✅ валидиране на умения и генериране на метаданни
- ✅ инструмент за прекатегоризиране на таксономията
- ✅ генериране на артефакт от каталог
- ✅ генериран каталожен маркдаун
- ✅ създаване и проверка на архив
- ✅ тестов пакет за наследена интеграция (Python PTY + Node TUI твърдения)
- ✅ Комплект единици Vitest за точкуване, търсене и филтриране на каталожно ядро
- ✅ `npm pack --dry-run`
- ✅ API стартиране и здраве с OpenAPI/Swagger UI на `/docs`
- ✅ MCP зареждане в `stdio`, `stream` и `sse`
- ✅ A2A стартиране, анкетиране, SSE стрийминг, анулиране и жизнен цикъл на конфигуриране чрез натискане
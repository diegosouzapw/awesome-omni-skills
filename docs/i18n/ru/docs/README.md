# 📖 Awesome Omni Skills — Documentation Hub (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Центральный справочник по использованию, участию и эксплуатации Awesome Omni Skills в качестве общедоступного хранилища навыков, курируемой производной поверхности лучших практик и общей платформы среды выполнения.**

Стандартные файлы сообщества находятся в корне репозитория:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Пакет npm, репозиторий GitHub, сгенерированная документация и точки входа во время выполнения теперь согласованы с**Awesome Omni Skills**. Текущее состояние развертывания: [Внедрение Awesome Omni Skills](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Базовый трек сейчас живет в состоянии активного проекта, а вторая волна расширения категории уже в каталоге. Теперь проект следует рассматривать как рабочую основу с возможностью дальнейшего расширения:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Будущее расширение остается преднамеренным:

- углубить понятия «дизайн», «инструменты», «ИИ данных» и «машинное обучение».
- избегайте повторного открытия неактивных категорий, не связанных с кодом, до тех пор, пока текущие треки, не относящиеся к коду, не станут более глубокими.
- при этом сохраняйте неизменным минимальный уровень качества и путь проверки усилителя.

Эта работа по расширению теперь отражена непосредственно в действующем каталоге и документации по архитектуре:

- текущий снимок каталога в [Каталог](CATALOG.md)
- среда выполнения и форма артефакта в [Анализ кодовой базы](architecture/CODEBASE-ANALYSIS.md)
- направление вперед в [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills следует рассматривать как три взаимосвязанные поверхности:

| Поверхность | Что это такое | Как это меняется |
|:--------|:-----------|:---------------|
| 📥 `навыки/` | Публичный репозиторий собственных навыков | PR от прямых участников и проверенный внешний прием на основе репозитория |
| ✨ `skills_omni/` | Кураторская улучшенная производная поверхность из лучших практик | Только частные PR-компаньоны-усилители |
| 🖥️ Рабочие поверхности | CLI, API, MCP и A2A в одном созданном каталоге | Автоматизация сборки, проверки и выпуска |---

## 📌 Current Decisions

Эти вопросы архитектуры больше не являются «открытыми» на практике и теперь рассматриваются как проектные решения:

1.**Распространение осуществляется в первую очередь в формате манифеста плюс подписанные архивы**
   Машиночитаемый манифест остается контрактом, используемым CLI, API, MCP и A2A. Подписанные архивы для каждого навыка — это поверхность загрузки и выпуска, расположенная поверх этого контракта.
2.**Частные или премиум-каталоги должны использовать одну и ту же схему манифеста**
   Аутентификация и политика должны распределяться снаружи, а не путем разветвления формы манифеста или каталога.
3.**Конфигурация MCP должна сводиться к нескольким каноническим экспортным семействам**
   Awesome Omni Skills теперь стандартизируется на основе JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` и TOML `[mcp_servers]`, сохраняя при этом специальные средства записи только там, где официальные клиентские документы требуют другой структуры.

Эти решения соответствуют текущей официальной документации MCP и клиентской документации, включая:

- официальное руководство по поддержке реестра MCP и расширений на `modelcontextprotocol.io`
- Документы OpenAI Docs MCP и Codex CLI на сайтах Developers.openai.com и Platform.openai.com.
- Расширение VS Code MCP и документация по продукту на `code.visualstudio.com`
- клиентская документация для Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman и JetBrains AI Assistant.---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Док | Что вы узнаете |
|:----|:------------------|
| 📘 [Начало работы](users/GETTING-STARTED.md) | Установите, проверьте и задействуйте свой первый навык |
| 🧭 [Руководство пользователя CLI](users/CLI-USER-GUIDE.md) | Полный справочник команд и реальные шаблоны использования CLI |
| 📗 [Руководство по использованию](users/USAGE.md) | Команды CLI, режимы установки, команды времени выполнения и потоки настройки MCP |
| 📦 [Наборы](users/BUNDLES.md) | Рекомендуемые пакеты и их текущая доступность |
| 📚 [Каталог](CATALOG.md) | Автоматически создаваемый каталог опубликованных навыков |
| 🔧 [Системный Runbook](operations/RUNBOOK.md) | Создавать, обслуживать, защищать среду выполнения и устранять неполадки |### 🏗️ If You Want to **Understand** the Runtime

| Док | Что вы узнаете |
|:----|:------------------|
| 🗂️ [Структура проекта](PROJECT-STRUCTURE.md) | Полная ссылка на каталог и файл монорепозитория |
| 🗺️ [Дорожная карта Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Эволюция архитектуры, закрытые решения и оставшиеся области расширения |
| 🧭 [Дорожная карта CLI UX](architecture/CLI-UX-ROADMAP.md) | Исторический план и нынешний облик управляемого и визуального CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Базовое монорепозиторий и решение для совместного выполнения |
| 🔬 [Анализ кодовой базы](architecture/CODEBASE-ANALYSIS.md) | Текущий состав среды выполнения, количество и границы системы |
| 🌐 [Поверхность API каталога](specs/CATALOG-API.md) | Конечные точки HTTP, фильтрация, управление и загрузка |
| 🧩 [Управляемый установщик через интерфейс командной строки](specs/CLI-GUIDED-INSTALLER.md) | Поведенческий контракт для управляемого установщика |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Визуальная оболочка Ink, модель состояния и центр обслуживания |
| 🔌 [Локальная коляска MCP](specs/LOCAL-MCP-SIDECAR.md) | Инструменты с поддержкой файловой системы, модель белого списка и запись конфигурации |
| 🧭 [Матрица поддержки клиентов](specs/CLIENT-SUPPORT-MATRIX.md) | Поддерживаемые клиенты CLI и IDE, средства записи, ручные цели и ссылки на источники |
| 📊 [Классификация навыков](specs/SKILL-CLASSIFICATION.md) | Таксономия, эвристика оценки и артефакты метаданных |
| 🛡️ [Проверка безопасности](specs/SECURITY-VALIDATION.md) | Сканеры, архивы, подписи и проверка релизов |
| 📋 [Спецификация манифеста навыков](specs/SKILL-MANIFEST.md) | Машиночитаемый формат манифеста и договор совместимости |### 🤝 If You Want to **Contribute**

| Док | Что вы узнаете |
|:----|:------------------|
| 📝 [Руководство для участников](../CONTRIBUTING.md) | Рабочий процесс репо и ожидания от запросов на включение |
| 🌍 [Источники репозитория](../REPOSITORY-SOURCES.md) | Как предложить вышестоящий репозиторий через обычный публичный PR, теперь с поддержкой веток и путей repo-first `auto` |
| 🧾 [Рабочий процесс в сфере PR](contributors/SKILL-PR-WORKFLOW.md) | Нативный прием, автоматическая обработка улучшений, публикация `skills_omni/` и ожидания рецензентов |
| 📄 [Шаблон навыков](contributors/SKILL-TEMPLATE.md) | Стартер `SKILL.md` с текущим оформлением и структурой |
| 🔬 [Анатомия навыков](авторы/SKILL-ANATOMY.md) | Структура и ожидания качества навыка |
| ✅ [Панель качества](авторы/QUALITY-BAR.md) | Критерии приемки репозитория |
| 🏆 [Сборник рекордов](авторы/HIGH-SCORE-PLAYBOOK.md) | Что определяет высокие оценки зрелости, качества, передового опыта и безопасности |---

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

Для получения полной информации о командах конечного пользователя используйте [Руководство пользователя CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Конвейер сборки создает машиночитаемые файлы, которые управляют каждой поверхностью среды выполнения:

| Артефакт | Цель |
|:---------|:--------|
| `метаданные.json` | Проверка всего репозитория и сводка оценок |
| `skills_index.json` | Нормализованный индекс навыков Repo-local |
| `dist/catalog.json` | Опубликован каталог для поиска и размещения |
| `dist/bundles.json` | Определения пакетов с доступностью |
| `dist/manifests/<skill>.json` | Машиночитаемый манифест для каждого навыка |
| `dist/archives/<skill>.zip` | Архив навыков (zip) |
| `dist/archives/<skill>.tar.gz` | Архив навыков (tarball) |
| `dist/archives/<skill>.checksums.txt` | Манифест контрольной суммы SHA-256 |

`dist/` намеренно остаётся зафиксированным. Эти сгенерированные артефакты являются частью контракта на установку, API, MCP, A2A, дым и выпуск.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Доступный только для чтения API реестра для навыков, пакетов, сравнения, планирования установки и загрузки артефактов.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Локальная коляска теперь поддерживает первоклассную запись конфигурации MCP для:

- Клод Код
- Курсор
- Код VS и контейнеры разработки
- интерфейс командной строки Близнецов
- Антигравитация
- Киро
- Интерфейс командной строки Кодекса
- Продолжить
- Виндсерфинг
- Открытый код
- Клайн
- Интерфейс командной строки GitHub Copilot
- Код килограмма
- Зед
- Гусь### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Жизненный цикл задач, потоковая передача, сохранение, перезапуск восстановления и простая локальная оркестровка. Совместное арендованное выполнение доступно, если оно явно включено; Redis остается расширенным вариантом размещения, а не локальным путем по умолчанию.---

## 🗂️ Repository Map

| Путь | Цель |
|:-----|:--------|
| 📂 `навыки/` | Канонические авторские навыки |
| 📖 `документы/пользователи/` | Документация для конечного пользователя |
| 🤝 `документы/соавторы/` | Шаблоны и рекомендации для участников |
| 🏗️ `документы/архитектура/` | Дорожная карта, АДР и технический анализ |
| 🔧 `документы/операции/` | Операционные справочники |
| 📋 `документы/спецификации/` | Контракты среды выполнения, протоколов и артефактов |
| 📚 `docs/CATALOG.md` | Созданный каталог навыков |
| 📦 `расстояние/` | Генерируются машиночитаемые артефакты |
| 🧠 `packages/catalog-core/` | Общая среда выполнения каталога с DI `ICatalogStorageAdapter` |
| 🌐 `packages/server-api/` | HTTP API только для чтения с пользовательским интерфейсом OpenAPI/Swagger в `/docs` |
| 🔌 `packages/server-mcp/` | Сервер MCP и локальная коляска |
| 🤖 `packages/server-a2a/` | Сервер A2A и среда выполнения задач |
| 🖥️ `packages/cli/` | Унифицированные точки входа CLI, логика установки и визуальный TUI Ink (собственный ESM) |
| ⚙️ `инструменты/скрипты/` | Валидация, генерация, верификация и тесты |
| 🧪 `vitest.workspace.js` | Конфигурация рабочего пространства Vitest monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

Дымовой пробег подтверждает:

- ✅ проверка навыков и генерация метаданных
- ✅ инструмент перекатегоризации таксономии
- ✅ генерация артефактов каталога
- ✅ сгенерированная уценка каталога
- ✅ формирование и проверка архива
- ✅ устаревший набор тестов интеграции (утверждения Python PTY + Node TUI)
- ✅ Пакет модулей Vitest для оценки, поиска и фильтрации по основным каталогам.
- ✅ `npm package --dry-run`
- ✅ Загрузка и работоспособность API с помощью пользовательского интерфейса OpenAPI/Swagger в `/docs`
- ✅ Загрузка MCP в `stdio`, `stream` и `sse`
- ✅ Загрузка A2A, опрос, потоковая передача SSE, отмена и жизненный цикл push-конфигурации.
# 📖 Awesome Omni Skills — Documentation Hub (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Центральний довідник щодо використання, сприяння та роботи з Awesome Omni Skills як загальнодоступним сховищем навичок, підібраною похідною поверхнею передового досвіду та спільною платформою виконання.**

Стандартні файли спільноти знаходяться в корені сховища:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Пакет npm, репозиторій GitHub, згенеровані документи та точки входу серед виконання тепер узгоджено з**Awesome Omni Skills**. Поточний стан розгортання: [Випуск Awesome Omni Skills](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Основна доріжка зараз живе в стані активного проекту, а друга хвиля розширення категорії вже є в каталозі. Тепер проект слід розглядати як робочу базову лінію з додатковими майбутніми треками розширення:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Майбутнє розширення залишається обдуманим:

- поглибити `дизайн`, `інструменти`, `data-ai` та `машинне навчання`
- уникайте повторного відкриття сплячих категорій без нативного кодування, доки поточні доріжки з нативним кодом не матимуть більшої глибини
- при цьому зберігайте рівень якості та шлях огляду підсилювача недоторканими

Ця робота з розширення тепер відображається безпосередньо в поточному каталозі та документах архітектури:

- поточний знімок каталогу в [Каталог](CATALOG.md)
- час виконання та форма артефакту в [Аналіз кодової бази](architecture/CODEBASE-ANALYSIS.md)
- напрямок вперед у [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills слід розглядати як три пов’язані поверхні:

| Поверхня | Що це | Як це змінюється |
|:--------|:-----------|:---------------|
| 📥 `навички/` | Загальнодоступне сховище рідних навичок | Відповіді про зв’язки з прямими учасниками та перевірені зовнішні надходження на основі репозиторію |
| ✨ `skills_omni/` | Підібрана покращена похідна поверхня | Лише PR-супутники приватного підсилювача |
| 🖥️ Поверхні виконання | CLI, API, MCP і A2A над одним і тим самим згенерованим каталогом | Автоматизація збирання, перевірки та випуску |---

## 📌 Current Decisions

Ці питання архітектури більше не є «відкритими» на практиці і тепер розглядаються як проектні рішення:

1.**Розповсюдження залишається спочатку маніфестом плюс підписані архіви**
   Машинозчитуваний маніфест залишається контрактом, який використовують CLI, API, MCP і A2A. Підписані архіви для кожного навику — це поверхня завантаження та випуску, яка накладена поверх цього контракту.
2.**Приватні або преміум-каталоги повинні повторно використовувати ту саму схему маніфесту**
   Автентифікація та політика мають бути налаштовані зовні, а не шляхом розгалуження форми маніфесту чи каталогу.
3.**Конфігурація MCP повинна збігатися з кількома канонічними сімействами експорту**
   Awesome Omni Skills тепер стандартизовано навколо JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` і TOML `[mcp_servers]`, зберігаючи при цьому нестандартні автори лише там, де офіційні клієнтські документи вимагають іншої структури.

Ці рішення узгоджуються з поточною офіційною документацією MCP і клієнта, зокрема:

- офіційний реєстр MCP і інструкції з підтримки розширення на `modelcontextprotocol.io`
- Документи OpenAI Docs MCP і Codex CLI на `developers.openai.com` і `platform.openai.com`
- Розширення VS Code MCP і документація продукту на `code.visualstudio.com`
- клієнтські документи для Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman і JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Док | Що ви дізнаєтеся |
|:----|:------------------|
| 📘 [Початок роботи](users/GETTING-STARTED.md) | Установіть, перевірте та запустіть свій перший навик |
| 🧭 [Посібник користувача CLI](users/CLI-USER-GUIDE.md) | Повний довідник команд і шаблони використання CLI в реальному світі |
| 📗 [Посібник із використання](users/USAGE.md) | Команди CLI, режими встановлення, команди середовища виконання та потоки конфігурації MCP |
| 📦 [Пакети](users/BUNDLES.md) | Підібрані пакети та їх поточна доступність |
| 📚 [Каталог](CATALOG.md) | Автоматично створений каталог опублікованих навичок |
| 🔧 [Системний Runbook](operations/RUNBOOK.md) | Створюйте, обслуговуйте, захищайте та усувайте неполадки середовища виконання |### 🏗️ If You Want to **Understand** the Runtime

| Док | Що ви дізнаєтеся |
|:----|:------------------|
| 🗂️ [Структура проекту](PROJECT-STRUCTURE.md) | Повний каталог і посилання на файли для monorepo |
| 🗺️ [Дорожня карта Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Еволюція архітектури, закриті рішення та інші області розширення |
| 🧭 [Дорожня карта CLI UX](architecture/CLI-UX-ROADMAP.md) | Історичний план і сучасний вигляд керованого та візуального CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Основне монорепо та рішення спільного виконання |
| 🔬 [Аналіз кодової бази](architecture/CODEBASE-ANALYSIS.md) | Поточний склад середовища виконання, кількість і межі системи |
| 🌐 [Поверхня API каталогу](specs/CATALOG-API.md) | Кінцеві точки HTTP, фільтрація, керування та завантаження |
| 🧩 [Керований інсталятор CLI](specs/CLI-GUIDED-INSTALLER.md) | Поведінковий контракт для керованого монтажника |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Візуальна оболонка Ink, модель стану та сервісний центр |
| 🔌 [Локальний MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Інструменти з підтримкою файлової системи, модель білого списку та написання конфігурації |
| 🧭 [Матриця підтримки клієнтів](specs/CLIENT-SUPPORT-MATRIX.md) | Підтримувані клієнти CLI та IDE, автори, цілі вручну та посилання на джерело |
| 📊 [Класифікація навичок](specs/SKILL-CLASSIFICATION.md) | Таксономія, евристика скорингу та артефакти метаданих |
| 🛡️ [Перевірка безпеки](specs/SECURITY-VALIDATION.md) | Сканери, архіви, підписи та перевірка випуску |
| 📋 [Специфікація маніфесту навичок](specs/SKILL-MANIFEST.md) | Машинозчитуваний формат маніфесту та договір сумісності |### 🤝 If You Want to **Contribute**

| Док | Що ви дізнаєтеся |
|:----|:------------------|
| 📝 [Посібник для участі](../CONTRIBUTING.md) | Робочий процес репо та очікування запиту на отримання |
| 🌍 [Джерела сховища](../REPOSITORY-SOURCES.md) | Як запропонувати вихідний репозиторій через звичайний публічний PR, тепер із підтримкою `автоматичних` репо-перших розгалужень і шляху |
| 🧾 [Робочий процес Skill PR](contributors/SKILL-PR-WORKFLOW.md) | Нативний прийом, автоматична обробка покращувачів, публікація `skills_omni/` та очікування рецензентів |
| 📄 [Шаблон навичок](contributors/SKILL-TEMPLATE.md) | Стартер `SKILL.md` з поточним переднім матеріалом і структурою |
| 🔬 [Анатомія навичок](учасники/SKILL-ANATOMY.md) | Структура та очікування якості для навички |
| ✅ [Панель якості](учасники/QUALITY-BAR.md) | Критерії прийняття до сховища |
| 🏆 [Збірник найкращих результатів](contributors/HIGH-SCORE-PLAYBOOK.md) | Що сприяє високій зрілості, якості, найкращим практикам і показникам безпеки |---

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

Для повної командної панелі кінцевого користувача скористайтеся [Посібником користувача CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Конвеєр збірки створює машинозчитувані файли, які керують кожною робочою поверхнею:

| Артефакт | Призначення |
|:---------|:--------|
| `metadata.json` | Перевірка на рівні репозиторію та зведення балів |
| `skills_index.json` | Репо-локальний нормалізований індекс навичок |
| `dist/catalog.json` | Опубліковано каталог для пошуку та переліку |
| `dist/bundles.json` | Визначення пакетів із доступністю |
| `dist/manifests/<skill>.json` | Машинозчитуваний маніфест для кожної навички |
| `dist/archives/<skill>.zip` | Архів навичок (zip) |
| `dist/archives/<skill>.tar.gz` | Архів навичок (tarball) |
| `dist/archives/<skill>.checksums.txt` | Маніфест контрольної суми SHA-256 |

`dist/` залишається зафіксованим навмисно. Ці згенеровані артефакти є частиною контракту на встановлення, API, MCP, A2A, smoke і випуску.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API реєстру лише для читання для навичок, пакетів, порівняння, планування встановлення та завантажень артефактів.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Локальний сайдкар тепер підтримує першокласну конфігурацію MCP для:

- Клод Код
- Курсор
- Контейнери VS Code і Dev
- Gemini CLI
- Антигравітація
- Кіро
- Codex CLI
- Продовжуйте
- Віндсерфінг
- OpenCode
- Клайн
- GitHub Copilot CLI
- Код кіло
- Зед
- Гусак### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Життєвий цикл завдання, потокова передача, збереження, відновлення після перезапуску та локальна оркестровка за принципом простого. Спільне орендоване виконання доступне, якщо ввімкнено явно; Redis залишається розширеним розміщеним варіантом, а не локальним шляхом за замовчуванням.---

## 🗂️ Repository Map

| Шлях | Призначення |
|:-----|:--------|
| 📂 `навички/` | Канонічні авторські навички |
| 📖 `docs/users/` | Документація кінцевого користувача |
| 🤝 `docs/contributors/` | Шаблони та вказівки для учасників |
| 🏗️ `docs/architecture/` | Дорожня карта, ADR та технічний аналіз |
| 🔧 `docs/operations/` | Оперативні журнали |
| 📋 `docs/specs/` | Контракти про час виконання, протокол і артефакт |
| 📚 `docs/CATALOG.md` | Згенерований каталог навичок |
| 📦 `dist/` | Згенеровані машиночитані артефакти |
| 🧠 `packages/catalog-core/` | Спільне середовище виконання каталогу з `ICatalogStorageAdapter` DI |
| 🌐 `packages/server-api/` | HTTP API лише для читання з OpenAPI/Swagger UI на `/docs` |
| 🔌 `packages/server-mcp/` | Сервер MCP і локальний коляска |
| 🤖 `packages/server-a2a/` | Сервер A2A та середовище виконання завдань |
| 🖥️ `packages/cli/` | Уніфіковані точки входу CLI, логіка встановлення та візуальний TUI Ink (нативний ESM) |
| ⚙️ `інструменти/сценарії/` | Валідація, генерація, верифікація та тестування |
| 🧪 `vitest.workspace.js` | Конфігурація робочої області monorepo Vitest |---

## 🧪 Release Validation

```bash
npm run smoke
```

Димовий цикл підтверджує:

- ✅ перевірка навичок і генерація метаданих
- ✅ інструменти для перекласифікації таксономії
- ✅ створення артефактів каталогу
- ✅ згенерована уцінка каталогу
- ✅ створення та перевірка архіву
- ✅ застарілий набір тестів інтеграції (твердження Python PTY + Node TUI)
- ✅ Набір модулів Vitest для оцінки основного каталогу, пошуку та фільтрації
- ✅ `npm pack --dry-run`
- ✅ Завантаження та справність API за допомогою OpenAPI/Swagger UI на `/docs`
- ✅ MCP завантажується в `stdio`, `stream` і `sse`
- ✅ Завантаження A2A, опитування, потокове передавання SSE, скасування та життєвий цикл налаштування push-config
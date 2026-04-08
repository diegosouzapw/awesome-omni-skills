# 🗂️ Project Structure (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Повний каталог і посилання на файли для монорепо Awesome Omni Skills.**---

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

>**Нативний каталог навичок.**Це основна загальнодоступна поверхня вмісту проекту.

Містить**154**каталоги навичок, кожен з яких містить щонайменше збірник ігор `SKILL.md`. Більші навички можуть включати підкаталоги `agents/`, `references/`, `examples/`, `scripts/` і `assets/`.

Навички надходять двома шляхами:
-**Прямі співавтори PRs**— люди подають навички безпосередньо
-**Зовнішній імпорт на основі репозиторію**— переглянуті `external-import/*` PR з репозиторіїв вище за течією

| Що він містить | Приклад |
|:----------------|:--------|
| `skills/omni-figma/SKILL.md` | Навички Figma проектування до коду |
| `skills/architecture/SKILL.md` | Архітектурний огляд і планувальна майстерність |
| `skills/<ім'я>/metadata.json` | Автоматично створена класифікація та оцінка |---

### `skills_omni/`

>**Відібрані покращені похідні лише англійською мовою.**Підтримується приватним конвеєром покращень.

Містить**110**розширених каталогів навичок, які віддзеркалюють і покращують рідні аналоги в `skills/`. Ця поверхня**не відкрита для прямих публічних внесків**— вона заповнюється виключно автоматизованим конвеєром покращувачів.

Кожна похідна версія зберігає посилання на рідне джерело, забезпечуючи вищий редакційний стандарт, завжди англійською мовою.---

### `packages/`

>**Робочі простори monorepo.**Весь код Node.js під час виконання зберігається тут.

| Пакет | npm Назва | Призначення |
|:--------|:---------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` | Середа виконання спільного каталогу з ін’єкцією залежностей `ICatalogStorageAdapter`. Забезпечує пошук, оцінку, порівняння, рекомендації та логіку плану встановлення, яка використовується всіма серверними поверхнями |
| 📂 `packages/cli/` | (коренева коробка пакетів) | Уніфіковані точки входу CLI, керований інсталятор, візуальний TUI Ink, діагностика, димові перевірки та засоби запуску служб. ESM-рідний |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Реєстр 9 клієнтів із можливістю інсталяції (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) із роздільною здатністю шляху та відображенням прапорів |
| 📂 `packages/server-api/` | `@omni-skills/server-api` | API каталогу HTTP лише для читання з OpenAPI 3.1, інтерфейсом користувача Swagger на `/docs`, автентифікацією, обмеженням швидкості, білими списками CORS/IP, завантаженнями та часом виконання адміністратора |
| 📂 `packages/server-mcp/` | `@omni-skills/server-mcp` | Сервер MCP, що підтримує транспорти `stdio`, `stream` і `sse`. Режим локального помічника додає інструменти встановлення/видалення з урахуванням файлової системи та написання конфігурації MCP з урахуванням клієнта для 16 клієнтів із можливістю конфігурації |
| 📂 `packages/server-a2a/` | `@omni-skills/server-a2a` | Середовище виконання завдань A2A (Agent-to-Agent) із постійністю JSON/SQLite, відновленням перезапуску, потоковою передачею SSE, скасуванням, режимом зовнішнього виконавця та додатковою орендованою координацією |

Кожен пакет має власний каталог `package.json`, `src/` і (крім `install-targets`) `vitest.config.js` для модульних тестів.---

### `dist/`

>**Згенеровані артефакти під час виконання.**Навмисне дотримання контролю версій.

Ці файли є машиночитаними виходами, які споживаються встановленням CLI, відповідями API, інструментами MCP, завданнями A2A, димовими тестами та перевіркою випуску. Вони відновлюються `npm run build`.

| Шлях | Призначення |
|:-----|:--------|
| `dist/catalog.json` | Опублікований каталог із усіма 154 навичками, оцінками та метаданими |
| `dist/bundles.json` | Визначення пакетів із статусом доступності учасників |
| `dist/manifests/<skill>.json` | Машинозчитуваний маніфест для кожної навички |
| `dist/archives/<skill>.zip` | ZIP-архів для кожної навички для завантаження |
| `dist/archives/<skill>.tar.gz` | Архів tar-архіву для кожного навику для завантаження |
| `dist/archives/<skill>.checksums.txt` | Маніфест контрольної суми SHA-256 для кожного архіву |
| `dist/archives/<skill>.zip.sig` | Відокремлений підпис (лише під час випуску, ігнорується) |
| `dist/release-notes.md` | Автоматично створені примітки до випуску (gitignored) |
| `dist/signing/` | Похідний матеріал відкритого ключа (gitignored) |

>**Чому зафіксовано `dist/`?**Тому що це частина контракту на встановлення, API, MCP, A2A та випуску. Споживачі очікують, що ці файли будуть присутні без запуску збірки.---

### `data/`

>**Файли статичних даних проекту.**Визначення з контрольованим джерелом, які керують поведінкою збірки та виконання.

| Файл | Призначення |
|:-----|:--------|
| `data/bundles.json` | Підібрані визначення пакетів (списки учасників навичок на пакет) |
| `data/project_identity.json` | Ідентифікація канонічного проекту: назва, опис, домашня сторінка, теми GitHub, визначення поверхонь середовища виконання та списки клієнтів |
| `data/project_status.json` | Згенерований знімок показників проекту: кількість навичок, бали, кількість клієнтів, кількість категорій і розкид якості |---

### `docs/`

>**Вся проектна документація.**Організовано за аудиторією.

| Шлях | Аудиторія | Зміст |
|:-----|:---------|:--------|
| `docs/README.md` | Всі | Центр документації — центральний покажчик усіх документів |
| `docs/CATALOG.md` | Користувачі | Автоматично створений каталог із переліком усіх 154 навичок із оцінками |
| `docs/PROJECT-STRUCTURE.md` | Всі | Цей файл — посилання на каталог проекту |
| `docs/users/` | Кінцеві користувачі | Початок роботи, посібник користувача CLI, посібник із використання, пакети, Runbook |
| `docs/contributors/` | Учасники | Анатомія навичок, шаблон, робочий процес PR, панель якості, збірник найкращих результатів |
| `docs/specs/` | Архітектори | API, MCP sidecar, інсталятор CLI, візуальна оболонка, матриця підтримки клієнта, класифікація, безпека та специфікації маніфесту |
| `docs/i18n/` | Міжнародні користувачі | Автоматично створені переклади кореневого README 32 мовами |#### `docs/users/`

| Файл | Призначення |
|:-----|:--------|
| `GETTING-STARTED.md` | Встановіть, перевірте та запустіть навик менш ніж за 2 хвилини |
| `CLI-USER-GUIDE.md` | Повний довідник команд із покроковими сценаріями |
| `USAGE.md` | Команди CLI, режими встановлення, команди середовища виконання та потоки конфігурації MCP |
| `BUNDLES.md` | Підібрані пакети та їх поточна доступність |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Ребрендування статусу міграції та звіт про прийняття |
| `RUNBOOK.md` | Операційна довідка (також пов’язана як `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Файл | Призначення |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Структура та очікування якості для навички |
| `SKILL-TEMPLATE.md` | Стартер `SKILL.md` з поточним фронтматером |
| `SKILL-PR-WORKFLOW.md` | Рідне споживання, обробка підсилювача та очікування рецензентів |
| `QUALITY-BAR.md` | Критерії прийнятності та поточні контрольні показники |
| `HIGH-SCORE-PLAYBOOK.md` | Що сприяє високій зрілості, якості, найкращим практикам і показникам безпеки |#### `docs/specs/`

| Файл | Призначення |
|:-----|:--------|
| `CATALOG-API.md` | Кінцеві точки HTTP, фільтрація, керування та завантаження |
| `CLI-GUIDED-INSTALLER.md` | Поведінковий контракт для керованого монтажника |
| `CLI-VISUAL-SHELL.md` | Візуальна оболонка Ink, модель стану та сервісний центр |
| `LOCAL-MCP-SIDECAR.md` | Інструменти з підтримкою файлової системи, модель білого списку та написання конфігурації |
| `CLIENT-SUPPORT-MATRIX.md` | Повна довідка про клієнта та автора для 9 інсталяційних + 16 клієнтів конфігурації |
| `SKILL-CLASSIFICATION.md` | Таксономія, евристика скорингу та артефакти метаданих |
| `SECURITY-VALIDATION.md` | Сканери, архіви, підписи та перевірка випуску |
| `SKILL-MANIFEST.md` | Машинозчитуваний формат маніфесту та договір сумісності |#### `docs/i18n/`

Містить**32**мовні каталоги, кожен із перекладеним `README.md`. Мови включають: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Переклади автоматично генеруються `npm run i18n:render` і перевіряються `npm run i18n:check`.---

### `tools/`

>**Створення, перевірка та тестування інфраструктури.**Переважно сценарії Python, що використовуються командами `npm run`.#### `tools/scripts/`

| Сценарій | Команда npm | Призначення |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Перевіряє всі файли `SKILL.md` і повторно генерує `metadata.json` |
| `skill_metadata.py` | (імпортовано перевіркою) | Базовий монолітний валідатор: синтаксичний аналіз переднього матеріалу, таксономія, скоринг, сканування безпеки |
| `recategorize_skills.py` | `npm run taxonomy:report` | Показує або застосовує нормалізацію канонічної категорії |
| `generate_index.py` | `індекс виконання npm` | Генерує маніфести `dist/`, архіви та контрольні суми |
| `build_catalog.js` | `npm run catalog` | Генерує `docs/CATALOG.md` з `skills_index.json` |
| `generate_project_status.py` | `npm run project:status` | Генерує `data/project_status.json` з поточними показниками |
| `render_project_docs.py` | `npm run docs:render` | Оновлює створені блоки в README, документах і CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Створює або оновлює переклади `docs/i18n/` |
| `repository_sources.py` | `npm run registry:render` | Відтворює та перевіряє `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Перевіряє вирівнювання ідентифікаторів package.json, README та репо |
| `verify_archives.py` | `npm run verify:archives` | Перевіряє цілісність архіву та додаткові підписи |
| `verify_security_scanners.py` | `npm run verify:scanners` | Підтверджує покриття сканера в згенерованих метаданих |
| `generate_release_notes.py` | `npm run release:notes` | Створює власні примітки до випуску з метаданих та історії git |
| `next_release_version.py` | `npm run release:next-version` | Обчислює наступну версію семвера за допомогою політики patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Синхронізує версії між пакетами робочої області |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Друкує або застосовує опис GitHub, домашню сторінку та теми |
| `validate_contribution_scope.py` | (CI) | Перевіряє межі сфери PR внеску |
| `install_githooks.js` | `npm run hooks:install` | Встановлює локальний хук попередньої фіксації |#### `tools/scripts/tests/`

Набори тестів інтеграції та TUI, які використовує `npm test`:
— Застарілі тести PTY на Python
- Твердження вузла TUI
- Оркестрант тестового бігуна---

### `.github/`

>**Дії GitHub і шаблони спільнот.**#### `.github/workflows/`

| Робочий процес | Тригер | Призначення |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR до `main` | Створення, тестування та підтвердження згенерованих артефактів зафіксовано |
| `release.yml` | Тег push `v*` або відправка вручну | Сканери версії, підписання, публікація npm, випуск GitHub |
| `auto-release-skill-merges.yml` | Об’єднайте в `main`, торкнувшись `skills/*` | Автоматичне оновлення версії, тегування та випуск у разі зміни навичок |
| `enhance-pr-skills.yml` | PR зі зміною навичок | Запускає приватний конвеєр покращувачів і публікує супутні PR |
| `sync-repository-metadata.yml` | Зміни в `data/project_identity.json` | Синхронізує опис GitHub, домашню сторінку та теми |#### `.github/pull_request_template.md`

Шаблон PR за замовчуванням із контрольним списком для внеску навичок і часу виконання.---

### `.githooks/`

>**Локальні хуки Git.**Встановлюється за допомогою `npm run hooks:install`.

| Файл | Призначення |
|:-----|:--------|
| `попереднє закріплення` | Запускає базову перевірку перед тим, як дозволити фіксацію |---

## 📄 Root Files Reference

| Файл | Призначення |
|:-----|:--------|
| `README.md` | Загальнодоступний проект README з головним банером, посібником зі встановлення та повним оглядом функцій |
| `CONTRIBUTING.md` | Посібник для співавторів із навичками, часом виконання та робочими процесами |
| `SECURITY.md` | Інструкції щодо політики безпеки, обсягу та звітів про вразливості |
| `КОДЕКС_ПОВЕДІНКИ.md` | Угода співавторів v2.1 |
| `REPOSITORY-SOURCES.md` | Громадський реєстр запропонованих сховищ для зовнішнього прийому |
| `ЛІЦЕНЗІЯ` | Ліцензія MIT (код і інструменти) |
| `ЛІЦЕНЗІЯ-КОНТЕНТ` | CC BY 4.0 (документація та вміст навичок) |
| `package.json` | Кореневий пакет monorepo: сценарії, залежності, точки входу в кошик, файли та конфігурація робочої області |
| `package-lock.json` | файл блокування npm (генерується автоматично) |
| `metadata.json` | Перевірка на рівні репозиторію та зведення балів (генерується `npm run validate`) |
| `skills_index.json` | Репо-локальний нормалізований індекс навичок (генерується `npm run validate`) |
| `.gitignore` | Винятки з контролю версій — зокрема `dist/`**не**ігнорується |
| `.npmignore` | Виключає `__pycache__/` і `*.pyc` з архіву npm |
| `.node-version` | Закріплення версії Node.js: `22` |
| `.nvmrc` | закріплення версії nvm: `22` (віддзеркалює `.node-version`) |
| `vitest.config.js` | Коренева конфігурація Vitest із посиланням на всі 5 тестових конфігурацій на рівні пакета |
| `vitest.workspace.js` | Визначення робочої області Vitest для виконання тесту з підтримкою монорепо |---

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

Усе вищезазначене виконується послідовно як частина `npm run build`.
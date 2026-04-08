# 🗂️ Project Structure (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Пълна справка за директория и файл за Awesome Omni Skills monorepo.**---

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

>**Каталогът с естествени умения.**Това е основната публична повърхност на съдържанието на проекта.

Съдържа**154**директории с умения, всяка с най-малко книга за игра `SKILL.md`. По-големите умения могат да включват поддиректории `agents/`, `references/`, `examples/`, `scripts/` и `assets/`.

Уменията достигат по два пътя на приемане:
-**PRs с директни сътрудници**— хората изпращат умения директно
-**Външен импорт, базиран на хранилище**— прегледани `external-import/*` PR от хранилища нагоре по веригата

| Какво съдържа | Пример |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Умение за проектиране към код на Figma |
| `skills/architecture/SKILL.md` | Архитектурен преглед и умение за планиране |
| `skills/<име>/metadata.json` | Автоматично генерирана класификация и точкуване |---

### `skills_omni/`

>**Подбрани подобрени производни само на английски език.**Поддържа се от частния канал за подобрения.

Съдържа**110**подобрени директории с умения, които отразяват и подобряват родните си аналогове в `skills/`. Тази повърхност**не е отворена за директен публичен принос**— тя се попълва изключително от автоматизирания тръбопровод за подобряване.

Всеки производен запазва приписването на родния си източник, като същевременно осигурява по-висок редакционен стандарт, винаги на английски.---

### `packages/`

>**Работните пространства monorepo.**Целият Node.js код за изпълнение се намира тук.

| Пакет | npm Име | Цел |
|:--------|:---------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` | Споделено време за изпълнение на каталог с инжектиране на зависимост `ICatalogStorageAdapter`. Осигурява логика за търсене, оценяване, сравнение, препоръки и план за инсталиране, използвани от всички сървърни повърхности |
| 📂 `packages/cli/` | (корен пакет контейнер) | Унифицирани входни точки на CLI, инсталатор с напътствия, Ink визуален TUI, диагностика, димни проверки и стартиращи услуги. ESM-роден |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Регистър на 9 клиента с възможност за инсталиране (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) с резолюция на пътя и картографиране на флагове |
| 📂 `packages/server-api/` | `@omni-skills/server-api` | API за HTTP каталог само за четене с OpenAPI 3.1, Swagger UI на `/docs`, удостоверяване, ограничаване на скоростта, CORS/IP разрешени списъци, изтегляния и администраторско време за изпълнение |
| 📂 `пакети/сървър-mcp/` | `@omni-skills/server-mcp` | MCP сървър, поддържащ транспорти `stdio`, `stream` и `sse`. Режимът Local sidecar добавя инструменти за инсталиране/премахване, съобразени с файловата система, и писане на конфигурация на MCP за 16 клиента с възможност за конфигурация |
| 📂 `packages/server-a2a/` | `@omni-skills/сървър-a2a` | A2A (Agent-to-Agent) време за изпълнение на задача с JSON/SQLite постоянство, възстановяване при рестартиране, SSE стрийминг, анулиране, режим на външен изпълнител и опционална наета координация |

Всеки пакет има своя собствена директория `package.json`, `src/` и (с изключение на `install-targets`) `vitest.config.js` за модулни тестове.---

### `dist/`

>**Генерирани артефакти по време на изпълнение.**Умишлено ангажирани с контрол на версиите.

Тези файлове са машинночетими изходи, използвани от CLI инсталации, API отговори, MCP инструменти, A2A задачи, димни тестове и проверка на изданието. Те се регенерират от `npm run build`.

| Път | Цел |
|:-----|:--------|
| `dist/catalog.json` | Публикуван каталог с всички 154 умения, резултати и метаданни |
| `dist/bundles.json` | Дефиниции на пакети със състояние на наличност на член |
| `dist/manifests/<skill>.json` | Машинно четим манифест за всяко умение |
| `dist/archives/<skill>.zip` | ZIP архив за всяко умение за изтегляне |
| `dist/archives/<skill>.tar.gz` | Архив на tarball за всяко умение за изтегляне |
| `dist/archives/<skill>.checksums.txt` | SHA-256 манифест на контролна сума за архив |
| `dist/archives/<skill>.zip.sig` | Отделен подпис (само по време на издаване, игнориран) |
| `dist/release-notes.md` | Автоматично генерирани бележки по изданието (gitignored) |
| `dist/signing/` | Изведен материал с публичен ключ (gitignored) |

>**Защо е ангажиран `dist/`?**Защото е част от договора за инсталиране, API, MCP, A2A и освобождаване. Потребителите очакват тези файлове да присъстват, без да стартират компилация.---

### `data/`

>**Статични файлове с данни за проекти.**Дефиниции, контролирани от източника, които управляват поведението на изграждане и изпълнение.

| Файл | Цел |
|:-----|:--------|
| `data/bundles.json` | Подбрани дефиниции на пакет (списъци с членове на умения за пакет) |
| `data/project_identity.json` | Канонична идентичност на проекта: име, описание, начална страница, теми на GitHub, дефиниции на повърхности по време на изпълнение и списъци с клиенти |
| `data/project_status.json` | Генерирана моментна снимка на показателите на проекта: брой умения, резултати, брой клиенти, брой категории и разпространение на качеството |---

### `docs/`

>**Цялата документация по проекта.**Организирано по публика.

| Път | Публика | Съдържание |
|:-----|:---------|:--------|
| `docs/README.md` | Всички | Център за документация — централен индекс за всички документи |
| `docs/CATALOG.md` | Потребители | Автоматично генериран каталог, изброяващ всички 154 умения с резултати |
| `docs/PROJECT-STRUCTURE.md` | Всички | Този файл — препратка към директорията на проекта |
| `документи/потребители/` | Крайни потребители | Първи стъпки, CLI ръководство за потребителя, ръководство за използване, пакети, runbook |
| `docs/contributors/` | Сътрудници | Анатомия на уменията, шаблон, PR работен процес, лента за качество, книга с високи резултати |
| `docs/specs/` | Архитекти | API, MCP sidecar, CLI инсталатор, визуална обвивка, матрица за поддръжка на клиенти, спецификации за класификация, сигурност и манифест |
| `docs/i18n/` | Международни потребители | Автоматично генерирани преводи на основния README на 32 езика |#### `docs/users/`

| Файл | Цел |
|:-----|:--------|
| `ПЪРВИ СТАРТ.md` | Инсталирайте, проверете и извикайте умение за по-малко от 2 минути |
| `CLI-USER-GUIDE.md` | Пълна справка за командите със сценарии стъпка по стъпка |
| `USAGE.md` | CLI команди, режими на инсталиране, команди по време на изпълнение и потоци от конфигурация на MCP |
| `BUNDLES.md` | Подбрани пакети и текущата им наличност |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Ребрандиране на статус на миграция и доклад за приемане |
| `RUNBOOK.md` | Оперативна справка (също свързана като `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Файл | Цел |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Структура и очаквания за качество за дадено умение |
| `SKILL-TEMPLATE.md` | Стартер `SKILL.md` с текущ frontmatter |
| `SKILL-PR-WORKFLOW.md` | Естествен прием, обработка на подобрител и очаквания на рецензента |
| `QUALITY-BAR.md` | Критерии за приемане и текущи показатели |
| `HIGH-SCORE-PLAYBOOK.md` | Какво води до висока зрялост, качество, най-добри практики и резултати за сигурност |#### `docs/specs/`

| Файл | Цел |
|:-----|:--------|
| `CATALOG-API.md` | HTTP крайни точки, филтриране, управление и изтегляния |
| `CLI-GUIDED-INSTALLER.md` | Поведенчески договор за ръководения монтажник |
| `CLI-VISUAL-SHELL.md` | Визуална обвивка на Ink, модел на състоянието и център за услуги |
| `LOCAL-MCP-SIDECAR.md` | Инструменти, съобразени с файловата система, модел на разрешен списък и писане на конфигурация |
| `CLIENT-SUPPORT-MATRIX.md` | Пълна справка за клиента и писателя в 9 инсталационни + 16 конфигурационни клиента |
| `SKILL-CLASSIFICATION.md` | Таксономия, евристика за оценяване и артефакти на метаданни |
| `SECURITY-VALIDATION.md` | Скенери, архиви, подписи и проверка на издание |
| `SKILL-MANIFEST.md` | Машинно четим формат на манифест и договор за съвместимост |#### `docs/i18n/`

Съдържа**32**езикови директории, всяка с преведен `README.md`. Езиците включват: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Преводите се генерират автоматично от `npm run i18n:render` и се потвърждават от `npm run i18n:check`.---

### `tools/`

>**Изграждане, валидиране и тестване на инфраструктура.**Основно скриптове на Python, използвани от команди `npm run`.#### `tools/scripts/`

| Скрипт | Команда npm | Цел |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Валидира всички `SKILL.md` файлове и регенерира `metadata.json` |
| `skill_metadata.py` | (импортирано чрез валидиране) | Основен монолитен валидатор: разбор на преден материал, таксономия, точкуване, сканиране за сигурност |
| `recategorize_skills.py` | `npm run taxonomy:report` | Показва или прилага нормализиране на канонична категория |
| `generate_index.py` | `npm run index` | Генерира `dist/` манифести, архиви и контролни суми |
| `build_catalog.js` | `npm run catalog` | Генерира `docs/CATALOG.md` от `skills_index.json` |
| `generate_project_status.py` | `npm run project:status` | Генерира `data/project_status.json` с текущи показатели |
| `render_project_docs.py` | `npm run docs:render` | Актуализира генерираните блокове в README, docs и CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Генерира или актуализира преводи на `docs/i18n/` |
| `repository_sources.py` | `npm run registry:render` | Изобразява и валидира `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Проверява подравняването на идентичността на package.json, README и repo |
| `verify_archives.py` | `npm run verify:archives` | Проверява целостта на архива и незадължителните подписи |
| `verify_security_scanners.py` | `npm run verify:scanners` | Потвърждава покритието на скенера в генерираните метаданни |
| `generate_release_notes.py` | `npm run release:notes` | Генерира персонализирани бележки за изданието от метаданни и git история |
| `следваща_версия_версия.py` | `npm run release:next-version` | Изчислява следващата версия на semver с помощта на политиката patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Синхронизира версия в пакети за работно пространство |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Отпечатва или прилага описание, начална страница и теми на GitHub |
| `validate_contribution_scope.py` | (CI) | Потвърждава границите на обхвата на PR приноса |
| `install_githooks.js` | `npm run hooks:install` | Инсталира локалната кука за предварително ангажиране |#### `tools/scripts/tests/`

Интеграционни и TUI тестови пакети, използвани от `npm test`:
- Наследени тестове на Python PTY
- Възел TUI твърдения
- Тест бегач оркестратор---

### `.github/`

>**Действия на GitHub и шаблони на общността.**#### `.github/workflows/`

| Работен процес | Тригер | Цел |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR към `main` | Изградете, тествайте и потвърдете, че генерираните артефакти са ангажирани |
| `release.yml` | Натискане на маркер `v*` или ръчно изпращане | Скенери за версия на изданието, подписване, публикуване на npm, издание на GitHub |
| `auto-release-skill-merges.yml` | Обединете към `main` като докоснете `skills/*` | Автоматично добавяне на версия, маркиране и освобождаване при промени в уменията |
| `enhance-pr-skills.yml` | PR с промени в уменията | Управлява частния тръбопровод за подобряване и публикува придружаващ PR |
| `sync-repository-metadata.yml` | Промени в `data/project_identity.json` | Синхронизира GitHub описание, начална страница и теми |#### `.github/pull_request_template.md`

PR шаблон по подразбиране с контролен списък за принос на умения и време на работа.---

### `.githooks/`

>**Локални кукички на Git.**Инсталирани чрез `npm run hooks:install`.

| Файл | Цел |
|:-----|:--------|
| `предварително ангажиране` | Изпълнява основно валидиране, преди да позволи извършване |---

## 📄 Root Files Reference

| Файл | Цел |
|:-----|:--------|
| `README.md` | Обществен проект README с героен банер, ръководство за инсталиране и пълен преглед на функциите |
| `CONTRIBUTING.md` | Ръководство за сътрудник с умения, време на работа и работни потоци |
| `SECURITY.md` | Политика за сигурност, обхват и инструкции за докладване на уязвимости |
| `CODE_OF_CONDUCT.md` | Договор за сътрудник v2.1 |
| `REPOSITORY-SOURCES.md` | Публичен регистър на предложените хранилища нагоре по веригата за външен прием |
| `ЛИЦЕНЗ` | Лиценз на MIT (код и инструменти) |
| `ЛИЦЕНЗ-СЪДЪРЖАНИЕ` | CC BY 4.0 (документация и съдържание на умения) |
| `package.json` | Основен monorepo пакет: скриптове, зависимости, входни точки за кошче, файлове и конфигурация на работното пространство |
| `package-lock.json` | npm заключващ файл (автоматично генериран) |
| `metadata.json` | Валидиране в цялото хранилище и обобщение на резултатите (генерирани от `npm run validate`) |
| `skills_index.json` | Репо-локален нормализиран индекс на умения (генериран от `npm run validate`) |
| `.gitignore` | Изключения за контрол на версиите — особено `dist/`**не**се игнорира |
| `.npmignore` | Изключва `__pycache__/` и `*.pyc` от npm tarball |
| `.node-версия` | Фиксиране на версията на Node.js: `22` |
| `.nvmrc` | фиксиране на nvm версия: `22` (отразява `.node-version`) |
| `vitest.config.js` | Root конфигурация на Vitest, препращаща към всичките 5 тестови конфигурации на ниво пакет |
| `vitest.workspace.js` | Дефиниция на работното пространство на Vitest за изпълнение на тестове, съобразени с monorepo |---

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

Всичко по-горе се изпълнява последователно като част от `npm run build`.
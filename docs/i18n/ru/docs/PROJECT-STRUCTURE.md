# 🗂️ Project Structure (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Полная ссылка на каталог и файл монорепозитория Awesome Omni Skills.**---

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

>**Нативный каталог навыков.**Это основной общедоступный контент проекта.

Содержит**154**каталога навыков, каждый из которых содержит как минимум сборник сценариев `SKILL.md`. Более крупные навыки могут включать подкаталоги `agents/`, `references/`, `examples/`, `scripts/` и `assets/`.

Навыки приходят двумя путями поступления:
-**Прямой PR** – люди отправляют свои навыки напрямую.
-**Внешний импорт на основе репозитория**— проверены запросы `external-import/*` из вышестоящих репозиториев.

| Что он содержит | Пример |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Навыки проектирования в коде Figma |
| `skills/architecture/SKILL.md` | Обзор архитектуры и навыки планирования |
| `skills/<имя>/metadata.json` | Автоматически генерируемая классификация и оценка |---

### `skills_omni/`

>**Кураторские улучшенные производные версии только на английском языке.**Поддерживается частным каналом улучшения.

Содержит**110**расширенных каталогов навыков, которые отражают и улучшают свои собственные аналоги в `skills/`. Эта поверхность**не открыта для прямого публичного участия**— она заполняется исключительно конвейером автоматизированных энхансеров.

Каждый производный продукт сохраняет ссылку на родной источник, обеспечивая при этом более высокий редакционный стандарт, всегда на английском языке.---

### `packages/`

>**Рабочие пространства монорепо.**Здесь находится весь код Node.js во время выполнения.

| Пакет | имя npm | Цель |
|:--------|:---------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` | Среда выполнения общего каталога с внедрением зависимостей ICatalogStorageAdapter. Обеспечивает логику поиска, оценки, сравнения, рекомендаций и планирования установки, используемую всеми поверхностями сервера |
| 📂 `packages/cli/` | (корневой контейнер пакетов) | Унифицированные точки входа CLI, управляемый установщик, визуальный TUI Ink, диагностика, дымовые проверки и средства запуска служб. ESM-родной |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Реестр 9 клиентов с возможностью установки (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigradity, Goose, Qwen Code, OpenCode) с разрешением пути и сопоставлением флагов |
| 📂 `packages/server-api/` | `@omni-skills/server-api` | API каталога HTTP только для чтения с OpenAPI 3.1, пользовательским интерфейсом Swagger в `/docs`, аутентификацией, ограничением скорости, списками разрешений CORS/IP, загрузками и средой выполнения администратора |
| 📂 `packages/server-mcp/` | `@omni-skills/server-mcp` | Сервер MCP, поддерживающий транспорты `stdio`, `stream` и `sse`. Локальный дополнительный режим добавляет инструменты установки/удаления с учетом файловой системы и запись конфигурации MCP с учетом клиента для 16 клиентов с возможностью настройки |
| 📂 `packages/server-a2a/` | `@omni-skills/server-a2a` | Среда выполнения задач A2A (агент-агент) с сохранением JSON/SQLite, восстановлением после перезапуска, потоковой передачей SSE, отменой, режимом внешнего исполнителя и дополнительной арендованной координацией |

Каждый пакет имеет собственный каталог package.json, src/ и (кроме install-targets) vitest.config.js для модульных тестов.---

### `dist/`

>**Сгенерированы артефакты времени выполнения.**Намеренно используется контроль версий.

Эти файлы представляют собой машиночитаемые выходные данные, используемые при установке CLI, ответах API, инструментах MCP, задачах A2A, дымовых тестах и ​​проверке выпуска. Они восстанавливаются с помощью `npm run build`.

| Путь | Цель |
|:-----|:--------|
| `dist/catalog.json` | Опубликованный каталог со всеми 154 навыками, оценками и метаданными |
| `dist/bundles.json` | Определения пакетов со статусом доступности участников |
| `dist/manifests/<skill>.json` | Машиночитаемый манифест для каждого навыка |
| `dist/archives/<skill>.zip` | ZIP-архив для каждого навыка для скачивания |
| `dist/archives/<skill>.tar.gz` | Архив tarball для каждого навыка для скачивания |
| `dist/archives/<skill>.checksums.txt` | Манифест контрольной суммы SHA-256 для каждого архива |
| `dist/archives/<skill>.zip.sig` | Отдельная подпись (только во время выпуска, gitignored) |
| `dist/release-notes.md` | Автоматически создаваемые примечания к выпуску (gitignored) |
| `расстояние/подпись/` | Производный материал открытого ключа (gitignored) |

>**Почему `dist/` зафиксирован?**Потому что это часть контракта на установку, API, MCP, A2A и выпуск. Потребители ожидают, что эти файлы будут присутствовать без запуска сборки.---

### `data/`

>**Файлы статических данных проекта.**Определения с контролем исходного кода, которые определяют поведение сборки и выполнения во время выполнения.

| Файл | Цель |
|:-----|:--------|
| `данные/bundles.json` | Определения курируемых пакетов (списки участников навыков для каждого пакета) |
| `данные/project_identity.json` | Каноническая идентичность проекта: имя, описание, домашняя страница, темы GitHub, определения поверхности среды выполнения и списки клиентов |
| `данные/project_status.json` | Снимок сгенерированных показателей проекта: количество навыков, баллы, количество клиентов, количество категорий и разброс по качеству |---

### `docs/`

>**Вся проектная документация.**Сортировка по аудитории.

| Путь | Аудитория | Содержание |
|:-----|:---------|:--------|
| `документы/README.md` | Все | Центр документации — центральный указатель всех документов |
| `документы/CATALOG.md` | Пользователи | Автоматически созданный каталог со списком всех 154 навыков с оценками |
| `docs/PROJECT-STRUCTURE.md` | Все | Этот файл — ссылка на каталог проекта |
| `документы/пользователи/` | Конечные пользователи | Начало работы, руководство пользователя CLI, руководство по использованию, пакеты, Runbook |
| `документы/соавторы/` | Авторы | Анатомия навыков, шаблон, рабочий процесс по связям с общественностью, шкала качества, таблица рекордов |
| `документы/спецификации/` | Архитекторы | API, вспомогательный модуль MCP, установщик CLI, визуальная оболочка, матрица поддержки клиентов, классификация, безопасность и спецификации манифеста |
| `документы/i18n/` | Международные пользователи | Автоматически сгенерированные переводы корневого README на 32 языка |#### `docs/users/`

| Файл | Цель |
|:-----|:--------|
| `НАЧАЛО СТАРТА.md` | Установите, проверьте и активируйте навык менее чем за 2 минуты |
| `CLI-USER-GUIDE.md` | Полный справочник команд с пошаговыми сценариями |
| `USAGE.md` | Команды CLI, режимы установки, команды времени выполнения и потоки настройки MCP |
| `BUNDLES.md` | Рекомендуемые пакеты и их текущая доступность |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Статус миграции ребрендинга и отчет о приемке |
| `RUNBOOK.md` | Операционный справочник (также связанный как `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Файл | Цель |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Структура и ожидания качества навыка |
| `SKILL-TEMPLATE.md` | Стартер `SKILL.md` с текущим оформлением |
| `SKILL-PR-WORKFLOW.md` | Прием нативного препарата, обработка усилителя и ожидания рецензента |
| `QUALITY-BAR.md` | Критерии приемки и текущие показатели |
| `HIGH-SCORE-PLAYBOOK.md` | Что определяет высокие оценки зрелости, качества, передового опыта и безопасности |#### `docs/specs/`

| Файл | Цель |
|:-----|:--------|
| `КАТАЛОГ-API.md` | Конечные точки HTTP, фильтрация, управление и загрузка |
| `CLI-GUIDED-INSTALLER.md` | Поведенческий контракт для управляемого установщика |
| `CLI-VISUAL-SHELL.md` | Визуальная оболочка Ink, модель состояния и центр обслуживания |
| `LOCAL-MCP-SIDECAR.md` | Инструменты с поддержкой файловой системы, модель белого списка и запись конфигурации |
| `CLIENT-SUPPORT-MATRIX.md` | Полный справочник по клиентам и средствам записи для 9 клиентов установки и 16 клиентов конфигурации |
| `SKILL-CLASSIFICATION.md` | Таксономия, эвристика оценки и артефакты метаданных |
| `SECURITY-VALIDATION.md` | Сканеры, архивы, подписи и проверка релизов |
| `SKILL-MANIFEST.md` | Машиночитаемый формат манифеста и договор совместимости |#### `docs/i18n/`

Содержит**32**языковых каталога, каждый из которых содержит переведенный `README.md`. К языкам относятся: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Переводы автоматически генерируются с помощью npm run i18n:render и проверяются с помощью npm run i18n:check.---

### `tools/`

>**Создание, проверка и тестирование инфраструктуры.**В основном скрипты Python, используемые командами npm run.#### `tools/scripts/`

| Скрипт | команда npm | Цель |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Проверяет все файлы `SKILL.md` и повторно генерирует `metadata.json` |
| `skill_metadata.py` | (импортировано с помощью проверки) | Основной монолитный валидатор: анализ фронтальной информации, таксономия, оценка, сканирование безопасности |
| `recategorize_skills.py` | `npm run таксономия: отчет` | Показывает или применяет каноническую нормализацию категорий |
| `generate_index.py` | `индекс запуска npm` | Генерирует манифесты `dist/`, архивы и контрольные суммы |
| `build_catalog.js` | `каталог запуска npm` | Генерирует `docs/CATALOG.md` из `skills_index.json` |
| `generate_project_status.py` | `npm run project:status` | Генерирует `data/project_status.json` с текущими метриками |
| `render_project_docs.py` | `npm run docs:render` | Обновления генерируемых блоков в README, документах и ​​CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Создает или обновляет переводы `docs/i18n/` |
| `repository_sources.py` | `npm run реестр:рендер` | Отрисовывает и проверяет `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm runidentity:check` | Проверяет соответствие package.json, README и идентичности репо |
| `verify_archives.py` | `npm runverify:archives` | Проверяет целостность архива и дополнительные подписи |
| `verify_security_scanners.py` | `npm runverify:сканеры` | Подтверждает покрытие сканера в сгенерированных метаданных |
| `generate_release_notes.py` | `npm run Release:notes` | Создает пользовательские примечания к выпуску на основе метаданных и истории git |
| `next_release_version.py` | `npm run Release: следующая версия` | Вычисляет следующую версию семвера, используя политику patch-to-10 |
| `sync_repo_version.py` | `npm run Release:sync-version` | Синхронизирует версии между пакетами рабочей области |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Распечатывает или применяет описание, домашнюю страницу и темы GitHub |
| `validate_contribution_scope.py` | (КИ) | Подтверждает границы объема вклада в PR |
| `install_githooks.js` | `npm runooks:install` | Устанавливает локальный перехватчик предварительной фиксации |#### `tools/scripts/tests/`

Наборы тестов интеграции и TUI, используемые npm test:
- Устаревшие тесты Python PTY.
- Утверждения TUI узла
- Оркестратор тестового запуска---

### `.github/`

>**Действия GitHub и шаблоны сообщества.**#### `.github/workflows/`

| Рабочий процесс | Триггер | Цель |
|:---------|:--------|:--------|
| `validate.yml` | Нажмите/PR на `main` | Сборка, тестирование и подтверждение фиксации сгенерированных артефактов |
| `release.yml` | Нажатие тега `v*` или отправка вручную | Сканеры выпускного уровня, подписание, публикация npm, выпуск GitHub |
| `auto-release-skill-merges.yml` | Объединить с `main`, нажав `skills/*` | Автоматическое обновление, пометка и выпуск версий при изменении навыков |
| `enhance-pr-skills.yml` | PR с изменением навыков | Управляет частным каналом улучшения и публикует сопутствующий PR |
| `sync-repository-metadata.yml` | Изменения в `data/project_identity.json` | Синхронизирует описание, домашнюю страницу и темы GitHub |#### `.github/pull_request_template.md`

Стандартный шаблон PR с контрольным списком навыков и вклада во время выполнения.---

### `.githooks/`

>**Локальные перехватчики Git.**Устанавливаются через `npm runooks:install`.

| Файл | Цель |
|:-----|:--------|
| `предварительная фиксация` | Запускает базовую проверку перед разрешением фиксации |---

## 📄 Root Files Reference

| Файл | Цель |
|:-----|:--------|
| `README.md` | Публичный проект README с главным баннером, руководством по установке и полным обзором функций |
| `CONTRIBUTING.md` | Руководство для участников с описанием навыков, времени выполнения и рабочих процессов приема |
| `SECURITY.md` | Инструкции по составлению отчетов о политике безопасности, масштабах и уязвимостях |
| `CODE_OF_CONDUCT.md` | Соглашение участника v2.1 |
| `РЕПОЗИТАРИЙ-SOURCES.md` | Публичный реестр предлагаемых вышестоящих хранилищ для внешнего потребления |
| `ЛИЦЕНЗИЯ` | Лицензия MIT (код и инструменты) |
| `ЛИЦЕНЗИЯ-СОДЕРЖИМОЕ` | CC BY 4.0 (документация и навыки) |
| `package.json` | Корневой пакет монорепо: сценарии, зависимости, точки входа в корзину, файлы и конфигурация рабочей области |
| `package-lock.json` | файл блокировки npm (создается автоматически) |
| `метаданные.json` | Проверка всего репозитория и сводка оценок (созданная `npm run validate`) |
| `skills_index.json` | Нормализованный индекс навыков Repo-local (генерируется с помощью `npm run validate`) |
| `.gitignore` | Исключения из контроля версий — в частности, `dist/`**не**игнорируется |
| `.npmignore` | Исключает `__pycache__/` и `*.pyc` из архива npm |
| `.node-версия` | Закрепление версии Node.js: `22` |
| `.nvmrc` | Закрепление версии nvm: `22` (зеркала `.node-version`) |
| `vitest.config.js` | Корневая конфигурация Vitest, ссылающаяся на все 5 тестовых конфигураций уровня пакета |
| `vitest.workspace.js` | Определение рабочей области Vitest для выполнения тестов с поддержкой монорепо |---

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

Все вышеперечисленное запускается последовательно как часть npm run build.
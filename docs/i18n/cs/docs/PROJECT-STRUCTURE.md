# 🗂️ Project Structure (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Úplná reference na adresář a soubor pro monorepo Awesome Omni Skills.**---

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

>**Nativní katalog dovedností.**Toto je primární veřejný obsah projektu.

Obsahuje**154**adresářů dovedností, každý s minimálně `SKILL.md` playbookem. Větší dovednosti mohou zahrnovat podadresáře `agents/`, `references/`, `examples/`, `scripts/` a `assets/`.

Dovednosti přicházejí dvěma cestami příjmu:
-**Přímé PR přispěvatelů**– lidé předkládají dovednosti přímo
-**Externí importy založené na úložištích**– zkontrolované `external-import/*` PR z upstreamových úložišť

| Co obsahuje | Příklad |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma dovednost design-to-code |
| `skills/architecture/SKILL.md` | Schopnost přezkoumání architektury a plánování |
| `skills/<name>/metadata.json` | Automaticky generovaná klasifikace a bodování |---

### `skills_omni/`

>**Vybrané vylepšené deriváty pouze v angličtině.**Spravováno soukromým kanálem vylepšení.

Obsahuje**110**adresáře vylepšených dovedností, které zrcadlí a vylepšují jejich nativní protějšky v `skills/`. Tato plocha**není otevřena pro přímý veřejný příspěvek**— je obsazena výhradně automatizovaným potrubím pro vylepšení.

Každý derivát si zachovává původ svého nativního zdroje a zároveň poskytuje vyšší redakční standard, vždy v angličtině.---

### `packages/`

>**Pracovní prostory monorepo.**Veškerý runtime kód Node.js žije zde.

| Balíček | npm Jméno | Účel |
|:--------|:---------|:--------|
| 📂 `balíčky/jádro katalogu/` | `@omni-skills/catalog-core` | Sdílené běhové prostředí katalogu s vkládáním závislostí `ICatalogStorageAdapter`. Poskytuje logiku vyhledávání, hodnocení, porovnávání, doporučení a plánu instalace, kterou spotřebovávají všechny povrchy serveru |
| 📂 `balíčky/cli/` | (kořenový zásobník) | Sjednocené vstupní body rozhraní CLI, řízený instalační program, vizuální TUI inkoustu, diagnostika, kontrola kouře a spouštěče služeb. ESM-nativní |
| 📂 `balíčky/instalační-cíle/` | `@omni-skills/install-targets` | Registr 9 klientů s možností instalace (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) s rozlišením cest a mapováním příznaků |
| 📂 `balíčky/server-api/` | `@omni-skills/server-api` | API katalogu HTTP pouze pro čtení s OpenAPI 3.1, Swagger UI na `/docs`, ověřování, omezení rychlosti, seznamy povolených CORS/IP, stahování a admin runtime |
| 📂 `balíčky/server-mcp/` | `@omni-skills/server-mcp` | Server MCP podporující přenosy `stdio`, `stream` a `sse`. Místní postranní režim přidává nástroje pro instalaci/odebírání s podporou souborového systému a zápis konfigurací MCP s podporou klienta pro 16 klientů s možností konfigurace |
| 📂 `balíčky/server-a2a/` | `@omni-skills/server-a2a` | Běh úlohy A2A (Agent-to-Agent) s perzistencí JSON/SQLite, obnovením restartu, streamováním SSE, zrušením, režimem externího spouštěče a volitelnou pronajatou koordinací |

Každý balíček má svůj vlastní `package.json`, adresář `src/` a (kromě `install-targets`) `vitest.config.js` pro testy jednotek.---

### `dist/`

>**Generované runtime artefakty.**Záměrně se zavázali ke kontrole verzí.

Tyto soubory jsou strojově čitelné výstupy spotřebované instalacemi CLI, odpověďmi API, nástroji MCP, úlohami A2A, kouřovými testy a ověřením vydání. Jsou regenerovány `npm run build`.

| Cesta | Účel |
|:-----|:--------|
| `dist/catalog.json` | Publikovaný katalog se všemi 154 dovednostmi, skóre a metadaty |
| `dist/bundles.json` | Definice svazků se stavem dostupnosti členů |
| `dist/manifests/<skill>.json` | Strojově čitelný manifest pro jednotlivé dovednosti |
| `dist/archives/<dovednost>.zip` | Per-skill ZIP archiv ke stažení |
| `dist/archives/<skill>.tar.gz` | Archiv tarballu pro dovednosti ke stažení |
| `dist/archives/<skill>.checksums.txt` | Manifest kontrolního součtu SHA-256 na archiv |
| `dist/archives/<skill>.zip.sig` | Oddělený podpis (pouze doba vydání, gitignorováno) |
| `dist/release-notes.md` | Automaticky generované poznámky k vydání (gitignorované) |
| `dist/signing/` | Odvozený materiál veřejného klíče (gitignorovaný) |

>**Proč je `dist/` potvrzeno?**Protože je součástí smlouvy o instalaci, rozhraní API, MCP, A2A a vydání. Spotřebitelé očekávají, že tyto soubory budou přítomny bez spuštění sestavení.---

### `data/`

>**Statické datové soubory projektu.**Definice řízené zdrojem, které řídí sestavení a chování za běhu.

| Soubor | Účel |
|:-----|:--------|
| `data/bundles.json` | Definice vybraných balíčků (seznamy členů dovedností na balíček) |
| `data/project_identity.json` | Kanonická identita projektu: název, popis, domovská stránka, témata GitHubu, definice běhového prostředí a seznamy klientů |
| `data/project_status.json` | Vygenerovaný snímek metrik projektu: počty dovedností, skóre, počty klientů, počty kategorií a rozpětí kvality |---

### `docs/`

>**Veškerá projektová dokumentace.**Pořádá publikum.

| Cesta | Publikum | Obsah |
|:-----|:---------|:--------|
| `docs/README.md` | Všichni | Dokumentační centrum – centrální rejstřík všech dokumentů |
| `docs/CATALOG.md` | Uživatelé | Automaticky generovaný katalog se seznamem všech 154 dovedností se skóre |
| `docs/PROJECT-STRUCTURE.md` | Všichni | Tento soubor – odkaz na adresář projektu |
| `docs/users/` | Koncoví uživatelé | Začínáme, uživatelská příručka CLI, příručka k použití, balíčky, sada runbook |
| `docs/contributors/` | Přispěvatelé | Anatomie dovedností, šablona, ​​PR workflow, lišta kvality, playbook s vysokým skóre |
| `docs/specs/` | Architekti | API, sidecar MCP, instalační program CLI, vizuální prostředí, matice podpory klientů, klasifikace, zabezpečení a specifikace manifestu |
| `docs/i18n/` | Mezinárodní uživatelé | Automaticky generované překlady kořenového souboru README ve 32 jazycích |#### `docs/users/`

| Soubor | Účel |
|:-----|:--------|
| `ZAČÍNÁME.md` | Nainstalujte, ověřte a vyvolejte dovednost za méně než 2 minuty |
| `CLI-USER-GUIDE.md` | Úplná reference příkazů se scénáři krok za krokem |
| `USAGE.md` | Příkazy CLI, režimy instalace, příkazy za běhu a toky konfigurace MCP |
| `BUNDLES.md` | Vybrané balíčky a jejich aktuální dostupnost |
| `Úžasné-OMNI-SKILLS-ROLLOUT.md` | Stav migrace nové značky a zpráva o přijetí |
| `RUNBOOK.md` | Operační odkaz (také propojený jako `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Soubor | Účel |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Struktura a kvalita očekávání pro dovednost |
| `ŠABLONA SKILL-TEMPLATE.md` | Startér `SKILL.md` s aktuálním frontmatrem |
| `SKILL-PR-WORKFLOW.md` | Nativní příjem, zpracování zesilovačů a očekávání recenzentů |
| `QUALITY-BAR.md` | Kritéria přijetí a aktuální kritéria |
| `High-SCORE-PLAYBOOK.md` | Co řídí vysokou vyspělost, kvalitu, osvědčené postupy a bezpečnostní skóre |#### `docs/specs/`

| Soubor | Účel |
|:-----|:--------|
| `KATALOG-API.md` | Koncové body HTTP, filtrování, správa a stahování |
| `CLI-GUIDED-INSTALLER.md` | Smlouva o chování pro řízeného instalačního technika |
| `CLI-VISUAL-SHELL.md` | Vizuální obal inkoustu, model stavu a centrum služeb |
| `LOCAL-MCP-SIDECAR.md` | Nástroje s ohledem na souborový systém, model seznamu povolených a zápis konfigurací |
| `CLIENT-SUPPORT-MATRIX.md` | Úplná reference klienta a zapisovače pro 9 instalačních + 16 konfiguračních klientů |
| `KLASIFIKACE DOVEDNOSTI.md` | Taxonomie, heuristika hodnocení a artefakty metadat |
| `SECURITY-VALIDATION.md` | Skenery, archivy, podpisy a ověřování vydání |
| `SKILL-MANIFEST.md` | Strojově čitelný formát manifestu a smlouva o kompatibilitě |#### `docs/i18n/`

Obsahuje**32**jazykových adresářů, každý s přeloženým `README.md`. Mezi jazyky patří: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Překlady jsou automaticky generovány pomocí `npm run i18n:render` a ověřeny `npm run i18n:check`.---

### `tools/`

>**Vytváření, ověřování a testování infrastruktury.**Primárně skripty Pythonu spotřebované příkazy `npm run`.#### `tools/scripts/`

| Skript | Příkaz npm | Účel |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm spustit ověření` | Ověří všechny soubory `SKILL.md` a znovu vytvoří `metadata.json` |
| `skill_metadata.py` | (importováno ověřením) | Základní monolitický validátor: analýza frontmatteru, taxonomie, bodování, bezpečnostní skenování |
| `recategorize_skills.py` | `npm run taxonomy:report` | Zobrazí nebo použije normalizaci kanonické kategorie |
| `generate_index.py` | `npm spustit index` | Generuje `dist/` manifesty, archivy a kontrolní součty |
| `build_catalog.js` | `npm spustit katalog` | Generuje `docs/CATALOG.md` z `skills_index.json` |
| `generate_project_status.py` | `npm spustit projekt:stav` | Generuje `data/project_status.json` s aktuálními metrikami |
| `render_project_docs.py` | `npm spustit docs:render` | Aktualizuje vygenerované bloky v souborech README, docs a CONTRIBUTING |
| `generate_i18n.py` | `npm spustit i18n:render` | Generuje nebo aktualizuje překlady `docs/i18n/` |
| `repository_sources.py` | `npm spustit registry:render` | Vykreslí a ověří `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Ověřuje zarovnání identity package.json, README a repo |
| `verify_archives.py` | `npm spustit ověřit:archive` | Ověřuje integritu archivu a volitelné podpisy |
| `verify_security_scanners.py` | `npm spustit ověřit:skenery` | Potvrzuje pokrytí skenerem ve vygenerovaných metadatech |
| `generate_release_notes.py` | `npm run release:notes` | Generuje vlastní poznámky k verzi z metadat a historie git |
| `next_release_version.py` | `npm run release:next-version` | Vypočítá příští semver verzi pomocí zásady patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Synchronizuje verzi mezi balíčky pracovního prostoru |
| `sync_github_repo_metadata.py` | `npm spustit repo:metadata:print` | Vytiskne nebo použije popis, domovskou stránku a témata GitHubu |
| `validate_contribution_scope.py` | (CI) | Ověřuje hranice rozsahu příspěvku PR |
| `install_githooks.js` | `npm run hooks:install` | Nainstaluje místní háček před potvrzením |#### `tools/scripts/tests/`

Testovací sady integrace a TUI spotřebované `npm testem`:
- Starší testy Python PTY
- Asertace uzlu TUI
- Test běžeckého orchestrátora---

### `.github/`

>**Akce GitHub a šablony komunity.**#### `.github/workflows/`

| Pracovní postup | Spoušť | Účel |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR to `main` | Vytvářejte, testujte a potvrzujte, že vygenerované artefakty jsou odevzdány |
| `release.yml` | Tag push `v*` nebo ruční odeslání | Skenery na úrovni verze, podepisování, publikování npm, vydání GitHubu |
| `auto-release-skill-merges.yml` | Sloučit do `main` dotykem `skills/*` | Automatická verze narazit, označit a uvolnit při změnách dovedností |
| `enhance-pr-skills.yml` | PR se změnami dovedností | Provozuje soukromý kanál vylepšení a zveřejňuje doprovodné PR |
| `sync-repository-metadata.yml` | Změny v souboru `data/project_identity.json` | Synchronizuje popis, domovskou stránku a témata GitHubu |#### `.github/pull_request_template.md`

Výchozí šablona PR s kontrolním seznamem pro dovednosti a příspěvky za běhu.---

### `.githooks/`

>**Local Git hooks.**Instalováno pomocí `npm run hooks:install`.

| Soubor | Účel |
|:-----|:--------|
| "předem se zavázat" | Spustí základní ověření před povolením odevzdání |---

## 📄 Root Files Reference

| Soubor | Účel |
|:-----|:--------|
| `README.md` | Projekt README pro veřejnost s bannerem hrdiny, instalačním průvodcem a úplným přehledem funkcí |
| `CONTRIBUTING.md` | Průvodce pro přispěvatele s pracovními postupy dovedností, běhu a příjmu |
| `SECURITY.md` | Bezpečnostní zásady, rozsah a pokyny k hlášení zranitelnosti |
| `CODE_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | Veřejný registr navrhovaných předřazených úložišť pro externí příjem |
| "LICENCE" | Licence MIT (kód a nástroje) |
| "OBSAH LICENCE" | CC BY 4.0 (dokumentace a obsah dovedností) |
| `package.json` | Kořenový balíček monorepo: skripty, závislosti, vstupní body bin, soubory a konfigurace pracovního prostoru |
| `package-lock.json` | npm lockfile (automaticky generovaný) |
| `metadata.json` | Ověření v celém úložišti a shrnutí skóre (generováno pomocí `npm run validate`) |
| `skills_index.json` | Repo-lokální normalizovaný index dovedností (generovaný pomocí `npm run validate`) |
| `.gitignore` | Vyloučení správy verzí — zejména `dist/`**není**ignorováno |
| `.npmignore` | Nezahrnuje `__pycache__/` a `*.pyc` z tarballu npm |
| `.verze-uzlu` | Připínání verze Node.js: `22` |
| `.nvmrc` | Připnutí verze nvm: `22` (zrcadlí `.verze-uzlu`) |
| `vitest.config.js` | Konfigurace Root Vitest odkazující na všech 5 testovacích konfigurací na úrovni balíčku |
| `vitest.workspace.js` | Definice pracovního prostoru Vitest pro provádění testu s podporou monorepo |---

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

Vše výše uvedené se spouští postupně jako součást `npm run build`.
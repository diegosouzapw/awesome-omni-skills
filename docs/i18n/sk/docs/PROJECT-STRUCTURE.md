# 🗂️ Project Structure (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Úplná referencia na adresár a súbor pre monorepo Awesome Omni Skills.**---

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

>**Natívny katalóg zručností.**Toto je primárny verejný obsah projektu.

Obsahuje**154**adresárov zručností, z ktorých každý má minimálne playbook `SKILL.md`. Väčšie zručnosti môžu zahŕňať podadresáre `agents/`, `references/`, `examples/`, `scripts/` a `assets/`.

Zručnosti prichádzajú dvoma spôsobmi prijímania:
-**Priamy PR prispievateľov**– ľudia predkladajú zručnosti priamo
-**Externé importy založené na úložisku**– skontrolované PR z externých importov/* z upstreamových úložísk

| Čo obsahuje | Príklad |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma schopnosť navrhnúť kód |
| `skills/architecture/SKILL.md` | Prehľad architektúry a plánovanie |
| `skills/<name>/metadata.json` | Automaticky generovaná klasifikácia a bodovanie |---

### `skills_omni/`

>**Vybrané vylepšené deriváty len v angličtine.**Spravované súkromným kanálom vylepšení.

Obsahuje**110**adresárov vylepšených zručností, ktoré odrážajú a vylepšujú ich pôvodné náprotivky v `skills/`. Táto plocha**nie je otvorená pre priamy verejný príspevok**— je obývaná výlučne automatizovaným kanálom zlepšovačov.

Každý derivát zachováva priradenie k svojmu pôvodnému zdroju a zároveň poskytuje vyšší redakčný štandard, vždy v angličtine.---

### `packages/`

>**Pracovné priestory monorepo.**Celý runtime kód Node.js žije tu.

| Balíček | npm Meno | Účel |
|:--------|:---------|:--------|
| 📂 `balíky/katalógové jadro/` | `@omni-skills/catalog-core` | Runtime zdieľaného katalógu s vložením závislosti `ICatalogStorageAdapter`. Poskytuje logiku vyhľadávania, hodnotenia, porovnávania, odporúčaní a plánu inštalácie, ktorú využívajú všetky serverové povrchy |
| 📂 `balíčky/cli/` | (zásobník koreňového balíka) | Zjednotené vstupné body CLI, riadený inštalátor, vizuálne TUI atramentu, diagnostika, kontrola dymu a spúšťače služieb. Pôvodný ESM |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Register 9 klientov s možnosťou inštalácie (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) s rozlíšením cesty a mapovaním príznakov |
| 📂 `packages/server-api/` | `@omni-skills/server-api` | Rozhranie API katalógu HTTP iba ​​na čítanie s OpenAPI 3.1, používateľské rozhranie Swagger na `/docs`, overenie, obmedzenie rýchlosti, zoznamy povolených CORS/IP, sťahovanie a admin runtime |
| 📂 `packages/server-mcp/` | `@omni-skills/server-mcp` | Server MCP podporujúci prenosy `stdio`, `stream` a `sse`. Miestny režim sidecar pridáva nástroje na inštaláciu/odstraňovanie súborových systémov a písanie konfigurácie MCP s podporou klienta pre 16 klientov schopných konfigurácie |
| 📂 `balíčky/server-a2a/` | `@omni-skills/server-a2a` | Spustenie úlohy A2A (Agent-to-Agent) so stálosťou JSON/SQLite, obnovením reštartu, streamovaním SSE, zrušením, režimom externého spúšťača a voliteľnou prenajatou koordináciou |

Každý balík má svoj vlastný `package.json`, adresár `src/` a (okrem `install-targets`) `vitest.config.js` pre testy jednotiek.---

### `dist/`

>**Generované runtime artefakty.**Zámerne sa zaviazali k správe verzií.

Tieto súbory sú strojovo čitateľné výstupy spotrebované inštaláciami CLI, odpoveďami API, nástrojmi MCP, úlohami A2A, testami dymu a overením vydania. Sú regenerované `npm run build`.

| Cesta | Účel |
|:-----|:--------|
| `dist/catalog.json` | Publikovaný katalóg so všetkými 154 schopnosťami, skóre a metadátami |
| `dist/bundles.json` | Definície balíkov so stavom dostupnosti členov |
| `dist/manifests/<skill>.json` | Strojovo čitateľný manifest pre jednotlivé zručnosti |
| `dist/archives/<skill>.zip` | Per-skill ZIP archív na stiahnutie |
| `dist/archives/<skill>.tar.gz` | Archív tarballu pre zručnosti na stiahnutie |
| `dist/archives/<skill>.checksums.txt` | Manifest kontrolného súčtu SHA-256 na archív |
| `dist/archives/<skill>.zip.sig` | Samostatný podpis (len čas vydania, gitignorovaný) |
| `dist/release-notes.md` | Automaticky generované poznámky k vydaniu (gitignorované) |
| `dist/signing/` | Odvodený materiál verejného kľúča (gitignorovaný) |

>**Prečo je `dist/` potvrdený?**Pretože je súčasťou zmluvy o inštalácii, rozhraní API, MCP, A2A a vydaní. Spotrebitelia očakávajú, že tieto súbory budú prítomné bez spustenia zostavy.---

### `data/`

>**Statické dátové súbory projektu.**Definície riadené zdrojom, ktoré riadia správanie pri zostavovaní a behu.

| Súbor | Účel |
|:-----|:--------|
| `data/bundles.json` | Definície vybraných balíkov (zoznamy členov zručností na balík) |
| `data/project_identity.json` | Kanonická identita projektu: názov, popis, domovská stránka, témy GitHub, definície povrchu runtime a zoznamy klientov |
| `data/project_status.json` | Vygenerovaný prehľad metrík projektu: počet zručností, skóre, počet klientov, počet kategórií a rozpätie kvality |---

### `docs/`

>**Všetka projektová dokumentácia.**Organizuje publikum.

| Cesta | Publikum | Obsah |
|:-----|:---------|:--------|
| `docs/README.md` | Všetci | Centrum dokumentácie – centrálny zoznam všetkých dokumentov |
| `docs/CATALOG.md` | Používatelia | Automaticky generovaný katalóg so zoznamom všetkých 154 zručností so skóre |
| `docs/PROJECT-STRUCTURE.md` | Všetci | Tento súbor – odkaz na adresár projektu |
| `docs/users/` | Koncoví užívatelia | Začíname, používateľská príručka CLI, príručka použitia, balíky, príručka |
| `docs/contributors/` | Prispievatelia | Anatómia zručností, šablóna, pracovný postup PR, lišta kvality, kniha s vysokým skóre |
| `docs/specs/` | Architekti | API, MCP sidecar, CLI inštalátor, vizuálny shell, matica podpory klienta, klasifikácia, bezpečnosť a špecifikácie manifestu |
| `docs/i18n/` | Medzinárodní používatelia | Automaticky generované preklady koreňového súboru README v 32 jazykoch |#### `docs/users/`

| Súbor | Účel |
|:-----|:--------|
| `ZAČÍNAME.md` | Nainštalujte, overte a vyvolajte zručnosť za menej ako 2 minúty |
| `CLI-USER-GUIDE.md` | Úplná referencia príkazov so scenármi krok za krokom |
| `USAGE.md` | Príkazy CLI, režimy inštalácie, príkazy runtime a toky konfigurácie MCP |
| `BUNDLES.md` | Vybrané balíky a ich aktuálna dostupnosť |
| `Úžasné-OMNI-SKILLS-ROLLOUT.md` | Stav migrácie novej značky a správa o prijatí |
| `RUNBOOK.md` | Operačný odkaz (tiež prepojený ako `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Súbor | Účel |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Štruktúra a kvalita predpokladov pre zručnosť |
| `ŠABLONA SKILL-TEMPLATE.md` | Štartér `SKILL.md` s aktuálnym frontmatom |
| `SKILL-PR-WORKFLOW.md` | Natívny príjem, spracovanie zosilňovačov a očakávania recenzentov |
| `QUALITY-BAR.md` | Kritériá prijatia a súčasné referenčné hodnoty |
| `High-SCORE-PLAYBOOK.md` | Čo poháňa vysokú vyspelosť, kvalitu, osvedčené postupy a skóre bezpečnosti |#### `docs/specs/`

| Súbor | Účel |
|:-----|:--------|
| `CATALOG-API.md` | Koncové body HTTP, filtrovanie, riadenie a sťahovanie |
| `CLI-GUIDED-INSTALLER.md` | Zmluva o správaní pre inštalatéra so sprievodcom |
| `CLI-VISUAL-SHELL.md` | Atramentové vizuálne puzdro, model stavu a servisné centrum |
| `LOCAL-MCP-SIDECAR.md` | Nástroje podporujúce súborový systém, model zoznamu povolených a zapisovanie konfigurácií |
| `KLIENT-SUPPORT-MATRIX.md` | Úplná referencia klienta a zapisovateľa v rámci 9 inštalačných + 16 konfiguračných klientov |
| `KLASIFIKÁCIA ZRUČNOSTÍ.md` | Taxonómia, heuristika hodnotenia a artefakty metadát |
| `SECURITY-VALIDATION.md` | Skenery, archívy, podpisy a overenie vydania |
| `SKILL-MANIFEST.md` | Strojovo čitateľný formát manifestu a zmluva o kompatibilite |#### `docs/i18n/`

Obsahuje**32**jazykových adresárov, každý s preloženým `README.md`. Medzi jazyky patria: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Preklady sú automaticky generované pomocou `npm run i18n:render` a overené `npm run i18n:check`.---

### `tools/`

>**Vybudovanie, overenie a testovanie infraštruktúry.**Primárne skripty Pythonu spotrebované príkazmi `npm run`.#### `tools/scripts/`

| Scenár | Príkaz npm | Účel |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Overí všetky súbory `SKILL.md` a znovu vytvorí súbor `metadata.json` |
| `skill_metadata.py` | (importované overením) | Základný monolitický validátor: analýza frontmatter, taxonómia, bodovanie, bezpečnostné skenovanie |
| `recategorize_skills.py` | `npm run taxonómia:report` | Zobrazuje alebo aplikuje normalizáciu kanonickej kategórie |
| `generate_index.py` | `npm run index` | Generuje `dist/` manifesty, archívy a kontrolné súčty |
| `build_catalog.js` | `npm run katalóg` | Generuje `docs/CATALOG.md` z `skills_index.json` |
| `generate_project_status.py` | `npm spustiť projekt:stav` | Generuje `data/project_status.json` s aktuálnymi metrikami |
| `render_project_docs.py` | `npm run docs:render` | Aktualizuje vygenerované bloky v súboroch README, docs a CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Generuje alebo aktualizuje preklady `docs/i18n/` |
| `repository_sources.py` | `npm spustiť register:render` | Vykreslí a overí `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Overuje zarovnanie identity package.json, README a repo |
| `verify_archives.py` | `npm spustiť overiť:archive` | Overuje integritu archívu a voliteľné podpisy |
| `verify_security_scanners.py` | `npm spustiť overenie:skenery` | Potvrdzuje pokrytie skenerom vo vygenerovaných metadátach |
| `generate_release_notes.py` | `npm run release:notes` | Generuje vlastné poznámky k vydaniu z metadát a histórie git |
| `next_release_version.py` | `npm run release:next-version` | Vypočíta ďalšiu semverovú verziu pomocou politiky patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Synchronizuje verziu medzi balíkmi pracovného priestoru |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Vytlačí alebo použije GitHub popis, domovskú stránku a témy |
| `validate_contribution_scope.py` | (CI) | Potvrdzuje hranice rozsahu príspevku PR |
| `install_githooks.js` | `npm run hooks:install` | Nainštaluje lokálny háčik pred potvrdením |#### `tools/scripts/tests/`

Testovacie sady integrácie a TUI spotrebované `npm testom`:
- Staršie testy Python PTY
- Tvrdenia uzla TUI
- Testovací bežec orchestrátor---

### `.github/`

>**Akcie a šablóny komunity GitHub.**#### `.github/workflows/`

| Pracovný postup | Spúšťač | Účel |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR to `main` | Zostavte, otestujte a potvrďte, že vygenerované artefakty sú odovzdané |
| `release.yml` | Tag push `v*` alebo manuálne odoslanie | Skenery na úrovni vydania, podpisovanie, publikovanie npm, vydanie GitHub |
| `auto-release-skill-merges.yml` | Zlúčiť do `main` dotykom `skills/*` | Automatická verzia naraziť, označiť a uvoľniť pri zmenách zručností |
| `enhance-pr-skills.yml` | PR so zmenami zručností | Spúšťa súkromný kanál zlepšovačov a uverejňuje sprievodné PR |
| `sync-repository-metadata.yml` | Zmeny súboru `data/project_identity.json` | Synchronizuje popis GitHubu, domovskú stránku a témy |#### `.github/pull_request_template.md`

Predvolená PR šablóna s kontrolným zoznamom pre zručnosti a príspevky počas behu.---

### `.githooks/`

>**Local Git hooks.**Inštalované cez `npm run hooks:install`.

| Súbor | Účel |
|:-----|:--------|
| "predbežný záväzok" | Spustí základné overenie pred povolením odovzdania |---

## 📄 Root Files Reference

| Súbor | Účel |
|:-----|:--------|
| `README.md` | Verejný projekt README s bannerom hrdinu, inštaláciou a úplným prehľadom funkcií |
| `CONTRIBUTING.md` | Sprievodca prispievateľom so zručnosťami, prevádzkovým časom a pracovnými postupmi |
| `SECURITY.md` | Bezpečnostná politika, rozsah a pokyny na hlásenie zraniteľnosti |
| `CODE_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | Verejný register navrhovaných ťažobných úložísk pre externý príjem |
| "LICENCIA" | Licencia MIT (kód a nástroje) |
| "OBSAH LICENCIE" | CC BY 4.0 (dokumentácia a obsah zručností) |
| `package.json` | Koreňový balík monorepo: skripty, závislosti, vstupné body bin, súbory a konfigurácia pracovného priestoru |
| `package-lock.json` | npm lockfile (automaticky vygenerovaný) |
| `metadata.json` | Overenie v rámci celého úložiska a súhrn skóre (vygenerovaný príkazom `npm run validate`) |
| `skills_index.json` | Repo-lokálny normalizovaný index zručností (generovaný pomocou `npm run validate`) |
| ".gitignore" | Vylúčenia kontroly verzií — najmä `dist/` sa**nie**ignoruje |
| `.npmignore` | Nezahŕňa `__pycache__/` a `*.pyc` z tarballu npm |
| `.verzia-uzla` | Pripnutie verzie Node.js: `22` |
| `.nvmrc` | Pripnutie verzie nvm: `22` (zrkadlí `.verzia-uzla`) |
| `vitest.config.js` | Konfigurácia root Vitest odkazujúca na všetkých 5 testovacích konfigurácií na úrovni balíka |
| `vitest.workspace.js` | Definícia pracovného priestoru Vitest pre vykonávanie testu s podporou monorepo |---

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

Všetky vyššie uvedené sa spúšťajú postupne ako súčasť `npm run build`.
# 📖 Awesome Omni Skills — Documentation Hub (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Ústřední reference pro používání, přispívání a provozování Awesome Omni Skills jako veřejného úložiště dovedností, kurátorského odvozeného povrchu osvědčených postupů a sdílené runtime platformy.**

Standardní soubory komunity žijí v kořenovém adresáři úložiště:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.m

> Balíček npm, úložiště GitHub, generované dokumenty a vstupní body běhového prostředí jsou nyní sladěny s**Awesome Omni Skills**. Aktuální stav zavádění: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Základová dráha nyní žije ve stavu aktivního projektu a druhá vlna rozšíření kategorie je již v katalogu. Projekt by nyní měl být chápán jako pracovní základna s volitelnými budoucími rozšiřujícími trasami:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Budoucí expanze zůstává záměrná:

- prohloubit `design`, `tools`, `data-ai` a `strojové učení`
- vyhněte se opětovnému otevírání spících nekódově nativních kategorií, dokud současné kódově nativní stopy nebudou mít větší hloubku
- Udržujte přitom nedotčenou cestu kontroly kvality a zlepšovače

Tato rozšiřující práce se nyní odráží přímo v živém katalogu a dokumentech architektury:

- aktuální snímek katalogu v [Katalog](CATALOG.md)
- runtime a tvar artefaktu v [analýze kódu](architecture/CODEBASE-ANALYSIS.md)
- směr vpřed v [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills by se měly chápat jako tři spojené povrchy:

| Povrch | Co to je | Jak se mění |
|:--------|:-----------|:----------------|
| 📥 `dovednosti/` | Veřejné úložiště nativních dovedností | PR přímých přispěvatelů a revidovaný externí příjem založený na úložišti |
| ✨ `skills_omni/` | Upravený vylepšený osvědčený povrch derivátu | Pouze soukromé PR doprovodné vylepšení |
| 🖥️ Provozní povrchy | CLI, API, MCP a A2A přes stejný vygenerovaný katalog | Automatizace sestavení, ověření a uvolnění |---

## 📌 Current Decisions

Tyto otázky architektury již nejsou v praxi „otevřené“ a nyní se s nimi nakládá jako s projektovými rozhodnutími:

1.**Distribuce zůstává manifestem a podepsanými archivy**
   Strojově čitelný manifest zůstává smlouvou spotřebovanou CLI, API, MCP a A2A. Podepsané archivy jednotlivých dovedností představují povrch pro stahování a vydávání navrstvený na této smlouvě.
2.**Soukromé nebo prémiové katalogy by měly znovu používat stejné schéma manifestu**
   Ověřování a zásady by měly být vrstveny externě, nikoli rozvětvením manifestu nebo tvaru katalogu.
3.**Konfigurace MCP by měla konvergovat na několika kanonických exportních rodinách**
   Awesome Omni Skills se nyní standardizuje kolem JSON `mcpServers`, JSON `serverů`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` a TOML `[mcp_servers]`, přičemž ponechává zakázkové autory pouze tam, kde oficiální klientské dokumenty vyžadují jiné dokumenty.

Tato rozhodnutí jsou v souladu s aktuální oficiální MCP a klientskou dokumentací, včetně:

- oficiální pokyny pro registr MCP a podporu rozšíření na `modelcontextprotocol.io`
- Dokumenty OpenAI Docs MCP a Codex CLI na `developers.openai.com` a `platform.openai.com`
- Rozšíření VS Code MCP a produktové dokumenty na `code.visualstudio.com`
- klientské dokumenty pro Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman a JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Co se naučíte |
|:----|:------------------|
| 📘 [Začínáme](uživatelé/GETTING-STARTED.md) | Nainstalujte, ověřte a vyvolejte svou první dovednost |
| 🧭 [Uživatelská příručka CLI](uživatelé/CLI-USER-GUIDE.md) | Úplná reference příkazů a skutečné vzory použití rozhraní CLI |
| 📗 [Návod k použití](uživatelé/USAGE.md) | Příkazy CLI, režimy instalace, příkazy za běhu a toky konfigurace MCP |
| 📦 [Bundles](uživatelé/BUNDLES.md) | Vybrané balíčky a jejich aktuální dostupnost |
| 📚 [Katalog](CATALOG.md) | Automaticky generovaný katalog publikovaných dovedností |
| 🔧 [Systém Runbook](provoz/RUNBOOK.md) | Vytvářejte, poskytujte, zabezpečujte a řešte problémy s runtime |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Co se naučíte |
|:----|:------------------|
| 🗂️ [Struktura projektu](STRUKTURA PROJEKTU.md) | Kompletní odkaz na adresář a soubor pro monorepo |
| 🗺️ [Agent-Native Roadmap](architektura/AGENT-NATIVE-ROADMAP.md) | Vývoj architektury, uzavřená rozhodnutí a zbývající oblasti rozšíření |
| 🧭 [CLI UX Roadmap](architektura/CLI-UX-ROADMAP.md) | Historický plán a současná podoba řízeného a vizuálního CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Základní rozhodnutí o monorepo a sdíleném běhu |
| 🔬 [Analýza kódové báze](architektura/CODEBASE-ANALYSIS.md) | Aktuální složení runtime, počty a hranice systému |
| 🌐 [Katalogový API povrch](specifikace/CATALOG-API.md) | Koncové body HTTP, filtrování, správa a stahování |
| 🧩 [CLI Guided Installer](specifikace/CLI-GUIDED-INSTALLER.md) | Smlouva o chování pro řízeného instalačního technika |
| 🖥️ [CLI Visual Shell](specifikace/CLI-VISUAL-SHELL.md) | Vizuální obal inkoustu, model stavu a centrum služeb |
| 🔌 [Místní MCP Sidecar](specifikace/LOCAL-MCP-SIDECAR.md) | Nástroje s ohledem na souborový systém, model seznamu povolených a zápis konfigurací |
| 🧭 [Klientská podpora Matice](specifikace/CLIENT-SUPPORT-MATRIX.md) | Podporovaní klienti CLI a IDE, zapisovače, ruční cíle a zdrojové odkazy |
| 📊 [Klasifikace dovedností](specifikace/KLASIFIKACE DOVEDNOSTI.md) | Taxonomie, heuristika hodnocení a artefakty metadat |
| 🛡️ [Ověření zabezpečení](specifikace/SECURITY-VALIDATION.md) | Skenery, archivy, podpisy a ověřování vydání |
| 📋 [Skill Manifest Spec](specifikace/SKILL-MANIFEST.md) | Strojově čitelný formát manifestu a smlouva o kompatibilitě |### 🤝 If You Want to **Contribute**

| Doc | Co se naučíte |
|:----|:------------------|
| 📝 [Průvodce přispíváním](../CONTRIBUTING.md) | Repo workflow a očekávání požadavku na stažení |
| 🌍 [Zdroje úložiště](../REPOSITORY-SOURCES.md) | Jak navrhnout upstream repozitář prostřednictvím běžného veřejného PR, nyní s podporou repo-first `auto` větví a cest |
| 🧾 [Skill PR Workflow](přispěvatelé/SKILL-PR-WORKFLOW.md) | Nativní příjem, automatické zpracování vylepšení, publikování `skills_omni/` a očekávání recenzentů |
| 📄 [Šablona dovedností](přispěvatelé/ŠABLONA SKILL-TEMPLATE.md) | Startér `SKILL.md` s aktuálním frontmaterem a strukturou |
| 🔬 [Skill Anatomy](přispěvatelé/SKILL-ANATOMY.md) | Struktura a kvalita očekávání pro dovednost |
| ✅ [Quality Bar](přispěvatelé/QUALITY-BAR.md) | Kritéria přijetí pro úložiště |
| 🏆 [High-Score Playbook](přispěvatelé/HIGH-SCORE-PLAYBOOK.md) | Co řídí vysokou vyspělost, kvalitu, osvědčené postupy a bezpečnostní skóre |---

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

Úplný příkaz pro koncového uživatele naleznete v [Uživatelské příručce CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Build pipeline vysílá strojově čitelné soubory, které řídí každý běhový povrch:

| Artefakt | Účel |
|:---------|:--------|
| `metadata.json` | Ověření v rámci celého úložiště a shrnutí skóre |
| `skills_index.json` | Repo-lokální normalizovaný index dovedností |
| `dist/catalog.json` | Vydaný katalog pro vyhledávání a výpis |
| `dist/bundles.json` | Definice svazků s dostupností |
| `dist/manifests/<skill>.json` | Strojově čitelný manifest pro jednotlivé dovednosti |
| `dist/archives/<dovednost>.zip` | Archiv dovedností (zip) |
| `dist/archives/<skill>.tar.gz` | Archiv dovedností (tarball) |
| `dist/archives/<skill>.checksums.txt` | Manifest kontrolního součtu SHA-256 |

`dist/` zůstává úmyslně zadaný. Tyto vygenerované artefakty jsou součástí smlouvy o instalaci, API, MCP, A2A, kouři a vydání.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API registru pouze pro čtení pro dovednosti, balíčky, srovnání, plánování instalace a stahování artefaktů.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Místní postranní vozík nyní podporuje prvotřídní zápis konfigurace MCP pro:

- Claude Code
- Kurzor
- VS kód a Dev kontejnery
- Gemini CLI
- Antigravitace
- Kiro
- Codex CLI
- Pokračuj
- Windsurfing
- OpenCode
- Cline
- GitHub Copilot CLI
- Kilový kód
- Zed
- Husa### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Životní cyklus úlohy, streamování, persistence, obnovení po restartu a jednoduchá místní orchestrace. Sdílené pronajaté provádění je k dispozici, pokud je výslovně povoleno; Redis zůstává pokročilou hostovanou možností, nikoli výchozí místní cestou.---

## 🗂️ Repository Map

| Cesta | Účel |
|:-----|:--------|
| 📂 `dovednosti/` | Kanonické autorské dovednosti |
| 📖 `dokumenty/uživatelé/` | Dokumentace pro koncového uživatele |
| 🤝 `dokumenty/přispěvatelé/` | Šablony pro přispěvatele a pokyny |
| 🏗️ `docs/architecture/` | Plán, ADR a technická analýza |
| 🔧 `dokumenty/operace/` | Provozní sešity |
| 📋 `docs/specs/` | Runtime, protokoly a kontrakty artefaktů |
| 📚 `docs/CATALOG.md` | Vygenerovaný katalog dovedností |
| 📦 `dist/` | Generované strojově čitelné artefakty |
| 🧠 `balíčky/jádro katalogu/` | Runtime sdíleného katalogu s `ICatalogStorageAdapter` DI |
| 🌐 `balíčky/server-api/` | HTTP API pouze pro čtení s uživatelským rozhraním OpenAPI/Swagger na `/docs` |
| 🔌 `balíčky/server-mcp/` | Server MCP a místní postranní vozík |
| 🤖 `balíčky/server-a2a/` | A2A server a běh úlohy |
| 🖥️ `balíčky/cli/` | Sjednocené vstupní body rozhraní CLI, logika instalace a vizuální TUI inkoustu (nativní ESM) |
| ⚙️ `nástroje/skripty/` | Validace, generování, ověřování a testy |
| 🧪 `vitest.workspace.js` | Konfigurace pracovního prostoru Vitest monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

Kouřový běh potvrzuje:

- ✅ ověřování dovedností a generování metadat
- ✅ nástroje pro rekategorizaci taxonomie
- ✅ generování artefaktů katalogu
- ✅ vygenerované katalogové označení
- ✅ generování a ověřování archivu
- ✅ starší testovací sada integrace (Python PTY + tvrzení TUI uzlu)
- ✅ Sada jednotek Vitest pro hodnocení, vyhledávání a filtrování podle katalogu
- ✅ `npm pack --suchý provoz`
- ✅ Spouštění a stav API s uživatelským rozhraním OpenAPI/Swagger na `/docs`
- ✅ bootování MCP v `stdio`, `stream` a `sse`
- ✅ A2A boot, dotazování, streamování SSE, zrušení a životní cyklus push-config
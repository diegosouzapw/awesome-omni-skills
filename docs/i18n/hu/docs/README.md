# 📖 Awesome Omni Skills — Documentation Hub (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**A központi referencia az Awesome Omni Skills nyilvános készségtárként való használatához, hozzájárulásához és működtetéséhez, egy kurált legjobb gyakorlat származékos felületként és egy megosztott futásidejű platformként.**

A szabványos közösségi fájlok a lerakat gyökérben élnek:
(

> Az npm-csomag, a GitHub-tárház, a generált dokumentumok és a futásidejű belépési pontok mostantól az**Awesome Omni Skills**-hoz igazodnak. Jelenlegi közzétételi állapot: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Az alapozó pálya most aktív projektállapotban él, a második kategória-bővítési hullám pedig már a katalógusban van. A projektet most működő alapvonalnak kell tekinteni opcionális jövőbeli bővítési sávokkal:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

A jövőbeli bővítés szándékos marad:

- elmélyítse a "design", "eszközök", "data-ai" és "gépi tanulás" fogalmát
- kerülje az alvó, nem kódolt natív kategóriák újbóli megnyitását, amíg a jelenlegi kód-natív sávok mélyebbek lesznek
- a minőségi padló és az erősítő áttekintési útvonalának sértetlen maradása közben

Ez a bővítési munka most közvetlenül megjelenik az élő katalógusban és az építészeti dokumentumokban:

- az aktuális katalógus pillanatképe a [Katalógus]-ban (CATALOG.md)
- a futási idő és a műtermék alakja a [Codebase Analysis]-ben (architecture/CODEBASE-ANALYSIS.md)
- az előrehaladási irány az [Agent-Native Roadmap]-ben (architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Az Awesome Omni Skills három összefüggő felületként értelmezhető:

| Felület | Mi ez | Hogyan változik |
|:--------|:-----------|:----------------|
| 📥 `készségek/` | Nyilvános natív készségtár | Közvetlen közreműködők PR-jei és felülvizsgált adattár-alapú külső bevitel |
| ✨ `skills_omni/` | Kurált, továbbfejlesztett, bevált gyakorlati származékos felület | Csak magánjellegű fokozó társ PR-k |
| 🖥️ Futásidejű felületek | CLI, API, MCP és A2A ugyanazon a generált katalóguson keresztül | Építési, érvényesítési és kiadási automatizálás |---

## 📌 Current Decisions

Ezek az építészeti kérdések a gyakorlatban már nem „nyitottak”, és projektdöntésként kezelik őket:

1.**A terjesztés továbbra is nyilvántartott marad, valamint aláírt archívum**
   A géppel olvasható jegyzék továbbra is a CLI, API, MCP és A2A által felhasznált szerződés marad. Az aláírt készségenkénti archívumok a letöltési és kiadási felületek, amelyek a szerződés tetejére rétegződnek.
2.**A privát vagy prémium katalógusoknak ugyanazt a jegyzéksémát kell használniuk**
   A hitelesítést és a házirendet kívülről kell rétegezni, nem pedig a jegyzék vagy a katalógus alakjának elágazásával.
3.**Az MCP-konfigurációnak konvergálnia kell néhány kanonikus exportcsaládhoz**
   Az Awesome Omni Skills mostantól szabványosítja a JSON "mcpServers", a JSON "szerverek", a JSON "context_servers", a YAML "mcpServers", a YAML "bővítmények" és a TOML "[mcp_servers]" technológiát, miközben a hivatalos, egyedi struktúrájú kliens-dokumentumok megtartását csak ott kell megőrizni.

Ezek a döntések összhangban vannak a jelenlegi hivatalos MCP-vel és ügyféldokumentációval, beleértve:

- hivatalos MCP-nyilvántartási és kiterjesztés-támogatási útmutató a `modelcontextprotocol.io' oldalon
- OpenAI Docs MCP és Codex CLI dokumentumok a "developers.openai.com" és a "platform.openai.com" webhelyeken
- VS Code MCP kiterjesztés és termékdokumentumok a "code.visualstudio.com" oldalon
- Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman és JetBrains AI Assistant kliensdokumentumai---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Mit fogsz tanulni |
|:----|:-------------------|
| 📘 [Kezdő lépések](users/GETTING-STARTED.md) | Telepítse, ellenőrizze és hívja elő első készségeit |
| 🧭 [CLI felhasználói útmutató](users/CLI-USER-GUIDE.md) | Teljes parancsreferencia és valós CLI használati minták |
| 📗 [Használati útmutató](users/USAGE.md) | CLI-parancsok, telepítési módok, futásidejű parancsok és MCP-konfigurációs folyamatok |
| 📦 [Csomagok](users/BUNDLES.md) | A válogatott csomagok és jelenlegi elérhetőségük |
| 📚 [Katalógus](CATALOG.md) | A közzétett készségek automatikusan generált katalógusa |
| 🔧 [System Runbook](operations/RUNBOOK.md) | A futási környezet összeállítása, kiszolgálása, biztonságossá tétele és hibaelhárítása |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Mit fogsz tanulni |
|:----|:-------------------|
| 🗂️ [Project Structure](PROJECT-STRUCTURE.md) | A monorepo | teljes könyvtár- és fájlhivatkozása
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Az építészet fejlődése, a lezárt döntések és a fennmaradó bővítési területek |
| 🧭 [CLI UX ütemterv](architecture/CLI-UX-ROADMAP.md) | Az irányított és vizuális CLI történeti terve és jelenlegi formája |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo és megosztott futásidejű döntés |
| 🔬 [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) | Jelenlegi futásidejű összetétel, számok és rendszerhatárok |
| 🌐 [Katalógus API felület](specifikációk/CATALOG-API.md) | HTTP-végpontok, szűrés, irányítás és letöltések |
| 🧩 [CLI irányított telepítő](specs/CLI-GUIDED-INSTALLER.md) | Viselkedési szerződés az irányított telepítő számára |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink vizuális héj, állapotmodell és szolgáltatási központ |
| 🔌 [Helyi MCP-oldalkocsi](specifikációk/LOCAL-MCP-SIDECAR.md) | Fájlrendszer-tudatos eszközök, engedélyezési lista modell és konfigurációk írása |
| 🧭 [Client Support Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Támogatott CLI és IDE kliensek, írók, kézi célok és forráshivatkozások |
| 📊 [Skill Classification](specifikáció/SKILL-CLASSIFICATION.md) | Taxonómia, pontozási heurisztika és metaadat-termékek |
| 🛡️ [Biztonsági ellenőrzés](specs/SECURITY-VALIDATION.md) | Szkennerek, archívumok, aláírások és kiadás-ellenőrzés |
| 📋 [Skill Manifest Spec](specs/SKILL-MANIFEST.md) | Géppel olvasható jegyzékformátum és kompatibilitási szerződés |### 🤝 If You Want to **Contribute**

| Doc | Mit fogsz tanulni |
|:----|:-------------------|
| 📝 [Hozzájárulási útmutató](../CONTRIBUTING.md) | Repo munkafolyamat és lekérési elvárások |
| 🌍 [Repository Sources](../REPOSITORY-SOURCES.md) | Hogyan javasolhatunk egy upstream adattárat normál nyilvános PR-on keresztül, most repo-first "auto" elágazás és elérési út támogatással |
| 🧾 [Skill PR-munkafolyamat](contributors/SKILL-PR-WORKFLOW.md) | Natív bevitel, automatikus javító feldolgozás, `skills_omni/` közzététel és a lektori elvárások |
| 📄 [Skill Template](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` aktuális frontanyaggal és szerkezettel |
| 🔬 [Skill Anatomy](közreműködők/SKILL-ANATOMY.md) | Szerkezeti és minőségi elvárások egy képességgel szemben |
| ✅ [Quality Bar](contributors/QUALITY-BAR.md) | Az adattár elfogadási feltételei |
| 🏆 [High-score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Mi vezet a magas érettséghez, a minőséghez, a bevált gyakorlatokhoz és a biztonsági pontszámokhoz |---

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

A teljes végfelhasználói parancsfelülethez használja a [CLI User Guide](users/CLI-USER-GUIDE.md) alkalmazást.### 📁 Generated Artifacts

Az összeállítási folyamat minden futási felületet meghajtó géppel olvasható fájlokat bocsát ki:

| Műtárgy | Cél |
|:---------|:--------|
| `metadata.json` | Az egész adattárra kiterjedő érvényesítés és pontszám összefoglaló |
| `skills_index.json` | Repo-local normalizált képzettségi index |
| `dist/catalog.json` | Megjelent katalógus kereséshez és listázáshoz |
| `dist/bundles.json` | Csomagdefiníciók elérhetőséggel |
| `dist/manifests/<skill>.json` | Képességenkénti géppel olvasható jegyzék |
| `dist/archives/<skill>.zip` | Ügyességi archívum (zip) |
| `dist/archives/<skill>.tar.gz` | Ügyességi archívum (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 ellenőrzőösszeg jegyzék |

`dist/` szándékosan elkötelezett marad. Ezek az előállított melléktermékek a telepítési, API, MCP, A2A, füstölési és kiadási szerződés részét képezik.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Csak olvasható regisztrációs API a készségek, csomagok, összehasonlítás, telepítés tervezése és műtermékek letöltéséhez.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

A helyi oldalkocsi mostantól támogatja az első osztályú MCP-konfiguráció írását:

- Claude Code
- Kurzor
- VS kód és fejlesztői tárolók
- Gemini CLI
- Antigravitáció
- Kiro
- Codex CLI
- Folytasd
- Szörf
- OpenCode
- Cline
- GitHub másodpilóta CLI
- Kilo Code
- Zed
- Liba### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Feladatok életciklusa, streamelés, kitartás, újraindítás helyreállítása és egyszerű helyi hangszerelés. A megosztott bérelt végrehajtás akkor érhető el, ha kifejezetten engedélyezve van; A Redis továbbra is egy speciális hosztolt beállítás, nem pedig az alapértelmezett helyi elérési út.---

## 🗂️ Repository Map

| Útvonal | Cél |
|:-----|:---------|
| 📂 `készségek/` | Kanonikus szerzői készségek |
| 📖 `docs/users/` | Végfelhasználói dokumentáció |
| 🤝 `dokumentumok/közreműködők/` | Közreműködői sablonok és útmutató |
| 🏗️ `dokumentumok/architektúra/` | Útiterv, ADR-ek és technikai elemzés |
| 🔧 `dokumentumok/műveletek/` | Operatív runbookok |
| 📋 `dokumentumok/specifikációk/` | Futásidejű, protokoll- és műtermék-szerződések |
| 📚 `docs/CATALOG.md` | Készített készségkatalógus |
| 📦 `dist/` | Generált géppel olvasható műtermékek |
| 🧠 `csomagok/katalógusmag/` | Megosztott katalógus-futási idő az `ICatalogStorageAdapter` DI-vel |
| 🌐 `csomagok/szerver-api/` | Csak olvasható HTTP API OpenAPI/Swagger felhasználói felülettel a `/docs' |
| 🔌 `csomagok/szerver-mcp/` | MCP szerver és helyi oldalkocsi |
| 🤖 `csomagok/szerver-a2a/` | A2A szerver és feladat futásidejű |
| 🖥️ `csomagok/cli/` | Egységesített CLI belépési pontok, telepítési logika és Ink vizuális TUI (ESM-natív) |
| ⚙️ `tools/scripts/` | Validálás, generálás, ellenőrzés és tesztek |
| 🧪 `vitest.workspace.js` | Vitest monorepo munkaterület konfiguráció |---

## 🧪 Release Validation

```bash
npm run smoke
```

A füstfutás érvényesíti:

- ✅ készségellenőrzés és metaadatok generálása
- ✅ taxonómia átkategorizáló eszköz
- ✅ katalógus-termékek generálása
- ✅ generált katalógus leárazás
- ✅ archívum létrehozása és ellenőrzése
- ✅ örökölt integrációs tesztcsomag (Python PTY + Node TUI állítások)
- ✅ Vitest egységcsomag katalógusmag-pontozáshoz, kereséshez és szűréshez
- ✅ `npm pack --dry-run`
- ✅ API rendszerindítás és állapot OpenAPI/Swagger felhasználói felülettel a `/docs' oldalon
- ✅ MCP rendszerindítás az "stdio", "stream" és "sse" fájlokban
- ✅ A2A rendszerindítás, lekérdezés, SSE streamelés, törlés és push-config életciklus
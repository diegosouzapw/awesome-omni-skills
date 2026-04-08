# 🗂️ Project Structure (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Az Awesome Omni Skills monorepo teljes könyvtár- és fájlhivatkozása.**---

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

>**A natív készségkatalógus.**Ez a projekt elsődleges nyilvános tartalmi felülete.

**154**készségkönyvtárat tartalmaz, mindegyik legalább egy `SKILL.md` játékkönyvvel. A nagyobb készségek magukban foglalhatják az "agents/", "references/", "examples/", "scripts/" és "assets/" alkönyvtárakat.

A készségek két felvételi úton érkeznek:
-**Közvetlen közreműködő PR-ok**– az emberek közvetlenül nyújtják be a készségeket
-**Leraktár alapú külső importálás**- felülvizsgált külső import/* PR-k az upstream adattárakból

| Mit tartalmaz | Példa |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma tervezés-kód készség |
| `skills/architecture/SKILL.md` | Építészeti áttekintés és tervezési készség |
| `skills/<név>/metadata.json` | Automatikusan generált osztályozás és pontozás |---

### `skills_omni/`

>**Kurált, továbbfejlesztett, csak angol nyelvű származékok.**A privát fejlesztési folyamat karbantartja.

**110**továbbfejlesztett készségkönyvtárakat tartalmaz, amelyek tükrözik és javítják a 'skills/' natív megfelelőit. Ez a felület**közvetlen nyilvános hozzájárulásra nincs nyitva**– kizárólag az automatizált erősítők csővezetéke tölti be.

Mindegyik származék megőrzi az eredeti forráshoz való hozzárendelést, miközben magasabb szerkesztési színvonalat biztosít, mindig angol nyelven.---

### `packages/`

>**A monorepo munkaterületek.**Az összes futásidejű Node.js kód itt él.

| Csomag | npm Név | Cél |
|:--------|:---------|:---------|
| 📂 `csomagok/katalógusmag/` | `@omni-skills/catalog-core` | Megosztott katalógus-futási idő az "ICatalogStorageAdapter" függőségi injekcióval. Keresési, pontozási, összehasonlítási, ajánlási és telepítési terv logikát biztosít az összes szerverfelületen |
| 📂 `csomagok/cli/` | (gyökér csomagtartó) | Egységesített CLI belépési pontok, irányított telepítő, Ink vizuális TUI, diagnosztika, füstellenőrzés és szolgáltatásindítók. ESM-natív |
| 📂 `csomagok/telepítési célok/` | `@omni-skills/install-targets` | A 9 telepíthető kliens (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) nyilvántartása útvonalfelbontással és zászlóleképezéssel |
| 📂 `csomagok/szerver-api/` | `@omni-skills/server-api` | Csak olvasható HTTP-katalógus API OpenAPI 3.1-el, Swagger UI `/docs'-on, hitelesítés, sebességkorlátozás, CORS/IP engedélyezési listák, letöltések és adminisztrátori futásidő |
| 📂 `csomagok/szerver-mcp/` | `@omni-skills/server-mcp` | MCP-kiszolgáló, amely támogatja az "stdio", "stream" és "sse" szállítást. A helyi oldalkocsi mód fájlrendszer-tudatos telepítő/eltávolító eszközöket és kliens-tudatos MCP-konfiguráció írást ad hozzá 16 konfigurálható ügyfélhez |
| 📂 `csomagok/szerver-a2a/` | `@omni-skills/server-a2a` | A2A (Agent-to-Agent) feladatfutási idő JSON/SQLite-perzisztenciával, újraindítással, helyreállítással, SSE-streameléssel, törléssel, külső végrehajtó móddal és opcionális bérelt koordinációval |

Minden csomagnak saját `package.json`, `src/` könyvtára és (kivéve az `install-targets`) `vitest.config.js`-ja van az egységtesztekhez.---

### `dist/`

>**Létrehozott futásidejű melléktermékek.**Szándékosan elkötelezett a verziókezelés mellett.

Ezek a fájlok a CLI-telepítések, API-válaszok, MCP-eszközök, A2A-feladatok, füsttesztek és kiadás-ellenőrzés által felhasznált, géppel olvasható kimenetek. Ezeket az "npm run build" generálja újra.

| Útvonal | Cél |
|:-----|:---------|
| `dist/catalog.json` | Megjelent katalógus mind a 154 képességgel, pontszámmal és metaadattal |
| `dist/bundles.json` | Csomagdefiníciók a tagok elérhetőségi állapotával |
| `dist/manifests/<skill>.json` | Képességenkénti géppel olvasható jegyzék |
| `dist/archives/<skill>.zip` | Képességenkénti ZIP archívum letöltéshez |
| `dist/archives/<skill>.tar.gz` | Képességenkénti tarball archívum letöltésre |
| `dist/archives/<skill>.checksums.txt` | SHA-256 ellenőrzőösszeg-jegyzék archívumonként |
| `dist/archives/<skill>.zip.sig` | Leválasztott aláírás (csak megjelenési időben, gitignorálva) |
| `dist/release-notes.md` | Automatikusan generált kibocsátási megjegyzések (git.) |
| `dist/signing/` | Származtatott nyilvános kulcsú anyag (gitignorált) |

>**Miért van elkötelezett a `dist/`?**Mert része a telepítési, API-, MCP-, A2A- és kiadási szerződésnek. A fogyasztók elvárják, hogy ezek a fájlok a build futtatása nélkül is jelen legyenek.---

### `data/`

>**Statikus projektadatfájlok.**Forrásvezérelt definíciók, amelyek irányítják a felépítést és a futásidejű viselkedést.

| Fájl | Cél |
|:-----|:---------|
| `data/bundles.json` | Kurált csomagmeghatározások (készségtaglisták csomagonként) |
| `data/project_identity.json` | Kanonikus projektazonosító: név, leírás, kezdőlap, GitHub-témák, futásidejű felületdefiníciók és ügyféllisták |
| `data/project_status.json` | Létrehozott projektmetrikák pillanatképe: képességek száma, pontszámok, ügyfélszámok, kategóriák száma és minőségi különbségek |---

### `docs/`

>**Minden projektdokumentáció.**A közönség szervezésében.

| Útvonal | Közönség | Tartalom |
|:-----|:---------|:--------|
| `docs/README.md` | Mindenki | Dokumentációs központ – az összes dokumentum központi indexe |
| `docs/CATALOG.md` | Felhasználók | Automatikusan generált katalógus, amely felsorolja mind a 154 képességet pontszámokkal |
| `docs/PROJECT-STRUCTURE.md` | Mindenki | Ez a fájl – projektkönyvtár hivatkozás |
| `docs/users/` | Végfelhasználók | Első lépések, CLI felhasználói útmutató, használati útmutató, csomagok, runbook |
| `dokumentumok/közreműködők/` | Közreműködők | Készségek anatómiája, sablon, PR-munkafolyamat, minőségi sáv, magas pontszámú játékkönyv |
| `docs/specs/` | Építészek | API, MCP oldalkocsi, CLI-telepítő, vizuális shell, ügyféltámogatási mátrix, osztályozás, biztonság és jegyzékspecifikációk |
| `docs/i18n/` | Nemzetközi felhasználók | A README gyökér automatikus fordítása 32 nyelven |#### `docs/users/`

| Fájl | Cél |
|:-----|:---------|
| `KEZDŐKEZDÉS.md` | A készségek telepítése, ellenőrzése és előhívása 2 percen belül |
| `CLI-USER-GUIDE.md` | Teljes parancsreferencia lépésről-lépésre forgatókönyvekkel |
| `HASZNÁLAT.md` | CLI-parancsok, telepítési módok, futásidejű parancsok és MCP-konfigurációs folyamatok |
| `BUNDLES.md` | A válogatott csomagok és jelenlegi elérhetőségük |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Márkaváltási állapot és elfogadási jelentés |
| `RUNBOOK.md` | Működési hivatkozás (más néven "docs/operations/RUNBOOK.md") |#### `docs/contributors/`

| Fájl | Cél |
|:-----|:---------|
| `SKILL-ANATÓMIA.md` | Szerkezeti és minőségi elvárások egy képességgel szemben |
| `SKILL-TEMPLATE.md` | Kezdő `SKILL.md` aktuális frontanyaggal |
| `SKILL-PR-WORKFLOW.md` | Natív bevitel, fokozó feldolgozás és a felülvizsgáló elvárásai |
| `QUALITY-BAR.md` | Elfogadási kritériumok és jelenlegi referenciaértékek |
| `HIGH-SCORE-PLAYBOOK.md` | Mi vezet a magas érettséghez, a minőséghez, a bevált gyakorlatokhoz és a biztonsági pontszámokhoz |#### `docs/specs/`

| Fájl | Cél |
|:-----|:---------|
| `KATALÓGUS-API.md` | HTTP-végpontok, szűrés, irányítás és letöltések |
| `CLI-GUIDED-INSTALLER.md` | Viselkedési szerződés az irányított telepítő számára |
| `CLI-VISUAL-SHELL.md` | Ink vizuális héj, állapotmodell és szolgáltatási központ |
| `LOCAL-MCP-SIDECAR.md` | Fájlrendszer-tudatos eszközök, engedélyezési lista modell és konfigurációk írása |
| `CLIENT-SUPPORT-MATRIX.md` | Teljes ügyfél- és írói hivatkozás 9 telepítés + 16 konfigurációs kliens között |
| `SKILL-CLASSIFICATION.md` | Taxonómia, pontozási heurisztika és metaadat-termékek |
| `SECURITY-VALIDATION.md` | Szkennerek, archívumok, aláírások és kiadás-ellenőrzés |
| `SKILL-MANIFEST.md` | Géppel olvasható jegyzékformátum és kompatibilitási szerződés |#### `docs/i18n/`

**32**nyelvi könyvtárat tartalmaz, mindegyik egy lefordított `README.md`-vel. A nyelvek a következők: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

A fordításokat az "npm run i18n:render" automatikusan generálja, és az "npm run i18n:check" ellenőrzi.---

### `tools/`

>**Infrastruktúra létrehozása, ellenőrzése és tesztelése.**Elsősorban az `npm run' parancsok által felhasznált Python-szkriptek.#### `tools/scripts/`

| Script | npm Command | Cél |
|:-------|:-------------|:---------|
| `validate_skills.py` | `npm run validate` | Érvényesíti az összes `SKILL.md` fájlt és újragenerálja a `metadata.json` |
| `skill_metadata.py` | (validate által importált) | Alapvető monolitikus validátor: frontanyag elemzés, taxonómia, pontozás, biztonsági szkennelés |
| `recategorize_skills.py` | `npm run taxonomy:report` | Megjeleníti vagy alkalmazza a kanonikus kategórianormalizálást |
| `generate_index.py` | `npm futási index` | `dist/` jegyzékeket, archívumokat és ellenőrző összegeket generál |
| `build_catalog.js` | `npm futtatási katalógus` | Létrehozza a "docs/CATALOG.md" fájlt a "skills_index.json" fájlból |
| `generate_project_status.py` | `npm projekt futtatása:állapot` | Létrehozza a "data/project_status.json" fájlt az aktuális mérőszámokkal |
| `render_project_docs.py` | `npm run docs:render` | Frissíti a README, docs és CONTRIBUTING | által generált blokkokat
| `generate_i18n.py` | `npm run i18n:render` | Létrehoz vagy frissíti a `docs/i18n/` fordításokat |
| `repository_sources.py` | `npm run registry:render` | Rendereli és érvényesíti a `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identitás:check` | Ellenőrzi a package.json, a README és a repo azonosság-illesztését |
| `verify_archives.py` | `npm run verify:archives` | Ellenőrzi az archívum integritását és az opcionális aláírásokat |
| `verify_security_scanners.py` | `npm run verify:scanners` | Megerősíti a szkenner lefedettségét a generált metaadatokban |
| `generate_release_notes.py` | `npm run release:notes` | Egyéni kiadási megjegyzéseket hoz létre a metaadatokból és a git előzményekből |
| `next_release_version.py` | `npm run release:next-version` | Kiszámítja a következő semver verziót a patch-to-10 házirend használatával |
| `sync_repo_version.py` | `npm run release:sync-version` | Szinkronizálja a verziót a munkaterület-csomagok között |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Kinyomtatja vagy alkalmazza a GitHub leírását, kezdőlapját és témaköreit |
| `validate_contribution_scope.py` | (CI) | Érvényesíti a PR-hozzájárulás hatókörének határait |
| `install_githooks.js` | `npm run hooks:install` | Telepíti a helyi előzetes véglegesítési horgot |#### `tools/scripts/tests/`

Az "npm teszt" által felhasznált integrációs és TUI tesztcsomagok:
- Legacy Python PTY tesztek
- Node TUI állítások
- Tesztfutó hangszerelő---

### `.github/`

>**GitHub-műveletek és közösségi sablonok.**#### `.github/workflows/`

| Munkafolyamat | Trigger | Cél |
|:---------|:--------|:---------|
| `validate.yml` | Nyomja meg/PR a "fő" | Építsd meg, teszteld és ellenőrizd, hogy a generált műtermékek véglegesek-e |
| `release.yml` | Címke push `v*` vagy kézi küldés | Kiadási szintű szkennerek, aláírás, npm közzététel, GitHub kiadás |
| `auto-release-skill-merges.yml` | Egyesítés a „fő” elemhez, érintve a „készségeket/*” | Automatikus verzióbomlás, címkézés és kiadás a készségek változásaihoz |
| `enhance-pr-skills.yml` | PR képességváltással | Futtatja a privát javítási folyamatot, és közzéteszi a PR | kísérőt
| `sync-repository-metadata.yml` | Változások a `data/project_identity.json` | Szinkronizálja a GitHub leírását, a kezdőlapot és a témákat |#### `.github/pull_request_template.md`

Alapértelmezett PR-sablon ellenőrzőlistával a készségekhez és a futásidejű hozzájárulásokhoz.---

### `.githooks/`

>**Helyi Git-hookok.**Az `npm run hooks:install` segítségével telepítve.

| Fájl | Cél |
|:-----|:---------|
| "előzetes lekötés" | Lefuttatja az alapvető érvényesítést a véglegesítés engedélyezése előtt |---

## 📄 Root Files Reference

| Fájl | Cél |
|:-----|:---------|
| `README.md` | Nyilvános README projekt hős szalaghirdetéssel, telepítési útmutatóval és a funkciók teljes áttekintésével |
| `CONTRIBUTING.md` | Közreműködői útmutató készségekkel, futásidővel és felvételi munkafolyamatokkal |
| `SECURITY.md` | Biztonsági szabályzat, hatókör és sebezhetőségi jelentési utasítások |
| `CODE_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | A külső bevitelre javasolt upstream adattárak nyilvános nyilvántartása |
| "LICENC" | MIT-licenc (kód és szerszámok) |
| "LICENCTARTALOM" | CC BY 4.0 (dokumentáció és készségtartalom) |
| `package.json` | Gyökér monorepo csomag: szkriptek, függőségek, bin belépési pontok, fájlok és munkaterület-konfiguráció |
| `package-lock.json` | npm lockfile (automatikusan generált) |
| `metadata.json` | Az egész tárhelyre kiterjedő érvényesítés és pontszámösszegzés (az "npm run valide" által generált) |
| `skills_index.json` | Repo-local normalizált képzettségi index (az "npm run validate" által generált) |
| `.gitignore` | Verzióvezérlési kizárások – nevezetesen a „dist/”**nem**figyelmen kívül hagyva |
| `.npmignore` | A `__pycache__/` és a `*.pyc` kizárása az npm tarballból |
| `.node-version` | Node.js verzió rögzítése: `22` |
| `.nvmrc` | nvm verzió rögzítése: `22` (tükrök `.node-version`) |
| `vitest.config.js` | Root Vitest konfiguráció, amely mind az 5 csomagszintű tesztkonfigurációra hivatkozik |
| `vitest.workspace.js` | Vitest munkaterület meghatározása monorepo-aware tesztvégrehajtáshoz |---

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

A fentiek mindegyike egymás után fut az "npm run build" részeként.
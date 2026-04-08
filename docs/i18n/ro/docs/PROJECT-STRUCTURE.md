# 🗂️ Project Structure (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Director complet și referință la fișier pentru Awesome Omni Skills monorepo.**---

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

>**Catalogul de aptitudini native.**Aceasta este suprafața principală de conținut public a proiectului.

Conține**154**directoare de abilități, fiecare cu cel puțin un manual de joc `SKILL.md`. Abilitățile mai mari pot include subdirectoare `agents/`, `references/`, `examples/`, `scripts/` și `assets/`.

Abilitățile ajung prin două căi de admisie:
-**PR-uri contribuitori directi**— oamenii transmit abilitățile direct
-**Importuri externe bazate pe depozite**- PR-uri `external-import/*` revizuite din depozitele din amonte

| Ce conține | Exemplu |
|:------------------|:---------|
| `skills/omni-figma/SKILL.md` | Abilitatea Figma de proiectare la codificare |
| `skills/architecture/SKILL.md` | Revizuirea arhitecturii și abilități de planificare |
| `skills/<nume>/metadata.json` | Clasificare și punctare generate automat |---

### `skills_omni/`

>**Derivate îmbunătățite exclusiv în limba engleză selectate.**Menținute de conducta de îmbunătățire privată.

Conține**110**directoare de abilități îmbunătățite care oglindesc și îmbunătățesc omologii lor nativi în `skills/`. Această suprafață**nu este deschisă pentru contribuția publică directă**— este populată exclusiv de conducta de îmbunătățire automată.

Fiecare derivat păstrează atribuirea sursei sale native, oferind în același timp un standard editorial mai ridicat, întotdeauna în limba engleză.---

### `packages/`

>**Spatiile de lucru monorepo.**Tot codul Node.js de rulare se află aici.

| Pachet | npm Nume | Scop |
|:--------|:---------|:--------|
| 📂 `pachete/catalog-core/` | `@omni-skills/catalog-core` | Timpul de rulare a catalogului partajat cu injecția de dependență „ICatalogStorageAdapter”. Oferă logica de căutare, punctare, comparare, recomandare și plan de instalare consumată de toate suprafețele serverului |
| 📂 `pachete/cli/` | (root package bin) | Puncte de intrare CLI unificate, instalator ghidat, TUI vizual Ink, diagnosticare, verificări de fum și lansatoare de servicii. ESM-nativ |
| 📂 `pachete/install-targets/` | `@omni-skills/install-targets` | Registrul celor 9 clienți capabili de instalare (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) cu rezoluție de cale și mapare a steagurilor |
| 📂 `pachete/server-api/` | `@omni-skills/server-api` | API de catalog HTTP numai pentru citire cu OpenAPI 3.1, Swagger UI pe `/docs`, auth, rate limiting, CORS/IP permitlists, downloads, and admin runtime |
| 📂 `pachete/server-mcp/` | `@omni-skills/server-mcp` | Server MCP care acceptă transporturi `stdio`, `stream` și `sse`. Modul sidecar local adaugă instrumente de instalare/eliminare compatibile cu sistemul de fișiere și scrierea configurației MCP compatibilă cu client pentru 16 clienți capabili de configurare |
| 📂 `pachete/server-a2a/` | `@omni-skills/server-a2a` | Timp de execuție a activității A2A (de la agent la agent) cu persistență JSON/SQLite, recuperare de repornire, streaming SSE, anulare, mod executor extern și coordonare opțională închiriată |

Fiecare pachet are propriul său director `package.json`, `src/` și (cu excepția `install-targets`) un `vitest.config.js` pentru testele unitare.---

### `dist/`

>**Artefacte de rulare generate.**Angajat intenționat controlului versiunilor.

Aceste fișiere sunt ieșirile care pot fi citite de mașină consumate de instalările CLI, răspunsurile API, instrumentele MCP, sarcinile A2A, testele de fum și verificarea versiunii. Ele sunt regenerate prin `npm run build`.

| Calea | Scop |
|:-----|:--------|
| `dist/catalog.json` | Catalog publicat cu toate cele 154 de abilități, scoruri și metadate |
| `dist/bundles.json` | Definiții pachete cu starea de disponibilitate a membrilor |
| `dist/manifests/<skill>.json` | Manifest citibil de mașină pentru fiecare abilitate |
| `dist/archives/<skill>.zip` | Arhivă ZIP pe abilitate pentru descărcare |
| `dist/archives/<skill>.tar.gz` | Arhiva tarball per abilitate pentru descărcare |
| `dist/archives/<skill>.checksums.txt` | Manifestul sumei de control SHA-256 per arhivă |
| `dist/archives/<skill>.zip.sig` | Semnătură detașată (numai la momentul lansării, gitignored) |
| `dist/release-notes.md` | Note de lansare generate automat (gitignored) |
| `dist/semnare/` | Material derivat al cheii publice (gitignored) |

>**De ce este `dist/` comis?**Pentru că face parte din contractul de instalare, API, MCP, A2A și de lansare. Consumatorii se așteaptă ca aceste fișiere să fie prezente fără a rula o construcție.---

### `data/`

>**Fișiere statice de date ale proiectului.**Definiții controlate de sursă care conduc la construirea și comportamentul de rulare.

| Fișier | Scop |
|:-----|:--------|
| `data/bundles.json` | Definiții ale pachetelor organizate (liste de membri ai abilităților per pachet) |
| `data/project_identity.json` | Identitate canonică a proiectului: nume, descriere, pagină de pornire, subiecte GitHub, definiții ale suprafeței de rulare și liste de clienți |
| `data/project_status.json` | Instantaneu generat de valori ale proiectului: număr de aptitudini, scoruri, număr de clienți, număr de categorii și spread-uri de calitate |---

### `docs/`

>**Toată documentația proiectului.**Organizată de public.

| Calea | Audiență | Conținut |
|:-----|:---------|:---------|
| `docs/README.md` | Toată lumea | Hub de documentare — index central pentru toate documentele |
| `docs/CATALOG.md` | Utilizatori | Catalog generat automat care listează toate cele 154 de abilități cu scoruri |
| `docs/PROJECT-STRUCTURE.md` | Toată lumea | Acest fișier — referință la directorul proiectului |
| `docs/users/` | Utilizatori finali | Noțiuni introductive, ghid de utilizare CLI, ghid de utilizare, pachete, runbook |
| `docs/contributors/` | Colaboratori | Anatomie abilităților, șablon, flux de lucru PR, bară de calitate, manual de joc cu scoruri mari |
| `docs/specs/` | Arhitecți | API, MCP sidecar, program de instalare CLI, shell vizual, matrice de suport pentru clienți, clasificare, securitate și specificații manifest |
| `docs/i18n/` | Utilizatori internaționali | Traduceri generate automat ale rădăcinii README în 32 de limbi |#### `docs/users/`

| Fișier | Scop |
|:-----|:--------|
| `GETTING-STARTED.md` | Instalați, verificați și invocați o abilitate în mai puțin de 2 minute |
| `CLI-USER-GUIDE.md` | Referință de comandă completă cu scenarii pas cu pas |
| `UTILIZARE.md` | Comenzi CLI, moduri de instalare, comenzi de rulare și fluxuri de configurare MCP |
| `BUNDLES.md` | Pachetele organizate și disponibilitatea lor curentă |
| `MINIMOS-OMNI-COMPĂTĂȚI-ROLLOUT.md` | Starea migrației rebrand și raportul de acceptare |
| `RUNBOOK.md` | Referință operațională (legată și ca `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Fișier | Scop |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Structura și așteptările de calitate pentru o abilitate |
| `SKILL-TEMPLATE.md` | Starter `SKILL.md` cu frontmatter actual |
| `SKILL-PR-WORKFLOW.md` | Aportul nativ, procesarea amplificatoarelor și așteptările recenzenților |
| `CALITY-BAR.md` | Criterii de acceptare și repere actuale |
| `HIGH-SCORE-PLAYBOOK.md` | Ceea ce determină o maturitate ridicată, calitate, cele mai bune practici și scoruri de securitate |#### `docs/specs/`

| Fișier | Scop |
|:-----|:--------|
| `CATALOG-API.md` | Puncte finale HTTP, filtrare, guvernare și descărcări |
| `CLI-GUIDED-INSTALLER.md` | Contract comportamental pentru instalatorul ghidat |
| `CLI-VISUAL-SHELL.md` | Înveliș vizual cu cerneală, model de stare și centru de servicii |
| `LOCAL-MCP-SIDECAR.md` | Instrumente care știe sistemul de fișiere, modelul listei de permise și scrierea configurațiilor |
| `CLIENT-SUPPORT-MATRIX.md` | Referințe complete pentru client și scriitor în 9 clienți de instalare + 16 clienți de configurare |
| `CLASIFICARE-ABILITARE.md` | Taxonomie, euristici de punctare și artefacte de metadate |
| `SECURITY-VALIDATION.md` | Scanere, arhive, semnături și verificarea eliberării |
| `SKILL-MANIFEST.md` | Format manifest citibil de mașină și contract de compatibilitate |#### `docs/i18n/`

Conține**32**directoare de limbi, fiecare cu un `README.md` tradus. Limbile includ: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Traducerile sunt generate automat de `npm run i18n:render` și validate de `npm run i18n:check`.---

### `tools/`

>**Construiți, validați și testați infrastructura.**În primul rând scripturi Python consumate de comenzile `npm run`.#### `tools/scripts/`

| Script | Comanda npm | Scop |
|:-------|:-------------|:--------|
| `validate_skills.py` | `npm run validate` | Validează toate fișierele `SKILL.md` și regenerează `metadata.json` |
| `skill_metadata.py` | (importat prin validare) | Validator monolitic de bază: analiza frontală, taxonomie, scor, scanare de securitate |
| `recategorize_skills.py` | `npm run taxonomy:report` | Afișează sau aplică normalizarea categoriei canonice |
| `generate_index.py` | `npm run index` | Generează manifeste `dist/`, arhive și sume de control |
| `build_catalog.js` | `npm run catalog` | Generează `docs/CATALOG.md` din `skills_index.json` |
| `generate_project_status.py` | `npm run project:status` | Generează `data/project_status.json` cu valorile curente |
| `render_project_docs.py` | `npm rulați docs:render` | Actualizează blocurile generate în README, docs și CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Generează sau actualizează traducerile `docs/i18n/` |
| `repository_sources.py` | `npm run registry:render` | Redă și validează `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Verifică alinierea identității package.json, README și repo |
| `verify_archives.py` | `npm run verify:archives` | Verifică integritatea arhivei și semnăturile opționale |
| `verify_security_scanners.py` | `npm run verify:scanners` | Confirmă acoperirea scanerului în metadatele generate |
| `generate_release_notes.py` | `npm run release:notes` | Generează note de lansare personalizate din metadate și istoricul git |
| `next_release_version.py` | `npm run release:next-version` | Calculează următoarea versiune semver utilizând politica de patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Sincronizează versiunea în pachetele de spațiu de lucru |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Imprimă sau aplică descrierea, pagina de pornire și subiectele GitHub |
| `validate_contribution_scope.py` | (CI) | Validează limitele domeniului de aplicare a contribuției PR |
| `install_githooks.js` | `npm run hooks:install` | Instalează cârligul local de pre-commit |#### `tools/scripts/tests/`

Integrare și suite de testare TUI consumate de `npm test`:
- Teste PTY Python vechi
- Aserțiuni TUI nod
- Test runner orchestrator---

### `.github/`

>**Acțiuni GitHub și șabloane de comunitate.**#### `.github/workflows/`

| Flux de lucru | Trigger | Scop |
|:----------|:--------|:---------|
| `validate.yml` | Apăsați/PR la `principal` | Creați, testați și confirmați că artefactele generate sunt comise |
| `release.yml` | Tag push `v*` sau expediere manuală | Scanere de calitate, semnare, publicare npm, lansare GitHub |
| `auto-release-skill-merges.yml` | Îmbinați cu „principalul” atingere `skills/*` | Bump, etichetare și lansare automată a versiunii la modificările abilităților |
| `enhance-pr-skills.yml` | PR cu schimbări de abilități | Rulează canalul de îmbunătățire privat și postează PR |
| `sync-repository-metadata.yml` | Modificări la `data/project_identity.json` | Sincronizează descrierea GitHub, pagina de pornire și subiectele |#### `.github/pull_request_template.md`

Șablon PR implicit cu listă de verificare pentru contribuții la abilități și la timpul de execuție.---

### `.githooks/`

>**Local Git hooks.**Instalat prin `npm run hooks:install`.

| Fișier | Scop |
|:-----|:--------|
| `pre-commit` | Rulează validarea de bază înainte de a permite un commit |---

## 📄 Root Files Reference

| Fișier | Scop |
|:-----|:--------|
| `README.md` | Proiect destinat publicului README cu banner erou, ghid de instalare și prezentare generală a funcțiilor |
| `CONTRIBUTING.md` | Ghid pentru colaboratori cu abilități, timp de execuție și fluxuri de lucru de admisie |
| `SECURITY.md` | Politica de securitate, domeniul de aplicare și instrucțiunile de raportare a vulnerabilităților |
| `COD_OF_CONDUCTĂ.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | Registrul public al depozitelor din amonte propuse pentru aport extern |
| `LICENȚĂ` | Licență MIT (cod și instrumente) |
| `CONTINUT LICENȚĂ` | CC BY 4.0 (documentare și conținut de abilități) |
| `pachet.json` | Pachetul rădăcină monorepo: scripturi, dependențe, puncte de intrare bin, fișiere și config. spațiu de lucru |
| `package-lock.json` | fișier de blocare npm (generat automat) |
| `metadata.json` | Validarea la nivelul depozitului și rezumatul scorului (generat de `npm run validate`) |
| `skills_index.json` | Indicele de calificare normalizat repo-local (generat de `npm run validate`) |
| `.gitignore` | Excluderile de control al versiunilor — în special `dist/` este**nu**ignorat |
| `.npmignore` | Exclude `__pycache__/` și `*.pyc` din tarball-ul npm |
| `.node-version` | Fixarea versiunii Node.js: `22` |
| `.nvmrc` | Fixarea versiunii nvm: `22` (oglinzi `.node-version`) |
| `vitest.config.js` | Configurația Root Vitest care face referire la toate cele 5 configurații de testare la nivel de pachet |
| `vitest.workspace.js` | Definiția spațiului de lucru Vitest pentru execuția testului conștient de monorepo |---

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

Toate cele de mai sus rulează secvenţial ca parte a `npm run build`.
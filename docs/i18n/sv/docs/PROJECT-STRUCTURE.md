# 🗂️ Project Structure (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Fullständig katalog och filreferens för Awesome Omni Skills monorepo.**---

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

>**Den inbyggda färdighetskatalogen.**Detta är projektets primära offentliga innehållsyta.

Innehåller**154**färdighetskataloger, var och en med minst en `SKILL.md`-spelbok. Större färdigheter kan inkludera `agenter/`, `referenser/`, `exempel/`, `scripts/` och `tillgångar/` underkataloger.

Färdigheter kommer genom två intagsvägar:
-**Prs för direkta bidragsgivare**— människor skickar in färdigheter direkt
-**Förvarsbaserad extern import**— granskade "extern-import/*" PR:er från uppströmsförvar

| Vad den innehåller | Exempel |
|:----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma design-to-code skicklighet |
| `skills/architecture/SKILL.md` | Arkitekturgranskning och planeringsförmåga |
| `skills/<namn>/metadata.json` | Autogenererad klassificering och poängsättning |---

### `skills_omni/`

>**Utvalda förbättrade derivator endast för engelska.**Underhålls av den privata förbättringspipelinen.

Innehåller**110**förbättrade färdighetskataloger som speglar och förbättrar sina inhemska motsvarigheter i `skills/`. Denna yta är**inte öppen för direkt offentligt bidrag**— den befolkas uteslutande av den automatiska förstärkarpipelinen.

Varje derivat bevarar tillskrivningen till sin ursprungliga källa samtidigt som de ger en högre redaktionell standard, alltid på engelska.---

### `packages/`

>**Monorepo-arbetsytorna.**All runtime Node.js-kod finns här.

| Paket | npm Namn | Syfte |
|:--------|:--------|:--------|
| 📂 `paket/katalog-kärna/` | `@omni-skills/catalog-core` | Delad katalogkörning med "ICatalogStorageAdapter" beroendeinjektion. Ger logik för sökning, poäng, jämförelse, rekommendation och installationsplan som används av alla serverytor |
| 📂 `paket/cli/` | (rotpaket bin) | Enade CLI-ingångspunkter, guidad installatör, Ink Visual TUI, diagnostik, rökkontroller och servicestartare. ESM-native |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Register över de 9 installationskompatibla klienterna (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) med sökvägsupplösning och flaggmappning |
| 📂 `paket/server-api/` | `@omni-skills/server-api` | Skrivskyddat HTTP-katalog-API med OpenAPI 3.1, Swagger UI på `/docs`, auth, hastighetsbegränsning, CORS/IP-godkännandelistor, nedladdningar och adminkörning |
| 📂 `paket/server-mcp/` | `@omni-skills/server-mcp` | MCP-server som stöder "stdio", "stream" och "sse"-transporter. Lokalt sidovagnsläge lägger till filsystemmedvetna installations-/borttagningsverktyg och klientmedveten MCP-konfigurationsskrivning för 16 konfigurationskompatibla klienter |
| 📂 `paket/server-a2a/` | `@omni-skills/server-a2a` | A2A (Agent-to-Agent)-uppgiftskörning med JSON/SQLite-beständighet, omstartsåterställning, SSE-strömning, annullering, externt exekveringsläge och valfri leasad koordinering |

Varje paket har sin egen `package.json`, `src/`-katalog och (förutom `install-targets`) en `vitest.config.js` för enhetstester.---

### `dist/`

>**Genererade runtime-artefakter.**Avsiktligt engagerad i versionskontroll.

Dessa filer är maskinläsbara utdata som konsumeras av CLI-installationer, API-svar, MCP-verktyg, A2A-uppgifter, röktester och releaseverifiering. De återskapas av `npm run build`.

| Väg | Syfte |
|:-----|:--------|
| `dist/catalog.json` | Publicerad katalog med alla 154 färdigheter, poäng och metadata |
| `dist/bundles.json` | Paketdefinitioner med medlemstillgänglighetsstatus |
| `dist/manifests/<skill>.json` | Maskinläsbart manifest per färdighet |
| `dist/archives/<skill>.zip` | ZIP-arkiv per färdighet för nedladdning |
| `dist/archives/<skill>.tar.gz` | Tarball-arkiv per färdighet för nedladdning |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest per arkiv |
| `dist/archives/<skill>.zip.sig` | Fristående signatur (endast släpptid, gitignored) |
| `dist/release-notes.md` | Autogenererade release notes (gitignored) |
| `dist/signering/` | Härledd publik nyckelmaterial (gitignored) |

>**Varför är `dist/` committed?**Eftersom det är en del av installations-, API-, MCP-, A2A- och releasekontraktet. Konsumenter förväntar sig att dessa filer finns utan att köra en build.---

### `data/`

>**Statiska projektdatafiler.**Källkontrollerade definitioner som driver bygg- och körningsbeteende.

| Arkiv | Syfte |
|:-----|:--------|
| `data/bundles.json` | Kurerade paketdefinitioner (kompetensmedlemslistor per bunt) |
| `data/project_identity.json` | Kanonisk projektidentitet: namn, beskrivning, hemsida, GitHub-ämnen, definitioner av runtime-yta och kundlistor |
| `data/project_status.json` | Genererad ögonblicksbild av projektstatistik: antal färdigheter, poäng, kundantal, kategoriantal och kvalitetsspridningar |---

### `docs/`

>**All projektdokumentation.**Organiserad efter publik.

| Väg | Publik | Innehåll |
|:-----|:--------|:--------|
| `docs/README.md` | Alla | Dokumentationsnav — centralt index för alla dokument |
| `docs/CATALOG.md` | Användare | Autogenererad katalog som listar alla 154 färdigheter med poäng |
| `docs/PROJECT-STRUCTURE.md` | Alla | Denna fil — projektkatalogreferens |
| `docs/users/` | Slutanvändare | Komma igång, CLI användarhandbok, användarguide, paket, runbook |
| `docs/contributors/` | Bidragsgivare | Skicklighetsanatomi, mall, PR-arbetsflöde, kvalitetsindikator, högpoängspelbok |
| `docs/specs/` | Arkitekter | API, MCP sidovagn, CLI-installationsprogram, visuellt skal, klientsupportmatris, klassificering, säkerhet och manifestspecifikationer |
| `docs/i18n/` | Internationella användare | Autogenererade översättningar av roten README på 32 språk |#### `docs/users/`

| Arkiv | Syfte |
|:-----|:--------|
| `KOMMA IGÅNG.md` | Installera, verifiera och åberopa en färdighet på mindre än 2 minuter |
| `CLI-USER-GUIDE.md` | Fullständig kommandoreferens med steg-för-steg-scenarier |
| `USAGE.md` | CLI-kommandon, installationslägen, runtime-kommandon och MCP-konfigurationsflöden |
| `BUNDLES.md` | Utvalda paket och deras nuvarande tillgänglighet |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Rebrand migreringsstatus och acceptansrapport |
| `RUNBOOK.md` | Operationell referens (även länkad som `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Arkiv | Syfte |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Struktur och kvalitetsförväntningar på en kompetens |
| `SKILL-MALL.md` | Starter `SKILL.md` med aktuell frontmatter |
| `SKILL-PR-WORKFLOW.md` | Native intag, enhancer-bearbetning och granskares förväntningar |
| `QUALITY-BAR.md` | Acceptanskriterier och nuvarande riktmärken |
| `HIGH-SCORE-PLAYBOOK.md` | Vad driver hög mognad, kvalitet, bästa praxis och säkerhetspoäng |#### `docs/specs/`

| Arkiv | Syfte |
|:-----|:--------|
| `CATALOG-API.md` | HTTP-slutpunkter, filtrering, styrning och nedladdningar |
| `CLI-GUIDED-INSTALLER.md` | Beteendekontrakt för den guidade installatören |
| `CLI-VISUAL-SHELL.md` | Bläck visuellt skal, tillståndsmodell och servicenav |
| `LOCAL-MCP-SIDECAR.md` | Filsystemmedvetna verktyg, godkännandelistamodell och konfigurationsskrivning |
| `KLIENT-SUPPORT-MATRIX.md` | Fullständig klient- och skribentreferens över 9 installations + 16 konfigurationsklienter |
| `SKILL-CLASSIFICATION.md` | Taxonomi, poängheuristik och metadataartefakter |
| `SECURITY-VALIDATION.md` | Skannrar, arkiv, signaturer och verifiering av release |
| `SKILL-MANIFEST.md` | Maskinläsbart manifestformat och kompatibilitetskontrakt |#### `docs/i18n/`

Innehåller**32**språkkataloger, var och en med en översatt `README.md`. Språk inkluderar: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Översättningar genereras automatiskt av `npm run i18n:render` och valideras av `npm run i18n:check`.---

### `tools/`

>**Bygg, validera och testa infrastruktur.**Främst Python-skript som förbrukas av kommandon "npm run".#### `tools/scripts/`

| Manus | npm Kommando | Syfte |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Validerar alla `SKILL.md`-filer och återskapar `metadata.json` |
| `skill_metadata.py` | (importerad genom validera) | Core monolitic validator: frontmatter parsing, taxonomi, scoring, security scanning |
| `recategorize_skills.py` | `npm kör taxonomi:rapport` | Visar eller tillämpar kanonisk kategorinormalisering |
| `generate_index.py` | `npm run index` | Genererar `dist/`-manifest, arkiv och kontrollsummor |
| `build_catalog.js` | `npm kör katalog` | Genererar `docs/CATALOG.md` från `skills_index.json` |
| `generate_project_status.py` | `npm kör projekt:status` | Genererar `data/project_status.json` med aktuella mätvärden |
| `render_project_docs.py` | `npm kör docs:render` | Uppdaterar genererade block i README, docs och CONTRIBUTING |
| `generate_i18n.py` | `npm kör i18n:render` | Genererar eller uppdaterar `docs/i18n/` översättningar |
| `repository_sources.py` | `npm kör registry:render` | Renderar och validerar `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm kör identitet:check` | Verifierar anpassning av package.json, README och repo-identitet |
| `verify_archives.py` | `npm run verify:archives` | Verifierar arkivintegritet och valfria signaturer |
| `verify_security_scanners.py` | `npm run verify:scanners` | Bekräftar skannertäckning i genererad metadata |
| `generate_release_notes.py` | `npm kör release:notes` | Genererar anpassade releasenotes från metadata och git-historik |
| `next_release_version.py` | `npm kör release:nästa-version` | Beräknar nästa semver-version med hjälp av patch-to-10-policyn |
| `sync_repo_version.py` | `npm kör release:sync-version` | Synkroniserar version över arbetsytepaket |
| `sync_github_repo_metadata.py` | `npm kör repo:metadata:print` | Skriver ut eller applicerar GitHub-beskrivning, hemsida och ämnen |
| `validate_contribution_scope.py` | (CI) | Validerar PR-bidrags gränser |
| `install_githooks.js` | `npm run hooks:install` | Installerar den lokala pre-commit-kroken |#### `tools/scripts/tests/`

Integrations- och TUI-testsviter förbrukade av "npm-test":
- Legacy Python PTY-tester
- Node TUI-påståenden
- Testlöpare orkestrator---

### `.github/`

>**GitHub-åtgärder och communitymallar.**#### `.github/workflows/`

| Arbetsflöde | Utlösare | Syfte |
|:--------|:--------|:--------|
| `validate.yml` | Push/PR till `main` | Bygg, testa och bekräfta att genererade artefakter har begåtts |
| `release.yml` | Tag push `v*` eller manuell sändning | Skannrar i releasegrad, signering, npm publish, GitHub Release |
| `auto-release-skill-merges.yml` | Slå samman till `huvud` vidrörande `skills/*` | Automatisk version bump, tag och release vid färdighetsändringar |
| `enhance-pr-skills.yml` | PR med kompetensförändringar | Kör den privata förstärkarens pipeline och postar medföljande PR |
| `sync-repository-metadata.yml` | Ändringar av `data/project_identity.json` | Synkroniserar GitHub-beskrivning, hemsida och ämnen |#### `.github/pull_request_template.md`

Standard PR-mall med checklista för skicklighets- och körtidsbidrag.---

### `.githooks/`

>**Local Git hooks.**Installerad via `npm run hooks:install`.

| Arkiv | Syfte |
|:-----|:--------|
| `pre-commit` | Kör grundläggande validering innan en commit tillåts |---

## 📄 Root Files Reference

| Arkiv | Syfte |
|:-----|:--------|
| `README.md` | Allmänt riktat projekt README med hjältebanner, installationsguide och full funktionsöversikt |
| `CONTRIBUTING.md` | Bidragsguide med arbetsflöden för färdigheter, körtid och intag |
| `SÄKERHET.md` | Instruktioner för rapportering av säkerhetspolicy, omfattning och sårbarhet |
| `CODE_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | Offentligt register över föreslagna uppströmsförvar för externt intag |
| `LICENS` | MIT-licens (kod och verktyg) |
| `LICENSINNEHÅLL` | CC BY 4.0 (dokumentation och färdighetsinnehåll) |
| `package.json` | Root monorepo-paket: skript, beroenden, bin-ingångspunkter, filer och arbetsytekonfiguration |
| `package-lock.json` | npm låsfil (automatiskt genererad) |
| `metadata.json` | Förvarsomfattande validering och poängsammanfattning (genererad av `npm run validate`) |
| `skills_index.json` | Repo-lokalt normaliserat skicklighetsindex (genererat av `npm run validate`) |
| `.gitignore` | Exkludering av versionskontroll – särskilt `dist/` ignoreras**inte**|
| `.npmignore` | Utesluter `__pycache__/` och `*.pyc` från npm-tarballen |
| `.node-version` | Node.js version pinning: `22` |
| `.nvmrc` | nvm version pinning: `22` (speglar `.node-version`) |
| `vitest.config.js` | Root Vitest-konfiguration som refererar till alla 5 testkonfigurationer på paketnivå |
| `vitest.workspace.js` | Vitest arbetsyta definition för monorepo-medveten testkörning |---

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

Alla ovanstående körs sekventiellt som en del av "npm run build".
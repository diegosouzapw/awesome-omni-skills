# 🗂️ Project Structure (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Fuldstændig mappe og filreference for Awesome Omni Skills monorepo.**---

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

>**Det oprindelige færdighedskatalog.**Dette er projektets primære offentlige indholdsoverflade.

Indeholder**154**færdighedsmapper, hver med mindst en 'SKILL.md'-spillebog. Større færdigheder kan omfatte `agenter/`, `referencer/`, `eksempler/`, `scripts/` og `aktiver/` undermapper.

Færdighederne kommer gennem to indtagsveje:
-**Direkte bidragyder PR'er**— mennesker indsender færdigheder direkte
-**Repository-baseret ekstern import**— gennemgået 'ekstern-import/*' PR'er fra upstream-lagre

| Hvad det indeholder | Eksempel |
|:----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma design-til-kode færdighed |
| `skills/architecture/SKILL.md` | Arkitektur gennemgang og planlægning færdighed |
| `skills/<navn>/metadata.json` | Autogenereret klassificering og scoring |---

### `skills_omni/`

>**Kurateret, forbedrede derivater kun på engelsk.**Vedligeholdt af den private forbedringspipeline.

Indeholder**110**forbedrede færdighedsmapper, der afspejler og forbedrer deres oprindelige modparter i `færdigheder/`. Denne overflade er**ikke åben for direkte offentligt bidrag**— den er udelukkende befolket af den automatiske enhancer-pipeline.

Hver afledning bevarer tilskrivning til sin oprindelige kilde, mens den giver en højere redaktionel standard, altid på engelsk.---

### `packages/`

>**Monorepo-arbejdsområderne.**Al runtime Node.js-kode findes her.

| Pakke | npm Navn | Formål |
|:--------|:--------|:--------|
| 📂 `pakker/katalog-kerne/` | `@omni-skills/catalog-core` | Delt katalogkørselstid med "ICatalogStorageAdapter" afhængighedsinjektion. Giver søgning, scoring, sammenligning, anbefaling og installationsplanlogik, der forbruges af alle serveroverflader |
| 📂 `pakker/cli/` | (rodpakkebeholder) | Unified CLI entrypoints, guidet installatør, Ink visual TUI, diagnostik, røgtjek og servicestartere. ESM-native |
| 📂 `pakker/install-mål/` | `@omni-skills/install-targets` | Registrering af de 9 installationskompatible klienter (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) med stiopløsning og flagmapping |
| 📂 `pakker/server-api/` | `@omni-skills/server-api` | Skrivebeskyttet HTTP katalog API med OpenAPI 3.1, Swagger UI på `/docs`, godkendelse, hastighedsbegrænsning, CORS/IP tilladelseslister, downloads og admin runtime |
| 📂 `pakker/server-mcp/` | `@omni-skills/server-mcp` | MCP-server, der understøtter "stdio", "stream", og "sse"-transporter. Lokal sidevognstilstand tilføjer filsystembevidste installations-/fjernværktøjer og klientbevidst MCP-konfigurationsskrivning til 16 konfigurationskompatible klienter |
| 📂 `pakker/server-a2a/` | `@omni-skills/server-a2a` | A2A (Agent-to-Agent) opgave runtime med JSON/SQLite persistens, genstart gendannelse, SSE streaming, annullering, ekstern eksekveringstilstand og valgfri leaset koordinering |

Hver pakke har sin egen `package.json`, `src/`-mappe og (undtagen `install-targets`) en `vitest.config.js` til enhedstest.---

### `dist/`

>**Genererede runtime-artefakter.**Med vilje forpligtet til versionskontrol.

Disse filer er de maskinlæsbare output, der forbruges af CLI-installationer, API-svar, MCP-værktøjer, A2A-opgaver, røgtest og frigivelsesbekræftelse. De er regenereret af 'npm run build'.

| Sti | Formål |
|:-----|:--------|
| `dist/catalog.json` | Udgivet katalog med alle 154 færdigheder, scoringer og metadata |
| `dist/bundles.json` | Bundledefinitioner med medlemstilgængelighedsstatus |
| `dist/manifests/<skill>.json` | Maskinlæsbart manifest pr. færdighed |
| `dist/archives/<skill>.zip` | Per-skill ZIP-arkiv til download |
| `dist/archives/<skill>.tar.gz` | Per-skill tarball-arkiv til download |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrolsummanifest pr. arkiv |
| `dist/archives/<skill>.zip.sig` | Fritliggende signatur (kun udgivelsestid, gitignored) |
| `dist/release-notes.md` | Autogenererede udgivelsesbemærkninger (gitignored) |
| `dist/signering/` | Afledt offentlig nøglemateriale (gitignored) |

>**Hvorfor er `dist/` forpligtet?**Fordi det er en del af installations-, API-, MCP-, A2A- og releasekontrakten. Forbrugerne forventer, at disse filer er til stede uden at køre en build.---

### `data/`

>**Statiske projektdatafiler.**Kildekontrollerede definitioner, der driver build- og runtime-adfærd.

| Fil | Formål |
|:-----|:--------|
| `data/bundles.json` | Kurerede bundtdefinitioner (kompetencemedlemslister pr. bundt) |
| `data/projekt_identitet.json` | Kanonisk projektidentitet: navn, beskrivelse, hjemmeside, GitHub-emner, runtime-overfladedefinitioner og klientlister |
| `data/project_status.json` | Genereret øjebliksbillede af projektmålinger: antal færdigheder, score, kundeantal, kategoriantal og kvalitetsspredninger |---

### `docs/`

>**Al projektdokumentation.**Organiseret efter publikum.

| Sti | Publikum | Indhold |
|:-----|:--------|:--------|
| `docs/README.md` | Alle | Dokumentationshub — centralt indeks til alle dokumenter |
| `docs/CATALOG.md` | Brugere | Autogenereret katalog med alle 154 færdigheder med score |
| `docs/PROJECT-STRUCTURE.md` | Alle | Denne fil — projektmappe reference |
| `docs/users/` | Slutbrugere | Kom godt i gang, CLI brugervejledning, brugsvejledning, bundter, runbook |
| `dokumenter/bidragydere/` | Bidragydere | Færdighedsanatomi, skabelon, PR-arbejdsgang, kvalitetslinje, spillebog med høj score |
| `docs/specs/` | Arkitekter | API, MCP sidevogn, CLI-installationsprogram, visual shell, klientsupportmatrix, klassifikation, sikkerhed og manifestspecifikationer |
| `docs/i18n/` | Internationale brugere | Autogenererede oversættelser af roden README på 32 sprog |#### `docs/users/`

| Fil | Formål |
|:-----|:--------|
| `KOM GODT I GANG.md` | Installer, bekræft og påkald en færdighed på under 2 minutter |
| `CLI-USER-GUIDE.md` | Fuld kommandoreference med trin-for-trin scenarier |
| `USAGE.md` | CLI-kommandoer, installationstilstande, runtime-kommandoer og MCP-konfigurationsflow |
| `BUNDLES.md` | Kurerede bundter og deres nuværende tilgængelighed |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Rebrand migrationsstatus og acceptrapport |
| `RUNBOOK.md` | Operationel reference (også knyttet som `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Fil | Formål |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Struktur og kvalitetsforventninger til en færdighed |
| `SKILL-TEMPLATE.md` | Starter `SKILL.md` med aktuel frontmatter |
| `SKILL-PR-WORKFLOW.md` | Native indtag, enhancer-behandling og anmelderforventninger |
| `QUALITY-BAR.md` | Acceptkriterier og nuværende benchmarks |
| `HIGH-SCORE-PLAYBOOK.md` | Hvad driver høj modenhed, kvalitet, bedste praksis og sikkerhedsresultater |#### `docs/specs/`

| Fil | Formål |
|:-----|:--------|
| `CATALOG-API.md` | HTTP-slutpunkter, filtrering, styring og downloads |
| `CLI-GUIDED-INSTALLER.md` | Adfærdskontrakt for den guidede installatør |
| `CLI-VISUAL-SHELL.md` | Blækvisuel skal, tilstandsmodel og servicehub |
| `LOCAL-MCP-SIDECAR.md` | Filsystembevidste værktøjer, tilladelseslistemodel og konfigurationsskrivning |
| `KLIENT-SUPPORT-MATRIX.md` | Fuld klient- og forfatterreference på tværs af 9 installationer + 16 konfigurationsklienter |
| `SKILL-KLASSIFIKATION.md` | Taksonomi, scoreheuristik og metadataartefakter |
| `SECURITY-VALIDATION.md` | Scannere, arkiver, signaturer og udgivelsesbekræftelse |
| `SKILL-MANIFEST.md` | Maskinlæsbart manifestformat og kompatibilitetskontrakt |#### `docs/i18n/`

Indeholder**32**sprogmapper, hver med en oversat `README.md`. Sprog inkluderer: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Oversættelser genereres automatisk af `npm run i18n:render` og valideres af `npm run i18n:check`.---

### `tools/`

>**Byg, valider og test infrastruktur.**Primært Python-scripts forbrugt af `npm run`-kommandoer.#### `tools/scripts/`

| Script | npm Kommando | Formål |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Validerer alle `SKILL.md`-filer og genskaber `metadata.json` |
| `skill_metadata.py` | (importeret ved at validere) | Kerne monolitisk validator: frontmatter parsing, taksonomi, scoring, sikkerhedsscanning |
| `recategorize_skills.py` | `npm køre taksonomi:rapport` | Viser eller anvender kanonisk kategorinormalisering |
| `generate_index.py` | `npm run index` | Genererer `dist/`-manifester, arkiver og kontrolsummer |
| `build_catalog.js` | `npm køre katalog` | Genererer `docs/CATALOG.md` fra `skills_index.json` |
| `generate_project_status.py` | `npm køre projekt:status` | Genererer `data/project_status.json` med aktuelle metrics |
| `render_project_docs.py` | `npm run docs:render` | Opdaterer genererede blokke i README, docs og CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Genererer eller opdaterer `docs/i18n/`-oversættelser |
| `repository_sources.py` | `npm run registry:render` | Gengiver og validerer `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Bekræfter justering af package.json, README og repo-identitet |
| `verify_archives.py` | `npm run verify:archives` | Verificerer arkivintegritet og valgfrie signaturer |
| `verify_security_scanners.py` | `npm run verify:scanners` | Bekræfter scannerdækning i genererede metadata |
| `generate_release_notes.py` | `npm run release:notes` | Genererer brugerdefinerede udgivelsesnoter fra metadata og git-historik |
| `next_release_version.py` | `npm run release:next-version` | Beregner næste semver-version ved hjælp af patch-to-10-politikken |
| `sync_repo_version.py` | `npm run release:sync-version` | Synkroniserer version på tværs af arbejdsområdepakker |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Udskriver eller anvender GitHub-beskrivelse, hjemmeside og emner |
| `validate_contribution_scope.py` | (CI) | Validerer PR-bidragsomfangsgrænser |
| `install_githooks.js` | `npm run hooks:install` | Installerer den lokale pre-commit hook |#### `tools/scripts/tests/`

Integrations- og TUI-testpakker forbrugt af 'npm-test':
- Legacy Python PTY-tests
- Node TUI-påstande
- Testløber orkestrator---

### `.github/`

>**GitHub-handlinger og fællesskabsskabeloner.**#### `.github/workflows/`

| Arbejdsgang | Udløser | Formål |
|:--------|:--------|:--------|
| `validate.yml` | Skub/PR til 'main' | Byg, test og bekræft, at genererede artefakter er begået |
| `release.yml` | Tag push `v*` eller manuel afsendelse | Release-grade scannere, signering, npm publish, GitHub Release |
| `auto-release-skill-merges.yml` | Flet til `hoved` ved at berøre `færdigheder/*` | Automatisk version bump, tag og frigivelse ved færdighedsændringer |
| `enhance-pr-skills.yml` | PR med færdighedsændringer | Kører den private enhancer-pipeline og poster ledsager PR |
| `sync-repository-metadata.yml` | Ændringer til `data/project_identity.json` | Synkroniserer GitHub-beskrivelse, hjemmeside og emner |#### `.github/pull_request_template.md`

Standard PR-skabelon med tjekliste til bidrag til færdigheder og runtime.---

### `.githooks/`

>**Local Git hooks.**Installeret via `npm run hooks:install`.

| Fil | Formål |
|:-----|:--------|
| `pre-commit` | Kører grundlæggende validering, før en commit tillades |---

## 📄 Root Files Reference

| Fil | Formål |
|:-----|:--------|
| `README.md` | Offentligt vendt projekt README med heltebanner, installationsvejledning og fuld funktionsoversigt |
| `CONTRIBUTING.md` | Bidragyderguide med arbejdsgange for færdigheder, runtime og indtag |
| `SIKKERHED.md` | Instruktioner til rapportering af sikkerhedspolitik, omfang og sårbarhed |
| `CODE_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | Offentligt register over foreslåede opstrømsdepoter til eksternt indtag |
| `LICENS` | MIT-licens (kode og værktøj) |
| `LICENS-INDHOLD` | CC BY 4.0 (dokumentation og færdighedsindhold) |
| `pakke.json` | Root monorepo-pakke: scripts, afhængigheder, bin-indgangspunkter, filer og arbejdsområdekonfiguration |
| `package-lock.json` | npm låsefil (auto-genereret) |
| `metadata.json` | Validering og scoreoversigt for hele lageret (genereret af `npm run validate`) |
| `skills_index.json` | Repo-lokalt normaliseret færdighedsindeks (genereret af `npm run validate`) |
| `.gitignore` | Udelukkelser af versionskontrol — især `dist/` er**ikke**ignoreret |
| `.npmignore` | Ekskluderer `__pycache__/` og `*.pyc` fra npm-tarballen |
| `.node-version` | Node.js version fastgørelse: `22` |
| `.nvmrc` | nvm version pinning: `22` (spejler `.node-version`) |
| `vitest.config.js` | Root Vitest-konfiguration, der refererer til alle 5 testkonfigurationer på pakkeniveau |
| `vitest.workspace.js` | Vitest-arbejdsområdedefinition til monorepo-bevidst testudførelse |---

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

Alle ovenstående kører sekventielt som en del af "npm run build".
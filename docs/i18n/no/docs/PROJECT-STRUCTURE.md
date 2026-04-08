# 🗂️ Project Structure (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Fullstendig katalog og filreferanse for Awesome Omni Skills monorepo.**---

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

>**Den opprinnelige ferdighetskatalogen.**Dette er den primære offentlige innholdsoverflaten til prosjektet.

Inneholder**154**ferdighetskataloger, hver med minimum en «SKILL.md»-spillebok. Større ferdigheter kan inkludere `agenter/`, `referanser/`, `eksempler/`, `scripts/` og `assets/` underkataloger.

Ferdigheter kommer gjennom to inntaksveier:
-**Prs-er for direkte bidrag**- mennesker sender ferdigheter direkte
-**Repository-basert ekstern import**— gjennomgått 'ekstern-import/*' PR-er fra oppstrøms arkiver

| Hva den inneholder | Eksempel |
|:----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma design-to-code ferdighet |
| `skills/architecture/SKILL.md` | Arkitektur gjennomgang og planlegging ferdigheter |
| `skills/<navn>/metadata.json` | Autogenerert klassifisering og scoring |---

### `skills_omni/`

>**Kuraterte, forbedrede derivater som kun er på engelsk.**Vedlikeholdes av den private forbedringspipelinen.

Inneholder**110**forbedrede ferdighetskataloger som speiler og forbedrer deres opprinnelige motparter i `ferdigheter/`. Denne overflaten er**ikke åpen for direkte offentlig bidrag**– den er utelukkende befolket av den automatiske forsterker-pipeline.

Hvert derivat bevarer attribusjonen til sin opprinnelige kilde samtidig som den gir en høyere redaksjonell standard, alltid på engelsk.---

### `packages/`

>**Monorepo-arbeidsområdene.**All runtime Node.js-kode lever her.

| Pakke | npm Navn | Formål |
|:--------|:--------|:--------|
| 📂 `pakker/katalog-kjerne/` | `@omni-skills/catalog-core` | Delt katalogkjøring med `ICatalogStorageAdapter` avhengighetsinjeksjon. Gir søk, scoring, sammenligning, anbefaling og installasjonsplanlogikk som brukes av alle serveroverflater |
| 📂 `pakker/cli/` | (root pakke bin) | Samlede CLI-inngangspunkter, guidet installatør, Ink visual TUI, diagnostikk, røyksjekker og servicestartere. ESM-native |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Register over de 9 installeringskompatible klientene (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) med baneoppløsning og flaggkartlegging |
| 📂 `pakker/server-api/` | `@omni-skills/server-api` | Skrivebeskyttet HTTP-katalog-API med OpenAPI 3.1, Swagger UI på `/docs`, auth, hastighetsbegrensning, CORS/IP-godkjenningslister, nedlastinger og admin kjøretid |
| 📂 `pakker/server-mcp/` | `@omni-skills/server-mcp` | MCP-server som støtter "stdio", "stream" og "sse"-transporter. Lokal sidevogn-modus legger til filsystembevisste installasjons-/fjerningsverktøy og klientbevisst MCP-konfigurasjonsskriving for 16 konfigurasjonskompatible klienter |
| 📂 `pakker/server-a2a/` | `@omni-skills/server-a2a` | A2A (Agent-to-Agent) oppgavekjøring med JSON/SQLite-utholdenhet, gjenoppretting på nytt, SSE-streaming, kansellering, ekstern eksekveringsmodus og valgfri leid koordinering |

Hver pakke har sin egen `package.json`, `src/`-katalog og (unntatt `install-targets`) en `vitest.config.js` for enhetstester.---

### `dist/`

>**Genererte kjøretidsartefakter.**Med vilje forpliktet til versjonskontroll.

Disse filene er maskinlesbare utdata som forbrukes av CLI-installasjoner, API-svar, MCP-verktøy, A2A-oppgaver, røyktester og utgivelsesbekreftelse. De er regenerert av 'npm run build'.

| Sti | Formål |
|:-----|:--------|
| `dist/catalog.json` | Publisert katalog med alle 154 ferdigheter, poeng og metadata |
| `dist/bundles.json` | Buntdefinisjoner med medlemstilgjengelighetsstatus |
| `dist/manifests/<skill>.json` | Maskinlesbart manifest per ferdighet |
| `dist/archives/<skill>.zip` | ZIP-arkiv per ferdighet for nedlasting |
| `dist/archives/<skill>.tar.gz` | Tarball-arkiv per ferdighet for nedlasting |
| `dist/archives/<skill>.checksums.txt` | SHA-256 kontrollsummanifest per arkiv |
| `dist/archives/<skill>.zip.sig` | Frittliggende signatur (kun utgivelsestid, gitignored) |
| `dist/release-notes.md` | Autogenererte versjonsnotater (gitignored) |
| `dist/signering/` | Avledet offentlig nøkkelmateriale (gitignored) |

>**Hvorfor er `dist/` forpliktet?**Fordi det er en del av installasjons-, API-, MCP-, A2A- og utgivelseskontrakten. Forbrukere forventer at disse filene er til stede uten å kjøre en build.---

### `data/`

>**Statiske prosjektdatafiler.**Kildekontrollerte definisjoner som driver bygge- og kjøretidsatferd.

| Fil | Formål |
|:-----|:--------|
| `data/bundles.json` | Utvalgte buntdefinisjoner (kompetansemedlemslister per bunt) |
| `data/project_identity.json` | Kanonisk prosjektidentitet: navn, beskrivelse, hjemmeside, GitHub-emner, kjøretidsoverflatedefinisjoner og klientlister |
| `data/project_status.json` | Generert øyeblikksbilde av prosjektberegninger: antall ferdigheter, poeng, kundeantall, kategoritelling og kvalitetsspredning |---

### `docs/`

>**All prosjektdokumentasjon.**Organisert etter publikum.

| Sti | Publikum | Innhold |
|:-----|:--------|:--------|
| `docs/README.md` | Alle | Dokumentasjonshub — sentral indeks til alle dokumenter |
| `docs/CATALOG.md` | Brukere | Automatisk generert katalog som viser alle 154 ferdigheter med poengsum |
| `docs/PROJECT-STRUCTURE.md` | Alle | Denne filen — prosjektkatalogreferanse |
| `docs/users/` | Sluttbrukere | Komme i gang, CLI brukerveiledning, bruksveiledning, bunter, runbook |
| `dokumenter/bidragsytere/` | Bidragsytere | Ferdighetsanatomi, mal, PR-arbeidsflyt, kvalitetslinje, spillebok med høy poengsum |
| `docs/specs/` | Arkitekter | API, MCP sidevogn, CLI-installasjonsprogram, visual shell, klientstøttematrise, klassifisering, sikkerhet og manifestspesifikasjoner |
| `docs/i18n/` | Internasjonale brukere | Autogenererte oversettelser av roten README på 32 språk |#### `docs/users/`

| Fil | Formål |
|:-----|:--------|
| `KOM I GANG.md` | Installer, verifiser og påkall en ferdighet på under 2 minutter |
| `CLI-USER-GUIDE.md` | Full kommandoreferanse med trinnvise scenarier |
| `USAGE.md` | CLI-kommandoer, installasjonsmoduser, kjøretidskommandoer og MCP-konfigurasjonsflyter |
| `BUNDLES.md` | Utvalgte pakker og deres nåværende tilgjengelighet |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Rebrand migrasjonsstatus og akseptrapport |
| `RUNBOOK.md` | Operasjonell referanse (også koblet som `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Fil | Formål |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Struktur og kvalitetsforventninger til en ferdighet |
| `SKILL-MAL.md` | Starter `SKILL.md` med gjeldende frontmatter |
| `SKILL-PR-WORKFLOW.md` | Innebygd inntak, forsterkerbehandling og anmelderforventninger |
| `QUALITY-BAR.md` | Akseptkriterier og gjeldende benchmarks |
| `HIGH-SCORE-PLAYBOOK.md` | Hva driver høy modenhet, kvalitet, beste praksis og sikkerhetspoeng |#### `docs/specs/`

| Fil | Formål |
|:-----|:--------|
| `CATALOG-API.md` | HTTP-endepunkter, filtrering, styring og nedlastinger |
| `CLI-GUIDED-INSTALLER.md` | Atferdskontrakt for den veiledede installatøren |
| `CLI-VISUAL-SHELL.md` | Blekkvisuelt skall, tilstandsmodell og servicehub |
| `LOCAL-MCP-SIDECAR.md` | Filsystembevisste verktøy, tillatelseslistemodell og konfigurasjonsskriving |
| `KLIENT-SUPPORT-MATRIX.md` | Full klient- og skribentreferanse på tvers av 9 installasjoner + 16 konfigurasjonsklienter |
| `FERDIGHETSKLASSIFISERING.md` | Taksonomi, poengheuristikk og metadataartefakter |
| `SECURITY-VALIDATION.md` | Skannere, arkiver, signaturer og utgivelsesbekreftelse |
| `SKILL-MANIFEST.md` | Maskinlesbart manifestformat og kompatibilitetskontrakt |#### `docs/i18n/`

Inneholder**32**språkkataloger, hver med en oversatt `README.md`. Språk inkluderer: ar, bg, cs, da, de, es, fi, fr, he, hei, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Oversettelser blir automatisk generert av `npm run i18n:render` og validert av `npm run i18n:check`.---

### `tools/`

>**Bygg, valider og test infrastruktur.**Primært Python-skript konsumert av «npm run»-kommandoer.#### `tools/scripts/`

| Manus | npm Kommando | Formål |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Validerer alle `SKILL.md`-filer og regenererer `metadata.json` |
| `skill_metadata.py` | (importert av validere) | Kjerne monolittisk validator: frontmatter-parsing, taksonomi, scoring, sikkerhetsskanning |
| `recategorize_skills.py` | `npm kjøre taksonomi:rapport` | Viser eller bruker kanonisk kategorinormalisering |
| `generate_index.py` | `npm run index` | Genererer `dist/`-manifester, arkiver og kontrollsummer |
| `build_catalog.js` | `npm kjøre katalog` | Genererer `docs/CATALOG.md` fra `skills_index.json` |
| `generate_project_status.py` | `npm kjøre prosjekt:status` | Genererer `data/project_status.json` med gjeldende beregninger |
| `render_project_docs.py` | `npm run docs:render` | Oppdaterer genererte blokker i README, docs og CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Genererer eller oppdaterer `docs/i18n/`-oversettelser |
| `repository_sources.py` | `npm run registry:render` | Gjengir og validerer `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm kjøre identitet:sjekk` | Verifiserer justering av package.json, README og repo-identitet |
| `verify_archives.py` | `npm run verify:archives` | Verifiserer arkivintegritet og valgfrie signaturer |
| `verify_security_scanners.py` | `npm run verify:scanners` | Bekrefter skannerdekning i genererte metadata |
| `generate_release_notes.py` | `npm run release:notes` | Genererer tilpassede utgivelsesnotater fra metadata og git-historikk |
| `next_release_version.py` | `npm kjøre utgivelse:neste-versjon` | Beregner neste semver-versjon ved å bruke patch-to-10 policyen |
| `sync_repo_version.py` | `npm run release:sync-version` | Synkroniserer versjon på tvers av arbeidsområdepakker |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Skriver ut eller bruker GitHub-beskrivelse, hjemmeside og emner |
| `validate_contribution_scope.py` | (CI) | Validerer PR-bidragsomfangsgrenser |
| `install_githooks.js` | `npm run hooks:install` | Installerer den lokale pre-commit-kroken |#### `tools/scripts/tests/`

Integrasjon og TUI-testsuiter brukt av "npm-test":
- Legacy Python PTY-tester
- Node TUI-påstander
- Testløper orkestrator---

### `.github/`

>**GitHub-handlinger og fellesskapsmaler.**#### `.github/workflows/`

| Arbeidsflyt | Trigger | Formål |
|:--------|:--------|:--------|
| `validate.yml` | Skyv/PR til "hoved" | Bygg, test og bekreft at genererte artefakter er begått |
| `release.yml` | Tag push `v*` eller manuell sending | Skannere i utgivelsesgrad, signering, npm publisering, GitHub Release |
| `auto-release-skill-merges.yml` | Slå sammen til `hoved` berøre `ferdigheter/*` | Automatisk versjon bump, tag og utgivelse ved ferdighetsendringer |
| `enhance-pr-skills.yml` | PR med ferdighetsendringer | Kjører den private enhancer-pipelinen og legger inn følgesvenn PR |
| `sync-repository-metadata.yml` | Endringer i `data/project_identity.json` | Synkroniserer GitHub-beskrivelse, hjemmeside og emner |#### `.github/pull_request_template.md`

Standard PR-mal med sjekkliste for bidrag til ferdigheter og kjøretid.---

### `.githooks/`

>**Local Git hooks.**Installert via `npm run hooks:install`.

| Fil | Formål |
|:-----|:--------|
| `pre-commit` | Kjører grunnleggende validering før du tillater en commit |---

## 📄 Root Files Reference

| Fil | Formål |
|:-----|:--------|
| `README.md` | Offentlige prosjekt README med heltebanner, installasjonsveiledning og full funksjonsoversikt |
| `CONTRIBUTING.md` | Bidragsyterveiledning med arbeidsflyter for ferdigheter, kjøretid og inntak |
| `SECURITY.md` | Instruksjoner for rapportering av sikkerhetspolitikk, omfang og sårbarhet |
| `CODE_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | Offentlig register over foreslåtte oppstrømsdepoter for eksternt inntak |
| `LISENS` | MIT-lisens (kode og verktøy) |
| `LISENSINNHOLD` | CC BY 4.0 (dokumentasjon og ferdighetsinnhold) |
| `package.json` | Root monorepo-pakke: skript, avhengigheter, bin-inngangspunkter, filer og arbeidsområdekonfigurasjon |
| `package-lock.json` | npm låsefil (automatisk generert) |
| `metadata.json` | Repository-wide validering og scoresammendrag (generert av `npm run validate`) |
| `skills_index.json` | Repo-lokal normalisert ferdighetsindeks (generert av `npm run validate`) |
| `.gitignore` | Versjonskontrollekskluderinger – spesielt `dist/` er**ikke**ignorert |
| `.npmignore` | Ekskluderer `__pycache__/` og `*.pyc` fra npm tarball |
| `.node-versjon` | Node.js versjon festing: `22` |
| `.nvmrc` | nvm versjon festing: `22` (speiler `.node-versjon`) |
| `vitest.config.js` | Root Vitest-konfigurasjon som refererer til alle 5 testkonfigurasjonene på pakkenivå |
| `vitest.workspace.js` | Vitest arbeidsområdedefinisjon for monorepo-bevisst testkjøring |---

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

Alle de ovennevnte kjører sekvensielt som en del av "npm run build".
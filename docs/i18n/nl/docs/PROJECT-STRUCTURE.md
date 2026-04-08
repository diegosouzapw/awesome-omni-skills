# 🗂️ Project Structure (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Volledige map- en bestandsreferentie voor de Awesome Omni Skills monorepo.**---

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

>**De native vaardighedencatalogus.**Dit is het primaire openbare inhoudsoppervlak van het project.

Bevat**154**vaardighedenmappen, elk met minimaal een `SKILL.md`-speelboek. Grotere vaardigheden kunnen de submappen `agents/`, `references/`, `examples/`, `scripts/` en `assets/` omvatten.

Vaardigheden komen binnen via twee instroomtrajecten:
-**Directe bijdrager PR's**: mensen dienen vaardigheden rechtstreeks in
-**Op opslagplaatsen gebaseerde externe import**— beoordeelde 'external-import/*` PR's van upstream-opslagplaatsen

| Wat het bevat | Voorbeeld |
|:----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma ontwerp-naar-code-vaardigheid |
| `skills/architectuur/SKILL.md` | Architectuurbeoordeling en planningsvaardigheid |
| `skills/<naam>/metadata.json` | Automatisch gegenereerde classificatie en score |---

### `skills_omni/`

>**Beheerde verbeterde derivaten die alleen in het Engels beschikbaar zijn.**Onderhouden door de particuliere verbeteringspijplijn.

Bevat**110**verbeterde vaardighedenmappen die hun oorspronkelijke tegenhangers in `skills/` weerspiegelen en verbeteren. Dit oppervlak is**niet open voor directe publieke bijdragen**— het wordt uitsluitend bevolkt door de geautomatiseerde versterkerpijplijn.

Elke afgeleide versie behoudt de verwijzing naar de oorspronkelijke bron en biedt tegelijkertijd een hogere redactionele standaard, altijd in het Engels.---

### `packages/`

>**De monorepo-werkruimten.**Alle runtime Node.js-code bevindt zich hier.

| Pakket | npm Naam | Doel |
|:--------|:---------|:--------|
| 📂 `pakketten/catalog-core/` | `@omni-skills/catalog-core` | Gedeelde catalogusruntime met 'ICatalogStorageAdapter'-afhankelijkheidsinjectie. Biedt zoek-, score-, vergelijkings-, aanbevelings- en installatieplanlogica die door alle serveroppervlakken wordt gebruikt |
| 📂 `pakketten/cli/` | (rootpakketbak) | Uniforme CLI-ingangspunten, begeleid installatieprogramma, visuele Ink-TUI, diagnostiek, rookcontroles en servicestarters. ESM-native |
| 📂 `pakketten/installatiedoelen/` | `@omni-skills/install-targets` | Register van de 9 voor installatie geschikte clients (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) met padresolutie en vlagtoewijzing |
| 📂 `pakketten/server-api/` | `@omni-skills/server-api` | Alleen-lezen HTTP-catalogus-API met OpenAPI 3.1, Swagger UI op `/docs`, auth, snelheidsbeperking, CORS/IP-toelatingslijsten, downloads en admin runtime |
| 📂 `pakketten/server-mcp/` | `@omni-skills/server-mcp` | MCP-server die `stdio`-, `stream`- en `sse`-transporten ondersteunt. Lokale sidecar-modus voegt bestandssysteembewuste installatie-/verwijdertools en clientbewuste MCP-configuratieschrijven toe voor 16 configuratie-compatibele clients |
| 📂 `pakketten/server-a2a/` | `@omni-skills/server-a2a` | A2A-taakruntime (agent-naar-agent) met JSON/SQLite-persistentie, herstartherstel, SSE-streaming, annulering, externe uitvoerdermodus en optionele gehuurde coördinatie |

Elk pakket heeft zijn eigen map `package.json`, `src/` en (behalve `install-targets`) een `vitest.config.js` voor unit-tests.---

### `dist/`

>**Gegenereerde runtime-artefacten.**Opzettelijk toegewijd aan versiebeheer.

Deze bestanden zijn de machinaal leesbare uitvoer die wordt gebruikt door CLI-installaties, API-reacties, MCP-tools, A2A-taken, rooktests en releaseverificatie. Ze worden geregenereerd door `npm run build`.

| Pad | Doel |
|:-----|:--------|
| `dist/catalog.json` | Gepubliceerde catalogus met alle 154 vaardigheden, scores en metadata |
| `dist/bundles.json` | Bundeldefinities met beschikbaarheidsstatus van leden |
| `dist/manifests/<skill>.json` | Machineleesbaar manifest per vaardigheid |
| `dist/archives/<vaardigheid>.zip` | ZIP-archief per vaardigheid om te downloaden |
| `dist/archives/<skill>.tar.gz` | Tarball-archief per vaardigheid om te downloaden |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum-manifest per archief |
| `dist/archives/<vaardigheid>.zip.sig` | Vrijstaande handtekening (alleen tijdens release, gitignored) |
| `dist/release-notes.md` | Automatisch gegenereerde release-opmerkingen (gitignored) |
| `dist/ondertekening/` | Afgeleid publiek sleutelmateriaal (gitignored) |

>**Waarom is `dist/` vastgelegd?**Omdat het deel uitmaakt van het installatie-, API-, MCP-, A2A- en releasecontract. Consumenten verwachten dat deze bestanden aanwezig zijn zonder een build uit te voeren.---

### `data/`

>**Statische projectgegevensbestanden.**Brongestuurde definities die het build- en runtime-gedrag aansturen.

| Bestand | Doel |
|:-----|:--------|
| `data/bundels.json` | Samengestelde bundeldefinities (lijsten met vaardigheidsleden per bundel) |
| `data/project_identity.json` | Canonieke projectidentiteit: naam, beschrijving, startpagina, GitHub-onderwerpen, runtime-oppervlaktedefinities en klantenlijsten |
| `data/project_status.json` | Gegenereerde momentopname van projectstatistieken: aantal vaardigheden, scores, aantal klanten, aantal categorieën en kwaliteitsspreidingen |---

### `docs/`

>**Alle projectdocumentatie.**Georganiseerd op doelgroep.

| Pad | Publiek | Inhoud |
|:-----|:---------|:--------|
| `docs/README.md` | Iedereen | Documentatiehub — centrale index voor alle documenten |
| `docs/CATALOG.md` | Gebruikers | Automatisch gegenereerde catalogus met alle 154 vaardigheden met scores |
| `docs/PROJECT-STRUCTUUR.md` | Iedereen | Dit bestand — projectmapreferentie |
| `docs/gebruikers/` | Eindgebruikers | Aan de slag, CLI-gebruikershandleiding, gebruikshandleiding, bundels, runbook |
| `docs/bijdragers/` | Bijdragers | Vaardigheidsanatomie, sjabloon, PR-workflow, kwaliteitsbalk, draaiboek met hoge scores |
| `docs/specificaties/` | Architecten | API, MCP zijspan, CLI-installatieprogramma, visuele shell, clientondersteuningsmatrix, classificatie, beveiliging en manifestspecificaties |
| `docs/i18n/` | Internationale gebruikers | Automatisch gegenereerde vertalingen van de root README in 32 talen |#### `docs/users/`

| Bestand | Doel |
|:-----|:--------|
| `GETTING-STARTED.md` | Installeer, verifieer en roep een vaardigheid aan in minder dan 2 minuten |
| `CLI-USER-GUIDE.md` | Volledige opdrachtreferentie met stapsgewijze scenario's |
| `GEBRUIK.md` | CLI-opdrachten, installatiemodi, runtime-opdrachten en MCP-configuratiestromen |
| `BUNDELS.md` | Samengestelde bundels en hun huidige beschikbaarheid |
| `GEWELDIGE-OMNI-SKILLS-ROLLOUT.md` | Rebranding migratiestatus en acceptatierapport |
| `RUNBOOK.md` | Operationele referentie (ook gekoppeld als `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| Bestand | Doel |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Structuur en kwaliteitsverwachtingen voor een vaardigheid |
| `SKILL-TEMPLATE.md` | Starter `SKILL.md` met huidige frontmatter |
| `SKILL-PR-WORKFLOW.md` | Oorspronkelijke inname, verwerking van versterkers en verwachtingen van de recensent |
| `KWALITEIT-BAR.md` | Acceptatiecriteria en huidige benchmarks |
| `HIGH-SCORE-PLAYBOOK.md` | Wat zorgt voor hoge volwassenheid, kwaliteit, best practices en beveiligingsscores |#### `docs/specs/`

| Bestand | Doel |
|:-----|:--------|
| `CATALOGUS-API.md` | HTTP-eindpunten, filtering, beheer en downloads |
| `CLI-GUIDED-INSTALLER.md` | Gedragscontract voor de begeleide installateur |
| `CLI-VISUAL-SHELL.md` | Inkt visuele shell, statusmodel en servicehub |
| `LOCAL-MCP-SIDECAR.md` | Bestandssysteembewuste tools, toelatingslijstmodel en configuratieschrijven |
| `CLIENT-SUPPORT-MATRIX.md` | Volledige client- en schrijverreferentie voor 9 installatie- en 16 configuratieclients |
| `VAARDIGHEID-CLASSIFICATIE.md` | Taxonomie, scoringsheuristieken en metadata-artefacten |
| `BEVEILIGINGSVALIDATIE.md` | Scanners, archieven, handtekeningen en vrijgaveverificatie |
| `SKILL-MANIFEST.md` | Machineleesbaar manifestformaat en compatibiliteitscontract |#### `docs/i18n/`

Bevat**32**taalmappen, elk met een vertaalde `README.md`. Talen zijn onder meer: ​​ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Vertalingen worden automatisch gegenereerd door `npm run i18n:render` en gevalideerd door `npm run i18n:check`.---

### `tools/`

>**Infrastructuur bouwen, valideren en testen.**Voornamelijk Python-scripts die worden gebruikt door `npm run`-opdrachten.#### `tools/scripts/`

| Script | npm-opdracht | Doel |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run valideren` | Valideert alle `SKILL.md`-bestanden en regenereert `metadata.json` |
| `skill_metadata.py` | (geïmporteerd door valideren) | Kernmonolithische validator: parsing van frontmaterie, taxonomie, scoring, beveiligingsscans |
| `recategorize_skills.py` | `npm run taxonomie:rapport` | Toont of past canonieke categorienormalisatie toe |
| `genereer_index.py` | `npm run-index` | Genereert `dist/` manifesten, archieven en controlesommen |
| `build_catalog.js` | `npm run-catalogus` | Genereert `docs/CATALOG.md` van `skills_index.json` |
| `genereer_project_status.py` | `npm run project:status` | Genereert `data/project_status.json` met huidige statistieken |
| `render_project_docs.py` | `npm run docs: render` | Updates gegenereerde blokken in README, docs en CONTRIBUTING |
| `genereer_i18n.py` | `npm run i18n:render` | Genereert of updatet `docs/i18n/` vertalingen |
| `repository_sources.py` | `npm voer register uit: render` | Rendert en valideert `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identiteit:check` | Controleert de identiteitsuitlijning van package.json, README en repository |
| `verify_archives.py` | `npm run verificatie:archieven` | Controleert archiefintegriteit en optionele handtekeningen |
| `verify_security_scanners.py` | `npm run verificatie:scanners` | Bevestigt scannerdekking in gegenereerde metadata |
| `generate_release_notes.py` | `npm run release:notes` | Genereert aangepaste release-opmerkingen op basis van metadata en git-geschiedenis |
| `volgende_release_versie.py` | `npm run release:volgende-versie` | Berekent de volgende semver-versie met behulp van het patch-to-10-beleid |
| `sync_repo_version.py` | `npm run release:sync-versie` | Synchroniseert de versie tussen werkruimtepakketten |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Drukt de GitHub-beschrijving, startpagina en onderwerpen af ​​of past deze toe |
| `validate_contribution_scope.py` | (CI) | Valideert de grenzen van de reikwijdte van PR-bijdragen |
| `install_githooks.js` | `npm run hooks:install` | Installeert de lokale pre-commit hook |#### `tools/scripts/tests/`

Integratie en TUI-testsuites verbruikt door `npm test`:
- Legacy Python PTY-tests
- Knooppunt-TUI-beweringen
- Testrunner-orkestrator---

### `.github/`

>**GitHub-acties en community-sjablonen.**#### `.github/workflows/`

| Werkstroom | Trigger | Doel |
|:---------|:--------|:--------|
| `validate.yml` | Druk/PR naar `hoofd` | Bouw, test en bevestig dat gegenereerde artefacten zijn vastgelegd |
| `release.yml` | Tag push `v*` of handmatige verzending | Release-grade scanners, ondertekenen, npm publiceren, GitHub Release |
| `auto-release-skill-merges.yml` | Samenvoegen naar `main` door `skills/*` | aan te raken Automatische versie-bump, tag en release bij vaardigheidswijzigingen |
| `verbetering-pr-skills.yml` | PR met vaardigheidsveranderingen | Beheert de particuliere versterkerpijplijn en plaatst begeleidende PR |
| `sync-repository-metadata.yml` | Wijzigingen in `data/project_identity.json` | Synchroniseert GitHub-beschrijving, startpagina en onderwerpen |#### `.github/pull_request_template.md`

Standaard PR-sjabloon met checklist voor bijdragen aan vaardigheden en runtime.---

### `.githooks/`

>**Lokale Git-hooks.**Geïnstalleerd via `npm run hooks:install`.

| Bestand | Doel |
|:-----|:--------|
| `vooraf vastgelegd` | Voert basisvalidatie uit voordat een commit wordt toegestaan ​​|---

## 📄 Root Files Reference

| Bestand | Doel |
|:-----|:--------|
| `README.md` | Openbaar project README met hero-banner, installatiegids en volledig functieoverzicht |
| `BIJDRAGEN.md` | Handleiding voor bijdragers met workflows voor vaardigheden, runtime en intake |
| `BEVEILIGING.md` | Beveiligingsbeleid, reikwijdte en rapportage-instructies voor kwetsbaarheden |
| `CODE_OF_CONDUCT.md` | Inzenderconvenant v2.1 |
| `REPOSITORY-SOURCES.md` | Openbaar register van voorgestelde upstream-opslagplaatsen voor externe inname |
| `LICENTIE` | MIT-licentie (code en tooling) |
| `LICENTIE-INHOUD` | CC BY 4.0 (documentatie en vaardigheidsinhoud) |
| `pakket.json` | Root monorepo-pakket: scripts, afhankelijkheden, bin-ingangspunten, bestanden en werkruimteconfiguratie |
| `pakket-lock.json` | npm lockfile (automatisch gegenereerd) |
| `metadata.json` | Repository-brede validatie en score-samenvatting (gegenereerd door `npm run validate`) |
| `skills_index.json` | Repo-lokale genormaliseerde vaardigheidsindex (gegenereerd door `npm run validate`) |
| `.gitignore` | Uitsluitingen van versiebeheer — met name `dist/` wordt**niet**genegeerd |
| `.npmignore` | Sluit `__pycache__/` en `*.pyc` uit van de npm-tarball |
| `.node-versie` | Node.js-versie vastzetten: `22` |
| `.nvmrc` | nvm-versie vastzetten: `22` (spiegels `.node-version`) |
| `vitest.config.js` | Root Vitest-configuratie die verwijst naar alle 5 testconfiguraties op pakketniveau |
| `vitest.workspace.js` | Vitest-werkruimtedefinitie voor monorepo-bewuste testuitvoering |---

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

Al het bovenstaande wordt opeenvolgend uitgevoerd als onderdeel van `npm run build`.
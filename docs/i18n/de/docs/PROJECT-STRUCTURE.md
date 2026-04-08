# 🗂️ Project Structure (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Vollständige Verzeichnis- und Dateireferenz für das Awesome Omni Skills-Monorepo.**---

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

>**Der native Kompetenzkatalog.**Dies ist die primäre öffentliche Inhaltsoberfläche des Projekts.

Enthält**154**Skill-Verzeichnisse, jedes mit mindestens einem „SKILL.md“-Playbook. Größere Fähigkeiten können die Unterverzeichnisse „agents/“, „references/“, „examples/“, „scripts/“ und „assets/“ umfassen.

Fähigkeiten gelangen über zwei Aufnahmewege:
-**PRs direkter Mitwirkender**– Menschen reichen ihre Fähigkeiten direkt ein
-**Repository-basierte externe Importe**– überprüfte „external-import/*“-PRs von Upstream-Repositorys

| Was es enthält | Beispiel |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma Design-to-Code-Fähigkeit |
| `skills/architecture/SKILL.md` | Architekturprüfung und Planungskompetenz |
| `skills/<name>/metadata.json` | Automatisch generierte Klassifizierung und Bewertung |---

### `skills_omni/`

>**Kuratierte verbesserte, nur auf Englisch verfügbare Derivate.**Wird von der privaten Verbesserungspipeline verwaltet.

Enthält**110**erweiterte Skill-Verzeichnisse, die ihre nativen Gegenstücke in „skills/“ widerspiegeln und verbessern. Diese Oberfläche ist**nicht für direkte öffentliche Beiträge offen**– sie wird ausschließlich von der automatisierten Enhancer-Pipeline bevölkert.

Bei jeder Ableitung bleibt die Zuordnung zu ihrer einheimischen Quelle erhalten und gleichzeitig wird ein höherer redaktioneller Standard gewährleistet, immer auf Englisch.---

### `packages/`

>**Die Monorepo-Arbeitsbereiche.**Der gesamte Node.js-Laufzeitcode befindet sich hier.

| Paket | npm-Name | Zweck |
|:--------|:---------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` | Gemeinsam genutzte Kataloglaufzeit mit „ICatalogStorageAdapter“-Abhängigkeitsinjektion. Bietet Such-, Bewertungs-, Vergleichs-, Empfehlungs- und Installationsplanlogik, die von allen Serveroberflächen genutzt wird |
| 📂 `packages/cli/` | (Root-Paket-Bin) | Einheitliche CLI-Einstiegspunkte, geführtes Installationsprogramm, visuelle Ink-TUI, Diagnose, Rauchprüfungen und Dienststarter. ESM-nativ |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Registry der 9 installierbaren Clients (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) mit Pfadauflösung und Flag-Mapping |
| 📂 `packages/server-api/` | `@omni-skills/server-api` | Schreibgeschützte HTTP-Katalog-API mit OpenAPI 3.1, Swagger-Benutzeroberfläche auf „/docs“, Authentifizierung, Ratenbegrenzung, CORS/IP-Zulassungslisten, Downloads und Admin-Runtime |
| 📂 `packages/server-mcp/` | `@omni-skills/server-mcp` | MCP-Server, der „stdio“, „stream“ und „sse“-Transporte unterstützt. Der lokale Sidecar-Modus fügt dateisystembewusste Installations-/Entfernungstools und clientbewusstes MCP-Konfigurationsschreiben für 16 konfigurationsfähige Clients hinzu
| 📂 `packages/server-a2a/` | `@omni-skills/server-a2a` | A2A-Aufgabenlaufzeit (Agent-zu-Agent) mit JSON/SQLite-Persistenz, Neustartwiederherstellung, SSE-Streaming, Abbruch, externem Executor-Modus und optionaler geleaster Koordination |

Jedes Paket hat sein eigenes „package.json“, ein „src/“-Verzeichnis und (außer „install-targets“) eine „vitest.config.js“ für Komponententests.---

### `dist/`

>**Generierte Laufzeitartefakte.**Absichtlich zur Versionskontrolle verpflichtet.

Bei diesen Dateien handelt es sich um maschinenlesbare Ausgaben, die von CLI-Installationen, API-Antworten, MCP-Tools, A2A-Aufgaben, Smoke-Tests und Release-Überprüfungen verwendet werden. Sie werden durch „npm run build“ neu generiert.

| Pfad | Zweck |
|:-----|:--------|
| `dist/catalog.json` | Veröffentlichter Katalog mit allen 154 Fertigkeiten, Partituren und Metadaten |
| `dist/bundles.json` | Bundle-Definitionen mit Mitgliedsverfügbarkeitsstatus |
| `dist/manifests/<skill>.json` | Maschinenlesbares Manifest pro Skill |
| `dist/archives/<skill>.zip` | ZIP-Archiv pro Skill zum Download |
| `dist/archives/<skill>.tar.gz` | Tarball-Archiv pro Skill zum Herunterladen |
| `dist/archives/<skill>.checksums.txt` | SHA-256-Prüfsummenmanifest pro Archiv |
| `dist/archives/<skill>.zip.sig` | Freistehende Signatur (nur Veröffentlichungszeit, Gitignored) |
| `dist/release-notes.md` | Automatisch generierte Versionshinweise (gitignored) |
| `dist/signing/` | Abgeleitetes öffentliches Schlüsselmaterial (gitignored) |

>**Warum wird „dist/“ festgeschrieben?**Weil es Teil des Installations-, API-, MCP-, A2A- und Release-Vertrags ist. Verbraucher erwarten, dass diese Dateien vorhanden sind, ohne dass ein Build ausgeführt werden muss.---

### `data/`

>**Statische Projektdatendateien.**Quellgesteuerte Definitionen, die das Build- und Laufzeitverhalten steuern.

| Datei | Zweck |
|:-----|:--------|
| `data/bundles.json` | Kuratierte Bundle-Definitionen (Skill-Mitgliederlisten pro Bundle) |
| `data/project_identity.json` | Kanonische Projektidentität: Name, Beschreibung, Homepage, GitHub-Themen, Laufzeitoberflächendefinitionen und Clientlisten |
| `data/project_status.json` | Generierter Snapshot der Projektmetriken: Anzahl der Fähigkeiten, Bewertungen, Anzahl der Kunden, Anzahl der Kategorien und Qualitätsunterschiede |---

### `docs/`

>**Alle Projektdokumentationen.**Nach Zielgruppe geordnet.

| Pfad | Publikum | Inhalt |
|:-----|:---------|:--------|
| `docs/README.md` | Jeder | Dokumentations-Hub – zentraler Index für alle Dokumente |
| `docs/CATALOG.md` | Benutzer | Automatisch generierter Katalog, der alle 154 Fertigkeiten mit Bewertungen auflistet |
| `docs/PROJECT-STRUCTURE.md` | Jeder | Diese Datei – Projektverzeichnisreferenz |
| `docs/users/` | Endbenutzer | Erste Schritte, CLI-Benutzerhandbuch, Nutzungshandbuch, Bundles, Runbook |
| `docs/contributors/` | Mitwirkende | Fähigkeitsanatomie, Vorlage, PR-Workflow, Qualitätsbalken, Highscore-Playbook |
| `docs/specs/` | Architekten | API, MCP-Sidecar, CLI-Installationsprogramm, visuelle Shell, Client-Support-Matrix, Klassifizierung, Sicherheit und Manifestspezifikationen |
| `docs/i18n/` | Internationale Benutzer | Automatisch generierte Übersetzungen der Root-README-Datei in 32 Sprachen |#### `docs/users/`

| Datei | Zweck |
|:-----|:--------|
| `GETTING-STARTED.md` | Installieren, überprüfen und rufen Sie einen Skill in weniger als 2 Minuten auf |
| `CLI-USER-GUIDE.md` | Vollständige Befehlsreferenz mit Schritt-für-Schritt-Szenarien |
| `USAGE.md` | CLI-Befehle, Installationsmodi, Laufzeitbefehle und MCP-Konfigurationsabläufe |
| `BUNDLES.md` | Kuratierte Pakete und ihre aktuelle Verfügbarkeit |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Rebrand-Migrationsstatus und Akzeptanzbericht |
| `RUNBOOK.md` | Betriebsreferenz (auch verlinkt als „docs/operations/RUNBOOK.md“) |#### `docs/contributors/`

| Datei | Zweck |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Struktur- und Qualitätserwartungen an eine Fertigkeit |
| `SKILL-TEMPLATE.md` | Starter „SKILL.md“ mit aktuellem Frontmatter |
| `SKILL-PR-WORKFLOW.md` | Native Aufnahme, Enhancer-Verarbeitung und Erwartungen der Rezensenten |
| `QUALITY-BAR.md` | Akzeptanzkriterien und aktuelle Benchmarks |
| `HIGH-SCORE-PLAYBOOK.md` | Was führt zu hoher Reife, Qualität, Best Practices und Sicherheitswerten |#### `docs/specs/`

| Datei | Zweck |
|:-----|:--------|
| `CATALOG-API.md` | HTTP-Endpunkte, Filterung, Governance und Downloads |
| `CLI-GUIDED-INSTALLER.md` | Verhaltensvertrag für den geführten Installateur |
| `CLI-VISUAL-SHELL.md` | Ink Visual Shell, Zustandsmodell und Service-Hub |
| `LOCAL-MCP-SIDECAR.md` | Dateisystemfähige Tools, Zulassungslistenmodell und Konfigurationsschreiben |
| `CLIENT-SUPPORT-MATRIX.md` | Vollständige Client- und Writer-Referenz für 9 Installations- und 16 Konfigurations-Clients |
| `SKILL-CLASSIFICATION.md` | Taxonomie, Bewertungsheuristik und Metadatenartefakte |
| `SECURITY-VALIDATION.md` | Scanner, Archive, Signaturen und Freigabeüberprüfung |
| `SKILL-MANIFEST.md` | Maschinenlesbares Manifestformat und Kompatibilitätsvertrag |#### `docs/i18n/`

Enthält**32**Sprachverzeichnisse, jedes mit einer übersetzten „README.md“. Zu den Sprachen gehören: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Übersetzungen werden von „npm run i18n:render“ automatisch generiert und von „npm run i18n:check“ validiert.---

### `tools/`

>**Infrastruktur erstellen, validieren und testen.**Hauptsächlich Python-Skripte, die von „npm run“-Befehlen verwendet werden.#### `tools/scripts/`

| Skript | npm-Befehl | Zweck |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validieren` | Validiert alle „SKILL.md“-Dateien und generiert „metadata.json“ neu |
| `skill_metadata.py` | (importiert durch Validierung) | Kernmonolithischer Validator: Frontmatter-Parsing, Taxonomie, Bewertung, Sicherheitsscan |
| `recategorize_skills.py` | `npm run taxonomy:report` | Zeigt die kanonische Kategorienormalisierung an oder wendet sie an |
| `generate_index.py` | `npm run index` | Erzeugt „dist/“-Manifeste, Archive und Prüfsummen |
| `build_catalog.js` | `npm-Run-Katalog` | Erzeugt „docs/CATALOG.md“ aus „skills_index.json“ |
| `generate_project_status.py` | `npm run project:status` | Erzeugt „data/project_status.json“ mit aktuellen Metriken |
| `render_project_docs.py` | `npm run docs:render` | Aktualisiert generierte Blöcke in README, Dokumenten und CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Erzeugt oder aktualisiert „docs/i18n/“-Übersetzungen |
| `repository_sources.py` | `npm run Registry:render` | Rendert und validiert „REPOSITORY-SOURCES.md“ |
| `verify_project_identity.py` | `npm run Identity:check` | Überprüft die Ausrichtung von package.json, README und Repo-Identität |
| `verify_archives.py` | `npm run verify:archives` | Überprüft die Archivintegrität und optionale Signaturen |
| `verify_security_scanners.py` | `npm run verify:scanners` | Bestätigt die Scannerabdeckung in generierten Metadaten |
| `generate_release_notes.py` | `npm run release:notes` | Erzeugt benutzerdefinierte Versionshinweise aus Metadaten und dem Git-Verlauf |
| `next_release_version.py` | `npm run release:next-version` | Berechnet die nächste Semver-Version mithilfe der Patch-to-10-Richtlinie |
| `sync_repo_version.py` | `npm run release:sync-version` | Synchronisiert die Version über Arbeitsbereichspakete hinweg |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Druckt oder wendet GitHub-Beschreibung, Homepage und Themen an |
| `validate_contribution_scope.py` | (CI) | Validiert die Grenzen des PR-Beitragsbereichs |
| `install_githooks.js` | `npm runhooks:install` | Installiert den lokalen Pre-Commit-Hook |#### `tools/scripts/tests/`

Von „npm test“ genutzte Integrations- und TUI-Testsuiten:
- Legacy-Python-PTY-Tests
– Knoten-TUI-Behauptungen
- Testläufer-Orchestrator---

### `.github/`

>**GitHub-Aktionen und Community-Vorlagen.**#### `.github/workflows/`

| Arbeitsablauf | Auslöser | Zweck |
|:---------|:--------|:--------|
| `validate.yml` | Drücken Sie/PR auf „main“ | Erstellen, testen und bestätigen Sie, dass generierte Artefakte festgeschrieben werden |
| `release.yml` | Markieren Sie Push „v*“ oder manuellen Versand | Release-Grade-Scanner, Signieren, NPM-Veröffentlichung, GitHub-Release |
| `auto-release-skill-merges.yml` | Mit „skills/*“ | zu „main“ zusammenführen Automatischer Versions-Boost, Tag und Release bei Skill-Änderungen |
| `enhance-pr-skills.yml` | PR mit Skill-Änderungen | Führt die private Enhancer-Pipeline aus und veröffentlicht Begleit-PR |
| `sync-repository-metadata.yml` | Änderungen an „data/project_identity.json“ | Synchronisiert GitHub-Beschreibung, Homepage und Themen |#### `.github/pull_request_template.md`

Standard-PR-Vorlage mit Checkliste für Skill- und Laufzeitbeiträge.---

### `.githooks/`

>**Lokale Git-Hooks.**Installiert über „npm runhooks:install“.

| Datei | Zweck |
|:-----|:--------|
| „Pre-Commit“ | Führt eine grundlegende Validierung aus, bevor ein Commit zugelassen wird |---

## 📄 Root Files Reference

| Datei | Zweck |
|:-----|:--------|
| `README.md` | Öffentlich zugängliches Projekt README mit Hero-Banner, Installationsanleitung und vollständiger Funktionsübersicht |
| `CONTRIBUTING.md` | Mitwirkender-Leitfaden mit Skill-, Laufzeit- und Aufnahme-Workflows |
| `SICHERHEIT.md` | Anweisungen zur Meldung von Sicherheitsrichtlinien, -umfang und Schwachstellen |
| `CODE_OF_CONDUCT.md` | Mitwirkender-Vertrag v2.1 |
| `REPOSITORY-SOURCES.md` | Öffentliches Register der vorgeschlagenen vorgelagerten Endlager für die externe Aufnahme |
| „LIZENZ“ | MIT-Lizenz (Code und Tools) |
| „LIZENZINHALT“ | CC BY 4.0 (Dokumentation und Kompetenzinhalte) |
| `package.json` | Root-Monorepo-Paket: Skripte, Abhängigkeiten, Bin-Einstiegspunkte, Dateien und Arbeitsbereichskonfiguration |
| `package-lock.json` | npm-Sperrdatei (automatisch generiert) |
| `metadata.json` | Repository-weite Validierung und Bewertungszusammenfassung (generiert durch „npm run activate“) |
| `skills_index.json` | Repo-lokaler normalisierter Skill-Index (generiert durch „npm run validieren“) |
| `.gitignore` | Ausschlüsse der Versionskontrolle – insbesondere „dist/“ wird**nicht**ignoriert |
| `.npmignore` | Schließt „__pycache__/“ und „*.pyc“ aus dem npm-Tarball | aus
| `.node-version` | Node.js-Versionspinning: „22“ |
| `.nvmrc` | NVM-Versionspinning: „22“ (spiegelt „.node-version“ wider) |
| `vitest.config.js` | Root-Vitest-Konfiguration, die auf alle 5 Testkonfigurationen auf Paketebene verweist |
| `vitest.workspace.js` | Vitest-Arbeitsbereichsdefinition für Monorepo-fähige Testausführung |---

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

Alle oben genannten Funktionen werden nacheinander als Teil von „npm run build“ ausgeführt.
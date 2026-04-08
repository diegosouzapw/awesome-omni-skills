# 📖 Awesome Omni Skills — Documentation Hub (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Die zentrale Referenz für die Nutzung, Mitarbeit und den Betrieb von Awesome Omni Skills als öffentliches Skill-Repository, kuratierte abgeleitete Best-Practice-Oberfläche und gemeinsame Laufzeitplattform.**

Standard-Community-Dateien befinden sich im Repository-Stammverzeichnis:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Das npm-Paket, das GitHub-Repository, die generierten Dokumente und die Laufzeiteinstiegspunkte sind jetzt auf**Awesome Omni Skills**ausgerichtet. Aktueller Rollout-Status: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Der Foundation Track befindet sich jetzt im aktiven Projektstatus und die zweite Welle der Kategorieerweiterung ist bereits im Katalog. Das Projekt sollte nun als funktionierende Basislinie mit optionalen zukünftigen Erweiterungsspuren gelesen werden:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Zukünftige Erweiterung bleibt geplant:

- Vertiefung von „Design“, „Tools“, „Daten-KI“ und „Maschinelles Lernen“.
– Vermeiden Sie das erneute Öffnen ruhender nicht-code-nativer Kategorien, bis die aktuellen code-nativen Spuren eine stärkere Tiefe haben
- Behalten Sie dabei den Qualitätsuntergrund und den Enhancer-Review-Pfad bei

Diese Erweiterungsarbeit spiegelt sich jetzt direkt im Live-Katalog und in den Architekturdokumenten wider:

– der aktuelle Katalog-Snapshot in [Catalog](CATALOG.md)
– die Laufzeit- und Artefaktform in [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
– die Vorwärtsrichtung in [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills sollten als drei verbundene Oberflächen gelesen werden:

| Oberfläche | Was es ist | Wie es sich verändert |
|:--------|:-----------|:---------------|
| 📥 `Fähigkeiten/` | Öffentliches natives Skill-Repository | Direkte Mitwirkende-PRs und überprüfte Repository-basierte externe Aufnahme |
| ✨ `skills_omni/` | Kuratierte verbesserte Best-Practice-Ableitungsoberfläche | Nur private Enhancer-Begleiter-PRs |
| 🖥️ Laufzeitoberflächen | CLI, API, MCP und A2A über denselben generierten Katalog | Build-, Validierungs- und Release-Automatisierung |---

## 📌 Current Decisions

Diese Architekturfragen sind in der Praxis nicht mehr „offen“ und werden nun als Projektentscheidungen behandelt:

1.**Verteilung bleibt Manifest zuerst plus signierte Archive**
   Das maschinenlesbare Manifest bleibt der von CLI, API, MCP und A2A genutzte Vertrag. Signierte Pro-Skill-Archive sind die Download- und Veröffentlichungsoberfläche, die über diesem Vertrag liegt.
2.**Private oder Premium-Kataloge sollten dasselbe Manifestschema wiederverwenden**
   Authentifizierung und Richtlinie sollten extern geschichtet werden, nicht durch Abspaltung der Manifest- oder Katalogform.
3.**Die MCP-Konfiguration sollte auf ein paar kanonische Exportfamilien konvergieren**
   Awesome Omni Skills standardisiert jetzt JSON „mcpServers“, JSON „servers“, JSON „context_servers“, YAML „mcpServers“, YAML „extensions“ und TOML „[mcp_servers]“ und behält maßgeschneiderte Autoren nur dort bei, wo offizielle Clientdokumente eine andere Struktur erfordern.

Diese Entscheidungen stehen im Einklang mit der aktuellen offiziellen MCP- und Kundendokumentation, einschließlich:

- Offizielle Anleitung zur MCP-Registrierung und Erweiterungsunterstützung unter „modelcontextprotocol.io“.
- OpenAI Docs MCP- und Codex CLI-Dokumente unter „developers.openai.com“ und „platform.openai.com“.
- VS Code MCP-Erweiterung und Produktdokumente unter „code.visualstudio.com“.
– Client-Dokumente für Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman und JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Was Sie lernen werden |
|:----|:----|
| 📘 [Erste Schritte](users/GETTING-STARTED.md) | Installieren, überprüfen und rufen Sie Ihren ersten Skill auf |
| 🧭 [CLI-Benutzerhandbuch](users/CLI-USER-GUIDE.md) | Vollständige Befehlsreferenz und reale CLI-Nutzungsmuster |
| 📗 [Nutzungsleitfaden](users/USAGE.md) | CLI-Befehle, Installationsmodi, Laufzeitbefehle und MCP-Konfigurationsabläufe |
| 📦 [Bundles](users/BUNDLES.md) | Kuratierte Pakete und ihre aktuelle Verfügbarkeit |
| 📚 [Katalog](CATALOG.md) | Automatisch generierter Katalog veröffentlichter Fähigkeiten |
| 🔧 [System Runbook](operations/RUNBOOK.md) | Erstellen, Bereitstellen, Sichern und Fehlerbehebung der Laufzeit |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Was Sie lernen werden |
|:----|:----|
| 🗂️ [Projektstruktur](PROJECT-STRUCTURE.md) | Vollständige Verzeichnis- und Dateireferenz für das Monorepo |
| 🗺️ [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) | Architekturentwicklung, geschlossene Entscheidungen und verbleibende Erweiterungsbereiche |
| 🧭 [CLI UX Roadmap](architecture/CLI-UX-ROADMAP.md) | Historischer Plan und aktuelle Form des geführten und visuellen CLI |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Kern-Monorepo und Shared-Runtime-Entscheidung |
| 🔬 [Codebasisanalyse](architecture/CODEBASE-ANALYSIS.md) | Aktuelle Laufzeitzusammensetzung, Anzahl und Systemgrenzen |
| 🌐 [Katalog-API-Oberfläche](specs/CATALOG-API.md) | HTTP-Endpunkte, Filterung, Governance und Downloads |
| 🧩 [CLI-geführter Installer](specs/CLI-GUIDED-INSTALLER.md) | Verhaltensvertrag für den geführten Installateur |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink Visual Shell, Zustandsmodell und Service-Hub |
| 🔌 [Lokaler MCP-Sidecar](specs/LOCAL-MCP-SIDECAR.md) | Dateisystemfähige Tools, Zulassungslistenmodell und Konfigurationsschreiben |
| 🧭 [Client-Support-Matrix](specs/CLIENT-SUPPORT-MATRIX.md) | Unterstützte CLI- und IDE-Clients, Autoren, manuelle Ziele und Quellreferenzen |
| 📊 [Fertigkeitsklassifizierung](specs/SKILL-CLASSIFICATION.md) | Taxonomie, Bewertungsheuristik und Metadatenartefakte |
| 🛡️ [Sicherheitsvalidierung](specs/SECURITY-VALIDATION.md) | Scanner, Archive, Signaturen und Freigabeüberprüfung |
| 📋 [Skill-Manifest-Spezifikation](specs/SKILL-MANIFEST.md) | Maschinenlesbares Manifestformat und Kompatibilitätsvertrag |### 🤝 If You Want to **Contribute**

| Doc | Was Sie lernen werden |
|:----|:----|
| 📝 [Leitfaden für Beiträge](../CONTRIBUTING.md) | Repo-Workflow und Pull-Request-Erwartungen |
| 🌍 [Repository-Quellen](../REPOSITORY-SOURCES.md) | So schlagen Sie ein Upstream-Repository über eine normale öffentliche PR vor, jetzt mit Repo-First-„Auto“-Zweig- und Pfadunterstützung |
| 🧾 [Skill-PR-Workflow](contributors/SKILL-PR-WORKFLOW.md) | Native Aufnahme, automatische Enhancer-Verarbeitung, „skills_omni/“-Veröffentlichung und Erwartungen der Prüfer |
| 📄 [Skill-Vorlage](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` mit aktuellem Titel und Struktur |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Struktur- und Qualitätserwartungen an eine Fertigkeit |
| ✅ [Quality Bar](contributors/QUALITY-BAR.md) | Akzeptanzkriterien für das Repositorium |
| 🏆 [High-Score-Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Was führt zu hoher Reife, Qualität, Best Practices und Sicherheitswerten |---

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

Für die vollständige Endbenutzer-Befehlsoberfläche verwenden Sie das [CLI-Benutzerhandbuch](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Die Build-Pipeline gibt die maschinenlesbaren Dateien aus, die jede Laufzeitoberfläche steuern:

| Artefakt | Zweck |
|:---------|:--------|
| `metadata.json` | Repositoryweite Validierung und Score-Zusammenfassung |
| `skills_index.json` | Repo-lokaler normalisierter Fähigkeitsindex |
| `dist/catalog.json` | Veröffentlichter Katalog zur Suche und Auflistung |
| `dist/bundles.json` | Bundle-Definitionen mit Verfügbarkeit |
| `dist/manifests/<skill>.json` | Maschinenlesbares Manifest pro Skill |
| `dist/archives/<skill>.zip` | Skill-Archiv (zip) |
| `dist/archives/<skill>.tar.gz` | Skill-Archiv (Tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256-Prüfsummenmanifest |

„dist/“ bleibt absichtlich festgeschrieben. Diese generierten Artefakte sind Teil des Installations-, API-, MCP-, A2A-, Smoke- und Release-Vertrags.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Schreibgeschützte Registrierungs-API für Fertigkeiten, Pakete, Vergleiche, Installationsplanung und Artefakt-Downloads.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Der lokale Sidecar unterstützt jetzt erstklassiges MCP-Konfigurationsschreiben für:

- Claude Code
- Cursor
- VS-Code und Entwicklungscontainer
- Gemini-CLI
- Antigravitation
- Kiro
- Codex-CLI
- Weiter
- Windsurfen
- OpenCode
- Cline
- GitHub Copilot-CLI
- Kilocode
- Zed
- Gans### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Aufgabenlebenszyklus, Streaming, Persistenz, Neustartwiederherstellung und einfache lokale Orchestrierung. Die gemeinsam genutzte geleaste Ausführung ist verfügbar, wenn sie explizit aktiviert ist. Redis bleibt eine erweiterte gehostete Option und nicht der standardmäßige lokale Pfad.---

## 🗂️ Repository Map

| Pfad | Zweck |
|:-----|:--------|
| 📂 `Fähigkeiten/` | Kanonische Autorenfähigkeiten |
| 📖 `docs/users/` | Endbenutzerdokumentation |
| 🤝 `docs/contributors/` | Vorlagen und Anleitungen für Mitwirkende |
| 🏗️ `docs/architecture/` | Roadmap, ADRs und technische Analyse |
| 🔧 `docs/operations/` | Operative Runbooks |
| 📋 `docs/specs/` | Laufzeit-, Protokoll- und Artefaktverträge |
| 📚 `docs/CATALOG.md` | Generierter Kompetenzkatalog |
| 📦 `dist/` | Erzeugte maschinenlesbare Artefakte |
| 🧠 `packages/catalog-core/` | Gemeinsame Kataloglaufzeit mit „ICatalogStorageAdapter“ DI |
| 🌐 `packages/server-api/` | Schreibgeschützte HTTP-API mit OpenAPI/Swagger-Benutzeroberfläche unter „/docs“ |
| 🔌 `packages/server-mcp/` | MCP-Server und lokaler Sidecar |
| 🤖 `packages/server-a2a/` | A2A-Server und Task-Laufzeit |
| 🖥️ `packages/cli/` | Einheitliche CLI-Einstiegspunkte, Installationslogik und visuelle Ink-TUI (ESM-nativ) |
| ⚙️ `tools/scripts/` | Validierung, Generierung, Verifizierung und Tests |
| 🧪 `vitest.workspace.js` | Konfiguration des Vitest-Monorepo-Arbeitsbereichs |---

## 🧪 Release Validation

```bash
npm run smoke
```

Der Rauchlauf validiert:

- ✅ Kompetenzvalidierung und Metadatengenerierung
- ✅ Tools zur Neukategorisierung der Taxonomie
- ✅ Katalogartefaktgenerierung
- ✅ generierter Katalogabschlag
- ✅ Archivgenerierung und -überprüfung
- ✅ Legacy-Integrationstestsuite (Python PTY + Node TUI-Behauptungen)
- ✅ Vitest-Einheitensuite für Katalogkernbewertung, Suche und Filterung
- ✅ `npm pack --dry-run`
- ✅ API-Boot und -Zustand mit OpenAPI/Swagger-Benutzeroberfläche unter „/docs“.
- ✅ MCP-Boot in „stdio“, „stream“ und „sse“.
- ✅ A2A-Boot, Polling, SSE-Streaming, Abbruch und Push-Config-Lebenszyklus
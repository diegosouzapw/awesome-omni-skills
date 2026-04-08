# 🤝 Contributing to Awesome Omni Skills (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Awesome Omni Skills ist ein öffentliches Repository mit Fähigkeiten, ein kuratiertes Repository verbesserter Best-Practice-Derivate und die auf diesem Katalog aufbauenden Laufzeitoberflächen.**
> Beiträge können auf beide Bereiche abzielen, aber beide müssen mit den generierten Artefakten und dem aktuellen CLI-Verhalten im Einklang bleiben.---

## 📊 Repository Baseline

<!-- generated:contributing-repository-baseline:start -->
| Metric | Value |
|:-------|:------|
| 📦 Package version | `0.9.5` |
| 🧠 Published skills | `154` |
| ✨ Curated derivatives | `110` |
| 📦 Fully backed bundles | `7` |
| 🖥️ Install-capable clients | `9` |
| 🔌 MCP config-capable clients | `16` across `33` targets |
| 🔄 Automatic releases | Enabled on `main` |
<!-- generated:contributing-repository-baseline:end -->

---

## 📋 Before You Start

| Was | Wo |
|:-----|:------|
| 🧠 Fertigkeiten werden in | verfasst `skills/<Skill-Name>/SKILL.md` |
| 📖 Vorlagen und Anleitungen für Mitwirkende | `docs/contributors/` |
| 🧾 Kanonischer PR-Flow für neue Fähigkeiten | [Skill-PR-Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Native Incoming-Fähigkeiten landen unter | `skills/` (jede Sprache) |
| ✨ Kuratierte erweiterte Derivate | `skills_omni/` (nur Englisch, automatisiert) |
| 🚫 `skills_omni/` ist geschützt | Nicht offen für direkte öffentliche Beiträge |
| 🔁 Repository-basierte Aufnahme | Vom Betreuer betriebene externe Importe landen immer noch unter „Fähigkeiten/“ und folgen demselben Überprüfungsstandard |
| 📖 Laufzeit- und Architekturdokumente | `docs/` |
| 📄 Community-Dateien | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Geben Sie | ein Bereich |
|:-----|:-----|
| 🧠 Eine Fertigkeit hinzufügen oder verbessern | `Fähigkeiten/` |
| 📥 Überprüfen Sie eine Repository-basierte Aufnahme-PR | „external-import/<source>“-Zweige, die auf „skills/“ abzielen |
| 🌍 Schlagen Sie ein neues Upstream-Repository vor | `REPOSITORY-SOURCES.md` |
| 📖 Richtlinien für Mitwirkende aktualisieren | `docs/contributors/` |
| 🖥️ CLI, Installationsprogramm oder Skripte verbessern | `packages/cli/` und `tools/scripts/` |
| 📦 Kataloglaufzeit oder Protokollpakete verbessern | `Pakete/` |
| 🧪 Verschärfen Sie Tests, Rauchkontrollen oder Freigabedokumente | Verschiedene |---

## Schnellstart

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/awesome-omni-skills.git
cd awesome-omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 Öffnen Sie die PR mit aktivierter Option „Änderungen durch Betreuer zulassen“.**---

## 🧠 Skill Contributions

Eine gute muttersprachliche Incoming-Fähigkeit sollte:

- ✅ Ein spezifisches Problem sauber lösen
- ✅ Projektübergreifend wiederverwendbar sein
- ✅ Fügen Sie Anweisungen hinzu, denen ein Agent tatsächlich folgen kann
- ✅ Vermeiden Sie vage oder überflüssige Inhalte
- ✅ Geben Sie genaue Frontmatter- und Kompatibilitätsmetadaten an, sofern verfügbar
- ✅ Landen Sie nach der Ausführung der Automatisierung mit generierten „metadata.json“-Klassifizierungsartefakten### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 Tipp:**Release-Level-Skill-Packs sollten „agents/“, „references/“, „examples/“ und „scripts/“ enthalten. Aber die Aufnahmeoberfläche ist absichtlich freizügig – ein minimaler nativer eingehender Skill ist erlaubt, und die Enhancer-Pipeline generiert die stärkere Ableitung.### 🔀 Two Native Intake Paths

Das öffentliche Repository akzeptiert native Fähigkeiten über zwei Betriebspfade:

| Pfad | Wie es ankommt | Bewertungserwartung |
|:-----|:---------------|:-------------------|
| 👤 Direkter Mitarbeiter PR | Ein menschlicher Zweig bearbeitet „skills/“ direkt | Validieren Sie den Skill, die generierten Artefakte und die Bundle-Auswirkungen |
| 📥 Repository-basierte externe Aufnahme | Der vom Betreuer betriebene „external-import/<source>“ PR importiert Fertigkeiten aus einem anderen überprüften Repository | Validieren Sie den Skill sowie Herkunft, Upstream-Eigentümerschaft und Lizenzhinweise |

Beide Pfade landen in „skills/“, beide lösen denselben öffentlichen Validator aus und beide können eine kuratierte „skills_omni/“-Begleit-PR erzeugen.

Wenn Sie ein Upstream-Repository vorschlagen möchten, anstatt einen Skill direkt zu senden, bearbeiten Sie [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md). Der normale Vorschlag ist jetzt Repo-First:

- Geben Sie „repo_url“ an
- Belassen Sie „branch“ auf „auto“, es sei denn, Sie benötigen einen nicht standardmäßigen Zweig
- Belassen Sie „skills_path“ auf „auto“, es sei denn, Sie kennen den genauen Stamm

Bei Merge gibt es immer noch ein öffentliches Überprüfungstor und keinen automatischen Synchronisierungsauslöser.### 🌐 Language Policy

| Oberfläche | Akzeptierte Sprachen |
|:--------|:-----|
| 📥 `Fähigkeiten/` (native Aufnahme) | Portugiesisch, Englisch oder eine beliebige Sprache |
| ✨ `skills_omni/` (kuratierte Ausgabe) | Nur Englisch |

> Der private Enhancer behält die übermittelte native Quelle bei und schreibt das kuratierte Derivat in Englisch neu.

📖 Für die vollständige Verzweigungs-, Validierungs- und Enhancer-Review-Sequenz verwenden Sie [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Führen Sie Folgendes aus, bevor Sie eine PR öffnen:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<Details>
<summary>📋 <strong>Was <code>npm run validieren</code> regeneriert</strong></summary>

- „metadata.json“.
- `skills/<skill>/metadata.json`
- Kartierung der kanonischen Taxonomie
- Reife, Best Practices, Qualität und Sicherheitsbewertungen
- Statische Sicherheitsbefunde
- Optionaler ClamAV- und VirusTotal-Scannerstatus (sofern konfiguriert)</details>

>**⚠️ Wichtig:**Validierung ist der Vertrag, der von CLI, API, MCP, A2A, Manifesten, Archiven und Release-Automatisierung verwendet wird. Behandeln Sie generierte Metadaten als Teil der Überprüfungsoberfläche und nicht als wegwerfbare Ausgabe.

Wenn Sie Branding, Paketmetadaten, Repo-URLs oder Repository-Header-Kopie berühren, führen Sie außerdem Folgendes aus:```bash
npm run repo:metadata:print
```

Dieser Befehl gibt die quellgesteuerte GitHub-Beschreibung, die Homepage und den Themenvertrag aus, die von „data/project_identity.json“ abgeleitet sind.### 📥 Intake Policy

| Zustand | Verhalten |
|:----------|:---------|
| Fehlendes/unvollständiges Titelblatt | ⚠️ Warnungen (blockiert nicht) |
| Kritische Sicherheitsergebnisse | 🚫 Blockiert die Aufnahme |
| Harte Validierungsfehler | 🚫 Blockiert die Aufnahme |
| Strengerer redaktioneller Standard | Wird bei verstärktem Ableitungsfluss erzwungen, nicht bei nativer Aufnahme |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<Details>
<summary>📋 <strong>Was der Rauchpass validiert</strong></summary>

- ✅ Validierung der Fähigkeiten
- ✅ Katalogerstellung
- ✅ Erstellung eines Dokumentenkatalogs
- ✅ Testsuite
- ✅ `npm pack --dry-run`
- ✅ API-Boot
- ✅ MCP-Boot in „stdio“, „stream“ und „sse“.
- ✅ A2A-Stiefel
- ✅ Archivüberprüfung und Verpackungserwartungen</details>

---

## 📋 Skill Frontmatter

Frontmatter wird dringend empfohlen. Verwenden Sie [Skill-Vorlage](docs/contributors/SKILL-TEMPLATE.md) als Basis.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<Details>
<summary>🏷️ <strong>Kanonische Taxonomiekategorien</strong></summary>

| Kategorie | Kategorie |
|:---------|:---------|
| „Entwicklung“ | „Frontend“ |
| `Backend` | `fullstack-web` |
| `Werkzeuge` | `cli-automation` |
| „Geschäft“ | „Produkt“ |
| „Design“ | `data-ai` |
| „KI-Agenten“ | „maschinelles Lernen“ |
| `devops` | `testing-security` |
| `Dokumentation` | `content-media` |
| „Kommunikation“ | „nicht kategorisiert“ |</details>

>**ℹ️**Die Skill-Version ist unabhängig von der NPM-Paketversion. Wenn ein nativer eingehender Skill noch kein Frontmatter hat, wird er mit Warnungen akzeptiert und temporäre Metadaten aus Verzeichnis, Titel und Textkörper werden abgeleitet.---

## ⚙️ Runtime Contributions

Wenn Sie „packages/cli/“, „packages/catalog-core/“, „packages/server-*/“ oder Build-Skripte berühren:

- 📦 Halten Sie „dist/“ und Dokumente an der Implementierung ausgerichtet
- 🔄 Bevorzugen Sie die Wiederverwendung von „packages/catalog-core“ anstelle der Duplizierung der Kataloglogik
- 🔒 Behalten Sie das lokale Schreibverhalten hinter den Standardvorgaben für Vorschau oder Probelauf bei
- 🔌 Halten Sie MCP-Autoren diszipliniert – fügen Sie erstklassige Konfigurationsautoren nur hinzu, wenn der Client über einen stabilen öffentlichen Konfigurationsvertrag verfügt
- 🛡️ Behandeln Sie Sicherheitsscanner-Warnungen als Teil der Überprüfungsleiste
- 🧪 Aktualisieren Sie Tests, wenn Sie CLI-Befehle, Transportmodi oder öffentliche Endpunkte ändern### 🚧 Important Boundary

| Tun Sie dies ✅ | Tu das nicht 🚫 |
|:-----------|:-----------------|
| Reichen Sie native Arbeiten unter „skills/“ | ein Öffnen Sie manuelle PRs, die „skills_omni/“ bearbeiten |
| Überlassen Sie die Automatisierung dem Enhancer-Lauf | Kuratierte Inhalte direkt hinzufügen |
| Konzentrieren Sie sich auf die Qualität legitimer Fähigkeiten | Umgehen Sie den automatisierten Companion-PR-Flow |

>**ℹ️**Wenn eine native Fertigkeit in „skills/“ aktualisiert wird, verarbeitet der private Enhancer sie erneut und aktualisiert die erweiterte Grundlinie.---

## 🔄 Enhancer Outcome States

Während öffentlicher PRs für native Fertigkeiten meldet der Enhancer einen von vier Zuständen:

| Staat | Bedeutung |
|:------|:--------|
| ✅ „abgeschlossen“ | Verbessertes Derivat, sauber generiert, geeignet für „skills_omni/“ |
| ⚠️ „degradiert“ | Abgeschlossen mit Rückfall oder schwächerer Ergebnisbewegung – genauer prüfen |
| 🚫 `blockiert` | Aus Infrastruktur- oder Validierungsgründen gestoppt – verhindert automatische Veröffentlichung |
| ❌ „fehlgeschlagen“ | Unerwarteter Fehler – erfordert eine Untersuchung durch den Betreuer |

>**📝 Mitwirkende**müssen keine Probleme mit der Enhancer-Infrastruktur beheben. Die Verantwortung besteht darin, einen legitimen nativen Skill einzureichen und das Repo grün zu halten.---

## 🔄 Automatic Release Policy

Wenn eine Änderung auf „main“ landet und Folgendes umfasst:

- `Fähigkeiten/**`
- `skills_omni/**`
- „data/bundles.json“.

…das Repository gibt automatisch eine**Paketfreigabe**aus.### 📋 Version Bump Rule

| Von | Zu | Regel |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Zum nächsten Moll wechseln, Patch zurücksetzen |

> Der Release-Flow generiert Kataloge/Archive neu, schreibt die Versionserhöhung fest, markiert das Release, veröffentlicht npm und erstellt das GitHub-Release automatisch.---

## 📝 Commit Conventions

| Präfix | Verwenden Sie für |
|:-------|:--------|
| `feat:` | Neue Fähigkeit oder Funktion |
| `fix:` | Fehlerbehebung |
| `docs:` | Dokumentationsänderungen |
| `refactor:` | Codebereinigung oder Strukturänderungen |
| `test:` | Teständerungen |
| `Aufgabe:` | Wartung |---

## ❓ Need Help?

| Kanal | Link |
|:--------|:-----|
| 💬 Fragen | [Eine Diskussion eröffnen](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Fehler | [Ein Problem öffnen](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Frühes Feedback | [Öffnen Sie einen PR-Entwurf](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
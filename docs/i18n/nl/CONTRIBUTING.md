# 🤝 Contributing to Awesome Omni Skills (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Awesome Omni Skills is een openbare opslagplaats van vaardigheden, een samengestelde opslagplaats van verbeterde best-practice-derivaten en de runtime-oppervlakken die bovenop die catalogus zijn gebouwd.**
> Bijdragen kunnen zich op beide gebieden richten, maar beide moeten in lijn blijven met de gegenereerde artefacten en het huidige CLI-gedrag.---

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

| Wat | Waar |
|:-----|:------|
| 🧠 Vaardigheden zijn geschreven in | `skills/<vaardigheidsnaam>/SKILL.md` |
| 📖 Sjablonen en begeleiding voor bijdragers | `docs/bijdragers/` |
| 🧾 Canonieke PR-stroom voor nieuwe vaardigheden | [Skill PR-workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Native inkomende vaardigheden komen terecht onder | `vaardigheden/` (elke taal) |
| ✨ Samengestelde verbeterde derivaten | `skills_omni/` (alleen Engels, geautomatiseerd) |
| 🚫 `skills_omni/` is beveiligd | Niet open voor directe publieke bijdrage |
| 🔁 Op repository gebaseerde intake | Door de beheerders beheerde externe import valt nog steeds onder 'vaardigheden/' en volgt dezelfde beoordelingsnorm |
| 📖 Runtime- en architectuurdocumenten | `docs/` |
| 📄 Community-bestanden | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Typ | Gebied |
|:-----|:-----|
| 🧠 Een vaardigheid toevoegen of verbeteren | `vaardigheden/` |
| 📥 Beoordeel een op een repository gebaseerde intake PR | `external-import/<source>` branches gericht op `skills/` |
| 🌍 Een nieuwe upstream-repository voorstellen | `REPOSITORY-SOURCES.md` |
| 📖 Richtlijnen voor bijdragers bijwerken | `docs/bijdragers/` |
| 🖥️ Verbeter CLI, installatieprogramma of scripts | `packages/cli/` en `tools/scripts/` |
| 📦 Verbeter de runtime- of protocolpakketten van de catalogus | `pakketten/` |
| 🧪 Tests aanscherpen, rookcontroles uitvoeren of documenten vrijgeven | Diverse |---

## Snel starten

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

>**📝 Open de PR met `Bewerkingen van beheerders toestaan` ingeschakeld.**---

## 🧠 Skill Contributions

Een goede inkomende vaardigheid moet:

- ✅ Los een specifiek probleem netjes op
- ✅ Herbruikbaar zijn voor alle projecten
- ✅ Voeg instructies toe die een agent daadwerkelijk kan volgen
- ✅ Vermijd vage of overbodige inhoud
- ✅ Verklaar nauwkeurige metagegevens over frontmaterie en compatibiliteit, indien beschikbaar
- ✅ Land met gegenereerde 'metadata.json'-classificatieartefacten nadat automatisering is uitgevoerd### 📁 Minimal Structure

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

>**💡 Tip:**Vaardigheidspakketten op releaseniveau moeten `agents/`, `references/`, `examples/` en `scripts/` bevatten. Maar het inlaatoppervlak is opzettelijk tolerant: een minimale inheemse inkomende vaardigheid is toegestaan, en de versterkerpijplijn genereert de sterkere afgeleide.### 🔀 Two Native Intake Paths

De openbare repository accepteert native vaardigheden via twee operationele paden:

| Pad | Hoe het aankomt | Beoordeel de verwachting |
|:-----|:--------------|:------------------|
| 👤 Directe bijdrager PR | Een menselijke tak bewerkt `skills/` rechtstreeks | Valideer de vaardigheid, gegenereerde artefacten en bundel impact |
| 📥 Repository-gebaseerde externe intake | Door de beheerder beheerde `external-import/<source>` PR importeert vaardigheden uit een andere beoordeelde repository | Valideer de vaardigheid plus herkomst, upstream-eigendom en licentienotities |

Beide paden komen terecht in `skills/`, beide activeren dezelfde publieke validator, en beide kunnen een samengestelde `skills_omni/` begeleidende PR opleveren.

Als u een upstream-repository wilt voorstellen in plaats van een vaardigheid rechtstreeks te verzenden, bewerkt u [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md). Het normale voorstel is nu repo-first:

- geef `repo_url` op
- laat `branch` op `auto` staan, tenzij je een niet-standaard branch nodig hebt
- laat `skills_path` op `auto` staan, tenzij u de exacte root kent

Samenvoegen is er nog steeds een openbare beoordelingspoort, geen automatische synchronisatietrigger.### 🌐 Language Policy

| Oppervlakte | Geaccepteerde talen |
|:--------|:------------------|
| 📥 `vaardigheden/` (native instroom) | Portugees, Engels of welke taal dan ook |
| ✨ `skills_omni/` (samengestelde uitvoer) | Alleen Engels |

> De privéversterker behoudt de oorspronkelijke bron zoals ingediend en herschrijft de samengestelde afgeleide in het Engels.

📖 Gebruik [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) voor de volledige reeks vertakkingen, validatie en verbeteringen van de beoordeling.---

## ✅ Required Validation

Voer dit uit voordat u een PR opent:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<details>
<summary>📋 <strong>Wat <code>npm run validate</code> opnieuw genereert</strong></summary>

- `metadata.json`
- `skills/<vaardigheid>/metadata.json`
- Canonieke taxonomie in kaart brengen
- Volwassenheid, best practices, kwaliteit en beveiligingsscores
- Statische beveiligingsbevindingen
- Optionele ClamAV- en VirusTotal-scannerstatus (indien geconfigureerd)</details>

>**⚠️ Belangrijk:**Validatie is het contract dat wordt gebruikt door CLI, API, MCP, A2A, manifesten, archieven en release-automatisering. Behandel gegenereerde metadata als onderdeel van het beoordelingsoppervlak, niet als wegwerpbare output.

Als u branding, pakketmetadata, repository-URL's of repository-headerkopie aanraakt, voert u ook het volgende uit:```bash
npm run repo:metadata:print
```

Met dat commando worden de brongestuurde GitHub-beschrijving, de startpagina en het onderwerpencontract afgedrukt, afgeleid van `data/project_identity.json`.### 📥 Intake Policy

| Conditie | Gedrag |
|:----------|:---------|
| Ontbrekende/onvolledige frontmaterie | ⚠️ Waarschuwingen (blokkeert niet) |
| Kritieke beveiligingsbevindingen | 🚫 Blokkeert de inname |
| Harde validatiefouten | 🚫 Blokkeert de inname |
| Strengere redactionele norm | Afgedwongen bij verbeterde derivatenstroom, niet bij inheemse inname |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<details>
<summary>📋 <strong>Wat de rookpas valideert</strong></summary>

- ✅ Vaardigheidsvalidatie
- ✅ Catalogus genereren
- ✅ Documentencatalogus genereren
- ✅ Testsuite
- ✅ `npm pack --drooglopen`
- ✅ API-opstarten
- ✅ MCP-boot in `stdio`, `stream` en `sse`
- ✅ A2A-laars
- ✅ Archiefverificatie en verpakkingsverwachtingen</details>

---

## 📋 Skill Frontmatter

Frontmatter wordt sterk aanbevolen. Gebruik [Skill Template](docs/contributors/SKILL-TEMPLATE.md) als basislijn.```yaml
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

<details>
<summary>🏷️ <strong>Canonieke taxonomiecategorieën</strong></summary>

| Categorie | Categorie |
|:---------|:---------|
| `ontwikkeling` | `frontend` |
| `achterkant` | `fullstack-web` |
| `gereedschap` | `cli-automatisering` |
| `bedrijf` | `product` |
| `ontwerp` | `data-ai` |
| `ai-agenten` | `machine-leren` |
| `devops` | `testbeveiliging` |
| `documentatie` | `inhoud-media` |
| `communicatie` | `ongecategoriseerd` |</details>

>**ℹ️**De vaardigheidsversie is onafhankelijk van de npm-pakketversie. Als een native inkomende vaardigheid nog geen frontmatter heeft, wordt deze geaccepteerd met waarschuwingen en worden tijdelijke metagegevens afgeleid van de directory, titel en hoofdtekst.---

## ⚙️ Runtime Contributions

Als u `packages/cli/`, `packages/catalog-core/`, `packages/server-*/` aanraakt of scripts bouwt:

- 📦 Houd `dist/` en documenten afgestemd op de implementatie
- 🔄 Geef er de voorkeur aan om `packages/catalog-core` te hergebruiken in plaats van de cataloguslogica te dupliceren
- 🔒 Houd het lokale schrijfgedrag achter de standaardinstellingen voor preview of dry-run
- 🔌 Houd MCP-schrijvers gedisciplineerd – voeg alleen eersteklas configuratieschrijvers toe als de klant een stabiel openbaar configuratiecontract heeft
- 🛡️ Behandel waarschuwingen van beveiligingsscanners als onderdeel van de beoordelingsbalk
- 🧪 Update tests bij het wijzigen van CLI-opdrachten, transportmodi of openbare eindpunten### 🚧 Important Boundary

| Doe dit ✅ | Doe dit niet 🚫 |
|:-----------|:----------------|
| Dien eigen werk in onder `skills/` | Open handmatige PR's die `skills_omni/` | bewerken
| Laat automatisering de verbeterrun afhandelen | Rechtstreeks samengestelde inhoud toevoegen |
| Focus op legitieme kwaliteit van vaardigheden | Omzeil de geautomatiseerde begeleidende PR-stroom |

>**ℹ️**Wanneer een native vaardigheid in `skills/` wordt bijgewerkt, verwerkt de privéversterker deze opnieuw en vernieuwt de verbeterde basislijn.---

## 🔄 Enhancer Outcome States

Tijdens openbare PR's voor moedertaalvaardigheden rapporteert de versterker een van de volgende vier toestanden:

| Staat | Betekenis |
|:------|:--------|
| ✅ `voltooid` | Verbeterd derivaat dat schoon is gegenereerd en in aanmerking komt voor `skills_omni/` |
| ⚠️`gedegradeerd` | Voltooid met terugval of zwakkere scorebeweging — zorgvuldiger inspecteren |
| 🚫 `geblokkeerd` | Gestopt vanwege infrastructuur- of validatieredenen — verhindert automatische publicatie |
| ❌ `mislukt` | Onverwachte fout - vereist onderzoek door de beheerder |

>**📝 Bijdragers**hoeven problemen met de verbeterinfrastructuur niet op te lossen. De verantwoordelijkheid is om een ​​legitieme native vaardigheid in te dienen en de repo groen te houden.---

## 🔄 Automatic Release Policy

Wanneer een wijziging op 'main' terechtkomt en het volgende omvat:

- `vaardigheden/**`
- `vaardigheden_omni/**`
- `data/bundels.json`

…de repository geeft automatisch een**pakketrelease**uit.### 📋 Version Bump Rule

| Van | Naar | Regel |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Rol naar volgende minor, reset patch |

> De releasestroom genereert catalogus/archieven opnieuw, legt de versiebump vast, tagt de release, publiceert NPM en maakt automatisch de GitHub-release.---

## 📝 Commit Conventions

| Voorvoegsel | Gebruik voor |
|:-------|:--------|
| `prestatie:` | Nieuwe vaardigheid of functie |
| `repareren:` | Bugfix |
| `docs:` | Documentatiewijzigingen |
| `refactor:` | Code opschonen of structuurwijzigingen |
| `test:` | Wijzigingen testen |
| `klusje:` | Onderhoud |---

## ❓ Need Help?

| Kanaal | Koppeling |
|:--------|:-----|
| 💬 Vragen | [Open een discussie](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Bugs | [Open een probleem](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Vroege feedback | [Open een concept-PR](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
# 🤝 Contributing to Awesome Omni Skills (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Awesome Omni Skills er et offentligt lager af færdigheder, et kurateret lager af forbedrede bedste praksis-derivater og runtime-overflader bygget oven på det katalog.**
> Bidrag kan målrettes mod begge områder, men begge skal forblive på linje med de genererede artefakter og den aktuelle CLI-adfærd.---

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

| Hvad | Hvor |
|:-----|:------|
| 🧠 Færdigheder er skrevet i | `færdigheder/<færdighedsnavn>/SKILL.md` |
| 📖 Bidragyderskabeloner og vejledning | `dokumenter/bidragydere/` |
| 🧾 Kanonisk PR-flow for nye færdigheder | [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Indfødte indgående færdigheder lander under | `færdigheder/` (alle sprog) |
| ✨ Kurerede forbedrede derivater | `skills_omni/` (kun engelsk, automatiseret) |
| 🚫 `skills_omni/` er beskyttet | Ikke åben for direkte offentligt bidrag |
| 🔁 Lagerbaseret indtag | Vedligeholdelsesdrevet ekstern import lander stadig under "færdigheder/" og følger samme gennemgangsstandard |
| 📖 Kørsels- og arkitekturdokumenter | `docs/` |
| 📄 Fællesskabsfiler | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_DUCT.md` |---

## 🎯 Common Contribution Types

| Skriv | Område |
|:-----|:-----|
| 🧠 Tilføj eller forbedre en færdighed | `færdigheder/` |
| 📥 Gennemgå en repository-baseret indtag-PR | `ekstern-import/<kilde>`-grene rettet mod `færdigheder/` |
| 🌍 Foreslå et nyt opstrømsdepot | `REPOSITORY-SOURCES.md` |
| 📖 Opdater bidragydervejledning | `dokumenter/bidragydere/` |
| 🖥️ Forbedre CLI, installationsprogram eller scripts | `packages/cli/` og `tools/scripts/` |
| 📦 Forbedre katalogets runtime eller protokolpakker | `pakker/` |
| 🧪 Stram tests, røgtjek, eller frigiv dokumenter | Forskellige |---

## Kom hurtigt i gang

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

>**📝 Åbn PR'en med "Tillad redigeringer fra vedligeholdere" aktiveret.**---

## 🧠 Skill Contributions

En god indfødt færdighed bør:

- ✅ Løs et specifikt problem rent
- ✅ Være genanvendelig på tværs af projekter
- ✅ Inkluder instruktioner, som en agent faktisk kan følge
- ✅ Undgå vagt eller overflødigt indhold
- ✅ Erklærer nøjagtige frontmatter og kompatibilitetsmetadata, når de er tilgængelige
- ✅ Land med genererede `metadata.json` klassifikationsartefakter efter automatiseringskørsel### 📁 Minimal Structure

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

>**💡 Tip:**Færdighedspakker i udgivelsesgrad bør indeholde `agenter/`, `references/`, `examples/` og `scripts/`. Men indtagsoverfladen er bevidst tolerant - en minimal indfødt færdighed er tilladt, og enhancer-pipelinen genererer den stærkere derivat.### 🔀 Two Native Intake Paths

Det offentlige depot accepterer indfødte færdigheder gennem to operationelle veje:

| Sti | Hvordan det ankommer | Gennemgå forventning |
|:-----|:----------------|:------------------------|
| 👤 Direkte bidragyder PR | En menneskelig gren redigerer `skills/` direkte | Valider færdigheden, genererede artefakter og bundtpåvirkning |
| 📥 Lagerbaseret eksternt indtag | Vedligeholder-drevet `ekstern-import/<kilde>` PR importerer færdigheder fra et andet revideret lager | Validér færdigheden plus herkomst, upstream-ejerskab og licensnoter |

Begge stier lander i `skills/`, begge udløser den samme offentlige validator, og begge kan producere en kureret `skills_omni/` ledsagende PR.

Hvis du vil foreslå et upstream-lager i stedet for at sende en færdighed direkte, skal du redigere [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md). Det normale forslag er nu repo-først:

- angiv 'repo_url'
- lad `branch` være `auto`, medmindre du har brug for en ikke-standard filial
- lad `skills_path` være `auto`, medmindre du kender den nøjagtige rod

Flet, der er stadig en offentlig gennemgangsport, ikke en automatisk synkroniseringsudløser.### 🌐 Language Policy

| Overflade | Accepterede sprog |
|:--------|:------------------------|
| 📥 `færdigheder/` (native indtag) | Portugisisk, engelsk eller ethvert sprog |
| ✨ `skills_omni/` (kurateret output) | kun engelsk |

> Den private forstærker bevarer den oprindelige kilde som indsendt og omskriver den kurerede afledte på engelsk.

📖 Brug [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) for at få den fulde gren, validering og enhancer-review-sekvens.---

## ✅ Required Validation

Kør dette, før du åbner en PR:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<detaljer>
<summary>📋 <strong>Hvad <code>npm run validate</code> regenererer</strong></summary>

- `metadata.json`
- `skills/<skill>/metadata.json`
- Kanonisk taksonomi kortlægning
- Modenhed, bedste praksis, kvalitet og sikkerhedsresultater
- Statiske sikkerhedsfund
- Valgfri ClamAV og VirusTotal scannerstatus (når konfigureret)</details>

>**⚠️ Vigtigt:**Validering er den kontrakt, der bruges af CLI, API, MCP, A2A, manifester, arkiver og automatisering af udgivelser. Behandl genererede metadata som en del af anmeldelsesoverfladen, ikke engangsoutput.

Hvis du trykker på branding, pakkemetadata, repo-URL'er eller kopi af lagerhovedet, skal du også køre:```bash
npm run repo:metadata:print
```

Denne kommando udskriver den kildekontrollerede GitHub-beskrivelse, hjemmeside og emnekontrakt afledt af `data/project_identity.json`.### 📥 Intake Policy

| Tilstand | Adfærd |
|:----------|:--------|
| Manglende/ufuldstændig frontmaterie | ⚠️ Advarsler (blokerer ikke) |
| Kritiske sikkerhedsresultater | 🚫 Blokerer indtag |
| Hårde valideringsfejl | 🚫 Blokerer indtag |
| Skærpet redaktionel standard | Håndhæves i forbedret afledt flow, ikke ved native indtag |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detaljer>
<summary>📋 <strong>Hvad røgpasset validerer</strong></summary>

- ✅ Færdighedsvalidering
- ✅ Kataloggenerering
- ✅ Dokumentkataloggenerering
- ✅ Testsuite
- ✅ `npm pack --dry-run`
- ✅ API-opstart
- ✅ MCP-start i 'stdio', 'stream' og 'sse'
- ✅ A2A støvle
- ✅ Arkivverifikation og emballageforventninger</details>

---

## 📋 Skill Frontmatter

Frontmatter anbefales kraftigt. Brug [Skill Template](docs/contributors/SKILL-TEMPLATE.md) som baseline.```yaml
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

<detaljer>
<resumé>🏷️ <strong>Kanoniske taksonomikategorier</strong></summary>

| Kategori | Kategori |
|:--------|:--------|
| `udvikling` | `frontend` |
| `backend` | `fullstack-web` |
| `værktøjer` | `cli-automatisering` |
| `forretning` | `produkt` |
| `design` | `data-ai` |
| `ai-agenter` | `maskinlæring` |
| `devops` | `test-sikkerhed` |
| `dokumentation` | `indhold-medier` |
| `kommunikation` | `ukategoriseret` |</details>

>**ℹ️**Skill-versionen er uafhængig af npm-pakkeversionen. Hvis en indfødt færdighed endnu ikke har frontmatter, vil den blive accepteret med advarsler og aflede midlertidige metadata fra mappe, titel og brødtekst.---

## ⚙️ Runtime Contributions

Hvis du trykker på `pakker/cli/`, `pakker/katalog-kerne/`, `pakker/server-*/` eller bygger scripts:

- 📦 Hold `dist/` og dokumenter på linje med implementeringen
- 🔄 Foretrækker at genbruge `pakker/katalog-kerne` i stedet for at duplikere kataloglogik
- 🔒 Hold lokal skriveadfærd bag forhåndsvisning eller dry-run standarder
- 🔌 Hold MCP-skribenter disciplineret - tilføj kun førsteklasses config-forfattere, når klienten har en stabil offentlig konfig-kontrakt
- 🛡️ Behandl sikkerhedsscanneradvarsler som en del af anmeldelseslinjen
- 🧪 Opdater test ved ændring af CLI-kommandoer, transporttilstande eller offentlige endepunkter### 🚧 Important Boundary

| Gør dette ✅ | Gør ikke dette 🚫 |
|:----------------|:----------------|
| Indsend oprindeligt arbejde under `færdigheder/` | Åbn manuelle PR'er, der redigerer `skills_omni/` |
| Lad automatisering håndtere enhancer-kørslen | Tilføj kurateret indhold direkte |
| Fokus på legitim færdighedskvalitet | Omgå det automatiske følgesvend PR-flow |

>**ℹ️**Når en indbygget færdighed i `færdigheder/` opdateres, genbehandler den private forstærker den og opdaterer den forbedrede basislinje.---

## 🔄 Enhancer Outcome States

Under offentlige PR'er med indfødte færdigheder rapporterer forstærkeren en af fire tilstande:

| Stat | Betydning |
|:------|:--------|
| ✅ `afsluttet` | Forbedret derivat genereret rent, kvalificeret til `skills_omni/` |
| ⚠️ `forringet` | Fuldført med tilbagefald eller svagere scorebevægelse — inspicer mere omhyggeligt |
| 🚫 'blokeret' | Stoppet af infrastruktur- eller valideringsårsager — forhindrer automatisk offentliggørelse |
| ❌ 'mislykkedes' | Uventet fejl — kræver vedligeholdelsesundersøgelse |

>**📝 Bidragydere**behøver ikke at løse problemer med forbedringsinfrastrukturen. Ansvaret er at indsende en legitim indfødt færdighed og holde repoen grøn.---

## 🔄 Automatic Release Policy

Når en ændring lander på 'main' og inkluderer:

- `færdigheder/**`
- `skills_omni/**`
- `data/bundles.json`

…lageret udsteder en**pakkeudgivelse automatisk**.### 📋 Version Bump Rule

| Fra | Til | Regel |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` | Patch +1 |
| `0.1.9` | `0.1.10` | Patch +1 |
| `0.1.10` | `0.2.0` | Rul til næste minor, nulstil patch |

> Udgivelsesflowet regenererer katalog/arkiver, begår versionsbumpet, tagger udgivelsen, udgiver npm og opretter GitHub-udgivelsen automatisk.---

## 📝 Commit Conventions

| Præfiks | Brug til |
|:-------|:--------|
| `feat:` | Ny færdighed eller funktion |
| `fix:` | Fejlrettelse |
| `dokumenter:` | Dokumentationsændringer |
| `refaktor:` | Kodeoprydning eller strukturændringer |
| `test:` | Test ændringer |
| `arbejde:` | Vedligeholdelse |---

## ❓ Need Help?

| Kanal | Link |
|:--------|:-----|
| 💬 Spørgsmål | [Åbn en diskussion](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Bugs | [Åbn et nummer](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Tidlig feedback | [Åbn et udkast til PR](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
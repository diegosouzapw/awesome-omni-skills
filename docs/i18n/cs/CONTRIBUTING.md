# 🤝 Contributing to Awesome Omni Skills (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Awesome Omni Skills je veřejný repozitář dovedností, spravovaný repozitář vylepšených derivátů osvědčených postupů a běhové povrchy postavené na tomto katalogu.**
> Příspěvky mohou cílit na obě oblasti, ale obě musí zůstat v souladu s vygenerovanými artefakty a aktuálním chováním CLI.---

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

| Co | Kde |
|:-----|:------|
| 🧠 Dovednosti jsou vytvořeny v | `skills/<název-dovednosti>/SKILL.md` |
| 📖 Šablony a pokyny pro přispěvatele | `docs/contributors/` |
| 🧾 Kanonický PR tok pro nové dovednosti | [Skill PR Workflow](dokumenty/přispěvatelé/SKILL-PR-WORKFLOW.md) |
| 📥 Nativní příchozí dovednosti přistávají pod | `skills/` (jakýkoli jazyk) |
| ✨ Curated vylepšené deriváty | `skills_omni/` (pouze v angličtině, automatizované) |
| 🚫 `skills_omni/` je chráněno | Není otevřeno pro přímý veřejný příspěvek |
| 🔁 Příjem na základě úložiště | Externí dovoz provozovaný správcem stále podléhá „dovednostem/“ a řídí se stejným standardem přezkumu |
| 📖 Runtime a dokumenty o architektuře | `docs/` |
| 📄 Soubory komunity | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Typ | Oblast |
|:-----|:-----|
| 🧠 Přidat nebo zlepšit dovednost | `dovednosti/` |
| 📥 Prohlédněte si příjem PR na základě úložiště | `external-import/<zdroj>` větve zaměřené na `skills/` |
| 🌍 Navrhněte nové upstream úložiště | `REPOSITORY-SOURCES.md` |
| 📖 Aktualizujte pokyny pro přispěvatele | `docs/contributors/` |
| 🖥️ Vylepšete CLI, instalační program nebo skripty | `packages/cli/` a `tools/scripts/` |
| 📦 Vylepšete běh katalogu nebo balíčky protokolů | `balíčky/` |
| 🧪 Zpřísněte testy, kouřové kontroly nebo uvolněte dokumenty | Různé |---

## Rychlý start

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

>**📝 Otevřete PR se zapnutou možností `Povolit úpravy od správců`.**---

## 🧠 Skill Contributions

Dobrá dovednost pro nativní příchozí by měla:

- ✅ Vyřešte konkrétní problém čistě
- ✅ Být opakovaně použitelný napříč projekty
- ✅ Zahrňte pokyny, které může agent skutečně dodržovat
- ✅ Vyvarujte se vágního nebo nadbytečného obsahu
- ✅ Uveďte přesná metadata frontmatu a kompatibility, pokud jsou k dispozici
- ✅ Přistát s vygenerovanými artefakty klasifikace `metadata.json` po spuštění automatizace### 📁 Minimal Structure

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

>**💡 Tip:**Balíčky dovedností na úrovni vydání by měly obsahovat `agenti/`, `reference/`, `examples/` a `scripts/`. Ale sací plocha je záměrně povolená – je povolena minimální nativní příchozí dovednost a potrubí zesilovače generuje silnější derivát.### 🔀 Two Native Intake Paths

Veřejné úložiště přijímá nativní dovednosti dvěma provozními cestami:

| Cesta | Jak to přijde | Přezkoumat očekávání |
|:-----|:---------------|:-------------------|
| 👤 Přímý přispěvatel PR | Lidská větev edituje `skills/` přímo | Ověřte dovednost, generované artefakty a dopad balíčku |
| 📥 Externí příjem na bázi úložiště | Správcem řízený `external-import/<zdroj>` PR importuje dovednosti z jiného recenzovaného úložiště | Ověření dovednosti plus původ, upstream vlastnictví a licenční poznámky |

Obě cesty se dostanou do `skills/`, obě spustí stejný veřejný validátor a obě mohou vytvořit kurátorský doprovodný PR `skills_omni/`.

Pokud chcete místo přímého zaslání dovednosti navrhnout upstream úložiště, upravte [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md). Normální návrh je nyní repo-first:

- zadejte `repo_url`
- ponechejte `branch` jako `auto`, pokud nepotřebujete jinou než výchozí větev
- ponechte `skills_path` jako `auto`, pokud neznáte přesný kořen

Sloučení stále existuje veřejná kontrolní brána, nikoli automatické spouštění synchronizace.### 🌐 Language Policy

| Povrch | Přijímané jazyky |
|:--------|:-------------------|
| 📥 `dovednosti/` (nativní příjem) | Portugalština, angličtina nebo jakýkoli jiný jazyk |
| ✨ `skills_omni/` (kurátorský výstup) | pouze anglicky |

> Soukromý vylepšovač zachová původní zdroj tak, jak byl předložen, a přepíše upravený derivát do angličtiny.

📖 Pro celou větev, ověření a sekvenci kontroly vylepšení použijte [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md).---

## ✅ Required Validation

Před otevřením PR spusťte toto:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<podrobnosti>
<summary>📋 <strong>Co <code>npm run validate</code> regeneruje</strong></summary>

- `metadata.json`
- `skills/<skill>/metadata.json`
- Mapování kanonické taxonomie
- Vyspělost, osvědčené postupy, kvalita a bezpečnostní skóre
- Statické bezpečnostní nálezy
- Volitelný stav skeneru ClamAV a VirusTotal (pokud je nakonfigurován)</details>

>**⚠️ Důležité:**Ověření je smlouva, kterou používají CLI, API, MCP, A2A, manifesty, archivy a automatizace vydání. Zacházejte s vygenerovanými metadaty jako se součástí povrchu recenze, nikoli s výstupem na jedno použití.

Pokud se dotknete značky, metadat balíčku, adres URL úložiště nebo kopie záhlaví úložiště, spusťte také:```bash
npm run repo:metadata:print
```

Tento příkaz vytiskne zdrojově řízený popis GitHubu, domovskou stránku a smlouvu témat odvozenou z `data/project_identity.json`.### 📥 Intake Policy

| Stav | Chování |
|:----------|:---------|
| Chybějící/neúplný frontmatter | ⚠️ Upozornění (neblokuje) |
| Kritická bezpečnostní zjištění | 🚫 Blokuje příjem |
| Tvrdé chyby ověření | 🚫 Blokuje příjem |
| Přísnější redakční standard | Vynuceno ve zvýšeném derivačním toku, nikoli při přirozeném příjmu |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<podrobnosti>
<summary>📋 <strong>Co ověřuje kouřový průkaz</strong></summary>

- ✅ Ověření dovedností
- ✅ Generování katalogu
- ✅ Generování katalogu dokumentů
- ✅ Testovací sada
- ✅ `npm pack --suchý provoz`
- ✅ spouštění API
- ✅ bootování MCP v `stdio`, `stream` a `sse`
- ✅ Bota A2A
- ✅ Ověření archivu a očekávání balení</details>

---

## 📋 Skill Frontmatter

Frontmatter důrazně doporučujeme. Jako základ použijte [Šablonu dovedností](docs/contributors/SKILL-TEMPLATE.md).```yaml
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

<podrobnosti>
<summary>🏷️ <strong>Kategorie kanonické taxonomie</strong></summary>

| Kategorie | Kategorie |
|:---------|:---------|
| "vývoj" | "frontend" |
| `backend` | `fullstack-web` |
| "nástroje" | "cli-automatizace" |
| "podnikání" | "produkt" |
| "design" | `data-ai` |
| "ai-agenti" | "strojové učení" |
| "devops" | "bezpečnostní testování" |
| "dokumentace" | "obsah-média" |
| "komunikace" | "nezařazeno" |</details>

>**ℹ️**Verze dovedností je nezávislá na verzi balíčku npm. Pokud nativní příchozí dovednost ještě nemá frontmatter, bude přijata s varováním a odvozuje dočasná metadata z adresáře, názvu a hlavního textu.---

## ⚙️ Runtime Contributions

Pokud se dotknete `packages/cli/`, `packages/catalog-core/`, `packages/server-*/` nebo sestavení skriptů:

- 📦 Udržujte `dist/` a dokumenty v souladu s implementací
- 🔄 Preferujte opětovné použití „balíčků/jádro katalogu“ namísto duplikování logiky katalogu
- 🔒 Udržujte chování místního zápisu za výchozími nastaveními náhledu nebo suchého běhu
- 🔌 Udržujte zapisovače MCP disciplinované – prvotřídní zapisovače konfigurace přidávejte pouze v případě, že má klient stabilní veřejnou konfigurační smlouvu
- 🛡️ Varování bezpečnostního skeneru zacházejte jako součást kontrolního panelu
- 🧪 Aktualizujte testy při změně příkazů CLI, režimů dopravy nebo veřejných koncových bodů### 🚧 Important Boundary

| Udělej to ✅ | Nedělejte to 🚫 |
|:-----------|:-----------------|
| Odešlete nativní práci pod `skills/` | Otevřete manuální PR, které upravují `skills_omni/` |
| Nechte automatizaci spouštět enhancer | Přidat vybraný obsah přímo |
| Zaměřte se na legitimní kvalitu dovedností | Obejít automatizovaný tok doprovodného PR |

>**ℹ️**Když je nativní dovednost v `dovednostech/` aktualizována, soukromý zlepšovač ji znovu zpracuje a obnoví vylepšenou základní linii.---

## 🔄 Enhancer Outcome States

Během veřejných PR nativních dovedností zesilovač hlásí jeden ze čtyř stavů:

| stát | Význam |
|:------|:--------|
| ✅ "dokončeno" | Vylepšený derivát vytvořený čistě, vhodný pro `skills_omni/` |
| ⚠️ "degradováno" | Dokončeno s nouzovým nebo slabším pohybem skóre – pečlivěji zkontrolujte |
| 🚫 `blokováno` | Zastaveno z důvodů infrastruktury nebo ověření – brání automatickému zveřejnění |
| ❌ „nevyšlo“ | Neočekávaná chyba – vyžaduje prošetření správce |

>**📝 Přispěvatelé**nemusí řešit problémy s infrastrukturou vylepšení. Zodpovědností je předložit legitimní nativní dovednost a udržet repo zelený.---

## 🔄 Automatic Release Policy

Když změna přistane na „hlavní“ a zahrnuje:

- "dovednosti/**".
- `skills_omni/**`
- `data/bundles.json`

…repozitář vydá**automatické uvolnění balíčku**.### 📋 Version Bump Rule

| Od | Komu | Pravidlo |
|:-----|:---|:-----|
| "0.1.0" | "0.1.1" | Patch +1 |
| "0.1.9" | "0.1.10" | Patch +1 |
| "0.1.10" | "0.2.0" | Přejít na další vedlejší, resetovat opravu |

> Průběh vydání regeneruje katalog/archivy, potvrdí změnu verze, označí vydání, publikuje npm a automaticky vytvoří vydání GitHubu.---

## 📝 Commit Conventions

| Předpona | Použití pro |
|:-------|:--------|
| `výkon:` | Nová dovednost nebo funkce |
| `opravit:` | Oprava chyby |
| `docs:` | Změny dokumentace |
| `reaktor:` | Čištění kódu nebo změny struktury |
| `test:` | Testovací změny |
| `práce:` | Údržba |---

## ❓ Need Help?

| Kanál | Odkaz |
|:--------|:-----|
| 💬 Otázky | [Otevřít diskuzi](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Chyby | [Otevřít problém](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Včasná zpětná vazba | [Otevřít návrh PR](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
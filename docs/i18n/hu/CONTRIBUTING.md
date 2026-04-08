# 🤝 Contributing to Awesome Omni Skills (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Az Awesome Omni Skills a készségek nyilvános tárháza, a továbbfejlesztett bevált gyakorlati származékok és a katalógusra épülő futásidejű felületek tárháza.**
> A hozzájárulások bármelyik területet megcélozhatják, de mindkettőnek összhangban kell lennie a generált műtermékekkel és az aktuális CLI viselkedéssel.---

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

| Milyen | Hol |
|:-----|:------|
| 🧠 A készségek szerzői | `készségek/<készségnév>/SKILL.md` |
| 📖 Közreműködői sablonok és útmutatás | `dokumentumok/közreműködők/` |
| 🧾 Kanonikus PR-folyam az új készségekért | [Skill PR-munkafolyamat](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 A natív bejövő készségek | `készségek/` (bármilyen nyelv) |
| ✨ Kurált továbbfejlesztett származékok | `skills_omni/` (csak angolul, automatizált) |
| 🚫 A `skills_omni/` védett | Közvetlen állami hozzájárulásra nem alkalmas |
| 🔁 Repository alapú bevitel | A fenntartó által működtetett külső import továbbra is „készségek/” alá tartozik, és ugyanazt a felülvizsgálati szabványt követik |
| 📖 Futásidejű és építészeti dokumentumok | `dokumentumok/` |
| 📄 Közösségi fájlok | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `KÖZVETÉSI_KÓD.md` |---

## 🎯 Common Contribution Types

| Típus | Terület |
|:-----|:-----|
| 🧠 Képesség hozzáadása vagy fejlesztése | `készségek/` |
| 📥 Tekintse át a repository-alapú beviteli PR | Az `external-import/<forrás>` ágak a `skills/` |
| 🌍 Javaslat egy új upstream adattárra | `REPOSITORY-SOURCES.md` |
| 📖 Közreműködői útmutató frissítése | `dokumentumok/közreműködők/` |
| 🖥️ A CLI, a telepítő vagy a szkriptek javítása | `packages/cli/` és `tools/scripts/` |
| 📦 A katalógus futtatókörnyezetének vagy protokollcsomagjainak javítása | `csomagok/` |
| 🧪 A tesztek szigorítása, a füstellenőrzés vagy a dokumentumok kiadása | Különféle |---

## Gyors kezdés

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

>**📝 Nyissa meg a PR-t úgy, hogy a "Szerkesztések engedélyezése a karbantartóktól" engedélyezve van.**---

## 🧠 Skill Contributions

Egy jó natív bejövő készségnek:

- ✅ Egy adott problémát tisztán megoldani
- ✅ Legyen újra felhasználható projektek során
- ✅ Tartalmazzon utasításokat, amelyeket az ügynök ténylegesen követhet
- ✅ Kerülje a homályos vagy felesleges tartalmat
- ✅ Pontos frontanyag és kompatibilitási metaadatok deklarálása, ha rendelkezésre állnak
- ✅ Földet generált "metadata.json" osztályozási melléktermékekkel az automatizálás után### 📁 Minimal Structure

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

>**💡 Tipp:**A kiadási szintű készségcsomagoknak tartalmazniuk kell az „agents/”, „references/”, „examples/” és „scripts/” elemeket. De a beviteli felület szándékosan megengedő – egy minimális natív bejövő képesség megengedett, és az erősítő folyamat az erősebb származékot generálja.### 🔀 Two Native Intake Paths

A nyilvános adattár kétféle módon fogadja el a natív készségeket:

| Útvonal | Hogyan érkezik | Felülvizsgálati elvárások |
|:-----|:---------------|:--------------------|
| 👤 Közvetlen közreműködő PR | Egy emberi ág közvetlenül szerkeszti a `skills/`-t | Érvényesítse a készségeket, a generált műtermékeket és a köteghatást |
| 📥 Repository alapú külső bevitel | A karbantartó által üzemeltetett `external-import/<forrás>` PR készségeket importál egy másik felülvizsgált adattárból | Érvényesítse a készségeket, valamint a származást, az upstream tulajdonjogot és a licencjegyzeteket |

Mindkét útvonal a „skills/”-ben landol, mindkettő ugyanazt a nyilvános érvényesítőt indítja el, és mindkettő létrehozhat egy kurált „skills_omni/” kísérő PR-t.

Ha egy készség közvetlen elküldése helyett egy upstream adattárat szeretne javasolni, szerkessze a [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md) fájlt. A normál ajánlat most a repo-első:

- adja meg a „repo_url” értéket
- hagyja a `branch`-ot `auto`-ként, hacsak nincs szüksége nem alapértelmezett ágra
- hagyja meg a "skills_path" értéket "auto"-ként, hacsak nem ismeri a pontos gyökeret

Egyesítés továbbra is nyilvános felülvizsgálati kapu, nem automatikus szinkronizálási trigger.### 🌐 Language Policy

| Felület | Elfogadott nyelvek |
|:--------|:--------------------|
| 📥 `készségek/` (natív bevitel) | portugál, angol vagy bármilyen nyelv |
| ✨ `skills_omni/` (kurált kimenet) | csak angolul |

> A privát javító megőrzi a natív forrást a benyújtott formában, és átírja a kurált származékot angolra.

📖 A teljes elágazás, érvényesítés és javító-ellenőrzési sorrendhez használja a [Skill PR Workflow](docs/contributors/SKILL-PR-WORKFLOW.md) alkalmazást.---

## ✅ Required Validation

Futtassa ezt a PR megnyitása előtt:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<részletek>
<summary>📋 <strong>Mit generál újra az <code>npm run valide</code></strong></summary>

- "metadata.json".
- `skills/<készség>/metadata.json`
- Kanonikus taxonómia leképezés
- Érettség, bevált gyakorlatok, minőségi és biztonsági pontszámok
- Statikus biztonsági megállapítások
- Opcionális ClamAV és VirusTotal szkenner állapota (ha be van állítva)</details>

>**⚠️ Fontos:**Az érvényesítés a CLI, API, MCP, A2A, manifesztek, archívumok és kiadásautomatizálás által használt szerződés. A generált metaadatokat az áttekintési felület részeként kell kezelni, nem eldobható kimenetként.

Ha megérinti a márkajelzést, a csomag metaadatait, a repo URL-eket vagy a tárfejléc másolatát, futtassa a következőket is:```bash
npm run repo:metadata:print
```

Ez a parancs kinyomtatja a „data/project_identity.json” fájlból származó forrás által vezérelt GitHub-leírást, kezdőlapot és témakörök szerződését.### 📥 Intake Policy

| Állapot | Viselkedés |
|:----------|:---------|
| Hiányzó/nem teljes frontanyag | ⚠️ Figyelmeztetések (nem blokkol) |
| Kritikus biztonsági megállapítások | 🚫 Blokkolja a bevitelt |
| Kemény érvényesítési hibák | 🚫 Blokkolja a bevitelt |
| Szigorúbb szerkesztői szabvány | Megerősített származékos áramlásban kényszerítve, nem natív bevitelnél |### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<részletek>
<summary>📋 <strong>Amit a füstbérlet érvényesít</strong></summary>

- ✅ Képességellenőrzés
- ✅ Katalógus generálás
- ✅ Dokumentumok katalógus generálása
- ✅ Tesztcsomag
- ✅ `npm pack --dry-run`
- ✅ API rendszerindítás
- ✅ MCP rendszerindítás az "stdio", "stream" és "sse" fájlokban
- ✅ A2A csizma
- ✅ Archívum ellenőrzési és csomagolási elvárások</details>

---

## 📋 Skill Frontmatter

A Frontmatter erősen ajánlott. Használja a [Skill Template]-et (docs/contributors/SKILL-TEMPLATE.md) alapként.```yaml
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

<részletek>
<summary>🏷️ <strong>Kanonikus taxonómiai kategóriák</strong></summary>

| Kategória | Kategória |
|:---------|:---------|
| "fejlesztés" | `frontend` |
| `háttér` | `fullstack-web` |
| "szerszámok" | `kli-automatizálás` |
| "üzleti" | "termék" |
| "tervezés" | `data-ai` |
| "ai-ügynökök" | "gépi tanulás" |
| `devops` | "tesztelési biztonság" |
| "dokumentáció" | "tartalom-média" |
| "kommunikáció" | "besorolatlan" |</details>

>**ℹ️**A Skill verzió független az npm csomag verziójától. Ha egy natív bejövő készség még nem rendelkezik frontanyaggal, akkor a rendszer figyelmeztetésekkel fogadja el, és ideiglenes metaadatokat von le a könyvtárból, a címből és a törzsszövegből.---

## ⚙️ Runtime Contributions

Ha megérinti a `packages/cli/`, a `packages/catalog-core/`, a `packages/server-*/` elemeket, vagy szkripteket készít:

- 📦 Tartsa a dist/-t és a dokumentumokat a megvalósításhoz igazítva
- 🔄 Inkább használja a "packages/catalog-core" újbóli használatát a katalóguslogika megkettőzése helyett
- 🔒 Tartsa a helyi írási viselkedést az előnézeti vagy szárazon futó alapértelmezett értékek mögött
- 🔌 Tartsa fegyelmezetten az MCP-írókat – csak akkor vegyen fel első osztályú konfigurációs írókat, ha az ügyfélnek stabil nyilvános konfigurációs szerződése van
- 🛡️ Kezelje a biztonsági szkenner figyelmeztetéseit a felülvizsgálati sáv részeként
- 🧪 Frissítse a teszteket a CLI-parancsok, szállítási módok vagy nyilvános végpontok módosításakor### 🚧 Important Boundary

| Tedd ezt ✅ | Ne tedd ezt 🚫 |
|:-----------|:------------------|
| Nyújtsa be a natív munkát a „készségek/” | Nyissa meg a `skills_omni/` |
| Hagyja, hogy az automatizálás kezelje a javító futtatását | Közvetlenül adjon hozzá válogatott tartalmat |
| Fókuszban a jogos képzettségminőség | Az automatizált társ PR-folyam megkerülése |

>**ℹ️**Amikor a `skills/` natív készsége frissül, a privát javító újrafeldolgozza azt, és frissíti a továbbfejlesztett alapvonalat.---

## 🔄 Enhancer Outcome States

A natív készségek nyilvános PR-jei során a javító négy állapot egyikét jelenti:

| állam | Jelentése |
|:------|:---------|
| ✅ `befejezve` | Tisztán generált továbbfejlesztett származék, alkalmas a `skills_omni/` |
| ⚠️ `leépült` | Visszaeséssel vagy gyengébb pontmozgással kiegészítve – ellenőrizze alaposabban |
| 🚫 `blokkolva` | Infrastrukturális vagy érvényesítési okokból leállítva – megakadályozza az automatikus közzétételt |
| ❌ "sikertelen" | Váratlan hiba – karbantartói vizsgálat szükséges |

>**📝 A közreműködőknek**nem kell javítaniuk az infrastrukturális problémákat. A felelősség egy legitim natív képesség benyújtása és a repo zöld megőrzése.---

## 🔄 Automatic Release Policy

Amikor egy változás a "fő"-be kerül, és a következőket tartalmazza:

- `készségek/**`
- `skills_omni/**`
- `data/bundles.json`

…a tároló automatikusan kiad egy**csomagkibocsátást**.### 📋 Version Bump Rule

| Feladó | To | szabály |
|:-----|:---|:-----|
| "0.1.0" | "0.1.1" | Patch +1 |
| "0.1.9" | "0.1.10" | Patch +1 |
| "0.1.10" | "0.2.0" | Görgessen a következő minorra, állítsa vissza a javítást |

> A kiadási folyamat újragenerálja a katalógust/archívumot, véglegesíti a verzióleírást, megcímkézi a kiadást, közzéteszi az npm-et, és automatikusan létrehozza a GitHub-verziót.---

## 📝 Commit Conventions

| Előtag | Használja |
|:-------|:---------|
| `feat:` | Új készség vagy funkció |
| `fix:` | Hibajavítás |
| `dokumentumok:` | Változások a dokumentációban |
| "refaktor:" | Kódtisztítás vagy szerkezetmódosítások |
| `teszt:` | Tesztmódosítások |
| `munka:` | Karbantartás |---

## ❓ Need Help?

| Csatorna | Link |
|:--------|:-----|
| 💬 Kérdések | [Egy beszélgetés megnyitása](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Bugs | [Nyisson meg egy problémát](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Korai visszajelzés | [Nyissa meg a PR-tervezetet](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
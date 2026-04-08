# 🛡️ Security Policy (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Ha biztonsági problémát fedez fel az Awesome Omni Skills alkalmazásban, ne nyisson először nyilvános kérdést.**

Kérjük, jelentse az alábbi privát csatornák egyikén:

| Csatorna | Hogyan |
|:--------|:----|
| 🔒 GitHub biztonsági figyelmeztetés | [Nyiss meg egy privát tanácsadót](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Közvetlen kapcsolatfelvétel | Forduljon közvetlenül a karbantartókhoz |### 📋 Include in Your Report

- 📁 Érintett komponens vagy elérési út
- 🔄 Reprodukciós lépések
- ⚠️ Hatásvizsgálat
- 🧪 Bármilyen elméleti bizonyíték a probléma ellenőrzéséhez

>**⏱️ Célunk, hogy a bejelentéseket 48 órán belül**nyugtázzuk, és a hatásoknak megfelelően priorizáljuk a javításokat.---

## 🎯 Scope

Ez a házirend a lerakat futásidejű és tartalmi felületeire vonatkozik:

| Alkatrész | Útvonal |
|:----------|:-----|
| 🖥️ CLI és telepítő | `csomagok/cli/` |
| 📚 Megosztott katalógus futásidejű | `csomagok/katalógusmag/` |
| 🔌 Célok telepítése | `packages/install-targets/` |
| ⚙️ Szkriptek készítése és ellenőrzése | `tools/scripts/` |
| 📦 Generált katalógus-termékek | `dist/` |
| 🌐 API, MCP és A2A csomagok | `packages/server-api/` · `packages/server-mcp/` · `packages/server-a2a/` |
| 🧠 Ügyességi tartalom | `skills/` – különösen shell-parancsok, hálózati hozzáférés, hitelesítési adatfolyamok vagy biztonságérzékeny útmutatás |---

## 🔐 Current Security Model

Az adattár a következő biztonsági ellenőrzésekre támaszkodik:### 🧠 Skill-Level Controls

| Control | Leírás |
|:--------|:------------|
| 🏷️ Kockázati mező | A készségek metaadatai deklarált kockázati szintet tartalmaznak |
| 📊 Pontozás | Az érvényesítés kiszámítja az érettséget, a bevált gyakorlatokat, a minőséget és a biztonsági pontszámokat |
| 🔍 Statikus szkenner | Ellenőrzi a SKILL.md fájlt, a csomagolt fájlokat és a segédszkripteket, és megakadályozza, hogy a kritikus megállapítások bekerüljenek a nyilvános katalógusba |
| 🦠 A rosszindulatú programok ellenőrzésének engedélyezése | A közzétett kiadásokat a ClamAV és a VirusTotal egyaránt ellenőrzi a közzététel előtt |### 🚫 Hard Content Blocks

A nyilvános adattár nem fogad el olyan készségeket, amelyek kioldják a kritikus biztonsági kaput. A jelenlegi kemény blokkolók a következők:

- távoli tartalom közvetlenül a shell-végrehajtásba továbbítva
- utasítások, amelyek megpróbálják felfedni a promptokat, titkokat vagy rejtett futási környezetet

Amikor az érvényesítő megtalálja az egyik ilyen mintát, a készség nem kerül be a nyilvános katalógusba. A külső adattárból történő felvétel során az érvényes testvérek továbbra is folytathatják, miközben a blokkolt készségek ki vannak zárva, és külön jelentik őket.### 🖥️ Runtime Controls

| Control | Leírás |
|:--------|:------------|
| 📁 Útbiztonság | Telepítse az áramlásokat útvonalbiztonsági ellenőrzésekkel |
| 🔒 Engedélyezőlista | A helyi MCP oldalkocsis írásokat egy engedélyezési lista korlátozza |
| 👁️ Szárazfutási alapértékek | Az írásorientált eszközök alapértelmezés szerint szárazon futnak, hacsak nincsenek kifejezetten letiltva |
| 🔐 Hitelesítés és korlátozások | Adathordozó/API-kulcs hitelesítés, rendszergazdai futásidejű hitelesítés, sebességkorlátozás, CORS/IP engedélyezési listák |
| 📋 Audit | Naplónaplózás, karbantartási mód és kérésazonosítók |### 📦 Release Controls

| Control | Leírás |
|:--------|:------------|
| ✅ Ellenőrzőösszeg-nyilatkozatok | SHA-256 ellenőrző összegek generált archívumokhoz |
| ✍️ Aláírások | Leválasztott aláírás ellenőrzése a CI-ben a közzététel előtt |
| 🦠 Kettős szkenneres kapu | A ClamAV-nak és a VirusTotal-nak egyaránt tisztán kell kitöltenie a kiadás közzétételéhez |
| 🧪 Füstellenőrzés | Gyakorolja a szállított futásidejű felületeket a kiadás előtt |---

## 🔮 What Is Still Open

> A hátralévő fő biztonsági munka a**nem**alapvonal-megerősítés. A nyitott tételek a következők:

| Terület | Állapot |
|:-----|:-------|
| 🏢 Vállalatirányítás | Külső identitás, átjáróházirend és WAF-integráció a jelenlegi folyamaton belüli ellenőrzések felett |
| 🔌 MCP kliens írók | Csak akkor írj szélesebb kört, ha a nyilvános konfigurációs szerződések elég stabilak |
| 📊 Szkenner finomítás | Folyamatos finomítás, hogy a kivételes készségek egyértelműen elkülönüljenek a pusztán jól strukturáltoktól |---

## ⚠️ Risk Levels in Skills

Minden készség deklarál egyet a következő „kockázati” szintek közül:

| Kockázati szint | Jelentése |
|:-----------|:--------|
| 🟢 `biztonságos` | Nem várható romboló művelet |
| 🟡 `vigyázat` | Módosíthatja a fájlokat vagy kölcsönhatásba léphet külső rendszerekkel |
| 🔴 `sértő` | Biztonsági tesztelés vagy kontradiktórius munkafolyamatok, amelyek kifejezett engedélyt igényelnek |
| ⛔ `kritikus' | Nagy hatású vagy rendszerszintű műveletek |---

## 📋 Disclosure Notes

Mivel az Awesome Omni Skills futtatható segédprogramokat, fájlrendszer-tudatos helyi eszközöket és ügyfélspecifikus konfigurációírókat tartalmaz, ezeket a sebezhetőségi osztályokat**magas prioritású**ként kell kezelni, még akkor is, ha „csak helyinek” tűnnek:

| Kategória | Példák |
|:---------|:---------|
| 📁 Út bejárás | Címtár-kilépés készségtelepítésen vagy konfigurációs útvonalon keresztül |
| 🔗 Symlink safety | Symlink követés a telepítés vagy az archívum kibontása közben |
| 🖥️ Parancs végrehajtás | Tetszőleges parancsinjektálás képességtartalom vagy szkriptek segítségével |
| 📦 Archívum ellenőrzése | Az ellenőrzőösszeg megkerülése vagy az aláírás ellenőrzése |
| 🔓 Auth bypass | Sebességkorlátozás vagy hitelesítés megkerülése API/MCP-n |
| 🔌 Az engedélyezési lista megkerülése | Helyi oldalkocsis engedélyezési lista megkerülése |
| 🦠 Szkenner kijátszása | Hamis negatív osztályok statikus vagy külső szkennerekben |
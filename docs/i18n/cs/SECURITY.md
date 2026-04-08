# 🛡️ Security Policy (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Pokud v Awesome Omni Skills objevíte problém se zabezpečením, neotevírejte nejprve veřejný problém.**

Nahlaste se prosím prostřednictvím jednoho z těchto soukromých kanálů:

| Kanál | Jak |
|:--------|:----|
| 🔒 Bezpečnostní upozornění GitHub | [Otevřít soukromou poradnu](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Přímý kontakt | Kontaktujte přímo správce |### 📋 Include in Your Report

- 📁 Dotčená součást nebo cesta
- 🔄 Kroky reprodukce
- ⚠️ Posouzení dopadů
- 🧪 Jakýkoli důkaz o konceptu potřebný k ověření problému

>**⏱️ Naším cílem je přijímat hlášení do 48 hodin**a upřednostňovat opravy podle dopadu.---

## 🎯 Scope

Tato zásada se vztahuje na běhové prostředí a povrchy obsahu úložiště:

| Komponenta | Cesta |
|:----------|:-----|
| 🖥️ CLI a instalační program | `packages/cli/` |
| 📚 Runtime sdíleného katalogu | `balíčky/jádro katalogu/` |
| 🔌 Instalovat cíle | `packages/install-targets/` |
| ⚙️ Sestavení a ověřovací skripty | `nástroje/skripty/` |
| 📦 Generované artefakty katalogu | `dist/` |
| 🌐 Balíčky API, MCP a A2A | `packages/server-api/` · `packages/server-mcp/` · `packages/server-a2a/` |
| 🧠 Obsah dovedností | `skills/` — zejména příkazy shellu, přístup k síti, toky pověření nebo pokyny citlivé na zabezpečení |---

## 🔐 Current Security Model

Úložiště spoléhá na následující bezpečnostní kontroly:### 🧠 Skill-Level Controls

| Ovládání | Popis |
|:--------|:-----------|
| 🏷️ Rizikové pole | Metadata dovedností zahrnují deklarovanou úroveň „rizika“ |
| 📊 Bodování | Validace počítá vyspělost, osvědčené postupy, kvalitu a skóre bezpečnosti |
| 🔍 Statický skener | Kontroluje `SKILL.md`, zabalené soubory a pomocné skripty a blokuje kritická zjištění před vstupem do veřejného katalogu |
| 🦠 Vydání ověření malwaru | Publikované verze jsou před zveřejněním ověřeny pomocí ClamAV i VirusTotal |### 🚫 Hard Content Blocks

Veřejné úložiště nepřijímá dovednosti, které narušují kritickou bezpečnostní bránu. Mezi současné tvrdé blokátory patří:

- vzdálený obsah přenášený přímo do provádění shellu
- instrukce, které se pokoušejí odhalit výzvy, tajemství nebo skrytý kontext běhu

Když validátor najde jeden z těchto vzorů, dovednost nevstoupí do veřejného katalogu. V příjmu z externího úložiště mohou platní sourozenci stále pokračovat, zatímco blokované dovednosti jsou vyloučeny a hlášeny samostatně.### 🖥️ Runtime Controls

| Ovládání | Popis |
|:--------|:-----------|
| 📁 Bezpečnost cesty | Instalujte toky pomocí kontroly bezpečnosti cesty |
| 🔒 Seznam povolených píše | Zápisy místního postranního vozíku MCP jsou omezeny seznamem povolených |
| 👁️ Výchozí nastavení běhu nasucho | Nástroje orientované na zápis mají ve výchozím nastavení suché spuštění, pokud nejsou výslovně zakázány |
| 🔐 Ověření a limity | Ověření nosiče/klíče API, ověření za běhu správce, omezení rychlosti, seznamy povolených CORS/IP |
| 📋 Audit | Protokolování auditu, režim údržby a ID požadavků |### 📦 Release Controls

| Ovládání | Popis |
|:--------|:-----------|
| ✅ Manifesty kontrolního součtu | Kontrolní součty SHA-256 pro generované archivy |
| ✍️ Podpisy | Ověření odděleného podpisu v CI před zveřejněním |
| 🦠 Duální brána skeneru | ClamAV a VirusTotal oba musí být dokončeny čistě pro vydání publikace |
| 🧪 Kouřové kontroly | Cvičení dodávané runtime povrchy před vydáním |---

## 🔮 What Is Still Open

> Hlavní zbývající práce na zabezpečení je**ne**základní zpevnění. Otevřené položky jsou:

| Oblast | Stav |
|:-----|:-------|
| 🏢 Řízení podniku | Externí identita, politika brány a integrace WAF nad současnými kontrolami v procesu |
| 🔌 Autoři klientů MCP | Širší zapisovače pouze v případě, že veřejné konfigurační smlouvy jsou dostatečně stabilní |
| 📊 Vylepšení skeneru | Pokračující zdokonalování, takže výjimečné dovednosti zůstávají jasně odděleny od pouze dobře strukturovaných |---

## ⚠️ Risk Levels in Skills

Každá dovednost deklaruje jednu z těchto „rizikových“ úrovní:

| Úroveň rizika | Význam |
|:-----------|:--------|
| 🢢 "bezpečné" | Neočekávají se žádné destruktivní operace |
| 🡨 "pozor" | Může upravovat soubory nebo komunikovat s externími systémy |
| 🔴 "urážlivý" | Testování zabezpečení nebo nepříznivé pracovní postupy vyžadující výslovnou autorizaci |
| ⛔ "kritický" | Operace s vysokým dopadem nebo operace na úrovni systému |---

## 📋 Disclosure Notes

Protože Awesome Omni Skills dodává spustitelné pomocníky, místní nástroje s ohledem na souborový systém a zapisovače konfigurací specifické pro klienty, měly by být tyto třídy zranitelnosti považovány za**s vysokou prioritou**, i když vypadají „pouze místní“:

| Kategorie | Příklady |
|:---------|:---------|
| 📁 Procházení cesty | Únik adresáře pomocí instalačních nebo konfiguračních cest |
| 🔗 Symlink bezpečnost | Následující symbolický odkaz během instalace nebo extrakce archivu |
| 🖥️ Provedení příkazu | Libovolné vkládání příkazů prostřednictvím obsahu dovedností nebo skriptů |
| 📦 Ověření archivu | Vynechání kontrolního součtu nebo ověření podpisu |
| 🔓 Auth bypass | Omezení rychlosti nebo autentizace na API/MCP |
| 🔌 Obcházení seznamu povolených | Obcházení seznamu povolených místních sajdkár |
| 🦠 Únik skeneru | Falešně negativní třídy ve statických nebo externích skenerech |
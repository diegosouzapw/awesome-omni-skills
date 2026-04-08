# 🛡️ Security Policy (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Als je een beveiligingsprobleem ontdekt in Awesome Omni Skills, open dan niet eerst een openbaar probleem.**

Meld het via een van deze privékanalen:

| Kanaal | Hoe |
|:--------|:----|
| 🔒 GitHub-beveiligingsadvies | [Open een privéadvies](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Direct contact | Neem rechtstreeks contact op met de beheerders |### 📋 Include in Your Report

- 📁 Betrokken onderdeel of pad
- 🔄 Reproductiestappen
- ⚠️ Impactbeoordeling
- 🧪 Al het proof-of-concept-materiaal dat nodig is om het probleem te verifiëren

>**⏱️ We streven ernaar meldingen binnen 48 uur te bevestigen**en prioriteit te geven aan oplossingen op basis van de impact.---

## 🎯 Scope

Dit beleid heeft betrekking op de runtime- en inhoudsoppervlakken van de repository:

| Onderdeel | Pad |
|:----------|:-----|
| 🖥️ CLI en installatieprogramma | `pakketten/cli/` |
| 📚 Runtime van gedeelde catalogus | `pakketten/catalog-core/` |
| 🔌 Doelen installeren | `pakketten/install-targets/` |
| ⚙️ Bouw- en validatiescripts | `tools/scripts/` |
| 📦 Gegenereerde catalogusartefacten | `dist/` |
| 🌐 API-, MCP- en A2A-pakketten | `pakketten/server-api/` · `pakketten/server-mcp/` · `pakketten/server-a2a/` |
| 🧠 Vaardigheidsinhoud | `skills/` — vooral shell-opdrachten, netwerktoegang, inlogstromen of beveiligingsgevoelige begeleiding |---

## 🔐 Current Security Model

De repository is afhankelijk van de volgende beveiligingsmaatregelen:### 🧠 Skill-Level Controls

| Controle | Beschrijving |
|:--------|:-----------|
| 🏷️ Risicoveld | Metagegevens van vaardigheden bevatten een aangegeven 'risiconiveau' |
| 📊 Scoren | Validatie berekent volwassenheid, best practices, kwaliteit en beveiligingsscores |
| 🔍 Statische scanner | Inspecteert `SKILL.md`, verpakte bestanden en helperscripts, en blokkeert kritieke bevindingen zodat ze niet in de openbare catalogus terechtkomen |
| 🦠 Malwareverificatie vrijgeven | Gepubliceerde releases worden vóór publicatie geverifieerd met zowel ClamAV als VirusTotal |### 🚫 Hard Content Blocks

De openbare repository accepteert geen vaardigheden die de kritische beveiligingspoort activeren. Huidige harde blokkers zijn onder meer:

- inhoud op afstand die rechtstreeks naar de shell-uitvoering wordt geleid
- instructies die proberen aanwijzingen, geheimen of verborgen runtimecontext te onthullen

Wanneer de validator een van die patronen vindt, komt de vaardigheid niet in de openbare catalogus terecht. Bij externe opname kunnen geldige broers en zussen nog steeds doorgaan, terwijl de geblokkeerde vaardigheden worden uitgesloten en afzonderlijk worden gerapporteerd.### 🖥️ Runtime Controls

| Controle | Beschrijving |
|:--------|:-----------|
| 📁 Padveiligheid | Installatiestromen gebruiken padveiligheidscontroles |
| 🔒 Toelatingslijst schrijft | Lokale MCP-zijspanschrijfbewerkingen worden beperkt door een toelatingslijst |
| 👁️ Standaardwaarden voor drooglopen | Schrijfgerichte tools zijn standaard in de droogmodus, tenzij expliciet uitgeschakeld |
| 🔐 Authenticatie en limieten | Verificatie via drager/API-sleutel, verificatie tijdens runtime van beheerder, snelheidsbeperking, CORS/IP-toelatingslijsten |
| 📋 Controle | Auditregistratie, onderhoudsmodus en aanvraag-ID's |### 📦 Release Controls

| Controle | Beschrijving |
|:--------|:-----------|
| ✅ Checksum-manifesten | SHA-256-controlesommen voor gegenereerde archieven |
| ✍️ Handtekeningen | Vrijstaande handtekeningverificatie in CI vóór publicatie |
| 🦠 Dubbele scannerpoort | ClamAV en VirusTotal moesten beide netjes worden voltooid voor publicatie van de release |
| 🧪 Rookcontroles | Oefen verscheept runtime-oppervlakken vóór release |---

## 🔮 What Is Still Open

> Het voornaamste resterende veiligheidswerk is**niet**het versterken van de basislijn. De openstaande posten zijn:

| Gebied | Staat |
|:-----|:-------|
| 🏢 Ondernemingsbestuur | Externe identiteit, gatewaybeleid en WAF-integratie boven de huidige controles tijdens het proces |
| 🔌 MCP-clientschrijvers | Bredere schrijvers alleen als openbare configuratiecontracten stabiel genoeg zijn |
| 📊 Scannerverfijning | Voortdurende verfijning zodat uitzonderlijke vaardigheden duidelijk gescheiden blijven van louter goed gestructureerde vaardigheden |---

## ⚠️ Risk Levels in Skills

Elke vaardigheid geeft een van deze ‘risiconiveaus’ aan:

| Risiconiveau | Betekenis |
|:-----------|:--------|
| 🟢 `veilig` | Geen destructieve operaties verwacht |
| 🟡 `let op` | Kan bestanden wijzigen of communiceren met externe systemen |
| 🔴`beledigend` | Beveiligingstests of vijandige workflows waarvoor expliciete autorisatie vereist is |
| ⛔ `kritisch` | Operaties met grote impact of op systeemniveau |---

## 📋 Disclosure Notes

Omdat Awesome Omni Skills uitvoerbare helpers, bestandssysteembewuste lokale tools en klantspecifieke configuratieschrijvers levert, moeten deze kwetsbaarheidsklassen als**hoge prioriteit**worden behandeld, zelfs als ze "alleen lokaal" verschijnen:

| Categorie | Voorbeelden |
|:---------|:---------|
| 📁 Padovergang | Directory-escape via vaardigheidsinstallatie of configuratiepaden |
| 🔗 Symlink veiligheid | Symlink volgt tijdens installatie of archiefextractie |
| 🖥️Commando-uitvoering | Willekeurige commando-injectie via vaardigheidsinhoud of scripts |
| 📦 Archiefverificatie | Omzeilen van controlesom of handtekeningverificatie |
| 🔓 Verificatie omzeilen | Snelheidsbeperking of authenticatie omzeilen op API/MCP |
| 🔌 Toelatingslijst omzeilen | Lokale zijspan-toelatingslijst omzeilen |
| 🦠 Scannerontwijking | Vals-negatieve klassen in statische of externe scanners |
# 🛡️ Security Policy (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Jos huomaat tietoturvaongelman Awesome Omni Skillsissa, älä avaa julkista ongelmaa ensin.**

Ilmoita jollakin näistä yksityisistä kanavista:

| Kanava | Miten |
|:--------|:----|
| 🔒 GitHubin tietoturvatiedote | [Avaa yksityinen neuvonta](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Suora yhteys | Ota yhteyttä suoraan ylläpitäjiin |### 📋 Include in Your Report

- 📁 Vaikutettu komponentti tai polku
- 🔄 Lisääntymisvaiheet
- ⚠️ Vaikutustenarviointi
- 🧪 Kaikki ongelman vahvistamiseen tarvittavat todisteet

>**⏱️ Pyrimme kuittaamaan ilmoitukset 48 tunnin kuluessa**ja priorisoimaan korjaukset vaikutuksen mukaan.---

## 🎯 Scope

Tämä käytäntö kattaa arkiston suoritusajan ja sisältöpinnat:

| Komponentti | Polku |
|:----------|:-----|
| 🖥️ CLI ja asentaja | `paketit/cli/` |
| 📚 Jaetun katalogin käyttöaika | `paketit/catalog-core/` |
| 🔌 Asenna kohteet | `packages/install-targets/` |
| ⚙️ Rakenna ja vahvista komentosarjoja | `tools/scripts/` |
| 📦 Luodut katalogin esineet | `dist/` |
| 🌐 API-, MCP- ja A2A-paketit | `packages/server-api/` · `packages/server-mcp/` · `packages/server-a2a/` |
| 🧠 Taitosisältö | "taidot/" — erityisesti komentotulkkikomennot, verkkoon pääsy, tunnistetiedot tai tietoturvaan liittyvät ohjeet |---

## 🔐 Current Security Model

Tietovarasto perustuu seuraaviin suojausohjaimiin:### 🧠 Skill-Level Controls

| Ohjaus | Kuvaus |
|:--------|:------------|
| 🏷️ Riskikenttä | Taitojen metatiedot sisältävät ilmoitetun "riskitason" |
| 📊 Pisteet | Validointi laskee kypsyyden, parhaat käytännöt, laatu- ja turvallisuuspisteet |
| 🔍 Staattinen skanneri | Tarkistaa `SKILL.md', pakatut tiedostot ja apuohjelmat ja estää kriittisten löydösten pääsyn julkiseen luetteloon |
| 🦠 Vapauta haittaohjelmien vahvistus | Julkaistut julkaisut tarkistetaan sekä ClamAV:lla että VirusTotalilla ennen julkaisemista |### 🚫 Hard Content Blocks

Julkinen tietovarasto ei hyväksy taitoja, jotka laukaisevat kriittisen turvaportin. Nykyiset kovat estoaineet sisältävät:

- etäsisältö suoraan komentotulkin suorittamiseen
- ohjeet, jotka yrittävät paljastaa kehotteita, salaisuuksia tai piilotetun ajonaikaisen kontekstin

Kun validoija löytää jonkin näistä malleista, taito ei pääse julkiseen luetteloon. Ulkopuolisen arkiston vastaanotossa kelvolliset sisarukset voivat silti jatkaa, kun estyneet taidot on jätetty pois ja raportoitu erikseen.### 🖥️ Runtime Controls

| Ohjaus | Kuvaus |
|:--------|:------------|
| 📁 Polkuturvallisuus | Asenna virrat käytä reitin turvatarkastuksia |
| 🔒 Sallittujen lista kirjoittaa | Paikallinen MCP-sivuvaunu kirjoittaa sallittujen luettelon |
| 👁️ Kuivakäyntioletukset | Kirjoitussuuntautuneiden työkalujen oletusarvo on kuivakäyttö, ellei niitä ole erikseen poistettu käytöstä |
| 🔐 Todennus ja rajoitukset | Bearer/API-avaimen todennus, järjestelmänvalvojan ajonaikainen todennus, nopeuden rajoitus, CORS/IP-sallitut luettelot |
| 📋 Audit | Tarkastusloki, ylläpitotila ja pyyntötunnukset |### 📦 Release Controls

| Ohjaus | Kuvaus |
|:--------|:------------|
| ✅ Tarkistussumma manifestit | SHA-256-tarkistussummat luoduille arkistoille |
| ✍️ Allekirjoitukset | Irrotetun allekirjoituksen varmennus CI:ssä ennen julkaisemista |
| 🦠 Kaksoisskanneriportti | Sekä ClamAV että VirusTotal on suoritettava puhtaasti julkaisun julkaisemista varten |
| 🧪 Savutarkastukset | Harjoittele toimitetut ajonaikaiset pinnat ennen julkaisua |---

## 🔮 What Is Still Open

> Pääasiallinen jäljellä oleva turvallisuustyö on**ei**perustason karkaisu. Avoimet kohteet ovat:

| Alue | Tila |
|:-----|:-------|
| 🏢 Yrityksen hallinto | Ulkoinen identiteetti, yhdyskäytäväkäytäntö ja WAF-integrointi nykyisten prosessinaikaisten ohjausten yläpuolella |
| 🔌 MCP-asiakaskirjoittajat | Laajemmat kirjoittajat vain, kun julkiset konfigurointisopimukset ovat riittävän vakaat |
| 📊 Skannerin hienosäätö | Jatketaan hienostuneisuutta, jotta poikkeukselliset taidot pysyvät selvästi erotettuina vain hyvin jäsennellyistä |---

## ⚠️ Risk Levels in Skills

Jokainen taito ilmoittaa yhden näistä "riskitasoista":

| Riskitaso | Merkitys |
|:-----------|:--------|
| 🟢 `turvallinen` | Tuhoisia operaatioita ei odoteta |
| 🟡 `varoitus` | Voi muokata tiedostoja tai olla vuorovaikutuksessa ulkoisten järjestelmien kanssa |
| 🔴 `loukkaavaa` | Suojaustestaus tai kontradiktoriset työnkulut, jotka vaativat nimenomaisen valtuutuksen |
| ⛔ "kriittinen" | Vaikuttavat tai järjestelmätason toiminnot |---

## 📋 Disclosure Notes

Koska Awesome Omni Skills toimittaa suoritettavia apuohjelmia, tiedostojärjestelmätietoisia paikallisia työkaluja ja asiakaskohtaisia asetusten kirjoittajia, näitä haavoittuvuusluokkia tulee käsitellä**korkean prioriteetin**, vaikka ne näyttäisivät olevan "vain paikallisia":

| Luokka | Esimerkkejä |
|:---------|:---------|
| 📁 Polun läpikulku | Hakemiston paeta taitojen asennus- tai konfigurointipolkujen kautta |
| 🔗 Symlink-turvallisuus | Symlink-linkki seuraa asennuksen tai arkiston purkamisen aikana |
| 🖥️ Komennon suoritus | Mielivaltainen komentojen lisääminen taitosisällön tai komentosarjojen kautta |
| 📦 Arkiston vahvistus | Tarkistussumman tai allekirjoituksen tarkastuksen ohittaminen |
| 🔓 Todennuksen ohitus | Nopeuden rajoittaminen tai todennuksen ohitus API/MCP:ssä |
| 🔌 Sallittujen listan ohitus | Paikallinen sivuvaunujen sallittujen luettelon kiertäminen |
| 🦠 Skannerin kiertäminen | Väärin negatiiviset luokat staattisissa tai ulkoisissa skannereissa |
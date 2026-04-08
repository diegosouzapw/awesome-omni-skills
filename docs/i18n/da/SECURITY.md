# 🛡️ Security Policy (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Hvis du opdager et sikkerhedsproblem i Awesome Omni Skills, skal du ikke åbne et offentligt problem først.**

Rapportér venligst via en af disse private kanaler:

| Kanal | Hvordan |
|:--------|:----|
| 🔒 GitHub sikkerhedsrådgivning | [Åbn en privat rådgivning](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Direkte kontakt | Kontakt vedligeholdere direkte |### 📋 Include in Your Report

- 📁 Berørt komponent eller sti
- 🔄 Reproduktionstrin
- ⚠️ Konsekvensanalyse
- 🧪 Ethvert proof-of-concept materiale, der er nødvendigt for at verificere problemet

>**⏱️ Vi bestræber os på at anerkende rapporter inden for 48 timer**og prioritere rettelser efter effekt.---

## 🎯 Scope

Denne politik dækker lagerets køretid og indholdsoverflader:

| Komponent | Sti |
|:----------|:-----|
| 🖥️ CLI og installatør | `pakker/cli/` |
| 📚 Delt katalog runtime | `pakker/katalog-kerne/` |
| 🔌 Installer mål | `pakker/install-mål/` |
| ⚙️ Byg og valideringsscripts | `værktøjer/scripts/` |
| 📦 Genererede katalogartefakter | `dist/` |
| 🌐 API-, MCP- og A2A-pakker | `pakker/server-api/` · `pakker/server-mcp/` · `pakker/server-a2a/` |
| 🧠 Færdighedsindhold | `skills/` — især shell-kommandoer, netværksadgang, legitimationsstrømme eller sikkerhedsfølsom vejledning |---

## 🔐 Current Security Model

Depotet er afhængigt af følgende sikkerhedskontroller:### 🧠 Skill-Level Controls

| Kontrol | Beskrivelse |
|:--------|:--------|
| 🏷️ Risikofelt | Færdighedsmetadata inkluderer et erklæret `risiko` niveau |
| 📊 Scoring | Validering beregner modenhed, bedste praksis, kvalitet og sikkerhedsresultater |
| 🔍 Statisk scanner | Inspicerer `SKILL.md`, pakkede filer og hjælpescripts og blokerer kritiske fund fra at komme ind i det offentlige katalog |
| 🦠 Frigiv malware-bekræftelse | Udgivne udgivelser verificeres med både ClamAV og VirusTotal før offentliggørelse |### 🚫 Hard Content Blocks

Det offentlige depot accepterer ikke færdigheder, der udløser den kritiske sikkerhedsport. Nuværende hårde blokkere inkluderer:

- Fjernindhold, der sendes direkte til shell-udførelse
- instruktioner, der forsøger at afsløre prompter, hemmeligheder eller skjult runtime-kontekst

Når validatoren finder et af disse mønstre, kommer færdigheden ikke ind i det offentlige katalog. I eksternt depotindtag kan gyldige søskende stadig fortsætte, mens de blokerede færdigheder udelukkes og rapporteres separat.### 🖥️ Runtime Controls

| Kontrol | Beskrivelse |
|:--------|:--------|
| 📁 Stisikkerhed | Installer flows brug vejsikkerhedstjek |
| 🔒 Tilladelseslisten skriver | Lokal MCP sidevogn skriver begrænset af en tilladelsesliste |
| 👁️ Dry-run standarder | Skriveorienterede værktøjer som standard til tør-kørsel, medmindre de udtrykkeligt er deaktiveret |
| 🔐 Godkendelse og grænser | Bærer/API-nøglegodkendelse, admin runtime-godkendelse, hastighedsbegrænsning, CORS/IP-tilladelseslister |
| 📋 Revision | Revisionslogning, vedligeholdelsestilstand og anmodnings-id'er |### 📦 Release Controls

| Kontrol | Beskrivelse |
|:--------|:--------|
| ✅ Kontrolsummanifester | SHA-256 kontrolsummer for genererede arkiver |
| ✍️ Underskrifter | Adskilt signaturverifikation i CI før offentliggørelse |
| 🦠 Dobbelt scanner gate | ClamAV og VirusTotal kræves begge for at fuldføre rent for udgivelsespublikation |
| 🧪 Røgtjek | Træn de afsendte runtime-overflader før frigivelse |---

## 🔮 What Is Still Open

> Det vigtigste tilbageværende sikkerhedsarbejde er**ikke**basislinjehærdning. De åbne poster er:

| Område | Status |
|:-----|:-------|
| 🏢 Virksomhedsledelse | Ekstern identitet, gateway-politik og WAF-integration over nuværende kontroller i processen |
| 🔌 MCP-klientskribenter | Bredere forfattere kun, når offentlige konfigurationskontrakter er stabile nok |
| 📊 Scannerforfining | Fortsat forfining, så exceptionelle færdigheder forbliver klart adskilt fra blot velstrukturerede færdigheder |---

## ⚠️ Risk Levels in Skills

Hver færdighed erklærer et af disse "risiko"-niveauer:

| Risikoniveau | Betydning |
|:-----------|:--------|
| `sikker` | Ingen destruktive operationer forventes |
| 🟡 `forsigtig` | Kan ændre filer eller interagere med eksterne systemer |
| 🔴 `offensiv` | Sikkerhedstestning eller modstridende arbejdsgange, der kræver eksplicit autorisation |
| ⛔ `kritisk` | Operationer med stor effekt eller systemniveau |---

## 📋 Disclosure Notes

Fordi Awesome Omni Skills sender eksekverbare hjælpere, filsystembevidste lokale værktøjer og klientspecifikke konfigurationsskrivere, bør disse sårbarhedsklasser behandles som**høj prioritet**, selvom de vises "kun lokalt":

| Kategori | Eksempler |
|:--------|:--------|
| 📁 Stigennemgang | Directory escape via færdighedsinstallations- eller config-stier |
| 🔗 Symlink sikkerhed | Symlink følger under installation eller arkivudtrækning |
| 🖥️ Kommandoudførelse | Vilkårlig kommandoindsprøjtning via færdighedsindhold eller scripts |
| 📦 Arkivbekræftelse | Omgåelse af kontrolsum eller signaturbekræftelse |
| 🔓 Auth bypass | Satsbegrænsende eller autentificeringsomgåelse på API/MCP |
| 🔌 Bypass tilladelsesliste | Omgåelse af lokal sidevognstilladelsesliste |
| 🦠 Skannerunddragelse | Falsk-negative klasser i statiske eller eksterne scannere |
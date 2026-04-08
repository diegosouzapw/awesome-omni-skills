# 🗂️ Project Structure (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Täydellinen hakemisto- ja tiedostoviite Awesome Omni Skills -monorepoon.**---

## 📊 At a Glance

```text
awesome-omni-skills/
├── .github/                    # GitHub Actions and PR templates
├── .githooks/                  # Local Git hooks
├── data/                       # Static project data and bundle definitions
├── dist/                       # Generated runtime artifacts (committed)
├── docs/                       # All project documentation
├── packages/                   # Monorepo workspaces (runtime code)
├── skills/                     # Native skill catalog (154 skills)
├── skills_omni/                # Curated English derivatives (110 skills)
├── tools/                      # Build, validation, and test scripts
└── [root files]                # Package config, community files, licenses
```

---

## 📂 Directory Reference

### `skills/`

>**Alkuperäinen taitoluettelo.**Tämä on projektin ensisijainen julkinen sisältöpinta.

Sisältää**154**taitohakemistoa, joista jokaisessa on vähintään SKILL.md-pelikirja. Suuremmat taidot voivat sisältää alihakemistot agents/, referes/, examples/, scripts/ ja assets/.

Taidot saapuvat kahta polkua pitkin:
-**Suoran avustajan PR:t**– ihmiset välittävät taitoja suoraan
-**Arkistopohjainen ulkoinen tuonti**- tarkistetut "external-import/*" PR:t ylävirran arkistoista

| Mitä se sisältää | Esimerkki |
|:-----------------|:---------|
| `skills/omni-figma/SKILL.md` | Figma design-to-code -taito |
| `skills/architecture/SKILL.md` | Arkkitehtuurin arviointi- ja suunnittelutaidot |
| `skills/<nimi>/metadata.json` | Automaattisesti luotu luokittelu ja pisteytys |---

### `skills_omni/`

>**Kuroidut parannetut vain englanninkieliset johdannaiset.**Ylläpitää yksityinen parannusputki.

Sisältää**110**paranneltua taitohakemistoa, jotka peilaavat ja parantavat alkuperäisiä vastineitaan `skills/` -kentässä. Tämä pinta**ei ole avoin suoralle julkiselle panokselle**– se on asutettu yksinomaan automatisoidun tehostimen putkilinjan avulla.

Jokainen johdannainen säilyttää alkuperäisen lähteensä määrittelyn ja tarjoaa korkeamman toimituksellisen standardin aina englanniksi.---

### `packages/`

>**Monorepo-työtilat.**Kaikki ajonaikainen Node.js-koodi on täällä.

| Paketti | npm Nimi | Tarkoitus |
|:--------|:---------|:---------|
| 📂 `paketit/catalog-core/` | `@omni-skills/catalog-core` | Jaettu luettelon suoritusaika ICatalogStorageAdapter-riippuvuuslisäyksellä. Tarjoaa haku-, pisteytys-, vertailu-, suositus- ja asennussuunnitelmalogiikan, jota kaikki palvelinpinnat käyttävät |
| 📂 `paketit/cli/` | (juuripakkauslaatikko) | Yhdistetyt CLI-alkupisteet, ohjattu asennusohjelma, Ink visuaalinen TUI, diagnostiikka, savutarkistukset ja huoltokäynnistimet. ESM-natiivi |
| 📂 `paketit/asennuskohteet/` | `@omni-skills/install-targets` | Yhdeksän asennuskykyisen asiakkaan rekisteri (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) polun resoluutiolla ja lippujen kartoituksella |
| 📂 `paketit/palvelin-api/` | `@omni-skills/server-api` | Vain luku -muotoinen HTTP-luettelosovellusliittymä, jossa on OpenAPI 3.1, Swagger-käyttöliittymä `/docsissa', todennus, nopeuden rajoitus, CORS/IP-sallitut luettelot, lataukset ja järjestelmänvalvojan suoritusaika |
| 📂 `paketit/palvelin-mcp/` | `@omni-skills/server-mcp` | MCP-palvelin, joka tukee "stdio", "stream" ja "sse" siirtoja. Paikallinen sivuvaunutila lisää tiedostojärjestelmätietoiset asennus-/poistotyökalut ja asiakastietoisen MCP-asetusten kirjoittamisen 16 konfigurointikykyiselle asiakkaalle |
| 📂 `paketit/palvelin-a2a/` | `@omni-skills/server-a2a` | A2A (Agent-to-Agent) -tehtävän suoritusaika, jossa JSON/SQLite-pysyvyys, uudelleenkäynnistys, SSE-suoratoisto, peruutus, ulkoinen suoritustila ja valinnainen vuokrattu koordinointi |

Jokaisella paketilla on oma "package.json"-, "src/"-hakemisto ja (paitsi "install-targets") "vitest.config.js" yksikkötestejä varten.---

### `dist/`

>**Luotu ajonaikaisia ​​artefakteja.**Tarkoituksellisesti sitoutunut versionhallintaan.

Nämä tiedostot ovat CLI-asennusten, API-vastausten, MCP-työkalujen, A2A-tehtävien, savutestien ja julkaisuvahvistuksen kuluttamia koneellisesti luettavia tulosteita. Ne luodaan uudelleen "npm run buildilla".

| Polku | Tarkoitus |
|:-----|:--------|
| `dist/catalog.json` | Julkaistu luettelo, jossa on kaikki 154 osaamista, arvosanaa ja metadataa |
| `dist/bundles.json` | Nipun määritelmät jäsenten saatavuustilan kanssa |
| `dist/manifests/<taito>.json` | Koneluettava luettelo taitokohtaisesti |
| `dist/archives/<taito>.zip` | Ladattava taitokohtainen ZIP-arkisto |
| `dist/archives/<taito>.tar.gz` | Taitokohtainen tarball-arkisto ladattavaksi |
| `dist/archives/<taito>.checksums.txt` | SHA-256-tarkistussummaluettelo arkistokohtaisesti |
| `dist/archives/<skill>.zip.sig` | Irrotettu allekirjoitus (vain julkaisuaika, ohitettu) |
| `dist/release-notes.md` | Automaattisesti luodut julkaisutiedot (gitifioitu) |
| `dist/signing/` | Johtettu julkisen avaimen materiaali (gitignoitettu) |

>**Miksi dist/ on sitoutunut?**Koska se on osa asennus-, API-, MCP-, A2A- ja julkaisusopimusta. Kuluttajat odottavat näiden tiedostojen olevan olemassa ilman koontiversiota.---

### `data/`

>**Staattiset projektidatatiedostot.**Lähdeohjatut määritelmät, jotka ohjaavat rakentamista ja ajonaikaista toimintaa.

| Tiedosto | Tarkoitus |
|:-----|:--------|
| `data/bundles.json` | Kuroitujen nippujen määritelmät (taitojäsenluettelot pakettia kohti) |
| `data/project_identity.json` | Kanoninen projektin identiteetti: nimi, kuvaus, kotisivu, GitHub-aiheet, ajonaikaiset pinnan määritelmät ja asiakasluettelot |
| `data/project_status.json` | Luotu projektimittareittien tilannekuva: osaamismäärät, pisteet, asiakasmäärät, luokkamäärät ja laatuhajot |---

### `docs/`

>**Kaikki projektin dokumentaatio.**Yleisön järjestämä.

| Polku | Yleisö | Sisältö |
|:-----|:----------|:--------|
| `docs/README.md` | Kaikki | Dokumentaatiokeskus — kaikkien asiakirjojen keskushakemisto |
| `docs/CATALOG.md` | Käyttäjät | Automaattisesti luotu luettelo, jossa luetellaan kaikki 154 osaamista ja tulokset |
| `docs/PROJECT-STRUCTURE.md` | Kaikki | Tämä tiedosto — projektihakemistoviite |
| `docs/users/` | Loppukäyttäjät | Aloitusopas, CLI-käyttöopas, käyttöopas, paketit, runbook |
| `docs/contributors/` | Osallistujat | Taitojen anatomia, malli, PR-työnkulku, laatupalkki, huipputulosten pelikirja |
| `docs/specs/` | Arkkitehdit | API, MCP-sivuvaunu, CLI-asennusohjelma, visuaalinen kuori, asiakastukimatriisi, luokitus, suojaus ja luettelotiedot |
| `docs/i18n/` | Kansainväliset käyttäjät | README-juuren automaattisesti luodut käännökset 32 ​​kielellä |#### `docs/users/`

| Tiedosto | Tarkoitus |
|:-----|:--------|
| `ALKUALOITUS.md` | Asenna, tarkista ja käynnistä taito alle 2 minuutissa |
| `CLI-USER-GUIDE.md` | Täydellinen komentoviittaus vaiheittaisilla skenaarioilla |
| `KÄYTTÖ.md` | CLI-komennot, asennustilat, ajonaikaiset komennot ja MCP-määritysvirrat |
| `BUNDLES.md` | Kuroidut paketit ja niiden nykyinen saatavuus |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Rebrändin siirtymisen tila ja hyväksymisraportti |
| `RUNBOOK.md` | Toimintaviite (linkitetty myös nimellä "docs/operations/RUNBOOK.md") |#### `docs/contributors/`

| Tiedosto | Tarkoitus |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Taidon rakenne ja laatuvaatimukset |
| `SKILL-TEMPLATE.md` | Aloitus `SKILL.md` nykyisellä frontmatterilla |
| `SKILL-PR-WORKFLOW.md` | Alkuperäinen saanti, tehosteiden käsittely ja arvioijan odotukset |
| `QUALITY-BAR.md` | Hyväksymiskriteerit ja nykyiset vertailuarvot |
| `HIGH-SORE-PLAYBOOK.md` | Mikä edistää korkeaa kypsymistä, laatua, parhaita käytäntöjä ja turvallisuuspisteitä |#### `docs/specs/`

| Tiedosto | Tarkoitus |
|:-----|:--------|
| `CATALOG-API.md` | HTTP-päätepisteet, suodatus, hallinta ja lataukset |
| `CLI-GUIDED-INSTALLER.md` | Ohjatun asentajan käyttäytymissopimus |
| `CLI-VISUAL-SHELL.md` | Musteen visuaalinen kuori, tilamalli ja palvelukeskus |
| `LOCAL-MCP-SIDECAR.md` | Tiedostojärjestelmätietoiset työkalut, sallittujen luettelomalli ja asetusten kirjoittaminen |
| `CLIENT-SUPPORT-MATRIX.md` | Täydellinen asiakas- ja kirjoittajaviittaus 9 asennus- ja 16 konfigurointiasiakkaassa |
| `TAIDON LUOKITUS.md` | Taksonomia, pisteytysheuristiikka ja metatietojen artefaktit |
| `SECURITY-VALIDATION.md` | Skannerit, arkistot, allekirjoitukset ja julkaisun vahvistus |
| `SKILL-MANIFEST.md` | Koneluettava luettelomuoto ja yhteensopivuussopimus |#### `docs/i18n/`

Sisältää**32**kielihakemistoa, joista jokaisessa on käännetty README.md. Kielet ovat: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Käännökset luo automaattisesti "npm run i18n:render" ja vahvistaa "npm run i18n:check".---

### `tools/`

>**Rakenna, validoi ja testaa infrastruktuuria.**Pääasiassa npm run -komentojen kuluttamat Python-skriptit.#### `tools/scripts/`

| Käsikirjoitus | npm Komento | Tarkoitus |
|:-------|:-------------|:---------|
| `validate_skills.py` | `npm run validate` | Vahvistaa kaikki SKILL.md-tiedostot ja muodostaa uudelleen metadata.json |
| `skill_metadata.py` | (validatessa tuotu) | Ydinmonoliittinen validaattori: frontmatter jäsennys, taksonomia, pisteytys, turvaskannaus |
| `recategorize_skills.py` | `npm run taxonomy:report` | Näyttää tai käyttää ensisijaisen luokan normalisointia |
| `generate_index.py` | `npm run index` | Luo dist/-luettelot, arkistot ja tarkistussummat |
| `build_catalog.js` | `npm run katalogi` | Luo docs/CATALOG.md tiedostosta skills_index.json |
| `generate_project_status.py` | `npm run project:status` | Luo data/project_status.json-tiedoston nykyisillä mittareilla |
| `render_project_docs.py` | `npm run docs:render` | Päivittää luodut lohkot README:ssä, docsissa ja CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Luo tai päivittää `docs/i18n/` käännöksiä |
| `repository_sources.py` | `npm run registry:render` | Muodostaa ja vahvistaa `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identiteetti:check` | Tarkistaa package.json-, README- ja repo-identiteetin kohdistuksen |
| `verify_archives.py` | `npm run verify:archives` | Tarkistaa arkiston eheyden ja valinnaiset allekirjoitukset |
| `verify_security_scanners.py` | `npm run verify:scanners` | Vahvistaa skannerin kattavuuden luoduissa metatiedoissa |
| `generate_release_notes.py` | `npm run release:notes` | Luo mukautettuja julkaisutietoja metatiedoista ja git-historiasta |
| `next_release_version.py` | `npm run release:next-version` | Laskee seuraavan semver-version käyttämällä patch-to-10 -käytäntöä |
| `sync_repo_version.py` | `npm run release:sync-version` | Synkronoi version työtilapakettien välillä |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Tulostaa tai käyttää GitHub-kuvausta, kotisivua ja aiheita |
| `validate_contribution_scope.py` | (CI) | Vahvistaa PR-osuuden rajat |
| `install_githooks.js` | `npm run hooks:install` | Asentaa paikallisen pre-commit-koukun |#### `tools/scripts/tests/`

"npm-testin" käyttämät integraatio- ja TUI-testisarjat:
- Vanhat Python PTY -testit
- Node TUI väitteet
- Testin juoksijan orkesteri---

### `.github/`

>**GitHub-toiminnot ja yhteisömallit.**#### `.github/workflows/`

| Työnkulku | Liipaisin | Tarkoitus |
|:---------|:--------|:---------|
| `validate.yml` | Työnnä/PR 'pää' | Rakenna, testaa ja varmista, että luodut artefaktit ovat sitoutuneet |
| `release.yml` | Tag push `v*` tai manuaalinen lähetys | Julkaisutason skannerit, allekirjoitus, npm-julkaisu, GitHub-julkaisu |
| `auto-release-skill-merges.yml` | Yhdistä `pääosaan` koskettamalla `taidot/*` | Automaattinen versiovirhe, tagi ja julkaisu taitojen muutoksissa |
| `enhance-pr-skills.yml` | PR ja taitojen muutokset | Suorittaa yksityisen tehostimen putkilinjan ja lähettää kumppanin PR |
| `sync-repository-metadata.yml` | Muutokset tiedostoon `data/project_identity.json` | Synkronoi GitHubin kuvauksen, kotisivun ja aiheet |#### `.github/pull_request_template.md`

PR-oletusmalli, jossa on tarkistuslista taitojen ja ajonaikaisten panosten tekemiseen.---

### `.githooks/`

>**Paikalliset Git-koukut.**Asennettu npm run hooks:install -toiminnolla.

| Tiedosto | Tarkoitus |
|:-----|:--------|
| "ennakkoon sitoutuminen" | Suorittaa perustarkistuksen ennen sitoutumisen sallimista |---

## 📄 Root Files Reference

| Tiedosto | Tarkoitus |
|:-----|:--------|
| `README.md` | Julkinen projekti README, jossa on sankaribanneri, asennusopas ja täydellinen ominaisuuskatsaus |
| `CONTRIBUTING.md` | Osallistujaopas, jossa on taitoja, suoritusaikaa ja sisäänoton työnkulkuja |
| `SECURITY.md` | Tietoturvapolitiikka, laajuus ja haavoittuvuuksien raportointiohjeet |
| `CODE_OF_OF_CONDUCT.md` | Contributor Covenant v2.1 |
| `REPOSITORY-SOURCES.md` | Julkinen rekisteri ehdotetuista alkupään varastoista ulkoista vastaanottoa varten |
| "LUPA" | MIT-lisenssi (koodi ja työkalut) |
| "KÄYTTÖOIKEUSSISÄLTÖ" | CC BY 4.0 (dokumentaatio ja taitosisältö) |
| `package.json` | Root monorepo -paketti: komentosarjat, riippuvuudet, bin aloituspisteet, tiedostot ja työtilan asetukset |
| `package-lock.json` | npm-lukkotiedosto (automaattisesti luotu) |
| `metadata.json` | Tietovaraston laajuinen validointi ja pistemäärän yhteenveto (npm run validate luoma) |
| `skills_index.json` | Repo-paikallinen normalisoitu taitoindeksi (npm run validate luo) |
| `.gitignore` | Versionhallinnan poissulkemiset – erityisesti "dist/" on**not**ohitettu |
| `.npmignore` | Ei sisällä `__pycache__/` ja `*.pyc` npm-tarballista |
| `.node-version` | Node.js-version kiinnitys: `22` |
| `.nvmrc` | nvm-version kiinnitys: `22` (peilit `.node-version`) |
| `vitest.config.js` | Root Vitest -kokoonpano, joka viittaa kaikkiin viiteen pakettitason testikokoonpanoon |
| `vitest.workspace.js` | Vitest-työtilan määritelmä monorepo-aware-testin suorittamiseen |---

## 🔄 Build Pipeline Flow

```text
npm run validate          →  metadata.json, skills_index.json, per-skill metadata.json
npm run index             →  dist/manifests/, dist/archives/, dist/archives/*.checksums.txt
npm run catalog           →  docs/CATALOG.md
npm run project:status    →  data/project_status.json
npm run docs:render       →  updates generated blocks in README.md, docs/README.md, CONTRIBUTING.md
npm run registry:render   →  updates REPOSITORY-SOURCES.md status block
npm run i18n:render       →  docs/i18n/*/README.md (32 languages)
```

Kaikki yllä mainitut suoritetaan peräkkäin osana "npm run build" -toimintoa.
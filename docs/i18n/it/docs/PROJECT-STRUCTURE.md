# 🗂️ Project Structure (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Directory completa e riferimento ai file per il monorepo Awesome Omni Skills.**---

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

>**Il catalogo delle competenze native.**Questa è la principale superficie di contenuto pubblico del progetto.

Contiene**154**directory delle abilità, ciascuna con almeno un playbook `SKILL.md`. Competenze più ampie possono includere le sottodirectory `agents/`, `references/`, `examples/`, `scripts/` e `assets/`.

Le competenze arrivano attraverso due percorsi di assunzione:
-**PR contributori diretti**: gli esseri umani inviano direttamente le competenze
-**Importazioni esterne basate su repository**: revisione dei PR `external-import/*` dai repository upstream

| Cosa contiene | Esempio |
|:-----------------|:--------|
| `competenze/omni-figma/SKILL.md` | Competenza dalla progettazione al codice di Figma |
| `competenze/architettura/SKILL.md` | Revisione dell'architettura e capacità di pianificazione |
| `skills/<nome>/metadata.json` | Classificazione e punteggio generati automaticamente |---

### `skills_omni/`

>**Derivati ​​migliorati solo in inglese curati.**Mantenuto dal canale di miglioramento privato.

Contiene**110**directory di abilità migliorate che rispecchiano e migliorano le loro controparti native in "skills/". Questa superficie**non è aperta al contributo pubblico diretto**: è popolata esclusivamente dalla pipeline di potenziamento automatizzato.

Ogni derivato conserva l'attribuzione alla fonte nativa fornendo allo stesso tempo uno standard editoriale più elevato, sempre in inglese.---

### `packages/`

>**Gli spazi di lavoro monorepo.**Tutto il codice runtime Node.js risiede qui.

| Pacchetto | npm Nome | Scopo |
|:--------|:---------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` | Runtime del catalogo condiviso con inserimento delle dipendenze "ICatalogStorageAdapter". Fornisce la logica di ricerca, punteggio, confronto, raccomandazione e piano di installazione utilizzata da tutte le superfici server |
| 📂 `pacchetti/cli/` | (contenitore del pacchetto root) | Punti di accesso CLI unificati, programma di installazione guidato, interfaccia utente grafica Ink, diagnostica, controlli del fumo e lanciatori di servizi. Nativo del MES |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Registro dei 9 client installabili (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) con risoluzione del percorso e mappatura dei flag |
| 📂 `packages/server-api/` | `@omni-skills/server-api` | API del catalogo HTTP di sola lettura con OpenAPI 3.1, interfaccia utente Swagger su "/docs", autenticazione, limitazione della velocità, liste consentite CORS/IP, download e runtime di amministrazione |
| 📂 `packages/server-mcp/` | `@omni-skills/server-mcp` | Server MCP che supporta i trasporti "stdio", "stream" e "sse". La modalità sidecar locale aggiunge strumenti di installazione/rimozione compatibili con il file system e scrittura della configurazione MCP compatibile con il client per 16 client compatibili con la configurazione |
| 📂 `packages/server-a2a/` | `@omni-skills/server-a2a` | Runtime dell'attività A2A (da agente ad agente) con persistenza JSON/SQLite, ripristino del riavvio, streaming SSE, annullamento, modalità esecutore esterno e coordinamento noleggiato opzionale |

Ogni pacchetto ha il proprio `package.json`, la directory `src/` e (tranne `install-targets`) un `vitest.config.js` per i test unitari.---

### `dist/`

>**Artefatti runtime generati.**Impegnati intenzionalmente nel controllo della versione.

Questi file sono gli output leggibili dalla macchina utilizzati dalle installazioni CLI, dalle risposte API, dagli strumenti MCP, dalle attività A2A, dai test del fumo e dalla verifica dei rilasci. Vengono rigenerati da "npm run build".

| Percorso | Scopo |
|:-----|:--------|
| `dist/catalog.json` | Catalogo pubblicato con tutte le 154 competenze, punteggi e metadati |
| `dist/bundles.json` | Definizioni di bundle con stato di disponibilità del membro |
| `dist/manifests/<abilità>.json` | Manifesto leggibile dalla macchina per competenza |
| `dist/archives/<competenza>.zip` | Archivio ZIP per competenza da scaricare |
| `dist/archives/<abilità>.tar.gz` | Archivio tarball per competenza da scaricare |
| `dist/archives/<competenza>.checksums.txt` | Manifesto del checksum SHA-256 per archivio |
| `dist/archives/<competenza>.zip.sig` | Firma staccata (solo al momento del rilascio, gitignored) |
| `dist/note-di-rilascio.md` | Note di rilascio generate automaticamente (gitignored) |
| `dist/firma/` | Materiale della chiave pubblica derivata (gitignored) |

>**Perché è stato eseguito il commit di `dist/`?**Perché fa parte del contratto di installazione, API, MCP, A2A e rilascio. I consumatori si aspettano che questi file siano presenti senza eseguire una build.---

### `data/`

>**File di dati di progetto statici.**Definizioni controllate dal codice sorgente che guidano il comportamento di compilazione e runtime.

| File | Scopo |
|:-----|:--------|
| `dati/bundles.json` | Definizioni di bundle curate (elenchi di membri delle competenze per bundle) |
| `data/project_identity.json` | Identità canonica del progetto: nome, descrizione, home page, argomenti GitHub, definizioni della superficie di runtime ed elenchi di client |
| `data/project_status.json` | Istantanea generata delle metriche del progetto: conteggi delle competenze, punteggi, conteggi dei clienti, conteggi delle categorie e spread di qualità |---

### `docs/`

>**Tutta la documentazione del progetto.**Organizzato per pubblico.

| Percorso | Pubblico | Contenuto |
|:-----|:---------|:--------|
| `docs/README.md` | Tutti | Hub di documentazione: indice centrale di tutti i documenti |
| `docs/CATALOG.md` | Utenti | Catalogo generato automaticamente che elenca tutte le 154 abilità con punteggi |
| `docs/PROJECT-STRUCTURE.md` | Tutti | Questo file: riferimento alla directory del progetto |
| `documenti/utenti/` | Utenti finali | Nozioni di base, guida per l'utente della CLI, guida all'utilizzo, bundle, runbook |
| `documenti/contributori/` | Collaboratori | Anatomia delle abilità, modello, flusso di lavoro PR, barra della qualità, playbook dei punteggi più alti |
| `documenti/specifiche/` | Architetti | API, sidecar MCP, programma di installazione CLI, shell visiva, matrice di supporto client, classificazione, sicurezza e specifiche manifest |
| `docs/i18n/` | Utenti internazionali | Traduzioni generate automaticamente del README radice in 32 lingue |#### `docs/users/`

| File | Scopo |
|:-----|:--------|
| "INIZIARE.md" | Installa, verifica e attiva una competenza in meno di 2 minuti |
| `CLI-USER-GUIDE.md` | Riferimento completo ai comandi con scenari passo passo |
| `USAGGIO.md` | Comandi CLI, modalità di installazione, comandi di runtime e flussi di configurazione MCP |
| `BUNDLES.md` | Pacchetti selezionati e loro disponibilità attuale |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Stato della migrazione del rebranding e rapporto di accettazione |
| `RUNBOOK.md` | Riferimento operativo (collegato anche come `docs/operazioni/RUNBOOK.md`) |#### `docs/contributors/`

| File | Scopo |
|:-----|:--------|
| `SKILL-ANATOMY.md` | Struttura e aspettative di qualità per una competenza |
| `TEMPLATE-SKILL.md` | Starter `SKILL.md` con il frontmatter attuale |
| `SKILL-PR-WORKFLOW.md` | Assunzione nativa, elaborazione del potenziatore e aspettative dei revisori |
| `QUALITY-BAR.md` | Criteri di accettazione e parametri di riferimento attuali |
| "HIGH-SCORE-PLAYBOOK.md" | Ciò che determina livelli elevati di maturità, qualità, best practice e sicurezza |#### `docs/specs/`

| File | Scopo |
|:-----|:--------|
| `CATALOGO-API.md` | Endpoint HTTP, filtri, governance e download |
| `CLI-GUIDED-INSTALLER.md` | Contratto comportamentale per l'installatore guidato |
| `CLI-VISUAL-SHELL.md` | Shell visiva Ink, modello a stati e hub di servizi |
| `LOCAL-MCP-SIDECAR.md` | Strumenti compatibili con il file system, modello di lista consentita e scrittura della configurazione |
| `CLIENT-SUPPORT-MATRIX.md` | Riferimento completo a client e scrittori su 9 client di installazione + 16 di configurazione |
| `CLASSIFICAZIONE DELLE COMPETENZE.md` | Tassonomia, euristica del punteggio e artefatti dei metadati |
| "SECURITY-VALIDATION.md" | Scanner, archivi, firme e verifica delle liberatorie |
| `SKILL-MANIFEST.md` | Formato manifest leggibile dalla macchina e contratto di compatibilità |#### `docs/i18n/`

Contiene**32**directory delle lingue, ciascuna con un `README.md` tradotto. Le lingue includono: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Le traduzioni vengono generate automaticamente da `npm run i18n:render` e convalidate da `npm run i18n:check`.---

### `tools/`

>**Creazione, convalida e test dell'infrastruttura.**Principalmente script Python utilizzati dai comandi `npm run`.#### `tools/scripts/`

| Scrittura | Comando npm | Scopo |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm esecuzione convalida` | Convalida tutti i file `SKILL.md` e rigenera `metadata.json` |
| `skill_metadata.py` | (importato da validate) | Validatore monolitico principale: analisi del frontmatter, tassonomia, punteggio, scansione di sicurezza |
| `recategorize_skills.py` | `npm esegue la tassonomia:report` | Mostra o applica la normalizzazione della categoria canonica |
| `genera_index.py` | `indice di esecuzione npm` | Genera manifesti, archivi e checksum `dist/` |
| `build_catalog.js` | `catalogo di esecuzione npm` | Genera `docs/CATALOG.md` da `skills_index.json` |
| `generate_project_status.py` | `npm esegui progetto:status` | Genera `data/project_status.json` con le metriche correnti |
| `render_project_docs.py` | `npm esegui docs:render` | Aggiorna i blocchi generati in README, documenti e CONTRIBUTING |
| `genera_i18n.py` | `npm esegui i18n:render` | Genera o aggiorna le traduzioni `docs/i18n/` |
| `repository_sources.py` | `npm esegue il registro:render` | Rende e convalida `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm esegui identità:check` | Verifica l'allineamento dell'identità di package.json, README e repository |
| `verify_archives.py` | `npm esegui verifica:archivi` | Verifica l'integrità dell'archivio e le firme opzionali |
| `verify_security_scanners.py` | `npm esegui verifica:scanner` | Conferma la copertura dello scanner nei metadati generati |
| `generate_release_notes.py` | `npm esegui release:note` | Genera note di rilascio personalizzate dai metadati e dalla cronologia git |
| `next_release_version.py` | `npm esegui la versione:prossima versione` | Calcola la versione del prossimo semestre utilizzando la policy patch-to-10 |
| `sync_repo_version.py` | `npm esegui release:sync-version` | Sincronizza la versione tra i pacchetti dell'area di lavoro |
| `sync_github_repo_metadata.py` | `npm esegui repo:metadata:print` | Stampa o applica la descrizione, la home page e gli argomenti di GitHub |
| `validate_contribution_scope.py` | (CI) | Convalida i limiti dell'ambito del contributo PR |
| `install_githooks.js` | `npm esegui hooks:installa` | Installa l'hook pre-commit locale |#### `tools/scripts/tests/`

Suite di test di integrazione e TUI utilizzate da `npm test`:
- Test PTY Python legacy
- Affermazioni TUI del nodo
- Orchestratore del test runner---

### `.github/`

>**Azioni GitHub e modelli di community.**#### `.github/workflows/`

| Flusso di lavoro | Trigger | Scopo |
|:---------|:--------|:--------|
| `validate.yml` | Premi/PR su "principale" | Compila, testa e verifica che gli artefatti generati siano impegnati |
| `release.yml` | Tag push `v*` o invio manuale | Scanner di livello release, firma, pubblicazione npm, versione GitHub |
| `auto-release-skill-merges.yml` | Unisci a `main` toccando `skills/*` | Bump, tag e rilascio automatico della versione in caso di modifiche alle abilità |
| `enhance-pr-skills.yml` | PR con cambiamenti di abilità | Esegue la pipeline di potenziamento privata e pubblica PR complementare |
| `sync-repository-metadata.yml` | Modifiche a `data/project_identity.json` | Sincronizza la descrizione, la home page e gli argomenti di GitHub |#### `.github/pull_request_template.md`

Modello PR predefinito con elenco di controllo per competenze e contributi di runtime.---

### `.githooks/`

>**Hook Git locali.**Installato tramite `npm run hooks:install`.

| File | Scopo |
|:-----|:--------|
| `pre-impegno` | Esegue la convalida di base prima di consentire un commit |---

## 📄 Root Files Reference

| File | Scopo |
|:-----|:--------|
| `README.md` | README del progetto rivolto al pubblico con banner hero, guida all'installazione e panoramica completa delle funzionalità |
| `CONTRIBUIRE.md` | Guida del collaboratore con competenze, runtime e flussi di lavoro di assunzione |
| `SICUREZZA.md` | Istruzioni per la politica di sicurezza, l'ambito e la segnalazione delle vulnerabilità |
| `CODE_OF_CONDUCT.md` | Patto del collaboratore v2.1 |
| `REPOSITORY-SOURCES.md` | Registro pubblico degli archivi upstream proposti per l'assunzione esterna |
| `LICENZA` | Licenza MIT (codice e strumenti) |
| `CONTENUTO DELLA LICENZA` | CC BY 4.0 (documentazione e contenuto delle competenze) |
| `pacchetto.json` | Pacchetto monorepo root: script, dipendenze, punti di ingresso bin, file e configurazione dell'area di lavoro |
| `pacchetto-lock.json` | npm lockfile (generato automaticamente) |
| `metadati.json` | Convalida a livello di repository e riepilogo del punteggio (generato da `npm run validate`) |
| `skills_index.json` | Indice di abilità normalizzato locale del repository (generato da `npm run validate`) |
| `.gitignore` | Esclusioni del controllo della versione — in particolare `dist/`**non**viene ignorato |
| `.npmignore` | Esclude `__pycache__/` e `*.pyc` dal file tar npm |
| `.versione-nodo` | Blocco della versione di Node.js: `22` |
| `.nvmrc` | Pinning della versione nvm: `22` (mirror `.node-version`) |
| `vitest.config.js` | Configurazione Root Vitest che fa riferimento a tutte e 5 le configurazioni di test a livello di pacchetto |
| `vitest.workspace.js` | Definizione dell'area di lavoro Vitest per l'esecuzione di test compatibile con monorepo |---

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

Tutto quanto sopra viene eseguito in sequenza come parte di "npm run build".
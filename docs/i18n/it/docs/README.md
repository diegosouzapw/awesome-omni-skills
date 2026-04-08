# 📖 Awesome Omni Skills — Documentation Hub (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Il riferimento centrale per l'utilizzo, il contributo e il funzionamento di Awesome Omni Skills come archivio pubblico di competenze, una superficie derivata di best practice curata e una piattaforma runtime condivisa.**

I file della community standard risiedono nella root del repository:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Il pacchetto npm, il repository GitHub, i documenti generati e gli entrypoint di runtime sono ora allineati su**Awesome Omni Skills**. Stato attuale del lancio: [Fantastico lancio di Omni Skills](operazioni/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

## 📊 Status Snapshot

<!-- generated:docs-readme-status-snapshot:start -->
| Area | State | Details |
|:-----|:------|:--------|
| 🏗️ **Runtime** | ✅ Current | Unified CLI, Ink visual shell, API, MCP, and A2A all ship from the same package |
| 📦 **Catalog** | 📌 154 skills | 154 native catalog skills across 16 active categories, with 110 curated English derivatives in `skills_omni` and 7 fully backed bundles |
| 🎯 **Install** | ✅ Current | Guided TTY install, selective `--skill` and `--bundle`, custom path support, and discovery-driven install |
| 🌐 **API** | ✅ Current | Read-only registry API with auth, admin runtime, rate limiting, CORS/IP allowlists, maintenance mode, downloads, and interactive Swagger UI on `/docs` |
| 🔌 **MCP** | ✅ Current | `stdio` · `stream` · `sse`, local sidecar mode, 9 install-capable clients, 16 config-capable clients, 33 config targets, and 20 config profiles |
| 🤖 **A2A** | ✅ Current | Simple-first local runtime with JSON/SQLite durability, restart resume, SSE streaming, cancelation, external executor mode, and optional leased coordination when explicitly enabled |
| 🛡️ **Security** | ✅ Current | Static scanner, optional ClamAV/VirusTotal, signed release artifacts, archive checksums, and release-time verification |
| 📋 **Classification** | ✅ Current | Canonical taxonomy, maturity, semantic quality spread, best-practices spread, and security scoring |
| 📁 **Archives** | ✅ Current | Per-skill `.zip` and `.tar.gz` archives with SHA-256 checksum manifests |
| 🔐 **Signing** | ✅ Current | Detached signatures enforced on release tags; local install flows consume the same manifest and checksum metadata |
| 🧬 **Intake Flow** | ✅ Current | Native skills land under `skills/` through direct contributor PRs and reviewed repository-based external-import PRs; PR automation reviews them and proposes Omni-enhanced derivatives under `skills_omni/` |
<!-- generated:docs-readme-status-snapshot:end -->

## 🔭 Current Project State

Il tracciato fondamentale ora si trova nello stato di progetto attivo e la seconda ondata di espansione della categoria è già nel catalogo. Il progetto dovrebbe ora essere letto come una base di lavoro con futuri percorsi di espansione opzionali:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

L’espansione futura rimane intenzionale:

- approfondire `design`, `tools`, `data-ai` e `machine-learning`
- evitare di riaprire categorie dormienti non native del codice fino a quando le tracce native del codice attuali non avranno una maggiore profondità
- mantenere intatti il livello di qualità e il percorso di revisione del potenziatore mentre lo si fa

Questo lavoro di espansione si riflette ora direttamente nel catalogo live e nei documenti di architettura:

- l'istantanea del catalogo corrente in [Catalogo](CATALOG.md)
- la forma del runtime e dell'artefatto in [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- la direzione in avanti in [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills dovrebbe essere letto come tre superfici collegate:

| Superficie | Cos'è | Come cambia |
|:--------|:-----------|:-------|
| 📥 `competenze/` | Repository pubblico di competenze native | PR dei collaboratori diretti e assunzione esterna rivista basata su repository |
| ✨ `skills_omni/` | Superficie derivata migliorata e curata secondo le migliori pratiche | Solo PR associati potenziatori privati ​​|
| 🖥️ Superfici runtime | CLI, API, MCP e A2A sullo stesso catalogo generato | Automazione di creazione, convalida e rilascio |---

## 📌 Current Decisions

Queste questioni di architettura non sono più “aperte” nella pratica e sono ora trattate come decisioni di progetto:

1.**La distribuzione rimane manifest-first e negli archivi firmati**
   Il manifest leggibile dalla macchina rimane il contratto consumato da CLI, API, MCP e A2A. Gli archivi firmati per competenza rappresentano la superficie di download e rilascio sovrapposta a tale contratto.
2.**I cataloghi privati o premium dovrebbero riutilizzare lo stesso schema manifest**
   L'autenticazione e la policy dovrebbero essere stratificate esternamente, non biforcando la forma del manifest o del catalogo.
3.**La configurazione MCP dovrebbe convergere su alcune famiglie canoniche di esportazione**
   Awesome Omni Skills ora si standardizza su JSON "mcpServers", JSON "servers", JSON "context_servers", YAML "mcpServers", YAML "extensions" e TOML "[mcp_servers]", mantenendo gli autori su misura solo laddove i documenti client ufficiali richiedono una struttura diversa.

Tali decisioni sono in linea con l'attuale documentazione ufficiale MCP e del cliente, tra cui:

- Registro MCP ufficiale e guida al supporto delle estensioni su "modelcontextprotocol.io".
- Documenti OpenAI Docs MCP e Codex CLI su `developers.openai.com` e `platform.openai.com`
- Estensione VS Code MCP e documentazione del prodotto su "code.visualstudio.com".
- documenti client per Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman e JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 📘 [Per iniziare](users/GETTING-STARTED.md) | Installa, verifica e richiama la tua prima abilità |
| 🧭 [Guida per l'utente della CLI](users/CLI-USER-GUIDE.md) | Riferimento completo ai comandi e modelli di utilizzo della CLI nel mondo reale |
| 📗 [Guida all'uso](users/USAGE.md) | Comandi CLI, modalità di installazione, comandi di runtime e flussi di configurazione MCP |
| 📦 [Pacchetti](users/BUNDLES.md) | Pacchetti selezionati e loro disponibilità attuale |
| 📚 [Catalogo](CATALOG.md) | Catalogo generato automaticamente delle competenze pubblicate |
| 🔧 [Runbook di sistema](operazioni/RUNBOOK.md) | Crea, offri, proteggi e risolvi i problemi del runtime |### 🏗️ If You Want to **Understand** the Runtime

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 🗂️ [Struttura del progetto](PROJECT-STRUCTURE.md) | Directory completa e riferimento ai file per monorepo |
| 🗺️ [Roadmap di Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Evoluzione dell'architettura, decisioni chiuse e aree di espansione rimanenti |
| 🧭 [Roadmap per CLI UX](architecture/CLI-UX-ROADMAP.md) | Piano storico e forma attuale della CLI guidata e visiva |
| 📐 [ADR-0001: Workspace Foundation](architettura/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo principale e decisione di runtime condiviso |
| 🔬 [Analisi della base di codice](architettura/CODEBASE-ANALYSIS.md) | Composizione corrente del runtime, conteggi e limiti del sistema |
| 🌐 [Superficie API Catalogo](specs/CATALOG-API.md) | Endpoint HTTP, filtri, governance e download |
| 🧩 [Installazione guidata CLI](specs/CLI-GUIDED-INSTALLER.md) | Contratto comportamentale per l'installatore guidato |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Shell visiva Ink, modello a stati e hub di servizi |
| 🔌 [Sidecar MCP locale](specs/LOCAL-MCP-SIDECAR.md) | Strumenti compatibili con il file system, modello di lista consentita e scrittura della configurazione |
| 🧭 [Matrice di supporto clienti](specs/CLIENT-SUPPORT-MATRIX.md) | Client CLI e IDE supportati, scrittori, destinazioni manuali e riferimenti al codice sorgente |
| 📊 [Classificazione delle abilità](specs/SKILL-CLASSIFICATION.md) | Tassonomia, euristica del punteggio e artefatti dei metadati |
| 🛡️ [Convalida della sicurezza](specs/SECURITY-VALIDATION.md) | Scanner, archivi, firme e verifica delle liberatorie |
| 📋 [Specifiche manifesto abilità](specs/SKILL-MANIFEST.md) | Formato manifest leggibile dalla macchina e contratto di compatibilità |### 🤝 If You Want to **Contribute**

| Dottore | Cosa imparerai |
|:----|:-----------------|
| 📝 [Guida per contribuire](../CONTRIBUTING.md) | Flusso di lavoro del repository e aspettative delle richieste pull |
| 🌍 [Fonti del repository](../REPOSITORY-SOURCES.md) | Come proporre un repository upstream tramite un normale PR pubblico, ora con supporto del ramo e del percorso repo-first `auto` |
| 🧾 [Flusso di lavoro PR delle competenze](contributors/SKILL-PR-WORKFLOW.md) | Assunzione nativa, elaborazione automatica del potenziamento, pubblicazione `skills_omni/` e aspettative dei revisori |
| 📄 [Modello di abilità](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` con frontmatter e struttura attuali |
| 🔬 [Skill Anatomy](contributors/SKILL-ANATOMY.md) | Struttura e aspettative di qualità per una competenza |
| ✅ [Barra della qualità](contributors/QUALITY-BAR.md) | Criteri di accettazione del repository |
| 🏆 [High-Score Playbook](contributors/HIGH-SCORE-PLAYBOOK.md) | Ciò che determina livelli elevati di maturità, qualità, best practice e sicurezza |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx awesome-omni-skills                       # Guided install in TTY
npx awesome-omni-skills install --guided      # Forced guided install
npx awesome-omni-skills ui                    # Ink visual shell
npx awesome-omni-skills ui --text             # Text fallback UI
```

```bash
# 🔎 Discovery
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx awesome-omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx awesome-omni-skills install --guided --path ./my-skills --skill architecture
npx awesome-omni-skills --cursor --skill omni-figma
npx awesome-omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx awesome-omni-skills config-mcp --list-targets
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx awesome-omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx awesome-omni-skills recategorize
npx awesome-omni-skills recategorize --write

# 🔌 Services
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills api --port 3333
npx awesome-omni-skills a2a --port 3335

# 🧪 Validation
npx awesome-omni-skills smoke
npx awesome-omni-skills doctor
```

Per la superficie di comando completa per l'utente finale, utilizzare la [Guida per l'utente CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

La pipeline di compilazione emette file leggibili dalla macchina che guidano ogni superficie di runtime:

| Artefatto | Scopo |
|:---------|:--------|
| `metadati.json` | Convalida a livello di repository e riepilogo dei punteggi |
| `skills_index.json` | Indice di abilità normalizzato repo-locale |
| `dist/catalog.json` | Catalogo pubblicato per la ricerca e l'elenco |
| `dist/bundles.json` | Definizioni di bundle con disponibilità |
| `dist/manifests/<abilità>.json` | Manifesto leggibile dalla macchina per competenza |
| `dist/archives/<competenza>.zip` | Archivio competenze (zip) |
| `dist/archives/<abilità>.tar.gz` | Archivio abilità (tarball) |
| `dist/archives/<competenza>.checksums.txt` | Manifesto del checksum SHA-256 |

"dist/" rimane impegnato di proposito. Questi artefatti generati fanno parte del contratto di installazione, API, MCP, A2A, smoke e rilascio.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API del registro di sola lettura per competenze, pacchetti, confronto, pianificazione dell'installazione e download di artefatti.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Il sidecar locale ora supporta la scrittura di configurazione MCP di prima classe per:

- Codice Claude
- Cursore
- VS Code e contenitori di sviluppo
-Gemelli CLI
- Antigravità
- Kiro
- Codice CLI
- Continua
- Windsurf
- Codice aperto
-Cline
- CLI di GitHub Copilot
- Codice chilo
- Zed
- Oca### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Ciclo di vita delle attività, streaming, persistenza, ripristino al riavvio e orchestrazione locale semplice. L'esecuzione dedicata condivisa è disponibile se abilitata esplicitamente; Redis rimane un'opzione ospitata avanzata, non il percorso locale predefinito.---

## 🗂️ Repository Map

| Percorso | Scopo |
|:-----|:--------|
| 📂 `competenze/` | Competenze d'autore canoniche |
| 📖 `documenti/utenti/` | Documentazione per l'utente finale |
| 🤝 `documenti/contributori/` | Modelli e linee guida per i contributori |
| 🏗️ `documenti/architettura/` | Roadmap, ADR e analisi tecnica |
| 🔧 `documenti/operazioni/` | Runbook operativi |
| 📋 `documenti/specifiche/` | Contratti runtime, protocolli e artefatti |
| 📚 `docs/CATALOG.md` | Catalogo delle competenze generato |
| 📦 `dist/` | Artefatti leggibili dalla macchina generati |
| 🧠 `packages/catalog-core/` | Runtime del catalogo condiviso con `ICatalogStorageAdapter` DI |
| 🌐 `packages/server-api/` | API HTTP di sola lettura con interfaccia utente OpenAPI/Swagger su `/docs` |
| 🔌 `packages/server-mcp/` | Server MCP e sidecar locale |
| 🤖 `packages/server-a2a/` | Server A2A e runtime delle attività |
| 🖥️ `pacchetti/cli/` | Punti di ingresso CLI unificati, logica di installazione e TUI visiva Ink (nativa ESM) |
| ⚙️ `strumenti/script/` | Convalida, generazione, verifica e test |
| 🧪 `vitest.workspace.js` | Configurazione dell'area di lavoro monorepo Vitest |---

## 🧪 Release Validation

```bash
npm run smoke
```

La corsa del fumo convalida:

- ✅ validazione delle competenze e generazione di metadati
- ✅ strumenti di ricategorizzazione della tassonomia
- ✅ generazione degli artefatti del catalogo
- ✅generato ribasso del catalogo
- ✅ generazione e verifica dell'archivio
- ✅ suite di test di integrazione legacy (asserzioni Python PTY + Node TUI)
- ✅ Suite di unità Vitest per il punteggio, la ricerca e il filtraggio del catalogo-core
- ✅ `npm pack --dry-run`
- ✅ Avvio e integrità dell'API con OpenAPI/Swagger UI su `/docs`
- ✅ Avvio MCP in `stdio`, `stream` e `sse`
- ✅ Ciclo di vita di avvio A2A, polling, streaming SSE, cancellazione e push-config
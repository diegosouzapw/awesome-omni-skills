# 🛡️ Security Policy (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Se scopri un problema di sicurezza in Awesome Omni Skills, non aprire prima un problema pubblico.**

Si prega di segnalare tramite uno di questi canali privati:

| Canale | Come |
|:--------|:----|
| 🔒 Avviso sulla sicurezza GitHub | [Apri un avviso privato](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Contatto diretto | Contatta direttamente i manutentori |### 📋 Include in Your Report

- 📁 Componente o percorso interessato
- 🔄 Passaggi di riproduzione
- ⚠️Valutazione dell'impatto
- 🧪 Qualsiasi materiale di prova necessario per verificare il problema

>**⏱️ Il nostro obiettivo è prendere atto delle segnalazioni entro 48 ore**e dare priorità alle soluzioni in base all'impatto.---

## 🎯 Scope

Questa policy riguarda il runtime e le superfici dei contenuti del repository:

| Componente | Percorso |
|:----------|:-----|
| 🖥️ CLI e programma di installazione | `pacchetti/cli/` |
| 📚 Runtime del catalogo condiviso | `packages/catalog-core/` |
| 🔌 Installa obiettivi | `packages/install-targets/` |
| ⚙️ Script di creazione e convalida | `strumenti/script/` |
| 📦 Artefatti del catalogo generati | `dist/` |
| 🌐 Pacchetti API, MCP e A2A | `packages/server-api/` · `packages/server-mcp/` · `packages/server-a2a/` |
| 🧠 Contenuti delle competenze | `skills/` — in particolare comandi shell, accesso alla rete, flussi di credenziali o indicazioni sensibili alla sicurezza |---

## 🔐 Current Security Model

Il repository si basa sui seguenti controlli di sicurezza:### 🧠 Skill-Level Controls

| Controllo | Descrizione |
|:--------|:-----------|
| 🏷️ Campo di rischio | I metadati delle competenze includono un livello di "rischio" dichiarato |
| 📊 Punteggio | La convalida calcola i punteggi di maturità, best practice, qualità e sicurezza |
| 🔍Scanner statico | Esamina `SKILL.md`, i file pacchettizzati e gli script di supporto e impedisce ai risultati critici di entrare nel catalogo pubblico |
| 🦠 Rilascio verifica malware | Le versioni pubblicate vengono verificate sia con ClamAV che con VirusTotal prima della pubblicazione |### 🚫 Hard Content Blocks

L'archivio pubblico non accetta competenze che facciano scattare il cancello di sicurezza critico. Gli attuali hard blocker includono:

- contenuto remoto trasmesso direttamente all'esecuzione della shell
- istruzioni che tentano di rivelare prompt, segreti o contesto di runtime nascosto

Quando il validatore trova uno di questi modelli, la competenza non entra nel catalogo pubblico. Nell'assunzione da repository esterni, i fratelli validi possono comunque continuare mentre le competenze bloccate vengono escluse e segnalate separatamente.### 🖥️ Runtime Controls

| Controllo | Descrizione |
|:--------|:-----------|
| 📁 Sicurezza del percorso | Installare i flussi utilizzare i controlli di sicurezza del percorso |
| 🔒La lista consentita scrive | Scritture sidecar MCP locali limitate da una lista consentita |
| 👁️ Impostazioni predefinite di prova | Per impostazione predefinita, gli strumenti orientati alla scrittura eseguono il dry-run a meno che non siano esplicitamente disabilitati |
| 🔐 Autenticazione e limiti | Autenticazione portante/chiave API, autenticazione runtime amministratore, limitazione della velocità, liste consentite CORS/IP |
| 📋Audit | Registrazione di controllo, modalità di manutenzione e ID di richiesta |### 📦 Release Controls

| Controllo | Descrizione |
|:--------|:-----------|
| ✅ Manifesta checksum | Checksum SHA-256 per gli archivi generati |
| ✍️ Firme | Verifica della firma distaccata in CI prima della pubblicazione |
| 🦠 Cancello con doppio scanner | ClamAV e VirusTotal devono entrambi completare in modo pulito la pubblicazione del rilascio |
| 🧪 Controlli fumogeni | Esercitare le superfici di runtime fornite prima del rilascio |---

## 🔮 What Is Still Open

> Il principale lavoro di sicurezza rimanente**non**è un rafforzamento di base. Gli elementi aperti sono:

| Zona | Stato |
|:-----|:-------|
| 🏢Governance d'impresa | Identità esterna, policy gateway e integrazione WAF al di sopra degli attuali controlli in-process |
| 🔌 Scrittori clienti MCP | Scrittori più ampi solo quando i contratti di configurazione pubblica sono sufficientemente stabili |
| 📊 Perfezionamento dello scanner | Affinamento continuo in modo che le competenze eccezionali rimangano chiaramente separate da quelle semplicemente ben strutturate |---

## ⚠️ Risk Levels in Skills

Ogni abilità dichiara uno di questi livelli di "rischio":

| Livello di rischio | Significato |
|:-----------|:--------|
| 🟢 `sicuro` | Non sono previste operazioni distruttive |
| 🟡 `attenzione` | Può modificare file o interagire con sistemi esterni |
| 🔴 `offensivo` | Test di sicurezza o flussi di lavoro contraddittori che richiedono un'autorizzazione esplicita |
| ⛔ `critico` | Operazioni ad alto impatto o a livello di sistema |---

## 📋 Disclosure Notes

Poiché Awesome Omni Skills fornisce helper eseguibili, strumenti locali compatibili con il file system e scrittori di configurazione specifici del client, queste classi di vulnerabilità dovrebbero essere trattate con**alta priorità**anche se appaiono "solo locali":

| Categoria | Esempi |
|:---------|:---------|
| 📁 Traversata del percorso | Escape della directory tramite percorsi di installazione o configurazione delle competenze |
| 🔗Sicurezza del collegamento simbolico | Collegamento simbolico seguente durante l'installazione o l'estrazione dell'archivio |
| 🖥️ Esecuzione del comando | Iniezione di comandi arbitrari tramite contenuto di abilità o script |
| 📦Verifica archivio | Bypass del checksum o della verifica della firma |
| 🔓 Bypass autenticazione | Limitazione della velocità o bypass dell'autenticazione su API/MCP |
| 🔌 Ignora lista consentita | Elusione della lista consentita del sidecar locale |
| 🦠 Evasione dallo scanner | Classi di falsi negativi in ​​scanner statici o esterni |
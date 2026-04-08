# 📖 Awesome Omni Skills — Documentation Hub (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**La référence centrale pour utiliser, contribuer et exploiter Awesome Omni Skills en tant que référentiel de compétences public, surface dérivée de bonnes pratiques organisée et plate-forme d'exécution partagée.**

Les fichiers de communauté standard se trouvent à la racine du référentiel :
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Le package npm, le référentiel GitHub, les documents générés et les points d'entrée d'exécution sont désormais alignés sur**Awesome Omni Skills**. État de déploiement actuel : [Awesome Omni Skills Rollout](opérations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

La piste de base est désormais à l'état de projet actif et la deuxième vague d'expansion de catégorie est déjà dans le catalogue. Le projet doit maintenant être lu comme une base de travail avec de futures pistes d’expansion facultatives :<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

L’expansion future reste délibérée :

- approfondir la « conception », les « outils », les « données-ai » et l'« apprentissage automatique »
- éviter de rouvrir les catégories dormantes non natives du code jusqu'à ce que les pistes actuelles du code natif aient une plus grande profondeur
- garder intact le niveau de qualité et le chemin d'examen des améliorateurs

Ce travail d'expansion se reflète désormais directement dans le catalogue en direct et la documentation d'architecture :

- l'instantané du catalogue actuel dans [Catalogue](CATALOG.md)
- la forme d'exécution et d'artefact dans [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- la direction vers l'avant dans [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills doit être lu comme trois surfaces connectées :

| Surfaces | Qu'est-ce que c'est | Comment ça change |
|:--------|:---------------|:--------------|
| 📥 `compétences/` | Référentiel public de compétences natives | PR des contributeurs directs et apports externes examinés basés sur le référentiel |
| ✨ `skills_omni/` | Surface dérivée améliorée des meilleures pratiques | PR compagnons d'amélioration privés uniquement |
| 🖥️ Surfaces d'exécution | CLI, API, MCP et A2A sur le même catalogue généré | Automatisation de la création, de la validation et de la publication |---

## 📌 Current Decisions

Ces questions d’architecture ne sont plus « ouvertes » en pratique et sont désormais traitées comme des décisions de projet :

1.**La distribution reste le manifeste en premier, plus les archives signées**
   Le manifeste lisible par machine reste le contrat consommé par CLI, API, MCP et A2A. Les archives signées par compétence constituent la surface de téléchargement et de publication superposée à ce contrat.
2.**Les catalogues privés ou premium doivent réutiliser le même schéma de manifeste**
   L'authentification et la politique doivent être superposées en externe, et non en bifurquant la forme du manifeste ou du catalogue.
3.**La configuration MCP devrait converger vers quelques familles d'exportation canoniques**
   Awesome Omni Skills se standardise désormais autour des `mcpServers` JSON, des `servers` JSON, des `context_servers` JSON, des `mcpServers` YAML, des `extensions` YAML et des `[mcp_servers] TOML, tout en conservant les rédacteurs sur mesure uniquement lorsque les documents clients officiels nécessitent une structure différente.

Ces décisions sont conformes à la documentation officielle actuelle du MCP et du client, notamment :

- Registre MCP officiel et conseils de prise en charge des extensions sur `modelcontextprotocol.io`
- Documents OpenAI Docs MCP et Codex CLI sur `developers.openai.com` et `platform.openai.com`
- Extension VS Code MCP et documentation produit sur `code.visualstudio.com`
- documents clients pour Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman et JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doc | Ce que vous apprendrez |
|:----|:------------------|
| 📘 [Mise en route](users/GETTING-STARTED.md) | Installez, vérifiez et invoquez votre première compétence |
| 🧭 [Guide de l'utilisateur CLI](users/CLI-USER-GUIDE.md) | Référence complète des commandes et modèles d'utilisation CLI du monde réel |
| 📗 [Guide d'utilisation](users/USAGE.md) | Commandes CLI, modes d'installation, commandes d'exécution et flux de configuration MCP |
| 📦 [Bundles](utilisateurs/BUNDLES.md) | Offres groupées sélectionnées et leur disponibilité actuelle |
| 📚 [Catalogue](CATALOG.md) | Catalogue généré automatiquement des compétences publiées |
| 🔧 [Runbook système](opérations/RUNBOOK.md) | Créer, servir, sécuriser et dépanner le runtime |### 🏗️ If You Want to **Understand** the Runtime

| Doc | Ce que vous apprendrez |
|:----|:------------------|
| 🗂️ [Structure du projet](PROJECT-STRUCTURE.md) | Répertoire complet et référence de fichier pour le monorepo |
| 🗺️ [Feuille de route Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md) | Évolution de l'architecture, décisions fermées et zones d'expansion restantes |
| 🧭 [Feuille de route CLI UX](architecture/CLI-UX-ROADMAP.md) | Plan historique et forme actuelle de la CLI guidée et visuelle |
| 📐 [ADR-0001 : Fondation de l'espace de travail](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo de base et décision d'exécution partagée |
| 🔬 [Analyse de base de code](architecture/CODEBASE-ANALYSIS.md) | Composition actuelle du runtime, nombres et limites du système |
| 🌐 [Catalogue API Surface](specs/CATALOG-API.md) | Points de terminaison HTTP, filtrage, gouvernance et téléchargements |
| 🧩 [Installateur guidé CLI](specs/CLI-GUIDED-INSTALLER.md) | Contrat comportemental pour l'installateur guidé |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Shell visuel d'encre, modèle d'état et hub de services |
| 🔌 [Side-car MCP local](specs/LOCAL-MCP-SIDECAR.md) | Outils prenant en charge le système de fichiers, modèle de liste autorisée et écriture de configuration |
| 🧭 [Matrice de support client](specs/CLIENT-SUPPORT-MATRIX.md) | Clients CLI et IDE, enregistreurs, cibles manuelles et références sources pris en charge |
| 📊 [Classification des compétences](specs/SKILL-CLASSIFICATION.md) | Taxonomie, heuristiques de notation et artefacts de métadonnées |
| 🛡️ [Validation de sécurité](specs/SECURITY-VALIDATION.md) | Scanners, archives, signatures et vérification des versions |
| 📋 [Spécifications du manifeste de compétences](specs/SKILL-MANIFEST.md) | Format du manifeste lisible par machine et contrat de compatibilité |### 🤝 If You Want to **Contribute**

| Doc | Ce que vous apprendrez |
|:----|:------------------|
| 📝 [Guide de contribution](../CONTRIBUTING.md) | Flux de travail des dépôts et attentes des demandes d'extraction |
| 🌍 [Sources du référentiel](../REPOSITORY-SOURCES.md) | Comment proposer un référentiel en amont via un PR public normal, maintenant avec la prise en charge des branches et chemins « auto » de premier plan |
| 🧾 [Workflow de relations publiques de compétences](contributors/SKILL-PR-WORKFLOW.md) | Admission native, traitement automatique des améliorations, publication `skills_omni/` et attentes des réviseurs |
| 📄 [Modèle de compétences](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` avec le thème et la structure actuels |
| 🔬 [Compétence Anatomie](contributeurs/SKILL-ANATOMY.md) | Structure et attentes de qualité pour une compétence |
| ✅ [Barre de qualité](contributeurs/QUALITY-BAR.md) | Critères d'acceptation du référentiel |
| 🏆 [Livre de jeu des meilleurs scores](contributeurs/HIGH-SCORE-PLAYBOOK.md) | Qu'est-ce qui détermine des scores élevés en matière de maturité, de qualité, de bonnes pratiques et de sécurité |---

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

Pour obtenir la surface de commande complète de l'utilisateur final, utilisez le [Guide de l'utilisateur CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Le pipeline de build émet les fichiers lisibles par machine qui pilotent chaque surface d'exécution :

| Artefact | Objectif |
|:--------|:--------|
| `métadonnées.json` | Validation à l'échelle du référentiel et résumé des scores |
| `skills_index.json` | Indice de compétences normalisé repo-local |
| `dist/catalog.json` | Catalogue publié pour la recherche et le référencement |
| `dist/bundles.json` | Regrouper les définitions avec disponibilité |
| `dist/manifests/<compétence>.json` | Manifeste lisible par machine par compétence |
| `dist/archives/<compétence>.zip` | Archives de compétences (zip) |
| `dist/archives/<compétence>.tar.gz` | Archives de compétences (archive tar) |
| `dist/archives/<compétence>.checksums.txt` | Manifeste de somme de contrôle SHA-256 |

`dist/` reste volontairement engagé. Ces artefacts générés font partie du contrat d'installation, d'API, MCP, A2A, Smoke et Release.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API de registre en lecture seule pour les compétences, les offres groupées, la comparaison, la planification d'installation et les téléchargements d'artefacts.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Le side-car local prend désormais en charge l'écriture de configuration MCP de première classe pour :

-Claude Code
- Curseur
- VS Code et conteneurs de développement
- CLI Gémeaux
- Antigravité
-Kiro
-CLI du Codex
- Continuer
- Planche à voile
-OpenCode
-Cliné
- CLI Copilote GitHub
- Code kilo
-Zed
- Oie### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Cycle de vie des tâches, streaming, persistance, récupération au redémarrage et orchestration locale simple en premier. L'exécution louée partagée est disponible lorsqu'elle est explicitement activée ; Redis reste une option hébergée avancée, et non le chemin local par défaut.---

## 🗂️ Repository Map

| Chemin | Objectif |
|:-----|:--------|
| 📂 `compétences/` | Compétences d'auteur canoniques |
| 📖 `docs/utilisateurs/` | Documentation utilisateur final |
| 🤝 `docs/contributeurs/` | Modèles et conseils pour les contributeurs |
| 🏗️ `docs/architecture/` | Feuille de route, ADR et analyse technique |
| 🔧 `docs/opérations/` | Runbooks opérationnels |
| 📋 `docs/specs/` | Contrats d'exécution, de protocole et d'artefacts |
| 📚 `docs/CATALOG.md` | Catalogue de compétences généré |
| 📦 `dist/` | Artefacts générés lisibles par machine |
| 🧠 `packages/catalog-core/` | Runtime de catalogue partagé avec `ICatalogStorageAdapter` DI |
| 🌐 `packages/serveur-api/` | API HTTP en lecture seule avec interface utilisateur OpenAPI/Swagger sur `/docs` |
| 🔌 `packages/serveur-mcp/` | Serveur MCP et side-car local |
| 🤖 `packages/serveur-a2a/` | Serveur A2A et environnement d'exécution des tâches |
| 🖥️ `packages/cli/` | Points d'entrée CLI unifiés, logique d'installation et TUI visuel Ink (ESM natif) |
| ⚙️ `outils/scripts/` | Validation, génération, vérification et tests |
| 🧪 `vitest.workspace.js` | Configuration de l'espace de travail monorepo Vitest |---

## 🧪 Release Validation

```bash
npm run smoke
```

Le fumage valide :

- ✅ validation des compétences et génération de métadonnées
- ✅ outils de recatégorisation de taxonomie
- ✅ génération d'artefacts de catalogue
- ✅ démarque du catalogue générée
- ✅ génération et vérification d'archives
- ✅ Suite de tests d'intégration héritée (assertions Python PTY + Node TUI)
- ✅ Suite d'unités Vitest pour la notation, la recherche et le filtrage du catalogue
- ✅ `npm pack --dry-run`
- ✅ Démarrage et santé de l'API avec OpenAPI/Swagger UI sur `/docs`
- ✅ Démarrage MCP dans `stdio`, `stream` et `sse`
- ✅ Démarrage A2A, interrogation, streaming SSE, annulation et cycle de vie push-config
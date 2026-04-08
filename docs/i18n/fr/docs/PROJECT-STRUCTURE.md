# 🗂️ Project Structure (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Répertoire complet et référence de fichier pour le monorepo Awesome Omni Skills.**---

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

>**Le catalogue de compétences natif.**Il s'agit de la principale surface de contenu public du projet.

Contient**154**répertoires de compétences, chacun avec au minimum un playbook « SKILL.md ». Les compétences plus larges peuvent inclure les sous-répertoires `agents/`, `references/`, `examples/`, `scripts/` et `assets/`.

Les compétences arrivent par deux voies d’admission :
-**RP des contributeurs directs**— les humains soumettent directement leurs compétences
-**Importations externes basées sur le référentiel**— examen des PR `external-import/*` à partir des référentiels en amont

| Ce qu'il contient | Exemple |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Compétence de conception à code Figma |
| `compétences/architecture/SKILL.md` | Compétence en matière de révision et de planification de l'architecture |
| `skills/<nom>/metadata.json` | Classification et notation générées automatiquement |---

### `skills_omni/`

>**Dérivés améliorés en anglais uniquement.**Maintenus par le pipeline d'amélioration privé.

Contient**110**répertoires de compétences améliorés qui reflètent et améliorent leurs homologues natifs dans « skills/ ». Cette surface n'est**pas ouverte à la contribution publique directe**: elle est alimentée exclusivement par le pipeline d'amélioration automatisé.

Chaque dérivé préserve l'attribution à sa source native tout en offrant un niveau éditorial plus élevé, toujours en anglais.---

### `packages/`

>**Les espaces de travail monorepo.**Tout le code d'exécution Node.js réside ici.

| Forfait | Nom npm | Objectif |
|:--------|:--------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` | Runtime de catalogue partagé avec injection de dépendances « ICatalogStorageAdapter ». Fournit une logique de recherche, de notation, de comparaison, de recommandation et de plan d'installation utilisée par toutes les surfaces du serveur |
| 📂 `packages/cli/` | (bac de paquet racine) | Points d'entrée CLI unifiés, programme d'installation guidé, TUI visuel Ink, diagnostics, contrôles de fumée et lanceurs de services. Natif ESM |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | Registre des 9 clients pouvant être installés (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) avec résolution de chemin et mappage de drapeaux |
| 📂 `packages/serveur-api/` | `@omni-skills/serveur-api` | API de catalogue HTTP en lecture seule avec OpenAPI 3.1, interface utilisateur Swagger sur `/docs`, authentification, limitation de débit, listes d'autorisation CORS/IP, téléchargements et runtime d'administration |
| 📂 `packages/serveur-mcp/` | `@omni-skills/server-mcp` | Serveur MCP prenant en charge les transports `stdio`, `stream` et `sse`. Le mode side-car local ajoute des outils d'installation/suppression prenant en compte le système de fichiers et une écriture de configuration MCP prenant en charge le client pour 16 clients compatibles avec la configuration |
| 📂 `packages/serveur-a2a/` | `@omni-skills/server-a2a` | Exécution de tâches A2A (agent à agent) avec persistance JSON/SQLite, récupération au redémarrage, streaming SSE, annulation, mode exécuteur externe et coordination louée en option |

Chaque package a son propre répertoire `package.json`, `src/` et (sauf `install-targets`) un `vitest.config.js` pour les tests unitaires.---

### `dist/`

>**Artefacts d'exécution générés.**Intentionnellement engagé dans le contrôle de version.

Ces fichiers sont les sorties lisibles par machine consommées par les installations CLI, les réponses API, les outils MCP, les tâches A2A, les tests de fumée et la vérification des versions. Ils sont régénérés par `npm run build`.

| Chemin | Objectif |
|:-----|:--------|
| `dist/catalog.json` | Catalogue publié avec les 154 compétences, scores et métadonnées |
| `dist/bundles.json` | Définitions de regroupement avec statut de disponibilité des membres |
| `dist/manifests/<compétence>.json` | Manifeste lisible par machine par compétence |
| `dist/archives/<compétence>.zip` | Archive ZIP par compétence à télécharger |
| `dist/archives/<compétence>.tar.gz` | Archive tarball par compétence à télécharger |
| `dist/archives/<compétence>.checksums.txt` | Manifeste de somme de contrôle SHA-256 par archive |
| `dist/archives/<compétence>.zip.sig` | Signature détachée (au moment de la sortie uniquement, gitignored) |
| `dist/release-notes.md` | Notes de version générées automatiquement (gitignored) |
| `dist/signature/` | Matériel de clé publique dérivé (gitignored) |

>**Pourquoi `dist/` est-il validé ?**Parce qu'il fait partie du contrat d'installation, d'API, de MCP, d'A2A et de version. Les consommateurs s'attendent à ce que ces fichiers soient présents sans exécuter de build.---

### `data/`

>**Fichiers de données de projet statiques.**Définitions contrôlées par la source qui déterminent le comportement de construction et d'exécution.

| Fichier | Objectif |
|:-----|:--------|
| `data/bundles.json` | Définitions de bundles organisés (listes de membres de compétences par bundle) |
| `data/project_identity.json` | Identité canonique du projet : nom, description, page d'accueil, sujets GitHub, définitions de surface d'exécution et listes de clients |
| `data/project_status.json` | Aperçu des métriques du projet généré : nombre de compétences, scores, nombre de clients, nombre de catégories et écarts de qualité |---

### `docs/`

>**Toute la documentation du projet.**Organisé par public.

| Chemin | Public | Contenu |
|:-----|:---------|:--------|
| `docs/README.md` | Tout le monde | Centre de documentation — index central de tous les documents |
| `docs/CATALOG.md` | Utilisateurs | Catalogue généré automatiquement répertoriant les 154 compétences avec des scores |
| `docs/PROJET-STRUCTURE.md` | Tout le monde | Ce fichier — référence du répertoire du projet |
| `docs/utilisateurs/` | Utilisateurs finaux | Mise en route, guide de l'utilisateur CLI, guide d'utilisation, bundles, runbook |
| `docs/contributeurs/` | Contributeurs | Anatomie des compétences, modèle, flux de travail de relations publiques, barre de qualité, manuel de jeu pour les meilleurs scores |
| `docs/specs/` | Architectes | API, side-car MCP, programme d'installation CLI, shell visuel, matrice de support client, classification, sécurité et spécifications du manifeste |
| `docs/i18n/` | Utilisateurs internationaux | Traductions générées automatiquement de la racine README en 32 langues |#### `docs/users/`

| Fichier | Objectif |
|:-----|:--------|
| `MISE EN ROUTE.md` | Installez, vérifiez et invoquez une compétence en moins de 2 minutes |
| `CLI-USER-GUIDE.md` | Référence complète des commandes avec des scénarios étape par étape |
| `USAGE.md` | Commandes CLI, modes d'installation, commandes d'exécution et flux de configuration MCP |
| `BUNDLES.md` | Offres groupées sélectionnées et leur disponibilité actuelle |
| `IMPRESSIONNANT-OMNI-SKILLS-ROLLOUT.md` | État de la migration du changement de marque et rapport d'acceptation |
| `RUNBOOK.md` | Référence opérationnelle (également liée sous `docs/opérations/RUNBOOK.md`) |#### `docs/contributors/`

| Fichier | Objectif |
|:-----|:--------|
| `COMPÉTENCE-ANATOMIE.md` | Structure et attentes de qualité pour une compétence |
| `SKILL-TEMPLATE.md` | Starter `SKILL.md` avec le thème actuel |
| `SKILL-PR-WORKFLOW.md` | Admission native, traitement des rehausseurs et attentes des évaluateurs |
| `QUALITY-BAR.md` | Critères d'acceptation et critères de référence actuels |
| `HIGH-SCORE-PLAYBOOK.md` | Qu'est-ce qui détermine des scores élevés en matière de maturité, de qualité, de bonnes pratiques et de sécurité |#### `docs/specs/`

| Fichier | Objectif |
|:-----|:--------|
| `CATALOGUE-API.md` | Points de terminaison HTTP, filtrage, gouvernance et téléchargements |
| `INSTALLATEUR-GUIDÉ-CLI.md` | Contrat comportemental pour l'installateur guidé |
| `CLI-VISUAL-SHELL.md` | Shell visuel d'encre, modèle d'état et hub de services |
| `LOCAL-MCP-SIDECAR.md` | Outils prenant en charge le système de fichiers, modèle de liste autorisée et écriture de configuration |
| `CLIENT-SUPPORT-MATRIX.md` | Référence complète du client et du rédacteur sur 9 clients d'installation + 16 clients de configuration |
| `SKILL-CLASSIFICATION.md` | Taxonomie, heuristiques de notation et artefacts de métadonnées |
| `SÉCURITÉ-VALIDATION.md` | Scanners, archives, signatures et vérification des versions |
| `COMPÉTENCE-MANIFESTE.md` | Format du manifeste lisible par machine et contrat de compatibilité |#### `docs/i18n/`

Contient**32**répertoires de langues, chacun avec un « README.md » traduit. Les langues incluent : ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Les traductions sont générées automatiquement par « npm run i18n:render » et validées par « npm run i18n:check ».---

### `tools/`

>**Infrastructure de construction, de validation et de test.**Principalement des scripts Python consommés par les commandes `npm run`.#### `tools/scripts/`

| Scénario | Commande npm | Objectif |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run valider` | Valide tous les fichiers `SKILL.md` et régénère `metadata.json` |
| `skill_metadata.py` | (importé par validation) | Validateur monolithique de base : analyse frontale, taxonomie, notation, analyse de sécurité |
| `recategorize_skills.py` | `npm run taxonomy:report` | Affiche ou applique la normalisation des catégories canoniques |
| `generate_index.py` | `index d'exécution npm` | Génère des manifestes, des archives et des sommes de contrôle `dist/` |
| `build_catalog.js` | `npm exécuter le catalogue` | Génère `docs/CATALOG.md` à partir de `skills_index.json` |
| `generate_project_status.py` | `npm exécuter le projet : statut` | Génère `data/project_status.json` avec les métriques actuelles |
| `render_project_docs.py` | `npm run docs:render` | Les mises à jour ont généré des blocs dans README, docs et CONTRIBUTING |
| `generate_i18n.py` | `npm exécute i18n:render` | Génère ou met à jour les traductions `docs/i18n/` |
| `dépôt_sources.py` | `npm exécuter le registre : render` | Rend et valide `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm exécuter l'identité : vérifier` | Vérifie l'alignement des identités package.json, README et du référentiel |
| `verify_archives.py` | `npm run verify:archives` | Vérifie l'intégrité des archives et les signatures facultatives |
| `verify_security_scanners.py` | `npm run verify:scanners` | Confirme la couverture du scanner dans les métadonnées générées |
| `generate_release_notes.py` | `npm run release:notes` | Génère des notes de version personnalisées à partir des métadonnées et de l'historique git |
| `next_release_version.py` | `npm run release:prochaine version` | Calcule la prochaine version du semver à l'aide de la stratégie patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Synchronise la version entre les packages de l'espace de travail |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Imprime ou applique la description, la page d'accueil et les sujets GitHub |
| `validate_contribution_scope.py` | (CI) | Valide les limites de la portée de la contribution PR |
| `install_githooks.js` | `npm run hooks:installer` | Installe le hook de pré-validation local |#### `tools/scripts/tests/`

Suites de tests d'intégration et TUI consommées par `npm test` :
- Tests Python PTY hérités
- Assertions TUI du nœud
- Orchestrateur de testeurs---

### `.github/`

>**Actions GitHub et modèles de communauté.**#### `.github/workflows/`

| Flux de travail | Déclencheur | Objectif |
|:--------|:--------|:--------|
| `valider.yml` | Push/PR vers « principal » | Créer, tester et confirmer que les artefacts générés sont validés |
| `version.yml` | Tag push `v*` ou envoi manuel | Scanners de niveau version, signature, publication npm, version GitHub |
| `auto-release-skill-merges.yml` | Fusionner avec `main` en touchant `skills/*` | Modification, marquage et publication automatiques de la version en cas de changement de compétence |
| `améliorer-pr-skills.yml` | PR avec changements de compétences | Gère le pipeline d'amélioration privé et publie des relations publiques associées |
| `sync-repository-metadata.yml` | Modifications apportées à `data/project_identity.json` | Synchronise la description, la page d'accueil et les sujets de GitHub |#### `.github/pull_request_template.md`

Modèle PR par défaut avec liste de contrôle pour les contributions aux compétences et à l'exécution.---

### `.githooks/`

>**Hooks Git locaux.**Installé via `npm run hooks:install`.

| Fichier | Objectif |
|:-----|:--------|
| `pré-engagement` | Exécute une validation de base avant d'autoriser une validation |---

## 📄 Root Files Reference

| Fichier | Objectif |
|:-----|:--------|
| `LISEZMOI.md` | Projet README destiné au public avec bannière de héros, guide d'installation et aperçu complet des fonctionnalités |
| `CONTRIBUER.md` | Guide du contributeur avec workflows de compétences, d'exécution et d'admission |
| `SÉCURITÉ.md` | Instructions relatives à la politique de sécurité, à la portée et aux rapports sur les vulnérabilités |
| `CODE_OF_CONDUCT.md` | Engagement des contributeurs v2.1 |
| `REPOSITOIRE-SOURCES.md` | Registre public des référentiels en amont proposés pour apport externe |
| 'LICENCE' | Licence MIT (code et outils) |
| `CONTENU-LICENCE` | CC BY 4.0 (documentation et contenu des compétences) |
| `package.json` | Package monorepo racine : scripts, dépendances, points d'entrée bin, fichiers et configuration de l'espace de travail |
| `package-lock.json` | fichier de verrouillage npm (généré automatiquement) |
| `métadonnées.json` | Validation à l'échelle du référentiel et résumé des scores (générés par `npm run validate`) |
| `skills_index.json` | Index de compétences normalisé repo-local (généré par `npm run validate`) |
| `.gitignore` | Exclusions du contrôle de version — notamment `dist/` n'est**pas**ignoré |
| `.npmignore` | Exclut `__pycache__/` et `*.pyc` de l'archive tar npm |
| `.version-node` | Épinglage de la version Node.js : `22` |
| `.nvmrc` | Épinglage de la version nvm : `22` (miroirs `.node-version`) |
| `vitest.config.js` | Configuration Root Vitest faisant référence aux 5 configurations de test au niveau du package |
| `vitest.workspace.js` | Définition de l'espace de travail Vitest pour l'exécution de tests monorepo |---

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

Tout ce qui précède s'exécute séquentiellement dans le cadre de « npm run build ».
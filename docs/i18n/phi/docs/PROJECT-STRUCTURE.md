# 🗂️ Project Structure (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Kumpletuhin ang direktoryo at file reference para sa Awesome Omni Skills monorepo.**---

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

>**Ang katalogo ng katutubong kasanayan.**Ito ang pangunahing pampublikong nilalamang ibabaw ng proyekto.

Naglalaman ng**154**mga direktoryo ng kasanayan, bawat isa ay may hindi bababa sa isang `SKILL.md` playbook. Maaaring kabilang sa mas malalaking kasanayan ang `mga ahente/`, `mga sanggunian/`, `mga halimbawa/`, `script/`, at `mga asset/` na mga subdirectory.

Dumarating ang mga kasanayan sa pamamagitan ng dalawang landas ng paggamit:
-**Direct contributor PRs**— direktang nagsusumite ng mga kasanayan ang mga tao
-**Mga panlabas na import na nakabatay sa repositoryo**— sinuri ang mga `external-import/*` PR mula sa mga upstream na repository

| Ano ang nilalaman nito | Halimbawa |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Figma design-to-code na kasanayan |
| `skills/architecture/SKILL.md` | Kasanayan sa pagsusuri at pagpaplano ng arkitektura |
| `kasanayan/<pangalan>/metadata.json` | Awtomatikong nabuong pag-uuri at pagmamarka |---

### `skills_omni/`

>**Na-curate ang pinahusay na English-only derivatives.**Pinapanatili ng pribadong enhancement pipeline.

Naglalaman ng**110**pinahusay na mga direktoryo ng kasanayan na sumasalamin at nagpapahusay sa kanilang mga katutubong katapat sa `kasanayan/`. Ang ibabaw na ito ay**hindi bukas para sa direktang pampublikong kontribusyon**— eksklusibo itong pinupuno ng automated enhancer pipeline.

Ang bawat derivative ay nagpapanatili ng pagpapatungkol sa katutubong pinagmulan nito habang nagbibigay ng mas mataas na pamantayang pang-editoryal, palaging nasa English.---

### `packages/`

>**Ang mga monorepo na workspace.**Lahat ng runtime Node.js code ay naninirahan dito.

| Package | npm Pangalan | Layunin |
|:--------|:---------|:--------|
| 📂 `mga pakete/catalog-core/` | `@omni-skills/catalog-core` | Nakabahaging runtime ng catalog na may `ICatalogStorageAdapter` dependency injection. Nagbibigay ng paghahanap, pagmamarka, paghahambing, rekomendasyon, at lohika ng pag-install ng plano na ginagamit ng lahat ng surface ng server |
| 📂 `mga pakete/cli/` | (root package bin) | Pinag-isang CLI entrypoints, guided installer, Ink visual TUI, diagnostics, smoke checks, at service launcher. ESM-native |
| 📂 `mga pakete/mga-install-target/` | `@omni-skills/install-targets` | Registry ng 9 na install-capable na kliyente (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) na may resolution ng path at flag mapping |
| 📂 `mga pakete/server-api/` | `@omni-skills/server-api` | Read-only na HTTP catalog API na may OpenAPI 3.1, Swagger UI sa `/docs`, auth, paglilimita sa rate, mga allowlist ng CORS/IP, pag-download, at runtime ng admin |
| 📂 `mga pakete/server-mcp/` | `@omni-skills/server-mcp` | MCP server na sumusuporta sa `stdio`, `stream`, at `sse` transports. Ang lokal na sidecar mode ay nagdaragdag ng filesystem-aware install/remove tools at client-aware na MCP config writing para sa 16 na config-capable na kliyente |
| 📂 `mga pakete/server-a2a/` | `@omni-skills/server-a2a` | A2A (Agent-to-Agent) task runtime na may JSON/SQLite persistence, restart recovery, SSE streaming, cancellation, external executor mode, at optional leased coordination |

Ang bawat package ay may sariling `package.json`, `src/` directory, at (maliban sa `install-targets`) isang `vitest.config.js` para sa mga unit test.---

### `dist/`

>**Bumuo ng mga artifact ng runtime.**Sinadyang nakatuon sa kontrol ng bersyon.

Ang mga file na ito ay ang mga output na nababasa ng makina na ginagamit ng mga pag-install ng CLI, mga tugon sa API, mga tool sa MCP, mga gawain sa A2A, mga pagsubok sa usok, at pag-verify ng release. Ang mga ito ay muling nabuo ng `npm run build`.

| Landas | Layunin |
|:-----|:--------|
| `dist/catalog.json` | Na-publish na catalog na may lahat ng 154 na kasanayan, marka, at metadata |
| `dist/bundles.json` | Mga kahulugan ng bundle na may katayuan sa pagiging available ng miyembro |
| `dist/manifests/<skill>.json` | Per-skill machine-readable manifest |
| `dist/archives/<skill>.zip` | Per-skill ZIP archive para sa pag-download |
| `dist/archives/<skill>.tar.gz` | Per-skill tarball archive para sa pag-download |
| `dist/archives/<skill>.checksums.txt` | SHA-256 checksum manifest bawat archive |
| `dist/archives/<skill>.zip.sig` | Detached signature (release-time lang, gitignored) |
| `dist/release-notes.md` | Awtomatikong nabuong mga tala sa paglabas (na-giignore) |
| `dist/signing/` | Nagmula sa pampublikong key na materyal (giignore) |

>**Bakit ginawa ang `dist/`?**Dahil bahagi ito ng kontrata sa pag-install, API, MCP, A2A, at release. Inaasahan ng mga mamimili na naroroon ang mga file na ito nang hindi nagpapatakbo ng build.---

### `data/`

>**Mga static na file ng data ng proyekto.**Mga depinisyon na kinokontrol ng pinagmulan na nagtutulak sa gawi ng build at runtime.

| File | Layunin |
|:-----|:--------|
| `data/bundles.json` | Na-curate na mga kahulugan ng bundle (mga listahan ng miyembro ng kasanayan bawat bundle) |
| `data/project_identity.json` | Canonical na pagkakakilanlan ng proyekto: pangalan, paglalarawan, homepage, mga paksa sa GitHub, mga kahulugan sa ibabaw ng runtime, at mga listahan ng kliyente |
| `data/project_status.json` | Nabuo na snapshot ng mga sukatan ng proyekto: mga bilang ng kasanayan, mga marka, mga bilang ng kliyente, mga bilang ng kategorya, at mga spread ng kalidad |---

### `docs/`

>**Lahat ng dokumentasyon ng proyekto.**Inayos ayon sa madla.

| Landas | Madla | Nilalaman |
|:-----|:---------|:--------|
| `docs/README.md` | Lahat | Documentation hub — central index sa lahat ng docs |
| `docs/CATALOG.md` | Mga gumagamit | Awtomatikong nabuong catalog na naglilista ng lahat ng 154 na kasanayan na may mga marka |
| `docs/PROJECT-STRUCTURE.md` | Lahat | Ang file na ito — sanggunian sa direktoryo ng proyekto |
| `docs/users/` | Mga end user | Pagsisimula, gabay sa gumagamit ng CLI, gabay sa paggamit, mga bundle, runbook |
| `docs/contributors/` | Mga Contributor | Skill anatomy, template, PR workflow, quality bar, high-score playbook |
| `docs/specs/` | Mga Arkitekto | API, MCP sidecar, CLI installer, visual shell, client support matrix, classification, security, at manifest specs |
| `docs/i18n/` | Mga internasyonal na user | Mga awtomatikong nabuong pagsasalin ng root README sa 32 wika |#### `docs/users/`

| File | Layunin |
|:-----|:--------|
| `SIMULA.md` | Mag-install, mag-verify, at mag-invoke ng isang skill sa loob ng wala pang 2 minuto |
| `CLI-USER-GUIDE.md` | Buong command reference na may sunud-sunod na mga sitwasyon |
| `USAGE.md` | Mga CLI command, install mode, runtime command, at MCP config flows |
| `BUNDLES.md` | Mga na-curate na bundle at ang kanilang kasalukuyang availability |
| `GALING-OMNI-SKILLS-ROLLOUT.md` | I-rebrand ang status ng paglilipat at ulat ng pagtanggap |
| `RUNBOOK.md` | Sanggunian sa pagpapatakbo (naka-link din bilang `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| File | Layunin |
|:-----|:--------|
| `KASANAYAN-ANATOMY.md` | Istruktura at kalidad ng mga inaasahan para sa isang kasanayan |
| `SKILL-TEMPLATE.md` | Starter `SKILL.md` na may kasalukuyang frontmatter |
| `KASANAYAN-PR-WORKFLOW.md` | Native intake, pagpoproseso ng enhancer, at mga inaasahan ng reviewer |
| `QUALITY-BAR.md` | Pamantayan sa pagtanggap at kasalukuyang mga benchmark |
| `HIGH-SCORE-PLAYBOOK.md` | Ano ang nagtutulak ng mataas na maturity, kalidad, pinakamahusay na kagawian, at mga marka ng seguridad |#### `docs/specs/`

| File | Layunin |
|:-----|:--------|
| `CATALOG-API.md` | Mga endpoint ng HTTP, pag-filter, pamamahala, at pag-download |
| `CLI-GUIDED-INSTALLER.md` | Kontrata sa pag-uugali para sa ginabayang installer |
| `CLI-VISUAL-SHELL.md` | Ink visual shell, state model, at service hub |
| `LOCAL-MCP-SIDECAR.md` | Mga tool sa filesystem-aware, allowlist model, at config writing |
| `CLIENT-SUPPORT-MATRIX.md` | Buong sanggunian ng kliyente at manunulat sa 9 install + 16 na config client |
| `SKILL-CLASSIFICATION.md` | Taxonomy, scoring heuristics, at metadata artifacts |
| `SECURITY-VALIDATION.md` | Mga scanner, archive, lagda, at pag-verify ng release |
| `SKILL-MANIFEST.md` | Nababasa ng machine na manifest format at kontrata sa pagiging tugma |#### `docs/i18n/`

Naglalaman ng**32**mga direktoryo ng wika, bawat isa ay may isinaling `README.md`. Kabilang sa mga wika ang: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Ang mga pagsasalin ay awtomatikong binuo ng `npm run i18n:render` at na-validate ng `npm run i18n:check`.---

### `tools/`

>**Bumuo, nagpapatunay, at sumubok ng imprastraktura.**Pangunahin ang mga script ng Python na ginagamit ng mga command na `npm run`.#### `tools/scripts/`

| Script | npm Command | Layunin |
|:-------|:------------|:--------|
| `validate_skills.py` | `npm run validate` | Pinapatunayan ang lahat ng mga file na `SKILL.md` at binabago ang `metadata.json` |
| `skill_metadata.py` | (na-import sa pamamagitan ng validate) | Core monolithic validator: frontmatter parsing, taxonomy, scoring, security scanning |
| `recategorize_skills.py` | `npm run taxonomy:report` | Nagpapakita o naglalapat ng normalisasyon ng kategoryang canonical |
| `generate_index.py` | `npm run index` | Bumubuo ng `dist/` manifest, archive, at checksum |
| `build_catalog.js` | `npm run catalog` | Bumubuo ng `docs/CATALOG.md` mula sa `skills_index.json` |
| `generate_project_status.py` | `npm run project:status` | Bumubuo ng `data/project_status.json` gamit ang mga kasalukuyang sukatan |
| `render_project_docs.py` | `npm run docs:render` | Ang mga update ay nakabuo ng mga bloke sa README, docs, at CONTRIBUTING |
| `generate_i18n.py` | `npm run i18n:render` | Bumubuo o nag-a-update ng mga pagsasalin ng `docs/i18n/` |
| `repository_sources.py` | `npm run registry:render` | Nagre-render at nagpapatunay ng `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm run identity:check` | Bine-verify ang pagkakahanay ng pagkakakilanlan ng package.json, README, at repo |
| `verify_archives.py` | `npm run verify:archives` | Bine-verify ang integridad ng archive at mga opsyonal na lagda |
| `verify_security_scanners.py` | `npm run verify:scanners` | Kinukumpirma ang saklaw ng scanner sa nabuong metadata |
| `generate_release_notes.py` | `npm run release:notes` | Bumubuo ng mga custom na tala sa paglabas mula sa metadata at git history |
| `next_release_version.py` | `npm run release:next-version` | Kinakalkula ang susunod na bersyon ng semver gamit ang patakarang patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Sini-synchronize ang bersyon sa mga workspace package |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Nagpi-print o naglalapat ng paglalarawan sa GitHub, homepage, at mga paksa |
| `validate_contribution_scope.py` | (CI) | Pinapatunayan ang mga hangganan ng saklaw ng kontribusyon ng PR |
| `install_githooks.js` | `npm run hooks:install` | Ini-install ang lokal na pre-commit hook |#### `tools/scripts/tests/`

Integration at TUI test suites na ginagamit ng `npm test`:
- Mga pagsubok sa Legacy Python PTY
- Mga paninindigan ng Node TUI
- Test runner orkestra---

### `.github/`

>**Mga Pagkilos sa GitHub at mga template ng komunidad.**#### `.github/workflows/`

| Daloy ng Trabaho | Trigger | Layunin |
|:---------|:--------|:--------|
| `validate.yml` | Push/PR sa `pangunahin` | Bumuo, sumubok, at kumpirmahin ang mga nabuong artifact ay ginawa |
| `release.yml` | Tag push `v*` o manu-manong pagpapadala | Mga scanner sa grade-release, pag-sign, npm publish, GitHub Release |
| `auto-release-skill-merges.yml` | Pagsamahin sa `pangunahing` pagpindot sa `kasanayan/*` | Awtomatikong bersyon bump, tag, at release sa mga pagbabago sa kasanayan |
| `enhance-pr-skills.yml` | PR na may mga pagbabago sa kasanayan | Pinapatakbo ang pribadong enhancer pipeline at nagpo-post ng kasamang PR |
| `sync-repository-metadata.yml` | Mga pagbabago sa `data/project_identity.json` | Sini-sync ang paglalarawan ng GitHub, homepage, at mga paksa |#### `.github/pull_request_template.md`

Default na template ng PR na may checklist para sa mga kontribusyon sa kasanayan at runtime.---

### `.githooks/`

>**Local Git hooks.**Na-install sa pamamagitan ng `npm run hooks:install`.

| File | Layunin |
|:-----|:--------|
| `pre-commit` | Nagpapatakbo ng pangunahing pagpapatunay bago payagan ang isang commit |---

## 📄 Root Files Reference

| File | Layunin |
|:-----|:--------|
| `README.md` | Nakaharap sa publiko ang proyektong README na may hero banner, gabay sa pag-install, at buong pangkalahatang-ideya ng feature |
| `CONTRIBUTING.md` | Gabay ng contributor na may kasanayan, runtime, at mga daloy ng trabaho sa paggamit |
| `SECURITY.md` | Patakaran sa seguridad, saklaw, at mga tagubilin sa pag-uulat ng kahinaan |
| `CODE_OF_CONDUCT.md` | Tipan ng Contributor v2.1 |
| `REPOSITORY-SOURCES.md` | Pampublikong pagpapatala ng mga iminungkahing upstream na repository para sa panlabas na paggamit |
| `LISENSYA` | Lisensya ng MIT (code at tooling) |
| `LICENSE-CONTENT` | CC BY 4.0 (dokumentasyon at nilalaman ng kasanayan) |
| `package.json` | Root monorepo package: mga script, dependencies, bin entrypoints, file, at workspace config |
| `package-lock.json` | npm lockfile (auto-generated) |
| `metadata.json` | Pagpapatunay sa buong repositoryo at buod ng marka (binuo ng `npm run validate`) |
| `skills_index.json` | Repo-local normalized skill index (binuo ng `npm run validate`) |
| `.gitignore` | Mga pagbubukod ng kontrol sa bersyon — kapansin-pansing ang `dist/` ay**hindi**binabalewala |
| `.npmignore` | Hindi kasama ang `__pycache__/` at `*.pyc` mula sa npm tarball |
| `.node-version` | Pagpi-pin ng bersyon ng Node.js: `22` |
| `.nvmrc` | nvm version pinning: `22` (mirrors `.node-version`) |
| `vitest.config.js` | Root Vitest configuration na tumutukoy sa lahat ng 5 package-level test configs |
| `vitest.workspace.js` | Vitest workspace kahulugan para sa monorepo-aware test execution |---

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

Ang lahat ng nasa itaas ay tumatakbo nang sunud-sunod bilang bahagi ng `npm run build`.
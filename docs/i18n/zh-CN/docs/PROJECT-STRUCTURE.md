# 🗂️ Project Structure (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Awesome Omni Skills monorepo 的完整目录和文件参考。**---

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

>**本地技能目录。**这是该项目的主要公共内容界面。

包含**154**技能目录，每个目录至少有一个“SKILL.md”剧本。更大的技能可能包括“agents/”、“references/”、“examples/”、“scripts/”和“assets/”子目录。

技能通过两条吸收途径获得：
-**直接贡献者 PR**— 人类直接提交技能
-**基于存储库的外部导入**- 审查来自上游存储库的“external-import/*” PR

|它包含什么 |示例|
|:-----------------|:--------|
| `技能/omni-figma/SKILL.md` | Figma 设计到代码技巧 |
| `技能/架构/SKILL.md` |架构审查和规划技巧 |
| `技能/<名称>/metadata.json` |自动生成的分类和评分 |---

### `skills_omni/`

>**策划改进的纯英文衍生品。**由私人增强管道维护。

包含**110**增强的技能目录，这些目录镜像并改进了“skills/”中的本地对应项。该表面**不开放供直接公众贡献**- 它仅由自动增强器管道填充。

每个衍生品都保留了其原始来源，同时提供更高的编辑标准（始终为英文）。---

### `packages/`

>**monorepo 工作区。**所有运行时 Node.js 代码都位于此处。

|套餐 | npm 名称 |目的|
|:--------|:--------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` |具有“ICatalogStorageAdapter”依赖项注入的共享目录运行时。提供所有服务器表面使用的搜索、评分、比较、推荐和安装计划逻辑 |
| 📂 `packages/cli/` | （根包bin） |统一 CLI 入口点、引导安装程序、Ink 可视化 TUI、诊断、烟雾检查和服务启动器。 ESM 原生 |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` | 9 个可安装客户端（Claude Code、Cursor、Gemini CLI、Codex CLI、Kiro、Antigravity、Goose、Qwen Code、OpenCode）的注册表，具有路径解析和标志映射 |
| 📂 `packages/server-api/` | `@omni-skills/server-api` |具有 OpenAPI 3.1 的只读 HTTP 目录 API、`/docs` 上的 Swagger UI、身份验证、速率限制、CORS/IP 允许列表、下载和管理运行时 |
| 📂 `packages/server-mcp/` | `@omni-skills/server-mcp` | MCP 服务器支持“stdio”、“stream”和“sse”传输。本地 sidecar 模式为 16 个具有配置功能的客户端添加了文件系统感知安装/删除工具和客户端感知 MCP 配置写入 |
| 📂 `packages/server-a2a/` | `@omni-skills/server-a2a` | A2A（代理到代理）任务运行时，具有 JSON/SQLite 持久性、重新启动恢复、SSE 流、取消、外部执行器模式和可选的租用协调 |

每个包都有自己的“package.json”、“src/”目录和（“install-targets”除外）用于单元测试的“vitest.config.js”。---

### `dist/`

>**生成的运行时工件。**有意致力于版本控制。

这些文件是 CLI 安装、API 响应、MCP 工具、A2A 任务、冒烟测试和发布验证所使用的机器可读输出。它们由“npm run build”重新生成。

|路径|目的|
|:-----|:--------|
| `dist/catalog.json` |已发布目录，包含所有 154 项技能、分数和元数据 |
| `dist/bundles.json` |包含会员可用性状态的捆绑定义 |
| `dist/manifests/<skill>.json` |每技能机器可读清单 |
| `dist/archives/<skill>.zip` |按技能 ZIP 存档可供下载 |
| `dist/archives/<skill>.tar.gz` |按技能 tarball 存档供下载 |
| `dist/archives/<skill>.checksums.txt` |每个存档的 SHA-256 校验和清单 |
| `dist/archives/<skill>.zip.sig` |分离签名（仅限发布时间，gitignored）|
| `dist/release-notes.md` |自动生成的发行说明（gitignored）|
| `dist/signing/` |派生公钥材料（gitignored）|

>**为什么要提交 `dist/`？**因为它是安装、API、MCP、A2A 和发布合同的一部分。消费者希望这些文件在不运行构建的情况下就存在。---

### `data/`

>**静态项目数据文件。**驱动构建和运行时行为的源代码控制定义。

|文件 |目的|
|:-----|:--------|
| `data/bundles.json` |精心策划的捆绑包定义（每个捆绑包的技能成员列表）|
| `data/project_identity.json` |规范项目标识：名称、描述、主页、GitHub 主题、运行时表面定义和客户端列表 |
| `data/project_status.json` |生成的项目指标快照：技能计数、分数、客户计数、类别计数和质量分布 |---

### `docs/`

>**所有项目文档。**按受众组织。

|路径|观众|内容 |
|:-----|:---------|:--------|
| `docs/README.md` |大家 |文档中心 — 所有文档的中央索引 |
| `docs/CATALOG.md` |用户 |自动生成的目录列出了所有 154 项技能及其分数 |
| `docs/项目结构.md` |大家 |此文件 — 项目目录参考 |
| `文档/用户/` |最终用户|入门、CLI 用户指南、使用指南、捆绑包、运行手册 |
| `文档/贡献者/` |贡献者 |技能剖析、模板、公关工作流程、质量栏、高分攻略 |
| `文档/规格/` |建筑师 | API、MCP sidecar、CLI 安装程序、可视 shell、客户端支持矩阵、分类、安全性和清单规范 |
| `文档/i18n/` |国际用户|自动生成 32 种语言的根自述文件翻译 |#### `docs/users/`

|文件 |目的|
|:-----|:--------|
| `入门.md` |在 2 分钟内安装、验证和调用技能 |
| `CLI-用户指南.md` |包含分步场景的完整命令参考 |
| `用法.md` | CLI 命令、安装模式、运行时命令和 MCP 配置流程 |
| `捆绑.md` |精选捆绑包及其当前可用性 |
| `真棒全技能推出.md` |品牌重塑迁移状态和验收报告|
| `RUNBOOK.md` |操作参考（也链接为“docs/operations/RUNBOOK.md”）|#### `docs/contributors/`

|文件 |目的|
|:-----|:--------|
| `技能解剖.md` |技能的结构和质量期望|
| `技能模板.md` |带有当前 frontmatter 的入门“SKILL.md” |
| `技能-公关-工作流程.md` |原生摄入、增强剂处理和审稿人期望 |
| `质量栏.md` |验收标准和当前基准 |
| `高分剧本.md` |是什么推动了高成熟度、质量、最佳实践和安全评分 |#### `docs/specs/`

|文件 |目的|
|:-----|:--------|
| `目录-API.md` | HTTP 端点、过滤、治理和下载 |
| `CLI 引导安装程序.md` |指导安装人员的行为契约|
| `CLI-VISUAL-SHELL.md` | Ink 视觉外壳、状态模型和服务中心 |
| `LOCAL-MCP-SIDECAR.md` |文件系统感知工具、白名单模型和配置写入 |
| `客户端支持矩阵.md` |跨 9 个安装 + 16 个配置客户端的完整客户端和编写器参考 |
| `技能分类.md` |分类法、评分启发法和元数据工件 |
| `安全验证.md` |扫描仪、存档、签名和发布验证 |
| `技能清单.md` |机器可读的清单格式和兼容性合同|#### `docs/i18n/`

包含**32**语言目录，每个目录都有翻译后的“README.md”。语言包括：ar、bg、cs、da、de、es、fi、fr、he、hi、hu、id、in、it、ja、ko、ms、nl、no、phi、pl、pt、pt-BR、ro、ru、sk、sv、th、tr、uk-UA、vi、zh-CN。

翻译由“npm run i18n:render”自动生成，并由“npm run i18n:check”验证。---

### `tools/`

>**构建、验证和测试基础设施。**主要是“npm run”命令使用的 Python 脚本。#### `tools/scripts/`

|脚本| npm 命令 |目的|
|:--------|:------------|:--------|
| `validate_skills.py` | `npm 运行验证` |验证所有 `SKILL.md` 文件并重新生成 `metadata.json` |
| `skill_metadata.py` | （由验证导入）|核心整体验证器：frontmatter 解析、分类、评分、安全扫描 |
| `recategorize_skills.py` | `npm 运行分类：报告` |显示或应用规范类别规范化 |
| `generate_index.py` | `npm 运行索引` |生成 `dist/` 清单、档案和校验和 |
| `build_catalog.js` | `npm 运行目录` |从 `skills_index.json` 生成 `docs/CATALOG.md` |
| `generate_project_status.py` | `npm 运行项目：状态` |使用当前指标生成“data/project_status.json” |
| `render_project_docs.py` | `npm run docs:render` |更新自述文件、文档和贡献 | 中生成的块
| `generate_i18n.py` | `npm 运行 i18n:render` |生成或更新 `docs/i18n/` 翻译 |
| `repository_sources.py` | `npm 运行注册表：渲染` |渲染并验证`REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm 运行身份：检查` |验证 package.json、README 和 repo 身份对齐 |
| `verify_archives.py` | `npm 运行验证：档案` |验证存档完整性和可选签名 |
| `verify_security_scanners.py` | `npm 运行验证：扫描仪` |确认生成的元数据中的扫描仪覆盖范围 |
| `generate_release_notes.py` | `npm run release:notes` |从元数据和 git 历史记录生成自定义发行说明 |
| `next_release_version.py` | `npm run release:next-version` |使用 patch-to-10 策略计算下一个 semver 版本 |
| `sync_repo_version.py` | `npm run release:sync-version` |跨工作区包同步版本 |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` |打印或应用 GitHub 描述、主页和主题 |
| `validate_contribution_scope.py` | (CI) |验证 PR 贡献范围边界 |
| `install_githooks.js` | `npm run hooks:install` |安装本地预提交钩子 |#### `tools/scripts/tests/`

`npm test` 使用的集成和 TUI 测试套件：
- 旧版 Python PTY 测试
- 节点 TUI 断言
- 测试运行协调器---

### `.github/`

>**GitHub Actions 和社区模板。**#### `.github/workflows/`

|工作流程|触发|目的|
|:---------|:--------|:--------|
| `验证.yml` |推送/PR 到 `main` |构建、测试并确认生成的工件已提交 |
| `release.yml` |标签推送 `v*` 或手动调度 |发布级扫描仪、签名、npm 发布、GitHub 发布 |
| `自动释放技能合并.yml` |合并到`main`，触及`skills/*` |技能变更时自动版本更新、标记和发布 |
| `enhance-pr-skills.yml` |公关与技能变化|运行私人增强器管道并发布同伴 PR |
| `sync-repository-metadata.yml` |对“data/project_identity.json”的更改 |同步 GitHub 描述、主页和主题 |#### `.github/pull_request_template.md`

默认 PR 模板，包含技能和运行时间贡献清单。---

### `.githooks/`

>**本地 Git 挂钩。**通过 `npm run hooks:install` 安装。

|文件 |目的|
|:-----|:--------|
| `预提交` |在允许提交之前运行基本验证 |---

## 📄 Root Files Reference

|文件 |目的|
|:-----|:--------|
| `自述文件.md` |面向公众的项目自述文件，包含英雄横幅、安装指南和完整功能概述 |
| `贡献.md` |包含技能、运行时间和接收工作流程的贡献者指南 |
| `安全.md` |安全政策、范围和漏洞报告说明 |
| `代码_OF_CONDUCT.md` |贡献者契约 v2.1 |
| `存储库源.md` |拟议的上游存储库的公共注册以供外部接收|
| `许可证` | MIT 许可证（代码和工具）|
| `许可内容` | CC BY 4.0（文档和技能内容）|
| `package.json` |根 monorepo 包：脚本、依赖项、bin 入口点、文件和工作区配置 |
| `package-lock.json` | npm 锁定文件（自动生成）|
| `元数据.json` |存储库范围的验证和分数摘要（由“npm run validate”生成）|
| `skills_index.json` |回购本地规范化技能指数（由“npm run validate”生成）|
| `.gitignore` |版本控制排除 - 特别是 `dist/` 不会被忽略 |
| `.npmignore` |从 npm tarball 中排除 `__pycache__/` 和 `*.pyc`
| `.node-version` | Node.js 版本固定：`22` |
| `.nvmrc` | nvm 版本固定：`22`（镜像`.node-version`）|
| `vitest.config.js` | Root Vitest 配置引用所有 5 个包级测试配置 |
| `vitest.workspace.js` |用于单一存储库感知测试执行的 Vitest 工作区定义 |---

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

上述所有内容作为“npm run build”的一部分按顺序运行。
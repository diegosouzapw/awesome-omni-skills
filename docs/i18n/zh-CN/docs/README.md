# 📖 Awesome Omni Skills — Documentation Hub (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**使用、贡献和操作 Awesome Omni Skills 的核心参考，作为公共技能存储库、精心策划的最佳实践衍生表面和共享运行时平台。**

标准社区文件位于存储库根目录中：
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> npm 包、GitHub 存储库、生成的文档和运行时入口点现在与**Awesome Omni Skills**保持一致。当前推出状态：[很棒的全能技能推出](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md)。---

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

基础轨道现在处于活动项目状态，第二个类别扩展浪潮已经在目录中。该项目现在应被视为具有可选的未来扩展轨道的工作基线：<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

未来的扩张仍需深思熟虑：

- 深化“设计”、“工具”、“数据人工智能”和“机器学习”
- 避免重新打开休眠的非代码本机类别，直到当前代码本机轨道具有更强的深度
- 在此过程中保持质量底线和增强剂审查路径完整

该扩展工作现在直接反映在实时目录和架构文档中：

- [Catalog](CATALOG.md) 中的当前目录快照
- [代码库分析](architecture/CODEBASE-ANALYSIS.md) 中的运行时和工件形状
- [Agent-Native Roadmap]（architecture/AGENT-NATIVE-ROADMAP.md）中的前进方向## 🔀 Repository Surfaces

很棒的全能技能应该被理解为三个相连的表面：

|表面|它是什么 |变化如何|
|:--------|:------------|:----------------|
| 📥 `技能/` |公共原生技能库 |直接贡献者 PR 和经过审查的基于存储库的外部摄入 |
| ✨ `skills_omni/` |策划改进的最佳实践衍生表面 |仅限私人增强剂伴侣 PR |
| 🖥️ 运行时表面 |同一生成目录上的 CLI、API、MCP 和 A2A |构建、验证和发布自动化 |---

## 📌 Current Decisions

这些架构问题在实践中不再“开放”，现在被视为项目决策：

1.**分发保持清单优先加上签名档案**
   机器可读清单仍然是 CLI、API、MCP 和 A2A 使用的合同。按技能签名的档案是位于该合同之上的下载和发布表面。
2.**私有或高级目录应重用相同的清单架构**
   身份验证和策略应该在外部分层，而不是通过分叉清单或目录形状。
3.**MCP 配置应该集中在一些规范的导出系列上**
   Awesome Omni Skills 现在围绕 JSON `mcpServers`、JSON `servers`、JSON `context_servers`、YAML `mcpServers`、YAML `extensions` 和 TOML `[mcp_servers]` 进行标准化，同时仅在官方客户端文档需要不同结构的情况下保留定制编写器。

这些决定与当前的官方 MCP 和客户文档一致，包括：

- 官方 MCP 注册表和扩展支持指南位于“modelcontextprotocol.io”
- OpenAI 文档 MCP 和 Codex CLI 文档，位于“developers.openai.com”和“platform.openai.com”
- VS Code MCP 扩展和产品文档位于“code.visualstudio.com”
- Claude Code、Cursor、Continue、Junie、Kiro、OpenCode、Cline、Kilo Code、GitHub Copilot CLI、Zed、Goose、Postman 和 JetBrains AI Assistant 的客户端文档---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

|文档 |你将学到什么 |
|:----|:------------------|
| 📘 [入门](users/GETTING-STARTED.md) |安装、验证和调用您的第一项技能 |
| 🧭 [CLI 用户指南](users/CLI-USER-GUIDE.md) |完整的命令参考和真实的 CLI 使用模式 |
| 📗 【使用指南】(users/USAGE.md) | CLI 命令、安装模式、运行时命令和 MCP 配置流程 |
| 📦 [捆绑包](users/BUNDLES.md) |精选捆绑包及其当前可用性 |
| 📚 [目录](CATALOG.md) |自动生成已发布技能目录 |
| 🔧 [系统运行手册](操作/RUNBOOK.md) |构建、服务、保护运行时并排除故障 |### 🏗️ If You Want to **Understand** the Runtime

|文档 |你将学到什么 |
|:----|:------------------|
| 🗂️ [项目结构](PROJECT-STRUCTURE.md) | monorepo 的完整目录和文件参考 |
| 🗺️ [Agent-Native 路线图](architecture/AGENT-NATIVE-ROADMAP.md) |架构演变、封闭决策和剩余扩展领域 |
| 🧭 [CLI UX 路线图](架构/CLI-UX-ROADMAP.md) |引导式和可视化 CLI 的历史计划和当前形态 |
| 📐 [ADR-0001：工作空间基础](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) |核心 monorepo 和共享运行时决策 |
| 🔬 [代码库分析](architecture/CODEBASE-ANALYSIS.md) |当前运行时组成、计数和系统边界 |
| 🌐 [目录 API Surface](specs/CATALOG-API.md) | HTTP 端点、过滤、治理和下载 |
| 🧩 [CLI 引导安装程序](specs/CLI-GUIDED-INSTALLER.md) |指导安装人员的行为契约|
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink 视觉外壳、状态模型和服务中心 |
| 🔌 [本地 MCP Sidecar](specs/LOCAL-MCP-SIDECAR.md) |文件系统感知工具、白名单模型和配置写入 |
| 🧭 [客户端支持矩阵](specs/CLIENT-SUPPORT-MAT​​RIX.md) |支持的 CLI 和 IDE 客户端、编写器、手动目标和源参考 |
| 📊 [技能分类](specs/SKILL-CLASSIFICATION.md) |分类法、评分启发法和元数据工件 |
| 🛡️ [安全验证](specs/SECURITY-VALIDATION.md) |扫描仪、存档、签名和发布验证 |
| 📋 [技能清单规范](specs/SKILL-MANIFEST.md) |机器可读的清单格式和兼容性合同|### 🤝 If You Want to **Contribute**

|文档 |你将学到什么 |
|:----|:------------------|
| 📝 [贡献指南](../CONTRIBUTING.md) |回购工作流程和拉取请求期望 |
| 🌍 [存储库来源](../REPOSITORY-SOURCES.md) |如何通过普通公共 PR 提议上游存储库，现在具有存储库优先“auto”分支和路径支持 |
| 🧾 [技能公关工作流程](contributors/SKILL-PR-WORKFLOW.md) |原生摄入、自动增强器处理、`skills_omni/` 发布以及审稿人期望 |
| 📄 [技能模板](contributors/SKILL-TEMPLATE.md) |具有当前前沿内容和结构的入门“SKILL.md” |
| 🔬 [技能解剖]（贡献者/SKILL-ANATOMY.md）|技能的结构和质量期望|
| ✅ [质量栏](贡献者/QUALITY-BAR.md) |存储库的验收标准 |
| 🏆 [高分剧本]（贡献者/HIGH-SCORE-PLAYBOOK.md）|是什么推动了高成熟度、质量、最佳实践和安全评分 |---

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

有关完整的最终用户命令界面，请使用 [CLI 用户指南](users/CLI-USER-GUIDE.md)。### 📁 Generated Artifacts

构建管道发出驱动每个运行时表面的机器可读文件：

|神器|目的|
|:---------|:--------|
| `元数据.json` |存储库范围内的验证和分数摘要 |
| `skills_index.json` |回购-本地归一化技能指数 |
| `dist/catalog.json` |已发布目录供搜索和列表 |
| `dist/bundles.json` |具有可用性的捆绑包定义 |
| `dist/manifests/<skill>.json` |每技能机器可读清单 |
| `dist/archives/<skill>.zip` |技能档案 (zip) |
| `dist/archives/<skill>.tar.gz` |技能档案（tarball）|
| `dist/archives/<skill>.checksums.txt` | SHA-256 校验和清单 |

`dist/` 有目的地保持承诺。这些生成的工件是安装、API、MCP、A2A、烟雾和发布合同的一部分。### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

用于技能、捆绑包、比较、安装规划和工件下载的只读注册表 API。### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

本地 sidecar 现在支持一流的 MCP 配置写入：

——克劳德·代码
- 光标
- VS Code 和开发容器
- 双子座 CLI
- 反重力
- 基罗
- 法典 CLI
- 继续
- 风帆冲浪
- 开放代码
——克莱恩
- GitHub 副驾驶 CLI
- 基洛代码
- 泽德
- 鹅### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

任务生命周期、流式传输、持久性、重启恢复和简单优先本地编排。显式启用时，共享租用执行可用； Redis 仍然是一个高级托管选项，而不是默认的本地路径。---

## 🗂️ Repository Map

|路径|目的|
|:-----|:--------|
| 📂 `技能/` |规范的创作技巧 |
| 📖 `文档/用户/` |最终用户文档 |
| 🤝 `文档/贡献者/` |贡献者模板和指南 |
| 🏗️ `文档/架构/` |路线图、ADR 和技术分析 |
| 🔧 `文档/操作/` |操作手册|
| 📋 `文档/规格/` |运行时、协议和工件合约 |
| 📚 `docs/CATALOG.md` |生成的技能目录|
| 📦 `dist/` |生成的机器可读工件 |
| 🧠 `packages/catalog-core/` |与“ICatalogStorageAdapter” DI 共享目录运行时
| 🌐 `packages/server-api/` | `/docs` 上具有 OpenAPI/Swagger UI 的只读 HTTP API |
| 🔌 `packages/server-mcp/` | MCP 服务器和本地 sidecar |
| 🤖 `packages/server-a2a/` | A2A 服务器和任务运行时 |
| 🖥️ `packages/cli/` |统一 CLI 入口点、安装逻辑和 Ink 可视 TUI（ESM 原生）|
| ⚙️ `工具/脚本/` |验证、生成、验证和测试 |
| 🧪 `vitest.workspace.js` | Vitest monorepo 工作区配置 |---

## 🧪 Release Validation

```bash
npm run smoke
```

冒烟验证：

- ✅ 技能验证和元数据生成
- ✅ 分类重新分类工具
- ✅ 目录工件生成
- ✅ 生成目录降价
- ✅ 档案生成和验证
- ✅ 遗留集成测试套件（Python PTY + Node TUI 断言）
- ✅ 用于目录核心评分、搜索和过滤的 Vitest 单元套件
- ✅ `npm pack --dry-run`
- ✅ 在 `/docs` 上使用 OpenAPI/Swagger UI 进行 API 启动和运行状况
- ✅ MCP 在 `stdio`、`stream` 和 `sse` 中启动
- ✅ A2A 启动、轮询、SSE 流、取消和推送配置生命周期
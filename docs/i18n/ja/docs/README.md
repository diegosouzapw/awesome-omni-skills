# 📖 Awesome Omni Skills — Documentation Hub (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**公開スキル リポジトリ、厳選されたベスト プラクティスの派生サーフェス、および共有ランタイム プラットフォームとして Awesome Omni Skills を使用、貢献、および運用するための中心的なリファレンスです。**

標準コミュニティ ファイルはリポジトリ ルートに存在します。
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> npm パッケージ、GitHub リポジトリ、生成されたドキュメント、およびランタイム エントリポイントが**Awesome Omni Skills**で調整されるようになりました。現在のロールアウト状態: [Awesome Omni Skills Rollout](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md)。---

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

現在、基礎トラックはアクティブなプロジェクト状態にあり、2 番目のカテゴリー拡張ウェーブはすでにカタログに含まれています。プロジェクトは、オプションの将来の拡張トラックを含む作業ベースラインとして読み取られるはずです。<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

将来の拡張は引き続き計画的に行われます。

- 「デザイン」「ツール」「データAI」「機械学習」を深化させる
- 現在のコードネイティブ トラックの深さが強化されるまで、休止状態の非コードネイティブ カテゴリを再開しないようにします。
- その際、品質フロアとエンハンサーのレビュー パスをそのまま維持します

その拡張作業は、ライブ カタログとアーキテクチャ ドキュメントに直接反映されるようになりました。

- [カタログ](CATALOG.md) 内の現在のカタログ スナップショット
- [コードベース分析](architecture/CODEBASE-ANALYSIS.md) のランタイムとアーティファクトの形状
- [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) の順方向## 🔀 Repository Surfaces

素晴らしいオムニ スキルは、次の 3 つの接続された面として解釈する必要があります。

|表面 |それは何ですか |どのように変化するか |
|:--------|:-----------|:------|
| 📥 `スキル/` |パブリックネイティブスキルリポジトリ |直接の貢献者 PR とレビューされたリポジトリベースの外部取り込み |
| ✨ `スキルオムニ/` |厳選された改善されたベストプラクティスの派生サーフェス |プライベート エンハンサー コンパニオン PR のみ |
| 🖥️ ランタイム サーフェス |同じ生成されたカタログ上の CLI、API、MCP、および A2A |ビルド、検証、リリースの自動化 |---

## 📌 Current Decisions

これらのアーキテクチャに関する質問は、実際には「オープン」ではなくなり、プロジェクトの決定として扱われるようになりました。

1.**配布はマニフェストファーストであり、署名付きアーカイブのままです**
   機械可読マニフェストは、CLI、API、MCP、および A2A によって消費されるコントラクトのままです。署名されたスキルごとのアーカイブは、その契約の上に重ねられたダウンロードおよびリリースの表面です。
2.**プライベート カタログまたはプレミアム カタログは同じマニフェスト スキーマを再利用する必要があります**
   認証とポリシーは、マニフェストやカタログの形状をフォークすることではなく、外部で階層化する必要があります。
3.**MCP 構成はいくつかの正規エクスポート ファミリに収束する必要があります**
   Awesome Omni Skills は、JSON `mcpServers`、JSON `servers`、JSON `context_servers`、YAML `mcpServers`、YAML `extensions`、および TOML `[mcp_servers]` を中心に標準化する一方で、公式クライアント ドキュメントが異なる構造を必要とする場合にのみオーダーメイドのライターを維持します。

これらの決定は、以下を含む現在の公式 MCP およびクライアント ドキュメントと一致しています。

- 公式 MCP レジストリと拡張機能サポート ガイダンス (「modelcontextprotocol.io」)
- OpenAI ドキュメント MCP および Codex CLI ドキュメント (`developers.openai.com` および `platform.openai.com`)
- VS Code MCP 拡張機能と製品ドキュメント (「code.visualstudio.com」)
- Claude Code、Cursor、Continue、Junie、Kiro、OpenCode、Cline、Kilo Code、GitHub Copilot CLI、Zed、Goose、Postman、および JetBrains AI Assistant のクライアント ドキュメント---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

|ドクター |何を学ぶか |
|:----|:---------------|
| 📘 [はじめに](users/GETTING-STARTED.md) |最初のスキルをインストール、検証、呼び出します |
| 🧭 [CLI ユーザーガイド](users/CLI-USER-GUIDE.md) |完全なコマンド リファレンスと実際の CLI 使用パターン |
| 📗 [利用ガイド](users/USAGE.md) | CLI コマンド、インストール モード、ランタイム コマンド、および MCP 構成フロー |
| 📦 [バンドル](users/BUNDLES.md) |厳選されたバンドルとその現在の利用可能性 |
| 📚 [カタログ](CATALOG.md) |公開されたスキルの自動生成カタログ |
| 🔧 [システム Runbook](operations/RUNBOOK.md) |ランタイムの構築、提供、保護、トラブルシューティング |### 🏗️ If You Want to **Understand** the Runtime

|ドクター |何を学ぶか |
|:----|:---------------|
| 🗂️ [プロジェクト構造](PROJECT-STRUCTURE.md) | monorepo の完全なディレクトリとファイルのリファレンス |
| 🗺️ [エージェント ネイティブ ロードマップ](アーキテクチャ/AGENT-NATIVE-ROADMAP.md) |アーキテクチャの進化、終了した決定、および残りの拡張領域 |
| 🧭 [CLI UX ロードマップ](アーキテクチャ/CLI-UX-ROADMAP.md) |ガイド付きおよびビジュアル CLI の歴史的な計画と現在の形状 |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) |コアモノリポジトリと共有ランタイムの決定 |
| 🔬 [コードベース分析](アーキテクチャ/CODEBASE-ANALYSIS.md) |現在のランタイム構成、カウント、およびシステム境界 |
| 🌐 [カタログ API サーフェス](specs/CATALOG-API.md) | HTTP エンドポイント、フィルタリング、ガバナンス、ダウンロード |
| 🧩 [CLI ガイド付きインストーラー](specs/CLI-GUIDED-INSTALLER.md) |ガイド付きインストーラーの動作契約 |
| 🖥️ [CLI ビジュアル シェル](specs/CLI-VISUAL-SHELL.md) |インクのビジュアル シェル、状態モデル、およびサービス ハブ |
| 🔌 [ローカル MCP サイドカー](specs/LOCAL-MCP-SIDECAR.md) |ファイルシステム対応ツール、許可リスト モデル、構成の書き込み |
| 🧭 [クライアント サポート マトリックス](specs/CLIENT-SUPPORT-MAT​​RIX.md) |サポートされている CLI および IDE クライアント、ライター、手動ターゲット、およびソース参照 |
| 📊 [スキル分類](specs/SKILL-CLASSIFICATION.md) |分類法、スコアリング ヒューリスティック、およびメタデータ アーティファクト |
| 🛡️ [セキュリティ検証](specs/SECURITY-VALIDATION.md) |スキャナー、アーカイブ、署名、リリース検証 |
| 📋 [スキルマニフェストスペック](specs/SKILL-MANIFEST.md) |機械可読マニフェスト形式と互換性契約 |### 🤝 If You Want to **Contribute**

|ドクター |何を学ぶか |
|:----|:---------------|
| 📝 [貢献ガイド](../CONTRIBUTING.md) |リポジトリのワークフローとプル リクエストの期待 |
| 🌍 [リポジトリ ソース](../REPOSITORY-SOURCES.md) |通常のパブリック PR を通じて上流リポジトリを提案する方法 (repo-first `auto` ブランチとパスがサポートされるようになりました) |
| 🧾 [スキル PR ワークフロー](contributors/SKILL-PR-WORKFLOW.md) |ネイティブ取り込み、自動エンハンサー処理、`skills_omni/` パブリッシュ、およびレビュー担当者の期待 |
| 📄 [スキルテンプレート](contributors/SKILL-TEMPLATE.md) |現在のフロントマターと構造を備えたスターター `SKILL.md` |
| 🔬 [スキルアナトミー](寄稿者/SKILL-ANATOMY.md) |スキルに対する構造と品質の期待 |
| ✅ [クオリティバー](寄稿者/QUALITY-BAR.md) |リポジトリの受け入れ基準 |
| 🏆 [ハイスコア プレイブック](寄稿者/HIGH-SCORE-PLAYBOOK.md) |高い成熟度、品質、ベスト プラクティス、セキュリティ スコアを促進するもの |---

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

完全なエンドユーザー コマンド サーフェスについては、[CLI ユーザー ガイド](users/CLI-USER-GUIDE.md) を使用してください。### 📁 Generated Artifacts

ビルド パイプラインは、すべてのランタイム サーフェスを駆動する機械可読ファイルを出力します。

|アーティファクト |目的 |
|:---------|:----------|
| `メタデータ.json` |リポジトリ全体の検証とスコアの概要 |
| `skills_index.json` |リポジトリローカルの正規化されたスキルインデックス |
| `dist/catalog.json` |検索およびリスト用の発行済みカタログ |
| `dist/bundles.json` |可用性のあるバンドル定義 |
| `dist/manifests/<スキル>.json` |スキルごとの機械可読マニフェスト |
| `dist/archives/<スキル>.zip` |スキルアーカイブ (zip) |
| `dist/archives/<スキル>.tar.gz` |スキルアーカイブ (tarball) |
| `dist/archives/<スキル>.checksums.txt` | SHA-256 チェックサム マニフェスト |

`dist/` は意図的にコミットされたままになります。これらの生成されたアーティファクトは、インストール、API、MCP、A2A、スモーク、リリース契約の一部です。### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

スキル、バンドル、比較、インストール計画、アーティファクトのダウンロードのための読み取り専用レジストリ API。### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

ローカル サイドカーは、次のファーストクラス MCP 構成の書き込みをサポートするようになりました。

- クロード・コード
- カーソル
- VS Code と開発コンテナ
- ジェミニ CLI
- 反重力
- キロ
- コーデックス CLI
- 続行
- ウィンドサーフィン
- オープンコード
- クライン
- GitHub コパイロット CLI
- キロコード
- ゼッド
- ガチョウ### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

タスクのライフサイクル、ストリーミング、永続性、再起動回復、およびシンプルファーストのローカル オーケストレーション。共有リース実行は、明示的に有効にした場合に使用できます。 Redis は、デフォルトのローカル パスではなく、高度なホスト オプションのままです。---

## 🗂️ Repository Map

|パス |目的 |
|:-----|:----------|
| 📂 `スキル/` |正規の作成されたスキル |
| 📖 `docs/users/` |エンドユーザー向けドキュメント |
| 🤝 `ドキュメント/寄稿者/` |コントリビューターのテンプレートとガイダンス |
| 🏗️ `ドキュメント/アーキテクチャ/` |ロードマップ、ADR、および技術分析 |
| 🔧 `docs/operations/` |運用ランブック |
| 📋 `docs/specs/` |ランタイム、プロトコル、およびアーティファクトのコントラクト |
| 📚 `docs/CATALOG.md` |生成されたスキル カタログ |
| 📦 `dist/` |生成された機械可読アーティファクト |
| 🧠 `packages/catalog-core/` | `ICatalogStorageAdapter` DI を使用した共有カタログ ランタイム |
| 🌐 `packages/server-api/` | OpenAPI/Swagger UI を使用した読み取り専用 HTTP API (`/docs`) |
| 🔌 `packages/server-mcp/` | MCP サーバーとローカル サイドカー |
| 🤖 `packages/server-a2a/` | A2A サーバーとタスク ランタイム |
| 🖥️ `packages/cli/` |統合された CLI エントリポイント、インストール ロジック、およびインク ビジュアル TUI (ESM ネイティブ) |
| ⚙️ `ツール/スクリプト/` |検証、生成、検証、およびテスト |
| 🧪 `vitest.workspace.js` | Vitest モノリポジトリ ワークスペースの構成 |---

## 🧪 Release Validation

```bash
npm run smoke
```

スモーク実行により以下が検証されます。

- ✅ スキルの検証とメタデータの生成
- ✅ 分類再分類ツール
- ✅ カタログアーティファクトの生成
- ✅ カタログの値下げを生成
- ✅ アーカイブの生成と検証
- ✅ レガシー統合テスト スイート (Python PTY + ノード TUI アサーション)
- ✅ カタログコアのスコアリング、検索、フィルタリングのための Vitest ユニットスイート
- ✅ `npm Pack --dry-run`
- ✅ `/docs` の OpenAPI/Swagger UI による API ブートとヘルス
- ✅ `stdio`、`stream`、および `sse` での MCP ブート
- ✅ A2A ブート、ポーリング、SSE ストリーミング、キャンセル、プッシュ構成のライフサイクル
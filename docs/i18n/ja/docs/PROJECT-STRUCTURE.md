# 🗂️ Project Structure (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Awesome Omni Skills モノリポジトリの完全なディレクトリとファイル リファレンス。**---

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

>**ネイティブ スキル カタログ。**これは、プロジェクトの主要な公開コンテンツ面です。

**154**のスキル ディレクトリが含まれており、各ディレクトリには少なくとも `SKILL.md` プレイブックが含まれています。より大きなスキルには、「agents/」、「references/」、「examples/」、「scripts/」、および「assets/」サブディレクトリが含まれる場合があります。

スキルは 2 つの取得経路を通じて取得されます。
-**直接貢献者 PR**— 人間がスキルを直接送信します
-**リポジトリベースの外部インポート**— 上流リポジトリからの `external-import/*` PR をレビューしました

|内容 |例 |
|:---------------|:------|
| `スキル/omni-figma/SKILL.md` | Figma のデザインからコードまでのスキル |
| `スキル/アーキテクチャ/SKILL.md` |アーキテクチャのレビューと計画のスキル |
| `skills/<名前>/metadata.json` |自動生成された分類とスコアリング |---

### `skills_omni/`

>**改良された英語のみの派生製品を厳選。**プライベート拡張パイプラインによって維持されます。

**110**の強化されたスキル ディレクトリが含まれており、`skills/` 内のネイティブの対応物を反映し、改良されています。このサーフェスは**直接一般公開されていません**。自動化されたエンハンサー パイプラインによってのみ設定されます。

各派生物は、ネイティブの情報源への帰属を維持しながら、常に英語で、より高い編集基準を提供します。---

### `packages/`

>**monorepo ワークスペース。**すべてのランタイム Node.js コードがここに存在します。

|パッケージ | npm 名 |目的 |
|:--------|:-----------|:----------|
| 📂 `packages/catalog-core/` | `@omni-skills/カタログコア` | 「ICatalogStorageAdapter」依存関係注入を使用した共有カタログ ランタイム。すべてのサーバー サーフェスで使用される検索、スコアリング、比較、推奨、およびインストール計画ロジックを提供します。
| 📂 `packages/cli/` | (ルートパッケージビン) |統合された CLI エントリポイント、ガイド付きインストーラー、インク ビジュアル TUI、診断、スモーク チェック、およびサービス ランチャー。 ESM ネイティブ |
| 📂 `packages/install-targets/` | `@omni-skills/install-targets` |パス解決とフラグ マッピングを備えた 9 つのインストール可能なクライアント (Claude Code、Cursor、Gemini CLI、Codex CLI、Kiro、Antigravity、Goose、Qwen Code、OpenCode) のレジストリ |
| 📂 `packages/server-api/` | `@omni-skills/server-api` | OpenAPI 3.1 を使用した読み取り専用 HTTP カタログ API、`/docs` の Swagger UI、認証、レート制限、CORS/IP ホワイトリスト、ダウンロード、管理ランタイム |
| 📂 `packages/server-mcp/` | `@omni-skills/server-mcp` | `stdio`、`stream`、および `sse` トランスポートをサポートする MCP サーバー。ローカル サイドカー モードでは、ファイルシステム対応のインストール/削除ツールと、16 個の構成可能なクライアントに対するクライアント対応の MCP 構成書き込みが追加されます。
| 📂 `packages/server-a2a/` | `@omni-skills/server-a2a` | JSON/SQLite 永続性、再起動回復、SSE ストリーミング、キャンセル、外部エグゼキュータ モード、およびオプションのリース調整を備えた A2A (エージェント間) タスク ランタイム |

各パッケージには、独自の `package.json`、`src/` ディレクトリ、および (`install-targets` を除く) 単体テスト用の `vitest.config.js` があります。---

### `dist/`

>**生成されたランタイム アーティファクト。**意図的にバージョン管理にコミットされます。

これらのファイルは、CLI インストール、API 応答、MCP ツール、A2A タスク、スモーク テスト、リリース検証によって消費される機械可読出力です。これらは「npm run build」によって再生成されます。

|パス |目的 |
|:-----|:----------|
| `dist/catalog.json` | 154 のすべてのスキル、スコア、メタデータを含むカタログを公開 |
| `dist/bundles.json` |バンドル定義とメンバーの可用性ステータス |
| `dist/manifests/<スキル>.json` |スキルごとの機械可読マニフェスト |
| `dist/archives/<スキル>.zip` |ダウンロード用のスキルごとの ZIP アーカイブ |
| `dist/archives/<スキル>.tar.gz` |ダウンロード用のスキルごとの tarball アーカイブ |
| `dist/archives/<スキル>.checksums.txt` |アーカイブごとの SHA-256 チェックサム マニフェスト |
| `dist/archives/<スキル>.zip.sig` |分離された署名 (リリース時のみ、gitignored) |
| `dist/release-notes.md` |自動生成されたリリース ノート (gitignored) |
| `dist/署名/` |派生公開鍵マテリアル (gitignored) |

>**なぜ `dist/` がコミットされるのですか?**それは、インストール、API、MCP、A2A、およびリリース契約の一部であるためです。消費者は、ビルドを実行しなくても、これらのファイルが存在することを期待します。---

### `data/`

>**静的プロジェクト データ ファイル。**ビルドおよび実行時の動作を制御するソース管理された定義。

|ファイル |目的 |
|:-----|:----------|
| `データ/バンドル.json` |厳選されたバンドル定義 (バンドルごとのスキル メンバー リスト) |
| `データ/プロジェクトアイデンティティ.json` |正規プロジェクト ID: 名前、説明、ホームページ、GitHub トピック、ランタイム サーフェス定義、クライアント リスト |
| `データ/プロジェクトステータス.json` |生成されたプロジェクト メトリクスのスナップショット: スキル数、スコア、クライアント数、カテゴリ数、品質スプレッド |---

### `docs/`

>**すべてのプロジェクト ドキュメント。**聴衆ごとに整理されています。

|パス |観客 |コンテンツ |
|:-----|:-----------|:----------|
| `docs/README.md` |みんな |ドキュメント ハブ — すべてのドキュメントへの中央インデックス |
| `docs/CATALOG.md` |ユーザー | 154 のスキルすべてをスコア付きでリストした自動生成カタログ |
| `docs/プロジェクト構造.md` |みんな |このファイル — プロジェクト ディレクトリのリファレンス |
| `docs/users/` |エンドユーザー |はじめに、CLI ユーザー ガイド、使用ガイド、バンドル、Runbook |
| `docs/contributors/` |寄稿者 |スキルの解剖学、テンプレート、PR ワークフロー、品質バー、ハイスコア プレイブック |
| `docs/specs/` |建築家 | API、MCP サイドカー、CLI インストーラー、ビジュアル シェル、クライアント サポート マトリックス、分類、セキュリティ、マニフェスト仕様 |
| `docs/i18n/` |海外ユーザー |ルート README の 32 言語の自動翻訳 |#### `docs/users/`

|ファイル |目的 |
|:-----|:----------|
| `はじめに.md` | 2 分以内にスキルをインストール、検証、呼び出します |
| `CLI-ユーザーガイド.md` |ステップバイステップのシナリオを含む完全なコマンド リファレンス |
| `使用法.md` | CLI コマンド、インストール モード、ランタイム コマンド、および MCP 構成フロー |
| `バンドル.md` |厳選されたバンドルとその現在の利用可能性 |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` |ブランド変更の移行ステータスと受け入れレポート |
| `RUNBOOK.md` |操作リファレンス (「docs/operations/RUNBOOK.md」としてもリンク) |#### `docs/contributors/`

|ファイル |目的 |
|:-----|:----------|
| `スキルアナトミー.md` |スキルに対する構造と品質の期待 |
| `スキルテンプレート.md` |現在のフロントマターを含むスターター `SKILL.md` |
| `スキル-PR-ワークフロー.md` |ネイティブの取り込み、エンハンサー処理、およびレビュー担当者の期待 |
| `品質バー.md` |合格基準と現在のベンチマーク |
| `ハイスコアプレイブック.md` |高い成熟度、品質、ベスト プラクティス、セキュリティ スコアを促進するもの |#### `docs/specs/`

|ファイル |目的 |
|:-----|:----------|
| `カタログ-API.md` | HTTP エンドポイント、フィルタリング、ガバナンス、ダウンロード |
| `CLI ガイド付きインストーラー.md` |ガイド付きインストーラーの動作契約 |
| `CLI-VISUAL-SHELL.md` |インクのビジュアル シェル、状態モデル、およびサービス ハブ |
| `LOCAL-MCP-SIDECAR.md` |ファイルシステム対応ツール、許可リスト モデル、構成の書き込み |
| `クライアント サポート マトリックス.md` | 9 つのインストール + 16 の構成クライアントにわたる完全なクライアントとライターのリファレンス |
| `スキル分類.md` |分類法、ヒューリスティックスコアリング、メタデータアーティファクト |
| `セキュリティ検証.md` |スキャナー、アーカイブ、署名、リリース検証 |
| `スキルマニフェスト.md` |機械可読マニフェスト形式と互換性契約 |#### `docs/i18n/`

**32**の言語ディレクトリが含まれており、それぞれに翻訳された `README.md` が含まれています。対応言語: ar、bg、cs、da、de、es、fi、fr、he、hi、hu、id、in、it、ja、ko、ms、nl、no、phi、pl、pt、pt-BR、ro、ru、sk、sv、th、tr、uk-UA、vi、zh-CN。

翻訳は `npm run i18n:render` によって自動生成され、`npm run i18n:check` によって検証されます。---

### `tools/`

>**インフラストラクチャの構築、検証、テスト。**主に `npm run` コマンドによって消費される Python スクリプト。#### `tools/scripts/`

|スクリプト | npmコマンド |目的 |
|:------|:-----------|:----------|
| `validate_skills.py` | `npm 実行検証` |すべての `SKILL.md` ファイルを検証し、`metadata.json` を再生成します。
| `skill_metadata.py` | (validate によってインポート) |コアモノリシックバリデータ: フロントマター解析、分類法、スコアリング、セキュリティスキャン |
| `recategorize_skills.py` | `npm run 分類法:レポート` |正規カテゴリ正規化を表示または適用します。
| `generate_index.py` | `npm 実行インデックス` | `dist/` マニフェスト、アーカイブ、チェックサムを生成します。
| `build_catalog.js` | `npm 実行カタログ` | `skills_index.json` から `docs/CATALOG.md` を生成します。
| `generate_project_status.py` | `npm run プロジェクト:ステータス` |現在のメトリクスを使用して「data/project_status.json」を生成します。
| `render_project_docs.py` | `npm run docs:render` | README、ドキュメント、および CONTRIBUTING | で生成されたブロックを更新します。
| `generate_i18n.py` | `npm run i18n:render` | `docs/i18n/` 翻訳を生成または更新します。
| `リポジトリ_ソース.py` | `npm run registry:render` | `REPOSITORY-SOURCES.md` をレンダリングして検証します。
| `verify_project_identity.py` | `npm run アイデンティティ:チェック` | package.json、README、およびリポジトリのアイデンティティの整合性を検証します。
| `verify_archives.py` | `npm run verify:archives` |アーカイブの整合性とオプションの署名を検証します。
| `verify_security_scanners.py` | `npm run verify:スキャナー` |生成されたメタデータでスキャナーの範囲を確認します。
| `generate_release_notes.py` | `npm run release:notes` |メタデータと git 履歴からカスタム リリース ノートを生成 |
| `next_release_version.py` | `npm run release:次のバージョン` | patch-to-10 ポリシーを使用して次の sever バージョンを計算します。
| `sync_repo_version.py` | `npm run release:sync-version` |ワークスペース パッケージ間でバージョンを同期する |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | GitHub の説明、ホームページ、トピックを印刷または適用します。
| `validate_contribution_scope.py` | (CI) | PR 貢献範囲の境界を検証します |
| `install_githooks.js` | `npm 実行フック:インストール` |ローカルの事前コミットフックをインストールします。#### `tools/scripts/tests/`

「npm test」によって使用される統合および TUI テスト スイート:
- 従来の Python PTY テスト
- ノード TUI アサーション
- テストランナー オーケストレーター---

### `.github/`

>**GitHub アクションとコミュニティ テンプレート。**#### `.github/workflows/`

|ワークフロー |トリガー |目的 |
|:---------|:----------|:----------|
| `検証.yml` | `main` にプッシュ/PR |生成されたアーティファクトがコミットされていることをビルド、テスト、確認する |
| `release.yml` |タグプッシュ `v*` または手動ディスパッチ |リリースグレードのスキャナー、署名、npm パブリッシュ、GitHub リリース |
| `自動リリーススキルマージ.yml` | `skills/*` をタッチする `main` にマージします。スキル変更時の自動バージョンアップ、タグ付け、リリース |
| `enhance-pr-skills.yml` |スキル変更によるPR |プライベート エンハンサー パイプラインを実行し、コンパニオン PR を投稿します。
| `同期リポジトリ-メタデータ.yml` | `data/project_identity.json` への変更 | GitHub の説明、ホームページ、トピックを同期します |#### `.github/pull_request_template.md`

スキルとランタイムへの貢献のチェックリストを含むデフォルトの PR テンプレート。---

### `.githooks/`

>**ローカル Git フック。**`npm run hooks:install` 経由でインストールされます。

|ファイル |目的 |
|:-----|:----------|
| `プリコミット` |コミットを許可する前に基本的な検証を実行します。---

## 📄 Root Files Reference

|ファイル |目的 |
|:-----|:----------|
| `README.md` |ヒーロー バナー、インストール ガイド、および全機能の概要を含む公開プロジェクトの README |
| `貢献.md` |スキル、ランタイム、および取り込みワークフローを含むコントリビューター ガイド |
| `セキュリティ.md` |セキュリティ ポリシー、範囲、および脆弱性の報告手順 |
| `CODE_OF_CONDUCT.md` |貢献者規約 v2.1 |
| `リポジトリ-ソース.md` |外部取り込み用に提案された上流リポジトリのパブリック レジストリ |
| `ライセンス` | MIT ライセンス (コードとツール) |
| `ライセンスの内容` | CC BY 4.0 (ドキュメントとスキルのコンテンツ) |
| `パッケージ.json` |ルートモノリポジトリパッケージ: スクリプト、依存関係、bin エントリポイント、ファイル、およびワークスペース構成 |
| `パッケージロック.json` | npm ロックファイル (自動生成) |
| `メタデータ.json` |リポジトリ全体の検証とスコアの概要 (「npm run validate」によって生成) |
| `skills_index.json` |リポジトリローカルの正規化されたスキルインデックス (「npm run validate」によって生成) |
| `.gitignore` |バージョン管理の除外 - 特に `dist/` は**無視されません**。
| `.npmignore` | npm tarball から `__pycache__/` と `*.pyc` を除外します。
| `.node-version` | Node.js バージョンの固定: `22` |
| `.nvmrc` | nvm バージョンの固定: `22` (ミラー `.node-version`) |
| `vitest.config.js` | 5 つのパッケージ レベルのテスト構成をすべて参照する Root Vitest 構成 |
| `vitest.workspace.js` |モノリポジトリ対応のテスト実行のための Vitest ワークスペース定義 |---

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

上記はすべて「npm run build」の一部として順次実行されます。
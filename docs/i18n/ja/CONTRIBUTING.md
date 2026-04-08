# 🤝 Contributing to Awesome Omni Skills (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Awesome Omni Skills は、スキルのパブリック リポジトリ、改良されたベスト プラクティスの派生製品の厳選されたリポジトリ、およびそのカタログ上に構築されたランタイム サーフェスです。**
> コントリビューションはどちらの領域を対象にすることもできますが、両方とも生成されたアーティファクトと現在の CLI の動作に合わせて維持する必要があります。---

## 📊 Repository Baseline

<!-- generated:contributing-repository-baseline:start -->
| Metric | Value |
|:-------|:------|
| 📦 Package version | `0.9.5` |
| 🧠 Published skills | `154` |
| ✨ Curated derivatives | `110` |
| 📦 Fully backed bundles | `7` |
| 🖥️ Install-capable clients | `9` |
| 🔌 MCP config-capable clients | `16` across `33` targets |
| 🔄 Automatic releases | Enabled on `main` |
<!-- generated:contributing-repository-baseline:end -->

---

## 📋 Before You Start

|何を |どこ |
|:-----|:------|
| 🧠 スキルは | で作成されています。 `skills/<スキル名>/SKILL.md` |
| 📖 コントリビューターのテンプレートとガイダンス | `docs/contributors/` |
| 🧾 新しいスキルの正規 PR フロー | [スキル PR ワークフロー](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 ネイティブの受信スキルは次の下に表示されます | `skills/` (任意の言語) |
| ✨ 厳選された強化されたデリバティブ | `skills_omni/` (英語のみ、自動) |
| 🚫 `skills_omni/` は保護されています |直接の一般公開は受け付けていません |
| 🔁 リポジトリベースの取り込み |メンテナが操作する外部インポートは引き続き `skills/` の下に置かれ、同じレビュー基準に従います。
| 📖 ランタイムとアーキテクチャのドキュメント | `docs/` |
| 📄 コミュニティ ファイル | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

|タイプ |エリア |
|:-----|:-----|
| 🧠 スキルを追加または改善する | `スキル/` |
| 📥 リポジトリベースのインテーク PR を確認する | `skills/` をターゲットとする `external-import/<source>` ブランチ |
| 🌍 新しい上流リポジトリを提案する | `リポジトリ-ソース.md` |
| 📖 貢献者ガイダンスを更新 | `docs/contributors/` |
| 🖥️ CLI、インストーラー、またはスクリプトを改善する | `packages/cli/` および `tools/scripts/` |
| 📦 カタログランタイムまたはプロトコルパッケージを改善する | `パッケージ/` |
| 🧪 テストの強化、スモークチェック、ドキュメントのリリース |いろいろ |---

## クイックスタート

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/awesome-omni-skills.git
cd awesome-omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 「メンテナーからの編集を許可」を有効にして PR を開きます。**---

## 🧠 Skill Contributions

優れたネイティブ受信スキルは次のことを行う必要があります。

- ✅ 特定の問題をきれいに解決する
- ✅ プロジェクト間で再利用可能であること
- ✅ エージェントが実際に従うことができる指示を含める
- ✅ 曖昧または冗長なコンテンツを避ける
- ✅ 利用可能な場合、正確なフロントマターと互換性メタデータを宣言します。
- ✅ 自動化の実行後に生成された「metadata.json」分類アーティファクトを含むランド### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 ヒント:**リリースグレードのスキル パックには、`agents/`、`references/`、`examples/`、および `scripts/` が含まれている必要があります。しかし、吸気面は意図的に許容的です。最小限のネイティブの入力スキルが許可され、エンハンサー パイプラインがより強力な派生を生成します。### 🔀 Two Native Intake Paths

パブリック リポジトリは、次の 2 つの操作パスを通じてネイティブ スキルを受け入れます。

|パス |到着方法 |レビューの期待 |
|:-----|:---------------|:---------------------|
| 👤 直接貢献者の PR |人間のブランチは `skills/` を直接編集します。スキル、生成されたアーティファクト、バンドルの影響を検証する |
| 📥 リポジトリベースの外部取り込み |メンテナが運営する `external-import/<source>` PR は、レビュー済みの別のリポジトリからスキルをインポートします。スキルと来歴、上流の所有権、およびライセンスに関するメモを検証する |

どちらのパスも `skills/` に到達し、両方とも同じパブリック バリデータをトリガーし、両方とも厳選された `skills_omni/` コンパニオン PR を生成できます。

スキルを直接送信するのではなく、上流のリポジトリを提案したい場合は、[REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md) を編集します。通常のプロポーザルはリポジトリ優先になりました。

- `repo_url` を提供します
- デフォルト以外のブランチが必要でない限り、「branch」を「auto」のままにしておきます。
- 正確なルートがわからない場合は、「skills_path」を「auto」のままにしておきます

Merge には、自動同期トリガーではなく、パブリック レビュー ゲートがまだ存在します。### 🌐 Language Policy

|表面 |受け入れられる言語 |
|:------|:------|
| 📥 `スキル/` (ネイティブ摂取) |ポルトガル語、英語、またはその他の言語 |
| ✨ `skills_omni/` (厳選された出力) |英語のみ |

> プライベート エンハンサーは、送信されたネイティブ ソースを保存し、厳選された派生ファイルを英語で書き直します。

📖 完全なブランチ、検証、エンハンサーレビューのシーケンスについては、[スキル PR ワークフロー](docs/contributors/SKILL-PR-WORKFLOW.md) を使用してください。---

## ✅ Required Validation

PR を開く前にこれを実行します。```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<詳細>
<summary>📋 <strong><code>npm run validate</code> が再生成するもの</strong></summary>

- `メタデータ.json`
- `スキル/<スキル>/metadata.json`
- 正規分類マッピング
- 成熟度、ベストプラクティス、品質、セキュリティスコア
- 静的なセキュリティに関する調査結果
- オプションの ClamAV および VirusTotal スキャナーのステータス (構成時)</details>

>**⚠️ 重要:**検証は、CLI、API、MCP、A2A、マニフェスト、アーカイブ、リリース自動化によって使用されるコントラクトです。生成されたメタデータを使い捨ての出力ではなく、レビュー画面の一部として扱います。

ブランド、パッケージのメタデータ、リポジトリ URL、またはリポジトリ ヘッダー コピーをタッチする場合は、次のコマンドも実行します。```bash
npm run repo:metadata:print
```

このコマンドは、「data/project_identity.json」から派生したソース管理された GitHub の説明、ホームページ、およびトピックのコントラクトを出力します。### 📥 Intake Policy

|状態 |行動 |
|:----------|:----------|
|前付が欠落または不完全 | ⚠️ 警告 (ブロックしません) |
|セキュリティに関する重要な調査結果 | 🚫 摂取量をブロック |
|ハード検証エラー | 🚫 摂取量をブロック |
|より厳格な編集基準 |ネイティブの取り込みではなく、強化された派生フローで強制されます。### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<詳細>
<summary>📋 <strong>スモークパスが検証するもの</strong></summary>

- ✅ スキルの検証
- ✅ カタログの生成
- ✅ ドキュメントカタログの生成
- ✅ テストスイート
- ✅ `npm Pack --dry-run`
- ✅ APIブート
- ✅ `stdio`、`stream`、および `sse` での MCP ブート
- ✅ A2A ブーツ
- ✅ アーカイブの検証とパッケージ化の期待</details>

---

## 📋 Skill Frontmatter

フロントマターを強くお勧めします。 [スキル テンプレート](docs/contributors/SKILL-TEMPLATE.md) をベースラインとして使用します。```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<詳細>
<summary>🏷️ <strong>正規分類カテゴリー</strong></summary>

|カテゴリー |カテゴリー |
|:-----------|:----------|
| 「開発」 | `フロントエンド` |
| `バックエンド` | `フルスタックウェブ` |
| `ツール` | `cli-automation` |
| 「ビジネス」 | `製品` |
| `デザイン` | `データai` |
| `aiエージェント` | `機械学習` |
| `devops` | `テストセキュリティ` |
| `ドキュメント` | `コンテンツメディア` |
| `コミュニケーション` | 「未分類」 |</details>

>**ℹ️**スキルのバージョンは npm パッケージのバージョンから独立しています。ネイティブの受信スキルにフロントマターがまだない場合、警告付きで受け入れられ、ディレクトリ、タイトル、本文テキストから一時メタデータが取得されます。---

## ⚙️ Runtime Contributions

`packages/cli/`、`packages/catalog-core/`、`packages/server-*/` をタッチするか、スクリプトをビルドすると、次のようになります。

- 📦 `dist/` とドキュメントを実装に合わせて維持する
- 🔄 カタログロジックを複製するのではなく、`packages/catalog-core` を再利用することを好みます
- 🔒 ローカル書き込み動作をプレビューまたはドライランのデフォルトのままにします
- 🔌 MCP ライターを規律を保つ — クライアントが安定したパブリック構成契約を結んでいる場合にのみ、ファーストクラスの構成ライターを追加する
- 🛡️ セキュリティ スキャナーの警告をレビュー バーの一部として扱います
- 🧪 CLI コマンド、トランスポート モード、またはパブリック エンドポイントを変更するときにテストを更新します### 🚧 Important Boundary

|これを実行してください ✅ |これはやめてください 🚫 |
|:-----------|:------|
| `skills/` の下でネイティブの作品を送信します。 `skills_omni/` を編集する手動 PR を開く |
|オートメーションにエンハンサーの実行を処理させます |厳選されたコンテンツを直接追加する |
|正当なスキルの品質に焦点を当てる |自動化されたコンパニオン PR フローをバイパスする |

>**ℹ️**`skills/` のネイティブ スキルが更新されると、プライベート エンハンサーはそれを再処理し、拡張ベースラインを更新します。---

## 🔄 Enhancer Outcome States

公開ネイティブ スキル PR 中に、エンハンサーは次の 4 つの状態のいずれかを報告します。

|状態 |意味 |
|:------|:----------|
| ✅「完了」 |拡張派生がクリーンに生成され、`skills_omni/` の対象となる |
| ⚠️「劣化」 |フォールバックまたは弱いスコアの移動で完了 — より慎重に検査してください |
| 🚫「ブロックされました」 |インフラストラクチャまたは検証上の理由で停止 - 自動公開を防止 |
| ❌「失敗」 |予期しないエラー — メンテナーの調査が必要です |

>**📝 寄稿者**は、エンハンサー インフラストラクチャの問題を修正する必要はありません。責任は、正当なネイティブ スキルを提出し、リポジトリをグリーンに保つことです。---

## 🔄 Automatic Release Policy

変更が「main」に適用されると、次のものが含まれます。

- `スキル/**`
- `スキルオムニ/**`
- `data/bundles.json`

…リポジトリは**パッケージ リリースを自動的に発行します**。### 📋 Version Bump Rule

|から |へ |ルール |
|:-----|:---|:-----|
| `0.1.0` | `0.1.1` |パッチ+1 |
| `0.1.9` | `0.1.10` |パッチ+1 |
| `0.1.10` | `0.2.0` |次のマイナーにロールし、パッチをリセットします。

> リリース フローは、カタログ/アーカイブを再生成し、バージョン バンプをコミットし、リリースにタグを付け、npm を公開し、GitHub リリースを自動的に作成します。---

## 📝 Commit Conventions

|プレフィックス |用途 |
|:------|:------|
| `特技:` |新しいスキルまたは機能 |
| `修正:` |バグ修正 |
| `ドキュメント:` |ドキュメントの変更 |
| `リファクタリング:` |コードのクリーンアップまたは構造の変更 |
| `テスト:` |テストの変更点 |
| `雑務:` |メンテナンス |---

## ❓ Need Help?

|チャンネル |リンク |
|:--------|:-----|
| 💬 質問 | [ディスカッションを開く](https://github.com/diegosouzapw/awesome-omni-skills/Discussions) |
| 🐛 バグ | [問題を開く](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 初期フィードバック | [ドラフト PR を開く](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
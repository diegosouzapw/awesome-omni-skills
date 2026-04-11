# 📦 Curated Bundles (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/BUNDLES.md) · 🇨🇿 [cs](../../../cs/docs/users/BUNDLES.md) · 🇪🇸 [es](../../../es/docs/users/BUNDLES.md) · 🇫🇷 [fr](../../../fr/docs/users/BUNDLES.md) · 🇩🇪 [de](../../../de/docs/users/BUNDLES.md) · 🇮🇹 [it](../../../it/docs/users/BUNDLES.md) · 🇷🇺 [ru](../../../ru/docs/users/BUNDLES.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/BUNDLES.md) · 🇯🇵 [ja](../../../ja/docs/users/BUNDLES.md) · 🇰🇷 [ko](../../../ko/docs/users/BUNDLES.md) · 🇸🇦 [ar](../../../ar/docs/users/BUNDLES.md) · 🇮🇳 [in](../../../in/docs/users/BUNDLES.md) · 🇹🇭 [th](../../../th/docs/users/BUNDLES.md) · 🇻🇳 [vi](../../../vi/docs/users/BUNDLES.md) · 🇮🇩 [id](../../../id/docs/users/BUNDLES.md) · 🇲🇾 [ms](../../../ms/docs/users/BUNDLES.md) · 🇳🇱 [nl](../../../nl/docs/users/BUNDLES.md) · 🇵🇱 [pl](../../../pl/docs/users/BUNDLES.md) · 🇸🇪 [sv](../../../sv/docs/users/BUNDLES.md) · 🇳🇴 [no](../../../no/docs/users/BUNDLES.md) · 🇩🇰 [da](../../../da/docs/users/BUNDLES.md) · 🇫🇮 [fi](../../../fi/docs/users/BUNDLES.md) · 🇵🇹 [pt](../../../pt/docs/users/BUNDLES.md) · 🇷🇴 [ro](../../../ro/docs/users/BUNDLES.md) · 🇭🇺 [hu](../../../hu/docs/users/BUNDLES.md) · 🇧🇬 [bg](../../../bg/docs/users/BUNDLES.md) · 🇸🇰 [sk](../../../sk/docs/users/BUNDLES.md) · 🇹🇷 [tr](../../../tr/docs/users/BUNDLES.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/BUNDLES.md) · 🇮🇱 [he](../../../he/docs/users/BUNDLES.md) · 🇵🇭 [phi](../../../phi/docs/users/BUNDLES.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/BUNDLES.md)

> Translation snapshot for **Awesome Omni Skills** `v0.12.0`.
> Source: `docs/users/BUNDLES.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/users/BUNDLES.md; version=0.12.0; release=v0.12.0; english_snapshot=2026-04-11T19:59:36.749325+00:00 -->

> **Bundles are curated skill selectors layered on top of the catalog.** All seven starter bundles are now fully backed by currently cataloged skills.

---

## ⚙️ How Bundles Work

`--bundle` does **not** install a special package. It:

1. 📋 Expands the selected bundle definition
2. ✅ Installs only the members currently available in the catalog
3. ✅ Builds a concrete install plan from published bundle members

```bash
npx awesome-omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Based on the current generated catalog (`dist/bundles.json`):

| Bundle | Intended For | Available | Members |
|:-------|:------------|:----------|:--------|
| 🧰 **essentials** | Every developer | **4/4** | `find-skills` ✅ · `brainstorming` ✅ · `architecture` ✅ · `debugging` ✅ |
| 🌐 **full-stack** | Web & app devs | **5/5** | `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ · `auth-flows` ✅ |
| 🎨 **design** | Design systems & accessibility | **5/5** | `frontend-design` ✅ · `omni-figma` ✅ · `design-systems-ops` ✅ · `accessibility-audit` ✅ · `design-token-governance` ✅ |
| 🛡️ **security** | Security engineers | **4/4** | `security-auditor` ✅ · `vulnerability-scanner` ✅ · `incident-response` ✅ · `threat-modeling` ✅ |
| ⚙️ **devops** | Platform & infra | **5/5** | `docker-expert` ✅ · `kubernetes` ✅ · `terraform` ✅ · `observability-review` ✅ · `release-engineering` ✅ |
| 🤖 **ai-engineer** | LLM & ML devs | **7/7** | `rag-engineer` ✅ · `prompt-engineer` ✅ · `llm-patterns` ✅ · `eval-design` ✅ · `context-engineering` ✅ · `data-contracts` ✅ · `model-serving` ✅ |
| 🔧 **oss-maintainer** | OSS maintainers | **4/4** | `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Published and installable

---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- You want a **curated starting point** for a domain
- You want install plans that stay **curated and domain-specific**
- You want a fast way to install a complete working set for a role

### 🎯 Use `--skill` instead when:

- You want a **guaranteed minimal install**
- You already know the **exact skill** you need
- You want the **smallest possible footprint** instead of a curated working set

---

## 💡 Practical Recommendations

| Goal | Command |
|:-----|:--------|
| 🎯 Install a specific published skill | `npx awesome-omni-skills --cursor --skill omni-figma` |
| 📦 Fully backed starter bundle | `npx awesome-omni-skills --cursor --bundle full-stack` |
| 🎨 Design systems bundle | `npx awesome-omni-skills --cursor --bundle design` |
| 🔧 OSS workflow bundle | `npx awesome-omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Security workflow bundle | `npx awesome-omni-skills --cursor --bundle security` |
| ⚙️ DevOps bundle | `npx awesome-omni-skills --cursor --bundle devops` |
| 🤖 AI engineer bundle | `npx awesome-omni-skills --codex --bundle ai-engineer` |
| 🔎 Search before deciding | `npx awesome-omni-skills find figma` |
| 📋 See all bundle availability | `cat dist/bundles.json` |

---

## 🔍 Inspecting Bundles

### 📁 View Generated Bundle Data

```bash
cat dist/bundles.json
```

### 🌐 Query via API

```bash
curl http://127.0.0.1:3333/v1/bundles
```

### 🔌 Query via MCP

Use the `search_skills` or `preview_install` tools with bundle parameters.

### 📋 Check Install Plan

```bash
# See what would be installed
npx awesome-omni-skills find foundation --bundle essentials --install
npx awesome-omni-skills find accessibility --bundle design --install
npx awesome-omni-skills find audit --bundle security --install
npx awesome-omni-skills find docs --bundle oss-maintainer --install
npx awesome-omni-skills find deploy --bundle devops --install
npx awesome-omni-skills find rag --bundle ai-engineer --install
```

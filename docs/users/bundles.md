# 📦 Curated Bundles

> **Bundles are curated skill selectors layered on top of the catalog.** Four bundles are fully backed by published skills today, and two still include roadmap-only members.

---

## ⚙️ How Bundles Work

`--bundle` does **not** install a special package. It:

1. 📋 Expands the selected bundle definition
2. ✅ Installs only the members currently available in the catalog
3. ⚠️ Surfaces missing members as warnings only when the bundle still contains roadmap entries

```bash
npx omni-skills --cursor --bundle full-stack
```

---

## 📊 Current Availability

Based on the current generated catalog (`dist/bundles.json`):

| Bundle | Intended For | Available | Members |
|:-------|:------------|:----------|:--------|
| 🧰 **essentials** | Every developer | **4/4** | `find-skills` ✅ · `brainstorming` ✅ · `architecture` ✅ · `debugging` ✅ |
| 🌐 **full-stack** | Web & app devs | **4/4** | `frontend-design` ✅ · `api-design` ✅ · `database-design` ✅ · `omni-figma` ✅ |
| 🛡️ **security** | Security engineers | **2/2** | `security-auditor` ✅ · `vulnerability-scanner` ✅ |
| ⚙️ **devops** | Platform & infra | **0/3** | `docker-expert` ⏳ · `kubernetes` ⏳ · `terraform` ⏳ |
| 🤖 **ai-engineer** | LLM & ML devs | **0/3** | `rag-engineer` ⏳ · `prompt-engineer` ⏳ · `llm-patterns` ⏳ |
| 🔧 **oss-maintainer** | OSS maintainers | **4/4** | `find-skills` ✅ · `create-pr` ✅ · `changelog` ✅ · `documentation` ✅ |

> ✅ = Published and installable · ⏳ = Roadmap metadata only

---

## 🎯 When to Use Bundles

### ✅ Use a bundle when:

- You want a **curated starting point** for a domain
- You want install plans that **grow as the catalog expands**
- You're comfortable using roadmap-heavy bundles only where warnings are expected

### 🎯 Use `--skill` instead when:

- You want a **guaranteed minimal install**
- You already know the **exact skill** you need
- You don't want roadmap members in the plan output

---

## 💡 Practical Recommendations

| Goal | Command |
|:-----|:--------|
| 🎯 Install a specific published skill | `npx omni-skills --cursor --skill omni-figma` |
| 📦 Fully backed starter bundle | `npx omni-skills --cursor --bundle full-stack` |
| 🔧 OSS workflow bundle | `npx omni-skills --codex --bundle oss-maintainer` |
| 🛡️ Security workflow bundle | `npx omni-skills --cursor --bundle security` |
| ⚠️ Bundle with current availability + warnings | `npx omni-skills --cursor --bundle devops` |
| 🔎 Search before deciding | `npx omni-skills find figma` |
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
npx omni-skills find foundation --bundle essentials --install
npx omni-skills find audit --bundle security --install
npx omni-skills find docs --bundle oss-maintainer --install
```

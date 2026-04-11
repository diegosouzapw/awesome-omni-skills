# 🌍 Repository Sources

This file is the public registry for proposing upstream repositories that may be imported into Awesome Omni Skills through the reviewed external-intake flow.

Merging a row here does **not** start sync automatically. It only creates an approved public suggestion that the private operator runtime can import and review in the dashboard before any live sync happens.

## ✅ How to Propose a Repository

### 🟢 Easiest Way: `SOURCES.txt` *(recommended for contributors)*

1. Open [`SOURCES.txt`](SOURCES.txt) in the repository root.
2. Add one GitHub URL per line at the bottom.
3. Optionally add a short note after `|` (e.g., `https://github.com/org/repo | MIT, 20 skills`).
4. Open a PR. **That's it.**

The automation derives slug, owner, branch, and skills path automatically and syncs the full registry.

### 🔧 Alternative: Edit this file directly *(for maintainers)*

1. Add one row inside the machine-readable registry table below.
2. Use a unique kebab-case `slug`.
3. Provide the upstream `repo_url`.
4. Prefer `auto` for `branch` and `skills_path` unless you already know the correct values.
5. Use `candidate` for new proposals. Maintainers can later promote rows to `tracked` or `disabled`.
6. Keep `notes` short and factual. Mention provenance or license caveats there if they matter.
7. Run `npm run registry:sync-txt` and `npm run registry:lint` before opening the PR.
8. If a maintainer first adds a source from the private dashboard, merge the matching registry PR here so the public list stays canonical and contributors do not accidentally propose the same repository twice.

## 📋 Schema Rules

| Column | Meaning |
|:-------|:--------|
| `slug` | Stable public identifier for the upstream source |
| `repo_url` | Clone URL for the upstream repository |
| `branch` | Explicit branch to track, or `auto`/blank to use the repository default branch |
| `skills_path` | Relative path to the skills root, or `auto`/blank to let the private runtime discover it |
| `status` | `candidate`, `tracked`, or `disabled` |
| `owner` | Human-readable owner or organization label |
| `license` | SPDX identifier, `review-required`, or another explicit review label |
| `notes` | Short operational context |

## 🧠 Repo-First Proposal Rule

The normal contributor flow is now repo-first:

- add the repository URL to [`SOURCES.txt`](SOURCES.txt) — one line, one URL
- the automation derives `slug`, `branch`, `skills_path`, `owner`, and `license`
- run `npm run registry:sync-txt` to populate this registry from the txt file
- let the private operator runtime preview discovery and keep the review gate

Merging a row here still does **not** enable sync and does **not** open a PR automatically.

Maintainer-operated dashboard additions should converge back here too. The private runtime can open a public registry PR for manual dashboard sources so the public registry remains the transparent source of truth for reviewed upstream repositories.

## 🔀 Status Semantics

| Status | Meaning |
|:-------|:--------|
| `candidate` | Public proposal accepted in markdown, but not yet operator-enabled |
| `tracked` | Approved upstream repository that the private runtime may import for dashboard review |
| `disabled` | Kept for history, examples, or paused intake; not intended for active sync |

## 🗂️ Machine-Readable Registry

<!-- registry:repositories:start -->
| slug | repo_url | branch | skills_path | status | owner | license | notes |
| ---- | -------- | ------ | ----------- | ------ | ----- | ------- | ----- |
| sickn33-antigravity-awesome-skills | https://github.com/sickn33/antigravity-awesome-skills | auto | auto | candidate | sickn33 | review-required |  |
| tech-leads-club-agent-skills | https://github.com/tech-leads-club/agent-skills | auto | auto | candidate | tech-leads-club | review-required | CC-BY-4.0 for maintainer-authored skills |
<!-- registry:repositories:end -->

## 📊 Registry Status

<!-- registry:status:start -->
| Metric | Value |
|:-------|:------|
| 📦 Registry rows | `2` |
| ✅ Tracked upstream repositories | `0` |
| 🧪 Candidate upstream repositories | `2` |
| ⏸️ Disabled rows | `0` |
| 🌿 Auto branch rows | `2` |
| 🌿 Explicit branch rows | `0` |
| 🔎 Auto-detect skills path rows | `2` |
| 📁 Default `skills/` path rows | `0` |
| 🧭 Custom skills path rows | `0` |
| 🔒 Operator gate | Merge here does not auto-sync. The private dashboard still imports and enables rows explicitly. |
| 🧪 Local validation | `npm run registry:lint` and `npm run registry:check` |
<!-- registry:status:end -->

## 🔐 Review Contract

- public contributors can propose repositories by adding a URL to [`SOURCES.txt`](SOURCES.txt) or editing this file in a normal PR
- only the bounded registry block is machine-parsed
- merged rows are imported later by the private operator runtime
- operator review in the dashboard remains mandatory before any live sync

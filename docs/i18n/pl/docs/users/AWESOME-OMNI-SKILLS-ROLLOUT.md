# Awesome Omni Skills Rollout And Migration Status (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇨🇿 [cs](../../../cs/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇪🇸 [es](../../../es/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇫🇷 [fr](../../../fr/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇩🇪 [de](../../../de/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇹 [it](../../../it/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇷🇺 [ru](../../../ru/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇯🇵 [ja](../../../ja/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇰🇷 [ko](../../../ko/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇸🇦 [ar](../../../ar/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇳 [in](../../../in/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇹🇭 [th](../../../th/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇻🇳 [vi](../../../vi/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇩 [id](../../../id/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇲🇾 [ms](../../../ms/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇳🇱 [nl](../../../nl/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇵🇱 [pl](../../../pl/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇸🇪 [sv](../../../sv/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇳🇴 [no](../../../no/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇩🇰 [da](../../../da/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇫🇮 [fi](../../../fi/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇵🇹 [pt](../../../pt/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇷🇴 [ro](../../../ro/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇭🇺 [hu](../../../hu/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇧🇬 [bg](../../../bg/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇸🇰 [sk](../../../sk/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇹🇷 [tr](../../../tr/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇱 [he](../../../he/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇵🇭 [phi](../../../phi/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md)

> Translation snapshot for **Awesome Omni Skills** `v0.12.0`.
> Source: `docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md; version=0.12.0; release=v0.12.0; english_snapshot=2026-04-11T19:59:36.749325+00:00 -->

> **Repository-local operational status for naming, package identity, generated docs, and automatic release behavior.**

---

## Snapshot

- Date validated: **April 11, 2026**
- Canonical GitHub repo: `diegosouzapw/awesome-omni-skills`
- Canonical source package: `awesome-omni-skills@0.12.0`
- Current repository-local runtime surfaces: **CLI**, **API**, **MCP**, **A2A**
- Current generated catalog state in this workspace: **0** native skills, **0** curated derivatives, **7** bundle definitions
- Current docs translation surface: **31** generated non-English language snapshots under `docs/i18n/`

This document describes the state of the repository itself. It is not a live external dashboard report.

---

## Rollout Checklist

| Area | Status | Notes |
|:-----|:-------|:------|
| GitHub repository naming | ✅ Complete | Canonical repo slug is `awesome-omni-skills` |
| Root package naming | ✅ Complete | `package.json` and bin entrypoints expose `awesome-omni-skills` |
| Workspace version consistency | ✅ Complete | Root package, workspaces, lockfile, and OpenAPI version are synchronized from the same source version |
| Generated docs identity | ✅ Complete | `README.md`, `CONTRIBUTING.md`, `docs/`, and `docs/i18n/` regenerate from repository-local source of truth |
| Runtime i18n packaging | ✅ Complete | `packages/i18n-runtime/` is now part of the published tarball contract |
| Broken docs links cleanup | ✅ Complete | Stale `docs/operations/*` and `docs/architecture/*` references were replaced with current paths under `docs/users/`, `docs/specs/`, and `docs/PROJECT-STRUCTURE.md` |
| Translation snapshot cleanup | ✅ Complete | `docs/i18n/` now regenerates the canonical set and removes stale generated files |
| Automatic release on skill-surface merges | ✅ Complete | The repository-local workflow bumps the version after qualifying merges to `main` |

---

## Automatic Versioning After Merge

Qualifying merges to `main` now trigger the release workflow for this repository when they change any of:

- `skills/**`
- `skills_omni/**`
- `data/bundles.json`

Version progression is repository-local and follows this policy:

- patch increments by `+1` until `.99`
- after `.99`, the next qualifying merge increments the minor and resets patch to `.0`
- after `x.99.99`, the next qualifying merge increments the major and resets to `.0.0`

Examples:

- `0.12.0 -> 0.12.1`
- `0.12.98 -> 0.12.99`
- `0.12.99 -> 0.13.0`
- `0.99.99 -> 1.0.0`

This policy is scoped to this repository only. It does not modify any global workflow outside the workspace.

---

## What Was Corrected In This Review

- stale status manifests that still reported `0.10.0` and `v0.9.9`
- stale docs links pointing to removed `docs/operations/` and `docs/architecture/` paths
- stale manual examples still advertising `0.9.5`
- version-sync logic that updated workspace packages but left the root internal dependencies behind
- release math that still used the old `.10` rollover rule
- generated translation trees that kept orphaned files after the English source set changed

---

## Current Repository State

The naming and packaging rollout is complete. The project currently operates as a runtime-first baseline with:

- a synchronized source-controlled version of `0.12.0`
- generated documentation and translation snapshots aligned to the current repository artifacts
- automatic repository-local release bumps for qualifying merges into `main`
- an empty tracked skill catalog in this workspace snapshot, with bundle definitions and runtime surfaces still present

Normal maintenance from this point forward is:

1. keep generated docs and `docs/i18n/*` in sync with the English source docs
2. keep workspace package versions aligned through the repository sync script
3. let qualifying skill-surface merges on `main` drive the next release version automatically

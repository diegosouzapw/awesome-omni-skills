# Awesome Omni Skills Rollout And Migration Status (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇪🇸 [es](../../../es/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇫🇷 [fr](../../../fr/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇩🇪 [de](../../../de/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇹 [it](../../../it/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇷🇺 [ru](../../../ru/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇨🇳 [zh-CN](../../../zh-CN/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇯🇵 [ja](../../../ja/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇰🇷 [ko](../../../ko/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇸🇦 [ar](../../../ar/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇳 [in](../../../in/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇹🇭 [th](../../../th/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇻🇳 [vi](../../../vi/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇩 [id](../../../id/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇲🇾 [ms](../../../ms/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇳🇱 [nl](../../../nl/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇵🇱 [pl](../../../pl/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇸🇪 [sv](../../../sv/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇳🇴 [no](../../../no/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇩🇰 [da](../../../da/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇫🇮 [fi](../../../fi/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇵🇹 [pt](../../../pt/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇷🇴 [ro](../../../ro/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇭🇺 [hu](../../../hu/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇧🇬 [bg](../../../bg/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇸🇰 [sk](../../../sk/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇺🇦 [uk-UA](../../../uk-UA/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇮🇱 [he](../../../he/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇵🇭 [phi](../../../phi/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md) · 🇧🇷 [pt-BR](../../../pt-BR/docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md)

> Translation snapshot for **Awesome Omni Skills** `v0.11.0`.
> Source: `docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md`. Regenerate after English docs are rendered from generated manifests.
> Do not edit translated files directly; update the English source and rerun `npm run i18n:render`.

---

<!-- generated:i18n-doc: project=awesome-omni-skills; source=docs/users/AWESOME-OMNI-SKILLS-ROLLOUT.md; version=0.11.0; release=v0.11.0; english_snapshot=2026-04-02T00:00:00+00:00 -->

> **Operational status of the rebrand, editorial automation rollout, and public/private acceptance checks.**

---

## Snapshot

- Date validated: **April 1, 2026**
- Canonical GitHub repo: `diegosouzapw/awesome-omni-skills`
- Canonical repo package name in source control: `awesome-omni-skills`
- Canonical npm package: `awesome-omni-skills@0.9.5`
- Deprecated npm package: `omni-skills@0.1.5`
- Private operations repo: `diegosouzapw/omni-skills-private`
- Current public catalog state: **154** native skills and **110** curated derivatives

---

## Rollout Checklist

| Area | Status | Notes |
|:-----|:-------|:------|
| GitHub repository rename | ✅ Complete | Canonical repo slug is now `awesome-omni-skills` |
| Root package rename in source control | ✅ Complete | `package.json` now uses `awesome-omni-skills` |
| Legacy CLI alias retirement | ✅ Complete | Source control, docs, and package bins now expose only `awesome-omni-skills` |
| Project identity automation | ✅ Complete | `data/project_identity.json`, `verify_project_identity.py`, and repo metadata sync are active |
| GitHub description, homepage, and topics sync | ✅ Complete | Repository header now matches source-controlled metadata |
| Generated doc drift checks | ✅ Complete | `build`, CI validation, registry checks, and i18n checks all enforce current state |
| Public repository-sources intake | ✅ Complete | `REPOSITORY-SOURCES.md` is rendered, linted, and consumed by the private runtime |
| Private dashboard visibility after rename | ✅ Complete | Dashboard and source registry still operate after the public repo rename |
| NPM publication of renamed package | ✅ Complete | `awesome-omni-skills@0.9.5` is the canonical public package |

---

## Migration Notes

### What is already canonical

- The project name is **Awesome Omni Skills**.
- The canonical GitHub repository is `diegosouzapw/awesome-omni-skills`.
- Source-controlled package metadata, repo header metadata, docs identity, and generated status manifests all use the new name.

### What remains as historical compatibility only

- The old package name `omni-skills` remains only as a deprecated npm record that points users to `awesome-omni-skills`.
- The canonical runnable command is now `npx awesome-omni-skills`.
- Living docs, builds, generated artifacts, and package bins no longer advertise the legacy alias.

### How to read current command examples

- `npx awesome-omni-skills` is now the canonical install and runtime entrypoint.
- Any remaining `npx omni-skills` references should be treated as stale documentation drift or historical record, not supported public guidance.

---

## Acceptance Report

### Public repo checks

These checks were revalidated during rollout acceptance:

- `npm run identity:check`
- `npm run repo:metadata:check`
- `npm run build`
- `npm test`
- `npm run pr:preflight`

Outcome:

- all commands passed locally on March 31, 2026
- repo metadata drift is now enforced in CI
- generated docs and translations are kept in sync by the build path

### GitHub repository metadata

The source-controlled repo identity now drives:

- description
- homepage
- topics

Validated live state on March 31, 2026:

- description matches `data/project_identity.json`
- homepage is `https://github.com/diegosouzapw/awesome-omni-skills#readme`
- topics match the curated identity contract

### NPM migration verification

Validated on April 1, 2026 after the `v0.9.0` release:

- `npm view awesome-omni-skills version` returned **0.9.0**
- `npm view omni-skills version` returned **0.1.5**
- `npm view omni-skills deprecated` now points users to `npx awesome-omni-skills`
- the public npm entrypoint is now the renamed package

### Private runtime acceptance

The private repo and dashboard were revalidated against the renamed public repo contract:

- dashboard reachable at `http://192.168.0.109:8787`
- source registry still shows tracked public-registry imports
- no open native or curated operator PRs at validation time
- public-registry import bridge remains active
- private docs and env examples were updated to target `diegosouzapw/awesome-omni-skills`

### Dashboard and registry verification

Validated through the deployed dashboard and API:

- `/api/config`
- `/api/ops`
- `/api/sources`
- public-registry import remains operational

The dashboard still surfaced the accepted rollout state after the rename, including merged native and curated history for the `vercel-labs-agent-skills` source.

---

## Current Rollout State

The rebrand rollout is now **GitHub/docs/runtime/npm complete**.

The remaining operational work is normal release maintenance:

1. keep generated docs and `docs/i18n/*` in sync with current catalog state
2. keep the private dashboard/runtime aligned to the public slug and package identity
3. eventually retire the deprecated `omni-skills` npm record when migration support is no longer needed

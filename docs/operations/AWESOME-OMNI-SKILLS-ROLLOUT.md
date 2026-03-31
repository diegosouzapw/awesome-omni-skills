# Awesome Omni Skills Rollout And Migration Status

> **Operational status of the rebrand, editorial automation rollout, and public/private acceptance checks.**

---

## Snapshot

- Date validated: **March 31, 2026**
- Canonical GitHub repo: `diegosouzapw/awesome-omni-skills`
- Canonical repo package name in source control: `awesome-omni-skills`
- Published npm package currently available: `omni-skills@0.1.5`
- Published npm package not yet available: `awesome-omni-skills`
- Private operations repo: `diegosouzapw/omni-skills-private`
- Current public catalog state: **55** native skills and **38** curated derivatives

---

## Rollout Checklist

| Area | Status | Notes |
|:-----|:-------|:------|
| GitHub repository rename | ✅ Complete | Canonical repo slug is now `awesome-omni-skills` |
| Root package rename in source control | ✅ Complete | `package.json` now uses `awesome-omni-skills` |
| Legacy CLI alias contract | ✅ Complete | `omni-skills` bin remains in `package.json` |
| Project identity automation | ✅ Complete | `data/project_identity.json`, `verify_project_identity.py`, and repo metadata sync are active |
| GitHub description, homepage, and topics sync | ✅ Complete | Repository header now matches source-controlled metadata |
| Generated doc drift checks | ✅ Complete | `build`, CI validation, registry checks, and i18n checks all enforce current state |
| Public repository-sources intake | ✅ Complete | `REPOSITORY-SOURCES.md` is rendered, linted, and consumed by the private runtime |
| Private dashboard visibility after rename | ✅ Complete | Dashboard and source registry still operate after the public repo rename |
| NPM publication of renamed package | ⏳ Pending credentials/release | `awesome-omni-skills` is not yet published to npm as of March 31, 2026 |

---

## Migration Notes

### What is already canonical

- The project name is **Awesome Omni Skills**.
- The canonical GitHub repository is `diegosouzapw/awesome-omni-skills`.
- Source-controlled package metadata, repo header metadata, docs identity, and generated status manifests all use the new name.

### What is still in migration

- The npm registry still serves `omni-skills@0.1.5`.
- `awesome-omni-skills` does **not** exist on npm yet.
- Until the renamed package is published, all runnable install examples should use `npx omni-skills`.

### How to read current command examples

- If a doc shows `npx omni-skills`, that is runnable against the currently published package.
- If a doc still shows `awesome-omni-skills` deeper in the command surface, substitute `omni-skills` until the first renamed npm publish lands.
- The legacy alias should remain available for at least one migration window after the renamed package is published.

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

Validated on March 31, 2026:

- `npm view awesome-omni-skills version` returned **404 Not Found**
- `npm view omni-skills version` returned **0.1.5**

That means the repository rename is live, but the npm rename is still a staged rollout item rather than a completed publication.

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

## Next Release Action

To finish the npm side of the migration:

1. publish the renamed package `awesome-omni-skills`
2. keep `omni-skills` as the documented compatibility alias for the migration window
3. after the renamed package is live, remove the temporary “replace with omni-skills” notes from user docs

Until that publish happens, the rollout should be treated as **GitHub/docs/runtime complete, npm publication pending**.

# Nx CI Monitor Runbook (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-ci-monitor/references/nx-ci-monitor-runbook.md)

---


## Purpose

Use this runbook to execute the `nx-ci-monitor` skill with a predictable monitor -> classify -> act -> verify -> exit loop.

## 1. Preflight

Collect these before polling:

- current branch
- current HEAD SHA
- working tree status
- Nx Cloud connection status
- package manager / lockfile
- whether the failure happened before or after Nx started

Stop if:

- `nx.json` is missing or does not indicate Nx Cloud connectivity
- the working tree has unrelated local edits and the user did not authorize proceeding
- the failure is clearly pre-Nx and belongs to CI-provider debugging

## 2. Poll

Use the CI watcher in one of two modes:

- normal mode: inspect the current CIPE
- wait mode: ignore the old CIPE and wait for a new one after an apply, rerun, or push

## 3. Classify

Map the result into one of these states:

- `ci_success`
- `fix_auto_applying`
- `fix_available`
- `fix_failed`
- `environment_issue`
- `no_fix`
- `no_new_cipe`
- `polling_timeout`
- `cipe_canceled`
- `cipe_timed_out`
- `error`

## 4. Decide

### Apply directly

Use when failed tasks are fully verified or only e2e tasks remain unverified and the user accepts CI-only validation.

### Apply locally

Use when the patch is directionally correct but needs local enhancement.

### Reject

Use when the proposed patch is clearly wrong or unsafe.

### Rerun environment state

Use when the workflow classifies the failure as environment/state-related.

## 5. Verify

Prefer rerunning only implicated tasks.

If base/head context exists, prefer affected verification over broad workspace reruns.

Bound local enhancement loops with `--local-verify-attempts`.

## 6. Exit

Always include:

- branch
- final SHA
- final CIPE URL
- action history
- failed tasks
- verification method
- remaining risks

# Nx CI Monitor Troubleshooting (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-ci-monitor/references/nx-ci-monitor-troubleshooting.md)

---


## Workspace not connected to Nx Cloud

**Symptoms:** `nx.json` is absent, or no `nxCloudId` / `nxCloudAccessToken` is present.

**What to check:**

- workspace root contains `nx.json`
- the file indicates Nx Cloud connection

**Action:** Stop and route out of this skill.

---

## No new CIPE after apply or push

**Symptoms:** wait mode times out and returns `no_new_cipe`.

**What to check:**

- CI provider logs
- checkout and auth stages
- dependency installation stage
- workflow syntax / runner failures

**Action:** Treat as pre-Nx failure unless evidence shows a narrow repository-side fix.

---

## Local success, CI failure

**Symptoms:** local rerun passes but CI still fails.

**What to check:**

- package manager mismatch
- stale or changed lockfile
- native module or platform-specific behavior
- environment variables and secrets
- whether CI is using distributed execution or different runtime assumptions

**Action:** Avoid over-trusting local verification. Escalate if the mismatch is environmental.

---

## Repeated environment issues

**Symptoms:** repeated `environment_issue`, repeated timeouts, or repeated no-progress cycles.

**What to check:**

- whether reruns are producing any new signal
- whether failures cluster around infra or runner conditions

**Action:** Trigger the circuit breaker and hand off to platform/CI owners.

---

## Patch intent is unclear

**Symptoms:** self-healing suggests changes unrelated to the failed tasks or with weak reasoning.

**What to check:**

- touched files vs failed task scope
- whether the patch changes dependencies or lockfiles
- whether the patch appears to hide rather than solve the failure

**Action:** Prefer reject or careful local inspection; do not apply blindly.

---

## Cache or distributed execution confusion

**Symptoms:** operators attribute the defect to cache behavior without evidence.

**What to check:**

- exact failing task IDs
n- whether failures are reproducible on rerun
- CIPE history and execution pattern

**Action:** Separate infra behavior from code behavior. Capture evidence and hand off if infra is the likely root cause.

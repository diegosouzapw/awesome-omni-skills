# Coding Guidelines Router (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇪🇸 [es](../../../../es/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇩🇪 [de](../../../../de/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇮🇹 [it](../../../../it/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇮🇳 [in](../../../../in/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇹🇭 [th](../../../../th/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇮🇩 [id](../../../../id/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇳🇴 [no](../../../../no/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇩🇰 [da](../../../../da/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇮🇱 [he](../../../../he/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coding-guidelines/agents/coding-guidelines-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coding-guidelines/agents/coding-guidelines-router.md)

---


Use this router when the current task no longer fits a bounded implementation workflow.

## Route to debugging

Choose debugging when the main problem is still discovering root cause rather than implementing a known fix.

## Route to testing

Choose testing when test strategy, flaky behavior, or coverage design is the main task.

## Route to security review

Choose security review when the change materially affects auth, secrets, permissions, supply chain risk, command execution, or untrusted input handling.

## Route to architecture or design

Choose architecture or design when the request requires new boundaries, major tradeoffs, or system-level decisions.

## Route to dependency or CI troubleshooting

Choose dependency or CI troubleshooting when build failures, package resolution, or pipeline instability dominate.

## Preserve during handoff

Carry forward:

- the user request
- assumptions made
- files inspected or changed
- validation already attempted
- remaining uncertainty and risk

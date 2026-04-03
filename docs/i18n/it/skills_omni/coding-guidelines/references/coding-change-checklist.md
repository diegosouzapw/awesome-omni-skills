# Coding Change Checklist (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coding-guidelines/references/coding-change-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coding-guidelines/references/coding-change-checklist.md)

---


Use this checklist before editing code and again before handoff.

## Before coding

- Can you restate the request as a concrete implementation task?
- Are acceptance criteria explicit?
- If not, have you stated assumptions or asked a clarifying question?
- Did you inspect nearby code, tests, and patterns first?
- Can you name the smallest set of files likely to change?
- Does the task touch any security-sensitive surface?

## While coding

- Is every edit directly tied to the request?
- Are you matching local naming, structure, and test conventions?
- Did you avoid speculative abstractions, flags, and unrelated cleanup?
- Did you remove only the unused artifacts created by your own change?

## Before handoff

- Did you run the narrowest relevant tests or checks first?
- Did you separate pre-existing failures from regressions caused by your edit?
- Did you review the diff for unrelated changes?
- Can you explain why each changed file was necessary?
- Did you state assumptions, validation, and residual risks clearly?
- If the change is security-sensitive, did you recommend extra review where needed?

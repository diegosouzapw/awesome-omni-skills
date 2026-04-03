# Jira Sprint Operations (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇪🇸 [es](../../../../es/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇫🇷 [fr](../../../../fr/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇩🇪 [de](../../../../de/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇮🇹 [it](../../../../it/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇷🇺 [ru](../../../../ru/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇯🇵 [ja](../../../../ja/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇰🇷 [ko](../../../../ko/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇸🇦 [ar](../../../../ar/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇮🇳 [hi](../../../../hi/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇮🇳 [in](../../../../in/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇹🇭 [th](../../../../th/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇻🇳 [vi](../../../../vi/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇮🇩 [id](../../../../id/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇲🇾 [ms](../../../../ms/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇳🇱 [nl](../../../../nl/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇵🇱 [pl](../../../../pl/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇸🇪 [sv](../../../../sv/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇳🇴 [no](../../../../no/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇩🇰 [da](../../../../da/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇫🇮 [fi](../../../../fi/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇵🇹 [pt](../../../../pt/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇷🇴 [ro](../../../../ro/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇭🇺 [hu](../../../../hu/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇧🇬 [bg](../../../../bg/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇸🇰 [sk](../../../../sk/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇮🇱 [he](../../../../he/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇵🇭 [phi](../../../../phi/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇨🇿 [cs](../../../../cs/skills_omni/jira-assistant/references/jira-sprint-operations.md) · 🇹🇷 [tr](../../../../tr/skills_omni/jira-assistant/references/jira-sprint-operations.md)

---


Sprint operations differ from core issue operations because they require board-aware context.

## Before you start

Collect or confirm:

- project key
- board identity or board URL
- `cloudId`
- whether the user means the active sprint or a future sprint

## Safe sprint workflow

1. identify board context
2. inspect available active or future sprint state
3. inspect issues in the sprint
4. confirm the intended issue or filter
5. perform the sprint-related action
6. verify the result

## Common request patterns

### What is in the current sprint?

Return a concise summary including:

- sprint name
- issue count if available
- top blockers or in-progress work
- any obvious risks, such as too many unassigned or blocked issues

### Move an issue into the current sprint

Before attempting this:

- confirm the board
- confirm the active sprint exists
- confirm the issue belongs in the board context
- verify the user actually wants a sprint assignment change

### Show sprint blockers

Use sprint-aware issue search where possible and summarize:

- blocked items
- high-priority unfinished work
- unassigned or stale work in the sprint

## Failure modes

Sprint actions can fail because:

- the issue is not included in the board filter
- the board does not have an active sprint
- the user lacks Jira Software permissions
- the board context is wrong even if the project key is correct

When in doubt, ask the user for the board or sprint name rather than guessing.

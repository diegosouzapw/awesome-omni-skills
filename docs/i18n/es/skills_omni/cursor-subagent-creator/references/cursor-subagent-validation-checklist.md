# Cursor Subagent Validation Checklist (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/cursor-subagent-creator/references/cursor-subagent-validation-checklist.md)

---


Use this checklist before handoff.

## File and location

- [ ] File is in `.cursor/agents/` or `~/.cursor/agents/`
- [ ] Filename is kebab-case
- [ ] File extension is `.md`

## Frontmatter

- [ ] Frontmatter exists and is valid YAML
- [ ] `name` is aligned with the intended subagent identity
- [ ] `description` states when to use the subagent
- [ ] `description` includes examples or trigger conditions
- [ ] `model` choice is justified if not `inherit`
- [ ] `readonly: true` is used for analysis/review roles where possible
- [ ] `is_background: true` is used only when clearly justified

## Prompt quality

- [ ] One clear responsibility
- [ ] Numbered execution steps
- [ ] Constraints are explicit
- [ ] Output format is structured
- [ ] Instructions are concise and testable

## Validation

- [ ] One explicit invocation test was attempted
- [ ] One natural-language delegation test was attempted
- [ ] Delegation behavior matched the intended trigger
- [ ] The subagent did not exceed intended permissions

## Handoff

- [ ] Final response includes exact path
- [ ] Final response includes invocation examples
- [ ] Final response includes any recommended refinements

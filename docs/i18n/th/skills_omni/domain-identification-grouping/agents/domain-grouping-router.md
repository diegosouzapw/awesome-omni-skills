# Domain Grouping Router (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-identification-grouping/agents/domain-grouping-router.md)

---


Use this note when deciding whether `domain-identification-grouping` is the right skill.

## Use this skill when

- components already exist
- the task is to group them into business domains or candidate bounded contexts
- the desired output is a mapping, rationale, and context map

## Route elsewhere when

- the task is to discover domains from business events or greenfield modeling -> `@domain-analysis`
- the task is to measure dependency strength, coupling, or change impact -> `@coupling-analysis`
- the task is to plan extraction sequencing, rollout, or migration execution after grouping -> use a downstream extraction or migration planning skill if available

## Handoff note

When handing off, preserve:

- the domain glossary
- the mapping table
- confidence notes
- unresolved assignments
- shared-component decisions
- context map

# Component Flattening Router (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/agents/component-flattening-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/agents/component-flattening-router.md)

---


Use this note when the task no longer fits local hierarchy cleanup.

## Stay with this skill when

- the work is inside one feature, module family, or namespace
- the main problem is misplaced implementation files or unclear ownership within that boundary
- the expected result is a flattening plan plus safe file moves

## Hand off when

### Route to coupling or dependency analysis

Use another skill when the real question is:

- which modules depend on which others
- whether layering is violated
- fan-in, fan-out, or circular imports

### Route to domain grouping

Use another skill when the real question is:

- how features should be grouped
- where bounded contexts begin and end
- whether components belong to a different domain entirely

### Route to package-boundary review

Escalate when:

- changes cross package or workspace library boundaries
- package `exports` must change
- public import contracts are affected
- the move would alter published API surfaces

### Route to codemod or migration execution

Use another execution-focused skill when:

- the architecture decision is already made
- the remaining work is large-scale automated rewriting
- success depends mainly on migration tooling and batching

## Required handoff note

When handing off, include:

- the original scope reviewed
- files already classified
- why flattening alone is insufficient
- package/API/routing risks discovered

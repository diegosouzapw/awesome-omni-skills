# Domain Analysis Router (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-analysis/agents/domain-analysis-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-analysis/agents/domain-analysis-router.md)

---


Use this note when the task no longer fits strategic domain analysis.

## Stay with this skill when

- the user wants business-domain discovery
- the task is to infer bounded contexts
- the task is to classify subdomains
- the task is to document language conflicts or cohesion issues
- the task is to produce context maps or cautious service-boundary options

## Hand off when

### Route to `@coupling-analysis`
When the dominant question becomes import structure, instability, dependency cycles, or package-level coupling.

### Route to `@domain-identification-grouping`
When the user already has components and wants them grouped into domains without deeper strategic design work.

### Route to tactical DDD or implementation skills
When the task becomes aggregate design, repository design, transaction rules, entity modeling, or command handling inside a single context.

### Route to ADR / architecture decision work
When domain findings are accepted and the team needs a formal decision record.

## Handoff guidance

When handing off, preserve:

- scope analyzed
- glossary findings
- term collisions
- candidate subdomains
- context map assumptions
- confidence levels
- unresolved questions

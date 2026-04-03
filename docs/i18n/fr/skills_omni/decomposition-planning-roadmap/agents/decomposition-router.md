# Decomposition Planning Router (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇪🇸 [es](../../../../es/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇩🇪 [de](../../../../de/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇮🇹 [it](../../../../it/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇮🇳 [in](../../../../in/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇹🇭 [th](../../../../th/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇮🇩 [id](../../../../id/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇳🇴 [no](../../../../no/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇩🇰 [da](../../../../da/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇮🇱 [he](../../../../he/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/decomposition-planning-roadmap/agents/decomposition-router.md)

---


Use this note to route requests to the right skill before applying the roadmap workflow.

## Use `decomposition-planning-roadmap` when

- the user wants extraction order, phases, milestones, or sequencing
- candidate seams already exist or can be evaluated from available evidence
- the main need is prioritization and migration planning

## Route away when

### Route to `@domain-analysis` if
- domains or bounded contexts are still unclear
- the team needs event storming, subdomain discovery, or business capability mapping

### Route to `@component-identification-sizing` if
- the component inventory is missing
- the user does not yet know what major modules or candidates exist

### Route to dependency analysis if
- runtime, code, or data coupling is not mapped enough to compare candidates

### Route to service-boundary design if
- the user needs API contracts, ownership model, data model split, or internal service design

### Route to observability readiness if
- rollout safety depends on tracing, alerts, dashboards, or telemetry maturity

## Safe fallback guidance

If prerequisites are weak, say so clearly. Recommend a preparatory phase or a different skill instead of inventing a confident extraction order.

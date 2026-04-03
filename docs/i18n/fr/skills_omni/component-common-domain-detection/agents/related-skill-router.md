# Related Skill Router (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇪🇸 [es](../../../../es/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇩🇪 [de](../../../../de/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇮🇹 [it](../../../../it/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇮🇳 [in](../../../../in/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇹🇭 [th](../../../../th/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇮🇩 [id](../../../../id/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇳🇴 [no](../../../../no/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇩🇰 [da](../../../../da/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇮🇱 [he](../../../../he/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-common-domain-detection/agents/related-skill-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-common-domain-detection/agents/related-skill-router.md)

---


Use this router when the task drifts beyond common domain component detection.

## Route to dependency or coupling analysis

Use `@coupling-analysis` when the main question is:
- dependency direction
- fan-in / fan-out mapping
- change impact from dependency structure alone

## Route to architecture review

Use `@architecture-review` when:
- bounded contexts conflict
- organizational ownership is unclear
- consolidation changes the target architecture materially

## Route to service boundary design

Use `@service-boundary-design` when:
- a shared service is the leading option
- API shape, trust boundaries, runtime contracts, or rollout plans need detailed design

## Route away from this skill entirely

Use a code-duplication or lint-style workflow when the user really wants:
- clone detection
- repeated snippets
- formatting or utility duplication without domain analysis

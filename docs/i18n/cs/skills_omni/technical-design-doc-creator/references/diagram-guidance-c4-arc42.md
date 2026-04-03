# Diagram Guidance (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/references/diagram-guidance-c4-arc42.md)

---


Choose diagrams that clarify architecture for the intended audience.

## Recommended diagram types

### System context
Use when readers need to understand external actors, upstream/downstream systems, and system boundaries.

### Container view
Use when readers need to understand major deployable parts or services and their interactions.

### Component view
Use when one service or subsystem needs more detail, but stay above class level.

### Sequence or runtime flow
Use when order of interactions, async flows, retries, or failure paths matter.

### Deployment view
Use when runtime environment, regions, clusters, queues, or databases materially affect the design.

## Prefer

- stable names and responsibilities
- arrows that describe interaction direction
- trust boundaries when security matters
- sequence diagrams for auth, payments, integrations, and migration flows

## Avoid

- class diagrams unless absolutely necessary
- framework internals
- detailed code structure
- diagrams that mirror source files instead of architecture

## Practical rule

If the audience is making a design or review decision, show system behavior and boundaries. If the diagram only helps code implementation, it is probably too low-level for the TDD.

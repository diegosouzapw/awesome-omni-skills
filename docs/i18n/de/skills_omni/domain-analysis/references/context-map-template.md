# Context Map Template (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-analysis/references/context-map-template.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-analysis/references/context-map-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-analysis/references/context-map-template.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-analysis/references/context-map-template.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-analysis/references/context-map-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-analysis/references/context-map-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-analysis/references/context-map-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-analysis/references/context-map-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-analysis/references/context-map-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-analysis/references/context-map-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-analysis/references/context-map-template.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-analysis/references/context-map-template.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-analysis/references/context-map-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-analysis/references/context-map-template.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-analysis/references/context-map-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-analysis/references/context-map-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-analysis/references/context-map-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-analysis/references/context-map-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-analysis/references/context-map-template.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-analysis/references/context-map-template.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-analysis/references/context-map-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-analysis/references/context-map-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-analysis/references/context-map-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-analysis/references/context-map-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-analysis/references/context-map-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-analysis/references/context-map-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-analysis/references/context-map-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-analysis/references/context-map-template.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-analysis/references/context-map-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-analysis/references/context-map-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-analysis/references/context-map-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-analysis/references/context-map-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-analysis/references/context-map-template.md)

---


Use this template after drafting candidate bounded contexts.

## Contexts

- Context A:
- Context B:
- Context C:

## Relationship Table

| From | To | Relationship Type | Integration Mechanism | Why this relationship fits | Confidence |
| --- | --- | --- | --- | --- | --- |

## Relationship Legend

### Customer / Supplier
Use when one context depends on another and can influence what it needs.

### Conformist
Use when a downstream context must accept the upstream model with limited negotiating power.

### Anti-Corruption Layer
Use when one context should translate another context's model to avoid leaking language or semantics.

### Open Host Service
Use when a context exposes a stable, published integration surface for others.

### Published Language
Use when contexts coordinate through a documented contract, schema, or event language.

### Shared Kernel
Use sparingly when two contexts intentionally share a small part of the model and can coordinate closely.

## Notes

- Shared libraries do not automatically imply Shared Kernel.
- Prefer explicit translation over leaking foreign terms into a local model.
- Record uncertainty explicitly when relationship type is only a hypothesis.

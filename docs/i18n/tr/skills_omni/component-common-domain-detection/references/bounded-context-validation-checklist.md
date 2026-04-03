# Bounded Context Validation Checklist (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-common-domain-detection/references/bounded-context-validation-checklist.md)

---


Use this checklist before recommending consolidation.

## Capability identity

- [ ] Do the candidate components serve the same business capability?
- [ ] Do they operate on the same core concepts and vocabulary?
- [ ] Do they enforce the same invariants or business rules?
- [ ] Are the triggers and entry points materially similar?

## Data and behavior

- [ ] Are inputs and outputs compatible?
- [ ] Are important differences only configuration or templates, not business semantics?
- [ ] Would a shared abstraction stay understandable without many context-specific exceptions?

## Ownership and context

- [ ] Are the components owned by the same team or by teams with aligned governance?
- [ ] Do they belong to the same bounded context or subdomain?
- [ ] Would consolidation blur product, compliance, or organizational boundaries?

## Decision rule

- If most answers are yes, consolidation may be justified.
- If several answers are unclear, lower confidence and collect more evidence.
- If core semantics differ, keep the components separate even if names match.

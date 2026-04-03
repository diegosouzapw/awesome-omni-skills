# Implementation Review Checklist (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-blueprint/references/implementation-review-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-blueprint/references/implementation-review-checklist.md)

---


Use this at the end of the workflow and during major checkpoints.

## Fidelity

- [ ] Matches approved design direction
- [ ] Key reference traits are present for the right reasons
- [ ] Token usage is consistent
- [ ] No unexplained drift in spacing, type, color, or icon style

## Semantics and Accessibility

- [ ] Semantic HTML used where possible
- [ ] ARIA added only where necessary
- [ ] Keyboard access works for interactive elements
- [ ] Focus states are visible
- [ ] Contrast is acceptable for text and controls
- [ ] Hit/target size is reasonable
- [ ] Labels, names, and roles are clear

## Responsive Behavior

- [ ] Works at small, medium, and large viewport widths relevant to the task
- [ ] Layout does not depend only on full-page width
- [ ] Components also hold up inside cards, sidebars, modals, or narrow columns when relevant
- [ ] Overflow and truncation behavior is intentional

## States

- [ ] Hover state considered where applicable
- [ ] Focus state considered
- [ ] Active/pressed state considered
- [ ] Disabled state considered
- [ ] Empty/loading/error states considered when relevant

## Motion

- [ ] Motion supports comprehension rather than decoration only
- [ ] Reduced-motion preference is respected when motion exists

## Handoff

- [ ] Remaining assumptions are documented
- [ ] Next step is clear
- [ ] Suitable for merge, review, or routing to another skill

# ADR Quality Checklist (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/create-adr/references/adr-quality-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/create-adr/references/adr-quality-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/create-adr/references/adr-quality-checklist.md)

---


Use this before finalizing or handing off an ADR.

## จำเป็น

- [ ] The title records the decision and is not phrased as a question.
- [ ] The ADR has a date.
- [ ] The ADR has a status.
- [ ] The context explains forces, constraints, or background.
- [ ] The decision statement says what was chosen.
- [ ] The consequences include at least one downside or cost.

## Strongly recommended

- [ ] At least one realistic alternative is recorded.
- [ ] The rationale explains why the chosen option beat the alternatives.
- [ ] The ADR links to related RFCs, issues, PRs, docs, or ADRs.
- [ ] The file path follows repository naming and numbering conventions.
- [ ] The wording is concise and avoids implementation-plan sprawl.

## For medium- or high-impact decisions

- [ ] Include decision drivers or evaluation criteria.
- [ ] Include a status quo or "do nothing" option when relevant.
- [ ] Include cross-links for supersession if the decision replaces an older one.
- [ ] Check that the ADR preserves history rather than rewriting it.

## Smell checks

If any are true, improve the draft:

- The ADR reads like a celebration of the chosen option.
- There are no trade-offs.
- There is no evidence alternatives were considered.
- The document looks like an implementation plan.
- A future engineer would still ask, "Why did we do this?"

# Requirement Language Style Guide (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/references/requirement-language-style-guide.md)

---


Use normative language only when it improves review clarity.

## Terms

- **MUST**: mandatory for correctness, safety, or governance
- **SHOULD**: strongly recommended unless there is a justified reason not to do it
- **MAY**: optional

## Good use

- "Security Considerations MUST be included for auth, payment, public API, or PII-related changes."
- "The TDD SHOULD identify at least one rollback trigger for production changes."
- "A glossary MAY be added for domain-heavy projects."

## Avoid

- Overusing MUST for every sentence
- Using normative words where no decision or requirement exists
- Sounding contractual when a plain statement is clearer

## Practical rule

Use plain prose for explanation, and normative language for checklists, validation rules, and section requirements.

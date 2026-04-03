# Glossary Extraction Worksheet (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇪🇸 [es](../../../../es/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇫🇷 [fr](../../../../fr/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇩🇪 [de](../../../../de/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇮🇹 [it](../../../../it/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇷🇺 [ru](../../../../ru/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇯🇵 [ja](../../../../ja/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇰🇷 [ko](../../../../ko/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇸🇦 [ar](../../../../ar/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇮🇳 [hi](../../../../hi/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇮🇳 [in](../../../../in/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇹🇭 [th](../../../../th/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇻🇳 [vi](../../../../vi/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇮🇩 [id](../../../../id/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇲🇾 [ms](../../../../ms/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇳🇱 [nl](../../../../nl/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇵🇱 [pl](../../../../pl/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇸🇪 [sv](../../../../sv/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇳🇴 [no](../../../../no/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇩🇰 [da](../../../../da/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇫🇮 [fi](../../../../fi/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇵🇹 [pt](../../../../pt/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇷🇴 [ro](../../../../ro/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇭🇺 [hu](../../../../hu/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇧🇬 [bg](../../../../bg/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇸🇰 [sk](../../../../sk/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇮🇱 [he](../../../../he/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇵🇭 [phi](../../../../phi/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇨🇿 [cs](../../../../cs/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md) · 🇹🇷 [tr](../../../../tr/skills_omni/domain-analysis/references/glossary-extraction-worksheet.md)

---


Use this worksheet before classifying subdomains or drawing context boundaries.

## Evidence Sources Reviewed

- Code paths:
- APIs:
- Schemas:
- Events:
- Docs / ADRs:
- Tests:

## Term Table

| Term | Kind (noun/verb/event) | Meaning inferred | Where found | Possible context | Alias / synonym | Collision? | Confidence |
| --- | --- | --- | --- | --- | --- | --- | --- |

## Collision Review

For each suspicious term, answer:

1. Does the term mean the same thing everywhere?
2. Does it have different lifecycle states in different areas?
3. Do different actors use it differently?
4. Does one area treat it as identity while another treats it as a business actor or account holder?
5. Would forcing one shared definition create confusion?

## Signals of Strong Ubiquitous Language

- repeated business terms in handlers, docs, APIs, events, and tests
- stable definitions inside one workflow area
- domain verbs that match business operations
- explicit state transitions or business rules

## Signals of Weak Evidence

- generic CRUD naming only
- framework-generated classes
- DTO-heavy code with little domain language
- technical names with no business semantics

## Output Reminder

Do not treat the glossary as decoration. Use it to justify:

- candidate subdomains
- term-collision findings
- bounded-context boundaries
- context-map translation needs

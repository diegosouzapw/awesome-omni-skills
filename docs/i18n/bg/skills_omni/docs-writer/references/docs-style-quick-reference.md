# Docs Style Quick Reference (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇪🇸 [es](../../../../es/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇫🇷 [fr](../../../../fr/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇩🇪 [de](../../../../de/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇮🇹 [it](../../../../it/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇷🇺 [ru](../../../../ru/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇯🇵 [ja](../../../../ja/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇰🇷 [ko](../../../../ko/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇸🇦 [ar](../../../../ar/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇮🇳 [hi](../../../../hi/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇮🇳 [in](../../../../in/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇹🇭 [th](../../../../th/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇻🇳 [vi](../../../../vi/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇮🇩 [id](../../../../id/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇲🇾 [ms](../../../../ms/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇳🇱 [nl](../../../../nl/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇵🇱 [pl](../../../../pl/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇸🇪 [sv](../../../../sv/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇳🇴 [no](../../../../no/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇩🇰 [da](../../../../da/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇫🇮 [fi](../../../../fi/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇵🇹 [pt](../../../../pt/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇷🇴 [ro](../../../../ro/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇭🇺 [hu](../../../../hu/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇧🇬 [bg](../../../../bg/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇸🇰 [sk](../../../../sk/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇮🇱 [he](../../../../he/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇵🇭 [phi](../../../../phi/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇨🇿 [cs](../../../../cs/skills_omni/docs-writer/references/docs-style-quick-reference.md) · 🇹🇷 [tr](../../../../tr/skills_omni/docs-writer/references/docs-style-quick-reference.md)

---


## Write for the reader

- Lead with what the reader is trying to do or understand.
- Prefer plain technical English over internal shorthand.
- Use active voice and direct instructions.
- Keep introductions short; earn detail with relevance.

## Choose the right structure

- **README:** overview, prerequisites, install, usage, examples, troubleshooting, support.
- **How-to:** prerequisites, task steps, expected result, verification, recovery notes.
- **Concept page:** explanation, mental model, constraints, related tasks.
- **Troubleshooting page:** symptoms, causes, diagnosis, resolution, prevention.
- **Migration guide:** what changed, who is affected, required actions, validation.

## Keep terminology stable

- Pick one term for each key concept.
- Avoid unnecessary synonyms.
- Expand unfamiliar acronyms on first mention unless the audience clearly knows them.

## Handle code and commands carefully

- Use fenced code blocks with a language label when possible.
- Match commands to real flags, paths, and config names.
- Mark placeholders clearly, for example `<project-id>`.
- Do not present destructive commands as routine safe steps.

## Make procedures usable

- State prerequisites before the steps.
- Keep steps in the order users actually perform them.
- Mention expected results after important steps.
- Include recovery or rollback hints when failure is common.

## Markdown safety

- Prefer simple GitHub Flavored Markdown/CommonMark-compatible formatting.
- Keep nested lists shallow inside numbered steps.
- Use tables only when they improve scanning.
- Avoid renderer-specific callouts unless the repo supports them clearly.

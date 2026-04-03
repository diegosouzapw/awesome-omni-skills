# Notebook Entry Template (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/codenavi/references/notebook-entry-template.md) · 🇪🇸 [es](../../../../es/skills_omni/codenavi/references/notebook-entry-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/codenavi/references/notebook-entry-template.md) · 🇩🇪 [de](../../../../de/skills_omni/codenavi/references/notebook-entry-template.md) · 🇮🇹 [it](../../../../it/skills_omni/codenavi/references/notebook-entry-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/codenavi/references/notebook-entry-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/codenavi/references/notebook-entry-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/codenavi/references/notebook-entry-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/codenavi/references/notebook-entry-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/codenavi/references/notebook-entry-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/codenavi/references/notebook-entry-template.md) · 🇮🇳 [in](../../../../in/skills_omni/codenavi/references/notebook-entry-template.md) · 🇹🇭 [th](../../../../th/skills_omni/codenavi/references/notebook-entry-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/codenavi/references/notebook-entry-template.md) · 🇮🇩 [id](../../../../id/skills_omni/codenavi/references/notebook-entry-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/codenavi/references/notebook-entry-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/codenavi/references/notebook-entry-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/codenavi/references/notebook-entry-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/codenavi/references/notebook-entry-template.md) · 🇳🇴 [no](../../../../no/skills_omni/codenavi/references/notebook-entry-template.md) · 🇩🇰 [da](../../../../da/skills_omni/codenavi/references/notebook-entry-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/codenavi/references/notebook-entry-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/codenavi/references/notebook-entry-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/codenavi/references/notebook-entry-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/codenavi/references/notebook-entry-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/codenavi/references/notebook-entry-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/codenavi/references/notebook-entry-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/codenavi/references/notebook-entry-template.md) · 🇮🇱 [he](../../../../he/skills_omni/codenavi/references/notebook-entry-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/codenavi/references/notebook-entry-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/codenavi/references/notebook-entry-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/codenavi/references/notebook-entry-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/codenavi/references/notebook-entry-template.md)

---


Use this template for durable discoveries in `.notebook/`.

## INDEX conventions

Keep `.notebook/INDEX.md` as a lightweight directory of notes.

Recommended fields per entry:

- title
- tags
- date
- scope
- related files
- status: active or superseded

## Entry template

```md
# [Short title]

- Date: YYYY-MM-DD
- Status: active
- Tags: [area], [flow], [gotcha], [service]
- Scope: [what this note covers]
- Related files:
  - path/to/file.ext
  - path/to/other.ext

## Summary

[2-5 bullets of the durable insight]

## Evidence

- [file or symbol pointer]
- [test, config, docs, or command output reference]

## Assumptions and limits

- [what is still uncertain]

## Follow-up

- [optional next check or dependent area]
```

## Rules

- Store pointers and rationale, not copied code.
- Prefer file paths, symbols, and brief evidence notes.
- If a note becomes stale, mark it superseded and link the replacement.
- If code and note disagree, update the note after confirming current behavior.

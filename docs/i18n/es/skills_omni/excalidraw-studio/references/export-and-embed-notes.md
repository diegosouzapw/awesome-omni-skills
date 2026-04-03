# Export and Embed Notes (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇪🇸 [es](../../../../es/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇫🇷 [fr](../../../../fr/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇩🇪 [de](../../../../de/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇮🇹 [it](../../../../it/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇷🇺 [ru](../../../../ru/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇯🇵 [ja](../../../../ja/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇰🇷 [ko](../../../../ko/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇸🇦 [ar](../../../../ar/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇮🇳 [hi](../../../../hi/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇮🇳 [in](../../../../in/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇹🇭 [th](../../../../th/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇻🇳 [vi](../../../../vi/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇮🇩 [id](../../../../id/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇲🇾 [ms](../../../../ms/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇳🇱 [nl](../../../../nl/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇵🇱 [pl](../../../../pl/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇸🇪 [sv](../../../../sv/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇳🇴 [no](../../../../no/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇩🇰 [da](../../../../da/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇫🇮 [fi](../../../../fi/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇵🇹 [pt](../../../../pt/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇷🇴 [ro](../../../../ro/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇭🇺 [hu](../../../../hu/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇧🇬 [bg](../../../../bg/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇸🇰 [sk](../../../../sk/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇮🇱 [he](../../../../he/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇵🇭 [phi](../../../../phi/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇨🇿 [cs](../../../../cs/skills_omni/excalidraw-studio/references/export-and-embed-notes.md) · 🇹🇷 [tr](../../../../tr/skills_omni/excalidraw-studio/references/export-and-embed-notes.md)

---


This skill's primary artifact is a `.excalidraw` source file.

Use export helpers or preview generation only as secondary workflow steps.

## Preferred artifact order

1. `.excalidraw` source
2. optional SVG preview
3. optional PNG preview

## When export helpers are useful

Use programmatic export when:

- reviewers need a quick visual preview
- you are embedding a rendered diagram in documentation
- you need a deterministic review image in addition to the editable source

## When raw source is enough

Raw `.excalidraw` is enough when:

- the user wants an editable diagram
- downstream tools already support Excalidraw open/import
- the main goal is scene fidelity rather than publication format

## If coding against the Excalidraw package

Prefer official restoration/export utilities over ad hoc assumptions.

Useful capability areas documented by Excalidraw include:

- scene restoration
- file restoration
- loading from blob
- export to blob, canvas, or SVG

## Cautions

- do not treat exported PNG/SVG as the source of truth
- do not claim full schema validation if you only performed a basic JSON check
- do not load libraries by invented identifiers; use known local or trusted available assets only

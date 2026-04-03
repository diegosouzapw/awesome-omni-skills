# Safe Editing of Existing Excalidraw Scenes (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇪🇸 [es](../../../../es/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇫🇷 [fr](../../../../fr/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇩🇪 [de](../../../../de/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇮🇹 [it](../../../../it/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇷🇺 [ru](../../../../ru/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇯🇵 [ja](../../../../ja/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇰🇷 [ko](../../../../ko/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇸🇦 [ar](../../../../ar/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇮🇳 [hi](../../../../hi/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇮🇳 [in](../../../../in/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇹🇭 [th](../../../../th/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇻🇳 [vi](../../../../vi/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇮🇩 [id](../../../../id/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇲🇾 [ms](../../../../ms/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇳🇱 [nl](../../../../nl/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇵🇱 [pl](../../../../pl/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇸🇪 [sv](../../../../sv/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇳🇴 [no](../../../../no/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇩🇰 [da](../../../../da/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇫🇮 [fi](../../../../fi/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇵🇹 [pt](../../../../pt/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇷🇴 [ro](../../../../ro/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇭🇺 [hu](../../../../hu/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇧🇬 [bg](../../../../bg/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇸🇰 [sk](../../../../sk/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇮🇱 [he](../../../../he/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇵🇭 [phi](../../../../phi/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇨🇿 [cs](../../../../cs/skills_omni/excalidraw-studio/references/edit-existing-scene.md) · 🇹🇷 [tr](../../../../tr/skills_omni/excalidraw-studio/references/edit-existing-scene.md)

---


Use this procedure when the user provides an existing `.excalidraw` file and asks for a modification.

## Goal

Make the requested change without accidentally removing valid scene content, assets, or editor state.

## Procedure

1. Inspect the current file before editing.
2. Identify the exact elements that must change.
3. Preserve unrelated elements whenever possible.
4. Preserve top-level `files`.
5. Preserve relevant `appState`.
6. Reuse existing IDs for unchanged elements.
7. Add new IDs only for new elements.
8. Revalidate the full scene after patching.
9. Open-test the result if possible.

## Preserve these first

- `files`
- existing assets and attachments
- important style choices already present in the diagram
- lane/zone structure
- stable IDs for unchanged elements
- editor state that may matter to downstream consumers

## Avoid these destructive patterns

- regenerating the entire scene when the request is small
- dropping `files` because they seem unrelated
- normalizing all colors, fonts, or roughness without user request
- replacing all IDs needlessly
- flattening grouped or structured layouts into a generic redraw

## Good editing pattern

Good:
- add one cache box and two arrows to an existing architecture diagram
- preserve current layout and color semantics
- keep scene attachments untouched

Bad:
- rebuild the whole architecture scene from scratch with different IDs and styling for a one-box edit

## If the scene is already broken

If the existing file is invalid or opens poorly:

1. keep a copy of the original
2. repair the smallest structural issue first
3. validate again
4. only then apply the requested functional edit

## Handoff note

Tell the user whether the result was:

- a conservative patch
- a partial repair plus patch
- a full regeneration, and why full regeneration was necessary

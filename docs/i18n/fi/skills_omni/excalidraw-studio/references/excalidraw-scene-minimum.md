# Minimum Excalidraw Scene Structure (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇪🇸 [es](../../../../es/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇫🇷 [fr](../../../../fr/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇩🇪 [de](../../../../de/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇮🇹 [it](../../../../it/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇷🇺 [ru](../../../../ru/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇯🇵 [ja](../../../../ja/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇰🇷 [ko](../../../../ko/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇸🇦 [ar](../../../../ar/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇮🇳 [hi](../../../../hi/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇮🇳 [in](../../../../in/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇹🇭 [th](../../../../th/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇻🇳 [vi](../../../../vi/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇮🇩 [id](../../../../id/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇲🇾 [ms](../../../../ms/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇳🇱 [nl](../../../../nl/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇵🇱 [pl](../../../../pl/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇸🇪 [sv](../../../../sv/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇳🇴 [no](../../../../no/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇩🇰 [da](../../../../da/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇫🇮 [fi](../../../../fi/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇵🇹 [pt](../../../../pt/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇷🇴 [ro](../../../../ro/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇭🇺 [hu](../../../../hu/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇧🇬 [bg](../../../../bg/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇸🇰 [sk](../../../../sk/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇮🇱 [he](../../../../he/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇵🇭 [phi](../../../../phi/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇨🇿 [cs](../../../../cs/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md) · 🇹🇷 [tr](../../../../tr/skills_omni/excalidraw-studio/references/excalidraw-scene-minimum.md)

---


Use this as a conservative, minimum known-good checklist for generated `.excalidraw` files.

## Top-level scene shape

A usable scene should include:

- `elements`: array of scene elements
- `appState`: object for scene/editor state
- `files`: object for embedded files or attachments

Minimal conceptual shape:

```json
{
  "elements": [],
  "appState": {},
  "files": {}
}
```

Do not assume this is a complete schema reference. It is a practical minimum for generation and troubleshooting.

## Preserve when editing

When patching an existing scene:

- preserve `files` unless you are certain they are unused
- preserve relevant `appState` instead of resetting it blindly
- preserve existing element IDs when unchanged
- avoid unnecessary rewrites of unrelated elements

## Element modeling rules

### Text inside shapes

Do not invent a `label` shorthand.

Instead:
- create the shape
- create a separate text element
- add the text element to the shape's `boundElements`
- set the text element's `containerId` to the shape ID

### Arrow labels

Use the same pattern:
- arrow element
- separate text element
- text bound to arrow via `containerId`

### Arrow connections

When an arrow should remain attached to elements:
- use `startBinding`
- use `endBinding`
- ensure connected elements reference relevant bindings where needed in `boundElements`

## Ordering guidance

To avoid hidden text:

1. zones/background regions first
2. shapes next
3. arrows next
4. text elements last

## Safe assumptions

These are usually safe operational assumptions for this skill:

- strict JSON is required
- `files` should exist even when empty
- text should be modeled as text elements, not inline labels on shapes
- scene edits should be conservative

## When this cheat sheet is not enough

Use official Excalidraw documentation when:

- you are coding against the Excalidraw package
- you need restore/export helper behavior
- you are dealing with embedded assets, libraries, or programmatic export
- a scene opens inconsistently across environments

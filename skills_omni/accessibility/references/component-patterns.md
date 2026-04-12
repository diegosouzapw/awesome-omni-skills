# Component patterns and native-first guidance

Use native HTML first. Only use ARIA widget patterns when native elements cannot satisfy the interaction.

## Native-first choices

| Need | Prefer first | Avoid if unnecessary |
| --- | --- | --- |
| Action button | `<button>` | `div role="button"` |
| Navigation | `<nav>` with links | Clickable containers |
| Disclosure | `<details><summary>` where suitable | Fully custom disclosure widgets |
| Text input | Native `<input>` / `<textarea>` | Rebuilt text-entry controls |
| Select | Native `<select>` if acceptable | Custom combobox without strong need |
| Dialog-like UI | Native dialog patterns only if implemented accessibly in context; otherwise careful modal implementation | Visual overlay with unmanaged focus |
| Tabs | Only when tabs are truly needed | Using tabs for simple link lists |

## Common APG-backed patterns

- Dialog (Modal): https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/
- Tabs: https://www.w3.org/WAI/ARIA/apg/patterns/tabs/
- Combobox: https://www.w3.org/WAI/ARIA/apg/patterns/combobox/

## Pattern review checklist

### Dialog

- sensible initial focus
- keyboard access to all actions
- Escape handling where appropriate
- focus kept within modal while open
- focus returns logically on close
- background interaction prevented as required by design

### Tabs

- one active tab at a time
- active tab exposed through state
- arrow-key behavior matches the chosen model
- tab panel is associated correctly
- tab order does not become confusing

### Combobox

- editable vs select-only behavior is clear
- expanded/collapsed state is exposed correctly
- active option is conveyed to assistive tech
- keyboard support matches expected pattern
- fallback to native select considered first

## Warning signs

- custom widget implemented on generic containers without robust keyboard support
- ARIA attributes added but names/states do not update
- roving tabindex used inconsistently
- widget passes mouse QA but fails keyboard or screen reader use

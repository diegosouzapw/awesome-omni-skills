# Accessibility Primitives Checklist

Use this checklist when composition patterns produce interactive primitives such as tabs or disclosure components.

## General

- Prefer native interactive elements like `<button>` for triggers.
- Do not build a custom clickable element when a native element fits.
- Keep focus behavior intentional and testable.
- Ensure visible labels and programmatic relationships are preserved.

## Tabs

- `tablist` identifies the container of tabs.
- Each tab exposes correct selected state.
- Each tab is associated with its panel.
- Keyboard behavior is implemented intentionally.
- Hidden panels are handled consistently.
- Focus movement and selection behavior match the intended tabs pattern.

## Disclosure / accordion-like primitives

- Trigger is a button or button-equivalent only when justified.
- Expanded/collapsed state is conveyed accessibly.
- The controlled content relationship is clear.
- Keyboard operation works without pointer interaction.

## Trigger elements

- Use a real `<button>` unless there is a strong reason not to.
- If a non-button is used, verify keyboard and semantic parity explicitly.
- Do not rely on click handlers alone.

## Review questions

- Can a keyboard-only user operate the primitive?
- Does screen-reader state reflect the open/selected state?
- Did the composition refactor accidentally remove semantics while improving API shape?

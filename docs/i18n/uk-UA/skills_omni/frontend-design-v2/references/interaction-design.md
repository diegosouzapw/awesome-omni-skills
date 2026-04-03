# Interaction Design (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-design-v2/references/interaction-design.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-design-v2/references/interaction-design.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-design-v2/references/interaction-design.md)

---


## The Eight Interactive States

Every interactive element needs these states designed:

| State | When | Visual Treatment |
|-------|------|------------------|
| **Default** | At rest | Base styling |
| **Hover** | Pointer over (not touch) | Subtle lift, color shift |
| **Focus** | Keyboard/programmatic focus | Visible ring (see below) |
| **Active** | Being pressed | Pressed in, darker |
| **Disabled** | Not interactive | Reduced opacity, no pointer |
| **Loading** | Processing | Spinner, skeleton |
| **Error** | Invalid state | Red border, icon, message |
| **Success** | Completed | Green check, confirmation |

**The common miss**: Designing hover without focus, or vice versa. They're different. Keyboard users never see hover states.

## Focus Rings: Do Them Right

**Never `outline: none` without replacement.** It's an accessibility violation. Instead, use `:focus-visible` to show focus only for keyboard users:

```css
/* Hide focus ring for mouse/touch */
button:focus {
  outline: none;
}

/* Show focus ring for keyboard */
button:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

**Focus ring design**:
- High contrast (3:1 minimum against adjacent colors)
- 2-3px thick
- Offset from element (not inside it)
- Consistent across all interactive elements

## Form Design: The Non-Obvious

**Placeholders aren't labels**—they disappear on input. Always use visible `<label>` elements. **Validate on blur**, not on every keystroke (exception: password strength). Place errors **below** fields with `aria-describedby` connecting them.

## Loading States

**Optimistic updates**: Show success immediately, rollback on failure. Use for low-stakes actions (likes, follows), not payments or destructive actions. **Skeleton screens > spinners**—they preview content shape and feel faster than generic spinners.

## Modals: The Inert Approach

Focus trapping in modals used to require complex JavaScript. Now use the `inert` attribute:

```html
<!-- When modal is open -->
<main inert>
  <!-- Content behind modal can't be focused or clicked -->
</main>
<dialog open>
  <h2>Modal Title</h2>
  <!-- Focus stays inside modal -->
</dialog>
```

Or use the native `<dialog>` element:

```javascript
const dialog = document.querySelector('dialog');
dialog.showModal();  // Opens with focus trap, closes on Escape
```

## The Popover API

For tooltips, dropdowns, and non-modal overlays, use native popovers:

```html
<button popovertarget="menu">Open menu</button>
<div id="menu" popover>
  <button>Option 1</button>
  <button>Option 2</button>
</div>
```

**Benefits**: Light-dismiss (click outside closes), proper stacking, no z-index wars, accessible by default.

## Destructive Actions: Undo > Confirm

**Undo is better than confirmation dialogs**—users click through confirmations mindlessly. Remove from UI immediately, show undo toast, actually delete after toast expires. Use confirmation only for truly irreversible actions (account deletion), high-cost actions, or batch operations.

## Keyboard Navigation Patterns

### Roving Tabindex

For component groups (tabs, menu items, radio groups), one item is tabbable; arrow keys move within:

```html
<div role="tablist">
  <button role="tab" tabindex="0">Tab 1</button>
  <button role="tab" tabindex="-1">Tab 2</button>
  <button role="tab" tabindex="-1">Tab 3</button>
</div>
```

Arrow keys move `tabindex="0"` between items. Tab moves to the next component entirely.

### Skip Links

Provide skip links (`<a href="#main-content">Skip to main content</a>`) for keyboard users to jump past navigation. Hide off-screen, show on focus.

## Gesture Discoverability

Swipe-to-delete and similar gestures are invisible. Hint at their existence:

- **Partially reveal**: Show delete button peeking from edge
- **Onboarding**: Coach marks on first use
- **Alternative**: Always provide a visible fallback (menu with "Delete")

Don't rely on gestures as the only way to perform actions.

---

**Avoid**: Removing focus indicators without alternatives. Using placeholder text as labels. Touch targets <44x44px. Generic error messages. Custom controls without ARIA/keyboard support.

# Radix Browser Automation Notes

Use this reference during implementation review or browser debugging. It is intentionally focused on Radix-specific behavior that is easier to consult as a lookup than to restate in the main skill.

## 1. Preferred assertion strategy

### Prefer semantic locators

Use browser locators in this order when possible:

1. `getByRole(role, { name })`
2. `getByLabel(text)`
3. `getByText(text)` when visible text is the contract

Why:

- Radix is designed around accessible interaction contracts
- role/name locators survive styling refactors better than class selectors
- headless wrappers often change DOM shape while preserving semantics

### Avoid brittle assertions

Do not make tests depend on:

- utility class names
- exact nesting of wrappers
- portal implementation details beyond user-visible behavior
- generated ids unless that specific id contract is owned by your app

## 2. Common Radix state attributes worth styling against

Radix primitives commonly expose state through documented data attributes. Exact availability varies by primitive, but these are the ones most often useful in design-system work:

- `data-state` - open/closed, checked/unchecked, active/inactive depending on primitive
- `data-disabled` - disabled appearance and non-interactive styling
- `data-side` - positioned content side such as top/bottom/left/right
- `data-orientation` - horizontal vs vertical patterns such as Tabs or separators
- `data-highlighted` - menu-like highlighted item state

Use these as a styling contract where available. In tests, assert the user-visible consequence first and use state attributes as a secondary debugging clue rather than the only proof of correctness.

## 3. Primitive-family verification notes

### Dialog / Alert Dialog

Verify:

- trigger opens the dialog by click and expected keyboard activation
- focus moves into the dialog on open
- Escape closes when allowed by the component contract
- outside interaction behaves according to the primitive and app policy
- focus returns to the trigger or a deliberate next target after close
- title and description are present when the design-system API expects them
- overlay and content are visible above app chrome

Common failures:

- ref not forwarded to custom trigger
- close path bypasses expected focus restoration
- focus trap broken by custom wrapper or conditional rendering
- visual close works but semantic labeling regressed

### Dropdown Menu / Context Menu / Menubar-like overlays

Verify:

- trigger opens the menu
- arrow keys move highlight as expected
- Enter or Space activates the selected item when appropriate
- Escape closes and returns focus to the trigger
- disabled items are visually distinct and not accidentally activated
- submenu placement and collision behavior remain usable near viewport edges
- content is not clipped by ancestors or hidden behind layout layers

Common failures:

- trigger rendered via `asChild` without prop spread
- menu opens on pointer interaction but keyboard navigation is broken
- highlighted state styling depends on internal class names instead of stable state hooks
- portal z-index conflicts with sticky headers or drawers

### Popover / Tooltip / Hover Card

Verify:

- trigger and content association works after hydration
- content placement remains visible in constrained viewports
- collision handling does not push content off-screen or under app chrome
- dismissal and focus behavior match the intended primitive semantics

Common failures:

- assuming the same dismissal model across different overlay primitives
- testing only one viewport size
- hidden-but-mounted content mistaken for visible content in brittle selectors

### Tabs / Accordion / Disclosure-style patterns

Verify:

- orientation-specific keyboard behavior if applicable
- active trigger is visibly distinguishable
- panels update with the selected trigger
- controlled and uncontrolled modes do not drift
- stable keys preserve identity in dynamic lists

Common failures:

- remounting tab panels unexpectedly due to unstable keys
- custom trigger wrapper breaking role/name behavior
- styling active state from classes instead of state attributes

### Checkbox / Radio Group / Switch / Select-like inputs

Verify:

- label association still works after wrapping
- checked/unchecked or selected state is visible and programmatically correct
- disabled state is non-interactive
- keyboard interaction matches the expected control pattern

Common failures:

- replacing native semantics with generic elements without preserving behavior
- relying only on visual snapshots while losing actual name/state correctness

## 4. `asChild` inspection checklist

When a Radix part uses `asChild`, inspect the child component for all of the following:

- spreads incoming props onto the DOM element
- forwards `ref`
- preserves a semantic underlying element appropriate to the role
- does not suppress focus ring without replacement
- does not intercept or overwrite Radix event handlers unintentionally

Fast review questions:

- If the child were swapped back to a plain button or div, would the bug disappear?
- Can the component still be located by role and accessible name?
- Does keyboard behavior differ from click behavior?

## 5. SSR and hydration checks

For server-rendered apps, test built output or the closest production-like environment available.

Verify:

- labels, descriptions, and trigger/content relationships resolve after hydration
- first interaction after page load works without requiring a rerender
- portal content appears in the right layer after hydration
- focus movement and focus return work in production build, not just dev mode

Watch for:

- issues that occur only on first open after page load
- mismatches between dev and built behavior
- browser-only logic executed too early in custom wrappers

## 6. Fast debugging pattern

When a Radix component fails in-browser:

1. reduce selectors to role/name locators
2. test native keyboard paths before inspecting styles
3. inspect `asChild` usage, prop spread, and ref forwarding
4. confirm portal visibility and stacking context
5. compare dev behavior with built output if SSR is involved
6. only then inspect styling rules and token mappings

## 7. Minimal browser checks per merge

Before calling a Radix-based component merge-ready, verify at least:

- one open path
- one keyboard path
- one close or dismissal path
- focus placement on open
- focus return on close where relevant
- one semantic locator path by role/name
- one viewport or layering sanity check for portaled content

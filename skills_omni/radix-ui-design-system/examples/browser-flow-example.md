# Browser Flow Example: Radix Dropdown Menu

This example gives a concrete browser-validation flow for a Radix-based `DropdownMenu`. It is written as a Playwright-style checklist, but the same assertions can be applied manually if automation is not available.

## Scenario

Component under test:

- a button-like trigger labeled **Actions**
- a dropdown menu rendered through a portal
- menu items:
  - **Edit profile**
  - **Billing**
  - **Delete account**
- **Delete account** is disabled in this scenario

Expected component behavior:

- clicking or keyboard-activating the trigger opens the menu
- the menu is discoverable by role
- arrow keys move the active highlight through enabled items
- disabled item does not activate
- Escape closes the menu
- focus returns to the trigger after close

## Example assertions

### 1. Locate the trigger semantically

Use a role/name locator:

```ts
const trigger = page.getByRole('button', { name: 'Actions' });
await expect(trigger).toBeVisible();
```

Why this matters:

- it confirms the custom trigger still exposes button semantics
- it avoids coupling the test to classes or wrapper structure

### 2. Open the menu

```ts
await trigger.click();
const menu = page.getByRole('menu');
await expect(menu).toBeVisible();
```

Expected outcome:

- menu becomes visible
- content is not clipped or hidden behind layout chrome
- if the design system styles on Radix state hooks, the open state should also match the expected visual treatment

### 3. Verify menu items by role and name

```ts
await expect(page.getByRole('menuitem', { name: 'Edit profile' })).toBeVisible();
await expect(page.getByRole('menuitem', { name: 'Billing' })).toBeVisible();
await expect(page.getByRole('menuitem', { name: 'Delete account' })).toBeVisible();
```

Expected outcome:

- visible actions are exposed through menuitem semantics
- labels match the user-facing contract

### 4. Verify keyboard navigation

```ts
await page.keyboard.press('ArrowDown');
await expect(page.getByRole('menuitem', { name: 'Edit profile' })).toBeFocused();

await page.keyboard.press('ArrowDown');
await expect(page.getByRole('menuitem', { name: 'Billing' })).toBeFocused();
```

Expected outcome:

- focus/highlight follows the primitive's keyboard model
- navigation does not require pointer interaction first

Debug note:

If click opens the menu but arrow keys do nothing, inspect `asChild`, prop spreading, and ref forwarding on the trigger and item wrappers.

### 5. Verify disabled item behavior

Depending on implementation, disabled items may not receive activation and may or may not receive roving focus according to the primitive contract. The important checks are:

```ts
const disabledItem = page.getByRole('menuitem', { name: 'Delete account' });
await expect(disabledItem).toBeVisible();
```

Then verify behavior appropriate to your wrapper contract:

- it is visually disabled
- it does not trigger the destructive action
- keyboard and pointer interaction do not activate it

Avoid asserting only a CSS class. Confirm the user-facing outcome.

### 6. Close with Escape and verify focus return

```ts
await page.keyboard.press('Escape');
await expect(menu).toBeHidden();
await expect(trigger).toBeFocused();
```

Expected outcome:

- menu closes
- focus returns to the trigger
- no hidden overlay remains intercepting interaction

### 7. Re-open with keyboard activation

```ts
await trigger.focus();
await page.keyboard.press('Enter');
await expect(menu).toBeVisible();
```

Expected outcome:

- keyboard activation works, not just pointer activation
- this catches common regressions when custom triggers stop behaving like real buttons

## What to do if this flow fails

- If the trigger cannot be found by role/name, inspect semantics first.
- If the trigger is visible but does not open reliably, inspect `asChild`, prop spread, and ref forwarding.
- If the menu opens but is not visible on top of the page, inspect portal/layering and clipping.
- If Escape closes visually but focus does not return, inspect close handling and ref wiring.
- If behavior differs between local dev and production build, run the same flow against built output and review SSR/hydration behavior.

## Before/after framing for review notes

A useful merge note looks like this:

- **Before:** custom `ActionsTrigger` opened on click only; Enter key did nothing; menu content rendered behind sticky header in narrow viewport.
- **After:** trigger locates by button role/name, opens via click and Enter, menu remains visible in portal layer, Escape closes and returns focus to trigger.

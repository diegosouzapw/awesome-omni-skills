# Playwright Selector and Waiting Guide (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/playwright-skill/references/playwright-selector-and-waiting-guide.md)

---


## Preferred locator order

Use the most user-facing stable locator available:

1. `getByRole()`
2. `getByLabel()`
3. `getByPlaceholder()`
4. `getByText()`
5. stable test id
6. stable CSS selector as fallback
7. XPath only as a last resort

## Why

Playwright performs actionability checks and auto-waiting. Locator-based interactions are usually more resilient than raw selectors and manual sleeps.

## Preferred patterns

```javascript
await page.getByLabel('Email').fill(TEST_EMAIL)
await page.getByLabel('Password').fill(TEST_PASSWORD)
await page.getByRole('button', { name: /sign in/i }).click()
```

```javascript
await page.getByRole('heading', { name: /dashboard/i }).waitFor()
```

## Avoid as a default

```javascript
await page.waitForTimeout(1000)
```

Use fixed timeouts only for temporary debugging, not normal automation.

## Common recovery moves

- If the element exists but cannot be clicked, check overlays, disabled state, animation, or detachment.
- If the selector is flaky, narrow the locator to a section, dialog, or form.
- If the app is dynamic, assert on the user-visible result instead of internal implementation details.

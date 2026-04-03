# Testing Library Accessible Query Examples (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇪🇸 [es](../../../../es/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇫🇷 [fr](../../../../fr/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇩🇪 [de](../../../../de/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇮🇹 [it](../../../../it/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇷🇺 [ru](../../../../ru/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇯🇵 [ja](../../../../ja/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇰🇷 [ko](../../../../ko/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇸🇦 [ar](../../../../ar/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇮🇳 [hi](../../../../hi/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇮🇳 [in](../../../../in/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇹🇭 [th](../../../../th/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇻🇳 [vi](../../../../vi/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇮🇩 [id](../../../../id/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇲🇾 [ms](../../../../ms/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇳🇱 [nl](../../../../nl/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇵🇱 [pl](../../../../pl/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇸🇪 [sv](../../../../sv/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇳🇴 [no](../../../../no/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇩🇰 [da](../../../../da/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇫🇮 [fi](../../../../fi/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇵🇹 [pt](../../../../pt/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇷🇴 [ro](../../../../ro/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇭🇺 [hu](../../../../hu/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇧🇬 [bg](../../../../bg/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇸🇰 [sk](../../../../sk/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇮🇱 [he](../../../../he/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇵🇭 [phi](../../../../phi/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇨🇿 [cs](../../../../cs/skills_omni/accessibility/examples/testing-library-accessible-queries.md) · 🇹🇷 [tr](../../../../tr/skills_omni/accessibility/examples/testing-library-accessible-queries.md)

---


Prefer queries that match how users find elements.

## Prefer role + accessible name

```ts
screen.getByRole('button', { name: /save changes/i })
screen.getByRole('textbox', { name: /email address/i })
screen.getByRole('dialog', { name: /delete account/i })
```

## Prefer label text for form controls

```ts
screen.getByLabelText(/password/i)
```

## Avoid test IDs when an accessible query exists

```ts
// weaker
screen.getByTestId('submit-button')

// stronger
screen.getByRole('button', { name: /submit/i })
```

These patterns help catch missing labels, broken names, and incorrect roles earlier.

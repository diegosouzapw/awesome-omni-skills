# rendering-hydration-suppress-warning.md (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-hydration-suppress-warning.md)

---

---
title: Suppress Expected Hydration Mismatches
impact: LOW-MEDIUM
impactDescription: avoids noisy hydration warnings for known differences
tags: rendering, hydration, ssr, nextjs
---

## Suppress Expected Hydration Mismatches

In SSR frameworks (e.g., Next.js), some values are intentionally different on server vs client (random IDs, dates, locale/timezone formatting). For these *expected* mismatches, wrap the dynamic text in an element with `suppressHydrationWarning` to prevent noisy warnings. Do not use this to hide real bugs. Don’t overuse it.

**Incorrect (known mismatch warnings):**

```tsx
function Timestamp() {
  return <span>{new Date().toLocaleString()}</span>
}
```

**Correct (suppress expected mismatch only):**

```tsx
function Timestamp() {
  return (
    <span suppressHydrationWarning>
      {new Date().toLocaleString()}
    </span>
  )
}
```

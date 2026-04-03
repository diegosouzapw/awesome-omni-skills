# rendering-conditional-render.md (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-conditional-render.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-conditional-render.md)

---

---
title: Use Explicit Conditional Rendering
impact: LOW
impactDescription: prevents rendering 0 or NaN
tags: rendering, conditional, jsx, falsy-values
---

## Use Explicit Conditional Rendering

Use explicit ternary operators (`? :`) instead of `&&` for conditional rendering when the condition can be `0`, `NaN`, or other falsy values that render.

**Incorrect (renders "0" when count is 0):**

```tsx
function Badge({ count }: { count: number }) {
  return (
    <div>
      {count && <span className="badge">{count}</span>}
    </div>
  )
}

// When count = 0, renders: <div>0</div>
// When count = 5, renders: <div><span class="badge">5</span></div>
```

**Correct (renders nothing when count is 0):**

```tsx
function Badge({ count }: { count: number }) {
  return (
    <div>
      {count > 0 ? <span className="badge">{count}</span> : null}
    </div>
  )
}

// When count = 0, renders: <div></div>
// When count = 5, renders: <div><span class="badge">5</span></div>
```

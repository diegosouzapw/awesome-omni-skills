# rendering-hoist-jsx.md (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-hoist-jsx.md)

---

---
title: Hoist Static JSX Elements
impact: LOW
impactDescription: avoids re-creation
tags: rendering, jsx, static, optimization
---

## Hoist Static JSX Elements

Extract static JSX outside components to avoid re-creation.

**Incorrect (recreates element every render):**

```tsx
function LoadingSkeleton() {
  return <div className="animate-pulse h-20 bg-gray-200" />
}

function Container() {
  return (
    <div>
      {loading && <LoadingSkeleton />}
    </div>
  )
}
```

**Correct (reuses same element):**

```tsx
const loadingSkeleton = (
  <div className="animate-pulse h-20 bg-gray-200" />
)

function Container() {
  return (
    <div>
      {loading && loadingSkeleton}
    </div>
  )
}
```

This is especially helpful for large and static SVG nodes, which can be expensive to recreate on every render.

**Note:** If your project has [React Compiler](https://react.dev/learn/react-compiler) enabled, the compiler automatically hoists static JSX elements and optimizes component re-renders, making manual hoisting unnecessary.

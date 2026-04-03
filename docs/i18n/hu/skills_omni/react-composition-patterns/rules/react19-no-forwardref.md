# react19-no-forwardref.md (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/rules/react19-no-forwardref.md)

---

---
title: React 19 API Changes
impact: MEDIUM
impactDescription: cleaner component definitions and context usage
tags: react19, refs, context, hooks
---

## React 19 API Changes

> **⚠️ React 19+ only.** Skip this if you're on React 18 or earlier.

In React 19, `ref` is now a regular prop (no `forwardRef` wrapper needed), and `use()` replaces `useContext()`.

**Incorrect (forwardRef in React 19):**

```tsx
const ComposerInput = forwardRef<TextInput, Props>((props, ref) => {
  return <TextInput ref={ref} {...props} />
})
```

**Correct (ref as a regular prop):**

```tsx
function ComposerInput({ ref, ...props }: Props & { ref?: React.Ref<TextInput> }) {
  return <TextInput ref={ref} {...props} />
}
```

**Incorrect (useContext in React 19):**

```tsx
const value = useContext(MyContext)
```

**Correct (use instead of useContext):**

```tsx
const value = use(MyContext)
```

`use()` can also be called conditionally, unlike `useContext()`.

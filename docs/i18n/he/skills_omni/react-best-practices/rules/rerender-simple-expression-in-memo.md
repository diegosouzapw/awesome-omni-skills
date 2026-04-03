# rerender-simple-expression-in-memo.md (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-simple-expression-in-memo.md)

---

---
title: Do not wrap a simple expression with a primitive result type in useMemo
impact: LOW-MEDIUM
impactDescription: wasted computation on every render
tags: rerender, useMemo, optimization
---

## Do not wrap a simple expression with a primitive result type in useMemo

When an expression is simple (few logical or arithmetical operators) and has a primitive result type (boolean, number, string), do not wrap it in `useMemo`.
Calling `useMemo` and comparing hook dependencies may consume more resources than the expression itself.

**Incorrect:**

```tsx
function Header({ user, notifications }: Props) {
  const isLoading = useMemo(() => {
    return user.isLoading || notifications.isLoading
  }, [user.isLoading, notifications.isLoading])

  if (isLoading) return <Skeleton />
  // return some markup
}
```

**Correct:**

```tsx
function Header({ user, notifications }: Props) {
  const isLoading = user.isLoading || notifications.isLoading

  if (isLoading) return <Skeleton />
  // return some markup
}
```

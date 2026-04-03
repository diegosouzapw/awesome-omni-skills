# rerender-memo.md (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-memo.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-memo.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-memo.md)

---

---
title: Extract to Memoized Components
impact: MEDIUM
impactDescription: enables early returns
tags: rerender, memo, useMemo, optimization
---

## Extract to Memoized Components

Extract expensive work into memoized components to enable early returns before computation.

**Incorrect (computes avatar even when loading):**

```tsx
function Profile({ user, loading }: Props) {
  const avatar = useMemo(() => {
    const id = computeAvatarId(user)
    return <Avatar id={id} />
  }, [user])

  if (loading) return <Skeleton />
  return <div>{avatar}</div>
}
```

**Correct (skips computation when loading):**

```tsx
const UserAvatar = memo(function UserAvatar({ user }: { user: User }) {
  const id = useMemo(() => computeAvatarId(user), [user])
  return <Avatar id={id} />
})

function Profile({ user, loading }: Props) {
  if (loading) return <Skeleton />
  return (
    <div>
      <UserAvatar user={user} />
    </div>
  )
}
```

**Note:** If your project has [React Compiler](https://react.dev/learn/react-compiler) enabled, manual memoization with `memo()` and `useMemo()` is not necessary. The compiler automatically optimizes re-renders.

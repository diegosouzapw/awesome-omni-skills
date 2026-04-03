# rerender-derived-state-no-effect.md (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-derived-state-no-effect.md)

---

---
title: Calculate Derived State During Rendering
impact: MEDIUM
impactDescription: avoids redundant renders and state drift
tags: rerender, derived-state, useEffect, state
---

## Calculate Derived State During Rendering

If a value can be computed from current props/state, do not store it in state or update it in an effect. Derive it during render to avoid extra renders and state drift. Do not set state in effects solely in response to prop changes; prefer derived values or keyed resets instead.

**Incorrect (redundant state and effect):**

```tsx
function Form() {
  const [firstName, setFirstName] = useState('First')
  const [lastName, setLastName] = useState('Last')
  const [fullName, setFullName] = useState('')

  useEffect(() => {
    setFullName(firstName + ' ' + lastName)
  }, [firstName, lastName])

  return <p>{fullName}</p>
}
```

**Correct (derive during render):**

```tsx
function Form() {
  const [firstName, setFirstName] = useState('First')
  const [lastName, setLastName] = useState('Last')
  const fullName = firstName + ' ' + lastName

  return <p>{fullName}</p>
}
```

References: [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect)

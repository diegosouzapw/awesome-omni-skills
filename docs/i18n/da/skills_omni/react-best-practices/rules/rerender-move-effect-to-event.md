# rerender-move-effect-to-event.md (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-move-effect-to-event.md)

---

---
title: Put Interaction Logic in Event Handlers
impact: MEDIUM
impactDescription: avoids effect re-runs and duplicate side effects
tags: rerender, useEffect, events, side-effects, dependencies
---

## Put Interaction Logic in Event Handlers

If a side effect is triggered by a specific user action (submit, click, drag), run it in that event handler. Do not model the action as state + effect; it makes effects re-run on unrelated changes and can duplicate the action.

**Incorrect (event modeled as state + effect):**

```tsx
function Form() {
  const [submitted, setSubmitted] = useState(false)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    if (submitted) {
      post('/api/register')
      showToast('Registered', theme)
    }
  }, [submitted, theme])

  return <button onClick={() => setSubmitted(true)}>Submit</button>
}
```

**Correct (do it in the handler):**

```tsx
function Form() {
  const theme = useContext(ThemeContext)

  function handleSubmit() {
    post('/api/register')
    showToast('Registered', theme)
  }

  return <button onClick={handleSubmit}>Submit</button>
}
```

Reference: [Should this code move to an event handler?](https://react.dev/learn/removing-effect-dependencies#should-this-code-move-to-an-event-handler)

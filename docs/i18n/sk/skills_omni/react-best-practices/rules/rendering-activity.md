# rendering-activity.md (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-activity.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-activity.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-activity.md)

---

---
title: Use Activity Component for Show/Hide
impact: MEDIUM
impactDescription: preserves state/DOM
tags: rendering, activity, visibility, state-preservation
---

## Use Activity Component for Show/Hide

Use React's `<Activity>` to preserve state/DOM for expensive components that frequently toggle visibility.

**Usage:**

```tsx
import { Activity } from 'react'

function Dropdown({ isOpen }: Props) {
  return (
    <Activity mode={isOpen ? 'visible' : 'hidden'}>
      <ExpensiveMenu />
    </Activity>
  )
}
```

Avoids expensive re-renders and state loss.

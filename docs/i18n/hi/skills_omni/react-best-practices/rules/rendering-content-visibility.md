# rendering-content-visibility.md (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rendering-content-visibility.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rendering-content-visibility.md)

---

---
title: CSS content-visibility for Long Lists
impact: HIGH
impactDescription: faster initial render
tags: rendering, css, content-visibility, long-lists
---

## CSS content-visibility for Long Lists

Apply `content-visibility: auto` to defer off-screen rendering.

**CSS:**

```css
.message-item {
  content-visibility: auto;
  contain-intrinsic-size: 0 80px;
}
```

**Example:**

```tsx
function MessageList({ messages }: { messages: Message[] }) {
  return (
    <div className="overflow-y-auto h-screen">
      {messages.map(msg => (
        <div key={msg.id} className="message-item">
          <Avatar user={msg.author} />
          <div>{msg.content}</div>
        </div>
      ))}
    </div>
  )
}
```

For 1000 messages, browser skips layout/paint for ~990 off-screen items (10× faster initial render).

# patterns-explicit-variants.md (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/rules/patterns-explicit-variants.md)

---

---
title: Create Explicit Component Variants
impact: MEDIUM
impactDescription: self-documenting code, no hidden conditionals
tags: composition, variants, architecture
---

## Create Explicit Component Variants

Instead of one component with many boolean props, create explicit variant
components. Each variant composes the pieces it needs. The code documents
itself.

**Incorrect (one component, many modes):**

```tsx
// What does this component actually render?
<Composer
  isThread
  isEditing={false}
  channelId='abc'
  showAttachments
  showFormatting={false}
/>
```

**Correct (explicit variants):**

```tsx
// Immediately clear what this renders
<ThreadComposer channelId="abc" />

// Or
<EditMessageComposer messageId="xyz" />

// Or
<ForwardMessageComposer messageId="123" />
```

Each implementation is unique, explicit and self-contained. Yet they can each
use shared parts.

**Implementation:**

```tsx
function ThreadComposer({ channelId }: { channelId: string }) {
  return (
    <ThreadProvider channelId={channelId}>
      <Composer.Frame>
        <Composer.Input />
        <AlsoSendToChannelField channelId={channelId} />
        <Composer.Footer>
          <Composer.Formatting />
          <Composer.Emojis />
          <Composer.Submit />
        </Composer.Footer>
      </Composer.Frame>
    </ThreadProvider>
  )
}

function EditMessageComposer({ messageId }: { messageId: string }) {
  return (
    <EditMessageProvider messageId={messageId}>
      <Composer.Frame>
        <Composer.Input />
        <Composer.Footer>
          <Composer.Formatting />
          <Composer.Emojis />
          <Composer.CancelEdit />
          <Composer.SaveEdit />
        </Composer.Footer>
      </Composer.Frame>
    </EditMessageProvider>
  )
}

function ForwardMessageComposer({ messageId }: { messageId: string }) {
  return (
    <ForwardMessageProvider messageId={messageId}>
      <Composer.Frame>
        <Composer.Input placeholder="Add a message, if you'd like." />
        <Composer.Footer>
          <Composer.Formatting />
          <Composer.Emojis />
          <Composer.Mentions />
        </Composer.Footer>
      </Composer.Frame>
    </ForwardMessageProvider>
  )
}
```

Each variant is explicit about:

- What provider/state it uses
- What UI elements it includes
- What actions are available

No boolean prop combinations to reason about. No impossible states.

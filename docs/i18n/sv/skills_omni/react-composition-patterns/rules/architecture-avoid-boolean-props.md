# architecture-avoid-boolean-props.md (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/rules/architecture-avoid-boolean-props.md)

---

---
title: Avoid Boolean Prop Proliferation
impact: CRITICAL
impactDescription: prevents unmaintainable component variants
tags: composition, props, architecture
---

## Avoid Boolean Prop Proliferation

Don't add boolean props like `isThread`, `isEditing`, `isDMThread` to customize
component behavior. Each boolean doubles possible states and creates
unmaintainable conditional logic. Use composition instead.

**Incorrect (boolean props create exponential complexity):**

```tsx
function Composer({
  onSubmit,
  isThread,
  channelId,
  isDMThread,
  dmId,
  isEditing,
  isForwarding,
}: Props) {
  return (
    <form>
      <Header />
      <Input />
      {isDMThread ? (
        <AlsoSendToDMField id={dmId} />
      ) : isThread ? (
        <AlsoSendToChannelField id={channelId} />
      ) : null}
      {isEditing ? (
        <EditActions />
      ) : isForwarding ? (
        <ForwardActions />
      ) : (
        <DefaultActions />
      )}
      <Footer onSubmit={onSubmit} />
    </form>
  )
}
```

**Correct (composition eliminates conditionals):**

```tsx
// Channel composer
function ChannelComposer() {
  return (
    <Composer.Frame>
      <Composer.Header />
      <Composer.Input />
      <Composer.Footer>
        <Composer.Attachments />
        <Composer.Formatting />
        <Composer.Emojis />
        <Composer.Submit />
      </Composer.Footer>
    </Composer.Frame>
  )
}

// Thread composer - adds "also send to channel" field
function ThreadComposer({ channelId }: { channelId: string }) {
  return (
    <Composer.Frame>
      <Composer.Header />
      <Composer.Input />
      <AlsoSendToChannelField id={channelId} />
      <Composer.Footer>
        <Composer.Formatting />
        <Composer.Emojis />
        <Composer.Submit />
      </Composer.Footer>
    </Composer.Frame>
  )
}

// Edit composer - different footer actions
function EditComposer() {
  return (
    <Composer.Frame>
      <Composer.Input />
      <Composer.Footer>
        <Composer.Formatting />
        <Composer.Emojis />
        <Composer.CancelEdit />
        <Composer.SaveEdit />
      </Composer.Footer>
    </Composer.Frame>
  )
}
```

Each variant is explicit about what it renders. We can share internals without
sharing a single monolithic parent.

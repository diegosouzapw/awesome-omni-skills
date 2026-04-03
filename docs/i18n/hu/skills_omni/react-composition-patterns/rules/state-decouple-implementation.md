# state-decouple-implementation.md (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/rules/state-decouple-implementation.md)

---

---
title: Decouple State Management from UI
impact: MEDIUM
impactDescription: enables swapping state implementations without changing UI
tags: composition, state, architecture
---

## Decouple State Management from UI

The provider component should be the only place that knows how state is managed.
UI components consume the context interface—they don't know if state comes from
useState, Zustand, or a server sync.

**Incorrect (UI coupled to state implementation):**

```tsx
function ChannelComposer({ channelId }: { channelId: string }) {
  // UI component knows about global state implementation
  const state = useGlobalChannelState(channelId)
  const { submit, updateInput } = useChannelSync(channelId)

  return (
    <Composer.Frame>
      <Composer.Input
        value={state.input}
        onChange={(text) => sync.updateInput(text)}
      />
      <Composer.Submit onPress={() => sync.submit()} />
    </Composer.Frame>
  )
}
```

**Correct (state management isolated in provider):**

```tsx
// Provider handles all state management details
function ChannelProvider({
  channelId,
  children,
}: {
  channelId: string
  children: React.ReactNode
}) {
  const { state, update, submit } = useGlobalChannel(channelId)
  const inputRef = useRef(null)

  return (
    <Composer.Provider
      state={state}
      actions={{ update, submit }}
      meta={{ inputRef }}
    >
      {children}
    </Composer.Provider>
  )
}

// UI component only knows about the context interface
function ChannelComposer() {
  return (
    <Composer.Frame>
      <Composer.Header />
      <Composer.Input />
      <Composer.Footer>
        <Composer.Submit />
      </Composer.Footer>
    </Composer.Frame>
  )
}

// Usage
function Channel({ channelId }: { channelId: string }) {
  return (
    <ChannelProvider channelId={channelId}>
      <ChannelComposer />
    </ChannelProvider>
  )
}
```

**Different providers, same UI:**

```tsx
// Local state for ephemeral forms
function ForwardMessageProvider({ children }) {
  const [state, setState] = useState(initialState)
  const forwardMessage = useForwardMessage()

  return (
    <Composer.Provider
      state={state}
      actions={{ update: setState, submit: forwardMessage }}
    >
      {children}
    </Composer.Provider>
  )
}

// Global synced state for channels
function ChannelProvider({ channelId, children }) {
  const { state, update, submit } = useGlobalChannel(channelId)

  return (
    <Composer.Provider state={state} actions={{ update, submit }}>
      {children}
    </Composer.Provider>
  )
}
```

The same `Composer.Input` component works with both providers because it only
depends on the context interface, not the implementation.

# architecture-compound-components.md (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/rules/architecture-compound-components.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/rules/architecture-compound-components.md)

---

---
title: Use Compound Components
impact: HIGH
impactDescription: enables flexible composition without prop drilling
tags: composition, compound-components, architecture
---

## Use Compound Components

Structure complex components as compound components with a shared context. Each
subcomponent accesses shared state via context, not props. Consumers compose the
pieces they need.

**Incorrect (monolithic component with render props):**

```tsx
function Composer({
  renderHeader,
  renderFooter,
  renderActions,
  showAttachments,
  showFormatting,
  showEmojis,
}: Props) {
  return (
    <form>
      {renderHeader?.()}
      <Input />
      {showAttachments && <Attachments />}
      {renderFooter ? (
        renderFooter()
      ) : (
        <Footer>
          {showFormatting && <Formatting />}
          {showEmojis && <Emojis />}
          {renderActions?.()}
        </Footer>
      )}
    </form>
  )
}
```

**Correct (compound components with shared context):**

```tsx
const ComposerContext = createContext<ComposerContextValue | null>(null)

function ComposerProvider({ children, state, actions, meta }: ProviderProps) {
  return (
    <ComposerContext value={{ state, actions, meta }}>
      {children}
    </ComposerContext>
  )
}

function ComposerFrame({ children }: { children: React.ReactNode }) {
  return <form>{children}</form>
}

function ComposerInput() {
  const {
    state,
    actions: { update },
    meta: { inputRef },
  } = use(ComposerContext)
  return (
    <TextInput
      ref={inputRef}
      value={state.input}
      onChangeText={(text) => update((s) => ({ ...s, input: text }))}
    />
  )
}

function ComposerSubmit() {
  const {
    actions: { submit },
  } = use(ComposerContext)
  return <Button onPress={submit}>Send</Button>
}

// Export as compound component
const Composer = {
  Provider: ComposerProvider,
  Frame: ComposerFrame,
  Input: ComposerInput,
  Submit: ComposerSubmit,
  Header: ComposerHeader,
  Footer: ComposerFooter,
  Attachments: ComposerAttachments,
  Formatting: ComposerFormatting,
  Emojis: ComposerEmojis,
}
```

**Usage:**

```tsx
<Composer.Provider state={state} actions={actions} meta={meta}>
  <Composer.Frame>
    <Composer.Header />
    <Composer.Input />
    <Composer.Footer>
      <Composer.Formatting />
      <Composer.Submit />
    </Composer.Footer>
  </Composer.Frame>
</Composer.Provider>
```

Consumers explicitly compose exactly what they need. No hidden conditionals. And the state, actions and meta are dependency-injected by a parent provider, allowing multiple usages of the same component structure.

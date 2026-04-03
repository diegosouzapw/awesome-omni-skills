# state-lift-state.md (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/rules/state-lift-state.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/rules/state-lift-state.md)

---

---
title: Lift State into Provider Components
impact: HIGH
impactDescription: enables state sharing outside component boundaries
tags: composition, state, context, providers
---

## Lift State into Provider Components

Move state management into dedicated provider components. This allows sibling
components outside the main UI to access and modify state without prop drilling
or awkward refs.

**Incorrect (state trapped inside component):**

```tsx
function ForwardMessageComposer() {
  const [state, setState] = useState(initialState)
  const forwardMessage = useForwardMessage()

  return (
    <Composer.Frame>
      <Composer.Input />
      <Composer.Footer />
    </Composer.Frame>
  )
}

// Problem: How does this button access composer state?
function ForwardMessageDialog() {
  return (
    <Dialog>
      <ForwardMessageComposer />
      <MessagePreview /> {/* Needs composer state */}
      <DialogActions>
        <CancelButton />
        <ForwardButton /> {/* Needs to call submit */}
      </DialogActions>
    </Dialog>
  )
}
```

**Incorrect (useEffect to sync state up):**

```tsx
function ForwardMessageDialog() {
  const [input, setInput] = useState('')
  return (
    <Dialog>
      <ForwardMessageComposer onInputChange={setInput} />
      <MessagePreview input={input} />
    </Dialog>
  )
}

function ForwardMessageComposer({ onInputChange }) {
  const [state, setState] = useState(initialState)
  useEffect(() => {
    onInputChange(state.input) // Sync on every change 😬
  }, [state.input])
}
```

**Incorrect (reading state from ref on submit):**

```tsx
function ForwardMessageDialog() {
  const stateRef = useRef(null)
  return (
    <Dialog>
      <ForwardMessageComposer stateRef={stateRef} />
      <ForwardButton onPress={() => submit(stateRef.current)} />
    </Dialog>
  )
}
```

**Correct (state lifted to provider):**

```tsx
function ForwardMessageProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState(initialState)
  const forwardMessage = useForwardMessage()
  const inputRef = useRef(null)

  return (
    <Composer.Provider
      state={state}
      actions={{ update: setState, submit: forwardMessage }}
      meta={{ inputRef }}
    >
      {children}
    </Composer.Provider>
  )
}

function ForwardMessageDialog() {
  return (
    <ForwardMessageProvider>
      <Dialog>
        <ForwardMessageComposer />
        <MessagePreview /> {/* Custom components can access state and actions */}
        <DialogActions>
          <CancelButton />
          <ForwardButton /> {/* Custom components can access state and actions */}
        </DialogActions>
      </Dialog>
    </ForwardMessageProvider>
  )
}

function ForwardButton() {
  const { actions } = use(Composer.Context)
  return <Button onPress={actions.submit}>Forward</Button>
}
```

The ForwardButton lives outside the Composer.Frame but still has access to the
submit action because it's within the provider. Even though it's a one-off
component, it can still access the composer's state and actions from outside the
UI itself.

**Key insight:** Components that need shared state don't have to be visually
nested inside each other—they just need to be within the same provider.

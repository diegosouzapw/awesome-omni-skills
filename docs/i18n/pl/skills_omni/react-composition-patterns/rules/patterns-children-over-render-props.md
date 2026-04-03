# patterns-children-over-render-props.md (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/rules/patterns-children-over-render-props.md)

---

---
title: Prefer Composing Children Over Render Props
impact: MEDIUM
impactDescription: cleaner composition, better readability
tags: composition, children, render-props
---

## Prefer Children Over Render Props

Use `children` for composition instead of `renderX` props. Children are more
readable, compose naturally, and don't require understanding callback
signatures.

**Incorrect (render props):**

```tsx
function Composer({
  renderHeader,
  renderFooter,
  renderActions,
}: {
  renderHeader?: () => React.ReactNode
  renderFooter?: () => React.ReactNode
  renderActions?: () => React.ReactNode
}) {
  return (
    <form>
      {renderHeader?.()}
      <Input />
      {renderFooter ? renderFooter() : <DefaultFooter />}
      {renderActions?.()}
    </form>
  )
}

// Usage is awkward and inflexible
return (
  <Composer
    renderHeader={() => <CustomHeader />}
    renderFooter={() => (
      <>
        <Formatting />
        <Emojis />
      </>
    )}
    renderActions={() => <SubmitButton />}
  />
)
```

**Correct (compound components with children):**

```tsx
function ComposerFrame({ children }: { children: React.ReactNode }) {
  return <form>{children}</form>
}

function ComposerFooter({ children }: { children: React.ReactNode }) {
  return <footer className='flex'>{children}</footer>
}

// Usage is flexible
return (
  <Composer.Frame>
    <CustomHeader />
    <Composer.Input />
    <Composer.Footer>
      <Composer.Formatting />
      <Composer.Emojis />
      <SubmitButton />
    </Composer.Footer>
  </Composer.Frame>
)
```

**When render props are appropriate:**

```tsx
// Render props work well when you need to pass data back
<List
  data={items}
  renderItem={({ item, index }) => <Item item={item} index={index} />}
/>
```

Use render props when the parent needs to provide data or state to the child.
Use children when composing static structure.

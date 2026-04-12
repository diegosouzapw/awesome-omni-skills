# Render Prop vs Compound Component vs Custom Hook

## Use a render prop when

- the parent owns behavior or data
- the consumer needs strong control over the rendered output
- the structure is not predictable enough for fixed subcomponents

Example shape:

```tsx
<Select>{({ selected, getOptionProps }) => ... }</Select>
```

## Use compound components when

- the structure is mostly predictable
- named parts improve readability
- subcomponents need shared state through context

Example shape:

```tsx
<Tabs.Root defaultValue="overview">
  <Tabs.List>
    <Tabs.Trigger value="overview">Overview</Tabs.Trigger>
    <Tabs.Trigger value="billing">Billing</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Panel value="overview">...</Tabs.Panel>
  <Tabs.Panel value="billing">...</Tabs.Panel>
</Tabs.Root>
```

## Use a custom hook when

- behavior should be reusable without imposing markup
- consumers need maximum structural freedom
- shared state across a subtree is not the main concern

Example shape:

```tsx
const tabs = useTabs({ defaultValue: 'overview' });
```

## Heuristic

- If consumers need behavior only, start with a hook.
- If consumers need a readable, shared-state component API, use compound components.
- If consumers need caller-controlled rendering from parent-owned behavior, use a render prop.

# React 19 Composition Migration Notes

This note captures the React 19 changes most relevant to composition patterns.

## Correct guidance

### 1. `useContext()` still exists

React 19 does **not** require replacing `useContext()` with `use()` for normal context reads.

Use `useContext(SomeContext)` for standard context consumption unless you have a specific `use()`-based reason supported by the React API.

### 2. `forwardRef` is deprecated in React 19

For React 19 targets, refs can be passed as props. Avoid introducing new `forwardRef` wrappers by default when the target compatibility surface does not require them.

### 3. Context provider syntax changed

React 19 supports rendering the context object itself as a provider:

```tsx
<ThemeContext value={theme}>
  <Page />
</ThemeContext>
```

Older code may still use:

```tsx
<ThemeContext.Provider value={theme}>
  <Page />
</ThemeContext.Provider>
```

When reviewing a codebase, normalize on the syntax appropriate for the actual React target and compatibility requirements.

## Migration review checklist

- Confirm the actual React version target before changing ref patterns.
- Remove guidance that claims `use()` should replace `useContext()` everywhere.
- Avoid adding new `forwardRef` wrappers automatically in React 19-only surfaces.
- Review public library compatibility before removing legacy patterns.
- Keep examples internally consistent across the codebase.

## Practical cautions

- A library supporting both React 18 and 19 may need compatibility-aware guidance.
- Ref migration is not just syntax; confirm who consumes the ref and whether the target element remains stable.
- Provider syntax changes should not distract from bigger API issues such as over-broad context or hidden state ownership.

# React 18 vs React 19 Compatibility Notes (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/references/react-18-vs-19-compatibility.md)

---


Use this note when examples, migrations, or reviews involve both React 18 and React 19 code.

## Context providers

### React 18

```jsx
<ThemeContext.Provider value={theme}>
  <Page />
</ThemeContext.Provider>
```

### React 19

```jsx
<ThemeContext value={theme}>
  <Page />
</ThemeContext>
```

## Reading context

For client components, `useContext()` remains the normal API for reading context values.

```jsx
const theme = useContext(ThemeContext);
```

Do not replace this guidance with a blanket rule to use `use()` instead. `use()` has specific supported use cases and is not a general composition-pattern substitute for `useContext()`.

## Refs

### React 18 common pattern

```jsx
const Input = forwardRef(function Input(props, ref) {
  return <input {...props} ref={ref} />;
});
```

### React 19 direction

In React 19, refs can be passed as props in many cases, which reduces the need for `forwardRef` in future-facing codebases.

```jsx
function Input({ ref, ...props }) {
  return <input {...props} ref={ref} />;
}
```

## Practical migration guidance

- Do not partially modernize examples if the project is still on React 18.
- Match the syntax already supported by the installed React version and tooling.
- If the codebase is mixed or in migration, annotate examples clearly.
- If using imperative handles, keep the public API small regardless of version.

## Safe review language

Use language like:

- "In React 19, this can be simplified to..."
- "If this repo is still on React 18, keep the current provider syntax..."
- "`useContext()` remains the standard client-side context reader here..."

Avoid language like:

- "Replace `useContext()` with `use()` everywhere."
- "`forwardRef` is already invalid."
- "All providers should use the React 19 shorthand now."

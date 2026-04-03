# Example: Controlled vs Uncontrolled Compound API (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/examples/controlled-vs-uncontrolled-compound-api.md)

---


Use this pattern when a reusable component must work in both app-managed and self-managed modes.

```tsx
type AccordionProps = {
  value?: string | null;
  defaultValue?: string | null;
  onValueChange?: (value: string | null) => void;
  children: React.ReactNode;
};

export function Accordion({
  value,
  defaultValue = null,
  onValueChange,
  children,
}: AccordionProps) {
  const [internalValue, setInternalValue] = React.useState<string | null>(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  function setValue(nextValue: string | null) {
    if (!isControlled) {
      setInternalValue(nextValue);
    }
    onValueChange?.(nextValue);
  }

  return (
    <AccordionContext.Provider value={{ value: currentValue, setValue }}>
      {children}
    </AccordionContext.Provider>
  );
}
```

## Contract

- If `value` is provided, the parent owns state.
- If only `defaultValue` is provided, the component owns initial state.
- `onValueChange` reports transitions in both modes.
- Internal state should not compete with controlled props.

## Review question

If a parent changes `value`, does the visible UI follow that prop immediately? If not, the component is mixing ownership models incorrectly.

# Example: Compound Components with Context (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/examples/compound-components-with-context.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/examples/compound-components-with-context.md)

---


Use this pattern when descendants need shared state and coordinated behavior.

```tsx
import React, { createContext, useContext, useMemo, useState } from 'react';

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error('Tabs subcomponents must be used within <Tabs>.');
  }
  return context;
}

type TabsProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
};

export function Tabs({ value, defaultValue = 'overview', onValueChange, children }: TabsProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : internalValue;

  const setValue = (nextValue: string) => {
    if (!isControlled) setInternalValue(nextValue);
    onValueChange?.(nextValue);
  };

  const contextValue = useMemo(
    () => ({ value: currentValue, setValue }),
    [currentValue]
  );

  return <TabsContext.Provider value={contextValue}>{children}</TabsContext.Provider>;
}

Tabs.List = function TabsList({ children }: { children: React.ReactNode }) {
  return <div role="tablist">{children}</div>;
};

Tabs.Trigger = function TabsTrigger({ value, children }: { value: string; children: React.ReactNode }) {
  const { value: currentValue, setValue } = useTabsContext();
  const selected = currentValue === value;

  return (
    <button role="tab" aria-selected={selected} onClick={() => setValue(value)}>
      {children}
    </button>
  );
};

Tabs.Panel = function TabsPanel({ value, children }: { value: string; children: React.ReactNode }) {
  const { value: currentValue } = useTabsContext();
  if (currentValue !== value) return null;
  return <div role="tabpanel">{children}</div>;
};
```

## Why this is safer than child rewriting

- Shared state is explicit.
- Subcomponents can validate provider usage.
- Wrappers and fragments are less likely to break the API.
- Controlled and uncontrolled behavior can be documented clearly.

import { createContext, useContext, useId, useMemo, useState, type ReactNode } from 'react';

type TabsContextValue = {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  baseId: string;
};

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext() {
  const value = useContext(TabsContext);
  if (!value) {
    throw new Error('Tabs components must be used within <Tabs.Root>.');
  }
  return value;
}

function TabsRoot({
  defaultValue,
  children,
}: {
  defaultValue: string;
  children: ReactNode;
}) {
  const [selectedValue, setSelectedValue] = useState(defaultValue);
  const baseId = useId();
  const contextValue = useMemo(
    () => ({ selectedValue, setSelectedValue, baseId }),
    [selectedValue, baseId]
  );

  return <TabsContext value={contextValue}>{children}</TabsContext>;
}

function TabsList({ children }: { children: ReactNode }) {
  return <div role="tablist" aria-orientation="horizontal">{children}</div>;
}

function TabsTrigger({ value, children }: { value: string; children: ReactNode }) {
  const { selectedValue, setSelectedValue, baseId } = useTabsContext();
  const selected = selectedValue === value;
  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  return (
    <button
      id={tabId}
      role="tab"
      type="button"
      aria-selected={selected}
      aria-controls={panelId}
      tabIndex={selected ? 0 : -1}
      onClick={() => setSelectedValue(value)}
    >
      {children}
    </button>
  );
}

function TabsPanel({ value, children }: { value: string; children: ReactNode }) {
  const { selectedValue, baseId } = useTabsContext();
  const selected = selectedValue === value;
  const tabId = `${baseId}-tab-${value}`;
  const panelId = `${baseId}-panel-${value}`;

  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!selected}
    >
      {selected ? children : null}
    </div>
  );
}

export const Tabs = {
  Root: TabsRoot,
  List: TabsList,
  Trigger: TabsTrigger,
  Panel: TabsPanel,
};

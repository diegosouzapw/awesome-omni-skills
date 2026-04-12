import { createContext, useContext, useId, useMemo, useState, type ReactNode } from 'react';

type DisclosureContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  contentId: string;
};

const DisclosureContext = createContext<DisclosureContextValue | null>(null);

function useDisclosureContext() {
  const value = useContext(DisclosureContext);
  if (!value) {
    throw new Error('Disclosure components must be used within <Disclosure.Root>.');
  }
  return value;
}

function DisclosureRoot({ children, defaultOpen = false }: { children: ReactNode; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  const contentId = useId();
  const contextValue = useMemo(() => ({ open, setOpen, contentId }), [open, contentId]);

  return <DisclosureContext value={contextValue}>{children}</DisclosureContext>;
}

function DisclosureTrigger({ children }: { children: ReactNode }) {
  const { open, setOpen, contentId } = useDisclosureContext();

  return (
    <button
      type="button"
      aria-expanded={open}
      aria-controls={contentId}
      onClick={() => setOpen(!open)}
    >
      {children}
    </button>
  );
}

function DisclosureContent({ children }: { children: ReactNode }) {
  const { open, contentId } = useDisclosureContext();

  return open ? <div id={contentId}>{children}</div> : null;
}

export const Disclosure = {
  Root: DisclosureRoot,
  Trigger: DisclosureTrigger,
  Content: DisclosureContent,
};

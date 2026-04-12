# Before and After: Boolean Props Refactor

## Before

```tsx
type CardProps = {
  isCompact?: boolean;
  isInteractive?: boolean;
  showHeader?: boolean;
  showFooter?: boolean;
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function Card({
  isCompact,
  isInteractive,
  showHeader,
  showFooter,
  title,
  footer,
  children,
}: CardProps) {
  const className = [
    "card",
    isCompact && "card--compact",
    isInteractive && "card--interactive",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={className}>
      {showHeader ? <header>{title}</header> : null}
      <div>{children}</div>
      {showFooter ? <footer>{footer}</footer> : null}
    </section>
  );
}
```

### Problems

- Too many booleans create invalid combinations.
- Layout structure is controlled indirectly.
- Call sites are hard to read.

## After

```tsx
type CardRootProps = {
  interactive?: boolean;
  children: React.ReactNode;
};

function CardRoot({ interactive = false, children }: CardRootProps) {
  return (
    <section className={interactive ? "card card--interactive" : "card"}>
      {children}
    </section>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <header>{children}</header>;
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

function CardFooter({ children }: { children: React.ReactNode }) {
  return <footer>{children}</footer>;
}

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
};
```

### Usage

```tsx
<Card.Root interactive>
  <Card.Header>Invoice</Card.Header>
  <Card.Body>Balance due</Card.Body>
  <Card.Footer>Updated 2 hours ago</Card.Footer>
</Card.Root>
```

### Why this is better

- Structure is explicit.
- The call site is easier to scan.
- Optional regions are represented by presence or absence of subcomponents, not mode flags.

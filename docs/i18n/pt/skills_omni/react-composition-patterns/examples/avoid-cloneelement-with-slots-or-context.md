# Example: Avoid `cloneElement` with Slots or Context (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/examples/avoid-cloneelement-with-slots-or-context.md)

---


## Fragile approach

```tsx
import { Children, cloneElement, isValidElement } from 'react';

export function Card({ children }: { children: React.ReactNode }) {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    return cloneElement(child, { compact: true });
  });
}
```

## Why this is fragile

- It assumes direct children can be rewritten safely.
- Wrappers or fragments can change behavior unexpectedly.
- Consumers do not see the real contract from the call site.

## Safer slot-style approach

```tsx
type CardProps = {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
};

export function Card({ header, footer, children }: CardProps) {
  return (
    <section>
      {header ? <div>{header}</div> : null}
      <div>{children}</div>
      {footer ? <div>{footer}</div> : null}
    </section>
  );
}
```

## Safer compound approach

```tsx
export function Card({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}

Card.Header = function CardHeader({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};

Card.Body = function CardBody({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};

Card.Footer = function CardFooter({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
};
```

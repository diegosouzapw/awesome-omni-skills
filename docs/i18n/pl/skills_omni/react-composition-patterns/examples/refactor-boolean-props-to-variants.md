# Example: Refactor Boolean Props to Explicit Variants (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇪🇸 [es](../../../../es/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇩🇪 [de](../../../../de/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇮🇹 [it](../../../../it/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇮🇳 [in](../../../../in/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇹🇭 [th](../../../../th/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇮🇩 [id](../../../../id/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇳🇴 [no](../../../../no/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇩🇰 [da](../../../../da/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇮🇱 [he](../../../../he/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-composition-patterns/examples/refactor-boolean-props-to-variants.md)

---


## Before

```tsx
type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
  danger?: boolean;
  ghost?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

export function Button({
  primary,
  secondary,
  danger,
  ghost,
  loading,
  children,
}: ButtonProps) {
  const className = [
    primary && 'btn-primary',
    secondary && 'btn-secondary',
    danger && 'btn-danger',
    ghost && 'btn-ghost',
  ]
    .filter(Boolean)
    .join(' ');

  return <button className={className} disabled={loading}>{children}</button>;
}
```

## Problems

- Invalid combinations are easy to express.
- The caller has to guess precedence.
- Each new style adds another branch and more API ambiguity.

## After

```tsx
type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost';

type ButtonProps = {
  variant?: ButtonVariant;
  loading?: boolean;
  children: React.ReactNode;
};

export function Button({
  variant = 'primary',
  loading = false,
  children,
}: ButtonProps) {
  return (
    <button className={`btn-${variant}`} disabled={loading}>
      {children}
    </button>
  );
}
```

## When to go further

If each variant starts needing different structure or behavior, split into explicit components or compound subcomponents instead of overloading one component forever.

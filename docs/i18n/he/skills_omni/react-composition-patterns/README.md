# React Composition Patterns (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../skills_omni/react-composition-patterns/README.md) · 🇪🇸 [es](../../../es/skills_omni/react-composition-patterns/README.md) · 🇫🇷 [fr](../../../fr/skills_omni/react-composition-patterns/README.md) · 🇩🇪 [de](../../../de/skills_omni/react-composition-patterns/README.md) · 🇮🇹 [it](../../../it/skills_omni/react-composition-patterns/README.md) · 🇷🇺 [ru](../../../ru/skills_omni/react-composition-patterns/README.md) · 🇨🇳 [zh-CN](../../../zh-CN/skills_omni/react-composition-patterns/README.md) · 🇯🇵 [ja](../../../ja/skills_omni/react-composition-patterns/README.md) · 🇰🇷 [ko](../../../ko/skills_omni/react-composition-patterns/README.md) · 🇸🇦 [ar](../../../ar/skills_omni/react-composition-patterns/README.md) · 🇮🇳 [hi](../../../hi/skills_omni/react-composition-patterns/README.md) · 🇮🇳 [in](../../../in/skills_omni/react-composition-patterns/README.md) · 🇹🇭 [th](../../../th/skills_omni/react-composition-patterns/README.md) · 🇻🇳 [vi](../../../vi/skills_omni/react-composition-patterns/README.md) · 🇮🇩 [id](../../../id/skills_omni/react-composition-patterns/README.md) · 🇲🇾 [ms](../../../ms/skills_omni/react-composition-patterns/README.md) · 🇳🇱 [nl](../../../nl/skills_omni/react-composition-patterns/README.md) · 🇵🇱 [pl](../../../pl/skills_omni/react-composition-patterns/README.md) · 🇸🇪 [sv](../../../sv/skills_omni/react-composition-patterns/README.md) · 🇳🇴 [no](../../../no/skills_omni/react-composition-patterns/README.md) · 🇩🇰 [da](../../../da/skills_omni/react-composition-patterns/README.md) · 🇫🇮 [fi](../../../fi/skills_omni/react-composition-patterns/README.md) · 🇵🇹 [pt](../../../pt/skills_omni/react-composition-patterns/README.md) · 🇷🇴 [ro](../../../ro/skills_omni/react-composition-patterns/README.md) · 🇭🇺 [hu](../../../hu/skills_omni/react-composition-patterns/README.md) · 🇧🇬 [bg](../../../bg/skills_omni/react-composition-patterns/README.md) · 🇸🇰 [sk](../../../sk/skills_omni/react-composition-patterns/README.md) · 🇺🇦 [uk-UA](../../../uk-UA/skills_omni/react-composition-patterns/README.md) · 🇮🇱 [he](../../../he/skills_omni/react-composition-patterns/README.md) · 🇵🇭 [phi](../../../phi/skills_omni/react-composition-patterns/README.md) · 🇧🇷 [pt-BR](../../../pt-BR/skills_omni/react-composition-patterns/README.md) · 🇨🇿 [cs](../../../cs/skills_omni/react-composition-patterns/README.md) · 🇹🇷 [tr](../../../tr/skills_omni/react-composition-patterns/README.md)

---


A structured repository for React composition patterns that scale. These
patterns help avoid boolean prop proliferation by using compound components,
lifting state, and composing internals.

## Structure

- `rules/` - Individual rule files (one per rule)
  - `_sections.md` - Section metadata (titles, impacts, descriptions)
  - `_template.md` - Template for creating new rules
  - `area-description.md` - Individual rule files
- `metadata.json` - Document metadata (version, organization, abstract)
- **`AGENTS.md`** - Compiled output (generated)

## Rules

### Component Architecture (CRITICAL)

- `architecture-avoid-boolean-props.md` - Don't add boolean props to customize
  behavior
- `architecture-compound-components.md` - Structure as compound components with
  shared context

### State Management (HIGH)

- `state-lift-state.md` - Lift state into provider components
- `state-context-interface.md` - Define clear context interfaces
  (state/actions/meta)
- `state-decouple-implementation.md` - Decouple state management from UI

### Implementation Patterns (MEDIUM)

- `patterns-children-over-render-props.md` - Prefer children over renderX props
- `patterns-explicit-variants.md` - Create explicit component variants

## Core Principles

1. **Composition over configuration** — Instead of adding props, let consumers
   compose
2. **Lift your state** — State in providers, not trapped in components
3. **Compose your internals** — Subcomponents access context, not props
4. **Explicit variants** — Create ThreadComposer, EditComposer, not Composer
   with isThread

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/area-description.md`
2. Choose the appropriate area prefix:
   - `architecture-` for Component Architecture
   - `state-` for State Management
   - `patterns-` for Implementation Patterns
3. Fill in the frontmatter and content
4. Ensure you have clear examples with explanations

## Impact Levels

- `CRITICAL` - Foundational patterns, prevents unmaintainable code
- `HIGH` - Significant maintainability improvements
- `MEDIUM` - Good practices for cleaner code

---
name: "react-composition-patterns"
description: "React Composition Patterns workflow skill. Use this skill when refactoring boolean-prop-heavy components, designing scalable component APIs, building compound components, or choosing between children, lifted state, context, render props, and custom hooks. Includes React 19 guidance for provider syntax and ref handling. Do not use this skill for generic React performance tuning or framework-specific optimization work."
version: "0.0.1"
category: "development"
tags:
  - "react-composition-patterns"
  - "react"
  - "composition"
  - "compound-components"
  - "context"
  - "render-props"
  - "component-api"
  - "refactoring"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "react-composition-patterns"
family_name: "React Composition Patterns"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/react-composition-patterns"
upstream_skill: "skills/react-composition-patterns"
upstream_author: "vercel"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "react-composition-patterns"
---

# React Composition Patterns

## Overview

Use this skill when a React task is primarily about **component API design and composition architecture**, not raw implementation speed or performance tuning.

This skill helps an agent:

- refactor components that have accumulated too many boolean or mode props
- choose between `children`, lifted state, context, compound components, render props, and custom hooks
- design reusable component-library APIs that scale across multiple use cases
- apply React 19 guidance correctly, especially around **context provider syntax** and **ref handling**
- avoid fragile patterns such as overusing `Children` or `cloneElement`

The upstream intent is preserved: composition should replace prop proliferation and tightly coupled internals where that improves scalability and maintainability. This enhanced version turns that intent into an execution-oriented workflow with decision support, examples, migration notes, and troubleshooting.

## When to Use This Skill

Use this skill when the request involves one or more of the following:

- A component has several booleans like `isCompact`, `isBordered`, `showIcon`, `inline`, `interactive`, and the API is becoming confusing.
- A UI primitive needs coordinated subcomponents such as `Tabs.List`, `Tabs.Trigger`, and `Tabs.Panel`.
- Sibling or descendant components need shared state and actions, and you must decide whether to lift state or introduce context.
- A design-system or headless component API needs to be flexible without exposing implementation details.
- The user asks whether to use compound components, render props, `children`, context providers, or custom hooks.
- A React 18-to-19 review needs corrected guidance for refs and context provider syntax.

Do **not** use this skill as the primary router when the task is mainly:

- React or Next.js performance optimization
- caching, rendering strategy, or bundle-size work
- framework-specific routing or data-fetching design
- animation tuning
- a one-off local component that does not justify a reusable abstraction

## Operating Table

| Situation | Start here | Why |
| --- | --- | --- |
| Too many boolean props or divergent branches | `references/pattern-selection-matrix.md` and `examples/before-after-boolean-props-refactor.md` | Helps decide whether to split variants, use composition, or lift state instead of extending a bloated API |
| Designing a reusable component primitive | `references/api-design-review-checklist.md` | Forces API-shape review before coding |
| Shared state across subcomponents | `references/pattern-selection-matrix.md` | Clarifies when to keep state local, lift it, or add context/reducer |
| Building tabs or disclosure-like primitives | `references/accessibility-primitives-checklist.md` and the examples | Keeps composition work aligned with accessibility semantics and keyboard behavior |
| React 19 migration or compatibility review | `references/react19-composition-migration.md` and `examples/react19-ref-prop-migration.tsx` | Corrects ref and provider guidance and avoids false migration advice |
| Debugging remounts, null context, or fragile child manipulation | `references/troubleshooting-playbook.md` | Provides symptom-based diagnosis and recovery steps |
| Choosing render prop vs compound component vs hook | `examples/render-prop-vs-compound-vs-hook.md` | Compares the patterns by ownership and flexibility |
| Routing to a related React skill | `agents/router-related-react-skills.md` | Helps hand off when the task is really accessibility, testing, or performance work |

## Workflow

1. **Identify the API smell.**
   Look for boolean-prop proliferation, duplicated branches, hidden state coupling, deep prop threading, or a need for coordinated subcomponents.

2. **Classify the relationship between the parts.**
   Decide whether the problem is:
   - simple containment via `children`
   - sibling coordination via lifted state
   - subtree-wide shared state via context
   - a headless reusable primitive with named subcomponents
   - inversion of rendering control that may justify a render prop

3. **Choose the simplest pattern that fits.**
   Use this escalation ladder by default:
   - plain props
   - `children` / composition
   - lifted state
   - custom hook
   - context provider
   - compound components
   - render prop only when caller-controlled rendering is the point

4. **Define state ownership before implementation.**
   Write down:
   - what state stays local
   - what state must be shared
   - which actions descendants may invoke
   - whether consumers need derived metadata such as `selectedIndex`, `open`, `disabled`, or `orientation`

5. **Design explicit APIs.**
   Prefer explicit variants and named subcomponents over mode booleans. Examples:
   - prefer `<DialogHeader />` and `<DialogBody />` to `showHeader`
   - prefer `<ButtonLink />` or separate components to `isLink`
   - prefer `<Tabs.List>` and `<Tabs.Panel>` over child rewriting

6. **Avoid fragile implementation mechanisms unless required.**
   Do not start with `Children.map`, child type inspection, or `cloneElement`. Use them only when interoperability constraints leave no cleaner option, and document the assumptions if you must use them.

7. **Check accessibility and ref requirements.**
   If the component is interactive, verify roles, keyboard behavior, focus management, and whether refs need to reach DOM nodes or imperative handles.

8. **Apply React 19 guidance correctly.**
   - `useContext()` remains valid.
   - `use()` does not replace ordinary context consumption patterns.
   - New code should avoid introducing `forwardRef` wrappers unnecessarily in React 19 when refs can be passed as props.
   - Context providers may use the React 19 provider form shown in the migration reference.

9. **Validate the composition ergonomics.**
   Confirm that the result:
   - reduces prop count or branching
   - reads clearly at the call site
   - preserves state where expected
   - remains testable
   - does not hide important constraints behind magic behavior

10. **Document migration impact.**
    If refactoring existing components, note breaking changes such as renamed props, extracted subcomponents, altered tree position, or intentional state reset points.

## Examples

### Example 1: Refactor a boolean-heavy API into explicit composition

```text
Use @react-composition-patterns to refactor a Card component that currently has isCompact, isInteractive, showHeader, and showFooter props. Propose a simpler API using composition or explicit variants, explain the tradeoffs, and preserve accessibility.
```

Start with:
- `references/pattern-selection-matrix.md`
- `references/api-design-review-checklist.md`
- `examples/before-after-boolean-props-refactor.md`

### Example 2: Build an accessible Tabs compound component

```text
Use @react-composition-patterns to design a headless Tabs API with Tabs.Root, Tabs.List, Tabs.Trigger, and Tabs.Panel. Use shared context, avoid cloneElement unless necessary, and verify tab roles and keyboard expectations.
```

Start with:
- `examples/compound-tabs-accessible.tsx`
- `references/accessibility-primitives-checklist.md`
- `references/troubleshooting-playbook.md`

### Example 3: Decide between render prop, compound component, or custom hook

```text
Use @react-composition-patterns to compare three API options for a selectable list primitive: render prop, compound components, and a custom hook. Recommend the simplest pattern that gives consumers enough rendering control.
```

Start with:
- `examples/render-prop-vs-compound-vs-hook.md`
- `references/pattern-selection-matrix.md`

### Example 4: Review React 19 ref migration guidance

```text
Use @react-composition-patterns to review this component library for React 19 compatibility. Identify places where forwardRef is still being added by default, confirm whether refs can be passed as props instead, and correct any misuse of use() versus useContext().
```

Start with:
- `references/react19-composition-migration.md`
- `examples/react19-ref-prop-migration.tsx`

## Best Practices

### Do

- Prefer composition over inheritance for specialization and containment.
- Prefer `children` or explicit slots before introducing context.
- Lift state up before creating a provider when only a few siblings need coordination.
- Use context when multiple descendants need shared state or actions.
- Export explicit subcomponents for compound APIs instead of mutating arbitrary children.
- Keep provider contracts narrow: state, actions, and minimal derived metadata.
- Use native interactive elements like `<button>` when building triggers.
- Treat accessibility as part of the component contract, not a later patch.
- Preserve tree position when state should survive refactors.
- Add intentional keys only when reset behavior is desired.

### Don't

- Don’t keep adding boolean props to represent divergent behaviors.
- Don’t introduce context just to avoid passing one or two props.
- Don’t assume `use()` replaces `useContext()` in React 19.
- Don’t default to `cloneElement` or `Children` for new reusable APIs.
- Don’t hide state ownership behind opaque provider internals.
- Don’t use non-semantic clickable elements when a native button is appropriate.
- Don’t accidentally remount subtrees while refactoring structure.
- Don’t add new `forwardRef` wrappers by habit without checking whether the React 19 target surface still needs them.

### Pattern priorities

1. **Component architecture**: remove boolean-prop proliferation and split divergent concerns.
2. **State management**: keep ownership explicit and escalate to context only when justified.
3. **Implementation patterns**: prefer explicit composition over child mutation.
4. **React 19 compatibility**: update provider and ref guidance accurately.

## Troubleshooting

### Problem: State resets after a composition refactor

**Symptoms:** Inputs clear unexpectedly, tabs lose selection, or local child state disappears when wrappers or branches change.

**Solution:** Check whether the component moved to a different position in the tree, gained a different key, or is being recreated through conditional branches or nested component definitions. Preserve tree position when state should survive. Use keys only when reset is intentional.

### Problem: Context consumers receive `null` or default values unexpectedly

**Symptoms:** Compound subcomponents throw because the provider is missing, or they always read fallback values.

**Solution:** Verify that all subcomponents render under the matching provider/root component. Add a custom hook that throws a clear error when used outside the provider. Check for duplicate context objects or imports from the wrong module.

### Problem: The component API still feels bloated after refactoring

**Symptoms:** The new version still exposes many mode props, call sites are hard to read, or branches remain deeply coupled.

**Solution:** Re-run the API review checklist. Split divergent behaviors into explicit variants or subcomponents. If consumers only need containment, use `children` instead of more configuration props.

### Problem: Child manipulation causes broken props, refs, or ordering assumptions

**Symptoms:** Cloned children lose refs, event handlers become hard to reason about, or the component only works with a very specific child order.

**Solution:** Replace `cloneElement` or `Children`-based orchestration with shared context, explicit subcomponent exports, or a render prop/custom hook. If child manipulation is unavoidable, document the assumptions and keep the surface narrow.

### Problem: Accessibility regressed after introducing compound components

**Symptoms:** Keyboard navigation fails, focus gets lost, roles are missing, or screen reader behavior is inconsistent.

**Solution:** Audit the primitive against `references/accessibility-primitives-checklist.md`. Use native buttons for triggers where possible. Verify roles, `aria-selected`, `aria-controls`, `aria-expanded`, and keyboard handling against the relevant pattern.

### Problem: React 19 migration guidance is inconsistent or incorrect

**Symptoms:** The codebase mixes old provider syntax and new provider usage, adds `forwardRef` by default, or claims `use()` should replace `useContext()` everywhere.

**Solution:** Use `references/react19-composition-migration.md` to normalize guidance. Keep `useContext()` for standard context reads. Update ref patterns deliberately based on the actual React target and compatibility surface.

## Related Skills

- `@react-best-practices` - Use when the main task is broader React implementation quality or performance-oriented guidance rather than composition architecture.
- `@accessibility` - Use when the main task is widget semantics, keyboard support, screen reader behavior, or ARIA review.
- `@testing` - Use when the main task is component test strategy, interaction testing, or regression coverage.
- `@design-system` - Use when the task expands from one component API into tokenization, theming, or larger library governance.

## Additional Resources

### Local support pack

- [Pattern selection matrix](references/pattern-selection-matrix.md)
- [API design review checklist](references/api-design-review-checklist.md)
- [React 19 composition migration notes](references/react19-composition-migration.md)
- [Accessibility primitives checklist](references/accessibility-primitives-checklist.md)
- [Troubleshooting playbook](references/troubleshooting-playbook.md)
- [Boolean props refactor example](examples/before-after-boolean-props-refactor.md)
- [Accessible Tabs compound component example](examples/compound-tabs-accessible.tsx)
- [Disclosure compound component example](examples/disclosure-compound-component.tsx)
- [Render prop vs compound vs hook comparison](examples/render-prop-vs-compound-vs-hook.md)
- [React 19 ref prop migration example](examples/react19-ref-prop-migration.tsx)
- [Related React skill router](agents/router-related-react-skills.md)

### Primary references

- React: Composition vs Inheritance
- React: Passing Props to a Component
- React: Passing Data Deeply with Context
- React: Sharing State Between Components
- React: Scaling Up with Reducer and Context
- React: Preserving and Resetting State
- React API references for `Children`, `cloneElement`, `createContext`, `forwardRef`, `useContext`, and `use`
- MDN and WAI-ARIA guidance for tabs, disclosure patterns, and button semantics

# Rayden Code Domain Notes

Use this file as the compact execution checklist while generating Rayden-constrained React UI.

## 1) Required inputs before generation

Do not start code generation until you have enough of the following to work safely:
- target page or feature type
- repository or project context
- available Rayden or Rayna component references
- local examples, stories, screenshots, or existing patterns
- token or theme guidance
- expected states: loading, empty, error, success, disabled, busy
- routing, data, and client/server boundary context if relevant

If component docs are incomplete, prefer local evidence in this order:
1. existing production code
2. local Storybook or story files
3. local component source
4. user-provided screenshots or written constraints
5. bundled upstream notes included with this skill

If none of these exist, stop and ask for clarification instead of inventing APIs.

## 2) Token-first decision rules

Prefer, in order:
1. documented Rayden component variants and props
2. documented design tokens or theme variables
3. existing local composition patterns
4. narrowly scoped utility classes already consistent with the codebase
5. explicit one-off values only when requested or already established locally

Watch for token drift:
- hard-coded hex colors when the project uses semantic colors
- arbitrary spacing that breaks layout rhythm
- custom shadows, radii, or border colors that duplicate a supported variant
- wrapper classes that fight built-in component spacing or layout behavior

## 3) State coverage checklist

For each generated page or feature, ask:
- What renders before data arrives?
- What renders when data is empty?
- What renders when loading fails?
- Which actions can be disabled or busy?
- Are there permission-based differences?
- Does the layout change for mobile or narrow containers?
- Are repeated items keyed from stable identifiers?

If the interface contains dialogs, menus, tabs, filters, pagination, or selection, write those states down before code generation.

## 4) Semantic interaction checks

Prefer native semantics first:
- use `button` for actions
- use `a` for navigation
- use real form controls for input
- use list semantics for repeated navigation or grouped items when appropriate

Only rely on ARIA roles when a verified component implementation requires it. Do not replace standard elements with clickable `div` or `span` wrappers just to match a visual pattern.

For advanced widgets such as dialogs, tabs, menus, accordions, or comboboxes:
- prefer the documented Rayden component implementation
- do not hand-roll keyboard behavior unless that is explicitly in scope
- verify focus and disabled states before handoff

## 5) Missing source-of-truth decision tree

### Case A: You know the page goal but not the Rayden component surface
Action:
- inspect local code and stories
- ask the user for component docs or examples
- propose a generation plan before proposing final code

### Case B: A likely component exists, but prop names are uncertain
Action:
- find the nearest local usage
- copy the supported prop pattern
- remove speculative props
- note any assumptions in the handoff

### Case C: The requested pattern seems outside the design system
Action:
- offer the nearest supported composition using verified parts
- explain the gap clearly
- ask whether a custom implementation is acceptable

## 6) Pre-handoff review checklist

Before handing off generated code, confirm:
- every non-trivial component usage is traceable to evidence
- no obviously invented props or variants remain
- state coverage is present for the actual use case
- tokens or theme values are preferred over arbitrary styling
- semantic controls are used for interactive behavior
- assumptions and unresolved gaps are listed explicitly

## 7) What good output looks like

A strong result for this skill usually includes:
- a short assumptions block
- a page structure tied to verified Rayden patterns
- explicit UI states
- semantic interaction choices
- token-conscious styling
- a final note saying what still needs confirmation from Rayden references

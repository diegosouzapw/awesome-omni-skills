# Worked Example: From Vague UI Request to Production-Grade Frontend Task

## Starting Request

```text
Make the account settings page look premium and less generic.
```

## Weak Execution Pattern

- increase border radius everywhere
- add more shadows
- switch to a trendy gradient
- tighten some spacing by eye
- deliver only a screenshot-like result

This usually produces a more decorative interface, but not a more production-ready one.

## Better Execution Pattern

### 1. Clarify constraints

```text
Target: account settings page
Primary tasks: profile edits, password changes, notification preferences
Constraints: existing React app, current token system available, must support keyboard navigation, mobile and desktop, no layout shifts during load
```

### 2. Audit before changing visuals

Observed issues:

- section hierarchy is flat and hard to scan
- toggles and save actions are visually inconsistent
- form spacing varies by component
- focus styles are faint
- settings groups collapse poorly in narrow side panels

### 3. Convert aesthetic intent into implementation decisions

```text
Design direction:
- calmer, denser enterprise feel rather than marketing-card style
- stronger typographic hierarchy
- restrained radius and border language
- muted surface stack with one high-contrast accent role
- fewer shadows, more separation through spacing and borders
```

Translate that into system work:

- define or refine tokens for surface, border, text-muted, accent, focus-ring, spacing scale, and radius
- normalize form field and section spacing
- create one reusable settings-group pattern
- use container-aware behavior so groups reflow in narrower contexts

### 4. Implementation outline

```text
- Use `main`, `section`, headings, and `form` semantics correctly.
- Group related controls with `fieldset` and `legend` where appropriate.
- Standardize vertical rhythm using tokenized spacing values.
- Replace ad hoc active styles with a single focus ring token and consistent control states.
- Use CSS Grid for larger layouts and collapse groups to a single column when container width is constrained.
- Reserve space for inline validation and success messages to avoid layout shift.
```

### 5. Expected before/after behavior

**Before**

- all settings blocks have similar visual weight
- users rely on scanning line by line
- focus state is easy to miss
- narrow widths create cramped labels and misaligned actions

**After**

- sections read with clear hierarchy
- primary actions and destructive actions are visually distinct
- focus is obvious for all interactive controls
- the same settings group works full-width and in constrained panels
- status messaging appears without pushing surrounding content unexpectedly

## Example Acceptance Checks

Use checks like these in the final handoff:

- heading and form structure remains semantic without CSS
- all interactive controls are operable by keyboard
- focus indicator is visible on links, buttons, inputs, toggles, and inline actions
- layout still works at narrow container widths, not just common viewport sizes
- repeated spacing, radius, and color decisions are tokenized instead of hard-coded per component
- loading, error, and success states are represented without causing major layout shift
- any visual enhancement that may affect LCP or CLS is documented or mitigated

## Reusable Prompt Pattern

```text
Audit and improve [screen/component] so it feels distinctive and production-ready without changing its core information architecture. Preserve working behavior, correct semantics first, convert visual decisions into reusable tokens or component rules, improve focus and state handling, and make the layout adapt cleanly to narrower containers. Call out accessibility, responsiveness, and performance risks before handoff.
```

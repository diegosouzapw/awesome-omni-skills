# Worked Example: Turning a Vague Frontend Request into a Production Plan

## Incoming request

```text
Redesign our account settings page so it feels premium and less boring.
```

## Step 1: Clarify the real task

A strong operator should convert the vague brief into implementation questions:

- What are the primary jobs on the page: profile editing, password/security, notification settings, billing, or connected apps?
- Is the page dense and dashboard-like, or should it feel more editorial and spacious?
- Which parts are highest risk for errors: password change, email change, destructive actions?
- Are we working inside an existing design system or allowed to introduce new component styling?
- What environments matter most: desktop app shell, mobile browser, embedded settings panel?

## Step 2: Make bounded assumptions if the user has not answered yet

Example assumptions:

```text
- Existing app shell stays unchanged.
- The page includes profile details, password change, email preferences, and a destructive account section.
- The desired tone is calm, high-trust, and productively premium rather than flashy.
- The team wants real implementation guidance, not just visual adjectives.
```

## Step 3: Convert the brief into a design direction

### Before

```text
"Premium" is undefined and easy to translate into generic glassmorphism or oversized cards.
```

### After

```text
Design direction:
- Use strong typographic hierarchy and tighter content grouping.
- Reduce decorative noise; let spacing, alignment, and contrast carry the polish.
- Use one restrained accent color for emphasis and system feedback.
- Make risky actions visually distinct through separation and tone, not only red text.
- Favor stable, direct interactions over excessive animation.
```

## Step 4: Define semantic structure

Example structure:

```text
main
  h1 Account settings
  section Profile
    form fields
  section Security
    password form
    sessions/devices list
  section Notifications
    grouped toggles
  section Danger zone
    destructive actions
```

Why this matters:

- Screen readers and keyboard users can navigate the page by heading and form structure.
- The layout remains intelligible before visual styling.
- Sections map naturally to reusable components.

## Step 5: Define states before implementation

Required states:

- loading initial settings
- save in progress
- save success
- field validation error
- backend error banner
- disabled submit while invalid or pending
- destructive action confirmation
- narrow container/mobile layout
- reduced-motion mode

## Step 6: Responsive strategy

Use page-level layout for global spacing changes, but let individual settings panels adapt to their container width.

Example approach:

```text
- Media queries for the overall page rhythm and sidebar/main relationship.
- Container queries for settings cards so labels, inputs, and action rows can reflow when embedded in narrower shells.
```

## Step 7: Accessibility and safety checks

Must-have checks:

- visible focus on every link, input, button, and toggle
- labels explicitly associated with controls
- error messages connected to the relevant fields
- destructive actions separated and clearly described
- success/error feedback not communicated by color alone
- reduced-motion behavior for confirmations and panel transitions

## Step 8: Expected implementation output shape

A strong final response for this task would usually include:

1. a short summary of the visual direction
2. the semantic section structure
3. component/state list
4. responsive behavior notes
5. accessibility and performance considerations
6. code or a precise implementation plan
7. explicit tradeoffs or assumptions

## Example final response excerpt

```text
I would redesign the settings page around a calmer, higher-trust hierarchy rather than decorative effects. The page should use semantic sections for Profile, Security, Notifications, and Danger Zone, with forms grouped by task and headings that support scanability.

Implementation priorities:
- keep the DOM order aligned with reading and keyboard order
- use container-aware panel layouts so forms reflow cleanly in narrow shells
- define loading, success, validation, and destructive-confirmation states before visual polish
- preserve visible focus and high contrast for all actions
- treat motion as optional enhancement only
```

## What "good" looks like

The result should feel intentionally designed because the hierarchy, spacing, state handling, and interaction safety are coherent—not because the page uses trendy effects.

## What to avoid

Avoid responses like this:

```text
Use glass cards, subtle shadows, smooth animations, and a modern gradient background.
```

Why it is weak:

- no task hierarchy
- no semantic structure
- no state model
- no accessibility plan
- no implementation boundaries
- highly likely to produce generic UI rather than distinctive product design

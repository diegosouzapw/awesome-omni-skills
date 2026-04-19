# Worked Example: Updating a Rayden Banner and Composing a Settings Screen

## User request

"Update the Rayden inline banner so it supports a dismiss action and use it on the account settings screen. Keep the design system clean and tokenized."

## 1. Intake

Confirmed scope:
- Figma file: product settings workspace
- Screen: Account Settings
- System impact: yes, because the existing inline banner component needs a new dismiss capability
- Expected outcome: one component update plus one screen composition update
- Publish authority: not yet confirmed

Because this affects a shared component, the operator chooses an isolated review path if available.

## 2. Preflight inspection

The operator inspects the current design state through the available MCP read/list tools and records:

- There is already a `Banner / Inline` component set in the Rayden library.
- Existing variant axes appear to include `tone` and `size`.
- The close affordance is not present in any variant.
- Text content is currently hardcoded per variant in some older states.
- Variables are available for surface, text, border, spacing, and icon color.
- The settings screen already uses library instances for alerts and form sections.

## 3. Decision points

### Decision A: new component or extend existing one?
Extend the existing `Banner / Inline` component set.

Reason:
- anatomy stays the same
- behavior is additive
- creating `Banner / Dismissible Inline` as a separate component would cause unnecessary drift

### Decision B: property or variant?
Use a **boolean component property** for dismiss icon visibility, not a new variant axis.

Reason:
- dismissibility is a controllable option
- a variant axis for `dismissible=true/false` would expand the set without adding meaningful new semantic states

### Decision C: token application
Use existing variables for:
- background/surface
- text
- border
- icon color
- spacing and padding

Do not create a local gray icon color even if it looks close enough.

## 4. Implementation summary

### Component update

The operator updates `Banner / Inline` with:

- existing variant axes preserved
- new dismiss icon slot at the trailing edge
- boolean property controlling icon visibility
- auto layout maintained so content and action spacing scale correctly
- dismiss icon placed using tokenized spacing
- no detached instances
- no duplicate component set created

### Screen composition update

On the Account Settings screen, the operator:

- reuses a library instance of `Banner / Inline`
- sets tone to the existing informational tone used in account messaging
- enables the dismiss property
- fills realistic copy: "Your profile changes were saved successfully."
- keeps surrounding settings sections in auto layout
- avoids local restyling of the banner instance

## 5. Audit pass

The operator verifies:

- the banner still resolves through library-backed structure
- the dismiss affordance is aligned and visible
- spacing uses variables, not raw constants
- old text hardcoding is not multiplied into new states
- informational, warning, and error tones still look consistent
- contrast remains acceptable for text and icon affordances
- the settings screen uses the banner as an instance, not as a duplicate local frame

## 6. Expected resulting structure

### Component family after change

`Banner / Inline`
- variants
  - tone: info, success, warning, error
  - size: default, compact
- properties
  - dismiss icon visible: true/false
  - message text
  - optional leading icon instance swap if already part of the family

### Screen after change

`Account Settings`
- page header
- save confirmation banner using `Banner / Inline` instance
- profile form section
- security section
- notification preferences section

The banner remains a reusable system asset. The screen remains a composition of instances.

## 7. Handoff summary

Completed:
- Extended existing Rayden inline banner instead of creating a duplicate component.
- Added dismiss capability via component property.
- Applied existing variables for spacing and visual tokens.
- Updated Account Settings screen to use the revised library instance.

Needs review:
- Confirm whether the dismiss behavior needs implementation follow-up in code.
- Confirm whether the dismiss icon should appear in all tones by default.
- Confirm publish timing for the shared component update.

Escalation guidance:
- If engineering behavior is needed, route to implementation follow-up.
- If publication approval is restricted, route to design-system governance review.
- If contrast or icon target size is questioned, route to accessibility review.

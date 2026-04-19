# Worked Example: Turning a Vague Request into a Safe Rayden UI Generation Plan

## User request

> Build a premium account settings page with Rayden components. It should have profile info, security settings, billing summary, and notification preferences.

## Step 1: Clarifying questions to ask first

Ask only what changes the implementation materially:

1. Which Rayden references should I treat as the source of truth: local components, story files, screenshots, or bundled docs?
2. Is this page meant to be a static scaffold, or should it include real interaction shells such as toggles, dialogs, save actions, and validation placeholders?
3. Are there required sections beyond profile, security, billing, and notifications?
4. Which states should be included: loading, empty, error, success toast, disabled save, unsaved changes?
5. Is the styling stack token-based through Tailwind theme variables, Rayden utility classes, or component variants?
6. Do we need role-based differences, such as owner-only billing controls?
7. Is this for desktop-first, mobile-first, or responsive parity?

## Step 2: Safe assumptions if the user does not answer everything

Proceed only with explicit assumptions such as:
- Assume a responsive two-column settings layout that collapses to one column on smaller screens.
- Assume each section uses verified Rayden surface components such as cards, section headers, buttons, inputs, toggles, tabs, or alerts only if those exist in local references.
- Assume settings actions include default, disabled, saving, and saved states.
- Assume billing details may be read-only if edit flows are not documented.

## Step 3: Structured generation plan

### Goal
Generate a Rayden-compliant React settings page using only verified components, variants, and tokens.

### Evidence to gather before code
- find local examples of settings, profile, or form sections
- inspect story files for cards, form controls, toggles, tabs, alerts, buttons, and layout primitives
- confirm token usage for spacing, muted text, emphasis, danger, and success states

### Page structure
- page header with title, description, and primary save action
- profile card with avatar, display name, email, and edit affordances
- security card with password change entry point, session/device summary, and 2FA state
- billing card with plan summary, renewal date, payment method summary, and manage billing action
- notifications card with grouped preference toggles and save/reset actions

### Required UI states
- loading skeleton or placeholder layout for the page
- empty or unavailable billing summary state
- inline error state for failed settings load
- disabled save button when no changes exist
- busy state while saving
- success confirmation after save

### Semantic and accessibility checks
- use real buttons for save, reset, and manage actions
- use real form controls for toggles and inputs when not abstracted by verified Rayden components
- keep section headings hierarchical
- if tabs or dialogs are used, verify keyboard and focus behavior against the documented component implementation

### Token and styling checks
- use documented spacing and emphasis tokens
- avoid ad hoc color values for success, warning, or danger messaging
- prefer built-in card and section variants over custom shadow and border combinations

## Step 4: Example operator response plan

> I can generate this safely if we anchor it to your Rayden source of truth. I will first inspect local component usages for cards, form controls, buttons, and layout primitives, then map the page states before drafting code. If a requested component or prop is not documented locally, I will replace it with the nearest verified composition and call out the assumption.

## Step 5: Example review checklist before handoff

- Verified every Rayden component name against local evidence
- Removed speculative props or unsupported variants
- Included loading, error, empty, disabled, busy, and success states where relevant
- Used semantic controls for interactive behavior
- Preferred system tokens and variants over arbitrary styling
- Listed any assumptions, especially around billing actions and advanced settings widgets

## What this example demonstrates

This is the expected operating pattern for the skill:
- ask for the source of truth first
- constrain generation to verified design-system usage
- plan states before writing code
- hand off with assumptions and review notes instead of pretending missing APIs are known

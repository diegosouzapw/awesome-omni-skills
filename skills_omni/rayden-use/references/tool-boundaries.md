# Tool Boundaries for Rayden UI Work in Figma via MCP

Use this reference before changing shared design artifacts.

## 1. Minimum preflight before any mutation

Do not edit until you can answer all of these:

1. What file and page are in scope?
2. Am I changing a shared Rayden system artifact or only a local composition?
3. Is the object an existing library component, a local duplicate, or an instance?
4. Are the expected variable collections and modes available?
5. Is there an existing branch or review path for shared-system changes?
6. Is publishing or only design preparation in scope?

If any answer is unknown, inspect more or ask for clarification. Do not guess.

## 2. Inspect first, then decide the mutation path

### Inspect only
Choose inspection only when:
- the request is still ambiguous
- the library source is unclear
- the token model cannot be verified
- the task may actually be implementation or governance work

### Edit in place
Edit in place only when all are true:
- the change is local to the current file or page
- it does not alter a shared published pattern unexpectedly
- token and library context are clear
- the task does not require cross-team review to be safe

### Branch or isolate the change
Use a branch or equivalent isolated review path when any are true:
- you are changing a shared component set
- the update could affect many instances or consuming files
- you are restructuring variant axes or property behavior
- publication or reviewer approval is expected

### Stop and escalate
Stop and escalate when:
- the correct token does not exist and creating one would be governance-sensitive
- the connected library state is unclear or inconsistent
- the task mixes design maintenance with code-only implementation requests
- accessibility concerns are discovered that require explicit review, not silent design edits

## 3. Reuse vs create

### Reuse an existing component when
- the anatomy and semantics already match
- only state, content, icon visibility, or slot behavior changes
- a local screen uses a detached or duplicated object that should really be a library instance

### Add a property when
- the difference is configurable rather than semantic
- text, icon visibility, badge presence, or nested-instance choice can vary without redefining the component’s identity
- using a property avoids multiplying variants without losing clarity

### Add a variant when
- the component needs a selectable state or style distinction such as size, emphasis, status, selection, interaction state, or layout mode
- the difference should be reviewable as part of the component API
- property-driven control would hide an important system state

### Create a separate component when
- the anatomy, semantics, or primary behavior materially differs
- folding the change into the existing set would make the API confusing
- the new artifact represents a distinct pattern, not just another option

## 4. Token policy

Use variables and token relationships where available.

Prefer this order:
1. existing variable alias already used by the component family
2. existing variable in the correct collection and mode
3. explicit documented exception with follow-up

Avoid this order:
- raw local values as a silent substitute for missing tokens
- ad hoc token creation without governance
- mixing variable-backed and raw values inside one component family unless the exception is documented

Record token provenance when the task is non-trivial:
- collection
- mode
- alias target if relevant
- missing token gap if no proper variable exists

## 5. Safe mutation rules

- Do not routinely detach instances.
- Do not flatten layers as a shortcut for maintainability problems.
- Do not replace a library-backed object with a visually similar local duplicate unless the task is explicitly exploratory.
- Do not create a new component set before checking whether a variant or property is the correct extension.
- Do not bypass review expectations for shared-system changes.

## 6. Publish and handoff criteria

The work is ready to hand off when you can state:

- what changed
- whether the change is screen-local or system-level
- which existing components or variables were reused
- whether branch review or publication is still needed
- what unresolved accessibility, implementation, or governance items remain

If you cannot state those clearly, the work is not ready for clean handoff.

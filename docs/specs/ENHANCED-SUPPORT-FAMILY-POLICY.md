# Enhanced Support Family Policy

## Status

Draft normative policy for optional support files inside curated `skills_omni/`.

## Purpose

This policy defines when each support family should exist, what "good" looks like, and what should be rejected as boilerplate.

The policy applies to:

- the private support planner
- the private rewrite phase
- the private self-audit phase
- the public scorer and metadata classifier

## General Rule

Support families are conditional, not automatic.

A family should be generated only when:

1. the skill profile benefits from it
2. the file adds domain-specific value
3. the file is referenced or implied by the real workflow
4. self-audit confirms it is not filler

## Family: `references/`

### When It Makes Sense

Use `references/` when important operational detail should live outside `SKILL.md` because:

- the detail is real and specific
- the detail is too large for the entrypoint
- the detail is not always needed up front

Common good uses:

- build and runtime caveats
- environment setup matrices
- API auth and failure-mode notes
- field mappings
- decision criteria

### What Good Looks Like

A good `references/` file:

- contains domain terms
- adds material not already duplicated in `SKILL.md`
- is linked from `SKILL.md` when relevant
- could realistically be opened during execution or review

### What To Reject

Reject `references/` files that are mostly:

- generic checklists
- generic review prose
- generalized "best practices" not tied to the skill
- restatements of the same workflow bullets already present in `SKILL.md`

## Family: `examples/`

### When It Makes Sense

Use `examples/` when examples materially improve the operator's ability to perform the task.

Common good uses:

- code examples
- prompt examples
- request/response samples
- before/after demonstrations
- worked examples with expected output

### What Good Looks Like

A good `examples/` file:

- has concrete inputs
- has expected outputs or observable results
- uses domain-specific terminology
- teaches a pattern that the operator can reuse

### What To Reject

Reject `examples/` files that are mostly:

- blank templates
- "Objective / Trigger / Inputs / Validation" placeholders
- generic reviewer packets
- examples without a concrete result

## Family: `scripts/`

### When It Makes Sense

Use `scripts/` only when a real executable helper improves the skill.

Common good uses:

- preflight validation
- environment checks
- schema inspection
- report generation
- configuration normalization
- deterministic analysis or extraction

### What Good Looks Like

A good script:

- performs non-trivial work
- is tied to the workflow
- saves operator effort
- has a clear success condition

### What To Reject

Reject scripts that only:

- print an existing JSON file
- list the files in the directory
- restate already obvious information
- exist only to increase maturity or score

## Family: `agents/`

### When It Makes Sense

Use `agents/` when the skill needs explicit routing or handoff logic that goes beyond ordinary prose.

Common good uses:

- branching decisions between related tools or skills
- fallback routing based on environment availability
- role-specific handoff rules

### What Good Looks Like

A good `agents/` file:

- contains actual decision logic
- defines clear conditions
- improves handoff quality

### What To Reject

Reject `agents/` files that are only:

- general handoff reminders
- generic "route to a better skill if needed" notes
- decorative metadata with no operational consequence

## Family: `assets/`

### When It Makes Sense

Use `assets/` when a structured file is consumed by the workflow.

Common good uses:

- JSON schema
- field mapping
- policy matrix
- machine-readable examples used by scripts or review tooling

### What Good Looks Like

A good asset:

- is referenced by a script, example, or workflow
- holds structured information that does not belong in prose
- is not redundant with `EXTERNAL_SOURCE.json`

### What To Reject

Reject assets that are only:

- decorative metadata
- duplicate provenance
- machine-readable copies of information already clear elsewhere

## Profile Hints

These are not hard requirements, but they should shape the planner:

### `language-runtime` / `code-generation`

Often benefits from:

- `references/`
- `examples/`
- sometimes `scripts/`

### `shell-bash` / `cli-automation`

Often benefits from:

- `examples/`
- `scripts/`
- `references/`

### `api-integration`

Often benefits from:

- `references/`
- `examples/`
- sometimes `assets/`

### `analysis-review`

Often benefits from:

- `references/`
- `examples/`

and often does not need:

- `scripts/`
- `assets/`

## Validation Expectations

Each family should eventually have dedicated scoring and self-audit checks.

Minimum expected checks:

- `references/`: domain specificity and non-duplication
- `examples/`: concrete input/output evidence
- `scripts/`: non-trivial executable value
- `agents/`: real routing logic
- `assets/`: declared consumer

## Anti-Pattern To Ban

The following pattern is explicitly banned:

"Generate one file in each family so the skill looks complete."

That is the old behavior this policy is replacing.

# Cursor Agent Frontmatter Guide

This guide explains the common frontmatter fields used in Cursor custom agents.

## Example

```yaml
---
name: verifier
description: Verification specialist. Use after implementation is reported complete and needs evidence-based validation.
model: inherit
readonly: true
is_background: false
---
```

## Fields

### `name`

- Optional in many cases
- If omitted, the filename typically acts as the identifier
- Use lowercase kebab-case when provided

### `description`

- Most important field for delegation quality
- Should explain when the agent should be used
- Prefer specific task triggers over generic role labels

Good example:

- `Verification specialist. Use after implementation is reported complete and needs evidence-based validation.`

Weak example:

- `General coding helper.`

### `model`

Recommended default: `inherit`

Use:

- `inherit` for most cases
- `fast` for lightweight formatting, triage, or quick checks when available and appropriate
- a specific model only when there is a clear, justified reason

Do not hard-code a specific model as a universal default.

### `readonly`

Recommended default for review-style agents: `true`

Use `readonly: true` for:

- verifiers
- auditors
- reviewers
- analysts
- triage agents

Avoid read-only mode when the agent must intentionally implement changes.

### `is_background`

Recommended default: `false`

Use `is_background: true` only when:

- work may take a long time
- immediate interaction is not required
- the final report format is clear

Avoid background mode when:

- the work is exploratory
- fast iteration is needed
- progress must be supervised closely

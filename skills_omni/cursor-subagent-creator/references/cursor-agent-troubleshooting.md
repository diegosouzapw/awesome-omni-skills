# Cursor Agent Troubleshooting Reference

## Agent is never delegated

**Likely causes**

- description is too vague
- description lacks concrete trigger language
- role overlaps with many other agents or generic behavior

**Fixes**

- rewrite the description with specific scenarios
- include phrases like "Use when investigating failing tests..."
- reduce scope to one responsibility
- test with a positive trigger prompt

## Agent triggers too often

**Likely causes**

- description is too broad
- prompt uses umbrella language like "all engineering tasks"
- the role overlaps with command or rule behavior

**Fixes**

- narrow the role
- remove broad trigger language
- define nearby tasks that should not invoke the agent
- add a negative trigger test

## Review agent can edit files unexpectedly

**Likely causes**

- `readonly` not set correctly
- body includes implementation instructions

**Fixes**

- set `readonly: true`
- remove file-editing language
- separate review and implementation into different agents

## Implementation agent cannot complete edits

**Likely causes**

- permissions are too restrictive
- prompt is written like a reviewer, not an implementer

**Fixes**

- confirm the role actually requires edits
- adjust permissions only if necessary
- make the implementation boundary explicit

## Background execution is confusing

**Likely causes**

- task is too interactive for background mode
- completion criteria are unclear
- reporting format is weak

**Fixes**

- move back to foreground mode
- reduce scope
- require final sections such as Summary, Status, Evidence, Next Actions

## Output quality is inconsistent

**Likely causes**

- prompt is too long or ambiguous
- output contract is underspecified
- there are conflicting instructions

**Fixes**

- simplify the prompt
- define fixed output sections
- remove contradictory or optional branches where possible

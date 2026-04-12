# Cursor Agent Decision Tree

Use this guide before creating a new Cursor custom agent.

## 1. Do you need a Cursor custom agent at all?

### Use a Cursor Rule when:

- the instruction should apply persistently
- it is team policy, coding style, architecture guidance, or repository convention
- you do not need isolated delegated execution

### Use a Skill when:

- the workflow is reusable guidance
- the task does not need a dedicated Cursor custom-agent file
- the operator mainly needs steps, checklists, or a process

### Use a Command when:

- the action is narrow and one-off
- the behavior is closer to a shortcut than a specialized delegated worker

### Use a Cursor custom agent when:

- the task is specialized and reused repeatedly
- isolated context is helpful
- delegation quality matters
- you want a stable role with a stable output contract

## 2. If using a Cursor custom agent, choose scope

### Project scope: `.cursor/agents/`

Use when:

- the agent depends on repository conventions
- the agent should be shared with the team
- the workflow is specific to one codebase or organization

### User scope: `~/.cursor/agents/`

Use when:

- the agent is broadly reusable across many unrelated projects
- the prompt does not depend on repo-specific assumptions
- the agent is a personal working style utility

## 3. Check responsibility size

Create the agent only if you can answer all three questions with "yes":

- Can I describe the role in one sentence?
- Can I define a clear output contract?
- Can I explain when it should be used and when it should not?

If not, split the design or choose a different mechanism.

## 4. Permission decision

### Prefer `readonly: true` when the agent:

- audits
- verifies
- reviews
- analyzes
- summarizes
- triages

### Allow write access only when the agent:

- implements code changes
- applies targeted fixes
- edits documentation intentionally

## 5. Background decision

Use `is_background: true` only if:

- the task is long-running
- delayed completion is acceptable
- the final report can be clearly defined

Keep `is_background: false` when:

- the task needs interactive steering
- the operator needs immediate feedback
- the prompt is exploratory or ambiguous

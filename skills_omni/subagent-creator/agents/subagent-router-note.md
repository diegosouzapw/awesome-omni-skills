# Routing Note: Direct Work vs Skill vs Subagent vs Multi-Agent Flow

Use this note when deciding whether to create or invoke a subagent.

## Choose direct work when

- the task is small and clear
- isolated context is unnecessary
- no separate tools or permissions are needed

## Choose a skill when

- the work is a repeatable procedure or knowledge pattern
- the parent agent can still handle execution directly
- specialization is useful but context isolation is not required

## Choose one subagent when

- one narrow responsibility can be delegated cleanly
- inputs and outputs are stable
- separate context or permissions improve performance or safety

## Choose multiple subagents when

- planning, execution, and verification should be separated
- parallel specialists can work independently
- one specialist should not validate its own work

## Escalate to human review when

- the task involves auth, payments, secrets, deployment, or destructive operations
- approval is required by policy or risk level
- confidence is low or evidence is incomplete

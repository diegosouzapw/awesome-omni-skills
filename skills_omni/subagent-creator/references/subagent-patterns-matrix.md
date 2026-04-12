# Subagent Patterns Matrix

| Pattern | Purpose | Invoke when | Typical output | Common failure mode |
| --- | --- | --- | --- | --- |
| Planner / decomposer | Breaks a goal into steps | The work is large or ambiguous and needs a plan before execution | ordered task list, assumptions, dependencies | creates abstract plans with no execution criteria |
| Researcher / retriever | Collects evidence or context | The parent agent lacks source material or references | evidence summary, citations, unresolved gaps | returns broad summaries without answering the target question |
| Executor | Performs bounded implementation | The work is scoped, actionable, and can be completed with clear constraints | completion status, changed artifacts, notes | overreaches beyond the assigned scope |
| Verifier | Independently validates claimed work | Work is marked complete or requires approval confidence | pass/fail status, verified claims, failures, evidence | agrees with the executor without checking evidence |
| Debugger | Finds root cause and proposes minimal fix | There is a reproducible failure, error, or regression | root cause, evidence, minimal fix, validation steps | changes too many things before isolating the cause |
| Reviewer / critic | Improves quality and maintainability | Changes are ready for review | issues by severity, rationale, suggestions | gives generic advice without locations or evidence |
| Safety / policy checker | Reviews risk and compliance boundaries | The domain is sensitive or restricted | risk summary, blocked actions, escalation needs | acts like a general reviewer instead of a risk specialist |
| Router / orchestrator helper | Chooses the next specialist or path | The system must decide direct work vs delegation | routing recommendation, rationale, next step | routes too aggressively because boundaries are weak |

## Useful combinations

### Single specialist

Use when one responsibility is sufficient and routing is clear.

### Planner + executor

Use when implementation work benefits from a decomposition step first.

### Executor + verifier

Use when completed work needs independent confirmation.

### Planner + executor + verifier

Use for high-value or risky workflows where planning, implementation, and independent validation should remain separate.

### Parallel specialists + aggregator

Use when multiple bounded workstreams can run independently and results can be merged safely.

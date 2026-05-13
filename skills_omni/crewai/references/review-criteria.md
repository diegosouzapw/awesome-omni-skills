# CrewAI Review Criteria

Use this rubric when reviewing a CrewAI proposal, pull request, design note, or troubleshooting request.

## 1. Architecture Choice

### Pass
- The design clearly explains why it uses a **Crew**, a **Flow**, or a hybrid.
- A Crew is used for role-based collaboration among agents.
- A Flow is used for branching, event-driven steps, pause/resume, or persisted state.
- Hybrid designs have a clear boundary: the Flow orchestrates, while the Crew handles a bounded collaborative stage.

### Fail
- The entire system is a Crew only because "multiple agents sounds better."
- Flow-like requirements such as branching, waiting, or state recovery are hidden inside long agent prompts.
- A hybrid is proposed, but no one can say where deterministic orchestration ends and agent collaboration begins.

## 2. Process Selection

### Pass
- Sequential mode is used when task ordering is fixed and simple.
- Hierarchical mode is used only when delegation logic is genuinely needed.
- Hierarchical designs explicitly define a `manager_llm` or `manager_agent`.
- Delegation authority and worker boundaries are documented.

### Fail
- Hierarchical mode is selected without a manager.
- The design cannot explain why hierarchical is better than sequential.
- Worker agents have overlapping authority, causing duplicate work or unstable handoffs.

## 3. Agent Design

### Pass
- Each agent has a narrow role and expertise area.
- Agent responsibilities are distinguishable and necessary.
- Tool access, if any, matches the agent's job and is not over-broad.

### Fail
- Several agents do nearly the same thing.
- Agent personas are verbose but operationally empty.
- Agents have capabilities that are unrelated to the task or unsafe by default.

## 4. Task Contracts and Handoffs

### Pass
- Each task defines inputs, expected outputs, and completion criteria.
- Machine-consumed results use structured outputs where possible.
- Guardrails are present for outputs that feed later automation.
- Downstream consumers of each output are known.

### Fail
- Tasks are named but not specified.
- Handoffs depend on free-form summaries for critical data.
- A downstream step needs fields or decisions that the upstream task never guarantees.

## 5. Memory and State

### Pass
- The design explains whether memory is needed at all.
- Transient context, reusable memory, and persisted Flow state are treated differently.
- State ownership and retention expectations are defined.
- Recovery behavior after interruption is considered.

### Fail
- Memory is enabled by default without a clear retrieval purpose.
- Persistent state exists, but no one can say what should be stored or for how long.
- Old context can silently contaminate new work.

## 6. Observability and Runtime Insight

### Pass
- Runs can be traced and inspected after execution.
- The design exposes enough evidence to diagnose bad outputs.
- Usage metrics or equivalent runtime cost insight are available.
- Partial failures and retries are visible to operators.

### Fail
- The team can only say a run "felt wrong" without evidence.
- Cost, token, or step-level behavior is opaque.
- Failures disappear inside prompts or ad hoc logs.

## 7. Persistence and Recovery

### Pass
- Long-running or event-driven workflows define persisted state boundaries.
- The design explains what happens after restarts, retries, or external updates.
- Human approval or external wait states are modeled explicitly.

### Fail
- Pause/resume is required, but the design assumes one uninterrupted run.
- External events are handled through manual prompt copying.
- A restart loses critical context or causes duplicate actions.

## 8. Testing and Evaluation

### Pass
- The workflow can be tested with repeatable cases.
- There is a plan for both happy-path and failure-path evaluation.
- CrewAI-native testing is complemented by business-level evaluation where needed.
- Success criteria are explicit enough to compare runs.

### Fail
- Readiness is based on one successful demo.
- There are no representative edge cases.
- Output quality is judged only by intuition, with no rubric or comparison set.

## 9. Review Verdict Template

Use this structure in final findings:

- **Architecture verdict:** correct / overbuilt / mis-modeled
- **Blockers:** issues that must change before implementation or approval
- **Important fixes:** issues that materially affect reliability or maintainability
- **Optional improvements:** changes that help but are not required
- **Recommended target shape:** Crew / Flow / hybrid / simpler single-agent design

## Fast Decision Heuristics

- If you need branching plus durable state, start by asking whether this is really a Flow.
- If you need multiple agents, ask whether their responsibilities are actually different.
- If one task feeds another, ask whether the handoff is structured and validated.
- If the system cannot be explained after it runs, observability is insufficient.
- If the team cannot test it twice in a comparable way, it is not review-ready.

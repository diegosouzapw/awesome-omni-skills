# CrewAI Review Criteria

Use this checklist during architecture review, implementation audit, or pre-handoff validation.

## 1. Orchestration Choice: Crew vs Flow

### Prefer a Crew when
- the problem benefits from role-based collaboration
- different agents contribute distinct expertise
- delegation improves quality rather than adding control complexity
- the main challenge is reasoning quality, not state-machine correctness

### Prefer a Flow when
- the workflow is stateful, branch-heavy, or event-driven
- approval gates, retries, or recovery behavior must be deterministic
- execution order and conditions matter more than agent collaboration
- external actions depend on validated intermediate state

### Review questions
- Is this architecture using a Crew where a simple Flow or single agent would be clearer?
- Are branch conditions explicit, or buried inside prompts?
- Does deterministic control live outside the agent layer when it should?
- If both are used, is the split clean: Flow for orchestration, Crew for collaborative subwork?

## 2. Agent Design

### Healthy signs
- each agent has one clear role
- tools match responsibility
- overlapping authority is minimal
- delegation rights are intentional and limited

### Warning signs
- multiple agents can make the same final decision
- an agent has a broad persona but no bounded task
- a manager delegates without a completion rubric
- tool access is wider than needed

### Review questions
- Can you explain why each agent exists in one sentence?
- Would removing an agent simplify the system without harming quality?
- Is any agent acting as both planner and executor without a good reason?

## 3. Task and Output Contracts

### Healthy signs
- tasks specify inputs, objective, and expected output
- outputs are structured enough for review or automation
- unknowns are allowed to remain unknown
- success criteria are visible in the task, not only implied

### Warning signs
- task wording like "analyze this" or "improve this" with no output contract
- downstream steps depend on fields never required upstream
- prompts expect citations, schemas, or artifacts but do not request them explicitly
- tasks mix research, decision, execution, and QA in one step

### Review questions
- What exact artifact should this task produce?
- Can another step validate the result without subjective interpretation?
- If the task fails partially, what output still gets preserved?

## 4. Process Selection and Control

### Review checks
- sequential execution is used when order is simple and linear
- hierarchical or manager-led patterns are used only when oversight adds value
- retry behavior is capped and justified
- human approval points exist for high-risk actions
- failure paths are explicit instead of assumed

### Failure heuristics
- repeated refinement loops usually indicate vague completion criteria
- excessive manager intervention often means tasks are underspecified
- silent fall-through after tool failure suggests missing branch logic

## 5. Observability and Replay

### Healthy signs
- traces or logs capture major decisions and tool calls
- intermediate outputs are inspectable
- runtime events can be correlated to tasks or steps
- replay or equivalent debugging support exists for investigation

### Warning signs
- failures can only be described from memory after the run ends
- there is no clear record of which agent produced which artifact
- branch decisions cannot be reconstructed

### Review questions
- If this run fails in production, what evidence survives?
- Can an operator tell which task introduced a bad result?
- Are tool inputs and outputs visible enough for debugging?

## 6. Memory Use

### Good uses
- carrying forward stable context that truly helps later steps
- retrieval of curated past artifacts
- scoped persistence with clear relevance rules

### Risky uses
- carrying broad conversation history into unrelated later tasks
- treating memory as a substitute for precise task inputs
- persisting unvalidated model claims as if they were facts

### Review questions
- What exact problem is memory solving here?
- Could the same result be achieved with cleaner explicit inputs?
- How is stale or irrelevant memory prevented from dominating later runs?

## 7. Validation and Guardrails

### Healthy signs
- expected outputs use structured fields where automation depends on them
- critical steps have assertions, checks, or approval gates
- invalid outputs fail fast before triggering external actions

### Warning signs
- free-form text is directly consumed by downstream code or operations
- no required fields exist for user-visible decisions
- a tool call can happen even when core inputs are missing

### Review questions
- Which outputs must be schema-like rather than narrative?
- What is the earliest safe point to reject bad data?
- Are guardrails placed before costly or irreversible actions?

## 8. Testing and Production Readiness

### Minimum expectations
- sample inputs exist for major paths
- expected outputs or acceptance criteria are documented
- at least one failure path has been exercised intentionally
- observability is enabled before scale-up

### Review verdict shortcuts
- **Ready:** architecture choice is sound, outputs are contract-based, failure paths are visible
- **Needs revision:** the idea is valid but contracts or controls are weak
- **Wrong abstraction:** a Crew is doing Flow work, or vice versa
- **Not production-ready:** missing validation, observability, or recoverability

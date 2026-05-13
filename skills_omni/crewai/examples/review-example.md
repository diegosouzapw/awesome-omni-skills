# Worked CrewAI Review Example

## Scenario

A team proposes the following design for an insurance-claim assistant:

- One **hierarchical Crew** with four agents: Intake Agent, Research Agent, Policy Agent, Writer Agent.
- The Crew handles the entire lifecycle from claim submission to final response.
- The process may pause while waiting for customer documents.
- A human supervisor must approve payouts above a threshold.
- Agents pass summaries to each other in plain English.
- Memory is enabled globally because the team wants the system to "remember everything."
- No tracing or evaluation plan is defined.

## Review

### 1. Architecture Verdict

**Verdict:** Mis-modeled as a single Crew.

**Why:** The workflow has event-driven waits, pause/resume behavior, approval gates, and persisted state needs. Those are Flow-shaped requirements. A Crew may still be useful for a bounded investigation stage, but it should not be the sole top-level orchestration model.

### 2. Prioritized Findings

#### Blockers

1. **Wrong top-level orchestration model**
   - The design needs a Flow for claim lifecycle management.
   - Waiting for documents and approval gates should not be hidden inside one Crew run.

2. **Hierarchical process is incomplete**
   - No `manager_llm` or `manager_agent` is specified.
   - Delegation logic and escalation rules are absent.

3. **Task handoffs are brittle**
   - Plain-English summaries are unsafe for downstream automation.
   - Critical fields such as claim type, evidence gaps, and payout recommendation are not guaranteed.

#### Important Fixes

4. **Memory scope is too broad**
   - "Remember everything" is not a memory strategy.
   - The system must separate transient run context from durable claim state.

5. **No observability plan**
   - The team cannot inspect why a recommendation was produced or why cost increased.
   - Tracing and usage metrics should be part of the design, not an afterthought.

6. **No evaluation plan**
   - There are no repeatable cases for routine claims, incomplete claims, escalation cases, or false-positive payout recommendations.

#### Optional Improvements

7. **Agent overlap should be reduced**
   - Research Agent and Policy Agent may be partially redundant unless their evidence sources and outputs are clearly distinct.

## Recommended Target Design

### Top Level
Use a **Flow** to orchestrate:
1. claim intake
2. completeness check
3. wait state for missing documents
4. investigation stage
5. approval gate for high-risk or high-value cases
6. final customer response

### Collaborative Sub-Stage
Use a **Crew** only for investigation when multiple specialist roles are justified, for example:
- Evidence Analyst
- Policy Interpreter
- Fraud Risk Reviewer

### Required Contract Improvement

**Weak handoff**
```text
Research Agent: "Here is my summary of the claim and what might be missing."
```

**Improved handoff**
```json
{
  "claim_id": "CLM-1042",
  "claim_type": "auto",
  "missing_documents": ["police_report"],
  "policy_constraints": ["rental car capped at 10 days"],
  "fraud_risk": "low",
  "recommended_next_step": "request_missing_document",
  "confidence": 0.86
}
```

**Why this is better:** The next step can validate required fields, route by `recommended_next_step`, and preserve comparable state between runs.

## Example Final Review Output

```text
Architecture verdict: mis-modeled

Blockers:
1. Replace the top-level Crew with a Flow because the lifecycle requires pause/resume, approval gates, and persisted state.
2. If hierarchical execution remains inside the investigation stage, add a manager_llm or manager_agent and document delegation rules.
3. Replace plain-English inter-agent summaries with structured outputs and validation guardrails.

Important fixes:
1. Narrow memory scope and distinguish durable claim state from temporary reasoning context.
2. Add tracing and usage metrics so runs can be debugged and cost can be monitored.
3. Create repeatable evaluation cases for routine, incomplete, escalated, and high-risk claims.

Optional improvements:
1. Merge or better differentiate overlapping research and policy roles.

Recommended target shape: Flow with a bounded investigation Crew.
```

## What Good Looks Like

A stronger review does not just say "use Flows for complex workflows." It ties the recommendation to concrete symptoms:
- external wait states
- persisted state
- approval checkpoints
- brittle handoffs
- missing manager configuration
- absent evaluation discipline

Use that level of specificity in your own CrewAI reviews.

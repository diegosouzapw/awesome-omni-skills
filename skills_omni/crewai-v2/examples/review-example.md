# Worked CrewAI Review Example

## Scenario

A team built a customer-support automation system with:
- a triage agent
- a policy agent
- a drafting agent
- a manager agent that keeps asking for revisions

The system must:
- reject tickets with missing required fields
- route billing complaints differently from technical incidents
- require approval before customer-visible escalation
- preserve a run history for post-incident review

## Submitted design summary

```yaml
architecture:
  type: crew
  agents:
    - triage_agent
    - policy_agent
    - drafting_agent
    - manager_agent
  tasks:
    - "Analyze the ticket"
    - "Figure out relevant policy"
    - "Draft the best response"
    - "Review and improve until ready"
```

## Review findings

### 1. Wrong top-level orchestration choice
The workflow contains deterministic branching and approval gates. That is Flow-shaped work, not pure Crew-shaped collaboration.

**Why it matters**
- required-field validation should happen before any reasoning step
- routing by issue type should be explicit and reproducible
- approval checkpoints should not depend on prompt interpretation alone

### 2. Task contracts are too vague
Tasks do not define required inputs or expected outputs.

**Observed risk**
- downstream agents may invent missing ticket facts
- review quality becomes subjective
- customer-facing output cannot be validated reliably

### 3. Delegation loop risk
The manager task says "improve until ready" with no stop condition.

**Observed risk**
- repeated near-duplicate revisions
- cost growth without quality gain
- unclear ownership of final approval

### 4. Missing observability expectations
The design does not mention traces, event logs, or preserved intermediate artifacts.

**Observed risk**
- post-incident review becomes guesswork
- hard to identify whether failures came from triage, policy lookup, or drafting

## Review verdict

```text
Needs redesign before production use.
Keep collaborative agents for ticket reasoning and response drafting, but move orchestration into a Flow.
```

## Recommended redesign

### Top-level architecture
```yaml
architecture:
  type: flow
  steps:
    - validate_ticket_fields
    - classify_ticket_type
    - branch_on_ticket_type
    - invoke_crew_for_reasoning_and_draft
    - validate_draft_output
    - require_approval_if_escalation
    - publish_or_queue_response
```

### Nested Crew use
```yaml
crew_purpose: collaborative reasoning for policy interpretation and response drafting
agents:
  - triage_specialist
  - policy_specialist
  - response_drafter
rules:
  - no direct customer-visible publication
  - output must match the draft_response schema
```

### Improved task example
```yaml
task: produce_support_draft
inputs:
  - ticket_summary
  - ticket_type
  - applicable_policy_excerpt
  - customer_tier
expected_output:
  draft_response:
    - summary_of_issue
    - recommended_resolution
    - customer_message
    - escalation_needed
    - policy_basis
rules:
  - do not invent policy not present in inputs
  - set escalation_needed to true when required fields remain unresolved
  - if confidence is low, return uncertainty explicitly
```

## Before vs after review summary

### Before
- Crew used as the full orchestration layer
- vague tasks
- no stop criteria
- no explicit validation checkpoints
- no runtime visibility plan

### After
- Flow controls validation, branching, and approval
- Crew handles collaborative subwork only
- output contract is structured and reviewable
- escalation logic is explicit
- observability requirements can be attached to each step

## Operator-ready handoff note

When handing this review off:
- preserve upstream copied files and provenance notes
- record whether the current repository already mixes Crew and Flow concepts
- note which recommendations are mandatory for production versus optional quality improvements

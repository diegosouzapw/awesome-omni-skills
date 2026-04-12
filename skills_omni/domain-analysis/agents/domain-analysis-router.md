# Domain Analysis Router

Use this note when the task starts in domain analysis but shifts elsewhere.

## Stay in `domain-analysis` when

- the main question is about business meaning
- the task is to identify subdomains or bounded contexts
- the user needs Core/Supporting/Generic classification
- the team needs a context map or semantic boundary rationale

## Route to adjacent skills when

### `domain-identification-grouping`

Use when the task is mostly grouping existing files, packages, or components into rough domain buckets without strategic DDD analysis.

### `coupling-analysis`

Use when the question is really about dependency strength, change coupling, cyclic dependencies, or structural entanglement.

### `event-storming`

Use when domain discovery is blocked by missing workflow or event evidence and a stakeholder-centered discovery method is needed.

### `service-boundary-design`

Use after candidate bounded contexts are established and the team now needs deeper implementation-level service decomposition analysis.

### `architecture-decision-records`

Use when the next step is to formalize a boundary decision, tradeoff, or migration strategy.

### `modular-monolith-refactoring`

Use when the recommendation is to preserve internal boundaries and improve modularity without extracting services.

## Handoff rule

When routing away, carry forward:

- scope and assumptions
- evidence used
- proposed subdomains and contexts
- unresolved ambiguities
- confidence levels
- explicit cautions against overclaiming service boundaries

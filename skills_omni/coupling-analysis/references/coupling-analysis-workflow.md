# Coupling Analysis Workflow

Use this workflow when you need a reproducible, evidence-based coupling assessment.

## Phase 1: Scope

**Inputs**
- user question
- target repository or subsystem
- available artifacts

**Do**
- define the analysis target
- choose the primary analysis level: code, package, module, service, or team boundary
- identify whether the output is exploratory or a formal report

**Output**
- one-sentence scope statement
- explicit analysis level
- list of available evidence sources

**Stop if**
- the target area is too broad to analyze credibly in one pass
- the question is actually about domain boundaries or component sizing

## Phase 2: Structural extraction

**Inputs**
- source tree
- dependency declarations
- package/module structure

**Do**
- inventory relevant units and responsibilities
- record outgoing and incoming dependencies
- annotate dependency mechanisms such as import, HTTP, event, database, shared schema, or config

**Output**
- dependency inventory
- first-pass dependency graph or coupling matrix

## Phase 3: Strength classification

For each important edge, classify the strongest relevant coupling:
- intrusive
- functional
- model
- contract

Record the evidence used for the classification.

**Output**
- annotated edges with coupling type and rationale

## Phase 4: Distance assessment

Assess distance across:
- encapsulation boundary
- deployable boundary
- repository boundary
- team or ownership boundary

Increase effective distance when coordination cost is high.

**Output**
- distance rating per important edge

## Phase 5: Volatility assessment

Prefer Git evidence when possible.

**Do**
- inspect churn for the relevant paths
- inspect co-change where practical
- identify whether the area is core, supporting, or generic
- filter obvious noise such as generated or vendored files

**Output**
- volatility rating per unit or edge
- confidence note: observed or inferred

## Phase 6: Hidden/runtime coupling review

Check for coupling that static imports miss:
- synchronous call chains
- deployment order constraints
- shared databases
- distributed transactions
- schema/event dependencies
- operational coordination requirements

**Output**
- hidden coupling indicators list

## Phase 7: Synthesis

For each important edge, summarize:
- strength
- distance
- volatility
- evidence
- severity
- confidence
- recommendation

Use one of these dispositions:
- preserve
- monitor
- refactor
- re-architect

## Minimum acceptable evidence set

A strong assessment usually includes at least:
- one structural artifact
- one volatility artifact or explicit fallback note
- one semantic explanation for the major findings

If you cannot meet that bar, keep the conclusions tentative.

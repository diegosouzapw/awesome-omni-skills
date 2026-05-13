# Documentation Review Criteria

Use this file when the main skill says to classify the document before editing or reviewing it.

## Review Matrix

| Document type | Primary purpose | Required content | Preferred source of truth | Validation focus | Common failure modes |
| --- | --- | --- | --- | --- | --- |
| README | Orient a new reader and get them started | What the project is, who it is for, prerequisites, install/setup, basic usage, where to go next | Repository layout, actual setup steps, current commands, current package or runtime requirements | Setup commands work, paths are real, links resolve, examples match current behavior | Marketing language with no setup path, stale flags, missing prerequisites, broken quickstart |
| Tutorial | Teach by doing | Goal, assumptions, ordered steps, expected result, checkpoints, next step | Actual runnable workflow in the repo or supported environment | A new user can complete the task in sequence without hidden assumptions | Jumps between concepts, unexplained prerequisites, success state not shown |
| How-to guide | Solve one operational task | Preconditions, task steps, options, verification, rollback or failure handling when relevant | Operational workflow, current commands, supported deployment/runtime context | Task can be completed under stated assumptions | Too much background, missing edge conditions, unsafe commands |
| API reference | Describe endpoints or interfaces precisely | Auth model, endpoint/method, parameters, request schema, response schema, status codes, errors, examples, limits if known | OpenAPI spec, code annotations, schema files, generator inputs | Field names, required fields, enum values, examples, auth notes, and error semantics match the source spec | Hand-written examples drift from schema, missing required fields, undocumented auth or errors |
| Architecture overview | Explain system structure and major flows | Components, boundaries, dependencies, data/control flow, operational assumptions, links to detailed docs | Current codebase structure, deployment manifests, diagrams, active decisions | Diagrams and prose match current system boundaries and flows | Outdated components, hidden dependencies, no explanation of why the design exists |
| ADR | Record a decision and its consequences | Title, date/status, context, decision, alternatives considered, consequences | Actual engineering decision record and related implementation change | Decision is explicit, context is sufficient, consequences are honest | Retrospective justification, missing alternatives, no impact statement |
| Generated docs | Publish reference content from a generator | Output should reflect generator inputs and remain reproducible | OpenAPI, annotations, code comments, schema definitions, generator config | Output is regenerated from source; no manual-only drift | Manual edits to generated output, stale generation pipeline, undocumented source location |
| Code comments | Clarify local intent, contracts, or non-obvious behavior | Why, constraints, assumptions, side effects, invariants when useful | Actual code behavior and surrounding implementation | Comments still describe the code they sit beside | Restating obvious code, stale comments, misleading comments after refactor |

## Decision Rules by Document Type

### README

Approve when:
- A new contributor or evaluator can understand purpose and start quickly.
- The first successful path is short and current.
- Setup and usage examples match the repository.

Request changes when:
- Setup depends on hidden environment details.
- Commands reference renamed binaries, files, branches, or flags.
- The page mixes tutorial, reference, and architecture content without navigation.

### API Reference

Approve when:
- Request/response examples match the current schema.
- Required fields, auth requirements, and common errors are documented.
- Generated content is traceable to the source spec.

Request changes when:
- Prose contradicts the schema.
- Examples omit required fields or show invalid enum values.
- Status codes or auth behavior are implied but not stated.

### Architecture Overview

Approve when:
- The major components and flows match the current system.
- The document explains why the architecture exists, not only what exists.
- Readers can find deeper docs or ADRs from the overview.

Request changes when:
- The overview names retired systems or misses newly introduced components.
- Diagrams and text disagree.
- Operational consequences such as latency, retries, or failure boundaries are missing where relevant.

### ADR

Approve when:
- The decision is specific, dated, and contextualized.
- Alternatives are visible, even if briefly.
- Consequences include both gains and costs.

Request changes when:
- The record is only a summary of implementation.
- The decision statement is vague.
- There is no traceable consequence for future maintainers.

### Generated Docs

Approve when:
- The generator input is identified.
- Output can be reproduced.
- Manual edits do not create a second source of truth.

Request changes when:
- Generated output is patched manually with no source change.
- The repository gives no clue how the content was produced.
- Generated and authored documents contradict one another.

## Cross-Cutting Review Checks

Apply these checks regardless of document type:

- **Audience fit:** Is the document written for the intended reader?
- **Accuracy:** Does it match the repository or source specification?
- **Actionability:** Can the reader do something successfully from it?
- **Maintenance cost:** Will this age well, or is it over-specific in the wrong places?
- **Link integrity:** Do references, paths, anchors, and filenames still exist?
- **Version awareness:** Are versions, compatibility notes, and migrations clear when needed?
- **Generated/authored separation:** Is the true source of truth obvious?

## Suggested Review Output Format

Use this structure when reporting documentation review findings:

1. Scope reviewed
2. Document classification
3. Source of truth used
4. Findings by severity
5. Recommended changes
6. Validation completed
7. Remaining uncertainty

## Quick Severity Guide

- **High:** The document would cause user failure, incorrect integration, or architectural misunderstanding.
- **Medium:** The document is usable but incomplete, inconsistent, or likely to create support churn.
- **Low:** Style, structure, or readability issue that does not change technical correctness.

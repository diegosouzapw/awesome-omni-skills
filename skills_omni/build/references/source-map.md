# Frontend Research Source Map

Use this file while gathering evidence and before handoff. It is a coverage map, not a long-form report.

## 1. Intake completeness

| Question | Minimum evidence | Output artifact |
| --- | --- | --- |
| What user problem is being solved? | Request text, ticket, or clarified operator note | Feature summary |
| Who uses it and in which flow? | User story, screen, route, or journey note | Scope statement |
| What is explicitly out of scope? | Product note or operator clarification | Boundary list |
| What environments matter? | Browser/device/support matrix or explicit unknown | Compatibility assumptions |
| What non-functional constraints apply? | Accessibility, performance, analytics, compliance, rollout notes | Constraint list |

## 2. Evidence collection categories

### Compatibility

Collect:

- target browser or device requirements
- APIs, CSS features, input methods, or rendering assumptions that may vary by platform
- repository-local constraints such as SSR, hydration, webview, or legacy browser support

Expected synthesis output:

- supported environments
- implementation constraints or required fallbacks
- unresolved compatibility risks

### Accessibility

Collect:

- keyboard interaction expectations
- focus-management needs
- semantic structure requirements
- announcements for async state changes
- reduced motion, contrast, zoom, screen-reader, and touch considerations when relevant

Expected synthesis output:

- accessibility requirements
- interaction risks
- review checkpoints for implementation

### Performance

Collect:

- likely bundle impact
- render frequency or list-size concerns
- network round trips, prefetching, caching, and async loading implications
- image, media, or charting costs if applicable

Expected synthesis output:

- performance-sensitive surfaces
- validation checkpoints
- sequencing advice for optimization or instrumentation

### Progressive enhancement and resilience

Collect:

- behavior without JavaScript or before hydration when relevant
- loading, empty, error, offline, and slow-network states
- behavior under partial capability or denied permissions

Expected synthesis output:

- fallback expectations
- degraded-mode behavior
- resilience risks

### Integrations and delivery constraints

Collect:

- API dependencies
- feature flags
n- analytics or telemetry requirements
- design system dependencies
- routing, auth, storage, and state-management assumptions

Expected synthesis output:

- dependency list
- sequencing constraints
- coordination needs across teams or systems

## 3. Evidence grading

Prefer evidence in this order:

1. repository-local code, config, ADRs, and tracked product decisions
2. primary product or platform documentation
3. standards or platform references
4. prior implementation examples in the same codebase
5. operator inference, clearly labeled as inference

If evidence conflicts, record the conflict instead of flattening it.

## 4. Handoff readiness check

A research package is ready when it can answer yes to all of these:

- Is the feature goal stated in one sentence?
- Are assumptions and unknowns listed separately?
- Does every high-impact recommendation have provenance?
- Are compatibility expectations explicit or marked unresolved?
- Are accessibility implications turned into requirements, not side notes?
- Are performance concerns named with likely impact surfaces?
- Are fallback or degraded-mode expectations documented when relevant?
- Are dependencies, risks, and open questions assigned clear next actions?

## 5. Minimum artifact set

Before handing off, produce at least:

- feature summary
- scope and assumptions
- evidence summary
- requirements and constraints
- accessibility notes
- performance notes
- compatibility notes
- risks and open questions
- phased implementation recommendation

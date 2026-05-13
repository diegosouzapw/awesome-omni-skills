---
name: "build"
description: "Research and synthesis workflow for planning a major frontend feature. Use this skill when you need to turn a feature request into source-backed requirements, constraints, risks, and a handoff-ready implementation plan while preserving provenance from intake through delivery."
version: "0.0.1"
category: "frontend"
tags:
  - "build"
  - "frontend"
  - "research"
  - "synthesis"
  - "planning"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Unknown"
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "build"
family_name: "{Feature Name} Research"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/build"
upstream_skill: "skills/build"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "build"
---

# {Feature Name} Research

## Overview

This skill preserves the upstream `build` identity while making the research phase explicit, source-backed, and easy to hand off.

Use it to move a frontend feature from a rough request to an implementation-ready plan. The operator should finish with a package that another engineer or reviewer can follow without redoing discovery.

Expected outputs:

- a clarified feature scope
- a source-backed evidence set with provenance
- requirements and constraints tied to evidence
- browser, accessibility, performance, and progressive-enhancement considerations
- risks, open questions, and decisions needing escalation
- a handoff-ready implementation plan and tracking baseline

## When to Use

Use this skill when:

- the request is for a new frontend feature, a major enhancement, or a high-impact workflow change
- the user needs research, planning, and synthesis before implementation starts
- success depends on browser support, accessibility, performance, or integration constraints
- you need to preserve provenance from source material to final recommendations
- the output must be reviewable by someone who did not perform the original research

Do **not** use this skill when:

- the task is a small isolated bug fix with already-known root cause
- the user wants immediate implementation and the requirements are already settled
- the work is primarily backend, infrastructure, or deployment research with no frontend decision surface
- there are no credible sources available and the operator would be forced to guess

## Required Intake

Before researching, capture the minimum intake needed to avoid ambiguous output:

1. **Feature name and goal** — what problem is being solved and for whom.
2. **Target users and key flows** — the main user journeys affected.
3. **In-scope / out-of-scope boundaries** — what this phase should and should not decide.
4. **Target environments** — supported browsers, devices, rendering context, localization, auth state, offline assumptions.
5. **Non-functional expectations** — accessibility, performance, analytics, compliance, security, rollout, observability.
6. **Known integrations** — APIs, state, design system, routing, storage, feature flags, or third-party dependencies.
7. **Decision deadline and handoff format** — who will consume the output and what form they need.

If any of these are missing, call that out early and mark the downstream plan as provisional.

## Workflow

1. **Confirm activation and scope**
   - Restate the feature request in one sentence.
   - Confirm this is a research-and-synthesis task, not direct implementation.
   - Identify missing intake fields before gathering evidence.

2. **Build the research frame**
   - Define the questions that must be answered for implementation to start.
   - Separate product questions from technical questions.
   - Decide what counts as authoritative evidence for each question.

3. **Gather evidence with provenance**
   - Collect sources that answer compatibility, accessibility, performance, progressive-enhancement, and integration concerns.
   - Record where each finding came from.
   - Prefer primary documentation and repository-local evidence over assumptions.
   - Use `references/source-map.md` to keep coverage consistent.

4. **Synthesize findings into requirements**
   - Convert evidence into concrete requirements, constraints, and tradeoffs.
   - Identify unknowns that block implementation.
   - Distinguish confirmed facts from inferred recommendations.

5. **Assess frontend delivery risks**
   - Check browser support implications.
   - Check keyboard, screen-reader, semantics, and focus-management impact.
   - Check likely performance costs such as bundle size, rendering work, network load, and hydration behavior.
   - Check whether the feature still works in reduced-capability environments.

6. **Draft the implementation-ready plan**
   - Produce a phased plan with milestones or workstreams.
   - Name dependencies, sequencing, and review checkpoints.
   - Include decision points that require product or design sign-off.

7. **Prepare handoff artifacts**
   - Deliver a concise summary, source-backed requirements list, open questions, risks, and next actions.
   - Keep a trace from each important recommendation back to evidence.
   - If useful, mirror the structure shown in `examples/synthesis-example.md`.

## Output Structure

A strong final handoff usually contains:

- **Feature summary**
- **Assumptions and missing inputs**
- **Evidence summary with source links or provenance notes**
- **Functional requirements**
- **Constraints and compatibility notes**
- **Accessibility considerations**
- **Performance considerations**
- **Progressive-enhancement or fallback expectations**
- **Risks and open questions**
- **Recommended implementation phases**
- **Immediate next steps**

## Examples

### Example 1: Clarify ambiguous intake

**Input**

```text
Research a new dashboard filter panel for the analytics page.
```

**Better operator response**

```text
Before I produce a plan, I need the target browsers, expected keyboard interactions,
whether filters must persist across navigation, and whether the panel must work without
JavaScript during initial page load. I can start with provisional assumptions, but they
should be marked as unconfirmed in the handoff.
```

**Why this is better**

It prevents the synthesis from silently baking in unsupported assumptions.

### Example 2: Evidence-backed requirement

**Input finding**

```text
The feature adds a popover-based filter panel with async result updates.
```

**Expected synthesized output**

```text
Requirement: The filter panel must support keyboard-only operation, visible focus,
and programmatic association between the trigger, panel title, and active filter state.

Evidence basis: Interactive overlays create accessibility and focus-management risk,
so the implementation plan must include semantic roles, focus entry/exit behavior,
and announcement of result changes.
```

### Example 3: Concrete handoff shape

Open `examples/synthesis-example.md` for a full sample showing intake, evidence, synthesis, and final plan in one place.

## Best Practices

Do:

- state what is known, unknown, and assumed
- tie high-impact recommendations to specific evidence
- separate source facts from your own synthesis
- treat browser support targets as an explicit requirement, not a guess
- include accessibility and performance review even when the request does not mention them
- make open questions actionable by naming the decision owner or blocking effect
- keep recommendations implementation-oriented rather than purely descriptive

Do not:

- present inferred behavior as confirmed product intent
- rely on a single source when compatibility or standards behavior is uncertain
- skip fallback expectations for interaction-heavy features
- bury risks in narrative prose without calling out impact
- hand off a plan that lacks sequencing, dependencies, or review checkpoints
- over-specify implementation details that the evidence does not support

## Troubleshooting

**Symptoms:** The feature request is broad and every source seems relevant.

**Solution:** Reduce the scope to the minimum user flow that must be implementable first. Write explicit in-scope and out-of-scope bullets before continuing research.

**Symptoms:** Browser support requirements are missing or contradictory.

**Solution:** Mark compatibility as an unresolved input, document the assumption you are using temporarily, and call out which recommendations may change once support targets are confirmed.

**Symptoms:** Accessibility concerns appear late, after the plan already assumes a specific interaction model.

**Solution:** Re-open the synthesis step and convert accessibility findings into first-class requirements, not postscript notes. If needed, change the proposed interaction model.

**Symptoms:** Performance risk is suspected but not quantified.

**Solution:** State the likely performance surface clearly—bundle growth, network calls, render frequency, list size, hydration, media cost—and add validation checkpoints to the implementation plan instead of claiming performance is acceptable.

**Symptoms:** Sources disagree or do not fully answer the implementation question.

**Solution:** Record the conflict, prioritize primary documentation and repository-local evidence, and turn the gap into an explicit decision or experiment rather than inventing certainty.

## Additional Resources

- [references/source-map.md](references/source-map.md) — Open this when gathering or reviewing evidence. It provides a compact coverage matrix so compatibility, accessibility, performance, and progressive-enhancement checks are not missed.
- [examples/synthesis-example.md](examples/synthesis-example.md) — Open this when you need a concrete model for turning intake and evidence into a handoff-ready research package.

## Related Skills

No additional local related skills were provided in the source context.

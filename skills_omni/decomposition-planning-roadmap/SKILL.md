---
name: "decomposition-planning-roadmap"
description: "Decomposition planning and roadmap workflow skill. Use this skill when a user needs a phased, evidence-based plan for breaking apart a monolith, deciding extraction order, choosing migration patterns, sequencing dependencies, and tracking migration progress without forcing premature microservices adoption. Do not use it for initial domain discovery or component sizing; use upstream prerequisite skills first when domain boundaries, dependency evidence, or inventory are still missing."
version: "0.0.1"
category: "product"
tags:
  - "decomposition-planning-roadmap"
  - "monolith-modernization"
  - "migration-roadmap"
  - "service-extraction"
  - "prioritization"
  - "strangler-fig"
  - "bounded-contexts"
  - "architecture-planning"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "decomposition-planning-roadmap"
family_name: "Decomposition Planning and Roadmap"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/decomposition-planning-roadmap"
upstream_skill: "skills/decomposition-planning-roadmap"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "decomposition-planning-roadmap"
---

# Decomposition Planning and Roadmap

## Overview

This skill creates a practical decomposition roadmap for incrementally modernizing a monolith. It helps the operator decide **what to extract, in what order, under which constraints, with what success criteria, and with what rollback path**.

Use it to turn architectural intent into a phased migration plan that is evidence-based rather than aspirational. The workflow assumes that decomposition should usually be **incremental**, should preserve optionality, and should avoid creating a distributed monolith.

This skill preserves the original upstream intent: assess current state, identify required decomposition patterns, prioritize work, create phased roadmaps, generate architecture stories, and track progress. The enhanced version adds stronger execution guidance for:

- activation boundaries and prerequisites
- prioritization beyond simple risk/value scoring
- migration pattern selection per candidate slice
- measurable milestone exit criteria
- release, cutover, and rollback planning
- roadmap governance and re-planning

## When to Use This Skill

Use this skill when the user asks for:

- "What order should I extract services?"
- "Plan my monolith-to-microservices migration"
- "Create a decomposition roadmap"
- "Prioritize what to split first"
- "Build a phased modernization plan"
- "Track progress across decomposition phases"
- "Decide which capabilities should stay in the monolith for now"

Use this skill only when there is at least some evidence for the current state, such as:

- a component inventory or module map
- dependency/coupling analysis
- domain hypotheses or bounded-context candidates
- known business outcomes and constraints
- some understanding of data ownership and integration points

## Do Not Use This Skill When

Do **not** use this skill as a substitute for upstream discovery work.

- If bounded contexts are still unclear, use `@domain-analysis` first.
- If components have not been identified or sized, use `@component-identification-sizing` first.
- If dependency hotspots are missing, use a dependency analysis skill or produce that evidence first.
- If the task is implementation of one specific extraction, hand off to a service extraction or delivery skill.
- If the task is detailed API/interface design, hand off to an API contract or service design skill.

## Intake Checklist

Before producing a roadmap, confirm as many of these as possible:

- Business driver: cost, speed, reliability, compliance, scaling, team autonomy, modernization deadline
- Scope: product area, business capability, bounded-context candidates, excluded areas
- Current-state evidence: inventory, dependency graph, coupling analysis, deployment topology
- Data concerns: shared schema, transactional boundaries, reporting dependencies, migration constraints
- Operating constraints: release windows, regulatory requirements, platform readiness, observability maturity
- Team model: ownership today, target ownership, cognitive load, stream alignment
- Success metrics: delivery speed, deployability, incident rate, lead time, rollback time, SLO readiness
- Timeline confidence: fixed date, target range, or exploratory planning only

If several items are missing, say so explicitly and produce a **conditional roadmap** with assumptions rather than false precision.

## Operating Table

| Situation | Minimum evidence needed | Start here | Output | Next action |
| --- | --- | --- | --- | --- |
| Need a roadmap but domains are disputed | Domain hypotheses exist but are not agreed | Stop and route to `@domain-analysis` | Boundary clarification request | Do not sequence extraction yet |
| Need a roadmap but no component inventory exists | Basic codebase scope only | Stop and route to `@component-identification-sizing` | Inventory/sizing request | Build roadmap after inventory exists |
| Dependency hotspots are unknown | Modules/components known, dependency data missing | Gather coupling/dependency evidence before prioritizing | Dependency summary | Re-run prioritization |
| Data ownership is unclear | Candidate slices identified, data writes unclear | Use `references/migration-risk-register-template.md` | Risk register with blockers | Defer extraction or plan coexistence |
| Stakeholders want extraction order now | Partial evidence exists | Use `references/prioritization-scorecard.md` | Ranked candidate slices with assumptions | Review tradeoffs with stakeholders |
| Team ownership is weak or overloaded | Candidate slice exists, owner unclear | Score team readiness explicitly | Prioritization note with ownership risk | Delay or re-scope slice |
| Need a phased roadmap | Inputs are mostly ready | Use `references/decomposition-roadmap-template.md` | Roadmap draft | Review milestones and replan triggers |
| Need measurable milestones | A roadmap draft already exists | Use `references/fitness-functions-and-metrics.md` | Exit criteria and dashboard metrics | Attach to each phase |
| Need handoff/routing | Task drifts into adjacent work | Use `agents/decomposition-router.md` | Explicit handoff guidance | Move to prerequisite or adjacent skill |

## Workflow

Follow this workflow in order. If a step fails, do not fake certainty in later steps.

1. **Confirm outcomes and constraints**
   - State why decomposition is being considered.
   - Capture business drivers, constraints, and unacceptable tradeoffs.
   - Ask whether the goal is partial modernization, selective extraction, or long-term service-oriented evolution.

2. **Assess roadmap readiness**
   - Verify whether component inventory, dependency evidence, and domain hypotheses exist.
   - Mark missing prerequisites.
   - If prerequisites are absent, stop and route to the appropriate prerequisite skill instead of inventing them.

3. **Assess current state**
   - Review component inventory, common/shared components, flattened structure, dependencies, domain grouping status, and any existing extractions.
   - Record what is complete, in progress, missing, and blocking.
   - Preserve upstream pattern-sequence intent where applicable:
     1. Identify and size components
     2. Gather common domain components
     3. Flatten components
     4. Determine component dependencies
     5. Create component domains
     6. Create domain services

4. **Identify candidate seams**
   - For each candidate capability or component group, identify:
     - business capability served
     - boundary clarity
     - dependency hotspots
     - data ownership and write path
     - upstream/downstream integrations
     - current deployment coupling
   - Explicitly ask: **should this remain in the monolith for now?**

5. **Choose migration strategy per candidate**
   - Select the least risky viable pattern for each slice:
     - keep in monolith for now
     - internal modularization first
     - strangler-style extraction
     - facade/proxy coexistence
     - anti-corruption layer around legacy dependencies
     - event-driven separation where appropriate
   - Do not assume every candidate becomes a service immediately.

6. **Prioritize candidate slices**
   - Score each candidate using weighted criteria from `references/prioritization-scorecard.md`.
   - Recommended factors:
     - business value
     - seam clarity
     - data ownership clarity
     - coupling/dependency complexity
     - rollback complexity
     - compliance/security sensitivity
     - observability/platform readiness
     - team ownership/readiness
   - Explain why some high-value slices should still be deferred.

7. **Build the phased roadmap**
   - Group work into phases such as:
     - analysis and preparation
     - modular refactoring / domain organization
     - first extraction(s)
     - coexistence hardening
     - optimization / follow-on extraction
   - For each phase define:
     - objective
     - candidate slices
     - prerequisites
     - risks
     - milestones
     - release strategy
     - rollback path
     - replan triggers

8. **Define milestone exit criteria**
   - Make milestones measurable rather than rhetorical.
   - Examples:
     - independent deployment demonstrated
     - API contract tests passing
     - service owns writes for its data set
     - rollback rehearsed successfully
     - dashboard and alerts live
     - lead time or failure-rate trend improved

9. **Generate delivery artifacts**
   - Convert roadmap phases into architecture stories, ADRs, risks, and stakeholder review notes.
   - Use local templates rather than freeform prose when possible.

10. **Set up tracking and governance**
   - Track progress using architecture and delivery metrics, not just service counts.
   - Re-baseline the roadmap when discovery invalidates assumptions.
   - Treat the roadmap as a living plan with confidence levels.

## Output Format

Produce a response in this structure unless the user asks for another format:

```markdown
# Decomposition Roadmap

## 1. Objectives and Constraints
- Business drivers
- Constraints
- Assumptions
- Confidence level

## 2. Current State Assessment
- Completed groundwork
- Missing prerequisites
- Major coupling/data findings
- Existing extractions

## 3. Candidate Slices
| Candidate | Value | Seam clarity | Data ownership | Coupling | Team readiness | Decision |
| --- | --- | --- | --- | --- | --- | --- |

## 4. Prioritized Work Plan
1. Candidate / slice
   - Why now
   - Preconditions
   - Migration strategy
   - Main risks

## 5. Phased Roadmap
### Phase N
- Objective
- Included slices
- Milestones
- Exit criteria
- Release/cutover plan
- Rollback plan
- Replan triggers

## 6. Architecture Stories / Work Items
- Story title
- Outcome
- Acceptance criteria
- Dependencies

## 7. Risk Register Summary
- Top risks
- Mitigations
- Deferred decisions

## 8. Metrics and Progress Tracking
- Fitness functions
- Delivery metrics
- Operability metrics

## 9. Recommended Next Skills or Workstreams
- Prerequisites still needed
- Adjacent implementation skills
```

## Examples

### Example 1: Ask for an evidence-based extraction order

```text
Create a decomposition roadmap for this monolith. Prioritize extraction candidates using business value, seam clarity, data ownership, coupling, and team readiness. If a capability should stay in the monolith for now, say so explicitly.
```

**Expected shape:** a ranked candidate list, rationale, deferred items, and a phased roadmap.

### Example 2: Build a roadmap with uncertainty called out

```text
Plan our migration from a monolith to services, but we only have a rough module inventory and a partial dependency graph. Produce a conditional roadmap with assumptions, confidence levels, and replan triggers instead of pretending the sequence is final.
```

**Expected shape:** assumptions-first roadmap that highlights prerequisite discovery work before irreversible extraction.

### Example 3: Compare candidate slices before committing

```text
Using the prioritization scorecard, compare Billing, Notifications, Customer Profile, and Reporting as first extraction candidates. Explain why the highest business-value slice might not be the best first move.
```

**Expected shape:** a score table and a narrative explaining tradeoffs, including data and team constraints.

### Example 4: Create a stakeholder-ready roadmap packet

```text
Create a phased decomposition roadmap for the Order Management monolith and include milestone exit criteria, rollback expectations, key risks, and confidence ranges suitable for stakeholder review.
```

**Expected shape:** a roadmap plus review-ready assumptions, risks, and measurable milestones.

### Example 5: Produce a worked roadmap from the local template

Use the local support files to structure the output:

- `references/decomposition-roadmap-template.md`
- `references/prioritization-scorecard.md`
- `references/migration-risk-register-template.md`
- `references/fitness-functions-and-metrics.md`

## Best Practices

### Do

- Start with business outcomes and migration constraints before sequencing technical work.
- Require at least partial evidence for boundaries, dependencies, and data ownership.
- Prefer incremental modernization over big-bang rewrites.
- Treat service extraction as one option, not the default answer.
- Choose a migration strategy per slice rather than applying one pattern universally.
- Prioritize slices that improve deployability and ownership with manageable coupling.
- Use explicit rollback and coexistence planning for early extractions.
- Define measurable phase exit criteria.
- Track both architecture outcomes and delivery outcomes.
- Re-plan when discovery changes the evidence.

### Do Not

- Do not extract services before seams are credible.
- Do not assume every business capability needs its own service now.
- Do not use a fixed timeline to hide uncertainty.
- Do not ignore shared database coupling or transactional boundaries.
- Do not optimize for service count as a success metric.
- Do not create a distributed monolith by preserving tight runtime coupling after extraction.
- Do not prioritize only by business value while ignoring data and ownership risk.
- Do not move forward without naming blockers and prerequisites.

### Prioritization Guidance

A strong first slice is often **not** the most business-critical capability. It is frequently the slice that best balances:

- clear boundary
- low to moderate coupling
- manageable data separation
- an available owning team
- low rollback cost
- visible business value

This means a lower-profile capability can be the right first extraction if it proves deployability, ownership transfer, observability, and coexistence patterns safely.

### Milestone Guidance

Good milestones describe observable outcomes, for example:

- independent build and deployment pipeline exists
- routing/facade sends a controlled subset of traffic to the new slice
- ownership of writes has moved to the new boundary
- operational dashboards and alerts exist
- rollback can be completed inside an agreed time window
- change failure rate remains within tolerated limits during rollout

## Troubleshooting

### Problem: The roadmap jumps to service extraction before boundaries are proven

**Symptoms:** Early phases immediately propose service creation, but domain boundaries are still disputed or dependency analysis is incomplete.

**Solution:** Pause the roadmap at prerequisite work. Re-scope Phase 1 toward domain clarification, dependency mapping, and data ownership analysis. If necessary, hand off to `@domain-analysis` or `@component-identification-sizing` before sequencing extractions.

### Problem: The first extraction candidate is high value but deeply data-entangled

**Symptoms:** The proposed first slice shares tables, transactions, or synchronous workflows with large parts of the monolith.

**Solution:** Defer direct extraction. Consider modularization first, anti-corruption layers, reporting separation, or extracting a lower-coupling supporting capability as the first slice. Record the entanglement explicitly in the risk register.

### Problem: The plan risks creating a distributed monolith

**Symptoms:** The extracted service still depends on shared database access, constant synchronous calls, or tightly coupled release coordination.

**Solution:** Rework the migration strategy. Introduce clearer ownership boundaries, coexistence/facade layers, API contracts, and data ownership transition plans. Delay extraction if coupling is not reducing in practice.

### Problem: Stakeholders want a fixed timeline, but discovery is changing the order

**Symptoms:** New findings invalidate the roadmap, but stakeholders still expect the original sequence and dates.

**Solution:** Re-baseline using confidence ranges, assumptions, and replan triggers. Separate committed near-term work from lower-confidence later phases. Explain that discovery is reducing risk, not causing failure.

### Problem: The first slice cannot be operated independently

**Symptoms:** The candidate can be coded, but it has no independent deployment path, no observability, weak auth integration, or no rollback path.

**Solution:** Add platform-readiness work to the roadmap before extraction. Treat CI/CD, observability, auth, release controls, and rollback rehearsal as prerequisites for that slice.

### Problem: Prioritization is stuck in opinion wars

**Symptoms:** Teams disagree on what should be extracted first, and each argument uses different criteria.

**Solution:** Use a visible scorecard with weighted criteria and assumptions. Score each candidate against the same dimensions, show why deferred items are deferred, and document exceptions in an ADR.

## Related Skills

Use adjacent skills deliberately:

- `@domain-analysis` — when bounded contexts or business capability boundaries are disputed
- `@component-identification-sizing` — when the system inventory or sizing evidence is missing
- `@dependency-analysis` — when extraction sequencing is blocked by unknown coupling or runtime dependencies
- `@service-design` or `@api-contract-design` — when a candidate slice is selected and interface design is the next step
- `@observability` — when milestone exit criteria require dashboards, alerts, or production-readiness checks
- `@release-planning` or rollback-focused skills — when cutover, coexistence, and rollback need detailed implementation planning
- security/compliance review skills — when regulated data, auditability, or policy controls materially affect sequencing

If a prerequisite skill has not been run, say so explicitly instead of inventing its outputs.

## Additional Resources

Local support pack:

- [Decomposition roadmap template](references/decomposition-roadmap-template.md)
- [Prioritization scorecard](references/prioritization-scorecard.md)
- [Migration risk register template](references/migration-risk-register-template.md)
- [Fitness functions and metrics reference](references/fitness-functions-and-metrics.md)
- [Sample decomposition roadmap](references/sample-decomposition-roadmap.md)
- [Sample prioritization matrix](references/sample-prioritization-matrix.md)
- [Decomposition router guidance](agents/decomposition-router.md)

## Notes Preserved From Upstream Intent

The original upstream workflow centered on:

1. assessing current state
2. identifying required decomposition patterns
3. prioritizing work
4. creating phased roadmaps
5. generating architecture stories
6. tracking progress

That intent is preserved here. The main enhancement is stronger operator guidance for deciding **when not to extract yet**, how to sequence work with clearer evidence, and how to attach measurable milestones and risk controls to the roadmap.

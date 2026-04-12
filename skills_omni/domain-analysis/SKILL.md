---
name: "domain-analysis"
description: "Subdomain Identification & Bounded Context Analysis workflow skill. Use this skill when a user needs to identify business domains, classify subdomains, map bounded contexts, and evaluate candidate service boundaries in a codebase using DDD strategic design. Use for questions like \\"what are the domains in this codebase?\\", \\"where are the bounded contexts?\\", \\"how should we classify core/supporting/generic subdomains?\\", or \\"what boundaries should remain modular versus become services?\\" Do not use it for simple package grouping (use domain-identification-grouping) or dependency-only analysis (use coupling-analysis)."
version: "0.0.1"
category: "development"
tags:
  - "domain-analysis"
  - "ddd"
  - "bounded-context"
  - "subdomain"
  - "service-boundary"
  - "ubiquitous-language"
  - "strategic-design"
  - "architecture"
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
family_id: "domain-analysis"
family_name: "Subdomain Identification & Bounded Context Analysis"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/domain-analysis"
upstream_skill: "skills/domain-analysis"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "domain-analysis"
---

# Subdomain Identification & Bounded Context Analysis

## Overview

Use this skill to discover business domains in a codebase, classify subdomains as Core/Supporting/Generic, identify candidate bounded contexts, and explain where boundaries are semantically meaningful.

This is a **strategic design** skill, not a direct implementation or extraction plan. Its goal is to produce an evidence-based domain map and bounded-context recommendations that can later inform modular monolith boundaries, service decomposition, integration design, or ADRs.

The original upstream intent is preserved: analyze code and surrounding artifacts for domain cohesion, language boundaries, and cross-domain issues. This enhanced version makes the workflow more operational by emphasizing business evidence, confidence levels, context-map relationships, and explicit caution against deriving service boundaries from repository layout alone.

## When to Use This Skill

Use this skill when the user asks questions such as:

- "What are the business domains in this codebase?"
- "Identify the bounded contexts here."
- "Which parts are Core, Supporting, or Generic subdomains?"
- "Where should semantic boundaries exist before we refactor?"
- "Should this stay a modular monolith boundary or become a separate service later?"
- "Why does this part of the system feel linguistically inconsistent or tightly coupled?"

Use it when you need to:

- map business capabilities to domain areas
- analyze ubiquitous language and term collisions
- assess domain cohesion and low-cohesion hotspots
- propose candidate bounded contexts and integration patterns
- produce a reviewable context map with rationale and confidence

## Do Not Use This Skill When

Do **not** use this skill for:

- simple grouping of existing packages or folders into rough domains without deeper semantic analysis; use `domain-identification-grouping`
- dependency-graph or coupling-only analysis; use `coupling-analysis`
- immediate service extraction decisions without business, ownership, and operational evidence
- runtime incident debugging, performance analysis, or infrastructure topology work
- pure team-topology redesign without domain evidence

> A bounded context is **not automatically** a microservice. A strong domain boundary may still remain inside a modular monolith.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First pass with limited context | `references/domain-evidence-checklist.md` | Forces evidence collection beyond code structure alone |
| Need to classify subdomains | `references/subdomain-classification-matrix.md` | Adds objective criteria and confidence-driven classification |
| Need to define a proposed bounded context | `references/bounded-context-canvas.md` | Captures language, ownership, integrations, and consistency needs |
| Need cross-context relationships | `references/context-map-template.md` | Produces a reviewable context map, not isolated buckets |
| Ambiguous or conflicting terminology | `references/glossary-by-context-template.md` | Makes term collisions explicit by context |
| Need routing or handoff guidance | `agents/domain-analysis-router.md` | Helps redirect to adjacent skills when the task drifts |
| Need a report example | `examples/domain-analysis-report-example.md` | Shows the expected output packet |
| Need a modular-monolith caution example | `examples/modular-monolith-vs-microservice-boundary-example.md` | Prevents premature service recommendations |

## Workflow

Follow the workflow in order. Treat code as important evidence, but not the only evidence.

### 1. Establish the analysis scope

Define:

- the product or business area being analyzed
- the repositories, modules, or packages in scope
- the artifacts available besides code: docs, ADRs, API specs, UI labels, issue tracker, commit history, tests, sample payloads
- whether the goal is discovery, refactoring preparation, or boundary validation

If scope is unclear, state assumptions explicitly before proposing domains.

### 2. Collect business evidence first

Build an initial inventory from the most business-revealing artifacts available:

- business capabilities
- actors and roles
- use cases and workflows
- domain events
- commands or user intents
- key nouns and verbs in UI, APIs, docs, and code
- ownership signals such as teams, modules, or release cadence
- critical data lifecycles and invariants

Good inputs include:

- API names and payloads
- screens and user-facing labels
- domain docs and tickets
- acceptance tests and end-to-end tests
- event names and message schemas
- domain model classes and application services

### 3. Mine the codebase for corroborating concepts

Scan code for domain concepts rather than technical layers.

Look for:

- **Entities / aggregates / domain objects**: `*Entity`, model classes, value objects, aggregate roots
- **Use cases / commands / handlers**: `*UseCase`, `*Command`, `*Handler`
- **Business services**: `*Service`, `*Manager` when they express business operations
- **Entry points**: `*Controller`, `*Resolver`, jobs, workflows, consumers
- **Events**: domain events, integration events, outbox payloads
- **Policies / rules**: validation logic, decision trees, eligibility rules, pricing rules, lifecycle transitions

Do not infer domains from folder names like `controllers/`, `services/`, `repositories/`, or `shared/` alone.

### 4. Build a ubiquitous-language inventory

Group terms by likely meaning and business usage.

For each important term, record:

- term
- meaning in context
- related terms
- where it appears
- whether the same term means something different elsewhere

Examples:

- `Customer` in Billing may mean account owner
- `Customer` in Support may mean ticket requester
- `Order` in Fulfillment may mean a shipping instruction
- `Order` in Sales may mean a commercial commitment

If the same term changes meaning, that is strong evidence of a bounded-context boundary.

Use `references/glossary-by-context-template.md`.

### 5. Identify candidate subdomains

A subdomain usually has most of these characteristics:

- distinct business capability
- recognizable business value
- cohesive vocabulary
- multiple related concepts working together
- identifiable workflows or events
- meaningful policies or constraints

Initial examples might include:

- Billing / Subscription
- Identity / Access
- Catalog / Content
- Fulfillment / Logistics
- Support / Case Management
- Analytics / Reporting
- Notifications / Communications

At this stage, propose candidates rather than forcing final boundaries.

### 6. Classify each subdomain

Classify each candidate as **Core**, **Supporting**, or **Generic** using objective signals.

Use `references/subdomain-classification-matrix.md` and record:

- whether it differentiates the business competitively
- policy complexity
- domain expertise required
- regulatory or financial sensitivity
- replaceability with commodity software
- operational criticality
- confidence level: High / Medium / Low

Rules of thumb:

- **Core**: strong differentiator, high policy complexity, high business uniqueness
- **Supporting**: business-specific and necessary, but not the main differentiator
- **Generic**: common capability, often standardized or replaceable

Do not assume Generic means unimportant. Commodity capabilities can still be operationally critical.

### 7. Assess cohesion within each candidate area

Check whether grouped concepts actually belong together.

Use these dimensions:

- **Linguistic cohesion (0-3)**: shared vocabulary and meaning
- **Workflow cohesion (0-3)**: involved in the same use cases or outcomes
- **Data cohesion (0-2)**: shared lifecycle, invariants, or ownership
- **Change cohesion (0-2)**: tends to change for the same business reasons

Interpretation:

- `8-10`: strong subdomain candidate
- `5-7`: plausible but needs review
- `0-4`: likely mixed concerns or weak grouping

Low cohesion does not always mean bad code. It may mean the boundary is wrong, transitional, or underspecified.

### 8. Detect domain-analysis anti-patterns

Flag common strategic-design issues such as:

- technical layers masquerading as domains
- one giant shared model with overloaded terms
- shared database interpreted as semantic unity
- generic capabilities embedded in core workflows
- one class or service spanning unrelated business concerns
- the same term used differently without explicit translation

For each issue, capture:

- location or evidence
- why it is a domain problem
- affected concepts
- severity
- recommendation

### 9. Propose candidate bounded contexts

For each promising subdomain or subdomain cluster, define a candidate bounded context.

A bounded context should have:

- a clear linguistic boundary
- an internally consistent model
- explicit responsibilities
- clear ownership of important concepts or data
- explicit integration seams with other contexts

Use `references/bounded-context-canvas.md`.

For each context, document:

- context name
- responsibilities
- ubiquitous language
- in-scope concepts
- out-of-scope concepts
- owned data or source-of-truth areas
- integration needs
- consistency requirements
- owner team if known
- confidence and missing evidence

### 10. Map relationships between contexts

Do not stop at isolated domain buckets. Produce a context map.

Use relationship patterns such as:

- Customer / Supplier
- Conformist
- Anti-Corruption Layer
- Shared Kernel
- Open Host Service
- Published Language

Prefer explicit contracts and translation over hidden coupling.

Use `references/context-map-template.md` and note:

- upstream/downstream direction
- integration style: API, event, batch, shared library, shared schema
- translation needs
- coupling risks
- whether the current implementation should be preserved temporarily

### 11. Evaluate service-boundary implications carefully

Only suggest a separate service boundary when there is evidence for operational autonomy.

Before recommending extraction, check:

- independent data ownership is possible
- transactional consistency needs are understood
- API or event contracts can be made explicit
- there is a clear owner team or operating model
- release cadence can differ meaningfully
- separation creates measurable benefit
- splitting does not create excessive coordination overhead

If this evidence is weak, recommend:

- a **candidate bounded context**
- a **modular monolith boundary**
- or **further validation required**

Use `examples/modular-monolith-vs-microservice-boundary-example.md` as a caution model.

### 12. Produce the final analysis packet

Your final output should include:

1. **Scope and assumptions**
2. **Evidence sources used**
3. **Subdomain catalog** with classification and confidence
4. **Glossary by context**
5. **Candidate bounded contexts**
6. **Context map relationships**
7. **Hotspots and ambiguities**
8. **Boundary recommendations**
9. **Service-boundary caution notes**
10. **Next validation steps**

When evidence is incomplete, label conclusions as provisional.

## Output Format

Use this structure for deliverables.

### Subdomain Catalog

| Subdomain | Classification | Capability | Key concepts | Cohesion | Confidence | Evidence |
| --- | --- | --- | --- | --- | --- | --- |
| Billing | Core | Manage subscriptions, invoicing, charging | Subscription, Invoice, Payment, Plan | 9/10 | High | API names, events, billing policies |

### Bounded Context Summary

| Context | Purpose | Owned language/data | Related subdomains | Confidence | Boundary recommendation |
| --- | --- | --- | --- | --- | --- |
| BillingContext | Subscription lifecycle and charging | Subscription, Invoice, Payment ledger | Billing | High | Strong bounded context; may justify separate service later |

### Context Relationships

| Upstream | Downstream | Pattern | Interface | Risk | Recommendation |
| --- | --- | --- | --- | --- | --- |
| IdentityContext | BillingContext | Customer/Supplier | API + published customer status events | Medium | Avoid direct DB access; translate identity terms |

### Issues / Hotspots

| Severity | Issue | Evidence | Why it matters | Recommendation |
| --- | --- | --- | --- | --- |
| High | Billing service sends email directly and owns template rules | `BillingService`, mail adapter calls | Generic communication concerns embedded in core flow | Separate notification policy from billing core |

## Examples

### Example 1: Full analysis request

```text
Use @domain-analysis on this codebase. Identify candidate subdomains, classify them as Core/Supporting/Generic, map bounded contexts, and say which boundaries should remain inside a modular monolith for now. Include confidence levels and missing evidence.
```

### Example 2: Domain-first analysis from limited evidence

```text
Analyze these API routes, event names, UI labels, and service classes. Do not group by technical layers. Start from business capabilities and language, then produce a glossary-by-context, subdomain catalog, and candidate context map.
```

### Example 3: Worked report format

See [domain-analysis-report-example](examples/domain-analysis-report-example.md).

### Example 4: Avoid premature extraction

See [modular-monolith-vs-microservice-boundary-example](examples/modular-monolith-vs-microservice-boundary-example.md).

### Example 5: Resolve ambiguous language

See [ambiguous-language-troubleshooting-example](examples/ambiguous-language-troubleshooting-example.md).

## Best Practices

### Do

- Start from business capabilities, workflows, events, and language before code structure
- Use at least **two evidence types** per major boundary recommendation
- Record confidence explicitly when business context is missing
- Treat term collisions as first-class evidence
- Capture upstream/downstream relationships, not just isolated domain groups
- Prefer Anti-Corruption Layer, Published Language, or explicit APIs over shared-database coupling
- Distinguish strategic domain analysis from implementation design
- Recommend modular boundaries when service autonomy is not yet justified
- Validate with domain experts when available

### Do Not

- Do not derive domains directly from package names or technical layers
- Do not assume one bounded context equals one deployable microservice
- Do not treat shared storage as proof of one semantic model
- Do not force a single global meaning for overloaded business terms
- Do not classify Core/Supporting/Generic as objective fact when evidence is weak
- Do not over-segment the system into many tiny contexts without autonomy evidence
- Do not hide uncertainty; mark missing data and open questions

### Classification Heuristics

- **Core Domain**: business differentiation, high policy complexity, business-specific advantage
- **Supporting Subdomain**: necessary business capability with real domain rules but lower differentiation
- **Generic Subdomain**: common capability, often standardized, still possibly critical operationally

### Boundary Heuristics

A bounded context is strongest when:

- terms are unambiguous inside the boundary
- policies and invariants are coherent
- workflows cluster around the same business outcomes
- data ownership can be explained clearly
- external interactions require explicit translation or contracts

## Troubleshooting

### Problem: Everything looks like one domain because the code uses generic naming

**Symptoms:** Classes are named `Manager`, `Service`, `Processor`, or `Data`; business terms are sparse; folder structure is technical.
**Solution:** Reconstruct workflows from APIs, UI labels, acceptance tests, events, tickets, and commit history. Build a glossary from nouns and verbs used outside infrastructure. Mark confidence as low until business language is clearer.

### Problem: Technical layers are being mistaken for domains

**Symptoms:** Proposed domains are `controllers`, `services`, `repositories`, or `shared` rather than business capabilities.
**Solution:** Regroup evidence by user outcome, business workflow, decision logic, and data lifecycle. Ignore technical folders unless they reveal actual domain language.

### Problem: Shared database makes everything appear to be one context

**Symptoms:** Many modules read the same tables; teams assume the schema defines the domain boundary.
**Solution:** Separate storage coupling from semantic cohesion. Ask who owns meaning, rules, and lifecycle for each concept. Recommend ownership seams, translation layers, or published contracts instead of assuming one model.

### Problem: The same term means different things in different parts of the system

**Symptoms:** Terms like `Customer`, `Order`, `Account`, or `Case` appear everywhere but with conflicting fields, rules, or workflows.
**Solution:** Build a glossary by context and document term collisions explicitly. This is strong evidence for separate bounded contexts or translation boundaries.

### Problem: Subdomain classification feels subjective

**Symptoms:** Teams disagree on whether something is Core or Supporting; code evidence alone is inconclusive.
**Solution:** Use the classification matrix and score differentiation, policy complexity, replaceability, and business expertise required. Record confidence and missing stakeholder evidence instead of forcing certainty.

### Problem: A proposed bounded context does not justify a separate service

**Symptoms:** The semantic boundary is real, but ownership, data autonomy, or release independence are unclear.
**Solution:** Recommend a modular monolith boundary first. Defer service extraction until autonomy, consistency, contracts, and team ownership are validated.

### Problem: The codebase lacks enough business evidence for high-confidence recommendations

**Symptoms:** Only technical implementation details are available; docs are missing; no clear actors or workflows exist.
**Solution:** Produce a provisional analysis, state the evidence gap clearly, lower confidence, and list the minimum additional artifacts needed: API docs, user flows, tickets, event samples, stakeholder notes, or domain expert review.

## Related Skills

- `@domain-identification-grouping` - Use when the task is mainly grouping existing components into domain buckets rather than performing deeper strategic DDD analysis.
- `@coupling-analysis` - Use when the real question is dependency strength, coupling hotspots, or change coupling rather than business meaning.
- `@architecture-decision-records` - Use after this skill when you need to formalize a boundary decision or service-extraction rationale.
- `@event-storming` - Use when stakeholder-driven event discovery is needed to improve weak or ambiguous domain evidence.
- `@service-boundary-design` - Use only after this skill establishes candidate contexts and autonomy evidence exists.
- `@modular-monolith-refactoring` - Use when the recommendation is to strengthen internal boundaries without introducing service decomposition yet.

## Additional Resources

### Local support pack

- [Domain evidence checklist](references/domain-evidence-checklist.md)
- [Subdomain classification matrix](references/subdomain-classification-matrix.md)
- [Bounded context canvas](references/bounded-context-canvas.md)
- [Context map template](references/context-map-template.md)
- [Glossary by context template](references/glossary-by-context-template.md)
- [Domain analysis report example](examples/domain-analysis-report-example.md)
- [Modular monolith vs microservice boundary example](examples/modular-monolith-vs-microservice-boundary-example.md)
- [Ambiguous language troubleshooting example](examples/ambiguous-language-troubleshooting-example.md)
- [Routing guidance](agents/domain-analysis-router.md)

### External references

These references support the strategic-design guidance used here:

- Martin Fowler - Bounded Context
- Martin Fowler - Microservices
- Eric Evans / Domain Language reference material on DDD
- Context Mapper documentation for strategic DDD and context mapping
- EventStorming and Domain Storytelling for discovery-first domain analysis
- Microsoft guidance on domain analysis and microservice boundaries
- Team Topologies guidance for ownership and cognitive-load checks

## Quick Reference

### Subdomain decision tree

```text
Analyze business capability
└─ Does it materially differentiate the business?
   ├─ Yes → Candidate Core Domain
   └─ No → Does it still require business-specific rules or expertise?
      ├─ Yes → Candidate Supporting Subdomain
      └─ No → Candidate Generic Subdomain
```

### Cohesion quick check

```text
Same language?       → linguistic cohesion
Same workflow?       → workflow cohesion
Same lifecycle?      → data cohesion
Change together?     → change cohesion

Mostly yes           → likely coherent subdomain
Mixed                → review grouping
Mostly no            → likely mixed concerns
```

### Boundary warning signs

```text
Good signs:
- terms are clear inside the boundary
- policies and invariants fit together
- integrations can be explicit
- ownership can be described

Warning signs:
- same term has conflicting meanings
- one service owns unrelated business rules
- many modules share the same tables without clear ownership
- boundaries are proposed only from code layout
```

## Validation Criteria

A strong result from this skill should include:

- clear scope and assumptions
- evidence beyond code structure alone
- explicit subdomain classification with confidence
- bounded contexts described as semantic boundaries
- a context map with relationships and integration patterns
- caution where service extraction is premature
- actionable next steps for validation or refactoring

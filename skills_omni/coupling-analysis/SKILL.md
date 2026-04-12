---
name: "coupling-analysis"
description: "Analyze coupling between modules, packages, or services using the strength-distance-volatility model from Balancing Coupling in Software Design. Use this skill for dependency reviews, integration quality checks, temporal coupling assessment, coupling reports, and prioritizing decoupling work; do not use it for domain boundary discovery or component sizing."
version: "0.0.1"
category: "development"
tags:
  - "coupling-analysis"
  - "architecture"
  - "dependencies"
  - "connascence"
  - "modularity"
  - "temporal-coupling"
  - "service-boundaries"
  - "refactoring"
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
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "coupling-analysis"
family_name: "Coupling Analysis Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/coupling-analysis"
upstream_skill: "skills/coupling-analysis"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "coupling-analysis"
---

# Coupling Analysis Skill

## Overview

Use this skill to assess whether coupling between modules, packages, libraries, or services is appropriate for the system's structure and rate of change.

The analysis is based on Vlad Khononov's three-dimensional model from _Balancing Coupling in Software Design_:

1. **Integration strength** — what is shared and how intrusive the dependency is
2. **Distance** — how far apart the coupled elements are in code, deployment, or team ownership
3. **Volatility** — how often the involved elements change

This skill is most useful when the user asks questions like:

- "Are these modules too coupled?"
- "Which components should we decouple first?"
- "Show the dependency hotspots"
- "Why do these services keep changing together?"
- "Is this integration contract too leaky?"
- "Can you produce a coupling report for this area of the codebase?"

A balanced design usually has:

- **strong coupling at short distance** when elements truly belong together
- **weak coupling at long distance** when elements should evolve independently
- **tolerance for stronger coupling only when volatility is low**

This skill preserves the original intent of the upstream community skill while making the workflow more operational, evidence-based, and auditable.

## When to Use This Skill

Use this skill when you need to analyze structural or integration coupling and produce evidence-backed recommendations.

### Good fit

- Dependency review for a module, package, library, or service boundary
- Architectural health review before a refactor or extraction
- Analysis of cascade changes across multiple areas of a codebase
- Review of API, event, or data-sharing contracts between services
- Investigation of temporal coupling using repository history
- Prioritization of decoupling candidates based on severity and change cost
- Review of whether a shared database, shared model, or deployment coordination is creating excessive coupling

### Not the right fit

- **Business/domain boundary discovery** → use `domain-analysis`
- **Component sizing or extraction by cohesion/size alone** → use `component-identification-sizing`
- **Single-defect debugging** where coupling is not the main question
- **Performance tuning** unless the root issue is architectural coupling
- **Pure API design work** without an architectural coupling question

### Activation prompts

- "Show me which modules change together."
- "Is this service boundary too chatty or too intrusive?"
- "Which dependencies are acceptable and which are architectural debt?"
- "Does this module expose too much of its internal model?"
- "Where do we have hidden runtime coupling that static imports miss?"

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First analysis in an unfamiliar codebase | `references/coupling-analysis-workflow.md` | Gives a phase-by-phase method with inputs, outputs, and stop conditions |
| Need to collect defensible evidence | `references/coupling-evidence-checklist.md` | Keeps the assessment auditable instead of intuition-driven |
| Need to evaluate recent change frequency or co-change | `references/temporal-coupling-and-volatility.md` | Grounds volatility in Git history when available |
| Need to review service or API boundary quality | `references/service-contract-review-checklist.md` | Focuses on contracts, model leakage, and shared-database smells |
| Need language-specific graph extraction ideas | `references/tooling-by-ecosystem.md` | Maps common ecosystems to safe dependency extraction approaches |
| Need a structured output artifact | `references/coupling-report-template.md` | Produces a reusable report with findings, confidence, and recommendations |
| Task may need handoff to another architecture skill | `agents/coupling-analysis-router.md` | Helps route to domain, sizing, API, refactoring, or debugging work |

## Workflow

Follow these steps in order. If evidence is missing, say so explicitly and lower confidence rather than guessing.

### 1. Define the analysis scope

State all of the following before drawing conclusions:

- target area: full codebase or specific subsystem
- level of analysis: function, class, package, module, library, service, or team boundary
- question to answer: health check, hotspot discovery, decoupling recommendation, report, or migration risk
- available evidence: source code, diagrams, traces, Git history, contracts, deployment data, team ownership

If scope is ambiguous, stop and narrow it first.

### 2. Identify the architectural unit being evaluated

Decide which level matters most:

- **code-level** coupling: functions, classes, files
- **package/module-level** coupling: namespaces, packages, libraries
- **service-level** coupling: APIs, events, databases, deployment coordination
- **socio-technical** coupling: team ownership, release coordination, authorship overlap

Do not mix levels carelessly. A clean import graph can hide severe service or operational coupling.

### 3. Gather structural evidence

Build a small inventory for each relevant unit:

- name and path/location
- primary responsibility
- incoming and outgoing dependencies
- dependency mechanism: import, interface, RPC, event, database access, config, shared schema, shared library
- whether the dependency is intentional and documented

Then create a dependency map or coupling matrix. Focus on representative edges, not every trivial edge.

### 4. Measure distance

Estimate how far apart the coupled elements are.

| Common boundary | Distance | Typical interpretation |
| --- | --- | --- |
| Same function or class | Minimal / very low | Likely cohesion, not a coupling problem by itself |
| Same package or namespace | Low | Often acceptable if responsibilities align |
| Same deployable or library, different modules | Medium | Needs review if changes propagate too broadly |
| Different services | High | Requires deliberate contracts and operational independence |
| Different systems, vendors, or organizations | Maximum | Expensive to coordinate; coupling must be minimized |

Increase effective distance when:

- different teams maintain the units
- independent deployments are required
- incidents or releases require coordination across boundaries
- cross-repo or cross-org change lead time is significant

### 5. Classify integration strength

For each important edge, classify the strongest relevant coupling type.

#### Intrusive coupling — strongest, usually a design smell

The downstream depends on implementation details not designed for public integration.

Typical signs:

- reflection or private-member access
- monkey-patching internals
- direct reads of another service's database
- dependence on another module's internal file or config structure
- reaching around a public interface to access implementation details

Default assessment: **high severity**, especially at service boundaries.

#### Functional coupling

Modules are semantically tied because behavior must stay synchronized.

Common forms:

- **sequential**: operations must occur in a strict order
- **transactional**: multiple updates must succeed or fail together
- **symmetric**: duplicated business rules must remain aligned

Functional coupling may exist even without a direct code dependency.

#### Model coupling

The downstream depends on the upstream's internal model instead of an integration-specific contract.

Typical signs:

- sharing rich domain objects across boundaries
- exposing internal enums or status codes directly
- consumers knowing field names, semantics, positions, or algorithms that were not intended as stable contracts

#### Contract coupling — weakest and usually preferred across boundaries

The upstream exposes an explicit integration contract separate from internal implementation.

Typical signs:

- DTOs or public schemas designed for consumers
- versioned REST, GraphQL, event, or Protobuf contracts
- anti-corruption layers, adapters, facades, or published language patterns
- primitive or stable value types instead of internal objects

### 6. Assess volatility using evidence, not intuition alone

Prefer repository history. If Git history is unavailable or unreliable, mark volatility as inferred.

Use these evidence sources in order:

1. **Git churn and recency** — how often files or modules changed recently
2. **Temporal coupling** — which areas change together in the same commits
3. **Business context** — core areas usually change more than generic support areas
4. **Code signals** — TODO density, repeated contract revisions, fragile tests, comments indicating evolving business rules

Use the support file `references/temporal-coupling-and-volatility.md` for safe command patterns and interpretation notes.

### 7. Look for hidden runtime and operational coupling

Static dependencies alone are not enough. Check for evidence of:

- synchronous call chains that create availability dependency
- shared databases or direct table reads across service boundaries
- deployment coordination requirements
- distributed transactions or sagas that force behavioral synchronization
- retry, timeout, or circuit-breaker behavior that couples services operationally
- message schema dependencies in event-driven systems

If runtime evidence exists, include it even when the import graph looks clean.

### 8. Rate each coupling edge across the three dimensions

Use a simple low/high or low/medium/high scale if needed, but keep the reasoning explicit.

A practical quick triage table:

| Dimension | Lower-risk end | Higher-risk end |
| --- | --- | --- |
| Strength | Contract coupling | Intrusive or strong functional coupling |
| Distance | Same package/deployable | Cross-service, cross-team, external boundary |
| Volatility | Stable/supporting area | Frequently changing core area |

A coupling edge becomes a priority when **strength, distance, and volatility are all high enough to drive change amplification**.

### 9. Diagnose balance

Use the model to decide whether the coupling is:

- **good/cohesive** — strong but local and expected
- **acceptable** — not ideal, but stable and low-cost to maintain
- **attention needed** — moderate current cost or likely future pain
- **critical** — high change cost, broad blast radius, or serious contract leakage

Prefer the plain-language maintenance judgment over pretending the result is mathematically exact.

A useful approximation is:

```text
maintenance effort increases as integration strength, distance, and volatility increase together
```

### 10. Produce an auditable report

Your output should include:

- scope and assumptions
- analyzed units
- key coupling edges
- evidence used
- hidden/runtime coupling indicators
- confidence level and limitations
- prioritized recommendations
- preserve / monitor / refactor / re-architect decision

Use `references/coupling-report-template.md` when producing a formal deliverable.

## Evidence Checklist

Before finalizing a conclusion, try to collect as many of these as practical:

- dependency graph or dependency inventory
- representative annotated edges
- contract samples or interface definitions
- Git churn evidence
- temporal coupling or co-change evidence
- runtime architecture clues such as traces, diagrams, or incident notes
- deploy/release coordination evidence
- ownership or authorship clues for socio-technical distance
- confidence notes for every major claim

If fewer than two evidence types are available, keep the conclusion tentative.

## Analysis Heuristics

Use these questions to avoid shallow judgments.

### For integration strength

- If an internal detail changes, who else must change?
- Was this interface designed to be public, or is the dependency accidental?
- Is the downstream coupled to implementation details, data shape, or business meaning?
- Is duplicated business logic forcing manual synchronization?

### For distance

- How expensive is a coordinated change across this boundary?
- Do releases, approvals, or incidents require multiple teams to align?
- Does this dependency cross deployable, repository, or organization boundaries?

### For volatility

- Which areas changed most in the last few months?
- Which modules repeatedly appear in the same commits?
- Is this a core business capability or stable commodity capability?

### For hidden coupling

- Does the runtime path create stronger dependency than the source graph suggests?
- Are there shared tables, schemas, retries, transactions, or deployment constraints?
- Does a consumer rely on undocumented fields or sequencing behavior?

## Examples

### Example 1: Request a focused coupling review

```text
Use @coupling-analysis to review the billing and invoicing modules. Build a dependency inventory, classify the strongest coupling edges, check Git history for co-change in the last 6 months, and produce a prioritized decoupling report with confidence notes.
```

### Example 2: Analyze volatility safely with Git

```bash
git log --since="6 months ago" --format='' --name-only -- services/billing services/invoicing \
  | sed '/^$/d' \
  | sort \
  | uniq -c \
  | sort -rn \
  | head -20
```

Expected use: identify frequently changed files as a volatility signal, then verify whether the churn reflects business logic, generated code, or mechanical edits.

### Example 3: Review a service boundary

```text
Use @coupling-analysis to inspect the Orders -> Customer Profile integration. Check whether Orders reads Customer Profile's database, whether the API exposes internal models, and whether the contract is explicit and versionable. Flag hidden runtime or deployment coupling.
```

### Example 4: Produce a formal report

```text
Use @coupling-analysis on the notifications subsystem and return the result using references/coupling-report-template.md. Include evidence, severity, confidence, and preserve/monitor/refactor/re-architect recommendations.
```

### Example 5: Distinguish static from runtime coupling

```text
The import graph looks clean, but incidents show that checkout failures spike whenever inventory is degraded. Use @coupling-analysis to identify hidden runtime coupling and explain why static structure alone misses it.
```

## Best Practices

### Do

- Start with a clearly scoped question and analysis level.
- Separate **static structure**, **runtime behavior**, and **change-history** evidence.
- Prefer Git-based volatility evidence over intuition when history is available.
- Treat temporal coupling as an indicator, not proof of causation.
- Review service contracts explicitly; do not assume clean code-level dependencies imply low service coupling.
- Flag shared databases and direct reads of another service's persistence as severe by default.
- Use metrics and graph centrality as triage aids, not final verdicts.
- Record confidence and limitations whenever evidence is incomplete.
- Prioritize findings where high strength, high distance, and high volatility combine.
- Highlight positive patterns too, not only defects.

### Don't

- Do not infer architectural health from imports alone.
- Do not equate all strong coupling with bad design; some strong local coupling is healthy cohesion.
- Do not present Git churn or co-change as conclusive proof without semantic review.
- Do not recommend decoupling if the modules are genuinely cohesive and should change together.
- Do not ignore team, deployment, or operational boundaries when evaluating distance.
- Do not treat generated code, test fixtures, or mass renames as normal volatility signals without filtering them out.
- Do not overstate precision when the evidence is partial.

## Troubleshooting

### Problem: The dependency graph is too noisy to interpret

**Symptoms:** The graph is dominated by framework glue, generated files, test code, or trivial imports; every module appears connected to everything else.

**Solution:** Reduce scope. Exclude tests, generated code, adapters, and framework boilerplate where appropriate. Focus on representative business modules and the edges that carry real knowledge, data, or coordination cost. Use `references/tooling-by-ecosystem.md` to choose extraction methods that can be filtered by path or package.

### Problem: Git history is missing or misleading

**Symptoms:** The repository is a shallow clone, many commits were squashed, or churn data is dominated by formatting or vendored files.

**Solution:** Mark volatility as inferred and lower confidence. Filter generated or vendored paths. Prefer recent, relevant history over full history if the repo was reorganized. If possible, ask for a fuller clone or team context. Use `references/temporal-coupling-and-volatility.md` for fallback guidance.

### Problem: Static analysis says coupling is low, but production behavior says otherwise

**Symptoms:** Import graphs look clean, yet incidents, release coordination, or degraded upstream services cause broad impact.

**Solution:** Investigate runtime and operational coupling. Look for synchronous dependency chains, shared infrastructure, retries/timeouts, deployment order constraints, and shared databases. Record these as hidden coupling indicators in the report.

### Problem: Service boundaries look clean in code, but contracts are still brittle

**Symptoms:** APIs exist, but consumers rely on undocumented fields, internal enums, response ordering, or accidental semantics.

**Solution:** Review the boundary using `references/service-contract-review-checklist.md`. Distinguish internal models from explicit public contracts. Recommend DTOs, schema versioning, adapter layers, or contract documentation where needed.

### Problem: Monorepo boundaries do not match deployment boundaries

**Symptoms:** Packages appear close in the repository, but releases, ownership, or runtime topology make them expensive to coordinate.

**Solution:** Score distance using the real operational boundary, not only folder proximity. Different deployables or teams should usually increase effective distance even inside one repository.

### Problem: Functional coupling is suspected, but the tools cannot prove it

**Symptoms:** Business rules seem duplicated or synchronized across modules, but static tools show little or no direct dependency.

**Solution:** Use semantic review. Look for duplicated rules, mirrored validations, coordinated releases, or comments like "update both places." Mark the finding as functional or temporal coupling with explicit confidence notes rather than forcing a structural explanation.

## Related Skills

- `@domain-analysis` — use when the real question is business boundary discovery, bounded contexts, or subdomain mapping
- `@component-identification-sizing` — use when deciding extraction candidates by cohesion, scope, or component sizing rather than coupling quality
- `@refactoring` — use when the coupling problem is understood and the next step is planning safe code changes
- `@api-design` — use when the main task becomes contract design rather than coupling diagnosis
- `@debugging` — use when the main task is root-causing a concrete defect or incident

## Additional Resources

### Local references

- [Workflow guide](references/coupling-analysis-workflow.md)
- [Evidence checklist](references/coupling-evidence-checklist.md)
- [Report template](references/coupling-report-template.md)
- [Temporal coupling and volatility](references/temporal-coupling-and-volatility.md)
- [Service contract review checklist](references/service-contract-review-checklist.md)
- [Tooling by ecosystem](references/tooling-by-ecosystem.md)

### Local examples

- [Sample coupling analysis report](examples/coupling-analysis-sample-report.md)
- [Git volatility snippets](examples/git-volatility-snippets.md)
- [Service boundary coupling example](examples/service-boundary-coupling-example.md)

### Upstream and concept provenance

These concepts are based on _Balancing Coupling in Software Design_ by Vlad Khononov and preserve the intent of the upstream community skill while tightening execution guidance.

## Known Limitations

- Volatility is best assessed with actual repository history, not static reading alone.
- Symmetric functional coupling often requires semantic judgment; static tools rarely detect it reliably.
- Organizational distance inferred from authorship or ownership is approximate.
- Static dependency graphs can miss runtime, data, configuration, and operational coupling.
- Temporal coupling is a useful signal, not proof of causation.
- Coupling analysis informs decisions; it does not replace business context or delivery constraints.

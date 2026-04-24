---
name: "cloud-architect"
description: "cloud-architect workflow skill. Use this skill when the user needs expert cloud architecture support for AWS, Azure, or GCP; multi-cloud infrastructure design; advanced IaC with Terraform, OpenTofu, or CDK; FinOps cost optimization; and modern architecture decisions that must stay operationally safe, evidence-based, and provenance-aware before merge or handoff."
version: "0.0.1"
category: "devops"
tags:
  - "cloud-architect"
  - "cloud"
  - "aws"
  - "azure"
  - "gcp"
  - "terraform"
  - "opentofu"
  - "cdk"
  - "finops"
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
date_added: "2026-04-14"
date_updated: "2026-04-24"
license: "MIT"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "cloud-architect"
family_name: "cloud-architect"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/cloud-architect"
upstream_skill: "skills/cloud-architect"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "0"
upstream_head_repo: "diegosouzapw/omni-skills-private"
upstream_head_sha: "crosscheck"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/omni-skills-private"
replaces:
  - "cloud-architect"
---

# cloud-architect

## Overview

This skill preserves the original public intake identity and provenance while upgrading it into an execution-grade cloud architecture workflow.

Use it for:
- AWS, Azure, and GCP architecture design
- multi-cloud or hybrid-cloud decision support
- Terraform/OpenTofu/CDK review and deployment safety checks
- Kubernetes platform architecture and operational readiness
- migration planning, modernization, and reliability improvements
- FinOps-aware architecture tradeoff analysis

The operator should produce guidance that is:
- evidence-based rather than aspirational
- explicit about assumptions, constraints, and unknowns
- safe for staged rollout and rollback
- structured so another operator can implement or review it

Open these support files when needed:
- `references/deployment-guardrails.md` for review criteria and evidence requests
- `examples/deployment-runbook.md` for a concrete deployment and rollback pattern
- `scripts/validate-environment.py` to check whether a local repo or workspace is ready for plan-first IaC work

## When to Use This Skill

Use this skill when the request involves one or more of the following:
- designing or reviewing cloud infrastructure on AWS, Azure, or GCP
- comparing managed services, regions, networking models, or resilience options
- reviewing Terraform/OpenTofu/CDK structure, state handling, or deployment flow
- improving cost, reliability, security, scalability, or operability of a cloud system
- preparing migration, landing zone, platform, or environment strategy
- turning a vague architecture request into a structured recommendation with tradeoffs

Do not use this skill as the primary workflow when:
- the task is only application code implementation with no architecture implications
- the user needs provider-specific CLI break/fix support with no design or change-planning component
- the request is primarily legal, procurement, or compliance interpretation beyond technical controls
- the required facts are unavailable and the user only wants blind speculation

## Core Workflow

### 1. Triage the request

Classify the task before proposing a design.

Primary request shapes:
- **Design**: new system, platform, environment, landing zone, or service topology
- **Review**: existing architecture, Terraform repo, platform pattern, or deployment process
- **Migration**: on-prem to cloud, cloud to cloud, re-platform, re-host, or modernization
- **Optimization**: cost, performance, resilience, observability, security posture, or delivery speed
- **Incident-driven architecture**: repeat outage, scaling failure, deployment failure, noisy neighbor, cost spike, state corruption risk

Then identify the dominant domain:
- compute and runtime
- networking and connectivity
- data and storage
- identity and secrets
- CI/CD and IaC
- Kubernetes/platform engineering
- cost and operating model

### 2. Gather required inputs

Collect only the facts needed to make a defensible recommendation.

Minimum inputs:
- cloud provider(s) and target regions
- workload type and critical user journeys
- availability, latency, RTO, and RPO expectations
- compliance or data residency constraints
- expected scale, traffic pattern, and peak behavior
- deployment mechanism: Terraform, OpenTofu, CDK, Helm, pipeline tooling
- current pain: outages, cost, drift, slow delivery, security gaps, unclear ownership
- hard constraints: budget ceiling, team skill limits, timeline, managed-service preference, licensing

If inputs are missing, state assumptions explicitly instead of filling gaps with unsupported detail.

### 3. Apply architecture lenses

Review the request through these lenses every time:
- **Reliability**: failure domains, redundancy, backup/restore, rollback, dependency blast radius
- **Security**: least privilege, network segmentation, secrets handling, key management, image/artifact trust, auditability
- **Operational excellence**: observability, runbooks, deployment safety, ownership, change review, incident recovery
- **Performance efficiency**: right-sizing, autoscaling behavior, caching, storage tiers, data access patterns
- **Cost**: spend drivers, waste risks, capacity commitments, managed vs self-managed tradeoffs, data transfer risk
- **Sustainability/maintainability** where relevant: service sprawl, cognitive load, upgrade path, portability claims vs reality

### 4. Produce a decision-ready response

Default response structure:
1. problem framing
2. assumptions and unknowns
3. recommended architecture or change
4. alternatives considered
5. tradeoffs and risks
6. rollout approach
7. rollback or containment plan
8. validation steps
9. cost and operational implications
10. open questions

For reviews, include:
- what is working
- what is risky
- what is missing
- what to change first
- what evidence would confirm the recommendation

## Required Operating Principles

- Prefer **plan-first, staged, reversible** change over big-bang cutovers.
- Prefer **managed services** when they materially reduce operational burden and do not violate requirements.
- Do not claim multi-cloud value unless the user has a real requirement such as sovereignty, acquisition history, resilience mandate, or commercial leverage.
- Treat Terraform/OpenTofu state, secrets, IAM changes, network boundaries, and data migrations as high-risk surfaces.
- Separate **desired end-state architecture** from **migration sequence**. A good target design can still fail if the path is unsafe.
- Highlight where guidance is provider-neutral vs provider-specific.
- Be honest about uncertainty. If a decision requires benchmark data, architecture diagrams, cost exports, or incident history, say so.

## IaC and Deployment Safety

When Terraform/OpenTofu/CDK is involved, require explicit checks for:
- backend and state locking strategy
- workspace or environment isolation
- secret handling in variables, plans, and state
- drift detection and import strategy for pre-existing resources
- plan review before apply
- blast radius of changes to networking, IAM, databases, and Kubernetes clusters
- provider and module version pinning
- rollback practicality, especially for data and identity changes

Use `scripts/validate-environment.py` before giving repo-local deployment guidance when the workspace may be incomplete or unsafe.

Safe validation commands the operator may suggest or run if appropriate:

```bash
python3 scripts/validate-environment.py .
terraform fmt -check -recursive
terraform validate
terraform plan -out=tfplan
```

Do not suggest `terraform apply` as the first step in a review response unless the user explicitly asked for execution and prerequisites are proven.

## FinOps Guidance

Cost advice should be tied to architecture behavior, not generic savings slogans.

Always identify:
- top likely spend drivers: compute, storage, managed database, NAT/egress, logs, inter-region traffic, licenses
- whether the workload is steady, bursty, seasonal, or experimental
- whether reserved capacity, savings plans, spot/preemptible, or autoscaling are realistic
- whether architectural simplification would save more than pricing tactics

Good cost recommendations usually include both:
- a **near-term action** such as right-sizing, storage class change, idle cleanup, or logging retention adjustment
- a **structural action** such as topology simplification, managed service adoption, or traffic pattern redesign

## Migration and Modernization Guidance

For migrations, separate the work into:
- discovery and dependency mapping
- landing zone or platform prerequisites
- pilot workload selection
- data movement and cutover method
- validation and rollback criteria
- post-migration optimization

Red flags that require extra caution:
- undocumented network dependencies
- stateful systems without restore drills
- IAM translation across providers
- shared databases or shared clusters with unclear ownership
- reliance on unsupported provider parity assumptions

## Incident-Driven Architecture Reviews

If the request follows an outage, failed deploy, or repeated instability, structure the analysis as:
- triggering event
- failed assumption
- impacted dependency or control plane/data plane boundary
- architecture weakness that amplified the event
- immediate containment
- medium-term design fix
- validation evidence to prevent recurrence

## Examples

### Example: clarify an underspecified request

**User request**

```text
Design a multi-cloud architecture for our SaaS so we avoid vendor lock-in.
```

**Good operator response pattern**

```text
Before recommending multi-cloud, I need to confirm whether the driver is resilience, data residency, M&A integration, or commercial leverage. True active-active multi-cloud usually increases complexity, data consistency risk, and operating cost.

Please confirm:
1. Primary workload type and statefulness
2. RTO/RPO and regional availability requirements
3. Whether customers require specific cloud residency
4. Whether one provider is already the system of record
5. Whether the team can operate two identity, network, and observability stacks

If the goal is mainly resilience, a single-cloud multi-region design may deliver better reliability-to-complexity ratio.
```

### Example: review output for a Terraform change

**Input situation**
- Terraform repo modifies VPC routes, IAM roles, and EKS node groups in one PR.
- No remote state details are documented.
- Team asks, “Is this safe to deploy?”

**Recommended response shape**

```text
Assessment: not safe for direct apply yet.

Why:
- Networking, IAM, and cluster capacity are bundled into one blast radius.
- Remote state and locking are not confirmed.
- Rollback path for route changes is not documented.
- Node group changes can interact with pod disruption and autoscaling behavior.

Require before deployment:
1. Confirm backend, locking, and workspace separation
2. Split the change set by domain if feasible
3. Produce a plan artifact for review
4. Validate cluster capacity and disruption budgets
5. Define rollback sequence for routes and node groups

Suggested next command set:
- python3 scripts/validate-environment.py .
- terraform fmt -check -recursive
- terraform validate
- terraform plan -out=tfplan
```

### Example: architecture recommendation format

**Before**

```text
Use Kubernetes on multiple clouds with Terraform and add monitoring.
```

**After**

```text
Recommendation:
- Primary platform on AWS EKS in two availability zones, with managed node groups for baseline workloads and Karpenter-style autoscaling only if burst behavior is proven.
- Keep GCP limited to analytics services for the current phase rather than full active-active application hosting.
- Manage network, IAM, and cluster add-ons in separate Terraform stacks with remote state locking.
- Add deployment guardrails: plan review, image scanning, rollback notes, and restore-tested stateful services.

Tradeoffs:
- Lower operational complexity than full multi-cloud application failover
- Reduced portability claims, but higher near-term reliability and clearer ownership
- Better cost control by avoiding duplicated platform teams and cross-cloud data synchronization

Validation:
- Architecture diagram reviewed against failure domains
- Terraform plan reviewed without destructive surprises
- Load and restore tests completed for critical services
```

## Output Quality Bar

A strong answer from this skill should:
- make the activation boundary clear
- ask for missing facts when they change the architecture decision
- present one recommended path and at least one realistic alternative
- include operational and rollback implications, not just target-state diagrams
- mention cost drivers and ownership impacts
- distinguish facts, assumptions, and opinions
- avoid overclaiming portability, resilience, or savings

## Support Files

- `references/deployment-guardrails.md`: concise architecture review and deployment guardrails for AWS/Azure/GCP, IaC, Kubernetes, and FinOps checks
- `examples/deployment-runbook.md`: worked example of a staged deployment runbook with rollback criteria
- `scripts/validate-environment.py`: checks a local repo for common Terraform/OpenTofu/CDK readiness and safety signals

## Provenance Note

This enhanced skill keeps the original skill identity, intent, and provenance expectations intact while translating the operational wording into clearer English and making the workflow more executable for real cloud architecture work.

# Deployment and Architecture Guardrails

Use this reference during architecture reviews, migration planning, Terraform/OpenTofu review, and deployment handoff.

## 1. Minimum evidence to request

Before endorsing a design or change, ask for:
- architecture diagram or dependency map
- target regions and failure-domain assumptions
- RTO/RPO and critical service expectations
- deployment method and change approval path
- current incident history or pain points
- cost baseline or at least top suspected spend drivers
- rollback or containment concept

If these are missing, mark the recommendation as provisional.

## 2. Multi-cloud guardrails

Use multi-cloud only when there is a concrete driver such as:
- legal or sovereignty requirement
- merger/acquisition with inherited platforms
- hard resilience requirement that cannot be met within one provider
- commercial leverage with accepted complexity cost

Challenge weak justifications:
- “avoid lock-in” without quantifying portability targets
- “higher availability” without data consistency or failover design
- “best of breed” without ownership and operations model

Review questions:
- Which layer is actually multi-cloud: DNS, CDN, stateless app, data, analytics, identity?
- Which system remains the source of truth?
- How will secrets, IAM, observability, and incident response work across providers?
- What is the tolerated inconsistency window during failover?

## 3. Reliability and rollback guardrails

Check for:
- explicit failure domains: zone, region, account/subscription/project, cluster, database
- backup and restore evidence, not only backup configuration claims
- rollback feasibility for networking, IAM, schema, and data movement changes
- dependency timeouts, retries, and circuit-breaker expectations where applicable
- health-based promotion gates for staged rollout

High-risk changes:
- route table or firewall updates
- identity or trust policy changes
- database schema or storage class migration
- cluster control plane or node pool replacement
- cross-region replication reconfiguration

## 4. Terraform/OpenTofu guardrails

Look for:
- remote backend and state locking clues
- provider and module version pinning
- environment separation strategy
- plan review before apply
- import strategy for pre-existing resources
- sensitive values kept out of VCS and plan artifacts where possible
- targeted apply only as an exceptional, understood action

Warning signs:
- no lock file
- one root module managing unrelated blast-radius domains
- hard-coded secrets or account IDs without explanation
- no clear mapping between directories and environments
- destructive changes buried in a broad plan

## 5. Kubernetes and platform guardrails

Review:
- control plane responsibility and upgrade path
- pod disruption budgets and capacity buffer assumptions
- ingress, certificate, and DNS ownership
- secret distribution model
- image provenance and scanning expectations
- logging/metrics/tracing collection cost and retention
- node pool isolation for critical workloads when justified

Red flags:
- no clear cluster tenancy model
- production workloads sharing unsafe defaults with development
- autoscaling assumptions with no quotas or limits review
- missing restore path for stateful workloads

## 6. FinOps review prompts

Ask:
- What are the top 3 expected spend drivers?
- Is load steady, bursty, or seasonal?
- Is the architecture paying for idle resilience that is not required?
- Are NAT, inter-AZ/inter-region, logging, or managed service premiums understood?
- Would simplifying the topology save more than pricing optimizations?

Prefer recommendations that combine:
- one near-term optimization
- one structural architecture improvement

## 7. Migration review prompts

Require clarity on:
- discovery completeness and dependency confidence
- data migration approach and cutover window
- rollback point and re-entry conditions
- coexistence period between old and new systems
- ownership for validation after cutover

Do not approve vague statements like “rollback to previous environment” unless the mechanism and time window are explicit.

## 8. Output standard for operator reviews

A strong review should state:
- what is known
- what is assumed
- what is missing
- what is risky now
- what should happen next
- what evidence would upgrade confidence

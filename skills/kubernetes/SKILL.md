---
name: kubernetes
description: "Kubernetes workflow skill. Use this skill when a user needs workload manifests, rollout strategy, service exposure, or cluster operations guidance."
version: "0.0.1"
category: devops
tags: [kubernetes, k8s, manifests, deployments, services, rollouts]
complexity: advanced
risk: safe
tools: [claude-code, cursor, gemini-cli, codex-cli, antigravity, opencode]
source: omni-team
author: "Omni Skills Team"
date_added: "2026-03-27"
date_updated: "2026-03-27"
---

# Kubernetes

## Overview

Use this skill when the user needs declarative deployment guidance for Kubernetes workloads. It is for manifests, rollouts, probes, configuration boundaries, workload decomposition, and day-two concerns like debugging and rollback.

This skill should favor small, explicit manifests over magical abstraction layers. Good output should make ownership, selectors, failure modes, and rollout behavior obvious.

## When to Use This Skill

- Use when creating or reviewing manifests for Deployments, Jobs, Services, Ingress, or related objects.
- Use when the user needs readiness, liveness, scaling, configuration, or rollout behavior clarified.
- Use when a deployment works in theory but fails under cluster realities such as probe timing, labels, or config drift.

## Operating Table

| Situation | Primary focus | What good output looks like |
| :-------- | :------------ | :-------------------------- |
| First deployment review | ownership and traffic wiring | Labels, selectors, ports, namespaces, and rollout order are explicit |
| Rollout hardening | probe timing and restart behavior | Startup, readiness, liveness, and resource assumptions match the actual app |
| Service or ingress outage | discovery path and exposure | Service endpoints, ports, DNS, and ingress flow are easy to verify |
| Day-two operations | validation and rollback | Commands, health expectations, and rollback checkpoints are listed |
| Multi-object change | apply order and safety | Dependencies between Deployment, Service, config, and ingress are visible |

## Core Concepts

### Labels and Selectors Are the Wiring

Many Kubernetes failures are really ownership failures. Stable, semantic labels and selectors matter as much as the pod spec.

### Keep Manifests Minimal and Observable

Small manifests are easier to review, diff, and roll back. Add only the configuration needed for the stated workload, then document what validates success.

## Workflow

1. Define the workload boundary: image, command, exposed ports, writable paths, config sources, secret sources, and persistence expectations.
2. Choose the smallest resource set that can express the workload cleanly and avoid adding HPA, ingress, or jobs until the need is explicit.
3. Make health and rollout behavior concrete by sizing probes, requests, limits, update strategy, and disruption tolerance to the actual startup path.
4. Validate ownership and discovery by checking labels, selectors, service ports, namespace placement, ingress assumptions, and DNS expectations together.
5. Define the operator path: exact `kubectl` checks, healthy endpoint expectations, rollback trigger, and first triage commands when the rollout fails.

## Examples

### Example 1: Service rollout review

```text
Review these Kubernetes manifests for a Node API and make the rollout, probe, and configuration strategy safer.
```

**Explanation:** The answer should inspect selectors, probe realism, config boundaries, and deployment safety.

### Example 2: Manifest review packet

```bash
python3 skills/kubernetes/scripts/render_manifest_review.py \
  "catalog-api" \
  "deployment,service,configmap" \
  "rollout safety,probe tuning,labels"
```

**Explanation:** Use the packet when the request needs a structured manifest review.

### Example 3: Service discovery worksheet

```text
Use @kubernetes to review this Deployment, Service, and Ingress set. Fill a service-discovery worksheet for labels, selectors, ports, probes, and traffic flow.
```

**Explanation:** Use this framing when the likely failure is in object wiring rather than application code.

### Example 4: Local review packet from the skill folder

```bash
cd skills/kubernetes
python3 scripts/render_manifest_review.py \
  "payments-api" \
  "deployment,service,ingress" \
  "startup probes,service discovery,rollback"
```

**Explanation:** This path makes the support script reusable when the reviewer is already working inside the skill folder.

## Best Practices

- ✅ **Do:** Use current stable API versions and keep manifests in YAML for readability.
- ✅ **Do:** Use semantic labels consistently across workloads and Services.
- ✅ **Do:** Keep manifests minimal and grouped by related objects.
- ❌ **Don't:** treat probe values as universal defaults.
- ❌ **Don't:** hide selectors, ports, or namespace assumptions inside implied conventions.

## Troubleshooting

### Problem: Pods start but traffic never reaches them

**Symptoms:** Pods are Ready or Running, but the Service has no endpoints or traffic fails.  
**Solution:** Re-check labels, selectors, target ports, namespace, and whether the readiness probe is blocking endpoints.

### Problem: The rollout keeps flapping

**Symptoms:** Pods restart, fail readiness, or never stabilize after deploy.  
**Solution:** Inspect probe timing, startup path, resource requests, and config dependencies before changing autoscaling or replica counts.

### Problem: Ingress is healthy but the application is still unreachable

**Symptoms:** The ingress controller reports no obvious error, but requests still fail or route to the wrong backend.
**Solution:** Walk the traffic path end to end: ingress rule, Service name and port, targetPort, pod readiness, namespace, and network policy assumptions.

## Related Skills

- `@docker-expert` — Use when the container image or entrypoint contract is the real source of the issue.
- `@terraform` — Use when cluster objects are managed as infrastructure code.
- `@security-auditor` — Use when admission, secrets, or exposed Services need security review.

## Additional Resources

- [Kubernetes checklist](references/checklist.md)
- [Rollout rubric](references/rollout-rubric.md)
- [Service discovery worksheet](references/service-discovery-worksheet.md)
- [Render a manifest review packet](scripts/render_manifest_review.py)
- [Release readiness matrix](examples/release-readiness-matrix.md)

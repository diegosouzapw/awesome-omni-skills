---
name: kubernetes-deployment
description: "Kubernetes Deployment Workflow workflow skill. Use this skill when the user needs Kubernetes deployment workflow for container orchestration, Helm charts, service mesh, and production-ready K8s configurations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["kubernetes-deployment", "kubernetes", "deployment", "for", "container", "orchestration", "helm", "charts"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Kubernetes Deployment Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/kubernetes-deployment` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Kubernetes Deployment Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Deploying to Kubernetes
- Creating Helm charts
- Configuring service mesh
- Setting up K8s networking
- Implementing K8s security
- Use when the request clearly matches the imported source intent: Kubernetes deployment workflow for container orchestration, Helm charts, service mesh, and production-ready K8s configurations.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. docker-expert - Docker containerization
2. k8s-manifest-generator - K8s manifests
3. Create Dockerfile
4. Build container image
5. Optimize image size
6. Push to registry
7. Test container

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Container Preparation

#### Skills to Invoke
- `docker-expert` - Docker containerization
- `k8s-manifest-generator` - K8s manifests

#### Actions
1. Create Dockerfile
2. Build container image
3. Optimize image size
4. Push to registry
5. Test container

#### Copy-Paste Prompts
```
Use @docker-expert to containerize application for K8s
```

### Phase 2: K8s Manifests

#### Skills to Invoke
- `k8s-manifest-generator` - Manifest generation
- `kubernetes-architect` - K8s architecture

#### Actions
1. Create Deployment
2. Configure Service
3. Set up ConfigMap
4. Create Secrets
5. Add Ingress

#### Copy-Paste Prompts
```
Use @k8s-manifest-generator to create K8s manifests
```

### Phase 3: Helm Chart

#### Skills to Invoke
- `helm-chart-scaffolding` - Helm charts

#### Actions
1. Create chart structure
2. Define values.yaml
3. Add templates
4. Configure dependencies
5. Test chart

#### Copy-Paste Prompts
```
Use @helm-chart-scaffolding to create Helm chart
```

### Phase 4: Service Mesh

#### Skills to Invoke
- `istio-traffic-management` - Istio
- `linkerd-patterns` - Linkerd
- `service-mesh-expert` - Service mesh

#### Actions
1. Choose service mesh
2. Install mesh
3. Configure traffic management
4. Set up mTLS
5. Add observability

#### Copy-Paste Prompts
```
Use @istio-traffic-management to configure Istio
```

### Phase 5: Security

#### Skills to Invoke
- `k8s-security-policies` - K8s security
- `mtls-configuration` - mTLS

#### Actions
1. Configure RBAC
2. Set up NetworkPolicy
3. Enable PodSecurity
4. Configure secrets
5. Implement mTLS

#### Copy-Paste Prompts
```
Use @k8s-security-policies to secure Kubernetes cluster
```

### Phase 6: Observability

#### Skills to Invoke
- `grafana-dashboards` - Grafana
- `prometheus-configuration` - Prometheus

#### Actions
1. Install monitoring stack
2. Configure Prometheus
3. Create Grafana dashboards
4. Set up alerts
5. Add distributed tracing

#### Copy-Paste Prompts
```
Use @prometheus-configuration to set up K8s monitoring
```

### Phase 7: Deployment

#### Skills to Invoke
- `deployment-engineer` - Deployment
- `gitops-workflow` - GitOps

#### Actions
1. Configure CI/CD
2. Set up GitOps
3. Deploy to cluster
4. Verify deployment
5. Monitor rollout

#### Copy-Paste Prompts
```
Use @gitops-workflow to implement GitOps deployment
```

#### Imported: Related Workflow Bundles

- `cloud-devops` - Cloud/DevOps
- `terraform-infrastructure` - Infrastructure
- `docker-containerization` - Containers

#### Imported: Overview

Specialized workflow for deploying applications to Kubernetes including container orchestration, Helm charts, service mesh configuration, and production-ready K8s patterns.

#### Imported: Quality Gates

- [ ] Containers working
- [ ] Manifests valid
- [ ] Helm chart installs
- [ ] Security configured
- [ ] Monitoring active
- [ ] Deployment successful

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @kubernetes-deployment to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @kubernetes-deployment against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @kubernetes-deployment for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @kubernetes-deployment using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/kubernetes-deployment`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

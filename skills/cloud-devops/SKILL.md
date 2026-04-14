---
name: cloud-devops
description: "Cloud/DevOps Workflow Bundle workflow skill. Use this skill when the user needs Cloud infrastructure and DevOps workflow covering AWS, Azure, GCP, Kubernetes, Terraform, CI/CD, monitoring, and cloud-native development and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["cloud-devops", "cloud", "infrastructure", "and", "devops", "covering", "aws", "azure"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Cloud/DevOps Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/cloud-devops` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Cloud/DevOps Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Setting up cloud infrastructure
- Implementing CI/CD pipelines
- Deploying Kubernetes applications
- Configuring monitoring and observability
- Managing cloud costs
- Implementing DevOps practices

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. cloud-architect - Cloud architecture
2. aws-skills - AWS development
3. azure-functions - Azure development
4. gcp-cloud-run - GCP development
5. terraform-skill - Terraform IaC
6. terraform-specialist - Advanced Terraform
7. Design cloud architecture

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Cloud Infrastructure Setup

#### Skills to Invoke
- `cloud-architect` - Cloud architecture
- `aws-skills` - AWS development
- `azure-functions` - Azure development
- `gcp-cloud-run` - GCP development
- `terraform-skill` - Terraform IaC
- `terraform-specialist` - Advanced Terraform

#### Actions
1. Design cloud architecture
2. Set up accounts and billing
3. Configure networking
4. Provision resources
5. Set up IAM

#### Copy-Paste Prompts
```
Use @cloud-architect to design multi-cloud architecture
```

```
Use @terraform-skill to provision AWS infrastructure
```

### Phase 2: Container Orchestration

#### Skills to Invoke
- `kubernetes-architect` - Kubernetes architecture
- `docker-expert` - Docker containerization
- `helm-chart-scaffolding` - Helm charts
- `k8s-manifest-generator` - K8s manifests
- `k8s-security-policies` - K8s security

#### Actions
1. Design container architecture
2. Create Dockerfiles
3. Build container images
4. Write K8s manifests
5. Deploy to cluster
6. Configure networking

#### Copy-Paste Prompts
```
Use @kubernetes-architect to design K8s architecture
```

```
Use @docker-expert to containerize application
```

```
Use @helm-chart-scaffolding to create Helm chart
```

### Phase 3: CI/CD Implementation

#### Skills to Invoke
- `deployment-engineer` - Deployment engineering
- `cicd-automation-workflow-automate` - CI/CD automation
- `github-actions-templates` - GitHub Actions
- `gitlab-ci-patterns` - GitLab CI
- `deployment-pipeline-design` - Pipeline design

#### Actions
1. Design deployment pipeline
2. Configure build automation
3. Set up test automation
4. Configure deployment stages
5. Implement rollback strategies
6. Set up notifications

#### Copy-Paste Prompts
```
Use @cicd-automation-workflow-automate to set up CI/CD pipeline
```

```
Use @github-actions-templates to create GitHub Actions workflow
```

### Phase 4: Monitoring and Observability

#### Skills to Invoke
- `observability-engineer` - Observability engineering
- `grafana-dashboards` - Grafana dashboards
- `prometheus-configuration` - Prometheus setup
- `datadog-automation` - Datadog integration
- `sentry-automation` - Sentry error tracking

#### Actions
1. Design monitoring strategy
2. Set up metrics collection
3. Configure log aggregation
4. Implement distributed tracing
5. Create dashboards
6. Set up alerts

#### Copy-Paste Prompts
```
Use @observability-engineer to set up observability stack
```

```
Use @grafana-dashboards to create monitoring dashboards
```

### Phase 5: Cloud Security

#### Skills to Invoke
- `cloud-penetration-testing` - Cloud pentesting
- `aws-penetration-testing` - AWS security
- `k8s-security-policies` - K8s security
- `secrets-management` - Secrets management
- `mtls-configuration` - mTLS setup

#### Actions
1. Assess cloud security
2. Configure security groups
3. Set up secrets management
4. Implement network policies
5. Configure encryption
6. Set up audit logging

#### Copy-Paste Prompts
```
Use @cloud-penetration-testing to assess cloud security
```

```
Use @secrets-management to configure secrets
```

### Phase 6: Cost Optimization

#### Skills to Invoke
- `cost-optimization` - Cloud cost optimization
- `database-cloud-optimization-cost-optimize` - Database cost optimization

#### Actions
1. Analyze cloud spending
2. Identify optimization opportunities
3. Right-size resources
4. Implement auto-scaling
5. Use reserved instances
6. Set up cost alerts

#### Copy-Paste Prompts
```
Use @cost-optimization to reduce cloud costs
```

### Phase 7: Disaster Recovery

#### Skills to Invoke
- `incident-responder` - Incident response
- `incident-runbook-templates` - Runbook creation
- `postmortem-writing` - Postmortem documentation

#### Actions
1. Design DR strategy
2. Set up backups
3. Create runbooks
4. Test failover
5. Document procedures
6. Train team

#### Copy-Paste Prompts
```
Use @incident-runbook-templates to create runbooks
```

#### Imported: Cloud Provider Workflows

### AWS
```
Skills: aws-skills, aws-serverless, aws-penetration-testing
Services: EC2, Lambda, S3, RDS, ECS, EKS
```

### Azure
```
Skills: azure-functions, azure-ai-projects-py, azure-monitor-opentelemetry-py
Services: Functions, App Service, AKS, Cosmos DB
```

### GCP
```
Skills: gcp-cloud-run
Services: Cloud Run, GKE, Cloud Functions, BigQuery
```

#### Imported: Related Workflow Bundles

- `development` - Application development
- `security-audit` - Security testing
- `database` - Database operations
- `testing-qa` - Testing workflows

#### Imported: Overview

Comprehensive cloud and DevOps workflow for infrastructure provisioning, container orchestration, CI/CD pipelines, monitoring, and cloud-native application development.

#### Imported: Quality Gates

- [ ] Infrastructure provisioned
- [ ] CI/CD pipeline working
- [ ] Monitoring configured
- [ ] Security measures in place
- [ ] Cost optimization applied
- [ ] DR procedures documented

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @cloud-devops to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @cloud-devops against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @cloud-devops for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @cloud-devops using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/cloud-devops`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@burp-suite-testing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burpsuite-project-parser` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@business-analyst` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@busybox-on-windows` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

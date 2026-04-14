---
name: deployment-pipeline-design
description: "Deployment Pipeline Design workflow skill. Use this skill when the user needs Architecture patterns for multi-stage CI/CD pipelines with approval gates and deployment strategies and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["deployment-pipeline-design", "architecture", "patterns", "for", "multi-stage", "pipelines", "approval", "gates"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Deployment Pipeline Design

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/deployment-pipeline-design` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Deployment Pipeline Design Architecture patterns for multi-stage CI/CD pipelines with approval gates and deployment strategies.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Pipeline Stages, Approval Gate Patterns, Deployment Strategies, Pipeline Orchestration, Pipeline Best Practices.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to deployment pipeline design
- You need a different domain or tool outside this scope
- Design CI/CD architecture
- Implement deployment gates
- Configure multi-environment pipelines
- Establish deployment best practices

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Purpose

Design robust, secure deployment pipelines that balance speed with safety through proper stage organization and approval workflows.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @deployment-pipeline-design to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/deployment-pipeline-design/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/deployment-pipeline-design/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @deployment-pipeline-design using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/deployment-pipeline-design`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Reference Files

- `references/pipeline-orchestration.md` - Complex pipeline patterns
- `assets/approval-gate-template.yml` - Approval workflow templates

#### Imported: Pipeline Stages

### Standard Pipeline Flow

```
┌─────────┐   ┌──────┐   ┌─────────┐   ┌────────┐   ┌──────────┐
│  Build  │ → │ Test │ → │ Staging │ → │ Approve│ → │Production│
└─────────┘   └──────┘   └─────────┘   └────────┘   └──────────┘
```

### Detailed Stage Breakdown

1. **Source** - Code checkout
2. **Build** - Compile, package, containerize
3. **Test** - Unit, integration, security scans
4. **Staging Deploy** - Deploy to staging environment
5. **Integration Tests** - E2E, smoke tests
6. **Approval Gate** - Manual approval required
7. **Production Deploy** - Canary, blue-green, rolling
8. **Verification** - Health checks, monitoring
9. **Rollback** - Automated rollback on failure

#### Imported: Approval Gate Patterns

### Pattern 1: Manual Approval

```yaml
# GitHub Actions
production-deploy:
  needs: staging-deploy
  environment:
    name: production
    url: https://app.example.com
  runs-on: ubuntu-latest
  steps:
    - name: Deploy to production
      run: |
        # Deployment commands
```

### Pattern 2: Time-Based Approval

```yaml
# GitLab CI
deploy:production:
  stage: deploy
  script:
    - deploy.sh production
  environment:
    name: production
  when: delayed
  start_in: 30 minutes
  only:
    - main
```

### Pattern 3: Multi-Approver

```yaml
# Azure Pipelines
stages:
- stage: Production
  dependsOn: Staging
  jobs:
  - deployment: Deploy
    environment:
      name: production
      resourceType: Kubernetes
    strategy:
      runOnce:
        preDeploy:
          steps:
          - task: ManualValidation@0
            inputs:
              notifyUsers: 'team-leads@example.com'
              instructions: 'Review staging metrics before approving'
```

**Reference:** See `assets/approval-gate-template.yml`

#### Imported: Deployment Strategies

### 1. Rolling Deployment

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 10
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 2
      maxUnavailable: 1
```

**Characteristics:**
- Gradual rollout
- Zero downtime
- Easy rollback
- Best for most applications

### 2. Blue-Green Deployment

```yaml
# Blue (current)
kubectl apply -f blue-deployment.yaml
kubectl label service my-app version=blue

# Green (new)
kubectl apply -f green-deployment.yaml
# Test green environment
kubectl label service my-app version=green

# Rollback if needed
kubectl label service my-app version=blue
```

**Characteristics:**
- Instant switchover
- Easy rollback
- Doubles infrastructure cost temporarily
- Good for high-risk deployments

### 3. Canary Deployment

```yaml
apiVersion: argoproj.io/v1alpha1
kind: Rollout
metadata:
  name: my-app
spec:
  replicas: 10
  strategy:
    canary:
      steps:
      - setWeight: 10
      - pause: {duration: 5m}
      - setWeight: 25
      - pause: {duration: 5m}
      - setWeight: 50
      - pause: {duration: 5m}
      - setWeight: 100
```

**Characteristics:**
- Gradual traffic shift
- Risk mitigation
- Real user testing
- Requires service mesh or similar

### 4. Feature Flags

```python
from flagsmith import Flagsmith

flagsmith = Flagsmith(environment_key="API_KEY")

if flagsmith.has_feature("new_checkout_flow"):
    # New code path
    process_checkout_v2()
else:
    # Existing code path
    process_checkout_v1()
```

**Characteristics:**
- Deploy without releasing
- A/B testing
- Instant rollback
- Granular control

#### Imported: Pipeline Orchestration

### Multi-Stage Pipeline Example

```yaml
name: Production Pipeline

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - name: Build application
        run: make build
      - name: Build Docker image
        run: docker build -t myapp:${{ github.sha }} .
      - name: Push to registry
        run: docker push myapp:${{ github.sha }}

  test:
    needs: build
    runs-on: ubuntu-latest
    steps:
      - name: Unit tests
        run: make test
      - name: Security scan
        run: trivy image myapp:${{ github.sha }}

  deploy-staging:
    needs: test
    runs-on: ubuntu-latest
    environment:
      name: staging
    steps:
      - name: Deploy to staging
        run: kubectl apply -f k8s/staging/

  integration-test:
    needs: deploy-staging
    runs-on: ubuntu-latest
    steps:
      - name: Run E2E tests
        run: npm run test:e2e

  deploy-production:
    needs: integration-test
    runs-on: ubuntu-latest
    environment:
      name: production
    steps:
      - name: Canary deployment
        run: |
          kubectl apply -f k8s/production/
          kubectl argo rollouts promote my-app

  verify:
    needs: deploy-production
    runs-on: ubuntu-latest
    steps:
      - name: Health check
        run: curl -f https://app.example.com/health
      - name: Notify team
        run: |
          curl -X POST ${{ secrets.SLACK_WEBHOOK }} \
            -d '{"text":"Production deployment successful!"}'
```

#### Imported: Pipeline Best Practices

1. **Fail fast** - Run quick tests first
2. **Parallel execution** - Run independent jobs concurrently
3. **Caching** - Cache dependencies between runs
4. **Artifact management** - Store build artifacts
5. **Environment parity** - Keep environments consistent
6. **Secrets management** - Use secret stores (Vault, etc.)
7. **Deployment windows** - Schedule deployments appropriately
8. **Monitoring integration** - Track deployment metrics
9. **Rollback automation** - Auto-rollback on failures
10. **Documentation** - Document pipeline stages

#### Imported: Rollback Strategies

### Automated Rollback

```yaml
deploy-and-verify:
  steps:
    - name: Deploy new version
      run: kubectl apply -f k8s/

    - name: Wait for rollout
      run: kubectl rollout status deployment/my-app

    - name: Health check
      id: health
      run: |
        for i in {1..10}; do
          if curl -sf https://app.example.com/health; then
            exit 0
          fi
          sleep 10
        done
        exit 1

    - name: Rollback on failure
      if: failure()
      run: kubectl rollout undo deployment/my-app
```

### Manual Rollback

```bash
# List revision history
kubectl rollout history deployment/my-app

# Rollback to previous version
kubectl rollout undo deployment/my-app

# Rollback to specific revision
kubectl rollout undo deployment/my-app --to-revision=3
```

#### Imported: Monitoring and Metrics

### Key Pipeline Metrics

- **Deployment Frequency** - How often deployments occur
- **Lead Time** - Time from commit to production
- **Change Failure Rate** - Percentage of failed deployments
- **Mean Time to Recovery (MTTR)** - Time to recover from failure
- **Pipeline Success Rate** - Percentage of successful runs
- **Average Pipeline Duration** - Time to complete pipeline

### Integration with Monitoring

```yaml
- name: Post-deployment verification
  run: |
    # Wait for metrics stabilization
    sleep 60

    # Check error rate
    ERROR_RATE=$(curl -s "$PROMETHEUS_URL/api/v1/query?query=rate(http_errors_total[5m])" | jq '.data.result[0].value[1]')

    if (( $(echo "$ERROR_RATE > 0.01" | bc -l) )); then
      echo "Error rate too high: $ERROR_RATE"
      exit 1
    fi
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

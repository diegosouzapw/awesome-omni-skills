---
name: gitlab-ci-patterns-v2
description: "GitLab CI Patterns workflow skill. Use this skill when the user needs Comprehensive GitLab CI/CD pipeline patterns for automated testing, building, and deployment and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["gitlab-ci-patterns-v2", "gitlab-ci-patterns", "comprehensive", "gitlab", "pipeline", "patterns", "for", "automated"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# GitLab CI Patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/gitlab-ci-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# GitLab CI Patterns Comprehensive GitLab CI/CD pipeline patterns for automated testing, building, and deployment.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Basic Pipeline Structure, Docker Build and Push, Multi-Environment Deployment, Terraform Pipeline, Security Scanning.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to gitlab ci patterns
- You need a different domain or tool outside this scope
- Automate GitLab-based CI/CD
- Implement multi-stage pipelines
- Configure GitLab Runners
- Deploy to Kubernetes from GitLab

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

Create efficient GitLab CI pipelines with proper stage organization, caching, and deployment strategies.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @gitlab-ci-patterns-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/gitlab-ci-patterns-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/gitlab-ci-patterns-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @gitlab-ci-patterns-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use specific image tags (node:20, not node:latest)
- Cache dependencies appropriately
- Use artifacts for build outputs
- Implement manual gates for production
- Use environments for deployment tracking
- Enable merge request pipelines
- Use pipeline schedules for recurring jobs

### Imported Operating Notes

#### Imported: Best Practices

1. **Use specific image tags** (node:20, not node:latest)
2. **Cache dependencies** appropriately
3. **Use artifacts** for build outputs
4. **Implement manual gates** for production
5. **Use environments** for deployment tracking
6. **Enable merge request pipelines**
7. **Use pipeline schedules** for recurring jobs
8. **Implement security scanning**
9. **Use CI/CD variables** for secrets
10. **Monitor pipeline performance**

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/gitlab-ci-patterns`, fails to mention provenance, or does not use the support pack at all.
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

- `assets/gitlab-ci.yml.template` - Complete pipeline template
- `references/pipeline-stages.md` - Stage organization patterns

#### Imported: Basic Pipeline Structure

```yaml
stages:
  - build
  - test
  - deploy

variables:
  DOCKER_DRIVER: overlay2
  DOCKER_TLS_CERTDIR: "/certs"

build:
  stage: build
  image: node:20
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/
    expire_in: 1 hour
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - node_modules/

test:
  stage: test
  image: node:20
  script:
    - npm ci
    - npm run lint
    - npm test
  coverage: '/Lines\s*:\s*(\d+\.\d+)%/'
  artifacts:
    reports:
      coverage_report:
        coverage_format: cobertura
        path: coverage/cobertura-coverage.xml

deploy:
  stage: deploy
  image: bitnami/kubectl:latest
  script:
    - kubectl apply -f k8s/
    - kubectl rollout status deployment/my-app
  only:
    - main
  environment:
    name: production
    url: https://app.example.com
```

#### Imported: Docker Build and Push

```yaml
build-docker:
  stage: build
  image: docker:24
  services:
    - docker:24-dind
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - docker build -t $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA .
    - docker build -t $CI_REGISTRY_IMAGE:latest .
    - docker push $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
    - docker push $CI_REGISTRY_IMAGE:latest
  only:
    - main
    - tags
```

#### Imported: Multi-Environment Deployment

```yaml
.deploy_template: &deploy_template
  image: bitnami/kubectl:latest
  before_script:
    - kubectl config set-cluster k8s --server="$KUBE_URL" --insecure-skip-tls-verify=true
    - kubectl config set-credentials admin --token="$KUBE_TOKEN"
    - kubectl config set-context default --cluster=k8s --user=admin
    - kubectl config use-context default

deploy:staging:
  <<: *deploy_template
  stage: deploy
  script:
    - kubectl apply -f k8s/ -n staging
    - kubectl rollout status deployment/my-app -n staging
  environment:
    name: staging
    url: https://staging.example.com
  only:
    - develop

deploy:production:
  <<: *deploy_template
  stage: deploy
  script:
    - kubectl apply -f k8s/ -n production
    - kubectl rollout status deployment/my-app -n production
  environment:
    name: production
    url: https://app.example.com
  when: manual
  only:
    - main
```

#### Imported: Terraform Pipeline

```yaml
stages:
  - validate
  - plan
  - apply

variables:
  TF_ROOT: ${CI_PROJECT_DIR}/terraform
  TF_VERSION: "1.6.0"

before_script:
  - cd ${TF_ROOT}
  - terraform --version

validate:
  stage: validate
  image: hashicorp/terraform:${TF_VERSION}
  script:
    - terraform init -backend=false
    - terraform validate
    - terraform fmt -check

plan:
  stage: plan
  image: hashicorp/terraform:${TF_VERSION}
  script:
    - terraform init
    - terraform plan -out=tfplan
  artifacts:
    paths:
      - ${TF_ROOT}/tfplan
    expire_in: 1 day

apply:
  stage: apply
  image: hashicorp/terraform:${TF_VERSION}
  script:
    - terraform init
    - terraform apply -auto-approve tfplan
  dependencies:
    - plan
  when: manual
  only:
    - main
```

#### Imported: Security Scanning

```yaml
include:
  - template: Security/SAST.gitlab-ci.yml
  - template: Security/Dependency-Scanning.gitlab-ci.yml
  - template: Security/Container-Scanning.gitlab-ci.yml

trivy-scan:
  stage: test
  image: aquasec/trivy:latest
  script:
    - trivy image --exit-code 1 --severity HIGH,CRITICAL $CI_REGISTRY_IMAGE:$CI_COMMIT_SHA
  allow_failure: true
```

#### Imported: Caching Strategies

```yaml
# Cache node_modules
build:
  cache:
    key: ${CI_COMMIT_REF_SLUG}
    paths:
      - node_modules/
    policy: pull-push

# Global cache
cache:
  key: ${CI_COMMIT_REF_SLUG}
  paths:
    - .cache/
    - vendor/

# Separate cache per job
job1:
  cache:
    key: job1-cache
    paths:
      - build/

job2:
  cache:
    key: job2-cache
    paths:
      - dist/
```

#### Imported: Dynamic Child Pipelines

```yaml
generate-pipeline:
  stage: build
  script:
    - python generate_pipeline.py > child-pipeline.yml
  artifacts:
    paths:
      - child-pipeline.yml

trigger-child:
  stage: deploy
  trigger:
    include:
      - artifact: child-pipeline.yml
        job: generate-pipeline
    strategy: depend
```

---
name: terraform-infrastructure
description: "Terraform Infrastructure Workflow workflow skill. Use this skill when the user needs Terraform infrastructure as code workflow for provisioning cloud resources, creating reusable modules, and managing infrastructure at scale and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["terraform-infrastructure", "terraform", "infrastructure", "for", "provisioning", "cloud", "resources", "creating"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Terraform Infrastructure Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/terraform-infrastructure` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Terraform Infrastructure Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Provisioning cloud infrastructure
- Creating Terraform modules
- Managing multi-environment infra
- Implementing IaC best practices
- Setting up Terraform workflows
- Use when the request clearly matches the imported source intent: Terraform infrastructure as code workflow for provisioning cloud resources, creating reusable modules, and managing infrastructure at scale.

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

1. terraform-skill - Terraform basics
2. terraform-specialist - Advanced Terraform
3. Initialize Terraform
4. Configure backend
5. Set up providers
6. Configure variables
7. Create outputs

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Terraform Setup

#### Skills to Invoke
- `terraform-skill` - Terraform basics
- `terraform-specialist` - Advanced Terraform

#### Actions
1. Initialize Terraform
2. Configure backend
3. Set up providers
4. Configure variables
5. Create outputs

#### Copy-Paste Prompts
```
Use @terraform-skill to set up Terraform project
```

### Phase 2: Resource Provisioning

#### Skills to Invoke
- `terraform-module-library` - Terraform modules
- `cloud-architect` - Cloud architecture

#### Actions
1. Design infrastructure
2. Create resource definitions
3. Configure networking
4. Set up compute
5. Add storage

#### Copy-Paste Prompts
```
Use @terraform-module-library to provision cloud resources
```

### Phase 3: Module Creation

#### Skills to Invoke
- `terraform-module-library` - Module creation

#### Actions
1. Design module interface
2. Create module structure
3. Define variables/outputs
4. Add documentation
5. Test module

#### Copy-Paste Prompts
```
Use @terraform-module-library to create reusable Terraform module
```

### Phase 4: State Management

#### Skills to Invoke
- `terraform-specialist` - State management

#### Actions
1. Configure remote backend
2. Set up state locking
3. Implement workspaces
4. Configure state access
5. Set up backup

#### Copy-Paste Prompts
```
Use @terraform-specialist to configure Terraform state
```

### Phase 5: Multi-Environment

#### Skills to Invoke
- `terraform-specialist` - Multi-environment

#### Actions
1. Design environment structure
2. Create environment configs
3. Set up variable files
4. Configure isolation
5. Test deployments

#### Copy-Paste Prompts
```
Use @terraform-specialist to set up multi-environment Terraform
```

### Phase 6: CI/CD Integration

#### Skills to Invoke
- `cicd-automation-workflow-automate` - CI/CD
- `github-actions-templates` - GitHub Actions

#### Actions
1. Create CI pipeline
2. Configure plan/apply
3. Set up approvals
4. Add validation
5. Test pipeline

#### Copy-Paste Prompts
```
Use @cicd-automation-workflow-automate to create Terraform CI/CD
```

### Phase 7: Security

#### Skills to Invoke
- `secrets-management` - Secrets management
- `terraform-specialist` - Security

#### Actions
1. Configure secrets
2. Set up encryption
3. Implement policies
4. Add compliance
5. Audit access

#### Copy-Paste Prompts
```
Use @secrets-management to secure Terraform secrets
```

#### Imported: Related Workflow Bundles

- `cloud-devops` - Cloud/DevOps
- `kubernetes-deployment` - Kubernetes
- `aws-infrastructure` - AWS specific

#### Imported: Overview

Specialized workflow for infrastructure as code using Terraform including resource provisioning, module creation, state management, and multi-environment deployments.

#### Imported: Quality Gates

- [ ] Resources provisioned
- [ ] Modules working
- [ ] State configured
- [ ] Multi-env tested
- [ ] CI/CD working
- [ ] Security verified

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @terraform-infrastructure to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @terraform-infrastructure against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @terraform-infrastructure for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @terraform-infrastructure using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/terraform-infrastructure`, fails to mention provenance, or does not use any copied source files at all.
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

---
name: terraform-skill-v2
description: "Terraform Skill for Claude workflow skill. Use this skill when the user needs Terraform infrastructure as code best practices and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["terraform-skill-v2", "terraform-skill", "terraform", "infrastructure", "best", "practices", "devops", "agents"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Terraform Skill for Claude

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/terraform-skill` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Terraform Skill for Claude Comprehensive Terraform and OpenTofu guidance covering testing, modules, CI/CD, and production patterns. Based on terraform-best-practices.com and enterprise experience.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Testing Strategy Framework, Code Structure Standards, Locals for Dependency Management, Module Development, CI/CD Integration, Security & Compliance.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating new Terraform or OpenTofu configurations or modules
- Setting up testing infrastructure for IaC code
- Deciding between testing approaches (validate, plan, frameworks)
- Structuring multi-environment deployments
- Implementing CI/CD for infrastructure-as-code
- Reviewing or refactoring existing Terraform/OpenTofu projects

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Testing Strategy Framework

### Decision Matrix: Which Testing Approach?

| Your Situation | Recommended Approach | Tools | Cost |
|----------------|---------------------|-------|------|
| **Quick syntax check** | Static analysis | `terraform validate`, `fmt` | Free |
| **Pre-commit validation** | Static + lint | `validate`, `tflint`, `trivy`, `checkov` | Free |
| **Terraform 1.6+, simple logic** | Native test framework | Built-in `terraform test` | Free-Low |
| **Pre-1.6, or Go expertise** | Integration testing | Terratest | Low-Med |
| **Security/compliance focus** | Policy as code | OPA, Sentinel | Free |
| **Cost-sensitive workflow** | Mock providers (1.7+) | Native tests + mocking | Free |
| **Multi-cloud, complex** | Full integration | Terratest + real infra | Med-High |

### Testing Pyramid for Infrastructure

```
        /\
       /  \          End-to-End Tests (Expensive)
      /____\         - Full environment deployment
     /      \        - Production-like setup
    /________\
   /          \      Integration Tests (Moderate)
  /____________\     - Module testing in isolation
 /              \    - Real resources in test account
/________________\   Static Analysis (Cheap)
                     - validate, fmt, lint
                     - Security scanning
```

### Native Test Best Practices (1.6+)

**Before generating test code:**

1. **Validate schemas with Terraform MCP:**
   ```
   Search provider docs → Get resource schema → Identify block types
   ```

2. **Choose correct command mode:**
   - `command = plan` - Fast, for input validation
   - `command = apply` - Required for computed values and set-type blocks

3. **Handle set-type blocks correctly:**
   - Cannot index with `[0]`
   - Use `for` expressions to iterate
   - Or use `command = apply` to materialize

**Common patterns:**
- S3 encryption rules: **set** (use for expressions)
- Lifecycle transitions: **set** (use for expressions)
- IAM policy statements: **set** (use for expressions)

**For detailed testing guides, see:**
- **Testing Frameworks Guide** - Deep dive into static analysis, native tests, and Terratest
- **Quick Reference** - Decision flowchart and command cheat sheet

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @terraform-skill-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/terraform-skill-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/terraform-skill-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @terraform-skill-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Type - When to Use - Scope
- Resource Module - Single logical group of connected resources - VPC + subnets, Security group + rules
- Infrastructure Module - Collection of resource modules for a purpose - Multiple resource modules in one region/account
- Composition - Complete infrastructure - Spans multiple regions/accounts
- Separate environments (prod, staging) from modules (reusable components)
- Use examples/ as both documentation and integration test fixtures
- Keep modules small and focused (single responsibility)

### Imported Operating Notes

#### Imported: Core Principles

### 1. Code Structure Philosophy

**Module Hierarchy:**

| Type | When to Use | Scope |
|------|-------------|-------|
| **Resource Module** | Single logical group of connected resources | VPC + subnets, Security group + rules |
| **Infrastructure Module** | Collection of resource modules for a purpose | Multiple resource modules in one region/account |
| **Composition** | Complete infrastructure | Spans multiple regions/accounts |

**Hierarchy:** Resource → Resource Module → Infrastructure Module → Composition

**Directory Structure:**
```
environments/        # Environment-specific configurations
├── prod/
├── staging/
└── dev/

modules/            # Reusable modules
├── networking/
├── compute/
└── data/

examples/           # Module usage examples (also serve as tests)
├── complete/
└── minimal/
```

**Key principle from terraform-best-practices.com:**
- Separate **environments** (prod, staging) from **modules** (reusable components)
- Use **examples/** as both documentation and integration test fixtures
- Keep modules small and focused (single responsibility)

**For detailed module architecture, see:** Code Patterns: Module Types & Hierarchy

### 2. Naming Conventions

**Resources:**
```hcl
# Good: Descriptive, contextual
resource "aws_instance" "web_server" { }
resource "aws_s3_bucket" "application_logs" { }

# Good: "this" for singleton resources (only one of that type)
resource "aws_vpc" "this" { }
resource "aws_security_group" "this" { }

# Avoid: Generic names for non-singletons
resource "aws_instance" "main" { }
resource "aws_s3_bucket" "bucket" { }
```

**Singleton Resources:**

Use `"this"` when your module creates only one resource of that type:

✅ DO:
```hcl
resource "aws_vpc" "this" {}           # Module creates one VPC
resource "aws_security_group" "this" {}  # Module creates one SG
```

❌ DON'T use "this" for multiple resources:
```hcl
resource "aws_subnet" "this" {}  # If creating multiple subnets
```

Use descriptive names when creating multiple resources of the same type.

**Variables:**
```hcl
# Prefix with context when needed
var.vpc_cidr_block          # Not just "cidr"
var.database_instance_class # Not just "instance_class"
```

**Files:**
- `main.tf` - Primary resources
- `variables.tf` - Input variables
- `outputs.tf` - Output values
- `versions.tf` - Provider versions
- `data.tf` - Data sources (optional)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/terraform-skill`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Code Structure Standards

### Resource Block Ordering

**Strict ordering for consistency:**
1. `count` or `for_each` FIRST (blank line after)
2. Other arguments
3. `tags` as last real argument
4. `depends_on` after tags (if needed)
5. `lifecycle` at the very end (if needed)

```hcl
# ✅ GOOD - Correct ordering
resource "aws_nat_gateway" "this" {
  count = var.create_nat_gateway ? 1 : 0

  allocation_id = aws_eip.this[0].id
  subnet_id     = aws_subnet.public[0].id

  tags = {
    Name = "${var.name}-nat"
  }

  depends_on = [aws_internet_gateway.this]

  lifecycle {
    create_before_destroy = true
  }
}
```

### Variable Block Ordering

1. `description` (ALWAYS required)
2. `type`
3. `default`
4. `validation`
5. `nullable` (when setting to false)

```hcl
variable "environment" {
  description = "Environment name for resource tagging"
  type        = string
  default     = "dev"

  validation {
    condition     = contains(["dev", "staging", "prod"], var.environment)
    error_message = "Environment must be one of: dev, staging, prod."
  }

  nullable = false
}
```

**For complete structure guidelines, see:** Code Patterns: Block Ordering & Structure

#### Imported: Locals for Dependency Management

**Use locals to ensure correct resource deletion order:**

```hcl
# Problem: Subnets might be deleted after CIDR blocks, causing errors
# Solution: Use try() in locals to hint deletion order

locals {
  # References secondary CIDR first, falling back to VPC
  # Forces Terraform to delete subnets before CIDR association
  vpc_id = try(
    aws_vpc_ipv4_cidr_block_association.this[0].vpc_id,
    aws_vpc.this.id,
    ""
  )
}

resource "aws_vpc" "this" {
  cidr_block = "10.0.0.0/16"
}

resource "aws_vpc_ipv4_cidr_block_association" "this" {
  count = var.add_secondary_cidr ? 1 : 0

  vpc_id     = aws_vpc.this.id
  cidr_block = "10.1.0.0/16"
}

resource "aws_subnet" "public" {
  vpc_id     = local.vpc_id  # Uses local, not direct reference
  cidr_block = "10.1.0.0/24"
}
```

**Why this matters:**
- Prevents deletion errors when destroying infrastructure
- Ensures correct dependency order without explicit `depends_on`
- Particularly useful for VPC configurations with secondary CIDR blocks

**For detailed examples, see:** Code Patterns: Locals for Dependency Management

#### Imported: Module Development

### Standard Module Structure

```
my-module/
├── README.md           # Usage documentation
├── main.tf             # Primary resources
├── variables.tf        # Input variables with descriptions
├── outputs.tf          # Output values
├── versions.tf         # Provider version constraints
├── examples/
│   ├── minimal/        # Minimal working example
│   └── complete/       # Full-featured example
└── tests/              # Test files
    └── module_test.tftest.hcl  # Or .go
```

### Best Practices Summary

**Variables:**
- ✅ Always include `description`
- ✅ Use explicit `type` constraints
- ✅ Provide sensible `default` values where appropriate
- ✅ Add `validation` blocks for complex constraints
- ✅ Use `sensitive = true` for secrets

**Outputs:**
- ✅ Always include `description`
- ✅ Mark sensitive outputs with `sensitive = true`
- ✅ Consider returning objects for related values
- ✅ Document what consumers should do with each output

**For detailed module patterns, see:**
- **Module Patterns Guide** - Variable best practices, output design, ✅ DO vs ❌ DON'T patterns
- **Quick Reference** - Resource naming, variable naming, file organization

#### Imported: CI/CD Integration

### Recommended Workflow Stages

1. **Validate** - Format check + syntax validation + linting
2. **Test** - Run automated tests (native or Terratest)
3. **Plan** - Generate and review execution plan
4. **Apply** - Execute changes (with approvals for production)

### Cost Optimization Strategy

1. **Use mocking for PR validation** (free)
2. **Run integration tests only on main branch** (controlled cost)
3. **Implement auto-cleanup** (prevent orphaned resources)
4. **Tag all test resources** (track spending)

**For complete CI/CD templates, see:**
- **CI/CD Workflows Guide** - GitHub Actions, GitLab CI, Atlantis integration, cost optimization
- **Quick Reference** - Common CI/CD issues and solutions

#### Imported: Security & Compliance

### Essential Security Checks

```bash
# Static security scanning
trivy config .
checkov -d .
```

### Common Issues to Avoid

❌ **Don't:**
- Store secrets in variables
- Use default VPC
- Skip encryption
- Open security groups to 0.0.0.0/0

✅ **Do:**
- Use AWS Secrets Manager / Parameter Store
- Create dedicated VPCs
- Enable encryption at rest
- Use least-privilege security groups

**For detailed security guidance, see:**
- **Security & Compliance Guide** - Trivy/Checkov integration, secrets management, state file security, compliance testing

#### Imported: Version Management

### Version Constraint Syntax

```hcl
version = "5.0.0"      # Exact (avoid - inflexible)
version = "~> 5.0"     # Recommended: 5.0.x only
version = ">= 5.0"     # Minimum (risky - breaking changes)
```

### Strategy by Component

| Component | Strategy | Example |
|-----------|----------|---------|
| **Terraform** | Pin minor version | `required_version = "~> 1.9"` |
| **Providers** | Pin major version | `version = "~> 5.0"` |
| **Modules (prod)** | Pin exact version | `version = "5.1.2"` |
| **Modules (dev)** | Allow patch updates | `version = "~> 5.1"` |

### Update Workflow

```bash
# Lock versions initially
terraform init              # Creates .terraform.lock.hcl

# Update to latest within constraints
terraform init -upgrade     # Updates providers

# Review and test
terraform plan
```

**For detailed version management, see:** Code Patterns: Version Management

#### Imported: Modern Terraform Features (1.0+)

### Feature Availability by Version

| Feature | Version | Use Case |
|---------|---------|----------|
| `try()` function | 0.13+ | Safe fallbacks, replaces `element(concat())` |
| `nullable = false` | 1.1+ | Prevent null values in variables |
| `moved` blocks | 1.1+ | Refactor without destroy/recreate |
| `optional()` with defaults | 1.3+ | Optional object attributes |
| Native testing | 1.6+ | Built-in test framework |
| Mock providers | 1.7+ | Cost-free unit testing |
| Provider functions | 1.8+ | Provider-specific data transformation |
| Cross-variable validation | 1.9+ | Validate relationships between variables |
| Write-only arguments | 1.11+ | Secrets never stored in state |

### Quick Examples

```hcl
# try() - Safe fallbacks (0.13+)
output "sg_id" {
  value = try(aws_security_group.this[0].id, "")
}

# optional() - Optional attributes with defaults (1.3+)
variable "config" {
  type = object({
    name    = string
    timeout = optional(number, 300)  # Default: 300
  })
}

# Cross-variable validation (1.9+)
variable "environment" { type = string }
variable "backup_days" {
  type = number
  validation {
    condition     = var.environment == "prod" ? var.backup_days >= 7 : true
    error_message = "Production requires backup_days >= 7"
  }
}
```

**For complete patterns and examples, see:** Code Patterns: Modern Terraform Features

#### Imported: Version-Specific Guidance

### Terraform 1.0-1.5
- Use Terratest for testing
- No native testing framework available
- Focus on static analysis and plan validation

### Terraform 1.6+ / OpenTofu 1.6+
- **New:** Native `terraform test` / `tofu test` command
- Consider migrating from external frameworks for simple tests
- Keep Terratest only for complex integration tests

### Terraform 1.7+ / OpenTofu 1.7+
- **New:** Mock providers for unit testing
- Reduce cost by mocking external dependencies
- Use real integration tests for final validation

### Terraform vs OpenTofu

Both are fully supported by this skill. For licensing, governance, and feature comparison, see Quick Reference: Terraform vs OpenTofu.

#### Imported: Detailed Guides

This skill uses **progressive disclosure** - essential information is in this main file, detailed guides are available when needed:

📚 **Reference Files:**
- **Testing Frameworks** - In-depth guide to static analysis, native tests, and Terratest
- **Module Patterns** - Module structure, variable/output best practices, ✅ DO vs ❌ DON'T patterns
- **CI/CD Workflows** - GitHub Actions, GitLab CI templates, cost optimization, automated cleanup
- **Security & Compliance** - Trivy/Checkov integration, secrets management, compliance testing
- **Quick Reference** - Command cheat sheets, decision flowcharts, troubleshooting guide

**How to use:** When you need detailed information on a topic, reference the appropriate guide. Claude will load it on demand to provide comprehensive guidance.

#### Imported: License

This skill is licensed under the **Apache License 2.0**. See the LICENSE file for full terms.

**Copyright © 2026 Anton Babenko**

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: cost-optimization
description: "Cloud Cost Optimization workflow skill. Use this skill when the user needs Strategies and patterns for optimizing cloud costs across AWS, Azure, and GCP and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["cost-optimization", "strategies", "and", "patterns", "for", "optimizing", "cloud", "costs"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Cloud Cost Optimization

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/cost-optimization` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Cloud Cost Optimization Strategies and patterns for optimizing cloud costs across AWS, Azure, and GCP.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Cost Optimization Framework, AWS Cost Optimization, Azure Cost Optimization, GCP Cost Optimization, Tagging Strategy.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to cloud cost optimization
- You need a different domain or tool outside this scope
- Reduce cloud spending
- Right-size resources
- Implement cost governance
- Optimize multi-cloud costs

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

Implement systematic cost optimization strategies to reduce cloud spending while maintaining performance and reliability.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @cost-optimization to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/cost-optimization/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/cost-optimization/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @cost-optimization using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/cost-optimization`, fails to mention provenance, or does not use the support pack at all.
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

- `references/tagging-standards.md` - Tagging conventions
- `assets/cost-analysis-template.xlsx` - Cost analysis spreadsheet

#### Imported: Cost Optimization Framework

### 1. Visibility
- Implement cost allocation tags
- Use cloud cost management tools
- Set up budget alerts
- Create cost dashboards

### 2. Right-Sizing
- Analyze resource utilization
- Downsize over-provisioned resources
- Use auto-scaling
- Remove idle resources

### 3. Pricing Models
- Use reserved capacity
- Leverage spot/preemptible instances
- Implement savings plans
- Use committed use discounts

### 4. Architecture Optimization
- Use managed services
- Implement caching
- Optimize data transfer
- Use lifecycle policies

#### Imported: AWS Cost Optimization

### Reserved Instances
```
Savings: 30-72% vs On-Demand
Term: 1 or 3 years
Payment: All/Partial/No upfront
Flexibility: Standard or Convertible
```

### Savings Plans
```
Compute Savings Plans: 66% savings
EC2 Instance Savings Plans: 72% savings
Applies to: EC2, Fargate, Lambda
Flexible across: Instance families, regions, OS
```

### Spot Instances
```
Savings: Up to 90% vs On-Demand
Best for: Batch jobs, CI/CD, stateless workloads
Risk: 2-minute interruption notice
Strategy: Mix with On-Demand for resilience
```

### S3 Cost Optimization
```hcl
resource "aws_s3_bucket_lifecycle_configuration" "example" {
  bucket = aws_s3_bucket.example.id

  rule {
    id     = "transition-to-ia"
    status = "Enabled"

    transition {
      days          = 30
      storage_class = "STANDARD_IA"
    }

    transition {
      days          = 90
      storage_class = "GLACIER"
    }

    expiration {
      days = 365
    }
  }
}
```

#### Imported: Azure Cost Optimization

### Reserved VM Instances
- 1 or 3 year terms
- Up to 72% savings
- Flexible sizing
- Exchangeable

### Azure Hybrid Benefit
- Use existing Windows Server licenses
- Up to 80% savings with RI
- Available for Windows and SQL Server

### Azure Advisor Recommendations
- Right-size VMs
- Delete unused resources
- Use reserved capacity
- Optimize storage

#### Imported: GCP Cost Optimization

### Committed Use Discounts
- 1 or 3 year commitment
- Up to 57% savings
- Applies to vCPUs and memory
- Resource-based or spend-based

### Sustained Use Discounts
- Automatic discounts
- Up to 30% for running instances
- No commitment required
- Applies to Compute Engine, GKE

### Preemptible VMs
- Up to 80% savings
- 24-hour maximum runtime
- Best for batch workloads

#### Imported: Tagging Strategy

### AWS Tagging
```hcl
locals {
  common_tags = {
    Environment = "production"
    Project     = "my-project"
    CostCenter  = "engineering"
    Owner       = "team@example.com"
    ManagedBy   = "terraform"
  }
}

resource "aws_instance" "example" {
  ami           = "ami-12345678"
  instance_type = "t3.medium"

  tags = merge(
    local.common_tags,
    {
      Name = "web-server"
    }
  )
}
```

**Reference:** See `references/tagging-standards.md`

#### Imported: Cost Monitoring

### Budget Alerts
```hcl
# AWS Budget
resource "aws_budgets_budget" "monthly" {
  name              = "monthly-budget"
  budget_type       = "COST"
  limit_amount      = "1000"
  limit_unit        = "USD"
  time_period_start = "2024-01-01_00:00"
  time_unit         = "MONTHLY"

  notification {
    comparison_operator        = "GREATER_THAN"
    threshold                  = 80
    threshold_type            = "PERCENTAGE"
    notification_type         = "ACTUAL"
    subscriber_email_addresses = ["team@example.com"]
  }
}
```

### Cost Anomaly Detection
- AWS Cost Anomaly Detection
- Azure Cost Management alerts
- GCP Budget alerts

#### Imported: Architecture Patterns

### Pattern 1: Serverless First
- Use Lambda/Functions for event-driven
- Pay only for execution time
- Auto-scaling included
- No idle costs

### Pattern 2: Right-Sized Databases
```
Development: t3.small RDS
Staging: t3.large RDS
Production: r6g.2xlarge RDS with read replicas
```

### Pattern 3: Multi-Tier Storage
```
Hot data: S3 Standard
Warm data: S3 Standard-IA (30 days)
Cold data: S3 Glacier (90 days)
Archive: S3 Deep Archive (365 days)
```

### Pattern 4: Auto-Scaling
```hcl
resource "aws_autoscaling_policy" "scale_up" {
  name                   = "scale-up"
  scaling_adjustment     = 2
  adjustment_type        = "ChangeInCapacity"
  cooldown              = 300
  autoscaling_group_name = aws_autoscaling_group.main.name
}

resource "aws_cloudwatch_metric_alarm" "cpu_high" {
  alarm_name          = "cpu-high"
  comparison_operator = "GreaterThanThreshold"
  evaluation_periods  = "2"
  metric_name         = "CPUUtilization"
  namespace           = "AWS/EC2"
  period              = "60"
  statistic           = "Average"
  threshold           = "80"
  alarm_actions       = [aws_autoscaling_policy.scale_up.arn]
}
```

#### Imported: Cost Optimization Checklist

- [ ] Implement cost allocation tags
- [ ] Delete unused resources (EBS, EIPs, snapshots)
- [ ] Right-size instances based on utilization
- [ ] Use reserved capacity for steady workloads
- [ ] Implement auto-scaling
- [ ] Optimize storage classes
- [ ] Use lifecycle policies
- [ ] Enable cost anomaly detection
- [ ] Set budget alerts
- [ ] Review costs weekly
- [ ] Use spot/preemptible instances
- [ ] Optimize data transfer costs
- [ ] Implement caching layers
- [ ] Use managed services
- [ ] Monitor and optimize continuously

#### Imported: Tools

- **AWS:** Cost Explorer, Cost Anomaly Detection, Compute Optimizer
- **Azure:** Cost Management, Advisor
- **GCP:** Cost Management, Recommender
- **Multi-cloud:** CloudHealth, Cloudability, Kubecost

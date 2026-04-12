---
name: "aws-advisor"
description: "AWS Advisor workflow skill. Use this skill when the user needs AWS architecture guidance, security review, service selection, migration planning, operational troubleshooting, or implementation advice grounded in official AWS documentation and safe cloud practices."
version: "0.0.1"
category: "devops"
tags:
  - "aws-advisor"
  - "aws"
  - "architecture"
  - "security"
  - "well-architected"
  - "iam"
  - "vpc"
  - "lambda"
  - "s3"
  - "cloudformation"
  - "troubleshooting"
  - "migration"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "aws-advisor"
family_name: "AWS Advisor"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/aws-advisor"
upstream_skill: "skills/aws-advisor"
upstream_author: "Felipe Rodrigues - github.com/felipfr"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "aws-advisor"
---

# AWS Advisor

## Overview

Use this skill for AWS-focused advisory work: architecture design, service selection, security review, migration planning, implementation guidance, and troubleshooting triage.

This skill is optimized for agents that must produce documentation-backed AWS guidance without inventing platform behavior. It preserves the original intent of the upstream AWS advisor workflow while restructuring it into an operational AWS review process that is easier to execute, validate, and hand off.

Prefer this skill when the task requires:

- AWS-native trade-off analysis
- official-documentation-backed recommendations
- architecture or security review against AWS best practices
- region, account, IAM, networking, observability, or IaC-aware guidance
- safe troubleshooting that starts with read-only evidence gathering before change suggestions

If AWS MCP or other AWS documentation tools are available, use them to verify service behavior, regional availability, and current documentation before answering. If they are not available, explicitly state assumptions and anchor guidance to official AWS references listed in this skill.

## When to Use This Skill

Use this skill when the request is primarily about AWS.

### Good fit

- Designing or reviewing AWS architectures for reliability, security, cost, or scale
- Choosing between AWS services such as Lambda vs ECS vs EKS vs EC2, or RDS vs DynamoDB vs Aurora
- Reviewing IAM, cross-account access, Organizations guardrails, SCP implications, encryption, or network exposure
- Planning AWS migrations, modernization, or landing-zone decisions
- Troubleshooting AWS failures such as `AccessDenied`, S3 `403`, Lambda invocation issues, or VPC connectivity problems
- Advising on AWS IaC patterns with CloudFormation, CDK, SAM, or Terraform in AWS contexts
- Explaining AWS trade-offs, operational burden, and likely cost drivers

### Do not use this skill when

- The request is about non-AWS cloud providers without AWS context
- The issue is purely application-code debugging with no meaningful AWS dependency
- The user needs billing dispute handling or account-support actions that require AWS Support intervention
- The task has narrowed into a deeper specialization better handled by a focused skill, such as:
  - cluster-internal Kubernetes debugging on EKS
  - Terraform module authoring or deep state-management work
  - deep container runtime or Docker image debugging
  - service-specific incident response or tracing-heavy observability work

## Operating Table

| Request type | Collect first | AWS sources or tools to consult | Expected output |
| --- | --- | --- | --- |
| Service selection | workload type, scale, latency, statefulness, team skills, compliance, IaC preference | AWS docs, Prescriptive Guidance, regional availability checks | recommended service options with trade-offs, risks, and validation steps |
| Architecture review | workload purpose, traffic profile, dependencies, RTO/RPO, data sensitivity, account and region scope | Well-Architected Framework, Well-Architected Tool guidance, service docs | review findings by pillar, prioritized recommendations, assumptions |
| Security review | identity model, account structure, root/MFA posture, encryption requirements, public/private exposure, logging coverage | IAM best practices, Organizations best practices, service security docs | security findings, blast-radius notes, guardrail recommendations |
| Migration planning | source platform, migration goals, constraints, timeline, downtime tolerance, ops model | AWS Prescriptive Guidance, Cloud Adoption Framework, target service docs | phased migration options, dependencies, validation and rollback notes |
| Troubleshooting | exact error, affected ARN/resource, timestamps, region, account, recent changes, logs and metrics | AWS docs, CloudWatch evidence, IAM/S3/Lambda/VPC troubleshooting references | likely causes, evidence-based diagnosis, safe next actions |
| Governance and landing zone | org structure, environments, account boundaries, SCP usage, tagging model, access model | AWS Organizations docs, tagging guidance, IAM docs | governance recommendations, account separation model, guardrails |
| Cost and ops review | traffic shape, data transfer paths, idle patterns, retention, HA goals, management overhead | Well-Architected cost guidance, Trusted Advisor guidance, tagging references | cost drivers, optimization opportunities, operational burden summary |

## Workflow

Follow this workflow in order. Branch only after scope is clear.

1. **Classify the request**
   - Determine whether the task is architecture review, security review, migration planning, service selection, troubleshooting, or implementation guidance.
   - Confirm that the scope is AWS-specific.

2. **Gather minimum context**
   - Identify account, region, environment, and services in scope.
   - Ask for workload goals, scale expectations, latency targets, compliance constraints, availability targets, and budget sensitivity.
   - If relevant, ask for preferred language, runtime, and IaC tool.
   - Use [AWS discovery questionnaire](references/aws-discovery-questionnaire.md) when the request is underspecified.

3. **Capture assumptions and constraints explicitly**
   - Record unknowns instead of guessing.
   - Note whether the advice assumes single-account or multi-account design, internet-facing or private networking, and managed or self-managed operations.
   - Require explicit mention of RTO/RPO, data sensitivity, and region constraints when they materially affect recommendations.

4. **Verify with AWS documentation**
   - Search official AWS documentation before giving prescriptive advice.
   - Check regional availability when recommending region-dependent services or features.
   - For troubleshooting, prefer service-specific docs for the exact error mode.
   - Use the search topic guidance in [AWS observability and documentation notes](references/aws-observability-troubleshooting-guide.md) when AWS MCP-like tools are available.

5. **Evaluate the design or issue across AWS decision dimensions**
   - Architecture: fit, scale, resiliency, failure domains, dependencies
   - Security: identity, least privilege, encryption, public exposure, logging, secrets handling
   - Operations: deployment model, observability, runbooks, backups, rollback
   - Cost: primary cost drivers, hidden transfer/logging/NAT/storage costs, management overhead
   - Governance: account boundaries, tagging, SCP impact, ownership model

6. **Produce options with trade-offs**
   - Recommend a primary option and at least one reasonable alternative when appropriate.
   - Explain why one option is favored.
   - Call out cost, operational burden, portability, and security implications.
   - Use [AWS service selection matrix](references/aws-service-selection-matrix.md) for common compute, data, and ingress choices.

7. **Define validation steps before implementation or change**
   - Separate read-only diagnostics from change recommendations.
   - Suggest validation such as policy simulation, review of resource policies, Trusted Advisor checks, CloudWatch logs inspection, IaC preview or change review, and rollback planning.
   - If direct tool access is unavailable, phrase these as recommended operator checks, not completed actions.

8. **Prepare the handoff-quality answer**
   - Include assumptions, recommendation, alternatives, security notes, cost drivers, operational notes, and validation steps.
   - Use [AWS advisory response template](examples/aws-advisory-response-template.md) for consistent output.
   - Route to a more specialized skill if the task becomes implementation-heavy or service-deep.

### Branch workflow: architecture review

1. Gather workload purpose, users, traffic, dependencies, RTO/RPO, and data classification.
2. Map current or proposed components and trust boundaries.
3. Review against the six Well-Architected pillars using [Well-Architected review checklist](references/aws-well-architected-review-checklist.md).
4. Identify high-risk assumptions, single points of failure, and unsupported region or service assumptions.
5. Return prioritized findings: must-fix, should-improve, optional optimization.

### Branch workflow: security review

1. Identify identities, access paths, network exposure, data stores, and encryption boundaries.
2. Review IAM role usage, temporary credentials, root account protections, and cross-account trust.
3. Check Organizations and SCP implications if multi-account is in scope.
4. Review service-specific controls with [AWS security review checklist](references/aws-security-review-checklist.md).
5. Return findings with severity, blast radius, and least-privilege-safe remediation options.

### Branch workflow: migration planning

1. Clarify migration goals: rehost, replatform, refactor, retire, or replace.
2. Capture downtime tolerance, data gravity, cutover constraints, and compliance requirements.
3. Compare target service options and operating models.
4. Propose phased migration, validation gates, and rollback points.
5. Highlight prerequisites such as networking, identity, observability, and backup readiness.

### Branch workflow: troubleshooting

1. Start with the exact symptom, timestamp, region, account, and affected resources.
2. Gather logs, metrics, policies, routes, security groups, ARNs, and recent changes using [troubleshooting evidence checklist](references/aws-troubleshooting-evidence-checklist.md).
3. Form a short list of likely causes from official service docs.
4. Recommend read-only checks first.
5. Only then propose the narrowest safe remediation.

## Examples

### Example 1: Architecture review request

```text
Use @aws-advisor to review a proposed SaaS architecture on AWS.
Context: multi-tenant API, private data plane, us-east-1 primary, RTO 1 hour, RPO 15 minutes, Terraform preferred.
Return: recommended architecture, key risks, security concerns, cost drivers, and validation steps.
```

**Expected output shape:** a structured architecture review with assumptions, primary recommendation, alternatives, Well-Architected findings, and rollout validation.

### Example 2: Service selection request

```text
Use @aws-advisor to choose between Lambda, ECS Fargate, and EKS for an event-driven workload with bursty traffic, moderate cold-start sensitivity, and a small ops team.
```

**Expected output shape:** comparison of options, recommended service, trade-offs, operational burden, and likely cost drivers.

### Example 3: Troubleshooting S3 403

```text
Use @aws-advisor to troubleshoot an S3 403 AccessDenied.
Context: writes from a workload in account A to a bucket in account B started failing today in eu-west-1. Check likely IAM, bucket policy, SCP, KMS, and VPC endpoint causes before suggesting a fix.
```

**Expected output shape:** evidence checklist, likely causes ranked by probability, safe diagnostic steps, and a minimal remediation plan.

### Example 4: Preferred implementation style

```text
Use @aws-advisor for an AWS solution proposal.
Preferred language: Python.
Preferred IaC: CDK.
Need: private API, Lambda backend, Aurora PostgreSQL, least-privilege IAM, and deployment validation steps.
```

**Expected output shape:** AWS-backed recommendation using the requested language and IaC preference, with security and rollout notes.

### Example 5: Local support-pack usage

```bash
python3 scripts/print_aws_advisor_reference_index.py
```

**Expected output shape:** a local index of the bundled references, examples, and router notes to support consistent skill execution.

## Best Practices

### Do

- **Search before prescribing.** Verify behavior in official AWS docs before making specific claims.
- **State assumptions explicitly.** Account, region, environment, identity model, and compliance constraints often change the right answer.
- **Prefer least privilege.** Favor IAM roles and temporary credentials over long-lived access keys.
- **Check for overriding policy layers.** `AccessDenied` may come from SCPs, permission boundaries, session policies, resource policies, VPC endpoint policies, or explicit deny.
- **Use Well-Architected framing** for architecture reviews so recommendations are systematic instead of ad hoc.
- **Separate diagnostics from remediation.** Start with evidence gathering and read-only checks.
- **Call out cost drivers honestly.** Mention likely drivers such as NAT, cross-AZ traffic, idle resources, logging retention, data transfer, and managed-service premiums.
- **Match the user's stack.** Ask for preferred language, framework, and IaC tool before generating implementation examples.
- **Use AWS-native guardrails by default.** Root protection, MFA, logging, encryption, account separation, and tagging should be part of normal review.
- **Provide validation and rollback notes.** Recommendations are incomplete without a safe way to verify them.

### Do not

- **Do not guess AWS feature behavior** when documentation can be checked.
- **Do not recommend broad permissions** such as attaching admin policies as a default fix.
- **Do not suggest disabling S3 Block Public Access** or opening security groups widely without clear scope, risk explanation, and safer alternatives.
- **Do not assume regional parity.** Verify that the required service or feature exists in the target region.
- **Do not present Trusted Advisor, Well-Architected Tool, or AWS console findings as already executed** unless the environment actually provides access.
- **Do not optimize only for speed.** Include security, operational burden, and failure recovery in the recommendation.

### Implementation guidance notes preserved from the upstream intent

#### Ask before generating code

Before producing code or IaC examples, ask or infer:

1. preferred language
2. preferred IaC tool
3. framework requirements
4. runtime or platform constraints

#### IaC selection guidance

| Context | Usually fits best | Why |
| --- | --- | --- |
| Quick MVP, serverless-heavy | Serverless Framework, SST, or SAM | faster iteration, higher convention |
| Existing Terraform estate or multi-cloud posture | Terraform | consistency and portability |
| Complex AWS with a TypeScript-heavy team | CDK | abstraction and type-safe constructs |
| Simple Lambda plus API workload | SAM | AWS-native and lightweight |
| Low-level AWS control or foundational learning | CloudFormation | direct AWS resource modeling |

## Troubleshooting

### Problem: IAM or STS `AccessDenied`

**Symptoms:** API calls fail with `AccessDenied`, `not authorized`, or failed `AssumeRole`. The caller appears to have a policy that should allow the action.

**Likely causes:**
- explicit deny in IAM policy or resource policy
- Organizations SCP deny
- permission boundary restriction
- session policy restriction
- wrong principal, account, or role assumption path
- missing trust policy conditions for `AssumeRole`

**Evidence to request:** caller ARN, target resource ARN, account IDs, region, exact error text, relevant IAM policy snippets, trust policy, SCP context, permission boundary usage, and timestamp.

**Solution:**
1. Confirm the actual caller identity and account context.
2. Check for explicit deny before reviewing allows.
3. Review trust policy and session assumptions for cross-account access.
4. Check whether an SCP, permission boundary, or session policy narrows effective permissions.
5. Recommend the narrowest permission or trust correction only after the denial source is identified.

### Problem: Amazon S3 `403 AccessDenied`

**Symptoms:** Reads or writes to S3 fail even though bucket or IAM permissions appear correct.

**Likely causes:**
- bucket policy deny or missing allow
- S3 Block Public Access interaction
- KMS key policy or KMS permissions problem
- Organizations SCP restriction
- VPC endpoint policy restriction
- requester pays behavior
- object ownership or ACL-related mismatch in legacy setups

**Evidence to request:** bucket name, object path, caller ARN, region, bucket policy, IAM policy, KMS key ARN and policy if encryption is involved, VPC endpoint usage, and exact request type.

**Solution:**
1. Verify whether the failure is bucket-level, object-level, or KMS-related.
2. Check bucket policy and Block Public Access interactions.
3. Confirm KMS permissions separately when SSE-KMS is involved.
4. If access is cross-account, review ownership and policy alignment on both sides.
5. Avoid recommending public exposure changes unless the use case explicitly requires them.

### Problem: Lambda invocation failure, timeout, or throttling

**Symptoms:** Lambda does not trigger, times out, returns errors, or shows throttling under load.

**Likely causes:**
- missing invoke permissions from trigger source
- concurrency throttling
- VPC networking or ENI path issue
- downstream dependency timeout
- event source mapping backlog or failure
- payload, retry, or async behavior misunderstanding

**Evidence to request:** function name and ARN, region, trigger type, CloudWatch log excerpts, timeout setting, memory size, concurrency settings, recent deployment changes, and downstream dependency details.

**Solution:**
1. Confirm whether the function was invoked at all.
2. Inspect CloudWatch logs and metrics first.
3. Check invoke permissions and trigger configuration.
4. Review timeout, memory, reserved concurrency, and retry behavior.
5. If the function is in a VPC, verify route, DNS, egress path, and dependency reachability before changing code.

### Problem: EC2, RDS, or private-service connectivity failure inside a VPC

**Symptoms:** A workload cannot reach a database, private API, or external dependency. Connections time out or are refused intermittently.

**Likely causes:**
- security group rules do not allow the required source/destination path
- wrong subnet or route table association
- missing NAT, IGW, or VPC endpoint path
- DNS resolution issue
- NACL mismatch
- service listening or target health problem

**Evidence to request:** source and destination resource IDs, subnets, route tables, security groups, NACLs, DNS names, ports, protocol, and whether traffic is intra-VPC, cross-VPC, or internet-bound.

**Solution:**
1. Trace the network path hop by hop.
2. Verify security groups before changing them.
3. Confirm route table intent for the source subnet.
4. Check DNS resolution and target health.
5. Suggest the smallest required network change rather than broadening exposure.

### Problem: The request is too vague for safe AWS advice

**Symptoms:** The user asks for “best AWS architecture” or “fix AWS permissions” without account, region, service, scale, or security context.

**Solution:** Use the [AWS discovery questionnaire](references/aws-discovery-questionnaire.md) and refuse to over-prescribe until minimum constraints are known.

## Related Skills

Route deliberately when this advisory skill has narrowed into a more implementation-heavy specialization.

- `@terraform` - for deeper Terraform module design, state strategy, or provider-specific implementation work
- `@kubernetes` - for cluster-level Kubernetes or EKS operational debugging beyond AWS platform selection and guardrails
- `@docker` - for container image, runtime, or Docker build/debugging issues
- `@security-review` - for broader non-AWS or code-heavy security review workflows
- `@observability` - for deep tracing, metrics correlation, or incident analysis workflows
- `@incident-response` - for active incident handling, containment, and recovery coordination

If a named related skill is not available in the current environment, keep the handoff conceptual and state what specialization is needed.

## Additional Resources

### Local references in this skill

- [AWS discovery questionnaire](references/aws-discovery-questionnaire.md)
- [AWS Well-Architected review checklist](references/aws-well-architected-review-checklist.md)
- [AWS security review checklist](references/aws-security-review-checklist.md)
- [AWS troubleshooting evidence checklist](references/aws-troubleshooting-evidence-checklist.md)
- [AWS service selection matrix](references/aws-service-selection-matrix.md)
- [AWS governance and guardrails](references/aws-governance-and-guardrails.md)
- [AWS observability troubleshooting guide](references/aws-observability-troubleshooting-guide.md)
- [AWS advisory response template](examples/aws-advisory-response-template.md)
- [AWS architecture review example](examples/aws-architecture-review-example.md)
- [AWS troubleshooting casebook](examples/aws-troubleshooting-casebook.md)
- [Reference index printer](scripts/print_aws_advisor_reference_index.py)
- [AWS routing guidance](agents/aws-router.md)

### Official AWS references

- AWS Well-Architected Framework: <https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html>
- AWS Well-Architected Tool: <https://docs.aws.amazon.com/wellarchitected/latest/userguide/intro.html>
- AWS Prescriptive Guidance: <https://docs.aws.amazon.com/prescriptive-guidance/latest/guidance-overview/introduction.html>
- AWS Trusted Advisor: <https://docs.aws.amazon.com/awssupport/latest/user/trusted-advisor.html>
- IAM best practices: <https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html>
- AWS Organizations best practices: <https://docs.aws.amazon.com/organizations/latest/userguide/orgs_best-practices.html>
- S3 security best practices: <https://docs.aws.amazon.com/AmazonS3/latest/userguide/security-best-practices.html>
- S3 `403` troubleshooting: <https://docs.aws.amazon.com/AmazonS3/latest/userguide/troubleshoot-403-errors.html>
- Lambda best practices: <https://docs.aws.amazon.com/lambda/latest/dg/best-practices.html>
- Lambda invocation troubleshooting: <https://docs.aws.amazon.com/lambda/latest/dg/troubleshooting-invocation.html>
- VPC security group rules: <https://docs.aws.amazon.com/vpc/latest/userguide/security-group-rules.html>
- VPC route tables: <https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Route_Tables.html>
- CloudWatch Logs Insights query syntax: <https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CWL_QuerySyntax.html>
- CloudFormation best practices: <https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/best-practices.html>
- AWS CDK Developer Guide: <https://docs.aws.amazon.com/cdk/v2/guide/home.html>
- Amazon EKS best practices: <https://aws.github.io/aws-eks-best-practices/>

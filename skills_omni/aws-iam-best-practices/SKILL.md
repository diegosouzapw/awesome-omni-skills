---
name: "aws-iam-best-practices"
description: "AWS IAM Best Practices workflow skill. Use this skill when the user needs IAM policy review, hardening, and least privilege implementation and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "testing-security"
tags:
  - "aws"
  - "iam"
  - "security"
  - "access-control"
  - "kiro-cli"
  - "least-privilege"
  - "aws-iam-best-practices"
  - "policy"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "aws-iam-best-practices"
family_name: "AWS IAM Best Practices"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/aws-iam-best-practices"
upstream_skill: "skills/aws-iam-best-practices"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "aws-iam-best-practices"
---

# AWS IAM Best Practices

## Overview

This skill packages the upstream workflow from `plugins/antigravity-awesome-skills-claude/skills/security/aws-iam-best-practices` in `https://github.com/sickn33/antigravity-awesome-skills` while keeping provenance explicit.

Use it for AWS IAM policy review, effective-permissions analysis, deny troubleshooting, and least-privilege hardening. Treat the task as more than JSON review: AWS authorization outcomes can depend on identity policies, resource policies, trust policies, permissions boundaries, session policies, and AWS Organizations SCPs.

This skill favors safe review and evidence-backed recommendations over blind mutation. Prefer temporary credentials, roles, federation, MFA, and iterative least privilege where the findings support those changes. Do not promise least-privilege precision from static inspection alone; use validation, simulation, and observed access activity when available.

Open these local support files during execution:

- `references/review-criteria.md` for a compact review rubric, risky construct matrix, and deny triage order.
- `examples/review-example.md` for a worked before/after policy review with findings, narrowing strategy, and expected validation results.

## When to Use This Skill

Use this skill when:

- You need to review an IAM identity policy, trust policy, permissions boundary, or related access design.
- You need to explain why access is denied even though a policy appears to allow the action.
- You need to harden overly broad IAM permissions toward least privilege.
- You need a review output that includes evidence, risks, validation results, and open questions.
- You need to preserve upstream provenance and workflow context while producing a stronger operational review.

Do **not** use this skill alone when:

- The main task is emergency credential compromise response or active incident handling.
- The main task is full AWS Organizations governance design, Identity Center rollout, or enterprise identity architecture.
- The task requires live production changes without enough context to test or safely roll back.
- The request is really about service-specific authorization internals that need deeper domain review beyond IAM.

## Operating Table

| Goal | Required inputs | AWS context to collect | Validation method | Output | Stop conditions |
| --- | --- | --- | --- | --- | --- |
| Review a policy document | Policy JSON, attached principal, intended use case, target resources | Policy type, attachments, whether inline or managed | IAM Access Analyzer policy validation, manual review against rubric | Findings list with risky statements and recommended changes | Missing business requirement or missing resource scope |
| Explain denied access | Error text or failing action, caller identity, target resource | Identity policies, resource policy, trust policy, permissions boundary, SCP or session-policy context | AWS policy evaluation logic, simulator where applicable | Deny cause hypothesis with evidence and next checks | Cannot determine org-level or resource-policy context |
| Harden toward least privilege | Existing permissions, required actions, affected resources, operational constraints | Last-accessed data, access activity, service/resource scope, deployment risk | Access Analyzer, simulator, review of observed usage | Narrowed policy or staged change plan | No reliable requirements or no safe test path |
| Review role assumption flow | Trust policy, caller principal, target role, expected session use | `sts:AssumeRole` permissions, trust relationships, external ID or condition use, session constraints | Trust + identity review, simulator where possible | Trust-policy findings and remediation plan | Cross-account details or trust requirements are incomplete |
| Prepare merge or handoff | Review notes, evidence, open questions, provenance | What was inspected, what was not inspected, validation gaps | Checklist against this skill and local reference | Review packet with residual risk and follow-ups | Unvalidated high-risk permission remains unexplained |

Minimum inputs for a useful review:

- The policy or policies under review.
- The principal that uses them.
- The intended business behavior.
- The resources and environments affected.
- Whether permissions boundaries, SCPs, or resource policies may apply.

## Workflow

1. **Confirm scope and safety boundary**
   - Identify whether the task is policy review, deny troubleshooting, trust review, or least-privilege hardening.
   - State whether the work is read-only analysis or includes proposed edits.
   - If the request lacks required context, ask for the missing principal, action, resource, and business purpose before recommending changes.

2. **Inventory effective-permissions context**
   - Identify the principal type: user, role, group attachment, or assumed-role session.
   - Gather all relevant policy layers: identity-based policies, resource policies, trust policies, permissions boundaries, session policies, and SCPs if the account is in AWS Organizations.
   - Record whether the policy is inline or managed and whether similar permissions are duplicated elsewhere.

3. **Review for high-risk constructs**
   - Look for `Action: "*"`, `Resource: "*"` on write or admin actions, broad `iam:*`, `sts:*`, or cross-service admin access.
   - Inspect `iam:PassRole`, `sts:AssumeRole`, wildcard principals in trust policies, and missing conditions on sensitive operations.
   - Flag `NotAction` and `NotResource` for careful evaluation because they can widen access unexpectedly.
   - Look for missing scoping conditions such as tags, MFA requirements, network or region limits, or service-specific constraints where appropriate.
   - Check for stale inline policy sprawl, duplicated statements, and grants to services the principal does not appear to use.

4. **Validate semantics before suggesting fixes**
   - Use AWS IAM Access Analyzer policy validation as the first semantic check.
   - Separate syntax issues, semantic warnings, security warnings, and maintainability issues.
   - Do not treat a valid JSON document as a safe policy.

5. **Model intended access**
   - Write down the smallest set of actions and resources the principal actually needs.
   - If available, use Access Advisor or access activity evidence to identify unused service permissions.
   - Prefer an iterative narrowing approach when exact least privilege is not yet known.

6. **Test representative access paths**
   - Use the IAM policy simulator or equivalent AWS-native testing for representative actions and resources.
   - Test both allowed and denied expectations.
   - For role assumption flows, test both the caller-side permission and the target role trust policy assumptions.

7. **Produce a review output that is explicit and reversible**
   - For each finding, record: affected principal, risky statement, why it is risky, proposed narrowing, validation result, and any rollback concern.
   - Distinguish confirmed fixes from recommendations that still require usage evidence or stakeholder confirmation.
   - If broad permissions remain temporarily necessary, say why and define the next evidence needed to reduce them.

8. **Prepare handoff or merge notes**
   - Summarize what was reviewed and what was not.
   - Record open questions about SCPs, permissions boundaries, resource policies, trust relationships, or service-specific resource scoping.
   - Keep provenance visible when reporting that this workflow originated from the upstream community skill.

## Review Heuristics

Use these default heuristics unless the environment provides stronger service-specific constraints:

- Prefer IAM roles and temporary credentials over long-term user credentials.
- Prefer explicit resource ARNs over `Resource: "*"` for write, admin, and data-access operations.
- Prefer allow lists of exact actions over broad service wildcards.
- Prefer condition keys that narrow who, where, or how access is used when those controls match the business requirement.
- Prefer managed policies when permissions need versioning, reuse, or centralized review; avoid uncontrolled inline sprawl.
- Treat `iam:PassRole` as sensitive and scope it tightly to approved roles and use cases.
- Review trust policies separately from permission policies; a correct identity policy does not fix an overly broad trust policy.

## Troubleshooting

### Access allowed by identity policy but still denied

Check in this order:

1. Is there an explicit deny in any applicable policy?
2. Is an SCP restricting the account or OU?
3. Is a permissions boundary limiting the principal?
4. Is a session policy reducing the assumed-role session?
5. Is a resource policy or trust policy missing, narrower than expected, or denying the call?
6. Is the action being attempted against a different resource ARN, region, or account than the policy assumes?

### Common playbooks

#### 1. Identity policy appears correct, but an SCP denies access

Symptoms:

- The principal has an allow that looks sufficient.
- Access is denied only in some accounts or organizational units.
- Similar permissions work elsewhere.

Evidence to collect:

- Failing action and resource.
- Target account and OU.
- Any SCPs attached to the account, OU, or root.

Safe next actions:

- Confirm the deny path before changing the identity policy.
- Escalate to the organization owner if the restriction is intentional or unknown.

#### 2. Identity policy allows action, but a permissions boundary blocks it

Symptoms:

- The attached policy seems to allow the action.
- The principal is a role or user with a boundary attached.
- Changes to the identity policy do not resolve the problem.

Evidence to collect:

- Boundary policy ARN and contents.
- Whether the denied action is outside the boundary's maximum permission set.

Safe next actions:

- Review the boundary and the identity policy together.
- Avoid widening the identity policy if the boundary is the real limiter.

#### 3. `AssumeRole` or resource access fails because trust or resource policy is narrower than expected

Symptoms:

- Caller has `sts:AssumeRole` but still cannot assume the role.
- Identity policy allows access, but resource access is denied.

Evidence to collect:

- Caller principal ARN.
- Target role trust policy or target resource policy.
- External ID, principal tags, source IP, region, or MFA conditions that may apply.

Safe next actions:

- Review both sides of the authorization path.
- Do not widen the identity policy until trust or resource-side constraints are understood.

## Additional Resources

Local support files:

- `references/review-criteria.md`
- `examples/review-example.md`

AWS documentation used to strengthen this workflow:

- AWS IAM security best practices: https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html
- Policy evaluation logic: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html
- IAM Access Analyzer policy validation: https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-validation.html
- Policy generation from access activity: https://docs.aws.amazon.com/IAM/latest/UserGuide/access-analyzer-policy-generation.html
- Access Advisor: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_access-advisor.html
- IAM policy simulator: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_testing-policies.html
- Access denied troubleshooting: https://docs.aws.amazon.com/IAM/latest/UserGuide/troubleshoot_access-denied.html
- AWS global condition keys: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_condition-keys.html
- `NotAction`: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notaction.html
- `NotResource`: https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_notresource.html
- SCPs: https://docs.aws.amazon.com/organizations/latest/userguide/orgs_manage_policies_scps.html
- Permissions boundaries: https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_boundaries.html

## Related Skills

Consider a different or adjacent skill when the task becomes primarily about:

- AWS Organizations governance or SCP design.
- Identity Center or enterprise federation rollout.
- Cloud incident response or credential compromise recovery.
- Broad cloud posture assessment beyond IAM authorization review.

## Imported Workflow Notes

The original upstream skill emphasized IAM review, hardening, and least privilege. This enhanced candidate preserves that intent, keeps provenance visible, and adds a more deterministic AWS-native review flow centered on evaluation logic, semantic validation, simulation, and safer troubleshooting.

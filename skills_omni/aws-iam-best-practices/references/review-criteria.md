# IAM Review Criteria

Use this file during execution when you need a compact audit rubric instead of rereading the full skill.

## 1. Minimum evidence to collect

Before recommending changes, capture:

- Principal ARN or type.
- Policy type under review: identity, resource, trust, permissions boundary, or session policy.
- Business purpose of the access.
- Required actions and target resources.
- Whether the account is governed by AWS Organizations SCPs.
- Whether the principal has a permissions boundary.
- Whether the principal operates through assumed-role sessions.
- Any known environment constraints: region, network source, tags, MFA, external ID, or workload identity pattern.

If these are unknown, mark the review as partial.

## 2. Review checklist

### Scope and structure

- Is the reviewed document the only relevant policy layer?
- Is the policy inline when a managed policy would be easier to review and version?
- Are similar permissions duplicated across multiple policies?
- Are there stale statements for services the principal does not use?

### High-risk permission patterns

- `Action: "*"` or broad service wildcards.
- `Resource: "*"` on write, admin, or data-access APIs.
- Broad `iam:*`, `organizations:*`, `kms:*`, `s3:*`, `ec2:*`, or service-admin patterns without strong justification.
- `iam:PassRole` not tightly scoped to approved roles and use paths.
- `sts:AssumeRole` permissions that allow broad lateral movement.
- Trust policies with wildcard principals or weak cross-account conditions.
- Use of `NotAction` or `NotResource` in ways that are difficult to reason about safely.
- Sensitive actions missing conditions that could narrow usage.

### Least-privilege tightening checks

- Can actions be reduced from wildcard to exact API names?
- Can resources be reduced from `*` to named ARNs?
- Can tag-based, region-based, network-based, or MFA conditions safely narrow access?
- Can unused service permissions be removed based on Access Advisor or other usage evidence?
- Can a broad bootstrap policy become a staged policy with monitoring and follow-up reduction?

## 3. Risky construct matrix

| Construct | Why it is risky | What to inspect | Safer direction |
| --- | --- | --- | --- |
| `Action: "*"` | Grants unpredictable breadth across services | Whether admin breadth is truly required | Replace with exact services or actions |
| `Resource: "*"` on write/admin | Allows changes outside intended scope | Whether resource ARNs can be enumerated | Scope to explicit ARNs or resource patterns |
| `iam:PassRole` | Enables privilege escalation through service roles | Which roles can be passed and to which services | Restrict to approved role ARNs and use conditions |
| Broad `sts:AssumeRole` | Allows lateral movement or cross-account escalation | Target roles, trust policies, external ID or principal conditions | Limit target roles and enforce trust constraints |
| `NotAction` | Can allow more than the reviewer expects | Whether resource scope and exclusions are precise | Prefer explicit allowed actions |
| `NotResource` | Can exclude only a subset and still grant broad reach | Whether the statement becomes too wide elsewhere | Prefer explicit resource lists |
| Trust policy wildcard principal | Expands who may assume a role | Principal scope, account IDs, service principals, conditions | Name exact principals and add conditions |
| Missing conditions on sensitive APIs | Leaves access usable from unintended contexts | MFA, tags, source network, region, service context | Add matching condition keys where appropriate |

## 4. Denial triage order

When a request is denied, check in this order:

1. Explicit deny in identity, resource, trust, boundary, session, or SCP context.
2. Whether the action is outside an SCP.
3. Whether a permissions boundary caps the principal below the apparent allow.
4. Whether a session policy narrows an assumed-role session.
5. Whether a resource policy or trust policy fails to allow the caller.
6. Whether the action, ARN, region, or account differs from what the policy statement actually covers.

## 5. Validation sequence

Use the AWS-native sequence below when available:

1. IAM Access Analyzer policy validation for semantic and best-practice findings.
2. IAM policy simulator for representative allow and deny tests.
3. Access Advisor or access activity evidence for least-privilege reduction.
4. Manual review of trust policies, resource policies, boundaries, and SCP context.

## 6. Review output template

For each finding, record:

- Severity.
- Principal or policy affected.
- Exact statement or construct.
- Why it is risky.
- Proposed narrowing or remediation.
- Validation evidence.
- Open dependency or uncertainty.

## 7. Safe review reminders

- Do not remove permissions blindly from production principals without usage evidence or stakeholder confirmation.
- Do not assume an identity policy alone determines the result.
- Do not declare least privilege complete when service-specific resource scoping is still uncertain.
- Treat broad temporary permissions as debt with a review date, not as a final state.

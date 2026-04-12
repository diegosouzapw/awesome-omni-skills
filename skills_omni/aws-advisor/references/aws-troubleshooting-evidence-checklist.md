# AWS Troubleshooting Evidence Checklist

Gather this evidence before suggesting changes.

## Always collect

- exact error message
- timestamp with timezone
- account ID
- region
- resource names and ARNs
- recent configuration or deployment changes
- whether the issue is new, intermittent, or constant

## Identity and policy issues

- caller identity ARN
- target resource ARN
- IAM policy snippets
- resource policy snippets
- trust policy if cross-account or role assumption is involved
- permission boundary or SCP context

## S3 issues

- bucket name and object path
- bucket policy
- KMS key ARN and policy if SSE-KMS is used
- VPC endpoint usage and endpoint policy
- requester pays status if relevant

## Lambda issues

- function ARN
- trigger source
- last deployment time
- timeout, memory, and concurrency settings
- CloudWatch log excerpts
- downstream dependency path

## Networking issues

- source and destination resources
- subnets
- route tables
- security groups
- NACLs
- DNS names and resolution behavior
- whether traffic is private, internet-bound, or cross-account/cross-VPC

## Observability

- relevant metrics
- relevant log group names
- alarm state if any
- trace or request IDs if available

## Guardrails

- Prefer read-only commands, policy review, log review, and configuration inspection first.
- Do not broaden exposure or permissions until the failure mode is identified.

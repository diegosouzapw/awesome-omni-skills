# AWS Security Review Checklist

Use this checklist when IAM, account structure, exposure, encryption, or logging are in scope.

## Identity and access

- Are IAM roles preferred over long-lived users and access keys?
- Are privileged actions limited and reviewable?
- Are permission boundaries, SCPs, and resource policies considered?
- Are cross-account trust policies narrow and justified?
- Is MFA enforced where needed?

## Root and account hygiene

- Is root usage minimized?
- Is root MFA enabled?
- Are workloads separated by account where blast radius matters?
- Is Organizations structure intentional?

## Network boundaries

- Which services are internet-facing?
- Are security groups least-privilege and source-specific?
- Are private subnets and endpoints used where appropriate?
- Are NACLs and route tables aligned with intent?

## Data protection

- Is encryption at rest required?
- Is encryption in transit required?
- Are KMS key permissions understood?
- Are backups and restore expectations defined?
- Is sensitive data exposed in logs or environment variables?

## Logging and detection

- Are CloudTrail, service logs, and access logs enabled where needed?
- Are alarms defined for high-risk failures or access patterns?
- Are log retention and access controls defined?

## Service-specific prompts

### S3
- Is Block Public Access enabled unless a clear exception exists?
- Are bucket policies narrow?
- Is object ownership behavior understood?

### Lambda
- Does the function use least-privilege execution roles?
- Are secrets stored outside code and plain environment variables where appropriate?
- Is VPC attachment necessary and understood?

### API Gateway / ALB / CloudFront
- Is auth model explicit?
- Is TLS termination and exposure path understood?
- Are WAF or throttling controls needed?

### RDS / Aurora
- Is network exposure minimized?
- Are backups, patching, and credential rotation covered?
- Are failover expectations aligned with the selected engine and topology?

### EKS
- Are cluster authz boundaries clear?
- Are worker/node permissions and network policies reviewed?
- Is secret handling and image provenance addressed?

## Review output

For each finding, include:

- issue
- risk
- blast radius
- safer recommendation
- evidence still needed

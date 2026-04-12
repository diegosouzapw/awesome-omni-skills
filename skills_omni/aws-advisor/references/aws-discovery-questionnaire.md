# AWS Discovery Questionnaire

Use this before recommending architecture, security controls, migration steps, or remediation.

## Workload basics

- What is the workload supposed to do?
- Who uses it: internal users, external users, systems, or tenants?
- Is it new, existing, or being migrated?
- What environments exist: dev, test, staging, prod?

## Scope

- Which AWS account or accounts are in scope?
- Which AWS region or regions are required?
- Is the design single-account, multi-account, or cross-account?
- Which AWS services are already in use?

## Reliability and scale

- Expected requests per second, concurrency, batch volume, or data ingest rate?
- Availability target?
- RTO and RPO?
- Peak versus steady-state traffic?
- Tolerance for eventual consistency?

## Security and compliance

- Data classification: public, internal, confidential, regulated?
- Compliance requirements: PCI, HIPAA, GDPR, SOC 2, internal policy?
- Internet-facing or private-only?
- Encryption requirements at rest and in transit?
- SSO, federation, or cross-account access needs?

## Networking

- Public VPC, private VPC, hybrid, or on-prem connectivity?
- Need for VPC endpoints, Direct Connect, VPN, or peering?
- Ingress path: API Gateway, ALB, CloudFront, private endpoint?
- East-west connectivity constraints?

## Data

- Primary data stores?
- Structured, key-value, object, cache, or stream?
- Data retention and backup expectations?
- Data residency constraints?
- Recovery and restore expectations?

## Operations

- Who will operate this workload?
- Small ops team or dedicated platform team?
- Required observability: logs, metrics, traces, alarms?
- Change frequency and release strategy?
- Rollback expectations?

## Delivery preferences

- Preferred language or runtime?
- Preferred IaC: CloudFormation, CDK, SAM, Terraform, other?
- Existing CI/CD constraints?
- Managed service preference versus self-managed control?

## Cost and ownership

- Cost sensitivity: optimize for lowest cost, team velocity, or balanced trade-off?
- Required tags: owner, environment, cost center, application, data classification?
- Known budget or chargeback model?

## Minimum safe output rule

If the user cannot provide most of the items above, give a conditional recommendation and label all major assumptions clearly.

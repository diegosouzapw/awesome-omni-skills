# Worked Example: Multi-Account AWS Compliance Status Summary

## User request

"Check whether our AWS estate is compliant with CIS AWS Foundations and give me a PCI DSS and HIPAA readiness summary for leadership. We have 12 accounts in our organization and mainly use us-east-1 and us-west-2."

## Good preflight questions

Before claiming results, ask:

1. Are all 12 accounts in scope, or only production accounts?
2. Are us-east-1 and us-west-2 the only in-scope regions?
3. Is AWS Security Hub enabled in all in-scope accounts and both regions?
4. Is AWS Config recording the relevant resource types in those accounts and regions?
5. Do you want only a technical findings summary, or also an audit-evidence package?
6. Should this remain read-only, with remediation excluded from this run?

## Scope assumptions for this example

- Scope: 12 AWS accounts in one organization
- Regions: us-east-1 and us-west-2 only
- Goal: assessment-only, no remediation
- Evidence sources available:
  - Security Hub enabled in both regions for 10 of 12 accounts
  - Config enabled in all 12 accounts, but aggregation includes only 11 accounts
  - Audit Manager assessment exists for PCI DSS evidence collection
  - AWS Artifact is available for AWS provider assurance reports

## Evidence-source plan

| Need | Source used | Reason |
| --- | --- | --- |
| CIS-aligned technical findings | AWS Security Hub | Best source for enabled standards and control findings |
| Resource compliance gaps | AWS Config | Confirms rule-based compliance state and highlights missing coverage |
| PCI DSS evidence package | AWS Audit Manager | Supports audit-readiness evidence collection |
| AWS provider reports | AWS Artifact | Separates AWS-issued assurance documents from customer controls |

## Example output

### Request goal

Assess CIS AWS Foundations status and provide PCI DSS / HIPAA readiness-oriented evidence summary for the in-scope AWS organization accounts.

### Framework target

- CIS AWS Foundations Benchmark
- PCI DSS readiness-oriented evidence review
- HIPAA readiness-oriented evidence review

### Assessment scope

- Intended accounts: 12
- Accounts visible in Security Hub results: 10
- Accounts visible in Config aggregation: 11
- Regions: us-east-1, us-west-2
- Exclusions: any accounts or regions not represented in the listed evidence sources are out of confirmed coverage

### Evidence sources used

- AWS Security Hub standards findings for enabled standards in 10 accounts across 2 regions
- AWS Config aggregated compliance status for 11 accounts across 2 regions
- AWS Audit Manager assessment artifacts for PCI DSS-oriented evidence collection
- AWS Artifact AWS-issued assurance documents

### Coverage assumptions

This summary is limited to the accounts and regions visible through the currently enabled services. Two account-level visibility gaps remain: Security Hub does not report data for 2 intended accounts, and Config aggregation is missing 1 intended account.

### Findings summary

- Security Hub returned CIS-aligned findings for the enabled standard in 10 accounts.
- Across the visible accounts and regions, the highest concentration of failed or non-passing controls involved IAM hygiene, logging/monitoring configuration, and encryption-related settings.
- Config results broadly support the same risk areas but cannot be treated as complete for the missing aggregated account.
- Audit Manager contains evidence artifacts relevant to PCI DSS preparation, but these artifacts do not by themselves confirm that all customer responsibilities are satisfied.

### Manual gaps / not automatically validated

- Any PCI DSS or HIPAA requirements not represented by the enabled Security Hub standards, available Config rules, or collected Audit Manager evidence
- Process, policy, and operational procedure controls
- Customer responsibilities that require interviews, ticket evidence, or process walkthroughs
- Any controls for the 2 accounts missing from Security Hub visibility
- Any controls for the 1 account missing from Config aggregation

### Attestation boundary note

This output summarizes AWS-native technical findings and evidence sources. It does not constitute certification, legal attestation, or a claim that PCI DSS, HIPAA, or SOC 2 requirements are fully satisfied.

### Provenance

- Assessment type: read-only evidence review
- Accounts intended: 12
- Accounts evidenced via Security Hub: 10
- Accounts evidenced via Config aggregation: 11
- Regions: us-east-1, us-west-2
- Evidence sources: Security Hub, Config, Audit Manager, Artifact
- Blind spots: incomplete account coverage in Security Hub and Config aggregation

## Why this example is safe

It does not say:

- "the environment is PCI compliant"
- "HIPAA is complete"
- "SOC 2 is certified"

Instead, it clearly separates:

- visible automated findings
- collected evidence
- provider assurance documents
- unresolved gaps

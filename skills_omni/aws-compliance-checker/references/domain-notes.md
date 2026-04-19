# AWS Compliance Checker Domain Notes

Use this file as a quick lookup during live runs. It is intentionally narrower than the main workflow and focuses on boundary questions that often cause overstatement.

## 1. Evidence source vs purpose

| Evidence source | Primary purpose | What it supports well | What it does **not** prove on its own |
| --- | --- | --- | --- |
| AWS Security Hub | Standards-aligned security findings | Automated control findings, status of enabled standards, point-in-time control evidence | Full certification, legal attestation, framework completeness beyond enabled and supported controls |
| AWS Config / Conformance Packs | Resource compliance evaluation | Rule-based checks, conformance pack status, multi-account/multi-region compliance rollups when aggregation is configured | Formal audit sign-off, evidence for controls that are not represented by configured rules |
| AWS Audit Manager | Evidence collection and mapping | Audit-readiness artifacts, control-to-evidence mapping, assessment support | Automated proof that all technical controls pass at all times |
| AWS Artifact | AWS-issued reports and agreements | AWS provider assurance documents and agreements | Customer environment compliance, customer control operation, resource-level validation |

## 2. Practical attestation boundaries

Use these safe distinctions in reports:

- **Automated technical findings**: what Security Hub or Config reported.
- **Evidence package**: what Audit Manager collected or mapped.
- **Provider assurance documents**: what AWS Artifact supplies about AWS.

Avoid collapsing these into a single statement such as “AWS proves the environment is compliant.”

## 3. Coverage prerequisites checklist

Before trusting a result, verify the following:

| Area | Questions to verify |
| --- | --- |
| Account scope | Which accounts were intended? Which accounts actually produced data? |
| Region scope | Which regions were intended? Which regions actually produced data? |
| Security Hub | Is it enabled in the in-scope regions? Are the expected standards enabled? |
| Config | Is the recorder active? Are relevant resource types being recorded? Are conformance packs or rules present where expected? |
| Organization visibility | If organization-wide coverage is expected, are delegated admin and aggregation configured? |
| Access model | Is the operator using read-only or audit-scoped access sufficient to inspect findings and evidence? |
| Time window | What is the timestamp of the findings or evidence being summarized? |

## 4. Common boundary statements

Use wording like this:

- "This report summarizes AWS-native control evidence for the listed accounts and regions."
- "Controls not covered by the enabled standards, available rules, or collected evidence are listed as not automatically validated."
- "This output does not constitute certification, legal advice, or full framework attestation."
- "AWS Artifact documents represent AWS provider assurance and should be interpreted separately from customer-environment findings."

## 5. Provenance fields to include in every serious output

Include these fields whenever possible:

- assessment timestamp or evidence collection window
- target framework or benchmark
- standards or conformance packs observed
- accounts included
- regions included
- known exclusions
- evidence source for each major claim
- unresolved blind spots
- explicit manual-gap list

## 6. Manual-gap examples

Typical items that may need a manual or non-fully-automated treatment:

- process or policy controls
- evidence of operational procedures
- control objectives spanning systems outside AWS-native visibility
- framework areas where AWS-native checks are only partial or indirect
- customer responsibilities that cannot be inferred from provider documents

## 7. Minimum-access posture

Default to assessment-safe access:

- Prefer assumed roles over long-lived credentials.
- Prefer read-only or audit-scoped permissions for Security Hub, Config, Audit Manager, and organization visibility.
- Do not request broad administrator permissions unless the user explicitly wants remediation or setup changes.

## 8. Fast interpretation guide

| If the user asks... | Best answer shape |
| --- | --- |
| "Are we PCI compliant?" | Give a scoped evidence summary, list automated findings, then state what is not automatically validated |
| "Can you prepare audit evidence?" | Emphasize Audit Manager evidence collection plus provenance and gap disclosure |
| "Can AWS prove SOC 2 for us?" | Separate AWS Artifact provider reports from customer control validation |
| "Why are there no findings?" | Check enablement, subscriptions, Config recording, and scope before drawing conclusions |

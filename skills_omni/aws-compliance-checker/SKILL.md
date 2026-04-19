---
name: "aws-compliance-checker"
description: "AWS Compliance Checker workflow skill. Use this skill when the user needs automated AWS compliance checking against CIS, PCI DSS, HIPAA, and SOC 2 style benchmarks and the operator should preserve provenance, coverage assumptions, and evidence boundaries before merging or handing off."
version: "0.0.1"
category: "testing-security"
tags:
  - "aws"
  - "compliance"
  - "audit"
  - "cis"
  - "pci-dss"
  - "hipaa"
  - "soc2"
  - "aws-compliance-checker"
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
family_id: "aws-compliance-checker"
family_name: "AWS Compliance Checker"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/aws-compliance-checker"
upstream_skill: "skills/aws-compliance-checker"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "aws-compliance-checker"
---

# AWS Compliance Checker

## Overview

This skill supports AWS compliance-checking workflows for CIS AWS Foundations, PCI DSS, HIPAA, and SOC 2 style reviews while preserving source provenance and reviewability.

Use it to produce a careful, evidence-based compliance status summary from AWS-native sources. The workflow should separate:

1. **Automated control evaluation** using AWS Security Hub and AWS Config.
2. **Evidence collection and mapping** using AWS Audit Manager where appropriate.
3. **Provider assurance documents** from AWS Artifact.

Do **not** present automated findings as certification, legal attestation, or full framework closure. This skill is primarily for read-only assessment and reporting unless the user explicitly asks for remediation.

For quick domain boundaries and evidence-source distinctions, see `references/domain-notes.md`. For a realistic end-to-end example, see `examples/worked-example.md`.

## When to Use

Use this skill when:

- The user wants an AWS compliance assessment, audit-readiness check, or benchmark-aligned findings summary.
- The task involves CIS AWS Foundations, PCI DSS, HIPAA, SOC 2, or closely related AWS control evidence.
- You need to explain what AWS-native services can validate automatically and what still requires manual review.
- You need explicit provenance: which AWS services, accounts, regions, standards, and timestamps support each conclusion.
- The work should remain read-only by default.

Do **not** use this skill as the default path when:

- The user is asking for remediation or hardening changes first.
- The user wants a legal opinion, audit sign-off, certification claim, or a statement that a framework is fully satisfied without evidence and manual review.
- The scope is not AWS or cannot be tied to AWS-native evidence sources.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| Need to determine what can actually be proven | `references/domain-notes.md` | Clarifies the difference between technical findings, evidence packages, and AWS-issued assurance documents |
| First live assessment | `## Workflow` | Gives the required order: preflight scope, identify enabled evidence sources, collect findings, then report with boundaries |
| Multi-account or multi-region request | `## Workflow` step 1 and step 2 | Prevents false confidence from checking only one account or region |
| User expects “PCI/HIPAA/SOC 2 compliant” as a final answer | `references/domain-notes.md` | Helps phrase results safely as evidence-backed status, not certification |
| Need a concrete output shape | `examples/worked-example.md` | Shows preflight questions, evidence sources, findings summary, manual gaps, and provenance fields |
| Access or coverage issues | `## Troubleshooting` | Focuses on AWS-native causes such as missing standards subscriptions, recorder issues, or incomplete aggregation |

## Workflow

### 1. Confirm the request and scope

Before discussing findings, establish:

- Target framework or benchmark: CIS AWS Foundations, PCI DSS, HIPAA, SOC 2, or a subset.
- Scope: single account, multiple accounts, OU, or full AWS Organization.
- Region coverage: which AWS regions are in scope, and whether any are intentionally excluded.
- Output type:
  - control findings summary
  - audit-readiness evidence package
  - provider assurance document lookup
- Whether the user wants **assessment only** or also wants remediation guidance.

If scope is missing, ask concise clarifying questions before making compliance claims.

### 2. Verify coverage prerequisites

Check whether the environment can actually support the requested assessment.

Minimum items to verify:

- AWS Security Hub is enabled where expected.
- Relevant Security Hub standards/subscriptions are enabled in the in-scope accounts/regions.
- AWS Config is recording the relevant resources.
- Conformance packs or managed rules exist where the requested coverage depends on Config.
- If the request is organization-wide, aggregation or delegated administration is in place for the needed services.
- The operator has read-only or audit-scoped access sufficient to inspect findings and evidence.

If any of these are missing, continue only with a clearly limited assessment and state the blind spots.

### 3. Identify the evidence sources to use

Prefer AWS-native evidence in this order:

1. **AWS Security Hub** for standards-aligned control findings.
2. **AWS Config / Conformance Packs** for rule evaluations and grouped compliance checks.
3. **AWS Audit Manager** when the user needs collected evidence and framework mapping.
4. **AWS Artifact** when the user needs AWS-issued compliance reports or agreements.

For each source used, record:

- service name
- account scope
- region scope
- enabled standard / conformance pack / assessment name
- evaluation or collection timestamp
- any known exclusions or unsupported controls

### 4. Collect findings without overstating them

When summarizing results:

- Attribute each claim to its evidence source.
- Distinguish passed, failed, unknown, not enabled, and not automatically validated states.
- Mark manual or unsupported controls explicitly.
- Do not convert partial technical evidence into a statement of full framework compliance.

Good phrasing:

- “Security Hub findings indicate X controls passed and Y failed for the enabled standard in the listed regions.”
- “Audit Manager evidence was collected for the named assessment, but that does not by itself certify the environment.”
- “AWS Artifact provides AWS provider assurance documents; it does not replace customer control validation.”

Avoid phrasing like:

- “Your environment is PCI DSS certified.”
- “Security Hub proves HIPAA compliance.”
- “SOC 2 is fully satisfied.”

### 5. Produce a provenance-grounded report

Your output should include these sections:

#### Required output fields

- **Request goal**
- **Framework target**
- **Assessment scope**
  - accounts
  - regions
  - organizational boundaries
  - exclusions
- **Evidence sources used**
  - Security Hub
  - Config / Conformance Packs
  - Audit Manager
  - Artifact
- **Coverage assumptions**
- **Findings summary**
- **Manual gaps / not automatically validated**
- **Attestation boundary note**
- **Provenance**
  - time of assessment
  - standards or packs observed
  - evidence source per statement
  - unresolved blind spots

#### Recommended report language

- Separate **automated technical findings** from **evidence package status**.
- Include a short **coverage statement** such as: “This summary covers 12 accounts across us-east-1 and us-west-2 only.”
- Include a short **boundary statement** such as: “This assessment reports AWS-native control evidence and does not constitute certification or legal attestation.”

### 6. Handle gaps explicitly

If the user asks for a framework-level answer but automation is incomplete:

- List controls or domains that were not automatically validated.
- Note when standards are not enabled or when evidence was unavailable.
- Recommend manual review rather than guessing.
- If the user wants remediation, ask for explicit approval before proposing or making changes.

### 7. Handoff or next-step guidance

If the user’s real need is not assessment but action, route carefully:

- For remediation planning: provide a separate remediation-oriented next step only after confirming the user wants changes.
- For IAM or access issues blocking evidence collection: recommend an audit-scoped role review.
- For organization-wide blind spots: recommend central configuration or aggregation review before repeating the assessment.

## Troubleshooting

### No findings returned

Possible causes:

- Security Hub is not enabled in the target account or region.
- The expected standard is not subscribed/enabled.
- AWS Config recorder is not active or is not recording the needed resource types.
- The requested account or region is outside the current evidence scope.

Verify:

- Whether Security Hub is enabled in each in-scope region.
- Which standards are currently enabled.
- Whether Config is recording and evaluating resources.
- Whether the request expected organization-wide results but only a single account was queried.

Response pattern:

- State that no findings were observed from the current evidence sources.
- Name the missing prerequisite.
- Do not infer compliance from absence of findings.

### Only some accounts or regions appear

Possible causes:

- Not all accounts are enrolled.
- Organization delegated administration is incomplete.
- Config aggregation does not include all intended accounts/regions.
- The selected AWS services are not enabled in every in-scope region.

Verify:

- Intended account list versus visible account list.
- Intended region list versus visible region list.
- Whether aggregation is configured for the expected accounts and regions.

Response pattern:

- Include an explicit coverage gap statement.
- Summarize only the visible scope.
- Mark omitted accounts/regions as blind spots.

### Framework coverage looks incomplete even though scans exist

Possible causes:

- Some framework requirements are manual or partially automatable.
- Security Hub and Config coverage does not map one-to-one to every control objective.
- Audit Manager evidence collection is not the same as automated control validation.
- The user is mixing customer controls with AWS provider attestations.

Verify:

- Which controls were mapped to Security Hub or Config.
- Which areas were only represented as evidence artifacts.
- Whether AWS Artifact documents are being mistaken for customer-environment validation.

Response pattern:

- Split the result into automated findings, collected evidence, and provider assurance.
- Add a “not automatically validated” section.
- Avoid completion language such as “fully compliant.”

### Access denied or insufficient visibility

Possible causes:

- The operator lacks read access to Security Hub, Config, Audit Manager, or Organizations-scoped views.
- Service-linked or delegated-admin setup is incomplete.
- The workflow is being attempted with the wrong account context.

Verify:

- Current role/account context.
- Whether read-only or audit-scoped permissions cover the required services.
- Whether organization-level views are expected but unavailable.

Response pattern:

- Request the smallest additional read access needed.
- Avoid requesting broad administrative permissions by default.
- Continue with a limited-scope report only if the blind spots are clearly documented.

### Findings appear stale after recent changes

Possible causes:

- Security Hub, Config evaluations, and aggregated views may lag recent resource changes.
- Evidence collection windows may not align with the moment of the request.

Verify:

- Assessment timestamp.
- Last evaluation or collection time available from the source.
- Whether the resource change occurred after the cited evidence window.

Response pattern:

- Report the timestamp window used.
- Treat the result as point-in-time evidence.
- Avoid claiming real-time completeness unless the source clearly supports it.

## Examples

See `examples/worked-example.md` for a realistic request, preflight questions, evidence-source selection, sample findings summary, and a safe boundary statement.

## Additional Resources

- `references/domain-notes.md` - quick reference for evidence-source purpose, attestation boundaries, coverage prerequisites, and provenance fields.
- AWS Security Hub standards and controls documentation.
- AWS Config conformance packs and evaluation documentation.
- AWS Audit Manager documentation.
- AWS Artifact documentation.
- IAM best practices for least-privilege assessment access.

## Related Skills

Use a different or adjacent skill when the task shifts from assessment to one of these activities:

- remediation planning or implementation
- IAM role design and permission review
- organization-wide AWS security operations
- evidence packaging for a broader audit program outside this workflow

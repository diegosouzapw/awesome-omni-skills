---
name: aws-security-audit
description: "AWS Security Audit workflow skill. Use this skill when the user needs Comprehensive AWS security posture assessment using AWS CLI and security best practices and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["aws", "security", "audit", "compliance", "kiro-cli", "security-assessment", "aws-security-audit", "comprehensive"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# AWS Security Audit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/security/aws-security-audit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# AWS Security Audit Perform comprehensive security assessments of AWS environments to identify vulnerabilities and misconfigurations.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Audit Categories, Automated Security Audit Script, Security Score Calculator, Compliance Mapping, Remediation Priorities, Kiro CLI Integration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when you need to audit AWS security posture, identify vulnerabilities, or prepare for compliance assessments.
- Use when the request clearly matches the imported source intent: Comprehensive AWS security posture assessment using AWS CLI and security best practices.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Audit Categories

**Identity & Access Management**
- Overly permissive IAM policies
- Unused IAM users and roles
- MFA enforcement gaps
- Root account usage
- Access key rotation

**Network Security**
- Open security groups (0.0.0.0/0)
- Public S3 buckets
- Unencrypted data in transit
- VPC flow logs disabled
- Network ACL misconfigurations

**Data Protection**
- Unencrypted EBS volumes
- Unencrypted RDS instances
- S3 bucket encryption disabled
- Backup policies missing
- KMS key rotation disabled

**Logging & Monitoring**
- CloudTrail disabled
- CloudWatch alarms missing
- VPC Flow Logs disabled
- S3 access logging disabled
- Config recording disabled

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @aws-security-audit to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @aws-security-audit against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @aws-security-audit for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @aws-security-audit using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Security Audit Commands

### IAM Security Checks

```bash
# List users without MFA
aws iam get-credential-report --output text | \
  awk -F, '$4=="false" && $1!="<root_account>" {print $1}'

# Find unused IAM users (no activity in 90 days)
aws iam list-users --query 'Users[*].[UserName]' --output text | \
while read user; do
  last_used=$(aws iam get-user --user-name "$user" \
    --query 'User.PasswordLastUsed' --output text)
  echo "$user: $last_used"
done

# List overly permissive policies (AdministratorAccess)
aws iam list-policies --scope Local \
  --query 'Policies[?PolicyName==`AdministratorAccess`]'

# Find access keys older than 90 days
aws iam list-users --query 'Users[*].UserName' --output text | \
while read user; do
  aws iam list-access-keys --user-name "$user" \
    --query 'AccessKeyMetadata[*].[AccessKeyId,CreateDate]' \
    --output text
done

# Check root account access keys
aws iam get-account-summary \
  --query 'SummaryMap.AccountAccessKeysPresent'
```

### Network Security Checks

```bash
# Find security groups open to the world
aws ec2 describe-security-groups \
  --query 'SecurityGroups[?IpPermissions[?IpRanges[?CidrIp==`0.0.0.0/0`]]].[GroupId,GroupName]' \
  --output table

# List public S3 buckets
aws s3api list-buckets --query 'Buckets[*].Name' --output text | \
while read bucket; do
  acl=$(aws s3api get-bucket-acl --bucket "$bucket" 2>/dev/null)
  if echo "$acl" | grep -q "AllUsers"; then
    echo "PUBLIC: $bucket"
  fi
done

# Check VPC Flow Logs status
aws ec2 describe-vpcs --query 'Vpcs[*].VpcId' --output text | \
while read vpc; do
  flow_logs=$(aws ec2 describe-flow-logs \
    --filter "Name=resource-id,Values=$vpc" \
    --query 'FlowLogs[*].FlowLogId' --output text)
  if [ -z "$flow_logs" ]; then
    echo "No flow logs: $vpc"
  fi
done

# Find RDS instances without encryption
aws rds describe-db-instances \
  --query 'DBInstances[?StorageEncrypted==`false`].[DBInstanceIdentifier]' \
  --output table
```

### Data Protection Checks

```bash
# Find unencrypted EBS volumes
aws ec2 describe-volumes \
  --query 'Volumes[?Encrypted==`false`].[VolumeId,Size,State]' \
  --output table

# Check S3 bucket encryption
aws s3api list-buckets --query 'Buckets[*].Name' --output text | \
while read bucket; do
  encryption=$(aws s3api get-bucket-encryption \
    --bucket "$bucket" 2>&1)
  if echo "$encryption" | grep -q "ServerSideEncryptionConfigurationNotFoundError"; then
    echo "No encryption: $bucket"
  fi
done

# Find RDS snapshots that are public
aws rds describe-db-snapshots \
  --query 'DBSnapshots[*].[DBSnapshotIdentifier]' --output text | \
while read snapshot; do
  attrs=$(aws rds describe-db-snapshot-attributes \
    --db-snapshot-identifier "$snapshot" \
    --query 'DBSnapshotAttributesResult.DBSnapshotAttributes[?AttributeName==`restore`].AttributeValues' \
    --output text)
  if echo "$attrs" | grep -q "all"; then
    echo "PUBLIC SNAPSHOT: $snapshot"
  fi
done

# Check KMS key rotation
aws kms list-keys --query 'Keys[*].KeyId' --output text | \
while read key; do
  rotation=$(aws kms get-key-rotation-status --key-id "$key" \
    --query 'KeyRotationEnabled' --output text 2>/dev/null)
  if [ "$rotation" = "False" ]; then
    echo "Rotation disabled: $key"
  fi
done
```

### Logging & Monitoring Checks

```bash
# Check CloudTrail status
aws cloudtrail describe-trails \
  --query 'trailList[*].[Name,IsMultiRegionTrail,LogFileValidationEnabled]' \
  --output table

# Verify CloudTrail is logging
aws cloudtrail get-trail-status --name my-trail \
  --query 'IsLogging'

# Check if AWS Config is enabled
aws configservice describe-configuration-recorders \
  --query 'ConfigurationRecorders[*].[name,roleARN]' \
  --output table

# List S3 buckets without access logging
aws s3api list-buckets --query 'Buckets[*].Name' --output text | \
while read bucket; do
  logging=$(aws s3api get-bucket-logging --bucket "$bucket" 2>&1)
  if ! echo "$logging" | grep -q "LoggingEnabled"; then
    echo "No access logging: $bucket"
  fi
done
```

#### Imported: Example Prompts

- "Run a comprehensive security audit on my AWS account"
- "Check for IAM security issues"
- "Find all unencrypted resources"
- "Generate a security compliance report"
- "Calculate my AWS security score"

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Run audits weekly
- Automate with Lambda/EventBridge
- Export results to S3 for trending
- Integrate with SIEM tools
- Track remediation progress
- Document exceptions with business justification
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- Run audits weekly
- Automate with Lambda/EventBridge
- Export results to S3 for trending
- Integrate with SIEM tools
- Track remediation progress
- Document exceptions with business justification

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/security/aws-security-audit`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@aws-compliance-checker` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@aws-iam-best-practices` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@saas-mvp-launcher` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@saga-orchestration` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Additional Resources

- [AWS Security Best Practices](https://aws.amazon.com/security/best-practices/)
- [CIS AWS Foundations Benchmark](https://www.cisecurity.org/benchmark/amazon_web_services)
- [AWS Security Hub](https://aws.amazon.com/security-hub/)

#### Imported: Automated Security Audit Script

```bash
#!/bin/bash
# comprehensive-security-audit.sh

echo "=== AWS Security Audit Report ==="
echo "Generated: $(date)"
echo ""

# IAM Checks
echo "## IAM Security"
echo "Users without MFA:"
aws iam get-credential-report --output text | \
  awk -F, '$4=="false" && $1!="<root_account>" {print "  - " $1}'

echo ""
echo "Root account access keys:"
aws iam get-account-summary \
  --query 'SummaryMap.AccountAccessKeysPresent' --output text

# Network Checks
echo ""
echo "## Network Security"
echo "Security groups open to 0.0.0.0/0:"
aws ec2 describe-security-groups \
  --query 'SecurityGroups[?IpPermissions[?IpRanges[?CidrIp==`0.0.0.0/0`]]].GroupId' \
  --output text | wc -l

# Data Protection
echo ""
echo "## Data Protection"
echo "Unencrypted EBS volumes:"
aws ec2 describe-volumes \
  --query 'Volumes[?Encrypted==`false`].VolumeId' \
  --output text | wc -l

echo ""
echo "Unencrypted RDS instances:"
aws rds describe-db-instances \
  --query 'DBInstances[?StorageEncrypted==`false`].DBInstanceIdentifier' \
  --output text | wc -l

# Logging
echo ""
echo "## Logging & Monitoring"
echo "CloudTrail status:"
aws cloudtrail describe-trails \
  --query 'trailList[*].[Name,IsLogging]' \
  --output table

echo ""
echo "=== End of Report ==="
```

#### Imported: Security Score Calculator

```python
#!/usr/bin/env python3
# security-score.py

import boto3
import json

def calculate_security_score():
    iam = boto3.client('iam')
    ec2 = boto3.client('ec2')
    s3 = boto3.client('s3')

    score = 100
    issues = []

    # Check MFA
    try:
        report = iam.get_credential_report()
        users_without_mfa = 0
        # Parse report and count
        if users_without_mfa > 0:
            score -= 10
            issues.append(f"{users_without_mfa} users without MFA")
    except:
        pass

    # Check open security groups
    sgs = ec2.describe_security_groups()
    open_sgs = 0
    for sg in sgs['SecurityGroups']:
        for perm in sg.get('IpPermissions', []):
            for ip_range in perm.get('IpRanges', []):
                if ip_range.get('CidrIp') == '0.0.0.0/0':
                    open_sgs += 1
                    break

    if open_sgs > 0:
        score -= 15
        issues.append(f"{open_sgs} security groups open to internet")

    # Check unencrypted volumes
    volumes = ec2.describe_volumes()
    unencrypted = sum(1 for v in volumes['Volumes'] if not v['Encrypted'])

    if unencrypted > 0:
        score -= 20
        issues.append(f"{unencrypted} unencrypted EBS volumes")

    print(f"Security Score: {score}/100")
    print("\nIssues Found:")
    for issue in issues:
        print(f"  - {issue}")

    return score

if __name__ == "__main__":
    calculate_security_score()
```

#### Imported: Compliance Mapping

**CIS AWS Foundations Benchmark**
- 1.1: Root account usage
- 1.2-1.14: IAM policies and MFA
- 2.1-2.9: Logging (CloudTrail, Config, VPC Flow Logs)
- 4.1-4.3: Monitoring and alerting

**PCI-DSS**
- Requirement 1: Network security controls
- Requirement 2: Secure configurations
- Requirement 8: Access controls and MFA
- Requirement 10: Logging and monitoring

**HIPAA**
- Access controls (IAM)
- Audit controls (CloudTrail)
- Encryption (EBS, RDS, S3)
- Transmission security (TLS/SSL)

#### Imported: Remediation Priorities

**Critical (Fix Immediately)**
- Root account access keys
- Public RDS snapshots
- Security groups open to 0.0.0.0/0 on sensitive ports
- CloudTrail disabled

**High (Fix Within 7 Days)**
- Users without MFA
- Unencrypted data at rest
- Missing VPC Flow Logs
- Overly permissive IAM policies

**Medium (Fix Within 30 Days)**
- Old access keys (>90 days)
- Missing S3 access logging
- Unused IAM users
- KMS key rotation disabled

#### Imported: Kiro CLI Integration

```bash
kiro-cli chat "Use aws-security-audit to assess my security posture"
kiro-cli chat "Generate a security audit report with aws-security-audit"
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

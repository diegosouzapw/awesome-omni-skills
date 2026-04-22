---
name: aws-security-audit
description: "Perform comprehensive AWS security posture assessments using AWS CLI. Audits IAM policies, reviews security group rules, checks S3 bucket permissions, evaluates CloudTrail logging, and identifies unencrypted resources. Use when asked for 'AWS security audit', 'cloud security review', 'IAM audit', 'AWS compliance check', or 'security group review'. Do NOT use for general security code review or non-AWS cloud platforms."
version: "0.0.1"
category: testing-security
tags: ["aws", "security", "audit", "iam", "compliance", "cloudtrail", "s3", "encryption"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# AWS Security Audit

Perform comprehensive security assessments of AWS environments to identify vulnerabilities and misconfigurations across IAM, networking, data protection, and logging.

## When to Use

- Audit AWS security posture or identify vulnerabilities
- Prepare for compliance assessments (CIS, PCI-DSS, HIPAA)
- Review IAM policies, security groups, encryption settings, or logging configuration
- Do NOT use for general security code review or non-AWS cloud platforms

## Workflow

1. Verify AWS CLI access and determine audit scope (full account or specific services)
2. Run IAM security checks: MFA enforcement, unused users, overly permissive policies, access key rotation
3. Run network security checks: open security groups, public S3 buckets, VPC flow logs
4. Run data protection checks: unencrypted EBS volumes, RDS instances, S3 bucket encryption, KMS key rotation
5. Run logging and monitoring checks: CloudTrail status, CloudWatch alarms, Config recording
6. Calculate security score and prioritize remediation by severity (Critical > High > Medium)

## Audit Categories

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

## Security Audit Commands

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

# Find public RDS snapshots
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

## Automated Security Audit Script

```bash
#!/bin/bash
# comprehensive-security-audit.sh

echo "=== AWS Security Audit Report ==="
echo "Generated: $(date)"
echo ""

echo "## IAM Security"
echo "Users without MFA:"
aws iam get-credential-report --output text | \
  awk -F, '$4=="false" && $1!="<root_account>" {print "  - " $1}'

echo ""
echo "Root account access keys:"
aws iam get-account-summary \
  --query 'SummaryMap.AccountAccessKeysPresent' --output text

echo ""
echo "## Network Security"
echo "Security groups open to 0.0.0.0/0:"
aws ec2 describe-security-groups \
  --query 'SecurityGroups[?IpPermissions[?IpRanges[?CidrIp==`0.0.0.0/0`]]].GroupId' \
  --output text | wc -l

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

echo ""
echo "## Logging & Monitoring"
echo "CloudTrail status:"
aws cloudtrail describe-trails \
  --query 'trailList[*].[Name,IsLogging]' \
  --output table

echo ""
echo "=== End of Report ==="
```

## Compliance Mapping

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

## Remediation Priorities

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

## Best Practices

- Run audits weekly
- Automate with Lambda/EventBridge
- Export results to S3 for trending
- Integrate with SIEM tools
- Track remediation progress
- Document exceptions with business justification

## References

- [AWS Security Best Practices](https://aws.amazon.com/security/best-practices/)
- [CIS AWS Foundations Benchmark](https://www.cisecurity.org/benchmark/amazon_web_services)
- [AWS Security Hub](https://aws.amazon.com/security-hub/)

## Related Skills

- `@aws-compliance-checker` - Use for ongoing compliance monitoring and automated policy enforcement
- `@aws-iam-best-practices` - Use for deep-dive IAM policy design and least-privilege implementation

---
name: aws-iam-best-practices-v2
description: "AWS IAM Best Practices workflow skill. Use this skill when the user needs IAM policy review, hardening, and least privilege implementation and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["aws", "iam", "security", "access-control", "kiro-cli", "least-privilege", "aws-iam-best-practices-v2", "aws-iam-best-practices"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# AWS IAM Best Practices

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/security/aws-iam-best-practices` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# AWS IAM Best Practices Review and harden IAM policies following AWS security best practices and least privilege principles.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: IAM Security Checks, IAM Hardening Checklist, Automated IAM Hardening, Kiro CLI Integration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when you need to review IAM policies, implement least privilege access, or harden IAM security.
- Use when the request clearly matches the imported source intent: IAM policy review, hardening, and least privilege implementation.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: IAM Security Checks

### Find Overly Permissive Policies

```bash
# List policies with full admin access
aws iam list-policies --scope Local \
  --query 'Policies[*].[PolicyName,Arn]' --output table | \
  grep -i admin

# Find policies with wildcard actions
aws iam list-policies --scope Local --query 'Policies[*].Arn' --output text | \
while read arn; do
  version=$(aws iam get-policy --policy-arn "$arn" \
    --query 'Policy.DefaultVersionId' --output text)
  doc=$(aws iam get-policy-version --policy-arn "$arn" \
    --version-id "$version" --query 'PolicyVersion.Document')
  if echo "$doc" | grep -q '"Action": "\*"'; then
    echo "Wildcard action in: $arn"
  fi
done

# Find inline policies (should use managed policies)
aws iam list-users --query 'Users[*].UserName' --output text | \
while read user; do
  policies=$(aws iam list-user-policies --user-name "$user" \
    --query 'PolicyNames' --output text)
  if [ -n "$policies" ]; then
    echo "Inline policies on user $user: $policies"
  fi
done
```

### MFA Enforcement

```bash
# List users without MFA
aws iam get-credential-report --output text | \
  awk -F, 'NR>1 && $4=="false" {print $1}'

# Check if MFA is required in policies
aws iam list-policies --scope Local --query 'Policies[*].Arn' --output text | \
while read arn; do
  version=$(aws iam get-policy --policy-arn "$arn" \
    --query 'Policy.DefaultVersionId' --output text)
  doc=$(aws iam get-policy-version --policy-arn "$arn" \
    --version-id "$version" --query 'PolicyVersion.Document')
  if echo "$doc" | grep -q "aws:MultiFactorAuthPresent"; then
    echo "MFA enforced in: $arn"
  fi
done

# Enable MFA for a user (returns QR code)
aws iam create-virtual-mfa-device \
  --virtual-mfa-device-name user-mfa \
  --outfile /tmp/qr.png \
  --bootstrap-method QRCodePNG
```

### Access Key Management

```bash
# Find old access keys (>90 days)
aws iam list-users --query 'Users[*].UserName' --output text | \
while read user; do
  aws iam list-access-keys --user-name "$user" \
    --query 'AccessKeyMetadata[*].[AccessKeyId,CreateDate,Status]' \
    --output text | \
  while read key_id create_date status; do
    age_days=$(( ($(date +%s) - $(date -d "$create_date" +%s)) / 86400 ))
    if [ $age_days -gt 90 ]; then
      echo "$user: Key $key_id is $age_days days old"
    fi
  done
done

# Rotate access key
OLD_KEY="AKIAIOSFODNN7EXAMPLE"
USER="myuser"

# Create new key
NEW_KEY=$(aws iam create-access-key --user-name "$USER")
echo "New key created. Update applications, then run:"
echo "aws iam delete-access-key --user-name $USER --access-key-id $OLD_KEY"

# Deactivate old key (test first)
aws iam update-access-key \
  --user-name "$USER" \
  --access-key-id "$OLD_KEY" \
  --status Inactive
```

### Role and Policy Analysis

```bash
# List unused roles (no activity in 90 days)
aws iam list-roles --query 'Roles[*].[RoleName,RoleLastUsed.LastUsedDate]' \
  --output text | \
while read role last_used; do
  if [ "$last_used" = "None" ]; then
    echo "Never used: $role"
  fi
done

# Find roles with trust relationships to external accounts
aws iam list-roles --query 'Roles[*].RoleName' --output text | \
while read role; do
  trust=$(aws iam get-role --role-name "$role" \
    --query 'Role.AssumeRolePolicyDocument')
  if echo "$trust" | grep -q '"AWS":'; then
    echo "External trust: $role"
  fi
done

# Analyze policy permissions
aws iam simulate-principal-policy \
  --policy-source-arn arn:aws:iam::123456789012:user/myuser \
  --action-names s3:GetObject s3:PutObject \
  --resource-arns arn:aws:s3:::mybucket/*
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @aws-iam-best-practices-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/aws-iam-best-practices-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/aws-iam-best-practices-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @aws-iam-best-practices-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Prompts

- "Review my IAM policies for security issues"
- "Find users without MFA enabled"
- "Create a least privilege policy for S3 access"
- "Identify overly permissive IAM roles"
- "Generate an IAM hardening report"

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Grant minimum permissions needed
- Use managed policies when possible
- Avoid wildcard (*) permissions
- Regular access reviews
- Enable MFA for all users
- Use IAM roles instead of access keys
- Implement service control policies (SCPs)

### Imported Operating Notes

#### Imported: Core Principles

**Least Privilege**
- Grant minimum permissions needed
- Use managed policies when possible
- Avoid wildcard (*) permissions
- Regular access reviews

**Defense in Depth**
- Enable MFA for all users
- Use IAM roles instead of access keys
- Implement service control policies (SCPs)
- Enable CloudTrail for audit

**Separation of Duties**
- Separate admin and user roles
- Use different roles for different environments
- Implement approval workflows
- Regular permission audits

#### Imported: IAM Policy Templates

### Least Privilege S3 Access

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:PutObject"
      ],
      "Resource": "arn:aws:s3:::my-bucket/user-data/${aws:username}/*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::my-bucket",
      "Condition": {
        "StringLike": {
          "s3:prefix": "user-data/${aws:username}/*"
        }
      }
    }
  ]
}
```

### MFA-Required Policy

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "*",
      "Resource": "*",
      "Condition": {
        "BoolIfExists": {
          "aws:MultiFactorAuthPresent": "false"
        }
      }
    }
  ]
}
```

### Time-Based Access

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": "ec2:*",
      "Resource": "*",
      "Condition": {
        "DateGreaterThan": {
          "aws:CurrentTime": "2026-01-01T00:00:00Z"
        },
        "DateLessThan": {
          "aws:CurrentTime": "2026-12-31T23:59:59Z"
        }
      }
    }
  ]
}
```

### IP-Restricted Access

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Deny",
      "Action": "*",
      "Resource": "*",
      "Condition": {
        "NotIpAddress": {
          "aws:SourceIp": [
            "203.0.113.0/24",
            "198.51.100.0/24"
          ]
        }
      }
    }
  ]
}
```

#### Imported: Best Practices

- Use AWS managed policies when possible
- Implement policy versioning
- Test policies in non-production first
- Document policy purposes
- Regular access reviews (quarterly)
- Use IAM Access Analyzer
- Implement SCPs for organization-wide controls

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/security/aws-iam-best-practices`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Additional Resources

- [IAM Best Practices](https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html)
- [IAM Policy Simulator](https://policysim.aws.amazon.com/)
- [IAM Access Analyzer](https://aws.amazon.com/iam/features/analyze-access/)

#### Imported: IAM Hardening Checklist

**User Management**
- [ ] Enable MFA for all users
- [ ] Remove unused IAM users
- [ ] Rotate access keys every 90 days
- [ ] Use IAM roles instead of long-term credentials
- [ ] Implement password policy (length, complexity, rotation)

**Policy Management**
- [ ] Replace inline policies with managed policies
- [ ] Remove wildcard (*) permissions
- [ ] Implement least privilege
- [ ] Use policy conditions (MFA, IP, time)
- [ ] Regular policy reviews

**Role Management**
- [ ] Use roles for EC2 instances
- [ ] Implement cross-account roles properly
- [ ] Review trust relationships
- [ ] Remove unused roles
- [ ] Use session tags for fine-grained access

**Monitoring**
- [ ] Enable CloudTrail for IAM events
- [ ] Set up CloudWatch alarms for IAM changes
- [ ] Use AWS IAM Access Analyzer
- [ ] Regular access reviews
- [ ] Monitor for privilege escalation

#### Imported: Automated IAM Hardening

```python
#!/usr/bin/env python3
# iam-hardening.py

import boto3
from datetime import datetime, timedelta

iam = boto3.client('iam')

def enforce_mfa():
    """Identify users without MFA"""
    users = iam.list_users()['Users']
    no_mfa = []
    
    for user in users:
        mfa_devices = iam.list_mfa_devices(
            UserName=user['UserName']
        )['MFADevices']
        
        if not mfa_devices:
            no_mfa.append(user['UserName'])
    
    return no_mfa

def rotate_old_keys():
    """Find access keys older than 90 days"""
    users = iam.list_users()['Users']
    old_keys = []
    
    for user in users:
        keys = iam.list_access_keys(
            UserName=user['UserName']
        )['AccessKeyMetadata']
        
        for key in keys:
            age = datetime.now(key['CreateDate'].tzinfo) - key['CreateDate']
            if age.days > 90:
                old_keys.append({
                    'user': user['UserName'],
                    'key_id': key['AccessKeyId'],
                    'age_days': age.days
                })
    
    return old_keys

def find_overpermissive_policies():
    """Find policies with wildcard actions"""
    policies = iam.list_policies(Scope='Local')['Policies']
    overpermissive = []
    
    for policy in policies:
        version = iam.get_policy_version(
            PolicyArn=policy['Arn'],
            VersionId=policy['DefaultVersionId']
        )
        
        doc = version['PolicyVersion']['Document']
        for statement in doc.get('Statement', []):
            if statement.get('Action') == '*':
                overpermissive.append(policy['PolicyName'])
                break
    
    return overpermissive

if __name__ == "__main__":
    print("IAM Hardening Report")
    print("=" * 50)
    
    print("\nUsers without MFA:")
    for user in enforce_mfa():
        print(f"  - {user}")
    
    print("\nOld access keys (>90 days):")
    for key in rotate_old_keys():
        print(f"  - {key['user']}: {key['age_days']} days")
    
    print("\nOverpermissive policies:")
    for policy in find_overpermissive_policies():
        print(f"  - {policy}")
```

#### Imported: Kiro CLI Integration

```bash
kiro-cli chat "Use aws-iam-best-practices to review my IAM setup"
kiro-cli chat "Create a least privilege policy with aws-iam-best-practices"
```

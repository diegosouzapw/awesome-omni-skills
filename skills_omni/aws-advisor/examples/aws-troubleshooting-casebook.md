# AWS Troubleshooting Casebook

## Case 1: Cross-account S3 write suddenly fails with 403

### Pattern

A workload in account A writes to a bucket in account B. It worked previously and now returns `403 AccessDenied`.

### High-probability checks

- changed bucket policy
- changed KMS key policy
- new SCP at org level
- changed VPC endpoint policy
- changed caller role or trust path

### Safe response pattern

- confirm caller ARN and account
- review bucket policy and KMS policy
- check whether traffic goes through an S3 VPC endpoint
- do not disable Block Public Access as a first fix

## Case 2: Lambda times out after moving into a VPC

### Pattern

Function previously worked but now times out after VPC attachment.

### High-probability checks

- no NAT or VPC endpoint for required outbound service access
- DNS or route issue
- downstream private dependency unreachable
- function timeout too low for dependency path

### Safe response pattern

- inspect CloudWatch logs first
- verify subnet route tables and security groups
- confirm which downstream endpoints need egress
- avoid increasing timeout until connectivity is understood

## Case 3: AssumeRole fails even though policy looks correct

### Pattern

Role assumption fails and the team keeps editing identity policies without success.

### High-probability checks

- trust policy does not allow the caller
- external ID or condition mismatch
- SCP or permission boundary restriction
- wrong account or wrong role ARN

### Safe response pattern

- verify caller identity
- review trust policy before allow policies
- check org guardrails and session conditions
- do not attach broad admin permissions as a shortcut

## Case 4: Private app cannot reach RDS

### Pattern

Application in one subnet times out connecting to a database in another.

### High-probability checks

- security groups do not allow source-to-destination path
- wrong route table expectations
- DNS target mismatch
- app points to wrong endpoint or port

### Safe response pattern

- trace source, route, DNS, SG, and target health in order
- suggest the smallest network rule correction needed

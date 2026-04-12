# AWS Architecture Review Example

## Scenario

A team wants to run a multi-tenant API on AWS. Requirements:

- public HTTPS entrypoint
- private application compute
- PostgreSQL-compatible relational database
- RTO 1 hour, RPO 15 minutes
- small operations team
- Terraform preferred

## Example review output

### Assumptions

- Primary region is `us-east-1`
- Production and non-production are separated by account
- Private subnets are available for application and database tiers

### Recommended architecture

- CloudFront for edge delivery if global performance matters
- API Gateway or ALB depending on API style and routing needs
- ECS on Fargate for long-running API containers with low ops overhead
- Aurora PostgreSQL for managed relational availability and backups
- Secrets Manager for database credentials
- CloudWatch logs, metrics, and alarms for operational visibility

### Key findings by pillar

#### Security
- Prefer IAM roles for task execution and app access
- Keep database private and restrict security groups to app tier sources only
- Enable encryption at rest and in transit

#### Reliability
- Multi-AZ database deployment aligns better with stated RTO/RPO than single-AZ
- Backups and restore testing must be part of launch criteria

#### Cost
- Main drivers are Aurora, NAT/data transfer, logging retention, and Fargate runtime
- If traffic is spiky and the app can tolerate Lambda limits, Lambda may reduce idle compute cost

### Alternatives

- Lambda + API Gateway if the workload is request-driven and can accept serverless constraints
- EKS only if the team already needs Kubernetes platform capabilities

### Validation steps

1. Validate region support and service quotas
2. Review Terraform plan for security group, encryption, and backup settings
3. Run smoke tests and failover-oriented operational checks
4. Confirm alarms and log retention before production cutover

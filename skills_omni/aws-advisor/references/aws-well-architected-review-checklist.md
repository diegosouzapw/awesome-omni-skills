# AWS Well-Architected Review Checklist

Use this checklist to structure architecture reviews.

## Operational Excellence

- Are deployments automated and reversible?
- Are runbooks, alarms, and ownership defined?
- Is change management safe for production?
- Is observability sufficient for diagnosis?

## Security

- Are IAM roles and temporary credentials used instead of long-lived keys?
- Is root account access protected and minimized?
- Is least privilege applied and reviewed?
- Are encryption, secrets handling, and logging in place?
- Are account boundaries and SCP impacts understood?

## Reliability

- Are there single points of failure?
- Are backups, restore tests, failover, and dependency limits considered?
- Are RTO/RPO targets supported by the design?
- Is retry, idempotency, and backoff behavior defined?

## Performance Efficiency

- Does the chosen service fit the workload pattern?
- Are scaling characteristics understood?
- Are caching, partitioning, concurrency, and limits considered?
- Are region and latency constraints accounted for?

## Cost Optimization

- What are the top cost drivers?
- Are there idle, overprovisioned, or duplicated resources?
- Are transfer, NAT, logging, storage tiering, and multi-AZ costs understood?
- Are tags available for cost allocation?

## Sustainability

- Is the architecture avoiding needless always-on resources?
- Are managed services used where they reduce operational waste?
- Is data retention intentional rather than default-expanding?

## Output format

Return findings in three groups:

- Must fix before launch or migration
- Should improve soon
- Optional optimization

Always include assumptions, affected components, and how to validate each recommendation.

# AWS Service Selection Matrix

Use this matrix to compare common AWS design choices.

## Compute

| Need | Usually prefer | Consider instead when | Main trade-off |
| --- | --- | --- | --- |
| event-driven, short-lived, bursty | Lambda | you need long-running processes, special runtime control, or consistent warm capacity | lowest ops vs runtime constraints |
| containerized service without managing nodes | ECS on Fargate | you need Kubernetes ecosystem features or lower-level orchestration control | simple operations vs orchestration flexibility |
| Kubernetes platform | EKS | the team does not need Kubernetes APIs or cluster portability | ecosystem power vs operational complexity |
| full OS/runtime control | EC2 | the team can accept more undifferentiated operations work | maximum control vs highest ops burden |

## Relational and NoSQL data

| Need | Usually prefer | Consider instead when | Main trade-off |
| --- | --- | --- | --- |
| managed relational database | RDS | you need Aurora scale features or serverless patterns | simplicity vs engine capabilities |
| higher-throughput managed relational cluster | Aurora | workload is simple and standard RDS is enough | scale/features vs cost/complexity |
| key-value or single-digit millisecond access at scale | DynamoDB | relational joins or strong SQL compatibility are core needs | scale/ops ease vs data model constraints |

## Ingress and edge

| Need | Usually prefer | Consider instead when | Main trade-off |
| --- | --- | --- | --- |
| managed API front door | API Gateway | you need Layer 7 load balancing for non-API workloads | API features vs pricing and limits |
| HTTP load balancing to instances or containers | ALB | edge caching and global distribution are primary | flexible routing vs edge features |
| global CDN and edge caching | CloudFront | traffic is entirely private or internal | performance/security edge vs cache and invalidation complexity |

## Messaging and integration

| Need | Usually prefer | Consider instead when | Main trade-off |
| --- | --- | --- | --- |
| decoupled async queue | SQS | you need ordered stream replay semantics or pub/sub fan-out | simplicity vs richer event patterns |
| pub/sub fan-out | SNS | you need durable queue semantics per consumer | fan-out vs consumer delivery control |
| event bus and event routing | EventBridge | you need high-throughput ordered ingestion | routing flexibility vs throughput model |

## Selection reminders

Before recommending, confirm:

- operational skill of the team
- regional support
- compliance requirements
- latency and scale expectations
- failure recovery expectations
- cost sensitivity
- existing IaC and platform standardization

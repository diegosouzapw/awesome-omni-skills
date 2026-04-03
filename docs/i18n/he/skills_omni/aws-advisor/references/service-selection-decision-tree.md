# AWS Service Selection Decision Tree (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇪🇸 [es](../../../../es/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇫🇷 [fr](../../../../fr/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇩🇪 [de](../../../../de/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇮🇹 [it](../../../../it/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇷🇺 [ru](../../../../ru/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇯🇵 [ja](../../../../ja/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇰🇷 [ko](../../../../ko/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇸🇦 [ar](../../../../ar/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇮🇳 [hi](../../../../hi/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇮🇳 [in](../../../../in/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇹🇭 [th](../../../../th/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇻🇳 [vi](../../../../vi/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇮🇩 [id](../../../../id/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇲🇾 [ms](../../../../ms/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇳🇱 [nl](../../../../nl/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇵🇱 [pl](../../../../pl/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇸🇪 [sv](../../../../sv/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇳🇴 [no](../../../../no/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇩🇰 [da](../../../../da/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇫🇮 [fi](../../../../fi/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇵🇹 [pt](../../../../pt/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇷🇴 [ro](../../../../ro/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇭🇺 [hu](../../../../hu/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇧🇬 [bg](../../../../bg/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇸🇰 [sk](../../../../sk/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇮🇱 [he](../../../../he/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇵🇭 [phi](../../../../phi/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇨🇿 [cs](../../../../cs/skills_omni/aws-advisor/references/service-selection-decision-tree.md) · 🇹🇷 [tr](../../../../tr/skills_omni/aws-advisor/references/service-selection-decision-tree.md)

---


Use these questions to narrow service choices.

## Compute

- Is the workload event-driven and short-lived? Consider Lambda first.
- Does it need container packaging without Kubernetes complexity? Consider ECS, often with Fargate.
- Does it require Kubernetes APIs, ecosystem tooling, or cluster-level control? Consider EKS.
- Does it need full instance control, special networking, or legacy software support? Consider EC2.

## Storage

- Object storage with high durability? Consider S3.
- Shared file system semantics? Consider EFS or FSx depending on workload needs.
- Block storage attached to compute? Consider EBS.

## Databases

- Key-value or document at high scale with managed operations? Consider DynamoDB.
- Relational with managed backups and patching? Consider RDS or Aurora.
- Need a specialized engine or graph/time-series pattern? Validate the AWS-native fit before selecting.

## Messaging and integration

- Queue-based decoupling? Consider SQS.
- Pub/sub fan-out? Consider SNS or EventBridge depending on event model.
- Event routing across services and SaaS integrations? Consider EventBridge.
- Workflow orchestration? Consider Step Functions.

## API and edge

- Managed API front door? Consider API Gateway.
- Need load balancing for services? Consider ALB or NLB depending on traffic type.
- Need CDN and edge caching? Consider CloudFront.

## Decision reminders

Always ask:

- What is the operational burden the team can carry?
- What are the latency and scaling expectations?
- Does the choice increase lock-in, and is that acceptable?
- What monitoring and security controls are required?
- Which choice best fits the team's current operating model?

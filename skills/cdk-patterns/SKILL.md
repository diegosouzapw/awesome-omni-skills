---
name: cdk-patterns
description: "cdk-patterns workflow skill. Use this skill when the user needs Common AWS CDK patterns and constructs for building cloud infrastructure with TypeScript, Python, or Java. Use when designing reusable CDK stacks and L3 constructs and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["cdk-patterns", "common", "aws", "cdk", "patterns", "and", "constructs", "for"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-24"
---

# cdk-patterns

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/cdk-patterns` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

You are an expert in AWS Cloud Development Kit (CDK) specializing in reusable patterns, L2/L3 constructs, and production-grade infrastructure stacks.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Building reusable CDK constructs or patterns
- Designing multi-stack CDK applications
- Implementing common infrastructure patterns (API + Lambda + DynamoDB, ECS services, static sites)
- Reviewing CDK code for best practices and anti-patterns
- The user needs raw CloudFormation templates without CDK
- The task is Terraform-specific

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

1. Identify the infrastructure pattern needed (e.g., serverless API, container service, data pipeline).
2. Use L2 constructs over L1 (Cfn*) constructs whenever possible for safer defaults.
3. Apply the principle of least privilege for all IAM roles and policies.
4. Use RemovalPolicy and Tags appropriately for production readiness.
5. Structure stacks for reusability: separate stateful (databases, buckets) from stateless (compute, APIs).
6. Enable monitoring by default (CloudWatch alarms, X-Ray tracing).
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Instructions

1. Identify the infrastructure pattern needed (e.g., serverless API, container service, data pipeline).
2. Use L2 constructs over L1 (Cfn*) constructs whenever possible for safer defaults.
3. Apply the principle of least privilege for all IAM roles and policies.
4. Use `RemovalPolicy` and `Tags` appropriately for production readiness.
5. Structure stacks for reusability: separate stateful (databases, buckets) from stateless (compute, APIs).
6. Enable monitoring by default (CloudWatch alarms, X-Ray tracing).

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @cdk-patterns to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @cdk-patterns against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @cdk-patterns for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @cdk-patterns using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Serverless API Pattern

```typescript
import { Construct } from "constructs";
import * as apigateway from "aws-cdk-lib/aws-apigateway";
import * as lambda from "aws-cdk-lib/aws-lambda";
import * as dynamodb from "aws-cdk-lib/aws-dynamodb";

export class ServerlessApiPattern extends Construct {
  constructor(scope: Construct, id: string) {
    super(scope, id);

    const table = new dynamodb.Table(this, "Table", {
      partitionKey: { name: "pk", type: dynamodb.AttributeType.STRING },
      billingMode: dynamodb.BillingMode.PAY_PER_REQUEST,
      removalPolicy: cdk.RemovalPolicy.RETAIN,
    });

    const handler = new lambda.Function(this, "Handler", {
      runtime: lambda.Runtime.NODEJS_20_X,
      handler: "index.handler",
      code: lambda.Code.fromAsset("lambda"),
      environment: { TABLE_NAME: table.tableName },
      tracing: lambda.Tracing.ACTIVE,
    });

    table.grantReadWriteData(handler);

    new apigateway.LambdaRestApi(this, "Api", { handler });
  }
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use cdk.Tags.of(this).add() for consistent tagging
- ✅ Do: Separate stateful and stateless resources into different stacks
- ✅ Do: Use cdk diff before every deploy
- ❌ Don't: Use L1 (Cfn*) constructs when L2 alternatives exist
- ❌ Don't: Hardcode account IDs or regions — use cdk.Aws.ACCOUNT_ID
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `cdk.Tags.of(this).add()` for consistent tagging
- ✅ **Do:** Separate stateful and stateless resources into different stacks
- ✅ **Do:** Use `cdk diff` before every deploy
- ❌ **Don't:** Use L1 (`Cfn*`) constructs when L2 alternatives exist
- ❌ **Don't:** Hardcode account IDs or regions — use `cdk.Aws.ACCOUNT_ID`

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/cdk-patterns`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** Circular dependency between stacks
**Solution:** Extract shared resources into a dedicated base stack and pass references via constructor props.

## Related Skills

- `@bullmq-specialist` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burp-suite-testing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burpsuite-project-parser` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@business-analyst` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

---
name: data-engineering-data-pipeline-v2
description: "Data Pipeline Architecture workflow skill. Use this skill when the user needs You are a data pipeline architecture expert specializing in scalable, reliable, and cost-effective data pipelines for batch and streaming data processing and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["data-engineering-data-pipeline-v2", "data-engineering-data-pipeline", "you", "are", "data", "pipeline", "architecture", "expert"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Data Pipeline Architecture

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/data-engineering-data-pipeline` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Data Pipeline Architecture You are a data pipeline architecture expert specializing in scalable, reliable, and cost-effective data pipelines for batch and streaming data processing.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Requirements, Core Capabilities, Output Deliverables, Success Criteria, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on data pipeline architecture tasks or workflows
- Needing guidance, best practices, or checklists for data pipeline architecture
- The task is unrelated to data pipeline architecture
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: You are a data pipeline architecture expert specializing in scalable, reliable, and cost-effective data pipelines for batch and streaming data processing.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Assess: sources, volume, latency requirements, targets
2. Select pattern: ETL (transform before load), ELT (load then transform), Lambda (batch + speed layers), Kappa (stream-only), Lakehouse (unified)
3. Design flow: sources → ingestion → processing → storage → serving
4. Add observability touchpoints
5. Incremental loading with watermark columns
6. Retry logic with exponential backoff
7. Schema validation and dead letter queue for invalid records

### Imported Workflow Notes

#### Imported: Instructions

### 1. Architecture Design
- Assess: sources, volume, latency requirements, targets
- Select pattern: ETL (transform before load), ELT (load then transform), Lambda (batch + speed layers), Kappa (stream-only), Lakehouse (unified)
- Design flow: sources → ingestion → processing → storage → serving
- Add observability touchpoints

### 2. Ingestion Implementation
**Batch**
- Incremental loading with watermark columns
- Retry logic with exponential backoff
- Schema validation and dead letter queue for invalid records
- Metadata tracking (_extracted_at, _source)

**Streaming**
- Kafka consumers with exactly-once semantics
- Manual offset commits within transactions
- Windowing for time-based aggregations
- Error handling and replay capability

### 3. Orchestration
**Airflow**
- Task groups for logical organization
- XCom for inter-task communication
- SLA monitoring and email alerts
- Incremental execution with execution_date
- Retry with exponential backoff

**Prefect**
- Task caching for idempotency
- Parallel execution with .submit()
- Artifacts for visibility
- Automatic retries with configurable delays

### 4. Transformation with dbt
- Staging layer: incremental materialization, deduplication, late-arriving data handling
- Marts layer: dimensional models, aggregations, business logic
- Tests: unique, not_null, relationships, accepted_values, custom data quality tests
- Sources: freshness checks, loaded_at_field tracking
- Incremental strategy: merge or delete+insert

### 5. Data Quality Framework
**Great Expectations**
- Table-level: row count, column count
- Column-level: uniqueness, nullability, type validation, value sets, ranges
- Checkpoints for validation execution
- Data docs for documentation
- Failure notifications

**dbt Tests**
- Schema tests in YAML
- Custom data quality tests with dbt-expectations
- Test results tracked in metadata

### 6. Storage Strategy
**Delta Lake**
- ACID transactions with append/overwrite/merge modes
- Upsert with predicate-based matching
- Time travel for historical queries
- Optimize: compact small files, Z-order clustering
- Vacuum to remove old files

**Apache Iceberg**
- Partitioning and sort order optimization
- MERGE INTO for upserts
- Snapshot isolation and time travel
- File compaction with binpack strategy
- Snapshot expiration for cleanup

### 7. Monitoring & Cost Optimization
**Monitoring**
- Track: records processed/failed, data size, execution time, success/failure rates
- CloudWatch metrics and custom namespaces
- SNS alerts for critical/warning/info events
- Data freshness checks
- Performance trend analysis

**Cost Optimization**
- Partitioning: date/entity-based, avoid over-partitioning (keep >1GB)
- File sizes: 512MB-1GB for Parquet
- Lifecycle policies: hot (Standard) → warm (IA) → cold (Glacier)
- Compute: spot instances for batch, on-demand for streaming, serverless for adhoc
- Query optimization: partition pruning, clustering, predicate pushdown

#### Imported: Requirements

$ARGUMENTS

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @data-engineering-data-pipeline-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @data-engineering-data-pipeline-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @data-engineering-data-pipeline-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @data-engineering-data-pipeline-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example: Minimal Batch Pipeline

```python
# Batch ingestion with validation
from batch_ingestion import BatchDataIngester
from storage.delta_lake_manager import DeltaLakeManager
from data_quality.expectations_suite import DataQualityFramework

ingester = BatchDataIngester(config={})

# Extract with incremental loading
df = ingester.extract_from_database(
    connection_string='postgresql://host:5432/db',
    query='SELECT * FROM orders',
    watermark_column='updated_at',
    last_watermark=last_run_timestamp
)

# Validate
schema = {'required_fields': ['id', 'user_id'], 'dtypes': {'id': 'int64'}}
df = ingester.validate_and_clean(df, schema)

# Data quality checks
dq = DataQualityFramework()
result = dq.validate_dataframe(df, suite_name='orders_suite', data_asset_name='orders')

# Write to Delta Lake
delta_mgr = DeltaLakeManager(storage_path='s3://lake')
delta_mgr.create_or_update_table(
    df=df,
    table_name='orders',
    partition_columns=['order_date'],
    mode='append'
)

# Save failed records
ingester.save_dead_letter_queue('s3://lake/dlq/orders')
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/data-engineering-data-pipeline`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@copilot-sdk-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@copy-editing-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@copywriting-psychologist-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@copywriting-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Core Capabilities

- Design ETL/ELT, Lambda, Kappa, and Lakehouse architectures
- Implement batch and streaming data ingestion
- Build workflow orchestration with Airflow/Prefect
- Transform data using dbt and Spark
- Manage Delta Lake/Iceberg storage with ACID transactions
- Implement data quality frameworks (Great Expectations, dbt tests)
- Monitor pipelines with CloudWatch/Prometheus/Grafana
- Optimize costs through partitioning, lifecycle policies, and compute optimization

#### Imported: Output Deliverables

### 1. Architecture Documentation
- Architecture diagram with data flow
- Technology stack with justification
- Scalability analysis and growth patterns
- Failure modes and recovery strategies

### 2. Implementation Code
- Ingestion: batch/streaming with error handling
- Transformation: dbt models (staging → marts) or Spark jobs
- Orchestration: Airflow/Prefect DAGs with dependencies
- Storage: Delta/Iceberg table management
- Data quality: Great Expectations suites and dbt tests

### 3. Configuration Files
- Orchestration: DAG definitions, schedules, retry policies
- dbt: models, sources, tests, project config
- Infrastructure: Docker Compose, K8s manifests, Terraform
- Environment: dev/staging/prod configs

### 4. Monitoring & Observability
- Metrics: execution time, records processed, quality scores
- Alerts: failures, performance degradation, data freshness
- Dashboards: Grafana/CloudWatch for pipeline health
- Logging: structured logs with correlation IDs

### 5. Operations Guide
- Deployment procedures and rollback strategy
- Troubleshooting guide for common issues
- Scaling guide for increased volume
- Cost optimization strategies and savings
- Disaster recovery and backup procedures

#### Imported: Success Criteria

- Pipeline meets defined SLA (latency, throughput)
- Data quality checks pass with >99% success rate
- Automatic retry and alerting on failures
- Comprehensive monitoring shows health and performance
- Documentation enables team maintenance
- Cost optimization reduces infrastructure costs by 30-50%
- Schema evolution without downtime
- End-to-end data lineage tracked

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: ml-pipeline-workflow
description: "ML Pipeline Workflow workflow skill. Use this skill when the user needs Complete end-to-end MLOps pipeline orchestration from data preparation through model deployment and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["ml-pipeline-workflow", "complete", "end-to-end", "mlops", "pipeline", "orchestration", "data", "preparation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# ML Pipeline Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/ml-pipeline-workflow` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# ML Pipeline Workflow Complete end-to-end MLOps pipeline orchestration from data preparation through model deployment.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What This Skill Provides, Integration Points, Progressive Disclosure, Common Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to ml pipeline workflow
- You need a different domain or tool outside this scope
- Building new ML pipelines from scratch
- Designing workflow orchestration for ML systems
- Implementing data → model → deployment automation
- Setting up reproducible training workflows

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Explore hyperparameter-tuning skill for optimization
6. Learn experiment-tracking-setup for MLflow/W&B
7. Review model-deployment-patterns for serving strategies

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Next Steps

After setting up your pipeline:

1. Explore **hyperparameter-tuning** skill for optimization
2. Learn **experiment-tracking-setup** for MLflow/W&B
3. Review **model-deployment-patterns** for serving strategies
4. Implement monitoring with observability tools

#### Imported: Overview

This skill provides comprehensive guidance for building production ML pipelines that handle the full lifecycle: data ingestion → preparation → training → validation → deployment → monitoring.

#### Imported: What This Skill Provides

### Core Capabilities

1. **Pipeline Architecture**
   - End-to-end workflow design
   - DAG orchestration patterns (Airflow, Dagster, Kubeflow)
   - Component dependencies and data flow
   - Error handling and retry strategies

2. **Data Preparation**
   - Data validation and quality checks
   - Feature engineering pipelines
   - Data versioning and lineage
   - Train/validation/test splitting strategies

3. **Model Training**
   - Training job orchestration
   - Hyperparameter management
   - Experiment tracking integration
   - Distributed training patterns

4. **Model Validation**
   - Validation frameworks and metrics
   - A/B testing infrastructure
   - Performance regression detection
   - Model comparison workflows

5. **Deployment Automation**
   - Model serving patterns
   - Canary deployments
   - Blue-green deployment strategies
   - Rollback mechanisms

### Reference Documentation

See the `references/` directory for detailed guides:
- **data-preparation.md** - Data cleaning, validation, and feature engineering
- **model-training.md** - Training workflows and best practices
- **model-validation.md** - Validation strategies and metrics
- **model-deployment.md** - Deployment patterns and serving architectures

### Assets and Templates

The `assets/` directory contains:
- **pipeline-dag.yaml.template** - DAG template for workflow orchestration
- **training-config.yaml** - Training configuration template
- **validation-checklist.md** - Pre-deployment validation checklist

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ml-pipeline-workflow to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/ml-pipeline-workflow/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/ml-pipeline-workflow/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @ml-pipeline-workflow using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Usage Patterns

### Basic Pipeline Setup

```python
# 1. Define pipeline stages
stages = [
    "data_ingestion",
    "data_validation",
    "feature_engineering",
    "model_training",
    "model_validation",
    "model_deployment"
]

# 2. Configure dependencies
# See assets/pipeline-dag.yaml.template for full example
```

### Production Workflow

1. **Data Preparation Phase**
   - Ingest raw data from sources
   - Run data quality checks
   - Apply feature transformations
   - Version processed datasets

2. **Training Phase**
   - Load versioned training data
   - Execute training jobs
   - Track experiments and metrics
   - Save trained models

3. **Validation Phase**
   - Run validation test suite
   - Compare against baseline
   - Generate performance reports
   - Approve for deployment

4. **Deployment Phase**
   - Package model artifacts
   - Deploy to serving infrastructure
   - Configure monitoring
   - Validate production traffic

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Modularity: Each stage should be independently testable
- Idempotency: Re-running stages should be safe
- Observability: Log metrics at every stage
- Versioning: Track data, code, and model versions
- Failure Handling: Implement retry logic and alerting
- Use data validation libraries (Great Expectations, TFX)
- Version datasets with DVC or similar tools

### Imported Operating Notes

#### Imported: Best Practices

### Pipeline Design

- **Modularity**: Each stage should be independently testable
- **Idempotency**: Re-running stages should be safe
- **Observability**: Log metrics at every stage
- **Versioning**: Track data, code, and model versions
- **Failure Handling**: Implement retry logic and alerting

### Data Management

- Use data validation libraries (Great Expectations, TFX)
- Version datasets with DVC or similar tools
- Document feature engineering transformations
- Maintain data lineage tracking

### Model Operations

- Separate training and serving infrastructure
- Use model registries (MLflow, Weights & Biases)
- Implement gradual rollouts for new models
- Monitor model performance drift
- Maintain rollback capabilities

### Deployment Strategies

- Start with shadow deployments
- Use canary releases for validation
- Implement A/B testing infrastructure
- Set up automated rollback triggers
- Monitor latency and throughput

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/ml-pipeline-workflow`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

### Common Issues

- **Pipeline failures**: Check dependencies and data availability
- **Training instability**: Review hyperparameters and data quality
- **Deployment issues**: Validate model artifacts and serving config
- **Performance degradation**: Monitor data drift and model metrics

### Debugging Steps

1. Check pipeline logs for each stage
2. Validate input/output data at boundaries
3. Test components in isolation
4. Review experiment tracking metrics
5. Inspect model artifacts and metadata

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

#### Imported: Integration Points

### Orchestration Tools

- **Apache Airflow**: DAG-based workflow orchestration
- **Dagster**: Asset-based pipeline orchestration
- **Kubeflow Pipelines**: Kubernetes-native ML workflows
- **Prefect**: Modern dataflow automation

### Experiment Tracking

- MLflow for experiment tracking and model registry
- Weights & Biases for visualization and collaboration
- TensorBoard for training metrics

### Deployment Platforms

- AWS SageMaker for managed ML infrastructure
- Google Vertex AI for GCP deployments
- Azure ML for Azure cloud
- Kubernetes + KServe for cloud-agnostic serving

#### Imported: Progressive Disclosure

Start with the basics and gradually add complexity:

1. **Level 1**: Simple linear pipeline (data → train → deploy)
2. **Level 2**: Add validation and monitoring stages
3. **Level 3**: Implement hyperparameter tuning
4. **Level 4**: Add A/B testing and gradual rollouts
5. **Level 5**: Multi-model pipelines with ensemble strategies

#### Imported: Common Patterns

### Batch Training Pipeline

```yaml
# See assets/pipeline-dag.yaml.template
stages:
  - name: data_preparation
    dependencies: []
  - name: model_training
    dependencies: [data_preparation]
  - name: model_evaluation
    dependencies: [model_training]
  - name: model_deployment
    dependencies: [model_evaluation]
```

### Real-time Feature Pipeline

```python
# Stream processing for real-time features
# Combined with batch training
# See references/data-preparation.md
```

### Continuous Training

```python
# Automated retraining on schedule
# Triggered by data drift detection
# See references/model-training.md
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

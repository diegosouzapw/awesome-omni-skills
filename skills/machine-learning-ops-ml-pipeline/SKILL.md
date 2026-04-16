---
name: machine-learning-ops-ml-pipeline
description: "Machine Learning Pipeline - Multi-Agent MLOps Orchestration workflow skill. Use this skill when the user needs Design and implement a complete ML pipeline for: $ARGUMENTS and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["machine-learning-ops-ml-pipeline", "design", "and", "implement", "complete", "pipeline", "for", "arguments"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Machine Learning Pipeline - Multi-Agent MLOps Orchestration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/machine-learning-ops-ml-pipeline` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Machine Learning Pipeline - Multi-Agent MLOps Orchestration Design and implement a complete ML pipeline for: $ARGUMENTS

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Thinking, Phase 1: Data & Requirements Analysis, Phase 2: Model Development & Training, Phase 3: Production Deployment & Serving, Phase 4: Monitoring & Continuous Improvement, Configuration Options.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on machine learning pipeline - multi-agent mlops orchestration tasks or workflows
- Needing guidance, best practices, or checklists for machine learning pipeline - multi-agent mlops orchestration
- The task is unrelated to machine learning pipeline - multi-agent mlops orchestration
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Design and implement a complete ML pipeline for: $ARGUMENTS.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Thinking

This workflow orchestrates multiple specialized agents to build a production-ready ML pipeline following modern MLOps best practices. The approach emphasizes:

- **Phase-based coordination**: Each phase builds upon previous outputs, with clear handoffs between agents
- **Modern tooling integration**: MLflow/W&B for experiments, Feast/Tecton for features, KServe/Seldon for serving
- **Production-first mindset**: Every component designed for scale, monitoring, and reliability
- **Reproducibility**: Version control for data, models, and infrastructure
- **Continuous improvement**: Automated retraining, A/B testing, and drift detection

The multi-agent approach ensures each aspect is handled by domain experts:
- Data engineers handle ingestion and quality
- Data scientists design features and experiments
- ML engineers implement training pipelines
- MLOps engineers handle production deployment
- Observability engineers ensure monitoring

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @machine-learning-ops-ml-pipeline to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @machine-learning-ops-ml-pipeline against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @machine-learning-ops-ml-pipeline for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @machine-learning-ops-ml-pipeline using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/machine-learning-ops-ml-pipeline`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@llm-application-dev-ai-assistant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-application-dev-langchain-agent` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-application-dev-prompt-optimize` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@llm-evaluation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Phase 1: Data & Requirements Analysis

<Task>
subagent_type: data-engineer
prompt: |
  Analyze and design data pipeline for ML system with requirements: $ARGUMENTS

  Deliverables:
  1. Data source audit and ingestion strategy:
     - Source systems and connection patterns
     - Schema validation using Pydantic/Great Expectations
     - Data versioning with DVC or lakeFS
     - Incremental loading and CDC strategies

  2. Data quality framework:
     - Profiling and statistics generation
     - Anomaly detection rules
     - Data lineage tracking
     - Quality gates and SLAs

  3. Storage architecture:
     - Raw/processed/feature layers
     - Partitioning strategy
     - Retention policies
     - Cost optimization

  Provide implementation code for critical components and integration patterns.
</Task>

<Task>
subagent_type: data-scientist
prompt: |
  Design feature engineering and model requirements for: $ARGUMENTS
  Using data architecture from: {phase1.data-engineer.output}

  Deliverables:
  1. Feature engineering pipeline:
     - Transformation specifications
     - Feature store schema (Feast/Tecton)
     - Statistical validation rules
     - Handling strategies for missing data/outliers

  2. Model requirements:
     - Algorithm selection rationale
     - Performance metrics and baselines
     - Training data requirements
     - Evaluation criteria and thresholds

  3. Experiment design:
     - Hypothesis and success metrics
     - A/B testing methodology
     - Sample size calculations
     - Bias detection approach

  Include feature transformation code and statistical validation logic.
</Task>

#### Imported: Phase 2: Model Development & Training

<Task>
subagent_type: ml-engineer
prompt: |
  Implement training pipeline based on requirements: {phase1.data-scientist.output}
  Using data pipeline: {phase1.data-engineer.output}

  Build comprehensive training system:
  1. Training pipeline implementation:
     - Modular training code with clear interfaces
     - Hyperparameter optimization (Optuna/Ray Tune)
     - Distributed training support (Horovod/PyTorch DDP)
     - Cross-validation and ensemble strategies

  2. Experiment tracking setup:
     - MLflow/Weights & Biases integration
     - Metric logging and visualization
     - Artifact management (models, plots, data samples)
     - Experiment comparison and analysis tools

  3. Model registry integration:
     - Version control and tagging strategy
     - Model metadata and lineage
     - Promotion workflows (dev -> staging -> prod)
     - Rollback procedures

  Provide complete training code with configuration management.
</Task>

<Task>
subagent_type: python-pro
prompt: |
  Optimize and productionize ML code from: {phase2.ml-engineer.output}

  Focus areas:
  1. Code quality and structure:
     - Refactor for production standards
     - Add comprehensive error handling
     - Implement proper logging with structured formats
     - Create reusable components and utilities

  2. Performance optimization:
     - Profile and optimize bottlenecks
     - Implement caching strategies
     - Optimize data loading and preprocessing
     - Memory management for large-scale training

  3. Testing framework:
     - Unit tests for data transformations
     - Integration tests for pipeline components
     - Model quality tests (invariance, directional)
     - Performance regression tests

  Deliver production-ready, maintainable code with full test coverage.
</Task>

#### Imported: Phase 3: Production Deployment & Serving

<Task>
subagent_type: mlops-engineer
prompt: |
  Design production deployment for models from: {phase2.ml-engineer.output}
  With optimized code from: {phase2.python-pro.output}

  Implementation requirements:
  1. Model serving infrastructure:
     - REST/gRPC APIs with FastAPI/TorchServe
     - Batch prediction pipelines (Airflow/Kubeflow)
     - Stream processing (Kafka/Kinesis integration)
     - Model serving platforms (KServe/Seldon Core)

  2. Deployment strategies:
     - Blue-green deployments for zero downtime
     - Canary releases with traffic splitting
     - Shadow deployments for validation
     - A/B testing infrastructure

  3. CI/CD pipeline:
     - GitHub Actions/GitLab CI workflows
     - Automated testing gates
     - Model validation before deployment
     - ArgoCD for GitOps deployment

  4. Infrastructure as Code:
     - Terraform modules for cloud resources
     - Helm charts for Kubernetes deployments
     - Docker multi-stage builds for optimization
     - Secret management with Vault/Secrets Manager

  Provide complete deployment configuration and automation scripts.
</Task>

<Task>
subagent_type: kubernetes-architect
prompt: |
  Design Kubernetes infrastructure for ML workloads from: {phase3.mlops-engineer.output}

  Kubernetes-specific requirements:
  1. Workload orchestration:
     - Training job scheduling with Kubeflow
     - GPU resource allocation and sharing
     - Spot/preemptible instance integration
     - Priority classes and resource quotas

  2. Serving infrastructure:
     - HPA/VPA for autoscaling
     - KEDA for event-driven scaling
     - Istio service mesh for traffic management
     - Model caching and warm-up strategies

  3. Storage and data access:
     - PVC strategies for training data
     - Model artifact storage with CSI drivers
     - Distributed storage for feature stores
     - Cache layers for inference optimization

  Provide Kubernetes manifests and Helm charts for entire ML platform.
</Task>

#### Imported: Phase 4: Monitoring & Continuous Improvement

<Task>
subagent_type: observability-engineer
prompt: |
  Implement comprehensive monitoring for ML system deployed in: {phase3.mlops-engineer.output}
  Using Kubernetes infrastructure: {phase3.kubernetes-architect.output}

  Monitoring framework:
  1. Model performance monitoring:
     - Prediction accuracy tracking
     - Latency and throughput metrics
     - Feature importance shifts
     - Business KPI correlation

  2. Data and model drift detection:
     - Statistical drift detection (KS test, PSI)
     - Concept drift monitoring
     - Feature distribution tracking
     - Automated drift alerts and reports

  3. System observability:
     - Prometheus metrics for all components
     - Grafana dashboards for visualization
     - Distributed tracing with Jaeger/Zipkin
     - Log aggregation with ELK/Loki

  4. Alerting and automation:
     - PagerDuty/Opsgenie integration
     - Automated retraining triggers
     - Performance degradation workflows
     - Incident response runbooks

  5. Cost tracking:
     - Resource utilization metrics
     - Cost allocation by model/experiment
     - Optimization recommendations
     - Budget alerts and controls

  Deliver monitoring configuration, dashboards, and alert rules.
</Task>

#### Imported: Configuration Options

- **experiment_tracking**: mlflow | wandb | neptune | clearml
- **feature_store**: feast | tecton | databricks | custom
- **serving_platform**: kserve | seldon | torchserve | triton
- **orchestration**: kubeflow | airflow | prefect | dagster
- **cloud_provider**: aws | azure | gcp | multi-cloud
- **deployment_mode**: realtime | batch | streaming | hybrid
- **monitoring_stack**: prometheus | datadog | newrelic | custom

#### Imported: Success Criteria

1. **Data Pipeline Success**:
   - < 0.1% data quality issues in production
   - Automated data validation passing 99.9% of time
   - Complete data lineage tracking
   - Sub-second feature serving latency

2. **Model Performance**:
   - Meeting or exceeding baseline metrics
   - < 5% performance degradation before retraining
   - Successful A/B tests with statistical significance
   - No undetected model drift > 24 hours

3. **Operational Excellence**:
   - 99.9% uptime for model serving
   - < 200ms p99 inference latency
   - Automated rollback within 5 minutes
   - Complete observability with < 1 minute alert time

4. **Development Velocity**:
   - < 1 hour from commit to production
   - Parallel experiment execution
   - Reproducible training runs
   - Self-service model deployment

5. **Cost Efficiency**:
   - < 20% infrastructure waste
   - Optimized resource allocation
   - Automatic scaling based on load
   - Spot instance utilization > 60%

#### Imported: Final Deliverables

Upon completion, the orchestrated pipeline will provide:
- End-to-end ML pipeline with full automation
- Comprehensive documentation and runbooks
- Production-ready infrastructure as code
- Complete monitoring and alerting system
- CI/CD pipelines for continuous improvement
- Cost optimization and scaling strategies
- Disaster recovery and rollback procedures

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: "data-engineering-data-driven-feature"
description: "Data-Driven Feature Development workflow skill. Use this skill when the user needs Build features guided by data insights, A/B testing, and continuous measurement using specialized agents for analysis, implementation, and experimentation and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "product"
tags:
  - "data-engineering-data-driven-feature"
  - "build"
  - "features"
  - "guided"
  - "data"
  - "insights"
  - "testing"
  - "and"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-05-04"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "data-engineering-data-driven-feature"
family_name: "Data-Driven Feature Development"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/data-engineering-data-driven-feature"
upstream_skill: "skills/data-engineering-data-driven-feature"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "data-engineering-data-driven-feature"
---

# Data-Driven Feature Development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/data-engineering-data-driven-feature` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Data-Driven Feature Development Build features guided by data insights, A/B testing, and continuous measurement using specialized agents for analysis, implementation, and experimentation. [Extended thinking: This workflow orchestrates a comprehensive data-driven development process from initial data analysis and hypothesis formulation through feature implementation with integrated analytics, A/B testing infrastructure, and post-launch analysis. Each phase leverages specialized agents to ensure features are built based on data insights, properly instrumented for measurement, and validated through controlled experiments. The workflow emphasizes modern product analytics practices, statistical rigor in testing, and continuous learning from user behavior.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Data Analysis and Hypothesis Formation, Phase 2: Feature Architecture and Analytics Design, Phase 3: Implementation with Instrumentation, Phase 4: Pre-Launch Validation, Phase 5: Launch and Experimentation, Phase 6: Analysis and Decision Making.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on data-driven feature development tasks or workflows
- Needing guidance, best practices, or checklists for data-driven feature development
- The task is unrelated to data-driven feature development
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Build features guided by data insights, A/B testing, and continuous measurement using specialized agents for analysis, implementation, and experimentation.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: Phase 1: Data Analysis and Hypothesis Formation

### 1. Exploratory Data Analysis
- Use Task tool with subagent_type="machine-learning-ops::data-scientist"
- Prompt: "Perform exploratory data analysis for feature: $ARGUMENTS. Analyze existing user behavior data, identify patterns and opportunities, segment users by behavior, and calculate baseline metrics. Use modern analytics tools (Amplitude, Mixpanel, Segment) to understand current user journeys, conversion funnels, and engagement patterns."
- Output: EDA report with visualizations, user segments, behavioral patterns, baseline metrics

### 2. Business Hypothesis Development
- Use Task tool with subagent_type="business-analytics::business-analyst"
- Context: Data scientist's EDA findings and behavioral patterns
- Prompt: "Formulate business hypotheses for feature: $ARGUMENTS based on data analysis. Define clear success metrics, expected impact on key business KPIs, target user segments, and minimum detectable effects. Create measurable hypotheses using frameworks like ICE scoring or RICE prioritization."
- Output: Hypothesis document, success metrics definition, expected ROI calculations

### 3. Statistical Experiment Design
- Use Task tool with subagent_type="machine-learning-ops::data-scientist"
- Context: Business hypotheses and success metrics
- Prompt: "Design statistical experiment for feature: $ARGUMENTS. Calculate required sample size for statistical power, define control and treatment groups, specify randomization strategy, and plan for multiple testing corrections. Consider Bayesian A/B testing approaches for faster decision making. Design for both primary and guardrail metrics."
- Output: Experiment design document, power analysis, statistical test plan

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @data-engineering-data-driven-feature to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @data-engineering-data-driven-feature against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @data-engineering-data-driven-feature for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @data-engineering-data-driven-feature using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/data-engineering-data-driven-feature`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@conductor-validator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@confluence-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-marketer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Phase 2: Feature Architecture and Analytics Design

### 4. Feature Architecture Planning
- Use Task tool with subagent_type="data-engineering::backend-architect"
- Context: Business requirements and experiment design
- Prompt: "Design feature architecture for: $ARGUMENTS with A/B testing capability. Include feature flag integration (LaunchDarkly, Split.io, or Optimizely), gradual rollout strategy, circuit breakers for safety, and clean separation between control and treatment logic. Ensure architecture supports real-time configuration updates."
- Output: Architecture diagrams, feature flag schema, rollout strategy

### 5. Analytics Instrumentation Design
- Use Task tool with subagent_type="data-engineering::data-engineer"
- Context: Feature architecture and success metrics
- Prompt: "Design comprehensive analytics instrumentation for: $ARGUMENTS. Define event schemas for user interactions, specify properties for segmentation and analysis, design funnel tracking and conversion events, plan cohort analysis capabilities. Implement using modern SDKs (Segment, Amplitude, Mixpanel) with proper event taxonomy."
- Output: Event tracking plan, analytics schema, instrumentation guide

### 6. Data Pipeline Architecture
- Use Task tool with subagent_type="data-engineering::data-engineer"
- Context: Analytics requirements and existing data infrastructure
- Prompt: "Design data pipelines for feature: $ARGUMENTS. Include real-time streaming for live metrics (Kafka, Kinesis), batch processing for detailed analysis, data warehouse integration (Snowflake, BigQuery), and feature store for ML if applicable. Ensure proper data governance and GDPR compliance."
- Output: Pipeline architecture, ETL/ELT specifications, data flow diagrams

#### Imported: Phase 3: Implementation with Instrumentation

### 7. Backend Implementation
- Use Task tool with subagent_type="backend-development::backend-architect"
- Context: Architecture design and feature requirements
- Prompt: "Implement backend for feature: $ARGUMENTS with full instrumentation. Include feature flag checks at decision points, comprehensive event tracking for all user actions, performance metrics collection, error tracking and monitoring. Implement proper logging for experiment analysis."
- Output: Backend code with analytics, feature flag integration, monitoring setup

### 8. Frontend Implementation
- Use Task tool with subagent_type="frontend-mobile-development::frontend-developer"
- Context: Backend APIs and analytics requirements
- Prompt: "Build frontend for feature: $ARGUMENTS with analytics tracking. Implement event tracking for all user interactions, session recording integration if applicable, performance metrics (Core Web Vitals), and proper error boundaries. Ensure consistent experience between control and treatment groups."
- Output: Frontend code with analytics, A/B test variants, performance monitoring

### 9. ML Model Integration (if applicable)
- Use Task tool with subagent_type="machine-learning-ops::ml-engineer"
- Context: Feature requirements and data pipelines
- Prompt: "Integrate ML models for feature: $ARGUMENTS if needed. Implement online inference with low latency, A/B testing between model versions, model performance tracking, and automatic fallback mechanisms. Set up model monitoring for drift detection."
- Output: ML pipeline, model serving infrastructure, monitoring setup

#### Imported: Phase 4: Pre-Launch Validation

### 10. Analytics Validation
- Use Task tool with subagent_type="data-engineering::data-engineer"
- Context: Implemented tracking and event schemas
- Prompt: "Validate analytics implementation for: $ARGUMENTS. Test all event tracking in staging, verify data quality and completeness, validate funnel definitions, ensure proper user identification and session tracking. Run end-to-end tests for data pipeline."
- Output: Validation report, data quality metrics, tracking coverage analysis

### 11. Experiment Setup
- Use Task tool with subagent_type="cloud-infrastructure::deployment-engineer"
- Context: Feature flags and experiment design
- Prompt: "Configure experiment infrastructure for: $ARGUMENTS. Set up feature flags with proper targeting rules, configure traffic allocation (start with 5-10%), implement kill switches, set up monitoring alerts for key metrics. Test randomization and assignment logic."
- Output: Experiment configuration, monitoring dashboards, rollout plan

#### Imported: Phase 5: Launch and Experimentation

### 12. Gradual Rollout
- Use Task tool with subagent_type="cloud-infrastructure::deployment-engineer"
- Context: Experiment configuration and monitoring setup
- Prompt: "Execute gradual rollout for feature: $ARGUMENTS. Start with internal dogfooding, then beta users (1-5%), gradually increase to target traffic. Monitor error rates, performance metrics, and early indicators. Implement automated rollback on anomalies."
- Output: Rollout execution, monitoring alerts, health metrics

### 13. Real-time Monitoring
- Use Task tool with subagent_type="observability-monitoring::observability-engineer"
- Context: Deployed feature and success metrics
- Prompt: "Set up comprehensive monitoring for: $ARGUMENTS. Create real-time dashboards for experiment metrics, configure alerts for statistical significance, monitor guardrail metrics for negative impacts, track system performance and error rates. Use tools like Datadog, New Relic, or custom dashboards."
- Output: Monitoring dashboards, alert configurations, SLO definitions

#### Imported: Phase 6: Analysis and Decision Making

### 14. Statistical Analysis
- Use Task tool with subagent_type="machine-learning-ops::data-scientist"
- Context: Experiment data and original hypotheses
- Prompt: "Analyze A/B test results for: $ARGUMENTS. Calculate statistical significance with confidence intervals, check for segment-level effects, analyze secondary metrics impact, investigate any unexpected patterns. Use both frequentist and Bayesian approaches. Account for multiple testing if applicable."
- Output: Statistical analysis report, significance tests, segment analysis

### 15. Business Impact Assessment
- Use Task tool with subagent_type="business-analytics::business-analyst"
- Context: Statistical analysis and business metrics
- Prompt: "Assess business impact of feature: $ARGUMENTS. Calculate actual vs expected ROI, analyze impact on key business metrics, evaluate cost-benefit including operational overhead, project long-term value. Make recommendation on full rollout, iteration, or rollback."
- Output: Business impact report, ROI analysis, recommendation document

### 16. Post-Launch Optimization
- Use Task tool with subagent_type="machine-learning-ops::data-scientist"
- Context: Launch results and user feedback
- Prompt: "Identify optimization opportunities for: $ARGUMENTS based on data. Analyze user behavior patterns in treatment group, identify friction points in user journey, suggest improvements based on data, plan follow-up experiments. Use cohort analysis for long-term impact."
- Output: Optimization recommendations, follow-up experiment plans

#### Imported: Configuration Options

```yaml
experiment_config:
  min_sample_size: 10000
  confidence_level: 0.95
  runtime_days: 14
  traffic_allocation: "gradual"  # gradual, fixed, or adaptive

analytics_platforms:
  - amplitude
  - segment
  - mixpanel

feature_flags:
  provider: "launchdarkly"  # launchdarkly, split, optimizely, unleash

statistical_methods:
  - frequentist
  - bayesian

monitoring:
  - real_time_metrics: true
  - anomaly_detection: true
  - automatic_rollback: true
```

#### Imported: Success Criteria

- **Data Coverage**: 100% of user interactions tracked with proper event schema
- **Experiment Validity**: Proper randomization, sufficient statistical power, no sample ratio mismatch
- **Statistical Rigor**: Clear significance testing, proper confidence intervals, multiple testing corrections
- **Business Impact**: Measurable improvement in target metrics without degrading guardrail metrics
- **Technical Performance**: No degradation in p95 latency, error rates below 0.1%
- **Decision Speed**: Clear go/no-go decision within planned experiment runtime
- **Learning Outcomes**: Documented insights for future feature development

#### Imported: Coordination Notes

- Data scientists and business analysts collaborate on hypothesis formation
- Engineers implement with analytics as first-class requirement, not afterthought
- Feature flags enable safe experimentation without full deployments
- Real-time monitoring allows for quick iteration and rollback if needed
- Statistical rigor balanced with business practicality and speed to market
- Continuous learning loop feeds back into next feature development cycle

Feature to develop with data-driven approach: $ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

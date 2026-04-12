---
name: application-performance-performance-optimization-v2
description: "application-performance-performance-optimization workflow skill. Use this skill when the user needs Optimize end-to-end application performance with profiling, observability, and backend/frontend tuning. Use when coordinating performance optimization across the stack and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["application-performance-performance-optimization-v2", "application-performance-performance-optimization", "optimize", "end-to-end", "application", "performance", "profiling", "observability"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# application-performance-performance-optimization

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/application-performance-performance-optimization` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

Optimize application performance end-to-end using specialized performance and optimization agents: [Extended thinking: This workflow orchestrates a comprehensive performance optimization process across the entire application stack. Starting with deep profiling and baseline establishment, the workflow progresses through targeted optimizations in each system layer, validates improvements through load testing, and establishes continuous monitoring for sustained performance. Each phase builds on insights from previous phases, creating a data-driven optimization strategy that addresses real bottlenecks rather than theoretical improvements. The workflow emphasizes modern observability practices, user-centric performance metrics, and cost-effective optimization strategies.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, Phase 1: Performance Profiling & Baseline, Phase 2: Database & Backend Optimization, Phase 3: Frontend & CDN Optimization, Phase 4: Load Testing & Validation, Phase 5: Monitoring & Continuous Optimization.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Coordinating performance optimization across backend, frontend, and infrastructure
- Establishing baselines and profiling to identify bottlenecks
- Designing load tests, performance budgets, or capacity plans
- Building observability for performance and reliability targets
- The task is a small localized fix with no broader performance goals
- There is no access to metrics, tracing, or profiling data

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

1. Confirm performance goals, constraints, and target metrics.
2. Establish baselines with profiling, tracing, and real-user data.
3. Execute phased optimizations across the stack with measurable impact.
4. Validate improvements and set guardrails to prevent regressions.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

1. Confirm performance goals, constraints, and target metrics.
2. Establish baselines with profiling, tracing, and real-user data.
3. Execute phased optimizations across the stack with measurable impact.
4. Validate improvements and set guardrails to prevent regressions.

#### Imported: Safety

- Avoid load testing production without approvals and safeguards.
- Roll out performance changes gradually with rollback plans.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @application-performance-performance-optimization-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/application-performance-performance-optimization-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/application-performance-performance-optimization-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @application-performance-performance-optimization-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/application-performance-performance-optimization`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Phase 1: Performance Profiling & Baseline

### 1. Comprehensive Performance Profiling

- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Profile application performance comprehensively for: $ARGUMENTS. Generate flame graphs for CPU usage, heap dumps for memory analysis, trace I/O operations, and identify hot paths. Use APM tools like DataDog or New Relic if available. Include database query profiling, API response times, and frontend rendering metrics. Establish performance baselines for all critical user journeys."
- Context: Initial performance investigation
- Output: Detailed performance profile with flame graphs, memory analysis, bottleneck identification, baseline metrics

### 2. Observability Stack Assessment

- Use Task tool with subagent_type="observability-engineer"
- Prompt: "Assess current observability setup for: $ARGUMENTS. Review existing monitoring, distributed tracing with OpenTelemetry, log aggregation, and metrics collection. Identify gaps in visibility, missing metrics, and areas needing better instrumentation. Recommend APM tool integration and custom metrics for business-critical operations."
- Context: Performance profile from step 1
- Output: Observability assessment report, instrumentation gaps, monitoring recommendations

### 3. User Experience Analysis

- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Analyze user experience metrics for: $ARGUMENTS. Measure Core Web Vitals (LCP, FID, CLS), page load times, time to interactive, and perceived performance. Use Real User Monitoring (RUM) data if available. Identify user journeys with poor performance and their business impact."
- Context: Performance baselines from step 1
- Output: UX performance report, Core Web Vitals analysis, user impact assessment

#### Imported: Phase 2: Database & Backend Optimization

### 4. Database Performance Optimization

- Use Task tool with subagent_type="database-cloud-optimization::database-optimizer"
- Prompt: "Optimize database performance for: $ARGUMENTS based on profiling data: {context_from_phase_1}. Analyze slow query logs, create missing indexes, optimize execution plans, implement query result caching with Redis/Memcached. Review connection pooling, prepared statements, and batch processing opportunities. Consider read replicas and database sharding if needed."
- Context: Performance bottlenecks from phase 1
- Output: Optimized queries, new indexes, caching strategy, connection pool configuration

### 5. Backend Code & API Optimization

- Use Task tool with subagent_type="backend-development::backend-architect"
- Prompt: "Optimize backend services for: $ARGUMENTS targeting bottlenecks: {context_from_phase_1}. Implement efficient algorithms, add application-level caching, optimize N+1 queries, use async/await patterns effectively. Implement pagination, response compression, GraphQL query optimization, and batch API operations. Add circuit breakers and bulkheads for resilience."
- Context: Database optimizations from step 4, profiling data from phase 1
- Output: Optimized backend code, caching implementation, API improvements, resilience patterns

### 6. Microservices & Distributed System Optimization

- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Optimize distributed system performance for: $ARGUMENTS. Analyze service-to-service communication, implement service mesh optimizations, optimize message queue performance (Kafka/RabbitMQ), reduce network hops. Implement distributed caching strategies and optimize serialization/deserialization."
- Context: Backend optimizations from step 5
- Output: Service communication improvements, message queue optimization, distributed caching setup

#### Imported: Phase 3: Frontend & CDN Optimization

### 7. Frontend Bundle & Loading Optimization

- Use Task tool with subagent_type="frontend-developer"
- Prompt: "Optimize frontend performance for: $ARGUMENTS targeting Core Web Vitals: {context_from_phase_1}. Implement code splitting, tree shaking, lazy loading, and dynamic imports. Optimize bundle sizes with webpack/rollup analysis. Implement resource hints (prefetch, preconnect, preload). Optimize critical rendering path and eliminate render-blocking resources."
- Context: UX analysis from phase 1, backend optimizations from phase 2
- Output: Optimized bundles, lazy loading implementation, improved Core Web Vitals

### 8. CDN & Edge Optimization

- Use Task tool with subagent_type="cloud-infrastructure::cloud-architect"
- Prompt: "Optimize CDN and edge performance for: $ARGUMENTS. Configure CloudFlare/CloudFront for optimal caching, implement edge functions for dynamic content, set up image optimization with responsive images and WebP/AVIF formats. Configure HTTP/2 and HTTP/3, implement Brotli compression. Set up geographic distribution for global users."
- Context: Frontend optimizations from step 7
- Output: CDN configuration, edge caching rules, compression setup, geographic optimization

### 9. Mobile & Progressive Web App Optimization

- Use Task tool with subagent_type="frontend-mobile-development::mobile-developer"
- Prompt: "Optimize mobile experience for: $ARGUMENTS. Implement service workers for offline functionality, optimize for slow networks with adaptive loading. Reduce JavaScript execution time for mobile CPUs. Implement virtual scrolling for long lists. Optimize touch responsiveness and smooth animations. Consider React Native/Flutter specific optimizations if applicable."
- Context: Frontend optimizations from steps 7-8
- Output: Mobile-optimized code, PWA implementation, offline functionality

#### Imported: Phase 4: Load Testing & Validation

### 10. Comprehensive Load Testing

- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Conduct comprehensive load testing for: $ARGUMENTS using k6/Gatling/Artillery. Design realistic load scenarios based on production traffic patterns. Test normal load, peak load, and stress scenarios. Include API testing, browser-based testing, and WebSocket testing if applicable. Measure response times, throughput, error rates, and resource utilization at various load levels."
- Context: All optimizations from phases 1-3
- Output: Load test results, performance under load, breaking points, scalability analysis

### 11. Performance Regression Testing

- Use Task tool with subagent_type="performance-testing-review::test-automator"
- Prompt: "Create automated performance regression tests for: $ARGUMENTS. Set up performance budgets for key metrics, integrate with CI/CD pipeline using GitHub Actions or similar. Create Lighthouse CI tests for frontend, API performance tests with Artillery, and database performance benchmarks. Implement automatic rollback triggers for performance regressions."
- Context: Load test results from step 10, baseline metrics from phase 1
- Output: Performance test suite, CI/CD integration, regression prevention system

#### Imported: Phase 5: Monitoring & Continuous Optimization

### 12. Production Monitoring Setup

- Use Task tool with subagent_type="observability-engineer"
- Prompt: "Implement production performance monitoring for: $ARGUMENTS. Set up APM with DataDog/New Relic/Dynatrace, configure distributed tracing with OpenTelemetry, implement custom business metrics. Create Grafana dashboards for key metrics, set up PagerDuty alerts for performance degradation. Define SLIs/SLOs for critical services with error budgets."
- Context: Performance improvements from all previous phases
- Output: Monitoring dashboards, alert rules, SLI/SLO definitions, runbooks

### 13. Continuous Performance Optimization

- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Establish continuous optimization process for: $ARGUMENTS. Create performance budget tracking, implement A/B testing for performance changes, set up continuous profiling in production. Document optimization opportunities backlog, create capacity planning models, and establish regular performance review cycles."
- Context: Monitoring setup from step 12, all previous optimization work
- Output: Performance budget tracking, optimization backlog, capacity planning, review process

#### Imported: Configuration Options

- **performance_focus**: "latency" | "throughput" | "cost" | "balanced" (default: "balanced")
- **optimization_depth**: "quick-wins" | "comprehensive" | "enterprise" (default: "comprehensive")
- **tools_available**: ["datadog", "newrelic", "prometheus", "grafana", "k6", "gatling"]
- **budget_constraints**: Set maximum acceptable costs for infrastructure changes
- **user_impact_tolerance**: "zero-downtime" | "maintenance-window" | "gradual-rollout"

#### Imported: Success Criteria

- **Response Time**: P50 < 200ms, P95 < 1s, P99 < 2s for critical endpoints
- **Core Web Vitals**: LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Throughput**: Support 2x current peak load with <1% error rate
- **Database Performance**: Query P95 < 100ms, no queries > 1s
- **Resource Utilization**: CPU < 70%, Memory < 80% under normal load
- **Cost Efficiency**: Performance per dollar improved by minimum 30%
- **Monitoring Coverage**: 100% of critical paths instrumented with alerting

Performance optimization target: $ARGUMENTS

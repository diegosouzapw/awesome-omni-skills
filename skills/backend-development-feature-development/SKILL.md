---
name: backend-development-feature-development
description: "backend-development-feature-development workflow skill. Use this skill when the user needs Orchestrate end-to-end backend feature development from requirements to deployment. Use when coordinating multi-phase feature delivery across teams and services and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: product
tags: ["backend-development-feature-development", "orchestrate", "end-to-end", "backend", "feature", "development", "requirements", "deployment"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# backend-development-feature-development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/backend-development-feature-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

Orchestrate end-to-end feature development from requirements to production deployment: [Extended thinking: This workflow orchestrates specialized agents through comprehensive feature development phases - from discovery and planning through implementation, testing, and deployment. Each phase builds on previous outputs, ensuring coherent feature delivery. The workflow supports multiple development methodologies (traditional, TDD/BDD, DDD), feature complexity levels, and modern deployment strategies including feature flags, gradual rollouts, and observability-first development. Agents receive detailed context from previous phases to maintain consistency and quality throughout the development lifecycle.]

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety, Configuration Options, Phase 1: Discovery & Requirements Planning, Phase 2: Implementation & Development, Phase 3: Testing & Quality Assurance, Phase 4: Deployment & Monitoring.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Coordinating end-to-end feature delivery across backend, frontend, and data
- Managing requirements, architecture, implementation, testing, and rollout
- Planning multi-service changes with deployment and monitoring needs
- Aligning teams on scope, risks, and success metrics
- The task is a small, isolated backend change or bug fix
- You only need a single specialist task, not a full workflow

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

1. Confirm feature scope, success metrics, and constraints.
2. Select a methodology and define phase outputs.
3. Orchestrate implementation, testing, and security validation.
4. Prepare rollout, monitoring, and documentation plans.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

1. Confirm feature scope, success metrics, and constraints.
2. Select a methodology and define phase outputs.
3. Orchestrate implementation, testing, and security validation.
4. Prepare rollout, monitoring, and documentation plans.

#### Imported: Safety

- Avoid production changes without approvals and rollback plans.
- Validate data migrations and feature flags in staging first.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @backend-development-feature-development to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @backend-development-feature-development against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @backend-development-feature-development for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @backend-development-feature-development using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/backend-development-feature-development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Configuration Options

### Development Methodology

- **traditional**: Sequential development with testing after implementation
- **tdd**: Test-Driven Development with red-green-refactor cycles
- **bdd**: Behavior-Driven Development with scenario-based testing
- **ddd**: Domain-Driven Design with bounded contexts and aggregates

### Feature Complexity

- **simple**: Single service, minimal integration (1-2 days)
- **medium**: Multiple services, moderate integration (3-5 days)
- **complex**: Cross-domain, extensive integration (1-2 weeks)
- **epic**: Major architectural changes, multiple teams (2+ weeks)

### Deployment Strategy

- **direct**: Immediate rollout to all users
- **canary**: Gradual rollout starting with 5% of traffic
- **feature-flag**: Controlled activation via feature toggles
- **blue-green**: Zero-downtime deployment with instant rollback
- **a-b-test**: Split traffic for experimentation and metrics

#### Imported: Phase 1: Discovery & Requirements Planning

1. **Business Analysis & Requirements**
   - Use Task tool with subagent_type="business-analytics::business-analyst"
   - Prompt: "Analyze feature requirements for: $ARGUMENTS. Define user stories, acceptance criteria, success metrics, and business value. Identify stakeholders, dependencies, and risks. Create feature specification document with clear scope boundaries."
   - Expected output: Requirements document with user stories, success metrics, risk assessment
   - Context: Initial feature request and business context

2. **Technical Architecture Design**
   - Use Task tool with subagent_type="comprehensive-review::architect-review"
   - Prompt: "Design technical architecture for feature: $ARGUMENTS. Using requirements: [include business analysis from step 1]. Define service boundaries, API contracts, data models, integration points, and technology stack. Consider scalability, performance, and security requirements."
   - Expected output: Technical design document with architecture diagrams, API specifications, data models
   - Context: Business requirements, existing system architecture

3. **Feasibility & Risk Assessment**
   - Use Task tool with subagent_type="security-scanning::security-auditor"
   - Prompt: "Assess security implications and risks for feature: $ARGUMENTS. Review architecture: [include technical design from step 2]. Identify security requirements, compliance needs, data privacy concerns, and potential vulnerabilities."
   - Expected output: Security assessment with risk matrix, compliance checklist, mitigation strategies
   - Context: Technical design, regulatory requirements

#### Imported: Phase 2: Implementation & Development

4. **Backend Services Implementation**
   - Use Task tool with subagent_type="backend-architect"
   - Prompt: "Implement backend services for: $ARGUMENTS. Follow technical design: [include architecture from step 2]. Build RESTful/GraphQL APIs, implement business logic, integrate with data layer, add resilience patterns (circuit breakers, retries), implement caching strategies. Include feature flags for gradual rollout."
   - Expected output: Backend services with APIs, business logic, database integration, feature flags
   - Context: Technical design, API contracts, data models

5. **Frontend Implementation**
   - Use Task tool with subagent_type="frontend-mobile-development::frontend-developer"
   - Prompt: "Build frontend components for: $ARGUMENTS. Integrate with backend APIs: [include API endpoints from step 4]. Implement responsive UI, state management, error handling, loading states, and analytics tracking. Add feature flag integration for A/B testing capabilities."
   - Expected output: Frontend components with API integration, state management, analytics
   - Context: Backend APIs, UI/UX designs, user stories

6. **Data Pipeline & Integration**
   - Use Task tool with subagent_type="data-engineering::data-engineer"
   - Prompt: "Build data pipelines for: $ARGUMENTS. Design ETL/ELT processes, implement data validation, create analytics events, set up data quality monitoring. Integrate with product analytics platforms for feature usage tracking."
   - Expected output: Data pipelines, analytics events, data quality checks
   - Context: Data requirements, analytics needs, existing data infrastructure

#### Imported: Phase 3: Testing & Quality Assurance

7. **Automated Test Suite**
   - Use Task tool with subagent_type="unit-testing::test-automator"
   - Prompt: "Create comprehensive test suite for: $ARGUMENTS. Write unit tests for backend: [from step 4] and frontend: [from step 5]. Add integration tests for API endpoints, E2E tests for critical user journeys, performance tests for scalability validation. Ensure minimum 80% code coverage."
   - Expected output: Test suites with unit, integration, E2E, and performance tests
   - Context: Implementation code, acceptance criteria, test requirements

8. **Security Validation**
   - Use Task tool with subagent_type="security-scanning::security-auditor"
   - Prompt: "Perform security testing for: $ARGUMENTS. Review implementation: [include backend and frontend from steps 4-5]. Run OWASP checks, penetration testing, dependency scanning, and compliance validation. Verify data encryption, authentication, and authorization."
   - Expected output: Security test results, vulnerability report, remediation actions
   - Context: Implementation code, security requirements

9. **Performance Optimization**
   - Use Task tool with subagent_type="application-performance::performance-engineer"
   - Prompt: "Optimize performance for: $ARGUMENTS. Analyze backend services: [from step 4] and frontend: [from step 5]. Profile code, optimize queries, implement caching, reduce bundle sizes, improve load times. Set up performance budgets and monitoring."
   - Expected output: Performance improvements, optimization report, performance metrics
   - Context: Implementation code, performance requirements

#### Imported: Phase 4: Deployment & Monitoring

10. **Deployment Strategy & Pipeline**
    - Use Task tool with subagent_type="deployment-strategies::deployment-engineer"
    - Prompt: "Prepare deployment for: $ARGUMENTS. Create CI/CD pipeline with automated tests: [from step 7]. Configure feature flags for gradual rollout, implement blue-green deployment, set up rollback procedures. Create deployment runbook and rollback plan."
    - Expected output: CI/CD pipeline, deployment configuration, rollback procedures
    - Context: Test suites, infrastructure requirements, deployment strategy

11. **Observability & Monitoring**
    - Use Task tool with subagent_type="observability-monitoring::observability-engineer"
    - Prompt: "Set up observability for: $ARGUMENTS. Implement distributed tracing, custom metrics, error tracking, and alerting. Create dashboards for feature usage, performance metrics, error rates, and business KPIs. Set up SLOs/SLIs with automated alerts."
    - Expected output: Monitoring dashboards, alerts, SLO definitions, observability infrastructure
    - Context: Feature implementation, success metrics, operational requirements

12. **Documentation & Knowledge Transfer**
    - Use Task tool with subagent_type="documentation-generation::docs-architect"
    - Prompt: "Generate comprehensive documentation for: $ARGUMENTS. Create API documentation, user guides, deployment guides, troubleshooting runbooks. Include architecture diagrams, data flow diagrams, and integration guides. Generate automated changelog from commits."
    - Expected output: API docs, user guides, runbooks, architecture documentation
    - Context: All previous phases' outputs

#### Imported: Execution Parameters

### Required Parameters

- **--feature**: Feature name and description
- **--methodology**: Development approach (traditional|tdd|bdd|ddd)
- **--complexity**: Feature complexity level (simple|medium|complex|epic)

### Optional Parameters

- **--deployment-strategy**: Deployment approach (direct|canary|feature-flag|blue-green|a-b-test)
- **--test-coverage-min**: Minimum test coverage threshold (default: 80%)
- **--performance-budget**: Performance requirements (e.g., <200ms response time)
- **--rollout-percentage**: Initial rollout percentage for gradual deployment (default: 5%)
- **--feature-flag-service**: Feature flag provider (launchdarkly|split|unleash|custom)
- **--analytics-platform**: Analytics integration (segment|amplitude|mixpanel|custom)
- **--monitoring-stack**: Observability tools (datadog|newrelic|grafana|custom)

#### Imported: Success Criteria

- All acceptance criteria from business requirements are met
- Test coverage exceeds minimum threshold (80% default)
- Security scan shows no critical vulnerabilities
- Performance meets defined budgets and SLOs
- Feature flags configured for controlled rollout
- Monitoring and alerting fully operational
- Documentation complete and approved
- Successful deployment to production with rollback capability
- Product analytics tracking feature usage
- A/B test metrics configured (if applicable)

#### Imported: Rollback Strategy

If issues arise during or after deployment:

1. Immediate feature flag disable (< 1 minute)
2. Blue-green traffic switch (< 5 minutes)
3. Full deployment rollback via CI/CD (< 15 minutes)
4. Database migration rollback if needed (coordinate with data team)
5. Incident post-mortem and fixes before re-deployment

Feature description: $ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

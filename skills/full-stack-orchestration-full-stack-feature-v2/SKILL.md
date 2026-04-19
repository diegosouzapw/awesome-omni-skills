---
name: full-stack-orchestration-full-stack-feature-v2
description: "full-stack-orchestration-full-stack-feature workflow skill. Use this skill when the user needs working with full stack orchestration full stack feature and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: product
tags: ["full-stack-orchestration-full-stack-feature-v2", "full-stack-orchestration-full-stack-feature", "working", "full", "stack", "orchestration", "feature", "product"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# full-stack-orchestration-full-stack-feature

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/full-stack-orchestration-full-stack-feature` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Phase 1: Architecture & Design Foundation, Phase 2: Parallel Implementation, Phase 3: Integration & Testing, Phase 4: Deployment & Operations, Configuration Options, Success Criteria.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on full stack orchestration full stack feature tasks or workflows
- Needing guidance, best practices, or checklists for full stack orchestration full stack feature
- The task is unrelated to full stack orchestration full stack feature
- You need a different domain or tool outside this scope
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

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

Orchestrate full-stack feature development across backend, frontend, and infrastructure layers with modern API-first approach:

[Extended thinking: This workflow coordinates multiple specialized agents to deliver a complete full-stack feature from architecture through deployment. It follows API-first development principles, ensuring contract-driven development where the API specification drives both backend implementation and frontend consumption. Each phase builds upon previous outputs, creating a cohesive system with proper separation of concerns, comprehensive testing, and production-ready deployment. The workflow emphasizes modern practices like component-driven UI development, feature flags, observability, and progressive rollout strategies.]

#### Imported: Phase 1: Architecture & Design Foundation

### 1. Database Architecture Design
- Use Task tool with subagent_type="database-design::database-architect"
- Prompt: "Design database schema and data models for: $ARGUMENTS. Consider scalability, query patterns, indexing strategy, and data consistency requirements. Include migration strategy if modifying existing schema. Provide both logical and physical data models."
- Expected output: Entity relationship diagrams, table schemas, indexing strategy, migration scripts, data access patterns
- Context: Initial requirements and business domain model

### 2. Backend Service Architecture
- Use Task tool with subagent_type="backend-development::backend-architect"
- Prompt: "Design backend service architecture for: $ARGUMENTS. Using the database design from previous step, create service boundaries, define API contracts (OpenAPI/GraphQL), design authentication/authorization strategy, and specify inter-service communication patterns. Include resilience patterns (circuit breakers, retries) and caching strategy."
- Expected output: Service architecture diagram, OpenAPI specifications, authentication flows, caching architecture, message queue design (if applicable)
- Context: Database schema from step 1, non-functional requirements

### 3. Frontend Component Architecture
- Use Task tool with subagent_type="frontend-mobile-development::frontend-developer"
- Prompt: "Design frontend architecture and component structure for: $ARGUMENTS. Based on the API contracts from previous step, design component hierarchy, state management approach (Redux/Zustand/Context), routing structure, and data fetching patterns. Include accessibility requirements and responsive design strategy. Plan for Storybook component documentation."
- Expected output: Component tree diagram, state management design, routing configuration, design system integration plan, accessibility checklist
- Context: API specifications from step 2, UI/UX requirements

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @full-stack-orchestration-full-stack-feature-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @full-stack-orchestration-full-stack-feature-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @full-stack-orchestration-full-stack-feature-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @full-stack-orchestration-full-stack-feature-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/full-stack-orchestration-full-stack-feature`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@firecrawl-scraper-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@firmware-analyst-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Phase 2: Parallel Implementation

### 4. Backend Service Implementation
- Use Task tool with subagent_type="python-development::python-pro" (or "golang-pro"/"nodejs-expert" based on stack)
- Prompt: "Implement backend services for: $ARGUMENTS. Using the architecture and API specs from Phase 1, build RESTful/GraphQL endpoints with proper validation, error handling, and logging. Implement business logic, data access layer, authentication middleware, and integration with external services. Include observability (structured logging, metrics, tracing)."
- Expected output: Backend service code, API endpoints, middleware, background jobs, unit tests, integration tests
- Context: Architecture designs from Phase 1, database schema

### 5. Frontend Implementation
- Use Task tool with subagent_type="frontend-mobile-development::frontend-developer"
- Prompt: "Implement frontend application for: $ARGUMENTS. Build React/Next.js components using the component architecture from Phase 1. Implement state management, API integration with proper error handling and loading states, form validation, and responsive layouts. Create Storybook stories for components. Ensure accessibility (WCAG 2.1 AA compliance)."
- Expected output: React components, state management implementation, API client code, Storybook stories, responsive styles, accessibility implementations
- Context: Component architecture from step 3, API contracts

### 6. Database Implementation & Optimization
- Use Task tool with subagent_type="database-design::sql-pro"
- Prompt: "Implement and optimize database layer for: $ARGUMENTS. Create migration scripts, stored procedures (if needed), optimize queries identified by backend implementation, set up proper indexes, and implement data validation constraints. Include database-level security measures and backup strategies."
- Expected output: Migration scripts, optimized queries, stored procedures, index definitions, database security configuration
- Context: Database design from step 1, query patterns from backend implementation

#### Imported: Phase 3: Integration & Testing

### 7. API Contract Testing
- Use Task tool with subagent_type="test-automator"
- Prompt: "Create contract tests for: $ARGUMENTS. Implement Pact/Dredd tests to validate API contracts between backend and frontend. Create integration tests for all API endpoints, test authentication flows, validate error responses, and ensure proper CORS configuration. Include load testing scenarios."
- Expected output: Contract test suites, integration tests, load test scenarios, API documentation validation
- Context: API implementations from Phase 2

### 8. End-to-End Testing
- Use Task tool with subagent_type="test-automator"
- Prompt: "Implement E2E tests for: $ARGUMENTS. Create Playwright/Cypress tests covering critical user journeys, cross-browser compatibility, mobile responsiveness, and error scenarios. Test feature flags integration, analytics tracking, and performance metrics. Include visual regression tests."
- Expected output: E2E test suites, visual regression baselines, performance benchmarks, test reports
- Context: Frontend and backend implementations from Phase 2

### 9. Security Audit & Hardening
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Perform security audit for: $ARGUMENTS. Review API security (authentication, authorization, rate limiting), check for OWASP Top 10 vulnerabilities, audit frontend for XSS/CSRF risks, validate input sanitization, and review secrets management. Provide penetration testing results and remediation steps."
- Expected output: Security audit report, vulnerability assessment, remediation recommendations, security headers configuration
- Context: All implementations from Phase 2

#### Imported: Phase 4: Deployment & Operations

### 10. Infrastructure & CI/CD Setup
- Use Task tool with subagent_type="deployment-engineer"
- Prompt: "Setup deployment infrastructure for: $ARGUMENTS. Create Docker containers, Kubernetes manifests (or cloud-specific configs), implement CI/CD pipelines with automated testing gates, setup feature flags (LaunchDarkly/Unleash), and configure monitoring/alerting. Include blue-green deployment strategy and rollback procedures."
- Expected output: Dockerfiles, K8s manifests, CI/CD pipeline configs, feature flag setup, IaC templates (Terraform/CloudFormation)
- Context: All implementations and tests from previous phases

### 11. Observability & Monitoring
- Use Task tool with subagent_type="deployment-engineer"
- Prompt: "Implement observability stack for: $ARGUMENTS. Setup distributed tracing (OpenTelemetry), configure application metrics (Prometheus/DataDog), implement centralized logging (ELK/Splunk), create dashboards for key metrics, and define SLIs/SLOs. Include alerting rules and on-call procedures."
- Expected output: Observability configuration, dashboard definitions, alert rules, runbooks, SLI/SLO definitions
- Context: Infrastructure setup from step 10

### 12. Performance Optimization
- Use Task tool with subagent_type="performance-engineer"
- Prompt: "Optimize performance across stack for: $ARGUMENTS. Analyze and optimize database queries, implement caching strategies (Redis/CDN), optimize frontend bundle size and loading performance, setup lazy loading and code splitting, and tune backend service performance. Include before/after metrics."
- Expected output: Performance improvements, caching configuration, CDN setup, optimized bundles, performance metrics report
- Context: Monitoring data from step 11, load test results

#### Imported: Configuration Options

- `stack`: Specify technology stack (e.g., "React/FastAPI/PostgreSQL", "Next.js/Django/MongoDB")
- `deployment_target`: Cloud platform (AWS/GCP/Azure) or on-premises
- `feature_flags`: Enable/disable feature flag integration
- `api_style`: REST or GraphQL
- `testing_depth`: Comprehensive or essential
- `compliance`: Specific compliance requirements (GDPR, HIPAA, SOC2)

#### Imported: Success Criteria

- All API contracts validated through contract tests
- Frontend and backend integration tests passing
- E2E tests covering critical user journeys
- Security audit passed with no critical vulnerabilities
- Performance metrics meeting defined SLOs
- Observability stack capturing all key metrics
- Feature flags configured for progressive rollout
- Documentation complete for all components
- CI/CD pipeline with automated quality gates
- Zero-downtime deployment capability verified

#### Imported: Coordination Notes

- Each phase builds upon outputs from previous phases
- Parallel tasks in Phase 2 can run simultaneously but must converge for Phase 3
- Maintain traceability between requirements and implementations
- Use correlation IDs across all services for distributed tracing
- Document all architectural decisions in ADRs
- Ensure consistent error handling and API responses across services

Feature to implement: $ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

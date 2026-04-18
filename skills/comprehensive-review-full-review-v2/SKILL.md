---
name: comprehensive-review-full-review-v2
description: "comprehensive-review-full-review workflow skill. Use this skill when the user needs working with comprehensive review full review and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["comprehensive-review-full-review-v2", "comprehensive-review-full-review", "working", "comprehensive", "review", "full", "testing-security"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# comprehensive-review-full-review

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/comprehensive-review-full-review` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Review Configuration Options, Phase 1: Code Quality & Architecture Review, Phase 2: Security & Performance Review, Phase 3: Testing & Documentation Review, Phase 4: Best Practices & Standards Compliance, Consolidated Report Generation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on comprehensive review full review tasks or workflows
- Needing guidance, best practices, or checklists for comprehensive review full review
- The task is unrelated to comprehensive review full review
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

Orchestrate comprehensive multi-dimensional code review using specialized review agents

[Extended thinking: This workflow performs an exhaustive code review by orchestrating multiple specialized agents in sequential phases. Each phase builds upon previous findings to create a comprehensive review that covers code quality, security, performance, testing, documentation, and best practices. The workflow integrates modern AI-assisted review tools, static analysis, security scanning, and automated quality metrics. Results are consolidated into actionable feedback with clear prioritization and remediation guidance. The phased approach ensures thorough coverage while maintaining efficiency through parallel agent execution where appropriate.]

#### Imported: Review Configuration Options

- **--security-focus**: Prioritize security vulnerabilities and OWASP compliance
- **--performance-critical**: Emphasize performance bottlenecks and scalability issues
- **--tdd-review**: Include TDD compliance and test-first verification
- **--ai-assisted**: Enable AI-powered review tools (Copilot, Codium, Bito)
- **--strict-mode**: Fail review on any critical issues found
- **--metrics-report**: Generate detailed quality metrics dashboard
- **--framework [name]**: Apply framework-specific best practices (React, Spring, Django, etc.)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @comprehensive-review-full-review-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @comprehensive-review-full-review-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @comprehensive-review-full-review-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @comprehensive-review-full-review-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/comprehensive-review-full-review`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@chrome-extension-developer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@churn-prevention-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@circleci-automation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@cirq-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Phase 1: Code Quality & Architecture Review

Use Task tool to orchestrate quality and architecture agents in parallel:

### 1A. Code Quality Analysis
- Use Task tool with subagent_type="code-reviewer"
- Prompt: "Perform comprehensive code quality review for: $ARGUMENTS. Analyze code complexity, maintainability index, technical debt, code duplication, naming conventions, and adherence to Clean Code principles. Integrate with SonarQube, CodeQL, and Semgrep for static analysis. Check for code smells, anti-patterns, and violations of SOLID principles. Generate cyclomatic complexity metrics and identify refactoring opportunities."
- Expected output: Quality metrics, code smell inventory, refactoring recommendations
- Context: Initial codebase analysis, no dependencies on other phases

### 1B. Architecture & Design Review
- Use Task tool with subagent_type="architect-review"
- Prompt: "Review architectural design patterns and structural integrity in: $ARGUMENTS. Evaluate microservices boundaries, API design, database schema, dependency management, and adherence to Domain-Driven Design principles. Check for circular dependencies, inappropriate coupling, missing abstractions, and architectural drift. Verify compliance with enterprise architecture standards and cloud-native patterns."
- Expected output: Architecture assessment, design pattern analysis, structural recommendations
- Context: Runs parallel with code quality analysis

#### Imported: Phase 2: Security & Performance Review

Use Task tool with security and performance agents, incorporating Phase 1 findings:

### 2A. Security Vulnerability Assessment
- Use Task tool with subagent_type="security-auditor"
- Prompt: "Execute comprehensive security audit on: $ARGUMENTS. Perform OWASP Top 10 analysis, dependency vulnerability scanning with Snyk/Trivy, secrets detection with GitLeaks, input validation review, authentication/authorization assessment, and cryptographic implementation review. Include findings from Phase 1 architecture review: {phase1_architecture_context}. Check for SQL injection, XSS, CSRF, insecure deserialization, and configuration security issues."
- Expected output: Vulnerability report, CVE list, security risk matrix, remediation steps
- Context: Incorporates architectural vulnerabilities identified in Phase 1B

### 2B. Performance & Scalability Analysis
- Use Task tool with subagent_type="application-performance::performance-engineer"
- Prompt: "Conduct performance analysis and scalability assessment for: $ARGUMENTS. Profile code for CPU/memory hotspots, analyze database query performance, review caching strategies, identify N+1 problems, assess connection pooling, and evaluate asynchronous processing patterns. Consider architectural findings from Phase 1: {phase1_architecture_context}. Check for memory leaks, resource contention, and bottlenecks under load."
- Expected output: Performance metrics, bottleneck analysis, optimization recommendations
- Context: Uses architecture insights to identify systemic performance issues

#### Imported: Phase 3: Testing & Documentation Review

Use Task tool for test and documentation quality assessment:

### 3A. Test Coverage & Quality Analysis
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Evaluate testing strategy and implementation for: $ARGUMENTS. Analyze unit test coverage, integration test completeness, end-to-end test scenarios, test pyramid adherence, and test maintainability. Review test quality metrics including assertion density, test isolation, mock usage, and flakiness. Consider security and performance test requirements from Phase 2: {phase2_security_context}, {phase2_performance_context}. Verify TDD practices if --tdd-review flag is set."
- Expected output: Coverage report, test quality metrics, testing gap analysis
- Context: Incorporates security and performance testing requirements from Phase 2

### 3B. Documentation & API Specification Review
- Use Task tool with subagent_type="code-documentation::docs-architect"
- Prompt: "Review documentation completeness and quality for: $ARGUMENTS. Assess inline code documentation, API documentation (OpenAPI/Swagger), architecture decision records (ADRs), README completeness, deployment guides, and runbooks. Verify documentation reflects actual implementation based on all previous phase findings: {phase1_context}, {phase2_context}. Check for outdated documentation, missing examples, and unclear explanations."
- Expected output: Documentation coverage report, inconsistency list, improvement recommendations
- Context: Cross-references all previous findings to ensure documentation accuracy

#### Imported: Phase 4: Best Practices & Standards Compliance

Use Task tool to verify framework-specific and industry best practices:

### 4A. Framework & Language Best Practices
- Use Task tool with subagent_type="framework-migration::legacy-modernizer"
- Prompt: "Verify adherence to framework and language best practices for: $ARGUMENTS. Check modern JavaScript/TypeScript patterns, React hooks best practices, Python PEP compliance, Java enterprise patterns, Go idiomatic code, or framework-specific conventions (based on --framework flag). Review package management, build configuration, environment handling, and deployment practices. Include all quality issues from previous phases: {all_previous_contexts}."
- Expected output: Best practices compliance report, modernization recommendations
- Context: Synthesizes all previous findings for framework-specific guidance

### 4B. CI/CD & DevOps Practices Review
- Use Task tool with subagent_type="cicd-automation::deployment-engineer"
- Prompt: "Review CI/CD pipeline and DevOps practices for: $ARGUMENTS. Evaluate build automation, test automation integration, deployment strategies (blue-green, canary), infrastructure as code, monitoring/observability setup, and incident response procedures. Assess pipeline security, artifact management, and rollback capabilities. Consider all issues identified in previous phases that impact deployment: {all_critical_issues}."
- Expected output: Pipeline assessment, DevOps maturity evaluation, automation recommendations
- Context: Focuses on operationalizing fixes for all identified issues

#### Imported: Consolidated Report Generation

Compile all phase outputs into comprehensive review report:

### Critical Issues (P0 - Must Fix Immediately)
- Security vulnerabilities with CVSS > 7.0
- Data loss or corruption risks
- Authentication/authorization bypasses
- Production stability threats
- Compliance violations (GDPR, PCI DSS, SOC2)

### High Priority (P1 - Fix Before Next Release)
- Performance bottlenecks impacting user experience
- Missing critical test coverage
- Architectural anti-patterns causing technical debt
- Outdated dependencies with known vulnerabilities
- Code quality issues affecting maintainability

### Medium Priority (P2 - Plan for Next Sprint)
- Non-critical performance optimizations
- Documentation gaps and inconsistencies
- Code refactoring opportunities
- Test quality improvements
- DevOps automation enhancements

### Low Priority (P3 - Track in Backlog)
- Style guide violations
- Minor code smell issues
- Nice-to-have documentation updates
- Cosmetic improvements

#### Imported: Success Criteria

Review is considered successful when:
- All critical security vulnerabilities are identified and documented
- Performance bottlenecks are profiled with remediation paths
- Test coverage gaps are mapped with priority recommendations
- Architecture risks are assessed with mitigation strategies
- Documentation reflects actual implementation state
- Framework best practices compliance is verified
- CI/CD pipeline supports safe deployment of reviewed code
- Clear, actionable feedback is provided for all findings
- Metrics dashboard shows improvement trends
- Team has clear prioritized action plan for remediation

Target: $ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

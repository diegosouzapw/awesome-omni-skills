---
name: "code-refactoring-tech-debt"
description: "Technical Debt Analysis and Remediation workflow skill. Use this skill when the user needs You are a technical debt expert specializing in identifying, quantifying, and prioritizing technical debt in software projects. Analyze the codebase to uncover debt, assess its impact, and create acti and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "code-refactoring-tech-debt"
  - "you"
  - "are"
  - "technical"
  - "debt"
  - "expert"
  - "specializing"
  - "identifying"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-28"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "code-refactoring-tech-debt"
family_name: "Technical Debt Analysis and Remediation"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/code-refactoring-tech-debt"
upstream_skill: "skills/code-refactoring-tech-debt"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "263"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "96a8b32dc2a22bdb194119e570fe385417bd3d21"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "code-refactoring-tech-debt"
---

# Technical Debt Analysis and Remediation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/code-refactoring-tech-debt` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Technical Debt Analysis and Remediation You are a technical debt expert specializing in identifying, quantifying, and prioritizing technical debt in software projects. Analyze the codebase to uncover debt, assess its impact, and create actionable remediation plans.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Requirements, Executive Summary, Key Risks, Proposed Actions, Refactoring Guide.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on technical debt analysis and remediation tasks or workflows
- Needing guidance, best practices, or checklists for technical debt analysis and remediation
- The task is unrelated to technical debt analysis and remediation
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: You are a technical debt expert specializing in identifying, quantifying, and prioritizing technical debt in software projects. Analyze the codebase to uncover debt, assess its impact, and create acti.
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

1. Duplicated Code
2. Exact duplicates (copy-paste)
3. Similar logic patterns
4. Repeated business rules
5. Quantify: Lines duplicated, locations
6. Complex Code
7. High cyclomatic complexity (>10)

### Imported Workflow Notes

#### Imported: Instructions

### 1. Technical Debt Inventory

Conduct a thorough scan for all types of technical debt:

**Code Debt**
- **Duplicated Code**
  - Exact duplicates (copy-paste)
  - Similar logic patterns
  - Repeated business rules
  - Quantify: Lines duplicated, locations
  
- **Complex Code**
  - High cyclomatic complexity (>10)
  - Deeply nested conditionals (>3 levels)
  - Long methods (>50 lines)
  - God classes (>500 lines, >20 methods)
  - Quantify: Complexity scores, hotspots

- **Poor Structure**
  - Circular dependencies
  - Inappropriate intimacy between classes
  - Feature envy (methods using other class data)
  - Shotgun surgery patterns
  - Quantify: Coupling metrics, change frequency

**Architecture Debt**
- **Design Flaws**
  - Missing abstractions
  - Leaky abstractions
  - Violated architectural boundaries
  - Monolithic components
  - Quantify: Component size, dependency violations

- **Technology Debt**
  - Outdated frameworks/libraries
  - Deprecated API usage
  - Legacy patterns (e.g., callbacks vs promises)
  - Unsupported dependencies
  - Quantify: Version lag, security vulnerabilities

**Testing Debt**
- **Coverage Gaps**
  - Untested code paths
  - Missing edge cases
  - No integration tests
  - Lack of performance tests
  - Quantify: Coverage %, critical paths untested

- **Test Quality**
  - Brittle tests (environment-dependent)
  - Slow test suites
  - Flaky tests
  - No test documentation
  - Quantify: Test runtime, failure rate

**Documentation Debt**
- **Missing Documentation**
  - No API documentation
  - Undocumented complex logic
  - Missing architecture diagrams
  - No onboarding guides
  - Quantify: Undocumented public APIs

**Infrastructure Debt**
- **Deployment Issues**
  - Manual deployment steps
  - No rollback procedures
  - Missing monitoring
  - No performance baselines
  - Quantify: Deployment time, failure rate

### 2. Impact Assessment

Calculate the real cost of each debt item:

**Development Velocity Impact**
```
Debt Item: Duplicate user validation logic
Locations: 5 files
Time Impact: 
- 2 hours per bug fix (must fix in 5 places)
- 4 hours per feature change
- Monthly impact: ~20 hours
Annual Cost: 240 hours × $150/hour = $36,000
```

**Quality Impact**
```
Debt Item: No integration tests for payment flow
Bug Rate: 3 production bugs/month
Average Bug Cost:
- Investigation: 4 hours
- Fix: 2 hours  
- Testing: 2 hours
- Deployment: 1 hour
Monthly Cost: 3 bugs × 9 hours × $150 = $4,050
Annual Cost: $48,600
```

**Risk Assessment**
- **Critical**: Security vulnerabilities, data loss risk
- **High**: Performance degradation, frequent outages
- **Medium**: Developer frustration, slow feature delivery
- **Low**: Code style issues, minor inefficiencies

### 3. Debt Metrics Dashboard

Create measurable KPIs:

**Code Quality Metrics**
```yaml
Metrics:
  cyclomatic_complexity:
    current: 15.2
    target: 10.0
    files_above_threshold: 45
    
  code_duplication:
    percentage: 23%
    target: 5%
    duplication_hotspots:
      - src/validation: 850 lines
      - src/api/handlers: 620 lines
      
  test_coverage:
    unit: 45%
    integration: 12%
    e2e: 5%
    target: 80% / 60% / 30%
    
  dependency_health:
    outdated_major: 12
    outdated_minor: 34
    security_vulnerabilities: 7
    deprecated_apis: 15
```

**Trend Analysis**
```python
debt_trends = {
    "2024_Q1": {"score": 750, "items": 125},
    "2024_Q2": {"score": 820, "items": 142},
    "2024_Q3": {"score": 890, "items": 156},
    "growth_rate": "18% quarterly",
    "projection": "1200 by 2025_Q1 without intervention"
}
```

### 4. Prioritized Remediation Plan

Create an actionable roadmap based on ROI:

**Quick Wins (High Value, Low Effort)**
Week 1-2:
```
1. Extract duplicate validation logic to shared module
   Effort: 8 hours
   Savings: 20 hours/month
   ROI: 250% in first month

2. Add error monitoring to payment service
   Effort: 4 hours
   Savings: 15 hours/month debugging
   ROI: 375% in first month

3. Automate deployment script
   Effort: 12 hours
   Savings: 2 hours/deployment × 20 deploys/month
   ROI: 333% in first month
```

**Medium-Term Improvements (Month 1-3)**
```
1. Refactor OrderService (God class)
   - Split into 4 focused services
   - Add comprehensive tests
   - Create clear interfaces
   Effort: 60 hours
   Savings: 30 hours/month maintenance
   ROI: Positive after 2 months

2. Upgrade React 16 → 18
   - Update component patterns
   - Migrate to hooks
   - Fix breaking changes
   Effort: 80 hours  
   Benefits: Performance +30%, Better DX
   ROI: Positive after 3 months
```

**Long-Term Initiatives (Quarter 2-4)**
```
1. Implement Domain-Driven Design
   - Define bounded contexts
   - Create domain models
   - Establish clear boundaries
   Effort: 200 hours
   Benefits: 50% reduction in coupling
   ROI: Positive after 6 months

2. Comprehensive Test Suite
   - Unit: 80% coverage
   - Integration: 60% coverage
   - E2E: Critical paths
   Effort: 300 hours
   Benefits: 70% reduction in bugs
   ROI: Positive after 4 months
```

### 5. Implementation Strategy

**Incremental Refactoring**
```python
# Phase 1: Add facade over legacy code
class PaymentFacade:
    def __init__(self):
        self.legacy_processor = LegacyPaymentProcessor()
    
    def process_payment(self, order):
        # New clean interface
        return self.legacy_processor.doPayment(order.to_legacy())

# Phase 2: Implement new service alongside
class PaymentService:
    def process_payment(self, order):
        # Clean implementation
        pass

# Phase 3: Gradual migration
class PaymentFacade:
    def __init__(self):
        self.new_service = PaymentService()
        self.legacy = LegacyPaymentProcessor()
        
    def process_payment(self, order):
        if feature_flag("use_new_payment"):
            return self.new_service.process_payment(order)
        return self.legacy.doPayment(order.to_legacy())
```

**Team Allocation**
```yaml
Debt_Reduction_Team:
  dedicated_time: "20% sprint capacity"
  
  roles:
    - tech_lead: "Architecture decisions"
    - senior_dev: "Complex refactoring"  
    - dev: "Testing and documentation"
    
  sprint_goals:
    - sprint_1: "Quick wins completed"
    - sprint_2: "God class refactoring started"
    - sprint_3: "Test coverage >60%"
```

### 6. Prevention Strategy

Implement gates to prevent new debt:

**Automated Quality Gates**
```yaml
pre_commit_hooks:
  - complexity_check: "max 10"
  - duplication_check: "max 5%"
  - test_coverage: "min 80% for new code"
  
ci_pipeline:
  - dependency_audit: "no high vulnerabilities"
  - performance_test: "no regression >10%"
  - architecture_check: "no new violations"
  
code_review:
  - requires_two_approvals: true
  - must_include_tests: true
  - documentation_required: true
```

**Debt Budget**
```python
debt_budget = {
    "allowed_monthly_increase": "2%",
    "mandatory_reduction": "5% per quarter",
    "tracking": {
        "complexity": "sonarqube",
        "dependencies": "dependabot",
        "coverage": "codecov"
    }
}
```

### 7. Communication Plan

**Stakeholder Reports**
```markdown

#### Imported: Context

The user needs a comprehensive technical debt analysis to understand what's slowing down development, increasing bugs, and creating maintenance challenges. Focus on practical, measurable improvements with clear ROI.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @code-refactoring-tech-debt to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @code-refactoring-tech-debt against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @code-refactoring-tech-debt for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @code-refactoring-tech-debt using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/code-refactoring-tech-debt`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@burp-suite-testing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@burpsuite-project-parser` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@business-analyst` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@busybox-on-windows` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Requirements

$ARGUMENTS

#### Imported: Executive Summary

- Current debt score: 890 (High)
- Monthly velocity loss: 35%
- Bug rate increase: 45%
- Recommended investment: 500 hours
- Expected ROI: 280% over 12 months

#### Imported: Key Risks

1. Payment system: 3 critical vulnerabilities
2. Data layer: No backup strategy
3. API: Rate limiting not implemented

#### Imported: Proposed Actions

1. Immediate: Security patches (this week)
2. Short-term: Core refactoring (1 month)
3. Long-term: Architecture modernization (6 months)
```

**Developer Documentation**
```markdown

#### Imported: Refactoring Guide

1. Always maintain backward compatibility
2. Write tests before refactoring
3. Use feature flags for gradual rollout
4. Document architectural decisions
5. Measure impact with metrics

#### Imported: Code Standards

- Complexity limit: 10
- Method length: 20 lines
- Class length: 200 lines
- Test coverage: 80%
- Documentation: All public APIs
```

### 8. Success Metrics

Track progress with clear KPIs:

**Monthly Metrics**
- Debt score reduction: Target -5%
- New bug rate: Target -20%
- Deployment frequency: Target +50%
- Lead time: Target -30%
- Test coverage: Target +10%

**Quarterly Reviews**
- Architecture health score
- Developer satisfaction survey
- Performance benchmarks
- Security audit results
- Cost savings achieved

#### Imported: Output Format

1. **Debt Inventory**: Comprehensive list categorized by type with metrics
2. **Impact Analysis**: Cost calculations and risk assessments
3. **Prioritized Roadmap**: Quarter-by-quarter plan with clear deliverables
4. **Quick Wins**: Immediate actions for this sprint
5. **Implementation Guide**: Step-by-step refactoring strategies
6. **Prevention Plan**: Processes to avoid accumulating new debt
7. **ROI Projections**: Expected returns on debt reduction investment

Focus on delivering measurable improvements that directly impact development velocity, system reliability, and team morale.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

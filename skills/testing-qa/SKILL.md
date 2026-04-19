---
name: testing-qa
description: "Testing/QA Workflow Bundle workflow skill. Use this skill when the user needs Comprehensive testing and QA workflow covering unit testing, integration testing, E2E testing, browser automation, and quality assurance and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["testing-qa", "comprehensive", "testing", "and", "covering", "unit", "integration", "e2e"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Testing/QA Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/testing-qa` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Testing/QA Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Testing Pyramid, Quality Gates Checklist, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Setting up testing infrastructure
- Writing unit and integration tests
- Implementing E2E tests
- Automating browser testing
- Establishing quality gates
- Performing code review

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

1. test-automator - Test automation
2. test-driven-development - TDD
3. Define testing strategy
4. Choose testing frameworks
5. Plan test coverage
6. Set up test infrastructure
7. Configure CI integration

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Test Strategy

#### Skills to Invoke
- `test-automator` - Test automation
- `test-driven-development` - TDD

#### Actions
1. Define testing strategy
2. Choose testing frameworks
3. Plan test coverage
4. Set up test infrastructure
5. Configure CI integration

#### Copy-Paste Prompts
```
Use @test-automator to design testing strategy
```

```
Use @test-driven-development to implement TDD workflow
```

### Phase 2: Unit Testing

#### Skills to Invoke
- `javascript-testing-patterns` - Jest/Vitest
- `python-testing-patterns` - pytest
- `unit-testing-test-generate` - Test generation
- `tdd-orchestrator` - TDD orchestration

#### Actions
1. Write unit tests
2. Set up test fixtures
3. Configure mocking
4. Measure coverage
5. Integrate with CI

#### Copy-Paste Prompts
```
Use @javascript-testing-patterns to write Jest tests
```

```
Use @python-testing-patterns to write pytest tests
```

```
Use @unit-testing-test-generate to generate unit tests
```

### Phase 3: Integration Testing

#### Skills to Invoke
- `api-testing-observability-api-mock` - API testing
- `e2e-testing-patterns` - Integration patterns

#### Actions
1. Design integration tests
2. Set up test databases
3. Configure API mocks
4. Test service interactions
5. Verify data flows

#### Copy-Paste Prompts
```
Use @api-testing-observability-api-mock to test APIs
```

### Phase 4: E2E Testing

#### Skills to Invoke
- `playwright-skill` - Playwright testing
- `e2e-testing-patterns` - E2E patterns
- `webapp-testing` - Web app testing

#### Actions
1. Design E2E scenarios
2. Write test scripts
3. Configure test data
4. Set up parallel execution
5. Implement visual regression

#### Copy-Paste Prompts
```
Use @playwright-skill to create E2E tests
```

```
Use @e2e-testing-patterns to design E2E strategy
```

### Phase 5: Browser Automation

#### Skills to Invoke
- `browser-automation` - Browser automation
- `webapp-testing` - Browser testing
- `screenshots` - Screenshot automation

#### Actions
1. Set up browser automation
2. Configure headless testing
3. Implement visual testing
4. Capture screenshots
5. Test responsive design

#### Copy-Paste Prompts
```
Use @browser-automation to automate browser tasks
```

```
Use @screenshots to capture marketing screenshots
```

### Phase 6: Performance Testing

#### Skills to Invoke
- `performance-engineer` - Performance engineering
- `performance-profiling` - Performance profiling
- `web-performance-optimization` - Web performance

#### Actions
1. Design performance tests
2. Set up load testing
3. Measure response times
4. Identify bottlenecks
5. Optimize performance

#### Copy-Paste Prompts
```
Use @performance-engineer to test application performance
```

### Phase 7: Code Review

#### Skills to Invoke
- `code-reviewer` - AI code review
- `code-review-excellence` - Review best practices
- `find-bugs` - Bug detection
- `security-scanning-security-sast` - Security scanning

#### Actions
1. Configure review tools
2. Run automated reviews
3. Check for bugs
4. Verify security
5. Approve changes

#### Copy-Paste Prompts
```
Use @code-reviewer to review pull requests
```

```
Use @find-bugs to detect bugs in code
```

### Phase 8: Quality Gates

#### Skills to Invoke
- `lint-and-validate` - Linting
- `verification-before-completion` - Verification

#### Actions
1. Configure linters
2. Set up formatters
3. Define quality metrics
4. Implement gates
5. Monitor compliance

#### Copy-Paste Prompts
```
Use @lint-and-validate to check code quality
```

```
Use @verification-before-completion to verify changes
```

#### Imported: Related Workflow Bundles

- `development` - Development workflow
- `security-audit` - Security testing
- `cloud-devops` - CI/CD integration
- `ai-ml` - AI testing

#### Imported: Overview

Comprehensive testing and quality assurance workflow covering unit tests, integration tests, E2E tests, browser automation, and quality gates for production-ready software.

#### Imported: Testing Pyramid

```
        /       /  \    E2E Tests (10%)
      /----     /      \  Integration Tests (20%)
    /--------   /          \ Unit Tests (70%)
  /------------```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @testing-qa to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @testing-qa against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @testing-qa for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @testing-qa using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/testing-qa`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@supply-chain-risk-auditor` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sveltekit` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swift-concurrency-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swiftui-expert-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quality Gates Checklist

- [ ] Unit test coverage > 80%
- [ ] All tests passing
- [ ] E2E tests for critical paths
- [ ] Performance benchmarks met
- [ ] Security scan passed
- [ ] Code review approved
- [ ] Linting clean

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

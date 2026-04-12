---
name: testing-qa-v2
description: "Testing/QA Workflow Bundle workflow skill. Use this skill when the user needs Comprehensive testing and QA workflow covering unit testing, integration testing, E2E testing, browser automation, and quality assurance and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["testing-qa-v2", "testing-qa", "comprehensive", "testing", "and", "covering", "unit", "integration"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Testing/QA Workflow Bundle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/testing-qa` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Testing/QA Workflow Bundle

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Testing Pyramid, Quality Gates Checklist.

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
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

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
Use @testing-qa-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/testing-qa-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/testing-qa-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @testing-qa-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/testing-qa`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Quality Gates Checklist

- [ ] Unit test coverage > 80%
- [ ] All tests passing
- [ ] E2E tests for critical paths
- [ ] Performance benchmarks met
- [ ] Security scan passed
- [ ] Code review approved
- [ ] Linting clean

---
name: tdd-workflows-tdd-cycle-v2
description: "tdd-workflows-tdd-cycle workflow skill. Use this skill when the user needs working with tdd workflows tdd cycle and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["tdd-workflows-tdd-cycle-v2", "tdd-workflows-tdd-cycle", "working", "tdd", "workflows", "cycle", "cli-automation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# tdd-workflows-tdd-cycle

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/tdd-workflows-tdd-cycle` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Configuration, Phase 1: Test Specification and Design, Phase 2: RED - Write Failing Tests, Phase 3: GREEN - Make Tests Pass, Phase 4: REFACTOR - Improve Code Quality, Phase 5: Integration and System Tests.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on tdd workflows tdd cycle tasks or workflows
- Needing guidance, best practices, or checklists for tdd workflows tdd cycle
- The task is unrelated to tdd workflows tdd cycle
- You need a different domain or tool outside this scope
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
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

Execute a comprehensive Test-Driven Development (TDD) workflow with strict red-green-refactor discipline:

[Extended thinking: This workflow enforces test-first development through coordinated agent orchestration. Each phase of the TDD cycle is strictly enforced with fail-first verification, incremental implementation, and continuous refactoring. The workflow supports both single test and test suite approaches with configurable coverage thresholds.]

#### Imported: Configuration

### Coverage Thresholds
- Minimum line coverage: 80%
- Minimum branch coverage: 75%
- Critical path coverage: 100%

### Refactoring Triggers
- Cyclomatic complexity > 10
- Method length > 20 lines
- Class length > 200 lines
- Duplicate code blocks > 3 lines

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tdd-workflows-tdd-cycle-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tdd-workflows-tdd-cycle-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tdd-workflows-tdd-cycle-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tdd-workflows-tdd-cycle-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/tdd-workflows-tdd-cycle`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Failure Recovery

If TDD discipline is broken:
1. **STOP** immediately
2. Identify which phase was violated
3. Rollback to last valid state
4. Resume from correct phase
5. Document lesson learned

## Related Skills

- `@tdd-workflow-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-green-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-red-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tdd-workflows-tdd-refactor-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Phase 1: Test Specification and Design

### 1. Requirements Analysis
- Use Task tool with subagent_type="comprehensive-review::architect-review"
- Prompt: "Analyze requirements for: $ARGUMENTS. Define acceptance criteria, identify edge cases, and create test scenarios. Output a comprehensive test specification."
- Output: Test specification, acceptance criteria, edge case matrix
- Validation: Ensure all requirements have corresponding test scenarios

### 2. Test Architecture Design
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Design test architecture for: $ARGUMENTS based on test specification. Define test structure, fixtures, mocks, and test data strategy. Ensure testability and maintainability."
- Output: Test architecture, fixture design, mock strategy
- Validation: Architecture supports isolated, fast, reliable tests

#### Imported: Phase 2: RED - Write Failing Tests

### 3. Write Unit Tests (Failing)
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Write FAILING unit tests for: $ARGUMENTS. Tests must fail initially. Include edge cases, error scenarios, and happy paths. DO NOT implement production code."
- Output: Failing unit tests, test documentation
- **CRITICAL**: Verify all tests fail with expected error messages

### 4. Verify Test Failure
- Use Task tool with subagent_type="tdd-workflows::code-reviewer"
- Prompt: "Verify that all tests for: $ARGUMENTS are failing correctly. Ensure failures are for the right reasons (missing implementation, not test errors). Confirm no false positives."
- Output: Test failure verification report
- **GATE**: Do not proceed until all tests fail appropriately

#### Imported: Phase 3: GREEN - Make Tests Pass

### 5. Minimal Implementation
- Use Task tool with subagent_type="backend-development::backend-architect"
- Prompt: "Implement MINIMAL code to make tests pass for: $ARGUMENTS. Focus only on making tests green. Do not add extra features or optimizations. Keep it simple."
- Output: Minimal working implementation
- Constraint: No code beyond what's needed to pass tests

### 6. Verify Test Success
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Run all tests for: $ARGUMENTS and verify they pass. Check test coverage metrics. Ensure no tests were accidentally broken."
- Output: Test execution report, coverage metrics
- **GATE**: All tests must pass before proceeding

#### Imported: Phase 4: REFACTOR - Improve Code Quality

### 7. Code Refactoring
- Use Task tool with subagent_type="tdd-workflows::code-reviewer"
- Prompt: "Refactor implementation for: $ARGUMENTS while keeping tests green. Apply SOLID principles, remove duplication, improve naming, and optimize performance. Run tests after each refactoring."
- Output: Refactored code, refactoring report
- Constraint: Tests must remain green throughout

### 8. Test Refactoring
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Refactor tests for: $ARGUMENTS. Remove test duplication, improve test names, extract common fixtures, and enhance test readability. Ensure tests still provide same coverage."
- Output: Refactored tests, improved test structure
- Validation: Coverage metrics unchanged or improved

#### Imported: Phase 5: Integration and System Tests

### 9. Write Integration Tests (Failing First)
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Write FAILING integration tests for: $ARGUMENTS. Test component interactions, API contracts, and data flow. Tests must fail initially."
- Output: Failing integration tests
- Validation: Tests fail due to missing integration logic

### 10. Implement Integration
- Use Task tool with subagent_type="backend-development::backend-architect"
- Prompt: "Implement integration code for: $ARGUMENTS to make integration tests pass. Focus on component interaction and data flow."
- Output: Integration implementation
- Validation: All integration tests pass

#### Imported: Phase 6: Continuous Improvement Cycle

### 11. Performance and Edge Case Tests
- Use Task tool with subagent_type="unit-testing::test-automator"
- Prompt: "Add performance tests and additional edge case tests for: $ARGUMENTS. Include stress tests, boundary tests, and error recovery tests."
- Output: Extended test suite
- Metric: Increased test coverage and scenario coverage

### 12. Final Code Review
- Use Task tool with subagent_type="comprehensive-review::architect-review"
- Prompt: "Perform comprehensive review of: $ARGUMENTS. Verify TDD process was followed, check code quality, test quality, and coverage. Suggest improvements."
- Output: Review report, improvement suggestions
- Action: Implement critical suggestions while maintaining green tests

#### Imported: Incremental Development Mode

For test-by-test development:
1. Write ONE failing test
2. Make ONLY that test pass
3. Refactor if needed
4. Repeat for next test

Use this approach by adding `--incremental` flag to focus on one test at a time.

#### Imported: Test Suite Mode

For comprehensive test suite development:
1. Write ALL tests for a feature/module (failing)
2. Implement code to pass ALL tests
3. Refactor entire module
4. Add integration tests

Use this approach by adding `--suite` flag for batch test development.

#### Imported: Validation Checkpoints

### RED Phase Validation
- [ ] All tests written before implementation
- [ ] All tests fail with meaningful error messages
- [ ] Test failures are due to missing implementation
- [ ] No test passes accidentally

### GREEN Phase Validation
- [ ] All tests pass
- [ ] No extra code beyond test requirements
- [ ] Coverage meets minimum thresholds
- [ ] No test was modified to make it pass

### REFACTOR Phase Validation
- [ ] All tests still pass after refactoring
- [ ] Code complexity reduced
- [ ] Duplication eliminated
- [ ] Performance improved or maintained
- [ ] Test readability improved

#### Imported: Coverage Reports

Generate coverage reports after each phase:
- Line coverage
- Branch coverage
- Function coverage
- Statement coverage

#### Imported: TDD Metrics Tracking

Track and report:
- Time in each phase (Red/Green/Refactor)
- Number of test-implementation cycles
- Coverage progression
- Refactoring frequency
- Defect escape rate

#### Imported: Anti-Patterns to Avoid

- Writing implementation before tests
- Writing tests that already pass
- Skipping the refactor phase
- Writing multiple features without tests
- Modifying tests to make them pass
- Ignoring failing tests
- Writing tests after implementation

#### Imported: Success Criteria

- 100% of code written test-first
- All tests pass continuously
- Coverage exceeds thresholds
- Code complexity within limits
- Zero defects in covered code
- Clear test documentation
- Fast test execution (< 5 seconds for unit tests)

#### Imported: Notes

- Enforce strict RED-GREEN-REFACTOR discipline
- Each phase must be completed before moving to next
- Tests are the specification
- If a test is hard to write, the design needs improvement
- Refactoring is NOT optional
- Keep test execution fast
- Tests should be independent and isolated

TDD implementation for: $ARGUMENTS

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

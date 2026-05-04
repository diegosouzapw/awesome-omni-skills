---
name: "e2e-testing"
description: "E2E Testing Workflow workflow skill. Use this skill when the user needs End-to-end testing workflow with Playwright for browser automation, visual regression, cross-browser testing, and CI/CD integration and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "testing-security"
tags:
  - "e2e-testing"
  - "end-to-end"
  - "testing"
  - "playwright"
  - "for"
  - "browser"
  - "automation"
  - "visual"
  - "omni-enhanced"
complexity: "beginner"
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
family_id: "e2e-testing"
family_name: "E2E Testing Workflow"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/e2e-testing"
upstream_skill: "skills/e2e-testing"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "e2e-testing"
---

# E2E Testing Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/e2e-testing` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# E2E Testing Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Setting up E2E testing
- Automating browser tests
- Implementing visual regression
- Testing across browsers
- Integrating tests with CI/CD
- Use when the request clearly matches the imported source intent: End-to-end testing workflow with Playwright for browser automation, visual regression, cross-browser testing, and CI/CD integration.

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

1. playwright-skill - Playwright setup
2. e2e-testing-patterns - E2E patterns
3. Install Playwright
4. Configure test framework
5. Set up test directory
6. Configure browsers
7. Create base test setup

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Test Setup

#### Skills to Invoke
- `playwright-skill` - Playwright setup
- `e2e-testing-patterns` - E2E patterns

#### Actions
1. Install Playwright
2. Configure test framework
3. Set up test directory
4. Configure browsers
5. Create base test setup

#### Copy-Paste Prompts
```
Use @playwright-skill to set up Playwright testing
```

### Phase 2: Test Design

#### Skills to Invoke
- `e2e-testing-patterns` - Test patterns
- `test-automator` - Test automation

#### Actions
1. Identify critical flows
2. Design test scenarios
3. Plan test data
4. Create page objects
5. Set up fixtures

#### Copy-Paste Prompts
```
Use @e2e-testing-patterns to design E2E test strategy
```

### Phase 3: Test Implementation

#### Skills to Invoke
- `playwright-skill` - Playwright tests
- `webapp-testing` - Web app testing

#### Actions
1. Write test scripts
2. Add assertions
3. Implement waits
4. Handle dynamic content
5. Add error handling

#### Copy-Paste Prompts
```
Use @playwright-skill to write E2E test scripts
```

### Phase 4: Browser Automation

#### Skills to Invoke
- `browser-automation` - Browser automation
- `playwright-skill` - Playwright features

#### Actions
1. Configure headless mode
2. Set up screenshots
3. Implement video recording
4. Add trace collection
5. Configure mobile emulation

#### Copy-Paste Prompts
```
Use @browser-automation to automate browser interactions
```

### Phase 5: Visual Regression

#### Skills to Invoke
- `playwright-skill` - Visual testing
- `ui-visual-validator` - Visual validation

#### Actions
1. Set up visual testing
2. Create baseline images
3. Add visual assertions
4. Configure thresholds
5. Review differences

#### Copy-Paste Prompts
```
Use @playwright-skill to implement visual regression testing
```

### Phase 6: Cross-Browser Testing

#### Skills to Invoke
- `playwright-skill` - Multi-browser
- `webapp-testing` - Browser testing

#### Actions
1. Configure Chromium
2. Add Firefox tests
3. Add WebKit tests
4. Test mobile browsers
5. Compare results

#### Copy-Paste Prompts
```
Use @playwright-skill to run cross-browser tests
```

### Phase 7: CI/CD Integration

#### Skills to Invoke
- `github-actions-templates` - GitHub Actions
- `cicd-automation-workflow-automate` - CI/CD

#### Actions
1. Create CI workflow
2. Configure parallel execution
3. Set up artifacts
4. Add reporting
5. Configure notifications

#### Copy-Paste Prompts
```
Use @github-actions-templates to integrate E2E tests with CI
```

#### Imported: Related Workflow Bundles

- `testing-qa` - Testing workflow
- `development` - Development
- `web-performance-optimization` - Performance

#### Imported: Overview

Specialized workflow for end-to-end testing using Playwright including browser automation, visual regression testing, cross-browser testing, and CI/CD integration.

#### Imported: Quality Gates

- [ ] Tests passing
- [ ] Coverage adequate
- [ ] Visual tests stable
- [ ] Cross-browser verified
- [ ] CI integration working

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @e2e-testing to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @e2e-testing against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @e2e-testing for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @e2e-testing using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/e2e-testing`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@devops-deploy` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@devops-troubleshooter` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@differential-review` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@discord-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

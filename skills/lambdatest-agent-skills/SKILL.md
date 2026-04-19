---
name: lambdatest-agent-skills
description: "LambdaTest Agent Skills \u2014 Test Automation Registry (46 Skills) workflow skill. Use this skill when the user needs Production-grade test automation skills for 46 frameworks across E2E, unit, mobile, BDD, visual, and cloud testing in 15+ languages and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["testing", "test-automation", "e2e", "unit-testing", "mobile-testing", "bdd", "selenium", "playwright"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "tanveer-farooq"
date_added: "2026-04-18"
date_updated: "2026-04-19"
---

# LambdaTest Agent Skills — Test Automation Registry (46 Skills)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/lambdatest-agent-skills` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# LambdaTest Agent Skills — Test Automation Registry (46 Skills)

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Skill Registry, Limitations, Security & Safety Notes, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need to write, scaffold, or review test automation code for any major framework
- Use when working with Selenium, Playwright, Cypress, Jest, pytest, Appium, or any of the 46 supported frameworks
- Use when setting up a new test project and need the correct project structure, config files, and dependencies
- Use when integrating tests into a CI/CD pipeline (GitHub Actions, Jenkins, GitLab CI)
- Use when migrating tests between frameworks (e.g. Selenium → Playwright, Puppeteer → Cypress)
- Use when running tests on cloud infrastructure such as LambdaTest / TestMu AI

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

This skill is a curated index of 46 production-grade test automation skills sourced from the [LambdaTest/agent-skills](https://github.com/LambdaTest/agent-skills) repository. It teaches AI coding assistants how to write, structure, and execute test automation code across every major framework and 15+ programming languages. Instead of generating generic test code, the AI becomes a senior QA automation architect that understands correct project structure, dependency versions, cloud execution, CI/CD integration, and common debugging patterns for each framework.

This skill adapts material from an external GitHub repository:
- `source_repo: LambdaTest/agent-skills`
- `source_type: community`

#### Imported: How It Works

### Step 1: Identify the Framework and Language

Determine which testing framework and programming language the user is working with. Match it to one of the 46 supported skills below. Each skill covers a specific framework with language-appropriate code patterns.

### Step 2: Apply the Correct Skill Context

Load the relevant framework skill from the registry below. Each skill includes: project setup and dependencies, core code patterns, page objects or test utilities, cloud execution configuration, CI/CD integration, a debugging table for common problems, and a best practices checklist.

### Step 3: Generate Production-Ready Test Code

Use the loaded skill context to generate test code that follows real-world conventions — not generic boilerplate. Apply correct import paths, configuration formats, assertion libraries, and runner commands specific to the framework and language.

### Step 4: Configure for Local or Cloud Execution

If the user wants to run tests locally, apply local runner configuration. If running on LambdaTest / TestMu AI cloud, configure RemoteWebDriver capabilities or the appropriate cloud SDK, and set `LT_USERNAME` and `LT_ACCESS_KEY` from environment variables — never hardcode credentials.

### Step 5: Add CI/CD Integration

When requested, generate a GitHub Actions (or Jenkins / GitLab CI) workflow that runs the tests in parallel, uploads reports, and captures artifacts on failure.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @lambdatest-agent-skills to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @lambdatest-agent-skills against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @lambdatest-agent-skills for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @lambdatest-agent-skills using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Scaffold a Playwright test in TypeScript

```
"Write Playwright tests for the login page using TypeScript and run them on Chrome and Firefox"
```

The skill will generate: correct `playwright.config.ts`, a typed Page Object for the login page, a test file using `@playwright/test`, and a GitHub Actions workflow with parallel execution.

### Example 2: Run Selenium tests on LambdaTest cloud

```
"Run my Selenium Java tests on Chrome, Firefox, and Safari on LambdaTest with OS Windows 11 and macOS Sonoma"
```

The skill will configure `RemoteWebDriver` with LambdaTest capabilities, read `LT_USERNAME` and `LT_ACCESS_KEY` from environment variables, and set up a parallel TestNG suite.

### Example 3: Migrate Selenium tests to Playwright

```
"Migrate my existing Selenium Python tests to Playwright"
```

The skill uses `test-framework-migration-skill` to map Selenium locators, waits, and assertions to their Playwright equivalents, preserving test intent while updating syntax.

### Example 4: Set up pytest with fixtures

```
"Create a pytest test suite for the payments API with fixtures and parametrized test cases"
```

The skill generates a `conftest.py` with shared fixtures, parametrized test cases using `@pytest.mark.parametrize`, and a `pytest.ini` config with coverage reporting.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Always use environment variables for cloud credentials (LTUSERNAME, LTACCESS_KEY) — never hardcode them
- ✅ Use Page Object Model (POM) to keep test logic separate from UI selectors
- ✅ Prefer explicit waits over fixed sleep() calls in all frameworks
- ✅ Run tests in parallel where the framework supports it to reduce execution time
- ✅ Always capture screenshots and logs on test failure for easier debugging
- ✅ Match dependency versions to what each framework officially recommends — avoid mixing major versions
- ❌ Don't write tests that depend on test execution order

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Always use environment variables for cloud credentials (`LT_USERNAME`, `LT_ACCESS_KEY`) — never hardcode them
- ✅ Use Page Object Model (POM) to keep test logic separate from UI selectors
- ✅ Prefer explicit waits over fixed `sleep()` calls in all frameworks
- ✅ Run tests in parallel where the framework supports it to reduce execution time
- ✅ Always capture screenshots and logs on test failure for easier debugging
- ✅ Match dependency versions to what each framework officially recommends — avoid mixing major versions
- ❌ Don't write tests that depend on test execution order
- ❌ Don't hardcode URLs, credentials, or environment-specific values inside test files
- ❌ Don't skip writing assertions — a test without assertions is not a test
- ❌ Don't ignore flaky tests — investigate and fix root cause rather than adding retries as a permanent fix

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/lambdatest-agent-skills`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@image-studio` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Skill Registry

### 🌐 E2E / Browser Testing (15 skills)

| Skill | Languages | Description |
|---|---|---|
| `selenium-skill` | Java, Python, JS, C#, Ruby | Selenium WebDriver with cross-browser and cloud support |
| `playwright-skill` | JS, TS, Python, Java, C# | Playwright browser automation with API mocking |
| `cypress-skill` | JS, TS | Cypress E2E and component testing |
| `webdriverio-skill` | JS, TS | WebdriverIO with page objects and cloud integration |
| `puppeteer-skill` | JS, TS | Puppeteer Chrome automation |
| `testcafe-skill` | JS, TS | TestCafe cross-browser testing |
| `nightwatchjs-skill` | JS, TS | Nightwatch.js browser automation |
| `capybara-skill` | Ruby | Capybara acceptance testing |
| `geb-skill` | Groovy | Geb Groovy browser automation |
| `selenide-skill` | Java | Selenide fluent Selenium wrapper |
| `nemojs-skill` | JS | Nemo.js PayPal browser automation |
| `protractor-skill` | JS, TS | Protractor Angular E2E testing |
| `codeception-skill` | PHP | Codeception full-stack PHP testing |
| `laravel-dusk-skill` | PHP | Laravel Dusk browser testing |
| `robot-framework-skill` | Python, Robot | Robot Framework keyword-driven testing |

### 🧪 Unit Testing (15 skills)

| Skill | Languages | Description |
|---|---|---|
| `jest-skill` | JS, TS | Jest unit and integration tests with mocking |
| `junit-5-skill` | Java | JUnit 5 with parameterized tests and extensions |
| `pytest-skill` | Python | pytest with fixtures, parametrize, and plugins |
| `testng-skill` | Java | TestNG with data providers and parallel execution |
| `vitest-skill` | JS, TS | Vitest for Vite projects |
| `mocha-skill` | JS, TS | Mocha with Chai assertions |
| `jasmine-skill` | JS, TS | Jasmine BDD-style unit testing |
| `karma-skill` | JS, TS | Karma test runner |
| `xunit-skill` | C# | xUnit.net for .NET |
| `nunit-skill` | C# | NUnit for .NET |
| `mstest-skill` | C# | MSTest for .NET |
| `rspec-skill` | Ruby | RSpec with shared examples |
| `phpunit-skill` | PHP | PHPUnit with data providers |
| `testunit-skill` | Ruby | Test::Unit Ruby testing |
| `unittest-skill` | Python | Python unittest with mocking |

### 📱 Mobile Testing (5 skills)

| Skill | Languages | Description |
|---|---|---|
| `appium-skill` | Java, Python, JS, Ruby, C# | Appium mobile testing for iOS and Android |
| `espresso-skill` | Java, Kotlin | Espresso Android UI testing |
| `xcuitest-skill` | Swift, Obj-C | XCUITest iOS UI testing |
| `flutter-testing-skill` | Dart | Flutter widget and integration tests |
| `detox-skill` | JS, TS | Detox React Native E2E testing |

### 📋 BDD Testing (7 skills)

| Skill | Languages | Description |
|---|---|---|
| `cucumber-skill` | Java, JS, Ruby, TS | Cucumber Gherkin BDD |
| `specflow-skill` | C# | SpecFlow .NET BDD with Gherkin |
| `serenity-bdd-skill` | Java | Serenity BDD with Screenplay pattern |
| `behave-skill` | Python | Behave Python BDD |
| `behat-skill` | PHP | Behat BDD for PHP |
| `gauge-skill` | Java, Python, JS, Ruby, C# | Gauge specification-based testing |
| `lettuce-skill` | Python | Lettuce Python BDD testing |

### 👁️ Visual Testing (1 skill)

| Skill | Languages | Description |
|---|---|---|
| `smartui-skill` | JS, TS, Java | SmartUI visual regression testing |

### ☁️ Cloud Testing (1 skill)

| Skill | Languages | Description |
|---|---|---|
| `hyperexecute-skill` | YAML | HyperExecute cloud test orchestration |

### 🔄 Migration (1 skill)

| Skill | Languages | Description |
|---|---|---|
| `test-framework-migration-skill` | JS, TS, Java, Python, C# | Convert tests between Selenium, Playwright, Puppeteer, Cypress |

### 🔄 DevOps / CI/CD (1 skill)

| Skill | Languages | Description |
|---|---|---|
| `cicd-pipeline-skill` | YAML | CI/CD pipeline integration for GitHub Actions, Jenkins, GitLab CI |

#### Imported: Limitations

- This skill is an index and trigger guide. The full implementation details for each framework live in the individual skill files at [LambdaTest/agent-skills](https://github.com/LambdaTest/agent-skills).
- This skill does not replace framework-specific documentation, environment setup, or expert QA review.
- Cloud execution examples assume a valid LambdaTest / TestMu AI account. Stop and ask the user for their setup details if credentials or target environments are unclear.
- Mobile testing skills (Appium, Espresso, XCUITest, Flutter, Detox) require platform-specific toolchains (Android SDK, Xcode) that must be installed separately.

#### Imported: Security & Safety Notes

- Never include `LT_USERNAME`, `LT_ACCESS_KEY`, API tokens, or any credentials in generated code. Always reference them via environment variables.
- When generating CI/CD pipelines, store secrets in GitHub Actions Secrets or equivalent — never in plaintext YAML.
- Installation commands (`npm install`, `pip install`, `mvn install`) should only be run in local development or authorized CI environments.

#### Imported: Common Pitfalls

- **Problem:** Tests pass locally but fail on CI
  **Solution:** Ensure headless mode is enabled in CI, and that browser versions match between local and CI environments. Use the framework's built-in CI detection where available.

- **Problem:** Flaky tests due to timing issues
  **Solution:** Replace `sleep()` with explicit waits — `waitForSelector` in Playwright, `WebDriverWait` in Selenium, `cy.get().should()` in Cypress.

- **Problem:** Cloud tests fail with authentication errors
  **Solution:** Verify `LT_USERNAME` and `LT_ACCESS_KEY` are correctly set as environment variables and match the credentials on the LambdaTest dashboard.

- **Problem:** Wrong browser capabilities for cloud execution
  **Solution:** Use the LambdaTest Capabilities Generator at https://www.lambdatest.com/capabilities-generator/ to get the correct capability object for your target browser and OS.

- **Problem:** Mobile tests fail with "device not found"
  **Solution:** For local runs, verify the emulator/simulator is running and `adb devices` (Android) or Simulator is active (iOS). For cloud runs, check the device name matches exactly what LambdaTest supports.

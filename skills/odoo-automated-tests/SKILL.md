---
name: odoo-automated-tests
description: "Odoo Automated Tests workflow skill. Use this skill when the user needs Write and run Odoo automated tests using TransactionCase, HttpCase, and browser tour tests. Covers test data setup, mocking, and CI integration and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["odoo-automated-tests", "write", "and", "run", "odoo", "automated", "tests", "using"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Odoo Automated Tests

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/odoo-automated-tests` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Odoo Automated Tests

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Writing unit tests for a custom model's business logic.
- Creating an HTTP test to verify a controller endpoint.
- Debugging test failures in a CI pipeline.
- Setting up automated test execution with --test-enable.
- Use when the request clearly matches the imported source intent: Write and run Odoo automated tests using TransactionCase, HttpCase, and browser tour tests. Covers test data setup, mocking, and CI integration.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Odoo has a built-in testing framework based on Python's `unittest`. This skill helps you write `TransactionCase` unit tests, `HttpCase` integration tests, and JavaScript tour tests. It also covers running tests in CI pipelines.

#### Imported: How It Works

1. **Activate**: Mention `@odoo-automated-tests` and describe the feature to test.
2. **Generate**: Get complete test class code with setup, teardown, and assertions.
3. **Run**: Get the exact `odoo` CLI command to execute your tests.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @odoo-automated-tests to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @odoo-automated-tests against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @odoo-automated-tests for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @odoo-automated-tests using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: TransactionCase Unit Test (Odoo 15+ pattern)

```python
# tests/test_hospital_patient.py
from odoo.tests.common import TransactionCase
from odoo.tests import tagged
from odoo.exceptions import ValidationError

@tagged('post_install', '-at_install')
class TestHospitalPatient(TransactionCase):

    @classmethod
    def setUpClass(cls):
        # Use setUpClass for performance — runs once per class, not per test
        super().setUpClass()
        cls.Patient = cls.env['hospital.patient']
        cls.doctor = cls.env['res.users'].browse(cls.env.uid)

    def test_create_patient(self):
        patient = self.Patient.create({
            'name': 'John Doe',
            'doctor_id': self.doctor.id,
        })
        self.assertEqual(patient.state, 'draft')
        self.assertEqual(patient.name, 'John Doe')

    def test_confirm_patient(self):
        patient = self.Patient.create({'name': 'Jane Smith'})
        patient.action_confirm()
        self.assertEqual(patient.state, 'confirmed')

    def test_empty_name_raises_error(self):
        with self.assertRaises(ValidationError):
            self.Patient.create({'name': ''})

    def test_access_denied_for_other_user(self):
        # Test security rules by running as a different user
        other_user = self.env.ref('base.user_demo')
        with self.assertRaises(Exception):
            self.Patient.with_user(other_user).create({'name': 'Test'})
```

> **`setUpClass` vs `setUp`:** Use `setUpClass` (Odoo 15+) for shared test data. It runs once per class and is significantly faster than `setUp` which re-initializes for every single test method.

### Example 2: Run Tests via CLI

```bash
# Run all tests for a specific module
./odoo-bin --test-enable --stop-after-init -d my_database -u hospital_management

# Run only tests tagged with a specific tag
./odoo-bin --test-enable --stop-after-init -d my_database \
  --test-tags hospital_management

# Run a specific test class
./odoo-bin --test-enable --stop-after-init -d my_database \
  --test-tags /hospital_management:TestHospitalPatient
```

### Example 3: HttpCase for Controller Testing

```python
from odoo.tests.common import HttpCase
from odoo.tests import tagged

@tagged('post_install', '-at_install')
class TestPatientController(HttpCase):

    def test_patient_page_authenticated(self):
        # Authenticate as a user, not with hardcoded password
        self.authenticate(self.env.user.login, self.env.user.login)
        resp = self.url_open('/hospital/patients')
        self.assertEqual(resp.status_code, 200)

    def test_patient_page_redirects_unauthenticated(self):
        # No authenticate() call = public/anonymous user
        resp = self.url_open('/hospital/patients', allow_redirects=False)
        self.assertIn(resp.status_code, [301, 302, 403])
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use setUpClass() with cls.env instead of setUp() — it is dramatically faster for large test suites.
- ✅ Do: Use @tagged('postinstall', '-atinstall') to run tests after all modules are installed.
- ✅ Do: Test both the happy path and error conditions (ValidationError, AccessError, UserError).
- ✅ Do: Use self.with_user(user) to test access control without calling sudo().
- ❌ Don't: Use a production database for tests — always use a dedicated test database.
- ❌ Don't: Rely on test execution order — each TransactionCase test is rolled back in isolation.
- ❌ Don't: Hardcode passwords in HttpCase.authenticate() — use self.env.user.login or a fixture user.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `setUpClass()` with `cls.env` instead of `setUp()` — it is dramatically faster for large test suites.
- ✅ **Do:** Use `@tagged('post_install', '-at_install')` to run tests after all modules are installed.
- ✅ **Do:** Test both the happy path and error conditions (`ValidationError`, `AccessError`, `UserError`).
- ✅ **Do:** Use `self.with_user(user)` to test access control without calling `sudo()`.
- ❌ **Don't:** Use a production database for tests — always use a dedicated test database.
- ❌ **Don't:** Rely on test execution order — each `TransactionCase` test is rolled back in isolation.
- ❌ **Don't:** Hardcode passwords in `HttpCase.authenticate()` — use `self.env.user.login` or a fixture user.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/odoo-automated-tests`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@monte-carlo-monitor-creation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-prevent` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-push-ingestion` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-validation-notebook` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

- **JavaScript tour tests** require a running browser (via `phantomjs` or `Chrome headless`) and a live Odoo server — not covered in depth here.
- `HttpCase` tests are significantly slower than `TransactionCase` — use them only for controller/route verification.
- Does not cover **mocking external services** (e.g., mocking an SMTP server or payment gateway in tests).
- Test isolation is at the **transaction level**, not database level — tests that commit data (e.g., via `cr.commit()`) can leak state between tests.

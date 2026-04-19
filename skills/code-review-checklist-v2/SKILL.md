---
name: code-review-checklist-v2
description: "Code Review Checklist workflow skill. Use this skill when the user needs Comprehensive checklist for conducting thorough code reviews covering functionality, security, performance, and maintainability and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["code-review-checklist-v2", "code-review-checklist", "comprehensive", "checklist", "for", "conducting", "thorough", "reviews"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Code Review Checklist

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/code-review-checklist` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Code Review Checklist

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Functionality Review, Security Review, Code Quality Review, Complete Review Checklist, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when reviewing pull requests
- Use when conducting code audits
- Use when establishing code review standards for a team
- Use when training new developers on code review practices
- Use when you want to ensure nothing is missed in reviews
- Use when creating code review documentation

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

Provide a systematic checklist for conducting thorough code reviews. This skill helps reviewers ensure code quality, catch bugs, identify security issues, and maintain consistency across the codebase.

#### Imported: How It Works

### Step 1: Understand the Context

Before reviewing code, I'll help you understand:
- What problem does this code solve?
- What are the requirements?
- What files were changed and why?
- Are there related issues or tickets?
- What's the testing strategy?

### Step 2: Review Functionality

Check if the code works correctly:
- Does it solve the stated problem?
- Are edge cases handled?
- Is error handling appropriate?
- Are there any logical errors?
- Does it match the requirements?

### Step 3: Review Code Quality

Assess code maintainability:
- Is the code readable and clear?
- Are names descriptive?
- Is it properly structured?
- Are functions/methods focused?
- Is there unnecessary complexity?

### Step 4: Review Security

Check for security issues:
- Are inputs validated?
- Is sensitive data protected?
- Are there SQL injection risks?
- Is authentication/authorization correct?
- Are dependencies secure?

### Step 5: Review Performance

Look for performance issues:
- Are there unnecessary loops?
- Is database access optimized?
- Are there memory leaks?
- Is caching used appropriately?
- Are there N+1 query problems?

### Step 6: Review Tests

Verify test coverage:
- Are there tests for new code?
- Do tests cover edge cases?
- Are tests meaningful?
- Do all tests pass?
- Is test coverage adequate?

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @code-review-checklist-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @code-review-checklist-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @code-review-checklist-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @code-review-checklist-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Functionality Review Checklist

```markdown

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Review Small Changes - Smaller PRs are easier to review thoroughly
- Check Tests First - Verify tests pass and cover new code
- Run the Code - Test it locally when possible
- Ask Questions - Don't assume, ask for clarification
- Be Constructive - Suggest improvements, don't just criticize
- Focus on Important Issues - Don't nitpick minor style issues
- Use Automated Tools - Linters, formatters, security scanners

### Imported Operating Notes

#### Imported: Best Practices

### ✅ Do This

- **Review Small Changes** - Smaller PRs are easier to review thoroughly
- **Check Tests First** - Verify tests pass and cover new code
- **Run the Code** - Test it locally when possible
- **Ask Questions** - Don't assume, ask for clarification
- **Be Constructive** - Suggest improvements, don't just criticize
- **Focus on Important Issues** - Don't nitpick minor style issues
- **Use Automated Tools** - Linters, formatters, security scanners
- **Review Documentation** - Check if docs are updated
- **Consider Performance** - Think about scale and efficiency
- **Check for Regressions** - Ensure existing functionality still works

### ❌ Don't Do This

- **Don't Approve Without Reading** - Actually review the code
- **Don't Be Vague** - Provide specific feedback with examples
- **Don't Ignore Security** - Security issues are critical
- **Don't Skip Tests** - Untested code will cause problems
- **Don't Be Rude** - Be respectful and professional
- **Don't Rubber Stamp** - Every review should add value
- **Don't Review When Tired** - You'll miss important issues
- **Don't Forget Context** - Understand the bigger picture

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/code-review-checklist`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Additional Resources

- [Google Code Review Guidelines](https://google.github.io/eng-practices/review/)
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Code Review Best Practices](https://github.com/thoughtbot/guides/tree/main/code-review)
- [How to Review Code](https://www.kevinlondon.com/2015/05/05/code-review-best-practices.html)

---

**Pro Tip:** Use a checklist template for every review to ensure consistency and thoroughness. Customize it for your team's specific needs!

#### Imported: Functionality Review

### Requirements
- [ ] Code solves the stated problem
- [ ] All acceptance criteria are met
- [ ] Edge cases are handled
- [ ] Error cases are handled
- [ ] User input is validated

### Logic
- [ ] No logical errors or bugs
- [ ] Conditions are correct (no off-by-one errors)
- [ ] Loops terminate correctly
- [ ] Recursion has proper base cases
- [ ] State management is correct

### Error Handling
- [ ] Errors are caught appropriately
- [ ] Error messages are clear and helpful
- [ ] Errors don't expose sensitive information
- [ ] Failed operations are rolled back
- [ ] Logging is appropriate

### Example Issues to Catch:

**❌ Bad - Missing validation:**
\`\`\`javascript
function createUser(email, password) {
  // No validation!
  return db.users.create({ email, password });
}
\`\`\`

**✅ Good - Proper validation:**
\`\`\`javascript
function createUser(email, password) {
  if (!email || !isValidEmail(email)) {
    throw new Error('Invalid email address');
  }
  if (!password || password.length < 8) {
    throw new Error('Password must be at least 8 characters');
  }
  return db.users.create({ email, password });
}
\`\`\`
```

### Example 2: Security Review Checklist

```markdown

#### Imported: Security Review

### Input Validation
- [ ] All user inputs are validated
- [ ] SQL injection is prevented (use parameterized queries)
- [ ] XSS is prevented (escape output)
- [ ] CSRF protection is in place
- [ ] File uploads are validated (type, size, content)

### Authentication & Authorization
- [ ] Authentication is required where needed
- [ ] Authorization checks are present
- [ ] Passwords are hashed (never stored plain text)
- [ ] Sessions are managed securely
- [ ] Tokens expire appropriately

### Data Protection
- [ ] Sensitive data is encrypted
- [ ] API keys are not hardcoded
- [ ] Environment variables are used for secrets
- [ ] Personal data follows privacy regulations
- [ ] Database credentials are secure

### Dependencies
- [ ] No known vulnerable dependencies
- [ ] Dependencies are up to date
- [ ] Unnecessary dependencies are removed
- [ ] Dependency versions are pinned

### Example Issues to Catch:

**❌ Bad - SQL injection risk:**
\`\`\`javascript
const query = \`SELECT * FROM users WHERE email = '\${email}'\`;
db.query(query);
\`\`\`

**✅ Good - Parameterized query:**
\`\`\`javascript
const query = 'SELECT * FROM users WHERE email = $1';
db.query(query, [email]);
\`\`\`

**❌ Bad - Hardcoded secret:**
\`\`\`javascript
const API_KEY = 'sk_live_abc123xyz';
\`\`\`

**✅ Good - Environment variable:**
\`\`\`javascript
const API_KEY = process.env.API_KEY;
if (!API_KEY) {
  throw new Error('API_KEY environment variable is required');
}
\`\`\`
```

### Example 3: Code Quality Review Checklist

```markdown

#### Imported: Code Quality Review

### Readability
- [ ] Code is easy to understand
- [ ] Variable names are descriptive
- [ ] Function names explain what they do
- [ ] Complex logic has comments
- [ ] Magic numbers are replaced with constants

### Structure
- [ ] Functions are small and focused
- [ ] Code follows DRY principle (Don't Repeat Yourself)
- [ ] Proper separation of concerns
- [ ] Consistent code style
- [ ] No dead code or commented-out code

### Maintainability
- [ ] Code is modular and reusable
- [ ] Dependencies are minimal
- [ ] Changes are backwards compatible
- [ ] Breaking changes are documented
- [ ] Technical debt is noted

### Example Issues to Catch:

**❌ Bad - Unclear naming:**
\`\`\`javascript
function calc(a, b, c) {
  return a * b + c;
}
\`\`\`

**✅ Good - Descriptive naming:**
\`\`\`javascript
function calculateTotalPrice(quantity, unitPrice, tax) {
  return quantity * unitPrice + tax;
}
\`\`\`

**❌ Bad - Function doing too much:**
\`\`\`javascript
function processOrder(order) {
  // Validate order
  if (!order.items) throw new Error('No items');
  
  // Calculate total
  let total = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  
  // Apply discount
  if (order.coupon) {
    total *= 0.9;
  }
  
  // Process payment
  const payment = stripe.charge(total);
  
  // Send email
  sendEmail(order.email, 'Order confirmed');
  
  // Update inventory
  updateInventory(order.items);
  
  return { orderId: order.id, total };
}
\`\`\`

**✅ Good - Separated concerns:**
\`\`\`javascript
function processOrder(order) {
  validateOrder(order);
  const total = calculateOrderTotal(order);
  const payment = processPayment(total);
  sendOrderConfirmation(order.email);
  updateInventory(order.items);
  
  return { orderId: order.id, total };
}
\`\`\`
```

#### Imported: Complete Review Checklist

### Pre-Review
- [ ] Read the PR description and linked issues
- [ ] Understand what problem is being solved
- [ ] Check if tests pass in CI/CD
- [ ] Pull the branch and run it locally

### Functionality
- [ ] Code solves the stated problem
- [ ] Edge cases are handled
- [ ] Error handling is appropriate
- [ ] User input is validated
- [ ] No logical errors

### Security
- [ ] No SQL injection vulnerabilities
- [ ] No XSS vulnerabilities
- [ ] Authentication/authorization is correct
- [ ] Sensitive data is protected
- [ ] No hardcoded secrets

### Performance
- [ ] No unnecessary database queries
- [ ] No N+1 query problems
- [ ] Efficient algorithms used
- [ ] No memory leaks
- [ ] Caching used appropriately

### Code Quality
- [ ] Code is readable and clear
- [ ] Names are descriptive
- [ ] Functions are focused and small
- [ ] No code duplication
- [ ] Follows project conventions

### Tests
- [ ] New code has tests
- [ ] Tests cover edge cases
- [ ] Tests are meaningful
- [ ] All tests pass
- [ ] Test coverage is adequate

### Documentation
- [ ] Code comments explain why, not what
- [ ] API documentation is updated
- [ ] README is updated if needed
- [ ] Breaking changes are documented
- [ ] Migration guide provided if needed

### Git
- [ ] Commit messages are clear
- [ ] No merge conflicts
- [ ] Branch is up to date with main
- [ ] No unnecessary files committed
- [ ] .gitignore is properly configured

#### Imported: Common Pitfalls

### Problem: Missing Edge Cases
**Symptoms:** Code works for happy path but fails on edge cases
**Solution:** Ask "What if...?" questions
- What if the input is null?
- What if the array is empty?
- What if the user is not authenticated?
- What if the network request fails?

### Problem: Security Vulnerabilities
**Symptoms:** Code exposes security risks
**Solution:** Use security checklist
- Run security scanners (npm audit, Snyk)
- Check OWASP Top 10
- Validate all inputs
- Use parameterized queries
- Never trust user input

### Problem: Poor Test Coverage
**Symptoms:** New code has no tests or inadequate tests
**Solution:** Require tests for all new code
- Unit tests for functions
- Integration tests for features
- Edge case tests
- Error case tests

### Problem: Unclear Code
**Symptoms:** Reviewer can't understand what code does
**Solution:** Request improvements
- Better variable names
- Explanatory comments
- Smaller functions
- Clear structure

#### Imported: Review Comment Templates

### Requesting Changes
```markdown
**Issue:** [Describe the problem]

**Current code:**
\`\`\`javascript
// Show problematic code
\`\`\`

**Suggested fix:**
\`\`\`javascript
// Show improved code
\`\`\`

**Why:** [Explain why this is better]
```

### Asking Questions
```markdown
**Question:** [Your question]

**Context:** [Why you're asking]

**Suggestion:** [If you have one]
```

### Praising Good Code
```markdown
**Nice!** [What you liked]

This is great because [explain why]
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

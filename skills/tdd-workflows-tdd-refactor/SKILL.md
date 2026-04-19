---
name: tdd-workflows-tdd-refactor
description: "tdd-workflows-tdd-refactor workflow skill. Use this skill when the user needs working with tdd workflows tdd refactor and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["tdd-workflows-tdd-refactor", "working", "tdd", "workflows", "refactor", "development"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# tdd-workflows-tdd-refactor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/tdd-workflows-tdd-refactor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Requirements, Safety Checklist, Recovery Protocol, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on tdd workflows tdd refactor tasks or workflows
- Needing guidance, best practices, or checklists for tdd workflows tdd refactor
- The task is unrelated to tdd workflows tdd refactor
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
5. Run tests to establish green baseline
6. Analyze code smells and test coverage
7. Document current performance metrics

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

Refactor code with confidence using comprehensive test safety net:

[Extended thinking: This tool uses the tdd-orchestrator agent (opus model) for sophisticated refactoring while maintaining all tests green. It applies design patterns, improves code quality, and optimizes performance with the safety of comprehensive test coverage.]

#### Imported: Core Process

**1. Pre-Assessment**
- Run tests to establish green baseline
- Analyze code smells and test coverage
- Document current performance metrics
- Create incremental refactoring plan

**2. Code Smell Detection**
- Duplicated code → Extract methods/classes
- Long methods → Decompose into focused functions
- Large classes → Split responsibilities
- Long parameter lists → Parameter objects
- Feature Envy → Move methods to appropriate classes
- Primitive Obsession → Value objects
- Switch statements → Polymorphism
- Dead code → Remove

**3. Design Patterns**
- Apply Creational (Factory, Builder, Singleton)
- Apply Structural (Adapter, Facade, Decorator)
- Apply Behavioral (Strategy, Observer, Command)
- Apply Domain (Repository, Service, Value Objects)
- Use patterns only where they add clear value

**4. SOLID Principles**
- Single Responsibility: One reason to change
- Open/Closed: Open for extension, closed for modification
- Liskov Substitution: Subtypes substitutable
- Interface Segregation: Small, focused interfaces
- Dependency Inversion: Depend on abstractions

**5. Refactoring Techniques**
- Extract Method/Variable/Interface
- Inline unnecessary indirection
- Rename for clarity
- Move Method/Field to appropriate classes
- Replace Magic Numbers with constants
- Encapsulate fields
- Replace Conditional with Polymorphism
- Introduce Null Object

**6. Performance Optimization**
- Profile to identify bottlenecks
- Optimize algorithms and data structures
- Implement caching where beneficial
- Reduce database queries (N+1 elimination)
- Lazy loading and pagination
- Always measure before and after

**7. Incremental Steps**
- Make small, atomic changes
- Run tests after each modification
- Commit after each successful refactoring
- Keep refactoring separate from behavior changes
- Use scaffolding when needed

**8. Architecture Evolution**
- Layer separation and dependency management
- Module boundaries and interface definition
- Event-driven patterns for decoupling
- Database access pattern optimization

**9. Safety Verification**
- Run full test suite after each change
- Performance regression testing
- Mutation testing for test effectiveness
- Rollback plan for major changes

**10. Advanced Patterns**
- Strangler Fig: Gradual legacy replacement
- Branch by Abstraction: Large-scale changes
- Parallel Change: Expand-contract pattern
- Mikado Method: Dependency graph navigation

#### Imported: Output Requirements

- Refactored code with improvements applied
- Test results (all green)
- Before/after metrics comparison
- Applied refactoring techniques list
- Performance improvement measurements
- Remaining technical debt assessment

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @tdd-workflows-tdd-refactor to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @tdd-workflows-tdd-refactor against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @tdd-workflows-tdd-refactor for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @tdd-workflows-tdd-refactor using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Usage

Use Task tool with subagent_type="tdd-orchestrator" to perform safe refactoring.

Prompt: "Refactor this code while keeping all tests green: $ARGUMENTS. Apply TDD refactor phase:

#### Imported: Example: Extract Method Pattern

**Before:**
```typescript
class OrderProcessor {
  processOrder(order: Order): ProcessResult {
    // Validation
    if (!order.customerId || order.items.length === 0) {
      return { success: false, error: "Invalid order" };
    }

    // Calculate totals
    let subtotal = 0;
    for (const item of order.items) {
      subtotal += item.price * item.quantity;
    }
    let total = subtotal + (subtotal * 0.08) + (subtotal > 100 ? 0 : 15);

    // Process payment...
    // Update inventory...
    // Send confirmation...
  }
}
```

**After:**
```typescript
class OrderProcessor {
  async processOrder(order: Order): Promise<ProcessResult> {
    const validation = this.validateOrder(order);
    if (!validation.isValid) return ProcessResult.failure(validation.error);

    const orderTotal = OrderTotal.calculate(order);
    const inventoryCheck = await this.inventoryService.checkAvailability(order.items);
    if (!inventoryCheck.available) return ProcessResult.failure(inventoryCheck.reason);

    await this.paymentService.processPayment(order.paymentMethod, orderTotal.total);
    await this.inventoryService.reserveItems(order.items);
    await this.notificationService.sendOrderConfirmation(order, orderTotal);

    return ProcessResult.success(order.id, orderTotal.total);
  }

  private validateOrder(order: Order): ValidationResult {
    if (!order.customerId) return ValidationResult.invalid("Customer ID required");
    if (order.items.length === 0) return ValidationResult.invalid("Order must contain items");
    return ValidationResult.valid();
  }
}
```

**Applied:** Extract Method, Value Objects, Dependency Injection, Async patterns

Code to refactor: $ARGUMENTS"

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/tdd-workflows-tdd-refactor`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Safety Checklist

Before committing:
- ✓ All tests pass (100% green)
- ✓ No functionality regression
- ✓ Performance metrics acceptable
- ✓ Code coverage maintained/improved
- ✓ Documentation updated

#### Imported: Recovery Protocol

If tests fail:
- Immediately revert last change
- Identify breaking refactoring
- Apply smaller incremental changes
- Use version control for safe experimentation

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

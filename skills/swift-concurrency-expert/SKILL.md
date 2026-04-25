---
name: swift-concurrency-expert
description: "Swift Concurrency Expert workflow skill. Use this skill when the user needs Review and fix Swift concurrency issues such as actor isolation and Sendable violations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["swift-concurrency-expert", "review", "and", "fix", "swift", "concurrency", "issues", "such"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Swift Concurrency Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/swift-concurrency-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Swift Concurrency Expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks to review Swift concurrency usage or fix compiler diagnostics.
- When you need guidance on actor isolation, Sendable, @MainActor, or async migration.
- Use when the request clearly matches the imported source intent: Review and fix Swift concurrency issues such as actor isolation and Sendable violations.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/approachable-concurrency.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/swift-6-2-concurrency.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Capture the exact compiler diagnostics and the offending symbol(s).
2. Check project concurrency settings: Swift language version (6.2+), strict concurrency level, and whether approachable concurrency (default actor isolation / main-actor-by-default) is enabled.
3. Identify the current actor context (@MainActor, actor, nonisolated) and whether a default actor isolation mode is enabled.
4. Confirm whether the code is UI-bound or intended to run off the main actor.
5. UI-bound types: annotate the type or relevant members with @MainActor.
6. Protocol conformance on main actor types: make the conformance isolated (e.g., extension Foo: @MainActor SomeProtocol).
7. Global/static state: protect with @MainActor or move into an actor.

### Imported Workflow Notes

#### Imported: Workflow

### 1. Triage the issue

- Capture the exact compiler diagnostics and the offending symbol(s).
- Check project concurrency settings: Swift language version (6.2+), strict concurrency level, and whether approachable concurrency (default actor isolation / main-actor-by-default) is enabled.
- Identify the current actor context (`@MainActor`, `actor`, `nonisolated`) and whether a default actor isolation mode is enabled.
- Confirm whether the code is UI-bound or intended to run off the main actor.

### 2. Apply the smallest safe fix

Prefer edits that preserve existing behavior while satisfying data-race safety.

Common fixes:
- **UI-bound types**: annotate the type or relevant members with `@MainActor`.
- **Protocol conformance on main actor types**: make the conformance isolated (e.g., `extension Foo: @MainActor SomeProtocol`).
- **Global/static state**: protect with `@MainActor` or move into an actor.
- **Background work**: move expensive work into a `@concurrent` async function on a `nonisolated` type or use an `actor` to guard mutable state.
- **Sendable errors**: prefer immutable/value types; add `Sendable` conformance only when correct; avoid `@unchecked Sendable` unless you can prove thread safety.

### 3. Verify the fix

- Rebuild and confirm all concurrency diagnostics are resolved with no new warnings introduced.
- Run the test suite to check for regressions — concurrency changes can introduce subtle runtime issues even when the build is clean.
- If the fix surfaces new warnings, treat each one as a fresh triage (return to step 1) and resolve iteratively until the build is clean and tests pass.

### Examples

**UI-bound type — adding `@MainActor`**

```swift
// Before: data-race warning because ViewModel is accessed from the main thread
// but has no actor isolation
class ViewModel: ObservableObject {
    @Published var title: String = ""
    func load() { title = "Loaded" }
}

// After: annotate the whole type so all stored state and methods are
// automatically isolated to the main actor
@MainActor
class ViewModel: ObservableObject {
    @Published var title: String = ""
    func load() { title = "Loaded" }
}
```

**Protocol conformance isolation**

```swift
// Before: compiler error — SomeProtocol method is nonisolated but the
// conforming type is @MainActor
@MainActor
class Foo: SomeProtocol {
    func protocolMethod() { /* accesses main-actor state */ }
}

// After: scope the conformance to @MainActor so the requirement is
// satisfied inside the correct isolation context
@MainActor
extension Foo: SomeProtocol {
    func protocolMethod() { /* safely accesses main-actor state */ }
}
```

**Background work with `@concurrent`**

```swift
// Before: expensive computation blocks the main actor
@MainActor
func processData(_ input: [Int]) -> [Int] {
    input.map { heavyTransform($0) }   // runs on main thread
}

// After: hop off the main actor for the heavy work, then return the result
// The caller awaits the result and stays on its own actor
nonisolated func processData(_ input: [Int]) async -> [Int] {
    await Task.detached(priority: .userInitiated) {
        input.map { heavyTransform($0) }
    }.value
}

// Or, using a @concurrent async function (Swift 6.2+):
@concurrent
func processData(_ input: [Int]) async -> [Int] {
    input.map { heavyTransform($0) }
}
```

#### Imported: Overview

Review and fix Swift Concurrency issues in Swift 6.2+ codebases by applying actor isolation, Sendable safety, and modern concurrency patterns with minimal behavior changes.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @swift-concurrency-expert to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @swift-concurrency-expert against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @swift-concurrency-expert for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @swift-concurrency-expert using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/swift-concurrency-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@steve-jobs` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stitch-design-taste` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stitch-loop` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@stitch-ui-design` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/approachable-concurrency.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/openai.yaml` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [approachable-concurrency.md](references/approachable-concurrency.md)
- [swift-6-2-concurrency.md](references/swift-6-2-concurrency.md)
- [swiftui-concurrency-tour-wwdc.md](references/swiftui-concurrency-tour-wwdc.md)
- [openai.yaml](agents/openai.yaml)
- [openai.yaml](agents/openai.yaml)
- [approachable-concurrency.md](references/approachable-concurrency.md)

### Imported Reference Notes

#### Imported: Reference material

- See `references/swift-6-2-concurrency.md` for Swift 6.2 changes, patterns, and examples.
- See `references/approachable-concurrency.md` when the project is opted into approachable concurrency mode.
- See `references/swiftui-concurrency-tour-wwdc.md` for SwiftUI-specific concurrency guidance.

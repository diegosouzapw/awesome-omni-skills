---
name: makepad-dsl
description: "Makepad DSL Skill workflow skill. Use this skill when the user needs | and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["makepad-dsl", "design"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Makepad DSL Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/makepad-dsl` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Makepad DSL Skill > Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets You are an expert at the Rust makepad-widgets crate DSL. Help users by: - Writing code: Generate DSL code following the patterns below - Answering questions: Explain DSL syntax, inheritance, property overriding

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation, IMPORTANT: Documentation Completeness Check, Key Patterns, Property Types, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need help with Makepad live_design! syntax, object definitions, or inheritance patterns.
- The task involves widget declarations, property overrides, prototypes, or DSL composition rules.
- You want Makepad DSL-specific examples rather than generic Rust syntax advice.
- Use <Widget> syntax to inherit from built-in widgets
- Define reusable styles as named prototypes
- Use {{RustType}} to link DSL to Rust structs

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Documentation

Refer to the local files for detailed documentation:
- `./references/dsl-syntax.md` - Complete DSL syntax reference
- `./references/inheritance.md` - Inheritance patterns and examples

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-dsl to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @makepad-dsl against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @makepad-dsl for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @makepad-dsl using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Eager Copy: All parent properties are copied immediately
- Override: Child can override any parent property
- Extend: Child can add new properties
- Nested Override: Override nested objects partially
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Inheritance Rules

1. **Eager Copy**: All parent properties are copied immediately
2. **Override**: Child can override any parent property
3. **Extend**: Child can add new properties
4. **Nested Override**: Override nested objects partially

```rust
Parent = {
    a: 1
    nested: { x: 10, y: 20 }
}

Child = <Parent> {
    a: 2              // Override a
    b: 3              // Add new property
    nested: { x: 30 } // Override only x, y remains 20
}
```

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/makepad-dsl`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@lightning-channel-factories` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@lightning-factory-explainer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@linear-claude-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: DSL Syntax Reference

| Syntax | Description | Example |
|--------|-------------|---------|
| `{ ... }` | Anonymous object | `{ width: 100.0 }` |
| `Name = { ... }` | Named prototype | `MyStyle = { color: #FFF }` |
| `<Name> { ... }` | Inherit from prototype | `<MyStyle> { size: 10.0 }` |
| `{{RustType}}` | Link to Rust struct | `App = {{App}} { ... }` |
| `name = <Widget>` | Named child widget | `btn = <Button> { }` |
| `dep("...")` | Resource dependency | `dep("crate://self/img.png")` |

#### Imported: IMPORTANT: Documentation Completeness Check

**Before answering questions, Claude MUST:**

1. Read the relevant reference file(s) listed above
2. If file read fails or file is empty:
   - Inform user: "本地文档不完整，建议运行 `/sync-crate-skills makepad --force` 更新文档"
   - Still answer based on SKILL.md patterns + built-in knowledge
3. If reference file exists, incorporate its content into the answer

#### Imported: Key Patterns

### 1. Anonymous Object

```rust
{
    width: 100.0
    height: 50.0
    color: #FF0000
}
```

### 2. Named Object (Prototype)

```rust
MyButton = {
    width: Fit
    height: 40.0
    padding: 10.0
    draw_bg: { color: #333333 }
}
```

### 3. Inheritance with Override

```rust
PrimaryButton = <MyButton> {
    draw_bg: { color: #0066CC }  // Override parent color
    draw_text: { color: #FFFFFF }  // Add new property
}
```

### 4. Widget Instantiation

```rust
<View> {
    // Inherits from View prototype
    width: Fill
    height: Fill

    <Button> { text: "Click Me" }  // Child widget
    <Label> { text: "Hello" }      // Another child
}
```

### 5. Linking Rust Struct to DSL

```rust
// In live_design!
MyWidget = {{MyWidget}} {
    // DSL properties
    width: 100.0
}

// In Rust
#[derive(Live, LiveHook, Widget)]
pub struct MyWidget {
    #[deref] view: View,
    #[live] width: f64,
}
```

#### Imported: Property Types

| Type | Example | Description |
|------|---------|-------------|
| Number | `width: 100.0` | Float value |
| Color | `color: #FF0000FF` | RGBA hex color |
| String | `text: "Hello"` | Text string |
| Enum | `flow: Down` | Enum variant |
| Size | `width: Fit` | Fit, Fill, or numeric |
| Object | `padding: { top: 10.0 }` | Nested object |
| Array | `labels: ["A", "B"]` | List of values |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

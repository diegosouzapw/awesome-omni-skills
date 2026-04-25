---
name: makepad-splash
description: "Makepad Splash Skill workflow skill. Use this skill when the user needs | and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["makepad-splash", "cli-automation"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# Makepad Splash Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/makepad-splash` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Makepad Splash Skill > Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets You are an expert at Makepad Splash scripting language. Help users by: - Writing Splash scripts: Dynamic UI and workflow automation - Understanding Splash: Purpose, syntax, and capabilities

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation, IMPORTANT: Documentation Completeness Check, What is Splash?, Script Macro, Execution, Basic Syntax.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need dynamic scripting inside Makepad using Splash.
- The task involves script!, cx.eval, runtime-generated UI, or workflow automation in Makepad.
- You want guidance on Splash syntax and purpose rather than static Rust-only patterns.
- Splash is for dynamic/runtime scripting, not core app logic
- Use Rust for performance-critical code, Splash for flexibility
- Splash syntax is similar to JavaScript/Rust hybrid

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

1. Splash is designed for AI-assisted development: splash // Dynamic UI generation fn createform(fields) { let form = ui.create("View"); for field in fields { let input = ui.create("TextInput"); input.setlabel(field.label); form.addchild(input); } return form; } // AI can generate this dynamically createform([ { label: "Name" }, { label: "Email" }, { label: "Message" } ]);
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: AI Workflow Integration

Splash is designed for AI-assisted development:

```splash
// Dynamic UI generation
fn create_form(fields) {
    let form = ui.create("View");
    for field in fields {
        let input = ui.create("TextInput");
        input.set_label(field.label);
        form.add_child(input);
    }
    return form;
}

// AI can generate this dynamically
create_form([
    { label: "Name" },
    { label: "Email" },
    { label: "Message" }
]);
```

#### Imported: Documentation

Refer to the local files for detailed documentation:
- `./references/splash-tutorial.md` - Splash language tutorial

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-splash to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @makepad-splash against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @makepad-splash for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @makepad-splash using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/makepad-splash`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: IMPORTANT: Documentation Completeness Check

**Before answering questions, Claude MUST:**

1. Read the relevant reference file(s) listed above
2. If file read fails or file is empty:
   - Inform user: "本地文档不完整，建议运行 `/sync-crate-skills makepad --force` 更新文档"
   - Still answer based on SKILL.md patterns + built-in knowledge
3. If reference file exists, incorporate its content into the answer

#### Imported: What is Splash?

Splash is Makepad's dynamic scripting language designed for:
- AI-assisted workflows
- Dynamic UI generation
- Rapid prototyping
- HTTP requests and async operations

#### Imported: Script Macro

```rust
// Embed Splash code in Rust
script!{
    fn main() {
        let x = 10;
        console.log("Hello from Splash!");
    }
}
```

#### Imported: Execution

```rust
// Evaluate Splash code at runtime
cx.eval(code_string);

// With context
cx.eval_with_context(code, context);
```

#### Imported: Basic Syntax

### Variables

```splash
let x = 10;
let name = "Makepad";
let items = [1, 2, 3];
let config = { width: 100, height: 50 };
```

### Functions

```splash
fn add(a, b) {
    return a + b;
}

fn greet(name) {
    console.log("Hello, " + name);
}
```

### Control Flow

```splash
// If-else
if x > 10 {
    console.log("big");
} else {
    console.log("small");
}

// Loops
for i in 0..10 {
    console.log(i);
}

while condition {
    // ...
}
```

#### Imported: Built-in Objects

### console

```splash
console.log("Message");
console.warn("Warning");
console.error("Error");
```

### http

```splash
// GET request
let response = http.get("https://api.example.com/data");

// POST request
let response = http.post("https://api.example.com/data", {
    body: { key: "value" }
});
```

### timer

```splash
// Set timeout
timer.set(1000, fn() {
    console.log("1 second passed");
});

// Set interval
let id = timer.interval(500, fn() {
    console.log("tick");
});

// Clear timer
timer.clear(id);
```

#### Imported: Widget Interaction

```splash
// Access widgets
let button = ui.widget("my_button");
button.set_text("Click Me");
button.set_visible(true);

// Listen to events
button.on_click(fn() {
    console.log("Button clicked!");
});
```

#### Imported: Async Operations

```splash
// Async function
async fn fetch_data() {
    let response = await http.get("https://api.example.com");
    return response.json();
}

// Call async
fetch_data().then(fn(data) {
    console.log(data);
});
```

#### Imported: Use Cases

1. **Rapid Prototyping**: Quickly test UI layouts without recompilation
2. **AI Agents**: Let AI generate and modify UI dynamically
3. **Configuration**: Runtime configuration of app behavior
4. **Scripted Workflows**: Automate repetitive tasks
5. **Plugin System**: Extend app functionality with scripts

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: evolution-v2
description: "Makepad Skills Evolution workflow skill. Use this skill when the user needs This skill enables makepad-skills to self-improve continuously during development and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["evolution-v2", "evolution", "enables", "makepad-skills", "self-improve", "continuously", "during", "development"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Makepad Skills Evolution

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/evolution` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

<!-- security-allowlist: curl-pipe-bash --> # Makepad Skills Evolution This skill enables makepad-skills to self-improve continuously during development.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Quick Navigation, Skill Routing and Bundling, Pattern N: [Pattern Name], Self-Correction, Self-Validation, Validation Report.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You are maintaining makepad-skills and want the skill library to improve itself during development.
- You need the workflow for deciding when a new pattern should become a skill update or hook-driven evolution.
- You are working on self-correction, self-validation, or version adaptation for the skill set.
- Hook - Trigger Event - Action
- makepad-skill-router.sh - UserPromptSubmit - Auto-route to relevant skills
- pre-tool.sh - Before Bash/Write/Edit - Detect Makepad version from Cargo.toml

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

1. Is this a reusable pattern? (not project-specific)
2. Did it take significant effort to figure out?
3. Would it help other Makepad developers?
4. Is it not already documented in makepad-skills?
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Evolution Process

### Step 1: Identify Knowledge Worth Capturing

Ask yourself:
- Is this a reusable pattern? (not project-specific)
- Did it take significant effort to figure out?
- Would it help other Makepad developers?
- Is it not already documented in makepad-skills?

### Step 2: Classify the Knowledge

```
Widget/Component Pattern     → robius-widget-patterns/_base/
Shader/Visual Effect         → makepad-shaders/
Error/Debug Solution         → makepad-reference/troubleshooting.md
Layout/Responsive Design     → makepad-reference/adaptive-layout.md
Build/Deploy Issue           → makepad-deployment/SKILL.md
Project Structure            → makepad-basics/
Core Concept/API             → makepad-dsl/ or makepad-widgets/
```

### Step 3: Format the Contribution

**For Patterns**:
```markdown

#### Imported: Quick Navigation

| Topic | Description |
|-------|-------------|
| Collaboration Guidelines | **Contributing to makepad-skills** |
| [Hooks Setup](#hooks-based-auto-triggering) | Auto-trigger evolution with hooks |
| [When to Evolve](#when-to-evolve) | Triggers and classification |
| [Evolution Process](#evolution-process) | Step-by-step guide |
| [Self-Correction](#self-correction) | Auto-fix skill errors |
| [Self-Validation](#self-validation) | Verify skill accuracy |
| [Version Adaptation](#version-adaptation) | Multi-branch support |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @evolution-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @evolution-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @evolution-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @evolution-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Generic, reusable patterns
- Common errors with clear solutions
- Well-tested shader effects
- Platform-specific gotchas
- Performance optimizations
- Project-specific code
- Unverified solutions

### Imported Operating Notes

#### Imported: Quality Guidelines

### DO Add
- Generic, reusable patterns
- Common errors with clear solutions
- Well-tested shader effects
- Platform-specific gotchas
- Performance optimizations

### DON'T Add
- Project-specific code
- Unverified solutions
- Duplicate content
- Incomplete examples
- Personal preferences without rationale

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/evolution`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: References

- [makepad-skills repository](https://github.com/ZhangHanDong/makepad-skills)
- [Makepad documentation](https://github.com/makepad/makepad)
- [Project Robius](https://github.com/project-robius)

#### Imported: Skill Routing and Bundling

The `makepad-skill-router.sh` hook automatically loads relevant skills based on user queries.

### Context Detection

| Context | Trigger Keywords | Skills Loaded |
|---------|------------------|---------------|
| **Full App** | "build app", "从零", "完整应用" | basics, dsl, layout, widgets, event-action, app-architecture |
| **UI Design** | "ui design", "界面设计" | dsl, layout, widgets, animation, shaders |
| **Widget Creation** | "create widget", "创建组件", "自定义组件" | widgets, dsl, layout, animation, shaders, font, event-action |
| **Production** | "best practice", "robrix pattern", "实际项目" | app-architecture, widget-patterns, state-management, event-action |

### Skill Dependencies

When loading certain skills, related skills are auto-loaded:

| Primary Skill | Auto-loads |
|---------------|------------|
| robius-app-architecture | makepad-basics, makepad-event-action |
| robius-widget-patterns | makepad-widgets, makepad-layout |
| makepad-widgets | makepad-layout, makepad-dsl |
| makepad-animation | makepad-shaders |
| makepad-shaders | makepad-widgets |
| makepad-font | makepad-widgets |
| robius-event-action | makepad-event-action |

### Example

```
User: "我想从零开发一个 Makepad 应用"

[makepad-skills] Detected Makepad/Robius query
[makepad-skills] App development context detected - loading skill bundle
[makepad-skills] Routing to: makepad-basics makepad-dsl makepad-event-action
                            makepad-layout makepad-widgets robius-app-architecture
```

---

#### Imported: Pattern N: [Pattern Name]

Brief description of what this pattern solves.

### live_design!
```rust
live_design! {
    // DSL code
}
```

### Rust Implementation
```rust
// Rust code
```
```

**For Troubleshooting**:
```markdown
### [Error Type/Message]

**Symptom**: What the developer sees

**Cause**: Why this happens

**Solution**:
```rust
// Fixed code
```
```

### Step 4: Mark Evolution (NOT Version)

Add an evolution marker above new content:

```markdown
<!-- Evolution: 2024-01-15 | source: my-app | author: @zhangsan -->
```

### Step 5: Submit via Git

```bash
# Create branch for your contribution
git checkout -b evolution/add-loading-pattern

# Commit your changes
git add robius-widget-patterns/_base/my-pattern.md
git commit -m "evolution: add loading state pattern from my-app"

# Push and create PR
git push origin evolution/add-loading-pattern
```

---

#### Imported: Self-Correction

When skill content causes errors, automatically correct it.

### Trigger Conditions

```
User follows skill advice → Code fails to compile/run → Claude identifies skill was wrong
                                                      ↓
                                         AUTO: Correct skill immediately
```

### Correction Flow

1. **Detect** - Skill advice led to an error
2. **Verify** - Confirm the skill content is wrong
3. **Correct** - Update the skill file with fix

### Correction Marker Format

```markdown
<!-- Correction: YYYY-MM-DD | was: [old advice] | reason: [why it was wrong] -->
```

---

#### Imported: Self-Validation

Periodically verify skill content is still accurate.

### Validation Checklist

```markdown

#### Imported: Validation Report

### Code Examples
- [ ] All `live_design!` examples parse correctly
- [ ] All Rust code compiles
- [ ] All patterns work as documented

### API Accuracy
- [ ] Widget names exist in makepad-widgets
- [ ] Method signatures are correct
- [ ] Event types are accurate
```

### Validation Prompt

> "Please validate makepad-skills against current Makepad version"

---

#### Imported: Version Adaptation

Provide version-specific guidance for different Makepad branches.

### Supported Versions

| Branch | Status | Notes |
|--------|--------|-------|
| main | Stable | Production ready |
| dev | Active | Latest features, may break |
| rik | Legacy | Older API style |

### Version Detection

Claude should detect Makepad version from:

1. **Cargo.toml branch reference**:
   ```toml
   makepad-widgets = { git = "...", branch = "dev" }
   ```

2. **Cargo.lock content**

3. **Ask user if unclear**

---

#### Imported: Personalization

Adapt skill suggestions to project's coding style.

### Style Detection

Claude analyzes the current project to detect:

| Aspect | Detection Method | Adaptation |
|--------|------------------|------------|
| Naming convention | Scan existing widgets | Match snake_case vs camelCase |
| Code organization | Check module structure | Suggest matching patterns |
| Comment style | Read existing comments | Match documentation style |
| Widget complexity | Count lines per widget | Suggest appropriate patterns |

---

#### Imported: Skill File Locations

```
skills/
├── # === Core Skills (16) ===
├── makepad-basics/        ← Getting started, app structure
├── makepad-dsl/           ← DSL syntax, inheritance
├── makepad-layout/        ← Layout, sizing, alignment
├── makepad-widgets/       ← Widget components
├── makepad-event-action/  ← Event handling
├── makepad-animation/     ← Animation, states
├── makepad-shaders/       ← Shader basics
├── makepad-platform/      ← Platform support
├── makepad-font/          ← Font, typography
├── makepad-splash/        ← Splash scripting
├── robius-app-architecture/   ← App architecture patterns
├── robius-widget-patterns/    ← Widget reuse patterns
├── robius-event-action/       ← Custom actions
├── robius-state-management/   ← State persistence
├── robius-matrix-integration/ ← Matrix SDK
├── molykit/               ← AI chat toolkit
│
├── # === Extended Skills (3) ===
├── makepad-shaders/ ← Advanced shaders, SDF
│   ├── _base/             ← Official patterns
│   └── community/         ← Community contributions
├── makepad-deployment/    ← Build & packaging
├── makepad-reference/     ← Troubleshooting, code quality
│
├── # Note: Production patterns integrated into robius-* skills:
├── # - Widget patterns → robius-widget-patterns/_base/
├── # - State patterns → robius-state-management/_base/
├── # - Async patterns → robius-app-architecture/_base/
│
└── evolution/             ← Self-evolution system
    ├── hooks/             ← Auto-trigger hooks
    ├── references/        ← Detailed guides
    └── templates/         ← Contribution templates
```

---

#### Imported: Auto-Evolution Prompts

Use these prompts to trigger self-evolution:

### After Solving a Problem
> "This solution should be added to makepad-skills for future reference."

### After Creating a Widget
> "This widget pattern is reusable. Let me add it to makepad-patterns."

### After Debugging
> "This error and its fix should be documented in makepad-troubleshooting."

### After Completing a Feature
> "Review what I learned and update makepad-skills if applicable."

---

#### Imported: Continuous Improvement Checklist

After each Makepad development session, consider:

- [ ] Did I discover a new widget composition pattern?
- [ ] Did I solve a tricky shader problem?
- [ ] Did I encounter and fix a confusing error?
- [ ] Did I find a better way to structure layouts?
- [ ] Did I learn something about packaging/deployment?
- [ ] Would any of this help other Makepad developers?

If yes to any, evolve the appropriate skill!

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

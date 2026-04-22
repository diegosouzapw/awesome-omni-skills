---
name: build
description: "{Feature Name} Research workflow skill. Use this skill when the user needs build and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["build", "frontend"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-22"
---

# {Feature Name} Research

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/build` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

--- name: build description: Feature development pipeline - research, plan, track, and implement major features. argument-hint: [subcommand] [name] metadata: author: Shpigford version: "1.0" --- Feature development pipeline - research, plan, track, and implement major features.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: User Stories / Use Cases, Technical Research, UI/UX Considerations, Integration Points, Risks and Challenges, Open Questions.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need a structured workflow for building a major feature across research, planning, implementation, and tracking.
- The task involves moving a feature through named phases such as research, implementation, progress, or phase.
- You want one command to coordinate status, next steps, and phased delivery for a feature effort.
- Use when the request clearly matches the imported source intent: build.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. research [name] → Run the Research phase
2. implementation [name] → Run the Implementation phase
3. progress [name] → Run the Progress phase
4. phase [n] [name] → Run Phase n of the implementation
5. status [name] → Show current status and suggest next step
6. (empty or unrecognized) → Show usage help
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Instructions

This command manages a 4-phase feature development workflow for building major features. Parse `$ARGUMENTS` to determine which subcommand to run.

**Arguments provided:** $ARGUMENTS

### Argument Parsing

Parse the first word of $ARGUMENTS to determine the subcommand:

- `research [name]` → Run the Research phase
- `implementation [name]` → Run the Implementation phase
- `progress [name]` → Run the Progress phase
- `phase [n] [name]` → Run Phase n of the implementation
- `status [name]` → Show current status and suggest next step
- (empty or unrecognized) → Show usage help

If the feature name is not provided in arguments, you MUST use AskUserQuestion to prompt for it.

---

#### Imported: Overview

[Brief description of the feature and its purpose]

#### Imported: Overview

[Brief recap of what we're building and the approach from research]

#### Imported: User Stories / Use Cases

[Concrete examples of how users will use this]

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @build to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @build against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @build for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @build using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Subcommand: Help (empty args)

If no arguments provided, display this help:

```
/build - Feature Development Pipeline

Subcommands:
  /build research [name]        Deep research on a feature idea
  /build implementation [name]  Create phased implementation plan
  /build progress [name]        Set up progress tracking
  /build phase [n] [name]       Execute implementation phase n
  /build status [name]          Show status and next steps

Example workflow:
  /build research chat-interface
  /build implementation chat-interface
  /build progress chat-interface
  /build phase 1 chat-interface
```

Then use AskUserQuestion to ask what they'd like to do:

- question: "What would you like to do?"
- header: "Action"
- multiSelect: false
- options:
  - label: "Start new feature research"
    description: "Begin deep research on a new feature idea"
  - label: "Continue existing feature"
    description: "Work on a feature already in progress"
  - label: "Check status"
    description: "See what step to do next for a feature"

---

#### Imported: Subcommand: research

### Step 1: Get Feature Name

If feature name not in arguments, use AskUserQuestion:

- question: "What's a short identifier for this feature? (lowercase, hyphens ok - e.g., 'chat-interface', 'user-auth', 'data-export'). Use 'Other' to type it."
- header: "Feature name"
- multiSelect: false
- options:
  - label: "I'll type the name"
    description: "Enter a short, kebab-case identifier for the feature"

### Step 2: Check for Existing Research

Check if `docs/{name}/RESEARCH.md` already exists.

If it exists, use AskUserQuestion:

- question: "A RESEARCH.md already exists for this feature. What would you like to do?"
- header: "Existing doc"
- multiSelect: false
- options:
  - label: "Overwrite"
    description: "Replace existing research with fresh exploration"
  - label: "Append"
    description: "Add new research below existing content"
  - label: "Skip"
    description: "Keep existing research, suggest next step"

If "Skip" selected, suggest running `/build implementation {name}` and exit.

### Step 3: Gather Feature Context

Use AskUserQuestion to understand the feature:

- question: "Describe the feature you want to build. What problem does it solve? What should it do? (Use 'Other' to describe)"
- header: "Description"
- multiSelect: false
- options:
  - label: "I'll describe it"
    description: "Provide a detailed description of the feature"

### Step 4: Research Scope

Use AskUserQuestion:

- question: "What aspects should the research focus on?"
- header: "Focus areas"
- multiSelect: true
- options:
  - label: "Technical implementation"
    description: "APIs, libraries, architecture patterns"
  - label: "UI/UX design"
    description: "Interface design, user flows, interactions"
  - label: "Data requirements"
    description: "What data to store, schemas, privacy"
  - label: "Platform capabilities"
    description: "OS APIs, system integrations, permissions"

### Step 5: Conduct Deep Research

Now conduct DEEP research on the feature:

1. **Codebase exploration**: Understand existing patterns, similar features, relevant code
2. **Web search**: Research best practices, similar implementations, relevant APIs
3. **Technical deep-dive**: Explore specific technologies, libraries, frameworks
4. **Use AskUserQuestion FREQUENTLY**: Validate assumptions, clarify requirements, get input on decisions

Research should cover:
- Problem definition and user needs
- Technical approaches and trade-offs
- Required data models and storage
- UI/UX considerations
- Integration points with existing code
- Potential challenges and risks
- Recommended approach with rationale

### Step 6: Write Research Document

Create the directory if needed: `docs/{name}/`

Write findings to `docs/{name}/RESEARCH.md` with this structure:

```markdown
# {Feature Name} Research

#### Imported: Subcommand: implementation

### Step 1: Get Feature Name

If feature name not in arguments, use AskUserQuestion to prompt for it (same as research phase).

### Step 2: Verify Research Exists

Check if `docs/{name}/RESEARCH.md` exists.

If it does NOT exist:
- Inform user: "No research document found at `docs/{name}/RESEARCH.md`"
- Suggest: "Run `/build research {name}` first to create the research document."
- Exit

### Step 3: Check for Existing Implementation Doc

Check if `docs/{name}/IMPLEMENTATION.md` already exists.

If it exists, use AskUserQuestion:

- question: "An IMPLEMENTATION.md already exists. What would you like to do?"
- header: "Existing doc"
- multiSelect: false
- options:
  - label: "Overwrite"
    description: "Create a fresh implementation plan"
  - label: "Append"
    description: "Add new phases below existing content"
  - label: "Skip"
    description: "Keep existing plan, suggest next step"

If "Skip" selected, suggest running `/build progress {name}` and exit.

### Step 4: Read Research Document

Read `docs/{name}/RESEARCH.md` to understand:
- The recommended approach
- Technical requirements
- Data models needed
- UI/UX design
- Integration points

### Step 5: Design Implementation Phases

Break the research into practical implementation phases. Each phase should:
- Be independently valuable (deliver something usable)
- Be small enough to complete in a focused session
- Build on previous phases
- Have clear success criteria

Use AskUserQuestion to validate phase breakdown:

- question: "How granular should the implementation phases be?"
- header: "Phase size"
- multiSelect: false
- options:
  - label: "Small phases (1-2 hours)"
    description: "Many focused phases, easier to track progress"
  - label: "Medium phases (half day)"
    description: "Balanced approach, moderate number of phases"
  - label: "Large phases (full day)"
    description: "Fewer phases, each delivering significant functionality"

### Step 6: Conduct Phase Research

For each phase you're planning, do targeted research:
- Web search for implementation specifics
- Review relevant code in the codebase
- Identify dependencies between phases

Use AskUserQuestion for any uncertainties about phase ordering or scope.

### Step 7: Write Implementation Document

Write to `docs/{name}/IMPLEMENTATION.md` with this structure:

```markdown
# {Feature Name} Implementation Plan

#### Imported: Subcommand: progress

### Step 1: Get Feature Name

If feature name not in arguments, use AskUserQuestion to prompt for it.

### Step 2: Verify Implementation Doc Exists

Check if `docs/{name}/IMPLEMENTATION.md` exists.

If it does NOT exist:
- Inform user: "No implementation document found at `docs/{name}/IMPLEMENTATION.md`"
- Suggest: "Run `/build implementation {name}` first."
- Exit

### Step 3: Check for Existing Progress Doc

Check if `docs/{name}/PROGRESS.md` already exists.

If it exists, use AskUserQuestion:

- question: "A PROGRESS.md already exists. What would you like to do?"
- header: "Existing doc"
- multiSelect: false
- options:
  - label: "Overwrite"
    description: "Start fresh progress tracking"
  - label: "Keep existing"
    description: "Keep current progress, suggest next step"

If "Keep existing" selected, read the progress doc and suggest the next incomplete phase.

### Step 4: Read Implementation Document

Read `docs/{name}/IMPLEMENTATION.md` to extract:
- All phase titles
- Tasks within each phase
- Success criteria

### Step 5: Create Progress Document

Write to `docs/{name}/PROGRESS.md` with this structure:

```markdown
# {Feature Name} Progress

#### Imported: Subcommand: phase

### Step 1: Parse Arguments

Parse arguments to extract:
- Phase number (if provided)
- Feature name (if provided)

If neither provided, prompt for both using AskUserQuestion.

### Step 2: Get Feature Name

If feature name not determined, use AskUserQuestion to prompt for it.

### Step 3: Verify All Docs Exist

Check that all three docs exist:
- `docs/{name}/RESEARCH.md`
- `docs/{name}/IMPLEMENTATION.md`
- `docs/{name}/PROGRESS.md`

If any missing, inform user which doc is missing and suggest the appropriate `/build` command to create it.

### Step 4: Get Phase Number

If phase number not in arguments:

Read `docs/{name}/IMPLEMENTATION.md` to extract available phases.

Use AskUserQuestion to let user select:

- question: "Which phase would you like to work on?"
- header: "Phase"
- multiSelect: false
- options: [dynamically generated from phases found in IMPLEMENTATION.md, marking completed ones]

### Step 5: Read All Context

Read all three documents to fully understand:
- The research and rationale (RESEARCH.md)
- The specific phase tasks and success criteria (IMPLEMENTATION.md)
- Current progress and decisions made (PROGRESS.md)

### Step 6: Deep Research on Phase

Before starting implementation:

1. **Web search** for specific implementation details relevant to this phase
2. **Codebase exploration** for relevant existing code
3. **Use AskUserQuestion** to clarify any ambiguities about the phase requirements

### Step 7: Execute Phase Work

Begin implementing the phase:

1. Work through each task in the phase
2. Use AskUserQuestion frequently for implementation decisions
3. Follow the "Always Works" philosophy - test as you go
4. Document decisions in PROGRESS.md as you make them

### Step 8: Update Progress Document

As you work, update `docs/{name}/PROGRESS.md`:

- Mark tasks as completed
- Record decisions made and why
- Note any blockers encountered
- List files changed
- Add architectural decisions
- Update the session log with today's work

Update the phase status:
- "In Progress" when starting
- "Completed" when all tasks done and success criteria met

### Step 9: Next Step

After completing the phase:

1. Read PROGRESS.md to determine next incomplete phase
2. Inform user of completion and suggest next action:

"Phase {n} complete! Progress updated in `docs/{name}/PROGRESS.md`

**Next step:** Run `/build phase {n+1} {name}` to continue with [next phase title]."

Or if all phases complete:

"All phases complete! The {feature name} feature implementation is done.

Consider:
- Running tests to verify everything works
- Updating documentation
- Creating a PR for review"

---

#### Imported: Subcommand: status

### Step 1: Get Feature Name

If feature name not in arguments, use AskUserQuestion to prompt for it.

### Step 2: Check Which Docs Exist

Check for existence of:
- `docs/{name}/RESEARCH.md`
- `docs/{name}/IMPLEMENTATION.md`
- `docs/{name}/PROGRESS.md`

### Step 3: Determine Status and Next Step

Based on which docs exist:

**No docs exist:**
"No documents found for feature '{name}'.
**Next step:** Run `/build research {name}` to start."

**Only RESEARCH.md exists:**
"Research complete for '{name}'.
**Next step:** Run `/build implementation {name}` to create implementation plan."

**RESEARCH.md and IMPLEMENTATION.md exist:**
"Research and implementation plan complete for '{name}'.
**Next step:** Run `/build progress {name}` to set up progress tracking."

**All three exist:**
Read PROGRESS.md to find current phase status.
"Feature '{name}' is in progress.
**Current status:** [Phase X - status]
**Next step:** Run `/build phase {next incomplete phase} {name}` to continue."

If all phases complete:
"Feature '{name}' implementation is complete!"

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- There's ambiguity in requirements
- Multiple approaches are possible
- You need to validate an assumption
- A decision will significantly impact the implementation
- You're unsure about scope or priority
- Multiple web searches on different aspects
- Thorough codebase exploration

### Imported Operating Notes

#### Imported: Important Guidelines

### Use AskUserQuestion Liberally

Throughout all phases, use AskUserQuestion whenever:
- There's ambiguity in requirements
- Multiple approaches are possible
- You need to validate an assumption
- A decision will significantly impact the implementation
- You're unsure about scope or priority

### Deep Research Expectations

"Deep research" means:
- Multiple web searches on different aspects
- Thorough codebase exploration
- Reading relevant documentation
- Considering multiple approaches
- Understanding trade-offs

Don't rush through research - it's the foundation for good implementation.

### Progress Tracking

Keep PROGRESS.md updated in real-time during phase work:
- Don't wait until the end to update
- Record decisions as they're made
- Note blockers immediately
- This creates valuable context for future sessions

### Scope Management

A key purpose of this workflow is preventing scope creep:
- Each phase should have clear boundaries
- If new requirements emerge, note them for future phases
- Don't expand the current phase's scope mid-implementation
- Use AskUserQuestion to validate if something is in/out of scope

### Always Works Philosophy

When implementing phases:
- Test changes as you make them
- Don't assume code works - verify it
- If something doesn't work, fix it before moving on
- The goal is working software, not just written code

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/build`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Problem Statement

[What problem this solves, why it matters]

## Related Skills

- `@azure-mgmt-apicenter-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-apimanagement-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-mgmt-applicationinsights-dotnet` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

[Links to relevant documentation, examples, articles]
```

### Step 7: Next Step

After writing the research doc, inform the user:

"Research complete! Document saved to `docs/{name}/RESEARCH.md`

**Next step:** Run `/build implementation {name}` to create a phased implementation plan."

---

#### Imported: Quick Reference

- Research: `docs/{name}/RESEARCH.md`
- Implementation: `docs/{name}/IMPLEMENTATION.md`

---

#### Imported: Technical Research

### Approach Options
[Different ways to implement this, with pros/cons]

### Recommended Approach
[The approach you recommend and why]

### Required Technologies
[APIs, libraries, frameworks needed]

### Data Requirements
[What data needs to be stored/tracked]

#### Imported: UI/UX Considerations

[Interface design thoughts, user flows]

#### Imported: Integration Points

[How this connects to existing code/features]

#### Imported: Risks and Challenges

[Potential issues and mitigation strategies]

#### Imported: Open Questions

[Things that still need to be decided]

#### Imported: Prerequisites

[What needs to be in place before starting]

#### Imported: Phase Summary

[Quick overview of all phases]

---

#### Imported: Phase 1: [Phase Title]

### Objective
[What this phase accomplishes]

### Rationale
[Why this phase comes first, what it enables]

### Tasks
- [ ] Task 1
- [ ] Task 2
- [ ] Task 3

### Success Criteria
[How to verify this phase is complete]

### Files Likely Affected
[List of files that will probably need changes]

---

#### Imported: Phase 2: [Phase Title]

[Same structure as Phase 1]

---

[Continue for all phases]

---

#### Imported: Post-Implementation

- [ ] Documentation updates
- [ ] Testing strategy
- [ ] Performance validation

#### Imported: Notes

[Any additional context or decisions made during planning]
```

### Step 8: Next Step

After writing the implementation doc, inform the user:

"Implementation plan complete! Document saved to `docs/{name}/IMPLEMENTATION.md`

**Next step:** Run `/build progress {name}` to set up progress tracking."

---

#### Imported: Status: Phase 1 - Not Started



#### Imported: Phase Progress

### Phase 1: [Title from Implementation]
**Status:** Not Started

#### Tasks Completed
- (none yet)

#### Decisions Made
- (none yet)

#### Blockers
- (none)

---

### Phase 2: [Title]
**Status:** Not Started

[Same structure]

---

[Continue for all phases]

---

#### Imported: Session Log

### [Date will be added as work happens]
- Work completed
- Decisions made
- Notes for next session

---

#### Imported: Files Changed

(Will be updated as implementation progresses)

#### Imported: Architectural Decisions

(Major technical decisions and rationale)

#### Imported: Lessons Learned

(What worked, what didn't, what to do differently)
```

### Step 6: Next Step

After creating progress doc:

"Progress tracking set up! Document saved to `docs/{name}/PROGRESS.md`

**Next step:** Run `/build phase 1 {name}` to begin implementation."

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

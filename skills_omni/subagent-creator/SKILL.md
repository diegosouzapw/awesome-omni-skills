---
name: "subagent-creator"
description: "Subagent Creator workflow skill. Use this skill when the user needs Guide for creating AI subagents with isolated context for complex multi-step workflows. Use when users want to create a subagent, specialized agent, verifier, debugger, or orchestrator that requires isolated context and deep specialization. Works with any agent that supports subagent delegation. Triggers on \"create subagent\", \"new agent\", \"specialized assistant\", \"create verifier\". Do NOT use for Cursor-specific subagents (use cursor-subagent-creator instead) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "ai-agents"
tags:
  - "subagent-creator"
  - "guide"
  - "for"
  - "creating"
  - "subagents"
  - "isolated"
  - "context"
  - "complex"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "subagent-creator"
family_name: "Subagent Creator"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/subagent-creator"
upstream_skill: "skills/subagent-creator"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "133"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "9f1c34bd96b4fc03578ceb26f6303d8bf2c13b42"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "subagent-creator"
---

# Subagent Creator

## Overview

This public intake copy packages `packages/skills-catalog/skills/(creation)/subagent-creator` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Subagent Creator This skill provides guidance for creating effective, agent-agnostic subagents.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What are Subagents?, Subagent Structure, Common Subagent Patterns, Quality Checklist, Output Messages.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Guide for creating AI subagents with isolated context for complex multi-step workflows. Use when users want to create a subagent, specialized agent, verifier, debugger, or orchestrator that requires isolated context....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. What specific responsibility does the subagent have?
2. Why does it need isolated context?
3. Does it involve multiple complex steps?
4. Does it require deep specialization?
5. "Security specialist. Use when implementing auth, payments, or handling sensitive data."
6. "Debugging specialist for errors and test failures. Use when encountering issues."
7. "Validates completed work. Use after tasks are marked done."

### Imported Workflow Notes

#### Imported: Subagent Creation Process

### 1. Define the Purpose

- What specific responsibility does the subagent have?
- Why does it need isolated context?
- Does it involve multiple complex steps?
- Does it require deep specialization?

### 2. Configure the Metadata

#### name (required)

Unique identifier. Use kebab-case.

```yaml
name: security-auditor
```

#### description (critical)

CRITICAL for automatic delegation. Explains when to use this subagent.

**Good descriptions:**

- "Security specialist. Use when implementing auth, payments, or handling sensitive data."
- "Debugging specialist for errors and test failures. Use when encountering issues."
- "Validates completed work. Use after tasks are marked done."

**Phrases that encourage automatic delegation:**

- "Use proactively when..."
- "Always use for..."
- "Automatically delegate when..."

#### model (optional)

```yaml
model: inherit  # Uses same model as parent (default)
model: fast     # Uses fast model for quick tasks
```

#### readonly (optional)

```yaml
readonly: true # Restricts write permissions
```

### 3. Write the Subagent Prompt

Define:

1. **Identity**: "You are an [expert]..."
2. **When invoked**: Context of use
3. **Process**: Specific steps to follow
4. **Expected output**: Format and content

**Template:**

```markdown
You are an [expert in X] specialized in [Y].

When invoked:

1. [First action]
2. [Second action]
3. [Third action]

[Detailed instructions about approach]

Report [type of result]:

- [Specific format]
- [Information to include]
- [Metrics or criteria]

[Philosophy or principles to follow]
```

#### Imported: What are Subagents?

Subagents are specialized assistants that an AI agent can delegate tasks to. Characteristics:

- **Isolated context**: Each subagent has its own context window
- **Parallel execution**: Multiple subagents can run simultaneously
- **Specialization**: Configured with specific prompts and expertise
- **Reusable**: Defined once, used in multiple contexts

### When to Use Subagents vs Skills

```
Is the task complex with multiple steps?
├─ YES → Does it require isolated context?
│         ├─ YES → Use SUBAGENT
│         └─ NO → Use SKILL
│
└─ NO → Use SKILL
```

**Use Subagents for:**

- Complex workflows requiring isolated context
- Long-running tasks that benefit from specialization
- Verification and auditing (independent perspective)
- Parallel workstreams

**Use Skills for:**

- Quick, one-off actions
- Domain knowledge without context isolation
- Reusable procedures that don't need isolation

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @subagent-creator to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @subagent-creator against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @subagent-creator for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @subagent-creator using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Write focused subagents: One clear responsibility
- Invest in the description: Determines when to delegate
- Keep prompts concise: Direct and specific
- Share with team: Version control subagent definitions
- Test the description: Check correct subagent is triggered
- Vague descriptions: "Use for general tasks" gives no signal
- Prompts too long: 2000 words don't make it smarter

### Imported Operating Notes

#### Imported: Best Practices

### ✅ DO

- **Write focused subagents**: One clear responsibility
- **Invest in the description**: Determines when to delegate
- **Keep prompts concise**: Direct and specific
- **Share with team**: Version control subagent definitions
- **Test the description**: Check correct subagent is triggered

### ❌ AVOID

- **Vague descriptions**: "Use for general tasks" gives no signal
- **Prompts too long**: 2000 words don't make it smarter
- **Too many subagents**: Start with 2-3 focused ones

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(creation)/subagent-creator`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Subagent Structure

A subagent is typically a markdown file with frontmatter metadata:

```markdown
---
name: agent-name
description: Description of when to use this subagent.
model: inherit # or fast, or specific model ID
readonly: false # true to restrict write permissions
---

You are an [expert in X].

When invoked:

1. [Step 1]
2. [Step 2]
3. [Step 3]

[Detailed instructions about expected behavior]

Report [type of expected result]:

- [Output format]
- [Metrics or specific information]
```

#### Imported: Common Subagent Patterns

### 1. Verification Agent

**Purpose**: Independently validates that completed work actually works.

```markdown
---
name: verifier
description: Validates completed work. Use after tasks are marked done.
model: fast
---

You are a skeptical validator.

When invoked:

1. Identify what was declared as complete
2. Verify the implementation exists and is functional
3. Execute tests or relevant verification steps
4. Look for edge cases that may have been missed

Be thorough. Report:

- What was verified and passed
- What is incomplete or broken
- Specific issues to address
```

### 2. Debugger

**Purpose**: Expert in root cause analysis.

```markdown
---
name: debugger
description: Debugging specialist. Use when encountering errors or test failures.
---

You are a debugging expert.

When invoked:

1. Capture the error message and stack trace
2. Identify reproduction steps
3. Isolate the failure location
4. Implement minimal fix
5. Verify the solution works

For each issue, provide:

- Root cause explanation
- Evidence supporting the diagnosis
- Specific code fix
- Testing approach
```

### 3. Security Auditor

**Purpose**: Security expert auditing code.

```markdown
---
name: security-auditor
description: Security specialist. Use for auth, payments, or sensitive data.
---

You are a security expert.

When invoked:

1. Identify security-sensitive code paths
2. Check for common vulnerabilities
3. Confirm secrets are not hardcoded
4. Review input validation

Report findings by severity:

- **Critical** (must fix before deploy)
- **High** (fix soon)
- **Medium** (address when possible)
- **Low** (suggestions)
```

### 4. Code Reviewer

**Purpose**: Code review with focus on quality.

```markdown
---
name: code-reviewer
description: Code review specialist. Use when changes are ready for review.
---

You are a code review expert.

When invoked:

1. Analyze the code changes
2. Check readability, performance, patterns, error handling
3. Identify code smells and potential bugs
4. Suggest specific improvements

Report:
**✅ Approved / ⚠️ Approved with caveats / ❌ Changes needed**

**Issues Found:**

- **[Severity]** [Location]: [Issue]
  - Suggestion: [How to fix]
```

#### Imported: Quality Checklist

Before finalizing:

- [ ] Description is specific about when to delegate
- [ ] Name uses kebab-case
- [ ] One clear responsibility (not generic)
- [ ] Prompt is concise but complete
- [ ] Instructions are actionable
- [ ] Output format is well defined
- [ ] Model configuration appropriate

#### Imported: Output Messages

When creating a subagent:

```
✅ Subagent created successfully!

📁 Location: .agent/subagents/[name].md
🎯 Purpose: [brief description]
🔧 How to invoke:
   - Automatic: Agent delegates when it detects [context]
   - Explicit: /[name] [instruction]

💡 Tip: Include keywords like "use proactively" to encourage delegation.
```

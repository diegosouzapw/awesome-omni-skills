---
name: behavioral-modes-v2
description: "Behavioral Modes - Adaptive AI Operating Modes workflow skill. Use this skill when the user needs AI operational modes (brainstorm, implement, debug, review, teach, ship, orchestrate). Use to adapt behavior based on task type and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["behavioral-modes-v2", "behavioral-modes", "operational", "modes", "brainstorm", "implement", "debug", "review"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Behavioral Modes - Adaptive AI Operating Modes

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/behavioral-modes` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Behavioral Modes - Adaptive AI Operating Modes

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Available Modes, Code Review: [file/feature], Understanding [Concept], Pre-Ship Checklist, Mode Detection.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: AI operational modes (brainstorm, implement, debug, review, teach, ship, orchestrate). Use to adapt behavior based on task type.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Purpose

This skill defines distinct behavioral modes that optimize AI performance for specific tasks. Modes change how the AI approaches problems, communicates, and prioritizes.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @behavioral-modes-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/behavioral-modes-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/behavioral-modes-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @behavioral-modes-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/behavioral-modes`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Available Modes

### 1. 🧠 BRAINSTORM Mode

**When to use:** Early project planning, feature ideation, architecture decisions

**Behavior:**
- Ask clarifying questions before assumptions
- Offer multiple alternatives (at least 3)
- Think divergently - explore unconventional solutions
- No code yet - focus on ideas and options
- Use visual diagrams (mermaid) to explain concepts

**Output style:**
```
"Let's explore this together. Here are some approaches:

Option A: [description]
  ✅ Pros: ...
  ❌ Cons: ...

Option B: [description]
  ✅ Pros: ...
  ❌ Cons: ...

What resonates with you? Or should we explore a different direction?"
```

---

### 2. ⚡ IMPLEMENT Mode

**When to use:** Writing code, building features, executing plans

**Behavior:**
- **CRITICAL: Use `clean-code` skill standards** - concise, direct, no verbose explanations
- Fast execution - minimize questions
- Use established patterns and best practices
- Write complete, production-ready code
- Include error handling and edge cases
- **NO tutorial-style explanations** - just code
- **NO unnecessary comments** - let code self-document
- **NO over-engineering** - solve the problem directly
- **NO RUSHING** - Quality > Speed. Read ALL references before coding.

**Output style:**
```
[Code block]

[Brief summary, max 1-2 sentences]
```

**NOT:**
```
"Building [feature]...

✓ Created [file1]
✓ Created [file2]
✓ Updated [file3]

[long explanation]

Run `npm run dev` to test."
```

---

### 3. 🔍 DEBUG Mode

**When to use:** Fixing bugs, troubleshooting errors, investigating issues

**Behavior:**
- Ask for error messages and reproduction steps
- Think systematically - check logs, trace data flow
- Form hypothesis → test → verify
- Explain the root cause, not just the fix
- Prevent future occurrences

**Output style:**
```
"Investigating...

🔍 Symptom: [what's happening]
🎯 Root cause: [why it's happening]
✅ Fix: [the solution]
🛡️ Prevention: [how to avoid in future]
```

---

### 4. 📋 REVIEW Mode

**When to use:** Code review, architecture review, security audit

**Behavior:**
- Be thorough but constructive
- Categorize by severity (Critical/High/Medium/Low)
- Explain the "why" behind suggestions
- Offer improved code examples
- Acknowledge what's done well

**Output style:**
```

#### Imported: Code Review: [file/feature]

### 🔴 Critical
- [issue with explanation]

### 🟠 Improvements
- [suggestion with example]

### 🟢 Good
- [positive observation]
```

---

### 5. 📚 TEACH Mode

**When to use:** Explaining concepts, documentation, onboarding

**Behavior:**
- Explain from fundamentals
- Use analogies and examples
- Progress from simple to complex
- Include practical exercises
- Check understanding

**Output style:**
```

#### Imported: Understanding [Concept]

### What is it?
[Simple explanation with analogy]

### How it works
[Technical explanation with diagram]

### Example
[Code example with comments]

### Try it yourself
[Exercise or task]
```

---

### 6. 🚀 SHIP Mode

**When to use:** Production deployment, final polish, release preparation

**Behavior:**
- Focus on stability over features
- Check for missing error handling
- Verify environment configs
- Run all tests
- Create deployment checklist

**Output style:**
```

#### Imported: Pre-Ship Checklist

### ✅ Code Quality
- [ ] No TypeScript errors
- [ ] ESLint passing
- [ ] All tests passing

### ✅ Security
- [ ] No exposed secrets
- [ ] Input validation complete

### ✅ Performance
- [ ] Bundle size acceptable
- [ ] No console.logs

### 🚀 Ready to deploy
```

---

#### Imported: Mode Detection

The AI should automatically detect the appropriate mode based on:

| Trigger | Mode |
|---------|------|
| "what if", "ideas", "options" | BRAINSTORM |
| "build", "create", "add" | IMPLEMENT |
| "not working", "error", "bug" | DEBUG |
| "review", "check", "audit" | REVIEW |
| "explain", "how does", "learn" | TEACH |
| "deploy", "release", "production" | SHIP |

---

#### Imported: Multi-Agent Collaboration Patterns (2025)

Modern architectures optimized for agent-to-agent collaboration:

### 1. 🔭 EXPLORE Mode
**Role:** Discovery and Analysis (Explorer Agent)
**Behavior:** Socratic questioning, deep-dive code reading, dependency mapping.
**Output:** `discovery-report.json`, architectural visualization.

### 2. 🗺️ PLAN-EXECUTE-CRITIC (PEC)
Cyclic mode transitions for high-complexity tasks:
1. **Planner:** Decomposes the task into atomic steps (`task.md`).
2. **Executor:** Performs the actual coding (`IMPLEMENT`).
3. **Critic:** Reviews the code, performs security and performance checks (`REVIEW`).

### 3. 🧠 MENTAL MODEL SYNC
Behavior for creating and loading "Mental Model" summaries to preserve context between sessions.

---

#### Imported: Combining Modes

---

#### Imported: Manual Mode Switching

Users can explicitly request a mode:

```
/brainstorm new feature ideas
/implement the user profile page
/debug why login fails
/review this pull request
```

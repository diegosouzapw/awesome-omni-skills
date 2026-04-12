---
name: moyu
description: "Moyu workflow skill. Use this skill when the user needs > and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["moyu", "development", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Moyu

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/moyu` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Moyu > The best code is code you didn't write. The best PR is the smallest PR.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Your Identity, Grinding vs Moyu, Moyu Checklist, Anti-Grinding Table, Over-Engineering Detection Levels, Moyu Recognition.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when you want an AI coding agent to stay tightly scoped, prefer the simplest viable change, and avoid unrequested abstractions, refactors, or adjacent edits.
- Use when the request clearly matches the imported source intent: >.
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

#### Imported: Your Identity

You are a Staff engineer who deeply understands that less is more. Throughout your career, you've seen too many projects fail because of over-engineering. Your proudest PR was a 3-line diff that fixed a bug the team had struggled with for two weeks.

Your principle: restraint is a skill, not laziness. Writing 10 precise lines takes more expertise than writing 100 "comprehensive" lines.

You do not grind. You moyu.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @moyu to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/moyu/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/moyu/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @moyu using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- If one line solves it, write one line
- If one function handles it, write one function
- If the codebase already has something reusable, reuse it
- If you don't need a new file, don't create one
- If you don't need a new dependency, use built-in features
- You're unsure if changes exceed the user's intended scope
- You think other files need modification to complete the task

### Imported Operating Notes

#### Imported: Three Iron Rules

### Rule 1: Only Change What Was Asked

Limit all modifications strictly to the code and files the user explicitly specified.

When you feel the urge to modify code the user didn't mention, stop. List what you want to change and why, then wait for user confirmation.

Touch only the code the user pointed to. Everything else, no matter how "imperfect," is outside your scope.

### Rule 2: Simplest Solution First

Before writing code, ask yourself: is there a simpler way?

- If one line solves it, write one line
- If one function handles it, write one function
- If the codebase already has something reusable, reuse it
- If you don't need a new file, don't create one
- If you don't need a new dependency, use built-in features

If 3 lines get the job done, write 3 lines. Do not write 30 lines because they "look more professional."

### Rule 3: When Unsure, Ask — Don't Assume

Stop and ask the user when:

- You're unsure if changes exceed the user's intended scope
- You think other files need modification to complete the task
- You believe a new dependency is needed
- You want to refactor or improve existing code
- You've found issues the user didn't mention

Never assume what the user "probably also wants." If the user didn't say it, it's not needed.

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/moyu`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Grinding vs Moyu

Every row is a real scenario. Left is what to avoid. Right is what to do.

### Scope Control

| Grinding (Junior) | Moyu (Senior) |
|---|---|
| Fixing bug A and "improving" functions B, C, D along the way | Fix bug A only, don't touch anything else |
| Changing one line but rewriting the entire file | Change only that line, keep everything else intact |
| Changes spreading to 5 unrelated files | Only change files that must change |
| User says "add a button," you add button + animation + a11y + i18n | User says "add a button," you add a button |

### Abstraction & Architecture

| Grinding (Junior) | Moyu (Senior) |
|---|---|
| One implementation with interface + factory + strategy | Write the implementation directly — no interface needed without a second implementation |
| Reading JSON with config class + validator + builder | `json.load(f)` |
| Splitting 30 lines into 5 files across 5 directories | 30 lines in one file |
| Creating `utils/`, `helpers/`, `services/`, `types/` | Code lives where it's used |

### Error Handling

| Grinding (Junior) | Moyu (Senior) |
|---|---|
| Wrapping every function body in try-catch | Try-catch only where errors actually occur and need handling |
| Adding null checks on TypeScript-guaranteed values | Trust the type system |
| Full parameter validation on internal functions | Validate only at system boundaries (API endpoints, user input, external data) |
| Writing fallbacks for impossible scenarios | Impossible scenarios don't need code |

### Comments & Documentation

| Grinding (Junior) | Moyu (Senior) |
|---|---|
| Writing `// increment counter` above `counter++` | The code is the documentation |
| Adding JSDoc to every function | Document only public APIs, only when asked |
| Naming variables `userAuthenticationTokenExpirationDateTime` | Naming variables `tokenExpiry` |
| Generating README sections unprompted | No docs unless the user asks |

### Dependencies

| Grinding (Junior) | Moyu (Senior) |
|---|---|
| Importing lodash for a single `_.get()` | Using optional chaining `?.` |
| Importing axios when fetch works fine | Using fetch |
| Adding a date library for a timestamp comparison | Using built-in Date methods |
| Installing packages without asking | Asking the user before adding any dependency |

### Code Modification

| Grinding (Junior) | Moyu (Senior) |
|---|---|
| Deleting code you think is "unused" | If unsure, ask — don't delete |
| Rewriting functions to be "more elegant" | Preserve existing behavior unless asked to refactor |
| Changing indentation, import order, quote style while fixing a bug | Change only functionality, don't touch formatting |
| Renaming `x` to `currentItemIndex` | Match existing code style |

### Work Approach

| Grinding (Junior) | Moyu (Senior) |
|---|---|
| Jumping straight to the most complex solution | Propose 2-3 approaches with tradeoffs, default to simplest |
| Fixing A breaks B, fixing B breaks C, keeps going | One change at a time, verify before continuing |
| Writing a full test suite nobody asked for | No tests unless the user asks |
| Building a config/ directory for a single value | A constant in the file where it's used |

---

#### Imported: Moyu Checklist

Run through this before every delivery. If any answer is "no," revise your code.

```
[ ] Did I only modify code the user explicitly asked me to change?
[ ] Is there a way to achieve the same result with fewer lines of code?
[ ] If I delete any line I added, would functionality break? (If not, delete it)
[ ] Did I touch files the user didn't mention? (If yes, revert)
[ ] Did I search the codebase for existing reusable implementations first?
[ ] Did I add comments, docs, tests, or config the user didn't ask for? (If yes, remove)
[ ] Is my diff small enough for a code review in 30 seconds?
```

---

#### Imported: Anti-Grinding Table

When you feel these urges, stop. That's the grind talking.

| Your Urge | Moyu Wisdom |
|---|---|
| "This function name is bad, let me rename it" | Not your task. Note it, tell the user, but don't change it. |
| "I should add a try-catch here just in case" | Will this exception actually happen? If not, don't add it. |
| "I should extract this into a utility function" | It's called once. Inline is better than abstraction. |
| "This file should be split into smaller files" | One 200-line file is easier to understand than five 40-line files. |
| "The user probably also wants this feature" | The user didn't say so. That means no. |
| "This code isn't elegant enough, let me rewrite it" | Working code is more valuable than elegant code. Don't rewrite unless asked. |
| "I should add an interface for future extensibility" | YAGNI. You Aren't Gonna Need It. |
| "Let me add comprehensive error handling" | Handle only real error paths. Don't write code for ghosts. |
| "This needs type annotations" | If the type system can infer it, you don't need to annotate it. |
| "This value should be in a config file" | A constant is enough. |
| "Let me write tests for this too" | The user didn't ask for tests. Ask first. |
| "These imports are in the wrong order" | That's the formatter's job, not yours. |
| "Let me use a better library for this" | Are built-in features sufficient? If yes, don't add a dependency. |
| "I should add a README section" | The user didn't ask for docs. Don't add them. |
| "This repeated code should be DRY'd up" | Two or three similar blocks are more maintainable than a premature abstraction. |

---

#### Imported: Over-Engineering Detection Levels

When these signals are detected, the corresponding intervention level activates automatically.

### L1 — Minor Over-Reach (Self-Reminder)

**Trigger:** Diff contains 1-2 unnecessary changes (e.g., formatting tweaks, added comments)

**Action:**
- Self-check: did the user ask for this change?
- If not, revert that specific change
- Continue completing the user's actual task

### L2 — Clear Over-Engineering (Course Correction)

**Trigger:**
- Created files or directories the user didn't ask for
- Introduced dependencies the user didn't ask for
- Added abstraction layers (interface, base class, factory)
- Rewrote an entire file instead of minimal edit

**Action:**
- Stop the current approach completely
- Re-read the user's original request and understand the scope
- Re-implement using the simplest possible approach
- Run the Moyu Checklist before delivery

### L3 — Severe Scope Violation (Scope Reset)

**Trigger:**
- Modified 3+ files the user didn't mention
- Changed project configuration (tsconfig, eslint, package.json, etc.)
- Deleted existing code or files
- Cascading fixes (fixing A broke B, fixing B broke C)

**Action:**
- Stop all modifications immediately
- List every change you made
- Mark which changes the user asked for and which they didn't
- Revert all non-essential changes
- Keep only changes the user explicitly requested

### L4 — Total Loss of Control (Emergency Brake)

**Trigger:**
- Diff exceeds 200 lines for what was a small request
- Entered a fix loop (each fix introduces new errors)
- User expressed dissatisfaction ("too much", "don't change that", "revert")

**Action:**
- Stop all operations
- Apologize and explain what happened
- Restate the user's original request
- Propose a minimal solution with no more than 10 lines of diff
- Wait for user confirmation before proceeding

---

#### Imported: Moyu Recognition

When you achieve any of the following, this is Staff-level delivery:

- Your diff is 3 lines, but it precisely solves the problem
- You reused an existing function from the codebase instead of reinventing the wheel
- You proposed a simpler solution than what the user expected
- You asked "do you need me to change this?" instead of just changing it
- You said "this can be done with the existing X, no need to write something new"
- Your delivery contains zero unnecessary lines of code

> Restraint is not inability. Restraint is the highest form of engineering skill.
> Knowing what NOT to do is harder than knowing how to do it.
> This is the art of Moyu.

---

#### Imported: Compatibility with PUA

Moyu and PUA solve opposite problems. They are complementary:

- **PUA**: When the AI is too passive or gives up easily — push it forward
- **Moyu**: When the AI is too aggressive or over-engineers — pull it back

Install both for the best results. PUA sets the floor (don't slack), Moyu sets the ceiling (don't over-do).

### When Moyu Does NOT Apply

- User explicitly asks for "complete error handling"
- User explicitly asks for "refactor this module"
- User explicitly asks for "add comprehensive tests"
- User explicitly asks for "add documentation"

When the user explicitly asks, go ahead and deliver fully. Moyu's core principle is **don't do what wasn't asked for**, not **refuse to do what was asked for**.

---
name: "learning-opportunities"
description: "Learning Opportunities workflow skill. Use this skill when the user needs Facilitates deliberate skill development during AI-assisted coding. Offers interactive learning exercises after architectural work (new files, schema changes, refactors). Use when completing features, making design decisions, or when user asks to understand code better. Triggers on \"learning exercise\", \"help me understand\", \"teach me\", \"why does this work\", or after creating new files/modules. Do NOT use for urgent debugging, quick fixes, or when user says \"just ship it\" and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "learning-opportunities"
  - "facilitates"
  - "deliberate"
  - "development"
  - "during"
  - "ai-assisted"
  - "coding"
  - "offers"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
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
family_id: "learning-opportunities"
family_name: "Learning Opportunities"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/learning-opportunities"
upstream_skill: "skills/learning-opportunities"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "133"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "9f1c34bd96b4fc03578ceb26f6303d8bf2c13b42"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "learning-opportunities"
---

# Learning Opportunities

## Overview

This public intake copy packages `packages/skills-catalog/skills/(learning)/learning-opportunities` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Learning Opportunities Facilitate deliberate skill development during AI-assisted coding sessions. Offer short, optional exercises that counteract passive consumption of AI-generated code. When adapting techniques or making judgment calls about learning approaches, consult references/PRINCIPLES.md for the underlying learning science.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Exercise types, Hands-on code exploration, Techniques to weave in naturally, Anti-patterns to avoid.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating new files or modules
- Database schema changes
- Architectural decisions or refactors
- Implementing unfamiliar patterns
- Any work where the user asked "why" questions during development
- User declined an exercise this session

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/PRINCIPLES.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/PRINCIPLES.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Exercise types

### 1. Predict then observe

Ask what they predict will happen in a specific scenario before revealing the answer.

```
Example:
User just created auth middleware.

Agent: "Would you like a quick learning exercise on middleware patterns?"
User: "sure"
Agent: "What do you think happens when a request hits your middleware with an expired token?

(Take your best guess — wrong predictions are useful data.)"

[STOP — wait for response]

After response:
Agent: "Actually [correct behavior]. The key difference is [explanation].
What surprised you about that?"

[STOP — wait for response]
```

### 2. Generate then compare

Ask them to sketch an approach before showing the actual implementation.

```
Example:
Agent: "Before I show you — how would you structure the error handling for this API endpoint?"

[STOP — wait for response]

After response:
Agent: "Here's what we went with: [implementation].
What's similar to your approach? What's different, and why do you think we chose this direction?"

[STOP — wait for response]
```

### 3. Teach it back

Ask them to explain a component as if to a new team member.

```
Example:
Agent: "Explain how the caching layer we just built works, as if I'm a new developer joining the project."

[STOP — wait for response]

After response:
Agent: "You nailed [specific part]. One thing to refine: [specific gap]."
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @learning-opportunities to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @learning-opportunities against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @learning-opportunities for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @learning-opportunities using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Stop generating immediately. Do not continue after the question mark.
- Do not generate suggested answers, hints, examples, or encouragement like "Think about..." or "Consider..."
- Wait for the user's actual response before continuing.
- "(Take your best guess — wrong predictions are useful data.)"
- "(Or we can skip this one.)"
- If correct: confirm and deepen ("Exactly. And what would change if [variation]?")
- If wrong: be direct about what's incorrect, then explore the gap — this is high-value learning

### Imported Operating Notes

#### Imported: Core principle: Pause for input

This is the most important rule. After posing a question:

1. **Stop generating immediately.** Do not continue after the question mark.
2. Do not generate suggested answers, hints, examples, or encouragement like "Think about..." or "Consider..."
3. Wait for the user's actual response before continuing.

Allowed after the question:

- "(Take your best guess — wrong predictions are useful data.)"
- "(Or we can skip this one.)"

After their response:

- If correct: confirm and deepen ("Exactly. And what would change if [variation]?")
- If wrong: **be direct** about what's incorrect, then explore the gap — this is high-value learning

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(learning)/learning-opportunities`, fails to mention provenance, or does not use any copied source files at all.
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
| `references` | copied reference notes, guides, or background material from upstream | `references/PRINCIPLES.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [PRINCIPLES.md](references/PRINCIPLES.md)
- [PRINCIPLES.md](references/PRINCIPLES.md)

### Imported Reference Notes

#### Imported: Hands-on code exploration

Prefer directing users to files over showing code snippets. Having learners locate code themselves builds codebase familiarity.

**Adjust guidance based on demonstrated familiarity:**

- Early: "Open `src/middleware/auth.ts`, around line 45. What does `validateToken` return?"
- Later: "Find where we handle token refresh."
- Eventually: "Where would you look to change how session expiry works?"

After they locate code, prompt self-explanation:

"You found it. Before I say anything — what do you think this line does?"

#### Imported: Techniques to weave in naturally

- **"Why" questions:** "Why did we use a Map here instead of an object?"
- **Transfer prompts:** "This is the strategy pattern. Where else in this codebase might it apply?"
- **Varied context:** "We used this for auth — how would you apply it to API rate limiting?"
- **Error analysis:** "Here's a bug someone might introduce — what would go wrong and why?"

#### Imported: Anti-patterns to avoid

- Dumping multiple questions at once
- Softening wrong answers into ambiguity ("well, that's partially right...")
- Offering exercises more than twice per session
- Making exercises feel like tests rather than exploration
- Continuing to generate after posing a question

---
name: conductor-new-track-v2
description: "New Track workflow skill. Use this skill when the user needs Create a new track with specification and phased implementation plan and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["conductor-new-track-v2", "conductor-new-track", "create", "new", "track", "specification", "and", "phased"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# New Track

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/conductor-new-track` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# New Track Create a new track (feature, bug fix, chore, or refactor) with a detailed specification and phased implementation plan.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Pre-flight Checks, Track Classification, Interactive Specification Gathering, Track ID Generation, Specification Generation, Context.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on new track tasks or workflows
- Needing guidance, best practices, or checklists for new track
- The task is unrelated to new track
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Create a new track with specification and phased implementation plan.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Summary

{1-2 sentence summary}

#### Imported: Overview

{Brief summary of implementation approach}

#### Imported: Pre-flight Checks

1. Verify Conductor is initialized:
   - Check `conductor/product.md` exists
   - Check `conductor/tech-stack.md` exists
   - Check `conductor/workflow.md` exists
   - If missing: Display error and suggest running `/conductor:setup` first

2. Load context files:
   - Read `conductor/product.md` for product context
   - Read `conductor/tech-stack.md` for technical context
   - Read `conductor/workflow.md` for TDD/commit preferences

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @conductor-new-track-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/conductor-new-track-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/conductor-new-track-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @conductor-new-track-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/conductor-new-track`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Problem Description (for bugs)

{Bug description, steps to reproduce}

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

#### Imported: Track Classification

Determine track type based on description or ask user:

```
What type of track is this?

1. Feature - New functionality
2. Bug - Fix for existing issue
3. Chore - Maintenance, dependencies, config
4. Refactor - Code improvement without behavior change
```

#### Imported: Interactive Specification Gathering

**CRITICAL RULES:**

- Ask ONE question per turn
- Wait for user response before proceeding
- Tailor questions based on track type
- Maximum 6 questions total

### For Feature Tracks

**Q1: Feature Summary**

```
Describe the feature in 1-2 sentences.
[If argument provided, confirm: "You want to: {argument}. Is this correct?"]
```

**Q2: User Story**

```
Who benefits and how?

Format: As a [user type], I want to [action] so that [benefit].
```

**Q3: Acceptance Criteria**

```
What must be true for this feature to be complete?

List 3-5 acceptance criteria (one per line):
```

**Q4: Dependencies**

```
Does this depend on any existing code, APIs, or other tracks?

1. No dependencies
2. Depends on existing code (specify)
3. Depends on incomplete track (specify)
```

**Q5: Scope Boundaries**

```
What is explicitly OUT of scope for this track?
(Helps prevent scope creep)
```

**Q6: Technical Considerations (optional)**

```
Any specific technical approach or constraints?
(Press enter to skip)
```

### For Bug Tracks

**Q1: Bug Summary**

```
What is broken?
[If argument provided, confirm]
```

**Q2: Steps to Reproduce**

```
How can this bug be reproduced?
List steps:
```

**Q3: Expected vs Actual Behavior**

```
What should happen vs what actually happens?
```

**Q4: Affected Areas**

```
What parts of the system are affected?
```

**Q5: Root Cause Hypothesis (optional)**

```
Any hypothesis about the cause?
(Press enter to skip)
```

### For Chore/Refactor Tracks

**Q1: Task Summary**

```
What needs to be done?
[If argument provided, confirm]
```

**Q2: Motivation**

```
Why is this work needed?
```

**Q3: Success Criteria**

```
How will we know this is complete?
```

**Q4: Risk Assessment**

```
What could go wrong? Any risky changes?
```

#### Imported: Track ID Generation

Generate track ID in format: `{shortname}_{YYYYMMDD}`

- Extract shortname from feature/bug summary (2-3 words, lowercase, hyphenated)
- Use current date
- Example: `user-auth_20250115`, `nav-bug_20250115`

Validate uniqueness:

- Check `conductor/tracks.md` for existing IDs
- If collision, append counter: `user-auth_20250115_2`

#### Imported: Specification Generation

Create `conductor/tracks/{trackId}/spec.md`:

```markdown
# Specification: {Track Title}

**Track ID:** {trackId}
**Type:** {Feature|Bug|Chore|Refactor}
**Created:** {YYYY-MM-DD}
**Status:** Draft

#### Imported: Context

{Product context from product.md relevant to this track}

#### Imported: User Story (for features)

As a {user}, I want to {action} so that {benefit}.

#### Imported: Acceptance Criteria

- [ ] {Criterion 1}
- [ ] {Criterion 2}
- [ ] {Criterion 3}

#### Imported: Dependencies

{List dependencies or "None"}

#### Imported: Out of Scope

{Explicit exclusions}

#### Imported: Technical Notes

{Technical considerations or "None specified"}

---

_Generated by Conductor. Review and edit as needed._
```

#### Imported: User Review of Spec

Display the generated spec and ask:

```
Here is the specification I've generated:

{spec content}

Is this specification correct?
1. Yes, proceed to plan generation
2. No, let me edit (opens for inline edits)
3. Start over with different inputs
```

#### Imported: Plan Generation

After spec approval, generate `conductor/tracks/{trackId}/plan.md`:

### Plan Structure

```markdown
# Implementation Plan: {Track Title}

**Track ID:** {trackId}
**Spec:** spec.md
**Created:** {YYYY-MM-DD}
**Status:** [ ] Not Started

#### Imported: Phase 1: {Phase Name}

{Phase description}

### Tasks

- [ ] Task 1.1: {Description}
- [ ] Task 1.2: {Description}
- [ ] Task 1.3: {Description}

### Verification

- [ ] {Verification step for phase 1}

#### Imported: Phase 2: {Phase Name}

{Phase description}

### Tasks

- [ ] Task 2.1: {Description}
- [ ] Task 2.2: {Description}

### Verification

- [ ] {Verification step for phase 2}

#### Imported: Phase 3: {Phase Name} (if needed)

...

#### Imported: Final Verification

- [ ] All acceptance criteria met
- [ ] Tests passing
- [ ] Documentation updated (if applicable)
- [ ] Ready for review

---

_Generated by Conductor. Tasks will be marked [~] in progress and [x] complete._
```

### Phase Guidelines

- Group related tasks into logical phases
- Each phase should be independently verifiable
- Include verification task after each phase
- TDD tracks: Include test writing tasks before implementation tasks
- Typical structure:
  1. **Setup/Foundation** - Initial scaffolding, interfaces
  2. **Core Implementation** - Main functionality
  3. **Integration** - Connect with existing system
  4. **Polish** - Error handling, edge cases, docs

#### Imported: User Review of Plan

Display the generated plan and ask:

```
Here is the implementation plan:

{plan content}

Is this plan correct?
1. Yes, create the track
2. No, let me edit (opens for inline edits)
3. Add more phases/tasks
4. Start over
```

#### Imported: Track Creation

After plan approval:

1. Create directory structure:

   ```
   conductor/tracks/{trackId}/
   ├── spec.md
   ├── plan.md
   ├── metadata.json
   └── index.md
   ```

2. Create `metadata.json`:

   ```json
   {
     "id": "{trackId}",
     "title": "{Track Title}",
     "type": "feature|bug|chore|refactor",
     "status": "pending",
     "created": "ISO_TIMESTAMP",
     "updated": "ISO_TIMESTAMP",
     "phases": {
       "total": N,
       "completed": 0
     },
     "tasks": {
       "total": M,
       "completed": 0
     }
   }
   ```

3. Create `index.md`:

   ```markdown
   # Track: {Track Title}

   **ID:** {trackId}
   **Status:** Pending

   ## Documents

   - Specification
   - Implementation Plan

   ## Progress

   - Phases: 0/{N} complete
   - Tasks: 0/{M} complete

   ## Quick Links

   - Back to Tracks
   - Product Context
   ```

4. Register in `conductor/tracks.md`:
   - Add row to tracks table
   - Format: `| [ ] | {trackId} | {title} | {created} | {created} |`

5. Update `conductor/index.md`:
   - Add track to "Active Tracks" section

#### Imported: Completion Message

```
Track created successfully!

Track ID: {trackId}
Location: conductor/tracks/{trackId}/

Files created:
- spec.md - Requirements specification
- plan.md - Phased implementation plan
- metadata.json - Track metadata
- index.md - Track navigation

Next steps:
1. Review spec.md and plan.md, make any edits
2. Run /conductor:implement {trackId} to start implementation
3. Run /conductor:status to see project progress
```

#### Imported: Error Handling

- If directory creation fails: Halt and report, do not register in tracks.md
- If any file write fails: Clean up partial track, report error
- If tracks.md update fails: Warn user to manually register track

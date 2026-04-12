---
name: idea-darwin
description: "Idea Darwin Engine workflow skill. Use this skill when the user needs Darwinian idea evolution engine \u2014 toss rough ideas onto an evolution island, let them compete, crossbreed, and mutate through structured rounds to surface your strongest concepts and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["idea-darwin", "darwinian", "idea", "evolution", "engine", "toss", "rough", "ideas"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Idea Darwin Engine

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/idea-darwin` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Idea Darwin Engine A round-based idea iteration system that treats ideas as competing organisms — scoring, selecting, crossing, and evolving them through structured rounds to surface the strongest concepts.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Personal knowledge base that learns my style, Commute-to-podcast converter.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you have many scattered ideas and need to systematically evaluate and develop them
- Use when you want to discover unexpected connections between ideas from different domains
- Use when you need structured iteration rather than one-shot brainstorming
- Use when you want a scoring framework to prioritize which ideas deserve more investment
- Use when the request clearly matches the imported source intent: Darwinian idea evolution engine — toss rough ideas onto an evolution island, let them compete, crossbreed, and mutate through structured rounds to surface your strongest concepts.
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

1. Write Your Ideas Create an ideas.md file: ```markdown
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Write Your Ideas

Create an `ideas.md` file:

```markdown

#### Imported: Overview

Most idea management tools are filing cabinets: they store ideas, tag them, and let them rot. Idea Darwin flips the paradigm — instead of organizing ideas, it lets them **compete**. Every idea is a living species on an evolution island. Each round, the fittest get deepened, different ideas cross-pollinate to produce unexpected hybrids, and external stimuli trigger mutations.

#### Imported: Core Concepts

### Evolution Island Metaphor

Your ideas are alive on this island. Like organisms, they follow three core laws:

1. **Evolution** — Each round, the system deepens the most viable ideas through structured research: filling logical gaps, clarifying paths, identifying risks.
2. **Crossbreeding** — The system cross-pollinates different ideas. A technical approach from work meets an observation from daily life, producing directions you never imagined.
3. **Mutation** — External stimuli (industry news, theories, conversations) trigger mutations, spawning entirely new species.

### Species Cards

Every idea gets a structured card recording: core question, full description, lineage (parent/child IDs), 6-dimensional scores, and change history.

### 6-Dimensional Scoring

| Dimension | Weight | What It Measures |
|---|---|---|
| Novelty | 10% | Genuine breakthrough or repetition? |
| Feasibility | 20% | Technically and resource-wise achievable? |
| Value | 20% | Impact if successful? |
| Logic | 20% | Internally consistent, no gaps? |
| Cross Potential | 10% | Can spark something new when combined? |
| Verifiability | 20% | Can we design a validation path? |

### Idea Lifecycle

```
seed → exploring → refining → crossing → validated → dormant
```

The user always has final say on all life-or-death decisions. The system only recommends.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @idea-darwin to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/idea-darwin/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/idea-darwin/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @idea-darwin using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Initialize

```
/idea-darwin init --budget 8 --actions 3
```

### Example 2: Run Multiple Rounds

```
/idea-darwin round 3
```

### Example 3: Manage Ideas

```
/idea-darwin dormant IDEA-0005
/idea-darwin wake IDEA-0005
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Do: Write ideas as rough as you want — the system structures them
- Do: Add external stimuli to prevent idea convergence
- Do: Run disruption rounds to surface overlooked ideas
- Don't: Over-curate initial ideas — let evolution filter
- Don't: Ignore the "Decisions Needed" section in briefings
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- Do: Write ideas as rough as you want — the system structures them
- Do: Add external stimuli to prevent idea convergence
- Do: Run disruption rounds to surface overlooked ideas
- Don't: Over-curate initial ideas — let evolution filter
- Don't: Ignore the "Decisions Needed" section in briefings

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/idea-darwin`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Additional Resources

- [GitHub Repository](https://github.com/warmskull/idea-darwin)
- Available in 3 languages: English, Chinese, Japanese
- ClawHub: `clawhub install idea-darwin`

#### Imported: Personal knowledge base that learns my style

I want a system that reads everything I write and gradually learns how I think.

#### Imported: Commute-to-podcast converter

Record voice memos during my commute, auto-convert them into podcast scripts.
```

### 2. Initialize Your Island

```
/idea-darwin init
```

### 3. Start Evolving

```
/idea-darwin round
```

### 4. Keep Feeding the Island

Append new ideas to `ideas.md`, add environmental variables to `stimuli.md`.

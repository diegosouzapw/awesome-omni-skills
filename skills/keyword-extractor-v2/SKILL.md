---
name: keyword-extractor-v2
description: "Keyword Extractor workflow skill. Use this skill when the user needs > and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: machine-learning
tags: ["keyword-extractor-v2", "keyword-extractor", "machine-learning", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Keyword Extractor

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/keyword-extractor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Keyword Extractor Extracts max 50 relevant keywords from text and formats them in a strict machine-ready structure. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Extracting keywords or tags for any given text or paragraph
- Creating comma-separated keywords or tags suitable for SEO, search, or metadata
- Generating topic-specific keywords or tags based on the content’s main subjects and concepts
- Summaries or paraphrasing requests
- Text analysis without keyword generation
- SEO and search

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

1. main subject
2. key topics
3. domain terminology
4. entities
5. concepts
6. core topics
7. related concepts

### Imported Workflow Notes

#### Imported: Step 1 — Analyze

Identify:
- main subject
- key topics
- domain terminology
- entities
- concepts

Ignore filler words.

---

#### Imported: Step 2 — Generate Keywords

Generate up to 50 strictly SEO-friendly keywords directly from the text.

Include:
- core topics
- domain terminology
- related concepts
- common search queries

Allowed formats:
- single words
- 2 word phrases
- 3 word phrases
- 4 word phrases

Example:
```machine learning, neural networks, deep learning models, ai algorithms, data science tools```

Avoid vague keywords, filler phrases, adjectives without nouns like:
```important methods, different ideas, various techniques, things```

Keywords must not exceed 4 words.

---

#### Imported: Step 3 — Rank

Order keywords by SEO importance using these signals:
1. main topic of the text
2. high-value domain terminology
3. technologies, tools, or entities mentioned
4. common search queries related to the topic
5. supporting contextual topics

Most important keywords should always appear first.

---

#### Imported: Step 4 — Normalize

Ensure:
- lowercase, comma separated, no duplicates
- ≤50 keywords
- Remove near-duplicate keywords that represent the same concept.
- Keep only the most common search phrase.
- If two keywords represent the same concept, keep only the more common search phrase.

---

#### Imported: Step 5 — Validate

Before returning output ensure:
- keyword_count <= 50
- no duplicates and near-duplicates
- all lowercase and comma separated
- no trailing period
- each keyword is a clear searchable topic
- keywords do not exceed 4 words

If any rule fails regenerate the list.

---

# FAILURE HANDLING

If text is very short, infer likely topics and still generate keywords. Never exceed 50 keywords.

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @keyword-extractor-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/keyword-extractor-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/keyword-extractor-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @keyword-extractor-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: QUICK START

Jump to any section:
1. [CORE MANDATE](#core-mandate) – Output rules and formatting 
2. [WHEN TO USE](#when-to-use) – Trigger conditions for this skill 
3. [KEYWORD QUALITY RULES](#keyword-quality-rules) – Priorities and forbidden keywords 
4. [WORKFLOW](#workflow) – Step-by-step generation and processing 
5. [FAILURE HANDLING](#failure-handling) – Short text or edge cases 

---

# CORE MANDATE

Return **exactly one comma-separated line** of keywords, following these rules:
- max 50 keywords  
- ordered by relevance  
- all lowercase  
- no duplicates or near-duplicates  
- mix of single words and 2–4 word phrases  
- no numbering, bullets, explanations, or trailing period

---

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/keyword-extractor`, fails to mention provenance, or does not use the support pack at all.
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

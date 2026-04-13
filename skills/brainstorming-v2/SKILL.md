---
name: brainstorming-v2
description: "Brainstorming Ideas Into Designs workflow skill. Use this skill when the user needs Use before creative or constructive work (features, architecture, behavior). Transforms vague ideas into validated designs through disciplined reasoning and collaboration and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["brainstorming-v2", "brainstorming", "use", "creative", "constructive", "work", "features", "architecture"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Brainstorming Ideas Into Designs

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/brainstorming` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Brainstorming Ideas Into Designs

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Operating Mode, After the Design, Exit Criteria (Hard Stop Conditions), Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Use before creative or constructive work (features, architecture, behavior). Transforms vague ideas into validated designs through disciplined reasoning and collaboration.
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

1. Review the current project state (if available):
2. files
3. documentation
4. plans
5. prior decisions
6. Identify what already exists vs. what is proposed
7. Note constraints that appear implicit but unconfirmed

### Imported Workflow Notes

#### Imported: The Process

### 1️⃣ Understand the Current Context (Mandatory First Step)

Before asking any questions:

- Review the current project state (if available):
  - files
  - documentation
  - plans
  - prior decisions
- Identify what already exists vs. what is proposed
- Note constraints that appear implicit but unconfirmed

**Do not design yet.**

---

### 2️⃣ Understanding the Idea (One Question at a Time)

Your goal here is **shared clarity**, not speed.

**Rules:**

- Ask **one question per message**
- Prefer **multiple-choice questions** when possible
- Use open-ended questions only when necessary
- If a topic needs depth, split it into multiple questions

Focus on understanding:

- purpose  
- target users  
- constraints  
- success criteria  
- explicit non-goals  

---

### 3️⃣ Non-Functional Requirements (Mandatory)

You MUST explicitly clarify or propose assumptions for:

- Performance expectations  
- Scale (users, data, traffic)  
- Security or privacy constraints  
- Reliability / availability needs  
- Maintenance and ownership expectations  

If the user is unsure:

- Propose reasonable defaults  
- Clearly mark them as **assumptions**

---

### 4️⃣ Understanding Lock (Hard Gate)

Before proposing **any design**, you MUST pause and do the following:

#### Understanding Summary
Provide a concise summary (5–7 bullets) covering:
- What is being built  
- Why it exists  
- Who it is for  
- Key constraints  
- Explicit non-goals  

#### Assumptions
List all assumptions explicitly.

#### Open Questions
List unresolved questions, if any.

Then ask:

> “Does this accurately reflect your intent?  
> Please confirm or correct anything before we move to design.”

**Do NOT proceed until explicit confirmation is given.**

---

### 5️⃣ Explore Design Approaches

Once understanding is confirmed:

- Propose **2–3 viable approaches**
- Lead with your **recommended option**
- Explain trade-offs clearly:
  - complexity
  - extensibility
  - risk
  - maintenance
- Avoid premature optimization (**YAGNI ruthlessly**)

This is still **not** final design.

---

### 6️⃣ Present the Design (Incrementally)

When presenting the design:

- Break it into sections of **200–300 words max**
- After each section, ask:

  > “Does this look right so far?”

Cover, as relevant:

- Architecture  
- Components  
- Data flow  
- Error handling  
- Edge cases  
- Testing strategy  

---

### 7️⃣ Decision Log (Mandatory)

Maintain a running **Decision Log** throughout the design discussion.

For each decision:
- What was decided  
- Alternatives considered  
- Why this option was chosen  

This log should be preserved for documentation.

---

#### Imported: Purpose

Turn raw ideas into **clear, validated designs and specifications**
through structured dialogue **before any implementation begins**.

This skill exists to prevent:
- premature implementation
- hidden assumptions
- misaligned solutions
- fragile systems

You are **not allowed** to implement, code, or modify behavior while this skill is active.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @brainstorming-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/brainstorming-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/brainstorming-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @brainstorming-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- One question at a time
- Assumptions must be explicit
- Explore alternatives
- Validate incrementally
- Prefer clarity over cleverness
- Be willing to go back and clarify
- YAGNI ruthlessly

### Imported Operating Notes

#### Imported: Key Principles (Non-Negotiable)

- One question at a time  
- Assumptions must be explicit  
- Explore alternatives  
- Validate incrementally  
- Prefer clarity over cleverness  
- Be willing to go back and clarify  
- **YAGNI ruthlessly**

---
If the design is high-impact, high-risk, or requires elevated confidence, you MUST hand off the finalized design and Decision Log to the `multi-agent-brainstorming` skill before implementation.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/brainstorming`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Operating Mode

You are operating as a **design facilitator and senior reviewer**, not a builder.

- No creative implementation  
- No speculative features  
- No silent assumptions  
- No skipping ahead  

Your job is to **slow the process down just enough to get it right**.

---

#### Imported: After the Design

### 📄 Documentation

Once the design is validated:

- Write the final design to a durable, shared format (e.g. Markdown)
- Include:
  - Understanding summary
  - Assumptions
  - Decision log
  - Final design

Persist the document according to the project’s standard workflow.

---

### 🛠️ Implementation Handoff (Optional)

Only after documentation is complete, ask:

> “Ready to set up for implementation?”

If yes:
- Create an explicit implementation plan
- Isolate work if the workflow supports it
- Proceed incrementally

---

#### Imported: Exit Criteria (Hard Stop Conditions)

You may exit brainstorming mode **only when all of the following are true**:

- Understanding Lock has been confirmed  
- At least one design approach is explicitly accepted  
- Major assumptions are documented  
- Key risks are acknowledged  
- Decision Log is complete  

If any criterion is unmet:
- Continue refinement  
- **Do NOT proceed to implementation**

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

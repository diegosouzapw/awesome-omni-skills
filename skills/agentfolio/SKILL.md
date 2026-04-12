---
name: agentfolio
description: "AgentFolio workflow skill. Use this skill when the user needs Skill for discovering and researching autonomous AI agents, tools, and ecosystems using the AgentFolio directory and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["agentfolio", "for", "discovering", "and", "researching", "autonomous", "tools", "ecosystems"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# AgentFolio

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/agentfolio` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# AgentFolio Role: Autonomous Agent Discovery Guide Use this skill when you want to discover, compare, and research autonomous AI agents across ecosystems. AgentFolio is a curated directory at https://agentfolio.io that tracks agent frameworks, products, and tools. This skill helps you: - Find existing agents before building your own from scratch. - Map the landscape of agent frameworks and hosted products. - Collect concrete examples and benchmarks for agent capabilities.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, How to Use AgentFolio.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- At the start of a new agent or workflow project.
- When evaluating vendors or tools to integrate.
- When you want inspiration or best practices from existing agent products.
- Use when the request clearly matches the imported source intent: Skill for discovering and researching autonomous AI agents, tools, and ecosystems using the AgentFolio directory.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Define the problem: “autonomous test failure triage for CI pipelines”.
2. Use AgentFolio to search for:
3. “testing agent”, “CI agent”, “DevOps assistant”, “incident triage”.
4. For each relevant agent:
5. Note supported platforms (GitHub, GitLab, Jenkins, etc.).
6. Capture how they explain autonomy and safety boundaries.
7. Record pricing/licensing constraints if you plan to adopt instead of build.

### Imported Workflow Notes

#### Imported: Example Workflows

### 1) Landscape scan before building a new agent

- Define the problem: “autonomous test failure triage for CI pipelines”.
- Use AgentFolio to search for:
  - “testing agent”, “CI agent”, “DevOps assistant”, “incident triage”.
- For each relevant agent:
  - Note supported platforms (GitHub, GitLab, Jenkins, etc.).
  - Capture how they explain autonomy and safety boundaries.
  - Record pricing/licensing constraints if you plan to adopt instead of build.

### 2) Competitive and inspiration research for a new skill

- If you plan to add a new skill (e.g., observability agent, security agent):
  - Use AgentFolio to find similar agents and features.
  - Extract 3–5 concrete patterns you want to emulate or avoid.
  - Translate those patterns into clear requirements for your own skill.

### 3) Vendor shortlisting

- When choosing between multiple agent vendors:
  - Use AgentFolio entries as a neutral directory.
  - Build a comparison table (columns: capabilities, integrations, pricing, trust & security).
  - Use that table to drive a more formal evaluation or proof-of-concept.

#### Imported: Capabilities

- Discover autonomous AI agents, frameworks, and tools by use case.
- Compare agents by capabilities, target users, and integration surfaces.
- Identify gaps in the market or inspiration for new skills/workflows.
- Gather example agent behavior and UX patterns for your own designs.
- Track emerging trends in agent architectures and deployments.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @agentfolio to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/agentfolio/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/agentfolio/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @agentfolio using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Prompts

Use these prompts when working with this skill in an AI coding agent:

- “Use AgentFolio to find 3 autonomous AI agents focused on code review. For each, summarize the core value prop, supported languages, and how they integrate into developer workflows.”
- “Scan AgentFolio for agents that help with customer support triage. List the top options, their target customer size (SMB vs. enterprise), and any notable UX patterns.”
- “Before we build our own research assistant, use AgentFolio to map existing research / analysis agents and highlight gaps we could fill.”

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/agentfolio`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: How to Use AgentFolio

1. **Open the directory**
   - Visit `https://agentfolio.io` in your browser.
   - Optionally filter by category (e.g., Dev Tools, Ops, Marketing, Productivity).

2. **Search by intent**
   - Start from the problem you want to solve:  
     - “customer support agents”  
     - “autonomous coding agents”  
     - “research / analysis agents”
   - Use keywords in the AgentFolio search bar that match your domain or workflow.

3. **Evaluate candidates**
   - For each interesting agent, capture:
     - **Core promise** (what outcome it automates).
     - **Input / output shape** (APIs, UI, data sources).
     - **Autonomy model** (one-shot, multi-step, tool-using, human-in-the-loop).
     - **Deployment model** (SaaS, self-hosted, browser, IDE, etc.).

4. **Synthesize insights**
   - Use findings to:
     - Decide whether to integrate an existing agent vs. build your own.
     - Borrow successful UX and safety patterns.
     - Position your own agent skills and workflows relative to the ecosystem.

---
name: skill-router-v2
description: "Skill Router workflow skill. Use this skill when the user needs the user is unsure which skill to use or where to start. Interviews the user with targeted questions and recommends the best skill(s) from the installed library for their goal and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["skill-router-v2", "skill-router", "the", "user", "unsure", "which", "use", "where"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Skill Router

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/skill-router` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Skill Router

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Goal, Constraints, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The user says "I don't know where to start" or "which skill should I use"
- The user has a vague goal without a clear method
- The user asks "what should I use for..." or "I'm not sure how to approach this"
- The user is new to the skill library and needs guidance
- Use when the request clearly matches the imported source intent: the user is unsure which skill to use or where to start. Interviews the user with targeted questions and recommends the best skill(s) from the installed library for their goal.
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

1. Building / coding something (app, feature, component, script)
2. Fixing or debugging something that's broken
3. Security, pentesting, or vulnerability assessment
4. AI agents, LLMs, or automation pipelines
5. Marketing, SEO, content, or growth
6. DevOps, infrastructure, deployment, or git
7. Design, UI/UX, or creative output

### Imported Workflow Notes

#### Imported: Instructions

### Step 1 — Acknowledge and open the interview

Respond warmly and tell the user you'll ask a few quick questions to find
the right skill for them. Do NOT suggest any skills yet.

Example opener:
> "No problem — let me ask you a few quick questions so I can point you to
> exactly the right skill."

---

### Step 2 — Ask the Funnel Questions (one at a time, in order)

Ask only what you need. If an earlier answer makes a later question
irrelevant, skip it.

**Q1 — What is the broad area of the task?**
Present these as numbered options:
1. Building / coding something (app, feature, component, script)
2. Fixing or debugging something that's broken
3. Security, pentesting, or vulnerability assessment
4. AI agents, LLMs, or automation pipelines
5. Marketing, SEO, content, or growth
6. DevOps, infrastructure, deployment, or git
7. Design, UI/UX, or creative output
8. Planning, strategy, or documentation
9. Something else (ask them to describe it)

**Q2 — How specific is the task?**
1. I have a clear spec / I know exactly what I want built
2. I have a rough idea but need help shaping it
3. I'm totally starting from scratch with no clear direction

**Q3 — What tech stack or domain is involved?** (only ask if relevant)
Examples: React / Next.js, Node.js, Python, AWS, Stripe, AI/LLM, no-code, etc.
If they say "not sure" or "any", that's fine — move on.

**Q4 — Do you want to work autonomously (agent does everything) or
collaboratively (you stay in the loop)?**
1. Fully autonomous — just go
2. Collaborative — I want to review/approve steps
3. Not sure yet

---

### Step 3 — Recommend skills

Based on their answers, recommend **1 primary skill** and up to **2 secondary
skills**. Structure your recommendation exactly like this:

**✅ Primary Skill: `@skill-name`**
*Why:* [1–2 sentences explaining why this is the best fit for what they described]
*Invoke it like this:*
```
@skill-name [paste their goal here]
```

**🔁 Also consider:**
- `@skill-name-2` — [one sentence on when to layer this in]
- `@skill-name-3` — [one sentence on when to layer this in]

---

### Step 4 — Offer a ready-made prompt

After the recommendation, offer to write them a ready-to-use prompt they
can paste directly into Antigravity. Ask:

> "Want me to write the full prompt for you so you can just paste it in?"

If yes, compose a complete, specific prompt using the recommended skill and
everything you learned about their goal from the interview.

---

#### Imported: Goal

Help users who are unsure of what they want to do or which skill to use.
Interview them with a short structured conversation, then recommend the most
relevant skill(s) from the installed library — with a clear explanation of
why each skill fits and exactly how to invoke it.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skill-router-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/skill-router-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/skill-router-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @skill-router-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Interaction

```
User: @skill-router I want to build something but I'm not sure where to start

Agent: No problem — let me ask a few quick questions.
       What is the broad area?
       (1) Building  (2) Debugging  (3) Security  (4) AI/LLM
       (5) Marketing  (6) DevOps  (7) Design  (8) Planning

User: 1 - building something

Agent: How specific is the task?
       (1) Clear spec  (2) Rough idea  (3) Starting from scratch

User: 2 - rough idea

Agent: What tech stack? (React, Node, Python, etc. — or "not sure")

User: Next.js

Agent: ✅ Primary Skill: @brainstorming
       Why: You have a rough idea that needs shaping before building.
       Brainstorming asks structured questions and produces a clear spec.

       @brainstorming help me design a [your app idea] using Next.js

       🔁 Also consider:
       - @plan-writing — once brainstorming produces a spec, break it into tasks
       - @senior-fullstack — when you are ready to start building

       Want me to write the full prompt for you?
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/skill-router`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Skill Routing Reference

### Building a full product or app from scratch
- Primary: `@app-builder`
- If they want to plan first: `@brainstorming` → `@plan-writing` → `@app-builder`
- If they want it fully autonomous: `@loki-mode`

### Building a specific frontend feature / UI
- Primary: `@senior-fullstack` or `@frontend-design`
- Stack-specific: `@react-patterns`, `@nextjs-best-practices`, `@tailwind-patterns`
- If they want a full design system: `@ui-ux-pro-max` + `@core-components`

### Building a backend API or service
- Primary: `@backend-dev-guidelines`
- Stack-specific: `@nodejs-best-practices`, `@python-patterns`, `@nestjs-expert`
- API design: `@api-patterns`
- Database: `@database-design` + `@prisma-expert`

### Debugging something broken
- Primary: `@systematic-debugging`
- If tests are failing: `@test-fixing`
- If it's a code quality issue: `@clean-code`

### Writing tests / TDD
- Primary: `@tdd`
- For Playwright/browser tests: `@playwright-skill`
- For Jest patterns: `@testing-patterns`

### Integrating a third-party service
- Payments: `@stripe-integration`
- Auth: `@clerk-auth` or `@nextjs-supabase-auth`
- Database: `@neon-postgres` or `@firebase`
- Messaging: `@twilio-communications`
- Bots: `@slack-bot-builder`, `@discord-bot-architect`, `@telegram-bot-builder`
- File storage: `@file-uploads`
- Analytics: `@analytics-tracking`

### AI / LLM / agents
- Architecture: `@ai-agents-architect`
- RAG pipelines: `@rag-engineer`
- Prompts: `@prompt-engineer`
- Multi-agent: `@langgraph` or `@crewai`
- Observability: `@langfuse`
- Voice: `@voice-agents`

### Security / pentesting
- Start here: `@ethical-hacking-methodology` + `@pentest-checklist`
- Web app testing: `@burp-suite-testing`, `@sql-injection-testing`, `@xss-html-injection`
- Network/infra: `@aws-penetration-testing`, `@linux-privilege-escalation`
- Reference: `@top-web-vulnerabilities`

### DevOps / infrastructure / deployment
- Docker: `@docker-expert`
- Cloud: `@aws-serverless`, `@gcp-cloud-run`, `@vercel-deployment`
- Git workflow: `@git-pushing`, `@using-git-worktrees`, `@github-workflow-automation`
- Scripting: `@linux-shell-scripting`

### Marketing / growth / SEO
- Copy: `@copywriting`
- Landing pages: `@page-cro`
- SEO: `@seo-fundamentals` + `@seo-audit`
- Email: `@email-sequence`
- Ads: `@paid-ads`
- Launch: `@launch-strategy`

### Planning / architecture / strategy
- Quick plan: `@concise-planning`
- Full plan: `@plan-writing` → `@executing-plans`
- Architecture: `@software-architecture` or `@senior-architect`
- Product strategy: `@product-manager-toolkit`

### Creative / design / visuals
- UI: `@frontend-design`
- Data viz: `@claude-d3js-skill`
- Generative art: `@algorithmic-art`
- Presentations: `@pptx-official`

### Fully autonomous / parallel execution
- Full startup mode: `@loki-mode`
- Independent parallel tasks: `@dispatching-parallel-agents`
- Plan then execute: `@subagent-driven-development`

### Document creation
- Word doc: `@docx-official`
- PDF: `@pdf-official`
- Spreadsheet: `@xlsx-official`
- Presentation: `@pptx-official`

---

#### Imported: Constraints

- Never recommend more than 1 primary skill and 2 secondary skills at a time.
- Always include the exact `@invoke` syntax so users can copy-paste it.
- If the user's goal spans multiple categories, pick the most upstream skill
  (e.g. `@brainstorming` before `@senior-fullstack`).
- Do not overwhelm the user with the full skill list. Recommend only what is
  relevant to their specific answers.
- If the user is totally lost, default to `@brainstorming` for open-ended
  goals, or `@app-builder` for anything involving building something.
- After recommending, always offer to write a ready-made prompt for them.

---

#### Imported: Limitations

- Only recommends skills from the installed library. If a skill is not
  installed, the recommendation may not work.
- Routing is based on natural language matching. Highly ambiguous goals
  may require follow-up clarification.
- Does not execute the recommended skill — it only recommends it. The user
  must invoke the skill themselves.
- The routing reference covers the most common skills but does not include
  every skill in the library.

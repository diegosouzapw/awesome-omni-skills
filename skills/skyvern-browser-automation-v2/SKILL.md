---
name: skyvern-browser-automation-v2
description: "Skyvern Browser Automation -- CLI Judgment Procedure workflow skill. Use this skill when the user needs AI-powered browser automation \u2014 navigate sites, fill forms, extract structured data, log in with stored credentials, and build reusable workflows and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["browser-automation", "mcp", "web-scraping", "form-filling", "ai-agents", "workflow-automation", "skyvern-browser-automation-v2", "skyvern-browser-automation"]
complexity: advanced
risk: caution
tools: ["cursor", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "mark1ian"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Skyvern Browser Automation -- CLI Judgment Procedure

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/skyvern-browser-automation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Skyvern Browser Automation -- CLI Judgment Procedure Skyvern uses AI to navigate and interact with websites. Every command below is a runnable skyvern <command> invocation.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Credentials, Common Patterns, Limitations, Agent Mode.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when you need AI-assisted browser automation for navigation, extraction, form filling, login flows, or reusable website workflows.
- Use when deterministic selectors are unavailable and Skyvern's visual/a11y reasoning can identify page controls.
- Use when a one-off browser task should become a repeatable workflow with run history and verification.
- Use when the request clearly matches the imported source intent: AI-powered browser automation — navigate sites, fill forms, extract structured data, log in with stored credentials, and build reusable workflows.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Classification - Signal - CLI Command - Cost - What Happens
2. Quick check (yes/no) - "is the user logged in?" - skyvern browser validate - 1 LLM + screenshots - Lightweight validation (2 steps max), returns boolean. Cheapest AI option.
3. Quick inspection - "what does the page show?" - skyvern browser extract - 1 LLM + screenshots - Dedicated extraction LLM + schema validation + caching.
4. Single action (known target) - "click #submit" - skyvern browser click/type - 0 LLM - Deterministic Playwright. No AI. Fastest.
5. Single action (unknown target) - "click the submit button" - skyvern browser act - 2-3 LLM, no screenshots - No screenshots in reasoning. Economy a11y tree. For visual targets, use hybrid mode (selector + intent).
6. Same-page multi-step - "fill the form and submit" - skyvern browser act or primitive chain - 2-3 LLM or 0 LLM - Use act when labels are clear. Use click/type/select directly when you know selectors.
7. Throwaway autonomous trial - "try this once", "see if this works" - skyvern browser run-task - Higher - One-off autonomous agent for exploration. Do not use for recurring or multi-page production automations.

### Imported Workflow Notes

#### Imported: Step 1: Classify Your Task (ALWAYS do this first)

| Classification | Signal | CLI Command | Cost | What Happens |
|---|---|---|---|---|
| Quick check (yes/no) | "is the user logged in?" | `skyvern browser validate` | 1 LLM + screenshots | Lightweight validation (2 steps max), returns boolean. Cheapest AI option. |
| Quick inspection | "what does the page show?" | `skyvern browser extract` | 1 LLM + screenshots | Dedicated extraction LLM + schema validation + caching. |
| Single action (known target) | "click #submit" | `skyvern browser click/type` | 0 LLM | Deterministic Playwright. No AI. Fastest. |
| Single action (unknown target) | "click the submit button" | `skyvern browser act` | 2-3 LLM, no screenshots | No screenshots in reasoning. Economy a11y tree. For visual targets, use hybrid mode (selector + intent). |
| Same-page multi-step | "fill the form and submit" | `skyvern browser act` or primitive chain | 2-3 LLM or 0 LLM | Use `act` when labels are clear. Use click/type/select directly when you know selectors. |
| Throwaway autonomous trial | "try this once", "see if this works" | `skyvern browser run-task` | Higher | One-off autonomous agent for exploration. Do not use for recurring or multi-page production automations. |
| Multi-page or reusable automation | "navigate a multi-page wizard", "set this up", "automate this weekly" | `skyvern workflow create` + `run` | N LLM + screenshots | Build a workflow with one block per step. Each block gets visual reasoning, verification, and reusable run history. |

**MCP note:** if you are using the Skyvern MCP instead of the CLI, prefer `observe + execute` for same-page multi-step UI work. The CLI does not expose that pair directly.

#### Imported: Step 2: Apply These Decision Rules

1. If the prompt includes a selector, id, XPath, or exact field target, use browser primitives -- not `act`.
2. If you only need a yes/no answer, use `validate` -- not `extract` or `act`.
3. If the work stays on one page and labels are clear, use `act` or a primitive chain.
4. If the user says `try this once`, `see if this works`, or clearly wants a one-off exploratory trial, use `run-task`.
5. If the task spans multiple pages and is meant to be reusable, scheduled, repeatable, or explicitly `set up` as automation, use `workflow create`.
6. Never type passwords. Always use stored credentials with `skyvern browser login`.

#### Imported: Step 3: Create a Session

Every browser command needs a session. Create one first:

```bash
# Cloud session (default -- works for public URLs)
skyvern browser session create --timeout 30

# Local session (for localhost URLs or self-hosted mode)
skyvern browser session create --local --timeout 30

# Connect to existing browser via CDP
skyvern browser session connect --cdp "ws://localhost:9222"
```

Session state persists between commands. After `session create`, subsequent commands auto-attach.
Override with `--session pbs_...`. Close when done: `skyvern browser session close`.

#### Imported: Step 4: Execute by Classification

### Quick check (yes/no)

```bash
skyvern browser validate --prompt "Is the user logged in? Look for a dashboard or avatar."
```

Returns true/false. Cheapest AI option -- prefer over extract or act for boolean checks.

### Quick inspection

```bash
skyvern browser extract \
  --prompt "Extract all product names and prices" \
  --schema '{"type":"object","properties":{"items":{"type":"array","items":{"type":"object","properties":{"name":{"type":"string"},"price":{"type":"string"}}}}}}'
```

Uses screenshots + dedicated extraction LLM. Better than screenshot+read because Skyvern's LLM interprets the page.

### Single action (known target)

```bash
skyvern browser click --selector "#submit-btn"
skyvern browser type --text "user@co.com" --selector "#email"
skyvern browser select --value "US" --intent "the country dropdown"
```

Deterministic. No AI. Three targeting modes:
1. **Intent**: `--intent "the Submit button"` (AI finds element)
2. **Selector**: `--selector "#submit-btn"` (CSS/XPath, deterministic)
3. **Hybrid**: both (selector narrows, AI confirms)

### Single action (unknown target)

```bash
skyvern browser act --prompt "Click the Sign In button"
skyvern browser act --prompt "Close the cookie banner, then click Sign In"
```

**Warning:** act has NO screenshots in its LLM reasoning. It uses an economy accessibility tree.
Fine for well-labeled elements. For visually complex targets, use MCP observe+click or hybrid mode.

### Same-page multi-step

```bash
skyvern browser act --prompt "Fill the shipping form and click Continue"
```

Use `act` when the fields and buttons are clearly labeled and the flow stays on one page.
If you need tighter control, break the work into `click`, `type`, `select`, `press-key`, and `wait`.

### Throwaway autonomous trial

```bash
skyvern browser run-task \
  --url "https://example.com" \
  --prompt "Check whether the checkout flow works end to end and extract the confirmation number"
```

Use `run-task` to prove feasibility or do one-off exploration. If the task becomes important enough
to rerun, debug, or share, convert it to a workflow.

### Multi-page or reusable automation — build a workflow with one block per step

```bash
skyvern workflow create --definition @checkout-workflow.yaml
skyvern workflow run --id wpid_123 --wait
skyvern workflow status --run-id wr_789
```

Each navigation block runs with visual reasoning + verification. Split complex flows into
multiple blocks (one per page/step). First run uses AI; subsequent runs replay cached scripts.

### Repeated/production

```bash
skyvern workflow create --definition @workflow.yaml
skyvern workflow run --id wpid_123 --params '{"email":"user@co.com"}'
skyvern workflow status --run-id wr_789
```

Split into one block per step. Use **navigation** blocks for actions, **extraction** for data.
First run uses AI; subsequent runs replay a cached script (10-100x faster).
Set `--run-with agent` to force AI mode for debugging.

#### Imported: Step 5: Verify

Always verify after page-changing actions:

```bash
skyvern browser screenshot                          # visual check
skyvern browser validate --prompt "Was the form submitted successfully?"  # boolean assertion
skyvern browser evaluate --expression "document.title"                    # JS state check
```

#### Imported: Step 6: Error Recovery

| Problem | Fix |
|---------|-----|
| Action clicked wrong element | Add context to prompt. Use hybrid mode (selector + intent). |
| Extraction returns empty | Wait for content. Relax required fields. Check row count first. |
| Login passes but next step fails | Ensure same session. Add post-login validate check. |
| Element not found | Add wait: `skyvern browser wait --selector "#el" --state visible` |
| Overloaded prompt | Split into smaller goals -- one intent per command. |

#### Imported: Workflow Quick Reference

```bash
skyvern workflow create --definition @workflow.yaml   # create
skyvern workflow run --id wpid_123 --wait             # run and wait
skyvern workflow status --run-id wr_789               # check status
skyvern workflow list --search "invoice"              # find workflows
skyvern block schema --type navigation                # discover block types
skyvern block validate --block-json @block.json       # validate before creating
```

Engine: known path = 1.0 (default). Dynamic planning = 2.0. Split into multiple 1.0 blocks when in doubt.
Status lifecycle: `created -> queued -> running -> completed | failed | canceled | terminated | timed_out`

#### Imported: Credentials

NEVER type passwords through `skyvern browser type` or `act`. Always use stored credentials:

```bash
skyvern credentials add --name "my-login" --type password --username "user@co.com"
skyvern credential list                          # find the credential ID
skyvern browser login --url "https://login.example.com" --credential-id cred_123
```

Types: `password`, `credit_card`, `secret`. Also supports bitwarden, 1password, and azure_vault providers.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @skyvern-browser-automation-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @skyvern-browser-automation-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @skyvern-browser-automation-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @skyvern-browser-automation-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/skyvern-browser-automation`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@skill-router-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-seekers-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-sentinel-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-writer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Deep-Dive References

| Reference | Content |
|-----------|---------|
| [`references/prompt-writing.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/prompt-writing.md) | Prompt templates and anti-patterns |
| [`references/engines.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/engines.md) | When to use tasks vs workflows |
| [`references/schemas.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/schemas.md) | JSON schema patterns for extraction |
| [`references/pagination.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/pagination.md) | Pagination strategy and guardrails |
| [`references/block-types.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/block-types.md) | Workflow block type details with examples |
| [`references/parameters.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/parameters.md) | Parameter design and variable usage |
| [`references/ai-actions.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/ai-actions.md) | AI action patterns and examples |
| [`references/precision-actions.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/precision-actions.md) | Intent-only, selector-only, hybrid modes |
| [`references/credentials.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/credentials.md) | Credential naming, lifecycle, safety |
| [`references/sessions.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/sessions.md) | Session reuse and freshness decisions |
| [`references/common-failures.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/common-failures.md) | Failure pattern catalog with fixes |
| [`references/screenshots.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/screenshots.md) | Screenshot-led debugging workflow |
| [`references/status-lifecycle.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/status-lifecycle.md) | Run status states and guidance |
| [`references/rerun-playbook.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/rerun-playbook.md) | Rerun procedures and comparison |
| [`references/complex-inputs.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/complex-inputs.md) | Date pickers, uploads, dropdowns |
| [`references/tool-map.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/tool-map.md) | Complete tool inventory by outcome |
| [`references/cli-parity.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/cli-parity.md) | CLI/MCP mapping and agent-aware features |
| [`references/quick-start-patterns.md`](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/quick-start-patterns.md) | Quick start examples, common patterns, and workflow templates |

#### Imported: Common Patterns

**Login flow:**
```bash
skyvern credential list                          # find credential ID
skyvern browser session create
skyvern browser navigate --url "https://login.example.com"
skyvern browser login --url "https://login.example.com" --credential-id cred_123
skyvern browser validate --prompt "Is the user logged in?"
skyvern browser screenshot
```

**Pagination loop:**
```bash
skyvern browser extract --prompt "Extract all rows"
skyvern browser validate --prompt "Is there a Next button that is not disabled?"
# If true:
skyvern browser act --prompt "Click the Next page button"
# Repeat extraction. Stop when: no next button, duplicate first row, or max page limit.
```

**Debugging:**
```bash
skyvern browser screenshot                       # visual state
skyvern browser evaluate --expression "document.title"
skyvern browser evaluate --expression "document.querySelectorAll('table tr').length"
```

#### Imported: Limitations

- Do not use Skyvern to bypass site access controls, rate limits, consent gates, or terms that prohibit automation.
- Browser automation can change remote state; confirm user intent before submitting forms, purchasing, deleting, or sending messages.
- Prefer deterministic selectors for stable production flows; AI actions can misread unlabeled or visually ambiguous controls.
- Store credentials only in the supported credential vaults and never type passwords directly through `type` or `act`.

#### Imported: Agent Mode

All commands accept `--json` for structured output. Set `SKYVERN_NON_INTERACTIVE=1` to prevent prompts.
Use `skyvern capabilities --json` for full command discovery. See [references/agent-mode.md](https://github.com/Skyvern-AI/skyvern/blob/main/skyvern/cli/skills/skyvern/references/agent-mode.md).

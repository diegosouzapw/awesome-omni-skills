---
name: go-playwright-v2
description: "Playwright Go Automation Expert workflow skill. Use this skill when the user needs Expert capability for robust, stealthy, and efficient browser automation using Playwright Go and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["go-playwright-v2", "go-playwright", "expert", "capability", "for", "robust", "stealthy", "and"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Playwright Go Automation Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/go-playwright` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Playwright Go Automation Expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety & Risk, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user asks to "scrape," "automate," or "test" a website using Go.
- Use when the target site has complex dynamic content (SPA, React, Vue) requiring a real browser.
- Use when the user mentions "stealth," "avoiding detection," "cloudflare," or "human-like" behavior.
- Use when debugging existing Playwright scripts.
- Use when the request clearly matches the imported source intent: Expert capability for robust, stealthy, and efficient browser automation using Playwright Go.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

This skill provides a comprehensive framework for writing high-performance, production-grade browser automation scripts using `github.com/playwright-community/playwright-go`. It enforces architectural best practices (contexts over instances), robust error handling, structured logging (Zap), and advanced human-emulation techniques to bypass anti-bot systems.

#### Imported: Safety & Risk

**Risk Level: 🔵 Safe**

- **Sandboxed Execution:** Browser contexts are isolated; they do not persist data to the host machine unless explicitly saved.
- **Resource Management:** Designed to close browsers and contexts via `defer` to prevent memory leaks.
- **No External State-Change:** Default behavior is read-only (scraping/testing) unless the script is explicitly designed to submit forms or modify data.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @go-playwright-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/go-playwright-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/go-playwright-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @go-playwright-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Pattern: Launch the Browser once (singleton). Create a new BrowserContext for each distinct session or task.
- Why: Contexts are lightweight and created in milliseconds. Browsers take seconds to launch.
- Isolation: Contexts provide complete isolation (cookies, cache, storage) without the overhead of a new process.
- Library: Use go.uber.org/zap exclusively.
- Rule: Do not use fmt.Println.
- Modes:
- Dev: zap.NewDevelopment() (Console friendly)

### Imported Operating Notes

#### Imported: Strategic Implementation Guidelines

### 1. Architecture: Contexts vs. Browsers
**CRITICAL:** Never launch a new `Browser` instance for every task.
- **Pattern:** Launch the `Browser` *once* (singleton). Create a new `BrowserContext` for each distinct session or task.
- **Why:** Contexts are lightweight and created in milliseconds. Browsers take seconds to launch.
- **Isolation:** Contexts provide complete isolation (cookies, cache, storage) without the overhead of a new process.

### 2. Logging & Observability
- **Library:** Use `go.uber.org/zap` exclusively.
- **Rule:** Do not use `fmt.Println`.
- **Modes:**
  - **Dev:** `zap.NewDevelopment()` (Console friendly)
  - **Prod:** `zap.NewProduction()` (JSON structured)
- **Traceability:** Log every navigation, click, and input with context fields (e.g., `logger.Info("clicking button", zap.String("selector", sel))`).

### 3. Error Handling & Stability
- **Graceful Shutdown:** Always use `defer` to close Pages, Contexts, and Browsers.
- **Panic Recovery:** Wrap critical automation routines in a safe runner that recovers panics and logs the stack trace.
- **Timeouts:** Never rely on default timeouts. Set explicit timeouts (e.g., `playwright.PageClickOptions{Timeout: playwright.Float(5000)}`).

### 4. Stealth & Human-Like Behavior
To bypass anti-bot systems (Cloudflare, Akamai), the generated code must **imitate human physiology**:
- **Non-Linear Mouse Movement:** Never teleport the mouse. Implement a helper that moves the mouse along a Bezier curve with random jitter.
- **Input Latency:** never use `Fill()`. Use `Type()` with random delays between keystrokes (50ms–200ms).
- **Viewport Randomization:** Randomize the viewport size slightly (e.g., 1920x1080 ± 15px) to avoid fingerprinting.
- **Behavioral Noise:** Randomly scroll, focus/unfocus the window, or hover over irrelevant elements ("idling") during long waits.
- **User-Agent:** Rotate User-Agents for every new Context.

### 5. Documentation Usage
- **Primary Source:** Rely on your internal knowledge of the API first to save tokens.
- **Fallback:** Refer to the official docs [playwright-go documentation](https://pkg.go.dev/github.com/playwright-community/playwright-go#section-documentation) ONLY if:
  - You encounter an unknown error.
  - You need to implement complex network interception or authentication flows.
  - The API has changed significantly.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/go-playwright`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Resources

- `resources/implementation-playbook.md` for detailed code examples and implementation patterns.

### Summary Checklist for Agent
 - Is Debug Mode on? -> `Headless=false`, `SlowMo=100+`.
 - Is it a new user identity? -> `NewContext`, apply new Proxy, rotate `User-Agent`.
 - Is the action critical? -> Wrap in `SafeAction` with Zap logging.
 - Is the target guarded (Cloudflare/Akamai)? -> Enable `HumanType`, `BezierMouse`, and Stealth Scripts.

#### Imported: Limitations

- **Environment Dependencies:** Requires Playwright drivers and browsers to be installed (`go run github.com/playwright-community/playwright-go/cmd/playwright@latest install --with-deps`).
- **Resource Intensity:** Launching full browser instances (even headless) consumes significant RAM/CPU. Use single-browser/multi-context architecture.
- **Bot Detection:** While this skill includes stealth techniques, extremely strict anti-bot systems (e.g., rigorous Cloudflare settings) may still detect automation.
- **CAPTCHAs:** Does not include built-in CAPTCHA solving capabilities.

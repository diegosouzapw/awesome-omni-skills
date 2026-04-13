---
name: chrome-extension-developer-v2
description: "chrome-extension-developer workflow skill. Use this skill when the user needs Expert in building Chrome Extensions using Manifest V3. Covers background scripts, service workers, content scripts, and cross-context communication and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["chrome-extension-developer-v2", "chrome-extension-developer", "expert", "building", "chrome", "extensions", "using", "manifest"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# chrome-extension-developer

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/chrome-extension-developer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

You are a senior Chrome Extension Developer specializing in modern extension architecture, focusing on Manifest V3, cross-script communication, and production-ready security practices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Designing and building new Chrome Extensions from scratch
- Migrating extensions from Manifest V2 to Manifest V3
- Implementing service workers, content scripts, or popup/options pages
- Debugging cross-context communication (message passing)
- Implementing extension-specific APIs (storage, permissions, alarms, side panel)
- The task is for Safari App Extensions (use safari-extension-expert if available)

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

1. Manifest V3 Only: Always prioritize Service Workers over Background Pages.
2. Context Separation: Clearly distinguish between Service Workers (background), Content Scripts (DOM-accessible), and UI contexts (popups, options).
3. Message Passing: Use chrome.runtime.sendMessage and chrome.tabs.sendMessage for reliable communication. Always use the responseCallback.
4. Permissions: Follow the principle of least privilege. Use optional_permissions where possible.
5. Storage: Use chrome.storage.local or chrome.storage.sync for persistent data instead of localStorage.
6. Declarative APIs: Use declarativeNetRequest for network filtering/modification.
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Instructions

1. **Manifest V3 Only**: Always prioritize Service Workers over Background Pages.
2. **Context Separation**: Clearly distinguish between Service Workers (background), Content Scripts (DOM-accessible), and UI contexts (popups, options).
3. **Message Passing**: Use `chrome.runtime.sendMessage` and `chrome.tabs.sendMessage` for reliable communication. Always use the `responseCallback`.
4. **Permissions**: Follow the principle of least privilege. Use `optional_permissions` where possible.
5. **Storage**: Use `chrome.storage.local` or `chrome.storage.sync` for persistent data instead of `localStorage`.
6. **Declarative APIs**: Use `declarativeNetRequest` for network filtering/modification.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @chrome-extension-developer-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/chrome-extension-developer-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/chrome-extension-developer-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @chrome-extension-developer-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Basic Manifest V3 Structure

```json
{
  "manifest_version": 3,
  "name": "My Agentic Extension",
  "version": "1.0.0",
  "action": {
    "default_popup": "popup.html"
  },
  "background": {
    "service_worker": "background.js"
  },
  "content_scripts": [
    {
      "matches": ["https://*.example.com/*"],
      "js": ["content.js"]
    }
  ],
  "permissions": ["storage", "activeTab"]
}
```

### Example 2: Message Passing Policy

```javascript
// background.js (Service Worker)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "GREET_AGENT") {
    console.log("Received message from content script:", message.data);
    sendResponse({ status: "ACK", reply: "Hello from Background" });
  }
  return true; // Keep message channel open for async response
});
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Use chrome.runtime.onInstalled for extension initialization.
- ✅ Do: Use modern ES modules in scripts if configured in manifest.
- ✅ Do: Validate external input in content scripts before acting on it.
- ❌ Don't: Use innerHTML or eval() - prefer textContent and safe DOM APIs.
- ❌ Don't: Block the main thread in the service worker; it must remain responsive.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `chrome.runtime.onInstalled` for extension initialization.
- ✅ **Do:** Use modern ES modules in scripts if configured in manifest.
- ✅ **Do:** Validate external input in content scripts before acting on it.
- ❌ **Don't:** Use `innerHTML` or `eval()` - prefer `textContent` and safe DOM APIs.
- ❌ **Don't:** Block the main thread in the service worker; it must remain responsive.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/chrome-extension-developer`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** Service worker becomes inactive.
**Solution:** Background service workers are ephemeral. Use `chrome.alarms` for scheduled tasks rather than `setTimeout` or `setInterval` which may be killed.

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

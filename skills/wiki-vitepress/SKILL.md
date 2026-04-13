---
name: wiki-vitepress
description: "Wiki VitePress Packager workflow skill. Use this skill when the user needs Transform generated wiki Markdown files into a polished VitePress static site with dark theme and interactive Mermaid diagrams. Use when user asks to \\\"build a site\\\" or \\\"package as VitePress\\\", user runs the /deep-wiki, or user wants a browsable HTML output from generated wiki pages and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["wiki-vitepress", "transform", "generated", "wiki", "markdown", "files", "polished", "vitepress"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Wiki VitePress Packager

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/wiki-vitepress` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Wiki VitePress Packager Transform generated wiki Markdown files into a polished VitePress static site with dark theme and interactive Mermaid diagrams.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: VitePress Scaffolding, Config Requirements (`config.mts`), Dark-Mode Mermaid: Three-Layer Fix, Click-to-Zoom for Mermaid Diagrams, Build, Known Gotchas.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User asks to "build a site" or "package as VitePress"
- User runs the /deep-wiki:build command
- User wants a browsable HTML output from generated wiki pages
- Use when the request clearly matches the imported source intent: Transform generated wiki Markdown files into a polished VitePress static site with dark theme and interactive Mermaid diagrams. Use when user asks to \"build a site\" or \"package as VitePress\", user runs the....
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

1. Replace <br/> with <br> (Vue template compiler compatibility)
2. Wrap bare <T> generic parameters in backticks outside code fences
3. Ensure every page has YAML frontmatter with title and description
4. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
5. Read the overview, playbook, and source summary before loading any upstream support files.
6. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
7. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.

### Imported Workflow Notes

#### Imported: Post-Processing Rules

Before VitePress build, scan all `.md` files and fix:
- Replace `<br/>` with `<br>` (Vue template compiler compatibility)
- Wrap bare `<T>` generic parameters in backticks outside code fences
- Ensure every page has YAML frontmatter with `title` and `description`

#### Imported: VitePress Scaffolding

Generate the following structure in a `wiki-site/` directory:

```
wiki-site/
├── .vitepress/
│   ├── config.mts
│   └── theme/
│       ├── index.ts
│       └── custom.css
├── public/
├── [generated .md pages]
├── package.json
└── index.md
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @wiki-vitepress to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/wiki-vitepress/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/wiki-vitepress/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @wiki-vitepress using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/wiki-vitepress`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Config Requirements (`config.mts`)

- Use `withMermaid` wrapper from `vitepress-plugin-mermaid`
- Set `appearance: 'dark'` for dark-only theme
- Configure `themeConfig.nav` and `themeConfig.sidebar` from the catalogue structure
- Mermaid config must set dark theme variables:

```typescript
mermaid: {
  theme: 'dark',
  themeVariables: {
    primaryColor: '#1e3a5f',
    primaryTextColor: '#e0e0e0',
    primaryBorderColor: '#4a9eed',
    lineColor: '#4a9eed',
    secondaryColor: '#2d4a3e',
    tertiaryColor: '#2d2d3d',
    background: '#1a1a2e',
    mainBkg: '#1e3a5f',
    nodeBorder: '#4a9eed',
    clusterBkg: '#16213e',
    titleColor: '#e0e0e0',
    edgeLabelBackground: '#1a1a2e'
  }
}
```

#### Imported: Dark-Mode Mermaid: Three-Layer Fix

### Layer 1: Theme Variables (in config.mts)
Set via `mermaid.themeVariables` as shown above.

### Layer 2: CSS Overrides (`custom.css`)
Target Mermaid SVG elements with `!important`:

```css
.mermaid .node rect,
.mermaid .node circle,
.mermaid .node polygon { fill: #1e3a5f !important; stroke: #4a9eed !important; }
.mermaid .edgeLabel { background-color: #1a1a2e !important; color: #e0e0e0 !important; }
.mermaid text { fill: #e0e0e0 !important; }
.mermaid .label { color: #e0e0e0 !important; }
```

### Layer 3: Inline Style Replacement (`theme/index.ts`)
Mermaid inline `style` attributes override everything. Use `onMounted` + polling to replace them:

```typescript
import { onMounted } from 'vue'

// In setup()
onMounted(() => {
  let attempts = 0
  const fix = setInterval(() => {
    document.querySelectorAll('.mermaid svg [style]').forEach(el => {
      const s = (el as HTMLElement).style
      if (s.fill && !s.fill.includes('#1e3a5f')) s.fill = '#1e3a5f'
      if (s.stroke && !s.stroke.includes('#4a9eed')) s.stroke = '#4a9eed'
      if (s.color) s.color = '#e0e0e0'
    })
    if (++attempts >= 20) clearInterval(fix)
  }, 500)
})
```

Use `setup()` with `onMounted`, NOT `enhanceApp()` — DOM doesn't exist during SSR.

#### Imported: Click-to-Zoom for Mermaid Diagrams

Wrap each `.mermaid` container in a clickable wrapper that opens a fullscreen modal:

```typescript
document.querySelectorAll('.mermaid').forEach(el => {
  el.style.cursor = 'zoom-in'
  el.addEventListener('click', () => {
    const modal = document.createElement('div')
    modal.className = 'mermaid-zoom-modal'
    modal.innerHTML = el.outerHTML
    modal.addEventListener('click', () => modal.remove())
    document.body.appendChild(modal)
  })
})
```

Modal CSS:
```css
.mermaid-zoom-modal {
  position: fixed; inset: 0;
  background: rgba(0,0,0,0.9);
  display: flex; align-items: center; justify-content: center;
  z-index: 9999; cursor: zoom-out;
}
.mermaid-zoom-modal .mermaid { transform: scale(1.5); }
```

#### Imported: Build

```bash
cd wiki-site && npm install && npm run docs:build
```

Output goes to `wiki-site/.vitepress/dist/`.

#### Imported: Known Gotchas

- Mermaid renders async — SVGs don't exist when `onMounted` fires. Must poll.
- `isCustomElement` compiler option for bare `<T>` causes worse crashes — do NOT use it
- Node text in Mermaid uses inline `style` with highest specificity — CSS alone won't fix it
- `enhanceApp()` runs during SSR where `document` doesn't exist — use `setup()` only

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

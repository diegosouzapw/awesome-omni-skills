---
name: makepad-platform
description: "Makepad Platform Skill workflow skill. Use this skill when the user needs | and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["makepad-platform", "frontend", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Makepad Platform Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/makepad-platform` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Makepad Platform Skill > Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets You are an expert at Makepad cross-platform development. Help users by: - Understanding platforms: Explain supported platforms and backends - Platform-specific code: Help with conditional compilation and platform APIs

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation, IMPORTANT: Documentation Completeness Check, Supported Platforms, OsType Enum, Platform Detection, Conditional Compilation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to understand or target specific platforms and graphics backends in Makepad.
- The task involves platform compatibility, conditional compilation, or OS-specific behavior across desktop, mobile, or web.
- You need guidance on backend differences such as Metal, D3D11, OpenGL, WebGL, or platform modules.
- Makepad compiles to native code for each platform (no runtime interpreter)
- Shaders are compiled at build time for each graphics backend
- Platform-specific code is in platform/src/os/ directory

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

#### Imported: Documentation

Refer to the local files for detailed documentation:
- `./references/platform-support.md` - Platform details and OsType

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-platform to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/makepad-platform/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/makepad-platform/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @makepad-platform using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/makepad-platform`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: IMPORTANT: Documentation Completeness Check

**Before answering questions, Claude MUST:**

1. Read the relevant reference file(s) listed above
2. If file read fails or file is empty:
   - Inform user: "本地文档不完整，建议运行 `/sync-crate-skills makepad --force` 更新文档"
   - Still answer based on SKILL.md patterns + built-in knowledge
3. If reference file exists, incorporate its content into the answer

#### Imported: Supported Platforms

| Platform | Graphics Backend | OS Module |
|----------|------------------|-----------|
| macOS | Metal | `apple/metal_*.rs`, `apple/cocoa_*.rs` |
| iOS | Metal | `apple/metal_*.rs`, `apple/ios_*.rs` |
| Windows | D3D11 | `mswindows/d3d11_*.rs`, `mswindows/win32_*.rs` |
| Linux | OpenGL | `linux/opengl_*.rs`, `linux/x11*.rs`, `linux/wayland*.rs` |
| Web | WebGL2 | `web/*.rs`, `web_browser/*.rs` |
| Android | OpenGL ES | `android/*.rs` |
| OpenHarmony | OHOS | `open_harmony/*.rs` |
| OpenXR | VR/AR | `open_xr/*.rs` |

#### Imported: OsType Enum

```rust
pub enum OsType {
    Unknown,
    Windows,
    Macos,
    Linux { custom_window_chrome: bool },
    Ios,
    Android(AndroidParams),
    OpenHarmony,
    Web(WebParams),
    OpenXR,
}

// Check platform in code
fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
    match cx.os_type() {
        OsType::Macos => { /* macOS-specific */ }
        OsType::Windows => { /* Windows-specific */ }
        OsType::Web(_) => { /* Web-specific */ }
        _ => {}
    }
}
```

#### Imported: Platform Detection

```rust
// In Cx
impl Cx {
    pub fn os_type(&self) -> OsType;
    pub fn gpu_info(&self) -> &GpuInfo;
    pub fn xr_capabilities(&self) -> &XrCapabilities;
    pub fn cpu_cores(&self) -> usize;
}
```

#### Imported: Conditional Compilation

```rust
// Compile-time platform detection
#[cfg(target_os = "macos")]
fn macos_only() { }

#[cfg(target_os = "windows")]
fn windows_only() { }

#[cfg(target_os = "linux")]
fn linux_only() { }

#[cfg(target_arch = "wasm32")]
fn web_only() { }

#[cfg(target_os = "android")]
fn android_only() { }

#[cfg(target_os = "ios")]
fn ios_only() { }
```

#### Imported: Platform-Specific Features

### Desktop (macOS/Windows/Linux)
- Window management (resize, minimize, maximize)
- File dialogs
- System menu
- Drag and drop
- Multiple monitors

### Mobile (iOS/Android)
- Touch input
- Virtual keyboard
- Screen orientation
- App lifecycle (foreground/background)

### Web (WebGL2)
- DOM integration
- Browser events
- Local storage
- HTTP requests

#### Imported: Entry Point

```rust
// App entry macro
app_main!(App);

pub struct App {
    ui: WidgetRef,
}

impl LiveRegister for App {
    fn live_register(cx: &mut Cx) {
        // Register components
        crate::makepad_widgets::live_design(cx);
    }
}

impl AppMain for App {
    fn handle_event(&mut self, cx: &mut Cx, event: &Event) {
        // Handle app events
        self.ui.handle_event(cx, event, &mut Scope::empty());
    }
}
```

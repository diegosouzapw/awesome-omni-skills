---
name: makepad-font-v2
description: "Makepad Font Skill workflow skill. Use this skill when the user needs | and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["makepad-font-v2", "makepad-font", "frontend", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Makepad Font Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/makepad-font` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Makepad Font Skill > Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets You are an expert at Makepad text and font rendering. Help users by: - Font configuration: Font families, sizes, styles - Text layout: Understanding text layouter and shaping - Text rendering: GPU-based text rendering with SDF

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation, IMPORTANT: Documentation Completeness Check, Text Module Structure, Using Fonts in DSL, Font Definition in DSL, Layouter API.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Makepad uses SDF (Signed Distance Field) for crisp text at any scale
- Fonts are loaded once and cached in GPU texture atlases
- Text shaping uses harfbuzz for proper glyph positioning
- Use dep("crate://...") for embedded font resources
- Default font cache size is 4096 glyphs
- Atlas sizes: 4096x4096 for grayscale, 2048x2048 for color (emoji)

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
- `./references/font-system.md` - Font module structure and APIs

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-font-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/makepad-font-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/makepad-font-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @makepad-font-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/makepad-font`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Text Module Structure

```
draw/src/text/
├── font.rs           # Font handle and metrics
├── font_atlas.rs     # GPU texture atlas for glyphs
├── font_face.rs      # Font face data
├── font_family.rs    # Font family management
├── fonts.rs          # Built-in fonts
├── glyph_outline.rs  # Glyph vector outlines
├── glyph_raster_image.rs # Rasterized glyph images
├── layouter.rs       # Text layout engine
├── rasterizer.rs     # Glyph rasterization
├── sdfer.rs          # Signed distance field generator
├── selection.rs      # Text selection/cursor
├── shaper.rs         # Text shaping (harfbuzz)
```

#### Imported: Using Fonts in DSL

### Text Style

```rust
<Label> {
    text: "Hello World"
    draw_text: {
        text_style: {
            font: { path: dep("crate://self/resources/fonts/MyFont.ttf") }
            font_size: 16.0
            line_spacing: 1.5
            letter_spacing: 0.0
        }
        color: #FFFFFF
    }
}
```

### Theme Fonts

```rust
<Label> {
    text: "Styled Text"
    draw_text: {
        text_style: <THEME_FONT_REGULAR> {
            font_size: (THEME_FONT_SIZE_P)
        }
    }
}
```

#### Imported: Font Definition in DSL

```rust
live_design! {
    // Define font path
    FONT_REGULAR = {
        font: { path: dep("crate://self/resources/fonts/Regular.ttf") }
    }

    FONT_BOLD = {
        font: { path: dep("crate://self/resources/fonts/Bold.ttf") }
    }

    // Use in widget
    <Label> {
        draw_text: {
            text_style: <FONT_REGULAR> {
                font_size: 14.0
            }
        }
    }
}
```

#### Imported: Layouter API

```rust
pub struct Layouter {
    loader: Loader,
    cache_size: usize,
    cached_params: VecDeque<OwnedLayoutParams>,
    cached_results: HashMap<OwnedLayoutParams, Rc<LaidoutText>>,
}

impl Layouter {
    pub fn new(settings: Settings) -> Self;
    pub fn rasterizer(&self) -> &Rc<RefCell<Rasterizer>>;
    pub fn is_font_family_known(&self, id: FontFamilyId) -> bool;
    pub fn define_font_family(&mut self, id: FontFamilyId, definition: FontFamilyDefinition);
    pub fn define_font(&mut self, id: FontId, definition: FontDefinition);
    pub fn get_or_layout(&mut self, params: impl LayoutParams) -> Rc<LaidoutText>;
}
```

#### Imported: Layout Parameters

```rust
pub struct OwnedLayoutParams {
    pub text: Substr,
    pub spans: Box<[Span]>,
    pub options: LayoutOptions,
}

pub struct Span {
    pub style: Style,
    pub len: usize,
}

pub struct Style {
    pub font_family_id: FontFamilyId,
    pub font_size_in_pts: f32,
    pub color: Option<Color>,
}

pub struct LayoutOptions {
    pub max_width_in_lpxs: Option<f32>,  // Max width for wrapping
    pub wrap: bool,                       // Enable word wrap
    pub first_row_indent_in_lpxs: f32,    // First line indent
}
```

#### Imported: Rasterizer Settings

```rust
pub struct Settings {
    pub loader: loader::Settings,
    pub cache_size: usize,  // Default: 4096
}

pub struct rasterizer::Settings {
    pub sdfer: sdfer::Settings {
        padding: 4,     // SDF padding
        radius: 8.0,    // SDF radius
        cutoff: 0.25,   // SDF cutoff
    },
    pub grayscale_atlas_size: Size::new(4096, 4096),
    pub color_atlas_size: Size::new(2048, 2048),
}
```

#### Imported: DrawText Widget

```rust
<View> {
    // Label is a simple text widget
    <Label> {
        text: "Simple Label"
        draw_text: {
            color: #FFFFFF
            text_style: {
                font_size: 14.0
            }
        }
    }

    // TextFlow for rich text
    <TextFlow> {
        <Bold> { text: "Bold text" }
        <Italic> { text: "Italic text" }
        <Link> {
            text: "Click here"
            href: "https://example.com"
        }
    }
}
```

#### Imported: Text Properties

| Property | Type | Description |
|----------|------|-------------|
| `text` | String | Text content |
| `font` | Font | Font resource |
| `font_size` | f64 | Size in points |
| `line_spacing` | f64 | Line height multiplier |
| `letter_spacing` | f64 | Character spacing |
| `color` | Vec4 | Text color |
| `brightness` | f64 | Text brightness |
| `curve` | f64 | Text curve effect |

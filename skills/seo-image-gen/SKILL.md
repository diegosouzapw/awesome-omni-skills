---
name: seo-image-gen
description: "SEO Image Gen: AI Image Generation for SEO Assets (Extension) workflow skill. Use this skill when the user needs Generate SEO-focused images such as OG cards, hero images, schema assets, product visuals, and infographics. Use when image generation is part of an SEO workflow or content publishing task and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["seo-image-gen", "generate", "seo-focused", "images", "such", "cards", "hero", "schema"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SEO Image Gen: AI Image Generation for SEO Assets (Extension)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-image-gen` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SEO Image Gen: AI Image Generation for SEO Assets (Extension) Generate production-ready images for SEO use cases using Gemini's image generation via the banana Creative Director pipeline. Maps SEO needs to optimized domain modes, aspect ratios, and resolution defaults.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Architecture Note, Prerequisites, SEO Image Use Cases, Generation Pipeline, Post-Generation SEO Checklist, Cost Awareness.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when generating OG images, hero images, schema visuals, infographics, or similar SEO assets.
- Use when image generation is part of a broader SEO or publishing workflow.
- Use only when the required image-generation extension is available.
- Use when the request clearly matches the imported source intent: Generate SEO-focused images such as OG cards, hero images, schema assets, product visuals, and infographics. Use when image generation is part of an SEO workflow or content publishing task.
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Architecture Note

This skill has two components with distinct roles:
- **SKILL.md** (this file): Handles interactive `/seo image-gen` commands for generating images
- **Agent** (`agents/seo-image-gen.md`): Audit-only analyst spawned during `/seo audit` to assess existing OG/social images and produce a generation plan (never auto-generates)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-image-gen to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-image-gen/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-image-gen/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-image-gen using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-image-gen`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Quick Reference

| Command | What it does |
|---------|-------------|
| `/seo image-gen og <description>` | Generate OG/social preview image (1200x630 feel) |
| `/seo image-gen hero <description>` | Blog hero image (widescreen, dramatic) |
| `/seo image-gen product <description>` | Product photography (clean, white BG) |
| `/seo image-gen infographic <description>` | Infographic visual (vertical, data-heavy) |
| `/seo image-gen custom <description>` | Custom image with full Creative Director pipeline |
| `/seo image-gen batch <description> [N]` | Generate N variations (default: 3) |

#### Imported: Reference Documentation

Load on-demand. Do NOT load all at startup:
- `references/prompt-engineering.md`:6-component system, domain modes, templates
- `references/gemini-models.md`:Model specs, rate limits, capabilities
- `references/mcp-tools.md`:MCP tool parameters and responses
- `references/post-processing.md`:ImageMagick/FFmpeg pipeline recipes
- `references/cost-tracking.md`:Pricing, usage tracking
- `references/presets.md`:Brand preset management
- `references/seo-image-presets.md`:SEO-specific preset templates

#### Imported: Prerequisites

This skill requires the banana extension to be installed:
```bash
./extensions/banana/install.sh
```

**Check availability:** Before using any image generation tool, verify the MCP server
is connected by checking if `gemini_generate_image` or `set_aspect_ratio` tools are
available. If tools are not available, inform the user the extension is not installed
and provide install instructions.

#### Imported: SEO Image Use Cases

Each use case maps to pre-configured banana parameters:

| Use Case | Aspect Ratio | Resolution | Domain Mode | Notes |
|----------|-------------|------------|-------------|-------|
| **OG/Social Preview** | `16:9` | `1K` | Product or UI/Web | Clean, professional, text-friendly |
| **Blog Hero** | `16:9` | `2K` | Cinema or Editorial | Dramatic, atmospheric, editorial quality |
| **Schema Image** | `4:3` | `1K` | Product | Clean, descriptive, schema ImageObject |
| **Social Square** | `1:1` | `1K` | UI/Web | Platform-optimized square |
| **Product Photo** | `4:3` | `2K` | Product | White background, studio lighting |
| **Infographic** | `2:3` | `4K` | Infographic | Data-heavy, vertical layout |
| **Favicon/Icon** | `1:1` | `512` | Logo | Minimal, scalable, recognizable |
| **Pinterest Pin** | `2:3` | `2K` | Editorial | Tall vertical card |

#### Imported: Generation Pipeline

For every generation request:

1. **Identify use case** from command or context (og, hero, product, etc.)
2. **Apply SEO defaults** from the use cases table above
3. **Set aspect ratio** via `set_aspect_ratio` MCP tool
4. **Construct Reasoning Brief** using the banana Creative Director pipeline:
   - Load `references/prompt-engineering.md` for the 6-component system
   - Apply domain mode emphasis (Subject 30%, Style 25%, Context 15%, etc.)
   - Be SPECIFIC and VISCERAL: describe what the camera sees
5. **Generate** via `gemini_generate_image` MCP tool
6. **Post-generation SEO checklist** (see below)

### Check for Presets

If the user mentions a brand or has SEO presets configured:
```bash
python3 ~/.claude/skills/seo-image-gen/scripts/presets.py list
```
Load matching preset and apply as defaults. Also check `references/seo-image-presets.md`
for SEO-specific preset templates.

#### Imported: Post-Generation SEO Checklist

After every successful generation, guide the user on:

1. **Alt text**:Write descriptive, keyword-rich alt text for the generated image
2. **File naming**:Rename to SEO-friendly format: `keyword-description-widthxheight.webp`
3. **WebP conversion**:Convert to WebP for optimal page speed:
   ```bash
   magick output.png -quality 85 output.webp
   ```
4. **File size**:Target under 200KB for hero images, under 100KB for thumbnails
5. **Schema markup**:Suggest `ImageObject` schema for the generated image:
   ```json
   {
     "@type": "ImageObject",
     "url": "https://example.com/images/keyword-description.webp",
     "width": 1200,
     "height": 630,
     "caption": "Descriptive caption with target keyword"
   }
   ```
6. **OG meta tags**:For social preview images, remind about:
   ```html
   <meta property="og:image" content="https://example.com/images/og-image.webp" />
   <meta property="og:image:width" content="1200" />
   <meta property="og:image:height" content="630" />
   <meta property="og:image:alt" content="Descriptive alt text" />
   ```

#### Imported: Cost Awareness

Image generation costs money. Be transparent:
- Show estimated cost before generating (especially for batch)
- Log every generation: `python3 ~/.claude/skills/seo-image-gen/scripts/cost_tracker.py log --model MODEL --resolution RES --prompt "brief"`
- Run `cost_tracker.py summary` if user asks about usage

Approximate costs (gemini-3.1-flash):
- 512: ~$0.02/image
- 1K resolution: ~$0.04/image
- 2K resolution: ~$0.08/image
- 4K resolution: ~$0.16/image

#### Imported: Model Routing

| Scenario | Model | Why |
|----------|-------|-----|
| OG images, social previews | `gemini-3.1-flash-image-preview` @ 1K | Fast, cost-effective |
| Hero images, product photos | `gemini-3.1-flash-image-preview` @ 2K | Quality + detail |
| Infographics with text | `gemini-3.1-flash-image-preview` @ 2K, thinking: high | Better text rendering |
| Quick drafts | `gemini-2.5-flash-image` @ 512 | Rapid iteration |

#### Imported: Error Handling

| Error | Resolution |
|-------|-----------|
| MCP not configured | Run `./extensions/banana/install.sh` |
| API key invalid | New key at https://aistudio.google.com/apikey |
| Rate limited (429) | Wait 60s, retry. Free tier: ~10 RPM / ~500 RPD |
| `IMAGE_SAFETY` | Rephrase prompt - see `references/prompt-engineering.md` Safety section |
| MCP unavailable | Fall back: `python3 ~/.claude/skills/seo-image-gen/scripts/generate.py --prompt "..." --aspect-ratio "16:9"` |
| Extension not installed | Show install instructions: `./extensions/banana/install.sh` |

#### Imported: Cross-Skill Integration

- **seo-images** (analysis) feeds into **seo-image-gen** (generation): audit results from `/seo images` identify missing or low-quality images; use those findings to drive `/seo image-gen` commands
- **seo-audit** spawns the seo-image-gen **agent** (not this skill) to analyze OG/social images across the site and produce a prioritized generation plan
- **seo-schema** can consume generated images: after generation, suggest `ImageObject` schema markup pointing to the new assets

#### Imported: Response Format

After generating, always provide:
1. **Image path**:where it was saved
2. **Crafted prompt**:show what was sent to the API (educational)
3. **Settings**:model, aspect ratio, resolution
4. **SEO checklist**:alt text suggestion, file naming, WebP conversion
5. **Schema snippet**:ImageObject or og:image markup if applicable

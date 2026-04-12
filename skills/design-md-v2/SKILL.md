---
name: design-md-v2
description: "Stitch DESIGN.md Skill workflow skill. Use this skill when the user needs Analyze Stitch projects and synthesize a semantic design system into DESIGN.md files and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: design
tags: ["design-md-v2", "design-md", "analyze", "stitch", "projects", "and", "synthesize", "semantic"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Stitch DESIGN.md Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/design-md` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Stitch DESIGN.md Skill You are an expert Design Systems Lead. Your goal is to analyze the provided technical assets and synthesize a "Semantic Design System" into a file named DESIGN.md.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, The Goal, Retrieval and Networking, Analysis & Synthesis Instructions, Output Format (DESIGN.md Structure), 1. Visual Theme & Atmosphere.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Analyzing Stitch projects
- Creating DESIGN.md files
- Synthesizing semantic design systems
- Working with Stitch design language
- Generating design documentation for Stitch projects
- Use when the request clearly matches the imported source intent: Analyze Stitch projects and synthesize a semantic design system into DESIGN.md files.

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

This skill helps you create `DESIGN.md` files that serve as the "source of truth" for prompting Stitch to generate new screens that align perfectly with existing design language. Stitch interprets design through "Visual Descriptions" supported by specific color values.

#### Imported: Prerequisites

- Access to the Stitch MCP Server
- A Stitch project with at least one designed screen
- Access to the Stitch Effective Prompting Guide: https://stitch.withgoogle.com/docs/learn/prompting/

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @design-md-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/design-md-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/design-md-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @design-md-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Usage Example

To use this skill for the Furniture Collection project:

1. **Retrieve project information:**
   ```
   Use the Stitch MCP Server to get the Furniture Collection project
   ```

2. **Get the Home page screen details:**
   ```
   Retrieve the Home page screen's code, image, and screen object information
   ```

3. **Reference best practices:**
   ```
   Review the Stitch Effective Prompting Guide at:
   https://stitch.withgoogle.com/docs/learn/prompting/
   ```

4. **Analyze and synthesize:**
   - Extract all relevant design tokens from the screen
   - Translate technical values into descriptive language
   - Organize information according to the DESIGN.md structure

5. **Generate the file:**
   - Create `DESIGN.md` in the project directory
   - Follow the prescribed format exactly
   - Ensure all color codes are accurate
   - Use evocative, designer-friendly language

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Language: Use descriptive design terminology and natural language exclusively
- Format: Generate a clean Markdown file following the structure below
- Precision: Include exact hex codes for colors while using descriptive names
- Context: Explain the "why" behind design decisions, not just the "what"
- Be Descriptive: Avoid generic terms like "blue" or "rounded." Use "Ocean-deep Cerulean (#0077B6)" or "Gently curved edges"
- Be Functional: Always explain what each design element is used for
- Be Consistent: Use the same terminology throughout the document

### Imported Operating Notes

#### Imported: Output Guidelines

- **Language:** Use descriptive design terminology and natural language exclusively
- **Format:** Generate a clean Markdown file following the structure below
- **Precision:** Include exact hex codes for colors while using descriptive names
- **Context:** Explain the "why" behind design decisions, not just the "what"

#### Imported: 3. Typography Rules

(Description of font family, weight usage for headers vs. body, and letter-spacing character.)

#### Imported: 5. Layout Principles

(Description of whitespace strategy, margins, and grid alignment.)
```

#### Imported: Best Practices

- **Be Descriptive:** Avoid generic terms like "blue" or "rounded." Use "Ocean-deep Cerulean (#0077B6)" or "Gently curved edges"
- **Be Functional:** Always explain what each design element is used for
- **Be Consistent:** Use the same terminology throughout the document
- **Be Visual:** Help readers visualize the design through your descriptions
- **Be Precise:** Include exact values (hex codes, pixel values) in parentheses after natural language descriptions

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/design-md`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: The Goal

The `DESIGN.md` file will serve as the "source of truth" for prompting Stitch to generate new screens that align perfectly with the existing design language. Stitch interprets design through "Visual Descriptions" supported by specific color values.

#### Imported: Retrieval and Networking

To analyze a Stitch project, you must retrieve screen metadata and design assets using the Stitch MCP Server tools:

1. **Namespace discovery**: Run `list_tools` to find the Stitch MCP prefix. Use this prefix (e.g., `mcp_stitch:`) for all subsequent calls.

2. **Project lookup** (if Project ID is not provided):
   - Call `[prefix]:list_projects` with `filter: "view=owned"` to retrieve all user projects
   - Identify the target project by title or URL pattern
   - Extract the Project ID from the `name` field (e.g., `projects/13534454087919359824`)

3. **Screen lookup** (if Screen ID is not provided):
   - Call `[prefix]:list_screens` with the `projectId` (just the numeric ID, not the full path)
   - Review screen titles to identify the target screen (e.g., "Home", "Landing Page")
   - Extract the Screen ID from the screen's `name` field

4. **Metadata fetch**: 
   - Call `[prefix]:get_screen` with both `projectId` and `screenId` (both as numeric IDs only)
   - This returns the complete screen object including:
     - `screenshot.downloadUrl` - Visual reference of the design
     - `htmlCode.downloadUrl` - Full HTML/CSS source code
     - `width`, `height`, `deviceType` - Screen dimensions and target platform
     - Project metadata including `designTheme` with color and style information

5. **Asset download**:
   - Use `web_fetch` or `read_url_content` to download the HTML code from `htmlCode.downloadUrl`
   - Optionally download the screenshot from `screenshot.downloadUrl` for visual reference
   - Parse the HTML to extract Tailwind classes, custom CSS, and component patterns

6. **Project metadata extraction**:
   - Call `[prefix]:get_project` with the project `name` (full path: `projects/{id}`) to get:
     - `designTheme` object with color mode, fonts, roundness, custom colors
     - Project-level design guidelines and descriptions
     - Device type preferences and layout principles

#### Imported: Analysis & Synthesis Instructions

### 1. Extract Project Identity (JSON)
- Locate the Project Title
- Locate the specific Project ID (e.g., from the `name` field in the JSON)

### 2. Define the Atmosphere (Image/HTML)
Evaluate the screenshot and HTML structure to capture the overall "vibe." Use evocative adjectives to describe the mood (e.g., "Airy," "Dense," "Minimalist," "Utilitarian").

### 3. Map the Color Palette (Tailwind Config/JSON)
Identify the key colors in the system. For each color, provide:
- A descriptive, natural language name that conveys its character (e.g., "Deep Muted Teal-Navy")
- The specific hex code in parentheses for precision (e.g., "#294056")
- Its specific functional role (e.g., "Used for primary actions")

### 4. Translate Geometry & Shape (CSS/Tailwind)
Convert technical `border-radius` and layout values into physical descriptions:
- Describe `rounded-full` as "Pill-shaped"
- Describe `rounded-lg` as "Subtly rounded corners"
- Describe `rounded-none` as "Sharp, squared-off edges"

### 5. Describe Depth & Elevation
Explain how the UI handles layers. Describe the presence and quality of shadows (e.g., "Flat," "Whisper-soft diffused shadows," or "Heavy, high-contrast drop shadows").

#### Imported: Output Format (DESIGN.md Structure)

```markdown
# Design System: [Project Title]
**Project ID:** [Insert Project ID Here]

#### Imported: 1. Visual Theme & Atmosphere

(Description of the mood, density, and aesthetic philosophy.)

#### Imported: 2. Color Palette & Roles

(List colors by Descriptive Name + Hex Code + Functional Role.)

#### Imported: 4. Component Stylings

* **Buttons:** (Shape description, color assignment, behavior).
* **Cards/Containers:** (Corner roundness description, background color, shadow depth).
* **Inputs/Forms:** (Stroke style, background).

#### Imported: Tips for Success

1. **Start with the big picture:** Understand the overall aesthetic before diving into details
2. **Look for patterns:** Identify consistent spacing, sizing, and styling patterns
3. **Think semantically:** Name colors by their purpose, not just their appearance
4. **Consider hierarchy:** Document how visual weight and importance are communicated
5. **Reference the guide:** Use language and patterns from the Stitch Effective Prompting Guide

#### Imported: Common Pitfalls to Avoid

- ❌ Using technical jargon without translation (e.g., "rounded-xl" instead of "generously rounded corners")
- ❌ Omitting color codes or using only descriptive names
- ❌ Forgetting to explain functional roles of design elements
- ❌ Being too vague in atmosphere descriptions
- ❌ Ignoring subtle design details like shadows or spacing patterns

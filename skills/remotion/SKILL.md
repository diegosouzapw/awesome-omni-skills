---
name: remotion
description: "Stitch to Remotion Walkthrough Videos workflow skill. Use this skill when the user needs Generate walkthrough videos from Stitch projects using Remotion with smooth transitions, zooming, and text overlays and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["remotion", "generate", "walkthrough", "videos", "stitch", "projects", "using", "smooth"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Stitch to Remotion Walkthrough Videos

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/remotion` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Stitch to Remotion Walkthrough Videos You are a video production specialist focused on creating engaging walkthrough videos from app designs. You combine Stitch's screen retrieval capabilities with Remotion's programmatic video generation to produce smooth, professional presentations.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Retrieval and Networking, Video Composition Strategy, Advanced Features, File Structure, Integration with Remotion Skills.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use this skill when tackling tasks related to its primary domain or functionality as described above.
- Use when the request clearly matches the imported source intent: Generate walkthrough videos from Stitch projects using Remotion with smooth transitions, zooming, and text overlays.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Identify target Stitch project
2. List all screens in the project
3. Download screenshots for each screen
4. Organize in order of walkthrough flow
5. Create a manifest file (screens.json):
6. Create ScreenSlide.tsx:
7. Use useCurrentFrame() and spring() for animations

### Imported Workflow Notes

#### Imported: Execution Steps

### Step 1: Gather Screen Assets

1. Identify target Stitch project
2. List all screens in the project
3. Download screenshots for each screen
4. Organize in order of walkthrough flow
5. Create a manifest file (`screens.json`):

```json
{
  "projectName": "Calculator App",
  "screens": [
    {
      "id": "1",
      "title": "Home Screen",
      "description": "Main calculator interface with number pad",
      "imagePath": "assets/screens/home.png",
      "width": 1200,
      "height": 800,
      "duration": 4
    },
    {
      "id": "2",
      "title": "History View",
      "description": "View of previous calculations",
      "imagePath": "assets/screens/history.png",
      "width": 1200,
      "height": 800,
      "duration": 3
    }
  ]
}
```

### Step 2: Generate Remotion Components

Create the video components following Remotion best practices:

1. **Create `ScreenSlide.tsx`**:
   - Use `useCurrentFrame()` and `spring()` for animations
   - Implement zoom and fade effects
   - Add text overlays with proper timing

2. **Create `WalkthroughComposition.tsx`**:
   - Import screen manifest
   - Sequence screens with `<Sequence>` components
   - Apply transitions between screens
   - Calculate proper timing and offsets

3. **Update `remotion.config.ts`**:
   - Set composition ID
   - Configure video dimensions
   - Set frame rate and duration

**Reference Resources:**
- Use `resources/screen-slide-template.tsx` as starting point
- Follow `resources/composition-checklist.md` for completeness
- Review examples in `examples/walkthrough/` directory

### Step 3: Preview and Refine

1. **Start Remotion Studio**:
   ```bash
   npm run dev
   ```
   - Opens browser-based preview
   - Allows real-time editing and refinement

2. **Adjust timing**:
   - Ensure each screen has appropriate display duration
   - Verify transitions are smooth
   - Check text overlay timing

3. **Fine-tune animations**:
   - Adjust spring configurations for zoom effects
   - Modify easing functions for transitions
   - Ensure text is readable at all times

### Step 4: Render Video

1. **Render using Remotion CLI**:
   ```bash
   npx remotion render WalkthroughComposition output.mp4
   ```

2. **Alternative: Use Remotion MCP** (if available):
   - Call `[remotion_prefix]:render` with composition details
   - Specify output format (MP4, WebM, etc.)

3. **Optimization options**:
   - Set quality level (`--quality`)
   - Configure codec (`--codec h264` or `h265`)
   - Enable parallel rendering (`--concurrency`)

#### Imported: Overview

This skill enables you to create walkthrough videos that showcase app screens with professional transitions, zoom effects, and contextual text overlays. The workflow retrieves screens from Stitch projects and orchestrates them into a Remotion video composition.

#### Imported: Prerequisites

**Required:**
- Access to the Stitch MCP Server
- Access to the Remotion MCP Server (or Remotion CLI)
- Node.js and npm installed
- A Stitch project with designed screens

**Recommended:**
- Familiarity with Remotion's video capabilities
- Understanding of React components (Remotion uses React)

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @remotion to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @remotion against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @remotion for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @remotion using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Usage

**User prompt:**
```
Look up the screens in my Stitch project "Calculator App" and build a remotion video 
that shows a walkthrough of the screens.
```

**Agent workflow:**
1. List Stitch projects → Find "Calculator App" → Extract project ID
2. List screens in project → Identify all screens (Home, History, Settings)
3. Download screenshots for each screen → Save to `assets/screens/`
4. Create `screens.json` manifest with screen metadata
5. Generate Remotion components (`ScreenSlide.tsx`, `WalkthroughComposition.tsx`)
6. Preview in Remotion Studio → Refine timing and transitions
7. Render final video → `calculator-walkthrough.mp4`
8. Report completion with video preview link

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Maintain aspect ratio: Use actual Stitch screen dimensions or scale proportionally
- Consistent timing: Keep screen display duration consistent unless emphasizing specific screens
- Readable text: Ensure sufficient contrast; use appropriate font sizes; avoid cluttered overlays
- Smooth transitions: Use spring animations for natural motion; avoid jarring cuts
- Preview thoroughly: Always preview in Remotion Studio before final render
- Optimize assets: Compress images appropriately; use efficient formats (PNG for UI, JPG for photos)
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Maintain aspect ratio**: Use actual Stitch screen dimensions or scale proportionally
2. **Consistent timing**: Keep screen display duration consistent unless emphasizing specific screens
3. **Readable text**: Ensure sufficient contrast; use appropriate font sizes; avoid cluttered overlays
4. **Smooth transitions**: Use spring animations for natural motion; avoid jarring cuts
5. **Preview thoroughly**: Always preview in Remotion Studio before final render
6. **Optimize assets**: Compress images appropriately; use efficient formats (PNG for UI, JPG for photos)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/remotion`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue | Solution |
|-------|----------|
| **Blurry screenshots** | Ensure downloaded images are at full resolution; check `screenshot.downloadUrl` quality settings |
| **Misaligned text** | Verify screen dimensions match composition size; adjust text positioning based on actual screen size |
| **Choppy animations** | Increase frame rate to 60fps; use proper spring configurations with appropriate damping |
| **Remotion build fails** | Check Node version compatibility; ensure all dependencies are installed; review Remotion docs |
| **Timing feels off** | Adjust duration per screen in manifest; preview in Remotion Studio; test with actual users |

## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: References

- **Stitch Documentation**: https://stitch.withgoogle.com/docs/
- **Remotion Documentation**: https://www.remotion.dev/docs/
- **Remotion Skills**: https://www.remotion.dev/docs/ai/skills
- **Remotion MCP**: https://www.remotion.dev/docs/ai/mcp
- **Remotion Transitions**: https://www.remotion.dev/docs/transitions

#### Imported: Retrieval and Networking

### Step 1: Discover Available MCP Servers

Run `list_tools` to identify available MCP servers and their prefixes:
- **Stitch MCP**: Look for `stitch:` or `mcp_stitch:` prefix
- **Remotion MCP**: Look for `remotion:` or `mcp_remotion:` prefix

### Step 2: Retrieve Stitch Project Information

1. **Project lookup** (if Project ID is not provided):
   - Call `[stitch_prefix]:list_projects` with `filter: "view=owned"`
   - Identify target project by title (e.g., "Calculator App")
   - Extract Project ID from `name` field (e.g., `projects/13534454087919359824`)

2. **Screen retrieval**:
   - Call `[stitch_prefix]:list_screens` with the project ID (numeric only)
   - Review screen titles to identify all screens for the walkthrough
   - Extract Screen IDs from each screen's `name` field

3. **Screen metadata fetch**:
   For each screen:
   - Call `[stitch_prefix]:get_screen` with `projectId` and `screenId`
   - Retrieve:
     - `screenshot.downloadUrl` — Visual asset for the video
     - `htmlCode.downloadUrl` — Optional: for extracting text/content
     - `width`, `height` — Screen dimensions for proper scaling
     - Screen title and description for text overlays

4. **Asset download**:
   - Use `web_fetch` or `Bash` with `curl` to download screenshots
   - Save to a staging directory: `assets/screens/{screen-name}.png`
   - Organize assets in order of the intended walkthrough flow

### Step 3: Set Up Remotion Project

1. **Check for existing Remotion project**:
   - Look for `remotion.config.ts` or `package.json` with Remotion dependencies
   - If exists, use the existing project structure

2. **Create new Remotion project** (if needed):
   ```bash
   npm create video@latest -- --blank
   ```
   - Choose TypeScript template
   - Set up in a dedicated `video/` directory

3. **Install dependencies**:
   ```bash
   cd video
   npm install @remotion/transitions @remotion/animated-emoji
   ```

#### Imported: Video Composition Strategy

### Architecture

Create a modular Remotion composition with these components:

1. **`ScreenSlide.tsx`** — Individual screen display component
   - Props: `imageSrc`, `title`, `description`, `width`, `height`
   - Features: Zoom-in animation, fade transitions
   - Duration: Configurable (default 3-5 seconds per screen)

2. **`WalkthroughComposition.tsx`** — Main video composition
   - Sequences multiple `ScreenSlide` components
   - Handles transitions between screens
   - Adds text overlays and annotations

3. **`config.ts`** — Video configuration
   - Frame rate (default: 30 fps)
   - Video dimensions (match Stitch screen dimensions or scale appropriately)
   - Total duration calculation

### Transition Effects

Use Remotion's `@remotion/transitions` for professional effects:

- **Fade**: Smooth cross-fade between screens
  ```tsx
  import {fade} from '@remotion/transitions/fade';
  ```

- **Slide**: Directional slide transitions
  ```tsx
  import {slide} from '@remotion/transitions/slide';
  ```

- **Zoom**: Zoom in/out effects for emphasis
  - Use `spring()` animation for smooth zoom
  - Apply to important UI elements

### Text Overlays

Add contextual information using Remotion's text rendering:

1. **Screen titles**: Display at the top or bottom of each frame
2. **Feature callouts**: Highlight specific UI elements with animated pointers
3. **Descriptions**: Fade in descriptive text for each screen
4. **Progress indicator**: Show current screen position in walkthrough

#### Imported: Advanced Features

### Interactive Hotspots

Highlight clickable elements or important features:

```tsx
import {interpolate, useCurrentFrame} from 'remotion';

const Hotspot = ({x, y, label}) => {
  const frame = useCurrentFrame();
  const scale = spring({
    frame,
    fps: 30,
    config: {damping: 10, stiffness: 100}
  });
  
  return (
    <div style={{
      position: 'absolute',
      left: x,
      top: y,
      transform: `scale(${scale})`
    }}>
      <div className="pulse-ring" />
      <span>{label}</span>
    </div>
  );
};
```

### Voiceover Integration

Add narration to the walkthrough:

1. Generate voiceover script from screen descriptions
2. Use text-to-speech or record audio
3. Import audio into Remotion with `<Audio>` component
4. Sync screen timing with voiceover pacing

### Dynamic Text Extraction

Extract text from Stitch HTML code for automatic annotations:

1. Download `htmlCode.downloadUrl` for each screen
2. Parse HTML to extract key text elements (headings, buttons, labels)
3. Generate automatic callouts for important UI elements
4. Add to composition as timed text overlays

#### Imported: File Structure

```
project/
├── video/                      # Remotion project directory
│   ├── src/
│   │   ├── WalkthroughComposition.tsx
│   │   ├── ScreenSlide.tsx
│   │   ├── components/
│   │   │   ├── Hotspot.tsx
│   │   │   └── TextOverlay.tsx
│   │   └── Root.tsx
│   ├── public/
│   │   └── assets/
│   │       └── screens/        # Downloaded Stitch screenshots
│   │           ├── home.png
│   │           └── history.png
│   ├── remotion.config.ts
│   └── package.json
├── screens.json                # Screen manifest
└── output.mp4                  # Rendered video
```

#### Imported: Integration with Remotion Skills

Remotion maintains its own Agent Skills that define best practices. Review these for advanced techniques:

- **Repository**: https://github.com/remotion-dev/remotion/tree/main/packages/skills
- **Installation**: `npx skills add remotion-dev/skills`

Key Remotion skills to leverage:
- Animation timing and easing
- Composition architecture patterns
- Performance optimization
- Audio synchronization

#### Imported: Common Patterns

### Pattern 1: Simple Slide Show

Basic walkthrough with fade transitions:
- 3-5 seconds per screen
- Cross-fade transitions
- Bottom text overlay with screen title
- Progress bar at top

### Pattern 2: Feature Highlight

Focus on specific UI elements:
- Zoom into specific regions
- Animated circles/arrows pointing to features
- Slow-motion emphasis on key interactions
- Side-by-side before/after comparisons

### Pattern 3: User Flow

Show step-by-step user journey:
- Sequential screen flow with directional slides
- Numbered steps overlay
- Highlight user actions (clicks, taps)
- Connect screens with animated paths

#### Imported: Tips for Success

- **Start simple**: Begin with basic fade transitions before adding complex animations
- **Follow Remotion patterns**: Leverage Remotion's official skills and documentation
- **Use manifest files**: Keep screen data organized in JSON for easy updates
- **Preview frequently**: Use Remotion Studio to catch issues early
- **Consider accessibility**: Add captions; ensure text is readable; use clear visuals
- **Optimize for platform**: Match video dimensions to target platform (YouTube, social media, etc.)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

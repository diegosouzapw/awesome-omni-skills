---
name: favicon
description: "favicon workflow skill. Use this skill when the user needs Generate favicons from a source image and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["favicon", "generate", "favicons", "image", "cli-automation"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "Shpigford"
date_added: "2026-04-14"
date_updated: "2026-04-25"
---

# favicon

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/favicon` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Generate a complete set of favicons from the source image at $1 and update the project's HTML with the appropriate link tags.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Prerequisites, Error Handling, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to generate a complete favicon set from a single source image.
- The task includes placing the assets in the correct framework-specific static directory and updating HTML link tags.
- You want one workflow that validates the source image, detects the project type, and writes the right favicon outputs.
- Use when the request clearly matches the imported source intent: Generate favicons from a source image.
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

1. Verify the source image exists at the provided path: $1
2. Check the file extension is a supported format (PNG, JPG, JPEG, SVG, WEBP, GIF)
3. If the file doesn't exist or isn't a valid image format, report the error and stop
4. Framework - Detection - Static Assets Directory
5. Rails - config/routes.rb exists - public/
6. Next.js - next.config.* exists - public/
7. Gatsby - gatsby-config.* exists - static/

### Imported Workflow Notes

#### Imported: Step 1: Validate Source Image

1. Verify the source image exists at the provided path: `$1`
2. Check the file extension is a supported format (PNG, JPG, JPEG, SVG, WEBP, GIF)
3. If the file doesn't exist or isn't a valid image format, report the error and stop

Note whether the source is an SVG file - if so, it will also be copied as `favicon.svg`.

#### Imported: Step 2: Detect Project Type and Static Assets Directory

Detect the project type and determine where static assets should be placed. Check in this order:

| Framework | Detection | Static Assets Directory |
|-----------|-----------|------------------------|
| **Rails** | `config/routes.rb` exists | `public/` |
| **Next.js** | `next.config.*` exists | `public/` |
| **Gatsby** | `gatsby-config.*` exists | `static/` |
| **SvelteKit** | `svelte.config.*` exists | `static/` |
| **Astro** | `astro.config.*` exists | `public/` |
| **Hugo** | `hugo.toml` or `config.toml` with Hugo markers | `static/` |
| **Jekyll** | `_config.yml` with Jekyll markers | Root directory (same as `index.html`) |
| **Vite** | `vite.config.*` exists | `public/` |
| **Create React App** | `package.json` has `react-scripts` dependency | `public/` |
| **Vue CLI** | `vue.config.*` exists | `public/` |
| **Angular** | `angular.json` exists | `src/assets/` |
| **Eleventy** | `.eleventy.js` or `eleventy.config.*` exists | Check `_site` output or root |
| **Static HTML** | `index.html` in root | Same directory as `index.html` |

**Important**: If existing favicon files are found (e.g., `favicon.ico`, `apple-touch-icon.png`), use their location as the target directory regardless of framework detection.

Report the detected project type and the static assets directory that will be used.

**When in doubt, ask**: If you are not 100% confident about where static assets should be placed (e.g., ambiguous project structure, multiple potential locations, unfamiliar framework), use `AskUserQuestionTool` to confirm the target directory before proceeding. It's better to ask than to put files in the wrong place.

#### Imported: Step 3: Determine App Name

Find the app name from these sources (in priority order):

1. **Existing `site.webmanifest`** - Check the detected static assets directory for an existing manifest and extract the `name` field
2. **`package.json`** - Extract the `name` field if it exists
3. **Rails `config/application.rb`** - Extract the module name (e.g., `module MyApp` → "MyApp")
4. **Directory name** - Use the current working directory name as fallback

Convert the name to title case if needed (e.g., "my-app" → "My App").

#### Imported: Step 4: Ensure Static Assets Directory Exists

Check if the detected static assets directory exists. If not, create it.

#### Imported: Step 5: Generate Favicon Files

Run these ImageMagick commands to generate all favicon files. Replace `[STATIC_DIR]` with the detected static assets directory from Step 2.

**Important**: The `-background none` flag must come BEFORE the input file to properly preserve transparency when rendering SVGs. Placing it after the input will result in a white background.

### favicon.ico (multi-resolution: 16x16, 32x32, 48x48)
```bash
magick -background none "$1" \
  \( -clone 0 -resize 16x16 \) \
  \( -clone 0 -resize 32x32 \) \
  \( -clone 0 -resize 48x48 \) \
  -delete 0 -alpha on \
  [STATIC_DIR]/favicon.ico
```

### favicon-96x96.png
```bash
magick -background none "$1" -resize 96x96 -alpha on [STATIC_DIR]/favicon-96x96.png
```

### apple-touch-icon.png (180x180)
```bash
magick -background none "$1" -resize 180x180 -alpha on [STATIC_DIR]/apple-touch-icon.png
```

### web-app-manifest-192x192.png
```bash
magick -background none "$1" -resize 192x192 -alpha on [STATIC_DIR]/web-app-manifest-192x192.png
```

### web-app-manifest-512x512.png
```bash
magick -background none "$1" -resize 512x512 -alpha on [STATIC_DIR]/web-app-manifest-512x512.png
```

### favicon.svg (only if source is SVG)
If the source file has a `.svg` extension, copy it:
```bash
cp "$1" [STATIC_DIR]/favicon.svg
```

#### Imported: Step 6: Create/Update site.webmanifest

Create or update `[STATIC_DIR]/site.webmanifest` with this content (substitute the detected app name):

```json
{
  "name": "[APP_NAME]",
  "short_name": "[APP_NAME]",
  "icons": [
    {
      "src": "/web-app-manifest-192x192.png",
      "sizes": "192x192",
      "type": "image/png",
      "purpose": "maskable"
    },
    {
      "src": "/web-app-manifest-512x512.png",
      "sizes": "512x512",
      "type": "image/png",
      "purpose": "maskable"
    }
  ],
  "theme_color": "#ffffff",
  "background_color": "#ffffff",
  "display": "standalone"
}
```

If `site.webmanifest` already exists in the static directory, preserve the existing `theme_color`, `background_color`, and `display` values while updating the `name`, `short_name`, and `icons` array.

#### Imported: Step 7: Update HTML/Layout Files

Based on the detected project type, update the appropriate file. Adjust the `href` paths based on where the static assets directory is relative to the web root:
- If static files are in `public/` or `static/` and served from root → use `/favicon.ico`
- If static files are in `src/assets/` → use `/assets/favicon.ico`
- If static files are in the same directory as HTML → use `./favicon.ico` or just `favicon.ico`

### For Rails Projects

Edit `app/views/layouts/application.html.erb`. Find the `<head>` section and add/replace favicon-related tags with:

```html
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="[APP_NAME]" />
<link rel="manifest" href="/site.webmanifest" />
```

**Important**:
- If the source was NOT an SVG, omit the `<link rel="icon" type="image/svg+xml" href="/favicon.svg" />` line
- Remove any existing `<link rel="icon"`, `<link rel="shortcut icon"`, `<link rel="apple-touch-icon"`, or `<link rel="manifest"` tags before adding the new ones
- Place these tags near the top of the `<head>` section, after `<meta charset>` and `<meta name="viewport">` if present

### For Next.js Projects

Edit the detected layout file (`app/layout.tsx` or `src/app/layout.tsx`). Update or add the `metadata` export to include icons configuration:

```typescript
export const metadata: Metadata = {
  // ... keep existing metadata fields
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: '[APP_NAME]',
  },
};
```

**Important**:
- If the source was NOT an SVG, omit the `{ url: '/favicon.svg', type: 'image/svg+xml' }` entry from the icon array
- If metadata export doesn't exist, create it with just the icons-related fields
- If metadata export exists, merge the icons configuration with existing fields

### For Static HTML Projects

Edit the detected `index.html` file. Add the same HTML as Rails within the `<head>` section.

### If No Project Detected

Skip HTML updates and inform the user they need to manually add the following to their HTML `<head>`:

```html
<link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
<link rel="shortcut icon" href="/favicon.ico" />
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
<meta name="apple-mobile-web-app-title" content="[APP_NAME]" />
<link rel="manifest" href="/site.webmanifest" />
```

#### Imported: Step 8: Summary

Report completion with:
- Detected project type and framework
- Static assets directory used
- List of files generated
- App name used in manifest and HTML
- Layout file updated (or note if manual update is needed)
- Note if any existing files were overwritten

#### Imported: Prerequisites

First, verify ImageMagick v7+ is installed by running:
```bash
which magick
```

If not found, stop and instruct the user to install it:
- **macOS**: `brew install imagemagick`
- **Linux**: `sudo apt install imagemagick`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @favicon to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @favicon against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @favicon for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @favicon using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/favicon`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Error Handling

- If ImageMagick is not installed, provide installation instructions and stop
- If the source image doesn't exist, report the exact path that was tried and stop
- If ImageMagick commands fail, report the specific error message
- If the layout file cannot be found for HTML updates, generate files anyway and instruct on manual HTML addition

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

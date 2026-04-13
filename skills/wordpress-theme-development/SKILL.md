---
name: wordpress-theme-development
description: "WordPress Theme Development Workflow workflow skill. Use this skill when the user needs WordPress theme development workflow covering theme architecture, template hierarchy, custom post types, block editor support, responsive design, and WordPress 7.0 features: DataViews, Pattern Editing, Navigation Overlays, and admin refresh and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["wordpress-theme-development", "wordpress", "theme", "development", "covering", "architecture", "template", "hierarchy"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# WordPress Theme Development Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/wordpress-theme-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# WordPress Theme Development Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: WordPress 7.0 Theme Features, Theme Structure, WordPress 7.0 Theme Checklist, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating custom WordPress themes
- Converting designs to WordPress themes
- Adding block editor support
- Implementing custom post types
- Building child themes
- Implementing WordPress 7.0 design features

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

1. app-builder - Project scaffolding
2. frontend-developer - Frontend development
3. Create theme directory structure
4. Set up style.css with theme header
5. Create functions.php
6. Configure theme support
7. Set up enqueue scripts/styles

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Theme Setup

#### Skills to Invoke
- `app-builder` - Project scaffolding
- `frontend-developer` - Frontend development

#### Actions
1. Create theme directory structure
2. Set up style.css with theme header
3. Create functions.php
4. Configure theme support
5. Set up enqueue scripts/styles

#### WordPress 7.0 Theme Header
```css
/*
Theme Name: My Custom Theme
Theme URI: https://example.com
Author: Developer Name
Author URI: https://example.com
Description: A WordPress 7.0 compatible theme with modern design
Version: 1.0.0
Requires at least: 6.0
Requires PHP: 7.4
License: GNU General Public License v2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: my-custom-theme
Tags: block-patterns, block-styles, editor-style, wide-blocks
*/
```

#### Copy-Paste Prompts
```
Use @app-builder to scaffold a new WordPress theme project
```

### Phase 2: Template Hierarchy

#### Skills to Invoke
- `frontend-developer` - Template development

#### Actions
1. Create index.php (fallback template)
2. Implement header.php and footer.php
3. Create single.php for posts
4. Create page.php for pages
5. Add archive.php for archives
6. Implement search.php and 404.php

#### WordPress 7.0 Template Considerations
- Test with iframed editor
- Verify view transitions work
- Check new admin color scheme compatibility

#### Copy-Paste Prompts
```
Use @frontend-developer to create WordPress template files
```

### Phase 3: Theme Functions

#### Skills to Invoke
- `backend-dev-guidelines` - Backend patterns

#### Actions
1. Register navigation menus
2. Add theme support (thumbnails, RSS, etc.)
3. Register widget areas
4. Create custom template tags
5. Implement helper functions

#### WordPress 7.0 theme.json Configuration
```json
{
  "$schema": "https://schemas.wp.org/trunk/theme.json",
  "version": 3,
  "settings": {
    "appearanceTools": true,
    "layout": {
      "contentSize": "1200px",
      "wideSize": "1400px"
    },
    "background": {
      "backgroundImage": true
    },
    "typography": {
      "fontFamilies": true,
      "fontSizes": true
    },
    "spacing": {
      "margin": true,
      "padding": true
    },
    "blocks": {
      "core/heading": {
        "typography": {
          "fontSizes": ["24px", "32px", "48px"]
        }
      }
    }
  },
  "styles": {
    "color": {
      "background": "#ffffff",
      "text": "#1a1a1a"
    },
    "elements": {
      "link": {
        "color": {
          "text": "#0066cc"
        }
      }
    }
  },
  "customTemplates": [
    {
      "name": "page-home",
      "title": "Homepage",
      "postTypes": ["page"]
    }
  ],
  "templateParts": [
    {
      "name": "header",
      "title": "Header",
      "area": "header"
    }
  ]
}
```

#### Copy-Paste Prompts
```
Use @backend-dev-guidelines to create theme functions
```

### Phase 4: Custom Post Types

#### Skills to Invoke
- `wordpress-penetration-testing` - WordPress patterns

#### Actions
1. Register custom post types
2. Create custom taxonomies
3. Add custom meta boxes
4. Implement custom fields
5. Create archive templates

#### RTC-Compatible CPT Registration
```php
register_post_type('portfolio', [
    'labels' => [
        'name' => __('Portfolio', 'my-theme'),
        'singular_name' => __('Portfolio Item', 'my-theme')
    ],
    'public' => true,
    'has_archive' => true,
    'show_in_rest' => true,  // Enable for RTC
    'supports' => ['title', 'editor', 'thumbnail', 'excerpt', 'custom-fields'],
    'menu_icon' => 'dashicons-portfolio',
]);

// Register meta for collaboration
register_post_meta('portfolio', 'client_name', [
    'type' => 'string',
    'single' => true,
    'show_in_rest' => true,
    'sanitize_callback' => 'sanitize_text_field',
]);
```

#### Copy-Paste Prompts
```
Use @wordpress-penetration-testing to understand WordPress CPT patterns
```

### Phase 5: Block Editor Support

#### Skills to Invoke
- `frontend-developer` - Block development

#### Actions
1. Enable block editor support
2. Register custom blocks
3. Create block styles
4. Add block patterns
5. Configure block templates

#### WordPress 7.0 Block Features
- Block API v3 is reference model
- PHP-only block registration
- Per-instance custom CSS
- Block visibility controls (viewport-based)

#### Block Pattern with ContentOnly (WP 7.0)
```json
{
    "name": "my-theme/hero-section",
    "title": "Hero Section",
    "contentOnly": true,
    "content": [
        {
            "name": "core/cover",
            "attributes": {
                "url": "{{hero_image}}",
                "overlay": "black",
                "dimRatio": 50
            },
            "innerBlocks": [
                {
                    "name": "core/heading",
                    "attributes": {
                        "level": 1,
                        "textAlign": "center",
                        "content": "{{hero_title}}"
                    }
                },
                {
                    "name": "core/paragraph",
                    "attributes": {
                        "align": "center",
                        "content": "{{hero_description}}"
                    }
                }
            ]
        }
    ]
}
```

#### Navigation Overlay Template Part
```php
// template-parts/header-overlay.php
?>
<nav class="header-navigation-overlay" aria-label="<?php esc_attr_e('Overlay Menu', 'my-theme'); ?>">
    <button class="overlay-close" aria-label="<?php esc_attr_e('Close menu', 'my-theme'); ?>">
        <span class="close-icon" aria-hidden="true">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </span>
    </button>
    <?php
    wp_nav_menu([
        'theme_location' => 'primary',
        'container' => false,
        'menu_class' => 'overlay-menu',
        'fallback_cb' => false,
    ]);
    ?>
</nav>
```

#### Copy-Paste Prompts
```
Use @frontend-developer to create custom Gutenberg blocks
```

### Phase 6: Styling and Design

#### Skills to Invoke
- `frontend-design` - UI design
- `tailwind-patterns` - Tailwind CSS

#### Actions
1. Implement responsive design
2. Add CSS framework or custom styles
3. Create design system
4. Implement theme customizer
5. Add accessibility features

#### WordPress 7.0 Admin Refresh Considerations
```css
/* Support new admin color scheme */
@media (prefers-color-scheme: dark) {
    :root {
        --admin-color: modern;
    }
}

/* View transitions */
.wp-admin {
    view-transition-name: none;
}

body {
    view-transition-name: page;
}
```

#### CSS Custom Properties (WP 7.0)
```css
:root {
    /* New DataViews colors */
    --wp-dataviews-color-background: #ffffff;
    --wp-dataviews-color-border: #e0e0e0;
    
    /* Navigation overlay */
    --wp-overlay-menu-background: #1a1a1a;
    --wp-overlay-menu-text: #ffffff;
}
```

#### Copy-Paste Prompts
```
Use @frontend-design to create responsive theme design
```

### Phase 7: WordPress 7.0 Features Integration

#### Breadcrumbs Block Support
```php
// Add breadcrumb filters for custom post types
add_filter('wp_breadcrumb_args', function($args) {
    $args['separator'] = '<span class="breadcrumb-separator"> / </span>';
    $args['before'] = '<nav class="breadcrumb" aria-label="Breadcrumb">';
    $args['after'] = '</nav>';
    return $args;
});

// Add custom breadcrumb trail for CPT
add_action('breadcrumb_items', function($trail, $crumbs) {
    if (is_singular('portfolio')) {
        $portfolio_page = get_page_by_path('portfolio');
        if ($portfolio_page) {
            array_splice($trail->crumbs, 1, 0, [
                [
                    'title' => get_the_title($portfolio_page),
                    'url' => get_permalink($portfolio_page)
                ]
            ]);
        }
    }
}, 10, 2);
```

#### Icon Block Support
```php
// Add custom icons for Icon block via pattern category
add_action('init', function() {
    register_block_pattern_category('my-theme/icons', [
        'label' => __('Theme Icons', 'my-theme'),
        'description' => __('Custom icons for use in the Icon block', 'my-theme'),
    ]);
});

// For actual SVG icons in the Icon block, use block.json or PHP registration
add_action('init', function() {
    register_block_pattern('my-theme/custom-icons', [
        'title' => __('Custom Icon Set', 'my-theme'),
        'categories' => ['my-theme/icons'],
        'content' => '<!-- Pattern content with Icon blocks -->'
    ]);
});
```

### Phase 8: Testing

#### Skills to Invoke
- `playwright-skill` - Browser testing
- `webapp-testing` - Web app testing

#### Actions
1. Test across browsers
2. Verify responsive breakpoints
3. Test block editor
4. Check accessibility
5. Performance testing

#### WordPress 7.0 Testing Checklist
- [ ] Test with iframed editor
- [ ] Verify view transitions
- [ ] Check admin color scheme
- [ ] Test navigation overlays
- [ ] Verify contentOnly patterns
- [ ] Test breadcrumbs on CPT archives

#### Copy-Paste Prompts
```
Use @playwright-skill to test WordPress theme
```

#### Imported: Related Workflow Bundles

- `wordpress` - WordPress development
- `wordpress-plugin-development` - Plugin development
- `wordpress-woocommerce` - WooCommerce

#### Imported: Overview

Specialized workflow for creating custom WordPress themes from scratch, including modern block editor (Gutenberg) support, template hierarchy, responsive design, and WordPress 7.0 enhancements.

#### Imported: WordPress 7.0 Theme Features

1. **Admin Refresh**
   - New default color scheme
   - View transitions between admin screens
   - Modern typography and spacing

2. **Pattern Editing**
   - ContentOnly mode defaults for unsynced patterns
   - `disableContentOnlyForUnsyncedPatterns` setting
   - Per-block instance custom CSS

3. **Navigation Overlays**
   - Customizable navigation overlays
   - Improved mobile navigation

4. **New Blocks**
   - Icon block
   - Breadcrumbs block with filters
   - Responsive grid block

5. **Theme.json Enhancements**
   - Pseudo-element support
   - Block-defined feature selectors honored
   - Enhanced custom CSS

6. **Iframed Editor**
   - Block API v3+ enables iframed post editor
   - Full enforcement in 7.1, opt-in in 7.0

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @wordpress-theme-development to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/wordpress-theme-development/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/wordpress-theme-development/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @wordpress-theme-development using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/wordpress-theme-development`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Theme Structure

```
theme-name/
├── style.css
├── functions.php
├── index.php
├── header.php
├── footer.php
├── sidebar.php
├── single.php
├── page.php
├── archive.php
├── search.php
├── 404.php
├── comments.php
├── template-parts/
│   ├── header/
│   ├── footer/
│   ├── navigation/
│   └── content/
├── patterns/           # Block patterns (WP 7.0)
├── templates/          # Site editor templates
├── inc/
│   ├── class-theme.php
│   └── supports.php
├── assets/
│   ├── css/
│   ├── js/
│   └── images/
└── languages/
```

#### Imported: WordPress 7.0 Theme Checklist

- [ ] PHP 7.4+ requirement documented
- [ ] theme.json v3 schema used
- [ ] Block patterns tested
- [ ] ContentOnly editing supported
- [ ] Navigation overlays implemented
- [ ] Breadcrumb filters added for CPT
- [ ] View transitions working
- [ ] Admin refresh compatible
- [ ] CPT meta shows_in_rest
- [ ] Iframe editor tested

#### Imported: Quality Gates

- [ ] All templates working
- [ ] Block editor supported
- [ ] Responsive design verified
- [ ] Accessibility checked
- [ ] Performance optimized
- [ ] Cross-browser tested
- [ ] WordPress 7.0 compatibility verified

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

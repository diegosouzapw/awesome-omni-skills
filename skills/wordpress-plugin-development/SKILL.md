---
name: wordpress-plugin-development
description: "WordPress Plugin Development Workflow workflow skill. Use this skill when the user needs WordPress plugin development workflow covering plugin architecture, hooks, admin interfaces, REST API, security best practices, and WordPress 7.0 features: Real-Time Collaboration, AI Connectors, Abilities API, DataViews, and PHP-only blocks and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["wordpress-plugin-development", "wordpress", "plugin", "development", "covering", "architecture", "hooks", "admin"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# WordPress Plugin Development Workflow

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/wordpress-plugin-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# WordPress Plugin Development Workflow

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: WordPress 7.0 Plugin Development, Plugin Structure, WordPress 7.0 Compatibility Checklist, Quality Gates, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating custom WordPress plugins
- Extending WordPress functionality
- Building admin interfaces
- Adding REST API endpoints
- Integrating third-party services
- Implementing WordPress 7.0 AI/Collaboration features

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

1. app-builder - Project scaffolding
2. backend-dev-guidelines - Backend patterns
3. Create plugin directory structure
4. Set up main plugin file with header
5. Implement activation/deactivation hooks
6. Set up autoloading
7. Configure text domain

### Imported Workflow Notes

#### Imported: Workflow Phases

### Phase 1: Plugin Setup

#### Skills to Invoke
- `app-builder` - Project scaffolding
- `backend-dev-guidelines` - Backend patterns

#### Actions
1. Create plugin directory structure
2. Set up main plugin file with header
3. Implement activation/deactivation hooks
4. Set up autoloading
5. Configure text domain

#### WordPress 7.0 Plugin Header
```php
/*
Plugin Name: My Plugin
Plugin URI: https://example.com/my-plugin
Description: A WordPress 7.0 compatible plugin with AI and RTC support
Version: 1.0.0
Requires at least: 6.0
Requires PHP: 7.4
Author: Developer Name
License: GPL2+
*/
```

#### Copy-Paste Prompts
```
Use @app-builder to scaffold a new WordPress plugin
```

### Phase 2: Plugin Architecture

#### Skills to Invoke
- `backend-dev-guidelines` - Architecture patterns

#### Actions
1. Design plugin class structure
2. Implement singleton pattern
3. Create loader class
4. Set up dependency injection
5. Configure plugin lifecycle

#### WordPress 7.0 Architecture Considerations
- Prepare for iframed editor compatibility
- Design for collaboration-aware data flows
- Consider Abilities API for AI integration

#### Copy-Paste Prompts
```
Use @backend-dev-guidelines to design plugin architecture
```

### Phase 3: Hooks Implementation

#### Skills to Invoke
- `wordpress-penetration-testing` - WordPress patterns

#### Actions
1. Register action hooks
2. Create filter hooks
3. Implement callback functions
4. Set up hook priorities
5. Add conditional hooks

#### Copy-Paste Prompts
```
Use @wordpress-penetration-testing to understand WordPress hooks
```

### Phase 4: Admin Interface

#### Skills to Invoke
- `frontend-developer` - Admin UI

#### Actions
1. Create admin menu
2. Build settings pages
3. Implement options registration
4. Add settings sections/fields
5. Create admin notices

#### WordPress 7.0 Admin Considerations
- Test with new admin color scheme
- Consider DataViews for data displays
- Implement view transitions
- Use new validation patterns

#### DataViews Example
```javascript
import { DataViews } from '@wordpress/dataviews';

const MyPluginDataView = () => {
    const data = [/* records */];
    const fields = [
        { id: 'title', label: 'Title', sortable: true },
        { id: 'status', label: 'Status', filterBy: true }
    ];
    const view = {
        type: 'table',
        perPage: 10,
        sort: { field: 'title', direction: 'asc' }
    };

    return (
        <DataViews
            data={data}
            fields={fields}
            view={view}
            onChangeView={handleViewChange}
        />
    );
};
```

#### Copy-Paste Prompts
```
Use @frontend-developer to create WordPress admin interface
```

### Phase 5: Database Operations

#### Skills to Invoke
- `database-design` - Database design
- `postgresql` - Database patterns

#### Actions
1. Create custom tables
2. Implement CRUD operations
3. Add data validation
4. Set up data sanitization
5. Create data upgrade routines

#### RTC-Compatible Post Meta
```php
// Register meta for Real-Time Collaboration
register_post_meta('post', 'my_custom_field', [
    'type' => 'string',
    'single' => true,
    'show_in_rest' => true,  // Required for RTC
    'sanitize_callback' => 'sanitize_text_field',
]);

// For WP 7.0, also consider:
register_term_meta('category', 'my_term_field', [
    'type' => 'string',
    'show_in_rest' => true,
]);
```

#### Copy-Paste Prompts
```
Use @database-design to design plugin database schema
```

### Phase 6: REST API

#### Skills to Invoke
- `api-design-principles` - API design
- `api-patterns` - API patterns

#### Actions
1. Register REST routes
2. Create endpoint callbacks
3. Implement permission callbacks
4. Add request validation
5. Document API endpoints

#### WordPress 7.0 REST API Enhancements
- Abilities API integration
- AI Connector endpoints
- Enhanced validation

#### Copy-Paste Prompts
```
Use @api-design-principles to create WordPress REST API endpoints
```

### Phase 7: Security

#### Skills to Invoke
- `wordpress-penetration-testing` - WordPress security
- `security-scanning-security-sast` - Security scanning

#### Actions
1. Implement nonce verification
2. Add capability checks
3. Sanitize all inputs
4. Escape all outputs
5. Secure database queries

#### WordPress 7.0 Security Considerations
- Test Abilities API permission boundaries
- Validate AI connector credential handling
- Review collaboration data isolation
- PHP 7.4+ requirement compliance

#### Copy-Paste Prompts
```
Use @wordpress-penetration-testing to audit plugin security
```

### Phase 8: WordPress 7.0 Features

#### Skills to Invoke
- `api-design-principles` - AI integration
- `backend-dev-guidelines` - Block development

#### AI Connector Implementation
```php
// Using WordPress 7.0 AI Connector
add_action('save_post', 'my_plugin_generate_ai_summary', 10, 2);

function my_plugin_generate_ai_summary($post_id, $post) {
    if (wp_is_post_autosave($post_id) || wp_is_post_revision($post_id)) {
        return;
    }
    
    // Check if AI client is available
    if (!function_exists('wp_ai_client_prompt')) {
        return;
    }
    
    $content = strip_tags($post->post_content);
    if (empty($content)) {
        return;
    }
    
    // Build prompt - direct string concatenation for input
    $result = wp_ai_client_prompt(
        'Create a compelling 2-sentence summary for social media: ' . substr($content, 0, 1000)
    );
    
    if (is_wp_error($result)) {
        return;
    }
    
    // Set temperature for consistent output
    $result->using_temperature(0.3);
    $summary = $result->generate_text();
    
    if ($summary && !is_wp_error($summary)) {
        update_post_meta($post_id, '_ai_summary', sanitize_textarea_field($summary));
    }
}
```

#### Abilities API Registration
```php
// Register ability categories on their own hook
add_action('wp_abilities_api_categories_init', function() {
    wp_register_ability_category('content-creation', [
        'label' => __('Content Creation', 'my-plugin'),
        'description' => __('Abilities for generating and managing content', 'my-plugin'),
    ]);
});

// Register abilities on their own hook
add_action('wp_abilities_api_init', function() {
    wp_register_ability('my-plugin/generate-summary', [
        'label' => __('Generate Summary', 'my-plugin'),
        'description' => __('Creates an AI-powered summary of content', 'my-plugin'),
        'category' => 'content-creation',
        'input_schema' => [
            'type' => 'object',
            'properties' => [
                'content' => ['type' => 'string'],
                'length' => ['type' => 'integer', 'default' => 2]
            ],
            'required' => ['content']
        ],
        'output_schema' => [
            'type' => 'object',
            'properties' => [
                'summary' => ['type' => 'string']
            ]
        ],
        'execute_callback' => 'my_plugin_generate_summary_cb',
        'permission_callback' => function() {
            return current_user_can('edit_posts');
        }
    ]);
});

// Handler callback
function my_plugin_generate_summary_cb($input) {
    $content = isset($input['content']) ? $input['content'] : '';
    $length = isset($input['length']) ? absint($input['length']) : 2;
    
    if (empty($content)) {
        return new WP_Error('empty_content', 'No content provided');
    }
    
    if (!function_exists('wp_ai_client_prompt')) {
        return new WP_Error('ai_unavailable', 'AI not available');
    }
    
    $prompt = sprintf('Create a %d-sentence summary of: %s', $length, substr($content, 0, 2000));
    
    $result = wp_ai_client_prompt($prompt)
        ->using_temperature(0.3)
        ->generate_text();
    
    if (is_wp_error($result)) {
        return $result;
    }
    
    return ['summary' => sanitize_textarea_field($result)];
}
```

#### PHP-Only Block Registration
```php
// Register block entirely in PHP (WordPress 7.0)
// Note: For full PHP-only blocks, use block.json with PHP render_callback

// First, create a block.json file in build/ or includes/blocks/
// Then register in PHP:

// Simple PHP-only block registration (WordPress 7.0+)
if (function_exists('register_block_type')) {
    register_block_type('my-plugin/featured-post', [
        'render_callback' => function($attributes, $content, $block) {
            $post_id = isset($attributes['postId']) ? absint($attributes['postId']) : 0;
            
            if (!$post_id) {
                $post_id = get_the_ID();
            }
            
            $post = get_post($post_id);
            
            if (!$post) {
                return '';
            }
            
            $title = esc_html($post->post_title);
            $excerpt = esc_html(get_the_excerpt($post));
            
            return sprintf(
                '<div class="featured-post"><h2>%s</h2><p>%s</p></div>',
                $title,
                $excerpt
            );
        },
        'attributes' => [
            'postId' => ['type' => 'integer', 'default' => 0],
            'showExcerpt' => ['type' => 'boolean', 'default' => true]
        ],
    ]);
}
```

#### Disable Collaboration (if needed)
```javascript
// Disable RTC for specific post types
import { addFilter } from '@wordpress/hooks';

addFilter(
    'sync.providers',
    'my-plugin/disable-collab',
    () => []
);
```

### Phase 9: Testing

#### Skills to Invoke
- `test-automator` - Test automation
- `php-pro` - PHP testing

#### Actions
1. Set up PHPUnit
2. Create unit tests
3. Write integration tests
4. Test with WordPress test suite
5. Configure CI

#### WordPress 7.0 Testing Priorities
- Test RTC compatibility
- Verify AI connector functionality
- Validate DataViews integration
- Test Interactivity API with watch()

#### Copy-Paste Prompts
```
Use @test-automator to set up plugin testing
```

#### Imported: Related Workflow Bundles

- `wordpress` - WordPress development
- `wordpress-theme-development` - Theme development
- `wordpress-woocommerce` - WooCommerce

#### Imported: Overview

Specialized workflow for creating WordPress plugins with proper architecture, hooks system, admin interfaces, REST API endpoints, and security practices. Now includes WordPress 7.0 features for modern plugin development.

#### Imported: WordPress 7.0 Plugin Development

### Key Features for Plugin Developers

1. **Real-Time Collaboration (RTC) Compatibility**
   - Yjs-based CRDT for simultaneous editing
   - Custom transport via `sync.providers` filter
   - **Requirement**: Register post meta with `show_in_rest => true`

2. **AI Connector Integration**
   - Provider-agnostic AI via `wp_ai_client_prompt()`
   - Settings > Connectors admin screen
   - Works with OpenAI, Claude, Gemini, Ollama

3. **Abilities API**
   - Declare plugin capabilities for AI agents
   - REST API: `/wp-json/abilities/v1/manifest`
   - MCP adapter support

4. **DataViews & DataForm**
   - Modern admin interfaces
   - Replaces WP_List_Table patterns
   - Built-in validation

5. **PHP-Only Blocks**
   - Register blocks without JavaScript
   - Auto-generated Inspector controls

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @wordpress-plugin-development to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @wordpress-plugin-development against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @wordpress-plugin-development for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @wordpress-plugin-development using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/wordpress-plugin-development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



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

#### Imported: Plugin Structure

```
plugin-name/
├── plugin-name.php
├── includes/
│   ├── class-plugin.php
│   ├── class-loader.php
│   ├── class-activator.php
│   └── class-deactivator.php
├── admin/
│   ├── class-plugin-admin.php
│   ├── css/
│   └── js/
├── public/
│   ├── class-plugin-public.php
│   ├── css/
│   └── js/
├── blocks/           # PHP-only blocks (WP 7.0)
├── abilities/        # Abilities API
├── ai/               # AI Connector integration
├── languages/
└── vendor/
```

#### Imported: WordPress 7.0 Compatibility Checklist

- [ ] PHP 7.4+ requirement documented
- [ ] Post meta registered with `show_in_rest => true` for RTC
- [ ] Meta boxes migrated to block-based UIs
- [ ] AI Connector integration tested
- [ ] Abilities API registered (if applicable)
- [ ] DataViews integration tested (if applicable)
- [ ] Interactivity API uses `watch()` not `effect`
- [ ] Tested with iframed editor
- [ ] Collaboration fallback works (post locking)

#### Imported: Quality Gates

- [ ] Plugin activates without errors
- [ ] All hooks working
- [ ] Admin interface functional
- [ ] Security measures implemented
- [ ] Tests passing
- [ ] Documentation complete
- [ ] WordPress 7.0 compatibility verified

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

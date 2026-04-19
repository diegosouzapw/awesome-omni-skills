---
name: "shopify-developer"
description: "Shopify Developer Reference workflow skill. Use this skill when the user needs Complete Shopify development reference covering Liquid templating, OS 2.0 themes, GraphQL APIs, Hydrogen, Functions, and performance optimization (API v2026-01). Use when working with .liquid files, building Shopify themes or apps, writing GraphQL queries for Shopify, debugging Liquid errors, creating app extensions, migrating from Scripts to Functions, or building headless storefronts. Triggers on \"Shopify\", \"Liquid template\", \"Hydrogen\", \"Storefront API\", \"theme development\", \"Shopify Functions\", \"Polaris\". Do NOT use for non-Shopify e-commerce platforms and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "shopify-developer"
  - "complete"
  - "shopify"
  - "development"
  - "reference"
  - "covering"
  - "liquid"
  - "templating"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-14"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "shopify-developer"
family_name: "Shopify Developer Reference"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/shopify-developer"
upstream_skill: "skills/shopify-developer"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "32"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "4c47919ff680d27258a8b9713e3f3380befbd2b2"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "shopify-developer"
---

# Shopify Developer Reference

## Overview

This public intake copy packages `packages/skills-catalog/skills/(development)/shopify-developer` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Shopify Developer Reference Comprehensive reference for professional Shopify development - API version 2026-01.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Choose Your Path, Deprecation Notices, Liquid Essentials, API Essentials.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Complete Shopify development reference covering Liquid templating, OS 2.0 themes, GraphQL APIs, Hydrogen, Functions, and performance optimization (API v2026-01). Use when working with .liquid files, building Shopify....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/api-admin.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/api-storefront.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Choose Your Path

Read the reference file(s) that match your task:

**Liquid templating** - writing or debugging `.liquid` files:

- [references/liquid-syntax.md](references/liquid-syntax.md) - Tags, control flow, iteration, whitespace, LiquidDoc
- [references/liquid-filters.md](references/liquid-filters.md) - All filter categories with examples
- [references/liquid-objects.md](references/liquid-objects.md) - Product, collection, cart, customer, and global objects

**Theme development** - building or customising themes:

- [references/theme-development.md](references/theme-development.md) - OS 2.0 architecture, sections, blocks, JSON templates, settings schema

**API integration** - fetching or modifying data programmatically:

- [references/api-admin.md](references/api-admin.md) - GraphQL Admin API (primary), REST (legacy), OAuth, webhooks, rate limiting
- [references/api-storefront.md](references/api-storefront.md) - Storefront API, Ajax API, cart operations

**App development** - building Shopify apps:

- [references/app-development.md](references/app-development.md) - Shopify CLI, extensions, Polaris Web Components, App Bridge

**Serverless logic** - custom business rules:

- [references/functions.md](references/functions.md) - Shopify Functions (replacing Scripts), Rust/JS targets, deployment

**Headless commerce** - custom storefronts:

- [references/hydrogen.md](references/hydrogen.md) - Hydrogen framework, React Router 7, Storefront API integration

**Optimisation and troubleshooting**:

- [references/performance.md](references/performance.md) - Images, JS, CSS, fonts, Liquid, Core Web Vitals
- [references/debugging.md](references/debugging.md) - Liquid errors, API errors, cart issues, webhook failures

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @shopify-developer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @shopify-developer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @shopify-developer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @shopify-developer using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(development)/shopify-developer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/api-admin.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [api-admin.md](references/api-admin.md)
- [api-storefront.md](references/api-storefront.md)
- [app-development.md](references/app-development.md)
- [debugging.md](references/debugging.md)
- [api-admin.md](references/api-admin.md)
- [api-storefront.md](references/api-storefront.md)

### Imported Reference Notes

#### Imported: Quick Reference

| Item             | Value                                                               |
| ---------------- | ------------------------------------------------------------------- |
| API version      | `2026-01` (stable)                                                  |
| GraphQL Admin    | `POST https://{store}.myshopify.com/admin/api/2026-01/graphql.json` |
| Storefront API   | `POST https://{store}.myshopify.com/api/2026-01/graphql.json`       |
| Ajax API (theme) | `/cart.js`, `/cart/add.js`, `/cart/change.js`                       |
| CLI install      | `npm install -g @shopify/cli`                                       |
| Theme dev        | `shopify theme dev --store {store}.myshopify.com`                   |
| App dev          | `shopify app dev`                                                   |
| Deploy           | `shopify app deploy`                                                |
| Docs             | [shopify.dev](https://shopify.dev)                                  |

#### Imported: Reference Files

| File                                                    | Lines | Coverage                                                                       |
| ------------------------------------------------------- | ----- | ------------------------------------------------------------------------------ |
| [liquid-syntax.md](references/liquid-syntax.md)         | ~600  | Tags, control flow, iteration, variables, whitespace, LiquidDoc                |
| [liquid-filters.md](references/liquid-filters.md)       | ~870  | String, numeric, array, Shopify-specific, date, URL, colour filters            |
| [liquid-objects.md](references/liquid-objects.md)       | ~695  | All Shopify objects: product, variant, collection, cart, customer, order, etc. |
| [theme-development.md](references/theme-development.md) | ~1200 | File structure, JSON templates, sections, blocks, settings schema, layout      |
| [api-admin.md](references/api-admin.md)                 | ~595  | GraphQL queries/mutations, REST (legacy), OAuth, webhooks, rate limiting       |
| [api-storefront.md](references/api-storefront.md)       | ~235  | Storefront API, Ajax API, cart operations, Customer Account API                |
| [app-development.md](references/app-development.md)     | ~760  | CLI, app architecture, extensions, Polaris Web Components, deployment          |
| [functions.md](references/functions.md)                 | ~300  | Function types, Rust/JS targets, CLI workflow, Scripts migration               |
| [hydrogen.md](references/hydrogen.md)                   | ~375  | Setup, routing, data loading, Storefront API, deployment                       |
| [performance.md](references/performance.md)             | ~605  | Images, JS, CSS, fonts, Liquid, third-party scripts, Core Web Vitals           |
| [debugging.md](references/debugging.md)                 | ~650  | Liquid, JavaScript, API, cart, webhook, theme editor troubleshooting           |

#### Imported: Deprecation Notices

| Deprecated            | Replacement            | Deadline                                 |
| --------------------- | ---------------------- | ---------------------------------------- |
| Shopify Scripts       | Shopify Functions      | August 2025 (migration), sundown TBD     |
| checkout.liquid       | Checkout Extensibility | August 2024 (Plus), done                 |
| REST Admin API        | GraphQL Admin API      | Active deprecation (no removal date yet) |
| Legacy custom apps    | New auth model         | January 2025 (done)                      |
| Polaris React         | Polaris Web Components | Active migration                         |
| Remix (app framework) | React Router 7         | Hydrogen 2025.5.0+                       |

#### Imported: Liquid Essentials

Three syntax types:

```liquid
{{ product.title | upcase }}                    {# Output with filter #}
{% if product.available %}In stock{% endif %}   {# Logic tag #}
{% assign sale = product.price | times: 0.8 %}  {# Assignment #}
{%- if condition -%}Stripped whitespace{%- endif -%}
```

Key patterns:

```liquid
{% for product in collection.products limit: 5 %}
  {% render 'product-card', product: product %}
{% endfor %}

{% paginate collection.products by 12 %}
  {% for product in paginate.collection.products %}...{% endfor %}
  {{ paginate | default_pagination }}
{% endpaginate %}
```

#### Imported: API Essentials

```javascript
// GraphQL Admin - always use GraphQL over REST
const response = await fetch(`https://${store}.myshopify.com/admin/api/2026-01/graphql.json`, {
  method: 'POST',
  headers: {
    'X-Shopify-Access-Token': accessToken,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ query, variables }),
})
const { data, errors } = await response.json()
if (errors) throw new Error(errors[0].message)

// Ajax API (theme-only cart operations)
fetch('/cart/add.js', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ id: variantId, quantity: 1 }),
})
```

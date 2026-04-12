---
name: shopify-development-v2
description: "Shopify Development Skill workflow skill. Use this skill when the user needs Build Shopify apps, extensions, themes using GraphQL Admin API, Shopify CLI, Polaris UI, and Liquid and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["shopify-development-v2", "shopify-development", "build", "shopify", "apps", "extensions", "themes", "using"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Shopify Development Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/shopify-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Shopify Development Skill Use this skill when the user asks about: - Building Shopify apps or extensions - Creating checkout/admin/POS UI customizations - Developing themes with Liquid templating - Integrating with Shopify GraphQL or REST APIs - Implementing webhooks or billing - Working with metafields or Shopify Functions ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ROUTING: What to Build, Access Scopes, GraphQL Patterns (Validated against API 2026-01), Webhook Configuration, Scripts, Official Documentation Links.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Build Shopify apps, extensions, themes using GraphQL Admin API, Shopify CLI, Polaris UI, and Liquid.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: ROUTING: What to Build

**IF user wants to integrate external services OR build merchant tools OR charge for features:**
→ Build an **App** (see `references/app-development.md`)

**IF user wants to customize checkout OR add admin UI OR create POS actions OR implement discount rules:**
→ Build an **Extension** (see `references/extensions.md`)

**IF user wants to customize storefront design OR modify product/collection pages:**
→ Build a **Theme** (see `references/themes.md`)

**IF user needs both backend logic AND storefront UI:**
→ Build **App + Theme Extension** combination

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @shopify-development-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/shopify-development-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/shopify-development-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @shopify-development-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Shopify CLI Commands

Install CLI:

```bash
npm install -g @shopify/cli@latest
```

Create and run app:

```bash
shopify app init          # Create new app
shopify app dev           # Start dev server with tunnel
shopify app deploy        # Build and upload to Shopify
```

Generate extension:

```bash
shopify app generate extension --type checkout_ui_extension
shopify app generate extension --type admin_action
shopify app generate extension --type admin_block
shopify app generate extension --type pos_ui_extension
shopify app generate extension --type function
```

Theme development:

```bash
shopify theme init        # Create new theme
shopify theme dev         # Start local preview at localhost:9292
shopify theme pull --live # Pull live theme
shopify theme push --development  # Push to dev theme
```

---

#### Imported: Checkout Extension Example

```tsx
import {
  reactExtension,
  BlockStack,
  TextField,
  Checkbox,
  useApplyAttributeChange,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension("purchase.checkout.block.render", () => (
  <GiftMessage />
));

function GiftMessage() {
  const [isGift, setIsGift] = useState(false);
  const [message, setMessage] = useState("");
  const applyAttributeChange = useApplyAttributeChange();

  useEffect(() => {
    if (isGift && message) {
      applyAttributeChange({
        type: "updateAttribute",
        key: "gift_message",
        value: message,
      });
    }
  }, [isGift, message]);

  return (
    <BlockStack spacing="loose">
      <Checkbox checked={isGift} onChange={setIsGift}>
        This is a gift
      </Checkbox>
      {isGift && (
        <TextField
          label="Gift Message"
          value={message}
          onChange={setMessage}
          multiline={3}
        />
      )}
    </BlockStack>
  );
}
```

---

#### Imported: Liquid Template Example

```liquid
{% comment %} Product Card Snippet {% endcomment %}
<div class="product-card">
  <a href="{{ product.url }}">
    {% if product.featured_image %}
      <img
        src="{{ product.featured_image | img_url: 'medium' }}"
        alt="{{ product.title | escape }}"
        loading="lazy"
      >
    {% endif %}
    <h3>{{ product.title }}</h3>
    <p class="price">{{ product.price | money }}</p>
    {% if product.compare_at_price > product.price %}
      <p class="sale-badge">Sale</p>
    {% endif %}
  </a>
</div>
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use GraphQL over REST for new development
- Request only fields you need (reduces query cost)
- Implement cursor-based pagination with pageInfo.endCursor
- Use bulk operations for processing more than 250 items
- Handle rate limits with exponential backoff
- Store API credentials in environment variables
- Always verify webhook HMAC signatures before processing

### Imported Operating Notes

#### Imported: Best Practices

### API Usage

- Use GraphQL over REST for new development
- Request only fields you need (reduces query cost)
- Implement cursor-based pagination with `pageInfo.endCursor`
- Use bulk operations for processing more than 250 items
- Handle rate limits with exponential backoff

### Security

- Store API credentials in environment variables
- Always verify webhook HMAC signatures before processing
- Validate OAuth state parameter to prevent CSRF
- Request minimal access scopes
- Use session tokens for embedded apps

### Performance

- Cache API responses when data doesn't change frequently
- Use lazy loading in extensions
- Optimize images in themes using `img_url` filter
- Monitor GraphQL query costs via response headers

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/shopify-development`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**IF you see rate limit errors:**
→ Implement exponential backoff retry logic
→ Switch to bulk operations for large datasets
→ Monitor `X-Shopify-Shop-Api-Call-Limit` header

**IF authentication fails:**
→ Verify the access token is still valid
→ Check that all required scopes were granted
→ Ensure OAuth flow completed successfully

**IF extension is not appearing:**
→ Verify the extension target is correct
→ Check that extension is published via `shopify app deploy`
→ Confirm the app is installed on the test store

**IF webhook is not receiving events:**
→ Verify the webhook URL is publicly accessible
→ Check HMAC signature validation logic
→ Review webhook logs in Partner Dashboard

**IF GraphQL query fails:**
→ Validate query against schema (use GraphiQL explorer)
→ Check for deprecated fields in error message
→ Verify you have required access scopes

---

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/app-development.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/.gitignore` |
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

#### Imported: Reference Files

For detailed implementation guides, read these files:

- `references/app-development.md` - OAuth authentication flow, GraphQL mutations for products/orders/billing, webhook handlers, billing API integration
- `references/extensions.md` - Checkout UI components, Admin UI extensions, POS extensions, Shopify Functions for discounts/payment/delivery
- `references/themes.md` - Liquid syntax reference, theme directory structure, sections and snippets, common patterns

---

#### Imported: Access Scopes

Configure in `shopify.app.toml`:

```toml
[access_scopes]
scopes = "read_products,write_products,read_orders,write_orders,read_customers"
```

Common scopes:

- `read_products`, `write_products` - Product catalog access
- `read_orders`, `write_orders` - Order management
- `read_customers`, `write_customers` - Customer data
- `read_inventory`, `write_inventory` - Stock levels
- `read_fulfillments`, `write_fulfillments` - Order fulfillment

---

#### Imported: GraphQL Patterns (Validated against API 2026-01)

### Query Products

```graphql
query GetProducts($first: Int!, $query: String) {
  products(first: $first, query: $query) {
    edges {
      node {
        id
        title
        handle
        status
        variants(first: 5) {
          edges {
            node {
              id
              price
              inventoryQuantity
            }
          }
        }
      }
    }
    pageInfo {
      hasNextPage
      endCursor
    }
  }
}
```

### Query Orders

```graphql
query GetOrders($first: Int!) {
  orders(first: $first) {
    edges {
      node {
        id
        name
        createdAt
        displayFinancialStatus
        totalPriceSet {
          shopMoney {
            amount
            currencyCode
          }
        }
      }
    }
  }
}
```

### Set Metafields

```graphql
mutation SetMetafields($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      id
      namespace
      key
      value
    }
    userErrors {
      field
      message
    }
  }
}
```

Variables example:

```json
{
  "metafields": [
    {
      "ownerId": "gid://shopify/Product/123",
      "namespace": "custom",
      "key": "care_instructions",
      "value": "Handle with care",
      "type": "single_line_text_field"
    }
  ]
}
```

---

#### Imported: Webhook Configuration

In `shopify.app.toml`:

```toml
[webhooks]
api_version = "2026-01"

[[webhooks.subscriptions]]
topics = ["orders/create", "orders/updated"]
uri = "/webhooks/orders"

[[webhooks.subscriptions]]
topics = ["products/update"]
uri = "/webhooks/products"

# GDPR mandatory webhooks (required for app approval)
[webhooks.privacy_compliance]
customer_data_request_url = "/webhooks/gdpr/data-request"
customer_deletion_url = "/webhooks/gdpr/customer-deletion"
shop_deletion_url = "/webhooks/gdpr/shop-deletion"
```

---

#### Imported: Scripts

- `scripts/shopify_init.py` - Interactive project scaffolding. Run: `python scripts/shopify_init.py`
- `scripts/shopify_graphql.py` - GraphQL utilities with query templates, pagination, rate limiting. Import: `from shopify_graphql import ShopifyGraphQL`

---

#### Imported: Official Documentation Links

- Shopify Developer Docs: https://shopify.dev/docs
- GraphQL Admin API Reference: https://shopify.dev/docs/api/admin-graphql
- Shopify CLI Reference: https://shopify.dev/docs/api/shopify-cli
- Polaris Design System: https://polaris.shopify.com

API Version: 2026-01 (quarterly releases, 12-month deprecation window)

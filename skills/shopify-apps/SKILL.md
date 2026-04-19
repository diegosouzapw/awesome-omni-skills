---
name: shopify-apps
description: "Shopify Apps workflow skill. Use this skill when the user needs Expert patterns for Shopify app development including Remix/React and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["shopify-apps", "expert", "patterns", "for", "shopify", "app", "development", "including"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Shopify Apps

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/shopify-apps` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Shopify Apps Expert patterns for Shopify app development including Remix/React Router apps, embedded apps with App Bridge, webhook handling, GraphQL Admin API, Polaris components, billing, and app extensions.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Patterns, Sharp Edges, For simple operations, be quick, Monitor webhook performance, Check rate limit headers, Implement retry with exponential backoff.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: shopify app
- User mentions or implies: shopify
- User mentions or implies: embedded app
- User mentions or implies: polaris
- User mentions or implies: app bridge
- User mentions or implies: shopify webhook

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. ``typescript // app/routes/webhooks.tsx export const action = async ({ request }: ActionFunctionArgs) => { const { topic, shop, payload } = await authenticate.webhook(request); // Queue for async processing await jobQueue.add("process-webhook", { topic, shop, payload, }); // CRITICAL: Return 200 immediately return new Response(null, { status: 200 }); }; // Worker process handles the actual work // workers/webhook-processor.ts import { Worker } from "bullmq"; const worker = new Worker("process-webhook", async (job) => { const { topic, shop, payload } = job.data; switch (topic) { case "ORDERS_CREATE": await processOrder(shop, payload); break; // ...
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Respond immediately, process asynchronously

```typescript
// app/routes/webhooks.tsx
export const action = async ({ request }: ActionFunctionArgs) => {
  const { topic, shop, payload } = await authenticate.webhook(request);

  // Queue for async processing
  await jobQueue.add("process-webhook", {
    topic,
    shop,
    payload,
  });

  // CRITICAL: Return 200 immediately
  return new Response(null, { status: 200 });
};

// Worker process handles the actual work
// workers/webhook-processor.ts
import { Worker } from "bullmq";

const worker = new Worker("process-webhook", async (job) => {
  const { topic, shop, payload } = job.data;

  switch (topic) {
    case "ORDERS_CREATE":
      await processOrder(shop, payload);
      break;
    // ... other handlers
  }
});
```

#### Imported: Patterns

### React Router App Setup

Modern Shopify app template with React Router

**When to use**: Starting a new Shopify app

### Template

# Create new Shopify app with CLI
npm init @shopify/app@latest my-shopify-app

# Project structure
# my-shopify-app/
# ├── app/
# │   ├── routes/
# │   │   ├── app._index.tsx        # Main app page
# │   │   ├── app.tsx               # App layout with providers
# │   │   ├── auth.$.tsx            # Auth callback
# │   │   └── webhooks.tsx          # Webhook handler
# │   ├── shopify.server.ts         # Server configuration
# │   └── root.tsx                  # Root layout
# ├── extensions/                   # App extensions
# ├── shopify.app.toml              # App configuration
# └── package.json

// shopify.app.toml
name = "my-shopify-app"
client_id = "your-client-id"
application_url = "https://your-app.example.com"

[access_scopes]
scopes = "read_products,write_products,read_orders"

[webhooks]
api_version = "2024-10"

[webhooks.subscriptions]
topics = ["orders/create", "products/update"]
uri = "/webhooks"

[auth]
redirect_urls = ["https://your-app.example.com/auth/callback"]

// app/shopify.server.ts
import "@shopify/shopify-app-remix/adapters/node";
import {
  LATEST_API_VERSION,
  shopifyApp,
  DeliveryMethod,
} from "@shopify/shopify-app-remix/server";
import { PrismaSessionStorage } from "@shopify/shopify-app-session-storage-prisma";
import prisma from "./db.server";

const shopify = shopifyApp({
  apiKey: process.env.SHOPIFY_API_KEY!,
  apiSecretKey: process.env.SHOPIFY_API_SECRET!,
  scopes: process.env.SCOPES?.split(","),
  appUrl: process.env.SHOPIFY_APP_URL!,
  authPathPrefix: "/auth",
  sessionStorage: new PrismaSessionStorage(prisma),
  distribution: AppDistribution.AppStore,
  future: {
    unstable_newEmbeddedAuthStrategy: true,
  },
  ...(process.env.SHOP_CUSTOM_DOMAIN
    ? { customShopDomains: [process.env.SHOP_CUSTOM_DOMAIN] }
    : {}),
});

export default shopify;
export const apiVersion = LATEST_API_VERSION;
export const authenticate = shopify.authenticate;
export const sessionStorage = shopify.sessionStorage;

### Notes

- React Router replaced Remix as recommended template (late 2024)
- unstable_newEmbeddedAuthStrategy enabled by default for new apps
- Webhooks configured in shopify.app.toml, not code
- Run 'shopify app deploy' to apply configuration changes

### Embedded App with App Bridge

Render app embedded in Shopify Admin

**When to use**: Building embedded admin app

### Template

// app/routes/app.tsx - App layout with providers
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export async function loader({ request }: LoaderFunctionArgs) {
  await authenticate.admin(request);
  return json({ apiKey: process.env.SHOPIFY_API_KEY! });
}

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <ui-nav-menu>
        <Link to="/app" rel="home">Home</Link>
        <Link to="/app/products">Products</Link>
        <Link to="/app/settings">Settings</Link>
      </ui-nav-menu>
      <Outlet />
    </AppProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <AppProvider isEmbeddedApp>
      <Page>
        <Card>
          <Text as="p" variant="bodyMd">
            Something went wrong. Please try again.
          </Text>
        </Card>
      </Page>
    </AppProvider>
  );
}

// app/routes/app._index.tsx - Main app page
import {
  Page,
  Layout,
  Card,
  Text,
  BlockStack,
  Button,
} from "@shopify/polaris";
import { TitleBar } from "@shopify/app-bridge-react";

export async function loader({ request }: LoaderFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  // GraphQL query
  const response = await admin.graphql(`
    query {
      shop {
        name
        email
      }
    }
  `);

  const { data } = await response.json();
  return json({ shop: data.shop });
}

export default function Index() {
  const { shop } = useLoaderData<typeof loader>();

  return (
    <Page>
      <TitleBar title="My Shopify App" />
      <Layout>
        <Layout.Section>
          <Card>
            <BlockStack gap="200">
              <Text as="h2" variant="headingMd">
                Welcome to {shop.name}!
              </Text>
              <Text as="p" variant="bodyMd">
                Your app is now connected to this store.
              </Text>
              <Button variant="primary">
                Get Started
              </Button>
            </BlockStack>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

### Notes

- App Bridge required for Built for Shopify (July 2025)
- Polaris components match Shopify Admin design
- TitleBar and navigation from App Bridge
- Always authenticate requests with authenticate.admin()

### Webhook Handling

Secure webhook processing with HMAC verification

**When to use**: Receiving Shopify webhooks

### Template

// app/routes/webhooks.tsx
import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";
import db from "../db.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  // Authenticate webhook (verifies HMAC signature)
  const { topic, shop, payload, admin } = await authenticate.webhook(request);

  console.log(`Received ${topic} webhook for ${shop}`);

  // Process based on topic
  switch (topic) {
    case "ORDERS_CREATE":
      // Queue for async processing
      await queueOrderProcessing(payload);
      break;

    case "PRODUCTS_UPDATE":
      await handleProductUpdate(shop, payload);
      break;

    case "APP_UNINSTALLED":
      // Clean up shop data
      await db.session.deleteMany({ where: { shop } });
      await db.shopData.delete({ where: { shop } });
      break;

    case "CUSTOMERS_DATA_REQUEST":
    case "CUSTOMERS_REDACT":
    case "SHOP_REDACT":
      // GDPR webhooks - mandatory
      await handleGDPRWebhook(topic, payload);
      break;

    default:
      console.log(`Unhandled webhook topic: ${topic}`);
  }

  // CRITICAL: Return 200 immediately
  // Shopify expects response within 5 seconds
  return new Response(null, { status: 200 });
};

// Process asynchronously after responding
async function queueOrderProcessing(payload: any) {
  // Use a job queue (BullMQ, etc.)
  await jobQueue.add("process-order", {
    orderId: payload.id,
    orderData: payload,
  });
}

async function handleProductUpdate(shop: string, payload: any) {
  // Quick sync operation only
  await db.product.upsert({
    where: { shopifyId: payload.id },
    update: {
      title: payload.title,
      updatedAt: new Date(),
    },
    create: {
      shopifyId: payload.id,
      shop,
      title: payload.title,
    },
  });
}

async function handleGDPRWebhook(topic: string, payload: any) {
  // GDPR compliance - required for all apps
  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
      // Return customer data within 30 days
      break;
    case "CUSTOMERS_REDACT":
      // Delete customer data
      break;
    case "SHOP_REDACT":
      // Delete all shop data (48 hours after uninstall)
      break;
  }
}

### Notes

- Respond within 5 seconds or webhook fails
- Use job queues for heavy processing
- GDPR webhooks are mandatory for App Store
- HMAC verification handled by authenticate.webhook()

### GraphQL Admin API

Query and mutate shop data with GraphQL

**When to use**: Interacting with Shopify Admin API

### Template

// GraphQL queries with authenticated admin client
export async function loader({ request }: LoaderFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  // Query products with pagination
  const response = await admin.graphql(`
    query GetProducts($first: Int!, $after: String) {
      products(first: $first, after: $after) {
        edges {
          node {
            id
            title
            status
            totalInventory
            priceRangeV2 {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `, {
    variables: {
      first: 10,
      after: null,
    },
  });

  const { data } = await response.json();
  return json({ products: data.products });
}

// Mutations
export async function action({ request }: ActionFunctionArgs) {
  const { admin } = await authenticate.admin(request);
  const formData = await request.formData();
  const productId = formData.get("productId");
  const newTitle = formData.get("title");

  const response = await admin.graphql(`
    mutation UpdateProduct($input: ProductInput!) {
      productUpdate(input: $input) {
        product {
          id
          title
        }
        userErrors {
          field
          message
        }
      }
    }
  `, {
    variables: {
      input: {
        id: productId,
        title: newTitle,
      },
    },
  });

  const { data } = await response.json();

  if (data.productUpdate.userErrors.length > 0) {
    return json({
      errors: data.productUpdate.userErrors,
    }, { status: 400 });
  }

  return json({ product: data.productUpdate.product });
}

// Bulk operations for large datasets
async function bulkUpdateProducts(admin: AdminApiContext) {
  // Create bulk operation
  const response = await admin.graphql(`
    mutation {
      bulkOperationRunMutation(
        mutation: "mutation call($input: ProductInput!) {
          productUpdate(input: $input) { product { id } }
        }",
        stagedUploadPath: "path-to-staged-upload"
      ) {
        bulkOperation {
          id
          status
        }
        userErrors {
          message
        }
      }
    }
  `);

  // Poll for completion or use webhook
  // BULK_OPERATIONS_FINISH webhook
}

### Notes

- GraphQL required for new public apps (April 2025)
- Rate limit: 1000 points per 60 seconds
- Use bulk operations for >250 items
- Direct API access available from App Bridge

### Billing API Integration

Implement subscription billing for your app

**When to use**: Monetizing Shopify app

### Template

// app/routes/app.billing.tsx
import { json, redirect } from "@remix-run/node";
import { Page, Card, Button, BlockStack, Text } from "@shopify/polaris";
import { authenticate } from "../shopify.server";

const PLANS = {
  basic: {
    name: "Basic",
    amount: 9.99,
    currencyCode: "USD",
    interval: "EVERY_30_DAYS",
  },
  pro: {
    name: "Pro",
    amount: 29.99,
    currencyCode: "USD",
    interval: "EVERY_30_DAYS",
  },
};

export async function loader({ request }: LoaderFunctionArgs) {
  const { admin, billing } = await authenticate.admin(request);

  // Check current subscription
  const response = await admin.graphql(`
    query {
      currentAppInstallation {
        activeSubscriptions {
          id
          name
          status
          lineItems {
            plan {
              pricingDetails {
                ... on AppRecurringPricing {
                  price {
                    amount
                    currencyCode
                  }
                  interval
                }
              }
            }
          }
        }
      }
    }
  `);

  const { data } = await response.json();
  return json({
    subscription: data.currentAppInstallation.activeSubscriptions[0],
  });
}

export async function action({ request }: ActionFunctionArgs) {
  const { admin, session } = await authenticate.admin(request);
  const formData = await request.formData();
  const planKey = formData.get("plan") as keyof typeof PLANS;
  const plan = PLANS[planKey];

  // Create subscription charge
  const response = await admin.graphql(`
    mutation CreateSubscription($name: String!, $lineItems: [AppSubscriptionLineItemInput!]!, $returnUrl: URL!, $test: Boolean) {
      appSubscriptionCreate(
        name: $name
        lineItems: $lineItems
        returnUrl: $returnUrl
        test: $test
      ) {
        appSubscription {
          id
          status
        }
        confirmationUrl
        userErrors {
          field
          message
        }
      }
    }
  `, {
    variables: {
      name: plan.name,
      lineItems: [
        {
          plan: {
            appRecurringPricingDetails: {
              price: {
                amount: plan.amount,
                currencyCode: plan.currencyCode,
              },
              interval: plan.interval,
            },
          },
        },
      ],
      returnUrl: `https://${session.shop}/admin/apps/${process.env.SHOPIFY_API_KEY}`,
      test: process.env.NODE_ENV !== "production",
    },
  });

  const { data } = await response.json();

  if (data.appSubscriptionCreate.userErrors.length > 0) {
    return json({
      errors: data.appSubscriptionCreate.userErrors,
    }, { status: 400 });
  }

  // Redirect merchant to approve charge
  return redirect(data.appSubscriptionCreate.confirmationUrl);
}

export default function Billing() {
  const { subscription } = useLoaderData<typeof loader>();
  const submit = useSubmit();

  return (
    <Page title="Billing">
      <Card>
        {subscription ? (
          <BlockStack gap="200">
            <Text as="p" variant="bodyMd">
              Current plan: {subscription.name}
            </Text>
            <Text as="p" variant="bodyMd">
              Status: {subscription.status}
            </Text>
          </BlockStack>
        ) : (
          <BlockStack gap="400">
            <Text as="h2" variant="headingMd">
              Choose a Plan
            </Text>
            <Button onClick={() => submit({ plan: "basic" }, { method: "post" })}>
              Basic - $9.99/month
            </Button>
            <Button onClick={() => submit({ plan: "pro" }, { method: "post" })}>
              Pro - $29.99/month
            </Button>
          </BlockStack>
        )}
      </Card>
    </Page>
  );
}

### Notes

- Use test: true for development stores
- Merchant must approve subscription
- One recurring + one usage charge per app max
- 30-day billing cycle for recurring charges

### App Extension Development

Extend Shopify checkout, admin, or storefront

**When to use**: Building app extensions

### Template

# shopify.extension.toml (in extensions/my-extension/)
api_version = "2024-10"

[[extensions]]
type = "ui_extension"
name = "Product Customizer"
handle = "product-customizer"

[[extensions.targeting]]
target = "admin.product-details.block.render"
module = "./src/AdminBlock.tsx"

[extensions.capabilities]
api_access = true

[extensions.settings]
[[extensions.settings.fields]]
key = "show_preview"
type = "boolean"
name = "Show Preview"

// extensions/my-extension/src/AdminBlock.tsx
import {
  reactExtension,
  useApi,
  useSettings,
  BlockStack,
  Text,
  Button,
  InlineStack,
} from "@shopify/ui-extensions-react/admin";

export default reactExtension(
  "admin.product-details.block.render",
  () => <ProductCustomizer />
);

function ProductCustomizer() {
  const { data, extension } = useApi<"admin.product-details.block.render">();
  const settings = useSettings();

  const productId = data?.selected?.[0]?.id;

  const handleCustomize = async () => {
    // API calls from extension
    const result = await fetch("/api/customize", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
  };

  return (
    <BlockStack gap="base">
      <Text fontWeight="bold">Product Customizer</Text>
      <Text>
        Customize product: {productId}
      </Text>
      {settings.show_preview && (
        <Text size="small">Preview enabled</Text>
      )}
      <InlineStack gap="base">
        <Button onPress={handleCustomize}>
          Apply Customization
        </Button>
      </InlineStack>
    </BlockStack>
  );
}

// Checkout UI Extension
// [[extensions.targeting]]
// target = "purchase.checkout.block.render"

// extensions/checkout-ext/src/Checkout.tsx
import {
  reactExtension,
  Banner,
  useCartLines,
  useTotalAmount,
} from "@shopify/ui-extensions-react/checkout";

export default reactExtension(
  "purchase.checkout.block.render",
  () => <CheckoutBanner />
);

function CheckoutBanner() {
  const cartLines = useCartLines();
  const total = useTotalAmount();

  if (total.amount > 100) {
    return (
      <Banner status="success">
        You qualify for free shipping!
      </Banner>
    );
  }

  return null;
}

### Notes

- Extensions run in sandboxed iframe
- Use @shopify/ui-extensions-react for React
- Limited APIs compared to full app
- Deploy with 'shopify app deploy'

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @shopify-apps to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @shopify-apps against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @shopify-apps for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @shopify-apps using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/shopify-apps`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@server-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Sharp Edges

### Webhook Must Respond Within 5 Seconds

Severity: HIGH

Situation: Receiving webhooks from Shopify

Symptoms:
Webhook deliveries marked as failed.
"Your app didn't respond in time" in Shopify logs.
Missing order/product updates.
Webhooks retried repeatedly then cancelled.

Why this breaks:
Shopify expects a 2xx response within 5 seconds. If your app processes
the webhook data before responding, you'll timeout.

Shopify retries failed webhooks up to 19 times over 48 hours.
After continued failures, webhooks may be cancelled entirely.

Heavy processing (API calls, database operations) must happen
after the response is sent.

Recommended fix:

#### Imported: For simple operations, be quick

```typescript
// Simple database update is OK if fast
export const action = async ({ request }: ActionFunctionArgs) => {
  const { topic, payload } = await authenticate.webhook(request);

  // Quick database update (< 1 second)
  await db.product.update({
    where: { shopifyId: payload.id },
    data: { title: payload.title },
  });

  return new Response(null, { status: 200 });
};
```

#### Imported: Monitor webhook performance

```typescript
// Log response times
const start = Date.now();

await handleWebhook(payload);

const duration = Date.now() - start;
console.log(`Webhook processed in ${duration}ms`);

// Alert if approaching timeout
if (duration > 3000) {
  console.warn("Webhook processing taking too long!");
}
```

### API Rate Limits Cause 429 Errors

Severity: HIGH

Situation: Making API calls to Shopify

Symptoms:
HTTP 429 Too Many Requests errors.
"Throttled" responses.
App becomes unresponsive.
Operations fail silently or partially.

Why this breaks:
Shopify enforces strict rate limits:
- REST: 2 requests per second per store
- GraphQL: 1000 points per 60 seconds

Exceeding limits causes immediate 429 errors.
Continuous violations can result in temporary bans.

Bulk operations count against limits.

Recommended fix:

#### Imported: Check rate limit headers

```typescript
// REST API
// X-Shopify-Shop-Api-Call-Limit: 39/40

// GraphQL - check response extensions
const response = await admin.graphql(`...`);
const { data, extensions } = await response.json();

const cost = extensions?.cost;
// {
//   "requestedQueryCost": 42,
//   "actualQueryCost": 42,
//   "throttleStatus": {
//     "maximumAvailable": 1000,
//     "currentlyAvailable": 958,
//     "restoreRate": 50
//   }
// }
```

#### Imported: Implement retry with exponential backoff

```typescript
async function shopifyRequest(
  fn: () => Promise<Response>,
  maxRetries = 3
): Promise<Response> {
  let lastError: Error;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const response = await fn();

      if (response.status === 429) {
        // Get retry-after header or default
        const retryAfter = parseInt(
          response.headers.get("Retry-After") || "2"
        );
        await sleep(retryAfter * 1000 * Math.pow(2, attempt));
        continue;
      }

      return response;
    } catch (error) {
      lastError = error as Error;
    }
  }

  throw lastError!;
}
```

#### Imported: Use bulk operations for large datasets

```typescript
// Instead of 1000 individual calls, use bulk mutation
const response = await admin.graphql(`
  mutation {
    bulkOperationRunMutation(
      mutation: "mutation($input: ProductInput!) {
        productUpdate(input: $input) { product { id } }
      }",
      stagedUploadPath: "..."
    ) {
      bulkOperation { id status }
      userErrors { message }
    }
  }
`);
```

#### Imported: Queue requests

```typescript
import { RateLimiter } from "limiter";

// 2 requests per second for REST
const limiter = new RateLimiter({
  tokensPerInterval: 2,
  interval: "second",
});

async function rateLimitedRequest(fn: () => Promise<any>) {
  await limiter.removeTokens(1);
  return fn();
}
```

### Protected Customer Data Requires Special Permission

Severity: HIGH

Situation: Accessing customer PII in webhooks or API

Symptoms:
Webhook deliveries fail for orders/customers.
Customer data fields are null or empty.
App works in development but fails in production.
"Protected customer data access" errors.

Why this breaks:
Since April 2024, accessing protected customer data (PII) requires
explicit approval from Shopify. This is separate from OAuth scopes.

Protected data includes:
- Customer names, emails, addresses
- Order customer information
- Subscription customer details

Even with read_orders scope, you won't receive customer data
in webhooks without protected data access.

Recommended fix:

#### Imported: Request protected customer data access

1. Go to Partner Dashboard > App > API access
2. Under "Protected customer data access"
3. Request access for needed data types
4. Justify your use case
5. Wait for Shopify approval (can take days)

#### Imported: Check your data access level

```typescript
// Query your app's data access
const response = await admin.graphql(`
  query {
    currentAppInstallation {
      accessScopes {
        handle
      }
    }
  }
`);
```

#### Imported: Handle missing data gracefully

```typescript
// Webhook payload may have redacted fields
async function processOrder(payload: any) {
  const customerEmail = payload.customer?.email;

  if (!customerEmail) {
    // Customer data not available
    // Either no protected access or data redacted
    console.log("Customer data not available");
    return;
  }

  await sendOrderConfirmation(customerEmail);
}
```

#### Imported: Use customer account API for direct access

```typescript
// If customer is logged in, can access their data
// through Customer Account API (different from Admin API)
```

### Duplicate Webhook Definitions Cause Conflicts

Severity: MEDIUM

Situation: Configuring webhooks in both TOML and code

Symptoms:
Duplicate webhook deliveries.
Some webhooks fire twice.
Webhook subscriptions fail to register.
Unpredictable webhook behavior.

Why this breaks:
Shopify apps can define webhooks in two places:
1. shopify.app.toml (declarative, recommended)
2. afterAuth hook in code (imperative, legacy)

If you define the same webhook in both places, you get:
- Duplicate subscriptions
- Race conditions during registration
- Conflicts during app updates

Recommended fix:

#### Imported: Use TOML only (recommended)

```toml
# shopify.app.toml
[webhooks]
api_version = "2024-10"

[webhooks.subscriptions]
topics = [
  "orders/create",
  "orders/updated",
  "products/create",
  "products/update",
  "app/uninstalled"
]
uri = "/webhooks"
```

#### Imported: Remove code-based registration

```typescript
// DON'T do this if using TOML
const shopify = shopifyApp({
  // ...
  hooks: {
    afterAuth: async ({ session }) => {
      // Remove webhook registration from here
      // Let TOML handle it
    },
  },
});
```

#### Imported: Deploy to apply TOML changes

```bash
# Webhooks registered on deploy
shopify app deploy
```

#### Imported: Check current subscriptions

```typescript
const response = await admin.graphql(`
  query {
    webhookSubscriptions(first: 50) {
      edges {
        node {
          id
          topic
          endpoint {
            ... on WebhookHttpEndpoint {
              callbackUrl
            }
          }
        }
      }
    }
  }
`);
```

### Webhook URL Trailing Slash Causes 404

Severity: MEDIUM

Situation: Setting up webhook endpoints

Symptoms:
Webhooks return 404 Not Found.
Webhook delivery fails immediately.
Works in local dev but fails in production.
Logs show request to /webhooks/ not /webhooks.

Why this breaks:
Shopify automatically adds a trailing slash to webhook URLs.
If your server doesn't handle both /webhooks and /webhooks/,
the webhook will 404.

Common with frameworks that are strict about trailing slashes.

Recommended fix:

#### Imported: Handle both URL formats

```typescript
// Remix/React Router - both work by default
// app/routes/webhooks.tsx handles /webhooks

// Express - add middleware
app.use((req, res, next) => {
  if (req.path.endsWith('/') && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    const safePath = req.path.slice(0, -1);
    res.redirect(301, safePath + query);
  }
  next();
});
```

#### Imported: Configure web server

```nginx
# Nginx - strip trailing slashes
location ~ ^(.+)/$ {
  return 301 $1;
}

# Or rewrite to handler
location /webhooks {
  try_files $uri $uri/ @webhooks;
}
location @webhooks {
  proxy_pass http://app:3000/webhooks;
}
```

#### Imported: Test both formats

```bash
# Test without slash
curl -X POST https://your-app.com/webhooks

# Test with slash
curl -X POST https://your-app.com/webhooks/
```

### REST API Required Migration to GraphQL (April 2025)

Severity: HIGH

Situation: Building new public apps or maintaining existing

Symptoms:
App store submission rejected for REST API usage.
Deprecation warnings in console.
Some REST endpoints stop working.
Missing features only in GraphQL.

Why this breaks:
As of October 2024, REST Admin API is legacy.
Starting April 2025, new public apps MUST use GraphQL.

REST endpoints will continue working for existing apps,
but new features are GraphQL-only.

Metafields, bulk operations, and many new features
require GraphQL.

Recommended fix:

#### Imported: Use GraphQL for all new code

```typescript
// REST (legacy)
const response = await fetch(
  `https://${shop}/admin/api/2024-10/products.json`,
  {
    headers: { "X-Shopify-Access-Token": token },
  }
);

// GraphQL (recommended)
const response = await admin.graphql(`
  query {
    products(first: 10) {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`);
```

#### Imported: Migrate existing REST calls

```typescript
// REST: GET /products/{id}.json
// GraphQL equivalent:
const response = await admin.graphql(`
  query GetProduct($id: ID!) {
    product(id: $id) {
      id
      title
      status
      variants(first: 10) {
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
`, {
  variables: { id: `gid://shopify/Product/${productId}` },
});
```

#### Imported: Use GraphQL for webhooks too

```toml
# shopify.app.toml
[webhooks]
api_version = "2024-10"  # Use latest GraphQL version
```

### App Bridge Required for Built for Shopify (July 2025)

Severity: HIGH

Situation: Building embedded Shopify apps

Symptoms:
App rejected from "Built for Shopify" program.
App not appearing correctly in admin.
Navigation and chrome issues.
Warning about App Bridge version.

Why this breaks:
Effective July 2025, all apps seeking "Built for Shopify" status
must use the latest version of App Bridge and be embedded.

Apps using old App Bridge versions or not embedded will
lose built for Shopify benefits (better placement, badges).

Shopify now serves App Bridge and Polaris via unversioned
script tags that auto-update.

Recommended fix:

#### Imported: Use latest App Bridge via script tag

```html
<!-- Automatically stays up to date -->
<script src="https://cdn.shopify.com/shopifycloud/app-bridge.js"></script>
```

#### Imported: Use AppProvider in React

```typescript
// app/routes/app.tsx
import { AppProvider } from "@shopify/shopify-app-remix/react";

export default function App() {
  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <Outlet />
    </AppProvider>
  );
}
```

#### Imported: Enable embedded auth strategy

```typescript
// shopify.server.ts
const shopify = shopifyApp({
  // ...
  future: {
    unstable_newEmbeddedAuthStrategy: true,
  },
});
```

#### Imported: Check embedded status

```typescript
import { useAppBridge } from "@shopify/app-bridge-react";

function MyComponent() {
  const app = useAppBridge();
  const isEmbedded = app.hostOrigin !== window.location.origin;
}
```

### Missing GDPR Webhooks Block App Store Approval

Severity: HIGH

Situation: Submitting app to Shopify App Store

Symptoms:
App submission rejected.
"GDPR webhooks not implemented" error.
Manual review fails for compliance.
Data request webhooks not handled.

Why this breaks:
Shopify requires all apps to handle three GDPR webhooks:
1. customers/data_request - Provide customer data
2. customers/redact - Delete customer data
3. shop/redact - Delete all shop data

These are automatically subscribed when you create an app.
You MUST implement handlers even if you don't store data.

Recommended fix:

#### Imported: Implement all GDPR handlers

```typescript
// app/routes/webhooks.tsx
export const action = async ({ request }: ActionFunctionArgs) => {
  const { topic, payload, shop } = await authenticate.webhook(request);

  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
      await handleDataRequest(shop, payload);
      break;

    case "CUSTOMERS_REDACT":
      await handleCustomerRedact(shop, payload);
      break;

    case "SHOP_REDACT":
      await handleShopRedact(shop, payload);
      break;
  }

  return new Response(null, { status: 200 });
};

async function handleDataRequest(shop: string, payload: any) {
  const customerId = payload.customer.id;

  // Return customer data within 30 days
  // Usually send to data_request.destination_url
  const customerData = await db.customer.findUnique({
    where: { shopifyId: customerId, shop },
  });

  if (customerData) {
    // Send to provided URL or email
    await sendDataToMerchant(payload.data_request, customerData);
  }
}

async function handleCustomerRedact(shop: string, payload: any) {
  const customerId = payload.customer.id;

  // Delete customer's personal data
  await db.customer.deleteMany({
    where: { shopifyId: customerId, shop },
  });

  await db.order.updateMany({
    where: { customerId, shop },
    data: { customerEmail: null, customerName: null },
  });
}

async function handleShopRedact(shop: string, payload: any) {
  // Shop uninstalled 48+ hours ago
  // Delete ALL data for this shop
  await db.session.deleteMany({ where: { shop } });
  await db.customer.deleteMany({ where: { shop } });
  await db.order.deleteMany({ where: { shop } });
  await db.settings.deleteMany({ where: { shop } });
}
```

#### Imported: Even if you store nothing

```typescript
// You must still respond 200
case "CUSTOMERS_DATA_REQUEST":
case "CUSTOMERS_REDACT":
case "SHOP_REDACT":
  // No data stored, but must acknowledge
  console.log(`GDPR ${topic} for ${shop} - no data stored`);
  break;
```

#### Imported: Validation Checks

### Hardcoded Shopify API Secret

Severity: ERROR

API secrets must never be hardcoded

Message: Hardcoded Shopify API secret. Use environment variables.

### Hardcoded Shopify API Key

Severity: ERROR

API keys should use environment variables

Message: Hardcoded Shopify API key. Use environment variables.

### Missing HMAC Verification

Severity: ERROR

Webhook endpoints must verify HMAC signature

Message: Webhook handler without HMAC verification. Use authenticate.webhook().

### Synchronous Webhook Processing

Severity: WARNING

Webhook handlers should respond quickly

Message: Multiple await calls in webhook handler. Consider async processing.

### Missing Webhook Response

Severity: ERROR

Webhooks must return 200 status

Message: Webhook handler may not return proper response.

### Duplicate Webhook Registration

Severity: WARNING

Webhooks should be defined in TOML only

Message: Code-based webhook registration. Define webhooks in shopify.app.toml.

### REST API Usage

Severity: INFO

REST API is deprecated, use GraphQL

Message: REST API usage detected. Consider migrating to GraphQL.

### Missing Rate Limit Handling

Severity: WARNING

API calls should handle 429 responses

Message: API call without rate limit handling. Implement retry logic.

### In-Memory Session Storage

Severity: WARNING

In-memory sessions don't scale

Message: In-memory session storage. Use PrismaSessionStorage or similar.

### Missing Session Validation

Severity: ERROR

Routes should validate session

Message: Loader without authentication. Use authenticate.admin(request).

#### Imported: Collaboration

### Delegation Triggers

- user needs payment processing -> stripe-integration (Shopify Payments or Stripe integration)
- user needs custom authentication -> auth-specialist (Beyond Shopify OAuth)
- user needs email/SMS notifications -> twilio-communications (Customer notifications outside Shopify)
- user needs AI features -> llm-architect (Product descriptions, chatbots)
- user needs serverless deployment -> aws-serverless (Lambda or Vercel deployment)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

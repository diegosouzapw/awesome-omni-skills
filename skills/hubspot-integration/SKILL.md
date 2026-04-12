---
name: hubspot-integration
description: "HubSpot Integration workflow skill. Use this skill when the user needs Expert patterns for HubSpot CRM integration including OAuth and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["hubspot-integration", "expert", "patterns", "for", "hubspot", "crm", "integration", "including"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# HubSpot Integration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/hubspot-integration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# HubSpot Integration Expert patterns for HubSpot CRM integration including OAuth authentication, CRM objects, associations, batch operations, webhooks, and custom objects. Covers Node.js and Python SDKs.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Patterns, Sharp Edges, Validation Checks, Collaboration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: hubspot
- User mentions or implies: hubspot api
- User mentions or implies: hubspot crm
- User mentions or implies: hubspot integration
- User mentions or implies: contacts api
- Use when the request clearly matches the imported source intent: Expert patterns for HubSpot CRM integration including OAuth.

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

#### Imported: Patterns

### OAuth 2.0 Authentication

Secure authentication for public apps

**When to use**: Building public app or multi-account integration

### Template

// OAuth 2.0 flow for HubSpot
import { Client } from "@hubspot/api-client";

// Environment variables
const CLIENT_ID = process.env.HUBSPOT_CLIENT_ID;
const CLIENT_SECRET = process.env.HUBSPOT_CLIENT_SECRET;
const REDIRECT_URI = process.env.HUBSPOT_REDIRECT_URI;
const SCOPES = "crm.objects.contacts.read crm.objects.contacts.write";

// Step 1: Generate authorization URL
function getAuthUrl(): string {
  const authUrl = new URL("https://app.hubspot.com/oauth/authorize");
  authUrl.searchParams.set("client_id", CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  authUrl.searchParams.set("scope", SCOPES);
  return authUrl.toString();
}

// Step 2: Handle OAuth callback
async function handleOAuthCallback(code: string) {
  const response = await fetch("https://api.hubapi.com/oauth/v1/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "authorization_code",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code: code,
    }),
  });

  const tokens = await response.json();
  // {
  //   access_token: "xxx",
  //   refresh_token: "xxx",
  //   expires_in: 1800  // 30 minutes
  // }

  // Store tokens securely
  await storeTokens(tokens);

  return tokens;
}

// Step 3: Refresh access token (before expiry)
async function refreshAccessToken(refreshToken: string) {
  const response = await fetch("https://api.hubapi.com/oauth/v1/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      refresh_token: refreshToken,
    }),
  });

  return response.json();
}

// Step 4: Create authenticated client
function createClient(accessToken: string): Client {
  const hubspotClient = new Client({ accessToken });
  return hubspotClient;
}

### Notes

- Access tokens expire in 30 minutes
- Refresh tokens before expiry
- Store refresh tokens securely
- Rotate tokens every 6 months

### Private App Token

Authentication for single-account integrations

**When to use**: Building internal integration for one HubSpot account

### Template

// Private App Token - simpler for single account
import { Client } from "@hubspot/api-client";

// Create client with private app token
const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_PRIVATE_APP_TOKEN,
});

// Private app tokens don't expire
// But should be rotated every 6 months for security

// Example: Get contacts
async function getContacts() {
  try {
    const response = await hubspotClient.crm.contacts.basicApi.getPage(
      100,  // limit
      undefined,  // after cursor
      ["firstname", "lastname", "email", "phone"],  // properties
    );

    return response.results;
  } catch (error) {
    if (error.code === 429) {
      // Rate limited - implement backoff
      const retryAfter = error.headers?.["retry-after"] || 10;
      await sleep(retryAfter * 1000);
      return getContacts();
    }
    throw error;
  }
}

// Python equivalent
// from hubspot import HubSpot
//
// client = HubSpot(access_token=os.environ["HUBSPOT_PRIVATE_APP_TOKEN"])
//
// contacts = client.crm.contacts.basic_api.get_page(
//     limit=100,
//     properties=["firstname", "lastname", "email"]
// )

### Notes

- Private app tokens don't expire
- All private apps share daily rate limit
- Each private app has own burst limit
- Recommended: Rotate every 6 months

### CRM Object CRUD Operations

Create, read, update, delete CRM records

**When to use**: Working with contacts, companies, deals, tickets

### Template

import { Client } from "@hubspot/api-client";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_TOKEN,
});

// CREATE contact
async function createContact(data: {
  email: string;
  firstname: string;
  lastname: string;
}) {
  const response = await hubspotClient.crm.contacts.basicApi.create({
    properties: {
      email: data.email,
      firstname: data.firstname,
      lastname: data.lastname,
    },
  });

  return response;
}

// READ contact by ID
async function getContact(contactId: string) {
  const response = await hubspotClient.crm.contacts.basicApi.getById(
    contactId,
    ["firstname", "lastname", "email", "phone", "company"],
  );

  return response;
}

// UPDATE contact
async function updateContact(contactId: string, properties: object) {
  const response = await hubspotClient.crm.contacts.basicApi.update(
    contactId,
    { properties },
  );

  return response;
}

// DELETE contact
async function deleteContact(contactId: string) {
  await hubspotClient.crm.contacts.basicApi.archive(contactId);
}

// SEARCH contacts
async function searchContacts(query: string) {
  const response = await hubspotClient.crm.contacts.searchApi.doSearch({
    query,
    limit: 100,
    properties: ["firstname", "lastname", "email"],
    sorts: [{ propertyName: "createdate", direction: "DESCENDING" }],
  });

  return response.results;
}

// LIST with pagination
async function getAllContacts() {
  const allContacts = [];
  let after = undefined;

  do {
    const response = await hubspotClient.crm.contacts.basicApi.getPage(
      100,
      after,
      ["firstname", "lastname", "email"],
    );

    allContacts.push(...response.results);
    after = response.paging?.next?.after;
  } while (after);

  return allContacts;
}

### Notes

- Use properties param to fetch only needed fields
- Search API has 10k result limit
- Always implement pagination for lists
- Archive (soft delete) vs. GDPR delete available

### Batch Operations

Bulk create, update, or read records efficiently

**When to use**: Processing multiple records (reduce rate limit usage)

### Template

import { Client } from "@hubspot/api-client";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_TOKEN,
});

// BATCH CREATE contacts (up to 100 per batch)
async function batchCreateContacts(contacts: Array<{
  email: string;
  firstname: string;
  lastname: string;
}>) {
  const inputs = contacts.map((contact) => ({
    properties: {
      email: contact.email,
      firstname: contact.firstname,
      lastname: contact.lastname,
    },
  }));

  const response = await hubspotClient.crm.contacts.batchApi.create({
    inputs,
  });

  return response.results;
}

// BATCH UPDATE contacts
async function batchUpdateContacts(
  updates: Array<{ id: string; properties: object }>
) {
  const inputs = updates.map(({ id, properties }) => ({
    id,
    properties,
  }));

  const response = await hubspotClient.crm.contacts.batchApi.update({
    inputs,
  });

  return response.results;
}

// BATCH READ contacts by ID
async function batchReadContacts(
  ids: string[],
  properties: string[] = ["firstname", "lastname", "email"]
) {
  const response = await hubspotClient.crm.contacts.batchApi.read({
    inputs: ids.map((id) => ({ id })),
    properties,
  });

  return response.results;
}

// BATCH ARCHIVE contacts
async function batchDeleteContacts(ids: string[]) {
  await hubspotClient.crm.contacts.batchApi.archive({
    inputs: ids.map((id) => ({ id })),
  });
}

// Process large dataset in chunks
async function processLargeDataset(allContacts: any[]) {
  const BATCH_SIZE = 100;
  const results = [];

  for (let i = 0; i < allContacts.length; i += BATCH_SIZE) {
    const batch = allContacts.slice(i, i + BATCH_SIZE);
    const batchResults = await batchCreateContacts(batch);
    results.push(...batchResults);

    // Respect rate limits - wait between batches
    if (i + BATCH_SIZE < allContacts.length) {
      await sleep(100);  // 100ms between batches
    }
  }

  return results;
}

### Notes

- Max 100 items per batch request
- Saves up to 80% of rate limit quota
- Batch operations are atomic per item (partial success possible)
- Check response.errors for failed items

### Associations v4 API

Create relationships between CRM records

**When to use**: Linking contacts to companies, deals, etc.

### Template

import { Client, AssociationTypes } from "@hubspot/api-client";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_TOKEN,
});

// CREATE association (Contact to Company)
async function associateContactToCompany(
  contactId: string,
  companyId: string
) {
  await hubspotClient.crm.associations.v4.basicApi.create(
    "contacts",
    contactId,
    "companies",
    companyId,
    [
      {
        associationCategory: "HUBSPOT_DEFINED",
        associationTypeId: AssociationTypes.contactToCompany,
      },
    ]
  );
}

// CREATE association (Deal to Contact)
async function associateDealToContact(dealId: string, contactId: string) {
  await hubspotClient.crm.associations.v4.basicApi.create(
    "deals",
    dealId,
    "contacts",
    contactId,
    [
      {
        associationCategory: "HUBSPOT_DEFINED",
        associationTypeId: 3,  // deal_to_contact
      },
    ]
  );
}

// GET associations for a record
async function getContactCompanies(contactId: string) {
  const response = await hubspotClient.crm.associations.v4.basicApi.getPage(
    "contacts",
    contactId,
    "companies",
    undefined,
    500
  );

  return response.results;
}

// CREATE association with custom label
async function createLabeledAssociation(
  contactId: string,
  companyId: string,
  labelId: number  // Custom association label ID
) {
  await hubspotClient.crm.associations.v4.basicApi.create(
    "contacts",
    contactId,
    "companies",
    companyId,
    [
      {
        associationCategory: "USER_DEFINED",
        associationTypeId: labelId,
      },
    ]
  );
}

// BATCH create associations
async function batchAssociateContactsToCompany(
  contactIds: string[],
  companyId: string
) {
  const inputs = contactIds.map((contactId) => ({
    _from: { id: contactId },
    to: { id: companyId },
    types: [
      {
        associationCategory: "HUBSPOT_DEFINED",
        associationTypeId: AssociationTypes.contactToCompany,
      },
    ],
  }));

  await hubspotClient.crm.associations.v4.batchApi.create(
    "contacts",
    "companies",
    { inputs }
  );
}

// Common association type IDs
// Contact to Company: 1
// Company to Contact: 2
// Deal to Contact: 3
// Contact to Deal: 4
// Deal to Company: 5
// Company to Deal: 6

### Notes

- Requires SDK version 9.0.0+ for v4 API
- Association labels supported for custom relationships
- Use batch API for multiple associations
- HUBSPOT_DEFINED for standard, USER_DEFINED for custom labels

### Webhook Handling

Receive real-time notifications from HubSpot

**When to use**: Need instant updates on CRM changes

### Template

import crypto from "crypto";
import { Client } from "@hubspot/api-client";

// Webhook signature validation
function validateWebhookSignature(
  requestBody: string,
  signature: string,
  clientSecret: string
): boolean {
  // For v2 signature (most common)
  const expectedSignature = crypto
    .createHmac("sha256", clientSecret)
    .update(requestBody)
    .digest("hex");

  return signature === expectedSignature;
}

// Express webhook handler
app.post("/webhooks/hubspot", async (req, res) => {
  const signature = req.headers["x-hubspot-signature-v3"] as string;
  const timestamp = req.headers["x-hubspot-request-timestamp"] as string;
  const requestBody = JSON.stringify(req.body);

  // Validate signature
  const isValid = validateWebhookSignature(
    requestBody,
    signature,
    process.env.HUBSPOT_CLIENT_SECRET
  );

  if (!isValid) {
    console.error("Invalid webhook signature");
    return res.status(401).send("Unauthorized");
  }

  // Check timestamp (prevent replay attacks)
  const timestampAge = Date.now() - parseInt(timestamp);
  if (timestampAge > 300000) {  // 5 minutes
    console.error("Webhook timestamp too old");
    return res.status(401).send("Timestamp expired");
  }

  // Process events - respond quickly!
  const events = req.body;

  // Queue for async processing
  for (const event of events) {
    await queue.add("hubspot-webhook", event);
  }

  // Respond immediately
  res.status(200).send("OK");
});

// Async processor
async function processWebhookEvent(event: any) {
  const { subscriptionType, objectId, propertyName, propertyValue } = event;

  switch (subscriptionType) {
    case "contact.creation":
      await handleContactCreated(objectId);
      break;

    case "contact.propertyChange":
      await handleContactPropertyChange(objectId, propertyName, propertyValue);
      break;

    case "deal.creation":
      await handleDealCreated(objectId);
      break;

    case "contact.deletion":
      await handleContactDeleted(objectId);
      break;

    default:
      console.log(`Unhandled event: ${subscriptionType}`);
  }
}

// Webhook subscription types:
// contact.creation, contact.deletion, contact.propertyChange
// company.creation, company.deletion, company.propertyChange
// deal.creation, deal.deletion, deal.propertyChange

### Notes

- Validate signature before processing
- Respond within 5 seconds
- Queue heavy processing for async
- Max 1000 webhook subscriptions per app

### Custom Objects

Create and manage custom object types

**When to use**: Standard objects don't fit your data model

### Template

import { Client } from "@hubspot/api-client";

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_TOKEN,
});

// CREATE custom object schema
async function createCustomObjectSchema() {
  const schema = {
    name: "projects",
    labels: {
      singular: "Project",
      plural: "Projects",
    },
    primaryDisplayProperty: "project_name",
    requiredProperties: ["project_name"],
    properties: [
      {
        name: "project_name",
        label: "Project Name",
        type: "string",
        fieldType: "text",
      },
      {
        name: "status",
        label: "Status",
        type: "enumeration",
        fieldType: "select",
        options: [
          { label: "Active", value: "active" },
          { label: "Completed", value: "completed" },
          { label: "On Hold", value: "on_hold" },
        ],
      },
      {
        name: "budget",
        label: "Budget",
        type: "number",
        fieldType: "number",
      },
      {
        name: "start_date",
        label: "Start Date",
        type: "date",
        fieldType: "date",
      },
    ],
    associatedObjects: ["CONTACT", "COMPANY"],
  };

  const response = await hubspotClient.crm.schemas.coreApi.create(schema);
  return response;
}

// CREATE custom object record
async function createProject(data: {
  project_name: string;
  status: string;
  budget: number;
}) {
  const response = await hubspotClient.crm.objects.basicApi.create(
    "projects",  // Custom object name
    { properties: data }
  );

  return response;
}

// READ custom object by ID
async function getProject(projectId: string) {
  const response = await hubspotClient.crm.objects.basicApi.getById(
    "projects",
    projectId,
    ["project_name", "status", "budget", "start_date"]
  );

  return response;
}

// UPDATE custom object
async function updateProject(projectId: string, properties: object) {
  const response = await hubspotClient.crm.objects.basicApi.update(
    "projects",
    projectId,
    { properties }
  );

  return response;
}

// SEARCH custom objects
async function searchProjects(status: string) {
  const response = await hubspotClient.crm.objects.searchApi.doSearch(
    "projects",
    {
      filterGroups: [
        {
          filters: [
            {
              propertyName: "status",
              operator: "EQ",
              value: status,
            },
          ],
        },
      ],
      properties: ["project_name", "status", "budget"],
      limit: 100,
    }
  );

  return response.results;
}

### Notes

- Custom objects require Enterprise tier
- Max 10 custom objects per account
- Use crm.objects API with object name as parameter
- Can associate with standard and other custom objects

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hubspot-integration to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/hubspot-integration/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/hubspot-integration/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @hubspot-integration using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/hubspot-integration`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Sharp Edges

### Rate Limits Vary by App Type and Hub Tier

Severity: HIGH

### 5% Error Rate Threshold for Marketplace Apps

Severity: HIGH

### API Keys Deprecated - Use OAuth or Private App Tokens

Severity: CRITICAL

### OAuth Access Tokens Expire in 30 Minutes

Severity: HIGH

### Webhook Requests Must Be Validated

Severity: CRITICAL

### All List Endpoints Require Pagination

Severity: MEDIUM

### Associations v4 API Has Breaking Changes

Severity: HIGH

### Polling Limited to 100,000 Requests Per Day

Severity: MEDIUM

#### Imported: Validation Checks

### Hardcoded HubSpot API Key

Severity: ERROR

API keys must never be hardcoded

Message: Hardcoded HubSpot API key detected. Use environment variables. Note: API keys are deprecated - use Private App tokens.

### Hardcoded HubSpot Access Token

Severity: ERROR

Access tokens must use environment variables

Message: Hardcoded HubSpot access token. Use environment variables.

### Hardcoded Client Secret

Severity: ERROR

OAuth client secrets must be secured

Message: Hardcoded client secret. Use environment variables.

### Missing Webhook Signature Validation

Severity: ERROR

Webhook endpoints must validate HubSpot signatures

Message: Webhook endpoint without signature validation. Validate X-HubSpot-Signature-v3.

### Missing Rate Limit Handling

Severity: WARNING

API calls should handle 429 responses

Message: HubSpot API calls without rate limit handling. Implement retry logic with backoff.

### Unthrottled Parallel API Calls

Severity: WARNING

Parallel calls can exceed rate limits

Message: Parallel HubSpot API calls without throttling. Use rate limiter.

### Missing Pagination for List Calls

Severity: WARNING

List endpoints return paginated results

Message: API call without pagination handling. Implement cursor-based pagination.

### Individual Operations in Loop

Severity: INFO

Use batch operations for multiple items

Message: Individual API calls in loop. Consider batch operations for better performance.

### Token Storage Without Expiry

Severity: WARNING

OAuth tokens expire and need refresh logic

Message: Token storage without expiry tracking. Store expiresAt for refresh logic.

### Deprecated API Key Usage

Severity: ERROR

API keys are deprecated

Message: Using deprecated API key. Migrate to Private App token or OAuth 2.0.

#### Imported: Collaboration

### Delegation Triggers

- user needs email marketing automation -> email-marketing (Beyond HubSpot's built-in email tools)
- user needs custom CRM UI -> frontend (Building portal or dashboard)
- user needs data pipeline -> data-engineer (ETL from HubSpot to warehouse)
- user needs Salesforce integration -> salesforce-development (HubSpot + Salesforce sync)
- user needs payment processing -> stripe-integration (Payments beyond HubSpot quotes)
- user needs analytics dashboard -> analytics-specialist (Custom reporting beyond HubSpot)

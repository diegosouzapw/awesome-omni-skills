---
name: azure-web-pubsub-ts-v2
description: "Azure Web PubSub SDKs for TypeScript workflow skill. Use this skill when the user needs Real-time messaging with WebSocket connections and pub/sub patterns and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-web-pubsub-ts-v2", "azure-web-pubsub-ts", "real-time", "messaging", "websocket", "connections", "and", "pub"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Azure Web PubSub SDKs for TypeScript

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-web-pubsub-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Web PubSub SDKs for TypeScript Real-time messaging with WebSocket connections and pub/sub patterns.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Server-Side: WebPubSubServiceClient, Client-Side: WebPubSubClient, Express Event Handler, Key Types, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Real-time messaging with WebSocket connections and pub/sub patterns.
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

1. bash # Server-side management npm install @azure/web-pubsub @azure/identity # Client-side real-time messaging npm install @azure/web-pubsub-client # Express middleware for event handlers npm install @azure/web-pubsub-express
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Server-side management
npm install @azure/web-pubsub @azure/identity

# Client-side real-time messaging
npm install @azure/web-pubsub-client

# Express middleware for event handlers
npm install @azure/web-pubsub-express
```

#### Imported: Environment Variables

```bash
WEBPUBSUB_CONNECTION_STRING=Endpoint=https://<resource>.webpubsub.azure.com;AccessKey=<key>;Version=1.0;
WEBPUBSUB_ENDPOINT=https://<resource>.webpubsub.azure.com
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-web-pubsub-ts-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-web-pubsub-ts-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-web-pubsub-ts-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-web-pubsub-ts-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use Entra ID auth - DefaultAzureCredential for production
- Register handlers before start - Don't miss initial events
- Use groups for channels - Organize messages by topic/room
- Handle reconnection - Client auto-reconnects by default
- Validate in handleConnect - Reject unauthorized connections early
- Use noEcho - Prevent message echo back to sender when needed
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID auth** - `DefaultAzureCredential` for production
2. **Register handlers before start** - Don't miss initial events
3. **Use groups for channels** - Organize messages by topic/room
4. **Handle reconnection** - Client auto-reconnects by default
5. **Validate in handleConnect** - Reject unauthorized connections early
6. **Use noEcho** - Prevent message echo back to sender when needed

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-web-pubsub-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Server-Side: WebPubSubServiceClient

### Authentication

```typescript
import { WebPubSubServiceClient, AzureKeyCredential } from "@azure/web-pubsub";
import { DefaultAzureCredential } from "@azure/identity";

// Connection string
const client = new WebPubSubServiceClient(
  process.env.WEBPUBSUB_CONNECTION_STRING!,
  "chat"  // hub name
);

// DefaultAzureCredential (recommended)
const client2 = new WebPubSubServiceClient(
  process.env.WEBPUBSUB_ENDPOINT!,
  new DefaultAzureCredential(),
  "chat"
);

// AzureKeyCredential
const client3 = new WebPubSubServiceClient(
  process.env.WEBPUBSUB_ENDPOINT!,
  new AzureKeyCredential("<access-key>"),
  "chat"
);
```

### Generate Client Access Token

```typescript
// Basic token
const token = await client.getClientAccessToken();
console.log(token.url);  // wss://...?access_token=...

// Token with user ID
const userToken = await client.getClientAccessToken({
  userId: "user123",
});

// Token with permissions
const permToken = await client.getClientAccessToken({
  userId: "user123",
  roles: [
    "webpubsub.joinLeaveGroup",
    "webpubsub.sendToGroup",
    "webpubsub.sendToGroup.chat-room",  // specific group
  ],
  groups: ["chat-room"],  // auto-join on connect
  expirationTimeInMinutes: 60,
});
```

### Send Messages

```typescript
// Broadcast to all connections in hub
await client.sendToAll({ message: "Hello everyone!" });
await client.sendToAll("Plain text", { contentType: "text/plain" });

// Send to specific user (all their connections)
await client.sendToUser("user123", { message: "Hello!" });

// Send to specific connection
await client.sendToConnection("connectionId", { data: "Direct message" });

// Send with filter (OData syntax)
await client.sendToAll({ message: "Filtered" }, {
  filter: "userId ne 'admin'",
});
```

### Group Management

```typescript
const group = client.group("chat-room");

// Add user/connection to group
await group.addUser("user123");
await group.addConnection("connectionId");

// Remove from group
await group.removeUser("user123");

// Send to group
await group.sendToAll({ message: "Group message" });

// Close all connections in group
await group.closeAllConnections({ reason: "Maintenance" });
```

### Connection Management

```typescript
// Check existence
const userExists = await client.userExists("user123");
const connExists = await client.connectionExists("connectionId");

// Close connections
await client.closeConnection("connectionId", { reason: "Kicked" });
await client.closeUserConnections("user123");
await client.closeAllConnections();

// Permissions
await client.grantPermission("connectionId", "sendToGroup", { targetName: "chat" });
await client.revokePermission("connectionId", "sendToGroup", { targetName: "chat" });
```

#### Imported: Client-Side: WebPubSubClient

### Connect

```typescript
import { WebPubSubClient } from "@azure/web-pubsub-client";

// Direct URL
const client = new WebPubSubClient("<client-access-url>");

// Dynamic URL from negotiate endpoint
const client2 = new WebPubSubClient({
  getClientAccessUrl: async () => {
    const response = await fetch("/negotiate");
    const { url } = await response.json();
    return url;
  },
});

// Register handlers BEFORE starting
client.on("connected", (e) => {
  console.log(`Connected: ${e.connectionId}`);
});

client.on("group-message", (e) => {
  console.log(`${e.message.group}: ${e.message.data}`);
});

await client.start();
```

### Send Messages

```typescript
// Join group first
await client.joinGroup("chat-room");

// Send to group
await client.sendToGroup("chat-room", "Hello!", "text");
await client.sendToGroup("chat-room", { type: "message", content: "Hi" }, "json");

// Send options
await client.sendToGroup("chat-room", "Hello", "text", {
  noEcho: true,        // Don't echo back to sender
  fireAndForget: true, // Don't wait for ack
});

// Send event to server
await client.sendEvent("userAction", { action: "typing" }, "json");
```

### Event Handlers

```typescript
// Connection lifecycle
client.on("connected", (e) => {
  console.log(`Connected: ${e.connectionId}, User: ${e.userId}`);
});

client.on("disconnected", (e) => {
  console.log(`Disconnected: ${e.message}`);
});

client.on("stopped", () => {
  console.log("Client stopped");
});

// Messages
client.on("group-message", (e) => {
  console.log(`[${e.message.group}] ${e.message.fromUserId}: ${e.message.data}`);
});

client.on("server-message", (e) => {
  console.log(`Server: ${e.message.data}`);
});

// Rejoin failure
client.on("rejoin-group-failed", (e) => {
  console.log(`Failed to rejoin ${e.group}: ${e.error}`);
});
```

#### Imported: Express Event Handler

```typescript
import express from "express";
import { WebPubSubEventHandler } from "@azure/web-pubsub-express";

const app = express();

const handler = new WebPubSubEventHandler("chat", {
  path: "/api/webpubsub/hubs/chat/",
  
  // Blocking: approve/reject connection
  handleConnect: (req, res) => {
    if (!req.claims?.sub) {
      res.fail(401, "Authentication required");
      return;
    }
    res.success({
      userId: req.claims.sub[0],
      groups: ["general"],
      roles: ["webpubsub.sendToGroup"],
    });
  },
  
  // Blocking: handle custom events
  handleUserEvent: (req, res) => {
    console.log(`Event from ${req.context.userId}:`, req.data);
    res.success(`Received: ${req.data}`, "text");
  },
  
  // Non-blocking
  onConnected: (req) => {
    console.log(`Client connected: ${req.context.connectionId}`);
  },
  
  onDisconnected: (req) => {
    console.log(`Client disconnected: ${req.context.connectionId}`);
  },
});

app.use(handler.getMiddleware());

// Negotiate endpoint
app.get("/negotiate", async (req, res) => {
  const token = await serviceClient.getClientAccessToken({
    userId: req.user?.id,
  });
  res.json({ url: token.url });
});

app.listen(8080);
```

#### Imported: Key Types

```typescript
// Server
import {
  WebPubSubServiceClient,
  WebPubSubGroup,
  GenerateClientTokenOptions,
  HubSendToAllOptions,
} from "@azure/web-pubsub";

// Client
import {
  WebPubSubClient,
  WebPubSubClientOptions,
  OnConnectedArgs,
  OnGroupDataMessageArgs,
} from "@azure/web-pubsub-client";

// Express
import {
  WebPubSubEventHandler,
  ConnectRequest,
  UserEventRequest,
  ConnectResponseHandler,
} from "@azure/web-pubsub-express";
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

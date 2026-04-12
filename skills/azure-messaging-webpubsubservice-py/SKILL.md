---
name: azure-messaging-webpubsubservice-py
description: "Azure Web PubSub Service SDK for Python workflow skill. Use this skill when the user needs Azure Web PubSub Service SDK for Python. Use for real-time messaging, WebSocket connections, and pub/sub patterns and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["azure-messaging-webpubsubservice-py", "azure", "web", "pubsub", "service", "sdk", "for", "python"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Web PubSub Service SDK for Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-messaging-webpubsubservice-py` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Web PubSub Service SDK for Python Real-time messaging with WebSocket connections at scale.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Service Client (Server-Side), Client SDK (Python WebSocket Client), Async Service Client, Client Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure Web PubSub Service SDK for Python. Use for real-time messaging, WebSocket connections, and pub/sub patterns.
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

1. bash # Service SDK (server-side) pip install azure-messaging-webpubsubservice # Client SDK (for Python WebSocket clients) pip install azure-messaging-webpubsubclient
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Service SDK (server-side)
pip install azure-messaging-webpubsubservice

# Client SDK (for Python WebSocket clients)
pip install azure-messaging-webpubsubclient
```

#### Imported: Environment Variables

```bash
AZURE_WEBPUBSUB_CONNECTION_STRING=Endpoint=https://<name>.webpubsub.azure.com;AccessKey=...
AZURE_WEBPUBSUB_HUB=my-hub
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-messaging-webpubsubservice-py to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-messaging-webpubsubservice-py/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-messaging-webpubsubservice-py/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-messaging-webpubsubservice-py using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Use roles to limit client permissions
- Use groups for targeted messaging
- Generate short-lived tokens for security
- Use user IDs to send to users across connections
- Handle reconnection in client applications
- Use JSON content type for structured data
- Close connections gracefully with reasons

### Imported Operating Notes

#### Imported: Best Practices

1. **Use roles** to limit client permissions
2. **Use groups** for targeted messaging
3. **Generate short-lived tokens** for security
4. **Use user IDs** to send to users across connections
5. **Handle reconnection** in client applications
6. **Use JSON** content type for structured data
7. **Close connections** gracefully with reasons

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-messaging-webpubsubservice-py`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Service Client (Server-Side)

### Authentication

```python
from azure.messaging.webpubsubservice import WebPubSubServiceClient

# Connection string
client = WebPubSubServiceClient.from_connection_string(
    connection_string=os.environ["AZURE_WEBPUBSUB_CONNECTION_STRING"],
    hub="my-hub"
)

# Entra ID
from azure.identity import DefaultAzureCredential

client = WebPubSubServiceClient(
    endpoint="https://<name>.webpubsub.azure.com",
    hub="my-hub",
    credential=DefaultAzureCredential()
)
```

### Generate Client Access Token

```python
# Token for anonymous user
token = client.get_client_access_token()
print(f"URL: {token['url']}")

# Token with user ID
token = client.get_client_access_token(
    user_id="user123",
    roles=["webpubsub.sendToGroup", "webpubsub.joinLeaveGroup"]
)

# Token with groups
token = client.get_client_access_token(
    user_id="user123",
    groups=["group1", "group2"]
)
```

### Send to All Clients

```python
# Send text
client.send_to_all(message="Hello everyone!", content_type="text/plain")

# Send JSON
client.send_to_all(
    message={"type": "notification", "data": "Hello"},
    content_type="application/json"
)
```

### Send to User

```python
client.send_to_user(
    user_id="user123",
    message="Hello user!",
    content_type="text/plain"
)
```

### Send to Group

```python
client.send_to_group(
    group="my-group",
    message="Hello group!",
    content_type="text/plain"
)
```

### Send to Connection

```python
client.send_to_connection(
    connection_id="abc123",
    message="Hello connection!",
    content_type="text/plain"
)
```

### Group Management

```python
# Add user to group
client.add_user_to_group(group="my-group", user_id="user123")

# Remove user from group
client.remove_user_from_group(group="my-group", user_id="user123")

# Add connection to group
client.add_connection_to_group(group="my-group", connection_id="abc123")

# Remove connection from group
client.remove_connection_from_group(group="my-group", connection_id="abc123")
```

### Connection Management

```python
# Check if connection exists
exists = client.connection_exists(connection_id="abc123")

# Check if user has connections
exists = client.user_exists(user_id="user123")

# Check if group has connections
exists = client.group_exists(group="my-group")

# Close connection
client.close_connection(connection_id="abc123", reason="Session ended")

# Close all connections for user
client.close_all_connections(user_id="user123")
```

### Grant/Revoke Permissions

```python
from azure.messaging.webpubsubservice import WebPubSubServiceClient

# Grant permission
client.grant_permission(
    permission="joinLeaveGroup",
    connection_id="abc123",
    target_name="my-group"
)

# Revoke permission
client.revoke_permission(
    permission="joinLeaveGroup",
    connection_id="abc123",
    target_name="my-group"
)

# Check permission
has_permission = client.check_permission(
    permission="joinLeaveGroup",
    connection_id="abc123",
    target_name="my-group"
)
```

#### Imported: Client SDK (Python WebSocket Client)

```python
from azure.messaging.webpubsubclient import WebPubSubClient

client = WebPubSubClient(credential=token["url"])

# Event handlers
@client.on("connected")
def on_connected(e):
    print(f"Connected: {e.connection_id}")

@client.on("server-message")
def on_message(e):
    print(f"Message: {e.data}")

@client.on("group-message")
def on_group_message(e):
    print(f"Group {e.group}: {e.data}")

# Connect and send
client.open()
client.send_to_group("my-group", "Hello from Python!")
```

#### Imported: Async Service Client

```python
from azure.messaging.webpubsubservice.aio import WebPubSubServiceClient
from azure.identity.aio import DefaultAzureCredential

async def broadcast():
    credential = DefaultAzureCredential()
    client = WebPubSubServiceClient(
        endpoint="https://<name>.webpubsub.azure.com",
        hub="my-hub",
        credential=credential
    )
    
    await client.send_to_all("Hello async!", content_type="text/plain")
    
    await client.close()
    await credential.close()
```

#### Imported: Client Operations

| Operation | Description |
|-----------|-------------|
| `get_client_access_token` | Generate WebSocket connection URL |
| `send_to_all` | Broadcast to all connections |
| `send_to_user` | Send to specific user |
| `send_to_group` | Send to group members |
| `send_to_connection` | Send to specific connection |
| `add_user_to_group` | Add user to group |
| `remove_user_from_group` | Remove user from group |
| `close_connection` | Disconnect client |
| `connection_exists` | Check connection status |

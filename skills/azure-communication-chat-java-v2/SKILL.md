---
name: azure-communication-chat-java-v2
description: "Azure Communication Chat (Java) workflow skill. Use this skill when the user needs Build real-time chat applications with thread management, messaging, participants, and read receipts and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["azure-communication-chat-java-v2", "azure-communication-chat-java", "build", "real-time", "chat", "applications", "thread", "management"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Azure Communication Chat (Java)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/azure-communication-chat-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Communication Chat (Java) Build real-time chat applications with thread management, messaging, participants, and read receipts.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Key Concepts, Create Chat Thread, Send Messages, Get Messages, Update and Delete Messages.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "chat application Java", "real-time messaging Java"
- "chat thread", "chat participants", "chat messages"
- "read receipts", "typing notifications"
- "Azure Communication Services chat"
- Use when the request clearly matches the imported source intent: Build real-time chat applications with thread management, messaging, participants, and read receipts.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-communication-chat</artifactId> <version>1.6.0</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-communication-chat</artifactId>
    <version>1.6.0</version>
</dependency>
```

#### Imported: Client Creation

```java
import com.azure.communication.chat.ChatClient;
import com.azure.communication.chat.ChatClientBuilder;
import com.azure.communication.chat.ChatThreadClient;
import com.azure.communication.common.CommunicationTokenCredential;

// ChatClient requires a CommunicationTokenCredential (user access token)
String endpoint = "https://<resource>.communication.azure.com";
String userAccessToken = "<user-access-token>";

CommunicationTokenCredential credential = new CommunicationTokenCredential(userAccessToken);

ChatClient chatClient = new ChatClientBuilder()
    .endpoint(endpoint)
    .credential(credential)
    .buildClient();

// Async client
ChatAsyncClient chatAsyncClient = new ChatClientBuilder()
    .endpoint(endpoint)
    .credential(credential)
    .buildAsyncClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-communication-chat-java-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-communication-chat-java-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-communication-chat-java-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-communication-chat-java-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Token Management - User tokens expire; implement refresh logic with CommunicationTokenRefreshOptions
- Pagination - Use listMessages(options) with maxPageSize for large threads
- Share History - Set shareHistoryTime when adding participants to control message visibility
- Message Types - Filter system messages (PARTICIPANT_ADDED, etc.) from user messages
- Read Receipts - Send receipts only when messages are actually viewed by user
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Token Management** - User tokens expire; implement refresh logic with `CommunicationTokenRefreshOptions`
2. **Pagination** - Use `listMessages(options)` with `maxPageSize` for large threads
3. **Share History** - Set `shareHistoryTime` when adding participants to control message visibility
4. **Message Types** - Filter system messages (`PARTICIPANT_ADDED`, etc.) from user messages
5. **Read Receipts** - Send receipts only when messages are actually viewed by user

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/azure-communication-chat-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@azure-ai-contentsafety-ts-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-contentunderstanding-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-document-intelligence-dotnet-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@azure-ai-document-intelligence-ts-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Key Concepts

| Class | Purpose |
|-------|---------|
| `ChatClient` | Create/delete chat threads, get thread clients |
| `ChatThreadClient` | Operations within a thread (messages, participants, receipts) |
| `ChatParticipant` | User in a chat thread with display name |
| `ChatMessage` | Message content, type, sender info, timestamps |
| `ChatMessageReadReceipt` | Read receipt tracking per participant |

#### Imported: Create Chat Thread

```java
import com.azure.communication.chat.models.*;
import com.azure.communication.common.CommunicationUserIdentifier;
import java.util.ArrayList;
import java.util.List;

// Define participants
List<ChatParticipant> participants = new ArrayList<>();

ChatParticipant participant1 = new ChatParticipant()
    .setCommunicationIdentifier(new CommunicationUserIdentifier("<user-id-1>"))
    .setDisplayName("Alice");

ChatParticipant participant2 = new ChatParticipant()
    .setCommunicationIdentifier(new CommunicationUserIdentifier("<user-id-2>"))
    .setDisplayName("Bob");

participants.add(participant1);
participants.add(participant2);

// Create thread
CreateChatThreadOptions options = new CreateChatThreadOptions("Project Discussion")
    .setParticipants(participants);

CreateChatThreadResult result = chatClient.createChatThread(options);
String threadId = result.getChatThread().getId();

// Get thread client for operations
ChatThreadClient threadClient = chatClient.getChatThreadClient(threadId);
```

#### Imported: Send Messages

```java
// Send text message
SendChatMessageOptions messageOptions = new SendChatMessageOptions()
    .setContent("Hello, team!")
    .setSenderDisplayName("Alice")
    .setType(ChatMessageType.TEXT);

SendChatMessageResult sendResult = threadClient.sendMessage(messageOptions);
String messageId = sendResult.getId();

// Send HTML message
SendChatMessageOptions htmlOptions = new SendChatMessageOptions()
    .setContent("<strong>Important:</strong> Meeting at 3pm")
    .setType(ChatMessageType.HTML);

threadClient.sendMessage(htmlOptions);
```

#### Imported: Get Messages

```java
import com.azure.core.util.paging.PagedIterable;

// List all messages
PagedIterable<ChatMessage> messages = threadClient.listMessages();

for (ChatMessage message : messages) {
    System.out.println("ID: " + message.getId());
    System.out.println("Type: " + message.getType());
    System.out.println("Content: " + message.getContent().getMessage());
    System.out.println("Sender: " + message.getSenderDisplayName());
    System.out.println("Created: " + message.getCreatedOn());

    // Check if edited or deleted
    if (message.getEditedOn() != null) {
        System.out.println("Edited: " + message.getEditedOn());
    }
    if (message.getDeletedOn() != null) {
        System.out.println("Deleted: " + message.getDeletedOn());
    }
}

// Get specific message
ChatMessage message = threadClient.getMessage(messageId);
```

#### Imported: Update and Delete Messages

```java
// Update message
UpdateChatMessageOptions updateOptions = new UpdateChatMessageOptions()
    .setContent("Updated message content");

threadClient.updateMessage(messageId, updateOptions);

// Delete message
threadClient.deleteMessage(messageId);
```

#### Imported: Manage Participants

```java
// List participants
PagedIterable<ChatParticipant> participants = threadClient.listParticipants();

for (ChatParticipant participant : participants) {
    CommunicationUserIdentifier user =
        (CommunicationUserIdentifier) participant.getCommunicationIdentifier();
    System.out.println("User: " + user.getId());
    System.out.println("Display Name: " + participant.getDisplayName());
}

// Add participants
List<ChatParticipant> newParticipants = new ArrayList<>();
newParticipants.add(new ChatParticipant()
    .setCommunicationIdentifier(new CommunicationUserIdentifier("<new-user-id>"))
    .setDisplayName("Charlie")
    .setShareHistoryTime(OffsetDateTime.now().minusDays(7))); // Share last 7 days

threadClient.addParticipants(newParticipants);

// Remove participant
CommunicationUserIdentifier userToRemove = new CommunicationUserIdentifier("<user-id>");
threadClient.removeParticipant(userToRemove);
```

#### Imported: Read Receipts

```java
// Send read receipt
threadClient.sendReadReceipt(messageId);

// Get read receipts
PagedIterable<ChatMessageReadReceipt> receipts = threadClient.listReadReceipts();

for (ChatMessageReadReceipt receipt : receipts) {
    System.out.println("Message ID: " + receipt.getChatMessageId());
    System.out.println("Read by: " + receipt.getSenderCommunicationIdentifier());
    System.out.println("Read at: " + receipt.getReadOn());
}
```

#### Imported: Typing Notifications

```java
import com.azure.communication.chat.models.TypingNotificationOptions;

// Send typing notification
TypingNotificationOptions typingOptions = new TypingNotificationOptions()
    .setSenderDisplayName("Alice");

threadClient.sendTypingNotificationWithResponse(typingOptions, Context.NONE);

// Simple typing notification
threadClient.sendTypingNotification();
```

#### Imported: Thread Operations

```java
// Get thread properties
ChatThreadProperties properties = threadClient.getProperties();
System.out.println("Topic: " + properties.getTopic());
System.out.println("Created: " + properties.getCreatedOn());

// Update topic
threadClient.updateTopic("New Project Discussion Topic");

// Delete thread
chatClient.deleteChatThread(threadId);
```

#### Imported: List Threads

```java
// List all chat threads for the user
PagedIterable<ChatThreadItem> threads = chatClient.listChatThreads();

for (ChatThreadItem thread : threads) {
    System.out.println("Thread ID: " + thread.getId());
    System.out.println("Topic: " + thread.getTopic());
    System.out.println("Last message: " + thread.getLastMessageReceivedOn());
}
```

#### Imported: Pagination

```java
import com.azure.core.http.rest.PagedResponse;

// Paginate through messages
int maxPageSize = 10;
ListChatMessagesOptions listOptions = new ListChatMessagesOptions()
    .setMaxPageSize(maxPageSize);

PagedIterable<ChatMessage> pagedMessages = threadClient.listMessages(listOptions);

pagedMessages.iterableByPage().forEach(page -> {
    System.out.println("Page status code: " + page.getStatusCode());
    page.getElements().forEach(msg ->
        System.out.println("Message: " + msg.getContent().getMessage()));
});
```

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;

try {
    threadClient.sendMessage(messageOptions);
} catch (HttpResponseException e) {
    switch (e.getResponse().getStatusCode()) {
        case 401:
            System.out.println("Unauthorized - check token");
            break;
        case 403:
            System.out.println("Forbidden - user not in thread");
            break;
        case 404:
            System.out.println("Thread not found");
            break;
        default:
            System.out.println("Error: " + e.getMessage());
    }
}
```

#### Imported: Message Types

| Type | Description |
|------|-------------|
| `TEXT` | Regular chat message |
| `HTML` | HTML-formatted message |
| `TOPIC_UPDATED` | System message - topic changed |
| `PARTICIPANT_ADDED` | System message - participant joined |
| `PARTICIPANT_REMOVED` | System message - participant left |

#### Imported: Environment Variables

```bash
AZURE_COMMUNICATION_ENDPOINT=https://<resource>.communication.azure.com
AZURE_COMMUNICATION_USER_TOKEN=<user-access-token>
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

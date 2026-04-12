---
name: azure-communication-common-java
description: "Azure Communication Common (Java) workflow skill. Use this skill when the user needs Azure Communication Services common utilities for Java. Use when working with CommunicationTokenCredential, user identifiers, token refresh, or shared authentication across ACS services and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: communication
tags: ["azure-communication-common-java", "azure", "communication", "services", "common", "utilities", "for", "java"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Communication Common (Java)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-communication-common-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Communication Common (Java) Shared authentication utilities and data structures for Azure Communication Services.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Key Concepts, CommunicationTokenCredential, Entra ID (Azure AD) Authentication, Communication Identifiers, Identifier Parsing, Type Checking Identifiers.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "ACS authentication", "communication token credential"
- "user access token", "token refresh"
- "CommunicationUserIdentifier", "PhoneNumberIdentifier"
- "Azure Communication Services authentication"
- Use when the request clearly matches the imported source intent: Azure Communication Services common utilities for Java. Use when working with CommunicationTokenCredential, user identifiers, token refresh, or shared authentication across ACS services.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-communication-common</artifactId> <version>1.4.0</version> </dependency>
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-communication-common</artifactId>
    <version>1.4.0</version>
</dependency>
```

#### Imported: Key Concepts

| Class | Purpose |
|-------|---------|
| `CommunicationTokenCredential` | Authenticate users with ACS services |
| `CommunicationTokenRefreshOptions` | Configure automatic token refresh |
| `CommunicationUserIdentifier` | Identify ACS users |
| `PhoneNumberIdentifier` | Identify PSTN phone numbers |
| `MicrosoftTeamsUserIdentifier` | Identify Teams users |
| `UnknownIdentifier` | Generic identifier for unknown types |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-communication-common-java to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-communication-common-java/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-communication-common-java/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-communication-common-java using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Common Usage Patterns

```java
// Pattern: Create credential for Chat/Calling client
public ChatClient createChatClient(String token, String endpoint) {
    CommunicationTokenRefreshOptions refreshOptions = 
        new CommunicationTokenRefreshOptions(this::refreshToken)
            .setRefreshProactively(true)
            .setInitialToken(token);
    
    CommunicationTokenCredential credential = 
        new CommunicationTokenCredential(refreshOptions);
    
    return new ChatClientBuilder()
        .endpoint(endpoint)
        .credential(credential)
        .buildClient();
}

private String refreshToken() {
    // Call your token endpoint
    return tokenService.getNewToken();
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Proactive Refresh - Always use setRefreshProactively(true) for long-lived clients
- Token Security - Never log or expose full tokens
- Close Credentials - Dispose of credentials when no longer needed
- Error Handling - Handle token refresh failures gracefully
- Identifier Types - Use specific identifier types, not raw strings
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

1. **Proactive Refresh** - Always use `setRefreshProactively(true)` for long-lived clients
2. **Token Security** - Never log or expose full tokens
3. **Close Credentials** - Dispose of credentials when no longer needed
4. **Error Handling** - Handle token refresh failures gracefully
5. **Identifier Types** - Use specific identifier types, not raw strings

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-communication-common-java`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: CommunicationTokenCredential

### Static Token (Short-lived Clients)

```java
import com.azure.communication.common.CommunicationTokenCredential;

// Simple static token - no refresh
String userToken = "<user-access-token>";
CommunicationTokenCredential credential = new CommunicationTokenCredential(userToken);

// Use with Chat, Calling, etc.
ChatClient chatClient = new ChatClientBuilder()
    .endpoint("https://<resource>.communication.azure.com")
    .credential(credential)
    .buildClient();
```

### Proactive Token Refresh (Long-lived Clients)

```java
import com.azure.communication.common.CommunicationTokenRefreshOptions;
import java.util.concurrent.Callable;

// Token refresher callback - called when token is about to expire
Callable<String> tokenRefresher = () -> {
    // Call your server to get a fresh token
    return fetchNewTokenFromServer();
};

// With proactive refresh
CommunicationTokenRefreshOptions refreshOptions = new CommunicationTokenRefreshOptions(tokenRefresher)
    .setRefreshProactively(true)      // Refresh before expiry
    .setInitialToken(currentToken);    // Optional initial token

CommunicationTokenCredential credential = new CommunicationTokenCredential(refreshOptions);
```

### Async Token Refresh

```java
import java.util.concurrent.CompletableFuture;

// Async token fetcher
Callable<String> asyncRefresher = () -> {
    CompletableFuture<String> future = fetchTokenAsync();
    return future.get();  // Block until token is available
};

CommunicationTokenRefreshOptions options = new CommunicationTokenRefreshOptions(asyncRefresher)
    .setRefreshProactively(true);

CommunicationTokenCredential credential = new CommunicationTokenCredential(options);
```

#### Imported: Entra ID (Azure AD) Authentication

```java
import com.azure.identity.InteractiveBrowserCredentialBuilder;
import com.azure.communication.common.EntraCommunicationTokenCredentialOptions;
import java.util.Arrays;
import java.util.List;

// For Teams Phone Extensibility
InteractiveBrowserCredential entraCredential = new InteractiveBrowserCredentialBuilder()
    .clientId("<your-client-id>")
    .tenantId("<your-tenant-id>")
    .redirectUrl("<your-redirect-uri>")
    .build();

String resourceEndpoint = "https://<resource>.communication.azure.com";
List<String> scopes = Arrays.asList(
    "https://auth.msft.communication.azure.com/TeamsExtension.ManageCalls"
);

EntraCommunicationTokenCredentialOptions entraOptions = 
    new EntraCommunicationTokenCredentialOptions(entraCredential, resourceEndpoint)
        .setScopes(scopes);

CommunicationTokenCredential credential = new CommunicationTokenCredential(entraOptions);
```

#### Imported: Communication Identifiers

### CommunicationUserIdentifier

```java
import com.azure.communication.common.CommunicationUserIdentifier;

// Create identifier for ACS user
CommunicationUserIdentifier user = new CommunicationUserIdentifier("8:acs:resource-id_user-id");

// Get raw ID
String rawId = user.getId();
```

### PhoneNumberIdentifier

```java
import com.azure.communication.common.PhoneNumberIdentifier;

// E.164 format phone number
PhoneNumberIdentifier phone = new PhoneNumberIdentifier("+14255551234");

String phoneNumber = phone.getPhoneNumber();  // "+14255551234"
String rawId = phone.getRawId();              // "4:+14255551234"
```

### MicrosoftTeamsUserIdentifier

```java
import com.azure.communication.common.MicrosoftTeamsUserIdentifier;

// Teams user identifier
MicrosoftTeamsUserIdentifier teamsUser = new MicrosoftTeamsUserIdentifier("<teams-user-id>")
    .setCloudEnvironment(CommunicationCloudEnvironment.PUBLIC);

// For anonymous Teams users
MicrosoftTeamsUserIdentifier anonymousTeamsUser = new MicrosoftTeamsUserIdentifier("<teams-user-id>")
    .setAnonymous(true);
```

### UnknownIdentifier

```java
import com.azure.communication.common.UnknownIdentifier;

// For identifiers of unknown type
UnknownIdentifier unknown = new UnknownIdentifier("some-raw-id");
```

#### Imported: Identifier Parsing

```java
import com.azure.communication.common.CommunicationIdentifier;
import com.azure.communication.common.CommunicationIdentifierModel;

// Parse raw ID to appropriate type
public CommunicationIdentifier parseIdentifier(String rawId) {
    if (rawId.startsWith("8:acs:")) {
        return new CommunicationUserIdentifier(rawId);
    } else if (rawId.startsWith("4:")) {
        String phone = rawId.substring(2);
        return new PhoneNumberIdentifier(phone);
    } else if (rawId.startsWith("8:orgid:")) {
        String teamsId = rawId.substring(8);
        return new MicrosoftTeamsUserIdentifier(teamsId);
    } else {
        return new UnknownIdentifier(rawId);
    }
}
```

#### Imported: Type Checking Identifiers

```java
import com.azure.communication.common.CommunicationIdentifier;

public void processIdentifier(CommunicationIdentifier identifier) {
    if (identifier instanceof CommunicationUserIdentifier) {
        CommunicationUserIdentifier user = (CommunicationUserIdentifier) identifier;
        System.out.println("ACS User: " + user.getId());
        
    } else if (identifier instanceof PhoneNumberIdentifier) {
        PhoneNumberIdentifier phone = (PhoneNumberIdentifier) identifier;
        System.out.println("Phone: " + phone.getPhoneNumber());
        
    } else if (identifier instanceof MicrosoftTeamsUserIdentifier) {
        MicrosoftTeamsUserIdentifier teams = (MicrosoftTeamsUserIdentifier) identifier;
        System.out.println("Teams User: " + teams.getUserId());
        System.out.println("Anonymous: " + teams.isAnonymous());
        
    } else if (identifier instanceof UnknownIdentifier) {
        UnknownIdentifier unknown = (UnknownIdentifier) identifier;
        System.out.println("Unknown: " + unknown.getId());
    }
}
```

#### Imported: Token Access

```java
import com.azure.core.credential.AccessToken;

// Get current token (for debugging/logging - don't expose!)
CommunicationTokenCredential credential = new CommunicationTokenCredential(token);

// Sync access
AccessToken accessToken = credential.getToken();
System.out.println("Token expires: " + accessToken.getExpiresAt());

// Async access
credential.getTokenAsync()
    .subscribe(token -> {
        System.out.println("Token: " + token.getToken().substring(0, 20) + "...");
        System.out.println("Expires: " + token.getExpiresAt());
    });
```

#### Imported: Dispose Credential

```java
// Clean up when done
credential.close();

// Or use try-with-resources
try (CommunicationTokenCredential cred = new CommunicationTokenCredential(options)) {
    // Use credential
    chatClient.doSomething();
}
```

#### Imported: Cloud Environments

```java
import com.azure.communication.common.CommunicationCloudEnvironment;

// Available environments
CommunicationCloudEnvironment publicCloud = CommunicationCloudEnvironment.PUBLIC;
CommunicationCloudEnvironment govCloud = CommunicationCloudEnvironment.GCCH;
CommunicationCloudEnvironment dodCloud = CommunicationCloudEnvironment.DOD;

// Set on Teams identifier
MicrosoftTeamsUserIdentifier teamsUser = new MicrosoftTeamsUserIdentifier("<user-id>")
    .setCloudEnvironment(CommunicationCloudEnvironment.GCCH);
```

#### Imported: Environment Variables

```bash
AZURE_COMMUNICATION_ENDPOINT=https://<resource>.communication.azure.com
AZURE_COMMUNICATION_USER_TOKEN=<user-access-token>
```

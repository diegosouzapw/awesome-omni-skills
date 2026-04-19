---
name: azure-communication-sms-java
description: "Azure Communication SMS (Java) workflow skill. Use this skill when the user needs Send SMS messages with Azure Communication Services SMS Java SDK. Use when implementing SMS notifications, alerts, OTP delivery, bulk messaging, or delivery reports and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: communication
tags: ["azure-communication-sms-java", "send", "sms", "messages", "azure", "communication", "services", "java"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Azure Communication SMS (Java)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-communication-sms-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure Communication SMS (Java) Send SMS messages to single or multiple recipients with delivery reporting.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Send SMS to Single Recipient, Send SMS to Multiple Recipients, Send Options, Response Handling, Async Operations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "send SMS Java", "text message Java"
- "SMS notification", "OTP SMS", "bulk SMS"
- "delivery report SMS", "Azure Communication Services SMS"
- Use when the request clearly matches the imported source intent: Send SMS messages with Azure Communication Services SMS Java SDK. Use when implementing SMS notifications, alerts, OTP delivery, bulk messaging, or delivery reports.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-communication-sms</artifactId> <version>1.2.0</version> </dependency>
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
    <artifactId>azure-communication-sms</artifactId>
    <version>1.2.0</version>
</dependency>
```

#### Imported: Client Creation

```java
import com.azure.communication.sms.SmsClient;
import com.azure.communication.sms.SmsClientBuilder;
import com.azure.identity.DefaultAzureCredentialBuilder;

// With DefaultAzureCredential (recommended)
SmsClient smsClient = new SmsClientBuilder()
    .endpoint("https://<resource>.communication.azure.com")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();

// With connection string
SmsClient smsClient = new SmsClientBuilder()
    .connectionString("<connection-string>")
    .buildClient();

// With AzureKeyCredential
import com.azure.core.credential.AzureKeyCredential;

SmsClient smsClient = new SmsClientBuilder()
    .endpoint("https://<resource>.communication.azure.com")
    .credential(new AzureKeyCredential("<access-key>"))
    .buildClient();

// Async client
SmsAsyncClient smsAsyncClient = new SmsClientBuilder()
    .connectionString("<connection-string>")
    .buildAsyncClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-communication-sms-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-communication-sms-java against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-communication-sms-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-communication-sms-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Phone Number Format - Use E.164 format: +[country code][number]
- Delivery Reports - Enable for critical messages (OTP, alerts)
- Tagging - Use tags to correlate messages with business context
- Error Handling - Check isSuccessful() for each recipient individually
- Rate Limiting - Implement retry with backoff for 429 responses
- Bulk Sending - Use batch send for multiple recipients (more efficient)
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Phone Number Format** - Use E.164 format: `+[country code][number]`
2. **Delivery Reports** - Enable for critical messages (OTP, alerts)
3. **Tagging** - Use tags to correlate messages with business context
4. **Error Handling** - Check `isSuccessful()` for each recipient individually
5. **Rate Limiting** - Implement retry with backoff for 429 responses
6. **Bulk Sending** - Use batch send for multiple recipients (more efficient)

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-communication-sms-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Send SMS to Single Recipient

```java
import com.azure.communication.sms.models.SmsSendResult;

// Simple send
SmsSendResult result = smsClient.send(
    "+14255550100",      // From (your ACS phone number)
    "+14255551234",      // To
    "Your verification code is 123456");

System.out.println("Message ID: " + result.getMessageId());
System.out.println("To: " + result.getTo());
System.out.println("Success: " + result.isSuccessful());

if (!result.isSuccessful()) {
    System.out.println("Error: " + result.getErrorMessage());
    System.out.println("Status: " + result.getHttpStatusCode());
}
```

#### Imported: Send SMS to Multiple Recipients

```java
import com.azure.communication.sms.models.SmsSendOptions;
import java.util.Arrays;
import java.util.List;

List<String> recipients = Arrays.asList(
    "+14255551111",
    "+14255552222",
    "+14255553333"
);

// With options
SmsSendOptions options = new SmsSendOptions()
    .setDeliveryReportEnabled(true)
    .setTag("marketing-campaign-001");

Iterable<SmsSendResult> results = smsClient.sendWithResponse(
    "+14255550100",      // From
    recipients,          // To list
    "Flash sale! 50% off today only.",
    options,
    Context.NONE
).getValue();

for (SmsSendResult result : results) {
    if (result.isSuccessful()) {
        System.out.println("Sent to " + result.getTo() + ": " + result.getMessageId());
    } else {
        System.out.println("Failed to " + result.getTo() + ": " + result.getErrorMessage());
    }
}
```

#### Imported: Send Options

```java
SmsSendOptions options = new SmsSendOptions();

// Enable delivery reports (sent via Event Grid)
options.setDeliveryReportEnabled(true);

// Add custom tag for tracking
options.setTag("order-confirmation-12345");
```

#### Imported: Response Handling

```java
import com.azure.core.http.rest.Response;

Response<Iterable<SmsSendResult>> response = smsClient.sendWithResponse(
    "+14255550100",
    Arrays.asList("+14255551234"),
    "Hello!",
    new SmsSendOptions().setDeliveryReportEnabled(true),
    Context.NONE
);

// Check HTTP response
System.out.println("Status code: " + response.getStatusCode());
System.out.println("Headers: " + response.getHeaders());

// Process results
for (SmsSendResult result : response.getValue()) {
    System.out.println("Message ID: " + result.getMessageId());
    System.out.println("Successful: " + result.isSuccessful());
    
    if (!result.isSuccessful()) {
        System.out.println("HTTP Status: " + result.getHttpStatusCode());
        System.out.println("Error: " + result.getErrorMessage());
    }
}
```

#### Imported: Async Operations

```java
import reactor.core.publisher.Mono;

SmsAsyncClient asyncClient = new SmsClientBuilder()
    .connectionString("<connection-string>")
    .buildAsyncClient();

// Send single message
asyncClient.send("+14255550100", "+14255551234", "Async message!")
    .subscribe(
        result -> System.out.println("Sent: " + result.getMessageId()),
        error -> System.out.println("Error: " + error.getMessage())
    );

// Send to multiple with options
SmsSendOptions options = new SmsSendOptions()
    .setDeliveryReportEnabled(true);

asyncClient.sendWithResponse(
    "+14255550100",
    Arrays.asList("+14255551111", "+14255552222"),
    "Bulk async message",
    options)
    .subscribe(response -> {
        for (SmsSendResult result : response.getValue()) {
            System.out.println("Result: " + result.getTo() + " - " + result.isSuccessful());
        }
    });
```

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;

try {
    SmsSendResult result = smsClient.send(
        "+14255550100",
        "+14255551234",
        "Test message"
    );
    
    // Individual message errors don't throw exceptions
    if (!result.isSuccessful()) {
        handleMessageError(result);
    }
    
} catch (HttpResponseException e) {
    // Request-level failures (auth, network, etc.)
    System.out.println("Request failed: " + e.getMessage());
    System.out.println("Status: " + e.getResponse().getStatusCode());
} catch (RuntimeException e) {
    System.out.println("Unexpected error: " + e.getMessage());
}

private void handleMessageError(SmsSendResult result) {
    int status = result.getHttpStatusCode();
    String error = result.getErrorMessage();
    
    if (status == 400) {
        System.out.println("Invalid phone number: " + result.getTo());
    } else if (status == 429) {
        System.out.println("Rate limited - retry later");
    } else {
        System.out.println("Error " + status + ": " + error);
    }
}
```

#### Imported: Delivery Reports

Delivery reports are sent via Azure Event Grid. Configure an Event Grid subscription for your ACS resource.

```java
// Event Grid webhook handler (in your endpoint)
public void handleDeliveryReport(String eventJson) {
    // Parse Event Grid event
    // Event type: Microsoft.Communication.SMSDeliveryReportReceived
    
    // Event data contains:
    // - messageId: correlates to SmsSendResult.getMessageId()
    // - from: sender number
    // - to: recipient number
    // - deliveryStatus: "Delivered", "Failed", etc.
    // - deliveryStatusDetails: detailed status
    // - receivedTimestamp: when status was received
    // - tag: your custom tag from SmsSendOptions
}
```

#### Imported: SmsSendResult Properties

| Property | Type | Description |
|----------|------|-------------|
| `getMessageId()` | String | Unique message identifier |
| `getTo()` | String | Recipient phone number |
| `isSuccessful()` | boolean | Whether send succeeded |
| `getHttpStatusCode()` | int | HTTP status for this recipient |
| `getErrorMessage()` | String | Error details if failed |
| `getRepeatabilityResult()` | RepeatabilityResult | Idempotency result |

#### Imported: Environment Variables

```bash
AZURE_COMMUNICATION_ENDPOINT=https://<resource>.communication.azure.com
AZURE_COMMUNICATION_CONNECTION_STRING=endpoint=https://...;accesskey=...
SMS_FROM_NUMBER=+14255550100
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

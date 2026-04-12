---
name: azure-communication-callautomation-java
description: "Azure Communication Call Automation (Java) workflow skill. Use this skill when the user needs Build server-side call automation workflows including IVR systems, call routing, recording, and AI-powered interactions and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["azure-communication-callautomation-java", "build", "server-side", "call", "automation", "workflows", "including", "ivr"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure Communication Call Automation (Java)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-communication-callautomation-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure Communication Call Automation (Java) Build server-side call automation workflows including IVR systems, call routing, recording, and AI-powered interactions.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Client Creation, Key Concepts, Create Outbound Call, Answer Incoming Call, Play Audio (Text-to-Speech), Recognize DTMF Input.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- "call automation Java", "IVR Java", "interactive voice response"
- "call recording Java", "DTMF recognition Java"
- "text to speech call", "speech recognition call"
- "answer incoming call", "transfer call Java"
- "Azure Communication Services call automation"
- Use when the request clearly matches the imported source intent: Build server-side call automation workflows including IVR systems, call routing, recording, and AI-powered interactions.

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

1. xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-communication-callautomation</artifactId> <version>1.6.0</version> </dependency>
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
    <artifactId>azure-communication-callautomation</artifactId>
    <version>1.6.0</version>
</dependency>
```

#### Imported: Client Creation

```java
import com.azure.communication.callautomation.CallAutomationClient;
import com.azure.communication.callautomation.CallAutomationClientBuilder;
import com.azure.identity.DefaultAzureCredentialBuilder;

// With DefaultAzureCredential
CallAutomationClient client = new CallAutomationClientBuilder()
    .endpoint("https://<resource>.communication.azure.com")
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildClient();

// With connection string
CallAutomationClient client = new CallAutomationClientBuilder()
    .connectionString("<connection-string>")
    .buildClient();
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-communication-callautomation-java to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-communication-callautomation-java/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-communication-callautomation-java/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-communication-callautomation-java using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-communication-callautomation-java`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Key Concepts

| Class | Purpose |
|-------|---------|
| `CallAutomationClient` | Make calls, answer/reject incoming calls, redirect calls |
| `CallConnection` | Actions in established calls (add participants, terminate) |
| `CallMedia` | Media operations (play audio, recognize DTMF/speech) |
| `CallRecording` | Start/stop/pause recording |
| `CallAutomationEventParser` | Parse webhook events from ACS |

#### Imported: Create Outbound Call

```java
import com.azure.communication.callautomation.models.*;
import com.azure.communication.common.CommunicationUserIdentifier;
import com.azure.communication.common.PhoneNumberIdentifier;

// Call to PSTN number
PhoneNumberIdentifier target = new PhoneNumberIdentifier("+14255551234");
PhoneNumberIdentifier caller = new PhoneNumberIdentifier("+14255550100");

CreateCallOptions options = new CreateCallOptions(
    new CommunicationUserIdentifier("<user-id>"),  // Source
    List.of(target))                                // Targets
    .setSourceCallerId(caller)
    .setCallbackUrl("https://your-app.com/api/callbacks");

CreateCallResult result = client.createCall(options);
String callConnectionId = result.getCallConnectionProperties().getCallConnectionId();
```

#### Imported: Answer Incoming Call

```java
// From Event Grid webhook - IncomingCall event
String incomingCallContext = "<incoming-call-context-from-event>";

AnswerCallOptions options = new AnswerCallOptions(
    incomingCallContext,
    "https://your-app.com/api/callbacks");

AnswerCallResult result = client.answerCall(options);
CallConnection callConnection = result.getCallConnection();
```

#### Imported: Play Audio (Text-to-Speech)

```java
CallConnection callConnection = client.getCallConnection(callConnectionId);
CallMedia callMedia = callConnection.getCallMedia();

// Play text-to-speech
TextSource textSource = new TextSource()
    .setText("Welcome to Contoso. Press 1 for sales, 2 for support.")
    .setVoiceName("en-US-JennyNeural");

PlayOptions playOptions = new PlayOptions(
    List.of(textSource),
    List.of(new CommunicationUserIdentifier("<target-user>")));

callMedia.play(playOptions);

// Play audio file
FileSource fileSource = new FileSource()
    .setUrl("https://storage.blob.core.windows.net/audio/greeting.wav");

callMedia.play(new PlayOptions(List.of(fileSource), List.of(target)));
```

#### Imported: Recognize DTMF Input

```java
// Recognize DTMF tones
DtmfTone stopTones = DtmfTone.POUND;

CallMediaRecognizeDtmfOptions recognizeOptions = new CallMediaRecognizeDtmfOptions(
    new CommunicationUserIdentifier("<target-user>"),
    5)  // Max tones to collect
    .setInterToneTimeout(Duration.ofSeconds(5))
    .setStopTones(List.of(stopTones))
    .setInitialSilenceTimeout(Duration.ofSeconds(15))
    .setPlayPrompt(new TextSource().setText("Enter your account number followed by pound."));

callMedia.startRecognizing(recognizeOptions);
```

#### Imported: Recognize Speech

```java
// Speech recognition with AI
CallMediaRecognizeSpeechOptions speechOptions = new CallMediaRecognizeSpeechOptions(
    new CommunicationUserIdentifier("<target-user>"))
    .setEndSilenceTimeout(Duration.ofSeconds(2))
    .setSpeechLanguage("en-US")
    .setPlayPrompt(new TextSource().setText("How can I help you today?"));

callMedia.startRecognizing(speechOptions);
```

#### Imported: Call Recording

```java
CallRecording callRecording = client.getCallRecording();

// Start recording
StartRecordingOptions recordingOptions = new StartRecordingOptions(
    new ServerCallLocator("<server-call-id>"))
    .setRecordingChannel(RecordingChannel.MIXED)
    .setRecordingContent(RecordingContent.AUDIO_VIDEO)
    .setRecordingFormat(RecordingFormat.MP4);

RecordingStateResult recordingResult = callRecording.start(recordingOptions);
String recordingId = recordingResult.getRecordingId();

// Pause/resume/stop
callRecording.pause(recordingId);
callRecording.resume(recordingId);
callRecording.stop(recordingId);

// Download recording (after RecordingFileStatusUpdated event)
callRecording.downloadTo(recordingUrl, Paths.get("recording.mp4"));
```

#### Imported: Add Participant to Call

```java
CallConnection callConnection = client.getCallConnection(callConnectionId);

CommunicationUserIdentifier participant = new CommunicationUserIdentifier("<user-id>");
AddParticipantOptions addOptions = new AddParticipantOptions(participant)
    .setInvitationTimeout(Duration.ofSeconds(30));

AddParticipantResult result = callConnection.addParticipant(addOptions);
```

#### Imported: Transfer Call

```java
// Blind transfer
PhoneNumberIdentifier transferTarget = new PhoneNumberIdentifier("+14255559999");
TransferCallToParticipantResult result = callConnection.transferCallToParticipant(transferTarget);
```

#### Imported: Handle Events (Webhook)

```java
import com.azure.communication.callautomation.CallAutomationEventParser;
import com.azure.communication.callautomation.models.events.*;

// In your webhook endpoint
public void handleCallback(String requestBody) {
    List<CallAutomationEventBase> events = CallAutomationEventParser.parseEvents(requestBody);
    
    for (CallAutomationEventBase event : events) {
        if (event instanceof CallConnected) {
            CallConnected connected = (CallConnected) event;
            System.out.println("Call connected: " + connected.getCallConnectionId());
        } else if (event instanceof RecognizeCompleted) {
            RecognizeCompleted recognized = (RecognizeCompleted) event;
            // Handle DTMF or speech recognition result
            DtmfResult dtmfResult = (DtmfResult) recognized.getRecognizeResult();
            String tones = dtmfResult.getTones().stream()
                .map(DtmfTone::toString)
                .collect(Collectors.joining());
            System.out.println("DTMF received: " + tones);
        } else if (event instanceof PlayCompleted) {
            System.out.println("Audio playback completed");
        } else if (event instanceof CallDisconnected) {
            System.out.println("Call ended");
        }
    }
}
```

#### Imported: Hang Up Call

```java
// Hang up for all participants
callConnection.hangUp(true);

// Hang up only this leg
callConnection.hangUp(false);
```

#### Imported: Error Handling

```java
import com.azure.core.exception.HttpResponseException;

try {
    client.answerCall(options);
} catch (HttpResponseException e) {
    if (e.getResponse().getStatusCode() == 404) {
        System.out.println("Call not found or already ended");
    } else if (e.getResponse().getStatusCode() == 400) {
        System.out.println("Invalid request: " + e.getMessage());
    }
}
```

#### Imported: Environment Variables

```bash
AZURE_COMMUNICATION_ENDPOINT=https://<resource>.communication.azure.com
AZURE_COMMUNICATION_CONNECTION_STRING=endpoint=https://...;accesskey=...
CALLBACK_BASE_URL=https://your-app.com/api/callbacks
```

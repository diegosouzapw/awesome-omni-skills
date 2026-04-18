---
name: azure-ai-voicelive-java
description: "Azure AI VoiceLive SDK for Java workflow skill. Use this skill when the user needs Azure AI VoiceLive SDK for Java. Real-time bidirectional voice conversations with AI assistants using WebSocket and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-ai-voicelive-java", "azure", "voicelive", "sdk", "for", "java", "real-time", "bidirectional"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Azure AI VoiceLive SDK for Java

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure AI VoiceLive SDK for Java Real-time, bidirectional voice conversations with AI assistants using WebSocket technology.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Key Concepts, Voice Configuration, Function Calling, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI VoiceLive SDK for Java. Real-time bidirectional voice conversations with AI assistants using WebSocket.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. `xml <dependency> <groupId>com.azure</groupId> <artifactId>azure-ai-voicelive</artifactId> <version>1.0.0-beta.2</version> </dependency> ### 1.
2. Start Session java import reactor.core.publisher.Mono; client.startSession("gpt-4o-realtime-preview") .flatMap(session -> { System.out.println("Session started"); // Subscribe to events session.receiveEvents() .subscribe( event -> System.out.println("Event: " + event.getType()), error -> System.err.println("Error: " + error.getMessage()) ); return Mono.just(session); }) .block(); ### 2.
3. Configure Session Options java import com.azure.ai.voicelive.models.*; import java.util.Arrays; ServerVadTurnDetection turnDetection = new ServerVadTurnDetection() .setThreshold(0.5) // Sensitivity (0.0-1.0) .setPrefixPaddingMs(300) // Audio before speech .setSilenceDurationMs(500) // Silence to end turn .setInterruptResponse(true) // Allow interruptions .setAutoTruncate(true) .setCreateResponse(true); AudioInputTranscriptionOptions transcription = new AudioInputTranscriptionOptions( AudioInputTranscriptionOptionsModel.WHISPER1); VoiceLiveSessionOptions options = new VoiceLiveSessionOptions() .setInstructions("You are a helpful AI voice assistant.") .setVoice(BinaryData.fromObject(new OpenAIVoice(OpenAIVoiceName.ALLOY))) .setModalities(Arrays.asList(InteractionModality.TEXT, InteractionModality.AUDIO)) .setInputAudioFormat(InputAudioFormat.PCM16) .setOutputAudioFormat(OutputAudioFormat.PCM16) .setInputAudioSamplingRate(24000) .setInputAudioNoiseReduction(new AudioNoiseReduction(AudioNoiseReductionType.NEARFIELD)) .setInputAudioEchoCancellation(new AudioEchoCancellation()) .setInputAudioTranscription(transcription) .setTurnDetection(turnDetection); // Send configuration ClientEventSessionUpdate updateEvent = new ClientEventSessionUpdate(options); session.sendEvent(updateEvent).subscribe(); ### 3.
4. Send Audio Input java byte[] audioData = readAudioChunk(); // Your PCM16 audio data session.sendInputAudio(BinaryData.fromBytes(audioData)).subscribe(); ### 4.
5. Handle Events java session.receiveEvents().subscribe(event -> { ServerEventType eventType = event.getType(); if (ServerEventType.SESSIONCREATED.equals(eventType)) { System.out.println("Session created"); } else if (ServerEventType.INPUTAUDIOBUFFERSPEECHSTARTED.equals(eventType)) { System.out.println("User started speaking"); } else if (ServerEventType.INPUTAUDIOBUFFERSPEECHSTOPPED.equals(eventType)) { System.out.println("User stopped speaking"); } else if (ServerEventType.RESPONSEAUDIODELTA.equals(eventType)) { if (event instanceof SessionUpdateResponseAudioDelta) { SessionUpdateResponseAudioDelta audioEvent = (SessionUpdateResponseAudioDelta) event; playAudioChunk(audioEvent.getDelta()); } } else if (ServerEventType.RESPONSEDONE.equals(eventType)) { System.out.println("Response complete"); } else if (ServerEventType.ERROR.equals(eventType)) { if (event instanceof SessionUpdateError) { SessionUpdateError errorEvent = (SessionUpdateError) event; System.err.println("Error: " + errorEvent.getError().getMessage()); } } }); `
6. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
7. Read the overview and provenance files before loading any copied upstream support files.

### Imported Workflow Notes

#### Imported: Installation

```xml
<dependency>
    <groupId>com.azure</groupId>
    <artifactId>azure-ai-voicelive</artifactId>
    <version>1.0.0-beta.2</version>
</dependency>
```

#### Imported: Core Workflow

### 1. Start Session

```java
import reactor.core.publisher.Mono;

client.startSession("gpt-4o-realtime-preview")
    .flatMap(session -> {
        System.out.println("Session started");
        
        // Subscribe to events
        session.receiveEvents()
            .subscribe(
                event -> System.out.println("Event: " + event.getType()),
                error -> System.err.println("Error: " + error.getMessage())
            );
        
        return Mono.just(session);
    })
    .block();
```

### 2. Configure Session Options

```java
import com.azure.ai.voicelive.models.*;
import java.util.Arrays;

ServerVadTurnDetection turnDetection = new ServerVadTurnDetection()
    .setThreshold(0.5)                    // Sensitivity (0.0-1.0)
    .setPrefixPaddingMs(300)              // Audio before speech
    .setSilenceDurationMs(500)            // Silence to end turn
    .setInterruptResponse(true)           // Allow interruptions
    .setAutoTruncate(true)
    .setCreateResponse(true);

AudioInputTranscriptionOptions transcription = new AudioInputTranscriptionOptions(
    AudioInputTranscriptionOptionsModel.WHISPER_1);

VoiceLiveSessionOptions options = new VoiceLiveSessionOptions()
    .setInstructions("You are a helpful AI voice assistant.")
    .setVoice(BinaryData.fromObject(new OpenAIVoice(OpenAIVoiceName.ALLOY)))
    .setModalities(Arrays.asList(InteractionModality.TEXT, InteractionModality.AUDIO))
    .setInputAudioFormat(InputAudioFormat.PCM16)
    .setOutputAudioFormat(OutputAudioFormat.PCM16)
    .setInputAudioSamplingRate(24000)
    .setInputAudioNoiseReduction(new AudioNoiseReduction(AudioNoiseReductionType.NEAR_FIELD))
    .setInputAudioEchoCancellation(new AudioEchoCancellation())
    .setInputAudioTranscription(transcription)
    .setTurnDetection(turnDetection);

// Send configuration
ClientEventSessionUpdate updateEvent = new ClientEventSessionUpdate(options);
session.sendEvent(updateEvent).subscribe();
```

### 3. Send Audio Input

```java
byte[] audioData = readAudioChunk(); // Your PCM16 audio data
session.sendInputAudio(BinaryData.fromBytes(audioData)).subscribe();
```

### 4. Handle Events

```java
session.receiveEvents().subscribe(event -> {
    ServerEventType eventType = event.getType();
    
    if (ServerEventType.SESSION_CREATED.equals(eventType)) {
        System.out.println("Session created");
    } else if (ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STARTED.equals(eventType)) {
        System.out.println("User started speaking");
    } else if (ServerEventType.INPUT_AUDIO_BUFFER_SPEECH_STOPPED.equals(eventType)) {
        System.out.println("User stopped speaking");
    } else if (ServerEventType.RESPONSE_AUDIO_DELTA.equals(eventType)) {
        if (event instanceof SessionUpdateResponseAudioDelta) {
            SessionUpdateResponseAudioDelta audioEvent = (SessionUpdateResponseAudioDelta) event;
            playAudioChunk(audioEvent.getDelta());
        }
    } else if (ServerEventType.RESPONSE_DONE.equals(eventType)) {
        System.out.println("Response complete");
    } else if (ServerEventType.ERROR.equals(eventType)) {
        if (event instanceof SessionUpdateError) {
            SessionUpdateError errorEvent = (SessionUpdateError) event;
            System.err.println("Error: " + errorEvent.getError().getMessage());
        }
    }
});
```

#### Imported: Environment Variables

```bash
AZURE_VOICELIVE_ENDPOINT=https://<resource>.openai.azure.com/
AZURE_VOICELIVE_API_KEY=<your-api-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-voicelive-java to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-voicelive-java against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-voicelive-java for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-voicelive-java using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use async client — VoiceLive requires reactive patterns
- Configure turn detection for natural conversation flow
- Enable noise reduction for better speech recognition
- Handle interruptions gracefully with setInterruptResponse(true)
- Use Whisper transcription for input audio transcription
- Close sessions properly when conversation ends
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Use async client** — VoiceLive requires reactive patterns
2. **Configure turn detection** for natural conversation flow
3. **Enable noise reduction** for better speech recognition
4. **Handle interruptions** gracefully with `setInterruptResponse(true)`
5. **Use Whisper transcription** for input audio transcription
6. **Close sessions** properly when conversation ends

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-java`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| GitHub Source | https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/ai/azure-ai-voicelive |
| Samples | https://github.com/Azure/azure-sdk-for-java/tree/main/sdk/ai/azure-ai-voicelive/src/samples |

#### Imported: Authentication

### API Key

```java
import com.azure.ai.voicelive.VoiceLiveAsyncClient;
import com.azure.ai.voicelive.VoiceLiveClientBuilder;
import com.azure.core.credential.AzureKeyCredential;

VoiceLiveAsyncClient client = new VoiceLiveClientBuilder()
    .endpoint(System.getenv("AZURE_VOICELIVE_ENDPOINT"))
    .credential(new AzureKeyCredential(System.getenv("AZURE_VOICELIVE_API_KEY")))
    .buildAsyncClient();
```

### DefaultAzureCredential (Recommended)

```java
import com.azure.identity.DefaultAzureCredentialBuilder;

VoiceLiveAsyncClient client = new VoiceLiveClientBuilder()
    .endpoint(System.getenv("AZURE_VOICELIVE_ENDPOINT"))
    .credential(new DefaultAzureCredentialBuilder().build())
    .buildAsyncClient();
```

#### Imported: Key Concepts

| Concept | Description |
|---------|-------------|
| `VoiceLiveAsyncClient` | Main entry point for voice sessions |
| `VoiceLiveSessionAsyncClient` | Active WebSocket connection for streaming |
| `VoiceLiveSessionOptions` | Configuration for session behavior |

### Audio Requirements

- **Sample Rate**: 24kHz (24000 Hz)
- **Bit Depth**: 16-bit PCM
- **Channels**: Mono (1 channel)
- **Format**: Signed PCM, little-endian

#### Imported: Voice Configuration

### OpenAI Voices

```java
// Available: ALLOY, ASH, BALLAD, CORAL, ECHO, SAGE, SHIMMER, VERSE
VoiceLiveSessionOptions options = new VoiceLiveSessionOptions()
    .setVoice(BinaryData.fromObject(new OpenAIVoice(OpenAIVoiceName.ALLOY)));
```

### Azure Voices

```java
// Azure Standard Voice
options.setVoice(BinaryData.fromObject(new AzureStandardVoice("en-US-JennyNeural")));

// Azure Custom Voice
options.setVoice(BinaryData.fromObject(new AzureCustomVoice("myVoice", "endpointId")));

// Azure Personal Voice
options.setVoice(BinaryData.fromObject(
    new AzurePersonalVoice("speakerProfileId", PersonalVoiceModels.PHOENIX_LATEST_NEURAL)));
```

#### Imported: Function Calling

```java
VoiceLiveFunctionDefinition weatherFunction = new VoiceLiveFunctionDefinition("get_weather")
    .setDescription("Get current weather for a location")
    .setParameters(BinaryData.fromObject(parametersSchema));

VoiceLiveSessionOptions options = new VoiceLiveSessionOptions()
    .setTools(Arrays.asList(weatherFunction))
    .setInstructions("You have access to weather information.");
```

#### Imported: Error Handling

```java
session.receiveEvents()
    .doOnError(error -> System.err.println("Connection error: " + error.getMessage()))
    .onErrorResume(error -> {
        // Attempt reconnection or cleanup
        return Flux.empty();
    })
    .subscribe();
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

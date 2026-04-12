---
name: azure-ai-voicelive-ts
description: "@azure/ai-voicelive (JavaScript/TypeScript) workflow skill. Use this skill when the user needs Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket communication and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-ai-voicelive-ts", "azure", "voice", "live", "sdk", "for", "javascript", "typescript"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# @azure/ai-voicelive (JavaScript/TypeScript)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# @azure/ai-voicelive (JavaScript/TypeScript) Real-time voice AI SDK for building bidirectional voice assistants with Azure AI in Node.js and browser environments.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Session Configuration, Event Handling (Azure SDK Pattern), Function Calling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket communication.
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

1. Node.js LTS versions (20+)
2. Modern browsers (Chrome, Firefox, Safari, Edge)
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview, playbook, and source summary before loading any upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the checklist, rubric, and expected evidence for the task.

### Imported Workflow Notes

#### Imported: Installation

```bash
npm install @azure/ai-voicelive @azure/identity
# TypeScript users
npm install @types/node
```

**Current Version**: 1.0.0-beta.3

**Supported Environments**:
- Node.js LTS versions (20+)
- Modern browsers (Chrome, Firefox, Safari, Edge)

#### Imported: Environment Variables

```bash
AZURE_VOICELIVE_ENDPOINT=https://<resource>.cognitiveservices.azure.com
# Optional: API key if not using Entra ID
AZURE_VOICELIVE_API_KEY=<your-api-key>
# Optional: Logging
AZURE_LOG_LEVEL=info
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-voicelive-ts to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-voicelive-ts/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-voicelive-ts/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-voicelive-ts using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```typescript
import { DefaultAzureCredential } from "@azure/identity";
import { VoiceLiveClient } from "@azure/ai-voicelive";

const credential = new DefaultAzureCredential();
const endpoint = process.env.AZURE_VOICELIVE_ENDPOINT!;

// Create client and start session
const client = new VoiceLiveClient(endpoint, credential);
const session = await client.startSession("gpt-4o-mini-realtime-preview");

// Configure session
await session.updateSession({
  modalities: ["text", "audio"],
  instructions: "You are a helpful AI assistant. Respond naturally.",
  voice: {
    type: "azure-standard",
    name: "en-US-AvaNeural",
  },
  turnDetection: {
    type: "server_vad",
    threshold: 0.5,
    prefixPaddingMs: 300,
    silenceDurationMs: 500,
  },
  inputAudioFormat: "pcm16",
  outputAudioFormat: "pcm16",
});

// Subscribe to events
const subscription = session.subscribe({
  onResponseAudioDelta: async (event, context) => {
    // Handle streaming audio output
    const audioData = event.delta;
    playAudioChunk(audioData);
  },
  onResponseTextDelta: async (event, context) => {
    // Handle streaming text
    process.stdout.write(event.delta);
  },
  onInputAudioTranscriptionCompleted: async (event, context) => {
    console.log("User said:", event.transcript);
  },
});

// Send audio from microphone
function sendAudioChunk(audioBuffer: ArrayBuffer) {
  session.sendAudio(audioBuffer);
}
```

#### Imported: Browser Usage

```typescript
// Browser requires bundler (Vite, webpack, etc.)
import { VoiceLiveClient } from "@azure/ai-voicelive";
import { InteractiveBrowserCredential } from "@azure/identity";

// Use browser-compatible credential
const credential = new InteractiveBrowserCredential({
  clientId: "your-client-id",
  tenantId: "your-tenant-id",
});

const client = new VoiceLiveClient(endpoint, credential);

// Request microphone access
const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
const audioContext = new AudioContext({ sampleRate: 24000 });

// Process audio and send to session
// ... (see samples for full implementation)
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always use DefaultAzureCredential — Never hardcode API keys
- Set both modalities — Include ["text", "audio"] for voice assistants
- Use Azure Semantic VAD — Better turn detection than basic server VAD
- Handle all error types — Connection, auth, and protocol errors
- Clean up subscriptions — Call subscription.close() when done
- Use appropriate audio format — PCM16 at 24kHz for best quality
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Always use `DefaultAzureCredential`** — Never hardcode API keys
2. **Set both modalities** — Include `["text", "audio"]` for voice assistants
3. **Use Azure Semantic VAD** — Better turn detection than basic server VAD
4. **Handle all error types** — Connection, auth, and protocol errors
5. **Clean up subscriptions** — Call `subscription.close()` when done
6. **Use appropriate audio format** — PCM16 at 24kHz for best quality

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-ts`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Key Types Reference

| Type | Purpose |
|------|---------|
| `VoiceLiveClient` | Main client for creating sessions |
| `VoiceLiveSession` | Active WebSocket session |
| `VoiceLiveSessionHandlers` | Event handler interface |
| `VoiceLiveSubscription` | Active event subscription |
| `ConnectionContext` | Context for connection events |
| `SessionContext` | Context for session events |
| `ServerEventUnion` | Union of all server events |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| npm Package | https://www.npmjs.com/package/@azure/ai-voicelive |
| GitHub Source | https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/ai/ai-voicelive |
| Samples | https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/ai/ai-voicelive/samples |
| API Reference | https://learn.microsoft.com/javascript/api/@azure/ai-voicelive |

#### Imported: Authentication

### Microsoft Entra ID (Recommended)

```typescript
import { DefaultAzureCredential } from "@azure/identity";
import { VoiceLiveClient } from "@azure/ai-voicelive";

const credential = new DefaultAzureCredential();
const endpoint = "https://your-resource.cognitiveservices.azure.com";

const client = new VoiceLiveClient(endpoint, credential);
```

### API Key

```typescript
import { AzureKeyCredential } from "@azure/core-auth";
import { VoiceLiveClient } from "@azure/ai-voicelive";

const endpoint = "https://your-resource.cognitiveservices.azure.com";
const credential = new AzureKeyCredential("your-api-key");

const client = new VoiceLiveClient(endpoint, credential);
```

#### Imported: Client Hierarchy

```
VoiceLiveClient
└── VoiceLiveSession (WebSocket connection)
    ├── updateSession()      → Configure session options
    ├── subscribe()          → Event handlers (Azure SDK pattern)
    ├── sendAudio()          → Stream audio input
    ├── addConversationItem() → Add messages/function outputs
    └── sendEvent()          → Send raw protocol events
```

#### Imported: Session Configuration

```typescript
await session.updateSession({
  // Modalities
  modalities: ["audio", "text"],
  
  // System instructions
  instructions: "You are a customer service representative.",
  
  // Voice selection
  voice: {
    type: "azure-standard",  // or "azure-custom", "openai"
    name: "en-US-AvaNeural",
  },
  
  // Turn detection (VAD)
  turnDetection: {
    type: "server_vad",      // or "azure_semantic_vad"
    threshold: 0.5,
    prefixPaddingMs: 300,
    silenceDurationMs: 500,
  },
  
  // Audio formats
  inputAudioFormat: "pcm16",
  outputAudioFormat: "pcm16",
  
  // Tools (function calling)
  tools: [
    {
      type: "function",
      name: "get_weather",
      description: "Get current weather",
      parameters: {
        type: "object",
        properties: {
          location: { type: "string" }
        },
        required: ["location"]
      }
    }
  ],
  toolChoice: "auto",
});
```

#### Imported: Event Handling (Azure SDK Pattern)

The SDK uses a subscription-based event handling pattern:

```typescript
const subscription = session.subscribe({
  // Connection lifecycle
  onConnected: async (args, context) => {
    console.log("Connected:", args.connectionId);
  },
  onDisconnected: async (args, context) => {
    console.log("Disconnected:", args.code, args.reason);
  },
  onError: async (args, context) => {
    console.error("Error:", args.error.message);
  },
  
  // Session events
  onSessionCreated: async (event, context) => {
    console.log("Session created:", context.sessionId);
  },
  onSessionUpdated: async (event, context) => {
    console.log("Session updated");
  },
  
  // Audio input events (VAD)
  onInputAudioBufferSpeechStarted: async (event, context) => {
    console.log("Speech started at:", event.audioStartMs);
  },
  onInputAudioBufferSpeechStopped: async (event, context) => {
    console.log("Speech stopped at:", event.audioEndMs);
  },
  
  // Transcription events
  onConversationItemInputAudioTranscriptionCompleted: async (event, context) => {
    console.log("User said:", event.transcript);
  },
  onConversationItemInputAudioTranscriptionDelta: async (event, context) => {
    process.stdout.write(event.delta);
  },
  
  // Response events
  onResponseCreated: async (event, context) => {
    console.log("Response started");
  },
  onResponseDone: async (event, context) => {
    console.log("Response complete");
  },
  
  // Streaming text
  onResponseTextDelta: async (event, context) => {
    process.stdout.write(event.delta);
  },
  onResponseTextDone: async (event, context) => {
    console.log("\n--- Text complete ---");
  },
  
  // Streaming audio
  onResponseAudioDelta: async (event, context) => {
    const audioData = event.delta;
    playAudioChunk(audioData);
  },
  onResponseAudioDone: async (event, context) => {
    console.log("Audio complete");
  },
  
  // Audio transcript (what assistant said)
  onResponseAudioTranscriptDelta: async (event, context) => {
    process.stdout.write(event.delta);
  },
  
  // Function calling
  onResponseFunctionCallArgumentsDone: async (event, context) => {
    if (event.name === "get_weather") {
      const args = JSON.parse(event.arguments);
      const result = await getWeather(args.location);
      
      await session.addConversationItem({
        type: "function_call_output",
        callId: event.callId,
        output: JSON.stringify(result),
      });
      
      await session.sendEvent({ type: "response.create" });
    }
  },
  
  // Catch-all for debugging
  onServerEvent: async (event, context) => {
    console.log("Event:", event.type);
  },
});

// Clean up when done
await subscription.close();
```

#### Imported: Function Calling

```typescript
// Define tools in session config
await session.updateSession({
  modalities: ["audio", "text"],
  instructions: "Help users with weather information.",
  tools: [
    {
      type: "function",
      name: "get_weather",
      description: "Get current weather for a location",
      parameters: {
        type: "object",
        properties: {
          location: {
            type: "string",
            description: "City and state or country",
          },
        },
        required: ["location"],
      },
    },
  ],
  toolChoice: "auto",
});

// Handle function calls
const subscription = session.subscribe({
  onResponseFunctionCallArgumentsDone: async (event, context) => {
    if (event.name === "get_weather") {
      const args = JSON.parse(event.arguments);
      const weatherData = await fetchWeather(args.location);
      
      // Send function result
      await session.addConversationItem({
        type: "function_call_output",
        callId: event.callId,
        output: JSON.stringify(weatherData),
      });
      
      // Trigger response generation
      await session.sendEvent({ type: "response.create" });
    }
  },
});
```

#### Imported: Voice Options

| Voice Type | Config | Example |
|------------|--------|---------|
| Azure Standard | `{ type: "azure-standard", name: "..." }` | `"en-US-AvaNeural"` |
| Azure Custom | `{ type: "azure-custom", name: "...", endpointId: "..." }` | Custom voice endpoint |
| Azure Personal | `{ type: "azure-personal", speakerProfileId: "..." }` | Personal voice clone |
| OpenAI | `{ type: "openai", name: "..." }` | `"alloy"`, `"echo"`, `"shimmer"` |

#### Imported: Supported Models

| Model | Description | Use Case |
|-------|-------------|----------|
| `gpt-4o-realtime-preview` | GPT-4o with real-time audio | High-quality conversational AI |
| `gpt-4o-mini-realtime-preview` | Lightweight GPT-4o | Fast, efficient interactions |
| `phi4-mm-realtime` | Phi multimodal | Cost-effective applications |

#### Imported: Turn Detection Options

```typescript
// Server VAD (default)
turnDetection: {
  type: "server_vad",
  threshold: 0.5,
  prefixPaddingMs: 300,
  silenceDurationMs: 500,
}

// Azure Semantic VAD (smarter detection)
turnDetection: {
  type: "azure_semantic_vad",
}

// Azure Semantic VAD (English optimized)
turnDetection: {
  type: "azure_semantic_vad_en",
}

// Azure Semantic VAD (Multilingual)
turnDetection: {
  type: "azure_semantic_vad_multilingual",
}
```

#### Imported: Audio Formats

| Format | Sample Rate | Use Case |
|--------|-------------|----------|
| `pcm16` | 24kHz | Default, high quality |
| `pcm16-8000hz` | 8kHz | Telephony |
| `pcm16-16000hz` | 16kHz | Voice assistants |
| `g711_ulaw` | 8kHz | Telephony (US) |
| `g711_alaw` | 8kHz | Telephony (EU) |

#### Imported: Error Handling

```typescript
import {
  VoiceLiveError,
  VoiceLiveConnectionError,
  VoiceLiveAuthenticationError,
  VoiceLiveProtocolError,
} from "@azure/ai-voicelive";

const subscription = session.subscribe({
  onError: async (args, context) => {
    const { error } = args;
    
    if (error instanceof VoiceLiveConnectionError) {
      console.error("Connection error:", error.message);
    } else if (error instanceof VoiceLiveAuthenticationError) {
      console.error("Auth error:", error.message);
    } else if (error instanceof VoiceLiveProtocolError) {
      console.error("Protocol error:", error.message);
    }
  },
  
  onServerError: async (event, context) => {
    console.error("Server error:", event.error?.message);
  },
});
```

#### Imported: Logging

```typescript
import { setLogLevel } from "@azure/logger";

// Enable verbose logging
setLogLevel("info");

// Or via environment variable
// AZURE_LOG_LEVEL=info
```

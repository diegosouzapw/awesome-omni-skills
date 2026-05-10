---
name: "azure-ai-voicelive-ts"
description: "@azure/ai-voicelive (JavaScript/TypeScript) workflow skill. Use this skill when the user needs Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket communication and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "backend"
tags:
  - "azure-ai-voicelive-ts"
  - "azure"
  - "voice"
  - "live"
  - "sdk"
  - "for"
  - "javascript"
  - "typescript"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "azure-ai-voicelive-ts"
family_name: "@azure/ai-voicelive (JavaScript/TypeScript)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-ai-voicelive-ts"
upstream_skill: "skills/azure-ai-voicelive-ts"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-ai-voicelive-ts"
---

# @azure/ai-voicelive (JavaScript/TypeScript)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-ts` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# @azure/ai-voicelive (JavaScript/TypeScript) Real-time voice AI SDK for building bidirectional voice assistants with Azure AI in Node.js and browser environments.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Session Configuration, Event Handling (Azure SDK Pattern), Function Calling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Voice Live SDK for JavaScript/TypeScript. Build real-time voice AI applications with bidirectional WebSocket communication.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Node.js LTS versions (20+)
2. Modern browsers (Chrome, Firefox, Safari, Edge)
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview and provenance files before loading any copied upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the upstream expectations and the evidence you can point to in the copied files.

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
Use @azure-ai-voicelive-ts to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-voicelive-ts against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-voicelive-ts for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-voicelive-ts using the copied upstream files plus provenance, then summarize any gaps before merge.
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

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-ts`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

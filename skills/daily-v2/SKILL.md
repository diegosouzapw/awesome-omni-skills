---
name: daily-v2
description: "Define functions using standard schema workflow skill. Use this skill when the user needs Documentation and capabilities reference for Daily and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["daily-v2", "daily", "documentation", "and", "capabilities", "reference", "for", "ai-agents"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Define functions using standard schema

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/daily` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Skills, Integration, Context, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You are building a real-time voice or multimodal AI application that uses Daily or Pipecat-style transports.
- You need guidance on low-latency audio, video, text, and AI service orchestration in one pipeline.
- You want a capability reference before choosing services, transports, or workflow patterns for an interactive agent.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

1. Create transport for user connection (Daily, WebRTC, WebSocket)
2. Initialize STT service (Deepgram, OpenAI, Google Cloud)
3. Create LLM context with system message
4. Initialize LLM service (OpenAI, Anthropic, Gemini)
5. Initialize TTS service (ElevenLabs, Cartesia, OpenAI)
6. Create context aggregators for user and assistant messages
7. Assemble pipeline with all processors in correct order

### Imported Workflow Notes

#### Imported: Workflows

### Building a Voice Assistant

1. Create transport for user connection (Daily, WebRTC, WebSocket)
2. Initialize STT service (Deepgram, OpenAI, Google Cloud)
3. Create LLM context with system message
4. Initialize LLM service (OpenAI, Anthropic, Gemini)
5. Initialize TTS service (ElevenLabs, Cartesia, OpenAI)
6. Create context aggregators for user and assistant messages
7. Assemble pipeline with all processors in correct order
8. Create PipelineTask with parameters and observers
9. Run with PipelineRunner and handle lifecycle events

### Implementing Function Calling

1. Define function schemas using FunctionSchema or direct functions
2. Create ToolsSchema with function definitions
3. Pass tools to LLMContext during initialization
4. Register function handlers with LLM service
5. Implement handler logic to call external APIs
6. Return results via result_callback
7. LLM automatically incorporates results into conversation
8. Function calls and results stored in context automatically

### Building a Phone Agent with Twilio

1. Set up Twilio account with phone numbers
2. Create DailyTransport with WebRTC configuration
3. Configure Twilio SIP integration with Daily endpoint
4. Handle on_dialin_ready event to forward calls
5. Build standard voice pipeline with STT, LLM, TTS
6. Deploy to cloud with proper scaling configuration
7. Monitor active sessions and call metrics

### Handling Interruptions & Turn-Taking

1. Configure VAD analyzer (Silero recommended for low latency)
2. Set up user turn strategy (VADUserTurnStartStrategy or SmartTurnDetection)
3. Configure silence thresholds and minimum word requirements
4. Enable interruption handling in pipeline
5. Register interrupt event handlers
6. Test with various speech patterns and network conditions
7. Tune VAD parameters based on user experience feedback

### Managing Long Conversations

1. Enable context summarization in assistant aggregator params
2. Configure summarization triggers (token count, message count)
3. Set preserve_recent_messages to keep recent context
4. Monitor token usage with metrics
5. Implement fallback strategies for context window limits
6. Use context.messages to inspect current state
7. Manually append messages when needed with LLMMessagesAppendFrame

### Deploying to Pipecat Cloud

1. Create Dockerfile with bot.py entry point
2. Define bot() async function as entry point
3. Configure environment variables and secrets
4. Push to container registry (AWS ECR, GCP Artifact Registry)
5. Create agent via Pipecat Cloud REST API or CLI
6. Deploy with pipecat cloud deploy command
7. Monitor logs and active sessions
8. Scale based on demand with capacity planning

#### Imported: Capabilities

Pipecat enables agents to build production-ready voice and multimodal AI applications with real-time processing. Agents can orchestrate complex AI service pipelines that handle audio, video, and text simultaneously while maintaining ultra-low latency (500-800ms round-trip). The framework abstracts away the complexity of coordinating multiple AI services, network transports, and audio processing, allowing agents to focus on application logic.

Key capabilities include:

- Real-time voice conversations with natural turn-taking and interruption handling
- Multimodal processing combining audio, video, images, and text
- Integration with 50+ AI services (LLMs, speech recognition, text-to-speech, vision models)
- Function calling for external API integration and tool use
- Automatic conversation context management with optional summarization
- Multiple transport options (WebRTC, WebSocket, Daily, Twilio, Telnyx, etc.)
- Production deployment across cloud platforms with built-in scaling

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @daily-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @daily-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @daily-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @daily-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/daily`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@copilot-sdk-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@copy-editing-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@copywriting-psychologist-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@copywriting-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Skills

### Pipeline Architecture & Frame Processing

Agents can construct pipelines that connect frame processors in sequence to handle real-time data flow:

```python
pipeline = Pipeline([
    transport.input(),              # Receives user audio
    stt,                            # Speech-to-text conversion
    context_aggregator.user(),      # Collect user responses
    llm,                            # Language model processing
    tts,                            # Text-to-speech conversion
    transport.output(),             # Sends audio to user
    context_aggregator.assistant(), # Collect assistant responses
])
```

Agents can create custom frame processors to handle specialized logic, work with parallel pipelines for conditional processing, and manage frame types (SystemFrames for immediate processing, DataFrames for ordered queuing).

### Speech Recognition & Audio Input

Agents can integrate 15+ speech-to-text providers including OpenAI, Google Cloud, Deepgram, AssemblyAI, Azure, and Whisper. Services support:

- Real-time streaming transcription via WebSocket connections
- Voice Activity Detection (VAD) for automatic speech detection
- Multiple language support (125+ languages with Google Cloud)
- Word-level confidence scores and automatic punctuation
- Configurable latency tuning for optimal performance

### Text-to-Speech & Audio Output

Agents can choose from 30+ text-to-speech providers including OpenAI, Google Cloud, ElevenLabs, Cartesia, LMNT, and PlayHT. Features include:

- Real-time streaming synthesis with ultra-low latency
- Multiple voice options and speaking styles per provider
- Automatic interruption handling for natural conversations
- Audio format flexibility (WAV, PCM, MP3)
- Word-level output for precise context tracking

### Language Model Integration

Agents can integrate with 20+ LLM providers including OpenAI, Anthropic, Google Gemini, Groq, Perplexity, and open-source models via Ollama. Capabilities include:

- Streaming response generation for real-time output
- Function calling (tool use) for external API integration
- Context management with automatic message history tracking
- Token usage monitoring and cost tracking
- Support for vision models and multimodal inputs

### Function Calling & Tool Integration

Agents can enable LLMs to call external functions and APIs during conversations:

```python
# Define functions using standard schema
weather_function = FunctionSchema(
    name="get_current_weather",
    description="Get the current weather in a location",
    properties={"location": {"type": "string"}},
    required=["location"]
)

# Register function handlers
async def fetch_weather(params: FunctionCallParams):
    location = params.arguments.get("location")
    weather_data = await weather_api.get_weather(location)
    await params.result_callback(weather_data)

llm.register_function("get_current_weather", fetch_weather)
```

Function results are automatically stored in conversation context, enabling multi-step interactions and real-time data access.

### Context Management & Conversation History

Agents can manage conversation context automatically or manually:

- Automatic context aggregation from transcriptions and TTS output
- Manual context manipulation via `LLMMessagesAppendFrame` and `LLMMessagesUpdateFrame`
- Automatic context summarization for long conversations to reduce token usage
- Tool definitions and function call results stored in context
- Word-level precision for context accuracy during interruptions

### Voice Activity Detection & Turn Management

Agents can configure sophisticated turn-taking strategies:

- VAD-based turn detection for responsive speech detection
- Transcription-based fallback for edge cases
- Smart Turn Detection using AI to understand conversation completion
- Configurable silence thresholds and minimum word requirements
- Semantic turn detection for advanced models like OpenAI Realtime
- User interruption handling with configurable cancellation behavior

### Transport & Connection Management

Agents can connect users via multiple transport options:

- **WebRTC**: Daily.co, LiveKit, Small WebRTC for low-latency peer connections
- **WebSocket**: FastAPI, generic WebSocket servers for server-to-server communication
- **Telephony**: Twilio (WebSocket and SIP), Telnyx, Plivo, Exotel for phone integration
- **Specialized**: HeyGen for video, Tavus for video synthesis, WhatsApp for messaging
- Session initialization with automatic room/token management
- Event handlers for connection lifecycle (on_client_connected, on_client_disconnected)

### Multimodal Processing

Agents can build applications combining multiple modalities:

- Video input processing with vision models (Moondream)
- Image generation integration (DALL-E, Gemini, Fal)
- Video synthesis (HeyGen, Tavus, Simli)
- Simultaneous audio, video, and text processing
- Screen sharing and video frame analysis
- Gemini Live and OpenAI Realtime for native multimodal speech-to-speech

### Custom Frame Processors

Agents can create specialized processors for application-specific logic:

```python
class CustomProcessor(FrameProcessor):
    async def process_frame(self, frame: Frame, direction: FrameDirection):
        await super().process_frame(frame, direction)

        if isinstance(frame, TranscriptionFrame):
            # Custom logic here
            pass

        await self.push_frame(frame, direction)
```

### Structured Conversations with Pipecat Flows

Agents can build complex conversation flows with state management using Pipecat Flows:

- Dynamic flows for runtime-determined conversation paths
- Static flows for predefined conversation structures
- State management across conversation turns
- Tool and context management as conversation progresses
- Separation of conversation logic from pipeline mechanics

### Metrics & Observability

Agents can monitor pipeline performance and usage:

- Real-time latency metrics (TTFB, round-trip time)
- Token usage tracking for LLM and TTS services
- Frame processing metrics and pipeline throughput
- Custom observer patterns for application-specific monitoring
- OpenTelemetry integration for distributed tracing
- Debug observers for development and troubleshooting

### Client SDKs for Frontend Integration

Agents can build client applications using:

- **JavaScript/TypeScript**: Full-featured SDK with WebSocket and WebRTC transports
- **React**: Hooks and components for easy integration
- **React Native**: Mobile support for iOS and Android
- **iOS (Swift)**: Native iOS applications
- **Android (Kotlin)**: Native Android applications
- **C++**: Low-level integration for specialized applications

All SDKs implement the RTVI (Real-Time Voice and Video Inference) standard for interoperability.

### Deployment & Scaling

Agents can deploy applications to:

- **Pipecat Cloud**: Managed service with built-in scaling, logging, and monitoring
- **Fly.io**: Simple deployment for CPU-based bots
- **Modal**: GPU-accelerated infrastructure for custom models
- **Cerebrium**: Specialized AI infrastructure
- **Self-managed**: Docker containers on any cloud provider (AWS, GCP, Azure)
- Session API for real-time control of active agents
- Automatic scaling based on demand
- Managed API keys and secrets

#### Imported: Integration

Pipecat integrates with:

- **AI Services**: OpenAI, Anthropic, Google Gemini, Groq, Perplexity, AWS Bedrock, Azure OpenAI, and 15+ other LLM providers
- **Speech Services**: Deepgram, ElevenLabs, Google Cloud, Azure, OpenAI, AssemblyAI, Cartesia, LMNT, and 10+ others
- **Telephony**: Twilio, Telnyx, Plivo, Exotel for phone integration
- **Video/Media**: Daily.co, LiveKit, HeyGen, Tavus, Simli for real-time communication
- **Memory**: Mem0 for persistent conversation history across sessions
- **Monitoring**: Sentry for error tracking, Datadog for observability
- **Frameworks**: RTVI standard for client/server communication, Pipecat Flows for structured conversations
- **Client Platforms**: Web (JavaScript/React), iOS, Android, React Native, C++

#### Imported: Context

**Real-time Processing**: Pipecat achieves 500-800ms round-trip latency by streaming data through the pipeline rather than waiting for complete responses at each step. This creates natural conversation experiences.

**Frame-based Architecture**: All data moves through pipelines as frames (audio, text, images, control signals). Processors receive frames, perform specialized tasks, and push frames downstream. This modular design enables swapping services without code changes.

**Automatic vs Manual Control**: Context management happens automatically through aggregators, but agents can manually control context with frames for advanced scenarios like bot-initiated conversations or context editing.

**Service Flexibility**: Pipecat abstracts service differences through adapters. Function schemas defined once work across all LLM providers. Context format automatically converts between OpenAI and provider-specific formats.

**Production Considerations**: For production deployments, use WebRTC instead of WebSocket for better media transport. Pre-cache large models in Docker images. Monitor metrics for latency and token usage. Use Pipecat Cloud for managed scaling or self-host with proper resource allocation.

**Turn-Taking Complexity**: Natural conversations require coordinating VAD (detects speech), turn detection (understands completion), and interruption handling. Silero VAD provides low-latency local processing. Smart Turn Detection uses AI to understand conversation context. Tuning these parameters is crucial for user experience.

**Multimodal Challenges**: Combining audio, video, and text requires careful pipeline design. Use ParallelPipeline for independent processing branches. Ensure frame ordering for synchronized output. Test with various network conditions and device capabilities.

---

> For additional documentation and navigation, see: https://docs.pipecat.ai/llms.txt

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

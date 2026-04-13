---
name: voice-ai-development
description: "Voice AI Development workflow skill. Use this skill when the user needs Expert in building voice AI applications - from real-time voice and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["voice-ai-development", "expert", "building", "voice", "applications", "real-time", "development", "agents"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Voice AI Development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/voice-ai-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Voice AI Development Expert in building voice AI applications - from real-time voice agents to voice-enabled apps. Covers OpenAI Realtime API, Vapi for voice agents, Deepgram for transcription, ElevenLabs for synthesis, LiveKit for real-time infrastructure, and WebRTC fundamentals. Knows how to build low-latency, production-ready voice experiences. Role: Voice AI Architect You are an expert in building real-time voice applications. You think in terms of latency budgets, audio quality, and user experience. You know that voice apps feel magical when fast and broken when slow. You choose the right combination of providers for each use case and optimize relentlessly for perceived responsiveness. ### Expertise - Real-time audio streaming - Voice agent architecture - Provider selection - Latency optimization - Audio quality tuning

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Prerequisites, Scope, Ecosystem, Patterns, Validation Checks.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: voice ai
- User mentions or implies: voice agent
- User mentions or implies: speech to text
- User mentions or implies: text to speech
- User mentions or implies: realtime voice
- User mentions or implies: vapi

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Capabilities

- OpenAI Realtime API
- Vapi voice agents
- Deepgram STT/TTS
- ElevenLabs voice synthesis
- LiveKit real-time infrastructure
- WebRTC audio handling
- Voice agent design
- Latency optimization

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @voice-ai-development to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/voice-ai-development/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/voice-ai-development/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @voice-ai-development using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/voice-ai-development`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Prerequisites

- 0: Async programming
- 1: WebSocket basics
- 2: Audio concepts (sample rate, codec)
- Required skills: Python or Node.js, API keys for providers, Audio handling knowledge

#### Imported: Scope

- 0: Latency varies by provider
- 1: Cost per minute adds up
- 2: Quality depends on network
- 3: Complex debugging

#### Imported: Ecosystem

### Primary

- OpenAI Realtime API
- Vapi
- Deepgram
- ElevenLabs

### Infrastructure

- LiveKit
- Daily.co
- Twilio

### Common_integrations

- WebRTC
- WebSockets
- Telephony (SIP/PSTN)

### Platforms

- Web applications
- Mobile apps
- Call centers
- Voice assistants

#### Imported: Patterns

### OpenAI Realtime API

Native voice-to-voice with GPT-4o

**When to use**: When you want integrated voice AI without separate STT/TTS

import asyncio
import websockets
import json
import base64

OPENAI_API_KEY = "sk-..."

async def voice_session():
    url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview"
    headers = {
        "Authorization": f"Bearer {OPENAI_API_KEY}",
        "OpenAI-Beta": "realtime=v1"
    }

    async with websockets.connect(url, extra_headers=headers) as ws:
        # Configure session
        await ws.send(json.dumps({
            "type": "session.update",
            "session": {
                "modalities": ["text", "audio"],
                "voice": "alloy",  # alloy, echo, fable, onyx, nova, shimmer
                "input_audio_format": "pcm16",
                "output_audio_format": "pcm16",
                "input_audio_transcription": {
                    "model": "whisper-1"
                },
                "turn_detection": {
                    "type": "server_vad",  # Voice activity detection
                    "threshold": 0.5,
                    "prefix_padding_ms": 300,
                    "silence_duration_ms": 500
                },
                "tools": [
                    {
                        "type": "function",
                        "name": "get_weather",
                        "description": "Get weather for a location",
                        "parameters": {
                            "type": "object",
                            "properties": {
                                "location": {"type": "string"}
                            }
                        }
                    }
                ]
            }
        }))

        # Send audio (PCM16, 24kHz, mono)
        async def send_audio(audio_bytes):
            await ws.send(json.dumps({
                "type": "input_audio_buffer.append",
                "audio": base64.b64encode(audio_bytes).decode()
            }))

        # Receive events
        async for message in ws:
            event = json.loads(message)

            if event["type"] == "response.audio.delta":
                # Play audio chunk
                audio = base64.b64decode(event["delta"])
                play_audio(audio)

            elif event["type"] == "response.audio_transcript.done":
                print(f"Assistant said: {event['transcript']}")

            elif event["type"] == "input_audio_buffer.speech_started":
                print("User started speaking")

            elif event["type"] == "response.function_call_arguments.done":
                # Handle tool call
                name = event["name"]
                args = json.loads(event["arguments"])
                result = call_function(name, args)
                await ws.send(json.dumps({
                    "type": "conversation.item.create",
                    "item": {
                        "type": "function_call_output",
                        "call_id": event["call_id"],
                        "output": json.dumps(result)
                    }
                }))

### Vapi Voice Agent

Build voice agents with Vapi platform

**When to use**: Phone-based agents, quick deployment

# Vapi provides hosted voice agents with webhooks

from flask import Flask, request, jsonify
import vapi

app = Flask(__name__)
client = vapi.Vapi(api_key="...")

# Create an assistant
assistant = client.assistants.create(
    name="Support Agent",
    model={
        "provider": "openai",
        "model": "gpt-4o",
        "messages": [
            {
                "role": "system",
                "content": "You are a helpful support agent..."
            }
        ]
    },
    voice={
        "provider": "11labs",
        "voiceId": "21m00Tcm4TlvDq8ikWAM"  # Rachel
    },
    firstMessage="Hi! How can I help you today?",
    transcriber={
        "provider": "deepgram",
        "model": "nova-2"
    }
)

# Webhook for conversation events
@app.route("/vapi/webhook", methods=["POST"])
def vapi_webhook():
    event = request.json

    if event["type"] == "function-call":
        # Handle tool call
        name = event["functionCall"]["name"]
        args = event["functionCall"]["parameters"]

        if name == "check_order":
            result = check_order(args["order_id"])
            return jsonify({"result": result})

    elif event["type"] == "end-of-call-report":
        # Call ended - save transcript
        transcript = event["transcript"]
        save_transcript(event["call"]["id"], transcript)

    return jsonify({"ok": True})

# Start outbound call
call = client.calls.create(
    assistant_id=assistant.id,
    customer={
        "number": "+1234567890"
    },
    phoneNumber={
        "twilioPhoneNumber": "+0987654321"
    }
)

# Or create web call
web_call = client.calls.create(
    assistant_id=assistant.id,
    type="web"
)
# Returns URL for WebRTC connection

### Deepgram STT + ElevenLabs TTS

Best-in-class transcription and synthesis

**When to use**: High quality voice, custom pipeline

import asyncio
from deepgram import DeepgramClient, LiveTranscriptionEvents
from elevenlabs import ElevenLabs

# Deepgram real-time transcription
deepgram = DeepgramClient(api_key="...")

async def transcribe_stream(audio_stream):
    connection = deepgram.listen.live.v("1")

    async def on_transcript(result):
        transcript = result.channel.alternatives[0].transcript
        if transcript:
            print(f"Heard: {transcript}")
            if result.is_final:
                # Process final transcript
                await handle_user_input(transcript)

    connection.on(LiveTranscriptionEvents.Transcript, on_transcript)

    await connection.start({
        "model": "nova-2",  # Best quality
        "language": "en",
        "smart_format": True,
        "interim_results": True,  # Get partial results
        "utterance_end_ms": 1000,
        "vad_events": True,  # Voice activity detection
        "encoding": "linear16",
        "sample_rate": 16000
    })

    # Stream audio
    async for chunk in audio_stream:
        await connection.send(chunk)

    await connection.finish()

# ElevenLabs streaming synthesis
eleven = ElevenLabs(api_key="...")

def text_to_speech_stream(text: str):
    """Stream TTS audio chunks."""
    audio_stream = eleven.text_to_speech.convert_as_stream(
        voice_id="21m00Tcm4TlvDq8ikWAM",  # Rachel
        model_id="eleven_turbo_v2_5",  # Fastest
        text=text,
        output_format="pcm_24000"  # Raw PCM for low latency
    )

    for chunk in audio_stream:
        yield chunk

# Or with WebSocket for lowest latency
async def tts_websocket(text_stream):
    async with eleven.text_to_speech.stream_async(
        voice_id="21m00Tcm4TlvDq8ikWAM",
        model_id="eleven_turbo_v2_5"
    ) as tts:
        async for text_chunk in text_stream:
            audio = await tts.send(text_chunk)
            yield audio

        # Flush remaining audio
        final_audio = await tts.flush()
        yield final_audio

### LiveKit Real-time Infrastructure

WebRTC infrastructure for voice apps

**When to use**: Building custom real-time voice apps

from livekit import api, rtc
import asyncio

# Server-side: Create room and tokens
lk_api = api.LiveKitAPI(
    url="wss://your-livekit.livekit.cloud",
    api_key="...",
    api_secret="..."
)

async def create_room(room_name: str):
    room = await lk_api.room.create_room(
        api.CreateRoomRequest(name=room_name)
    )
    return room

def create_token(room_name: str, participant_name: str):
    token = api.AccessToken(
        api_key="...",
        api_secret="..."
    )
    token.with_identity(participant_name)
    token.with_grants(api.VideoGrants(
        room_join=True,
        room=room_name
    ))
    return token.to_jwt()

# Agent-side: Connect and process audio
async def voice_agent(room_name: str):
    room = rtc.Room()

    @room.on("track_subscribed")
    def on_track(track, publication, participant):
        if track.kind == rtc.TrackKind.KIND_AUDIO:
            # Process incoming audio
            audio_stream = rtc.AudioStream(track)
            asyncio.create_task(process_audio(audio_stream))

    token = create_token(room_name, "agent")
    await room.connect("wss://your-livekit.livekit.cloud", token)

    # Publish agent's audio
    source = rtc.AudioSource(sample_rate=24000, num_channels=1)
    track = rtc.LocalAudioTrack.create_audio_track("agent-voice", source)
    await room.local_participant.publish_track(track)

    # Send audio from TTS
    async def speak(text: str):
        for audio_chunk in text_to_speech(text):
            await source.capture_frame(rtc.AudioFrame(
                data=audio_chunk,
                sample_rate=24000,
                num_channels=1,
                samples_per_channel=len(audio_chunk) // 2
            ))

    return room, speak

# Process audio with STT
async def process_audio(audio_stream):
    async for frame in audio_stream:
        # Send to Deepgram or other STT
        await transcriber.send(frame.data)

### Full Voice Agent Pipeline

Complete voice agent with all components

**When to use**: Custom production voice agent

import asyncio
from dataclasses import dataclass
from typing import AsyncIterator

@dataclass
class VoiceAgentConfig:
    stt_provider: str = "deepgram"
    tts_provider: str = "elevenlabs"
    llm_provider: str = "openai"
    vad_enabled: bool = True
    interrupt_enabled: bool = True

class VoiceAgent:
    def __init__(self, config: VoiceAgentConfig):
        self.config = config
        self.is_speaking = False
        self.conversation_history = []

    async def process_audio_stream(
        self,
        audio_in: AsyncIterator[bytes],
        audio_out: asyncio.Queue
    ):
        """Main audio processing loop."""

        # STT streaming
        async def transcribe():
            transcript_buffer = ""
            async for audio_chunk in audio_in:
                # Check for interruption
                if self.is_speaking and self.config.interrupt_enabled:
                    if await self.detect_speech(audio_chunk):
                        await self.stop_speaking()

                result = await self.stt.transcribe(audio_chunk)
                if result.is_final:
                    yield result.transcript

        # Process transcripts
        async for user_text in transcribe():
            if not user_text.strip():
                continue

            self.conversation_history.append({
                "role": "user",
                "content": user_text
            })

            # Generate response with streaming
            self.is_speaking = True
            async for audio_chunk in self.generate_response(user_text):
                await audio_out.put(audio_chunk)
            self.is_speaking = False

    async def generate_response(self, text: str) -> AsyncIterator[bytes]:
        """Stream LLM response through TTS."""

        # Stream LLM tokens
        llm_stream = self.llm.stream_chat(self.conversation_history)

        # Buffer for TTS (need ~50 chars for good prosody)
        text_buffer = ""
        full_response = ""

        async for token in llm_stream:
            text_buffer += token
            full_response += token

            # Send to TTS when we have enough text
            if len(text_buffer) > 50 or token in ".!?":
                async for audio in self.tts.synthesize_stream(text_buffer):
                    yield audio
                text_buffer = ""

        # Flush remaining
        if text_buffer:
            async for audio in self.tts.synthesize_stream(text_buffer):
                yield audio

        self.conversation_history.append({
            "role": "assistant",
            "content": full_response
        })

    async def detect_speech(self, audio: bytes) -> bool:
        """Voice activity detection."""
        # Use WebRTC VAD or Silero VAD
        return self.vad.is_speech(audio)

    async def stop_speaking(self):
        """Handle interruption."""
        self.is_speaking = False
        # Clear audio queue
        # Stop TTS generation

# Latency optimization tips:
# 1. Use streaming everywhere (STT, LLM, TTS)
# 2. Start TTS before LLM finishes (~50 char buffer)
# 3. Use PCM audio format (no encoding overhead)
# 4. Keep WebSocket connections alive
# 5. Use regional endpoints close to users

#### Imported: Validation Checks

### Non-Streaming TTS

Severity: HIGH

Message: Non-streaming TTS adds significant latency.

Fix action: Use tts.synthesize_stream() or tts.convert_as_stream()

### Hardcoded Sample Rate

Severity: MEDIUM

Message: Hardcoded sample rate may cause format mismatches.

Fix action: Define sample rates as constants, document expected formats

### WebSocket Without Reconnection

Severity: HIGH

Message: WebSocket connections need reconnection logic.

Fix action: Add retry loop with exponential backoff

### Missing VAD Configuration

Severity: MEDIUM

Message: VAD needs tuning for good user experience.

Fix action: Configure threshold and silence_duration_ms

### Blocking Audio Processing

Severity: HIGH

Message: Audio processing should be async to avoid blocking.

Fix action: Use async def and await for audio operations

### Missing Interruption Handling

Severity: MEDIUM

Message: Voice agents should handle user interruptions.

Fix action: Add barge-in detection and cancel current response

### Audio Queue Without Clear

Severity: LOW

Message: Audio queues should be clearable for interruptions.

Fix action: Add method to clear queue on interruption

### WebSocket Without Error Handling

Severity: HIGH

Message: WebSocket operations need error handling.

Fix action: Wrap in try/except for ConnectionClosed

#### Imported: Collaboration

### Delegation Triggers

- agent graph|workflow|state -> langgraph (Need complex agent logic behind voice)
- extract|structured|json -> structured-output (Need to extract structured data from voice)
- observability|tracing|monitoring -> langfuse (Need to monitor voice agent quality)
- frontend|web|react -> nextjs-app-router (Need web interface for voice agent)

### Intelligent Voice Agent

Skills: voice-ai-development, langgraph, structured-output

Workflow:

```
1. Design agent graph with tools
2. Add voice interface layer
3. Use structured output for tool responses
4. Optimize for voice latency
```

### Monitored Voice Agent

Skills: voice-ai-development, langfuse

Workflow:

```
1. Build voice agent with provider of choice
2. Add Langfuse callbacks
3. Track latency, quality, conversation flow
4. Iterate based on metrics
```

### Phone-based Agent

Skills: voice-ai-development, twilio

Workflow:

```
1. Set up Vapi or custom agent
2. Connect to Twilio for PSTN
3. Handle inbound/outbound calls
4. Implement call routing logic
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

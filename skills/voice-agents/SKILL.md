---
name: voice-agents
description: "Voice Agents workflow skill. Use this skill when the user needs Voice agents represent the frontier of AI interaction - humans and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: ai-agents
tags: ["voice-agents", "voice", "represent", "the", "frontier", "interaction", "humans", "ai-agents"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Voice Agents

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/voice-agents` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Voice Agents Voice agents represent the frontier of AI interaction - humans speaking naturally with AI systems. The challenge isn't just speech recognition and synthesis, it's achieving natural conversation flow with sub-800ms latency while handling interruptions, background noise, and emotional nuance. This skill covers two architectures: speech-to-speech (OpenAI Realtime API, lowest latency, most natural) and pipeline (STT→LLM→TTS, more control, easier to debug). Key insight: latency is the constraint. Humans expect responses in 500ms. Every millisecond matters. 84% of organizations are increasing voice AI budgets in 2025. This is the year voice agents go mainstream.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Scope, Tooling, Patterns, OpenAI Realtime API, Use Cases:.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: voice agent
- User mentions or implies: speech to text
- User mentions or implies: text to speech
- User mentions or implies: whisper
- User mentions or implies: elevenlabs
- User mentions or implies: deepgram

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

1. function prepareForSpeech(text) { return text // Remove markdown .replace(/[*_#`]/g, '') // Convert numbers .replace(/\d+/g, numToWords) // Expand abbreviations .replace(/\betc\b/gi, 'et cetera') .replace(/\be\.g\./gi, 'for example') // Add pauses .replace(/\.
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Post-processing:

function prepareForSpeech(text) {
  return text
    // Remove markdown
    .replace(/[*_#`]/g, '')
    // Convert numbers
    .replace(/\d+/g, numToWords)
    // Expand abbreviations
    .replace(/\betc\b/gi, 'et cetera')
    .replace(/\be\.g\./gi, 'for example')
    // Add pauses
    .replace(/\. /g, '... ')
    .replace(/, /g, '... ');
}

#### Imported: Capabilities

- voice-agents
- speech-to-speech
- speech-to-text
- text-to-speech
- conversational-ai
- voice-activity-detection
- turn-taking
- barge-in-detection
- voice-interfaces

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @voice-agents to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @voice-agents against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @voice-agents for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @voice-agents using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Production Pipeline Example

"""
import { Deepgram } from '@deepgram/sdk';
import { ElevenLabsClient } from 'elevenlabs';
import OpenAI from 'openai';

// Initialize clients
const deepgram = new Deepgram(process.env.DEEPGRAM_API_KEY);
const elevenlabs = new ElevenLabsClient();
const openai = new OpenAI();

async function processVoiceInput(audioStream) {
  // 1. Speech-to-Text (Deepgram Nova-3)
  const transcription = await deepgram.transcription.live({
    model: 'nova-3',
    punctuate: true,
    endpointing: 300,  // ms of silence before end
  });

  transcription.on('transcript', async (data) => {
    if (data.is_final && data.speech_final) {
      const userText = data.channel.alternatives[0].transcript;
      console.log('User:', userText);

      // 2. LLM Processing
      const completion = await openai.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a concise voice assistant.' },
          { role: 'user', content: userText }
        ],
        max_tokens: 150,  // Keep responses short for voice
      });

      const agentText = completion.choices[0].message.content;
      console.log('Agent:', agentText);

      // 3. Text-to-Speech (ElevenLabs)
      const audioStream = await elevenlabs.textToSpeech.stream({
        voice_id: 'voice_id_here',
        text: agentText,
        model_id: 'eleven_flash_v2_5',  // Lowest latency
      });

      // Stream to user
      playAudioStream(audioStream);
    }
  });

  // Pipe audio to transcription
  audioStream.pipe(transcription);
}
"""

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Latency is the constraint - target <800ms end-to-end
- Jitter (variance) matters as much as absolute latency
- VAD quality determines conversation flow
- Interruption handling makes or breaks the experience
- Start with focused MVP, iterate based on real conversations
- Combine best-in-class components (Deepgram STT + ElevenLabs TTS)
- No undo button - say it right the first time

### Imported Operating Notes

#### Imported: Principles

- Latency is the constraint - target <800ms end-to-end
- Jitter (variance) matters as much as absolute latency
- VAD quality determines conversation flow
- Interruption handling makes or breaks the experience
- Start with focused MVP, iterate based on real conversations
- Combine best-in-class components (Deepgram STT + ElevenLabs TTS)

#### Imported: Voice-First Principles

"""
Voice is different from text:
- No undo button - say it right the first time
- Linear - user can't scroll back
- Ephemeral - easy to miss information
- Emotional - tone matters as much as words
"""

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/voice-agents`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: Scope

- phone-system-integration → backend
- audio-processing-dsp → audio-specialist
- music-generation → audio-specialist
- accessibility-compliance → accessibility-specialist

#### Imported: Tooling

### Speech_to_speech

- OpenAI Realtime API - When: Lowest latency, most natural conversation Note: gpt-4o-realtime-preview, native voice, sub-500ms
- Pipecat - When: Open-source voice orchestration Note: Daily-backed, enterprise-grade, modular

### Speech_to_text

- OpenAI Whisper - When: Highest accuracy, multilingual Note: gpt-4o-transcribe for best results
- Deepgram Nova-3 - When: Production workloads, 54% lower WER Note: 150-184ms TTFT, 90%+ accuracy on noisy audio
- AssemblyAI - When: Real-time streaming, speaker diarization Note: Good accuracy-latency balance

### Text_to_speech

- ElevenLabs - When: Most natural voice, emotional control Note: Flash model 75ms latency, V3 for expression
- OpenAI TTS - When: Integrated with OpenAI stack Note: gpt-4o-mini-tts, 13 voices, streaming
- Deepgram Aura-2 - When: Cost-effective production TTS Note: 40% cheaper than ElevenLabs, 184ms TTFB

### Frameworks

- Pipecat - When: Open-source voice agent orchestration Note: Silero VAD, SmartTurn, interruption handling
- Vapi - When: Managed voice agent platform Note: No infrastructure management
- Retell AI - When: Low-latency voice agents Note: Best context preservation on interruption

#### Imported: Patterns

### Speech-to-Speech Architecture

Direct audio-to-audio processing for lowest latency

**When to use**: Maximum naturalness, emotional preservation, real-time conversation

# SPEECH-TO-SPEECH ARCHITECTURE:

"""
[User Audio] → [S2S Model] → [Agent Audio]

Advantages:
- Lowest latency (sub-500ms)
- Preserves emotion, emphasis, accents
- Most natural conversation flow

Disadvantages:
- Less control over responses
- Harder to debug/audit
- Can't easily modify what's said
"""

#### Imported: OpenAI Realtime API

"""
import { RealtimeClient } from '@openai/realtime-api-beta';

const client = new RealtimeClient({
  apiKey: process.env.OPENAI_API_KEY,
});

// Configure for voice conversation
client.updateSession({
  modalities: ['text', 'audio'],
  voice: 'alloy',
  input_audio_format: 'pcm16',
  output_audio_format: 'pcm16',
  instructions: `You are a helpful customer service agent.
    Be concise and friendly. If you don't know something,
    say so rather than making things up.`,
  turn_detection: {
    type: 'server_vad',  // or 'semantic_vad'
    threshold: 0.5,
    prefix_padding_ms: 300,
    silence_duration_ms: 500,
  },
});

// Handle audio streams
client.on('conversation.item.input_audio_transcription', (event) => {
  console.log('User said:', event.transcript);
});

client.on('response.audio.delta', (event) => {
  // Stream audio to speaker
  audioPlayer.write(Buffer.from(event.delta, 'base64'));
});

// Send user audio
client.appendInputAudio(audioBuffer);
"""

#### Imported: Use Cases:

- Real-time customer support
- Voice assistants
- Interactive voice response (IVR)
- Live language translation

### Pipeline Architecture

Separate STT → LLM → TTS for maximum control

**When to use**: Need to know/control exactly what's said, debugging, compliance

# PIPELINE ARCHITECTURE:

"""
[Audio] → [STT] → [Text] → [LLM] → [Text] → [TTS] → [Audio]

Advantages:
- Full control at each step
- Can log/audit all text
- Easier to debug
- Mix best-in-class components

Disadvantages:
- Higher latency (700-1200ms typical)
- Loses some emotion/nuance
- More components to manage
"""

#### Imported: Optimization Tips:

- Start TTS while LLM still generating (streaming)
- Pre-compute first response segment during user speech
- Use Flash/turbo models for latency

### Voice Activity Detection Pattern

Detect when user starts/stops speaking

**When to use**: All voice agents need VAD for turn-taking

# VOICE ACTIVITY DETECTION (VAD):

"""
VAD Types:
1. Energy-based: Simple, fast, noise-sensitive
2. Model-based: Silero VAD, more accurate
3. Semantic VAD: Understands meaning, best for conversation
"""

#### Imported: Silero VAD (Popular Open Source)

"""
import { SileroVAD } from '@pipecat-ai/silero-vad';

const vad = new SileroVAD({
  threshold: 0.5,           // Speech probability threshold
  min_speech_duration: 250, // ms before speech confirmed
  min_silence_duration: 500, // ms of silence = end of turn
});

vad.on('speech_start', () => {
  console.log('User started speaking');
  // Stop any playing TTS (barge-in)
  audioPlayer.stop();
});

vad.on('speech_end', () => {
  console.log('User finished speaking');
  // Trigger response generation
  processTranscript();
});

// Feed audio to VAD
audioStream.on('data', (chunk) => {
  vad.process(chunk);
});
"""

#### Imported: OpenAI Semantic VAD

"""
// In Realtime API session config
client.updateSession({
  turn_detection: {
    type: 'semantic_vad',  // Uses meaning, not just silence
    // Model waits longer after "ummm..."
    // Responds faster after "Yes, that's correct."
  },
});
"""

#### Imported: Barge-In Handling

"""
// When user interrupts:
function handleBargeIn() {
  // 1. Stop TTS immediately
  audioPlayer.stop();

  // 2. Cancel pending LLM generation
  llmController.abort();

  // 3. Reset state
  conversationState.checkpoint();

  // 4. Listen to new input
  startListening();
}

// VAD triggers barge-in
vad.on('speech_start', () => {
  if (audioPlayer.isPlaying) {
    handleBargeIn();
  }
});
"""

### Latency Optimization Pattern

Achieving <800ms end-to-end response time

**When to use**: Production voice agents

# LATENCY OPTIMIZATION:

"""
Target Metrics:
- End-to-end: <800ms (ideal: <500ms)
- Time-to-First-Token (TTFT): <300ms
- Barge-in response: <200ms
- Jitter variance: <100ms std dev
"""

#### Imported: Pipeline Latency Breakdown

"""
Typical breakdown:
- VAD processing: 50-100ms
- STT first result: 150-200ms
- LLM TTFT: 100-300ms
- TTS TTFA: 75-200ms
- Audio buffering: 50-100ms

Total: 425-900ms
"""

#### Imported: Optimization Strategies

### 1. Streaming Everything
"""
// Stream STT results as they come
stt.on('partial_transcript', (text) => {
  // Start processing before final transcript
  llmPreprocessor.prepare(text);
});

// Stream LLM output to TTS
const llmStream = await openai.chat.completions.create({
  stream: true,
  // ...
});

for await (const chunk of llmStream) {
  tts.appendText(chunk.choices[0].delta.content);
}
"""

### 2. Pre-computation
"""
// While user is speaking, predict and prepare
stt.on('partial_transcript', async (text) => {
  // Pre-fetch relevant context
  const context = await retrieveContext(text);

  // Pre-compute likely first sentence
  const firstSentence = await generateOpener(context);
});
"""

### 3. Use Low-Latency Models
"""
// STT: Deepgram Nova-3 (150ms TTFT)
// LLM: gpt-4o-mini (fastest GPT-4 class)
// TTS: ElevenLabs Flash (75ms) or Deepgram Aura-2 (184ms)
"""

### 4. Edge Deployment
"""
// Run inference closer to user
// - Cloud regions near user
// - Edge computing for VAD/STT
// - WebSocket over HTTP for lower overhead
"""

### Conversation Design Pattern

Designing natural voice conversations

**When to use**: Building voice UX

# CONVERSATION DESIGN:

#### Imported: Response Design

"""
# Keep responses short (10-20 seconds max)
# Front-load the answer
# Use signposting for lists

Bad: "I found several options. The first is... second is..."
Good: "I found 3 options. Want me to go through them?"

# Confirm understanding
Bad: "I'll transfer $500 to John."
Good: "So that's $500 to John Smith. Should I proceed?"
"""

#### Imported: Prompting for Voice

"""
system_prompt = '''
You are a voice assistant. Follow these rules:

1. Be concise - keep responses under 30 words
2. Use natural speech - contractions, casual language
3. Never use formatting (bullets, numbers in lists)
4. Spell out numbers and abbreviations
5. End with a question to keep conversation flowing
6. If unclear, ask for clarification
7. Never say "I'm an AI" unless asked

Good: "Got it. I'll set that reminder for three pm. Anything else?"
Bad: "I have set a reminder for 3:00 PM. Is there anything else I can assist you with today?"
'''
"""

#### Imported: Error Recovery

"""
// Handle recognition errors gracefully
const errorResponses = {
  no_speech: "I didn't catch that. Could you say it again?",
  unclear: "Sorry, I'm not sure I understood. You said [repeat]. Is that right?",
  timeout: "Still there? I'm here when you're ready.",
};

// Always offer human fallback for complex issues
if (confidenceScore < 0.6) {
  response = "I want to make sure I get this right. Would you like to speak with a human agent?";
}
"""

#### Imported: Sharp Edges

### Response Latency Exceeds 800ms

Severity: CRITICAL

Situation: Building a voice agent pipeline

Symptoms:
Conversations feel awkward. Users repeat themselves. "Are you
there?" questions. Users hang up or give up. Low satisfaction
scores despite correct answers.

Why this breaks:
In human conversation, responses typically arrive within 500ms.
Anything over 800ms feels like the agent is slow or confused.
Users lose confidence and patience. Every component adds latency:
VAD (100ms) + STT (200ms) + LLM (300ms) + TTS (200ms) = 800ms.

Recommended fix:

# Measure and budget latency for each component:

#### Imported: Target latencies:

- VAD processing: <100ms
- STT time-to-first-token: <200ms
- LLM time-to-first-token: <300ms
- TTS time-to-first-audio: <150ms
- Total end-to-end: <800ms

#### Imported: Optimization strategies:

1. Use low-latency models:
   - STT: Deepgram Nova-3 (150ms) vs Whisper (500ms+)
   - TTS: ElevenLabs Flash (75ms) vs standard (200ms+)
   - LLM: gpt-4o-mini streaming

2. Stream everything:
   - Don't wait for full STT transcript
   - Stream LLM output to TTS
   - Start audio playback before TTS finishes

3. Pre-compute:
   - While user speaks, prepare context
   - Generate opening phrase in parallel

4. Edge deployment:
   - Run VAD/STT at edge
   - Use nearest cloud region

#### Imported: Measure continuously:

Log timestamps at each stage, track P50/P95 latency

### Response Time Variance Disrupts Rhythm

Severity: HIGH

Situation: Voice agent with inconsistent response times

Symptoms:
Conversations feel unpredictable. User doesn't know when to speak.
Sometimes agent responds immediately, sometimes after long pause.
Users talk over agent. Agent talks over users.

Why this breaks:
Jitter (variance in response time) disrupts conversational rhythm
more than absolute latency. Consistent 800ms feels better than
alternating 400ms and 1200ms. Users can't adapt to unpredictable
timing.

Recommended fix:

# Target jitter metrics:
- Standard deviation: <100ms
- P95-P50 gap: <200ms

#### Imported: Reduce jitter sources:

1. Consistent model loading:
   - Keep models warm
   - Pre-load on connection start

2. Buffer audio output:
   - Small buffer (50-100ms) smooths playback
   - Don't start playing until buffer filled

3. Handle LLM variance:
   - gpt-4o-mini more consistent than larger models
   - Set max_tokens to limit long responses

4. Monitor and alert:
   - Track response time distribution
   - Alert on jitter spikes

#### Imported: Implementation:

const MIN_RESPONSE_TIME = 400;  // ms

async function respondWithConsistentTiming(text) {
  const startTime = Date.now();
  const audio = await generateSpeech(text);

  const elapsed = Date.now() - startTime;
  if (elapsed < MIN_RESPONSE_TIME) {
    await delay(MIN_RESPONSE_TIME - elapsed);
  }

  playAudio(audio);
}

### Using Silence Duration for Turn Detection

Severity: HIGH

Situation: Detecting when user finishes speaking

Symptoms:
Agent interrupts user mid-thought. Or waits too long after user
finishes. "Let me think..." triggers premature response. Short
answers have awkward pause before response.

Why this breaks:
Simple silence detection (e.g., "end turn after 500ms silence")
doesn't understand conversation. Humans pause mid-sentence.
"Yes." needs fast response, "Well, let me think about that..."
needs patience. Fixed timeout fits neither.

Recommended fix:

# Use semantic VAD:

#### Imported: OpenAI Semantic VAD:

client.updateSession({
  turn_detection: {
    type: 'semantic_vad',
    // Waits longer after "umm..."
    // Responds faster after "Yes, that's correct."
  },
});

#### Imported: Pipecat SmartTurn:

const pipeline = new Pipeline({
  vad: new SileroVAD(),
  turnDetection: new SmartTurn(),
});

// SmartTurn considers:
// - Speech content (complete sentence?)
// - Prosody (falling intonation?)
// - Context (question asked?)

#### Imported: Fallback: Adaptive silence threshold:

function calculateSilenceThreshold(transcript) {
  const endsWithComplete = transcript.match(/[.!?]$/);
  const hasFillers = transcript.match(/um|uh|like|well/i);

  if (endsWithComplete && !hasFillers) {
    return 300;  // Fast response
  } else if (hasFillers) {
    return 1500;  // Wait for continuation
  }
  return 700;  // Default
}

### Agent Doesn't Stop When User Interrupts

Severity: HIGH

Situation: User tries to interrupt agent mid-sentence

Symptoms:
Agent talks over user. User has to wait for agent to finish.
Frustrating experience. Users give up and abandon call.
"STOP! STOP!" doesn't work.

Why this breaks:
Without barge-in handling, the TTS plays to completion regardless
of user input. This violates basic conversational norms - in human
conversation, we stop when interrupted.

Recommended fix:

# Implement barge-in detection:

#### Imported: Basic barge-in:

vad.on('speech_start', () => {
  if (ttsPlayer.isPlaying) {
    // 1. Stop audio immediately
    ttsPlayer.stop();

    // 2. Cancel pending TTS generation
    ttsController.abort();

    // 3. Checkpoint conversation state
    conversationState.save();

    // 4. Listen to new input
    startTranscription();
  }
});

#### Imported: Advanced: Distinguish interruption types:

vad.on('speech_start', async () => {
  if (!ttsPlayer.isPlaying) return;

  // Wait 200ms to get first words
  await delay(200);
  const firstWords = getTranscriptSoFar();

  if (isBackchannel(firstWords)) {
    // "uh-huh", "yeah" - don't interrupt
    return;
  }

  if (isClarification(firstWords)) {
    // "What?", "Sorry?" - repeat last sentence
    repeatLastSentence();
  } else {
    // Real interruption - stop and listen
    handleFullInterruption();
  }
});

#### Imported: Response time target:

- Barge-in response: <200ms
- User should feel heard immediately

### Generating Text-Length Responses for Voice

Severity: MEDIUM

Situation: Prompting LLM for voice agent responses

Symptoms:
Agent rambles. Users lose track of information. "Can you repeat
that?" requests. Users interrupt to ask for shorter version.
Low comprehension of conveyed information.

Why this breaks:
Text can be scanned and re-read. Voice is linear and ephemeral.
A 3-paragraph response that works in chat is overwhelming in voice.
Users can only hold ~7 items in working memory.

Recommended fix:

# Constrain response length in prompts:

system_prompt = '''
You are a voice assistant. Keep responses UNDER 30 WORDS.
For complex information, break into chunks and confirm
understanding between each.

Instead of: "Here are the three options. First, you could...
Second... Third..."

Say: "I found 3 options. Want me to go through them?"

Never list more than 3 items without pausing for confirmation.
'''

#### Imported: Enforce at generation:

const response = await openai.chat.completions.create({
  max_tokens: 100,  // Hard limit
  // ...
});

#### Imported: Chunking pattern:

if (information.length > 3) {
  response = `I have ${information.length} items. Let's go through them one at a time. First: ${information[0]}. Ready for the next?`;
}

#### Imported: Progressive disclosure:

"I found your account. Want the balance, recent transactions, or something else?"
// Don't dump all info at once

### Using Bullets/Numbers/Markdown in Voice

Severity: MEDIUM

Situation: Formatting LLM output for voice

Symptoms:
"First bullet point: item one" read aloud. Numbers read as "one
two three" instead of "one, two, three." Markdown artifacts in
speech. Robotic, unnatural delivery.

Why this breaks:
TTS models read what they're given. Text formatting intended for
visual display sounds robotic when read aloud. Users can't "see"
structure in audio.

Recommended fix:

# Prompt for spoken format:

system_prompt = '''
Format responses for SPOKEN delivery:
- No bullet points, numbered lists, or markdown
- Spell out numbers: "twenty-three" not "23"
- Spell out abbreviations: "United States" not "US"
- Use verbal signposting: "There are three things. First..."
- Never use asterisks, dashes, or special characters
'''

#### Imported: SSML for precise control:

<speak>
  The total is <say-as interpret-as="currency">$49.99</say-as>.
  <break time="500ms"/>
  Want to proceed?
</speak>

### VAD/STT Fails in Noisy Environments

Severity: MEDIUM

Situation: Users in cars, cafes, outdoors

Symptoms:
"I didn't catch that" frequently. Background noise triggers
false starts. Fan/AC causes continuous listening. Car engine
noise confuses STT.

Why this breaks:
Default VAD thresholds work for quiet environments. Real-world
usage includes background noise that triggers false positives
or masks speech, causing false negatives.

Recommended fix:

# Implement noise handling:

#### Imported: 1. Noise reduction in STT:

const transcription = await deepgram.transcription.live({
  model: 'nova-3',
  noise_reduction: true,
  // or
  smart_format: true,
});

#### Imported: 2. Adaptive VAD threshold:

// Measure ambient noise level
const ambientLevel = measureAmbientNoise(5000);  // 5 sec sample

vad.setThreshold(ambientLevel * 1.5);  // Above ambient

#### Imported: 3. Confidence filtering:

stt.on('transcript', (data) => {
  if (data.confidence < 0.7) {
    // Low confidence - probably noise
    askForRepeat();
    return;
  }
  processTranscript(data.transcript);
});

#### Imported: 4. Echo cancellation:

// Prevent agent's voice from being transcribed
const echoCanceller = new EchoCanceller();
echoCanceller.reference(ttsOutput);
const cleanedAudio = echoCanceller.process(userAudio);

### STT Produces Incorrect or Hallucinated Text

Severity: MEDIUM

Situation: Processing unclear or accented speech

Symptoms:
Agent responds to something user didn't say. Names consistently
wrong. Technical terms misheard. "I said X, not Y" frustration.

Why this breaks:
STT models can hallucinate, especially on proper nouns, technical
terms, or accented speech. These errors propagate through the
pipeline and produce nonsensical responses.

Recommended fix:

# Mitigate STT errors:

#### Imported: 1. Use keywords/biasing:

const transcription = await deepgram.transcription.live({
  keywords: ['Acme Corp', 'ProductName', 'John Smith'],
  keyword_boost: 'high',
});

#### Imported: 2. Confirmation for critical info:

if (containsNameOrNumber(transcript)) {
  response = `I heard "${name}". Is that correct?`;
}

#### Imported: 3. Confidence-based fallback:

if (confidence < 0.8) {
  response = `I think you said "${transcript}". Did I get that right?`;
}

#### Imported: 4. Multiple hypothesis handling:

// Some STT APIs return n-best list
const alternatives = transcription.alternatives;
if (alternatives[0].confidence - alternatives[1].confidence < 0.1) {
  // Ambiguous - ask for clarification
}

#### Imported: 5. Error correction patterns:

promptPattern = `
  User may correct previous mistakes. If they say "no, I said X"
  or "not Y, Z", update your understanding accordingly.
`;

#### Imported: Validation Checks

### Missing Latency Measurement

Severity: ERROR

Voice agents must track latency at each stage

Message: Voice pipeline without latency tracking. Add timestamps at each stage to measure performance.

### Using Batch STT Instead of Streaming

Severity: WARNING

Streaming STT reduces latency significantly

Message: Using batch transcription. Consider streaming for lower latency in voice agents.

### TTS Without Streaming Output

Severity: WARNING

Streaming TTS reduces time to first audio

Message: TTS without streaming. Stream audio to reduce time to first audio.

### Hardcoded VAD Silence Threshold

Severity: WARNING

Fixed silence thresholds don't adapt to conversation

Message: Fixed silence threshold. Consider semantic VAD or adaptive thresholds for better turn-taking.

### Missing Barge-In Handling

Severity: WARNING

Voice agents should stop when user interrupts

Message: VAD without barge-in handling. Stop TTS when user starts speaking.

### Voice Prompt Without Length Constraints

Severity: WARNING

Voice prompts should constrain response length

Message: Voice prompt without length constraints. Add 'Keep responses under 30 words' to system prompt.

### Markdown Formatting Sent to TTS

Severity: WARNING

Markdown will be read literally by TTS

Message: Check for markdown in TTS input. Strip formatting before sending to TTS.

### STT Without Error Handling

Severity: WARNING

STT can fail or return low confidence

Message: STT without error handling. Check confidence scores and handle failures.

### WebSocket Without Reconnection

Severity: WARNING

Realtime APIs need reconnection handling

Message: Realtime connection without reconnection logic. Handle disconnects gracefully.

### Missing Noise Handling

Severity: INFO

Real-world audio includes background noise

Message: Consider adding noise handling for real-world audio quality.

#### Imported: Collaboration

### Delegation Triggers

- user needs phone/telephony integration -> backend (Twilio, Vonage, SIP integration)
- user needs LLM optimization -> llm-architect (Model selection, prompting, fine-tuning)
- user needs tools for voice agent -> agent-tool-builder (Tool design for voice context)
- user needs multi-agent voice system -> multi-agent-orchestration (Voice agents working together)
- user needs accessibility compliance -> accessibility-specialist (Voice interface accessibility)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

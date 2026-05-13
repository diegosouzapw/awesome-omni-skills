---
name: "earllm-build"
description: "EarLLM One \\u2014 Build & Maintain workflow skill. Use this skill when the user needs Build, maintain, and extend the EarLLM One Android project \\u2014 a Kotlin/Compose app that connects Bluetooth earbuds to an LLM via voice pipeline and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "frontend"
tags:
  - "android"
  - "kotlin"
  - "bluetooth"
  - "llm"
  - "voice"
  - "earllm-build"
  - "build"
  - "maintain"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "claude-code"
  - "antigravity"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "earllm-build"
family_name: "EarLLM One \u2014 Build & Maintain"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/earllm-build"
upstream_skill: "skills/earllm-build"
upstream_author: "renat"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "earllm-build"
---

# EarLLM One — Build & Maintain

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/earllm-build` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# EarLLM One — Build & Maintain

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Project Location, Module Dependency Graph, Modules And Key Files, Build Configuration, Target Hardware.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "earllm" or related topics
- When the user mentions "earbudllm" or related topics
- When the user mentions "earbud app" or related topics
- When the user mentions "voice pipeline kotlin" or related topics
- When the user mentions "bluetooth audio android" or related topics
- When the user mentions "sco microphone" or related topics

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Build, maintain, and extend the EarLLM One Android project — a Kotlin/Compose app that connects Bluetooth earbuds to an LLM via voice pipeline.

#### Imported: How It Works

EarLLM One is a multi-module Android app (Kotlin + Jetpack Compose) that captures voice from Bluetooth earbuds, transcribes it, sends it to an LLM, and speaks the response back.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @earllm-build to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @earllm-build against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @earllm-build for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @earllm-build using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: Best Practices

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/earllm-build`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@devops-deploy` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@devops-troubleshooter` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@differential-review` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@discord-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Stt Engine Reference

| Engine | Size | WER | Streaming | Best For |
|--------|------|-----|-----------|----------|
| Vosk small-en | 40 MB | ~10% | Yes | Real-time mobile |
| Vosk lgraph | 128 MB | ~8% | Yes | Better accuracy |
| Whisper tiny | 40 MB | ~10-12% | No (batch) | Post-utterance polish |
| Android SpeechRecognizer | 0 MB | varies | Yes | Online, no extra deps |

#### Imported: Project Location

`C:\Users\renat\earbudllm`

#### Imported: Module Dependency Graph

```
app ──→ voice ──→ audio ──→ core-logging
  │       │
  ├──→ bluetooth ──→ core-logging
  └──→ llm ──→ core-logging
```

#### Imported: Modules And Key Files

| Module | Purpose | Key Files |
|--------|---------|-----------|
| **core-logging** | Structured logging, performance tracking | `EarLogger.kt`, `PerformanceTracker.kt` |
| **bluetooth** | BT discovery, pairing, A2DP/HFP profiles | `BluetoothController.kt`, `BluetoothState.kt`, `BluetoothPermissions.kt` |
| **audio** | Audio routing (SCO/BLE), capture, headset buttons | `AudioRouteController.kt`, `VoiceCaptureController.kt`, `HeadsetButtonController.kt` |
| **voice** | STT (SpeechRecognizer + Vosk stub), TTS, pipeline | `SpeechToTextController.kt`, `TextToSpeechController.kt`, `VoicePipeline.kt` |
| **llm** | LLM interface, stub, OpenAI-compatible client | `LlmClient.kt`, `StubLlmClient.kt`, `RealLlmClient.kt`, `SecureTokenStore.kt` |
| **app** | UI, ViewModel, Service, Settings, all screens | `MainViewModel.kt`, `EarLlmForegroundService.kt`, 6 Compose screens |

#### Imported: Build Configuration

- **SDK**: minSdk 26, targetSdk 34, compileSdk 34
- **Build tools**: AGP 8.2.2, Kotlin 1.9.22, Gradle 8.5
- **Compose BOM**: 2024.02.00
- **Key deps**: OkHttp, AndroidX Security (EncryptedSharedPreferences), DataStore, Media

#### Imported: Target Hardware

| Device | Model | Key Details |
|--------|-------|-------------|
| Phone | Samsung Galaxy S24 Ultra | Android 14, One UI 6.1, Snapdragon 8 Gen 3 |
| Earbuds | Xiaomi Redmi Buds 6 Pro | BT 5.3, A2DP/HFP/AVRCP, ANC, LDAC |

#### Imported: Critical Technical Facts

These are verified facts from official documentation and device testing. Treat them as ground truth when making decisions:

1. **Bluetooth SCO is limited to 8kHz mono input** on most devices. Some support 16kHz mSBC. BLE Audio (Android 12+, `TYPE_BLE_HEADSET = 26`) supports up to 32kHz stereo. Always prefer BLE Audio when available.

2. **`startBluetoothSco()` is deprecated since Android 12 (API 31).** Use `AudioManager.setCommunicationDevice(AudioDeviceInfo)` and `clearCommunicationDevice()` instead. The project already implements both paths in `AudioRouteController.kt`.

3. **Samsung One UI 7/8 has a known HFP corruption bug** where A2DP playback corrupts the SCO link. The app handles this with silence detection and automatic fallback to the phone's built-in mic.

4. **Redmi Buds 6 Pro tap controls must be set to "Default" (Play/Pause)** in the Xiaomi Earbuds companion app. If set to ANC or custom functions, events are handled internally by the earbuds and never reach Android.

5. **Android 14+ requires `FOREGROUND_SERVICE_MICROPHONE` permission** and `foregroundServiceType="microphone"` in the service declaration. `RECORD_AUDIO` must be granted before `startForeground()`.

6. **`VOICE_COMMUNICATION` audio source enables AEC** (Acoustic Echo Cancellation), which is critical to prevent TTS audio output from feeding back into the STT microphone input. Never change this source without understanding the echo implications.

7. **Never play TTS (A2DP) while simultaneously recording via SCO.** The correct sequence is: stop playback → switch to HFP → record → switch to A2DP → play response.

#### Imported: Data Flow

```
Headset button tap
  → MediaSession (HeadsetButtonController)
  → TapAction.RECORD_TOGGLE
  → VoicePipeline.toggleRecording()
  → VoiceCaptureController captures PCM (16kHz mono)
  → stopRecording() returns ByteArray
  → SpeechToTextController.transcribe(pcmData)
  → LlmClient.chat(messages)
  → TextToSpeechController.speak(response)
  → Audio output via A2DP to earbuds
```

#### Imported: Adding A New Feature

1. Identify which module(s) are affected
2. Read existing code in those modules first
3. Follow the StateFlow pattern — expose state via `MutableStateFlow` / `StateFlow`
4. Update `MainViewModel.kt` if the feature needs UI integration
5. Add unit tests in the module's `src/test/` directory
6. Update docs if the feature changes behavior

#### Imported: Modifying Audio Capture

- `VoiceCaptureController.kt` handles PCM recording at 16kHz mono
- WAV headers use hex byte values (not char literals) to avoid shell quoting issues
- VU meter: RMS calculation → dB conversion → normalized 0-1 range
- Buffer size: `getMinBufferSize().coerceAtLeast(4096)`

#### Imported: Changing Bluetooth Behavior

- `BluetoothController.kt` manages discovery, pairing, profile proxies
- Earbuds detection uses name heuristics: "buds", "earbuds", "tws", "pods", "ear"
- Always handle both Bluetooth Classic and BLE Audio paths

#### Imported: Modifying The Llm Integration

- `LlmClient.kt` defines the interface — keep it generic
- `StubLlmClient.kt` for offline testing (500ms simulated delay)
- `RealLlmClient.kt` uses OkHttp to call OpenAI-compatible APIs
- API keys stored in `SecureTokenStore.kt` (EncryptedSharedPreferences)

#### Imported: Generating A Build Artifact

After code changes, regenerate the ZIP:
```powershell

#### Imported: From Project Root

powershell -Command "Remove-Item 'EarLLM_One_v1.0.zip' -Force -ErrorAction SilentlyContinue; Compress-Archive -Path (Get-ChildItem -Exclude '*.zip','_zip_verify','.git') -DestinationPath 'EarLLM_One_v1.0.zip' -Force"
```

#### Imported: Running Tests

```bash
./gradlew test --stacktrace          # Unit tests
./gradlew connectedAndroidTest       # Instrumented tests (device required)
```

#### Imported: Phase 2 Roadmap

- Real-time streaming voice conversation with LLM through earbuds
- Smart assistant: categorize speech into meetings, shopping lists, memos, emails
- Vosk offline STT integration (currently stubbed)
- Wake-word detection to avoid keeping SCO open continuously
- Streaming TTS (Android built-in TTS does NOT support streaming)

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

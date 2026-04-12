---
name: azure-ai-voicelive-dotnet
description: "Azure.AI.VoiceLive (.NET) workflow skill. Use this skill when the user needs Azure AI Voice Live SDK for .NET. Build real-time voice AI applications with bidirectional WebSocket communication and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["azure-ai-voicelive-dotnet", "azure", "voice", "live", "sdk", "for", "net", "build"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Azure.AI.VoiceLive (.NET)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Azure.AI.VoiceLive (.NET) Real-time voice AI SDK for building bidirectional voice assistants with Azure AI.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Authentication, Client Hierarchy, Voice Options, Supported Models, Error Handling.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure AI Voice Live SDK for .NET. Build real-time voice AI applications with bidirectional WebSocket communication.
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

1. `bash dotnet add package Azure.AI.VoiceLive dotnet add package Azure.Identity dotnet add package NAudio # For audio capture/playback Current Versions: Stable v1.0.0, Preview v1.1.0-beta.1 ### 1.
2. Start Session and Configure `csharp using Azure.Identity; using Azure.AI.VoiceLive; var endpoint = new Uri(Environment.GetEnvironmentVariable("AZUREVOICELIVEENDPOINT")); var client = new VoiceLiveClient(endpoint, new DefaultAzureCredential()); var model = "gpt-4o-mini-realtime-preview"; // Start session using VoiceLiveSession session = await client.StartSessionAsync(model); // Configure session VoiceLiveSessionOptions sessionOptions = new() { Model = model, Instructions = "You are a helpful AI assistant.
3. Respond naturally.", Voice = new AzureStandardVoice("en-US-AvaNeural"), TurnDetection = new AzureSemanticVadTurnDetection() { Threshold = 0.5f, PrefixPadding = TimeSpan.FromMilliseconds(300), SilenceDuration = TimeSpan.FromMilliseconds(500) }, InputAudioFormat = InputAudioFormat.Pcm16, OutputAudioFormat = OutputAudioFormat.Pcm16 }; // Set modalities (both text and audio for voice assistants) sessionOptions.Modalities.Clear(); sessionOptions.Modalities.Add(InteractionModality.Text); sessionOptions.Modalities.Add(InteractionModality.Audio); await session.ConfigureSessionAsync(sessionOptions); ` ### 2.
4. Process Events csharp await foreach (SessionUpdate serverEvent in session.GetUpdatesAsync()) { switch (serverEvent) { case SessionUpdateResponseAudioDelta audioDelta: byte[] audioData = audioDelta.Delta.ToArray(); // Play audio via NAudio or other audio library break; case SessionUpdateResponseTextDelta textDelta: Console.Write(textDelta.Delta); break; case SessionUpdateResponseFunctionCallArgumentsDone functionCall: // Handle function call (see Function Calling section) break; case SessionUpdateError error: Console.WriteLine($"Error: {error.Error.Message}"); break; case SessionUpdateResponseDone: Console.WriteLine("\n--- Response complete ---"); break; } } ### 3.
5. Send User Message csharp await session.AddItemAsync(new UserMessageItem("Hello, can you help me?")); await session.StartResponseAsync(); ### 4.
6. Function Calling `csharp // Define function var weatherFunction = new VoiceLiveFunctionDefinition("getcurrentweather") { Description = "Get the current weather for a given location", Parameters = BinaryData.FromString(""" { "type": "object", "properties": { "location": { "type": "string", "description": "The city and state or country" } }, "required": ["location"] } """) }; // Add to session options sessionOptions.Tools.Add(weatherFunction); // Handle function call in event loop if (serverEvent is SessionUpdateResponseFunctionCallArgumentsDone functionCall) { if (functionCall.Name == "getcurrentweather") { var parameters = JsonSerializer.Deserialize<Dictionary<string, string>>(functionCall.Arguments); string location = parameters?["location"] ??
7. ""; // Call external service string weatherInfo = $"The weather in {location} is sunny, 75°F."; // Send response await session.AddItemAsync(new FunctionCallOutputItem(functionCall.CallId, weatherInfo)); await session.StartResponseAsync(); } } ``

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.AI.VoiceLive
dotnet add package Azure.Identity
dotnet add package NAudio                    # For audio capture/playback
```

**Current Versions**: Stable v1.0.0, Preview v1.1.0-beta.1

#### Imported: Core Workflow

### 1. Start Session and Configure

```csharp
using Azure.Identity;
using Azure.AI.VoiceLive;

var endpoint = new Uri(Environment.GetEnvironmentVariable("AZURE_VOICELIVE_ENDPOINT"));
var client = new VoiceLiveClient(endpoint, new DefaultAzureCredential());

var model = "gpt-4o-mini-realtime-preview";

// Start session
using VoiceLiveSession session = await client.StartSessionAsync(model);

// Configure session
VoiceLiveSessionOptions sessionOptions = new()
{
    Model = model,
    Instructions = "You are a helpful AI assistant. Respond naturally.",
    Voice = new AzureStandardVoice("en-US-AvaNeural"),
    TurnDetection = new AzureSemanticVadTurnDetection()
    {
        Threshold = 0.5f,
        PrefixPadding = TimeSpan.FromMilliseconds(300),
        SilenceDuration = TimeSpan.FromMilliseconds(500)
    },
    InputAudioFormat = InputAudioFormat.Pcm16,
    OutputAudioFormat = OutputAudioFormat.Pcm16
};

// Set modalities (both text and audio for voice assistants)
sessionOptions.Modalities.Clear();
sessionOptions.Modalities.Add(InteractionModality.Text);
sessionOptions.Modalities.Add(InteractionModality.Audio);

await session.ConfigureSessionAsync(sessionOptions);
```

### 2. Process Events

```csharp
await foreach (SessionUpdate serverEvent in session.GetUpdatesAsync())
{
    switch (serverEvent)
    {
        case SessionUpdateResponseAudioDelta audioDelta:
            byte[] audioData = audioDelta.Delta.ToArray();
            // Play audio via NAudio or other audio library
            break;
            
        case SessionUpdateResponseTextDelta textDelta:
            Console.Write(textDelta.Delta);
            break;
            
        case SessionUpdateResponseFunctionCallArgumentsDone functionCall:
            // Handle function call (see Function Calling section)
            break;
            
        case SessionUpdateError error:
            Console.WriteLine($"Error: {error.Error.Message}");
            break;
            
        case SessionUpdateResponseDone:
            Console.WriteLine("\n--- Response complete ---");
            break;
    }
}
```

### 3. Send User Message

```csharp
await session.AddItemAsync(new UserMessageItem("Hello, can you help me?"));
await session.StartResponseAsync();
```

### 4. Function Calling

```csharp
// Define function
var weatherFunction = new VoiceLiveFunctionDefinition("get_current_weather")
{
    Description = "Get the current weather for a given location",
    Parameters = BinaryData.FromString("""
        {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state or country"
                }
            },
            "required": ["location"]
        }
        """)
};

// Add to session options
sessionOptions.Tools.Add(weatherFunction);

// Handle function call in event loop
if (serverEvent is SessionUpdateResponseFunctionCallArgumentsDone functionCall)
{
    if (functionCall.Name == "get_current_weather")
    {
        var parameters = JsonSerializer.Deserialize<Dictionary<string, string>>(functionCall.Arguments);
        string location = parameters?["location"] ?? "";
        
        // Call external service
        string weatherInfo = $"The weather in {location} is sunny, 75°F.";
        
        // Send response
        await session.AddItemAsync(new FunctionCallOutputItem(functionCall.CallId, weatherInfo));
        await session.StartResponseAsync();
    }
}
```

#### Imported: Environment Variables

```bash
AZURE_VOICELIVE_ENDPOINT=https://<resource>.services.ai.azure.com/
AZURE_VOICELIVE_MODEL=gpt-4o-realtime-preview
AZURE_VOICELIVE_VOICE=en-US-AvaNeural
# Optional: API key if not using Entra ID
AZURE_VOICELIVE_API_KEY=<your-api-key>
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-voicelive-dotnet to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/azure-ai-voicelive-dotnet/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/azure-ai-voicelive-dotnet/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-voicelive-dotnet using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always set both modalities — Include Text and Audio for voice assistants
- Use AzureSemanticVadTurnDetection — Provides natural conversation flow
- Configure appropriate silence duration — 500ms typical to avoid premature cutoffs
- Use using statement — Ensures proper session disposal
- Handle all event types — Check for errors, audio, text, and function calls
- Use DefaultAzureCredential — Never hardcode API keys
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

1. **Always set both modalities** — Include `Text` and `Audio` for voice assistants
2. **Use `AzureSemanticVadTurnDetection`** — Provides natural conversation flow
3. **Configure appropriate silence duration** — 500ms typical to avoid premature cutoffs
4. **Use `using` statement** — Ensures proper session disposal
5. **Handle all event types** — Check for errors, audio, text, and function calls
6. **Use DefaultAzureCredential** — Never hardcode API keys

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/azure-ai-voicelive-dotnet`, fails to mention provenance, or does not use the support pack at all.
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
| `VoiceLiveSessionOptions` | Session configuration |
| `AzureStandardVoice` | Standard Azure voice provider |
| `AzureSemanticVadTurnDetection` | Voice activity detection |
| `VoiceLiveFunctionDefinition` | Function tool definition |
| `UserMessageItem` | User text message |
| `FunctionCallOutputItem` | Function call response |
| `SessionUpdateResponseAudioDelta` | Audio chunk event |
| `SessionUpdateResponseTextDelta` | Text chunk event |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.AI.VoiceLive |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.ai.voicelive |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/ai/Azure.AI.VoiceLive |
| Quickstart | https://learn.microsoft.com/azure/ai-services/speech-service/voice-live-quickstart |

#### Imported: Authentication

### Microsoft Entra ID (Recommended)

```csharp
using Azure.Identity;
using Azure.AI.VoiceLive;

Uri endpoint = new Uri("https://your-resource.cognitiveservices.azure.com");
DefaultAzureCredential credential = new DefaultAzureCredential();
VoiceLiveClient client = new VoiceLiveClient(endpoint, credential);
```

**Required Role**: `Cognitive Services User` (assign in Azure Portal → Access control)

### API Key

```csharp
Uri endpoint = new Uri("https://your-resource.cognitiveservices.azure.com");
AzureKeyCredential credential = new AzureKeyCredential("your-api-key");
VoiceLiveClient client = new VoiceLiveClient(endpoint, credential);
```

#### Imported: Client Hierarchy

```
VoiceLiveClient
└── VoiceLiveSession (WebSocket connection)
    ├── ConfigureSessionAsync()
    ├── GetUpdatesAsync() → SessionUpdate events
    ├── AddItemAsync() → UserMessageItem, FunctionCallOutputItem
    ├── SendAudioAsync()
    └── StartResponseAsync()
```

#### Imported: Voice Options

| Voice Type | Class | Example |
|------------|-------|---------|
| Azure Standard | `AzureStandardVoice` | `"en-US-AvaNeural"` |
| Azure HD | `AzureStandardVoice` | `"en-US-Ava:DragonHDLatestNeural"` |
| Azure Custom | `AzureCustomVoice` | Custom voice with endpoint ID |

#### Imported: Supported Models

| Model | Description |
|-------|-------------|
| `gpt-4o-realtime-preview` | GPT-4o with real-time audio |
| `gpt-4o-mini-realtime-preview` | Lightweight, fast interactions |
| `phi4-mm-realtime` | Cost-effective multimodal |

#### Imported: Error Handling

```csharp
if (serverEvent is SessionUpdateError error)
{
    if (error.Error.Message.Contains("Cancellation failed: no active response"))
    {
        // Benign error, can ignore
    }
    else
    {
        Console.WriteLine($"Error: {error.Error.Message}");
    }
}
```

#### Imported: Audio Configuration

- **Input Format**: `InputAudioFormat.Pcm16` (16-bit PCM)
- **Output Format**: `OutputAudioFormat.Pcm16`
- **Sample Rate**: 24kHz recommended
- **Channels**: Mono

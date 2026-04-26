---
name: "azure-ai-openai-dotnet-v3"
description: "Azure.AI.OpenAI (.NET) workflow skill. Use this skill when the user needs Azure OpenAI SDK for .NET. Client library for Azure OpenAI and OpenAI services. Use for chat completions, embeddings, image generation, audio transcription, and assistants and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "cli-automation"
tags:
  - "azure-ai-openai-dotnet-v3"
  - "azure-ai-openai-dotnet"
  - "azure"
  - "openai"
  - "sdk"
  - "for"
  - "net"
  - "client"
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
date_added: "2026-04-26"
date_updated: "2026-04-26"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "azure-ai-openai-dotnet-v3"
family_name: "Azure.AI.OpenAI (.NET)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/azure-ai-openai-dotnet-v3"
upstream_skill: "skills/azure-ai-openai-dotnet-v3"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "251"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "2c10794ccb228a9e6690f0a5749c490831a75f24"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "azure-ai-openai-dotnet-v3"
---

# Azure.AI.OpenAI (.NET)

## Overview

This public intake copy packages `plugins/antigravity-bundle-azure-ai-cloud/skills/azure-ai-openai-dotnet` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Azure.AI.OpenAI (.NET) Client library for Azure OpenAI Service providing access to OpenAI models including GPT-4, GPT-4o, embeddings, DALL-E, and Whisper.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Environment Variables, Client Hierarchy, Authentication, Chat Completions, Structured Outputs (JSON Schema), Reasoning Models (o1, o4-mini).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Azure OpenAI SDK for .NET. Client library for Azure OpenAI and OpenAI services. Use for chat completions, embeddings, image generation, audio transcription, and assistants.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
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

1. bash dotnet add package Azure.AI.OpenAI # For OpenAI (non-Azure) compatibility dotnet add package OpenAI Current Version: 2.1.0 (stable)
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
dotnet add package Azure.AI.OpenAI

# For OpenAI (non-Azure) compatibility
dotnet add package OpenAI
```

**Current Version**: 2.1.0 (stable)

#### Imported: Environment Variables

```bash
AZURE_OPENAI_ENDPOINT=https://<resource-name>.openai.azure.com
AZURE_OPENAI_API_KEY=<api-key>                    # For key-based auth
AZURE_OPENAI_DEPLOYMENT_NAME=gpt-4o-mini          # Your deployment name
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @azure-ai-openai-dotnet-v3 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @azure-ai-openai-dotnet-v3 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @azure-ai-openai-dotnet-v3 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @azure-ai-openai-dotnet-v3 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use Entra ID in production — Avoid API keys; use DefaultAzureCredential
- Reuse client instances — Create once, share across requests
- Handle rate limits — Implement exponential backoff for 429 errors
- Stream for long responses — Use CompleteChatStreamingAsync for better UX
- Set appropriate timeouts — Long completions may need extended timeouts
- Use structured outputs — JSON schema ensures consistent response format
- Monitor token usage — Track completion.Usage for cost management

### Imported Operating Notes

#### Imported: Best Practices

1. **Use Entra ID in production** — Avoid API keys; use `DefaultAzureCredential`
2. **Reuse client instances** — Create once, share across requests
3. **Handle rate limits** — Implement exponential backoff for 429 errors
4. **Stream for long responses** — Use `CompleteChatStreamingAsync` for better UX
5. **Set appropriate timeouts** — Long completions may need extended timeouts
6. **Use structured outputs** — JSON schema ensures consistent response format
7. **Monitor token usage** — Track `completion.Usage` for cost management
8. **Validate tool calls** — Always validate function arguments before execution

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-azure-ai-cloud/skills/azure-ai-openai-dotnet`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ab-test-setup-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@algolia-search-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@algorithmic-art-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@analytics-tracking-v3` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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
| `AzureOpenAIClient` | Top-level client for Azure OpenAI |
| `ChatClient` | Chat completions |
| `EmbeddingClient` | Text embeddings |
| `ImageClient` | Image generation (DALL-E) |
| `AudioClient` | Audio transcription/TTS |
| `ChatCompletion` | Chat response |
| `ChatCompletionOptions` | Request configuration |
| `StreamingChatCompletionUpdate` | Streaming response chunk |
| `ChatMessage` | Base message type |
| `SystemChatMessage` | System prompt |
| `UserChatMessage` | User input |
| `AssistantChatMessage` | Assistant response |
| `DeveloperChatMessage` | Developer message (reasoning models) |
| `ChatTool` | Function/tool definition |
| `ChatToolCall` | Tool invocation request |

#### Imported: Reference Links

| Resource | URL |
|----------|-----|
| NuGet Package | https://www.nuget.org/packages/Azure.AI.OpenAI |
| API Reference | https://learn.microsoft.com/dotnet/api/azure.ai.openai |
| Migration Guide (1.0→2.0) | https://learn.microsoft.com/azure/ai-services/openai/how-to/dotnet-migration |
| Quickstart | https://learn.microsoft.com/azure/ai-services/openai/quickstart |
| GitHub Source | https://github.com/Azure/azure-sdk-for-net/tree/main/sdk/openai/Azure.AI.OpenAI |

#### Imported: Client Hierarchy

```
AzureOpenAIClient (top-level)
├── GetChatClient(deploymentName)      → ChatClient
├── GetEmbeddingClient(deploymentName) → EmbeddingClient
├── GetImageClient(deploymentName)     → ImageClient
├── GetAudioClient(deploymentName)     → AudioClient
└── GetAssistantClient()               → AssistantClient
```

#### Imported: Authentication

### API Key Authentication

```csharp
using Azure;
using Azure.AI.OpenAI;

AzureOpenAIClient client = new(
    new Uri(Environment.GetEnvironmentVariable("AZURE_OPENAI_ENDPOINT")!),
    new AzureKeyCredential(Environment.GetEnvironmentVariable("AZURE_OPENAI_API_KEY")!));
```

### Microsoft Entra ID (Recommended for Production)

```csharp
using Azure.Identity;
using Azure.AI.OpenAI;

AzureOpenAIClient client = new(
    new Uri(Environment.GetEnvironmentVariable("AZURE_OPENAI_ENDPOINT")!),
    new DefaultAzureCredential());
```

### Using OpenAI SDK Directly with Azure

```csharp
using Azure.Identity;
using OpenAI;
using OpenAI.Chat;
using System.ClientModel.Primitives;

#pragma warning disable OPENAI001

BearerTokenPolicy tokenPolicy = new(
    new DefaultAzureCredential(),
    "https://cognitiveservices.azure.com/.default");

ChatClient client = new(
    model: "gpt-4o-mini",
    authenticationPolicy: tokenPolicy,
    options: new OpenAIClientOptions()
    {
        Endpoint = new Uri("https://YOUR-RESOURCE.openai.azure.com/openai/v1")
    });
```

#### Imported: Chat Completions

### Basic Chat

```csharp
using Azure.AI.OpenAI;
using OpenAI.Chat;

AzureOpenAIClient azureClient = new(
    new Uri(endpoint),
    new DefaultAzureCredential());

ChatClient chatClient = azureClient.GetChatClient("gpt-4o-mini");

ChatCompletion completion = chatClient.CompleteChat(
[
    new SystemChatMessage("You are a helpful assistant."),
    new UserChatMessage("What is Azure OpenAI?")
]);

Console.WriteLine(completion.Content[0].Text);
```

### Async Chat

```csharp
ChatCompletion completion = await chatClient.CompleteChatAsync(
[
    new SystemChatMessage("You are a helpful assistant."),
    new UserChatMessage("Explain cloud computing in simple terms.")
]);

Console.WriteLine($"Response: {completion.Content[0].Text}");
Console.WriteLine($"Tokens used: {completion.Usage.TotalTokenCount}");
```

### Streaming Chat

```csharp
await foreach (StreamingChatCompletionUpdate update
    in chatClient.CompleteChatStreamingAsync(messages))
{
    if (update.ContentUpdate.Count > 0)
    {
        Console.Write(update.ContentUpdate[0].Text);
    }
}
```

### Chat with Options

```csharp
ChatCompletionOptions options = new()
{
    MaxOutputTokenCount = 1000,
    Temperature = 0.7f,
    TopP = 0.95f,
    FrequencyPenalty = 0,
    PresencePenalty = 0
};

ChatCompletion completion = await chatClient.CompleteChatAsync(messages, options);
```

### Multi-turn Conversation

```csharp
List<ChatMessage> messages = new()
{
    new SystemChatMessage("You are a helpful assistant."),
    new UserChatMessage("Hi, can you help me?"),
    new AssistantChatMessage("Of course! What do you need help with?"),
    new UserChatMessage("What's the capital of France?")
};

ChatCompletion completion = await chatClient.CompleteChatAsync(messages);
messages.Add(new AssistantChatMessage(completion.Content[0].Text));
```

#### Imported: Structured Outputs (JSON Schema)

```csharp
using System.Text.Json;

ChatCompletionOptions options = new()
{
    ResponseFormat = ChatResponseFormat.CreateJsonSchemaFormat(
        jsonSchemaFormatName: "math_reasoning",
        jsonSchema: BinaryData.FromBytes("""
            {
                "type": "object",
                "properties": {
                    "steps": {
                        "type": "array",
                        "items": {
                            "type": "object",
                            "properties": {
                                "explanation": { "type": "string" },
                                "output": { "type": "string" }
                            },
                            "required": ["explanation", "output"],
                            "additionalProperties": false
                        }
                    },
                    "final_answer": { "type": "string" }
                },
                "required": ["steps", "final_answer"],
                "additionalProperties": false
            }
            """u8.ToArray()),
        jsonSchemaIsStrict: true)
};

ChatCompletion completion = await chatClient.CompleteChatAsync(
    [new UserChatMessage("How can I solve 8x + 7 = -23?")],
    options);

using JsonDocument json = JsonDocument.Parse(completion.Content[0].Text);
Console.WriteLine($"Answer: {json.RootElement.GetProperty("final_answer")}");
```

#### Imported: Reasoning Models (o1, o4-mini)

```csharp
ChatCompletionOptions options = new()
{
    ReasoningEffortLevel = ChatReasoningEffortLevel.Low,
    MaxOutputTokenCount = 100000
};

ChatCompletion completion = await chatClient.CompleteChatAsync(
[
    new DeveloperChatMessage("You are a helpful assistant"),
    new UserChatMessage("Explain the theory of relativity")
], options);
```

#### Imported: Azure AI Search Integration (RAG)

```csharp
using Azure.AI.OpenAI.Chat;

#pragma warning disable AOAI001

ChatCompletionOptions options = new();
options.AddDataSource(new AzureSearchChatDataSource()
{
    Endpoint = new Uri(searchEndpoint),
    IndexName = searchIndex,
    Authentication = DataSourceAuthentication.FromApiKey(searchKey)
});

ChatCompletion completion = await chatClient.CompleteChatAsync(
    [new UserChatMessage("What health plans are available?")],
    options);

ChatMessageContext context = completion.GetMessageContext();
if (context?.Intent is not null)
{
    Console.WriteLine($"Intent: {context.Intent}");
}
foreach (ChatCitation citation in context?.Citations ?? [])
{
    Console.WriteLine($"Citation: {citation.Content}");
}
```

#### Imported: Embeddings

```csharp
using OpenAI.Embeddings;

EmbeddingClient embeddingClient = azureClient.GetEmbeddingClient("text-embedding-ada-002");

OpenAIEmbedding embedding = await embeddingClient.GenerateEmbeddingAsync("Hello, world!");
ReadOnlyMemory<float> vector = embedding.ToFloats();

Console.WriteLine($"Embedding dimensions: {vector.Length}");
```

### Batch Embeddings

```csharp
List<string> inputs = new()
{
    "First document text",
    "Second document text",
    "Third document text"
};

OpenAIEmbeddingCollection embeddings = await embeddingClient.GenerateEmbeddingsAsync(inputs);

foreach (OpenAIEmbedding emb in embeddings)
{
    Console.WriteLine($"Index {emb.Index}: {emb.ToFloats().Length} dimensions");
}
```

#### Imported: Image Generation (DALL-E)

```csharp
using OpenAI.Images;

ImageClient imageClient = azureClient.GetImageClient("dall-e-3");

GeneratedImage image = await imageClient.GenerateImageAsync(
    "A futuristic city skyline at sunset",
    new ImageGenerationOptions
    {
        Size = GeneratedImageSize.W1024xH1024,
        Quality = GeneratedImageQuality.High,
        Style = GeneratedImageStyle.Vivid
    });

Console.WriteLine($"Image URL: {image.ImageUri}");
```

#### Imported: Audio (Whisper)

### Transcription

```csharp
using OpenAI.Audio;

AudioClient audioClient = azureClient.GetAudioClient("whisper");

AudioTranscription transcription = await audioClient.TranscribeAudioAsync(
    "audio.mp3",
    new AudioTranscriptionOptions
    {
        ResponseFormat = AudioTranscriptionFormat.Verbose,
        Language = "en"
    });

Console.WriteLine(transcription.Text);
```

### Text-to-Speech

```csharp
BinaryData speech = await audioClient.GenerateSpeechAsync(
    "Hello, welcome to Azure OpenAI!",
    GeneratedSpeechVoice.Alloy,
    new SpeechGenerationOptions
    {
        SpeedRatio = 1.0f,
        ResponseFormat = GeneratedSpeechFormat.Mp3
    });

await File.WriteAllBytesAsync("output.mp3", speech.ToArray());
```

#### Imported: Function Calling (Tools)

```csharp
ChatTool getCurrentWeatherTool = ChatTool.CreateFunctionTool(
    functionName: "get_current_weather",
    functionDescription: "Get the current weather in a given location",
    functionParameters: BinaryData.FromString("""
        {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "The city and state, e.g. San Francisco, CA"
                },
                "unit": {
                    "type": "string",
                    "enum": ["celsius", "fahrenheit"]
                }
            },
            "required": ["location"]
        }
        """));

ChatCompletionOptions options = new()
{
    Tools = { getCurrentWeatherTool }
};

ChatCompletion completion = await chatClient.CompleteChatAsync(
    [new UserChatMessage("What's the weather in Seattle?")],
    options);

if (completion.FinishReason == ChatFinishReason.ToolCalls)
{
    foreach (ChatToolCall toolCall in completion.ToolCalls)
    {
        Console.WriteLine($"Function: {toolCall.FunctionName}");
        Console.WriteLine($"Arguments: {toolCall.FunctionArguments}");
    }
}
```

#### Imported: Error Handling

```csharp
using Azure;

try
{
    ChatCompletion completion = await chatClient.CompleteChatAsync(messages);
}
catch (RequestFailedException ex) when (ex.Status == 429)
{
    Console.WriteLine("Rate limited. Retry after delay.");
    await Task.Delay(TimeSpan.FromSeconds(10));
}
catch (RequestFailedException ex) when (ex.Status == 400)
{
    Console.WriteLine($"Bad request: {ex.Message}");
}
catch (RequestFailedException ex)
{
    Console.WriteLine($"Azure OpenAI error: {ex.Status} - {ex.Message}");
}
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

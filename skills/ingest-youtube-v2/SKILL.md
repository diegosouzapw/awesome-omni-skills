---
name: ingest-youtube-v2
description: "ingest-youtube \u2014 YouTube-to-vault connector workflow skill. Use this skill when the user needs Pull a YouTube video transcript into a queryable markdown vault with yt-dlp subtitle discovery, VTT cleanup, metadata frontmatter, and capture-seed stubs and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["ingest-youtube-v2", "ingest-youtube", "pull", "youtube", "video", "transcript", "queryable", "markdown"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-05-17"
date_updated: "2026-05-17"
---

# ingest-youtube — YouTube-to-vault connector

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/ingest-youtube` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# ingest-youtube — YouTube-to-vault connector Pulls YouTube transcripts into a markdown vault as queryable typed-memory entries that downstream skills (knowledge graph extraction, voice-fingerprint training, content repurposing, action-item extraction) can act on. Same pattern as ingest-slack, ingest-whatsapp, ingest-notion, ingest-linear, ingest-github, ingest-gmail. Adding YouTube means a new normalizer, not a new architecture.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How it works, Output contract, Idempotency, Missing subtitles, Limitations, Acceptance test.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User pastes a YouTube URL and asks for a transcript or summary
- User says /ingest-youtube <url> for a single video
- User asks to capture, sync, ingest, transcribe, or pull a talk/podcast/keynote into the vault
- Downloading the actual video file (use yt-dlp directly with -f best)
- Channel-wide ingestion or --days windows; this script ingests one video URL at a time
- Live streams (transcripts are not stable)

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `ingest.py` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `ingest.py` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: How it works

1. Parse the input as one YouTube video URL.
2. Verify `yt-dlp` is installed. If not, the script exits with install instructions: `brew install yt-dlp` (macOS) or `pip3 install --user yt-dlp`.
3. Call `yt-dlp --list-subs <url>` to enumerate available subtitles.
4. Subtitle priority: manual subs > auto-generated captions. Manual subs preserve creator-provided punctuation and speaker labels; auto-gen is uppercase + no punctuation.
5. Download the highest-priority subtitle as VTT via `yt-dlp --write-sub --sub-lang <lang> --skip-download`. Default language preference: `en,es` (English first, Spanish second).
6. Strip VTT timing markers and merge into clean prose paragraphs. Deduplicate repeated lines (auto-generated VTTs are line-doubled). Preserve speaker labels if the source had them.
7. Pull video metadata (title, channel, upload date, duration, video_id, URL) via `yt-dlp --print-json --skip-download`.
8. Slugify the channel name and video title. Write to `External Inputs/YouTube/<channel-slug>/<YYYY-MM-DD>-<video-slug>.md`.
9. Scan transcript for trigger keywords (decision, framework, model, principle, "the lesson is", playbook, anti-pattern, case study). For each match, create a writing-seed stub at `Meta/Captures/<YYYY-MM-DD>-youtube-<channel-slug>-<video-id>.md` so the seed lands in the captures aggregator.
10. Print summary: file path, transcript word count, language, seeds detected.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @ingest-youtube-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @ingest-youtube-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @ingest-youtube-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @ingest-youtube-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Invocation

```bash
python3 ingest.py <youtube-url> [--vault <path>] [--lang <code>]
```

Defaults:
- `--vault`: `$VAULT_ROOT` env var or current directory
- `--lang`: `en,es` (English first, Spanish second; matches a common bilingual default)
- `--whisper`: accepted as a future fallback flag, but this version writes a stub when no subtitles are available

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/ingest-youtube`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@cred-omega-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@customs-trade-compliance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@docker-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ejentum-reasoning-harness-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [ingest.py](ingest.py)

### Imported Reference Notes

#### Imported: Output contract

The vault file at `External Inputs/YouTube/<channel-slug>/<YYYY-MM-DD>-<video-slug>.md` has frontmatter:

```yaml
---
type: external-input
source: youtube
video_id: <11-char ID>
url: https://www.youtube.com/watch?v=<id>
channel: <channel-name>
channel_url: https://www.youtube.com/<handle>
title: <video title>
upload_date: <YYYY-MM-DD>
duration_seconds: <int>
language: <ISO code>
subtitle_source: manual | auto | whisper
word_count: <int>
ingested_at: <ISO 8601 timestamp>
---
```

Body is the cleaned transcript as paragraph prose. If the source had speaker labels, format as `**<speaker>:** <text>` per turn.

#### Imported: Idempotency

Re-ingesting the same video URL overwrites the same vault file. The seed stub filenames hash the video_id, so the same source video produces the same stub filename across re-runs. Re-runs refresh, never duplicate.

#### Imported: Missing subtitles

If `yt-dlp --list-subs` returns no manual or auto subtitles, the script writes a stub vault note with the video metadata and source URL instead of failing silently. The `--whisper` flag is reserved for a future local transcription fallback and currently reports that the fallback is not implemented.

For a manual fallback today, download audio with `yt-dlp`, transcribe it with your local Whisper workflow, and add captions or transcript text before rerunning the ingest.

#### Imported: Limitations

- Ingests one YouTube video URL per run; channel handles, playlists, and `--days` windows are out of scope.
- Depends on subtitles returned by `yt-dlp`; videos without subtitles produce a metadata stub, not a transcript.
- Does not download video files or perform built-in Whisper transcription in this version.
- Network availability, YouTube subtitle access, and local `yt-dlp` behavior determine whether ingest succeeds.

#### Imported: Acceptance test

Run against the first YouTube video ever uploaded:

```bash
python3 ingest.py "https://www.youtube.com/watch?v=jNQXAC9IVRw" --vault /tmp/test
```

Expected output:
```
Wrote 39 words to /tmp/test/External Inputs/YouTube/jawed/2005-04-24-me-at-the-zoo.md. Language: en. Subtitle source: manual.
```

The output file contains valid frontmatter and a clean prose body.

#### Imported: Dependencies

- `yt-dlp` (required): install via `brew install yt-dlp` or `pip3 install --user yt-dlp`
- `whisper-cpp` (optional for a manual fallback outside this script)

#### Imported: Source

Bundled in [adelaidasofia/ai-brain-starter](https://github.com/adelaidasofia/ai-brain-starter), a verification harness around an AI agent so memory compounds instead of corrupts. The skill is part of the ingest-* family of vault connectors.

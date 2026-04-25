---
name: hig-technologies-v2
description: "Apple HIG: Technologies workflow skill. Use this skill when the user needs Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: design
tags: ["hig-technologies-v2", "hig-technologies", "check", "for", "claude", "apple-design-context", "asking", "questions"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-25"
---

# Apple HIG: Technologies

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hig-technologies` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Apple HIG: Technologies Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Questions to Ask, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Check for .claude/apple-design-context.md before asking questions. Use existing context and only ask for information not already covered.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/airplay.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/always-on.md` | Adds the next most relevant copied source file without loading the entire package |
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

#### Imported: Output Format

1. **Implementation checklist** -- step-by-step requirements per Apple's guidelines.
2. **Required vs optional features** for approval.
3. **Privacy and permission requirements** -- data access, usage descriptions.
4. **User-facing flow** from permission prompt through task completion.
5. **Testing guidance** -- key scenarios including edge cases.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hig-technologies-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @hig-technologies-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @hig-technologies-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @hig-technologies-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Apple technologies extend app capabilities through system integration. Each technology has established user-facing patterns; deviating creates confusion and erodes trust.
- Privacy and user control are paramount. Especially for health, payment, and identity technologies. Request only needed data, explain why, respect choices.
- Natural, predictable, recoverable. Clear conversational intent phrases that complete quickly and confirm results. Support App Shortcuts for proactive suggestions. Handle errors with clear fallbacks.
- Transparent and frictionless. Standard Apple Pay button styles. Never ask for card details when Apple Pay is available. Clearly describe what the user is buying, the price, and whether it's one-time or subscription.
- Health data is deeply personal. Explain the health benefit before requesting access. CareKit tasks should be encouraging. ResearchKit consent flows must be thorough, readable, and respect autonomy.
- Simple and reliable. Immediate response when controlling devices. Clear device state. Graceful handling of connectivity issues.
- Genuine value, not gimmicks. Use AR when spatial context improves understanding. Guide setup (surface, lighting, space). Provide clear exit back to standard interaction.

### Imported Operating Notes

#### Imported: Key Principles

### General

1. **Apple technologies extend app capabilities through system integration.** Each technology has established user-facing patterns; deviating creates confusion and erodes trust.

2. **Privacy and user control are paramount.** Especially for health, payment, and identity technologies. Request only needed data, explain why, respect choices.

### Siri and Voice

3. **Natural, predictable, recoverable.** Clear conversational intent phrases that complete quickly and confirm results. Support App Shortcuts for proactive suggestions. Handle errors with clear fallbacks.

### Payments and Commerce

4. **Transparent and frictionless.** Standard Apple Pay button styles. Never ask for card details when Apple Pay is available. Clearly describe what the user is buying, the price, and whether it's one-time or subscription.

### Health and Fitness

5. **Health data is deeply personal.** Explain the health benefit before requesting access. CareKit tasks should be encouraging. ResearchKit consent flows must be thorough, readable, and respect autonomy.

### Smart Home

6. **Simple and reliable.** Immediate response when controlling devices. Clear device state. Graceful handling of connectivity issues.

### Augmented Reality

7. **Genuine value, not gimmicks.** Use AR when spatial context improves understanding. Guide setup (surface, lighting, space). Provide clear exit back to standard interaction.

### Machine Learning and Generative AI

8. **Enhance without surprising.** Smart suggestions, image recognition, text prediction. Clearly attribute AI-generated content. Controls to edit, regenerate, or dismiss. Let users correct mistakes.

### Identity and Authentication

9. **Sign in with Apple as top option.** Standard button styles. Respect email hiding preference. ID Verifier: guided flows, don't store sensitive data beyond what verification requires.

### Cloud and Data

10. **Invisible and reliable sync.** Data appears on all devices without manual intervention. Handle conflicts gracefully. Never lose data.

### Shared Experiences

11. **Real-time participation.** SharePlay: support multiple participants, show presence, handle latency. AirPlay: appropriate Now Playing metadata.

### Automotive

12. **Driver safety first.** Minimize interaction complexity, large touch targets, no distracting content. Only permitted app types: audio, messaging, EV charging, navigation, parking, quick food ordering.

### Accessibility

13. **Baseline requirement.** Every element has a meaningful VoiceOver label, trait, and action. Support Dynamic Type, Switch Control, and other assistive technologies. Test entirely with VoiceOver enabled.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hig-technologies`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@high-end-visual-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hono-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hosted-agents-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hosted-agents-v2-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/airplay.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [airplay.md](references/airplay.md)
- [always-on.md](references/always-on.md)
- [apple-pay.md](references/apple-pay.md)
- [augmented-reality.md](references/augmented-reality.md)
- [airplay.md](references/airplay.md)
- [always-on.md](references/always-on.md)

### Imported Reference Notes

#### Imported: Reference Index

| Reference | Topic | Key content |
|---|---|---|
| [siri.md](references/siri.md) | Siri | Intents, shortcuts, voice interaction, App Shortcuts |
| [apple-pay.md](references/apple-pay.md) | Apple Pay | Payment buttons, checkout flow, security |
| [tap-to-pay-on-iphone.md](references/tap-to-pay-on-iphone.md) | Tap to Pay | Merchant flows, contactless payment |
| [in-app-purchase.md](references/in-app-purchase.md) | In-app purchase | Subscriptions, one-time purchases, transparency |
| [healthkit.md](references/healthkit.md) | HealthKit | Health data access, privacy, permissions |
| [carekit.md](references/carekit.md) | CareKit | Care plans, tasks, health management |
| [researchkit.md](references/researchkit.md) | ResearchKit | Studies, informed consent, data collection |
| [homekit.md](references/homekit.md) | HomeKit | Smart home control, device state, scenes |
| [augmented-reality.md](references/augmented-reality.md) | ARKit | Spatial context, surface detection, setup |
| [machine-learning.md](references/machine-learning.md) | Core ML | Predictions, smart features, confidence handling |
| [generative-ai.md](references/generative-ai.md) | Generative AI | Attribution, editing, responsible AI, uncertainty |
| [icloud.md](references/icloud.md) | iCloud | CloudKit, cross-device sync, conflict resolution |
| [sign-in-with-apple.md](references/sign-in-with-apple.md) | Sign in with Apple | Authentication, privacy, button styles |
| [id-verifier.md](references/id-verifier.md) | ID Verifier | Identity verification, document scanning |
| [shareplay.md](references/shareplay.md) | SharePlay | Shared experiences, participant presence |
| [airplay.md](references/airplay.md) | AirPlay | Media streaming, Now Playing, wireless display |
| [carplay.md](references/carplay.md) | CarPlay | Driver safety, permitted app types, large targets |
| [game-center.md](references/game-center.md) | Game Center | Achievements, leaderboards, multiplayer |
| [voiceover.md](references/voiceover.md) | VoiceOver | Screen reader, labels, traits, accessibility |
| [wallet.md](references/wallet.md) | Wallet | Passes, tickets, loyalty cards |
| [nfc.md](references/nfc.md) | NFC | Tag reading, quick interactions, App Clips |
| [maps.md](references/maps.md) | Maps | Location display, annotations, directions |
| [mac-catalyst.md](references/mac-catalyst.md) | Mac Catalyst | iPad to Mac, menu bar, keyboard, pointer |
| [live-photos.md](references/live-photos.md) | Live Photos | Motion capture, playback, editing |
| [imessage-apps-and-stickers.md](references/imessage-apps-and-stickers.md) | iMessage apps | Messages extension, stickers, compact UI |
| [shazamkit.md](references/shazamkit.md) | ShazamKit | Audio recognition, music identification |
| [always-on.md](references/always-on.md) | Always-on display | Dimmed state, power efficiency, reduced updates |
| [photo-editing.md](references/photo-editing.md) | Photo editing | System photo editor, filters, adjustments |

#### Imported: Questions to Ask

1. Which Apple technology?
2. Core use case?
3. Which platforms?
4. API requirements and entitlements reviewed?
5. What data or permissions needed?

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

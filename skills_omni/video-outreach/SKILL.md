---
name: "video-outreach"
description: "Video-first cold outreach workflow skill. Use this skill when a user needs to design personalized video prospecting, choose between human-recorded and AI-generated video motions, structure async selling flows, or use video and interactive demos in outbound and deal acceleration. Do not use it for implementation, code review, or software architecture."
version: "0.0.1"
category: "development"
tags:
  - "video-outreach"
  - "video-first"
  - "cold-outreach"
  - "personalized-video"
  - "async-selling"
  - "video-prospecting"
  - "interactive-demos"
  - "tavus"
  - "sendspark"
  - "heygen"
  - "loom"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-12"
date_updated: "2026-04-12"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "video-outreach"
family_name: "Video-First Cold Outreach"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: "True"
derived_from: "skills/video-outreach"
upstream_skill: "skills/video-outreach"
upstream_author: "tech-leads-club"
upstream_source: "community"
upstream_pr: "27"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "e1d0a7d712573183b54e99148eff6f7467d54f14"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "video-outreach"
---

# Video-First Cold Outreach

## Overview

This skill helps an operator design and run a **video-first outbound workflow** for prospecting, async selling, post-demo recaps, and champion enablement.

It preserves the upstream intent from the original community skill while tightening the workflow around:

- clear use-case routing
- safer human-vs-AI video decisions
- deliverability and link-sharing hygiene
- CRM attribution and KPI tracking
- privacy and authenticity boundaries
- operational troubleshooting when performance is weak

Use this skill to decide **whether video is appropriate**, **which asset to create**, **how much personalization to apply**, **how to send it**, and **what to do based on engagement signals**.

Do **not** use this skill for software implementation, API design, code review, or architecture work.

## When to Use This Skill

Use this skill when the user wants to:

- build a video-first cold outreach motion
- add personalized video to outbound email or LinkedIn sequences
- decide between 1:1 human-recorded video and scaled AI-generated video
- use async video instead of low-value intro meetings
- create post-demo recap videos, proposal walkthroughs, or champion-forwardable assets
- use interactive demos alongside video for product-led or demo-led selling
- troubleshoot low play rate, weak watch time, poor reply rate, or unclear video ROI

Common triggers include:

- “video outreach”
- “personalized video”
- “video prospecting”
- “video email”
- “async selling”
- “made this for you”
- “Tavus”
- “Sendspark”
- “HeyGen”
- “Loom”
- “Supademo”
- “Navattic”

### Do Not Use This Skill When

Do not use this skill when:

- the user needs implementation help for CRM integrations, APIs, or automation code
- the main task is copywriting a full outbound sequence without a video-system decision layer
- the team cannot send from an authenticated domain or cannot support unsubscribe/suppression handling
- there is no real personalization signal and the plan would rely on fake relevance
- the workflow would use synthetic face or voice in a way that could mislead recipients or violate company policy
- the outreach involves regulated, legal, or high-risk communications that require formal review

## Operating Decision Matrix

Use this table to choose the motion before drafting scripts or picking tools.

| Scenario | Best asset | Typical length | Personalization level | Best fit | Trust risk | Primary metric | Fallback if blocked |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Founder-led outbound to a small list of high-value accounts | Human-recorded webcam + screen-share walkthrough of a useful deliverable | 45-90 sec | Very high | High ACV, relationship-sensitive outreach | Low | Reply rate, meetings booked | Plain-text email with screenshot + short summary |
| SDR outreach to moderate volume list | Human-recorded template with light personalization or AI-assisted first line | 30-60 sec | Medium | 50-500 prospects/month | Medium | Play rate, reply rate | Thumbnail + text CTA, or text-only follow-up |
| High-volume outbound with repeated pattern | AI-generated personalized intro layered onto a reusable body | 20-45 sec intro + linked asset | Medium-low per contact, high by segment | 500+/month and strong process discipline | High | Delivered-to-play rate, meetings created | Segment-specific text sequence |
| Multilingual campaign | AI avatar or translated voice/video with human review | 30-60 sec | Medium | International campaigns with repeated value prop | High | Play rate by region, reply rate by language | Localized text email + interactive demo |
| Pre-demo async replacement | Interactive demo plus short narrated intro | 2-4 min total | Medium | Product explanation before live call | Medium | Demo completion, meeting conversion | Screen recording with chapter summary |
| Post-demo recap | Human-recorded screen-share recap | 3-5 min | High | Deals already in motion | Low | Replays, internal shares, next-step progression | Written recap with screenshots |
| Proposal walkthrough | Human-recorded proposal review | 3-5 min | High | Late-stage deal motion | Low | Stakeholder forwarding, deal advancement | PDF + executive summary email |
| Champion enablement | Short executive summary video + demo + one-pager | 2 min video + linked materials | High | Internal forwarding and consensus building | Low | Shares, forwarded views, stakeholder replies | Forwardable email packet |
| Breakup / close-the-loop touch | Short webcam-only clip | 20-30 sec | Light | End-of-sequence follow-up | Low | Final replies | Plain-text breakup email |

For a fuller version, use [references/video-outreach-decision-matrix.md](references/video-outreach-decision-matrix.md).

## Workflow

### 1. Qualify the motion before creating any asset

Ask:

1. What is the current outreach volume per week or month?
2. Who is the target persona and what is the typical deal size?
3. Is the goal to book meetings, accelerate active deals, or replace intro demos?
4. What tools are already in the stack: CRM, sequencer, video platform, demo platform?
5. Is the team already recording video, or starting from zero?
6. Are multilingual delivery or regional compliance requirements in scope?
7. Is synthetic video or voice allowed by brand and policy?
8. Is there a meaningful deliverable to show, or only a generic pitch?

Use the structured worksheet in [references/discovery-intake-questionnaire.md](references/discovery-intake-questionnaire.md).

### 2. Decide between human-recorded, AI-assisted, and AI-generated video

Use this rule of thumb:

- **Prefer human-recorded video** when trust, authenticity, or deal value is high.
- **Use AI-assisted personalization** when you want to scale a human-looking motion without fully synthetic delivery.
- **Use fully AI-generated video** only when volume, multilingual need, or operational constraints justify the tradeoff and the result will not mislead the recipient.

Decision factors:

- volume required
- average contract value
- buyer seniority
- trust sensitivity
- language coverage
- available approvals for synthetic media

Before using synthetic media, review [references/video-outreach-privacy-and-authenticity-checklist.md](references/video-outreach-privacy-and-authenticity-checklist.md).

### 3. Build the outreach asset around a visible deliverable

The strongest motion is usually not “here is our product.” It is “I made something useful for you.”

Possible deliverables:

- landing page or homepage teardown
- outbound sequence rewrite
- competitive positioning snapshot
- product walkthrough for their likely use case
- proposal summary or recap artifact
- ROI framing or champion packet

Keep the deliverable genuinely useful even if the prospect never replies.

Use [references/video-script-builder.md](references/video-script-builder.md) to structure the narrative.

### 4. Record the video with a strong first 10 seconds

For cold outreach, the opening matters more than the polish.

Recommended structure:

- **0:00-0:05**: name the prospect, company, or visible trigger
- **0:05-0:15**: explain why this is relevant now
- **0:15-0:45**: show the deliverable or product view
- **0:45-0:55**: add one proof point or relevant example
- **0:55-1:00**: give one clear CTA

Recording guidance:

- keep cold videos under 90 seconds unless the deal stage justifies more
- prioritize clear audio over visual perfection
- show something concrete on screen when possible
- use exactly one next step
- avoid generic openings like “hope you’re well”

### 5. Deliver via link-based sharing, not embedded video

Email clients handle video inconsistently. Use a tested thumbnail, GIF, or screenshot linked to a hosted video or demo page.

Preflight before sending:

- SPF, DKIM, and DMARC are configured for the sending domain
- sending domain or mailbox is warmed and in good standing
- thumbnail or GIF renders correctly in the email client mix you use
- there is only one primary link in the message
- there is a plain-text fallback like “Can’t view the image? Watch here”
- the landing page or video page loads quickly
- unsubscribe or suppression handling is defined for the channel in use

Use [references/video-outreach-troubleshooting-runbook.md](references/video-outreach-troubleshooting-runbook.md) if opens or plays are weak.

### 6. Instrument CRM and sequence tracking

Track the workflow as a funnel, not as vanity metrics.

Suggested funnel:

`videos sent -> delivered -> opens -> plays -> 50% watch -> replies -> meetings -> opportunities -> closed-won`

Track at minimum:

- sends
- deliveries
- opens
- plays
- average watch %
- replies
- meetings booked
- opportunities created
- pipeline value influenced

Use [references/video-outreach-kpi-scorecard.md](references/video-outreach-kpi-scorecard.md) for formulas and weekly review structure.

### 7. Follow up based on signal quality

Do not treat all engagement as equal.

| Signal | Interpretation | Next action |
| --- | --- | --- |
| No open | Likely deliverability, subject-line, or timing issue | Check domain health, subject line, send timing, then try alternate channel |
| Open but no play | Thumbnail or CTA did not earn the click | Improve thumbnail clarity, tighten value proposition, reduce friction |
| Partial watch, early drop-off | Hook was weak or intro too long | Rewrite opening and shorten video |
| 50%+ watch | Moderate interest | Send focused follow-up tied to what they saw |
| 75%+ watch or replay | Strong interest or internal review | Prioritize same-day follow-up with a specific next step |
| Internal share / multiple viewers | Champion activity | Send forwardable summary, FAQ, or live walkthrough offer |
| Reply but no meeting | CTA or conversion path is weak | Offer one narrow next step and remove extra asks |

### 8. Review and iterate weekly

Run a weekly review by segment, persona, and motion type.

Inspect:

- which subject lines produce opens without harming deliverability
- which thumbnails create plays
- where watch time drops
- whether personalized deliverables outperform generic product intros
- whether AI-generated variants underperform human-recorded ones in trust-sensitive segments
- whether async assets are accelerating deals or just adding noise

## Async vs Live Selling Guidance

Use async video when the buyer mainly needs context, recap, or something forwardable.

| Deal stage or need | Recommended mode | Why |
| --- | --- | --- |
| Initial personalized outreach | Async | Low-friction first touch |
| Product overview before a call | Async | Saves live time for real questions |
| Discovery with unknown requirements | Live | Requires probing and adaptation |
| Post-demo recap | Async | Easy to forward internally |
| Proposal walkthrough | Async or live follow-up | Good for stakeholder alignment |
| Negotiation | Live | Needs real-time tradeoff handling |
| Technical deep dive | Live | Better for nuance and objections |
| Champion enablement | Async packet | Helps internal selling |
| Contract or legal review | Live + written summary | Too sensitive for video-only handling |

Handoff triggers from async to live:

- multiple replays or shares
- security, pricing, or procurement questions
- request for tailored walkthrough
- complex objections requiring back-and-forth
- multiple stakeholders entering the thread

## Suggested Sequence Pattern

A safe baseline sequence for moderate-volume outbound:

- **Day 1:** personalized video email with one CTA
- **Day 3:** text-only follow-up referencing the asset
- **Day 5:** LinkedIn follow-up or short voice note
- **Day 8:** interactive demo or short use-case walkthrough
- **Day 12:** value-add follow-up with insight, proof, or teardown takeaway
- **Day 15:** close-the-loop message

Adapt by:

- reducing video frequency if deliverability suffers
- using more human-recorded touches for enterprise and founder-led motions
- using more reusable assets when volume is high and personalization depth is lower

See [references/sequence-design-worksheet.md](references/sequence-design-worksheet.md).

## Examples

### Example 1: Founder-led “made this for you” outbound

```text
Use @video-outreach to design a founder-led outbound motion for 20 enterprise prospects per month. Assume high trust sensitivity, strong personalization, and one useful deliverable per account. Recommend the recording style, sequence placement, CTA, KPI plan, and follow-up rules.
```

See [examples/founder-led-made-this-for-you-packet.md](examples/founder-led-made-this-for-you-packet.md).

### Example 2: SDR scaled sequence

```text
Use @video-outreach to build a moderate-volume SDR video sequence for 200 prospects per month. Recommend whether to use human-recorded or AI-assisted video, define the first-touch asset, map a 15-day sequence, and specify what to do for no-open, open-no-play, and high-watch cases.
```

See [examples/sdr-scaled-video-sequence.md](examples/sdr-scaled-video-sequence.md).

### Example 3: Multilingual AI video campaign

```text
Use @video-outreach to evaluate a multilingual outbound campaign across English, Spanish, and French. Decide whether AI-generated avatar or translated voice is appropriate, list the authenticity and privacy checks required, and propose fallback assets for trust-sensitive accounts.
```

See [examples/multilingual-ai-video-campaign.md](examples/multilingual-ai-video-campaign.md).

### Example 4: Post-demo recap and champion enablement

```text
Use @video-outreach to turn a completed product demo into an async follow-up packet. Include a short recap video, an interactive demo, a one-page summary, and rules for when to move back to a live call.
```

See [examples/post-demo-recap-and-champion-enablement.md](examples/post-demo-recap-and-champion-enablement.md).

## Best Practices

### Do

- lead with a relevant deliverable, not a generic sales pitch
- choose the video format based on trust sensitivity, not just tool availability
- keep the first 5-10 seconds highly specific
- use one primary CTA per asset
- send video as a linked thumbnail, GIF, or screenshot rather than an embedded attachment
- test rendering, landing page behavior, and CRM logging before scaling sends
- track outcomes through to meetings and pipeline, not just opens and plays
- treat watch data as directional, since privacy protections can limit tracking accuracy
- minimize prospect data collection and store only what the workflow needs
- review synthetic voice or avatar usage against company policy before launch

### Don't

- imply a video was individually recorded if it was materially AI-generated and that would mislead the recipient
- overstate benchmark claims from vendor marketing as guaranteed outcomes
- use synthetic likeness or voice without approval from the people represented
- rely on heavy image/link clutter that hurts deliverability
- send long cold videos when a 45-60 second asset would do
- make the recipient work to figure out the next step
- optimize for play rate alone while ignoring meetings, opportunities, and trust signals
- use video when there is no meaningful context or relevance to show

## Troubleshooting

### Problem: Good list quality, but open rate is low

**Symptoms:** Low opens across multiple sequences, even when targeting appears sound.

**Solution:** Check sender authentication, domain reputation, send pacing, subject lines, and whether image-heavy creative or tracked links are pushing emails toward spam. Reduce creative complexity, verify SPF/DKIM/DMARC, and test with a simpler text-first variant.

### Problem: Opens are acceptable, but very few recipients press play

**Symptoms:** Open rate is normal, but play rate is weak.

**Solution:** Improve thumbnail clarity, put the value proposition closer to the image, reduce friction on the landing page, and make sure the message asks for only one action. Test screenshot-style thumbnails versus animated GIFs.

### Problem: Viewers drop off in the first 10 seconds

**Symptoms:** Plays happen, but watch time falls sharply at the start.

**Solution:** Rewrite the opening so it starts with a specific trigger, prospect name, company context, or visible deliverable. Remove filler and shorten self-introduction.

### Problem: Watch time is solid, but replies are weak

**Symptoms:** Recipients watch a meaningful portion of the video but do not convert.

**Solution:** Tighten the CTA, ask for one narrow next step, and follow up quickly with a short text email tied to what they saw. Consider whether the asset is interesting but not urgent.

### Problem: The videos feel personalized, but not credible

**Symptoms:** Prospects reply skeptically, or engagement drops on synthetic variants.

**Solution:** Move up the authenticity ladder: use human-recorded video for high-trust segments, disclose internally how synthetic media is being used, and avoid over-personalization that feels fabricated.

### Problem: Analytics are inconsistent or incomplete

**Symptoms:** Plays, watch data, or opens do not match observed buyer behavior.

**Solution:** Treat tracking as directional. Verify CRM logging, sequence sync, privacy-blocking effects, and whether the platform distinguishes opens from meaningful engagement. Use replies, meetings, and opportunity movement as stronger downstream indicators.

### Problem: Video is adding activity but not pipeline

**Symptoms:** More sends and views, but no material lift in meetings or opportunity creation.

**Solution:** Reassess ICP fit, the usefulness of the deliverable, sequence timing, CTA quality, and whether the team is using video where text would work better. Compare human-recorded versus AI-generated performance by segment rather than assuming one motion fits all.

Use the full runbook at [references/video-outreach-troubleshooting-runbook.md](references/video-outreach-troubleshooting-runbook.md).

## Related Skills

- `@ai-cold-outreach` — Route here when the main need is multichannel sequence copy, messaging tests, and outbound copy systems rather than video-motion design.
- `@ai-sdr` — Route here when the user needs broader SDR operating design, pipeline management, or outbound process orchestration.
- `@ai-pricing` — Route here when proposal walkthroughs, ROI framing, or commercial packaging become the main task.
- `@accessibility` — Route here when captions, transcripts, readability, or inclusive viewer experience become primary requirements.

## Additional Resources

### Local references

- [Decision matrix](references/video-outreach-decision-matrix.md)
- [KPI scorecard](references/video-outreach-kpi-scorecard.md)
- [Privacy and authenticity checklist](references/video-outreach-privacy-and-authenticity-checklist.md)
- [Troubleshooting runbook](references/video-outreach-troubleshooting-runbook.md)
- [Discovery intake questionnaire](references/discovery-intake-questionnaire.md)
- [Video script builder](references/video-script-builder.md)
- [Sequence design worksheet](references/sequence-design-worksheet.md)

### Worked examples

- [Founder-led made-this-for-you packet](examples/founder-led-made-this-for-you-packet.md)
- [SDR scaled video sequence](examples/sdr-scaled-video-sequence.md)
- [Multilingual AI video campaign](examples/multilingual-ai-video-campaign.md)
- [Post-demo recap and champion enablement](examples/post-demo-recap-and-champion-enablement.md)

### Upstream provenance and original import support

The original intake emphasized provenance-preserving import packaging. Keep that intent available for audit and review when needed, especially if this skill is being compared against the original community source.

Retain or consult the existing import support pack if present in the skill root, including prior provenance, origin, or intake-review helpers.

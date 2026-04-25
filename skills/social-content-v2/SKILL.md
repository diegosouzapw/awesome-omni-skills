---
name: social-content-v2
description: "Social Content workflow skill. Use this skill when the user needs You are an expert social media strategist with direct access to a scheduling platform that publishes to all major social networks. Your goal is to help create engaging content that builds audience, drives engagement, and supports business goals and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["social-content-v2", "social-content", "you", "are", "expert", "social", "media", "strategist"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Social Content

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/social-content` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Social Content You are an expert social media strategist with direct access to a scheduling platform that publishes to all major social networks. Your goal is to help create engaging content that builds audience, drives engagement, and supports business goals.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Creating Content, Platform Strategy Guide, Content Pillars Framework, Post Formats & Templates, Hook Formulas, Content Repurposing System.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: You are an expert social media strategist with direct access to a scheduling platform that publishes to all major social networks. Your goal is to help create engaging content that builds audience, drives engagement,....
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Before Creating Content

Gather this context (ask if not provided):

### 1. Goals
- What's the primary objective? (Brand awareness, leads, traffic, community)
- What action do you want people to take?
- Are you building personal brand, company brand, or both?

### 2. Audience
- Who are you trying to reach?
- What platforms are they most active on?
- What content do they engage with?
- What problems do they have that you can address?

### 3. Brand Voice
- What's your tone? (Professional, casual, witty, authoritative)
- Any topics to avoid?
- Any specific terminology or style guidelines?

### 4. Resources
- How much time can you dedicate to social?
- Do you have existing content to repurpose (blog posts, podcasts, videos)?
- Can you create video content?
- Do you have customer stories or data to share?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @social-content-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @social-content-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @social-content-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @social-content-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/social-content`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@skill-rails-upgrade-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-router-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-seekers-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@skill-sentinel-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Platform Strategy Guide

### LinkedIn

**Best for:** B2B, thought leadership, professional networking, recruiting
**Audience:** Professionals, decision-makers, job seekers
**Posting frequency:** 3-5x per week
**Best times:** Tuesday-Thursday, 7-8am, 12pm, 5-6pm

**What works:**
- Personal stories with business lessons
- Contrarian takes on industry topics
- Behind-the-scenes of building a company
- Data and original insights
- Carousel posts (document format)
- Polls that spark discussion

**What doesn't:**
- Overly promotional content
- Generic motivational quotes
- Links in the main post (kills reach)
- Corporate speak without personality

**Format tips:**
- First line is everything (hook before "see more")
- Use line breaks for readability
- 1,200-1,500 characters performs well
- Put links in comments, not post body
- Tag people sparingly and genuinely

### Twitter/X

**Best for:** Tech, media, real-time commentary, community building
**Audience:** Tech-savvy, news-oriented, niche communities
**Posting frequency:** 3-10x per day (including replies)
**Best times:** Varies by audience; test and measure

**What works:**
- Hot takes and opinions
- Threads that teach something
- Behind-the-scenes moments
- Engaging with others' content
- Memes and humor (if on-brand)
- Real-time commentary on events

**What doesn't:**
- Pure self-promotion
- Threads without a strong hook
- Ignoring replies and mentions
- Scheduling everything (no real-time presence)

**Format tips:**
- Tweets under 100 characters get more engagement
- Threads: Hook in tweet 1, promise value, deliver
- Quote tweets with added insight beat plain retweets
- Use visuals to stop the scroll

### Instagram

**Best for:** Visual brands, lifestyle, e-commerce, younger demographics
**Audience:** 18-44, visual-first consumers
**Posting frequency:** 1-2 feed posts per day, 3-10 Stories per day
**Best times:** 11am-1pm, 7-9pm

**What works:**
- High-quality visuals
- Behind-the-scenes Stories
- Reels (short-form video)
- Carousels with value
- User-generated content
- Interactive Stories (polls, questions)

**What doesn't:**
- Low-quality images
- Too much text in images
- Ignoring Stories and Reels
- Only promotional content

**Format tips:**
- Reels get 2x reach of static posts
- First frame of Reels must hook
- Carousels: 10 slides with educational content
- Use all Story features (polls, links, etc.)

### TikTok

**Best for:** Brand awareness, younger audiences, viral potential
**Audience:** 16-34, entertainment-focused
**Posting frequency:** 1-4x per day
**Best times:** 7-9am, 12-3pm, 7-11pm

**What works:**
- Native, unpolished content
- Trending sounds and formats
- Educational content in entertaining wrapper
- POV and day-in-the-life content
- Responding to comments with videos
- Duets and stitches

**What doesn't:**
- Overly produced content
- Ignoring trends
- Hard selling
- Repurposed horizontal video

**Format tips:**
- Hook in first 1-2 seconds
- Keep it under 30 seconds to start
- Vertical only (9:16)
- Use trending sounds
- Post consistently to train algorithm

### Facebook

**Best for:** Communities, local businesses, older demographics, groups
**Audience:** 25-55+, community-oriented
**Posting frequency:** 1-2x per day
**Best times:** 1-4pm weekdays

**What works:**
- Facebook Groups (community)
- Native video
- Live video
- Local content and events
- Discussion-prompting questions

**What doesn't:**
- Links to external sites (reach killer)
- Pure promotional content
- Ignoring comments
- Cross-posting from other platforms without adaptation

---

#### Imported: Content Pillars Framework

Build your content around 3-5 pillars that align with your expertise and audience interests.

### Example for a SaaS Founder

| Pillar | % of Content | Topics |
|--------|--------------|--------|
| Industry insights | 30% | Trends, data, predictions |
| Behind-the-scenes | 25% | Building the company, lessons learned |
| Educational | 25% | How-tos, frameworks, tips |
| Personal | 15% | Stories, values, hot takes |
| Promotional | 5% | Product updates, offers |

### Pillar Development Questions

For each pillar, ask:
1. What unique perspective do you have?
2. What questions does your audience ask?
3. What content has performed well before?
4. What can you create consistently?
5. What aligns with business goals?

---

#### Imported: Post Formats & Templates

### LinkedIn Post Templates

**The Story Post:**
```
[Hook: Unexpected outcome or lesson]

[Set the scene: When/where this happened]

[The challenge you faced]

[What you tried / what happened]

[The turning point]

[The result]

[The lesson for readers]

[Question to prompt engagement]
```

**The Contrarian Take:**
```
[Unpopular opinion stated boldly]

Here's why:

[Reason 1]
[Reason 2]
[Reason 3]

[What you recommend instead]

[Invite discussion: "Am I wrong?"]
```

**The List Post:**
```
[X things I learned about [topic] after [credibility builder]:

1. [Point] — [Brief explanation]

2. [Point] — [Brief explanation]

3. [Point] — [Brief explanation]

[Wrap-up insight]

Which resonates most with you?
```

**The How-To:**
```
How to [achieve outcome] in [timeframe]:

Step 1: [Action]
↳ [Why this matters]

Step 2: [Action]
↳ [Key detail]

Step 3: [Action]
↳ [Common mistake to avoid]

[Result you can expect]

[CTA or question]
```

### Twitter/X Thread Templates

**The Tutorial Thread:**
```
Tweet 1: [Hook + promise of value]

"Here's exactly how to [outcome] (step-by-step):"

Tweet 2-7: [One step per tweet with details]

Final tweet: [Summary + CTA]

"If this was helpful, follow me for more on [topic]"
```

**The Story Thread:**
```
Tweet 1: [Intriguing hook]

"[Time] ago, [unexpected thing happened]. Here's the full story:"

Tweet 2-6: [Story beats, building tension]

Tweet 7: [Resolution and lesson]

Final tweet: [Takeaway + engagement ask]
```

**The Breakdown Thread:**
```
Tweet 1: [Company/person] just [did thing].

Here's why it's genius (and what you can learn):

Tweet 2-6: [Analysis points]

Tweet 7: [Your key takeaway]

"[Related insight + follow CTA]"
```

### Instagram Caption Templates

**The Carousel Hook:**
```
[Slide 1: Bold statement or question]
[Slides 2-9: One point per slide, visual + text]
[Slide 10: Summary + CTA]

Caption: [Expand on the topic, add context, include CTA]
```

**The Reel Script:**
```
Hook (0-2 sec): [Pattern interrupt or bold claim]
Setup (2-5 sec): [Context for the tip]
Value (5-25 sec): [The actual advice/content]
CTA (25-30 sec): [Follow, comment, share, link]
```

---

#### Imported: Hook Formulas

The first line determines whether anyone reads the rest. Use these patterns:

### Curiosity Hooks
- "I was wrong about [common belief]."
- "The real reason [outcome] happens isn't what you think."
- "[Impressive result] — and it only took [surprisingly short time]."
- "Nobody talks about [insider knowledge]."

### Story Hooks
- "Last week, [unexpected thing] happened."
- "I almost [big mistake/failure]."
- "3 years ago, I [past state]. Today, [current state]."
- "[Person] told me something I'll never forget."

### Value Hooks
- "How to [desirable outcome] (without [common pain]):"
- "[Number] [things] that [outcome]:"
- "The simplest way to [outcome]:"
- "Stop [common mistake]. Do this instead:"

### Contrarian Hooks
- "Unpopular opinion: [bold statement]"
- "[Common advice] is wrong. Here's why:"
- "I stopped [common practice] and [positive result]."
- "Everyone says [X]. The truth is [Y]."

### Social Proof Hooks
- "We [achieved result] in [timeframe]. Here's how:"
- "[Number] people asked me about [topic]. Here's my answer:"
- "[Authority figure] taught me [lesson]."

---

#### Imported: Content Repurposing System

Turn one piece of content into many:

### Blog Post → Social Content

| Original | Platform | Format |
|----------|----------|--------|
| Blog post | LinkedIn | Key insight + link in comments |
| Blog post | LinkedIn | Carousel of main points |
| Blog post | Twitter/X | Thread of key takeaways |
| Blog post | Twitter/X | Single tweet with hot take |
| Blog post | Instagram | Carousel with visuals |
| Blog post | Instagram | Reel summarizing the post |

### Podcast/Video → Social Content

| Original | Platform | Format |
|----------|----------|--------|
| Interview | LinkedIn | Quote graphic + insight |
| Interview | Twitter/X | Thread of best quotes |
| Interview | Instagram | Clip as Reel |
| Interview | TikTok | Short clip with caption |
| Interview | YouTube | Shorts from best moments |

### Repurposing Workflow

1. **Create pillar content** (blog, video, podcast)
2. **Extract key insights** (3-5 per piece)
3. **Adapt to each platform** (format and tone)
4. **Schedule across the week** (spread distribution)
5. **Update and reshare** (evergreen content can repeat)

---

#### Imported: Content Calendar Structure

### Weekly Planning Template

| Day | LinkedIn | Twitter/X | Instagram |
|-----|----------|-----------|-----------|
| Mon | Industry insight | Thread | Carousel |
| Tue | Behind-scenes | Engagement | Story |
| Wed | Educational | Tips tweet | Reel |
| Thu | Story post | Thread | Educational |
| Fri | Hot take | Engagement | Story |
| Sat | — | Curated RT | User content |
| Sun | — | Personal | Behind-scenes |

### Monthly Content Mix

- Week 1: Launch/announce something (if applicable)
- Week 2: Educational deep-dive
- Week 3: Community/engagement focus
- Week 4: Story/behind-the-scenes

### Batching Strategy

**Weekly batching (2-3 hours):**
1. Review content pillar topics
2. Write 5 LinkedIn posts
3. Write 3 Twitter threads + daily tweets
4. Create Instagram carousel + Reel ideas
5. Schedule everything
6. Leave room for real-time engagement

---

#### Imported: Engagement Strategy

### Proactive Engagement

Engagement isn't just responding—it's actively participating:

**Daily engagement routine (30 min):**
1. Respond to all comments on your posts (5 min)
2. Comment on 5-10 posts from target accounts (15 min)
3. Share/repost with added insight (5 min)
4. Send 2-3 DMs to new connections (5 min)

**Quality comments:**
- Add new insight, not just "Great post!"
- Share a related experience
- Ask a thoughtful follow-up question
- Respectfully disagree with nuance

### Building Relationships

- Identify 20-50 accounts in your space
- Consistently engage with their content
- Share their content with credit
- Eventually collaborate (podcasts, co-created content)

### Handling Negative Comments

- Respond calmly and professionally
- Don't get defensive
- Take legitimate criticism offline
- Block/mute trolls without engaging
- Let community defend you when appropriate

---

#### Imported: Analytics & Optimization

### Metrics That Matter

**Awareness:**
- Impressions
- Reach
- Follower growth rate

**Engagement:**
- Engagement rate (engagements / impressions)
- Comments (higher value than likes)
- Shares/reposts
- Saves (Instagram)

**Conversion:**
- Link clicks
- Profile visits
- DMs received
- Leads/conversions attributed

### What to Track Weekly

- [ ] Top 3 performing posts (why did they work?)
- [ ] Bottom 3 posts (what can you learn?)
- [ ] Follower growth trend
- [ ] Engagement rate trend
- [ ] Best posting times (from data)
- [ ] Content pillar performance

### Optimization Actions

**If engagement is low:**
- Test new hooks
- Post at different times
- Try different formats (carousel vs. text)
- Increase native engagement with others
- Check if content matches audience interest

**If reach is declining:**
- Avoid external links in post body
- Increase posting frequency slightly
- Engage more in comments
- Test video/visual content
- Check for algorithm changes

---

#### Imported: Platform-Specific Tips

### LinkedIn Algorithm Tips

- First hour engagement matters most
- Comments > reactions > clicks
- Dwell time (people reading) signals quality
- No external links in post body
- Document posts (carousels) get strong reach
- Polls drive engagement but don't build authority

### Twitter/X Algorithm Tips

- Replies and quote tweets build authority
- Threads keep people on platform (rewarded)
- Images and video get more reach
- Engagement in first 30 min matters
- Twitter Blue/Premium may boost reach

### Instagram Algorithm Tips

- Reels heavily prioritized over static posts
- Saves and shares > likes
- Stories keep you top of feed
- Consistency matters more than perfection
- Use all features (polls, questions, etc.)

---

#### Imported: Content Ideas by Situation

### When You're Starting Out

- Document your journey
- Share what you're learning
- Curate and comment on industry content
- Ask questions to your audience
- Engage heavily with established accounts

### When You're Established

- Share original data and insights
- Tell customer success stories
- Take stronger positions
- Create signature frameworks
- Collaborate with peers

### When You're Stuck

- Repurpose old high-performing content
- Ask your audience what they want
- Comment on industry news
- Share a failure or lesson learned
- Interview someone and share insights

---

#### Imported: Scheduling Best Practices

### When to Schedule vs. Post Live

**Schedule:**
- Core content posts
- Threads
- Carousels
- Evergreen content

**Post live:**
- Real-time commentary
- Responses to news/trends
- Engagement with others
- Anything requiring immediate interaction

### Queue Management

- Maintain 1-2 weeks of scheduled content
- Review queue weekly for relevance
- Leave gaps for spontaneous posts
- Adjust timing based on performance data

---

#### Imported: Reverse Engineering Viral Content

Instead of guessing what works, systematically analyze top-performing content in your niche and extract proven patterns.

### The 6-Step Framework

#### 1. NICHE ID — Find Top Creators

Identify 10-20 creators in your space who consistently get high engagement:

**Selection criteria:**
- Posting consistently (3+ times/week)
- High engagement rate relative to follower count
- Audience overlap with your target market
- Mix of established and rising creators

**Where to find them:**
- LinkedIn: Search by industry keywords, check "People also viewed"
- Twitter/X: Check who your target audience follows and engages with
- Use tools like SparkToro, Followerwonk, or manual research
- Look at who gets featured in industry newsletters

#### 2. SCRAPE — Collect Posts at Scale

Gather 500-1000+ posts from your identified creators for analysis:

**Tools:**
- **Apify** — LinkedIn scraper, Twitter scraper actors
- **Phantom Buster** — Multi-platform automation
- **Export tools** — Platform-specific export features
- **Manual collection** — For smaller datasets, copy/paste into spreadsheet

**Data to collect:**
- Post text/content
- Engagement metrics (likes, comments, shares, saves)
- Post format (text-only, carousel, video, image)
- Posting time/day
- Hook/first line
- CTA used
- Topic/theme

#### 3. ANALYZE — Extract What Actually Works

Sort and analyze the data to find patterns:

**Quantitative analysis:**
- Rank posts by engagement rate
- Identify top 10% performers
- Look for format patterns (do carousels outperform?)
- Check timing patterns (best days/times)
- Compare topic performance

**Qualitative analysis:**
- What hooks do top posts use?
- How long are high-performing posts?
- What emotional triggers appear?
- What formats repeat?
- What topics consistently perform?

**Questions to answer:**
- What's the average length of top posts?
- Which hook types appear most in top 10%?
- What CTAs drive most comments?
- What topics get saved/shared most?

#### 4. PLAYBOOK — Codify Patterns

Document repeatable patterns you can use:

**Hook patterns to codify:**
```
Pattern: "I [unexpected action] and [surprising result]"
Example: "I stopped posting daily and my engagement doubled"
Why it works: Curiosity gap + contrarian

Pattern: "[Specific number] [things] that [outcome]:"
Example: "7 pricing mistakes that cost me $50K:"
Why it works: Specificity + loss aversion

Pattern: "[Controversial take]"
Example: "Cold outreach is dead."
Why it works: Pattern interrupt + invites debate
```

**Format patterns:**
- Carousel: Hook slide → Problem → Solution steps → CTA
- Thread: Hook → Promise → Deliver → Recap → CTA
- Story post: Hook → Setup → Conflict → Resolution → Lesson

**CTA patterns:**
- Question: "What would you add?"
- Agreement: "Agree or disagree?"
- Share: "Tag someone who needs this"
- Save: "Save this for later"

#### 5. LAYER VOICE — Apply Direct Response Principles

Take proven patterns and make them yours with these voice principles:

**"Smart friend who figured something out"**
- Write like you're texting advice to a friend
- Share discoveries, not lectures
- Use "I found that..." not "You should..."
- Be helpful, not preachy

**Specific > Vague**
```
❌ "I made good revenue"
✅ "I made $47,329"

❌ "It took a while"
✅ "It took 47 days"

❌ "A lot of people"
✅ "2,847 people"
```

**Short. Breathe. Land.**
- One idea per sentence
- Use line breaks liberally
- Let important points stand alone
- Create rhythm: short, short, longer explanation

```
❌ "I spent three years building my business the wrong way before I finally realized that the key to success was focusing on fewer things and doing them exceptionally well."

✅ "I built wrong for 3 years.

Then I figured it out.

Focus on less.
Do it exceptionally well.

Everything changed."
```

**Write from emotion**
- Start with how you felt, not what you did
- Use emotional words: frustrated, excited, terrified, obsessed
- Show vulnerability when authentic
- Connect the feeling to the lesson

```
❌ "Here's what I learned about pricing"

✅ "I was terrified to raise my prices.

My hands were shaking when I sent the email.

Here's what happened..."
```

#### 6. CONVERT — Turn Attention into Action

Bridge from engagement to business results:

**Soft conversions:**
- Newsletter signups in bio/comments
- Free resource offers in follow-up comments
- DM triggers ("Comment X and I'll send you...")
- Profile visits → optimized profile with clear CTA

**Direct conversions:**
- Link in comments (not post body on LinkedIn)
- Contextual product mentions within valuable content
- Case study posts that naturally showcase your work
- "If you want help with this, DM me" (sparingly)

### Output: Proven Patterns + Right Voice = Performance

The formula:
```
1. Find what's already working (don't guess)
2. Extract the patterns (hooks, formats, CTAs)
3. Layer your authentic voice on top
4. Test and iterate based on your own data
```

### Reverse Engineering Checklist

- [ ] Identified 10-20 top creators in niche
- [ ] Collected 500+ posts for analysis
- [ ] Ranked by engagement rate
- [ ] Documented top 10 hook patterns
- [ ] Documented top 5 format patterns
- [ ] Documented top 5 CTA patterns
- [ ] Created voice guidelines (specificity, brevity, emotion)
- [ ] Built template library from patterns
- [ ] Set up tracking for your own content performance

---

#### Imported: Questions to Ask

If you need more context:
1. What platform(s) are you focusing on?
2. What's your current posting frequency?
3. Do you have existing content to repurpose?
4. What content has performed well in the past?
5. How much time can you dedicate weekly?
6. Are you building personal brand, company brand, or both?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

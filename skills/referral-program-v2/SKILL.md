---
name: referral-program-v2
description: "Referral & Affiliate Programs workflow skill. Use this skill when the user needs You are an expert in viral growth and referral marketing with access to referral program data and third-party tools. Your goal is to help design and optimize programs that turn customers into growth engines and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["referral-program-v2", "referral-program", "you", "are", "expert", "viral", "growth", "and"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Referral & Affiliate Programs

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/referral-program` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Referral & Affiliate Programs You are an expert in viral growth and referral marketing with access to referral program data and third-party tools. Your goal is to help design and optimize programs that turn customers into growth engines.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Before Starting, Referral Program Design, Affiliate Program Design, Viral Coefficient & Modeling, Program Optimization, Fraud Prevention.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Existing customers recommending to their network
- Products with natural word-of-mouth
- Building authentic social proof
- Lower-ticket or self-serve products
- Referrer is an existing customer
- Motivation: Rewards + helping friends

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

#### Imported: Before Starting

Gather this context (ask if not provided):

### 1. Program Type
- Are you building a customer referral program, affiliate program, or both?
- Is this B2B or B2C?
- What's the average customer value (LTV)?
- What's your current CAC from other channels?

### 2. Current State
- Do you have an existing referral/affiliate program?
- What's your current referral rate (% of customers who refer)?
- What incentives have you tried?
- Do you have customer NPS or satisfaction data?

### 3. Product Fit
- Is your product shareable? (Does using it involve others?)
- Does your product have network effects?
- Do customers naturally talk about your product?
- What triggers word-of-mouth currently?

### 4. Resources
- What tools/platforms do you use or consider?
- What's your budget for referral incentives?
- Do you have engineering resources for custom implementation?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @referral-program-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @referral-program-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @referral-program-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @referral-program-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Referral Program Examples

### Dropbox (Classic)

**Program:** Give 500MB storage, get 500MB storage
**Why it worked:**
- Reward directly tied to product value
- Low friction (just an email)
- Both parties benefit equally
- Gamified with progress tracking

### Uber/Lyft

**Program:** Give $10 ride credit, get $10 when they ride
**Why it worked:**
- Immediate, clear value
- Double-sided incentive
- Easy to share (code/link)
- Triggered at natural moments

### Morning Brew

**Program:** Tiered rewards for subscriber referrals
- 3 referrals: Newsletter stickers
- 5 referrals: T-shirt
- 10 referrals: Mug
- 25 referrals: Hoodie

**Why it worked:**
- Gamification drives ongoing engagement
- Physical rewards are shareable (more referrals)
- Low cost relative to subscriber value
- Built status/identity

### Notion

**Program:** $10 credit per referral (education)
**Why it worked:**
- Targeted high-sharing audience (students)
- Product naturally spreads in teams
- Credit keeps users engaged

---

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/referral-program`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@quant-analyst-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@radix-ui-design-system-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@rag-engineer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@rag-implementation-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Referral Program Design

### The Referral Loop

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  ┌──────────┐    ┌──────────┐    ┌──────────┐     │
│  │ Trigger  │───▶│  Share   │───▶│ Convert  │     │
│  │ Moment   │    │  Action  │    │ Referred │     │
│  └──────────┘    └──────────┘    └──────────┘     │
│       ▲                               │            │
│       │                               │            │
│       └───────────────────────────────┘            │
│                  Reward                            │
└─────────────────────────────────────────────────────┘
```

### Step 1: Identify Trigger Moments

When are customers most likely to refer?

**High-intent moments:**
- Right after first "aha" moment
- After achieving a milestone
- After receiving exceptional support
- After renewing or upgrading
- When they tell you they love the product

**Natural sharing moments:**
- When the product involves collaboration
- When they're asked "what tool do you use?"
- When they share results publicly
- When they complete something shareable

### Step 2: Design the Share Mechanism

**Methods ranked by effectiveness:**

1. **In-product sharing** — Highest conversion, feels native
2. **Personalized link** — Easy to track, works everywhere
3. **Email invitation** — Direct, personal, higher intent
4. **Social sharing** — Broadest reach, lowest conversion
5. **Referral code** — Memorable, works offline

**Best practice:** Offer multiple sharing options, lead with the highest-converting method.

### Step 3: Choose Incentive Structure

**Single-sided rewards** (referrer only):
- Simpler to explain
- Works for high-value products
- Risk: Referred may feel no urgency

**Double-sided rewards** (both parties):
- Higher conversion rates
- Creates win-win framing
- Standard for most programs

**Tiered rewards:**
- Increases engagement over time
- Gamifies the referral process
- More complex to communicate

### Incentive Types

| Type | Pros | Cons | Best For |
|------|------|------|----------|
| Cash/credit | Universally valued | Feels transactional | Marketplaces, fintech |
| Product credit | Drives usage | Only valuable if they'll use it | SaaS, subscriptions |
| Free months | Clear value | May attract freebie-seekers | Subscription products |
| Feature unlock | Low cost to you | Only works for gated features | Freemium products |
| Swag/gifts | Memorable, shareable | Logistics complexity | Brand-focused companies |
| Charity donation | Feel-good | Lower personal motivation | Mission-driven brands |

### Incentive Sizing Framework

**Calculate your maximum incentive:**
```
Max Referral Reward = (Customer LTV × Gross Margin) - Target CAC
```

**Example:**
- LTV: $1,200
- Gross margin: 70%
- Target CAC: $200
- Max reward: ($1,200 × 0.70) - $200 = $640

**Typical referral rewards:**
- B2C: $10-50 or 10-25% of first purchase
- B2B SaaS: $50-500 or 1-3 months free
- Enterprise: Higher, often custom

---

#### Imported: Affiliate Program Design

### Commission Structures

**Percentage of sale:**
- Standard: 10-30% of first sale or first year
- Works for: E-commerce, SaaS with clear pricing
- Example: "Earn 25% of every sale you refer"

**Flat fee per action:**
- Standard: $5-500 depending on value
- Works for: Lead gen, trials, freemium
- Example: "$50 for every qualified demo"

**Recurring commission:**
- Standard: 10-25% of recurring revenue
- Works for: Subscription products
- Example: "20% of subscription for 12 months"

**Tiered commission:**
- Works for: Motivating high performers
- Example: "20% for 1-10 sales, 25% for 11-25, 30% for 26+"

### Cookie Duration

How long after click does affiliate get credit?

| Duration | Use Case |
|----------|----------|
| 24 hours | High-volume, low-consideration purchases |
| 7-14 days | Standard e-commerce |
| 30 days | Standard SaaS/B2B |
| 60-90 days | Long sales cycles, enterprise |
| Lifetime | Premium affiliate relationships |

### Affiliate Recruitment

**Where to find affiliates:**
- Existing customers who create content
- Industry bloggers and reviewers
- YouTubers in your niche
- Newsletter writers
- Complementary tool companies
- Consultants and agencies

**Outreach template:**
```
Subject: Partnership opportunity — [Your Product]

Hi [Name],

I've been following your content on [topic] — particularly [specific piece] — and think there could be a great fit for a partnership.

[Your Product] helps [audience] [achieve outcome], and I think your audience would find it valuable.

We offer [commission structure] for partners, plus [additional benefits: early access, co-marketing, etc.].

Would you be open to learning more?

[Your name]
```

### Affiliate Enablement

Provide affiliates with:
- [ ] Unique tracking links/codes
- [ ] Product overview and key benefits
- [ ] Target audience description
- [ ] Comparison to competitors
- [ ] Creative assets (logos, banners, images)
- [ ] Sample copy and talking points
- [ ] Case studies and testimonials
- [ ] Demo access or free account
- [ ] FAQ and objection handling
- [ ] Payment terms and schedule

---

#### Imported: Viral Coefficient & Modeling

### Key Metrics

**Viral coefficient (K-factor):**
```
K = Invitations × Conversion Rate

K > 1 = Viral growth (each user brings more than 1 new user)
K < 1 = Amplified growth (referrals supplement other acquisition)
```

**Example:**
- Average customer sends 3 invitations
- 15% of invitations convert
- K = 3 × 0.15 = 0.45

**Referral rate:**
```
Referral Rate = (Customers who refer) / (Total customers)
```

Benchmarks:
- Good: 10-25% of customers refer
- Great: 25-50%
- Exceptional: 50%+

**Referrals per referrer:**
```
How many successful referrals does each referring customer generate?
```

Benchmarks:
- Average: 1-2 referrals per referrer
- Good: 2-5
- Exceptional: 5+

### Calculating Referral Program ROI

```
Referral Program ROI = (Revenue from referred customers - Program costs) / Program costs

Program costs = Rewards paid + Tool costs + Management time
```

**Track separately:**
- Cost per referred customer (CAC via referral)
- LTV of referred customers (often higher than average)
- Payback period for referral rewards

---

#### Imported: Program Optimization

### Improving Referral Rate

**If few customers are referring:**
- Ask at better moments (after wins, not randomly)
- Simplify the sharing process
- Test different incentive types
- Make the referral prominent in product
- Remind via email campaigns
- Reduce friction in the flow

**If referrals aren't converting:**
- Improve the landing experience for referred users
- Strengthen the incentive for new users
- Test different messaging on referral pages
- Ensure the referrer's endorsement is visible
- Shorten the path to value

### A/B Tests to Run

**Incentive tests:**
- Reward amount (10% higher, 20% higher)
- Reward type (credit vs. cash vs. free months)
- Single vs. double-sided
- Immediate vs. delayed reward

**Messaging tests:**
- How you describe the program
- CTA copy on share buttons
- Email subject lines for referral invites
- Landing page copy for referred users

**Placement tests:**
- Where the referral prompt appears
- When it appears (trigger timing)
- How prominent it is
- In-app vs. email prompts

### Common Problems & Fixes

| Problem | Likely Cause | Fix |
|---------|--------------|-----|
| Low awareness | Program not visible | Add prominent in-app prompts |
| Low share rate | Too much friction | Simplify to one click |
| Low conversion | Weak landing page | Optimize referred user experience |
| Fraud/abuse | Gaming the system | Add verification, limits |
| One-time referrers | No ongoing motivation | Add tiered/gamified rewards |

---

#### Imported: Fraud Prevention

### Common Referral Fraud

- Self-referrals (creating fake accounts)
- Referral rings (groups referring each other)
- Coupon sites posting referral codes
- Fake email addresses
- VPN/device spoofing

### Prevention Measures

**Technical:**
- Email verification required
- Device fingerprinting
- IP address monitoring
- Delayed reward payout (after activation)
- Minimum activity threshold

**Policy:**
- Clear terms of service
- Maximum referrals per period
- Reward clawback for refunds/chargebacks
- Manual review for suspicious patterns

**Structural:**
- Require referred user to take meaningful action
- Cap lifetime rewards
- Pay rewards in product credit (less attractive to fraudsters)

---

#### Imported: Tools & Platforms

### Referral Program Tools

**Full-featured platforms:**
- ReferralCandy — E-commerce focused
- Ambassador — Enterprise referral programs
- Friendbuy — E-commerce and subscription
- GrowSurf — SaaS and tech companies
- Viral Loops — Template-based campaigns

**Built-in options:**
- Stripe (basic referral tracking)
- HubSpot (CRM-integrated)
- Segment (tracking and analytics)

### Affiliate Program Tools

**Affiliate networks:**
- ShareASale — Large merchant network
- Impact — Enterprise partnerships
- PartnerStack — SaaS focused
- Tapfiliate — Simple SaaS affiliate tracking
- FirstPromoter — SaaS affiliate management

**Self-hosted:**
- Rewardful — Stripe-integrated affiliates
- Refersion — E-commerce affiliates

### Choosing a Tool

Consider:
- Integration with your payment system
- Fraud detection capabilities
- Payout management
- Reporting and analytics
- Customization options
- Price vs. program scale

---

#### Imported: Email Sequences for Referral Programs

### Referral Program Launch

**Email 1: Announcement**
```
Subject: You can now earn [reward] for sharing [Product]

Body:
We just launched our referral program!

Share [Product] with friends and earn [reward] for each person who signs up. They get [their reward] too.

[Unique referral link]

Here's how it works:
1. Share your link
2. Friend signs up
3. You both get [reward]

[CTA: Share now]
```

### Referral Nurture Sequence

**After signup (if they haven't referred):**
- Day 7: Remind about referral program
- Day 30: "Know anyone who'd benefit?"
- Day 60: Success story + referral prompt
- After milestone: "You just [achievement] — know others who'd want this?"

### Re-engagement for Past Referrers

```
Subject: Your friends are loving [Product]

Body:
Remember when you referred [Name]? They've [achievement/milestone].

Know anyone else who'd benefit? You'll earn [reward] for each friend who joins.

[Referral link]
```

---

#### Imported: Measuring Success

### Dashboard Metrics

**Program health:**
- Active referrers (referred someone in last 30 days)
- Total referrals (invites sent)
- Referral conversion rate
- Rewards earned/paid

**Business impact:**
- % of new customers from referrals
- CAC via referral vs. other channels
- LTV of referred customers
- Referral program ROI

### Cohort Analysis

Track referred customers separately:
- Do they convert faster?
- Do they have higher LTV?
- Do they refer others at higher rates?
- Do they churn less?

Typical findings:
- Referred customers have 16-25% higher LTV
- Referred customers have 18-37% lower churn
- Referred customers refer others at 2-3x rate

---

#### Imported: Launch Checklist

### Before Launch

- [ ] Define program goals and success metrics
- [ ] Design incentive structure
- [ ] Build or configure referral tool
- [ ] Create referral landing page
- [ ] Design email templates
- [ ] Set up tracking and attribution
- [ ] Define fraud prevention rules
- [ ] Create terms and conditions
- [ ] Test complete referral flow
- [ ] Plan launch announcement

### Launch

- [ ] Announce to existing customers (email)
- [ ] Add in-app referral prompts
- [ ] Update website with program details
- [ ] Brief support team on program
- [ ] Monitor for fraud/issues
- [ ] Track initial metrics

### Post-Launch (First 30 Days)

- [ ] Review conversion funnel
- [ ] Identify top referrers
- [ ] Gather feedback on program
- [ ] Fix any friction points
- [ ] Plan first optimizations
- [ ] Send reminder emails to non-referrers

---

#### Imported: Questions to Ask

If you need more context:
1. What type of program are you building (referral, affiliate, or both)?
2. What's your customer LTV and current CAC?
3. Do you have an existing program, or starting from scratch?
4. What tools/platforms are you using or considering?
5. What's your budget for rewards/commissions?
6. Is your product naturally shareable (involves others, visible results)?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

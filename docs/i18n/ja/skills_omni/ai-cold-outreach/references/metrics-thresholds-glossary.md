# Metrics Thresholds Glossary (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-cold-outreach/references/metrics-thresholds-glossary.md)

---


Use these metrics as operating signals, not universal guarantees. Exact thresholds vary by sender history, provider mix, and campaign type.

## Primary metrics

### Bounce rate

What it tells you: list quality, verification quality, and data-source risk.

Use it for:

- launch gating
- provider/source audits
- pause decisions

Practical guidance:

- very low is expected for freshly verified lists
- rising hard bounces are a warning sign
- sustained bounce issues should block scaling

### Complaint / spam rate

What it tells you: recipient dissatisfaction, poor targeting, or weak sender reputation.

Use it for:

- inbox-placement diagnostics
- pause decisions
- segment-level audits

Practical guidance:

- rising complaint signals matter more than vanity engagement metrics
- even good copy cannot offset poor complaint control

### Reply rate
n
What it tells you: a mix of targeting quality, inbox placement, relevance, and CTA fit.

Use it for:

- comparing segments
- testing hooks and CTAs
- evaluating whether the system is producing conversation

Practical guidance:

- review by segment, not only in aggregate
- low reply rate with stable delivery points to targeting/copy issues more than infrastructure

### Unsubscribe rate

What it tells you: fit, expectations, and message classification mismatch.

Use it for:

- sequence fatigue checks
- segmentation checks
- suppression-path validation

### Positive reply rate

What it tells you: whether responses are commercially useful, not just numerous.

Use it for:

- offer and segment comparison
- qualification quality review

## Review cadence

### Before launch

Check:

- verification recency
- unsubscribe readiness
- mailbox/domain readiness
- planned volume pacing

### During first send waves

Check daily:

- bounces
- complaints/spam indicators
- unsubscribe processing
- reply quality by segment

### During scaling

Check at least weekly:

- trend by domain and mailbox pool
- segment-level reply quality
- any reputation deterioration after volume increases

## Stop or pause signals

Pause or slow down when:

- bounce rate materially worsens
- complaint signals rise
- inbox placement deteriorates after scale increases
- unsubscribe or suppression handling fails
- a new data source produces suspiciously poor quality

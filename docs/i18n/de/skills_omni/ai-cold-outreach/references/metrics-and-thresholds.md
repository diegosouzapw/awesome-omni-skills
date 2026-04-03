# Metrics and Thresholds (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-cold-outreach/references/metrics-and-thresholds.md)

---


Use these metrics to diagnose campaign health. Exact acceptable ranges vary by stack, audience, and mailbox-provider signals, so use trends and context rather than a single universal number.

## Core metrics

### Bounce rate

What it indicates:

- list quality
- verification quality
- enrichment freshness

If it rises suddenly:

- inspect the newest source or segment first
- reduce or pause sending until the cause is isolated

### Complaint or spam-report signals

What it indicates:

- targeting mismatch
- poor relevance
- weak unsubscribe handling
- damaged reputation

If it worsens:

- pause scale, review copy and targeting, and verify suppression workflows

### Unsubscribe rate

What it indicates:

- message relevance
- targeting quality
- sequence pressure

If it spikes:

- reassess audience fit and CTA pressure

### Reply rate

What it indicates:

- combined effect of delivery, targeting, and copy

Do not treat it as a copy-only metric.

### Positive reply rate

What it indicates:

- whether responses are commercially meaningful

Use this alongside raw reply rate.

### Meeting-booked rate

What it indicates:

- whether the sequence creates pipeline, not just replies

## Recommended owner questions

For each campaign, define:

- who watches delivery signals
- who processes unsubscribes and objections
- who decides when to pause
- who approves new list sources

## Escalation mindset

Escalate when:

- delivery signals worsen quickly
- objections or opt-outs are not being enforced reliably
- a provider or sender tool changes authentication behavior
- raw reply rate improves but positive outcomes do not

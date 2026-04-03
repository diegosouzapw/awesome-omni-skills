# AI SDR Evaluation Scorecard (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/references/ai-sdr-evaluation-scorecard.md)

---


Use this scorecard before scaling an AI SDR workflow.

## 1. Outcome metrics

Track:

- delivery rate
- bounce rate
- complaint rate
- unsubscribe rate
- positive reply rate
- positive reply precision
- qualified meeting rate
- meeting acceptance rate
- show rate
- opportunity creation rate
- time to human handoff

## 2. Classification quality

For a labeled reply set, measure:

- precision by class
- recall by class
- false positives for positive intent
- false negatives for compliance-sensitive replies

Pay special attention to:

- positive vs neutral confusion
- objection vs negative confusion
- missed opt-out or complaint signals

## 3. Qualification quality

Review:

- percent of AI-qualified leads accepted by reps
- percent of booked meetings deemed ICP-fit
- percent of meetings progressing to opportunity
- common false-positive reasons

## 4. Handoff quality

Review:

- median time to owner assignment
- median time to follow-up after positive reply
- percent of replies with missing owner
- percent of CRM state mismatches

## 5. Safety review

Review whether the system:

- made unauthorized claims
- handled sensitive objections without approval
- exposed excessive CRM or account data
- failed to suppress opt-outs or complaints

## 6. Launch guidance

### Ready to expand

Consider expansion only if:

- sender health is stable
- reply handling is consistent
- qualified meeting quality is acceptable
- human handoff is meeting SLA
- compliance-sensitive cases are handled reliably

### Not ready to expand

Do not scale when:

- complaint or bounce trends are worsening
- false qualification is high
- rep trust in AI-routed meetings is low
- CRM ownership is inconsistent
- policy exceptions are recurring

## 7. Review cadence

Suggested cadence:

- daily in first launch window
- weekly during pilot
- monthly only after stable performance is established

## 8. Evidence packet

A useful review packet includes:

- sample size
- time window
- labeled reply set summary
- meeting quality notes from reps
- sender health summary
- key changes since last review

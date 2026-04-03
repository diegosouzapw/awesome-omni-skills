# ICP Scorecard Example (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/examples/icp-scorecard-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/examples/icp-scorecard-example.md)

---


This is a simple example of a scorecard for AI SDR enrollment review.

## Example target segment

B2B SaaS companies selling internal tools to revenue teams.

## Scoring model

### Firmographic fit

- company size 50-500 employees: +20
- revenue range aligned to offer: +15
- target industry present: +15

### Buying-context fit

- target function includes sales, revops, or GTM ops: +15
- likely buyer seniority present: +10

### Signals

- recent hiring in sales or revops: +10
- recent funding or expansion signal: +10
- relevant tech stack signal: +10

### Exclusions

- student or job seeker: automatic disqualify
- competitor or partner: automatic disqualify
- prior opt-out: automatic suppress
- active open opportunity: do not enroll

## Example interpretation

| Score | Action |
| --- | --- |
| 80-100 | enroll or send to human review |
| 50-79 | manual review required |
| 0-49 | do not enroll |

## Example note

A strong scorecard should include both positive signals and explicit reasons not to enroll.

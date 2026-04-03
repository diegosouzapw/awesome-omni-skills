# Reply Labeling Golden Set (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-sdr/examples/reply-labeling-golden-set.md)

---


Use this starter set to test reply classification logic.

## Labeled examples

| Reply | Label | Notes |
| --- | --- | --- |
| "Can you send more info?" | Positive | buying interest, though still early |
| "Not now, try again next quarter." | Neutral | timing issue, not explicit rejection |
| "We already use another tool for this." | Objection | requires approved handling |
| "Wrong person, please remove me." | Negative | suppress and close out |
| "Do not contact me again." | Compliance-sensitive | immediate suppression |
| "How did you get my email?" | Compliance-sensitive | privacy concern, escalate per policy |
| "Maybe. What companies like us do you help?" | Neutral | curiosity, but not yet positive intent |
| "Let's book 15 minutes next week." | Positive | direct next-step intent |
| "No budget this year." | Objection | context-sensitive follow-up if policy allows |
| "We are not interested." | Negative | no further outreach |

## How to use

- test whether each reply is labeled correctly
- check whether the routing action is correct
- add real historical examples from the operator's workflow
- include ambiguous edge cases before enabling automation

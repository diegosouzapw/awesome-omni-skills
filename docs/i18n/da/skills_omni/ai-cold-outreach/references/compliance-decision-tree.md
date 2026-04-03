# Compliance Decision Tree (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇪🇸 [es](../../../../es/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇫🇷 [fr](../../../../fr/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇩🇪 [de](../../../../de/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇮🇹 [it](../../../../it/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇷🇺 [ru](../../../../ru/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇯🇵 [ja](../../../../ja/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇰🇷 [ko](../../../../ko/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇸🇦 [ar](../../../../ar/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇮🇳 [hi](../../../../hi/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇮🇳 [in](../../../../in/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇹🇭 [th](../../../../th/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇻🇳 [vi](../../../../vi/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇮🇩 [id](../../../../id/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇲🇾 [ms](../../../../ms/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇳🇱 [nl](../../../../nl/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇵🇱 [pl](../../../../pl/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇸🇪 [sv](../../../../sv/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇳🇴 [no](../../../../no/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇩🇰 [da](../../../../da/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇫🇮 [fi](../../../../fi/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇵🇹 [pt](../../../../pt/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇷🇴 [ro](../../../../ro/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇭🇺 [hu](../../../../hu/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇧🇬 [bg](../../../../bg/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇸🇰 [sk](../../../../sk/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇮🇱 [he](../../../../he/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇵🇭 [phi](../../../../phi/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇨🇿 [cs](../../../../cs/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md) · 🇹🇷 [tr](../../../../tr/skills_omni/ai-cold-outreach/references/compliance-decision-tree.md)

---


Use this reference to summarize compliance considerations before launch. It is an operational routing aid, not legal advice.

## 1. Start with geography

Ask:

- Where are recipients located?
- Where is the sender established?
- Is this B2B outreach, consumer outreach, or mixed?

If multiple jurisdictions apply, route the highest-risk cases to counsel.

## 2. Classify the message

Determine whether the message is:

- commercial or promotional
- relationship-based follow-up
- transactional or operational

This skill is for commercial outreach planning. If the user describes deceptive or hidden commercial intent, stop and redirect.

## 3. Check source and minimization

Confirm:

- how the contact data was sourced
- whether the data is relevant to the prospecting purpose
- whether sensitive or unnecessary personal data is being used
- whether social or third-party data use creates profiling concerns

Prefer the minimum data needed for legitimate prospecting.

## 4. Core routing by region

### United States

Operational baseline:

- avoid misleading headers or subject lines
- identify the message as commercial where required
- provide a clear opt-out path
- honor opt-out requests promptly

Reference: FTC CAN-SPAM guidance.

### Canada

Canada can be materially stricter than the US for unsolicited commercial electronic messages.

Operational rule:

- do not assume US-style outreach rules are sufficient
- if Canada is in scope and consent posture is unclear, route to counsel before launch

Reference: CASL official guidance.

### UK / EU

Operational concerns often include:

- lawful basis
- transparency
- data minimization
- retention
- direct marketing objections

Operational rule:

- if the user plans broad enrichment, inferred profiling, or unclear lawful-basis reasoning, route to counsel or privacy review
- if a recipient objects to direct marketing, suppression must be honored

References: ICO GDPR guide and right-to-object guidance.

## 5. Suppression and objection handling

Before launch, confirm:

- who owns suppression lists
- where unsubscribes are stored
- how removals propagate across tools
- how direct marketing objections are recorded and enforced

If there is no clear suppression path, do not recommend scaling.

## 6. Stop / escalate conditions

Escalate to legal or compliance review when:

- the campaign spans Canada, the UK, the EU, or multiple regimes with unclear rules
- the user asks whether a tactic is definitively lawful
- the plan relies on scraped, inferred, or sensitive data
- unsubscribe or objection handling is missing or unreliable
- the user asks to hide identity or avoid opt-out obligations

## Official source links

- FTC CAN-SPAM compliance guide: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business
- Canada CASL: https://ised-isde.canada.ca/site/canadas-anti-spam-legislation/en
- ICO GDPR guide: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-protection-principles/a-guide-to-the-general-data-protection-regulation-gdpr/
- ICO right to object: https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/right-to-object/

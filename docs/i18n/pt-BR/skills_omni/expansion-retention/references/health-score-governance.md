# Health Score Governance (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/expansion-retention/references/health-score-governance.md) · 🇪🇸 [es](../../../../es/skills_omni/expansion-retention/references/health-score-governance.md) · 🇫🇷 [fr](../../../../fr/skills_omni/expansion-retention/references/health-score-governance.md) · 🇩🇪 [de](../../../../de/skills_omni/expansion-retention/references/health-score-governance.md) · 🇮🇹 [it](../../../../it/skills_omni/expansion-retention/references/health-score-governance.md) · 🇷🇺 [ru](../../../../ru/skills_omni/expansion-retention/references/health-score-governance.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/expansion-retention/references/health-score-governance.md) · 🇯🇵 [ja](../../../../ja/skills_omni/expansion-retention/references/health-score-governance.md) · 🇰🇷 [ko](../../../../ko/skills_omni/expansion-retention/references/health-score-governance.md) · 🇸🇦 [ar](../../../../ar/skills_omni/expansion-retention/references/health-score-governance.md) · 🇮🇳 [hi](../../../../hi/skills_omni/expansion-retention/references/health-score-governance.md) · 🇮🇳 [in](../../../../in/skills_omni/expansion-retention/references/health-score-governance.md) · 🇹🇭 [th](../../../../th/skills_omni/expansion-retention/references/health-score-governance.md) · 🇻🇳 [vi](../../../../vi/skills_omni/expansion-retention/references/health-score-governance.md) · 🇮🇩 [id](../../../../id/skills_omni/expansion-retention/references/health-score-governance.md) · 🇲🇾 [ms](../../../../ms/skills_omni/expansion-retention/references/health-score-governance.md) · 🇳🇱 [nl](../../../../nl/skills_omni/expansion-retention/references/health-score-governance.md) · 🇵🇱 [pl](../../../../pl/skills_omni/expansion-retention/references/health-score-governance.md) · 🇸🇪 [sv](../../../../sv/skills_omni/expansion-retention/references/health-score-governance.md) · 🇳🇴 [no](../../../../no/skills_omni/expansion-retention/references/health-score-governance.md) · 🇩🇰 [da](../../../../da/skills_omni/expansion-retention/references/health-score-governance.md) · 🇫🇮 [fi](../../../../fi/skills_omni/expansion-retention/references/health-score-governance.md) · 🇵🇹 [pt](../../../../pt/skills_omni/expansion-retention/references/health-score-governance.md) · 🇷🇴 [ro](../../../../ro/skills_omni/expansion-retention/references/health-score-governance.md) · 🇭🇺 [hu](../../../../hu/skills_omni/expansion-retention/references/health-score-governance.md) · 🇧🇬 [bg](../../../../bg/skills_omni/expansion-retention/references/health-score-governance.md) · 🇸🇰 [sk](../../../../sk/skills_omni/expansion-retention/references/health-score-governance.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/expansion-retention/references/health-score-governance.md) · 🇮🇱 [he](../../../../he/skills_omni/expansion-retention/references/health-score-governance.md) · 🇵🇭 [phi](../../../../phi/skills_omni/expansion-retention/references/health-score-governance.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/expansion-retention/references/health-score-governance.md) · 🇨🇿 [cs](../../../../cs/skills_omni/expansion-retention/references/health-score-governance.md) · 🇹🇷 [tr](../../../../tr/skills_omni/expansion-retention/references/health-score-governance.md)

---


A health score is an operating model, not just a formula.

## Use this file when

- the team wants to build a new health score
- the current score is not trusted
- score bands exist but do not trigger action
- different segments need different logic

## Governance requirements

### 1. Define the job of the score

Choose one primary purpose:

- early churn risk detection
- expansion readiness detection
- renewal prioritization
- portfolio triage for CS coverage

Do not overload one score with every purpose unless there is a clear reason.

### 2. Use explainable inputs

Prefer signals that a human owner can interpret quickly, such as:

- login frequency or active usage trend
- completion of core workflow
- feature breadth
- support case volume or sentiment
- stakeholder coverage
- executive engagement
- payment status
- renewal stage completeness

### 3. Assign owners

Every score should have:

- business owner
- data owner
- operations owner
- action owner for each score band

### 4. Set refresh cadence

Examples:

- product usage: daily
- support health: daily or near real-time
- relationship strength: weekly or monthly
- business outcomes: monthly or quarterly
- billing/renewal state: on change

### 5. Map score bands to action

A score without action mapping is noise.

Example structure:

- thriving -> expansion or advocacy review
- healthy -> monitor and reinforce value
- neutral -> targeted enablement
- at risk -> named owner outreach and save play
- critical -> executive escalation or rescue plan

### 6. Review false positives and false negatives

At least quarterly, ask:

- which accounts were flagged but stayed healthy?
- which accounts churned without warning?
- which signals were stale or misleading?
- which segment needs different weighting?

### 7. Keep segment-specific logic where justified

Enterprise, SMB, and self-serve accounts often need different signals and weights.

Examples:

- enterprise may weight relationship depth and renewal readiness more heavily
- SMB may weight product usage and self-serve friction more heavily

## Warning signs the score is weak

- nobody can explain why an account is red
- too many accounts are flagged at once
- the score changes too slowly to drive action
- the score is used only in slides, not workflows
- the score predicts renewal only after the account is already visibly in trouble

## Minimum scorecard packet

For each score, document:

- purpose
- segment covered
- signals and weights
- refresh cadence
- owner
- action by score band
- review cadence
- known limitations

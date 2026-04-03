# Identity Normalization and Mailmap Checks (Čeština)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-ownership-map/references/identity-normalization.md) · 🇪🇸 [es](../../../../es/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇩🇪 [de](../../../../de/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇮🇹 [it](../../../../it/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇮🇳 [in](../../../../in/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇹🇭 [th](../../../../th/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇮🇩 [id](../../../../id/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇳🇴 [no](../../../../no/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇩🇰 [da](../../../../da/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇮🇱 [he](../../../../he/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-ownership-map/references/identity-normalization.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-ownership-map/references/identity-normalization.md)

---


## Why this matters

Ownership analysis depends on contributor identity quality. If one person appears as multiple names or emails, people-to-file ownership, hidden-owner ranking, and bus-factor metrics become fragmented and misleading.

## Preferred approach

Use `.mailmap` when the repository already maintains one. If it does not, note the limitation explicitly and avoid overclaiming precision in people-level findings.

## Quick checks

### Raw contributor view

```bash
git shortlog -sne HEAD
```

### Mailmap-aware contributor view

```bash
git shortlog -sne --mailmap HEAD
```

If these differ materially, identity normalization is affecting the analysis and should be recorded.

## What to look for

- same person with old and new corporate emails
- same person with shortened vs full name
- local username-style identities mixed with real names
- bot addresses that resemble human contributors

## Practical workflow

1. Run a raw aggregation.
2. Run a mailmap-aware aggregation.
3. Compare top contributors manually or with `scripts/check_mailmap_consistency.sh`.
4. If unresolved ambiguity remains, label the findings as approximate.

## Reporting guidance

State one of the following in the handoff:

- `Identity normalization: .mailmap present and reviewed.`
- `Identity normalization: no .mailmap found; contributor aliases may fragment person-level findings.`
- `Identity normalization: partial alias cleanup applied; remaining ambiguity noted in findings.`

## Symptoms of alias problems

- one engineer appears multiple times in `people.csv`
- unexpectedly low bus factor for well-known subsystems
- hidden-owner output looks diluted across nearly identical identities

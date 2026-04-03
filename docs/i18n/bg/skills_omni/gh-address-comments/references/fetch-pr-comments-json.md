# Structured Fetch Examples (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-address-comments/references/fetch-pr-comments-json.md)

---


Prefer structured JSON over scraping terminal output.

## PR metadata

```bash
gh pr view --json number,title,url,headRefName,baseRefName,isDraft,reviewDecision
```

## Use the bundled helper

```bash
python3 scripts/fetch_pr_feedback.py > /tmp/pr_feedback.json
```

## Inspect the result

```bash
python3 -m json.tool /tmp/pr_feedback.json | sed -n '1,160p'
```

## Suggested usage pattern

- save the fetched JSON to a temp file
- summarize actionable items from that file
- keep numbering stable during the session
- refresh only when repository state changes materially

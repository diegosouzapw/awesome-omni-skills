# Worked Example: Missing Checks Due to Filter Mismatch (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-fix-ci/examples/missing-checks-filter-mismatch.md)

---


## Situation

A user says the PR is missing a required CI workflow, but no failing run appears in the Actions tab for that PR event.

## Likely Cause

The workflow trigger excludes the PR because of:

- `branches` filter mismatch
- `paths` filter mismatch
- `paths-ignore`
- `if:` condition evaluating to false
- event mismatch between `pull_request`, `pull_request_target`, and other triggers

## Example Summary

```text
I did not find a failing GitHub Actions run for the expected check. The workflow appears not to have been triggered for this PR.

Most likely explanation:
The workflow trigger or job condition excludes this change set.

Next diagnostic step:
Review the workflow's `on.pull_request` filters and any job-level `if:` conditions against the files and branch used in this PR.

I have not made changes yet. If you want, I can inspect the workflow YAML and propose the smallest safe fix.
```

## Reminder

A missing check is not automatically a failing check. Confirm trigger and filter behavior before proposing code changes.

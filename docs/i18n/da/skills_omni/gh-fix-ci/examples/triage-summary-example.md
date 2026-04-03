# Triage Summary Example (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-fix-ci/examples/triage-summary-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-fix-ci/examples/triage-summary-example.md)

---


```text
I inspected PR #123 and found one failing GitHub Actions check.

- Check: test / linux-node-20
- Run: https://github.com/example/repo/actions/runs/987654321
- Job: test
- Attempt: latest visible attempt
- Event: pull_request
- Head SHA: abcdef123456

Evidence:
The first actionable error is:
"ModuleNotFoundError: No module named 'pkg.resources'"

Current assessment:
This looks like a real dependency regression in the test environment, not an external CI issue.

Proposed plan:
1. Inspect dependency declaration and recent lockfile changes.
2. Apply the smallest fix to restore the missing package.
3. Run the narrow local validation for the affected test target.
4. If you approve, I will implement the fix and then re-check PR status.

Please confirm if you want me to proceed with implementation.
```

Use this structure to keep diagnosis concise, evidence-based, and approval-gated.

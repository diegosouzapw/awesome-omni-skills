# PR Checks Triage Workflow (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-fix-ci/references/pr-checks-triage-workflow.md)

---


Use this playbook when a GitHub pull request has failing, pending, skipped, or missing checks and you need a reliable GitHub Actions-focused diagnosis.

## Inputs

- Repository path, usually `.`
- PR number or PR URL, if known
- Working `gh` authentication for the target GitHub host and repository

## Triage Sequence

1. **Confirm authentication**
   ```bash
   gh auth status
   ```

2. **Resolve the PR**
   ```bash
   gh pr view --json number,url,headRefName,baseRefName,headRepositoryOwner
   ```

3. **Collect first-pass check data**
   Preferred:
   ```bash
   python3 scripts/inspect_pr_checks.py --repo . --pr <pr>
   ```

   Structured output:
   ```bash
   python3 scripts/inspect_pr_checks.py --repo . --pr <pr> --json
   ```

   Manual fallback:
   ```bash
   gh pr checks <pr> --json name,state,link,bucket,startedAt,completedAt,workflow
   ```

4. **Classify each check**
   - GitHub Actions failing
   - GitHub Actions pending or in progress
   - GitHub Actions skipped or missing
   - External status check

5. **Inspect the run**
   ```bash
   gh run view <run-id> --json name,workflowName,conclusion,status,url,event,headBranch,headSha
   gh run view <run-id> --log
   ```

6. **Capture evidence**
   Record:
   - check name
   - run URL
   - workflow name
   - event
   - head SHA
   - failing job if known
   - attempt if relevant
   - first actionable non-secret log snippet
   - uncertainty, such as missing logs or blocked approval

7. **Draft a diagnosis summary**
   Keep it short and evidence-based:
   - what failed
   - what the logs show
   - likely cause
   - confidence level
   - smallest next action

8. **Ask for approval before changes**
   Do not edit files or rerun workflows until the user approves.

## Output Template

```text
PR: #123 <url>
Head SHA: <sha>
Check: <name>
Classification: failing GitHub Actions run | pending | skipped | external
Run: <url-or-none>
Job: <name-or-unknown>
Attempt: <n-or-unknown>
Evidence: <1-3 lines>
Likely cause: <short statement>
Confidence: high | medium | low
Proposed fix: <smallest safe plan>
Approval needed before implementation: yes
```

## Notes

- Prefer concise snippets over full logs.
- If a check is external, stop at the details URL.
- If a workflow did not run, inspect triggers, filters, and conditions before assuming failure.
- If a run is waiting on approval or concurrency, report that as blocked state rather than failure.

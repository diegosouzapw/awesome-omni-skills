# Affected and CI Guide (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-workspace/references/affected-and-ci-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-workspace/references/affected-and-ci-guide.md)

---


Use this guide when affected project selection must be correct and reproducible.

## Core rule

Affected analysis depends on the Git comparison range. If `base` and `head` are wrong, results will be wrong.

## Recommended local validation

```bash
nx show projects --affected --base=origin/main --head=HEAD
nx affected -t lint --base=origin/main --head=HEAD
```

Replace `origin/main` with the repository's actual base branch or comparison ref.

## CI checks

Before changing Nx configuration, verify:

- the CI job fetched enough Git history
- the `base` ref exists in the job
- the checkout is not too shallow
- detached HEAD behavior is understood
- the same comparison pair is used when reproducing locally

## GitHub Actions note

The common failure mode is shallow checkout. Ensure the workflow fetches enough history, often with:

```yaml
fetch-depth: 0
```

Then pass explicit refs when needed.

## Symptoms and likely causes

| Symptom | Likely cause |
| --- | --- |
| No affected projects when you expect some | Wrong base/head or missing branch ref |
| Too many affected projects | Wrong comparison range or broad changes in shared inputs |
| CI and local results differ | Shallow clone, missing refs, or different comparison pair |

## Safe workflow

1. Confirm refs.
2. Reproduce with explicit `base` and `head`.
3. Only then inspect Nx config if results are still surprising.

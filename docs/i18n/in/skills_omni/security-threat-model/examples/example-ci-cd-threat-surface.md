# Example CI/CD Threat Surface (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇪🇸 [es](../../../../es/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇩🇪 [de](../../../../de/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇮🇹 [it](../../../../it/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇮🇳 [in](../../../../in/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇹🇭 [th](../../../../th/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇮🇩 [id](../../../../id/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇳🇴 [no](../../../../no/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇩🇰 [da](../../../../da/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇮🇱 [he](../../../../he/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-threat-model/examples/example-ci-cd-threat-surface.md)

---


Use this pattern when the repo includes GitHub Actions or similar automation.

## Evidence to inspect

- `.github/workflows/*.yml`
- release scripts
- package publishing config
- signing or provenance steps
- container build and push steps

## Common attack surfaces

1. Over-broad workflow token permissions
2. Unpinned third-party actions
3. Secrets available to unsafe workflow triggers
4. Artifact publication without strong branch or environment protection
5. Build steps that trust unvalidated inputs

## Example threat statement

**Threat:** An attacker influences a workflow input or a maintainer account, causing the release workflow to publish a tampered artifact.

- Entry point: workflow trigger and release job
- Boundary crossed: source control automation -> artifact registry
- Impacted asset: build integrity
- Mitigation: least-privilege permissions, pinned actions, protected environments, and provenance verification

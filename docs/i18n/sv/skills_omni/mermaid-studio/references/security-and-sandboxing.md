# Security and Sandboxing (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇪🇸 [es](../../../../es/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇫🇷 [fr](../../../../fr/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇩🇪 [de](../../../../de/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇮🇹 [it](../../../../it/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇷🇺 [ru](../../../../ru/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇯🇵 [ja](../../../../ja/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇰🇷 [ko](../../../../ko/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇸🇦 [ar](../../../../ar/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇮🇳 [hi](../../../../hi/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇮🇳 [in](../../../../in/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇹🇭 [th](../../../../th/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇻🇳 [vi](../../../../vi/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇮🇩 [id](../../../../id/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇲🇾 [ms](../../../../ms/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇳🇱 [nl](../../../../nl/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇵🇱 [pl](../../../../pl/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇸🇪 [sv](../../../../sv/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇳🇴 [no](../../../../no/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇩🇰 [da](../../../../da/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇫🇮 [fi](../../../../fi/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇵🇹 [pt](../../../../pt/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇷🇴 [ro](../../../../ro/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇭🇺 [hu](../../../../hu/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇧🇬 [bg](../../../../bg/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇸🇰 [sk](../../../../sk/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇮🇱 [he](../../../../he/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇵🇭 [phi](../../../../phi/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇨🇿 [cs](../../../../cs/skills_omni/mermaid-studio/references/security-and-sandboxing.md) · 🇹🇷 [tr](../../../../tr/skills_omni/mermaid-studio/references/security-and-sandboxing.md)

---


Use this guide when rendering Mermaid from untrusted sources or when working in CI, containers, or restricted environments.

## Trust boundary

Treat Mermaid input and Mermaid configuration from untrusted users or repositories as untrusted content.

Why this matters:

- Mermaid rendering may involve HTML labels and browser-context behavior.
- Mermaid CLI uses a headless browser stack.
- Rendering exceptions made for convenience can weaken safety assumptions.

## Safe defaults

- Keep Mermaid security-related settings conservative unless there is a clear documented need.
- Avoid loosening `securityLevel` by default.
- Only enable `htmlLabels` when needed and understood.
- Do not add arbitrary scripts or external resources to rendering workflows.

## Sandboxing guidance

Browser sandbox failures are common in CI/container setups.

Preferred order:

1. Use the documented packaged setup.
2. Confirm required environment dependencies are present.
3. Troubleshoot missing libraries, fonts, or Chromium launch issues.
4. Use no-sandbox workarounds only in constrained trusted environments and record why the exception was necessary.

## Do not assume

- that rendering untrusted Mermaid is equivalent to parsing plain text only
- that all renderers honor the same security settings
- that a local workaround is acceptable for shared CI by default

## Minimum incident notes to capture

- who supplied the Mermaid source
- whether config/frontmatter was user-provided
- whether HTML labels were enabled
- whether the run occurred locally or in shared CI
- exact sandbox or browser-launch error text

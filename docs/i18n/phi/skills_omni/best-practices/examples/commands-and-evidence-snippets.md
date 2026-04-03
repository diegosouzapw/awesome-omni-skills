# Commands and Evidence Snippets (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇪🇸 [es](../../../../es/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇫🇷 [fr](../../../../fr/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇩🇪 [de](../../../../de/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇮🇹 [it](../../../../it/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇷🇺 [ru](../../../../ru/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇯🇵 [ja](../../../../ja/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇰🇷 [ko](../../../../ko/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇸🇦 [ar](../../../../ar/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇮🇳 [hi](../../../../hi/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇮🇳 [in](../../../../in/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇹🇭 [th](../../../../th/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇻🇳 [vi](../../../../vi/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇮🇩 [id](../../../../id/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇲🇾 [ms](../../../../ms/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇳🇱 [nl](../../../../nl/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇵🇱 [pl](../../../../pl/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇸🇪 [sv](../../../../sv/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇳🇴 [no](../../../../no/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇩🇰 [da](../../../../da/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇫🇮 [fi](../../../../fi/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇵🇹 [pt](../../../../pt/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇷🇴 [ro](../../../../ro/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇭🇺 [hu](../../../../hu/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇧🇬 [bg](../../../../bg/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇸🇰 [sk](../../../../sk/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇮🇱 [he](../../../../he/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇵🇭 [phi](../../../../phi/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇨🇿 [cs](../../../../cs/skills_omni/best-practices/examples/commands-and-evidence-snippets.md) · 🇹🇷 [tr](../../../../tr/skills_omni/best-practices/examples/commands-and-evidence-snippets.md)

---


Use these commands to gather evidence safely before making changes.

## Response headers

```bash
curl -I https://example.com
curl -sSI https://example.com | tr -d '\r'
```

## Dependency audit

```bash
npm audit
npm audit --json > audit.json
npm ls <package-name>
```

## Search for insecure URLs

```bash
grep -R "http://" .
```

## Search for risky patterns

```bash
grep -R "document.write" .
grep -R "innerHTML" .
```

## Review build output for source maps

```bash
find . -name "*.map"
```

## Evidence notes

Record:

- exact command used
- environment or URL checked
- timestamp if relevant
- whether the result came from source, build output, or live deployment

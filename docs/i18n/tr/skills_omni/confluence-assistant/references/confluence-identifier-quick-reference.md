# Confluence Identifier Quick Reference (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇪🇸 [es](../../../../es/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇫🇷 [fr](../../../../fr/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇩🇪 [de](../../../../de/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇮🇹 [it](../../../../it/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇷🇺 [ru](../../../../ru/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇯🇵 [ja](../../../../ja/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇰🇷 [ko](../../../../ko/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇸🇦 [ar](../../../../ar/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇮🇳 [hi](../../../../hi/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇮🇳 [in](../../../../in/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇹🇭 [th](../../../../th/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇻🇳 [vi](../../../../vi/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇮🇩 [id](../../../../id/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇲🇾 [ms](../../../../ms/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇳🇱 [nl](../../../../nl/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇵🇱 [pl](../../../../pl/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇸🇪 [sv](../../../../sv/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇳🇴 [no](../../../../no/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇩🇰 [da](../../../../da/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇫🇮 [fi](../../../../fi/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇵🇹 [pt](../../../../pt/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇷🇴 [ro](../../../../ro/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇭🇺 [hu](../../../../hu/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇧🇬 [bg](../../../../bg/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇸🇰 [sk](../../../../sk/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇮🇱 [he](../../../../he/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇵🇭 [phi](../../../../phi/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇨🇿 [cs](../../../../cs/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md) · 🇹🇷 [tr](../../../../tr/skills_omni/confluence-assistant/references/confluence-identifier-quick-reference.md)

---


## Common identifier types

### Site URL
Example:

```text
https://example.atlassian.net/
```

Use for selecting the Confluence site context.

### Cloud ID
Example:

```text
12345678-1234-1234-1234-1234567890ab
```

Use when the MCP or integration expects a cloud identifier rather than a URL.

### Page ID
Example:

```text
123456789
```

Use for direct retrieval or updates of a known page.

### Space key
Example:

```text
TECH
```

Use for finding or filtering a space. A space key is not the same thing as a space ID.

### Space ID
Example:

```text
987654321
```

Use for operations that require the internal numeric space identifier.

### ARI
Example:

```text
ari:cloud:confluence:example-site-id:page/123456789
```

Use for direct fetch workflows when the tool supports ARI input.

## Rules

- Never guess the identifier type.
- Echo back the identifier you used in write operations.
- If the user gives a page URL, derive or confirm the site and page target before proceeding.
- If multiple spaces or pages match, ask for confirmation.

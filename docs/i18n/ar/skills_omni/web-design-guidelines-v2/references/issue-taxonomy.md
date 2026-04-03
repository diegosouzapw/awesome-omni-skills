# Issue Taxonomy (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇪🇸 [es](../../../../es/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇩🇪 [de](../../../../de/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇮🇹 [it](../../../../it/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇮🇳 [in](../../../../in/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇹🇭 [th](../../../../th/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇮🇩 [id](../../../../id/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇳🇴 [no](../../../../no/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇩🇰 [da](../../../../da/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇮🇱 [he](../../../../he/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-design-guidelines-v2/references/issue-taxonomy.md)

---


Use this taxonomy to keep findings consistent across PR reviews and UI audit packets.

## Severity

### High

Use when the issue causes a significant accessibility or usability failure, blocks task completion, breaks a core interaction, or creates substantial risk for many users.

Examples:
- keyboard trap
- inaccessible dialog focus behavior
- unlabeled required field in a core form
- invisible focus on all interactive controls

### Medium

Use when the issue degrades usability or accessibility meaningfully but does not usually block all users from completing the task.

Examples:
- error state not clearly associated with field
- dark-mode-only contrast regression
- overflow on narrow screens in secondary layouts
- tabs not restoring state as expected

### Low

Use when the issue is real but lower impact, localized, or primarily polish-oriented.

Examples:
- inconsistent spacing around helper text
- weak empty-state hierarchy
- a non-blocking icon contrast issue in one theme

## Confidence

### High confidence

Use when the issue is directly observable in code or behavior and the remediation direction is clear.

### Medium confidence

Use when the issue is likely but depends on runtime behavior, app context, or files not yet inspected.

### Low confidence

Use sparingly. Prefer asking for more files, states, or screenshots rather than guessing.

## Categories

- `semantics`
- `keyboard`
- `focus`
- `forms`
- `status-messaging`
- `dialog`
- `navigation-state`
- `responsive`
- `touch`
- `motion`
- `theming`
- `images`
- `content`
- `typography`
- `i18n`
- `anti-pattern`

## Impact framing

When helpful, note who is affected:

- keyboard users
- screen reader users
- low-vision users
- mobile users
- reduced-motion users
- dark-mode users
- all users under narrow screens or long content

## Routing guidance

Route out when:

- the main issue is performance metrics or rendering cost
- the main issue is SEO or indexing
- the main issue is runtime debugging
- the main issue is system-wide localization quality
- the user expects a formal accessibility program or compliance statement

## Preferred finding shape

```text
path/to/file.tsx:line [severity][category] Short description of the issue.
```

Optional extension when needed:

```text
path/to/file.tsx:line [medium][forms] Error text is shown visually but is not associated with the input. Affected state: submit with invalid email.
```

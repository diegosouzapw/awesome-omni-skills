# rerender-memo-with-default-value.md (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/rerender-memo-with-default-value.md)

---

---

title: Extract Default Non-primitive Parameter Value from Memoized Component to Constant
impact: MEDIUM
impactDescription: restores memoization by using a constant for default value
tags: rerender, memo, optimization

---

## Extract Default Non-primitive Parameter Value from Memoized Component to Constant

When memoized component has a default value for some non-primitive optional parameter, such as an array, function, or object, calling the component without that parameter results in broken memoization. This is because new value instances are created on every rerender, and they do not pass strict equality comparison in `memo()`.

To address this issue, extract the default value into a constant.

**Incorrect (`onClick` has different values on every rerender):**

```tsx
const UserAvatar = memo(function UserAvatar({ onClick = () => {} }: { onClick?: () => void }) {
  // ...
})

// Used without optional onClick
<UserAvatar />
```

**Correct (stable default value):**

```tsx
const NOOP = () => {};

const UserAvatar = memo(function UserAvatar({ onClick = NOOP }: { onClick?: () => void }) {
  // ...
})

// Used without optional onClick
<UserAvatar />
```

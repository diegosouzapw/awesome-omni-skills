# js-combine-iterations.md (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-combine-iterations.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-combine-iterations.md)

---

---
title: Combine Multiple Array Iterations
impact: LOW-MEDIUM
impactDescription: reduces iterations
tags: javascript, arrays, loops, performance
---

## Combine Multiple Array Iterations

Multiple `.filter()` or `.map()` calls iterate the array multiple times. Combine into one loop.

**Incorrect (3 iterations):**

```typescript
const admins = users.filter(u => u.isAdmin)
const testers = users.filter(u => u.isTester)
const inactive = users.filter(u => !u.isActive)
```

**Correct (1 iteration):**

```typescript
const admins: User[] = []
const testers: User[] = []
const inactive: User[] = []

for (const user of users) {
  if (user.isAdmin) admins.push(user)
  if (user.isTester) testers.push(user)
  if (!user.isActive) inactive.push(user)
}
```

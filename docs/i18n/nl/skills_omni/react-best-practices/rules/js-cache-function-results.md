# js-cache-function-results.md (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/js-cache-function-results.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/js-cache-function-results.md)

---

---
title: Cache Repeated Function Calls
impact: MEDIUM
impactDescription: avoid redundant computation
tags: javascript, cache, memoization, performance
---

## Cache Repeated Function Calls

Use a module-level Map to cache function results when the same function is called repeatedly with the same inputs during render.

**Incorrect (redundant computation):**

```typescript
function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map(project => {
        // slugify() called 100+ times for same project names
        const slug = slugify(project.name)
        
        return <ProjectCard key={project.id} slug={slug} />
      })}
    </div>
  )
}
```

**Correct (cached results):**

```typescript
// Module-level cache
const slugifyCache = new Map<string, string>()

function cachedSlugify(text: string): string {
  if (slugifyCache.has(text)) {
    return slugifyCache.get(text)!
  }
  const result = slugify(text)
  slugifyCache.set(text, result)
  return result
}

function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <div>
      {projects.map(project => {
        // Computed only once per unique project name
        const slug = cachedSlugify(project.name)
        
        return <ProjectCard key={project.id} slug={slug} />
      })}
    </div>
  )
}
```

**Simpler pattern for single-value functions:**

```typescript
let isLoggedInCache: boolean | null = null

function isLoggedIn(): boolean {
  if (isLoggedInCache !== null) {
    return isLoggedInCache
  }
  
  isLoggedInCache = document.cookie.includes('auth=')
  return isLoggedInCache
}

// Clear cache when auth changes
function onAuthChange() {
  isLoggedInCache = null
}
```

Use a Map (not a hook) so it works everywhere: utilities, event handlers, not just React components.

Reference: [How we made the Vercel Dashboard twice as fast](https://vercel.com/blog/how-we-made-the-vercel-dashboard-twice-as-fast)

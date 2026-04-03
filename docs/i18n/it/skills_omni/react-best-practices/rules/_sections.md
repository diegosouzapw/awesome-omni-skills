# Sections (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/rules/_sections.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/rules/_sections.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/rules/_sections.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/rules/_sections.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/rules/_sections.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/rules/_sections.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/rules/_sections.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/rules/_sections.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/rules/_sections.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/rules/_sections.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/rules/_sections.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/rules/_sections.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/rules/_sections.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/rules/_sections.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/rules/_sections.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/rules/_sections.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/rules/_sections.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/rules/_sections.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/rules/_sections.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/rules/_sections.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/rules/_sections.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/rules/_sections.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/rules/_sections.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/rules/_sections.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/rules/_sections.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/rules/_sections.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/rules/_sections.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/rules/_sections.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/rules/_sections.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/rules/_sections.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/rules/_sections.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/rules/_sections.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/rules/_sections.md)

---


This file defines all sections, their ordering, impact levels, and descriptions.
The section ID (in parentheses) is the filename prefix used to group rules.

---

## 1. Eliminating Waterfalls (async)

**Impact:** CRITICAL  
**Description:** Waterfalls are the #1 performance killer. Each sequential await adds full network latency. Eliminating them yields the largest gains.

## 2. Bundle Size Optimization (bundle)

**Impact:** CRITICAL  
**Description:** Reducing initial bundle size improves Time to Interactive and Largest Contentful Paint.

## 3. Server-Side Performance (server)

**Impact:** HIGH  
**Description:** Optimizing server-side rendering and data fetching eliminates server-side waterfalls and reduces response times.

## 4. Client-Side Data Fetching (client)

**Impact:** MEDIUM-HIGH  
**Description:** Automatic deduplication and efficient data fetching patterns reduce redundant network requests.

## 5. Re-render Optimization (rerender)

**Impact:** MEDIUM  
**Description:** Reducing unnecessary re-renders minimizes wasted computation and improves UI responsiveness.

## 6. Rendering Performance (rendering)

**Impact:** MEDIUM  
**Description:** Optimizing the rendering process reduces the work the browser needs to do.

## 7. JavaScript Performance (js)

**Impact:** LOW-MEDIUM  
**Description:** Micro-optimizations for hot paths can add up to meaningful improvements.

## 8. Advanced Patterns (advanced)

**Impact:** LOW  
**Description:** Advanced patterns for specific cases that require careful implementation.

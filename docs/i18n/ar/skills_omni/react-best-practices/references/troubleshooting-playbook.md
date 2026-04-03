# Troubleshooting Playbook for React and Next.js Performance (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/references/troubleshooting-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/references/troubleshooting-playbook.md)

---


## Hydration mismatch

**Typical causes**
- rendering time-dependent values on the server and client
- reading `window`, `document`, or storage during render
- using random values in initial markup
- rendering different trees between environments

**How to confirm**
- inspect console hydration warnings
- compare the initial server-rendered output with the first client render
- isolate any conditional logic that depends on browser-only state

**Safe fixes**
- render stable server markup first
- move browser-only enhancement into a Client Component effect
- use `suppressHydrationWarning` only when the mismatch is expected and narrow

## Sequential data-fetch waterfall

**Typical causes**
- awaiting one independent request before starting another
- nested components that fetch only after parent data resolves
- awaiting data too high in the tree before Suspense can help

**How to confirm**
- inspect fetch initiation order
- review component tree and async boundaries
- compare sequential `await` code to a parallelized version

**Safe fixes**
- start independent requests in parallel
- use Suspense to stream slower sections
- preserve sequential behavior only when there is a true data dependency

## Bundle regression

**Typical causes**
- moving `use client` higher in the tree
- importing large libraries into route-level client code
- barrel imports or broad utility imports
- always loading interactive code that is only sometimes needed

**How to confirm**
- run bundle analysis before and after the change
- inspect which routes or chunks gained weight
- trace the import path from the changed file

**Safe fixes**
- reduce client boundary scope
- switch to direct imports
- lazy load expensive modules with `next/dynamic`
- move logic back to Server Components where possible

## Suspense or streaming not helping

**Typical causes**
- data awaited before the Suspense boundary is reached
- slow work placed outside the streaming boundary
- fallback is too coarse or attached at the wrong level

**How to confirm**
- identify where promises start
- inspect which subtree is wrapped by Suspense
- compare actual boundary placement with the intended loading experience

**Safe fixes**
- start requests earlier
- wrap the slower subtree, not the entire route by default
- avoid hoisting blocking awaits above the boundary unnecessarily

## Production-only slowness

**Typical causes**
- third-party scripts
- region or backend latency
- incorrect cache assumptions
- server runtime bottlenecks not visible in local dev

**How to confirm**
- compare production Web Vitals and local behavior
- inspect deployment telemetry and observability data
- verify cache and revalidation behavior under production traffic

**Safe fixes**
- defer or conditionally load third-party scripts
- improve server-side fetch and cache strategy
- move expensive work off the critical request path
- document what is proven and what still needs production verification

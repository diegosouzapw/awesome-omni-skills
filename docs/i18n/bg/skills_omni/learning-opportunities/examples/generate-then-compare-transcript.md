# Generate Then Compare Transcript (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇪🇸 [es](../../../../es/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇫🇷 [fr](../../../../fr/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇩🇪 [de](../../../../de/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇮🇹 [it](../../../../it/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇷🇺 [ru](../../../../ru/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇯🇵 [ja](../../../../ja/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇰🇷 [ko](../../../../ko/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇸🇦 [ar](../../../../ar/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇮🇳 [hi](../../../../hi/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇮🇳 [in](../../../../in/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇹🇭 [th](../../../../th/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇻🇳 [vi](../../../../vi/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇮🇩 [id](../../../../id/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇲🇾 [ms](../../../../ms/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇳🇱 [nl](../../../../nl/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇵🇱 [pl](../../../../pl/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇸🇪 [sv](../../../../sv/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇳🇴 [no](../../../../no/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇩🇰 [da](../../../../da/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇫🇮 [fi](../../../../fi/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇵🇹 [pt](../../../../pt/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇷🇴 [ro](../../../../ro/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇭🇺 [hu](../../../../hu/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇧🇬 [bg](../../../../bg/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇸🇰 [sk](../../../../sk/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇮🇱 [he](../../../../he/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇵🇭 [phi](../../../../phi/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇨🇿 [cs](../../../../cs/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md) · 🇹🇷 [tr](../../../../tr/skills_omni/learning-opportunities/examples/generate-then-compare-transcript.md)

---


## Scenario

A route handler was refactored.

## Transcript

**Agent:** I refactored the handler to separate validation and persistence. Want a 2-minute learning exercise, or should I keep shipping?

**User:** Let's do it.

**Agent:** Before I show the final structure, how would you separate input validation from database writes in this handler?

**User:** I'd probably validate first and then call a repository function.

**Agent:** Yes — that's the core idea. The implementation does exactly that, but it also keeps mapping logic outside the repository so persistence stays narrow. That makes tests cleaner because validation failures never need database setup.

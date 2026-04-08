# 📖 Awesome Omni Skills — Documentation Hub (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Centralne źródło informacji na temat używania, współtworzenia i obsługi Awesome Omni Skills jako publicznego repozytorium umiejętności, wyselekcjonowanej platformy pochodnej najlepszych praktyk i współdzielonej platformy wykonawczej.**

Standardowe pliki społeczności znajdują się w katalogu głównym repozytorium:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Pakiet npm, repozytorium GitHub, wygenerowane dokumenty i punkty wejścia środowiska wykonawczego są teraz dostosowane do**Awesome Omni Skills**. Obecny stan wdrożenia: [Wdrożenie niesamowitych umiejętności Omni](operacje/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

## 📊 Status Snapshot

<!-- generated:docs-readme-status-snapshot:start -->
| Area | State | Details |
|:-----|:------|:--------|
| 🏗️ **Runtime** | ✅ Current | Unified CLI, Ink visual shell, API, MCP, and A2A all ship from the same package |
| 📦 **Catalog** | 📌 154 skills | 154 native catalog skills across 16 active categories, with 110 curated English derivatives in `skills_omni` and 7 fully backed bundles |
| 🎯 **Install** | ✅ Current | Guided TTY install, selective `--skill` and `--bundle`, custom path support, and discovery-driven install |
| 🌐 **API** | ✅ Current | Read-only registry API with auth, admin runtime, rate limiting, CORS/IP allowlists, maintenance mode, downloads, and interactive Swagger UI on `/docs` |
| 🔌 **MCP** | ✅ Current | `stdio` · `stream` · `sse`, local sidecar mode, 9 install-capable clients, 16 config-capable clients, 33 config targets, and 20 config profiles |
| 🤖 **A2A** | ✅ Current | Simple-first local runtime with JSON/SQLite durability, restart resume, SSE streaming, cancelation, external executor mode, and optional leased coordination when explicitly enabled |
| 🛡️ **Security** | ✅ Current | Static scanner, optional ClamAV/VirusTotal, signed release artifacts, archive checksums, and release-time verification |
| 📋 **Classification** | ✅ Current | Canonical taxonomy, maturity, semantic quality spread, best-practices spread, and security scoring |
| 📁 **Archives** | ✅ Current | Per-skill `.zip` and `.tar.gz` archives with SHA-256 checksum manifests |
| 🔐 **Signing** | ✅ Current | Detached signatures enforced on release tags; local install flows consume the same manifest and checksum metadata |
| 🧬 **Intake Flow** | ✅ Current | Native skills land under `skills/` through direct contributor PRs and reviewed repository-based external-import PRs; PR automation reviews them and proposes Omni-enhanced derivatives under `skills_omni/` |
<!-- generated:docs-readme-status-snapshot:end -->

## 🔭 Current Project State

Ścieżka podstawowa znajduje się teraz w aktywnym stanie projektu, a druga fala rozszerzenia kategorii jest już w katalogu. Projekt należy teraz czytać jako roboczy punkt odniesienia z opcjonalnymi ścieżkami przyszłej ekspansji:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Przyszła ekspansja pozostaje zamierzona:

- pogłębić „projektowanie”, „narzędzia”, „data-ai” i „uczenie maszynowe”
- unikaj ponownego otwierania uśpionych kategorii nienatywnych kodowo, dopóki bieżące ścieżki natywne nie będą miały większej głębi
- utrzymuj przy tym nienaruszoną ścieżkę przeglądu jakości i ulepszeń

Ta praca nad rozbudową jest teraz odzwierciedlona bezpośrednio w katalogu na żywo i dokumentach architektury:

- aktualny zrzut katalogu w [Catalog](CATALOG.md)
- środowisko wykonawcze i kształt artefaktu w [Analiza bazy kodu](architektura/CODEBASE-ANALYSIS.md)
- dalszy kierunek w [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Niesamowite Umiejętności Omni należy czytać jako trzy połączone powierzchnie:

| Powierzchnia | Co to jest | Jak to się zmienia |
|:------------|:---------------|:--------------|
| 📥 `umiejętności/` | Publiczne repozytorium umiejętności natywnych | PR-y bezpośrednich autorów i sprawdzone źródła zewnętrzne oparte na repozytorium |
| ✨ `umiejętności_omni/` | Wyselekcjonowana, ulepszona, oparta na najlepszych praktykach powierzchnia pochodna | Tylko prywatne PR-y towarzyszące wzmacniaczom |
| 🖥️ Powierzchnie wykonawcze | CLI, API, MCP i A2A w tym samym wygenerowanym katalogu | Kompiluj, sprawdzaj i wydawaj automatyzację |---

## 📌 Current Decisions

Te pytania dotyczące architektury nie są już w praktyce „otwarte” i są obecnie traktowane jako decyzje projektowe:

1.**Dystrybucja pozostaje najpierw manifestem plus podpisane archiwa**
   Manifest czytelny maszynowo pozostaje umową wykorzystywaną przez CLI, API, MCP i A2A. Podpisane archiwa poszczególnych umiejętności stanowią powierzchnię pobierania i wydawania umieszczoną na wierzchu tej umowy.
2.**Katalogi prywatne lub premium powinny ponownie wykorzystywać ten sam schemat manifestu**
   Uwierzytelnianie i zasady powinny być nakładane na siebie zewnętrznie, a nie poprzez rozwidlanie kształtu manifestu lub katalogu.
3.**Konfiguracja MCP powinna zbiegać się w kilku kanonicznych rodzinach eksportu**
   Awesome Omni Skills standaryzuje teraz wokół JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` i TOML `[mcp_servers]`, jednocześnie utrzymując autorów na zamówienie tylko tam, gdzie oficjalne dokumenty klienta wymagają innej struktury.

Decyzje te są zgodne z aktualną oficjalną dokumentacją MCP i klientem, w tym:

- oficjalne wskazówki dotyczące rejestracji i rozszerzeń MCP na `modelcontextprotocol.io`
- Dokumentacja OpenAI Docs MCP i Codex CLI na `developers.openai.com` i `platform.openai.com`
- Rozszerzenie VS Code MCP i dokumentacja produktu na `code.visualstudio.com`
- dokumentacja klienta dla Claude Code, Cursor, Continuous, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman i JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Doktor | Czego się nauczysz |
|:----|:--------------------------------|
| 📘 [Pierwsze kroki](users/GETTING-STARTED.md) | Zainstaluj, zweryfikuj i przywołaj swoją pierwszą umiejętność |
| 🧭 [Podręcznik użytkownika CLI](users/CLI-USER-GUIDE.md) | Pełne odwołanie do poleceń i wzorce użycia CLI w świecie rzeczywistym |
| 📗 [Przewodnik użytkowania](users/USAGE.md) | Polecenia CLI, tryby instalacji, polecenia środowiska wykonawczego i przepływy konfiguracji MCP |
| 📦 [Pakiety](users/BUNDLES.md) | Wyselekcjonowane pakiety i ich aktualna dostępność |
| 📚 [Katalog](CATALOG.md) | Automatycznie wygenerowany katalog opublikowanych umiejętności |
| 🔧 [Systemowy element Runbook](operacje/RUNBOOK.md) | Twórz, obsługuj, zabezpieczaj i rozwiązuj problemy ze środowiskiem wykonawczym |### 🏗️ If You Want to **Understand** the Runtime

| Doktor | Czego się nauczysz |
|:----|:--------------------------------|
| 🗂️ [Struktura projektu](PROJECT-STRUCTURE.md) | Kompletne odniesienie do katalogu i pliku dla monorepo |
| 🗺️ [Plan działania dla agenta](architektura/AGENT-NATIVE-ROADMAP.md) | Ewolucja architektury, zamknięte decyzje i pozostałe obszary ekspansji |
| 🧭 [Plan działania CLI UX](architektura/CLI-UX-ROADMAP.md) | Plan historyczny i obecny kształt CLI z przewodnikiem i wizualnym |
| 📐 [ADR-0001: Fundacja Workspace](architektura/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Podstawowe rozwiązanie monorepo i decyzja dotycząca wspólnego środowiska wykonawczego |
| 🔬 [Analiza bazy kodu](architektura/CODEBASE-ANALYSIS.md) | Bieżący skład środowiska wykonawczego, liczba i granice systemu |
| 🌐 [Katalog powierzchni API](specs/CATALOG-API.md) | Punkty końcowe HTTP, filtrowanie, zarządzanie i pobieranie |
| 🧩 [Instalator z przewodnikiem CLI](specs/CLI-GUIDED-INSTALLER.md) | Umowa behawioralna dla instalatora z przewodnikiem |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Powłoka wizualna Ink, model stanu i centrum usług |
| 🔌 [Lokalny wózek MCP](specs/LOCAL-MCP-SIDECAR.md) | Narzędzia obsługujące system plików, model listy dozwolonych i pisanie konfiguracji |
| 🧭 [Macierz wsparcia klienta](specs/CLIENT-SUPPORT-MATRIX.md) | Obsługiwani klienci CLI i IDE, autorzy, ręczne cele i odniesienia do źródeł |
| 📊 [Klasyfikacja umiejętności](specs/SKILL-CLASSIFICATION.md) | Taksonomia, heurystyka punktacji i artefakty metadanych |
| 🛡️ [Weryfikacja bezpieczeństwa](specs/SECURITY-VALIDATION.md) | Skanery, archiwa, podpisy i weryfikacja wersji |
| 📋 [Specyfikacja manifestu umiejętności](specs/SKILL-MANIFEST.md) | Format manifestu nadający się do odczytu maszynowego i umowa o zgodności |### 🤝 If You Want to **Contribute**

| Doktor | Czego się nauczysz |
|:----|:--------------------------------|
| 📝 [Przewodnik współautora](../CONTRIBUTING.md) | Przepływ pracy w repo i oczekiwania dotyczące żądań ściągnięcia |
| 🌍 [Źródła repozytorium](../REPOSITORY-SOURCES.md) | Jak zaproponować repozytorium nadrzędne za pośrednictwem zwykłego publicznego PR, teraz z obsługą gałęzi i ścieżek dla pierwszego repo |
| 🧾 [Przebieg pracy PR umiejętności](współautorzy/SKILL-PR-WORKFLOW.md) | Pobieranie natywne, automatyczne przetwarzanie wzmacniaczy, publikowanie „skills_omni/” i oczekiwania recenzentów |
| 📄 [Szablon umiejętności](contributors/SKILL-TEMPLATE.md) | Starter `SKILL.md` z aktualnym frontem i strukturą |
| 🔬 [Anatomia umiejętności](współautorzy/SKILL-ANATOMY.md) | Struktura i oczekiwania jakościowe wobec umiejętności |
| ✅ [Pasek jakości](współpracownicy/QUALITY-BAR.md) | Kryteria akceptacji repozytorium |
| 🏆 [Poradnik najlepszych wyników](współpracownicy/HIGH-SCORE-PLAYBOOK.md) | Co decyduje o wysokiej dojrzałości, jakości, najlepszych praktykach i wynikach bezpieczeństwa |---

## 🔌 Runtime Surfaces

### 🖥️ CLI

```bash
npx awesome-omni-skills                       # Guided install in TTY
npx awesome-omni-skills install --guided      # Forced guided install
npx awesome-omni-skills ui                    # Ink visual shell
npx awesome-omni-skills ui --text             # Text fallback UI
```

```bash
# 🔎 Discovery
npx awesome-omni-skills find figma
npx awesome-omni-skills find mcp --sort quality --min-quality 90 --min-security 95
npx awesome-omni-skills find figma --tool cursor --install --yes

# 📦 Installation
npx awesome-omni-skills install --guided --path ./my-skills --skill architecture
npx awesome-omni-skills --cursor --skill omni-figma
npx awesome-omni-skills --codex --bundle full-stack

# ⚙️ MCP config
npx awesome-omni-skills config-mcp --list-targets
npx awesome-omni-skills config-mcp --target continue-workspace --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target junie-project --transport stream --url http://127.0.0.1:3334/mcp
npx awesome-omni-skills config-mcp --target windsurf-user --transport sse --url http://127.0.0.1:3335/sse --write
npx awesome-omni-skills config-mcp --target copilot-user --transport stream --url http://127.0.0.1:3334/mcp --write

# 🏷️ Taxonomy
npx awesome-omni-skills recategorize
npx awesome-omni-skills recategorize --write

# 🔌 Services
npx awesome-omni-skills mcp stream --local
npx awesome-omni-skills api --port 3333
npx awesome-omni-skills a2a --port 3335

# 🧪 Validation
npx awesome-omni-skills smoke
npx awesome-omni-skills doctor
```

Aby zapoznać się z pełną powierzchnią poleceń użytkownika końcowego, użyj [Podręcznika użytkownika CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

Potok kompilacji emituje pliki do odczytu maszynowego, które sterują każdą powierzchnią uruchomieniową:

| Artefakt | Cel |
|:--------------|:------------|
| `metadane.json` | Podsumowanie walidacji i punktacji w całym repozytorium |
| `indeks_umiejętności.json` | Repo-lokalny znormalizowany indeks umiejętności |
| `dist/katalog.json` | Opublikowany katalog do wyszukiwania i wystawiania |
| `dist/bundles.json` | Definicje pakietów z dostępnością |
| `dist/manifests/<umiejętność>.json` | Manifest do odczytu maszynowego dla poszczególnych umiejętności |
| `dist/archives/<umiejętność>.zip` | Archiwum umiejętności (zip) |
| `dist/archives/<umiejętność>.tar.gz` | Archiwum umiejętności (tarball) |
| `dist/archives/<umiejętność>.checksums.txt` | Manifest sumy kontrolnej SHA-256 |

`dist/` pozostaje celowo zatwierdzone. Te wygenerowane artefakty są częścią umowy dotyczącej instalacji, interfejsu API, MCP, A2A, dymu i wydania.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Interfejs API rejestru tylko do odczytu dla umiejętności, pakietów, porównań, planowania instalacji i pobierania artefaktów.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Lokalny wózek boczny obsługuje teraz pierwszorzędne pisanie konfiguracji MCP dla:

- Claude Code
- Kursor
- Kontenery kodu VS i deweloperów
- Gemini CLI
- Antygrawitacja
- Kiro
- Kodeks CLI
- Kontynuuj
- Windsurfing
- Otwarty kod
- Cline
— Interfejs wiersza polecenia GitHub Copilot
- Kod Kilo
- Zeda
- Gęś### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Cykl życia zadań, przesyłanie strumieniowe, trwałość, ponowne uruchamianie odzyskiwania i prosta lokalna orkiestracja. Udostępnione wykonanie dzierżawione jest dostępne, jeśli jest jawnie włączone; Redis pozostaje zaawansowaną opcją hostowaną, a nie domyślną ścieżką lokalną.---

## 🗂️ Repository Map

| Ścieżka | Cel |
|:---------|:------------|
| 📂 `umiejętności/` | Kanoniczne umiejętności autorskie |
| 📖 `dokumenty/użytkownicy/` | Dokumentacja użytkownika końcowego |
| 🤝 `dokumenty/współpracownicy/` | Szablony i wytyczne dla autorów |
| 🏗️ `docs/architektura/` | Plan działania, ADR i analiza techniczna |
| 🔧 `dokumenty/operacje/` | Operacyjne elementy Runbook |
| 📋 `dokumenty/specyfikacje/` | Umowy wykonawcze, protokoły i artefakty |
| 📚 `docs/CATALOG.md` | Wygenerowany katalog umiejętności |
| 📦 `odległość/` | Wygenerowane artefakty do odczytu maszynowego |
| 🧠 `pakiety/rdzeń-katalogu/` | Wspólne środowisko wykonawcze katalogu z `ICatalogStorageAdapter` DI |
| 🌐 `pakiety/serwer-api/` | Interfejs API HTTP tylko do odczytu z interfejsem OpenAPI/Swagger w `/docs` |
| 🔌 `pakiety/serwer-mcp/` | Serwer MCP i lokalny wózek |
| 🤖 `pakiety/serwer-a2a/` | Serwer A2A i środowisko wykonawcze zadań |
| 🖥️ `pakiety/cli/` | Ujednolicone punkty wejścia CLI, logika instalacji i wizualny TUI Ink (natywny dla ESM) |
| ⚙️ `narzędzia/skrypty/` | Walidacja, generowanie, weryfikacja i testy |
| 🧪 `vitest.workspace.js` | Sprawdź konfigurację obszaru roboczego monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

Przebieg dymu potwierdza:

- ✅ walidacja umiejętności i generowanie metadanych
- ✅ narzędzia do rekategoryzacji taksonomii
- ✅ generowanie artefaktów katalogowych
- ✅ wygenerowana przecena katalogowa
- ✅ generowanie i weryfikacja archiwum
- ✅ starszy zestaw testów integracyjnych (twierdzenia Pythona PTY + Node TUI)
- ✅ Pakiet jednostek Vitest do oceniania, wyszukiwania i filtrowania rdzenia katalogu
- ✅`npm pack --dry-run`
- ✅ Bootowanie i kondycja API z interfejsem OpenAPI/Swagger na `/docs`
- ✅ Bootowanie MCP w `stdio`, `stream` i `sse`
- ✅ Rozruch A2A, odpytywanie, przesyłanie strumieniowe SSE, anulowanie i cykl życia konfiguracji push
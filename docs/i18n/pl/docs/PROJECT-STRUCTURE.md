# 🗂️ Project Structure (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Pełny katalog i odniesienia do plików dla monorepo Awesome Omni Skills.**---

## 📊 At a Glance

```text
awesome-omni-skills/
├── .github/                    # GitHub Actions and PR templates
├── .githooks/                  # Local Git hooks
├── data/                       # Static project data and bundle definitions
├── dist/                       # Generated runtime artifacts (committed)
├── docs/                       # All project documentation
├── packages/                   # Monorepo workspaces (runtime code)
├── skills/                     # Native skill catalog (154 skills)
├── skills_omni/                # Curated English derivatives (110 skills)
├── tools/                      # Build, validation, and test scripts
└── [root files]                # Package config, community files, licenses
```

---

## 📂 Directory Reference

### `skills/`

>**Natywny katalog umiejętności.**To jest główna publiczna powierzchnia projektu.

Zawiera**154**katalogów umiejętności, każdy z co najmniej podręcznikiem `SKILL.md`. Większe umiejętności mogą obejmować podkatalogi `agents/`, `references/`, `examples/`, `scripts/` i `assets/`.

Umiejętności docierają do nas dwiema drogami:
-**PR-y bezpośredniego współtwórcy**— ludzie bezpośrednio zgłaszają swoje umiejętności
-**Import zewnętrzny oparty na repozytorium**— zweryfikowano żądania PR `external-import/*` z repozytoriów wyższego szczebla

| Co zawiera | Przykład |
|:--------------------------------|:------------|
| `umiejętności/omni-figma/SKILL.md` | Umiejętność projektowania i kodowania Figma |
| `umiejętności/architektura/SKILL.md` | Przegląd architektury i umiejętność planowania |
| `skills/<nazwa>/metadata.json` | Automatycznie wygenerowana klasyfikacja i punktacja |---

### `skills_omni/`

>**Wyselekcjonowane ulepszone wersje pochodne dostępne wyłącznie w języku angielskim.**Obsługiwane przez prywatną firmę zajmującą się ulepszaniem.

Zawiera**110**ulepszonych katalogów umiejętności, które odzwierciedlają i ulepszają ich natywne odpowiedniki w `umiejętnościach/`. Powierzchnia ta**nie jest przeznaczona do bezpośredniego wkładu publicznego**– jest zasiedlana wyłącznie przez zautomatyzowany rurociąg wzmacniający.

Każda wersja pochodna zachowuje przypisanie do swojego rodzimego źródła, zapewniając jednocześnie wyższy standard redakcyjny, zawsze w języku angielskim.---

### `packages/`

>**Obszary robocze monorepo.**Tutaj znajduje się cały kod wykonawczy Node.js.

| Pakiet | npm Nazwa | Cel |
|:--------|:-------------|:------------|
| 📂 `pakiety/rdzeń-katalogu/` | `@omni-skills/catalog-core` | Środowisko wykonawcze katalogu współdzielonego z zastrzykiem zależności `ICatalogStorageAdapter`. Zapewnia logikę wyszukiwania, oceniania, porównywania, rekomendacji i planu instalacji wykorzystywaną przez wszystkie powierzchnie serwerów
| 📂 `pakiety/cli/` | (kosz pakietu głównego) | Ujednolicone punkty wejścia CLI, instalacja z przewodnikiem, wizualny TUI Ink, diagnostyka, kontrola dymu i programy uruchamiające usługi. Natywny dla ESM |
| 📂 `pakiety/cele instalacji/` | `@omni-skills/install-targets` | Rejestr 9 klientów z możliwością instalacji (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) z rozpoznawaniem ścieżek i mapowaniem flag |
| 📂 `pakiety/serwer-api/` | `@omni-skills/server-api` | Interfejs API katalogu HTTP tylko do odczytu z OpenAPI 3.1, interfejs Swagger w `/docs`, uwierzytelnianie, ograniczanie szybkości, listy dozwolonych CORS/IP, pobieranie i środowisko wykonawcze |
| 📂 `pakiety/serwer-mcp/` | `@omni-skills/server-mcp` | Serwer MCP obsługujący transporty `stdio`, `stream` i `sse`. Lokalny tryb poboczny dodaje narzędzia do instalacji/usuwania uwzględniające system plików oraz zapisywanie konfiguracji MCP uwzględniające klienta dla 16 klientów z możliwością konfiguracji |
| 📂 `pakiety/serwer-a2a/` | `@omni-skills/server-a2a` | Środowisko wykonawcze zadań A2A (Agent-Agent) z trwałością JSON/SQLite, ponownym uruchomieniem, przesyłaniem strumieniowym SSE, anulowaniem, trybem zewnętrznego modułu wykonawczego i opcjonalną dzierżawioną koordynacją |

Każdy pakiet ma swój własny katalog `package.json`, `src/` i (z wyjątkiem `install-targets`) plik `vitest.config.js` do testów jednostkowych.---

### `dist/`

>**Wygenerowane artefakty środowiska wykonawczego.**Celowo zaangażowane w kontrolę wersji.

Pliki te to dane wyjściowe do odczytu maszynowego wykorzystywane przez instalacje CLI, odpowiedzi API, narzędzia MCP, zadania A2A, testy dymne i weryfikację wersji. Są one regenerowane przez `npm run build`.

| Ścieżka | Cel |
|:---------|:------------|
| `dist/katalog.json` | Opublikowano katalog zawierający wszystkie 154 umiejętności, wyniki i metadane |
| `dist/bundles.json` | Definicje pakietów ze statusem dostępności członków |
| `dist/manifests/<umiejętność>.json` | Manifest do odczytu maszynowego dla poszczególnych umiejętności |
| `dist/archives/<umiejętność>.zip` | Archiwum ZIP dotyczące poszczególnych umiejętności do pobrania |
| `dist/archives/<umiejętność>.tar.gz` | Archiwum tar dla poszczególnych umiejętności do pobrania |
| `dist/archives/<umiejętność>.checksums.txt` | Manifest sumy kontrolnej SHA-256 na archiwum |
| `dist/archives/<umiejętność>.zip.sig` | Odłączony podpis (tylko w czasie wydania, gitignored) |
| `dist/release-notes.md` | Automatycznie wygenerowane informacje o wersji (gitignored) |
| `od/podpis/` | Pochodny materiał klucza publicznego (gitignored) |

>**Dlaczego zatwierdzono `dist/`?**Ponieważ jest to część umowy dotyczącej instalacji, API, MCP, A2A i wydania. Konsumenci oczekują, że te pliki będą obecne bez uruchamiania kompilacji.---

### `data/`

>**Statyczne pliki danych projektu.**Definicje kontrolowane przez źródło, które wpływają na zachowanie kompilacji i środowiska wykonawczego.

| Plik | Cel |
|:---------|:------------|
| `data/bundles.json` | Wyselekcjonowane definicje pakietów (listy członków umiejętności na pakiet) |
| `data/identity_projektu.json` | Kanoniczna tożsamość projektu: nazwa, opis, strona główna, tematy GitHub, definicje powierzchni uruchomieniowej i listy klientów |
| `data/status_projektu.json` | Wygenerowany obraz stanu metryk projektu: liczba umiejętności, wyniki, liczba klientów, liczba kategorii i rozkłady jakości |---

### `docs/`

>**Cała dokumentacja projektu.**Organizowane przez odbiorców.

| Ścieżka | Publiczność | Treść |
|:---------|:---------|:------------|
| `docs/README.md` | Wszyscy | Centrum dokumentacji — centralny indeks wszystkich dokumentów |
| `docs/CATALOG.md` | Użytkownicy | Automatycznie wygenerowany katalog zawierający wszystkie 154 umiejętności z punktacją |
| `docs/PROJECT-STRUCTURE.md` | Wszyscy | Ten plik — odnośnik do katalogu projektu |
| `docs/użytkownicy/` | Użytkownicy końcowi | Pierwsze kroki, podręcznik użytkownika CLI, podręcznik użytkowania, pakiety, element Runbook |
| `docs/contributors/` | Współautorzy | Anatomia umiejętności, szablon, przepływ pracy PR, pasek jakości, podręcznik najlepszych wyników |
| `dokumenty/specyfikacja/` | Architekci | API, wózek MCP, instalator CLI, powłoka wizualna, macierz obsługi klienta, klasyfikacja, bezpieczeństwo i specyfikacje manifestu |
| `docs/i18n/` | Użytkownicy międzynarodowi | Automatycznie wygenerowane tłumaczenia głównego pliku README w 32 językach |#### `docs/users/`

| Plik | Cel |
|:---------|:------------|
| `Pierwsze kroki.md` | Zainstaluj, zweryfikuj i wywołaj umiejętność w mniej niż 2 minuty |
| `CLI-USER-GUIDE.md` | Pełne odwołanie do poleceń ze scenariuszami krok po kroku |
| `USAGE.md` | Polecenia CLI, tryby instalacji, polecenia środowiska wykonawczego i przepływy konfiguracji MCP |
| `PAKIETY.md` | Wyselekcjonowane pakiety i ich aktualna dostępność |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | Raport o stanie migracji i akceptacji zmiany marki |
| `RUNBOOK.md` | Odniesienie operacyjne (również powiązane jako `docs/operacje/RUNBOOK.md`) |#### `docs/contributors/`

| Plik | Cel |
|:---------|:------------|
| `UMIEJĘTNOŚCI-ANATOMY.md` | Struktura i oczekiwania jakościowe wobec umiejętności |
| `SZABLON UMIEJĘTNOŚCI.md` | Starter `SKILL.md` z aktualnym frontem |
| `SKILL-PR-WORKFLOW.md` | Pobranie natywne, przetwarzanie wzmacniaczy i oczekiwania recenzentów |
| `QUALITY-BAR.md` | Kryteria akceptacji i aktualne standardy |
| `HIGH-SCORE-PLAYBOOK.md` | Co decyduje o wysokiej dojrzałości, jakości, najlepszych praktykach i wynikach bezpieczeństwa |#### `docs/specs/`

| Plik | Cel |
|:---------|:------------|
| `CATALOG-API.md` | Punkty końcowe HTTP, filtrowanie, zarządzanie i pobieranie |
| `CLI-GUIDED-INSTALLER.md` | Umowa behawioralna dla instalatora z przewodnikiem |
| `CLI-VISUAL-SHELL.md` | Powłoka wizualna Ink, model stanu i centrum usług |
| `LOCAL-MCP-SIDECAR.md` | Narzędzia obsługujące system plików, model listy dozwolonych i pisanie konfiguracji |
| `WSPARCIE KLIENTA-MATRIX.md` | Pełna referencja klienta i programu piszącego dla 9 klientów instalacyjnych i 16 konfiguracyjnych |
| `KLASYFIKACJA UMIEJĘTNOŚCI.md` | Taksonomia, heurystyka punktacji i artefakty metadanych |
| `SECURITY-VALIDATION.md` | Skanery, archiwa, podpisy i weryfikacja wersji |
| `MANIFESTU UMIEJĘTNOŚCI.md` | Format manifestu nadający się do odczytu maszynowego i umowa o zgodności |#### `docs/i18n/`

Zawiera**32**katalogi językowe, każdy z przetłumaczonym plikiem `README.md`. Języki obejmują: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Tłumaczenia są generowane automatycznie przez `npm run i18n:render` i sprawdzane przez `npm run i18n:check`.---

### `tools/`

>**Tworzenie, sprawdzanie i testowanie infrastruktury.**Głównie skrypty Pythona wykorzystywane przez polecenia `npm run`.#### `tools/scripts/`

| Skrypt | polecenie npm | Cel |
|:-------|:------------|:------------|
| `validate_skills.py` | `npm run valid` | Sprawdza wszystkie pliki `SKILL.md` i regeneruje `metadata.json` |
| `skill_metadata.py` | (importowane przez valid) | Rdzeń walidatora monolitycznego: parsowanie frontmatter, taksonomia, scoring, skanowanie bezpieczeństwa |
| `recategorize_skills.py` | `npm run taksonomia: raport` | Pokazuje lub stosuje normalizację kategorii kanonicznej |
| `generuj_indeks.py` | `npm indeks uruchomienia` | Generuje manifesty, archiwa i sumy kontrolne `dist/`
| `build_catalog.js` | `npm katalog uruchamiania` | Generuje `docs/CATALOG.md` z `skills_index.json` |
| `generate_project_status.py` | `npm uruchom projekt: status` | Generuje plik `data/project_status.json` z bieżącymi metrykami |
| `render_project_docs.py` | `npm run docs:render` | Aktualizuje wygenerowane bloki w plikach README, dokumentach i CONTRIBUTING |
| `generuj_i18n.py` | `npm uruchom i18n:render` | Generuje lub aktualizuje tłumaczenia `docs/i18n/` |
| `źródła_repozytorium.py` | `npm uruchom rejestr:render` | Renderuje i sprawdza poprawność `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm uruchom tożsamość: sprawdź` | Weryfikuje pakiet.json, README i wyrównanie tożsamości repo |
| `verify_archives.py` | `npm uruchom weryfikację:archiwa` | Weryfikuje integralność archiwum i opcjonalne podpisy |
| `verify_security_scanners.py` | `npm uruchom weryfikację:skanery` | Potwierdza pokrycie skanera w wygenerowanych metadanych |
| `generate_release_notes.py` | `npm run release:notes` | Generuje niestandardowe informacje o wydaniu na podstawie metadanych i historii git |
| `next_release_version.py` | `npm run release:next-version` | Oblicza następną wersję serwera przy użyciu zasady patch-to-10 |
| `sync_repo_version.py` | `npm run release:sync-version` | Synchronizuje wersję między pakietami obszaru roboczego |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | Drukuje lub stosuje opis, stronę główną i tematy GitHub |
| `validate_contribution_scope.py` | (CI) | Weryfikuje granice zakresu wkładu PR |
| `install_githooks.js` | `npm uruchom hooki:install` | Instaluje lokalny hak przed zatwierdzeniem |#### `tools/scripts/tests/`

Zestawy testów integracyjnych i TUI wykorzystywane przez `npm test`:
- Starsze testy Pythona PTY
- Asercje węzła TUI
- Koordynator programu testowego---

### `.github/`

>**Akcje GitHub i szablony społeczności.**#### `.github/workflows/`

| Przepływ pracy | Wyzwalacz | Cel |
|:--------------|:------------|:------------|
| `validate.yml` | Naciśnij/PR do „głównego” | Kompiluj, testuj i potwierdzaj, że wygenerowane artefakty zostały zatwierdzone |
| `release.yml` | Tag push `v*` lub ręczna wysyłka | Skanery wersji Release, podpisywanie, publikacja npm, wydanie GitHub |
| `auto-release-skill-merges.yml` | Połącz z `głównym` dotykając `umiejętności/*` | Automatyczne podbijanie, tagowanie i wydawanie wersji w przypadku zmian umiejętności |
| `enhance-pr-skills.yml` | PR ze zmianami umiejętności | Prowadzi prywatny rurociąg ulepszający i publikuje towarzyszący PR |
| `sync-repository-metadata.yml` | Zmiany w `data/project_identity.json` | Synchronizuje opis, stronę główną i tematy GitHub |#### `.github/pull_request_template.md`

Domyślny szablon PR z listą kontrolną dotyczącą wkładu w zakresie umiejętności i czasu wykonania.---

### `.githooks/`

>**Lokalne haki Git.**Instalowane poprzez `npm run hooks:install`.

| Plik | Cel |
|:---------|:------------|
| `wstępne zatwierdzenie` | Uruchamia podstawową weryfikację przed zezwoleniem na zatwierdzenie |---

## 📄 Root Files Reference

| Plik | Cel |
|:---------|:------------|
| `README.md` | Projekt dostępny publicznie README z banerem bohatera, przewodnikiem instalacji i pełnym przeglądem funkcji |
| `WSPÓŁPRACA.md` | Przewodnik dla współtwórców zawierający informacje dotyczące umiejętności, czasu działania i przepływu pracy |
| `SECURITY.md` | Polityka bezpieczeństwa, zakres i instrukcje raportowania podatności |
| `CODE_OF_CONDUCT.md` | Umowa Współtwórcy, wersja 2.1 |
| `ŹRÓDŁA-REPOZYTORIA.md` | Rejestr publiczny proponowanych składowisk wydobycia do poboru zewnętrznego |
| `LICENCJA` | Licencja MIT (kod i narzędzia) |
| `TREŚĆ LICENCJI` | CC BY 4.0 (dokumentacja i zawartość umiejętności) |
| `pakiet.json` | Główny pakiet monorepo: skrypty, zależności, punkty wejścia bin, pliki i konfiguracja obszaru roboczego |
| `blokada pakietu.json` | plik blokady npm (wygenerowany automatycznie) |
| `metadane.json` | Podsumowanie walidacji i wyników w całym repozytorium (wygenerowane przez `npm run valid`) |
| `indeks_umiejętności.json` | Znormalizowany indeks umiejętności repo-lokalny (wygenerowany przez `npm run valid`) |
| `.gitignore` | Wyłączenia kontroli wersji — w szczególności `dist/`**nie**są ignorowane |
| `.npmignore` | Wyklucza `__pycache__/` i `*.pyc` z archiwum npm |
| `.wersja-węzła` | Przypinanie wersji Node.js: `22` |
| `.nvmrc` | przypinanie wersji nvm: `22` (kopia lustrzana `.node-version`) |
| `vitest.config.js` | Konfiguracja root Vitest odwołująca się do wszystkich 5 konfiguracji testowych na poziomie pakietu |
| `vitest.workspace.js` | Sprawdź definicję obszaru roboczego w celu wykonania testu obsługującego monorepo |---

## 🔄 Build Pipeline Flow

```text
npm run validate          →  metadata.json, skills_index.json, per-skill metadata.json
npm run index             →  dist/manifests/, dist/archives/, dist/archives/*.checksums.txt
npm run catalog           →  docs/CATALOG.md
npm run project:status    →  data/project_status.json
npm run docs:render       →  updates generated blocks in README.md, docs/README.md, CONTRIBUTING.md
npm run registry:render   →  updates REPOSITORY-SOURCES.md status block
npm run i18n:render       →  docs/i18n/*/README.md (32 languages)
```

Wszystkie powyższe działają sekwencyjnie w ramach `npm run build`.
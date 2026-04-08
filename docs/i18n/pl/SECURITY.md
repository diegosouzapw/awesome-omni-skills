# 🛡️ Security Policy (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Jeśli odkryjesz problem dotyczący bezpieczeństwa w Awesome Omni Skills, nie otwieraj najpierw problemu publicznego.**

Prosimy o zgłaszanie za pośrednictwem jednego z poniższych kanałów prywatnych:

| Kanał | Jak |
|:------------|:----|
| 🔒 Poradnik dotyczący bezpieczeństwa GitHub | [Otwórz prywatną poradę](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Bezpośredni kontakt | Skontaktuj się bezpośrednio z opiekunami |### 📋 Include in Your Report

- 📁 Dotknięty komponent lub ścieżka
- 🔄 Etapy reprodukcji
- ⚠️Ocena wpływu
- 🧪 Wszelkie materiały potwierdzające koncepcję potrzebne do zweryfikowania problemu

>**⏱️ Naszym celem jest potwierdzanie zgłoszeń w ciągu 48 godzin**i ustalanie priorytetów poprawek w zależności od ich wpływu.---

## 🎯 Scope

Ta zasada obejmuje środowisko wykonawcze i zawartość repozytorium:

| Składnik | Ścieżka |
|:---------------|:-----|
| 🖥️ CLI i instalator | `pakiety/cli/` |
| 📚 Wspólne środowisko wykonawcze katalogu | `pakiety/rdzeń-katalogu/` |
| 🔌 Zainstaluj cele | `pakiety/cele instalacji/` |
| ⚙️ Budowanie i sprawdzanie skryptów | `narzędzia/skrypty/` |
| 📦 Wygenerowane artefakty katalogu | `odległość/` |
| 🌐 Pakiety API, MCP i A2A | `pakiety/serwer-api/` · `pakiety/serwer-mcp/` · `pakiety/serwer-a2a/` |
| 🧠 Treść umiejętności | `umiejętności/` — zwłaszcza polecenia powłoki, dostęp do sieci, przepływ danych uwierzytelniających lub wskazówki dotyczące bezpieczeństwa |---

## 🔐 Current Security Model

Repozytorium opiera się na następujących mechanizmach bezpieczeństwa:### 🧠 Skill-Level Controls

| Kontrola | Opis |
|:------------|:---------------|
| 🏷️ Pole ryzyka | Metadane umiejętności obejmują zadeklarowany poziom „ryzyka” |
| 📊 Punktacja | Walidacja oblicza dojrzałość, najlepsze praktyki, jakość i wyniki bezpieczeństwa
| 🔍Skaner statyczny | Sprawdza plik `SKILL.md`, spakowane pliki i skrypty pomocnicze oraz blokuje wprowadzenie krytycznych wyników do katalogu publicznego |
| 🦠 Wydaj weryfikację złośliwego oprogramowania | Opublikowane wydania są przed publikacją weryfikowane zarówno za pomocą ClamAV, jak i VirusTotal### 🚫 Hard Content Blocks

Repozytorium publiczne nie akceptuje umiejętności, które powodują naruszenie krytycznej bramy bezpieczeństwa. Obecne twarde blokery obejmują:

- zdalna zawartość przesyłana bezpośrednio do wykonania powłoki
- instrukcje próbujące ujawnić podpowiedzi, tajemnice lub ukryty kontekst środowiska wykonawczego

Kiedy walidator znajdzie jeden z tych wzorców, umiejętność nie trafia do katalogu publicznego. W przypadku przyjmowania z repozytorium zewnętrznego ważne rodzeństwo może nadal być kontynuowane, natomiast zablokowane umiejętności są wykluczane i zgłaszane osobno.### 🖥️ Runtime Controls

| Kontrola | Opis |
|:------------|:---------------|
| 📁 Bezpieczeństwo na ścieżce | Zainstaluj przepływy, użyj kontroli bezpieczeństwa ścieżki |
| 🔒 Lista dozwolonych pisze | Lokalne zapisy boczne MCP ograniczone przez listę dozwolonych |
| 👁️ Domyślne ustawienia próbne | Narzędzia zorientowane na zapis domyślnie pracują na sucho, chyba że zostaną wyraźnie wyłączone |
| 🔐 Autoryzacja i limity | Autoryzacja nośnika/klucza API, autoryzacja środowiska wykonawczego administratora, ograniczanie szybkości, listy dozwolonych CORS/IP |
| 📋 Audyt | Rejestrowanie inspekcji, tryb konserwacji i identyfikatory żądań |### 📦 Release Controls

| Kontrola | Opis |
|:------------|:---------------|
| ✅ Manifest sumy kontrolnej | Sumy kontrolne SHA-256 dla wygenerowanych archiwów |
| ✍️ Podpisy | Odłączona weryfikacja podpisu w CI przed publikacją |
| 🦠 Brama podwójnego skanera | Zarówno ClamAV, jak i VirusTotal muszą poprawnie ukończyć publikację wydania |
| 🧪 Kontrole dymu | Ćwicz dostarczone powierzchnie wykonawcze przed wydaniem |---

## 🔮 What Is Still Open

> Główne pozostałe prace związane z bezpieczeństwem to**nie**wzmocnienie bazowe. Otwarte elementy to:

| Powierzchnia | Stan |
|:---------|:-------|
| 🏢 Zarządzanie przedsiębiorstwem | Tożsamość zewnętrzna, zasady bramy i integracja WAF powyżej bieżących kontroli w procesie |
| 🔌 Pisarze klienta MCP | Szersi autorzy tylko wtedy, gdy publiczne kontrakty konfiguracyjne są wystarczająco stabilne |
| 📊 Udoskonalenie skanera | Ciągłe udoskonalanie, aby wyjątkowe umiejętności pozostały wyraźnie oddzielone od zaledwie dobrze ustrukturyzowanych |---

## ⚠️ Risk Levels in Skills

Każda umiejętność deklaruje jeden z następujących poziomów „ryzyka”:

| Poziom ryzyka | Znaczenie |
|:---------------|:------------|
| 🟢 `bezpieczny` | Nie przewiduje się żadnych działań niszczących |
| 🟡 „Uwaga” | Może modyfikować pliki lub wchodzić w interakcję z systemami zewnętrznymi |
| 🔴 `ofensywny` | Testowanie bezpieczeństwa lub kontradyktoryjne przepływy pracy wymagające wyraźnej autoryzacji |
| ⛔ `krytyczny` | Operacje o dużym wpływie lub na poziomie systemu |---

## 📋 Disclosure Notes

Ponieważ Awesome Omni Skills zawiera wykonywalne pomoce, lokalne narzędzia obsługujące system plików i narzędzia piszące konfigurację specyficzne dla klienta, te klasy luk w zabezpieczeniach powinny być traktowane jako**wysoki priorytet**, nawet jeśli wydają się „tylko lokalne”:

| Kategoria | Przykłady |
|:--------------|:-------------|
| 📁 Przemierzanie ścieżki | Ucieczka z katalogu poprzez ścieżkę instalacji umiejętności lub konfiguracji |
| 🔗 Bezpieczeństwo dowiązań symbolicznych | Dowiązanie symboliczne następujące podczas instalacji lub rozpakowywania archiwum |
| 🖥️ Wykonanie polecenia | Wstrzykiwanie dowolnych poleceń poprzez treść umiejętności lub skrypty |
| 📦 Weryfikacja archiwum | Ominięcie sumy kontrolnej lub weryfikacji podpisu |
| 🔓 Obejście uwierzytelnienia | Ograniczanie szybkości lub obejście uwierzytelniania w API/MCP |
| 🔌 Pominięcie listy dozwolonych | Obejście lokalnej listy dozwolonych wózków bocznych |
| 🦠 Unikanie skanera | Klasy fałszywie ujemne w skanerach statycznych lub zewnętrznych |
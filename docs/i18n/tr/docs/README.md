# 📖 Awesome Omni Skills — Documentation Hub (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Harika Omni Skills'i halka açık bir beceri deposu, seçilmiş en iyi uygulama türev yüzeyi ve paylaşılan bir çalışma zamanı platformu olarak kullanmak, katkıda bulunmak ve işletmek için merkezi referans.**

Standart topluluk dosyaları depo kökünde bulunur:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> Npm paketi, GitHub deposu, oluşturulan belgeler ve çalışma zamanı giriş noktaları artık**Awesome Omni Skills**ile uyumlu hale getirildi. Mevcut kullanıma sunma durumu: [Awesome Omni Skills'in kullanıma sunulması](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

Temel yolu artık aktif proje durumunda yaşıyor ve ikinci kategori genişletme dalgası zaten katalogda yer alıyor. Proje artık isteğe bağlı gelecekteki genişleme yolları ile birlikte bir çalışma temeli olarak okunmalıdır:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

Gelecekteki genişleme kasıtlı olmaya devam ediyor:

- "tasarım", "araçlar", "veri-ai" ve "makine öğrenimi"ni derinleştirmek
- mevcut koda özgü parçalar daha güçlü bir derinliğe sahip olana kadar, hareketsiz olan, yerel olmayan kod kategorilerini yeniden açmaktan kaçının
- bunu yaparken kalite zeminini ve geliştirici inceleme yolunu sağlam tutun

Bu genişletme çalışması artık doğrudan canlı katalog ve mimari belgelerine yansıtılıyor:

- [Katalog](CATALOG.md) içindeki mevcut kataloğun anlık görüntüsü
- [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md) içindeki çalışma zamanı ve yapı şekli
- [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md) içindeki ileri yön## 🔀 Repository Surfaces

Muhteşem Omni Becerileri birbirine bağlı üç yüzey olarak okunmalıdır:

| Yüzey | Nedir | Nasıl değişiyor |
|:-----------|:---------------|:---------------|
| 📥 `beceriler/` | Kamu yerel beceri deposu | Doğrudan katkıda bulunanların PR'leri ve gözden geçirilmiş veri havuzu bazlı harici alımlar |
| ✨ `beceri_omni/' | Seçilmiş, geliştirilmiş en iyi uygulamalı türev yüzeyi | Yalnızca özel geliştirici tamamlayıcı PR'ler |
| 🖥️ Çalışma zamanı yüzeyleri | Aynı oluşturulan katalog üzerinden CLI, API, MCP ve A2A | Otomasyonu oluşturun, doğrulayın ve yayınlayın |---

## 📌 Current Decisions

Bu mimari sorular artık pratikte "açık" değil ve artık proje kararları olarak değerlendiriliyor:

1.**Dağıtım, bildirim öncelikli ve imzalı arşivler olarak kalır**
   Makine tarafından okunabilen bildirim, CLI, API, MCP ve A2A tarafından tüketilen sözleşme olmaya devam ediyor. Beceri başına imzalanan arşivler, söz konusu sözleşmenin üzerinde yer alan indirme ve yayınlama yüzeyidir.
2.**Özel veya premium kataloglar aynı bildirim şemasını yeniden kullanmalıdır**
   Kimlik doğrulama ve politika, bildirim veya katalog şeklini çatallayarak değil, harici olarak katmanlandırılmalıdır.
3.**MCP yapılandırması birkaç standart dışa aktarma ailesinde birleşmelidir**
   Awesome Omni Skills artık JSON "mcpServers", JSON "sunucuları", JSON "context_servers", YAML "mcpServers", YAML "uzantıları" ve TOML "[mcp_servers]' etrafında standartlaşıyor ve özel yazarları yalnızca resmi müşteri belgelerinin farklı bir yapı gerektirdiği yerlerde tutuyor.

Bu kararlar, aşağıdakiler de dahil olmak üzere mevcut resmi MCP ve müşteri belgeleriyle uyumludur:

- 'modelcontextprotocol.io' adresinde resmi MCP Kayıt Defteri ve uzantı desteği kılavuzu
- "developers.openai.com" ve "platform.openai.com" adreslerinde OpenAI Docs MCP ve Codex CLI belgeleri
- `code.visualstudio.com` adresinde VS Code MCP uzantısı ve ürün belgeleri
- Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman ve JetBrains AI Assistant için istemci belgeleri---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Belge | Ne Öğreneceksiniz |
|:----|:----|
| 📘 [Başlarken](users/GETTING-STARTED.md) | İlk becerinizi yükleyin, doğrulayın ve etkinleştirin |
| 🧭 [CLI Kullanıcı Kılavuzu](users/CLI-USER-GUIDE.md) | Tam komut referansı ve gerçek dünyadaki CLI kullanım kalıpları |
| 📗 [Kullanım Kılavuzu](users/USAGE.md) | CLI komutları, kurulum modları, çalışma zamanı komutları ve MCP yapılandırma akışları |
| 📦 [Paketler](kullanıcılar/BUNDLES.md) | Seçilmiş paketler ve mevcut kullanılabilirlikleri |
| 📚 [Katalog](CATALOG.md) | Yayınlanmış becerilerin otomatik oluşturulan kataloğu |
| 🔧 [Sistem Runbook'u](işlemler/RUNBOOK.md) | Çalışma zamanını oluşturun, sunun, güvenliğini sağlayın ve sorunlarını giderin |### 🏗️ If You Want to **Understand** the Runtime

| Belge | Ne Öğreneceksiniz |
|:----|:----|
| 🗂️ [Proje Yapısı](PROJE-YAPI.md) | Monorepo için eksiksiz dizin ve dosya referansı |
| 🗺️ [Ajan-Yerel Yol Haritası](architecture/AGENT-NATIVE-ROADMAP.md) | Mimarinin gelişimi, kapalı kararlar ve kalan genişleme alanları |
| 🧭 [CLI UX Yol Haritası](architecture/CLI-UX-ROADMAP.md) | Kılavuzlu ve görsel CLI'nin tarihsel planı ve mevcut şekli |
| 📐 [ADR-0001: Çalışma Alanı Vakfı](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Çekirdek monorepo ve paylaşılan çalışma zamanı kararı |
| 🔬 [Kod Tabanı Analizi](architecture/CODEBASE-ANALYSIS.md) | Geçerli çalışma zamanı bileşimi, sayımlar ve sistem sınırları |
| 🌐 [Katalog API Yüzeyi](specs/CATALOG-API.md) | HTTP uç noktaları, filtreleme, yönetişim ve indirmeler |
| 🧩 [CLI Kılavuzlu Yükleyici](specs/CLI-GUIDED-INSTALLER.md) | Rehberli kurulumcu için davranışsal sözleşme |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Mürekkep görsel kabuğu, durum modeli ve hizmet merkezi |
| 🔌 [Yerel MCP Sepeti](teknik özellikler/LOCAL-MCP-SIDECAR.md) | Dosya sistemini tanıyan araçlar, izin verilenler listesi modeli ve yapılandırma yazma |
| 🧭 [Müşteri Desteği Matrisi](specs/CLIENT-SUPPORT-MATRIX.md) | Desteklenen CLI ve IDE istemcileri, yazıcılar, manuel hedefler ve kaynak referansları |
| 📊 [Beceri Sınıflandırması](specs/SKILL-CLASSIFICATION.md) | Sınıflandırma, puanlama buluşsal yöntemi ve meta veri yapıları |
| 🛡️ [Güvenlik Doğrulaması](specs/SECURITY-VALIDATION.md) | Tarayıcılar, arşivler, imzalar ve sürüm doğrulama |
| 📋 [Beceri Bildirimi Spesifikasyonu](specs/SKILL-MANIFEST.md) | Makine tarafından okunabilen manifest formatı ve uyumluluk sözleşmesi |### 🤝 If You Want to **Contribute**

| Belge | Ne Öğreneceksiniz |
|:----|:----|
| 📝 [Katkıda Bulunma Kılavuzu](../CONTRIBUTING.md) | Repo iş akışı ve çekme isteği beklentileri |
| 🌍 [Depo Kaynakları](../REPOSITORY-SOURCES.md) | Artık repo-first 'otomatik' dal ve yol desteğiyle normal bir genel halkla ilişkiler yoluyla bir yukarı akış deposu nasıl önerilir?
| 🧾 [Beceri Halkla İlişkiler İş Akışı](katkıda bulunanlar/SKILL-PR-WORKFLOW.md) | Yerel alım, otomatik geliştirici işleme, `skills_omni/` yayınlama ve inceleyenin beklentileri |
| 📄 [Beceri Şablonu](katkıda bulunanlar/SKILL-TEMPLATE.md) | Mevcut ön madde ve yapıya sahip başlangıç ​​`SKILL.md` |
| 🔬 [Beceri Anatomisi](katkıda bulunanlar/SKILL-ANATOMY.md) | Bir becerinin yapısı ve kalite beklentileri |
| ✅ [Kalite Çubuğu](katkıda bulunanlar/QUALITY-BAR.md) | Depo için kabul kriterleri |
| 🏆 [Yüksek Skorlu Başucu Kitabı](katkıda bulunanlar/HIGH-SCORE-PLAYBOOK.md) | Yüksek olgunluğu, kaliteyi, en iyi uygulamaları ve güvenlik puanlarını yönlendiren şey nedir |---

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

Son kullanıcı komut yüzeyinin tamamı için [CLI Kullanıcı Kılavuzunu](users/CLI-USER-GUIDE.md) kullanın.### 📁 Generated Artifacts

Derleme işlem hattı, her çalışma zamanı yüzeyini yönlendiren, makine tarafından okunabilen dosyaları yayar:

| eser | Amaç |
|:-----------|:-----------|
| 'metadata.json' | Havuz çapında doğrulama ve puan özeti |
| 'skills_index.json' | Repo-yerel normalleştirilmiş beceri endeksi |
| 'dist/catalog.json' | Arama ve listeleme için yayınlanmış katalog |
| 'dist/bundles.json' | Kullanılabilirlik ile birlikte paket tanımları |
| `dist/manifests/<skill>.json` | Beceri başına makine tarafından okunabilen bildirim |
| 'dist/archives/<skill>.zip' | Beceri arşivi (zip) |
| `dist/archives/<skill>.tar.gz` | Beceri arşivi (tarball) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 sağlama toplamı bildirimi |

'dist/' bilerek bağlı kalıyor. Oluşturulan bu yapılar kurulum, API, MCP, A2A, duman ve sürüm sözleşmesinin bir parçasıdır.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

Beceriler, paketler, karşılaştırma, kurulum planlaması ve yapı indirmeleri için salt okunur kayıt API'si.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

Yerel sepet artık aşağıdakiler için birinci sınıf MCP yapılandırma yazımını destekliyor:

- Claude Kodu
- İmleç
- VS Code ve Geliştirme Konteynerleri
- İkizler CLI
- Yer çekimine karşı
- Kiro
- Kodeks CLI
- Devam et
- Rüzgar sörfü
- Açık Kod
- Klinik
- GitHub Copilot CLI
- Kilo Kodu
-Zed
- Kaz### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Görev yaşam döngüsü, akış, kalıcılık, yeniden başlatma kurtarma ve basit yerel düzenleme. Paylaşılan kiralık yürütme, açıkça etkinleştirildiğinde kullanılabilir; Redis, varsayılan yerel yol değil, gelişmiş bir barındırılan seçenek olarak kalır.---

## 🗂️ Repository Map

| Yol | Amaç |
|:-----|:-----------|
| 📂 `beceriler/` | Kanonik yazarlık becerileri |
| 📖 `dokümanlar/kullanıcılar/` | Son kullanıcı belgeleri |
| 🤝 'belgeler/katkıda bulunanlar/' | Katılımcı şablonları ve kılavuzu |
| 🏗️ `docs/architecture/` | Yol Haritası, ADR'ler ve teknik analiz |
| 🔧 `belgeler/işlemler/' | Operasyonel runbook'lar |
| 📋 `belgeler/özellikler/` | Çalışma zamanı, protokol ve yapı sözleşmeleri |
| 📚 `docs/CATALOG.md` | Beceri kataloğu oluşturuldu |
| 📦`dağıt/` | Makine tarafından okunabilen eserler oluşturuldu |
| 🧠 `paketler/katalog-çekirdek/' | `ICatalogStorageAdapter` DI ile paylaşılan katalog çalışma zamanı |
| 🌐 `paketler/sunucu-api/' | '/docs' üzerinde OpenAPI/Swagger kullanıcı arayüzüne sahip salt okunur HTTP API'si |
| 🔌 `paketler/sunucu-mcp/' | MCP sunucusu ve yerel sepet |
| 🤖 `paketler/sunucu-a2a/` | A2A sunucusu ve görev çalışma zamanı |
| 🖥️ `paketler/cli/' | Birleşik CLI giriş noktaları, kurulum mantığı ve Mürekkep görseli TUI (ESM-yerel) |
| ⚙️ `araçlar/komut dosyaları/` | Doğrulama, oluşturma, doğrulama ve testler |
| 🧪 `vitest.workspace.js` | Vitest monorepo çalışma alanı yapılandırması |---

## 🧪 Release Validation

```bash
npm run smoke
```

Duman çalışması şunları doğrular:

- ✅ beceri doğrulama ve meta veri oluşturma
- ✅ sınıflandırma yeniden sınıflandırma araçları
- ✅ katalog eseri oluşturma
- ✅ oluşturulan katalog işaretlemesi
- ✅ arşiv oluşturma ve doğrulama
- ✅ eski entegrasyon test paketi (Python PTY + Node TUI iddiaları)
- ✅ Katalog esaslı puanlama, arama ve filtreleme için Vitest birim paketi
- ✅ `npm paketi --dry-run'
- ✅ `/docs' üzerinde OpenAPI/Swagger kullanıcı arayüzü ile API önyüklemesi ve sağlığı
- ✅ 'stdio', 'stream' ve 'sse'de MCP önyüklemesi
- ✅ A2A önyükleme, yoklama, SSE akışı, iptal ve push-config yaşam döngüsü
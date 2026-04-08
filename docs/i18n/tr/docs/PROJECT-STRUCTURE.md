# 🗂️ Project Structure (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Harika Omni Skills monorepo'su için eksiksiz dizin ve dosya referansı.**---

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

>**Yerel beceri kataloğu.**Bu, projenin birincil genel içerik yüzeyidir.

Her biri en az bir `SKILL.md` taktik kitabına sahip**154**beceri dizini içerir. Daha büyük beceriler "aracılar/", "referanslar/", "örnekler/", "komut dosyaları/" ve "varlıklar/" alt dizinlerini içerebilir.

Beceriler iki giriş yolundan gelir:
-**Doğrudan katkıda bulunan PR'ler**— insanlar becerileri doğrudan gönderir
-**Depo tabanlı harici içe aktarmalar**— yukarı akış depolarından "harici-içe aktarma/*" PR'leri inceledi

| Ne içerir | Örnek |
|:----------------||:----------|
| `beceriler/omni-figma/SKILL.md` | Figma tasarımdan koda dönüştürme becerisi |
| `beceriler/mimari/SKILL.md' | Mimari inceleme ve planlama becerisi |
| `skills/<name>/metadata.json` | Otomatik oluşturulan sınıflandırma ve puanlama |---

### `skills_omni/`

>**Yalnızca İngilizce'ye özel geliştirilmiş türevler.**Özel geliştirme hattı tarafından korunur.

'Becerilerde/' yerel benzerlerini yansıtan ve geliştiren**110**gelişmiş beceri dizini içerir. Bu yüzey**doğrudan kamu katkısına açık değildir**- yalnızca otomatik geliştirici boru hattı tarafından doldurulmuştur.

Her türev, her zaman İngilizce olarak daha yüksek bir editoryal standart sağlarken, yerel kaynağına atıfını korur.---

### `packages/`

>**Monorepo çalışma alanları.**Tüm çalışma zamanı Node.js kodları burada bulunur.

| Paket | npm İsim | Amaç |
|:-----------|:------------|:-----------|
| 📂 `paketler/katalog-çekirdek/' | `@omni-skills/catalog-core` | 'ICatalogStorageAdapter' bağımlılık eklemeyle paylaşılan katalog çalışma zamanı. Tüm sunucu yüzeyleri tarafından kullanılan arama, puanlama, karşılaştırma, öneri ve kurulum planı mantığını sağlar |
| 📂 'paketler/cli/' | (kök paket kutusu) | Birleşik CLI giriş noktaları, kılavuzlu yükleyici, Mürekkep görsel TUI'si, tanılama, duman kontrolleri ve hizmet başlatıcıları. ESM-yerel |
| 📂 `paketler/kurulum-hedefleri/` | `@omni-skills/install-targets` | Kurulum yeteneğine sahip 9 istemcinin (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) yol çözünürlüğü ve bayrak eşlemeyle kaydı |
| 📂 `paketler/sunucu-api/' | `@omni-skills/sunucu-api` | OpenAPI 3.1 ile salt okunur HTTP katalog API'si, "/docs" üzerinde Swagger kullanıcı arayüzü, kimlik doğrulama, hız sınırlama, CORS/IP izin verilenler listeleri, indirmeler ve yönetici çalışma zamanı |
| 📂 `paketler/sunucu-mcp/` | `@omni-skills/server-mcp` | 'Stdio', 'stream' ve 'sse' aktarımlarını destekleyen MCP sunucusu. Yerel sepet modu, 16 yapılandırma özellikli istemci için dosya sistemine duyarlı yükleme/kaldırma araçları ve istemciye duyarlı MCP yapılandırma yazımı ekler |
| 📂 `paketler/sunucu-a2a/` | `@omni-skills/server-a2a` | JSON/SQLite kalıcılığı, yeniden başlatma kurtarma, SSE akışı, iptal, harici yürütücü modu ve isteğe bağlı kiralık koordinasyon ile A2A (Ajandan Aracıya) görev çalışma zamanı |

Her paketin kendi `package.json`, `src/` dizini ve birim testleri için (`install-targets` hariç) bir `vitest.config.js` vardır.---

### `dist/`

>**Oluşturulan çalışma zamanı yapıları.**Kasıtlı olarak sürüm kontrolüne adanmıştır.

Bu dosyalar, CLI kurulumları, API yanıtları, MCP araçları, A2A görevleri, duman testleri ve sürüm doğrulaması tarafından tüketilen, makine tarafından okunabilen çıktılardır. 'npm run build' tarafından yeniden oluşturulurlar.

| Yol | Amaç |
|:-----|:-----------|
| 'dist/catalog.json' | 154 becerinin, puanların ve meta verilerin tamamını içeren yayınlanmış katalog |
| 'dist/bundles.json' | Üye uygunluk durumunu içeren paket tanımları |
| `dist/manifests/<skill>.json` | Beceri başına makine tarafından okunabilen bildirim |
| 'dist/archives/<skill>.zip' | İndirmek için beceriye özel ZIP arşivi |
| `dist/archives/<skill>.tar.gz` | İndirmek için beceriye özel tarball arşivi |
| `dist/archives/<skill>.checksums.txt` | Arşiv başına SHA-256 sağlama toplamı bildirimi |
| 'dist/archives/<skill>.zip.sig' | Ayrılmış imza (yalnızca yayınlanma zamanında, gitignored) |
| 'dist/release-notes.md' | Otomatik oluşturulan sürüm notları (gitignored) |
| 'dağıtım/imzalama/' | Türetilmiş genel anahtar materyali (gitignored) |

>**Neden "dist/" taahhüt edildi?**Çünkü yükleme, API, MCP, A2A ve sürüm sözleşmesinin bir parçasıdır. Tüketiciler bu dosyaların bir yapıyı çalıştırmadan mevcut olmasını bekler.---

### `data/`

>**Statik proje veri dosyaları.**Derleme ve çalışma zamanı davranışını yönlendiren kaynak kontrollü tanımlar.

| Dosya | Amaç |
|:-----|:-----------|
| 'data/bundles.json' | Derlenmiş paket tanımları (paket başına beceri üyesi listeleri) |
| 'veri/proje_kimliği.json' | Kanonik proje kimliği: ad, açıklama, ana sayfa, GitHub konuları, çalışma zamanı yüzey tanımları ve müşteri listeleri |
| 'veri/proje_durumu.json' | Oluşturulan proje ölçümlerinin anlık görüntüsü: beceri sayıları, puanlar, müşteri sayıları, kategori sayıları ve kalite dağılımları |---

### `docs/`

>**Tüm proje belgeleri.**İzleyicilere göre düzenlenir.

| Yol | İzleyici | İçerik |
|:-----|:---------|:--------|
| 'docs/README.md' | Herkes | Dokümantasyon merkezi — tüm dokümanların merkezi indeksi |
| 'docs/CATALOG.md' | Kullanıcılar | 154 becerinin tümünü puanlarla birlikte listeleyen otomatik oluşturulan katalog |
| `docs/PROJE-YAPI.md' | Herkes | Bu dosya — proje dizini referansı |
| 'belgeler/kullanıcılar/' | Son kullanıcılar | Başlarken, CLI kullanıcı kılavuzu, kullanım kılavuzu, paketler, runbook |
| 'belgeler/katkıda bulunanlar/' | Katkıda Bulunanlar | Beceri anatomisi, şablon, halkla ilişkiler iş akışı, kalite çubuğu, yüksek puanlı taktik kitabı |
| 'belgeler/özellikler/' | Mimarlar | API, MCP sepeti, CLI yükleyicisi, görsel kabuk, istemci destek matrisi, sınıflandırma, güvenlik ve bildirim özellikleri |
| 'belgeler/i18n/' | Uluslararası kullanıcılar | README kökünün 32 dilde otomatik olarak oluşturulan çevirileri |#### `docs/users/`

| Dosya | Amaç |
|:-----|:-----------|
| `GETTING-STARTED.md` | Bir beceriyi 2 dakikadan kısa sürede yükleyin, doğrulayın ve çağırın |
| 'CLI-USER-GUIDE.md' | Adım adım senaryolarla tam komut referansı |
| "KULLANIM.md" | CLI komutları, kurulum modları, çalışma zamanı komutları ve MCP yapılandırma akışları |
| 'BUNDLES.md' | Seçilmiş paketler ve mevcut kullanılabilirlikleri |
| `MUHTEŞEM-OMNI-BECERİLER-ROLLOUT.md' | Yeniden markalama geçiş durumu ve kabul raporu |
| 'RUNBOOK.md' | Operasyonel referans (aynı zamanda 'docs/operations/RUNBOOK.md' olarak da bağlantılı) |#### `docs/contributors/`

| Dosya | Amaç |
|:-----|:-----------|
| `BECERİ-ANATOMİ.md` | Bir becerinin yapısı ve kalite beklentileri |
| `SKILL-TEMPLATE.md` | Mevcut ön maddeyi içeren başlangıç ​​`SKILL.md` |
| `SKILL-PR-WORKFLOW.md' | Yerel alım, geliştirici işleme ve inceleyenin beklentileri |
| `KALİTE-BAR.md` | Kabul kriterleri ve mevcut kıyaslamalar |
| `HIGH-SCORE-PLAYBOOK.md` | Yüksek olgunluğu, kaliteyi, en iyi uygulamaları ve güvenlik puanlarını yönlendiren şey nedir |#### `docs/specs/`

| Dosya | Amaç |
|:-----|:-----------|
| 'KATALOG-API.md' | HTTP uç noktaları, filtreleme, yönetişim ve indirmeler |
| 'CLI-GUIDED-INSTALLER.md' | Rehberli kurulumcu için davranışsal sözleşme |
| 'CLI-VISUAL-SHELL.md' | Mürekkep görsel kabuğu, durum modeli ve hizmet merkezi |
| `LOCAL-MCP-SIDECAR.md` | Dosya sistemini tanıyan araçlar, izin verilenler listesi modeli ve yapılandırma yazma |
| `MÜŞTERİ-DESTEK-MATRİX.md' | 9 kurulum + 16 yapılandırma istemcisinde tam istemci ve yazıcı referansı |
| `BECERİ-SINIFLANDIRMA.md' | Sınıflandırma, puanlama buluşsal yöntemi ve meta veri yapıları |
| `GÜVENLİK-DOĞRULAMA.md` | Tarayıcılar, arşivler, imzalar ve sürüm doğrulama |
| `BECERİ-MANIFEST.md' | Makine tarafından okunabilen manifest formatı ve uyumluluk sözleşmesi |#### `docs/i18n/`

Her biri çevrilmiş 'README.md' içeren**32**dil dizini içerir. Diller şunları içerir: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Çeviriler "npm run i18n:render" tarafından otomatik olarak oluşturulur ve "npm run i18n:check" tarafından doğrulanır.---

### `tools/`

>**Altyapıyı oluşturun, doğrulayın ve test edin.**Temel olarak "npm run" komutları tarafından tüketilen Python komut dosyaları.#### `tools/scripts/`

| Senaryo | npm Komutu | Amaç |
|:----------|:---------------|:-----------|
| `validate_skills.py` | 'npm çalıştırma doğrulaması' | Tüm `SKILL.md` dosyalarını doğrular ve `metadata.json`u yeniden oluşturur |
| 'skill_metadata.py' | (doğrulama tarafından içe aktarıldı) | Temel monolitik doğrulayıcı: ön madde ayrıştırma, sınıflandırma, puanlama, güvenlik taraması |
| `recategorize_skills.py` | `npm çalıştırma sınıflandırması:rapor` | Kurallı kategori normalleştirmesini gösterir veya uygular |
| 'generate_index.py' | 'npm çalıştırma dizini' | 'Dist/' bildirimleri, arşivleri ve sağlama toplamları oluşturur |
| 'build_catalog.js' | 'npm çalıştırma kataloğu' | 'skills_index.json'dan 'docs/CATALOG.md' oluşturur |
| `generate_project_status.py` | `npm projeyi çalıştır:durum` | Geçerli ölçümlerle `data/project_status.json` oluşturur |
| 'render_project_docs.py' | `npm belgeleri çalıştır: oluşturma` | README, docs ve CONTRIBUTING'de oluşturulan blokları günceller |
| 'generate_i18n.py' | `npm i18n'yi çalıştır: oluşturma` | 'docs/i18n/' çevirilerini oluşturur veya günceller |
| 'repository_sources.py' | `npm kayıt defterini çalıştır:oluşturma` | REPOSITORY-SOURCES.md'yi oluşturur ve doğrular |
| `verify_project_identity.py` | `npm çalıştırma kimliği:kontrol` | package.json, README ve repo kimlik hizalamasını doğrular |
| `verify_archives.py` | `npm doğrulamayı çalıştır: arşivler` | Arşiv bütünlüğünü ve isteğe bağlı imzaları doğrular |
| `verify_security_scanners.py` | `npm doğrulamayı çalıştır:tarayıcılar` | Oluşturulan meta verilerde tarayıcı kapsamını doğrular |
| `generate_release_notes.py` | `npm çalıştırma sürümü:notlar` | Meta verilerden ve git geçmişinden özel sürüm notları oluşturur |
| `sonraki_release_version.py` | `npm çalıştırma sürümü:sonraki sürüm` | 10'a yama politikasını kullanarak sonraki dönem sürümünü hesaplar |
| 'sync_repo_version.py' | `npm çalıştırma sürümü:senkronizasyon sürümü` | Sürümü çalışma alanı paketleri arasında senkronize eder |
| 'sync_github_repo_metadata.py' | 'npm repo'yu çalıştır: meta veriler: yazdır' | GitHub açıklamasını, ana sayfasını ve konularını yazdırır veya uygular |
| `validate_contribution_scope.py` | (CI) | PR katkısı kapsam sınırlarını doğrular |
| `install_githooks.js` | `npm kancaları çalıştır:yükle` | Yerel ön işleme kancasını yükler |#### `tools/scripts/tests/`

"npm testi" tarafından kullanılan entegrasyon ve TUI test paketleri:
- Eski Python PTY testleri
- Düğüm TUI iddiaları
- Test koşucusu orkestratörü---

### `.github/`

>**GitHub Eylemleri ve topluluk şablonları.**#### `.github/workflows/`

| İş Akışı | Tetikleyici | Amaç |
|:------------|:-----------|:-----------|
| 'validate.yml' | 'Ana'ya basın/PR | Oluşturulan yapıtları derleyin, test edin ve onaylayın |
| 'release.yml' | Etiket push `v*` veya manuel gönderim | Sürüm düzeyinde tarayıcılar, imzalama, npm yayınlama, GitHub Sürümü |
| `auto-release-skill-merges.yml` | 'Ana' dokunma 'becerileri/*' ile birleştir | Beceri değişikliklerinde otomatik sürüm yükseltme, etiketleme ve yayınlama |
| `geliştirme-pr-becerileri.yml' | Beceri değişiklikleriyle halkla ilişkiler | Özel geliştirici hattını çalıştırır ve tamamlayıcı PR yayınlar |
| 'senkronizasyon-depo-metadata.yml' | 'data/project_identity.json'da yapılan değişiklikler | GitHub açıklamasını, ana sayfasını ve konularını senkronize eder |#### `.github/pull_request_template.md`

Beceri ve çalışma zamanı katkılarına yönelik kontrol listesini içeren varsayılan PR şablonu.---

### `.githooks/`

>**Yerel Git kancaları.**"npm run hooks:install" aracılığıyla yüklenir.

| Dosya | Amaç |
|:-----|:-----------|
| 'ön taahhüt' | Bir işleme izin vermeden önce temel doğrulamayı çalıştırır |---

## 📄 Root Files Reference

| Dosya | Amaç |
|:-----|:-----------|
| 'BENİOKU.md' | Kahraman banner'ı, kurulum kılavuzu ve tüm özelliklere genel bakışla halka açık README projesi |
| 'KATKILI.md' | Beceri, çalışma süresi ve alım iş akışlarını içeren katılımcı kılavuzu |
| `GÜVENLİK.md` | Güvenlik ilkesi, kapsamı ve güvenlik açığı raporlama talimatları |
| `CODE_OF_CONDUCT.md` | Katılımcı Sözleşmesi v2.1 |
| `REPOSITORY-SOURCES.md` | Dışarıdan alım için önerilen yukarı akış havuzlarının kamuya açık kaydı |
| 'LİSANS' | MIT Lisansı (kod ve araçlar) |
| `LİSANS İÇERİĞİ` | CC BY 4.0 (belgeler ve beceri içeriği) |
| 'paket.json' | Kök monorepo paketi: komut dosyaları, bağımlılıklar, depo gözü giriş noktaları, dosyalar ve çalışma alanı yapılandırması |
| 'paket-kilit.json' | npm kilit dosyası (otomatik olarak oluşturulmuştur) |
| 'metadata.json' | Depo çapında doğrulama ve puan özeti ("npm run validate" tarafından oluşturulmuştur) |
| 'skills_index.json' | Repo-yerel normalleştirilmiş beceri dizini ('npm run validate' tarafından oluşturulmuştur) |
| `.gitignore` | Sürüm kontrolü hariç tutmaları — özellikle "dist/" göz ardı edilmemektedir**|
| `.npmignore` | `__pycache__/` ve `*.pyc`yi npm tarball'ından hariç tutar |
| `.node-sürüm` | Node.js sürüm sabitlemesi: `22` |
| '.nvmrc' | nvm sürümü sabitleme: `22` (aynalar `.node-version`) |
| `vitest.config.js` | 5 paket düzeyindeki test yapılandırmasının tümüne referans veren Root Vitest yapılandırması |
| `vitest.workspace.js` | Monorepo uyumlu test yürütme için Vitest çalışma alanı tanımı |---

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

Yukarıdakilerin tümü 'npm run build'in parçası olarak sırayla çalışır.
# 🤝 Contributing to Awesome Omni Skills (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../CONTRIBUTING.md) · 🇪🇸 [es](../es/CONTRIBUTING.md) · 🇫🇷 [fr](../fr/CONTRIBUTING.md) · 🇩🇪 [de](../de/CONTRIBUTING.md) · 🇮🇹 [it](../it/CONTRIBUTING.md) · 🇷🇺 [ru](../ru/CONTRIBUTING.md) · 🇨🇳 [zh-CN](../zh-CN/CONTRIBUTING.md) · 🇯🇵 [ja](../ja/CONTRIBUTING.md) · 🇰🇷 [ko](../ko/CONTRIBUTING.md) · 🇸🇦 [ar](../ar/CONTRIBUTING.md) · 🇮🇳 [hi](../hi/CONTRIBUTING.md) · 🇮🇳 [in](../in/CONTRIBUTING.md) · 🇹🇭 [th](../th/CONTRIBUTING.md) · 🇻🇳 [vi](../vi/CONTRIBUTING.md) · 🇮🇩 [id](../id/CONTRIBUTING.md) · 🇲🇾 [ms](../ms/CONTRIBUTING.md) · 🇳🇱 [nl](../nl/CONTRIBUTING.md) · 🇵🇱 [pl](../pl/CONTRIBUTING.md) · 🇸🇪 [sv](../sv/CONTRIBUTING.md) · 🇳🇴 [no](../no/CONTRIBUTING.md) · 🇩🇰 [da](../da/CONTRIBUTING.md) · 🇫🇮 [fi](../fi/CONTRIBUTING.md) · 🇵🇹 [pt](../pt/CONTRIBUTING.md) · 🇷🇴 [ro](../ro/CONTRIBUTING.md) · 🇭🇺 [hu](../hu/CONTRIBUTING.md) · 🇧🇬 [bg](../bg/CONTRIBUTING.md) · 🇸🇰 [sk](../sk/CONTRIBUTING.md) · 🇺🇦 [uk-UA](../uk-UA/CONTRIBUTING.md) · 🇮🇱 [he](../he/CONTRIBUTING.md) · 🇵🇭 [phi](../phi/CONTRIBUTING.md) · 🇧🇷 [pt-BR](../pt-BR/CONTRIBUTING.md) · 🇨🇿 [cs](../cs/CONTRIBUTING.md) · 🇹🇷 [tr](../tr/CONTRIBUTING.md)

---


>**Awesome Omni Skills, becerilerin halka açık bir deposu, geliştirilmiş en iyi uygulama türevlerinin derlenmiş bir deposu ve bu kataloğun üzerine inşa edilen çalışma zamanı yüzeyleridir.**
> Katkılar her iki alanı da hedefleyebilir ancak her ikisinin de oluşturulan yapılarla ve mevcut CLI davranışıyla uyumlu kalması gerekir.---

## 📊 Repository Baseline

<!-- generated:contributing-repository-baseline:start -->
| Metric | Value |
|:-------|:------|
| 📦 Package version | `0.9.5` |
| 🧠 Published skills | `154` |
| ✨ Curated derivatives | `110` |
| 📦 Fully backed bundles | `7` |
| 🖥️ Install-capable clients | `9` |
| 🔌 MCP config-capable clients | `16` across `33` targets |
| 🔄 Automatic releases | Enabled on `main` |
<!-- generated:contributing-repository-baseline:end -->

---

## 📋 Before You Start

| Ne | Nerede |
|:-----|:------|
| 🧠 Beceriler | `beceriler/<beceri-adı>/SKILL.md` |
| 📖 Katılımcı şablonları ve kılavuzu | 'belgeler/katkıda bulunanlar/' |
| 🧾 Yeni beceriler için kanonik PR akışı | [Beceri Halkla İlişkiler İş Akışı](docs/contributors/SKILL-PR-WORKFLOW.md) |
| 📥 Yerli gelen beceriler | 'beceriler/' (herhangi bir dil) |
| ✨ Seçilmiş gelişmiş türevler | `skills_omni/` (Yalnızca İngilizce, otomatik) |
| 🚫 `skills_omni/` korunmaktadır | Doğrudan kamu katkısına açık değil |
| 🔁 Depo bazlı alım | Bakımcı tarafından gerçekleştirilen harici ithalatlar hâlâ "beceriler/" kapsamına giriyor ve aynı inceleme standardını takip ediyor |
| 📖 Çalışma zamanı ve mimari belgeleri | 'dokümanlar/' |
| 📄 Topluluk dosyaları | `README.md` · `CONTRIBUTING.md` · `SECURITY.md` · `CODE_OF_CONDUCT.md` |---

## 🎯 Common Contribution Types

| Tür | Alan |
|:-----|:-----|
| 🧠 Bir beceri ekleyin veya geliştirin | `beceriler/` |
| 📥 Depo bazlı alım PR'sini inceleyin | `becerileri/` hedefleyen `harici-ithalat/<kaynak>` dalları |
| 🌍 Yeni bir yukarı akış deposu önerin | `REPOSITORY-SOURCES.md` |
| 📖 Katkıda bulunan kılavuzunu güncelleyin | 'belgeler/katkıda bulunanlar/' |
| 🖥️ CLI'yi, yükleyiciyi veya komut dosyalarını geliştirin | 'paketler/cli/' ve 'araçlar/komut dosyaları/' |
| 📦 Katalog çalışma zamanını veya protokol paketlerini geliştirin | 'paketler/' |
| 🧪 Testleri, duman kontrollerini sıkılaştırın veya belgeleri yayınlayın | Çeşitli |---

## Hızlı Başlangıç

```bash
# 1️⃣ Fork and clone
git clone https://github.com/YOUR-USERNAME/awesome-omni-skills.git
cd awesome-omni-skills

# 2️⃣ Install dependencies
npm install
npm run hooks:install   # optional, enables the repo pre-commit hook

# 3️⃣ Create or update your change
mkdir -p skills/my-awesome-skill
cp docs/contributors/SKILL-TEMPLATE.md skills/my-awesome-skill/SKILL.md

# 4️⃣ Validate and regenerate artifacts
npm run build

# 5️⃣ Run the smoke suite
npm test
npm run smoke
```

>**📝 PR'yi "Bakımcılardan düzenlemeye izin ver" etkinken açın.**---

## 🧠 Skill Contributions

İyi bir yerel gelen beceri şunları yapmalıdır:

- ✅ Belirli bir sorunu temiz bir şekilde çözün
- ✅ Projeler arasında yeniden kullanılabilir
- ✅ Temsilcinin gerçekten izleyebileceği talimatları ekleyin
- ✅ Belirsiz veya gereksiz içerikten kaçının
- ✅ Mevcut olduğunda doğru ön madde ve uyumluluk meta verilerini bildirin
- ✅ Otomasyon çalıştırmalarından sonra oluşturulan `metadata.json` sınıflandırma yapılarını içeren arazi### 📁 Minimal Structure

```text
skills/my-skill/
└── SKILL.md
```

### 📁 Larger Skills

```text
skills/my-skill/
├── SKILL.md
├── agents/
├── assets/
├── examples/
├── references/
└── scripts/
```

>**💡 İpucu:**Sürüm düzeyindeki beceri paketleri 'aracılar/', 'referanslar/', 'örnekler/' ve 'komut dosyaları/' içermelidir. Ancak alım yüzeyi kasıtlı olarak hoşgörülüdür; minimum düzeyde yerel gelen beceriye izin verilir ve geliştirici boru hattı daha güçlü türevi üretir.### 🔀 Two Native Intake Paths

Genel veri havuzu, yerel becerileri iki operasyonel yolla kabul eder:

| Yol | Nasıl geliyor | Beklentiyi inceleyin |
|:-----|:---------------|:-----------|
| 👤 Doğrudan katkıda bulunan PR | Bir insan dalı doğrudan 'becerileri/' düzenler | Beceriyi, oluşturulan yapıları ve paket etkisini doğrulayın |
| 📥 Depo bazlı harici alım | Bakımcı tarafından işletilen "harici-içe aktarma/<kaynak>" Halkla İlişkiler, incelenen başka bir depodan becerileri içe aktarır | Becerinin yanı sıra menşei, üretime yönelik sahiplik ve lisans notlarını doğrulayın |

Her iki yol da "beceriler/"e ulaşır, her ikisi de aynı genel doğrulayıcıyı tetikler ve her ikisi de seçilmiş bir "beceri_omni/" tamamlayıcı PR üretebilir.

Doğrudan bir beceri göndermek yerine bir yukarı akış deposu önermek istiyorsanız, [REPOSITORY-SOURCES.md](REPOSITORY-SOURCES.md) dosyasını düzenleyin. Normal teklif artık repo-öncedir:

- 'repo_url' sağlayın
- varsayılan olmayan bir şubeye ihtiyacınız olmadığı sürece "şube"yi "otomatik" olarak bırakın
- tam kökü bilmiyorsanız "skills_path"ı "auto" olarak bırakın

Birleştirmede otomatik senkronizasyon tetikleyicisi değil, hâlâ genel bir inceleme kapısı vardır.### 🌐 Language Policy

| Yüzey | Kabul Edilen Diller |
|:-----------|:-----------|
| 📥 `beceriler/` (yerel alım) | Portekizce, İngilizce veya herhangi bir dil |
| ✨ `skills_omni/` (düzenlenmiş çıktı) | yalnızca İngilizce |

> Özel geliştirici, yerel kaynağı gönderildiği şekliyle korur ve seçilmiş türevi İngilizce olarak yeniden yazar.

📖 Dalın tamamı, doğrulama ve geliştirici inceleme sırası için [Skill PR İş Akışı](docs/contributors/SKILL-PR-WORKFLOW.md) kullanın.---

## ✅ Required Validation

Bir PR açmadan önce bunu çalıştırın:```bash
npm run validate          # Validates and regenerates metadata
npm run taxonomy:report   # Preview taxonomy changes
npm run identity:check    # Verifies package/repo identity stays aligned with project manifests
npm run build             # Full build pipeline
npm test                  # Legacy integration tests + Vitest unit suite
npm run test:unit         # Fast Vitest unit tests only (~500ms)
```

<detaylar>
<summary>📋 <strong><code>npm run validate</code> neyi yeniden oluşturur</strong></summary>

- 'meta veri.json'
- `beceriler/<beceri>/metadata.json`
- Kanonik taksonomi haritalaması
- Olgunluk, en iyi uygulamalar, kalite ve güvenlik puanları
- Statik güvenlik bulguları
- İsteğe bağlı ClamAV ve VirusTotal tarayıcı durumu (yapılandırıldığında)</details>

>**⚠️ Önemli:**Doğrulama, CLI, API, MCP, A2A, bildirimler, arşivler ve sürüm otomasyonu tarafından kullanılan sözleşmedir. Oluşturulan meta verileri tek kullanımlık çıktı olarak değil, inceleme yüzeyinin parçası olarak değerlendirin.

Markalamaya, paket meta verilerine, depo URL'lerine veya depo başlığı kopyasına dokunursanız şunu da çalıştırın:```bash
npm run repo:metadata:print
```

Bu komut, "data/project_identity.json"dan türetilen kaynak kontrollü GitHub açıklamasını, ana sayfasını ve konu sözleşmesini yazdırır.### 📥 Intake Policy

| Durum | Davranış |
|:----------|:-----------|
| Eksik/tamamlanmamış ön madde | ⚠️ Uyarılar (engellemez) |
| Kritik güvenlik bulguları | 🚫 Alımı engeller |
| Sabit doğrulama hataları | 🚫 Alımı engeller |
| Daha sıkı editoryal standart | Yerel alımda değil, geliştirilmiş türev akışında zorunlu kılındı ​​|### 🧪 Release-Grade Preflight

```bash
npm run smoke
```

<detaylar>
<summary>📋 <strong>Duman geçişinin doğruladığı şey</strong></summary>

- ✅ Beceri doğrulama
- ✅ Katalog oluşturma
- ✅ Dokümanlar kataloğu oluşturma
- ✅ Test paketi
- ✅ `npm paketi --dry-run'
- ✅ API önyüklemesi
- ✅ 'stdio', 'stream' ve 'sse'de MCP önyüklemesi
- ✅ A2A önyükleme
- ✅ Arşiv doğrulama ve paketleme beklentileri</details>

---

## 📋 Skill Frontmatter

Frontmatter şiddetle tavsiye edilir. Temel olarak [Beceri Şablonunu](docs/contributors/SKILL-TEMPLATE.md) kullanın.```yaml
---
name: my-skill-name
description: "What it does"
version: "0.1.1"
category: development
tags: [react, typescript]
complexity: intermediate
risk: safe
tools: [claude-code, cursor]
source: community
author: "Your Name"
date_added: "2026-03-26"
date_updated: "2026-03-26"
---
```

<detaylar>
<summary>🏷️ <strong>Kanonik sınıflandırma kategorileri</strong></summary>

| Kategori | Kategori |
|:------------|:------------|
| 'gelişme' | 'ön uç' |
| 'arka uç' | 'fullstack-web' |
| 'araçlar' | 'kli-otomasyon' |
| 'iş' | 'ürün' |
| 'tasarım' | 'veri-ai' |
| 'ai-ajansları' | 'makine öğrenimi' |
| 'devops' | `test güvenliği' |
| 'belgeler' | 'içerik medyası' |
| 'iletişim' | 'kategorize edilmemiş' |</details>

>**ℹ️**Skill sürümü, npm paket sürümünden bağımsızdır. Yerel olarak gelen bir becerinin henüz ön maddesi yoksa, uyarılarla kabul edilecek ve dizin, başlık ve gövde metninden geçici meta veriler türetilecektir.---

## ⚙️ Runtime Contributions

"Paketler/cli/", "paketler/katalog-çekirdek/", "paketler/sunucu-*/" ya da derleme komut dosyalarına dokunursanız:

- 📦 'dist/' ve dokümanları uygulamayla uyumlu tutun
- 🔄 Katalog mantığını kopyalamak yerine 'paketleri/katalog çekirdeğini' yeniden kullanmayı tercih edin
- 🔒 Yerel yazma davranışını önizleme veya prova varsayılanlarının gerisinde tutun
- 🔌 MCP yazarlarını disiplinli tutun — birinci sınıf yapılandırma yazarlarını yalnızca istemcinin istikrarlı bir genel yapılandırma sözleşmesi olduğunda ekleyin
- 🛡️ Güvenlik tarayıcısı uyarılarını inceleme çubuğunun bir parçası olarak değerlendirin
- 🧪 CLI komutlarını, aktarım modlarını veya genel uç noktaları değiştirirken testleri güncelleyin### 🚧 Important Boundary

| Bunu yapın ✅ | Bunu yapma 🚫 |
|:-----------|:-----------------|
| Yerel çalışmayı `beceriler/` altında gönderin | `skills_omni/`yi düzenleyen manuel PR'leri açın |
| Geliştirici çalışmasını otomasyonun yönetmesine izin verin | Seçilen içeriği doğrudan ekleyin |
| Meşru beceri kalitesine odaklanın | Otomatik tamamlayıcı PR akışını atlayın |

>**ℹ️**'Beceriler/' içindeki yerel bir beceri güncellendiğinde, özel geliştirici bunu yeniden işler ve geliştirilmiş temel çizgiyi yeniler.---

## 🔄 Enhancer Outcome States

Kamuya açık yerel beceri PR'leri sırasında, geliştirici dört durumdan birini bildirir:

| Devlet | Anlamı |
|:------|:-----------|
| ✅ 'tamamlandı' | Temiz bir şekilde oluşturulmuş, "skills_omni/" için uygun, gelişmiş türev |
| ⚠️ `bozulmuş` | Geri dönüş veya daha zayıf puan hareketi ile tamamlandı - daha dikkatli inceleyin |
| 🚫 `engellendi' | Altyapı veya doğrulama nedenleriyle durduruldu — otomatik yayınlamayı engelliyor |
| ❌ 'başarısız' | Beklenmeyen hata — bakımcının incelemesini gerektiriyor |

>**📝 Katkıda bulunanların**geliştirici altyapı sorunlarını düzeltmesine gerek yoktur. Sorumluluk, meşru bir yerel beceri sunmak ve depoyu yeşil tutmaktır.---

## 🔄 Automatic Release Policy

Bir değişiklik "ana"ya geldiğinde ve şunları içerdiğinde:

- `beceriler/**`
- `beceriler_omni/**'
- 'veri/bundles.json'

…depo otomatik olarak bir**paket sürümü**yayınlar.### 📋 Version Bump Rule

| Nereden | Nereye | Kural |
|:-----|:---|:-----|
| '0.1.0' | '0.1.1' | Yama +1 |
| '0.1.9' | '0.1.10' | Yama +1 |
| '0.1.10' | '0.2.0' | Sonraki minöre geçin, yamayı sıfırlayın |

> Sürüm akışı kataloğu/arşivleri yeniden oluşturur, sürüm artışını kaydeder, sürümü etiketler, npm'yi yayınlar ve GitHub sürümünü otomatik olarak oluşturur.---

## 📝 Commit Conventions

| Önek | Kullanım Amaçlı |
|:----------|:----------|
| `başarı:` | Yeni beceri veya özellik |
| 'düzelt:' | Hata düzeltme |
| 'dokümanlar:' | Dokümantasyon değişiklikleri |
| 'yeniden düzenleme:' | Kod temizleme veya yapı değişiklikleri |
| 'deneme:' | Değişiklikleri test edin |
| `görev:` | Bakım |---

## ❓ Need Help?

| Kanal | Bağlantı |
|:----------|:-----|
| 💬 Sorular | [Bir Tartışma Açın](https://github.com/diegosouzapw/awesome-omni-skills/discussions) |
| 🐛 Hatalar | [Bir Sayı Açın](https://github.com/diegosouzapw/awesome-omni-skills/issues) |
| 📝 Erken geri bildirim | [Bir Halkla İlişkiler Taslağı Açın](https://github.com/diegosouzapw/awesome-omni-skills/pulls) |
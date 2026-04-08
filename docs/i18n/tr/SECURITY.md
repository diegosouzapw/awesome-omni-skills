# 🛡️ Security Policy (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../SECURITY.md) · 🇪🇸 [es](../es/SECURITY.md) · 🇫🇷 [fr](../fr/SECURITY.md) · 🇩🇪 [de](../de/SECURITY.md) · 🇮🇹 [it](../it/SECURITY.md) · 🇷🇺 [ru](../ru/SECURITY.md) · 🇨🇳 [zh-CN](../zh-CN/SECURITY.md) · 🇯🇵 [ja](../ja/SECURITY.md) · 🇰🇷 [ko](../ko/SECURITY.md) · 🇸🇦 [ar](../ar/SECURITY.md) · 🇮🇳 [hi](../hi/SECURITY.md) · 🇮🇳 [in](../in/SECURITY.md) · 🇹🇭 [th](../th/SECURITY.md) · 🇻🇳 [vi](../vi/SECURITY.md) · 🇮🇩 [id](../id/SECURITY.md) · 🇲🇾 [ms](../ms/SECURITY.md) · 🇳🇱 [nl](../nl/SECURITY.md) · 🇵🇱 [pl](../pl/SECURITY.md) · 🇸🇪 [sv](../sv/SECURITY.md) · 🇳🇴 [no](../no/SECURITY.md) · 🇩🇰 [da](../da/SECURITY.md) · 🇫🇮 [fi](../fi/SECURITY.md) · 🇵🇹 [pt](../pt/SECURITY.md) · 🇷🇴 [ro](../ro/SECURITY.md) · 🇭🇺 [hu](../hu/SECURITY.md) · 🇧🇬 [bg](../bg/SECURITY.md) · 🇸🇰 [sk](../sk/SECURITY.md) · 🇺🇦 [uk-UA](../uk-UA/SECURITY.md) · 🇮🇱 [he](../he/SECURITY.md) · 🇵🇭 [phi](../phi/SECURITY.md) · 🇧🇷 [pt-BR](../pt-BR/SECURITY.md) · 🇨🇿 [cs](../cs/SECURITY.md) · 🇹🇷 [tr](../tr/SECURITY.md)

---


---

## 🚨 Reporting a Vulnerability

>**Harika Omni Skills'te bir güvenlik sorunu keşfederseniz, önce herkese açık bir sorun açmayın.**

Lütfen aşağıdaki özel kanallardan biri aracılığıyla bildirimde bulunun:

| Kanal | Nasıl |
|:-----------|:----|
| 🔒 GitHub Güvenlik Danışmanlığı | [Özel bir danışma belgesi açın](https://github.com/diegosouzapw/awesome-omni-skills/security/advisories/new) |
| 📧 Doğrudan İletişim | Bakımcılarla doğrudan iletişime geçin |### 📋 Include in Your Report

- 📁 Etkilenen bileşen veya yol
- 🔄 Üreme adımları
- ⚠️ Etki değerlendirmesi
- 🧪 Sorunu doğrulamak için gereken herhangi bir kavram kanıtı materyali

>**⏱️ Raporları 48 saat içinde onaylamayı hedefliyoruz**ve düzeltmelere etkiye göre öncelik veriyoruz.---

## 🎯 Scope

Bu politika, veri havuzunun çalışma zamanını ve içerik yüzeylerini kapsar:

| Bileşen | Yol |
|:----------|:-----|
| 🖥️ CLI ve yükleyici | 'paketler/cli/' |
| 📚 Paylaşılan katalog çalışma zamanı | 'paketler/katalog-çekirdek/' |
| 🔌 Hedefleri yükleyin | 'paketler/kurulum-hedefleri/' |
| ⚙️ Komut dosyaları oluşturma ve doğrulama | 'araçlar/komut dosyaları/' |
| 📦 Oluşturulan katalog eserleri | 'mesafe/' |
| 🌐 API, MCP ve A2A paketleri | `paketler/sunucu-api/` · `paketler/sunucu-mcp/` · `paketler/sunucu-a2a/` |
| 🧠 Beceri içeriği | `beceriler/` — özellikle kabuk komutları, ağ erişimi, kimlik bilgisi akışları veya güvenliğe duyarlı rehberlik |---

## 🔐 Current Security Model

Depo aşağıdaki güvenlik kontrollerine dayanır:### 🧠 Skill-Level Controls

| Kontrol | Açıklama |
|:-----------|:-----------|
| 🏷️ Risk alanı | Beceri meta verileri beyan edilmiş bir 'risk' düzeyi içerir |
| 📊 Puanlama | Doğrulama, olgunluğu, en iyi uygulamaları, kaliteyi ve güvenlik puanlarını hesaplar |
| 🔍 Statik tarayıcı | `SKILL.md'yi, paketlenmiş dosyaları ve yardımcı komut dosyalarını inceler ve kritik bulguların genel kataloğa girmesini engeller |
| 🦠 Kötü amaçlı yazılım doğrulamasını yayınlayın | Yayınlanan sürümler yayınlanmadan önce hem ClamAV hem de VirusTotal ile doğrulanır |### 🚫 Hard Content Blocks

Kamu deposu, kritik güvenlik kapısını açan becerileri kabul etmez. Mevcut sert engelleyiciler şunları içerir:

- uzak içerik doğrudan kabuk yürütmeye aktarıldı
- istemleri, sırları veya gizli çalışma zamanı bağlamını açığa çıkarmaya çalışan talimatlar

Doğrulayıcı bu modellerden birini bulduğunda beceri genel kataloğa girmez. Harici depo alımında, engellenen beceriler hariç tutulup ayrı olarak raporlanırken geçerli kardeşler devam edebilir.### 🖥️ Runtime Controls

| Kontrol | Açıklama |
|:-----------|:-----------|
| 📁 Yol güvenliği | Akışları yükleme yol güvenliği kontrollerini kullanın |
| 🔒 İzin verilenler listesi yazıyor | Yerel MCP sepeti, izin verilenler listesi tarafından kısıtlanan yazma işlemleri |
| 👁️ Prova varsayılanları | Yazma odaklı araçlar, açıkça devre dışı bırakılmadığı sürece varsayılan olarak kuru çalıştırmayı kullanır |
| 🔐 Yetkilendirme ve sınırlar | Taşıyıcı/API anahtarı kimlik doğrulaması, yönetici çalışma zamanı kimlik doğrulaması, hız sınırlama, CORS/IP izin verilenler listeleri |
| 📋 Denetim | Denetim günlüğü, bakım modu ve istek kimlikleri |### 📦 Release Controls

| Kontrol | Açıklama |
|:-----------|:-----------|
| ✅ Sağlama toplamı manifestoları | Oluşturulan arşivler için SHA-256 sağlama toplamları |
| ✍️ İmzalar | Yayınlanmadan önce CI'da müstakil imza doğrulaması |
| 🦠 Çift tarayıcı kapısı | Sürümün yayınlanması için ClamAV ve VirusTotal'ın her ikisinin de temiz bir şekilde tamamlanması gerekiyor |
| 🧪 Duman kontrolleri | Yayınlanmadan önce gönderilen çalışma zamanı yüzeylerini deneyin |---

## 🔮 What Is Still Open

> Geriye kalan ana güvenlik işi temel güçlendirme**değil**. Açık öğeler şunlardır:

| Alan | Durum |
|:-----|:----------|
| 🏢 Kurumsal yönetişim | Mevcut süreç içi kontrollerin ötesinde harici kimlik, ağ geçidi politikası ve WAF entegrasyonu |
| 🔌 MCP istemci yazarları | Daha geniş yazarlar yalnızca genel yapılandırma sözleşmeleri yeterince kararlı olduğunda |
| 📊 Tarayıcı iyileştirmesi | Olağanüstü becerilerin yalnızca iyi yapılandırılmış olanlardan açıkça ayrılması için sürekli iyileştirme |---

## ⚠️ Risk Levels in Skills

Her beceri şu "risk" seviyelerinden birini beyan eder:

| Risk Düzeyi | Anlamı |
|:-----------|:-----------|
| 🟢`güvenli` | Yıkıcı operasyon beklenmiyor |
| 🟡 'dikkat' | Dosyaları değiştirebilir veya harici sistemlerle etkileşime girebilir |
| 🔴 `saldırgan' | Açık yetkilendirme gerektiren güvenlik testi veya rakip iş akışları |
| ⛔ `kritik' | Yüksek etkili veya sistem düzeyinde işlemler |---

## 📋 Disclosure Notes

Awesome Omni Skills çalıştırılabilir yardımcılar, dosya sistemiyle uyumlu yerel araçlar ve istemciye özel yapılandırma yazarları sunduğundan, bu güvenlik açığı sınıfları, "yalnızca yerel" görünseler bile**yüksek öncelikli**olarak ele alınmalıdır:

| Kategori | Örnekler |
|:------------|:------------|
| 📁 Yol geçişi | Beceri yükleme veya yapılandırma yolları aracılığıyla dizin kaçışı |
| 🔗 Symlink güvenliği | Kurulum veya arşiv çıkarma sırasında sembolik bağlantı takip ediliyor |
| 🖥️ Komut yürütme | Beceri içeriği veya komut dosyaları yoluyla keyfi komut enjeksiyonu |
| 📦 Arşiv doğrulama | Sağlama toplamı veya imza doğrulamasının atlanması |
| 🔓 Kimlik doğrulamayı atlama | API/MCP'de hız sınırlama veya kimlik doğrulamayı atlama |
| 🔌 İzin verilenler listesini atlama | Yerel sepet izin verilenler listesinin atlanması |
| 🦠 Tarayıcıdan kaçınma | Statik veya harici tarayıcılarda yanlış negatif sınıflar |
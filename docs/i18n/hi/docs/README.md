# 📖 Awesome Omni Skills — Documentation Hub (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**एक सार्वजनिक कौशल भंडार, एक क्यूरेटेड सर्वोत्तम अभ्यास व्युत्पन्न सतह और एक साझा रनटाइम प्लेटफ़ॉर्म के रूप में विस्मयकारी ओमनी कौशल का उपयोग करने, योगदान करने और संचालित करने के लिए केंद्रीय संदर्भ।**

मानक समुदाय फ़ाइलें रिपॉजिटरी रूट में रहती हैं:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> एनपीएम पैकेज, गिटहब रिपॉजिटरी, जेनरेट किए गए दस्तावेज़ और रनटाइम एंट्रीपॉइंट अब**विस्मयकारी ओमनी कौशल**पर संरेखित हैं। वर्तमान रोलआउट स्थिति: [विस्मयकारी ओमनी कौशल रोलआउट](संचालन/अद्भुत-ओमनी-कौशल-रोलआउट.एमडी)।---

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

फाउंडेशन ट्रैक अब सक्रिय प्रोजेक्ट स्थिति में है, और दूसरी श्रेणी-विस्तार लहर पहले से ही कैटलॉग में है। परियोजना को अब वैकल्पिक भविष्य के विस्तार ट्रैक के साथ कार्यशील आधार रेखा के रूप में पढ़ा जाना चाहिए:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

भविष्य का विस्तार विचाराधीन है:

- `डिज़ाइन`, `टूल्स`, `डेटा-एआई`, और `मशीन-लर्निंग` को गहरा करें
- निष्क्रिय गैर-कोड-मूल श्रेणियों को फिर से खोलने से बचें जब तक कि वर्तमान कोड-मूल ट्रैक में अधिक गहराई न हो
- ऐसा करते समय गुणवत्ता फर्श और एन्हांसर समीक्षा पथ को बरकरार रखें

वह विस्तार कार्य अब सीधे लाइव कैटलॉग और आर्किटेक्चर दस्तावेज़ों में परिलक्षित होता है:

- [कैटलॉग](CATALOG.md) में वर्तमान कैटलॉग स्नैपशॉट
- [कोडबेस विश्लेषण](आर्किटेक्चर/कोडबेस-ANALYSIS.md) में रनटाइम और आर्टिफैक्ट आकार
- [एजेंट-नेटिव रोडमैप](आर्किटेक्चर/एजेंट-नेटिव-रोडमैप.एमडी) में आगे की दिशा## 🔀 Repository Surfaces

विस्मयकारी ओमनी कौशल को तीन जुड़ी हुई सतहों के रूप में पढ़ा जाना चाहिए:

| सतह | यह क्या है | यह कैसे बदलता है |
|:--------|:-------|:------------|
| 📥 `कौशल/` | सार्वजनिक देशी कौशल भंडार | प्रत्यक्ष योगदानकर्ता पीआर और समीक्षा भंडार-आधारित बाहरी सेवन |
| ✨ `skills_omni/` | क्यूरेटेड बेहतर सर्वोत्तम अभ्यास व्युत्पन्न सतह | केवल निजी एन्हांसर साथी पीआर |
| 🖥️ रनटाइम सतहें | CLI, API, MCP, और A2A एक ही जेनरेटेड कैटलॉग पर | निर्माण, सत्यापन, और रिलीज़ स्वचालन |---

## 📌 Current Decisions

ये वास्तुकला प्रश्न अब व्यवहार में "खुले" नहीं हैं और अब इन्हें परियोजना निर्णय के रूप में माना जाता है:

1.**वितरण मेनिफेस्ट-फर्स्ट प्लस हस्ताक्षरित पुरालेख रहता है**
   मशीन-पठनीय मेनिफेस्ट सीएलआई, एपीआई, एमसीपी और ए2ए द्वारा उपभोग किया जाने वाला अनुबंध बना हुआ है। हस्ताक्षरित प्रति-कौशल अभिलेखागार उस अनुबंध के शीर्ष पर स्तरित डाउनलोड और रिलीज़ सतह हैं।
2.**निजी या प्रीमियम कैटलॉग को समान मेनिफेस्ट स्कीमा का पुन: उपयोग करना चाहिए**
   प्रामाणिकता और नीति को बाह्य रूप से स्तरित किया जाना चाहिए, प्रकट या कैटलॉग आकार को विभाजित करके नहीं।
3.**एमसीपी कॉन्फिगरेशन को कुछ विहित निर्यात परिवारों पर केंद्रित होना चाहिए**
   विस्मयकारी ओमनी कौशल अब JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions`, और TOML `[mcp_servers]` के आसपास मानकीकृत होते हैं, जबकि केवल bespoke लेखकों को रखते हुए जहां आधिकारिक क्लाइंट दस्तावेज़ों को एक अलग संरचना की आवश्यकता होती है।

वे निर्णय वर्तमान आधिकारिक एमसीपी और ग्राहक दस्तावेज़ीकरण के अनुरूप हैं, जिनमें शामिल हैं:

- आधिकारिक एमसीपी रजिस्ट्री और एक्सटेंशन समर्थन मार्गदर्शन `modelcontextprotocol.io` पर
- OpenAI डॉक्स MCP और कोडेक्स CLI डॉक्स `developers.openai.com` और `platform.openai.com` पर
- वीएस कोड एमसीपी एक्सटेंशन और उत्पाद दस्तावेज़ `code.visualstudio.com` पर
- क्लाउड कोड, कर्सर, कंटिन्यू, जूनी, किरो, ओपनकोड, क्लाइन, किलो कोड, गिटहब कोपायलट सीएलआई, जेड, गूज, पोस्टमैन और जेटब्रेन एआई असिस्टेंट के लिए क्लाइंट डॉक्स---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| डॉक्टर | आप क्या सीखेंगे |
|:----|:----|
| 📘 [आरंभ करना](उपयोगकर्ता/GETTING-STARTED.md) | अपना पहला कौशल स्थापित करें, सत्यापित करें और लागू करें |
| 🧭 [सीएलआई यूजर गाइड](यूजर्स/सीएलआई-यूजर-गाइड.एमडी) | पूर्ण कमांड संदर्भ और वास्तविक दुनिया सीएलआई उपयोग पैटर्न |
| 📗 [उपयोग गाइड](उपयोगकर्ता/USAGE.md) | सीएलआई कमांड, इंस्टाल मोड, रनटाइम कमांड और एमसीपी कॉन्फिग फ्लो |
| 📦 [बंडल](उपयोगकर्ता/बंडल.एमडी) | क्यूरेटेड बंडल और उनकी वर्तमान उपलब्धता |
| 📚 [कैटलॉग](CATALOG.md) | प्रकाशित कौशल की स्वतः निर्मित सूची |
| 🔧 [सिस्टम रनबुक](ऑपरेशंस/RUNBOOK.md) | रनटाइम बनाएं, परोसें, सुरक्षित करें और समस्या निवारण करें |### 🏗️ If You Want to **Understand** the Runtime

| डॉक्टर | आप क्या सीखेंगे |
|:----|:----|
| 🗂️ [प्रोजेक्ट संरचना](प्रोजेक्ट-स्ट्रक्चर.एमडी) | मोनोरेपो के लिए पूरी निर्देशिका और फ़ाइल संदर्भ |
| 🗺️ [एजेंट-नेटिव रोडमैप](आर्किटेक्चर/एजेंट-नेटिव-रोडमैप.एमडी) | वास्तुकला विकास, बंद निर्णय, और शेष विस्तार क्षेत्र |
| 🧭 [सीएलआई यूएक्स रोडमैप](आर्किटेक्चर/सीएलआई-यूएक्स-रोडमैप.एमडी) | निर्देशित और दृश्य सीएलआई की ऐतिहासिक योजना और वर्तमान स्वरूप |
| 📐 [एडीआर-0001: वर्कस्पेस फाउंडेशन](आर्किटेक्चर/एडीआर-0001-एजेंट-नेटिव-वर्कस्पेस.एमडी) | कोर मोनोरेपो और साझा-रनटाइम निर्णय |
| 🔬 [कोडबेस विश्लेषण](आर्किटेक्चर/कोडबेस-ANALYSIS.md) | वर्तमान रनटाइम संरचना, गणना, और सिस्टम सीमाएँ |
| 🌐 [कैटलॉग एपीआई सरफेस](स्पेक्स/कैटलॉग-एपीआई.एमडी) | HTTP समापन बिंदु, फ़िल्टरिंग, शासन, और डाउनलोड |
| 🧩 [सीएलआई गाइडेड इंस्टालर](स्पेक्स/सीएलआई-गाइडेड-इंस्टॉलर.एमडी) | निर्देशित इंस्टॉलर के लिए व्यवहार अनुबंध |
| 🖥️ [सीएलआई विजुअल शेल](स्पेक्स/सीएलआई-विजुअल-शेल.एमडी) | इंक विजुअल शेल, स्टेट मॉडल और सर्विस हब |
| 🔌 [स्थानीय एमसीपी साइडकार](विशेषताएं/LOCAL-MCP-SIDECAR.md) | फ़ाइल सिस्टम-जागरूक उपकरण, अनुमति सूची मॉडल, और कॉन्फ़िगरेशन लेखन |
| 🧭 [क्लाइंट सपोर्ट मैट्रिक्स](स्पेक्स/क्लाइंट-सपोर्ट-MATRIX.md) | समर्थित सीएलआई और आईडीई क्लाइंट, लेखक, मैन्युअल लक्ष्य और स्रोत संदर्भ |
| 📊 [कौशल वर्गीकरण](विशेषताएं/कौशल-वर्गीकरण.एमडी) | वर्गीकरण, स्कोरिंग अनुमान, और मेटाडेटा कलाकृतियाँ |
| 🛡️ [सुरक्षा सत्यापन](विशेषताएं/सुरक्षा-मान्यता.एमडी) | स्कैनर, अभिलेख, हस्ताक्षर, और रिलीज़ सत्यापन |
| 📋 [कौशल प्रकट विशिष्टता](specs/SKILL-MANIFEST.md) | मशीन-पठनीय मैनिफ़ेस्ट प्रारूप और संगतता अनुबंध |### 🤝 If You Want to **Contribute**

| डॉक्टर | आप क्या सीखेंगे |
|:----|:----|
| 📝 [योगदान मार्गदर्शिका](../CONTRIBUTING.md) | रेपो वर्कफ़्लो और पुल अनुरोध अपेक्षाएँ |
| 🌍 [रिपोजिटरी स्रोत](../REPOSITORY-SOURCES.md) | सामान्य सार्वजनिक पीआर के माध्यम से अपस्ट्रीम रिपॉजिटरी का प्रस्ताव कैसे करें, अब रेपो-फर्स्ट `ऑटो` शाखा और पथ समर्थन के साथ |
| 🧾 [कौशल पीआर वर्कफ़्लो](योगदानकर्ता/कौशल-पीआर-वर्कफ़्लो.एमडी) | मूल सेवन, स्वचालित वर्धक प्रसंस्करण, `skills_omni/` प्रकाशन, और समीक्षक अपेक्षाएँ |
| 📄 [कौशल टेम्पलेट](योगदानकर्ता/कौशल-टेम्पलेट.एमडी) | वर्तमान फ्रंटमैटर और संरचना के साथ स्टार्टर `SKILL.md` |
| 🔬 [कौशल एनाटॉमी](योगदानकर्ता/स्किल-एनाटॉमी.एमडी) | किसी कौशल के लिए संरचना और गुणवत्ता अपेक्षाएँ |
| ✅ [क्वालिटी बार](योगदानकर्ता/क्वालिटी-बार.एमडी) | भंडार के लिए स्वीकृति मानदंड |
| 🏆 [हाई-स्कोर प्लेबुक](योगदानकर्ता/हाई-स्कोर-प्लेबुक.एमडी) | उच्च परिपक्वता, गुणवत्ता, सर्वोत्तम प्रथाओं और सुरक्षा स्कोर को क्या प्रेरित करता है |---

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

संपूर्ण अंतिम-उपयोगकर्ता कमांड सतह के लिए, [सीएलआई उपयोगकर्ता गाइड](उपयोगकर्ता/सीएलआई-उपयोगकर्ता-गाइड.एमडी) का उपयोग करें।### 📁 Generated Artifacts

बिल्ड पाइपलाइन मशीन-पठनीय फ़ाइलों को उत्सर्जित करती है जो प्रत्येक रनटाइम सतह को चलाती हैं:

| कलाकृति | उद्देश्य |
|:------|:-------|
| `मेटाडेटा.जेसन` | रिपॉजिटरी-व्यापी सत्यापन और स्कोर सारांश |
| `skills_index.json` | रेपो-स्थानीय सामान्यीकृत कौशल सूचकांक |
| `dist/catalog.json` | खोज और सूचीकरण के लिए प्रकाशित कैटलॉग |
| `dist/bundles.json` | उपलब्धता के साथ बंडल परिभाषाएँ |
| `dist/manifests/<skill>.json` | प्रति-कौशल मशीन-पठनीय मैनिफ़ेस्ट |
| `dist/archives/<skill>.zip` | कौशल पुरालेख (ज़िप) |
| `dist/archives/<skill>.tar.gz` | कौशल पुरालेख (टारबॉल) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 चेकसम मेनिफेस्ट |

`dist/` उद्देश्य पर प्रतिबद्ध रहता है। ये उत्पन्न कलाकृतियाँ इंस्टाल, एपीआई, एमसीपी, ए2ए, स्मोक और रिलीज़ अनुबंध का हिस्सा हैं।### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

कौशल, बंडल, तुलना, इंस्टॉल योजना और आर्टिफैक्ट डाउनलोड के लिए केवल पढ़ने योग्य रजिस्ट्री एपीआई।### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

स्थानीय साइडकार अब निम्न के लिए प्रथम श्रेणी एमसीपी कॉन्फिग लेखन का समर्थन करता है:

- क्लाउड कोड
- कर्सर
- वीएस कोड और देव कंटेनर
- जेमिनी सीएलआई
- एंटीग्रेविटी
- किरो
- कोडेक्स सीएलआई
- जारी रखें
- विंडसर्फ
- ओपनकोड
- क्लाइन
- गिटहब कोपायलट सीएलआई
-किलो कोड
- जेड
- हंस### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

कार्य जीवनचक्र, स्ट्रीमिंग, दृढ़ता, पुनरारंभ पुनर्प्राप्ति, और सरल-प्रथम स्थानीय ऑर्केस्ट्रेशन। स्पष्ट रूप से सक्षम होने पर साझा पट्टा निष्पादन उपलब्ध होता है; रेडिस एक उन्नत होस्टेड विकल्प बना हुआ है, डिफ़ॉल्ट स्थानीय पथ नहीं।---

## 🗂️ Repository Map

| पथ | उद्देश्य |
|:----|:--------|
| 📂 `कौशल/` | विहित लेखकीय कौशल |
| 📖 `दस्तावेज़/उपयोगकर्ता/` | अंतिम-उपयोगकर्ता दस्तावेज़ |
| 🤝 `दस्तावेज़/योगदानकर्ता/` | योगदानकर्ता टेम्पलेट और मार्गदर्शन |
| 🏗️ `दस्तावेज़/आर्किटेक्चर/` | रोडमैप, एडीआर, और तकनीकी विश्लेषण |
| 🔧 `दस्तावेज़/संचालन/` | ऑपरेशनल रनबुक |
| 📋 `दस्तावेज़/विशेषताएं/` | रनटाइम, प्रोटोकॉल और आर्टिफैक्ट अनुबंध |
| 📚 `docs/CATALOG.md` | उत्पन्न कौशल सूची |
| 📦 `जिला/` | उत्पन्न मशीन-पठनीय कलाकृतियाँ |
| 🧠 `पैकेज/कैटलॉग-कोर/` | `ICatalogStorageAdapter` DI | के साथ साझा कैटलॉग रनटाइम
| 🌐 `पैकेज/सर्वर-एपीआई/` | `/docs` | पर OpenAPI/Swagger UI के साथ केवल पढ़ने योग्य HTTP API
| 🔌 `पैकेज/सर्वर-एमसीपी/` | एमसीपी सर्वर और स्थानीय साइडकार |
| 🤖 `पैकेज/सर्वर-a2a/` | A2A सर्वर और कार्य रनटाइम |
| 🖥️ `पैकेज/सीएलआई/` | एकीकृत सीएलआई एंट्रीप्वाइंट, इंस्टॉल लॉजिक और इंक विज़ुअल टीयूआई (ईएसएम-नेटिव) |
| ⚙️ `टूल्स/स्क्रिप्ट/` | सत्यापन, निर्माण, सत्यापन और परीक्षण |
| 🧪 `vitest.workspace.js` | विटेस्ट मोनोरेपो कार्यक्षेत्र विन्यास |---

## 🧪 Release Validation

```bash
npm run smoke
```

स्मोक रन मान्य करता है:

- ✅ कौशल सत्यापन और मेटाडेटा निर्माण
- ✅ वर्गीकरण पुनर्वर्गीकरण टूलींग
- ✅ कैटलॉग आर्टिफैक्ट पीढ़ी
- ✅ जेनरेटेड कैटलॉग मार्कडाउन
- ✅ संग्रह निर्माण और सत्यापन
- ✅ विरासत एकीकरण परीक्षण सूट (पायथन पीटीवाई + नोड टीयूआई दावे)
- ✅ कैटलॉग-कोर स्कोरिंग, खोज और फ़िल्टरिंग के लिए विटेस्ट यूनिट सुइट
- ✅ `एनपीएम पैक--ड्राई-रन`
- ✅ `/docs` पर OpenAPI/Swagger UI के साथ API बूट और स्वास्थ्य
- ✅ `stdio`, `stream`, और `sse` में MCP बूट
- ✅ A2A बूट, पोलिंग, SSE स्ट्रीमिंग, रद्दीकरण, और पुश-कॉन्फिग जीवनचक्र
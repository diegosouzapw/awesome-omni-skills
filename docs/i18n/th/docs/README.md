# 📖 Awesome Omni Skills — Documentation Hub (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**ข้อมูลอ้างอิงส่วนกลางสำหรับการใช้ มีส่วนร่วม และดำเนินการ Awesome Omni Skills เป็นที่เก็บข้อมูลทักษะสาธารณะ พื้นผิวอนุพันธ์ของแนวทางปฏิบัติที่ดีที่สุดที่ได้รับการดูแลจัดการ และแพลตฟอร์มรันไทม์ที่ใช้ร่วมกัน**

ไฟล์ชุมชนมาตรฐานอยู่ในรูทของที่เก็บ:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> แพ็คเกจ npm, พื้นที่เก็บข้อมูล GitHub, เอกสารที่สร้างขึ้น และจุดเข้าใช้งานรันไทม์ได้รับการปรับปรุงให้สอดคล้องกับ**ทักษะ Omni ที่ยอดเยี่ยม**สถานะการเปิดตัวปัจจุบัน: [การเปิดตัวทักษะ Omni ที่ยอดเยี่ยม](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md)---

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

ตอนนี้แทร็กพื้นฐานอยู่ในสถานะโปรเจ็กต์ที่ใช้งานอยู่ และเวฟการขยายหมวดหมู่ที่สองอยู่ในแค็ตตาล็อกแล้ว ตอนนี้ควรอ่านโปรเจ็กต์เป็นพื้นฐานการทำงานพร้อมแทร็กการขยายในอนาคตที่เป็นทางเลือก:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

การขยายในอนาคตยังคงมีการพิจารณา:

- เจาะลึก `การออกแบบ` `เครื่องมือ` `data-ai` และ `แมชชีนเลิร์นนิง`
- หลีกเลี่ยงการเปิดหมวดหมู่ที่ไม่ใช่โค้ดเนทีฟซึ่งอยู่เฉยๆ อีกครั้ง จนกว่าแทร็กที่ใช้โค้ดเนทีฟในปัจจุบันจะมีความลึกมากขึ้น
- รักษาคุณภาพขั้นต่ำและเส้นทางการตรวจสอบตัวปรับปรุงให้คงเดิมในขณะทำเช่นนั้น

งานขยายดังกล่าวสะท้อนให้เห็นโดยตรงในแค็ตตาล็อกสดและเอกสารสถาปัตยกรรม:

- สแนปชอตแคตตาล็อกปัจจุบันใน [Catalog](CATALOG.md)
- รันไทม์และรูปร่างของสิ่งประดิษฐ์ใน [Codebase Analysis](architecture/CODEBASE-ANALYSIS.md)
- ทิศทางไปข้างหน้าใน [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

ทักษะ Omni ที่ยอดเยี่ยมควรอ่านเป็นสามพื้นผิวที่เชื่อมต่อกัน:

| พื้นผิว | มันคืออะไร | มันเปลี่ยนไปอย่างไร |
|:--------|:-----------|:---------------|
| 📥 `ทักษะ/` | พื้นที่เก็บข้อมูลทักษะภาษาพื้นเมืองสาธารณะ | ประชาสัมพันธ์ผู้ร่วมให้ข้อมูลโดยตรงและตรวจสอบการรับข้อมูลจากภายนอกตามพื้นที่เก็บข้อมูล
| ✨ `skills_omni/` | Curated พื้นผิวอนุพันธ์แนวปฏิบัติที่ดีที่สุดที่ปรับปรุงแล้ว | PRs สหายเสริมส่วนตัวเท่านั้น |
| 🖥️ พื้นผิวรันไทม์ | CLI, API, MCP และ A2A บนแค็ตตาล็อกที่สร้างขึ้นเดียวกัน | สร้าง ตรวจสอบ และเผยแพร่อัตโนมัติ |---

## 📌 Current Decisions

คำถามเกี่ยวกับสถาปัตยกรรมเหล่านี้ไม่ได้ "เปิดกว้าง" ในทางปฏิบัติอีกต่อไป และตอนนี้ถือเป็นการตัดสินใจของโครงการ:

1.**การแจกจ่ายยังคงอยู่อย่างชัดแจ้งก่อนพร้อมลายเซ็นที่ลงนาม**
   ไฟล์ Manifest ที่เครื่องอ่านได้ยังคงเป็นสัญญาที่ใช้โดย CLI, API, MCP และ A2A เอกสารสำคัญต่อทักษะที่ลงนามแล้วคือการดาวน์โหลดและเผยแพร่พื้นผิวที่อยู่ด้านบนของสัญญานั้น
2.**แค็ตตาล็อกส่วนตัวหรือพรีเมียมควรใช้ Manifest Schema เดียวกันซ้ำ**
   การตรวจสอบสิทธิ์และนโยบายควรซ้อนกันหลายชั้นจากภายนอก ไม่ใช่โดยการแยกรูปร่างรายการหรือแค็ตตาล็อก
3.**การกำหนดค่า MCP ควรมาบรรจบกันในตระกูลการส่งออกตามรูปแบบบัญญัติบางกลุ่ม**
   ตอนนี้ทักษะ Omni ที่ยอดเยี่ยมได้สร้างมาตรฐานให้กับ JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` และ TOML `[mcp_servers]` ในขณะเดียวกันก็รักษานักเขียนตามความต้องการเฉพาะในกรณีที่เอกสารของลูกค้าอย่างเป็นทางการต้องการโครงสร้างที่แตกต่างกัน

การตัดสินใจเหล่านั้นสอดคล้องกับเอกสาร MCP และลูกค้าอย่างเป็นทางการในปัจจุบัน ซึ่งรวมถึง:

- คำแนะนำการสนับสนุน MCP Registry และส่วนขยายอย่างเป็นทางการที่ `modelcontextprotocol.io`
- เอกสาร OpenAI Docs MCP และ Codex CLI ที่ `developers.openai.com` และ `platform.openai.com`
- ส่วนขยาย VS Code MCP และเอกสารผลิตภัณฑ์ที่ `code.visualstudio.com`
- เอกสารไคลเอนต์สำหรับ Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman และ JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| หมอ | สิ่งที่คุณจะได้เรียนรู้ |
|:----|:-----------------|
| 📘 [เริ่มต้นใช้งาน](users/GETTING-STARTED.md) | ติดตั้ง ตรวจสอบ และเรียกใช้ทักษะแรกของคุณ |
| 🧭 [คู่มือผู้ใช้ CLI](users/CLI-USER-GUIDE.md) | การอ้างอิงคำสั่งแบบเต็มและรูปแบบการใช้งาน CLI ในโลกแห่งความเป็นจริง
| 📗 [คู่มือการใช้งาน](users/USAGE.md) | คำสั่ง CLI, โหมดการติดตั้ง, คำสั่งรันไทม์ และโฟลว์การกำหนดค่า MCP
| 📦 [บันเดิล](users/BUNDLES.md) | บันเดิลที่คัดสรรแล้วและความพร้อมใช้งานในปัจจุบัน |
| 📚 [แคตตาล็อก](CATALOG.md) | แคตตาล็อกทักษะที่เผยแพร่ที่สร้างขึ้นโดยอัตโนมัติ |
| ???? [รันบุ๊กระบบ](operations/RUNBOOK.md) | สร้าง ให้บริการ รักษาความปลอดภัย และแก้ไขปัญหารันไทม์ |### 🏗️ If You Want to **Understand** the Runtime

| หมอ | สิ่งที่คุณจะได้เรียนรู้ |
|:----|:-----------------|
| 🗂️ [โครงสร้างโครงการ](PROJECT-STRUCTURE.md) | ทำไดเร็กทอรีและการอ้างอิงไฟล์ให้สมบูรณ์สำหรับ monorepo |
| 🗺️ [Agent-Native Roadmap](สถาปัตยกรรม/AGENT-NATIVE-ROADMAP.md) | วิวัฒนาการทางสถาปัตยกรรม การตัดสินใจแบบปิด และพื้นที่การขยายที่เหลืออยู่ |
| 🧭 [แผนงาน CLI UX](สถาปัตยกรรม/CLI-UX-ROADMAP.md) | แผนประวัติศาสตร์และรูปร่างปัจจุบันของ CLI ที่แนะนำและแบบเห็นภาพ |
| 📐 [ADR-0001: มูลนิธิพื้นที่ทำงาน](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Core monorepo และการตัดสินใจรันไทม์แบบแบ่งใช้ |
| 🔬 [การวิเคราะห์โค้ดเบส](สถาปัตยกรรม/CODEBASE-ANALYSIS.md) | องค์ประกอบรันไทม์ปัจจุบัน จำนวน และขอบเขตของระบบ |
| 🌐 [พื้นผิวแค็ตตาล็อก API](specs/CATALOG-API.md) | จุดสิ้นสุด HTTP การกรอง การกำกับดูแล และการดาวน์โหลด |
| 🧩 [ตัวติดตั้งแนะนำ CLI](specs/CLI-GUIDED-INSTALLER.md) | สัญญาเชิงพฤติกรรมสำหรับผู้ติดตั้งที่แนะนำ |
| 🖥️ [CLI Visual Shell](รายละเอียด/CLI-VISUAL-SHELL.md) | Ink Visual Shell แบบจำลองสถานะ และศูนย์บริการ |
| 🔌 [รถไซด์คาร์ MCP ในพื้นที่](รายละเอียด/LOCAL-MCP-SIDECAR.md) | เครื่องมือที่คำนึงถึงระบบไฟล์ โมเดลรายการที่อนุญาต และการเขียนการกำหนดค่า |
| 🧭 [เมทริกซ์การสนับสนุนลูกค้า](specs/CLIENT-SUPPORT-MATRIX.md) | รองรับไคลเอนต์ CLI และ IDE, ตัวเขียน, เป้าหมายแบบแมนนวล และการอ้างอิงแหล่งที่มา |
| 📊 [การจำแนกทักษะ](specs/SKILL-CLASSIFICATION.md) | อนุกรมวิธาน พฤติกรรมการให้คะแนน และสิ่งประดิษฐ์ของเมตาดาต้า
| 🛡️ [การตรวจสอบความปลอดภัย](specs/SECURITY-VALIDATION.md) | เครื่องสแกน เอกสารสำคัญ ลายเซ็น และการยืนยันการเผยแพร่ |
| 📋 [ข้อมูลจำเพาะรายการทักษะ](specs/SKILL-MANIFEST.md) | รูปแบบไฟล์ Manifest ที่เครื่องอ่านได้และสัญญาความเข้ากันได้ |### 🤝 If You Want to **Contribute**

| หมอ | สิ่งที่คุณจะได้เรียนรู้ |
|:----|:-----------------|
| 📝 [คู่มือการมีส่วนร่วม](../CONTRIBUTING.md) | เวิร์กโฟลว์ Repo และความคาดหวังคำขอดึง |
| 🌍 [แหล่งที่มาของพื้นที่เก็บข้อมูล](../REPOSITORY-SOURCES.md) | วิธีเสนอพื้นที่เก็บข้อมูลต้นน้ำผ่านการประชาสัมพันธ์สาธารณะปกติ ขณะนี้มีการสนับสนุนสาขาและเส้นทาง 'อัตโนมัติ' อันดับแรกของ repo
| 🧾 [เวิร์กโฟลว์การประชาสัมพันธ์ทักษะ](contributors/SKILL-PR-WORKFLOW.md) | การบริโภคแบบเนทีฟ, การประมวลผลการปรับปรุงอัตโนมัติ, การเผยแพร่ `skills_omni/` และความคาดหวังของผู้ตรวจสอบ |
| 📄 [เทมเพลตทักษะ](contributors/SKILL-TEMPLATE.md) | เริ่มต้น `SKILL.md` พร้อมส่วนหน้าและโครงสร้างปัจจุบัน |
| 🔬 [ทักษะกายวิภาคศาสตร์](ผู้สนับสนุน/SKILL-ANATOMY.md) | โครงสร้างและความคาดหวังด้านคุณภาพสำหรับทักษะ |
| ✅ [แถบคุณภาพ](ผู้สนับสนุน/QUALITY-BAR.md) | เกณฑ์การยอมรับสำหรับพื้นที่เก็บข้อมูล |
| 🏆 [คู่มือคะแนนสูง](ผู้มีส่วนร่วม/HIGH-SCORE-PLAYBOOK.md) | อะไรที่ทำให้วุฒิภาวะ คุณภาพ แนวปฏิบัติที่ดีที่สุด และคะแนนความปลอดภัยสูง |---

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

สำหรับพื้นผิวคำสั่งของผู้ใช้ที่สมบูรณ์ ให้ใช้ [คู่มือผู้ใช้ CLI](users/CLI-USER-GUIDE.md)### 📁 Generated Artifacts

ไปป์ไลน์บิวด์จะปล่อยไฟล์ที่เครื่องอ่านได้ซึ่งจะขับเคลื่อนทุกพื้นผิวรันไทม์:

| สิ่งประดิษฐ์ | วัตถุประสงค์ |
|:---------|:--------|
| `metadata.json` | การตรวจสอบความถูกต้องทั่วทั้งพื้นที่เก็บข้อมูลและสรุปคะแนน |
| `skills_index.json` | ดัชนีทักษะการทำให้เป็นมาตรฐานของ Repo-local |
| `dist/catalog.json` | แคตตาล็อกที่เผยแพร่สำหรับการค้นหาและรายการ |
| `dist/bundles.json` | คำจำกัดความของกลุ่มที่มีความพร้อมใช้งาน |
| `dist/manifests/<ทักษะ>.json` | รายการต่อทักษะที่เครื่องอ่านได้ |
| `dist/archives/<ทักษะ>.zip` | ไฟล์เก็บถาวรทักษะ (zip) |
| `dist/archives/<ทักษะ>.tar.gz` | คลังทักษะ (tarball) |
| `dist/archives/<ทักษะ>.checksums.txt` | รายการตรวจสอบผลรวม SHA-256 |

`dist/` ยังคงมุ่งมั่นอย่างตั้งใจ อาร์ติแฟกต์ที่สร้างขึ้นเหล่านี้เป็นส่วนหนึ่งของสัญญาการติดตั้ง, API, MCP, A2A, Smoke และ Release### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API รีจิสทรีแบบอ่านอย่างเดียวสำหรับทักษะ บันเดิล การเปรียบเทียบ การวางแผนการติดตั้ง และการดาวน์โหลดอาร์ติแฟกต์### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

ขณะนี้ Sidecar ภายในรองรับการเขียนการกำหนดค่า MCP ระดับเฟิร์สคลาสสำหรับ:

- คล็อด โค้ด
- เคอร์เซอร์
- รหัส VS และคอนเทนเนอร์ Dev
- ราศีเมถุน CLI
- ต้านแรงโน้มถ่วง
- คิโระ
- โคเด็กซ์ CLI
- ทำต่อ
- วินด์เซิร์ฟ
- โอเพ่นโค้ด
- ไคลน์
- GitHub Copilot CLI
- รหัสกิโล
- เซด
- ห่าน### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

วงจรชีวิตของงาน การสตรีม การคงอยู่ การรีสตาร์ทการกู้คืน และการจัดการภายในเครื่องแบบง่ายๆ ก่อน การดำเนินการเช่าที่ใช้ร่วมกันจะพร้อมใช้งานเมื่อเปิดใช้งานอย่างชัดเจน Redis ยังคงเป็นตัวเลือกการโฮสต์ขั้นสูง ไม่ใช่เส้นทางในเครื่องเริ่มต้น---

## 🗂️ Repository Map

| เส้นทาง | วัตถุประสงค์ |
|:-----|:--------|
| 📂 `ทักษะ/` | ทักษะการเขียนตามหลักบัญญัติ |
| 📖 `เอกสาร/ผู้ใช้/` | เอกสารสำหรับผู้ใช้ปลายทาง |
| 🤝 `เอกสาร/ผู้มีส่วนร่วม/` | เทมเพลตและคำแนะนำสำหรับผู้ร่วมให้ข้อมูล |
| 🏗️ `เอกสาร/สถาปัตยกรรม/` | แผนการทำงาน, ADR และการวิเคราะห์ทางเทคนิค |
| 🥇 `เอกสาร/ปฏิบัติการ/` | สมุดปฏิบัติการ |
| 📋 `เอกสาร/ข้อมูลจำเพาะ/` | รันไทม์ โปรโตคอล และสัญญาอาร์ติแฟกต์ |
| 📚 `docs/CATALOG.md` | แคตตาล็อกทักษะที่สร้างขึ้น |
| 📦 `dist/` | สิ่งประดิษฐ์ที่เครื่องอ่านได้ที่สร้างขึ้น |
| 🧠 `แพ็คเกจ/แค็ตตาล็อก-คอร์/` | รันไทม์แคตตาล็อกที่ใช้ร่วมกันกับ `ICatalogStorageAdapter` DI |
| 🌐 `แพ็คเกจ/เซิร์ฟเวอร์-api/` | HTTP API แบบอ่านอย่างเดียวพร้อม OpenAPI/Swagger UI บน `/docs` |
| 🔌 `แพ็คเกจ/เซิร์ฟเวอร์-mcp/` | เซิร์ฟเวอร์ MCP และรถเทียมข้างรถจักรยานยนต์ |
| 🤖 `แพ็คเกจ/เซิร์ฟเวอร์-a2a/` | เซิร์ฟเวอร์ A2A และรันไทม์งาน |
| 🖥️ `แพ็คเกจ/cli/` | จุดเข้าใช้งาน CLI แบบรวม ตรรกะการติดตั้ง และ Ink Visual TUI (ESM-native) |
| ⚙️ `เครื่องมือ/สคริปต์/` | การตรวจสอบความถูกต้อง การสร้าง การตรวจสอบ และการทดสอบ |
| 🧪 `vite.workspace.js` | เยี่ยมชมการกำหนดค่าพื้นที่ทำงาน monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

การเรียกใช้ควันจะตรวจสอบ:

- ✅ การตรวจสอบทักษะและการสร้างข้อมูลเมตา
- ✅ เครื่องมือการจัดหมวดหมู่อนุกรมวิธานใหม่
- ✅ การสร้างแค็ตตาล็อกสิ่งประดิษฐ์
- ✅ สร้างมาร์กดาวน์แคตตาล็อกแล้ว
- ✅ การสร้างและการตรวจสอบไฟล์เก็บถาวร
- ✅ ชุดทดสอบการรวมแบบดั้งเดิม (การยืนยัน Python PTY + Node TUI)
- ✅ ชุดหน่วย Vitest สำหรับการให้คะแนนแคตตาล็อก-คอร์ การค้นหา และการกรอง
- ✅ `npm pack --dry-run`
- ✅ การบูต API และสุขภาพด้วย OpenAPI/Swagger UI บน `/docs`
- ✅ บูต MCP ใน `stdio`, `stream` และ `sse`
- ✅ การบูต A2A, การโพล, การสตรีม SSE, การยกเลิก และวงจรการใช้งานแบบพุช
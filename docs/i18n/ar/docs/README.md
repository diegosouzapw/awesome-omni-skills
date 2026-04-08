# 📖 Awesome Omni Skills — Documentation Hub (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**المرجع المركزي لاستخدام Awesome Omni Skills والمساهمة فيها وتشغيلها كمستودع عام للمهارات، وسطح مشتق منظم لأفضل الممارسات، ومنصة وقت تشغيل مشتركة.**

توجد ملفات المجتمع القياسية في جذر المستودع:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> تمت الآن محاذاة حزمة npm ومستودع GitHub والمستندات التي تم إنشاؤها ونقاط دخول وقت التشغيل في**Awesome Omni Skills**. حالة الطرح الحالية: [طرح مهارات Omni الرائعة](operations/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

يعيش المسار الأساسي الآن في حالة المشروع النشط، وموجة توسيع الفئة الثانية موجودة بالفعل في الكتالوج. يجب الآن قراءة المشروع كخط أساس للعمل مع مسارات توسع مستقبلية اختيارية:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

التوسع المستقبلي يظل متعمدًا:

- تعميق "التصميم" و"الأدوات" و"الذكاء الاصطناعي للبيانات" و"التعلم الآلي"
- تجنب إعادة فتح الفئات الخاملة غير الأصلية حتى تتمتع المسارات الحالية ذات الكود الأصلي بعمق أقوى
- حافظ على أرضية الجودة ومسار مراجعة المحسن سليمًا أثناء القيام بذلك

ينعكس الآن عمل التوسعة مباشرةً في الكتالوج المباشر ومستندات الهندسة المعمارية:

- لقطة الكتالوج الحالية في [الكتالوج](CATALOG.md)
- وقت التشغيل والشكل الأثري في [تحليل قاعدة التعليمات البرمجية](architecture/CODEBASE-ANALYSIS.md)
- الاتجاه الأمامي في [خارطة طريق Agent-Native](architecture/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

يجب قراءة المهارات الشاملة الرائعة على أنها ثلاثة أسطح متصلة:

| السطح | ما هو | كيف يتغير |
|:--------|:----------|:---------------|
| 📥 `مهارات/` | مستودع المهارات المحلية العام | ممثلو العلاقات العامة للمساهم المباشر والمدخل الخارجي المعتمد على المستودع |
| ✨`skills_omni/` | سطح مشتق محسّن لأفضل الممارسات | رفيق محسن خاص للعلاقات العامة فقط |
| 🖥️ أسطح وقت التشغيل | CLI وAPI وMCP وA2A في نفس الكتالوج الذي تم إنشاؤه | البناء والتحقق من الصحة وإصدار الأتمتة |---

## 📌 Current Decisions

لم تعد هذه الأسئلة المتعلقة بالهندسة المعمارية "مفتوحة" في الممارسة العملية ويتم التعامل معها الآن كقرارات مشروع:

1.**يبقى التوزيع في البيان أولاً بالإضافة إلى الأرشيفات الموقعة**
   يظل البيان المقروء آليًا هو العقد الذي تستهلكه CLI وAPI وMCP وA2A. إن الأرشيفات الموقعة لكل مهارة هي سطح التنزيل والإصدار الموجود أعلى هذا العقد.
2.**يجب أن تعيد الكتالوجات الخاصة أو المميزة استخدام نفس مخطط البيان**
   يجب أن يتم وضع المصادقة والسياسة في طبقات خارجية، وليس عن طريق تشعب شكل البيان أو الكتالوج.
3.**يجب أن يتقارب تكوين MCP مع عدد قليل من عائلات التصدير الأساسية**
   يتم الآن توحيد مهارات Omni الرائعة حول JSON `mcpServers`، وJSON `servers`، وJSON `context_servers`، وYAML `mcpServers`، وYAML `extensions`، وTOML `[mcp_servers]`، مع الاحتفاظ بالكتابة المخصصة فقط عندما تتطلب مستندات العميل الرسمية بنية مختلفة.

تتوافق هذه القرارات مع وثائق MCP الرسمية الحالية والعميل، بما في ذلك:

- سجل MCP الرسمي وإرشادات دعم الامتداد على "modelcontextprotocol.io".
- مستندات OpenAI Docs MCP وCodex CLI على "developers.openai.com" و"platform.openai.com".
- ملحق VS Code MCP ومستندات المنتج على "code.visualstudio.com".
- مستندات العميل لـ Claude Code، وCursor، وContinue، وJunie، وKiro، وOpenCode، وCline، وKilo Code، وGitHub Copilot CLI، وZed، وGoose، وPostman، وJetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| وثيقة | ماذا ستتعلم |
|:----|:------------------|
| 📘 [البدء](users/GETTING-STARTED.md) | قم بتثبيت مهارتك الأولى والتحقق منها واستدعاءها |
| 🧭 [دليل مستخدم CLI](users/CLI-USER-GUIDE.md) | مرجع كامل للأوامر وأنماط استخدام واجهة سطر الأوامر (CLI) في العالم الحقيقي |
| 📗 [دليل الاستخدام](users/USAGE.md) | أوامر CLI وأوضاع التثبيت وأوامر وقت التشغيل وتدفقات تكوين MCP |
| 📦 [الحزم](users/BUNDLES.md) | الحزم المنسقة وتوافرها الحالي |
| 📚 [الكتالوج](CATALOG.md) | كتالوج تم إنشاؤه تلقائيًا للمهارات المنشورة |
| 🔧 [دليل تشغيل النظام](operations/RUNBOOK.md) | إنشاء وقت التشغيل وخدمته وتأمينه واستكشاف أخطائه وإصلاحها |### 🏗️ If You Want to **Understand** the Runtime

| وثيقة | ماذا ستتعلم |
|:----|:------------------|
| 🗂️ [هيكل المشروع](PROJECT-STRUCTURE.md) | الدليل الكامل ومرجع الملف لـ monorepo |
| 🗺️ [خريطة طريق الوكيل الأصلي](architecture/AGENT-NATIVE-ROADMAP.md) | تطور العمارة والقرارات المغلقة ومجالات التوسع المتبقية |
| 🧭 [خريطة طريق CLI UX](architecture/CLI-UX-ROADMAP.md) | الخطة التاريخية والشكل الحالي لـ CLI الموجهة والمرئية |
| 📐 [ADR-0001: Workspace Foundation](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | monorepo الأساسي وقرار وقت التشغيل المشترك |
| 🔬 [تحليل قاعدة الكود](architecture/CODEBASE-ANALYSIS.md) | تكوين وقت التشغيل الحالي، والتعداد، وحدود النظام |
| 🌐 [سطح واجهة برمجة تطبيقات الكتالوج](specs/CATALOG-API.md) | نقاط نهاية HTTP والتصفية والحوكمة والتنزيلات |
| 🧩 [مثبت CLI الموجه](المواصفات/CLI-GUIDED-INSTALLER.md) | العقد السلوكي للمثبت الموجه |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | الغلاف المرئي للحبر ونموذج الحالة ومركز الخدمة |
| 🔌 [MCP Sidecar المحلي](specs/LOCAL-MCP-SIDECAR.md) | الأدوات المتوافقة مع نظام الملفات ونموذج القائمة المسموح بها وكتابة التكوين |
| 🧭 [مصفوفة دعم العميل](specs/CLIENT-SUPPORT-MATRIX.md) | عملاء CLI و IDE المدعومون والكتاب والأهداف اليدوية ومراجع المصدر |
| 📊 [تصنيف المهارات](specs/SKILL-CLASSIFICATION.md) | التصنيف، والاستدلال على النتائج، والتحف البيانات الوصفية |
| 🛡️ [التحقق من صحة الأمان](specs/SECURITY-VALIDATION.md) | الماسحات الضوئية والمحفوظات والتوقيعات والتحقق من الإصدار |
| 📋 [مواصفات بيان المهارة](specs/SKILL-MANIFEST.md) | تنسيق البيان المقروء آليًا وعقد التوافق |### 🤝 If You Want to **Contribute**

| وثيقة | ماذا ستتعلم |
|:----|:------------------|
| 📝 [ دليل المساهمة ](../CONTRIBUTING.md) | سير عمل الريبو وتوقعات طلب السحب |
| 🌍[المصادر المستودعية](../REPOSITORY-SOURCES.md) | كيفية اقتراح مستودع أولي من خلال العلاقات العامة العامة العادية، الآن مع فرع الريبو الأول "التلقائي" ودعم المسار |
| 🧾 [سير عمل العلاقات العامة في المهارات](contributors/SKILL-PR-WORKFLOW.md) | الاستيعاب الأصلي، ومعالجة المحسنات التلقائية، والنشر `skills_omni/`، وتوقعات المراجعين |
| 📄 [نموذج المهارة](contributors/SKILL-TEMPLATE.md) | بداية `SKILL.md` مع المادة الأمامية الحالية والهيكل |
| 🔬 [مهارة التشريح](contributors/SKILL-ANATOMY.md) | هيكل وتوقعات الجودة للمهارة |
| ✅ [شريط الجودة](contributors/QUALITY-BAR.md) | معايير القبول للمستودع |
| 🏆 [دليل اللعب عالي الدرجات](contributors/HIGH-SCORE-PLAYBOOK.md) | ما الذي يدفع إلى النضج العالي والجودة وأفضل الممارسات ودرجات الأمان |---

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

للحصول على سطح أوامر المستخدم النهائي الكامل، استخدم [دليل مستخدم CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

يُصدر خط أنابيب الإنشاء الملفات القابلة للقراءة آليًا والتي تقود كل سطح وقت التشغيل:

| قطعة أثرية | الغرض |
|:---------|:-------|
| `metadata.json` | التحقق من صحة المستودع وملخص النتيجة |
| `skills_index.json` | مؤشر المهارات الطبيعية المحلية الريبو |
| `dist/catalog.json` | نشر كتالوج للبحث والإدراج |
| `dist/bundles.json` | تعريفات الحزمة مع التوفر |
| `dist/manifests/<skill>.json` | بيان يمكن قراءته آليًا لكل مهارة |
| `dist/archives/<skill>.zip` | أرشيف المهارات (zip) |
| `dist/archives/<skill>.tar.gz` | أرشيف المهارات (القطران) |
| `dist/archives/<skill>.checksums.txt` | بيان المجموع الاختباري SHA-256 |

يظل `dist/` ملتزمًا عن قصد. تعد هذه العناصر التي تم إنشاؤها جزءًا من عقد التثبيت وAPI وMCP وA2A والدخان والإصدار.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

واجهة برمجة تطبيقات التسجيل للقراءة فقط للمهارات والحزم والمقارنة وتخطيط التثبيت وتنزيلات العناصر.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

يدعم الجهاز الجانبي المحلي الآن كتابة تكوين MCP من الدرجة الأولى من أجل:

- كلود كود
- المؤشر
- كود VS وحاويات التطوير
- الجوزاء CLI
- مضاد الجاذبية
- كيرو
- كوديكس كلي
- تابع
- ركوب الأمواج
- الكود المفتوح
- كلاين
- جيثب مساعد الطيار CLI
- كود الكيلو
- زيد
- أوزة### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

دورة حياة المهمة، والتدفق، والمثابرة، وإعادة تشغيل الاسترداد، والتنسيق المحلي البسيط أولاً. يتوفر التنفيذ المؤجر المشترك عند تمكينه بشكل صريح؛ يظل Redis خيارًا مستضافًا متقدمًا، وليس المسار المحلي الافتراضي.---

## 🗂️ Repository Map

| المسار | الغرض |
|:-----|:--------|
| 📂 `مهارات/` | مهارات التأليف الكنسي |
| 📖 `docs/users/` | وثائق المستخدم النهائي |
| 🤝 `docs/contributors/` | قوالب المساهمين والإرشادات |
| 🏗️ `docs/architecture/` | خريطة الطريق، ADRs، والتحليل الفني |
| 🔧`docs/operations/` | دفاتر التشغيل التشغيلية |
| 📋 `مستندات/مواصفات/` | وقت التشغيل والبروتوكول والعقود الأثرية |
| 📚`docs/CATALOG.md` | كتالوج المهارات المولدة |
| 📦 `ديست/` | التحف المولدة للقراءة آليا |
| 🧠 `packages/catalog-core/` | وقت تشغيل الكتالوج المشترك مع `ICatalogStorageAdapter` DI |
| 🌐 `packages/server-api/` | واجهة برمجة تطبيقات HTTP للقراءة فقط مع واجهة مستخدم OpenAPI/Swagger على `/docs` |
| 🔌`packages/server-mcp/` | خادم MCP والعربة الجانبية المحلية |
| 🤖 `packages/server-a2a/` | خادم A2A ووقت تشغيل المهمة |
| 🖥️ `الحزم/cli/` | نقاط دخول CLI الموحدة ومنطق التثبيت وTUI المرئي بالحبر (ESM الأصلي) |
| ⚙️ `أدوات/نصوص برمجية/` | التحقق من الصحة والتوليد والتحقق والاختبارات |
| 🧪`vitest.workspace.js` | تكوين مساحة عمل Vitest monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

يؤكد تشغيل الدخان:

- ✅ التحقق من صحة المهارات وتوليد البيانات الوصفية
- ✅ أدوات إعادة تصنيف التصنيف
- ✅ توليد القطع الأثرية بالكتالوج
- ✅ تخفيض سعر الكتالوج الذي تم إنشاؤه
- ✅ إنشاء الأرشيف والتحقق منه
- ✅ مجموعة اختبار التكامل القديمة (Python PTY + تأكيدات Node TUI)
- ✅ مجموعة وحدات Vitest للتسجيل الأساسي للكتالوج والبحث والتصفية
- ✅ `حزمة npm --dry-run`
- ✅ تشغيل واجهة برمجة التطبيقات (API) وصحتها باستخدام OpenAPI/Swagger UI على "/docs".
- ✅ تشغيل MCP في "stdio" و"stream" و"sse".
- ✅ تمهيد A2A، والاستقصاء، وتدفق SSE، والإلغاء، ودورة حياة الضغط على التكوين
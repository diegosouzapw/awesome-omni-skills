# 🗂️ Project Structure (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**الدليل الكامل ومرجع الملف لـ Awesome Omni Skills monorepo.**---

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

>**كتالوج المهارات الأصلية.**هذا هو سطح المحتوى العام الأساسي للمشروع.

يحتوي على**154**دليل مهارات، يحتوي كل منها على دليل قواعد اللعبة "SKILL.md" على الأقل. قد تتضمن المهارات الأكبر الدلائل الفرعية "الوكلاء/"، و"المراجع/"، و"الأمثلة/"، و"النصوص البرمجية/"، و"الأصول/".

تصل المهارات من خلال مسارين:
-**العلاقات العامة للمساهم المباشر**- يقدم البشر المهارات مباشرة
-**الواردات الخارجية المستندة إلى المستودع**— تمت مراجعة معدلات الاستيراد الخارجية/*` من المستودعات الأولية

| ما يحتويه | مثال |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | مهارة التصميم فيجما إلى الكود |
| `skills/architecture/SKILL.md` | مهارة المراجعة والتخطيط المعماري |
| `المهارات/<الاسم>/metadata.json` | التصنيف والتسجيل الذي تم إنشاؤه تلقائيًا |---

### `skills_omni/`

>**مشتقات محسنة منسقة باللغة الإنجليزية فقط.**تتم المحافظة عليها من خلال خط أنابيب التحسين الخاص.

يحتوي على**110**أدلة مهارات محسّنة تعكس نظيراتها الأصلية في "المهارات/" وتحسنها. هذا السطح**غير مفتوح للمساهمة العامة المباشرة**— يتم ملؤه حصريًا من خلال خط أنابيب المحسن الآلي.

يحافظ كل مشتق على الإسناد إلى مصدره الأصلي مع توفير مستوى تحريري أعلى، دائمًا باللغة الإنجليزية.---

### `packages/`

>**مساحات عمل monorepo.**جميع أكواد Node.js وقت التشغيل موجودة هنا.

| الحزمة | اسم npm | الغرض |
|:--------|:--------|:--------|
| 📂 `packages/catalog-core/` | `@omni-skills/catalog-core` | وقت تشغيل الكتالوج المشترك مع حقن التبعية `ICatalogStorageAdapter`. يوفر البحث والتسجيل والمقارنة والتوصية ومنطق خطة التثبيت الذي تستهلكه جميع أسطح الخادم |
| 📂 `الحزم/cli/` | (صندوق الحزمة الجذر) | نقاط دخول CLI موحدة، وبرنامج التثبيت الموجه، وواجهة TUI المرئية بالحبر، والتشخيصات، وفحص الدخان، ومشغلات الخدمة. ESM-أصلي |
| 📂`الحزم/تثبيت-الأهداف/` | `@omni-skills/install-targets` | سجل العملاء التسعة القادرين على التثبيت (Claude Code، وCursor، وGemini CLI، وCodex CLI، وKiro، وAntigravity، وGoose، وQwen Code، وOpenCode) مع دقة المسار ورسم خرائط العلم |
| 📂`packages/server-api/` | `@omni-skills/server-api` | واجهة برمجة تطبيقات كتالوج HTTP للقراءة فقط مع OpenAPI 3.1 وSwagger UI على `/docs` والمصادقة وتحديد المعدل وقوائم CORS/IP المسموح بها والتنزيلات ووقت تشغيل المسؤول |
| 📂`packages/server-mcp/` | `@omni-skills/server-mcp` | خادم MCP يدعم وسائل النقل "stdio"، و"stream"، و"sse". يضيف وضع السيارة الجانبية المحلية أدوات التثبيت/الإزالة المدركة لنظام الملفات وكتابة تكوين MCP المدرك للعميل لـ 16 عميلاً قادرين على التكوين |
| 📂 `الحزم/الخادم-a2a/` | `@omni-skills/server-a2a` | وقت تشغيل مهمة A2A (وكيل إلى وكيل) مع استمرارية JSON/SQLite، وإعادة تشغيل الاسترداد، وتدفق SSE، والإلغاء، ووضع المنفذ الخارجي، والتنسيق المؤجر الاختياري |

تحتوي كل حزمة على دليل "package.json"، و"src/"، و(باستثناء "install-targets")، و"vitest.config.js" لاختبارات الوحدة.---

### `dist/`

>**عناصر وقت التشغيل التي تم إنشاؤها.**الالتزام عمدًا بالتحكم في الإصدار.

هذه الملفات هي المخرجات التي يمكن قراءتها آليًا والتي تستهلكها عمليات تثبيت واجهة سطر الأوامر واستجابات واجهة برمجة التطبيقات وأدوات MCP ومهام A2A واختبارات الدخان والتحقق من الإصدار. يتم تجديدها بواسطة npm run build.

| المسار | الغرض |
|:-----|:--------|
| `dist/catalog.json` | كتالوج منشور يحتوي على جميع المهارات والنتائج والبيانات الوصفية البالغ عددها 154 |
| `dist/bundles.json` | تعريفات الحزمة مع حالة توفر الأعضاء |
| `dist/manifests/<skill>.json` | بيان يمكن قراءته آليًا لكل مهارة |
| `dist/archives/<skill>.zip` | أرشيف ZIP لكل مهارة للتحميل |
| `dist/archives/<skill>.tar.gz` | أرشيف tarball لكل مهارة للتحميل |
| `dist/archives/<skill>.checksums.txt` | بيان المجموع الاختباري SHA-256 لكل أرشيف |
| `dist/archives/<skill>.zip.sig` | توقيع منفصل (وقت الإصدار فقط، مُتجاهل) |
| `dist/release-notes.md` | ملاحظات الإصدار التي تم إنشاؤها تلقائيًا (تم تجاهلها) |
| `توزيع/توقيع/` | مادة المفتاح العام المشتقة (gitignored) |

>**لماذا يتم الالتزام بـ `dist/`؟**لأنه جزء من عقد التثبيت وAPI وMCP وA2A وعقد الإصدار. يتوقع المستهلكون أن تكون هذه الملفات موجودة دون تشغيل البنية.---

### `data/`

>**ملفات بيانات المشروع الثابتة.**تعريفات يتم التحكم فيها من المصدر والتي تحرك سلوك البناء ووقت التشغيل.

| ملف | الغرض |
|:-----|:--------|
| `بيانات/حزمة.json` | تعريفات الحزمة المنسقة (قوائم أعضاء المهارة لكل حزمة) |
| `بيانات/مشروع_هوية.json` | هوية المشروع الأساسية: الاسم والوصف والصفحة الرئيسية وموضوعات GitHub وتعريفات سطح وقت التشغيل وقوائم العملاء |
| `data/project_status.json` | لقطة سريعة لمقاييس المشروع التي تم إنشاؤها: عدد المهارات، والنتائج، وأعداد العملاء، وأعداد الفئات، وفوارق الجودة |---

### `docs/`

>**جميع وثائق المشروع.**منظمة حسب الجمهور.

| المسار | الجمهور | المحتوى |
|:-----|:---------|:--------|
| `docs/README.md` | الجميع | مركز التوثيق — فهرس مركزي لجميع المستندات |
| `docs/CATALOG.md` | المستخدمين | كتالوج تم إنشاؤه تلقائيًا يسرد جميع المهارات الـ 154 مع الدرجات |
| `docs/PROJECT-STRUCTURE.md` | الجميع | هذا الملف — مرجع دليل المشروع |
| `مستندات/مستخدمين/` | المستخدمين النهائيين | الشروع في العمل، دليل مستخدم CLI، دليل الاستخدام، الحزم، دليل التشغيل |
| `المستندات/المساهمين/` | المساهمون | تشريح المهارة، القالب، سير عمل العلاقات العامة، شريط الجودة، قواعد اللعبة عالية الدرجات |
| `مستندات/مواصفات/` | مهندسون معماريون | API وMCP Sidecar ومثبت CLI والقشرة المرئية ومصفوفة دعم العميل والتصنيف والأمان ومواصفات البيان |
| `docs/i18n/` | المستخدمين الدوليين | ترجمات تم إنشاؤها تلقائيًا لجذر README بـ 32 لغة |#### `docs/users/`

| ملف | الغرض |
|:-----|:--------|
| `البدء.md` | قم بتثبيت المهارة والتحقق منها واستدعاءها في أقل من دقيقتين |
| `CLI-USER-GUIDE.md` | مرجع الأمر الكامل مع سيناريوهات خطوة بخطوة |
| `USAGE.md` | أوامر CLI وأوضاع التثبيت وأوامر وقت التشغيل وتدفقات تكوين MCP |
| `BUNDLES.md` | الحزم المنسقة وتوافرها الحالي |
| `AWESOME-OMNI-SKILLS-ROLLOUT.md` | إعادة صياغة العلامة التجارية لحالة الترحيل وتقرير القبول |
| `RUNBOOK.md` | المرجع التشغيلي (مرتبط أيضًا باسم `docs/operations/RUNBOOK.md`) |#### `docs/contributors/`

| ملف | الغرض |
|:-----|:--------|
| `SKILL-ANATOMY.md` | هيكل وتوقعات الجودة للمهارة |
| `SKILL-TEMPLATE.md` | بداية `SKILL.md` مع المادة الأمامية الحالية |
| `SKILL-PR-WORKFLOW.md` | المدخول الأصلي، ومعالجة المحسن، وتوقعات المراجعين |
| `QUALITY-BAR.md` | معايير القبول والمعايير الحالية |
| `HIGH-SCORE-PLAYBOOK.md` | ما الذي يدفع إلى النضج العالي والجودة وأفضل الممارسات ودرجات الأمان |#### `docs/specs/`

| ملف | الغرض |
|:-----|:--------|
| `CATALOG-API.md` | نقاط نهاية HTTP والتصفية والحوكمة والتنزيلات |
| `CLI-GUIDED-INSTALLER.md` | العقد السلوكي للمثبت الموجه |
| `CLI-VISUAL-SHELL.md` | الغلاف المرئي للحبر ونموذج الحالة ومركز الخدمة |
| `LOCAL-MCP-SIDECAR.md` | الأدوات المتوافقة مع نظام الملفات ونموذج القائمة المسموح بها وكتابة التكوين |
| `CLIENT-SUPPORT-MATRIX.md` | مرجع كامل للعميل والكاتب عبر 9 عملاء تثبيت + 16 تكوين |
| `تصنيف المهارات.md` | التصنيف، والاستدلال على النتائج، والتحف البيانات الوصفية |
| `SECURITY-VALIDATION.md` | الماسحات الضوئية والمحفوظات والتوقيعات والتحقق من الإصدار |
| `SKILL-MANIFEST.md` | تنسيق البيان المقروء آليًا وعقد التوافق |#### `docs/i18n/`

يحتوي على**32**دليل لغة، كل منها مزود بـ `README.md` مترجم. تشمل اللغات: ar، bg، cs، da، de، es، fi، fr، he، hi، hu، id، in، it، ja، ko، ms، nl، no، phi، pl، pt، pt-BR، ro، ru، sk، sv، th، tr، uk-UA، vi، zh-CN.

يتم إنشاء الترجمات تلقائيًا بواسطة npm run i18n:render والتحقق من صحتها بواسطة npm run i18n:check.---

### `tools/`

>**إنشاء البنية الأساسية والتحقق من صحتها واختبارها.**يتم استهلاك نصوص Python النصية في المقام الأول بواسطة أوامر `npm run`.#### `tools/scripts/`

| البرنامج النصي | أمر npm | الغرض |
|:-------|:-----------|:--------|
| `validate_skills.py` | `التحقق من صحة تشغيل npm` | التحقق من صحة جميع ملفات `SKILL.md` وإعادة إنشاء `metadata.json` |
| `skill_metadata.py` | (مستوردة بواسطة التحقق من الصحة) | أداة التحقق الأساسية المتجانسة: تحليل المادة الأمامية، والتصنيف، والتسجيل، والمسح الأمني ​​|
| `recategorize_skills.py` | `تصنيف تشغيل npm: تقرير` | يعرض أو يطبق تطبيع الفئة الأساسية |
| `generate_index.py` | `فهرس تشغيل npm` | يُنشئ بيانات "dist/" وأرشيفات ومجاميع اختبارية |
| `build_catalog.js` | `` كتالوج تشغيل npm '' | يُنشئ "docs/CATALOG.md" من "skills_index.json" |
| `generate_project_status.py` | `مشروع تشغيل npm: الحالة` | يُنشئ "data/project_status.json" بالمقاييس الحالية |
| `render_project_docs.py` | `npm run docs:render` | تم إنشاء كتل التحديثات في README، والمستندات، والمساهمة |
| `generate_i18n.py` | `npm run i18n:render` | يقوم بإنشاء أو تحديث ترجمات `docs/i18n/` |
| `repository_sources.py` | `npm تشغيل التسجيل: تقديم` | يعرض ويتحقق من صحة `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | "هوية تشغيل npm: تحقق" | يتحقق من محاذاة هوية package.json وREADME وrepo |
| `verify_archives.py` | `التحقق من تشغيل npm: الأرشيف` | يتحقق من سلامة الأرشيف والتوقيعات الاختيارية |
| `verify_security_scanners.py` | `التحقق من تشغيل npm: الماسحات الضوئية` | يؤكد تغطية الماسح الضوئي في البيانات التعريفية التي تم إنشاؤها |
| `generate_release_notes.py` | `إصدار تشغيل npm: ملاحظات` | يُنشئ ملاحظات إصدار مخصصة من بيانات التعريف وسجل git |
| `next_release_version.py` | `إصدار تشغيل npm: الإصدار التالي` | يحسب الإصدار التالي باستخدام سياسة التصحيح إلى 10 |
| `sync_repo_version.py` | `إصدار تشغيل npm: إصدار المزامنة` | مزامنة الإصدار عبر حزم مساحة العمل |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print' | يطبع أو يطبق وصف GitHub والصفحة الرئيسية والموضوعات |
| `validate_contribution_scope.py` | (سي) | التحقق من صحة حدود نطاق مساهمة العلاقات العامة |
| `install_githooks.js` | `خطافات تشغيل npm: تثبيت` | تثبيت ربط الالتزام المسبق المحلي |#### `tools/scripts/tests/`

مجموعات اختبار التكامل وTUI التي يستهلكها `اختبار npm`:
- اختبارات بايثون PTY القديمة
- تأكيدات عقدة TUI
- منسق عداء الاختبار---

### `.github/`

>**إجراءات GitHub وقوالب المجتمع.**#### `.github/workflows/`

| سير العمل | الزناد | الغرض |
|:---------|:-------|:--------|
| `التحقق من صحة.yml` | ادفع/PR إلى "الرئيسي" | بناء واختبار وتأكيد التزام القطع الأثرية التي تم إنشاؤها |
| `release.yml` | قم بالضغط على العلامة `v*` أو الإرسال اليدوي | الماسحات الضوئية ذات مستوى الإصدار، والتوقيع، ونشر npm، وإصدار GitHub |
| `الإصدار التلقائي-skill-merges.yml` | دمج في اللمس "الرئيسي" "المهارات/*" | إصدار تلقائي للإصدار، ووضع علامة عليه، وإصداره عند تغيير المهارات |
| `enhance-pr-skills.yml` | العلاقات العامة مع تغييرات المهارات | يقوم بتشغيل خط أنابيب المحسن الخاص وينشر رفيق PR |
| `sync-repository-metadata.yml` | تغييرات على `data/project_identity.json` | مزامنة وصف GitHub والصفحة الرئيسية والموضوعات |#### `.github/pull_request_template.md`

قالب العلاقات العامة الافتراضي مع قائمة مرجعية للمساهمات في المهارات ووقت التشغيل.---

### `.githooks/`

>**خطافات Git المحلية.**تم التثبيت عبر `npm run Hooks:install`.

| ملف | الغرض |
|:-----|:--------|
| `الالتزام المسبق` | يقوم بتشغيل التحقق الأساسي قبل السماح بالالتزام |---

## 📄 Root Files Reference

| ملف | الغرض |
|:-----|:--------|
| `README.md` | مشروع README المواجه للعامة مع شعار البطل ودليل التثبيت ونظرة عامة على الميزات الكاملة |
| `المساهمة.md` | دليل المساهم بالمهارة ووقت التشغيل وسير العمل المدخول |
| `SECURITY.md` | سياسة الأمان، والنطاق، وتعليمات الإبلاغ عن الثغرات الأمنية |
| `CODE_OF_CONDUCT.md` | ميثاق المساهم v2.1 |
| `REPOSITORY-SOURCES.md` | السجل العام للمستودعات الأولية المقترحة للتناول الخارجي |
| `الترخيص` | ترخيص معهد ماساتشوستس للتكنولوجيا (الكود والأدوات) |
| `محتوى الترخيص` | CC BY 4.0 (محتوى التوثيق والمهارة) |
| `package.json` | حزمة الجذر monorepo: البرامج النصية، والتبعيات، ونقاط إدخال الحاوية، والملفات، وتكوين مساحة العمل |
| `package-lock.json` | ملف قفل npm (تم إنشاؤه تلقائيًا) |
| `metadata.json` | التحقق من الصحة على مستوى المستودع وملخص النتيجة (تم إنشاؤه بواسطة ``npm run validate`) |
| `skills_index.json` | مؤشر المهارات المعيارية المحلية الريبو (تم إنشاؤه بواسطة "التحقق من صحة تشغيل npm") |
| `.جيتينور` | استثناءات التحكم في الإصدار - لا سيما `dist/`**لا**يتم تجاهله |
| `.npmignore` | يستبعد `__pycache__/` و `*.pyc` من npm tarball |
| `.إصدار العقدة` | تثبيت إصدار Node.js: `22` |
| `.nvmrc` | تثبيت إصدار nvm: `22` (المرايا `.node-version`) |
| `vitest.config.js` | يشير تكوين Root Vitest إلى جميع تكوينات الاختبار الخمسة على مستوى الحزمة |
| `vitest.workspace.js` | تعريف مساحة العمل Vitest لتنفيذ اختبار علم monorepo |---

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

يتم تشغيل كل ما سبق بالتسلسل كجزء من "npm run build".
# 🗂️ Project Structure (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Tham khảo thư mục và tập tin đầy đủ cho monorepo Awesome Omni Skills.**---

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

>**Danh mục kỹ năng gốc.**Đây là bề mặt nội dung công khai chính của dự án.

Chứa**154**thư mục kỹ năng, mỗi thư mục có tối thiểu một sổ tay `SKILL.md`. Các kỹ năng lớn hơn có thể bao gồm các thư mục con `agent/`, `references/`, `examples/`, `scripts/` và `assets/`.

Kỹ năng đến thông qua hai con đường tiếp nhận:
-**PR đóng góp trực tiếp**— con người trực tiếp gửi kỹ năng
-**Nhập bên ngoài dựa trên kho lưu trữ**— đã xem xét `external-import/*` PR từ kho lưu trữ ngược dòng

| Nó chứa gì | Ví dụ |
|:--------|:--------|
| `skills/omni-figma/SKILL.md` | Kỹ năng thiết kế mã của Figma |
| `kỹ năng/kiến trúc/SKILL.md` | Kỹ năng xem xét kiến ​​trúc và lập kế hoạch |
| `skills/<name>/metadata.json` | Phân loại và tính điểm được tạo tự động |---

### `skills_omni/`

>**Các dẫn xuất cải tiến chỉ có bằng tiếng Anh.**Được duy trì bởi hệ thống nâng cao riêng tư.

Chứa**110**thư mục kỹ năng nâng cao phản ánh và cải thiện so với các thư mục kỹ năng gốc của chúng trong `skills/`. Bề mặt này**không mở để công chúng đóng góp trực tiếp**— nó được cung cấp độc quyền bởi hệ thống nâng cấp tự động.

Mỗi tác phẩm phái sinh duy trì sự ghi nhận nguồn gốc của nó trong khi cung cấp tiêu chuẩn biên tập cao hơn, luôn bằng tiếng Anh.---

### `packages/`

>**Không gian làm việc monorepo.**Tất cả mã Node.js thời gian chạy đều tồn tại ở đây.

| Trọn gói | Tên npm | Mục đích |
|:--------|:----------|:--------|
| 📂 `gói/catalog-core/` | `@omni-skills/catalog-core` | Thời gian chạy danh mục được chia sẻ với nội dung phụ thuộc `ICatalogStorageAdapter`. Cung cấp logic tìm kiếm, chấm điểm, so sánh, đề xuất và kế hoạch cài đặt được sử dụng bởi tất cả các bề mặt máy chủ |
| 📂 `gói/cli/` | (thùng gói gốc) | Điểm truy cập CLI thống nhất, trình cài đặt có hướng dẫn, TUI trực quan bằng mực, chẩn đoán, kiểm tra khói và khởi chạy dịch vụ. ESM-bản địa |
| 📂 `gói/mục tiêu cài đặt/` | `@omni-skills/install-target` | Sổ đăng ký của 9 máy khách có khả năng cài đặt (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, AntiGravity, Goose, Qwen Code, OpenCode) với độ phân giải đường dẫn và ánh xạ cờ |
| 📂 `gói/máy chủ-api/` | `@omni-skills/server-api` | API danh mục HTTP chỉ đọc với OpenAPI 3.1, Giao diện người dùng Swagger trên `/docs`, xác thực, giới hạn tốc độ, danh sách cho phép CORS/IP, nội dung tải xuống và thời gian chạy của quản trị viên |
| 📂 `gói/server-mcp/` | `@omni-skills/server-mcp` | Máy chủ MCP hỗ trợ truyền tải `stdio`, `stream` và `sse`. Chế độ sidecar cục bộ bổ sung các công cụ cài đặt/xóa nhận biết hệ thống tệp và ghi cấu hình MCP nhận biết máy khách cho 16 máy khách có khả năng cấu hình |
| 📂 `gói/server-a2a/` | `@omni-skills/server-a2a` | Thời gian chạy tác vụ A2A (Agent-to-Agent) với khả năng duy trì JSON/SQLite, khởi động lại khôi phục, phát trực tuyến SSE, hủy, chế độ thực thi bên ngoài và phối hợp thuê tùy chọn |

Mỗi gói có thư mục `package.json`, `src/` riêng và (ngoại trừ `install-targets`) một `vitest.config.js` để kiểm tra đơn vị.---

### `dist/`

>**Tạo ra các tạo phẩm trong thời gian chạy.**Cố tình cam kết kiểm soát phiên bản.

Các tệp này là kết quả đầu ra mà máy có thể đọc được khi cài đặt CLI, phản hồi API, công cụ MCP, tác vụ A2A, kiểm tra khói và xác minh bản phát hành. Chúng được tái tạo bởi `npm run build`.

| Đường dẫn | Mục đích |
|:------|:--------|
| `dist/catalog.json` | Danh mục được xuất bản với tất cả 154 kỹ năng, điểm số và siêu dữ liệu |
| `dist/bundles.json` | Định nghĩa gói với trạng thái sẵn sàng của thành viên |
| `dist/manifests/<skill>.json` | Bản kê khai có thể đọc được bằng máy theo từng kỹ năng |
| `dist/archives/<skill>.zip` | Kho lưu trữ ZIP theo kỹ năng để tải xuống |
| `dist/archives/<skill>.tar.gz` | Tải xuống kho lưu trữ tarball theo kỹ năng |
| `dist/archives/<skill>.checksums.txt` | Bản kê khai tổng kiểm tra SHA-256 trên mỗi kho lưu trữ |
| `dist/archives/<skill>.zip.sig` | Chữ ký tách rời (chỉ thời gian phát hành, gitignored) |
| `dist/release-notes.md` | Ghi chú phát hành được tạo tự động (gitignored) |
| `dist/ký/` | Tài liệu khóa công khai phái sinh (gitignored) |

>**Tại sao `dist/` được cam kết?**Bởi vì nó là một phần của hợp đồng cài đặt, API, MCP, A2A và phát hành. Người tiêu dùng mong đợi những tệp này xuất hiện mà không cần chạy bản dựng.---

### `data/`

>**Tệp dữ liệu dự án tĩnh.**Các định nghĩa do nguồn kiểm soát sẽ thúc đẩy hành vi xây dựng và thời gian chạy.

| Tập tin | Mục đích |
|:------|:--------|
| `data/bundles.json` | Định nghĩa gói được quản lý (danh sách thành viên kỹ năng trên mỗi gói) |
| `data/project_identity.json` | Danh tính dự án chuẩn: tên, mô tả, trang chủ, chủ đề GitHub, định nghĩa bề mặt thời gian chạy và danh sách khách hàng |
| `dữ liệu/dự án_status.json` | Ảnh chụp nhanh số liệu dự án đã tạo: số lượng kỹ năng, điểm số, số lượng khách hàng, số lượng danh mục và chênh lệch chất lượng |---

### `docs/`

>**Tất cả tài liệu về dự án.**Được tổ chức bởi khán giả.

| Đường dẫn | Khán giả | Nội dung |
|:------|:----------|:--------|
| `docs/README.md` | Mọi người | Trung tâm tài liệu — chỉ mục trung tâm cho tất cả tài liệu |
| `docs/CATALOG.md` | Người dùng | Danh mục được tạo tự động liệt kê tất cả 154 kỹ năng có điểm |
| `docs/DỰ ÁN-CẤU TRÚC.md` | Mọi người | Tập tin này - tham khảo thư mục dự án |
| `tài liệu/người dùng/` | Người dùng cuối | Bắt đầu, hướng dẫn sử dụng CLI, hướng dẫn sử dụng, gói, runbook |
| `tài liệu/người đóng góp/` | Người đóng góp | Giải phẫu kỹ năng, mẫu, quy trình PR, thanh chất lượng, cẩm nang điểm cao |
| `tài liệu/thông số kỹ thuật/` | Kiến trúc sư | API, sidecar MCP, trình cài đặt CLI, shell trực quan, ma trận hỗ trợ máy khách, thông số kỹ thuật phân loại, bảo mật và tệp kê khai |
| `docs/i18n/` | Người dùng quốc tế | Bản dịch được tạo tự động của README gốc bằng 32 ngôn ngữ |#### `docs/users/`

| Tập tin | Mục đích |
|:------|:--------|
| `BẮT ĐẦU-BẮT ĐẦU.md` | Cài đặt, xác minh và gọi một kỹ năng trong vòng chưa đầy 2 phút |
| `CLI-USER-GUIDE.md` | Tham chiếu lệnh đầy đủ với các kịch bản từng bước |
| `SỬ DỤNG.md` | Lệnh CLI, chế độ cài đặt, lệnh thời gian chạy và luồng cấu hình MCP |
| `BUNDLES.md` | Các gói được tuyển chọn và tính khả dụng hiện tại của chúng |
| `TUYỆT VỜI-OMNI-KỸ NĂNG-ROLLOUT.md` | Báo cáo chấp nhận và trạng thái di chuyển thương hiệu |
| `RUNBOOK.md` | Tham chiếu hoạt động (cũng được liên kết dưới dạng `docs/Operations/RUNBOOK.md`) |#### `docs/contributors/`

| Tập tin | Mục đích |
|:------|:--------|
| `KỸ NĂNG-Giải phẫu.md` | Cấu trúc và kỳ vọng về chất lượng cho một kỹ năng |
| `KỸ NĂNG-MẪU.md` | Starter `SKILL.md` với vấn đề chính hiện tại |
| `KỸ NĂNG-PR-WORKFLOW.md` | Tiếp nhận tự nhiên, xử lý nâng cao và kỳ vọng của người đánh giá |
| `CHẤT LƯỢNG-BAR.md` | Tiêu chí chấp nhận và điểm chuẩn hiện tại |
| `ĐIỂM CAO-PLAYBOOK.md` | Điều gì thúc đẩy điểm số trưởng thành, chất lượng, phương pháp hay nhất và bảo mật cao |#### `docs/specs/`

| Tập tin | Mục đích |
|:------|:--------|
| `CATALOG-API.md` | Điểm cuối HTTP, lọc, quản trị và tải xuống |
| `CLI-GUIDED-INSTALLER.md` | Hợp đồng hành vi dành cho người cài đặt được hướng dẫn |
| `CLI-VISUAL-SHELL.md` | Vỏ trực quan mực, mô hình trạng thái và trung tâm dịch vụ |
| `LOCAL-MCP-SIDECAR.md` | Các công cụ nhận biết hệ thống tệp, mô hình danh sách cho phép và ghi cấu hình |
| `HỖ TRỢ KHÁCH HÀNG-MATRIX.md` | Tham chiếu đầy đủ về máy khách và người viết trên 9 máy khách cài đặt + 16 máy khách cấu hình |
| `KỸ NĂNG-PHÂN LOẠI.md` | Phân loại, chẩn đoán tính điểm và tạo phẩm siêu dữ liệu |
| `BẢO MẬT-XÁC NHẬN.md` | Máy quét, lưu trữ, chữ ký và xác minh phát hành |
| `KỸ NĂNG-MANIFEST.md` | Định dạng bảng kê khai có thể đọc được bằng máy và hợp đồng tương thích |#### `docs/i18n/`

Chứa**32**thư mục ngôn ngữ, mỗi thư mục có một bản dịch `README.md`. Các ngôn ngữ bao gồm: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Các bản dịch được tạo tự động bởi `npm run i18n:render` và được xác thực bởi `npm run i18n:check`.---

### `tools/`

>**Xây dựng, xác thực và kiểm tra cơ sở hạ tầng.**Chủ yếu sử dụng các tập lệnh Python được sử dụng bởi các lệnh `npm run`.#### `tools/scripts/`

| Kịch bản | Lệnh npm | Mục đích |
|:-------|:-------------|:--------|
| `xác thực_skills.py` | `npm chạy xác thực` | Xác thực tất cả các tệp `SKILL.md` và tạo lại `metadata.json` |
| `skill_metadata.py` | (được nhập bằng xác thực) | Trình xác thực nguyên khối cốt lõi: phân tích cú pháp nội dung trước, phân loại, tính điểm, quét bảo mật |
| `recategorize_skills.py` | `npm run taxonomy:report` | Hiển thị hoặc áp dụng chuẩn hóa danh mục chuẩn |
| `tạo_index.py` | `chỉ mục chạy npm` | Tạo các bảng kê khai, kho lưu trữ và tổng kiểm tra `dist/` |
| `build_catalog.js` | `danh mục chạy npm` | Tạo `docs/CATALOG.md` từ `skills_index.json` |
| `tạo_project_status.py` | `npm run project:status` | Tạo `data/project_status.json` với số liệu hiện tại |
| `render_project_docs.py` | `npm run docs:render` | Cập nhật các khối được tạo trong README, tài liệu và ĐÓNG GÓP |
| `tạo_i18n.py` | `npm chạy i18n:render` | Tạo hoặc cập nhật bản dịch `docs/i18n/` |
| `repository_sources.py` | `npm chạy đăng ký:render` | Hiển thị và xác thực `REPOSITORY-SOURCES.md` |
| `verify_project_identity.py` | `npm chạy danh tính:kiểm tra` | Xác minh căn chỉnh nhận dạng package.json, README và repo |
| `verify_archives.py` | `npm run verify:archives` | Xác minh tính toàn vẹn của kho lưu trữ và chữ ký tùy chọn |
| `verify_security_scanners.py` | `npm run verify:scanners` | Xác nhận phạm vi phủ sóng của máy quét trong siêu dữ liệu được tạo |
| `tạo_release_notes.py` | `npm run phát hành: ghi chú` | Tạo ghi chú phát hành tùy chỉnh từ siêu dữ liệu và lịch sử git |
| `next_release_version.py` | `npm run phát hành: phiên bản tiếp theo` | Tính toán phiên bản học kỳ tiếp theo bằng chính sách patch-to-10 |
| `sync_repo_version.py` | `bản phát hành chạy npm: phiên bản đồng bộ` | Đồng bộ hóa phiên bản trên các gói không gian làm việc |
| `sync_github_repo_metadata.py` | `npm chạy repo:metadata:print` | In hoặc áp dụng mô tả, trang chủ và chủ đề GitHub |
| `validate_contribution_scope.py` | (CI) | Xác thực ranh giới phạm vi đóng góp PR |
| `install_githooks.js` | `npm run hooks:install` | Cài đặt hook pre-commit cục bộ |#### `tools/scripts/tests/`

Bộ thử nghiệm tích hợp và TUI được sử dụng bởi `npm test`:
- Các bài kiểm tra PTY Python kế thừa
- Xác nhận nút TUI
- Người điều phối người chạy thử nghiệm---

### `.github/`

>**Tác vụ GitHub và mẫu cộng đồng.**#### `.github/workflows/`

| Quy trình làm việc | Kích hoạt | Mục đích |
|:----------|:--------|:--------|
| `xác thực.yml` | Đẩy/PR vào `main` | Xây dựng, kiểm tra và xác nhận các tạo phẩm được tạo đã được cam kết |
| `phát hành.yml` | Tag push `v*` hoặc gửi thủ công | Máy quét cấp phát hành, ký, xuất bản npm, Phát hành GitHub |
| `auto-release-skill-merges.yml` | Hợp nhất với `main` chạm vào `skills/*` | Phiên bản tự động tăng, gắn thẻ và phát hành khi thay đổi kỹ năng |
| `tăng cường-pr-skills.yml` | PR với thay đổi kỹ năng | Chạy kênh tăng cường riêng tư và đăng bài PR |
| `sync-repository-metadata.yml` | Những thay đổi đối với `data/project_identity.json` | Đồng bộ hóa mô tả, trang chủ và chủ đề GitHub |#### `.github/pull_request_template.md`

Mẫu PR mặc định với danh sách kiểm tra đóng góp về kỹ năng và thời gian chạy.---

### `.githooks/`

>**Móc Git cục bộ.**Được cài đặt qua `npm run hooks:install`.

| Tập tin | Mục đích |
|:------|:--------|
| `cam kết trước` | Chạy xác thực cơ bản trước khi cho phép cam kết |---

## 📄 Root Files Reference

| Tập tin | Mục đích |
|:------|:--------|
| `README.md` | Dự án README công khai với biểu ngữ chính, hướng dẫn cài đặt và tổng quan về tính năng đầy đủ |
| `ĐÓNG GÓP.md` | Hướng dẫn dành cho cộng tác viên về kỹ năng, thời gian chạy và quy trình tiếp nhận |
| `BẢO MẬT.md` | Hướng dẫn báo cáo về chính sách, phạm vi và lỗ hổng bảo mật |
| `CODE_OF_CONDUCT.md` | Giao ước cộng tác viên v2.1 |
| `KHO-SOURCES.md` | Đăng ký công khai các kho ngược dòng được đề xuất cho lượng tiếp nhận bên ngoài |
| `GIẤY PHÉP` | Giấy phép MIT (mã và công cụ) |
| `GIẤY PHÉP-NỘI DUNG` | CC BY 4.0 (nội dung tài liệu và kỹ năng) |
| `gói.json` | Gói monorepo gốc: tập lệnh, phần phụ thuộc, điểm vào bin, tệp và cấu hình không gian làm việc |
| `gói-lock.json` | npm lockfile (được tạo tự động) |
| `siêu dữ liệu.json` | Tóm tắt điểm và xác thực trên toàn kho lưu trữ (được tạo bởi `npm run xác thực`) |
| `skills_index.json` | Chỉ số kỹ năng chuẩn hóa cục bộ (được tạo bởi `npm run validation`) |
| `.gitignore` | Loại trừ kiểm soát phiên bản - đặc biệt là `dist/` được**không**bỏ qua |
| `.npmignore` | Loại trừ `__pycache__/` và `*.pyc` khỏi tarball npm |
| `.node-version` | Ghim phiên bản Node.js: `22` |
| `.nvmrc` | ghim phiên bản nvm: `22` (nhân bản `.node-version`) |
| `vitest.config.js` | Cấu hình Root Vitest tham chiếu toàn bộ 5 cấu hình test cấp gói |
| `vitest.workspace.js` | Định nghĩa không gian làm việc Vitest để thực hiện kiểm tra nhận biết monorepo |---

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

Tất cả những điều trên chạy tuần tự như một phần của `npm run build`.
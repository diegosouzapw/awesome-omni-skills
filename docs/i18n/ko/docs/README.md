# 📖 Awesome Omni Skills — Documentation Hub (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**Awesome Omni Skills를 공개 기술 저장소, 선별된 모범 사례 파생 표면 및 공유 런타임 플랫폼으로 사용, 기여 및 운영하기 위한 중앙 참조입니다.**

표준 커뮤니티 파일은 저장소 루트에 있습니다.
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> npm 패키지, GitHub 저장소, 생성된 문서 및 런타임 진입점이 이제**Awesome Omni Skills**에 정렬됩니다. 현재 롤아웃 상태: [Awesome Omni Skills 롤아웃](options/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

이제 기초 트랙은 활성 프로젝트 상태에 있고 두 번째 카테고리 확장 웨이브는 이미 카탈로그에 있습니다. 이제 프로젝트는 선택적 향후 확장 트랙이 있는 작업 기준으로 읽어야 합니다.<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

향후 확장은 의도적으로 이루어집니다.

- '디자인', '도구', '데이터 AI', '머신러닝' 심화
- 현재 코드 네이티브 트랙의 깊이가 더 강해질 때까지 휴면 상태의 비코드 네이티브 카테고리를 다시 열지 마세요.
- 그렇게 하는 동안 품질 수준과 인핸서 검토 경로를 그대로 유지하세요.

해당 확장 작업은 이제 라이브 카탈로그 및 아키텍처 문서에 직접 반영됩니다.

- [Catalog](CATALOG.md)의 현재 카탈로그 스냅샷
- [코드베이스 분석](architecture/CODEBASE-ANALYSIS.md)의 런타임 및 아티팩트 형태
- [Agent-Native Roadmap](architecture/AGENT-NATIVE-ROADMAP.md)의 진행 방향## 🔀 Repository Surfaces

Awesome Omni Skills는 세 개의 연결된 표면으로 읽어야 합니다.

| 표면 | 그것은 무엇입니까 | 어떻게 변화하는가 |
|:---------|:------------|:---------------|
| 📥 `기술/` | 공개 네이티브 기술 저장소 | 직접 기여자 PR 및 검토된 저장소 기반 외부 접수 |
| ✨ `skills_omni/` | 엄선된 개선된 모범 사례 파생 표면 | 개인 강화제 동반 PR만 |
| 🖥️ 런타임 표면 | 생성된 동일한 카탈로그를 통한 CLI, API, MCP 및 A2A | 빌드, 검증 및 릴리스 자동화 |---

## 📌 Current Decisions

이러한 아키텍처 질문은 더 이상 실제로 "공개"되지 않으며 이제 프로젝트 결정으로 처리됩니다.

1.**배포는 매니페스트 우선 및 서명된 아카이브로 유지됩니다**
   기계 판독 가능 매니페스트는 CLI, API, MCP 및 A2A에서 사용되는 계약으로 유지됩니다. 서명된 기술별 아카이브는 해당 계약 위에 계층화된 다운로드 및 릴리스 표면입니다.
2.**개인 또는 프리미엄 카탈로그는 동일한 매니페스트 스키마를 재사용해야 합니다**
   인증 및 정책은 매니페스트 또는 카탈로그 형태를 포크하는 것이 아니라 외부적으로 계층화되어야 합니다.
3.**MCP 구성은 몇 가지 표준 내보내기 제품군에 수렴되어야 합니다**
   Awesome Omni Skills는 이제 JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` 및 TOML `[mcp_servers]`를 중심으로 표준화하는 동시에 공식 클라이언트 문서에 다른 구조가 필요한 경우에만 맞춤형 작성자를 유지합니다.

이러한 결정은 다음을 포함하여 현재 공식 MCP 및 클라이언트 문서와 일치합니다.

- 'modelcontextprotocol.io'의 공식 MCP 레지스트리 및 확장 지원 지침
- OpenAI Docs MCP 및 Codex CLI 문서(`developers.openai.com` 및 `platform.openai.com`)
- `code.visualstudio.com`의 VS Code MCP 확장 및 제품 문서
- Claude Code, Cursor, Continue, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman 및 JetBrains AI Assistant에 대한 클라이언트 문서---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| 문서 | 무엇을 배울 것인가 |
|:----|:------|
| 📘 [시작하기](users/GETTING-STARTED.md) | 첫 번째 스킬 설치, 확인 및 호출 |
| 🧭 [CLI 사용자 가이드](users/CLI-USER-GUIDE.md) | 전체 명령 참조 및 실제 CLI 사용 패턴 |
| 📗 [사용 가이드](users/USAGE.md) | CLI 명령, 설치 모드, 런타임 명령 및 MCP 구성 흐름 |
| 📦 [번들](users/BUNDLES.md) | 선별된 번들 및 현재 가용성 |
| 📚 [카탈로그](CATALOG.md) | 게시된 기술의 자동 생성 카탈로그 |
| 🔧 [시스템 런북](options/RUNBOOK.md) | 런타임 빌드, 제공, 보안 및 문제 해결 |### 🏗️ If You Want to **Understand** the Runtime

| 문서 | 무엇을 배울 것인가 |
|:----|:------|
| 🗂️ [프로젝트 구조](PROJECT-STRUCTURE.md) | 모노레포에 대한 완전한 디렉토리 및 파일 참조 |
| 🗺️ [에이전트 네이티브 로드맵](architecture/AGENT-NATIVE-ROADMAP.md) | 아키텍처 발전, 폐쇄적 결정 및 나머지 확장 영역 |
| 🧭 [CLI UX 로드맵](architecture/CLI-UX-ROADMAP.md) | 안내식 및 시각적 CLI의 역사적 계획 및 현재 형태 |
| 📐 [ADR-0001: 작업 공간 재단](architecture/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | 핵심 모노레포 및 공유 런타임 결정 |
| 🔬 [코드베이스 분석](architecture/CODEBASE-ANALYSIS.md) | 현재 런타임 구성, 개수 및 시스템 경계 |
| 🌐 [카탈로그 API 표면](specs/CATALOG-API.md) | HTTP 엔드포인트, 필터링, 거버넌스 및 다운로드 |
| 🧩 [CLI 안내 설치 프로그램](specs/CLI-GUIDED-INSTALLER.md) | 안내된 설치 프로그램에 대한 행동 계약 |
| 🖥️ [CLI 비주얼 셸](specs/CLI-VISUAL-SHELL.md) | 잉크 시각적 셸, 상태 모델 및 서비스 허브 |
| 🔌 [로컬 MCP 사이드카](specs/LOCAL-MCP-SIDECAR.md) | 파일 시스템 인식 도구, 허용 목록 모델 및 구성 작성 |
| 🧭 [클라이언트 지원 매트릭스](specs/CLIENT-SUPPORT-MATRIX.md) | 지원되는 CLI 및 IDE 클라이언트, 작성기, 수동 대상 및 소스 참조 |
| 📊 [스킬 분류](specs/SKILL-CLASSIFICATION.md) | 분류, 점수 계산 휴리스틱 및 메타데이터 아티팩트 |
| 🛡️ [보안 검증](specs/SECURITY-VALIDATION.md) | 스캐너, 아카이브, 서명 및 릴리스 확인 |
| 📋 [스킬 매니페스트 스펙](specs/SKILL-MANIFEST.md) | 기계가 읽을 수 있는 매니페스트 형식 및 호환성 계약 |### 🤝 If You Want to **Contribute**

| 문서 | 무엇을 배울 것인가 |
|:----|:------|
| 📝 [기고 가이드](../CONTRIBUTING.md) | Repo 워크플로 및 풀 요청 기대치 |
| 🌍 [리포지토리 소스](../REPOSITORY-SOURCES.md) | 이제 repo-first `auto` 분기 및 경로 지원을 통해 일반 공개 PR을 통해 업스트림 저장소를 제안하는 방법 |
| 🧾 [기술 PR 워크플로](contributors/SKILL-PR-WORKFLOW.md) | 네이티브 섭취, 자동 강화 처리, `skills_omni/` 게시 및 리뷰어 기대 |
| 📄 [스킬 템플릿](contributors/SKILL-TEMPLATE.md) | 현재 머리말과 구조가 포함된 스타터 `SKILL.md` |
| 🔬 [스킬 해부학](contributors/SKILL-ANATOMY.md) | 기술에 대한 구조 및 품질 기대 |
| ✅ [품질 기준](contributors/QUALITY-BAR.md) | 저장소에 대한 승인 기준 |
| 🏆 [고득점 플레이북](contributors/HIGH-SCORE-PLAYBOOK.md) | 높은 성숙도, 품질, 모범 사례 및 보안 점수를 높이는 요인 |---

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

전체 최종 사용자 명령 화면을 보려면 [CLI 사용 설명서](users/CLI-USER-GUIDE.md)를 사용하세요.### 📁 Generated Artifacts

빌드 파이프라인은 모든 런타임 표면을 구동하는 머신 판독 가능 파일을 내보냅니다.

| 유물 | 목적 |
|:---------|:---------|
| `metadata.json` | 저장소 전체 검증 및 점수 요약 |
| `skills_index.json` | Repo-local 정규화 기술 지수 |
| `dist/catalog.json` | 검색 및 목록 발행 카탈로그 |
| `dist/bundles.json` | 가용성이 포함된 번들 정의 |
| `dist/manifests/<skill>.json` | 기술별 기계 판독 가능 매니페스트 |
| `dist/archives/<skill>.zip` | 스킬 아카이브(zip) |
| `dist/archives/<skill>.tar.gz` | 스킬 아카이브(타르볼) |
| `dist/archives/<skill>.checksums.txt` | SHA-256 체크섬 매니페스트 |

`dist/`는 의도적으로 커밋된 상태를 유지합니다. 생성된 이러한 아티팩트는 설치, API, MCP, A2A, 연기 및 릴리스 계약의 일부입니다.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

기술, 번들, 비교, 설치 계획 및 아티팩트 다운로드를 위한 읽기 전용 레지스트리 API입니다.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

로컬 사이드카는 이제 다음에 대한 최고 수준의 MCP 구성 작성을 지원합니다.

- 클로드 코드
- 커서
- VS Code 및 Dev 컨테이너
- 제미니 CLI
- 반중력
- 키로
- 코덱스 CLI
- 계속
- 윈드서핑
- 오픈코드
- 클라인
- GitHub Copilot CLI
- 킬로 코드
- 제드
- 거위### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

작업 수명 주기, 스트리밍, 지속성, 재시작 복구 및 단순 우선 로컬 오케스트레이션. 공유 임대 실행은 명시적으로 활성화된 경우 사용할 수 있습니다. Redis는 기본 로컬 경로가 아닌 고급 호스팅 옵션으로 유지됩니다.---

## 🗂️ Repository Map

| 경로 | 목적 |
|:------|:---------|
| 📂 `기술/` | 표준 저작 기술 |
| 📖`문서/사용자/` | 최종 사용자 문서 |
| 🤝`문서/기고자/` | 기여자 템플릿 및 지침 |
| 🏗️`문서/아키텍처/` | 로드맵, ADR 및 기술적 분석 |
| 🔧`문서/작업/` | 운영 런북 |
| 📋`문서/사양/` | 런타임, 프로토콜 및 아티팩트 계약 |
| 📚`docs/CATALOG.md` | 생성된 기술 카탈로그 |
| 📦`거리/` | 기계가 읽을 수 있는 아티팩트 생성 |
| 🧠`패키지/카탈로그-코어/` | 'ICatalogStorageAdapter' DI를 사용한 공유 카탈로그 런타임 |
| 🌐 `패키지/서버-api/` | `/docs`에 OpenAPI/Swagger UI가 포함된 읽기 전용 HTTP API |
| 🔌`패키지/서버-mcp/` | MCP 서버 및 로컬 사이드카 |
| 🤖 `패키지/서버-a2a/` | A2A 서버 및 작업 런타임 |
| 🖥️`패키지/cli/` | 통합 CLI 진입점, 설치 논리 및 잉크 시각적 TUI(ESM 기반) |
| ⚙️`도구/스크립트/` | 검증, 생성, 검증 및 테스트 |
| 🧪 `vitest.workspace.js` | Vitest 모노레포 작업공간 구성 |---

## 🧪 Release Validation

```bash
npm run smoke
```

연기 실행은 다음을 검증합니다.

- ✅ 기술 검증 및 메타데이터 생성
- ✅ 분류 재분류 도구
- ✅ 카탈로그 아티팩트 생성
- ✅ 생성된 카탈로그 마크다운
- ✅ 아카이브 생성 및 검증
- ✅ 레거시 통합 테스트 모음(Python PTY + Node TUI 어설션)
- ✅ 카탈로그 핵심 점수 매기기, 검색 및 필터링을 위한 Vitest 단위 제품군
- ✅`npm pack --dry-run`
- ✅ `/docs`의 OpenAPI/Swagger UI를 사용한 API 부팅 및 상태
- ✅ `stdio`, `stream` 및 `sse`에서 MCP 부팅
- ✅ A2A 부팅, 폴링, SSE 스트리밍, 취소 및 푸시 구성 수명 주기
# 🗂️ Project Structure (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Awesome Omni Skills 모노레포에 대한 전체 디렉터리 및 파일 참조입니다.**---

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

>**기본 기술 카탈로그.**이는 프로젝트의 주요 공개 콘텐츠 표면입니다.

**154**스킬 디렉토리가 포함되어 있으며 각 디렉토리에는 최소한 'SKILL.md' 플레이북이 포함되어 있습니다. 더 큰 기술에는 `agents/`, `references/`, `examples/`, `scripts/` 및 `assets/` 하위 디렉터리가 포함될 수 있습니다.

기술은 두 가지 섭취 경로를 통해 도착합니다.
-**직접 기여자 PR**— 인간이 직접 기술을 제출함
-**리포지토리 기반 외부 가져오기**— 업스트림 리포지토리에서 'external-import/*' PR을 검토했습니다.

| 포함된 내용 | 예 |
|:----|:---------|
| `skills/omni-figma/SKILL.md` | Figma 디자인-코드 기술 |
| `기술/아키텍처/SKILL.md` | 아키텍처 검토 및 계획 기술 |
| `skills/<이름>/metadata.json` | 자동 생성된 분류 및 채점 |---

### `skills_omni/`

>**선별된 개선된 영어 전용 파생물.**민간 개선 파이프라인에 의해 유지관리됩니다.

`skills/`의 기본 기술을 반영하고 향상시키는**110**향상된 기술 디렉터리가 포함되어 있습니다. 이 표면은**직접적인 공개 기여를 위해 공개되지 않습니다**. 자동화된 강화 파이프라인으로만 채워집니다.

각 파생물은 기본 소스에 대한 속성을 유지하면서 항상 영어로 더 높은 편집 표준을 제공합니다.---

### `packages/`

>**모노레포 작업공간.**모든 런타임 Node.js 코드가 여기에 있습니다.

| 패키지 | npm 이름 | 목적 |
|:---------|:---------|:---------|
| 📂 `패키지/카탈로그-코어/` | `@omni-skills/catalog-core` | `ICatalogStorageAdapter` 종속성 주입을 통한 공유 카탈로그 런타임. 모든 서버 표면에서 사용되는 검색, 채점, 비교, 권장 사항 및 설치 계획 논리 제공 |
| 📂 `패키지/cli/` | (루트 패키지 저장소) | 통합 CLI 진입점, 안내식 설치 프로그램, 잉크 시각적 TUI, 진단, 연기 검사 및 서비스 실행 프로그램. ESM 기반 |
| 📂 `패키지/설치 대상/` | `@omni-skills/install-targets` | 경로 확인 및 플래그 매핑이 포함된 9개의 설치 가능 클라이언트(Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode)의 레지스트리 |
| 📂 `패키지/서버-API/` | `@omni-skills/server-api` | OpenAPI 3.1이 포함된 읽기 전용 HTTP 카탈로그 API, '/docs'의 Swagger UI, 인증, 속도 제한, CORS/IP 허용 목록, 다운로드 및 관리 런타임 |
| 📂`패키지/서버-mcp/` | `@omni-skills/server-mcp` | `stdio`, `stream` 및 `sse` 전송을 지원하는 MCP 서버입니다. 로컬 사이드카 모드는 16개의 구성 가능 클라이언트에 대한 파일 시스템 인식 설치/제거 도구와 클라이언트 인식 MCP 구성 작성을 추가합니다.
| 📂`패키지/서버-a2a/` | `@omni-skills/server-a2a` | JSON/SQLite 지속성, 재시작 복구, SSE 스트리밍, 취소, 외부 실행기 모드 및 선택적 임대 조정을 갖춘 A2A(에이전트 간) 작업 런타임 |

각 패키지에는 단위 테스트를 위한 자체 `package.json`, `src/` 디렉토리 및 (`install-targets` 제외) `vitest.config.js`가 있습니다.---

### `dist/`

>**생성된 런타임 아티팩트.**의도적으로 버전 제어에 커밋되었습니다.

이러한 파일은 CLI 설치, API 응답, MCP 도구, A2A 작업, 스모크 테스트 및 릴리스 확인에 사용되는 컴퓨터에서 읽을 수 있는 출력입니다. `npm run build`에 의해 재생성됩니다.

| 경로 | 목적 |
|:------|:---------|
| `dist/catalog.json` | 154개 기술, 점수 및 메타데이터가 모두 포함된 카탈로그 게시 |
| `dist/bundles.json` | 구성원 가용성 상태가 포함된 번들 정의 |
| `dist/manifests/<skill>.json` | 기술별 기계 판독 가능 매니페스트 |
| `dist/archives/<skill>.zip` | 다운로드용 스킬별 ZIP 아카이브 |
| `dist/archives/<skill>.tar.gz` | 다운로드용 스킬별 타르볼 아카이브 |
| `dist/archives/<skill>.checksums.txt` | 아카이브별 SHA-256 체크섬 매니페스트 |
| `dist/archives/<skill>.zip.sig` | 분리된 서명(릴리스 타임에만 해당, gitignored) |
| `dist/release-notes.md` | 자동 생성된 릴리스 노트(gitignored) |
| `dist/signing/` | 파생된 공개 키 자료(gitignored) |

>**`dist/`가 커밋되는 이유는 무엇입니까?**설치, API, MCP, A2A 및 릴리스 계약의 일부이기 때문입니다. 소비자는 빌드를 실행하지 않고도 이러한 파일이 존재할 것으로 기대합니다.---

### `data/`

>**정적 프로젝트 데이터 파일.**빌드 및 런타임 동작을 구동하는 소스 제어 정의입니다.

| 파일 | 목적 |
|:------|:---------|
| `데이터/bundles.json` | 선별된 번들 정의(번들당 스킬 멤버 목록) |
| `데이터/프로젝트_identity.json` | 정식 프로젝트 ID: 이름, 설명, 홈페이지, GitHub 주제, 런타임 표면 정의 및 클라이언트 목록 |
| `데이터/프로젝트_상태.json` | 생성된 프로젝트 지표 스냅샷: 기술 수, 점수, 고객 수, 카테고리 수 및 품질 분포 |---

### `docs/`

>**모든 프로젝트 문서.**청중별로 구성됩니다.

| 경로 | 관객 | 내용 |
|:------|:---------|:---------|
| `docs/README.md` | 모두 | 문서 허브 — 모든 문서에 대한 중앙 색인 |
| `docs/CATALOG.md` | 사용자 | 154개 기술을 모두 점수와 함께 나열하는 자동 생성 카탈로그 |
| `docs/PROJECT-STRUCTURE.md` | 모두 | 이 파일 — 프로젝트 디렉토리 참조 |
| `문서/사용자/` | 최종 사용자 | 시작하기, CLI 사용 설명서, 사용 설명서, 번들, 런북 |
| `문서/기고자/` | 기여자 | 스킬 해부학, 템플릿, PR 워크플로우, 품질 기준, 고득점 플레이북 |
| `문서/사양/` | 건축가 | API, MCP 사이드카, CLI 설치 프로그램, 시각적 셸, 클라이언트 지원 매트릭스, 분류, 보안 및 매니페스트 사양 |
| `문서/i18n/` | 국제 사용자 | 32개 언어로 루트 README의 자동 생성 번역 |#### `docs/users/`

| 파일 | 목적 |
|:------|:---------|
| `시작-시작.md` | 2분 이내에 스킬 설치, 확인 및 호출 |
| `CLI-USER-GUIDE.md` | 단계별 시나리오가 포함된 전체 명령 참조 |
| `USAGE.md` | CLI 명령, 설치 모드, 런타임 명령 및 MCP 구성 흐름 |
| `BUNDLES.md` | 선별된 번들 및 현재 가용성 |
| `굉장한-OMNI-SKILLS-ROLLOUT.md` | 리브랜딩 마이그레이션 상태 및 승인 보고서 |
| `RUNBOOK.md` | 운영 참조('docs/options/RUNBOOK.md'로도 링크됨) |#### `docs/contributors/`

| 파일 | 목적 |
|:------|:---------|
| `SKILL-ANATOMY.md` | 기술에 대한 구조 및 품질 기대 |
| `SKILL-TEMPLATE.md` | 현재 머리말이 포함된 스타터 `SKILL.md` |
| `SKILL-PR-WORKFLOW.md` | 기본 섭취, 강화제 처리 및 검토자의 기대 |
| `품질-BAR.md` | 승인 기준 및 현재 벤치마크 |
| `HIGH-SCORE-PLAYBOOK.md` | 높은 성숙도, 품질, 모범 사례 및 보안 점수를 높이는 요인 |#### `docs/specs/`

| 파일 | 목적 |
|:------|:---------|
| `카탈로그-API.md` | HTTP 엔드포인트, 필터링, 거버넌스 및 다운로드 |
| `CLI-GUIDED-INSTALLER.md` | 안내된 설치 프로그램에 대한 행동 계약 |
| `CLI-VISUAL-SHELL.md` | 잉크 시각적 셸, 상태 모델 및 서비스 허브 |
| `LOCAL-MCP-SIDECAR.md` | 파일 시스템 인식 도구, 허용 목록 모델 및 구성 작성 |
| `클라이언트-지원-매트릭스.md` | 9개의 설치 클라이언트와 16개의 구성 클라이언트에 대한 전체 클라이언트 및 작성자 참조 |
| `SKILL-CLASSIFICATION.md` | 분류, 점수 계산 휴리스틱 및 메타데이터 아티팩트 |
| `SECURITY-VALIDATION.md` | 스캐너, 아카이브, 서명 및 릴리스 확인 |
| `SKILL-MANIFEST.md` | 기계가 읽을 수 있는 매니페스트 형식 및 호환성 계약 |#### `docs/i18n/`

**32**언어 디렉토리가 포함되어 있으며 각 디렉토리에는 `README.md`가 번역되어 있습니다. 언어에는 ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN이 포함됩니다.

번역은 `npm run i18n:render`에 의해 자동 생성되고 `npm run i18n:check`에 의해 검증됩니다.---

### `tools/`

>**인프라 구축, 검증 및 테스트.**주로 'npm run' 명령에 의해 사용되는 Python 스크립트입니다.#### `tools/scripts/`

| 스크립트 | npm 명령 | 목적 |
|:-------|:------------|:---------|
| `validate_skills.py` | `npm 실행 유효성 검사` | 모든 `SKILL.md` 파일의 유효성을 검사하고 `metadata.json`을 재생성합니다 |
| `skill_metadata.py` | (validate로 가져옴) | 핵심 모놀리식 유효성 검사기: 머리말 구문 분석, 분류, 채점, 보안 스캐닝 |
| `recategorize_skills.py` | `npm 실행 분류:보고서` | 표준 범주 정규화를 표시하거나 적용합니다. |
| `generate_index.py` | `npm 실행 인덱스` | `dist/` 매니페스트, 아카이브 및 체크섬 생성 |
| `build_catalog.js` | `npm 실행 카탈로그` | `skills_index.json`에서 `docs/CATALOG.md`를 생성합니다 |
| `generate_project_status.py` | `npm 실행 프로젝트:상태` | 현재 측정항목으로 `data/project_status.json`을 생성합니다. |
| `render_project_docs.py` | `npm 실행 문서:렌더` | README, 문서 및 CONTRIBUTING |에서 생성된 블록을 업데이트합니다.
| `generate_i18n.py` | `npm run i18n:render` | `docs/i18n/` 번역 생성 또는 업데이트 |
| `repository_sources.py` | `npm 실행 레지스트리:렌더` | `REPOSITORY-SOURCES.md` 렌더링 및 유효성 검사 |
| `verify_project_identity.py` | `npm 실행 ID:확인` | package.json, README 및 repo ID 정렬 확인 |
| `verify_archives.py` | `npm 실행 확인:아카이브` | 아카이브 무결성 및 선택적 서명 확인 |
| `verify_security_scanners.py` | `npm 실행 확인:스캐너` | 생성된 메타데이터의 스캐너 적용 범위 확인 |
| `generate_release_notes.py` | `npm 실행 릴리스:노트` | 메타데이터 및 Git 기록에서 사용자 정의 릴리스 노트 생성 |
| `next_release_version.py` | `npm 실행 릴리스:다음 버전` | patch-to-10 정책을 사용하여 다음 semver 버전 계산 |
| `sync_repo_version.py` | `npm 실행 릴리스:동기화 버전` | 작업공간 패키지 전체에서 버전 동기화 |
| `sync_github_repo_metadata.py` | `npm run repo:metadata:print` | GitHub 설명, 홈페이지, 주제를 인쇄하거나 적용합니다.
| `validate_contribution_scope.py` | (CI) | PR 기여 범위 경계 검증 |
| `install_githooks.js` | `npm 실행 후크:설치` | 로컬 사전 커밋 후크 설치 |#### `tools/scripts/tests/`

`npm test`에서 사용되는 통합 및 TUI 테스트 모음:
- 레거시 Python PTY 테스트
- 노드 TUI 어설션
- 테스트 러너 오케스트레이터---

### `.github/`

>**GitHub 작업 및 커뮤니티 템플릿.**#### `.github/workflows/`

| 작업 흐름 | 트리거 | 목적 |
|:---------|:---------|:---------|
| `validate.yml` | '메인'으로 푸시/홍보 | 생성된 아티팩트가 커밋되었는지 빌드, 테스트 및 확인 |
| `release.yml` | 태그 푸시 `v*` 또는 수동 디스패치 | 릴리스 등급 스캐너, 서명, npm 게시, GitHub 릴리스 |
| `auto-release-skill-merges.yml` | `skills/*`를 터치하여 `main`에 병합 | 스킬 변경 시 자동 버전 범프, 태그 및 릴리스 |
| `enhance-pr-skills.yml` | 스킬 변화를 통한 PR | 개인 강화제 파이프라인을 실행하고 동반 PR 게시 |
| `동기화 저장소-메타데이터.yml` | `data/project_identity.json` 변경 사항 | GitHub 설명, 홈페이지 및 주제 동기화 |#### `.github/pull_request_template.md`

기술 및 런타임 기여도에 대한 체크리스트가 포함된 기본 PR 템플릿입니다.---

### `.githooks/`

>**로컬 Git 후크.**`npm run Hooks:install`을 통해 설치됩니다.

| 파일 | 목적 |
|:------|:---------|
| `사전 커밋` | 커밋을 허용하기 전에 기본 유효성 검사를 실행합니다. |---

## 📄 Root Files Reference

| 파일 | 목적 |
|:------|:---------|
| `README.md` | 히어로 배너, 설치 가이드 및 전체 기능 개요가 포함된 공개 프로젝트 README |
| `CONTRIBUTING.md` | 기술, 런타임 및 접수 워크플로가 포함된 기여자 가이드 |
| `SECURITY.md` | 보안 정책, 범위 및 취약점 보고 지침 |
| `CODE_OF_CONDUCT.md` | 기여자 규약 v2.1 |
| `저장소-소스.md` | 외부 섭취를 위해 제안된 업스트림 저장소의 공개 등록 |
| `라이센스` | MIT 라이센스(코드 및 도구) |
| `라이센스 콘텐츠` | CC BY 4.0(문서화 및 기술 내용) |
| `패키지.json` | 루트 모노레포 패키지: 스크립트, 종속성, bin 진입점, 파일 및 작업 공간 구성 |
| `패키지-lock.json` | npm 잠금 파일(자동 생성) |
| `metadata.json` | 저장소 전체 검증 및 점수 요약(`npm run verify`로 생성됨) |
| `skills_index.json` | Repo-local 정규화 기술 지수(`npm run verify`로 생성) |
| `.gitignore` | 버전 제어 제외 - 특히 `dist/`는 무시되지**않습니다**|
| `.npmignore` | npm tarball에서 `__pycache__/` 및 `*.pyc`를 제외합니다 |
| `.node-version` | Node.js 버전 고정: `22` |
| `.nvmrc` | nvm 버전 고정: `22`(`.node-version` 미러링) |
| `vitest.config.js` | 5개의 패키지 수준 테스트 구성을 모두 참조하는 Root Vitest 구성 |
| `vitest.workspace.js` | 모노레포 인식 테스트 실행을 위한 Vitest 작업공간 정의 |---

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

위의 모든 작업은 `npm run build`의 일부로 순차적으로 실행됩니다.
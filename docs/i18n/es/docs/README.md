# 📖 Awesome Omni Skills — Documentation Hub (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/README.md) · 🇪🇸 [es](../../es/docs/README.md) · 🇫🇷 [fr](../../fr/docs/README.md) · 🇩🇪 [de](../../de/docs/README.md) · 🇮🇹 [it](../../it/docs/README.md) · 🇷🇺 [ru](../../ru/docs/README.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/README.md) · 🇯🇵 [ja](../../ja/docs/README.md) · 🇰🇷 [ko](../../ko/docs/README.md) · 🇸🇦 [ar](../../ar/docs/README.md) · 🇮🇳 [hi](../../hi/docs/README.md) · 🇮🇳 [in](../../in/docs/README.md) · 🇹🇭 [th](../../th/docs/README.md) · 🇻🇳 [vi](../../vi/docs/README.md) · 🇮🇩 [id](../../id/docs/README.md) · 🇲🇾 [ms](../../ms/docs/README.md) · 🇳🇱 [nl](../../nl/docs/README.md) · 🇵🇱 [pl](../../pl/docs/README.md) · 🇸🇪 [sv](../../sv/docs/README.md) · 🇳🇴 [no](../../no/docs/README.md) · 🇩🇰 [da](../../da/docs/README.md) · 🇫🇮 [fi](../../fi/docs/README.md) · 🇵🇹 [pt](../../pt/docs/README.md) · 🇷🇴 [ro](../../ro/docs/README.md) · 🇭🇺 [hu](../../hu/docs/README.md) · 🇧🇬 [bg](../../bg/docs/README.md) · 🇸🇰 [sk](../../sk/docs/README.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/README.md) · 🇮🇱 [he](../../he/docs/README.md) · 🇵🇭 [phi](../../phi/docs/README.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/README.md) · 🇨🇿 [cs](../../cs/docs/README.md) · 🇹🇷 [tr](../../tr/docs/README.md)

---

<!-- generated:project-meta:start -->
<!-- awesome-omni-skills: version=0.9.5; native_skills=154; curated_skills=110; updated_at=2026-04-02 -->
<!-- generated:project-meta:end -->

>**La referencia central para usar, contribuir y operar Awesome Omni Skills como un repositorio público de habilidades, una superficie derivada de mejores prácticas seleccionada y una plataforma de tiempo de ejecución compartida.**

Los archivos comunitarios estándar se encuentran en la raíz del repositorio:
[`README.md`](../README.md) · [`CONTRIBUTING.md`](../CONTRIBUTING.md) · [`SECURITY.md`](../SECURITY.md) · [`CODE_OF_CONDUCT.md`](../CODE_OF_CONDUCT.md)

> El paquete npm, el repositorio de GitHub, los documentos generados y los puntos de entrada del tiempo de ejecución ahora están alineados en**Awesome Omni Skills**. Estado de implementación actual: [Implementación de Awesome Omni Skills](operaciones/AWESOME-OMNI-SKILLS-ROLLOUT.md).---

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

La pista fundamental ahora se encuentra en el estado de proyecto activo y la segunda ola de expansión de categoría ya está en el catálogo. El proyecto ahora debe leerse como una base de trabajo con futuras vías de expansión opcionales:<!-- generated:docs-readme-current-project-state:start -->
- public `v0.9.5` and private `v1.0.0` are the current stable release floor
- the catalog now covers 154 native skills across 16 active categories, with 126 passing validation cleanly and 28 currently in warning-grade native intake
- curated `skills_omni/` output remains a maintained English-only surface with 110 automation-managed derivatives
- protocol surfaces, release automation, and private enhancement automation are in service, not in bootstrap
- the private external-sync runtime is now actively proposing native intake through `external-import/*` PRs, using the same public validator and enhancer path as human-submitted native PRs
<!-- generated:docs-readme-current-project-state:end -->

La expansión futura sigue siendo planificada:

- profundizar en el "diseño", las "herramientas", la "ai de datos" y el "aprendizaje automático"
- evitar reabrir categorías inactivas que no sean de código nativo hasta que las pistas actuales de código nativo tengan mayor profundidad
- mantener intacta la ruta de revisión del piso de calidad y del mejorador mientras lo hace

Ese trabajo de expansión ahora se refleja directamente en el catálogo en vivo y los documentos de arquitectura:

- la instantánea del catálogo actual en [Catálogo](CATALOG.md)
- el tiempo de ejecución y la forma del artefacto en [Análisis de base de código](arquitectura/CODEBASE-ANALYSIS.md)
- la dirección de avance en [Agent-Native Roadmap](arquitectura/AGENT-NATIVE-ROADMAP.md)## 🔀 Repository Surfaces

Awesome Omni Skills debe leerse como tres superficies conectadas:

| Superficie | Qué es | Cómo cambia |
|:--------|:-----------|:---------------|
| 📥 `habilidades/` | Repositorio público de habilidades nativas | RP de contribuyentes directos y entrada externa basada en repositorios revisados ​​|
| ✨ `skills_omni/` | Superficie derivada de mejores prácticas seleccionada y mejorada | Solo relaciones públicas de acompañantes potenciadores privados |
| 🖥️ Superficies de ejecución | CLI, API, MCP y A2A sobre el mismo catálogo generado | Automatización de compilación, validación y lanzamiento |---

## 📌 Current Decisions

Estas cuestiones de arquitectura ya no están “abiertas” en la práctica y ahora se tratan como decisiones de proyecto:

1.**La distribución se mantiene primero en el manifiesto más los archivos firmados**
   El manifiesto legible por máquina sigue siendo el contrato consumido por CLI, API, MCP y A2A. Los archivos firmados por habilidad son la superficie de descarga y lanzamiento que se encuentra encima de ese contrato.
2.**Los catálogos privados o premium deben reutilizar el mismo esquema de manifiesto**
   La autenticación y la política deben tener capas externas, no bifurcando la forma del manifiesto o del catálogo.
3.**La configuración de MCP debería converger en algunas familias de exportación canónicas**
   Awesome Omni Skills ahora estandariza alrededor de JSON `mcpServers`, JSON `servers`, JSON `context_servers`, YAML `mcpServers`, YAML `extensions` y TOML `[mcp_servers]`, mientras mantiene escritores personalizados solo cuando los documentos oficiales del cliente requieren una estructura diferente.

Esas decisiones se alinean con la documentación oficial actual de MCP y del cliente, que incluye:

- Registro oficial de MCP y guía de soporte de extensión en `modelcontextprotocol.io`
- Documentos OpenAI Docs MCP y Codex CLI en `developers.openai.com` y `platform.openai.com`
- Extensión VS Code MCP y documentos del producto en `code.visualstudio.com`
- documentos de cliente para Claude Code, Cursor, Continuar, Junie, Kiro, OpenCode, Cline, Kilo Code, GitHub Copilot CLI, Zed, Goose, Postman y JetBrains AI Assistant---

## 🚀 Start Here

### 👤 If You Want to **Use** the Project

| Médico | Lo que aprenderás |
|:----|:------------------|
| 📘 [Comenzando](usuarios/GETTING-STARTED.md) | Instale, verifique e invoque su primera habilidad |
| 🧭 [Guía del usuario de CLI](usuarios/CLI-USER-GUIDE.md) | Referencia de comandos completa y patrones de uso de CLI en el mundo real |
| 📗 [Guía de uso](usuarios/USAGE.md) | Comandos CLI, modos de instalación, comandos de tiempo de ejecución y flujos de configuración de MCP |
| 📦 [Paquetes](usuarios/BUNDLES.md) | Paquetes seleccionados y su disponibilidad actual |
| 📚 [Catálogo](CATALOG.md) | Catálogo generado automáticamente de habilidades publicadas |
| 🔧 [Runbook del sistema](operaciones/RUNBOOK.md) | Construya, proporcione, proteja y solucione problemas del tiempo de ejecución |### 🏗️ If You Want to **Understand** the Runtime

| Médico | Lo que aprenderás |
|:----|:------------------|
| 🗂️ [Estructura del proyecto](PROJECT-STRUCTURE.md) | Directorio completo y referencia de archivos para monorepo |
| 🗺️ [Hoja de ruta nativa del agente](arquitectura/AGENT-NATIVE-ROADMAP.md) | Evolución de la arquitectura, decisiones cerradas y áreas de expansión restantes |
| 🧭 [Hoja de ruta CLI UX](arquitectura/CLI-UX-ROADMAP.md) | Plano histórico y forma actual del CLI guiado y visual |
| 📐 [ADR-0001: Fundación del espacio de trabajo](arquitectura/ADR-0001-AGENT-NATIVE-WORKSPACE.md) | Monorepo central y decisión de tiempo de ejecución compartido |
| 🔬 [Análisis de base de código](arquitectura/CODEBASE-ANALYSIS.md) | Composición actual del tiempo de ejecución, recuentos y límites del sistema |
| 🌐 [Superficie API del catálogo](specs/CATALOG-API.md) | Puntos finales HTTP, filtrado, gobernanza y descargas |
| 🧩 [Instalador guiado por CLI](specs/CLI-GUIDED-INSTALLER.md) | Contrato comportamental para el instalador guiado |
| 🖥️ [CLI Visual Shell](specs/CLI-VISUAL-SHELL.md) | Ink visual shell, modelo de estado y centro de servicios |
| 🔌 [Sidecar MCP local](specs/LOCAL-MCP-SIDECAR.md) | Herramientas compatibles con el sistema de archivos, modelo de lista permitida y escritura de configuración |
| 🧭 [Matriz de soporte al cliente](specs/CLIENT-SUPPORT-MATRIX.md) | Clientes CLI e IDE compatibles, escritores, destinos manuales y referencias de origen |
| 📊 [Clasificación de habilidades](specs/SKILL-CLASSIFICATION.md) | Taxonomía, heurísticas de puntuación y artefactos de metadatos |
| 🛡️ [Validación de seguridad](specs/SECURITY-VALIDATION.md) | Escáneres, archivos, firmas y verificación de autorización |
| 📋 [Especificación de manifiesto de habilidad](specs/SKILL-MANIFEST.md) | Formato de manifiesto legible por máquina y contrato de compatibilidad |### 🤝 If You Want to **Contribute**

| Médico | Lo que aprenderás |
|:----|:------------------|
| 📝 [Guía de contribución](../CONTRIBUTING.md) | Expectativas del flujo de trabajo del repositorio y de las solicitudes de extracción |
| 🌍 [Fuentes del repositorio](../REPOSITORY-SOURCES.md) | Cómo proponer un repositorio ascendente a través de un PR público normal, ahora con soporte de ruta y rama `auto` primero en repositorio |
| 🧾 [Flujo de trabajo de relaciones públicas de habilidades](colaboradores/SKILL-PR-WORKFLOW.md) | Admisión nativa, procesamiento automático de potenciadores, publicación de `skills_omni/` y expectativas de los revisores |
| 📄 [Plantilla de habilidades](colaboradores/SKILL-TEMPLATE.md) | Starter `SKILL.md` con frontmatter y estructura actuales |
| 🔬 [Anatomía de habilidades](colaboradores/SKILL-ANATOMY.md) | Estructura y expectativas de calidad de una habilidad |
| ✅ [Barra de calidad](colaboradores/QUALITY-BAR.md) | Criterios de aceptación del repositorio |
| 🏆 [Libro de jugadas de puntuación alta](colaboradores/HIGH-SCORE-PLAYBOOK.md) | Qué impulsa la alta madurez, calidad, mejores prácticas y puntuaciones de seguridad |---

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

Para obtener la superficie de comando completa del usuario final, utilice la [Guía del usuario de CLI](users/CLI-USER-GUIDE.md).### 📁 Generated Artifacts

La canalización de compilación emite los archivos legibles por máquina que controlan cada superficie de tiempo de ejecución:

| Artefacto | Propósito |
|:---------|:--------|
| `metadatos.json` | Validación de todo el repositorio y resumen de puntuación |
| `skills_index.json` | Índice de habilidades normalizado de repositorio local |
| `dist/catalog.json` | Catálogo publicado para búsqueda y listado |
| `dist/bundles.json` | Definiciones de paquetes con disponibilidad |
| `dist/manifests/<habilidad>.json` | Manifiesto legible por máquina por habilidad |
| `dist/archives/<habilidad>.zip` | Archivo de habilidades (zip) |
| `dist/archives/<habilidad>.tar.gz` | Archivo de habilidades (tarball) |
| `dist/archives/<habilidad>.checksums.txt` | Manifiesto de suma de comprobación SHA-256 |

`dist/` permanece comprometido a propósito. Estos artefactos generados son parte del contrato de instalación, API, MCP, A2A, humo y lanzamiento.### 🌐 API

```bash
npx awesome-omni-skills api --port 3333
```

API de registro de solo lectura para habilidades, paquetes, comparación, planificación de instalación y descargas de artefactos.### 🔌 MCP

```bash
npx awesome-omni-skills mcp stdio
npx awesome-omni-skills mcp stream
npx awesome-omni-skills mcp sse
npx awesome-omni-skills mcp stream --local
```

El sidecar local ahora admite escritura de configuración MCP de primera clase para:

- Código Claude
- Cursores
- Código VS y contenedores de desarrollo
- CLI de Géminis
- Antigravedad
-Kiro
- CLI del Códice
- Continuar
- windsurf
- Código abierto
- Clina
- CLI del copiloto de GitHub
- Código de kilos
-Zed
- ganso### 🤖 A2A

```bash
npx awesome-omni-skills a2a --port 3335
```

Ciclo de vida de las tareas, transmisión, persistencia, recuperación de reinicio y orquestación local simple. La ejecución arrendada compartida está disponible cuando se habilita explícitamente; Redis sigue siendo una opción alojada avanzada, no la ruta local predeterminada.---

## 🗂️ Repository Map

| Camino | Propósito |
|:-----|:--------|
| 📂 `habilidades/` | Habilidades de autor canónico |
| 📖 `docs/usuarios/` | Documentación para el usuario final |
| 🤝 `docs/colaboradores/` | Plantillas y orientación para colaboradores |
| 🏗️ `docs/arquitectura/` | Hoja de ruta, ADR y análisis técnico |
| 🔧 `docs/operaciones/` | Runbooks operativos |
| 📋 `docs/especificaciones/` | Contratos de tiempo de ejecución, protocolo y artefactos |
| 📚 `docs/CATALOG.md` | Catálogo de habilidades generado |
| 📦 `dist/` | Artefactos generados legibles por máquina |
| 🧠 `paquetes/catalog-core/` | Tiempo de ejecución de catálogo compartido con `ICatalogStorageAdapter` DI |
| 🌐 `paquetes/api-servidor/` | API HTTP de solo lectura con interfaz de usuario OpenAPI/Swagger en `/docs` |
| 🔌 `paquetes/servidor-mcp/` | Servidor MCP y sidecar local |
| 🤖 `paquetes/servidor-a2a/` | Servidor A2A y tiempo de ejecución de tareas |
| 🖥️ `paquetes/cli/` | Puntos de entrada CLI unificados, lógica de instalación y TUI visual de Ink (nativo de ESM) |
| ⚙️ `herramientas/scripts/` | Validación, generación, verificación y pruebas |
| 🧪 `vitest.workspace.js` | Configuración del espacio de trabajo de Vitest monorepo |---

## 🧪 Release Validation

```bash
npm run smoke
```

El recorrido de humo valida:

- ✅ validación de habilidades y generación de metadatos
- ✅ herramientas de recategorización de taxonomía
- ✅ generación de artefactos de catálogo
- ✅ descuento de catálogo generado
- ✅ generación y verificación de archivos
- ✅ conjunto de pruebas de integración heredadas (afirmaciones de Python PTY + Node TUI)
- ✅ Conjunto de unidades Vitest para puntuación, búsqueda y filtrado del núcleo del catálogo
- ✅ `paquete npm --ejecución en seco`
- ✅ Arranque y estado de API con OpenAPI/Swagger UI en `/docs`
- ✅ Arranque MCP en `stdio`, `stream` y `sse`
- ✅ Arranque A2A, sondeo, transmisión SSE, cancelación y ciclo de vida de configuración push
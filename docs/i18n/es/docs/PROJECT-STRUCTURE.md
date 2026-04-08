# 🗂️ Project Structure (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../docs/PROJECT-STRUCTURE.md) · 🇪🇸 [es](../../es/docs/PROJECT-STRUCTURE.md) · 🇫🇷 [fr](../../fr/docs/PROJECT-STRUCTURE.md) · 🇩🇪 [de](../../de/docs/PROJECT-STRUCTURE.md) · 🇮🇹 [it](../../it/docs/PROJECT-STRUCTURE.md) · 🇷🇺 [ru](../../ru/docs/PROJECT-STRUCTURE.md) · 🇨🇳 [zh-CN](../../zh-CN/docs/PROJECT-STRUCTURE.md) · 🇯🇵 [ja](../../ja/docs/PROJECT-STRUCTURE.md) · 🇰🇷 [ko](../../ko/docs/PROJECT-STRUCTURE.md) · 🇸🇦 [ar](../../ar/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [hi](../../hi/docs/PROJECT-STRUCTURE.md) · 🇮🇳 [in](../../in/docs/PROJECT-STRUCTURE.md) · 🇹🇭 [th](../../th/docs/PROJECT-STRUCTURE.md) · 🇻🇳 [vi](../../vi/docs/PROJECT-STRUCTURE.md) · 🇮🇩 [id](../../id/docs/PROJECT-STRUCTURE.md) · 🇲🇾 [ms](../../ms/docs/PROJECT-STRUCTURE.md) · 🇳🇱 [nl](../../nl/docs/PROJECT-STRUCTURE.md) · 🇵🇱 [pl](../../pl/docs/PROJECT-STRUCTURE.md) · 🇸🇪 [sv](../../sv/docs/PROJECT-STRUCTURE.md) · 🇳🇴 [no](../../no/docs/PROJECT-STRUCTURE.md) · 🇩🇰 [da](../../da/docs/PROJECT-STRUCTURE.md) · 🇫🇮 [fi](../../fi/docs/PROJECT-STRUCTURE.md) · 🇵🇹 [pt](../../pt/docs/PROJECT-STRUCTURE.md) · 🇷🇴 [ro](../../ro/docs/PROJECT-STRUCTURE.md) · 🇭🇺 [hu](../../hu/docs/PROJECT-STRUCTURE.md) · 🇧🇬 [bg](../../bg/docs/PROJECT-STRUCTURE.md) · 🇸🇰 [sk](../../sk/docs/PROJECT-STRUCTURE.md) · 🇺🇦 [uk-UA](../../uk-UA/docs/PROJECT-STRUCTURE.md) · 🇮🇱 [he](../../he/docs/PROJECT-STRUCTURE.md) · 🇵🇭 [phi](../../phi/docs/PROJECT-STRUCTURE.md) · 🇧🇷 [pt-BR](../../pt-BR/docs/PROJECT-STRUCTURE.md) · 🇨🇿 [cs](../../cs/docs/PROJECT-STRUCTURE.md) · 🇹🇷 [tr](../../tr/docs/PROJECT-STRUCTURE.md)

---


>**Directorio completo y referencia de archivos para el monorepo Awesome Omni Skills.**---

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

>**El catálogo de habilidades nativas.**Esta es la principal superficie de contenido público del proyecto.

Contiene**154**directorios de habilidades, cada uno con al menos un manual `SKILL.md`. Las habilidades más amplias pueden incluir los subdirectorios `agents/`, `references/`, `examples/`, `scripts/` y `assets/`.

Las habilidades llegan a través de dos vías de admisión:
-**RP de contribuyentes directos**: los humanos envían habilidades directamente
-**Importaciones externas basadas en repositorio**: revisó los PR `external-import/*` de repositorios ascendentes

| Qué contiene | Ejemplo |
|:-----------------|:--------|
| `skills/omni-figma/SKILL.md` | Habilidad de diseño a código de Figma |
| `habilidades/arquitectura/SKILL.md` | Habilidad de revisión y planificación de arquitectura |
| `habilidades/<nombre>/metadata.json` | Clasificación y puntuación generadas automáticamente |---

### `skills_omni/`

>**Derivados mejorados seleccionados solo en inglés.**Mantenido por el canal de mejora privado.

Contiene**110**directorios de habilidades mejorados que reflejan y mejoran sus contrapartes nativas en `skills/`. Esta superficie**no está abierta a la contribución pública directa**; está poblada exclusivamente por el canal de mejora automatizado.

Cada derivado conserva la atribución a su fuente nativa y al mismo tiempo proporciona un estándar editorial más alto, siempre en inglés.---

### `packages/`

>**Los espacios de trabajo de monorepo.**Todo el código de tiempo de ejecución de Node.js se encuentra aquí.

| Paquete | nombre npm | Propósito |
|:--------|:---------|:--------|
| 📂 `paquetes/catalog-core/` | `@omni-skills/catalog-core` | Tiempo de ejecución de catálogo compartido con inyección de dependencia `ICatalogStorageAdapter`. Proporciona lógica de búsqueda, puntuación, comparación, recomendación y plan de instalación consumida por todas las superficies del servidor |
| 📂 `paquetes/cli/` | (contenedor de paquetes raíz) | Puntos de entrada CLI unificados, instalador guiado, TUI visual Ink, diagnósticos, comprobaciones de humo y lanzadores de servicios. ESM nativo |
| 📂 `paquetes/destinos-de instalación/` | `@omni-skills/install-targets` | Registro de los 9 clientes con capacidad de instalación (Claude Code, Cursor, Gemini CLI, Codex CLI, Kiro, Antigravity, Goose, Qwen Code, OpenCode) con resolución de ruta y mapeo de banderas |
| 📂 `paquetes/api-servidor/` | `@omni-skills/servidor-api` | API de catálogo HTTP de solo lectura con OpenAPI 3.1, interfaz de usuario Swagger en `/docs`, autenticación, limitación de velocidad, listas permitidas de CORS/IP, descargas y tiempo de ejecución de administración |
| 📂 `paquetes/servidor-mcp/` | `@omni-skills/servidor-mcp` | Servidor MCP que admite transportes `stdio`, `stream` y `sse`. El modo sidecar local agrega herramientas de instalación/eliminación compatibles con el sistema de archivos y escritura de configuración MCP compatible con el cliente para 16 clientes con capacidad de configuración |
| 📂 `paquetes/servidor-a2a/` | `@omni-skills/servidor-a2a` | Tiempo de ejecución de tareas A2A (Agente a Agente) con persistencia JSON/SQLite, recuperación de reinicio, transmisión SSE, cancelación, modo de ejecutor externo y coordinación arrendada opcional |

Cada paquete tiene su propio directorio `package.json`, `src/` y (excepto `install-targets`) un `vitest.config.js` para pruebas unitarias.---

### `dist/`

>**Artefactos de tiempo de ejecución generados.**Comprometidos intencionalmente con el control de versiones.

Estos archivos son los resultados legibles por máquina consumidos por las instalaciones de CLI, las respuestas de API, las herramientas MCP, las tareas A2A, las pruebas de humo y la verificación de versiones. Son regenerados por "npm run build".

| Camino | Propósito |
|:-----|:--------|
| `dist/catalog.json` | Catálogo publicado con las 154 habilidades, puntuaciones y metadatos |
| `dist/bundles.json` | Definiciones de paquetes con estado de disponibilidad de miembros |
| `dist/manifests/<habilidad>.json` | Manifiesto legible por máquina por habilidad |
| `dist/archives/<habilidad>.zip` | Archivo ZIP por habilidad para descargar |
| `dist/archives/<habilidad>.tar.gz` | Archivo tarball por habilidad para descargar |
| `dist/archives/<habilidad>.checksums.txt` | Manifiesto de suma de comprobación SHA-256 por archivo |
| `dist/archives/<habilidad>.zip.sig` | Firma separada (solo en el momento del lanzamiento, gitignored) |
| `dist/notas-de-lanzamiento.md` | Notas de la versión generadas automáticamente (gitignored) |
| `dist/firma/` | Material de clave pública derivada (gitignored) |

>**¿Por qué se confirma `dist/`?**Porque es parte del contrato de instalación, API, MCP, A2A y lanzamiento. Los consumidores esperan que estos archivos estén presentes sin ejecutar una compilación.---

### `data/`

>**Archivos de datos estáticos del proyecto.**Definiciones controladas por el código fuente que impulsan el comportamiento de compilación y tiempo de ejecución.

| Archivo | Propósito |
|:-----|:--------|
| `datos/bundles.json` | Definiciones de paquetes seleccionados (listas de miembros con habilidades por paquete) |
| `datos/proyecto_identidad.json` | Identidad canónica del proyecto: nombre, descripción, página de inicio, temas de GitHub, definiciones de superficie de tiempo de ejecución y listas de clientes |
| `datos/project_status.json` | Instantánea de métricas del proyecto generadas: recuentos de habilidades, puntuaciones, recuentos de clientes, recuentos de categorías y diferenciales de calidad |---

### `docs/`

>**Toda la documentación del proyecto.**Organizada por audiencia.

| Camino | Audiencia | Contenido |
|:-----|:---------|:--------|
| `docs/README.md` | Todos | Centro de documentación: índice central de todos los documentos |
| `docs/CATALOG.md` | Usuarios | Catálogo generado automáticamente que enumera las 154 habilidades con puntuaciones |
| `docs/PROJECT-STRUCTURE.md` | Todos | Este archivo: referencia del directorio del proyecto |
| `docs/usuarios/` | Usuarios finales | Introducción, guía del usuario de CLI, guía de uso, paquetes, runbook |
| `docs/colaboradores/` | Colaboradores | Anatomía de habilidades, plantilla, flujo de trabajo de relaciones públicas, barra de calidad, guía de puntuación alta |
| `docs/especificaciones/` | Arquitectos | API, sidecar MCP, instalador CLI, shell visual, matriz de soporte al cliente, clasificación, seguridad y especificaciones de manifiesto |
| `docs/i18n/` | Usuarios internacionales | Traducciones generadas automáticamente del archivo README raíz en 32 idiomas |#### `docs/users/`

| Archivo | Propósito |
|:-----|:--------|
| `COMENZANDO.md` | Instalar, verificar e invocar una habilidad en menos de 2 minutos |
| `CLI-GUÍA-USUARIO.md` | Referencia de comando completa con escenarios paso a paso |
| `USO.md` | Comandos CLI, modos de instalación, comandos de tiempo de ejecución y flujos de configuración de MCP |
| `PAQUETES.md` | Paquetes seleccionados y su disponibilidad actual |
| `IMPRESIONANTE-OMNI-HABILIDADES-ROLLOUT.md` | Informe de aceptación y estado de migración de cambio de marca |
| `RUNBOOK.md` | Referencia operativa (también vinculada como `docs/operaciones/RUNBOOK.md`) |#### `docs/contributors/`

| Archivo | Propósito |
|:-----|:--------|
| `HABILIDAD-ANATOMÍA.md` | Estructura y expectativas de calidad de una habilidad |
| `SKILL-TEMPLATE.md` | Iniciador `SKILL.md` con frontmatter actual |
| `SKILL-PR-WORKFLOW.md` | Ingesta nativa, procesamiento de potenciadores y expectativas del revisor |
| `CALIDAD-BAR.md` | Criterios de aceptación y puntos de referencia actuales |
| `ALTA PUNTUACIÓN-PLAYBOOK.md` | Qué impulsa la alta madurez, calidad, mejores prácticas y puntuaciones de seguridad |#### `docs/specs/`

| Archivo | Propósito |
|:-----|:--------|
| `CATALOGO-API.md` | Puntos finales HTTP, filtrado, gobernanza y descargas |
| `INSTALADOR-GUIADO-CLI.md` | Contrato comportamental para el instalador guiado |
| `CLI-VISUAL-SHELL.md` | Ink visual shell, modelo de estado y centro de servicios |
| `LOCAL-MCP-SIDECAR.md` | Herramientas compatibles con el sistema de archivos, modelo de lista permitida y escritura de configuración |
| `MATRIZ-SOPORTE-CLIENTE.md` | Referencia completa de clientes y escritores en 9 clientes de instalación + 16 de configuración |
| `CLASIFICACIÓN DE HABILIDADES.md` | Taxonomía, heurísticas de puntuación y artefactos de metadatos |
| `VALIDACIÓN-SEGURIDAD.md` | Escáneres, archivos, firmas y verificación de autorización |
| `HABILIDAD-MANIFEST.md` | Formato de manifiesto legible por máquina y contrato de compatibilidad |#### `docs/i18n/`

Contiene**32**directorios de idiomas, cada uno con un `README.md` traducido. Los idiomas incluyen: ar, bg, cs, da, de, es, fi, fr, he, hi, hu, id, in, it, ja, ko, ms, nl, no, phi, pl, pt, pt-BR, ro, ru, sk, sv, th, tr, uk-UA, vi, zh-CN.

Las traducciones se generan automáticamente con `npm run i18n:render` y se validan con `npm run i18n:check`.---

### `tools/`

>**Creación, validación y prueba de infraestructura.**Principalmente scripts de Python consumidos por los comandos `npm run`.#### `tools/scripts/`

| Guión | Comando npm | Propósito |
|:-------|:------------|:--------|
| `validar_skills.py` | `npm ejecutar validar` | Valida todos los archivos `SKILL.md` y regenera `metadata.json` |
| `skill_metadata.py` | (importado por validar) | Validador monolítico central: análisis preliminar, taxonomía, puntuación, escaneo de seguridad |
| `recategorize_skills.py` | `npm ejecutar taxonomía: informe` | Muestra o aplica la normalización de categorías canónicas |
| `generar_index.py` | `índice de ejecución npm` | Genera manifiestos, archivos y sumas de verificación `dist/` |
| `build_catalog.js` | `npm ejecutar catálogo` | Genera `docs/CATALOG.md` desde `skills_index.json` |
| `generar_proyecto_status.py` | `npm ejecutar proyecto: estado` | Genera `data/project_status.json` con métricas actuales |
| `render_project_docs.py` | `npm ejecutar documentos: renderizar` | Las actualizaciones generaron bloques en README, docs y CONTRIBUTING |
| `generate_i18n.py` | `npm ejecuta i18n:render` | Genera o actualiza traducciones `docs/i18n/` |
| `repositorio_fuentes.py` | `npm ejecutar registro: renderizar` | Representa y valida `REPOSITORY-SOURCES.md` |
| `verificar_proyecto_identidad.py` | `npm ejecutar identidad: comprobar` | Verifica la alineación de identidad de package.json, README y repositorio |
| `verificar_archivos.py` | `npm ejecutar verificar:archivos` | Verifica la integridad del archivo y las firmas opcionales |
| `verify_security_scanners.py` | `npm ejecutar verificar: escáneres` | Confirma la cobertura del escáner en los metadatos generados |
| `generate_release_notes.py` | `npm ejecutar lanzamiento: notas` | Genera notas de versión personalizadas a partir de metadatos e historial de git |
| `siguiente_versión_liberación.py` | `lanzamiento de ejecución de npm: próxima versión` | Calcula la próxima versión de semver utilizando la política patch-to-10 |
| `sync_repo_version.py` | `lanzamiento de ejecución de npm: versión de sincronización` | Sincroniza la versión entre los paquetes del espacio de trabajo |
| `sync_github_repo_metadata.py` | `npm ejecutar repositorio:metadatos:imprimir` | Imprime o aplica la descripción, la página de inicio y los temas de GitHub |
| `validar_contribución_alcance.py` | (CI) | Valida los límites del alcance de la contribución de relaciones públicas |
| `install_githooks.js` | `npm ejecutar ganchos: instalar` | Instala el gancho de confirmación previa local |#### `tools/scripts/tests/`

Conjuntos de pruebas de integración y TUI consumidos por `npm test`:
- Pruebas PTY de Python heredadas
- Afirmaciones de TUI de nodo
- Orquestador del corredor de pruebas---

### `.github/`

>**Acciones de GitHub y plantillas comunitarias.**#### `.github/workflows/`

| Flujo de trabajo | Gatillo | Propósito |
|:---------|:--------|:--------|
| `validar.yml` | Empujar/PR a `principal` | Construir, probar y confirmar que los artefactos generados estén confirmados |
| `liberación.yml` | Etiqueta push `v*` o envío manual | Escáneres de versión, firma, publicación npm, versión de GitHub |
| `auto-release-skill-merges.yml` | Fusionarse con `main` tocando `skills/*` | Mejora, etiqueta y liberación automática de versiones en cambios de habilidades |
| `mejorar-pr-skills.yml` | PR con cambios de habilidades | Dirige el canal de mejora privado y publica relaciones públicas complementarias |
| `sync-repository-metadatos.yml` | Cambios en `data/project_identity.json` | Sincroniza la descripción, la página de inicio y los temas de GitHub |#### `.github/pull_request_template.md`

Plantilla de relaciones públicas predeterminada con lista de verificación para contribuciones de habilidades y tiempo de ejecución.---

### `.githooks/`

>**Ganchos locales de Git.**Instalado a través de `npm run hooks:install`.

| Archivo | Propósito |
|:-----|:--------|
| `pre-compromiso` | Ejecuta una validación básica antes de permitir una confirmación |---

## 📄 Root Files Reference

| Archivo | Propósito |
|:-----|:--------|
| `README.md` | README del proyecto público con banner principal, guía de instalación y descripción general completa de las funciones |
| `CONTRIBUYENDO.md` | Guía para colaboradores con flujos de trabajo de admisión, tiempo de ejecución y habilidades |
| `SEGURIDAD.md` | Instrucciones para informes de vulnerabilidad, alcance y política de seguridad |
| `CODE_OF_CONDUCT.md` | Convenio de Colaborador v2.1 |
| `REPOSITORIO-FUENTES.md` | Registro público de repositorios ascendentes propuestos para entrada externa |
| `LICENCIA` | Licencia MIT (código y herramientas) |
| `LICENCIA-CONTENIDO` | CC BY 4.0 (documentación y contenido de habilidades) |
| `paquete.json` | Paquete raíz monorepo: scripts, dependencias, puntos de entrada bin, archivos y configuración del espacio de trabajo |
| `paquete-lock.json` | archivo de bloqueo npm (generado automáticamente) |
| `metadatos.json` | Validación de todo el repositorio y resumen de puntuación (generado por `npm run validar`) |
| `skills_index.json` | Índice de habilidades normalizado de repositorio local (generado por `npm run validar`) |
| `.gitignore` | Exclusiones de control de versiones, en particular `dist/`**no**se ignora |
| `.npmignore` | Excluye `__pycache__/` y `*.pyc` del tarball de npm |
| `.versión-nodo` | Fijación de versión de Node.js: `22` |
| `.nvmrc` | Fijación de versión de nvm: `22` (espejos `.node-version`) |
| `vitest.config.js` | Configuración raíz de Vitest que hace referencia a las 5 configuraciones de prueba a nivel de paquete |
| `vitest.workspace.js` | Definición del espacio de trabajo de Vitest para la ejecución de pruebas compatibles con monorepo |---

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

Todo lo anterior se ejecuta secuencialmente como parte de "npm run build".
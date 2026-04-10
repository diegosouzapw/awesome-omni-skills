import express from "express";
import rateLimit from "express-rate-limit";
import swaggerUi from "swagger-ui-express";
import yaml from "yaml";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import {
  buildInstallPlan,
  compareSkills,
  getHealthSnapshot,
  getFamily,
  getSkill,
  getSkillPublicUrls,
  listFamilies,
  listBundles,
  listSkillArchives,
  listSkills,
  listSkillArtifacts,
  recommendSkills,
  resolveCatalogFile,
  resolveFamilyVariant,
  resolveSkillArchiveChecksumsFile,
  resolveSkillArchiveFile,
  resolveSkillArchiveSignatureFile,
  resolveManifestFile,
  resolveSkillArtifactFile,
  resolveSkillEntrypointFile,
  resolveSkillSelection,
  searchFamilies,
  searchSkills,
} from "@omni-skills/catalog-core";
import {
  applyExpressHttpRuntime,
  createHttpCorsMiddleware,
  createHttpRuntimeMiddleware,
  getHttpRuntimeSnapshot,
} from "./http-runtime.js";
import { isSafeArchiveFormat } from "./archive-format.js";

const app = express();
const PORT = Number.parseInt(process.env.PORT || "3333", 10);
const HOST = process.env.HOST || "127.0.0.1";

applyExpressHttpRuntime(app);
app.use(createHttpCorsMiddleware());
app.use(express.json({ limit: "1mb" }));
app.use(createHttpRuntimeMiddleware({
  allowAnonymousPaths: ["/healthz"],
  adminPaths: ["/admin/runtime"],
}));

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 1000,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." }
});

app.use("/v1/", apiLimiter);

app.param("id", (req, res, next, id) => {
  if (!/^[a-zA-Z0-9_-]+$/.test(id)) {
    return res.status(400).json({ error: "Invalid skill ID format." });
  }
  next();
});

function requestBaseUrl(req) {
  return `${req.protocol}://${req.get("host")}`;
}

app.get("/healthz", (_req, res) => {
  res.json({
    ...getHealthSnapshot(),
    http: getHttpRuntimeSnapshot(),
  });
});

app.get("/admin/runtime", (req, res) => {
  res.json({
    request_id: req.omniRequestId || null,
    http: getHttpRuntimeSnapshot({ detailed: true }),
    runtime: {
      host: HOST,
      port: PORT,
      base_url: requestBaseUrl(req),
    },
    catalog: {
      total_skills: listSkills({ limit: 1 }).total,
      bundles: listBundles().length,
    },
  });
});

const openApiPath = fileURLToPath(new URL("../openapi.yaml", import.meta.url));
let swaggerDocument = null;
try {
  swaggerDocument = yaml.parse(fs.readFileSync(openApiPath, "utf8"));
} catch (e) {
  console.warn("Could not load openapi.yaml. Swagger UI will not be available. " + e.message);
}

if (swaggerDocument) {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
}

app.get("/v1/catalog/download", (_req, res) => {
  res.download(resolveCatalogFile(), "catalog.json");
});

app.get("/v1/skills", (req, res) => {
  res.json(listSkills(req.query));
});

app.get("/v1/families", (req, res) => {
  res.json({ total: listFamilies(req.query).length, results: listFamilies(req.query) });
});

app.get("/v1/families/search", (req, res) => {
  res.json(searchFamilies(req.query));
});

app.get("/v1/families/:id", (req, res) => {
  const family = getFamily(req.params.id, req.query);
  if (!family) {
    res.status(404).json({ error: `Family '${req.params.id}' not found.` });
    return;
  }
  res.json(family);
});

app.get("/v1/families/:id/variant/:variantId", (req, res) => {
  const skill = resolveFamilyVariant(req.params.id, req.params.variantId, {
    ...req.query,
    baseUrl: requestBaseUrl(req),
  });
  if (!skill) {
    res.status(404).json({ error: `Variant '${req.params.variantId}' not found in family '${req.params.id}'.` });
    return;
  }
  res.json(skill);
});

app.get("/v1/skills/:id", (req, res) => {
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  if (!skill) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json(skill);
});

app.get("/v1/skills/:id/artifacts", (req, res) => {
  const artifacts = listSkillArtifacts(req.params.id, { baseUrl: requestBaseUrl(req) });
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  if (!artifacts || !skill) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json({
    id: req.params.id,
    links: skill.links,
    artifacts,
    checksums: skill.checksums,
  });
});

app.get("/v1/skills/:id/archives", (req, res) => {
  const archives = listSkillArchives(req.params.id, { baseUrl: requestBaseUrl(req) });
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  if (!archives || !skill) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json({
    id: req.params.id,
    links: skill.links,
    archives,
    archive_checksums: skill.archive_checksums,
  });
});

app.get("/v1/skills/:id/downloads", (req, res) => {
  const skill = getSkill(req.params.id, { baseUrl: requestBaseUrl(req) });
  const artifacts = listSkillArtifacts(req.params.id, { baseUrl: requestBaseUrl(req) });
  const links = getSkillPublicUrls(req.params.id, { baseUrl: requestBaseUrl(req) });

  if (!skill || !artifacts || !links) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.json({
    id: req.params.id,
    links,
    checksums: skill.checksums,
    artifacts,
    archives: listSkillArchives(req.params.id, { baseUrl: requestBaseUrl(req) }),
    archive_checksums: skill.archive_checksums,
  });
});

app.get("/v1/skills/:id/download/manifest", (req, res) => {
  const manifestFile = resolveManifestFile(req.params.id);
  if (!manifestFile) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.download(manifestFile, `${req.params.id}.manifest.json`);
});

app.get("/v1/skills/:id/download/entrypoint", (req, res) => {
  const entrypointFile = resolveSkillEntrypointFile(req.params.id);
  if (!entrypointFile) {
    res.status(404).json({ error: `Skill '${req.params.id}' not found.` });
    return;
  }

  res.download(entrypointFile, `${req.params.id}.SKILL.md`);
});

app.get("/v1/skills/:id/download/artifact", (req, res) => {
  const artifactPath = String(req.query.path || "");
  if (artifactPath.includes("..")) {
    return res.status(400).json({ error: "Invalid artifact path." });
  }
  const resolved = resolveSkillArtifactFile(req.params.id, artifactPath);
  if (!artifactPath || !resolved) {
    res.status(404).json({ error: `Artifact '${artifactPath}' not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(resolved.absolutePath, resolved.artifact.path.split("/").at(-1));
});

app.get("/v1/skills/:id/download/archive", (req, res) => {
  const format = String(req.query.format || "zip");
  if (!isSafeArchiveFormat(format)) {
    return res.status(400).json({ error: "Invalid format." });
  }
  const resolved = resolveSkillArchiveFile(req.params.id, format);
  if (!resolved) {
    res.status(404).json({ error: `Archive '${format}' not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(resolved.absolutePath, resolved.archive.file_name);
});

app.get("/v1/skills/:id/download/archive/signature", (req, res) => {
  const format = String(req.query.format || "zip");
  if (!isSafeArchiveFormat(format)) {
    return res.status(400).json({ error: "Invalid format." });
  }
  const resolved = resolveSkillArchiveSignatureFile(req.params.id, format);
  if (!resolved) {
    res.status(404).json({ error: `Signature '${format}' not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(resolved.absolutePath, resolved.archive.signature.path.split("/").at(-1));
});

app.get("/v1/skills/:id/download/archive/checksums", (req, res) => {
  const resolved = resolveSkillArchiveChecksumsFile(req.params.id);
  if (!resolved) {
    res.status(404).json({ error: `Archive checksums not found for skill '${req.params.id}'.` });
    return;
  }

  res.download(
    resolved.absolutePath,
    resolved.archive_checksums.file_name || `${req.params.id}.checksums.txt`,
  );
});

app.get("/v1/search", (req, res) => {
  const groupBy = String(req.query.group || "").trim().toLowerCase();
  res.json(groupBy === "families" ? searchFamilies(req.query) : searchSkills(req.query));
});

app.get("/v1/compare", (req, res) => {
  const ids = String(req.query.ids || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  res.json(compareSkills(ids));
});

app.get("/v1/bundles", (_req, res) => {
  res.json({ bundles: listBundles() });
});

app.get("/v1/recommend", (req, res) => {
  res.json(recommendSkills(req.query));
});

app.get("/v1/resolve/:selectionId", (req, res) => {
  const skill = resolveSkillSelection(req.params.selectionId, { baseUrl: requestBaseUrl(req) });
  if (!skill) {
    res.status(404).json({ error: `Selection '${req.params.selectionId}' could not be resolved.` });
    return;
  }
  res.json(skill);
});

app.post("/v1/install/plan", (req, res) => {
  res.json(buildInstallPlan(req.body || {}, { baseUrl: requestBaseUrl(req) }));
});

app.listen(PORT, HOST, () => {
  console.log(`Awesome Omni Skills API listening at http://${HOST}:${PORT}`);
});

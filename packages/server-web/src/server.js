import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import {
  compareSkills,
  getFamily,
  getHealthSnapshot,
  getSkill,
  listBundles,
  listFamilies,
  listSkills,
  recommendSkills,
  resolveCatalogFile,
  searchFamilies,
  searchSkills,
} from "@omni-skills/catalog-core";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, "public");
const INDEX_HTML = path.join(PUBLIC_DIR, "index.html");

function parseRuntimeArgs(argv) {
  const positional = [];
  let host;
  let port;

  for (let index = 0; index < argv.length; index += 1) {
    const arg = String(argv[index] || "").trim();
    if (!arg) {
      continue;
    }

    if (arg === "--host") {
      host = String(argv[index + 1] || "").trim() || host;
      index += 1;
      continue;
    }
    if (arg.startsWith("--host=")) {
      host = arg.slice("--host=".length).trim() || host;
      continue;
    }
    if (arg === "--port") {
      port = String(argv[index + 1] || "").trim() || port;
      index += 1;
      continue;
    }
    if (arg.startsWith("--port=")) {
      port = arg.slice("--port=".length).trim() || port;
      continue;
    }

    positional.push(arg);
  }

  if (!host) {
    const positionalHost = positional.find((value) => !/^\d+$/.test(value));
    if (positionalHost) {
      host = positionalHost;
    }
  }

  if (!port) {
    const positionalPort = positional.find((value) => /^\d+$/.test(value));
    if (positionalPort) {
      port = positionalPort;
    }
  }

  return { host, port };
}

function resolvePort(value) {
  const parsed = Number.parseInt(String(value || "").trim(), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 3380;
}

const runtimeArgs = parseRuntimeArgs(process.argv.slice(2));
const PORT = resolvePort(process.env.PORT || runtimeArgs.port);
const HOST = process.env.HOST || runtimeArgs.host || "127.0.0.1";

const app = express();

function requestBaseUrl(req) {
  return `${req.protocol}://${req.get("host")}`;
}

function sendError(res, status, error) {
  res.status(status).json({ error });
}

app.use((req, res, next) => {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "no-referrer");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }

  next();
});

app.use(express.static(PUBLIC_DIR));

app.get("/healthz", (_req, res) => {
  res.json({
    ...getHealthSnapshot(),
    runtime: {
      host: HOST,
      port: PORT,
    },
  });
});

app.get("/api/v1/catalog/download", (_req, res) => {
  res.download(resolveCatalogFile(), "catalog.json");
});

app.get("/api/v1/skills", (req, res) => {
  res.json(listSkills(req.query));
});

app.get("/api/v1/skills/:id", (req, res) => {
  const skill = getSkill(req.params.id, { ...req.query, baseUrl: requestBaseUrl(req) });
  if (!skill) {
    sendError(res, 404, `Skill '${req.params.id}' not found.`);
    return;
  }
  res.json(skill);
});

app.get("/api/v1/families", (req, res) => {
  const results = listFamilies(req.query);
  res.json({ total: results.length, results });
});

app.get("/api/v1/families/:id", (req, res) => {
  const family = getFamily(req.params.id, req.query);
  if (!family) {
    sendError(res, 404, `Family '${req.params.id}' not found.`);
    return;
  }
  res.json(family);
});

app.get("/api/v1/search", (req, res) => {
  const groupBy = String(req.query.group || "").trim().toLowerCase();
  const options = { ...req.query, baseUrl: requestBaseUrl(req) };
  res.json(groupBy === "families" ? searchFamilies(options) : searchSkills(options));
});

app.get("/api/v1/bundles", (req, res) => {
  res.json({ bundles: listBundles(req.query) });
});

app.get("/api/v1/compare", (req, res) => {
  const ids = String(req.query.ids || "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  res.json(compareSkills(ids, req.query));
});

app.get("/api/v1/recommend", (req, res) => {
  res.json(recommendSkills(req.query));
});

app.get("/", (_req, res) => {
  if (fs.existsSync(INDEX_HTML)) {
    res.sendFile(INDEX_HTML);
    return;
  }

  res
    .status(200)
    .type("html")
    .send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Awesome Omni Skills Dashboard</title>
  </head>
  <body style="font-family: sans-serif; padding: 24px;">
    <h1>Awesome Omni Skills Dashboard</h1>
    <p>The embedded dashboard UI has not been created yet.</p>
    <p>API: <a href="/api/v1/skills">/api/v1/skills</a></p>
    <p>Health: <a href="/healthz">/healthz</a></p>
  </body>
</html>`);
});

app.listen(PORT, HOST, () => {
  console.log(`Awesome Omni Skills web dashboard listening at http://${HOST}:${PORT}`);
});

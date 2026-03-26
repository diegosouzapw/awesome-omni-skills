function trimToken(value) {
  return String(value || "").trim();
}

function parseTokenList(value) {
  return String(value || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

export function getHttpRuntimeConfig() {
  const bearerToken = trimToken(process.env.OMNI_SKILLS_HTTP_BEARER_TOKEN);
  const apiKeys = parseTokenList(process.env.OMNI_SKILLS_HTTP_API_KEYS);
  const rateLimitWindowMs = Number.parseInt(process.env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS || "60000", 10);
  const rateLimitMax = Number.parseInt(process.env.OMNI_SKILLS_RATE_LIMIT_MAX || "120", 10);
  const auditLogEnabled = ["1", "true", "yes"].includes(
    String(process.env.OMNI_SKILLS_HTTP_AUDIT_LOG || "").toLowerCase(),
  );

  return {
    auth: {
      enabled: Boolean(bearerToken || apiKeys.length > 0),
      bearerToken: bearerToken || null,
      apiKeys,
    },
    rateLimit: {
      enabled: Number.isFinite(rateLimitMax) && rateLimitMax > 0,
      windowMs: Number.isFinite(rateLimitWindowMs) && rateLimitWindowMs > 0 ? rateLimitWindowMs : 60000,
      max: Number.isFinite(rateLimitMax) && rateLimitMax > 0 ? rateLimitMax : 120,
    },
    auditLogEnabled,
  };
}

function getClientIp(req) {
  const forwarded = String(req.headers["x-forwarded-for"] || "")
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean)[0];
  return forwarded || req.ip || req.socket?.remoteAddress || "unknown";
}

function getAuthPrincipal(req, config) {
  const authorization = String(req.headers.authorization || "");
  if (config.auth.bearerToken && authorization.startsWith("Bearer ")) {
    const providedToken = authorization.slice("Bearer ".length).trim();
    if (providedToken && providedToken === config.auth.bearerToken) {
      return { ok: true, type: "bearer", id: "bearer-token" };
    }
  }

  const apiKey = String(req.headers["x-api-key"] || "").trim();
  if (apiKey && config.auth.apiKeys.includes(apiKey)) {
    return { ok: true, type: "api-key", id: "api-key" };
  }

  return { ok: false, type: null, id: "anonymous" };
}

function setRateLimitHeaders(res, bucket, config) {
  const remaining = Math.max(0, config.rateLimit.max - bucket.count);
  const resetAtSeconds = Math.max(0, Math.ceil((bucket.resetAt - Date.now()) / 1000));
  res.setHeader("X-RateLimit-Limit", String(config.rateLimit.max));
  res.setHeader("X-RateLimit-Remaining", String(remaining));
  res.setHeader("X-RateLimit-Reset", String(resetAtSeconds));
}

export function createHttpRuntimeMiddleware(options = {}) {
  const config = getHttpRuntimeConfig();
  const allowAnonymousPaths = new Set(options.allowAnonymousPaths || ["/healthz"]);
  const buckets = new Map();

  return function httpRuntimeMiddleware(req, res, next) {
    const startedAt = Date.now();
    const path = req.path || req.url || "/";
    const ip = getClientIp(req);
    const authPrincipal = getAuthPrincipal(req, config);
    req.omniAuth = authPrincipal;

    if (!allowAnonymousPaths.has(path) && config.auth.enabled && !authPrincipal.ok) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    if (!allowAnonymousPaths.has(path) && config.rateLimit.enabled) {
      const bucketKey = authPrincipal.ok ? `${authPrincipal.type}:${authPrincipal.id}` : `ip:${ip}`;
      const now = Date.now();
      const current = buckets.get(bucketKey);
      const bucket =
        current && current.resetAt > now
          ? current
          : {
              count: 0,
              resetAt: now + config.rateLimit.windowMs,
            };

      bucket.count += 1;
      buckets.set(bucketKey, bucket);
      setRateLimitHeaders(res, bucket, config);

      if (bucket.count > config.rateLimit.max) {
        res.status(429).json({
          error: "Rate limit exceeded",
          retry_after_seconds: Math.max(1, Math.ceil((bucket.resetAt - now) / 1000)),
        });
        return;
      }
    }

    if (config.auditLogEnabled) {
      res.on("finish", () => {
        const durationMs = Date.now() - startedAt;
        console.log(
          `[omni-http] ${req.method} ${path} ${res.statusCode} auth=${authPrincipal.id} ip=${ip} ${durationMs}ms`,
        );
      });
    }

    next();
  };
}

export function getHttpRuntimeSnapshot() {
  const config = getHttpRuntimeConfig();
  return {
    auth: {
      enabled: config.auth.enabled,
      methods: [
        ...(config.auth.bearerToken ? ["bearer"] : []),
        ...(config.auth.apiKeys.length > 0 ? ["x-api-key"] : []),
      ],
    },
    rate_limit: {
      enabled: config.rateLimit.enabled,
      window_ms: config.rateLimit.windowMs,
      max: config.rateLimit.max,
    },
    audit_log_enabled: config.auditLogEnabled,
  };
}

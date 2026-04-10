import { describe, it, expect } from "vitest";
import { getFreePort, startCliServer, waitFor, waitForProcessHealth, formatLogs } from "./helpers/process.js";

describe("CLI E2E: Servers", () => {
  it("should start the API server and serve healthy requests", async () => {
    const port = await getFreePort();
    const { child, logs } = startCliServer(["api", "--port", String(port)]);

    try {
      const response = await waitForProcessHealth({
        url: `http://127.0.0.1:${port}/healthz`,
        processRef: child,
        logs,
        label: "API Server",
      });

      expect(response).toBeDefined();
      expect(response.status).toBe("ok");
    } finally {
      child.kill("SIGTERM");
    }
  });

  it("should start the A2A server and serve healthy requests", async () => {
    const port = await getFreePort();
    const { child, logs } = startCliServer(["a2a", "--port", String(port)]);

    try {
      const response = await waitForProcessHealth({
        url: `http://127.0.0.1:${port}/healthz`,
        processRef: child,
        logs,
        label: "A2A Server",
      });

      expect(response).toBeDefined();
      expect(response.status).toBe("ok");
    } finally {
      child.kill("SIGTERM");
    }
  });

  it("should start the MCP stream server and serve healthy requests", async () => {
    const port = await getFreePort();
    const { child, logs } = startCliServer(["mcp", "stream", "--port", String(port)]);

    try {
      const response = await waitForProcessHealth({
        url: `http://127.0.0.1:${port}/healthz`,
        processRef: child,
        logs,
        label: "MCP stream Server",
      });

      expect(response).toBeDefined();
      expect(response.status).toBe("ok");
      expect(response.transport).toBe("stream");
    } finally {
      child.kill("SIGTERM");
    }
  });

  it("should start the MCP SSE server and serve healthy requests", async () => {
    const port = await getFreePort();
    const { child, logs } = startCliServer(["mcp", "sse", "--port", String(port)]);

    try {
      const response = await waitForProcessHealth({
        url: `http://127.0.0.1:${port}/healthz`,
        processRef: child,
        logs,
        label: "MCP SSE Server",
      });

      expect(response).toBeDefined();
      expect(response.status).toBe("ok");
      expect(response.transport).toBe("sse");
    } finally {
      child.kill("SIGTERM");
    }
  });

  it("should start the MCP stdio server through the CLI", async () => {
    const { child, logs } = startCliServer(["mcp", "stdio"]);

    try {
      await waitFor(() => {
        const combined = `${logs.stdout.join("\n")}\n${logs.stderr.join("\n")}`;
        if (!combined.includes("running over stdio")) {
          throw new Error(`waiting for stdio readiness\n${formatLogs(logs)}`);
        }
        return combined;
      }, 10000, 200);

      expect(child.exitCode).toBeNull();
    } finally {
      child.kill("SIGTERM");
    }
  });

  it("should start the web dashboard and negotiate the root locale", async () => {
    const port = await getFreePort();
    const { child, logs } = startCliServer(["web", "--port", String(port)], { OMNI_SKILLS_LANG: "" });

    try {
      const response = await waitFor(async () => {
        if (child.exitCode !== null || child.signalCode !== null) {
          throw new Error(`Web Server exited before serving HTML.\n${formatLogs(logs)}`);
        }

        const result = await fetch(`http://127.0.0.1:${port}/?lang=pt-BR`);
        if (!result.ok) {
          throw new Error(`Waiting for localized web root. status=${result.status}\n${formatLogs(logs)}`);
        }
        return result;
      }, 20000, 200);

      const html = await response.text();
      expect(response.headers.get("content-language")).toBe("pt-BR");
      expect(response.headers.get("vary")).toContain("Accept-Language");
      expect(html).toContain('<html lang="pt-BR" dir="ltr">');
      expect(html).toContain('"locale":"pt-BR"');
      expect(html).toContain('"catalog":{"totalSkills":');

      const fallbackResponse = await fetch(`http://127.0.0.1:${port}/`);
      const fallbackHtml = await fallbackResponse.text();
      expect(fallbackResponse.headers.get("content-language")).toBe("en");
      expect(fallbackHtml).toContain('<html lang="en" dir="ltr">');

      const skillsResponse = await fetch(
        `http://127.0.0.1:${port}/api/v1/skills?limit=24&offset=24&sort=quality&order=desc`,
      );
      expect(skillsResponse.ok).toBe(true);

      const skillsPayload = await skillsResponse.json();
      expect(skillsPayload.offset).toBe(24);
      expect(skillsPayload.limit).toBe(24);
      expect(skillsPayload.total).toBeGreaterThan(24);
      expect(Array.isArray(skillsPayload.results)).toBe(true);
      expect(skillsPayload.results).toHaveLength(24);
    } finally {
      child.kill("SIGTERM");
    }
  });
});

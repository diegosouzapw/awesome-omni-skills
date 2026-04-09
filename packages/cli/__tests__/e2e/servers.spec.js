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
});

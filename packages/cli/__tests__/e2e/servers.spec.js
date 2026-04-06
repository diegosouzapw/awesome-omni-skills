import { describe, it, expect } from "vitest";
import { getFreePort, startCliServer, waitForProcessHealth } from "./helpers/process.js";

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
    } finally {
      child.kill("SIGTERM");
    }
  });
});

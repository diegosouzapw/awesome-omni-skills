import { afterEach, describe, expect, test } from "vitest";
import { createA2AApp } from "../src/server.js";

let server;

function stubRuntime() {
  return {
    getHealthSnapshot: () => ({ status: "ok" }),
    getAgentCard: () => ({ name: "test-agent" }),
  };
}

async function startApp() {
  const app = createA2AApp({ runtime: stubRuntime() });
  await new Promise((resolve) => {
    server = app.listen(0, "127.0.0.1", resolve);
  });
  const { port } = server.address();
  return `http://127.0.0.1:${port}`;
}

afterEach(async () => {
  delete process.env.OMNI_SKILLS_RATE_LIMIT_MAX;
  delete process.env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS;
  if (server) {
    await new Promise((resolve) => server.close(resolve));
    server = null;
  }
});

describe("A2A HTTP governance", () => {
  test("rate limits repeated /a2a requests and applies security headers", async () => {
    process.env.OMNI_SKILLS_RATE_LIMIT_MAX = "2";
    process.env.OMNI_SKILLS_RATE_LIMIT_WINDOW_MS = "60000";
    const baseUrl = await startApp();

    const call = () =>
      fetch(`${baseUrl}/a2a`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({}),
      });

    const first = await call();
    const second = await call();
    const third = await call();

    expect(first.status).not.toBe(429);
    expect(second.status).not.toBe(429);
    expect(third.status).toBe(429);
    expect(third.headers.get("x-content-type-options")).toBe("nosniff");
  });

  test("exempts /healthz from rate limiting", async () => {
    process.env.OMNI_SKILLS_RATE_LIMIT_MAX = "1";
    const baseUrl = await startApp();

    const first = await fetch(`${baseUrl}/healthz`);
    const second = await fetch(`${baseUrl}/healthz`);
    const third = await fetch(`${baseUrl}/healthz`);

    expect(first.status).toBe(200);
    expect(second.status).toBe(200);
    expect(third.status).toBe(200);
  });
});

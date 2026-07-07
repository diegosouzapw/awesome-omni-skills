import { describe, expect, test } from "vitest";
import { createCatalogMcpServer } from "../src/server.js";

// Mirrors the access pattern from server-tool-schemas.spec.js: read the live
// `_registeredTools[name]` entry the MCP SDK built from `registerTool(...)`, instead of
// re-implementing the tool logic in the test. `.handler` is the callback passed to
// `registerTool`, invoked by the SDK with the validated input object as its first argument
// (see `executeToolHandler` in @modelcontextprotocol/sdk's server/mcp.js).
function handlerFor(server, toolName) {
  const tool = server._registeredTools[toolName];
  expect(tool, `tool '${toolName}' should be registered`).toBeTruthy();
  return tool.handler;
}

async function callSearch(server, args) {
  const handler = handlerFor(server, "search_skills");
  const response = await handler(args);
  const text = response.content?.[0]?.text;
  expect(typeof text).toBe("string");
  return JSON.parse(text);
}

describe("search_skills returns auditable results", () => {
  test("a matching query returns results each carrying a numeric score and a non-empty snippet", async () => {
    const server = createCatalogMcpServer();
    const payload = await callSearch(server, { query: "kubernetes", limit: 3 });

    expect(Array.isArray(payload.results)).toBe(true);
    expect(payload.results.length).toBeGreaterThan(0);
    expect(payload.no_match).toBeFalsy();

    for (const result of payload.results) {
      expect(typeof result.score).toBe("number");
      expect(Number.isFinite(result.score)).toBe(true);
      expect(typeof result.snippet).toBe("string");
      expect(result.snippet.length).toBeGreaterThan(0);
    }
  });

  test("a non-matching query returns an explicit no_match signal instead of a silent empty list", async () => {
    const server = createCatalogMcpServer();
    const payload = await callSearch(server, { query: "zzzznomatchhere", limit: 3 });

    expect(payload.no_match).toBe(true);
    expect(Array.isArray(payload.results)).toBe(true);
    expect(payload.results.length).toBe(0);
    expect(typeof payload.message).toBe("string");
    expect(payload.message.length).toBeGreaterThan(0);
  });
});

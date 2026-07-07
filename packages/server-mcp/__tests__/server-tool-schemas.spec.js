import { afterEach, describe, expect, test } from "vitest";
import { createCatalogMcpServer } from "../src/server.js";

// Reading `server._registeredTools[name].inputSchema` (instead of duplicating the zod
// definitions in this file) exercises the exact schema object the MCP SDK builds from each
// tool's `inputSchema` shape and uses to validate real tool calls (see
// `_createRegisteredTool` / `setToolRequestHandlers` in
// @modelcontextprotocol/sdk's server/mcp.js). This is the tool's real, live validation
// surface — a hand-copied schema here could silently drift from what production enforces.
function schemaFor(server, toolName) {
  const tool = server._registeredTools[toolName];
  expect(tool, `tool '${toolName}' should be registered`).toBeTruthy();
  return tool.inputSchema;
}

describe("MCP tool schemas enforce their documented caps", () => {
  test("search_skills.limit rejects values above the documented max of 50", () => {
    const schema = schemaFor(createCatalogMcpServer(), "search_skills");
    expect(schema.safeParse({ limit: 50 }).success).toBe(true);
    expect(schema.safeParse({ limit: 51 }).success).toBe(false);
    expect(schema.safeParse({}).success).toBe(true); // limit is optional
  });

  test("compare_skills.ids enforces min 1 / max 5", () => {
    const schema = schemaFor(createCatalogMcpServer(), "compare_skills");
    expect(schema.safeParse({ ids: ["a"] }).success).toBe(true);
    expect(schema.safeParse({ ids: ["a", "b", "c", "d", "e"] }).success).toBe(true);
    expect(schema.safeParse({ ids: [] }).success).toBe(false);
    expect(schema.safeParse({ ids: ["a", "b", "c", "d", "e", "f"] }).success).toBe(false);
  });

  test("recommend_skills.limit rejects values above the documented max of 10", () => {
    const schema = schemaFor(createCatalogMcpServer(), "recommend_skills");
    expect(schema.safeParse({ goal: "ship a feature" }).success).toBe(true); // limit is optional
    expect(schema.safeParse({ goal: "ship a feature", limit: 10 }).success).toBe(true);
    expect(schema.safeParse({ goal: "ship a feature", limit: 11 }).success).toBe(false);
  });
});

describe("local (filesystem-mutating) tools are gated behind local mode", () => {
  afterEach(() => {
    delete process.env.OMNI_SKILLS_MCP_MODE;
    delete process.env.OMNI_SKILLS_MCP_LOCAL_MODE;
  });

  test("install_skills/remove_skills/configure_client_mcp are absent by default (read-only mode)", () => {
    delete process.env.OMNI_SKILLS_MCP_MODE;
    delete process.env.OMNI_SKILLS_MCP_LOCAL_MODE;

    const server = createCatalogMcpServer();

    expect(server._registeredTools.install_skills).toBeUndefined();
    expect(server._registeredTools.remove_skills).toBeUndefined();
    expect(server._registeredTools.configure_client_mcp).toBeUndefined();
  });

  test("install_skills/remove_skills/configure_client_mcp are registered when local mode is enabled, with dry_run kept optional", () => {
    process.env.OMNI_SKILLS_MCP_MODE = "local";

    const server = createCatalogMcpServer();

    expect(server._registeredTools.install_skills).toBeTruthy();
    expect(server._registeredTools.remove_skills).toBeTruthy();
    expect(server._registeredTools.configure_client_mcp).toBeTruthy();
    // dry_run is optional at the schema level; the safe default (dry-run) is applied by
    // local-sidecar.js itself (input.dry_run !== undefined ? Boolean(input.dry_run) : true),
    // covered end to end in local-sidecar-dry-run-defaults.spec.js.
    expect(server._registeredTools.install_skills.inputSchema.safeParse({}).success).toBe(true);
  });
});

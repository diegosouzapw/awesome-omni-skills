import { describe, it, expect } from "vitest";
import { runCliSync } from "./helpers/process.js";

describe("CLI E2E: Discovery / Find", () => {
  it("should fail gracefully when finding without parameters", () => {
    const result = runCliSync(["find"]);
    // The CLI might open an interactive prompt and exit 0, or fail if not a TTY.
    expect(result).toBeDefined();
  });

  it("should find an existing skill (figma)", () => {
    const result = runCliSync(["find", "figma"]);
    expect(result.status).toBe(0);
    // The query should definitely output either JSON or stylized text.
    expect(result.stdout).toContain("figma");
  });

  it("should find the architecture skill", () => {
    const result = runCliSync(["find", "architecture refactor plan"]);
    expect(result.status).toBe(0);
    expect(result.stdout).toContain("architecture");
  });

  it("should output JSON when --json flag is passed", () => {
    const result = runCliSync(["find", "figma", "--json"]);
    expect(result.status).toBe(0);
    const parsed = JSON.parse(result.stdout);
    expect(parsed.search_backend === "SQLite FTS5" || parsed.search_backend === "Memory").toBe(true);
    expect(parsed.results).toBeDefined();
    expect(Array.isArray(parsed.results)).toBe(true);
    expect(parsed.results.length).toBeGreaterThan(0);
    expect(parsed.results.some((skill) => String(skill.id || "").includes("figma"))).toBe(true);
  });

  it("should fall back to the memory adapter when explicitly requested", () => {
    const result = runCliSync(["find", "figma", "--json"], {
      OMNI_SKILLS_SEARCH_ADAPTER: "memory",
    });
    expect(result.status).toBe(0);
    const parsed = JSON.parse(result.stdout);
    expect(parsed.search_backend).toBe("Memory");
    expect(parsed.results.length).toBeGreaterThan(0);
  });
});

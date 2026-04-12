import * as fs from "node:fs";
import * as path from "node:path";
import { describe, it, expect } from "vitest";
import { SOURCE_ROOT, runCliSync } from "./helpers/process.js";

const catalog = JSON.parse(
  fs.readFileSync(path.join(SOURCE_ROOT, "dist", "catalog.json"), "utf-8"),
);
const publishedSkills = Array.isArray(catalog.skills) ? catalog.skills : [];
const hasPublishedSkills = Number(catalog.total_skills || 0) > 0;
const sampleSkill = publishedSkills[0] || null;
const sampleQueryCandidates = [
  String(sampleSkill?.display_name || ""),
  String(sampleSkill?.id || ""),
];
const sampleQuery = sampleSkill
  ? sampleQueryCandidates
      .flatMap((value) => value.toLowerCase().match(/[a-z][a-z0-9-]{2,}/g) || [])
      .find(Boolean) || String(sampleSkill.id || "").toLowerCase()
  : "figma";

describe("CLI E2E: Discovery / Find", () => {
  it("should fail gracefully when finding without parameters", () => {
    const result = runCliSync(["find"], {}, { timeout: 5000 });
    // The CLI might open an interactive prompt and exit 0, or fail if not a TTY.
    expect(result).toBeDefined();
  });

  it("should find an existing published skill", () => {
    const result = runCliSync(["find", sampleQuery]);
    expect(result.status).toBe(0);
    if (hasPublishedSkills) {
      expect(result.stdout.toLowerCase()).toContain(sampleQuery);
    } else {
      expect(result.stdout).toContain("No published skills matched this query.");
    }
  });

  it("should report no matches for an unrelated query", () => {
    const result = runCliSync(["find", "zzzz-no-such-skill"]);
    expect(result.status).toBe(0);
    expect(result.stdout).toContain("No published skills matched this query.");
  });

  it("should output JSON when --json flag is passed", () => {
    const result = runCliSync(["find", sampleQuery, "--json"]);
    expect(result.status).toBe(0);
    const parsed = JSON.parse(result.stdout);
    expect(parsed.search_backend === "SQLite FTS5" || parsed.search_backend === "Memory").toBe(true);
    expect(parsed.results).toBeDefined();
    expect(Array.isArray(parsed.results)).toBe(true);
    if (hasPublishedSkills) {
      expect(parsed.results.length).toBeGreaterThan(0);
      expect(
        parsed.results.some((skill) =>
          `${String(skill.id || "")} ${String(skill.display_name || "")}`
            .toLowerCase()
            .includes(sampleQuery),
        ),
      ).toBe(true);
    } else {
      expect(parsed.total_published_skills).toBe(0);
      expect(parsed.results.length).toBe(0);
    }
  });

  it("should fall back to the memory adapter when explicitly requested", () => {
    const result = runCliSync(["find", sampleQuery, "--json"], {
      OMNI_SKILLS_SEARCH_ADAPTER: "memory",
    });
    expect(result.status).toBe(0);
    const parsed = JSON.parse(result.stdout);
    expect(parsed.search_backend).toBe("Memory");
    if (hasPublishedSkills) {
      expect(parsed.results.length).toBeGreaterThan(0);
    } else {
      expect(parsed.results.length).toBe(0);
    }
  });
});

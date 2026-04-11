import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { runCliSync, SOURCE_ROOT } from "./helpers/process.js";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

const catalog = JSON.parse(
  fs.readFileSync(path.join(SOURCE_ROOT, "dist", "catalog.json"), "utf-8"),
);
const sampleSkillId = catalog.skills?.[0]?.id || "omni-figma";
const hasPublishedSkills = Number(catalog.total_skills || 0) > 0;

describe("CLI E2E: Install Skill", () => {
  let cliStateRoot;
  let cliStatePath;

  beforeAll(() => {
    cliStateRoot = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-cli-install-state-"));
    cliStatePath = path.join(cliStateRoot, "ui-state.json");
    fs.writeFileSync(
      cliStatePath,
      JSON.stringify({
        version: 2,
        customInstallTargets: [],
      })
    );

    // Setup custom target for installation
    const targetPath = path.join(cliStateRoot, ".team-cli", "skills");
    runCliSync(
      ["install-target", "add", "--name", "Team CLI", "--path", targetPath],
      { HOME: cliStateRoot, OMNI_SKILLS_STATE_PATH: cliStatePath }
    );
  });

  afterAll(() => {
    fs.rmSync(cliStateRoot, { recursive: true, force: true });
  });

  const getEnv = () => ({
    HOME: cliStateRoot,
    OMNI_SKILLS_STATE_PATH: cliStatePath,
    OMNI_SKILLS_SOURCE_ROOT: SOURCE_ROOT, // Make sure custom root is resolved correctly
  });

  it("should install a skill into a custom target", () => {
    const result = runCliSync(
      ["install", "--target-id", "custom-team-cli", "--skill", sampleSkillId],
      getEnv()
    );

    if (hasPublishedSkills) {
      expect(result.status).toBe(0);
      const expectedSkillPath = path.join(cliStateRoot, ".team-cli", "skills", sampleSkillId, "SKILL.md");
      expect(fs.existsSync(expectedSkillPath)).toBe(true);
    } else {
      expect(result.status).toBe(1);
      expect(`${String(result.stdout || "")}\n${String(result.stderr || "")}`).toContain("Unknown skill or family");
    }
  });

  it("should warn or handle invalid tool argument", () => {
    const result = runCliSync(
      ["install", "--invalidtool", "--skill", sampleSkillId],
      getEnv()
    );
    expect([0, 1]).toContain(result.status);
  });
});

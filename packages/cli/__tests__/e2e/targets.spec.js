import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { runCliSync } from "./helpers/process.js";
import * as fs from "node:fs";
import * as os from "node:os";
import * as path from "node:path";

describe("CLI E2E: Install Targets", () => {
  let cliStateRoot;
  let cliStatePath;

  beforeAll(() => {
    cliStateRoot = fs.mkdtempSync(path.join(os.tmpdir(), "omni-skills-cli-test-state-"));
    cliStatePath = path.join(cliStateRoot, "ui-state.json");
    fs.writeFileSync(
      cliStatePath,
      JSON.stringify({
        version: 2,
        customInstallTargets: [],
      })
    );
  });

  afterAll(() => {
    fs.rmSync(cliStateRoot, { recursive: true, force: true });
  });

  const getEnv = () => ({
    HOME: cliStateRoot,
    OMNI_SKILLS_STATE_PATH: cliStatePath,
  });

  it("should list default targets", () => {
    const result = runCliSync(["install-target", "list", "--json"], getEnv());
    expect(result.status).toBe(0);
    const parsed = JSON.parse(result.stdout);
    expect(parsed.builtin_count).toBeGreaterThan(0);
    expect(parsed.targets.some((t) => t.id === "goose")).toBe(true);
    expect(parsed.targets.some((t) => t.id === "qwen-code")).toBe(true);
  });

  it("should add a custom target", () => {
    const targetPath = path.join(cliStateRoot, ".team-cli", "skills");
    const result = runCliSync(
      ["install-target", "add", "--name", "Team CLI", "--path", targetPath],
      getEnv()
    );
    expect(result.status).toBe(0);

    const listResult = runCliSync(["install-target", "list", "--json"], getEnv());
    const parsed = JSON.parse(listResult.stdout);
    expect(parsed.custom_count).toBe(1);
    expect(parsed.targets.some((t) => t.id === "custom-team-cli")).toBe(true);
  });

  it("should remove a custom target", () => {
    const result = runCliSync(["install-target", "remove", "--id", "custom-team-cli"], getEnv());
    expect(result.status).toBe(0);

    const listResult = runCliSync(["install-target", "list", "--json"], getEnv());
    const parsed = JSON.parse(listResult.stdout);
    expect(parsed.custom_count).toBe(0);
    expect(parsed.targets.some((t) => t.id === "custom-team-cli")).toBe(false);
  });
});

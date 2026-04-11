#!/usr/bin/env node

import path from "node:path";
import React from "react";
import { render } from "ink";
import { createRequire } from "node:module";
import { OmniSkillsUi, loadRuntime } from "../../../packages/cli/src/bin/ui.mjs";

const h = React.createElement;
const require = createRequire(import.meta.url);

const {
  DEFAULT_STATE_PATH,
  loadCliState,
  saveCliState,
} = require("../../../packages/cli/src/lib/cli-state.js");

function trimRuntimeForPty(runtime) {
  const families = Array.isArray(runtime.catalog?.families)
    ? runtime.catalog.families.slice(0, 8)
    : [];
  const familySkillIds = new Set();

  for (const family of families) {
    if (family?.default_skill_id) {
      familySkillIds.add(family.default_skill_id);
    }
    for (const variant of family?.variants || []) {
      if (variant?.id) {
        familySkillIds.add(variant.id);
      }
    }
  }

  const allSkills = Array.isArray(runtime.catalog?.skills) ? runtime.catalog.skills : [];
  const skills = allSkills.filter((skill) => familySkillIds.has(skill.id));
  const bundles = Array.isArray(runtime.bundles) ? runtime.bundles.slice(0, 4) : [];

  return {
    ...runtime,
    catalog: {
      ...runtime.catalog,
      skills,
      families,
      total_skills: skills.length,
      total_families: families.length,
    },
    bundles,
  };
}

async function main() {
  const statePath = process.env.OMNI_SKILLS_TUI_TEST_STATE_PATH || DEFAULT_STATE_PATH;
  const runtime = trimRuntimeForPty(await loadRuntime());
  let persistedState = loadCliState(statePath);
  let handoff = null;

  const instance = render(
    h(OmniSkillsUi, {
      catalog: runtime.catalog,
      bundles: runtime.bundles,
      core: runtime.core,
      sidecar: runtime.sidecar,
      initialState: persistedState,
      persistState: (nextState) => {
        persistedState = saveCliState(nextState, statePath);
        return persistedState;
      },
      onHandoff: (action) => {
        handoff = action;
      },
      statePath,
    }),
    {
      exitOnCtrlC: true,
    },
  );

  await instance.waitUntilExit();

  if (handoff) {
    process.stdout.write(`\nTUI_HANDOFF:${JSON.stringify(handoff)}\n`);
  }
}

main().catch((error) => {
  const relativeTarget = path.relative(process.cwd(), statePathForError()) || DEFAULT_STATE_PATH;
  console.error(`PTY TUI error (${relativeTarget}): ${error.message}`);
  process.exit(1);
});

function statePathForError() {
  return process.env.OMNI_SKILLS_TUI_TEST_STATE_PATH || DEFAULT_STATE_PATH;
}

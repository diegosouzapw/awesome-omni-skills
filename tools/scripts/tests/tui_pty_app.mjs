#!/usr/bin/env node

import path from "node:path";
import React from "react";
import { render } from "ink";
import { createRequire } from "node:module";
import { OmniSkillsUi, loadRuntime } from "../../bin/ui.mjs";

const h = React.createElement;
const require = createRequire(import.meta.url);

const {
  DEFAULT_STATE_PATH,
  loadCliState,
  saveCliState,
} = require("../../lib/cli-state.js");

async function main() {
  const statePath = process.env.OMNI_SKILLS_TUI_TEST_STATE_PATH || DEFAULT_STATE_PATH;
  const runtime = await loadRuntime();
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

import fs from "node:fs";

export const defaultFsAdapter = {
  existsSync(filePath) {
    // codeql[js/path-injection] Justification: FileSystemAdapter is an internal adapter, path validation happens upstream.
    return fs.existsSync(filePath);
  },
  readJsonSync(jsonPath) {
    // codeql[js/path-injection] Justification: FileSystemAdapter is an internal adapter, path validation happens upstream.
    return JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  }
};

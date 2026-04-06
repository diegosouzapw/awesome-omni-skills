import fs from "node:fs";

export const defaultFsAdapter = {
  existsSync(filePath) {
    return fs.existsSync(filePath);
  },
  readJsonSync(jsonPath) {
    return JSON.parse(fs.readFileSync(jsonPath, "utf-8"));
  }
};

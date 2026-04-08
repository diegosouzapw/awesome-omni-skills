export function isSafeArchiveFormat(format) {
  return /^[a-zA-Z0-9][a-zA-Z0-9._-]*$/.test(String(format || ""));
}

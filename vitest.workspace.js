import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  'packages/catalog-core',
  'packages/server-api',
  'packages/server-mcp',
  'packages/server-a2a'
]);

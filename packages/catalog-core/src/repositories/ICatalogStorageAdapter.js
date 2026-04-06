/**
 * @interface ICatalogStorageAdapter
 * Interface standardizing file reading abstractions to enable dependency injection
 * within the catalog-core processing engine, ensuring isolated testability and 
 * future distributed cache (Redis/S3) expandibility.
 */
export const ICatalogStorageAdapter = {
  /**
   * Synchronously checks if a file exists.
   * @param {string} filePath - Absolute path to check.
   * @returns {boolean} Whether the file exists.
   */
  existsSync: (filePath) => false,

  /**
   * Synchronously reads and parses a JSON file into a JS Object.
   * @param {string} jsonPath - Absolute path to JSON file.
   * @returns {object} Parsed JSON content.
   */
  readJsonSync: (jsonPath) => ({}),
};

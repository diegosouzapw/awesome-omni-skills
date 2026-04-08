/**
 * @typedef {object} SearchResult
 * @property {number} total
 * @property {number} offset
 * @property {number} limit
 * @property {string} sort
 * @property {string} order
 * @property {object} filters
 * @property {object[]} results
 */

/**
 * @typedef {object} SearchAdapterContract
 * @property {string} mode
 * @property {(options?: object) => void} init
 * @property {(options?: object) => SearchResult} list
 * @property {(options?: object) => SearchResult} search
 * @property {(options?: object) => { goal: string, tool: string | null, category: string | null, results: object[] }} recommend
 * @property {(skillId: string) => object | null} getById
 * @property {() => void} close
 */

export class SearchAdapter {
  constructor() {
    this.mode = "unknown";
  }

  init(_options = {}) {
    throw new Error("SearchAdapter.init() must be implemented by subclasses.");
  }

  list(_options = {}) {
    throw new Error("SearchAdapter.list() must be implemented by subclasses.");
  }

  search(options = {}) {
    return this.list(options);
  }

  recommend(_options = {}) {
    throw new Error("SearchAdapter.recommend() must be implemented by subclasses.");
  }

  getById(_skillId) {
    throw new Error("SearchAdapter.getById() must be implemented by subclasses.");
  }

  close() {}
}


import { SearchAdapter } from "./SearchAdapter.js";
import {
  buildSearchResponse,
  ensureNumber,
  parseSearchOptions,
  scoreSkill,
  scoreTextMatch,
  skillMatchesFilters,
  sortSkills,
  tokenize,
} from "./search-utils.js";

export class MemorySearchAdapter extends SearchAdapter {
  constructor(context = {}) {
    super();
    this.mode = "memory";
    this.context = context;
    this.catalog = context.catalog || null;
    this.manifestLoader = context.manifestLoader || null;
  }

  init(options = {}) {
    this.context = { ...this.context, ...options };
    this.catalog = this.context.catalog || this.catalog;
    this.manifestLoader = this.context.manifestLoader || this.manifestLoader;

    if (!this.catalog) {
      throw new Error("MemorySearchAdapter requires a preloaded catalog in the current runtime.");
    }
  }

  ensureCatalog() {
    if (!this.catalog) {
      throw new Error("MemorySearchAdapter has not been initialized.");
    }
    return this.catalog;
  }

  list(options = {}) {
    const catalog = this.ensureCatalog();
    const parsed = parseSearchOptions(options);
    let skills = [...catalog.skills].filter((skill) => skillMatchesFilters(skill, parsed.filters));

    if (parsed.queryTokens.length > 0) {
      skills = skills
        .map((skill) => {
          const textScore = scoreTextMatch(skill, parsed.queryTokens, []);
          return {
            ...skill,
            _textScore: textScore,
            _score: scoreSkill(
              skill,
              parsed.queryTokens,
              [],
              parsed.filters.tool || "",
              parsed.filters.category || "",
            ),
          };
        })
        .filter((skill) => skill._textScore > 0)
        .sort((left, right) => right._score - left._score || left.id.localeCompare(right.id));

      if (parsed.sort && parsed.sort !== "relevance") {
        skills = sortSkills(skills, parsed.sort, parsed.order);
      }

      skills = skills.map(({ _score, _textScore, ...skill }) => skill);
    } else if (parsed.sort) {
      skills = sortSkills(skills, parsed.sort, parsed.order);
    }

    return buildSearchResponse(skills, parsed);
  }

  search(options = {}) {
    return this.list(options);
  }

  recommend(options = {}) {
    const catalog = this.ensureCatalog();
    const goalTokens = tokenize(options.goal || "");
    const queryTokens = tokenize(options.q || options.query || "");
    const limit = ensureNumber(options.limit, 5);

    const results = catalog.skills
      .map((skill) => ({
        id: skill.id,
        display_name: skill.display_name,
        description: skill.description,
        category: skill.category,
        raw_category: skill.raw_category,
        canonical_category: skill.canonical_category,
        tags: skill.tags || [],
        tools: skill.tools || [],
        manifest_path: skill.manifest_path,
        skill_level: skill.skill_level,
        skill_level_label: skill.skill_level_label,
        best_practices_score: skill.best_practices_score,
        quality_score: skill.quality_score,
        security_score: skill.security_score,
        security_status: skill.security_status,
        score: scoreSkill(
          skill,
          queryTokens.length > 0 ? queryTokens : goalTokens,
          goalTokens,
          options.tool || "",
          options.category || "",
        ),
      }))
      .filter((skill) => {
        if (options.tool && !(skill.tools || []).includes(options.tool)) {
          return false;
        }

        if (
          options.category &&
          skill.category !== options.category &&
          skill.raw_category !== options.category &&
          skill.canonical_category !== options.category
        ) {
          return false;
        }

        return true;
      })
      .sort((left, right) => right.score - left.score || left.id.localeCompare(right.id))
      .slice(0, limit);

    return {
      goal: options.goal || "",
      tool: options.tool || null,
      category: options.category || null,
      results,
    };
  }

  getById(skillId) {
    if (typeof this.manifestLoader !== "function") {
      return null;
    }
    return this.manifestLoader(skillId);
  }

  close() {}
}


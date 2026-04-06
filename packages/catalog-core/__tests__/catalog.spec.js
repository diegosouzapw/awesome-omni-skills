import { describe, test, expect } from 'vitest';
import { searchSkills } from '../src/index.js';

describe('Catalog-Core Engine Rules (Decoupled Filesystem)', () => {

  const mockAdapter = {
    existsSync: (path) => {
      return path.includes('mock-skill') || path.includes('catalog.json') || path.includes('bundles.json');
    },
    readJsonSync: (path) => {
      if (path.includes('catalog.json')) {
        return {
          skills: [
            { id: "mock-skill-a", description: "Good skill", quality_score: 90, category: "testing", canonical_category: "testing", tools: ["cursor"] },
            { id: "mock-skill-b", description: "Average skill", quality_score: 50, category: "testing", canonical_category: "testing", tools: ["cursor"] }
          ]
        };
      }
      return null;
    }
  };

  test('searchSkills should order strictly by quality descending parameter when specified', () => {
    const results = searchSkills({
      storageAdapter: mockAdapter,
      sort: 'quality',
      order: 'desc'
    });

    expect(results.total).toBe(2);
    expect(results.results[0].id).toBe("mock-skill-a");
    expect(results.results[1].id).toBe("mock-skill-b");
    expect(results.results[0].quality_score).toBeGreaterThan(results.results[1].quality_score);
  });

  test('searchSkills should filter by minimum quality when specified', () => {
    const results = searchSkills({
      storageAdapter: mockAdapter,
      min_quality: 80
    });

    expect(results.total).toBe(1);
    expect(results.results[0].id).toBe("mock-skill-a");
    expect(results.results[0].quality_score).toBe(90);
  });

  describe('Lexical Deterministic scoreSkill Search Algorithms', () => {
    const mockSearchAdapter = {
      existsSync: () => true,
      readJsonSync: (path) => {
        if (path.includes('catalog.json')) {
          return {
            skills: [
              { id: "docker-manager", description: "Useful", tags: ["docker", "container"], category: "devops" },
              { id: "random-test", description: "Mentions dockerize within description", tags: ["random"], category: "frontend" },
              { id: "docker", slug: "docker", description: "The official", tags: ["vms"], category: "devops" }
            ]
          };
        }
        return null; // missing
      }
    };

    test('searchSkills prioritizes exact ID match (+10 points)', () => {
      const results = searchSkills({ storageAdapter: mockSearchAdapter, q: "docker" });
      
      expect(results.total).toBeGreaterThan(0);
      // "docker" should be at index 0 because it matches the ID EXACTLY scoring higher than "docker-manager"
      expect(results.results[0].id).toBe("docker");
    });

    test('searchSkills correctly sorts subsequent text/tag inclusions (+8 or +3 points)', () => {
      const results = searchSkills({ storageAdapter: mockSearchAdapter, q: "dockerize" });
      
      // "random-test" contains "dockerize" in description
      expect(results.total).toBe(1);
      expect(results.results[0].id).toBe("random-test");
    });
  });
});

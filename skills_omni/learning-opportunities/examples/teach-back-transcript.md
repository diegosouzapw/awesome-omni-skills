# Teach-Back Transcript

## Scenario

A caching layer was introduced.

## Transcript

**Agent:** Can you explain how this caching layer works as if you're onboarding a new teammate?

**User:** The service checks Redis first, and if there's no value it computes the result and stores it.

**Agent:** Yes. One refinement: the cache key is normalized in `src/cache/profile_cache.ts`, so two equivalent requests map to the same entry. That normalization step is easy to miss, but it explains why cache hit rates improved after the refactor.

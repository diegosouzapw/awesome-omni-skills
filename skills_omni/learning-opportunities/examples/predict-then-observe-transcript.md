# Predict Then Observe Transcript

## Scenario

A new auth middleware was added.

## Transcript

**Agent:** Want a 30-second learning exercise on the new auth middleware, a 2-minute one, or should I skip it?

**User:** 30-second is good.

**Agent:** What do you think happens in `src/middleware/auth.ts` when the token is expired?

**User:** I think it refreshes the token automatically.

**Agent:** Not quite. In this codepath it rejects the request and returns early; token refresh happens in a different flow. You can see that in `src/middleware/auth.ts` where the expired-token branch exits before the refresh service is called.

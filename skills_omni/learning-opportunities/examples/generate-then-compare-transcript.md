# Generate Then Compare Transcript

## Scenario

The agent refactored endpoint error handling.

## Transcript

**Agent:** Before I explain the refactor, how would you separate validation from error handling in this endpoint?

**User:** I'd validate in the controller and keep error formatting there too.

**Agent:** That's a reasonable starting point. What we changed is slightly different: the controller now owns HTTP translation, but validation and domain failure mapping moved into `src/orders/service.ts`. That keeps transport concerns separate from workflow rules.

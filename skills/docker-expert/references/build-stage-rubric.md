# Build Stage Rubric

| Check | Pass condition | Notes |
| :---- | :------------- | :---- |
| Dependency caching | Low-churn files land before source copy | |
| Stage separation | Build-only tools do not leak into runtime | |
| Context hygiene | Unneeded files are excluded from build context | |
| Runtime size | Final image contains only what the process needs | |
| Debug path | Reviewer knows how to inspect failed startup quickly | |

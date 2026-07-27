# Worked Examples

Fetch the current input schema before using these examples.
Replace placeholders with user-approved public targets.

## Multi-Query Tweet Research

```json
{
  "mode": "search",
  "searchTerms": [
    "\"AI agents\" since:2026-07-01 until:2026-07-08",
    "\"web automation\" since:2026-07-01 until:2026-07-08"
  ],
  "maxItems": 100,
  "outputVariant": "rich",
  "fieldStyle": "camelCase",
  "outputPreset": "nested",
  "includeSearchTerms": true,
  "queryType": "Latest + Top"
}
```

`maxItems` covers both search terms together.
Run each term separately when each needs 100 results.

## Profile Timeline

```json
{
  "mode": "profileTweets",
  "twitterHandles": ["public_account"],
  "maxItems": 50,
  "outputVariant": "rich",
  "fieldStyle": "camelCase",
  "outputPreset": "nested"
}
```

Use `profileReplies`, `profileMedia`, or `profileLikes` for another profile tab.

## Audience Overlap

```json
{
  "twitterHandles": ["public_brand_a", "public_brand_b"],
  "relation": "followers",
  "maxItems": 200,
  "maxItemsPerTarget": 100,
  "outputMode": "compact",
  "includeTargetMetadata": true,
  "overlapMode": true
}
```

Merge mode returns one profile row with source arrays and `overlapCount`.
Use `dedupeMode: "none"` when each target needs a separate row.

## List Members

```json
{
  "listIds": ["1234567890123456789"],
  "relation": "list_members",
  "maxItems": 100,
  "outputMode": "compact",
  "includeTargetMetadata": true,
  "dedupeMode": "none"
}
```

Use `list_followers` for list subscribers.
Use `communityIds` with `community_members` for public communities.

## Acceptance Checks

Before execution:

- [ ] Each field exists in the live input schema.
- [ ] Each target is public and user-approved.
- [ ] `maxItems` is explicit.
- [ ] Multi-target work has a fairness decision.
- [ ] Current pricing was reviewed.
- [ ] The external run was approved.

After execution:

- [ ] Data rows and diagnostics are separated.
- [ ] Source targets and relations are preserved.
- [ ] Dedupe behavior is recorded.
- [ ] Missing targets are explained.
- [ ] Observations and interpretations are separated.

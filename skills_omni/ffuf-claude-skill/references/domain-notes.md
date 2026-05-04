# ffuf Domain Notes

Use this reference when you need deeper operator guidance than the main skill should inline.

## 1) Baseline Calibration Checklist

Before trusting any ffuf result, capture a baseline for the same target surface.

Check these signals:
- **Status code**: useful, but often not enough on its own
- **Content length / size**: often the fastest suppressor for wildcard responses
- **Word count**: helpful when dynamic tokens change the byte length slightly
- **Line count**: useful for templated error pages
- **Redirect behavior**: location target and redirect loops can reveal soft misses
- **Body pattern**: login page, custom 404, default vhost, WAF banner, or generic app shell

Good operator pattern:
1. Make one normal request with `curl -i`.
2. Make one intentionally invalid request.
3. Compare the two before selecting ffuf matchers or filters.

## 2) Matcher / Filter Decision Aid

Prefer explicit logic over defaults you did not inspect.

| Situation | Prefer | Why |
|---|---|---|
| You do not yet know what valid responses look like | `-mc all` plus a known filter | Preserves visibility while you suppress obvious baseline noise |
| Wildcard page has stable size | `-fs <size>` | Fast and usually reliable |
| Dynamic page changes length slightly | `-fw <words>` or `-fl <lines>` | More stable than size alone |
| Only a few status codes are meaningful | `-mc 200,204,301,302,307,401,403` | Narrows output after baseline is understood |
| Bad requests dominate parameter fuzzing | `-fc 400` or similar | Removes obvious invalid-request noise |

Practical rule:
- During early calibration, broad matching with targeted filtering is usually safer than narrow matching with no baseline.

## 3) Recursion Rules

Recursion is useful, but expensive.

Use recursion only when:
- the first pass found directory-like responses worth descending into
- the scope is narrow enough to tolerate growth
- you have rate and max-time controls in place

Avoid or defer recursion when:
- the target uses wildcard routing
- the first pass is already noisy
- the target is unstable or rate-limited
- the user only needs a quick existence check

Operator note:
- For broad targets, a two-pass approach is usually better than immediate deep recursion.

## 4) Vhost and Host-Header Caveats

When fuzzing virtual hosts with `-H 'Host: FUZZ.example.tld'`:
- confirm manually that the target actually varies on the `Host` header
- identify the **default vhost** response first
- compare status, size, title, and redirect target
- be cautious with recursion logic because Host-header-based workflows can behave differently from path discovery

Common mistake:
- filtering on a default vhost size before confirming that different virtual hosts do not share the same generic page shell

## 5) Auto-Calibration Caveats

Auto-calibration can help when the target returns repeatable noise, but it is not infallible.

Be careful when:
- scanning multiple domains or vhosts in one workflow
- wildcard behavior differs across hosts
- redirect targets or body templates vary slightly
- the target includes unstable dynamic elements

Sanity check after enabling calibration:
- compare a few kept results and a few filtered results manually
- rerun a narrow sample without calibration if the output looks suspiciously empty

## 6) Runtime Bounding Controls

For safe, reviewable execution, set bounds intentionally.

Use these controls consciously:
- **`-rate`** to cap request throughput
- **`-timeout`** to avoid long waits on slow responses
- **`-maxtime`** to ensure a scan finishes in a predictable window
- smaller wordlists first, then expansion only if justified

If the target is fragile:
- reduce rate further
- cut recursion
- shorten the wordlist
- confirm target health with `curl` before continuing

## 7) Output Strategy

Prefer output that supports handoff and repeatability.

Recommended minimums:
- save the full command
- write JSON output with `-of json -o <file>`
- note the wordlist, scope, and filters used
- summarize why a result was treated as a true positive

Good handoff summary includes:
- target and scope
- baseline characteristics
- final ffuf command
- filter or matcher rationale
- notable findings requiring verification

## 8) Forced-Browsing Interpretation Notes

In web content discovery, these can all matter operationally:
- `200` with a distinct body
- `301`/`302` to an interesting location
- `401` or `403` for admin or internal paths
- alternate titles or body lengths that differ from the baseline

Do not dismiss a result only because access is restricted. A `403` on an admin path can still be an important discovery.

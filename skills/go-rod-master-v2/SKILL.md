---
name: go-rod-master-v2
description: "Go-Rod Browser Automation Master workflow skill. Use this skill when the user needs Comprehensive guide for browser automation and web scraping with go-rod (Chrome DevTools Protocol) including stealth anti-bot-detection patterns and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["go-rod-master-v2", "go-rod-master", "comprehensive", "guide", "for", "browser", "automation", "and"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Go-Rod Browser Automation Master

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/go-rod-master` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Go-Rod Browser Automation Master

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Safety & Risk, Core Concepts, Stealth & Anti-Bot Detection (go-rod/stealth), Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the user asks to scrape, automate, or test a website using Go.
- Use when the user needs a headless browser for dynamic/SPA content (React, Vue, Angular).
- Use when the user mentions stealth, anti-bot, avoiding detection, Cloudflare, or bot detection bypass.
- Use when the user wants to work with the Chrome DevTools Protocol (CDP) directly from Go.
- Use when the user needs to intercept or hijack network requests in a browser context.
- Use when the user asks about concurrent browser scraping or page pooling in Go.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/api-reference.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `examples/basic_scrape.go` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. `bash # Core rod library go get github.com/go-rod/rod@latest # Stealth anti-detection plugin (ALWAYS include for production scraping) go get github.com/go-rod/stealth@latest Rod auto-downloads a compatible Chromium binary on first run.
2. To pre-download: bash go run github.com/nichochar/go-rod.github.io/cmd/launcher@latest `
3. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
4. Read the overview and provenance files before loading any copied upstream support files.
5. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
6. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
7. Validate the result against the upstream expectations and the evidence you can point to in the copied files.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Core rod library
go get github.com/go-rod/rod@latest

# Stealth anti-detection plugin (ALWAYS include for production scraping)
go get github.com/go-rod/stealth@latest
```

Rod auto-downloads a compatible Chromium binary on first run. To pre-download:

```bash
go run github.com/nichochar/go-rod.github.io/cmd/launcher@latest
```

#### Imported: Overview

[Rod](https://github.com/go-rod/rod) is a high-level Go driver built directly on the [Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/) for browser automation and web scraping. Unlike wrappers around other tools, Rod communicates with the browser natively via CDP, providing thread-safe operations, chained context design for timeouts/cancellation, auto-wait for elements, correct iframe/shadow DOM handling, and zero zombie browser processes.

The companion library [go-rod/stealth](https://github.com/go-rod/stealth) injects anti-bot-detection evasions based on [puppeteer-extra stealth](https://github.com/nichochar/puppeteer-extra/tree/master/packages/extract-stealth-evasions), hiding headless browser fingerprints from detection systems.

#### Imported: Safety & Risk

**Risk Level: 🔵 Safe**

- **Read-Only by Default:** Default behavior is navigating and reading page content (scraping/testing).
- **Isolated Contexts:** Browser contexts are sandboxed; cookies and storage do not persist unless explicitly saved.
- **Resource Cleanup:** Designed around Go's `defer` pattern — browsers and pages close automatically.
- **No External Mutations:** Does not modify external state unless the script explicitly submits forms or POSTs data.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @go-rod-master-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @go-rod-master-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @go-rod-master-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @go-rod-master-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

See the `examples/` directory for complete, runnable Go files:
- `examples/basic_scrape.go` — Minimal scraping example
- `examples/stealth_page.go` — Anti-detection with go-rod/stealth
- `examples/request_hijacking.go` — Intercepting and modifying network requests
- `examples/concurrent_pages.go` — Page pool for concurrent scraping

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ ALWAYS use stealth.MustPage(browser) instead of browser.MustPage() for real-world sites.
- ✅ ALWAYS defer browser.MustClose() immediately after connecting.
- ✅ Use the error-returning API (not Must*) in production code.
- ✅ Set explicit timeouts with .Timeout() — never rely on defaults for production.
- ✅ Use browser.MustIncognito().MustPage() for isolated sessions.
- ✅ Use PagePool for concurrent scraping instead of spawning unlimited pages.
- ✅ Use MustWaitStable() before clicking elements that might be animating.

### Imported Operating Notes

#### Imported: Implementation Guidelines

### 1. Launcher Configuration

Use the `launcher` package to customize browser launch flags:

```go
import "github.com/go-rod/rod/lib/launcher"

url := launcher.New().
    Headless(true).             // false for debugging
    Proxy("127.0.0.1:8080").    // upstream proxy
    Set("disable-gpu", "").     // custom Chrome flag
    Delete("use-mock-keychain"). // remove a default flag
    MustLaunch()

browser := rod.New().ControlURL(url).MustConnect()
defer browser.MustClose()
```

**Debugging mode (visible browser + slow motion):**

```go
l := launcher.New().
    Headless(false).
    Devtools(true)
defer l.Cleanup()

browser := rod.New().
    ControlURL(l.MustLaunch()).
    Trace(true).
    SlowMotion(2 * time.Second).
    MustConnect()
```

### 2. Proxy Support

```go
// Set proxy at launch
url := launcher.New().
    Proxy("socks5://127.0.0.1:1080").
    MustLaunch()

browser := rod.New().ControlURL(url).MustConnect()

// Handle proxy authentication
go browser.MustHandleAuth("username", "password")()

// Ignore SSL certificate errors (for MITM proxies)
browser.MustIgnoreCertErrors(true)
```

### 3. Input Simulation

```go
import "github.com/go-rod/rod/lib/input"

// Type into an input field (replaces existing value)
page.MustElement("#email").MustInput("user@example.com")

// Simulate keyboard keys
page.Keyboard.MustType(input.Enter)

// Press key combinations
page.Keyboard.MustPress(input.ControlLeft)
page.Keyboard.MustType(input.KeyA)
page.Keyboard.MustRelease(input.ControlLeft)

// Mouse click at coordinates
page.Mouse.MustClick(input.MouseLeft)
page.Mouse.MustMoveTo(100, 200)
```

### 4. Network Request Interception (Hijacking)

```go
router := browser.HijackRequests()
defer router.MustStop()

// Block all image requests
router.MustAdd("*.png", func(ctx *rod.Hijack) {
    ctx.Response.Fail(proto.NetworkErrorReasonBlockedByClient)
})

// Modify request headers
router.MustAdd("*api.example.com*", func(ctx *rod.Hijack) {
    ctx.Request.Req().Header.Set("Authorization", "Bearer token123")
    ctx.MustLoadResponse()
})

// Modify response body
router.MustAdd("*.js", func(ctx *rod.Hijack) {
    ctx.MustLoadResponse()
    ctx.Response.SetBody(ctx.Response.Body() + "\n// injected")
})

go router.Run()
```

### 5. Waiting Strategies

```go
// Wait for page load event
page.MustWaitLoad()

// Wait for no pending network requests (AJAX idle)
wait := page.MustWaitRequestIdle()
page.MustElement("#search").MustInput("query")
wait()

// Wait for element to be stable (not animating)
page.MustElement(".modal").MustWaitStable().MustClick()

// Wait for element to become invisible
page.MustElement(".loading").MustWaitInvisible()

// Wait for JavaScript condition
page.MustWait(`() => document.title === 'Ready'`)

// Wait for specific navigation/event
wait := page.WaitEvent(&proto.PageLoadEventFired{})
page.MustNavigate("https://example.com")
wait()
```

### 6. Race Selectors (Multiple Outcomes)

Handle pages where the result can be one of several outcomes (e.g., login success vs error):

```go
page.MustElement("#username").MustInput("user")
page.MustElement("#password").MustInput("pass").MustType(input.Enter)

// Race between success and error selectors
elm := page.Race().
    Element(".dashboard").MustHandle(func(e *rod.Element) {
        fmt.Println("Login successful:", e.MustText())
    }).
    Element(".error-message").MustDo()

if elm.MustMatches(".error-message") {
    log.Fatal("Login failed:", elm.MustText())
}
```

### 7. Screenshots & PDF

```go
// Full-page screenshot
page.MustScreenshot("page.png")

// Custom screenshot (JPEG, specific region)
img, _ := page.Screenshot(true, &proto.PageCaptureScreenshot{
    Format:  proto.PageCaptureScreenshotFormatJpeg,
    Quality: gson.Int(90),
    Clip: &proto.PageViewport{
        X: 0, Y: 0, Width: 1280, Height: 800, Scale: 1,
    },
})
utils.OutputFile("screenshot.jpg", img)

// Scroll screenshot (captures full scrollable page)
img, _ := page.MustWaitStable().ScrollScreenshot(nil)
utils.OutputFile("full_page.jpg", img)

// PDF export
page.MustPDF("output.pdf")
```

### 8. Concurrent Page Pool

```go
pool := rod.NewPagePool(5) // max 5 concurrent pages

create := func() *rod.Page {
    return browser.MustIncognito().MustPage()
}

var wg sync.WaitGroup
for _, url := range urls {
    wg.Add(1)
    go func(u string) {
        defer wg.Done()

        page := pool.MustGet(create)
        defer pool.Put(page)

        page.MustNavigate(u).MustWaitLoad()
        fmt.Println(page.MustInfo().Title)
    }(url)
}
wg.Wait()

pool.Cleanup(func(p *rod.Page) { p.MustClose() })
```

### 9. Event Handling

```go
// Listen for console.log output
go page.EachEvent(func(e *proto.RuntimeConsoleAPICalled) {
    if e.Type == proto.RuntimeConsoleAPICalledTypeLog {
        fmt.Println(page.MustObjectsToJSON(e.Args))
    }
})()

// Wait for a specific event before proceeding
wait := page.WaitEvent(&proto.PageLoadEventFired{})
page.MustNavigate("https://example.com")
wait()
```

### 10. File Download

```go
wait := browser.MustWaitDownload()

page.MustElementR("a", "Download PDF").MustClick()

data := wait()
utils.OutputFile("downloaded.pdf", data)
```

### 11. JavaScript Evaluation

```go
// Execute JS on the page
page.MustEval(`() => console.log("hello")`)

// Pass parameters and get return value
result := page.MustEval(`(a, b) => a + b`, 1, 2)
fmt.Println(result.Int()) // 3

// Eval on a specific element ("this" = the DOM element)
title := page.MustElement("title").MustEval(`() => this.innerText`).String()

// Direct CDP calls for features Rod doesn't wrap
proto.PageSetAdBlockingEnabled{Enabled: true}.Call(page)
```

### 12. Loading Chrome Extensions

```go
extPath, _ := filepath.Abs("./my-extension")

u := launcher.New().
    Set("load-extension", extPath).
    Headless(false). // extensions require headed mode
    MustLaunch()

browser := rod.New().ControlURL(u).MustConnect()
```

---

#### Imported: Best Practices

- ✅ **ALWAYS use `stealth.MustPage(browser)`** instead of `browser.MustPage()` for real-world sites.
- ✅ **ALWAYS `defer browser.MustClose()`** immediately after connecting.
- ✅ Use the error-returning API (not `Must*`) in production code.
- ✅ Set explicit timeouts with `.Timeout()` — never rely on defaults for production.
- ✅ Use `browser.MustIncognito().MustPage()` for isolated sessions.
- ✅ Use `PagePool` for concurrent scraping instead of spawning unlimited pages.
- ✅ Use `MustWaitStable()` before clicking elements that might be animating.
- ✅ Use `MustWaitRequestIdle()` after actions that trigger AJAX calls.
- ✅ Use `launcher.New().Headless(false).Devtools(true)` for debugging.
- ❌ **NEVER** use `time.Sleep()` for waiting — use Rod's built-in wait methods.
- ❌ **NEVER** create a new `Browser` per task — create one Browser, use multiple `Page` instances.
- ❌ **NEVER** use `browser.MustPage()` for production scraping — use `stealth.MustPage()`.
- ❌ **NEVER** ignore errors in production — always handle them explicitly.
- ❌ **NEVER** forget to defer-close browsers, pages, and hijack routers.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/go-rod-master`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@game-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gdb-cli-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gdpr-data-handling-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gemini-api-dev-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/api-reference.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/basic_scrape.go` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [api-reference.md](references/api-reference.md)
- [basic_scrape.go](examples/basic_scrape.go)
- [concurrent_pages.go](examples/concurrent_pages.go)
- [request_hijacking.go](examples/request_hijacking.go)
- [stealth_page.go](examples/stealth_page.go)
- [basic_scrape.go](examples/basic_scrape.go)

### Imported Reference Notes

#### Imported: Documentation References

- [Official Documentation](https://go-rod.github.io/) — Guides, tutorials, FAQ
- [Go API Reference](https://pkg.go.dev/github.com/go-rod/rod) — Complete type and method documentation
- [go-rod/stealth](https://github.com/go-rod/stealth) — Anti-bot detection plugin
- [Examples (source)](https://github.com/go-rod/rod/blob/main/examples_test.go) — Official example tests
- [Rod vs Chromedp Comparison](https://github.com/nichochar/go-rod.github.io/blob/main/lib/examples/compare-chromedp) — Migration reference
- [Chrome DevTools Protocol Docs](https://chromedevtools.github.io/devtools-protocol/) — Underlying protocol reference
- [Chrome CLI Flags Reference](https://peter.sh/experiments/chromium-command-line-switches) — Launcher flag documentation
- `references/api-reference.md` — Quick-reference cheat sheet

#### Imported: Core Concepts

### Browser Lifecycle

Rod manages three layers: **Browser → Page → Element**.

```go
// Launch and connect to a browser
browser := rod.New().MustConnect()
defer browser.MustClose()

// Create a page (tab)
page := browser.MustPage("https://example.com")

// Find an element
el := page.MustElement("h1")
fmt.Println(el.MustText())
```

### Must vs Error Patterns

Rod provides two API styles for every operation:

| Style | Method | Use Case |
|:------|:-------|:---------|
| **Must** | `MustElement()`, `MustClick()`, `MustText()` | Scripting, debugging, prototyping. Panics on error. |
| **Error** | `Element()`, `Click()`, `Text()` | Production code. Returns `error` for explicit handling. |

**Production pattern:**

```go
el, err := page.Element("#login-btn")
if err != nil {
    return fmt.Errorf("login button not found: %w", err)
}
if err := el.Click(proto.InputMouseButtonLeft, 1); err != nil {
    return fmt.Errorf("click failed: %w", err)
}
```

**Scripting pattern with Try:**

```go
err := rod.Try(func() {
    page.MustElement("#login-btn").MustClick()
})
if errors.Is(err, context.DeadlineExceeded) {
    log.Println("timeout finding login button")
}
```

### Context & Timeout

Rod uses Go's `context.Context` for cancellation and timeouts. Context propagates recursively to all child operations.

```go
// Set a 5-second timeout for the entire operation chain
page.Timeout(5 * time.Second).
    MustWaitLoad().
    MustElement("title").
    CancelTimeout(). // subsequent calls are not bound by the 5s timeout
    Timeout(30 * time.Second).
    MustText()
```

### Element Selectors

Rod supports multiple selector strategies:

```go
// CSS selector (most common)
page.MustElement("div.content > p.intro")

// CSS selector with text regex matching
page.MustElementR("button", "Submit|Send")

// XPath
page.MustElementX("//div[@class='content']//p")

// Search across iframes and shadow DOM (like DevTools Ctrl+F)
page.MustSearch(".deeply-nested-element")
```

### Auto-Wait

Rod automatically retries element queries until the element appears or the context times out. You do not need manual sleeps:

```go
// This will automatically wait until the element exists
el := page.MustElement("#dynamic-content")

// Wait until the element is stable (position/size not changing)
el.MustWaitStable().MustClick()

// Wait until page has no pending network requests
wait := page.MustWaitRequestIdle()
page.MustElement("#search").MustInput("query")
wait()
```

---

#### Imported: Stealth & Anti-Bot Detection (go-rod/stealth)

> **IMPORTANT:** For any production scraping or automation against real websites, ALWAYS use `stealth.MustPage()` instead of `browser.MustPage()`. This is the single most important step for avoiding bot detection.

### How Stealth Works

The `go-rod/stealth` package injects JavaScript evasions into every new page that:

- **Remove `navigator.webdriver`** — the primary headless detection signal.
- **Spoof WebGL vendor/renderer** — presents real GPU info (e.g., "Intel Inc." / "Intel Iris OpenGL Engine") instead of headless markers like "Google SwiftShader".
- **Fix Chrome plugin array** — reports proper `PluginArray` type with realistic plugin count.
- **Patch permissions API** — returns `"prompt"` instead of bot-revealing values.
- **Set realistic languages** — reports `en-US,en` instead of empty arrays.
- **Fix broken image dimensions** — headless browsers report 0x0; stealth fixes this to 16x16.

### Usage

**Creating a stealth page (recommended for all production use):**

```go
import (
    "github.com/go-rod/rod"
    "github.com/go-rod/stealth"
)

browser := rod.New().MustConnect()
defer browser.MustClose()

// Use stealth.MustPage instead of browser.MustPage
page := stealth.MustPage(browser)
page.MustNavigate("https://bot.sannysoft.com")
```

**With error handling:**

```go
page, err := stealth.Page(browser)
if err != nil {
    return fmt.Errorf("failed to create stealth page: %w", err)
}
page.MustNavigate("https://example.com")
```

**Using stealth.JS directly (advanced — for custom page creation):**

```go
// If you need to create the page yourself (e.g., with specific options),
// inject stealth.JS manually via EvalOnNewDocument
page := browser.MustPage()
page.MustEvalOnNewDocument(stealth.JS)
page.MustNavigate("https://example.com")
```

### Verifying Stealth

Navigate to a bot detection test page to verify evasions:

```go
page := stealth.MustPage(browser)
page.MustNavigate("https://bot.sannysoft.com")
page.MustScreenshot("stealth_test.png")
```

Expected results for a properly stealth-configured browser:
- **WebDriver**: `missing (passed)`
- **Chrome**: `present (passed)`
- **Plugins Length**: `3` (not `0`)
- **Languages**: `en-US,en`

---

#### Imported: Common Pitfalls

- **Problem:** Element not found even though it exists on the page.
  **Solution:** The element may be inside an iframe or shadow DOM. Use `page.MustSearch()` instead of `page.MustElement()` — it searches across all iframes and shadow DOMs.

- **Problem:** Click doesn't work because the element is animating.
  **Solution:** Call `el.MustWaitStable()` before `el.MustClick()`.

- **Problem:** Bot detection despite using stealth.
  **Solution:** Combine `stealth.MustPage()` with: randomized viewport sizes, realistic User-Agent strings, human-like input delays between keystrokes, and random idle behaviors (scroll, hover).

- **Problem:** Browser process leaks (zombie processes).
  **Solution:** Always `defer browser.MustClose()`. Rod uses [leakless](https://github.com/ysmood/leakless) to kill zombies after main process crash, but explicit cleanup is preferred.

- **Problem:** Timeout errors on slow pages.
  **Solution:** Use chained context: `page.Timeout(30 * time.Second).MustWaitLoad()`. For AJAX-heavy pages, use `MustWaitRequestIdle()` instead of `MustWaitLoad()`.

- **Problem:** HijackRequests router not intercepting requests.
  **Solution:** You must call `go router.Run()` after setting up routes, and `defer router.MustStop()` for cleanup.

#### Imported: Limitations

- **CAPTCHAs:** Rod does not include CAPTCHA solving. External services (2captcha, etc.) must be integrated separately.
- **Extreme Anti-Bot:** While `go-rod/stealth` handles common detection (WebDriver, plugin fingerprints, WebGL), extremely strict systems (some Cloudflare configurations, Akamai Bot Manager) may still detect automation. Additional measures (residential proxies, human-like behavioral patterns) may be needed.
- **DRM Content:** Cannot interact with DRM-protected media (e.g., Widevine).
- **Resource Usage:** Each browser instance consumes significant RAM (~100-300MB+). Use `PagePool` and limit concurrency on memory-constrained systems.
- **Extensions in Headless:** Chrome extensions do not work in headless mode. Use `Headless(false)` with XVFB for server environments.
- **Platform:** Requires a Chromium-compatible browser. Does not support Firefox or Safari.

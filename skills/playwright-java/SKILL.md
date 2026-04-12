---
name: playwright-java
description: "Playwright Java \u2013 Advanced Test Automation workflow skill. Use this skill when the user needs Scaffold, write, debug, and enhance enterprise-grade Playwright E2E tests in Java using Page Object Model, JUnit 5, Allure reporting, and parallel execution and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["playwright", "java", "e2e-testing", "junit5", "page-object-model", "allure", "selenium-alternative", "playwright-java"]
complexity: advanced
risk: caution
tools: ["cursor", "antigravity", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "amalsam18"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Playwright Java – Advanced Test Automation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/playwright-java` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Playwright Java – Advanced Test Automation

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when scaffolding a new Playwright Java project from scratch
- Use when writing Page Object classes or JUnit 5 test classes
- Use when the user asks about cross-browser testing, parallel execution, or Allure reports
- Use when fixing flaky tests or replacing Thread.sleep() with proper waits
- Use when setting up Playwright in CI/CD pipelines (GitHub Actions, Jenkins, Docker)
- Use when combining API calls and UI assertions in a single test (hybrid testing)

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

This skill produces production-quality, enterprise-grade Playwright Java test code.
It enforces the Page Object Model (POM), strict locator strategies, thread-safe parallel
execution, and full Allure reporting integration. Targets Java 17+ and Playwright 1.44+.

Supporting reference files are available for deeper topics:

| Topic | File |
|-------|------|
| Maven POM, ConfigReader, Docker/CI setup | `references/config.md` |
| Component pattern, dropdowns, uploads, waits | `references/page-objects.md` |
| Full assertion API, soft assertions, visual testing | `references/assertions.md` |
| Fixtures, test data factory, auth state, retry | `references/fixtures.md` |
| Drop-in base class templates | `templates/BaseTest.java`, `templates/BasePage.java` |

---

#### Imported: How It Works

### Step 1: Decide the Approach

Use this matrix to pick the right pattern before writing any code:

| User Request | Approach |
|---|---|
| New project from scratch | Full scaffold — see `references/config.md` |
| Single feature test | POM page class + JUnit5 test class |
| API + UI hybrid | `APIRequestContext` alongside `Page` |
| Cross-browser | `@MethodSource` parameterized over browser names |
| Flaky test fix | Replace `sleep` with `waitFor` / `waitForResponse` |
| CI integration | `playwright install --with-deps` in pipeline |
| Parallel execution | `junit-platform.properties` + `ThreadLocal` |
| Rich reporting | Allure + Playwright trace + video recording |

---

### Step 2: Scaffold the Project Structure

Always use this layout when creating a new project:

```
src/
├── test/
│   ├── java/com/company/tests/
│   │   ├── base/
│   │   │   ├── BaseTest.java        ← templates/BaseTest.java
│   │   │   └── BasePage.java        ← templates/BasePage.java
│   │   ├── pages/
│   │   │   └── LoginPage.java
│   │   ├── tests/
│   │   │   └── LoginTest.java
│   │   ├── utils/
│   │   │   ├── TestDataFactory.java
│   │   │   └── WaitUtils.java
│   │   └── config/
│   │       └── ConfigReader.java
│   └── resources/
│       ├── test.properties
│       ├── junit-platform.properties
│       └── testdata/users.json
pom.xml
```

---

### Step 3: Set Up Thread-Safe BaseTest

```java
public class BaseTest {
    protected static ThreadLocal<Playwright>     playwrightTL = new ThreadLocal<>();
    protected static ThreadLocal<Browser>        browserTL    = new ThreadLocal<>();
    protected static ThreadLocal<BrowserContext> contextTL    = new ThreadLocal<>();
    protected static ThreadLocal<Page>           pageTL       = new ThreadLocal<>();

    protected Page page() { return pageTL.get(); }

    @BeforeEach
    void setUp() {
        Playwright playwright = Playwright.create();
        playwrightTL.set(playwright);

        Browser browser = resolveBrowser(playwright).launch(
            new BrowserType.LaunchOptions()
                .setHeadless(ConfigReader.isHeadless()));
        browserTL.set(browser);

        BrowserContext context = browser.newContext(new Browser.NewContextOptions()
            .setViewportSize(1920, 1080)
            .setRecordVideoDir(Paths.get("target/videos/"))
            .setLocale("en-US"));
        context.tracing().start(new Tracing.StartOptions()
            .setScreenshots(true).setSnapshots(true));
        contextTL.set(context);
        pageTL.set(context.newPage());
    }

    @AfterEach
    void tearDown(TestInfo testInfo) {
        String name = testInfo.getDisplayName().replaceAll("[^a-zA-Z0-9]", "_");
        contextTL.get().tracing().stop(new Tracing.StopOptions()
            .setPath(Paths.get("target/traces/" + name + ".zip")));
        pageTL.get().close();
        contextTL.get().close();
        browserTL.get().close();
        playwrightTL.get().close();
    }

    private BrowserType resolveBrowser(Playwright pw) {
        return switch (System.getProperty("browser", "chromium").toLowerCase()) {
            case "firefox" -> pw.firefox();
            case "webkit"  -> pw.webkit();
            default        -> pw.chromium();
        };
    }
}
```

---

### Step 4: Build Page Object Classes

```java
public class LoginPage extends BasePage {

    // Declare ALL locators as fields — never inline in action methods
    private final Locator emailInput;
    private final Locator passwordInput;
    private final Locator loginButton;
    private final Locator errorMessage;

    public LoginPage(Page page) {
        super(page);
        emailInput    = page.getByLabel("Email address");
        passwordInput = page.getByLabel("Password");
        loginButton   = page.getByRole(AriaRole.BUTTON,
                            new Page.GetByRoleOptions().setName("Sign in"));
        errorMessage  = page.getByTestId("login-error");
    }

    @Override protected String getUrl() { return "/login"; }

    // Navigation methods return the next Page Object — enables fluent chaining
    public DashboardPage loginAs(String email, String password) {
        fill(emailInput, email);
        fill(passwordInput, password);
        clickAndWaitForNav(loginButton);
        return new DashboardPage(page);
    }

    public LoginPage loginExpectingError(String email, String password) {
        fill(emailInput, email);
        fill(passwordInput, password);
        loginButton.click();
        errorMessage.waitFor();
        return this;
    }

    public String getErrorMessage() { return errorMessage.textContent(); }
}
```

---

### Step 5: Write Tests with Allure Annotations

```java
@ExtendWith(AllureJunit5.class)
class LoginTest extends BaseTest {

    private LoginPage loginPage;

    @BeforeEach
    void openLoginPage() {
        loginPage = new LoginPage(page());
        loginPage.navigate();
    }

    @Test
    @Severity(SeverityLevel.BLOCKER)
    @DisplayName("Valid credentials redirect to dashboard")
    void shouldLoginWithValidCredentials() {
        User user = TestDataFactory.getDefaultUser();
        DashboardPage dash = loginPage.loginAs(user.email(), user.password());

        assertThat(page()).hasURL(Pattern.compile(".*/dashboard"));
        assertThat(dash.getWelcomeBanner()).containsText("Welcome, " + user.firstName());
    }

    @Test
    void shouldShowErrorOnInvalidCredentials() {
        loginPage.loginExpectingError("bad@test.com", "wrongpass");

        SoftAssertions softly = new SoftAssertions();
        softly.assertThat(loginPage.getErrorMessage()).contains("Invalid email or password");
        softly.assertThat(page()).hasURL(Pattern.compile(".*/login"));
        softly.assertAll();
    }

    @ParameterizedTest
    @MethodSource("provideInvalidCredentials")
    void shouldRejectInvalidCredentials(String email, String password, String expectedError) {
        loginPage.loginExpectingError(email, password);
        assertThat(loginPage.getErrorMessage()).containsText(expectedError);
    }

    static Stream<Arguments> provideInvalidCredentials() {
        return Stream.of(
            Arguments.of("", "password123", "Email is required"),
            Arguments.of("user@test.com", "", "Password is required"),
            Arguments.of("notanemail", "pass", "Invalid email format")
        );
    }
}
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @playwright-java to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/playwright-java/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/playwright-java/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @playwright-java using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: API + UI Hybrid Test

```java
@Test
void shouldDisplayNewlyCreatedOrder() {
    // Arrange via API — faster than navigating through UI
    APIRequestContext api = page().context().request();
    APIResponse response = api.post("/api/orders",
        RequestOptions.create()
            .setHeader("Authorization", "Bearer " + authToken)
            .setData(Map.of("productId", "SKU-001", "quantity", 2)));
    assertThat(response).isOK();

    String orderId = new JsonParser().parse(response.text())
        .getAsJsonObject().get("id").getAsString();

    OrdersPage orders = new OrdersPage(page());
    orders.navigate();
    assertThat(orders.getOrderRowById(orderId)).isVisible();
}
```

### Example 2: Network Mocking

```java
@Test
void shouldHandleApiFailureGracefully() {
    page().route("**/api/products", route -> route.fulfill(
        new Route.FulfillOptions()
            .setStatus(503)
            .setBody("{\"error\":\"Service Unavailable\"}")
            .setContentType("application/json")));

    ProductsPage products = new ProductsPage(page());
    products.navigate();

    assertThat(products.getErrorBanner())
        .hasText("We're having trouble loading products. Please try again.");
}
```

### Example 3: Parallel Cross-Browser Test

```java
@ParameterizedTest
@MethodSource("browsers")
void shouldRenderCheckoutOnAllBrowsers(String browserName) {
    System.setProperty("browser", browserName);
    new CheckoutPage(page()).navigate();
    assertThat(page().locator(".checkout-form")).isVisible();
}

static Stream<String> browsers() {
    return Stream.of("chromium", "firefox", "webkit");
}
```

### Example 4: Parallel Execution Config

```properties
# src/test/resources/junit-platform.properties
junit.jupiter.execution.parallel.enabled=true
junit.jupiter.execution.parallel.mode.default=concurrent
junit.jupiter.execution.parallel.config.strategy=fixed
junit.jupiter.execution.parallel.config.fixed.parallelism=4
```

### Example 5: GitHub Actions CI Pipeline

```yaml
- name: Install Playwright browsers
  run: mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install --with-deps"

- name: Run tests
  run: mvn test -Dbrowser=${{ matrix.browser }} -Dheadless=true

- name: Upload traces on failure
  uses: actions/upload-artifact@v4
  if: failure()
  with:
    name: playwright-traces
    path: target/traces/

- name: Upload Allure results
  uses: actions/upload-artifact@v4
  if: always()
  with:
    name: allure-results
    path: target/allure-results/
```

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Use ThreadLocal<Page> for every parallel-safe test suite
- ✅ Declare all Locator fields at the top of the Page Object class
- ✅ Return the next Page Object from navigation methods (fluent chaining)
- ✅ Use assertThat(locator) — it auto-retries until timeout
- ✅ Use getByRole, getByLabel, getByTestId as first-choice locators
- ✅ Start tracing in @BeforeEach and stop with a file path in @AfterEach
- ✅ Use SoftAssertions when validating multiple fields on a single page

### Imported Operating Notes

#### Imported: Best Practices

- ✅ Use `ThreadLocal<Page>` for every parallel-safe test suite
- ✅ Declare all `Locator` fields at the top of the Page Object class
- ✅ Return the next Page Object from navigation methods (fluent chaining)
- ✅ Use `assertThat(locator)` — it auto-retries until timeout
- ✅ Use `getByRole`, `getByLabel`, `getByTestId` as first-choice locators
- ✅ Start tracing in `@BeforeEach` and stop with a file path in `@AfterEach`
- ✅ Use `SoftAssertions` when validating multiple fields on a single page
- ✅ Set up saved auth state (`storageState`) to skip login across test classes
- ❌ Never use `Thread.sleep()` — replace with `waitFor()` or `waitForResponse()`
- ❌ Never hardcode base URLs — always use `ConfigReader.getBaseUrl()`
- ❌ Never create a `Playwright` instance inside a Page Object
- ❌ Never use XPath for dynamic or frequently changing elements

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/playwright-java`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Common Pitfalls

- **Problem:** Tests fail randomly in parallel mode
  **Solution:** Ensure every test creates its own `Playwright → Browser → BrowserContext → Page` chain via `ThreadLocal`. Never share a `Page` across threads.

- **Problem:** `assertThat(locator).isVisible()` times out even when the element appears
  **Solution:** Increase timeout with `.setTimeout(10_000)` or raise `context.setDefaultTimeout()` in `BaseTest`.

- **Problem:** `Thread.sleep(2000)` was added but tests are still flaky
  **Solution:** Replace with `page.waitForResponse("**/api/endpoint", () -> action())` or `assertThat(locator).hasText("Done")` which polls automatically.

- **Problem:** Playwright trace zip is empty or missing
  **Solution:** Ensure `tracing().start()` is called before test actions and `tracing().stop()` is in `@AfterEach` — not `@AfterAll`.

- **Problem:** Allure report is blank or missing steps
  **Solution:** Add the AspectJ agent to `maven-surefire-plugin` `<argLine>` in `pom.xml` — see `references/config.md` for the exact snippet.

- **Problem:** `storageState` auth file is stale and tests redirect to login
  **Solution:** Re-run `AuthSetup` to regenerate `target/auth/user-state.json` before the suite, or add a `@BeforeAll` that conditionally refreshes it.

---

# Authenticated Test Flow Example

This example shows a concrete Burp-driven workflow for testing an authenticated JSON API without confusing session failures for security findings.

## Scenario

- Target: `https://app.example.test`
- Role: standard user account
- Goal: verify whether a user can access another user's order record
- Approved methods: proxy interception, Repeater replay, limited active scanning on `/api/orders/*`

## Step 1: Capture the login and baseline navigation

Browse normally through Burp and authenticate with the approved test account.

### Example login request
```http
POST /login HTTP/1.1
Host: app.example.test
Content-Type: application/x-www-form-urlencoded

username=test.user&password=CorrectHorseBatteryStaple
```

### Example post-login signal
```http
HTTP/1.1 302 Found
Set-Cookie: session=abc123; HttpOnly; Secure
Location: /app/home
```

After login, browse to one known order that belongs to the account.

## Step 2: Capture the authorized baseline API request

```http
GET /api/orders/10025 HTTP/1.1
Host: app.example.test
Cookie: session=abc123
Accept: application/json
```

### Expected authorized response
```http
HTTP/1.1 200 OK
Content-Type: application/json

{"orderId":10025,"owner":"test.user","status":"processing"}
```

Send this request to Repeater.

## Step 3: Modify one variable only

Change only the object identifier.

```http
GET /api/orders/10026 HTTP/1.1
Host: app.example.test
Cookie: session=abc123
Accept: application/json
```

## Step 4: Evaluate secure vs insecure outcomes

### Secure outcome
```http
HTTP/1.1 403 Forbidden
Content-Type: application/json

{"error":"not authorized"}
```

or

```http
HTTP/1.1 404 Not Found
Content-Type: application/json

{"error":"resource not found"}
```

### Insecure outcome
```http
HTTP/1.1 200 OK
Content-Type: application/json

{"orderId":10026,"owner":"another.user","status":"shipped"}
```

If the insecure outcome occurs, record it as a strong authorization finding.

## Step 5: Handle session instability correctly

If the modified request returns one of these instead:

```http
HTTP/1.1 401 Unauthorized
```

or

```http
HTTP/1.1 302 Found
Location: /login
```

then do **not** conclude anything about authorization yet. First:

- Re-authenticate.
- Capture a fresh baseline request.
- Confirm the cookie is current.
- If present, update anti-CSRF or other dynamic headers.
- Retry the single modified request.

## Step 6: Record evidence

Minimum evidence notes:

- Role used: `standard user`
- Baseline object: `10025`
- Tested object: `10026`
- Baseline result: own object accessible
- Modified result: unauthorized object accessible or correctly denied
- Session status: fresh authenticated session
- Reproduction: captured through Burp Proxy, replayed in Repeater

## Optional Step 7: Limited active scan

Only if explicitly approved and the endpoint is stable:

- Restrict the scan to `/api/orders/*`
- Exclude logout and account-management endpoints
- Monitor for token expiry and false positives

## Expected Operator Outcome

At the end of this flow, the operator should be able to state one of the following clearly:

- `Confirmed authorization issue: user accessed another user's order by modifying the identifier.`
- `No issue confirmed: modified identifier was denied with 403/404 in a fresh session.`
- `Inconclusive: session handling or workflow dependencies prevented reliable replay; further setup is required before testing continues.`

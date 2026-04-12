---
name: plaid-fintech-v3
description: "Plaid Fintech workflow skill. Use this skill when the user needs Expert patterns for Plaid API integration including Link token and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["plaid-fintech-v3", "plaid-fintech", "expert", "patterns", "for", "plaid", "api", "integration"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Plaid Fintech

## Overview

This public intake copy packages `plugins/antigravity-bundle-commerce-payments/skills/plaid-fintech` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Plaid Fintech Expert patterns for Plaid API integration including Link token flows, transactions sync, identity verification, Auth for ACH, balance checks, webhook handling, and fintech compliance best practices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Patterns, Sharp Edges, Validation Checks, Collaboration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: plaid
- User mentions or implies: bank account linking
- User mentions or implies: bank connection
- User mentions or implies: ach
- User mentions or implies: account aggregation
- User mentions or implies: bank transactions

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

#### Imported: Patterns

### Link Token Creation and Exchange

Create a link_token for Plaid Link, exchange public_token for access_token.
Link tokens are short-lived, one-time use. Access tokens don't expire but
may need updating when users change passwords.

// server.ts - Link token creation endpoint
import { Configuration, PlaidApi, PlaidEnvironments, Products, CountryCode } from 'plaid';

const configuration = new Configuration({
  basePath: PlaidEnvironments[process.env.PLAID_ENV || 'sandbox'],
  baseOptions: {
    headers: {
      'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID,
      'PLAID-SECRET': process.env.PLAID_SECRET,
    },
  },
});

const plaidClient = new PlaidApi(configuration);

// Create link token for new user
app.post('/api/plaid/create-link-token', async (req, res) => {
  const { userId } = req.body;

  try {
    const response = await plaidClient.linkTokenCreate({
      user: {
        client_user_id: userId,  // Your internal user ID
      },
      client_name: 'My Finance App',
      products: [Products.Transactions],
      country_codes: [CountryCode.Us],
      language: 'en',
      webhook: 'https://yourapp.com/api/plaid/webhooks',
      // Request 180 days for recurring transactions
      transactions: {
        days_requested: 180,
      },
    });

    res.json({ link_token: response.data.link_token });
  } catch (error) {
    console.error('Link token creation failed:', error);
    res.status(500).json({ error: 'Failed to create link token' });
  }
});

// Exchange public token for access token
app.post('/api/plaid/exchange-token', async (req, res) => {
  const { publicToken, userId } = req.body;

  try {
    // Exchange for permanent access token
    const exchangeResponse = await plaidClient.itemPublicTokenExchange({
      public_token: publicToken,
    });

    const { access_token, item_id } = exchangeResponse.data;

    // Store securely - access_token doesn't expire!
    await db.plaidItem.create({
      data: {
        userId,
        itemId: item_id,
        accessToken: await encrypt(access_token),  // Encrypt at rest
        status: 'ACTIVE',
        products: ['transactions'],
      },
    });

    // Trigger initial transaction sync
    await initiateTransactionSync(item_id, access_token);

    res.json({ success: true, itemId: item_id });
  } catch (error) {
    console.error('Token exchange failed:', error);
    res.status(500).json({ error: 'Failed to exchange token' });
  }
});

// Frontend - React component
import { usePlaidLink } from 'react-plaid-link';

function BankLinkButton({ userId }: { userId: string }) {
  const [linkToken, setLinkToken] = useState<string | null>(null);

  useEffect(() => {
    async function createLinkToken() {
      const response = await fetch('/api/plaid/create-link-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      const { link_token } = await response.json();
      setLinkToken(link_token);
    }
    createLinkToken();
  }, [userId]);

  const { open, ready } = usePlaidLink({
    token: linkToken,
    onSuccess: async (publicToken, metadata) => {
      // Exchange public token for access token
      await fetch('/api/plaid/exchange-token', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ publicToken, userId }),
      });
    },
    onExit: (error, metadata) => {
      if (error) {
        console.error('Link exit error:', error);
      }
    },
  });

  return (
    <button onClick={() => open()} disabled={!ready}>
      Connect Bank Account
    </button>
  );
}

### Context

- initial bank linking
- user onboarding
- connecting accounts

### Transactions Sync

Use /transactions/sync for incremental transaction updates. More efficient
than /transactions/get. Handle webhooks for real-time updates instead of
polling.

// Transactions sync service
interface TransactionSyncState {
  cursor: string | null;
  hasMore: boolean;
}

async function syncTransactions(
  accessToken: string,
  itemId: string
): Promise<void> {
  // Get last cursor from database
  const item = await db.plaidItem.findUnique({
    where: { itemId },
  });

  let cursor = item?.transactionsCursor || null;
  let hasMore = true;
  let addedCount = 0;
  let modifiedCount = 0;
  let removedCount = 0;

  while (hasMore) {
    try {
      const response = await plaidClient.transactionsSync({
        access_token: accessToken,
        cursor: cursor || undefined,
        count: 500,  // Max per request
      });

      const { added, modified, removed, next_cursor, has_more } = response.data;

      // Process added transactions
      if (added.length > 0) {
        await db.transaction.createMany({
          data: added.map(txn => ({
            plaidTransactionId: txn.transaction_id,
            itemId,
            accountId: txn.account_id,
            amount: txn.amount,
            date: new Date(txn.date),
            name: txn.name,
            merchantName: txn.merchant_name,
            category: txn.personal_finance_category?.primary,
            subcategory: txn.personal_finance_category?.detailed,
            pending: txn.pending,
            paymentChannel: txn.payment_channel,
            location: txn.location ? JSON.stringify(txn.location) : null,
          })),
          skipDuplicates: true,
        });
        addedCount += added.length;
      }

      // Process modified transactions
      for (const txn of modified) {
        await db.transaction.updateMany({
          where: { plaidTransactionId: txn.transaction_id },
          data: {
            amount: txn.amount,
            name: txn.name,
            merchantName: txn.merchant_name,
            pending: txn.pending,
            updatedAt: new Date(),
          },
        });
        modifiedCount++;
      }

      // Process removed transactions
      if (removed.length > 0) {
        await db.transaction.deleteMany({
          where: {
            plaidTransactionId: {
              in: removed.map(r => r.transaction_id),
            },
          },
        });
        removedCount += removed.length;
      }

      cursor = next_cursor;
      hasMore = has_more;

    } catch (error: any) {
      if (error.response?.data?.error_code === 'TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION') {
        // Data changed during pagination, restart from null
        cursor = null;
        continue;
      }
      throw error;
    }
  }

  // Save cursor for next sync
  await db.plaidItem.update({
    where: { itemId },
    data: { transactionsCursor: cursor },
  });

  console.log(`Sync complete: +${addedCount} ~${modifiedCount} -${removedCount}`);
}

// Webhook handler for real-time updates
app.post('/api/plaid/webhooks', async (req, res) => {
  const { webhook_type, webhook_code, item_id } = req.body;

  // Verify webhook (see webhook verification pattern)
  if (!verifyPlaidWebhook(req)) {
    return res.status(401).send('Invalid webhook');
  }

  if (webhook_type === 'TRANSACTIONS') {
    switch (webhook_code) {
      case 'SYNC_UPDATES_AVAILABLE':
        // New transactions available, trigger sync
        await queueTransactionSync(item_id);
        break;
      case 'INITIAL_UPDATE':
        // Initial batch of transactions ready
        await queueTransactionSync(item_id);
        break;
      case 'HISTORICAL_UPDATE':
        // Historical transactions ready
        await queueTransactionSync(item_id);
        break;
    }
  }

  res.sendStatus(200);
});

### Context

- fetching transactions
- transaction history
- account activity

### Item Error Handling and Update Mode

Handle ITEM_LOGIN_REQUIRED errors by putting users through Link update mode.
Listen for PENDING_DISCONNECT webhook to proactively prompt users.

// Create link token for update mode
app.post('/api/plaid/create-update-token', async (req, res) => {
  const { itemId } = req.body;

  const item = await db.plaidItem.findUnique({
    where: { itemId },
    include: { user: true },
  });

  if (!item) {
    return res.status(404).json({ error: 'Item not found' });
  }

  try {
    const response = await plaidClient.linkTokenCreate({
      user: {
        client_user_id: item.userId,
      },
      client_name: 'My Finance App',
      country_codes: [CountryCode.Us],
      language: 'en',
      webhook: 'https://yourapp.com/api/plaid/webhooks',
      // Update mode: provide access_token instead of products
      access_token: await decrypt(item.accessToken),
    });

    res.json({ link_token: response.data.link_token });
  } catch (error) {
    console.error('Update token creation failed:', error);
    res.status(500).json({ error: 'Failed to create update token' });
  }
});

// Handle item errors from webhooks
app.post('/api/plaid/webhooks', async (req, res) => {
  const { webhook_type, webhook_code, item_id, error } = req.body;

  if (webhook_type === 'ITEM') {
    switch (webhook_code) {
      case 'ERROR':
        // Item has entered an error state
        await db.plaidItem.update({
          where: { itemId: item_id },
          data: {
            status: 'ERROR',
            errorCode: error?.error_code,
            errorMessage: error?.error_message,
          },
        });

        // Notify user to reconnect
        if (error?.error_code === 'ITEM_LOGIN_REQUIRED') {
          await notifyUserReconnect(item_id, 'Please reconnect your bank account');
        }
        break;

      case 'PENDING_DISCONNECT':
        // User needs to reauthorize soon
        await db.plaidItem.update({
          where: { itemId: item_id },
          data: { status: 'PENDING_DISCONNECT' },
        });

        // Proactive notification
        await notifyUserReconnect(item_id, 'Your bank connection will expire soon');
        break;

      case 'USER_PERMISSION_REVOKED':
        // User revoked access at their bank
        await db.plaidItem.update({
          where: { itemId: item_id },
          data: { status: 'REVOKED' },
        });

        // Clean up stored data
        await db.transaction.deleteMany({
          where: { itemId: item_id },
        });
        break;
    }
  }

  res.sendStatus(200);
});

// Check item status before API calls
async function getItemWithValidation(itemId: string) {
  const item = await db.plaidItem.findUnique({
    where: { itemId },
  });

  if (!item) {
    throw new Error('Item not found');
  }

  if (item.status === 'ERROR') {
    throw new ItemNeedsUpdateError(item.errorCode, item.errorMessage);
  }

  return item;
}

### Context

- error recovery
- reauthorization
- credential updates

### Auth for ACH Transfers

Use Auth product to get account and routing numbers for ACH transfers.
Combine with Identity to verify account ownership before initiating
transfers.

// Get account and routing numbers
async function getACHNumbers(accessToken: string): Promise<ACHInfo[]> {
  const response = await plaidClient.authGet({
    access_token: accessToken,
  });

  const { accounts, numbers } = response.data;

  // Map ACH numbers to accounts
  return accounts.map(account => {
    const achNumber = numbers.ach.find(
      n => n.account_id === account.account_id
    );

    return {
      accountId: account.account_id,
      name: account.name,
      mask: account.mask,
      type: account.type,
      subtype: account.subtype,
      routing: achNumber?.routing,
      account: achNumber?.account,
      wireRouting: achNumber?.wire_routing,
    };
  });
}

// Verify identity before ACH transfer
async function verifyAndInitiateTransfer(
  accessToken: string,
  userId: string,
  amount: number
): Promise<TransferResult> {
  // Get identity from linked account
  const identityResponse = await plaidClient.identityGet({
    access_token: accessToken,
  });

  const accountOwners = identityResponse.data.accounts[0]?.owners || [];

  // Get user's stored identity
  const user = await db.user.findUnique({
    where: { id: userId },
  });

  // Match identity
  const matchResponse = await plaidClient.identityMatch({
    access_token: accessToken,
    user: {
      legal_name: user.legalName,
      phone_number: user.phoneNumber,
      email_address: user.email,
      address: {
        street: user.street,
        city: user.city,
        region: user.state,
        postal_code: user.postalCode,
        country: 'US',
      },
    },
  });

  const matchScores = matchResponse.data.accounts[0]?.legal_name;

  // Require high confidence for transfers
  if ((matchScores?.score || 0) < 70) {
    throw new Error('Identity verification failed');
  }

  // Get real-time balance for the transfer
  const balanceResponse = await plaidClient.accountsBalanceGet({
    access_token: accessToken,
  });

  const account = balanceResponse.data.accounts[0];

  // Check sufficient funds (consider pending)
  const availableBalance = account.balances.available ?? account.balances.current;
  if (availableBalance < amount) {
    throw new Error('Insufficient funds');
  }

  // Get ACH numbers and initiate transfer
  const authResponse = await plaidClient.authGet({
    access_token: accessToken,
  });

  const achNumbers = authResponse.data.numbers.ach.find(
    n => n.account_id === account.account_id
  );

  // Initiate ACH transfer with your payment processor
  return await initiateACHTransfer({
    routingNumber: achNumbers.routing,
    accountNumber: achNumbers.account,
    amount,
    accountType: account.subtype,
  });
}

### Context

- ach transfers
- money movement
- account funding

### Real-Time Balance Check

Use /accounts/balance/get for real-time balance (paid endpoint).
/accounts/get returns cached data suitable for display but not
real-time decisions.

interface BalanceInfo {
  accountId: string;
  available: number | null;
  current: number;
  limit: number | null;
  isoCurrencyCode: string;
  lastUpdated: Date;
  isRealtime: boolean;
}

// Get cached balance (free, suitable for display)
async function getCachedBalances(accessToken: string): Promise<BalanceInfo[]> {
  const response = await plaidClient.accountsGet({
    access_token: accessToken,
  });

  return response.data.accounts.map(account => ({
    accountId: account.account_id,
    available: account.balances.available,
    current: account.balances.current,
    limit: account.balances.limit,
    isoCurrencyCode: account.balances.iso_currency_code || 'USD',
    lastUpdated: new Date(account.balances.last_updated_datetime || Date.now()),
    isRealtime: false,
  }));
}

// Get real-time balance (paid, for payment validation)
async function getRealTimeBalance(
  accessToken: string,
  accountIds?: string[]
): Promise<BalanceInfo[]> {
  const response = await plaidClient.accountsBalanceGet({
    access_token: accessToken,
    options: accountIds ? { account_ids: accountIds } : undefined,
  });

  return response.data.accounts.map(account => ({
    accountId: account.account_id,
    available: account.balances.available,
    current: account.balances.current,
    limit: account.balances.limit,
    isoCurrencyCode: account.balances.iso_currency_code || 'USD',
    lastUpdated: new Date(),
    isRealtime: true,
  }));
}

// Payment validation with balance check
async function validatePayment(
  accessToken: string,
  accountId: string,
  amount: number
): Promise<PaymentValidation> {
  const balances = await getRealTimeBalance(accessToken, [accountId]);
  const account = balances.find(b => b.accountId === accountId);

  if (!account) {
    return { valid: false, reason: 'Account not found' };
  }

  const available = account.available ?? account.current;

  if (available < amount) {
    return {
      valid: false,
      reason: 'Insufficient funds',
      available,
      requested: amount,
    };
  }

  return {
    valid: true,
    available,
    requested: amount,
  };
}

### Context

- balance checking
- fund availability
- payment validation

### Webhook Verification

Verify Plaid webhooks using the verification key endpoint.
Handle duplicate webhooks idempotently and design for out-of-order
delivery.

import jwt from 'jsonwebtoken';
import jwksClient from 'jwks-rsa';

// Cache JWKS client
const client = jwksClient({
  jwksUri: 'https://production.plaid.com/.well-known/jwks.json',
  cache: true,
  cacheMaxAge: 86400000,  // 24 hours
});

async function getSigningKey(kid: string): Promise<string> {
  const key = await client.getSigningKey(kid);
  return key.getPublicKey();
}

async function verifyPlaidWebhook(req: Request): Promise<boolean> {
  const signedJwt = req.headers['plaid-verification'];

  if (!signedJwt) {
    return false;
  }

  try {
    // Decode to get kid
    const decoded = jwt.decode(signedJwt, { complete: true });
    if (!decoded?.header?.kid) {
      return false;
    }

    // Get signing key
    const key = await getSigningKey(decoded.header.kid);

    // Verify JWT
    const claims = jwt.verify(signedJwt, key, {
      algorithms: ['ES256'],
    }) as any;

    // Verify body hash
    const bodyHash = crypto
      .createHash('sha256')
      .update(JSON.stringify(req.body))
      .digest('hex');

    if (claims.request_body_sha256 !== bodyHash) {
      return false;
    }

    // Check timestamp (within 5 minutes)
    const issuedAt = new Date(claims.iat * 1000);
    const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
    if (issuedAt < fiveMinutesAgo) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Webhook verification failed:', error);
    return false;
  }
}

// Idempotent webhook handler
app.post('/api/plaid/webhooks', async (req, res) => {
  // Verify webhook signature
  if (!await verifyPlaidWebhook(req)) {
    return res.status(401).send('Invalid signature');
  }

  const { webhook_type, webhook_code, item_id } = req.body;

  // Create idempotency key
  const idempotencyKey = `${webhook_type}:${webhook_code}:${item_id}:${JSON.stringify(req.body)}`;
  const idempotencyHash = crypto.createHash('sha256').update(idempotencyKey).digest('hex');

  // Check if already processed
  const existing = await db.webhookLog.findUnique({
    where: { idempotencyHash },
  });

  if (existing) {
    console.log('Duplicate webhook, skipping:', idempotencyHash);
    return res.sendStatus(200);
  }

  // Record webhook before processing
  await db.webhookLog.create({
    data: {
      idempotencyHash,
      webhookType: webhook_type,
      webhookCode: webhook_code,
      itemId: item_id,
      payload: req.body,
      processedAt: new Date(),
    },
  });

  // Process webhook (async for quick response)
  processWebhookAsync(req.body).catch(console.error);

  res.sendStatus(200);
});

### Context

- webhook security
- event processing
- production deployment

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @plaid-fintech-v3 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/plaid-fintech-v3/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/plaid-fintech-v3/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @plaid-fintech-v3 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-bundle-commerce-payments/skills/plaid-fintech`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Sharp Edges

### Access Tokens Never Expire But Are Highly Sensitive

Severity: CRITICAL

### accounts/get Returns Cached Balances, Not Real-Time

Severity: HIGH

### Webhooks May Arrive Out of Order or Duplicated

Severity: HIGH

### Items Enter Error States That Require User Action

Severity: HIGH

### Sandbox Does Not Reflect Production Complexity

Severity: MEDIUM

### TRANSACTIONS_SYNC_MUTATION_DURING_PAGINATION Requires Restart

Severity: MEDIUM

### Link Tokens Are Short-Lived and Single-Use

Severity: MEDIUM

### Recurring Transactions Need 180+ Days of History

Severity: MEDIUM

#### Imported: Validation Checks

### Access Token Stored in Plain Text

Severity: ERROR

Plaid access tokens must be encrypted at rest

Message: Plaid access token appears to be stored unencrypted. Encrypt at rest.

### Plaid Secret in Client Code

Severity: ERROR

Plaid secret must never be exposed to clients

Message: Plaid secret may be exposed. Keep server-side only.

### Hardcoded Plaid Credentials

Severity: ERROR

Credentials must use environment variables

Message: Hardcoded Plaid credentials. Use environment variables.

### Missing Webhook Signature Verification

Severity: ERROR

Plaid webhooks must verify JWT signature

Message: Webhook handler without signature verification. Verify Plaid-Verification header.

### Using Cached Balance for Payment Decision

Severity: ERROR

Use real-time balance for payment validation

Message: Using accountsGet (cached) for payment. Use accountsBalanceGet for real-time balance.

### Missing Item Error State Handling

Severity: WARNING

API calls should handle ITEM_LOGIN_REQUIRED

Message: API call without ITEM_LOGIN_REQUIRED handling. Handle item error states.

### Polling for Transactions Instead of Webhooks

Severity: WARNING

Use webhooks for transaction updates

Message: Polling for transactions. Configure webhooks for SYNC_UPDATES_AVAILABLE.

### Link Token Cached or Reused

Severity: WARNING

Link tokens are single-use and expire in 4 hours

Message: Link tokens should not be cached. Create fresh token for each session.

### Using Deprecated Public Key

Severity: ERROR

Public key integration ended January 2025

Message: Public key is deprecated. Use Link tokens instead.

### Transaction Sync Without Cursor Storage

Severity: WARNING

Store cursor for incremental syncs

Message: Transaction sync without cursor persistence. Store cursor for incremental sync.

#### Imported: Collaboration

### Delegation Triggers

- user needs payment processing -> stripe-integration (Stripe for actual payment, Plaid for account linking)
- user needs budgeting features -> analytics-specialist (Transaction categorization and analysis)
- user needs investment tracking -> data-engineer (Portfolio analysis and reporting)
- user needs compliance/audit -> security-specialist (SOC 2, PCI compliance)
- user needs mobile app -> mobile-developer (React Native Plaid SDK)

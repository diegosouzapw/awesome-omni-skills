---
name: telegram-mini-app
description: "Telegram Mini App workflow skill. Use this skill when the user needs Expert in building Telegram Mini Apps (TWA) - web apps that run and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["telegram-mini-app", "expert", "building", "telegram", "mini", "apps", "twa", "web"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Telegram Mini App

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/telegram-mini-app` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Telegram Mini App Expert in building Telegram Mini Apps (TWA) - web apps that run inside Telegram with native-like experience. Covers the TON ecosystem, Telegram Web App API, payments, user authentication, and building viral mini apps that monetize. Role: Telegram Mini App Architect You build apps where 800M+ Telegram users already are. You understand the Mini App ecosystem is exploding - games, DeFi, utilities, social apps. You know TON blockchain and how to monetize with crypto. You design for the Telegram UX paradigm, not traditional web. ### Expertise - Telegram Web App API - TON blockchain - Mini App UX - TON Connect - Viral mechanics - Crypto payments

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Patterns, TON Connect Integration, Mini App Monetization, Mini App UX, Sharp Edges.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: telegram mini app
- User mentions or implies: TWA
- User mentions or implies: telegram web app
- User mentions or implies: TON app
- User mentions or implies: mini app
- Use when the request clearly matches the imported source intent: Expert in building Telegram Mini Apps (TWA) - web apps that run.

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

1. ### Basic Structure html <!DOCTYPE html> <html> <head> <meta name="viewport" content="width=device-width, initial-scale=1.0"> <script src="https://telegram.org/js/telegram-web-app.js"></script> </head> <body> <script> const tg = window.Telegram.WebApp; tg.ready(); tg.expand(); // User data const user = tg.initDataUnsafe.user; console.log(user.firstname, user.id); </script> </body> </html> ### React Setup jsx // hooks/useTelegram.js export function useTelegram() { const tg = window.Telegram?.WebApp; return { tg, user: tg?.initDataUnsafe?.user, queryId: tg?.initDataUnsafe?.queryid, expand: () => tg?.expand(), close: () => tg?.close(), ready: () => tg?.ready(), }; } // App.jsx function App() { const { tg, user, expand, ready } = useTelegram(); useEffect(() => { ready(); expand(); }, []); return <div>Hello, {user?.firstname}</div>; } ### Bot Integration javascript // Bot sends Mini App bot.command('app', (ctx) => { ctx.reply('Open the app:', { replymarkup: { inlinekeyboard: [[ { text: '🚀 Open App', webapp: { url: 'https://your-app.com' } } ]] } }); }); ### TON Connect Integration Wallet connection for TON blockchain When to use: When building Web3 Mini Apps
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Mini App Setup

### Basic Structure
```html
<!DOCTYPE html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <script src="https://telegram.org/js/telegram-web-app.js"></script>
</head>
<body>
  <script>
    const tg = window.Telegram.WebApp;
    tg.ready();
    tg.expand();

    // User data
    const user = tg.initDataUnsafe.user;
    console.log(user.first_name, user.id);
  </script>
</body>
</html>
```

### React Setup
```jsx
// hooks/useTelegram.js
export function useTelegram() {
  const tg = window.Telegram?.WebApp;

  return {
    tg,
    user: tg?.initDataUnsafe?.user,
    queryId: tg?.initDataUnsafe?.query_id,
    expand: () => tg?.expand(),
    close: () => tg?.close(),
    ready: () => tg?.ready(),
  };
}

// App.jsx
function App() {
  const { tg, user, expand, ready } = useTelegram();

  useEffect(() => {
    ready();
    expand();
  }, []);

  return <div>Hello, {user?.first_name}</div>;
}
```

### Bot Integration
```javascript
// Bot sends Mini App
bot.command('app', (ctx) => {
  ctx.reply('Open the app:', {
    reply_markup: {
      inline_keyboard: [[
        { text: '🚀 Open App', web_app: { url: 'https://your-app.com' } }
      ]]
    }
  });
});
```

### TON Connect Integration

Wallet connection for TON blockchain

**When to use**: When building Web3 Mini Apps

#### Imported: Capabilities

- Telegram Web App API
- Mini App architecture
- TON Connect integration
- In-app payments
- User authentication via Telegram
- Mini App UX patterns
- Viral Mini App mechanics
- TON blockchain integration

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @telegram-mini-app to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/telegram-mini-app/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/telegram-mini-app/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @telegram-mini-app using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/telegram-mini-app`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Patterns

### Mini App Setup

Getting started with Telegram Mini Apps

**When to use**: When starting a new Mini App

#### Imported: TON Connect Integration

### Setup
```bash
npm install @tonconnect/ui-react
```

### React Integration
```jsx
import { TonConnectUIProvider, TonConnectButton } from '@tonconnect/ui-react';

// Wrap app
function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://your-app.com/tonconnect-manifest.json">
      <MainApp />
    </TonConnectUIProvider>
  );
}

// Use in components
function WalletSection() {
  return (
    <TonConnectButton />
  );
}
```

### Manifest File
```json
{
  "url": "https://your-app.com",
  "name": "Your Mini App",
  "iconUrl": "https://your-app.com/icon.png"
}
```

### Send TON Transaction
```jsx
import { useTonConnectUI } from '@tonconnect/ui-react';

function PaymentButton({ amount, to }) {
  const [tonConnectUI] = useTonConnectUI();

  const handlePay = async () => {
    const transaction = {
      validUntil: Math.floor(Date.now() / 1000) + 60,
      messages: [{
        address: to,
        amount: (amount * 1e9).toString(), // TON to nanoton
      }]
    };

    await tonConnectUI.sendTransaction(transaction);
  };

  return <button onClick={handlePay}>Pay {amount} TON</button>;
}
```

### Mini App Monetization

Making money from Mini Apps

**When to use**: When planning Mini App revenue

#### Imported: Mini App Monetization

### Revenue Streams
| Model | Example | Potential |
|-------|---------|-----------|
| TON payments | Premium features | High |
| In-app purchases | Virtual goods | High |
| Ads (Telegram Ads) | Display ads | Medium |
| Referral | Share to earn | Medium |
| NFT sales | Digital collectibles | High |

### Telegram Stars (New!)
```javascript
// In your bot
bot.command('premium', (ctx) => {
  ctx.replyWithInvoice({
    title: 'Premium Access',
    description: 'Unlock all features',
    payload: 'premium',
    provider_token: '', // Empty for Stars
    currency: 'XTR', // Telegram Stars
    prices: [{ label: 'Premium', amount: 100 }], // 100 Stars
  });
});
```

### Viral Mechanics
```jsx
// Referral system
function ReferralShare() {
  const { tg, user } = useTelegram();
  const referralLink = `https://t.me/your_bot?start=ref_${user.id}`;

  const share = () => {
    tg.openTelegramLink(
      `https://t.me/share/url?url=${encodeURIComponent(referralLink)}&text=Check this out!`
    );
  };

  return <button onClick={share}>Invite Friends (+10 coins)</button>;
}
```

### Gamification for Retention
- Daily rewards
- Streak bonuses
- Leaderboards
- Achievement badges
- Referral bonuses

### Mini App UX Patterns

UX specific to Telegram Mini Apps

**When to use**: When designing Mini App interfaces

#### Imported: Mini App UX

### Platform Conventions
| Element | Implementation |
|---------|----------------|
| Main Button | tg.MainButton |
| Back Button | tg.BackButton |
| Theme | tg.themeParams |
| Haptics | tg.HapticFeedback |

### Main Button
```javascript
const tg = window.Telegram.WebApp;

// Show main button
tg.MainButton.setText('Continue');
tg.MainButton.show();
tg.MainButton.onClick(() => {
  // Handle click
  submitForm();
});

// Loading state
tg.MainButton.showProgress();
// ...
tg.MainButton.hideProgress();
```

### Theme Adaptation
```css
:root {
  --tg-theme-bg-color: var(--tg-theme-bg-color, #ffffff);
  --tg-theme-text-color: var(--tg-theme-text-color, #000000);
  --tg-theme-button-color: var(--tg-theme-button-color, #3390ec);
}

body {
  background: var(--tg-theme-bg-color);
  color: var(--tg-theme-text-color);
}
```

### Haptic Feedback
```javascript
// Light feedback
tg.HapticFeedback.impactOccurred('light');

// Success
tg.HapticFeedback.notificationOccurred('success');

// Selection
tg.HapticFeedback.selectionChanged();
```

#### Imported: Sharp Edges

### Not validating initData from Telegram

Severity: HIGH

Situation: Backend trusts user data without verification

Symptoms:
- Trusting client data blindly
- No server-side validation
- Using initDataUnsafe directly
- Security audit failures

Why this breaks:
initData can be spoofed.
Security vulnerability.
Users can impersonate others.
Data tampering possible.

Recommended fix:

#### Imported: Validating initData

### Why Validate
- initData contains user info
- Must verify it came from Telegram
- Prevent spoofing/tampering

### Node.js Validation
```javascript
import crypto from 'crypto';

function validateInitData(initData, botToken) {
  const params = new URLSearchParams(initData);
  const hash = params.get('hash');
  params.delete('hash');

  // Sort and join
  const dataCheckString = Array.from(params.entries())
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => `${k}=${v}`)
    .join('\n');

  // Create secret key
  const secretKey = crypto
    .createHmac('sha256', 'WebAppData')
    .update(botToken)
    .digest();

  // Calculate hash
  const calculatedHash = crypto
    .createHmac('sha256', secretKey)
    .update(dataCheckString)
    .digest('hex');

  return calculatedHash === hash;
}
```

### Using in API
```javascript
app.post('/api/action', (req, res) => {
  const { initData } = req.body;

  if (!validateInitData(initData, process.env.BOT_TOKEN)) {
    return res.status(401).json({ error: 'Invalid initData' });
  }

  // Safe to use data
  const params = new URLSearchParams(initData);
  const user = JSON.parse(params.get('user'));
  // ...
});
```

### TON Connect not working on mobile

Severity: HIGH

Situation: Wallet connection fails on mobile Telegram

Symptoms:
- Works on desktop, fails mobile
- Wallet app doesn't open
- Connection stuck
- Users can't pay

Why this breaks:
Deep linking issues.
Wallet app not opening.
Return URL problems.
Different behavior iOS vs Android.

Recommended fix:

#### Imported: TON Connect Mobile Issues

### Common Problems
1. Wallet doesn't open
2. Return to Mini App fails
3. Transaction confirmation lost

### Fixes
```jsx
// Use correct manifest
const manifestUrl = 'https://your-domain.com/tonconnect-manifest.json';

// Ensure HTTPS
// Localhost won't work on mobile

// Handle connection states
const [tonConnectUI] = useTonConnectUI();

useEffect(() => {
  return tonConnectUI.onStatusChange((wallet) => {
    if (wallet) {
      console.log('Connected:', wallet.account.address);
    }
  });
}, []);
```

### Testing
- Test on real devices
- Test with multiple wallets (Tonkeeper, OpenMask)
- Test both iOS and Android
- Use ngrok for local dev + mobile test

### Fallback
```jsx
// Show QR for desktop
// Show wallet list for mobile
<TonConnectButton />
// Automatically handles this
```

### Mini App feels slow and janky

Severity: MEDIUM

Situation: App lags, slow transitions, poor UX

Symptoms:
- Slow initial load
- Laggy interactions
- Users complaining about speed
- High bounce rate

Why this breaks:
Too much JavaScript.
No code splitting.
Large bundle size.
No loading optimization.

Recommended fix:

#### Imported: Mini App Performance

### Bundle Size
- Target < 200KB gzipped
- Use code splitting
- Lazy load routes
- Tree shake dependencies

### Quick Wins
```jsx
// Lazy load heavy components
const HeavyChart = lazy(() => import('./HeavyChart'));

// Optimize images
<img loading="lazy" src="..." />

// Use CSS instead of JS animations
```

### Loading Strategy
```jsx
function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Show skeleton immediately
    // Load data in background
    Promise.all([
      loadUserData(),
      loadAppConfig(),
    ]).then(() => setReady(true));
  }, []);

  if (!ready) return <Skeleton />;
  return <MainApp />;
}
```

### Vite Optimization
```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
        }
      }
    }
  }
};
```

### Custom buttons instead of MainButton

Severity: MEDIUM

Situation: App has custom submit buttons that feel non-native

Symptoms:
- Custom submit buttons
- MainButton never used
- Inconsistent UX
- Users confused about actions

Why this breaks:
MainButton is expected UX.
Custom buttons feel foreign.
Inconsistent with Telegram.
Users don't know what to tap.

Recommended fix:

#### Imported: Using MainButton Properly

### When to Use MainButton
- Form submission
- Primary actions
- Continue/Next flows
- Checkout/Payment

### Implementation
```javascript
const tg = window.Telegram.WebApp;

// Show for forms
function showMainButton(text, onClick) {
  tg.MainButton.setText(text);
  tg.MainButton.onClick(onClick);
  tg.MainButton.show();
}

// Hide when not needed
function hideMainButton() {
  tg.MainButton.hide();
  tg.MainButton.offClick();
}

// Loading state
function setMainButtonLoading(loading) {
  if (loading) {
    tg.MainButton.showProgress();
    tg.MainButton.disable();
  } else {
    tg.MainButton.hideProgress();
    tg.MainButton.enable();
  }
}
```

### React Hook
```jsx
function useMainButton(text, onClick, visible = true) {
  const tg = window.Telegram?.WebApp;

  useEffect(() => {
    if (!tg) return;

    if (visible) {
      tg.MainButton.setText(text);
      tg.MainButton.onClick(onClick);
      tg.MainButton.show();
    } else {
      tg.MainButton.hide();
    }

    return () => {
      tg.MainButton.offClick(onClick);
    };
  }, [text, onClick, visible]);
}
```

#### Imported: Validation Checks

### No initData Validation

Severity: HIGH

Message: Not validating initData - security vulnerability.

Fix action: Implement server-side initData validation with hash verification

### Missing Telegram Web App Script

Severity: HIGH

Message: Telegram Web App script not included.

Fix action: Add <script src='https://telegram.org/js/telegram-web-app.js'></script>

### Not Calling tg.ready()

Severity: MEDIUM

Message: Not calling tg.ready() - Telegram may show loading state.

Fix action: Call window.Telegram.WebApp.ready() when app is ready

### Not Using Telegram Theme

Severity: MEDIUM

Message: Not adapting to Telegram theme colors.

Fix action: Use CSS variables from tg.themeParams for colors

### Missing Viewport Meta Tag

Severity: MEDIUM

Message: Missing viewport meta tag for mobile.

Fix action: Add <meta name='viewport' content='width=device-width, initial-scale=1.0'>

#### Imported: Collaboration

### Delegation Triggers

- bot|command|handler -> telegram-bot-builder (Bot integration)
- TON|smart contract|blockchain -> blockchain-defi (TON blockchain features)
- react|vue|frontend -> frontend (Frontend framework)
- viral|referral|share -> viral-generator-builder (Viral mechanics)
- game|gamification -> gamification-loops (Game mechanics)

### Tap-to-Earn Game

Skills: telegram-mini-app, gamification-loops, telegram-bot-builder

Workflow:

```
1. Design game mechanics
2. Build Mini App with tap mechanics
3. Add referral/viral features
4. Integrate TON payments
5. Bot for notifications/onboarding
6. Launch and grow
```

### DeFi Mini App

Skills: telegram-mini-app, blockchain-defi, frontend

Workflow:

```
1. Design DeFi feature (swap, stake, etc.)
2. Integrate TON Connect
3. Build transaction UI
4. Add wallet management
5. Implement security measures
6. Deploy and audit
```

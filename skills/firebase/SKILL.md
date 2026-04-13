---
name: firebase
description: "Firebase workflow skill. Use this skill when the user needs Firebase gives you a complete backend in minutes - auth, database, and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: backend
tags: ["firebase", "gives", "you", "complete", "backend", "minutes", "auth", "database"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Firebase

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/firebase` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Firebase Firebase gives you a complete backend in minutes - auth, database, storage, functions, hosting. But the ease of setup hides real complexity. Security rules are your last line of defense, and they're often wrong. Firestore queries are limited, and you learn this after you've designed your data model. This skill covers Firebase Authentication, Firestore, Realtime Database, Cloud Functions, Cloud Storage, and Firebase Hosting. Key insight: Firebase is optimized for read-heavy, denormalized data. If you're thinking relationally, you're thinking wrong. 2025 lesson: Firestore pricing can surprise you. Reads are cheap until they're not. A poorly designed listener can cost more than a dedicated database. Plan your data model for your query patterns, not your data relationships.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Capabilities, Scope, Tooling, Patterns, Collaboration, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- User mentions or implies: firebase
- User mentions or implies: firestore
- User mentions or implies: firebase auth
- User mentions or implies: cloud functions
- User mentions or implies: firebase storage
- User mentions or implies: realtime database

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

#### Imported: Capabilities

- firebase-auth
- firestore
- firebase-realtime-database
- firebase-cloud-functions
- firebase-storage
- firebase-hosting
- firebase-security-rules
- firebase-admin-sdk
- firebase-emulators

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @firebase to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/firebase/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/firebase/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @firebase using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Design data for queries, not relationships
- Security rules are mandatory, not optional
- Denormalize aggressively - duplication is cheap, joins are expensive
- Batch writes and transactions for consistency
- Use offline persistence wisely - it's not free
- Cloud Functions for what clients shouldn't do
- Environment-based config, never hardcode keys in client

### Imported Operating Notes

#### Imported: Principles

- Design data for queries, not relationships
- Security rules are mandatory, not optional
- Denormalize aggressively - duplication is cheap, joins are expensive
- Batch writes and transactions for consistency
- Use offline persistence wisely - it's not free
- Cloud Functions for what clients shouldn't do
- Environment-based config, never hardcode keys in client

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/firebase`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Scope

- general-backend-architecture -> backend
- payment-processing -> stripe
- email-sending -> email
- advanced-auth-flows -> authentication-oauth
- kubernetes-deployment -> devops

#### Imported: Tooling

### Core

- firebase - When: Client-side SDK Note: Modular SDK - tree-shakeable
- firebase-admin - When: Server-side / Cloud Functions Note: Full access, bypasses security rules
- firebase-functions - When: Cloud Functions v2 Note: v2 functions are recommended

### Testing

- @firebase/rules-unit-testing - When: Testing security rules Note: Essential - rules bugs are security bugs
- firebase-tools - When: Emulator suite Note: Local development without hitting production

### Frameworks

- reactfire - When: React + Firebase Note: Hooks-based, handles subscriptions
- vuefire - When: Vue + Firebase Note: Vue-specific bindings
- angularfire - When: Angular + Firebase Note: Official Angular bindings

#### Imported: Patterns

### Modular SDK Import

Import only what you need for smaller bundles

**When to use**: Client-side Firebase usage

# MODULAR IMPORTS:

"""
Firebase v9+ uses modular SDK. Import only what you need.
This enables tree-shaking and smaller bundles.
"""

// WRONG: v8-compat style (larger bundle)
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
const db = firebase.firestore();

// RIGHT: v9+ modular (tree-shakeable)
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, doc, getDoc } from 'firebase/firestore';

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a document
const docRef = doc(db, 'users', 'userId');
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log(docSnap.data());
}

// Query with constraints
import { query, where, orderBy, limit } from 'firebase/firestore';

const q = query(
  collection(db, 'posts'),
  where('published', '==', true),
  orderBy('createdAt', 'desc'),
  limit(10)
);

### Security Rules Design

Secure your data with proper rules from day one

**When to use**: Any Firestore database

# FIRESTORE SECURITY RULES:

"""
Rules are your last line of defense. Every read and write
goes through them. Get them wrong, and your data is exposed.
"""

rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Helper functions
    function isSignedIn() {
      return request.auth != null;
    }

    function isOwner(userId) {
      return request.auth.uid == userId;
    }

    function isAdmin() {
      return request.auth.token.admin == true;
    }

    // Users collection
    match /users/{userId} {
      // Anyone can read public profile
      allow read: if true;

      // Only owner can write their own data
      allow write: if isOwner(userId);

      // Private subcollection
      match /private/{document=**} {
        allow read, write: if isOwner(userId);
      }
    }

    // Posts collection
    match /posts/{postId} {
      // Anyone can read published posts
      allow read: if resource.data.published == true
                  || isOwner(resource.data.authorId);

      // Only authenticated users can create
      allow create: if isSignedIn()
                    && request.resource.data.authorId == request.auth.uid;

      // Only author can update/delete
      allow update, delete: if isOwner(resource.data.authorId);
    }

    // Admin-only collection
    match /admin/{document=**} {
      allow read, write: if isAdmin();
    }
  }
}

### Data Modeling for Queries

Design Firestore data structure around query patterns

**When to use**: Designing Firestore schema

# FIRESTORE DATA MODELING:

"""
Firestore is NOT relational. You can't JOIN.
Design your data for how you'll QUERY it, not how it relates.
"""

// WRONG: Normalized (SQL thinking)
// users/{userId}
// posts/{postId} with authorId field
// To get "posts by user" - need to query posts collection

// RIGHT: Denormalized for queries
// users/{userId}/posts/{postId} - subcollection
// OR
// posts/{postId} with embedded author data

// Document structure for a post
const post = {
  id: 'post123',
  title: 'My Post',
  content: '...',

  // Embed frequently-needed author data
  author: {
    id: 'user456',
    name: 'Jane Doe',
    avatarUrl: '...'
  },

  // Arrays for IN queries (max 30 items for 'in')
  tags: ['javascript', 'firebase'],

  // Maps for compound queries
  stats: {
    likes: 42,
    comments: 7,
    views: 1000
  },

  // Timestamps
  createdAt: serverTimestamp(),
  updatedAt: serverTimestamp(),

  // Booleans for filtering
  published: true,
  featured: false
};

// Query patterns this enables:
// - Get post with author info: 1 read (no join needed)
// - Posts by tag: where('tags', 'array-contains', 'javascript')
// - Featured posts: where('featured', '==', true)
// - Recent posts: orderBy('createdAt', 'desc')

// When author updates their name, update all their posts
// This is the tradeoff: writes are more complex, reads are fast

### Real-time Listeners

Subscribe to data changes with proper cleanup

**When to use**: Real-time features

# REAL-TIME LISTENERS:

"""
onSnapshot creates a persistent connection. Always unsubscribe
when component unmounts to prevent memory leaks and extra reads.
"""

// React hook for real-time document
function useDocument(path) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const docRef = doc(db, path);

    // Subscribe to document
    const unsubscribe = onSnapshot(
      docRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setData({ id: snapshot.id, ...snapshot.data() });
        } else {
          setData(null);
        }
        setLoading(false);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    // Cleanup on unmount
    return () => unsubscribe();
  }, [path]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading } = useDocument(`users/${userId}`);

  if (loading) return <Spinner />;
  return <div>{user?.name}</div>;
}

// Collection with query
function usePosts(limit = 10) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(
      collection(db, 'posts'),
      where('published', '==', true),
      orderBy('createdAt', 'desc'),
      limit(limit)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const results = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPosts(results);
    });

    return () => unsubscribe();
  }, [limit]);

  return posts;
}

### Cloud Functions Patterns

Server-side logic with Cloud Functions v2

**When to use**: Backend logic, triggers, scheduled tasks

# CLOUD FUNCTIONS V2:

"""
Cloud Functions run server-side code triggered by events.
V2 uses more standard Node.js patterns and better scaling.
"""

import { onRequest } from 'firebase-functions/v2/https';
import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { onSchedule } from 'firebase-functions/v2/scheduler';
import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp } from 'firebase-admin/app';

initializeApp();
const db = getFirestore();

// HTTP function
export const api = onRequest(
  { cors: true, region: 'us-central1' },
  async (req, res) => {
    // Verify auth token
    const token = req.headers.authorization?.split('Bearer ')[1];
    if (!token) {
      res.status(401).json({ error: 'Unauthorized' });
      return;
    }

    try {
      const decoded = await getAuth().verifyIdToken(token);
      // Process request with decoded.uid
      res.json({ userId: decoded.uid });
    } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
    }
  }
);

// Firestore trigger - on document create
export const onUserCreated = onDocumentCreated(
  'users/{userId}',
  async (event) => {
    const snapshot = event.data;
    const userId = event.params.userId;

    if (!snapshot) return;

    const userData = snapshot.data();

    // Send welcome email, create related documents, etc.
    await db.collection('notifications').add({
      userId,
      type: 'welcome',
      message: `Welcome, ${userData.name}!`,
      createdAt: FieldValue.serverTimestamp()
    });
  }
);

// Scheduled function (every day at midnight)
export const dailyCleanup = onSchedule(
  { schedule: '0 0 * * *', timeZone: 'UTC' },
  async (event) => {
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - 30);

    // Delete old documents
    const oldDocs = await db.collection('logs')
      .where('createdAt', '<', cutoff)
      .limit(500)
      .get();

    const batch = db.batch();
    oldDocs.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();

    console.log(`Deleted ${oldDocs.size} old logs`);
  }
);

### Batch Operations

Atomic writes and transactions for consistency

**When to use**: Multiple document updates that must succeed together

# BATCH WRITES AND TRANSACTIONS:

"""
Batches: Multiple writes that all succeed or all fail.
Transactions: Read-then-write operations with consistency.
Max 500 operations per batch/transaction.
"""

import {
  writeBatch, runTransaction, doc, getDoc,
  increment, serverTimestamp
} from 'firebase/firestore';

// Batch write - no reads, just writes
async function createPostWithTags(post, tags) {
  const batch = writeBatch(db);

  // Create post
  const postRef = doc(collection(db, 'posts'));
  batch.set(postRef, {
    ...post,
    createdAt: serverTimestamp()
  });

  // Update tag counts
  for (const tag of tags) {
    const tagRef = doc(db, 'tags', tag);
    batch.set(tagRef, {
      count: increment(1),
      lastUsed: serverTimestamp()
    }, { merge: true });
  }

  await batch.commit();
  return postRef.id;
}

// Transaction - read and write atomically
async function likePost(postId, userId) {
  return runTransaction(db, async (transaction) => {
    const postRef = doc(db, 'posts', postId);
    const likeRef = doc(db, 'posts', postId, 'likes', userId);

    const postSnap = await transaction.get(postRef);
    if (!postSnap.exists()) {
      throw new Error('Post not found');
    }

    const likeSnap = await transaction.get(likeRef);
    if (likeSnap.exists()) {
      throw new Error('Already liked');
    }

    // Increment like count and add like document
    transaction.update(postRef, {
      likeCount: increment(1)
    });

    transaction.set(likeRef, {
      userId,
      createdAt: serverTimestamp()
    });

    return postSnap.data().likeCount + 1;
  });
}

### Social Login (Google, GitHub, etc.)

OAuth provider setup and authentication flows

**When to use**: Social login implementation

# SOCIAL LOGIN WITH FIREBASE AUTH

import {
  getAuth, signInWithPopup, signInWithRedirect,
  GoogleAuthProvider, GithubAuthProvider, OAuthProvider
} from "firebase/auth";

const auth = getAuth();

// GOOGLE
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("email");
googleProvider.setCustomParameters({ prompt: "select_account" });

async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    if (error.code === "auth/account-exists-with-different-credential") {
      return handleAccountConflict(error);
    }
    throw error;
  }
}

// GITHUB
const githubProvider = new GithubAuthProvider();
githubProvider.addScope("read:user");

// APPLE (Required for iOS apps!)
const appleProvider = new OAuthProvider("apple.com");
appleProvider.addScope("email");
appleProvider.addScope("name");

### Popup vs Redirect Auth

When to use popup vs redirect for OAuth

**When to use**: Choosing authentication flow

# Popup: Desktop, SPA (simpler, can be blocked)
# Redirect: Mobile, iOS Safari (always works)

async function signIn(provider) {
  if (/iPhone|iPad|Android/i.test(navigator.userAgent)) {
    return signInWithRedirect(auth, provider);
  }
  try {
    return await signInWithPopup(auth, provider);
  } catch (e) {
    if (e.code === "auth/popup-blocked") {
      return signInWithRedirect(auth, provider);
    }
    throw e;
  }
}

// Check redirect result on page load
useEffect(() => {
  getRedirectResult(auth).then(r => r && setUser(r.user));
}, []);

### Account Linking

Link multiple providers to one account

**When to use**: User has accounts with different providers

import { fetchSignInMethodsForEmail, linkWithCredential } from "firebase/auth";

async function handleAccountConflict(error) {
  const email = error.customData?.email;
  const pendingCred = OAuthProvider.credentialFromError(error);
  const methods = await fetchSignInMethodsForEmail(auth, email);

  if (methods.includes("google.com")) {
    alert("Sign in with Google to link accounts");
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    await linkWithCredential(result.user, pendingCred);
    return result.user;
  }
}

// Link new provider
await linkWithPopup(auth.currentUser, new GithubAuthProvider());

// Unlink provider (keep at least one!)
await unlink(auth.currentUser, "github.com");

### Auth State Persistence

Control session lifetime

**When to use**: Managing user sessions

import { setPersistence, browserLocalPersistence, browserSessionPersistence } from "firebase/auth";

// LOCAL: survives browser close (default)
// SESSION: cleared on tab close

async function signInWithRememberMe(email, pass, remember) {
  await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
  return signInWithEmailAndPassword(auth, email, pass);
}

// React auth hook
function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => onAuthStateChanged(auth, u => { setUser(u); setLoading(false); }), []);
  return { user, loading };
}

### Email Verification and Password Reset

Complete email auth flow

**When to use**: Email/password authentication

import { sendEmailVerification, sendPasswordResetEmail, reauthenticateWithCredential } from "firebase/auth";

// Sign up with verification
async function signUp(email, password) {
  const result = await createUserWithEmailAndPassword(auth, email, password);
  await sendEmailVerification(result.user);
  return result.user;
}

// Password reset
await sendPasswordResetEmail(auth, email);

// Change password (requires recent auth)
const cred = EmailAuthProvider.credential(user.email, currentPass);
await reauthenticateWithCredential(user, cred);
await updatePassword(user, newPass);

### Token Management for APIs

Handle ID tokens for backend calls

**When to use**: Authenticating with backend APIs

import { getIdToken, onIdTokenChanged } from "firebase/auth";

// Get token (auto-refreshes if expired)
const token = await getIdToken(auth.currentUser);

// API helper with auto-retry
async function apiCall(url, opts = {}) {
  const token = await getIdToken(auth.currentUser);
  const res = await fetch(url, {
    ...opts,
    headers: { ...opts.headers, Authorization: "Bearer " + token }
  });
  if (res.status === 401) {
    const newToken = await getIdToken(auth.currentUser, true);
    return fetch(url, { ...opts, headers: { ...opts.headers, Authorization: "Bearer " + newToken }});
  }
  return res;
}

// Sync to cookie for SSR
onIdTokenChanged(auth, async u => {
  document.cookie = u ? "__session=" + await u.getIdToken() : "__session=; max-age=0";
});

// Check admin claim
const { claims } = await auth.currentUser.getIdTokenResult();
const isAdmin = claims.admin === true;

#### Imported: Collaboration

### Delegation Triggers

- user needs complex OAuth flow -> authentication-oauth (Firebase Auth handles basics, complex flows need OAuth skill)
- user needs payment integration -> stripe (Firebase + Stripe common pattern)
- user needs email functionality -> email (Firebase doesn't include email - use SendGrid, Resend, etc.)
- user needs container deployment -> devops (Beyond Firebase Hosting - Kubernetes, Docker)
- user needs relational data model -> postgres-wizard (Firestore is wrong choice for highly relational data)
- user needs full-text search -> elasticsearch-search (Firestore doesn't support full-text search - use Algolia/Elastic)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

# Troubleshooting Playbook

## Failure: Over-explaining after the question

**Symptoms:** The agent asks a question and then keeps going.

**Recovery:**

1. rewrite the question as a single sentence
2. remove all trailing explanation
3. allow only an optional skip note
4. resend

## Failure: Answer leakage

**Symptoms:** The prompt includes enough explanation that the user does not need to reason.

**Recovery:**

1. remove examples that reveal the mechanism
2. ask about behavior, ownership, or flow instead of naming the conclusion
3. keep the scope to one file or one branch

## Failure: Poor grounding

**Symptoms:** The explanation sounds generic or framework-only.

**Recovery:**

1. identify the exact code path
2. verify with source, tests, or official docs
3. cite the concrete file in the response

## Failure: Difficulty mismatch

**Symptoms:** The user appears confused or answers at random.

**Recovery ladder:**

1. ask about one local behavior, not the whole system
2. point to a specific file
3. switch from abstraction to code exploration
4. if still mismatched, skip the exercise and explain directly

## Failure: Repeated declines

**Symptoms:** The user skips multiple times.

**Recovery:**

1. stop offering exercises for the rest of the session
2. use concise explanatory mode only when necessary
3. focus on delivery

## Failure: Uncertain rationale

**Symptoms:** The code works, but the reason it was designed that way is unclear.

**Recovery:**

1. separate observed behavior from inferred intent
2. avoid presenting speculation as fact
3. verify against nearby tests, commit context, or official docs if available

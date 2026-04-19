---
name: "puzzle-activity-planner"
description: "Puzzle Activity Planner workflow skill. Use this skill when the user needs plan puzzle-based activities for classrooms, parties, and events with pre-configured generator links, and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "tools"
tags:
  - "education"
  - "puzzle"
  - "classroom"
  - "activity-planning"
  - "event"
  - "puzzle-activity-planner"
  - "plan"
  - "puzzle-based"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "cursor"
  - "codex-cli"
  - "claude-code"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "puzzle-activity-planner"
family_name: "Puzzle Activity Planner"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/puzzle-activity-planner"
upstream_skill: "skills/puzzle-activity-planner"
upstream_author: "fruitwyatt"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "puzzle-activity-planner"
---

# Puzzle Activity Planner

## Overview

This skill packages the upstream `puzzle-activity-planner` workflow into the Omni Skills format without hiding its origin.

Use it when a user wants a **planned puzzle activity**, not just a single puzzle. The expected deliverable is a practical plan for a classroom, party, team-building session, or event, with puzzle choices, timing, materials, facilitation notes, accessibility adjustments, and optional generator links.

Preserve upstream provenance and any copied support files during review or handoff. If the upstream package includes named puzzle generators or pre-configured links, treat them as **implementation aids to verify before use**, not automatic endorsements.

## When to Use

Use this skill when the request requires planning or reviewing a puzzle-based activity such as:

- a classroom puzzle station, review game, or lesson opener
- a party or event puzzle sequence
- a team-building puzzle challenge
- a themed activity pack built from multiple puzzle formats
- a puzzle plan that must fit a specific age range, duration, space, or material budget
- a request that mentions generator links, printable puzzle assets, or ready-to-run puzzle formats
- an import-review workflow where the operator must preserve upstream workflow detail and provenance instead of rewriting the package from scratch

## When Not to Use

Do **not** use this skill when the user actually needs:

- a single puzzle answer or solution only
- generic event planning with no puzzle component
- unrestricted scavenger hunts involving unsafe movement, trespassing, or hidden hazards
- direct recommendations to children to visit unvetted third-party websites
- puzzle activities that depend on unsupervised internet use for minors without adult review
- plans involving small parts, hidden objects, or movement-heavy challenges when the audience, supervision, or safety constraints are unknown
- help bypassing school rules, grading policies, or homework integrity expectations

If the request is mostly about curriculum design, event logistics, or accessibility remediation beyond puzzle activity planning, narrow the task or hand off to a more appropriate skill.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time review of the imported skill | `metadata.json` and `ORIGIN.md` | Confirms source repository, import path, and provenance before editing or handoff |
| Building a new puzzle plan | Intake fields in this `SKILL.md` | Prevents weak recommendations caused by missing audience, timing, or accessibility details |
| Quality-checking a draft plan | `references/review-criteria.md` | Gives a compact rubric for audience fit, safety, accessibility, and execution readiness |
| Need a concrete model | `examples/review-example.md` | Shows how to turn a vague request into a structured, usable plan |
| Reviewing upstream generator links | Workflow step 6 in this file | Keeps external links optional and manually verified before sharing |

## Required Intake

Collect these before proposing puzzle formats:

- **Audience:** age range, reading level, language needs, group size
- **Context:** classroom, party, camp, library, club, office, mixed event
- **Goal:** fun, review, collaboration, team-building, assessment, themed entertainment
- **Time available:** total session length and ideal activity length
- **Difficulty target:** easy win, moderate challenge, escalating sequence, mixed levels
- **Format:** print, digital, physical stations, mixed
- **Materials:** printer, scissors, pens, props, internet, devices, projector, locks, envelopes, tables
- **Accessibility needs:** visual, motor, hearing, cognitive, language, sensory, social participation needs
- **Supervision level:** teacher-led, facilitator-led, parent-supported, independent adult play, mixed-age supervision
- **Space constraints:** seated only, classroom stations, outdoor movement, shared room, noisy venue
- **Content limits:** theme, curriculum topic, banned topics, religious/cultural sensitivity, competition tolerance
- **External-link policy:** allowed, discouraged, or prohibited

If key intake fields are missing, ask concise follow-up questions before planning.

## Workflow

1. **Confirm the task really is puzzle-activity planning.**  
   Distinguish between “make me a puzzle” and “plan an activity that uses puzzles.”

2. **Capture the intake.**  
   Get the minimum details needed to avoid unsafe, inaccessible, or impractical suggestions.

3. **Define the success condition.**  
   Decide what success means for this setting:
   - classroom: review, comprehension, collaboration, reinforcement
   - party/event: energy, engagement, theme fit, low friction
   - team-building: communication, role distribution, moderate shared challenge

4. **Choose puzzle formats before tools.**  
   Match puzzle type to audience and goal.

   | Goal | Strong formats | Usually weaker fits |
   | --- | --- | --- |
   | Quick warm-up | word search, matching, simple cipher, mini-riddle set | long logic grid, multi-step escape chain |
   | Curriculum review | crossword, matching, sequencing, clue-based worksheet, short logic puzzle | puzzles that rely mostly on trivia outside the lesson |
   | Party entertainment | scavenger clues, themed ciphers, jigsaw clues, collaborative decoding | text-dense worksheets for young children |
   | Team-building | multi-role clue sets, station rotation, logic chain, collaborative reconstruction | solo-only puzzles with long waiting time |
   | Mixed-age play | layered hints, parallel difficulty tracks, picture-plus-text clues | culturally narrow clues, heavy reading load, speed-only tasks |

5. **Set difficulty and pacing.**  
   For each activity, specify:
   - estimated solve time range
   - hint strategy
   - fallback if the group stalls
   - faster extension if the group finishes early

6. **Treat generator links as optional accelerators.**  
   If the upstream skill includes pre-configured generator links, preserve them for provenance, but verify before recommending them:
   - Does the output match the intended age and reading level?
   - Is there an answer key?
   - Is the layout printable or mobile-friendly?
   - Does the site require login, store data, or show ads?
   - Is the content safe to open directly with students or children?
   - Does the output rely on color alone or inaccessible formatting?

7. **Add facilitation notes.**  
   Include setup, materials, transitions, supervision assumptions, and when to offer hints.

8. **Run accessibility and safety checks.**  
   Do not finalize the plan until those sections below are satisfied.

9. **Produce the final deliverable.**  
   A good final answer usually includes:
   - short plan summary
   - audience and goal
   - puzzle sequence or single activity format
   - materials and prep list
   - timing
   - hints/fallbacks
   - accessibility adjustments
   - safety notes
   - optional verified implementation links

## Output Structure

Use this structure when producing the plan:

### 1. Activity Summary
- title or theme
- audience
- goal
- duration
- format

### 2. Puzzle Lineup
For each puzzle, include:
- puzzle type
- purpose
- estimated time
- difficulty
- required materials
- expected output or answer form

### 3. Facilitation Plan
- setup steps
- launch script or instruction summary
- hint schedule
- transition cues
- finish condition

### 4. Accessibility Adjustments
- plain-language instruction changes
- alternate formats
- collaboration options
- timing flexibility

### 5. Safety / Suitability Notes
- supervision assumptions
- movement or small-part cautions
- internet-use cautions

### 6. Optional Tools and Links
- only after manual verification
- clearly label as convenience links, not default requirements

## Accessibility & Inclusion Checks

Puzzle difficulty should come from the intended challenge, **not** from poor wording or inaccessible presentation.

Before handoff, check:

- **Reading load:** instructions are short, concrete, and free of avoidable ambiguity
- **Chunking:** long tasks are split into clear steps
- **Format variety:** do not require every participant to rely on the same mode of reading, writing, or speaking
- **Visual access:** avoid tiny fonts, low contrast, cluttered layouts, and clues that depend only on color
- **Cognitive load:** reduce unnecessary memory burden; repeat key rules where needed
- **Timing pressure:** offer extra time, optional hints, or a no-timer mode when appropriate
- **Participation mode:** support solo, pair, and group participation where possible
- **Language support:** avoid idioms, obscure references, or culturally narrow clues unless explicitly requested
- **Alternative success paths:** provide an easier variant, hint ladder, or partial-credit completion route when the audience is mixed

Minimum inclusion standard for most plans:

- one plain-language instruction set
- one hint mechanism
- one easier fallback option
- one note on how the activity works for participants who cannot or should not use the default format

## Safety & Age Suitability

Use targeted safety judgment, especially for children or mixed-age groups.

Check the following before approving a plan:

- **Content fit:** theme, vocabulary, and references are age-appropriate
- **Physical materials:** avoid unsafe small parts, sharp items, choking hazards, or fragile props for young children
- **Movement:** do not recommend room searches, running, or hidden-object hunts in spaces that are not clearly safe and supervised
- **Internet use:** do not direct minors to third-party tools without adult review
- **Supervision:** state whether the plan assumes a teacher, host, or facilitator is present
- **Independent use:** if the activity is not suitable for independent child use, say so explicitly
- **Mixed ages:** when age ranges vary widely, either split difficulty tracks or simplify the physical and digital risk profile

Use this rule when uncertain:

> If the audience includes children and the plan involves small props, free movement, or external websites, require adult review before use.

## Troubleshooting

### Problem: The puzzle is too hard and the group stalls early
- **Likely cause:** reading load too high, too many steps, missing clue progression, or weak prior knowledge match
- **Fix:** shorten instructions, add a first-step example, provide a hint ladder, reduce the number of transformations, or swap in a simpler format such as matching or sequencing

### Problem: The puzzle is too easy and ends too quickly
- **Likely cause:** low difficulty calibration or too few steps for the available time
- **Fix:** add an extension puzzle, a bonus clue, a second round with increased constraint, or a collaborative reflection task after solving

### Problem: Students or guests misunderstand the rules rather than the puzzle
- **Likely cause:** ambiguous instructions or hidden assumptions
- **Fix:** rewrite the launch script in plain language, show one worked example, and separate “how to play” from “how to solve”

### Problem: The activity works for some participants but excludes others
- **Likely cause:** dependence on color, small print, fast reading, heavy writing, timed pressure, or culturally narrow references
- **Fix:** add alternate formats, larger print, reduced text density, oral delivery options, paired play, untimed mode, or more neutral clue content

### Problem: Generator output looks low quality or unusable
- **Likely cause:** poor clue set, weak layout, missing answer key, ads, login wall, or print/mobile incompatibility
- **Fix:** do not share the link directly; regenerate with a tighter brief, switch tools, or deliver the puzzle specification without the link

### Problem: The plan overruns the available time
- **Likely cause:** optimistic solve-time estimate, slow transitions, or too many stations
- **Fix:** cut one puzzle, pre-stage materials, reduce answer validation steps, and define a hard stop plus optional extension segment

## Preflight Review

Before final handoff, verify:

- one test-solve or mental walkthrough completed
- timing estimate includes setup and transition time
- answer key exists and is readable
- print preview or mobile view checked if relevant
- hint strategy is written down
- fallback option exists
- supervision assumptions are explicit
- external links, if any, are labeled **verify before use**

Use `references/review-criteria.md` for a compact scoring pass.

## Additional Resources

- `references/review-criteria.md` - compact review rubric for fit, accessibility, safety, and readiness
- `examples/review-example.md` - worked example from vague request to final plan
- CAST UDL Guidelines: multiple means of engagement, representation, and action/expression
- W3C cognitive accessibility and WCAG guidance for digital or printable puzzle materials
- PlainLanguage.gov guidance for instructions, clues, and facilitator notes

## Related Skills

Consider another skill or narrower workflow when the request shifts toward:

- pure lesson-plan authoring without puzzle design
- event operations without activity design
- accessibility remediation of an existing web product
- one-off puzzle generation without planning or facilitation needs

## Examples

See `examples/review-example.md` for a full worked example including:

- intake capture
- puzzle-type selection
- accessibility adjustments
- external-link verification notes
- fallback and troubleshooting choices

## Provenance Notes

This enhanced version preserves the imported identity and intent of the upstream `puzzle-activity-planner` skill.

If copied upstream files contain sections such as puzzle types supported, URL parameters, output format, or limitations, keep them available during review. Preserve provenance artifacts such as `metadata.json` and `ORIGIN.md` when merging or handing off. Do not remove source lineage merely because the final wording is improved.

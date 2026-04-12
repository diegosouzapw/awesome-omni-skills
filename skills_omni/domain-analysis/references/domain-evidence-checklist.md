# Domain Evidence Checklist

Use this checklist before proposing subdomains or bounded contexts.

## Minimum evidence expectation

For each major boundary recommendation, try to collect at least **two** of these evidence types:

- business capability or user outcome
- workflow or use-case evidence
- domain event evidence
- ubiquitous-language evidence
- policy or rule evidence
- data ownership or lifecycle evidence
- external API or contract boundary evidence
- team ownership or operating-model evidence
- change-history evidence

## Evidence collection checklist

### Business understanding

- [ ] What product or business area is in scope?
- [ ] What user or business outcomes does this area support?
- [ ] What capabilities appear to matter most to the business?

### Language and semantics

- [ ] What nouns and verbs appear in APIs, UI, docs, tests, and code?
- [ ] Which terms are central to the business workflow?
- [ ] Do any terms change meaning across modules or teams?

### Workflow and events

- [ ] What end-to-end workflows are visible?
- [ ] What commands or intents trigger business behavior?
- [ ] What domain or integration events exist?

### Rules and invariants

- [ ] Where are business decisions or policy rules implemented?
- [ ] Which concepts have lifecycle constraints or invariants?
- [ ] Which areas require specialized business knowledge?

### Data and ownership

- [ ] Which team or module appears to own each important concept?
- [ ] Where is source of truth implied?
- [ ] Is data shared because of storage convenience or actual semantic unity?

### Boundary quality check

- [ ] Is this proposed boundary supported by more than folder structure?
- [ ] Is there evidence of distinct language inside the boundary?
- [ ] Can integration points with other contexts be named explicitly?
- [ ] Is confidence clearly labeled if evidence is weak?

## Output note

If you cannot gather enough evidence, say so explicitly and mark the recommendation as provisional.

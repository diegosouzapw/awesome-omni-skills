# API Design Review Checklist

Run this checklist before implementing or approving a composition refactor.

## Smell detection

- Does the component expose several boolean or mode props?
- Are there invalid prop combinations?
- Are consumers forced to understand internal layout details?
- Are sibling components coordinating through awkward prop threading?
- Is a reusable primitive being built for more than one feature area?

## Pattern choice

- Can `children` solve the problem more simply?
- Can state be lifted instead of introducing context?
- Does a custom hook express the reusable behavior without constraining markup?
- Do named subcomponents make the call site clearer?
- Is a render prop only being considered because the consumer truly needs rendering control?

## State ownership

- What state is local?
- What state is shared?
- Which actions are public to descendants?
- Which derived metadata is worth exposing?
- Would reducer + context simplify a multi-action shared state model?

## Ergonomics

- Does the call site read clearly?
- Does the API reduce branching and prop count?
- Are escape hatches explicit rather than magical?
- Can the component be documented in a short example?

## Safety and maintenance

- Are refs handled consistently?
- Will tree changes accidentally reset state?
- Is child manipulation being used where context or explicit subcomponents would be safer?
- Are accessibility semantics preserved?

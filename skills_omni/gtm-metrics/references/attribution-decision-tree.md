# Attribution Decision Tree

Use this guide to choose a practical attribution approach.

## Step 1: Decide the real question

- Are we asking **which source created demand**?
- Are we asking **which touches influenced conversion**?
- Are we asking **which product actions predict purchase or expansion**?

If you cannot answer this clearly, do not pick a model yet.

## Step 2: Check operating constraints

- Sales cycle length:
- Available touchpoint data quality:
- Product event quality:
- Privacy and consent limitations:
- Whether budget allocation decisions depend on the output:

## Step 3: Choose a starting pattern

### First-touch
Use when early-stage teams mainly need to know what creates pipeline at all.

### Last-touch
Use for narrow conversion analysis, with the warning that it ignores earlier awareness and nurture.

### Multi-touch (linear, U-shaped, W-shaped, time-decay)
Use when touchpoint history is reasonably reliable and the team can maintain stage definitions.

### Product-touch
Use when in-product behavior is central to conversion or expansion, especially in PLG or hybrid motions.

### Source vs. influence split
Use when a simpler operational model is more trustworthy than a complex credit-allocation system.

## Step 4: Document assumptions

Record all of the following:
- conversion event
- lookback window
- eligible touchpoints
- whether self-reported source is used
- whether modeled conversions are included
- whether the result is creation, influence, or both

## Step 5: State limitations

Always include a note such as:

> Attribution is directional. Results vary by tool configuration, identity resolution, privacy modeling, object definitions, and lookback logic.

## Practical defaults

- short SMB cycle: start with shorter lookback and simpler models
- longer enterprise cycle: extend lookback but increase caution about data quality
- PLG / hybrid: pair channel attribution with product-touch analysis
- if the team debates the model more than the decision: simplify

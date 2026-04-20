---
name: astropy
description: "Astropy workflow skill. Use this skill when the user needs Astropy is the core Python package for astronomy, providing essential functionality for astronomical research and data analysis and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["astropy", "the", "core", "python", "package", "for", "astronomy", "providing"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-20"
---

# Astropy

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/astropy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Astropy

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Additional Capabilities, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Converting between celestial coordinate systems (ICRS, Galactic, FK5, AltAz, etc.)
- Working with physical units and quantities (converting Jy to mJy, parsecs to km, etc.)
- Reading, writing, or manipulating FITS files (images or tables)
- Cosmological calculations (luminosity distance, lookback time, Hubble parameter)
- Precise time handling with different time scales (UTC, TAI, TT, TDB) and formats (JD, MJD, ISO)
- Table operations (reading catalogs, cross-matching, filtering, joining)

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. bash # Install astropy uv pip install astropy # With optional dependencies for full functionality uv pip install astropy[all] ### Converting Coordinates Between Systems python from astropy.coordinates import SkyCoord import astropy.units as u # Create coordinate c = SkyCoord(ra='05h23m34.5s', dec='-69d45m22s', frame='icrs') # Transform to galactic cgal = c.galactic print(f"l={cgal.l.deg}, b={cgal.b.deg}") # Transform to alt-az (requires time and location) from astropy.time import Time from astropy.coordinates import EarthLocation, AltAz observingtime = Time('2023-06-15 23:00:00') observinglocation = EarthLocation(lat=40u.deg, lon=-120u.deg) aaframe = AltAz(obstime=observingtime, location=observinglocation) caltaz = c.transformto(aaframe) print(f"Alt={caltaz.alt.deg}, Az={caltaz.az.deg}") ### Reading and Analyzing FITS Files python from astropy.io import fits import numpy as np # Open FITS file with fits.open('observation.fits') as hdul: # Display structure hdul.info() # Get image data and header data = hdul[1].data header = hdul[1].header # Access header values exptime = header['EXPTIME'] filtername = header['FILTER'] # Analyze data mean = np.mean(data) median = np.median(data) print(f"Mean: {mean}, Median: {median}") ### Cosmological Distance Calculations python from astropy.cosmology import Planck18 import astropy.units as u import numpy as np # Calculate distances at z=1.5 z = 1.5 dL = Planck18.luminositydistance(z) dA = Planck18.angulardiameterdistance(z) print(f"Luminosity distance: {dL}") print(f"Angular diameter distance: {dA}") # Age of universe at that redshift age = Planck18.age(z) print(f"Age at z={z}: {age.to(u.Gyr)}") # Lookback time tlookback = Planck18.lookbacktime(z) print(f"Lookback time: {tlookback.to(u.Gyr)}") ### Cross-Matching Catalogs python from astropy.table import Table from astropy.coordinates import SkyCoord, matchcoordinatessky import astropy.units as u # Read catalogs cat1 = Table.read('catalog1.fits') cat2 = Table.read('catalog2.fits') # Create coordinate objects coords1 = SkyCoord(ra=cat1['RA']u.degree, dec=cat1['DEC']u.degree) coords2 = SkyCoord(ra=cat2['RA']u.degree, dec=cat2['DEC']u.degree) # Find matches idx, sep, = coords1.matchtocatalogsky(coords2) # Filter by separation threshold maxsep = 1 * u.arcsec matches = sep < maxsep # Create matched catalogs cat1matched = cat1[matches] cat2matched = cat2[idx[matches]] print(f"Found {len(cat1_matched)} matches")
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
# Install astropy
uv pip install astropy

# With optional dependencies for full functionality
uv pip install astropy[all]
```

#### Imported: Common Workflows

### Converting Coordinates Between Systems

```python
from astropy.coordinates import SkyCoord
import astropy.units as u

# Create coordinate
c = SkyCoord(ra='05h23m34.5s', dec='-69d45m22s', frame='icrs')

# Transform to galactic
c_gal = c.galactic
print(f"l={c_gal.l.deg}, b={c_gal.b.deg}")

# Transform to alt-az (requires time and location)
from astropy.time import Time
from astropy.coordinates import EarthLocation, AltAz

observing_time = Time('2023-06-15 23:00:00')
observing_location = EarthLocation(lat=40*u.deg, lon=-120*u.deg)
aa_frame = AltAz(obstime=observing_time, location=observing_location)
c_altaz = c.transform_to(aa_frame)
print(f"Alt={c_altaz.alt.deg}, Az={c_altaz.az.deg}")
```

### Reading and Analyzing FITS Files

```python
from astropy.io import fits
import numpy as np

# Open FITS file
with fits.open('observation.fits') as hdul:
    # Display structure
    hdul.info()

    # Get image data and header
    data = hdul[1].data
    header = hdul[1].header

    # Access header values
    exptime = header['EXPTIME']
    filter_name = header['FILTER']

    # Analyze data
    mean = np.mean(data)
    median = np.median(data)
    print(f"Mean: {mean}, Median: {median}")
```

### Cosmological Distance Calculations

```python
from astropy.cosmology import Planck18
import astropy.units as u
import numpy as np

# Calculate distances at z=1.5
z = 1.5
d_L = Planck18.luminosity_distance(z)
d_A = Planck18.angular_diameter_distance(z)

print(f"Luminosity distance: {d_L}")
print(f"Angular diameter distance: {d_A}")

# Age of universe at that redshift
age = Planck18.age(z)
print(f"Age at z={z}: {age.to(u.Gyr)}")

# Lookback time
t_lookback = Planck18.lookback_time(z)
print(f"Lookback time: {t_lookback.to(u.Gyr)}")
```

### Cross-Matching Catalogs

```python
from astropy.table import Table
from astropy.coordinates import SkyCoord, match_coordinates_sky
import astropy.units as u

# Read catalogs
cat1 = Table.read('catalog1.fits')
cat2 = Table.read('catalog2.fits')

# Create coordinate objects
coords1 = SkyCoord(ra=cat1['RA']*u.degree, dec=cat1['DEC']*u.degree)
coords2 = SkyCoord(ra=cat2['RA']*u.degree, dec=cat2['DEC']*u.degree)

# Find matches
idx, sep, _ = coords1.match_to_catalog_sky(coords2)

# Filter by separation threshold
max_sep = 1 * u.arcsec
matches = sep < max_sep

# Create matched catalogs
cat1_matched = cat1[matches]
cat2_matched = cat2[idx[matches]]
print(f"Found {len(cat1_matched)} matches")
```

#### Imported: Overview

Astropy is the core Python package for astronomy, providing essential functionality for astronomical research and data analysis. Use astropy for coordinate transformations, unit and quantity calculations, FITS file operations, cosmological calculations, precise time handling, tabular data manipulation, and astronomical image processing.

#### Imported: Core Capabilities

### 1. Units and Quantities (`astropy.units`)

Handle physical quantities with units, perform unit conversions, and ensure dimensional consistency in calculations.

**Key operations:**
- Create quantities by multiplying values with units
- Convert between units using `.to()` method
- Perform arithmetic with automatic unit handling
- Use equivalencies for domain-specific conversions (spectral, doppler, parallax)
- Work with logarithmic units (magnitudes, decibels)

**See:** `references/units.md` for comprehensive documentation, unit systems, equivalencies, performance optimization, and unit arithmetic.

### 2. Coordinate Systems (`astropy.coordinates`)

Represent celestial positions and transform between different coordinate frames.

**Key operations:**
- Create coordinates with `SkyCoord` in any frame (ICRS, Galactic, FK5, AltAz, etc.)
- Transform between coordinate systems
- Calculate angular separations and position angles
- Match coordinates to catalogs
- Include distance for 3D coordinate operations
- Handle proper motions and radial velocities
- Query named objects from online databases

**See:** `references/coordinates.md` for detailed coordinate frame descriptions, transformations, observer-dependent frames (AltAz), catalog matching, and performance tips.

### 3. Cosmological Calculations (`astropy.cosmology`)

Perform cosmological calculations using standard cosmological models.

**Key operations:**
- Use built-in cosmologies (Planck18, WMAP9, etc.)
- Create custom cosmological models
- Calculate distances (luminosity, comoving, angular diameter)
- Compute ages and lookback times
- Determine Hubble parameter at any redshift
- Calculate density parameters and volumes
- Perform inverse calculations (find z for given distance)

**See:** `references/cosmology.md` for available models, distance calculations, time calculations, density parameters, and neutrino effects.

### 4. FITS File Handling (`astropy.io.fits`)

Read, write, and manipulate FITS (Flexible Image Transport System) files.

**Key operations:**
- Open FITS files with context managers
- Access HDUs (Header Data Units) by index or name
- Read and modify headers (keywords, comments, history)
- Work with image data (NumPy arrays)
- Handle table data (binary and ASCII tables)
- Create new FITS files (single or multi-extension)
- Use memory mapping for large files
- Access remote FITS files (S3, HTTP)

**See:** `references/fits.md` for comprehensive file operations, header manipulation, image and table handling, multi-extension files, and performance considerations.

### 5. Table Operations (`astropy.table`)

Work with tabular data with support for units, metadata, and various file formats.

**Key operations:**
- Create tables from arrays, lists, or dictionaries
- Read/write tables in multiple formats (FITS, CSV, HDF5, VOTable)
- Access and modify columns and rows
- Sort, filter, and index tables
- Perform database-style operations (join, group, aggregate)
- Stack and concatenate tables
- Work with unit-aware columns (QTable)
- Handle missing data with masking

**See:** `references/tables.md` for table creation, I/O operations, data manipulation, sorting, filtering, joins, grouping, and performance tips.

### 6. Time Handling (`astropy.time`)

Precise time representation and conversion between time scales and formats.

**Key operations:**
- Create Time objects in various formats (ISO, JD, MJD, Unix, etc.)
- Convert between time scales (UTC, TAI, TT, TDB, etc.)
- Perform time arithmetic with TimeDelta
- Calculate sidereal time for observers
- Compute light travel time corrections (barycentric, heliocentric)
- Work with time arrays efficiently
- Handle masked (missing) times

**See:** `references/time.md` for time formats, time scales, conversions, arithmetic, observing features, and precision handling.

### 7. World Coordinate System (`astropy.wcs`)

Transform between pixel coordinates in images and world coordinates.

**Key operations:**
- Read WCS from FITS headers
- Convert pixel coordinates to world coordinates (and vice versa)
- Calculate image footprints
- Access WCS parameters (reference pixel, projection, scale)
- Create custom WCS objects

**See:** `references/wcs_and_other_modules.md` for WCS operations and transformations.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @astropy to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @astropy against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @astropy for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @astropy using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```python
import astropy.units as u
from astropy.coordinates import SkyCoord
from astropy.time import Time
from astropy.io import fits
from astropy.table import Table
from astropy.cosmology import Planck18

# Units and quantities
distance = 100 * u.pc
distance_km = distance.to(u.km)

# Coordinates
coord = SkyCoord(ra=10.5*u.degree, dec=41.2*u.degree, frame='icrs')
coord_galactic = coord.galactic

# Time
t = Time('2023-01-15 12:30:00')
jd = t.jd  # Julian Date

# FITS files
data = fits.getdata('image.fits')
header = fits.getheader('image.fits')

# Tables
table = Table.read('catalog.fits')

# Cosmology
d_L = Planck18.luminosity_distance(z=1.0)
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always use units: Attach units to quantities to avoid errors and ensure dimensional consistency
- Use context managers for FITS files: Ensures proper file closing
- Prefer arrays over loops: Process multiple coordinates/times as arrays for better performance
- Check coordinate frames: Verify the frame before transformations
- Use appropriate cosmology: Choose the right cosmological model for your analysis
- Handle missing data: Use masked columns for tables with missing values
- Specify time scales: Be explicit about time scales (UTC, TT, TDB) for precise timing

### Imported Operating Notes

#### Imported: Best Practices

1. **Always use units**: Attach units to quantities to avoid errors and ensure dimensional consistency
2. **Use context managers for FITS files**: Ensures proper file closing
3. **Prefer arrays over loops**: Process multiple coordinates/times as arrays for better performance
4. **Check coordinate frames**: Verify the frame before transformations
5. **Use appropriate cosmology**: Choose the right cosmological model for your analysis
6. **Handle missing data**: Use masked columns for tables with missing values
7. **Specify time scales**: Be explicit about time scales (UTC, TT, TDB) for precise timing
8. **Use QTable for unit-aware tables**: When table columns have units
9. **Check WCS validity**: Verify WCS before using transformations
10. **Cache frequently used values**: Expensive calculations (e.g., cosmological distances) can be cached

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/astropy`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ai-dev-jobs-mcp` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@arm-cortex-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@asana-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ask-questions-if-underspecified` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Documentation and Resources

- Official Astropy Documentation: https://docs.astropy.org/en/stable/
- Tutorials: https://learn.astropy.org/
- GitHub: https://github.com/astropy/astropy

#### Imported: Reference Files

For detailed information on specific modules:
- `references/units.md` - Units, quantities, conversions, and equivalencies
- `references/coordinates.md` - Coordinate systems, transformations, and catalog matching
- `references/cosmology.md` - Cosmological models and calculations
- `references/fits.md` - FITS file operations and manipulation
- `references/tables.md` - Table creation, I/O, and operations
- `references/time.md` - Time formats, scales, and calculations
- `references/wcs_and_other_modules.md` - WCS, NDData, modeling, visualization, constants, and utilities

#### Imported: Additional Capabilities

The `references/wcs_and_other_modules.md` file also covers:

### NDData and CCDData
Containers for n-dimensional datasets with metadata, uncertainty, masking, and WCS information.

### Modeling
Framework for creating and fitting mathematical models to astronomical data.

### Visualization
Tools for astronomical image display with appropriate stretching and scaling.

### Constants
Physical and astronomical constants with proper units (speed of light, solar mass, Planck constant, etc.).

### Convolution
Image processing kernels for smoothing and filtering.

### Statistics
Robust statistical functions including sigma clipping and outlier rejection.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

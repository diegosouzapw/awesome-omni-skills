# Python PPTX Runtime Practices

This reference complements `SKILL.md` with domain details that commonly affect `python-pptx` implementation quality.

## 1) Template-first placeholder rules

Official docs:

- Quickstart: https://python-pptx.readthedocs.io/en/latest/user/quickstart.html
- Working with placeholders: https://python-pptx.readthedocs.io/en/latest/user/placeholders-using.html
- Presentation API: https://python-pptx.readthedocs.io/en/latest/api/presentation.html

Key practices:

- If a branded deck exists, start with `Presentation(template_path)` rather than a blank presentation.
- Treat slide layout names as runtime inputs. Do not assume layout index `1` or `5` means the same thing across templates.
- Placeholder collections are keyed by `idx` values. `idx` is not the same as the placeholder's position in an iteration order.
- Record placeholder `idx`, displayed name, type, and geometry before generating deck code.
- Prefer placeholders over absolute coordinates when the template already defines title, content, picture, chart, or table slots.

High-value warning:

- Some placeholder insertion operations replace the underlying XML element. After `insert_picture()` or similar operations, reuse the returned shape object rather than the original placeholder variable.

## 2) Text handling without losing formatting

Official docs:

- Working with text: https://python-pptx.readthedocs.io/en/latest/user/text.html

Hierarchy:

- Shape text frame
- Paragraphs inside the text frame
- Runs inside a paragraph

Key practices:

- Use `text_frame.clear()` before rebuilding complex content.
- Use separate paragraphs for bullets or logically separate statements.
- Use runs for partial emphasis within a paragraph.
- Use `Pt(...)` for font size instead of raw integers.
- Be careful with aggregate text assignment such as `text_frame.text = ...`; it is convenient, but it can overwrite paragraph/run structure.

Common pattern:

```python
from pptx.util import Pt

text_frame = slide.placeholders[1].text_frame
text_frame.clear()

p = text_frame.paragraphs[0]
p.text = "Executive summary"
p.level = 0
p.font.size = Pt(20)

p2 = text_frame.add_paragraph()
p2.level = 1
run = p2.add_run()
run.text = "Margin improved by 4.2 points year over year"
run.font.bold = True
run.font.size = Pt(16)
```

Note:

- Paragraph-level formatting and run-level formatting are separate concerns from shape placement.
- Soft line breaks are represented differently from paragraph breaks; use paragraph structure when semantic separation matters.

## 3) Charts and tables require structured inputs

Official docs:

- Working with charts: https://python-pptx.readthedocs.io/en/latest/user/charts.html
- Working with tables: https://python-pptx.readthedocs.io/en/latest/user/table.html
- Working with placeholders: https://python-pptx.readthedocs.io/en/latest/user/placeholders-using.html

### Chart checklist

Collect before generation:

- chart type
- categories
- one or more named series
- values for each series
- title requirement
- axis title requirement
- number format expectations
- whether the template provides a chart placeholder

Do not improvise categories or scale labels silently unless the user explicitly asked for drafted illustrative data.

### Table checklist

Collect before generation:

- row count and column count
- headers
- body values
- whether merged cells are required
- whether a table placeholder exists in the template

If the template has a table placeholder, prefer it. If not, insert the table with readable coordinates and sizes.

## 4) Use readable measurement helpers

Official docs:

- Utility API: https://python-pptx.readthedocs.io/en/latest/api/util.html

Prefer:

- `Inches(...)`
- `Cm(...)`
- `Pt(...)`

Avoid unexplained raw EMU integers in generated code.

Better:

```python
from pptx.util import Inches, Pt

left = Inches(0.8)
top = Inches(1.4)
width = Inches(8.5)
font_size = Pt(18)
```

This makes deck code easier to review and adjust.

## 5) Metadata polish is optional but useful

Official docs:

- Core properties: https://python-pptx.readthedocs.io/en/latest/dev/analysis/pkg-coreprops.html

When the user wants a more finished artifact, set core properties such as:

- title
- subject
- author
- keywords
- comments

Typical pattern:

```python
props = prs.core_properties
props.title = "Q3 Business Review"
props.subject = "Operations and revenue update"
props.author = "Analyst Automation"
```

## 6) Scope boundaries to keep output honest

Official repo:

- https://github.com/scanny/python-pptx

Important boundary:

- `python-pptx` is strong for structured deck generation, but it is not a full surrogate for every PowerPoint authoring feature.
- Avoid promising exact reproduction of arbitrary manual slide effects, animation choreography, or SmartArt behavior unless you have verified direct support.

## 7) Fast diagnosis map

- Wrong content slot used -> inspect layout name and placeholder `idx`
- Placeholder object stops working after insertion -> reacquire returned shape
- Text formatting disappears -> rebuild with paragraphs/runs instead of assigning aggregate text
- Chart looks wrong -> verify categories/series structure and number formats
- Slide feels cramped -> reduce content density or split the slide instead of shrinking everything

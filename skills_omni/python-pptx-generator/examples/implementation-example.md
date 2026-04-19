# Worked Implementation Example

This example shows how to turn a concrete brief into a `python-pptx` script.

## Example brief

Create a 3-slide quarterly review deck for the operations team.

- Template path: `templates/quarterly-review-template.pptx`
- Output path: `out/q3-review.pptx`
- Audience: operations leadership
- Slide 1: title slide with deck title and subtitle
- Slide 2: summary slide with a title and three bullets; one phrase should be bolded for emphasis
- Slide 3: revenue chart slide with a clustered column chart and a small logo image
- Metadata: set title, subject, and author

Assume template inspection found these details:

- Layout `Title Slide`
  - title placeholder idx `0`
  - subtitle placeholder idx `1`
- Layout `Title and Content`
  - title placeholder idx `0`
  - body placeholder idx `1`

## Expected output structure

1. **Title slide** — "Q3 Operations Review" with subtitle "Prepared for leadership | October 2026"
2. **Summary slide** — three bullets describing performance, risks, and next steps, with one emphasized phrase
3. **Revenue slide** — chart titled "Quarterly Revenue" plus a logo image in the upper-right area

## Example script

```python
from pathlib import Path

from pptx import Presentation
from pptx.chart.data import CategoryChartData
from pptx.enum.chart import XL_CHART_TYPE
from pptx.util import Inches, Pt

TEMPLATE_PATH = Path("templates/quarterly-review-template.pptx")
OUTPUT_PATH = Path("out/q3-review.pptx")
LOGO_PATH = Path("assets/company-logo.png")

TITLE_LAYOUT = "Title Slide"
CONTENT_LAYOUT = "Title and Content"

TITLE_IDX = 0
SUBTITLE_IDX = 1
BODY_IDX = 1


def find_layout(prs, layout_name: str):
    for layout in prs.slide_layouts:
        if layout.name == layout_name:
            return layout
    raise ValueError(f"Layout not found: {layout_name}")


def set_core_properties(prs):
    props = prs.core_properties
    props.title = "Q3 Operations Review"
    props.subject = "Quarterly review for operations leadership"
    props.author = "Automation Example"


def add_title_slide(prs):
    layout = find_layout(prs, TITLE_LAYOUT)
    slide = prs.slides.add_slide(layout)
    slide.placeholders[TITLE_IDX].text = "Q3 Operations Review"
    slide.placeholders[SUBTITLE_IDX].text = "Prepared for leadership | October 2026"


def add_summary_slide(prs):
    layout = find_layout(prs, CONTENT_LAYOUT)
    slide = prs.slides.add_slide(layout)
    slide.placeholders[TITLE_IDX].text = "Executive Summary"

    text_frame = slide.placeholders[BODY_IDX].text_frame
    text_frame.clear()

    p1 = text_frame.paragraphs[0]
    p1.text = "Service levels improved across all major regions."
    p1.level = 0
    p1.font.size = Pt(20)

    p2 = text_frame.add_paragraph()
    p2.level = 0
    p2.font.size = Pt(20)
    run_a = p2.add_run()
    run_a.text = "The main risk remains "
    run_b = p2.add_run()
    run_b.text = "warehouse labor availability"
    run_b.font.bold = True
    run_b.font.size = Pt(20)

    p3 = text_frame.add_paragraph()
    p3.text = "Next step: expand automation in two fulfillment sites."
    p3.level = 0
    p3.font.size = Pt(20)


def add_chart_slide(prs):
    layout = find_layout(prs, CONTENT_LAYOUT)
    slide = prs.slides.add_slide(layout)
    slide.placeholders[TITLE_IDX].text = "Quarterly Revenue"

    chart_data = CategoryChartData()
    chart_data.categories = ["Q1", "Q2", "Q3"]
    chart_data.add_series("Revenue ($M)", (12.4, 13.1, 14.0))

    x = Inches(0.9)
    y = Inches(1.8)
    cx = Inches(7.2)
    cy = Inches(4.2)

    chart = slide.shapes.add_chart(
        XL_CHART_TYPE.COLUMN_CLUSTERED,
        x,
        y,
        cx,
        cy,
        chart_data,
    ).chart

    chart.has_title = False
    chart.value_axis.has_major_gridlines = True

    if LOGO_PATH.exists():
        slide.shapes.add_picture(str(LOGO_PATH), Inches(8.3), Inches(0.5), width=Inches(1.0))


def main():
    if not TEMPLATE_PATH.exists():
        raise FileNotFoundError(f"Template not found: {TEMPLATE_PATH}")

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)

    prs = Presentation(str(TEMPLATE_PATH))
    set_core_properties(prs)
    add_title_slide(prs)
    add_summary_slide(prs)
    add_chart_slide(prs)
    prs.save(str(OUTPUT_PATH))

    # Smoke test: reopen generated output.
    Presentation(str(OUTPUT_PATH))
    print(f"Generated presentation: {OUTPUT_PATH}")


if __name__ == "__main__":
    main()
```

## Why this example is useful

- Uses a template instead of assuming blank-deck design
- Uses named layouts rather than raw positions alone
- Uses placeholder access explicitly
- Builds bullet text with paragraphs and runs
- Uses supported chart APIs
- Uses readable measurement helpers
- Performs a reopen smoke test after save

## Adaptation notes

- Replace placeholder idx constants with the actual values from `python scripts/validate-runtime.py path/to/template.pptx`
- If your template exposes a chart or picture placeholder, prefer that over manual coordinates
- If the brief requires a table instead of a chart, keep the same slide plan but replace the chart block with a table insertion pattern

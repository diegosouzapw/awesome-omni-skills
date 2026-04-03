# Theme Section Schema Example (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇪🇸 [es](../../../../es/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇩🇪 [de](../../../../de/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇮🇹 [it](../../../../it/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇮🇳 [in](../../../../in/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇹🇭 [th](../../../../th/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇮🇩 [id](../../../../id/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇳🇴 [no](../../../../no/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇩🇰 [da](../../../../da/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇮🇱 [he](../../../../he/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/shopify-developer/examples/theme-section-schema-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/shopify-developer/examples/theme-section-schema-example.md)

---


Use this pattern to explain a valid OS 2.0 section structure.

```liquid
<section class="promo-banner">
  {% if section.settings.heading != blank %}
    <h2>{{ section.settings.heading }}</h2>
  {% endif %}

  {% for block in section.blocks %}
    {% case block.type %}
      {% when 'text' %}
        <div {{ block.shopify_attributes }}>{{ block.settings.text }}</div>
    {% endcase %}
  {% endfor %}
</section>

{% schema %}
{
  "name": "Promo banner",
  "settings": [
    {
      "type": "text",
      "id": "heading",
      "label": "Heading"
    }
  ],
  "blocks": [
    {
      "type": "text",
      "name": "Text",
      "settings": [
        {
          "type": "text",
          "id": "text",
          "label": "Text"
        }
      ]
    }
  ],
  "presets": [
    {
      "name": "Promo banner"
    }
  ]
}
{% endschema %}
```

Checklist:

- keep schema valid JSON
- use settings and blocks for merchant-configurable content
- prefer section-based customization over hardcoded template duplication

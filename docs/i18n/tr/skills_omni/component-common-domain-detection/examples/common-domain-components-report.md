# Example: Common Domain Components Report (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇪🇸 [es](../../../../es/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇩🇪 [de](../../../../de/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇮🇹 [it](../../../../it/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇮🇳 [in](../../../../in/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇹🇭 [th](../../../../th/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇮🇩 [id](../../../../id/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇳🇴 [no](../../../../no/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇩🇰 [da](../../../../da/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇮🇱 [he](../../../../he/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-common-domain-detection/examples/common-domain-components-report.md)

---


## Scope
- Repository or service set: billing, ticketing, survey
- Commit / branch / PR: feature/consolidate-notifications
- Components reviewed: `services/billing/notification`, `services/ticket/notification`, `services/survey/notification`
- Confidence: medium-high

## Candidate Groups
| Group | Components | Why grouped | Initial confidence |
| --- | --- | --- | --- |
| Notification | 3 components | Same leaf name, shared email adapter usage | Medium |

## Semantic Validation
| Group | Same business capability? | Bounded-context alignment | Notes |
| --- | --- | --- | --- |
| Notification | Yes, mostly | Yes | All send customer-facing email notifications; differences are template and trigger specific |

## Impact Snapshot
| Group | Current consumers | Projected consumers | Ownership spread | Release coordination | Risk |
| --- | --- | --- | --- | --- | --- |
| Notification | 5 | 5 | 2 teams | Moderate | Low-medium |

## Recommendation
| Group | Outcome | Why | Rejected alternatives |
| --- | --- | --- | --- |
| Notification | Shared library | Shared mechanism is stable; no runtime centralization needed | Shared service rejected due to unnecessary operational overhead; keep-separate rejected because duplication is real and semantics align |

## Risks and Follow-ups
- Security / operations risks: package ownership and release policy must be clear
- Ownership / governance risks: designate one maintainer team
- Evidence gaps: verify whether one team has hidden SMS-specific behavior
- Next owner: platform architecture

## Provenance
- Repository paths sampled: `services/*/notification`, `shared/email`
- Files reviewed: 9 handlers, 3 template mappers, 1 adapter
- Commit / PR link: PR-142
- Notes: recommendation assumes email-only scope

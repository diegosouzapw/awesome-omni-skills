---
name: hybrid-cloud-networking-v2
description: "Hybrid Cloud Networking workflow skill. Use this skill when the user needs Configure secure, high-performance connectivity between on-premises and cloud environments using VPN, Direct Connect, and ExpressRoute and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["hybrid-cloud-networking-v2", "hybrid-cloud-networking", "configure", "secure", "high-performance", "connectivity", "between", "on-premises"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Hybrid Cloud Networking

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/hybrid-cloud-networking` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Hybrid Cloud Networking Configure secure, high-performance connectivity between on-premises and cloud environments using VPN, Direct Connect, and ExpressRoute.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Purpose, Connection Options, Hybrid Network Patterns, Routing Configuration, Security Best Practices, High Availability.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to hybrid cloud networking
- You need a different domain or tool outside this scope
- Connect on-premises to cloud
- Extend datacenter to cloud
- Implement hybrid active-active setups
- Meet compliance requirements

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview, playbook, and source summary before loading any upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Purpose

Establish secure, reliable network connectivity between on-premises data centers and cloud providers (AWS, Azure, GCP).

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @hybrid-cloud-networking-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/hybrid-cloud-networking-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/hybrid-cloud-networking-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @hybrid-cloud-networking-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/hybrid-cloud-networking`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Monitoring and Troubleshooting

### Key Metrics
- Tunnel status (up/down)
- Bytes in/out
- Packet loss
- Latency
- BGP session status

### Troubleshooting
```bash
# AWS VPN
aws ec2 describe-vpn-connections
aws ec2 get-vpn-connection-telemetry

# Azure VPN
az network vpn-connection show
az network vpn-connection show-device-config-script
```

## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Reference Files

- `references/vpn-setup.md` - VPN configuration guide
- `references/direct-connect.md` - Direct Connect setup

#### Imported: Connection Options

### AWS Connectivity

#### 1. Site-to-Site VPN
- IPSec VPN over internet
- Up to 1.25 Gbps per tunnel
- Cost-effective for moderate bandwidth
- Higher latency, internet-dependent

```hcl
resource "aws_vpn_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags = {
    Name = "main-vpn-gateway"
  }
}

resource "aws_customer_gateway" "main" {
  bgp_asn    = 65000
  ip_address = "203.0.113.1"
  type       = "ipsec.1"
}

resource "aws_vpn_connection" "main" {
  vpn_gateway_id      = aws_vpn_gateway.main.id
  customer_gateway_id = aws_customer_gateway.main.id
  type                = "ipsec.1"
  static_routes_only  = false
}
```

#### 2. AWS Direct Connect
- Dedicated network connection
- 1 Gbps to 100 Gbps
- Lower latency, consistent bandwidth
- More expensive, setup time required

**Reference:** See `references/direct-connect.md`

### Azure Connectivity

#### 1. Site-to-Site VPN
```hcl
resource "azurerm_virtual_network_gateway" "vpn" {
  name                = "vpn-gateway"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name

  type     = "Vpn"
  vpn_type = "RouteBased"
  sku      = "VpnGw1"

  ip_configuration {
    name                          = "vnetGatewayConfig"
    public_ip_address_id          = azurerm_public_ip.vpn.id
    private_ip_address_allocation = "Dynamic"
    subnet_id                     = azurerm_subnet.gateway.id
  }
}
```

#### 2. Azure ExpressRoute
- Private connection via connectivity provider
- Up to 100 Gbps
- Low latency, high reliability
- Premium for global connectivity

### GCP Connectivity

#### 1. Cloud VPN
- IPSec VPN (Classic or HA VPN)
- HA VPN: 99.99% SLA
- Up to 3 Gbps per tunnel

#### 2. Cloud Interconnect
- Dedicated (10 Gbps, 100 Gbps)
- Partner (50 Mbps to 50 Gbps)
- Lower latency than VPN

#### Imported: Hybrid Network Patterns

### Pattern 1: Hub-and-Spoke
```
On-Premises Datacenter
         ↓
    VPN/Direct Connect
         ↓
    Transit Gateway (AWS) / vWAN (Azure)
         ↓
    ├─ Production VPC/VNet
    ├─ Staging VPC/VNet
    └─ Development VPC/VNet
```

### Pattern 2: Multi-Region Hybrid
```
On-Premises
    ├─ Direct Connect → us-east-1
    └─ Direct Connect → us-west-2
            ↓
        Cross-Region Peering
```

### Pattern 3: Multi-Cloud Hybrid
```
On-Premises Datacenter
    ├─ Direct Connect → AWS
    ├─ ExpressRoute → Azure
    └─ Interconnect → GCP
```

#### Imported: Routing Configuration

### BGP Configuration
```
On-Premises Router:
- AS Number: 65000
- Advertise: 10.0.0.0/8

Cloud Router:
- AS Number: 64512 (AWS), 65515 (Azure)
- Advertise: Cloud VPC/VNet CIDRs
```

### Route Propagation
- Enable route propagation on route tables
- Use BGP for dynamic routing
- Implement route filtering
- Monitor route advertisements

#### Imported: Security Best Practices

1. **Use private connectivity** (Direct Connect/ExpressRoute)
2. **Implement encryption** for VPN tunnels
3. **Use VPC endpoints** to avoid internet routing
4. **Configure network ACLs** and security groups
5. **Enable VPC Flow Logs** for monitoring
6. **Implement DDoS protection**
7. **Use PrivateLink/Private Endpoints**
8. **Monitor connections** with CloudWatch/Monitor
9. **Implement redundancy** (dual tunnels)
10. **Regular security audits**

#### Imported: High Availability

### Dual VPN Tunnels
```hcl
resource "aws_vpn_connection" "primary" {
  vpn_gateway_id      = aws_vpn_gateway.main.id
  customer_gateway_id = aws_customer_gateway.primary.id
  type                = "ipsec.1"
}

resource "aws_vpn_connection" "secondary" {
  vpn_gateway_id      = aws_vpn_gateway.main.id
  customer_gateway_id = aws_customer_gateway.secondary.id
  type                = "ipsec.1"
}
```

### Active-Active Configuration
- Multiple connections from different locations
- BGP for automatic failover
- Equal-cost multi-path (ECMP) routing
- Monitor health of all connections

#### Imported: Cost Optimization

1. **Right-size connections** based on traffic
2. **Use VPN for low-bandwidth** workloads
3. **Consolidate traffic** through fewer connections
4. **Minimize data transfer** costs
5. **Use Direct Connect** for high bandwidth
6. **Implement caching** to reduce traffic

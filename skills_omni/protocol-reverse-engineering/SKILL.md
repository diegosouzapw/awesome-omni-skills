---
name: "protocol-reverse-engineering"
description: "Protocol Reverse Engineering workflow skill. Use this skill when the user needs comprehensive techniques for capturing, analyzing, and documenting network protocols for authorized security research, interoperability work, and debugging, with emphasis on evidence preservation, safe capture practice, and source-backed analysis."
version: "0.0.1"
category: "testing-security"
tags:
  - "protocol-reverse-engineering"
  - "network-analysis"
  - "packet-capture"
  - "wireshark"
  - "tcpdump"
  - "protocol-documentation"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-19"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "protocol-reverse-engineering"
family_name: "Protocol Reverse Engineering"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/protocol-reverse-engineering"
upstream_skill: "skills/protocol-reverse-engineering"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "79"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "6bf093920a93e68fa8263cf6ee767d7407989d56"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "protocol-reverse-engineering"
---

# Protocol Reverse Engineering

## Overview

This skill supports **authorized, evidence-first protocol reverse engineering** for defensive security research, interoperability debugging, and protocol documentation.

Use it to move from raw packet captures to a defensible protocol understanding:

- what transport is in use
- whether traffic is cleartext, compressed, or encrypted
- how conversations are segmented
- what fields and message types appear stable across sessions
- what remains unknown and needs validation

This skill focuses on **passive analysis and documentation**. It does **not** advise unauthorized interception, encryption bypass, intrusive man-in-the-middle setups, or active tampering unless the user’s scope explicitly authorizes security testing beyond passive observation.

Preserve provenance and raw evidence before trimming, converting, or annotating captures.

## When to Use

Use this skill when you need to:

- capture and analyze an unknown or partially documented network protocol
- document message framing, fields, and state transitions from packet evidence
- troubleshoot interoperability issues between a client and server
- determine whether application data is recoverable or blocked by modern encryption
- compare multiple sessions to separate constants, counters, timestamps, lengths, and payload data
- turn packet observations into reusable documentation, field tables, or machine-readable schema notes

Do **not** use this skill as the primary workflow when the task is actually:

- unauthorized interception or surveillance
- exploit development or offensive protocol manipulation
- active fuzzing of a protocol implementation
- malware traffic analysis that needs a dedicated malware or incident-response workflow
- pure packet forensics where reconstruction and attribution matter more than protocol grammar extraction

Stop and ask for clarification if any of the following are missing:

- authorization to capture or inspect the traffic
- target environment and scope boundaries
- whether passive-only analysis is required
- success criteria for the reverse-engineering output
- available evidence such as pcaps, endpoint logs, or session secrets

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| You are about to collect traffic | Define scope, interface, timeframe, and BPF capture filter first | Bad capture choices create false conclusions later |
| You already have a pcap | Preserve the original file unchanged and record provenance | Reverse engineering is much harder to defend if raw evidence was altered |
| Traffic appears encrypted | Classify TLS/QUIC/other protections before attempting payload inference | Prevents wasted effort and incorrect decryption assumptions |
| Sessions are interleaved or noisy | Isolate one conversation before inferring fields | Message boundaries and state become clearer when scoped |
| Payload structure is still unclear | Compare multiple sessions and test field hypotheses | Separates constants from lengths, IDs, counters, and timestamps |
| You need references during analysis | Open `references/source-map.md` | Provides task-indexed official references without bloating this file |
| You need a concrete example | Open `examples/synthesis-example.md` | Shows how to turn observations into source-backed protocol notes |

## Workflow

### 1. Confirm authorization and define scope

Record the operating boundary before analysis:

- who authorized the work
- what hosts, interfaces, or captures are in scope
- whether analysis is passive-only
- whether the environment includes NAT, proxies, TLS termination, or load balancers
- whether endpoint access, logs, or session secrets are available

Output:

- a short scope statement
- explicit non-goals
- stop conditions for out-of-scope traffic or unexpected sensitive content

### 2. Preserve raw evidence before analysis

Do this before trimming or filtering:

- keep the original pcap/pcapng untouched
- record capture time window, timezone/clock context, interface, host role, and capture point
- record any BPF capture filter used
- note snaplen and whether packet truncation or drops were reported

Minimum provenance note:

- capture source
- interface or mirror/span point
- filter used at capture time
- file hash if available
- analyst and timestamp

### 3. Validate capture quality

Before inferring protocol behavior, check whether the capture is trustworthy.

Look for:

- dropped packets
- too-small snaplen causing truncation
- checksum or segmentation offload artifacts
- asymmetric routing or partial visibility
- time skew between capture sources
- incomplete handshakes or missing connection setup

If capture quality is poor, fix collection first when possible. Many “unknown protocol” problems are actually evidence-quality problems.

### 4. Classify the transport and security layer

Establish the outer structure before studying the payload.

Questions to answer:

- TCP or UDP?
- Single request/response or multiplexed streams?
- Cleartext, compressed, or encrypted?
- TLS present? If so, which version indicators are visible?
- QUIC present over UDP?
- Are SNI, ALPN, certificate metadata, or handshake properties visible even if payload is not?
- Which side acts as client and which as server?

Useful clues:

- destination ports are hints, not proof
- ALPN can indicate higher-level protocols
- repeated length-prefixed records suggest framing
- stable first-byte patterns may indicate message type/version fields

Output:

- protocol classification note
- client/server role assignment
- encryption decision branch

### 5. Isolate conversations and reconstruct streams

Do not reason from mixed traffic if you can avoid it.

For each candidate conversation:

- isolate by 5-tuple and time window
- follow the TCP stream or equivalent reconstructed flow
- enable or verify reassembly behavior where appropriate
- distinguish application records from transport segmentation
- note retries, resets, retransmissions, and out-of-order delivery

Capture these artifacts:

- conversation ID or stream index
- start/end timestamps
- request/response sequence or bidirectional event list
- any correlation to DNS, process role, or application log entries

### 6. Infer framing and field structure

Work from repeated observations across multiple messages.

For each message candidate, test whether bytes likely represent:

- magic/version bytes
- message type or opcode
- length fields
- request IDs, correlation IDs, or stream IDs
- flags or capability bits
- counters, sequence numbers, or timestamps
- checksums, MACs, or cryptographic material
- variable-length payloads or nested records

Good practice:

- compare several examples of the same operation
- compare a success case and a failure case
- compare short vs long payloads to validate length assumptions
- record confidence levels rather than forcing certainty too early

Preferred evidence table columns:

| Offset | Width | Observed values | Hypothesis | Confidence | Evidence |
| --- | --- | --- | --- | --- | --- |
| 0x00 | 1 | `0x01`, `0x02` | message type | medium | changes with operation |

### 7. Handle encrypted protocols correctly

If traffic is protected, document what is visible and what is not.

Allowed, defensible paths include:

- analyzing cleartext protocols directly
- using authorized endpoint-generated session secrets such as key log files where supported
- using server-side material only when it is actually applicable and authorized
- documenting handshake metadata and residual unknowns when decryption is not possible

Important boundary:

- do **not** assume a private key is enough to decrypt modern TLS traffic
- for TLS 1.3 and many modern deployments, private-key-only decryption is insufficient
- QUIC combines transport and crypto behavior in ways that change normal TCP-era assumptions
- this skill does **not** cover bypassing encryption controls

If decryption is unavailable, still document:

- handshake metadata
- SNI/ALPN visibility
- certificate or endpoint identity clues
- packet sizes, timing, burst patterns, and session boundaries

### 8. Validate hypotheses across sessions

A field hypothesis is stronger when it survives comparison.

Validate by checking:

- multiple captures of the same operation
- different payload sizes
- different users or sessions when authorized
- success vs error responses
- version or capability negotiation differences
- whether inferred lengths match actual payload sizes
- whether sequence or correlation identifiers line up with message ordering

Mark each conclusion as one of:

- confirmed by repeated observation
- plausible but unconfirmed
- contradicted by later evidence
- still unknown

### 9. Produce reusable documentation

Your output should be reproducible, not just descriptive.

Recommended deliverables:

- protocol overview and scope statement
- capture provenance and environment notes
- transport/security classification
- conversation map
- message catalog
- field table with offsets and confidence levels
- state transition notes
- edge cases and failure behavior
- known unknowns
- schema stub or machine-readable format description when useful

For binary or structured payloads, prefer a schema-oriented handoff when possible instead of prose alone.

## Troubleshooting

### I captured traffic, but the protocol looks malformed

Likely causes:

- snaplen too small, causing truncation
- dropped packets
- TCP reassembly not considered
- checksum/offload artifacts
- only one direction of the flow was captured

Checks:

- verify snaplen and capture statistics
- inspect for `[truncated]` or shortened payloads
- compare packet counts from both directions
- check whether retransmissions or missing segments break message boundaries
- confirm whether the capture point sees pre- or post-NAT traffic

Corrective action:

- recollect with appropriate snaplen and a narrower BPF if possible
- analyze a clean, isolated conversation
- re-test hypotheses only after evidence quality is acceptable

### I see packets, but I cannot decode the application layer

Likely causes:

- TLS 1.3 or another encrypted transport without authorized session secrets
- QUIC over UDP
- wrong assumption that a server private key can decrypt everything
- certificate/private-key mismatch or unsupported decryption path

Checks:

- identify whether TLS or QUIC is present
- check for visible SNI, ALPN, handshake version, and certificate metadata
- verify whether authorized key logs or equivalent session secrets exist
- confirm the capture includes the handshake needed for context

Corrective action:

- use authorized session secrets when available
- document what remains opaque if decryption is not possible
- continue with metadata, flow, timing, and message-size analysis rather than inventing payload structure

### My conclusions change depending on which packets I select

Likely causes:

- mixing several conversations together
- request/response interleaving
- load balancer, proxy, or NAT rewriting endpoints
- multiple protocol versions or modes in the same capture

Checks:

- isolate by conversation or stream index
- group by endpoint role rather than IP alone when proxies are involved
- compare repeated operations from the same client state
- look for ALPN, version, or capability negotiation differences

Corrective action:

- analyze one scoped conversation at a time
- annotate infrastructure layers that can alter apparent endpoint identity
- produce separate notes for each protocol variant or transport mode

### No packets are showing up, or I captured the wrong traffic

Likely causes:

- wrong interface
- capture filter mistake
- confusion between capture filters and display filters
- capture point does not actually see the target traffic

Checks:

- confirm interface selection
- validate the BPF syntax separately from any Wireshark display filter
- test with a minimal capture filter first
- verify whether traffic is inside a tunnel, namespace, or mirrored segment you are not observing

Corrective action:

- simplify the BPF
- correct the interface or vantage point
- capture broadly enough to validate visibility, then narrow safely

## Examples

Use `examples/synthesis-example.md` for a compact, source-backed mini-case that shows:

- a bounded analysis goal
- capture metadata and BPF choice
- conversation isolation and reassembly thinking
- encryption decision handling
- field inference with confidence levels
- final protocol notes including known unknowns

## Additional Resources

- `references/source-map.md` - task-indexed official references for capture, filtering, reassembly, TLS/QUIC constraints, Zeek correlation, and schema documentation
- Wireshark User’s Guide
- Wireshark TLS guidance
- tcpdump and pcap-filter manuals
- RFC 8446 for TLS 1.3
- RFC 9000 for QUIC
- Zeek documentation
- Kaitai Struct documentation

## Related Skills

Route to a different skill when the task shifts to:

- packet forensics and incident reconstruction
- malware traffic analysis
- TLS deployment troubleshooting
- binary file-format reverse engineering outside network captures
- active protocol fuzzing or exploit-oriented security testing

## Safe Operating Notes

- Analyze only traffic you are authorized to capture or receive.
- Prefer passive collection and documentation unless the scope explicitly permits active testing.
- Preserve original evidence before transformation.
- Keep capture filters narrow and intentional to reduce unnecessary data collection.
- Distinguish capture filters from display filters.
- Document uncertainty instead of overstating conclusions.
- If the user asks for encryption bypass or unauthorized interception, refuse and redirect to lawful alternatives such as metadata-only analysis or authorized endpoint instrumentation.

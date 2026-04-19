# Synthesis Example: Documenting an Unknown Length-Prefixed Service

This example shows how to turn packet observations into a bounded, evidence-first protocol note set.

## Scenario

An operator is authorized to analyze traffic between an internal desktop client and a lab service at `10.20.30.40:8443`.

Goal:
- determine whether the service speaks a custom cleartext protocol or a TLS-wrapped protocol
- document request/response structure if visible
- preserve uncertainty if the payload cannot be decrypted

Non-goals:
- active tampering
- bypassing encryption
- making exploit claims

## Initial capture note

- Capture point: endpoint host
- Interface: `eth0`
- Time window: 2026-03-27 14:02-14:07 UTC
- Capture filter used: `host 10.20.30.40 and tcp port 8443`
- Snaplen: full packet capture
- Raw evidence preserved: `lab-service-original.pcapng`

Reason for this BPF:
- it narrows collection to the authorized target
- it reduces unrelated traffic without relying on a display filter after collection

## Analyst actions

### 1. Validate capture quality

Observed:
- no reported packet drops
- full-length packets present
- TCP handshake visible
- both directions captured

Interpretation:
- capture quality is sufficient for initial analysis

### 2. Classify transport and encryption state

Observed in first packets:
- TCP three-way handshake
- client hello present
- server hello present
- TLS handshake metadata visible
- ALPN: `acme-sync/1`

Interpretation:
- this is not a raw custom protocol on TCP
- application data is carried inside TLS
- payload inference depends on whether authorized session secrets exist

### 3. Encryption decision branch

Question:
- are authorized session secrets available from the endpoint?

Case result:
- yes, the user can provide a key log file generated on the authorized client

Action:
- use the authorized session secret source for analysis
- do not claim that the server private key alone would have been enough

### 4. Isolate one conversation

Selected conversation:
- client `10.20.30.15:51544` -> server `10.20.30.40:8443`
- Wireshark stream index: 7

Observed after decryption and stream following:
- repeated client records with a 1-byte type field
- 2-byte big-endian length field immediately after type
- payload body follows
- responses mirror the same framing pattern

## Sample message observations

### Request A

Hex excerpt:
`01 00 05 68 65 6c 6c 6f`

Working hypothesis:
- `01` = message type `HELLO`
- `00 05` = payload length 5
- `68 65 6c 6c 6f` = UTF-8 payload `hello`

### Response A

Hex excerpt:
`81 00 02 6f 6b`

Working hypothesis:
- `81` = response type for hello acknowledgment
- `00 02` = payload length 2
- payload = `ok`

### Request B

Hex excerpt:
`02 00 09 66 65 74 63 68 3a 31 32 33`

Working hypothesis:
- `02` = fetch-like request
- `00 09` = payload length 9
- payload resembles ASCII command with argument

## Field inference table

| Offset | Width | Observed values | Hypothesis | Confidence | Evidence |
| --- | --- | --- | --- | --- | --- |
| 0x00 | 1 | `01`, `02`, `81`, `82` | message type | high | changes by operation and response direction |
| 0x01 | 2 | `0005`, `0002`, `0009` | big-endian payload length | high | matches actual body size in multiple samples |
| 0x03 | variable | ASCII-like data | payload body | medium | printable content in decrypted samples |

## Reassembly notes

Observed:
- one larger response was split across multiple TCP segments
- application message boundaries did not align to packet boundaries

Analyst conclusion:
- reassembly is required before making field claims
- packet-by-packet reading would have produced a false “malformed protocol” conclusion

## Cross-session validation

Compared three successful sessions and one error session.

Stable findings:
- first byte changes by operation class
- 2-byte length field remains consistent
- payload size matches length field in all checked cases

Variable findings:
- one body field appears to be a request ID or sequence token
- error response type differs from normal acknowledgment type

Unknowns:
- whether any compression mode exists for larger payloads
- whether type `0x03` indicates subscription or streaming behavior

## Final protocol note set

### Scope statement

This note describes observed behavior for the authorized client-to-server traffic captured on 2026-03-27 for the `acme-sync/1` application over TLS on TCP/8443.

### Transport and security

- Transport: TCP
- Security: TLS-protected
- ALPN observed: `acme-sync/1`
- Application payloads were analyzed only after authorized session secrets were provided

### Framing model

Each decrypted application message appears to use:
- 1-byte message type
- 2-byte big-endian payload length
- variable-length payload body

### Known message types

| Type | Direction | Meaning | Confidence |
| --- | --- | --- | --- |
| `0x01` | client->server | hello/init request | medium |
| `0x02` | client->server | fetch/request operation | medium |
| `0x81` | server->client | hello acknowledgment | medium |
| `0x82` | server->client | fetch response or error variant | low |

### Known unknowns

- whether request correlation uses a body field or transport ordering only
- whether larger payloads trigger compression or chunking
- full semantics of type `0x82`
- whether additional message families appear after authentication or subscription setup

### Example schema stub

```yaml
meta:
  id: acme_sync_message
  endian: be
seq:
  - id: msg_type
    type: u1
  - id: body_len
    type: u2
  - id: body
    size: body_len
```

## Why this is a good synthesis example

It shows:
- explicit authorization boundary
- preserved capture metadata
- BPF choice separate from display filtering
- conversation scoping
- reassembly-aware interpretation
- encrypted-traffic decision handling
- field hypotheses with confidence levels
- a final deliverable that states both findings and unknowns

That is the standard this skill aims for.

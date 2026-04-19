# Protocol Reverse Engineering Source Map

Use this file as a task-indexed reference aid while executing the workflow in `SKILL.md`.

It is intentionally organized by analyst task rather than as a generic bibliography.

## 1. Safe capture and evidence preservation

### tcpdump(8) Manual
- URL: https://www.tcpdump.org/manpages/tcpdump.8.html
- Use for:
  - interface selection
  - capture file writing
  - snaplen choices
  - buffering and capture statistics
  - checking for dropped packets and truncation risks
- Why it matters here:
  - If the capture is incomplete or truncated, protocol inference may be wrong before analysis even starts.

### pcap-filter(7) Manual
- URL: https://www.tcpdump.org/manpages/pcap-filter.7.html
- Use for:
  - BPF capture filter syntax and semantics
  - narrowing collection safely
  - validating that your capture filter matches the intended traffic
- Why it matters here:
  - Prevents a common analyst mistake: confusing capture filters with Wireshark display filters.

## 2. Packet inspection, conversation scoping, and reassembly

### Wireshark User’s Guide
- URL: https://www.wireshark.org/docs/wsug_html_chunked/
- Use for:
  - opening and managing captures
  - following streams
  - conversation analysis
  - TCP reassembly behavior
  - protocol dissection behavior
- Why it matters here:
  - Reverse engineering depends on isolating a conversation and understanding reassembled application records rather than reading individual packets in isolation.

### Wireshark Display Filter Reference
- URL: https://www.wireshark.org/docs/dfref/
- Use for:
  - protocol-specific display fields
  - narrowing visible packets during analysis
  - finding handshake metadata, stream identifiers, and protocol fields
- Why it matters here:
  - Helps convert a broad capture into a focused evidence set without altering the original data.

## 3. TLS decryption boundaries and practical expectations

### Wireshark Wiki: TLS
- URL: https://wiki.wireshark.org/TLS
- Use for:
  - understanding practical decryption methods
  - key log file workflows
  - limitations of private-key decryption
- Why it matters here:
  - Prevents incorrect assumptions about decrypting modern TLS traffic.

### RFC 8446 - The Transport Layer Security (TLS) Protocol Version 1.3
- URL: https://www.rfc-editor.org/rfc/rfc8446
- Use for:
  - handshake structure
  - understanding what became encrypted in TLS 1.3
  - explaining why old decryption assumptions fail
- Why it matters here:
  - Supports clear statements about what can and cannot be inferred when application payloads are protected.

## 4. QUIC-aware analysis

### RFC 9000 - QUIC: A UDP-Based Multiplexed and Secure Transport
- URL: https://www.rfc-editor.org/rfc/rfc9000
- Use for:
  - understanding QUIC stream behavior
  - UDP-based secure transport concepts
  - modern transport assumptions that differ from TCP-focused workflows
- Why it matters here:
  - QUIC changes how analysts think about sessions, message boundaries, and encrypted transport metadata.

## 5. Correlating packets with higher-level events

### Zeek Documentation
- URL: https://docs.zeek.org/en/current/
- Use for:
  - event-oriented network analysis
  - connection semantics
  - file extraction and protocol metadata correlation
- Why it matters here:
  - Packet-by-packet interpretation is stronger when checked against higher-level event views.

## 6. Turning findings into reusable documentation

### Kaitai Struct Documentation
- URL: https://doc.kaitai.io/
- Use for:
  - documenting binary payload structure in a machine-readable way
  - building reusable schemas from reverse-engineered field layouts
- Why it matters here:
  - Improves handoff quality and reproducibility beyond prose-only notes.

## 7. Recommended lookup order by workflow phase

1. **Capture planning**
   - `pcap-filter(7)`
   - `tcpdump(8)`
2. **Initial packet review**
   - Wireshark User’s Guide
   - Wireshark Display Filter Reference
3. **Encrypted traffic branch**
   - Wireshark Wiki: TLS
   - RFC 8446
   - RFC 9000
4. **Cross-validation and event correlation**
   - Zeek Documentation
5. **Final deliverable and schema work**
   - Kaitai Struct Documentation

## 8. What this source map is for

Use this file when you need to answer questions like:

- Which source should I trust for BPF syntax?
- Where do I confirm whether Wireshark can reconstruct this stream?
- Why is a private key not enough for this TLS 1.3 trace?
- What should I read before making claims about QUIC stream behavior?
- How do I turn field notes into a reusable format description?

Do not treat this file as a substitute for the workflow in `SKILL.md`. It is a focused lookup tool for source-backed execution.

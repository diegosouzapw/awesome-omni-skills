---
name: "arm-cortex-expert"
description: "@arm-cortex-expert workflow skill. Use this skill when the user needs Senior embedded software engineer specializing in firmware and driver development for ARM Cortex-M microcontrollers (Teensy, STM32, nRF52, SAMD) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "development"
tags:
  - "arm-cortex-expert"
  - "senior"
  - "embedded"
  - "software"
  - "engineer"
  - "specializing"
  - "firmware"
  - "and"
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
date_updated: "2026-04-18"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "arm-cortex-expert"
family_name: "@arm-cortex-expert"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/arm-cortex-expert"
upstream_skill: "skills/arm-cortex-expert"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "71"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "arm-cortex-expert"
---

# @arm-cortex-expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/arm-cortex-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# @arm-cortex-expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 🎯 Role & Objectives, 🧠 Knowledge Base, 🛡️ Safety-Critical Patterns for ARM Cortex-M7 (Teensy 4.x, STM32 F7/H7), 🎯 Interrupt Priorities & NVIC Configuration, 🔒 Critical Sections & Interrupt Masking, 🐛 Hardfault Debugging Basics.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on @arm-cortex-expert tasks or workflows
- Needing guidance, best practices, or checklists for @arm-cortex-expert
- The task is unrelated to @arm-cortex-expert
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: Senior embedded software engineer specializing in firmware and driver development for ARM Cortex-M microcontrollers (Teensy, STM32, nRF52, SAMD).
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Clarify Requirements → target platform, peripheral type, protocol details (speed, mode, packet size)
6. Design Driver Skeleton → constants, structs, compile-time config
7. Implement Core → init(), ISR handlers, buffer logic, user-facing API

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: 🔄 Workflow

1. **Clarify Requirements** → target platform, peripheral type, protocol details (speed, mode, packet size)
2. **Design Driver Skeleton** → constants, structs, compile-time config
3. **Implement Core** → init(), ISR handlers, buffer logic, user-facing API
4. **Validate** → example usage + notes on timing, latency, throughput
5. **Optimize** → suggest DMA, interrupt priorities, or RTOS tasks if needed
6. **Iterate** → refine with improved versions as hardware interaction feedback is provided

---

#### Imported: 🎯 Role & Objectives

- Deliver **complete, compilable firmware and driver modules** for ARM Cortex-M platforms.
- Implement **peripheral drivers** (I²C/SPI/UART/ADC/DAC/PWM/USB) with clean abstractions using HAL, bare-metal registers, or platform-specific libraries.
- Provide **software architecture guidance**: layering, HAL patterns, interrupt safety, memory management.
- Show **robust concurrency patterns**: ISRs, ring buffers, event queues, cooperative scheduling, FreeRTOS/Zephyr integration.
- Optimize for **performance and determinism**: DMA transfers, cache effects, timing constraints, memory barriers.
- Focus on **software maintainability**: code comments, unit-testable modules, modular driver design.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @arm-cortex-expert to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @arm-cortex-expert against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @arm-cortex-expert for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @arm-cortex-expert using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: 🛠 Example: SPI Driver for External Sensor

**Pattern:** Create non-blocking SPI drivers with transaction-based read/write:

- Configure SPI (clock speed, mode, bit order)
- Use CS pin control with proper timing
- Abstract register read/write operations
- Example: `sensorReadRegister(0x0F)` for WHO_AM_I
- For high throughput (>500 kHz), use DMA transfers

**Platform-specific APIs:**

- **Teensy 4.x**: `SPI.beginTransaction(SPISettings(speed, order, mode))` → `SPI.transfer(data)` → `SPI.endTransaction()`
- **STM32**: `HAL_SPI_Transmit()` / `HAL_SPI_Receive()` or LL drivers
- **nRF52**: `nrfx_spi_xfer()` or `nrf_drv_spi_transfer()`
- **SAMD**: Configure SERCOM in SPI master mode with `SERCOM_SPI_MODE_MASTER`

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Safety Over Performance: correctness first; optimize after profiling
- Full Solutions: complete drivers with init, ISR, example usage — not snippets
- Explain Internals: annotate register usage, buffer structures, ISR flows
- Safe Defaults: guard against buffer overruns, blocking calls, priority inversions, missing barriers
- Document Tradeoffs: blocking vs async, RAM vs flash, throughput vs CPU load
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: ⚙️ Operating Principles

- **Safety Over Performance:** correctness first; optimize after profiling
- **Full Solutions:** complete drivers with init, ISR, example usage — not snippets
- **Explain Internals:** annotate register usage, buffer structures, ISR flows
- **Safe Defaults:** guard against buffer overruns, blocking calls, priority inversions, missing barriers
- **Document Tradeoffs:** blocking vs async, RAM vs flash, throughput vs CPU load

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/arm-cortex-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 🧠 Knowledge Base

**Target Platforms**

- **Teensy 4.x** (i.MX RT1062, Cortex-M7 600 MHz, tightly coupled memory, caches, DMA)
- **STM32** (F4/F7/H7 series, Cortex-M4/M7, HAL/LL drivers, STM32CubeMX)
- **nRF52** (Nordic Semiconductor, Cortex-M4, BLE, nRF SDK/Zephyr)
- **SAMD** (Microchip/Atmel, Cortex-M0+/M4, Arduino/bare-metal)

**Core Competencies**

- Writing register-level drivers for I²C, SPI, UART, CAN, SDIO
- Interrupt-driven data pipelines and non-blocking APIs
- DMA usage for high-throughput (ADC, SPI, audio, UART)
- Implementing protocol stacks (BLE, USB CDC/MSC/HID, MIDI)
- Peripheral abstraction layers and modular codebases
- Platform-specific integration (Teensyduino, STM32 HAL, nRF SDK, Arduino SAMD)

**Advanced Topics**

- Cooperative vs. preemptive scheduling (FreeRTOS, Zephyr, bare-metal schedulers)
- Memory safety: avoiding race conditions, cache line alignment, stack/heap balance
- ARM Cortex-M7 memory barriers for MMIO and DMA/cache coherency
- Efficient C++17/Rust patterns for embedded (templates, constexpr, zero-cost abstractions)
- Cross-MCU messaging over SPI/I²C/USB/BLE

---

#### Imported: 🛡️ Safety-Critical Patterns for ARM Cortex-M7 (Teensy 4.x, STM32 F7/H7)

### Memory Barriers for MMIO (ARM Cortex-M7 Weakly-Ordered Memory)

**CRITICAL:** ARM Cortex-M7 has weakly-ordered memory. The CPU and hardware can reorder register reads/writes relative to other operations.

**Symptoms of Missing Barriers:**

- "Works with debug prints, fails without them" (print adds implicit delay)
- Register writes don't take effect before next instruction executes
- Reading stale register values despite hardware updates
- Intermittent failures that disappear with optimization level changes

#### Implementation Pattern

**C/C++:** Wrap register access with `__DMB()` (data memory barrier) before/after reads, `__DSB()` (data synchronization barrier) after writes. Create helper functions: `mmio_read()`, `mmio_write()`, `mmio_modify()`.

**Rust:** Use `cortex_m::asm::dmb()` and `cortex_m::asm::dsb()` around volatile reads/writes. Create macros like `safe_read_reg!()`, `safe_write_reg!()`, `safe_modify_reg!()` that wrap HAL register access.

**Why This Matters:** M7 reorders memory operations for performance. Without barriers, register writes may not complete before next instruction, or reads return stale cached values.

### DMA and Cache Coherency

**CRITICAL:** ARM Cortex-M7 devices (Teensy 4.x, STM32 F7/H7) have data caches. DMA and CPU can see different data without cache maintenance.

**Alignment Requirements (CRITICAL):**

- All DMA buffers: **32-byte aligned** (ARM Cortex-M7 cache line size)
- Buffer size: **multiple of 32 bytes**
- Violating alignment corrupts adjacent memory during cache invalidate

**Memory Placement Strategies (Best to Worst):**

1. **DTCM/SRAM** (Non-cacheable, fastest CPU access)
   - C++: `__attribute__((section(".dtcm.bss"))) __attribute__((aligned(32))) static uint8_t buffer[512];`
   - Rust: `#[link_section = ".dtcm"] #[repr(C, align(32))] static mut BUFFER: [u8; 512] = [0; 512];`

2. **MPU-configured Non-cacheable regions** - Configure OCRAM/SRAM regions as non-cacheable via MPU

3. **Cache Maintenance** (Last resort - slowest)
   - Before DMA reads from memory: `arm_dcache_flush_delete()` or `cortex_m::cache::clean_dcache_by_range()`
   - After DMA writes to memory: `arm_dcache_delete()` or `cortex_m::cache::invalidate_dcache_by_range()`

### Address Validation Helper (Debug Builds)

**Best practice:** Validate MMIO addresses in debug builds using `is_valid_mmio_address(addr)` checking addr is within valid peripheral ranges (e.g., 0x40000000-0x4FFFFFFF for peripherals, 0xE0000000-0xE00FFFFF for ARM Cortex-M system peripherals). Use `#ifdef DEBUG` guards and halt on invalid addresses.

### Write-1-to-Clear (W1C) Register Pattern

Many status registers (especially i.MX RT, STM32) clear by writing 1, not 0:

```cpp
uint32_t status = mmio_read(&USB1_USBSTS);
mmio_write(&USB1_USBSTS, status);  // Write bits back to clear them
```

**Common W1C:** `USBSTS`, `PORTSC`, CCM status. **Wrong:** `status &= ~bit` does nothing on W1C registers.

### Platform Safety & Gotchas

**⚠️ Voltage Tolerances:**

- Most platforms: GPIO max 3.3V (NOT 5V tolerant except STM32 FT pins)
- Use level shifters for 5V interfaces
- Check datasheet current limits (typically 6-25mA)

**Teensy 4.x:** FlexSPI dedicated to Flash/PSRAM only • EEPROM emulated (limit writes <10Hz) • LPSPI max 30MHz • Never change CCM clocks while peripherals active

**STM32 F7/H7:** Clock domain config per peripheral • Fixed DMA stream/channel assignments • GPIO speed affects slew rate/power

**nRF52:** SAADC needs calibration after power-on • GPIOTE limited (8 channels) • Radio shares priority levels

**SAMD:** SERCOM needs careful pin muxing • GCLK routing critical • Limited DMA on M0+ variants

### Modern Rust: Never Use `static mut`

**CORRECT Patterns:**

```rust
static READY: AtomicBool = AtomicBool::new(false);
static STATE: Mutex<RefCell<Option<T>>> = Mutex::new(RefCell::new(None));
// Access: critical_section::with(|cs| STATE.borrow_ref_mut(cs))
```

**WRONG:** `static mut` is undefined behavior (data races).

**Atomic Ordering:** `Relaxed` (CPU-only) • `Acquire/Release` (shared state) • `AcqRel` (CAS) • `SeqCst` (rarely needed)

---

#### Imported: 🎯 Interrupt Priorities & NVIC Configuration

**Platform-Specific Priority Levels:**

- **M0/M0+**: 2-4 priority levels (limited)
- **M3/M4/M7**: 8-256 priority levels (configurable)

**Key Principles:**

- **Lower number = higher priority** (e.g., priority 0 preempts priority 1)
- **ISRs at same priority level cannot preempt each other**
- Priority grouping: preemption priority vs sub-priority (M3/M4/M7)
- Reserve highest priorities (0-2) for time-critical operations (DMA, timers)
- Use middle priorities (3-7) for normal peripherals (UART, SPI, I2C)
- Use lowest priorities (8+) for background tasks

**Configuration:**

- C/C++: `NVIC_SetPriority(IRQn, priority)` or `HAL_NVIC_SetPriority()`
- Rust: `NVIC::set_priority()` or use PAC-specific functions

---

#### Imported: 🔒 Critical Sections & Interrupt Masking

**Purpose:** Protect shared data from concurrent access by ISRs and main code.

**C/C++:**

```cpp
__disable_irq(); /* critical section */ __enable_irq();  // Blocks all

// M3/M4/M7: Mask only lower-priority interrupts
uint32_t basepri = __get_BASEPRI();
__set_BASEPRI(priority_threshold << (8 - __NVIC_PRIO_BITS));
/* critical section */
__set_BASEPRI(basepri);
```

**Rust:** `cortex_m::interrupt::free(|cs| { /* use cs token */ })`

**Best Practices:**

- **Keep critical sections SHORT** (microseconds, not milliseconds)
- Prefer BASEPRI over PRIMASK when possible (allows high-priority ISRs to run)
- Use atomic operations when feasible instead of disabling interrupts
- Document critical section rationale in comments

---

#### Imported: 🐛 Hardfault Debugging Basics

**Common Causes:**

- Unaligned memory access (especially on M0/M0+)
- Null pointer dereference
- Stack overflow (SP corrupted or overflows into heap/data)
- Illegal instruction or executing data as code
- Writing to read-only memory or invalid peripheral addresses

**Inspection Pattern (M3/M4/M7):**

- Check `HFSR` (HardFault Status Register) for fault type
- Check `CFSR` (Configurable Fault Status Register) for detailed cause
- Check `MMFAR` / `BFAR` for faulting address (if valid)
- Inspect stack frame: `R0-R3, R12, LR, PC, xPSR`

**Platform Limitations:**

- **M0/M0+**: Limited fault information (no CFSR, MMFAR, BFAR)
- **M3/M4/M7**: Full fault registers available

**Debug Tip:** Use hardfault handler to capture stack frame and print/log registers before reset.

---

#### Imported: 📊 Cortex-M Architecture Differences

| Feature            | M0/M0+                   | M3       | M4/M4F                | M7/M7F               |
| ------------------ | ------------------------ | -------- | --------------------- | -------------------- |
| **Max Clock**      | ~50 MHz                  | ~100 MHz | ~180 MHz              | ~600 MHz             |
| **ISA**            | Thumb-1 only             | Thumb-2  | Thumb-2 + DSP         | Thumb-2 + DSP        |
| **MPU**            | M0+ optional             | Optional | Optional              | Optional             |
| **FPU**            | No                       | No       | M4F: single precision | M7F: single + double |
| **Cache**          | No                       | No       | No                    | I-cache + D-cache    |
| **TCM**            | No                       | No       | No                    | ITCM + DTCM          |
| **DWT**            | No                       | Yes      | Yes                   | Yes                  |
| **Fault Handling** | Limited (HardFault only) | Full     | Full                  | Full                 |

---

#### Imported: 🧮 FPU Context Saving

**Lazy Stacking (Default on M4F/M7F):** FPU context (S0-S15, FPSCR) saved only if ISR uses FPU. Reduces latency for non-FPU ISRs but creates variable timing.

**Disable for deterministic latency:** Configure `FPU->FPCCR` (clear LSPEN bit) in hard real-time systems or when ISRs always use FPU.

---

#### Imported: 🛡️ Stack Overflow Protection

**MPU Guard Pages (Best):** Configure no-access MPU region below stack. Triggers MemManage fault on M3/M4/M7. Limited on M0/M0+.

**Canary Values (Portable):** Magic value (e.g., `0xDEADBEEF`) at stack bottom, check periodically.

**Watchdog:** Indirect detection via timeout, provides recovery. **Best:** MPU guard pages, else canary + watchdog.

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

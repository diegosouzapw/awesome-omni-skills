---
name: threejs-shaders
description: "Three.js Shaders workflow skill. Use this skill when the user needs Three.js shaders - GLSL, ShaderMaterial, uniforms, custom effects. Use when creating custom visual effects, modifying vertices, writing fragment shaders, or extending built-in materials and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["threejs-shaders", "three", "shaders", "glsl", "shadermaterial", "uniforms", "custom", "effects"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Three.js Shaders

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/threejs-shaders` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Three.js Shaders

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ShaderMaterial vs RawShaderMaterial, Uniforms, Varyings, Common Shader Patterns, Extending Built-in Materials, GLSL Built-in Functions.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need custom shader logic in Three.js.
- The task involves ShaderMaterial, uniforms, GLSL, vertex deformation, or fragment-based effects.
- You are extending material behavior beyond what built-in materials provide.
- Use when the request clearly matches the imported source intent: Three.js shaders - GLSL, ShaderMaterial, uniforms, custom effects. Use when creating custom visual effects, modifying vertices, writing fragment shaders, or extending built-in materials.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: ShaderMaterial vs RawShaderMaterial

### ShaderMaterial

Three.js provides built-in uniforms and attributes.

```javascript
const material = new THREE.ShaderMaterial({
  vertexShader: `
    // Built-in uniforms available:
    // uniform mat4 modelMatrix;
    // uniform mat4 modelViewMatrix;
    // uniform mat4 projectionMatrix;
    // uniform mat4 viewMatrix;
    // uniform mat3 normalMatrix;
    // uniform vec3 cameraPosition;

    // Built-in attributes available:
    // attribute vec3 position;
    // attribute vec3 normal;
    // attribute vec2 uv;

    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `,
});
```

### RawShaderMaterial

Full control - you define everything.

```javascript
const material = new THREE.RawShaderMaterial({
  uniforms: {
    projectionMatrix: { value: camera.projectionMatrix },
    modelViewMatrix: { value: new THREE.Matrix4() },
  },
  vertexShader: `
    precision highp float;

    attribute vec3 position;
    uniform mat4 projectionMatrix;
    uniform mat4 modelViewMatrix;

    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    precision highp float;

    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `,
});
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @threejs-shaders to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @threejs-shaders against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @threejs-shaders for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @threejs-shaders using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```javascript
import * as THREE from "three";

const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    color: { value: new THREE.Color(0xff0000) },
  },
  vertexShader: `
    void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform vec3 color;

    void main() {
      gl_FragColor = vec4(color, 1.0);
    }
  `,
});

// Update in animation loop
material.uniforms.time.value = clock.getElapsedTime();
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/threejs-shaders`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

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

#### Imported: Uniforms

### Uniform Types

```javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    // Numbers
    floatValue: { value: 1.5 },
    intValue: { value: 1 },

    // Vectors
    vec2Value: { value: new THREE.Vector2(1, 2) },
    vec3Value: { value: new THREE.Vector3(1, 2, 3) },
    vec4Value: { value: new THREE.Vector4(1, 2, 3, 4) },

    // Colors (converted to vec3)
    colorValue: { value: new THREE.Color(0xff0000) },

    // Matrices
    mat3Value: { value: new THREE.Matrix3() },
    mat4Value: { value: new THREE.Matrix4() },

    // Textures
    textureValue: { value: texture },
    cubeTextureValue: { value: cubeTexture },

    // Arrays
    floatArray: { value: [1.0, 2.0, 3.0] },
    vec3Array: {
      value: [new THREE.Vector3(1, 0, 0), new THREE.Vector3(0, 1, 0)],
    },
  },
});
```

### GLSL Declarations

```glsl
// In shader
uniform float floatValue;
uniform int intValue;
uniform vec2 vec2Value;
uniform vec3 vec3Value;
uniform vec3 colorValue;    // Color becomes vec3
uniform vec4 vec4Value;
uniform mat3 mat3Value;
uniform mat4 mat4Value;
uniform sampler2D textureValue;
uniform samplerCube cubeTextureValue;
uniform float floatArray[3];
uniform vec3 vec3Array[2];
```

### Updating Uniforms

```javascript
// Direct assignment
material.uniforms.time.value = clock.getElapsedTime();

// Vector/Color updates
material.uniforms.position.value.set(x, y, z);
material.uniforms.color.value.setHSL(hue, 1, 0.5);

// Matrix updates
material.uniforms.matrix.value.copy(mesh.matrixWorld);
```

#### Imported: Varyings

Pass data from vertex to fragment shader.

```javascript
const material = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      vUv = uv;
      vNormal = normalize(normalMatrix * normal);
      vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    varying vec3 vNormal;
    varying vec3 vPosition;

    void main() {
      // Use interpolated values
      gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);
    }
  `,
});
```

#### Imported: Common Shader Patterns

### Texture Sampling

```javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    map: { value: texture },
  },
  vertexShader: `
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    uniform sampler2D map;
    varying vec2 vUv;

    void main() {
      vec4 texColor = texture2D(map, vUv);
      gl_FragColor = texColor;
    }
  `,
});
```

### Vertex Displacement

```javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    time: { value: 0 },
    amplitude: { value: 0.5 },
  },
  vertexShader: `
    uniform float time;
    uniform float amplitude;

    void main() {
      vec3 pos = position;

      // Wave displacement
      pos.z += sin(pos.x * 5.0 + time) * amplitude;
      pos.z += sin(pos.y * 5.0 + time) * amplitude;

      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    void main() {
      gl_FragColor = vec4(0.5, 0.8, 1.0, 1.0);
    }
  `,
});
```

### Fresnel Effect

```javascript
const material = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vWorldPosition;

    void main() {
      // cameraPosition is auto-provided by ShaderMaterial
      vec3 viewDirection = normalize(cameraPosition - vWorldPosition);
      float fresnel = pow(1.0 - dot(viewDirection, vNormal), 3.0);

      vec3 baseColor = vec3(0.0, 0.0, 0.5);
      vec3 fresnelColor = vec3(0.5, 0.8, 1.0);

      gl_FragColor = vec4(mix(baseColor, fresnelColor, fresnel), 1.0);
    }
  `,
});
```

### Noise-Based Effects

```glsl
// Simple noise function
float random(vec2 st) {
  return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

// Value noise
float noise(vec2 st) {
  vec2 i = floor(st);
  vec2 f = fract(st);

  float a = random(i);
  float b = random(i + vec2(1.0, 0.0));
  float c = random(i + vec2(0.0, 1.0));
  float d = random(i + vec2(1.0, 1.0));

  vec2 u = f * f * (3.0 - 2.0 * f);

  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Usage
float n = noise(vUv * 10.0 + time);
```

### Gradient

```glsl
// Linear gradient
vec3 color = mix(colorA, colorB, vUv.y);

// Radial gradient
float dist = distance(vUv, vec2(0.5));
vec3 color = mix(centerColor, edgeColor, dist * 2.0);

// Smooth gradient with custom curve
float t = smoothstep(0.0, 1.0, vUv.y);
vec3 color = mix(colorA, colorB, t);
```

### Rim Lighting

```javascript
const material = new THREE.ShaderMaterial({
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vNormal = normalize(normalMatrix * normal);
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vViewPosition = mvPosition.xyz;
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;

    void main() {
      vec3 viewDir = normalize(-vViewPosition);
      float rim = 1.0 - max(0.0, dot(viewDir, vNormal));
      rim = pow(rim, 4.0);

      vec3 baseColor = vec3(0.2, 0.2, 0.8);
      vec3 rimColor = vec3(1.0, 0.5, 0.0);

      gl_FragColor = vec4(baseColor + rimColor * rim, 1.0);
    }
  `,
});
```

### Dissolve Effect

```glsl
uniform float progress;
uniform sampler2D noiseMap;

void main() {
  float noise = texture2D(noiseMap, vUv).r;

  if (noise < progress) {
    discard;
  }

  // Edge glow
  float edge = smoothstep(progress, progress + 0.1, noise);
  vec3 edgeColor = vec3(1.0, 0.5, 0.0);
  vec3 baseColor = vec3(0.5);

  gl_FragColor = vec4(mix(edgeColor, baseColor, edge), 1.0);
}
```

#### Imported: Extending Built-in Materials

### onBeforeCompile

Modify existing material shaders.

```javascript
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });

material.onBeforeCompile = (shader) => {
  // Add custom uniform
  shader.uniforms.time = { value: 0 };

  // Store reference for updates
  material.userData.shader = shader;

  // Modify vertex shader
  shader.vertexShader = shader.vertexShader.replace(
    "#include <begin_vertex>",
    `
    #include <begin_vertex>
    transformed.y += sin(position.x * 10.0 + time) * 0.1;
    `,
  );

  // Add uniform declaration
  shader.vertexShader = "uniform float time;\n" + shader.vertexShader;
};

// Update in animation loop
if (material.userData.shader) {
  material.userData.shader.uniforms.time.value = clock.getElapsedTime();
}
```

### Common Injection Points

```javascript
// Vertex shader chunks
"#include <begin_vertex>"; // After position is calculated
"#include <project_vertex>"; // After gl_Position
"#include <beginnormal_vertex>"; // Normal calculation start

// Fragment shader chunks
"#include <color_fragment>"; // After diffuse color
"#include <output_fragment>"; // Final output
"#include <fog_fragment>"; // After fog applied
```

#### Imported: GLSL Built-in Functions

### Math Functions

```glsl
// Basic
abs(x), sign(x), floor(x), ceil(x), fract(x)
mod(x, y), min(x, y), max(x, y), clamp(x, min, max)
mix(a, b, t), step(edge, x), smoothstep(edge0, edge1, x)

// Trigonometry
sin(x), cos(x), tan(x)
asin(x), acos(x), atan(y, x), atan(x)
radians(degrees), degrees(radians)

// Exponential
pow(x, y), exp(x), log(x), exp2(x), log2(x)
sqrt(x), inversesqrt(x)
```

### Vector Functions

```glsl
// Length and distance
length(v), distance(p0, p1), dot(x, y), cross(x, y)

// Normalization
normalize(v)

// Reflection and refraction
reflect(I, N), refract(I, N, eta)

// Component-wise
lessThan(x, y), lessThanEqual(x, y)
greaterThan(x, y), greaterThanEqual(x, y)
equal(x, y), notEqual(x, y)
any(bvec), all(bvec)
```

### Texture Functions

```glsl
// GLSL 1.0 (default) - use texture2D/textureCube
texture2D(sampler, coord)
texture2D(sampler, coord, bias)
textureCube(sampler, coord)

// GLSL 3.0 (glslVersion: THREE.GLSL3) - use texture()
// texture(sampler, coord) replaces texture2D/textureCube
// Also use: out vec4 fragColor instead of gl_FragColor

// Texture size (GLSL 1.30+)
textureSize(sampler, lod)
```

#### Imported: Common Material Properties

```javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    /* ... */
  },
  vertexShader: "/* ... */",
  fragmentShader: "/* ... */",

  // Rendering
  transparent: true,
  opacity: 1.0,
  side: THREE.DoubleSide,
  depthTest: true,
  depthWrite: true,

  // Blending
  blending: THREE.NormalBlending,
  // AdditiveBlending, SubtractiveBlending, MultiplyBlending

  // Wireframe
  wireframe: false,
  wireframeLinewidth: 1, // Note: >1 has no effect on most platforms (WebGL limitation)

  // Extensions
  extensions: {
    derivatives: true, // For fwidth, dFdx, dFdy
    fragDepth: true, // gl_FragDepth
    drawBuffers: true, // Multiple render targets
    shaderTextureLOD: true, // texture2DLod
  },

  // GLSL version
  glslVersion: THREE.GLSL3, // For WebGL2 features
});
```

#### Imported: Shader Includes

### Using Three.js Shader Chunks

```javascript
import { ShaderChunk } from "three";

const fragmentShader = `
  ${ShaderChunk.common}
  ${ShaderChunk.packing}

  uniform sampler2D depthTexture;
  varying vec2 vUv;

  void main() {
    float depth = texture2D(depthTexture, vUv).r;
    float linearDepth = perspectiveDepthToViewZ(depth, 0.1, 1000.0);
    gl_FragColor = vec4(vec3(-linearDepth / 100.0), 1.0);
  }
`;
```

### External Shader Files

```javascript
// With vite/webpack
import vertexShader from "./shaders/vertex.glsl";
import fragmentShader from "./shaders/fragment.glsl";

const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
});
```

#### Imported: Instanced Shaders

```javascript
// Instanced attribute
const offsets = new Float32Array(instanceCount * 3);
// Fill offsets...
geometry.setAttribute("offset", new THREE.InstancedBufferAttribute(offsets, 3));

const material = new THREE.ShaderMaterial({
  vertexShader: `
    attribute vec3 offset;

    void main() {
      vec3 pos = position + offset;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
    }
  `,
  fragmentShader: `
    void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
    }
  `,
});
```

#### Imported: Debugging Shaders

```javascript
// Check for compile errors
material.onBeforeCompile = (shader) => {
  console.log("Vertex Shader:", shader.vertexShader);
  console.log("Fragment Shader:", shader.fragmentShader);
};

// Visual debugging
fragmentShader: `
  void main() {
    // Debug UV
    gl_FragColor = vec4(vUv, 0.0, 1.0);

    // Debug normals
    gl_FragColor = vec4(vNormal * 0.5 + 0.5, 1.0);

    // Debug position
    gl_FragColor = vec4(vPosition * 0.1 + 0.5, 1.0);
  }
`;

// Check WebGL errors
renderer.debug.checkShaderErrors = true;
```

#### Imported: Performance Tips

1. **Minimize uniforms**: Group related values into vectors
2. **Avoid conditionals**: Use mix/step instead of if/else
3. **Precalculate**: Move calculations to JS when possible
4. **Use textures**: For complex functions, use lookup tables
5. **Limit overdraw**: Avoid transparent objects when possible

```glsl
// Instead of:
if (value > 0.5) {
  color = colorA;
} else {
  color = colorB;
}

// Use:
color = mix(colorB, colorA, step(0.5, value));
```

#### Imported: TSL (Three.js Shading Language) - Future Direction

TSL is the new shader authoring system for Three.js, designed to work with both WebGL and WebGPU renderers. GLSL patterns above are **WebGL-only** and will not work with the WebGPU renderer.

### TSL Quick Start

```javascript
import { MeshStandardNodeMaterial } from "three/addons/nodes/Nodes.js";
import {
  uv, sin, timerLocal, vec4, color, positionLocal, normalLocal,
  float, mul, add
} from "three/addons/nodes/Nodes.js";

const material = new MeshStandardNodeMaterial();

// Animated color based on UV and time
const time = timerLocal();
material.colorNode = color(sin(add(uv().x, time)), uv().y, 0.5);

// Vertex displacement
material.positionNode = add(
  positionLocal,
  mul(normalLocal, sin(add(positionLocal.x, time)).mul(0.1))
);
```

### Key Differences from GLSL

| GLSL (WebGL only)       | TSL (WebGL + WebGPU)         |
| ----------------------- | ---------------------------- |
| `ShaderMaterial`        | `MeshStandardNodeMaterial`   |
| String-based shaders    | JavaScript node graph        |
| `onBeforeCompile`       | Node composition             |
| Manual uniforms         | `uniform()` node             |
| `texture2D()`           | `texture()` node             |
| `gl_Position`           | `positionNode`               |
| `gl_FragColor`          | `colorNode` / `outputNode`   |

### When to Use What

- **GLSL ShaderMaterial**: Existing WebGL projects, maximum shader control, porting existing shaders
- **TSL NodeMaterial**: New projects, WebGPU support needed, cross-renderer compatibility

#### Imported: See Also

- `threejs-materials` - Built-in material types
- `threejs-postprocessing` - Full-screen shader effects
- `threejs-textures` - Texture sampling in shaders

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

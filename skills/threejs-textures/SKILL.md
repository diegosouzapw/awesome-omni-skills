---
name: threejs-textures
description: "Three.js Textures workflow skill. Use this skill when the user needs Three.js textures - texture types, UV mapping, environment maps, texture settings. Use when working with images, UV coordinates, cubemaps, HDR environments, or texture optimization and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["threejs-textures", "three", "textures", "texture", "types", "mapping", "environment", "maps"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# Three.js Textures

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/threejs-textures` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Three.js Textures

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Texture Loading, Texture Configuration, Texture Types, Cube Textures, HDR Textures, Render Targets.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to load, configure, or optimize textures in Three.js.
- The task involves UV mapping, texture settings, cubemaps, environment maps, or HDR texture workflows.
- You are working on surface detail and material inputs rather than geometry or animation.
- Use when the request clearly matches the imported source intent: Three.js textures - texture types, UV mapping, environment maps, texture settings. Use when working with images, UV coordinates, cubemaps, HDR environments, or texture optimization.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Texture Loading

### Basic Loading

```javascript
const loader = new THREE.TextureLoader();

// Async with callbacks
loader.load(
  "texture.jpg",
  (texture) => console.log("Loaded"),
  (progress) => console.log("Progress"),
  (error) => console.error("Error"),
);

// Synchronous style (loads async internally)
const texture = loader.load("texture.jpg");
material.map = texture;
```

### Promise Wrapper

```javascript
function loadTexture(url) {
  return new Promise((resolve, reject) => {
    new THREE.TextureLoader().load(url, resolve, undefined, reject);
  });
}

// Usage
const [colorMap, normalMap, roughnessMap] = await Promise.all([
  loadTexture("color.jpg"),
  loadTexture("normal.jpg"),
  loadTexture("roughness.jpg"),
]);
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @threejs-textures to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @threejs-textures against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @threejs-textures for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @threejs-textures using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```javascript
import * as THREE from "three";

// Load texture
const loader = new THREE.TextureLoader();
const texture = loader.load("texture.jpg");

// Apply to material
const material = new THREE.MeshStandardMaterial({
  map: texture,
});
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/threejs-textures`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@sympy` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@systems-programming-rust-project` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tailwind-design-system` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tailwind-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Texture Configuration

### Color Space

Critical for accurate color reproduction.

```javascript
// Color/albedo textures - use sRGB
colorTexture.colorSpace = THREE.SRGBColorSpace;

// Data textures (normal, roughness, metalness, AO) - leave as default
// Do NOT set colorSpace for data textures (NoColorSpace is default)
```

### Wrapping Modes

```javascript
texture.wrapS = THREE.RepeatWrapping; // Horizontal
texture.wrapT = THREE.RepeatWrapping; // Vertical

// Options:
// THREE.ClampToEdgeWrapping - Stretches edge pixels (default)
// THREE.RepeatWrapping - Tiles the texture
// THREE.MirroredRepeatWrapping - Tiles with mirror flip
```

### Repeat, Offset, Rotation

```javascript
// Tile texture 4x4
texture.repeat.set(4, 4);
texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;

// Offset (0-1 range)
texture.offset.set(0.5, 0.5);

// Rotation (radians, around center)
texture.rotation = Math.PI / 4;
texture.center.set(0.5, 0.5); // Rotation pivot
```

### Filtering

```javascript
// Minification (texture larger than screen pixels)
texture.minFilter = THREE.LinearMipmapLinearFilter; // Default, smooth
texture.minFilter = THREE.NearestFilter; // Pixelated
texture.minFilter = THREE.LinearFilter; // Smooth, no mipmaps

// Magnification (texture smaller than screen pixels)
texture.magFilter = THREE.LinearFilter; // Smooth (default)
texture.magFilter = THREE.NearestFilter; // Pixelated (retro games)

// Anisotropic filtering (sharper at angles)
texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
```

### Generate Mipmaps

```javascript
// Usually true by default
texture.generateMipmaps = true;

// Disable for non-power-of-2 textures or data textures
texture.generateMipmaps = false;
texture.minFilter = THREE.LinearFilter;
```

#### Imported: Texture Types

### Regular Texture

```javascript
const texture = new THREE.Texture(image);
texture.needsUpdate = true;
```

### Data Texture

Create texture from raw data.

```javascript
// Create gradient texture
const size = 256;
const data = new Uint8Array(size * size * 4);

for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    const index = (i * size + j) * 4;
    data[index] = i; // R
    data[index + 1] = j; // G
    data[index + 2] = 128; // B
    data[index + 3] = 255; // A
  }
}

const texture = new THREE.DataTexture(data, size, size);
texture.needsUpdate = true;
```

### Canvas Texture

```javascript
const canvas = document.createElement("canvas");
canvas.width = 256;
canvas.height = 256;
const ctx = canvas.getContext("2d");

// Draw on canvas
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 256, 256);
ctx.fillStyle = "white";
ctx.font = "48px Arial";
ctx.fillText("Hello", 50, 150);

const texture = new THREE.CanvasTexture(canvas);

// Update when canvas changes
texture.needsUpdate = true;
```

### Video Texture

```javascript
const video = document.createElement("video");
video.src = "video.mp4";
video.loop = true;
video.muted = true;
video.play();

const texture = new THREE.VideoTexture(video);
texture.colorSpace = THREE.SRGBColorSpace;

// No need to set needsUpdate - auto-updates
```

### Compressed Textures

```javascript
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";

const ktx2Loader = new KTX2Loader();
ktx2Loader.setTranscoderPath("path/to/basis/");
ktx2Loader.detectSupport(renderer);

ktx2Loader.load("texture.ktx2", (texture) => {
  material.map = texture;
});
```

#### Imported: Cube Textures

For environment maps and skyboxes.

### CubeTextureLoader

```javascript
const loader = new THREE.CubeTextureLoader();
const cubeTexture = loader.load([
  "px.jpg",
  "nx.jpg", // +X, -X
  "py.jpg",
  "ny.jpg", // +Y, -Y
  "pz.jpg",
  "nz.jpg", // +Z, -Z
]);

// As background
scene.background = cubeTexture;

// As environment map
scene.environment = cubeTexture;
material.envMap = cubeTexture;
```

### Equirectangular to Cubemap

```javascript
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

new RGBELoader().load("environment.hdr", (texture) => {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  scene.environment = envMap;
  scene.background = envMap;

  texture.dispose();
  pmremGenerator.dispose();
});
```

#### Imported: HDR Textures

### RGBELoader

```javascript
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const loader = new RGBELoader();
loader.load("environment.hdr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
});
```

### EXRLoader

```javascript
import { EXRLoader } from "three/examples/jsm/loaders/EXRLoader.js";

const loader = new EXRLoader();
loader.load("environment.exr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
});
```

### Background Options

```javascript
scene.background = texture;
scene.backgroundBlurriness = 0.5; // 0-1, blur background
scene.backgroundIntensity = 1.0; // Brightness
scene.backgroundRotation.y = Math.PI; // Rotate background
```

#### Imported: Render Targets

Render to texture for effects.

```javascript
// Create render target
const renderTarget = new THREE.WebGLRenderTarget(512, 512, {
  minFilter: THREE.LinearFilter,
  magFilter: THREE.LinearFilter,
  format: THREE.RGBAFormat,
});

// Render scene to target
renderer.setRenderTarget(renderTarget);
renderer.render(scene, camera);
renderer.setRenderTarget(null); // Back to screen

// Use as texture
material.map = renderTarget.texture;
```

### Depth Texture

```javascript
const renderTarget = new THREE.WebGLRenderTarget(512, 512);
renderTarget.depthTexture = new THREE.DepthTexture(
  512,
  512,
  THREE.UnsignedShortType,
);

// Access depth
const depthTexture = renderTarget.depthTexture;
```

### Multi-Sample Render Target

```javascript
const renderTarget = new THREE.WebGLRenderTarget(512, 512, {
  samples: 4, // MSAA
});
```

#### Imported: CubeCamera

Dynamic environment maps for reflections.

```javascript
const cubeRenderTarget = new THREE.WebGLCubeRenderTarget(256, {
  generateMipmaps: true,
  minFilter: THREE.LinearMipmapLinearFilter,
});

const cubeCamera = new THREE.CubeCamera(0.1, 1000, cubeRenderTarget);
scene.add(cubeCamera);

// Apply to reflective material
reflectiveMaterial.envMap = cubeRenderTarget.texture;

// Update in animation loop (expensive!)
function animate() {
  // Hide reflective object, update env map, show again
  reflectiveObject.visible = false;
  cubeCamera.position.copy(reflectiveObject.position);
  cubeCamera.update(renderer, scene);
  reflectiveObject.visible = true;
}
```

#### Imported: UV Mapping

### Accessing UVs

```javascript
const uvs = geometry.attributes.uv;

// Read UV
const u = uvs.getX(vertexIndex);
const v = uvs.getY(vertexIndex);

// Modify UV
uvs.setXY(vertexIndex, newU, newV);
uvs.needsUpdate = true;
```

### Second UV Channel (for AO maps)

```javascript
// Required for aoMap
geometry.setAttribute("uv2", geometry.attributes.uv);

// Or create custom second UV
const uv2 = new Float32Array(vertexCount * 2);
// ... fill uv2 data
geometry.setAttribute("uv2", new THREE.BufferAttribute(uv2, 2));
```

### UV Transform in Shader

```javascript
const material = new THREE.ShaderMaterial({
  uniforms: {
    map: { value: texture },
    uvOffset: { value: new THREE.Vector2(0, 0) },
    uvScale: { value: new THREE.Vector2(1, 1) },
  },
  vertexShader: `
    varying vec2 vUv;
    uniform vec2 uvOffset;
    uniform vec2 uvScale;

    void main() {
      vUv = uv * uvScale + uvOffset;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: `
    varying vec2 vUv;
    uniform sampler2D map;

    void main() {
      gl_FragColor = texture2D(map, vUv);
    }
  `,
});
```

#### Imported: Texture Atlas

Multiple images in one texture.

```javascript
// Atlas with 4 sprites (2x2 grid)
const atlas = loader.load("atlas.png");
atlas.wrapS = THREE.ClampToEdgeWrapping;
atlas.wrapT = THREE.ClampToEdgeWrapping;

// Select sprite by UV offset/scale
function selectSprite(row, col, gridSize = 2) {
  atlas.offset.set(col / gridSize, 1 - (row + 1) / gridSize);
  atlas.repeat.set(1 / gridSize, 1 / gridSize);
}

// Select top-left sprite
selectSprite(0, 0);
```

#### Imported: Material Texture Maps

### PBR Texture Set

```javascript
const material = new THREE.MeshStandardMaterial({
  // Base color (sRGB)
  map: colorTexture,

  // Surface detail (Linear)
  normalMap: normalTexture,
  normalScale: new THREE.Vector2(1, 1),

  // Roughness (Linear, grayscale)
  roughnessMap: roughnessTexture,
  roughness: 1, // Multiplier

  // Metalness (Linear, grayscale)
  metalnessMap: metalnessTexture,
  metalness: 1, // Multiplier

  // Ambient occlusion (Linear, uses uv2)
  aoMap: aoTexture,
  aoMapIntensity: 1,

  // Self-illumination (sRGB)
  emissiveMap: emissiveTexture,
  emissive: 0xffffff,
  emissiveIntensity: 1,

  // Vertex displacement (Linear)
  displacementMap: displacementTexture,
  displacementScale: 0.1,
  displacementBias: 0,

  // Alpha (Linear)
  alphaMap: alphaTexture,
  transparent: true,
});

// Don't forget UV2 for AO
geometry.setAttribute("uv2", geometry.attributes.uv);
```

### Normal Map Types

```javascript
// OpenGL style normals (default)
material.normalMapType = THREE.TangentSpaceNormalMap;

// Object space normals
material.normalMapType = THREE.ObjectSpaceNormalMap;
```

#### Imported: Procedural Textures

### Noise Texture

```javascript
function generateNoiseTexture(size = 256) {
  const data = new Uint8Array(size * size * 4);

  for (let i = 0; i < size * size; i++) {
    const value = Math.random() * 255;
    data[i * 4] = value;
    data[i * 4 + 1] = value;
    data[i * 4 + 2] = value;
    data[i * 4 + 3] = 255;
  }

  const texture = new THREE.DataTexture(data, size, size);
  texture.needsUpdate = true;
  return texture;
}
```

### Gradient Texture

```javascript
function generateGradientTexture(color1, color2, size = 256) {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = 1;
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, size, 0);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);

  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, 1);

  return new THREE.CanvasTexture(canvas);
}
```

#### Imported: Texture Memory Management

### Dispose Textures

```javascript
// Single texture
texture.dispose();

// Material textures
function disposeMaterial(material) {
  const maps = [
    "map",
    "normalMap",
    "roughnessMap",
    "metalnessMap",
    "aoMap",
    "emissiveMap",
    "displacementMap",
    "alphaMap",
    "envMap",
    "lightMap",
    "bumpMap",
    "specularMap",
  ];

  maps.forEach((mapName) => {
    if (material[mapName]) {
      material[mapName].dispose();
    }
  });

  material.dispose();
}
```

### Texture Pooling

```javascript
class TexturePool {
  constructor() {
    this.textures = new Map();
    this.loader = new THREE.TextureLoader();
  }

  async get(url) {
    if (this.textures.has(url)) {
      return this.textures.get(url);
    }

    const texture = await new Promise((resolve, reject) => {
      this.loader.load(url, resolve, undefined, reject);
    });

    this.textures.set(url, texture);
    return texture;
  }

  dispose(url) {
    const texture = this.textures.get(url);
    if (texture) {
      texture.dispose();
      this.textures.delete(url);
    }
  }

  disposeAll() {
    this.textures.forEach((t) => t.dispose());
    this.textures.clear();
  }
}
```

#### Imported: Performance Tips

1. **Use power-of-2 dimensions**: 256, 512, 1024, 2048
2. **Compress textures**: KTX2/Basis for web delivery
3. **Use texture atlases**: Reduce texture switches
4. **Enable mipmaps**: For distant objects
5. **Limit texture size**: 2048 usually sufficient for web
6. **Reuse textures**: Same texture = better batching

```javascript
// Check texture memory
console.log(renderer.info.memory.textures);

// Optimize for mobile
const maxSize = renderer.capabilities.maxTextureSize;
const isMobile = /iPhone|iPad|Android/i.test(navigator.userAgent);
const textureSize = isMobile ? 1024 : 2048;
```

#### Imported: KTX2Loader BC3 Alpha Fix (r183)

As of r183, `KTX2Loader` correctly handles BC3 compressed textures with alpha channels, fixing previously incorrect alpha rendering.

#### Imported: ISO 21496-1 Gainmap Metadata (r183)

Three.js r183 supports ISO 21496-1 gainmap metadata in HDR textures, enabling proper tone mapping of gainmap-based HDR images (such as those produced by recent smartphone cameras).

#### Imported: See Also

- `threejs-materials` - Applying textures to materials
- `threejs-loaders` - Loading texture files
- `threejs-shaders` - Custom texture sampling

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

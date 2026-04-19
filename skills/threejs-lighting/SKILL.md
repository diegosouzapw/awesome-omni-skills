---
name: threejs-lighting
description: "Three.js Lighting workflow skill. Use this skill when the user needs Three.js lighting - light types, shadows, environment lighting. Use when adding lights, configuring shadows, setting up IBL, or optimizing lighting performance and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["threejs-lighting", "three", "lighting", "light", "types", "shadows", "environment", "use"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Three.js Lighting

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/threejs-lighting` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Three.js Lighting

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Light Types Overview, AmbientLight, HemisphereLight, DirectionalLight, PointLight, SpotLight.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to add or tune lighting in a Three.js scene.
- The task involves light types, shadows, environment lighting, or lighting performance tradeoffs.
- You want to improve scene readability, realism, or mood through Three.js lighting setup.
- Use when the request clearly matches the imported source intent: Three.js lighting - light types, shadows, environment lighting. Use when adding lights, configuring shadows, setting up IBL, or optimizing lighting performance.
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

1. ### Enable Shadows ``javascript // 1.
2. Enable on renderer renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Shadow map types: // THREE.BasicShadowMap - fastest, low quality // THREE.PCFShadowMap - default, filtered // THREE.PCFSoftShadowMap - softer edges // THREE.VSMShadowMap - variance shadow map // 2.
3. Enable on light light.castShadow = true; // 3.
4. Enable on objects mesh.castShadow = true; mesh.receiveShadow = true; // Ground plane floor.receiveShadow = true; floor.castShadow = false; // Usually false for floors ### Optimizing Shadows javascript // Tight shadow camera frustum const d = 10; dirLight.shadow.camera.left = -d; dirLight.shadow.camera.right = d; dirLight.shadow.camera.top = d; dirLight.shadow.camera.bottom = -d; dirLight.shadow.camera.near = 0.5; dirLight.shadow.camera.far = 30; // Fix shadow acne dirLight.shadow.bias = -0.0001; // Depth bias dirLight.shadow.normalBias = 0.02; // Bias along normal // Shadow map size (balance quality vs performance) // 512 - low quality // 1024 - medium quality // 2048 - high quality // 4096 - very high quality (expensive) ### Contact Shadows (Fake, Fast) javascript import { ContactShadows } from "three/examples/jsm/objects/ContactShadows.js"; const contactShadows = new ContactShadows({ resolution: 512, blur: 2, opacity: 0.5, scale: 10, position: [0, 0, 0], }); scene.add(contactShadows); ### Three-Point Lighting javascript // Key light (main light) const keyLight = new THREE.DirectionalLight(0xffffff, 1); keyLight.position.set(5, 5, 5); scene.add(keyLight); // Fill light (softer, opposite side) const fillLight = new THREE.DirectionalLight(0xffffff, 0.5); fillLight.position.set(-5, 3, 5); scene.add(fillLight); // Back light (rim lighting) const backLight = new THREE.DirectionalLight(0xffffff, 0.3); backLight.position.set(0, 5, -5); scene.add(backLight); // Ambient fill const ambient = new THREE.AmbientLight(0x404040, 0.3); scene.add(ambient); ### Outdoor Daylight javascript // Sun const sun = new THREE.DirectionalLight(0xffffcc, 1.5); sun.position.set(50, 100, 50); sun.castShadow = true; scene.add(sun); // Sky ambient const hemi = new THREE.HemisphereLight(0x87ceeb, 0x8b4513, 0.6); scene.add(hemi); ### Indoor Studio javascript // Multiple area lights RectAreaLightUniformsLib.init(); const light1 = new THREE.RectAreaLight(0xffffff, 5, 2, 2); light1.position.set(3, 3, 3); light1.lookAt(0, 0, 0); scene.add(light1); const light2 = new THREE.RectAreaLight(0xffffff, 3, 2, 2); light2.position.set(-3, 3, 3); light2.lookAt(0, 0, 0); scene.add(light2); // Ambient fill const ambient = new THREE.AmbientLight(0x404040, 0.2); scene.add(ambient); ``
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Shadow Setup

### Enable Shadows

```javascript
// 1. Enable on renderer
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Shadow map types:
// THREE.BasicShadowMap - fastest, low quality
// THREE.PCFShadowMap - default, filtered
// THREE.PCFSoftShadowMap - softer edges
// THREE.VSMShadowMap - variance shadow map

// 2. Enable on light
light.castShadow = true;

// 3. Enable on objects
mesh.castShadow = true;
mesh.receiveShadow = true;

// Ground plane
floor.receiveShadow = true;
floor.castShadow = false; // Usually false for floors
```

### Optimizing Shadows

```javascript
// Tight shadow camera frustum
const d = 10;
dirLight.shadow.camera.left = -d;
dirLight.shadow.camera.right = d;
dirLight.shadow.camera.top = d;
dirLight.shadow.camera.bottom = -d;
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 30;

// Fix shadow acne
dirLight.shadow.bias = -0.0001; // Depth bias
dirLight.shadow.normalBias = 0.02; // Bias along normal

// Shadow map size (balance quality vs performance)
// 512 - low quality
// 1024 - medium quality
// 2048 - high quality
// 4096 - very high quality (expensive)
```

### Contact Shadows (Fake, Fast)

```javascript
import { ContactShadows } from "three/examples/jsm/objects/ContactShadows.js";

const contactShadows = new ContactShadows({
  resolution: 512,
  blur: 2,
  opacity: 0.5,
  scale: 10,
  position: [0, 0, 0],
});
scene.add(contactShadows);
```

#### Imported: Common Lighting Setups

### Three-Point Lighting

```javascript
// Key light (main light)
const keyLight = new THREE.DirectionalLight(0xffffff, 1);
keyLight.position.set(5, 5, 5);
scene.add(keyLight);

// Fill light (softer, opposite side)
const fillLight = new THREE.DirectionalLight(0xffffff, 0.5);
fillLight.position.set(-5, 3, 5);
scene.add(fillLight);

// Back light (rim lighting)
const backLight = new THREE.DirectionalLight(0xffffff, 0.3);
backLight.position.set(0, 5, -5);
scene.add(backLight);

// Ambient fill
const ambient = new THREE.AmbientLight(0x404040, 0.3);
scene.add(ambient);
```

### Outdoor Daylight

```javascript
// Sun
const sun = new THREE.DirectionalLight(0xffffcc, 1.5);
sun.position.set(50, 100, 50);
sun.castShadow = true;
scene.add(sun);

// Sky ambient
const hemi = new THREE.HemisphereLight(0x87ceeb, 0x8b4513, 0.6);
scene.add(hemi);
```

### Indoor Studio

```javascript
// Multiple area lights
RectAreaLightUniformsLib.init();

const light1 = new THREE.RectAreaLight(0xffffff, 5, 2, 2);
light1.position.set(3, 3, 3);
light1.lookAt(0, 0, 0);
scene.add(light1);

const light2 = new THREE.RectAreaLight(0xffffff, 3, 2, 2);
light2.position.set(-3, 3, 3);
light2.lookAt(0, 0, 0);
scene.add(light2);

// Ambient fill
const ambient = new THREE.AmbientLight(0x404040, 0.2);
scene.add(ambient);
```

#### Imported: Light Types Overview

| Light            | Description            | Shadow Support | Cost     |
| ---------------- | ---------------------- | -------------- | -------- |
| AmbientLight     | Uniform everywhere     | No             | Very Low |
| HemisphereLight  | Sky/ground gradient    | No             | Very Low |
| DirectionalLight | Parallel rays (sun)    | Yes            | Low      |
| PointLight       | Omnidirectional (bulb) | Yes            | Medium   |
| SpotLight        | Cone-shaped            | Yes            | Medium   |
| RectAreaLight    | Area light (window)    | No\*           | High     |

\*RectAreaLight shadows require custom solutions

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @threejs-lighting to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @threejs-lighting against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @threejs-lighting for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @threejs-lighting using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```javascript
import * as THREE from "three";

// Basic lighting setup
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/threejs-lighting`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@supply-chain-risk-auditor` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sveltekit` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swift-concurrency-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@swiftui-expert-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: AmbientLight

Illuminates all objects equally. No direction, no shadows.

```javascript
// AmbientLight(color, intensity)
const ambient = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambient);

// Modify at runtime
ambient.color.set(0xffffcc);
ambient.intensity = 0.3;
```

#### Imported: HemisphereLight

Gradient from sky to ground color. Good for outdoor scenes.

```javascript
// HemisphereLight(skyColor, groundColor, intensity)
const hemi = new THREE.HemisphereLight(0x87ceeb, 0x8b4513, 0.6);
hemi.position.set(0, 50, 0);
scene.add(hemi);

// Properties
hemi.color; // Sky color
hemi.groundColor; // Ground color
hemi.intensity;
```

#### Imported: DirectionalLight

Parallel light rays. Simulates distant light source (sun).

```javascript
// DirectionalLight(color, intensity)
const dirLight = new THREE.DirectionalLight(0xffffff, 1);
dirLight.position.set(5, 10, 5);

// Light points at target (default: 0, 0, 0)
dirLight.target.position.set(0, 0, 0);
scene.add(dirLight.target);

scene.add(dirLight);
```

### DirectionalLight Shadows

```javascript
dirLight.castShadow = true;

// Shadow map size (higher = sharper, more expensive)
dirLight.shadow.mapSize.width = 2048;
dirLight.shadow.mapSize.height = 2048;

// Shadow camera (orthographic)
dirLight.shadow.camera.near = 0.5;
dirLight.shadow.camera.far = 50;
dirLight.shadow.camera.left = -10;
dirLight.shadow.camera.right = 10;
dirLight.shadow.camera.top = 10;
dirLight.shadow.camera.bottom = -10;

// Shadow softness
dirLight.shadow.radius = 4; // Blur radius (PCFSoftShadowMap only)

// Shadow bias (fixes shadow acne)
dirLight.shadow.bias = -0.0001;
dirLight.shadow.normalBias = 0.02;

// Helper to visualize shadow camera
const helper = new THREE.CameraHelper(dirLight.shadow.camera);
scene.add(helper);
```

#### Imported: PointLight

Emits light in all directions from a point. Like a light bulb.

```javascript
// PointLight(color, intensity, distance, decay)
const pointLight = new THREE.PointLight(0xffffff, 1, 100, 2);
pointLight.position.set(0, 5, 0);
scene.add(pointLight);

// Properties
pointLight.distance; // Maximum range (0 = infinite)
pointLight.decay; // Light falloff (physically correct = 2)
```

### PointLight Shadows

```javascript
pointLight.castShadow = true;
pointLight.shadow.mapSize.width = 1024;
pointLight.shadow.mapSize.height = 1024;

// Shadow camera (perspective - 6 directions for cube map)
pointLight.shadow.camera.near = 0.5;
pointLight.shadow.camera.far = 50;

pointLight.shadow.bias = -0.005;
```

#### Imported: SpotLight

Cone-shaped light. Like a flashlight or stage light.

```javascript
// SpotLight(color, intensity, distance, angle, penumbra, decay)
const spotLight = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 6, 0.5, 2);
spotLight.position.set(0, 10, 0);

// Target (light points at this)
spotLight.target.position.set(0, 0, 0);
scene.add(spotLight.target);

scene.add(spotLight);

// Properties
spotLight.angle; // Cone angle (radians, max Math.PI/2)
spotLight.penumbra; // Soft edge (0-1)
spotLight.distance; // Range
spotLight.decay; // Falloff
```

### SpotLight Shadows

```javascript
spotLight.castShadow = true;
spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

// Shadow camera (perspective)
spotLight.shadow.camera.near = 0.5;
spotLight.shadow.camera.far = 50;
spotLight.shadow.camera.fov = 30;

spotLight.shadow.bias = -0.0001;

// Focus (affects shadow projection)
spotLight.shadow.focus = 1;
```

#### Imported: RectAreaLight

Rectangular area light. Great for soft, realistic lighting.

```javascript
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";
import { RectAreaLightUniformsLib } from "three/examples/jsm/lights/RectAreaLightUniformsLib.js";

// Must initialize uniforms first (WebGL renderer only)
RectAreaLightUniformsLib.init();

// RectAreaLight(color, intensity, width, height)
const rectLight = new THREE.RectAreaLight(0xffffff, 5, 4, 2);
rectLight.position.set(0, 5, 0);
rectLight.lookAt(0, 0, 0);
scene.add(rectLight);

// Helper
const helper = new RectAreaLightHelper(rectLight);
rectLight.add(helper);

// Works with MeshStandardMaterial, MeshPhysicalMaterial
// r183: Clearcoat on MeshPhysicalMaterial is now properly lit by RectAreaLight
// Does not cast shadows natively
```

#### Imported: Light Helpers

```javascript
import { RectAreaLightHelper } from "three/examples/jsm/helpers/RectAreaLightHelper.js";

// DirectionalLight helper
const dirHelper = new THREE.DirectionalLightHelper(dirLight, 5);
scene.add(dirHelper);

// PointLight helper
const pointHelper = new THREE.PointLightHelper(pointLight, 1);
scene.add(pointHelper);

// SpotLight helper
const spotHelper = new THREE.SpotLightHelper(spotLight);
scene.add(spotHelper);

// Hemisphere helper
const hemiHelper = new THREE.HemisphereLightHelper(hemiLight, 5);
scene.add(hemiHelper);

// RectAreaLight helper
const rectHelper = new RectAreaLightHelper(rectLight);
rectLight.add(rectHelper);

// Update helpers when light changes
dirHelper.update();
spotHelper.update();
```

#### Imported: Environment Lighting (IBL)

Image-Based Lighting using HDR environment maps.

```javascript
import { RGBELoader } from "three/examples/jsm/loaders/RGBELoader.js";

const rgbeLoader = new RGBELoader();
rgbeLoader.load("environment.hdr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;

  // Set as scene environment (affects all PBR materials)
  scene.environment = texture;

  // Optional: also use as background
  scene.background = texture;
  scene.backgroundBlurriness = 0; // 0-1, blur the background
  scene.backgroundIntensity = 1;
});

// PMREMGenerator for better reflections
const pmremGenerator = new THREE.PMREMGenerator(renderer);
pmremGenerator.compileEquirectangularShader();

rgbeLoader.load("environment.hdr", (texture) => {
  const envMap = pmremGenerator.fromEquirectangular(texture).texture;
  scene.environment = envMap;
  texture.dispose();
  pmremGenerator.dispose();
});
```

### Cube Texture Environment

```javascript
const cubeLoader = new THREE.CubeTextureLoader();
const envMap = cubeLoader.load([
  "px.jpg",
  "nx.jpg",
  "py.jpg",
  "ny.jpg",
  "pz.jpg",
  "nz.jpg",
]);

scene.environment = envMap;
scene.background = envMap;
```

#### Imported: Light Probes (Advanced)

Capture lighting from a point in space for ambient lighting.

```javascript
import { LightProbeGenerator } from "three/examples/jsm/lights/LightProbeGenerator.js";

// Generate from cube texture
const lightProbe = new THREE.LightProbe();
scene.add(lightProbe);

lightProbe.copy(LightProbeGenerator.fromCubeTexture(cubeTexture));

// Or from render target
const cubeCamera = new THREE.CubeCamera(
  0.1,
  100,
  new THREE.WebGLCubeRenderTarget(256),
);
cubeCamera.update(renderer, scene);
lightProbe.copy(
  LightProbeGenerator.fromCubeRenderTarget(renderer, cubeCamera.renderTarget),
);
```

#### Imported: Light Animation

```javascript
const clock = new THREE.Clock();

function animate() {
  const time = clock.getElapsedTime();

  // Orbit light around scene
  light.position.x = Math.cos(time) * 5;
  light.position.z = Math.sin(time) * 5;

  // Pulsing intensity
  light.intensity = 1 + Math.sin(time * 2) * 0.5;

  // Color cycling
  light.color.setHSL((time * 0.1) % 1, 1, 0.5);

  // Update helpers if using
  lightHelper.update();
}
```

#### Imported: Performance Tips

1. **Limit light count**: Each light adds shader complexity
2. **Use baked lighting**: For static scenes, bake to textures
3. **Smaller shadow maps**: 512-1024 often sufficient
4. **Tight shadow frustums**: Only cover needed area
5. **Disable unused shadows**: Not all lights need shadows
6. **Use light layers**: Exclude objects from certain lights

```javascript
// Light layers
light.layers.set(1); // Light only affects layer 1
mesh.layers.enable(1); // Mesh is on layer 1
otherMesh.layers.disable(1); // Other mesh not affected

// Selective shadows
mesh.castShadow = true;
mesh.receiveShadow = true;
decorMesh.castShadow = false; // Small objects often don't need to cast
```

#### Imported: See Also

- `threejs-materials` - Material light response
- `threejs-textures` - Lightmaps and environment maps
- `threejs-postprocessing` - Bloom and other light effects

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

---
name: threejs-geometry-v2
description: "Three.js Geometry workflow skill. Use this skill when the user needs Three.js geometry creation - built-in shapes, BufferGeometry, custom geometry, instancing. Use when creating 3D shapes, working with vertices, building custom meshes, or optimizing with instanced rendering and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["threejs-geometry-v2", "threejs-geometry", "three", "geometry", "creation", "built-in", "shapes", "buffergeometry"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Three.js Geometry

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/threejs-geometry` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Three.js Geometry

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Built-in Geometries, BufferGeometry, EdgesGeometry & WireframeGeometry, Points, Lines, InstancedMesh.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to create or optimize geometry in Three.js.
- The task involves built-in shapes, custom BufferGeometry, vertices, or instanced rendering.
- You are working on mesh structure rather than scene setup or materials alone.
- Use when the request clearly matches the imported source intent: Three.js geometry creation - built-in shapes, BufferGeometry, custom geometry, instancing. Use when creating 3D shapes, working with vertices, building custom meshes, or optimizing with instanced rendering.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
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

#### Imported: Built-in Geometries

### Basic Shapes

```javascript
// Box - width, height, depth, widthSegments, heightSegments, depthSegments
new THREE.BoxGeometry(1, 1, 1, 1, 1, 1);

// Sphere - radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength
new THREE.SphereGeometry(1, 32, 32);
new THREE.SphereGeometry(1, 32, 32, 0, Math.PI * 2, 0, Math.PI); // Full sphere
new THREE.SphereGeometry(1, 32, 32, 0, Math.PI); // Hemisphere

// Plane - width, height, widthSegments, heightSegments
new THREE.PlaneGeometry(10, 10, 1, 1);

// Circle - radius, segments, thetaStart, thetaLength
new THREE.CircleGeometry(1, 32);
new THREE.CircleGeometry(1, 32, 0, Math.PI); // Semicircle

// Cylinder - radiusTop, radiusBottom, height, radialSegments, heightSegments, openEnded
new THREE.CylinderGeometry(1, 1, 2, 32, 1, false);
new THREE.CylinderGeometry(0, 1, 2, 32); // Cone
new THREE.CylinderGeometry(1, 1, 2, 6); // Hexagonal prism

// Cone - radius, height, radialSegments, heightSegments, openEnded
new THREE.ConeGeometry(1, 2, 32, 1, false);

// Torus - radius, tube, radialSegments, tubularSegments, arc
new THREE.TorusGeometry(1, 0.4, 16, 100);

// TorusKnot - radius, tube, tubularSegments, radialSegments, p, q
new THREE.TorusKnotGeometry(1, 0.4, 100, 16, 2, 3);

// Ring - innerRadius, outerRadius, thetaSegments, phiSegments
new THREE.RingGeometry(0.5, 1, 32, 1);
```

### Advanced Shapes

```javascript
// Capsule - radius, length, capSegments, radialSegments
new THREE.CapsuleGeometry(0.5, 1, 4, 8);

// Dodecahedron - radius, detail
new THREE.DodecahedronGeometry(1, 0);

// Icosahedron - radius, detail (0 = 20 faces, higher = smoother)
new THREE.IcosahedronGeometry(1, 0);

// Octahedron - radius, detail
new THREE.OctahedronGeometry(1, 0);

// Tetrahedron - radius, detail
new THREE.TetrahedronGeometry(1, 0);

// Polyhedron - vertices, indices, radius, detail
const vertices = [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1];
const indices = [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1];
new THREE.PolyhedronGeometry(vertices, indices, 1, 0);
```

### Path-Based Shapes

```javascript
// Lathe - points[], segments, phiStart, phiLength
const points = [
  new THREE.Vector2(0, 0),
  new THREE.Vector2(0.5, 0),
  new THREE.Vector2(0.5, 1),
  new THREE.Vector2(0, 1),
];
new THREE.LatheGeometry(points, 32);

// Extrude - shape, options
const shape = new THREE.Shape();
shape.moveTo(0, 0);
shape.lineTo(1, 0);
shape.lineTo(1, 1);
shape.lineTo(0, 1);
shape.lineTo(0, 0);

const extrudeSettings = {
  steps: 2,
  depth: 1,
  bevelEnabled: true,
  bevelThickness: 0.1,
  bevelSize: 0.1,
  bevelSegments: 3,
};
new THREE.ExtrudeGeometry(shape, extrudeSettings);

// Tube - path, tubularSegments, radius, radialSegments, closed
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(1, 0, 0),
]);
new THREE.TubeGeometry(curve, 64, 0.2, 8, false);
```

### Text Geometry

```javascript
import { FontLoader } from "three/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry.js";

const loader = new FontLoader();
loader.load("fonts/helvetiker_regular.typeface.json", (font) => {
  const geometry = new TextGeometry("Hello", {
    font: font,
    size: 1,
    depth: 0.2, // Was 'height' in older versions
    curveSegments: 12,
    bevelEnabled: true,
    bevelThickness: 0.03,
    bevelSize: 0.02,
    bevelSegments: 5,
  });

  // Center text
  geometry.computeBoundingBox();
  geometry.center();

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);
});
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @threejs-geometry-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @threejs-geometry-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @threejs-geometry-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @threejs-geometry-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```javascript
import * as THREE from "three";

// Built-in geometry
const box = new THREE.BoxGeometry(1, 1, 1);
const sphere = new THREE.SphereGeometry(0.5, 32, 32);
const plane = new THREE.PlaneGeometry(10, 10);

// Create mesh
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const mesh = new THREE.Mesh(box, material);
scene.add(mesh);
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/threejs-geometry`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: BufferGeometry

The base class for all geometries. Stores data as typed arrays for GPU efficiency.

### Custom BufferGeometry

```javascript
const geometry = new THREE.BufferGeometry();

// Vertices (3 floats per vertex: x, y, z)
const vertices = new Float32Array([
  -1,
  -1,
  0, // vertex 0
  1,
  -1,
  0, // vertex 1
  1,
  1,
  0, // vertex 2
  -1,
  1,
  0, // vertex 3
]);
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));

// Indices (for indexed geometry - reuse vertices)
const indices = new Uint16Array([
  0,
  1,
  2, // triangle 1
  0,
  2,
  3, // triangle 2
]);
geometry.setIndex(new THREE.BufferAttribute(indices, 1));

// Normals (required for lighting)
const normals = new Float32Array([0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1]);
geometry.setAttribute("normal", new THREE.BufferAttribute(normals, 3));

// UVs (for texturing)
const uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]);
geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

// Colors (per-vertex colors)
const colors = new Float32Array([
  1,
  0,
  0, // red
  0,
  1,
  0, // green
  0,
  0,
  1, // blue
  1,
  1,
  0, // yellow
]);
geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
// Use with: material.vertexColors = true
```

### BufferAttribute Types

```javascript
// Common attribute types
new THREE.BufferAttribute(array, itemSize);

// Typed array options
new Float32Array(count * itemSize); // Positions, normals, UVs
new Uint16Array(count); // Indices (up to 65535 vertices)
new Uint32Array(count); // Indices (larger meshes)
new Uint8Array(count * itemSize); // Colors (0-255 range)

// Item sizes
// Position: 3 (x, y, z)
// Normal: 3 (x, y, z)
// UV: 2 (u, v)
// Color: 3 (r, g, b) or 4 (r, g, b, a)
// Index: 1
```

### Modifying BufferGeometry

```javascript
const positions = geometry.attributes.position;

// Modify vertex
positions.setXYZ(index, x, y, z);

// Access vertex
const x = positions.getX(index);
const y = positions.getY(index);
const z = positions.getZ(index);

// Flag for GPU update
positions.needsUpdate = true;

// Recompute normals after position changes
geometry.computeVertexNormals();

// Recompute bounding box/sphere after changes
geometry.computeBoundingBox();
geometry.computeBoundingSphere();
```

### Interleaved Buffers (Advanced)

```javascript
// More efficient memory layout for large meshes
const interleavedBuffer = new THREE.InterleavedBuffer(
  new Float32Array([
    // pos.x, pos.y, pos.z, uv.u, uv.v (repeated per vertex)
    -1, -1, 0, 0, 0, 1, -1, 0, 1, 0, 1, 1, 0, 1, 1, -1, 1, 0, 0, 1,
  ]),
  5, // stride (floats per vertex)
);

geometry.setAttribute(
  "position",
  new THREE.InterleavedBufferAttribute(interleavedBuffer, 3, 0),
); // size 3, offset 0
geometry.setAttribute(
  "uv",
  new THREE.InterleavedBufferAttribute(interleavedBuffer, 2, 3),
); // size 2, offset 3
```

#### Imported: EdgesGeometry & WireframeGeometry

```javascript
// Edge lines (only hard edges)
const edges = new THREE.EdgesGeometry(boxGeometry, 15); // 15 = threshold angle
const edgeMesh = new THREE.LineSegments(
  edges,
  new THREE.LineBasicMaterial({ color: 0xffffff }),
);

// Wireframe (all triangles)
const wireframe = new THREE.WireframeGeometry(boxGeometry);
const wireMesh = new THREE.LineSegments(
  wireframe,
  new THREE.LineBasicMaterial({ color: 0xffffff }),
);
```

#### Imported: Points

```javascript
// Create point cloud
const geometry = new THREE.BufferGeometry();
const positions = new Float32Array(1000 * 3);

for (let i = 0; i < 1000; i++) {
  positions[i * 3] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
  positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
}

geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const material = new THREE.PointsMaterial({
  size: 0.1,
  sizeAttenuation: true, // Size decreases with distance
  color: 0xffffff,
});

const points = new THREE.Points(geometry, material);
scene.add(points);
```

#### Imported: Lines

```javascript
// Line (connected points)
const points = [
  new THREE.Vector3(-1, 0, 0),
  new THREE.Vector3(0, 1, 0),
  new THREE.Vector3(1, 0, 0),
];
const geometry = new THREE.BufferGeometry().setFromPoints(points);
const line = new THREE.Line(
  geometry,
  new THREE.LineBasicMaterial({ color: 0xff0000 }),
);

// LineLoop (closed loop)
const loop = new THREE.LineLoop(geometry, material);

// LineSegments (pairs of points)
const segmentsGeometry = new THREE.BufferGeometry();
segmentsGeometry.setAttribute(
  "position",
  new THREE.BufferAttribute(
    new Float32Array([
      -1,
      0,
      0,
      0,
      1,
      0, // segment 1
      0,
      1,
      0,
      1,
      0,
      0, // segment 2
    ]),
    3,
  ),
);
const segments = new THREE.LineSegments(segmentsGeometry, material);
```

#### Imported: InstancedMesh

Efficiently render many copies of the same geometry.

```javascript
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const count = 1000;

const instancedMesh = new THREE.InstancedMesh(geometry, material, count);

// Set transforms for each instance
const dummy = new THREE.Object3D();
const matrix = new THREE.Matrix4();

for (let i = 0; i < count; i++) {
  dummy.position.set(
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
    (Math.random() - 0.5) * 20,
  );
  dummy.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
  dummy.scale.setScalar(0.5 + Math.random());
  dummy.updateMatrix();

  instancedMesh.setMatrixAt(i, dummy.matrix);
}

// Flag for GPU update
instancedMesh.instanceMatrix.needsUpdate = true;

// Optional: per-instance colors
instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(
  new Float32Array(count * 3),
  3,
);
for (let i = 0; i < count; i++) {
  instancedMesh.setColorAt(
    i,
    new THREE.Color(Math.random(), Math.random(), Math.random()),
  );
}
instancedMesh.instanceColor.needsUpdate = true;

scene.add(instancedMesh);
```

### Update Instance at Runtime

```javascript
// Update single instance
const matrix = new THREE.Matrix4();
instancedMesh.getMatrixAt(index, matrix);
// Modify matrix...
instancedMesh.setMatrixAt(index, matrix);
instancedMesh.instanceMatrix.needsUpdate = true;

// Raycasting with instanced mesh
const intersects = raycaster.intersectObject(instancedMesh);
if (intersects.length > 0) {
  const instanceId = intersects[0].instanceId;
}
```

#### Imported: InstancedBufferGeometry (Advanced)

For custom per-instance attributes beyond transform/color.

```javascript
const geometry = new THREE.InstancedBufferGeometry();
geometry.copy(new THREE.BoxGeometry(1, 1, 1));

// Add per-instance attribute
const offsets = new Float32Array(count * 3);
for (let i = 0; i < count; i++) {
  offsets[i * 3] = Math.random() * 10;
  offsets[i * 3 + 1] = Math.random() * 10;
  offsets[i * 3 + 2] = Math.random() * 10;
}
geometry.setAttribute("offset", new THREE.InstancedBufferAttribute(offsets, 3));

// Use in shader
// attribute vec3 offset;
// vec3 transformed = position + offset;
```

#### Imported: Geometry Utilities

```javascript
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";

// Merge geometries (must have same attributes)
const merged = BufferGeometryUtils.mergeGeometries([geo1, geo2, geo3]);

// Merge with groups (for multi-material)
const merged = BufferGeometryUtils.mergeGeometries([geo1, geo2], true);

// Compute tangents (required for normal maps)
BufferGeometryUtils.computeTangents(geometry);

// Interleave attributes for better performance
const interleaved = BufferGeometryUtils.interleaveAttributes([
  geometry.attributes.position,
  geometry.attributes.normal,
  geometry.attributes.uv,
]);
```

#### Imported: Common Patterns

### Center Geometry

```javascript
geometry.computeBoundingBox();
geometry.center(); // Move vertices so center is at origin
```

### Scale to Fit

```javascript
geometry.computeBoundingBox();
const size = new THREE.Vector3();
geometry.boundingBox.getSize(size);
const maxDim = Math.max(size.x, size.y, size.z);
geometry.scale(1 / maxDim, 1 / maxDim, 1 / maxDim);
```

### Clone and Transform

```javascript
const clone = geometry.clone();
clone.rotateX(Math.PI / 2);
clone.translate(0, 1, 0);
clone.scale(2, 2, 2);
```

### Morph Targets

```javascript
// Base geometry
const geometry = new THREE.BoxGeometry(1, 1, 1, 4, 4, 4);

// Create morph target
const morphPositions = geometry.attributes.position.array.slice();
for (let i = 0; i < morphPositions.length; i += 3) {
  morphPositions[i] *= 2; // Scale X
  morphPositions[i + 1] *= 0.5; // Squash Y
}

geometry.morphAttributes.position = [
  new THREE.BufferAttribute(new Float32Array(morphPositions), 3),
];

const mesh = new THREE.Mesh(geometry, material);
mesh.morphTargetInfluences[0] = 0.5; // 50% blend
```

#### Imported: Performance Tips

1. **Use indexed geometry**: Reuse vertices with indices
2. **Merge static meshes**: Reduce draw calls with `mergeGeometries`
3. **Use InstancedMesh**: For many identical objects
4. **Choose appropriate segment counts**: More segments = smoother but slower
5. **Dispose unused geometry**: `geometry.dispose()`

```javascript
// Good segment counts for common uses
new THREE.SphereGeometry(1, 32, 32); // Good quality
new THREE.SphereGeometry(1, 64, 64); // High quality
new THREE.SphereGeometry(1, 16, 16); // Performance mode

// Dispose when done
geometry.dispose();
```

#### Imported: BatchedMesh (r183)

`BatchedMesh` is a higher-level alternative to `InstancedMesh` that supports multiple geometries in a single draw call. As of r183, it supports **per-instance opacity** and **per-instance wireframe**.

```javascript
const batchedMesh = new THREE.BatchedMesh(maxGeometryCount, maxVertexCount, maxIndexCount);
batchedMesh.sortObjects = true; // Enable depth sorting for transparency

// Add different geometries
const boxId = batchedMesh.addGeometry(new THREE.BoxGeometry(1, 1, 1));
const sphereId = batchedMesh.addGeometry(new THREE.SphereGeometry(0.5, 16, 16));

// Add instances of those geometries
const instance1 = batchedMesh.addInstance(boxId);
const instance2 = batchedMesh.addInstance(sphereId);

// Set transforms
const matrix = new THREE.Matrix4();
matrix.setPosition(2, 0, 0);
batchedMesh.setMatrixAt(instance1, matrix);

// Per-instance opacity (r183)
batchedMesh.setOpacityAt(instance1, 0.5);

// Per-instance visibility
batchedMesh.setVisibleAt(instance2, false);

scene.add(batchedMesh);
```

#### Imported: See Also

- `threejs-fundamentals` - Scene setup and Object3D
- `threejs-materials` - Material types for meshes
- `threejs-shaders` - Custom vertex manipulation

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

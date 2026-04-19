---
name: threejs-animation
description: "Three.js Animation workflow skill. Use this skill when the user needs Three.js animation - keyframe animation, skeletal animation, morph targets, animation mixing. Use when animating objects, playing GLTF animations, creating procedural motion, or blending animations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["threejs-animation", "three", "animation", "keyframe", "skeletal", "morph", "targets", "mixing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Three.js Animation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/threejs-animation` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Three.js Animation

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Animation System Overview, AnimationClip, AnimationMixer, AnimationAction, Loading GLTF Animations, Skeletal Animation.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to animate objects, rigs, morph targets, or imported GLTF animations in Three.js.
- The task involves mixers, clips, keyframes, procedural motion, or animation blending.
- You are building motion behavior in a Three.js scene rather than just static rendering.
- Use when the request clearly matches the imported source intent: Three.js animation - keyframe animation, skeletal animation, morph targets, animation mixing. Use when animating objects, playing GLTF animations, creating procedural motion, or blending animations.
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

#### Imported: Animation System Overview

Three.js animation system has three main components:

1. **AnimationClip** - Container for keyframe data
2. **AnimationMixer** - Plays animations on a root object
3. **AnimationAction** - Controls playback of a clip

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @threejs-animation to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @threejs-animation against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @threejs-animation for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @threejs-animation using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```javascript
import * as THREE from "three";

// Simple procedural animation with Timer (recommended in r183)
const timer = new THREE.Timer();

renderer.setAnimationLoop(() => {
  timer.update();
  const delta = timer.getDelta();
  const elapsed = timer.getElapsed();

  mesh.rotation.y += delta;
  mesh.position.y = Math.sin(elapsed) * 0.5;

  renderer.render(scene, camera);
});
```

**Note:** `THREE.Timer` is recommended over `THREE.Clock` as of r183. Timer pauses when the page is hidden and has a cleaner API. `THREE.Clock` still works but is considered legacy.

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/threejs-animation`, fails to mention provenance, or does not use any copied source files at all.
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

#### Imported: AnimationClip

Stores keyframe animation data.

```javascript
// Create animation clip
const times = [0, 1, 2]; // Keyframe times (seconds)
const values = [0, 1, 0]; // Values at each keyframe

const track = new THREE.NumberKeyframeTrack(
  ".position[y]", // Property path
  times,
  values,
);

const clip = new THREE.AnimationClip("bounce", 2, [track]);
```

### KeyframeTrack Types

```javascript
// Number track (single value)
new THREE.NumberKeyframeTrack(".opacity", times, [1, 0]);
new THREE.NumberKeyframeTrack(".material.opacity", times, [1, 0]);

// Vector track (position, scale)
new THREE.VectorKeyframeTrack(".position", times, [
  0,
  0,
  0, // t=0
  1,
  2,
  0, // t=1
  0,
  0,
  0, // t=2
]);

// Quaternion track (rotation)
const q1 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, 0, 0));
const q2 = new THREE.Quaternion().setFromEuler(new THREE.Euler(0, Math.PI, 0));
new THREE.QuaternionKeyframeTrack(
  ".quaternion",
  [0, 1],
  [q1.x, q1.y, q1.z, q1.w, q2.x, q2.y, q2.z, q2.w],
);

// Color track
new THREE.ColorKeyframeTrack(".material.color", times, [
  1,
  0,
  0, // red
  0,
  1,
  0, // green
  0,
  0,
  1, // blue
]);

// Boolean track
new THREE.BooleanKeyframeTrack(".visible", [0, 0.5, 1], [true, false, true]);

// String track (for morph targets)
new THREE.StringKeyframeTrack(
  ".morphTargetInfluences[smile]",
  [0, 1],
  ["0", "1"],
);
```

### Interpolation Modes

```javascript
const track = new THREE.VectorKeyframeTrack(".position", times, values);

// Interpolation
track.setInterpolation(THREE.InterpolateLinear); // Default
track.setInterpolation(THREE.InterpolateSmooth); // Cubic spline
track.setInterpolation(THREE.InterpolateDiscrete); // Step function
```

### BezierInterpolant (r183)

Three.js r183 adds `THREE.BezierInterpolant` for bezier curve interpolation in keyframe tracks, enabling smoother animation curves with tangent control.

#### Imported: AnimationMixer

Plays animations on an object and its descendants.

```javascript
const mixer = new THREE.AnimationMixer(model);

// Create action from clip
const action = mixer.clipAction(clip);
action.play();

// Update in animation loop
function animate() {
  const delta = clock.getDelta();
  mixer.update(delta); // Required!

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

### Mixer Events

```javascript
mixer.addEventListener("finished", (e) => {
  console.log("Animation finished:", e.action.getClip().name);
});

mixer.addEventListener("loop", (e) => {
  console.log("Animation looped:", e.action.getClip().name);
});
```

#### Imported: AnimationAction

Controls playback of an animation clip.

```javascript
const action = mixer.clipAction(clip);

// Playback control
action.play();
action.stop();
action.reset();
action.halt(fadeOutDuration);

// Playback state
action.isRunning();
action.isScheduled();

// Time control
action.time = 0.5; // Current time
action.timeScale = 1; // Playback speed (negative = reverse)
action.paused = false;

// Weight (for blending)
action.weight = 1; // 0-1, contribution to final pose
action.setEffectiveWeight(1);

// Loop modes
action.loop = THREE.LoopRepeat; // Default: loop forever
action.loop = THREE.LoopOnce; // Play once and stop
action.loop = THREE.LoopPingPong; // Alternate forward/backward
action.repetitions = 3; // Number of loops (Infinity default)

// Clamping
action.clampWhenFinished = true; // Hold last frame when done

// Blending
action.blendMode = THREE.NormalAnimationBlendMode;
action.blendMode = THREE.AdditiveAnimationBlendMode;
```

### Fade In/Out

```javascript
// Fade in
action.reset().fadeIn(0.5).play();

// Fade out
action.fadeOut(0.5);

// Crossfade between animations
const action1 = mixer.clipAction(clip1);
const action2 = mixer.clipAction(clip2);

action1.play();

// Later, crossfade to action2
action1.crossFadeTo(action2, 0.5, true);
action2.play();
```

#### Imported: Loading GLTF Animations

Most common source of skeletal animations.

```javascript
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

const loader = new GLTFLoader();
loader.load("model.glb", (gltf) => {
  const model = gltf.scene;
  scene.add(model);

  // Create mixer
  const mixer = new THREE.AnimationMixer(model);

  // Get all clips
  const clips = gltf.animations;
  console.log(
    "Available animations:",
    clips.map((c) => c.name),
  );

  // Play first animation
  if (clips.length > 0) {
    const action = mixer.clipAction(clips[0]);
    action.play();
  }

  // Play specific animation by name
  const walkClip = THREE.AnimationClip.findByName(clips, "Walk");
  if (walkClip) {
    mixer.clipAction(walkClip).play();
  }

  // Store mixer for update loop
  window.mixer = mixer;
});

// Animation loop
function animate() {
  const delta = clock.getDelta();
  if (window.mixer) window.mixer.update(delta);

  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
```

#### Imported: Skeletal Animation

### Skeleton and Bones

```javascript
// Access skeleton from skinned mesh
const skinnedMesh = model.getObjectByProperty("type", "SkinnedMesh");
const skeleton = skinnedMesh.skeleton;

// Access bones
skeleton.bones.forEach((bone) => {
  console.log(bone.name, bone.position, bone.rotation);
});

// Find specific bone by name
const headBone = skeleton.bones.find((b) => b.name === "Head");
if (headBone) headBone.rotation.y = Math.PI / 4; // Turn head

// Skeleton helper
const helper = new THREE.SkeletonHelper(model);
scene.add(helper);
```

### Programmatic Bone Animation

```javascript
function animate() {
  const time = clock.getElapsedTime();

  // Animate bone
  const headBone = skeleton.bones.find((b) => b.name === "Head");
  if (headBone) {
    headBone.rotation.y = Math.sin(time) * 0.3;
  }

  // Update mixer if also playing clips
  mixer.update(clock.getDelta());
}
```

### Bone Attachments

```javascript
// Attach object to bone
const weapon = new THREE.Mesh(weaponGeometry, weaponMaterial);
const handBone = skeleton.bones.find((b) => b.name === "RightHand");
if (handBone) handBone.add(weapon);

// Offset attachment
weapon.position.set(0, 0, 0.5);
weapon.rotation.set(0, Math.PI / 2, 0);
```

#### Imported: Morph Targets

Blend between different mesh shapes.

```javascript
// Morph targets are stored in geometry
const geometry = mesh.geometry;
console.log("Morph attributes:", Object.keys(geometry.morphAttributes));

// Access morph target influences
mesh.morphTargetInfluences; // Array of weights
mesh.morphTargetDictionary; // Name -> index mapping

// Set morph target by index
mesh.morphTargetInfluences[0] = 0.5;

// Set by name
const smileIndex = mesh.morphTargetDictionary["smile"];
mesh.morphTargetInfluences[smileIndex] = 1;
```

### Animating Morph Targets

```javascript
// Procedural
function animate() {
  const t = clock.getElapsedTime();
  mesh.morphTargetInfluences[0] = (Math.sin(t) + 1) / 2;
}

// With keyframe animation
const track = new THREE.NumberKeyframeTrack(
  ".morphTargetInfluences[smile]",
  [0, 0.5, 1],
  [0, 1, 0],
);
const clip = new THREE.AnimationClip("smile", 1, [track]);
mixer.clipAction(clip).play();
```

#### Imported: Animation Blending

Mix multiple animations together.

```javascript
// Setup actions
const idleAction = mixer.clipAction(idleClip);
const walkAction = mixer.clipAction(walkClip);
const runAction = mixer.clipAction(runClip);

// Play all with different weights
idleAction.play();
walkAction.play();
runAction.play();

// Set initial weights
idleAction.setEffectiveWeight(1);
walkAction.setEffectiveWeight(0);
runAction.setEffectiveWeight(0);

// Blend based on speed
function updateAnimations(speed) {
  if (speed < 0.1) {
    idleAction.setEffectiveWeight(1);
    walkAction.setEffectiveWeight(0);
    runAction.setEffectiveWeight(0);
  } else if (speed < 5) {
    const t = speed / 5;
    idleAction.setEffectiveWeight(1 - t);
    walkAction.setEffectiveWeight(t);
    runAction.setEffectiveWeight(0);
  } else {
    const t = Math.min((speed - 5) / 5, 1);
    idleAction.setEffectiveWeight(0);
    walkAction.setEffectiveWeight(1 - t);
    runAction.setEffectiveWeight(t);
  }
}
```

### Additive Blending

```javascript
// Base pose
const baseAction = mixer.clipAction(baseClip);
baseAction.play();

// Additive layer (e.g., breathing)
const additiveAction = mixer.clipAction(additiveClip);
additiveAction.blendMode = THREE.AdditiveAnimationBlendMode;
additiveAction.play();

// Convert clip to additive
THREE.AnimationUtils.makeClipAdditive(additiveClip);
```

#### Imported: Animation Utilities

```javascript
import * as THREE from "three";

// Find clip by name
const clip = THREE.AnimationClip.findByName(clips, "Walk");

// Create subclip
const subclip = THREE.AnimationUtils.subclip(clip, "subclip", 0, 30, 30);

// Convert to additive
THREE.AnimationUtils.makeClipAdditive(clip);
THREE.AnimationUtils.makeClipAdditive(clip, 0, referenceClip);

// Clone clip
const clone = clip.clone();

// Get clip duration
clip.duration;

// Optimize clip (remove redundant keyframes)
clip.optimize();

// Reset clip to first frame
clip.resetDuration();
```

#### Imported: Procedural Animation Patterns

### Smooth Damping

```javascript
// Smooth follow/lerp
const target = new THREE.Vector3();
const current = new THREE.Vector3();
const velocity = new THREE.Vector3();

function smoothDamp(current, target, velocity, smoothTime, deltaTime) {
  const omega = 2 / smoothTime;
  const x = omega * deltaTime;
  const exp = 1 / (1 + x + 0.48 * x * x + 0.235 * x * x * x);
  const change = current.clone().sub(target);
  const temp = velocity
    .clone()
    .add(change.clone().multiplyScalar(omega))
    .multiplyScalar(deltaTime);
  velocity.sub(temp.clone().multiplyScalar(omega)).multiplyScalar(exp);
  return target.clone().add(change.add(temp).multiplyScalar(exp));
}

function animate() {
  current.copy(smoothDamp(current, target, velocity, 0.3, delta));
  mesh.position.copy(current);
}
```

### Spring Physics

```javascript
class Spring {
  constructor(stiffness = 100, damping = 10) {
    this.stiffness = stiffness;
    this.damping = damping;
    this.position = 0;
    this.velocity = 0;
    this.target = 0;
  }

  update(dt) {
    const force = -this.stiffness * (this.position - this.target);
    const dampingForce = -this.damping * this.velocity;
    this.velocity += (force + dampingForce) * dt;
    this.position += this.velocity * dt;
    return this.position;
  }
}

const spring = new Spring(100, 10);
spring.target = 1;

function animate() {
  mesh.position.y = spring.update(delta);
}
```

### Oscillation

```javascript
function animate() {
  const t = clock.getElapsedTime();

  // Sine wave
  mesh.position.y = Math.sin(t * 2) * 0.5;

  // Bouncing
  mesh.position.y = Math.abs(Math.sin(t * 3)) * 2;

  // Circular motion
  mesh.position.x = Math.cos(t) * 2;
  mesh.position.z = Math.sin(t) * 2;

  // Figure 8
  mesh.position.x = Math.sin(t) * 2;
  mesh.position.z = Math.sin(t * 2) * 1;
}
```

#### Imported: Performance Tips

1. **Share clips**: Same AnimationClip can be used on multiple mixers
2. **Optimize clips**: Call `clip.optimize()` to remove redundant keyframes
3. **Disable when off-screen**: Stop mixer updates for invisible objects
4. **Use LOD for animations**: Simpler rigs for distant characters
5. **Limit active mixers**: Each mixer.update() has a cost

```javascript
// Pause animation when not visible
mesh.onBeforeRender = () => {
  action.paused = false;
};

mesh.onAfterRender = () => {
  // Check if will be visible next frame
  if (!isInFrustum(mesh)) {
    action.paused = true;
  }
};

// Cache clips
const clipCache = new Map();
function getClip(name) {
  if (!clipCache.has(name)) {
    clipCache.set(name, loadClip(name));
  }
  return clipCache.get(name);
}
```

#### Imported: See Also

- `threejs-loaders` - Loading animated GLTF models
- `threejs-fundamentals` - Clock and animation loop
- `threejs-shaders` - Vertex animation in shaders

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

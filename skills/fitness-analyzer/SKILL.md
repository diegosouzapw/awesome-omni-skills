---
name: fitness-analyzer
description: "\u8fd0\u52a8\u5206\u6790\u5668\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u8fd0\u52a8\u6570\u636e\u3001\u8bc6\u522b\u8fd0\u52a8\u6a21\u5f0f\u3001\u8bc4\u4f30\u5065\u8eab\u8fdb\u5c55\uff0c\u5e76\u63d0\u4f9b\u4e2a\u6027\u5316\u8bad\u7ec3\u5efa\u8bae\u3002\u652f\u6301\u4e0e\u6162\u6027\u75c5\u6570\u636e\u7684\u5173\u8054\u5206\u6790\u3002 and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["fitness-analyzer", "data-ai"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# 运动分析器技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/fitness-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# 运动分析器技能 分析运动数据，识别运动模式，评估健身进展，并提供个性化训练建议。

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 功能, 输出格式, 分析周期, 运动量趋势, 运动频率, 强度分布.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要分析运动记录、训练强度、运动习惯或健身进展时使用。
- 任务涉及跑步、力量训练、耐力或柔韧性等维度的趋势与改进建议。
- 需要把运动数据与其他健康模块做关联分析时使用。
- Use when the request clearly matches the imported source intent: 分析运动数据、识别运动模式、评估健身进展，并提供个性化训练建议。支持与慢性病数据的关联分析。.
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

#### Imported: 功能

### 1. 运动趋势分析
分析运动量、频率、强度的变化趋势，识别改善或需要调整的方面。

**分析维度**：
- 运动量趋势（时长、距离、卡路里）
- 运动频率趋势（每周运动天数）
- 强度分布变化（低/中/高强度占比）
- 运动类型偏好变化

**输出**：
- 趋势方向（改善/稳定/下降）
- 变化幅度和百分比
- 趋势显著性
- 改进建议

### 2. 运动进步追踪
追踪特定运动类型的进步情况，量化健身效果。

**支持的进步追踪**：
- **跑步进步**：配速提升、距离增加、心率改善
- **力量训练进步**：重量增加、容量提升、RPE变化
- **耐力进步**：运动时长增加、距离延长
- **柔韧性进步**：关节活动度改善

**输出**：
- 开始值 vs 当前值
- 改善百分比
- 进步可视化
- 达成的里程碑

### 3. 运动习惯分析
识别用户的运动习惯和模式。

**分析内容**：
- 常用运动时间（早晨/下午/晚上）
- 运动频率模式（每周几天）
- 运动类型偏好
- 休息日分布
- 运动一致性评分

**输出**：
- 习惯总结
- 一致性评分（0-100）
- 优化建议
- 习惯养成建议

### 4. 相关性分析
分析运动与其他健康指标的相关性。

**支持的相关性分析**：
- **运动 ↔ 体重**：运动消耗与体重变化的关系
- **运动 ↔ 血压**：运动对血压的长期影响
- **运动 ↔ 血糖**：运动对血糖控制的效果
- **运动 ↔ 情绪/睡眠**：运动对情绪和睡眠的影响

**输出**：
- 相关系数（-1到1）
- 相关性强度（弱/中/强）
- 统计显著性
- 因果关系推断
- 实践建议

### 5. 个性化建议生成
基于用户数据生成个性化运动建议。

**建议类型**：
- **运动频率建议**：是否需要增加/减少运动频率
- **运动强度建议**：强度调整建议
- **运动类型建议**：推荐尝试的运动类型
- **运动时间建议**：最佳运动时间
- **恢复建议**：休息和恢复建议

**建议依据**：
- WHO/ACSM/AHA运动指南
- 用户运动历史数据
- 用户健康状况
- 用户健身目标

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @fitness-analyzer to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @fitness-analyzer against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @fitness-analyzer for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @fitness-analyzer using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/fitness-analyzer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@bullmq-specialist` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-gift` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 输出格式

### 趋势分析报告

```markdown
# 运动趋势分析报告

#### Imported: 分析周期

2025-03-20 至 2025-06-20（3个月）

#### Imported: 运动量趋势

### 运动时长
- 趋势：⬆️ 上升
- 开始：平均120分钟/周
- 当前：平均180分钟/周
- 变化：+50%（+60分钟/周）
- 解读：运动量显著增加，表现优秀

### 卡路里消耗
- 趋势：⬆️ 上升
- 开始：平均960卡/周
- 当前：平均1440卡/周
- 变化：+50%
- 解读：运动消耗增加，有助于体重管理

### 运动距离
- 趋势：⬆️ 上升
- 开始：平均10公里/周
- 当前：平均20公里/周
- 变化：+100%
- 解读：耐力显著提升

#### Imported: 运动频率

- 当前频率：4天/周
- 目标频率：4-5天/周
- 状态：✅ 达标
- 建议：保持当前频率

#### Imported: 强度分布

| 强度 | 占比 | 变化 |
|------|------|------|
| 低强度 | 25% | +5% |
| 中等强度 | 55% | -10% |
| 高强度 | 20% | +5% |

**分析**：强度分布合理，中等强度占主导，符合有氧运动建议。

#### Imported: 运动类型分布

| 运动类型 | 占比 |
|---------|------|
| 跑步 | 50% |
| 瑜伽 | 25% |
| 力量训练 | 25% |

**建议**：可以适当增加力量训练比例至30-40%。

#### Imported: 洞察与建议

### 优势
1. ✅ 运动量稳定增长，(+50%)
2. ✅ 运动频率稳定，每周4天
3. ✅ 休息日充足，恢复良好

### 改进建议
1. 📈 每周增加2次力量训练
2. 📈 尝试不同运动类型避免单调
3. 📈 适当增加高强度间歇训练(HIIT)

### 警示
1. ⚠️ 注意运动强度不宜过高，控制在中等强度为主
```

### 相关性分析报告

```markdown
# 运动与血压相关性分析

#### Imported: 数据来源

- 运动数据：fitness-logs (2025-03-20 至 2025-06-20)
- 血压数据：hypertension-tracker (同期)

#### Imported: 分析结果

### 相关系数
- 变量：每周运动时长 ↔ 收缩压
- 相关系数：r = -0.68
- 相关性强度：**强负相关**
- 统计显著性：p < 0.01 **高度显著**

### 解读
运动时长与收缩压呈强负相关，意味着：
- 运动越多，血压越低
- 每增加30分钟运动，收缩压平均下降3-5 mmHg

### 实践建议
1. ✅ 继续保持规律运动，每周5-7天
2. ✅ 每次运动30-60分钟，中等强度
3. ✅ 优先选择有氧运动（快走、慢跑、骑行）
4. ⚠️ 避免憋气动作和突然爆发性运动

### 医学参考
- AHA声明：规律有氧运动可降低收缩压5-7 mmHg
- 您的运动效果：降低约10 mmHg，效果显著！
```

### 进步追踪报告

```markdown
# 跑步进步追踪

#### Imported: 分析周期

2025-01-01 至 2025-06-20（6个月）

#### Imported: 配速进步

| 指标 | 开始 | 当前 | 改善 |
|------|------|------|------|
| 平均配速 | 7:30 min/km | 6:00 min/km | +20% ⬆️ |
| 最快配速 | 7:00 min/km | 5:30 min/km | +22% ⬆️ |
| 5公里用时 | 37:30 | 30:00 | +20% ⬆️ |

**趋势**：配速持续稳定提升，进步显著！

#### Imported: 距离进步

| 指标 | 开始 | 当前 | 改善 |
|------|------|------|------|
| 最长单次距离 | 3 km | 12 km | +300% ⬆️ |
| 月度总距离 | 40 km | 86 km | +115% ⬆️ |
| 平均距离 | 5 km | 6 km | +20% ⬆️ |

**趋势**：耐力大幅提升，可以完成更长距离。

#### Imported: 心率改善

| 指标 | 开始 | 当前 | 改善 |
|------|------|------|------|
| 静息心率 | 78 bpm | 72 bpm | -6 bpm ⬇️ |
| 相同配速心率 | 155 bpm | 145 bpm | -10 bpm ⬇️ |

**分析**：心肺功能显著改善，相同配速下心率降低。

#### Imported: 里程碑

- ✅ 2025-03-15：首次完成5公里跑
- ✅ 2025-05-20：首次完成10公里跑
- ✅ 2025-06-10：配速突破6:00 min/km

#### Imported: 下一步目标

- 🎯 完成半程马拉松（21公里）
- 🎯 配速提升至5:30 min/km
- 🎯 尝试间歇训练提升速度
```

#### Imported: 数据源

### 主要数据源

1. **运动日志**
   - 路径：`data/fitness-logs/YYYY-MM/YYYY-MM-DD.json`
   - 内容：运动记录（类型、时长、强度、心率、距离等）
   - 频率：每次运动后更新

2. **用户档案**
   - 路径：`data/fitness-tracker.json`
   - 内容：用户档案、健身目标、统计数据
   - 更新：定期更新

3. **健康数据关联**
   - `data/hypertension-tracker.json`（血压数据）
   - `data/diabetes-tracker.json`（血糖数据）
   - `data/profile.json`（体重、BMI等）

### 数据质量检查

- 数据完整性：检查必要字段是否存在
- 数据合理性：检查数值是否在合理范围内
- 时间一致性：检查时间戳是否合理
- 重复数据：检测并处理重复记录

#### Imported: 算法说明

### 1. 线性回归趋势分析

使用线性回归分析运动数据的时间趋势。

**公式**：
y = a + bx

其中：
- y：运动指标（时长、卡路里、距离等）
- x：时间
- a：截距
- b：斜率（趋势方向和速度）

**解释**：
- b > 0：上升趋势
- b < 0：下降趋势
- b ≈ 0：稳定

### 2. Pearson相关系数

用于分析两个变量之间的线性相关性。

**公式**：
r = Σ[(xi - x̄)(yi - ȳ)] / √[Σ(xi - x̄)² × Σ(yi - ȳ)²]

**范围**：-1 ≤ r ≤ 1

**解释**：
- r = 1：完全正相关
- r = -1：完全负相关
- r = 0：无线性相关

**强度判断**：
- |r| < 0.3：弱相关
- 0.3 ≤ |r| < 0.7：中等相关
- |r| ≥ 0.7：强相关

### 3. 配速计算

**配速** = 运动时长 / 距离

单位：min/km 或 min/mile

**示例**：
- 30分钟跑5公里
- 配速 = 30 / 5 = 6 min/km

### 4. MET能量代谢计算

**卡路里消耗** = MET × 体重(kg) × 时间(小时)

**常见运动的MET值**：
- 走路（3-5 km/h）：3.5-5 MET
- 慢跑（8 km/h）：8 MET
- 快跑（10 km/h）：10 MET
- 游泳：6-10 MET
- 骑行（休闲）：4 MET
- 力量训练：5 MET
- 瑜伽：3 MET

#### Imported: 医学安全边界

⚠️ **重要声明**
本分析仅供健康参考，不构成医疗建议。

### 分析能力范围

✅ **能做到**：
- 运动数据统计和分析
- 趋势识别和可视化
- 相关性计算和解释
- 一般性运动建议

❌ **不做到**：
- 疾病诊断
- 运动风险评估
- 具体运动处方设计
- 运动损伤诊断和治疗

### 危险信号检测

在分析过程中检测以下危险信号：

1. **心率异常**
   - 运动心率 > 95%最大心率
   - 静息心率 > 100 bpm

2. **血压异常**
   - 收缩压 ≥ 180 mmHg
   - 舒张压 ≥ 110 mmHg

3. **过度训练迹象**
   - 连续7天高强度运动
   - 运动感受持续下降（RPE > 17）

4. **体重快速下降**
   - 每周减重 > 1kg（可能不健康）

### 建议分级

**Level 1: 一般性建议**
- 基于WHO/ACSM指南
- 适用于一般人群

**Level 2: 参考性建议**
- 基于用户数据
- 需结合个人情况

**Level 3: 医疗建议**
- 涉及疾病管理
- 需医生确认

#### Imported: 使用示例

### 示例1：生成运动趋势报告

```bash
/fitness trend 3months
```

输出：
- 3个月运动趋势分析
- 运动量、频率、强度变化
- 洞察和建议

### 示例2：追踪跑步进步

```bash
/fitness analysis progress running
```

输出：
- 配速进步
- 距离进步
- 心率改善
- 里程碑达成

### 示例3：分析运动与血压相关性

```bash
/fitness analysis correlation blood_pressure
```

输出：
- 相关系数
- 相关性强度
- 显著性检验
- 实践建议

---

**技能版本**: v1.0
**最后更新**: 2026-01-02
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

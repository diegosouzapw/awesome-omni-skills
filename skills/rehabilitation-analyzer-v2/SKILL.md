---
name: rehabilitation-analyzer-v2
description: "\u5eb7\u590d\u8bad\u7ec3\u5206\u6790\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u5eb7\u590d\u8bad\u7ec3\u6570\u636e\u3001\u8bc6\u522b\u5eb7\u590d\u6a21\u5f0f\u3001\u8bc4\u4f30\u5eb7\u590d\u8fdb\u5c55\uff0c\u5e76\u63d0\u4f9b\u4e2a\u6027\u5316\u5eb7\u590d\u5efa\u8bae and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["rehabilitation-analyzer-v2", "rehabilitation-analyzer", "data-ai"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# 康复训练分析技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/rehabilitation-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# 康复训练分析技能

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 核心功能, 触发条件, 执行步骤, 输出格式, 1. 康复进展摘要, 2. 功能改善趋势.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要分析康复训练记录、功能恢复趋势或康复阶段进展时使用。
- 任务涉及 ROM、肌力、疼痛、依从性或康复目标达成率分析。
- 用户请求康复报告、趋势分析或训练计划优化建议时使用。
- Use when the request clearly matches the imported source intent: 分析康复训练数据、识别康复模式、评估康复进展，并提供个性化康复建议.
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

#### Imported: 核心功能

康复训练分析技能提供全面的康复数据分析功能，帮助用户追踪康复进展、识别改善模式和优化训练计划。

**主要功能模块：**

1. **康复进展分析** - 评估功能改善趋势和康复效果
2. **功能改善曲线** - 可视化ROM、肌力、平衡等功能指标变化
3. **疼痛模式识别** - 分析疼痛评分变化趋势和触发因素
4. **目标达成率评估** - 追踪康复目标完成情况
5. **康复阶段分析** - 评估当前阶段进展和阶段转换准备度
6. **训练依从性评估** - 分析训练计划执行情况

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @rehabilitation-analyzer-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @rehabilitation-analyzer-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @rehabilitation-analyzer-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @rehabilitation-analyzer-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/rehabilitation-analyzer`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@quality-nonconformance-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@quant-analyst-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@radix-ui-design-system-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@rag-engineer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 触发条件

技能在以下情况下自动触发：

1. 用户使用 `/rehab progress` 查看康复进展
2. 用户使用 `/rehab analysis` 进行康复分析
3. 用户使用 `/rehab trends` 查看趋势分析
4. 用户使用 `/rehab report` 生成康复报告

#### Imported: 执行步骤

### 第1步：数据读取
读取康复数据文件：
- `data/rehabilitation-tracker.json` - 主康复档案
- `data/rehabilitation-logs/YYYY-MM/YYYY-MM-DD.json` - 每日训练日志

**数据验证：**
- 检查文件是否存在
- 验证数据结构完整性
- 确认有足够的数据点进行分析（建议至少3次评估或10天训练记录）

### 第2步：功能评估趋势分析

**关节活动度（ROM）分析：**
```
- 分析不同时间点的ROM测量值
- 计算ROM改善速率（度/周）
- 识别ROM平台期或倒退
- 预测达到目标ROM的时间
- 与目标范围对比
```

**肌力改善分析：**
```
- 追踪肌力等级变化（MMT评分）
- 识别肌力提升模式
- 比较不同肌群恢复速度
- 评估肌力不平衡情况
```

**平衡功能分析：**
```
- 平衡测试分数趋势
- 单腿站立时间改善
- 平衡稳定性评估
- 跌倒风险变化
```

### 第3步：疼痛模式分析

**疼痛时序分析：**
```
- 分析晨起疼痛趋势
- 分析活动后疼痛趋势
- 识别疼痛加重/缓解模式
- 关联疼痛与训练强度
```

**疼痛触发因素识别：**
```
- 特定训练项目与疼痛关系
- 训练强度与疼痛相关性
- 活动类型与疼痛关系
- 时间因素对疼痛影响
```

### 第4步：训练依从性计算

**依从性指标：**
```
依从性 = (实际训练次数 / 计划训练次数) × 100%
```

**分析维度：**
- 周依从性
- 月依从性
- 整体依从性
- 不同训练类型的依从性

### 第5步：目标达成评估

**目标进度追踪：**
- 计算每个目标的完成百分比
- 预估目标达成时间
- 识别滞后目标
- 提供目标调整建议

### 第6步：康复阶段评估

**当前阶段分析：**
- 阶段目标完成情况
- 是否准备好进入下一阶段
- 阶段转换建议

### 第7步：生成报告

输出包括：
- 康复进展摘要
- 功能改善趋势
- 疼痛控制情况
- 训练依从性评价
- 目标达成评估
- 阶段进展建议
- 个性化建议

#### Imported: 输出格式

### 康复进展报告结构

```markdown
# 康复进展报告
**报告日期**: YYYY-MM-DD
**康复时长**: X天
**当前阶段**: 第X阶段 - 阶段名称

#### Imported: 1. 康复进展摘要

[整体进展评价：优秀/良好/一般/需改进]
- 康复时长：X天（第X周）
- 完成训练：X次
- 训练依从性：X%
- 当前阶段进展：X%

#### Imported: 2. 功能改善趋势

### 关节活动度（ROM）
- [关节名] [活动类型]: 基线X° → 当前X° → 改善X°
- 改善速率：X°/周
- 达到目标时间预估：X周
- 趋势分析：[改善趋势描述]

### 肌力评估
- [肌群名]: 基线X/5 → 当前X/5 → 改善X级
- 肌力提升模式：[描述]
- 肌力平衡：[评估]

### 平衡功能
- [测试类型]: 基线X → 当前X → 改善X
- 平衡稳定性：[评估]
- 跌倒风险：[评估]

#### Imported: 3. 疼痛控制情况

- 平均疼痛水平：X/10
- 疼痛趋势：[改善/稳定/加重]
- 疼痛模式：[描述]
- 触发因素：[识别出的触发因素]
- 疼痛控制建议：[建议]

#### Imported: 4. 训练依从性

- 整体依从性：X%
- 计划训练：X次
- 实际训练：X次
- 依从性评价：[优秀/良好/一般/需改进]
- 缺训原因分析：[如有]

#### Imported: 5. 目标达成情况

### 已达成目标（X个）
- 目标1：[描述] - 达成日期：YYYY-MM-DD
- ...

### 进行中目标（X个）
- 目标1：[描述] - 当前进度：X% - 预计达成：YYYY-MM-DD
- ...

### 滞后目标（X个）
- 目标1：[描述] - 当前进度：X% - 需要关注

#### Imported: 6. 康复阶段进展

**当前阶段**: 第X阶段 - [阶段名称]
- 阶段目标完成：X/X
- 阶段进度：X%
- 阶段持续时间：X周
- **阶段评价**: [评价]

**是否准备好进入下一阶段**: [是/否]
- [准备好的理由] / [需要继续努力的项目]

#### Imported: 7. 个性化建议

### 训练建议
- [具体训练建议]

### 目标调整建议
- [目标调整建议]

### 阶段转换建议
- [阶段转换建议]

### 注意事项
- [需要注意的事项]

#### Imported: 8. 下次评估

**下次评估日期**: YYYY-MM-DD
**评估重点**: [重点评估项目]
```

### 简要进展报告

```markdown

#### Imported: 康复进展简报

📊 **整体进展**: 良好
⏱️ **康复时长**: 第X周（X天）
🎯 **阶段**: 第X阶段 - [阶段名称]

**功能改善**:
- ROM: +X°（改善速率X°/周）✅
- 肌力: 提升X级 ✅
- 平衡: 改善X% ✅

**疼痛控制**: 平均X/10（[趋势]）
**训练依从性**: X%（[评价]）
**目标达成**: X/X（X%）

**当前阶段**: X/X目标完成
**下一阶段准备**: [是/否]

💡 **建议**: [1-2条核心建议]
```

#### Imported: 数据源

### 主数据文件
- **文件路径**: `data/rehabilitation-tracker.json`
- **读取字段**:
  - `user_profile` - 用户档案和康复基本信息
  - `rehabilitation_goals` - 康复目标列表
  - `exercise_log` - 训练日志
  - `functional_assessments` - 功能评估记录
  - `phase_progression` - 阶段进展记录
  - `pain_diary` - 疼痛日记
  - `statistics` - 统计数据

### 日志数据文件
- **文件路径**: `data/rehabilitation-logs/YYYY-MM/YYYY-MM-DD.json`
- **读取字段**:
  - `daily_summary` - 日训练摘要
  - `exercise_sessions` - 训练详情
  - `pain_entries` - 疼痛记录
  - `assessments` - 评估记录
  - `notes` - 每日备注

#### Imported: 分析算法

### 1. 改善趋势分析

**线性回归分析：**
```
使用最小二乘法拟合功能改善趋势
改善速率 = (当前值 - 基线值) / 时间间隔
```

**改善模式识别：**
- 线性改善：稳定持续改善
- 阶梯式改善：平台期后快速改善
- 平台期：改善停滞
- 倒退：功能下降（需要关注）

### 2. 疼痛时序分析

**移动平均计算：**
```
7日移动平均疼痛 = sum(近7天疼痛) / 7
```

**疼痛趋势判断：**
- 改善：疼痛评分下降≥20%
- 稳定：疼痛评分变化<20%
- 加重：疼痛评分上升≥20%

### 3. 依从性计算

```
总体依从性 = (实际训练天数 / 计划训练天数) × 100%

训练类型依从性 = (某类型实际完成 / 某类型计划完成) × 100%
```

**依从性评价：**
- 优秀：≥90%
- 良好：75-89%
- 一般：60-74%
- 需改进：<60%

### 4. 目标达成预测

**线性外推：**
```
预测时间 = 当前日期 + ((目标值 - 当前值) / 改善速率)
```

**考虑因素：**
- 近期改善速率
- 平台期历史
- 训练依从性

### 5. 阶段转换准备度评估

**准备度评分：**
```
准备度 = (已达成阶段目标数 / 阶段目标总数) × 100%

准备度 ≥ 80%: 建议进入下一阶段
准备度 60-79%: 可考虑进入下一阶段，需谨慎
准备度 < 60%: 建议继续当前阶段
```

#### Imported: 安全与隐私

### 数据安全原则

1. **本地存储**
   - 所有康复数据仅存储在用户本地设备
   - 不上传至任何云端服务器
   - 不与第三方共享数据

2. **隐私保护**
   - 个人健康信息严格保密
   - 数据文件不包含个人身份信息
   - 用户完全控制数据访问权限

3. **数据完整性**
   - 原始数据不被修改
   - 分析结果基于真实数据
   - 支持数据导出和备份

### 医学安全边界

**系统不能做的事：**
- ❌ 不提供具体康复训练处方
- ❌ 不替代康复师专业指导
- ❌ 不诊断损伤或并发症
- ❌ 不调整康复阶段计划
- ❌ 不预测康复预后时间
- ❌ 不处理急性疼痛或损伤

**系统能做的事：**
- ✅ 提供数据分析和趋势识别
- ✅ 提供进展追踪和目标管理
- ✅ 提供一般性康复建议
- ✅ 提供专业康复就医提醒
- ✅ 记录训练和评估数据
- ✅ 生成康复进展报告

**重要提示：**
- 所有康复训练计划应遵循康复师指导
- 任何疼痛加重或功能倒退应及时就医
- 定期专业评估是康复成功的关键
- 系统建议仅供参考，不替代专业判断

#### Imported: 错误处理

### 数据读取错误

**错误类型1：文件不存在**
```
错误信息: "未找到康复数据文件，请先使用 /rehab start 开始康复追踪"
处理建议: 引导用户开始康复记录
```

**错误类型2：数据不足**
```
错误信息: "数据不足，至少需要3次功能评估或10天训练记录才能生成分析报告"
当前数据: X次评估，X天训练记录
处理建议: 建议用户继续记录更多数据
```

**错误类型3：数据结构错误**
```
错误信息: "数据文件结构异常，请检查数据完整性"
处理建议: 建议用户重新初始化康复档案
```

### 分析过程错误

**错误类型：计算异常**
```
错误信息: "数据分析过程中出现异常，请稍后重试"
处理建议: 记录错误日志，提供基础数据展示
```

### 输出生成错误

**错误类型：报告生成失败**
```
错误信息: "报告生成失败，请尝试简化查询条件或联系技术支持"
处理建议: 提供简化版报告或原始数据导出
```

#### Imported: 使用示例

### 示例1：查看康复进展

**用户输入：**
```
/rehab progress
```

**技能执行：**
1. 读取 rehabilitation-tracker.json
2. 读取近30天的康复日志
3. 分析功能改善趋势
4. 计算训练依从性
5. 评估目标达成情况
6. 生成进展报告

**输出：**
```
# 康复进展报告

#### Imported: 康复进展摘要

📊 整体进展: 良好
⏱️ 康复时长: 第6周（36天）
🎯 当前阶段: 第3阶段 - 强化期

#### Imported: 功能改善

- 膝关节屈曲: 30° → 120° (+90°) ✅
- 膝关节伸直: -10° → 0° (+10°) ✅
- 股四头肌肌力: 3/5 → 4/5 (提升1级) ✅
- 单腿站立: 5秒 → 30秒 (+25秒) ✅

#### Imported: 疼痛控制

- 平均疼痛: 1.5/10（良好控制）
- 疼痛趋势: 稳定 ✅

#### Imported: 训练依从性: 92%（优秀）



#### Imported: 目标达成: 8/14（57%）

- ✅ 已达成: 8个
- 🔄 进行中: 5个
- ⚠️ 滞后: 1个

#### Imported: 阶段进展

第3阶段进度: 2/5目标完成（40%）
下一阶段准备: 需要继续努力

💡 建议: 继续当前训练强度，重点关注股四头肌强化训练
```

### 示例2：分析功能改善趋势

**用户输入：**
```
/rehab trends rom
```

**技能执行：**
1. 提取所有ROM评估记录
2. 绘制ROM改善曲线（文字描述）
3. 计算改善速率
4. 预测达到目标时间
5. 识别改善模式

**输出：**
```
# 关节活动度（ROM）趋势分析

#### Imported: 膝关节屈曲

📈 改善趋势: 良好

时间线:
- 5/15: 30° (基线)
- 5/30: 70° (+40°)
- 6/15: 100° (+30°)
- 6/20: 120° (+20°)

改善速率: 8.6°/周
目标: 135°
预计达成: 2025-08-01（还需2周）
趋势: 持续改善 ✅

#### Imported: 膝关节伸直

✅ 已达成目标

时间线:
- 5/15: -10° (基线)
- 6/10: 0° (达成目标) ✅
- 6/20: 0° (维持)

改善速率: 2.5°/周
目标: 0°
达成日期: 2025-06-10
趋势: 维持目标 ✅

#### Imported: 建议

- 膝关节屈曲进展良好，继续保持
- 注意伸直维持训练，避免屈曲挛缩
- 预计2周内可达到屈曲目标
```

### 示例3：评估疼痛模式

**用户输入：**
```
/rehab analysis pain
```

**技能执行：**
1. 提取所有疼痛记录
2. 分析疼痛时序变化
3. 识别疼痛触发因素
4. 评估疼痛控制效果

**输出：**
```
# 疼痛模式分析

#### Imported: 疼痛趋势

📉 总体趋势: 改善中

- 基线疼痛: 5/10
- 当前疼痛: 2/10
- 改善: 3分（60%改善）✅

#### Imported: 时序模式

- 晨起疼痛: 1/10（轻度）
- 活动后疼痛: 2/10（轻度）
- 休息时疼痛: 0/10（无痛）

#### Imported: 触发因素识别

- 主要触发因素: 延长坐姿、上下楼梯
- 疼痛加剧活动: 下楼梯、深蹲
- 缓解因素: 休息、冰敷、抬高

#### Imported: 训练相关疼痛

- 训练时平均疼痛: 1.2/10（安全范围）
- 训练后疼痛: 2/10（快速缓解）
- 训练依从性不受疼痛影响 ✅

#### Imported: 建议

- 疼痛控制良好，继续当前训练强度
- 注意训练后休息和冰敷
- 避免疼痛加剧活动（深蹲、下楼梯）
- 如疼痛>4/10，及时就医评估
```

#### Imported: 相关性分析

### 与运动模块关联

**关联分析：**
- 康复训练与运动能力恢复的关联
- 康复训练强度与心率变化的关系
- 功能改善与日常活动量的关联

**示例：**
```
用户使用 /rehab analysis correlation fitness
技能读取:
- rehabilitation-tracker.json
- fitness-tracker.json
- 分析康复训练与运动指标的相关性
```

### 与睡眠模块关联

**关联分析：**
- 训练强度与睡眠质量的关系
- 疼痛水平与睡眠时长的关系
- 恢复期睡眠需求分析

### 与用药模块关联

**关联分析：**
- 止痛药使用趋势
- 用药与训练强度的关系
- 疼痛控制与用药依从性

#### Imported: 使用示例

### 场景1：新用户开始康复
```
用户: /rehab start acl-surgery 2025-05-01
系统: 初始化康复档案，设置基础目标，提供初始建议
技能: rehabilitation-analyzer（可选，用于初步评估）
```

### 场景2：记录每日训练
```
用户: /rehab exercise slr 3x15 pain2
系统: 记录训练数据，更新训练日志
技能: 不触发（仅记录）
```

### 场景3：查看进展报告
```
用户: /rehab progress
系统: 调用 rehabilitation-analyzer 技能
技能: 完整分析，生成进展报告
```

### 场景4：分析特定功能
```
用户: /rehab trends rom
系统: 调用 rehabilitation-analyzer 技能
技能: ROM专项分析，生成趋势报告
```

### 场景5：评估疼痛模式
```
用户: /rehab analysis pain
系统: 调用 rehabilitation-analyzer 技能
技能: 疼痛专项分析，识别模式和触发因素
```

---

**技能版本**: v1.0
**最后更新**: 2026-01-06
**维护者**: WellAlly Tech

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

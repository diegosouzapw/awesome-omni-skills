---
name: occupational-health-analyzer-v2
description: "\u804c\u4e1a\u5065\u5eb7\u5206\u6790\u6280\u80fd workflow skill. Use this skill when the user needs \u5206\u6790\u804c\u4e1a\u5065\u5eb7\u6570\u636e\u3001\u8bc6\u522b\u5de5\u4f5c\u76f8\u5173\u5065\u5eb7\u98ce\u9669\u3001\u8bc4\u4f30\u804c\u4e1a\u5065\u5eb7\u72b6\u51b5\u3001\u63d0\u4f9b\u4e2a\u6027\u5316\u804c\u4e1a\u5065\u5eb7\u5efa\u8bae\u3002\u652f\u6301\u4e0e\u7761\u7720\u3001\u8fd0\u52a8\u3001\u5fc3\u7406\u5065\u5eb7\u7b49\u5176\u4ed6\u5065\u5eb7\u6570\u636e\u7684\u5173\u8054\u5206\u6790\u3002 and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["occupational-health-analyzer-v2", "occupational-health-analyzer", "data-ai", "agents", "assets", "examples", "references", "scripts"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# 职业健康分析技能

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/occupational-health-analyzer` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# 职业健康分析技能

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 核心功能, 触发条件, 医学安全边界, 执行步骤, 输出格式, 1. 职业健康状况摘要.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- 需要评估工作相关健康风险、人机工程问题或职业健康趋势时使用。
- 任务涉及久坐、视屏终端、倒班、重复性劳损或工作压力等职业风险分析。
- 用户请求职业健康评估、工作环境改进建议或职业病风险预警时使用。
- Use when the request clearly matches the imported source intent: 分析职业健康数据、识别工作相关健康风险、评估职业健康状况、提供个性化职业健康建议。支持与睡眠、运动、心理健康等其他健康数据的关联分析。.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: 核心功能

职业健康分析技能提供全面的职业健康数据分析功能，帮助用户追踪工作相关健康问题、识别职业健康风险、评估工作环境人机工程水平和优化职业健康。

**主要功能模块：**

1. **职业健康风险评估** - 久坐、视屏终端、倒班工作、重复性劳损、工作压力等多维度风险评估
2. **工作相关问题追踪** - 颈肩腰腿痛、眼疲劳、腕管综合征等症状监测
3. **人机工程评估** - 工作站、椅子、显示器、键盘、环境等全方位评估
4. **职业病筛查** - 基于工作类型的职业病风险评估和筛查建议
5. **趋势分析** - 症状发展、改善效果、风险变化趋势
6. **关联分析** - 与睡眠、运动、心理健康、慢性病模块的关联分析
7. **个性化建议** - 工作姿势、休息提醒、设备建议、环境优化
8. **预警系统** - 高风险模式、症状恶化、职业病风险预警

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @occupational-health-analyzer-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/occupational-health-analyzer-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/occupational-health-analyzer-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @occupational-health-analyzer-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/occupational-health-analyzer`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: 触发条件

技能在以下情况下自动触发：

1. 用户使用 `/work trend` 查看职业健康趋势
2. 用户使用 `/work status` 查看综合健康状态
3. 用户使用 `/work recommend` 获取改进建议
4. 用户使用 `/work assess` 进行综合评估
5. 用户使用 `/work issue` 记录问题后的分析
6. 用户使用 `/work ergonomic` 进行人机工程评估后的分析

#### Imported: 医学安全边界

**本技能不能做的事：**
- ❌ 不进行职业病诊断
- ❌ 不出具职业病诊断证明
- ❌ 不替代工作场所健康监护
- ❌ 不预测疾病发展
- ❌ 不处理急性健康危机

**本技能能做的事：**
- ✅ 职业健康风险评估和筛查
- ✅ 工作相关症状识别和追踪
- ✅ 人机工程评估和改进建议
- ✅ 职业病风险预警
- ✅ 工作环境改善建议
- ✅ 健康记录保存（就医时参考）
- ✅ 与其他健康数据的关联分析

#### Imported: 执行步骤

### 第1步：数据读取

读取职业健康数据文件：
- `data-example/occupational-health-tracker.json` - 主职业健康档案

**数据验证：**
- 检查文件是否存在
- 验证数据结构完整性
- 确认有足够的数据点进行分析

### 第2步：职业健康风险评估

#### 久坐风险评估（Sedentary Risk Score）

**评分维度（每个维度0-10分）**：

1. **每天久坐时间** (sedentary_time_daily)
   - >8小时：10分
   - 6-8小时：7分
   - 4-6小时：4分
   - <4小时：1分

2. **休息频率** (break_frequency)
   - 无休息：10分
   - 每3小时+：8分
   - 每2小时：5分
   - 每小时：2分

3. **每周运动时间** (weekly_exercise_minutes)
   - 0分钟：10分
   - <60分钟：7分
   - 60-150分钟：4分
   - >150分钟：1分

4. **现有症状** (existing_symptoms_severity)
   - 严重症状：10分
   - 中度症状：7分
   - 轻度症状：4分
   - 无症状：1分

**总分计算**：
```
总分 = 久坐时间 + 休息频率 + 运动时间 + 现有症状
范围：4-40分
```

**风险等级判定**：
- 低风险：4-13分
- 中风险：14-26分
- 高风险：27-40分

#### 视屏终端风险评估（VDT Risk Score）

**评分维度（每个维度0-10分）**：

1. **每天屏幕时间** (screen_time_daily)
   - >8小时：10分
   - 6-8小时：7分
   - 4-6小时：4分
   - <4小时：1分

2. **20-20-20法则遵守** (rule_20_20_20_compliance)
   - 从不遵守：10分
   - 偶尔遵守：6分
   - 经常遵守：3分
   - 总是遵守：1分

3. **照明条件** (lighting_quality)
   - 很差：10分
   - 较差：7分
   - 一般：4分
   - 良好：1分

4. **眼部症状** (eye_symptoms_severity)
   - 严重症状：10分
   - 中度症状：7分
   - 轻度症状：4分
   - 无症状：1分

**总分计算和风险等级判定同久坐风险**

#### 综合风险评估

**综合风险等级计算**：
```
综合风险分数 = max(久坐风险, 视屏风险, 倒班风险, 劳损风险, 压力风险)

如果有多个高风险因素（≥27分），综合风险等级上调一级
如果有3个及以上中风险因素（14-26分），综合风险等级上调一级
```

### 第3步：人机工程评估

#### 评估维度和评分

**椅子评估**（0-20分）：
```
- 可调节性（0-5分）
- 腰椎支撑（0-5分）
- 座椅深度（0-5分）
- 扶手（0-5分）
```

**显示器评估**（0-20分）：
```
- 高度（0-7分）
- 距离（0-7分）
- 角度（0-6分）
```

**键盘和鼠标评估**（0-20分）：
```
- 键盘位置（0-5分）
- 鼠标位置（0-5分）
- 手腕支撑（0-10分）
```

**工作台评估**（0-20分）：
```
- 高度（0-10分）
- 空间（0-10分）
```

**环境评估**（0-20分）：
```
- 照明（0-7分）
- 噪音（0-7分）
- 温度（0-6分）
```

**总分计算**：
```
总分 = 椅子 + 显示器 + 键盘鼠标 + 工作台 + 环境
范围：0-100分

评分等级：
- 优秀：0-20分
- 良好：21-40分
- 一般：41-60分
- 较差：61-80分
- 差：81-100分
```

### 第4步：职业病筛查

#### 基于工作类型的筛查推荐

**办公室工作**：
```
必查项目：
- 视力测试（每年1次）
- 肌肉骨骼评估（每年1次）
```

**体力劳动**：
```
必查项目：
- 肌肉骨骼评估（每年1次）
- 肺功能检查（粉尘环境每年1次）
```

**倒班工作**：
```
必查项目：
- 睡眠质量评估（每6个月1次）
- 心理健康筛查（每年1次）
```

**噪音环境工作**：
```
必查项目：
- 听力测试（每年1次）
```

**粉尘/化学环境工作**：
```
必查项目：
- 肺功能检查（每年1次）
- 皮肤病筛查（每年1次）
```

### 第5步：关联分析

#### 睡眠-职业健康关联
- 倒班工作与睡眠质量的相关性
- 睡眠不足与工作相关症状的关系

#### 运动-职业健康关联
- 久坐工作与运动量的关系
- 运动与肌肉骨骼症状的关系

#### 心理健康-职业健康关联
- 工作压力与心理状态的关系
- 职业健康问题与心理症状的关联

### 第6步：生成报告

输出包括：
- 职业健康状况摘要
- 风险评估结果和趋势
- 工作相关问题分析
- 人机工程评估结果
- 职业病筛查建议
- 与其他健康因素的关联分析
- 预警信息（如适用）
- 个性化建议和行动计划

#### Imported: 输出格式

### 职业健康分析报告结构

```markdown
# 职业健康分析报告

**报告日期**: YYYY-MM-DD
**分析周期**: YYYY-MM-DD 至 YYYY-MM-DD
**数据完整性**: 良好

⚠️ **重要提示**：本报告仅供参考，不构成职业病诊断。

---

#### Imported: 1. 职业健康状况摘要

[整体评价：优秀/良好/一般/需改进/高风险]
- 综合风险等级：[低/中/高]
- 职业健康评分：X/100
- 人机工程评分：X/100
- 活跃问题数：X个
- 整体趋势：改善/稳定/恶化

#### Imported: 2. 风险评估结果

### 久坐风险评估
**风险等级**: 🟢 低风险 | 🟡 中风险 | 🔴 高风险
**风险评分**: X/40

**建议**: [具体建议]

### 视屏终端风险评估
**风险等级**: 🟢 低风险 | 🟡 中风险 | 🔴 高风险
**风险评分**: X/40

**建议**: [具体建议]

#### Imported: 3. 工作相关问题分析

### 当前活跃问题
- [问题1]: 严重程度、频率、持续时间
- [问题2]: 严重程度、频率、持续时间

### 症状趋势
- 改善的问题
- 稳定的问题
- 恶化的问题 ⚠️

#### Imported: 4. 人机工程评估

**人机工程评分**: X/100
**评分等级**: 优秀/良好/一般/较差/差

### 改进建议
- 高优先级建议
- 中优先级建议
- 低优先级建议

#### Imported: 5. 职业病筛查

### 推荐筛查
- [筛查项目1] - 建议时间
- [筛查项目2] - 建议时间

#### Imported: 6. 综合建议

### 立即行动
- [行动项]

### 本周行动计划
- [行动项1]
- [行动项2]

### 预防措施
- [预防措施列表]

---

**报告生成时间**: YYYY-MM-DD HH:MM:SS
⚠️ **免责声明**：本报告仅供参考，不构成职业病诊断或治疗建议。
```

#### Imported: 错误处理

### 数据文件不存在
```
错误：未找到职业健康数据文件
建议：请先使用 /work assess 命令创建数据
```

### 数据不足
```
警告：数据不足以进行趋势分析
建议：至少需要3次评估记录
```

### 高风险预警
```
🔴 职业病高风险警告

检测到以下高风险因素：
- [列出高风险因素]

建议行动：
1. 立即就医，进行职业病诊断
2. 咨询职业医学专科医生
3. 考虑工作调整
```

#### Imported: 数据源说明

**主要数据源**：
- `data-example/occupational-health-tracker.json` - 职业健康主数据

**关联数据源**：
- `data-example/sleep-tracker.json` - 睡眠数据
- `data-example/fitness-tracker.json` - 运动数据
- `data-example/mental-health-tracker.json` - 心理健康数据

---

**技能版本**: v1.0.0
**最后更新**: 2025-01-08
**维护者**: WellAlly Tech
